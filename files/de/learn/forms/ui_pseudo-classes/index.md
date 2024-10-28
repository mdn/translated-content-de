---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorhergehenden Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dies schloss auch die Verwendung von Pseudoklassen ein, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erforschen wir die verschiedenen UI-Pseudoklassen, die zur Gestaltung von Formularen in unterschiedlichen Zuständen zur Verfügung stehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, inklusive allgemeinem
        Wissen über
        <a
          href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >Pseudoklassen und Pseudoelemente</a
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

## Welche Pseudoklassen stehen zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es fokussiert ist (d.h., wenn es über die Tastatur angesteuert wird).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (d.h., während es angeklickt wird, oder wenn

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  im Fall einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese weiter unten im Detail besprechen, aber kurz gesagt, die wichtigsten, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielt auf Elemente ab, die erforderlich sein können (z.B. Elemente, die das HTML-Attribut [`required`](/de/docs/Web/HTML/Attributes/required) unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielt auf Formularsteuerelemente ab, die gemäß den auf ihnen festgelegten Validierungsbeschränkungen gültig/ungültig oder im Bereich/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielt auf Elemente ab, die deaktiviert werden können (z.B. Elemente, die das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, sowie auf schreibgeschützte oder schreibgeschützte Steuerelemente (z.B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielt auf Kontrollkästchen und Optionsfelder, die entsprechend ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt), und standardmäßig ausgewählte Option beim Laden der Seite sind (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem `checked`-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option)-Element mit dem `selected`-Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine hervorragende Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularsteuerelementen basierend auf ihrem Validierungszustand (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr über das Setzen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel erfahren — [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — aber vorerst halten wir die Dinge hinsichtlich der Formularvalidierung einfach, damit es nicht verwirrend wird.

## Eingaben gestalten basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte zur clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular übermittelt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das verfügbar ist und bedeutet, wenn es gesetzt ist, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich übermittelt wird. Zum Beispiel:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Steuerelemente hätten einen schwarzen Rand und das optionale Steuerelement würde einen silbernen Rand haben, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular zu übermitteln, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die die Browser Ihnen standardmäßig geben.

Das obige Formular ist nicht schlecht, aber auch nicht großartig. Zum einen signalisieren wir den erforderlichen gegenüber dem optionalen Status nur durch Farben, was für farbenblinde Menschen nicht ideal ist. Zweitens ist die Standardkonvention im Web für den erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das den betreffenden Steuerelementen zugeordnet ist.

Im nächsten Abschnitt werden wir uns ein besseres Beispiel für die Anzeige erforderlicher Felder unter Verwendung von `:required` ansehen, das auch in die Verwendung generierter Inhalte eintaucht.

> [!NOTE]
> Sie werden wahrscheinlich feststellen, dass Sie die Pseudoklasse `:optional` nicht sehr häufig verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling einfach standardmäßig anwenden und Styles für erforderliche Steuerelemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Optionsfeld in einer Gruppe von Optionsfeldern mit demselben Namen das `required`-Attribut gesetzt hat, sind alle Optionsfelder ungültig, bis eines ausgewählt wird, aber nur das mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung generierter Inhalte mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, es wäre jetzt ein guter Zeitpunkt, um ausführlicher darauf einzugehen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Styles in gleicher Weise wie jedes tatsächliche DOM-Element angesprochen werden.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Etikett oder einem Symbol, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [Beispiel für benutzerdefinierte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Optionsfeldes zu steuern, wenn ein Optionsfeld ausgewählt wird:

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

Dies ist sehr nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein von ihnen angetroffenes Optionsfeld oder Kontrollkästchen ausgewählt/markiert ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Anzeige generierter Inhalte. Alle Eingabetypen, die dynamischen Text in ihnen enthalten, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen erforderlichen/optionalen Beispiel, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern—wir verwenden generierte Inhalte, um ein hinweisendes Etikett hinzuzufügen ([siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst werden wir dem Formular einen Absatz hinzufügen, um zu sagen, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer hören "erforderlich" als zusätzlichen Informationssektor, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett sehen.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, auf das der generierte Inhalt angewendet wird:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `span` in eine neue Zeile unter der Eingabe fiel, da die Eingabe und das Etikett beide mit `width: 100%` festgelegt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>` als Flex-Container, geben ihm aber auch an, seinen Inhalt zu umschließen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung besteht darin, dass das Etikett und die Eingabe in separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es in der gleichen Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Etikett sagt, und stylen und positionieren es nach unseren Wünschen. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Gestaltung der Steuerelemente basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, fundamentale Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerische Daten können wir auch von im Bereich und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungslimitierungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Elemente ohne Einschränkungsvalidierung sind immer gültig, und werden daher mit `:valid` übereinstimmt.
- Elemente mit `required` auf ihnen gesetzt, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` übereinstimmt.
- Elemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, werden (übereinstimmt mit) `:invalid`, wenn die in sie eingegebenen Daten nicht mit dem erwarteten Muster übereinstimmen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichslimits liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) spezifiziert sind, werden (übereinstimmt mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, wie ein Element mit `:valid`/`:invalid` übereinstimmen kann, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten die Dinge für jetzt einfach.

Lassen Sie uns ein einfaches Beispiel für `:valid`/`:invalid` ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um Inhalte zu generieren, die wir nutzen werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir das `<span>` auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir unterschiedliche Inhalte abhängig davon, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, entsprechend. Um dem ungültigen Data ein wenig mehr Dringlichkeit zu verleihen, haben wir den Eingaben außerdem einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Beschriftungen hinzuzufügen, da wir schon `::after` für die "erforderlich" Beschriftungen verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn sie ausgefüllt werden. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig wird, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten im Bereich und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichslimits durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, entsprechend.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist beachtenswert, dass Eingaben, deren Daten im Bereich liegen, auch durch die Pseudoklasse `:valid` übereinstimmt werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die Pseudoklasse `:invalid` übereinstimmt werden. Warum also beide haben? Das Problem ist in der Tat ein semantisches – außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie vielleicht eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die hilfreicher für Benutzer ist als nur "ungültig" zu sagen. Sie könnten sogar beide bereitstellen möchten.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Meldungen außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie um zu sagen, ob sie erforderlich sind.

Die numerische Eingabe sieht wie folgt aus:

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

Dies ist eine ähnliche Geschichte wie bei dem vorherigen `:required` Beispiel, außer dass wir hier die Deklarationen, die auf jegliche `::after` Inhalte anwendbar sind, in eine separate Regel aufgeteilt haben und den separaten `::after` Inhalten für die `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahlen-Eingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel in der Quellcode-Liste später erscheint als die `:required` Regel, kommen die [Kaskadenregelungen](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) ins Spiel, und die Nachricht außerhalb des Bereichs wird angezeigt.

Das funktioniert sehr gut—wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingetippt haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch dann den Alterswert in einen ändern, der außerhalb des Bereichs liegt, wird die "Außerhalb des zulässigen Wertebereichs" statt "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs Wert einzugeben, müssen Sie sich tatsächlich auf das Formular konzentrieren und ihn mit der Tastatur eingeben. Die Spinnertasten lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen/verringern.

## Styling aktivierter und deaktivierter Eingaben sowie schreibgeschützt und schreibgeschützt

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht relevant sind, möchte man diese Daten beim Senden des Formulars vielleicht nicht einmal senden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadressfelder einfach deaktivieren.

Werfen wir einen Blick auf ein Beispiel, das genau das tut. Zuerst ist das HTML ein einfaches Formular, das Texteingaben enthält, sowie ein Kontrollkästchen, um die Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die wichtigsten Teile dieses Beispiels sind wie folgt:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da die Etiketten direkt vor ihren Eingaben sind, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Jetzt haben wir schließlich ein wenig JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Etiketten umzustellen.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibgeschützt

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden die schreibgeschützten Eingabewerte jedoch an den Server übermittelt. Schreibgeschützt bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` auf schreibgeschützt gesetzt. Stellen Sie sich ein Bestätigungsformular vor, in dem der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüfen, alle erforderlichen Daten hinzufügen und dann die Bestellung durch Einreichen bestätigen kann. An diesem Punkt können alle endgültigen Formulardaten in einem Durchgang an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht wie folgt aus – beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Gruppe von Formularelementen nicht bearbeitet werden kann, aber die Werte werden übertragen, wenn das Formular übergeben wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände der Eingabeelemente beschreiben.

## Radio- und Kontrollkästchenzustände — ausgewählt, standardmäßig, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Passt auf Radios/Kontrollkästchen, die standardmäßig ausgewählt sind, beim Laden der Seite (d.h. durch Setzen des `checked`-Attributes auf ihnen). Diese passen zur Pseudoklasse {{cssxref(":default")}}, selbst wenn die Benutzer sie deaktivieren.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, gelten sie als _unbestimmt_ und passen zur Pseudoklasse {{cssxref(":indeterminate")}}. Mehr dazu weiter unten.

### :checked

Wenn sie ausgewählt sind, werden sie von der Pseudoklasse {{cssxref(":checked")}} angesprochen.

Die häufigste Verwendung hierfür ist, ein anderes Styling auf das Kontrollkästchen oder Optionsfeld anzuwenden, wenn es ausgewählt ist, in Fällen, in denen Sie das systemeigene Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Wiederholung sieht der `:checked` Code aus unserem [Beispiel für gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) so aus:

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

Im Wesentlichen bauen wir das Styling für den "inneren Kreis" eines Optionsfeldes mit dem Pseudoelement `::before` auf, setzen jedoch einen `scale(0)`-[`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt am Etikett schön animiert sichtbar zu machen, wenn das Radio ausgewählt/markiert ist. Der Vorteil der Verwendung einer Transformation statt dem Übergang von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt dass es so aussieht, als würde es aus der Ecke des Kreises wachsen, und es entsteht kein Springen, da keine Kastenmodell-Werte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, spricht die Pseudoklasse {{cssxref(":default")}} auf Radios/Kontrollkästchen an, die standardmäßig ausgewählt sind, beim Laden der Seite, selbst wenn sie nicht ausgewählt sind. Dies könnte nützlich sein, um einem Satz von Optionen einen Indikator hinzuzufügen, um den Benutzer daran zu erinnern, welche die Standardeinstellungen (oder Startoptionen) waren, falls sie ihre Entscheidungen zurücksetzen möchten.

Ebenfalls, die oben genannten Radios/Kontrollkästchen werden von der Pseudoklasse {{cssxref(":indeterminate")}} angesprochen, wenn sie in einem Zustand sind, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Optionsfelder in einer gruppe mit demselben Namen deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist wahrscheinlich etwas, das Sie nicht sehr häufig verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer daran zu erinnern, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie weitermachen können.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, welche die Standardoption war, sowie die Etiketten der Optionsfelder beim unbestimmten Zustand darstellen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf die mittlere Optionsfeldeingabe gesetzt, sodass sie beim Laden standardmäßig ausgewählt ist. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Etikett auf dem Element, das ursprünglich bei Laden der Seite ausgewählt war. Beachten Sie hier, dass wir den Nachbarschafts-Sibling-Kombinator (`~`) anstelle des Geschwisterkombinator (`+`) verwenden – wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellordnung folgt.

Sehen Sie das Ergebnis unten live:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate`-Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld – das ist wichtig – wenn es eines gäbe, wäre kein unbestimmter Zustand vorhanden, den es zu stylen gäbe. Wir stylen die unbestimmten Optionsfelder mit dem folgenden CSS:

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

Dies erzeugt eine lustige kleine animierte Umrisslinie auf den Optionsfeldern, die hoffentlich anzeigt, dass Sie eines von ihnen auswählen müssen!

Sehen Sie das Ergebnis unten live:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie können ein [interessantes Beispiel zu `indeterminate`-Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer Pseudoklassen von Interesse, und wir haben hier nicht den Platz, um sie alle im Detail zu beschreiben. Lassen Sie uns über einige sprechen, die Sie untersuchen sollten.

- Die Pseudoklasse {{cssxref(":focus-within")}} spricht ein Element an, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin den Fokus erhält.
- Die Pseudoklasse {{cssxref(":focus-visible")}} spricht fokussierte Elemente an, die den Fokus über die Tastatur erhalten haben (anstatt durch Berührung oder Maus) — nützlich, wenn Sie für Tastaturfokus einen anderen Stil anzeigen möchten als für Maus- (oder andere) Fokus.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} spricht {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elemente an, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attributes), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}}-Elemente stimmen ebenfalls mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} ab. `:empty` hat eine angemessene Browser-Unterstützung; die Pseudoklasse `:blank`-Spezifikation ist noch nicht abgeschlossen, daher wird sie bisher von keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element übereinstimmt mit `:invalid` sein, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, aber nur mit `:user-invalid` übereinstimmt, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es während der gesamten Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` übereinstimmen. In ähnlicher Weise wie `:invalid` hört es auf, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter damit herum und erstellen Sie einige interessante Formularstile! Als nächstes widmen wir uns einem anderen Thema — der [client-seitigen Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularkomponenten](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
