---
title: "UIEvent: UIEvent() Konstruktor"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}

Der **`UIEvent()`** Konstruktor erstellt ein neues {{domxref("UIEvent")}} Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erzeugen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertrauenswürdig_ sein.
> Nur vom Browser generierte `UIEvent` Objekte sind vertrauenswürdig und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitive und Browser setzen es auf `load`, `unload`, `abort`, `error` oder `select`.
- `options` {{optional_inline}}

  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Eine Zahl, die einen ereignisabhängigen Wert darstellt, der mit dem Ereignis verbunden ist.
        Es hat standardmäßig den Wert `0` und {{domxref("UIEvent.detail")}} listet die Semantik für Standardereignisse auf.
    - `view` {{optional_inline}}
      - : Das mit dem Ereignis verbundene {{domxref("Window")}}. Sein Standardwert ist `null`.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : Ein {{domxref("InputDeviceCapabilities")}} Objekt, das Informationen
        über das physische Gerät liefert, das für die Erzeugung eines Touch-Ereignisses verantwortlich ist.

### Rückgabewert

Ein neues {{domxref("UIEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("UIEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
