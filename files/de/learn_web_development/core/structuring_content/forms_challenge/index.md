---
title: "Herausforderung: Strukturierung eines Feedback-Formulars"
short-title: "Herausforderung: Feedback-Formular"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: 80560f4ccab5f420d808240552197bbe43fe68b7
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung werden wir Ihre Fähigkeit testen, ein Formular zu erstellen und zu strukturieren sowie einige andere HTML-Features hinzuzufügen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein grundlegendes Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Viel des benötigten Codes ist bereits auf dieser Seite bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `forms-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte durch, um ein neues Projekt zu erstellen).
2. Speichern Sie das folgende HTML-Listing in einer Datei in Ihrem Ordner mit dem Namen `index.html` (oder fügen Sie es in den HTML-Bereich Ihres Online-Editors ein).

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

3. Speichern Sie das folgende CSS-Listing in einer Datei in Ihrem Ordner mit dem Namen `style.css` (oder fügen Sie es in den CSS-Bereich Ihres Online-Editors ein).

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

Wir möchten Sie bitten, sich vorzustellen, dass Sie gerade in einem Hotel namens "Das kleine Haus im Wald" übernachtet haben (nun ja, zumindest dachten Sie, es sei ein Hotel). Wir möchten, dass Sie uns helfen, ein fiktives Feedback-Formular für das Hotel zu erstellen. Neben der Auszeichnung der erforderlichen Features und der Strukturierung des Formulars gibt es einige zusätzliche HTML-Features, die Sie umsetzen sollen.

### Implementierung von Formularelementen

1. Im Abschnitt "Einrichtungen" möchten wir, dass Sie die ersten beiden Zeilen in Gruppen von Radio-Buttons mit jeweils einem beschreibenden Label und einer Legende für die gesamte Gruppe umwandeln. Fügen Sie ein Attribut hinzu, das den ersten Radio-Button in jedem Fall standardmäßig auswählt.
2. Wandeln Sie im Abschnitt "Einrichtungen" die dritte Reihe in eine Gruppe von Checkboxen um, jeweils mit einem beschreibenden Label und einer Legende für die gesamte Gruppe.
3. Wandeln Sie im Abschnitt "Über Ihre Gastgeber" beide Linien in ein Dropdown-Menü mit Optionen um, wobei jede Linie ein beschreibendes Label hat.
4. Fügen Sie im Abschnitt "Sonstiges Feedback?" ein mehrzeiliges Texteingabefeld hinzu und wandeln Sie die bestehende Zeile in ein beschreibendes Label um.
5. Fügen Sie im Abschnitt "Ihre Daten" einen geeigneten Textinput-Typ hinzu, um jeden der drei aufgelisteten Werte zu erfassen. Wandeln Sie die bestehenden Zeilen in ihre Labels um.
6. Wandeln Sie "Abschicken" in einen Abschick-Button für das Formular um.

### Strukturierung des Formulars

1. Umschließen Sie das Formular in einem geeigneten Wrapper-Element, um das Ganze als Formular zu kennzeichnen.
2. Fügen Sie wiederholende Strukturelemente im Formular hinzu, um jeden Formularabschnitt zu umschließen. Geben Sie jedem Formularabschnittselement eine `class` von `form-section`. Um es Ihnen einfacher zu machen, ist jeder Formularabschnitt von zwei Sätzen von Doppeltiren (`--`) umgeben. Sie können die Doppeltire entfernen, wenn Sie Ihre Strukturelemente hinzugefügt haben.
3. Sie müssen zusätzliche Strukturelemente um einige der Kontroll-/Label-Paare einschließen, damit sie auf eigenen separaten Zeilen stehen. Fügen Sie diese jetzt hinzu und geben Sie jedem eine `class` von `separator`.
4. Fügen Sie ein Zeilenumbruch-Element zwischen die mehrzeilige Texteingabe und ihr Label hinzu, damit diese beiden auf separaten Zeilen stehen.

### Zusätzliche HTML-Features

1. Es gibt mehrere Überschriften im Text, die mit geeigneten Elementen ausgezeichnet werden müssen:
   1. Die oberste Überschrift: "Wir möchten Ihr Feedback!".
   2. Zweitstufige Überschriften: "Einrichtungen", "Über Ihre Gastgeber", "Sonstiges Feedback?" und "Ihre Daten".
2. Der einleitende Absatz unter der obersten Überschrift muss entsprechend ausgezeichnet werden.
3. Ebenfalls im einleitenden Absatz, wandeln Sie die Texte "kleines Haus im Wald" und "Preisausschreiben" in Links um. Wir haben noch keine Seiten, mit denen wir verlinken könnten, setzen Sie daher den Ziel-URL zunächst als Platzhalter auf `#`.
4. Wir möchten, dass Sie unterhalb des einleitenden Absatzes ein breites, flaches Bild als Dekoration platzieren. Der Bildpfad ist `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg`, und als Alternativtext möchten wir einen leeren Wert setzen, da es sich nur um Dekoration handelt.
5. Als Stretch-Ziel, recherchieren Sie einen besseren Weg, um das dekorative Bild in die Seite einzufügen, und versuchen Sie dies umzusetzen (dies betrifft eine andere Technologie als HTML, die wir in diesem Modul noch nicht behandelt haben).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu erkennen - damit Sie diese beheben können.
- Wenn Sie nicht weiterkommen und nicht sehen, welche Elemente wo platziert werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente darauf, die jeden Block umschließen sollten. Das ist äußerst hilfreich.

## Beispiel

Das folgende Bildschirmfoto zeigt ein Beispiel dafür, wie das Formular nach der Auszeichnung aussehen könnte. Wenn Sie Probleme haben, dies zu erreichen, sehen Sie sich die Lösung unter dem Live-Beispiel an.

![Das fertige Beispiel für die Herausforderung; ein Feedback-Formular, das zwei Gruppen von Radio-Buttons, eine Gruppe von Checkboxen und zwei Dropdown-Auswahlmenüs zeigt](example-page.png)

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

```html
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

Für das Stretch-Ziel ist es möglicherweise ein besserer Weg, dekorative Bilder mit [CSS-Hintergrundbildern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images) auf einer Webseite hinzuzufügen. Löschen Sie das `<img>`-Element und verwenden Sie die CSS-Eigenschaft {{cssxref("background")}}, um das Bild stattdessen auf der Seite zu platzieren. Ein gutes Element, auf dem das Hintergrundbild platziert werden könnte, wäre das `<form>`-Element, und Sie müssen dem Browser mitteilen, das Bild nicht zu wiederholen. Sie müssen auch einige {{cssxref("margin")}} und {{cssxref("padding")}} bereitstellen, um das Hintergrundbild so zu platzieren, dass es den Text nicht überlappt.

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
