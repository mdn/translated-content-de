---
title: "FormData: FormData() Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Der **`FormData()`** Konstruktor erstellt ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt.

## Syntax

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### Parameter

- `form` {{optional_inline}}
  - : Ein HTML {{HTMLElement("form")}} Element — wenn angegeben, wird das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit den aktuellen Schlüssel/Wert-Paaren des `form` unter Verwendung der Namenseigenschaften jedes Elements für die Schlüssel und ihre übermittelten Werte für die Werte gefüllt. Es wird auch Dateieingabeinhalte kodieren. Ein [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event) Ereignis wird ausgelöst, wenn das `FormData`-Objekt erstellt wird, was es dem Formular ermöglicht, die Formulardaten bei Bedarf zu ändern.
- `submitter` {{optional_inline}}
  - : Ein {{Glossary("submit_button", "Submit-Button")}}, der Mitglied des `form` ist. Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "in das")}} [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgenommen (z. B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Submit-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des `form` ist. Der `submitter` muss entweder ein Nachfahre des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form) Attribut haben, das auf das Formular verweist.

## Beispiele

### Erstellen eines leeren FormData

Die folgende Zeile erstellt ein leeres [`FormData`](/de/docs/Web/API/FormData)-Objekt:

```js
const formData = new FormData();
```

Sie könnten ein Schlüssel/Wert-Paar mit [`append()`](/de/docs/Web/API/FormData/append) hinzufügen:

```js
formData.append("username", "Chris");
```

### Vorbefüllung mit einem HTML-Form-Element

Sie können die optionalen Argumente `form` und `submitter` angeben, um das `FormData`-Objekt mit Werten aus dem angegebenen Formular vorab zu füllen.

> [!NOTE]
> Nur erfolgreiche Formularelemente werden in ein FormData-Objekt aufgenommen, d.h. solche mit einem Namen und die nicht deaktiviert sind.

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo" />
  <input type="text" name="text2" value="bar" />
  <input type="text" name="text2" value="baz" />
  <input type="checkbox" name="check" checked disabled />
  <button name="intent" value="save">Save</button>
  <button name="intent" value="saveAsCopy">Save As Copy</button>
</form>

<output id="output"></output>
```

```css hidden
form {
  display: none;
}

output {
  display: block;
  white-space: pre-wrap;
}
```

#### JavaScript

```js
const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

for (const [key, value] of formData) {
  output.textContent += `${key}: ${value}\n`;
}
```

#### Ergebnis

Zur Übersichtlichkeit wird das `<form>` Element nicht angezeigt.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
