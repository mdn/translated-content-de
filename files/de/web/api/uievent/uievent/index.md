---
title: "UIEvent: Konstruktor UIEvent()"
short-title: UIEvent()
slug: Web/API/UIEvent/UIEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("UI Events")}}

Der **`UIEvent()`** Konstruktor erstellt ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

> [!NOTE]
> Wenn Sie ein synthetisches Ereignis mit diesem Konstruktor erstellen, wird dieses Ereignis aus Sicherheitsgründen nicht _vertraut_. Nur durch den Browser generierte `UIEvent`-Objekte sind vertrauenswürdig, und nur vertrauenswürdige Ereignisse lösen Standardaktionen aus.

## Syntax

```js-nolint
new UIEvent(type)
new UIEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `load`, `unload`, `abort`, `error` oder `select`.
- `options` {{optional_inline}}

  - : Ein Objekt, das, _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `detail` {{optional_inline}}
      - : Eine Zahl, die einen ereignisabhängigen Wert darstellt, der dem Ereignis zugeordnet ist.
        Standardmäßig ist es `0`, und [`UIEvent.detail`](/de/docs/Web/API/UIEvent/detail) listet die Bedeutung für Standardereignisse auf.
    - `view` {{optional_inline}}
      - : Das [`Window`](/de/docs/Web/API/Window), das mit dem Ereignis assoziiert ist. Der Standardwert ist `null`.
    - `sourceCapabilities` {{optional_inline}} {{non-standard_inline}}
      - : Ein [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities)-Objekt, das Informationen über das physische Gerät bereitstellt,
        das für die Erzeugung eines Touch-Ereignisses verantwortlich ist.

### Rückgabewert

Ein neues [`UIEvent`](/de/docs/Web/API/UIEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent), die Schnittstelle der von ihm konstruierten Objekte.
