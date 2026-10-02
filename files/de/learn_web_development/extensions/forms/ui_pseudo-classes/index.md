---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularsteuerelemente allgemein behandelt. Dabei haben wir auch Pseudoklassen verwendet, beispielsweise `:checked`, um eine Checkbox nur dann anzusprechen, wenn sie ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen UI-Pseudoklassen, mit denen sich Formulare je nach Zustand gestalten lassen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeiner
        Kenntnisse über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwierig zu gestalten sind und warum, sowie
        erfahren, wie sie angepasst werden können.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Die folgenden Pseudoklassen kennen Sie möglicherweise bereits:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, während sich der Mauszeiger darüber befindet.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es den Fokus hat (z. B. nachdem es über die Tastatur mit der Tabulatortaste angesteuert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, während es aktiviert wird (z. B. während eines Klicks oder während bei einer Aktivierung per Tastatur die Taste <kbd>Return</kbd> / <kbd>Enter</kbd> gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere weitere Pseudoklassen für HTML-Formulare. Mit ihnen können Sie Elemente unter verschiedenen nützlichen Bedingungen gezielt auswählen. In den folgenden Abschnitten gehen wir näher darauf ein. Die wichtigsten Pseudoklassen, die wir betrachten, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Sprechen Elemente an, die als Pflichtfelder festgelegt werden können (z. B. Elemente, die das HTML-Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}} sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Sprechen Formularsteuerelemente an, deren Werte gemäß den festgelegten Validierungsbedingungen gültig oder ungültig sind bzw. innerhalb oder außerhalb eines Wertebereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}} sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Sprechen Elemente an, die deaktiviert werden können (z. B. Elemente, die das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind. Außerdem sprechen sie Formularsteuerelemente an, die schreibgeschützt oder bearbeitbar sind (z. B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Sprechen Checkboxen und Radio-Buttons an, die ausgewählt sind, sich in einem unbestimmten Zustand befinden (weder ausgewählt noch nicht ausgewählt) bzw. beim Laden der Seite standardmäßig ausgewählt sind (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt noch viele weitere Pseudoklassen, aber die oben genannten sind besonders nützlich. Einige dienen dazu, sehr spezielle Probleme zu lösen. Die aufgeführten UI-Pseudoklassen werden von Browsern sehr gut unterstützt. Dennoch sollten Sie Ihre Formulare sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen dienen dazu, Formularsteuerelemente anhand ihres Validierungszustands zu gestalten: Sind ihre Daten gültig oder nicht? Im nächsten Artikel, [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), erfahren Sie mehr darüber, wie Sie Validierungsbedingungen festlegen und steuern. Vorerst halten wir die Formularvalidierung einfach, um das Thema übersichtlich zu halten.

## Eingabefelder danach gestalten, ob sie erforderlich sind

Eine der grundlegendsten Fragen bei der clientseitigen Formularvalidierung ist, ob ein Eingabefeld erforderlich ist (also vor dem Absenden des Formulars ausgefüllt werden muss) oder optional.

Für die Elemente {{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} steht das Attribut `required` zur Verfügung. Ist es gesetzt, muss das jeweilige Steuerelement ausgefüllt werden, damit das Formular erfolgreich abgesendet werden kann.
Im folgenden Formular sind beispielsweise Vor- und Nachname erforderlich, die E-Mail-Adresse ist dagegen optional:

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

Diese beiden Zustände können Sie mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente erhalten einen durchgezogenen Rahmen, das optionale Steuerelement einen gestrichelten.
Sie können auch versuchen, das Formular ohne Eingaben abzusenden, um die Fehlermeldungen zu sehen, die Browser bei der clientseitigen Validierung standardmäßig anzeigen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Generell sollten Sie vermeiden, erforderliche und optionale Elemente in Formularen ausschließlich durch Farben zu unterscheiden, da dies für Menschen mit Farbsehschwäche problematisch ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Im Web werden Pflichtfelder üblicherweise durch ein Sternchen (`*`) oder das Wort „erforderlich“ gekennzeichnet, das dem jeweiligen Steuerelement zugeordnet ist.
Im nächsten Abschnitt sehen wir ein besseres Beispiel dafür, wie Sie erforderliche Felder mit `:required` und generiertem Inhalt kennzeichnen.

> [!NOTE]
> Die Pseudoklasse `:optional` werden Sie wahrscheinlich nicht oft verwenden. Formularsteuerelemente sind standardmäßig optional. Daher können Sie die Gestaltung optionaler Elemente als Ausgangspunkt verwenden und für erforderliche Steuerelemente zusätzliche Stile festlegen.

> [!NOTE]
> Wenn bei einem Radio-Button in einer Gruppe gleichnamiger Radio-Buttons das Attribut `required` gesetzt ist, gelten alle Radio-Buttons als ungültig, bis einer ausgewählt wird. Tatsächlich entspricht aber nur der Radio-Button mit dem Attribut der Pseudoklasse {{cssxref(':required')}}.

## Generierten Inhalt mit Pseudoklassen verwenden

In früheren Artikeln haben wir bereits [generierten Inhalt](/de/docs/Web/CSS/Guides/Generated_content) verwendet. Jetzt ist ein guter Zeitpunkt, etwas näher darauf einzugehen.

Mit den Pseudoelementen {{cssxref("::before")}} und {{cssxref("::after")}} sowie der Eigenschaft {{cssxref("content")}} können wir Inhalt vor oder nach einem Element erscheinen lassen. Dieser Inhalt wird nicht zum DOM hinzugefügt und ist daher für manche Screenreader möglicherweise nicht wahrnehmbar. Da er über ein Pseudoelement erzeugt wird, lässt er sich ähnlich wie ein tatsächlicher DOM-Knoten gestalten.

Das ist besonders nützlich, wenn Sie einem Element eine visuelle Kennzeichnung wie eine Beschriftung oder ein Symbol hinzufügen möchten und zugleich andere Kennzeichnungen für die Barrierefreiheit zur Verfügung stehen. Beispielsweise können wir generierten Inhalt verwenden, um den inneren Kreis eines benutzerdefinierten Radio-Buttons bei dessen Auswahl zu platzieren und zu animieren:

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

Das ist hilfreich: Screenreader teilen ihren Nutzern bereits mit, ob ein Radio-Button oder eine Checkbox ausgewählt ist. Ein zusätzliches DOM-Element, das diese Auswahl ebenfalls ansagt, könnte verwirren. Eine rein visuelle Kennzeichnung vermeidet dieses Problem.

Nicht alle `<input>`-Typen unterstützen generierten Inhalt. Eingabetypen, in denen dynamischer Text angezeigt wird, etwa `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere Typen, darunter `range`, `color` und `checkbox`, tun dies.

Kehren wir zu unserem Beispiel mit erforderlichen und optionalen Feldern zurück. Diesmal verändern wir nicht das Erscheinungsbild des Eingabefelds selbst, sondern fügen mithilfe von generiertem Inhalt eine Kennzeichnung hinzu.

Zunächst fügen wir am Anfang des Formulars einen Absatz hinzu, der die Bedeutung der Kennzeichnung erklärt:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader lesen bei jedem erforderlichen Eingabefeld zusätzlich „erforderlich“ vor. Sehende Nutzer sehen dagegen unsere visuelle Kennzeichnung.

Wie bereits erwähnt, unterstützen Texteingabefelder keinen generierten Inhalt. Deshalb fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span)-Element hinzu, an dem wir den generierten Inhalt platzieren:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei ist, dass das span-Element unter dem Eingabefeld in eine neue Zeile rutscht, da sowohl für das Eingabefeld als auch für das Label `width: 100%` festgelegt ist. Um das zu beheben, gestalten wir das übergeordnete `<div>` als Flex-Container und erlauben zugleich, dass sein Inhalt bei Bedarf auf neue Zeilen umbricht:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Dadurch stehen Label und Eingabefeld in getrennten Zeilen, weil beide `width: 100%` haben. Das `<span>` hat jedoch eine Breite von `0` und kann deshalb in derselben Zeile wie das Eingabefeld stehen.

Nun zum generierten Inhalt. Wir erzeugen ihn mit folgendem CSS:

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

Für das `<span>` setzen wir `position: relative`. So können wir dem generierten Inhalt `position: absolute` zuweisen und ihn relativ zum `<span>` statt zum `<body>` positionieren. Für die Positionierung verhält sich der generierte Inhalt so, als wäre er ein Kindelement des Elements, an dem er erzeugt wird.

Anschließend weisen wir dem generierten Inhalt den Text „required“ zu, den unsere Kennzeichnung anzeigen soll, und gestalten und positionieren ihn wie gewünscht. Das Ergebnis sehen Sie unten. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten.

```html hidden live-sample___required-optional-generated
<fieldset>
  <legend>Feedback form</legend>

  <p>Required fields are labeled with "required".</p>
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
    <label for="email">Email address (include if you want a response): </label>
    <input id="email" name="email" type="email" />
    <span></span>
  </div>
</fieldset>
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
```

```js hidden live-sample___optional-required-styles
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("required-optional-generated", "100%", 430, , , , , "allow-forms")}}

## Steuerelemente anhand der Gültigkeit ihrer Daten gestalten

Eine weitere grundlegende Frage bei der Formularvalidierung ist, ob die Daten eines Formularsteuerelements gültig sind. Bei numerischen Daten können wir außerdem unterscheiden, ob sie innerhalb oder außerhalb eines festgelegten Bereichs liegen. Formularsteuerelemente mit [Validierungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) können anhand dieser Zustände angesprochen werden.

### :valid und :invalid

Mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} können Sie Formularsteuerelemente gezielt ansprechen. Dabei sollten Sie Folgendes beachten:

- Steuerelemente ohne Validierungsbedingungen gelten immer als gültig und entsprechen daher `:valid`.
- Steuerelemente mit `required`, die keinen Wert haben, gelten als ungültig. Sie entsprechen sowohl `:invalid` als auch `:required`.
- Steuerelemente mit integrierter Validierung, etwa `<input type="email">` oder `<input type="url">`, entsprechen `:invalid`, wenn die eingegebenen Daten nicht dem erwarteten Muster entsprechen. Sind sie leer, gelten sie jedoch als gültig.
- Steuerelemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Grenzen liegt, entsprechen `:invalid` und außerdem {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt weitere Möglichkeiten, ein Element dazu zu bringen, `:valid` oder `:invalid` zu entsprechen. Mehr dazu erfahren Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation). Vorerst bleiben wir bei den Grundlagen.

Sehen wir uns ein Beispiel für `:valid` und `:invalid` an.

Wie im vorherigen Beispiel verwenden wir zusätzliche `<span>`-Elemente für generierten Inhalt. Damit zeigen wir Kennzeichnungen für gültige und ungültige Daten an:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Für diese Kennzeichnungen verwenden wir folgendes CSS:

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

Wie zuvor setzen wir für die `<span>`-Elemente `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Je nachdem, ob die Formulardaten gültig oder ungültig sind, positionieren wir dann unterschiedlichen generierten Inhalt absolut: ein grünes Häkchen bzw. ein rotes Kreuz. Um ungültige Daten noch deutlicher hervorzuheben, erhalten die betreffenden Eingabefelder außerdem einen breiten roten Rahmen.

> [!NOTE]
> Für diese Kennzeichnungen verwenden wir `::before`, da `::after` bereits für die Kennzeichnung „required“ verwendet wird.

Probieren Sie es unten aus. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___valid-invalid
<fieldset>
  <legend>Feedback form</legend>

  <p>Required fields are labeled with "required".</p>
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
    <label for="email">Email address (include if you want a response): </label>
    <input id="email" name="email" type="email" />
    <span></span>
  </div>
</fieldset>
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
```

{{EmbedLiveSample("valid-invalid", "100%", 430, , , , , "allow-forms")}}

Beachten Sie, dass die erforderlichen Texteingabefelder ungültig sind, solange sie leer sind, und gültig werden, sobald etwas eingetragen wurde. Das E-Mail-Feld hingegen ist leer gültig, weil es nicht erforderlich ist. Es wird jedoch ungültig, wenn sein Inhalt keine gültige E-Mail-Adresse ist.

### Werte innerhalb und außerhalb eines Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen: {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Sie sprechen numerische Eingabefelder an, für die mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Bereichsgrenzen festgelegt wurden – je nachdem, ob ihre Daten innerhalb oder außerhalb dieses Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Eingabefelder, deren Daten innerhalb des Bereichs liegen, entsprechen auch der Pseudoklasse `:valid`. Liegen ihre Daten außerhalb des Bereichs, entsprechen sie ebenfalls `:invalid`. Warum brauchen wir also beide Paare? Der Unterschied liegt in der Aussage: Ein Wert außerhalb des Bereichs ist eine spezifischere Art ungültiger Eingabe. Deshalb möchten Sie möglicherweise eine eigene Meldung dafür anzeigen, die Nutzern mehr hilft als ein bloßes „ungültig“. Sie können auch beide Meldungen anzeigen.

Sehen wir uns ein Beispiel an, das genau das tut. Es baut auf dem vorherigen Beispiel auf und zeigt für numerische Eingabefelder sowohl an, ob sie erforderlich sind, als auch, ob ihr Wert außerhalb des Bereichs liegt.

Das numerische Eingabefeld sieht so aus:

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

Das ähnelt unserem früheren Beispiel mit `:required`. Diesmal haben wir jedoch die Deklarationen, die für jeden `::after`-Inhalt gelten, in eine eigene Regel ausgelagert. Für den `::after`-Inhalt der Zustände `:required` und `:out-of-range` haben wir jeweils eigene Inhalte und Stile festgelegt. Probieren Sie es hier aus. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___out-of-range
<fieldset>
  <legend>Feedback form</legend>

  <p>Required fields are labeled with "required".</p>
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
    <label for="email">Email address (include if you want a response): </label>
    <input id="email" name="email" type="email" />
    <span></span>
  </div>
</fieldset>
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
```

{{EmbedLiveSample("out-of-range", "100%", 430, , , , , "allow-forms")}}

Ein numerisches Eingabefeld kann gleichzeitig erforderlich sein und einen Wert außerhalb des zulässigen Bereichs enthalten. Was geschieht dann? Da die Regel für `:out-of-range` im Quellcode nach der Regel für `:required` steht, greifen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade), und die Meldung zum Wert außerhalb des Bereichs wird angezeigt.

Das funktioniert gut: Beim ersten Laden der Seite erscheinen „Required“, ein rotes Kreuz und ein roter Rahmen. Sobald Sie ein gültiges Alter eingeben (also einen Wert zwischen 12 und 120), wird das Eingabefeld gültig. Ändern Sie den Wert anschließend auf ein Alter außerhalb dieses Bereichs, erscheint anstelle von „Required“ die Meldung „Outside allowable value range“.

> [!NOTE]
> Um einen ungültigen Wert außerhalb des Bereichs einzugeben, müssen Sie das Eingabefeld fokussieren und den Wert über die Tastatur eingeben. Mit den Schrittreglern lässt sich der Wert nicht über die zulässigen Grenzen hinaus erhöhen oder verringern.

## Aktivierte und deaktivierte sowie schreibgeschützte und bearbeitbare Eingabefelder gestalten

Ein aktiviertes Element kann verwendet werden: Es lässt sich beispielsweise auswählen, anklicken oder beschreiben. Mit einem deaktivierten Element kann dagegen in keiner Weise interagiert werden. Seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können Sie mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} ansprechen. Warum sind deaktivierte Eingabefelder nützlich? Manchmal treffen bestimmte Angaben auf einen Nutzer nicht zu. Dann möchten Sie diese Daten möglicherweise auch beim Absenden des Formulars nicht übermitteln. Ein klassisches Beispiel ist ein Versandformular: Häufig wird gefragt, ob Rechnungs- und Lieferadresse identisch sind. Falls ja, genügt es, eine einzige Adresse an den Server zu senden; die Felder für die Rechnungsadresse können deaktiviert werden.

Sehen wir uns ein Beispiel dafür an. Das HTML enthält Texteingabefelder sowie eine Checkbox, mit der sich die Felder für die Rechnungsadresse aktivieren oder deaktivieren lassen. Diese Felder sind standardmäßig deaktiviert.

```html
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
```

Nun zum CSS. Die wichtigsten Teile dieses Beispiels sind:

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Die zu deaktivierenden Eingabefelder haben wir mit `input[type="text"]:disabled` direkt ausgewählt. Wir möchten aber auch die zugehörigen Text-Labels ausgrauen. Da die Labels unmittelbar vor ihren Eingabefeldern stehen, wählen wir sie mithilfe der Pseudoklasse {{cssxref(":has")}} aus.

Schließlich verwenden wir etwas JavaScript, um die Felder für die Rechnungsadresse abwechselnd zu aktivieren und zu deaktivieren:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), damit Nutzer die Rechnungsadressfelder aktivieren oder deaktivieren können. Gleichzeitig wird die Gestaltung der zugehörigen Labels angepasst.

Unten sehen Sie das Beispiel in Aktion. Klicken Sie auf die Schaltfläche **Play**, um es im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___enabled-disabled-shipping
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
```

{{EmbedLiveSample("enabled-disabled-shipping", "100%", 580, , , , , "allow-forms")}}

### Schreibgeschützt und bearbeitbar

Ähnlich wie `:disabled` und `:enabled` sprechen die Pseudoklassen `:read-only` und `:read-write` zwei Zustände an, zwischen denen Eingabefelder wechseln können. Schreibgeschützte Eingabefelder können ebenso wie deaktivierte Eingabefelder nicht vom Nutzer bearbeitet werden. Anders als bei deaktivierten Eingabefeldern werden ihre Werte jedoch an den Server gesendet. Bearbeitbare Eingabefelder können geändert werden – das ist ihr Standardzustand.

Ein Eingabefeld wird mit dem Attribut `readonly` schreibgeschützt. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf der die Angaben aus vorherigen Seiten angezeigt werden. Die Nutzer sollen dort alle Angaben gemeinsam prüfen, gegebenenfalls letzte Angaben ergänzen und anschließend die Bestellung durch Absenden bestätigen. Dann können sämtliche endgültigen Formulardaten auf einmal an den Server gesendet werden.

Sehen wir uns an, wie ein solches Formular aussehen könnte.

Ein HTML-Ausschnitt sieht folgendermaßen aus – beachten Sie das Attribut `readonly`:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das interaktive Beispiel ausprobieren, sehen Sie, dass die erste Gruppe von Formularelementen nicht bearbeitet werden kann. Beim Absenden des Formulars würden diese schreibgeschützten Werte dennoch übermittelt. Die Formularsteuerelemente haben wir mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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

Das vollständige Beispiel sieht so aus. Klicken Sie auf die Schaltfläche **Play**, um es im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___readonly-confirmation
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
</textarea>
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

{{EmbedLiveSample("readonly-confirmation", "100%", 660, , , , , "allow-forms")}}

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Zustände von Radio-Buttons und Checkboxen – ausgewählt, Standardauswahl, unbestimmt

Wie wir in früheren Artikeln dieses Moduls gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Checkboxen")}} ausgewählt oder nicht ausgewählt sein. Es gibt jedoch noch weitere Zustände:

- {{cssxref(":default")}}: Entspricht Radio-Buttons und Checkboxen, die beim Laden der Seite standardmäßig ausgewählt sind (weil bei ihnen das Attribut `checked` gesetzt ist). Sie entsprechen der Pseudoklasse {{cssxref(":default")}} auch dann noch, wenn Nutzer die Auswahl aufheben.
- {{cssxref(":indeterminate")}}: Sind Radio-Buttons oder Checkboxen weder ausgewählt noch nicht ausgewählt, gelten sie als _unbestimmt_ und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Was das bedeutet, erklären wir weiter unten.

### :checked

Ausgewählte Radio-Buttons und Checkboxen entsprechen der Pseudoklasse {{cssxref(":checked")}}.

Am häufigsten wird diese Pseudoklasse verwendet, um ausgewählte Checkboxen oder Radio-Buttons anders zu gestalten, wenn Sie die standardmäßige Systemdarstellung mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Gestaltung selbst aufbauen möchten. Beispiele dafür haben wir im vorherigen Artikel unter [Checkboxen und Radio-Buttons mit `appearance` gestalten](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesehen.

Zur Erinnerung: Der `:checked`-Code aus unserem Beispiel für gestaltete Radio-Buttons sieht so aus:

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

Sie können ihn hier ausprobieren. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___radios-styled
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

Im Wesentlichen gestalten wir den „inneren Kreis“ eines Radio-Buttons mit dem Pseudoelement `::before`, weisen ihm zunächst aber eine {{cssxref("transform")}}-Transformation mit `scale(0)` zu. Mit einer {{cssxref("transition")}} lassen wir den generierten Inhalt anschließend beim Auswählen des Radio-Buttons animiert erscheinen. Eine Transformation statt eines Übergangs für {{cssxref("width")}} und {{cssxref("height")}} zu verwenden, hat einen Vorteil: Mit {{cssxref("transform-origin")}} können Sie den Kreis von seiner Mitte aus wachsen lassen, statt ihn scheinbar von einer Ecke aus zu vergrößern. Da keine Eigenschaften des Box-Modells aktualisiert werden, entstehen außerdem keine sprunghaften Verschiebungen.

### :default und :indeterminate

Wie oben erwähnt, entspricht die Pseudoklasse {{cssxref(":default")}} Radio-Buttons und Checkboxen, die beim Laden der Seite standardmäßig ausgewählt sind – selbst wenn die Auswahl später aufgehoben wird. Damit können Sie Optionen kennzeichnen, die ursprünglich ausgewählt waren, und Nutzer daran erinnern, falls sie ihre Auswahl zurücksetzen möchten.

Die Pseudoklasse {{cssxref(":indeterminate")}} entspricht Radio-Buttons und Checkboxen, die weder ausgewählt noch nicht ausgewählt sind. Doch was bedeutet das genau? Einen unbestimmten Zustand können folgende Elemente haben:

- {{HTMLElement("input/radio")}}-Eingabefelder, wenn in einer Gruppe gleichnamiger Radio-Buttons keiner ausgewählt ist
- {{HTMLElement("input/checkbox")}}-Eingabefelder, deren `indeterminate`-Eigenschaft per JavaScript auf `true` gesetzt wurde
- {{HTMLElement("progress")}}-Elemente ohne Wert

Diesen Zustand werden Sie wahrscheinlich nicht oft verwenden. Ein Anwendungsfall wäre eine Kennzeichnung, die Nutzern zeigt, dass sie einen Radio-Button auswählen müssen, bevor sie fortfahren.

Sehen wir uns zwei abgewandelte Versionen des vorherigen Beispiels an. Eine erinnert an die Standardoption, die andere gestaltet die Labels von Radio-Buttons im unbestimmten Zustand. Beide verwenden für die Eingabefelder folgende HTML-Struktur:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir beim mittleren Radio-Button das Attribut `checked` hinzugefügt. Dadurch ist er beim Laden standardmäßig ausgewählt. Anschließend gestalten wir ihn mit folgendem CSS:

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

So erhält die Option, die beim Laden der Seite ursprünglich ausgewählt war, eine kleine Kennzeichnung „Default“. Beachten Sie, dass wir hier den Kombinator für nachfolgende Geschwisterelemente (`~`) statt des Kombinators für unmittelbar folgende Geschwisterelemente (`+`) verwenden. Das ist nötig, weil das `<span>` im Quellcode nicht direkt auf das `<input>` folgt.

Das interaktive Ergebnis sehen Sie unten. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___radios-checked-default
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

Im `:indeterminate`-Beispiel ist standardmäßig kein Radio-Button ausgewählt. Das ist wichtig: Wäre einer ausgewählt, gäbe es keinen unbestimmten Zustand, den wir gestalten könnten. Die Radio-Buttons im unbestimmten Zustand gestalten wir mit folgendem CSS:

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

Dadurch erhalten die Radio-Buttons eine kleine animierte Umrandung, die hoffentlich darauf hinweist, dass eine Option ausgewählt werden muss.

Das interaktive Ergebnis sehen Sie unten. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

```html hidden live-sample___radios-checked-indeterminate
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
> Ein [interessantes Beispiel für `indeterminate`-Zustände](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) finden Sie auf der Referenzseite zu [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox).

## Weitere Pseudoklassen

Es gibt noch einige weitere interessante Pseudoklassen. Wir haben hier nicht genug Platz, um sie alle ausführlich zu behandeln. Einige davon sollten Sie sich aber selbst näher ansehen:

- Die Pseudoklasse {{cssxref(":focus-within")}} entspricht einem Element, das selbst den Fokus hat oder ein Element _enthält_, das den Fokus hat. Das ist nützlich, wenn Sie beispielsweise ein ganzes Formular hervorheben möchten, sobald eines seiner Eingabefelder den Fokus erhält.
- Die Pseudoklasse {{cssxref(":focus-visible")}} entspricht fokussierten Elementen, die den Fokus durch eine Tastaturinteraktion (statt durch Berührung oder Maus) erhalten haben. Sie ist nützlich, wenn Sie den Tastaturfokus anders gestalten möchten als einen durch die Maus oder andere Eingabemethoden gesetzten Fokus.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} entspricht {{htmlelement('input')}}- und {{htmlelement('textarea')}}-Elementen, deren Platzhalter angezeigt wird (also der Inhalt des Attributs [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)), weil das Element keinen Wert hat.

Die folgenden Pseudoklassen sind ebenfalls interessant, werden von Browsern bisher aber nicht umfassend unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularsteuerelemente aus. {{cssxref(":empty")}} entspricht ebenfalls Elementen ohne Kindelemente, etwa {{HTMLElement("input")}}, ist aber allgemeiner: Sie entspricht auch anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` wird von Browsern recht gut unterstützt. Die Spezifikation für `:blank` ist dagegen noch nicht abgeschlossen, weshalb diese Pseudoklasse bisher von keinem Browser unterstützt wird.
- Die Pseudoklasse {{cssxref(":user-invalid")}} ähnelt, sofern sie unterstützt wird, {{cssxref(":invalid")}}, bietet aber eine bessere Nutzererfahrung. Ist ein Wert gültig, wenn das Eingabefeld den Fokus erhält, kann das Element während der Eingabe vorübergehend `:invalid` entsprechen. `:user-invalid` entspricht es dagegen erst, wenn es den Fokus verliert. War der Wert bereits zuvor ungültig, entspricht das Element während der gesamten Fokussierung sowohl `:invalid` als auch `:user-invalid`. Wie bei `:invalid` gilt `:user-invalid` nicht mehr, sobald der Wert gültig wird.

## Zusammenfassung

Damit ist unser Überblick über UI-Pseudoklassen für Formulareingaben abgeschlossen. Probieren Sie sie weiter aus und gestalten Sie interessante Formulare! Als Nächstes wenden wir uns einem anderen Thema zu: der [clientseitigen Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
