---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 6b0f6277e18b411e86207c873473449a2ccb5603
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dies umfasste auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die zur Gestaltung von Formularen in verschiedenen Zuständen zur Verfügung stehen.

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
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen haben wir zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z.B. durch das Navigieren mit der Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es gerade aktiviert wird (z.B. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastatureingabe gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielkonditionen, die Sie nutzen können. Wir werden diese im Detail in den folgenden Abschnitten besprechen, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularelemente ab, die gemäß den auf ihnen festgelegten Validierungsbeschränkungen gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und auf lesbare oder schreibbare Formularelemente (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielkontrollkästchen und Optionsfelder, die angekreuzt sind, in einem unbestimmten Zustand (weder angekreuzt noch nicht angekreuzt) und die standardmäßig ausgewählte Option beim Laden der Seite (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben genannten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen beziehen sich auf die Gestaltung von Formularelementen basierend auf ihrem Validierungsstatus (ist ihre Daten gültig oder nicht?). Sie lernen in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — viel mehr darüber, Validierungsbeschränkungen festzulegen und zu steuern, aber vorerst halten wir die Dinge bezüglich der Formularvalidierung einfach, um Verwirrungen zu vermeiden.

## Eingaben basierend darauf gestalten, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte in Bezug auf die clientseitige Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, welches, wenn es gesetzt ist, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind der Vorname und der Nachname im unten stehenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgezogenen Rand, und das optionale Steuerelement hat einen gestrichelten Rand. Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Generell sollten Sie vermeiden, 'erforderliche' und 'optionale' Elemente in Formularen ausschließlich durch Farbe zu kennzeichnen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den jeweiligen Steuerelementen. Im folgenden Abschnitt werden wir ein besseres Beispiel für die Kennzeichnung erforderlicher Felder mit `:required` und generiertem Inhalt betrachten.

> [!NOTE]
> Sie werden die `:optional`-Pseudoklasse wahrscheinlich nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling einfach standardmäßig anwenden und für erforderliche Steuerelemente zusätzliche Stile hinzufügen können.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichbenannten Gruppe von Radiobuttons das `required`-Attribut gesetzt hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem zugewiesenen Attribut wird tatsächlich {{cssxref(':required')}} entsprechen.

## Generierten Inhalt mit Pseudoklassen verwenden

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um etwas mehr darüber zu sprechen.

Die Idee ist, dass wir die Pseudo-Elemente {{cssxref("::before")}} und {{cssxref("::after")}} zusammen mit der {{cssxref("content")}}-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, weshalb er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudo-Element handelt, kann es auf die gleiche Weise wie jeder tatsächliche DOM-Knoten mit Stilen gezielt werden.

Dies ist sehr nützlich, wenn Sie einem Element einen visuellen Indikator, wie ein Label oder Symbol, hinzufügen möchten, während alternative Indikatoren ebenfalls verfügbar sind, um die Barrierefreiheit für alle Benutzer sicherzustellen. Zum Beispiel können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader informieren ihre Benutzer bereits, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, angeklickt/ausgewählt ist. Daher möchten Sie nicht, dass sie ein anderes DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Platzierung von generiertem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text in sich zeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem früheren Beispiel mit erforderlich/optional, dieses Mal werden wir nicht das Aussehen der Eingabe selbst ändern, sondern generierten Inhalt nutzen, um ein aussagekräftiges Label hinzuzufügen.

Zunächst fügen wir einen Absatz oben im Formular hinzu, der sagt, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Diese Benutzer hören von den Screenreadern das Wort "erforderlich", wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span` in eine neue Zeile unterhalb der Eingabe fiel, da Eingabe und Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>`, um ein Flex-Container zu werden, der seine Inhalte aber auch auf neue Zeilen umbricht, wenn sie zu lang werden:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung, die dies hat, ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da beide `width: 100%` sind, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein untergeordnetes Element des Elements, auf dem er generiert wird, bezüglich Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was dem entspricht, was wir mit unserem Label sagen wollten, und gestalten und positionieren ihn nach unseren Wünschen. Das Ergebnis ist unten zu sehen (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Steuerungselemente basierend darauf gestalten, ob ihre Daten gültig sind

Das andere wirklich wichtige, fundamentale Konzept bei der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten können wir auch über innerhalb und außerhalb des Bereichs liegende Daten sprechen). Formularelemente mit [Einschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die beachtenswert sind:

- Steuerelemente ohne Einschränkungen sind immer gültig und daher mit `:valid` übereinstimmend.
- Steuerelemente mit `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit eingehender Validierung, wie `<input type="email">` oder `<input type="url">` sind (übereinstimmend mit) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, sind (übereinstimmend mit) `:invalid`, aber auch übereinstimmend mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` übereinstimmend zu machen, wie Sie in dem Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` betrachten.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s zum Erzeugen von Inhalten, die wir verwenden werden, um Anzeiger für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Anzeiger zu liefern, verwenden wir das folgende CSS:

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

Wir setzen die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann verschiedene generierte Inhalte absolut, je nachdem ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz können beispielsweise verwendet werden. Um ein wenig Dringlichkeit für ungültige Daten hinzuzufügen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Label hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Label verwendet haben.

Sie können es unten ausprobieren (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, jedoch gültig, wenn etwas eingegeben ist. Das E-Mail-Feld ist dagegen gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs sind.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist es wert zu beachten, dass Eingaben, deren Daten innerhalb des Bereichs sind, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum also beide haben? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der Ungültigkeitskommunikation, deshalb möchten Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen, die den Benutzern hilfreicher sein wird als nur "ungültig" zu sagen. Vielleicht möchten Sie sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut und das letzte Beispiel erweitert, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben zu liefern und zusätzlich zu sagen, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie wir sie vorher im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die für jeden `::after`-Inhalt gelten, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalten für die `:required`- und `:out-of-range`-Zustände ihr eigenes Styling und Inhalte gegeben haben. Sie können es hier ausprobieren (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist, also was passiert dann? Da die Regel `:out-of-range` später im Quellcode erscheint als die Regel `:required`, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht über den ungültigen Bereich wird angezeigt.

Dies funktioniert ganz gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingegeben haben (zum Beispiel im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich in den Fokus bringen und es mit der Tastatur eingeben. Die Spinner-Tasten erlauben es nicht, den Wert außerhalb des erlaubten Bereichs zu inkrementieren/dekrementieren.

## Steuerungselemente basierend darauf gestalten, ob sie aktiviert oder deaktiviert sind, und ob Schreibzugriff erlaubt ist oder nur Eingabelesen

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, geklickt oder eingegeben werden. Ein deaktiviertes Element hingegen kann nicht in irgendeiner Weise interagiert und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Manchmal, wenn bestimmte Daten nicht auf einen bestimmten Benutzer zutreffen, möchten Sie möglicherweise nicht einmal diese Daten senden, wenn er das Formular abschickt. Ein klassisches Beispiel ist ein Versandformular — normalerweise werden Sie gefragt, ob Sie dieselbe Adresse für die Rechnungsstellung und den Versand verwenden möchten; wenn ja, können Sie einfach eine Adresse an den Server senden, und Sie können genauso gut die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst einmal ist das HTML ein einfaches Formular mit Texteingaben und einem Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Schließend verwenden wir etwas JavaScript, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Er es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), damit der Benutzer die Rechnungsfelder aktivieren/deaktivieren kann, und schaltet auch die Gestaltung der zugehörigen Labels um.

Sie können das Beispiel unten in Aktion sehen (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

### Nur zum Lesen und zum Schreiben

Ähnlich wie bei `:disabled` und `:enabled`, zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten können. Wie bei den deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch die schreibgeschützten Eingabewerte an den Server gesendet. Schreibzugriff bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly`-Attribut auf schreibgeschützt gesetzt. Stellen Sie sich ein Bestätigungsformular vor, bei dem der Entwickler die auf vorherigen Seiten ausgefüllten Details auf diese Seite übertragen hat, um den Benutzer eine Gesamtübersicht zu ermöglichen, eventuelle fehlende Daten hinzuzufügen und dann die Bestellung durch Abgabe zu bestätigen. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das `readonly`-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Reihe von Formularelementen nicht bearbeitbar ist, die Werte jedoch beim Absenden des Formulars gesendet werden. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich nur selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Zustände von Radio und Kontrollkästchen — checked, default, indeterminate

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} markiert oder nicht markiert sein. Es gibt jedoch noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Stimmt mit Radios/Kontrollkästchen überein, die standardmäßig beim Laden der Seite aktiviert sind (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese entsprechen der Pseudoklasse {{cssxref(":default")}}, selbst wenn der Benutzer diese deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder markiert noch nicht markiert sind, werden sie als _unbestimmt_ betrachtet und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Mehr dazu im Folgenden.

### :checked

Wenn sie markiert sind, werden sie mit der Pseudoklasse {{cssxref(":checked")}} übereinstimmen.

Die häufigste Verwendung dafür ist das Hinzufügen eines anderen Stils auf das Kontrollkästchen oder den Radiobutton, wenn er markiert ist, in Fällen, in denen Sie die Systemstandardgestaltung mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Gestaltung selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Styling von Kontrollkästchen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) sprachen.

Zusammenfassend sieht der `:checked`-Code aus unserem Beispiel für gestaltete Radiobuttons wie folgt aus:

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

Im Wesentlichen bauen wir die Gestaltung für den "inneren Kreis" eines Radiobuttons mithilfe des Pseudo-Elements `::before` auf, setzen aber darauf eine `scale(0)`-{{cssxref("transform")}}. Dann verwenden wir eine {{cssxref("transition")}}, um den generierten Inhalt der Eingabe schön animiert in den Fokus zu rücken, wenn das Radio ausgewählt/gecheckt wird. Der Vorteil der Verwendung einer Transformation anstelle einer Übergangsbreite/Übergangshöhe liegt darin, dass Sie das {{cssxref("transform-origin")}} nutzen können, um es vom Zentrum des Kreises aus wachsen zu lassen, anstatt es von einer Ecke des Kreises aus erscheinen zu lassen, und es gibt kein Springverhalten, da keine Werte des Box-Modells aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig beim Laden der Seite aktiviert sind, auch wenn sie später deaktiviert werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, welche die Standardoptionen waren, für den Fall, dass er seine Wahl zurücksetzen möchte.

Außerdem werden die oben genannten Radios/Kontrollkästchen von der Pseudoklasse {{cssxref(":indeterminate")}} angesprochen, wenn sie in einem Zustand sind, in dem sie weder markiert noch entmarkiert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radiobuttons in einer gleichbenannten Gruppe nicht angekreuzt sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Das ist etwas, was Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern zu zeigen, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar abgeänderte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons im unbestimmten Zustand gestalten. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf dem mittleren Radiobutton gesetzt, sodass es standardmäßig beim Laden ausgewählt wird. Wir gestalten dies mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard"-Label auf dem Element, das ursprünglich beim Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den Subsequenz-Sibling-Kombinator (`~`) anstelle des Nexsh-Sibling-Kombinators (`+`) verwendet haben — wir mussten dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Beispiel unten an (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir keinen ausgewählten Standard-Radiobutton — das ist wichtig — wenn es einen gäbe, würde es keinen unbestimmten Zustand geben, den man gestalten könnte. Die Styling des unbestimmten Radiobuttons erfolgt mit dem folgenden CSS:

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

Dies erzeugt einen lustigen kleinen animierten Umriss für die Radiobuttons, der hoffentlich anzeigt, dass Sie einen von ihnen auswählen sollten!

Sehen Sie sich das Live-Beispiel unten an (drücken Sie den **Play**-Button, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel zu `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite finden.

## Mehr Pseudoklassen

Es gibt eine Reihe von anderen interessanten Pseudoklassen, und wir haben hier nicht den Raum, um sie alle im Detail zu behandeln. Lassen Sie uns über ein paar weitere sprechen, in die Sie Zeit investieren sollten, um sie zu untersuchen.

- Die {{cssxref(":focus-within")}}-Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular irgendwie hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus über eine Tastatureingabe erhalten haben (anstatt über Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zum Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen überein, die ihren Platzhalter anzeigen (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, werden jedoch noch nicht gut von Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine vernünftige Browser-Unterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht fertig, sodass sie noch in keinem Browser unterstützt wird.
- Die {{cssxref(":user-invalid")}}-Pseudoklasse wird nach Unterstützung ähnlich der {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element als `:invalid` markiert werden, sobald der Benutzer Daten eingibt, die vorübergehend ungültig sind, während es nur bei `:user-invalid` bleibt, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, bleibt er über die gesamte Fokussierung sowohl `:invalid` als auch `:user-invalid`. In ähnlicher Weise wie `:invalid` wird sie aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Zusammenfassung

Damit haben wir unseren Blick auf UI-Pseudoklassen im Zusammenhang mit Formulareingaben abgeschlossen. Spielen Sie weiter damit und erstellen Sie einige unterhaltsame Formulargestaltungen! Als Nächstes gehen wir zu etwas anderem über — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
