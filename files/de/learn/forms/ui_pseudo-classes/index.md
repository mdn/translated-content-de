---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: b4c74fadfaf49f099c6761c10c6a5e69e3de9f1b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir die allgemeine Gestaltung verschiedener Formularelemente behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, wie zum Beispiel `:checked`, um ein Kontrollkästchen nur zu stylen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die zum Styling von Formularen in verschiedenen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
       Grundkenntnisse in
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
       Verstehen, welche Teile von Formularen schwer zu stylen sind und warum; lernen,
        wie sie angepasst werden können.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen haben wir zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d. h. wenn es über die Tastatur angewählt wurde).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d. h. während es angeklickt wird oder wenn die

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  Taste im Falle einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielbedingungen, die Sie zu Ihrem Vorteil nutzen können. Wir werden diese im Detail in den folgenden Abschnitten diskutieren, aber kurz gesagt, die Hauptpunkte, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Ziel sind Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), je nachdem, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Ziel sind Formularelemente, die gemäß den auf ihnen festgelegten Validierungsbedingungen gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Ziel sind Elemente, die deaktiviert werden können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und Lese-/Schreibe- oder nur lesbare Formularelemente (z. B. Elemente mit dem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Beziehen sich jeweils auf Kontrollkästchen und Optionsfelder, die ausgewählt sind, sich in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt befinden), und die bei Seitenladezeit standardmäßig ausgewählte Option (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem Attribut [`checked`](/de/docs/Web/HTML/Element/input#checked) oder ein [`<option>`](/de/docs/Web/HTML/Element/option) mit dem Attribut [`selected`](/de/docs/Web/HTML/Element/option#selected)).

Es gibt viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben genannten UI-Pseudoklassen haben eine hervorragende Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum geeignet sind.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen befasst sich mit dem Styling von Formularelementen basierend auf ihrem Validierungsstatus (Sind ihre Daten gültig oder nicht?). Sie werden in unserem nächsten Artikel viel mehr über das Festlegen und Steuern von Validierungsbedingungen lernen — [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — aber vorerst halten wir die Dinge hinsichtlich der Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Eingaben basierend auf ihrem Erforderlichkeitsstatus stylen

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich (muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}}-Elemente haben ein `required`-Attribut, welches, wenn es gesetzt ist, bedeutet, dass Sie dieses Kontrollelement ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel:

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

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abgleichen. Zum Beispiel, wenn wir das folgende CSS auf das obenstehende HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Hätten die erforderlichen Steuerungen einen schwarzen Rahmen, und die optionale Steuerung hätte einen silbernen Rahmen, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die clientseitigen Validierungsfehlermeldungen der Browser zu sehen, die standardmäßig angezeigt werden.

Das obige Formular ist nicht schlecht, aber es ist auch nicht großartig. Zum einen signalisieren wir den erforderlichen gegenüber dem optionalen Status nur durch Farbe, was für Farbenblinde nicht ideal ist. Zweitens ist die übliche Konvention im Web, dass ein Sternchen (`*`) oder das Wort "erforderlich" mit den betreffenden Steuerelementen assoziiert wird.

Im nächsten Abschnitt betrachten wir ein besseres Beispiel zur Anzeige erforderlicher Felder mithilfe von `:required`, das sich auch darauf einlässt, generierten Inhalt zu verwenden.

> [!NOTE]
> Sie werden die `:optional`-Pseudoklasse wahrscheinlich nicht oft verwenden. Formularelemente sind standardmäßig optional, daher könnten Sie Ihr optionales Styling standardmäßig anwenden und zusätzliche Stile für erforderliche Elemente hinzufügen.

> [!NOTE]
> Wenn ein Radio-Button in einer gleichnamigen Gruppe von Radio-Buttons das Attribut `required` gesetzt hat, sind alle Radio-Buttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} abgeglichen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um darüber im Detail zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, daher kann er für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es mit Stilen genauso angesprochen werden wie jedes tatsächliche DOM-Element auch.

Dies ist sehr nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, wie ein Label oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Radio-Button-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radio-Buttons zu steuern, wenn ein Radio-Button ausgewählt ist:

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

Dies ist sehr nützlich — Screenreader informieren ihre Benutzer bereits, wenn ein Radio-Button oder ein Kontrollkästchen, auf das sie stoßen, ausgewählt/angeklickt ist, also wollen Sie nicht, dass sie ein weiteres DOM-Element vorlesen, das die Selektion anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen es, generierten Inhalt auf sie zu setzen. Alle Eingabetypen, die dynamischen Text in sich anzeigen, wie `text`, `password` oder `button`, zeigen generierten Inhalt nicht an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel für erforderlich/optional, dieses Mal werden wir das Erscheinungsbild der Eingabe selbst nicht ändern — wir verwenden generierten Inhalt, um ein Hinweislabel hinzuzufügen ([sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir oben im Formular einen Absatz hinzu, der sagt, worauf Sie achten:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als zusätzliche Information vorgelesen bekommen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt daran aufzuhängen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem damit war, dass das span in eine neue Zeile unter die Eingabe fiel, weil sowohl die Eingabe als auch das Label auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um es zu einem Flex-Container zu machen, aber auch, um ihm mitzuteilen, dass es seinen Inhalt auf neue Zeilen umschlagen soll, wenn der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Label und die Eingabe auf getrennten Linien sitzen, weil sie beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Linie wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn im Verhältnis zum `<span>` positionieren können (Der generierte Inhalt verhält sich, als ob er ein Kindknoten des Elements ist, auf dem es generiert wird, für die Zwecke des Positionierens).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was wir wollten, dass unser Label sagt, und stylen und positionieren es, wie wir möchten. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuern von Eingaben basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept bei der Formularvalidierung ist, ob die Daten einer Formulareingabe gültig sind oder nicht (im Falle von numerischen Daten können wir auch über innerhalb oder außerhalb des Bereichs sprechen). Formulareingaben mit [Einschränkungsbegrenzungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formulareingaben mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Ein paar Punkte, die man im Hinterkopf behalten sollte:

- Kontrollen ohne Validierungseinschränkungen sind immer gültig und werden daher mit `:valid` abgeglichen.
- Elemente mit `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden sowohl mit `:invalid` als auch mit `:required` übereinstimmen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind `:invalid`, wenn die eingegebenen Daten nicht dem Muster entsprechen, das sie suchen (aber gültig, wenn sie leer sind).
- Kontrollen, deren aktueller Wert außerhalb der Bereichsbegrenzungen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, sind `:invalid`, werden aber auch durch {{cssxref(":out-of-range")}} angesprochen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element durch `:valid`/`:invalid` übereinstimmen zu lassen, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein einfaches Beispiel zu `:valid`/`:invalid` betrachten (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um darauf generierten Inhalt zu erzeugen, den wir verwenden, um Anzeigen für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir verschiedene generierte Inhalte absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, entsprechend. Um den Ausdruck für ungültige Daten zu verstärken, haben wir den Eingaben auch eine dicke rote Umrandung gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` benutzt, um diese Labels hinzuzufügen, da wir `::after` bereits für die "erforderlich"-Labels verwenden.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, jedoch ungültig, wenn es etwas enthält, das keine gültige E-Mail-Adresse ist.

### Daten innerhalb und außerhalb des Bereichs

Wie angedeutet, gibt es zwei andere verwandte Pseudoklassen, über die wir nachdenken müssen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese passen auf numerische Eingaben, bei denen die Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist zu beachten, dass Eingaben, deren Daten im Bereich liegen, auch mit der `:valid`-Pseudoklasse übereinstimmen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch mit der `:invalid`-Pseudoklasse übereinstimmen. Warum also beide haben? Die Frage ist eigentlich eine der Semantik — außerhalb des Bereichs zu sein, ist eine spezifischere Art der ungültigen Kommunikation, daher möchten Sie vielleicht eine andere Nachricht für Eingaben, die außerhalb des Bereichs liegen, bereitstellen, die für Benutzer hilfreicher sein wird als nur "ungültig" zu sagen. Sie möchten vielleicht sogar beide bereitstellen.

Schauen wir uns ein Beispiel an, das genau das tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um außerhalb-des-Bereichs-Nachrichten für die numerischen Eingaben bereitzustellen, sowie anzugeben, ob sie erforderlich sind.

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

Dies ist eine ähnliche Geschichte wie zuvor im `:required`-Beispiel, außer dass wir hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel ausgelagert haben und dem separaten `::after`-Inhalt für `:required` und `:out-of-range` ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die numerische Eingabe gleichzeitig erforderlich und außerhalb des Bereichs liegt, was passiert dann? Da die `:out-of-range`-Regel später im Quellcode als die `:required`-Regel erscheint, greifen die [Cascade-Regeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade), und die Außerhalb-der-reichweite-Nachricht wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite das erste Mal geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie jedoch ein gültiges Alter (d. h. im Bereich von 12-120) eingegeben haben, wird die Eingabe gültig. Wenn Sie jedoch anschließend die Eingabe in ein Alter ändern, das außerhalb des Bereichs liegt, wird die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb-des-Bereichs-Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eintippen. Die Spinner-Buttons lassen die Werte nicht außerhalb des zulässigen Bereichs inkrementieren/dekrementieren.

## Styling von aktivierten und deaktivierten Eingaben und schreibgeschützten und schreibbaren

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt, etc. werden. Ein deaktiviertes Element hingegen kann in keiner Weise verwendet werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie diese Daten möglicherweise nicht einmal senden, wenn er das Formular absendet. Ein klassisches Beispiel ist ein Versandformular — häufig wird gefragt, ob Sie dieselbe Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden, und die Rechnungsanschrift-Felder deaktivieren.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, sowie ein Kontrollkästchen, um das Deaktivieren der Rechnungsanschrift ein- und auszuschalten. Die Rechnungsanschrift-Felder sind standardmäßig deaktiviert.

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
      <label for="pcode1">Zip/postal code: </label>
      <input id="pcode1" name="pcode1" type="text" required />
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
      <label for="pcode2" class="billing-label disabled-label">
        Zip/postal code:
      </label>
      <input id="pcode2" name="pcode2" type="text" disabled required />
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

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabel ausgrauen. Da die Label direkt vor ihren Eingaben liegen, haben wir diese mit der Pseudoklasse [`:has`](/de/docs/Web/CSS/:has) ausgewählt.

Nun schließlich haben wir etwas JavaScript verwendet, um das Deaktivieren der Rechnungsanschrift-Felder umzuschalten:

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

Es verwendet das [`change` event](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer das Aktivieren/Deaktivieren der Rechnungsfelder zu ermöglichen und das Styling der zugehörigen Label umzustellen.

Sie können das Beispiel unten in Aktion sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibbar

Ähnlich wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln können. Schreibgeschützte Eingaben werden an den Server gesendet, aber der Benutzer kann sie nicht bearbeiten, während schreibbare Eingaben — ihr Standardzustand — bearbeitet werden können.

Eine Eingabe wird mit dem Attribut `readonly` schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die auf den vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer diese alle an einem Ort überprüfen, letzte Daten hinzufügen und dann die Bestellung durch Absenden bestätigen kann. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Schritt an den Server gesendet werden.

Schauen wir uns an, wie ein solches Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; auch sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das Attribut readonly:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie feststellen, dass der obere Satz der Formularelemente nicht fokussierbar ist, aber die Werte werden gesendet, wenn das Formular abgesendet wird. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Das vollständige Beispiel sieht wie folgt aus:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/readonly-confirmation.html", '100%', 660)}}

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Kontrollkästchenzustände — ausgewählt, Standard, unbestimmt

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Optionsfelder")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder nicht ausgewählt werden. Es gibt jedoch noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Passt auf Optionsfelder/Kontrollkästchen, die standardmäßig auf der Seite ausgewählt sind (d. h. durch Setzen des `checked`-Attributs auf sie). Diese entsprechen der {{cssxref(":default")}}-Pseudoklasse, auch wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Optionsfelder/Kontrollkästchen weder ausgewählt noch nicht ausgewählt sind, werden sie als unbestimmt angesehen und passen zur {{cssxref(":indeterminate")}}-Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie ausgewählt sind, werden sie von der {{cssxref(":checked")}}-Pseudoklasse angesprochen.

Die häufigste Verwendung davon besteht darin, dem Kontrollkästchen oder dem Optionsfeld einen anderen Stil zuzuweisen, wenn es ausgewählt ist, in Fällen, in denen Sie die systemdefinierte Standardgestaltung mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst zurückbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [die Verwendung von `appearance: none` auf Optionsfeldern/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zur Wiederholung sieht der `:checked`-Code aus unserem Beispiel [Gestylte Optionsfelder](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) so aus:

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

Grundsätzlich bauen wir das Styling für einen Optionsfeld-Knopf's "inneren Kreis" mit dem Pseudoelement `::before` auf, setzen jedoch eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Dann verwenden wir eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label bei Auswahl eines Optionsfeldes/Checkboxes schön in die Ansicht einblenden zu lassen. Der Vorteil der Verwendung einer Transformation anstelle einer Transition von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es aus der Mitte des Kreises herauszuwachsen zu lassen, anstatt es aus der Ecke des Kreises wachsen zu lassen, und es gibt kein Sprunghafte Verhalten, da keine Boxmodell-Property-Werte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, stimmt die {{cssxref(":default")}}-Pseudoklasse mit Optionsfeldern/Kontrollkästchen überein, die standardmäßig auf der Seite ausgewählt sind, auch wenn sie deaktiviert werden. Dies könnte nützlich sein, um einen Indikator hinzuzufügen, der einer Liste von Optionen zeigt, um den Benutzer daran zu erinnern, was die Standards (oder Startoptionen) waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem werden die oben erwähnten Optionsfelder/Kontrollkästchen von der {{cssxref(":indeterminate")}}-Pseudoklasse angesprochen, wenn sie in einem Zustand sind, in dem sie weder ausgewählt noch nicht ausgewählt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}}-Eingaben, wenn alle Radio-Buttons in einer gleichnamigen Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}}-Eingaben, deren `indeterminate`-Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}}-Elemente, die keinen Wert haben.

Dies ist nicht etwas, das Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, der den Benutzern sagt, dass sie wirklich ein Radio-Button auswählen sollten, bevor sie weitermachen.

Schauen wir uns ein paar modifizierte Versionen des vorhergehenden Beispiels an, die den Benutzer daran erinnern, welche die Standardoption war, und die Labels der Radio-Buttons im unbestimmten Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radio-Button-Eingang gesetzt, sodass er beim Laden standardmäßig ausgewählt wird. Wir stylen dies mit dem folgenden CSS:

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

Dies sorgt für ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie hier, dass wir den nachfolgenden Nachbarschafts-Kombinator (`~`) anstelle des direkten Nachbarschafts-Kombinators (`+`) verwendet haben — wir mussten das tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — dies ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radio-Buttons mit dem folgenden CSS:

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

Dies erzeugt eine kleine animierte Umrandung auf den Radio-Buttons, die hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Sie finden ein [interessantes Beispiel zu `indeterminate`-Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite von [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox).

## Weitere Pseudoklassen

Es gibt eine Reihe anderer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um über alle im Detail zu schreiben. Lassen Sie uns über einige sprechen, die Sie sich unbedingt genauer ansehen sollten.

- Die {{cssxref(":focus-within")}}-Pseudoklasse stimmt mit einem Element überein, das den Fokus erhalten hat, oder _enthält_ ein Element, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein darin enthaltenes Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}}-Pseudoklasse stimmt mit fokussierten Elementen überein, die ihren Fokus über eine Tastaturinteraktion erhalten haben (anstatt durch Berühren oder eine Maus) — nützlich, wenn Sie für den Tastaturfokus einen anderen Stil anzeigen möchten als für den Maus- (oder anderen) Fokus.
- Die {{cssxref(":placeholder-shown")}}-Pseudoklasse stimmt mit {{htmlelement('input')}} und {{htmlelement('textarea')}}-Elementen überein, die ihren Placeholder anzeigen (d. h. die Inhalte des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber derzeit nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}}-Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} stimmt auch mit Elementen überein, die keine Kinder haben, wie {{HTMLElement("input")}}, ist jedoch allgemeiner — sie entspricht auch anderen {{Glossary("void_element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Spezifikation der `:blank`-Pseudoklasse ist noch nicht abgeschlossen, sodass sie in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid)-Pseudoklasse wird, wenn sie unterstützt wird, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus erhält, kann das Element in dem Moment `:invalid` sein, wenn der Benutzer Daten eingibt und der Wert vorübergehend ungültig ist, aber `:user-invalid` nur, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er die ganze Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` sein. Ähnlich wie `:invalid` wird es aufhören, `:user-invalid` zu sein, wenn der Wert gültig wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Fortgeschrittenes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit sind wir mit unserem Blick auf UI-Pseudoklassen, die sich auf Formulareingaben beziehen, am Ende angelangt. Spielen Sie weiter mit ihnen, und kreieren Sie einige spaßige Formstile! Als nächstes werden wir uns etwas anderem zuwenden — [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen von benutzerdefinierten Formularelementen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Versenden von Formularen mit JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularwidgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
