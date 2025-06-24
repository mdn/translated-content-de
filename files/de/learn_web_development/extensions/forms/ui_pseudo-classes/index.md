---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente im Allgemeinen behandelt. Dazu gehörte auch die Nutzung von Pseudoklassen, beispielsweise die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zum Styling von Formularen in verschiedenen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich
        allgemeinem Wissen über
        <a href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum,
        und zu lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z.B. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird, oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen in Bezug auf HTML-Formulare. Diese bieten mehrere nützliche Zielbedingungen, von denen Sie profitieren können. Wir werden diese ausführlicher in den folgenden Abschnitten diskutieren, aber kurz gesagt, die wichtigsten, die wir ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z.B. Elemente, die das HTML-Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required) unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gültig oder ungültig gemäß den auf ihnen gesetzten Validierungsbeschränkungen sind, oder sich im Bereich oder außerhalb des Bereichs befinden.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert werden können (z.B. Elemente, die das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie Schreib- oder Nur-Lese-Formularsteuerungen (z.B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) gesetzt).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Beziehen sich jeweils auf Kontrollkästchen und Radioknöpfe, die aktiviert, in einem unbestimmten Zustand (weder aktiviert noch nicht aktiviert) sind, und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z.B. eine [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) gesetzt, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) gesetzt).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Form-Implementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen ist damit beschäftigt, Formularsteuerungen basierend auf ihrem Validierungszustand zu stylen (sind ihre Daten gültig oder nicht?). Sie lernen viel mehr über das Setzen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir es bezüglich der Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Eingaben anhand der Anforderung oder Option stylen

Eines der grundlegendsten Konzepte bezüglich clientseitiger Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (das Formular muss ausgefüllt werden, bevor es abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich abgeschickt werden kann.
Zum Beispiel sind im folgenden Formular der Vor- und Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Zum Beispiel, wenn wir die folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen soliden Rahmen, und das optionale Steuerelement hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser anzeigen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie es vermeiden, 'erforderliche' gegenüber 'optionale' Elemente in Formularen allein mit Farbe zu stylen, da dies für Farbenblinde nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den entsprechenden Steuerelementen in Verbindung steht.
Im nächsten Abschnitt schauen wir uns ein besseres Beispiel an, wie erforderliche Felder mit `:required` und generiertem Inhalt angezeigt werden können.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional`-Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden können und zusätzliche Stile für erforderliche Steuerelemente hinzufügen können.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem zugewiesenen Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Generierten Inhalt mit Pseudoklassen verwenden

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, daher kann es für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso angesprochen werden wie ein tatsächlicher DOM-Knoten.

Das ist wirklich nützlich, wenn Sie einem Element, wie einem Etikett oder Icon, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um sicherzustellen, dass es für alle Benutzer zugänglich ist. Zum Beispiel, in unserem [benutzerdefinierten Radioknopf-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html), verwenden wir generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radioknopfs zu handhaben, wenn ein Radioknopf ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radiobutton oder Kontrollkästchen, dem sie begegnen, überprüft/ausgewählt ist, so dass Sie nicht möchten, dass sie ein weiteres DOM-Element, das die Auswahl anzeigt, lesen — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen es, generierten Inhalt auf ihnen zu haben. Alle Eingabetypen, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel `erforderlich/optional`, dieses Mal werden wir nicht das Erscheinungsbild des Eingabefelds selbst ändern — wir verwenden generierten Inhalt, um ein beschreibendes Etikett hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir dem Formular oben einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Screenreadern erhalten beim Erreichen jedes erforderlichen Eingabefelds "erforderlich" als zusätzliche Information gelesen, während sehende Benutzer unser Etikett sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, so dass wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzufügen, um den generierten Inhalt darauf zu platzieren:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `span` auf eine neue Linie unterhalb der Eingabe fiel, weil die Eingabe und das Etikett beide mit `width: 100%` gesetzt sind. Um das zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, aber auch sagen ihm, dass es seinen Inhalt auf neuen Linien umwälzen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Etikett und die Eingabe auf separaten Linien sitzen, weil sie beide `width: 100%` haben, aber das `span` hat eine `width` von `0`, so dass es auf der gleichen Linie wie die Eingabe sitzen kann.

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

Wir setzen das `span` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `span` positionieren können anstatt zum `body` (Der generierte Inhalt verhält sich, als wäre er ein Kindknoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Text "erforderlich", was wir wollten, dass unser Etikett sagt, und gestalten und positionieren es, wie wir möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerelemente stylen basierend auf der Gültigkeit ihrer Daten

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten einer Formularsteuerung gültig sind oder nicht (im Fall von numerischen Daten können wir auch über innerhalb und außerhalb des Bereichs liegende Daten sprechen). Formularsteuerungen mit [Einschränkungsgrenzen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Einschränkungsvalidierung sind immer gültig und stimmen daher mit `:valid` überein.
- Steuerelemente mit gesetztem `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, stimmen mit `:invalid` überein, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (sind jedoch gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) spezifizierten Bereichsgrenzen liegen, stimmen mit `:invalid` überein, aber auch mit {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten uns fürs Erste an die einfachen Beispiele.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` betrachten (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`-Elemente, um darauf generierten Inhalt zu platzieren, den wir verwenden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`-Elemente auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedlichen generierten Inhalt absolut, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz beziehungsweise. Um die Dringlichkeit für ungültige Daten zu erhöhen, haben wir den Eingaben auch eine dicke rote Grenze gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Etiketten hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Etiketten verwendet haben.

Sie können es unten versuchen:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn etwas eingegeben ist. Das E-Mail-Feld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn etwas eingegeben wurde, das keine richtige E-Mail-Adresse ist.

### Im Bereich und außerhalb des Bereichs liegende Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Bereichsgrenzen spezifiziert sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, respectivamente.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist wichtig zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum also beide haben? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen, die für Benutzer hilfreicher ist als nur zu sagen „ungültig“. Möglicherweise möchten Sie sogar beide bereitstellen.

Lassen Sie uns ein Beispiel betrachten, das genau das tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten zu Eingaben außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte zu dem, was wir im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf alle `::after`-Inhalte angewendet werden, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalten für die `:required`- und `:out-of-range`-Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die nummerische Eingabe gleichzeitig erforderlich und außerhalb des Bereichs liegt. Was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, treten die [Regeln der Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) in Kraft, und die Nachricht „Außerhalb des erlaubten Wertebereichs“ wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zuerst geladen wird, wird „Erforderlich“ angezeigt, zusammen mit einem roten Kreuz und einer Umrandung. Wenn Sie ein gültiges Alter eingegeben haben (d.h. innerhalb des Bereichs von 12-120), wird die Eingabe gültig. Wenn Sie jedoch dann den Alterseintrag in einen eintragen, der außerhalb des Bereichs liegt, wird die Nachricht „Außerhalb des erlaubten Wertebereichs“ dann anstelle von „Erforderlich“ angezeigt.

> [!NOTE]
> Um einen ungültigen/aus dem Bereich liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und ihn mit der Tastatur eingeben. Die Spinnknöpfe lassen Sie den Wert nicht außerhalb des erlaubten Bereichs inkrementieren/dekrementieren.

## Steuern, ob Eingaben aktiviert oder deaktiviert sowie schreibgeschützt oder beschreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, hineingetippt werden usw. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — es wird häufig gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und am besten die Rechnungsfelder deaktivieren.

Sehen wir uns ein Beispiel an, das genau das tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen zum Aktivieren/Deaktivieren der Rechnungsadresse. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da die Etiketten direkt vor ihren Eingaben liegen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun haben wir schließlich etwas JavaScript verwendet, um das Deaktivieren der Rechnungsfeldern umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), damit der Benutzer die Rechnungsfelder aktivieren/deaktivieren und die Stilisierung der zugehörigen Etiketten umschalten kann.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Allerdings werden schreibgeschützte Eingabewerte, im Gegensatz zu deaktivierten Eingaben, an den Server gesendet. Schreib-schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird auf schreibgeschützt gesetzt, indem das Attribut `readonly` verwendet wird. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details dazu über diese Seite gesendet hat, um den Benutzer dazu zu bringen, alle an einem Ort zu überprüfen, alle erforderlichen letzten Daten hinzuzufügen und dann die Bestellung zu bestätigen, indem er sie absendet. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Zug an den Server gesendet werden.

Lassen Sie uns einen Blick darauf werfen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTML ist wie folgt — beachten Sie das Attribut readonly:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obersten Formularelemente nicht bearbeitbar sind, die Werte jedoch gesendet werden, wenn das Formular gesendet wird. Wir haben die Formularsteuerelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt gestaltet:

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

> [!NOTE] > `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — aktiviert, standardmäßig, unbestimmt

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Radioknöpfe")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Stimmt mit Radios/Kontrollkästchen überein, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. indem das `checked`-Attribut auf sie gesetzt wird). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Mehr dazu weiter unten.

### :checked

Wenn sie aktiviert sind, stimmen sie mit der Pseudoklasse {{cssxref(":checked")}} überein.

Der häufigste Anwendungsfall hierfür ist, einen anderen Stil auf das Kontrollkästchen oder den Radioknopf anzuwenden, wenn er aktiviert ist, in Fällen, in denen Sie das Systemstandardstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst aufbauen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über [die Verwendung von `appearance: none` bei Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Zur Wiederholung sieht der `:checked` Code aus unserem [gestylten Radioknöpfe Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) so aus:

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

Im Wesentlichen bauen wir das Styling für den "inneren Kreis" eines Radioknopfs mit dem Pseudoelement `::before` auf, setzen aber eine [`transform`](/de/docs/Web/CSS/transform) `scale(0)` auf ihn. Wir verwenden dann ein [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Etikett schön animiert erscheinen zu lassen, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung einer Transformation anstelle der Übergangsausführung von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises heraus wachsen zu lassen, anstatt dass es scheinbar aus der Ecke des Kreises wächst, und es gibt kein Springen des Verhaltens, da keine Boxmodellwertänderungen aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig aktiviert sind, wenn die Seite geladen wird, selbst wenn sie deaktiviert sind. Dies könnte nützlich sein, um eine Erinnerung für Benutzer zu geben, was die Standardeinstellungen (oder Startoptionen) waren, falls sie ihre Entscheidungen zurücksetzen möchten.

Außerdem stimmen die oben erwähnten Radios/Kontrollkästchen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Was bedeutet das? Zu den Elementen, die unbestimmt sind, gehören:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radioknöpfe in einer gleichnamigen Gruppe nicht aktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies werden Sie wahrscheinlich nicht sehr oft verwenden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern mitzuteilen, dass sie wirklich einen Radioknopf auswählen müssen, bevor sie fortfahren.

Lassen Sie uns ein paar abgeänderte Versionen des vorherigen Beispiels betrachten, die den Benutzer daran erinnern, was die Standardoption war, und die Etiketten der Radioknöpfe stylen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut dem mittleren Radioknopfeingang hinzugefügt, so dass er beim Laden standardmäßig ausgewählt ist. Wir stylen dies mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard"-Etikett auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Nachfolgegeschwister-Kombinator (`~`) anstatt des Nächstgeschwister-Kombinators (`+`) verwenden — wir müssen das tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) live finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) an).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radioknopf — das ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zum Stylen. Wir stylen die unbestimmten Radioknöpfe mit dem folgenden CSS:

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

Das erstellt eine kleine animierte Umrisslinie auf den Radioknöpfen, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) live finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) an).

> [!NOTE]
> Sie finden ein [interessantes Beispiel mit unbestimmten Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [<input type="checkbox">](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen und wir haben hier nicht den Platz, um sie alle im Detail zu besprechen. Lassen Sie uns ein paar weitere ansprechen, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Das ist nützlich, wenn Sie wollen, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn eine Eingabe darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus über die Tastaturinteraktion erhalten haben (anstatt durch Berührung oder Klick) — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter anzeigen (d.h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher in Browsern noch nicht gut unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} matcht ebenfalls Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — es matcht auch andere {{Glossary("void_element", "void Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browserunterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht fertiggestellt, daher wird sie noch nicht von einem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, der {{cssxref(":invalid")}} Pseudoklasse ähnlich sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element mit `:invalid` übereinstimmen, während der Benutzer die Daten eingibt, wenn der Wert vorübergehend ungültig ist, wird aber nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, stimmt es für die gesamte Dauer des Fokus mit sowohl `:invalid` als auch `:user-invalid` überein. In ähnlicher Weise wie `:invalid` wird es aufhören mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling).

## Zusammenfassung

Damit beenden wir unseren Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formstylings! Als Nächstes werden wir uns etwas anderem widmen — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
