---
title: "FormDataEvent: FormDataEvent() Konstruktor"
short-title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

Der **`FormDataEvent()`** Konstruktor erstellt ein neues {{domxref("FormDataEvent")}}-Objekt.

## Syntax

```js-nolint
new FormDataEvent(type, formEventInit)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er ist case-sensitiv und Browser setzen ihn immer auf `formdata`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `formData`
      - : Ein {{domxref("FormData")}}-Objekt, um das {{domxref("FormDataEvent")}} vorab zu befüllen. Dieses wird dann über die {{domxref("FormDataEvent.formData")}}-Eigenschaft zugänglich gemacht.

### Rückgabewert

Ein neues {{domxref("FormDataEvent")}}-Objekt.

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

- {{domxref("FormDataEvent")}}
