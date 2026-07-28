---
title: "RTCPeerConnection: icecandidate-Event"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) identifiziert und dem lokalen Peer durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) hinzugefügt wurde,
- Jeder [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit einer bestimmten Benutzernamen-Fragment- und Passwortkombination (eine **Generation**) korreliert ist, so identifiziert und hinzugefügt wurde, und
- Alle ICE-Sammlungen auf allen Transportwegen abgeschlossen sind.

In den ersten beiden Fällen sollte der Event-Handler den Kandidaten über den Signalisierungskanal an den entfernten Peer übertragen, damit der entfernte Peer ihn zu seinem Satz von entfernten Kandidaten hinzufügen kann.

Dieses Ereignis kann nicht abgebrochen werden und bildet keine Blaseneffekte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("icecandidate", (event) => { })

onicecandidate = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate`-Ereignis auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Weitergabe eines neuen Kandidaten

Die Mehrheit der `icecandidate`-Ereignisse wird ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den von Ihrem Code verwalteten Signalisierungskanal an den entfernten Peer übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Der entfernte Peer wird nach Empfang des Kandidaten diesen durch Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) seiner Kandidatenmenge hinzufügen, indem er den über den Signalisierungsserver übermittelten [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-String übergibt.

### Anzeige des Endes einer Generation von Kandidaten

Wenn eine ICE-Verhandlungssitzung keine weiteren Kandidaten für einen bestimmten [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) vorschlagen kann, wurde das Sammeln für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate`-Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-String leer (`""`) ist.

Sie sollten dies an den entfernten Peer wie jeden Standardkandidaten weiterleiten, wie oben unter [Weitergabe eines neuen Kandidaten](#weitergabe_eines_neuen_kandidaten) beschrieben. Dies stellt sicher, dass der entfernte Peer ebenfalls die Benachrichtigung über das Ende der Kandidaten erhält. Wie Sie im Code im vorherigen Abschnitt sehen, wird jeder Kandidat an den anderen Peer gesendet, einschließlich aller, die möglicherweise einen leeren Kandidaten-String haben. Nur Kandidaten, für die die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-Eigenschaft des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die Anzeige des Endes von Kandidaten wird in [Abschnitt 9.3 des Trickle ICE-Entwurfs](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer ändern kann, während der Entwurf wiederholt durchläuft).

### Anzeige, dass die ICE-Sammlung abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten abgeschlossen haben und der Wert des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) auf `complete` übergegangen ist, wird ein `icecandidate`-Ereignis mit dem Wert von `candidate` auf `null` gesendet.

Dieses Signal existiert aus Gründen der Abwärtskompatibilität und muss _nicht_ an den entfernten Peer weitergegeben werden (weshalb der obige Code-Schnipsel prüft, ob `event.candidate` `null` ist, bevor der Kandidat weitergeleitet wird).

Wenn Sie besondere Aktionen ausführen müssen, wenn keine weiteren Kandidaten zu erwarten sind, sollten Sie besser den ICE-Sammlungsstatus überwachen, indem Sie auf [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse achten:

```js
pc.addEventListener("icegatheringstatechange", (ev) => {
  switch (pc.iceGatheringState) {
    case "new":
      /* gathering is either just starting or has been reset */
      break;
    case "gathering":
      /* gathering has begun or is ongoing */
      break;
    case "complete":
      /* gathering has ended */
      break;
  }
});
```

Wie Sie in diesem Beispiel sehen, lässt Sie das `icegatheringstatechange`-Ereignis wissen, wann sich der Wert der [`iceGatheringState`]-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) aktualisiert hat. Wenn dieser nun `complete` ist, wissen Sie, dass die ICE-Sammlung gerade beendet wurde.

Dies ist ein zuverlässigerer Ansatz, als auf die einzelnen ICE-Nachrichten zu schauen, die anzeigen, dass die ICE-Sitzung beendet ist.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handlers für das `icecandidate`-Ereignis, der eine Funktion namens `sendMessage()` verwendet, um eine Antwort an den entfernten Peer über den Signalisierungsserver zu erstellen und zu senden.

Zuerst ein Beispiel unter Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
pc.addEventListener("icecandidate", (ev) => {
  if (ev.candidate !== null) {
    sendMessage({
      type: "new-ice-candidate",
      candidate: ev.candidate,
    });
  }
});
```

Sie können auch die `onicecandidate`-Ereignishandler-Eigenschaft direkt setzen:

```js
pc.onicecandidate = (ev) => {
  if (ev.candidate !== null) {
    sendMessage({
      type: "new-ice-candidate",
      candidate: ev.candidate,
    });
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
