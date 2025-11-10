---
title: "RTCEncodedAudioFrame: RTCEncodedAudioFrame() Konstruktor"
short-title: RTCEncodedAudioFrame()
slug: Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedAudioFrame()`** Konstruktor erstellt ein neues und vollständig unabhängiges [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Objekt.

Das neue Objekt ist ein Tiefenkopie der ursprünglichen Objektdaten und Metadaten, wobei alle im Optionsparameter angegebenen Metadaten die kopierten Werte überschreiben.

## Syntax

```js-nolint

new RTCEncodedAudioFrame(originalFrame);
new RTCEncodedAudioFrame(originalFrame, options);
```

### Parameter

- `originalFrame`
  - : Der zu kopierende Frame.
- `options` {{optional_inline}}
  - : Dies ist ein Objekt mit der folgenden Eigenschaft:
    - `metadata` {{optional_inline}}
      - : Ein Objekt, das die Metadaten des Frames setzt.
        Dies ist ein Objekt mit den gleichen Eigenschaften wie das Objekt, das von [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata) zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - Der Quellpuffer ist getrennt.
- {{jsxref("RangeError")}}
  - Die Zuweisung ist zu groß.

## Beispiele

### Klonen eines Frames mit modifizierten Metadaten

Dieses Beispiel zeigt, wie Sie einen Frame kopieren und dessen Metadaten ändern.
In diesem Fall aktualisieren wir nur die Erfassungszeit.

```js
// Frame is an incoming RTCEncodedAudioFrame
frame.getMetadata();

const newFrame = new RTCEncodedAudioFrame(frame, {
  metadata: {
    captureTime: frame.metadata.captureTime + 3,
  },
});
```

Eine solche Modifikation kann nützlich sein, wenn Sie mehrere ausgehende Frames aus einem einzelnen eingehenden Frame erstellen müssen; zum Beispiel, um Medien an einen anderen Teilnehmer im Netzwerk weiterzuleiten.
Im Allgemeinen müssen Sie die Metadaten eines Frames nicht ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
