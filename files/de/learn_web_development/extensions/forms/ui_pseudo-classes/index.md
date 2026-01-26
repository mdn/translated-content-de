---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir besprochen, wie verschiedene Formularelemente allgemein gestaltet werden können. Dies beinhaltete auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu stylen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die zum Stylen von Formularen in verschiedenen Zuständen verfügbar sind.

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
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Sie kennen möglicherweise bereits die folgenden Pseudoklassen:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es den Fokus hat (z.B. durch Tab-Taste über die Tastatur erreicht).
- {{cssxref(":active")}}: wählt ein Element nur aus, wenn es aktiviert wird (z.B. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste im Fall einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielkriterien, die Sie nutzen können. Wir werden diese im Folgenden näher besprechen, aber kurz gesagt, die wichtigsten, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielelemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen) basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}} sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziele Formularelemente, die gültig/ungültig gemäß den auf sie angewendeten Validierungseinschränkungen sind oder in-/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}} sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielgerichtete Elemente, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie schreibgeschützte oder lese/schreibbare Formularelemente (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Ziele, je nachdem, ob Kontrollkästchen und Optionsfelder aktiviert, in einem unbestimmten Zustand (weder aktiviert noch deaktiviert) sind und die standardmäßig ausgewählte Option beim Laden der Seite (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribute oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribute).

Es gibt noch viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgelegt, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen bieten eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungsstatus (sind ihre Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Steuern von Validierungseinschränkungen in unserem nächsten Artikel erfahren — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst werden wir die Formularvalidierung einfach halten, damit es nicht verwirrend wird.

## Eingaben stylen basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte in der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente verfügen über ein `required` Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich gesendet wird.
Zum Beispiel sind Vorname und Nachname im folgenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mithilfe der {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Felder haben einen festen Rahmen und das optionale Feld hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen clientseitigen Validierungsfehlermeldungen der Browser zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, erforderlich gegenüber optional Elemente in Formularen nur mit Farbe zu stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für die erforderlichen Felder ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den jeweiligen Feldern in Verbindung steht.
Im nächsten Abschnitt werden wir uns ein besseres Beispiel ansehen, um erforderliche Felder mit `:required` und generiertem Inhalt zu kennzeichnen.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie einfach Ihr optionales Styling standardmäßig anwenden und für erforderliche Felder zusätzliche Stile hinzufügen.

> [!NOTE]
> Wenn ein Radiobutton in einer Gruppe von Radiobuttons mit demselben Namen das `required` Attribut gesetzt hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur der mit dem Attribut passt tatsächlich zu {{cssxref(':required')}}.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir bereits die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um es etwas detaillierter zu besprechen.

Die Idee ist, dass wir die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente zusammen mit der {{cssxref("content")}} Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, daher kann er für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es auf dieselbe Weise mit Styles versehen werden wie jedes tatsächliche DOM-Element.

Das ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie zum Beispiel ein Etikett oder Symbol, wenn alternative Indikatoren verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Beispielsweise können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radiobutton oder ein Kontrollkästchen, auf das sie stoßen, aktiviert / ausgewählt ist, daher möchten Sie nicht, dass sie ein weiteres DOM-Element lesen, das eine Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen generierten Inhalt. Alle Eingabetypen, die dynamischen Text enthalten, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw. zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel mit erforderlichen / optionalen Feldern. Dieses Mal werden wir das Aussehen der Eingabe selbst nicht verändern — wir werden generierten Inhalt verwenden, um ein Etikett hinzuzufügen.

Zuerst fügen wir einen Absatz an die Oberseite des Formulars hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Screenreadern hören "erforderlich", vorgelesen als zusätzliche Information, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett erhalten.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das Span auf eine neue Linie unter der Eingabe fiel, weil die Eingabe und das Etikett beide auf `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` als Flex-Container, der seine Inhalte auch auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Auswirkung davon ist, dass das Etikett und die Eingabe auf separaten Linien sitzen, weil beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können anstatt zum `<body>` (der generierte Inhalt verhält sich für die Positionierung so, als wäre er ein Knoten des Elements, auf dem er generiert wurde).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Etikett aussagt, und gestylen und positionieren es nach unseren Wünschen. Das Ergebnis sieht folgendermaßen aus (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Steuerelemente basierend darauf stylen, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch von inner- und außerhalbranging sprechen). Formularelemente mit [Einschränkungen durch Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} gezielt ansprechen. Einige Punkte, die Sie beachten sollten:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und somit unter `:valid` abgängig.
- Elemente mit gesetztem `required` ohne Wert werden als ungültig angesehen — sie werden sowohl unter `:invalid` als auch `:required` erfasst.
- Elemente mit eingebauter Validierung wie `<input type="email">` oder `<input type="url">` sind mit `:invalid` abgeglichen, wenn die eingegebenen Daten nicht dem erwarteten Muster entsprechen (aber sie sind gültig, wenn leer).
- Elemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegebenen Bereichsgrenzen liegt, sind `:invalid`, aber auch durch {{cssxref(":out-of-range")}} abgedeckt, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element durch `:valid`/`:invalid` zu erzielen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt zu erzeugen, den wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ dazu positionieren können. Dann positionieren wir den unterschiedlichen generierten Inhalt absolut, je nachdem ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein wenig zusätzlichen Nachdruck bei ungültigen Daten zu leisten, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich" Labels verwendet haben.

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt sind. Die Eingabeseite für die E-Mail-Adresse hingegen ist gültig, wenn leer, da sie nicht erforderlich ist, jedoch ungültig, wenn sie einzugeben ohne gültige E-Mail-Adresse ist.

### Inner- und Außerranging-Daten

Wie oben angedeutet, gibt es zwei andere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese entsprechen numerischen Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) spezifiziert sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs sind, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist bemerkenswert, dass Eingaben mit Daten im gültigen Bereich auch durch die Pseudoklasse `:valid` abgedeckt werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die Pseudoklasse `:invalid` abgedeckt werden. Warum also beide haben? Es ist vielmehr eine Frage der Semantik — das Preisgeben von "außerhalb des gültigen Bereichs" ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie möglicherweise eine andere Nachricht für aus dem Bereich liegende Eingaben bereitstellen, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Möglicherweise möchten Sie sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau das tut: Aufbauend auf dem vorherigen Beispiel, um Nachrichten außerhalb des Bereichs für numerische Eingaben bereitzustellen, zusätzlich zur Angabe, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie die, die wir zuvor im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die für jeden `::after`-Inhalt gelten, in einer separaten Regel aufgeteilt haben und den separaten `::after`-Inhalt für die `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und eigenen Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahlen-Eingabe sowohl erforderlich als auch außerhalb des Bereichs zur selben Zeit ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode als die `:required` Regel erscheint, greifen die [Cascade-Regeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade), und die Meldung außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter ändern und einen außerhalb des Bereichs liegenden Eintrag eingeben, erscheint die Meldung "Außerhalb des erlaubten Wertes" an Stelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es über die Tastatur eingeben. Die Spinner-Tasten lassen Sie die Werte innerhalb der erlaubten Bereichsgrenzen nicht erhöhen/verringern.

## Eingaben basierend darauf stylen, ob sie aktiviert oder deaktiviert sind, und ob sie schreibgeschützt oder schreibbar sind

Ein aktiviertes Element ist eines, das aktiviert werden kann; Es kann ausgewählt, angeklickt, beschrieben werden, usw. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese zwei Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} anvisiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht gelten, möchten Sie möglicherweise diese Daten nicht einmal senden, wenn das Formular gesendet wird. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für die Rechnungs- und Lieferadresse verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und können genauso gut die Rechnungsadresse-Felder deaktivieren.

Werfen wir einen Blick auf ein Beispiel, das dies genau tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, plus ein Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein-/auszuschalten. Die Rechnungsadresse-Felder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadresse-Felder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder ein-/auszuschalten und das Styling der zugehörigen Labels umzustellen.

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

### Schreibgeschützt und schreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten. Genau wie bei deaktivierten Eingaben können die Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Daten an diese Seite gesendet hat, mit dem Ziel, den Benutzer dazu zu bringen, sie an einem Ort zu überprüfen, eventuell nötige Daten hinzuzufügen und dann die Bestellung zu bestätigen, indem er sendet. An diesem Punkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus - beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, können Sie sehen, dass die obere Datensatz von Formularelementen nicht bearbeitet werden kann, jedoch werden die Werte eingereicht, wenn das Formular gesendet wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` formatiert, wie folgt:

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabefeldern beschreiben.

## Radio- und Checkbox-Zustände — geprüft, Standard, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt auch ein paar andere Zustände:

- {{cssxref(":default")}}: Entspricht Radios/Checkboxen, die standardmäßig beim Laden der Seite ausgewählt sind (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}} Pseudo-Klasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Checkboxen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}} Pseudo-Klasse. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie durch die {{cssxref(":checked")}} Pseudoklasse abgedeckt.

Die häufigste Verwendung hierfür ist, dem Formular einen anderen Stil hinzuzufügen, wenn das Kontrollkästchen oder der Radiobutton bei Fällen aktiviert ist, bei denen Sie das systemseitige Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und das Styling selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Styling von Kontrollkästchen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Zur Wiederholung: Der `:checked`-Code aus unserem gestylten Radiobuttons-Beispiel sieht so aus:

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

Im Wesentlichen erstellen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem `::before` Pseudoelement, setzen aber einen `scale(0)` {{cssxref("transform")}} darauf. Wir verwenden dann eine {{cssxref("transition")}}, damit sich der generierte Inhalt am Label schön animiert, wenn das Radio ausgewählt / aktiviert wird. Der Vorteil der Verwendung eines Transforms anstelle eines Übergangs von {{cssxref("width")}}/{{cssxref("height")}} ist, dass Sie {{cssxref("transform-origin")}} verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt vom Rand des Kreises zu wachsen, und es gibt kein springendes Verhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudoklasse Radios/Checkboxen, die standardmäßig bei Seite geladen sind, auch wenn deaktiviert. Dies könnte nützlich sein, um einen Indikator in einer Liste von Optionen hinzuzufügen, um dem Benutzer daran zu erinnern, was die Standardeinstellungen (oder Ausgangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Auch die oben erwähnten Radios/Checkboxen entsprechen der {{cssxref(":indeterminate")}} Pseudo-Klasse, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Inputs, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht aktiviert sind
- {{HTMLElement("input/checkbox")}} Inputs, deren `indeterminate` Property über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, was Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern zu zeigen, dass sie wirklich ein Radiobutton auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, das den Benutzer daran erinnert, welche die Standardoption war, und die Labels von Radiobuttons stylt, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked`-Attribut auf den Mittelwert gesetzt, sodass er beim Laden standardmäßig ausgewählt wird. Wir stylen dies dann mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwister-Kombinator (`~`) anstelle des nächsten Geschwister-Kombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

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

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — dies ist wichtig — wenn es einen gegeben hätte, gäbe es keinen unbestimmten Zustand zum Stylen. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erzeugt eine unterhaltsame kleine animierte Umrandung auf den Radiobuttons, die hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie finden ein [interessantes Beispiel für unbestimmte Zustände](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt noch eine Reihe weiterer interessanter Pseudoklassen, und wir haben hier nicht genug Platz, um alle im Detail zu besprechen. Lassen Sie uns über einige weitere sprechen, denen Sie Zeit zum Recherchieren widmen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten haben. Dies ist nützlich, wenn Sie möchten, dass in irgendeiner Weise ein ganzes Formular hervorgehoben wird, wenn ein in ihm enthaltenes Eingabeelement fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse entspricht fokussierten Elementen, die über eine Tastaturinteraktion (anstatt durch Berührung) Fokus erhielten — nützlich, wenn Sie für eine Tastaturinteraktion zusätzlich zu einer Maus (oder anderen) Interaktion eine andere Stilprobe zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, deren Platzhalter angezeigt wird (d.h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributes), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente. {{cssxref(":empty")}} stimmt ebenfalls mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, es ist jedoch allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine angemessene Browser-Unterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht abgeschlossen, sodass es in keinem Browser noch unterstützt wird.
- Die {{cssxref(":user-invalid")}} Pseudoklasse wird unterstützt, ähnlich wie {{cssxref(":invalid")}}, mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element mit `:invalid` als Benutzer unter Umständen kurz ungültige Werte eingeben, aber es wird nur mit `:user-invalid` erfasst, wenn das Element den Fokus verlässt. Wenn der Wert ursprünglich ungültig war, wird es für die gesamte Dauer des Fokus mit sowohl `:invalid` als auch `:user-invalid` erfasst. In ähnlicher Weise wie `:invalid`, wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit abschließen wir unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen, und kreieren Sie einige unterhaltsame Formstile! Als nächstes gehen wir zu etwas anderem über — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
