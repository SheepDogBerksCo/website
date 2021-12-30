$(() => {
    const cartIcon = $("#cart-count");

    Snipcart.events.on('snipcart.initialized', (state) =>{
        cartIcon.html(Snipcart.store.getState().cart.items.count);
    });

    Snipcart.store.subscribe(() => {
        cartIcon.html(Snipcart.store.getState().cart.items.count);
    });

})