---
title: UI-Pseudo-Klassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir das Styling von verschiedenen Formularsteuerungen allgemein behandelt. Dazu gehörte auch die Verwendung von Pseudo-Klassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudo-Klassen, die zum Styling von Formularen in verschiedenen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich allgemeinem Wissen über
        <a
          href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >Pseudo-Klassen und Pseudo-Elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; zu lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudo-Klassen stehen zur Verfügung?

Die ursprünglichen Pseudo-Klassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es mit einem Mauszeiger darüber gefahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d. h. durch das Navigieren mit der Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, während es aktiviert wird (d. h. während es angeklickt wird oder wenn im Fall einer Tastaturaktivierung die Taste <kbd>Return</kbd> / <kbd>Enter</kbd> gedrückt wird).

Diese grundlegenden Pseudo-Klassen sollten Ihnen inzwischen vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudo-Klassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden detaillierter besprechen, aber kurz zusammengefasst sind die wichtigsten, die wir uns ansehen werden:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielgerichtete Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielgerichtete Formularsteuerelemente, die gültig oder ungültig gemäß den für sie festgelegten Formularvalidierungsbeschränkungen oder innerhalb der Reichweite oder außerhalb der Reichweite sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielgerichtete Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und Lese-Schreib- oder Nur-Lese-Formularsteuerelemente (z. B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly) versehen).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielgerichtet auf Kontrollkästchen und Optionsfelder, die aktiviert sind, sich in einem unbestimmten Zustand befinden (weder aktiviert noch nicht aktiviert) und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen richten sich an sehr spezifische Nischenprobleme. Die oben aufgeführten UI-Pseudo-Klassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudo-Klassen befassen sich mit dem Styling von Formularsteuerelementen basierend auf ihrem Validierungsstatus (Ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel erfahren — [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — aber vorerst halten wir die Dinge in Bezug auf die Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein verfügbares `required` Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich eingereicht wird. Zum Beispiel:

```html
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
      <label for="email">
        Email address (include if you want a response):
      </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Submit</button></div>
  </fieldset>
</form>
```

Hier sind der Vorname und der Nachname erforderlich, aber die E-Mail-Adresse ist optional.

Sie können diese beiden Zustände mit den Pseudo-Klassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Hätten die erforderlichen Steuerelemente einen schwarzen Rand, und das optionale Steuerelement hätte einen silbernen Rand, wie unten gezeigt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser standardmäßig anzeigen.

Das obige Formular ist nicht schlecht, aber es ist auch nicht großartig. Zum einen signalisieren wir erforderlichen gegen optionalen Status nur durch Farbe, was für farbenblinde Menschen nicht ideal ist. Zweitens ist die Standardkonvention im Web für erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das mit den betreffenden Steuerelementen verbunden ist.

Im nächsten Abschnitt werden wir ein besseres Beispiel für die Anzeige erforderlicher Felder mithilfe von `:required` untersuchen, das auch auf die Verwendung von generiertem Inhalt eingeht.

> [!NOTE]
> Sie werden die `:optional` Pseudo-Klasse wahrscheinlich nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie Ihr optionales Styling standardmäßig anwenden und Stile für erforderliche Steuerelemente darüber hinaus hinzufügen.

> [!NOTE]
> Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required` Attribut gesetzt hat, sind alle Optionsfelder ungültig, bis eines ausgewählt wurde, aber nur das mit dem vergebenen Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudo-Klassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um ein bisschen mehr darüber zu sprechen.

Die Idee ist, dass wir die Pseudo-Elemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Inhaltsstück wird nicht zum DOM hinzugefügt, sodass es für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudo-Element handelt, kann es auf die gleiche Weise mit Stilen angesprochen werden wie jedes tatsächliche DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Etikett oder einem Symbol, einen visuellen Hinweis hinzufügen möchten, wenn alternative Indikatoren verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [beispielhaften benutzerdefinierten Optionsfeldern](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um den Platz und die Animation des inneren Kreises eines benutzerdefinierten Optionsfelds zu handhaben, wenn ein Optionsfeld ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Optionsfeld oder Kontrollkästchen, auf das sie treffen, aktiviert/ausgewählt ist. Daher möchten Sie nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Setzen von generiertem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password`, oder `button` zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel mit erforderlich/optional von vorher, diesmal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern — wir werden generierten Inhalt verwenden, um ein hinweisendes Label hinzuzufügen ([siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir einen Absatz am Anfang des Formulars hinzu, um zu beschreiben, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als zusätzliche Information vorgelesen bekommen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label erhalten.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, an dem der generierte Inhalt aufgehängt wird:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das Span auf eine neue Zeile unter der Eingabe fiel, da die Eingabe und das Etikett beide auf `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` als Flex-Container, der seine Inhalte auch auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

Nun zum generierten Inhalt. Wir erstellen es mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und diesen relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Label sagt, und gestalten und positionieren es so, wie wir es wünschen. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularsteuerelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über innerhalb oder außerhalb des Bereichs sprechen). Formularsteuerelemente mit [Einschränkungsbedingungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudo-Klassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die beachtet werden sollten:

- Steuerelemente ohne Eingabebeschränkung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Steuerelemente mit festgelegtem `required`, die keinen Wert haben, zählen als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (entsprechend) `:invalid`, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, sind (entsprechend) `:invalid`, aber auch mit {{cssxref(":out-of-range")}} übereinstimmend, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, um ein Element mit `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

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

Wie zuvor, setzen wir die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut verschiedene generierte Inhalte, abhängig davon, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, entsprechend. Um ein wenig zusätzliche Dringlichkeit zu den ungültigen Daten zu geben, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich" Labels verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn etwas ausgefüllt ist. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei andere verwandte Pseudo-Klassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, entsprechend.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid` Pseudo-Klasse übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid` Pseudo-Klasse übereinstimmen. Warum also beide haben? Es handelt sich hier wirklich um ein semantisches Problem — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben anzeigen möchten, die für die Benutzer hilfreicher sein wird als einfach "ungültig" zu sagen. Sie könnten sogar beide bereitstellen wollen.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um außerhalb des Bereichs liegende Nachrichten für die numerischen Eingaben bereitzustellen, sowie um anzuzeigen, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie wir es zuvor im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeden `::after` Inhalt angewendet werden, in eine separate Regel aufgeteilt haben, und dem separaten `::after` Inhalt für die `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stilisierung gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist, sodass was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Überschreibungsregeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) ins Spiel, und die außerhalb des Bereichs liegende Nachricht wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite zum ersten Mal lädt, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie jedoch ein gültiges Alter eingeben (d. h. im Bereich von 12 bis 120), wird die Eingabe gültig. Wenn Sie jedoch dann das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es über die Tastatur eingeben. Die Schaltflächen zum Erhöhen/Verringern lassen den Wert nicht außerhalb des zulässigen Bereichs.

## Styling von aktivierten und deaktivierten Eingaben sowie Lese- und Schreibschutz

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interactied werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten auf einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal einreichen, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten genauso gut die Rechnungsadressfelder deaktivieren.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Zuerst einmal ist das HTML ein einfaches Formular, das Texteingaben enthält, plus ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse an- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da sich die Etiketten direkt vor ihren Eingaben befinden, haben wir diese mit der Pseudo-Klasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Abschließend haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Bezeichnungen umschalten.

Sie können das Beispiel in Aktion unten sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Nur-Lese und Lese-Schreibschutz

In ähnlicher Weise wie `:disabled` und `:enabled` zielen die Pseudo-Klassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten. Wie bei deaktivierten Eingaben kann der Benutzer keine Nur-Lese-Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch die Werte von Nur-Lese-Eingaben an den Server gesendet. Lese-Schreibschutz bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` auf Nur-Lese gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf den vorherigen Seiten ausgefüllt wurden, auf diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie an einem Ort überprüft, alle erforderlichen Schlussinformationen hinzufügt und dann die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Lassen Sie uns ansehen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das Attribut readonly:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Reihe von Formularelementen nicht bearbeitbar ist, die Werte jedoch gesendet werden, wenn das Formular abgesendet wird. Wir haben die Formularelemente mit den Pseudo-Klassen `:read-only` und `:read-write` wie folgt formatiert:

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

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudo-Klassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — ausgewählt, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "radio buttons")}} und {{HTMLElement("input/checkbox", "checkboxes")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände, die zu berücksichtigen sind:

- {{cssxref(":default")}}: Entspricht Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite aktiviert sind (d. h. durch Setzen des `checked` Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}} Pseudo-Klasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder ausgewählt noch abgewählt sind, werden sie als _unbestimmt_ angesehen und entsprechen der {{cssxref(":indeterminate")}} Pseudo-Klasse. Mehr dazu unten.

### :checked

Wenn sie ausgewählt sind, werden sie mit der {{cssxref(":checked")}} Pseudo-Klasse übereinstimmen.

Die häufigste Verwendung davon ist, einen anderen Stil auf das Kontrollkästchen oder das Optionsfeld anzuwenden, wenn es ausgewählt ist, in Fällen, in denen Sie das systemeigene Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir [die Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) besprochen haben.

Als Rückblick sieht der `:checked` Code aus unserem [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel so aus:

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

Im Grunde bauen wir das Styling für den "inneren Kreis" eines Optionsfelds mit dem `::before` Pseudo-Element auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Etikett schön in das Sichtfeld zu animieren, wenn das Radio ausgewählt/gecheckt ist. Der Vorteil der Verwendung einer Transformation anstelle der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie `transform-origin` verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt aus der Ecke des Kreises zu erscheinen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudo-Klasse Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite aktiviert sind, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, der den Benutzer daran erinnert, was die Standardeinstellungen (oder Anfangsoptionen) waren, falls sie ihre Entscheidungen zurücksetzen möchten.

Auch werden die oben erwähnten Radios/Kontrollkästchen mit der {{cssxref(":indeterminate")}} Pseudo-Klasse übereinstimmen, wenn sie sich in einem Zustand befinden, in dem sie weder ausgewählt noch nicht ausgewählt sind. Was bedeutet das? Elemente, die indeterminiert sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Optionsfelder in einer gleichnamigen Gruppe nicht markiert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft durch JavaScript auf `true` gesetzt wird
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist wahrscheinlich etwas, das Sie nicht sehr oft verwenden werden. Einer der Anwendungsfälle könnte ein Indikator sein, um den Benutzern zu sagen, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels ansehen, die den Benutzer daran erinnern, was die Standardoption war, und die Etiketten von Optionsfeldern beim indeterminierten Zustand stilisieren. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut dem mittleren Eingabefeld des Optionsfeldes hinzugefügt, sodass es beim Laden standardmäßig ausgewählt wird. Wir stilisieren dies mit dem folgenden CSS:

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

Dies liefert beim Standardmäßig ausgewählten Element eine kleine "Standard"-Beschriftung. Beachten Sie, dass wir hier den nachfolgenden Geschwister-Kombinator (`~`) anstelle des nächsten Geschwister-Kombinator (`+`) verwendet haben — wir müssen dies tun, da die `<span>` nicht direkt nach der `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)) finden.

Für das `:indeterminate` Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — wenn es eines gäbe, dann gäbe es keinen indeterminierten Zustand, den man stilisieren könnte. Wir gestalten die indeterminierten Optionsfelder mit dem folgenden CSS:

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

Dies erzeugt ein lustiges kleines animiertes Highlight auf den Optionsfeldern, das hoffentlich darauf hinweist, dass Sie eines auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)) finden.

> [!NOTE]
> Auf der Seite der [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Referenzseite finden Sie ein [interessantes Beispiel mit `indeterminierte` Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes).

## Weitere Pseudo-Klassen

Es gibt eine Anzahl anderer interessanter Pseudo-Klassen, und wir haben nicht genug Platz, um sie alle hier im Detail zu behandeln. Lassen Sie uns über einige weitere sprechen, die Sie sich die Zeit nehmen sollten, sie zu untersuchen.

- Die {{cssxref(":focus-within")}} Pseudo-Klasse entspricht einem Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein gesamtes Formular in irgendeiner Weise hervorheben möchten, wenn ein darin enthaltenes Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudo-Klasse entspricht fokussierten Elementen, die den Fokus über Tastaturinteraktion (und nicht über Berührung oder Maus) erhalten haben — nützlich, wenn Sie für Tastaturfokus einen anderen Stil zeigen möchten als für Maus- (oder anderen) Fokus.
- Die {{cssxref(":placeholder-shown")}} Pseudo-Klasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen, bei denen der Platzhalter angezeigt wird (d. h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind auch interessant, aber noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudo-Klasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber sie ist allgemeiner — sie entspricht auch anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die `:blank` Pseudo-Klasse ist in ihrer Spezifikation noch nicht abgeschlossen, daher wird sie noch in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudo-Klasse, wenn unterstützt, wird ähnlich wie {{cssxref(":invalid")}} sein, aber mit besserer Benutzererfahrung. Wenn der Wert valid ist, wenn die Eingabe den Fokus erhält, kann das Element, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, `:invalid` entsprechen, aber es wird nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` für die gesamte Dauer des Fokus entsprechen. In ähnlicher Weise wie `:invalid` wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Dies vervollständigt unseren Überblick über UI-Pseudo-Klassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formularstile! Als Nächstes widmen wir uns einem anderen Thema — [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitäts-Tabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
