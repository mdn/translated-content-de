---
title: "UIEvent: UIEvent() Konstruktor"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}

Der **`UIEvent()`** Konstruktor erstellt ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertraut_ sein.
> Nur von Browsern generierte `UIEvent`-Objekte sind vertrauenswürdig, und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und von Browsern auf `load`, `unload`, `abort`, `error` oder `select` gesetzt.
- `options` {{optional_inline}}

  - : Ein Objekt, das _neben den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Eine Zahl, die einen ereignisabhängigen Wert darstellt, der dem Ereignis zugeordnet ist.
        Er hat standardmäßig den Wert `0`, und [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) listet die Semantik für Standardereignisse auf.
    - `view` {{optional_inline}}
      - : Das mit dem Ereignis assoziierte [`Window`](/de/docs/Web/API/Window). Standardmäßig ist es `null`.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : Ein [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities)-Objekt, das Informationen
        über das physische Gerät liefert, das das Touch-Ereignis verursacht hat.

### Ergebniswert

Ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent), die Schnittstelle der Objekte, die es konstruiert.
