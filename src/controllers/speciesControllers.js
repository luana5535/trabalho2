import Species from '../models/speciesModel.js'

export const store = async (req, res) => {
    try{
        const species = await Species.create(req, body)
        return res.status(200).json(species)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const index = async (req,res) => {
    try{
        const speciess  = await Species.find().exec()
        return res.status(200).json(speciess)
    }catch{
        return res.status(400).json({message: erro.message})
    }
}

export const update = async (req, res) => {
    try{
        const species = await Species.findByIdUpdate (req.params.id, res.body).exec()
        return res.status(200).json(species)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}

export const destroy = async (req, res) => {
    try{
        const species = await Species.findByIdDelete (req.params.id).exec()
        return res.status(200).json(species)
    }catch{
        return res.status(400).json({message: erro.menssage})
    }
}
