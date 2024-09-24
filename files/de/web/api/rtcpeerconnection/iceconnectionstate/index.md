---
title: "RTCPeerConnection: iceConnectionState-Eigenschaft"
short-title: iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`iceConnectionState`** der Schnittstelle {{domxref("RTCPeerConnection")}} gibt einen Zeichenfolgenwert zurück, der den Zustand des mit der {{domxref("RTCPeerConnection")}} verbundenen {{Glossary("ICE")}}-Agenten angibt: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` und `closed`.

Sie beschreibt den aktuellen Zustand des ICE-Agenten und dessen Verbindung zum ICE-Server; das heißt, dem {{Glossary("STUN")}}- oder {{Glossary("TURN")}}-Server.

Sie können erkennen, wann sich dieser Wert geändert hat, indem Sie das {{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Ereignis beobachten.

## Wert

Der aktuelle Zustand des ICE-Agenten und seine Verbindung. Der Wert ist eine der folgenden Zeichenfolgen:

- `new`
  - : Der ICE-Agent sammelt Adressen oder wartet darauf, durch Aufrufe von {{domxref("RTCPeerConnection.addIceCandidate()")}} (oder beides) mit Remote-Kandidaten versorgt zu werden.
- `checking`
  - : Dem ICE-Agenten wurden ein oder mehrere Remote-Kandidaten gegeben, und es werden Paare von lokalen und Remote-Kandidaten überprüft, um zu versuchen, eine kompatible Übereinstimmung zu finden. Es wurde jedoch noch kein Paar gefunden, das die Peer-Verbindung ermöglicht.
    Es ist möglich, dass das Sammeln von Kandidaten auch noch im Gange ist.
- `connected`
  - : Eine nutzbare Paarung von lokalen und Remote-Kandidaten wurde für alle Komponenten der Verbindung gefunden, und die Verbindung wurde hergestellt.
    Es ist möglich, dass das Sammeln noch im Gange ist, und es ist auch möglich, dass der ICE-Agent noch Kandidaten gegeneinander prüft, um eine bessere Verbindung zu finden.
- `completed`
  - : Der ICE-Agent hat das Sammeln von Kandidaten abgeschlossen, alle Paare gegeneinander geprüft und eine Verbindung für alle Komponenten gefunden.
- `failed`
  - : Der ICE-Agent hat alle Kandidatenpaare gegeneinander geprüft und konnte keine kompatiblen Übereinstimmungen für alle Komponenten der Verbindung finden.
    Es ist jedoch möglich, dass der ICE-Agent für einige Komponenten kompatible Verbindungen gefunden hat.
- `disconnected`
  - : Überprüfungen zur Sicherstellung, dass Komponenten noch verbunden sind, schlugen für mindestens eine Komponente der {{domxref("RTCPeerConnection")}} fehl.
    Dies ist ein weniger strenger Test als `failed` und kann in unzuverlässigeren Netzwerken oder bei temporären Unterbrechungen gelegentlich ausgelöst werden und ebenso spontan gelöst werden.
    Wenn das Problem behoben ist, kann die Verbindung in den `connected`-Zustand zurückkehren.
- `closed`
  - : Der ICE-Agent für diese {{domxref("RTCPeerConnection")}} wurde heruntergefahren und bearbeitet keine Anfragen mehr.

## Beispiele

```js
const pc = new RTCPeerConnection();
const state = pc.iceConnectionState;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection")}}
