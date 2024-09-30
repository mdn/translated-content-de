---
title: "InputDeviceCapabilities: InputDeviceCapabilities() Konstruktor"
short-title: InputDeviceCapabilities()
slug: Web/API/InputDeviceCapabilities/InputDeviceCapabilities
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{APIRef("Input Device Capabilities API")}}{{SeeCompatTable}}

Der `InputDeviceCapabilities()` Konstruktor erstellt ein neues [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) Objekt, das Informationen über das physische Gerät bereitstellt, das für die Erzeugung eines Berührungsereignisses verantwortlich ist.

## Syntax

```js-nolint
new InputDeviceCapabilities()
new InputDeviceCapabilities(InputDeviceCapabilitiesInit)
```

### Parameter

- `InputDeviceCapabilitiesInit` {{optional_inline}}

  - : Ein Wörterbuchobjekt, das eine Reihe von Gerätefunktionen enthält. Es enthält die
    folgende Eigenschaft.

    - `fireTouchEvents`: Ein boolescher Wert, der angibt,
      ob das Gerät Berührungsereignisse auslöst.

### Rückgabewert

Eine Instanz der [`InputDeviceCapabilities`](/de/docs/Web/API/InputDeviceCapabilities) Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
