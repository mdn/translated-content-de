---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("HTML DOM")}}

Die **`HTMLTextAreaElement`**-Schnittstelle stellt Eigenschaften und Methoden bereit, um das Layout und die Darstellung von {{HTMLElement("textarea")}}-Elementen zu bearbeiten.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Eine Zeichenfolge, die das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete)-Attribut des Elements darstellt.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribut des Elements darstellt und die sichtbare Breite des Textbereichs angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Eine Zeichenfolge, die den Standardwert des Steuerelements darstellt und sich wie die Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Eine Zeichenfolge, die die Schreibrichtung des Elements darstellt.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/textarea#disabled)-Attribut des Elements darstellt und angibt, dass keine Interaktion mit dem Steuerelement möglich ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugehörige Formularelement zurück. Wenn dieses Element nicht in einem Formularelement enthalten ist, kann dies das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im selben Dokument oder der Wert `null` sein.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die diesem Element zugeordnet sind.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/textarea#maxlength)-Attribut des Elements darstellt und die maximale Anzahl an Zeichen angibt, die Benutzer eingeben können. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/textarea#minlength)-Attribut des Elements darstellt und die Mindestanzahl an Zeichen angibt, die Benutzer eingeben können. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Eine Zeichenfolge, die das [`name`](/de/docs/Web/HTML/Reference/Elements/textarea#name)-Attribut des Elements darstellt und den Namen des Steuerelements enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Eine Zeichenfolge, die das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/textarea#placeholder)-Attribut des Elements darstellt und einen Hinweis darauf enthält, was Benutzer in das Steuerelement eingeben sollen.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein boolescher Wert, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/textarea#readonly)-Attribut des Elements darstellt und angibt, dass Benutzer den Wert des Steuerelements nicht ändern können.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Reference/Elements/textarea#required)-Attribut des Elements darstellt und angibt, dass Benutzer vor dem Absenden des Formulars einen Wert angeben müssen.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)-Attribut des Elements darstellt und die Anzahl der sichtbaren Textzeilen des Steuerelements angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Eine Zeichenfolge, die die Richtung angibt, in der die Auswahl erfolgte. Sie hat den Wert `forward`, wenn die Auswahl in der Richtung vom Anfang zum Ende der aktuellen Spracheinstellung vorgenommen wurde, und `backward` für die entgegengesetzte Richtung. Ist die Richtung unbekannt, kann sie auch `none` sein.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens nach dem Eingabecursor. Beim Festlegen dieses Werts verhält sich das Steuerelement so, als wäre `setSelectionRange()` mit diesem Wert als zweitem Argument und `selectionStart` als erstem Argument aufgerufen worden.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens nach dem Eingabecursor. Beim Festlegen dieses Werts verhält sich das Steuerelement so, als wäre `setSelectionRange()` mit diesem Wert als erstem Argument und `selectionEnd` als zweitem Argument aufgerufen worden.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Länge des `value` des Steuerelements in Codepunkten zurück. Entspricht dem Auslesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt die Zeichenfolge `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Meldung zurück, die beschreibt, welche Validierungseinschränkungen das Steuerelement gegebenenfalls nicht erfüllt. Wenn das Steuerelement nicht für die Validierung anhand von Einschränkungen infrage kommt (`willValidate` ist `false`) oder alle Einschränkungen erfüllt, ist dies eine leere Zeichenfolge.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Validitätszustand des Elements zurück.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Eine Zeichenfolge, die den unverarbeiteten Wert des Steuerelements darstellt.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt an, ob das Element für die Validierung anhand von Einschränkungen infrage kommt. Der Wert ist `false`, wenn eine Bedingung die Validierung ausschließt, etwa wenn die Eigenschaft `readOnly` oder `disabled` den Wert `true` hat.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Eine Zeichenfolge, die das [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)-Attribut des Elements darstellt und angibt, wie der Text im Steuerelement umgebrochen wird.

## Instanzmethoden

_Erbt außerdem Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element für die Validierung anhand von Einschränkungen infrage kommt und diese nicht erfüllt. In diesem Fall löst die Methode außerdem ein abbrechbares `invalid`-Ereignis am Steuerelement aus. Sie gibt `true` zurück, wenn das Steuerelement nicht für die Validierung infrage kommt oder seine Einschränkungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode meldet Benutzern gegebenenfalls Probleme mit den Einschränkungen des Elements. Wenn Probleme vorliegen, löst sie ein abbrechbares `invalid`-Ereignis am Element aus und gibt `false` zurück. Andernfalls gibt sie `true` zurück.
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

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen:

- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis
  - : Wird ausgelöst, wenn sich die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert hat.

## Beispiele

### Beispiel für ein automatisch wachsendes Textfeld

Lassen Sie ein Textfeld beim Tippen automatisch wachsen:

#### HTML

```html
<fieldset>
  <legend>Your comments</legend>
  <p><textarea class="no-scrollbars"></textarea></p>
</fieldset>
```

#### CSS

```css
textarea.no-scrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

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

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel zum Einfügen von HTML-Tags

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
