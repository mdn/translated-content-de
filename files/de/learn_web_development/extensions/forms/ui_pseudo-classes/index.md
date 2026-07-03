---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularsteuerelemente auf allgemeine Weise behandelt. Dies umfasste die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zum Styling von Formularen in unterschiedlichen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinem Wissen über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
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
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z. B. durch Tastaturnavigation).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z. B. während darauf geklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste im Fall einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielmethoden, die Sie nutzen können. Wir werden diese im Folgenden genauer besprechen, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularsteuerelemente ab, die gemäß den festgelegten Formularvalidierungsbeschränkungen, gültig oder ungültig oder innerhalb / außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sowie beschreibbar oder schreibgeschützt sind (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen jeweils auf Kontrollkästchen und Optionsfelder ab, die aktiviert, in einem unbestimmten Zustand sind (weder aktiviert noch nicht aktiviert) und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgelisteten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formulare sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularsteuerelementen basierend auf ihrem Validierungsstatus (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr darüber lernen, wie man Validierungsbeschränkungen setzt und kontrolliert, in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für den Moment halten wir es einfach in Bezug auf die Formularvalidierung, um keine Verwirrung zu stiften.

## Styling von Eingabefeldern basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich clientseitiger Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required`-Attribut zur Verfügung, das, wenn es gesetzt ist, bedeutet, dass dieses Feld ausgefüllt werden muss, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind der Vorname und der Nachname im folgenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Die erforderlichen Steuerelemente haben einen festen Rahmen, und das optionale Steuerelement hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, Elemente in Formularen nur anhand von Farben zu stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort „erforderlich“, das den entsprechenden Steuerelementen zugeordnet ist. Im nächsten Abschnitt werden wir ein besseres Beispiel für die Kennzeichnung erforderlicher Felder mit `:required` und generiertem Inhalt betrachten.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional` Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, also könnten Sie Ihr optionales Styling standardmäßig anwenden und Styles für erforderliche Steuerelemente oben draufsetzen.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das `required`-Attribut gesetzt hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur der mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um ein wenig detaillierter darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} zusammen mit der {{cssxref("content")}}-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es ebenso wie ein tatsächlich im DOM vorhandener Knoten gestylt werden.

Dies ist wirklich nützlich, wenn Sie einem Element, wie z. B. einem Label oder einem Symbol, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Zum Beispiel können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radio-Buttons zu steuern, wenn ein Radio-Button ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radio-Button oder Kontrollkästchen, dem sie begegnen, aktiviert/ausgewählt ist, sodass Sie nicht möchten, dass sie einen anderen DOM-Knoten vorlesen, der die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen den Einbau von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text in sich anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen erforderlichen/optionalen Beispiel, dieses Mal werden wir nicht das Erscheinungsbild des Inputs selbst ändern — wir werden generierten Inhalt verwenden, um ein erklärendes Label hinzuzufügen.

Zuerst fügen wir einen Absatz oben im Formular hinzu, um zu erklären, was gesucht wird:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzern von Screenreadern wird „erforderlich“ als zusätzliche Information vorgelesen, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, also fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran zu befestigen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass der Span auf eine neue Zeile unterhalb der Eingabe fiel, da die Eingabe und das Label beide mit `width: 100%` eingestellt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>`, um ein Flex-Container zu werden, geben ihm allerdings die Anweisung, seinen Inhalt auf neue Zeilen zu umbrechen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Das Ergebnis ist, dass das Label und das Input auf separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es in der gleichen Zeile wie die Eingabe stehen kann.

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` anordnen können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als ob er zum Positionieren ein Kindknoten des Elements ist, in dem er generiert wurde).

Dann geben wir dem generierten Inhalt den Inhalt „erforderlich“, was unser Label sagen soll, und stylen und positionieren es nach unseren Wünschen. Das Ergebnis sehen Sie unten (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Eingabefelder basierend auf ihrer Datenvalidität stylen

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten eines Formularfelds gültig sind oder nicht (im Fall von numerischen Daten können wir auch über Daten innerhalb oder außerhalb des Bereichs sprechen). Formularsteuerelemente mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können auf der Grundlage dieser Zustände angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Validierungseinschränkungen sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Steuerelemente mit gesetztem `required`-Attribut, die keinen Wert haben, werden als ungültig angesehen — sie werden mit `:invalid` und `:required` übereinstimmen.
- Eingaben mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (passen auf) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute spezifizierten Bereichsgrenzen liegen, sind (passen auf) `:invalid`, werden aber auch von {{cssxref(":out-of-range")}} angesprochen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element durch `:valid`/`:invalid` anzusprechen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir werden es vorerst einfach halten.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt darauf zu erstellen, den wir verwenden werden, um Indikatoren für gültige / ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut unterschiedlichen generierten Inhalt, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein bisschen zusätzliche Dringlichkeit für die ungültigen Daten bereitzustellen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Beschriftungen hinzuzufügen, da wir `::after` bereits für die „erforderlichen“ Beschriftungen verwendet haben.

Sie können es unten ausprobieren (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig sind, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe ist hingegen gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb und außerhalb des Bereichs liegende Daten

Wie wir oben angedeutet haben, gibt es zwei andere verwandte Pseudoklassen zu bedenken — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese zielen auf numerische Eingaben ab, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute festgelegt sind, wann ihre Daten sich innerhalb oder außerhalb des angegebenen Bereichs befinden, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten innerhalb des Bereichs liegen, auch durch die `:valid` Pseudoklasse angesprochen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die `:invalid` Pseudoklasse. Warum also haben wir beide? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie vielleicht eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für Benutzer hilfreicher sein wird, als nur „ungültig“ zu sagen. Sie könnten sogar beide bereitstellen.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut, indem es auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

Die numerische Eingabe sieht folgendermaßen aus:

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

Dies ist eine ähnliche Geschichte wie in unserem vorherigen `:required` Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after` Inhalt angewendet werden, in eine separate Regel aufgeteilt haben und den separaten `::after` Inhalt für `:required`- und `:out-of-range`-Zustände ihren eigenen Inhalt und ihre eigene Gestaltung gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs ist, was geschieht dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die außerhalb des Bereichs befindliche Nachricht wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zuerst geladen wird, wird „Erforderlich“ angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eintippen (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch dann das Alter zu einem Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht „Außerhalb des erlaubten Wertebereichs“ anstelle von „Erforderlich“.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eintippen. Die Spinner-Schaltflächen lassen Sie den Wert nicht außerhalb des erlaubten Bereiches erhöhen/verringern.

## Steuerelemente basierend auf ihrem Aktivierungs- und Schreibzustand stylen

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, beschrieben, etc. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie möglicherweise diese Daten nicht einmal senden, wenn sie das Formular senden. Ein klassisches Beispiel ist ein Versandformular — in der Regel werden Sie gefragt, ob Sie die gleiche Adresse für die Rechnungsstellung und den Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und vielleicht sogar die Rechnungsadresse-Felder deaktivieren.

Lassen Sie uns ein Beispiel ansehen, das genau das tut. Zuerst das HTML, das ein einfaches Formular mit Texteingaben enthält, plus ein Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch, dass die entsprechenden Textlabels grau sind. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer das Aktivieren/Deaktivieren der Rechnungsfelder zu ermöglichen und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel in Aktion unten sehen (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

### Schreibgeschützt und Schreibbar

Ähnlich wie bei `:disabled`/`:enabled` zielen die Pseudoklassen `:read-only`/`:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln können. Genau wie deaktivierte Eingaben können auch schreibgeschützte Eingaben nicht von Benutzern bearbeitet werden. Anders als deaktivierte Eingaben werden jedoch Werte von schreibgeschützten Eingaben an den Server übermittelt. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird auf schreibgeschützt gesetzt, indem das `readonly`-Attribut verwendet wird. Als Beispiel stellen Sie sich eine Bestätigungsseite vor, auf der die ausgefüllten Details aus den vorherigen Seiten an diese Seite gesendet wurden, mit dem Ziel, dass der Benutzer sie an einem Ort überprüft, alle Daten hinzufügt, die noch benötigt werden, und dann die Bestellung durch Übermitteln bestätigt. An diesem Punkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht folgendermaßen aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Gruppe von Formularelementen nicht bearbeitbar ist, die Werte jedoch beim Absenden des Formulars übermittelt werden. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Das vollständige Beispiel sieht so aus (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

## Zustände von Radio- und Kontrollkästchen — aktiviert, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Passt auf Radios/Kontrollkästchen, die standardmäßig bei Seitenaufruf aktiviert sind (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese passen auf die {{cssxref(":default")}} Pseudoklasse, auch wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, werden sie als _unbestimmt_ angesehen und passen auf die {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu weiter unten.

### :checked

Wenn aktiviert, passen sie auf die {{cssxref(":checked")}} Pseudoklasse.

Die häufigste Verwendung dafür ist, um eine andere Stilart anzuwenden, wenn das Kontrollkästchen oder der Radio-Button aktiviert ist, für den Fall, dass Sie das standardmäßige System-Design mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Styles selbst neu aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über das [Stylen von Kontrollkästchen und Radio-Buttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Als Rückblick sieht der `:checked`-Code aus unserem Beispiel für gestylte Radio-Buttons so aus:

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

Sie können es hier ausprobieren (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Im Wesentlichen bauen wir das Design für den „inneren Kreis“ eines Radio-Buttons mit dem `::before` Pseudoelement auf, setzen aber eine `scale(0)` {{cssxref("transform")}} darauf. Wir verwenden dann einen {{cssxref("transition")}}, um den generierten Inhalt auf dem Label schön animiert erscheinen zu lassen, wenn das Radio ausgewählt/aktiviert ist. Der Vorteil der Verwendung einer Transformation anstelle der Übergangsbreite ({{cssxref("width")}}/{{cssxref("height")}}) ist, dass Sie {{cssxref("transform-origin")}} verwenden können, um es vom Zentrum des Kreises wachsen zu lassen, anstatt aus der Ecke des Kreises, und es gibt kein Springverhalten, da keine Werte der Box-Modell-Eigenschaften aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudoklasse Radios/Kontrollkästchen, die standardmäßig bei Seitenaufruf aktiviert sind, auch wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardwerte (oder Anfangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben genannten Radios/Kontrollkästchen von der {{cssxref(":indeterminate")}} Pseudoklasse angesprochen, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Was bedeutet das also? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe nicht aktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern zu sagen, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radio-Buttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radio-Button gesetzt, sodass es standardmäßig ausgewählt ist, wenn geladen. Dann stylen wir dies mit dem folgenden CSS:

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

Dies liefert ein kleines „Standard“-Label auf dem Element, das ursprünglich beim Seitenaufruf ausgewählt war. Beachten Sie hier, dass wir den Nachfolgende-Geschwister-Kombinator (`~`) anstelle des Nächster-Geschwister-Kombinator (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — das ist wichtig — wenn es da wäre, gäbe es keinen unbestimmten Zustand, um ihn zu stylen. Wir stylen die unbestimmten Radio-Buttons mit dem folgenden CSS:

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

Dies erzeugt ein kleines animiertes Outline auf den Radio-Buttons, das hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel mit `unbestimmten` Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite für [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht genug Platz, um über alle im Detail zu schreiben. Lassen Sie uns über einige weitere sprechen, die Sie sich die Zeit nehmen sollten zu untersuchen.

- Die {{cssxref(":focus-within")}} Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder ein Element _enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein Eingabefeld darin den Fokus erhält.
- Die {{cssxref(":focus-visible")}} Pseudoklasse entspricht fokussierten Elementen, die Fokus durch Tastaturinteraktion (anstelle von Berührungen oder Maus) erhielten — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formulareingabefelder. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es entspricht auch anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die `:blank` Pseudoklasse hat noch keine fertige Spezifikation und wird daher von keinem Browser unterstützt.
- Die {{cssxref(":user-invalid")}} Pseudoklasse wird bei Unterstützung ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element `:invalid` für den Benutzer sein, während Daten eingegeben werden, wenn der Wert vorübergehend ungültig ist, aber es wird nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, entspricht er sowohl `:invalid` als auch `:user-invalid` für die gesamte Dauer des Fokus. In ähnlicher Weise wie `:invalid` stoppt es, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Zusammenfassung

Das beendet unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Experimentieren Sie weiter mit ihnen und erstellen Sie einige spaßige Formularstile! Als nächstes werden wir uns etwas anderes ansehen — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
