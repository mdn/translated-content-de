---
title: "RTCPeerConnection: setRemoteDescription()-Methode"
short-title: setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setRemoteDescription()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers. Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats. Die Methode nimmt einen einzigen Parameter—die Sitzungsbeschreibung—entgegen und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung geändert wurde, und zwar asynchron.

Dies wird typischerweise aufgerufen, nachdem ein Angebot oder eine Antwort von einem anderen Peer über den Signalisierungsserver empfangen wurde. Beachten Sie, dass wenn `setRemoteDescription()` aufgerufen wird, während bereits eine Verbindung besteht, dass eine Neuverhandlung im Gange ist (möglicherweise um sich an sich ändernde Netzwerkbedingungen anzupassen).

Da Beschreibungen ausgetauscht werden, bis die beiden Peers sich auf eine Konfiguration geeinigt haben, tritt die durch den Aufruf von `setRemoteDescription()` übermittelte Beschreibung nicht sofort in Kraft. Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Verhandlung abgeschlossen ist. Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setRemoteDescription(sessionDescription)
```

### Parameter

- `sessionDescription`
  - : Ein {{domxref("RTCSessionDescriptionInit")}} oder {{domxref("RTCSessionDescription")}}, das das aktuelle Angebot oder die Antwort des entfernten Peers spezifiziert. Dieser Wert ist ein Angebot oder eine Antwort, die vom entfernten Peer über Ihre Implementierung empfangen wurde.

Der `sessionDescription`-Parameter ist technisch vom Typ `RTCSessionDescriptionInit`, aber da {{domxref("RTCSessionDescription")}} so serialisiert wird, dass sie von `RTCSessionDescriptionInit` nicht zu unterscheiden ist, können Sie auch eine `RTCSessionDescription` übergeben. Dies ermöglicht es Ihnen, Code wie den folgenden zu vereinfachen:

```js
myPeerConnection
  .setRemoteDescription(new RTCSessionDescription(description))
  .then(() => createMyStream());
```

zu:

```js
myPeerConnection.setRemoteDescription(description).then(() => createMyStream());
```

Mit der Syntax [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await) können Sie dies weiter vereinfachen:

```js
await myPeerConnection.setRemoteDescription(description);
createMyStream();
```

Da es unnötig ist, ist der {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}}-Konstruktor veraltet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert der {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} der Verbindung erfolgreich geändert wurde oder abgelehnt, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung inkompatibel ist). Der Promise-Erfüllungs-Handler erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess des Änderns von Beschreibungen umfasst tatsächlich Zwischenstufen, die von der WebRTC-Ebene gehandhabt werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, wenn die Änderung nicht gelingt. Weitere Details zu diesem Prozess finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

### Ausnahmen

Die folgenden Ausnahmen werden an den Ablehnungs-Handler des von `setRemoteDescription()` zurückgegebenen Promises gemeldet:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn der Inhalt der Beschreibung ungültig ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die {{domxref("RTCPeerConnection")}} geschlossen ist oder sich in einem Zustand befindet, der mit dem {{domxref("RTCSessionDescription.type", "type")}} der angegebenen Beschreibung nicht kompatibel ist. Zum Beispiel wird diese Ausnahme ausgelöst, wenn der `type` `rollback` ist und der Signalisierungszustand einer der folgenden ist: `stable`, `have-local-pranswer` oder `have-remote-pranswer`, da Sie eine Verbindung, die entweder vollständig aufgebaut ist oder sich im Endstadium des Verbindungsaufbaus befindet, nicht zurücksetzen können.
- `OperationError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn ein Fehler nicht mit den hier angegebenen übereinstimmt. Dazu gehören Identitätsvalidierungsfehler.
- `RTCError` {{domxref("DOMException")}}
  - : Wird mit {{domxref("RTCError.errorDetail", "errorDetail")}} auf `sdp-syntax-error` zurückgegeben, wenn das von {{domxref("RTCSessionDescription.sdp")}} angegebene {{Glossary("SDP")}} nicht gültig ist. Die Eigenschaft {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} des Fehlerobjekts gibt die Zeilennummer innerhalb des SDP an, auf der der Syntaxfehler erkannt wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn das angegebene `RTCSessionDescriptionInit` oder `RTCSessionDescription`-Objekt die {{domxref("RTCSessionDescription.type", "type")}}-Eigenschaft fehlt oder überhaupt kein Beschreibungsparameter angegeben wurde.

## Verwendungshinweise

Wenn Sie `setRemoteDescription()` aufrufen, überprüft der ICE-Agent, ob sich die {{domxref("RTCPeerConnection")}} entweder im `stable`- oder `have-remote-offer`-{{domxref("RTCPeerConnection.signalingState", "signalingState")}} befindet. Diese Zustände zeigen an, dass entweder eine bestehende Verbindung neu verhandelt wird oder dass ein zuvor durch einen früheren Aufruf von `setRemoteDescription()` angegebenes Angebot durch das neue Angebot ersetzt werden soll. In beiden dieser Fälle befinden wir uns am Beginn des Verhandlungsprozesses, und das Angebot wird als die entfernte Beschreibung gesetzt.

Andererseits, wenn wir mitten in einer laufenden Verhandlung sind und ein Angebot in `setRemoteDescription()` eingegeben wird, startet der ICE-Agent automatisch ein ICE-Rollback, um die Verbindung in einen stabilen Signalisierungszustand zurückzusetzen, und setzt dann, sobald das Rollback abgeschlossen ist, die entfernte Beschreibung auf das angegebene Angebot. Dies beginnt eine neue Verhandlungssitzung, mit dem neu etablierten Angebot als Ausgangspunkt.

Mit Beginn der neuen Verhandlung mit dem neu etablierten Angebot ist der lokale Peer jetzt der Angerufene, auch wenn er zuvor der Anrufer war. Dies erfolgt anstelle des Auslösens einer Ausnahme, wodurch die Anzahl potenzieller Fehler reduziert wird und die Verarbeitung, die Sie durchführen müssen, vereinfacht wird, wenn Sie ein Angebot erhalten, indem es die Notwendigkeit eliminiert, den Angebot/Antwort-Prozess unterschiedlich zu behandeln, je nachdem, ob der lokale Peer der Anrufer oder der Angerufene ist.

> [!NOTE]
> Frühere Implementierungen von WebRTC würden eine Ausnahme auslösen, wenn ein Angebot außerhalb eines `stable`- oder `have-remote-offer`-Zustands gesetzt wurde.

## Veraltete Syntax

In älterem Code und Dokumentationen könnte eine rückrufbasierte Version dieser Funktion verwendet werden. Diese ist veraltet, und ihre Verwendung wird _dringend_ abgeraten. Sie sollten jede bestehende Code-Basis aktualisieren, um die {{jsxref("Promise")}}-basierte Version von `setRemoteDescription()` zu verwenden. Die Parameter des älteren Formulars von `setRemoteDescription()` sind unten beschrieben, um bei der Aktualisierung bestehender Code-Basen zu helfen.

```js
pc.setRemoteDescription(sessionDescription, successCallback, errorCallback);
```

### Parameter

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion, die die Signatur `RTCPeerConnectionErrorCallback` erfüllt, die aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann. Sie wird ein einziges {{domxref("DOMException")}}-Objekt übergeben, das erklärt, warum die Anforderung fehlgeschlagen ist.

Diese veraltete Form der Methode wird sofort zurückgegeben, ohne darauf zu warten, dass die tatsächliche Einstellung durchgeführt wird: im Erfolgsfall wird der `successCallback` aufgerufen; im Falle eines Fehlers wird der `errorCallback` aufgerufen.

### Ausnahmen

Bei Verwendung der veralteten rückrufbasierten Version von `setRemoteDescription()` können die folgenden Ausnahmen auftreten:

- `InvalidStateError` {{deprecated_inline}}
  - : Der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} der Verbindung ist `"closed"`, was darauf hinweist, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : Die durch den `sessionDescription`-Parameter angegebene {{domxref("RTCSessionDescription")}} ist ungültig.

## Beispiele

Hier sehen wir eine Funktion, die ein Angebot behandelt, das vom entfernten Peer empfangen wurde. Dieser Code ist aus dem Beispiel und Tutorial im Artikel [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) abgeleitet; schauen Sie sich diesen an, um weitere Details und eine ausführlichere Erklärung zu erhalten, was vor sich geht.

```js
function handleOffer(msg) {
  createMyPeerConnection();

  myPeerConnection
    .setRemoteDescription(msg.description)
    .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
    .then((stream) => {
      document.getElementById("local_video").srcObject = stream;
      return myPeerConnection.addStream(stream);
    })
    .then(() => myPeerConnection.createAnswer())
    .then((answer) => myPeerConnection.setLocalDescription(answer))
    .then(() => {
      // Send the answer to the remote peer using the signaling server
    })
    .catch(handleGetUserMediaError);
}
```

Nachdem wir unsere {{domxref("RTCPeerConnection")}} erstellt und als `myPeerConnection` gespeichert haben, übergeben wir die Beschreibung, die im empfangenen Angebotsnachricht, `msg`, enthalten ist, direkt an `setRemoteDescription()`, um der WebRTC-Schicht des Benutzeragenten mitzuteilen, welche Konfiguration der Anrufer vorgeschlagen hat. Wenn unser Promise-Erfüllungs-Handler aufgerufen wird, was anzeigt, dass dies geschehen ist, erstellen wir einen Stream, fügen ihn der Verbindung hinzu, erstellen dann eine SDP-Antwort und rufen {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} auf, um das als Konfiguration am Ende unseres Anrufs festzulegen, bevor wir diese Antwort an den Anrufer weiterleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.remoteDescription")}},
  {{domxref("RTCPeerConnection.pendingRemoteDescription")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}}
