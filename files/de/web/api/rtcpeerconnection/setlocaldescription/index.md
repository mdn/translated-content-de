---
title: "RTCPeerConnection: setLocalDescription()-Methode"
short-title: setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die **`setLocalDescription()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle ändert die lokale Beschreibung, die mit der Verbindung verknüpft ist. Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats. Die Methode nimmt einen einzigen Parameter - die Sitzungsbeschreibung - und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Wenn `setLocalDescription()` aufgerufen wird, während bereits eine Verbindung besteht, bedeutet dies, dass eine Neuverhandlung stattfindet (möglicherweise um sich an sich ändernde Netzbedingungen anzupassen). Da Beschreibungen ausgetauscht werden, bis die beiden Partner sich auf eine Konfiguration einigen, wird die mit `setLocalDescription()` eingereichte Beschreibung nicht sofort wirksam. Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Verhandlung abgeschlossen ist. Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setLocalDescription()
setLocalDescription(sessionDescription)

setLocalDescription(sessionDescription, successCallback, errorCallback) // deprecated
```

### Parameter

- `sessionDescription` {{optional_inline}}

  - : Ein Objekt, das die Konfiguration angibt, die auf das lokale Ende der Verbindung angewendet werden soll. Es sollte die folgenden Eigenschaften enthalten:

    - `type` {{optional_inline}}
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Wenn Sie nicht explizit eine Sitzungsbeschreibung angeben, versucht die WebRTC-Laufzeitumgebung, dies korrekt zu behandeln. Wenn der Signalisierungszustand einer der folgenden ist: `stable`, `have-local-offer` oder `have-remote-pranswer`, erstellt die WebRTC-Laufzeitumgebung automatisch ein neues Angebot und setzt dies als neue lokale Beschreibung. Andernfalls erstellt `setLocalDescription()` eine Antwort, die zur neuen lokalen Beschreibung wird.
    - `sdp` {{optional_inline}}
      - : Ein String, der die SDP enthält, die die Sitzung beschreibt. Wenn `sdp` nicht bereitgestellt wird, wird standardmäßig ein leerer String verwendet. Wenn der `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein.

    Wenn die Beschreibung weggelassen wird, versucht die WebRTC-Laufzeitumgebung automatisch, das Richtige zu tun.

    Sie können auch eine tatsächliche Instanz von [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) übergeben, aber es gibt keinen Unterschied. Aus diesem Grund ist der `RTCSessionDescription`-Konstruktor veraltet.

In älterem Code und Dokumentationen sehen Sie möglicherweise eine callback-basierte Version dieser Funktion, die nicht mehr unterstützt wird und deren Verwendung **stark** abgeraten wird, da sie in Zukunft entfernt werden soll. Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `setLocalDescription()` zu verwenden. Die Parameter für die ältere Form von `setLocalDescription()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich festgelegt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen Remote-Partner gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion mit der Signatur `RTCPeerConnectionErrorCallback`, die aufgerufen wird, wenn die Beschreibung nicht festgelegt werden kann. Sie erhält ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das erklärt, warum die Anforderung fehlgeschlagen ist.

Diese veraltete Form der Methode gibt sofort zurück, ohne auf das tatsächliche Setzen zu warten: Im Erfolgsfall wird der `successCallback` aufgerufen; im Falle eines Fehlers wird der `errorCallback` aufgerufen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) erfolgreich geändert wurde oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden der Partner in der Verbindung nicht kompatibel ist). Der Erfüllungs-Handler des Promises erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess, Beschreibungen zu ändern, umfasst tatsächlich Zwischenstufen, die von der WebRTC-Schicht verarbeitet werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, wenn die Änderung nicht erfolgreich ist. Weitere Details zu diesem Prozess finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Konnektivitätsseite.

### Veraltete Ausnahmen

Bei Verwendung der veralteten, callback-basierten Version von `setLocalDescription()` können die folgenden Ausnahmen auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung `"closed"` ist, was darauf hindeutet, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der `sessionDescription`-Parameter ungültig ist.

## Beispiele

### Implizite Beschreibungen

Einer der Vorteile der parameterfreien Form von `setLocalDescription()` ist, dass Sie damit Ihren Verhandlungscode erheblich vereinfachen können. So sieht Ihr Event-Handler für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis größtenteils aus. Fügen Sie einfach den Signalisierungsserver-Code hinzu, der hier durch den Aufruf von `signalRemotePeer()` dargestellt wird.

```js
pc.addEventListener("negotiationneeded", async (event) => {
  await pc.setLocalDescription();
  signalRemotePeer({ description: pc.localDescription });
});
```

Abgesehen vom Fehlerhandling war das schon fast alles!

### Eigenes Angebot oder eigene Antwort bereitstellen

Das Beispiel unten zeigt die Implementierung eines Handlers für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, der explizit ein Angebot erstellt, anstatt `setLocalDescription()` dies übernehmen zu lassen.

```js
async function handleNegotiationNeededEvent() {
  try {
    const offer = await pc.createOffer();
    pc.setLocalDescription(offer);
    signalRemotePeer({ description: pc.localDescription });
  } catch (err) {
    window.reportError(err);
  }
}
```

Dies beginnt mit der Erstellung eines Angebots durch den Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer); wenn dies erfolgreich ist, rufen wir `setLocalDescription()` auf. Wir können dann das neu erstellte Angebot durch den Signalisierungsserver zum anderen Partner senden, was hier durch den Aufruf einer Funktion namens `signalRemotePeer()` erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
