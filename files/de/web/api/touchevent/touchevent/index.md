---
title: "TouchEvent: TouchEvent() Konstruktor"
short-title: TouchEvent()
slug: Web/API/TouchEvent/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Der **`TouchEvent()`** Konstruktor erstellt ein neues [`TouchEvent`](/de/docs/Web/API/TouchEvent) Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertrauenswürdig_ sein.
> Nur von Browsern generierte `TouchEvent` Objekte sind vertrauenswürdig und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new TouchEvent(type)
new TouchEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `touchstart`, `touchend`, `touchmove`, `touchcancel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`UIEvent()`](/de/docs/Web/API/UIEvent/UIEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `touches` {{optional_inline}}
      - : Eine [`TouchList`](/de/docs/Web/API/TouchList), die standardmäßig leer ist und eine Liste von Objekten für jeden Berührungspunkt enthält, der derzeit die Oberfläche berührt.
    - `targetTouches` {{optional_inline}}
      - : Eine [`TouchList`](/de/docs/Web/API/TouchList), die standardmäßig leer ist und eine Liste von Objekten für jeden Berührungspunkt enthält, der die Oberfläche berührt
        _und_ auf dem Element begonnen hat, das das Ziel des aktuellen Ereignisses ist.
    - `changedTouches` {{optional_inline}}
      - : und standardmäßig `[]`, vom Typ `Touch[]`, das eine Liste von Objekten für jeden Berührungspunkt ist, der zum Ereignis beigetragen hat.
    - `ctrlKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist, und anzeigt, ob die <kbd>Strg</kbd>-Taste gleichzeitig gedrückt wurde.
    - `shiftKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist, und anzeigt, ob die <kbd>Shift</kbd>-Taste gleichzeitig gedrückt wurde.
    - `altKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist, und anzeigt, ob die <kbd>Alt</kbd>-Taste gleichzeitig gedrückt wurde.
    - `metaKey` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist, und anzeigt, ob die <kbd>Meta</kbd>-Taste gleichzeitig gedrückt wurde.

### Rückgabewert

Ein neues [`TouchEvent`](/de/docs/Web/API/TouchEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TouchEvent`](/de/docs/Web/API/TouchEvent), die Schnittstelle der Objekte, die es erstellt.
