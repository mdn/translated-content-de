---
title: "RTCPeerConnection: signalingState-Eigenschaft"
short-title: signalingState
slug: Web/API/RTCPeerConnection/signalingState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`signalingState`**-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung während der Verbindung oder Wiederverbindung mit einem anderen Peer beschreibt.
Siehe [Signaling](/de/docs/Web/API/WebRTC_API/Session_lifetime#signaling) auf unserer WebRTC-Sitzungslebensdauer-Seite.

Da der Signalisierungsprozess eine Zustandsmaschine ist, kann die Überprüfung, ob Ihr Code sich im erwarteten Zustand befindet, wenn Nachrichten eintreffen, helfen, unerwartete und vermeidbare Fehler zu vermeiden.
Wenn Sie beispielsweise eine Antwort erhalten, während der `signalingState` nicht `"have-local-offer"` ist, wissen Sie, dass etwas nicht stimmt, da Sie nur Antworten erhalten sollten, nachdem Sie ein Angebot erstellt, aber bevor eine Antwort empfangen und in [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wurde. Ihr Code wird zuverlässiger, wenn Sie auf nicht übereinstimmende Zustände achten und diese elegant behandeln.

Dieser Wert kann auch während des Debuggens nützlich sein.

Zusätzlich wird ein [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet, wenn sich der Wert dieser Eigenschaft ändert.

## Wert

Die erlaubten Zeichenfolgenwerte sind:

- `stable`
  - : Es gibt keinen laufenden Austausch von Angebot und Antwort.
    Dies kann bedeuten, dass das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt neu ist, in diesem Fall sind sowohl die [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) als auch die [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) `null`;
    es kann auch bedeuten, dass die Verhandlung abgeschlossen und eine Verbindung hergestellt wurde.
- `have-local-offer`
  - : Der lokale Peer hat [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen und SDP, das ein Angebot darstellt (normalerweise durch Aufrufen von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) erstellt), übergeben, und das Angebot wurde erfolgreich angewendet.
- `have-remote-offer`
  - : Der Remote-Peer hat ein Angebot erstellt und es über den Signalisierungsserver an den lokalen Peer übermittelt, der das Angebot als Remote-Beschreibung festgelegt hat, indem er [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen hat.
- `have-local-pranswer`
  - : Das vom Remote-Peer gesendete Angebot wurde angewendet und eine Antwort wurde erstellt (normalerweise durch Aufrufen von [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)) und durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) angewendet.
    Diese vorläufige Antwort beschreibt die unterstützten Medienformate und dergleichen, enthält jedoch möglicherweise noch nicht alle ICE-Kandidaten.
    Weitere Kandidaten werden später separat geliefert.
- `have-remote-pranswer`
  - : Eine vorläufige Antwort wurde empfangen und erfolgreich angewendet als Antwort auf ein zuvor gesendetes und durch Aufrufen von `setLocalDescription()` etabliertes Angebot.
- `closed`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde geschlossen.

## Beispiele

```js
const pc = new RTCPeerConnection(configuration);
const state = pc.signalingState;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
