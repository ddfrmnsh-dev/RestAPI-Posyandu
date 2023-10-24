import { Request, Response, NextFunction  } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getPetugas(req:Request, res:Response, next:NextFunction) {
    try {
        const data = await prisma.petugas.findMany()
        res.status(200).json(data)
        console.log("datanya",data)
    } catch (e) {
        console.log("Error", e)
        res.json({
            error : e
        })
    }
}

const insertPetugas = async (req: Request, res: Response, next: NextFunction) => {
    
    try{
        const { nama_petugas, jabatan, kontak, alamat } = req.body

        console.log("req body", req.body)
        const result = await prisma.petugas.create({
            data: {
                nama_petugas,
                jabatan,
                kontak,
                alamat
            }
        })
        res.json(result)
        console.log("datanya", result)
    } catch(e){
        next(e)
        console.log(e)
        res.status(500).json(e)
    }

}

async function updatePetugas(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params
        console.log("params" ,id)
        
        const data = await prisma.petugas.update({
            where: {id: Number (id)},
            data: {...req.body}
        })

        res.json(data)
        console.log("update data", data)
    } catch (e) {
        next(e)
        console.log(e)
        res.status(500).json(e)
    }
    
}

async function deletePetugas(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params

        const data = await prisma.petugas.delete({
            where: {id: Number(id)}
        })
        console.log(data)
        res.status(200).json({
            message: `Succesfully delete Petugas ${data.nama_petugas}`
        })

    } catch (e) {
        next(e)
        console.log(e)
        res.status(500).json(e)
    }
}

async function insertImunisasi(req:Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const { kd_imunisasi, jenis_imunisasi, deskripsi, dosis} = req.body
        console.log("check", req.body)

        const data = await prisma.imunisasi.create({
            data :{
                kd_imunisasi,
                jenis_imunisasi,
                deskripsi,
                dosis
            }
        })

        res.status(200).json(data)
    } catch (e) {
        next(e)
        console.log("Error :",e)
        res.send(e)
    }
}

export default { 
    getPetugas, 
    insertPetugas,
    updatePetugas,
    insertImunisasi,
    deletePetugas  
}