---
title: "WheelEvent: WheelEvent() Konstruktor"
short-title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}}

Der **`WheelEvent()`** Konstruktor gibt ein neues [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt zurück.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertraut_ sein.
> Nur vom Browser generierte `WheelEvent`-Objekte sind vertrauenswürdig und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv und Browser setzen ihn immer auf `wheel`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `deltaX` {{optional_inline}}
      - : Eine Gleitkommazahl, die die horizontale Scrollmenge in der `deltaMode`-Einheit darstellt.
        Sie hat standardmäßig den Wert `0.0`.
    - `deltaY` {{optional_inline}}
      - : Eine Gleitkommazahl, die die vertikale Scrollmenge in der `deltaMode`-Einheit darstellt.
        Sie hat standardmäßig den Wert `0.0`.
    - `deltaZ` {{optional_inline}}
      - : Eine Gleitkommazahl, die die Scrollmenge für die z-Achse in der `deltaMode`-Einheit darstellt.
        Sie hat standardmäßig den Wert `0.0`.
    - `deltaMode` {{optional_inline}}
      - : Ein Integer, der die Einheit der Delta-Werte für die Scrollmenge darstellt. Er hat standardmäßig den Wert `0x00`. Erlaubte Werte sind:

        | Konstante         | Wert   | Beschreibung                              |
        | ----------------- | ------ | ----------------------------------------- |
        | `DOM_DELTA_PIXEL` | `0x00` | Die Delta-Werte sind in Pixel angegeben.  |
        | `DOM_DELTA_LINE`  | `0x01` | Die Delta-Werte sind in Zeilen angegeben. |
        | `DOM_DELTA_PAGE`  | `0x02` | Die Delta-Werte sind in Seiten angegeben. |

### Rückgabewert

Ein neues [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Interface, zu dem es gehört.
