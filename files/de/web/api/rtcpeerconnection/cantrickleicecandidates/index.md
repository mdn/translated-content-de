---
title: "RTCPeerConnection: canTrickleIceCandidates-Eigenschaft"
short-title: canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`canTrickleIceCandidates`** des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob der entfernte Peer [trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann oder nicht.

**ICE Trickle** ist der Prozess, bei dem weiterhin Kandidaten gesendet werden, nachdem das erste Angebot oder die erste Antwort bereits an den anderen Peer gesendet wurde.

Diese Eigenschaft wird erst nach dem Aufruf von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) gesetzt. Idealerweise bietet Ihr Signalisierungsprotokoll eine Möglichkeit, die Unterstützung von Trickle zu erkennen, sodass Sie sich nicht auf diese Eigenschaft verlassen müssen. Ein WebRTC-Browser unterstützt immer Trickle ICE. Falls Trickle nicht unterstützt wird oder Sie das nicht erkennen können, können Sie bei einem falsy Wert für diese Eigenschaft warten, bis sich der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) in `"completed"` ändert, bevor Sie das erste Angebot erstellen und senden. Auf diese Weise enthält das Angebot alle Kandidaten.

## Wert

Ein boolescher Wert, der `true` ist, wenn der entfernte Peer trickled ICE-Kandidaten akzeptieren kann, und `false`, wenn dies nicht der Fall ist. Wenn kein entfernter Peer festgelegt wurde, ist dieser Wert `null`.

> [!NOTE]
> Der Wert dieser Eigenschaft wird bestimmt, nachdem der lokale Peer [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen hat; die bereitgestellte Beschreibung wird vom ICE-Agenten verwendet, um zu bestimmen, ob der entfernte Peer trickled ICE-Kandidaten unterstützt.

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
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
