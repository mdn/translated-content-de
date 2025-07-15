---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dies beinhaltete die Verwendung einiger Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zur Gestaltung von Formularen in unterschiedlichen Zuständen.

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
        Verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Sie sind möglicherweise bereits mit den folgenden Pseudoklassen vertraut:

- {{cssxref(":hover")}}: Selektiert ein Element nur, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Selektiert ein Element nur, wenn es fokussiert ist (d.h. indem es über die Tastatur angesprungen wird).
- {{cssxref(":active")}}: Selektiert ein Element nur, wenn es aktiviert wird (d.h. während darauf geklickt wird oder im Fall einer Tastaturaktivierung die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste gedrückt wird).

[CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielbedingungen, von denen Sie profitieren können. Wir werden diese weiter unten im Detail besprechen, aber kurz gesagt sind die Hauptklassen, die wir uns ansehen werden,:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gültig / ungültig gemäß den für sie festgelegten Validierungskontraints sind, oder innerhalb / außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel ist es, Elemente zu deaktivieren (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, sowie lese-schreib- oder schreibgeschützte Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}} und {{cssxref(":default")}}: Diese zielen jeweils auf Kontrollkästchen und Optionsschaltflächen ab, die aktiviert, in einem unbestimmten Zustand (weder markiert noch nicht markiert) sind, sowie auf die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) -Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier behandelten Pseudoklassen befassen sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungszustand (sind ihre Daten gültig oder nicht?). Sie werden viel mehr darüber erfahren, wie Sie Validierungskontraints im nächsten Artikel festlegen und kontrollieren können — [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber vorerst halten wir es in Bezug auf die Formularvalidierung einfach, damit es nicht verwirrend wird.

## Eingaben basierend darauf gestalten, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte hinsichtlich der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich (sie muss vor dem Absenden des Formulars ausgefüllt werden) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente verfügen über ein `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie diese Steuerung ausfüllen müssen, bevor das Formular erfolgreich gesendet wird. Zum Beispiel sind im folgenden Formular Vorname und Nachname erforderlich, die E-Mail-Adresse ist jedoch optional:

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

Diese beiden Zustände können Sie mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerungen haben einen durchgezogenen Rahmen, und die optionale Steuerung hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular ohne Ausfüllen einzureichen, um die Standardfehlermeldungen für die clientseitige Validierung zu sehen, die die Browser Ihnen geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' gegenüber 'optionalen' Elementen in Formularen nur mit Farbe zu gestalten, da dies nicht ideal für farbenblinde Menschen ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Die Standardkonvention im Web für den erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich" in Verbindung mit den jeweiligen Steuerelementen.
Im nächsten Abschnitt werden wir ein besseres Beispiel für die Kennzeichnung erforderlicher Felder mithilfe von `:required` und generierten Inhalten betrachten.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft auf die Pseudoklasse `:optional` stoßen. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling einfach standardmäßig anwenden und zusätzliche Stile für erforderliche Steuerungen hinzufügen könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das Attribut `required` hat, sind alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige, dem das Attribut zugewiesen ist, passt tatsächlich zu {{cssxref(':required')}}.

## Verwendung von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir den Einsatz [generierter Inhalte](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um etwas detaillierter darauf einzugehen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden, um einen Inhaltsblock vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhaltsblock wird nicht zum DOM hinzugefügt, sodass er für einige Bildschirmlesegeräte unsichtbar sein könnte. Da es sich um ein Pseudoelement handelt, kann es genauso wie ein tatsächlicher DOM-Knoten mit Styles anvisiert werden.

Dies ist sehr nützlich, wenn Sie einem Element einen visuellen Indikator hinzufügen möchten, wie zum Beispiel ein Label oder ein Symbol, wenn alternative Indikatoren verfügbar sind, um die Barrierefreiheit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Radiobuttons-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu handhaben, wenn ein Radiobutton ausgewählt ist:

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

Dies ist wirklich nützlich — Bildschirmlesegeräte geben ihren Benutzern bereits Bescheid, wenn ein Radiobutton oder Kontrollkästchen, auf das sie treffen, aktiviert/ausgewählt ist, also möchten Sie nicht, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen es, generierte Inhalte auf ihnen anzuzeigen. Alle Eingabetypen, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox` usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen `required`/`optional`-Beispiel, dieses Mal werden wir nicht das Aussehen des Inputs selbst ändern — wir verwenden generierte Inhalte, um ein kennzeichnendes Label hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir einen Absatz an die Spitze des Formulars hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmleserbenutzer erhalten "erforderlich" als zusätzlichen Informationsteil vorgelesen, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt darauf zu setzen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span` in eine neue Zeile unterhalb des Eingabefeldes fiel, weil sowohl das Eingabefeld als auch das Label auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>` so, dass es ein flexibler Container wird, aber auch anweisen, seinen Inhalt auf neue Zeilen zu wickeln, falls der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung dessen ist, dass das Label und das Eingabefeld auf getrennten Zeilen sitzen, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Linie wie das Eingabefeld sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als wäre er ein Knoten des Elements, auf dem er generiert wird, für die Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was unser Label sagen soll, und gestalten und positionieren es, wie wir möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerelemente basierend darauf gestalten, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle numerischer Daten können wir auch über innerhalb- und außerhalb-des-Bereichs-Daten sprechen). Formularelemente mit [Kontraintbeschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen gezielt angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es wert sind, berücksichtigt zu werden:

- Steuerungen ohne Kontraintvalidierung sind immer gültig und werden daher mit `:valid` übereinstimmen.
- Steuerungen mit `required`, die keinen Wert haben, gelten als ungültig — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerungen mit integrierter Validierung wie `<input type="email">` oder `<input type="url">` sind (abgeglichen mit) `:invalid`, wenn die eingegebenen Daten nicht das gewünschte Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerungen, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, werden (abgeglichene) `:invalid`, sind aber auch durch {{cssxref(":out-of-range")}} abgedeckt, wie Sie später sehen werden.
- Es gibt noch andere Möglichkeiten, ein Element durch `:valid`/`:invalid` abgleichen zu lassen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Schauen wir uns ein Beispiel für `:valid`/`:invalid` an (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und schauen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, auf denen generierte Inhalte angezeigt werden, die wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedliche generierte Inhalte absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz. Um ungültigen Daten noch etwas mehr Dringlichkeit zu verleihen, haben wir den Eingabefeldern auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die notwendigen Texteingabefelder ungültig sind, wenn sie leer sind, aber gültig, wenn etwas ausgefüllt ist. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb- und Außerhalb-des-Bereichs-Daten

Wie oben angedeutet, gibt es zwei andere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese ordnen numerische Eingaben zu, bei denen Bereichslimits durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) definiert sind, je nachdem, ob ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch von der Pseudoklasse `:valid` erfasst werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, ebenfalls von der Pseudoklasse `:invalid` erfasst werden. Warum gibt es also beide? Das Problem ist wirklich ein semantisches — außerhalb-des-Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für außerhalb-des-Bereichs-Eingaben bereitstellen möchten, die für Benutzer hilfreicher ist als nur "ungültig" zu sagen. Möglicherweise möchten Sie sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um außerhalb-des-Bereichs-Nachrichten für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf alle `::after`-Inhalte angewendet werden, in eine separate Regel aufgeteilt haben und den separaten `::after`-Inhalten für `:required` und `:out-of-range` eigene Inhalte und Stil verliehen haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe gleichzeitig erforderlich und außerhalb des Bereichs ist, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, kommen die [Kaskadenregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Altersfeld auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des zulässigen Wertebereichs" angezeigt, anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen / außerhalb-des-Bereichs-Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es mit der Tastatur eingeben. Die Spinnbuttons lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen / verringern.

## Steuerungen basierend darauf gestalten, ob sie aktiviert oder deaktiviert, und ob sie nur lesend oder beschreibbar sind

Ein aktiviertes Element ist eines, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben werden, usw. Ein deaktiviertes Element hingegen kann in keiner Weise manipuliert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gezielt angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal möchten Sie, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, diese Daten nicht einmal senden, wenn das Formular übermittelt wird. Ein klassisches Beispiel ist ein Versandformular — oft werden Sie gefragt, ob Sie dieselbe Adresse für die Rechnung und den Versand verwenden möchten; wenn ja, können Sie einfach eine einzelne Adresse an den Server senden und die Rechnungsadressfelder am besten vollständig deaktivieren.

Schauen wir uns ein Beispiel an, das genau das tut. Zuerst ist das HTML ein einfaches Formular, das Texteingaben enthält, sowie ein Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Da die Labels direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren / deaktivieren und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [hier live sehen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Nur lesend und beschreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Genauso wie bei deaktivierten Eingaben kann ein Benutzer nicht lernschreibenen Eingaben ändern. Jedoch werden im Gegensatz zu deaktivierten Eingaben die Werte der nur-leesen Eingaben an den Server gesendet. Beschreibbar bedeutet, dass sie bearbeitet werden können - ihr Standardzustand.

Ein Eingabefeld wird mithilfe des Attributes `readonly` auf nur lesend gesetzt. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, bei der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie an einem Ort überprüfen, eventuell noch erforderliche Daten hinzufügen und dann die Bestellung durch Absenden bestätigen kann. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Teil des HTML sieht folgendermaßen aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie feststellen, dass der obere Satz von Formularelementen nicht bearbeitet werden kann, jedoch werden die Werte beim Absenden des Formulars übermittelt. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` wie folgt formatiert:

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

> [!NOTE]
> `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — checked, default, indeterminate

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Aber es gibt noch ein paar andere Zustände, die zu berücksichtigen sind:

- {{cssxref(":default")}}: Passt auf Radio- und Kontrollkästchen, die standardmäßig beim Laden der Seite aktiviert sind (d.h. durch Setzen des `checked`-Attributes auf sie). Diese passen zur Pseudoklasse {{cssxref(":default")}}, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radio- und Kontrollkästchen weder markiert noch nicht markiert sind, gelten sie als _unbestimmt_ und passen zur Pseudoklasse {{cssxref(":indeterminate")}}. Mehr dazu weiter unten.

### :checked

Wenn aktiviert, werden sie von der Pseudoklasse {{cssxref(":checked")}} erfasst.

Die häufigste Verwendung hierfür ist das Hinzufügen eines anderen Styles auf das Kontrollkästchen oder das Optionsfeld, wenn es aktiviert ist, in Fällen, in denen Sie das standardmäßige Styling des Systems mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [die Verwendung von `appearance: none` auf Radio-/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zur Auffrischung sieht der `:checked`-Code aus unserem [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)-Beispiel so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem Pseudoelement `::before` auf, setzen aber eine `scale(0)`-`transform` darauf. Wir verwenden dann eine `transition`, um den generierten Inhalt auf dem Label schön animiert erscheinen zu lassen, wenn das Radio ausgewählt / aktiviert wird. Der Vorteil der Verwendung einer Transformation anstelle des Übergangs von `width`/`height` besteht darin, dass Sie `transform-origin` verwenden können, um es vom Zentrum des Kreises aus wachsen zu lassen, anstelle davon, dass es von der Ecke des Kreises aus wächst, und es gibt kein Springverhalten, da keine Kastenmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die Pseudoklasse {{cssxref(":default")}} auf Radio- und Kontrollkästchen, die standardmäßig beim Laden der Seite aktiviert sind, selbst wenn sie deaktiviert werden. Dies könnte nützlich sein, um ein Kennzeichen zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Auch die oben erwähnten Radio- und Kontrollkästchen werden von der Pseudoklasse {{cssxref(":indeterminate")}} erfasst, wenn sie sich in einem Zustand befinden, in dem sie weder markiert noch nicht markiert sind. Was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht ausgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft per JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden, aber ein Anwendungsfall könnte ein Indikator sein, um Benutzern zu signalisieren, dass sie wirklich ein Radiobutton auswählen müssen, bevor sie weitermachen.

Schauen wir uns einige modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons stilieren, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf die mittlere Radiobutton-Eingabe gesetzt, sodass es standardmäßig beim Laden ausgewählt wird. Wir haben dies dann mit dem folgenden CSS gestylt:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live bei GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html))).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, wäre kein unbestimmter Zustand vorhanden, den wir gestalten könnten. Wir gestalten die unbestimmten Radiobuttons mit folgendem CSS:

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

Dies erzeugt einen lustigen kleinen animierten Umriss auf den Radiobuttons, der hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live bei GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Ein [interessantes Beispiel für die Verwendung von `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) finden Sie auf der Referenzseite zu [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox).

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben nicht den Platz, um sie alle im Detail zu behandeln. Lassen Sie uns über einige weitere sprechen, die Sie sich ansehen sollten.

- Die Pseudoklasse {{cssxref(":focus-within")}} passt auf ein Element, das den Fokus erhalten hat oder ein enthaltenes Element fokussiert hat. Dies ist nützlich, wenn Sie ein gesamtes Formular auf eine bestimmte Weise hervorheben möchten, wenn ein darin enthaltenes Eingabeelement fokussiert ist.
- Die Pseudoklasse {{cssxref(":focus-visible")}} passt auf fokussierte Elemente, die durch Tastatureingabe (statt durch Touch oder Maus) fokussiert wurden — nützlich, wenn Sie einen anderen Stil für die Tastaturfokussierung im Vergleich zur Maus- (oder anderen) Fokussierung anzeigen möchten.
- Die Pseudoklasse {{cssxref(":placeholder-shown")}} passt auf {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elemente, die ihren Platzhalter anzeigen (d.h. den Inhalt des `placeholder`-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher noch nicht gut in Browsern unterstützt:

- Die Pseudoklasse {{cssxref(":blank")}} wählt leere Formularelemente aus. {{cssxref(":empty")}} passt auch auf Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — es passt auch auf andere {{Glossary("void_element", "leere Elemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Spezifikation der Pseudoklasse `:blank` ist noch nicht abgeschlossen, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, {{cssxref(":invalid")}} ähnlich sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert beim Fokussieren des Eingabefelds gültig ist, kann das Element als Nutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, mit `:invalid` übereinstimmen, wird jedoch erst dann mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es für die gesamte Dauer des Fokus mit sowohl `:invalid` als auch `:user-invalid` übereinstimmen. In ähnlicher Weise wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter damit und erstellen Sie einige lustige Formularstile! Als Nächstes werden wir zu etwas anderem wechseln — [clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
