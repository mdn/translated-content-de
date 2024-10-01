---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir das allgemeine Styling verschiedener Formularelemente behandelt. Dies beinhaltete auch die Verwendung von Pseudoklassen, z.B. die Verwendung von `:checked`, um ein Kontrollkästchen nur dann anzusprechen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in unterschiedlichen Zuständen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich grundlegender
        Kenntnisse von
        <a
          href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >Pseudoklassen und Pseudoelementen</a
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

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur, wenn es fokussiert ist (d.h. wenn es über die Tastatur ausgewählt wird).
- {{cssxref(":active")}}: Wählt ein Element nur, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn die

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  Taste im Falle einer Tastaturaktivierung gedrückt wird).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen im Zusammenhang mit HTML-Formularen. Diese bieten mehrere nützliche Zielbedingungen, die Sie nutzen können. Wir werden diese im Detail in den folgenden Abschnitten besprechen, aber kurz gesagt, die Hauptklassen, die wir betrachten werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen Sie auf Elemente ab, die als erforderlich sein können (z.B. Elemente, die das HTML-Attribut [`required`](/de/docs/Web/HTML/Attributes/required) unterstützen)), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen Sie auf Formularelemente ab, die gemäß den auf ihnen gesetzten Formvalidierungsbeschränkungen gültig/ungültig oder innerhalb/außerhalb des Bereichs sind.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen Sie auf Elemente ab, die deaktiviert werden können (z.B. Elemente, die das HTML-Attribut [`disabled`](/de/docs/Web/HTML/Attributes/disabled) unterstützen), je nachdem, ob sie derzeit aktiviert oder deaktiviert sind, und auf schreibbare oder schreibgeschützte Formularelemente (z.B. Elemente mit gesetztem HTML-Attribut [`readonly`](/de/docs/Web/HTML/Attributes/readonly)).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Respektive zielen Sie auf Kontrollkästchen und Optionsfelder ab, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) und die bei Seitenaufruf standardmäßig ausgewählte Option sind (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit gesetztem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit gesetztem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt viele andere, aber die oben aufgeführten sind die am offensichtlichsten nützlichen. Einige von ihnen zielen darauf ab, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine exzellente Browser-Unterstützung, aber natürlich sollten Sie Ihre Formulare implementieren und sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum funktionieren.

> [!NOTE]
> Eine Reihe der hier besprochenen Pseudoklassen bezieht sich auf das Styling von Formularelementen basierend auf ihrem Validierungszustand (Sind ihre Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen in unserem nächsten Artikel lernen — [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — aber für den Moment halten wir die Formvalidierung einfach, damit sie nicht verwirrt.

## Eingaben stylen basierend darauf, ob sie erforderlich sind oder nicht

Ein grundlegendes Konzept der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular abgeschickt werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}} Elemente haben ein verfügbares `required`-Attribut, das, wenn es gesetzt ist, bedeutet, dass Sie dieses Element ausfüllen müssen, bevor das Formular erfolgreich abgeschickt wird. Zum Beispiel:

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

Sie können diese beiden Zustände mit den {{cssxref(':required')}} und {{cssxref(':optional')}} Pseudoklassen ansprechen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Elemente hätten einen schwarzen Rahmen, und das optionale Element würde einen silbernen Rahmen haben, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Außerdem können Sie versuchen, das Formular abzusenden, ohne es auszufüllen, um die Standardfehlermeldungen der clientseitigen Validierung zu sehen, die Ihnen die Browser geben.

Obiges Formular ist nicht schlecht, aber es ist auch nicht großartig. Zum einen signalisieren wir den erforderlichen gegenüber dem optionalen Status nur durch Farbe, was für farbenblinde Menschen nicht ideal ist. Zweitens ist die Standardkonvention im Web für den erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das mit den betreffenden Elementen in Verbindung gebracht wird.

Im nächsten Abschnitt werden wir ein besseres Beispiel für die Anzeige von erforderlichen Feldern mit `:required` sehen, das auch die Verwendung von generiertem Inhalt behandelt.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, so dass Sie Ihr optionales Styling einfach standardmäßig anwenden und für die erforderlichen Elemente zusätzliche Stile hinzufügen könnten.

> [!NOTE]
> Wenn ein Radio-Button in einer gleich benannten Gruppe von Radio-Buttons das `required`-Attribut gesetzt hat, werden alle Radio-Buttons ungültig sein, bis einer ausgewählt ist, aber nur derjenige mit dem zugewiesenen Attribut wird tatsächlich {{cssxref(':required')}} entsprechen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In vorherigen Artikeln haben wir die Verwendung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, jetzt wäre ein guter Zeitpunkt, um es etwas ausführlicher zu besprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, so dass er für einige Screenreader möglicherweise unsichtbar ist. Da es sich um ein Pseudoelement handelt, kann es mit Stilen auf dieselbe Weise wie jeder tatsächliche DOM-Knoten angesprochen werden.

Dies ist besonders nützlich, wenn Sie ein visuelles Indikator zu einem Element hinzufügen möchten, z.B. ein Label oder ein Icon, wenn alternative Indikatoren ebenfalls zur Sicherstellung der Zugänglichkeit für alle Benutzer verfügbar sind. Zum Beispiel verwenden wir in unserem [Beispiel für benutzerdefinierte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation eines inneren Kreises eines benutzerdefinierten Radio-Buttons zu handhaben, wenn ein Radio-Button ausgewählt wird:

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

Dies ist sehr nützlich — Screenreader informieren ihre Benutzer bereits, wenn ein Radio-Button oder ein Kontrollkästchen, auf das sie stoßen, ausgewählt ist, so dass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen das Hinzufügen von generiertem Inhalt auf ihnen. Alle Eingabetypen, die dynamischen Text in sich zeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, usw., zeigen generierten Inhalt an.

Zurück zu unserem vorherigen Beispiel von erforderlichen/optionalen Feldern, werden wir dieses Mal das Aussehen des Inputs selbst nicht ändern — wir werden generierten Inhalt verwenden, um ein anzeigendes Label hinzuzufügen ([sehen Sie es hier live an](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und sehen Sie sich den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html) an).

Zuerst fügen wir dem Formular oben einen Absatz hinzu, um zu erklären, was Sie suchen:

```html
<p>Required fields are labeled with "required".</p>
```

Screenreader-Benutzer werden "erforderlich" als zusätzliches Informationsstück hören, wenn sie zu jeder erforderlichen Eingabe kommen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, daher fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt darauf zu legen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem damit war, dass das Span in eine neue Zeile unter dem Input fiel, weil sowohl das Input als auch das Label auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>` so, dass es ein Flex-Container wird, sagen ihm aber auch, dass es seine Inhalte in neue Zeilen umbricht, falls der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Die Wirkung, die dies hat, ist, dass das Label und das Input auf separaten Linien sitzen, weil sie beide eine `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, so dass es auf derselben Linie wie das Input bleiben kann.

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

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können, anstatt zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein Kindknoten des Elements ist, auf dem er generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was das Label sagen sollte, und stylen und positionieren ihn so, wie wir wollen. Das Ergebnis sehen Sie unten.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Steuerungselemente stylen basierend darauf, ob ihre Daten gültig sind

Ein weiteres wirklich wichtiges, grundlegendes Konzept bei der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle numerischer Daten können wir auch von Daten innerhalb und außerhalb des Bereichs sprechen). Formularelemente mit [Einschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den {{cssxref(":valid")}} und {{cssxref(":invalid")}} Pseudoklassen ansprechen. Einige Punkte, die beachtet werden sollten:

- Elemente ohne Einschränkungsvalidierung sind immer gültig und werden daher mit `:valid` angesprochen.
- Elemente mit gesetztem `required`, die keinen Wert haben, werden als ungültig gezählt — sie werden mit `:invalid` und `:required` angesprochen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (mit) `:invalid` angesprochen, wenn die in sie eingegebenen Daten nicht dem gewünschten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegten Bereichsgrenzen liegt, sind (mit) `:invalid`, werden jedoch auch von {{cssxref(":out-of-range")}} angesprochen, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element mit `:valid`/`:invalid` anzusprechen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten es jetzt einfach.

Lassen Sie uns ein einfaches Beispiel für `:valid`/`:invalid` anschauen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version und auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, auf denen generierter Inhalt erstellt wird, den wir nutzen, um Indikatoren für gültige/ungültige Daten bereitzustellen:

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Dann positionieren wir verschiedene generierte Inhalte absolut, je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grüner Haken oder ein rotes Kreuz, jeweils. Um ein bisschen zusätzliche Dringlichkeit für die ungültigen Daten hinzuzufügen, haben wir den Eingaben auch eine dicke rote Umrandung gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwenden.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, wie die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig werden, wenn etwas ausgefüllt ist. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn etwas eingegeben wird, das keine richtige E-Mail-Adresse ist.

### Daten im Bereich und außerhalb des Bereichs

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu betrachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese entsprechen numerischen Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch von der `:valid`-Pseudoklasse angesprochen werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch von der `:invalid`-Pseudoklasse angesprochen werden. Doch warum beide haben? Das Problem ist wirklich eine Frage der Semantik — außerhalb des Bereichs ist eine spezifischere Art der ungültigen Kommunikation, so dass Sie eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die dem Benutzer hilfreicher ist, als nur zu sagen "ungültig". Sie möchten vielleicht sogar beide bereitstellen.

Lassen Sie uns ein Beispiel sehen, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html) an) baut auf dem vorherigen Beispiel auf, um Nachrichten für außerhalb des Bereichs befindliche numerische Eingaben, sowie das "erforderlich" anzugeben.

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

Dies ist eine ähnliche Geschichte wie wir vorher im `:required`-Beispiel hatten, außer dass wir hier die Deklarationen, die für alle `::after`-Inhalte gelten, in eine separate Regel aufgeteilt haben und dem separaten `::after`-Inhalt für `:required` und `:out-of-range` Zustände ihren eigenen Inhalt und ihre eigene Formatierung gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Zahleneingabe sowohl erforderlich als auch außerhalb des Bereichs ist, also was passiert dann? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, greift die [Kaskadenregel](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) und die Nachricht außerhalb des zulässigen Wertebereichs wird angezeigt.

Dies funktioniert recht gut — wenn die Seite zunächst geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie jedoch ein gültiges Alter eintippen (d.h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch dann das Alterswert ändern, sodass es außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es mit der Tastatur eintippen. Die Spinner-Buttons erlauben es nicht, den Wert außerhalb des zulässigen Bereichs zu inkrementieren/dekrementieren.

## Eingabe-Elemente stylen basierend darauf, ob sie aktiviert oder deaktiviert sind, und schreibgeschützt oder schreibbar

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt usw. werden. Ein deaktiviertes Element auf der anderen Seite kann in keiner Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn bestimmte Daten für einen bestimmten Benutzer nicht gelten, möchten Sie möglicherweise gar nicht diese Daten übermitteln, wenn sie das Formular absenden. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandszwecke verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und können ebenso gut die Rechnungsadressfelder deaktivieren.

Lassen Sie uns ein Beispiel betrachten, das genau dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, sowie einem Kontrollkästchen, um das Deaktivieren der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

.disabled-label {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Diese waren nicht ganz so leicht auszuwählen, daher haben wir eine Klasse verwendet, um ihnen dieses Styling zu geben.

Schließlich haben wir ein bisschen JavaScript verwendet, um das Deaktivieren der Rechnungsadressfelder umzustellen:

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
  // Select the billing text labels
  const billingLabels = document.querySelectorAll(".billing-label");

  // Toggle the billing text fields and labels
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;

    if (
      billingLabels[i].getAttribute("class") === "billing-label disabled-label"
    ) {
      billingLabels[i].setAttribute("class", "billing-label");
    } else {
      billingLabels[i].setAttribute("class", "billing-label disabled-label");
    }
  }
}
```

Es verwendet das [`change`-Ereignis](/de/docs/Web/API/HTMLElement/change_event), um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren und das Styling der zugehörigen Labels zu ändern.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live an](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibbar

Ähnlich wie bei `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln. Schreibgeschützte Eingaben haben ihre Werte, die an den Server gesendet werden, aber der Benutzer kann sie nicht bearbeiten, während schreibbar bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird mithilfe des `readonly`-Attributs auf schreibgeschützt gesetzt. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, den Benutzer alle an einem Ort zu überprüfen, alle benötigten Enddaten hinzuzufügen und dann die Bestellung durch Übermitteln zu bestätigen. An diesem Punkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Lassen Sie uns anschauen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Fragment des HTML sieht wie folgt aus — beachten Sie das readonly-Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie feststellen, dass die obere Reihe von Formularelementen nicht fokussierbar ist, jedoch werden die Werte beim Absenden des Formulars übermittelt. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestylt, wie folgt:

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

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radio-Buttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} ausgewählt oder abgewählt werden. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Entspricht Radios/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite (d.h. durch Setzen des `checked`-Attributs auf ihnen). Diese entsprechen der {{cssxref(":default")}} Pseudoklasse, selbst wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radios/Kontrollkästchen weder aktiviert noch deaktiviert sind, gelten sie als _unbestimmt_ und entsprechen der {{cssxref(":indeterminate")}} Pseudoklasse. Mehr dazu unten.

### :checked

Wenn sie aktiviert sind, werden sie von der {{cssxref(":checked")}} Pseudoklasse angesprochen.

Die häufigste Verwendung dafür ist es, bei Kontrollkästchen oder Optionsfeldern einen anderen Stil hinzuzufügen, wenn sie aktiviert sind, in Fällen, in denen Sie die systemseitigen Standardstile mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbständig wieder aufbauen möchten. Wir haben bereits im vorherigen Artikel Beispiele dafür gesehen, als wir über [die Verwendung von `appearance: none` für Radios/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) sprachen.

Als Rückblick sieht der `:checked`-Code aus unserem [Beispiel für gestylte Radio-Buttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) wie folgt aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radio-Buttons mit dem `::before` Pseudoelement auf, setzen aber eine `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label ansprechend in die Ansicht zu animieren, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung einer Transformation anstelle einer Übergang von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, damit es aus der Mitte des Kreises wächst, anstatt aus einer Ecke des Kreises zu erscheinen, und es gibt kein Springverhalten, da keine Boxmodell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudoklasse Radios/Kontrollkästchen, die standardmäßig aktiviert sind, beim Laden der Seite, selbst wenn sie abgewählt sind. Dies könnte nützlich sein, um einer Liste von Optionen einen Indikator hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardwerte waren, falls er seine Auswahl zurücksetzen möchte.

Außerdem entsprechen die oben genannten Radios/Kontrollkästchen, wenn sie sich in einem Zustand befinden, in dem sie weder aktiviert noch deaktiviert sind, der {{cssxref(":indeterminate")}} Pseudoklasse. Aber was bedeutet das? Zu den unbestimmten Elementen gehören:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radio-Buttons in einer gleich benannten Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate`-Eigenschaft mit JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist etwas, das Sie wahrscheinlich nicht sehr oft verwenden werden. Eine Anwendung könnte ein Indikator sein, um den Benutzern mitzuteilen, dass sie wirklich einen Radio-Button auswählen müssen, bevor sie fortfahren.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die die Benutzer daran erinnern, was die Standardoption war, und die Labels von Radio-Buttons bei unbestimmtem Zustand stylen. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radio-Button gesetzt, so dass er standardmäßig geladen wird. Wir stylen dies mit folgendem CSS:

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

Dies bietet ein kleines "Standard"-Label auf dem Element, das ursprünglich ausgewählt war, als die Seite geladen wurde. Beachten Sie, dass wir hier den anschließenden Geschwisterselektor (`~`) anstelle des nächsten Geschwisterselektors (`+`) verwenden — wir müssen dies tun, da der `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html)).

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radio-Button — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zum Stylen. Wir stylen die unbestimmten Radio-Buttons mit folgendem CSS:

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

Dadurch entsteht eine kleine animierte Umrandung auf den Radio-Buttons, was hoffentlich darauf hinweist, dass Sie einen von ihnen auswählen müssen!

Siehe das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html)).

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate`-Zustände betrifft,](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) finden.

## Weitere Pseudoklassen

Es gibt eine Reihe von weiteren interessanten Pseudoklassen, und wir haben hier nicht den Platz, um sie alle im Detail zu besprechen. Lassen Sie uns über einige weitere sprechen, die Sie sich genauer anschauen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein dort enthaltenes Eingabefeld fokussiert wird.
- Die {{cssxref(":focus-visible")}} Pseudoklasse entspricht fokussierten Elementen, die den Fokus durch Tastaturinteraktion erhalten haben (anstatt durch Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokussen anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, die ihren Platzhalter anzeigen (d.h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), da der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher noch nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es umfasst auch andere {{Glossary("void_element", "Leerelemente")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browser-Unterstützung; die Spezifikation der `:blank` Pseudoklasse ist noch nicht abgeschlossen, so dass es in keinem Browser unterstützt wird.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, aber mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn das Eingabefeld den Fokus bekommt, kann das Element von `:invalid` angesprochen werden, wenn der Wert vorübergehend ungültig ist, während der Benutzer Daten eingibt, aber es wird nur von `:user-invalid` angesprochen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es über die gesamte Dauer des Fokus sowohl `:invalid` als auch `:user-invalid` entsprechen. Ähnlich wie `:invalid` wird es aufhören, `:user-invalid` zu entsprechen, wenn der Wert tatsächlich gültig ist.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Prüfen Sie Ihre Fähigkeiten: Erweiterte Formatierung](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit schließen wir unser Thema über UI-Pseudoklassen ab, die sich auf Formularelemente beziehen. Experimentieren Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als nächstes werden wir etwas anderes behandeln — [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung zur Erstellung benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formularversand über JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
