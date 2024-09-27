---
title: "RTCPeerConnection: createOffer()-Methode"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`createOffer()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle initiiert die Erstellung eines [SDP](/de/docs/Glossary/SDP)-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.

Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, Codecs und Optionen, die vom Browser unterstützt werden, sowie alle Kandidaten, die bereits vom [ICE](/de/docs/Glossary/ICE)-Agenten gesammelt wurden, um über den Signalisierungskanal an einen potenziellen Peer gesendet zu werden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

## Syntax

```js-nolint
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback) // deprecated
createOffer(successCallback, failureCallback, options) // deprecated
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden angeforderten Optionen für das Angebot bereitstellt:

    - `iceRestart` {{optional_inline}}
      - : Um ICE bei einer aktiven Verbindung neu zu starten, setzen Sie dies auf `true`.
        Dies führt dazu, dass das zurückgegebene Angebot andere Anmeldeinformationen hat als die bereits vorhandenen.
        Wenn Sie dann das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um die gleichen Anmeldeinformationen beizubehalten und somit ICE nicht neu zu starten.
        **Der Standardwert ist `false`**.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Audios. Zum Beispiel kann es verwendet werden, um sicherzustellen, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Videos. Zum Beispiel kann es verwendet werden, um sicherzustellen, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und Dokumentation kann eine auf Rückrufen basierende Version dieser Funktion zu sehen sein.
Diese ist veraltet und ihre Verwendung wird **dringend** abgeraten.
Sie sollten bestehenden Code aktualisieren, um die auf der {{jsxref("Promise")}}-basierten Version von `createOffer()` zu verwenden.
Die Parameter der älteren Form von `createOffer()` sind unten beschrieben, um bei der Aktualisierung bestehenden Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erhält, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt erhält, das erklärt, warum die Anfrage zur Erstellung eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die angeforderten Optionen für das Angebot bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Objekt erfüllt wird, das die gleichen Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String mit dem Wert `"offer"`.
- `sdp`
  - : Ein String, der das SDP enthält, das das erzeugte Angebot beschreibt und an den entfernten Peer geliefert werden soll.

### Ausnahmen

Diese Ausnahmen werden durch Ablehnung des zurückgegebenen Versprechens zurückgegeben.
Ihr Ablehnungshandler sollte die empfangene Ausnahme prüfen, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein Zertifikat oder kein Zertifikatsatz zur Sicherung der Verbindung bereitgestellt wurde, und `createOffer()` war nicht in der Lage, ein neues zu erstellen.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die Prüfung des Systemzustands, um die Verfügbarkeit von Ressourcen zur Erstellung des Angebots zu bestimmen, aus irgendeinem Grund fehlschlug.

## Beispiele

Hier sehen wir einen Handler für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, der das Angebot erstellt und über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das vollständig Ihnen überlassen wird.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine [JSON](/de/docs/Glossary/JSON)-Nachricht mit einem `type`-Feld und dem Wert "video-offer" an den anderen Peer zu senden.
> Der Inhalt des Objekts, das an die Funktion `sendToServer()` übergeben wird, sowie alles andere im Versprechenserfüllungs-Handler hängt vollständig von Ihrem Design ab.

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

In diesem Code wird das Angebot erstellt, und sobald es erfolgreich ist, wird das lokale Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Übereinstimmung konfiguriert, indem das Angebot (das durch ein Objekt in der gleichen Form wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) dargestellt wird) in [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wird.
Sobald dies geschehen ist, wird das Angebot über den Signalisierungskanal an das entfernte System gesendet; in diesem Fall durch die Verwendung einer benutzerdefinierten Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation, daher spielt es keine Rolle, wie das Angebot gesendet wird, solange der Anrufer und der potenzielle Empfänger das gleiche verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Sehen Sie [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für das vollständige Beispiel, aus dem dieses Snippet stammt; dies wird Ihnen helfen, zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
