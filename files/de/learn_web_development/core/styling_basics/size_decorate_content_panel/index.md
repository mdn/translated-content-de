---
title: "Herausforderung: Größeneinstellung und Dekoration eines Inhaltsfelds"
short-title: "Herausforderung: Größeneinstellung und Dekoration"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
l10n:
  sourceCommit: d94f783daceb9635b94a4041bae68af31adfaa6c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung erhalten Sie eine leicht gestaltete Seitenstruktur, die ein Inhaltsfeld mit Text und Bildern rendert, mit einer Überschrift oben und einer Schaltflächenleiste unten. Wir möchten, dass Sie den Anweisungen folgen, um die Größe einzustellen und es zu dekorieren, sodass ein interessantes Layout entsteht. Unterwegs testen wir Ihr Wissen über CSS-Werte und -Einheiten sowie Größen-, Hintergrund- und Rahmenangaben.

## Ausgangspunkt

Wir möchten, dass Sie diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster anzeigen, um sicherzustellen, dass Sie auf dem richtigen Weg sind.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `size-decorate-content-panel`.
2. Erstellen Sie in diesem Ordner eine `index.html`-Datei und fügen Sie den folgenden Inhalt ein:

   ```html-nolint
   <!DOCTYPE html>
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

   ```css
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
     overflow: auto;
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

4. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem browserbereit zum Testen.

## Projektbeschreibung

Folgen Sie den unten stehenden Schritten, um das Projekt abzuschließen, die Größe des Inhaltsfensters angemessen einzustellen und die erforderlichen Dekorationen hinzuzufügen.

### Überschriften

1. Verwenden Sie generierte Inhalte, um ein Buch-Emoji (📖) am Anfang der Überschrift auf oberster Ebene einzufügen. Fügen Sie `20px` Zwischenraum zwischen das Emoji und den Überschriftentext hinzu.
2. Derzeit sind die Überschriften in `em`s dimensioniert. Wir möchten, dass Sie die Größe so ändern, dass sie responsiv ist, sich basierend auf der Breite des Anzeigefensters ändert, aber auch zoombar bleibt. Um dies zu erreichen, machen Sie die Größen jeder Überschriftenebene gleich einem geeigneten Prozentsatz der Anzeigefensterbreite plus einem kleineren `em`-Wert.

### Containergrößen

1. Machen Sie die Breite des `<section>`-Umgebungselements mit einer Klasse von `pane` gleich `60%`, geben Sie ihm jedoch eine maximale Breite von `1000px` und eine minimale Breite von `480px`. Sehen Sie, ob Sie eine CSS-Funktion finden können, die es Ihnen ermöglicht, dies mit einer einzigen Deklaration festzulegen.
2. Zentrieren Sie das `pane` `<section>` horizontal auf der Seite mithilfe von `auto`-Rändern.
3. Stellen Sie die `<h1>` und das `<div>` mit einer Klasse von `controls` beide auf `100px` Höhe ein. Setzen Sie das `<div>` mit der Klasse von `content` auf `100%` der `<body>`-Höhe, abzüglich der Höhe der `<h1>` und dem `<div class="controls">`. Dies sollte Ihnen eine Benutzeroberfläche geben, die immer die Höhe des Anzeigefensters ausfüllt, mit einem flexiblen Inhaltscontainer und einer festen Höhe für die Überschrift und die Schaltflächenleiste.
4. Die Schaltflächen sehen etwas dünn und schwer lesbar aus. Geben Sie ihnen eine Höhe von `100%` ihres Containers und eine Schriftgröße von `1.2em`.
5. Geben Sie dem `pane` `<section>` und dem `content` `<div>` vertikale Polsterung von `0` auf beiden Seiten und horizontale Polsterung von `20px` auf beiden Seiten.

### Bildplatzierung

1. Derzeit überschreiten die Bilder den Inhaltscontainer. Legen Sie eine maximale Breite von `90%` für sie fest, um dies zu verhindern.
2. Zentrieren Sie die Bilder horizontal mithilfe von `auto`-Rändern.

### Dekoration

1. Tragen Sie einen Farbverlauf auf das `pane` `<section>` auf, der sich sanft von `#9fb4c7` oben zu `#7f7caf` unten verändert.
2. Geben Sie den Bildern einen Rahmen von `1px solid` und dem `content` `<div>` einen Rahmen von `2px solid`. Geben Sie den Rahmen die Farbe `#28587b`.
3. Geben Sie dem `content` `<div>` eine Hintergrundfarbe von `#eeeeff` und ein Hintergrundbild von `https://mdn.github.io/shared-assets/images/examples/big-star.png`. Das Hintergrundbild sollte sich nicht wiederholen und `10px` vom oberen Rand des Containers und `20px` vom rechten Rand platziert sein.
4. Geben Sie den Schaltflächen eine Textfarbe von `weiß` und eine Hintergrundfarbe von `rgb(40 88 123 / 0.8)`. Bei Hover oder Fokus sollten die Schaltflächen zu einer vollständig opaken Version derselben Hintergrundfarbe wechseln.
5. Setzen Sie einen `10px` Randradius auf das `content` `<div>` und die Schaltflächen.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu finden — Fehler, die Sie sonst möglicherweise übersehen hätten —, damit Sie sie beheben können.
- Sie müssen das HTML in keiner Weise ändern.

## Beispiel

Das fertige Projekt sollte so aussehen (wir haben dies in `90%` Breite gerendert, nicht `60%`, damit es im schmalen Ausgabefenster besser aussieht):

{{EmbedLiveSample("content-pane-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige CSS sieht folgendermaßen aus:

```html hidden live-sample___content-pane-finish
<section class="pane">
  <h1>Content pane</h1>
  <div class="content">
    <h2>Some exciting content</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus
      <a href="#">platea sit eu id</a> nisi litora libero. Neque vulputate
      consequat ac amet augue blandit maximus aliquet congue. Pharetra
      vestibulum posuere ornare <a href="#">faucibus fusce dictumst</a> orci
      aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames
      primis convallis nisi.
    </p>
    <img
      src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
      alt="Closeup of a large wild cat's eyes and nose" />
    <p>
      Phasellus fermentum malesuada phasellus netus dictum aenean placerat
      egestas amet.
      <a href="#">Ornare taciti semper dolor tristique</a> morbi. Sem leo
      tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus
      mollis nisi mollis enim fermentum laoreet.
    </p>

    <h2>More exciting content</h2>

    <p>
      Curabitur semper venenatis lectus viverra ex dictumst nulla maximus.
      Primis iaculis elementum conubia feugiat venenatis dolor augue ac blandit
      nullam ac <a href="#">phasellus turpis</a> feugiat mollis. Duis lectus
      porta mattis imperdiet vivamus augue litora lectus arcu. Justo torquent
      pharetra volutpat ad blandit bibendum
      <a href="#">accumsan nec elit cras</a> luctus primis ipsum gravida class
      congue.
    </p>
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
      alt="Three colorful hot air balloons floating across a blue, nearly cloudless sky" />
    <p>
      Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing
      tortor <a href="#">tempor elit</a>. Et mollis consectetur habitant turpis
      tortor consectetur adipiscing vulputate dolor lectus iaculis convallis
      adipiscing. Nam hendrerit
      <a href="#">dignissim condimentum ullamcorper diam</a> morbi eget
      consectetur odio in sagittis.
    </p>
  </div>
  <div class="controls">
    <button>One</button>
    <button>Two</button>
    <button>Three</button>
    <button>Four</button>
  </div>
</section>
```

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
  /* Set background color and image on the content div */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 10px right 20px #eeeeff;
  /* Set vertical padding of 0 on both sides and horizontal padding
  of 20px on both sides */
  padding: 0 20px;
  /* Set the content div to be 100% minus the h1 and
  controls div combined height (200px) */
  height: calc(100% - 200px);
  /* Set border on the content div */
  border: 2px solid #28587b;
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

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
