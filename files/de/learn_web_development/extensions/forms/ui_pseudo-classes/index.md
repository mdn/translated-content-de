---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularsteuerelemente auf allgemeine Weise behandelt. Dies beinhaltete die Verwendung einiger Pseudoklassen, zum Beispiel das Verwenden von `:checked`, um ein Kontrollkästchen nur dann zu markieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zum Stylen von Formularen in verschiedenen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
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
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Möglicherweise sind Ihnen bereits die folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. wenn es über die Tastatur angesteuert wird).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird, oder wenn die <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten einige nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Detail in den untenstehenden Abschnitten besprechen, aber kurz gesagt, die Hauptpunkte, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularsteuerelemente, die gemäß den festgelegten Validierungsbeschränkungen gültig/ungültig oder im Bereich/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert sein können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie Schreib- und Leseattribute (z. B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Respektive Ziel sind Checkboxen und Optionsfelder, die markiert sind, sich in einem unbestimmten Zustand befinden (weder markiert noch nicht markiert) und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige sind darauf ausgelegt, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularsteuerelementen basierend auf ihrem Validierungsstatus (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr darüber erfahren, wie Sie Validierungsbeschränkungen festlegen und steuern können, in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber jetzt werden wir die Formularvalidierung einfach halten, damit es nicht zu Verwirrung führt.

## Stileingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte im Zusammenhang mit der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, damit das Formular erfolgreich eingereicht werden kann.
Zum Beispiel sind der Vorname und der Nachname im untenstehenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mithilfe der Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Beispielsweise, wenn wir das folgende CSS auf das obige HTML anwenden:

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
Sie können auch versuchen, das Formular einzureichen, ohne es auszufüllen, um die standardmäßigen clientseitigen Validierungsfehlermeldungen Ihrer Browser zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, "erforderliche" gegenüber "optionalen" Elementen in Formularen nur mit Farbe zu stylen, da dies nicht ideal für Farbblinde ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web zur Kennzeichnung ist ein Asterisk (`*`) oder das Wort "erforderlich" in Zusammenhang mit den betreffenden Steuerelementen.
Im nächsten Abschnitt werden wir uns ein besseres Beispiel zur Kennzeichnung erforderlicher Felder mithilfe von `:required` und generierten Inhalten ansehen.

> [!NOTE]
> Sie werden wahrscheinlich feststellen, dass Sie die `:optional` Pseudoklasse nicht oft nutzen werden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig vornehmen könnten und zusätzliche Styles für erforderliche Steuerelemente hinzufügen.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das `required`-Attribut hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt ist, aber nur derjenige mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Generierte Inhaltselemente mit Pseudoklassen verwenden

In vorherigen Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, darüber ausführlicher zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft nutzen können, um ein Stück Inhalt zu erzeugen, der vor oder nach dem betroffenen Element erscheint. Der erzeugte Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader möglicherweise unsichtbar ist. Da es sich um ein Pseudoelement handelt, kann es mit Styles genauso behandelt werden wie ein tatsächlicher DOM-Knoten.

Dies ist besonders nützlich, wenn Sie einem Element, wie einem Label oder Icon, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren für alle Benutzer zugänglich sind. Beispielsweise können wir generierte Inhalte verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radio-Buttons zu steuern, wenn ein Radio-Button ausgewählt ist:

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

Dies ist besonders nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radio-Button oder Kontrollkästchen ausgewählt/markiert ist, also möchten Sie nicht, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Hinzufügen von generierten Inhalten. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, wie `range`, `color`, `checkbox`, usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen Beispiel der erforderlichen/optionalen Felder, diesmal werden wir das Erscheinungsbild des Inputs selbst nicht verändern — wir verwenden generierte Inhalte, um ein Label hinzuzufügen.

Zuerst fügen wir oben in das Formular einen Absatz hinzu, um zu sagen, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer erhalten "erforderlich" als zusätzliche Information, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, also fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt anzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass das span aufgrund des `width: 100%`-Styles der Eingabe und des Labels auf eine neue Zeile fiel. Um dies zu beheben, stylen wir das übergeordnete `<div>` als Flexcontainer und sagen ihm, seinen Inhalt auf neue Zeilen zu verschieben, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass sich das Label und die Eingabe auf separaten Zeilen befinden, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe stehen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können statt relativ zum `<body>` (Der generierte Inhalt verhält sich, als ob er ein Knoten innerhalb des Elements ist, auf dem er generiert wurde, zwecks Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir als unser Label sagen wollten, und stylen und positionieren es, wie wir möchten. Das Ergebnis ist unten zu sehen (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Stylen von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept im Bereich der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über Daten innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularelemente mithilfe der Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Überlegungen, die beachtet werden sollten:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` abgeglichen.
- Elemente mit `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` abgeglichen.
- Elemente mit eingebauter Validierung, z.B. `<input type="email">` oder `<input type="url">`, werden (mit) `:invalid` übereingestimmt, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, werden (mit) `:invalid` übereingestimmt, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt noch andere Möglichkeiten, ein Element mit `:valid`/`:invalid` übereinzustimmen, wie Sie im Artikel über die [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` betrachten.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`-Elemente, um Inhalte zu generieren, die wir verwenden werden, um Indikatoren für gültige oder ungültige Daten bereitzustellen:

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

Wie bereits beschrieben, setzen wir die `<span>` auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedlichen generierten Inhalt, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein wenig Dringlichkeit für die ungültigen Daten zu erzeugen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt sind. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

### Daten im und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit `:invalid` übereinstimmen. Warum haben wir dann beide? Das Problem ist wirklich eines der Semantik — "out-of-range" ist eine spezifischere Art der Invalid-Kommunikation, sodass Sie unter Umständen eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die hilfreicher für Benutzer ist als nur "ungültig" zu sagen. Sie könnten sogar beides bereitstellen.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut und auf dem vorherigen Beispiel aufbaut, um Nachrichten außerhalb des Bereichs für numerische Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie wir sie vorher im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf allen `::after`-Inhalt angewendet werden, in eine separate Regel unterteilt haben und dem separaten `::after`-Inhalt für `:required` und `:out-of-range` ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, greifen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade), und die Nachricht außerhalb des Bereichs wird angezeigt.

Das funktioniert ganz gut — wenn die Seite erstmals geladen wird, wird "Erforderlich" zusammen mit einem roten Kreuz und Rand angezeigt. Wenn Sie jedoch ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie hingegen die Altersangabe in eine ändern, die außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und ihn mit der Tastatur eingeben. Die Spinner-Buttons lassen Sie den Wert außerhalb des zulässigen Bereichs nicht erhöhen/verringern.

## Styling aktivierter und deaktivierter Eingaben sowie Schreib- und Leseattribute

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, in es kann getippt werden usw. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} abgestimmt werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn bestimmte Daten für einen bestimmten Benutzer nicht gelten, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular einreichen. Ein klassisches Beispiel ist ein Versandformular — oft wird gefragt, ob dieselbe Adresse für Rechnungsstellung und Versand verwendet werden soll; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten genauso gut die Rechnungsadressfelder deaktivieren.

Lassen Sie uns ein Beispiel anschauen, das genau dies tut. Zunächst einmal ist das HTML ein einfaches Formular mit Texteingaben und einem Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind die folgenden:

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textlabels ausgrauen. Da sich die Labels direkt vor ihren Eingaben befinden, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich verwenden wir etwas JavaScript, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

```js
// Attach `change` event listener to checkbox
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);

function toggleBilling() {
  // Select the billing text fields
  const billingItems = document.querySelectorAll('#billing input[type="text"]');

  // Toggle the billing text fields
  for (const item of billingItems) {
    item.disabled = !item.disabled;
  }
}
```

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungungsfelder zu aktivieren/deaktivieren, und die Gestaltung der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
  color: #aaaaaa;
}

button {
  width: 60%;
  margin: 0 auto;
}
```

```js hidden live-sample___enabled-disabled-shipping
// Attach `change` event listener to checkbox
document
  .getElementById("billing-checkbox")
  .addEventListener("change", toggleBilling);

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

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` adressieren die Pseudoklassen `:read-only` und `:read-write` zwei Zustände, zwischen denen Formulareingaben wechseln können. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Allerdings werden im Gegensatz zu deaktivierten Eingaben schreibgeschützte Eingabewerte beim Einreichen an den Server übermittelt. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Ein Eingabefeld wird mit dem `readonly`-Attribut auf schreibgeschützt gesetzt. Ein Beispiel: Stellen Sie sich eine Bestätigungsseite vor, auf der der Entwickler die auf den vorherigen Seiten ausgefüllten Daten an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie an einem Ort überprüft, alle notwendigen letzten Daten hinzufügt und dann die Bestellung durch Einreichen bestätigt. An diesem Punkt können alle endgültigen Formulardaten in einem Durchgang an den Server gesendet werden.

Sehen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Gruppe von Formularelementen nicht bearbeitet werden kann, jedoch werden die Werte beim Einreichen des Formulars übermittelt. Wir haben die Formulareingaben mit den Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

Das vollständige Beispiel sieht so aus (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabefeldern beschreiben.

## Radio- und Kontrollkästchenzustände — geprüft, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} überprüft oder nicht überprüft sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Kombiniert Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite markiert sind (d.h. indem das `checked`-Attribut auf sie gesetzt wird). Diese stimmen dann mit der {{cssxref(":default")}}-Pseudoklasse überein, auch wenn der Benutzer sie entfernt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder überprüft noch nicht überprüft sind, gelten sie als _unbestimmt_ und stimmen mit der {{cssxref(":indeterminate")}}-Pseudoklasse überein. Mehr dazu später.

### :checked

Wenn sie überprüft sind, werden sie mit der {{cssxref(":checked")}}-Pseudoklasse abgestimmt.

Der häufigste Anwendungsfall hierfür ist es, einen anderen Stil auf das Kontrollkästchen oder den Radio-Button anzuwenden, wenn es überprüft ist, in Fällen, in denen Sie das Standardsystemstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst neu aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` bei Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Rückblick sieht der `:checked`-Code aus unserem Beispiel der gestylten Radio-Buttons folgendermaßen aus:

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

Sie können es hier ausprobieren (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radio-Buttons mithilfe des `::before`-Pseudoelements auf, setzen jedoch eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label sanft in das Sichtfeld zu animieren, wenn das Radio ausgewählt/aktiviert ist. Der Vorteil der Verwendung einer Transformation anstelle der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie den [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um ihn vom Zentrum des Kreises wachsen zu lassen, anstatt von der Ecke des Kreises, und es gibt kein Sprungverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}}-Pseudoklasse mit Radios/Kontrollkästchen überein, die standardmäßig beim Laden der Seite überprüft sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben genannten Radios/Kontrollkästchen werden als _unbestimmt_ betrachtet, wenn sie in einem Zustand sind, in dem sie weder überprüft noch nicht überprüft sind, und mit der {{cssxref(":indeterminate")}}-Pseudoklasse übereinstimmen. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe nicht überprüft sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Dies ist wahrscheinlich nicht etwas, das Sie sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern sagt, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, welche Option die Standardoption war, und die Labels von Radio-Buttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zum mittleren Radio-Button-Input hinzugefügt, sodass er standardmäßig beim Laden ausgewählt wird. Wir stylen dies mit folgendem CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Subsequent-Sibling-Kombinator (`~`) anstelle des Next-Sibling-Kombinators (`+`) verwenden — wir müssen das tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand, den man stylen kann. Wir stylen die unbestimmten Radio-Buttons mit folgendem CSS:

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

Dies erzeugt eine kleine animierte Umrandung auf den Radio-Buttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel zu `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite zu [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe von weiteren interessanten Pseudoklassen, und wir haben nicht den Platz, um sie alle im Detail zu erläutern. Lassen Sie uns über einige weitere sprechen, denen Sie Aufmerksamkeit schenken sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular in irgendeiner Weise hervorgehoben wird, wenn ein darin befindliches Steuerelement fokussiert wird.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus per Tastaturinteraktion (anstelle von Touch oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zum Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen überein, bei denen der Platzhalter angezeigt wird (d.h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist genereller — es passt auch auf andere {{Glossary("void_element", "leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die `:blank`-Pseudoklasse wird noch spezifiziert und ist noch in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse wird, wenn sie unterstützt wird, ähnlich {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, aber es wird nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, stimmt es sowohl mit `:invalid` als auch mit `:user-invalid` überein, während des gesamten Fokus. In ähnlicher Weise wie `:invalid` wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert tatsächlich gültig wird.

## Zusammenfassung

Damit ist unser Blick auf UI-Pseudoklassen abgeschlossen, die mit Formulareingaben zusammenhängen. Spielen Sie weiter mit ihnen und kreieren Sie einige unterhaltsame Formulare! Als Nächstes werden wir uns einem anderen Thema zuwenden — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
