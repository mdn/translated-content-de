---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: ac1df5c699ff810cccba4ccd4e3d5f5c696b5ffb
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente auf allgemeine Weise behandelt. Dies umfasste z.B. die Verwendung von Pseudoklassen, wie `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinem
        Wissen über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es im Fokus steht (d.h. wenn es über die Tastatur angesteuert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste während einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten Ihnen mehrere nützliche Zielkriterien. Wir werden diese unten im Detail besprechen, aber kurz gesagt, die wichtigsten, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielt auf Elemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielt auf Formularelemente ab, die je nach den auf sie gesetzten Validierungseinschränkungen gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielt auf Elemente ab, die deaktiviert sein können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut unterstützen), basierend darauf, ob sie momentan aktiviert oder deaktiviert sind, und auf schreibgeschützte oder schreibbare Formularelemente (z.B. Elemente mit dem `readonly`-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielt jeweils auf Kontrollkästchen und Optionsfelder ab, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) sind, und auf die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität. Natürlich sollten Sie Ihre Formularimplementierungen jedoch sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier behandelten Pseudoklassen sind darauf ausgerichtet, Formularelemente basierend auf ihrem Validierungszustand zu stylen (ist ihre Eingabe gültig oder nicht?). Sie erfahren viel mehr über das Setzen und Kontrollieren von Validierungseinschränkungen in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir die Dinge einfach bezüglich der Formularvalidierung, um nicht zu verwirren.

## Eingabefelder stylen basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob ein Formulareingabefeld erforderlich ist (es muss ausgefüllt werden, bevor das Formular abgesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich eingereicht wird.
Zum Beispiel sind der Vorname und der Nachname im folgenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

```html live-sample___optional-required-styles
<form>
  <fieldset>
    <legend>Feedback form</legend>
    <div>
      <label for="fname">First name: </label>
      <input id="fname" name="fname" type="text" required />
    </div>
    <div>
      <label for="lname">Last name: </label>
      <input id="lname" name="lname" type="text" required />
    </div>
    <div>
      <label for="email"> Email address (if you want a response): </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir z.B. das folgende CSS auf das obige HTML anwenden:

```css hidden live-sample___optional-required-styles
body {
  font-family: sans-serif;
  margin: 20px auto;
  max-width: 70%;
}

fieldset {
  padding: 10px 30px 0;
}

legend {
  color: white;
  background: black;
  padding: 5px 10px;
}

fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}

button,
label,
input {
  display: block;
  font-size: 100%;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```css live-sample___optional-required-styles
input:required {
  border: 2px solid;
}

input:optional {
  border: 2px dashed;
}
```

Die erforderlichen Felder haben einen durchgehenden Rahmen, und das optionale Feld hat einen gestrichelten Rahmen.
Sie können das Formular auch versuchen abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Browser Ihnen standardmäßig anzeigen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' gegenüber 'optionalen' Elementen in Formularen nur mit Farben zu stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den jeweiligen Steuerelementen verbunden ist.
Im nächsten Abschnitt betrachten wir ein besseres Beispiel dafür, wie man erforderliche Felder mit `:required` und generiertem Inhalt kennzeichnet.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional`-Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden und zusätzliche Stile für erforderliche Elemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das Attribut `required` gesetzt hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt ist, aber nur der mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, und wir dachten, jetzt wäre ein guter Zeitpunkt, um ein wenig detaillierter darauf einzugehen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Stück Inhalt wird nicht zum DOM hinzugefügt, möglicherweise ist es daher für einige Screenreader unsichtbar. Weil es sich um ein Pseudoelement handelt, kann es mit Stilen genauso angesprochen werden wie jedes tatsächlich existierende DOM-Element.

Dies ist wirklich nützlich, wenn Sie einem Element, wie z.B. einem Label oder Symbol, einen visuellen Hinweis hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Barrierefreiheit für alle Benutzer sicherzustellen. Zum Beispiel können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt ist:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein von ihnen entdeckter Radio-Button oder ein Kontrollkästchen ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element auslesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Anzeige von generiertem Inhalt. Alle Eingabefelder, die dynamischen Text anzeigen, z.B. `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, wie `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional: Dieses Mal werden wir das Erscheinungsbild des Eingabefelds selbst nicht verändern — wir verwenden generierten Inhalt, um ein kennzeichnendes Label hinzuzufügen.

Zuerst fügen wir dem oberen Teil des Formulars einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer hören das Wort "erforderlich" als zusätzliche Information, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingabefelder keinen generierten Inhalt, sodass wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzufügen, an dem der generierte Inhalt "aufgehängt" werden kann:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das Span in eine neue Zeile unterhalb des Eingabefeldes fiel, weil sowohl das Eingabefeld als auch das Label auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, damit es zu einem Flex-Container wird, das seine Inhalte auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung hiervon ist, dass Label und Eingabefeld auf separaten Zeilen stehen, weil beide `width: 100%` haben, aber das `<span>` eine Breite von `0` hat, sodass es auf derselben Zeile wie das Eingabefeld stehen kann.

Nun zum generierten Inhalt. Wir erstellen ihn mit diesem CSS:

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "required";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen können, und positionieren es relativ zum `<span>` statt zum `<body>` (Der generierte Inhalt verhält sich, als sei er ein Knoten des Elements, auf dem er generiert wurde, bezüglich Positionierung).

Dann geben wir dem generierten Inhalt den Text "erforderlich", was unser Label darstellen soll, und stylen und positionieren es, wie wir es möchten. Das Ergebnis sehen Sie unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

```html hidden live-sample___required-optional-generated
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>:required and :optional with generated content</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
        margin: 20px auto;
        max-width: 460px;
      }

      fieldset {
        padding: 10px 30px 0;
      }

      legend {
        color: white;
        background: black;
        padding: 5px 10px;
      }

      fieldset > div {
        margin-bottom: 20px;
        display: flex;
        flex-flow: row wrap;
      }

      button,
      label,
      input {
        display: block;
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        height: 30px;
      }

      input {
        box-shadow: inset 1px 1px 3px #ccc;
        border-radius: 5px;
      }

      input:hover,
      input:focus {
        background-color: #eee;
      }

      input + span {
        position: relative;
      }

      input:required + span::after {
        font-size: 0.7rem;
        position: absolute;
        content: "required";
        color: white;
        background-color: black;
        padding: 5px 10px;
        top: -26px;
        left: -70px;
      }

      button {
        width: 60%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Feedback form</legend>

        <p>Required fields are labelled with "required".</p>
        <div>
          <label for="fname">First name: </label>
          <input id="fname" name="fname" type="text" required />
          <span></span>
        </div>
        <div>
          <label for="lname">Last name: </label>
          <input id="lname" name="lname" type="text" required />
          <span></span>
        </div>
        <div>
          <label for="email"
            >Email address (include if you want a response):
          </label>
          <input id="email" name="email" type="email" />
          <span></span>
        </div>
        <div><button>Submit</button></div>
      </fieldset>
    </form>
    <script>
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

{{EmbedLiveSample("required-optional-generated", "100%", 430, , , , , "allow-forms")}}

## Styling von Steuerelementen basierend darauf, ob deren Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch von innerhalb/außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungslimits](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen ausgewählt werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die Sie dabei beachten sollten:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und daher mit `:valid` übereinstimmend.
- Elemente mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (übereinstimmend mit) `:invalid`, wenn die eingegebenen Daten nicht dem entsprechenden Muster entsprechen (sie sind jedoch gültig, wenn leer).
- Elemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute spezifiziert sind, sind (übereinstimmend mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Wege, ein Element übereinstimmend mit `:valid`/`:invalid` zu machen, wie Sie im Artikel zur [Client-seitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Schauen wir uns nun ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt zu erzeugen, den wir verwenden, um Indikatoren für gültige/ungültige Daten anzubringen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Indikatoren bereitzustellen, verwenden wir folgendes CSS:

```css
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
```

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann abhängig davon, ob die Formulardaten gültig oder ungültig sind, unterschiedlichen generierten Inhalt absolut — ein grünes Häkchen oder ein rotes Kreuz. Um der ungültigen Eingabe etwas Dringlichkeit zu verleihen, haben wir den Eingabefeldern auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwenden.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___valid-invalid
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>:valid and :invalid example</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
        margin: 20px auto;
        max-width: 460px;
      }

      fieldset {
        padding: 10px 30px 0;
      }

      legend {
        color: white;
        background: black;
        padding: 5px 10px;
      }

      fieldset > div {
        margin-bottom: 20px;
        display: flex;
        flex-flow: row wrap;
      }

      button,
      label,
      input {
        display: block;
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        height: 30px;
      }

      input {
        box-shadow: inset 1px 1px 3px #ccc;
        border-radius: 5px;
      }

      input:hover,
      input:focus {
        background-color: #eee;
      }

      input + span {
        position: relative;
      }

      input:required + span::after {
        font-size: 0.7rem;
        position: absolute;
        content: "required";
        color: white;
        background-color: black;
        padding: 5px 10px;
        top: -26px;
        left: -70px;
      }

      input + span::before {
        position: absolute;
        right: -20px;
        top: 5px;
      }

      input:invalid {
        border: 2px solid red;
      }

      input:invalid + span::before {
        content: "✖";
        color: red;
      }

      input:valid + span::before {
        content: "✓";
        color: green;
      }

      button {
        width: 60%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Feedback form</legend>

        <p>Required fields are labelled with "required".</p>
        <div>
          <label for="fname">First name: </label>
          <input id="fname" name="fname" type="text" required />
          <span></span>
        </div>
        <div>
          <label for="lname">Last name: </label>
          <input id="lname" name="lname" type="text" required />
          <span></span>
        </div>
        <div>
          <label for="email"
            >Email address (include if you want a response):
          </label>
          <input id="email" name="email" type="email" />
          <span></span>
        </div>
        <div><button>Submit</button></div>
      </fieldset>
    </form>
    <script>
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

{{EmbedLiveSample("valid-invalid", "100%", 430, , , , , "allow-forms")}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen, die zu berücksichtigen sind — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese passen zu numerischen Eingaben, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute festgelegt sind, wenn deren Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Nummerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten innerhalb des Bereichs liegen, auch mit der `:valid`-Pseudoklasse übereinstimmen, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid`-Pseudoklasse übereinstimmen. Warum gibt es beide? Es geht bei der Frage wirklich um Semantik — außerhalb des Bereichs ist ein spezifischerer Typ der ungültigen Kommunikation, sodass Sie vielleicht eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für die Benutzer hilfreicher ist als nur das Wort "ungültig". Sie möchten möglicherweise sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut und auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie um zu sagen, ob sie erforderlich sind.

Das nummerische Eingabefeld sieht folgendermaßen aus:

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

Und das CSS sieht so aus:

```css
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Required";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Outside allowable value range";
  left: -182px;
}
```

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel aufgeteilt haben, und den einzelnen `::after`-Inhalten für die `:required`- und `:out-of-range`-Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___out-of-range
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>:out-of-range example</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
        margin: 20px auto;
        max-width: 460px;
      }

      fieldset {
        padding: 10px 30px 0;
      }

      legend {
        color: white;
        background: black;
        padding: 5px 10px;
      }

      fieldset > div {
        margin-bottom: 20px;
        display: flex;
        flex-flow: row wrap;
      }

      button,
      label,
      input {
        display: block;
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        height: 30px;
      }

      input {
        box-shadow: inset 1px 1px 3px #ccc;
        border-radius: 5px;
      }

      input:hover,
      input:focus {
        background-color: #eee;
      }

      input + span {
        position: relative;
      }

      input + span::after {
        font-size: 0.7rem;
        position: absolute;
        padding: 5px 10px;
        top: -26px;
      }

      input:required + span::after {
        color: white;
        background-color: black;
        content: "required";
        left: -70px;
      }

      input:out-of-range + span::after {
        color: white;
        background-color: red;
        width: 155px;
        content: "Outside allowable value range";
        left: -182px;
      }

      input + span::before {
        position: absolute;
        right: -20px;
        top: 5px;
      }

      input:invalid {
        border: 2px solid red;
      }

      input:invalid + span::before {
        content: "✖";
        color: red;
      }

      input:valid + span::before {
        content: "✓";
        color: green;
      }

      button {
        width: 60%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Feedback form</legend>

        <p>Required fields are labelled with "required".</p>
        <div>
          <label for="name">Name: </label>
          <input id="name" name="name" type="text" required />
          <span></span>
        </div>
        <div>
          <label for="age">Age (must be 12+): </label>
          <input
            id="age"
            name="age"
            type="number"
            min="12"
            max="120"
            required />
          <span></span>
        </div>
        <div>
          <label for="email"
            >Email address (include if you want a response):
          </label>
          <input id="email" name="email" type="email" />
          <span></span>
        </div>
        <div><button>Submit</button></div>
      </fieldset>
    </form>
    <script>
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

{{EmbedLiveSample("out-of-range", "100%", 430, , , , , "allow-forms")}}

Es ist möglich, dass die Nummer eingabe sowohl erforderlich als auch außerhalb des Bereichs zugleich ist. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, treten die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) in Kraft und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Das funktioniert recht gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" zusammen mit einem roten Kreuz und einem Rahmen angezeigt. Wenn Sie jedoch ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Altersfeld dann auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen Wert außerhalb des Bereichs einzugeben, müssen Sie tatsächlich das Formular fokussieren und den Wert mit der Tastatur eingeben. Die Drehschaltflächen erlauben es Ihnen nicht, den Wert außerhalb des zulässigen Bereichs zu inkrementieren/dekrementieren.

## Styling aktivierter und deaktivierter Eingaben sowie schreibgeschützter und beschreibbarer

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können über {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn bestimmte Daten für einen Benutzer nicht zutreffend sind, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn das Formular abgesendet wird. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und können Sie die Rechnungsadressfelder ebenso deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Erstens ist das HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse aus- und einzuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

```html
<form>
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <div>
      <label for="name1">Name: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">Address: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="zip-code1">Zip/postal code: </label>
      <input id="zip-code1" name="zip-code1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>Billing address</legend>
    <div>
      <label for="billing-checkbox">Same as shipping address:</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">Name: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">
        Address:
      </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="zip-code2" class="billing-label disabled-label">
        Zip/postal code:
      </label>
      <input id="zip-code2" name="zip-code2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>Submit</button></div>
</form>
```

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind wie folgt:

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Wir haben die Eingaben, die wir deaktivieren wollten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingabefeldern stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Abschließend haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

```js
// Wait for the page to finish loading
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Attach `change` event listener to checkbox
    document
      .getElementById("billing-checkbox")
      .addEventListener("change", toggleBilling);
  },
  false,
);

function toggleBilling() {
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}
```

Hierbei wird das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet, um den Benutzer die Rechnungsfelder aktivieren/deaktivieren zu lassen und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___enabled-disabled-shipping
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>:enabled and :disabled demo — shipping form</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
        margin: 20px auto;
        max-width: 460px;
      }

      fieldset {
        padding: 10px 30px 0;
        margin-bottom: 20px;
      }

      legend {
        color: white;
        background: black;
        padding: 5px 10px;
      }

      fieldset > div {
        margin-bottom: 20px;
        display: flex;
      }

      button,
      label,
      input[type="text"] {
        display: block;
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        height: 30px;
      }

      input {
        box-shadow: inset 1px 1px 3px #ccc;
        border-radius: 5px;
      }

      input:hover,
      input:focus {
        background-color: #eee;
      }

      input[type="text"]:disabled {
        background: #eee;
        border: 1px solid #ccc;
      }

      label:has(+ :disabled) {
        color: #aaa;
      }

      button {
        width: 60%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset id="shipping">
        <legend>Shipping address</legend>
        <div>
          <label for="name1">Name: </label>
          <input id="name1" name="name1" type="text" required />
        </div>
        <div>
          <label for="address1">Address: </label>
          <input id="address1" name="address1" type="text" required />
        </div>
        <div>
          <label for="pcode1">Zip/postal code: </label>
          <input id="pcode1" name="pcode1" type="text" required />
        </div>
      </fieldset>
      <fieldset id="billing">
        <legend>Billing address</legend>
        <div>
          <label for="billing-checkbox">Same as shipping address:</label>
          <input type="checkbox" id="billing-checkbox" checked />
        </div>
        <div>
          <label for="name" class="billing-label">Name: </label>
          <input id="name" name="name" type="text" disabled required />
        </div>
        <div>
          <label for="address2" class="billing-label">Address: </label>
          <input id="address2" name="address2" type="text" disabled required />
        </div>
        <div>
          <label for="pcode2" class="billing-label">Zip/postal code: </label>
          <input id="pcode2" name="pcode2" type="text" disabled required />
        </div>
      </fieldset>

      <div><button>Submit</button></div>
    </form>

    <script>
      // Wait for the page to finish loading
      document.addEventListener(
        "DOMContentLoaded",
        function () {
          // Attach `change` event listener to checkbox
          document
            .getElementById("billing-checkbox")
            .addEventListener("change", toggleBilling);
        },
        false,
      );

      function toggleBilling() {
        // Select the billing text fields
        let billingItems = document.querySelectorAll(
          '#billing input[type="text"]',
        );

        // Toggle the billing text fields
        for (let i = 0; i < billingItems.length; i++) {
          billingItems[i].disabled = !billingItems[i].disabled;
        }
      }

      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

{{EmbedLiveSample("enabled-disabled-shipping", "100%", 580, , , , , "allow-forms")}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umgeschaltet werden. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitbar sind — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly`-Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details auf diese Seite gesendet hat, um den Benutzer alles an einem Ort überprüfen zu lassen, alle nötigen Daten hinzuzufügen, und dann die Bestellung durch Einreichen zu bestätigen. An diesem Punkt können alle endgültigen Formulardaten in einem Schritt an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das oberste eingegebene Set von Formularen nicht bearbeitbar ist, allerdings werden die Werte übermittelt, wenn das Formular eingereicht wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` folgendermaßen gestylt:

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Das vollständige Beispiel sieht so aus (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___readonly-confirmation
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>:read-only demo — confirmation form</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
        margin: 20px auto;
        max-width: 460px;
      }

      fieldset {
        padding: 10px 30px 0;
        margin-bottom: 20px;
      }

      legend {
        color: white;
        background: black;
        padding: 5px 10px;
      }

      fieldset > div {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
      }

      button,
      label,
      input[type="text"],
      textarea {
        display: block;
        font-family: inherit;
        font-size: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        padding: 5px;
        height: 30px;
      }

      input[type="text"],
      textarea {
        width: 50%;
      }

      textarea {
        height: 110px;
        resize: none;
      }

      label {
        width: 40%;
      }

      input:hover,
      input:focus,
      textarea:hover,
      textarea:focus {
        background-color: #eee;
      }

      button {
        width: 60%;
        margin: 20px auto;
      }

      input:read-only,
      textarea:read-only {
        border: 0;
        box-shadow: none;
        background-color: white;
      }

      textarea:read-write {
        box-shadow: inset 1px 1px 3px #ccc;
        border-radius: 5px;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Check shipping details</legend>
        <div>
          <label for="name">Name: </label>
          <input id="name" name="name" type="text" value="Mr Soft" readonly />
        </div>
        <div>
          <label for="address">Address: </label>
          <textarea id="address" name="address" readonly>
23 Elastic Way,
Viscous,
Bright Ridge,
CA
</textarea
          >
        </div>
        <div>
          <label for="pcode">Zip/postal code: </label>
          <input id="pcode" name="pcode" type="text" value="94708" readonly />
        </div>
      </fieldset>

      <fieldset>
        <legend>Final instructions</legend>
        <div>
          <label for="sms-confirm">Send confirmation by SMS?</label>
          <input id="sms-confirm" name="sms-confirm" type="checkbox" />
        </div>
        <div>
          <label for="instructions">Any special instructions?</label>
          <textarea id="instructions" name="instructions"></textarea>
        </div>
      </fieldset>

      <div><button type="button">Amend details</button></div>
      <div><button type="submit">Submit</button></div>
    </form>
    <script>
      const form = document.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    </script>
  </body>
</html>
```

{{EmbedLiveSample("readonly-confirmation", "100%", 660, , , , , "allow-forms")}}

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabefeldern beschreiben.

## Zustände von Radios und Kontrollkästchen — geprüft, standardmäßig, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} geprüft oder nicht geprüft sein. Aber es gibt noch ein paar andere zu berücksichtigende Zustände:

- {{cssxref(":default")}}: Passt zu Radios/Kontrollkästchen, die standardmäßig überprüft sind, wenn die Seite geladen wird (d.h. durch Setzen des `checked`-Attributes auf sie). Diese entsprechen der {{cssxref(":default")}}-Pseudoklasse, selbst wenn der Benutzer sie abmarkiert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder überprüft noch nicht überprüft sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}}-Pseudoklasse. Mehr dazu wird unten erläutert.

### :checked

Wenn sie markiert sind, werden sie von der {{cssxref(":checked")}}-Pseudoklasse angesprochen.

Die häufigste Verwendung davon ist, einen anderen Stil auf das Kontrollkästchen oder den Radio-Button anzuwenden, wenn es markiert ist; in Fällen, in denen Sie das standardmäßige Systemdesign entfernt haben mit [`appearance: none;`](/de/docs/Web/CSS/appearance) und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorhergehenden Artikel gesehen, als wir über [Die Verwendung von `appearance: none` bei Radios/Checkboxes](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zur Wiederholung sieht der `:checked`-Code aus unserem Styled Radio-Buttons-Beispiel so aus:

```css
input[type="radio"]::before {
  display: block;
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 6px;
  background-color: red;
  font-size: 1.2em;
  transform: translate(3px, 3px) scale(0);
  transform-origin: center;
  transition: all 0.3s ease-in;
}

input[type="radio"]:checked::before {
  transform: translate(3px, 3px) scale(1);
  transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
}
```

Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-styled
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Radio buttons styled</title>
    <style>
      input[type="radio"] {
        appearance: none;
      }

      input[type="radio"] {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 2px solid gray;
        /* Adjusts the position of the checkboxes on the text baseline */
        vertical-align: -2px;
        outline: none;
      }

      input[type="radio"]::before {
        display: block;
        content: " ";
        width: 10px;
        height: 10px;
        border-radius: 6px;
        background-color: red;
        font-size: 1.2em;
        transform: translate(3px, 3px) scale(0);
        transform-origin: center;
        transition: all 0.3s ease-in;
      }

      input[type="radio"]:checked::before {
        transform: translate(3px, 3px) scale(1);
        transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Choose your favourite fruit</legend>

        <p>
          <label>
            <input type="radio" name="fruit" value="cherry" />
            Cherry
          </label>
        </p>
        <p>
          <label>
            <input type="radio" name="fruit" value="banana" />
            Banana
          </label>
        </p>
        <p>
          <label>
            <input type="radio" name="fruit" value="strawberry" />
            Strawberry
          </label>
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("radios-styled", "100%", 200, , , , , "allow-forms")}}

Grundsätzlich bauen wir die Ausgestaltung für einen Radio-Button-Innenkreis mithilfe des `::before` Pseudo-Elements, setzen jedoch ein `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt am Label sanft in Sichtweite zu animieren, wenn das Radio ausgewählt/markiert ist. Der Vorteil der Verwendung einer Umwandlung anstelle einer Übergang von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es von der Mitte des Kreises wachsen zu lassen, anstatt so zu erscheinen, als würde es von der Ecke des Kreises wachsen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}}-Pseudoklasse zu Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite getestet werden, auch wenn sie nicht markiert sind. Das könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standards (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die erwähnten Radios/Kontrollkästchen werden durch die {{cssxref(":indeterminate")}}-Pseudoklasse angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder getestet noch nicht getestet sind. Aber was bedeutet das? Zu den Elementen, die unbestimmt sind, gehören:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe nicht markiert sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft per JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Das ist nichts, was Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern zu sagen, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein Paar abgewandelter Versionen des vorherigen Beispiels an, das dem Benutzer zeigt, was die Standardoption war, und die Labels von Radio-Buttons anspricht, wenn unbestimmt. Beide haben folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf das mittlere Radio-Button-Eingabefeld gesetzt, sodass es standardmäßig ausgewählt wird, wenn geladen wird. Wir stylen dies dann mit folgendem CSS:

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Default";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

Dies liefert ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt wurde, wenn die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwister-Kombinator (`~`) anstelle des nächsten Geschwister-Kombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-default
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Radio buttons :checked, :default</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
      }

      input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
      }

      input[type="radio"] {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 2px solid gray;
        /* Adjusts the position of the checkboxes on the text baseline */
        vertical-align: -2px;
        outline: none;
      }

      input[type="radio"]::before {
        display: block;
        content: " ";
        width: 10px;
        height: 10px;
        border-radius: 6px;
        background-color: red;
        font-size: 1.2em;
        transform: translate(3px, 3px) scale(0);
        transform-origin: center;
        transition: all 0.3s ease-in;
      }

      input[type="radio"]:checked::before {
        transform: translate(3px, 3px) scale(1);
        transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
      }

      input ~ span {
        position: relative;
      }

      input:default ~ span::after {
        font-size: 0.7rem;
        position: absolute;
        content: "Default";
        color: white;
        background-color: black;
        padding: 5px 10px;
        right: -65px;
        top: -3px;
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Choose your favourite fruit</legend>

        <p>
          <input type="radio" name="fruit" value="cherry" id="cherry" />
          <label for="cherry">Cherry</label>
          <span></span>
        </p>
        <p>
          <input type="radio" name="fruit" value="banana" id="banana" checked />
          <label for="banana">Banana</label>
          <span></span>
        </p>
        <p>
          <input type="radio" name="fruit" value="strawberry" id="strawberry" />
          <label for="strawberry">Strawberry</label>
          <span></span>
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("radios-checked-default", "100%", 200, , , , , "allow-forms")}}

Für das `:indeterminate`-Beispiel, haben wir keinen standardmäßig ausgewählten Radio-Button — dies ist wichtig —, wenn es einen gäbe, wäre kein unbestimmter Zustand zu stylen. Wir stylen die unbestimmten Radio-Buttons mit folgendem CSS:

```css
input[type="radio"]:indeterminate {
  outline: 2px solid red;
  animation: 0.4s linear infinite alternate outline-pulse;
}

@keyframes outline-pulse {
  from {
    outline: 2px solid red;
  }

  to {
    outline: 6px solid red;
  }
}
```

Dies erzeugt einen kleinen animierten Umriss auf den Radio-Buttons, der hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-indeterminate
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Radio buttons :checked, :indeterminate</title>
    <link
      href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
      rel="stylesheet" />
    <style>
      body {
        font-family: "Josefin Sans", sans-serif;
      }

      input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
      }

      input[type="radio"] {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 2px solid gray;
        /* Adjusts the position of the checkboxes on the text baseline */
        vertical-align: -2px;
        outline: none;
      }

      input[type="radio"]::before {
        display: block;
        content: " ";
        width: 10px;
        height: 10px;
        border-radius: 6px;
        background-color: red;
        font-size: 1.2em;
        transform: translate(3px, 3px) scale(0);
        transform-origin: center;
        transition: all 0.3s ease-in;
      }

      input[type="radio"]:checked::before {
        transform: translate(3px, 3px) scale(1);
        transition: all 0.3s cubic-bezier(0.25, 0.25, 0.56, 2);
      }

      input[type="radio"]:indeterminate {
        border: 2px solid red;
        animation: 0.4s linear infinite alternate border-pulse;
      }

      @keyframes border-pulse {
        from {
          border: 2px solid red;
        }

        to {
          border: 6px solid red;
        }
      }
    </style>
  </head>

  <body>
    <form>
      <fieldset>
        <legend>Choose your favourite fruit</legend>

        <p>
          <input type="radio" name="fruit" value="cherry" id="cherry" />
          <label for="cherry">Cherry</label>
          <span></span>
        </p>
        <p>
          <input type="radio" name="fruit" value="banana" id="banana" />
          <label for="banana">Banana</label>
          <span></span>
        </p>
        <p>
          <input type="radio" name="fruit" value="strawberry" id="strawberry" />
          <label for="strawberry">Strawberry</label>
          <span></span>
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("radios-checked-indeterminate", "100%", 200, , , , , "allow-forms")}}

> [!NOTE]
> Sie finden ein [interessantes Beispiel mit unbestimmten Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer Pseudoklassen von Interesse, und wir haben hier nicht den Raum, um alle im Detail zu behandeln. Lassen Sie uns über einige sprechen, die Sie sich auf jeden Fall näher ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse spricht ein Element an, das den Fokus erhalten hat oder ein Element _enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert wird.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse spricht fokussierte Elemente an, die den Fokus über die Tastaturinteraktion erhalten haben (anstatt über Berührung oder Maus) — nützlich, wenn Sie möchten, dass ein unterschiedlicher Stil für den Tastaturfokus im Vergleich zu Maus- (oder anderem) Fokus angezeigt wird.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse spricht {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elemente an, die ihren Platzhalter anzeigen (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributes), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber in den Browsern noch nicht gut unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente. {{cssxref(":empty")}} spricht auch Elemente an, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es bezieht sich auch auf andere {{Glossary("void_element", "leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine akzeptable Browserunterstützung; die `:blank`-Pseudoklasse ist noch nicht in der Spezifikation abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse wird, wenn unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit einer besseren Benutzererfahrung. Ist der Wert gültig, wenn die Eingabe den Fokus erhält, kann das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, wird jedoch nur dann mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. War der Wert ursprünglich ungültig, stimmt er während der gesamten Fokussierungsdauer sowohl mit `:invalid` als auch mit `:user-invalid` überein. In ähnlicher Weise wie `:invalid` wird es nicht mehr mit `:user-invalid` übereinstimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit schließen wir unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formularstile! Als nächstes werden wir uns etwas anderem zuwenden — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
