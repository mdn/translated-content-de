---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorhergehenden Artikeln haben wir das Styling verschiedener Formularsteuerungen im Allgemeinen behandelt. Dies schloss auch die Verwendung von Pseudoklassen ein, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu zielen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die zum Styling von Formularen in verschiedenen Zuständen zur Verfügung stehen.

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
          >Pseudoklassen und Pseudo-Elemente</a
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

## Welche Pseudoklassen haben wir zur Verfügung?

Die ursprünglichen Pseudoklassen (von [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn mit einem Mauszeiger darübergefahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn im Falle einer Tastaturaktivierung die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Detail in den folgenden Abschnitten diskutieren, aber kurz gesagt, die wichtigsten, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel-Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel-Formularsteuerungen, die gültig/ungültig sind, gemäß den Formularvalidierungsbeschränkungen, die auf sie gesetzt wurden, oder innerhalb/außerhalb des Intervalls.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel-Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und Lese-/Schreib- oder nur Leseformularsteuerungen (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Beziehen sich jeweils auf Kontrollkästchen und Optionsfelder, die angekreuzt sind, in einem unbestimmten Zustand (weder angekreuzt noch nicht angekreuzt), und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Element/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Element/option#selected)).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben genannten UI-Pseudoklassen haben eine ausgezeichnete Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularsteuerungen basierend auf ihrem Validierungszustand (ist ihre Eingabe gültig oder nicht?). Sie werden viel mehr über das Festlegen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel erfahren — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber fürs Erste werden wir die Formularvalidierung einfach halten, um keine Verwirrung zu stiften.

## Eingaben basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bei der Client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein verfügbares `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich gesendet werden kann.
Zum Beispiel sind der Vorname und Nachname in dem Formuar unten erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir zum Beispiel das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerungen haben einen soliden Rand, und die optionale Steuerung hat einen gestrichelten Rand.
Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen Client-seitigen Validierungsfehlermeldungen zu sehen, die der Browser Ihnen gibt:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderlich' gegenüber 'optional' in Formularen nur mit Farben zu stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" im Zusammenhang mit den jeweiligen Steuerungen.
Im nächsten Abschnitt werden wir uns ein besseres Beispiel dafür ansehen, erforderliche Felder mit `:required` und generiertem Inhalt zu kennzeichnen.

> [!NOTE]
> Sie werden sich wahrscheinlich selten dabei erwischen, die `:optional` Pseudoklasse zu verwenden. Formularsteuerelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig durchführen und für erforderliche Steuerelemente zusätzliche Stile hinzufügen können.

> [!NOTE]
> Wenn ein Radio-Button in einer gleich benannten Gruppe von Radio-Buttons das `required`-Attribut hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Nutzung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, es wäre jetzt ein guter Zeitpunkt, um es im Detail zu besprechen.

Die Idee ist, dass wir die Pseudo-Elemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhaltsteil vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsteil wird nicht zum DOM hinzugefügt, sodass er für einige Bildschirmleseprogramme unsichtbar sein kann. Weil es sich um ein Pseudo-Element handelt, kann es mit Stilen ebenso gezielt werden wie ein tatsächlicher DOM-Knoten.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Label oder Icon, einen visuellen Hinweis hinzufügen möchten, wenn alternative Kennzeichen ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Zum Beispiel verwenden wir in unserem [Beispiel für Benutzerdefinierte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt ist:

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

Das ist wirklich nützlich — Bildschirmleser informieren bereits ihre Benutzer, wenn ein Radio-Button oder Kontrollkästchen ausgewählt/angekreuzt ist, daher möchten Sie nicht, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Hinweis löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Anzeigen von generiertem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen generierten Inhalt nicht an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional, dieses Mal werden wir die Eingabe selbst nicht verändern — wir werden generierten Inhalt verwenden, um ein Label hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir dem Formular einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Bildschirmlesegeräten hören das Wort "erforderlich" als zusätzliche Information, wenn sie zu jeder erforderlichen Eingabe kommen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, an dem der generierte Inhalt "angebracht" wird:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span`-Element auf eine neue Zeile unter die Eingabe fiel, weil Eingabe und Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`-Element so, dass es zu einem Flex-Container wird, aber auch seine Inhalte auf neue Zeilen umbricht, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf der gleichen Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein Kindknoten des Elements ist, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Etikett sagt, und stylen und positionieren es, wie wir wollen. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerelemente stylen basierend darauf, ob ihre Daten gültig sind

Der andere wirklich wichtige grundlegende Aspekt der Formularvalidierung ist, ob die Daten eines Formularsteuerungselements gültig sind oder nicht (im Falle von numerischen Daten können wir auch von innerhalb/außerhalb der Reichweite sprechen). Formularsteuerungen mit [Einschränkungen für Beschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularsteuerungen mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es wert sind, berücksichtigt zu werden:

- Steuerungen ohne Constraint-Validierung werden immer als gültig betrachtet und daher mit `:valid` übereinstimmen.
- Steuerungen mit `required`, die keinen Wert haben, werden als ungültig betrachtet — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerungen mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">` werden (übereinstimmen mit) `:invalid`, wenn die eingegebenen Daten nicht dem entsprechen, was sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerungen, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) spezifizierten Bereich liegt, werden mit `:invalid` übereinstimmen, aber auch von {{cssxref(":out-of-range")}} übereinstimmt, wie Sie später sehen werden.
- Es gibt noch einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber für jetzt halten wir die Dinge einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s um generierten Inhalt zu erzeugen, den wir verwenden, um Anzeigen für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Um diese Anzeigen bereitzustellen, verwenden wir das folgende CSS:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir ordnen dann den absolut positionierten generierten Inhalt unterschiedlich an, je nachdem, ob die Formulardaten gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um den ungültigen Daten ein bisschen mehr Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Feld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn etwas eingegeben wird, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt werden, wenn ihre Daten innerhalb oder außerhalb des spezifizierten Bereichs liegen.

> [!NOTE]
> Zu den numerischen Eingabetypen gehören `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum haben wir also beide? Das Problem ist wirklich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie vielleicht eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen, die hilfreicher für Benutzer sein wird, als nur "ungültig" zu sagen. Man möchte vielleicht sogar beide bereitstellen.

Lassen Sie uns ein Beispiel ansehen, das genau das tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, und zeigt an, ob sie erforderlich sind.

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

Es ist eine ähnliche Geschichte wie das, was wir zuvor im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die auf jeglichen `::after` Inhalt zutreffen, in eine separate Regel aufgeteilt haben und den separaten `::after` Inhalt für die Zustände `:required` und `:out-of-range` ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs ist, was passiert dann? Weil die Regel `:out-of-range` später im Quellcode erscheint als die Regel `:required`, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die "outside allowable value range"-Nachricht wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite zuerst geladen wird, wird "Erforderlich" zusammen mit einem roten Kreuz und einer Umrandung angezeigt. Wenn Sie ein gültiges Alter eingeben (d.h. im Bereich von 12-120), wird die Eingabe als gültig angezeigt. Wenn Sie jedoch das eingegebene Alter in eines ändern, das außerhalb des Bereichs liegt, dann erscheint "Outside allowable value range" in der Anzeige anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/wert außerhalb des Bereichs einzugeben, müssen Sie tatsächlich das Formular fokussieren und die Eingabe mit der Tastatur eingeben. Die Spinnertasten lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen/verringern.

## Styling von aktivierten und deaktivierten Eingaben, und Read-Only und Read-Write

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, geklickt, getippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gezielt werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn er das Formular absendet. Ein klassisches Beispiel ist ein Versandformular — üblicherweise werden Sie gefragt, ob Sie die gleiche Adresse für Rechnung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadressfelder einfach deaktivieren.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, sowie eine Checkbox, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressenfelder sind standardmäßig deaktiviert.

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

Wir haben die Einträge, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir sie mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Zuletzt haben wir noch etwas JavaScript verwendet, um die Deaktivierung der Rechnungsfelder umschaltbar zu machen:

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

Es nutzt das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (siehe auch [live hier anschauen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) ansehen):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Read-only und Read-write

In ähnlicher Weise wie `:disabled` und `:enabled` richten sich die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzer keine "read-only" Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch Werte aus "read-only" Eingaben beim Absenden des Formulars an den Server gesendet. Standardmäßig sind sie "read-write", das bedeutet, sie können bearbeitet werden.

Eine Eingabe wird mit dem `readonly`-Attribut als "read-only" festgelegt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorhergehenden Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, und alle abschließend benötigten Daten ergänzt, bevor er die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Lassen Sie uns ansehen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obere Gruppe von Formularelementen nicht bearbeitbar ist, jedoch werden die Werte gesendet, wenn das Formular gesendet wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

> **Anmerkung:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — checked, default, indeterminate

Wie wir in frühen Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} angekreuzt oder nicht angekreuzt sein. Aber es gibt noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Übereinstimmung mit Radios/Kontrollkästchen, die standardmäßig angekreuzt sind, beim Laden der Seite (d.h. durch Setzen des Attributs `checked` auf ihnen). Diese stimmen mit der Pseudoklasse {{cssxref(":default")}} überein, auch wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder angekreuzt noch nicht angekreuzt sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der Pseudoklasse {{cssxref(":indeterminate")}} überein. Mehr darüber, was das bedeutet, unten.

### :checked

Bei Auswahl, werden sie mit der Pseudoklasse {{cssxref(":checked")}} übereinstimmen.

Die häufigste Verwendung hiervon ist es, einen anderen Stil auf das Kontrollkästchen oder Radio-Button zu setzen, wenn es angekreuzt ist, in Fällen, in denen Sie das Standardsystem-Design mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` bei Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Rückblick sieht der `:checked`-Code aus unserem Beispiel für [Gestaltete Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) so aus:

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

Im Grunde haben wir das Styling für den "inneren Kreis" eines Radio-Buttons mit dem `::before` Pseudo-Element aufgebaut, aber ein `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf gesetzt. Wir verwenden dann ein [`transition`](/de/docs/Web/CSS/transition) um den generierten Inhalt auf dem Label schön animiert erscheinen zu lassen, wenn das Radio ausgewählt/angehakt wird. Der Vorteil der Verwendung eines Transforms anstatt des Übergangs [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt dass es von der Ecke des Kreises zu wachsen scheint, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die Pseudoklasse {{cssxref(":default")}} mit Radios/Kontrollkästchen überein, die standardmäßig angekreuzt sind, beim Laden der Seite, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um dem Benutzer einen Hinweis zu geben, welche die Standardwerte (oder Anfangsoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Auch die oben erwähnten Radios/Kontrollkästchen werden mit der Pseudoklasse {{cssxref(":indeterminate")}} übereinstimmen, wenn sie in einem Zustand sind, in dem sie weder angekreuzt noch nicht angekreuzt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe nicht angekreuzt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Hinweis sein, um Benutzern zu sagen, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels ansehen, die den Benutzer daran erinnern, welche die Standardoption war, und die Labels der Radio-Buttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zum mittleren Radio-Button-Eingabefeld hinzugefügt, sodass es beim Laden standardmäßig ausgewählt wird. Wir stylen es mit dem folgenden CSS:

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

Dies fügt ein kleines "Default"-Label auf dem Element hinzu, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den Nachfolger-Sibling-Kombinator (`~`) anstelle des nächsten-Sibling-Kombinators (`+`) verwenden — wir müssen dies tun, da das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — dies ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radio-Buttons mit dem folgenden CSS:

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

Dies erstellt einen lustigen kleinen animierten Umriss auf den Radio-Buttons, der hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Eine [interessante Beispiel zu `indeterminate` Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) finden Sie auf der Referenzseite für [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox).

## Mehr Pseudoklassen

Es gibt viele andere interessante Pseudoklassen, und wir haben keinen Platz, um über sie alle im Detail zu schreiben. Lassen Sie uns über einige weitere sprechen, denen Sie Zeit widmen sollten, sie zu untersuchen.

- Die Pseudoklasse {{cssxref(":focus-within")}} stimmt mit einem Element überein, das den Fokus hat oder ein Element _enthält_, das den Fokus hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein darin enthaltener Input fokussiert ist.
- Die Pseudoklasse {{cssxref(":focus-visible")}} stimmt mit fokussierten Elementen überein, die den Fokus per Tastatureingabe (anstatt Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderem) Fokus zeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} trifft auf {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente zu, die ihren Platzhalter anzeigen (d.h. den Inhalt des Attributs [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut in Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine vernünftige Browserunterstützung; die Spezifikation der Pseudoklasse `:blank` ist noch nicht abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, könnte das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, wird jedoch nur `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es für die gesamte Dauer des fokussierten Zustands sowohl `:invalid` als auch `:user-invalid` übereinstimmen. In ähnlicher Weise wie `:invalid`, wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als Nächstes betrachten wir etwas anderes — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
