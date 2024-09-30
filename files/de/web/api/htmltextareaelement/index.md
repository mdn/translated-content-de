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

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/textarea#autocomplete)-Attribut des Elements darstellt.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Element/textarea#cols)-Attribut des Elements darstellt und die sichtbare Breite des Textbereichs angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Ein String, der den Standardwert der Steuerung darstellt und sich ähnlich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Ein String, der die Richtung des Elements darstellt.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Element/textarea#disabled)-Attribut des Elements darstellt und anzeigt, dass die Steuerung nicht für Interaktionen verfügbar ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Formularelement zurück. Ist dieses Element nicht in einem Formularelement enthalten, kann es das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im selben Dokument oder der Wert `null` sein.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der mit diesem Element verbundenen {{HTMLElement("label")}}-Elemente zurück.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/textarea#maxlength)-Attribut des Elements darstellt, welches die maximale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur bewertet, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/textarea#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen angibt, die der Benutzer eingeben muss. Diese Einschränkung wird nur bewertet, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/textarea#name)-Attribut des Elements darstellt und den Namen der Steuerung enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/textarea#placeholder)-Attribut des Elements darstellt und dem Benutzer einen Hinweis darauf gibt, was in die Steuerung eingegeben werden soll.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Element/textarea#readonly)-Attribut des Elements darstellt und anzeigt, dass der Benutzer den Wert der Steuerung nicht ändern kann.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Element/textarea#required)-Attribut des Elements darstellt und anzeigt, dass der Benutzer einen Wert angeben muss, bevor das Formular gesendet wird.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Element/textarea#rows)-Attribut des Elements darstellt und die Anzahl der sichtbaren Textzeilen für die Steuerung angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Ein String, der die Richtung angibt, in der die Auswahl vorgenommen wurde. Dies ist `forward`, wenn die Auswahl in der Richtung von Anfang bis Ende der aktuellen Sprache erfolgte, oder `backward` für die entgegengesetzte Richtung. Es kann auch `none` sein, wenn die Richtung unbekannt ist.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabescursor folgt. Wenn sie gesetzt wird, verhält sich die Steuerung so, als ob `setSelectionRange()` mit diesem Wert als zweites Argument und `selectionStart` als erstes Argument aufgerufen worden wäre.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabescursor folgt. Wenn sie gesetzt wird, verhält sich die Steuerung so, als ob `setSelectionRange()` mit diesem Wert als erstes Argument und `selectionEnd` als zweites Argument aufgerufen worden wäre.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Länge der Codepunkte des `value` der Steuerung zurück. Entspricht dem Lesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt den String `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für Einschränkungsvalidierung ist (`willValidate` ist `false`) oder ihre Einschränkungen erfüllt.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Gültigkeitszustand zurück, in dem sich dieses Element befindet.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Ein String, der den Rohwert enthält, der in der Steuerung enthalten ist.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für Einschränkungsvalidierung ist. `false`, wenn irgendwelche Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich wenn die `readOnly`- oder `disabled`-Eigenschaft `true` ist.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Ein String, der das [`wrap`](/de/docs/Web/HTML/Element/textarea#wrap)-Attribut des Elements darstellt und angibt, wie die Steuerung Text umbricht.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element ein Kandidat für Einschränkungsvalidierung ist und seine Einschränkungen nicht erfüllt. In diesem Fall wird auch ein abbrechbares `invalid`-Ereignis an der Steuerung ausgelöst. Es gibt `true` zurück, wenn die Steuerung kein Kandidat für Einschränkungsvalidierung ist oder wenn sie ihre Einschränkungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode meldet dem Benutzer die Probleme mit den Einschränkungen des Elements, falls vorhanden. Gibt es Probleme, wird ein abbrechbares `invalid`-Ereignis an der Steuerung ausgelöst und es wird `false` zurückgegeben; gibt es keine Probleme, wird `true` zurückgegeben.
- [`select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
  - : Wählt den Inhalt der Steuerung aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Ist diese Nachricht nicht der leere String, leidet das Element unter einem benutzerdefinierten Validitätsfehler und validiert nicht.
- [`setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
  - : Ersetzt einen Bereich von Text im Element durch neuen Text.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
  - : Wählt einen Bereich von Text im Element aus (fokussiert es jedoch nicht).

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abhören oder einen Ereignislistener an die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) Ereignis
  - : Wird ausgelöst, wenn etwas Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Ereignis {{experimental_inline}}
  - : Wird ausgelöst, wenn sich die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert hat.

## Beispiele

### Beispiel für automatisch wachsendes Textfeld

Ein Textfeld automatisch wachsen lassen, während getippt wird:

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

HTML-Tags in ein Textfeld einfügen.

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

CSS, um das interne `span` wie einen Link zu dekorieren:

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
