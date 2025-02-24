---
title: <input type="text">
slug: Web/HTML/Element/input/text
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erstellen grundlegende einzeilige Textfelder.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Name (4 to 8 characters):</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert mithilfe der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im selben Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, um dem Benutzer Vorschläge für diese Eingabe zu machen. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Element/input#type) nicht kompatibel sind, werden nicht in den vorgeschlagenen Optionen einbezogen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste wählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, gibt es keine maximale Länge für die `text`-Eingabe. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Bescheidprüfungen](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des Textwertes des Feldes größer ist als `maxlength` UTF-16 Code-Einheiten. Die Bescheidprüfungen werden nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die Mindestzeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer, ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` festgelegten Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Bescheidprüfungen](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten lang ist. Die Bescheidprüfungen werden nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Bescheidprüfungen](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, damit das Muster als Unicode-Codepunkte-Sequenz anstelle als {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das spezifizierte Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, der von den meisten Browsern als Tooltip angezeigt wird, um zu erklären, was die Anforderungen sind, um das Muster zu erfüllen. Sie sollten auch weiteren erklärenden Text in der Nähe einfügen.

Siehe [Spezifizieren eines Musters](#ein_muster_festlegen) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp darstellt und keine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) aufweist, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Zweiweg-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Zugänglichkeit Bedenken](/de/docs/Web/HTML/Element/input#accessibility) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, indem die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft direkt festgelegt wird.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der anzeigt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies genau oder nicht genau sein und sollte nicht als solche angenommen werden; die resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen).

Dies setzt _keine_ Grenze, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur annähernd an, wie viele auf einmal angezeigt werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) globale Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir spezifische Details im Zusammenhang mit der Verwendung von `spellcheck`-Attributen auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- `""` (leerer String) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf den `spellcheck`-Einstellungen eines übergeordneten Elements oder andere Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der Wert, der durch das Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} die Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten diese verwenden, wann immer Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und kein spezifischerer Eingabetyp für das Erfassen dieses Wertes verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Element/input/datetime-local), eine [URL](/de/docs/Web/HTML/Element/input/url), eine [E-Mail](/de/docs/Web/HTML/Element/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Element/input/search) handelt, haben Sie bessere Optionen zur Verfügung).

### Grundlegendes Beispiel

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn das Formular übermittelt wird, wird das Daten Name/Wert-Paar an den Server gesendet, das `name=Chris` lautet (wenn "Chris" als Eingabewert vor der Einreichung eingegeben wurde). Sie müssen das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut im {{HTMLElement("input")}}-Element einfügen, sonst wird der Wert des Textfeldes nicht mit den übermittelten Daten eingeschlossen.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden sollte, indem Sie das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut einschließen. Schauen Sie sich das folgende Beispiel an:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

Sie können sehen, wie der Platzhalter unten dargestellt wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird normalerweise in einer helleren Farbe als die Vordergrundfarbe des Elements gerendert und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wenn das Feld einen Wert durch Setzen seines `value`-Attributs programmatisch erhält).

### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann durch das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe gleichzeitig anzeigen kann. Dies beeinflusst die Breite des Elements und ermöglicht es Ihnen, die Breite in Bezug auf Zeichen anstelle von Pixeln zu spezifizieren. In diesem Beispiel ist die Eingabe beispielsweise 30 Zeichen breit:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Lower case, all one word"
      size="30" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

{{EmbedLiveSample('Physical_input_element_size', 600, 80)}}

## Validierung

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige Optionen für die clientseitige Validierung, die wir im Folgenden besprechen werden.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist zu einfach, Anpassungen am HTML vorzunehmen, die es ermöglichen, die Validierung zu umgehen oder vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die Daten, die er erhält, nicht validiert, könnte ein Desaster drohen, wenn unsachgemäß formatierte Daten (oder Daten, die zu groß sind, vom falschen Typ sind usw.) in Ihre Datenbank eingegeben werden.

### Hinweis zum Styling

Es gibt nützliche Pseudo-Klassen für das Styling von Formularelementen, um dem Benutzer anzuzeigen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir die folgende CSS, die ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten anzeigt.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert werden muss und als Halter für die Symbole fungiert. Dies war notwendig, da einige Eingabetypen in einigen Browsern die direkt nach ihnen platzierten Symbole nicht gut darstellen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut verwenden, um das Eintragen eines Wertes vor der Formularübermittlung zur Pflicht zu machen:

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input type="text" id="uname" name="name" required />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff zu übermitteln, wird der Browser eine Fehlermeldung anzeigen.

### Eingabewertlänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mithilfe des [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attributs festlegen; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert eine Länge von 4–8 Zeichen hat.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="10"
      placeholder="Username"
      minlength="4"
      maxlength="8" />
    <span class="validity"></span>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}
input + span {
  padding-right: 30px;
}
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen zu übermitteln, erhalten Sie eine entsprechende Fehlermeldung (die sich je nach Browser unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` angeben, aber kein `required`, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, dem der eingegebene Wert entsprechen muss, um als gültig betrachtet zu werden (siehe [Validierung durch einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen kurzen Kurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass er nur aus Kleinbuchstaben besteht.

```html
<form>
  <div>
    <label for="uname">Choose a username: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
    <span class="validity"></span>
    <p>Usernames must be lowercase and 4-8 characters in length.</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie können gute Beispiele für Texteingaben im Kontext in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Text im
        Textfeld darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interface, auf dem es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
