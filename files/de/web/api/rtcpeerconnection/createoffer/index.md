---
title: "RTCPeerConnection: Methode createOffer()"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 4970c7674d31dad30717c070883a3e8f69c062b4
---

{{APIRef("WebRTC")}}

Die Methode **`createOffer()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem Remote-Peer zu starten.

Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, über vom Browser unterstützte Codecs und Optionen sowie über alle Kandidaten, die bereits vom {{Glossary("ICE", "ICE")}}-Agenten erfasst wurden. Es wird über den Signalisierungskanal an einen potenziellen Peer gesendet, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

Fügen Sie Tracks hinzu und erstellen Sie Datenkanäle, bevor Sie `createOffer()` aufrufen. Das Angebot beschreibt die Verbindung so, wie sie beim Aufruf von `createOffer()` ist. Daher werden danach vorgenommene Änderungen nicht in die Aushandlung einbezogen (das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) wird ausgelöst, wenn Sie Änderungen vornehmen, die ein neues Angebot erfordern).

## Syntax

```js-nolint
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback) // deprecated
createOffer(successCallback, failureCallback, options) // deprecated
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden für das Angebot angeforderten Optionen bereitstellt:
    - `iceRestart` {{optional_inline}}
      - : Um ICE bei einer aktiven Verbindung neu zu starten, setzen Sie dies auf `true`.
        Dadurch enthält das zurückgegebene Angebot andere Anmeldedaten als die bereits vorhandenen.
        Wenn Sie anschließend das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE daher nicht neu zu starten.
        **Der Standardwert ist `false`**. Erwägen Sie statt der Verwendung dieser Option den Aufruf von [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce), wodurch dieses Flag beim nächsten Aufruf von `createOffer()` automatisch gesetzt wird.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung von Audio. Beispielsweise kann es verwendet werden, um sicherzustellen, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung von Video. Beispielsweise kann es verwendet werden, um sicherzustellen, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und in älterer Dokumentation sehen Sie möglicherweise eine callback-basierte Version dieser Funktion.
Diese ist veraltet, und von ihrer Verwendung wird **dringend** abgeraten.
Sie sollten vorhandenen Code aktualisieren, um stattdessen die auf {{jsxref("Promise")}} basierende Version von `createOffer()` zu verwenden.
Die Parameter der älteren Form von `createOffer()` werden unten beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben wird, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben wird, das erklärt, warum die Anforderung zum Erstellen eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für das Angebot angeforderten Optionen bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String, dessen Wert `"offer"` ist.
- `sdp`
  - : Ein String, der das SDP mit der Beschreibung des generierten Angebots enthält und an den Remote-Peer übermittelt werden soll.

### Ausnahmen

Diese Ausnahmen werden durch die Ablehnung des zurückgegebenen Promise zurückgegeben.
Ihr Handler für Ablehnungen sollte die empfangene Ausnahme untersuchen, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein Zertifikat oder Satz von Zertifikaten zur Absicherung der Verbindung bereitgestellt wurde und `createOffer()` kein neues erstellen konnte.
    Da alle WebRTC-Verbindungen abgesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Untersuchung des Systemzustands zur Bestimmung der Ressourcenverfügbarkeit für die Generierung des Angebots aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier sehen wir einen Handler für das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), der das Angebot erstellt und es über einen Signalisierungskanal an das Remote-System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das vollständig Ihnen überlassen bleibt.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld mit dem Wert „video-offer“ an den anderen Peer zu senden.
> Der Inhalt des Objekts, das an die Funktion `sendToServer()` übergeben wird, hängt zusammen mit allem anderen im Promise-Erfüllungs-Handler vollständig von Ihrem Entwurf ab.

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
    // An error occurred, so handle the failure to connect
  });
```

In diesem Code wird das Angebot erstellt, und nach erfolgreicher Erstellung wird das lokale Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch Übergabe des Angebots an [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) entsprechend konfiguriert. Das Angebot wird dabei durch ein Objekt in derselben Form wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) dargestellt.
Danach wird das Angebot über den Signalisierungskanal an das Remote-System gesendet; in diesem Fall mithilfe einer benutzerdefinierten Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation. Daher spielt es keine Rolle, wie das Angebot gesendet wird, solange sowohl der Aufrufer als auch der potenzielle Empfänger dieselbe Methode verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Das vollständige Beispiel, aus dem dieses Snippet stammt, finden Sie unter [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Es hilft Ihnen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
