---
title: "RTCPeerConnection: restartIce()-Methode"
short-title: restartIce()
slug: Web/API/RTCPeerConnection/restartIce
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`restartIce()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces ermöglicht es einer Webanwendung, dass die Erfassung der {{Glossary("ICE", "ICE")}}-Kandidaten an beiden Enden der Verbindung erneut durchgeführt wird. Dies vereinfacht den Prozess, da dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen ICE-Neustart auszulösen.

Nachdem `restartIce()` zurückgegeben wird, ist das Angebot, das durch den nächsten Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) zurückgegeben wird, automatisch so konfiguriert, dass es den ICE-Neustart sowohl am lokalen Teilnehmer (sobald dieser gesetzt wurde) als auch am entfernten Teilnehmer auslöst, sobald das Angebot über Ihren Signalisierungsmechanismus gesendet und die Beschreibung auch vom entfernten Teilnehmer gesetzt wurde.

`restartIce()` löst das
[`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis auf dem `RTCPeerConnection` aus, um die Anwendung darüber zu informieren, dass sie eine Verhandlung über ihren Signalisierungskanal durchführen sollte.

Wenn die Verhandlung nicht abgeschlossen werden kann - entweder aufgrund eines Rollbacks oder weil eingehende Angebote gerade verhandelt werden - wird sich das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) merken, dass Sie einen ICE-Neustart angefordert haben. Das nächste Mal, wenn sich der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung auf `stable` ändert, wird das Verbindung das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis auslösen. Dieser Prozess setzt sich fort, bis ein ICE-Neustart erfolgreich durchgeführt wurde.

## Syntax

```js-nolint
restartIce()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Anwendungshinweise

Nach dem Aufruf von `restartIce()` wird das nächste Angebot, das mit [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) erstellt wird, den ICE-Neustart einleiten, sobald es über Ihren Signalisierungsmechanismus an den entfernten Teilnehmer gesendet wird. Ein Neustart von ICE setzt im Wesentlichen ICE zurück, sodass alle neuen Kandidaten unter Verwendung neuer Anmeldeinformationen erstellt werden. Bestehende Medienübertragungen werden während dieses Prozesses nicht unterbrochen.

Für Details darüber, wie ein ICE-Neustart funktioniert, siehe [ICE restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) und {{RFC(5245, "ICE-Spezifikation", "9.1.1.1")}}.

## Beispiele

Dieses Beispiel erstellt einen Handler für das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis, der einen Übergang in den Zustand `failed` behandelt, indem er ICE neustartet, um es erneut zu versuchen.

```js
pc.addEventListener("iceconnectionstatechange", (event) => {
  if (pc.iceConnectionState === "failed") {
    /* possibly reconfigure the connection in some way here */
    /* then request ICE restart */
    pc.restartIce();
  }
});
```

Mit diesem Code wird bei einem Übergang in den `failed`-Zustand während der ICE-Verhandlung ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst, auf das Ihr Code wie gewohnt durch eine Neuverhandlung reagieren sollte. Da Sie jedoch `restartIce()` aufgerufen haben, wird Ihr Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), der im Handler für `negotiationneeded` erfolgt, eher einen ICE-Neustart als nur eine normale Neuverhandlung auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
