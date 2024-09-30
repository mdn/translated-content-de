---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Die **`AudioSinkInfo`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) repräsentiert Informationen, die die Sink-ID eines [`AudioContext`](/de/docs/Web/API/AudioContext) beschreiben, abgerufen über [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`type`](/de/docs/Web/API/AudioSinkInfo/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Audioausgabegeräts zurück.

## Beispiele

Wenn ein neuer [`AudioContext`](/de/docs/Web/API/AudioContext) mit einem `sinkId`-Wert von `{ type: 'none' }` erstellt wird, wird der Aufruf von [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId) später im Code ein `AudioSinkInfo`-Objekt zurückgeben, das `type: 'none'` enthält. Dies ist derzeit der einzige verfügbare Wert.

```js
audioCtx = new window.AudioContext({
  sinkId: { type: "none" },
});

// ...

audioCtx.sinkId;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SetSinkId-Testbeispiel](https://set-sink-id.glitch.me/)
- [`AudioContext.setSinkId()`](/de/docs/Web/API/AudioContext/setSinkId)
- [`AudioContext.sinkId`](/de/docs/Web/API/AudioContext/sinkId)
- [`sinkchange`](/de/docs/Web/API/AudioContext/sinkchange_event)
