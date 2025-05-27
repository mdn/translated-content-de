---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularelemente auf allgemeine Weise behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu adressieren, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen verfügbaren UI-Pseudoklassen zur Gestaltung von Formularen in verschiedenen Zuständen.

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
        Verständnis darüber, welche Teile von Formularen schwer zu gestalten
        sind und warum; erlernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z. B. wenn es über die Tastatur angesteuert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z. B. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste im Falle einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen inzwischen vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese weiter unten im Detail besprechen, aber kurz gesagt, die Hauptkategorien, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielgerichtete Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen)), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Formularelemente, die gemäß den an ihnen festgelegten Formularvalidierungsbeschränkungen gültig/ungültig sind oder sich innerhalb/außerhalb des Bereichs befinden, adressieren.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Elemente adressieren, die deaktiviert sein können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und Lese-/Schreib-Beschränkungen (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Selektieren Sie respektiv Kontrollkästchen und Optionsfelder, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) und die standardmäßig bei Seitenaufruf ausgewählte Option (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribut, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier diskutierten Pseudoklassen befasst sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?) Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel lernen — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für den Moment halten wir es einfach in Bezug auf die Formularvalidierung, um keine Verwirrung zu stiften.

## Eingaben nach Erforderlichkeit gestalten

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional ist.

Die {{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut zur Verfügung, was bedeutet, dass dieser Steuerungselemente ausgefüllt werden müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind im untenstehenden Formular Vorname und Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eee;
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

Die erforderlichen Steuerungselemente haben einen soliden Rahmen, und das optionale Steuerungselement hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die die Browser Ihnen standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, erforderliche versus optionale Elemente in Formularen nur mit Farben zu gestalten, da dies für farbenblinde Personen nicht optimal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für erforderlich ist ein Sternchen (`*`), oder das Wort „erforderlich“ in Verbindung mit den jeweiligen Steuerelementen. Im nächsten Abschnitt werden wir uns ein besseres Beispiel ansehen, wie erforderliche Felder mit `:required` und generiertem Inhalt angezeigt werden.

> [!NOTE]
> Sie werden die `:optional` Pseudoklasse wahrscheinlich nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, so dass Sie Ihre optionale Gestaltung einfach standardmäßig vornehmen könnten und zusätzliche Stile für erforderliche Steuerelemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichen Gruppe von Radio-Buttons das `required` Attribut hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur der mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwenden von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um darüber etwas detaillierter zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Inhaltsstück wird nicht in das DOM eingefügt, sodass es für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso gezielt werden, als wäre es ein tatsächlicher DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie ein Label oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [Benutzerdefinierte Radiobuttons-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader informieren ihre Benutzer bereits darüber, wenn ein Radiobutton oder Kontrollkästchen, das sie antreffen, aktiviert/ausgewählt ist, sodass Sie nicht wollen, dass sie ein weiteres DOM-Element vorlesen, das eine Auswahl anzeigt — das könnte verwirrend sein. Einen rein visuellen Indikator zu haben, löst dieses Problem.

Nicht alle `<input>` Typen unterstützen es, generierten Inhalt auf sich selbst zu haben. Alle Eingabetypen, die darin dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem vorhergehenden Beispiel erforderlich/optional, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern — wir verwenden generierten Inhalt, um ein anzeigendes Etikett hinzuzufügen ([hier live ansehen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir einen Absatz am Anfang des Formulars hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden „erforderlich“ als zusätzliche Information hören, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, sodass wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzufügen, an dem wir den generierten Inhalt aufhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Ein sofortiges Problem dabei war, dass das Span unten auf eine neue Zeile unterhalb der Eingabe fiel, weil sowohl die Eingabe als auch das Etikett mit `width: 100%` eingestellt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` so, dass es ein Flex-Container wird, sagen ihm aber auch, dass es seine Inhalte auf neue Zeilen wickeln soll, wenn die Inhalte zu lang werden:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt, den dies hat, ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` haben, aber das `<span>` eine Breite von `0` hat, damit es auf der gleichen Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` statt zum `<body>` positionieren können (Der generierte Inhalt verhält sich so, als wäre es ein Kindknoten des Elements, auf dem er generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt „erforderlich“, was das ist, was wir wollten, dass unser Etikett sagt, und gestalten und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerelemente basierend auf der Gültigkeit der Daten gestalten

Das andere wirklich wichtige, grundlegende Konzept der Formularvalidierung ist, ob die Daten eines Formularelements gültig oder nicht sind (im Fall von numerischen Daten können wir auch von Daten innerhalb oder außerhalb des Bereichs sprechen). Formularelemente mit [Beschränkungen der Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) können auf Grundlage dieser Zustände gezielt werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} adressieren. Einige Punkte, die zu beachten sind:

- Steuerelemente ohne Beschränkungen der Validierung sind immer gültig und daher werden mit `:valid` abgeglichen.
- Steuerelemente mit gesetztem `required`, die keinen Wert haben, werden als ungültig gewertet — sie werden mit `:invalid` und `:required` abgeglichen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (mit) `:invalid` abgeglichen, wenn die eingegebenen Daten nicht dem Muster entsprechen, nach dem sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, werden (mit) `:invalid` abgeglichen, aber auch durch {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es für jetzt einfach.

Lassen Sie uns in ein Beispiel für `:valid`/`:invalid` eintauchen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt darauf zu erzeugen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir absolut unterschiedlichen generierten Inhalt, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, respektive. Um der ungültigen Daten etwas Dringlichkeit zu verleihen, haben wir den Eingaben auch eine dicke rote Umrandung gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlichen" Labels benutzt hatten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Textfelder ungültig sind, wenn sie leer sind, aber gültig, wenn etwas eingegeben ist. Die E-Mail-Eingabe ist andererseits gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet gibt es zwei andere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese treffen auf numerische Eingaben zu, bei denen die Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, respektive.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch durch die `:valid` Pseudoklasse abgeglichen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die `:invalid` Pseudoklasse abgeglichen werden. Warum beide haben? Die Frage ist wirklich eine der Semantik — außerhalb des Bereichs ist eine spezifischere Art und Weise, eine ungültige Kommunikation auszudrücken. Daher möchten Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen, was hilfreicher für Benutzer sein kann als nur "ungültig" zu sagen. Vielleicht möchten Sie sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) an) baut auf dem vorherigen Beispiel auf, um Nachrichten für Daten außerhalb des Bereichs für die numerische Eingaben bereitzustellen, sowie zu sagen, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte zu dem, was wir vorher im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die für alle `::after` Inhalte gelten, in eine separate Regel eingebaut haben, und den separaten `::after` Inhalte für die `:required` und `:out-of-range` Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die numerische Eingabe sowohl erforderlich als auch außer Bereich gleichzeitig ist, was passiert dann? Weil die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Cascade-Regeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie dann ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht „Außerhalb des zulässigen Wertebereichs“ anstelle von „Erforderlich“.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eintippen. Die Spinnertasten lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen/verringern.

## Steuerelemente basierend auf der Erreichbarkeit und Schreibrechte gestalten

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, getippt werden, etc. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können durch {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gezielt werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht anwendbar sind, möchten Sie diese Daten möglicherweise nicht einmal einreichen, wenn der Benutzer das Formular abschickt. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungsstellung und Versand verwenden möchten; in diesem Fall können Sie einfach eine einzige Adresse an den Server senden und könnten die Rechnungsfelder genauso gut deaktivieren.

Sehen wir uns ein Beispiel an, das genau das tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, außerdem ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse umzuschalten. Die Rechnungsadressen-Felder sind standardmäßig deaktiviert.

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
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren wollten, direkt ausgewählt mit `input[type="text"]:disabled`, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben liegen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) selektiert.

Schließlich haben wir ein wenig JavaScript verwendet, um das Deaktivieren der Rechnungsadressenfelder umzuschalten:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer die Möglichkeit zu geben, die Rechnungsfelder zu aktivieren/deaktivieren und den Stil der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibschutz und Schreibrechte

In ähnlicher Weise zu `:disabled` und `:enabled` adressieren die `:read-only` und `:read-write` Pseudoklassen zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server übermittelt. Schreibrechte bedeuten, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird auf schreibgeschützt gesetzt, indem das `readonly` Attribut verwendet wird. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Informationen, die auf vorherigen Seiten ausgefüllt wurden, auf diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, alle noch benötigten Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTML ist wie folgt — beachten Sie das `readonly` Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitbar ist, jedoch werden die Werte übermittelt, wenn das Formular abgeschickt wird. Wir haben die Formularelemente mit den `:read-only` und `:read-write` Pseudoklassen gestaltet, so:

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}
```

Das gesamte Beispiel sieht so aus:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — aktiviert, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radioknöpfe")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt auch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Stimmt mit Radios/Kontrollkästchen überein, die standardmäßig aktiviert sind, beim Seitenaufruf (d.h. indem das `checked` Attribut auf ihnen gesetzt wird). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, auch wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Mehr dazu unten.

### :checked

Wenn aktiviert, stimmen sie mit der {{cssxref(":checked")}} Pseudoklasse überein.

Der häufigste Anwendungsfall dafür ist es, einen anderen Stil auf das Kontrollkästchen oder den Radioknopf anzuwenden, wenn er aktiviert ist, in Fällen, in denen Sie das Systemstandard-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Zusammenfassung sieht der `:checked` Code aus unserem [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel so aus:

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

Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/styling-examples/radios-styled.html", '100%', 200)}}

Grundsätzlich bauen wir das Styling für einen Radiobuttons "inneren Kreis" unter Verwendung des `::before` Pseudoelements auf, setzen jedoch ein `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön sichtbar zu animieren, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil, einen Transform anstelle von Übergängen von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) zu verwenden, ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises heraus wachsen zu lassen, anstatt es aus der Ecke des Kreises erscheinen zu lassen, und es gibt kein Springverhalten, da keine Box-Model-Eigenschaften aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}} Pseudoklasse mit Radios/Kontrollkästchen überein, die standardmäßig aktiviert sind, beim Seitenaufruf, auch wenn sie deaktiviert werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standards (oder Startoptionen) waren, für den Fall, dass sie ihre Auswahl zurücksetzen möchten.

Ebenfalls stimmen die oben genannten Radios/Kontrollkästchen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, beinhalten:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radioknöpfe in einer gleich benannten Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft via JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist wahrscheinlich nichts, was Sie sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der Benutzer darauf hinweist, dass sie wirklich eine Radiobutton auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar modifizierte Versionen des vorhergehenden Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Radioknöpfe bei unbestimmtem Zustand gestalten. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut zu dem mittleren Radioknopf hinzugefügt, damit es beim Laden der Seite standardmäßig ausgewählt wird. Wir gestalten dies mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard" Etikett auf dem Element, das ursprünglich beim Laden der Seite ausgewählt wurde. Beachten Sie, dass wir hier den nachfolgende Geschwister-Kombinator (`~`) anstelle des nächsten Geschwister-Kombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellordnung kommt.

Sehen Sie sich das Live-Ergebnis unten an:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radioknopf — das ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zu gestalten. Wir gestalten die unbestimmten Radioknöpfe mit dem folgenden CSS:

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

Dies erstellt eine lustige kleine animierte Umrandung um die Radioknöpfe, was hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie finden ein [interessantes Beispiel mit unbestimmten Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben nicht den Platz, um über alle im Detail zu schreiben. Lassen Sie uns kurz über ein paar weitere sprechen, die Sie sich genauer ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular auf irgendeine Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus über Tastaturinteraktion erhalten haben (anstatt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter anzeigen (das, was im [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut angegeben ist), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "Leer-Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine akzeptable Browserunterstützung; die `:blank` Pseudoklasse wurde noch nicht fertig spezifiziert, also wird sie noch in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, aber mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element während der Eingabe als temporär ungültig `:invalid` zugeordnet werden, aber es wird nur dann als `:user-invalid` zugeordnet, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er während der gesamten Zeit, in der er den Fokus hat, sowohl mit `:invalid` als auch mit `:user-invalid` zugeordnet. Auf ähnliche Weise wie `:invalid` stellt es das Zuordnen von `:user-invalid` ein, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Überblick über UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen, und erstellen Sie einige unterhaltsame Formularstile! Als nächstes wechseln wir zu etwas anderem — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
