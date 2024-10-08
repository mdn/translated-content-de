---
title: "AudioParam: Eigenschaft defaultValue"
short-title: defaultValue
slug: Web/API/AudioParam/defaultValue
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Die schreibgeschützte **`defaultValue`**-Eigenschaft der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle repräsentiert den Anfangswert der Attribute, wie sie vom spezifischen [`AudioNode`](/de/docs/Web/API/AudioNode) festgelegt werden, der das `AudioParam` erstellt.

## Wert

Eine Gleitkomma-{{jsxref("Number")}}.

## Beispiele

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const defaultVal = gainNode.gain.defaultValue;
console.log(defaultVal); // 1
console.log(defaultVal === gainNode.gain.value); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
