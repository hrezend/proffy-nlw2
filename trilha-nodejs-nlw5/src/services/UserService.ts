import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserCreate{
    email: string;
}

class UserService{
    async create({email} : IUserCreate){
        const usersRepository = getCustomRepository(UsersRepository);

        //Verifica se o usuario ja existe no repositorio, e caso exista, retorna-o
        const userAlreadyExists = await usersRepository.findOne({email});
        if(userAlreadyExists){
            return userAlreadyExists;
        }

        //Caso nao exista, criamos, salvamos e retornamos
        const user = usersRepository.create({email});
        await usersRepository.save(user);
        return user;

    }
}

export {UserService}