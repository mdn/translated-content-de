---
title: "Herausforderung: Größe und Dekoration eines Inhaltsbereichs"
short-title: "Herausforderung: Größe und Dekoration"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
l10n:
  sourceCommit: 001a6992ec60f0dccd073a3db223c320835188ad
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung erhalten Sie eine leicht gestaltete Seitenstruktur, die ein Inhaltsfeld mit Text und Bildern rendert, mit einer Überschrift oben und einer Schaltflächenleiste unten. Wir möchten, dass Sie den Anweisungen folgen, um es zu skalieren und zu dekorieren, und dabei ein interessantes Layout zu erstellen. Auf dem Weg testen wir Ihr Wissen über CSS-Werte und -Einheiten, Größe, Überlauf sowie Hintergründe und Ränder.

## Ausgangspunkt

Wir möchten, dass Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster anzeigen, um sicherzustellen, dass Sie in die richtige Richtung gehen.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `size-decorate-content-panel`.
2. Erstellen Sie in diesem Ordner eine `index.html` Datei und fügen Sie den folgenden Inhalt ein:

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

3. Erstellen Sie in diesem Ordner eine `style.css` Datei und fügen Sie den folgenden Inhalt ein:

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

4. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, bereit zum Testen.

## Projektbrief

Folgen Sie den unten stehenden Schritten, um das Projekt abzuschließen, indem Sie das Inhaltsfenster entsprechend skalieren und die erforderlichen Dekorationen hinzufügen.

### Überschriften

1. Verwenden Sie generierten Inhalt, um ein Buch-Emoji (📖) am Anfang der obersten Überschrift erscheinen zu lassen. Fügen Sie `20px` Abstand zwischen dem Emoji und dem Überschriftentext hinzu.
2. Derzeit sind die Überschriften in `em` berechnet. Ändern Sie die Größenanpassung so, dass sie reaktionsfähig ist, sich basierend auf der Ansichtsfensterbreite ändert, aber auch weiterhin zoombar bleibt. Um dies zu erreichen, machen Sie die Größenanpassung jeder Überschriftenebene gleich einem geeigneten Prozentsatz der Ansichtsfensterbreite plus einem kleineren `em`-Wert.

### Containergroße

1. Machen Sie die Breite des `<section>`-Wrapper-Elements mit einer Klasse von `pane` gleich `60%`, aber geben Sie ihm eine maximale Breite von `1000px` und eine minimale Breite von `480px`. Sehen Sie, ob Sie eine CSS-Funktion finden können, die es Ihnen ermöglicht, dies mit einer einzigen Deklaration festzulegen.
2. Zentrieren Sie die `pane`-`<section>` horizontal auf der Seite mit `auto`-Rändern.
3. Setzen Sie das `<h1>` und das `<div>` mit der Klasse `controls` auf jeweils `100px` Höhe. Setzen Sie das `<div>` mit der Klasse `content` auf `100%` der `<body>`-Höhe minus der Höhe von `<h1>` und `<div class="controls">`. Dies sollte Ihnen eine Benutzeroberfläche geben, die immer die Höhe des Ansichtsfensters einnimmt, mit einem flexiblen Inhaltscontainer und einer festen Höhe für die Überschrift und die Schaltflächenleiste.
4. Die Schaltflächen sehen etwas dünn und schwer lesbar aus. Geben Sie ihnen eine Höhe von `100%` ihres Containers und eine Schriftgröße von `1.2em`.
5. Geben Sie der `pane`-`<section>` und dem `content`-`<div>` vertikale Abstände von `0` auf beiden Seiten und horizontale Abstände von `20px` auf beiden Seiten.

### Bildplatzierung

1. Die Bilder überlaufen derzeit den Inhaltscontainer. Setzen Sie eine maximale Breite von `90%` auf sie, um dies zu verhindern.
2. Zentrieren Sie die Bilder horizontal mit `auto`-Rändern.

### Dekoration

1. Wenden Sie einen Farbverlauf auf die `pane`-`<section>` an, der sich sanft von `#9fb4c7` oben nach `#7f7caf` unten verändert.
2. Geben Sie den Bildern einen `1px solid`-Rand und dem `content`-`<div>` einen `2px solid`-Rand. Geben Sie den Rändern eine Farbe von `#28587b`.
3. Geben Sie dem `content`-`<div>` eine Hintergrundfarbe von `#eeeeff` und ein Hintergrundbild von `https://mdn.github.io/shared-assets/images/examples/big-star.png`. Das Hintergrundbild sollte sich nicht wiederholen, sollte auf `40px` mal `40px` dimensioniert sein und `5px` vom oberen Rand des Containers und `15px` vom rechten Rand platziert sein.
4. Geben Sie den Schaltflächen eine Textfarbe von `white` und eine Hintergrundfarbe von `rgb(40 88 123 / 0.8)`. Beim Hover oder Fokus sollten die Schaltflächen zu einer vollständig undurchsichtigen Version der gleichen Hintergrundfarbe wechseln.
5. Setzen Sie einen `10px`-Randradius am `content`-`<div>` und den Schaltflächen.

### Überlauf

An diesem Punkt sollten Sie noch ein Problem mit der Benutzeroberfläche bemerken – der im `content`-`<div>` enthaltene Inhalt überläuft dessen Container, und die gesamte Seite scrollt, um Ihnen den Zugriff darauf zu ermöglichen. Wir möchten, dass der `content`-`<div>` stattdessen scrollt. Wie können Sie dies erreichen?

## Tipps und Hinweise

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen – Fehler, die Sie möglicherweise übersehen haben – damit Sie sie beheben können.
- Sie müssen das HTML in keiner Weise ändern.

## Beispiel

Der Ausgangszustand des Projekts wird wie folgt gerendert:

{{EmbedLiveSample("content-pane-start", "100%", 500)}}

Das fertige Projekt sollte so aussehen (wir haben es mit `90%` Breite gerendert, nicht `60%`, damit es im schmalen Ausgabefenster besser aussieht):

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
  /* Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(2vw + 1em);
}

/* Add book emoji as generated content, with spacing between
it and the heading content */
h1::before {
  content: "📖";
  margin-right: 20px;
}

h2 {
  /* Responsive heading sizing, equal to vw value plus em value */
  font-size: calc(1.5vw + 0.75em);
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
  /* clamp() function allows you to set a percentage width plus a maximum and minimum absolute width */
  width: clamp(480px, 60%, 1000px);
  /* Center using auto margins */
  margin: 0 auto;
  /* Set vertical padding of 0 on both sides and horizontal padding
  of 20px on both sides */
  padding: 0 20px;
  /* Apply linear gradient from top to bottom */
  background: linear-gradient(to bottom, #9fb4c7, #7f7caf);
}

img {
  /* Set 90% maximum width on the images */
  max-width: 90%;
  /* Center using auto margins */
  margin: 0 auto;
  display: block;
  /* Set border on the images */
  border: 1px solid #28587b;
}

h1,
.controls {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Set the h1 and controls div to each be 100px high */
  height: 100px;
}

.content {
  /* Set background color and image on the content div, and size the image */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 5px right 15px / 40px #eef;
  /* Set vertical padding of 0 on both sides and horizontal padding
  of 20px on both sides */
  padding: 0 20px;
  /* Set the content div to be 100% minus the h1 and
  controls div combined height (200px) */
  height: calc(100% - 200px);
  /* Set border on the content div */
  border: 2px solid #28587b;
  /* Stop the content from overflowing its container; make it scroll instead */
  overflow: auto;
}

.controls {
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

button {
  flex: 1;
  /* Set button height to 100% and font size to 1.2em */
  height: 100%;
  font-size: 1.2em;
  /* Set white text color on the buttons */
  color: white;
  /* Set background color on the buttons */
  background-color: rgb(40 88 123 / 0.8);
}

/* Set fully-opaque background color on the
buttons on hover and focus */
button:hover,
button:focus {
  background-color: rgb(40 88 123 / 1);
}

/* Set border radius on content div and buttons */
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
