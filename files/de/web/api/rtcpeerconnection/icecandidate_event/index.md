---
title: "RTCPeerConnection: icecandidate Ereignis"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: 7e6004025020f539c6790a08d60eb9bff42276a0
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`** Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) erkannt und dem lokalen Teilnehmer hinzugefügt wurde durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription),
- Jeder [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit einem bestimmten Benutzernamen-Fragment und einer Passwortkombination (eine **Generation**) assoziiert ist, so identifiziert und hinzugefügt wurde, und
- Das gesamte ICE-Sammeln auf allen Transporten abgeschlossen ist.

In den ersten beiden Fällen sollte der Ereignis-Handler den Kandidaten über den Signalisierungskanal an den entfernten Peer übermitteln, damit dieser ihn seinem Satz an entfernten Kandidaten hinzufügen kann.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("icecandidate", (event) => {});

onicecandidate = (event) => {};
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Ereigniseigenschaften

_Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das ein [`Event`](/de/docs/Web/API/Event) ist, implementiert auch die folgende Eigenschaft_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der den mit dem Ereignis verbundenen Kandidaten enthält.
  Dies wird der leere String sein, wenn das Ereignis anzeigt, dass keine weiteren Kandidaten in dieser **Generation** erwartet werden, oder `null`, wenn das gesamte ICE-Sammeln auf allen Transporten abgeschlossen ist.

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate` Ereignis bei einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Teilen eines neuen Kandidaten

Die Mehrheit der `icecandidate` Ereignisse wird ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an den entfernten Peer übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Der entfernte Peer wird, nachdem er den Kandidaten erhalten hat, den Kandidaten seinem Kandidatenpool hinzufügen, indem er [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft und den [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) String übergibt, den Sie über den Signalisierungsserver weitergeleitet haben.

### Anzeigen des Endes einer Kandidatengeneration

Wenn eine ICE-Verhandlungssitzung keine Kandidaten mehr vorschlagen kann für einen gegebenen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), hat sie das Sammeln für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate` Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) String leer ist (`""`).

Sie sollten dies an den entfernten Peer übermitteln, genauso wie jeden Standardkandidaten, wie oben unter [Teilen eines neuen Kandidaten](#teilen_eines_neuen_kandidaten) beschrieben. Dies stellt sicher, dass der entfernte Peer ebenfalls die End-of-Candidates-Benachrichtigung erhält. Wie Sie im Code im vorherigen Abschnitt sehen, wird jeder Kandidat an den anderen Peer gesendet, einschließlich solcher, die möglicherweise einen leeren Kandidatenstring haben. Nur Kandidaten, für die die Eigenschaft [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die End-of-Candidates-Anzeige wird in [Abschnitt 9.3 des Trickle ICE Entwurfsspezifikations](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer ändern kann, da die Spezifikation durch wiederholte Entwürfe geht).

### Anzeigen, dass das ICE-Sammeln abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten beendet haben und der Wert des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekts [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) den Übergang zu `complete` gemacht hat, wird ein `icecandidate` Ereignis mit dem Wert `candidate` auf `null` gesetzt gesendet.

Dieses Signal existiert aus Gründen der Abwärtskompatibilität und muss _nicht_ an den entfernten Peer weitergeleitet werden (weshalb der oben gezeigte Code überprüft, ob `event.candidate` `null` ist, bevor der Kandidat weitergesendet wird).

Wenn Sie besondere Aktionen ausführen müssen, wenn keine weiteren Kandidaten erwartet werden, ist es viel besser, den Status des ICE-Sammelns zu beobachten, indem Sie auf [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignisse achten:

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

Wie Sie in diesem Beispiel sehen, lässt Sie das `icegatheringstatechange` Ereignis wissen, wann der Wert der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) aktualisiert wurde. Wenn dieser Wert jetzt `complete` ist, wissen Sie, dass das ICE-Sammeln gerade beendet wurde.

Dies ist ein zuverlässigerer Ansatz, als die einzelnen ICE-Meldungen auf eine zu überprüfen, die anzeigt, dass die ICE-Sitzung beendet ist.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate` Ereignis, der eine Funktion namens `sendMessage()` verwendet, um eine Antwort an den entfernten Peer über den Signalisierungsserver zu erstellen und zu senden.

Zuerst ein Beispiel mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
pc.addEventListener(
  "icecandidate",
  (ev) => {
    if (ev.candidate !== null) {
      sendMessage({
        type: "new-ice-candidate",
        candidate: ev.candidate,
      });
    }
  },
  false,
);
```

Sie können auch die `onicecandidate` Event-Handler-Eigenschaft direkt setzen:

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
