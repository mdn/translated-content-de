---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularsteuerungen auf allgemeine Weise behandelt. Dazu gehören auch einige Pseudoklassen, wie zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen für das Styling von Formularen in verschiedenen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich allgemeiner Kenntnisse über
        <a href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements">Pseudoklassen und Pseudoelemente</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis dafür, welche Teile von Formularen schwer zu stylen sind und warum; lernen,
        was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (z. B. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (z. B. während darauf geklickt wird oder die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste beim Tastaturaktivieren gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen mittlerweile vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten mehrere nützliche Zielkriterien, die Sie nutzen können. Wir werden diese im Detail in den folgenden Abschnitten besprechen, aber kurz gesagt, die Hauptklassen, die wir uns anschauen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente ab, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Reference/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularsteuerungen ab, die gültig/ungültig sind gemäß den für sie festgelegten Formularvalidierungsbeschränkungen oder innerhalb/außerhalb eines Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und auf schreibgeschützte oder beschreibbare Formularsteuerungen (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Reference/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielgerichtetes Ansprechen von Kontrollkästchen und Optionsfeldern, die angekreuzt, in einem unbestimmten Zustand (weder angekreuzt noch ungekreuzt) sind, und der standardmäßig ausgewählten Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked), oder ein [`<option>`](/de/docs/Web/HTML/Reference/Elements/option) Element mit dem Attribut [`selected`](/de/docs/Web/HTML/Reference/Elements/option#selected)).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen betreffen das Styling von Formularsteuerungen basierend auf ihrem Validierungszustand (ist deren Daten gültig oder nicht?) Sie werden in unserem nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen lernen, aber vorerst halten wir die Dinge in Bezug auf die Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Eingaben basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein verfügbares `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich gesendet wird. Zum Beispiel sind der Vorname und Nachname im Formular unten erforderlich, aber die E-Mail-Adresse ist optional:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

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

Die erforderlichen Steuerelemente haben einen soliden Rahmen, und das optionale Steuerelement hat einen gestrichelten Rahmen. Sie können auch versuchen, das Formular ohne Ausfüllen zu senden, um die Fehlernachrichten der client-seitigen Validierung zu sehen, die Browser Ihnen standardmäßig geben:

{{EmbedLiveSample("optional-required-styles", , "400px", , , , , "allow-forms")}}

Im Allgemeinen sollten Sie vermeiden, 'erforderliche' vs. 'optionale' Elemente in Formularen nur anhand der Farbe zu stylen, da dies für farbenblinde Menschen nicht ideal ist:

```css example-bad
input:required {
  border: 2px solid red;
}

input:optional {
  border: 2px solid green;
}
```

Der Standard auf dem Web für erforderlichen Status ist ein Sternchen (`*`) oder das Wort "erforderlich", das mit den jeweiligen Steuerelementen verknüpft ist. Im nächsten Abschnitt werden wir ein besseres Beispiel dafür betrachten, wie man erforderliche Felder mit `:required` und generiertem Inhalt anzeigt.

> [!NOTE]
> Wahrscheinlich werden Sie die `:optional`-Pseudoklasse nicht sehr oft verwenden. Formularsteuerungen sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig durchführen und darüber hinaus Stil für erforderliche Steuerelemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer Gruppe mit demselben Namen das `required`-Attribut gesetzt hat, werden alle Radiobuttons ungültig sein, bis einer ausgewählt ist, aber nur der mit dem zugewiesenen Attribut wird tatsächlich `:required` entsprechen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir den Einsatz von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um ein wenig genauer darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Das Stück Inhalt wird nicht zum DOM hinzugefügt, sodass es für einige Bildschirmlesegeräte unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es auf dieselbe Weise wie jedes tatsächliche DOM-Element mit Stilen versehen werden.

Dies ist wirklich nützlich, wenn Sie einem Element, wie einem Label oder Symbol, einen visuellen Indikator hinzufügen möchten, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Beispielsweise verwenden wir in unserem [Beispiel mit benutzerdefinierten Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises des benutzerdefinierten Radiobuttons zu handhaben, wenn ein Radiobutton ausgewählt ist:

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

Dies ist wirklich nützlich — Bildschirmlesegeräte lassen ihre Benutzer bereits wissen, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, angekreuzt/ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Das Vorhandensein eines rein visuellen Indikators löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Hinzufügen von generiertem Inhalt auf ihnen. Alle Eingabefelder, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel mit erforderlichen/optionalen Feldern von zuvor, diesmal werden wir das Erscheinungsbild des Eingabefelds selbst nicht ändern — wir werden generierten Inhalt verwenden, um ein beschreibendes Label hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst fügen wir einen Absatz oben im Formular hinzu, der erklärt, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Bildschirmlesegeräten erhalten "erforderlich" als zusätzliche Information vorgelesen, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Reference/Elements/span) hinzu, um den generierten Inhalt daran anzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das Span auf eine neue Linie unter die Eingabe fiel, da die Eingabe und das Label beide mit `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, aber auch um seine Inhalte auf neue Zeilen zu umschlagen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es in derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich beim Positionieren wie ein Kindknoten des Elements, auf dem es generiert wird).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was das war, was unser Label sagen sollte, und stylen und positionieren es wie gewünscht. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerung basierend darauf stylen, ob ihre Daten gültig sind

Das andere wirklich wichtige grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularsteuerungselements gültig oder ungültig sind (im Fall von numerischen Daten können wir auch über innerhalb des Bereichs und außerhalb des Bereichs sprechen). Formularsteuerelemente mit [Einschränkungen](/de/docs/Web/HTML/Guides/Constraint_validation) können basierend auf diesen Zuständen ausgewählt werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die beachtet werden sollten:

- Steuerungselemente ohne Einschränkungsvalidierung werden immer gültig sein und somit mit `:valid` übereinstimmen.
- Steuerungselemente mit `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerungselemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (übereinstimmende) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerungselemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegten Bereichsgrenzen liegt, sind (übereinstimmende) `:invalid`, aber auch mit {{cssxref(":out-of-range")}} übereinstimmend, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) sehen werden. Wir halten die Dinge aber zunächst einfach.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und schauen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um Inhalte zu generieren, mit denen wir Indikatoren für gültige/ungültige Daten bereitstellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedliche generierte Inhalte basierend darauf, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, jeweils. Um den ungültigen Daten etwas Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die Labels "erforderlich" verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe hingegen ist gültig, wenn leer, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie wir oben angedeutet haben, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegt sind, wenn deren Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid`-Pseudoklasse übereinstimmen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid`-Pseudoklasse übereinstimmen werden. Warum haben wir also beide? Das Problem ist eigentlich eines der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die hilfreicher für die Benutzer ist als nur "ungültig". Vielleicht möchten Sie sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten außerhalb des Bereichs für die numerischen Eingaben bereitzustellen, zusätzlich dazu, dass sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in einer separaten Regel gesplittet haben und den separaten `::after`-Inhalten für `:required` und `:out-of-range` ihre eigenen Inhalte und Stil gegeben haben. Sie können es hier versuchen:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahl-Eingabeelemente sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig sind, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode als die `:required`-Regel erscheint, kommen die [Cascading-Regeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) ins Spiel, und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite zuerst lädt, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter in einen außerhalb des Bereichs liegenden Eintrag ändern, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und über die Tastatur eingeben. Die Spinner-Schaltflächen erlauben es Ihnen nicht, den Wert außerhalb des zulässigen Bereichs zu erhöhen/verringern.

## Eingabeelemente basierend darauf stylen, ob sie aktiviert oder deaktiviert sind, und ob sie schreibgeschützt oder beschreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingegeben werden, usw. Ein deaktiviertes Element hingegen kann in keiner Weise interaktiv sein, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten nicht auf einen bestimmten Benutzer zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — in der Regel werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandzwecke verwenden möchten; falls dies der Fall ist, können Sie einfach eine einzige Adresse an den Server senden und möglicherweise die Rechnungsadresseingaben deaktivieren.

Schauen wir uns ein Beispiel an, das dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, plus ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben direkt mit `input[type="text"]:disabled` ausgewählt, wollten aber auch die entsprechenden Textetiketten ausgrauen. Da die Etiketten direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Schließlich haben wir einige JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Etiketten umzuschalten.

Sie können das Beispiel in Aktion unten sehen (auch [siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und Schreibbar

In ähnlicher Weise zu `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben können Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mit dem Attribut `readonly` schreibgeschützt gemacht. Stellen Sie sich beispielsweise eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten ausgefüllten Details auf diese Seite übermittelt hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, alle erforderlichen Daten hinzufügt und dann die Bestellung durch Absenden bestätigt. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (sehen Sie sich [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel an; auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML ist wie folgt — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie feststellen, dass die obere Reihe von Formularelementen nicht bearbeitbar ist, die Werte jedoch gesendet werden, wenn das Formular gesendet wird. Wir haben die Formularelemente über die `:read-only` und `:read-write` Pseudoklassen wie folgt gestylt:

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

Das vollständige Beispiel sieht folgendermaßen aus:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Anmerkung:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Zustände von Radios und Kontrollkästchen — geprüft, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} angekreuzt oder ungekreuzt sein. Es gibt jedoch noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Passt auf Radios/Kontrollkästchen, die standardmäßig angekreuzt sind, beim Laden der Seite (d.h. durch Setzen des `checked`-Attributs auf sie). Diese passen zur Pseudoklasse {{cssxref(":default")}}, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder angekreuzt noch ungekreuzt sind, werden sie als _unbestimmt_ betrachtet und passen zur Pseudoklasse {{cssxref(":indeterminate")}}. Mehr darüber, was dies bedeutet, erfahren Sie unten.

### :checked

Wenn angekreuzt, passen sie zur Pseudoklasse {{cssxref(":checked")}}.

Die häufigste Verwendung dafür ist, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton anzuwenden, wenn er angekreuzt ist, in Fällen, in denen Sie die systemeigene Standardstilisierung mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [die Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Als Rückblick sieht der `:checked`-Code aus unserem [Beispiel mit gestylten Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) folgendermaßen aus:

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

Im Wesentlichen bauen wir das Styling des "inneren Kreises" eines Radiobuttons mit dem Pseudoelement `::before` auf, setzen jedoch einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt beim Auswählen/Auswählen des Radios schön in Ansicht zu animieren. Der Vorteil der Verwendung einer Transformation anstelle des Übergangs von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises wachsen zu lassen, anstatt scheinbar aus der Ecke des Kreises zu wachsen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, passt die {{cssxref(":default")}}-Pseudoklasse zu Radios/Kontrollkästchen, die standardmäßig angekreuzt sind, beim Laden der Seite, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einem Benutzer eine Erinnerung zu geben, was die Standardoptionen (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben genannten Radios/Kontrollkästchen durch die {{cssxref(":indeterminate")}}-Pseudoklasse übereinstimmen, wenn sie sich in einem Zustand befinden, in dem sie weder angekreuzt noch ungekreuzt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht angekreuzt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Das ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darauf hinzuweisen, dass sie wirklich ein Radiobutton auswählen müssen, bevor sie fortfahren.

Lassen Sie uns einige modifizierte Versionen des vorherigen Beispiels ansehen, die dem Benutzer eine Erinnerung daran geben, was die Standardoption war, und die Labels von Radiobuttons im unbestimmten Zustand stylen. Beide Beispiele haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radiobutton gesetzt, sodass er standardmäßig geladen wird. Wir stylen dieses mit dem folgenden CSS:

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

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand, den man stilisieren könnte. Wir stylen die unbestimmten Radiobuttons mit folgendem CSS:

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

Dies erzeugt eine lustige kleine animierte Umrandung auf den Radiobuttons, die hoffentlich darauf hindeutet, dass Sie einen von ihnen auswählen müssen!

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Sie können ein [interessantes Beispiel mit `indeterminate`-Zuständen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite zu [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht genügend Platz, um sie alle im Detail zu behandeln. Lassen Sie uns über ein paar weitere sprechen, die Sie sich ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse passt auf ein Element, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein darin enthaltenes Eingabeelement fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse passt auf fokussierte Elemente, die den Fokus über eine Tastaturinteraktion erhalten haben (statt über Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus (oder anderem) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse passt auf {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elemente, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind auch interessant, aber noch nicht gut von Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — sie stimmt auch mit anderen {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine angemessene Browserunterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, sodass sie noch in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich der {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabeelement den Fokus erhält, kann das Element `:invalid` entsprechen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, es wird jedoch nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er sowohl `:invalid` als auch `:user-invalid` während der gesamten Fokusdauer entsprechen. Ähnlich wie bei `-invalid` wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen herum und erstellen Sie einige unterhaltsame Formularstile! Als Nächstes werden wir zu etwas anderem übergehen — [client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Customizable_select", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}
