---
title: "RTCPeerConnection: signalingState-Eigenschaft"
short-title: signalingState
slug: Web/API/RTCPeerConnection/signalingState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`signalingState`** schreibgeschützte Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen String-Wert zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder erneuten Verbinden mit einem anderen Peer beschreibt.
Siehe [Signalisierung](/de/docs/Web/API/WebRTC_API/Session_lifetime#signaling) auf unserer WebRTC-Sitzungslebensdauer-Seite.

Da der Signalisierungsprozess eine Zustandsmaschine ist, kann es helfen, unerwartete und vermeidbare Fehler zu vermeiden, indem man sicherstellt, dass sich Ihr Code im erwarteten Zustand befindet, wenn Nachrichten eintreffen.
Wenn Sie beispielsweise eine Antwort erhalten, während der `signalingState` nicht `"have-local-offer"` ist, wissen Sie, dass etwas nicht stimmt, da Sie Antworten nur nach der Erstellung eines Angebots, aber bevor eine Antwort empfangen und in [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wurde, erhalten sollten. Ihr Code wird zuverlässiger, wenn Sie auf nicht übereinstimmende Zustände wie diesen achten und sie entsprechend behandeln.

Dieser Wert kann auch während des Debuggings nützlich sein.

Zudem wird, wenn sich der Wert dieser Eigenschaft ändert, ein [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz gesendet.

## Wert

Die erlaubten String-Werte sind:

- `stable`
  - : Es findet kein laufender Austausch von Angebot und Antwort statt.
    Dies kann bedeuten, dass das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt neu ist, in diesem Fall sind sowohl die [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) als auch die [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) `null`;
    es kann auch bedeuten, dass die Verhandlung abgeschlossen ist und eine Verbindung hergestellt wurde.
- `have-local-offer`
  - : Der lokale Peer hat [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen und dabei SDP übergeben, das ein Angebot darstellt (gewöhnlich erstellt durch Aufrufen von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)), und das Angebot wurde erfolgreich angewendet.
- `have-remote-offer`
  - : Der entfernte Peer hat ein Angebot erstellt und es über den Signalisierungsserver an den lokalen Peer geliefert, der das Angebot durch Aufrufen von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) als entfernte Beschreibung eingestellt hat.
- `have-local-pranswer`
  - : Das vom entfernten Peer gesendete Angebot wurde angewendet und eine Antwort wurde erstellt (normalerweise durch Aufrufen von [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)) und durch Aufrufen von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) angewendet.
    Diese vorläufige Antwort beschreibt die unterstützten Medienformate und dergleichen, umfasst jedoch möglicherweise nicht alle ICE-Kandidaten.
    Weitere Kandidaten werden später separat geliefert.
- `have-remote-pranswer`
  - : Eine vorläufige Antwort wurde als Antwort auf ein zuvor gesendetes und durch Aufrufen von `setLocalDescription()` etabliertes Angebot empfangen und erfolgreich angewendet.
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
