---
title: "RTCPeerConnection: connectionState-Eigenschaft"
short-title: connectionState
slug: Web/API/RTCPeerConnection/connectionState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`connectionState`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt den aktuellen Zustand der Peer-Verbindung an, indem sie einen der folgenden Zeichenfolgenwerte zurückgibt: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieser Zustand repräsentiert im Wesentlichen den aggregierten Zustand aller ICE-Transporte (vom Typ [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) oder [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)), die von der Verbindung verwendet werden.

Wenn sich der Wert dieser Eigenschaft ändert, wird ein [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet.

## Wert

Eine Zeichenfolge, die den aktuellen Zustand der Verbindung darstellt.
Dies kann einen der folgenden Werte annehmen:

- `new`
  - : Mindestens einer der [ICE](/de/docs/Glossary/ICE)-Transporte ([`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) oder [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) Objekte) der Verbindung befindet sich im Zustand `new`, und keiner von ihnen befindet sich in einem der folgenden Zustände: `connecting`, `checking`, `failed`, `disconnected`, oder alle Transporte der Verbindung befinden sich im Zustand `closed`.
- `connecting`
  - : Einer oder mehrere der [ICE](/de/docs/Glossary/ICE)-Transporte sind derzeit dabei, eine Verbindung herzustellen; das heißt, ihr [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) ist entweder `checking` oder `connected`, und keine Transporte befinden sich im Zustand `failed`.
- `connected`
  - : Jeder von der Verbindung verwendete [ICE](/de/docs/Glossary/ICE)-Transport wird entweder verwendet (Zustand `connected` oder `completed`) oder ist geschlossen (Zustand `closed`); zusätzlich befindet sich mindestens ein Transport entweder im Zustand `connected` oder `completed`.
- `disconnected`
  - : Mindestens einer der [ICE](/de/docs/Glossary/ICE)-Transporte der Verbindung befindet sich im Zustand `disconnected`, und keiner der anderen Transporte befindet sich in den Zuständen: `failed`, `connecting` oder `checking`.
- `failed`
  - : Einer oder mehrere der [ICE](/de/docs/Glossary/ICE)-Transporte der Verbindung befinden sich im Zustand `failed`.
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
