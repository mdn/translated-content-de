---
title: "RTCPeerConnection: remoteDescription Eigenschaft"
short-title: remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die **`remoteDescription`**-Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces ist schreibgeschützt und gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung beschreibt (einschließlich Konfigurations- und Medieninformationen) für das entfernte Ende der Verbindung. Wenn dies noch nicht gesetzt wurde, ist es `null`.

Der zurückgegebene Wert spiegelt typischerweise eine entfernte Beschreibung wider, die über den Signalisierungsserver empfangen wurde (entweder als Angebot oder als Antwort) und dann in Kraft gesetzt wird, indem Ihr Code [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft, um darauf zu reagieren.

## Wert

Auf einer grundlegenderen Ebene ist der zurückgegebene Wert der Wert von [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), wenn diese Eigenschaft nicht `null` ist; ansonsten wird der Wert von [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben. Siehe [Pending und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite für Details zu diesem Algorithmus und warum er verwendet wird.

## Beispiel

Dieses Beispiel betrachtet die `remoteDescription` und zeigt eine Warnmeldung mit den Feldern `type` und `sdp` des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts an.

```js
const pc = new RTCPeerConnection();
// …
const sd = pc.remoteDescription;
if (sd) {
  alert(`Remote session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No remote session yet.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
