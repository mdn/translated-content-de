---
title: "Herausforderung: Grundlegendes Layoutverständnis"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

Diese Herausforderung wird Ihr Wissen über die Layout-Funktionen testen, die wir bisher im Modul behandelt haben, nämlich `flexbox`, `floats`, `grid` und `positioning`. Am Ende werden Sie ein Webseitenlayout mit all diesen grundlegenden Werkzeugen entwickelt haben.

## Ausgangspunkt

Wir möchten, dass Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise möchten Sie das Beispiel in einem vollständigen Browserfenster betrachten, um sicherzustellen, dass die Layout-Funktionen wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `layout-challenge`.
2. Erstellen Sie in diesem Ordner eine Datei namens `index.html` und fügen Sie den folgenden Inhalt ein:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Layout Task</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>

     <body>
       <div class="logo">My exciting website!</div>

       <nav>
         <ul>
           <li><a href="">Home</a></li>
           <li><a href="">Blog</a></li>
           <li><a href="">About us</a></li>
           <li><a href="">Our history</a></li>
           <li><a href="">Contacts</a></li>
         </ul>
       </nav>

       <main class="grid">
         <article>
           <h1>An Exciting Blog Post</h1>
           <img src="images/square6.jpg" alt="placeholder" class="feature" />
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
             justo at erat egestas porttitor vel nec tortor. Mauris in molestie
             ipsum. Vivamus diam elit, ornare ornare nisi vitae, ullamcorper
             pharetra ligula. In vel lacus quis nulla sollicitudin pellentesque.
           </p>

           <p>
             Nunc vitae eleifend odio, eget tincidunt sem. Cras et varius justo.
             Nulla sollicitudin quis urna vitae efficitur. Pellentesque
             hendrerit molestie arcu sit amet lacinia. Vivamus vulputate sed
             purus at eleifend. Phasellus malesuada sem vel libero hendrerit,
             sed finibus massa porta. Vestibulum luctus scelerisque libero, sit
             amet sagittis eros sollicitudin ac. Class aptent taciti sociosqu ad
             litora torquent per conubia nostra, per inceptos himenaeos.
           </p>

           <p>
             Phasellus tincidunt eros iaculis, feugiat mi at, eleifend mauris.
             Quisque porttitor lacus eu massa condimentum, eu tincidunt nisl
             consequat. Nunc egestas lacus dolor, id scelerisque ante tincidunt
             ac. In risus massa, sodales ac enim eu, iaculis eleifend lorem.
           </p>

           <p>
             Maecenas euismod condimentum enim, non rhoncus neque tempor ut.
             Vestibulum eget nisi ornare, vehicula felis id, aliquet nibh. Donec
             in mauris in diam aliquam commodo nec ac nunc. Aliquam nisl risus,
             eleifend a iaculis id, tempor vel tortor. Nam ullamcorper dictum
             tellus id rhoncus. Sed quis nulla in mi aliquam euismod nec eu
             metus.
           </p>

           <p>
             Nam orci nulla, convallis aliquet ante ut, lobortis hendrerit
             risus. Nulla malesuada porta turpis in consequat. Duis suscipit
             nulla a mauris pellentesque vehicula. Fusce euismod, mi malesuada
             venenatis vestibulum, metus erat faucibus dui, vel rutrum turpis
             nibh ut diam.
           </p>

           <p>
             Nam ornare et mauris eget tincidunt. Nam ornare et mauris eget
             tincidunt. Donec et ipsum a orci elementum commodo et ut ex.
             Vivamus porttitor sem in purus maximus, eu imperdiet felis
             lobortis.
           </p>

           <p>
             Pellentesque ullamcorper dolor ut ullamcorper convallis. Duis a
             orci aliquet, pretium neque ut, auctor purus. Proin viverra
             tincidunt nisi id fringilla. Maecenas interdum risus in ultricies
             finibus. Vestibulum volutpat tincidunt libero, a feugiat leo
             suscipit in. Sed eget lacus rutrum, semper ligula a, vestibulum
             ipsum. Mauris in odio fringilla, accumsan eros blandit, mattis
             odio. Ut viverra mollis augue, vitae ullamcorper velit hendrerit
             eu. Curabitur mi lacus, condimentum in auctor sed, ornare sed leo.
           </p>
         </article>

         <aside>
           <h2>Photography</h2>
           <ul class="photos">
             <li><img src="images/square1.jpg" alt="placeholder" /></li>
             <li><img src="images/square2.jpg" alt="placeholder" /></li>
             <li><img src="images/square3.jpg" alt="placeholder" /></li>
             <li><img src="images/square4.jpg" alt="placeholder" /></li>
             <li><img src="images/square5.jpg" alt="placeholder" /></li>
           </ul>
         </aside>
       </main>
     </body>
   </html>
   ```

3. Erstellen Sie in dem Ordner eine Datei namens `style.css` und fügen Sie den folgenden Inhalt ein:

   ```css
   * {
     box-sizing: border-box;
   }

   body {
     background-color: white;
     color: #333333;
     margin: 0;
     font: 1.2em / 1.6 sans-serif;
   }

   img {
     max-width: 100%;
     display: block;
     border: 1px solid black;
   }

   .logo {
     font-size: 200%;
     padding: 50px 20px;
     margin: 0 auto;
     max-width: 980px;
   }

   .grid {
     margin: 0 auto;
     max-width: 980px;
   }

   nav {
     background-color: black;
     padding: 0.5em;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   nav a {
     color: white;
     text-decoration: none;
     padding: 0.5em 1em;
   }

   .photos {
     list-style: none;
     margin: 0;
     padding: 0;
   }

   .feature {
     width: 200px;
   }
   ```

4. Erstellen Sie in dem Ordner einen Unterordner namens `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
5. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um bereit zum Testen zu sein. Der Ausgangspunkt der Seite hat ein einfaches Styling, aber kein Layout und sollte ungefähr so aussehen:

   ![Ausgangspunkt der Layoutaufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blogpost-Titel und dem Inhalt des Beitrags. Zwischen dem Blogtitel und dem Bloginhalt gibt es ein Foto, das linksbündig ist.](layout-task-start.png)

## Projekt-Briefing

Ihnen wurden einige rohe HTML-, grundlegende CSS- und Bilder bereitgestellt – jetzt müssen Sie ein Layout für das Design erstellen.

Die Aufgaben, die Sie erreichen müssen, sind:

1. Zeigen Sie die Navigationselemente in einer Reihe an, mit einem gleichmäßigen Abstand zwischen den Elementen und einem geringeren Abstand an beiden Enden der Reihe.
2. Gestalten Sie die Navigationsleiste so, dass sie sich normal mit dem Inhalt scrollt und dann am oberen Rand des Viewports anhaftet, wenn sie diesen erreicht.
3. Veranlassen Sie das "Feature"-Bild innerhalb des Artikels, dass Text rechts und unten um das Bild herum fließt, mit einem geeigneten Abstand zwischen dem Bild und dem Text.
4. Zeigen Sie die {{htmlelement("article")}}- und {{htmlelement("aside")}}-Elemente als zweispaltiges Layout an, wobei ersteres dreimal so breit ist wie letzteres. Die Spalten sollten eine flexible Größe haben, sodass, wenn das Browserfenster schmaler wird, die Spalten schmaler werden. Fügen Sie einen 20-Pixel-Abstand zwischen den beiden Spalten ein.
5. Die Fotografien sollten als zweispaltiges `grid` mit gleich großen Spalten und einem Abstand von 5 Pixeln zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

- Sie müssen das HTML nicht bearbeiten, um diese Herausforderung abzuschließen.
- Es gibt einige Möglichkeiten, einige der Aufgaben im Projekt-Briefing zu erreichen, und es gibt oft nicht den einen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, was am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout-Aufgaben-Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite gibt es einen Blogbeitrag: Ein Blogbeitragstitel gefolgt vom Beitragstext. Der Bloginhalt fließt um ein Foto, das linksbündig ist. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Raster angeordnet sind.](layout-task-complete.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Das fertige CSS sieht folgendermaßen aus:

```css
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  margin: 0;
  font: 1.2em / 1.6 sans-serif;
}

img {
  max-width: 100%;
  display: block;
  border: 1px solid black;
}

.logo {
  font-size: 200%;
  padding: 50px 20px;
  margin: 0 auto;
  max-width: 980px;
}

.grid {
  margin: 0 auto;
  max-width: 980px;
  /* Solution: Display <article> and <aside> as two flexible
  columns, with <article> three times the width of <aside>,
  and a 20px gap */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

nav {
  background-color: black;
  padding: 0.5em;
  /* Solution: Make navigation bar scroll with content normally but
  then stick to top of viewport */
  top: 0;
  position: sticky;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* Solution: Display the navigation items in a row with equal space
  in between and less space at the ends  */
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  /* Solution: Display photos in two-column grid with equal columns
  and a 5px gap */
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  /* Solution: Wrap text around the "feature" image to the right and bottom,
  with suitable space between image and text */
  float: left;
  margin: 8px 30px 20px 0;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}
