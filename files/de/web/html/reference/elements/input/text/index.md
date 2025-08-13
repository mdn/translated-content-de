---
title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut ist ein String, der den aktuellen Wert des in das Textfeld eingegebenen Texts enthält. Sie können diesen Wert mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Falls keine Validierungseinschränkungen für die Eingabe vorhanden sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert ein leerer String (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des list-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das sich im gleichen Dokument befindet. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte, die dem Nutzer für diese Eingabe vorgeschlagen werden. Alle Werte in der Liste, die mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kompatibel sind, werden in den Vorschlägen nicht berücksichtigt. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Die Nutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Nutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Nutzer geändert wird.

### `minlength`

Die minimale Stringlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Nutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Texts kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Nutzer geändert wird.

### `pattern`

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu Regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten und nicht als {{Glossary("ASCII", "ASCII")}} behandelt wird. Um den Text des Musters sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, was die Anforderungen sind, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Siehe [Ein Muster festlegen](#ein_muster_festlegen) für weitere Details und ein Beispiel.

### `placeholder`

Das `placeholder`-Attribut ist ein String, der dem Nutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp anzeigt, anstatt eine erklärende Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionalitätsalgorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungszeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [Zugänglichkeit von `<input>`](/de/docs/Web/HTML/Reference/Elements/input#accessibility) für weitere Informationen.

### `readonly`

Ein Boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code direkt durch Festlegen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) `value`-Eigenschaft geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinerlei Wirkung auf Eingaben mit dem zusätzlich angegebenen `readonly`-Attribut.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies möglicherweise nicht genau sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der verwendeten Schrift ({{cssxref("font")}}-Einstellungen).

Dies legt _keine_ Begrenzung fest, wie viele Zeichen der Nutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen gleichzeitig etwa sichtbar sein können. Um ein oberes Limit für die Eingabelänge festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut wird verwendet, um zu bestimmen, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann für jeden bearbeitbaren Inhalt verwendet werden, aber hier betrachten wir Details im Zusammenhang mit der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Rechtschreibprüfung für dieses Element deaktivieren.
- `true`
  - : Rechtschreibprüfung für dieses Element aktivieren.
- `""` (leerer String) oder kein Wert
  - : Dem Standardverhalten des Elements für die Rechtschreibprüfung folgen. Dies kann auf den `spellcheck`-Einstellungen eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktiviert haben, wenn es nicht das [readonly](#readonly)-Attribut gesetzt und nicht deaktiviert ist.

Der Wert, der durch Lesen von `spellcheck` zurückgegeben wird, spiegelt möglicherweise nicht den tatsächlichen Status der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die {{Glossary("user_agent", "Benutzeragenten")}}-Einstellungen die Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente vom Typ `text` erstellen einfache, einzeilige Eingabefelder. Sie sollten sie überall verwenden, wo der Nutzer einen einzeiligen Wert eingeben soll und es keinen spezifischeren Eingabetyp gibt, um diesen Wert zu erfassen (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), eine [URL](/de/docs/Web/HTML/Reference/Elements/input/url), eine [E-Mail](/de/docs/Web/HTML/Reference/Elements/input/email) oder einen [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) handelt, haben Sie bessere Optionen zur Verfügung).

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn das Formular übermittelt wird, wird das Datenname/Wert-Paar, das an den Server gesendet wird, `name=Chris` sein (falls "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut im {{HTMLElement("input")}}-Element einzufügen, andernfalls wird der Wert des Textfeldes nicht mit den übermittelten Daten eingeschlossen.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihrer Texteingabe bereitstellen, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Sehen Sie sich das folgende Beispiel an:

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

Sie können sehen, wie der Platzhalter unten gerendert wird:

{{EmbedLiveSample("Setting_placeholders", 600, 80)}}

Der Platzhalter wird üblicherweise in einer helleren Farbe als die Vordergrundfarbe des Elements gerendert und verschwindet automatisch, wenn der Nutzer beginnt, Text in das Feld einzugeben (oder wann immer das Feld programmgesteuert mit einem Wert gesetzt wird, indem sein `value`-Attribut gesetzt wird).

### Physische Größe des Eingabeelements

Die physische Größe des Eingabefeldes kann mit dem [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe gleichzeitig anzeigen kann. Dies betrifft die Breite des Elements und lässt Sie die Breite in Bezug auf Zeichen anstelle von Pixeln angeben. In diesem Beispiel ist die Eingabe beispielsweise 30 Zeichen breit:

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

`<input>`-Elemente vom Typ `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir weiter unten besprechen werden.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten im richtigen Format vorliegen. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die es ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte dies zu einer Katastrophe führen, wenn fehlerhaft formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Eine Notiz zum Styling

Es gibt nützliche Pseudoklassen zum Stylen von Formularelementen, um dem Nutzer zu helfen zu erkennen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir folgendes CSS, das ein Häkchen (Haken) neben Eingaben mit gültigen Werten und ein Kreuz (X) neben Eingaben mit ungültigen Werten setzen wird.

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

Die Technik erfordert auch, dass ein {{htmlelement("span")}}-Element nach dem Formularelement platziert wird, welches als Halter für die Icons dient. Dies war notwendig, weil einige Eingabetypen in einigen Browsern keine Icons anzeigen, die direkt neben ihnen platziert sind.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um das Eingeben eines Werts erforderlich zu machen, bevor das Formular abgeschickt werden kann:

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Fehlermeldung an.

### Eingabelänge

Sie können eine Mindestlänge (in Zeichen) für den eingegebenen Wert mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut festlegen; verwenden Sie ähnlicherweise [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Werts in Zeichen festzulegen.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die je nach Browser unterschiedlich ist). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie ein `minlength` festlegen, aber kein `required` angeben, wird die Eingabe als gültig betrachtet, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster festlegen

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, den der eingegebene Wert erfüllen muss, um als gültig zu gelten (siehe [Validierung gegen einen regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

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
  color: #999999;
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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Sie finden gute Beispiele für Texteingaben im Kontext in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Text enthält, der im
        Textfeld enthalten ist.
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
      <td>mit keinem <code>list</code> Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code> Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
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
