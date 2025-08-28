---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: a2b29d9159294f1437e0adf49cdf3019e9c1c24b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zur Gestaltung von Formularen in unterschiedlichen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich Grundwissen über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu gestalten sind und
        warum; und zu lernen, was man tun kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Sie kennen möglicherweise bereits die folgenden Pseudoklassen:

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es fokussiert ist (z. B. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (z. B. während es angeklickt wird oder wenn die <kbd>Return</kbd>- / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten einige weitere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher besprechen, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gemäß den auf sie gesetzten Validierungsbedingungen gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und schreibgeschützte oder schreibbare Formularelemente (z. B. Elemente mit dem gesetzten [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Ziel sind Kontrollkästchen und Optionsfelder, die jeweils ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) und die standardmäßig beim Laden der Seite ausgewählte Option sind (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit gesetztem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit gesetztem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgelegt, sehr spezifische Nischenprobleme zu lösen. Die oben aufgelisteten UI-Pseudoklassen werden von allen wichtigen Browsern hervorragend unterstützt. Natürlich sollten Sie jedoch Ihre Formulare sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Viele der hier besprochenen Pseudoklassen beziehen sich auf die Gestaltung von Formularelementen basierend auf ihrem Validierungsstatus (sind ihre Daten gültig oder nicht?). Sie erfahren mehr darüber, wie Sie Validierungsbeschränkungen setzen und steuern, in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber im Moment bleiben wir einfach bezüglich der Formularvalidierung, damit es nicht verwirrend wird.

## Eingaben gestalten, je nachdem, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bei der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein verfügbares `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich eingereicht wird. Zum Beispiel sind im folgenden Formular der Vorname und Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} verwenden. Beispiel: Wenn wir das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Eingaben haben einen festen Rahmen, und die optionale Eingabe hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular ohne das Ausfüllen zu übermitteln, um die Standard-Fehlermeldungen zur clientseitigen Validierung der Browser zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Generell sollten Sie vermeiden, 'erforderliche' gegenüber 'optionalen' Elementen in Formularen nur mithilfe von Farben zu gestalten, da dies für Farbenblinde nicht optimal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" neben den jeweiligen Elementen. Im nächsten Abschnitt sehen wir uns ein besseres Beispiel an, wie erforderliche Felder mit `:required` und generiertem Inhalt angezeigt werden.

> [!NOTE]
> Sie werden wahrscheinlich die `:optional`-Pseudoklasse nicht oft verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie Ihr optionales Styling einfach als Standard verwenden und Stile für erforderliche Elemente hinzufügen.

> [!NOTE]
> Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, sind alle Optionsfelder ungültig, bis eines ausgewählt ist, aber nur das mit dem zugewiesenen Attribut entspricht {{cssxref(':required')}}.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir fanden, dass jetzt ein guter Zeitpunkt wäre, um genauer darauf einzugehen.

Die Idee ist, dass wir das [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelement zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Inhaltsstück vor oder nach dem betroffenen Element erscheinen zu lassen. Der generierte Inhalt wird dem DOM nicht hinzugefügt, daher kann er für einige Screenreader unsichtbar sein. Da es ein Pseudoelement ist, kann es mit Stil im gleichen Stil wie jedes tatsächliche DOM-Element angesprochen werden.

Das ist wirklich nützlich, wenn Sie einem Element einen visuellen Indikator hinzufügen möchten, wie z. B. eine Beschriftung oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Optionsfelds zu handhaben, wenn ein Optionsfeld ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein von ihnen angetroffenes Optionsfeld oder Kontrollkästchen ausgewählt ist, sodass Sie nicht wollen, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Hinzufügen von generiertem Inhalt. Alle Eingabetypen, die darin dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel von erforderlichen/optionalen Eingaben, dieses Mal werden wir das Aussehen der Eingabe selbst nicht ändern — wir werden generierten Inhalt verwenden, um eine anzeigende Beschriftung hinzuzufügen.

Zuerst werden wir einen Absatz zum Anfang des Formulars hinzufügen, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als ein zusätzliches Stück Information erhalten, wenn sie zu jeder erforderlichen Eingabe kommen, während sehende Benutzer unsere Beschriftung sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt darauf aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Ein direktes Problem damit war, dass das `<span>` auf eine neue Zeile unter die Eingabe fiel, weil die Eingabe und das Etikett beide auf `width: 100%` gesetzt sind. Um dies zu beheben, legen wir das übergeordnete `<div>` so fest, dass es ein Flex-Container wird, es aber auch anwiesen, seinen Inhalt auf neuen Zeilen zu umwickeln, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` sind, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

Nun zum generierten Inhalt. Wir erstellen es mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein Kindknoten des Elements ist, auf dem er erstellt wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unsere Beschriftung sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

```html hidden live-sample___required-optional-generated
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

## Elemente basierend darauf gestalten, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten einer Formulareingabe gültig sind oder nicht (im Fall von numerischen Daten können wir auch von innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularelemente mit [Validierungseinschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Elemente ohne Constraint-Validierung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Elemente mit gesetztem `required`, die keinen Wert haben, werden als ungültig gezählt — sie stimmen mit `:invalid` und `:required` überein.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">` werden (mit) `:invalid` sein, wenn die Daten, die in sie eingegeben werden, nicht dem Muster entsprechen, nach dem sie suchen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, werden (mit) `:invalid` sein, aber auch mit {{cssxref(":out-of-range")}} übereinstimmen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element als `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber lassen Sie uns zunächst die Dinge einfach halten.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um auf ihnen generierten Inhalt zu erzeugen, den wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut verschiedenen generierten Inhalt, abhängig davon, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um der ungültigen Daten ein bisschen Dringlichkeit zu verleihen, haben wir auch den Eingaben einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Beschriftungen hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Beschriftungen verwendeten.

Sie können es unten ausprobieren (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___valid-invalid
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine korrekte E-Mail-Adresse ist.

### Daten innerhalb des Bereichs und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum gibt es dann beide? Das Problem ist wirklich eine Frage der Semantik — out-of-range ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Sie könnten sogar beide bereitstellen wollen.

Sehen wir uns ein Beispiel an, das genau dies tut und auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, zusätzlich zur Angabe, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie das, was wir zuvor im Beispiel `:required` hatten, außer dass wir hier die Deklarationen, die für allen `::after`-Inhalt gelten, in eine separate Regel unterteilt haben und den separaten `::after`-Inhalt für die Zustände `:required` und `:out-of-range` ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___out-of-range
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

```css hidden
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

```js hidden
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("out-of-range", "100%", 430, , , , , "allow-forms")}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs sein kann. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Regeln der Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel und die Message außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite das erste Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter (d.h. im Bereich von 12-120) eingegeben haben, wird die Eingabe gültig. Wenn Sie jedoch das Alter in einen außerhalb des Bereichs liegenden Wert ändern, wird die „Außerhalb des zulässigen Wertebereichs“ Nachricht anstelle von „Erforderlich“ angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular aktivieren und ihn mit der Tastatur eingeben. Die Spinner-Schaltflächen erlauben es nicht, den Wert außerhalb des zulässigen Bereichs zu inkrementieren/dekrementieren.

## Gestaltung von aktivierten und deaktivierten Eingaben sowie von schreibgeschützten und beschreibbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben etc. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben praktisch? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal übermitteln, wenn er das Formular absendet. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten genauso gut die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst ist das HTML ein einfaches Formular, das Texteingaben enthält, plus ein Kontrollkästchen, um das Deaktivieren der Rechnungsadresse zu aktivieren/deaktivieren. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textbeschriftungen ausgrauen. Da die Beschriftungen direkt vor ihren Eingaben sind, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Zuletzt haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadresfelder zu aktivieren/deaktivieren:

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

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer das Aktivieren/Deaktivieren der Rechnungsfelder zu ermöglichen und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel in Aktion unten sehen (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___enabled-disabled-shipping
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

```css live-sample___enabled-disabled-shipping
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
  color: #aaa;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___enabled-disabled-shipping
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

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("enabled-disabled-shipping", "100%", 580, , , , , "allow-forms")}}

### Read-only und read-write

In ähnlicher Weise zu `:disabled` und `:enabled` richten sich die Pseudoklassen `:read-only` und `:read-write` an zwei Zustände, zwischen denen Formulareingaben umgeschaltet werden. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden die schreibgeschützten Eingabewerte jedoch an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly`-Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer alles an einem Ort überprüft, alle erforderlichen endgültigen Daten hinzufügt und dann die Bestellung bestätigt, indem er diese einreicht. An diesem Punkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitbar ist, jedoch die Werte übermittelt werden, wenn das Formular übermittelt wird. Wir haben die Formulareingaben mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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

Das volle Beispiel sieht so aus (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___readonly-confirmation
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

```css hidden
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

```js hidden
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("readonly-confirmation", "100%", 660, , , , , "allow-forms")}}

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — ausgewählt, Standard, unbestimmt

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt werden. Es gibt jedoch noch ein paar andere zu berücksichtigende Zustände:

- {{cssxref(":default")}}: Entspricht Optionsfeldern/Kontrollkästchen, die standardmäßig beim ersten Laden der Seite ausgewählt sind (d.h. indem das Attribut `checked` auf sie gesetzt wird). Diese entsprechen der Pseudoklasse {{cssxref(":default")}}, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Optionsfelder/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, werden sie als _unbestimmt_ betrachtet und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Mehr dazu weiter unten.

### :checked

Wenn sie ausgewählt sind, werden sie von der Pseudoklasse {{cssxref(":checked")}} übereinstimmen.

Die häufigste Anwendung hiervon ist, um einen anderen Stil auf das Kontrollkästchen oder das Optionsfeld zu legen, wenn es ausgewählt ist, in Fällen, in denen Sie die standardmäßige Systemgestaltung mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und den Stil selbst wieder aufbauen möchten. Wir sahen Beispiele dazu im vorherigen Artikel, als wir über [die Verwendung von `appearance: none` bei Optionsfeldern/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Als Rekapitulierung sieht der `:checked`-Code aus unserem Beispiel für gestylte Optionsfelder folgendermaßen aus:

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

```css hidden
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

Grundsätzlich erstellen wir das Styling für den "inneren Kreis" eines Optionsfelds mithilfe des Pseudoelements `::before`, setzen aber einen `scale(0)`-[`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön in die Ansicht animieren zu lassen, wenn das Radio ausgewählt/angekreuzt ist. Der Vorteil der Verwendung eines Transformationsansatzes anstelle des Übergangs von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt aus einer Ecke des Kreises zu wachsen, und es gibt kein Springverhalten, da keine Box-Modell-Eigenschaften aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die Pseudoklasse {{cssxref(":default")}} Optionsfeldern/Kontrollkästchen, die standardmäßig beim ersten Laden der Seite überprüft sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, der den Benutzer daran erinnert, was die Standardoptionen (oder Anfangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben genannten Optionsfelder/Kontrollkästchen von der Pseudoklasse {{cssxref(":indeterminate")}} übereinstimmen, wenn sie in einem Zustand sind, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe abgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nichts, was Sie sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern zu sagen, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Beschriftungen von Optionsfeldern stilisieren, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zu dem mittleren Optionsfeldeingabefeld hinzugefügt, sodass es standardmäßig ausgewählt ist, wenn die Ladezeit startet. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie, dass wir hier den anschließenden Geschwisterkombinator (`~`) statt des Nächstgeschwisterkombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-default
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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

Für das `:indeterminate`-Beispiel haben wir kein ausgewähltes Optionsfeld — das ist wichtig — wenn es eines gäbe, gäbe es keinen unbestimmten Zustand zum Stilisieren. Wir stilisieren die unbestimmten Optionsfelder mit dem folgenden CSS:

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

Dies erstellt einen lustigen kleinen animierten Umriss auf den Optionsfeldern, was hoffentlich darauf hinweist, dass Sie eines von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Abspielen**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___radios-checked-indeterminate
<link
  href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
  rel="stylesheet" />
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
> Sie finden ein [interessantes Beispiel, das `indeterminate`-Zustände einbezieht](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um alle im Detail zu besprechen. Lassen Sie uns über einige sprechen, die Sie sich die Zeit nehmen sollten zu untersuchen.

- Die Pseudoklasse {{cssxref(":focus-within")}} entspricht einem Element, das den Fokus erhalten hat oder ein Element ist, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein eingabefeld darin den Fokus erhält.
- Die Pseudoklasse {{cssxref(":focus-visible")}} entspricht fokussierten Elementen, die den Fokus über eine Tastaturinteraktion erhalten haben (im Gegensatz zu Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus zeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} entspricht {{htmlelement('input')}}- und {{htmlelement('textarea')}}-Elementen, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bislang nicht gut in Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht ebenfalls Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, doch sie ist allgemeiner — sie entspricht auch anderen {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die Pseudoklasse [`:user-invalid`](/de/docs/Web/CSS/:user-invalid), wenn unterstützt, wird ähnlich wie {{cssxref(":invalid")}}, aber mit besserer Benutzererfahrung sein. Wenn der Wert gültig ist, wenn das Eingabe den Fokus erhält, könnte das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert temporär ungültig ist, aber es wird nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er für die gesamte Dauer des Fokus sowohl mit `:invalid` als auch `:user-invalid` übereinstimmen. In ähnlicher Weise wie `:invalid` wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit endet unser Blick auf die UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formularstile! Als Nächstes werden wir zu etwas anderem übergehen — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
