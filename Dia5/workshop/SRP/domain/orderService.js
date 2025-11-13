export class OrderService{
    constructor({validator,calc,repo,notifier}){
        this.validator=validator;
        this.calc=calc;
        this.repo=repo;
        this.notifier=notifier;
    }
    createOrder({userEmail,courseId,basePrice,coupon}){
        this.validator.validate({userEmail,courseId,basePrice});
        const finalPrice = this.calc.compute(basePrice,coupon);
        const saved = this.repo.save({
            userEmail,courseId,basePrice,finalPrice,
            createdAt:new Date().toISOString()
        });
        this.notifier.notify(userEmail,"Tu compra",`Gracias por comprar ${courseId}. Pagaste ${finalPrice}`);
        return saved;
    }
}