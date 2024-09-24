---
title: AudioSinkInfo
slug: Web/API/AudioSinkInfo
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

Das **`AudioSinkInfo`**-Interface der {{domxref("Web Audio API", "Web Audio API", "", "nocode")}} repräsentiert Informationen, die eine {{domxref("AudioContext")}}'s Sink-ID beschreiben, abgerufen über {{domxref("AudioContext.sinkId")}}.

{{InheritanceDiagram}}

## Eigenschaften der Instanz

- {{domxref("AudioSinkInfo.type", "type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Typ des Audioausgabegeräts zurück.

## Beispiele

Wenn ein neuer {{domxref("AudioContext")}} mit einem `sinkId`-Wert von `{ type: 'none' }` erstellt wird, gibt ein späterer Aufruf von {{domxref("AudioContext.sinkId")}} im Code ein `AudioSinkInfo`-Objekt mit `type: 'none'` zurück. Dies ist aktuell der einzige verfügbare Wert.

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

- [SetSinkId Testbeispiel](https://set-sink-id.glitch.me/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}
- {{domxref("AudioContext/sinkchange_event", "sinkchange")}}
