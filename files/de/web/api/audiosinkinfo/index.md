---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`AudioSinkInfo`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Informationen, die die Sink-ID eines [`AudioContext`](/de/docs/Web/API/AudioContext) beschreiben, welche über [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) abgerufen wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`type`](/de/docs/Web/API/AudioSinkInfo/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Audioausgabegeräts zurück.

## Beispiele

Wenn ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) mit einem `sinkId`-Wert von `{ type: 'none' }` erstellt wird, gibt der Aufruf von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) später im Code ein `AudioSinkInfo`-Objekt zurück, das `type: 'none'` enthält. Dies ist derzeit der einzige verfügbare Wert.

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

- [SetSinkId Testbeispiel](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) (sehen Sie sich den [Quellcode](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid) an)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
