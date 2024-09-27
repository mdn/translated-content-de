---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorhergehenden Artikeln haben wir die Gestaltung verschiedener Formularelemente im Allgemeinen behandelt. Dies beinhaltete auch die Verwendung von Pseudoklassen, wie zum Beispiel `:checked`, um ein Kontrollkästchen nur dann zu stylen, wenn es ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen UI-Pseudoklassen, die für das Styling von Formularen in unterschiedlichen Zuständen zur Verfügung stehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich allgemeinen
        Wissens über
        <a
          href="/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements"
          >Pseudoklassen und Pseudoelemente</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Teile von Formularen schwer zu gestalten sind und warum; zu lernen, was getan werden kann, um sie anzupassen.
      </td>
    </tr>
  </tbody>
</table>

## Welche Pseudoklassen stehen zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur dann aus, wenn es von einem Mauszeiger überfahren wird.
- {{cssxref(":focus")}}: Wählt ein Element nur dann aus, wenn es fokussiert ist (z. B. durch Tasteneingaben).
- {{cssxref(":active")}}: Wählt ein Element nur dann aus, wenn es aktiviert wird (z. B. während darauf geklickt wird oder wenn im Fall einer tastaturgebundenen Aktivierung die

  <kbd>Return</kbd>

  /

  <kbd>Enter</kbd>

  Taste gedrückt gehalten wird).

Diese grundlegenden Pseudoklassen sollten Ihnen nun vertraut sein. [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die mit HTML-Formularen in Verbindung stehen. Diese bieten verschiedene nützliche Zielbedingungen, die Sie ausnutzen können. Wir werden diese im Folgenden detaillierter besprechen, aber kurz gesagt, die Hauptsächlich, auf die wir eingehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielen auf Elemente, die erforderlich sein können (z. B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielen auf Formularelemente, die gemäß den formvalidierenden Einschränkungen, die auf sie angewendet werden, gültig/ungültig oder im/außerhalb des Bereichs liegen.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielen auf Elemente, die deaktiviert sein können (z. B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie gerade aktiviert oder deaktiviert sind, sowie schreibgeschützte oder beschreibbare Formularelemente (z. B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Zielen auf Kontrollkästchen und Optionsfelder, die ausgewählt, in einem unbestimmten Zustand (weder gewählt noch nicht gewählt) oder die Standardauswahl beim Laden der Seite sind (z. B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option)-Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt noch viele andere, aber die oben aufgeführten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgerichtet, sehr spezifische Nischenprobleme zu lösen. Die oben aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browser-Kompatibilität, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihre Zielgruppe funktionieren.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen sind darauf ausgerichtet, Formularelemente basierend auf ihrem Validierungszustand zu stylen (ist ihre Eingabe korrekt oder nicht?). Im nächsten Artikel — [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — werden Sie viel mehr darüber erfahren, wie man Validierungseinschränkungen setzt und kontrolliert, aber vorerst werden wir das Thema einfach halten, um Verwirrung zu vermeiden.

## Eingaben basierend darauf stylen, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der client-seitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich (sie muss ausgefüllt werden, bevor das Formular gesendet werden kann) oder optional ist.

{{htmlelement('input')}}, {{htmlelement('select')}}, und {{htmlelement('textarea')}}-Elemente verfügen über ein `required`-Attribut, welches, wenn gesetzt, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich abgesendet wird. Zum Beispiel:

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

Hier sind der Vorname und Nachname erforderlich, aber die E-Mail-Adresse ist optional.

Sie können diese zwei Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} abstimmen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Elemente hätten einen schwarzen Rahmen, während das optionale Element einen silbernen Rahmen hätte, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die client-seitigen Validierungsfehlermeldungen zu sehen, die Browser standardmäßig bereitstellen.

Das obige Formular ist nicht schlecht, aber auch nicht ideal. Zum einen signalisieren wir den erforderlichen versus optionalen Status nur durch Farbe, was für farbenblinde Menschen nicht optimal ist. Zweitens ist die Standardkonvention im Web für den erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das mit den betreffenden Elementen in Verbindung gebracht wird.

Im nächsten Abschnitt werden wir ein besseres Beispiel ansehen, wie man erforderliche Felder mit `:required` kennzeichnen kann, das auch auf die Verwendung von generiertem Inhalt eingeht.

> [!NOTE]
> Sie werden wahrscheinlich nicht oft die `:optional` Pseudoklasse verwenden. Formularelemente sind standardmäßig optional, sodass Sie optionales Styling einfach standardmäßig anwenden und zusätzliches Styling für erforderliche Elemente hinzufügen könnten.

> [!NOTE]
> Wenn ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons das `required`-Attribut gesetzt hat, werden alle Radiobuttons ungültig, bis einer ausgewählt wird, aber nur derjenige mit dem Attribut wird tatsächlich mit {{cssxref(':required')}} übereinstimmen.

## Verwendung von generiertem Inhalt mit Pseudoklassen

In früheren Artikeln haben wir die Nutzung von [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, dass jetzt ein guter Zeitpunkt wäre, um detaillierter darüber zu sprechen.

Die Idee ist, dass wir die [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) Pseudoelemente zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht dem DOM hinzugefügt und kann daher für einige Screenreader unsichtbar sein. Da es sich um ein Pseudoelement handelt, kann es mit Styles gezielt werden, genauso wie jedes andere tatsächliche DOM-Element auch.

Dies ist wirklich nützlich, wenn Sie einen visuellen Indikator zu einem Element hinzufügen möchten, zum Beispiel ein Label oder ein Symbol, wenn alternative Indikatoren verfügbar sind, um die Zugänglichkeit für alle Benutzer zu gewährleisten. Zum Beispiel verwenden wir in unserem [benutzerdefinierten Radiobutton-Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierten Inhalt, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radiobuttons zu handhaben, wenn ein Radiobutton ausgewählt ist:

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

Dies ist wirklich nützlich — Screenreader lassen ihre Benutzer bereits wissen, wenn ein Radiobutton oder Kontrollkästchen, auf das sie stoßen, ausgewählt ist. Daher möchten Sie nicht, dass sie ein weiteres DOM-Element lesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>`-Typen unterstützen es, generierten Inhalt auf ihnen zu haben. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keinen generierten Inhalt an. Andere, einschließlich `range`, `color`, `checkbox`, etc., zeigen generierten Inhalt an.

Zurück zu unserem Beispiel von erforderlich/optional von zuvor, werden wir diesmal nicht das Aussehen der Eingabe selbst ändern — wir werden generierten Inhalt verwenden, um ein kennzeichnendes Label hinzuzufügen ([siehe es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html) und sehen Sie den [Quellcode hier](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir einen Absatz oben im Formular hinzu, der erklärt, was Sie wollen:

```html
<p>Required fields are labeled with "required".</p>
```

Benutzer von Screenreadern hören "erforderlich", wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen.

Wie bereits erwähnt, unterstützen Texteingaben keinen generierten Inhalt, also fügen wir ein leeres [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt daran zu befestigen:

```html
<div>
  <label for="fname">First name: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem hierbei war, dass das `span` in eine neue Zeile unterhalb der Eingabe fiel, weil Eingabe und Label beide auf `width: 100%` gesetzt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, sagen ihm aber auch, dass es seine Inhalte auf neue Zeilen umbricht, falls der Inhalt zu lang wird:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt ist, dass das Label und die Eingabe in separaten Zeilen sitzen, da beide `width: 100%` haben, aber das `<span>` hat eine Breite von `0`, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

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

Wir setzen das `<span>` auf `position: relative`, sodass wir den generierten Inhalt auf `position: absolute` setzen und relativ zum `<span>` positionieren können, anstatt relativ zum `<body>` (Für die Zwecke der Positionierung verhält sich der generierte Inhalt, als ob er ein Kindknoten des Elements wäre, auf dem er generiert wird).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was unser Label sagen sollte, und stylen und positionieren ihn wie gewünscht. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Eingaben basierend darauf stylen, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht. Im Fall numerischer Daten können wir auch von im Bereich und außerhalb des Bereichs sprechen. Formelemente mit [Einschränkungsbeschränkungen](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen gezielt werden.

### :valid und :invalid

Sie können Formelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} anvisieren. Einige Punkte, die beachtet werden sollten:

- Elemente ohne Einschränkungsvalidierung werden immer als gültig betrachtet und daher mit `:valid` übereinstimmen.
- Elemente mit `required` gesetzt, die keinen Wert haben, werden als ungültig betrachtet — sie werden mit `:invalid` und `:required` übereinstimmen.
- Elemente mit eingebauter Validierung, wie `<input type="email">` oder `<input type="url">`, sind (mit) `:invalid` selektiert, wenn die eingegebenen Daten nicht dem gesuchten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Elemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, sind (mit) `:invalid` selektiert, werden aber auch von {{cssxref(":out-of-range")}} getroffen, wie Sie später sehen werden.
- Es gibt noch weitere Möglichkeiten, ein Element mit `:valid`/`:invalid` zu selektieren, wie Sie im Artikel [Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten es vorerst einfach.

Werfen wir einen Blick auf ein einfaches Beispiel für `:valid`/`:invalid` (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und betrachten Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann unterschiedlichen generierten Inhalt je nachdem, ob die Daten des Formulars gültig oder ungültig sind — ein grünes Häkchen oder ein rotes Kreuz, entsprechend. Um ein wenig mehr Dringlichkeit zu den ungültigen Daten hinzuzufügen, haben wir den Eingaben auch einen dicken roten Rahmen gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, weil wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas eingegeben haben. Das E-Mail-Eingabefeld hingegen ist gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### In-Range- und Out-of-Range-Daten

Wie wir oben angedeutet haben, gibt es zwei andere verwandte Pseudoklassen zu beachten — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese selektieren numerische Eingaben, bei denen Bereichsgrenzen durch die Attribute [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) festgelegt sind, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, beziehungsweise.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number`, und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch durch die Pseudoklasse `:valid` selektiert werden, und Eingaben, deren Daten außerhalb des Bereichs liegen, auch durch die Pseudoklasse `:invalid` selektiert werden. Warum also beide? Das Problem ist eigentlich eins der Semantik — außerhalb des Bereiches ist eine spezifischere Art der ungültigen Kommunikation, sodass Sie vielleicht eine andere Nachricht für außerhalb des Bereichs liegende Eingaben bereitstellen möchten, die für Benutzer hilfreicher ist, als nur "ungültig" zu sagen. Vielleicht möchten Sie sogar beide bereitstellen.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf, um Nachrichten für außerhalb des Bereichs liegende Zahlen-Eingaben bereitzustellen, und zeigt auch, ob sie erforderlich sind.

Die numerische Eingabe sieht folgendermaßen aus:

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

Dies ähnelt der Geschichte, die wir zuvor im `:required`-Beispiel hatten, außer dass hier die Deklarationen, die auf jeden `::after`-Inhalt angewendet werden, in eine separate Regel aufgeteilt wurden, und den separaten `::after`-Inhalten für die `:required` und `:out-of-range`-Zuständen ihre eigenen Inhalte und Stylings gegeben wurden. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich für die Zahleneingabe, sowohl erforderlich als auch außerhalb des Bereichs zu sein, gleichzeitig. Was ist dann der Fall? Da die `:out-of-range`-Regel später im Quellcode erscheint als die `:required`-Regel, greifen die [Cascading-Regeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade) und die außerhalb des Bereichs liegende Nachricht wird angezeigt.

Dies funktioniert recht gut — wenn die Seite erstmals geladen wird, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie jedoch ein gültiges Alter eingegeben haben (d. h. im Bereich von 12-120), wird die Eingabe gültig. Wenn Sie jedoch anschließend das Alter auf einen außerhalb des Bereichs liegenden Wert ändern, wird die Nachricht "Außerhalb des erlaubten Wertebereichs" anstelle von "Erforderlich" angezeigt.

> [!NOTE]
> Um einen ungültigen/außerhalb des Bereichs liegenden Wert einzugeben, müssen Sie tatsächlich das Formular fokussieren und es mit der Tastatur eingeben. Die Spinner-Tasten lassen Sie den Wert nicht außerhalb des erlaubten Bereichs inkrementieren/dekrementieren.

## Eingaben basierend darauf stylen, ob sie aktiviert oder deaktiviert sind, sowie schreibgeschützt oder beschreibbar

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, getippt, usw. Ein deaktiviertes Element hingegen kann in keiner Weise interagiert werden und seine Daten werden nicht einmal an den Server gesendet.

Diese zwei Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} selektiert werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie vielleicht diese Daten nicht einmal senden, wenn der Benutzer das Formular sendet. Ein klassisches Beispiel ist ein Versandformular — häufig werden Sie gefragt, ob Sie dieselbe Adresse für Rechnungs- und Versandzwecke verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und vielleicht sogar einfach die Rechnungsadressfelder deaktivieren.

Werfen wir einen Blick auf ein Beispiel, das genau das tut. Zuerst einmal ist der HTML-Code ein einfaches Formular mit Texteingaben sowie ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse an- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

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

Nun zum CSS. Die relevantesten Teile dieses Beispiels sind folgende:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

.disabled-label {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` selektiert, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Diese waren nicht so einfach zu selektieren, daher haben wir eine Klasse verwendet, um ihnen dieses Styling zu geben.

Nun haben wir noch ein wenig JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

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

Es verwendet das [`change` Event](/de/docs/Web/API/HTMLElement/change_event), um den Benutzer die Rechnungsfelder aktivieren/deaktivieren zu lassen und das Styling der zugehörigen Labels umschalten zu lassen.

Sie können das Beispiel unten in Aktion sehen (auch [sehen Sie es live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html) und den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html)):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Schreibgeschützt und schreibbar

Ähnlich wie bei `:disabled` und `:enabled` richten sich die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände, zwischen denen Formulareingaben wechseln. Schreibgeschützte Eingaben haben ihre Werte an den Server gesendet, aber der Benutzer kann sie nicht bearbeiten, während beschreibbare Eingaben standardmäßig bearbeitet werden können.

Eine Eingabe wird durch das `readonly` Attribut auf schreibgeschützt gesetzt. Stellen Sie sich zum Beispiel eine Bestätigungsseite vor, auf der der Entwickler die Details, die auf vorherigen Seiten ausgefüllt wurden, an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer sie alle an einem Ort überprüft, Daten, die benötigt werden, hinzufügt und dann die Bestellung durch Absenden bestätigt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten in einem Rutsch an den Server gesendet werden.

Lassen Sie uns ansehen, wie ein Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html)).

Ein Ausschnitt des HTML sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Mr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die oberste Gruppe von Formularelementen nicht fokussierbar ist, jedoch die Werte beim Absenden des Formulars gesendet werden. Wir haben die Formularelemente unter Verwendung der Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

> **Hinweis:** `:enabled` und `:read-write` sind zwei weitere Pseudoklassen, die Sie wahrscheinlich selten verwenden werden, da sie die Standardzustände von Eingabeelementen beschreiben.

## Radio- und Checkboxzustände — checked, default, indeterminate

Wie wir in früheren Artikeln in diesem Modul gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Kontrollkästchen")}} aktiviert oder nicht aktiviert sein. Es gibt jedoch noch ein paar weitere Zustände zu beachten:

- {{cssxref(":default")}}: Selektiert Radiobuttons/Kontrollkästchen, die auf Standard gesetzt sind, beim Laden der Seite (d. h. durch Setzen des `checked`-Attributs auf ihnen). Diese selektieren die {{cssxref(":default")}} Pseudoklasse, selbst wenn der Benutzer sie deaktiviert.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Kontrollkästchen weder aktiviert noch deaktiviert sind, werden sie als _unbestimmt_ betrachtet und werden die {{cssxref(":indeterminate")}} Pseudoklasse selektieren. Mehr dazu weiter unten.

### :checked

Wenn sie ausgewählt sind, werden sie von der {{cssxref(":checked")}} Pseudoklasse getroffen.

Das häufigste Beispiel dafür ist, einen anderen Stil auf das Kontrollkästchen oder den Radiobutton anzuwenden, wenn es ausgewählt ist, in Fällen, in denen Sie das Systemstandard-Styling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und es selbst wieder aufbauen möchten. Beispiele dafür sahen wir im vorherigen Artikel, als wir über [Verwendung von `appearance: none` auf Radiobuttons/Kontrollkästchen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Zur Wiederholung, der `:checked` Code aus unserem [Gestaltete Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel sieht so aus:

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

Im Wesentlichen bauen wir das Styling für einen Radiobuttons "inneren Kreis" unter Verwendung des `::before` Pseudoelements auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) darauf. Wir verwenden dann eine [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label schön ins Sichtfeld zu animieren, wenn das Radio ausgewählt/aktiviert wird. Der Vorteil der Verwendung eines Transforms im Gegensatz zum Übergang von [`width`](/de/docs/Web/CSS/width)/[`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es vom Zentrum des Kreises wachsen zu lassen, anstatt es scheinbar von der Ecke des Kreises wachsen zu lassen, und es gibt kein Springverhalten, da keine Box-Modell-Eigenschaftswerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, selektiert die {{cssxref(":default")}} Pseudoklasse Radiobuttons/Kontrollkästchen, die bei Seitenladevorgang standardmäßig ausgewählt sind, selbst wenn sie deaktiviert sind. Dies könnte nützlich sein, um einen Indikator zu einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, was die Standardeinstellungen (oder Anfangsoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Auch die oben erwähnten Radiobuttons/Kontrollkästchen werden die {{cssxref(":indeterminate")}} Pseudoklasse selektieren, wenn sie in einem Zustand sind, in dem sie weder aktiviert noch deaktiviert sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe deaktiviert sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nichts, was Sie wahrscheinlich sehr häufig verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darauf hinzuweisen, dass sie einen Radiobutton wirklich auswählen müssen, bevor sie fortfahren.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels ansehen, die den Benutzer daran erinnern, was die Standardoption war, und die Labels von Radiobuttons bei unbestimmtem Zustand gestalten. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Cherry</label>
  <span></span>
</p>
```

Für das `:default`-Beispiel haben wir das `checked`-Attribut auf den mittleren Radiobutton-Eingang hinzugefügt, sodass er standardmäßig ausgewählt ist, wenn er geladen wird. Wir stylen dies mit dem folgenden CSS:

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

Dies liefert ein kleines "Standard" Label auf dem Element, das ursprünglich ausgewählt wurde, als die Seite geladen wurde. Beachten Sie hier, dass wir den darauffolgenden-Geschwister-Kombinator (`~`) anstelle des Nächst-Geschwister-Kombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate`-Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — das ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zu gestalten. Wir stylen die unbestimmten Radiobuttons mit folgendem CSS:

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

Dies schafft einen kleinen animierten Umriss auf den Radiobuttons, der hoffentlich anzeigt, dass einer von ihnen ausgewählt werden muss!

Sehen Sie das Live-Ergebnis unten:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub bei [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie können ein [interessantes Beispiel, das `indeterminate`-Zustände einbezieht](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes), auf der [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Referenzseite finden.

## Weitere Pseudoklassen

Es gibt eine Anzahl weiterer interessanter Pseudoklassen, und wir haben hier nicht den Platz, um über alle im Detail zu schreiben. Lassen Sie uns einige weitere besprechen, die Sie sich unbedingt näher ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse selektiert ein Element, das den Fokus erhalten hat oder ein Element _enthält_, das den Fokus erhalten hat. Dies ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf eine bestimmte Weise hervorgehoben wird, wenn ein darin enthaltenes Eingabefeld fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse selektiert fokussierte Elemente, die den Fokus über eine Tastatureingabe erhalten haben (anstelle von Berührung oder Maus) — nützlich, wenn Sie einen anderen Stil für Tastaturfokus im Vergleich zu Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse selektiert {{htmlelement('input')}} und {{htmlelement('textarea')}} Elemente, die ihren Placeholder anzeigen (d. h. den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut von Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse selektiert leere Formularelemente. {{cssxref(":empty")}} selektiert ebenfalls Elemente, die keine Kinder haben, wie {{HTMLElement("input")}}, ist aber allgemeiner — es selektiert auch andere [void-Elemente](/de/docs/Glossary/void_element) wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Pseudoklasse `:blank` ist noch nicht fertig spezifiziert und daher noch in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird, wenn unterstützt, ähnlich wie {{cssxref(":invalid")}} sein, jedoch mit besserer Benutzererfahrung. Wenn der Wert gültig ist, wenn die Eingabe den Fokus erhält, kann das Element während der Benutzereingabe als `:invalid` selektiert werden, wenn der Wert vorübergehend ungültig ist. Aber es wird nur als `:user-invalid` selektiert, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird er sowohl für die gesamte Dauer des Fokus als `:invalid` als auch als `:user-invalid` selektiert. In ähnlicher Weise wie bei `:invalid` wird es aufhören, `:user-invalid` selektiert zu sein, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweitertes Styling](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Dies schließt unseren Blick auf UI-Pseudoklassen ab, die sich auf Formulareingaben beziehen. Spielen Sie weiterhin mit ihnen, und kreieren Sie einige interessante Formularstile! Als nächstes werden wir uns etwas anderes ansehen — [client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung: Benutzerdefinierte Formularelemente erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Senden von Formularen mit JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaften-Kompatibilitätstabelle für Formularkomponenten](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
