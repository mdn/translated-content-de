---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularsteuerelemente auf allgemeine Weise behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu selektieren, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zum Styling von Formularen in unterschiedlichen Zuständen.

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

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. indem es über die Tastatur angesteuert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen inzwischen vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie vorteilhaft nutzen können. Wir werden diese im Detail in den folgenden Abschnitten besprechen, aber kurz gesagt, die wichtigsten, die wir behandeln werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularsteuerelemente ab, die gültig/ungültig gemäß den Validierungseinschränkungen sind, die auf sie gesetzt wurden, oder innerhalb/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und ob es sich um schreibgeschützte oder beschreibbare Formularsteuerelemente handelt (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut gesetzt).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Respektive zielen sie auf Kontrollkästchen und Optionsfelder ab, die aktiviert, in einem unbestimmten Zustand (weder aktiviert noch nicht aktiviert) sind und die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen befasst sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungseinschränkungen in unserem nächsten Artikel erfahren – [Validierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) – aber vorerst werden wir die Dinge einfach halten bezüglich der Formularvalidierung, damit es nicht verwirrend wird.

## Eingaben stylen basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der Formularvalidierung auf der Client-Seite ist, ob eine Formulareingabe erforderlich (sie muss ausgefüllt werden, bevor das Formular abgesendet werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein verfügbares `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel sind der Vorname und der Nachname im Formular unten erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen soliden Rand, und das optionale Steuerelement hat einen gestrichelten Rand. Sie können auch versuchen, das Formular ohne Ausfüllung abzusenden, um die Validierungsfehlermeldungen des Browsers zu sehen, die Ihnen standardmäßig gegeben werden:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' gegenüber 'optionale' Elemente in Formularen nur mit Farbe zu stylen, da dies für farbenblinde Menschen nicht optimal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den entsprechenden Steuerelementen in Verbindung gebracht wird. Im nächsten Abschnitt werden wir uns ein besseres Beispiel ansehen, um erforderliche Felder mit `:required` und generiertem Inhalt zu kennzeichnen.

> [!NOTE]
> Sie werden wahrscheinlich nicht häufig die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling einfach standardmäßig vornehmen könnten und für erforderliche Steuerelemente Styles darüberlegen.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut gesetzt hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem Attribut zugewiesen wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorhergehenden Artikeln haben wir die Nutzung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um es etwas ausführlicher zu besprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um einen Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der erzeugte Inhalt wird nicht zum DOM hinzugefügt, daher kann es sein, dass er für einige Bildschirmleser unsichtbar ist. Da es sich um ein Pseudoelement handelt, kann es mit Styles auf die gleiche Weise gezielt werden wie jedes tatsächliche DOM-Knoten.

Dies ist sehr nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie z. B. ein Label oder ein Icon, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [Beispiel für angepasste Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich – Bildschirmleser informieren ihre Benutzer bereits, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, markiert/ausgewählt ist, sodass man nicht möchte, dass sie ein anderes DOM-Element vorlesen, das die Auswahl anzeigt – das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen es, dass generierter Inhalt auf ihnen angezeigt wird. Alle Eingabetypen, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen keinen erzeugten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem erforderlichen/optionalen Beispiel von zuvor, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern – wir werden generierten Inhalt verwenden, um ein Hinweislabel hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst werden wir einen Absatz am Anfang des Formulars hinzufügen, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmleser-Benutzer hören "erforderlich" als zusätzliches Informationsstück, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label erhalten.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt darauf zu platzieren:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `span` auf eine neue Zeile unterhalb der Eingabe fiel, weil die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>`, damit es ein Flex-Container wird, aber wir sagen ihm auch, dass es dessen Inhalt auf neue Zeilen umwickeln soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung, die dies hat, ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` sind, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als wäre es ein untergeordnetes Element des Elements, auf dem es generiert wurde, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", welcher das ist, was wir wollten, dass unser Label sagt und es so stilisieren und positionieren, wie wir möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerelemente stylen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten können wir auch über „innerhalb des Bereichs“ und „außerhalb des Bereichs“ sprechen). Formularelemente mit [Einschränkungen durch Validierungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} anvisieren. Einige Punkte, die beachtet werden sollten:

- Steuerelemente ohne Validierungseinschränkungen sind immer gültig und werden daher mit `:valid` abgeglichen.
- Steuerelemente mit `required`, die keinen Wert haben, gelten als ungültig – sie werden mit `:invalid` und `:required` abgeglichen.
- Steuerelemente mit eingebauter Validierung, z. B. `<input type="email">` oder `<input type="url">` sind (abgestimmt mit) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute angegeben sind, sind (abgestimmt mit) `:invalid`, werden aber auch durch {{cssxref(":out-of-range")}} abgestimmt, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element durch `:valid`/`:invalid` abgleichen zu lassen, wie Sie im [Artikel zur Validierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` näher ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s für die Generierung von Inhalten, die wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedliche generierte Inhalte je nachdem, ob die Daten des Formulars gültig oder ungültig sind – ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um der ungültigen Daten ein wenig zusätzliche Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendeten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn etwas ausgefüllt ist. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

### Innerhalb des Bereichs und außerhalb des Bereichs liegende Daten

Wie oben angedeutet, gibt es zwei andere verwandte Pseudoklassen zu berücksichtigen – {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute angegeben sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingabewerte, die im Bereich liegen, auch durch die `:valid`-Pseudoklasse abgestimmt werden und Eingabewerte, die außerhalb des Bereichs liegen, auch durch die `:invalid`-Pseudoklasse. Warum also beides haben? Das Problem liegt wirklich in der Semantik – außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie vielleicht eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen, die hilfreicher für Benutzer ist, als einfach „ungültig“ zu sagen. Vielleicht möchten Sie sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau das tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Meldungen für Werte außerhalb des Bereichs bei den numerischen Eingaben bereitzustellen, sowie zu sagen, ob sie erforderlich sind.

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

Es ist eine ähnliche Geschichte wie wir sie zuvor im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewandt werden, in eine separate Regel ausgegliedert und dem separaten `::after`-Inhalt für `:required` und `:out-of-range`-Zustände ihren eigenen Inhalt und Stil zugewiesen haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingaben sowohl erforderlich als auch außerhalb des Bereichs zugleich sind, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel und die Meldung außerhalb des Bereichs wird angezeigt.

Dies funktioniert sehr gut – wenn die Seite zuerst geladen wird, wird „Erforderlich“ angezeigt, zusammen mit einem roten Kreuz und Rand. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn jedoch das Alter dann in einen Bereich geändert wird, der außerhalb dieses Bereichs liegt, erscheint die Meldung „Außerhalb des zulässigen Wertebereichs“ anstelle von „Erforderlich“.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und ihn über die Tastatur eingeben. Die Spinner-Buttons lassen Sie den Wert nicht über den erlaubten Bereich hinaus inkrementieren/dekrementieren.

## Steuerelemente stylen basierend darauf, ob sie aktiviert oder deaktiviert sind, und ob sie nur lesbar oder beschreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, getippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} anvisiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten vielleicht gar nicht senden, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular – häufig wird man gefragt, ob man dieselbe Adresse für Rechnungs- und Lieferzwecke verwenden möchte; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten die Rechnungsadressfelder genauso gut einfach deaktivieren.

Schauen wir uns ein Beispiel an, das genau das macht. Zuerst ist das HTML ein einfaches Formular mit Texteingaben sowie einem Kontrollkästchen, um die Deaktivierung der Rechnungsadresse an und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind folgende:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

label:has(+ :disabled) {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben sind, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun haben wir schließlich etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umschalten zu können:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Nur lesen und beschreibbar

Ähnlich wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch bei der Übermittlung an den Server gesendet. Beschreibbar bedeutet, dass sie bearbeitet werden können – ihr Standardzustand.

Ein Eingabefeld wird über das `readonly`-Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Angaben, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort prüfen kann, alle endgültig benötigten Daten hinzufügen und dann die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle finalen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel, sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitet werden kann, jedoch werden die Werte übermittelt, wenn das Formular abgesendet wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie den Standardzustand von Eingabeelementen beschreiben.

## Zustände von Radiobuttons und Kontrollkästchen — geprüft, standardmäßig, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} geprüft oder ungeprüft sein. Aber es gibt ein paar weitere Zustände, die ebenfalls berücksichtigt werden müssen:

- {{cssxref(":default")}}: Stimmt mit Radiobuttons/Kontrollkästchen überein, die standardmäßig abhängig von der Standardeinstellung beim Laden der Seite (d.h. durch Setzen des `checked` Attributs auf sie) auswählt werden. Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Kontrollkästchen weder geprüft noch ungeprüft sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Mehr dazu weiter unten.

### :checked

Wenn sie geprüft sind, werden sie durch die {{cssxref(":checked")}} Pseudoklasse abgestimmt.

Der häufigste Verwendungszweck besteht darin, der Checkbox oder dem Radiobutton einen anderen Stil zu geben, wenn sie geprüft sind, in Fällen, in denen Sie das Standardsystem-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Beispiele dafür haben wir im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` bei Radiobuttons/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Rückblick, der `:checked`-Code aus unserem [gestylten Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel sieht so aus:

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

Grundsätzlich bauen wir das Styling für den „inneren Kreis“ eines Radiobutton mit dem Pseudoelement `::before`, aber setzen einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön in Sichtweite zu animieren, wenn das Radio ausgewählt/geprüft wird. Der Vorteil der Verwendung eines Transforms anstelle der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie den [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, damit es vom Zentrum des Kreises aus wächst, anstatt es aus den Ecken des Kreises wachsen zu lassen, und es gibt kein Springverhalten, da keine Werte von Boxmodell-Eigenschaften aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}} Pseudoklasse mit Radiobuttons/Kontrollkästchen überein, die standardmäßig abhängig von der Standardeinstellung beim Laden der Seite, selbst wenn abgewählt, ausgewählt sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, welche die Standardeinstellungsoptionen waren, falls er seine Auswahl zurücksetzen möchte.

Auch werden die oben erwähnten Radiobuttons/Kontrollkästchen durch die {{cssxref(":indeterminate")}} Pseudoklasse abgestimmt, wenn sie in einem Zustand sind, in dem sie weder geprüft noch ungeprüft sind. Aber was bedeutet das? Elemente, die unbestimmt sind, schließen ein:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe ungeprüft sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern anzuzeigen, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons darstellen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zu dem mittleren Radiobutton Input hinzugefügt, damit es standardmäßig beim Laden ausgewählt wird. Wir haben es dann mit folgendem CSS gestylt:

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

Dies liefert ein kleines "Default"-Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den Kombinator für aufeinanderfolgende Geschwister (`~`) anstelle des Kombinators für das nächste Geschwister (`+`) verwenden – wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) an.)

Für das `:indeterminate`-Beispiel haben wir keine standardmäßige Auswahl beim Radio – das ist wichtig – wenn es eine gäbe, dann gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erstellt eine lustige kleine animierte Umrandung auf den Radiobuttons, die hoffentlich zeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) an.)

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate` Zustände beinhaltet](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite finden.

## Mehr Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen, und wir haben nicht genug Platz, um sie alle detailliert zu beschreiben. Lassen Sie uns über ein paar weitere sprechen, von denen Sie sich die Zeit nehmen sollten, sie zu untersuchen.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein Element enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus über Tastaturinteraktion (anstatt Touch oder Maus) erhalten haben – nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus-(oder anderer) Fokus zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen überein, die ihren Placeholder anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributes), weil der Wert des Elements leer ist.

Die Folgenden sind ebenfalls interessant, haben aber bisher keine gute Unterstützung in Browsern:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formulkontrollen aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner – es stimmt auch mit anderen {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine angemessene Browserunterstützung; die `:blank` Pseudoklasse ist noch nicht fertig spezifiziert, daher wird sie von keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserem Benutzererlebnis. Wenn der Wert beim Empfang des Fokus gültig ist, kann das Element beim Benutzer match `:invalid`, wenn der Wert vorübergehend ungültig ist, wird jedoch den `:user-invalid` nicht abgleichen, bis das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er für die gesamte Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` abgleichen. Ähnlich wie bei `:invalid` hört es auf, die `:user-invalid` Pseudoklasse zu matchen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie die wichtigsten Informationen im Gedächtnis behalten? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling).

## Zusammenfassung

Damit beenden wir unsere Betrachtung der UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiterhin mit ihnen und erstellen Sie einige lustige Formularstile! Als nächstes werden wir zu etwas anderem übergehen – [Validierung auf der Client-Seite](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
