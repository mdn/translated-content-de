---
title: "Herausforderung: Strukturierung eines Feedback-Formulars"
short-title: "Herausforderung: Feedback-Formular"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: 8126a04c73f0c6821b2ac4e5571fa83320d3a65a
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung testen wir Ihre Fähigkeit, ein Formular zu erstellen und zu strukturieren sowie einige andere HTML-Funktionen hinzuzufügen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein grundlegendes Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des Codes, den Sie benötigen, wird auf dieser Seite bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `forms-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte zur Erstellung eines neuen Projekts durch).
2. Speichern Sie das folgende HTML-Verzeichnis in einer Datei in Ihrem Ordner mit dem Namen `index.html` (oder fügen Sie es in das HTML-Feld Ihres Online-Editors ein).

   ```html-nolint
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Forms challenge</title>
       <link href="style.css" rel="stylesheet" />
       <script defer src="index.js"></script>
     </head>
     <body>
       We want your feedback!

       We're very excited that you visited the little house in the woods,
       and we want to hear what you thought of it! Please fill in the below
       sections. You don't need to provide your name or contact details, but
       if you do, we'll enter you into a prize draw where you'll have a chance
       to win prizes.

       --

       Facilities

       Was the porridge
       Too hot?
       Too cold?
       Just right?

       Were the beds
       Too hard?
       Too soft?
       Just right?

       Describe the chairs (select all you agree with)
       Comfy
       Luxurious
       Hi-tech
       Pretty
       Majestic

       --

       About your hosts

       Who's your favorite bear?
       Papa bear
       Mama bear
       Junior
       Dozer

       Which greeting did you prefer?
       Wave
       Friendly greeting
       Growl
       Claw marks in the door

       --

       Any other feedback?

       Give us your comments

       --

       Your details

       Name
       Email
       Phone

       --

       Submit

       --
     </body>
   </html>
   ```

3. Speichern Sie das folgende CSS-Verzeichnis in einer Datei in Ihrem Ordner mit dem Namen `style.css` (oder fügen Sie es in das CSS-Feld Ihres Online-Editors ein).

   ```css live-sample___form-finished
   /* Basic font styles */

   body {
     background-color: white;
     color: #333333;
     font: 1em / 1.4 system-ui;
     padding: 1em;
     max-width: 800px;
     margin: 0 auto;
   }

   h1 {
     font-size: 2rem;
   }

   h2 {
     font-size: 1.6rem;
   }

   h1,
   h2 {
     margin: 0 0 20px;
     color: purple;
   }

   * {
     box-sizing: border-box;
   }

   p {
     color: gray;
     margin: 0.5em 0;
   }

   /* Form structure */

   fieldset {
     border: 0;
     padding: 0;
   }

   legend {
     padding-bottom: 10px;
     font-weight: bold;
   }

   fieldset,
   .separator {
     margin-bottom: 20px;
   }

   .form-section {
     margin-bottom: 20px;
     padding: 20px;
   }

   img {
     max-width: 100%;
     height: 50px;
     margin: 20px 0;
   }

   /* Individual form items */

   fieldset input {
     margin: 0 10px 0 0;
   }

   label {
     margin-right: 40px;
   }

   textarea {
     margin-top: 10px;
     padding: 5px;
     width: 100%;
     height: 200px;
   }

   .separator {
     display: flex;
   }

   .separator label {
     flex: 2;
   }

   .separator input,
   .separator select {
     flex: 3;
     padding: 5px;
   }

   button {
     padding: 10px 20px;
     border-radius: 10px;
     border: 1px solid grey;
     background-color: #dddddd;
     width: 50%;
     margin: 0 auto;
     display: block;
   }

   button:hover,
   button:focus {
     background-color: #eeeeee;
     cursor: pointer;
   }
   ```

## Projektbeschreibung

Wir möchten, dass Sie sich vorstellen, dass Sie gerade in einem Hotel namens "Das kleine Haus im Wald" übernachtet haben (nun, zumindest dachten Sie, es sei ein Hotel). Wir möchten, dass Sie uns helfen, ein fiktives Feedback-Formular für das Hotel zu erstellen. Neben der Markierung der erforderlichen Funktionen und der Strukturierung des Formulars gibt es einige zusätzliche HTML-Funktionen, die wir implementieren möchten.

### Implementierung von Formularsteuerelementen

1. Im Abschnitt "Einrichtungen" möchten wir, dass Sie die ersten beiden Zeilensätze in Gruppen von Optionsfeldern mit einer Beschriftung für jede Gruppe und einer Legende für die gesamte Gruppe umwandeln. Fügen Sie ein Attribut hinzu, um das erste Optionsfeld in jedem Fall standardmäßig auszuwählen.
2. Im Abschnitt "Einrichtungen" wandeln Sie den dritten Zeilensatz in eine Gruppe von Kontrollkästchen um, mit einer Beschriftung für jede und einer Legende für die gesamte Gruppe.
3. Im Abschnitt "Über Ihre Gastgeber" wandeln Sie beide Zeilensätze in ein Dropdown-Menü von Optionen um, mit einer Beschriftung zu jeder.
4. Im Abschnitt "Weitere Rückmeldungen?" fügen Sie ein mehrzeiliges Textfeld hinzu und wandeln Sie die vorhandene Zeile in ihre beschreibende Beschriftung um.
5. Im Abschnitt "Ihre Daten" fügen Sie eine geeignete Art von Texteingabe hinzu, um jeden der drei aufgelisteten Werte zu sammeln. Wandeln Sie die vorhandenen Zeilen in ihre Beschriftungen um.
6. Wandeln Sie "Absenden" in eine Schaltfläche zum Absenden des Formulars um.

### Strukturierung des Formulars

1. Umschließen Sie das Formular in ein geeignetes Umschlagelement, um das Ganze als Formular zu kennzeichnen.
2. Fügen Sie wiederholte Strukturelemente innerhalb des Formulars hinzu, um jeden Formularabschnitt zu umschließen. Geben Sie jedem Formularelement eine `class` namens `form-section`. Um es einfacher zu machen, ist jeder Formularbereich von zwei Sätzen doppelter Bindestriche (`--`) umgeben. Sie können die doppelten Bindestriche entfernen, wenn Sie Ihre Strukturelemente hinzugefügt haben.
3. Sie werden zusätzliche Strukturelemente um einige der Steuerungs-/Beschriftungspaare herum einfügen müssen, um sie auf eigenen getrennten Zeilen anzuzeigen. Fügen Sie diese jetzt hinzu und geben Sie jedem die `class` von `separator`.
4. Fügen Sie ein Zeilenumbruchelement zwischen das mehrzeilige Textfeld und seine Beschriftung ein, damit die beiden auf getrennten Zeilen stehen.

### Zusätzliche HTML-Funktionen

1. Es gibt mehrere Überschriften im Text, die mit geeigneten Elementen ausgezeichnet werden müssen:
   1. Die Hauptüberschrift: "Wir wollen Ihr Feedback!".
   2. Zweite Ebene Überschriften: "Einrichtungen", "Über Ihre Gastgeber", "Weitere Rückmeldungen?" und "Ihre Daten".
2. Der einleitende Absatz unter der Hauptüberschrift muss angemessen ausgezeichnet werden.
3. Verwandeln Sie im einleitenden Absatz den Text "Das kleine Haus im Wald" und "Preisauslosung" in Links. Wir haben noch keine Seiten, auf die sie verlinken können, also setzen Sie die Ziel-URL vorerst einfach als `#` für einen Platzhalter.
4. Wir möchten, dass Sie unter dem einleitenden Absatz ein breites, flaches Bild als Dekoration platzieren. Der Bildpfad ist `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg`, und wir möchten, dass Sie den alternativen Text auf einen leeren Wert setzen, da es sich nur um eine Dekoration handelt.
5. In Fortführung des vorherigen Punktes, als erweitertes Ziel, recherchieren Sie eine bessere Möglichkeit, das dekorative Bild auf der Seite einzubinden, und versuchen Sie, es umzusetzen (dies betrifft eine andere Technologie als HTML, die wir in diesem Modul noch nicht behandelt haben).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML-Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu finden und zu beheben.
- Wenn Sie Schwierigkeiten haben und sich nicht vorstellen können, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und notieren Sie die Elemente, von denen Sie glauben, dass sie jeden Block umgeben sollten. Das ist äußerst hilfreich.

## Beispiel

Das folgende Live-Beispiel zeigt, wie das Formular nach der Markierung aussehen könnte. Wenn Sie nicht weiter wissen, wie Sie etwas erreichen können, sehen Sie sich die untenstehende Lösung an.

{{embedlivesample("form-finished", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html-nolint live-sample___form-finished
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Forms challenge</title>
    <link href="style.css" rel="stylesheet" />
    <script defer src="index.js"></script>
  </head>
  <body>
    <h1>We want your feedback!</h1>

    <p>
      We're very excited that you visited the
      <a href="#">little house in the woods</a>, and we want to hear what you
      thought of it! Please fill in the below sections. You don't need to
      provide your name or contact details, but if you do, we'll enter you into
      a <a href="#">prize draw</a> where you'll have a chance to win prizes.
    </p>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg"
      alt="" />

    <form>
      <div class="form-section">
        <h2>Facilities</h2>

        <fieldset>
          <legend>Was the porridge</legend>

          <input type="radio" id="porridge-1" name="porridge" value="hot"
                 checked />
          <label for="porridge-1">Too hot?</label>

          <input type="radio" id="porridge-2" name="porridge" value="cold" />
          <label for="porridge-2">Too cold?</label>

          <input type="radio" id="porridge-3" name="porridge" value="right" />
          <label for="porridge-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Were the beds</legend>

          <input type="radio" id="beds-1" name="beds" value="hard" checked />
          <label for="beds-1">Too hard?</label>

          <input type="radio" id="beds-2" name="beds" value="soft" />
          <label for="beds-2">Too soft?</label>

          <input type="radio" id="beds-3" name="beds" value="right" />
          <label for="beds-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Describe the chairs (select all you agree with)</legend>

          <input type="checkbox" id="comfy" name="comfy" />
          <label for="comfy">Comfy</label>

          <input type="checkbox" id="luxurious" name="luxurious" />
          <label for="luxurious">Luxurious</label>

          <input type="checkbox" id="hi-tech" name="hi-tech" />
          <label for="hi-tech">Hi-tech</label>

          <input type="checkbox" id="pretty" name="pretty" />
          <label for="pretty">Pretty</label>

          <input type="checkbox" id="majestic" name="majestic" />
          <label for="majestic">Majestic</label>
        </fieldset>
      </div>

      <div class="form-section">
        <h2>About your hosts</h2>

        <div class="separator">
          <label for="favorite">Who's your favorite bear?</label>
          <select name="favorite" id="favorite">
            <option value="papa">Papa bear</option>
            <option value="mama">Mama bear</option>
            <option value="junior">Junior</option>
            <option value="dozer">Dozer</option>
          </select>
        </div>

        <div class="separator">
          <label for="greeting">Which greeting did you prefer?</label>
          <select name="greeting" id="greeting">
            <option value="wave">Wave</option>
            <option value="friendly">Friendly greeting</option>
            <option value="growl">Growl</option>
            <option value="claw">Claw marks in the door</option>
          </select>
        </div>
      </div>

      <div class="form-section">
        <h2>Any other feedback?</h2>

        <label for="comments">Give us your comments</label>
        <br />
        <textarea id="comments" name="comments"></textarea>
      </div>

      <div class="form-section">
        <h2>Your details</h2>

        <div class="separator">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div class="separator">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div class="separator">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </div>

      <div class="form-section">
        <button>Submit</button>
      </div>
    </form>
  </body>
</html>
```

Für das erweiterte Ziel könnte eine bessere Möglichkeit, dekorative Bilder auf einer Webseite hinzuzufügen, die Verwendung von [CSS-Hintergrundbildern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images) sein. Löschen Sie das `<img>`-Element und verwenden Sie die CSS-{{cssxref("background")}} Eigenschaft, um das Bild stattdessen auf der Seite zu platzieren. Ein gutes Element, um das Hintergrundbild zu platzieren, wäre das `<form>`-Element, und Sie müssen dem Browser mitteilen, das Bild nicht zu wiederholen. Sie müssen auch einige {{cssxref("margin")}} und {{cssxref("padding")}} bereitstellen, um das Hintergrundbild so zu platzieren, dass es nicht den Text überlappt.

```css
form {
  background: url("https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg")
    no-repeat;
  margin-top: 20px;
  padding-top: 50px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
