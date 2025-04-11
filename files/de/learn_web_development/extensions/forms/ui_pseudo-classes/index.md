---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularsteuerelemente behandelt. Dies umfasste auch den Einsatz von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um eine Checkbox nur dann zu adressieren, wenn sie ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen für die Gestaltung von Formularen in unterschiedlichen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
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
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; erfahren,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z.B. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z.B. während es angeklickt wird oder die <kbd>Return</kbd> / <kbd>Enter</kbd> Taste bei einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen inzwischen vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten verschiedene nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese weiter unten im Detail besprechen, aber kurz gesagt, die Hauptpunkte, die wir ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Adressieren Elemente, die erforderlich oder optional sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Adressieren Formularelemente, die gemäß den auf ihnen festgelegten Validierungsbedingungen gültig/ungültig sind oder sich im/außerhalb des Bereichs befinden.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Adressieren Elemente, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind und ob sie schreibgeschützt oder beschreibbar sind (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Adressieren jeweils Checkboxen und Radiobuttons, die ausgewählt sind, sich in einem unbestimmten Zustand befinden (weder ausgewählt noch nicht ausgewählt) und die standardmäßig ausgewählte Option beim Laden der Seite (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgelisteten sind die offensichtlich am nützlichsten. Einige davon zielen auf sehr spezifische Nischenprobleme ab. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularsteuerelementen basierend auf ihrem Validierungszustand (Ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr darüber erfahren, wie man Validierungsbedingungen setzt und kontrolliert, im nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst werden wir die Dinge bezüglich der Formularvalidierung einfach halten, damit es nicht verwirrend wird.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte hinsichtlich der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular übermittelt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut verfügbar, das bedeutet, wenn es gesetzt ist, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich übermittelt wird.
Zum Beispiel sind der Vorname und der Nachname im untenstehenden Formular erforderlich, die E-Mail-Adresse ist jedoch optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir das folgende CSS auf das obenstehende HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rahmen und das optionale Steuerelement einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die Fehlermeldungen der clientseitigen Validierung zu sehen, die Ihnen die Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, nur Farben zur Gestaltung von 'erforderlichen' gegenüber 'optionalen' Elementen in Formularen zu verwenden, da dies für Farbenblinde nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard im Web für erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den jeweiligen Steuerungen.
Im nächsten Abschnitt werden wir uns ein besseres Beispiel für das Anzeigen erforderlicher Felder mit `:required` und generiertem Inhalt ansehen.

> [!NOTE]
> Sie werden sich wahrscheinlich nicht häufig dabei erwischen, die `:optional` Pseudoklasse zu verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden und zusätzliche Styles für erforderliche Elemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radio-Button in einer gleich benannten Gruppe von Radio-Buttons das `required` Attribut gesetzt hat, werden alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um es etwas detaillierter zu besprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Stück Inhalt wird nicht zum DOM hinzugefügt, sodass es für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Styles genauso angesprochen werden wie jedes tatsächliche DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie einer Kontrolle ein visuelles Anzeigegrafik hinzufügen möchten, wie beispielsweise ein Etikett oder Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Barrierefreiheit für alle Benutzer zu gewährleisten. Zum Beispiel verwenden wir in unserem [beispielhaften Styling für Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt wird:

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

Das ist wirklich nützlich — Screenreader informieren ihre Benutzer bereits, wenn sie einem ausgewählten/gecheckten Radio-Button oder Checkbox begegnen, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das eine Auswahl anzeigt — das könnte verwirrend sein. Ein rein visuelles Anzeigegrafik löst dieses Problem.

Nicht alle `<input>` Typen unterstützen die Platzierung von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text in sich darstellen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel mit erforderlich/optional, diesmal werden wir das Erscheinungsbild der Eingabe selbst nicht verändern — wir werden generierten Inhalt verwenden, um ein indikatives Etikett hinzufügen ([siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst werden wir einen Absatz an den Anfang des Formulars hinzufügen, der sagt, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als zusätzliche Information vorgelesen bekommen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt "aufzuhängen":

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `<span>` in eine neue Zeile unterhalb der Eingabe fiel, weil die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, aber auch, um seine Inhalte auf neue Zeilen zu umschließen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Linien sitzen, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf der gleichen Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zu dem `<span>` positionieren können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als wäre es ein untergeordnetes Knoten des Elements, auf dem es generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir möchten, dass unser Label sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (bei numerischen Daten können wir auch über Daten innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularelemente mit [Beschränkungsbedingungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Validierungsbeschränkungen sind immer gültig und werden daher mit `:valid` abgeglichen.
- Steuerelemente mit gesetztem `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` abgeglichen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (mit) `:invalid` abgeglichen, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt werden, werden (mit) `:invalid` abgeglichen, aber auch mit {{cssxref(":out-of-range")}} abgeglichen, wie Sie später sehen werden.
- Es gibt noch einige andere Möglichkeiten, um ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir werden es vorerst einfach halten.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` näher betrachten (sehen Sie [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um darauf generierten Inhalt zu erzeugen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann den generierten Inhalt absolut, abhängig davon, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um den ungültigen Daten eine etwas größere Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen hinzugefügt, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` hinzugezogen, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn etwas ausgefüllt wird. Die E-Mail-Eingabe hingegen ist gültig, wenn leer, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-Reichweite und Außer-Reichweite Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen die Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid` Pseudoklasse abgeglichen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid` Pseudoklasse abgeglichen werden. Warum also beide? Die Frage ist wirklich eine der Semantik — außer Reichweite ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie möglicherweise eine andere Meldung für außer Reichweite Eingaben bereitstellen, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Sie möchten vielleicht sogar beide bereitstellen.

Sehen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie sich auch den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) an) baut auf dem vorherigen Beispiel auf, um Nachrichten für außerhalb des Bereichs befindliche numerische Eingaben bereitzustellen, sowie ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie die, die wir zuvor im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die für jeglichen `::after` Inhalt gelten, in eine separate Regel getrennt haben und der separate `::after` Inhalt für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil erhalten haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [CSS-Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) zur Anwendung, und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und ihn mit der Tastatur eingeben. Die Spinner-Schaltflächen lassen es nicht zu, den Wert außerhalb des zulässigen Bereichs zu inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben sowie schreibgeschützten und beschreibbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit den Pseudoklassen {{cssxref(":enabled")}} und {{cssxref(":disabled")}} adressiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten nicht für einen bestimmten Benutzer gelten, möchten Sie diese Daten vielleicht überhaupt nicht übermitteln, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine Adresse an den Server senden, und könnten auch die Rechnungsadressfelder deaktivieren.

Lassen Sie uns ein Beispiel betrachten, das genau das tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben sowie einer Checkbox, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabel ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

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
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
  }
}
```

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu erlauben, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` richten sich die Pseudoklassen `:read-only` und `:read-write` an zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch an den Server übermittelt. Beschreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

\Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Stellen Sie sich einen Bestätigungsbildschirm vor, bei dem der Entwickler die auf vorherigen Seiten eingetragenen Details zu dieser Seite gesendet hat, mit dem Ziel, dass der Benutzer diese alle an einem Ort überprüft, eventuell noch notwendige Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Sehen wir uns an, wie ein Formular aussehen könnte (sehen Sie [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Gruppe von Formularelementen nicht bearbeitet werden kann, die Werte jedoch gesendet werden, wenn das Formular übermittelt wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestylt:

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

Das vollständige Beispiel sieht so aus:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Checkbox-Stati — gecheckt, Standard, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Checkboxen")}} gecheckt oder ungecheckt sein. Es gibt jedoch noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Stimmt mit Radios/Checkboxen überein, die standardmäßig geprüft werden, beim Laden der Seite (d.h. indem das `checked` Attribut auf ihnen gesetzt wird). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, auch wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Checkboxen weder gecheckt noch ungecheckt sind, werden sie als _unbestimmt_ angesehen und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Mehr dazu im Folgenden.

### :checked

Wenn gecheckt, werden sie mit der {{cssxref(":checked")}} Pseudoklasse abgeglichen.

Der häufigste Einsatz davon ist es, dem Checkbox oder Radio-Button einen anderen Stil zu geben, wenn es gecheckt ist, in Fällen, in denen Sie das Systemstandard-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir darüber gesprochen haben, [`appearance: none` auf Radios/Checkboxen zu verwenden](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes).

Zur Auffrischung sieht der `:checked` Code aus unserem [gestylten Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel wie folgt aus:

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

Im Grunde bauen wir das Styling für einen Radio-Button "inneren Kreis" mit dem `::before` Pseudoelement auf, setzen ihm aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform). Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön animieren zu lassen, wenn das Radio ausgewählt/gecheckt wird. Der Vorteil der Verwendung einer Transformation anstelle der Übergangsführung von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es vom Zentrum des Kreises wachsen zu lassen, anstatt es vom Ecke des Kreises erscheinen zu lassen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}} Pseudoklasse mit Radios/Checkboxen überein, die standardmäßig beim Laden der Seite gecheckt sind, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einer Liste von Optionen einen Indikator hinzuzufügen, um den Benutzer daran zu erinnern, was die Standards (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben erwähnten Radios/Checkboxen stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein, wenn sie in einem Zustand sind, in dem sie weder gecheckt noch ungecheckt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingänge, wenn alle Radio-Buttons in einer gleich benannten Gruppe ungecheckt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft durch JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie voraussichtlich selten verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern mitteilt, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die den Benutzern zeigen, was die Standardoption war, und die Etiketten der Radio-Buttons stilisieren, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut zum mittleren Radio-Button Eingabe hinzugefügt, sodass es beim Laden standardmäßig ausgewählt wird. Wir stylen es dann mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Subsequent-Sibling-Combinator (`~`) anstelle des unmittelbaren Geschwister-Combinator (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Source-Order kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub finden unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — das ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radio-Buttons mit dem folgenden CSS:

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

Dies erzeugt einen lustigen kleinen animierten Umriss auf den Radio-Buttons, der hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub finden unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate` Zustände beinhaltet](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes), auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, auf die wir hier nicht im Detail eingehen können. Lassen Sie uns einige weitere besprechen, die Sie genauer untersuchen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus empfangen hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert wird.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die über Keyboard-Interaktion (anstatt über Touch oder Maus) fokussiert wurden — nützlich, wenn Sie einen anderen Stil für Keyboard-Fokus im Vergleich zu Maus-(oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind auch interessant, werden jedoch noch nicht gut von Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "Void-Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine angemessene Browser-Kompatibilität; die Spezifikation der `:blank` Pseudoklasse ist noch nicht abgeschlossen, sodass sie noch von keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element eventuell `:invalid` entsprechen, während der Benutzer Daten eingibt, falls der Wert vorübergehend ungültig ist, wird jedoch erst `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es den ganzen Fokuszeitraum `:invalid` und `:user-invalid` entsprechen. In ähnlicher Weise zu `:invalid`, wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Advanced Styling: Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit beenden wir unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und kreieren Sie einige interessante Formularstile! Als nächstes werden wir uns etwas anderem zuwenden — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
