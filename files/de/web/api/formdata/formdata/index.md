---
title: "FormData: FormData() Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
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
  - : Ein HTML {{HTMLElement("form")}} Element — wenn angegeben, wird das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit den aktuellen Schlüssel-/Wertpaaren des `form`-Elements befüllt. Dabei wird die Name-Eigenschaft jedes Elements als Schlüssel und der übermittelte Wert als Wert verwendet. Auch Dateieingabeinhalte werden kodiert. Ein [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)-Event wird auf dem Formular ausgelöst, wenn das `FormData`-Objekt erstellt wird, sodass das Formular die Formulardaten bei Bedarf ändern kann.
- `submitter` {{optional_inline}}
  - : Ein {{Glossary("submit_button", "Sende-Button")}}, der Mitglied des `form` ist. Wenn der `submitter` ein `name`-Attribut oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` hat, werden seine Daten {{Glossary("Submit_button#form_data_entries", "im FormData-Objekt enthalten sein")}} (z.B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Sende-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des `form` ist. Der `submitter` muss entweder ein Nachkomme des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut haben, das auf das Formular verweist.

## Beispiele

### Erstellen einer leeren FormData

Die folgende Zeile erstellt ein leeres [`FormData`](/de/docs/Web/API/FormData)-Objekt:

```js
const formData = new FormData();
```

Sie könnten ein Schlüssel-/Wertpaar mit [`append()`](/de/docs/Web/API/FormData/append) hinzufügen:

```js
formData.append("username", "Chris");
```

### Vorbefüllen aus einem HTML-Formular-Element

Sie können die optionalen Argumente `form` und `submitter` angeben, wenn Sie das `FormData`-Objekt erstellen, um es mit Werten aus dem angegebenen Formular vorzufüllen.

> [!NOTE]
> Nur erfolgreiche Formularelemente sind in einem FormData-Objekt enthalten, d.h. solche mit einem Namen und nicht im deaktivierten Zustand.

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo" />
  <input type="text" name="text2" value="bar" />
  <input type="text" name="text3" value="baz" />
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

Aus Gründen der Kürze wird das `<form>`-Element nicht angezeigt.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
