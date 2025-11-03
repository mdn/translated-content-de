---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente auf allgemeine Weise behandelt. Dies beinhaltete die Verwendung von Pseudoklassen, zum Beispiel durch die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen, die zum Styling von Formularen in verschiedenen Zuständen verwendet werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinem
        Wissen zu
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelementen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; und lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen sind verfügbar?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokusiert ist (d.h. wenn es im Keyboard-Navigationsmodus über die Tastatur aktiviert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während darauf geklickt wird oder die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste gedrückt gehalten wird im Fall einer Tastaturaktivierung).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten eine Reihe weiterer Pseudoklassen, die mit HTML-Formularen zusammenhängen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Detail in den untenstehenden Abschnitten besprechen. Kurz gesagt, die Hauptpunkte, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielgerichtete Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielgerichtete Formularelemente, die gültig bzw. ungültig gemäß formulierten Validierungsbeschränkungen sind, oder in einem gültigen bzw. ungültigen Bereich liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielgerichtete Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sowie schreibgeschützt oder beschreibbar sind (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielgerichtete, entsprechend kontrollierte Kontrollkästchen und Optionsschaltflächen, die aktiviert sind, sich in einem unbestimmten Zustand befinden (weder aktiviert noch nicht aktiviert), und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die obigen genannten sind die offensichtlich nützlichsten. Einige davon zielen auf die Lösung sehr spezifischer Nischenprobleme ab. Die aufgeführten UI-Pseudoklassen haben eine exzellente Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Eine Reihe der hier behandelten Pseudoklassen befassen sich mit dem Styling von Formularelementen basierend auf ihrem Validierungsstatus (sind ihre Daten gültig oder nicht?). Sie erfahren viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst werden wir die Dinge bezüglich der Formularvalidierung einfach halten, um Verwirrung zu vermeiden.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegenden Konzepte der client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass das entsprechende Element ausgefüllt werden muss, bevor das Formular erfolgreich abgesendet werden kann. Zum Beispiel sind der Vorname und Nachname im folgenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rahmen und das optionale Steuerelement hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular ohne das Ausfüllen abzusenden, um die standardmäßigen Validierungsfehlermeldungen der Browser zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' gegenüber 'optionalen' Elementen in Formularen nur mit Farbe zu stylen, da dies für farbenblinde Menschen nicht optimal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die übliche Konvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das den entsprechenden Steuerelementen zugeordnet ist. Im nächsten Abschnitt werden wir uns ein besseres Beispiel dafür ansehen, wie man erforderliche Felder mit `:required` und generierten Inhalten kennzeichnet.

> [!NOTE]
> Sie werden wahrscheinlich feststellen, dass Sie die `:optional`-Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden und dann für erforderliche Steuerelemente zusätzliche Stile hinzufügen könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer Gruppe von Radiobuttons mit demselben Namen das `required`-Attribut gesetzt hat, gelten alle Radiobuttons als ungültig, bis einer ausgewählt wird, aber nur der mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} gematcht.

## Nutzung von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir die Nutzung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir halten es jetzt für einen guten Zeitpunkt, darüber etwas mehr im Detail zu sprechen.

Die Idee ist, dass wir mit den [`::before`](/de/docs/Web/CSS/Reference/Selectors/::before) und [`::after`](/de/docs/Web/CSS/Reference/Selectors/::after) Pseudoelementen zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft einen Inhalt vor oder nach dem betroffenen Element erscheinen lassen können. Der Inhalt wird nicht zum DOM hinzugefügt und kann daher für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es auf die gleiche Weise wie jedes tatsächliche DOM-Element gezielt mit Stilen versehen werden.

Dies ist besonders nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, z. B. ein Label oder ein Icon, wenn alternative Indikatoren ebenfalls zur Verfügung stehen, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Beispielsweise können wir generierte Inhalte verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader zeigen bereits an, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, aktiviert/ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Anzeige von generierten Inhalten. Alle Input-Typen, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen Beispiel mit erforderlichen/optionalen Feldern: Dieses Mal werden wir das Aussehen des Eingabefelds selbst nicht ändern — wir fügen stattdessen ein Kennzeichnungslabel mit generierten Inhalten hinzu.

Zuerst fügen wir oben im Formular einen Absatz hinzu, um zu sagen, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer hören das Wort "erforderlich" als ein zusätzliches Informationsstück, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Text-Eingabetypen keine generierten Inhalte, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um die generierten Inhalte daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das Span in eine neue Zeile unter der Eingabe fiel, weil sowohl die Eingabe als auch das Label auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`-Element so, dass es ein flexibler Container wird, aber auch das Umbruchverhalten auf neue Zeilen anwenden, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, weil beide auf `width: 100%` gesetzt sind, aber das `<span>` hat eine Breite von `0`, sodass es auf der gleichen Zeile wie die Eingabe sitzen kann.

Nun zu den generierten Inhalten. Wir erstellen sie mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, sodass wir die generierten Inhalte auf `position: absolute` setzen und es relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (die generierten Inhalte verhalten sich so, als ob sie ein Kindknoten des Elements sind, auf dem sie erzeugt werden, für Zwecken der Positionierung).

Dann geben wir den generierten Inhalten den Inhalt "erforderlich", was das ist, was wir mit unserem Label sagen wollten, und stylen und positionieren es, wie wir es wollen. Das Ergebnis ist unten zu sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Styling von Steuerelementen basierend darauf, ob deren Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten kann man auch von gültigen und ungültigen Bereichen sprechen). Formularsteuerungen mit [Einschränkungen der Beschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formulareingaben mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Hinweise sind beachtenswert:

- Steuerelemente ohne Einschränkungsvalidierung sind immer gültig und damit wird `:valid` angewendet.
- Elemente mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` angewendet.
- Elemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">` werden (angewendet) als `:invalid` markiert, wenn die eingegebenen Daten nicht mit dem Muster übereinstimmen, nach dem sie suchen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, werden (angewendet) als `:invalid` markiert, aber auch von {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt noch andere Möglichkeiten, ein Element von `:valid`/`:invalid` matchen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir werden die Dinge jetzt einfach halten.

Lassen Sie uns in ein Beispiel für `:valid`/`:invalid` eintauchen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`-Elemente, um darauf generierte Inhalte zu erstellen, die wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Indikatoren bereitzustellen, verwenden wir das folgende CSS:

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

Wie zuvor setzen wir die `<span>`-Elemente auf `position: relative`, damit wir die generierten Inhalte relativ zu ihnen positionieren können. Dann positionieren wir verschiedene generierte Inhalte absolut, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grünes Häkchen bzw. ein rotes Kreuz. Um der ungültigen Daten einen zusätzlichen Druck zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwenden.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb und außerhalb von Bereichen

Wie wir angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen, die zu berücksichtigen sind — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese matchen numerische Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, entsprechend.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch von der Pseudoklasse `:valid` gematcht werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch von der Pseudoklasse `:invalid` gematcht werden. Warum haben wir beide? Das Thema ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der Ungültigkeitsmitteilung, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für die Benutzer hilfreicher ist als nur "ungültig" zu sagen. Vielleicht möchten Sie sogar beide bereitstellen.

Lassen Sie uns ein Beispiel betrachten, das genau das tut, indem es auf das vorherige Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

Die numerische Eingabe sieht so aus:

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

Und das CSS sieht folgendermaßen aus:

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

Es ist eine ähnliche Geschichte wie vorher im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalt für `:required` und `:out-of-range` Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Nummerneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode als die `:required`-Regel erscheint, greifen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Dies funktioniert recht gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter (d.h. im Bereich von 12-120) eingegeben haben, wird die Eingabe gültig. Wenn Sie jedoch das Alter ändern, wird die Altersangabe in einen Bereich, der außerhalb liegt, geändert, erscheint die Meldung "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und ihn über die Tastatur eingeben. Die Spinner-Schaltflächen lassen Sie den Wert nicht außerhalb des zulässigen Bereichs inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben sowie von schreibgeschützten und schreibbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, beschrieben usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, wenn einige Daten auf einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungs- und Versandadresse verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten genauso gut die Rechnungsadressenfelder deaktivieren.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut. Zuerst einmal ist das HTML ein einfaches Formular mit Texteingaben sowie einem Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressenfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben direkt ausgewählt, die wir mit `input[type="text"]:disabled` deaktivieren möchten, aber wir wollten auch die entsprechenden Textbeschriftungen ausgrauen. Da sich die Etiketten direkt vor ihren Eingaben befinden, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/Reference/Selectors/:has) ausgewählt.

Abschließend haben wir einige JavaScript verwendet, um das Deaktivieren der Rechnungsaddressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Etiketten umzuschalten.

Sie können das Beispiel unten in Aktion sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

### Schreibgeschützt und beschreibbar

Ähnlich wie bei `:disabled` und `:enabled` sprechen die Pseudoklassen `:read-only` und `:read-write` zwei Zustände an, zwischen denen Formulareingaben wechseln können. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben ändern. Im Gegensatz zu deaktivierten Eingaben werden jedoch die schreibgeschützten Eingabewerte beim Absenden an den Server übermittelt. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird durch das `readonly`-Attribut in den schreibgeschützten Zustand versetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, den Benutzer alle auf einer Seite überprüfen zu lassen, die noch benötigten Daten hinzuzufügen und die Bestellung dann durch Absenden zu bestätigen. In diesem Fall können alle endgültigen Formulardaten in einem Schritt an den Server gesendet werden.

Lassen Sie uns anschauen, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das `readonly`-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Gruppe von Formularelementen nicht bearbeitbar ist, die Werte jedoch beim Absenden eingereicht werden. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Das vollständige Beispiel sieht wie folgt aus (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände der Eingabeelemente beschreiben.

## Radiobutton- und Kontrollkästchenzustände — checked, default, indeterminate

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} entweder aktiviert oder nicht aktiviert sein. Aber es gibt ein paar andere Zustände, die ebenfalls berücksichtigt werden müssen:

- {{cssxref(":default")}}: Passt auf Radiobuttons/Kontrollkästchen, die standardmäßig bei Seitenaufruf aktiviert sind (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese passen zur {{cssxref(":default")}}-Pseudoklasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Kontrollkästchen weder aktiviert noch nicht aktiviert sind, werden sie als _unbestimmt_ betrachtet und passen zur {{cssxref(":indeterminate")}}-Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie von der {{cssxref(":checked")}}-Pseudoklasse gematcht.

Die häufigste Verwendung hierfür besteht darin, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton anzuwenden, wenn er aktiviert ist, in Fällen, in denen Sie das systemeigene Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über das [Stylen von Kontrollkästchen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Zur Erinnerung, der `:checked`-Code aus unserem Styled-Radiobuttons-Beispiel sieht wie folgt aus:

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

Im Wesentlichen bauen wir den Stil für den "inneren Kreis" eines Radiobuttons mit dem `::before`-Pseudoelement auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/Reference/Properties/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/Reference/Properties/transition), um die generierten Inhalte des Labels schön animiert anzuzeigen, wenn der Radiobutton ausgewählt/gecheckt wird. Der Vorteil eines Transforms gegenüber der Transition von [`width`](/de/docs/Web/CSS/Reference/Properties/width)/[`height`](/de/docs/Web/CSS/Reference/Properties/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/Reference/Properties/transform-origin) verwenden können, um es aus der Mitte des Kreises heraus wachsen zu lassen, anstatt es von der Ecke des Kreises erscheinen zu lassen, und es gibt kein Sprungverhalten, da keine Box-Modell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}}-Pseudoklasse auf Radiobuttons/Kontrollkästchen, die standardmäßig beim Laden der Seite aktiviert sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um eine Erinnerungen an die Standardoptionen in einer Liste von Optionen zu setzen, damit sich der Benutzer daran erinnert, was die Standardeinstellungen (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben genannten Radiobuttons/Kontrollkästchen von der {{cssxref(":indeterminate")}}-Pseudoklasse gematcht, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, schließen ein:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingabetypen, deren `indeterminate`-Eigenschaft via JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nicht etwas, das Sie sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern mitzuteilen, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die dem Benutzer eine Erinnerung an die Standardoption geben und die Beschriftungen von Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zum mittleren Radiobutton hinzugefügt, sodass es standardmäßig ausgewählt wird, wenn es geladen wird. Dann stylen wir dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich beim Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den Folgenden-Geschwister-Kombinator (`~`) anstelle des Nächsten-Geschwister-Kombinators (`+`) verwenden — wir müssen das tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es so wäre, gäbe es keinen unbestimmten Zustand, um ihn zu stylen. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erzeugt eine lustige kleine animierte Umrandung auf den Radiobuttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel mit `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer Pseudoklassen von Interesse, und wir haben hier nicht genug Platz, um sie alle im Detail zu behandeln. Lassen Sie uns über einige weitere sprechen, die Sie sich genauer ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse passt auf ein Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein ganzes Formular hervorheben möchten, wenn ein Eingabesteuerelement darin den Fokus erhält.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse passt auf fokussierte Elemente, die den Fokus über eine Tastatureingabe (anstatt über Touch oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zum Maus (oder anderen) Fokus zeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse passt auf {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elemente, die ihren sichtbaren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bislang nicht gut unterstützt in Browsern:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt auch auf Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es passt auch auf andere {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die Pseudoklasse `:blank` ist in der Spezifikation noch nicht abgeschlossen und wird daher in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/Reference/Selectors/:user-invalid)-Pseudoklasse, wenn sie unterstützt wird, wird ähnlich wie {{cssxref(":invalid")}} sein, aber mit einer besseren Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, könnte das Element beim Eingeben von Daten temporär ungültig sein und das Element könnte `:invalid` matchen. Es wird jedoch nur dann `:user-invalid` matchen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` während der gesamten Dauer des Fokus matchen. In ähnlicher Weise wie `:invalid`, wird es aufhören, `:user-invalid` zu matchen, wenn der Wert gültig wird.

## Zusammenfassung

Damit endet unser Einblick in die UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter damit und erstellen Sie einige unterhaltsame Formularstile! Als nächstes werden wir zu etwas anderem übergehen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
