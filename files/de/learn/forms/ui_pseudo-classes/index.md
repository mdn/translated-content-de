---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: b7a7c441fa025458f2bf67d714c3303085e8258a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir das Styling verschiedener Formularelemente im Allgemeinen behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen, um Formulare in unterschiedlichen Zuständen zu gestalten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich allgemeinem
        Wissen über
        <a
          href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
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

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es im Fokus steht (z. B. durch Tabulieren über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (z. B. während es angeklickt wird oder wenn die <kbd>Return</kbd>- / <kbd>Enter</kbd>-Taste im Fall einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen jetzt vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen, die mehrere nützliche Zielbedingungen bieten, die Sie nutzen können. Wir werden diese im Folgenden ausführlicher diskutieren, aber kurz gesagt, die Hauptklassen, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, und {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularelemente ab, die gültig/ungültig gemäß der auf sie gesetzten Formularvalidierungsbeschränkungen oder im Bereich/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, und {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente ab, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie derzeit aktiviert oder deaktiviert sind, und auf lese-/schreibbare oder schreibgeschützte Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen respektive auf Kontrollkästchen und Radiobuttons ab, die aktiviert, in einem unbestimmten Zustand (weder aktiviert noch nicht aktiviert) sind, und auf die standardmäßig ausgewählte Option beim Laden der Seite (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgelisteten UI-Pseudoklassen haben eine hervorragende Browser-Unterstützung, aber Sie sollten Ihre Formulare sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit dem Styling von Formularelementen basierend auf ihrem Validierungszustand (ob ihre Daten gültig sind oder nicht?). Sie werden im nächsten Artikel viel mehr darüber erfahren, wie Sie Validierungsbeschränkungen festlegen und steuern können – [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) – aber im Moment halten wir es mit der Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Eingabefelder basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob ein Formularfeld erforderlich ist (es muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, das verfügbar ist, was bedeutet, dass Sie dieses Steuerelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Wenn wir beispielsweise das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Steuerelemente hätten einen schwarzen Rand, und das optionale Steuerelement wird einen silbernen Rand haben, so wie hier:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular einzureichen, ohne es auszufüllen, um die Standardfehlermeldungen zur clientseitigen Validierung zu sehen, die Browser Ihnen geben.

Das obige Formular ist nicht schlecht, aber auch nicht großartig. Zum einen signalisieren wir den erforderlichen versus optionalen Status nur mittels Farbe, was für farbenblinde Personen nicht ideal ist. Zweitens sind die Standardkonventionen im Web zur Kennzeichnung des erforderlichen Status ein Sternchen (`*`) oder das Wort „erforderlich“ in Verbindung mit den betreffenden Steuerelementen.

Im nächsten Abschnitt werden wir ein besseres Beispiel für die Anzeige erforderlicher Felder unter Verwendung von `:required` betrachten, das auch die Verwendung von generiertem Inhalt beinhaltet.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die Pseudoklasse `:optional` verwenden. Formularelemente sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig durchführen und Stilrichtungen für erforderliche Steuerelemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das `required`-Attribut hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt ist, aber nur derjenige mit dem zugewiesenen Attribut entspricht {{cssxref(':required')}}.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, doch wir dachten, jetzt wäre ein guter Zeitpunkt, um genauer darauf einzugehen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um einen Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der hinzugefügte Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es auf die gleiche Weise wie jeder tatsächliche DOM-Knoten mit Stilen versehen werden.

Dies ist wirklich nützlich, wenn Sie ein visuelles Signal zu einem Element hinzufügen möchten, wie z. B. eine Beschriftung oder ein Symbol, wenn alternative Indikatoren zur Gewährleistung der Barrierefreiheit für alle Benutzer ebenfalls verfügbar sind. Beispielsweise verwenden wir in unserem [Beispiel für angepasste Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radio-Buttons zu steuern, wenn ein Radio-Button ausgewählt wird:

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

Das ist wirklich nützlich – Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radio-Button oder Kontrollkästchen, auf das sie stoßen, aktiv/ausgewählt ist, sodass Sie nicht wollen, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt – das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Einfügen von generiertem Inhalt. Alle Eingabearten, die dynamischen Text in ihnen anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern – wir werden generierten Inhalt verwenden, um ein beschreibendes Label hinzuzufügen ([siehe es hier live](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie sich den [Quellcode hier an](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir dem oberen Bereich des Formulars einen Absatz hinzu, um zu sagen, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Screenreadern werden „erforderlich“ als zusätzliche Information hören, wenn sie zu jedem erforderlichen Eingabefeld gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteinträge keinen generierten Inhalt, also fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt darauf zu legen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem dabei war, dass das `span` auf eine neue Zeile unterhalb der Eingabe fiel, da die Eingabe und das Label beide auf `width: 100%` gesetzt sind. Um dies zu beheben, gestalten wir das übergeordnete `<div>`, um ein Flexcontainer zu werden, sagen ihm aber auch, seine Inhalte auf neuen Zeilen zu übergehen, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, weil sie beide `width: 100%` sind, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt zum `<body>` (der generierte Inhalt verhält sich, als ob er ein Kindknoten des Elements wäre, auf dem er generiert wurde, zum Zwecke der Positionierung).

Dann geben wir dem generierten Inhalt den Content „erforderlich“, was unser Label sagen sollte, und gestalten und positionieren es, wie wir wollen. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerungen basierend darauf stylen, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten können wir auch über im Bereich und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen gezielt ansprechbar sein.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es wert sind, beachtet zu werden:

- Steuerelemente ohne Einschränkung von Validierungen werden immer gültig sein und daher mit `:valid` übereinstimmen.
- Steuerelemente mit `required`, die keinen Wert haben, werden als ungültig gezählt – sie werden mit `:invalid` und `:required` übereinstimmen.
- Steuerelemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, stimmen mit `:invalid` überein, wenn die eingegebenen Daten nicht mit dem gesuchten Muster übereinstimmen (sie sind jedoch gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegten Bereichsgrenzen liegt, werden ebenfalls mit `:invalid` übereinstimmen, aber auch mit {{cssxref(":out-of-range")}} zusammentreffen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, wie ein Element mit `:valid`/`:invalid` übereinstimmen kann, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir wollen es vorerst einfach halten.

Lassen Sie uns ein einfaches Beispiel für `:valid`/`:invalid` ansehen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und schauen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html) an).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierten Inhalt zu bringen, den wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzten wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir den verschiedenen generierten Inhalt absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind – ein grünes Häkchen oder ein rotes Kreuz entsprechend. Um ein bisschen zusätzliche Dringlichkeit hinzuzufügen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die „erforderlich“ Labels verwendet hatten.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn sie etwas ausgefüllt haben. Die E-Mail-Eingabe ist hingegen gültig, wenn sie leer ist, da sie nicht erforderlich ist, aber ungültig, wenn sie etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-Range und Out-of-Range-Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu beachten – {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese stimmen mit numerischen Eingaben überein, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, entsprechend.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch von der `:valid` Pseudoklasse getroffen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, auch von der `:invalid` Pseudoklasse getroffen werden. Warum also beide verwenden? Das Thema ist wirklich eine Frage der Semantik – „out-of-range“ ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie möglicherweise eine andere Nachricht für Out-of-Range-Eingaben bereitstellen, die hilfreicher für Benutzer ist als nur „ungültig“. Sie könnten sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Out-of-Range-Nachrichten für die numerischen Eingaben bereitzustellen, zusätzlich zur Anzeige, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden generierten `::after`-Inhalt zutreffen, in einer separaten Regel aufgeteilt haben und den separaten `::after`-Inhalt für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und Stil gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die numerische Eingabe sowohl erforderlich als auch außerhalb des Bereichs liegt. Was passiert dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, kommen die [Kaskadenregeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) ins Spiel, und die Nachricht, dass der Wert außerhalb des Bereichs liegt, wird angezeigt.

Dies funktioniert ganz gut – wenn die Seite das erste Mal geladen wird, ist „Erforderlich“ zu sehen, zusammen mit einem roten Kreuz und einem Rahmen. Wenn Sie ein gültiges Alter eingegeben haben (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch das Altersfeld in einen außerhalb des Bereichs liegenden Wert ändern, erscheint die Nachricht "Outside allowable value range" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und ihn mit der Tastatur eingeben. Die Spinner-Schaltflächen erlauben Ihnen nicht, den Wert außerhalb des erlaubten Bereichs zu inkrementieren/dekrementieren.

## Steuerungen basierend darauf stylen, ob sie aktiviert oder deaktiviert, und schreibgeschützt oder beschreibbar sind

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, in es getippt usw. werden. Ein deaktiviertes Element hingegen kann auf keine Weise interagiert werden und seine Daten werden nicht einmal zum Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesteuert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal einsenden, wenn sie das Formular abschicken. Ein klassisches Beispiel ist ein Versandformular - oft werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandzwecke verwenden möchten. Wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadressfelder einfach deaktivieren.

Werfen wir einen Blick auf ein Beispiel, das genau dies tut. Zuerst ist das HTML ein einfaches Formular, das Texteingaben enthält, plus ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressefelder sind standardmäßig deaktiviert.

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

Zum Schluss haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressefelder umzuschalten:

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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um es dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und die Stilgestaltung der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und beschreibbar

In ähnlicher Weise wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben umschalten können. Wie bei deaktivierten Eingaben kann der Benutzer schreibgeschützte Eingaben nicht bearbeiten. Im Gegensatz zu deaktivierten Eingaben werden schreibgeschützte Eingabewerte jedoch an den Server gesendet. Beschreibbar bedeutet, dass sie bearbeitet werden können – ihr Standardzustand.

Eine Eingabe wird mit dem `readonly` Attribut auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, bei der der Entwickler die auf vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, um den Benutzer alles an einem Ort überprüfen zu lassen, alle erforderlichen Daten hinzuzufügen und dann die Bestellung durch das Absenden zu bestätigen. An diesem Punkt können alle finalen Formulardaten in einem Gang an den Server gesendet werden.

Schauen wir uns an, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Ausschnitt des HTML ist wie folgt – beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass der obere Satz von Formularelementen nicht bearbeitbar ist, die Werte jedoch gesendet werden, wenn das Formular abgeschickt wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

## Radio- und Kontrollkästchenzustände — gecheckt, Standard, unbestimmt

Wie wir in früheren Artikeln im Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder deaktiviert sein. Doch es gibt noch ein paar andere Zustände zu beachten:

- {{cssxref(":default")}}: Übereinstimmend mit Radios/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. durch Einstellen des `checked` Attributs auf ihnen). Diese stimmen mit der {{cssxref(":default")}} Pseudoklasse überein, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, werden sie als _unbestimmt_ betrachtet und stimmen mit der {{cssxref(":indeterminate")}} Pseudoklasse überein. Weiter unten mehr dazu, was das bedeutet.

### :checked

Wenn sie aktiviert sind, werden sie von der {{cssxref(":checked")}} Pseudoklasse übereinstimmen.

Der häufigste Gebrauch davon ist, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton zu setzen, wenn er aktiv/ausgewählt ist, in Fällen, in denen Sie das standardmäßige Systemstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir sahen Beispiele dafür im vorherigen Artikel, als wir über das [Verwenden von `appearance: none` auf Radios/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Zur Wiederholung sieht der `:checked`-Code aus unserem [Gestylten Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html)-Beispiel so aus:

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

Im Wesentlichen bauen wir das Styling für den „inneren Kreis“ eines Radiobuttons mit dem `::before` Pseudoelement, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön in das Blickfeld zu animieren, wenn das Radio ausgewählt/gecheckt wird. Der Vorteil einer Transformation gegenüber der Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es vom Mittelpunkt des Kreises aus wachsen zu lassen, anstatt es aussehen zu lassen, als ob es von der Ecke des Kreises wächst, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}} Pseudoklasse mit Radios/Kontrollkästchen überein, die standardmäßig aktiviert sind, beim Laden der Seite, auch wenn sie abgewählt werden. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardoptionen (oder Ausgangsoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Außerdem werden die oben genannten Radios/Kontrollkästchen von der {{cssxref(":indeterminate")}} Pseudoklasse getroffen, wenn sie sich in einem Zustand befinden, in dem sie weder aktiv noch inaktiv sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe abgewählt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft mit JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist wahrscheinlich nicht etwas, das Sie sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darauf hinzuweisen, dass sie wirklich ein Radio-Button auswählen müssen, bevor sie fortfahren.

Schauen wir uns ein paar modifizierte Versionen des vorherigen Beispiels an, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut zum mittleren Radiobutton-Eingang hinzugefügt, sodass es standardmäßig selektiert wird, wenn es geladen wird. Wir stilisieren dies mit dem folgenden CSS:

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

Dies bietet ein kleines „Standard“-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den Nachfolgende-Geschwister-Kombinator (`~`) anstelle des Nächste-Geschwister-Kombinators (`+`) verwendet haben – wir mussten dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html) an).

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton – das ist wichtig – wenn es einen gäbe, würde es keinen unbestimmten Zustand zum Stylen geben. Wir stilisieren die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erzeugt einen kleinen animierten Umriss auf den Radiobuttons, der hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html) an).

> [!NOTE]
> Sie finden ein [interessantes Beispiel zum Thema `indeterminate`-Zustände](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Referenzseite.

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um über alle im Detail zu schreiben. Lassen Sie uns über ein paar weitere sprechen, die Sie sich näher ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat oder ein Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular irgendwie hervorgehoben wird, wenn ein Element darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse stimmt mit fokussierten Elementen überein, die den Fokus durch Tastaturinteraktion (anstatt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zum Maus- (oder anderen) Fokus zeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen überein, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber noch nicht gut durch Browser unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner – es stimmt auch mit anderen {{Glossary("void_element", "leeren Elementen")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine vernünftige Browser-Unterstützung; die Spezifikation der :blank Pseudoklasse ist noch nicht abgeschlossen, sodass sie noch in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}}, aber mit besserem Benutzererlebnis sein. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element mit `:invalid` übereinstimmen, während der Benutzer Daten eingibt, wenn der Wert vorübergehend ungültig ist, wird aber nur mit `:user-invalid` übereinstimmen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er sowohl mit `:invalid` als auch mit `:user-invalid` während der gesamten Dauer des Fokus übereinstimmen. In ähnlicher Weise wie `:invalid`, wird es aufhören, mit `:user-invalid` übereinzustimmen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Fortgeschrittenes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unseren Blick auf die UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Spielen Sie weiter mit ihnen, und kreieren Sie einige lustige Formularstile! Als nächstes werden wir uns etwas anderes ansehen – [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
