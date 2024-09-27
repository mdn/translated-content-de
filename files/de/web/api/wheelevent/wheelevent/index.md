---
title: "WheelEvent: WheelEvent() Konstruktor"
short-title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
l10n:
  sourceCommit: c5613708408042af5889be39cfb203799879175b
---

{{APIRef("UI Events")}}

Der **`WheelEvent()`** Konstruktor gibt ein neues [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt zurück.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erzeugen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertrauenswürdig_ sein.
> Nur vom Browser generierte `WheelEvent`-Objekte sind vertrauenswürdig, und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/klein-schreibungssensitiv und Browser setzen es immer auf `wheel`.
- `options` {{optional_inline}}

  - : Ein Objekt das, _zusätzlich zu den in [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) definierten Eigenschaften_, folgende Eigenschaften aufweisen kann:

    - `deltaX` {{optional_inline}}
      - : Eine Gleitkommazahl, die die horizontale Scroll-Menge in der `deltaMode`-Einheit darstellt.
        Der Standardwert ist `0.0`.
    - `deltaY` {{optional_inline}}
      - : Eine Gleitkommazahl, die die vertikale Scroll-Menge in der `deltaMode`-Einheit darstellt.
        Der Standardwert ist `0.0`.
    - `deltaZ` {{optional_inline}}
      - : Eine Gleitkommazahl, die die Scroll-Menge für die z-Achse in der `deltaMode`-Einheit darstellt.
        Der Standardwert ist `0.0`.
    - `deltaMode` {{optional_inline}}

      - : Ein Integer, der die Einheit der Delta-Werte für die Scroll-Menge darstellt. Der Standardwert ist `0x00`. Erlaubte Werte sind:

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

- Die [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Schnittstelle, zu der es gehört.
