---
title: "Herausforderung: Das Größenskalieren und Dekorieren eines Inhaltspaneels"
short-title: "Herausforderung: Größenskalieren und Dekorieren"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung erhalten Sie eine leicht gestaltete Seitenstruktur, die ein Inhaltspaneel mit Text und Bildern, einer Überschrift oben und einer Schaltflächenleiste unten darstellt. Wir möchten, dass Sie die Anweisungen befolgen, um es zu formatieren und zu dekorieren, wodurch ein interessantes Layout entsteht. Unterwegs testen wir Ihr Wissen über CSS-Werte und -Einheiten, Größenanpassung, Überlauf sowie Hintergründe und Ränder.

## Ausgangspunkt

Wir möchten, dass Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster anzeigen, um sicherzustellen, dass Sie in die richtige Richtung gehen.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `size-decorate-content-panel`.
2. Erstellen Sie in dem Ordner eine `index.html`-Datei und fügen Sie den folgenden Inhalt ein:

   ```html-nolint live-sample___content-pane-start live-sample___content-pane-finish
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Challenge: Content pane with button bar</title>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <section class="pane">
         <h1>Content pane</h1>
         <div class="content">
           <h2>Some exciting content</h2>

           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Proin tortor purus <a href="#">platea sit eu id</a>
             nisi litora libero. Neque vulputate consequat ac amet augue
             blandit maximus aliquet congue. Pharetra vestibulum posuere
             ornare <a href="#">faucibus fusce dictumst</a> orci aenean eu
             facilisis ut volutpat commodo senectus purus himenaeos fames
             primis convallis nisi.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
             alt="Closeup of a large wild cat's eyes and nose" />
           <p>
             Phasellus fermentum malesuada phasellus netus dictum aenean
             placerat egestas amet. <a href="#">Ornare taciti semper dolor
             tristique</a> morbi. Sem leo tincidunt aliquet semper eu lectus
             scelerisque quis. Sagittis vivamus mollis nisi mollis enim
             fermentum laoreet.
           </p>

           <h2>More exciting content</h2>

           <p>
             Curabitur semper venenatis lectus viverra ex dictumst nulla
             maximus. Primis iaculis elementum conubia feugiat venenatis
             dolor augue ac blandit nullam ac <a href="#">phasellus turpis</a>
             feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue
             litora lectus arcu. Justo torquent pharetra volutpat ad blandit
             bibendum <a href="#">accumsan nec elit cras</a> luctus primis
             ipsum gravida class congue.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
             alt="Three colorful hot air balloons floating across a blue, nearly cloudless sky" />
           <p>
             Vehicula etiam elementum finibus enim duis feugiat commodo
             adipiscing tortor <a href="#">tempor elit</a>. Et mollis
             consectetur habitant turpis tortor consectetur adipiscing
             vulputate dolor lectus iaculis convallis adipiscing. Nam
             hendrerit <a href="#">dignissim condimentum ullamcorper diam</a>
             morbi eget consectetur odio in sagittis.
           </p>
         </div>
         <div class="controls">
           <button>One</button>
           <button>Two</button>
           <button>Three</button>
           <button>Four</button>
         </div>
       </section>
     </body>
   </html>
   ```

3. Erstellen Sie in dem Ordner eine `style.css`-Datei und fügen Sie den folgenden Inhalt ein:

   ```css live-sample___content-pane-start
   /* Type and text */

   * {
     box-sizing: border-box;
   }

   html {
     height: 100%;
   }

   body {
     height: inherit;
     font: 1.2em / 1.5 system-ui;
     margin: 0 auto;
   }

   h1 {
     font-size: 2em;
   }

   h2 {
     font-size: 1.5em;
   }

   a {
     color: red;
   }

   a:hover,
   a:focus {
     text-decoration: none;
   }

   /* Styling the pane */

   .pane {
     height: 100%;
   }

   h1,
   .controls {
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   .content {
   }

   .controls {
     justify-content: space-around;
     gap: 20px;
     padding: 20px;
   }

   button {
     flex: 1;
   }
   ```

4. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um zu testen.

## Projektbeschreibung

Führen Sie die folgenden Schritte aus, um das Projekt abzuschließen, das Inhaltspaneel angemessen zu dimensionieren und die erforderlichen Dekorationen hinzuzufügen.

### Überschriften

1. Verwenden Sie generierte Inhalte, um ein Buch-Emoji (📖) am Anfang der obersten Überschrift erscheinen zu lassen. Fügen Sie `20px` Abstand zwischen dem Emoji und dem Überschriftentext hinzu.
2. Derzeit sind die Überschriften in `em` dimensioniert. Wir möchten, dass Sie die Größenanpassung so ändern, dass sie reaktionsfähig ist, sich also basierend auf der Fensterbreite ändert, aber auch zoombar bleibt. Um dies zu erreichen, sollten Sie die Dimensionierung jeder Überschriftsebene in einem passenden Prozentsatz der Fensterbreite plus einem kleineren `em`-Wert angeben.

### Container-Größeneinstellungen

1. Machen Sie die Breite des `<section>`-Wrapper-Elements mit der Klasse `pane` gleich `60%`, geben Sie ihm jedoch eine maximale Breite von `1000px` und eine minimale Breite von `480px`. Versuchen Sie, eine CSS-Funktion zu finden, die dies mit einer einzigen Deklaration ermöglicht.
2. Zentrieren Sie das `pane`-`<section>` horizontal auf der Seite mit `auto`-Rändern.
3. Stellen Sie `<h1>` und `<div>` mit der Klasse `controls` auf eine Höhe von jeweils `100px` ein. Stellen Sie `<div>` mit der Klasse `content` auf `100%` der `<body>`-Höhe ein, abzüglich der Höhe der `<h1>` und `<div class="controls">`. Dies sollte Ihnen eine Benutzeroberfläche bieten, die immer auf die Höhe des Ansichtsfensters gestreckt wird, mit einem flexiblen Inhaltscontainer und einer festen Höhe für die Überschrift und die Schaltflächenleiste.
4. Die Schaltflächen wirken etwas dünn und schwer lesbar. Geben Sie ihnen eine Höhe von `100%` ihres Containers und eine Schriftgröße von `1.2em`.
5. Geben Sie dem `pane`-`<section>` und dem `content`-`<div>` oben/unten einen Abstand von `0` an beiden Seiten und links/rechts einen Abstand von `20px` an beiden Seiten.

### Bilderplatzierung

1. Die Bilder überschreiten derzeit den Content-Container. Setzen Sie eine maximale Breite von `90%` darauf, um dies zu verhindern.
2. Zentrieren Sie die Bilder horizontal mit `auto`-Rändern.

### Dekoration

1. Wenden Sie einen linearen Verlauf auf das `pane`-`<section>` an, der sich sanft von `#9fb4c7` oben zu `#7f7caf` unten ändert.
2. Geben Sie den Bildern einen `1px solid`-Rand und dem `content`-`<div>` einen `2px solid`-Rand. Geben Sie den Rändern die Farbe `#28587b`.
3. Geben Sie dem `content`-`<div>` eine Hintergrundfarbe von `#eeeeff` und ein Hintergrundbild von `https://mdn.github.io/shared-assets/images/examples/big-star.png`. Das Hintergrundbild sollte sich nicht wiederholen und in der Größe von `40px` mal `40px` definiert werden und `5px` vom oberen Rand des Containers und `15px` vom rechten Rand platziert sein.
4. Geben Sie den Schaltflächen eine Textfarbe von `weiß` und eine Hintergrundfarbe von `rgb(40 88 123 / 0.8)`. Bei Hover oder Fokus sollten die Schaltflächen in eine vollständig deckende Version derselben Hintergrundfarbe wechseln.
5. Setzen Sie einen `10px`-Eckenradius auf das `content`-`<div>` und die Schaltflächen.

### Überlauf

An diesem Punkt sollten Sie immer noch ein Problem mit der Benutzeroberfläche bemerken — der Inhalt im `content`-`<div>` überläuft seinen Container, und die gesamte Seite scrollt, um Ihnen Zugriff darauf zu gewähren. Wir möchten, dass stattdessen das `content`-`<div>` scrollbar ist. Wie können Sie dies erreichen?

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen — Fehler, die Sie möglicherweise übersehen haben —, damit Sie sie beheben können.
- Sie müssen das HTML in keiner Weise ändern.

## Beispiel

Der Startzustand des Projekts wird so aussehen:

{{EmbedLiveSample("content-pane-start", "100%", 500)}}

Das fertige Projekt sollte so aussehen (wir haben dies in `90%` Breite gerendert, nicht `60%`, damit es im schmalen Ausgabefenster besser aussieht):

{{EmbedLiveSample("content-pane-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Das fertige CSS sieht so aus:

```css live-sample___content-pane-finish
/* Type and text */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: inherit;
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
}

h1 {
  /* Solution: Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(2vw + 1em);
}

/* Solution: Add book emoji as generated content, with 20px spacing between
it and the heading content */
h1::before {
  content: "📖";
  margin-right: 20px;
}

h2 {
  /* Solution: Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(1.5vw + 0.75em);
}

a {
  color: red;
}

a:hover,
a:focus {
  text-decoration: none;
}

.pane {
  height: 100%;
  /* Solution: Set container width percentage and min
  and max width with one declaration, using the clamp()
  function  */
  width: clamp(480px, 60%, 1000px);
  /* Solution: Center container using auto margins */
  margin: 0 auto;
  /* Solution: Set container top/bottom padding of 0 on both sides
  and left/right padding of 20px on both sides */
  padding: 0 20px;
  /* Solution: Apply linear gradient from top to bottom */
  background: linear-gradient(to bottom, #9fb4c7, #7f7caf);
}

h1,
.controls {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Solution: Set the h1 and controls div to each be 100px high */
  height: 100px;
}

.content {
  /* Solution: Set background color and image on the content div,
  and size the image */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 5px right 15px / 40px #eeeeff;
  /* Solution: Set content top/bottom padding of 0 on both sides and
  left/right padding of 20px on both sides */
  padding: 0 20px;
  /* Solution: Set the content div to be 100% high minus the h1 and
  controls div combined height (200px) */
  height: calc(100% - 200px);
  /* Solution: Set border on the content div */
  border: 2px solid #28587b;
  /* Solution: Stop the content from overflowing its container;
  make it scroll instead */
  overflow: auto;
}

img {
  /* Solution: Set 90% maximum width on the images */
  max-width: 90%;
  /* Solution: Center using auto margins */
  margin: 0 auto;
  display: block;
  /* Solution: Set border on the images */
  border: 1px solid #28587b;
}

.controls {
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

button {
  flex: 1;
  /* Solution: Set button height to 100% and font size to 1.2em */
  height: 100%;
  font-size: 1.2em;
  /* Solution: Set white text color on the buttons */
  color: white;
  /* Solution: Set background color on the buttons */
  background-color: rgb(40 88 123 / 0.8);
}

/* Solution: Set fully-opaque background color on the
buttons on hover and focus */
button:hover,
button:focus {
  background-color: rgb(40 88 123 / 1);
}

/* Solution: Set border radius on content div and buttons */
.content,
button {
  border-radius: 10px;
}
```

```css hidden live-sample___content-pane-finish
.pane {
  width: clamp(480px, 90%, 1000px);
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
