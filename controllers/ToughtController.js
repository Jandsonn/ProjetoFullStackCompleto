const Tought = require('../models/Tought');
const User = require('../models/User');

const { Op } = require('sequelize')

module.exports = class ToughtController {
    static async showToughts(req, res) {

        let search = ''

        if(req.query.search) {
            search = req.query.search
        }


        const toughtsData = await Tought.findAll({
            include: User,
            where: {
                title: { [Op.like]: `%${search}%` },
            },
        })

        const toughts = toughtsData.map((result) => result.get({ plain: true }))

        let toughtsQty = toughts.length
        
        if(toughtsQty === 0) {
            toughtsQty = false
        }


        res.render('toughts/home', { toughts, search, toughtsQty })

    }
    static async dashboard(req, res) {
        const userId = req.session.userid

        const user = await User.findOne({
            where: {
                id: userId,
            },
            include: Tought,
            plain: true,
        })

        //check if user exists
        if (!user) {
            res.redirect('/login')
        }


        const toughts = user.Toughts.map((result) => result.dataValues)

        //Verifu value tarefa ex: if tarefa === 1 true else false 
        let emptyToughts = false

        if (toughts.length === 0) {
            emptyToughts = true
        }

        console.log(toughts)
        res.render('toughts/dashboard', { toughts, emptyToughts })
    }

    static createTought(req, res) {
        res.render('toughts/create')
    }

    static async createToughtSave(req, res) {

        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }

        try {
            await Tought.create(tought)

            req.flash('message', 'Pensamento criado com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch (error) {
            console.log('Aconteceu um erro aqui :(' + error)

        }
    }

    static async removeTought(req, res) {
        const id = req.body.id
        const UserId = req.session.userid

        try {
            await Tought.destroy({ where: { id: id, UserId: UserId } })

            req.flash('message', 'Pensamento removido com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch (error) {
            console.log('Aconteceu um erro aqui :(' + error)
        }


    }

    static async updateTought(req, res) {

        const id = req.params.id
        const tought = await Tought.findOne({ where: { id: id }, raw: true })

        res.render('toughts/edit', { tought })

    }

    static async updateToughtSave(req, res) {

        const id = req.body.id

        const tought = {
            title: req.body.title
        }
        try {
            await Tought.update(tought, { where: { id: id } })
            req.flash('message', 'Pensamento atualizado com sucesso!')

            req.session.save(() => {
                res.redirect('/toughts/dashboard')
            })

        } catch (error) {
            console.log("Aconteceu um erro: " + error)

        }


    }


}