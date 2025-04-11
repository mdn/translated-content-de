---
title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`text`** erstellen einfache einzeilige Textfelder.

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

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut ist eine Zeichenkette, die den aktuellen Wert des in das Textfeld eingegebenen Textes enthält. Sie können diesen mit der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft in JavaScript abrufen.

```js
let theText = myTextInput.value;
```

Wenn für die Eingabe keine Validierungseinschränkungen festgelegt sind (siehe [Validierung](#validierung) für weitere Details), kann der Wert eine leere Zeichenkette (`""`) sein.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Texteingaben die folgenden Attribute.

### `list`

Der Wert des `list`-Attributs ist die [`id`](/de/docs/Web/API/Element/id) eines {{HTMLElement("datalist")}}-Elements, das im gleichen Dokument enthalten ist. Das {{HTMLElement("datalist")}} bietet eine Liste vordefinierter Werte an, die dem Benutzer für diese Eingabe vorgeschlagen wird. Alle Werte in der Liste, die nicht mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) kompatibel sind, werden nicht in den vorgeschlagenen Optionen aufgenommen. Die bereitgestellten Werte sind Vorschläge, keine Anforderungen: Benutzer können aus dieser vordefinierten Liste auswählen oder einen anderen Wert eingeben.

### `maxlength`

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert festgelegt wurde, hat die `text`-Eingabe keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des Textwerts des Feldes größer ist als `maxlength` UTF-16-Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `minlength`

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in die `text`-Eingabe eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem vom `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert festgelegt wurde, hat die `text`-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16-Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### `pattern`

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-regulärer Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird bei der Kompilierung des regulären Ausdrucks angegeben, so dass das Muster als Sequenz von Unicode-Code-Punkten behandelt wird, statt als {{Glossary("ASCII", "ASCII")}}. Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt sein müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Weitere Einzelheiten und ein Beispiel finden Sie unter [Angabe eines Musters](#ein_muster_angeben).

### `placeholder`

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn die Kontrolle über eine bestimmte Ausrichtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) verfügt, der Platzhalter jedoch in der entgegengesetzten Ausrichtung dargestellt werden muss, können Sie formatierende Zeichen des Unicode-Bidirektionalitätsalgorithmus verwenden, um die Ausrichtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Barrierefreiheitsbedenken](/de/docs/Web/HTML/Reference/Elements/input#accessibility).

### `readonly`

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch direktem Setzen der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-`value`-Eigenschaft über JavaScript-Code geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### `size`

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau sein oder auch nicht, und sollte nicht darauf verlassen werden. Das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden).

Dies legt _keine_ Begrenzung für die Anzahl der Zeichen fest, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

### `spellcheck`

Das globale Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) wird verwendet, um anzugeben, ob die Rechtschreibprüfung für ein Element aktiviert werden soll. Es kann auf jedem bearbeitbaren Inhalt verwendet werden, hier betrachten wir jedoch die Besonderheiten der Verwendung von `spellcheck` auf {{HTMLElement("input")}}-Elementen. Die erlaubten Werte für `spellcheck` sind:

- `false`
  - : Deaktivieren Sie die Rechtschreibprüfung für dieses Element.
- `true`
  - : Aktivieren Sie die Rechtschreibprüfung für dieses Element.
- `""` (leere Zeichenkette) oder kein Wert
  - : Folgen Sie dem Standardverhalten des Elements für die Rechtschreibprüfung. Dies kann auf der `spellcheck`-Einstellung eines Elternteils oder anderen Faktoren basieren.

Ein Eingabefeld kann die Rechtschreibprüfung aktivieren, wenn es nicht das [readonly](#readonly)-Attribut gesetzt hat und nicht deaktiviert ist.

Der durch das Lesen von `spellcheck` zurückgegebene Wert spiegelt möglicherweise nicht den tatsächlichen Zustand der Rechtschreibprüfung innerhalb einer Steuerung wider, wenn die Präferenzen des {{Glossary("user_agent", "User-Agents")}} die Einstellung überschreiben.

## Verwendung von Texteingaben

`<input>`-Elemente des Typs `text` erstellen grundlegende, einzeilige Eingaben. Sie sollten sie überall dort verwenden, wo Sie möchten, dass der Benutzer einen einzeiligen Wert eingibt und kein spezifischerer Eingabetyp zum Sammeln dieses Wertes verfügbar ist (zum Beispiel, wenn es sich um ein [Datum](/de/docs/Web/HTML/Reference/Elements/input/datetime-local), [URL](/de/docs/Web/HTML/Reference/Elements/input/url), [E-Mail](/de/docs/Web/HTML/Reference/Elements/input/email) oder [Suchbegriff](/de/docs/Web/HTML/Reference/Elements/input/search) handelt, stehen Ihnen bessere Optionen zur Verfügung).

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("Basic_example", 600, 80)}}

Wenn gesendet, wird das Daten-Name/Wert-Paar an den Server als `name=Chris` übertragen (wenn "Chris" als Eingabewert vor der Übermittlung eingegeben wurde). Sie müssen daran denken, das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut auf dem {{HTMLElement("input")}}-Element einzuschließen, andernfalls wird der Wert des Textfeldes nicht bei den gesendeten Daten eingeschlossen.

### Platzhalter festlegen

Sie können einen nützlichen Platzhalter in Ihre Texteingabe einfügen, der einen Hinweis darauf geben kann, was eingegeben werden soll, indem Sie das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut verwenden. Betrachten Sie das folgende Beispiel:

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

Der Platzhalter wird normalerweise in einer helleren Farbe als die Vordergrundfarbe des Elements gerendert und verschwindet automatisch, wenn der Benutzer beginnt, Text in das Feld einzugeben (oder wenn das Feld programmgesteuert durch Festlegen des `value`-Attributs einen Wert erhält).

### Physische Größe des Eingabeelements

Die physische Größe der Eingabebox kann über das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut gesteuert werden. Damit können Sie die Anzahl der Zeichen angeben, die die Texteingabe gleichzeitig anzeigen kann. Dies hat Auswirkungen auf die Breite des Elements und ermöglicht es Ihnen, die Breite in Zeichen anstatt in Pixeln anzugeben. In diesem Beispiel ist die Eingabe zum Beispiel 30 Zeichen breit:

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

`<input>`-Elemente des Typs `text` haben keine automatische Validierung, da eine grundlegende Texteingabe in der Lage sein muss, beliebige Zeichenfolgen zu akzeptieren. Es gibt jedoch einige clientseitige Validierungsoptionen, die wir im Folgenden diskutieren werden.

> [!NOTE]
> HTML-Formularvalidierung ist _kein_ Ersatz für Serverskripte, die sicherstellen, dass die eingegebenen Daten das richtige Format haben. Es ist viel zu einfach für jemanden, Anpassungen am HTML vorzunehmen, die ihm ermöglichen, die Validierung zu umgehen oder sie vollständig zu entfernen. Es ist auch möglich, dass jemand Ihr HTML vollständig umgeht und die Daten direkt an Ihren Server übermittelt. Wenn Ihr serverseitiger Code die empfangenen Daten nicht validiert, könnte es zu einem Desaster kommen, wenn falsch formatierte Daten (oder Daten, die zu groß sind, den falschen Typ haben usw.) in Ihre Datenbank eingegeben werden.

### Ein Hinweis zum Styling

Es gibt nützliche Pseudo-Klassen zum Stylen von Formularelementen, um dem Benutzer zu helfen zu sehen, wann ihre Werte gültig oder ungültig sind. Diese sind {{cssxref(":valid")}} und {{cssxref(":invalid")}}. In diesem Abschnitt verwenden wir das folgende CSS, das ein Häkchen (tick) neben Eingaben enthält, die gültige Werte haben, und ein Kreuz (X) neben Eingaben, die ungültige Werte haben.

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

Die Technik erfordert auch ein {{htmlelement("span")}}-Element, das nach dem Formularelement platziert wird und als Halter für die Symbole dient. Dies war notwendig, weil einige Eingabetypen in einigen Browsern Symbole, die direkt danach platziert werden, nicht gut anzeigen.

### Eingabe erforderlich machen

Sie können das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut verwenden, um die Eingabe eines Wertes vor der Formularübermittlung verpflichtend zu machen:

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Making_input_required', 600, 100)}}

Wenn Sie versuchen, das Formular ohne eingegebenen Suchbegriff abzusenden, zeigt der Browser eine Fehlermeldung an.

### Eingabewertlänge

Sie können mit dem [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut eine Mindestlänge (in Zeichen) für den eingegebenen Wert festlegen; ähnlich verwenden Sie [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength), um die maximale Länge des eingegebenen Wertes in Zeichen festzulegen.

Das folgende Beispiel erfordert, dass der eingegebene Wert 4-8 Zeichen lang ist.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Input_value_length', 600, 100)}}

Wenn Sie versuchen, das Formular mit weniger als 4 Zeichen abzusenden, erhalten Sie eine entsprechende Fehlermeldung (die sich zwischen den Browsern unterscheidet). Wenn Sie versuchen, mehr als 8 Zeichen einzugeben, lässt der Browser dies nicht zu.

> [!NOTE]
> Wenn Sie eine `minlength` angeben, aber keine `required`, gilt die Eingabe als gültig, da der Benutzer nicht verpflichtet ist, einen Wert anzugeben.

### Ein Muster angeben

Sie können das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck anzugeben, den der eingegebene Wert erfüllen muss, um als gültig angesehen zu werden (siehe [Validierung mit einem regulären Ausdruck](/de/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_against_a_regular_expression) für einen Crashkurs zur Verwendung regulärer Ausdrücke zur Validierung von Eingaben).

Das folgende Beispiel schränkt den Wert auf 4-8 Zeichen ein und erfordert, dass er nur Kleinbuchstaben enthält.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Specifying_a_pattern', 600, 130)}}

## Beispiele

Gute Beispiele für die Verwendung von Texteingaben im Kontext finden Sie in unseren Artikeln [Ihr erstes HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form) und [Wie man ein HTML-Formular strukturiert](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die den Text enthält, der im
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
      <td>ohne <code>list</code>-Attribut:
                <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code></td>
      <td>mit <code>list</code>-Attribut: <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code></td>
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
