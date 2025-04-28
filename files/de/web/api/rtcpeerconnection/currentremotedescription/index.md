---
title: "RTCPeerConnection: currentRemoteDescription Eigenschaft"
short-title: currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die **`currentRemoteDescription`** Nur-Lese Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interfaces gibt ein
[`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, das das Remote-Ende der Verbindung beschreibt, wie es zuletzt erfolgreich verhandelt wurde, seit dem letzten Mal, als die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) die Verhandlung und Verbindung mit einem externen Partner abgeschlossen hat.
Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits seit der Erstellung des Angebots oder der Antwort durch den ICE-Agenten generiert wurden, die von der Beschreibung dargestellt wird.

Um die `currentRemoteDescription` zu ändern, rufen Sie [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, was eine Reihe von Ereignissen auslöst, die dazu führen, dass dieser Wert gesetzt wird.
Für Details darüber, was genau passiert und warum die Änderung nicht unbedingt sofort erfolgt, siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

> [!NOTE]
> Im Gegensatz zu [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) repräsentiert dieser Wert den tatsächlichen aktuellen Status des lokalen Endes der Verbindung;
> `remoteDescription` kann eine Beschreibung angeben, die die Verbindung derzeit zu übernehmen versucht.

## Wert

Die aktuelle Beschreibung des Remote-Endes der Verbindung, falls eine gesetzt wurde.
Falls keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentRemoteDescription` und zeigt einen Alarm an, der die `type`- und `sdp`-Felder des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekts enthält.

```js
const pc = new RTCPeerConnection();
// …
const sd = pc.currentRemoteDescription;
if (sd) {
  alert(`Local session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No local session yet.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
