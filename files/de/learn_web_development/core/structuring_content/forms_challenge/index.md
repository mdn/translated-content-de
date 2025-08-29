---
title: "Herausforderung: Strukturierung eines Feedback-Formulars"
short-title: "Herausforderung: Feedback-Formular"
slug: Learn_web_development/Core/Structuring_content/Forms_challenge
l10n:
  sourceCommit: dbf1f82bfdfeb12ab5e2a5fc65db5805fca91c29
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung testen wir Ihre Fähigkeit, ein Formular zu erstellen und zu strukturieren sowie einige andere HTML-Features hinzuzufügen.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir von Ihnen, dass Sie ein einfaches Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des benötigten Codes ist bereits auf dieser Seite gegeben.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `forms-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte aus, um ein neues Projekt zu erstellen).
2. Speichern Sie die folgende HTML-Auflistung in einer Datei innerhalb Ihres Ordners mit dem Namen `index.html` (oder fügen Sie sie in das HTML-Fenster Ihres Online-Editors ein).

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

3. Speichern Sie die folgende CSS-Auflistung in einer Datei innerhalb Ihres Ordners mit dem Namen `style.css` (oder fügen Sie sie in das CSS-Fenster Ihres Online-Editors ein).

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
     background-color: #ddd;
     width: 50%;
     margin: 0 auto;
     display: block;
   }

   button:hover,
   button:focus {
     background-color: #eee;
     cursor: pointer;
   }
   ```

## Projektauftrag

Stellen Sie sich vor, Sie hätten gerade in einem Hotel namens „kleines Haus im Wald“ übernachtet (nun ja, zumindest dachten Sie, es wäre ein Hotel). Wir möchten, dass Sie uns helfen, ein fiktives Feedback-Formular für das Hotel zu erstellen. Neben der Markierung der benötigten Funktionen und der Strukturierung des Formulars möchten wir, dass Sie einige zusätzliche HTML-Features implementieren.

### Implementierung von Formular-Steuerelementen

1. Im Abschnitt „Einrichtungen“ möchten wir, dass Sie die ersten beiden Zeilenpaare in Sets von Radiobuttons umwandeln, jeweils mit einem Label zur Beschreibung und einer Legende zur Beschreibung der gesamten Gruppe. Fügen Sie ein Attribut hinzu, damit der erste Radiobutton in jedem Fall standardmäßig ausgewählt ist.
2. Im Abschnitt „Einrichtungen“ verwandeln Sie das dritte Zeilenpaar in ein Set von Kontrollkästchen, jeweils mit einem Label zur Beschreibung und einer Legende zur Beschreibung der gesamten Gruppe.
3. Im Abschnitt „Über Ihre Gastgeber“ verwandeln Sie beide Zeilenpaare in ein Dropdown-Menü, jeweils mit einem Label zur Beschreibung.
4. Im Abschnitt „Sonstiges Feedback?“ fügen Sie ein mehrzeiliges Texteingabefeld hinzu und verwandeln die vorhandene Zeile in ihr beschreibendes Label.
5. Im Abschnitt „Ihre Daten“ fügen Sie für jeden der drei aufgelisteten Werte ein geeignetes Texteingabefeld hinzu. Verwandeln Sie die vorhandenen Zeilen in ihre Labels.
6. Wandeln Sie „Absenden“ in einen Absenden-Button für das Formular um.

### Strukturierung des Formulars

1. Umschließen Sie das Formular in einem geeigneten Wrapper-Element, um das Ganze als Formular zu kennzeichnen.
2. Fügen Sie wiederkehrende strukturelle Elemente innerhalb des Formulars hinzu, um jeden Formularbereich einzuschließen. Geben Sie jedem Formularbereichs-Element eine `class` von `form-section`. Um es einfacher zu machen, ist jeder Formularbereich von zwei Sets von Doppelleerzeichen (`--`) umgeben. Sie können die Doppelleerzeichen entfernen, wenn Sie Ihre strukturellen Elemente hinzugefügt haben.
3. Sie müssen zusätzliche strukturelle Elemente um einige der Kontroll-/Label-Paare hinzufügen, um sie in eigenen separaten Zeilen anzuzeigen. Fügen Sie diese jetzt hinzu, indem Sie jedem eine `class` von `separator` geben.
4. Fügen Sie ein Zeilenumbruch-Element zwischen dem mehrzeiligen Texteingabefeld und seinem Label ein, damit beide in separaten Zeilen angezeigt werden.

### Zusätzliche HTML-Features

1. Es gibt mehrere Überschriften im Text, die mit geeigneten Elementen markiert werden müssen:
   1. Die Überschrift der höchsten Ebene: „Wir wollen Ihr Feedback!“.
   2. Überschriften der zweiten Ebene: „Einrichtungen“, „Über Ihre Gastgeber“, „Sonstiges Feedback?“ und „Ihre Daten“.
2. Der einleitende Absatz unter der Überschrift der höchsten Ebene muss angemessen markiert werden.
3. Ebenfalls im einleitenden Absatz, verwandeln Sie den Text „kleines Haus im Wald“ und „Gewinnspiel“ in Links. Wir haben noch keine Seiten zum Verlinken, daher setzen Sie vorerst die Ziel-URL als `#` für einen Platzhalter.
4. Wir möchten, dass Sie ein breites, flaches Bild unter dem einleitenden Absatz als Dekoration platzieren. Der Bildpfad ist `https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg`, und wir möchten, dass Sie den alternativen Text dafür auf einen leeren Wert setzen, da es sich nur um ein dekoratives Element handelt.
5. Im Anschluss an den vorherigen Punkt, als Stretch-Ziel, recherchieren Sie eine bessere Methode, um das dekorative Bild auf der Seite einzufügen, und versuchen Sie, dies zu tun (dies erfordert eine andere Technologie als HTML, die wir in diesem Modul noch nicht behandelt haben).

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validator](https://validator.w3.org/), um unbeabsichtigte Fehler in Ihrem HTML zu erkennen – damit Sie sie beheben können.
- Wenn Sie feststecken und sich nicht vorstellen können, welche Elemente wo eingefügt werden sollen, zeichnen Sie ein einfaches Blockdiagramm des Seitenlayouts und schreiben Sie die Elemente auf, die Ihrer Meinung nach jeden Block umschließen sollten. Das ist äußerst hilfreich.

## Beispiel

Der folgende Screenshot zeigt ein Beispiel dafür, wie das Formular nach der Markierung aussehen könnte. Wenn Sie Schwierigkeiten haben, herauszufinden, wie Sie etwas davon erreichen können, sehen Sie sich die Lösung unter dem Live-Beispiel an.

![Das fertige Beispiel für die Herausforderung; ein Feedback-Formular mit zwei Sets von Radiobuttons, einem Set von Kontrollkästchen und zwei Dropdown-Auswahlmenüs](example-page.png)

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Ihr fertiges HTML sollte folgendermaßen aussehen:

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

    <p>We're very excited that you visited the <a href="#">little house in the woods</a>, and we want to hear what
    you thought of it! Please fill in the below sections. You don't need to provide your name or
    contact details, but if you do, we'll enter you into a <a href="#">prize draw</a> where you'll have a chance
    to win prizes.</p>

    <img src="https://mdn.github.io/shared-assets/images/examples/learn/woodland-strip.jpg" alt="">

    <form>

      <div class="form-section">
        <h2>Facilities</h2>

        <fieldset>
          <legend>Was the porridge</legend>
          <input type="radio" id="porridge-1" name="porridge" value="hot" checked><label for="porridge-1">Too hot?</label>
          <input type="radio" id="porridge-2" name="porridge" value="cold"><label for="porridge-2">Too cold?</label>
          <input type="radio" id="porridge-3" name="porridge" value="right"><label for="porridge-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Were the beds</legend>
          <input type="radio" id="beds-1" name="beds" value="hard" checked><label for=beds-1">Too hard?</label>
          <input type="radio" id="beds-2" name="beds" value="soft"><label for="beds-2">Too soft?</label>
          <input type="radio" id="beds-3" name="beds" value="right"><label for="beds-3">Just right?</label>
        </fieldset>

        <fieldset>
          <legend>Describe the chairs (select all you agree with)</legend>
          <input type="checkbox" id="comfy" name="comfy" /><label for="comfy">Comfy</label>
          <input type="checkbox" id="luxurious" name="luxurious" /><label for="luxurious">Luxurious</label>
          <input type="checkbox" id="hi-tech" name="hi-tech" /><label for="hi-tech">Hi-tech</label>
          <input type="checkbox" id="pretty" name="pretty" /><label for="pretty">Pretty</label>
          <input type="checkbox" id="majestic" name="majestic" /><label for="majestic">Majestic</label>
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
        <br>
        <textarea id="comments" name="comments"></textarea>
      </div>

      <div class="form-section">
        <h2>Your details</h2>

        <div class="separator">
          <label for="name">Name</label>
          <input type="text" id="name" name="name">
        </div>

        <div class="separator">
          <label for="email">Email</label>
          <input type="email" id="email" name="email">
        </div>

        <div class="separator">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone">
        </div>
      </div>

      <div class="form-section">
        <button>Submit</button>
      </div>
    </form>
  </body>
</html>
```

Für das Stretch-Ziel ist eine bessere Methode zum Hinzufügen dekorativer Bilder zu einer Webseite die Verwendung von [CSS-Hintergrundbildern](/de/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders#background_images). Löschen Sie das `<img>`-Element und verwenden Sie die CSS-{{cssxref("background")}}-Eigenschaft, um das Bild stattdessen auf der Seite zu platzieren. Ein gutes Element, um das Hintergrundbild zu platzieren, wäre das `<form>`-Element, und Sie müssen dem Browser mitteilen, das Bild nicht zu wiederholen. Außerdem müssen Sie einige {{cssxref("margin")}} und {{cssxref("padding")}} bereitstellen, um das Hintergrundbild so anzuordnen, dass es nicht den Text überlappt.

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
