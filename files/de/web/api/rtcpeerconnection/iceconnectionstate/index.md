---
title: "RTCPeerConnection: iceConnectionState-Eigenschaft"
short-title: iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`iceConnectionState`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle gibt einen String zurück, der den Zustand des mit der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbundenen [ICE](/de/docs/Glossary/ICE)-Agents beschreibt: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` und `closed`.

Sie beschreibt den aktuellen Zustand des ICE-Agents und seine Verbindung zum ICE-Server;
das heißt, zum [STUN](/de/docs/Glossary/STUN)- oder [TURN](/de/docs/Glossary/TURN)-Server.

Sie können erkennen, wann sich dieser Wert geändert hat, indem Sie das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis beobachten.

## Wert

Der aktuelle Zustand des ICE-Agents und seiner Verbindung. Der Wert ist einer der folgenden Strings:

- `new`
  - : Der ICE-Agent sammelt Adressen oder wartet darauf, über Aufrufe an [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit entfernten Kandidaten versorgt zu werden (oder beides).
- `checking`
  - : Der ICE-Agent hat einen oder mehrere entfernte Kandidaten erhalten und überprüft Paare aus lokalen und entfernten Kandidaten auf gegenseitige Verträglichkeit,
    um ein kompatibles Paar zu finden, hat jedoch noch kein Paar gefunden, das die Peer-Verbindung ermöglichen würde.
    Es ist möglich, dass das Sammeln von Kandidaten ebenfalls noch im Gange ist.
- `connected`
  - : Ein verwendbares Paar aus lokalen und entfernten Kandidaten wurde für alle Komponenten der Verbindung gefunden und die Verbindung wurde hergestellt.
    Es ist möglich, dass das Sammeln noch im Gange ist, und es ist auch möglich, dass der ICE-Agent weiterhin Kandidaten gegeneinander überprüft, um eine bessere Verbindung zu finden.
- `completed`
  - : Der ICE-Agent hat das Sammeln der Kandidaten abgeschlossen, hat alle Paare gegeneinander überprüft und eine Verbindung für alle Komponenten gefunden.
- `failed`
  - : Der ICE-Agent hat alle Kandidatenpaare gegeneinander geprüft und es nicht geschafft, kompatible Paare für alle Komponenten der Verbindung zu finden.
    Es ist jedoch möglich, dass der ICE-Agent für einige Komponenten kompatible Verbindungen gefunden hat.
- `disconnected`
  - : Prüfungen zur Sicherstellung, dass Komponenten noch verbunden sind, sind bei mindestens einer Komponente der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) fehlgeschlagen.
    Dies ist ein weniger strenger Test als `failed` und kann auf weniger zuverlässigen Netzwerken oder während vorübergehender Verbindungen sporadisch auftreten und ebenso spontan wieder gelöst werden.
    Wenn das Problem behoben ist, kann die Verbindung in den `connected`-Zustand zurückkehren.
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
