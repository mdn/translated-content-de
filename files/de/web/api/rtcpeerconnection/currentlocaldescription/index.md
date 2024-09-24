---
title: "RTCPeerConnection: currentLocalDescription-Eigenschaft"
short-title: currentLocalDescription
slug: Web/API/RTCPeerConnection/currentLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`currentLocalDescription`** der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt ein {{domxref("RTCSessionDescription")}}-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich verhandelt wurde, seitdem das {{domxref("RTCPeerConnection")}} das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die durch die Beschreibung dargestellt wird, erstmals instanziiert wurde.

Um die `currentLocalDescription` zu ändern, rufen Sie {{domxref("RTCPeerConnection.setLocalDescription()")}} auf, was eine Reihe von Ereignissen auslöst, die dazu führen, dass dieser Wert gesetzt wird.
Für Details zum genauen Ablauf und warum die Änderung nicht unbedingt sofort erfolgt, siehe [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

> [!NOTE]
> Anders als {{domxref("RTCPeerConnection.localDescription")}} repräsentiert dieser Wert den tatsächlichen aktuellen Zustand des lokalen Endes der Verbindung;
> `localDescription` kann eine Beschreibung angeben, zu der die Verbindung gerade wechselt.

## Wert

Die aktuelle Beschreibung des lokalen Endes der Verbindung, falls eine gesetzt wurde.
Wenn keine erfolgreich gesetzt wurde, ist dieser Wert `null`.

## Beispiele

Dieses Beispiel betrachtet die `currentLocalDescription` und zeigt einen Alert mit dem `type`- und `sdp`-Feld des {{domxref("RTCSessionDescription")}}-Objekts an.

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
> Die Hinzufügung von `currentLocalDescription` und {{domxref("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} zur WebRTC-Spezifikation ist relativ neu.
> In Browsern, die sie nicht unterstützen, verwenden Sie einfach {{domxref("RTCPeerConnection.localDescription", "localDescription")}}.

## Siehe auch

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
