import clienteAxios from "./axios";

const axiosSimple = () => {
    if(true){
        clienteAxios.defaults.headers.common['Authorization'] = `Bearer`
    }else{
        delete clienteAxios.defaults.headers.common['Authorization'];
    }
}

export default axiosSimple;
