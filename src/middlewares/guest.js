// check that user is not logged in before sending to login and registration pages etc
export default function guest ({ next, store }){
 	
 	// if(store.logged){
		 // return next({
	  //       name: 'dashboard'
	  //    })
	// }

	// proceed to non -logged page
     // return next()


   	return next({
        name: 'login'
    })
}