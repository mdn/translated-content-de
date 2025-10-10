---
title: "Herausforderung: Ein mobillayout zuerst"
short-title: "Herausforderung: mobile-first"
slug: Learn_web_development/Core/CSS_layout/Mobile-first_challenge
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
Diese Herausforderung schließt das Modul [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) ab, indem Sie ein bestehendes Mobillayout aktualisieren, sodass es auch in Desktop-Browsern gut funktioniert. Unterwegs werden Sie außerdem auf responsive Layout-Funktionen wie Media Queries, CSS-Grid, Flexbox und responsive Bilder getestet.

## Ausgangspunkt

Wir werden Sie anleiten, diese Herausforderung in Ihrer lokalen Entwicklungsumgebung zu lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster anzeigen, um sicherzustellen, dass die Layout-Funktionen wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `mobile-first-challenge`.
2. Erstellen Sie in diesem Ordner eine `index.html`-Datei und fügen Sie den folgenden Inhalt ein:

   ```html
   <!DOCTYPE html>
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

3. Erstellen Sie in dem Ordner eine `style.css`-Datei und fügen Sie den folgenden Inhalt ein:

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

4. Erstellen Sie in dem Ordner eine `script.js`-Datei und fügen Sie den folgenden Inhalt ein:

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

5. Erstellen Sie in dem Ordner einen Unterordner namens `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
6. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um zu testen. Der Ausgangspunkt der Seite sollte in einer schmalen Ansicht etwa so aussehen:

   ![Ausgangspunkt der mobile-first Aufgabe. Ein einspaltiges Layout mit einem Logo oben und einem Hamburger-Menü-Icon, gefolgt von einer Hauptüberschrift, gefolgt von Textinhalt mit einem schwebenden Bild.](rwd-task-start.png)

## Projektbeschreibung

Der bereitgestellte Inhalt für dieses Beispiel ist der gleiche wie der Inhalt aus der vorherigen Herausforderung, [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension), mit einigen kleinen strukturellen Unterschieden. Es hat auch von Anfang an ein nahezu vollständiges Layout, obwohl Sie vielleicht beim Überprüfen festgestellt haben, dass es in einer Breitbildansicht schrecklich aussieht!

Dies liegt daran, dass wir Ihnen ein Mobillayout zur Verfügung gestellt haben. Beachten Sie, wie das Navigationsmenü über das "Hamburger-Menü"-Icon aufgerufen werden kann und durch Klicken auf einen Menüpunkt oder durch Drücken der <kbd>Esc</kbd>-Taste geschlossen werden kann. Diese Funktionalität wird mit JavaScript behandelt und funktioniert nur, wenn die Ansicht weniger als `800px` breit ist, damit sie nicht mit den breiteren Layouts interferiert, die Sie implementieren werden.

Genauer gesagt möchten wir, dass Sie zwei Layouts implementieren: Das erste wird ausgelöst, wenn die Breite mehr als `800px` beträgt, und das zweite bei über `1300px`. Außerdem werden Sie aufgefordert, ein paar Probleme mit dem bestehenden Code zu beheben und einige zusätzliche Funktionen zu implementieren.

### Behebung einiger Anzeigeprobleme

Zuerst müssen Sie ein paar Probleme lösen, die wir in der Ausgangsvorlage gelassen haben.

1. Im Moment werden Ihre Layouts in mobilen Browsern nicht richtig angezeigt. Fügen Sie dem `<head>` Ihres `<html>`-Dokuments ein Tag hinzu, um dies zu beheben.
2. Bei schmal eingestelltem Browserfenster schauen Sie sich den unteren Bereich der Seite an — Sie werden sehen, dass die Fotogalerie nicht richtig angezeigt wird, weil die Bilder aus ihren Containern herausbrechen. Fügen Sie Ihrer CSS-Datei eine Deklaration hinzu, um dies zu beheben.

### Erstellung des mittleren Layouts

Das mittlere Layout muss auf die Seite oberhalb einer Ansichtsbreite von `800px` angewendet werden. Befolgen Sie diese Schritte, um das Layout abzuschließen:

1. Blenden Sie das Menü `<button>` aus und zeigen Sie stattdessen `<nav>` an. Wir möchten das Menü nur im Mobil-Layout ein- und ausblenden.
2. Ändern Sie die Positionierung von `<nav>`, damit es nicht mehr über dem größten Teil des Inhalts liegt, sondern oben auf der Seite, direkt unter dem Logo "Meine aufregende Webseite!" angezeigt wird. Wir möchten auch, dass es oben im Ansichtsfenster haften bleibt, sobald der Inhalt so weit nach oben gescrollt ist.
3. Die Navigationslistenelemente werden derzeit in einer Spalte angezeigt. Für dieses Layout möchten Sie, dass sie stattdessen als Reihe über den gesamten Bildschirm angezeigt werden.
4. Passen Sie die `<a>`-Elemente innerhalb der Listenelemente an, um ihnen `10px` oberen und unteren `padding` zu geben, und eine kleinere Schriftgröße (zum Beispiel `100%`).
5. Die `<nav>`, `<article>`, und `<aside>`-Elemente sind alle Kinder des `<main>`-Elements. Wir möchten, dass Sie sie als Raster, unter Verwendung benannter Gitter-Template-Bereiche, im folgenden Aufbau anordnen:

   ```plain
   ┌----------------------------------------┐
   |                  <nav>                 |
   ├------------------------------┬---------┤
   |           <article>          | <aside> |
   |                              |         |
   ```

   Das `<article>`-Element sollte dreimal so breit wie das `<aside>`-Element sein; beide Elemente sollten in derselben Zeile liegen. Das `<nav>`-Element sollte in einer separaten Zeile über den anderen beiden Elementen sein und die gesamte verfügbare Breite einnehmen. Wir möchten auch, dass Sie einen Abstand von `20px` zwischen den verschiedenen Gitter-Elementen einfügen.

### Erstellung des Breitbildlayouts

Das Breitbildlayout muss auf die Seite oberhalb einer Ansichtsbreite von `1300px` angewendet werden. Befolgen Sie diese Schritte, um das Layout abzuschließen:

1. Ändern Sie das Rasterlayout, das Sie für das mittlere Layout implementiert haben, in ein anderes, erneut unter Verwendung benannter Gitter-Template-Bereiche. Diesmal sollte der Aufbau so aussehen:

   ```plain
   ┌--------┬------------------------------┬---------┐
   | <nav>  |           <article>          | <aside> |
   |        |                              |         |
   ```

   Dieses Mal sind alle drei Elemente in derselben Reihe angeordnet. Die `<nav>`- und `<aside>`-Elemente sollten die gleiche Breite einnehmen; das `<article>`-Element sollte dreimal so breit wie die anderen beiden sein.
2. Die Navigationslistenelemente werden als Ergebnis des mittleren Layouts in einer Reihe angezeigt; damit das Breitbildlayout funktioniert, müssen Sie die Listengestaltung so anpassen, dass die Listenelemente wieder in einer Spalte angezeigt werden, wie sie es im Mobillayout taten.
3. Die Listenelemente haben derzeit einen `flex`-Wert von `1`, was bedeutet, dass sie sich strecken, um die gesamte Höhe der Spalte zu füllen. Passen Sie diesen Eigenschaftswert an, damit die Navigationspunkte nur so hoch wie ihr Inhalt und das festgelegte `padding` sind.

### Implementierung von responsive Typografie

Wir möchten, dass Sie die Gestaltung der `<h1>`- und `<h2>`-Elemente so anpassen, dass sie:

1. Ihren oberen und unteren `margin` entfernen, damit sie besser zu dem davor und danach liegenden Inhalt passen.
2. Ihre Größe reaktionsfähig ändern, wenn die Ansicht verbreitert oder verengt wird, während sie weiterhin vergrößerbar sind. Sie sollten passende Einheiten wählen, damit die Überschriften den verfügbaren Raum gut ausfüllen, ohne in mehrere Zeilen umzubrechen.

### Anpassung des Layouts für den Druck

Fügen Sie einen Stilblock hinzu, der die `<button>`- und `<nav>`-Elemente aus dem Layout entfernt, wenn Sie die Seite drucken.

## Hinweise und Tipps

1. Sie müssen das JavaScript nicht bearbeiten, um diese Herausforderung zu bestehen.
2. Es gibt einige Möglichkeiten, einige der Aufgaben im Projekt zu erreichen, und es gibt oft keinen eindeutig richtigen oder falschen Weg, Dinge zu tun. Probieren Sie verschiedene Ansätze aus und sehen Sie, was am besten funktioniert. Machen Sie sich Notizen, während Sie experimentieren.
3. Manchmal verursacht ein Eigenschaftswert, der für ein vorheriges Layout festgelegt wurde, Probleme mit nachfolgenden Layouts. Ein Teil des Könnens im Bereich des responsiven Designs besteht darin, zu wissen, wann man zuvor festgelegte Eigenschaftswerte rückgängig machen oder überschreiben muss.

## Beispiel

Der folgende Screenshot zeigt, wie das fertige mittlere Layout aussehen sollte:

![Fertiggestelltes rwd-Aufgaben-Website-Mittellayout. Ein Logo oben, gefolgt von einem horizontalen Navigationsmenü, gefolgt von zwei Spalten, Textinhalt links und eine Fotogalerie rechts.](rwd-task-middle.png)

Der folgende Screenshot zeigt, wie das fertige Breitbildlayout aussehen sollte:

![Fertiggestelltes rwd-Aufgaben-Website-Breitbildlayout. Ein Logo oben, gefolgt von drei Spalten, vertikales Navigationsmenü links, Textinhalt in der Mitte und eine Fotogalerie rechts.](rwd-task-widescreen.png)

<details>
<summary>Hier klicken, um eine mögliche Lösung anzuzeigen</summary>

Um die Layouts dazu zu bringen, in mobilen Browsern richtig angezeigt zu werden, müssen Sie ein viewport `<meta>`-Tag im `<head>` des HTML-Dokuments hinzufügen:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Das fertige CSS sollte in etwa so aussehen:

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
  /* 1. Constrain the photograph images inside their containers */
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

/* 2. Middle breakpoint: 800px */

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

/* 3. Wide breakpoint: 1300px */

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

/* 4. Responsive typography */

h1 {
  font-size: calc(1.3rem + 3vw);
  margin: 0;
}

h2 {
  font-size: calc(1rem + 2vw);
  margin: 0;
}

/* 5. Remove navigation elements when printing */

@media print {
  nav,
  button {
    display: none;
  }
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
