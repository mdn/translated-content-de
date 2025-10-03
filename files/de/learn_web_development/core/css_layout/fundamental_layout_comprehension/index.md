---
title: "Herausforderung: Grundlegendes Layoutverständnis"
short-title: "Herausforderung: Grundlegendes Layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
l10n:
  sourceCommit: ed70efeffb9717915f028104c5b33e7326a00d96
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

Diese Herausforderung testet Ihr Wissen über die Layout-Features, die wir bisher in diesem Modul behandelt haben, nämlich Flexbox, Floats, Grid und Positionierung. Am Ende haben Sie ein Webseiten-Layout mit all diesen grundlegenden Werkzeugen entwickelt.

## Ausgangspunkt

Wir werden Sie dazu bringen, diese Herausforderung in Ihrer lokalen Entwicklungsumgebung zu lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster betrachten, um sicherzustellen, dass die Layout-Features wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `layout-challenge`.
2. Erstellen Sie in diesem Ordner eine `index.html` Datei und fügen Sie den folgenden Inhalt ein:

   ```html
   <!DOCTYPE html>
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
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
           </p>

           <p>
             Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
             courgette tatsoi pea sprouts fava bean collard greens dandelion
             okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
             zucchini.
           </p>

           <p>
             Nori grape silver beet broccoli kombu beet greens fava bean potato
             quandong celery. Bunya nuts black-eyed pea prairie turnip leek
             lentil turnip greens parsnip. Sea lettuce lettuce water chestnut
             eggplant winter purslane fennel azuki bean earthnut pea sierra
             leone bologi leek soko chicory celtuce parsley jícama salsify.
           </p>

           <p>
             Celery quandong swiss chard chicory earthnut pea potato. Salsify
             taro catsear garlic gram celery bitterleaf wattle seed collard
             greens nori. Grape wattle seed kombu beetroot horseradish carrot
             squash brussels sprout chard.
           </p>

           <p>
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
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

3. Erstellen Sie in diesem Ordner eine `style.css` Datei und fügen Sie den folgenden Inhalt ein:

   ```css
   * {
     box-sizing: border-box;
   }

   body {
     background-color: #fff;
     color: #333;
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
     background-color: #000;
     padding: 0.5em;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   nav a {
     color: #fff;
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

4. Erstellen Sie in diesem Ordner einen Unterordner namens `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
5. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, bereit für Tests. Der Ausgangspunkt der Seite hat eine grundlegende Formatierung, aber kein Layout und sollte ungefähr so aussehen:

   ![Ausgangspunkt der Layout-Aufgabe. Die Elemente sind nicht ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 linksbündigen Links, gefolgt vom Blog-Titel und Blog-Inhalt. Zwischen dem Blog-Titel und dem Blog-Inhalt gibt es ein Foto, das linksbündig ist.](layout-task-start.png)

## Projektvorgaben

Sie haben einige rohe HTML-, grundlegende CSS- und Bilder erhalten - jetzt müssen Sie ein Layout für das Design erstellen.

Die Aufgaben, die Sie erreichen müssen, sind:

1. Zeigen Sie die Navigationselemente in einer Reihe an, mit einem gleichen Abstand zwischen den Elementen und einem kleineren Abstand am Anfang und Ende der Reihe.
2. Gestalten Sie die Navigationsleiste so, dass sie normal mit dem Inhalt scrollt, aber dann an der oberen Seite des Ansichtsfensters fixiert wird, wenn sie dieses erreicht.
3. Lassen Sie das "Feature"-Bild im Artikel so erscheinen, dass der Text rechts und unten darum herumfließt, mit einem geeigneten Abstand zwischen dem Bild und dem Text.
4. Stellen Sie die {{htmlelement("article")}} und {{htmlelement("aside")}} Elemente als ein zweispaltiges Layout dar, wobei erstere dreimal so breit sein soll wie letztere. Die Spalten sollen flexibel sein, damit sie schmaler werden, wenn das Browserfenster schmaler wird. Fügen Sie einen Abstand von 20 Pixeln zwischen den beiden Spalten ein.
5. Die Fotografien sollten als ein zweispaltiges Grid mit gleich großen Spalten und einem Abstand von 5 Pixeln zwischen den Bildern angezeigt werden.

## Hinweise und Tipps

- Sie müssen das HTML nicht bearbeiten, um diese Herausforderung zu meistern.
- Es gibt mehrere Möglichkeiten, einige der Aufgaben in den Projektvorgaben zu erreichen, und oft gibt es keine einzige richtige oder falsche Möglichkeit. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, was am besten funktioniert. Machen Sie Notizen, während Sie experimentieren.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das fertige Layout für das Design aussehen sollte:

![Fertiges Layout-Aufgaben-Website. Die Elemente sind ordentlich angeordnet. Es gibt einen Website-Titel, über einer schwarzen Navigationsleiste mit 5 gleichmäßig verteilten Links. Unter der Navigationsleiste befinden sich zwei Abschnitte. Auf der linken Seite befindet sich ein Blog-Beitrag: Ein Blog-Titel gefolgt vom Beitrag-Inhalt. Der Blog-Inhalt fließt um ein Foto herum, das linksbündig ist. Auf der rechten Seite gibt es einen 'Fotografie'-Titel über einer Gruppe von Bildern, die in einem zweispaltigen Grid angeordnet sind.](layout-task-complete.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Das fertige CSS sieht so aus:

```css
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
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
  /* 4. Display <article> and <aside> as two flexible columns */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

nav {
  background-color: #000;
  padding: 0.5em;
  /* 2. Make navigation bar stick to top of viewport */
  top: 0;
  position: sticky;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* 1. Lay out navigation items in a row with space
     in between and at the ends  */
  display: flex;
  justify-content: space-around;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5em 1em;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  /* 5. Display photos in two-column grid */
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  /* 3. Wrap text around feature image to the right and bottom */
  float: left;
  margin: 8px 30px 20px 0;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}
