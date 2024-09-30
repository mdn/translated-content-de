---
title: "RTCPeerConnection: connectionState-Eigenschaft"
short-title: connectionState
slug: Web/API/RTCPeerConnection/connectionState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`connectionState`**-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt den aktuellen Zustand der Peer-Verbindung durch die Rückgabe eines der folgenden String-Werte an: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieser Zustand repräsentiert im Wesentlichen den zusammengefassten Zustand aller ICE-Transporte (die vom Typ [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) oder [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) sind), die von der Verbindung verwendet werden.

Ändert sich der Wert dieser Eigenschaft, wird ein [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet.

## Wert

Ein String, der den aktuellen Zustand der Verbindung darstellt.
Dieser kann einen der folgenden Werte annehmen:

- `new`
  - : Mindestens einer der [ICE](/de/docs/Glossary/ICE) Transports der Verbindung ([`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) oder [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) Objekte) befindet sich im Zustand `new`, und keiner von ihnen ist in einem der folgenden Zustände: `connecting`, `checking`, `failed`, `disconnected`, oder alle Transporte der Verbindung sind im Zustand `closed`.
- `connecting`
  - : Einer oder mehrere der [ICE](/de/docs/Glossary/ICE) Transports sind aktuell dabei, eine Verbindung herzustellen; das heißt, ihr [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) ist entweder `checking` oder `connected`, und keine Transporte befinden sich im Zustand `failed`.
- `connected`
  - : Jeder [ICE](/de/docs/Glossary/ICE) Transport, der von der Verbindung genutzt wird, ist entweder in Gebrauch (Zustand `connected` oder `completed`) oder ist geschlossen (Zustand `closed`); zusätzlich ist mindestens ein Transport entweder `connected` oder `completed`.
- `disconnected`
  - : Mindestens einer der [ICE](/de/docs/Glossary/ICE) Transports der Verbindung befindet sich im Zustand `disconnected` und keiner der anderen Transporte ist in den Zuständen: `failed`, `connecting` oder `checking`.
- `failed`
  - : Einer oder mehrere der [ICE](/de/docs/Glossary/ICE) Transports der Verbindung befinden sich im Zustand `failed`.
- `closed`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist geschlossen.

## Beispiel

```js
const peerConnection = new RTCPeerConnection(configuration);

// …

const connectionState = peerConnection.connectionState;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
- [`RTCIceTransport.state`](/de/docs/Web/API/RTCIceTransport/state)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
