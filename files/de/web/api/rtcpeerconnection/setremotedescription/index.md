---
title: "RTCPeerConnection: Methode setRemoteDescription()"
short-title: setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
l10n:
  sourceCommit: 9a089fa5a5fa17a5e4e9793ffcf59032f930447b
---

{{APIRef("WebRTC")}}

Die Methode **`setRemoteDescription()`** der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) legt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder aktuelle Antwort des entfernten Peers fest.
Die Beschreibung gibt die Eigenschaften der entfernten Seite der Verbindung an, einschließlich des Medienformats.
Die Methode nimmt einen einzelnen Parameter entgegen – die Sitzungsbeschreibung – und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Sie wird üblicherweise aufgerufen, nachdem ein Angebot oder eine Antwort von einem anderen Peer über den Signalisierungsserver empfangen wurde.
Beachten Sie: Wenn `setRemoteDescription()` aufgerufen wird, während bereits eine Verbindung besteht, findet eine Neuverhandlung statt (möglicherweise, um sich an veränderte Netzwerkbedingungen anzupassen).

Da die Peers Beschreibungen austauschen, bis sie sich auf eine Konfiguration geeinigt haben, wird die durch den Aufruf von `setRemoteDescription()` übermittelte Beschreibung nicht sofort wirksam.
Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Aushandlung abgeschlossen ist.
Erst dann wird die vereinbarte Konfiguration wirksam.

## Syntax

```js-nolint
setRemoteDescription(sessionDescription)

// deprecated
setRemoteDescription(sessionDescription, successCallback, errorCallback)
```

### Parameter

- `sessionDescription`
  - : Ein Objekt, das das aktuelle Angebot oder die aktuelle Antwort des entfernten Peers angibt. Es sollte die folgenden Eigenschaften enthalten:
    - `type`
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Siehe [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type).
    - `sdp` {{optional_inline}}
      - : Ein String mit dem SDP, das die Sitzung beschreibt. Wenn sdp nicht angegeben wird, ist der Standardwert ein leerer String. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein. Siehe [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp).

    Sie können auch eine Instanz von [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) übergeben; das macht jedoch keinen Unterschied. Aus diesem Grund ist der Konstruktor `RTCSessionDescription` veraltet.

In älterem Code und älterer Dokumentation finden Sie möglicherweise eine Callback-basierte Version dieser Funktion.
Diese ist veraltet, und von ihrer Verwendung wird _dringend_ abgeraten.
Sie sollten vorhandenen Code aktualisieren und stattdessen die auf {{jsxref("Promise")}} basierende Version von `setRemoteDescription()` verwenden.
Die Parameter der älteren Form von `setRemoteDescription()` sind im Folgenden beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}} ohne Eingabeparameter, die aufgerufen wird, sobald die Beschreibung erfolgreich festgelegt wurde.
    Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion mit der Signatur `RTCPeerConnectionErrorCallback`, die aufgerufen wird, wenn die Beschreibung nicht festgelegt werden kann.
    Ihr wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anfrage fehlgeschlagen ist.

Diese veraltete Form der Methode gibt sofort einen Wert zurück, ohne darauf zu warten, dass die Beschreibung tatsächlich festgelegt wird: Bei Erfolg wird `successCallback` aufgerufen, bei einem Fehler `errorCallback`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert von [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) der Verbindung erfolgreich geändert wurde. Es wird zurückgewiesen, wenn die Änderung nicht angewendet werden kann (beispielsweise, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung nicht kompatibel ist).
Der Handler für die Erfüllung des Promise erhält keine Eingabeparameter.

> [!NOTE]
> Das Ändern von Beschreibungen umfasst Zwischenschritte, die von der WebRTC-Schicht durchgeführt werden. So wird sichergestellt, dass eine aktive Verbindung geändert werden kann, ohne dass sie verloren geht, falls die Änderung nicht erfolgreich ist.
> Weitere Einzelheiten dazu finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der Seite zur WebRTC-Konnektivität.

### Ausnahmen

Die folgenden Ausnahmen werden an den Handler für die Zurückweisung des von `setRemoteDescription()` zurückgegebenen Promise übergeben:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Inhalt der Beschreibung ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist oder sich in einem Zustand befindet, der nicht mit dem [`type`](/de/docs/Web/API/RTCSessionDescription/type) der angegebenen Beschreibung kompatibel ist.
    Diese Ausnahme wird beispielsweise ausgelöst, wenn `type` den Wert `rollback` hat und der Signalisierungszustand `stable`, `have-local-pranswer` oder `have-remote-pranswer` ist. Eine Verbindung kann nicht zurückgesetzt werden, wenn sie bereits vollständig hergestellt ist oder kurz vor dem Abschluss des Verbindungsaufbaus steht.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der keiner der hier genannten Ausnahmen entspricht. Dazu gehören Fehler bei der Identitätsprüfung.
- [`RTCError`](/de/docs/Web/API/RTCError)
  - : Wird mit dem Wert `sdp-syntax-error` für [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) zurückgegeben, wenn das durch [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) angegebene {{Glossary("SDP", "SDP")}} ungültig ist.
    Die Eigenschaft [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber) des Fehlerobjekts gibt die Zeilennummer innerhalb des SDP an, in der der Syntaxfehler erkannt wurde.
- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn bei `sessionDescription` die Eigenschaft [`type`](/de/docs/Web/API/RTCSessionDescription/type) fehlt oder überhaupt kein Beschreibungsparameter angegeben wurde.

Bei Verwendung der veralteten Callback-basierten Version von `setRemoteDescription()` können die folgenden Ausnahmen auftreten:

- `InvalidStateError` {{deprecated_inline}}
  - : Der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung ist `"closed"`. Das bedeutet, dass die Verbindung derzeit nicht geöffnet ist und daher keine Aushandlung stattfinden kann.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : Der Parameter `sessionDescription` ist ungültig.

## Hinweise zur Verwendung

Wenn Sie `setRemoteDescription()` aufrufen, prüft der ICE-Agent, ob sich [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) im [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) `stable` oder `have-remote-offer` befindet.
Diese Zustände zeigen an, dass entweder eine bestehende Verbindung neu ausgehandelt wird oder ein Angebot, das bei einem früheren Aufruf von `setRemoteDescription()` angegeben wurde, durch das neue Angebot ersetzt werden soll.
In beiden Fällen befindet sich der Aushandlungsprozess am Anfang, und das Angebot wird als entfernte Beschreibung festgelegt.

Wenn sich die Verbindung dagegen mitten in einer laufenden Aushandlung befindet und ein Angebot an `setRemoteDescription()` übergeben wird, beginnt der ICE-Agent automatisch ein ICE-Rollback, um die Verbindung in einen stabilen Signalisierungszustand zurückzuführen. Sobald das Rollback abgeschlossen ist, legt er das angegebene Angebot als entfernte Beschreibung fest.
Damit beginnt eine neue Aushandlung, deren Ausgangspunkt das neu festgelegte Angebot ist.

Zu Beginn der neuen Aushandlung mit dem neu festgelegten Angebot ist der lokale Peer nun der Angerufene, auch wenn er zuvor der Anrufer war.
Statt eine Ausnahme auszulösen, verringert dieses Verhalten die Zahl möglicher Fehler. Außerdem vereinfacht es die Verarbeitung eingehender Angebote: Sie müssen den Angebots- und Antwortprozess nicht unterschiedlich behandeln, je nachdem, ob der lokale Peer Anrufer oder Angerufener ist.

> [!NOTE]
> Frühere Implementierungen von WebRTC lösten eine Ausnahme aus, wenn ein Angebot außerhalb des Zustands `stable` oder `have-remote-offer` festgelegt wurde.

## Beispiele

Hier sehen Sie eine Funktion, die ein vom entfernten Peer empfangenes Angebot verarbeitet.
Dieser Code stammt aus dem Beispiel und dem Tutorial im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling). Dort finden Sie weitere Einzelheiten und eine ausführlichere Erklärung der Abläufe.

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

Nachdem wir unsere [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und als `myPeerConnection` gespeichert haben, übergeben wir die im empfangenen Angebot enthaltene Beschreibung aus der Nachricht `msg` direkt an `setRemoteDescription()`. So teilen wir der WebRTC-Schicht des User Agents mit, welche Konfiguration der Anrufer vorgeschlagen hat.
Wenn der Handler für die Erfüllung unseres Promise aufgerufen wird und damit anzeigt, dass dies geschehen ist, erstellen wir einen Stream und fügen ihn der Verbindung hinzu. Anschließend erstellen wir eine SDP-Antwort und rufen [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um sie als Konfiguration für unsere Seite des Anrufs festzulegen, bevor wir die Antwort an den Anrufer weiterleiten.

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
