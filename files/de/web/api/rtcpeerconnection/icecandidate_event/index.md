---
title: "RTCPeerConnection: icecandidate-Event"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`**-Event wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) identifiziert und mittels eines Aufrufs von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) zum lokalen Partner hinzugefügt wurde,
- Jeder [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit einer bestimmten Benutzername-Passwort-Kombination (eine **Generation**) korreliert ist, identifiziert und hinzugefügt wurde, und
- Das gesamte ICE-Gathering auf allen Transporten abgeschlossen ist.

In den ersten beiden Fällen sollte der Ereignishandler den Kandidaten über den Signalisierungskanal an den entfernten Partner übermitteln, damit dieser ihn zu seinem Satz von entfernten Kandidaten hinzufügen kann.

Dieses Ereignis ist nicht abbruchfähig und wird nicht nach oben propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("icecandidate", (event) => { })

onicecandidate = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Ereignis-Eigenschaften

_Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent) als [`Event`](/de/docs/Web/API/Event) implementiert auch die folgende Eigenschaft_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Zeigt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der den mit dem Ereignis verbundenen Kandidaten enthält.
    Dies wird die leere Zeichenkette sein, wenn das Ereignis anzeigt, dass keine weiteren Kandidaten in dieser **Generation** zu erwarten sind, oder `null`, wenn das gesamte ICE-Gathering auf allen Transporten abgeschlossen ist.

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate`-Ereignis bei einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Teilen eines neuen Kandidaten

Die Mehrheit der `icecandidate`-Ereignisse wird ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an den entfernten Partner übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Der entfernte Partner wird, nachdem er den Kandidaten empfangen hat, ihn in seinen Kandidatenpool hinzufügen, indem er [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft und die von Ihnen über den Signalisierungsserver übergebene [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-Zeichenkette verwendet.

### Anzeige des Endes einer Kandidatengenration

Wenn eine ICE-Verhandlungssitzung keine Kandidaten mehr für einen bestimmten [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) vorschlagen kann, hat sie das Sammeln für eine **Generation** von Kandidaten abgeschlossen. Dass dies eingetreten ist, wird durch ein `icecandidate`-Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-Zeichenkette leer ist (`""`).

Sie sollten dies dem entfernten Partner genauso wie einen Standard-Kandidaten übermitteln, wie unter [Teilen eines neuen Kandidaten](#teilen_eines_neuen_kandidaten) oben beschrieben. Dies stellt sicher, dass der entfernte Partner ebenfalls die Benachrichtigung über das Ende der Kandidaten erhält. Wie im Code im vorherigen Abschnitt zu sehen, wird jeder Kandidat an den anderen Partner gesendet, einschließlich aller, die eine leere Kandidatenzeichenkette haben könnten. Nur Kandidaten, für die die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-Eigenschaft des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die Ende-der-Kandidaten-Anzeige wird in [Abschnitt 9.3 des Trickle ICE-Entwurfspezifikation](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass die Abschnittsnummer sich ändern kann, wenn die Spezifikation in wiederholten Entwürfen fortschreitet).

### Anzeige, dass das ICE-Gathering abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten abgeschlossen haben und der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts den Übergang zu `complete` gemacht hat, wird ein `icecandidate`-Ereignis mit dem Wert `candidate` auf `null` gesetzt gesendet.

Dieses Signal existiert aus Gründen der Rückwärtskompatibilität und muss _nicht_ an den entfernten Partner weitergeleitet werden (deshalb überprüft das obige Code-Snippet, ob `event.candidate` `null` ist, bevor es den Kandidaten weiterleitet).

Wenn Sie spezielle Aktionen ausführen müssen, wenn keine weiteren Kandidaten erwartet werden, ist es viel besser, den ICE-Gathering-Status zu beobachten, indem Sie auf [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse achten:

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

Wie Sie in diesem Beispiel sehen können, lässt das `icegatheringstatechange`-Ereignis Sie wissen, wenn der Wert der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aktualisiert wurde. Wenn dieser Wert jetzt `complete` ist, wissen Sie, dass das ICE-Gathering gerade beendet wurde.

Dies ist ein zuverlässigerer Ansatz, als sich auf die einzelnen ICE-Nachrichten zu verlassen, die anzeigen, dass die ICE-Sitzung abgeschlossen ist.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate`-Ereignis, der eine Funktion namens `sendMessage()` verwendet, um eine Antwort an den entfernten Partner über den Signalisierungsserver zu erstellen und zu senden.

Zunächst ein Beispiel mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

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

Sie können auch direkt die `onicecandidate`-Ereignisbehandlungseigenschaft setzen:

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
