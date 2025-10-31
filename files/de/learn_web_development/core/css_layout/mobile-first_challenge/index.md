---
title: "Herausforderung: Ein mobilgerätefreundliches Layout"
short-title: "Herausforderung: Mobilgeräte zuerst"
slug: Learn_web_development/Core/CSS_layout/Mobile-first_challenge
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
Diese Herausforderung schließt das [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul ab, indem Sie aufgefordert werden, ein bestehendes mobiles Layout so zu aktualisieren, dass es auch in Desktop-Browsern gut funktioniert. Dabei werden Sie auch auf Funktionen für responsive Layouts wie Media Queries, CSS-Grid, Flexbox und responsive Bilder geprüft.

## Ausgangspunkt

Wir möchten, dass Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster anzeigen, um sicherzustellen, dass die Layoutfunktionen wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `mobile-first-challenge`.
2. Erstellen Sie in diesem Ordner eine Datei `index.html` und fügen Sie den folgenden Inhalt ein:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <title>RWD Task</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
       <script defer src="script.js"></script>
     </head>

     <body>
       <header>
         <div class="logo">My exciting website!</div>
         <button aria-label="Open menu">☰</button>
       </header>

       <main class="grid">
         <nav>
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">About us</a></li>
             <li><a href="#">Our history</a></li>
             <li><a href="#">Contacts</a></li>
           </ul>
         </nav>
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
             taro garlic gram celery wattle seed collard greens nori. Grape
             wattle seed kombu beetroot horseradish carrot squash brussels
             sprout chard.
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

3. Erstellen Sie in diesem Ordner eine Datei `style.css` und fügen Sie den folgenden Inhalt ein:

   ```css
   /* General styles */

   * {
     box-sizing: border-box;
   }

   body {
     background-color: white;
     color: #333333;
     margin: 0;
     font: 1.2em / 1.6 sans-serif;
     padding: 0 20px 20px 20px;
   }

   img {
     display: block;
     border: 1px solid black;
   }

   /* Mobile layout */

   header {
     padding: 50px 0;
     display: flex;
     gap: 20px;
     justify-content: space-between;
     align-items: center;
   }

   .logo {
     font-size: 200%;
   }

   button {
     font-size: 250%;
     border: 0;
     background: none;
     cursor: pointer;
   }

   button:hover,
   button:focus {
     text-shadow: 0 0 2px black;
   }

   nav {
     position: fixed;
     inset: 10%;
     background-color: white;
     display: none;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
     text-align: center;
     height: 100%;
     display: flex;
     gap: 10px;
     flex-direction: column;
   }

   nav li {
     flex: 1;
   }

   nav a {
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 150%;
     width: 100%;
     height: 100%;
     background-color: black;
     color: white;
     text-decoration: none;
   }

   nav a:hover,
   nav a:focus {
     font-weight: bold;
   }

   .photos {
     list-style: none;
     margin: 0;
     padding: 0;
     display: grid;
     gap: 5px;
     grid-template-columns: 1fr 1fr;
   }

   .feature {
     width: 200px;
     float: left;
     margin: 8px 30px 20px 0;
   }
   ```

4. Erstellen Sie in diesem Ordner eine Datei `script.js` und fügen Sie den folgenden Inhalt ein:

   ```js
   const btn = document.querySelector("button");
   const nav = document.querySelector("nav");

   function showNav() {
     nav.style.display = "block";
   }

   function hideNav() {
     nav.style.display = "none";
   }

   function hideNavEsc(e) {
     if (e.key === "Escape") {
       nav.style.display = "none";
     }
   }

   function handleEventListeners() {
     if (matchMedia("(width > 800px)").matches) {
       btn.removeEventListener("click", showNav);
       nav.removeEventListener("click", hideNav);
       document.body.removeEventListener("keydown", hideNavEsc);
       if (nav.style.display === "none") {
         nav.style.display = "block";
       }
     } else {
       btn.addEventListener("click", showNav);
       nav.addEventListener("click", hideNav);
       document.body.addEventListener("keydown", hideNavEsc);
       if (nav.style.display === "block") {
         nav.style.display = "none";
       }
     }
   }

   handleEventListeners();

   window.addEventListener("resize", handleEventListeners);
   ```

5. Erstellen Sie in diesem Ordner einen Unterordner namens `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
6. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um zu testen. Der Ausgangspunkt der Seite sollte in einem schmalen Ansichtsfenster etwa so aussehen:

   ![Ausgangspunkt der mobilgerätefreundlichen Aufgabe. Ein einspaltiges Layout mit einem Logo oben und einem Hamburger-Menüsymbol, gefolgt von einer Überschrift oberster Ebene, gefolgt von Textinhalt mit einem eingefügten Bild.](rwd-task-start.png)

## Projektanweisung

Der bereitgestellte Inhalt für dieses Beispiel ist derselbe wie der Inhalt aus der vorherigen Herausforderung, [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension), mit einigen geringfügigen strukturellen Unterschieden. Es hat auch von Anfang an ein größtenteils vollständiges Layout, obwohl es, wie Sie vielleicht bemerkt haben, in einem Breitbild-Ansichtsfenster schrecklich aussieht!

Das liegt daran, dass wir Ihnen zu Beginn ein mobiles Layout zur Verfügung gestellt haben. Beachten Sie, wie das Navigationsmenü durch Drücken des „Hamburger-Menü“-Symbols aufgerufen werden kann und durch Klicken auf einen Menüpunkt oder Drücken der <kbd>Esc</kbd>-Taste geschlossen werden kann. Diese Funktionalität wird mithilfe von JavaScript behandelt und funktioniert nur, wenn das Ansichtsfenster weniger als `800px` breit ist, damit sie die breiteren Layouts, die Sie implementieren werden, nicht beeinträchtigt.

Wir möchten, dass Sie zwei Layouts implementieren: das erste wird aktiviert, wenn die Breite mehr als `800px` beträgt, und das zweite bei mehr als `1300px`. Außerdem werden Sie einige Probleme mit dem vorhandenen Code beheben und einige zusätzliche Funktionen implementieren.

### Behebung einiger Anzeigeprobleme

Zunächst einmal müssen Sie einige Probleme lösen, die wir in der Ausgangsvorlage hinterlassen haben.

1. Derzeit werden Ihre Layouts in mobilen Browsern nicht richtig angezeigt. Fügen Sie Ihrem `<html>`-Dokument einen Tag zum `<head>` hinzu, um dies zu beheben.
2. Mit dem Browserfenster auf eine schmale Breite eingestellt, sehen Sie unten auf der Seite, dass die Fotogalerie nicht richtig angezeigt wird, weil die Fotos aus ihren Containern herausbrechen. Fügen Sie Ihrem CSS eine Deklaration hinzu, um dies zu beheben.

### Erstellung des mittleren Layouts

Das mittlere Layout muss auf die Seite bei einer Ansichtsfensterbreite von über `800px` angewendet werden. Folgen Sie diesen Schritten, um das Layout zu vervollständigen:

1. Verbergen Sie das Menü-`<button>` und zeigen Sie das `<nav>` an. Wir möchten das Ein-/Ausblendmenü nur im mobilen Layout verwenden.
2. Ändern Sie die Positionierung des `<nav>` so, dass es statt über dem Großteil des Inhalts an der Spitze der Seite, direkt unter dem "Meine spannende Website!"-Logo sitzt. Außerdem möchten wir, dass es an die Oberseite des Ansichtsfensters angeheftet wird, sobald der Inhalt so weit nach oben gescrollt ist.
3. Die Navigationslistenelemente werden derzeit in einer Spalte angezeigt. Für dieses Layout möchten Sie, dass sie als Zeile über den gesamten Bildschirm angezeigt werden.
4. Passen Sie die `<a>`-Elemente innerhalb der Listenelemente an, um ihnen `10px` oberen und unteren Abstand zu geben und eine kleinere Schriftgröße (sagen wir `100%`).
5. Die `<nav>`, `<article>` und `<aside>`-Elemente sind alle Kinder des `<main>`-Elements. Wir möchten, dass Sie sie als Raster mit benannten Raster-Template-Bereichen in der folgenden Struktur anordnen:

   ```plain
   ┌----------------------------------------┐
   |                  <nav>                 |
   ├------------------------------┬---------┤
   |           <article>          | <aside> |
   |                              |         |
   ```

   Das `<article>`-Element sollte eine dreimal so große Breite wie das `<aside>`-Element haben; beide Elemente sollten sich in derselben Zeile befinden. Das `<nav>`-Element sollte sich in einer separaten Zeile über den anderen beiden Elementen befinden und die gesamte verfügbare Breite einnehmen. Außerdem möchten wir, dass Sie einen Abstand von `20px` zwischen den verschiedenen Rasterelementen einfügen.

### Erstellung des Breitbild-Layouts

Das Breitbild-Layout muss auf die Seite bei einer Ansichtsfensterbreite von über `1300px` angewendet werden. Folgen Sie diesen Schritten, um das Layout zu vervollständigen:

1. Ändern Sie das Rasterlayout, das Sie für das mittlere Layout implementiert haben, zu einem anderen, wieder mit benannten Raster-Template-Bereichen. Diesmal sollte die Struktur so aussehen:

   ```plain
   ┌--------┬------------------------------┬---------┐
   | <nav>  |           <article>          | <aside> |
   |        |                              |         |
   ```

   Dieses Mal befinden sich alle drei Elemente in derselben Zeile. Die `<nav>`- und `<aside>`-Elemente sollten die gleiche Breite einnehmen; das `<article>`-Element sollte dreimal die Breite der anderen beiden einnehmen.
2. Die Navigationslistenelemente werden als Zeile als Ergebnis des mittleren Layouts angezeigt; für das Breitbild-Layout müssen Sie die Listenstilierung anpassen, damit die Listenelemente wieder in einer Spalte angezeigt werden, wie im mobile Layout.
3. Die Listenelemente haben derzeit einen `flex`-Wert von `1`, was bedeutet, dass sie sich dehnen, um die gesamte Höhe der Spalte zu füllen. Passen Sie diesen Eigenschaftswert so an, dass die Navigationselemente nur so hoch wie ihr Inhalt und der eingestellte `padding` sind.

### Implementierung responsiver Typografie

Wir möchten, dass Sie das Styling der `<h1>`- und `<h2>`-Elemente so anpassen, dass sie:

1. Ihre obere und untere `margin` entfernen, damit sie enger mit dem darüber und darunter liegenden Inhalt passen.
2. Ihre Größe responsiv ändern, während das Ansichtsfenster verbreitert oder verengt wird, während sie dennoch zoombar sind. Sie sollten geeignete Einheiten wählen, damit die Überschriften den verfügbaren Raum schön ausfüllen, ohne in mehrere Zeilen zu brechen.

### Anpassung des Layouts für den Druck

Fügen Sie einen Stilblock hinzu, der die `<button>`- und `<nav>`-Elemente aus dem Layout entfernt, wenn Sie die Seite drucken.

## Hinweise und Tipps

1. Sie brauchen das JavaScript nicht zu bearbeiten, um diese Herausforderung abzuschließen.
2. Es gibt mehrere Möglichkeiten, einige der Aufgaben im Projektbrief zu erreichen, und es gibt oft kein richtig oder falsch. Versuchen Sie ein paar verschiedene Ansätze und sehen Sie, was am besten funktioniert. Machen Sie sich während des Experimentierens Notizen.
3. Manchmal verursacht ein für ein vorheriges Layout gesetzter Eigenschaftswert Probleme mit nachfolgenden Layouts. Ein Teil der Fähigkeiten im responsiven Design besteht darin zu wissen, wann vorher festgelegte Eigenschaftswerte wieder aufgehoben oder überschrieben werden müssen.

## Beispiel

Der folgende Screenshot zeigt, wie das fertige mittlere Layout aussehen sollte:

![Fertiges, responsives Website-Mittellayout. Ein Logo oben, gefolgt von einem horizontalen Navigationsmenü, gefolgt von zwei Spalten, Textinhalt links und eine Fotogalerie rechts.](rwd-task-middle.png)

Der folgende Screenshot zeigt, wie das fertige Breitbild-Layout aussehen sollte:

![Fertiges, responsives Website-Breitbild-Layout. Ein Logo oben, gefolgt von drei Spalten, vertikales Navigationsmenü links, Textinhalt in der Mitte und eine Fotogalerie rechts.](rwd-task-widescreen.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Um die Layouts in mobilen Browsern ordnungsgemäß anzuzeigen, müssen Sie einen Viewport-`<meta>`-Tag in den `<head>` des HTML-Dokuments einfügen:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Das fertige CSS sollte ungefähr so aussehen:

```css
/* General styles */

* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  margin: 0;
  font: 1.2em / 1.6 sans-serif;
  padding: 0 20px 20px 20px;
}

img {
  display: block;
  border: 1px solid black;
  /* Solution: Stop the photographs from breaking out of
  their containers */
  max-width: 100%;
}

/* Mobile layout */

header {
  padding: 50px 0;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 200%;
}

button {
  font-size: 250%;
  border: 0;
  background: none;
  cursor: pointer;
}

button:hover,
button:focus {
  text-shadow: 0 0 2px black;
}

nav {
  position: fixed;
  inset: 10%;
  background-color: white;
  display: none;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
}

nav li {
  flex: 1;
}

nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a:focus {
  font-weight: bold;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  float: left;
  margin: 8px 30px 20px 0;
}

/* Solution: Creating the middle layout (breakpoint: 800px) */

@media (width > 800px) {
  /* Sort out navigation styling for middle breakpoint */
  button {
    display: none;
  }

  nav {
    display: block;
    inset: unset;
    position: sticky;
    top: 0;
  }

  nav ul {
    flex-direction: row;
  }

  nav a {
    font-size: 100%;
    padding: 10px 0;
  }

  /* Create grid layout for middle breakpoint */

  nav {
    grid-area: nav;
  }

  article {
    grid-area: main;
  }

  aside {
    grid-area: photos;
  }

  .grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "nav nav"
      "main photos";
    gap: 20px;
  }
}

/* Solution: Creating the widescreen layout (breakpoint: 1300px) */

@media (width > 1300px) {
  .grid {
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-areas: "nav main photos";
  }

  nav ul {
    flex-direction: column;
  }

  nav li {
    flex: unset;
  }
}

/* 4. Solution: Implementing responsive typography */

h1 {
  font-size: calc(1.3rem + 3vw);
  margin: 0;
}

h2 {
  font-size: calc(1rem + 2vw);
  margin: 0;
}

/* 5. Solution: Adjusting the layout for print */

@media print {
  nav,
  button {
    display: none;
  }
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
