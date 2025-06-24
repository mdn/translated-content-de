---
title: "RTCPeerConnection: setLocalDescription() Methode"
short-title: setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`setLocalDescription()`** Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces ändert die lokale Beschreibung, die mit der Verbindung verknüpft ist. Diese Beschreibung spezifiziert die Eigenschaften des lokalen Endes der Verbindung, einschließlich des Medienformats. Die Methode nimmt einen einzigen Parameter - die Sitzungsbeschreibung - und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Wenn `setLocalDescription()` aufgerufen wird, während bereits eine Verbindung besteht, bedeutet dies, dass gerade eine Neuverhandlung stattfindet (möglicherweise um sich an sich ändernde Netzwerkbedingungen anzupassen). Da die Beschreibungen ausgetauscht werden, bis sich die beiden Peers auf eine Konfiguration einigen, wird die Beschreibung, die durch den Aufruf von `setLocalDescription()` übermittelt wird, nicht sofort wirksam. Stattdessen bleibt die aktuelle Konfigurationsverbindung bestehen, bis die Verhandlung abgeschlossen ist. Erst dann wird die vereinbarte Konfiguration wirksam.

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
      - : Ein String, der den Typ der Sitzungsbeschreibung angibt. Wenn Sie nicht explizit eine Sitzungsbeschreibung angeben, versucht die WebRTC-Laufzeitumgebung, sie korrekt zu behandeln. Wenn der Signalisierungszustand einer der folgenden ist: `stable`, `have-local-offer` oder `have-remote-pranswer`, erstellt die WebRTC-Laufzeitumgebung automatisch ein neues Angebot und legt es als neue lokale Beschreibung fest. Andernfalls erstellt `setLocalDescription()` eine Antwort, die zur neuen lokalen Beschreibung wird.
    - `sdp` {{optional_inline}}
      - : Ein String, der die SDP beschreibt, die die Sitzung beschreibt. Wenn sdp nicht bereitgestellt wird, wird es auf einen leeren String zurückgesetzt. Wenn `type` `"rollback"` ist, muss `sdp` null oder ein leerer String sein.

    Wenn die Beschreibung weggelassen wird, versucht die WebRTC-Laufzeitumgebung, automatisch das Richtige zu tun.

    Sie können auch eine tatsächliche [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Instanz übergeben, aber es gibt keinen Unterschied. Aus diesem Grund wird der `RTCSessionDescription`-Konstruktor als veraltet betrachtet.

In älterem Code und Dokumentationen können Sie eine rückrufbasierte Version dieser Funktion verwenden. Diese ist veraltet und ihre Verwendung wird **stark** abgeraten, da sie in Zukunft entfernt wird. Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `setLocalDescription()` zu verwenden. Die Parameter der älteren Form von `setLocalDescription()` sind unten beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript-{{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich festgelegt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen entfernten Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion mit der Signatur `RTCPeerConnectionErrorCallback`, die aufgerufen wird, wenn die Beschreibung nicht festgelegt werden kann. Es wird ein einzelnes [`DOMException`](/de/docs/Web/API/DOMException)-Objekt übergeben, das erklärt, warum die Anfrage fehlgeschlagen ist.

Diese veraltete Form der Methode kehrt sofort zurück, ohne auf das tatsächliche Setzen zu warten: Im Erfolgsfall wird der `successCallback` aufgerufen; im Fehlerfall wird der `errorCallback` aufgerufen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) erfolgreich geändert wurde oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung inkompatibel mit einem oder beiden Peers in der Verbindung ist). Der Erfüllungshandler des Versprechens erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess des Änderns von Beschreibungen umfasst tatsächlich Zwischenschritte, die von der WebRTC-Schicht verwaltet werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, wenn die Änderung nicht erfolgreich ist. Siehe [Ausstehende und aktuelle Beschreibungen](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC Connectivity-Seite für weitere Details zu diesem Prozess.

### Veraltete Ausnahmen

Bei Verwendung der veralteten rückrufbasierten Version von `setLocalDescription()` können die folgenden Ausnahmen auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung im Zustand `"closed"` befindet, was darauf hinweist, dass die Verbindung derzeit nicht offen ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` [`DOMException`](/de/docs/Web/API/DOMException) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der Parameter `sessionDescription` ungültig ist.

## Beispiele

### Implizite Beschreibungen

Ein Vorteil der parameterlosen Form von `setLocalDescription()` besteht darin, dass Sie Ihren Verhandlungscode erheblich vereinfachen können. So sollte Ihr [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler im Wesentlichen aussehen. Fügen Sie einfach den Code für den Signalisierungsserver hinzu, der hier durch den Aufruf von `signalRemotePeer()` dargestellt wird.

```js
pc.addEventListener("negotiationneeded", async (event) => {
  await pc.setLocalDescription();
  signalRemotePeer({ description: pc.localDescription });
});
```

Abgesehen von der Fehlerbehandlung war es das im Wesentlichen!

### Eigene Angebote oder Antworten bereitstellen

Das folgende Beispiel zeigt die Implementierung eines Handlers für das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das explizit ein Angebot erstellt, anstatt `setLocalDescription()` dies übernehmen zu lassen.

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

Dies beginnt mit der Erstellung eines Angebots durch den Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer); wenn das erfolgreich ist, rufen wir `setLocalDescription()` auf. Wir können dann das neu erstellte Angebot über den Signalisierungsserver an den anderen Peer senden, was hier durch den Aufruf einer Funktion namens `signalRemotePeer()` erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
