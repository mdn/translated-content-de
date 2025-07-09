---
title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente vom Typ **`text`** erstellen einfache einzeilige Textfelder.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut ist eine Zeichenkette, die den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen Wert mit der `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn keine Validierungsbeschränkungen für die Eingabe bestehen (siehe [Validierung](#validierung) für weitere Einzelheiten), kann der Wert eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Texteinträge die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines im selben Dokument befindlichen {{HTMLElement("datalist")}}-Elements. Die {{HTMLElement("datalist")}} bietet eine Liste von vordefinierten Werten, die dem Benutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, sind nicht in den vorgeschlagenen Optionen enthalten. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert angeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlenwert kleiner oder gleich dem Wert sein, der durch `maxlength` angegeben ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einschließen.

Siehe [Festlegen eines Musters](#festlegen_eines_musters) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Kontrolle eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatzeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für Bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Methoden, um Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Zugänglichkeit](/de/docs/Web/HTML/Reference/Elements/input#accessibility) für weitere Informationen.

### `readonly`

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der direkt die `value`-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat das Attribut `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der anzeigt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies eventuell nicht exakt sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schrift ({{cssxref("font")}}-Einstellungen).

Dies setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann bei allen bearbeitbaren Inhalten verwendet werden, aber hier betrachten wir spezifische Aspekte im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die zulässigen Werte für `spellcheck` sind:

- `false`
  - : Deaktiviert die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktiviert die Rechtschreibprüfung für dieses Element.
- `""` (leere Zeichenkette) oder kein Wert
  - : Folgt dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann basierend auf der `spellcheck`-Einstellung des übergeordneten Elements oder anderen Faktoren sein.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das Attribut [readonly](#readonly) gesetzt hat und nicht deaktiviert ist.

Der durch Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb eines Elements wider, wenn die Präferenzen des {{Glossary("user_agent", "User-Agents")}} die Einstellung überschreiben.

## Verwendung von Text-Eingaben

`<input>`-Elemente vom Typ `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten sie überall dort verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und es keinen spezifischeren Eingabetyp gibt, um diesen Wert zu erfassen (zum Beispiel, wenn es ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), eine [URL](/de/docs/Web/HTML/Reference/Elements/input/url), eine [E-Mail](/de/docs/Web/HTML/Reference/Elements/input/email) oder ein [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) ist, haben Sie bessere Optionen zur Verfügung).

### Einfaches Beispiel

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Beim Absenden wird das Datenname/Wert-Paar, das an den Server gesendet wird, `name=Chris` sein (wenn "Chris" als Eingabewert vor dem Absenden eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut auf das {{HTMLElement("input")}}-Element einzuschließen, andernfalls wird der Wert des Textfeldes nicht mit den gesendeten Daten eingeschlossen.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter innerhalb Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden sollte, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

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

Der Platzhalter wird typischerweise in einer helleren Farbe als die Vordergrundfarbe des Elements dargestellt und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmatisch einen Wert erhält, indem sein `value`-Attribut gesetzt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefelds kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe auf einmal anzeigen kann. Dies beeinflusst die Breite des Elements und ermöglicht es Ihnen, die Breite in Bezug auf Zeichen anstelle von Pixeln anzugeben. In diesem Beispiel ist die Eingabe zum Beispiel 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir unten besprechen werden.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Server-Skripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemandem, Anpassungen am HTML vorzunehmen, die ihm erlauben, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server sendet. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn fälschlicherweise formatierte Daten (oder Daten, die zu groß, vom falschen Typ und so weiter sind) in Ihre Datenbank eingegeben werden.

### Ein Hinweis zur Stilgestaltung

Es gibt nützliche Pseudo-Klassen zur Gestaltung von Formularelementen, die dem Benutzer helfen zu sehen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (Tick) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten platziert.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element hinter dem Formularelement platziert wird, das als Halter für die Symbole dient. Dies war notwendig, da einige Eingabetypen in einigen Browsern Symbole, die direkt nach ihnen platziert sind, nicht gut darstellen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut als einfache Möglichkeit verwenden, das Eingeben eines Wertes zu erfordern, bevor das Absenden des Formulars erlaubt ist:

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut eine minimale Länge (in Zeichen) für den eingegebenen Wert angeben; verwenden Sie ebenso [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4–8 Zeichen lang ist.

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine angemessene Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser das nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` angeben, aber kein `required` angeben, wird die Eingabe als gültig angesehen, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Festlegen eines Musters

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig angesehen zu werden (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Schnellkurs zur Verwendung von regulären Ausdrücken zur Validierung von Eingaben).

Das folgende Beispiel beschränkt den Wert auf 4-8 Zeichen und erfordert, dass er nur Kleinbuchstaben enthält.

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie können gute Beispiele für im Kontext verwendete Texteingaben in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) sehen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenfolge, die den Text im
        Textfeld darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> und
        <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>, <code>value</code></td>
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
      <td>Ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>Mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, auf der es basiert.
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- {{HTMLElement("textarea")}}: Mehrzeilige Texteingabe
