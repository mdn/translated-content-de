---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: f6844f5e30882a6a4843da9b026bc0166ade9c41
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente im Allgemeinen behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen UI-Pseudoklassen, die zum Stylen von Formularen in unterschiedlichen Zuständen zur Verfügung stehen.

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
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; zu lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die relevant für Formulare sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z. B. durch die Tabulatortaste auf der Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z. B. während es angeklickt wird oder wenn die <kbd>Eingabetaste</kbd> gedrückt wird bei einer Tastaturaktivierung).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden genauer erläutern, aber kurz gesagt, die Hauptkategorien, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularelemente, die gemäß den auf ihnen festgelegten Validierungsbeschränkungen gültig/ungültig sind, oder im Bereich/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und schreibgeschützte oder schreibbare Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Beziehen sich jeweils auf Kontrollkästchen und Optionsfelder, die markiert, in einem unbestimmten Zustand (weder markiert noch nicht markiert) und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt noch viele andere, aber die oben aufgelisteten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgelisteten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen genau testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen beziehen sich darauf, Formularelemente basierend auf ihrem Validierungszustand zu stylen (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel lernen — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für den Moment bleiben wir hinsichtlich der Formularvalidierung einfach, um keine Verwirrung zu stiften.

## Styling von Eingaben basierend auf ihrer Erforderlichkeit

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut, das, wenn gesetzt, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich abgeschickt werden kann. Zum Beispiel:

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

Hier müssen Vorname und Nachname angegeben werden, während die E-Mail-Adresse optional ist.

Diese beiden Zustände können Sie mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Hätten die erforderlichen Steuerelemente eine schwarze Umrandung und das optionale Steuerelement eine silberne Umrandung, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen der Browser zu sehen, die Ihnen standardmäßig angezeigt werden.

Das obige Formular ist nicht schlecht, aber auch nicht großartig. Zum einen signalisieren wir den Status erforderlich versus optional ausschließlich durch Farbe, was für farbenblinde Menschen nicht ideal ist. Zweitens ist die Standardkonvention im Web für den erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das mit den betreffenden Steuerelementen verknüpft ist.

Im nächsten Abschnitt werden wir uns ein besseres Beispiel dafür ansehen, wie erforderliche Felder mit `:required` gekennzeichnet werden können, das auch die Verwendung generierter Inhalte einbezieht.

> [!NOTE]
> Sie werden die `:optional` Pseudoklasse wahrscheinlich nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihre optionalen Styles einfach standardmäßig anwenden könnten und Stile für erforderliche Steuerelemente darüber hinzufügen.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required` Attribut hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur der mit dem Attribut `required` wird tatsächlich mit {{cssxref(':required')}} angesprochen.

## Verwendung von generierten Inhalten mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um etwas mehr ins Detail zu gehen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht dem DOM hinzugefügt, sodass er für einige Bildschirmlesegeräte unsichtbar sein könnte. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso angesprochen werden wie jeder echte DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie ein visuelles Indikator zu einem Element hinzufügen möchten, wie ein Etikett oder Symbol, wenn alternative Indikatoren auch für die Zugänglichkeit aller Benutzer verfügbar sind. Zum Beispiel verwenden wir in unserem [Beispiel für benutzerdefinierte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist sehr nützlich — Bildschirmlesegeräte geben ihren Benutzern bereits Bescheid, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, markiert/ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen das Hinzufügen von generierten Inhalten. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password`, oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierte Inhalte an.

Zurück zu unserem Beispiel mit erforderlichen/optionalen Feldern von vorhin, diesmal ändern wir nicht das Aussehen der Eingabe selbst — wir verwenden generierte Inhalte, um ein anzeigendes Etikett hinzuzufügen ([siehe es hier live](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und sehen Sie sich den [Quellcode hier an](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir dem Formular oben einen Absatz hinzu, der sagt, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmleser-Benutzer werden "erforderlich" als zusätzliche Information gelesen bekommen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett erhalten.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, an dem wir den generierten Inhalt anknüpfen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span` in eine neue Zeile unter der Eingabe fiel, weil die Eingabe und das Etikett beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>` so, dass es ein Flex-Container wird, und sagen ihm, dass es seinen Inhalt bei Bedarf in neue Zeilen umbricht:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

Nun zu den generierten Inhalten. Wir erstellen es mit diesem CSS:

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und es relativ zu dem `<span>` positionieren können anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein Kindknoten des Elements wäre, auf dem er erzeugt wird, zum Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was das ist, was wir wollten, dass unser Etikett sagt, und stylen und positionieren es, wie wir es möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend auf der Gültigkeit ihrer Daten

Das andere wirklich wichtige, grundlegende Konzept der Formularvalidierung ist, ob die Eingabedaten eines Formelelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch von innerhalb und außerhalb des zulässigen Bereichs sprechen). Formularelemente mit [Einschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerungen ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` angesprochen.
- Steuerungen, bei denen `required` gesetzt ist und die keinen Wert haben, zählen als ungültig — sie werden sowohl mit `:invalid` als auch mit `:required` angesprochen.
- Steuerungen mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (mit) `:invalid` angesprochen, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie erwarten (sie sind jedoch gültig, wenn sie leer sind).
- Steuerungen, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegten Bereichsgrenzen liegt, werden (mit) `:invalid` angesprochen, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, damit ein Element mit `:valid`/`:invalid` angesprochen wird, wie Sie im Artikel über [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Für jetzt halten wir es einfach.

Sehen wir uns ein Beispiel für `:valid`/`:invalid` an (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s für die generierten Inhalte, die als Indikatoren für gültige/ungültige Daten verwendet werden:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir den generierten Inhalt absolut, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um etwas mehr Dringlichkeit für die ungültigen Daten zu verleihen, haben wir den Eingaben auch eine dicke rote Umrandung verpasst, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Etiketten hinzuzufügen, da wir bereits `::after` für die "erforderlich" Etiketten verwenden.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe ist dagegen gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb und außerhalb des Wertebereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen, die zu beachten sind — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese treffen auf numerische Eingaben zu, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch von der `:valid` Pseudoklasse angesprochen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch von der `:invalid` Pseudoklasse angesprochen werden. Warum gibt es beide? Das Problem liegt wirklich bei der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen möchten, die für die Benutzer hilfreicher ist, als nur zu sagen "ungültig". Vielleicht möchten Sie sogar beides bereitstellen.

Sehen wir uns ein Beispiel an, das genau das tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) an) baut auf dem vorherigen Beispiel auf, um Nachrichten für außerhalb des Bereichs liegende numerische Eingaben bereitzustellen und auch anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie bei dem `:required` Beispiel zuvor, außer dass wir hier die Deklarationen, die für jegliche `::after` Inhalte gelten, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalten für die `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs liegt, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Kaskadierungsregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) zum Tragen, und die Nachricht für außerhalb des Bereichs wird gezeigt.

Das funktioniert ziemlich gut — wenn die Seite das erste Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe als gültig angenommen. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eingeben. Die Drehknöpfe erlauben es nicht, den Wert außerhalb des zulässigen Bereichs zu inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben sowie schreibgeschützt und schreibbar

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, darauf geklickt, darauf getippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal wenn bestimmte Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn das Formular abgeschickt wird. Ein klassisches Beispiel ist ein Versandformular — häufig wird gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandadresse verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und eventuell die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst ein einfaches Formular mit Texteingaben und einem Kontrollkästchen, um die Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind die folgenden:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiquetten ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

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

Es verwendet das [`change` Event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel in Aktion unten sehen (auch [sehen Sie es hier live](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die `:read-only` und `:read-write` Pseudoklassen auf zwei Zustände, zwischen denen Formulareingaben wechseln können. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Jedoch werden im Gegensatz zu deaktivierten Eingaben schreibgeschützte Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Als Beispiel, stellen Sie sich eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, alle erforderlichen Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Zug an den Server gesendet werden.

Sehen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Ausschnitt des HTML sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberen Formularelemente nicht bearbeitet werden können, die Werte jedoch beim Absenden des Formulars gesendet werden. Wir haben die Formularelemente mit den `:read-only` und `:read-write` Pseudoklassen gestylt, folgendermaßen:

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

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabelementen beschreiben.

## Radio- und Kontrollkästchenzustände — markiert, standardmäßig, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} markiert oder nicht markiert sein. Aber es gibt noch ein paar andere Zustände, die zu beachten sind:

- {{cssxref(":default")}}: Passt auf Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite markiert sind (d.h. durch Setzen des `checked` Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}} Pseudoklasse, auch wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder markiert noch nicht markiert sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie markiert sind, werden sie von der {{cssxref(":checked")}} Pseudoklasse angesprochen.

Der häufigste Einsatz hiervon ist es, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton anzuwenden, wenn er markiert ist, in Fällen, bei denen Sie das systemeigene Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und es selbst aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [die Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zur Wiederholung sieht der `:checked` Code aus unserem [Gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel so aus:

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

Im Wesentlichen bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem `::before` Pseudoelement auf, setzen jedoch einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um die generierten Inhalte beim Label schön in die Ansicht zu animieren, wenn das Radio ausgewählt/markiert wird. Der Vorteil eines Transformierens gegenüber der Übertragung von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises zu wachsen, anstatt dass es aus der Ecke des Kreises zu wachsen scheint, und es gibt kein springendes Verhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}} Pseudoklasse auf Radios/Kontrollkästchen, die standardmäßig beim Laden der Seite markiert sind, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standard- (oder Ausgangs-)optionen waren, falls er seine Auswahl zurücksetzen möchte.

Auch die oben erwähnten Radios/Kontrollkästchen werden von der {{cssxref(":indeterminate")}} Pseudoklasse übernommen, wenn sie sich in einem Zustand befinden, in dem sie weder markiert noch nicht markiert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichermaßen benannten Gruppe nicht markiert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Verwendungszweck könnte ein Indikator sein, der den Benutzern sagt, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie fortfahren können.

Schauen wir uns ein paar geänderte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut zum mittleren Radiobutton-Element hinzugefügt, sodass es standardmäßig ausgewählt ist, wenn geladen. Wir stylen es dann mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard" Etikett auf dem zuvor ausgewählten Element, wenn die Seite geladen wurde. Beachten Sie, dass wir hier den nachfolgenden Geschwister-Kombinator (`~`) anstatt den nächsten Geschwister-Kombinator (`+`) verwenden — das müssen wir tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellordnung kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gegeben hätte, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radiobuttons mit folgendem CSS:

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

Das erstellt einen netten kleinen animierten Rahmen um die Radiobuttons, was hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie können ein [interessantes Beispiel zu `indeterminate` Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite vom [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) finden.

## Mehr Pseudoklassen

Es gibt eine Reihe von anderen Pseudoklassen von Interesse, und wir haben nicht den Platz, um hier alle im Detail zu behandeln. Lassen Sie uns über ein paar weitere sprechen, die Sie sich näher anschauen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse passt auf ein Element, das den Fokus erhalten hat oder ein Element _enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein darin enthaltenes Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse passt auf fokussierte Elemente, die den Fokus über eine Tastaturinteraktion (anstatt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für die Tastaturfokussierung im Vergleich zur Maus (oder anderen) Fokussierung zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse passt auf {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente, die ihren Platzhalter anzeigen (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt ebenfalls auf Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es passt auch auf andere {{Glossary("inline_element", "leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browserunterstützung; die `:blank` Pseudoklasse Spezifikation ist noch nicht abgeschlossen, sodass es in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element als `:invalid` angesehen werden, wenn der Benutzer Daten eingibt und der Wert vorübergehend ungültig ist, aber es wird nur `:user-invalid` sein, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es für die gesamte Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` sein. In ähnlicher Weise wie `:invalid`, wird es aufhören, `:user-invalid` zu sein, wenn der Wert tatsächlich gültig wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Erweitertes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unsere Betrachtung der UI-Pseudoklassen, die sich auf Formulare beziehen, ab. Experimentieren Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als Nächstes beschäftigen wir uns mit etwas anderem — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
