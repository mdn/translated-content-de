---
title: "Herausforderung: Ein Mobile-First-Layout"
short-title: "Herausforderung: mobile-first"
slug: Learn_web_development/Core/CSS_layout/Mobile-first_challenge
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Responsive_design", "Learn_web_development/Core/Scripting", "Learn_web_development/Core/CSS_layout")}}

Diese Herausforderung rundet das Modul [CSS-Layout](/de/docs/Learn_web_development/Core/CSS_layout) ab, indem Sie ein bestehendes Mobile-Layout so aktualisieren, dass es auch gut auf Desktop-Browsern funktioniert. Dabei werden Sie auf responsive Layout-Features wie Media Queries, CSS Grid, Flexbox und responsive Bilder getestet.

Nachdem Sie diese Herausforderung abgeschlossen haben, können Sie damit fortfahren, das Implementieren dynamischen Verhaltens mit [JavaScript](/de/docs/Learn_web_development/Core/Scripting) zu lernen.

## Ausgangspunkt

Wir werden Sie dazu bringen, diese Herausforderung in Ihrer lokalen Entwicklungsumgebung zu lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster ansehen, um sicherzustellen, dass die Layout-Features wie erwartet funktionieren.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `mobile-first-challenge`.
2. Erstellen Sie innerhalb des Ordners eine `index.html` Datei und fügen Sie den folgenden Inhalt ein:

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

3. Erstellen Sie innerhalb des Ordners eine `style.css` Datei und fügen Sie den folgenden Inhalt ein:

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

4. Erstellen Sie innerhalb des Ordners eine `script.js` Datei und fügen Sie den folgenden Inhalt ein:

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

5. Erstellen Sie einen Unterordner im Ordner mit dem Namen `images` und speichern Sie die folgenden Bilddateien darin:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
6. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um es zu testen. Der Ausgangspunkt der Seite sollte etwa so aussehen, wenn er in einem schmalen Viewport angezeigt wird:

   ![Ausgangspunkt der Mobile-First-Aufgabe. Ein einspaltiges Layout mit einem Logo oben und einem Hamburger-Menü-Symbol, gefolgt von einer Hauptüberschrift, gefolgt von Textinhalt mit einem schwebenden Bild.](rwd-task-start.png)

## Projektauftrag

Der bereitgestellte Inhalt für dieses Beispiel ist der gleiche wie der Inhalt aus der vorherigen Herausforderung, [Grundlegendes Layout-Verständnis](/de/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension), mit einigen geringfügigen strukturellen Unterschieden. Es hat auch von Anfang an ein fast vollständiges Layout, obwohl es, wie Sie vielleicht bemerkt haben, in einem Breitbild-Viewport schrecklich aussieht!

Dies liegt daran, dass wir Ihnen zu Beginn ein Mobile-Layout bereitgestellt haben. Beachten Sie, wie das Navigationsmenü durch Drücken des "Hamburger-Menü"-Symbols aufgerufen wird und durch Klicken auf einen Menüpunkt oder durch Drücken der <kbd>Esc</kbd>-Taste ausgeblendet werden kann. Diese Funktionalität wird mit JavaScript gehandhabt und funktioniert nur, wenn der Viewport weniger als `800px` breit ist, damit es nicht mit den breiteren Layouts, die Sie implementieren werden, interferiert.

Konkret möchten wir, dass Sie zwei Layouts implementieren: Das erste wird ausgelöst, wenn die Breite mehr als `800px` beträgt, und das zweite wird bei mehr als `1300px` ausgelöst. Wir werden Sie auch einige Probleme im vorhandenen Code beheben und zusätzliche Features implementieren lassen.

### Behebung einiger Anzeigefehler

Zuerst müssen Sie ein paar Probleme lösen, die wir in der Ausgangsvorlage belassen haben.

1. Derzeit werden Ihre Layouts in mobilen Browsern nicht richtig angezeigt. Fügen Sie einen Tag in den `<head>` Ihres `<html>`-Dokuments ein, um dies zu beheben.
2. Wenn das Browserfenster auf eine schmale Breite eingestellt ist, sehen Sie sich das untere Ende der Seite an — Sie werden sehen, dass die Foto-Galerie nicht richtig angezeigt wird, weil die Fotos aus ihren Containern herausbrechen. Fügen Sie eine Deklaration in Ihre CSS-Datei ein, um dies zu beheben.

### Erstellen des mittleren Layouts

Das mittlere Layout muss auf die Seite über eine Viewport-Breite von `800px` angewendet werden. Befolgen Sie diese Schritte, um das Layout zu vervollständigen:

1. Blenden Sie den Menü-`<button>` aus und zeigen Sie das `<nav>` an. Wir möchten das Verbergen/Anzeigen-Menü nur im mobilen Layout verwenden.
2. Ändern Sie die Positionierung des `<nav>`, damit es statt über dem Großteil des Inhalts zu sitzen, oben auf der Seite sitzt, direkt unter dem "My exciting website!" Logo. Wir möchten auch, dass es an den oberen Rand des Viewports anheftet, sobald der Inhalt so weit hoch gescrollt ist.
3. Die Navigationslistenelemente werden derzeit in einer Spalte angezeigt. Für dieses Layout möchten Sie, dass sie stattdessen als Reihe über den gesamten Bildschirm angezeigt werden.
4. Passen Sie die `<a>`-Elemente innerhalb der Listenelemente an, um ihnen `10px` obere und untere Innenabstände zu geben, und eine kleinere Schriftgröße (zum Beispiel `100%`).
5. Die `<nav>`, `<article>` und `<aside>` Elemente sind alle Kinder des `<main>`-Elements. Wir möchten, dass Sie sie als Raster mit benannten Raster-Template-Bereichen in der folgenden Struktur anordnen:

   ```plain
   ┌----------------------------------------┐
   |                  <nav>                 |
   ├------------------------------┬---------┤
   |           <article>          | <aside> |
   |                              |         |
   ```

   Das `<article>`-Element sollte eine Breite haben, die dreimal so groß wie die des `<aside>`-Elements ist; beide Elemente sollten sich in derselben Reihe befinden. Das `<nav>`-Element sollte in einer separaten Zeile über den anderen beiden Elementen sein und die gesamte verfügbare Breite überspannen. Wir möchten auch, dass Sie einen Abstand von `20px` zwischen den verschiedenen Rasterelementen einfügen.

### Erstellen des Breitbild-Layouts

Das Breitbild-Layout muss auf die Seite über eine Viewport-Breite von `1300px` angewendet werden. Befolgen Sie diese Schritte, um das Layout zu vervollständigen:

1. Ändern Sie das Raster-Layout, das Sie für das mittlere Layout implementiert haben, in ein anderes, wiederum mit benannten Raster-Template-Bereichen. Diese Struktur sollte so aussehen:

   ```plain
   ┌--------┬------------------------------┬---------┐
   | <nav>  |           <article>          | <aside> |
   |        |                              |         |
   ```

   Diesmal sollten alle drei Elemente in derselben Reihe sein. Die `<nav>` und `<aside>`-Elemente sollten dieselbe Breite einnehmen; das `<article>`-Element sollte dreimal so breit sein wie die anderen beiden.

2. Die Navigationslistenelemente werden aufgrund des mittleren Layouts in einer Zeile angezeigt; damit das Breitbild-Layout funktioniert, müssen Sie das Listenstyling anpassen, damit die Listenelemente wieder in einer Spalte wie im mobilen Layout angezeigt werden.
3. Die Listenelemente haben derzeit einen `flex`-Wert von `1`, was bedeutet, dass sie sich ausdehnen, um die gesamte Höhe der Spalte zu füllen. Passen Sie diesen Eigenschaftswert so an, dass die Navigationsitems nur so hoch sind wie ihr Inhalt und der eingestellte `padding`.

### Implementierung von responsive Typografie

Wir möchten, dass Sie das Styling der `<h1>` und `<h2>`-Elemente anpassen, damit sie:

1. Ihre obere und untere `margin` entfernen, sodass sie sich enger an den darüber und darunter liegenden Inhalt anpassen.
2. Ihre Größe responsiv ändern, während das Viewport verbreitet oder verengt wird, während sie weiterhin zoomfähig sind. Sie sollten geeignete Einheiten wählen, damit die Überschriften den verfügbaren Raum schön ausfüllen, ohne auf mehrere Zeilen umgebrochen zu werden.

### Anpassung des Layouts für den Druck

Fügen Sie einen Stilblock hinzu, der die `<button>` und `<nav>`-Elemente aus dem Layout entfernt, wenn Sie die Seite drucken.

## Hinweise und Tipps

1. Sie müssen das JavaScript nicht bearbeiten, um diese Herausforderung abzuschließen.
2. Es gibt mehrere Möglichkeiten, einige der Aufgaben im Projektauftrag zu erreichen, und oft gibt es nicht den einen richtigen oder falschen Weg, Dinge zu tun. Probieren Sie verschiedene Ansätze aus und sehen Sie, was am besten funktioniert. Machen Sie Notizen, während Sie experimentieren.
3. Manchmal kann ein Eigenschaftswert, der für ein vorheriges Layout festgelegt wurde, Probleme mit nachfolgenden Layouts verursachen. Ein Teil der Fähigkeiten im Responsive Design besteht darin, zu wissen, wann man vorher gesetzte Eigenschaftswerte entfernen oder überschreiben muss.

## Beispiel

Der folgende Screenshot zeigt, wie das fertige mittlere Layout aussehen sollte:

![Fertiges Layout der Aufgabe RWD mittleres Layout. Ein Logo oben, gefolgt von einem horizontalen Navigationsmenü, gefolgt von zwei Spalten, Textinhalt auf der linken Seite und einem Foto-Galerie auf der rechten Seite.](rwd-task-middle.png)

Der folgende Screenshot zeigt, wie das fertige Breitbild-Layout aussehen sollte:

![Fertiges Layout der Aufgabe RWD Breitbild-Layout. Ein Logo oben, gefolgt von drei Spalten, vertikales Navigationsmenü auf der linken Seite, Textinhalt in der Mitte und eine Foto-Galerie auf der rechten Seite.](rwd-task-widescreen.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Um die Layouts in mobilen Browsern richtig anzuzeigen, müssen Sie einen Viewport `<meta>`-Tag in den `<head>` des HTML-Dokuments einfügen:

```html
<meta name="viewport" content="width=device-width" />
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
