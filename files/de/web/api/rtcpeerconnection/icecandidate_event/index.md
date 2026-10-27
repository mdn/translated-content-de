---
title: "RTCPeerConnection: icecandidate-Ereignis"
short-title: icecandidate
slug: Web/API/RTCPeerConnection/icecandidate_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`icecandidate`**-Ereignis wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn:

- ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) ermittelt und durch einen Aufruf von [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) zum lokalen Peer hinzugefügt wurde,
- alle [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekte, die einer bestimmten Kombination aus Username-Fragment und Passwort zugeordnet sind (einer **Generation**), ermittelt und hinzugefügt wurden oder
- das ICE-Sammeln auf allen Transporten abgeschlossen ist.

In den ersten beiden Fällen sollte der Ereignishandler den Kandidaten über den Signalisierungskanal an den entfernten Peer übertragen, damit dieser ihn zu seinen entfernten Kandidaten hinzufügen kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("icecandidate", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onicecandidate = (event) => { }
```

## Ereignistyp

Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCPeerConnectionIceEvent")}}

## Beschreibung

Es gibt drei Gründe, aus denen das `icecandidate`-Ereignis auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ausgelöst wird.

### Einen neuen Kandidaten übermitteln

Die meisten `icecandidate`-Ereignisse werden ausgelöst, um anzuzeigen, dass ein neuer Kandidat gesammelt wurde. Dieser Kandidat muss über den Signalisierungskanal, den Ihr Code verwaltet, an den entfernten Peer übermittelt werden.

```js
rtcPeerConnection.onicecandidate = (event) => {
  if (event.candidate !== null) {
    sendCandidateToRemotePeer(event.candidate);
  } else {
    /* there are no more candidates coming during this negotiation */
  }
};
```

Nach Empfang des Kandidaten fügt der entfernte Peer ihn seinem Kandidatenpool hinzu, indem er [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufruft und dabei den [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-String übergibt, den Sie über den Signalisierungsserver weitergeleitet haben.

### Das Ende einer Kandidatengeneration anzeigen

Wenn einer ICE-Aushandlungssitzung für einen bestimmten [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) keine weiteren Kandidaten mehr zur Verfügung stehen, ist das Sammeln für eine **Generation** von Kandidaten abgeschlossen. Dies wird durch ein `icecandidate`-Ereignis angezeigt, dessen [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-String leer ist (`""`).

Sie sollten dieses Ereignis wie jeden gewöhnlichen Kandidaten an den entfernten Peer übermitteln, wie oben unter [Einen neuen Kandidaten übermitteln](#einen_neuen_kandidaten_übermitteln) beschrieben. So erhält auch der entfernte Peer die Benachrichtigung über das Ende der Kandidaten. Wie Sie im Code des vorherigen Abschnitts sehen, wird jeder Kandidat an den anderen Peer gesendet, auch wenn sein Kandidaten-String leer ist. Nur Kandidaten, bei denen die [`candidate`](/de/docs/Web/API/RTCPeerConnectionIceEvent/candidate)-Eigenschaft des Ereignisses `null` ist, werden nicht über die Signalisierungsverbindung weitergeleitet.

Die Anzeige des Kandidatenendes ist in [Abschnitt 9.3 des Trickle-ICE-Spezifikationsentwurfs](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice-02#section-9.3) beschrieben (beachten Sie, dass sich die Abschnittsnummer mit weiteren Entwurfsfassungen der Spezifikation ändern kann).

### Anzeigen, dass das ICE-Sammeln abgeschlossen ist

Sobald alle ICE-Transporte das Sammeln von Kandidaten beendet haben und der Wert von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts zu `complete` gewechselt ist, wird ein `icecandidate`-Ereignis gesendet, bei dem `candidate` auf `null` gesetzt ist.

Dieses Signal dient der Abwärtskompatibilität und muss _nicht_ an den entfernten Peer weitergeleitet werden. Deshalb prüft das obige Codebeispiel vor dem Weiterleiten des Kandidaten, ob `event.candidate` den Wert `null` hat.

Wenn Sie besondere Aktionen ausführen müssen, sobald keine weiteren Kandidaten mehr zu erwarten sind, sollten Sie stattdessen den ICE-Sammelzustand anhand von [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignissen beobachten:

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

Wie dieses Beispiel zeigt, informiert Sie das `icegatheringstatechange`-Ereignis darüber, dass der Wert der Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aktualisiert wurde. Hat der Wert nun `complete`, wissen Sie, dass das ICE-Sammeln gerade beendet wurde.

Dieser Ansatz ist zuverlässiger, als die einzelnen ICE-Nachrichten nach einem Hinweis auf das Ende der ICE-Sitzung zu durchsuchen.

## Beispiele

Dieses Beispiel erstellt einen einfachen Handler für das `icecandidate`-Ereignis. Er verwendet eine Funktion namens `sendMessage()`, um über den Signalisierungsserver eine Antwort an den entfernten Peer zu erstellen und zu senden.

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

Sie können die Ereignishandler-Eigenschaft `onicecandidate` auch direkt setzen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onicecandidate` hinzugefügte Ereignislistener ersetzt werden:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
