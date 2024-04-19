import React from 'react'


export const Navbar = () => {
  return (
    <header id="navbar-spy" className
    ="header header-1 header-transparent header-bordered header-fixed">

			<nav id="primary-menu" className
      ="navbar navbar-fixed-top">
				<div className
        ="container">
					<div className
          ="navbar-header">
						<button type="button" className
            ="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
							<span className
              ="sr-only">Toggle navigation</span>
							<span className
              ="icon-bar"></span>
							<span className
              ="icon-bar"></span>
							<span className
              ="icon-bar"></span>
						</button>
						<a className

            ="logo" href="/"></a>


							<img className
              ="logo-dark" src="assets/images/logo/logo-dark.png" alt="appy Logo"/>
							<img className
              ="logo-light" src="assets/images/logo/logo-light.png" alt="appy Logo" />
						
					</div>
					<div className
          ="collapse navbar-collapse pull-right" id="navbar-collapse-1">
						<ul className
            ="nav navbar-nav nav-pos-right navbar-left nav-split">
							<li className

              ="active"><a data-toggle="collapse" data-target=".navbar-collapse" data-scroll="scrollTo" href="#home">home</a>


							</li>
							<li><a data-toggle="collapse" data-target=".navbar-collapse" data-scroll="scrollTo" href="#feature">feature</a>
							</li>
							<li><a data-toggle="collapse" data-target=".navbar-collapse" data-scroll="scrollTo" href="#screenshots">screenshots</a>
							</li>
							<li><a data-toggle="collapse" data-target=".navbar-collapse" data-scroll="scrollTo" href="#reviews">reviews</a>
							</li>
							<li><a data-toggle="collapse" data-target=".navbar-collapse" data-scroll="scrollTo" href="#cta">download</a>

							</li>
						</ul>
					</div>
					{/* <!--/.nav-collapse --> */}
				</div>
			</nav>
		</header>
  )
}
