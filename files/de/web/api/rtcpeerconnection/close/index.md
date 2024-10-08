---
title: "RTCPeerConnection: close() Methode"
short-title: close()
slug: Web/API/RTCPeerConnection/close
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`close()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle schließt die aktuelle Peer-Verbindung.

## Syntax

```js-nolint
close()
```

_Diese Methode hat keine Parameter und gibt nichts zurück._

Das Aufrufen dieser Methode beendet den ICE-Agent der RTCPeerConnection, beendet jegliche laufende ICE-Verarbeitung und aktive Streams. Dies setzt auch alle vom ICE-Agent verwendeten Ressourcen frei, einschließlich TURN-Berechtigungen. Alle [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte gelten als gestoppt, sobald diese Methode zurückkehrt (sie können noch im Prozess des Stoppen sein, aber im Wesentlichen sind sie gestoppt).

Sobald diese Methode zurückkehrt, ist der Signalisierungsstatus, wie er von [`RTCPeerConnection.signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) zurückgegeben wird, `closed`.

Stellen Sie sicher, dass Sie alle Referenzen zur vorherigen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) `löschen`, bevor Sie versuchen, eine neue Verbindung mit dem gleichen entfernten Peer zu erstellen, da dies je nach Browser zu einigen Fehlern führen könnte.

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
