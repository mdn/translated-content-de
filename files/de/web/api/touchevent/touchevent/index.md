---
title: "TouchEvent: TouchEvent() Konstruktor"
short-title: TouchEvent()
slug: Web/API/TouchEvent/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Der **`TouchEvent()`** Konstruktor erstellt ein neues {{domxref("TouchEvent")}} Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertrauenswürdig_ sein.
> Nur vom Browser generierte `TouchEvent` Objekte sind vertrauenswürdig und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new TouchEvent(type)
new TouchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `touchstart`, `touchend`, `touchmove`, `touchcancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("UIEvent/UIEvent", "UIEvent()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `touches` {{optional_inline}}
      - : Eine {{domxref("TouchList")}}, standardmäßig leer, die eine Liste von Objekten für jeden Berührungspunkt, der derzeit die Oberfläche berührt, darstellt.
    - `targetTouches` {{optional_inline}}
      - : Eine {{domxref("TouchList")}}, standardmäßig leer, die eine Liste von Objekten für jeden Berührungspunkt darstellt, der die Oberfläche berührt
        _und_ auf dem Element begann, das Ziel des aktuellen Ereignisses ist.
    - `changedTouches` {{optional_inline}}
      - : und standardmäßig `[]`, vom Typ `Touch[]`, das ist eine Liste von Objekten für jeden Berührungspunkt, der zum Ereignis beigetragen hat.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, standardmäßig `false`, der angibt, ob die <kbd>ctrl</kbd>-Taste gleichzeitig gedrückt wurde.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, standardmäßig `false`, der angibt, ob die <kbd>shift</kbd>-Taste gleichzeitig gedrückt wurde.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, standardmäßig `false`, der angibt, ob die <kbd>alt</kbd>-Taste gleichzeitig gedrückt wurde.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, standardmäßig `false`, der angibt, ob die <kbd>meta</kbd>-Taste gleichzeitig gedrückt wurde.

### Rückgabewert

Ein neues {{domxref("TouchEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TouchEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
