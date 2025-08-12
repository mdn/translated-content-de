---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das allgemeine Styling verschiedener Formularelemente behandelt. Dies beinhaltete auch die Nutzung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in unterschiedlichen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeinem Wissen über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und Pseudoelemente</a
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

## Welche Pseudoklassen stehen zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z.B. wenn es über die Tastatur angesteuert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z.B. während es angeklickt wird oder die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste bei einer Tastaturaktivierung gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Folgenden detaillierter besprechen, aber kurz gesagt, die Hauptklassen, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielgerichtete Elemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Formularelemente, die gültig/nicht gültig gemäß den auf ihnen gesetzten Validierungsbeschränkungen sind, oder innerhalb/außerhalb des Bereichs.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Wählen Sie Elemente aus, die deaktiviert werden können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie momentan aktiviert oder deaktiviert sind, und schreib-/nicht-schreibgeschützte Formularelemente (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielgerichtete Kontrollkästchen und Optionsfelder, die markiert, in einem unbestimmten Zustand (weder markiert noch nicht markiert) sind, sowie die standardmäßig ausgewählten Optionen beim Laden der Seite (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit gesetztem [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) Attribut, oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit gesetztem [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected) Attribut).

Es gibt viele weitere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen sind dazu gedacht, sehr spezifische Nischenprobleme zu lösen. Die oben genannten UI-Pseudoklassen haben eine exzellente Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularelementen basierend auf ihrem Validierungszustand (ist ihre Eingabe gültig oder nicht?). Sie werden in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — viel mehr über das Setzen und Kontrollieren von Validierungsbeschränkungen lernen, aber vorerst halten wir die Dinge bezüglich der Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Eingaben stylen basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte bezüglich der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein verfügbares `required` Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich eingereicht wird. Zum Beispiel sind im folgenden Formular Vorname und Nachname erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen abgleichen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

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
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}

input:hover,
input:focus {
  background-color: #eeeeee;
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

Die erforderlichen Felder haben einen durchgezogenen Rahmen, und das optionale Feld hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular einzureichen, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen zu sehen, die Ihnen die Browser standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, mit Farben allein zwischen 'erforderlichen' und 'optional' Elementen in Formularen zu unterscheiden, da dies für Farbenblinde nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard im Web für den Status 'erforderlich' ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den jeweiligen Bedienelementen. Im nächsten Abschnitt sehen wir uns ein besseres Beispiel für die Kennzeichnung erforderlicher Felder mit `:required` und generiertem Inhalt an.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional` Pseudoklasse nicht sehr häufig verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig vornehmen können und zusätzliche Styles für erforderliche Elemente hinzufügen können.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das `required` Attribut gesetzt hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt ist, aber nur der mit dem zugewiesenen Attribut wird tatsächlich von {{cssxref(':required')}} betroffen sein.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir den Gebrauch von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, darüber etwas ausführlicher zu sprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um einen Inhaltsabschnitt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsabschnitt wird nicht zum DOM hinzugefügt, sodass er möglicherweise für einige Bildschirmleser unsichtbar ist. Da es sich um ein Pseudoelement handelt, kann es mit Styles auf die gleiche Weise angesprochen werden wie ein tatsächlicher DOM-Knoten.

Dies ist sehr nützlich, wenn Sie einem Element einen visuellen Indikator wie ein Label oder ein Icon hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Radio-Button-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt wird:

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

Dies ist wirklich nützlich — Bildschirmleser informieren ihre Benutzer bereits, wenn ein angetroffenes Kontrollkästchen oder Optionsfeld markiert oder ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen die Anzeige von generiertem Inhalt. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel zu erforderlichen/optionalen Eingaben, dieses Mal werden wir das Erscheinungsbild der Eingaben selbst nicht ändern — wir verwenden generierten Inhalt, um ein kennzeichnendes Label hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst fügen wir dem Formular einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmleserbenutzer bekommen "erforderlich" als zusätzliche Information vorgelesen, wenn sie zu jeder erforderlichen Eingabe kommen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass das span eine neue Zeile unterhalb der Eingabe annahm, weil die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, sagen ihm aber auch, dass es seinen Inhalt auf neue Zeilen verteilen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf der gleichen Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, statt relativ zum `<body>` (Der generierte Inhalt verhält sich, als wäre er ein Knoten des Elements, auf dem er generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Text "erforderlich", was wir wollten, dass unser Label sagt, und gestalten und positionieren ihn, wie wir es möchten. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuern von Elementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch von innerhalb oder außerhalb des Bereichs sprechen). Formularelemente mit [Beschränkungen der Eingabekontrolle](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen ansprechen. Einige wichtige Punkte:

- Elemente ohne Beschränkungsvalidierung sind immer gültig und werden daher mit `:valid` abgeglichen.
- Elemente mit `required` darauf, die keinen Wert haben, werden als ungültig gezählt — sie werden sowohl mit `:invalid` als auch mit `:required` abgeglichen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (abgeglichen mit) `:invalid`, wenn die eingegebenen Daten nicht dem erwarteten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichslimits liegt, die durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute angegeben sind, werden (abgeglichen mit) `:invalid`, aber auch {{cssxref(":out-of-range")}}, wie wir später sehen werden.
- Es gibt noch andere Möglichkeiten, ein Element mit `:valid`/`:invalid` abzugleichen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s zum Generieren von Inhalten, die wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann absolut verschiedene generierte Inhalte, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein wenig zusätzliche Dringlichkeit für die ungültigen Daten hinzuzufügen, haben wir auch den Eingaben einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich" Labels verwendet hatten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld andererseits ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb und außerhalb des Bereichs liegende Daten

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit nummerischen Eingaben überein, bei denen Bereichslimits durch die [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribute festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid` Pseudoklasse abgeglichen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid` Pseudoklasse abgeglichen werden. Warum also beide haben? Das Problem ist wirklich eine Frage der Semantik — außerhalb des Bereichs zu sein, ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie eventuell eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Sie könnten sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um für die numerischen Eingaben Nachrichten außerhalb des Bereichs bereitzustellen, sowie zu sagen, ob sie erforderlich sind.

Die numerische Eingabe sieht folgendermaßen aus:

```html
<div>
  <label for="age">Age (must be 12+): </label>
  <input id="age" name="age" type="number" min="12" max="120" required />
  <span></span>
</div>
```

Und das CSS sieht folgendermaßen aus:

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

Das ist eine ähnliche Geschichte wie zuvor im `:required` Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after` Inhalt angewendet werden, in eine separate Regel aufgeteilt haben und den einzelnen `::after` Inhalten für die `:required` und `:out-of-range` Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Nummerneingabe sowohl erforderlich als auch außerhalb des Bereichs ist, was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Das funktioniert ziemlich gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Meldung "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es mithilfe der Tastatur eingeben. Die Cursor-Schaltflächen lassen Sie den Wert nicht außerhalb des zulässigen Bereichs inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben sowie schreibgeschützten und beschreibbaren Eingaben

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, hineingetippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit den {{cssxref(":enabled")}} und {{cssxref(":disabled")}} Pseudoklassen angesprochen werden. Warum sind deaktivierte Eingabefelder nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn er das Formular einreicht. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungs- und Versandzwecke verwenden möchten; wenn ja, können Sie einfach eine Adresse an den Server senden und können die Rechnungsaddressfelder einfach deaktivieren.

Werfen wir einen Blick auf ein Beispiel, das genau dies tut. Zunächst ist der HTML-Code ein einfaches Formular mit Texteingabefeldern sowie einem Kontrollkästchen, um das Aktivieren/Deaktivieren der Rechnungsadresse umzuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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
  background: #eeeeee;
  border: 1px solid #cccccc;
}

label:has(+ :disabled) {
  color: #aaaaaa;
}
```

Wir haben direkt die Eingaben, die wir deaktivieren möchten, mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da die Labels direkt vor ihren Eingaben liegen, haben wir sie mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun haben wir finally etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren, und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [hier live anschauen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise zu `:disabled` und `:enabled`, die `:read-only` und `:read-write` Pseudoklassen zielen auf zwei Zustände, zwischen denen Formulareingaben wechseln. Ähnlich wie bei deaktivierten Eingaben können Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch an den Server übermittelt. Beschreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut schreibgeschützt gesetzt. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf der der Entwickler die auf den vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, alle erforderlichen zusätzlichen Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (sehen Sie sich [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Ausschnitt des HTML-Codes sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Gruppe von Formularelementen nicht bearbeitet werden kann, dennoch werden die Werte gesendet, wenn das Formular abgesendet wird. Wir haben die Formularkontrollen mit den `:read-only` und `:read-write` Pseudoklassen gestylt, wie folgt:

```css
input:read-only,
textarea:read-only {
  border: 0;
  box-shadow: none;
  background-color: white;
}

textarea:read-write {
  box-shadow: inset 1px 1px 3px #cccccc;
  border-radius: 5px;
}
```

Das vollständige Beispiel sieht wie folgt aus:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchen-Zustände — aktiviert, Standard, unbestimmt

Wie in früheren Artikeln im Modul gesehen, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Passt zu Radiobuttons/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. durch Setzen des `checked` Attributs auf ihnen). Diese passen zur {{cssxref(":default")}} Pseudoklasse, auch wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und passen zur {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu unten.

### :checked

Wenn aktiviert, werden sie mit der {{cssxref(":checked")}} Pseudoklasse abgeglichen.

Der häufigste Anwendungsfall hierfür ist, einen anderen Style auf das Kontrollkästchen oder das Optionsfeld anzuwenden, wenn es aktiviert ist, in Fällen, in denen Sie das systemeigene Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst neu aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` bei Radiobuttons/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Zur Erinnerung, der `:checked` Code aus unserem [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel sieht so aus:

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

Im Grunde bauen wir das Styling für einen Radiobuttons "inneren Kreis" mit dem `::before` Pseudoelement, setzen darauf aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform). Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön zu animieren, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung eines Transforms anstelle von Übergängen von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt es aus der Ecke des Kreises wachsen zu lassen, und es gibt kein Springen, da keine Boxmodell-Eigenschaftswertänderungen vorgenommen werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}} Pseudoklasse zu Radiobuttons/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite, selbst wenn sie deaktiviert werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzern in Erinnerung zu rufen, was die Standardwerte (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben genannten Radiobuttons/Kontrollkästchen werden mit der {{cssxref(":indeterminate")}}Pseudoklasse abgeglichen, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Zu den indeterminierten Elementen gehören:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle gleich benannten Radiobuttons nicht aktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern sagt, dass sie wirklich ein Radiobutton auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardeinstellung war, und die Labels von Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut zum mittleren Radiobutton hinzgefügt, sodass es standardmäßig beim Laden ausgewählt iseing. Wir stylen es dann mit dem folgenden CSS:

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

Dies bietet ein kleines "Standard" Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden-Geschwister-Kombinator (`~`) anstelle des nächsten-Geschwister-Kombinators (`+`) verwenden — wir benötigen dies, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihe kommt.

Sehen Sie unten das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zum Stylen. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erzeugt eine kleine animierte Umrandung auf den Radiobuttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie unten das Live-Ergebnis:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate` Zustände beinhaltet](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um über alle im Detail zu schreiben. Lassen Sie uns über einige weitere sprechen, die Sie sich näher ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse passt zu einem Element, das den Fokus erhalten hat oder ein Element _enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie ein ganzes Formular auf irgendeine Weise hervorheben möchten, wenn ein Eingabefeld innerhalb davon fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse passt zu fokussierten Elementen, die über eine Tastaturinteraktion (anstatt über Berührung oder Maus) den Fokus erhalten haben — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus (oder anderem) Fokus zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse passt zu {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, die ihren Platzhalter zeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributes), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} passt auch zu Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es passt auch zu anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browser-Unterstützung; die `:blank` Pseudoklassen-Spezifikation ist noch nicht fertig, sie wird daher aktuell in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse, wenn sie unterstützt wird, wird ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert beim Empfang des Fokus gültig ist, könnte das Element beim Eingeben von Daten während es vorübergehend ungültig ist, `:invalid` erreichen, aber wird nur `:user-invalid` erreichen, wenn das Element den Fokus verliert. Falls der Wert ursprünglich ungültig war, wird es für die gesamte Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` erreichen. In ähnlicher Weise wie bei `:invalid`, wird es aufhören, `:user-invalid` zu erreichen, wenn der Wert dann gültig wird.

## Zusammenfassung

Dies vervollständigt unseren Überblick über UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Experimentieren Sie weiter mit ihnen, und erstellen Sie einige unterhaltsame Formularstile! Als nächstes gehen wir zu etwas anderem — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
