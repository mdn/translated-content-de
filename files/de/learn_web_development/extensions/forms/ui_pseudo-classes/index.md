---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente auf allgemeine Weise behandelt. Dazu gehörte die Nutzung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen, die zum Styling von Formularen in unterschiedlichen Zuständen eingesetzt werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich grundlegender
        Kenntnisse über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um sie zu individualisieren.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Vielleicht sind Sie bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. wenn es beispielsweise durch die Tastatur angewählt wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird, oder wenn die <kbd>Return</kbd>- / <kbd>Enter</kbd>-Taste im Falle einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Targeting-Bedingungen, die Sie nutzen können. Wir werden diese im Folgenden näher besprechen, aber kurz gesagt, die Hauptklassen, auf die wir eingehen, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gültig/ungültig gemäß den auf sie angewandten Formularvalidierungsbeschränkungen sind, oder im Bereich/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und schreibgeschützte oder bearbeitbare Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Sie zielen respektive auf Kontrollkästchen und Optionsfelder, die aktiviert, in einem unbestimmten Zustand (weder aktiviert noch nicht aktiviert) sind, und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier diskutierten Pseudoklassen betrifft das Styling von Formularelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie lernen in unserem nächsten Artikel viel mehr über das Festlegen und Steuern von Validierungseinschränkungen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir die Dinge hinsichtlich der Formularvalidierung einfach, damit sie es nicht verwirren.

## Styling von Eingabefeldern basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob ein Formularfeld erforderlich ist (es muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut zur Verfügung, welches, wenn gesetzt, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind im untenstehenden Formular der Vorname und der Nachname erforderlich, die E-Mail-Adresse ist jedoch optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}}-Pseudoklassen abgleichen. Wenn wir zum Beispiel folgendes CSS auf das obige HTML anwenden:

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

Die erforderlichen Felder haben eine durchgezogene Linie und das optionale Feld eine gestrichelte Linie. Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, die „erforderlichen“ und „optionalen“ Elemente in Formularen nur durch Farbe zu stylen, da dies für farbenblinde Menschen nicht optimal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für erforderliche Felder ist ein Sternchen (`*`) oder das Wort „erforderlich“, das mit den entsprechenden Feldern verbunden ist. Im nächsten Abschnitt sehen wir uns ein besseres Beispiel für das Anzeigen von erforderlichen Feldern mit `:required` und generiertem Inhalt an.

> [!NOTE]
> Sie werden wahrscheinlich die `:optional`-Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie Ihr optionales Styling standardmäßig anwenden und zusätzliche Stile für erforderliche Felder hinzufügen.

> [!NOTE]
> Wenn ein Kontrollkästchen in einer benannten Gruppe von Kontrollkästchen das `required`-Attribut gesetzt hat, sind alle Kontrollkästchen ungültig, bis eines ausgewählt wird, aber nur dasjenige mit dem Attribut wird tatsächlich auf {{cssxref(':required')}} abgleichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um genauer darüber zu sprechen.

Die Idee ist, dass wir die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente zusammen mit der {{cssxref("content")}} Eigenschaft verwenden können, um ein Stück Inhalt erscheinen zu lassen, bevor oder nachdem das betroffene Element kommt. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Stilen angesprochen werden, so wie dies bei jedem tatsächlichen DOM-Knoten der Fall ist.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Etikett oder Symbol, ein optisches Merkmal hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Zum Beispiel können wir generierten Inhalt nutzen, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Optionsfeldes zu steuern, wenn ein Optionsfeld ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein von ihnen entdecktes Optionsfeld oder Kontrollkästchen aktiviert ist, sodass Sie nicht möchten, dass sie ein anderes DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen generierten Inhalt. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem früheren Beispiel „erforderlich/optional“, dieses Mal werden wir das Aussehen der Eingabe selbst nicht ändern — wir werden generierten Inhalt nutzen, um ein bezeichnendes Etikett hinzuzufügen.

Zuerst fügen wir dem Formular eine Einleitung hinzu, die erklärt, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer hören „erforderlich“ als zusätzliche Information, wenn sie jedes erforderliche Feld erreichen, während sehende Benutzer unser Etikett sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, sodass wir eine leere [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzufügen, auf die der generierte Inhalt aufgehängt werden kann:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das sofortige Problem dabei war, dass das Span in eine neue Zeile unterhalb der Eingabe fiel, weil sowohl die Eingabe als auch das Etikett mit `width: 100%` gesetzt waren. Um dies zu beheben, gestalten wir das übergeordnete `<div>` zu einem Flex-Container und sagen ihm, seinen Inhalt auf neue Zeilen zu umschließen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass sich das Etikett und die Eingabe in separaten Zeilen befinden, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es sich in derselben Zeile wie die Eingabe befinden kann.

Jetzt zum generierten Inhalt. Wir erstellen ihn mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` und nicht zum `<body>` positionieren können (Für die Positionierung wirkt der generierte Inhalt, als ob er ein Kindknoten des Elements, auf dem er generiert wird, ist).

Dann geben wir dem generierten Inhalt den Inhalt „erforderlich“, was unser Etikett sagen sollte, und stylen und positionieren es nach unseren Wünschen. Das Ergebnis sehen Sie unten (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

```html hidden live-sample___required-optional-generated
<form>
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

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle numerischer Daten können wir auch über Daten im oder außerhalb des gültigen Bereichs sprechen). Formularelemente mit [Einschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}}-Pseudoklassen ansprechen. Einige Punkte, die es zu beachten gilt:

- Elemente ohne Einschränkungen sind immer gültig und werden daher mit `:valid` ausgewählt.
- Elemente mit `required`-Attribut, die keinen Wert haben, sind ungültig — sie werden mit `:invalid` und `:required` ausgewählt.
- Elemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (werden ausgewählt mit) `:invalid`, wenn die eingegebenen Daten nicht mit dem gesuchten Muster übereinstimmen (sind aber gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichsbeschränkungen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, werden (ausgewählt mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}} angesprochen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` auszuwählen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`-Elemente, um darauf Inhalte zu generieren, die als Indikatoren für gültige/ungültige Daten dienen:

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

Wie zuvor setzen wir die `<span>`-Elemente auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir verschiedene generierte Inhalte absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um den ungültigen Daten ein wenig zusätzliche Dringlichkeit zu verleihen, haben wir den Eingabefeldern einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die „erforderlich“-Labels benutzt haben.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___valid-invalid
<form>
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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn sie ausgefüllt sind. Das E-Mail-Eingabefeld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, wird aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Im-Bereich und Außerhalb des Bereichs

Wie oben angesprochen, gibt es zwei weitere verwandte Pseudoklassen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese wählen numerische Eingaben aus, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten im oder außerhalb des festgelegten Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten innerhalb des Bereichs liegen, auch mit der `:valid`-Pseudoklasse und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid`-Pseudoklasse ausgewählt werden. Warum also beide haben? Die Frage ist eigentlich eine der Semantik — „außerhalb des Bereichs“ ist eine spezifischere Art des ungültigen Status, also könnten Sie eine andere Nachricht für „außerhalb des Bereichs“-Eingaben bereitstellen wollen, die für Benutzer hilfreicher ist als nur „ungültig“ zu sagen. Sie könnten sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut und auf dem vorherigen Beispiel aufbaut, um „außerhalb des Bereichs“-Nachrichten für die numerischen Eingaben beizufügen, sowie anzeigt, ob sie erforderlich sind.

Die numerische Eingabe sieht so aus:

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewandt werden, in einer separaten Regel zusammengefasst haben, und den separaten `::after`-Inhalten für die `:required`- und `:out-of-range`-Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___out-of-range
<form>
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

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und „außerhalb des Bereichs“ ist, was passiert dann? Weil die `:out-of-range`-Regel später im Quellcode als die `:required`-Regel erscheint, greifen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade), und die Nachricht „Außerhalb des zulässigen Wertebereichs“ wird angezeigt.

Dies funktioniert ganz gut — wenn die Seite zuerst geladen wird, wird „Erforderlich“ angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch dann den Alterseintrag auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht „Außerhalb des zulässigen Wertebereichs“ anstelle von „Erforderlich“.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und den Wert mit der Tastatur eingeben. Die Spinner-Schaltflächen erlauben nicht das Inkrementieren/Decrementieren außerhalb des zulässigen Bereichs.

## Styling von aktivierten und deaktivierten Eingaben sowie schreibgeschützten und bearbeitbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element dagegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn bestimmte Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular abschicken. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie dieselbe Adresse für Versand und Rechnungsstellung verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden, und könnten genauso gut die Rechnungsadresse deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zunächst einmal ist das HTML ein einfaches Formular mit Texteingaben, plus einem Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben erscheinen, haben wir diese mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Jetzt haben wir schließlich etwas JavaScript verwendet, um das Deaktivieren der Rechnungsfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um den Benutzer zu ermächtigen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzustellen.

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

Ähnlich wie `:disabled` und `:enabled`, zielen die `:read-only` und `:read-write`-Pseudoklassen auf zwei Zustände, zwischen denen Formulareingaben umschalten. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte beim Abschicken an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` auf schreibgeschützt gesetzt. Angenommen, man stellt sich eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten eingegebenen Details an diese Seite gesendet hat, um dem Benutzer die Möglichkeit zu geben, alle auf einmal zu überprüfen, eventuell noch benötigte Daten hinzuzufügen und dann die Bestellung durch Absenden zu bestätigen. An diesem Punkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das `readonly`-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Menge an Formularelementen nicht bearbeitet werden kann, jedoch werden die Werte beim Absenden des Formulars gesendet. Wir haben die Formularelemente mit den `:read-only` und `:read-write`-Pseudoklassen wie folgt gestylt:

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Zustände von Radio- und Kontrollkästchen — aktiviert, standardmäßig, unbestimmt

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder nicht aktiviert sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Wählt Radios/Kontrollkästchen aus, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}}-Pseudoklasse, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}}-Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie von der {{cssxref(":checked")}}-Pseudoklasse angesprochen.

Die häufigste Verwendung hierfür ist, dem Kontrollkästchen oder Radio-Button einen anderen Stil hinzuzufügen, wenn er aktiviert ist, in Fällen, in denen Sie das standardmäßige Systemstyling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Stile selbst aufbauen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über [Styling von Kontrollkästchen und Radio-Buttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) sprachen.

Zur Erinnerung sieht der `:checked`-Code aus unserem Beispiel für gestylte Radio-Buttons so aus:

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

Grundsätzlich bauen wir das Styling des „inneren Kreises“ eines Radio-Buttons mit dem `::before`-Pseudoelement auf, setzen jedoch ein `scale(0)` {{cssxref("transform")}} darauf. Dann verwenden wir eine {{cssxref("transition")}}, um den generierten Inhalt auf dem Eingabefeld schön animiert in den View zu bringen, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung einer Transformation anstelle eines Übergangs bei {{cssxref("width")}}/{{cssxref("height")}} ist, dass Sie {{cssxref("transform-origin")}} verwenden können, um es aus der Mitte des Kreises heraus wachsen zu lassen, anstatt dass es so aussieht, als würde es aus der Ecke des Kreises wachsen, und es gibt kein Springen, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}}-Pseudoklasse Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite ausgewählt sind, selbst wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Hinweis auf eine Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardoptionen (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Auch die oben genannten Radios/Kontrollkästchen werden von der {{cssxref(":indeterminate")}}-Pseudoklasse angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radio-Buttons in einer benannten Gruppe nicht aktiviert sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Dies ist nicht etwas, das Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darauf hinzuweisen, dass sie wirklich ein Radio-Button auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar abgeänderte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Radio-Buttons im unbestimmten Zustand stylen. Beide verwenden die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radio-Button gesetzt, sodass es standardmäßig beim Laden ausgewählt wird. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines „Standard“-Etikett auf dem Element, das ursprünglich beim Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den nachgestellten Geschwister-Kombinator (`~`) anstelle des direkt aufeinanderfolgenden Kombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

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

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand, den man stylen könnte. Wir stylen die unbestimmten Radio-Buttons mit dem folgenden CSS:

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

Dies erstellt eine unterhaltsame kleine animierte Kontur auf den Radio-Buttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

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
> Sie können ein [interessantes Beispiel mit unbestimmten Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen und wir haben nicht den Platz, um sie alle ausführlich zu behandeln. Lassen Sie uns über einige weitere sprechen, die Sie untersuchen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse wählt ein Element aus, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert wird.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse wählt fokussierte Elemente aus, die den Fokus über eine Tastaturinteraktion (statt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für die Tastaturfokussierung im Vergleich zur Maus (oder anderen) Fokussierung anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse wählt {{htmlelement('input')}}- und {{htmlelement('textarea')}}-Elemente aus, bei denen der Platzhalter angezeigt wird (d.h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, werden aber bisher in Browsern nicht gut unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} wählt ebenfalls Elemente ohne Kinder, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es wählt auch andere {{Glossary("void_element", "Leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browser-Unterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, sodass sie in keinem Browser unterstützt wird.
- Die {{cssxref(":user-invalid")}}-Pseudoklasse wird, wenn sie unterstützt wird, ähnlich {{cssxref(":invalid")}} sein, jedoch mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element als Benutzer Daten eingibt, vorrübergehend ungültig werden, wird aber nur dann als `:user-invalid` angesehen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` während der gesamten Fokusdauer entsprechen. In ähnlicher Weise wie `:invalid` wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen ab, die sich auf Formularelemente beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formulargestaltungen! Als Nächstes werden wir zu etwas anderem übergehen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
