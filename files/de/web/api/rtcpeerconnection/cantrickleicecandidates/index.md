---
title: "RTCPeerConnection: canTrickleIceCandidates Eigenschaft"
short-title: canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`canTrickleIceCandidates`** schreibgeschützte Eigenschaft der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Peer [trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.

**ICE-Trickling** ist der Prozess des fortfahrenden Sendens von Kandidaten, nachdem das ursprüngliche Angebot oder die Antwort bereits an den anderen Peer gesendet wurde.

Diese Eigenschaft wird erst gesetzt, nachdem [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wurde. Idealerweise bietet Ihr Signalprotokoll eine Möglichkeit, die Unterstützung des Trickling zu erkennen, sodass Sie nicht auf diese Eigenschaft angewiesen sind.
Ein WebRTC-Browser unterstützt immer Trickle ICE. Wenn Trickling nicht unterstützt wird oder Sie es nicht feststellen können, können Sie nach einem falsy Wert für diese Eigenschaft suchen und dann warten, bis der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) auf `"completed"` wechselt, bevor Sie das erste Angebot erstellen und senden.
So enthält das Angebot alle Kandidaten.

## Wert

Ein boolescher Wert, der `true` ist, wenn der entfernte Peer trickled ICE-Kandidaten akzeptieren kann, und `false`, wenn nicht.
Wenn kein entfernten Peer festgelegt wurde, ist dieser Wert `null`.

> [!NOTE]
> Der Wert dieser Eigenschaft wird bestimmt, sobald der lokale Peer [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen hat;
> die bereitgestellte Beschreibung wird vom ICE-Agenten verwendet, um festzustellen, ob der entfernte Peer trickled ICE-Kandidaten unterstützt.

## Beispiele

```js
const pc = new RTCPeerConnection();

function waitToCompleteIceGathering(pc) {
  return new Promise((resolve) => {
    pc.addEventListener(
      "icegatheringstatechange",
      (e) =>
        e.target.iceGatheringState === "complete" &&
        resolve(pc.localDescription),
    );
  });
}

// The following code might be used to handle an offer from a peer when
// it isn't known whether it supports trickle ICE.
async function newPeer(remoteOffer) {
  await pc.setRemoteDescription(remoteOffer);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  if (pc.canTrickleIceCandidates) return pc.localDescription;
  const answer = await waitToCompleteIceGathering(pc);
  sendAnswerToPeer(answer); //To peer via signaling channel
}
// Handle error with try/catch

pc.addEventListener(
  "icecandidate",
  (e) => pc.canTrickleIceCandidates && sendCandidateToPeer(e.candidate),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
- [Lifetime of a WebRTC session](/de/docs/Web/API/WebRTC_API/Session_lifetime)
