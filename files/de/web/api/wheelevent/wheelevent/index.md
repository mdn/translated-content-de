---
title: "WheelEvent: WheelEvent() Konstruktor"
short-title: WheelEvent()
slug: Web/API/WheelEvent/WheelEvent
l10n:
  sourceCommit: c5613708408042af5889be39cfb203799879175b
---

{{APIRef("UI Events")}}

Der **`WheelEvent()`** Konstruktor gibt ein neues {{domxref("WheelEvent")}}-Objekt zurück.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertraut_ sein.
> Nur von Browsern generierte `WheelEvent`-Objekte sind vertraut, und nur vertraute Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new WheelEvent(type)
new WheelEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und von Browsern wird es immer auf `wheel` gesetzt.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in {{domxref("MouseEvent/MouseEvent", "MouseEvent()")}} definiert sind_, die folgenden Eigenschaften haben kann:

    - `deltaX` {{optional_inline}}
      - : Eine Gleitkommazahl, die den horizontalen Scrollbetrag in der `deltaMode` Einheit darstellt.
        Sie standardmäßig auf `0.0` gesetzt.
    - `deltaY` {{optional_inline}}
      - : Eine Gleitkommazahl, die den vertikalen Scrollbetrag in der `deltaMode` Einheit darstellt.
        Sie standardmäßig auf `0.0` gesetzt.
    - `deltaZ` {{optional_inline}}
      - : Eine Gleitkommazahl, die den Scrollbetrag für den z-Achsen-Scrollbetrag in der `deltaMode` Einheit darstellt.
        Sie standardmäßig auf `0.0` gesetzt.
    - `deltaMode` {{optional_inline}}

      - : Ein Integer, der die Einheit des Scrollbetrags der Delta-Werte darstellt. Er ist standardmäßig auf `0x00` gesetzt. Erlaubte Werte sind:

        | Konstant          | Wert   | Beschreibung                                    |
        | ----------------- | ------ | ------------------------------------------------ |
        | `DOM_DELTA_PIXEL` | `0x00` | Die Delta-Werte werden in Pixeln angegeben.     |
        | `DOM_DELTA_LINE`  | `0x01` | Die Delta-Werte werden in Zeilen angegeben.     |
        | `DOM_DELTA_PAGE`  | `0x02` | Die Delta-Werte werden in Seiten angegeben.     |

### Rückgabewert

Ein neues {{domxref("WheelEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WheelEvent")}}-Interface, zu dem es gehört.
