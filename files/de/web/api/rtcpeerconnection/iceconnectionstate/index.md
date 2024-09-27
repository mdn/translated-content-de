---
title: "RTCPeerConnection: iceConnectionState Eigenschaft"
short-title: iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`iceConnectionState`** schreibgeschützte Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen String zurück, der den Status des mit der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) assoziierten [ICE](/de/docs/Glossary/ICE)-Agents angibt: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` und `closed`.

Sie beschreibt den aktuellen Status des ICE-Agents und dessen Verbindung zum ICE-Server, das heißt, dem [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server.

Sie können erkennen, wann sich dieser Wert geändert hat, indem Sie das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis beobachten.

## Wert

Der aktuelle Status des ICE-Agents und dessen Verbindung. Der Wert ist einer der folgenden Strings:

- `new`
  - : Der ICE-Agent sammelt Adressen oder wartet darauf, dass ihm durch Aufrufe von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) Remote-Kandidaten bereitgestellt werden (oder beides).
- `checking`
  - : Dem ICE-Agent wurden ein oder mehrere Remote-Kandidaten zur Verfügung gestellt, und er überprüft Paare von lokalen und Remote-Kandidaten, um eine kompatible Übereinstimmung zu finden, hat jedoch noch kein Paar gefunden, das die Peer-Verbindung ermöglichen würde. Es ist möglich, dass das Sammeln von Kandidaten noch im Gange ist.
- `connected`
  - : Eine brauchbare Paarung von lokalen und Remote-Kandidaten wurde für alle Komponenten der Verbindung gefunden, und die Verbindung wurde hergestellt. Es ist möglich, dass das Sammeln noch im Gange ist, und ebenfalls möglich, dass der ICE-Agent weiterhin Kandidaten überprüft, um eine bessere Verbindung zu finden.
- `completed`
  - : Der ICE-Agent hat das Sammeln von Kandidaten abgeschlossen, alle Paare überprüft und eine Verbindung für alle Komponenten gefunden.
- `failed`
  - : Der ICE-Agent hat alle Kandidatenpaare überprüft und konnte für alle Komponenten keine kompatiblen Übereinstimmungen finden. Es ist jedoch möglich, dass der ICE-Agent für einige Komponenten kompatible Verbindungen gefunden hat.
- `disconnected`
  - : Überprüfungen, um sicherzustellen, dass Komponenten weiterhin verbunden sind, sind für mindestens eine Komponente der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) fehlgeschlagen. Dies ist ein weniger strenger Test als `failed` und kann in weniger zuverlässigen Netzwerken oder während vorübergehender Verbindungsunterbrechungen zeitweise auftreten und sich ebenso spontan lösen. Wenn das Problem behoben ist, kann die Verbindung in den `connected`-Status zurückkehren.
- `closed`
  - : Der ICE-Agent für diese [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde heruntergefahren und bearbeitet keine Anfragen mehr.

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
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
