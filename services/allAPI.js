import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

export const addNewBookAPI = async(newBook) =>{
    return await commonAPI("POST",`${SERVER_URL}/allBooks`,newBook)
}

export const getAllBooksAPI = async() =>{
    return await commonAPI("GET",`${SERVER_URL}/allBooks`,"")
}

export const deleteABookAPI = async(bookId) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/allBooks/${bookId}`,{})
}

export const getABookAPI = async(bookid) =>{
    return await commonAPI("GET",`${SERVER_URL}/allBooks/${bookid}`,"")
}

export const updateABookAPI = async(bookid,bookdetails) =>{
    return await commonAPI("PUT",`${SERVER_URL}/allBooks/${bookid}`,bookdetails)
}


