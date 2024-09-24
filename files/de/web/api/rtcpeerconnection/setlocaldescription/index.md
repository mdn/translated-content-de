---
title: "RTCPeerConnection: setLocalDescription() Methode"
short-title: setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setLocalDescription()`** Methode der {{domxref("RTCPeerConnection")}} Schnittstelle ändert die lokale Beschreibung der Verbindung. Diese Beschreibung legt die Eigenschaften des lokalen Endes der Verbindung fest, einschließlich des Medienformats. Die Methode nimmt einen einzigen Parameter—die Sitzungsbeschreibung—und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

Wenn `setLocalDescription()` aufgerufen wird, während bereits eine Verbindung besteht, bedeutet dies, dass eine Neuverhandlung stattfindet (möglicherweise, um sich an sich ändernde Netzbedingungen anzupassen). Da die Beschreibungen ausgetauscht werden, bis die beiden Peers sich auf eine Konfiguration einigen, nimmt die durch den Aufruf von `setLocalDescription()` übermittelte Beschreibung nicht sofort Wirkung. Stattdessen bleibt die aktuelle Verbindungskonfiguration bestehen, bis die Verhandlung abgeschlossen ist. Erst dann tritt die vereinbarte Konfiguration in Kraft.

## Syntax

```js-nolint
setLocalDescription()
setLocalDescription(sessionDescription)

setLocalDescription(sessionDescription, successCallback, errorCallback) // deprecated
```

### Parameter

- `sessionDescription` {{optional_inline}}
  - : Ein {{domxref("RTCSessionDescriptionInit")}} oder {{domxref("RTCSessionDescription")}}, das die Konfiguration angibt, die auf das lokale Ende der Verbindung angewendet werden soll. Wenn die Beschreibung weggelassen wird, versucht die WebRTC-Laufzeitumgebung automatisch das Passende zu tun.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald der Wert von {{domxref("RTCPeerConnection.localDescription")}} erfolgreich geändert wurde oder abgelehnt wird, wenn die Änderung nicht angewendet werden kann (zum Beispiel, wenn die angegebene Beschreibung mit einem oder beiden Peers der Verbindung nicht kompatibel ist). Der Erfolgs-Handler des Versprechens erhält keine Eingabeparameter.

> [!NOTE]
> Der Prozess, Beschreibungen zu ändern, umfasst tatsächlich Zwischenschritte, die von der WebRTC-Schicht gehandhabt werden, um sicherzustellen, dass eine aktive Verbindung geändert werden kann, ohne die Verbindung zu verlieren, falls die Änderung nicht erfolgreich ist. Siehe [Pending and current descriptions](/de/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) auf der WebRTC-Connectivity-Seite für mehr Details zu diesem Prozess.

#### Implizite Beschreibung

Falls Sie nicht ausdrücklich eine Sitzungsbeschreibung angeben, versucht die WebRTC-Laufzeitumgebung, dies korrekt zu handhaben. Wenn der Signalisierungszustand einer der folgenden ist: `stable`, `have-local-offer`, oder `have-remote-pranswer`, erstellt die WebRTC-Laufzeitumgebung automatisch ein neues Angebot und setzt dieses als neue lokale Beschreibung. Andernfalls erstellt `setLocalDescription()` eine Antwort, die zur neuen lokalen Beschreibung wird.

#### Typ des description-Parameters

Die Beschreibung ist vom Typ `RTCSessionDescriptionInit`, eine serialisierte Version eines {{domxref("RTCSessionDescription")}} Browser-Objekts. Sie sind austauschbar:

```js
myPeerConnection
  .createOffer()
  .then((offer) => myPeerConnection.setLocalDescription(offer));
```

Dies entspricht:

```js
myPeerConnection
  .createOffer()
  .then((offer) =>
    myPeerConnection.setLocalDescription(new RTCSessionDescription(offer)),
  );
```

Aus diesem Grund ist der {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} Konstruktor veraltet.

### Veraltete Parameter

In älterem Code und Dokumentationen kann eine Callback-basierte Version dieser Funktion verwendet werden. Diese ist veraltet und ihre Verwendung wird **dringend** abgeraten, da sie in Zukunft entfernt wird. Sie sollten bestehenden Code aktualisieren, um die auf {{jsxref("Promise")}}-basierende Version von `setLocalDescription()` zu verwenden. Die Parameter der älteren Form von `setLocalDescription()` sind unten beschrieben, um bei der Aktualisierung des bestehenden Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine JavaScript {{jsxref("Function")}}, die keine Eingabeparameter akzeptiert und aufgerufen wird, sobald die Beschreibung erfolgreich gesetzt wurde. Zu diesem Zeitpunkt kann das Angebot über den Signalisierungsserver an einen Remote-Peer gesendet werden.
- `errorCallback` {{deprecated_inline}}
  - : Eine Funktion, die der Signatur `RTCPeerConnectionErrorCallback` entspricht und aufgerufen wird, wenn die Beschreibung nicht gesetzt werden kann. Es wird ein einzelnes {{domxref("DOMException")}}-Objekt übergeben, das erklärt, warum die Anfrage fehlgeschlagen ist.

Diese veraltete Form der Methode gibt sofort zurück, ohne auf das tatsächliche Setzen zu warten: Im Erfolgsfall wird der `successCallback` aufgerufen; im Falle eines Fehlers wird der `errorCallback` aufgerufen.

### Veraltete Ausnahmen

Bei Verwendung der veralteten Callback-basierten Version von `setLocalDescription()` können folgende Ausnahmen auftreten:

- `InvalidStateError` {{domxref("DOMException")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} der Verbindung `"closed"` ist, was darauf hinweist, dass die Verbindung derzeit nicht geöffnet ist, sodass keine Verhandlung stattfinden kann.
- `InvalidSessionDescriptionError` {{domxref("DOMException")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn die {{domxref("RTCSessionDescription")}}, die vom `sessionDescription` Parameter angegeben wird, ungültig ist.

## Beispiele

### Implizite Beschreibungen

Ein Vorteil der parameterlosen Form von `setLocalDescription()` besteht darin, dass Sie Ihren Verhandlungscode erheblich vereinfachen können. Dies ist das Wesentliche, wie Ihr {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} Ereignis-Handler aussehen muss. Fügen Sie einfach den Code für den Signalisierungsserver hinzu, der hier durch den Aufruf von `signalRemotePeer()` dargestellt wird.

```js
pc.addEventListener("negotiationneeded", async (event) => {
  await pc.setLocalDescription();
  signalRemotePeer({ description: pc.localDescription });
});
```

Abgesehen von der Fehlerbehandlung, ist das schon alles!

### Eigenes Angebot oder eigene Antwort bereitstellen

Das folgende Beispiel zeigt die Implementierung eines Handlers für das {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} Ereignis, das explizit ein Angebot erstellt, anstatt `setLocalDescription()` dies tun zu lassen.

```js
async function handleNegotiationNeededEvent() {
  try {
    const offer = await pc.createOffer();
    pc.setLocalDescription(offer);
    signalRemotePeer({ description: pc.localDescription });
  } catch (err) {
    reportError(err);
  }
}
```

Dies beginnt mit der Erstellung eines Angebots durch den Aufruf von {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}}; wenn dies erfolgreich ist, rufen wir `setLocalDescription()` auf. Wir können dann das neu erstellte Angebot über den Signalisierungsserver an den anderen Peer senden, was hier durch den Aufruf einer Funktion namens `signalRemotePeer()` erfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
