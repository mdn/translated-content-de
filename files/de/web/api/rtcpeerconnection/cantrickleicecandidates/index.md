---
title: "RTCPeerConnection: canTrickleIceCandidates-Eigenschaft"
short-title: canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebRTC")}}

Die **`canTrickleIceCandidates`** schreibgeschützte Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der Remote-Peer [trickled ICE candidates](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann oder nicht.

**ICE-Trickling** ist der Prozess, bei dem weiterhin Kandidaten gesendet werden, nachdem das initiale Angebot oder die Antwort bereits an den anderen Peer gesendet wurde.

Diese Eigenschaft wird erst gesetzt, nachdem [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wurde. Idealerweise bietet Ihr Signalisierungsprotokoll eine Möglichkeit, die Unterstützung von Trickling zu erkennen, sodass Sie nicht auf diese Eigenschaft angewiesen sind. Ein WebRTC-Browser unterstützt immer Trickle ICE. Wenn Trickling nicht unterstützt wird oder Sie es nicht erkennen können, können Sie auf einen falsy-Wert für diese Eigenschaft prüfen und dann warten, bis sich der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) auf `"completed"` ändert, bevor Sie das initiale Angebot erstellen und senden. Auf diese Weise enthält das Angebot alle Kandidaten.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Remote-Peer trickled ICE candidates akzeptieren kann, und `false`, wenn er es nicht kann. Wenn kein Remote-Peer festgelegt wurde, ist dieser Wert `null`.

> [!NOTE]
> Der Wert dieser Eigenschaft wird bestimmt, sobald der lokale Peer [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen hat;
> die bereitgestellte Beschreibung wird vom ICE-Agenten verwendet, um zu bestimmen, ob der Remote-Peer trickled ICE candidates unterstützt.

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
  sendAnswerToPeer(answer); // To peer via signaling channel
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
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
