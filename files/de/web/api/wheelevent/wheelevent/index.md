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
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor konstruieren, wird dieses Ereignis aus Sicherheitsgründen nicht _trusted_ sein.
> Nur von Browsern generierte `WheelEvent`-Objekte sind trusted, und nur trusted events lösen Standardaktionen aus.

## Syntax

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive, und Browser setzen ihn immer auf `wheel`.
- `options` {{optional_inline}}

  - : Ein Objekt, das, _zusätzlich zu den in [`MouseEvent()`](/de/docs/Web/API/MouseEvent/MouseEvent) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:

    - `deltaX` {{optional_inline}}
      - : Eine Gleitkommazahl, die den horizontalen Scrollbetrag in der `deltaMode` Einheit darstellt.
        Standardwert ist `0.0`.
    - `deltaY` {{optional_inline}}
      - : Eine Gleitkommazahl, die den vertikalen Scrollbetrag in der `deltaMode` Einheit darstellt.
        Standardwert ist `0.0`.
    - `deltaZ` {{optional_inline}}
      - : Eine Gleitkommazahl, die den Scrollbetrag für den Z-Achsen-Scrollbetrag in der `deltaMode` Einheit darstellt.
        Standardwert ist `0.0`.
    - `deltaMode` {{optional_inline}}

      - : Ein ganzzahliger Wert, der die Einheit des Scrollbetrags der Delta-Werte darstellt. Standardwert ist `0x00`. Zulässige Werte sind:

        | Konstante         | Wert   | Beschreibung                                 |
        | ----------------- | ------ | --------------------------------------------- |
        | `DOM_DELTA_PIXEL` | `0x00` | Die Delta-Werte sind in Pixeln angegeben.     |
        | `DOM_DELTA_LINE`  | `0x01` | Die Delta-Werte sind in Zeilen angegeben.     |
        | `DOM_DELTA_PAGE`  | `0x02` | Die Delta-Werte sind in Seiten angegeben.     |

### Rückgabewert

Ein neues [`WheelEvent`](/de/docs/Web/API/WheelEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`WheelEvent`](/de/docs/Web/API/WheelEvent) Schnittstelle, zu der es gehört.
