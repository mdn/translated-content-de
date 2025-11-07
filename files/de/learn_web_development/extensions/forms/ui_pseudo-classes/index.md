---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formular-Steuerelemente allgemein behandelt. Dies umfasste die Verwendung einiger Pseudoklassen, beispielsweise die Nutzung von `:checked`, um ein Kontrollkästchen nur zu stylen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in verschiedenen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeiner
        Kenntnisse über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was unternommen werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Vielleicht sind Ihnen die folgenden Pseudoklassen bereits bekannt:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es den Fokus hat (z.B. durch Tabulatortaste über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z.B. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Detail in den nachfolgenden Abschnitten besprechen, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielsteuerungen, die gültig/ungültig gemäß den auf ihnen festgelegten Formularvalidierungsbeschränkungen oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie auf Lese-Schreib- oder schreibgeschützte Steuerungen (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen auf Kontrollkästchen und Radiobuttons, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) sind, und auf die im Ausgangszustand ausgewählte Option beim Laden der Seite (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier diskutierten Pseudoklassen befassen sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungsstatus (sind ihre Daten gültig oder nicht?). Sie werden in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen lernen, aber fürs Erste halten wir die Validierung einfach, um keine Verwirrung zu stiften.

## Eingaben basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bei der client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird.
Zum Beispiel sind der Vorname und Nachname im untenstehenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rahmen, und das optionale Steuerelement hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzuschicken, ohne es auszufüllen, um die Client-seitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' und 'optionale' Elemente in Formularen nur mit Farben zu stylen, da dies nicht ideal für farbenblinde Menschen ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" zusammen mit den jeweiligen Steuerelementen.
Im nächsten Abschnitt werden wir ein besseres Beispiel sehen, wie Pflichtfelder mit `:required` und generierten Inhalten gekennzeichnet werden.

> [!NOTE]
> Vermutlich werden Sie die `:optional` Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie Ihr optionales Styling standardmäßig vornehmen und zusätzliche Stile für erforderliche Steuerelemente hinzufügen.

> [!NOTE]
> Wenn ein Radio-Button in einer gleich benannten Gruppe von Radio-Buttons das `required` Attribut hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit zugewiesenem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir die Nutzung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass es jetzt ein guter Zeitpunkt wäre, etwas genauer darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/Reference/Selectors/::before) und [`::after`](/de/docs/Web/CSS/Reference/Selectors/::after) zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, daher kann er für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es mit Styles genauso gezielt werden wie jedes tatsächliche DOM-Element.

Das ist wirklich nützlich, wenn Sie ein visuelles Indikator zu einem Element hinzufügen möchten, wie ein Label oder ein Icon, wenn alternative Indikatoren auch zur Verfügung stehen, um Barrierefreiheit für alle Benutzer sicherzustellen. Zum Beispiel können wir generierte Inhalte verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt wird:

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

Das ist wirklich nützlich — Screenreader teilen ihren Benutzern bereits mit, wenn ein Radio-Button oder Kontrollkästchen, das sie antreffen, ausgewählt ist, daher wollen Sie nicht, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen die Anzeige generierter Inhalte auf ihnen. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen Beispiel für erforderliche/optionale Eingaben, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern — wir werden generierte Inhalte verwenden, um ein kennzeichnendes Label hinzuzufügen.

Erstens fügen wir am Anfang des Formulars einen Absatz hinzu, der erklärt, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als zusätzliche Information hören, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt anzubringen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das sofortige Problem hierbei war, dass der Span in eine neue Zeile unter die Eingabe springt, weil die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein flex-Container zu werden, aber wir sagen ihm auch, dass er seinen Inhalt auf neue Zeilen umbrechen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` haben, aber der `<span>` hat eine Breite von `0`, sodass er auf derselben Zeile wie die Eingabe sitzen kann.

Jetzt zu den generierten Inhalten. Wir erstellen ihn mit diesem CSS:

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

Wir setzen den `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich, als wäre es ein Kindknoten des Elements, auf dem er generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was das ist, was unser Label sagen sollte, und stylen und positionieren ihn nach unseren Wünschen. Das Ergebnis ist unten zu sehen (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

```html hidden live-sample___required-optional-generated
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
```

```css hidden live-sample___required-optional-generated
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
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
```

```js hidden live-sample___required-optional-generated
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("required-optional-generated", "100%", 430, , , , , "allow-forms")}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formular-Steuerelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über in Reichweite und außerhalb der Reichweite sprechen). Formular-Steuerelemente mit [Einschränkungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt angesprochen werden.

### :valid und :invalid

Sie können Formular-Steuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Validierungsbeschränkungen sind immer gültig und daher übereinstimmend mit `:valid`.
- Steuerelemente, bei denen `required` gesetzt ist und die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">` sind (übereinstimmend mit) `:invalid`, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der von den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, sind (übereinstimmend mit) `:invalid`, werden aber auch von {{cssxref(":out-of-range")}}, wie Sie später sehen werden, gefunden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber fürs Erste halten wir es einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` betrachten.

Wie im vorhergehenden Beispiel haben wir extra `<span>`s, um generierten Inhalt darauf zu erstellen, den wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir den generierten Inhalt je nach Gültigkeit der Daten absolut — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um den ungültigen Daten ein bisschen mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwendeten.

Sie können es unten ausprobieren (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___valid-invalid
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
```

```css hidden live-sample___valid-invalid
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
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
```

```js hidden live-sample___valid-invalid
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("valid-invalid", "100%", 430, , , , , "allow-forms")}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe dagegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-Reichweite und Außerhalb-Reichweite Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen numerische Eingaben mit Bereichsgrenzen ab, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) definiert sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es sollte beachtet werden, dass Eingaben, deren Daten in Reichweite liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb der Reichweite liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum also beide haben? Das Problem ist wirklich eines der Semantik — außerhalb der Reichweite ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb der Reichweite bereitstellen möchten, die für Benutzer hilfreicher sein wird, als einfach nur "ungültig" zu sagen. Sie könnten auch beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut, wobei es auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb der Reichweite für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

Die numerische Eingabe sieht wie folgt aus:

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

Dies ist eine ähnliche Geschichte wie zuvor im Beispiel `:required`, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel aufgeteilt haben und dem separaten `::after`-Inhalt für `:required` und `:out-of-range` ihre eigenen Inhalte und Styles gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___out-of-range
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
      <input id="age" name="age" type="number" min="12" max="120" required />
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
```

```css hidden live-sample___out-of-range
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
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
```

```js hidden live-sample___out-of-range
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("out-of-range", "100%", 430, , , , , "allow-forms")}}

Es ist möglich, dass die Zahlen-Eingabe gleichzeitig erforderlich und außerhalb der Reichweite ist, was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommt die [Kaskadenregel](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel und die Nachricht außerhalb der Reichweite wird angezeigt.

Das funktioniert recht gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter (d.h. im Bereich von 12-120) eingegeben haben, wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen außerhalb des Bereichs liegenden Wert ändern, erscheint die "Außerhalb des erlaubten Wertebereichs"-Nachricht anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb-Reichweite Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es direkt über die Tastatur eintippen. Die Spinner-Buttons lassen Sie den Wert nicht außerhalb des erlaubten Bereichs inkrementieren/dekrementieren.

## Stylen von aktivierten und deaktivierten Eingaben, sowie schreibgeschützten und Lese-Schreib-Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, darin geschrieben werden usw. Ein deaktiviertes Element kann dagegen in keiner Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten nicht auf einen bestimmten Benutzer zutreffen, möchten Sie möglicherweise nicht einmal, dass diese Daten beim Absenden des Formulars gesendet werden. Ein klassisches Beispiel dafür ist ein Versandformular — gewöhnlich werden Sie gefragt, ob Sie dieselbe Adresse für Abrechnung und Versand verwenden möchten; wenn ja, können Sie nur eine einzige Adresse an den Server senden und die Felder für die Rechnungsadresse einfach deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Erstens ist das HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Felder der Rechnungsadresse sind standardmäßig deaktiviert.

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

Jetzt zum CSS. Die relevantesten Teile dieses Beispiels sind wie folgt:

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben liegen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/Reference/Selectors/:has) ausgewählt.

Zuletzt haben wir ein Javascript verwendet, um die Deaktivierung der Felder der Rechnungsadresse umzuschalten:

```js
function toggleBilling() {
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}

// Attach `change` event listener to checkbox
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);
```

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsadresse ein- und auszuschalten und das Styling der entsprechenden Labels umzuschalten.

Sie können das Beispiel in Aktion unten sehen (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___enabled-disabled-shipping
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
      <label for="name" class="billing-label">Name: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label">Address: </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="zip-code2" class="billing-label">Zip/postal code: </label>
      <input id="zip-code2" name="zip-code2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>Submit</button></div>
</form>
```

```css hidden live-sample___enabled-disabled-shipping
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
}

input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___enabled-disabled-shipping
function toggleBilling() {
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}

// Attach `change` event listener to checkbox
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("enabled-disabled-shipping", "100%", 580, , , , , "allow-forms")}}

### Schreibgeschützt und Lese-Schreib

In ähnlicher Weise zu `:disabled` und `:enabled` sprechen die `:read-only` und `:read-write` Pseudoklassen zwei Zustände an, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzer schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden jedoch schreibgeschützte Eingabenwerte beim Absenden des Formulars an den Server gesendet. Lese-Schreib bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details auf diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie an einem Ort kontrolliert, abschließende Daten hinzufügt, die benötigt werden, und dann die Bestellung bestätigt, indem er das Formular absendet. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberen Formularelemente nicht bearbeitbar sind, jedoch werden die Werte beim Absenden des Formulars übermittelt. Wir haben die Formularelemente mittels der Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Das vollständige Beispiel sieht wie folgt aus (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___readonly-confirmation
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
      <label for="zip-code">Zip/postal code: </label>
      <input id="zip-code" name="zip-code" type="text" value="94708" readonly />
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
```

```css hidden live-sample___readonly-confirmation
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
  background-color: #eeeeee;
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
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

```js hidden live-sample___readonly-confirmation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("readonly-confirmation", "100%", 660, , , , , "allow-forms")}}

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabelementen beschreiben.

## Radio- und Kontrollkästchen-Zustände — Checked, Default, Indeterminate

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Übereinstimmung mit Radios/Kontrollkästchen, die standardmäßig bei Seitenladung ausgewählt sind (d.h. durch Setzen des `checked` Attributs auf ihnen). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, gelten sie als _unbestimmt_ und werden mit der {{cssxref(":indeterminate")}} Pseudoklasse übereinstimmen. Mehr dazu unten.

### :checked

Wenn sie ausgewählt sind, werden sie mit der {{cssxref(":checked")}} Pseudoklasse übereinstimmen.

Die häufigste Anwendung dieses Stils ist, dem Kontrollkästchen oder Radio-Button bei Auswahl einen anderen Stil hinzuzufügen, in Fällen, in denen das systemeigene Styling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt wurde und Sie die Styles selbst aufbauen möchten. Wir haben Beispiele davon im vorherigen Artikel gesehen, als wir über [Styling von Kontrollkästchen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Zusammenfassend sieht der `:checked`-Code aus unserem Styled-Radiobuttons-Beispiel so aus:

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

Sie können es hier ausprobieren (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-styled
<form>
  <fieldset>
    <legend>Choose your favorite fruit</legend>
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
```

```css hidden live-sample___radios-styled
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
```

{{EmbedLiveSample("radios-styled", "100%", 200, , , , , "allow-forms")}}

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem `::before` Pseudoelement, aber mit einem `scale(0)` [`transform`](/de/docs/Web/CSS/Reference/Properties/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition), um den generierten Inhalt auf dem Label schön animieren zu lassen, wenn das Radio ausgewählt/angehakt wird. Der Vorteil der Verwendung eines Transforms anstelle eines Übergangs von [`width`](/de/docs/Web/CSS/Reference/Properties/width)/[`height`](/de/docs/Web/CSS/Reference/Properties/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/Reference/Properties/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt es scheinbar aus der Ecke des Kreises zu wachsen, und es gibt kein Springverhalten, da keine Box-Modell-Property-Werte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig bei Seitenladung ausgewählt sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einem Benutzer eine Erinnerung daran zu geben, welche Optionen die Standardeinstellungen (oder Ausgangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Ebenso werden die oben genannten Radios/Kontrollkästchen von der Pseudoklasse {{cssxref(":indeterminate")}} übereinstimmen, wenn sie in einem Zustand sind, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleich benannten Gruppe nicht ausgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft mittels JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist nichts, was Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern zu sagen, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons stylen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut dem mittleren Radiobutton-Eingabefeld hinzugefügt, sodass es standardmäßig bei geladenem Zustand ausgewählt wird. Wir stylen dies mit folgendem CSS:

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

Dies liefert ein kleines "Standard"-Label auf dem Element, das ursprünglich bei Seitenladung ausgewählt war. Beachten Sie hier, dass wir den anschließenden Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, weil der `<span>` im Quellcode direkt nach dem `<input>` kommen muss.

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-default
<form>
  <fieldset>
    <legend>Choose your favorite fruit</legend>
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
```

```css hidden live-sample___radios-checked-default
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
```

{{EmbedLiveSample("radios-checked-default", "100%", 200, , , , , "allow-forms")}}

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radiobuttons mit folgendem CSS:

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

Dies erstellt eine kleine animierte Umrandung auf den Radiobuttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Wiedergabe**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-indeterminate
<form>
  <fieldset>
    <legend>Choose your favorite fruit</legend>
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
```

```css hidden live-sample___radios-checked-indeterminate
@import "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap";

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
```

{{EmbedLiveSample("radios-checked-indeterminate", "100%", 200, , , , , "allow-forms")}}

> [!NOTE]
> Sie können ein [interessantes Beispiel für `indeterminate` Zustände](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite für [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe von anderen interessanten Pseudoklassen, und wir haben keinen Platz, um sie hier alle im Detail zu beschreiben. Lassen Sie uns einige weitere erwähnen, die Sie untersuchen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld in ihm fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus über eine Tastaturinteraktion erhalten haben (anstatt durch Berühren oder die Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus (oder anderem) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind auch interessant, aber bisher noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen ohne Kinder überein, wie {{HTMLElement("input")}}, aber sie ist allgemeiner — sie passt auch auf andere {{Glossary("void_element", "void Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht fertiggestellt, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/Reference/Selectors/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich sein wie {{cssxref(":invalid")}}, aber mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, es wird jedoch nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` während der gesamten Fokusdauer übereinstimmen. In ähnlicher Weise wie `:invalid`, wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit schließen wir unseren Einblick in die UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige interessante Formularstile! Als nächstes werden wir uns etwas anderem zuwenden — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
