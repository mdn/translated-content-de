---
title: "Herausforderung: Ein mobiler Layout-Ansatz"
short-title: "Herausforderung: mobile-first"
slug: Learn_web_development/Core/CSS_layout/Mobile-first_challenge
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}
Diese Aufgabe rundet das [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout)-Modul ab, indem Sie aufgefordert werden, ein bestehendes mobiles Layout so zu aktualisieren, dass es auch in Desktop-Browsern gut funktioniert. Dabei werden auch Ihre Fähigkeiten in Bezug auf responsive Layout-Funktionen wie Media Queries, CSS Grid, Flexbox und responsive Bilder getestet.

## Ausgangspunkt

Sie werden diese Aufgabe in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise möchten Sie das Beispiel in einem vollständigen Browserfenster betrachten, um sicherzustellen, dass die Layout-Funktionen wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `mobile-first-challenge`.
2. Erstellen Sie innerhalb des Ordners eine Datei `index.html` und fügen Sie den folgenden Inhalt darin ein:

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

3. Erstellen Sie innerhalb des Ordners eine Datei `style.css` und fügen Sie den folgenden Inhalt darin ein:

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

4. Erstellen Sie innerhalb des Ordners eine Datei `script.js` und fügen Sie den folgenden Inhalt darin ein:

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

5. Erstellen Sie innerhalb des Ordners einen Unterordner mit dem Namen `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
6. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um es zu testen. Der Ausgangspunkt der Seite sollte in einem schmalen Anzeigebereich etwa so aussehen:

   ![Ausgangspunkt der mobile-first Aufgabe. Ein einspaltiges Layout mit einem Logo oben und einem Hamburger-Menü-Symbol, gefolgt von einer Hauptüberschrift und anschließendem Textinhalt mit einem schwebenden Bild.](rwd-task-start.png)

## Projektbeschreibung

Der bereitgestellte Inhalt für dieses Beispiel ist derselbe wie der Inhalt aus der vorherigen Herausforderung, [Grundlegendes Layoutverständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension), mit einigen kleinen strukturellen Unterschieden. Es hat auch von Anfang an ein fast vollständiges Layout, obwohl es, wie Sie vielleicht festgestellt haben, in einem Breitbild-Anzeigebereich schrecklich aussieht!

Dies liegt daran, dass wir Ihnen ein mobiles Layout bereitgestellt haben, mit dem Sie beginnen können. Beachten Sie, wie das Navigationsmenü durch Drücken des "Hamburger-Menü"-Symbols aufgerufen wird und durch Klicken auf einen Menüpunkt oder Drücken der <kbd>Esc</kbd>-Taste geschlossen werden kann. Diese Funktionalität wird mit JavaScript behandelt und funktioniert nur, wenn der Anzeigebereich weniger als `800px` breit ist, damit es die breiteren Layouts, die Sie implementieren werden, nicht stört.

Insbesondere möchten wir, dass Sie zwei Layouts implementieren: das erste wird aktiviert, wenn die Breite mehr als `800px` beträgt, und das zweite bei über `1300px`. Wir möchten auch, dass Sie ein paar Probleme mit dem vorhandenen Code beheben und einige zusätzliche Funktionen implementieren.

### Behebung einiger Anzeigeprobleme

Zuerst müssen Sie ein paar Probleme lösen, die wir in der Ausgangsvorlage belassen haben.

1. Derzeit wird Ihr Layout in mobilen Browsern nicht richtig angezeigt. Fügen Sie einen Tag in den `<head>` Ihres `<html>`-Dokuments ein, um dies zu beheben.
2. Wenn das Browserfenster auf eine geringe Breite eingestellt ist, schauen Sie sich den unteren Bereich der Seite an – Sie werden feststellen, dass die Fotogalerie nicht richtig angezeigt wird, weil die Fotos aus ihren Containern herausbrechen. Fügen Sie eine Deklaration zu Ihrer CSS-Datei hinzu, um dies zu beheben.

### Erstellen des mittleren Layouts

Das mittlere Layout muss auf der Seite bei einer Anzeigebreite von mehr als `800px` angewendet werden. Folgen Sie diesen Schritten, um das Layout zu vervollständigen:

1. Blenden Sie das Menü `<button>` aus und zeigen Sie die `<nav>` an. Wir möchten das Ein-/Ausblenden-Menü nur im mobilen Layout verwenden.
2. Ändern Sie die Positionierung der `<nav>`, sodass es nicht mehr oberhalb der meisten Inhalte sitzt, sondern oben auf der Seite, direkt unter dem Logo "Meine aufregende Website!". Es sollte ebenfalls am oberen Rand des Anzeigebereichs haften, sobald der Inhalt bis dahin nach oben gescrollt wurde.
3. Die Navigationslistenelemente werden derzeit in einer Spalte angezeigt. Für dieses Layout möchten Sie, dass sie stattdessen als Reihe über den gesamten Bildschirm angezeigt werden.
4. Passen Sie die `<a>`-Elemente innerhalb der Listenelemente an, um ihnen `10px` oberen und unteren Abstand zu geben, und eine kleinere Schriftgröße (sagen wir `100%`).
5. Die `<nav>`, `<article>` und `<aside>` Elemente sind alle Kinder des `<main>` Elements. Wir möchten, dass Sie sie als Raster mit benannten Grid-Template-Bereichen im folgenden Aufbau layouten:

   ```plain
   ┌----------------------------------------┐
   |                  <nav>                 |
   ├------------------------------┬---------┤
   |           <article>          | <aside> |
   |                              |         |
   ```

   Das `<article>` Element sollte eine Breite haben, die dreimal so groß ist wie die des `<aside>` Elements; beide Elemente sollten in derselben Zeile sitzen. Das `<nav>` Element sollte sich in einer separaten Zeile über die gesamte verfügbare Breite erstrecken. Wir möchten auch, dass Sie einen Abstand von `20px` zwischen den verschiedenen Rasterelementen aufnehmen.

### Erstellen des Breitbild-Layouts

Das Breitbild-Layout muss auf der Seite bei einer Anzeigebreite von mehr als `1300px` angewendet werden. Folgen Sie diesen Schritten, um das Layout zu vervollständigen:

1. Ändern Sie das Rasterlayout, das Sie für das mittlere Layout implementiert haben, in ein anderes, wieder unter Verwendung von benannten Grid-Template-Bereichen. Diesmal sollte die Struktur so aussehen:

   ```plain
   ┌--------┬------------------------------┬---------┐
   | <nav>  |           <article>          | <aside> |
   |        |                              |         |
   ```

   Diesmal sollen alle drei Elemente in derselben Zeile sein. Die `<nav>` und `<aside>`-Elemente sollten die gleiche Breite einnehmen; das `<article>`-Element sollte dreimal die Breite der anderen beiden einnehmen.
2. Die Navigationslistenelemente werden in einer Reihe als Ergebnis des mittleren Layouts angezeigt; damit das Breitbild-Layout funktioniert, müssen Sie die Listenstilisierung anpassen, sodass die Listenelemente wieder in einer Spalte angezeigt werden, wie es im mobilen Layout der Fall war.
3. Die Listenelemente haben derzeit einen `flex` Wert von `1`, was bedeutet, dass sie sich über die gesamte Höhe der Spalte strecken. Passen Sie diesen Eigenschaftswert so an, dass die Navigationselemente nur so hoch wie ihr Inhalt und der voreingestellte `padding` sind.

### Implementierung der responsiven Typografie

Wir möchten, dass Sie die Stilgebung der `<h1>` und `<h2>` Elemente so anpassen, dass sie:

1. Ihren oberen und unteren `margin` entfernen, sodass sie dichter an dem darüber und darunter liegenden Inhalt anliegen.
2. Ihre Größe sich anpasst, während der Anzeigebereich verbreitert oder verengt wird, während sie dennoch zoombar bleiben. Sie sollten geeignete Einheiten wählen, damit die Überschriften den verfügbaren Raum schön ausfüllen, ohne in mehrere Zeilen zu brechen.

### Anpassung des Layouts für den Druck

Fügen Sie einen Stilblock hinzu, der die `<button>` und `<nav>` Elemente aus dem Layout entfernt, wenn Sie die Seite drucken.

## Hinweise und Tipps

1. Sie müssen das JavaScript nicht bearbeiten, um diese Aufgabe abzuschließen.
2. Es gibt einige Möglichkeiten, um einige der Aufgaben in der Projektbeschreibung zu erreichen, und es gibt oft nicht einen einzigen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie einige verschiedene Ansätze aus und sehen Sie, was am besten funktioniert. Machen Sie sich während des Ausprobierens Notizen.
3. Manchmal verursacht ein für ein vorheriges Layout gesetzter Eigenschaftswert Probleme bei nachfolgenden Layouts. Einige der Fähigkeiten beim responsiven Design bestehen darin, zu wissen, wann ein zuvor gesetzter Eigenschaftswert rückgängig gemacht oder überschrieben werden muss.

## Beispiel

Der folgende Screenshot zeigt, wie das fertige mittlere Layout aussehen sollte:

![Fertiges RWD-Aufgaben-Website-Mittellayout. Ein Logo oben, gefolgt von einem horizontalen Navigationsmenü, gefolgt von zwei Spalten, Textinhalt links und eine Fotogalerie rechts.](rwd-task-middle.png)

Der folgende Screenshot zeigt, wie das fertige Breitbild-Layout aussehen sollte:

![Fertiges RWD-Aufgaben-Website-Breitbild-Layout. Ein Logo oben, gefolgt von drei Spalten, vertikales Navigationsmenü links, Textinhalt in der Mitte und eine Fotogalerie rechts.](rwd-task-widescreen.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Um die Layouts richtig in mobilen Browsern darzustellen, müssen Sie einem Viewport `<meta>`-Tag in den `<head>` des HTML-Dokuments hinzufügen:

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
