---
title: "RTCPeerConnection: Methode setRemoteDescription()"
short-title: setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`setRemoteDescription()`**-Methode der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers.
Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats.
Die Methode nimmt einen einzigen Parameter – die Sitzungsbeschreibung – und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Dies wird normalerweise aufgerufen, nachdem man ein Angebot oder eine Antwort von einem anderen Peer über den Signalisierungsserver erhalten hat.
Beachten Sie, dass, wenn `setRemoteDescription()` aufgerufen wird, während bereits eine Verbindung besteht, dies bedeutet, dass eine Neuverhandlung im Gange ist (möglicherweise um sich an sich ändernde Netzwerkbedingungen anzupassen).

Da Beschreibungen ausgetauscht werden, bis sich die beiden Peers auf eine Konfiguration einigen, tritt die durch den Aufruf von `setRemoteDescription()` übermittelte Beschreibung nicht sofort in Kraft.
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

  - : Ein Objekt, das das aktuelle Angebot oder die Antwort des entfernten Peers spezifiziert. Es sollte die folgenden Eigenschaften enthalten:

    - `type`
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Siehe [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type).
    - `sdp` {{optional_inline}}
      - : Ein String, der das SDP beschreibt, welches die Sitzung beschreibt. Wenn sdp nicht angegeben wird, wird ein leerer String als Standard verwendet. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein. Siehe [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp).

    Es ist auch möglich, eine tatsächliche Instanz von [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zu übergeben, aber es gibt keinen Unterschied. Aus diesem Grund ist der Konstruktor von `RTCSessionDescription` veraltet.

In älterem Code und Dokumentationen können Sie eine auf Rückrufen basierende Version dieser Funktion sehen.
Diese ist veraltet und ihre Verwendung wird _dringend_ abgeraten.
Sie sollten bestehenden Code aktualisieren, um die auf dem {{jsxref("Promise")}} basierende Version von `setRemoteDescription()` zu verwenden.
Die Parameter der älteren Form von `setRemoteDescription()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde.
    Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion mit der Signatur `RTCPeerConnectionErrorCallback`, die aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann.
    Es wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anfrage fehlgeschlagen ist.

Diese veraltete Form der Methode gibt sofort zurück, ohne auf die tatsächliche Einstellung zu warten: Im Erfolgsfall wird der `successCallback` aufgerufen; im Fehlerfall der `errorCallback`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert der [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) der Verbindung erfolgreich geändert wurde, oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung nicht kompatibel ist).
Der Fulfillment-Handler des Promises erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess des Änderns von Beschreibungen umfasst tatsächlich Zwischenschritte, die von der WebRTC-Schicht behandelt werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, wenn die Änderung nicht erfolgreich ist.
> Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite für weitere Details zu diesem Prozess.

### Ausnahmen

Die folgenden Ausnahmen werden dem Ablehnungshandler für das von `setRemoteDescription()` zurückgegebene Promise gemeldet:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Inhalt der Beschreibung ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist oder sich in einem Zustand befindet, der nicht mit dem angegebenen [`type`](/de/docs/Web/API/RTCSessionDescription/type) der Beschreibung kompatibel ist.
    Zum Beispiel wird diese Ausnahme ausgelöst, wenn der `type` `rollback` ist und sich der Signalzustand im Zustand `stable`, `have-local-pranswer` oder `have-remote-pranswer` befindet, da eine Verbindung, die entweder vollständig hergestellt oder sich im letzten Schritt der Verbindung befindet, nicht zurückgerollt werden kann.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht zu den hier angegebenen gehört. Dies schließt Fehler bei der Identitätsvalidierung ein.
- `RTCError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `sdp-syntax-error` gesetzt ist, wenn das von [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) spezifizierte {{Glossary("SDP", "SDP")}} ungültig ist.
    Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlerobjekts gibt die Zeilennummer innerhalb des SDP an, an der der Syntaxfehler entdeckt wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn die `sessionDescription` die Eigenschaft [`type`](/de/docs/Web/API/RTCSessionDescription/type) fehlt oder überhaupt kein Beschreibungsparameter angegeben wurde.

Bei Verwendung der veralteten rückrufbasierten Version von `setRemoteDescription()` können folgende Ausnahmen auftreten:

- `InvalidStateError` {{deprecated_inline}}
  - : Der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung ist `"closed"`, was darauf hindeutet, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : Der `sessionDescription`-Parameter ist ungültig.

## Verwendungshinweise

Wenn Sie `setRemoteDescription()` aufrufen, überprüft der ICE-Agent, ob sich die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) entweder im `stable` oder `have-remote-offer` [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) befindet.
Diese Zustände zeigen an, dass entweder eine bestehende Verbindung neu verhandelt wird oder ein Angebot, das durch einen früheren Aufruf von `setRemoteDescription()` angegeben wurde, durch das neue Angebot ersetzt werden soll.
In beiden Fällen befinden wir uns zu Beginn des Verhandlungsprozesses, und das Angebot wird als Remote-Beschreibung gesetzt.

Wenn wir uns hingegen mitten in einer laufenden Verhandlung befinden und ein Angebot in `setRemoteDescription()` übergeben wird, beginnt der ICE-Agent automatisch mit einem ICE-Rollback, um die Verbindung in einen stabilen Signalzustand zurückzubringen und setzt anschließend nach Abschluss des Rollbacks die Remote-Beschreibung auf das angegebene Angebot.
Dies beginnt eine neue Verhandlungssitzung, wobei das neu aufgestellte Angebot der Ausgangspunkt ist.

Beim Start der neuen Verhandlung mit dem neu aufgestellten Angebot ist der lokale Peer jetzt der Angerufene, auch wenn er zuvor der Anrufer war.
Dies geschieht anstatt eine Ausnahme auszulösen und reduziert dadurch die Anzahl potenzieller Fehler, die auftreten können, und vereinfacht die Verarbeitung, die Sie durchführen müssen, wenn Sie ein Angebot erhalten, indem die Notwendigkeit eliminiert wird, den Angebot/Antwort-Prozess abhängig davon unterschiedlich zu behandeln, ob der lokale Peer der Anrufer oder der Angerufene ist.

> [!NOTE]
> Frühere Implementierungen von WebRTC hätten eine Ausnahme ausgelöst, wenn außerhalb eines `stable`- oder `have-remote-offer`-Zustands ein Angebot gesetzt wurde.

## Beispiele

Hier sehen wir eine Funktion, die ein vom entfernten Peer erhaltenes Angebot verarbeitet.
Dieser Code ist abgeleitet von dem Beispiel und Tutorial im Artikel [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling); sehen Sie sich das an, um weitere Details und eine eingehendere Erklärung zu erhalten, was vor sich geht.

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

Nachdem wir unsere [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und sie als `myPeerConnection` gespeichert haben, übergeben wir die in der empfangenen Angebotsnachricht, `msg`, enthaltene Beschreibung direkt an `setRemoteDescription()`, um die WebRTC-Schicht des Benutzeragenten darüber zu informieren, welche Konfiguration der Anrufer vorschlägt zu verwenden.
Wenn unser Promise-Erfüllungshandler aufgerufen wird und anzeigt, dass dies geschehen ist, erstellen wir einen Stream, fügen ihn zur Verbindung hinzu, erstellen dann eine SDP-Antwort und rufen [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um diese als Konfiguration an unserem Ende des Anrufs zu setzen, bevor wir diese Antwort an den Anrufer weiterleiten.

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
