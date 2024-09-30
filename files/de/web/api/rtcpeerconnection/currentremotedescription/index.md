---
title: "RTCPeerConnection: aktuelleRemoteDescription-Eigenschaft"
short-title: currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`currentRemoteDescription`** des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das Ende der Verbindung auf der Gegenseite beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das durch die Beschreibung dargestellte Angebot oder die Antwort erstmals instanziiert wurde.

Um die `currentRemoteDescription` zu ändern, rufen Sie [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, was eine Reihe von Ereignissen auslöst, die dazu führen, dass dieser Wert gesetzt wird.
Einzelheiten darüber, was genau passiert und warum die Änderung nicht unbedingt sofort erfolgt, finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der Seite zur WebRTC-Konnektivität.

> [!NOTE]
> Im Gegensatz zu [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) repräsentiert dieser Wert den tatsächlichen aktuellen Zustand des lokalen Endes der Verbindung;
> `remoteDescription` kann eine Beschreibung angeben, die im Moment im Prozess des Umschaltens ist.

## Wert

Die aktuelle Beschreibung des Endes der Verbindung auf der Gegenseite, falls eine gesetzt wurde.
Wenn keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentRemoteDescription` und zeigt eine Warnung an, die die Felder `type` und `sdp` des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

```js
const pc = new RTCPeerConnection();
// ...
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
