---
title: "RTCPeerConnection: Methode createOffer()"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 1463dd31170006c52fe0fd8c691652741d2b3e68
---

{{APIRef("WebRTC")}}

Die Methode **`createOffer()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) leitet die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots ein, um eine neue WebRTC-Verbindung zu einem entfernten Peer aufzubauen.

Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits mit der WebRTC-Sitzung verbunden sind, über vom Browser unterstützte Codecs und Optionen sowie über alle Kandidaten, die der {{Glossary("ICE", "ICE")}}-Agent bereits ermittelt hat. Das Angebot wird über den Signalisierungskanal an einen potenziellen Peer gesendet, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

Fügen Sie Tracks hinzu und erstellen Sie Datenkanäle, bevor Sie `createOffer()` aufrufen. Das Angebot beschreibt die Verbindung zum Zeitpunkt des Aufrufs von `createOffer()`. Spätere Änderungen sind daher nicht in der Aushandlung enthalten. Wenn Sie Änderungen vornehmen, die ein neues Angebot erfordern, wird das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) ausgelöst.

Sie können vermeiden, dass die Erstellung eines Datenkanals nach dem ersten Aufruf von `createOffer()` eine erneute Aushandlung auslöst, indem Sie `alwaysNegotiateDataChannels` im Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) auf `true` setzen. Damit legen Sie fest, dass die Anwendung Datenkanäle bereits im {{Glossary("SDP", "SDP")}}-Angebot aushandelt, bevor sie einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellt.

## Syntax

```js-nolint
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback) // deprecated
createOffer(successCallback, failureCallback, options) // deprecated
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Optionen für das Angebot:
    - `iceRestart` {{optional_inline}}
      - : Setzen Sie diese Option auf `true`, um ICE für eine aktive Verbindung neu zu starten. Dadurch enthält das zurückgegebene Angebot andere Anmeldedaten als die bisher verwendeten. Wenn Sie das zurückgegebene Angebot anschließend anwenden, wird ICE neu gestartet. Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE nicht neu zu starten. **Der Standardwert ist `false`**. Statt diese Option zu verwenden, sollten Sie [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) aufrufen. Dadurch wird dieses Flag beim nächsten Aufruf von `createOffer()` automatisch gesetzt.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung der Audioübertragung. Damit lässt sich beispielsweise sicherstellen, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung der Videoübertragung. Damit lässt sich beispielsweise sicherstellen, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird.

### Veraltete Parameter

In älterem Code und älterer Dokumentation finden Sie möglicherweise eine Callback-basierte Version dieser Funktion. Sie ist veraltet, und von ihrer Verwendung wird **dringend** abgeraten. Aktualisieren Sie bestehenden Code, sodass er stattdessen die {{jsxref("Promise")}}-basierte Version von `createOffer()` verwendet. Die Parameter der älteren Form von `createOffer()` sind nachfolgend beschrieben, um Ihnen die Aktualisierung bestehenden Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, an die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben wird, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, an die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben wird, das erklärt, warum die Erstellung des Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit Optionen für das Angebot.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Eine Zeichenfolge mit dem Wert `"offer"`.
- `sdp`
  - : Eine Zeichenfolge mit der SDP, die das erzeugte Angebot beschreibt und an den entfernten Peer übermittelt werden soll.

### Ausnahmen

Diese Ausnahmen werden zurückgegeben, indem das zurückgegebene Promise abgelehnt wird. Prüfen Sie im Handler für die Ablehnung die empfangene Ausnahme, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn zur Absicherung der Verbindung kein Zertifikat beziehungsweise keine Zertifikate bereitgestellt wurden und `createOffer()` kein neues Zertifikat erstellen konnte. Da alle WebRTC-Verbindungen abgesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Prüfung des Systemzustands zur Bestimmung der verfügbaren Ressourcen für die Erstellung des Angebots aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier sehen Sie einen Handler für das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), der das Angebot erstellt und über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist. Die dafür verwendete Transportschicht ist ein Implementierungsdetail, das Sie selbst festlegen.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld, dessen Wert „video-offer“ ist, an den anderen Peer zu senden.
> Der Inhalt des an die Funktion `sendToServer()` übergebenen Objekts sowie der gesamte übrige Code im Handler für die Erfüllung des Promise hängen vollständig von Ihrer Implementierung ab.

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

In diesem Code wird das Angebot erstellt. Sobald dies erfolgreich abgeschlossen ist, wird die lokale Seite der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) entsprechend konfiguriert, indem das Angebot – dargestellt durch ein Objekt mit derselben Struktur wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) – an [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wird. Anschließend wird das Angebot über den Signalisierungskanal an das entfernte System gesendet, in diesem Fall mithilfe einer benutzerdefinierten Funktion namens `sendToServer()`. Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation. Es spielt daher keine Rolle, wie das Angebot gesendet wird, solange sowohl der Aufrufer als auch der potenzielle Empfänger denselben Signalisierungsmechanismus verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Das vollständige Beispiel, aus dem dieser Ausschnitt stammt, finden Sie unter [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Es hilft Ihnen zu verstehen, wie der hier gezeigte Signalisierungscode funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
