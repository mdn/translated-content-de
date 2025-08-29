---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularelemente im Allgemeinen behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, beispielsweise die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen, um Formulare in unterschiedlichen Zuständen zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinem
        Wissen über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; und zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. wenn es über die Tastatur per Tab-Taste erreicht wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z. B., während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere weitere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten verschiedene nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden näher besprechen, aber kurz gesagt, die wichtigsten, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die je nach Eingabebeschränkungen, die auf ihnen festgelegt sind, gültig/ungültig sind, oder innerhalb/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert sein können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie aktuell aktiviert oder deaktiviert sind, und bearbeitbare oder schreibgeschützte Formularelemente (z. B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Ziel sind jeweils Kontrollkästchen und Optionsfelder, die ausgewählt sind, sich in einem unbestimmten Zustand befinden (weder ausgewählt noch nicht ausgewählt) und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen auf sehr spezifische Nischenprobleme ab. Die aufgeführten UI-Pseudoklassen haben ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Im nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — erfahren Sie viel mehr über das Festlegen und Kontrollieren von Validierungseinschränkungen, aber für den Moment halten wir die Dinge einfach in Bezug auf die Formularvalidierung, damit es nicht verwirrt.

## Eingaben stylen, basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (vor dem Absenden des Formulars ausgefüllt werden muss) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind der Vorname und der Nachname im folgenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das oben HTML anwenden:

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

Die erforderlichen Eingabefelder haben einen durchgehenden Rahmen, und die optionalen Eingabefelder haben einen gestrichelten Rahmen. Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Browser Ihnen standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' im Vergleich zu 'optionalen' Elementen in Formularen nur mit Farbe zu gestalten, da dies für Menschen mit Farbenblindheit nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das den jeweiligen Steuerelementen zugeordnet ist. Im nächsten Abschnitt werden wir uns ein besseres Beispiel für die Kennzeichnung von erforderlichen Feldern mit `:required` und generiertem Inhalt anschauen.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die Pseudoklasse `:optional` verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihre optionalen Styles standardmäßig anwenden und für erforderliche Elemente zusätzliche Styles hinzufügen könnten.

> [!NOTE]
> Wenn ein Kontrollkästchen in einer gleich benannten Gruppe von Kontrollkästchen das Attribut `required` gesetzt hat, sind alle Kontrollkästchen ungültig, bis eines ausgewählt ist. Aber nur das mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Generierten Inhalt mit Pseudoklassen verwenden

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um etwas ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der generierte Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Styles angesprochen werden, ähnlich wie bei einem tatsächlichen DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie ein visuelles Element zu einem Element hinzufügen möchten, wie ein Label oder ein Icon, wenn alternative Indikatoren verfügbar sind, um die Barrierefreiheit für alle Benutzer zu gewährleisten. Beispielsweise können wir generierten Inhalt verwenden, um die Platzierung und Animation eines benutzerdefinierten inneren Kreises des Auswahlknopfes zu steuern, wenn ein Auswahlknopf ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wann ein Auswahlknopf oder Kontrollkästchen, auf das sie stoßen, ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das eine Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Anbringen von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox` usw., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel von erforderlichen/optionalen Feldern von zuvor, werden wir diesmal das Erscheinungsbild der Eingabe selbst nicht ändern — wir verwenden generierten Inhalt, um ein kennzeichnendes Label hinzuzufügen.

Zuerst fügen wir einen Absatz oben im Formular hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer erhalten ein zusätzliches "Erforderlich", wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label erhalten.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, sodass wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzufügen, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `<span>` in eine neue Zeile unter der Eingabe fiel, da sowohl die Eingabe als auch das Label mit `width: 100%` eingestellt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` zu einem flexiblen Container, sagen ihm aber auch, dass es seine Inhalte auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt hierbei ist, dass Label und Eingabe in separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es in derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt mit `position: absolute` positionieren und relativ zum `<span>` anstatt relativ zum `<body>` positionieren können (Der generierte Inhalt verhält sich so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, zum Zweck der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "Erforderlich", was unserem Label entsprechen soll, und gestalten und positionieren es, wie wir es wünschen. Das Ergebnis ist unten zu sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten).

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

## Gestaltung von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten können wir auch von innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungsgrenzen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige wichtige Punkte, die zu beachten sind:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Elemente mit `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` übereinstimmen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">` werden (übereinstimmt mit) `:invalid`, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, werden als `:invalid` (übereinstimmt mit) gezählt, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element als `:valid`/`:invalid` zu kennzeichnen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` anschauen.

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um darauf generierten Inhalt zu erzeugen, den wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Anschließend positionieren wir je nach Gültigkeit der Formulardaten unterschiedlichen generierten Inhalt absolut — einen grünen Haken oder ein rotes Kreuz — jeweils. Um ein bisschen zusätzliche Dringlichkeit in die ungültigen Daten zu bringen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "Erforderlich"-Labels verwenden.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Beachten Sie, wie die erforderlichen Texteingaben leer ungültig sind, aber gültig werden, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe ist auf der anderen Seite gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn etwas eingegeben wird, das keine richtige E-Mail-Adresse ist.

### Innerhalb und außerhalb des Wertebereichs von Daten

Wie wir oben angedeutet haben, gibt es noch zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen die Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt werden, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs sind, jeweils entsprechend.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid`-Pseudoklasse übereinstimmen, und Eingaben, deren Daten außerhalb des Bereichs liegen, ebenso mit der `:invalid`-Pseudoklasse übereinstimmen. Warum haben wir beide? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die benutzerfreundlicher ist als nur zu sagen "ungültig". Möglicherweise möchten Sie sogar beide bereitstellen.

Lassen Sie uns ein Beispiel anschauen, das genau dies tut, indem es auf dem vorherigen Beispiel aufbaut, um Nachrichten für Eingaben außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie sagt, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie die, die wir zuvor im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt anwendbar sind, in eine separate Regel aufgeteilt haben, und den separaten `::after`-Inhalten für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, was passiert dann? Weil die `:out-of-range`-Regel im Quellcode später erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht über den Bereich außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie jedoch ein gültiges Alter (d.h. im Bereich von 12-120) eingegeben haben, wird die Eingabe gültig. Wenn Sie jedoch das Alter ändern, sodass es außerhalb des Bereichs ist, wird die Meldung "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs-Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es über die Tastatur eingeben. Die Spinner-Tasten lassen Sie den Wert nicht außerhalb des zulässigen Bereichs inkrementieren/dekrementieren.

## Styling aktivierter und deaktivierter Eingaben und schreibgeschützter und beschreibbarer Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, geklickt, geschrieben etc. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandzwecke verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadressenfelder deaktivieren.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, plus einem Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadresse Felder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben sind, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressenfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), damit der Benutzer die Rechnungsfelder aktivieren/deaktivieren und die Stilsetzung der zugehörigen Labels umschalten kann.

Sie können das Beispiel unten in Aktion sehen (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

### Schreibgeschützt und beschreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schriftlich bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird auf schreibgeschützt gesetzt, indem das `readonly`-Attribut verwendet wird. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, um den Benutzer alles an einem Ort überprüfen zu lassen, alle erforderlichen endgültigen Daten hinzuzufügen und dann die Bestellung durch Senden zu bestätigen. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte.

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitet werden kann, aber die Werte werden gesendet, wenn das Formular abgeschickt wird. Wir haben die Formulareingaben mit den Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

## Radio- und Kontrollkästchenzustände — checked, default, indeterminate

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Entspricht Radios/Kontrollkästchen, die standardmäßig ausgewählt sind, beim Laden der Seite (d.h. indem das `checked`-Attribut auf ihnen gesetzt wird). Diese stimmen mit der Pseudoklasse {{cssxref(":default")}} überein, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, werden sie als _unbestimmt_ angesehen und stimmen mit der Pseudoklasse {{cssxref(":indeterminate")}} überein. Mehr dazu weiter unten.

### :checked

Wenn ausgewählt, werden sie mit der Pseudoklasse {{cssxref(":checked")}} übereinstimmen.

Die häufigste Verwendung hierfür ist, einen anderen Stil auf das Kontrollkästchen oder Optionsfeld anzuwenden, wenn es ausgewählt ist, in den Fällen, in denen Sie die Systemstandardgestaltung mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Wir sahen Beispiele hierfür im vorherigen Artikel, als wir über die [Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Als kurze Zusammenfassung sieht der `:checked`-Code aus unserem Beispiel für gestaltete Radios so aus:

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

Grundsätzlich bauen wir die Gestaltung für den "inneren Kreis" eines Auswahlfeldes mithilfe des Pseudoelements `::before` auf, setzen jedoch eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Anschließend verwenden wir eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön animiert erscheinen zu lassen, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung einer Transformation gegenüber der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es vom Zentrum des Kreises aus wachsen zu lassen, anstatt dass es aus der Ecke des Kreises zu wachsen scheint, und es gibt kein Springen, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig ausgewählt sind, beim Laden der Seite, selbst wenn sie nicht ausgewählt werden. Dies könnte nützlich sein, um einer Liste von Optionen einen Hinweis hinzuzufügen, der den Benutzer daran erinnert, was die Standardoptionen (oder Ausgangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben erwähnten Radios/Checkboxen von der Pseudoklasse {{cssxref(":indeterminate")}} angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radios in einer gleich benannten Gruppe nicht ausgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr häufig verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darauf hinzuweisen, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie fortfahren.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels ansehen, die den Benutzer daran erinnern, was die Standardoption war und die Labels der Optionsfelder stylen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das Attribut `checked` auf das mittlere Optionsfeldelement gesetzt, sodass es standardmäßig beim Laden ausgewählt wird. Wir gestalten dies dann mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) anstelle des Nächsten-Geschwisterkombinators (`+`) verwenden — das müssen wir tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Für das `:indeterminate`-Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — wenn eines vorhanden wäre, gäbe es keinen unbestimmten Zustand zu stylen. Wir gestalten die unbestimmten Optionsfelder mit dem folgenden CSS:

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

Dies erstellt ein lustiges kleines animiertes Outline auf den Optionsfeldern, das hoffentlich anzeigt, dass Sie eines davon auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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
> Sie können ein [interessantes Beispiel mit `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um sie alle im Detail zu behandeln. Sprechen wir über einige weitere, die Sie sich genauer ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse spricht ein Element an, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein ganzes Formular hervorheben möchten, wenn ein darin befindliches Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse entspricht fokussierten Elementen, die durch Tastaturinteraktion (anstatt Berührung oder Maus) den Fokus erhalten haben — nützlich, wenn Sie einen anderen Stil für die Tastaturfokussierung im Gegensatz zur Maus- (oder anderen) Fokussierung anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse entspricht {{htmlelement('input')}}- und {{htmlelement('textarea')}}-Elementen, deren Platzhalter angezeigt wird (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber derzeit noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner — es entspricht auch anderen {{Glossary("void_element", "void-Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine gute Browserunterstützung; die Pseudoklasse `:blank`'s Spezifikation ist noch nicht abgeschlossen, sodass sie noch in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse, sobald sie unterstützt wird, wird sie der {{cssxref(":invalid")}}-Pseudoklasse ähnlich sein, aber mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element möglicherweise während der Benutzereingabe übereinstimmen `:invalid`, wenn der Wert vorübergehend ungültig ist, aber es wird nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, stimmt es für die gesamte Dauer des Fokus sowohl mit `:invalid` als auch mit `:user-invalid` überein. In ähnlicher Weise zu `:invalid` wird es aufhören, mit `:user-invalid` zu übereinstimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit ist unser Blick auf UI-Pseudoklassen abgeschlossen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige interessante Formularstile! Als nächstes werden wir uns mit etwas anderem befassen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
