---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formular-Steuerelemente allgemein behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, beispielsweise die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen UI-Pseudoklassen, die zum Styling von Formularen in unterschiedlichen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse von
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
        Verstehen, welche Teile von Formularen schwierig zu stylen sind und warum;
        lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Möglicherweise kennen Sie bereits die folgenden Pseudoklassen:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn sich ein Mauszeiger darüber befindet.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. wenn es über die Tastatur mit der Tabulatortaste erreicht wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während darauf geklickt wird oder, bei einer Tastaturaktivierung, während die Taste <kbd>Return</kbd> / <kbd>Enter</kbd> gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) bieten mehrere weitere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese stellen mehrere nützliche Auswahlbedingungen bereit, die Sie nutzen können. In den folgenden Abschnitten besprechen wir sie ausführlicher, doch kurz zusammengefasst sind die wichtigsten, die wir betrachten werden:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Sprechen Elemente an, die erforderlich sein können (z. B. Elemente, die das HTML-Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}} sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Sprechen Formular-Steuerelemente an, die gemäß den für sie festgelegten Formularvalidierungsbedingungen gültig/ungültig oder innerhalb/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}} sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Sprechen Elemente an, die deaktiviert werden können (z. B. Elemente, die das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) unterstützen), je nachdem, ob sie aktuell aktiviert oder deaktiviert sind, sowie Formular-Steuerelemente mit Lese-/Schreibzugriff oder nur Lesezugriff (z. B. Elemente mit gesetztem Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Sprechen jeweils Kontrollkästchen und Optionsfelder an, die aktiviert sind, sich in einem unbestimmten Zustand befinden (weder aktiviert noch deaktiviert) und die standardmäßig ausgewählte Option beim Laden der Seite darstellen (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit gesetztem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit gesetztem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele weitere, aber die oben aufgeführten sind am offensichtlichsten nützlich. Einige von ihnen sind auf die Lösung sehr spezifischer Nischenprobleme ausgerichtet. Die oben aufgeführten UI-Pseudoklassen verfügen über eine ausgezeichnete Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier behandelten Pseudoklassen betreffen das Styling von Formular-Steuerelementen anhand ihres Validierungsstatus (sind ihre Daten gültig oder nicht?). Im nächsten Artikel — [Formularvalidierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — erfahren Sie viel mehr über das Festlegen und Steuern von Validierungsbedingungen. Vorerst halten wir die Formularvalidierung jedoch einfach, damit sie nicht für Verwirrung sorgt.

## Eingaben danach stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bei der Formularvalidierung auf der Client-Seite ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular übermittelt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente verfügen über ein `required`-Attribut. Wenn dieses gesetzt ist, müssen Sie dieses Steuerelement ausfüllen, bevor das Formular erfolgreich übermittelt wird.
Im folgenden Formular sind beispielsweise Vorname und Nachname erforderlich, die E-Mail-Adresse ist jedoch optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rahmen, während das optionale Steuerelement einen gestrichelten Rahmen hat.
Sie können auch versuchen, das Formular ohne Eingaben zu übermitteln, um die standardmäßigen Validierungsfehlermeldungen auf der Client-Seite zu sehen, die Browser anzeigen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie in Formularen erforderliche gegenüber optionalen Elementen nicht ausschließlich mithilfe von Farben stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die übliche Konvention im Web für den Status „erforderlich“ ist ein Sternchen (`*`) oder das Wort „erforderlich“ in Verbindung mit den jeweiligen Steuerelementen.
Im nächsten Abschnitt betrachten wir ein besseres Beispiel zum Kennzeichnen erforderlicher Felder mit `:required` und generiertem Inhalt.

> [!NOTE]
> Wahrscheinlich werden Sie die Pseudoklasse `:optional` nicht sehr häufig verwenden. Formular-Steuerelemente sind standardmäßig optional. Sie könnten Ihr Styling für optionale Elemente daher einfach als Standard festlegen und dann Styles für erforderliche Steuerelemente hinzufügen.

> [!NOTE]
> Wenn ein Optionsfeld in einer Gruppe gleichnamiger Optionsfelder das Attribut `required` gesetzt hat, sind alle Optionsfelder ungültig, bis eines ausgewählt wird. Allerdings entspricht nur das Feld, dem das Attribut zugewiesen wurde, tatsächlich {{cssxref(':required')}}.

## Generierten Inhalt mit Pseudoklassen verwenden

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, etwas ausführlicher darüber zu sprechen.

Die Idee besteht darin, dass wir die Pseudoelemente {{cssxref("::before")}} und {{cssxref("::after")}} zusammen mit der Eigenschaft {{cssxref("content")}} verwenden können, um einen Inhaltsabschnitt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsabschnitt wird nicht zum DOM hinzugefügt und kann daher für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es auf dieselbe Weise mit Styles angesprochen werden wie jeder tatsächliche DOM-Knoten.

Dies ist besonders nützlich, wenn Sie einem Element einen visuellen Indikator wie ein Label oder ein Symbol hinzufügen möchten und gleichzeitig alternative Indikatoren verfügbar sind, um die Barrierefreiheit für alle Benutzenden sicherzustellen. Beispielsweise können wir generierten Inhalt verwenden, um die Platzierung und Animation des inneren Kreises einer benutzerdefinierten Schaltfläche zu handhaben, wenn ein Optionsfeld ausgewählt wird:

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

Dies ist sehr nützlich — Screenreader teilen ihren Benutzenden bereits mit, wenn ein angetroffenes Optionsfeld oder Kontrollkästchen aktiviert/ausgewählt ist. Sie möchten daher nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl kennzeichnet, denn das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Einfügen generierten Inhalts. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox` usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional: Dieses Mal verändern wir nicht das Aussehen der Eingabe selbst — wir verwenden generierten Inhalt, um ein kennzeichnendes Label hinzuzufügen.

Zunächst fügen wir am Anfang des Formulars einen Absatz hinzu, der erklärt, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzende von Screenreadern hören „erforderlich“ als zusätzliche Information, wenn sie jede erforderliche Eingabe erreichen, während sehende Benutzende unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt. Daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, an dem der generierte Inhalt angehängt werden kann:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das span in eine neue Zeile unterhalb der Eingabe rutschte, weil die Eingabe und das Label beide mit `width: 100%` festgelegt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>` als Flex-Container, teilen ihm aber auch mit, dass es seinen Inhalt in neue Zeilen umbrechen soll, falls der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Dadurch befinden sich das Label und die Eingabe in getrennten Zeilen, da beide `width: 100%` haben. Das `<span>` hat jedoch eine Breite von `0` und kann daher in derselben Zeile wie die Eingabe stehen.

Kommen wir nun zum generierten Inhalt. Wir erstellen ihn mit diesem CSS:

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

Wir setzen für das `<span>` `position: relative`, damit wir für den generierten Inhalt `position: absolute` festlegen und ihn relativ zum `<span>` statt zum `<body>` positionieren können. (Der generierte Inhalt verhält sich bei der Positionierung so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird.)

Dann geben wir dem generierten Inhalt den Text „erforderlich“, was unser Label aussagen sollte, und stylen und positionieren ihn wie gewünscht. Das Ergebnis sehen Sie unten (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Steuerelemente danach stylen, ob ihre Daten gültig sind

Das andere sehr wichtige, grundlegende Konzept der Formularvalidierung ist, ob die Daten eines Formular-Steuerelements gültig sind oder nicht (bei numerischen Daten können wir auch über Daten innerhalb oder außerhalb des Bereichs sprechen). Formular-Steuerelemente mit [Einschränkungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) können anhand dieser Zustände angesprochen werden.

### :valid und :invalid

Sie können Formular-Steuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die Sie beachten sollten:

- Steuerelemente ohne Einschränkungsvalidierung sind immer gültig und entsprechen daher `:valid`.
- Steuerelemente mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie entsprechen `:invalid` und `:required`.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, entsprechen `:invalid`, wenn die eingegebenen Daten nicht dem erwarteten Muster entsprechen (sind jedoch gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegebenen Bereichsgrenzen liegt, entsprechen `:invalid`, werden aber auch von {{cssxref(":out-of-range")}} erfasst, wie Sie später sehen werden.
- Es gibt einige weitere Möglichkeiten, ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Formularvalidierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Vorerst halten wir es jedoch einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`-Elemente, auf denen Inhalt generiert wird. Wir verwenden sie, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir für die `<span>`-Elemente `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Anschließend positionieren wir unterschiedlichen generierten Inhalt absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — jeweils ein grünes Häkchen oder ein rotes Kreuz. Um den ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben bei Ungültigkeit außerdem einen dicken roten Rahmen gegeben.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die Labels „erforderlich“ verwenden.

Sie können es unten ausprobieren (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie ausgefüllt wurden. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine korrekte E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese entsprechen numerischen Eingaben, deren Bereichsgrenzen durch [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben werden, wenn sich ihre Daten jeweils innerhalb oder außerhalb des angegebenen Bereichs befinden.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist wichtig zu beachten, dass Eingaben mit Daten innerhalb des Bereichs auch der Pseudoklasse `:valid` entsprechen und Eingaben mit Daten außerhalb des Bereichs auch der Pseudoklasse `:invalid`. Warum gibt es also beide? Das Problem betrifft hauptsächlich die Semantik — außerhalb des Bereichs ist eine spezifischere Art, Ungültigkeit zu kommunizieren. Daher möchten Sie für Eingaben außerhalb des Bereichs möglicherweise eine andere Meldung bereitstellen, die für Benutzende hilfreicher ist als lediglich „ungültig“. Möglicherweise möchten Sie sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Es baut auf dem vorherigen Beispiel auf, um Meldungen für numerische Eingaben außerhalb des Bereichs bereitzustellen und gleichzeitig anzugeben, ob diese erforderlich sind.

Die numerische Eingabe sieht folgendermaßen aus:

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

Dies ähnelt dem vorherigen Beispiel für `:required`, außer dass wir hier die Deklarationen, die für beliebigen `::after`-Inhalt gelten, in eine separate Regel aufgeteilt haben und dem separaten `::after`-Inhalt für die Zustände `:required` und `:out-of-range` jeweils eigenen Inhalt und eigenes Styling geben. Sie können es hier ausprobieren (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist. Was passiert dann? Da die Regel `:out-of-range` im Quellcode später erscheint als die Regel `:required`, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) zum Tragen und die Meldung außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — beim ersten Laden der Seite wird „Erforderlich“ zusammen mit einem roten Kreuz und Rahmen angezeigt. Wenn Sie ein gültiges Alter eingeben (d.h. im Bereich von 12 bis 120), wird die Eingabe gültig. Wenn Sie den Alterseintrag anschließend in einen Wert außerhalb des Bereichs ändern, erscheint die Meldung „Außerhalb des zulässigen Wertebereichs“ anstelle von „Erforderlich“.

> [!NOTE]
> Um einen ungültigen Wert bzw. einen Wert außerhalb des Bereichs einzugeben, müssen Sie das Formular tatsächlich fokussieren und ihn über die Tastatur eingeben. Die Spinner-Schaltflächen erlauben es Ihnen nicht, den Wert über den zulässigen Bereich hinaus zu erhöhen oder zu verringern.

## Aktivierte und deaktivierte Eingaben sowie schreibgeschützte und beschreibbare Eingaben stylen

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, beschrieben usw. werden. Mit einem deaktivierten Element kann hingegen in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Wenn einige Daten für eine bestimmte Person nicht zutreffen, möchten Sie diese Daten möglicherweise gar nicht übermitteln, wenn das Formular übermittelt wird. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandadresse verwenden möchten. Wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Felder für die Rechnungsadresse deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Das HTML ist zunächst ein einfaches Formular mit Texteingaben sowie einem Kontrollkästchen, mit dem die Deaktivierung der Rechnungsadresse ein- und ausgeschaltet wird. Die Felder für die Rechnungsadresse sind standardmäßig deaktiviert.

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

Kommen wir nun zum CSS. Die relevantesten Teile dieses Beispiels sind die folgenden:

```css
input[type="text"]:disabled {
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir sie mit der Pseudoklasse {{cssxref(":has")}} ausgewählt.

Abschließend haben wir JavaScript verwendet, um die Deaktivierung der Felder für die Rechnungsadresse umzuschalten:

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

Dabei wird das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event) verwendet, damit Benutzende die Rechnungsfelder aktivieren/deaktivieren und das Styling der zugehörigen Labels umschalten können.

Sie können das Beispiel unten in Aktion sehen (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Ähnlich wie `:disabled` und `:enabled` sprechen die Pseudoklassen `:read-only` und `:read-write` zwei Zustände an, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzende schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden Werte schreibgeschützter Eingaben jedoch an den Server übermittelt. Read-write bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` auf schreibgeschützt gesetzt. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf die die Entwicklerin oder der Entwickler die auf vorherigen Seiten ausgefüllten Daten übertragen hat. Die Benutzenden sollen alle Angaben an einer Stelle überprüfen, eventuell benötigte abschließende Daten ergänzen und dann die Bestellung durch Übermitteln bestätigen. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Ausschnitt des HTML sieht folgendermaßen aus — beachten Sie das Attribut readonly:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, sehen Sie, dass der obere Satz an Formularelementen nicht bearbeitbar ist, die Werte beim Übermitteln des Formulars jedoch übermittelt werden. Wir haben die Formular-Steuerelemente mit den Pseudoklassen `:read-only` und `:read-write` folgendermaßen gestylt:

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

Das vollständige Beispiel sieht so aus (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

## Optionsfeld- und Kontrollkästchenzustände — aktiviert, Standard, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Es gibt jedoch noch einige weitere Zustände, die berücksichtigt werden müssen:

- {{cssxref(":default")}}: Entspricht Optionsfeldern/Kontrollkästchen, die beim Laden der Seite standardmäßig aktiviert sind (d.h. durch Setzen des Attributs `checked`). Sie entsprechen der Pseudoklasse {{cssxref(":default")}}, selbst wenn Benutzende sie deaktivieren.
- {{cssxref(":indeterminate")}}: Wenn Optionsfelder/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Weiter unten erfahren Sie mehr darüber, was dies bedeutet.

### :checked

Wenn sie aktiviert sind, entsprechen sie der Pseudoklasse {{cssxref(":checked")}}.

Die häufigste Verwendung besteht darin, einem Kontrollkästchen oder Optionsfeld bei Aktivierung einen anderen Stil zu geben, wenn Sie das standardmäßige System-Styling mit [`appearance: none;`](/de/docs/Web/CSS/Reference/Properties/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Beispiele dafür haben wir im vorherigen Artikel gesehen, als wir über das [Styling von Kontrollkästchen und Optionsfeldern mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Zur Wiederholung sieht der `:checked`-Code aus unserem Beispiel für gestylte Optionsfelder folgendermaßen aus:

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

Sie können ihn hier ausprobieren (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Im Grunde erstellen wir das Styling für den „inneren Kreis“ eines Optionsfelds mit dem Pseudoelement `::before`, setzen darauf jedoch eine {{cssxref("transform")}}-Funktion `scale(0)`. Anschließend verwenden wir eine {{cssxref("transition")}}, um den generierten Inhalt der Eingabe beim Auswählen/Aktivieren des Optionsfelds angenehm ins Blickfeld zu animieren. Der Vorteil der Verwendung einer Transformation anstelle einer Transition von {{cssxref("width")}}/{{cssxref("height")}} besteht darin, dass Sie {{cssxref("transform-origin")}} verwenden können, damit der Kreis von seiner Mitte aus wächst, statt scheinbar von seiner Ecke aus zu wachsen. Außerdem tritt kein Springen auf, da keine Eigenschaftswerte des Box-Modells aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die Pseudoklasse {{cssxref(":default")}} Optionsfeldern/Kontrollkästchen, die beim Laden der Seite standardmäßig aktiviert sind, selbst wenn sie deaktiviert werden. Dies könnte nützlich sein, um einer Optionsliste einen Indikator hinzuzufügen, der Benutzende daran erinnert, welche die Standardoptionen (oder Ausgangsoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Außerdem entsprechen die oben genannten Optionsfelder/Kontrollkästchen der Pseudoklasse {{cssxref(":indeterminate")}}, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch deaktiviert sind. Was bedeutet das aber? Zu den unbestimmten Elementen gehören:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Optionsfelder in einer gleichnamigen Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren Eigenschaft `indeterminate` über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente ohne Wert.

Dies werden Sie wahrscheinlich nicht sehr häufig verwenden. Ein Anwendungsfall könnte ein Indikator sein, der Benutzenden mitteilt, dass sie unbedingt ein Optionsfeld auswählen müssen, bevor sie fortfahren.

Schauen wir uns einige modifizierte Versionen des vorherigen Beispiels an, die Benutzende daran erinnern, welche die Standardoption war, und die Labels von Optionsfeldern im unbestimmten Zustand stylen. Beide verwenden die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das Beispiel mit `:default` haben wir dem mittleren Optionsfeld-Eingabeelement das Attribut `checked` hinzugefügt, sodass es beim Laden standardmäßig ausgewählt wird. Anschließend stylen wir dies mit dem folgenden CSS:

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

Dadurch wird beim Element, das ursprünglich beim Laden der Seite ausgewählt war, ein kleines Label „Standard“ angezeigt. Beachten Sie, dass wir hier den nachfolgenden Geschwisterkombinator (`~`) statt des Kombinators für das nächste Geschwisterelement (`+`) verwenden — wir müssen dies tun, weil das `<span>` in der Quellreihenfolge nicht direkt nach dem `<input>` steht.

Sehen Sie das Live-Ergebnis unten (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das Beispiel mit `:indeterminate` haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — denn wenn es eines gäbe, gäbe es keinen unbestimmten Zustand, der gestylt werden könnte. Wir stylen die unbestimmten Optionsfelder mit folgendem CSS:

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

Dadurch entsteht eine interessante kleine animierte Umrandung um die Optionsfelder, die hoffentlich verdeutlicht, dass Sie eines davon auswählen müssen!

Sehen Sie das Live-Ergebnis unten (drücken Sie die Schaltfläche **Play**, um das Beispiel in MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Auf der Referenzseite für [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden Sie ein [interessantes Beispiel mit `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes).

## Weitere Pseudoklassen

Es gibt noch eine Reihe weiterer interessanter Pseudoklassen, und wir haben hier nicht genügend Platz, um alle ausführlich zu behandeln. Lassen Sie uns einige weitere besprechen, die Sie genauer untersuchen sollten.

- Die Pseudoklasse {{cssxref(":focus-within")}} entspricht einem Element, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn ein gesamtes Formular auf irgendeine Weise hervorgehoben werden soll, sobald eine Eingabe darin fokussiert ist.
- Die Pseudoklasse {{cssxref(":focus-visible")}} entspricht fokussierten Elementen, die den Fokus durch Tastaturinteraktion erhalten haben (statt durch Berührung oder Maus) — nützlich, wenn Sie für Tastaturfokus einen anderen Stil als für Mausfokus (oder anderen Fokus) anzeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} entspricht {{htmlelement('input')}}- und {{htmlelement('textarea')}}-Elementen, deren Platzhalter angezeigt wird (d.h. der Inhalt des Attributs [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, werden jedoch bislang nicht gut von Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formular-Steuerelemente aus. {{cssxref(":empty")}} entspricht ebenfalls Elementen ohne Kindelemente, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — sie entspricht auch anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` wird von Browsern angemessen unterstützt; die Spezifikation der Pseudoklasse `:blank` ist noch nicht abgeschlossen und wird daher von keinem Browser unterstützt.
- Die Pseudoklasse {{cssxref(":user-invalid")}} wird, sofern unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, aber mit einer besseren Benutzererfahrung. Wenn der Wert gültig ist, sobald die Eingabe den Fokus erhält, kann das Element während der Eingabe durch die Benutzenden `:invalid` entsprechen, wenn der Wert vorübergehend ungültig ist. Es entspricht jedoch erst `:user-invalid`, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, entspricht es während der gesamten Fokusdauer sowohl `:invalid` als auch `:user-invalid`. Ähnlich wie bei `:invalid` entspricht es nicht mehr `:user-invalid`, wenn der Wert gültig wird.

## Zusammenfassung

Damit ist unser Überblick über UI-Pseudoklassen abgeschlossen, die sich auf Formulareingaben beziehen. Experimentieren Sie weiter damit und erstellen Sie ansprechende Formular-Styles! Als Nächstes widmen wir uns einem anderen Thema — der [Formularvalidierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select_listboxes", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
