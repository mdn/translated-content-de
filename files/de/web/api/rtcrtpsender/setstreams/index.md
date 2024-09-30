---
title: "RTCRtpSender: setStreams()-Methode"
short-title: setStreams()
slug: Web/API/RTCRtpSender/setStreams
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{APIRef("WebRTC")}}

Die Methode **`setStreams()`** des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) assoziiert den Sender's [`track`](/de/docs/Web/API/RTCRtpSender/track) mit den angegebenen [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten.

## Syntax

```js-nolint
setStreams()
setStreams(mediaStream1)
setStreams(mediaStream1, mediaStream2)
setStreams(mediaStream1, mediaStream2, /* …, */ mediaStreamN)
```

### Parameter

- `mediaStreamN` {{optional_inline}}
  - : Eine beliebige Anzahl von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die als Argumente angegeben werden und die Streams identifizieren, zu denen der `RTCRtpSender`-`track` gehört.
    Wenn dieser Parameter nicht angegeben wird, werden keine neuen Streams mit dem Track assoziiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Verbindung des Senders geschlossen ist.

## Beschreibung

`setStreams()` ist rein additiv. Es entfernt den Track nicht aus vorhandenen Streams; es fügt ihn neuen hinzu.
Wenn Sie Streams angeben, zu denen der Track bereits gehört, bleibt dieser Stream unverändert.

Sobald der Track zu allen Streams hinzugefügt wurde, wird eine Neuverhandlung der Verbindung durch das Auslösen des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses an den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst, zu dem der Sender gehört.

## Beispiele

Dieses Beispiel fügt alle Tracks eines [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dem angegebenen Stream hinzu.

```js
function addTracksToStream(stream) {
  let senders = pc.getSenders();

  senders.forEach((sender) => {
    if (sender.track && sender.transport.state === connected) {
      sender.setStreams(stream);
    }
  });
}
```

Nach dem Aufruf der Methode [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um die Liste der Sender der Verbindung zu erhalten, iteriert die Funktion `addTracksToStream()` über die Liste.
Für jeden Sender, wenn der Track des Senders nicht null und der Zustand seines Transports `connected` ist, rufen wir `setStreams()` auf, um den Track zu dem angegebenen `stream` hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
