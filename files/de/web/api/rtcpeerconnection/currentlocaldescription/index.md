---
title: "RTCPeerConnection: currentLocalDescription-Eigenschaft"
short-title: currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`currentLocalDescription`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es seit der letzten erfolgreichen Aushandlung beschrieben wurde, seitdem die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) das Aushandeln und Verbinden mit einem entfernten Peer abgeschlossen hat. Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seitdem das Offer oder Answer, das in der Beschreibung repräsentiert ist, zuerst instanziiert wurde.

Um die `currentLocalDescription` zu ändern, rufen Sie [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, was eine Reihe von Ereignissen auslöst, die dazu führen, dass dieser Wert gesetzt wird. Details dazu, was genau passiert und warum die Änderung nicht unbedingt sofort erfolgt, finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Connectivity-Seite.

> [!NOTE]
> Im Gegensatz zu [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) repräsentiert dieser Wert den tatsächlichen aktuellen Zustand des lokalen Endes der Verbindung; `localDescription` kann eine Beschreibung angeben, auf die die Verbindung derzeit umgeschaltet wird.

## Wert

Die aktuelle Beschreibung des lokalen Endes der Verbindung, falls eine gesetzt wurde. Wenn keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentLocalDescription` und zeigt eine Warnung an, die die `type`- und `sdp`-Felder des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

```js
const pc = new RTCPeerConnection();
// ...
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
> Die Hinzufügung von `currentLocalDescription` und [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) zur WebRTC-Spezifikation ist relativ neu. In Browsern, die sie nicht unterstützen, verwenden Sie einfach [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription).

## Siehe auch

- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
