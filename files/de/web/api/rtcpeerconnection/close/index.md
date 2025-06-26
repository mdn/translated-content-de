---
title: "RTCPeerConnection: close() Methode"
short-title: close()
slug: Web/API/RTCPeerConnection/close
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`close()`** Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interface schließt die aktuelle Peer-Verbindung.

Das Aufrufen dieser Methode beendet den ICE-Agent von `RTCPeerConnection`, beendet jegliche laufende ICE-Verarbeitung und alle aktiven Streams. Dies gibt auch alle Ressourcen frei, die vom ICE-Agent genutzt werden, einschließlich TURN-Berechtigungen. Alle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekte gelten als gestoppt, sobald dies zurückkehrt (sie können sich noch im Prozess des Stoppens befinden, aber sie gelten in jeder Hinsicht als gestoppt).

Sobald diese Methode zurückkehrt, ist der Signalisierungszustand, wie er von [`RTCPeerConnection.signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) zurückgegeben wird, `closed`.

Stellen Sie sicher, dass Sie alle Referenzen zur vorherigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `löschen`, bevor Sie versuchen, eine neue zu erstellen, die sich mit dem gleichen entfernten Peer verbindet, da dies Fehler verursachen könnte, die je nach Browser variieren.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner (`undefined`).

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
  pc.close(); // We decided to close after the first received message
};

dc.onopen = () => {
  console.log("datachannel open");
};

dc.onclose = () => {
  console.log("datachannel close");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState)
