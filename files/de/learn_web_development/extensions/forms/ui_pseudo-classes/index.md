---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: eb57948631233d5099c11cb450ed964eee175ff4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente auf allgemeine Weise behandelt. Dies beinhaltete einige Verwendungen von Pseudoklassen, zum Beispiel das Verwenden von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die verfügbar sind, um Formulare in verschiedenen Zuständen zu stylen.

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
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen sind verfügbar?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z.B. durch das Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z.B. während es angeklickt wird, oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd> Taste im Falle einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten jetzt vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen in Bezug auf HTML-Formulare. Diese bieten mehrere nützliche Zielkriterien, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher behandeln, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularsteuerungen ab, die gültig/ungültig gemäß den auf ihnen festgelegten Validierungsbeschränkungen sind, oder innerhalb/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und schreibgeschützte oder beschreibbare Formularsteuerungen (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut gesetzt).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielt respektive auf Kontrollkästchen und Optionsfelder ab, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt), und die standardmäßig ausgewählte Option beim Laden der Seite sind (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut gesetzt oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut gesetzt).

Es gibt viele andere, aber die oben aufgeführten sind die am offensichtlichsten nützlichen. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben hervorragende Browser-Unterstützung, aber natürlich sollten Sie Ihre Formulardurchführungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel lernen — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir die Dinge einfach in Bezug auf die Formularvalidierung, um keine Verwirrung zu stiften.

## Styling von Eingaben basierend auf ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte in Bezug auf die clientseitige Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut zur Verfügung, das, wenn es gesetzt ist, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich gesendet werden kann. Zum Beispiel sind im folgenden Formular der Vorname und der Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerungen haben einen durchgehenden Rand und die optionale Steuerelemente einen gestrichelten Rand. Sie können auch versuchen, das Formular ohne Ausfüllung einzureichen, um die standardmäßig von den Browsern bereitgestellten clientseitigen Validierungsfehlermeldungen zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie das Styling von "erforderlichen" gegenüber "optionalen" Elementen in Formularen mit nur Farben vermeiden, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für den Status "erforderlich" ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den jeweiligen Steuerungen. Im nächsten Abschnitt werden wir uns ein besseres Beispiel dafür ansehen, wie Sie erforderliche Felder mit `:required` und generiertem Inhalt anzeigen.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional` Pseudoklasse nicht oft verwenden. Formularsteuerungen sind standardmäßig optional, so dass Sie Ihr optionales Styling standardmäßig durchführen können und nur für erforderliche Steuerelemente Stile hinzufügen müssen.

> [!NOTE]
> Wenn ein Optionsfeld in einer gruppe mit demselben Namen das Attribut `required` gesetzt hat, sind alle Optionsfelder ungültig, bis eines ausgewählt wird, aber nur das mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} gematcht.

## Verwenden von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, es wäre jetzt eine gute Zeit, um darüber etwas ausführlicher zu sprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudo-Elemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um vor oder nach dem betroffenen Element ein Stück Inhalt erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Bildschirmleser unsichtbar sein kann. Da es sich um ein Pseudo-Element handelt, kann es mit Stilen genauso wie jeder echte DOM-Knoten angesprochen werden.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Etikett oder einer Ikone, einen visuellen Indikator hinzufügen möchten, während alternative Indikatoren auch für alle Benutzer zugänglich sind. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Beispiel für Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Optionsfelds zu steuern, wenn ein Optionsfeld ausgewählt wird:

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

Dies ist wirklich nützlich — Bildschirmleser informieren ihre Benutzer bereits darüber, wenn ein Optionsfeld oder ein Kontrollkästchen, das sie treffen, ausgewählt ist, Sie möchten also nicht, dass sie einen anderen DOM-Knoten vorlesen, der die Auswahl anzeigt — das könnte verwirrend sein. Einen rein visuellen Indikator zu haben, löst dieses Problem.

Nicht alle `<input>` Typen unterstützen das Setzen von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text in sich zeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional, dieses Mal werden wir nicht das Aussehen des Eingabefelds selbst ändern — wir verwenden generierten Inhalt, um ein kennzeichnendes Etikett hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst fügen wir dem Formular einen Absatz hinzu, um zu sagen, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Bildschirmlesegeräten werden "erforderlich" als zusätzlichen Informationsteil hören, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Etikett sehen werden.

Wie bereits erwähnt, unterstützen Textfelder keinen generierten Inhalt, also fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass das span in eine neue Zeile unter der Eingabe fiel, weil sowohl die Eingabe als auch das Etikett mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, und sagen ihm auch, dass es seinen Inhalt auf neue Zeilen wickeln soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Etikett und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber der `<span>` hat eine Breite von `0`, sodass er auf derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen den `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können statt relativ zum `<body>` (Der generierte Inhalt verhält sich wie ein Kindknoten des Elements, auf dem er generiert wird, was das Positionieren betrifft).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Etikett sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis sieht man unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerungen stylen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularsteuerungen mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerungen mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerungen ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` gematcht.
- Steuerungen mit `required` gesetzt, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` gematcht.
- Steuerungen mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">` werden (gematcht mit) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (sind jedoch gültig, wenn sie leer sind).
- Steuerungen, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) spezifiziert sind, werden (gematcht mit) `:invalid`, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` zu matchen, wie Sie in dem Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und schauen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, auf denen wir Inhalt generieren, die wir verwenden, um Indikatoren für gültige/ungültige Daten zu liefern:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir absolut andere generierte Inhalte, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um den ungültigen Daten etwas mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Etiketten hinzuzufügen, da wir bereits `::after` für die "erforderlich" Etiketten verwendet hatten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas gefüllt enthalten. Das E-Mail-Feld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine korrekte E-Mail-Adresse ist.

### Daten innerhalb des Bereichs und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese beziehen sich auf numerische Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) definiert sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` gematcht werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` gematcht werden. Warum also beide haben? Das Problem ist eigentlich eines der Semantik — "außerhalb des Bereichs" ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen, die für Benutzer hilfreicher sein könnte als nur zu sagen "ungültig". Sie möchten möglicherweise sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um außermittige Bereichsnachrichten für die numerischen Eingaben bereitzustellen, sowie um zu sagen, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte zu dem, was wir zuvor im `:required` Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeden `::after` Inhalt zutreffen, in eine separate Regel aufgeteilt haben, und den separaten `::after` Inhalt für die `:required` und `:out-of-range` Zustände jeweils eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, greifen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ein, und die Nachricht "Außerhalb des erlaubten Wertebereichs" wird angezeigt.

Dies funktioniert ganz gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen außerhalb des Bereichs liegenden Eintrag ändern, erscheint die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und den Wert mit der Tastatur eingeben. Die Spinnertasten lassen Sie den Wert nicht außerhalb des erlaubten Bereichs inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben und von schreibgeschützten und beschreibbaren Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, beschrieben werden, usw. Ein deaktiviertes Element hingegen kann nicht auf irgendeine Weise interagiert werden, und seine Daten werden nicht einmal zum Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten nicht auf einen bestimmten Benutzer zutreffen, möchten Sie möglicherweise nicht einmal, dass diese Daten gesendet werden, wenn sie das Formular senden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadressfelder einfach deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst ist HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen, um das Aktivieren/Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textetiketten ausgrauen. Da die Etiketten direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Schließlich haben wir etwas JavaScript verwendet, um das Aktivieren/Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um den Benutzer das Aktivieren/Deaktivieren der Rechnungsfelder zu ermöglichen und das Styling der zugehörigen Etiketten umzuschalten.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und schauen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Anders als deaktivierte Eingaben werden die Werte von schreibgeschützten Eingaben jedoch zum Server gesendet. Beschreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, den Benutzer alles an einem Ort überprüfen zu lassen, alle benötigten Enddaten hinzuzufügen und dann die Bestellung durch Absenden zu bestätigen. Zu diesem Zeitpunkt können alle finalen Formulardaten auf einmal zum Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitbar ist, jedoch werden die Werte beim Absenden des Formulars gesendet. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestylt:

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

## Radio- und Kontrollkästchenzustände — checked, default, indeterminate

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder nicht aktiviert sein. Es gibt aber auch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Entspricht den Optionsfeldern/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. durch Setzen des `checked` Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}} Pseudoklasse, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Optionen/Kontrollkästchen weder aktiviert noch deaktiviert sind, werden sie als _unbestimmt_ betrachtet und entsprechen der Pseudoklasse {{cssxref(":indeterminate")}}. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie mit der {{cssxref(":checked")}} Pseudoklasse gematcht.

Die häufigste Verwendung hierfür ist das Hinzufügen eines anderen Stils auf das Kontrollkästchen oder Optionsfeld, wenn es aktiviert ist, in Fällen, in denen Sie das systemeigene Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über [Using `appearance: none` on radios/checkboxes](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Zur Wiederholung, der `:checked` Code unseres Beispiels [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) sieht so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Optionsfeldes mit dem `::before` Pseudoelement auf, setzen aber eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Etikett sanft in die Ansicht zu animieren, wenn das Optionsfeld ausgewählt/aktiviert ist. Der Vorteil der Verwendung einer Transformation anstelle einer Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es vom Zentrum des Kreises aus wachsen zu lassen, anstatt es aus einer Ecke des Kreises erscheinen zu lassen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftenwerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudoklasse den Optionsfeldern/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite, auch wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben erwähnten Optionen/Kontrollkästchen mit der {{cssxref(":indeterminate")}} Pseudoklasse gematcht, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Optionsfelder in einer Gruppe mit demselben Namen nicht aktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft auf `true` gesetzt ist, über JavaScript
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nur selten verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern anzeigt, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die dem Benutzer zeigen, welche Option standardmäßig war, und die Etiketten von Optionsfeldern stylen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut auf dem mittleren Optionsfeld hinzugefügt, sodass es standardmäßig ausgewählt ist, wenn es geladen wird. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard" Etikett auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Kombinator für nachfolgende Geschwister (`~`) anstelle des Kombinators für nächste Geschwister (`+`) verwenden — wir müssen dies tun, weil das `<span>` nach dem `<input>` in der Quellreihenfolge nicht direkt folgt.

Das Live-Ergebnis sehen Sie unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) an).

Für das `:indeterminate` Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — wenn es das gäbe, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Optionsfelder mit dem folgenden CSS:

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

Dies erstellt eine lustige kleine animierte Umrandung auf den Optionsfeldern, die hoffentlich darauf hinweist, dass Sie eines davon auswählen müssen!

Das Live-Ergebnis sehen Sie unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) an).

> [!NOTE]
> Sie können ein [interessantes Beispiel mit `indeterminate` Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen, und wir haben nicht genug Platz, um hier ausführlich über alle zu schreiben. Lassen Sie uns über ein paar weitere sprechen, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein darin enthaltener Eingang fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse entspricht fokussierten Elementen, die durch eine Tastaturinteraktion fokussiert wurden (anstatt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für den Keyboard-Fokus im Vergleich zu Maus (oder anderem) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bislang nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht ebenfalls Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es entspricht auch anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht abgeschlossen und wird daher in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn der Eingang den Fokus erhält, kann das Element mit `:invalid` gematcht werden, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, aber es wird nur mit `:user-invalid` gematcht, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, entspricht es `:invalid` und `:user-invalid` für die gesamte Dauer des Fokus. Ähnlich wie bei `:invalid`, hört es auf, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen herum und erstellen Sie einige lustige Formularstile! Als Nächstes wenden wir uns etwas anderem zu — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
