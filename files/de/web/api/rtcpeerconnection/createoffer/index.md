---
title: "RTCPeerConnection: Methode createOffer()"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`createOffer()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.

Das SDP-Angebot enthält Informationen über alle bereits an die WebRTC-Sitzung angehängten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die von dem Browser unterstützten Codecs und Optionen sowie alle vom {{Glossary("ICE", "ICE")}}-Agenten bereits gesammelten Kandidaten, um diese über den Signalisierungskanal an einen potenziellen Peer zu senden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

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
      - : Um ICE bei einer aktiven Verbindung neu zu starten, setzen Sie diesen Wert auf `true`.
        Dies führt dazu, dass das zurückgegebene Angebot andere Anmeldeinformationen hat als die bereits vorhandenen.
        Wenn Sie dann das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um die gleichen Anmeldeinformationen beizubehalten und ICE daher nicht neu zu starten.
        **Der Standardwert ist `false`**.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Audios. Beispielsweise kann es verwendet werden, um sicherzustellen, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Richtung des Videos. Beispielsweise kann es verwendet werden, um sicherzustellen, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und Dokumentation kann eine rückrufbasierte Version dieser Funktion zu sehen sein.
Diese ist veraltet und die Verwendung wird **dringend** abgeraten.
Sie sollten jeden vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierte Version von `createOffer()` zu verwenden.
Die Parameter für die ältere Form von `createOffer()` sind unten beschrieben, um bei der Aktualisierung vorhandener Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Rückruffunktion")}}, die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erhält, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Rückruffunktion")}}, die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt erhält, das erklärt, warum die Anforderung zur Erstellung eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für das Angebot angeforderten Optionen bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem Objekt erfüllt wird, das die gleichen Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String, dessen Wert `"offer"` ist.
- `sdp`
  - : Ein String, der das SDP beschreibt, das das generierte Angebot beschreibt und an den entfernten Peer gesendet wird.

### Ausnahmen

Diese Ausnahmen werden zurückgegeben, indem das zurückgegebene Promise abgelehnt wird.
Ihr Ablehnungshandler sollte die empfangene Ausnahme prüfen, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn kein Zertifikat oder eine Gruppe von Zertifikaten zur Sicherung der Verbindung bereitgestellt wurde und `createOffer()` nicht in der Lage war, ein neues zu erstellen.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zurückgegeben, wenn die Prüfung des Systemstatus zur Bestimmung der Ressourcenvorhandenheit aus irgendeinem Grund fehlschlug.

## Beispiele

Hier sehen wir einen Handler für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das das Angebot erstellt und über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das vollständig Ihnen überlassen ist.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld und dem Wert "video-offer" an den anderen Peer zu senden.
> Der Inhalt des an die `sendToServer()`-Funktion übergebenen Objekts sowie alles andere im Erfüllungshandler des Versprechens hängt völlig von Ihrem Design ab.

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

In diesem Code wird das Angebot erstellt und bei Erfolg wird das lokale Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) so konfiguriert, dass es übereinstimmt, indem das Angebot (welches durch ein Objekt in der gleichen Form wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) dargestellt wird) in [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wird.
Sobald das erledigt ist, wird das Angebot über den Signalisierungskanal an das entfernte System gesendet; in diesem Fall durch die Verwendung einer benutzerdefinierten Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation, sodass es keine Rolle spielt, wie das Angebot gesendet wird, solange Anrufer und potenzieller Empfänger das gleiche Verfahren verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Siehe [Signaling und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für das vollständige Beispiel, aus dem dieses Snippet stammt; dies wird Ihnen helfen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
