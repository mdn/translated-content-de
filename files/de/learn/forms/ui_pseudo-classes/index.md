---
title: UI-Pseudoklassen
slug: Learn/Forms/UI_pseudo-classes
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

In den vorherigen Artikeln haben wir die Gestaltung verschiedener Formularelemente im Allgemeinen behandelt. Dazu gehörte auch die Verwendung von Pseudoklassen, zum Beispiel die Verwendung von `:checked`, um eine Checkbox nur dann anzusprechen, wenn sie ausgewählt ist. In diesem Artikel erkunden wir die verschiedenen verfügbaren UI-Pseudoklassen zur Gestaltung von Formularen in unterschiedlichen Zuständen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML">HTML</a> und
        <a href="/de/docs/Learn/CSS/First_steps">CSS</a>, einschließlich allgemeiner
        Kenntnisse über
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

## Welche Pseudoklassen stehen uns zur Verfügung?

Die ursprünglichen Pseudoklassen (aus [CSS 2.1](https://www.w3.org/TR/CSS21/selector.html#dynamic-pseudo-classes)), die für Formulare relevant sind, sind:

- {{cssxref(":hover")}}: Wählt ein Element nur aus, wenn es mit einem Mauszeiger darüber schwebt.
- {{cssxref(":focus")}}: Wählt ein Element nur aus, wenn es fokussiert ist (d.h. durch Tabben über die Tastatur).
- {{cssxref(":active")}}: Wählt ein Element nur aus, wenn es aktiviert wird (d.h. während es angeklickt wird oder wenn im Falle einer Tastaturaktivierung die

  <kbd>Eingabe</kbd>

  /

  <kbd>Return</kbd>

  -Taste gedrückt gehalten wird).

Diese grundlegenden Pseudoklassen sollten Ihnen mittlerweile vertraut sein. [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) bieten mehrere andere Pseudoklassen, die sich auf HTML-Formulare beziehen. Diese bieten verschiedene nützliche Bedingungen zum Ansprechen, die Sie nutzen können. Wir werden diese weiter unten detaillierter besprechen, aber kurz gesagt, die wichtigsten, die wir uns ansehen werden, sind:

- {{cssxref(':required')}} und {{cssxref(':optional')}}: Zielgerichtete Elemente, die erforderlich sein können (z.B. Elemente, die das [`required`](/de/docs/Web/HTML/Attributes/required) HTML-Attribut unterstützen)), basierend darauf, ob sie erforderlich oder optional sind.
- {{cssxref(":valid")}} und {{cssxref(":invalid")}}, sowie {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}: Zielgerichtete Formularfelder, die gemäß den festgelegten Validierungsbeschränkungen gültig/ungültig sind oder sich innerhalb/außerhalb des zulässigen Bereichs befinden.
- {{cssxref(":enabled")}} und {{cssxref(":disabled")}}, sowie {{cssxref(":read-only")}} und {{cssxref(":read-write")}}: Zielgerichtete Elemente, die deaktiviert sein können (z.B. Elemente, die das [`disabled`](/de/docs/Web/HTML/Attributes/disabled) HTML-Attribut unterstützen), basierend darauf, ob sie aktuell aktiviert oder deaktiviert sind, sowie schreibgeschützte oder schreibbare Formularfelder (z.B. Elemente mit dem [`readonly`](/de/docs/Web/HTML/Attributes/readonly) HTML-Attribut).
- {{cssxref(":checked")}}, {{cssxref(":indeterminate")}}, und {{cssxref(":default")}}: Jeweils Zielgerichtete Checkboxen und Optionsfelder, die ausgewählt, in einem unbestimmten Zustand (weder ausgewählt noch nicht ausgewählt) sind, sowie die standardmäßig ausgewählte Option, wenn die Seite geladen wird (z.B. ein [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) mit dem [`checked`](/de/docs/Web/HTML/Element/input#checked) Attribut oder ein [`<option>`](/de/docs/Web/HTML/Element/option) Element mit dem [`selected`](/de/docs/Web/HTML/Element/option#selected) Attribut).

Es gibt viele andere, aber die oben genannten sind die offensichtlich nützlichsten. Einige von ihnen sind darauf ausgelegt, sehr spezielle Nischenprobleme zu lösen. Die aufgeführten UI-Pseudoklassen haben eine ausgezeichnete Browserunterstützung, aber natürlich sollten Sie Ihre Formularimplementierungen sorgfältig testen, um sicherzustellen, dass sie für Ihr Zielpublikum geeignet sind.

> [!NOTE]
> Einige der hier besprochenen Pseudoklassen befassen sich mit der Gestaltung von Formularelementen basierend auf ihrem Validierungsstatus (ist deren Daten gültig oder nicht?). Sie werden viel mehr über das Festlegen und Steuern von Validierungsbeschränkungen in unserem nächsten Artikel — [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) — lernen, aber für den Moment halten wir die Dinge bezüglich der Formularvalidierung einfach, um Verwirrung zu vermeiden.

## Styling von Eingaben basierend darauf, ob sie erforderlich sind oder nicht

Eines der grundlegendsten Konzepte der clientseitigen Formularvalidierung ist, ob eine Formulareingabe erforderlich ist (sie muss ausgefüllt werden, bevor das Formular eingereicht werden kann) oder optional.

{{htmlelement('input')}}, {{htmlelement('select')}} und {{htmlelement('textarea')}} Elemente haben ein verfügbares `required` Attribut, das, wenn gesetzt, bedeutet, dass Sie dieses Feld ausfüllen müssen, bevor das Formular erfolgreich eingereicht werden kann. Zum Beispiel:

```html
<form>
  <fieldset>
    <legend>Feedbackformular</legend>
    <div>
      <label for="fname">Vorname: </label>
      <input id="fname" name="fname" type="text" required />
    </div>
    <div>
      <label for="lname">Nachname: </label>
      <input id="lname" name="lname" type="text" required />
    </div>
    <div>
      <label for="email">
        E-Mail-Adresse (geben Sie an, wenn Sie eine Antwort möchten):
      </label>
      <input id="email" name="email" type="email" />
    </div>
    <div><button>Absenden</button></div>
  </fieldset>
</form>
```

Hier sind der Vorname und der Nachname erforderlich, aber die E-Mail-Adresse ist optional.

Sie können diese beiden Zustände mit den Pseudoklassen {{cssxref(':required')}} und {{cssxref(':optional')}} ansprechen. Zum Beispiel, wenn wir das folgende CSS auf das obige HTML anwenden:

```css
input:required {
  border: 1px solid black;
}

input:optional {
  border: 1px solid silver;
}
```

Die erforderlichen Eingaben hätten einen schwarzen Rand, und die optionale Eingabe einen silbernen Rand, wie folgt:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/basic-required-optional.html", '100%', 400)}}

Sie können auch versuchen, das Formular abzusenden, ohne es auszufüllen, um die standardmäßigen clientseitigen Validierungsfehlermeldungen der Browser zu sehen.

Das obige Formular ist nicht schlecht, aber es ist auch nicht großartig. Zum einen signalisieren wir den Status erforderlich versus optional nur anhand der Farbe, was für farbenblinde Menschen nicht ideal ist. Zweitens ist die Standardkonvention im Web für den erforderlichen Status ein Sternchen (`*`) oder das Wort "erforderlich", das mit den betreffenden Steuerelementen verknüpft ist.

Im nächsten Abschnitt schauen wir uns ein besseres Beispiel an, um erforderliche Felder mit `:required` anzuzeigen und dabei auch generierten Inhalt zu verwenden.

> [!NOTE]
> Wahrscheinlich werden Sie die Pseudoklasse `:optional` nicht sehr oft verwenden. Formulareingaben sind standardmäßig optional, sodass Sie Ihr optionales Styling standardmäßig anwenden könnten und zusätzliche Stile für erforderliche Felder hinzufügen könnten.

> [!NOTE]
> Wenn eine Radiobox in einer gleichnamigen Gruppe von Radioboxen das `required` Attribut hat, sind alle Radioboxen ungültig, bis eine ausgewählt wird, aber nur die mit dem Attribut wird tatsächlich {{cssxref(':required')}} zugeordnet.

## Verwendung von generierten Inhalten mit Pseudoklassen

In früheren Artikeln haben wir die Verwendung von [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) gesehen, aber wir dachten, es wäre jetzt ein guter Zeitpunkt, etwas ausführlicher darüber zu sprechen.

Die Idee ist, dass wir die Pseudoelemente [`::before`](/de/docs/Web/CSS/::before) und [`::after`](/de/docs/Web/CSS/::after) zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwenden können, um ein Stück Inhalt vor oder nach dem betroffenen Element erscheinen zu lassen. Der Inhalt wird nicht zum DOM hinzugefügt, sodass er für einige Screenreader unsichtbar sein kann. Da es sich um ein Pseudoelement handelt, kann es mit Stilen auf die gleiche Weise angesprochen werden wie jeder tatsächliche DOM-Knoten.

Dies ist sehr nützlich, wenn Sie ein Visualisierungsindikator zu einem Element hinzufügen möchten, wie z.B. ein Label oder ein Symbol, wenn alternative Indikatoren ebenfalls verfügbar sind, um die Zugänglichkeit für alle Benutzer sicherzustellen. Zum Beispiel verwenden wir in unserem [angepassten Radiobuttons Beispiel](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) generierte Inhalte, um die Platzierung und Animation des inneren Kreises eines benutzerdefinierten Radiobuttons zu steuern, wenn ein Radiobutton ausgewählt wird:

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

Dies ist wirklich nützlich — Screenreader informieren ihre Benutzer bereits darüber, wenn ein Radiobutton oder eine Checkbox, auf die sie treffen, ausgewählt ist, sodass Sie nicht möchten, dass sie ein weiteres DOM-Element vorlesen, das die Auswahl anzeigt — das könnte verwirrend sein. Ein rein visueller Indikator löst dieses Problem.

Nicht alle `<input>` Typen unterstützen das Hinzufügen von generierten Inhalten. Alle Eingabetypen, die dynamischen Text anzeigen, wie `text`, `password` oder `button`, zeigen keine generierten Inhalte an. Andere, einschließlich `range`, `color`, `checkbox` usw., zeigen generierte Inhalte an.

Zurück zu unserem vorherigen Beispiel von erforderlichen/optional Feldern: dieses Mal werden wir nicht das Erscheinungsbild des Eingabefelds selbst ändern — wir verwenden generierte Inhalte, um ein Label hinzuzufügen ([dieses Beispiel hier live ansehen](https://mdn.github.io/learning-area/html/forms/pseudo-classes/required-optional-generated.html), und den [Quellcode hier ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/required-optional-generated.html)).

Zuerst fügen wir dem Formular einen Absatz hinzu, um zu sagen, wonach Sie suchen:

```html
<p>Pflichtfelder sind mit "erforderlich" gekennzeichnet.</p>
```

Screenreader-Benutzer werden "erforderlich" als ein zusätzliches Informationsstück vorgelesen, wenn sie zu jeder erforderlichen Eingabe gelangen, während sehende Benutzer unser Label sehen werden.

Wie bereits erwähnt, unterstützen Texteingaben keine generierten Inhalte, daher fügen wir einen leeren [`<span>`](/de/docs/Web/HTML/Element/span) hinzu, um den generierten Inhalt zu platzieren:

```html
<div>
  <label for="fname">Vorname: </label>
  <input id="fname" name="fname" type="text" required />
  <span></span>
</div>
```

Das unmittelbare Problem war, dass das Span auf eine neue Zeile unter der Eingabe fiel, weil die Eingabe und das Label beide auf `width: 100%` eingestellt sind. Um dies zu beheben, stylen wir das übergeordnete `<div>`, um ein Flex-Container zu werden, und lassen es auch Inhalte auf neue Zeilen umbrechen, wenn die Inhalte zu lang werden:

```css
fieldset > div {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
}
```

Der Effekt davon ist, dass das Label und die Eingabe auf separaten Zeilen sitzen, da sie beide `width: 100%` haben, aber das `<span>` eine Breite von `0` hat, sodass es auf derselben Zeile wie die Eingabe sitzen kann.

Jetzt zum generierten Inhalt. Wir erstellen es mit diesem CSS:

```css
input + span {
  position: relative;
}

input:required + span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "erforderlich";
  color: white;
  background-color: black;
  padding: 5px 10px;
  top: -26px;
  left: -70px;
}
```

Wir setzen das `<span>` auf `position: relative`, damit wir den generierten Inhalt auf `position: absolute` setzen und ihn relativ zum `<span>` positionieren können und nicht relativ zum `<body>` (Der generierte Inhalt verhält sich so, als ob er ein Knoten des Elements wäre, an dem er generiert wird, für Positionierungszwecke).

Dann geben wir dem generierten Inhalt den Inhalt "erforderlich", was unser Label sagen sollte, und stylen und positionieren es nach unseren Wünschen. Das Ergebnis ist unten zu sehen.

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/required-optional-generated.html", '100%', 430)}}

## Styling von Steuerelementen basierend darauf, ob ihre Daten gültig sind

Das andere wirklich wichtige, grundlegende Konzept in der Formularvalidierung ist, ob die Daten eines Formularelements gültig sind oder nicht (im Falle von numerischen Daten können wir auch über Daten sprechen, die innerhalb oder außerhalb des Bereichs liegen). Formularelemente mit [Einschränkungen der Gültigkeitsprüfung](/de/docs/Web/HTML/Constraint_validation) können basierend auf diesen Zuständen angesprochen werden.

### :valid und :invalid

Sie können Formularelemente mit den Pseudoklassen {{cssxref(":valid")}} und {{cssxref(":invalid")}} ansprechen. Einige Punkte, die es zu beachten gilt:

- Steuerelemente ohne Validierungsbeschränkungen sind immer gültig und werden daher mit `:valid` angesprochen.
- Steuerelemente mit gesetztem `required`, die keinen Wert haben, werden als ungültig angesehen — sie werden mit `:invalid` und `:required` angesprochen.
- Steuerelemente mit integrierter Validierung, wie `<input type="email">` oder `<input type="url">` sind (angesprochen mit) `:invalid`, wenn die eingegebenen Daten nicht dem erwarteten Muster entsprechen (aber sie sind gültig, wenn sie leer sind).
- Steuerelemente, deren aktueller Wert außerhalb der Bereichsgrenzen liegt, die durch die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute festgelegt sind, sind (angesprochen mit) `:invalid`, aber auch angesprochen durch {{cssxref(":out-of-range")}}, wie Sie später sehen werden.
- Es gibt einige andere Möglichkeiten, ein Element von `:valid`/`:invalid` ansprechen zu lassen, wie Sie im Artikel [Clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation) sehen werden. Aber wir halten die Dinge vorerst einfach.

Lassen Sie uns ein einfaches Beispiel für `:valid`/`:invalid` untersuchen (siehe [valid-invalid.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/valid-invalid.html) für die Live-Version, und überprüfen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/valid-invalid.html)).

Wie im vorherigen Beispiel haben wir zusätzliche `<span>`s, um generierte Inhalte zu erstellen, die wir verwenden werden, um Indikatoren für gültige/ungültige Daten bereitzustellen:

```html
<div>
  <label for="fname">Vorname: </label>
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

Wie zuvor setzen wir die `<span>`s auf `position: relative`, damit wir den generierten Inhalt relativ zu ihnen positionieren können. Wir positionieren dann je nach Gültigkeit der Formulardaten unterschiedlich generierten Inhalt, einen grünen Haken oder ein rotes Kreuz. Um den ungültigen Daten ein wenig Dringlichkeit zu verleihen, haben wir den Eingaben auch einen dicken roten Rand gegeben, wenn sie ungültig sind.

> [!NOTE]
> Wir haben `::before` verwendet, um diese Labels hinzuzufügen, da wir bereits `::after` für die "erforderlich"-Labels verwendet haben.

Sie können es unten ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/valid-invalid.html", '100%', 430)}}

Beachten Sie, dass die erforderlichen Texteingaben ungültig sind, wenn sie leer sind, aber gültig, wenn sie etwas ausgefüllt haben. Das E-Mail-Eingabefeld ist hingegen gültig, wenn es leer ist, da es nicht erforderlich ist, aber ungültig, wenn es etwas enthält, das keine richtige E-Mail-Adresse ist.

### Innerhalb- und außerhalb-des-Bereichs-Daten

Wie oben angedeutet, gibt es zwei weitere verwandte Pseudoklassen zu berücksichtigen — {{cssxref(":in-range")}} und {{cssxref(":out-of-range")}}. Diese entsprechen numerischen Eingaben, bei denen Bereichsgrenzen durch die [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) Attribute festgelegt werden, wenn ihre Daten innerhalb oder außerhalb des angegebenen Bereichs liegen, jeweils.

> [!NOTE]
> Numerische Eingabetypen sind `date`, `month`, `week`, `time`, `datetime-local`, `number` und `range`.

Es ist erwähnenswert, dass Eingaben, deren Daten im Bereich liegen, auch durch die Pseudoklasse `:valid` angesprochen werden und Eingaben, deren Daten außerhalb des Bereichs liegen, durch die Pseudoklasse `:invalid` angesprochen werden. Warum also beide haben? Das Problem ist wirklich eine Frage der Semantik — außer Bereich ist eine spezifischere Art von ungültiger Kommunikation, sodass Sie möglicherweise eine andere Nachricht für Eingaben außerhalb des Bereichs bereitstellen möchten, die für Benutzer hilfreicher ist, als nur zu sagen "ungültig". Sie möchten vielleicht sogar beides bereitstellen.

Schauen wir uns ein Beispiel an, das genau dies tut. Unser [out-of-range.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/out-of-range.html) Demo (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/out-of-range.html)) baut auf dem vorherigen Beispiel auf und bietet Nachrichten für Eingaben außerhalb des Bereichs für die numerischen Eingaben, sowie Informationen darüber, ob sie erforderlich sind.

Die numerische Eingabe sieht so aus:

```html
<div>
  <label for="age">Alter (muss 12+ sein): </label>
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
  content: "Erforderlich";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Außerhalb des zulässigen Wertebereichs";
  left: -182px;
}
```

Dies ist eine ähnliche Geschichte wie zuvor im `:required` Beispiel, außer dass wir hier die Deklarationen, die für alle `::after` Inhalte gelten, in eine separate Regel ausgelagert haben, und den separaten `::after` Inhalten für `:required` und `:out-of-range` Zustände ihre eigenen Inhalte und Stile gegeben haben. Sie können es hier ausprobieren:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/out-of-range.html", '100%', 430)}}

Es ist möglich, dass die Nummerneingabe sowohl erforderlich als auch außerhalb des Bereichs gleichzeitig ist, was passiert also dann? Da die `:out-of-range` Regel später im Quellcode erscheint als die `:required` Regel, greifen die [Kaskadenregeln](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#understanding_the_cascade), und die Nachricht "Außerhalb des zulässigen Wertebereichs" wird angezeigt.

Dies funktioniert ziemlich gut — wenn die Seite zum ersten Mal lädt, wird "Erforderlich" angezeigt, zusammen mit einem roten Kreuz und Rahmen. Wenn Sie jedoch ein gültiges Alter (d.h. im Bereich von 12-120) eingetippt haben, wird die Eingabe gültig. Wenn Sie jedoch das Alter auf einen Wert ändern, der außerhalb des Bereichs liegt, erscheint die Nachricht "Außerhalb des zulässigen Wertebereichs" anstelle von "Erforderlich".

> [!NOTE]
> Um einen ungültigen/außerhalb-des-Bereichs-Wert einzugeben, müssen Sie das Formular tatsächlich fokussieren und es über die Tastatur eingeben. Die Spin-Buttons lassen Sie den Wert nicht außerhalb des zulässigen Bereichs erhöhen/verringern.

## Styling von aktivierten und deaktivierten Eingaben, sowie Read-only und Schreib-Speichern

Ein aktiviertes Element ist ein Element, das aktiviert werden kann; es kann ausgewählt, angeklickt, eingetippt usw. werden. Ein deaktiviertes Element hingegen kann auf keine Weise interagiert werden, und seine Daten werden nicht einmal an den Server gesendet.

Diese beiden Zustände können mit {{cssxref(":enabled")}} und {{cssxref(":disabled")}} angesprochen werden. Warum sind deaktivierte Eingaben nützlich? Nun, manchmal, wenn einige Daten für einen bestimmten Benutzer nicht zutreffen, möchten Sie möglicherweise nicht einmal diese Daten übermitteln, wenn das Formular übermittelt wird. Ein klassisches Beispiel ist ein Versandformular — üblicherweise werden Sie gefragt, ob Sie die gleiche Adresse für Rechnungsstellung und Versand verwenden möchten; wenn ja, können Sie einfach eine einzige Adresse an den Server senden und die Rechnungsadresse deaktivieren.

Lassen Sie uns ein Beispiel ansehen, das genau dies tut. Zuerst ist das HTML ein einfaches Formular mit Texteingaben, plus ein Kontrollkästchen, um die Deaktivierung der Rechnungsadresse ein- und auszuschalten. Die Rechnungsadressfelder sind standardmäßig deaktiviert.

```html
<form>
  <fieldset id="shipping">
    <legend>Versandadresse</legend>
    <div>
      <label for="name1">Name: </label>
      <input id="name1" name="name1" type="text" required />
    </div>
    <div>
      <label for="address1">Adresse: </label>
      <input id="address1" name="address1" type="text" required />
    </div>
    <div>
      <label for="pcode1">PLZ/Postleitzahl: </label>
      <input id="pcode1" name="pcode1" type="text" required />
    </div>
  </fieldset>
  <fieldset id="billing">
    <legend>Rechnungsadresse</legend>
    <div>
      <label for="billing-checkbox">Gleiche wie Versandadresse:</label>
      <input type="checkbox" id="billing-checkbox" checked />
    </div>
    <div>
      <label for="name" class="billing-label disabled-label">Name: </label>
      <input id="name" name="name" type="text" disabled required />
    </div>
    <div>
      <label for="address2" class="billing-label disabled-label">
        Adresse:
      </label>
      <input id="address2" name="address2" type="text" disabled required />
    </div>
    <div>
      <label for="pcode2" class="billing-label disabled-label">
        PLZ/Postleitzahl:
      </label>
      <input id="pcode2" name="pcode2" type="text" disabled required />
    </div>
  </fieldset>

  <div><button>Absenden</button></div>
</form>
```

Jetzt zum CSS. Die relevantesten Teile dieses Beispiels sind wie folgt:

```css
input[type="text"]:disabled {
  background: #eee;
  border: 1px solid #ccc;
}

.disabled-label {
  color: #aaa;
}
```

Wir haben die Eingaben, die wir deaktivieren möchten, direkt mit `input[type="text"]:disabled` ausgewählt, aber wir wollten auch die entsprechenden Textlabels ausgrauen. Diese waren nicht so einfach auszuwählen, also haben wir eine Klasse verwendet, um sie mit diesem Styling zu versehen.

Jetzt schließlich haben wir etwas JavaScript verwendet, um die Deaktivierung der Rechnungsadressfelder umzuschalten:

```js
// Warten, bis die Seite vollständig geladen ist
document.addEventListener(
  "DOMContentLoaded",
  () => {
    // Fügen Sie einen `change` Ereignislistener zum Kontrollkästchen hinzu
    document
      .getElementById("billing-checkbox")
      .addEventListener("change", toggleBilling);
  },
  false,
);

function toggleBilling() {
  // Wählen Sie die Rechnungstexteingaben aus
  const billingItems = document.querySelectorAll('#billing input[type="text"]');
  // Wählen Sie die Rechnungstextlabels aus
  const billingLabels = document.querySelectorAll(".billing-label");

  // Schalten Sie die Rechnungstexteingaben und labels um
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

Es verwendet das [`change` Ereignis](/de/docs/Web/API/HTMLElement/change_event), um den Benutzer die Rechnungsfelder aktivieren/deaktivieren zu lassen und das Styling der zugehörigen Labels umzuschalten.

Sie können das Beispiel unten in Aktion sehen (sehen Sie es auch [live hier](https://mdn.github.io/learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html), und sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/enabled-disabled-shipping.html) an):

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/enabled-disabled-shipping.html", '100%', 600)}}

### Leseleer und Lese-/Schreibzugriff

In ähnlicher Weise wie `:disabled` und `:enabled` zielen die Pseudoklassen `:read-only` und `:read-write` auf zwei Zustände ab, zwischen denen Formulareingaben wechseln. Leseleere Eingaben senden ihre Werte an den Server, können jedoch vom Benutzer nicht bearbeitet werden, während Lese-/Schreibzugriff bedeutet, dass sie bearbeitet werden können — ihr Standardzustand.

Eine Eingabe wird schreibgeschützt eingestellt, indem das `readonly` Attribut verwendet wird. Stellen Sie sich als Beispiel eine Bestätigungsseite vor, auf der der Entwickler die in vorherigen Seiten ausgefüllten Details an diese Seite gesendet hat, mit dem Ziel, dass der Benutzer alles an einem Ort überprüft, alle erforderlichen abschließenden Daten hinzufügt und dann die Bestellung bestätigt, indem er übermittelt. Zu diesem Zeitpunkt können alle endgültigen Formulardaten auf einmal an den Server gesendet werden.

Schauen wir uns an, wie ein solches Formular aussehen könnte (siehe [readonly-confirmation.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/readonly-confirmation.html) für das Live-Beispiel; sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/readonly-confirmation.html) an).

Ein Fragment des HTMLs sieht wie folgt aus — beachten Sie das readonly Attribut:

```html
<div>
  <label for="name">Name: </label>
  <input id="name" name="name" type="text" value="Herr Soft" readonly />
</div>
```

Wenn Sie das Live-Beispiel ausprobieren, werden Sie sehen, dass die obersten Formularelemente nicht fokussiert werden können, jedoch die Werte beim Absenden des Formulars übermittelt werden. Wir haben die Formularelemente mit den Pseudoklassen `:read-only` und `:read-write` gestaltet, wie folgt:

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

## Radiobutton- und Checkbox-Zustände — checked, default, indeterminate

Wie wir in früheren Artikeln des Moduls gesehen haben, können {{HTMLElement("input/radio", "Radiobuttons")}} und {{HTMLElement("input/checkbox", "Checkboxen")}} angekreuzt oder nicht angekreuzt sein. Aber es gibt noch ein paar andere Zustände zu berücksichtigen:

- {{cssxref(":default")}}: Entspricht Radiobuttons/Checkboxen, die standardmäßig beim Seitenladen angekreuzt sind (d.h. durch Setzen des `checked` Attributs auf sie). Diese entsprechen der {{cssxref(":default")}} Pseudoklasse, auch wenn der Benutzer sie abwählt.
- {{cssxref(":indeterminate")}}: Wenn Radiobuttons/Checkboxen weder angekreuzt noch abgewählt sind, werden sie als _unbestimmt_ betrachtet und der {{cssxref(":indeterminate")}} Pseudoklasse zugeordnet. Mehr darüber, was das bedeutet, unten.

### :checked

Wenn sie angekreuzt sind, werden sie der {{cssxref(":checked")}} Pseudoklasse zugeordnet.

Die häufigste Verwendung davon besteht darin, ein anderes Styling der Checkbox oder des Radiobuttons hinzuzufügen, wenn er angekreuzt ist, in Fällen, in denen Sie das systemseitige Standardstyling mit [`appearance: none;`](/de/docs/Web/CSS/appearance) entfernt haben und die Stile selbst wieder aufbauen möchten. Wir haben Beispiele dafür im vorherigen Artikel gesehen, als wir über [Verwendung von `appearance: none` auf Radiobuttons/Checkboxen](/de/docs/Learn/Forms/Advanced_form_styling#using_appearance_none_on_radioscheckboxes) gesprochen haben.

Um kurz darauf zurückzukommen, der `:checked` Code aus unserem [Gestylte Radiobuttons](https://mdn.github.io/learning-area/html/forms/styling-examples/radios-styled.html) Beispiel sieht so aus:

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

Grundsätzlich bauen wir das Styling für den "inneren Kreis" eines Radiobuttons mit dem `::before` Pseudoelement auf, setzen aber einen `scale(0)` [`transform`](/de/docs/Web/CSS/transform) auf es. Wir verwenden dann einen [`transition`](/de/docs/Web/CSS/transition), um den generierten Inhalt auf dem Label sanft einblenden zu lassen, wenn das Radio ausgewählt/angekreuzt wird. Der Vorteil der Verwendung einer Transformation anstelle der Übergangslänge [`width`](/de/docs/Web/CSS/width) / [`height`](/de/docs/Web/CSS/height) besteht darin, dass Sie [`transform-origin`](/de/docs/Web/CSS/transform-origin) verwenden können, um es von der Mitte des Kreises wachsen zu lassen, anstatt den Anschein zu erwecken, dass es von einer Ecke des Kreises wächst, und es gibt keinen Sprung, da keine Box-Modell-Eigenschaftenwerte aktualisiert werden.

### :default und :indeterminate

Wie oben erwähnt, entspricht die {{cssxref(":default")}} Pseudoklasse Radiobuttons/Checkboxen, die standardmäßig beim Laden der Seite markiert sind, selbst wenn sie abgewählt werden. Dies könnte nützlich sein, um einen Indikator einer Liste von Optionen hinzuzufügen, um den Benutzer daran zu erinnern, welche die Standardwerte (oder Startoptionen) waren, falls sie ihre Auswahl zurücksetzen möchten.

Außerdem entsprechen die oben genannten Radiobuttons/Checkboxen der {{cssxref(":indeterminate")}} Pseudoklasse, wenn sie sich in einem Zustand befinden, in dem sie weder angekreuzt noch nicht angekreuzt sind. Aber was bedeutet das? Elemente, die unbestimmt sind, umfassen:

- {{HTMLElement("input/radio")}} Eingaben, wenn alle Radiobuttons in einer gleichnamigen Gruppe nicht angekreuzt sind
- {{HTMLElement("input/checkbox")}} Eingaben, deren `indeterminate` Eigenschaft über JavaScript auf `true` gesetzt ist
- {{HTMLElement("progress")}} Elemente, die keinen Wert haben.

Dies ist nichts, was Sie wahrscheinlich sehr oft verwenden werden. Ein Anwendungsfall könnte ein Indikator sein, um Benutzer darüber zu informieren, dass sie wirklich einen Radiobutton auswählen müssen, bevor sie weitermachen.

Lassen Sie uns ein paar modifizierte Versionen des vorherigen Beispiels betrachten, die den Benutzer daran erinnern, welches die Standardoption war, und die Labels von Radiobuttons stylen, wenn sie unbestimmt sind. Beide haben die folgende HTML-Struktur für die Eingaben:

```html
<p>
  <input type="radio" name="fruit" value="cherry" id="cherry" />
  <label for="cherry">Kirsche</label>
  <span></span>
</p>
```

Für das `:default` Beispiel haben wir das `checked` Attribut dem mitten Radiobutton-Eingabefeld hinzugefügt, sodass es standardmäßig ausgewählt wird, wenn es geladen wird. Wir stylen es dann mit dem folgenden CSS:

```css
input ~ span {
  position: relative;
}

input:default ~ span::after {
  font-size: 0.7rem;
  position: absolute;
  content: "Standard";
  color: white;
  background-color: black;
  padding: 5px 10px;
  right: -65px;
  top: -3px;
}
```

Dies liefert ein kleines "Standard" Label für das Element, das ursprünglich beim Laden der Seite ausgewählt wurde. Beachten Sie hier, dass wir den nachfolgenden Geschwisterkombinator (`~`) anstelle des nächsten Geschwisterkombinators (`+`) verwenden — wir müssen dies tun, weil das `<span>` nicht direkt nach dem `<input>` in der Quellreihenfolge kommt.

Sehen Sie sich das Live-Ergebnis unten an:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-default.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-default.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-default.html).)

Für das `:indeterminate` Beispiel haben wir keinen standardmäßig ausgewählten Radiobutton — dies ist wichtig — wenn es einen gäbe, gäbe es keinen unbestimmten Zustand zu stylen. Wir stylen die unbestimmten Radiobuttons mit dem folgenden CSS:

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

Dies erzeugt einen lustigen kleinen animierten Umriss um die Radiobuttons, der hoffentlich anzeigt, dass Sie einen von ihnen auswählen müssen!

Sehen Sie sich das Live-Ergebnis unten an:

{{EmbedGHLiveSample("learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html", '100%', 200)}}

> [!NOTE]
> Sie können das Beispiel auch live auf GitHub unter [radios-checked-indeterminate.html](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/pseudo-classes/radios-checked-indeterminate.html).)

> [!NOTE]
> Sie finden ein [interessantes Beispiel mit unbestimmten Zuständen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) auf der Referenzseite von [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox).

## Weitere Pseudoklassen

Es gibt eine Reihe anderer Pseudoklassen von Interesse, und wir haben nicht den Platz, alle hier im Detail zu beschreiben. Lassen Sie uns über ein paar sprechen, die Sie sich genauer ansehen sollten.

- Die {{cssxref(":focus-within")}} Pseudoklasse entspricht einem Element, das den Fokus erhalten hat oder _ein_ Element enthält, das den Fokus erhalten hat. Das ist nützlich, wenn Sie möchten, dass ein ganzes Formular auf irgendeine Weise hervorgehoben wird, wenn ein Eingabefeld darin fokussiert ist.
- Die {{cssxref(":focus-visible")}} Pseudoklasse entspricht fokussierten Elementen, die den Fokus durch Tastatureingaben (statt durch Berührung oder Maus) erhalten haben — nützlich, wenn Sie einen anderen Stil für den Tastaturfokus im Vergleich zum Maus- (oder anderen) Fokus anzeigen möchten.
- Die {{cssxref(":placeholder-shown")}} Pseudoklasse entspricht {{htmlelement('input')}} und {{htmlelement('textarea')}} Elementen, die ihren Platzhalter anzeigen (d.h., den Inhalt des [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attributs), weil der Wert des Elements leer ist.

Die folgenden sind ebenfalls interessant, aber bisher nicht gut in Browsern unterstützt:

- Die {{cssxref(":blank")}} Pseudoklasse wählt leere Formularelemente aus. {{cssxref(":empty")}} entspricht auch Elementen, die keine Kinder haben, wie {{HTMLElement("input")}}, aber es ist allgemeiner — es entspricht auch anderen {{glossary("void element", "void elements")}} wie {{HTMLElement("br")}} und {{HTMLElement("hr")}}. `:empty` hat eine angemessene Browserunterstützung; die Pseudoklasse `:blank` ist noch nicht fertig spezifiziert, daher wird sie in keinem Browser unterstützt.
- Die [`:user-invalid`](/de/docs/Web/CSS/:user-invalid) Pseudoklasse wird ähnlich wie {{cssxref(":invalid")}} sein, wenn sie unterstützt wird, aber mit besserem Benutzererlebnis. Wenn der Wert gültig ist, wenn das Eingabeelement den Fokus erhält, kann das Element wie der Benutzer Daten eingibt, vorübergehend ungültig und zu `:invalid` werden, aber wird nur `:user-invalid` entsprechen, wenn das Element den Fokus verliert. Wenn der Wert ursprünglich ungültig war, wird es sowohl `:invalid` als auch `:user-invalid` für die gesamte Dauer des Fokus entsprechen. In ähnlicher Weise `:invalid`, wird es `:user-invalid` nicht mehr entsprechen, wenn der Wert gültig wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Erweiterte Gestaltung](/de/docs/Learn/Forms/Test_your_skills:_Advanced_styling).

## Zusammenfassung

Damit beenden wir unsere Untersuchung der UI-Pseudoklassen, die sich auf Formulareingaben beziehen. Experimentieren Sie weiter mit ihnen und erstellen Sie einige unterhaltsame Formularstile! Als nächstes werden wir uns einem anderen Thema zuwenden — [clientseitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation).

{{PreviousMenuNext("Learn/Forms/Advanced_form_styling", "Learn/Forms/Form_validation", "Learn/Forms")}}

### Erweiterte Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftenkompatibilitätstabelle für Formularsteuerungselemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
