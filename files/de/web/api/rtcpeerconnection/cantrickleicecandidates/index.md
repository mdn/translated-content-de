---
title: "RTCPeerConnection: Eigenschaft canTrickleIceCandidates"
short-title: canTrickleIceCandidates
slug: Web/API/RTCPeerConnection/canTrickleIceCandidates
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`canTrickleIceCandidates`** der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob der entfernte Peer [ICE-Kandidaten überspringen](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.

**ICE Trickling** ist der Prozess des fortgesetzten Sendens von Kandidaten, nachdem das anfängliche Angebot oder die Antwort bereits an den anderen Peer gesendet wurde.

Diese Eigenschaft wird erst nach dem Aufruf von {{domxref("RTCPeerConnection.setRemoteDescription()")}} gesetzt. Idealerweise bietet Ihr Signalisierungsprotokoll eine Möglichkeit, die Unterstützung des Tricklings zu erkennen, sodass Sie nicht auf diese Eigenschaft angewiesen sind. Ein WebRTC-Browser unterstützt immer Trickle-ICE. Wenn Trickling nicht unterstützt wird oder Sie dies nicht feststellen können, können Sie auf einen falsch-ähnlichen Wert für diese Eigenschaft prüfen und dann warten, bis sich der Wert von {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} zu `"completed"` ändert, bevor Sie das anfängliche Angebot erstellen und senden. Auf diese Weise enthält das Angebot alle Kandidaten.

## Wert

Ein boolescher Wert, der `true` ist, wenn der entfernte Peer überspringbare ICE-Kandidaten akzeptieren kann, und `false`, wenn er dies nicht kann. Wenn kein entfernter Peer festgelegt wurde, ist dieser Wert `null`.

> [!NOTE]
> Der Wert dieser Eigenschaft wird festgelegt, sobald der lokale Peer {{domxref("RTCPeerConnection.setRemoteDescription()")}} aufgerufen hat; die bereitgestellte Beschreibung wird vom ICE-Agenten verwendet, um festzustellen, ob der entfernte Peer überspringbare ICE-Kandidaten unterstützt.

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

// Der folgende Code könnte verwendet werden, um ein Angebot von einem Peer zu behandeln, 
// wenn nicht bekannt ist, ob er Trickle-ICE unterstützt.
async function newPeer(remoteOffer) {
  await pc.setRemoteDescription(remoteOffer);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  if (pc.canTrickleIceCandidates) return pc.localDescription;
  const answer = await waitToCompleteIceGathering(pc);
  sendAnswerToPeer(answer); //An Peer über den Signalisierungskanal
}
// Fehler mit try/catch behandeln

pc.addEventListener(
  "icecandidate",
  (e) => pc.canTrickleIceCandidates && sendCandidateToPeer(e.candidate),
);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addIceCandidate()")}}
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
