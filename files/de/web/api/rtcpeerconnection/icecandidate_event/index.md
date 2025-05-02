---
title: "RTCPeerConnection: icecandidate Ereignis"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`** Ereignis wird an einen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) identifiziert und dem lokalen Peer durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) hinzugefügt wurde,
- Jeder [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate), der mit einem bestimmten Benutzername-Fragment und Passwort-Kombination (eine **Generation**) korreliert ist, so identifiziert und hinzugefügt wurde, und
- Alle ICE-Sammlungen auf allen Transporten abgeschlossen sind.

In den ersten beiden Fällen sollte der Ereignishandler den Kandidaten über den Signalisierungskanal an den Remote-Peer übertragen, damit der Remote-Peer ihn seiner Menge an Remote-Kandidaten hinzufügen kann.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("icecandidate", (event) => { })

onicecandidate = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Ereigniseigenschaften

_Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent) ist ein [`Event`](/de/docs/Web/API/Event), daher implementiert dieses Ereignis auch die folgende Eigenschaft_.

- [`RTCPeerConnectionIceEvent.candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) {{ReadOnlyInline}}
  - : Gibt den [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) an, der den mit dem Ereignis assoziierten Kandidaten enthält.
    Dies wird der leere String sein, wenn das Ereignis anzeigt, dass keine weiteren Kandidaten in dieser **Generation** vorkommen, oder `null`, wenn alle ICE-Sammlungen auf allen Transporten abgeschlossen sind.

## Beschreibung

Es gibt drei Gründe, warum das `icecandidate` Ereignis auf einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Teilen eines neuen Kandidaten

Die Mehrheit der `icecandidate` Ereignisse wird ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an den Remote-Peer übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Der Remote-Peer wird, nachdem er den Kandidaten erhalten hat, den Kandidaten zu seinem Kandidatenpool hinzufügen, indem er [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft und den von Ihnen über den Signalisierungsserver übermittelten [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) String übergibt.

### Anzeige des Endes einer Generation von Kandidaten

Wenn eine ICE Aushandlungs-Session keine Kandidaten mehr für einen bestimmten [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) vorschlagen kann, ist die Sammlung für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate` Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) String leer ist (`""`).

Sie sollten dies an den Remote-Peer genauso wie einen normalen Kandidaten übermitteln, wie oben unter [Teilen eines neuen Kandidaten](#teilen_eines_neuen_kandidaten) beschrieben. Dies stellt sicher, dass der Remote-Peer auch die Benachrichtigung über das Ende der Kandidaten erhält. Wie Sie im letzten Abschnitt im Code sehen, wird jeder Kandidat an den anderen Peer gesendet, einschließlich solcher, die möglicherweise einen leeren Kandidaten-String haben. Nur Kandidaten, für die die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate) Eigenschaft des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die Anzeige des Endes der Kandidaten ist in [Abschnitt 9.3 des Trickel-ICE-Entwurfsspezifikations](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer ändern kann, da die Spezifikation fortlaufend überarbeitet wird).

### Anzeige, dass die ICE-Sammlung abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten abgeschlossen haben und der Wert des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekts [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) auf `complete` übergegangen ist, wird ein `icecandidate` Ereignis mit dem Wert `candidate` auf `null` gesetzt.

Dieses Signal existiert für Zwecke der Rückwärtskompatibilität und muss _nicht_ weiter an den Remote-Peer übermittelt werden (weshalb der obige Code-Schnipsel prüft, ob `event.candidate` `null` ist, bevor der Kandidat weitergeleitet wird).

Wenn Sie spezielle Aktionen ausführen müssen, wenn keine weiteren Kandidaten erwartet werden, ist es viel zuverlässiger, den Status der ICE-Sammlung zu beobachten, indem Sie auf [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignisse achten:

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

Dies ist ein zuverlässigerer Ansatz als das Prüfen der einzelnen ICE-Nachrichten, um zu erkennen, dass die ICE-Session beendet ist.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate` Ereignis, der eine Funktion namens `sendMessage()` verwendet, um eine Antwort an den entfernten Peer über den Signalisierungsserver zu erstellen und zu senden.

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

Sie können die `onicecandidate` Ereignishandler-Eigenschaft auch direkt setzen:

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
