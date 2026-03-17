---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 76936e1d9ff271ac59307a0f858d0d7b57f3866a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularelemente auf allgemeine Weise behandelt. Dies beinhaltete die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu selektieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zur Gestaltung von Formularen in unterschiedlichen Zuständen.

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
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen haben wir zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Selektiert ein Element nur, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Selektiert ein Element nur, wenn es fokussiert ist (d.h. wenn es z.B. über die Tastatur angesteuert wird).
- {{cssxref(":active")}}: Selektiert ein Element nur, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt gehalten wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere weitere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten verschiedene nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese später im Text ausführlicher besprechen, aber kurz gesagt, die wichtigsten davon sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen)), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gemäß ihren Formularvalidierungsbeschränkungen gültig/ungültig sind oder im Bereich/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel ist die Elemente, die deaktiviert sein können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und schreibgeschützte oder schreibbare Formularelemente (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Ziel sind Kontrollkästchen und Optionsfelder, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) und als Standardoption beim Laden der Seite gesetzt sind (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgeführten sind am offensichtlichsten nützlich. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungszustand (ist ihre Eingabe gültig oder nicht?). Sie werden in unserem nächsten Artikel viel mehr über das Setzen und Kontrollieren von Validierungsbeschränkungen lernen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für jetzt halten wir die Dinge einfach bezüglich der Formularvalidierung, damit es nicht verwirrt.

## Eingaben basierend darauf gestalten, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der Client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein verfügbares `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich gesendet wird. Zum Beispiel sind im folgenden Formular der Vorname und Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rand, und das optionale Steuerelement hat einen gestrichelten Rand. Sie können auch versuchen, das Formular zu senden, ohne es auszufüllen, um die client-seitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' gegenüber 'optionalen' Elementen in Formularen nur mit Farbe zu gestalten, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web zur Angabe des Erfordernisses ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den jeweiligen Steuerelementen verknüpft ist. Im nächsten Abschnitt schauen wir uns ein besseres Beispiel an, wie erforderliche Felder unter Verwendung von `:required` und generiertem Inhalt angezeigt werden können.

> [!NOTE]
> Sie werden die `:optional`-Pseudoklasse wahrscheinlich nicht oft verwenden. Formularsteuerelemente sind standardmäßig optional, sodass Sie Ihre optionale Gestaltung einfach standardmäßig vornehmen können und für erforderliche Steuerelemente zusätzliche Stile hinzufügen.

> [!NOTE]
> Wenn ein einzelnes Kontrollkästchen in einer gleichnamigen Gruppe von Kontrollkästchen das `required`-Attribut gesetzt hat, sind alle Kontrollkästchen ungültig, bis eines ausgewählt ist, aber nur das, dem das Attribut zugewiesen ist, wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir den Einsatz von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um etwas ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente zusammen mit der {{cssxref("content")}} Eigenschaft verwenden können, um einen Inhaltsblock vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsblock wird nicht dem DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es auf die gleiche Weise wie jeder tatsächliche DOM-Knoten mit Stilen versehen werden.

Dies ist wirklich nützlich, wenn Sie einem Element einen visuellen Indikator hinzufügen möchten, wie beispielsweise ein Etikett oder Symbol, während alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Beispielsweise können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Auswahlknopfes zu steuern, wenn ein Auswahlknopf aktiviert wird:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wann ein von ihnen gefundenes Kontrollkästchen oder Auswahlknopf aktiviert/ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Einen rein visuellen Indikator zu haben, löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Platzieren von generiertem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text in sich anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel von erforderlichen/optional Elementen von zuvor, diesmal ändern wir nicht das Erscheinungsbild der Eingabe selbst — wir verwenden generierten Inhalt, um ein anzeigendes Etikett hinzuzufügen.

Zuerst fügen wir einen Absatz an die Spitze des Formulars hinzu, der das angibt, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Screenreadern bekommen beim Erreichen eines erforderlichen Eingabefelds "erforderlich" vorgelesen, während sehfähige Benutzer unser Etikett sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran zu befestigen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass der `span` in eine neue Zeile unterhalb der Eingabe gerutscht ist, weil sowohl die Eingabe als auch das Etikett auf `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` zu einem Flex-Container um, sagen ihm jedoch, dass er seinen Inhalt auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung dessen ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf die gleiche Zeile wie die Eingabe passen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was es sagen soll. Wir gestalten und positionieren es nach unseren Wünschen. Das Ergebnis ist unten zu sehen (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Gestaltung von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten einer Formulareingabe gültig sind oder nicht (bei numerischen Daten können wir auch von in-Bereich und außerhalb-Bereich sprechen). Formularelemente mit [Einschränkungen bei der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} gezielt ansprechen. Einige Punkte, die zu beachten sind:

- Steuerelemente ohne Einschränkungen bei der Validierung sind immer gültig und daher mit `:valid` abgeglichen.
- Steuerelemente mit `required`, die keinen Wert haben, werden als ungültig angesehen — sie werden mit `:invalid` und `:required` abgeglichen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, werden mit `:invalid` abgeglichen, wenn die in sie eingegebenen Daten nicht dem von ihnen gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute festgelegten Bereichsgrenzen liegt, werden mit `:invalid` abgeglichen, aber auch durch {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` abgleichen zu lassen, wie Sie im [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)-Artikel sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um darauf Inhalte zu generieren, die als Indikatoren für gültige oder ungültige Daten dienen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut unterschiedliche generierte Inhalte, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um den ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Etiketten verwendet haben.

Sie können es unten ausprobieren (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn etwas eingetragen wird. Das E-Mail-Eingabefeld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn etwas enthalten ist, das keine richtige E-Mail-Adresse ist.

### In-Bereich und Außerhalb-Bereich Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese beziehen sich auf numerische Eingaben, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist wert zu erwähnen, dass Eingaben, deren Daten im Bereich liegen, auch durch die `:valid`-Pseudoklasse abgeglichen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die `:invalid`-Pseudoklasse. Warum also beide haben? Die Frage ist eigentlich eine semantische — außerhalb des Bereiches ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen möchten, die hilfreicher für die Benutzer ist, als einfach nur "ungültig" zu sagen. Sie möchten möglicherweise sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut und auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, und auch angibt, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required` Beispiel, außer dass wir hier die Deklarationen, die für irgendwelche `::after`-Inhalte gelten, in eine separate Regel ausgelagert haben, und die separaten `::after`-Inhalte für die Zustände `:required` und `:out-of-range` ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) zum Einsatz, und die Nachricht außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zum ersten Mal lädt, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingetippt haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Altersfeld entsprechend ändern, sodass es außerhalb des Bereichs liegt, dann blinkt die Meldung "Außerhalb des zulässigen Wertebereichs" auf, anstatt "Erforderlich".

> [!NOTE]
> Um einen ungültigen/Außer-Bereich-Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eintippen. Die Spin-Schaltflächen lassen Sie den Wert außerhalb des zulässigen Bereichs nicht inkrementieren/dekrementieren.

## Gestaltung von aktivierten und deaktivierten Eingaben sowie schreibgeschützten und schreibbaren Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt oder beschrieben werden. Ein deaktiviertes Element hingegen kann auf keine Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gezielt werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular senden. Ein klassisches Beispiel ist ein Versandformular — normalerweise werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten genauso gut die Rechnungsadressenfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zunächst ist das HTML ein einfaches Formular mit Texteingaben, plus einem Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die deaktiviert werden sollen, direkt mit `input[type="text"]:disabled` angezielt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Nun haben wir endlich ein JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder ein-/auszuschalten und die Gestaltung der zugehörigen Etiketten umzuschalten.

Sie können das Beispiel unten in Aktion sehen (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Ähnlich wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten können. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mithilfe des `readonly`-Attributs auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite übermittelt hat, mit dem Ziel, dass der Benutzer sie an einem Ort überprüft, eventuelle abschließende Daten hinzufügt und dann die Bestellung durch Senden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTMLs lautet wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, sehen Sie, dass die oberste Reihe von Formularelementen nicht bearbeitbar ist, jedoch werden die Werte beim Senden des Formulars übermittelt. Wir haben die Formularkontrollen mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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

Das vollständige Beispiel sieht wie folgt aus (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Zustände von Radios und Checkboxen — ausgewählt, Standard, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Es gibt jedoch noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Passt auf Options-/Kontrollkästchen, die standardmäßig beim Laden der Seite ausgewählt sind (d.h. indem man das `checked`-Attribut auf ihnen setzt). Diese passen zur {{cssxref(":default")}} Pseudoklasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Options-/Kontrollkästchen weder aus- noch abgewählt sind, werden sie als _unbestimmt_ betrachtet und passen zur {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu im Folgenden.

### :checked

Wenn ausgewählt, werden sie mit der {{cssxref(":checked")}} Pseudoklasse abgeglichen.

Die häufigste Verwendung davon ist, einen anderen Stil auf das Kontrollkästchen oder das Optionsfeld hinzuzufügen, wenn es geprüft ist, in Fällen, in denen Sie das Standardsystem-Design mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Stile selbst aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Gestaltung von Kontrollkästchen und Optionsfeldern mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Als Zusammenfassung sieht der `:checked`-Code aus unserem Beispiel für gestaltete Radiobuttons so aus:

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

Sie können es hier ausprobieren (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Optionsfelds mit dem `::before` Pseudoelement auf, setzen jedoch ein `scale(0)` {{cssxref("transform")}} darauf. Dann verwenden wir einen {{cssxref("transition")}}, um den generierten Inhalt auf dem Label schön in den Vordergrund zu animieren, wenn das Radio ausgewählt/geprüft ist. Der Vorteil der Verwendung eines Transforms anstelle eines Übergangs von {{cssxref("width")}}/{{cssxref("height")}} besteht darin, dass Sie {{cssxref("transform-origin")}} verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt es aus einer Ecke des Kreises wachsen zu lassen, und es gibt kein Springen, da keine Box-Modell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}} Pseudoklasse zu Options-/Kontrollkästchen, die standardmäßig beim Laden der Seite ausgewählt sind, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standard- (oder Start-)Optionen waren, falls sie ihre Auswahl zurücksetzen möchten.

Außerdem werden die oben genannten Options-/Kontrollkästchen durch die {{cssxref(":indeterminate")}} Pseudoklasse abgeglichen, wenn sie sich in einem Zustand befinden, in dem sie weder aus- noch abgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, sind:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle in einer gleichnamigen Gruppe nicht ausgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft durch JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nichts, was Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern mitteilt, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar abgeänderte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Optionsfelder im unbestimmten Zustand gestalten. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf das mittlere Radio-Button-Element hinzugefügt, sodass es standardmäßig beim Laden ausgewählt wird. Wir haben dies dann mit dem folgenden CSS gestaltet:

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

Dies bietet ein kleines "Standard"-Etikett auf dem Element, das ursprünglich beim Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` im Quellcode kommt.

Sehen Sie das Live-Ergebnis unten (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — dies ist wichtig — wenn es eines gäbe, gäbe es keinen unbestimmten Zustand, der gestaltet werden könnte. Wir haben die unbestimmten Optionsfelder mit dem folgenden CSS gestaltet:

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

Dies erzeugt ein lustiges kleines animiertes Outline auf den Optionsfeldern, das hoffentlich darauf hinweist, dass Sie eines davon auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie den **Abspielen**-Knopf, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie finden ein [interessantes Beispiel, das `indeterminate`-Zustände einbezieht](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen, und wir haben hier nicht genug Platz, um sie alle im Detail zu behandeln. Lassen Sie uns über ein paar andere sprechen, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse passt zu einem Element, das den Fokus erhalten hat oder _enthält_ ein Element, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse passt zu fokussierten Elementen, die über eine Tastaturinteraktion den Fokus erhalten haben (anstatt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Mausfokus (oder anderen) anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse passt zu {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, deren Platzhalter angezeigt wird (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt ebenfalls zu Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es passt auch zu anderen {{Glossary("void_element", "Leerelementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht fertiggestellt, sodass sie in keinem Browser unterstützt wird.
- Die {{cssxref(":user-invalid")}} Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, aber mit einer besseren Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element während der Benutzer die Daten eingibt, wenn der Wert vorübergehend ungültig ist, möglicherweise `:invalid` entsprechen, wird jedoch nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, entspricht er sowohl `:invalid` als auch `:user-invalid` für die gesamte Dauer des Fokus. In ähnlicher Weise wie `:invalid` wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Zusammenfassung

Damit ist unser Blick auf UI-Pseudoklassen, die sich auf Formulareingänge beziehen, abgeschlossen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formularstile! Als nächstes gehen wir zu etwas anderem über — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
