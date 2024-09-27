---
title: "RTCPeerConnection: icecandidate Ereignis"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: 7e6004025020f539c6790a08d60eb9bff42276a0
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`** Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) identifiziert und dem lokalen Gegenstück durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) hinzugefügt wurde,
- Jeder [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit einem bestimmten Benutzernamen-Fragment- und Passwort-Kombination (einer **Generation**) korreliert ist, so identifiziert und hinzugefügt wurde, und
- Die gesamte ICE-Sammlung auf allen Transporten abgeschlossen ist.

In den ersten beiden Fällen sollte der Ereignishandler den Kandidaten über den Signalisierungskanal an das entfernte Gegenstück übermitteln, damit das entfernte Gegenstück ihn zu seinem Satz von entfernten Kandidaten hinzufügen kann.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("icecandidate", (event) => {});

onicecandidate = (event) => {};
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Ereigniseigenschaften

_Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das von [`Event`](/de/docs/Web/API/Event) erbt, implementiert auch die folgende Eigenschaft_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der den mit dem Ereignis verbundenen Kandidaten enthält.
    Dies wird die leere Zeichenfolge sein, wenn das Ereignis anzeigt, dass es in dieser **Generation** keine weiteren Kandidaten mehr gibt, oder `null`, wenn die gesamte ICE-Sammlung auf allen Transporten abgeschlossen ist.

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate` Ereignis bei einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Einen neuen Kandidaten teilen

Die Mehrheit der `icecandidate` Ereignisse werden ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an das entfernte Gegenstück übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Das entfernte Gegenstück wird, sobald es den Kandidaten erhält, den Kandidaten durch den Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) seinem Kandidatenpool hinzufügen, wobei es die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Zeichenfolge übergibt, die Sie über den Signalisierungsserver weitergeleitet haben.

### Das Ende einer Generation von Kandidaten anzeigen

Wenn eine ICE-Verhandlungssitzung keine Kandidaten mehr für einen gegebenen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) vorschlagen kann, hat sie die Sammlung für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate` Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Zeichenfolge leer ist (`""`).

Sie sollten dies dem entfernten Gegenstück genauso wie einen Standardkandidaten übermitteln, wie unter [Einen neuen Kandidaten teilen](#einen_neuen_kandidaten_teilen) beschrieben. Dies stellt sicher, dass das entfernte Gegenstück auch die Benachrichtigung über das Ende der Kandidaten erhält. Wie Sie im Code im vorherigen Abschnitt sehen, wird jeder Kandidat an das andere Gegenstück gesendet, einschließlich derer, die möglicherweise eine leere Kandidatenzeichenfolge haben. Nur Kandidaten, für die die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Eigenschaft des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die End-of-Candidates-Anzeige wird in [Abschnitt 9.3 des Trickle ICE-Entwurfsspezifikations](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer ändern kann, da die Spezifikation durch wiederholte Entwürfe geht).

### Anzeigen, dass die ICE-Sammlung abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten abgeschlossen haben und der Wert des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekts [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) den Übergang zu `complete` gemacht hat, wird ein `icecandidate` Ereignis gesendet, bei dem der Wert von `candidate` auf `null` gesetzt ist.

Dieses Signal existiert aus Gründen der Abwärtskompatibilität und muss _nicht_ an das entfernte Gegenstück weitergeleitet werden (weshalb der obige Code-Schnipsel überprüft, ob `event.candidate` `null` ist, bevor der Kandidat weitergeleitet wird).

Wenn Sie besondere Aktionen ausführen müssen, wenn keine weiteren Kandidaten erwartet werden, ist es viel besser, den ICE-Sammlungsstatus zu überwachen, indem Sie auf [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignisse achten:

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

Wie Sie in diesem Beispiel sehen, lässt Sie das `icegatheringstatechange` Ereignis wissen, wann der Wert der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) aktualisiert wurde. Wenn dieser Wert jetzt `complete` ist, wissen Sie, dass die ICE-Sammlung gerade beendet wurde.

Dies ist ein zuverlässigerer Ansatz, als die einzelnen ICE-Nachrichten auf ein Ende der ICE-Session zu untersuchen.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate` Ereignis, der eine Funktion namens `sendMessage()` verwendet, um eine Antwort an das entfernte Gegenstück über den Signalisierungsserver zu erstellen und zu senden.

Zuerst ein Beispiel unter Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

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

Sie können auch die `onicecandidate` Ereignishandler-Eigenschaft direkt setzen:

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
- [Signalisierung und Videoanruf](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
