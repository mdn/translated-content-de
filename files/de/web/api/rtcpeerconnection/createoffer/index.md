---
title: "RTCPeerConnection: createOffer()-Methode"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`createOffer()`**-Methode des {{domxref("RTCPeerConnection")}}-Interfaces initiiert die Erstellung eines {{Glossary("SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.

Das SDP-Angebot enthält Informationen über alle {{domxref("MediaStreamTrack")}}-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, die vom Browser unterstützten Codecs und Optionen sowie alle vom {{Glossary("ICE")}}-Agenten bereits gesammelten Kandidaten, um sie über den Signalisierungskanal an einen potenziellen Peer zu senden, der eine Verbindung anfordert oder die Konfiguration einer bestehenden Verbindung aktualisieren möchte.

Der Rückgabewert ist ein {{jsxref("Promise")}}, das, wenn das Angebot erstellt wurde, mit einem [RTCSessionDescriptionInit](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription#options)-Wörterbuch aufgelöst wird, das das neu erstellte Angebot enthält.

## Syntax

```js-nolint
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback) // veraltet
createOffer(successCallback, failureCallback, options) // veraltet
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden angeforderten Optionen für das Angebot angibt:

    - `iceRestart` {{optional_inline}}
      - : Um ICE bei einer aktiven Verbindung neu zu starten, setzen Sie dies auf `true`.
        Dies wird dazu führen, dass das zurückgegebene Angebot andere Anmeldedaten hat als die bereits vorhandenen.
        Wenn Sie dann das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE nicht neu zu starten.
        **Die Standardeinstellung ist `false`**.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Audios. Zum Beispiel kann es verwendet werden, um sicherzustellen, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Videos. Zum Beispiel kann es verwendet werden, um sicherzustellen, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und Dokumentationen könnten Sie eine rückrufbasierte Version dieser Funktion sehen.
Diese ist veraltet und ihre Verwendung wird **stark** abgeraten.
Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `createOffer()` zu nutzen.
Die Parameter für die ältere Form von `createOffer()` werden im Folgenden beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes {{domxref("RTCSessionDescription")}}-Objekt übergeben bekommt, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes {{domxref("DOMException")}}-Objekt übergeben bekommt, das erklärt, warum die Anfrage zur Erstellung eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die angeforderten Optionen für das Angebot angibt.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Erfüllungs-Handler ein Objekt erhält, das mit dem [RTCSessionDescriptionInit](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription#options)-Wörterbuch übereinstimmt und das SDP enthält, das das erzeugte Angebot beschreibt.
Dieses empfangene Angebot sollte über den Signalisierungsserver an einen entfernten Peer übermittelt werden.

### Ausnahmen

Diese Ausnahmen werden durch Zurückweisen des zurückgegebenen Promise zurückgegeben.
Ihr Ablehnungs-Handler sollte die erhaltene Ausnahme untersuchen, um zu bestimmen, welche aufgetreten ist.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn kein Zertifikat oder Satz von Zertifikaten bereitgestellt wurde, um die Verbindung zu sichern, und `createOffer()` nicht in der Lage war, ein neues zu erstellen.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Überprüfen des Systemzustands, um die Verfügbarkeit von Ressourcen zur Erstellung des Angebots zu bestimmen, aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier sehen wir einen Handler für das {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}-Ereignis, der das Angebot erstellt und es über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Bitte beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das ganz Ihnen überlassen bleibt.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON")}}-Nachricht mit einem `type`-Feld und dem Wert "video-offer" an den anderen Peer zu senden.
> Der Inhalt des Objekts, das an die `sendToServer()`-Funktion übergeben wird, sowie alles andere im Promise-Erfüllungs-Handler hängen vollständig von Ihrem Design ab.

```js
myPeerConnection
  .createOffer()
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    sendToServer({
      name: myUsername,
      target: targetUsername,
      type: "video-offer",
      sdp: myPeerConnection.localDescription,
    });
  })
  .catch((reason) => {
    // Ein Fehler trat auf, also handle das Scheitern der Verbindung
  });
```

In diesem Code wird das Angebot erstellt und, sobald es erfolgreich ist, wird das lokale Ende der {{domxref("RTCPeerConnection")}} konfiguriert, um übereinzustimmen, indem das Angebot (das durch ein Objekt repräsentiert wird, das mit [RTCSessionDescriptionInit](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription#options) übereinstimmt) in {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} übergeben wird.
Sobald das erledigt ist, wird das Angebot über den Signalisierungskanal an das entfernte System gesendet, in diesem Fall durch eine benutzerdefinierte Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation, daher spielt es keine Rolle, wie das Angebot gesendet wird, solange sowohl der Anrufer als auch der potenzielle Empfänger denselben verwenden.

Nutzen Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Siehe [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für das vollständige Beispiel, aus dem dieser Ausschnitt stammt; dies wird Ihnen helfen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
