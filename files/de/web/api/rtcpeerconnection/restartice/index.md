---
title: "RTCPeerConnection: restartIce()-Methode"
short-title: restartIce()
slug: Web/API/RTCPeerConnection/restartIce
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`restartIce()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle ermöglicht es einer Webanwendung, zu verlangen, dass das Sammeln von {{Glossary("ICE")}}-Kandidaten an beiden Enden der Verbindung erneut durchgeführt wird. Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen ICE-Neustart zu initiieren.

Nachdem `restartIce()` zurückkehrt, wird das Angebot, das durch den nächsten Aufruf von {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} zurückgegeben wird, automatisch konfiguriert, um den ICE-Neustart sowohl beim lokalen Peer (sobald der lokale Peer gesetzt wurde) als auch beim Remote-Peer auszulösen, sobald das Angebot über Ihren Signalisierungsmechanismus gesendet und der Remote-Peer seine Beschreibung ebenfalls gesetzt hat.

`restartIce()` löst das
{{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis auf dem `RTCPeerConnection` aus, um die Anwendung darüber zu informieren, dass sie eine Verhandlung über ihren Signalisierungskanal durchführen sollte.

Wenn die Verhandlung nicht abgeschlossen werden kann – entweder aufgrund eines Rollbacks oder weil eingehende Angebote gerade verhandelt werden – speichert das {{domxref("RTCPeerConnection")}}, dass Sie einen ICE-Neustart angefordert haben. Das nächste Mal, wenn sich der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} der Verbindung auf `stable` ändert, wird das {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis ausgelöst. Dieser Prozess wird fortgesetzt, bis ein ICE-Neustart erfolgreich abgeschlossen wurde.

## Syntax

```js-nolint
restartIce()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise zur Verwendung

Nach dem Aufruf von `restartIce()` wird das nächste mit {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} erstellte Angebot einen ICE-Neustart initiieren, sobald es über Ihren Signalisierungsmechanismus an den Remote-Peer gesendet wird. Ein Neustart von ICE setzt im Wesentlichen ICE zurück, sodass alle neuen Kandidaten unter Verwendung neuer Anmeldeinformationen erstellt werden. Bestehende Medienübertragungen werden während dieses Prozesses nicht unterbrochen.

Für Details darüber, wie der ICE-Neustart funktioniert, siehe [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) und {{RFC(5245, "ICE-Spezifikation", "9.1.1.1")}}.

## Beispiele

Dieses Beispiel erstellt einen Handler für das {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Ereignis, der einen Übergang in den Zustand `failed` behandelt, indem er ICE neustartet, um einen neuen Versuch zu unternehmen.

```js
pc.addEventListener("iceconnectionstatechange", (event) => {
  if (pc.iceConnectionState === "failed") {
    /* möglicherweise die Verbindung in irgendeiner Weise neu konfigurieren */
    /* dann ICE-Neustart anfordern */
    pc.restartIce();
  }
});
```

Mit diesem Code wird ein Übergang in den Zustand `failed` während der ICE-Verhandlung ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis auslösen, woraufhin Ihr Code wie üblich neu verhandeln sollte. Da Sie jedoch `restartIce()` aufgerufen haben, wird Ihr Aufruf von {{domxref("RTCPeerConnection.createOffer", "createOffer()")}}, der im Handler für `negotiationneeded` erfolgt, einen ICE-Neustart anstelle einer regulären Neuverhandlung auslösen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
