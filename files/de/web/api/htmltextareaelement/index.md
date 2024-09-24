---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`HTMLTextAreaElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HTMLElement("textarea")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer Elternschnittstelle, {{DOMxRef("HTMLElement")}}._

- {{domxref("HTMLTextAreaElement.autocomplete", "autocomplete")}}
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des Elements darstellt.
- {{domxref("HTMLTextAreaElement.cols", "cols")}}
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des Elements darstellt und die sichtbare Breite des Textbereichs angibt.
- {{domxref("HTMLTextAreaElement.defaultValue", "defaultValue")}}
  - : Ein String, der den Standardwert der Steuerung darstellt, der sich wie die {{domxref("Node.textContent")}}-Eigenschaft verhält.
- {{domxref("HTMLTextAreaElement.dirName", "dirName")}}
  - : Ein String, der die Richtungsangabe des Elements darstellt.
- {{domxref("HTMLTextAreaElement.disabled", "disabled")}}
  - : Ein boolean, der das [`disabled`](/de/docs/Web/HTML/Element/textarea#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht für Interaktionen verfügbar ist.
- {{domxref("HTMLTextAreaElement.form", "form")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Formularelement zurück. Wenn dieses Element nicht in einem Formularelement enthalten ist, kann es sich um das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im gleichen Dokument oder den Wert `null` handeln.
- {{domxref("HTMLTextAreaElement.labels", "labels")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("NodeList")}} der {{HTMLElement("label")}}-Elemente zurück, die mit diesem Element verknüpft sind.
- {{domxref("HTMLTextAreaElement.maxLength", "maxLength")}}
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/textarea#maxlength)-Attribut des Elements darstellt und die maximale Anzahl an Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur beim Ändern des Wertes ausgewertet.
- {{domxref("HTMLTextAreaElement.minLength", "minLength")}}
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements darstellt und die minimale Anzahl an Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur beim Ändern des Wertes ausgewertet.
- {{domxref("HTMLTextAreaElement.name", "name")}}
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/textarea#name)-Attribut des Elements darstellt und den Namen der Steuerung enthält.
- {{domxref("HTMLTextAreaElement.placeholder", "placeholder")}}
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/textarea#placeholder)-Attribut des Elements darstellt und dem Benutzer einen Hinweis darauf gibt, was in die Steuerung einzugeben ist.
- {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}}
  - : Ein boolean, der das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann.
- {{domxref("HTMLTextAreaElement.required", "required")}}
  - : Ein boolean, der das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des Elements darstellt und angibt, dass der Benutzer vor dem Absenden des Formulars einen Wert angeben muss.
- {{domxref("HTMLTextAreaElement.rows", "rows")}}
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Element/textarea#rows)-Attribut des Elements darstellt und die Anzahl der sichtbaren Textzeilen für die Steuerung angibt.
- {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}}
  - : Ein String, der die Richtung, in der die Auswahl erfolgte, darstellt. Dies ist `forward`, wenn die Auswahl in der von Anfang bis Ende gerichteten Richtung der aktuellen Sprache erfolgte, oder `backward` für die entgegengesetzte Richtung. Dies kann auch `none` sein, wenn die Richtung unbekannt ist.
- {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Beim Setzen verhält sich die Steuerung, als ob `setSelectionRange()` mit diesem Wert als zweites Argument und `selectionStart` als erstes Argument aufgerufen worden wäre.
- {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}}
  - : Eine Zahl, die den Index des Beginns des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Beim Setzen verhält sich die Steuerung, als ob `setSelectionRange()` mit diesem Wert als erstes Argument und `selectionEnd` als zweites Argument aufgerufen worden wäre.
- {{domxref("HTMLTextAreaElement.textLength", "textLength")}} {{ReadOnlyInline}}
  - : Gibt die Codepunktlänge des `value` der Steuerung zurück. Entspricht dem Lesen von `value.length`.
- {{domxref("HTMLTextAreaElement.type", "type")}} {{ReadOnlyInline}}
  - : Gibt den String `textarea` zurück.
- {{domxref("HTMLTextAreaElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Validierung von Einschränkungen ist (`willValidate` ist `false`) oder ihre Einschränkungen erfüllt.
- {{domxref("HTMLTextAreaElement.validity", "validity")}} {{ReadOnlyInline}}
  - : Gibt den Gültigkeitszustand zurück, in dem sich dieses Element befindet.
- {{domxref("HTMLTextAreaElement.value", "value")}}
  - : Ein String, der den Rohwert enthält, der in der Steuerung enthalten ist.
- {{domxref("HTMLTextAreaElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Validierung von Einschränkungen ist. `false` wenn irgendwelche Bedingungen es von der Validierung von Einschränkungen ausschließen, z. B. wenn die Eigenschaft `readOnly` oder `disabled` wahr ist.
- {{domxref("HTMLTextAreaElement.wrap", "wrap")}}
  - : Ein String, der das [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)-Attribut des Elements darstellt und angibt, wie die Steuerung den Text umbricht.

## Instanz-Methoden

_Erbt auch Methoden von ihrer Elternschnittstelle, {{DOMxRef("HTMLElement")}}._

- {{domxref("HTMLTextAreaElement.checkValidity", "checkValidity()")}}
  - : Gibt `false` zurück, wenn das Element ein Kandidat für die Validierung von Einschränkungen ist und sie nicht erfüllt. In diesem Fall löst es auch ein abbrechbares `invalid`-Ereignis an der Steuerung aus. Gibt `true` zurück, wenn die Steuerung kein Kandidat für die Validierung von Einschränkungen ist oder ihre Einschränkungen erfüllt.
- {{domxref("HTMLTextAreaElement.reportValidity", "reportValidity()")}}
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, löst sie ein abbrechbares `invalid`-Ereignis am Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt sie `true` zurück.
- {{domxref("HTMLTextAreaElement.select", "select()")}}
  - : Wählt den Inhalt der Steuerung aus.
- {{domxref("HTMLTextAreaElement.setCustomValidity", "setCustomValidity()")}}
  - : Setzt eine benutzerdefinierte Gültigkeitsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.
- {{domxref("HTMLTextAreaElement.setRangeText", "setRangeText()")}}
  - : Ersetzt einen Textbereich im Element durch neuen Text.
- {{domxref("HTMLTextAreaElement.setSelectionRange", "setSelectionRange()")}}
  - : Wählt einen Textbereich im Element aus (ohne es zu fokussieren).

## Ereignisse

_Erbt auch Ereignisse von ihrer Elternschnittstelle, {{DOMxRef("HTMLElement")}}._

Hören Sie auf diese Ereignisse, indem Sie {{domxref("EventTarget/addEventListener", "addEventListener()")}} verwenden oder einen Ereignishörer der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- {{domxref("HTMLTextAreaElement/select_event", "select")}} Ereignis
  - : Wird ausgelöst, wenn ein Text ausgewählt wurde.
- {{domxref("HTMLTextAreaElement/selectionchange_event", "selectionchange")}} Ereignis {{experimental_inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert wurde.

## Beispiele

### Beispiel für ein automatisch wachsendes Textfeld

Ein Textfeld automatisch während der Eingabe wachsen lassen:

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
textarea.noscrollbars {
  overflow: hidden;
  width: 300px;
  height: 100px;
}
```

#### HTML

```html
<form>
  <fieldset>
    <legend>Ihre Kommentare</legend>
    <p><textarea class="noscrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Senden" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel zur Einfügung von HTML-Tags

Einige HTML-Tags in einem Textfeld einfügen.

#### JavaScript

```js
function insert(startTag, endTag) {
  const textArea = document.myForm.myTxtArea;
  const selectionStart = textArea.selectionStart;
  const selectionEnd = textArea.selectionEnd;
  const oldText = textArea.value;

  const prefix = oldText.substring(0, selectionStart);
  const inserted =
    startTag + oldText.substring(selectionStart, selectionEnd) + endTag;
  const suffix = oldText.substring(selectionEnd);
  textArea.value = `${prefix}${inserted}${suffix}`;

  const newSelectionStart = selectionStart + startTag.length;
  const newSelectionEnd = selectionEnd + startTag.length;
  textArea.setSelectionRange(newSelectionStart, newSelectionEnd);

  textArea.focus();
}

function insertURL() {
  const newURL = prompt("Geben Sie die vollständige URL für den Link ein");
  if (newURL) {
    insert(`<a href="${newURL}">`, "</a>");
  } else {
    document.myForm.myTxtArea.focus();
  }
}

const strong = document.querySelector("#format-strong");
const em = document.querySelector("#format-em");
const link = document.querySelector("#format-link");
const code = document.querySelector("#format-code");

strong.addEventListener("click", (e) => insert("<strong>", "</strong>"));
em.addEventListener("click", (e) => insert("<em>", "</em>"));
link.addEventListener("click", (e) => insertURL());
code.addEventListener("click", (e) => insert("\n<code>\n", "\n</code>\n"));
```

#### CSS

CSS, um den inneren Span so zu dekorieren, dass er wie ein Link wirkt:

```css
.intLink {
  cursor: pointer;
  text-decoration: underline;
  color: #0000ff;
}
```

HTML:

```html
<form name="myForm">
  <p>
    [&nbsp;
    <span class="intLink" id="format-strong"><strong>Fett</strong></span> |
    <span class="intLink" id="format-em"><em>Kursiv</em></span> |
    <span class="intLink" id="format-link">URL</span> |
    <span class="intLink" id="format-code">Code</span> &nbsp;]
  </p>

  <p>
    <textarea name="myTxtArea" rows="10" cols="50">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis, arcu vitae adipiscing placerat, nisl lectus accumsan nisi, vitae iaculis sem neque vel lectus. Praesent tristique commodo lorem quis fringilla. Sed ac tellus eros. Sed consectetur eleifend felis vitae luctus. Praesent sagittis, est eget bibendum tincidunt, ligula diam tincidunt augue, a fermentum odio velit eget mi. Phasellus mattis, elit id fringilla semper, orci magna cursus ligula, non venenatis lacus augue sit amet dui. Pellentesque lacinia odio id nisi pulvinar commodo tempus at odio. Ut consectetur eros porttitor nunc mollis ultrices. Aenean porttitor, purus sollicitudin viverra auctor, neque erat blandit sapien, sit amet tincidunt massa mi ac nibh. Proin nibh sem, bibendum ut placerat nec, cursus et lacus. Phasellus vel augue turpis. Nunc eu mauris eu leo blandit mollis interdum eget lorem.
    </textarea>
  </p>
</form>
```

{{EmbedLiveSample('Insert_HTML_tags_example', 600, 300)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
