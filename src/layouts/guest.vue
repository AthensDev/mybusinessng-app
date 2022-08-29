<template>
	<!-- Top Bar  -->
    <!-- <GuestHeader></GuestHeader> -->

    <div class="mx-auto" style="background: url('images/web_login_bg.jpg')">
    	<div class="flex flex-row">
	     	<!-- Menu Bar -->
		    

		    <!-- Main content area -->
		    <main class="workspace h-screen">
		        <router-view />
		    </main>
	 	</div>
	</div>

    <!-- Footerd  -->
    <!-- <Footer></Footer> -->
    <!-- <CustomScriptLoader></CustomScriptLoader> -->
    
</template>
<route>
{
  meta: {
    middleware: []
  }
}
</route>

