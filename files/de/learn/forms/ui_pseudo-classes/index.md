---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 90b468a1759678b30b4a570b1ad0b1337fc01c43
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dies beinhaltete auch die Verwendung einiger Pseudoklassen, beispielsweise `:checked` um ein Auswahlkästchen nur anzuvisieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für die Gestaltung von Formularen in verschiedenen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich allgemeinem Wissen über
        <a href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">Pseudoklassen und Pseudoelemente</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es im Fokus steht (d. h. wenn es über die Tastatur angesteuert wird).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d. h. während darauf geklickt wird oder wenn die

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  Taste bei einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen jetzt vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Kriterien, mit denen Sie arbeiten können. Wir werden diese weiter unten genauer besprechen, aber kurz gesagt sind die Hauptkriterien, die wir uns ansehen werden:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularelemente ab, die gemäß den darauf gesetzten Validierungseinschränkungen gültig oder ungültig sind, oder innerhalb oder außerhalb des zulässigen Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und auf lese-/schreib- oder nur lesbare Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen respektive auf Auswahlkästchen und Radiobuttons ab, die markiert, in einem unbestimmten Zustand (weder markiert noch nicht markiert) sind, und auf die standardmäßig ausgewählte Option, wenn die Seite lädt (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgelisteten sind am offensichtlich nützlichsten. Einige von ihnen sind auf die Lösung sehr spezifischer Nischenprobleme ausgerichtet. Die oben gelisteten UI-Pseudoklassen haben ausgezeichnete Browserunterstützung, aber natürlich sollten Sie Ihre Formulumsetzungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier diskutierten Pseudoklassen beziehen sich auf die Gestaltung von Formularelementen basierend auf ihrem Validierungszustand (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr über das Festlegen und Steuern von Validierungseinschränkungen in unserem nächsten Artikel erfahren — [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — aber vorerst halten wir die Dinge einfach bezüglich der Formularvalidierung, damit es nicht verwirrend wird.

## Eingaben basierend darauf gestalten, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte hinsichtlich der Client-seitigen Formularvalidierung ist, ob eine Formular-Eingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgesendet werden kann) oder optional.

Die Elemente {{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} haben das `required` Attribut verfügbar, welches, wenn gesetzt, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich abgesendet wird. Zum Beispiel:

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

Sie können diese beiden Zustände mithilfe der {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Beispielsweise, wenn wir das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Kontrollen hätten einen schwarzen Rand, und die optionale Kontrolle hätte einen silbernen Rand, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular ohne das Ausfüllen abzusenden, um die Standard-Validierungsfehlermeldungen zu sehen, die Ihnen die Browser geben.

Das obige Formular ist nicht schlecht, aber auch nicht großartig. Zum Beispiel signalisieren wir erforderlichen und optionalen Status nur durch Farbe, was nicht gut für farbenblinde Menschen ist. Zweitens ist die Standardkonvention im Web für erforderlichen Status ein Sternchen (`*`), oder das Wort "erforderlich", das mit den in Frage kommenden Kontrollen verbunden ist.

Im nächsten Abschnitt schauen wir uns ein besseres Beispiel zur Kennzeichnung erforderlicher Felder mithilfe von `:required` an, bei dem auch generierter Inhalt verwendet wird.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig vornehmen und zusätzliche Stile für erforderliche Elemente hinzufügen können.

> [!NOTE]
> Wenn ein einzelner Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das `required` Attribut gesetzt hat, werden alle Radio-Buttons ungültig sein, bis einer ausgewählt ist, jedoch wird nur der mit dem Attribut zugeordnete tatsächlich der {{cssxref(':required')}} Pseudoklasse entsprechen.

## Verwenden von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um etwas detaillierter darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Inhaltsstück vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsabschnitt wird nicht zum DOM hinzugefügt, so dass er für einige Bildschirmlesegeräte unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es ebenfalls mit Stilen angesprochen werden, so wie es bei einem tatsächlichen DOM-Knoten der Fall wäre.

Dies ist wirklich nützlich, wenn Sie ein visuelles Indikator zu einem Element hinzufügen möchten, wie ein Etikett oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel, in unserem [Beispiel für benutzerdefinierte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html), verwenden wir generierten Inhalt zur Steuerung der Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radio-Buttons, wenn ein Radio-Button ausgewählt wird:

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

Dies ist wirklich nützlich — Bildschirmleser informieren ihre Benutzer bereits, wenn ein Radio-Button oder Auswahlkästchen, das sie antreffen, ausgewählt/markiert ist, daher möchten Sie nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Wenn hier ein rein visueller Indikator verwendet wird, löst er dieses Problem.

Nicht alle `<input>`-Typen unterstützen generierten Inhalt. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password`, oder `button`, zeigen generierten Inhalt nicht an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderliche/optionale Felder, diesmal werden wir das Aussehen der Eingabe selbst nicht verändern — wir verwenden generierten Inhalt, um ein kennzeichnendes Etikett hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir einen Absatz oben im Formular hinzu, um zu erklären, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Bildschirmlesegeräten hören "erforderlich", wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Etikett sehen.

Wie bereits erwähnt, unterstützen Texteingabefelder keinen generierten Inhalt, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, auf dem der generierte Inhalt untergebracht wird:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass das `span` auf eine neue Zeile unterhalb der Eingabe fiel, weil sowohl die Eingabe als auch das Etikett auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um zu einem Flex-Container zu werden, sagen ihm aber auch, dass es seine Inhalte auf neue Zeilen umbrennen soll, wenn die Inhalte zu lang werden:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Etikett und die Eingabe auf getrennten Linien sitzen, weil beide `width: 100%` haben, aber das `<span>` eine Breite von `0` hat, sodass es in derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, statt zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Text "erforderlich", was wir wollten, dass unser Etikett diesen angibt, und gestalten und positionieren ihn so, wie wir es möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Gestalten von Kontrollen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über im Bereich und außerhalb des Bereichs sprechen). Formulareingaben mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen anvisiert werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} anvisieren. Einige Punkte, die Sie beachten sollten:

- Felder ohne Validierungseinschränkungen sind immer gültig und werden daher mit `:valid` abgeglichen.
- Felder mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` abgeglichen.
- Felder mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, nach dem sie suchen (aber sie sind gültig, wenn leer).
- Felder, deren aktueller Wert außerhalb der Bereichsbeschränkungen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, werden als `:invalid` angesehen, aber auch von {{cssxref(":out-of-range")}} erfasst, wie Sie später sehen werden.
- Es gibt noch andere Möglichkeiten, ein Element mit `:valid`/`:invalid` zu matchen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Lassen Sie uns ein einfaches Beispiel von `:valid`/`:invalid` betrachten (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s zum Generieren von Inhalten, die wir verwenden, um Indikatoren für gültige oder ungültige Daten anzuzeigen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir absolut unterschiedliche generierte Inhalte, abhängig davon, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein wenig zusätzliche Dringlichkeit bei ungültigen Daten hinzuzufügen, haben wir den Eingaben eine dicke rote Umrandung gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Beschriftungen hinzuzufügen, da wir bereits `::after` für die "erforderlich" Beschriftungen verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas gefüllt sind. Das E-Mail-Feld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen, die berücksichtigt werden sollten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese erfassen numerische Eingaben, bei denen die Bereichsbeschränkungen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten innerhalb des Bereichs liegen, auch durch die Pseudoklasse `:valid` erfasst werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die Pseudoklasse `:invalid` erfasst werden. Warum also beide verwenden? Das Problem ist wirklich eine Frage der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, weshalb Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen möchten, die für Benutzer hilfreicher ist als nur „ungültig“ zu sagen. Sie könnten sogar beide bereitstellen wollen.

Betrachten wir ein Beispiel, das genau das tut. Unsere [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) an) baut auf dem vorherigen Beispiel auf, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

Die numerische Eingabe sieht wie folgt aus:

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

Und das CSS sieht wie folgt aus:

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

Dies ist eine ähnliche Geschichte wie im vorherigen Beispiel mit `:required`, außer dass wir hier die Deklarationen, die für jeden `::after` Inhalt gelten, in eine separate Regel unterteilt haben und dem separaten `::after` Inhalt für die `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Kaskadenregeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) ins Spiel und die Nachricht außerhalb des Bereichs wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zunächst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und einer Umrandung. Wenn Sie dann ein gültiges Alter eingeben (d. h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen außerhalb des Bereichs liegenden Wert ändern, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es über die Tastatur eingeben. Die Drehknöpfe lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen/verringern.

## Gestalten von aktivierten und deaktivierten Eingaben und nur-lesbarer und schreibbarer Zustände

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt, usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal zum Server gesendet.

Diese beiden Zustände können mithilfe der {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudoklassen anvisiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, wenn Daten auf einen bestimmten Benutzer nicht zutreffen, möchten Sie möglicherweise nicht einmal diese Daten senden, wenn er das Formular absendet. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandadresse verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und können die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau das tut. Zuerst ist das HTML ein einfaches Formular, das Texteingabefelder enthält, sowie ein Auswahlkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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
      <label for="pcode1">Zip/postal code: </label>
      <input id="pcode1" name="pcode1" type="text" required />
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
      <label for="pcode2" class="billing-label disabled-label">
        Zip/postal code:
      </label>
      <input id="pcode2" name="pcode2" type="text" disabled required />
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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausblenden. Da die Etiketten direkt vor ihren Eingaben stehen, haben wir sie mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun haben wir zuletzt etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um den Benutzer die Rechnungsfelder ein- oder ausschalten zu lassen, und die Stile der zugeordneten Etiketten umzuschalten.

Sie können das Beispiel unten live sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Nur-lesen und schreibbar

Ähnlich wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten. Genau wie bei deaktivierten Eingaben kann der Benutzer nur-lesbare Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch nur-lesbare Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Ein Eingabefeld wird mit dem Attribut `readonly` auf nur-lesend gesetzt. Als Beispiel stellen Sie sich eine Bestätigungsseite vor, auf der der Entwickler die Details von vorherigen Seiten an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüfen, notwendige Daten hinzufügen und dann die Bestellung bestätigen kann, indem er abschickt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Teil des HTML sieht folgendermaßen aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberen Formularelemente nicht bearbeitbar sind, jedoch werden die Werte beim Absenden des Formulars gesendet. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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

## Radio- und Auswahlkästchenzustände — checked, default, indeterminate

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Auswahlkästchen")}} markiert oder nicht markiert sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Passt auf Radios/Auswahlkästchen, die standardmäßig markiert sind, beim Laden der Seite (d. h. durch Setzen des `checked` Attributs darauf). Diese passen zur {{cssxref(":default")}} Pseudoklasse, auch wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Auswahlkästchen weder markiert noch nicht markiert sind, werden sie als _unbestimmt_ betrachtet und werden auf die {{cssxref(":indeterminate")}} Pseudoklasse passen. Mehr dazu unten.

### :checked

Wenn sie markiert sind, werden sie auf die {{cssxref(":checked")}} Pseudoklasse passen.

Die häufigste Verwendung hiervon besteht darin, dem Auswahlkästchen oder Radio-Button einen anderen Stil hinzuzufügen, wenn er markiert ist, in Fällen, in denen Sie das standardmäßige Systemstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wiederaufbauen wollen. Wir haben Beispiele dazu im vorherigen Artikel gesehen, als wir über das [Verwenden von `appearance: none` auf Radios/Auswahlkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Wiederholung sieht der `:checked` Code aus unserem [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel so aus:

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

Im Grunde bauen wir das Styling für den "inneren Kreis" eines Radio-Buttons mit dem `::before` Pseudoelement auf, aber setzen einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label sanft erscheinen zu lassen, wenn das Radio ausgewählt/markiert wird. Der Vorteil der Verwendung einer Transformation statt der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt dass es scheinbar aus einer Ecke des Kreises wächst, und es gibt kein Springverhalten, da keine Boxmodell-Werte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}} Pseudoklasse auf Radios/Auswahlkästchen, die standardmäßig beim Start der Seite markiert sind, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen waren, falls er seine Auswahl zurücksetzen möchte.

Zusätzlich werden die oben genannten Radios/Auswahlkästchen von der {{cssxref(":indeterminate")}} Pseudoklasse erfasst, wenn sie in einem Zustand sind, in dem sie weder markiert noch nicht markiert sind. Was bedeutet das? Elemente, die unbestimmt sind, beinhalten:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht markiert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft via JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Einsatzzweck könnte ein Indikator sein, der den Benutzern mitteilt, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Radiobuttons stilisieren, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut auf den mittleren Radiobutton-Eingabefeld gesetzt, sodass es standardmäßig beim Laden ausgewählt ist. Wir haben dies mit dem folgenden CSS gestaltet:

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

Dies bietet ein kleines "Standard" Etikett auf dem Element, das ursprünglich beim Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) statt des direktbenachbarten Geschwisterkombinators (`+`) verwendet haben — wir müssen dies tun, weil das `<span>` nicht direkt nach der `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) an).

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand, der stilisiert werden könnte. Wir gestalteten die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erstellt einen kleinen animierten Umriss auf den Radiobuttons, was hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) an).

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate` Zustände beinhaltet](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes), auf der Seite für [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen und wir haben hier nicht genügend Platz, um alle im Detail zu besprechen. Sprechen wir über ein paar mehr, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse wählt ein Element aus, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular auf eine bestimmte Art hervorgehoben wird, wenn ein Eingabefeld darin fokussiert wird.
- Die {{cssxref(":focus-visible")}} Pseudoklasse wählt fokussierte Elemente aus, die den Fokus über eine Tastaturinteraktion erhalten haben (statt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zum Mausfokus (oder anderem) anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse wählt {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente aus, die ihren Platzhalter anzeigen (d. h. der Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut unterstützt in den Browsern:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt auch auf Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner — es passt auch auf andere {{Glossary("void_element", "leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine gute Browserunterstützung; die Spezifikation für die `:blank` Pseudoklasse ist noch nicht fertig, also wird sie noch von keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, bietet aber eine bessere Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element während der Nutzereingabe `:invalid` entsprechen, wenn der Wert vorübergehend ungültig ist, aber es wird nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der ursprüngliche Wert ungültig war, entspricht er während der gesamten Fokussierungsdauer sowohl `:invalid`, als auch `:user-invalid`. Ähnlich wie bei `:invalid` wird `:user-invalid` nicht mehr zutreffen, falls der Wert dann gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unser Studium der UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als nächstes werden wir zu etwas anderem übergehen — [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript versenden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
