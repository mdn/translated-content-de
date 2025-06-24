---
title: "UIEvent: UIEvent() Konstruktor"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("UI Events")}}

Der **`UIEvent()`** Konstruktor erstellt ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertrauenswürdig_ sein.
> Nur vom Browser generierte `UIEvent`-Objekte sind vertrauenswürdig und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `load`, `unload`, `abort`, `error` oder `select`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Eine Zahl, die einen vom Ereignis abhängigen Wert darstellt, der dem Ereignis zugeordnet ist.
        Sie hat standardmäßig den Wert `0` und [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) listet die Semantik für Standardereignisse auf.
    - `view` {{optional_inline}}
      - : Das mit dem Ereignis verbundene [`Window`](/de/docs/Web/API/Window). Der Standardwert ist `null`.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : Ein [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) Objekt, das Informationen
        über das physische Gerät bereitstellt, das für die Erzeugung eines Touch-Ereignisses verantwortlich ist.

### Ergebniswert

Ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent), das Interface der Objekte, die es erstellt.
