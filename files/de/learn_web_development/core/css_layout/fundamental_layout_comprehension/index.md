---
title: "Herausforderung: Grundlagen des Layouts verstehen"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: 1402df2877308c09ea2aa1460f1c97c634bd7624
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

Diese Herausforderung prüft Ihr Wissen über die Layout-Techniken, die wir bisher in diesem Modul behandelt haben: Flexbox, Floats, Grid und Positionierung. Am Ende werden Sie ein Webseitenlayout erstellt haben, das alle diese grundlegenden Werkzeuge nutzt.

## Ausgangspunkt

Lösen Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung. Idealerweise zeigen Sie das Beispiel in einem vollständigen Browserfenster an, um sicherzustellen, dass die Layout-Techniken wie erwartet funktionieren.

1. Erstellen Sie auf Ihrem Computer einen neuen Ordner namens `layout-challenge`.
2. Erstellen Sie darin eine Datei namens `index.html` und fügen Sie den folgenden Inhalt ein:

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

3. Erstellen Sie im selben Ordner eine Datei namens `style.css` und fügen Sie den folgenden Inhalt ein:

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

4. Erstellen Sie im Ordner einen Unterordner namens `images` und speichern Sie darin die folgenden Bilddateien:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
5. Speichern Sie Ihre Dateien und öffnen Sie `index.html` zum Testen in einem Browser. Die Seite hat zunächst eine grundlegende Gestaltung, aber noch kein Layout. Sie sollte ungefähr so aussehen:

   ![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind noch nicht ordentlich angeordnet. Über einer schwarzen Navigationsleiste mit fünf linksbündigen Links steht der Titel der Website. Darunter folgen der Titel und der Inhalt eines Blogbeitrags. Zwischen dem Titel und dem Inhalt des Blogbeitrags steht ein linksbündiges Foto.](layout-task-start.png)

## Aufgabenstellung

Sie haben HTML, grundlegendes CSS und Bilder erhalten. Erstellen Sie daraus das Layout für das Design.

Erfüllen Sie die folgenden Aufgaben:

1. Zeigen Sie die Navigationseinträge in einer Zeile an. Zwischen den Einträgen soll jeweils gleich viel Platz sein; an beiden Enden der Zeile soll der Abstand kleiner sein.
2. Gestalten Sie die Navigationsleiste so, dass sie zunächst normal mit dem Inhalt scrollt, aber am oberen Rand des Viewports haften bleibt, sobald sie ihn erreicht.
3. Sorgen Sie dafür, dass der Text rechts neben und unter dem „Feature“-Bild im Artikel entlangfließt. Zwischen Bild und Text soll ein angemessener Abstand liegen.
4. Ordnen Sie die Elemente {{htmlelement("article")}} und {{htmlelement("aside")}} in zwei Spalten an. Die erste Spalte soll dreimal so breit sein wie die zweite. Die Spaltenbreiten sollen flexibel sein, damit die Spalten bei einem schmaleren Browserfenster ebenfalls schmaler werden. Zwischen den Spalten soll ein Abstand von 20 Pixeln liegen.
5. Zeigen Sie die Fotos in einem zweispaltigen Grid mit gleich breiten Spalten und einem Abstand von 5 Pixeln zwischen den Bildern an.

## Hinweise und Tipps

- Sie müssen das HTML nicht bearbeiten, um diese Herausforderung zu lösen.
- Für einige Aufgaben gibt es mehrere mögliche Lösungen – oft nicht nur einen einzigen richtigen Weg. Probieren Sie verschiedene Ansätze aus und finden Sie heraus, was am besten funktioniert. Machen Sie sich beim Experimentieren Notizen.

## Beispiel

Der folgende Screenshot zeigt, wie das fertige Layout aussehen könnte:

![Website mit fertiggestelltem Layout. Die Elemente sind ordentlich angeordnet. Über einer schwarzen Navigationsleiste mit fünf gleichmäßig verteilten Links steht der Titel der Website. Unter der Navigationsleiste befinden sich zwei Bereiche. Links steht ein Blogbeitrag mit Titel und Inhalt. Der Text fließt rechts neben und unter einem linksbündigen Foto entlang. Rechts steht die Überschrift „photography“ über einer Bildergruppe, die in einem zweispaltigen Grid angeordnet ist.](layout-task-complete.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Das fertige CSS sieht so aus:

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
