---
title: "RTCPeerConnection: Methode createOffer()"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

{{APIRef("WebRTC")}}

Die Methode **`createOffer()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem Remote-Peer zu starten.

Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, über vom Browser unterstützte Codecs und Optionen sowie über alle Kandidaten, die bereits vom {{Glossary("ICE", "ICE")}}-Agenten erfasst wurden. Es wird über den Signalisierungskanal an einen potenziellen Peer gesendet, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

Fügen Sie Tracks hinzu und erstellen Sie Datenkanäle, bevor Sie `createOffer()` aufrufen. Das Angebot beschreibt die Verbindung in dem Zustand, in dem sie sich beim Aufruf von `createOffer()` befindet. Daher werden später vorgenommene Änderungen nicht in die Aushandlung einbezogen (das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) wird ausgelöst, wenn Sie Änderungen vornehmen, die ein neues Angebot erfordern).

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
        Dadurch weist das zurückgegebene Angebot andere Anmeldedaten auf als die bereits vorhandenen.
        Wenn Sie anschließend das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE daher nicht neu zu starten.
        **Der Standardwert ist `false`**. Erwägen Sie statt der Verwendung dieser Option, [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) aufzurufen. Dadurch wird dieses Flag beim nächsten Aufruf von `createOffer()` automatisch gesetzt.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung von Audio. Beispielsweise kann damit sichergestellt werden, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung von Video. Beispielsweise kann damit sichergestellt werden, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und in älterer Dokumentation finden Sie möglicherweise eine auf Callbacks basierende Version dieser Funktion.
Diese ist veraltet, und von ihrer Verwendung wird **dringend** abgeraten.
Sie sollten vorhandenen Code aktualisieren, um stattdessen die auf {{jsxref("Promise")}} basierende Version von `createOffer()` zu verwenden.
Die Parameter der älteren Form von `createOffer()` werden unten beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben wird, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben wird, das erklärt, warum die Anfrage zum Erstellen eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für das Angebot angeforderten Optionen bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String mit dem Wert `"offer"`.
- `sdp`
  - : Ein String, der das SDP enthält, das das generierte Angebot beschreibt und an den Remote-Peer übermittelt werden soll.

### Ausnahmen

Diese Ausnahmen werden durch die Ablehnung des zurückgegebenen Promise zurückgegeben.
Ihr Handler für Ablehnungen sollte die empfangene Ausnahme untersuchen, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein Zertifikat oder Satz von Zertifikaten zur Sicherung der Verbindung bereitgestellt wurde und `createOffer()` kein neues erstellen konnte.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Untersuchung des Systemzustands zur Bestimmung der Ressourcenverfügbarkeit für die Generierung des Angebots aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier sehen wir einen Handler für das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), der das Angebot erstellt und über einen Signalisierungskanal an das Remote-System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das vollständig Ihnen überlassen bleibt.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld und dem Wert „video-offer“ an den anderen Peer zu senden.
> Der Inhalt des Objekts, das an die Funktion `sendToServer()` übergeben wird, hängt zusammen mit allem anderen im Promise-Erfüllungshandler vollständig von Ihrem Entwurf ab.

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

In diesem Code wird das Angebot erstellt. Nach erfolgreicher Erstellung wird das lokale Ende von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch Übergabe des Angebots an [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) entsprechend konfiguriert. Das Angebot wird dabei durch ein Objekt dargestellt, das dieselbe Struktur wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) hat.
Sobald dies erfolgt ist, wird das Angebot über den Signalisierungskanal an das Remote-System gesendet, in diesem Fall mithilfe einer benutzerdefinierten Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation. Daher spielt es keine Rolle, wie das Angebot gesendet wird, solange sowohl der Aufrufer als auch der potenzielle Empfänger dieselbe Methode verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Das vollständige Beispiel, aus dem dieses Snippet stammt, finden Sie unter [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Es hilft Ihnen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
