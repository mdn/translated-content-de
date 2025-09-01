---
title: "Herausforderung: Strukturierung eines Feedback-Formulars"
short-title: "Herausforderung: Feedback-Formular"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung möchten wir Ihre Fähigkeit testen, ein Formular zu erstellen und zu strukturieren sowie einige andere HTML-Funktionen hinzuzufügen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein einfaches Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des Codes, den Sie benötigen, wird auf dieser Seite bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer namens `forms-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die notwendigen Schritte aus, um ein neues Projekt zu erstellen).
2. Speichern Sie das folgende HTML-Listing in einer Datei in Ihrem Ordner namens `index.html` (oder fügen Sie es in das HTML-Fenster Ihres Online-Editors ein).

   ```html-nolint
   <!DOCTYPE html>
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
       Hi tec
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

3. Speichern Sie das folgende CSS-Listing in einer Datei in Ihrem Ordner namens `style.css` (oder fügen Sie es in das CSS-Fenster Ihres Online-Editors ein).

   ```css
   /* Basic font styles */

   body {
     background-color: white;
     color: #333333;
     font: 1em / 1.4 system-ui;
     padding: 1em;
     width: 800px;
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

Stellen Sie sich vor, Sie haben gerade in einem Hotel namens "little house in the woods" übernachtet (na ja, zumindest dachten Sie, es sei ein Hotel). Wir möchten, dass Sie uns helfen, ein fiktives Feedback-Formular für das Hotel zu erstellen. Neben dem Markieren der erforderlichen Funktionen und der Strukturierung des Formulars gibt es einige zusätzliche HTML-Features, die Sie implementieren sollen.

### Implementierung von Formularelementen

1. Im Abschnitt "Ausstattung" möchten wir, dass Sie die ersten beiden Zeilen in Radiobutton-Sets mit einem Label für jeden und eine Legende, die die gesamte Gruppe beschreibt, umwandeln. Fügen Sie ein Attribut hinzu, damit der erste Radiobutton in jedem Fall standardmäßig ausgewählt ist.
2. Im Abschnitt "Ausstattung" verwandeln Sie das dritte Set von Zeilen in eine Gruppe von Kontrollkästchen, mit einem Label, das jedes beschreibt und einer Legende, die die gesamte Gruppe beschreibt.
3. Im Abschnitt "Über Ihre Gastgeber" verwandeln Sie beide Zeilen in ein Dropdown-Menü mit Optionen, mit einem Label, das jedes beschreibt.
4. Im Abschnitt "Haben Sie weiteres Feedback?" fügen Sie ein mehrzeiliges Texteingabefeld hinzu und wandeln Sie die vorhandene Zeile in das beschreibende Label um.
5. Im Abschnitt "Ihre Details" fügen Sie einen geeigneten Text-Inputtyp hinzu, um jeden der drei aufgelisteten Werte zu erfassen. Wandeln Sie die vorhandenen Zeilen in ihre Labels um.
6. Verwandeln Sie "Absenden" in einen Absende-Button für das Formular.

### Strukturierung des Formulars

1. Umschließen Sie das Formular mit einem geeigneten Umschlagelement, um das Ganze als Formular zu spezifizieren.
2. Fügen Sie wiederholte Strukturelemente innerhalb des Formulars hinzu, um jeden Formularabschnitt zu umschließen. Geben Sie jedem Formularelement eine `class` von `form-section`. Um es Ihnen leichter zu machen, ist jeder Formularabschnitt von zwei Sätzen doppelter Bindestriche (`--`) umgeben. Sie können die doppelten Bindestriche entfernen, wenn Sie Ihre Strukturelemente hinzugefügt haben.
3. Sie müssen zusätzliche Strukturelemente um einige der Kontroll-/Label-Paare einfügen, damit sie auf ihren eigenen separaten Zeilen stehen. Fügen Sie diese jetzt hinzu und geben Sie jedem eine `class` von `separator`.
4. Fügen Sie ein Zeilenumbruch-Element zwischen der mehrzeiligen Texteingabebox und ihrem Label hinzu, damit die beiden auf separaten Zeilen stehen.

### Zusätzliche HTML-Funktionen

1. Es gibt mehrere Überschriften im Text, die mit geeigneten Elementen ausgezeichnet werden müssen:
   1. Die Überschrift der obersten Ebene: "We want your feedback!".
   2. Zweite Ebene Überschriften: "Ausstattung", "Über Ihre Gastgeber", "Haben Sie weiteres Feedback?" und "Ihre Details".
2. Der Eröffnungsabsatz unterhalb der Top-Level-Überschrift muss entsprechend ausgezeichnet werden.
3. Ebenfalls im Eröffnungsabsatz, wandeln Sie den Text "little house in the woods" und "preisausschreiben" in Links um. Wir haben noch keine Seiten zum Verlinken, daher setzen Sie das Ziel-URL vorerst einfach als `#` als Platzhalter.
4. Wir möchten, dass Sie ein breites, flaches Bild unterhalb des Eröffnungsabsatzes als Dekoration platzieren. Der Bildpfad lautet `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg`, und wir möchten, dass Sie den Alternativtext dafür auf einen leeren Wert setzen, da es sich nur um Dekoration handelt.
5. Als Weiterführung des vorherigen Punktes, als Stretch-Ziel, recherchieren Sie eine bessere Möglichkeit, das dekorative Bild auf der Seite zu platzieren, und versuchen Sie, dies zu tun (dies beinhaltet eine andere Technologie als HTML, die wir in diesem Modul noch nicht behandelt haben).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu erfassen, damit Sie diese beheben können.
- Wenn Sie nicht weiterkommen und sich nicht vorstellen können, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente auf, von denen Sie denken, dass sie jeden Block umschließen sollen. Dies ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel, wie das Formular aussehen könnte, nachdem es ausgezeichnet wurde. Wenn Sie Schwierigkeiten haben, einige dieser Punkte zu erreichen, siehe die Lösung unter dem Live-Beispiel.

![Das fertige Beispiel für die Herausforderung; ein Feedback-Formular, das zwei Sätze von Radiobuttons, ein Set von Kontrollkästchen und zwei Dropdown-Auswahlmenüs zeigt](example-page.png)

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<!DOCTYPE html>
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
          <input
            type="radio"
            id="porridge-1"
            name="porridge"
            value="hot"
            checked /><label for="porridge-1">Too hot?</label>
          <input
            type="radio"
            id="porridge-2"
            name="porridge"
            value="cold" /><label for="porridge-2">Too cold?</label>
          <input
            type="radio"
            id="porridge-3"
            name="porridge"
            value="right" /><label for="porridge-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Were the beds</legend>
          <input
            type="radio"
            id="beds-1"
            name="beds"
            value="hard"
            checked /><label for="beds-1">Too hard?</label>
          <input type="radio" id="beds-2" name="beds" value="soft" /><label
            for="beds-2"
            >Too soft?</label
          >
          <input type="radio" id="beds-3" name="beds" value="right" /><label
            for="beds-3"
            >Just right?</label
          >
        </fieldset>

        <fieldset>
          <legend>Describe the chairs (select all you agree with)</legend>
          <input type="checkbox" id="comfy" name="comfy" /><label for="comfy"
            >Comfy</label
          >
          <input type="checkbox" id="luxurious" name="luxurious" /><label
            for="luxurious"
            >Luxurious</label
          >
          <input type="checkbox" id="hi-tech" name="hi-tech" /><label
            for="hi-tech"
            >Hi-tech</label
          >
          <input type="checkbox" id="pretty" name="pretty" /><label for="pretty"
            >Pretty</label
          >
          <input type="checkbox" id="majestic" name="majestic" /><label
            for="majestic"
            >Majestic</label
          >
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
            <option value="randy">Cousin Randy</option>
          </select>
        </div>

        <div class="separator">
          <label for="greeting">Which greeting did you prefer?</label>
          <select name="greeting" id="greeting">
            <option value="papa">Wave</option>
            <option value="mama">Friendly greeting</option>
            <option value="junior">Growl</option>
            <option value="randy">Claw marks in the door</option>
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

Für das Stretch-Ziel könnte eine bessere Möglichkeit, dekorative Bilder zu einer Webseite hinzuzufügen, darin bestehen, [CSS-Hintergrundbilder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images) zu verwenden. Löschen Sie das `<img>`-Element und verwenden Sie die CSS-{{cssxref("background")}}-Eigenschaft, um das Bild stattdessen auf der Seite zu platzieren. Ein gutes Element, um das Hintergrundbild darauf zu platzieren, wäre das `<form>`-Element, und Sie müssen dem Browser mitteilen, dass das Bild nicht wiederholt werden soll. Sie müssen auch etwas {{cssxref("margin")}} und {{cssxref("padding")}} bereitstellen, um das Hintergrundbild zu begrenzen, damit es den Text nicht überlappt.

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
