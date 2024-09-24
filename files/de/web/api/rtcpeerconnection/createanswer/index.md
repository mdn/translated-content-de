---
title: "RTCPeerConnection: createAnswer()-Methode"
short-title: createAnswer()
slug: Web/API/RTCPeerConnection/createAnswer
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`createAnswer()`**-Methode des {{domxref("RTCPeerConnection")}}-Interfaces erstellt eine {{Glossary("SDP")}}-Antwort auf ein von einem entfernten Peer empfangenes Angebot während der Angebot-/Antwort-Verhandlung einer WebRTC-Verbindung.

Die Antwort enthält Informationen über bereits an die Sitzung angefügte Medien, von dem Browser unterstützte Codecs und Optionen sowie alle bereits gesammelten {{Glossary("ICE")}}-Kandidaten. Die Antwort wird dem zurückgegebenen {{jsxref("Promise")}} übermittelt und sollte dann an die Quelle des Angebots gesendet werden, um den Verhandlungsprozess fortzusetzen.

## Syntax

```js-nolint
createAnswer()
createAnswer(options)

createAnswer(successCallback, failureCallback) // veraltet
createAnswer(successCallback, failureCallback, options) // veraltet
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für die Antwort angeforderten Optionen bereitstellt. Derzeit sind keine Optionen verfügbar.

### Veraltete Parameter

In älterem Code und Dokumentationen kann eine rückrufbasierte Version dieser Funktion erscheinen. Diese wurde als veraltet markiert und ihre Verwendung wird **dringend** abgeraten. Sie sollten bestehenden Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `createAnswer()` zu verwenden. Die Parameter der älteren Form von `createAnswer()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die ein einzelnes {{domxref("RTCSessionDescription")}}-Objekt erhält, das die neu erstellte Antwort beschreibt.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die ein einzelnes {{domxref("DOMException")}}-Objekt erhält, das erklärt, warum die Anfrage zur Erstellung einer Antwort fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die für die Antwort angeforderten Optionen bereitstellt.

### Ausnahmen

- `NotReadableError`
  - : Der Identitätsanbieter konnte keine Identitätsbehauptung bereitstellen.
- `OperationError`
  - : Die Erzeugung der SDP ist aus irgendeinem Grund fehlgeschlagen; dies ist eine allgemeine Fehler-Schlussfolgerung.

### Rückgabewert

Ein {{jsxref("Promise")}}, dessen Fulfillment-Handler mit einem Objekt konform mit dem {{domxref("RTCSessionDescriptionInit")}}-Wörterbuch aufgerufen wird, das die SDP-Antwort enthält, die dem anderen Peer übermittelt werden soll.

## Beispiele

Hier ist ein Codeausschnitt, der aus dem Code stammt, der mit dem Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) verbunden ist. Dieser Code stammt aus dem Handler für die Nachricht, die ein Angebot an einen anderen Peer über den Signalisierungskanal sendet.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist, dessen Transportschicht ein Implementierungsdetail ist, das ganz Ihnen überlassen bleibt. In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um dem anderen Peer eine {{Glossary("JSON")}}-Nachricht mit einem `type`-Feld mit dem Wert "video-answer" zu senden, das die Antwort an das Gerät überträgt, das das Angebot gesendet hat, um eine Verbindung herzustellen. Der Inhalt des Objekts, das der `sendToServer()`-Funktion übergeben wird, sowie alles andere im Promise-Fulfillment-Handler hängt vollständig von Ihrem Design ab.

```js
pc.createAnswer()
  .then((answer) => pc.setLocalDescription(answer))
  .then(() => {
    // Senden Sie die Antwort über den Signalisierungsserver an den entfernten Peer.
  })
  .catch(handleGetUserMediaError);
```

Dies fordert {{domxref("RTCPeerConnection")}} auf, eine neue Antwort zu erstellen und zurückzugeben. In unserem Promise-Handler wird die zurückgegebene Antwort als Beschreibung des lokalen Endes der Verbindung durch Aufruf von {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} gesetzt.

Sobald das erfolgreich ist, wird die Antwort an den Signalisierungsserver gesendet, indem Sie ein beliebiges Protokoll nutzen, das Ihnen zusagt.

{{jsxref("Promise.catch()")}} wird verwendet, um Fehler abzufangen und zu behandeln.

Siehe [Einladung bearbeiten](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation) in unserem WebRTC-Chat-Beispiel, um den vollständigen Code zu sehen, aus dem dieser Ausschnitt stammt; das hilft Ihnen, den Signalisierungsprozess zu verstehen und wie Antworten funktionieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
