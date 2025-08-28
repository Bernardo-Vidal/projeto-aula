import express from 'express'
const router = express.Router()
import AlunoController from '../controllers/AlunoController.js'
const controle = new AlunoController()

const caminhobase = 'aluno/'

router.get(`/${caminhobase}add`, controle.openAdd)
router.post(`/${caminhobase}add`, controle.add)
router.get(`/${caminhobase}lst`, controle.list)
router.get(`/${caminhobase}edt/:id`, controle.openEdt)
router.post(`/${caminhobase}edt/:id`, controle.edt)
export default router
