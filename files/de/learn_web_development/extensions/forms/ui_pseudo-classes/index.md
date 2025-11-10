---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularsteuerungen auf allgemeine Weise behandelt. Dazu gehörte die Verwendung von Pseudoklassen, zum Beispiel `:checked`, um ein Kontrollkästchen nur dann zu selektieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in unterschiedlichen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeiner Kenntnisse über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um diese anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Selektiert ein Element nur, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Selektiert ein Element nur, wenn es fokussiert ist (d.h. wenn es per Tastatur angesteuert wird).
- {{cssxref(":active")}}: Selektiert ein Element nur, wenn es aktiviert wird (d.h. während darauf geklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten verschiedene nützliche Targeting-Bedingungen, die Sie nutzen können. Wir werden diese weiter unten im Detail besprechen, aber kurz gesagt, die Hauptpunkte, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Element-Targets, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Targets von Formularsteuerungen, die gültig/ungültig gemäß den auf sie gesetzten Formularvalidierungsbeschränkungen sind, oder im Bereich/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Targets für Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und für schreibgeschützte oder beschreibbare Formularsteuerungen (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Ziel-Checkboxen und Radiobuttons, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) sind, sowie die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) gesetzt, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige sind darauf ausgelegt, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formulumsetzungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier diskutierten Pseudoklassen befassen sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungsstatus (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr darüber erfahren, wie Validierungsbeschränkungen gesetzt und kontrolliert werden, in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber fürs Erste werden wir die Formularvalidierung einfach halten, um keine Verwirrung zu stiften.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der Client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich übermittelt wird.
Zum Beispiel sind der Vorname und der Nachname im untenstehenden Formular erforderlich, die E-Mail-Adresse ist jedoch optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerungen haben einen durchgezogenen Rand und die optionale Steuerung hat einen gestrichelten Rand. Sie können auch versuchen, das Formular einzureichen, ohne es auszufüllen, um die standardmäßigen Client-seitigen Validierungsfehlermeldungen von Browsern anzuzeigen:

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

Der Standard auf dem Web für den Status 'erforderlich' ist ein Sternchen (`*`) oder das Wort "erforderlich", das den jeweiligen Steuerungen zugeordnet ist.
Im nächsten Abschnitt werden wir uns ein besseres Beispiel für die Kennzeichnung erforderlicher Felder mit `:required` und generierten Inhalten ansehen.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden und zusätzliche Stile für erforderliche Steuerelemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut gesetzt hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit zugewiesenem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/Reference/Selectors/::before) und [`::after`](/de/docs/Web/CSS/Reference/Selectors/::after) zusammen mit der [`content`](/de/docs/Web/CSS/Reference/Properties/content) Eigenschaft verwenden, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Stück Inhalt wird nicht dem DOM hinzugefügt, sodass es für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso behandelt werden wie jedes tatsächliche DOM-Node.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie ein Label oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Bildschirmlesegeräte teilen ihren Benutzern bereits mit, wann ein Radiobutton oder Checkbox, auf das sie treffen, aktiviert/ausgewählt ist, sodass Sie nicht möchten, dass ein weiteres DOM-Element vorgelesen wird, das eine Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen das Hinzufügen von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text darin anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, inklusive `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem erforderlichen/optionalen Beispiel von zuvor, diesmal werden wir nicht das Erscheinungsbild der Eingabe selbst ändern — wir werden generierten Inhalt verwenden, um ein anzeigendes Label hinzuzufügen.

Zunächst fügen wir einen Absatz oben im Formular hinzu, der erklärt, was gesucht wird:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer hören "erforderlich" als zusätzliche Information, wenn sie zu jeder erforderlichen Eingabe kommen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt darauf zu platzieren:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `<span>` in eine neue Zeile unter der Eingabe gezogen wurde, weil die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`-Element so, dass es ein Flex-Container wird, sagen ihm aber auch, dass es seine Inhalte auf neue Zeilen umbrechen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt, den dies hat, ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

Jetzt kommen wir zum generierten Inhalt. Wir erstellen ihn mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein Knoten des Elements, auf dem er generiert wurde, was das Positionieren betrifft).

Dann geben wir dem generierten Inhalt den Inhalt "required", was unser Label aussagen sollte, und stylen und positionieren ihn wie gewünscht. Das Ergebnis ist unten zu sehen (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Styling von Steuerungen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten einer Formularsteuerung gültig oder ungültig sind (im Fall von numerischen Daten können wir auch von Daten im Bereich und außerhalb des Bereichs sprechen). Formularsteuerungen mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularsteuerungen mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerungen ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Steuerungen mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie stimmen mit `:invalid` und `:required` überein.
- Steuerungen mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (übereinstimmend mit) `:invalid`, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn leer).
- Steuerungen, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) spezifizierten Bereichsgrenzen liegt, sind (übereinstimmend mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um Inhalte zu generieren, die wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzten wir die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedlichen generierten Inhalt je nach Gültigkeit der Formulardaten relativ zueinander — ein grüner Haken oder ein rotes Kreuz, je nachdem. Um ein wenig zusätzliche Dringlichkeit für die ungültigen Daten hinzuzufügen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Beschriftungen hinzuzufügen, da wir bereits `::after` für die "Erforderlich"-Beschriftungen verwendet haben.

Sie können es unten ausprobieren (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine gültige E-Mail-Adresse ist.

### Daten im Bereich und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese entsprechen numerischen Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid` Pseudoklasse übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid` Pseudoklasse übereinstimmen. Warum also beides haben? Das Problem ist wirklich eines der Semantik — "außerhalb des Bereichs" ist eine spezifischere Form der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Möglicherweise möchten Sie sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau das tut und auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzeigt, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte zu dem, was wir zuvor im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeglichen `::after` Inhalt zutreffen, in eine separate Regel aufgeteilt haben und dem separaten `::after` Inhalt für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Styling gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Meldung "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zuerst lädt, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe als gültig angesehen. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint dann die Meldung "Außerhalb zulässiger Werte" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen Wert einzugeben, müssen Sie tatsächlich den Wert im Formular fokussieren und mit der Tastatur eingeben. Die Spinnertasten erlauben es Ihnen nicht, den Wert außerhalb des zulässigen Bereichs zu erhöhen/herabzusetzen.

## Styling von Steuerungen basierend darauf, ob sie aktiviert oder deaktiviert sind, sowie ob sie schreibgeschützt oder beschreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt oder eingeben werden, etc. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} anvisiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht gelten, möchten Sie möglicherweise diese Daten nicht einmal senden, wenn er das Formular abschickt. Ein klassisches Beispiel ist ein Versandformular — üblicherweise wird gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandzwecke verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und vielleicht die Rechnungsadressfelder deaktivieren.

Lassen Sie uns ein Beispiel dazu ansehen. Zunächst ist das HTML ein einfaches Formular, das Texteingaben enthält, plus eine Checkbox, um zwischen Aktivierung/Deaktivierung der Rechnungsadresse umzuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren wollten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels sich direkt vor ihren Eingaben befinden, haben wir sie mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/Reference/Selectors/:has) ausgewählt.

Schließlich haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Unten können Sie das Beispiel in Aktion sehen (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Ähnlich wie `:disabled` und `:enabled` zielen die `:read-only` und `:read-write` Pseudoklassen auf zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben, kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird als schreibgeschützt gesetzt, indem das `readonly`-Attribut verwendet wird. Stellen Sie sich zum Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details auf diese Seite überträgt, mit dem Ziel, den Benutzer alles an einem Ort überprüfen zu lassen, alle weiteren erforderlichen Daten hinzuzufügen und dann die Bestellung zu bestätigen. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Gruppe von Formularelementen nicht bearbeitet werden kann, die Werte jedoch übermittelt werden, wenn das Formular abgeschickt wird. Wir haben die Formularsteuerungen mit den `:read-only`- und `:read-write`-Pseudoklassen wie folgt gestylt:

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

Das vollständige Beispiel sieht so aus (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

> [!NOTE] > `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radiobutton- und Checkbox-Zustände — ausgewählt, Standard, unbestimmt

Wie wir bereits in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Checkboxen")}} ausgewählt oder nicht ausgewählt werden. Aber es gibt ein paar andere Zustände, die ebenfalls berücksichtigt werden müssen:

- {{cssxref(":default")}}: Trifft auf Radiobuttons/Checkboxen zu, die standardmäßig beim Laden der Seite ausgewählt sind (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Checkboxen weder ausgewählt noch nicht ausgewählt sind, gelten sie als _unbestimmt_ und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Mehr dazu weiter unten.

### :checked

Wenn sie ausgewählt sind, stimmen sie mit der {{cssxref(":checked")}} Pseudoklasse überein.

Die häufigste Verwendung dafür ist, einen anderen Stil auf die Checkbox oder den Radiobutton anzuwenden, wenn er ausgewählt ist, in Fällen, in denen Sie das systemdefinierte Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Stile selbst aufbauen möchten. Wir sahen Beispiele hierfür im vorherigen Artikel, als wir über [Styling von Checkboxen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) sprachen.

Als Rückblick sieht der `:checked` Code unseres stilisierten Radio-Button-Beispiels wie folgt aus:

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

Sie können es hier ausprobieren (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Im Wesentlichen bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem `::before` Pseudoelement auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/Reference/Properties/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/Reference/Properties/transition), um den generierten Inhalt auf dem Label schön animiert ins Sichtfeld zu bringen, wenn das Radio ausgewählt/geprüft ist. Der Vorteil der Verwendung eines Transforms im Vergleich zur Animation von [`width`](/de/docs/Web/CSS/Reference/Properties/width)/[`height`](/de/docs/Web/CSS/Reference/Properties/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/Reference/Properties/transform-origin) verwenden können, um es aus der Mitte des Kreises herauswachsen zu lassen, anstatt den Anschein zu haben, als würde es aus der Ecke des Kreises herauswachsen, und es gibt kein Sprungverhalten, da keine Boxmodell-Attributwerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}} Pseudoklasse mit Radiobuttons/Checkboxen überein, die standardmäßig beim Laden der Seite ausgewählt sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Ebenso werden die oben erwähnten Radiobuttons/Checkboxen von der {{cssxref(":indeterminate")}} Pseudoklasse ausgewählt, wenn sie in einem Zustand sind, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht ausgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Hinweis sein, der dem Benutzer mitteilt, dass er wirklich einen Radiobutton auswählen muss, bevor er fortfährt.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radiobutton gesetzt, sodass er standardmäßig ausgewählt wird, wenn die Seite geladen wird. Wir stylen dies mit folgendem CSS:

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

Dies fügt dem ursprünglich ausgewählten Element beim Laden der Seite ein kleines "Standard"-Label hinzu. Beachten Sie, dass wir hier den Nachfolger-Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig angeklickten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radiobuttons mit folgendem CSS:

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

Dies erstellt eine lustige kleine animierte Kontur auf den Radiobuttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Play**-Schaltfläche, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel mit `unbestimmten` Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Seite [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer Pseudoklassen von Interesse, und wir haben nicht den Platz, über alle im Detail zu schreiben. Lassen Sie uns einige weitere erwähnen, die Sie genauer untersuchen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse trifft auf ein Element zu, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular auf eine bestimmte Weise hervorgehoben wird, wenn ein Eingabeelement darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse trifft auf fokussierte Elemente zu, die den Fokus über Tastaturinteraktion erhalten haben (anstatt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zum Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse trifft auf {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente zu, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} trifft ebenfalls auf Elemente zu, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — es trifft auch auf andere {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} zu. `:empty` hat eine vernünftige Browserunterstützung; die `:blank` Pseudoklasse ist in ihrer Spezifikation noch nicht abgeschlossen, daher wird sie noch in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/Reference/Selectors/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, wird das Element möglicherweise als `:invalid` übereinstimmen, wenn der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, aber nur dann `:user-invalid` sein, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er während der gesamten Fokusdauer sowohl mit `:invalid` als auch mit `:user-invalid` übereinstimmen. In ähnlicher Weise zu `:invalid`, wird er aufhören, `:user-invalid` zu sein, wenn der Wert gültig wird.

## Zusammenfassung

Damit schließen wir unseren Blick auf UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter damit herum und erstellen Sie einige unterhaltsame Formularstile! Als Nächstes werden wir zu etwas anderem übergehen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
