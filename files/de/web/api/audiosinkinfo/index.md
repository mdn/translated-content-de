---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`AudioSinkInfo`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Informationen, die die Sink-ID eines [`AudioContext`](/de/docs/Web/API/AudioContext) beschreiben und über [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`type`](/de/docs/Web/API/AudioSinkInfo/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Audioausgabegeräts zurück.

## Beispiele

Wenn ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) mit einem `sinkId`-Wert von `{ type: 'none' }` erstellt wird, gibt ein späterer Aufruf von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) ein `AudioSinkInfo`-Objekt zurück, das `type: 'none'` enthält. Dies ist derzeit der einzige verfügbare Wert.

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

- [SetSinkId Testbeispiel](https://set-sink-id.glitch.me/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
