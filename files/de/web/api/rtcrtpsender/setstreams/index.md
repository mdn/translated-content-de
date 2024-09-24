---
title: "RTCRtpSender: setStreams()-Methode"
short-title: setStreams()
slug: Web/API/RTCRtpSender/setStreams
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{APIRef("WebRTC")}}

Die Methode **`setStreams()`** des {{domxref("RTCRtpSender")}} verknüpft den {{domxref("RTCRtpSender.track", "track")}} des Senders mit den angegebenen {{domxref("MediaStream")}}-Objekten.

## Syntax

```js-nolint
setStreams()
setStreams(mediaStream1)
setStreams(mediaStream1, mediaStream2)
setStreams(mediaStream1, mediaStream2, /* …, */ mediaStreamN)
```

### Parameter

- `mediaStreamN` {{optional_inline}}
  - : Eine beliebige Anzahl von {{domxref("MediaStream")}}-Objekten, die als Argumente angegeben werden, um die Streams zu identifizieren, denen der `RTCRtpSender` {{domxref("RTCRtpSender.track", "track")}} angehört.
    Wenn dieser Parameter nicht angegeben ist, werden keine neuen Streams mit dem Track verknüpft.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Verbindung des Senders geschlossen ist.

## Beschreibung

`setStreams()` ist rein additiv. Es entfernt den Track nicht aus bestehenden Streams, sondern fügt ihn neuen hinzu.
Wenn Sie Streams angeben, zu denen der Track bereits gehört, bleibt dieser Stream unverändert.

Sobald der Track zu allen Streams hinzugefügt wurde, wird eine Neuverhandlung der Verbindung durch das {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis ausgelöst, das an die {{domxref("RTCPeerConnection")}}, zu der der Sender gehört, gesendet wird.

## Beispiele

Dieses Beispiel fügt alle Tracks einer {{domxref("RTCPeerConnection")}} dem angegebenen Stream hinzu.

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

Nach dem Aufruf der {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.getSenders", "getSenders()")}}, um die Liste der Sender der Verbindung zu erhalten, durchläuft die Funktion `addTracksToStream()` die Liste. Für jeden Sender, wenn der Track des Senders nicht null ist und der Zustand des Transports `connected` ist, rufen wir `setStreams()` auf, um den Track dem angegebenen `stream` hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
