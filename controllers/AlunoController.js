import Aluno from '../models/aluno.js'

export default class AlunoController{

    constructor(caminhoBase = 'aluno/'){
        this.caminhoBase = caminhoBase
        this.openAdd = async(req,res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req,res)=>{
            await Aluno.create({
                nome: req.body.nome,
                matricula: req.body.matricula
            })
            res.redirect('/' + caminhoBase + 'add')
        }
    }
}