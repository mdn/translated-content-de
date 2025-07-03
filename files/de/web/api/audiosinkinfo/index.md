---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: 29d7119ff6b46801a0e5a2ce69b734b668812035
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`AudioSinkInfo`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) stellt Informationen bereit, die die `sink ID` eines [`AudioContext`](/de/docs/Web/API/AudioContext) beschreiben und über [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`type`](/de/docs/Web/API/AudioSinkInfo/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Audio-Ausgabegeräts zurück.

## Beispiele

Wenn ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) mit einem `sinkId`-Wert von `{ type: 'none' }` erstellt wird, wird ein späterer Aufruf von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) im Code ein `AudioSinkInfo`-Objekt zurückgeben, das `type: 'none'` enthält. Dies ist derzeit der einzige verfügbare Wert.

```js
audioCtx = new window.AudioContext({
  sinkId: { type: "none" },
});

// …

audioCtx.sinkId;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
