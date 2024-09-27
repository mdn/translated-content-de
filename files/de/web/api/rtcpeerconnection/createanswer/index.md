---
title: "RTCPeerConnection: createAnswer()-Methode"
short-title: createAnswer()
slug: Web/API/RTCPeerConnection/createAnswer
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`createAnswer()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle erstellt eine [SDP](/de/docs/Glossary/SDP)-Antwort auf ein Angebot, das von einem entfernten Partner während der Angebot-/Antwortverhandlung einer WebRTC-Verbindung empfangen wurde.

Die Antwort enthält Informationen über bereits an die Sitzung angehängte Medien, von dem Browser unterstützte Codecs und Optionen sowie alle bereits gesammelten [ICE](/de/docs/Glossary/ICE)-Kandidaten. Die Antwort wird an das zurückgegebene {{jsxref("Promise")}} geliefert und sollte dann an die Quelle des Angebots gesendet werden, um den Verhandlungsprozess fortzusetzen.

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

In älterem Code und Dokumentationen können Sie eine auf Rückrufen basierende Version dieser Funktion sehen. Diese ist veraltet und ihre Verwendung wird **dringend** abgeraten. Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `createAnswer()` zu verwenden. Die Parameter der älteren Form von `createAnswer()` sind unten beschrieben, um beim Aktualisieren des vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erhält, das die neu erstellte Antwort beschreibt.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt erhält, das erklärt, warum die Anfrage zur Erstellung einer Antwort fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das angeforderte Optionen für die Antwort bereitstellt.

### Ausnahmen

- `NotReadableError`
  - : Der Identitätsanbieter konnte keine Identitätsaussage bereitstellen.
- `OperationError`
  - : Die Erzeugung der SDP ist aus irgendeinem Grund fehlgeschlagen; dies ist eine allgemeine Ausnahme für Fehler.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das die gleichen Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String, dessen Wert `"answer"` ist.
- `sdp`
  - : Ein String, der die SDP beschreibt, die an den entfernten Partner geliefert werden soll.

## Beispiele

Hier ist ein Codeausschnitt aus dem Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Dieser Code stammt aus dem Handler für die Nachricht, die gesendet wird, um ein Angebot über den Signalisierungskanal an einen anderen Partner zu tragen.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das ganz Ihnen überlassen bleibt. In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine [JSON](/de/docs/Glossary/JSON)-Nachricht mit einem `type`-Feld mit dem Wert "video-answer" an den anderen Partner zu senden, die die Antwort an das Gerät überträgt, das das Verbindungsangebot gesendet hat. Der Inhalt des Objekts, das an die `sendToServer()`-Funktion übergeben wird, sowie alles andere im Erfüllungshandler des Promises hängen vollständig von Ihrem Design ab.

```js
pc.createAnswer()
  .then((answer) => pc.setLocalDescription(answer))
  .then(() => {
    // Send the answer to the remote peer through the signaling server.
  })
  .catch(handleGetUserMediaError);
```

Dies fordert [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf, eine neue Antwort zu erstellen und zurückzugeben. In unserem Promise-Handler wird die zurückgegebene Antwort durch Aufruf von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) als die Beschreibung des lokalen Endes der Verbindung festgelegt.

Sobald das erfolgreich ist, wird die Antwort mit dem von Ihnen gewählten Protokoll an den Signalisierungsserver gesendet.

{{jsxref("Promise.catch()")}} wird verwendet, um Fehler abzufangen und zu behandeln.

Siehe [Bearbeitung der Einladung](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation) in unserem WebRTC-Chat-Beispiel, um den vollständigen Code zu sehen, aus dem dieser Ausschnitt abgeleitet ist; das hilft Ihnen, den Signalisierungsprozess und die Funktionsweise von Antworten zu verstehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
