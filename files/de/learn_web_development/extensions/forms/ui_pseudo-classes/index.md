---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling von verschiedenen Formularsteuerelementen allgemein behandelt. Dies beinhaltete die Verwendung einiger Pseudoklassen, zum Beispiel die Nutzung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen verfügbaren UI-Pseudoklassen, die zum Stylen von Formularen in verschiedenen Zuständen genutzt werden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
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
        Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Sie sind vielleicht schon mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es im Fokus ist (z.B. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (z.B. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste im Falle einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen in Bezug auf HTML-Formulare. Diese bieten verschiedene nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher besprechen, aber kurz gesagt, die Hauptpunkte, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielt auf Elemente ab, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielt auf Formularsteuerelemente ab, die gültig/ungültig sind gemäß den darauf gesetzten Formularvalidierungseinschränkungen oder im Bereich/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielt auf Elemente ab, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und auf schreibgeschützte oder beschreibbare Formularsteuerelemente (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielgerichtet auf Kontrollkästchen und Optionsfelder, die markiert sind, sich in einem unbestimmten Zustand befinden (weder markiert noch nicht markiert), und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribut, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudo-Klassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen beziehen sich auf das Styling von Formularsteuerelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie lernen viel mehr über das Setzen und Kontrollieren von Validierungseinschränkungen in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für jetzt halten wir es in Bezug auf die Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Styling von Eingabefeldern basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte in Bezug auf die clientseitige Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein `required` Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt werden kann.
Zum Beispiel sind der Vorname und der Nachname im Formular unten erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen durchgehenden Rahmen und das optionale Steuerelement hat einen gestrichelten Rahmen.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen clientseitigen Validierungsfehlermeldungen der Browser zu sehen:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, erforderliche versus optionale Elemente in Formularen ausschließlich mit Farbe zu stylen, da dies nicht ideal für farbenblinde Personen ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den entsprechenden Steuerelementen zu verwenden.
Im nächsten Abschnitt werden wir ein besseres Beispiel dafür betrachten, wie erforderliche Felder mit `:required` und generiertem Inhalt angezeigt werden.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional` Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden und für erforderliche Steuerelemente zusätzliches Styling verwenden könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required` Attribut gesetzt hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um darüber im Detail zu sprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um einen Inhaltsblock vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsblock wird nicht dem DOM hinzugefügt, daher kann er für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es im gleichen Stil wie jeder tatsächliche DOM-Knoten angesprochen werden.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, z.B. ein Label oder ein Icon, wenn alternative Indikatoren verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel haben wir in unserem [angepassten Radiobutton-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt verwendet, um die Platzierung und Animation des inneren Kreises des angepassten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader benachrichtigen ihre Benutzer bereits, wenn ein Radiobutton oder Kontrollkästchen, auf den sie stoßen, markiert/ausgewählt ist, daher wollen wir nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl angibt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen das Hinzufügen von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text in sich anzeigen, wie `text`, `password`, oder `button`, zeigen keinen generierten Inhalt an. Andere, wie `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel mit erforderlich/optional: dieses Mal werden wir nicht das Aussehen der Eingabe selbst ändern — wir verwenden generierten Inhalt, um ein anzeigendes Label hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst werden wir einen Absatz hinzufügen, um zu erklären, wonach Sie suchen sollen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Nutzer werden "erforderlich" als zusätzliche Information hören, wenn sie zu jeder erforderlichen Eingabe kommen, während sehbehinderte Nutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran anzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das span auf eine neue Zeile unter der Eingabe fiel, weil die Eingabe und das Label beide auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>` zu einem flex Container, aber sagen ihm auch, dass es seinen Inhalt auf neue Zeilen umbrechen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Label und die Eingabe auf getrennten Zeilen stehen, weil beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, also kann es in der gleichen Zeile wie die Eingabe sitzen.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt zu `position: absolute` setzen und ihn relativ zum `<span>` platzieren können, anstatt zum `<body>` (Der generierte Inhalt funktioniert so, als wäre er ein Knoten des Elements, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was unser Label sagen sollte, und stylen und positionieren es nach unseren Wünschen. Das Ergebnis sieht unten so aus.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten eines Formularsteuerelements gültig oder ungültig sind (im Falle numerischer Daten können wir auch über Daten innerhalb oder außerhalb des Bereichs sprechen). Formularsteuerelemente mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können auf Basis dieser Zustände angesprochen werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Validierungseinschränkungen sind immer gültig, und daher mit `:valid` angesprochen.
- Steuerelemente mit `required` darauf, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` angesprochen.
- Steuerelemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (angesprochen mit) `:invalid`, wenn die dort eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn leer).
- Steuerelemente, deren aktueller Wert außerhalb der mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) spezifizierten Bereichsgrenzen liegt, sind (angesprochen mit) `:invalid`, aber auch angesprochen durch {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` anzusprechen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns in ein Beispiel für `:valid`/`:invalid` eintauchen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt darauf zu erstellen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir absolut unterschiedlichen generierten Inhalt je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein wenig zusätzliche Dringlichkeit für ungültige Daten hinzuzufügen, haben wir den Eingabefeldern auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich" Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas enthalten. Die E-Mail-Eingabe hingegen ist gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig wird, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-range und out-of-range Daten

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute spezifiziert werden, wenn ihre Daten innerhalb oder außerhalb des spezifizierten Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch durch die `:valid` Pseudoklasse angesprochen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, ebenfalls durch die `:invalid` Pseudoklasse angesprochen werden. Warum also beide haben? Das Problem ist wirklich eines der Semantik — out-of-range ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie vielleicht eine andere Nachricht für out-of-range Eingaben bereitstellen möchten, die hilfreicher für Benutzer ist als einfach nur "ungültig" zu sagen. Sie könnten sogar beide bereitstellen wollen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um out-of-range Nachrichten für die numerischen Eingaben bereitzustellen, sowie um zu sagen, ob sie erforderlich sind.

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

Das ist eine ähnliche Geschichte wie zuvor im `:required` Beispiel, außer dass wir hier die Deklarationen, die für jeden `::after` Inhalt gelten, in eine separate Regel aufgeteilt haben und den separaten `::after` Inhalt für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht "Außerhalb des erlaubten Wertebereichs" wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite erstmals geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter (d.h. im Bereich von 12-120) eingeben, wird die Eingabe gültig. Wenn Sie allerdings dann den Alterswert in einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb erlaubtem Wertebereich" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb Bereichswert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es über die Tastatur eingeben. Die Spinnschaltflächen erlauben nicht, den Wert außerhalb des erlaubten Bereichs zu inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben sowie von schreibgeschützten und -schreibfähigen

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben usw. werden. Ein deaktiviertes Element hingegen kann auf keine Weise interagiert werden, und seine Daten werden nicht einmal zum Server geschickt.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten nicht auf einen bestimmten Benutzer zutreffen, möchten Sie möglicherweise nicht einmal, dass diese Daten übermittelt werden, wenn er das Formular absendet. Ein klassisches Beispiel ist ein Versandformular — gewöhnlich werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse zum Server senden und könnten ebenso gut die Rechnungsadressefelder deaktivieren.

Schauen wir uns ein Beispiel an, das genau dies tut. Zuerst ist der HTML-Code ein einfaches Formular mit Texteingaben, plus ein Kontrollkästchen zum Umschalten der Deaktivierung der Rechnungsadresse ein und aus. Die Rechnungsadressefelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textlabels ausgrauen. Da sich die Labels direkt vor ihren Eingaben befinden, haben wir diese mit dem Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressefelder umzuschalten:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder ein-/auszuschalten, und das Styling der zugehörigen Labels zu ändern.

Sie können das Beispiel in Aktion unten sehen (sehen Sie es auch live [hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

Ähnlich wie `:disabled` und `:enabled` schalten die `:read-only` und `:read-write` Pseudoklassen zwei Zustände um, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Anders als bei deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch beim Absenden an den Server übermittelt. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Als Beispiel nehmen wir eine Bestätigungsseite, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, den Benutzer zu bitten, sie alle an einem Ort zu überprüfen, eventuell noch benötigte Daten hinzuzufügen und dann die Bestellung abzuschließen, indem sie das Formular absenden. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass das obere Set von Formularelementen nicht bearbeitbar ist, die Werte jedoch beim Absenden übermittelt werden. Wir haben die Steuerelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} entweder markiert oder nicht markiert sein. Es gibt jedoch noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Passt auf Radiobuttons/Kontrollkästchen, die standardmäßig beim Laden der Seite markiert sind (d.h. durch Setzen des `checked` Attributs auf ihnen). Diese passen zur {{cssxref(":default")}} Pseudoklasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Kontrollkästchen weder markiert noch nicht markiert sind, gelten sie als _unbestimmt_ und passen zur {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie markiert sind, werden sie durch die {{cssxref(":checked")}} Pseudoklasse angesprochen.

Die häufigste Verwendung davon ist, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton anzuwenden, wenn es markiert ist, in Fällen, in denen Sie das systemeigene Standard-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wiederherstellen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über [Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Als Rückblick sieht der `:checked` Code aus unserem [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mithilfe des `::before` Pseudoelements, setzen aber ein `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label elegant erscheinen zu lassen, wenn der Radio ausgewählt/markiert wird. Der Vorteil der Verwendung einer Transformation anstelle der Übergangsfunktion [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es von der Mitte des Kreises wachsen zu lassen, statt von der Ecke des Kreises, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}} Pseudoklasse zu Radiobuttons/Kontrollkästchen, die standardmäßig beim Laden der Seite markiert sind, sogar wenn abgewählt. Dies könnte nützlich sein, um den Benutzern anzuzeigen, welche die Standardoptionen waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben genannten Radiobuttons/Kontrollkästchen werden von der {{cssxref(":indeterminate")}} Pseudoklasse angesprochen, wenn sie sich in einem Zustand befinden, in dem sie weder markiert noch nicht markiert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht markiert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft auf `true` über JavaScript gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, was Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um den Benutzern zu sagen, dass sie ein Radiobutton wirklich auswählen müssen, bevor sie fortfahren.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels ansehen, die den Benutzern anzeigen, welche die Standardoption war, und die Labels von Radiobuttons bei unbestimmtem Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut zur mittleren Radiobutton Eingabe hinzugefügt, sodass es standardmäßig ausgewählt sein wird, wenn es geladen wird. Dann haben wir dieses mit dem folgenden CSS gestylt:

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

Dies bietet ein kleines "Standard" Label auf dem Artikel, der ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwister-Selektor (`~`) anstelle des nächsten Geschwister-Selektors (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) ansehen.)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand, der gestylt werden könnte. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erstellt einen unterhaltsamen kleinen animierten Umriss auf den Radiobuttons, der hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) ansehen.)

> [!NOTE]
> Sie können ein [interessantes Beispiel mit `indeterminate` Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe weiterer interessanter Pseudoklassen, und wir haben nicht den Raum, um alle im Detail zu beschreiben. Lassen Sie uns über einige weitere sprechen, die Sie untersuchen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse passt auf ein Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular in irgendeiner Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse passt auf fokussierte Elemente, die den Fokus über Tastaturinteraktion erhalten haben (statt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastatur-Fokus im Vergleich zu Maus (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse passt auf {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt ebenfalls auf Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner – es passt auch auf andere {{Glossary("void_element", "void Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browser-Unterstützung, die Spezifikation der `:blank` Pseudoklasse ist noch nicht abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, aber mit einer besseren Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element während der Eingabe des Benutzers temporär ungültig sein, aber es wird nur dann mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl für die gesamte Dauer des Fokus mit `:invalid` als auch mit `:user-invalid` übereinstimmen. In ähnlicher Weise wird es, wie `:invalid`, aufhören, mit `:user-invalid` zu übereinstimmen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Advanced_styling).

## Zusammenfassung

Damit endet unser Überblick über UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als nächstes beschäftigen wir uns mit etwas anderem — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
