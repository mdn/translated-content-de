---
title: "RTCPeerConnection: setRemoteDescription() Methode"
short-title: setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`setRemoteDescription()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers. Die Beschreibung spezifiziert die Eigenschaften des entfernten Endes der Verbindung, einschließlich des Medienformats. Die Methode nimmt einen einzigen Parameter - die Sitzungsbeschreibung - und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Dies wird typischerweise aufgerufen, nachdem ein Angebot oder eine Antwort von einem anderen Peer über den Signalisierungsserver empfangen wurde. Beachten Sie, dass wenn `setRemoteDescription()` aufgerufen wird, während bereits eine Verbindung besteht, dies bedeutet, dass eine Neuverhandlung im Gange ist (möglicherweise um sich an veränderte Netzwerkbedingungen anzupassen).

Da Beschreibungen ausgetauscht werden, bis sich die beiden Peers auf eine Konfiguration einigen, tritt die durch den Aufruf von `setRemoteDescription()` übermittelte Beschreibung nicht sofort in Kraft. Stattdessen bleibt die aktuelle Verbindungskonfiguration bis zum Abschluss der Verhandlung bestehen. Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setRemoteDescription(sessionDescription)

// deprecated
setRemoteDescription(sessionDescription, successCallback, errorCallback)
```

### Parameter

- `sessionDescription`

  - : Ein Objekt, das das aktuelle Angebot oder die Antwort des entfernten Peers spezifiziert. Es sollte die folgenden Eigenschaften enthalten:

    - `type`
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Siehe [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type).
    - `sdp` {{optional_inline}}
      - : Ein String, der das SDP beschreibt, das die Sitzung beschreibt. Wenn sdp nicht bereitgestellt wird, standardmäßig ein leerer String. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein. Siehe [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp).

    Sie können auch eine tatsächliche [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Instanz übergeben, aber es gibt keinen Unterschied. Aus diesem Grund ist der `RTCSessionDescription`-Konstruktor veraltet.

In älterem Code und Dokumentation kann eine Callback-basierte Version dieser Funktion verwendet werden. Diese wurde veraltet und ihre Verwendung wird _stark_ abgeraten. Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}}-basierte Version von `setRemoteDescription()` zu verwenden. Die Parameter für die ältere Form von `setRemoteDescription()` sind unten beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion mit der Signatur `RTCPeerConnectionErrorCallback`, die aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann. Es wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anforderung fehlgeschlagen ist.

Diese veraltete Form der Methode liefert sofort ein Ergebnis zurück, ohne darauf zu warten, dass das eigentliche Setzen durchgeführt wird: Im Erfolgsfall wird der `successCallback` aufgerufen; im Falle eines Fehlers wird der `errorCallback` aufgerufen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert der [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) der Verbindung erfolgreich geändert oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers in der Verbindung nicht kompatibel ist). Der Erfüllungs-Handler des Versprechens erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess des Änderns von Beschreibungen umfasst tatsächlich Zwischenstufen, die von der WebRTC-Schicht bearbeitet werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne dass die Verbindung verloren geht, falls die Änderung nicht erfolgreich ist. Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite für weitere Details zu diesem Prozess.

### Ausnahmen

Die folgenden Ausnahmen werden an den Ablehnungs-Handler für das von `setRemoteDescription()` zurückgegebene Versprechen gemeldet:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Inhalt der Beschreibung ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist oder sich in einem Zustand befindet, der mit dem angegebenen `type` der Beschreibung nicht kompatibel ist. Diese Ausnahme wird beispielsweise ausgelöst, wenn der `type` `rollback` ist und der Signalisierungszustand einer von `stable`, `have-local-pranswer` oder `have-remote-pranswer` ist, da Sie eine Verbindung, die entweder vollständig hergestellt ist oder sich in der Endphase befindet, nicht zurücksetzen können.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler nicht zu den hier angegebenen passt. Dazu gehören Identitätsvalidierungsfehler.
- `RTCError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird mit dem [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `sdp-syntax-error` gesetzt, wenn das [SDP](/de/docs/Glossary/SDP), das von [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) angegeben wird, ungültig ist. Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlerobjekts gibt die Zeilennummer innerhalb des SDP an, auf der der Syntaxfehler entdeckt wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn die `sessionDescription` die [`type`](/de/docs/Web/API/RTCSessionDescription/type)-Eigenschaft fehlt oder überhaupt kein Beschreibungsparameter bereitgestellt wurde.

Beim Verwenden der veralteten callback-basierten Version von `setRemoteDescription()` können die folgenden Ausnahmen auftreten:

- `InvalidStateError` {{deprecated_inline}}
  - : Der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung ist `"closed"`, was darauf hinweist, dass die Verbindung derzeit nicht geöffnet ist, sodass eine Verhandlung nicht stattfinden kann.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : Der `sessionDescription`-Parameter ist ungültig.

## Verwendungshinweise

Wenn Sie `setRemoteDescription()` aufrufen, überprüft der ICE-Agent, ob sich die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) entweder im `stable`- oder `have-remote-offer`-[`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) befindet. Diese Zustände zeigen an, dass entweder eine bestehende Verbindung neu verhandelt wird oder dass ein Angebot, das zuvor durch einen früheren Aufruf von `setRemoteDescription()` spezifiziert wurde, durch das neue Angebot ersetzt wird. In einem dieser beiden Fälle befinden wir uns am Anfang des Verhandlungsprozesses, und das Angebot wird als entfernte Beschreibung festgelegt.

Andererseits, wenn wir uns mitten in einer laufenden Verhandlung befinden und ein Angebot in `setRemoteDescription()` übergeben wird, beginnt der ICE-Agent automatisch ein ICE-Rollback, um die Verbindung in einen stabilen Signalisierungszustand zurückzubringen, und setzt anschließend, sobald das Rollback abgeschlossen ist, die entfernte Beschreibung auf das angegebene Angebot. Dies beginnt eine neue Verhandlungsrunde mit dem neu etablierten Angebot als Ausgangspunkt.

Beim Starten der neuen Verhandlung mit dem neu festgelegten Angebot ist der lokale Peer jetzt der Angerufene, selbst wenn er zuvor der Anrufer war. Dies geschieht anstatt eine Ausnahme auszulösen, wodurch die Anzahl der potenziellen Fehler verringert wird, und vereinfacht die Verarbeitungen, die Sie durchführen müssen, wenn Sie ein Angebot erhalten, indem es die Notwendigkeit eliminiert, den Prozess von Angebot und Antwort unterschiedlich zu behandeln, je nachdem, ob der lokale Peer der Anrufer oder der Angerufene ist.

> [!NOTE]
> Frühere Implementierungen von WebRTC lösten eine Ausnahme aus, wenn ein Angebot außerhalb eines `stable`- oder `have-remote-offer`-Zustands festgelegt wurde.

## Beispiele

Hier sehen wir eine Funktion, die ein von dem entfernten Peer empfangenes Angebot verarbeitet. Dieser Code ist aus dem Beispiel und Tutorial im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) abgeleitet; sehen Sie sich diesen Artikel für weitere Details und eine tiefere Erklärung dessen an, was vor sich geht.

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

Nachdem wir unsere [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und sie als `myPeerConnection` gespeichert haben, übergeben wir die Beschreibung, die in der empfangenen Angebotsnachricht `msg` enthalten ist, direkt in `setRemoteDescription()`, um der WebRTC-Schicht des Benutzeragents mitzuteilen, welche Konfiguration der Anrufer vorgeschlagen hat. Wenn unser Promise-Erfüllungs-Handler aufgerufen wird, was darauf hinweist, dass dies getan wurde, erstellen wir einen Stream, fügen ihn der Verbindung hinzu, dann erstellen wir eine SDP-Antwort und rufen [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um diese als Konfiguration am Endpunkt des Anrufs festzulegen, bevor wir diese Antwort an den Anrufer weiterleiten.

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
