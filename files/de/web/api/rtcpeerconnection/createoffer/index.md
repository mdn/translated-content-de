---
title: "RTCPeerConnection: createOffer() Methode"
short-title: createOffer()
slug: Web/API/RTCPeerConnection/createOffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`createOffer()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.

Das SDP-Angebot enthält Informationen über alle bereits an die WebRTC-Sitzung angehängten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, unterstützte Codecs und Optionen durch den Browser sowie alle bereits vom {{Glossary("ICE", "ICE")}}-Agenten gesammelten Kandidaten, die über den Signalisierungskanal an einen potenziellen Peer gesendet werden sollen, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.

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
      - : Um ICE auf einer aktiven Verbindung neu zu starten, setzen Sie dies auf `true`.
        Dies führt dazu, dass das zurückgegebene Angebot andere Anmeldedaten hat als die bereits bestehenden.
        Falls Sie dann das zurückgegebene Angebot anwenden, wird ICE neu gestartet.
        Geben Sie `false` an, um dieselben Anmeldedaten beizubehalten und ICE daher nicht neu zu starten.
        **Der Standardwert ist `false`**. Anstelle dieser Option erwägen Sie den Aufruf von [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce), das diese Option beim nächsten Aufruf von `createOffer()` automatisch setzt.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Ausrichtung von Audio. Zum Beispiel kann sichergestellt werden, dass Audio empfangen werden kann, unabhängig davon, ob Audio gesendet wird oder nicht.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Bietet zusätzliche Kontrolle über die Ausrichtung von Video. Zum Beispiel kann sichergestellt werden, dass Video empfangen werden kann, unabhängig davon, ob Video gesendet wird oder nicht.

### Veraltete Parameter

In älterem Code und Dokumentationen könnten Sie eine Callback-basierte Version dieser Funktion sehen.
Diese ist veraltet, und die Verwendung wird **dringend** abgeraten.
Sie sollten jeden vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `createOffer()` zu verwenden.
Die Parameter der älteren Form von `createOffer()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, die ein einziges [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben bekommt, das das neu erstellte Angebot beschreibt.
- `errorCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, die ein einziges [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben bekommt, das erklärt, warum die Anfrage zur Erstellung eines Angebots fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für das Angebot angeforderten Optionen bereitstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String, dessen Wert `"offer"` ist.
- `sdp`
  - : Ein String, der das SDP beschreibt, das das generierte Angebot beschreibt, und an den entfernten Peer geliefert werden soll.

### Ausnahmen

Diese Ausnahmen werden durch die Ablehnung des zurückgegebenen Promises zurückgegeben.
Ihr Ablehnungs-Handler sollte die empfangene Ausnahme untersuchen, um festzustellen, welche aufgetreten ist.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` geschlossen ist.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn kein Zertifikat oder kein Satz von Zertifikaten für die Sicherung der Verbindung bereitgestellt wurde und `createOffer()` kein neues erstellen konnte.
    Da alle WebRTC-Verbindungen gesichert sein müssen, führt dies zu einem Fehler.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Überprüfen des Zustands des Systems, um die Ressourcenverfügbarkeit festzustellen und das Angebot zu erstellen, aus irgendeinem Grund fehlgeschlagen ist.

## Beispiele

Hier sehen wir einen Handler für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, der das Angebot erstellt und es über einen Signalisierungskanal an das entfernte System sendet.

> [!NOTE]
> Denken Sie daran, dass dies Teil des Signalisierungsprozesses ist, wobei die Transportschicht ein Implementierungsdetail ist, das ganz bei Ihnen liegt.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld mit dem Wert "video-offer" an den anderen Peer zu senden.
> Der Inhalt des Objekts, das an die Funktion `sendToServer()` übergeben wird, zusammen mit allem anderen im Promise-Erfüllung-Handler, hängt vollständig von Ihrem Design ab.

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

In diesem Code wird das Angebot erstellt, und sobald es erfolgreich ist, wird das lokale Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) konfiguriert, um zu passen, indem das Angebot (das durch ein Objekt in derselben Form wie [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) dargestellt wird) an [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) übergeben wird.
Sobald das erledigt ist, wird das Angebot über den Signalisierungskanal an das entfernte System gesendet; in diesem Fall durch eine benutzerdefinierte Funktion namens `sendToServer()`.
Die Implementierung des Signalisierungsservers ist unabhängig von der WebRTC-Spezifikation, so dass es keine Rolle spielt, wie das Angebot gesendet wird, solange sowohl der Anrufer als auch der potenzielle Empfänger denselben verwenden.

Verwenden Sie {{jsxref("Promise.catch()")}}, um Fehler abzufangen und zu behandeln.

Siehe [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für das vollständige Beispiel, aus dem dieser Ausschnitt abgeleitet ist; dies wird Ihnen helfen zu verstehen, wie der Signalisierungscode hier funktioniert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
