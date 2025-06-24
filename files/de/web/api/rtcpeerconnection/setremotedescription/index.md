---
title: "RTCPeerConnection: setRemoteDescription() Methode"
short-title: setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`setRemoteDescription()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle setzt die angegebene Sitzungsbeschreibung als das aktuelle Angebot oder die aktuelle Antwort des entfernten Peers fest.
Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats.
Die Methode nimmt einen einzigen Parameter—die Sitzungsbeschreibung—und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Diese Methode wird in der Regel aufgerufen, nachdem ein Angebot oder eine Antwort von einem anderen Peer über den Signalisierungs-Server empfangen wurde.
Beachten Sie, dass wenn `setRemoteDescription()` aufgerufen wird, während bereits eine Verbindung besteht, eine Neuverhandlung im Gange ist (möglicherweise um sich an ändernde Netzwerkbedingungen anzupassen).

Da Beschreibungen ausgetauscht werden, bis sich die beiden Peers auf eine Konfiguration einigen, wird die durch den Aufruf von `setRemoteDescription()` übermittelte Beschreibung nicht sofort wirksam.
Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Verhandlung abgeschlossen ist.
Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setRemoteDescription(sessionDescription)

// deprecated
setRemoteDescription(sessionDescription, successCallback, errorCallback)
```

### Parameter

- `sessionDescription`

  - : Ein Objekt, das das aktuelle Angebot oder die Antwort des entfernten Peers angibt. Es sollte die folgenden Eigenschaften enthalten:

    - `type`
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Siehe [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type).
    - `sdp` {{optional_inline}}
      - : Ein String, der das SDP beschreibt, das die Sitzung beschreibt. Falls sdp nicht bereitgestellt wird, ist der Standard ein leerer String. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein. Siehe [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp).

    Es kann auch eine tatsächliche Instanz von [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) übergeben werden, aber es gibt keinen Unterschied. Aus diesem Grund ist der `RTCSessionDescription`-Konstruktor veraltet.

In älterem Code und Dokumentation kann eine rückrufbasierte Version dieser Funktion verwendet werden.
Diese ist veraltet und die Verwendung wird _stark_ abgeraten.
Sie sollten vorhandenen Code aktualisieren, um die {{jsxref("Promise")}}-basierte Version von `setRemoteDescription()` zu verwenden.
Die Parameter für die ältere Form von `setRemoteDescription()` sind unten beschrieben, um beim Aktualisieren von vorhandenem Code zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde.
    Zu diesem Zeitpunkt kann das Angebot über den Signalisierungs-Server an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion, die der Signatur `RTCPeerConnectionErrorCallback` entspricht und aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann.
    Es wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anfrage fehlgeschlagen ist.

Diese veraltete Form der Methode gibt instantan zurück, ohne auf das tatsächliche Setzen zu warten: im Erfolgsfall wird der `successCallback` aufgerufen; im Fehlerfall wird der `errorCallback` aufgerufen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert der [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) der Verbindung erfolgreich geändert wurde, oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung inkompatibel ist).
Der Fulfillment-Handler des Promise erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess des Wechsels von Beschreibungen beinhaltet tatsächlich Zwischenstufen, die von der WebRTC-Schicht behandelt werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, wenn die Änderung nicht erfolgreich ist.
> Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitäts-Seite für mehr Details zu diesem Prozess.

### Ausnahmen

Die folgenden Ausnahmen werden dem Rejection-Handler für das von `setRemoteDescription()` zurückgegebene Promise gemeldet:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Inhalt der Beschreibung ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist oder sich in einem Zustand befindet, der nicht mit dem angegebenen [`type`](/de/docs/Web/API/RTCSessionDescription/type) der Beschreibung kompatibel ist.
    Zum Beispiel wird diese Ausnahme ausgelöst, wenn der `type` `rollback` ist und der Signalisierungszustand einer von `stable`, `have-local-pranswer` oder `have-remote-pranswer` ist, da Sie eine Verbindung, die entweder vollständig hergestellt ist oder sich im Endstadium ihrer Verbindung befindet, nicht zurücksetzen können.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler nicht mit den hier angegebenen übereinstimmt. Dies schließt Identitätsvalidierungsfehler ein.
- `RTCError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird mit dem [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `sdp-syntax-error` gesetzt, wenn das von [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) angegebene {{Glossary("SDP", "SDP")}} nicht gültig ist.
    Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlerobjekts gibt die Zeilennummer innerhalb des SDP an, bei der der Syntaxfehler erkannt wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn der `sessionDescription` die [`type`](/de/docs/Web/API/RTCSessionDescription/type)-Eigenschaft fehlt oder gar kein Beschreibungsparameter bereitgestellt wurde.

Bei der Verwendung der veralteten, rückrufbasierten Version von `setRemoteDescription()` können folgende Ausnahmen auftreten:

- `InvalidStateError` {{deprecated_inline}}
  - : Der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung ist `"closed"`, was anzeigt, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : Der Parameter `sessionDescription` ist ungültig.

## Nutzungshinweise

Wenn Sie `setRemoteDescription()` aufrufen, prüft der ICE-Agent, ob sich die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) entweder im `stable` oder `have-remote-offer` [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) befindet.
Diese Zustände zeigen an, dass entweder eine bestehende Verbindung neu verhandelt wird oder dass ein zuvor durch einen früheren Aufruf von `setRemoteDescription()` angegebenes Angebot durch das neue Angebot ersetzt werden soll.
In beiden Fällen befinden wir uns am Beginn des Verhandlungsprozesses, und das Angebot wird als die entfernte Beschreibung gesetzt.

Andererseits, wenn wir uns mitten in einer laufenden Verhandlung befinden und ein Angebot an `setRemoteDescription()` übergeben wird, beginnt der ICE-Agent automatisch mit einem ICE-Rollback, um die Verbindung in einen stabilen Signalisierungszustand zu versetzen, und setzt dann, sobald der Rollback abgeschlossen ist, die entfernte Beschreibung auf das angegebene Angebot.
Dies beginnt eine neue Verhandlungssitzung, mit dem neu etablierten Angebot als Startpunkt.

Beim Start der neuen Verhandlung mit dem neu etablierten Angebot ist das lokale Gegenüber jetzt das angerufene Endgerät, selbst wenn es zuvor der Anrufer war.
Dies geschieht anstelle eines Auslösens einer Ausnahme, wodurch die Anzahl der potenziellen Fehler verringert wird, die auftreten können, und vereinfacht die Verarbeitung, die durchgeführt werden muss, wenn Sie ein Angebot erhalten, indem die Notwendigkeit eliminiert wird, den Angebot-/Antwortprozess unterschiedlich zu behandeln, je nachdem, ob das lokale Gegenüber der Anrufer oder der Angerufene ist.

> [!NOTE]
> Frühere Implementierungen von WebRTC hätten eine Ausnahme ausgelöst, wenn ein Angebot außerhalb eines `stable` oder `have-remote-offer` Zustands gesetzt wurde.

## Beispiele

Hier sehen wir eine Funktion, die ein Angebot bearbeitet, das vom entfernten Peer empfangen wurde.
Dieser Code ist abgeleitet von dem Beispiel und der Anleitung im Artikel [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling); einen Blick in diesen Artikel lohnt sich für genauere Details und eine ausführlichere Erklärung, was vor sich geht.

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

Nachdem wir unsere [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und sie als `myPeerConnection` gespeichert haben, übergeben wir die in der empfangenen Angebotsnachricht enthaltene Beschreibung, `msg`, direkt an `setRemoteDescription()`, um der WebRTC-Schicht des Benutzeragents mitzuteilen, welche Konfiguration der Anrufer vorgeschlagen hat.
Wenn unser Promise-Erfüllungshandler aufgerufen wird, der anzeigt, dass dies geschehen ist, erstellen wir einen Stream, fügen ihn der Verbindung hinzu, erstellen dann eine SDP-Antwort und rufen [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um diese als Konfiguration am Ende unseres Anrufs zu setzen, bevor wir diese Antwort an den Anrufer weiterleiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription),
  [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription),
  [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
