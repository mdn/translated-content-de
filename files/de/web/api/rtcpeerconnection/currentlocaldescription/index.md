---
title: "RTCPeerConnection: currentLocalDescription-Eigenschaft"
short-title: currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die **`currentLocalDescription`** schreibgeschützte Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde seit dem letzten Mal, als die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) die Verhandlung und Verbindung zu einem entfernten Peer abgeschlossen hat. Auch enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das durch die Beschreibung repräsentierte Angebot oder die Antwort erstmals instanziiert wurde.

Um die `currentLocalDescription` zu ändern, rufen Sie [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf. Dies löst eine Reihe von Ereignissen aus, die dazu führen, dass dieser Wert gesetzt wird. Einzelheiten dazu, was genau passiert und warum die Änderung nicht unbedingt sofort erfolgt, finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Verbindungsseite.

> [!NOTE]
> Im Gegensatz zu [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) repräsentiert dieser Wert den tatsächlichen aktuellen Zustand des lokalen Endes der Verbindung;
> `localDescription` kann eine Beschreibung angeben, zu der die Verbindung momentan wechselt.

## Wert

Die aktuelle Beschreibung des lokalen Endes der Verbindung, falls eine gesetzt wurde. Wenn keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentLocalDescription` und zeigt einen Alarm, der die `type`- und `sdp`-Felder des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

```js
const pc = new RTCPeerConnection();
// …
const sd = pc.currentLocalDescription;
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

> [!NOTE]
> Die Aufnahme von `currentLocalDescription` und [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) in die WebRTC-Spezifikation ist relativ neu. In Browsern, die sie nicht unterstützen, verwenden Sie einfach [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription).

## Siehe auch

- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
