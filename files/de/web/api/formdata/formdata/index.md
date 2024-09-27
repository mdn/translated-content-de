---
title: "FormData: FormData() Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
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
  - : Ein HTML {{HTMLElement("form")}} Element — wenn angegeben, wird das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit den aktuellen Schlüsseln/Werten des `form` gefüllt, wobei die Name-Eigenschaft jedes Elements als Schlüssel und deren übermittelter Wert als Wert verwendet wird. Es wird auch den Inhalt von Datei-Eingabefeldern kodieren. Ein [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)-Ereignis wird auf dem Formular ausgelöst, wenn das `FormData`-Objekt erstellt wird, wodurch das Formular die Möglichkeit hat, die Formulardaten bei Bedarf zu ändern.
- `submitter` {{optional_inline}}
  - : Ein [Submit-Button](/de/docs/Glossary/submit_button), der Mitglied des `form` ist. Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten [in das](/de/docs/Glossary/Submit_button#form_data_entries) [`FormData`](/de/docs/Web/API/FormData)-Objekt aufgenommen (z. B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein [Submit-Button](/de/docs/Glossary/submit_button) ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des `form` ist. Der `submitter` muss entweder ein Abkömmling des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut haben, das auf das Formular verweist.

## Beispiele

### Erstellen eines leeren FormData

Die folgende Zeile erstellt ein leeres [`FormData`](/de/docs/Web/API/FormData)-Objekt:

```js
const formData = new FormData();
```

Sie können diesem mit [`append()`](/de/docs/Web/API/FormData/append) ein Schlüssel/Wert-Paar hinzufügen:

```js
formData.append("username", "Chris");
```

### Vorbefüllen von einem HTML-Formular-Element

Sie können die optionalen Argumente `form` und `submitter` angeben, wenn Sie das `FormData`-Objekt erstellen, um es mit Werten aus dem angegebenen Formular vorzufüllen.

> [!NOTE]
> Nur erfolgreiche Formularelemente sind in einem FormData-Objekt enthalten, d. h. solche mit einem Namen und nicht im deaktivierten Zustand.

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

Aus Gründen der Übersichtlichkeit ist das `<form>`-Element nicht sichtbar.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
