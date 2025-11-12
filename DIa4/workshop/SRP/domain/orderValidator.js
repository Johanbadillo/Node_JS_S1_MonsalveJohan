export class OrderValidator{
    validate({userEmail, courseId, basePrice}){
        if (!userEmail|| !userEmail.includes("@")) throw new Error("Email invalido");
        if (!courseId) throw new Error("courseId necesario");
        if (!courseId) throw new Error("courseId necesario");

    }
}