---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 3fcbbaa87b49ddd87f76d7b932f366726028ab2c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularsteuerelemente im Allgemeinen behandelt. Dazu gehörte auch der Einsatz von Pseudoklassen, beispielsweise die Verwendung von `:checked`, um ein Ankreuzfeld nur dann zu selektieren, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen verfügbaren UI-Pseudoklassen, um Formulare in unterschiedlichen Zuständen zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
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
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was unternommen werden kann, um diese anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie kennen möglicherweise bereits die folgenden Pseudoklassen:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es mit einem Mauszeiger darüber schwebt.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. indem es über die Tastatur angesteuert wird).
- {{cssxref(":active")}}: Wählt ein Element nur, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste im Falle einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher besprechen, doch kurz gesagt, die Hauptpunkte, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielsteuerungen für Formulare, die gemäß den auf ihnen festgelegten Validierungsbeschränkungen gültig/ungültig oder in Reichweite/außer Reichweite sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie schreibgeschützte oder beschreibbare Formularsteuerungen (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)-HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen der Reihe nach auf Ankreuzfelder und Optionsfelder, die angekreuzt, in einem unbestimmten Zustand (weder angekreuzt noch nicht angekreuzt) und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked)-Attribut gesetzt oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)-Attribut gesetzt) ab.

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — lernen, aber vorerst halten wir die Dinge bezüglich der Formularvalidierung einfach, damit es nicht verwirrt.

## Eingabefelder basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bei der clientseitigen Formularvalidierung ist, ob ein Formulareingabefeld erforderlich ist (es muss ausgefüllt werden, bevor das Formular eingesendet werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich abgesendet wird.
Beispielsweise sind im folgenden Formular der Vorname und der Nachname erforderlich, die E-Mail-Adresse jedoch optional:

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

Diese beiden Zustände können Sie mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die client-seitigen Validierungsfehlermeldungen zu sehen, die Ihnen Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie das Styling von "erforderlichen" im Vergleich zu "optionalen" Elementen in Formularen allein durch Farbe vermeiden, da dies für Farbenblinde nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den jeweiligen Steuerelementen in Verbindung gebracht wird.
Im nächsten Abschnitt betrachten wir ein besseres Beispiel dafür, wie erforderliche Felder mit `:required` und generierten Inhalten angezeigt werden.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig vornehmen könnten und Stile für erforderliche Steuerelemente hinzufügen.

> [!NOTE]
> Wenn ein Ankreuzfeld in einer gleichnamigen Gruppe von Ankreuzfeldern das `required`-Attribut hat, sind alle Ankreuzfelder ungültig, bis eines ausgewählt wird, jedoch wird nur das mit dem Attribut tatsächlich {{cssxref(':required')}} entsprechen.

## Verwendung generierter Inhalte mit Pseudoklassen

In vorherigen Artikeln haben wir die Nutzung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, jetzt ist es angebracht, etwas ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhalt zu erschaffen, der vor oder nach dem betroffenen Element erscheint. Der Inhalt wird nicht dem DOM hinzugefügt, sodass er für einige Bildschirmlesegeräte unsichtbar sein kann. Da es ein Pseudoelement ist, kann es mit Stilen in derselben Weise angesprochen werden wie ein tatsächlicher DOM-Knoten.

Dies ist sehr nützlich, wenn Sie einem Element, wie z. B. einem Label oder einem Icon, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren zur Sicherstellung der Barrierefreiheit aller Benutzer ebenfalls verfügbar sind. Zum Beispiel können wir generierte Inhalte verwenden, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Optionsfelds zu behandeln, wenn ein Optionsfeld ausgewählt wird:

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

Dies ist wirklich nützlich — Bildschirmleser lassen ihre Benutzer bereits wissen, wenn ein angetroffenes Optionsfeld oder Ankreuzfeld aktiviert/ausgewählt ist, daher möchten Sie nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Platzieren generierter Inhalte auf ihnen. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen Beispiel mit erforderlichen/optionalen Feldern, dieses Mal werden wir das Erscheinungsbild des Eingabefeldes selbst nicht ändern — wir nutzen generierte Inhalte, um ein anzeigendes Label hinzuzufügen.

Zuerst fügen wir einen Absatz am Anfang des Formulars hinzu, um zu erklären, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Bildschirmlesegeräten werden "erforderlich" als zusätzliche Information hören, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen.

Wie zuvor erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um die generierten Inhalte darauf zu "hängen":

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das Span unter die Eingabe fiel, da die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, damit es ein Flex-Container wird, und sagen ihm auch, dass er seine Inhalte umbrechen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Label und die Eingabe auf separaten Zeilen stehen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es in derselben Zeile wie die Eingabe stehen kann.

Jetzt zu den generierten Inhalten. Wir erstellen sie mit diesem CSS:

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

Wir setzen das `<span>` zu `position: relative`, damit wir die generierten Inhalte zu `position: absolute` setzen und sie relativ zum `<span>` positionieren können und nicht zum `<body>` (Die generierten Inhalte verhalten sich so, als wären sie ein Kind-Knoten des Elements, auf dem sie generiert werden, um der Positionierungszwecke willen).

Dann geben wir den generierten Inhalten den Inhalt "erforderlich", was wir wollten, dass unser Label sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

## Steuerelemente basierend darauf stylen, ob deren Daten gültig sind

Das andere wirklich wichtige, fundamentale Konzept in der Formularvalidierung ist, ob die Daten eines Formularsteuerelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch von Daten innerhalb und außerhalb des Bereichs sprechen). Formularsteuerungen mit [Einschränkungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerungen mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerungen ohne Constraint-Validierung sind immer gültig und daher werden sie mit `:valid` übereinstimmen.
- Steuerungen, die `required` gesetzt haben und keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerungen mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (gematcht mit) `:invalid`, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (sie sind jedoch gültig, wenn sie leer sind).
- Steuerungen, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt wurden, werden (gematcht mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt noch einige andere Möglichkeiten, um ein Element von `:valid`/`:invalid` matchen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierte Inhalte darauf zu generieren, die wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s zu `position: relative`, damit wir die generierten Inhalte relativ zu ihnen positionieren können. Wir positionieren dann absolut unterschiedliche generierte Inhalte, je nachdem, ob die Formulardaten gültig oder ungültig sind — jeweils ein grüner Haken oder ein rotes Kreuz. Um den ungültigen Daten ein wenig zusätzliche Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Etiketten hinzuzufügen, da wir bereits `::after` für die "erforderlich" Etiketten verwenden.

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe ist andererseits gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig ist, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-Bereichs- und Außer-Bereichsdaten

Wie wir oben angedeutet haben, gibt es zwei andere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese matchen numerische Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) spezifiziert sind, wenn deren Daten innerhalb oder außerhalb des angegebenen Bereichs sind.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich sind, auch durch die Pseudoklasse `:valid` gematcht werden, und Eingaben, deren Daten außerhalb des Bereichs sind, auch durch die Pseudoklasse `:invalid` gematcht werden. Warum gibt es beide? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine präzisere Art, Ungültigkeitskommunikation zu vermitteln, sodass Sie eventuell eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Möglicherweise möchten Sie sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut, indem es auf dem vorherigen Beispiel aufbaut, um Nachrichten über Werte außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie um zu sagen, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte, die wir im vorherigen `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die für alle `::after`-Inhalte gelten, in eine separate Regel aufgeteilt und den separaten `::after`-Inhalt für `:required` und `:out-of-range`-Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs zur gleichen Zeit ist, was passiert dann? Weil die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, treten die [Cascade-Regeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) in Kraft, und die Nachricht außerhalb des erlaubten Wertebereichs wird angezeigt.

Das funktioniert recht gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter in einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb-Bereich-Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es über die Tastatur eingeben. Die Spinnertasten erlauben Ihnen nicht, den Wert außerhalb des erlaubten Bereichs hoch- oder runterzuzählen.

## Eingeschränkte und aktivierte Eingaben sowie schreibgeschützt und beschreibbar stylen

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element andererseits kann auf keine Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal kann es sein, dass, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, Sie nicht einmal diese Daten einreichen möchten, wenn sie das Formular abschicken. Ein klassisches Beispiel wäre ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden wollen; falls ja, können Sie einfach eine Adresse an den Server senden, und könnten genauso gut die Rechnungsadressfelder deaktivieren.

Werfen Sie einen Blick auf ein Beispiel, das genau dies tut. Erstens ist das HTML ein einfaches Formular mit Texteingaben sowie einem Ankreuzfeld, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben direkt die Eingaben ausgewählt, die wir deaktivieren möchten, mit `input[type="text"]:disabled`, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder zu toggeln:

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

Es verwendet das [`change`-Event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu erlauben, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugeordneten Labels umzuschalten.

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

Ähnlich wie bei `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden die Werte schreibgeschützter Eingaben jedoch an den Server gesendet. Schreibfreundlich bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit Hilfe des `readonly`-Attributs auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf den vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer alles an einem Ort überprüft, Daten hinzufügt, die noch benötigt werden, und dann die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Sehen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, sehen Sie, dass die oberste Gruppe von Formularelementen nicht bearbeitbar ist, die Werte jedoch beim Absenden des Formulars eingereicht werden. Wir haben die Formularelemente mithilfe der Pseudoklassen `:read-only` und `:read-write` wie folgt gestylt:

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

## Radio- und Ankreuzfeldzustände — checked, default, indeterminate

Wie wir in den früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "optionsfelder")}} und {{HTMLElement("input/checkbox", "Ankreuzfelder")}} entweder aktiviert oder nicht aktiviert sein. Aber es gibt noch ein paar andere zu berücksichtigende Zustände:

- {{cssxref(":default")}}: Zielt auf geeignete Optionen, Radios/Ankreuzfelder ab, die standardmäßig bei Ladebeginn der Seite aktiviert sind (durch Setzen des `checked`-Attributs auf die Optionen). Diese entsprechen der Pseudoklasse {{cssxref(":default")}}, auch wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Ankreuzfelder weder aktiviert noch deaktiviert sind, gelten sie als **unbestimmt** und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Mehr zu diesem Punkt unten.

### :checked

Wenn sie aktiviert sind, werden sie von der Pseudoklasse {{cssxref(":checked")}} erfasst.

Die gebräuchlichste Verwendung davon ist es, einen anderen Stil auf die Ankreuz- oder Optionsfelder anzuwenden, wenn sie aktiviert sind, in Fällen, in denen Sie den Standardstil des Systems mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und den Stil selbst neu aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Styling von Ankreuz- und Optionsfeldern mit `appearance`](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#styling_checkboxes_and_radio_buttons_using_appearance) gesprochen haben.

Zur Wiederholung, der `:checked`-Code aus unserem Beispiel für gestaltete Optionsfelder sieht so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Optionsfeldes mit dem Pseudoelement `::before` auf, setzen jedoch eine `scale(0)`-[`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um die generierten Inhalte auf dem Label beim Auswählen/Markieren des Optionsfeldes schön einzublenden. Der Vorteil der Verwendung einer Transformation anstelle der Änderung von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es von der Mitte des Kreises heraus wachsen zu lassen, anstatt so zu erscheinen, als ob es von der Ecke des Kreises aus wächst, und es gibt kein Springverhalten, da keine Box-Modell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt entspricht die Pseudoklasse {{cssxref(":default")}} Radios/Ankreuzfeldern, die standardmäßig bei Seitenladen aktiviert sind, auch bei tatsächlich deaktivierten Funktionen. Dies könnte für das Hinzufügen eines Indikators zu einer Liste mit Auswahlmöglichkeiten nützlich sein, um den Benutzer daran zu erinnern, was die Standardoptionen (oder Startoptionen) waren, falls er seine Entscheidungen zurücksetzen möchte.

Außerdem, die oben genannten Radios/Ankreuzfelder werden durch die Pseudoklasse {{cssxref(":indeterminate")}} gematcht, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch nicht aktiviert sind. Was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radios in einer gleichnamigen Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren Eigenschaft `indeterminate` über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nicht etwas, das Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte darin bestehen, einen Indikator bereitzustellen, um den Benutzern mitzuteilen, dass sie ein Optionsfeld wirklich auswählen müssen, bevor sie weitermachen.

Sehen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardeinstellung war, und die Labels von Optionsfeldern im unbestimmten Status stilisieren. Beide haben folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf die mittlere radio-input gesetzt, sodass diese ausgewählt ist, wenn die Seite geladen wird. Wir stylen dies mit folgendem CSS:

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

Das bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie, dass wir hier den anschließenden Geschwister-Selektor (`~`) anstelle des nächsten Geschwister-Selektors (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellordnung kommt.

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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

Für das `:indeterminate`-Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — gäbe es eines, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Optionsfelder mit folgendem CSS:

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

Das erzeugt einen netten kleinen animierten Umriss auf den Optionsfeldern, der hoffentlich anzeigt, dass Sie eines davon auswählen müssen!

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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");

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
> Sie können ein [interessantes Beispiel für unbestimmte Zustände](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen, und wir haben nicht den Platz, um alle detailliert hier zu besprechen. Lassen Sie uns über einige weitere sprechen, die Sie ausgiebig erkunden sollten.

- Die Pseudoklasse {{cssxref(":focus-within")}} entspricht einem Element, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein gesamtes Formular auf irgendeine Weise hervorheben möchten, wenn ein darin enthaltenes Eingabefeld fokussiert ist.
- Die Pseudoklasse {{cssxref(":focus-visible")}} entspricht fokussierten Elementen, die über Tastaturinteraktion fokussiert wurden (nicht durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus zeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen, deren Platzhalter angezeigt wird (d.h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), da der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut von Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht ebenfalls Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — es entspricht auch anderen {{Glossary("void_element", "void-Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browserunterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, sodass sie derzeit in keinem Browser unterstützt wird.
- Die [Pseudoklasse `:user-invalid`](/de/docs/Web/CSS/:user-invalid), wenn sie unterstützt wird, wird ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element während des Eintippens Daten als vorübergehend ungültig markieren, aber es wird nur dann als `:user-invalid` markiert, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er sowohl während der gesamten Dauer des Fokus als auch als `:user-invalid` markiert. In ähnlicher Weise wie `:invalid` wird er `:user-invalid` nicht mehr zugeordnet sein, wenn der Wert gültig wird.

## Zusammenfassung

Dies vervollständigt unseren Blick auf UI-Pseudoklassen, die im Zusammenhang mit Formulareingaben stehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formulare! Als Nächstes werden wir zu etwas anderem übergehen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
