---
title: "RTCPeerConnection: createAnswer() Methode"
short-title: createAnswer()
slug: Web/API/RTCPeerConnection/createAnswer
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`createAnswer()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle erstellt eine [SDP](/de/docs/Glossary/SDP)-Antwort auf ein Angebot, das von einem entfernten Peer während der Angebot/Antwort-Verhandlung einer WebRTC-Verbindung empfangen wurde.

Die Antwort enthält Informationen über bereits an die Sitzung angehängte Medien, von dem Browser unterstützte Codecs und Optionen sowie bereits gesammelte [ICE](/de/docs/Glossary/ICE)-Kandidaten. Die Antwort wird an das zurückgegebene {{jsxref("Promise")}} geliefert und sollte dann an die Quelle des Angebots gesendet werden, um den Verhandlungsprozess fortzusetzen.

## Syntax

```js-nolint
createAnswer()
createAnswer(options)

createAnswer(successCallback, failureCallback) // deprecated
createAnswer(successCallback, failureCallback, options) // deprecated
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das angeforderte Optionen für die Antwort bereitstellt.
    Derzeit sind keine Optionen verfügbar.

### Veraltete Parameter

In älterem Code und Dokumentationen kann eine callback-basierte Version dieser Funktion auftreten. Diese wurde veraltet und ihre Verwendung wird **dringend** abgeraten. Sie sollten vorhandenen Code aktualisieren, um die {{jsxref("Promise")}}-basierte Version von `createAnswer()` zu verwenden. Die Parameter der älteren Form von `createAnswer()` werden nachstehend beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erhält, das die neu erstellte Antwort beschreibt.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt erhält, das erklärt, warum die Anforderung, eine Antwort zu erstellen, fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das angeforderte Optionen für die Antwort bereitstellt.

### Ausnahmen

- `NotReadableError`
  - : Der Identitätsanbieter war nicht in der Lage, eine Identitätsbehauptung bereitzustellen.
- `OperationError`
  - : Die Erstellung der SDP ist aus irgendeinem Grund fehlgeschlagen; dies ist eine allgemeine Fehlerausnahme.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt mit den gleichen Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekten erfüllt:

- `type`
  - : Ein String, dessen Wert `"answer"` ist.
- `sdp`
  - : Ein String, der die SDP beschreibt, welche die Sitzung an den entfernten Peer liefern soll.

## Beispiele

Hier ist ein Code-Segment aus dem Artikel [Signalisierung und Videoanruf](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Dieser Code stammt aus dem Handler für die Nachricht, die ein Angebot über den Signalisierungskanal an einen anderen Peer sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das vollständig Ihnen überlassen bleibt. In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine [JSON](/de/docs/Glossary/JSON)-Nachricht mit einem `type`-Feld mit dem Wert "video-answer" an den anderen Peer zu senden, die die Antwort an das Gerät trägt, das das Verbindungsangebot gesendet hat. Der Inhalt des Objekts, das an die `sendToServer()`-Funktion übergeben wird, sowie alles andere im __Promise__-Erfüllungs-Handler hängen vollständig von Ihrem Design ab.

```js
pc.createAnswer()
  .then((answer) => pc.setLocalDescription(answer))
  .then(() => {
    // Send the answer to the remote peer through the signaling server.
  })
  .catch(handleGetUserMediaError);
```

Dies fordert [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf, eine neue Antwort zu erstellen und zurückzugeben. In unserem __Promise__-Handler wird die zurückgegebene Antwort als Beschreibung des lokalen Endes der Verbindung durch Aufrufen von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) gesetzt.

Sobald dies erfolgreich ist, wird die Antwort unter Verwendung des von Ihnen gewählten Protokolls an den Signalisierungsserver gesendet.

{{jsxref("Promise.catch()")}} wird verwendet, um Fehler abzufangen und zu behandeln.

Siehe [Handling the invitation](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation) in unserem WebRTC-Chat-Beispiel, um den vollständigen Code zu sehen, von dem dieses Snippet abgeleitet ist; das wird Ihnen helfen, den Signalisierungsprozess und die Funktionsweise von Antworten zu verstehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
