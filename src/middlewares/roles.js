// check that user is logged in before transfering to next
export function isAdmin ({ next, store }){

	// if(store.logged){
	// 	return next()
	// }

     // return next({
     //    name: 'login'
     // })

     return next()

}

export function isUser ({ next, store }){

	// if(store.logged){
	// 	return next()
	// }

     return next({
        name: 'dashboard'
     })

}


export function isCustomer ({ next, store }){

	// if(store.logged){
	// 	return next()
	// }

     // return next({
     //    name: 'login'
     // })

}