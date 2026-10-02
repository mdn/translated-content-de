---
title: "Aufgabe: Ein Feedbackformular strukturieren"
short-title: "Aufgabe: Feedbackformular"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

In dieser Aufgabe testen Sie, ob Sie ein Formular erstellen und strukturieren sowie weitere HTML-Funktionen hinzufügen können.

## Ausgangspunkt

Für diese Aufgabe erstellen Sie ein einfaches Website-Projekt – entweder in einem Ordner auf der Festplatte Ihres Computers oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des benötigten Codes steht bereits auf dieser Seite.

1. Erstellen Sie an einer geeigneten Stelle auf Ihrem Computer einen neuen Ordner namens `forms-challenge` (oder öffnen Sie einen Online-Editor und erstellen Sie dort ein neues Projekt).
2. Speichern Sie den folgenden HTML-Code in einer Datei namens `index.html` in diesem Ordner (oder fügen Sie ihn in den HTML-Bereich Ihres Online-Editors ein).

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

3. Speichern Sie den folgenden CSS-Code in einer Datei namens `style.css` in diesem Ordner (oder fügen Sie ihn in den CSS-Bereich Ihres Online-Editors ein).

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

## Aufgabenstellung

Stellen Sie sich vor, Sie hätten gerade im „little house in the woods“ übernachtet – einem Hotel, wie Sie zumindest dachten. Helfen Sie uns, ein fiktives Feedbackformular für dieses Hotel zu erstellen. Neben den erforderlichen Formularelementen und der Struktur des Formulars sollen Sie einige weitere HTML-Funktionen umsetzen.

### Formularelemente umsetzen

1. Wandeln Sie im Abschnitt „Facilities“ die ersten beiden Zeilengruppen jeweils in eine Gruppe von Radio-Buttons um. Jeder Radio-Button soll ein beschreibendes Label erhalten, und jede Gruppe eine Legend. Fügen Sie ein Attribut hinzu, damit in jeder Gruppe der erste Radio-Button standardmäßig ausgewählt ist.
2. Wandeln Sie im Abschnitt „Facilities“ die dritte Zeilengruppe in eine Gruppe von Checkboxen um. Jede Checkbox soll ein beschreibendes Label erhalten, und die Gruppe eine Legend.
3. Wandeln Sie im Abschnitt „About your hosts“ beide Zeilengruppen jeweils in ein Dropdown-Menü mit Optionen um. Jedes Menü soll ein beschreibendes Label erhalten.
4. Fügen Sie im Abschnitt „Any other feedback?“ ein mehrzeiliges Texteingabefeld hinzu und machen Sie die vorhandene Zeile zu dessen beschreibendem Label.
5. Fügen Sie im Abschnitt „Your details“ für jeden der drei aufgeführten Werte ein geeignetes Texteingabefeld hinzu. Machen Sie die vorhandenen Zeilen zu den jeweiligen Labels.
6. Machen Sie aus „Submit“ einen Button zum Absenden des Formulars.

### Formular strukturieren

1. Umschließen Sie den gesamten Formularinhalt mit einem geeigneten Element, das ihn als Formular kennzeichnet.
2. Fügen Sie innerhalb des Formulars für jeden Formularabschnitt ein Strukturelement hinzu, das den jeweiligen Abschnitt umschließt. Geben Sie jedem dieser Elemente die `class` `form-section`. Zur Orientierung ist jeder Formularabschnitt von zwei Paaren doppelter Bindestriche (`--`) umgeben. Nachdem Sie die Strukturelemente hinzugefügt haben, können Sie die Bindestriche entfernen.
3. Damit einige Paare aus Formularelement und Label jeweils in einer eigenen Zeile stehen, benötigen Sie zusätzliche Strukturelemente um diese Paare. Fügen Sie sie hinzu und geben Sie jedem die `class` `separator`.
4. Fügen Sie zwischen dem mehrzeiligen Texteingabefeld und seinem Label ein Zeilenumbruchelement ein, damit beide in getrennten Zeilen stehen.

### Weitere HTML-Funktionen

1. Mehrere Überschriften im Text müssen mit geeigneten Elementen ausgezeichnet werden:
   1. Die Überschrift der obersten Ebene: „We want your feedback!“.
   2. Die Überschriften der zweiten Ebene: „Facilities“, „About your hosts“, „Any other feedback?“ und „Your details“.
2. Der einleitende Absatz unter der Überschrift der obersten Ebene muss ebenfalls passend ausgezeichnet werden.
3. Machen Sie im einleitenden Absatz außerdem die Texte „little house in the woods“ und „prize draw“ zu Links. Da es noch keine Seiten gibt, auf die Sie verlinken können, verwenden Sie vorerst `#` als Platzhalter für die Ziel-URL.
4. Platzieren Sie unter dem einleitenden Absatz ein breites, flaches Bild als Dekoration. Der Bildpfad lautet `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg`. Da das Bild rein dekorativ ist, soll sein Alternativtext leer sein.
5. Recherchieren Sie als Zusatzaufgabe eine bessere Möglichkeit, das dekorative Bild in die Seite einzubinden, und versuchen Sie, diese umzusetzen. Dazu benötigen Sie eine andere Technologie als HTML, die in diesem Modul noch nicht behandelt wurde.

## Hinweise und Tipps

- Verwenden Sie den [W3C-HTML-Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu finden und zu beheben.
- Wenn Sie nicht weiterkommen und sich nicht vorstellen können, welche Elemente Sie wo einsetzen sollten, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts. Notieren Sie darin, welche Elemente Ihrer Meinung nach die einzelnen Blöcke umschließen sollten. Das ist äußerst hilfreich.

## Beispiel

Das folgende interaktive Beispiel zeigt, wie das Formular nach der Auszeichnung aussehen könnte. Falls Sie bei der Umsetzung nicht weiterkommen, sehen Sie sich die Lösung unten an.

{{embedlivesample("form-finished", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

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

```js hidden live-sample___form-finished
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
```

Für die Zusatzaufgabe gibt es eine möglicherweise bessere Möglichkeit, dekorative Bilder in eine Webseite einzubinden: [CSS-Hintergrundbilder](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images). Entfernen Sie das `<img>`-Element und verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("background")}}, um das Bild auf der Seite zu platzieren. Das `<form>`-Element eignet sich gut als Träger des Hintergrundbilds. Sie müssen dem Browser außerdem mitteilen, dass er das Bild nicht wiederholen soll. Legen Sie mit {{cssxref("margin")}} und {{cssxref("padding")}} genügend Abstand fest, damit sich Bild und Text nicht überlagern.

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
