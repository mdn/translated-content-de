---
title: "RTCPeerConnection: restartIce() Methode"
short-title: restartIce()
slug: Web/API/RTCPeerConnection/restartIce
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`restartIce()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle ermöglicht es einer Webanwendung, dass das Sammeln von [ICE](/de/docs/Glossary/ICE)-Kandidaten auf beiden Seiten der Verbindung erneut durchgeführt wird.
Dies vereinfacht den Prozess, indem die gleiche Methode entweder vom Anrufer oder vom Empfänger verwendet werden kann, um einen ICE-Neustart auszulösen.

Nach der Rückgabe von `restartIce()` wird das Angebot, das durch den nächsten Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) zurückgegeben wird, automatisch so konfiguriert, dass ein ICE-Neustart sowohl beim lokalen Peer (sobald der lokale Peer gesetzt wurde) als auch beim entfernten Peer ausgelöst wird, sobald das Angebot über Ihren Signalisierungsmechanismus übermittelt und der entfernte Peer ebenfalls seine Beschreibung gesetzt hat.

`restartIce()` bewirkt, dass das
[`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis auf der `RTCPeerConnection` ausgelöst wird, um die Anwendung zu informieren, dass sie eine Verhandlung über ihren Signalisierungskanal durchführen sollte.

Wenn die Verhandlung aus irgendeinem Grund—entweder aufgrund eines Rollbacks oder weil eingehende Angebote gerade verhandelt werden—nicht abgeschlossen werden kann, wird die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sich merken, dass Sie einen ICE-Neustart angefordert haben.
Beim nächsten Übergang des [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung in den `stable`-Zustand wird das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst.
Dieser Prozess wird fortgesetzt, bis ein ICE-Neustart erfolgreich abgeschlossen wurde.

## Syntax

```js-nolint
restartIce()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Nach dem Aufruf von `restartIce()` wird das nächste Angebot, das mit [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) erstellt wird, einen ICE-Neustart auslösen, sobald es über Ihren Signalisierungsmechanismus an den entfernten Peer gesendet wird.
Das Neustarten von ICE setzt im Wesentlichen ICE zurück, sodass alle neuen Kandidaten mit neuen Anmeldedaten erstellt werden.
Bestehende Medienübertragungen werden während dieses Prozesses ununterbrochen fortgesetzt.

Für Details darüber, wie der ICE-Neustart funktioniert, siehe [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) und {{RFC(5245, "ICE specification", "9.1.1.1")}}.

## Beispiele

Dieses Beispiel erstellt einen Handler für das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis, der einen Übergang in den Zustand `failed` behandelt, indem er ICE neu startet, um es erneut zu versuchen.

```js
pc.addEventListener("iceconnectionstatechange", (event) => {
  if (pc.iceConnectionState === "failed") {
    /* possibly reconfigure the connection in some way here */
    /* then request ICE restart */
    pc.restartIce();
  }
});
```

Mit diesem Code ausgelöst verursacht ein Übergang in den Zustand `failed` während der ICE-Verhandlung ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, auf das Ihr Code wie üblich erneut verhandeln sollte.
Da Sie jedoch `restartIce()` aufgerufen haben, wird Ihr Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), der im Handler für `negotiationneeded` erfolgt, einen ICE-Neustart statt einer regulären Neuverhandlung auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
