---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: bf3b0f3217d5d5a6957e9e17f863ece19d939d20
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`HTMLTextAreaElement`** stellt Eigenschaften und Methoden bereit, mit denen sich das Layout und die Darstellung von {{HTMLElement("textarea")}}-Elementen beeinflussen lassen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Eine Zeichenfolge, die das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete) des Elements repräsentiert.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das Attribut [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols) des Elements repräsentiert und die sichtbare Breite des Textbereichs angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Eine Zeichenfolge, die den Standardwert des Steuerelements repräsentiert und sich wie die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Eine Zeichenfolge, die die Schreibrichtung des Elements repräsentiert.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein boolescher Wert, der das Attribut [`disabled`](/de/docs/Web/HTML/Reference/Elements/textarea#disabled) des Elements repräsentiert und angibt, dass keine Interaktion mit dem Steuerelement möglich ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugehörige Formularelement zurück. Wenn sich dieses Element nicht innerhalb eines Formularelements befindet, kann die Referenz auf ein beliebiges {{HTMLElement("form")}}-Element im selben Dokument verweisen, dessen Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) dem Element zugeordnet ist, oder den Wert `null` haben.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die diesem Element zugeordnet sind.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/textarea#maxlength) des Elements repräsentiert und die maximale Anzahl von Zeichen angibt, die Benutzer eingeben können. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/textarea#minlength) des Elements repräsentiert und die minimale Anzahl von Zeichen angibt, die Benutzer eingeben können. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Eine Zeichenfolge, die das Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/textarea#name) des Elements repräsentiert und den Namen des Steuerelements enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Eine Zeichenfolge, die das Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/textarea#placeholder) des Elements repräsentiert und einen Hinweis dazu enthält, was Benutzer in das Steuerelement eingeben sollen.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein boolescher Wert, der das Attribut [`readonly`](/de/docs/Web/HTML/Reference/Elements/textarea#readonly) des Elements repräsentiert und angibt, dass Benutzer den Wert des Steuerelements nicht ändern können.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein boolescher Wert, der das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/textarea#required) des Elements repräsentiert und angibt, dass Benutzer vor dem Absenden des Formulars einen Wert angeben müssen.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das Attribut [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows) des Elements repräsentiert und die Anzahl der sichtbaren Textzeilen des Steuerelements angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Eine Zeichenfolge, die die Richtung angibt, in der die Auswahl vorgenommen wurde. Der Wert ist `forward`, wenn die Auswahl in der Richtung vom Anfang zum Ende gemäß der aktuellen Spracheinstellung vorgenommen wurde, oder `backward` für die entgegengesetzte Richtung. Ist die Richtung unbekannt, kann der Wert auch `none` sein.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes angibt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens unmittelbar nach dem Eingabecursor. Beim Setzen dieser Eigenschaft verhält sich das Steuerelement so, als wäre `setSelectionRange()` mit diesem Wert als zweitem Argument und `selectionStart` als erstem Argument aufgerufen worden.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes angibt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens unmittelbar nach dem Eingabecursor. Beim Setzen dieser Eigenschaft verhält sich das Steuerelement so, als wäre `setSelectionRange()` mit diesem Wert als erstem Argument und `selectionEnd` als zweitem Argument aufgerufen worden.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Länge des `value` des Steuerelements in Codepunkten zurück. Entspricht dem Auslesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolge `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Meldung zurück, die beschreibt, welche Validierungsbedingungen das Steuerelement gegebenenfalls nicht erfüllt. Die Meldung ist eine leere Zeichenfolge, wenn das Steuerelement nicht für die Validierung von Einschränkungen infrage kommt (`willValidate` ist `false`) oder wenn es alle Bedingungen erfüllt.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Validitätszustand des Elements zurück.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Eine Zeichenfolge, die den im Steuerelement enthaltenen Rohwert repräsentiert.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt an, ob das Element für die Validierung von Einschränkungen infrage kommt. Der Wert ist `false`, wenn eine Bedingung die Validierung ausschließt, etwa weil die Eigenschaft `readOnly` oder `disabled` den Wert `true` hat.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Eine Zeichenfolge, die das Attribut [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap) des Elements repräsentiert und angibt, wie Text im Steuerelement umgebrochen wird.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element für die Validierung von Einschränkungen infrage kommt, aber die Bedingungen nicht erfüllt. In diesem Fall löst die Methode außerdem ein abbrechbares `invalid`-Ereignis am Steuerelement aus. Sie gibt `true` zurück, wenn das Steuerelement nicht für die Validierung infrage kommt oder die Bedingungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode meldet Benutzern gegebenenfalls Probleme mit den Bedingungen für das Element. Bei Problemen löst sie ein abbrechbares `invalid`-Ereignis am Element aus und gibt `false` zurück. Andernfalls gibt sie `true` zurück.
- [`select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
  - : Wählt den Inhalt des Steuerelements aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Validierungsmeldung für das Element fest. Wenn diese Meldung keine leere Zeichenfolge ist, liegt für das Element ein benutzerdefinierter Validierungsfehler vor und es besteht die Validierung nicht.
- [`setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
  - : Ersetzt einen Textbereich im Element durch neuen Text.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
  - : Wählt einen Textbereich im Element aus, ohne das Element zu fokussieren.

## Ereignisse

_Erbt außerdem Ereignisse von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Ereignis-Listener zuweisen:

- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis
  - : Wird ausgelöst, wenn sich die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert hat.

## Beispiele

### Beispiel für ein automatisch mitwachsendes Textfeld

Lassen Sie ein Textfeld während der Eingabe automatisch mitwachsen:

#### JavaScript

```js
function autoGrow(field) {
  if (field.scrollHeight > field.clientHeight) {
    field.style.height = `${field.scrollHeight}px`;
  }
}

document.querySelector("textarea").addEventListener("keyup", (e) => {
  autoGrow(e.target);
});
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
<fieldset>
  <legend>Your comments</legend>
  <p><textarea class="no-scrollbars"></textarea></p>
</fieldset>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel für das Einfügen von HTML-Tags

Fügen Sie einige HTML-Tags in ein Textfeld ein:

```js live-sample___insert-html
const textArea = document.querySelector("#my-text-area");

function insert(startTag, endTag) {
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
    textArea.focus();
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

Gestalten Sie das span-Element so, dass es sich wie ein Link verhält:

```css live-sample___insert-html
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
```

```html live-sample___insert-html
<p>
  [
  <span class="intLink" id="format-strong"><strong>Bold</strong></span> |
  <span class="intLink" id="format-em"><em>Italic</em></span> |
  <span class="intLink" id="format-link">URL</span> |
  <span class="intLink" id="format-code">code</span> ]
</p>

<p>
  <textarea id="my-text-area" name="myTextArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. 
  </textarea>
</p>
```

{{EmbedLiveSample('insert-html', , '300', , , , , 'allow-modals')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
