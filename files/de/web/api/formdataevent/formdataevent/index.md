---
title: "FormDataEvent: FormDataEvent()-Konstruktor"
short-title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

Der **`FormDataEvent()`**-Konstruktor erstellt ein neues [`FormDataEvent`](https://developer.mozilla.org/de/docs/Web/API/FormDataEvent)-Objekt.

## Syntax

```js-nolint
new FormDataEvent(type, formEventInit)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn immer auf `formdata`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](https://developer.mozilla.org/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `formData`
      - : Ein [`FormData`](https://developer.mozilla.org/de/docs/Web/API/FormData)-Objekt, um das [`FormDataEvent`](https://developer.mozilla.org/de/docs/Web/API/FormDataEvent) vorab zu füllen.
        Dies würde dann über die [`FormDataEvent.formData`](https://developer.mozilla.org/de/docs/Web/API/FormDataEvent/formData)-Eigenschaft abgerufen.

### Rückgabewert

Ein neues [`FormDataEvent`](https://developer.mozilla.org/de/docs/Web/API/FormDataEvent)-Objekt.

## Beispiele

```js
const fd = new FormData();
fd.append("test", "test");

const fdEv = new FormDataEvent("formdata", { formData: fd });

for (const value of fdEv.formData.values()) {
  console.log(value);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FormDataEvent`](https://developer.mozilla.org/de/docs/Web/API/FormDataEvent)
