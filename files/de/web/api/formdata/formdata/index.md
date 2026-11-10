---
title: "FormData: FormData()-Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
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
  - : Ein HTML-{{HTMLElement("form")}}-Element. Wenn es angegeben wird, wird das [`FormData`](/de/docs/Web/API/FormData)-Objekt mit den aktuellen Schlüsseln und Werten des `form`-Elements befüllt. Als Schlüssel wird jeweils die `name`-Eigenschaft eines Elements verwendet, als Wert dessen übermittelter Wert. Auch der Inhalt von Dateieingaben wird kodiert. Beim Erstellen des `FormData`-Objekts wird auf dem Formular ein [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)-Ereignis ausgelöst, sodass die Formulardaten bei Bedarf geändert werden können.
- `submitter` {{optional_inline}}
  - : Ein {{Glossary("submit_button", "Submit-Button")}}, der zum `form` gehört. Wenn `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten {{Glossary("Submit_button#form_data_entries", "in das Objekt aufgenommen")}} (z. B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("submit_button", "Submit-Button")}} ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `submitter` nicht zum `form` gehört. `submitter` muss entweder ein Nachfahre des Formularelements sein oder ein [`form`](/de/docs/Web/HTML/Reference/Elements/input#form)-Attribut haben, das auf das Formular verweist.

## Beispiele

### Ein leeres FormData-Objekt erstellen

Die folgende Zeile erstellt ein leeres [`FormData`](/de/docs/Web/API/FormData)-Objekt:

```js
const formData = new FormData();
```

Mit [`append()`](/de/docs/Web/API/FormData/append) können Sie ein Schlüssel-Wert-Paar hinzufügen:

```js
formData.append("username", "Chris");
```

### Werte aus einem HTML-Formularelement übernehmen

Beim Erstellen des `FormData`-Objekts können Sie die optionalen Argumente `form` und `submitter` angeben, um es mit Werten aus dem angegebenen Formular zu befüllen.

> [!NOTE]
> In ein FormData-Objekt werden nur erfolgreiche Formularelemente aufgenommen, also solche mit einem Namen, die nicht deaktiviert sind.

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

Der Übersichtlichkeit halber ist das `<form>`-Element ausgeblendet.

{{EmbedLiveSample("prepopulating_from_an_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [FormData-Objekte verwenden](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
