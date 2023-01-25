<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="icon" href="images-cv/JJL-logo19-black.png" type="image/icon type">
<!--     <script src="script/script.js"></script> -->
	<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <header class="shadow-lg fixed top:0">
		<div class=" bg-blue-500 py-4 mx-4 flex flex-row justify-between">
            <div id="id-name"class="flex mx-2">
                <div id="div">
                    <ul class="flex">
                        <li>
                            <h2 class="mx-2">Jules JEAN-LOUIS</h2>
                        </li>
                        <li>
                            <h2 class="mx-2">Developper Web</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <nav class="flex">
                <ul class="flex">
                    <li class="mx-2">
                        <a href="#projet">Projet</a>
                    </li>
                    <li class="mx-2">
                        <a href="#projet">Formation</a>
                    </li>
                    <li>
                        <a href="#projet">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="scrollbar"></div>
	</header>
    <main>

    </main>
</body>
<script>
    const scrollbar = document.getElementById("scrollbar");

// Get the total height of the document
const totalHeight = document.body.scrollHeight - window.innerHeight;

// Add an event listener for the scroll event
window.addEventListener("scroll", function(){
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;
  
  // Calculate the percentage of the page that has been scrolled
  const scrollPercent = (scrollPosition / totalHeight) * 100;
  
  // Update the width of the scrollbar div
  scrollbar.style.width = scrollPercent + "%";
});

</script>
<style>
    #scrollbar {
  width: 0%;
  height: 5px;
  background-color: blue;
  position: fixed;
  top: 0;
  left: 0;
}
main {
  margin-top: 100px;
  height: 250vh;
}
</style>
</html>