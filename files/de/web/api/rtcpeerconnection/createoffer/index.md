---
title: "RTCPeerConnection: createOffer()-Methode"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{APIRef("WebRTC")}}

Die **`createOffer()`**-Methode der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Partner zu starten.

Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, unterstützte Codecs und Optionen des Browsers und alle vom {{Glossary("ICE", "ICE")}}-Agent gesammelten Kandidaten, um sie über den Signalisierungskanal an einen potenziellen Partner zu senden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

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
        Dies führt dazu, dass das zurückgegebene Angebot andere Anmeldedaten hat als die bereits vorhandenen.
        Wenn Sie dann das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE daher nicht neu zu starten.
        **Der Standardwert ist `false`**. Anstatt diese Option zu verwenden, ziehen Sie in Betracht, [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) aufzurufen, was dieses Flag automatisch beim nächsten Aufruf von `createOffer()` setzt.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtungsbestimmung von Audio. Zum Beispiel kann sichergestellt werden, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtungsbestimmung von Video. Zum Beispiel kann sichergestellt werden, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und Dokumentation können Sie eine callback-basierte Version dieser Funktion sehen.
Diese wurde veraltet und ihre Verwendung wird **dringend** abgeraten.
Sie sollten jeden vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `createOffer()` zu verwenden.
Die Parameter der älteren Form von `createOffer()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Rückruffunktion")}}, die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben bekommt, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Rückruffunktion")}}, die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben bekommt, das erklärt, warum die Anforderung zur Erstellung eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das für das Angebot angeforderte Optionen bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem Objekt erfüllt, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String, dessen Wert `"offer"` ist.
- `sdp`
  - : Ein String, der das SDP beschreibt, das das erstellte Angebot beschreibt und an den entfernten Partner geliefert werden soll.

### Ausnahmen

Diese Ausnahmen werden durch das Zurückweisen des zurückgegebenen Promise zurückgegeben.
Ihr Ablehnungs-Handler sollte die empfangene Ausnahme prüfen, um zu bestimmen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein Zertifikat oder Satz von Zertifikaten zur Sicherung der Verbindung bereitgestellt wurde und `createOffer()` nicht in der Lage war, ein neues zu erstellen.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt das zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das System beim Überprüfen der Ressourcenverfügbarkeit, um das Angebot zu erzeugen, aus irgendeinem Grund fehlschlägt.

## Beispiele

Hier sehen wir einen Handler für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, der das Angebot erstellt und es über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das ganz Ihnen überlassen bleibt.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld mit dem Wert "video-offer" an den anderen Partner zu senden.
> Der Inhalt des Objekts, das an die `sendToServer()`-Funktion übergeben wird, sowie alles andere im Erfolgs-Handler des Promises hängt vollständig von Ihrem Design ab.

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

In diesem Code wird das Angebot erstellt und, sobald es erfolgreich ist, das lokale Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) so konfiguriert, dass es passt, indem das Angebot (das als Objekt in der gleichen Form wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) dargestellt wird) in [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wird.
Sobald dies geschehen ist, wird das Angebot über den Signalisierungskanal an das entfernte System gesendet; in diesem Fall durch die Verwendung einer benutzerdefinierten Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungs-Servers ist unabhängig von der WebRTC-Spezifikation, daher spielt es keine Rolle, wie das Angebot gesendet wird, solange sowohl der Anrufer als auch der potenzielle Empfänger denselben verwenden.

Nutzen Sie {{jsxref("Promise.catch()")}} zur Abbildung und Handhabung von Fehlern.

Siehe [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für das vollständige Beispiel, aus dem dieses Snippet stammt; dies wird Ihnen helfen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
