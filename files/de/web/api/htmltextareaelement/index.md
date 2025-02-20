---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: b7310d059a28842d0a43ebabf814e8f2469c3419
---

{{APIRef("HTML DOM")}}

Das **`HTMLTextAreaElement`** Interface stellt Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HTMLElement("textarea")}}-Elementen zur Verfügung.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Ein Zeichenstring, der das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des Elements darstellt.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des Elements darstellt, welches die sichtbare Breite des Textfeldes angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Ein Zeichenstring, der den Standardwert des Steuerelements darstellt, der sich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Ein Zeichenstring, der die Richtung des Elements darstellt.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/textarea#disabled)-Attribut des Elements darstellt, welches anzeigt, dass das Steuerelement nicht zur Interaktion verfügbar ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Formular-Element zurück. Wenn dieses Element nicht in einem Formular-Element enthalten ist, kann es das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im selben Dokument oder der Wert `null` sein.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der mit diesem Element verbundenen {{HTMLElement("label")}}-Elemente zurück.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/textarea#maxlength)-Attribut des Elements darstellt, welches die maximale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur ausgewertet, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements darstellt, welches die minimale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur ausgewertet, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Ein Zeichenstring, der das [`name`](/de/docs/Web/HTML/Element/textarea#name)-Attribut des Elements darstellt, das den Namen des Steuerelements enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Ein Zeichenstring, der das [`placeholder`](/de/docs/Web/HTML/Element/textarea#placeholder)-Attribut des Elements darstellt, das einen Hinweis darauf gibt, was der Benutzer in das Steuerelement eingeben soll.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein boolescher Wert, der das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des Elements darstellt, welches angibt, dass der Benutzer den Wert des Steuerelements nicht ändern kann.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des Elements darstellt, welches angibt, dass der Benutzer einen Wert angeben muss, bevor das Formular gesendet wird.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Element/textarea#rows)-Attribut des Elements darstellt, welches die Anzahl der sichtbaren Textzeilen für das Steuerelement angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Ein Zeichenstring, der die Richtung angibt, in der die Auswahl erfolgt ist. Dies ist `forward`, wenn die Auswahl in der Start-zu-Ende-Richtung des aktuellen Gebietsschemas durchgeführt wurde, oder `backward` für die entgegengesetzte Richtung. Es kann auch `none` sein, wenn die Richtung unbekannt ist.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält er den Index des Zeichens, das auf den Eingabecursor folgt. Bei der Einstellung verhält sich das Steuerelement, als ob `setSelectionRange()` aufgerufen worden wäre mit diesem Wert als zweitem Argument und `selectionStart` als erstem Argument.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält er den Index des Zeichens, das auf den Eingabecursor folgt. Bei der Einstellung verhält sich das Steuerelement, als ob `setSelectionRange()` aufgerufen worden wäre mit diesem Wert als erstem Argument und `selectionEnd` als zweitem Argument.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Codepunktlänge des `value`-Wertes des Steuerelements zurück. Dasselbe wie das Lesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt den Zeichenstring `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere Zeichenstring, wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`), oder es seine Beschränkungen erfüllt.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Validitätszustand zurück, in dem sich dieses Element befindet.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Ein Zeichenstring, der den rohen Wert enthält, der im Steuerelement enthalten ist.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Constraint-Validierung ist. `false`, wenn irgendwelche Bedingungen es von der Constraint-Validierung ausschließen, einschließlich, wenn seine `readOnly` oder `disabled` Eigenschaft `true` ist.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Ein Zeichenstring, der das [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)-Attribut des Elements darstellt, welches angibt, wie das Steuerelement Text umbricht.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element ein Kandidat für die Constraint-Validierung ist und es seine Beschränkungen nicht erfüllt. In diesem Fall wird auch ein stornierbares `invalid`-Ereignis auf dem Steuerelement ausgelöst. Es gibt `true` zurück, wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist oder es seine Beschränkungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode berichtet dem Benutzer über die Probleme mit den Beschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, wird ein stornierbares `invalid`-Ereignis beim Element ausgelöst und es wird `false` zurückgegeben; wenn es keine Probleme gibt, wird `true` zurückgegeben.
- [`select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
  - : Wählt den Inhalt des Steuerelements aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Gültigkeitsnachricht für das Element fest. Wenn diese Nachricht nicht der leere Zeichenstring ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und validiert nicht.
- [`setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
  - : Ersetzt einen Textbereich im Element durch neuen Text.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
  - : Wählt einen Textbereich im Element aus (fokussiert es jedoch nicht).

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces gehört werden:

- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis {{experimental_inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert wurde.

## Beispiele

### Beispiel für ein automatisch wachsendes Textfeld

Lassen Sie ein Textfeld während der Eingabe automatisch wachsen:

#### JavaScript

```js
function autoGrow(field) {
  if (field.scrollHeight > field.clientHeight) {
    field.style.height = `${field.scrollHeight}px`;
  }
}
```

#### CSS

```css
textarea.no-scrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>Your comments</legend>
    <p><textarea class="no-scrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel für das Einfügen von HTML-Tags

Einige HTML-Tags in ein Textfeld einfügen:

```js live-sample___insert-html
function insert(startTag, endTag) {
  const textArea = document.myForm.myTextArea;
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  const oldText = textArea.value;

  const prefix = oldText.substring(0, start);
  const inserted = startTag + oldText.substring(start, end) + endTag;
  const suffix = oldText.substring(end);

  textArea.value = `${prefix}${inserted}${suffix}`;

  const newStart = start + startTag.length;
  const newEnd = end + startTag.length;

  textArea.setSelectionRange(newStart, newEnd);
  textArea.focus();
}

function insertURL() {
  const newURL = prompt("Enter the full URL for the link");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTextArea.focus();
  }
}

const strong = document.querySelector("#format-strong");
const em = document.querySelector("#format-em");
const link = document.querySelector("#format-link");
const code = document.querySelector("#format-code");

strong.addEventListener("click", (e) => insert("<strong>", "</strong>"));
em.addEventListener("click", (e) => insert("<em>", "</em>"));
link.addEventListener("click", (e) => insertURL());
code.addEventListener("click", (e) => insert("<code>", "</code>"));
```

Dekorieren Sie das `span` so, dass es sich wie ein Link verhält:

```css live-sample___insert-html
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: #0000ff;
}
```

```html live-sample___insert-html
<form name="myForm">
  <p>
    [
    <span class="intLink" id="format-strong"><strong>Bold</strong></span> |
    <span class="intLink" id="format-em"><em>Italic</em></span> |
    <span class="intLink" id="format-link">URL</span> |
    <span class="intLink" id="format-code">code</span> ]
  </p>

  <p>
    <textarea name="myTextArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. 
    </textarea>
  </p>
</form>
```

{{EmbedLiveSample('insert-html', , '300', , , , , 'allow-modals')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
