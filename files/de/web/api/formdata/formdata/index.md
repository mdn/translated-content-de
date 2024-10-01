---
title: "FormData: FormData()-Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Der **`FormData()`**-Konstruktor erstellt ein neues [`FormData`](/de/docs/Web/API/FormData)-Objekt.

## Syntax

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### Parameter

- `form` {{optional_inline}}
  - : Ein HTML-{{HTMLElement("form")}}-Element — wenn angegeben, wird das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit den aktuellen Schlüsseln/Werten des `form` mithilfe der Name-Eigenschaft jedes Elements für die Schlüssel und deren übermittelten Wert für die Werte befüllt. Es wird auch Datei-Input-Inhalte kodieren. Ein [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)-Ereignis wird ausgelöst, wenn das `FormData`-Objekt erstellt wird, was der Form ermöglicht, die Formulardaten bei Bedarf zu modifizieren.
- `submitter` {{optional_inline}}
  - : Ein {{Glossary("submit_button", "Submit-Button")}}, der ein Mitglied des `form` ist. Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "eingeschlossen")}} im [`FormData`](/de/docs/Web/API/FormData)-Objekt (z.B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Submit-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des `form` ist. Der `submitter` muss entweder ein Nachkomme des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut haben, das auf das Formular verweist.

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

### Vorbefüllen aus einem HTML-Formularelement

Sie können die optionalen `form`- und `submitter`-Argumente angeben, wenn Sie das `FormData`-Objekt erstellen, um es mit Werten aus dem angegebenen Formular vorzubefüllen.

> [!NOTE]
> Nur erfolgreiche Formularelemente werden in ein FormData-Objekt eingeschlossen, d.h. solche mit einem Namen und die nicht im deaktivierten Zustand sind.

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

Zur besseren Übersicht ist das `<form>`-Element ausgeblendet.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
