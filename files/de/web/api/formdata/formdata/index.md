---
title: "FormData: FormData() Konstruktor"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

Der **`FormData()`**-Konstruktor erstellt ein neues {{domxref("FormData")}}-Objekt.

## Syntax

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### Parameter

- `form` {{optional_inline}}
  - : Ein HTML-{{HTMLElement("form")}}-Element — wenn angegeben, wird das {{domxref("FormData")}}-Objekt mit den aktuellen Schlüsseln/Werten des `form`-Elements gefüllt, wobei der Name der einzelnen Elemente als Schlüssel und der übermittelte Wert als Wert verwendet wird. Auch Dateieingabedaten werden kodiert. Ein {{domxref("HTMLFormElement/formdata_event", "formdata")}}-Ereignis wird ausgelöst, wenn das `FormData`-Objekt erstellt wird, was es dem Formular ermöglicht, die Formulardaten bei Bedarf zu ändern.
- `submitter` {{optional_inline}}
  - : Ein {{Glossary("Absendeknopf")}}, der ein Mitglied des `form` ist. Wenn der `submitter` ein `name`-Attribut hat oder ein `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` ist, werden seine Daten [in das](/de/docs/Glossary/Submit_button#form_data_entries) {{domxref("FormData")}}-Objekt aufgenommen (z.B. `btnName=btnValue`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein {{Glossary("Absendeknopf")}} ist.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `submitter` kein Mitglied des `form` ist. Der `submitter` muss entweder ein Nachkomme des Formular-Elements sein oder ein [`form`](/de/docs/Web/HTML/Element/input#form)-Attribut haben, das auf das Formular verweist.

## Beispiele

### Erstellen eines leeren FormData

Die folgende Zeile erstellt ein leeres {{domxref("FormData")}}-Objekt:

```js
const formData = new FormData();
```

Sie könnten diesem mit {{domxref("FormData.append", "append()")}} ein Schlüssel/Wert-Paar hinzufügen:

```js
formData.append("username", "Chris");
```

### Vorab füllen aus einem HTML-Formular-Element

Sie können die optionalen Argumente `form` und `submitter` angeben, wenn Sie das `FormData`-Objekt erstellen, um es mit Werten aus dem angegebenen Formular vorab zu füllen.

> [!NOTE]
> Nur erfolgreiche Formularsteuerungen sind in einem FormData-Objekt enthalten, d.h. diejenigen mit einem Namen und die nicht in einem deaktivierten Zustand sind.

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo" />
  <input type="text" name="text2" value="bar" />
  <input type="text" name="text2" value="baz" />
  <input type="checkbox" name="check" checked disabled />
  <button name="intent" value="save">Speichern</button>
  <button name="intent" value="saveAsCopy">Als Kopie speichern</button>
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

Aus Gründen der Übersichtlichkeit ist das `<form>`-Element versteckt.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von FormData-Objekten](/de/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
