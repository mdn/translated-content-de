---
title: "RTCPeerConnection: connectionState Eigenschaft"
short-title: connectionState
slug: Web/API/RTCPeerConnection/connectionState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die **`connectionState`** schreibgeschützte Eigenschaft des {{domxref("RTCPeerConnection")}}-Interfaces gibt den aktuellen Zustand der Peer-Verbindung an, indem sie einen der folgenden Zeichenkettenwerte zurückgibt: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.

Dieser Zustand stellt im Wesentlichen den aggregierten Zustand aller ICE-Transporte (die entweder vom Typ {{domxref("RTCIceTransport")}} oder {{domxref("RTCDtlsTransport")}} sind) dar, die von der Verbindung genutzt werden.

Wenn sich der Wert dieser Eigenschaft ändert, wird ein {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}-Ereignis an die {{domxref("RTCPeerConnection")}}-Instanz gesendet.

## Wert

Eine Zeichenkette, die den aktuellen Zustand der Verbindung darstellt. Dies kann einen der folgenden Werte annehmen:

- `new`
  - : Mindestens einer der {{Glossary("ICE")}}-Transporte ({{domxref("RTCIceTransport")}} oder {{domxref("RTCDtlsTransport")}} Objekte) der Verbindung befindet sich im Zustand `new` und keiner von ihnen befindet sich in einem der folgenden Zustände: `connecting`, `checking`, `failed`, `disconnected` oder alle Transporte der Verbindung befinden sich im Zustand `closed`.
- `connecting`
  - : Einer oder mehrere der {{Glossary("ICE")}}-Transporte befinden sich derzeit im Prozess, eine Verbindung herzustellen;
    das heißt, ihr {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} ist entweder `checking` oder `connected`, und keine Transporte befinden sich im Zustand `failed`.
- `connected`
  - : Jeder {{Glossary("ICE")}}-Transport, der von der Verbindung verwendet wird, ist entweder in Gebrauch (Zustand `connected` oder `completed`) oder ist geschlossen (Zustand `closed`);
    zusätzlich befindet sich mindestens ein Transport entweder im Zustand `connected` oder `completed`.
- `disconnected`
  - : Mindestens einer der {{Glossary("ICE")}}-Transporte für die Verbindung befindet sich im Zustand `disconnected` und keiner der anderen Transporte befindet sich in den Zuständen: `failed`, `connecting` oder `checking`.
- `failed`
  - : Einer oder mehrere der {{Glossary("ICE")}}-Transporte der Verbindung befinden sich im Zustand `failed`.
- `closed`
  - : Die {{DOMxRef("RTCPeerConnection")}} ist geschlossen.

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
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
- {{domxref("RTCIceTransport.state")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
