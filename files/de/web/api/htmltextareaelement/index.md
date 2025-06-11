---
title: HTMLTextAreaElement
slug: Web/API/HTMLTextAreaElement
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

Das **`HTMLTextAreaElement`**-Interface bietet Eigenschaften und Methoden zum Manipulieren des Layouts und der Präsentation von {{HTMLElement("textarea")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autocomplete`](/de/docs/Web/API/HTMLTextAreaElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/textarea#autocomplete)-Attribut des Elements darstellt.
- [`cols`](/de/docs/Web/API/HTMLTextAreaElement/cols)
  - : Eine Zahl, die das [`cols`](/de/docs/Web/HTML/Reference/Elements/textarea#cols)-Attribut des Elements darstellt und die sichtbare Breite des Textbereichs angibt.
- [`defaultValue`](/de/docs/Web/API/HTMLTextAreaElement/defaultValue)
  - : Ein String, der den Standardwert des Steuerelements darstellt und sich wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft verhält.
- [`dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
  - : Ein String, der die Richtung des Elements darstellt.
- [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/textarea#disabled)-Attribut des Elements darstellt und angibt, dass das Steuerelement nicht zur Interaktion verfügbar ist.
- [`form`](/de/docs/Web/API/HTMLTextAreaElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete Formularelement zurück. Wenn dieses Element nicht in einem Formularelement enthalten ist, kann es das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines beliebigen {{HTMLElement("form")}}-Elements im selben Dokument sein oder den Wert `null` haben.
- [`labels`](/de/docs/Web/API/HTMLTextAreaElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der mit diesem Element verbundenen {{HTMLElement("label")}}-Elemente zurück.
- [`maxLength`](/de/docs/Web/API/HTMLTextAreaElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/textarea#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur bewertet, wenn sich der Wert ändert.
- [`minLength`](/de/docs/Web/API/HTMLTextAreaElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/textarea#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen angibt, die der Benutzer eingeben kann. Diese Einschränkung wird nur bewertet, wenn sich der Wert ändert.
- [`name`](/de/docs/Web/API/HTMLTextAreaElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/textarea#name)-Attribut des Elements darstellt und den Namen des Steuerelements enthält.
- [`placeholder`](/de/docs/Web/API/HTMLTextAreaElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/textarea#placeholder)-Attribut des Elements darstellt und einen Hinweis an den Benutzer enthält, was im Steuerelement eingegeben werden soll.
- [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/textarea#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert des Steuerelements nicht ändern kann.
- [`required`](/de/docs/Web/API/HTMLTextAreaElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/textarea#required)-Attribut des Elements darstellt und angibt, dass der Benutzer vor dem Absenden des Formulars einen Wert angeben muss.
- [`rows`](/de/docs/Web/API/HTMLTextAreaElement/rows)
  - : Eine Zahl, die das [`rows`](/de/docs/Web/HTML/Reference/Elements/textarea#rows)-Attribut des Elements darstellt und die Anzahl sichtbarer Textzeilen für das Steuerelement angibt.
- [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
  - : Ein String, der die Richtung angibt, in der die Auswahl erfolgte. Dies ist `forward`, wenn die Auswahl in der Start-zu-Ende-Richtung der aktuellen Sprache erfolgte, oder `backward` für die entgegengesetzte Richtung. Dies kann auch `none` sein, wenn die Richtung unbekannt ist.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
  - : Eine Zahl, die den Index des Endes des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Beim Setzen verhält sich das Steuerelement so, als ob `setSelectionRange()` mit diesem als zweitem Argument und `selectionStart` als erstem Argument aufgerufen worden wäre.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
  - : Eine Zahl, die den Index des Anfangs des ausgewählten Textes darstellt. Wenn kein Text ausgewählt ist, enthält sie den Index des Zeichens, das dem Eingabecursor folgt. Beim Setzen verhält sich das Steuerelement so, als ob `setSelectionRange()` mit diesem als erstem Argument und `selectionEnd` als zweitem Argument aufgerufen worden wäre.
- [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) {{ReadOnlyInline}}
  - : Gibt die Länge des Steuerwerts in Codepunkten zurück. Dasselbe wie das Lesen von `value.length`.
- [`type`](/de/docs/Web/API/HTMLTextAreaElement/type) {{ReadOnlyInline}}
  - : Gibt den String `textarea` zurück.
- [`validationMessage`](/de/docs/Web/API/HTMLTextAreaElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`) oder es seine Beschränkungen erfüllt.
- [`validity`](/de/docs/Web/API/HTMLTextAreaElement/validity) {{ReadOnlyInline}}
  - : Gibt den Gültigkeitsstatus zurück, in dem sich dieses Element befindet.
- [`value`](/de/docs/Web/API/HTMLTextAreaElement/value)
  - : Ein String, der den unverarbeiteten Wert enthält, der im Steuerelement enthalten ist.
- [`willValidate`](/de/docs/Web/API/HTMLTextAreaElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. `false`, wenn Bedingungen es von der Beschränkungsvalidierung ausschließen, einschließlich wenn seine `readOnly`- oder `disabled`-Eigenschaft `true` ist.
- [`wrap`](/de/docs/Web/API/HTMLTextAreaElement/wrap)
  - : Ein String, der das [`wrap`](/de/docs/Web/HTML/Reference/Elements/textarea#wrap)-Attribut des Elements darstellt und angibt, wie das Steuerelement den Text umbricht.

## Instanzmethoden

_Erbt außerdem Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
  - : Gibt `false` zurück, wenn das Element ein Kandidat für die Beschränkungsvalidierung ist und es seine Beschränkungen nicht erfüllt. In diesem Fall löst es auch ein stornierbares `invalid`-Ereignis am Steuerelement aus. Es gibt `true` zurück, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist oder wenn es seine Beschränkungen erfüllt.
- [`reportValidity()`](/de/docs/Web/API/HTMLTextAreaElement/reportValidity)
  - : Diese Methode berichtet dem Benutzer über die Probleme mit den Einschränkungen des Elements, falls vorhanden. Wenn es Probleme gibt, löst es ein stornierbares `invalid`-Ereignis am Element aus und gibt `false` zurück; wenn es keine Probleme gibt, gibt es `true` zurück.
- [`select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
  - : Wählt den Inhalt des Steuerelements aus.
- [`setCustomValidity()`](/de/docs/Web/API/HTMLTextAreaElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.
- [`setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
  - : Ersetzt einen Textbereich im Element durch neuen Text.
- [`setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
  - : Wählt einen Textbereich im Element aus (fokussiert ihn jedoch nicht).

## Ereignisse

_Erbt außerdem Ereignisse von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)-Ereignis
  - : Wird ausgelöst, wenn ein Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignis
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("textarea")}}-Element geändert wurde.

## Beispiele

### Beispiel für automatisch wachsendes Textfeld

Machen Sie ein Textfeld beim Tippen automatisch wachsend:

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
<form>
  <fieldset>
    <legend>Your comments</legend>
    <p><textarea class="no-scrollbars"></textarea></p>
    <p><input type="submit" value="Send" /></p>
  </fieldset>
</form>
```

{{EmbedLiveSample('Autogrowing_textarea_example', 600, 300)}}

### Beispiel zum Einfügen von HTML-Tags

Fügen Sie einige HTML-Tags in ein Textfeld ein:

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

Dekorieren Sie das `span`, um sich wie ein Link zu verhalten:

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
