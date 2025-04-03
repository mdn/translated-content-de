---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dies beinhaltete auch die Verwendung von Pseudoklassen, zum Beispiel die Nutzung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen für die Gestaltung von Formularen in unterschiedlichen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeiner
        Kenntnisse zu
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelementen</a
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

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es fokussiert ist (d.h. durch Tastaturbedienung, z.B. Tab-Taste).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn im Fall einer Tastaturaktivierung die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen jetzt vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten verschiedene nützliche Bedingungen an, die Sie nutzen können. Wir werden diese in den folgenden Abschnitten genauer besprechen, aber kurz die wichtigsten, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielelemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required)-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziele Formularelemente, die gültig/ungültig gemäß den auf ihnen festgelegten Validierungsbedingungen sind oder im/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielelemente, die deaktiviert sein können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled)-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie schreibgeschützte oder beschreibbare Formularelemente (z. B. Elemente mit dem Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Jeweils Ziele Kontrollkästchen und Optionsfelder, die markiert, in einem unbestimmten Zustand (weder markiert noch nicht markiert) und die standardmäßig ausgewählte Option beim Laden der Seite sind (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem gesetzten [`checked`](/de/docs/Web/HTML/Element/input#checked)-Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option)-Element mit dem gesetzten [`selected`](/de/docs/Web/HTML/Element/option#selected)-Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine exzellente Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen betreffen das Styling von Formularelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie werden viel mehr darüber lernen, wie Sie Validierungsbedingungen festlegen und steuern, in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir die Dinge in Bezug auf die Formularvalidierung einfach, damit es nicht verwirrend wird.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein verfügbares `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich gesendet wird.
Zum Beispiel sind der Vorname und der Nachname im untenstehenden Formular erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Elemente haben einen festen Rahmen, und das optionale Element hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular einzureichen, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Browser Ihnen standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, "erforderliche" versus "optionale" Elemente in Formularen nur mit Farben zu gestalten, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf den Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das den jeweiligen Elementen zugeordnet ist.
Im nächsten Abschnitt, schauen wir uns ein besseres Beispiel an, um erforderliche Felder mit `:required` und generierten Inhalten anzuzeigen.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional`-Pseudoklasse nicht oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig vornehmen könnten und für erforderliche Elemente zusätzliches Styling hinzufügen.

> [!NOTE]
> Wenn ein Optionsfeld in einer gleichnamigen Gruppe von Optionsfeldern das `required`-Attribut hat, sind alle Optionsfelder ungültig, bis eines ausgewählt wird, aber nur dasjenige mit dem zugewiesenen Attribut wird tatsächlich {{cssxref(':required')}} entsprechen.

## Verwenden von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um etwas ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, so dass er für einige Bildschirmleser unsichtbar sein kann. Da es sich um ein Pseudo-Element handelt, kann es in gleicher Weise mit Styles angesprochen werden wie jedes tatsächliche DOM-Element.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Label oder Icon, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren ebenfalls zur Barrierefreiheit aller Benutzer zur Verfügung stehen. Zum Beispiel verwenden wir in unserem [Beispiel für benutzerdefinierte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Optionsfeldes zu handhaben, wenn ein Optionsfeld ausgewählt ist:

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

Das ist wirklich nützlich – Bildschirmleser informieren ihre Benutzer bereits darüber, wenn ein Optionsfeld oder Kontrollkästchen, auf das sie stoßen, markiert/ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Einfügung von generierten Inhalten. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierte Inhalte.

Zurück zu unserem Beispiel "erforderlich/optional" von vorher, diesmal werden wir das Aussehen des Eingabefeldes selbst nicht ändern — wir werden generierten Inhalt verwenden, um ein Bezeichnungslabel hinzuzufügen ([siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst fügen wir dem Formular oben einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmleserbenutzer werden "erforderlich" vorgelesen bekommen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span`-Element auf eine neue Zeile unter der Eingabe fiel, da Eingabe und Label beide auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um zu einem Flex-Container zu werden und sagen ihm auch, dass er seine Inhalte auf neue Zeilen umbricht, falls der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Auswirkung ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `span`-Element eine Breite von `0` hat, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `span`-Element auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `span` positionieren können und nicht zum `body` (Der generierte Inhalt verhält sich so, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was unser Label sagen sollte, und gestalten und positionieren ihn, wie wir es möchten. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (bei numerischen Daten können wir auch von im Bereich und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungen der Einschränkung](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die zu beachten sind:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Elemente mit `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (`matched with`) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, nach dem sie suchen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max)-Attribute angegeben sind, sind (`matched with`) `:invalid`, werden aber auch durch {{cssxref(":out-of-range")}} angesprochen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, wie ein Element von `:valid`/`:invalid` angesprochen werden kann, wie Sie im Artikel [Clientseite-Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt zu erstellen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, sodass wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir absolut unterschiedlichen generierten Inhalt je nachdem, ob die formale Daten gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um den ungültigen Daten zusätzliche Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt sind. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Im- und außerhalb des Bereichs liegende Daten

Wie wir oben angedeutet haben, gibt es zwei andere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese überprüfen numerische Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch durch die `:valid`-Pseudoklasse angesprochen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, werden auch durch die `:invalid`-Pseudoklasse angesprochen. Warum beide haben? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen möchten, die hilfreicher für Benutzer sein kann als nur zu sagen "ungültig". Sie könnten sogar beide bereitstellen wollen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html)-Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie das, was wir zuvor im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalt für `:required`- und `:out-of-range`-Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs zugleich ist, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Meldung außerhalb des Bereichs wird angezeigt.

Dies funktioniert ganz gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Altersfeld dann auf ein Alter ändern, das außerhalb des Bereichs liegt, erscheint die Meldung "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eingeben. Die Spinnknöpfe lassen Sie den Wert nicht außerhalb des zulässigen Bereichs inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben und schreibgeschützten und beschreibbaren Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element hingegen kann überhaupt nicht interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten einem bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten nicht einmal senden, wenn er das Formular abschickt. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine Adresse an den Server senden, und können ebenso gut die Rechnungsanschriftfelder deaktivieren.

Schauen wir uns ein Beispiel an, dass genau dies tut. Zuallererst ist das HTML ein einfaches Formular mit Texteingaben, plus ein Kontrollkästchen, um das Deaktivieren der Rechnungsanschrift ein- und ausschalten. Die Rechnungsanschriftfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind, wie folgt:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben direkt ausgewählt, die wir mit `input[type="text"]:disabled` deaktivieren möchten, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun haben wir schließlich etwas JavaScript verwendet, um das Deaktivieren der Rechnungsanschriftfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu erlauben, die Rechnungsfelder ein-/auszuschalten und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` richten sich die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben umschalten. Wie bei deaktivierten Eingaben können Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch an den Server gesendet. Beschreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird durch das `readonly`-Attribut auf schreibgeschützt gesetzt. Stellen Sie sich ein Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie an einem Ort überprüft, alle zusätzlichen benötigten Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. In diesem Punkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir mal, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberen Formularelemente nicht bearbeitbar sind, die Werte aber beim Absenden an den Server gesendet werden. Wir haben die Formularelemente mithilfe der `:read-only`- und `:read-write`-Pseudoklassen gestaltet, wie folgt:

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

> **Hinweis**: `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände der Eingabeelemente beschreiben.

## Radio- und Kontrollkästchenzustände — überprüft, standardmäßig, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt auch ein paar andere zu beachtende Zustände:

- {{cssxref(":default")}}: Entspricht Optionsfeldern/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. indem das `checked`-Attribut auf sie gesetzt wird). Diese entsprechen der {{cssxref(":default")}}-Pseudoklasse, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Optionsfelder/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}}-Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie durch die {{cssxref(":checked")}}-Pseudoklasse angesprochen.

Der häufigste Einsatz besteht darin, einen anderen Stil auf das Kontrollkästchen oder Optionsfeld aufzubringen, wenn es aktiviert ist, in Fällen, in denen Sie das standardmäßige Systemstilierung mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen wollen. Wir haben Beispiele hierfür im vorherigen Artikel gesehen, als wir über [Die Verwendung von `appearance: none` auf Optionsfeldern/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Rückblick sieht der `:checked`-Code aus unserem Beispiel [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) so aus:

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

Im Grunde genommen bauen wir das Styling für den "inneren Kreis" eines Optionsfelds mithilfe des `::before`-Pseudoelements, setzen jedoch einen `scale(0)`-[`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt des Labels schön animiert ins Blickfeld zu bringen, wenn das Option ausgewählt/aktiviert wird. Der Vorteil der Verwendung eines Transforms anstelle der Übergangs von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie die [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es von der Mitte des Kreises aus wachsen zu lassen, statt es wachsen zu lassen, als käme es aus der Ecke des Kreises, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}}-Pseudoklasse Optionsfeldern/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite, auch wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standards (oder Startoptionen) waren, für den Fall, dass sie ihre Auswahl zurücksetzen möchten.

Außerdem werden die oben genannten Optionsfelder/Kontrollkästchen durch die {{cssxref(":indeterminate")}}-Pseudoklasse angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Zu den Elementen, die unbestimmt sind, gehören:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Optionsfelder in einer gleichnamigen Gruppe nicht aktiviert sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft via JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern zu sagen, dass sie wirklich ein Optionsfeld auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Optionsfeldern stilisieren, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut dem mittleren Optionsfeld-Input hinzugefügt, sodass es standardmäßig beim Laden ausgewählt wird. Wir stylen dies mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Artikel, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)).

Für das `:indeterminate`-Beispiel haben wir kein standardmäßig ausgewähltes Optionsfeld — das ist wichtig — wenn es eines gäbe, wäre kein unbestimmter Zustand zum Gestalten vorhanden. Wir stylen die unbestimmten Optionsfelder mit folgendem CSS:

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

Dies erstellt eine kleine animierte Umrandung auf den Optionsfeldern, was hoffentlich darauf hinweist, dass Sie eines von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate`-Zustände involviert](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes), auf der Referenzseite [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben nicht den Platz, um sie alle hier im Detail zu behandeln. Lassen Sie uns über ein paar mehr sprechen, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein ganzes Formular auf irgendeine Weise hervorheben möchten, wenn ein darin enthaltener Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse entspricht fokussierten Elementen, die den Fokus über eine Tastaturinteraktion (und nicht über Touch oder Maus) erhalten haben — nützlich, wenn Sie eine andere Stilierung für den Tastaturfokus im Vergleich zum Mausfokus (oder einem anderen) anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen, die ihren Platzhalter anzeigen (z.B. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind auch interessant, aber noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es entspricht auch anderen {{Glossary("void_element", "Leer-Tags")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browserunterstützung; die `:blank`-Pseudoklasse-Spezifikation ist noch nicht abgeschlossen, sodass sie noch in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse, wenn sie unterstützt wird, wird ähnlich wie {{cssxref(":invalid")}} sein, aber mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element vorübergehend `:invalid` entsprechen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, wird aber nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` während der gesamten Dauer des Fokus entsprechen. In ähnlicher Weise wie `:invalid` wird es aufhören `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihr Wissen: Fortgeschrittene Gestaltung](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit endet unser Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige lustige Formularstile! Als Nächstes befassen wir uns mit etwas anderem — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
