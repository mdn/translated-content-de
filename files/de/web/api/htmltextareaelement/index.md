---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`HTMLTextAreaElement`** Schnittstelle bietet spezielle Eigenschaften und Methoden zur Manipulation des Layouts und der Darstellung von {{HTMLElement("textarea")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des Elements darstellt.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des Elements darstellt und die sichtbare Breite des Textbereichs angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Ein String, der den Standardwert der Steuerung darstellt, der sich ähnlich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Ein String, der die Richtungsangabe des Elements darstellt.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Element/textarea#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht für Interaktionen verfügbar ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Formularelement zurück. Wenn dieses Element nicht in einem Formularelement enthalten ist, kann es das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im selben Dokument oder der Wert `null` sein.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der mit diesem Element verknüpften {{HTMLElement("label")}}-Elemente zurück.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/textarea#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen angibt, die der Benutzer eingeben muss. Diese Einschränkung wird nur geprüft, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/textarea#name)-Attribut des Elements darstellt, das den Namen der Steuerung enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/textarea#placeholder)-Attribut des Elements darstellt und einen Hinweis auf das enthält, was der Benutzer in die Steuerung eingeben soll.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert angeben muss, bevor das Formular abgesendet wird.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Element/textarea#rows)-Attribut des Elements darstellt und die Anzahl der sichtbaren Textzeilen für die Steuerung angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Dies ist `forward`, wenn die Auswahl in der Anfangs-bis-Ende-Richtung der aktuellen Region erfolgte, oder `backward` für die entgegengesetzte Richtung. Dies kann auch `none` sein, wenn die Richtung unbekannt ist.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Wenn sie gesetzt wird, verhält sich die Steuerung, als ob `setSelectionRange()` mit diesem Wert als zweitem Argument und `selectionStart` als erstem Argument aufgerufen wurde.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Wenn sie gesetzt wird, verhält sich die Steuerung, als ob `setSelectionRange()` mit diesem Wert als erstem Argument und `selectionEnd` als zweitem Argument aufgerufen wurde.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Codepunkte des `value` der Steuerung zurück. Entspricht dem Lesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt den String `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsüberprüfung ist (`willValidate` ist `false`) oder sie ihren Einschränkungen entspricht.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Gültigkeitsstatus zurück, in dem sich dieses Element befindet.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Ein String, der den Rohwert enthält, der in der Steuerung enthalten ist.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsüberprüfung ist. `false`, wenn Bedingungen es von der Einschränkungsüberprüfung ausschließen, einschließlich wenn seine `readOnly` oder `disabled` Eigenschaft `true` ist.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Ein String, der das [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)-Attribut des Elements darstellt und angibt, wie die Steuerung Text umbrecht.

## Instanz-Methoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element ein Kandidat für die Einschränkungsüberprüfung ist und es seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein abzubrechendes `invalid`-Ereignis an der Steuerung aus. Es gibt `true` zurück, wenn die Steuerung kein Kandidat für die Einschränkungsüberprüfung ist oder sie ihre Einschränkungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, löst es ein abzubrechendes `invalid`-Ereignis am Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt es `true` zurück.
- [`select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
  - : Wählt den Inhalt der Steuerung aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Fehlermeldung für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und validiert nicht.
- [`setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
  - : Ersetzt einen Textbereich im Element durch neuen Text.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
  - : Wählt einen Bereich von Text im Element aus (fokussiert aber nicht darauf).

## Ereignisse

_Erbt auch Ereignisse von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle:

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
    <legend>Your comments</legend>
    <p><textarea class="noscrollbars" onkeyup="autoGrow(this);"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel zum Einfügen von HTML-Tags

Fügen Sie einige HTML-Tags in ein Textfeld ein.

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
  const newURL = prompt("Enter the full URL for the link");
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

CSS, um den internen Span zu dekorieren, dass er sich wie ein Link verhält:

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
    <span class="intLink" id="format-strong"><strong>Bold</strong></span> |
    <span class="intLink" id="format-em"><em>Italic</em></span> |
    <span class="intLink" id="format-link">URL</span> |
    <span class="intLink" id="format-code">code</span> &nbsp;]
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

## Browser-Kompatibilität

{{Compat}}
