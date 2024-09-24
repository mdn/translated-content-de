---
title: "RTCPeerConnection: signalingState-Eigenschaft"
short-title: signalingState
slug: Web/API/RTCPeerConnection/signalingState
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`signalingState`**-Eigenschaft der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beschreibt, während eine Verbindung zu einem anderen Peer hergestellt oder wiederhergestellt wird. Siehe [Signalisierung](/de/docs/Web/API/WebRTC_API/Session_lifetime#signaling) auf unserer Seite zur WebRTC-Sitzungslebensdauer.

Da der Signalisierungsprozess eine Zustandsmaschine ist, kann es helfen, zu überprüfen, ob Ihr Code sich im erwarteten Zustand befindet, wenn Nachrichten eintreffen, um unerwartete und vermeidbare Fehler zu vermeiden.
Zum Beispiel, wenn Sie eine Antwort erhalten, während der `signalingState` nicht `"have-local-offer"` ist, wissen Sie, dass etwas nicht stimmt, da Sie Antworten nur nach dem Erstellen eines Angebots, aber bevor eine Antwort empfangen und in {{domxref("RTCPeerConnection.setLocalDescription()")}} übergeben wurde, erhalten sollten. Ihr Code wird zuverlässiger, wenn Sie auf nicht übereinstimmende Zustände wie diesen achten und sie angemessen behandeln.

Dieser Wert kann auch während der Fehlersuche nützlich sein.

Zusätzlich wird ein {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}-Ereignis an die {{domxref("RTCPeerConnection")}}-Instanz gesendet, wenn sich der Wert dieser Eigenschaft ändert.

## Wert

Die erlaubten Zeichenfolgenwerte sind:

- `stable`
  - : Es findet kein laufender Austausch von Angeboten und Antworten statt.
    Dies kann bedeuten, dass das {{domxref("RTCPeerConnection")}}-Objekt neu ist, in welchem Fall sowohl die {{domxref("RTCPeerConnection.localDescription", "localDescription")}} als auch die {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} `null` sind;
    es kann auch bedeuten, dass die Verhandlung abgeschlossen ist und eine Verbindung hergestellt wurde.
- `have-local-offer`
  - : Der lokale Peer hat {{domxref("RTCPeerConnection.setLocalDescription()")}} aufgerufen und dabei SDP übergeben, das ein Angebot darstellt (normalerweise erstellt durch Aufrufen von {{domxref("RTCPeerConnection.createOffer()")}}), und das Angebot wurde erfolgreich angewendet.
- `have-remote-offer`
  - : Der entfernte Peer hat ein Angebot erstellt und den Signalisierungsserver verwendet, um es an den lokalen Peer zu übermitteln, der das Angebot als entfernte Beschreibung durch Aufrufen von {{domxref("RTCPeerConnection.setRemoteDescription()")}} gesetzt hat.
- `have-local-pranswer`
  - : Das vom entfernten Peer gesendete Angebot wurde angewendet und eine Antwort wurde erstellt (normalerweise durch Aufrufen von {{domxref("RTCPeerConnection.createAnswer()")}}) und durch Aufrufen von {{domxref("RTCPeerConnection.setLocalDescription()")}} angewendet.
    Diese vorläufige Antwort beschreibt die unterstützten Medienformate und so weiter, enthält jedoch möglicherweise noch nicht eine vollständige Reihe von ICE-Kandidaten.
    Weitere Kandidaten werden später separat geliefert.
- `have-remote-pranswer`
  - : Eine vorläufige Antwort wurde empfangen und erfolgreich auf ein zuvor gesendetes und durch Aufrufen von `setLocalDescription()` etabliertes Angebot angewendet.
- `closed`
  - : Die {{domxref("RTCPeerConnection")}} wurde geschlossen.

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
- {{domxref("RTCPeerConnection")}}
- {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
