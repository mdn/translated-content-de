---
title: "RTCPeerConnection: Eigenschaft currentRemoteDescription"
short-title: currentRemoteDescription
slug: Web/API/RTCPeerConnection/currentRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`currentRemoteDescription`** schreibgeschützte Eigenschaft des {{domxref("RTCPeerConnection")}}-Interfaces gibt ein {{domxref("RTCSessionDescription")}}-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich seit der letzten Aushandlung und Verbindung mit einem entfernten Peer verhandelt wurde. Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits von dem ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die durch die Beschreibung repräsentiert wird, erstmals erstellt wurde.

Um die `currentRemoteDescription` zu ändern, rufen Sie {{domxref("RTCPeerConnection.setRemoteDescription()")}} auf, was eine Reihe von Ereignissen auslöst, die dazu führen, dass dieser Wert gesetzt wird. Einzelheiten dazu, was genau passiert und warum die Änderung nicht zwingend sofort erfolgt, finden Sie unter [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

> [!NOTE]
> Anders als {{domxref("RTCPeerConnection.remoteDescription")}} repräsentiert dieser Wert den tatsächlichen aktuellen Zustand des lokalen Endes der Verbindung; `remoteDescription` kann eine Beschreibung spezifizieren, zu der die Verbindung derzeit wechselt.

## Wert

Die aktuelle Beschreibung des entfernten Endes der Verbindung, falls eine gesetzt wurde. Wenn keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentRemoteDescription` und zeigt ein Alert-Fenster, das die Felder `type` und `sdp` des {{domxref("RTCSessionDescription")}}-Objekts enthält.

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

- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.remoteDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
