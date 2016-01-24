# jaorsh.github.io  |  BETA
Pantone color palette inspired personal portfolio webapp. Auth. Josh Hare joshuadhare@gmail.com.

<h2>About</h2>

<p>This site serves as a portfolio page for my work as software developer, and pantone color experiment. It aims to be visually appealing, mobile responsive and interesting.
</p>
<h4>Live at <a href="http://jaorsh.github.io">http://jaorsh.github.io</a>

<h2>
Build process</h2>
<h4>Webpack</h4>
<p>We use webpack as a JS builder and dependency retriever reading from `package.json`. It provides a node like front end modular solution for requiring javascript libraries, and turns a spaghetti of dependencies and lose JS files into easy to manage static assets.</p>
<h4>Gulp</h4>
<p>Gulp is used to automate our build process. It generates our javascript we distribute in `dist/app.min.js`. As the filename suggests, the outputted javascript file has all of the scripts needed to run the app. These are minified and concatenated together automatically with gulp. The gulp config leverages `webpack` to use a node like modular javascript require model, and can be found at `gulpfile.js`.</p>
<h4>Jekyll</h4>
<p>This webapp is served with Jekyll through GitHub pages. Jekyll is simple to use, either through GitHub or on a local server, you can specify `_templates` and `_includes` to provide structural markup to your static html pages. We are only using includes - header and footer - in this project, as all pages use the same template. You can find the header.html and footer.html in the `_includes` folder. </p>
<p>Jekyll also can serve clean URL's by structuring index.html files within folders with the given name. http://jaorsh.github.io/about/index.html is  http://jaorsh.github.io/about/ on the front end. In this webapp we are using <a href="https://github.com/browserstate/history.js">History JS</a> to retrieve our pages and populate clean urls, as requests are fired off with Ajax. Still, for manual navigation to say, /about, this feature of Jekyll is great!</p>


<h2>Other Libraries Used</h2>
<ul>
<li><a href="https://github.com/browserstate/history.js">History JS</a></li>
<li><a href="https://github.com/lokku/jquery-nstslider">jQuery nstSlider</a></li>
<li><a href="https://github.com/rstacruz/jquery.transit">jQuery Transit</a></li>
<li><a href="https://github.com/Mythli/jquery.ytLoad">jQuery ytLoad</a></li>
<li><a href="https://github.com/dimsemenov/Magnific-Popup">jQuery Magnific Popup</a></li>
<li><a href="https://github.com/niklasvh/html2canvas">html2canvas with filesaver.js</a></li>
<li>Javascript palette manipulations - functions.js - The heart of this project</li>
</ul>

<h3>Future</h3>
<p>Make pantone javascript modular to run as a plugin on a given dom element.<p>
<p>Remove jQuery from palette generator altogether</p>
<p>Music?</p>
<p>Graphics?</p>
<p>Content?</p>
<p>Idea? Email me at joshuadhare@gmail.com</p>
