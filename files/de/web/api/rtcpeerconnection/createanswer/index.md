---
title: "RTCPeerConnection: Methode createAnswer()"
short-title: createAnswer()
slug: Web/API/RTCPeerConnection/createAnswer
l10n:
  sourceCommit: 1463dd31170006c52fe0fd8c691652741d2b3e68
---

{{APIRef("WebRTC")}}

Die Methode **`createAnswer()`** des Interfaces [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt eine {{Glossary("SDP", "SDP")}}-Antwort auf ein Angebot, das während der Angebot/Antwort-Aushandlung einer WebRTC-Verbindung von einem entfernten Peer empfangen wurde.

Die Antwort enthält Informationen über alle Medien, die bereits in die Sitzung eingebunden sind, über die vom Browser unterstützten Codecs und Optionen sowie über alle bereits gesammelten {{Glossary("ICE", "ICE")}}-Kandidaten.
Die Antwort wird über das zurückgegebene {{jsxref("Promise")}} bereitgestellt und sollte anschließend an den Absender des Angebots gesendet werden, um die Aushandlung fortzusetzen.

## Syntax

```js-nolint
createAnswer()
createAnswer(options)

createAnswer(successCallback, failureCallback) // deprecated
createAnswer(successCallback, failureCallback, options) // deprecated
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den für die Antwort angeforderten Optionen.
    Derzeit sind keine Optionen verfügbar.

### Veraltete Parameter

In älterem Code und älterer Dokumentation finden Sie möglicherweise eine Callback-basierte Version dieser Funktion.
Diese ist veraltet, und von ihrer Verwendung wird **dringend** abgeraten.
Sie sollten vorhandenen Code stattdessen auf die {{jsxref("Promise")}}-basierte Version von `createAnswer()` umstellen.
Die Parameter der älteren Form von `createAnswer()` werden im Folgenden beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt übergeben wird, das die neu erstellte Antwort beschreibt.
- `failureCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, der ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben wird, das erklärt, warum die Erstellung einer Antwort fehlgeschlagen ist.
- `options` {{optional_inline}}
  - : Ein optionales Objekt mit den für die Antwort angeforderten Optionen.

### Ausnahmen

- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Identitätsanbieter konnte keine Identitätsbestätigung bereitstellen.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Generierung des SDP ist aus irgendeinem Grund fehlgeschlagen; dies ist eine allgemeine Ausnahme für nicht näher spezifizierte Fehler.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das dieselben Eigenschaften wie ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt enthält:

- `type`
  - : Ein String mit dem Wert `"answer"`.
- `sdp`
  - : Ein String mit dem SDP, das die Sitzung beschreibt und an den entfernten Peer gesendet werden soll.

## Beispiele

Hier sehen Sie einen Codeausschnitt aus dem Code zum Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling).
Der Ausschnitt stammt aus dem Handler für die Nachricht, mit der ein Angebot über den Signalisierungskanal an einen anderen Peer gesendet wird.

> [!NOTE]
> Beachten Sie, dass dies Teil des Signalisierungsprozesses ist und die dafür verwendete Transportschicht ein Implementierungsdetail ist, das Sie selbst festlegen.
> In diesem Fall wird eine [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung verwendet, um eine {{Glossary("JSON", "JSON")}}-Nachricht mit einem `type`-Feld mit dem Wert "video-answer" an den anderen Peer zu senden. Die Nachricht enthält die Antwort für das Gerät, das das Verbindungsangebot gesendet hat.
> Der Inhalt des an die Funktion `sendToServer()` übergebenen Objekts hängt ebenso wie alles andere im Handler für die Erfüllung des Promise vollständig von Ihrer Implementierung ab.

```js
pc.createAnswer()
  .then((answer) => pc.setLocalDescription(answer))
  .then(() => {
    // Send the answer to the remote peer through the signaling server.
  })
  .catch(handleGetUserMediaError);
```

Damit wird [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgefordert, eine neue Antwort zu erstellen und zurückzugeben.
In unserem Promise-Handler wird die zurückgegebene Antwort durch Aufrufen von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) als Beschreibung der lokalen Seite der Verbindung festgelegt.

Wenn dies erfolgreich ist, wird die Antwort über ein Protokoll Ihrer Wahl an den Signalisierungsserver gesendet.

Mit {{jsxref("Promise.catch()")}} werden Fehler abgefangen und behandelt.

Unter [Verarbeiten der Einladung](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation) in unserem WebRTC-Chat-Beispiel finden Sie den vollständigen Code, aus dem dieser Ausschnitt stammt. Er hilft Ihnen, den Signalisierungsprozess und die Funktionsweise von Antworten zu verstehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
