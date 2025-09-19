---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente allgemein behandelt. Dies beinhaltete einige Verwendungen von Pseudoklassen, beispielsweise die Nutzung von `:checked`, um ein Kontrollkästchen nur dann zu adressieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in unterschiedlichen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinen
        Wissens über
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

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z. B. durch Tastatureingabe erreichbar).
- {{cssxref(":active")}}: Wählt ein Element nur während seiner Aktivierung aus (z. B. während es angeklickt wird oder wenn die <kbd>Return</kbd>/<kbd>Enter</kbd>-Taste für die Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher besprechen, aber kurz gesagt, die Hauptpunkte, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziellen Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-HTML-Attribut unterstützen), basierend auf der Frage, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielsteuerungen, die gemäß den auf ihnen festgelegten Validierungsregeln gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielellen Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und Lese-/Schreiben- oder Nurlesen-Steuerelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Adressieren jeweils Kontrollkästchen und Optionsfelder, die aktiviert, in einem unbestimmten Zustand (weder aktiviert noch deaktiviert) sind, und die Standardauswahloption, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen auf sehr spezifische Nischenprobleme ab. Die UI-Pseudoklassen, die oben aufgelistet sind, haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen bezieht sich auf das Styling von Formularsteuerungen basierend auf ihrem Validierungsstatus (Sind ihre Daten gültig oder nicht?). Sie werden viel mehr darüber erfahren, wie Sie Validierungsbeschränkungen in unserem nächsten Artikel festlegen und steuern — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst werden wir die Validierung der Formulare einfach halten, um keine Verwirrung zu stiften.

## Eingabefelder stylen, basierend darauf ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der Client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elementen steht ein `required`-Attribut zur Verfügung, das festgelegt werden kann. Wenn es gesetzt ist, bedeutet das, dass Sie diese Kontrolle ausfüllen müssen, bevor das Formular erfolgreich abgeschickt werden kann.
Zum Beispiel sind der Vorname und Nachname im Formular unten erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Beispielsweise, wenn wir das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerungen haben einen soliden Rahmen, und die optionale Steuerung hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen Client-seitigen Validierungsfehlermeldungen der Browser zu sehen, die Ihnen angezeigt werden:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie es vermeiden, 'erforderlich' oder 'optional' Elemente in Formularen nur mit Farbe zu stylen, da dies nicht ideal für farbenblinde Menschen ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für erforderlichen Status ist ein Sternchen (`*`), oder das Wort "erforderlich" in Verbindung mit den jeweiligen Steuerelementen.
Im nächsten Abschnitt sehen wir uns ein besseres Beispiel für die Darstellung erforderlicher Felder mit `:required` und generiertem Inhalt an.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional`-Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling einfach standardmäßig vornehmen können und übergeordnete Styles für erforderliche Eingaben hinzufügen können.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird. Aber nur derjenige mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Generierte Inhalte mit Pseudoklassen verwenden

In früheren Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um etwas mehr ins Detail zu gehen.

Die Idee ist, dass wir die Pseudo-Elemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, daher kann es für einige Screenreader unsichtbar sein. Da es sich um ein Pseudo-Element handelt, kann es auf dieselbe Weise gestylt werden wie jedes tatsächliche DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, z. B. ein Label oder ein Symbol, wenn alternative Indikatoren verfügbar sind, um die Barrierefreiheit für alle Benutzer zu gewährleisten. Beispielsweise können wir generierte Inhalte verwenden, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader informieren ihre Benutzer bereits darüber, wenn ein angegebener Radiobutton oder ein Kontrollkästchen aktiviert/ausgewählt ist. Sie möchten also nicht, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Einen rein visuellen Indikator zu haben, löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Anzeige von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel für erforderliche optionale Eingaben — dieses Mal werden wir das Aussehen des Eingabefelds selbst nicht ändern — wir verwenden generierte Inhalte, um ein kennzeichnendes Label hinzuzufügen.

Zuerst fügen wir ein Paragraphen am Anfang des Formulars hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer erhalten "erforderlich" als zusätzliche Information gelesen, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Textfelder keine generierten Inhalte, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, an den die generierten Inhalte angehängt werden können:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbar auftretende Problem war, dass das Span in eine neue Zeile unterhalb der Eingabe fiel, weil die Eingabe und das Label beide mit `width: 100%` festgelegt wurden. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um es zu einem Flex-Container zu machen, aber sagen ihm auch, dass es seinen Inhalt in neue Zeilen umbrechen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, so dass es auf derselben Zeile wie die Eingabe sitzen kann.

Nun zu dem generierten Inhalt. Wir erstellen ihn mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, statt relativ zum `<body>` (Der generierte Inhalt verhält sich, als ob er ein Kindelement des Elements wäre, auf dem es generiert wird, was das Positionieren betrifft).

Dann geben wir den generierten Inhalt den Inhalt "erforderlich", was das ist, was wir wollten, dass unser Label sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Steuerelemente basierend auf der Gültigkeit ihrer Daten stylen

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall numerischer Daten können wir auch über in-Reichweite und außer-Reichweite-Daten sprechen). Formularelemente mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können auf der Grundlage dieser Zustände angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} adressieren. Einige Punkte, die es zu beachten gilt:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` adressiert.
- Elemente mit `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` adressiert.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (mit) `:invalid` adressiert, wenn die eingegebenen Daten nicht dem Musterschema entsprechen, das sie erwarten (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichslimits liegt, die durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute angegeben sind, werden (mit) `:invalid` adressiert, aber auch durch {{cssxref(":out-of-range")}} adressiert, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` zu adressieren, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierte Inhalte zu erzeugen, die wir verwenden werden, um Anzeigehinweise für gültige/ungültige Daten zu liefern:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Indikatoren zu liefern, verwenden wir das folgende CSS:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, sodass wir die generierten Inhalte relativ zu ihnen positionieren können. Wir positionieren dann absolut unterschiedliche generierte Inhalte, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein bisschen mehr Dringlichkeit für ungültige Daten hinzuzufügen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlichen" Labels verwendet haben.

Sie können es unten versuchen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingabefelder ungültig sind, wenn sie leer sind, aber gültig werden, wenn etwas eingegeben ist. Das E-Mail-Feld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine korrekte E-Mail-Adresse ist.

### In-Reichweite und Außer-Reichweite-Daten

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese adressieren numerische Eingaben, bei denen Bereichslimits durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)- und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribute festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist zu beachten, dass Eingaben, deren Daten in Reichweite sind, auch durch die Pseudoklasse `:valid` adressiert werden und Eingaben, deren Daten außer Reichweite sind, auch durch die Pseudoklasse `:invalid` adressiert werden. Warum also beide haben? Die Frage ist wirklich eine der Semantik — außer Reichweite ist eine spezifischere Art, Ungültigkeit kommunizieren, sodass Sie möglicherweise eine andere Nachricht für außer Bereich liegende Eingaben bereitstellen möchten, die für die Benutzer hilfreicher ist als einfach nur "ungültig" zu sagen. Möglicherweise möchten Sie sogar beide bereitstellen.

Werfen wir einen Blick auf ein Beispiel, das genau dies tut, das vorherige Beispiel aufgreift, um Nachrichten für außer Bereich liegende Werte für die numerischen Eingaben bereitzustellen, sowie eine Aussage darüber, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie bei dem vorherigen Beispiel, außer dass wir hier die Deklarationen, die auf alle `::after`-Inhalte anwendbar sind, in einer separaten Regel zusammengeführt haben und den separaten `::after`-Inhalten für `:required`- und `:out-of-range`-Zustände ihren eigenen Inhalt und ihre eigene Formatierung gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Anzahl der Eingaben sowohl erforderlich als auch außer Reichweite gleichzeitig ist. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht außerhalb des Bereichs wird angezeigt.

Dies funktioniert recht gut — wenn die Seite das erste Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und einem Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. innerhalb des Bereichs von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter in einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außer Bereich liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und ihn mit der Tastatur eingeben. Die Schaltflächen zum Spinnen ermöglichen es Ihnen nicht, den Wert außerhalb des zulässigen Bereichs zu erhöhen/verringern.

## Eingabefelder stylen basierend darauf ob sie aktiviert oder deaktiviert sind, und ob sie nur lesbar oder lesbar/schreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt, usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} adressiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht gelten, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn das Formular abgeschickt wird. Ein klassisches Beispiel ist ein Versandformular — in der Regel werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server schicken und möglicherweise möchten Sie einfach die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst einmal ist das HTML ein einfaches Formular, das Texteingaben enthält, sowie ein Kontrollkästchen, um die Aktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren wollen, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels unmittelbar vor ihren Eingabefeldern stehen, haben wir sie mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich haben wir einige JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder zu toggeln:

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

### Nur-Lese und Lese/Schreib-Eingabefelder

Ähnlich wie bei `:disabled` und `:enabled` adressieren die Pseudoklassen `:read-only` und `:read-write` zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer keine Nur-Lese-Eingaben ändern. Aber im Gegensatz zu deaktivierten Eingaben werden Nur-Lese-Eingabewerte an den Server gesendet. Lese/Schreib bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly`-Attribut auf nur lesen gesetzt. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf der der Entwickler die auf früheren Seiten ausgefüllten Details auf diese Seite übertragen hat, mit dem Ziel, dem Benutzer zu helfen, alle an einem Ort zu überprüfen, alle erforderlichen abschließenden Daten hinzuzufügen und dann die Bestellung zu bestätigen, indem er abschickt. Zu diesem Zeitpunkt können alle abschließenden Formulardaten in einem Durchgang an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Menge an Formularelementen nicht bearbeitbar ist, jedoch die Werte werden gesendet, wenn das Formular gesendet wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestylt:

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
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchen-Zustände — geprüft, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radio Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} überprüft oder nicht überprüft sein. Es gibt jedoch ein paar andere Zustände, die zu berücksichtigen sind:

- {{cssxref(":default")}}: Stimmt mit Radios/Kontrollkästchen überein, die standardmäßig auf Seite geladen sind (d.h. durch das Setzen des `checked`-Attributs auf ihnen). Diese stimmen mit der Pseudoklasse {{cssxref(":default")}} überein, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder überprüft noch nicht geprüft sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der Pseudoklasse {{cssxref(":indeterminate")}} überein. Mehr dazu unten.

### :checked

Wenn sie überprüft werden, werden sie mit der Pseudoklasse {{cssxref(":checked")}} übereinstimmen.

Die häufigste Verwendung davon ist, eine andere Stilrichtung auf das Kontrollkästchen oder den Radio-Button anzuwenden, wenn es überprüft wird, in Fällen, in denen Sie das System-Standard-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über das [Stylen von Kontrollkästchen und Radiobuttons mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) sprachen.

Zur Wiederholung sieht der `:checked`-Code aus unserem Beispiel für gestaltete Radiobuttons so aus:

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

Im Wesentlichen bauen wir das Styling für den "inneren Kreis" eines Radio-Buttons mit dem `::before`-Pseudo-Element auf, setzen aber eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf den Label auf eine angenehme Art und Weise einzublenden, wenn das Radio ausgewählt/überprüft wird. Der Vorteil der Verwendung einer Transformation anstelle des Übergangs von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie das [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises heraus zu wachsen, anstatt es aus der Ecke des Kreises wachsen zu lassen, und es gibt kein Springen, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig bei Seitenlade aktiv sind, selbst wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Hinweis zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben erwähnten Radios/Kontrollkästchen werden von der Pseudoklasse {{cssxref(":indeterminate")}} angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder überprüft noch nicht überprüft sind. Aber was bedeutet das? Zu den unbestimmten Elementen gehören:

- {{HTMLElement("input/radio")}} Eingabefelder, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht überprüft sind
- {{HTMLElement("input/checkbox")}} Eingabefelder, deren `indeterminate`-Eigenschaft auf `true` über JavaScript gesetzt wird
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern anzuzeigen, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die dem Benutzer mitteilen, was die Standardoption war, und die Labels von Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf die mittlere Radiobutton-Eingabe hinzugefügt, sodass sie standardmäßig beim Laden ausgewählt wird. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den aufeinander folgenden Nachbar-Kombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellordnung kommt.

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

Für das `:indeterminate`-Beispiel haben wir kein voreingestelltes ausgewähltes Radiobutton — das ist wichtig — wenn es eines gäbe, dann gäbe es keinen unbestimmten Zustand mehr, der gestylt werden müsste. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies schafft einen lustigen kleinen animierten Umriss auf den Radio-Buttons, der hoffentlich anzeigt, dass Sie eines von ihnen auswählen müssen!

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
> Sie finden ein [interessantes Beispiel, das `indeterminate`-Zustände beinhaltet](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben nicht den Raum, sie alle hier im Detail zu beschreiben. Lassen Sie uns über einige weitere sprechen, die Sie sich die Zeit nehmen sollten, um zu untersuchen.

- Die Pseudoklasse {{cssxref(":focus-within")}} stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie wünschen, dass ein gesamtes Formular in gewisser Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die Pseudoklasse {{cssxref(":focus-visible")}} stimmt mit fokussierten Elementen überein, die den Fokus über eine Tastatureingabe (anstatt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus zeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter zeigen (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, werden aber noch nicht gut in Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kindelemente haben, wie {{HTMLElement("input")}}, aber sie ist allgemeiner — sie stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat vernünftige Browser-Unterstützung; die Pseudoklasse `:blank` ist noch nicht in einer Spezifikation abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse, wenn sie unterstützt wird, wird ähnlich wie {{cssxref(":invalid")}} sein, aber mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element während der Dateneingabe als `:invalid` übereinstimmen, wenn der Wert vorübergehend ungültig ist, wird jedoch nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er für die gesamte Dauer des Fokus sowohl mit `:invalid` als auch `:user-invalid` übereinstimmen. In ähnlicher Weise wird es aufhören, mit `:user-invalid` zu stimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit beenden wir unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als nächstes gehen wir zu etwas anderem über — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
