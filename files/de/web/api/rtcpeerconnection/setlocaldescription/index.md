---
title: "RTCPeerConnection: Methode setLocalDescription()"
short-title: setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die **`setLocalDescription()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle ändert die lokale Beschreibung, die mit der Verbindung verknüpft ist. Diese Beschreibung legt die Eigenschaften des lokalen Endes der Verbindung fest, einschließlich des Medienformats. Die Methode nimmt einen einzelnen Parameter - die Sitzungsbeschreibung - und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Wenn `setLocalDescription()` aufgerufen wird, während bereits eine Verbindung besteht, bedeutet dies, dass eine Neuverhandlung im Gange ist (möglicherweise zur Anpassung an sich ändernde Netzwerkbedingungen). Da Beschreibungen ausgetauscht werden, bis die beiden Peers eine Konfiguration vereinbaren, tritt die durch den Aufruf von `setLocalDescription()` übermittelte Beschreibung nicht sofort in Kraft. Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Verhandlung abgeschlossen ist. Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setLocalDescription()
setLocalDescription(sessionDescription)

setLocalDescription(sessionDescription, successCallback, errorCallback) // deprecated
```

### Parameter

- `sessionDescription` {{optional_inline}}

  - : Ein Objekt, das die Konfiguration spezifiziert, die auf das lokale Ende der Verbindung angewendet werden soll. Es sollte die folgenden Eigenschaften enthalten:

    - `type` {{optional_inline}}
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Wenn Sie nicht explizit eine Sitzungsbeschreibung bereitstellen, versucht die WebRTC-Laufzeitumgebung, sie korrekt zu handhaben. Wenn der Signalisierungsstatus einer der folgenden ist: `stable`, `have-local-offer` oder `have-remote-pranswer`, erstellt die WebRTC-Laufzeitumgebung automatisch ein neues Angebot und legt dieses als neue lokale Beschreibung fest. Andernfalls erstellt `setLocalDescription()` eine Antwort, die zur neuen lokalen Beschreibung wird.
    - `sdp` {{optional_inline}}
      - : Ein String, der das SDP beschreibt, das die Sitzung beschreibt. Wenn kein SDP bereitgestellt wird, wird es standardmäßig auf einen leeren String gesetzt. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein.

    Wenn die Beschreibung weggelassen wird, versucht die WebRTC-Laufzeitumgebung automatisch das Richtige zu tun.

    Sie können auch eine tatsächliche [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Instanz übergeben, aber es gibt keinen Unterschied. Aus diesem Grund ist der `RTCSessionDescription`-Konstruktor veraltet.

In älterem Code und Dokumentation kann eine Callback-basierte Version dieser Funktion verwendet werden. Diese ist veraltet und ihre Nutzung wird **stark** abgeraten, da sie in Zukunft entfernt wird. Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}}-basierte Version von `setLocalDescription()` zu verwenden. Die Parameter der älteren Form von `setLocalDescription()` sind unten beschrieben, um das Aktualisieren vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen Remote-Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion, die der Signatur `RTCPeerConnectionErrorCallback` entspricht und aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann. Es wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anforderung fehlgeschlagen ist.

Diese veraltete Methode gibt unmittelbar zurück, ohne darauf zu warten, dass die tatsächliche Einstellung vorgenommen wird: Im Erfolgsfall wird der `successCallback` aufgerufen; im Fehlerfall wird der `errorCallback` aufgerufen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) erfolgreich geändert wurde oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung nicht kompatibel ist). Der Erfüllungshandler des Promise erhält keine Eingabewerte.

> [!NOTE]
> Der Prozess der Änderung von Beschreibungen umfasst tatsächlich Zwischenstufen, die von der WebRTC-Schicht gehandhabt werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, falls die Änderung nicht gelingt. Weitere Einzelheiten zu diesem Prozess finden Sie unter [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der Seite zur WebRTC-Konnektivität.

### Veraltete Ausnahmen

Beim Verwenden der veralteten Callback-basierten Version von `setLocalDescription()` können folgende Ausnahmen auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung `"closed"` ist, was darauf hinweist, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der `sessionDescription`-Parameter ungültig ist.

## Beispiele

### Implizite Beschreibungen

Einer der Vorteile der paramaterlosen Form von `setLocalDescription()` besteht darin, dass Sie Ihren Verhandlungscode erheblich vereinfachen können. Dies ist alles, was Ihr [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler in der Regel sein muss. Fügen Sie einfach den Signalisierungsserver-Code hinzu, der hier durch den Aufruf von `signalRemotePeer()` dargestellt wird.

```js
pc.addEventListener("negotiationneeded", async (event) => {
  await pc.setLocalDescription();
  signalRemotePeer({ description: pc.localDescription });
});
```

Abgesehen von der Fehlerbehandlung war es das auch schon!

### Eigenes Angebot oder eigene Antwort bereitstellen

Das folgende Beispiel zeigt die Implementierung eines Handlers für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, der explizit ein Angebot erstellt, anstatt `setLocalDescription()` dies tun zu lassen.

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

Dies beginnt mit der Erstellung eines Angebots durch den Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer); wenn dies gelingt, rufen wir `setLocalDescription()` auf. Anschließend können wir das neu erstellte Angebot über den Signalisierungsserver an den anderen Peer senden, was hier durch den Aufruf einer Funktion namens `signalRemotePeer()` erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
