---
title: "RTCPeerConnection: remoteDescription-Eigenschaft"
short-title: remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`remoteDescription`** schreibgeschützte Eigenschaft des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung beschreibt (einschließlich Konfiguration und Medieninformationen) für das entfernte Ende der Verbindung. Falls diese noch nicht gesetzt wurde, ist der Wert `null`.

Der zurückgegebene Wert spiegelt typischerweise eine entfernte Beschreibung wider, die über den Signalisierungsserver empfangen wurde (entweder als Angebot oder als Antwort) und dann durch Ihren Code, welcher [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft, in Kraft gesetzt wurde.

## Syntax

![Syntax](_image_path_0-7a8e9064.md)

Auf einer grundlegenderen Ebene ist der zurückgegebene Wert der Wert von [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), wenn diese Eigenschaft nicht `null` ist; ansonsten wird der Wert von [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben. Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC Konnektivitätsseite für Details zu diesem Algorithmus und warum er verwendet wird.

## Beispiel

Dieses Beispiel betrachtet die `remoteDescription` und zeigt einen Hinweis an, der die Felder `type` und `sdp` des [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts enthält.

![Beispiel](_image_path_1-c55ea645.md)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription), [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription), [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription), [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription), [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
