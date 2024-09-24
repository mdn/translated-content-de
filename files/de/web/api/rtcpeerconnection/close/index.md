---
title: "RTCPeerConnection: close()-Methode"
short-title: close()
slug: Web/API/RTCPeerConnection/close
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`close()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle schließt die aktuelle Peer-Verbindung.

## Syntax

```js-nolint
close()
```

_Diese Methode hat keine Parameter und gibt nichts zurück._

Der Aufruf dieser Methode beendet den ICE-Agent der RTCPeerConnection, stoppt jegliche laufende ICE-Verarbeitung und alle aktiven Streams. Dies gibt auch alle vom ICE-Agenten genutzten Ressourcen frei, einschließlich TURN-Berechtigungen. Alle {{domxref("RTCRtpSender")}}-Objekte gelten als gestoppt, sobald dies zurückkehrt (sie können sich noch im Prozess des Anhaltens befinden, aber für alle praktischen Zwecke sind sie gestoppt).

Sobald diese Methode zurückkehrt, befindet sich der Signalisierungsstatus, wie er von {{domxref("RTCPeerConnection.signalingState")}} zurückgegeben wird, im Zustand `closed`.

Stellen Sie sicher, dass Sie alle Verweise auf die vorherige {{domxref("RTCPeerConnection")}} löschen, bevor Sie versuchen, einen neuen zu erstellen, der mit demselben entfernten Peer verbunden wird, da dies sonst je nach Browser zu einigen Fehlern führen könnte.

## Beispiel

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel");

dc.onmessage = (event) => {
  console.log(`received: ${event.data}`);
  pc.close(); // Wir haben entschieden, nach der ersten empfangenen Nachricht zu schließen
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
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.signalingState")}}
