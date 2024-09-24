---
title: "RTCPeerConnection: icecandidate Ereignis"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: 7e6004025020f539c6790a08d60eb9bff42276a0
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`** Ereignis wird an eine {{domxref("RTCPeerConnection")}} gesendet, wenn:

- Ein {{domxref("RTCIceCandidate")}} identifiziert und dem lokalen Peer durch einen Aufruf von {{domxref("RTCPeerConnection.setLocalDescription()")}} hinzugefügt wurde,
- Jeder {{domxref("RTCIceCandidate")}}, der einem bestimmten Benutzername-Fragment und einer Passwortkombination (einer **Generation**) zugeordnet ist, identifiziert und hinzugefügt wurde, und
- Alle ICE-Sammlungen auf allen Übertragungen abgeschlossen sind.

In den ersten beiden Fällen sollte der Ereignis-Handler den Kandidaten über den Signalisierungskanal an den entfernten Peer übertragen, damit der entfernte Peer diesen zu seinem Set an entfernten Kandidaten hinzufügen kann.

Dieses Ereignis ist nicht abfangbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("icecandidate", (event) => {});

onicecandidate = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCPeerConnectionIceEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Ereigniseigenschaften

_Ein {{domxref("RTCPeerConnectionIceEvent")}} als ein {{domxref("Event")}} implementiert auch die folgende Eigenschaft_.

- {{domxref("RTCPeerConnectionIceEvent.candidate")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("RTCIceCandidate")}} an, der mit dem Ereignis verbunden ist.
    Dies wird eine leere Zeichenkette sein, wenn das Ereignis anzeigt, dass es keine weiteren Kandidaten in dieser **Generation** gibt, oder `null`, wenn alle ICE-Sammlungen auf allen Übertragungen abgeschlossen sind.

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate` Ereignis bei einer {{domxref("RTCPeerConnection")}} ausgelöst wird.

### Teilen eines neuen Kandidaten

Die Mehrheit der `icecandidate` Ereignisse wird ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an den entfernten Peer übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* während dieser Verhandlung kommen keine weiteren Kandidaten */
  }
};
```

Der entfernte Peer wird nach Erhalt des Kandidaten diesen durch einen Aufruf von {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}, bei dem die {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}}-Zeichenkette übergeben wird, die Sie über den Signalisierungsserver gesendet haben, zu seinem Kandidatenpool hinzufügen.

### Indizierung des Endes einer Generation von Kandidaten

Wenn eine ICE-Verhandlungssitzung keine weiteren Kandidaten für einen bestimmten {{domxref("RTCIceTransport")}} vorschlagen kann, ist die Sammlung für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate` Ereignis signalisiert, dessen {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} Zeichenfolge leer ist (`""`).

Sie sollten dies dem entfernten Peer wie jeden Standardkandidaten zustellen, wie oben unter [Teilen eines neuen Kandidaten](#teilen_eines_neuen_kandidaten) beschrieben. Dies stellt sicher, dass der entfernte Peer auch die End-of-Candidates-Benachrichtigung erhält. Wie Sie im Code im vorherigen Abschnitt sehen, wird jeder Kandidat an den anderen Peer gesendet, einschließlich solcher, die möglicherweise eine leere Kandidatenzeichenfolge haben. Nur Kandidaten, für die die Eigenschaft {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die End-of-Candidates-Anzeige ist in [Abschnitt 9.3 des Trickle ICE Entwurfsspezifikations](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer ändern kann, während die Spezifikation in wiederholten Entwürfen durchläuft).

### Indizierung, dass die ICE-Sammlung abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten abgeschlossen haben und der Wert des {{domxref("RTCPeerConnection")}} Objekts {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} in `complete` übergeht, wird ein `icecandidate` Ereignis mit dem Wert von `candidate` auf `null` gesetzt gesendet.

Dieses Signal existiert aus Gründen der Abwärtskompatibilität und muss _nicht_ an den entfernten Peer weitergeleitet werden (weshalb der Code-Ausschnitt oben überprüft, ob `event.candidate` `null` ist, bevor der Kandidat weitergeleitet wird).

Wenn Sie besondere Maßnahmen ergreifen müssen, wenn keine weiteren Kandidaten erwartet werden, ist es viel besser, den ICE-Sammlungszustand zu beobachten, indem Sie auf {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} Ereignisse achten:

```js
pc.addEventListener("icegatheringstatechange", (ev) => {
  switch (pc.iceGatheringState) {
    case "new":
      /* Sammlung beginnt entweder gerade oder wurde zurückgesetzt */
      break;
    case "gathering":
      /* Sammlung hat begonnen oder läuft */
      break;
    case "complete":
      /* Sammlung ist beendet */
      break;
  }
});
```

Wie Sie in diesem Beispiel sehen können, informiert Sie das `icegatheringstatechange` Ereignis, wenn der Wert der {{domxref("RTCPeerConnection")}} Eigenschaft {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} aktualisiert wurde. Wenn dieser Wert jetzt `complete` ist, wissen Sie, dass die ICE-Sammlung gerade beendet wurde.

Dies ist ein verlässlicherer Ansatz als das Betrachten der einzelnen ICE-Nachrichten, um eine zu finden, die anzeigt, dass die ICE-Sitzung beendet ist.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate` Ereignis, das eine Funktion namens `sendMessage()` verwendet, um eine Antwort an den entfernten Peer über den Signalisierungsserver zu erstellen und zu senden.

Zuerst ein Beispiel mit {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

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

Sie können auch die `onicecandidate` Ereignis-Handler-Eigenschaft direkt setzen:

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
