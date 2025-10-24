---
title: "RTCEncodedVideoFrame: RTCEncodedVideoFrame() Konstruktor"
short-title: RTCEncodedVideoFrame()
slug: Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedVideoFrame()`** Konstruktor erstellt ein neues und vollständig unabhängiges [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) Objekt.

Das neue Objekt ist ein tiefes Duplikat der Originalobjektdaten und -metadaten, wobei alle im Optionsparameter angegebenen Metadaten die kopierten Werte überschreiben.

## Syntax

```js-nolint

new RTCEncodedVideoFrame(originalFrame);
new RTCEncodedVideoFrame(originalFrame, options);
```

### Parameter

- `originalFrame`
  - : Der zu kopierende Frame.
- `options` {{optional_inline}}
  - : Dies ist ein Objekt mit der folgenden Eigenschaft:
    - `metadata` {{optional_inline}}
      - : Ein Objekt, das die Metadaten des Frames festlegt.
        Dies ist ein Objekt mit denselben Eigenschaften wie das von [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata) zurückgegebene Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - Der Quellpuffer ist getrennt.
- {{jsxref("RangeError")}}
  - Die Zuordnung ist zu groß.

## Beispiele

### Klonen eines Frames mit geänderten Metadaten

Dieses Snippet zeigt, wie Sie einen Frame kopieren und seine Metadaten ändern können.
In diesem Fall aktualisieren wir nur die Aufnahmezeit.

```js
// Frame is an incoming RTCEncodedVideoFrame
frame.getMetadata();

const newFrame = new RTCEncodedVideoFrame(frame, {
  metadata: {
    captureTime: frame.metadata.captureTime + 3,
  },
});
```

Diese Art der Änderung kann nützlich sein, wenn Sie mehrere ausgehende Frames aus einem einzelnen eingehenden Frame erstellen müssen, beispielsweise um Medien an einen anderen Peer im Netzwerk weiterzuleiten.
In der Regel müssen Sie die Metadaten eines Frames nicht ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
