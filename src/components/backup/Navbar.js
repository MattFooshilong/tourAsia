import React from 'react';



function Navbar(){
    return(
        <div>  
            <header>
            <nav class="navbar navbar-expand-sm bg-light navbar-dark ">
                {/*Brand*/}
                <a class="navbar-brand text-left text-dark pl-3" href="#index.html">TravelAsia</a>
                {/*Hamburger button on phone screens*/}
                <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                 {/*Links*/}
                <div class="navbar-collapse collapse w-100" id="collapsingNavbar">
                    <ul class="navbar-nav ml-auto w-100 justify-content-end">
                    {/*Social media icons*/}
                    <div class="d-flex flex-wrap">
                        <li class="nav-item m-1 mt-2"><a href="#" target="_blank"><img src="twitter.png" alt="twitter icon" width="20" height="20"/></a></li>

                        <li class="nav-item m-1 mt-2"><a href="#" target="_blank"><img src="instagram.png" alt="instagram icon" width="20" height="20"/></a></li>

                        <li class="nav-item m-1 mt-2"><a href="#" target="_blank"><img src="fb.png" alt="facebook icon" width="18" height="18"/></a></li>
                        
                    </div>

                    <li class="nav-item"><a class="nav-link text-dark" href="#footer">About</a></li>
                    <li class="nav-item navbar-text text-dark">Email: TravelAsia@travelholdings.com</li>
                    
                    
                </ul>
            </div>
        </nav>
    </header>
</div>
    )
}

export default Navbar;