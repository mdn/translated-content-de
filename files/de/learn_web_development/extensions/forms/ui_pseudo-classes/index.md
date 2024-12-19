---
title: UI-Pseudoklassen
slug: Learn_web_development/Extensions/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

In den vorherigen Artikeln haben wir uns mit der allgemeinen Gestaltung verschiedener Formularelemente beschäftigt. Dabei wurde auch der Einsatz von Pseudoklassen behandelt, beispielsweise die Verwendung von `:checked`, um ein Kontrollkästchen nur dann zu stylen, wenn es ausgewählt ist. In diesem Artikel untersuchen wir die verschiedenen verfügbaren UI-Pseudoklassen, um Formulare in unterschiedlichen Zuständen zu stylen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, einschließlich des
        allgemeinen Wissens über
        <a
          href="/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements"
          >Pseudoklassen und -elemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu stylen sind und warum; und zu lernen,
        wie man sie anpassen kann.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es im Fokus steht (d.h. wenn es über die Tastatur fokussiert wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die <kbd>Return</kbd> / <kbd>Enter</kbd>-Taste gedrückt wird, im Fall einer Tastaturaktivierung).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen an. Diese bieten mehrere nützliche Bedingungen, die Sie nutzen können. Wir werden diese im Detail in den folgenden Abschnitten besprechen, aber kurz gesagt, die wichtigsten, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielsetzung von Elementen, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen)), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielsetzung von Formularsteuerelementen, die gültig/ungültig gemäß den an ihnen gesetzten Validierungsbeschränkungen sind oder sich innerhalb/außerhalb des erlaubten Bereichs befinden.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielsetzung von Elementen, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und schreibbare oder schreibgeschützte Formularsteuerelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut gesetzt).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Ziel setzen auf Kontrollkästchen und Optionsfelder, die ausgewählt, in einem unbestimmten Zustand sind (weder ausgewählt noch nicht ausgewählt) und die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut gesetzt).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen sind auf die Lösung sehr spezifischer Nischenprobleme ausgerichtet. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Unterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier diskutierten Pseudoklassen befassen sich mit der Stilgebung von Formularsteuerelementen basierend auf ihrem Validierungszustand (ob ihre Daten gültig sind oder nicht). Sie werden viel mehr über das Setzen und Kontrollieren von Validierungsbeschränkungen in unserem nächsten Artikel lernen — [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) — aber für den Moment werden wir die Dinge bezüglich der Formularvalidierung einfach halten, damit es keine Verwirrung gibt.

## Eingaben stylen, je nachdem, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der Client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (d.h. sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das, wenn gesetzt, bedeutet, dass Sie diese Felder ausfüllen müssen, bevor das Formular erfolgreich abgesendet werden kann. Zum Beispiel:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} vergleichen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Steuerelemente hätten einen schwarzen Rahmen und das optionale Steuerelement einen silbernen Rahmen, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen Validierungsfehlermeldungen des Browsers zu sehen.

Das obige Formular ist nicht schlecht, aber auch nicht großartig. Zunächst signalisieren wir den erforderlichen versus optionalen Status nur über die Farbe, was für Farbenblinde nicht ideal ist. Zweitens besteht die Standardkonvention im Web, um den erforderlichen Status zu signalisieren, aus einem Sternchen (`*`) oder dem Wort "erforderlich", das mit den betreffenden Steuerelementen in Verbindung gebracht wird.

Im nächsten Abschnitt werden wir uns ein besseres Beispiel ansehen, wie man erforderliche Felder mittels `:required` anzeigen kann, das auch die Verwendung erstellter Inhalte beinhaltet.

> [!NOTE]
> Vermutlich werden Sie die `:optional`-Pseudoklasse nicht sehr oft verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling normalerweise standardmäßig vornehmen und für erforderliche Steuerelemente zusätzliche Styles hinzufügen.

> [!NOTE]
> Wenn ein Kontrollkästchen in einer Gruppe von Kontrollkästchen mit demselben Namen das `required`-Attribut gesetzt hat, sind alle Kontrollkästchen ungültig, bis eines ausgewählt ist, aber nur das mit dem Attribut zugeordnete wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von erstelltem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung des [erstellten Inhalts](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um darüber etwas detaillierter zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Bildschirmlesegeräte unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso gezielt werden wie jedes tatsächliche DOM-Element.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie z. B. ein Label oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Radioknopf-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radioknopfes zu handhaben, wenn ein Radioknopf ausgewählt wird:

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

Dies ist sehr nützlich – Bildschirmlesegeräte machen ihre Nutzer bereits darauf aufmerksam, wenn ein Radioknopf oder Kontrollkästchen im Blickfeld ausgewählt ist, daher möchten Sie, dass sie keine weiteren DOM-Elemente lesen, die eine Auswahl anzeigen – das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen die Platzierung von erzeugtem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional, dieses Mal werden wir nicht das Aussehen der Eingabe selbst ändern – wir werden generierten Inhalt verwenden, um eine anzeigende Bezeichnung hinzuzufügen ([hier live ansehen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und den [Quellcode hier ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir ein neues Paragraphen-Element oben im Formular hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Bildschirmlesegerätebenutzer werden "erforderlich" als zusätzliches Informationsbit hören, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt daran anzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass der `span` in einer neuen Zeile unterhalb der Eingabe erschien, weil die Eingabe und das Label beide mit `width: 100%` eingestellt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`-Element, um ein flexibles Container-Element zu werden, aber wir sagen ihm auch, die Inhalte in neue Zeilen zu setzen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` sind, aber der `<span>` hat eine Breite von `0`, sodass er in derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen den `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein untergeordnetes Element des Elements ist, auf dem er generiert wird, für die Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Text "required", was das ist, was unser Label sagen soll, und gestalten und positionieren ihn so, wie wir es möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerungselemente stylen, basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, fundamentale Konzept in der Formularvalidierung ist, ob die Daten eines Formularsteuerelements gültig sind oder nicht (im Fall von numerischen Daten können wir auch über innerhalb oder außerhalb des Bereichs sprechen). Formularsteuerelemente mit [Beschränkungseinschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formularsteuerelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die Sie beachten sollten:

- Steuerelemente ohne Einschränkungsvalidierung sind immer gültig und daher mit `:valid` übereinstimmend.
- Steuerelemente mit `required`, die keinen Wert haben, werden als ungültig gezählt – sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">` sind (übereinstimmend mit) `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute angegeben sind, sind (übereinstimmend mit) `:invalid`, werden aber auch durch {{cssxref(":out-of-range")}} übereinstimmen, wie Sie später sehen werden.
- Es gibt einige andere Wege, ein Element mit `:valid`/`:invalid` zu matchen, wie Sie im Artikel [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) erfahren werden. Aber wir werden die Dinge vorerst einfach halten.

Lassen Sie uns ein Beispiel für `:valid`/`:invalid` betrachten (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s eingefügt, um generierten Inhalt zu erzeugen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann je nach Zustand der Formulareingabe, ob die Daten gültig oder ungültig sind, absolut generierten Inhalt – ein grüner Haken oder ein rotes Kreuz. Um den ungültigen Daten etwas Nachdruck zu verleihen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "required"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas gefüllt sind. Die E-Mail-Eingabe ist dagegen gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine ordnungsgemäße E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen, die zu betrachten sind – {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) angegeben sind, wenn ihre Daten innerhalb bzw. außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Zu den numerischen Eingabetypen gehören `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch mit der Pseudoklasse `:valid` übereinstimmen und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der Pseudoklasse `:invalid` übereinstimmen. Warum also beide haben? Es geht wirklich um Semantik – außer Bereich ist eine spezifischere Art der ungültigen Kommunikation, also möchten Sie möglicherweise eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen, die für Benutzer hilfreicher ist als nur zu sagen "ungültig". Sie könnten sogar beide bereitstellen wollen.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html)-Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten über außerhalb des Bereichs liegende Eingaben für die numerischen Eingaben bereitzustellen, während es auch sagt, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf alle `::after`-Inhalte angewendet werden, in einer separaten Regel aufgeteilt haben und die separaten `::after`-Inhalte für `:required` und `:out-of-range`-Zustände ihr eigenes Styling haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist, was passiert dann? Da die `:out-of-range`-Regel später im Quellcode als die `:required`-Regel erscheint, greifen die [Kaskadierungsregeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#understanding_the_cascade) und die Nachricht "Außerhalb des erlaubten Wertebereichs" wird angezeigt.

Dies funktioniert ziemlich gut – wenn die Seite zum ersten Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eingeben. Die Spinnbuttons lassen Sie den Wert nicht außerhalb des erlaubten Bereichs erhöhen/verringern.

## Steuerung von aktivierten und deaktivierten Eingaben und schreibgeschützten und lesbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, hineingetippt usw. werden. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} gezielt werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht anwendbar sind, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn sie das Formular einreichen. Ein klassisches Beispiel ist ein Versandformular – oft werden Sie gefragt, ob Sie dieselbe Adresse für die Rechnungs- und die Versandadresse verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und könnten auch die Rechnungsadressfelder deaktivieren.

Schauen wir uns ein Beispiel an, das dies genau tut. Zunächst einmal ist das HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen, um die Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textetiketten ausgrauen. Da die Etiketten direkt vor ihren Eingaben stehen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun endlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Etiketten umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [live hier ansehen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibbar

Ähnlich wie bei `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Wie bei deaktivierten Eingaben kann der Benutzer keine schreibgeschützten Eingaben bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden jedoch schreibgeschützte Eingabewerte an den Server gesendet. Schreibgeschützt bedeutet, dass sie nicht bearbeitet werden können – ihr Standardzustand.

Eine Eingabe wird mittels des `readonly`-Attributs auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf vorherigen Seiten eingegebenen Details an diese Seite gesendet hat, mit dem Ziel, dem Benutzer zu ermöglichen, sie alle an einem Ort zu überprüfen, eventuelle letzte Daten hinzuzufügen und dann die Bestellung zu bestätigen, indem sie das Formular einreichen. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Lassen Sie uns ansehen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTML ist wie folgt — beachten Sie das `readonly`-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass der obere Satz von Formularelementen nicht bearbeitbar ist, die Werte jedoch gesendet werden, wenn das Formular eingereicht wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

## Radio- und Kontrollkästchenzustände — ausgewählt, standardmäßig, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radioknöpfe")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Stimmt mit Radios/Kontrollkästchen überein, die standardmäßig bei Laden der Seite ausgewählt sind (d.h. durch Setzen des `checked`-Attributs auf ihnen)). Diese stimmen mit der {{cssxref(":default")}}-Pseudoklasse überein, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der {{cssxref(":indeterminate")}}-Pseudoklasse überein. Mehr dazu weiter unten.

### :checked

Wenn sie ausgewählt sind, werden sie mit der {{cssxref(":checked")}}-Pseudoklasse übereinstimmen.

Der häufigste Gebrauch dafür ist, ein anderes Styling auf das Kontrollkästchen oder den Radioknopf anzuwenden, wenn er ausgewählt ist, in Fällen, in denen Sie das systemdefinierte Styling mittels [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Styles selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zum Rekapitulieren sieht der `:checked`-Code aus unserem [Styled radio buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)-Beispiel so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radio-Knopfs mittels des `::before`-Pseudoelements auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Etikett schön animiert erscheinen zu lassen, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung eines Transformations- anstatt eines Übergangs-[`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height)-Properties ist, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus dem Zentrum des Kreises heraus wachsen zu lassen, anstatt es von der Ecke des Kreises erscheinen zu lassen, und es gibt kein Springen, da keine Box-Modell-Property-Werte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}}-Pseudoklasse mit Radios/Kontrollkästchen überein, die standardmäßig bei Laden der Seite ausgewählt sind, selbst wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardoptionen (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben erwähnten Radios/Kontrollkästchen werden mit der {{cssxref(":indeterminate")}}-Pseudoklasse übereinstimmen, wenn sie sich in einem Zustand befinden, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radioknöpfe in einer Gruppe mit demselben Namen nicht ausgewählt sind.
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Property über JavaScript auf `true` gesetzt ist.
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Das ist nichts, was Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzern mitzuteilen, dass sie wirklich einen Radioknopf auswählen müssen, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels der Radioknöpfe im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radioknopf gesetzt, sodass es standardmäßig ausgewählt wird, wenn die Seite geladen wird. Wir stylen dies mit dem folgenden CSS:

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

Dies liefert ein kleines "Default"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Subsequenz-Selektor (`~`) anstelle des Nächster-Geschwister-Selektors (`+`) verwenden – wir müssen dies tun, da der `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radioknopf — dies ist wichtig — wenn es einen gäbe, dann gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radioknöpfe mit dem folgenden CSS:

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

Dies erzeugt eine kleine animierte Umrisslinie auf den Radioknöpfen, die hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie finden ein [interessantes Beispiel mit `indeterminate`-Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite für [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox).

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht genug Platz, um sie alle im Detail zu beschreiben. Lassen Sie uns über einige weitere sprechen, die Sie untersuchen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein gesamtes Formular auf irgendeine Weise hervorgehoben wird, wenn ein Eingabeelement darin fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus durch Tastatureingabe (anstatt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderem) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen überein, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt ebenfalls mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner — es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}} überein. `:empty` hat eine vernünftige Browserunterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, daher wird sie derzeit von keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse wird, wenn sie unterstützt wird, {{cssxref(":invalid")}} ähnlich sein, aber mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabeelement den Fokus erhält, kann das Element `:invalid` sein, während der Benutzer Daten eingibt, solange der Wert vorübergehend ungültig ist, wird jedoch nur `:user-invalid` gewählt, wenn das Element den Fokus verliert. Wenn der Wert von Anfang an ungültig war, wird er sowohl `:invalid` als auch `:user-invalid` für die gesamte Dauer des Fokus wählen. Ähnlich wie bei `:invalid` wird es aufhören, `:user-invalid` zu wählen, wenn der Wert letztendlich gültig wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Test your skills: Advanced styling](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen, und erstellen Sie ein paar lustige Form-Styles! Als nächstes gehen wir zu etwas anderem über — [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/Advanced_form_styling", "Learn_web_development/Extensions/Forms/Form_validation", "Learn_web_development/Extensions/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen von benutzerdefinierten Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
