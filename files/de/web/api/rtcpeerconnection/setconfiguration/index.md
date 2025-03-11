---
title: "RTCPeerConnection: setConfiguration() Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle setzt die aktuelle Konfiguration der Verbindung basierend auf den Werten des angegebenen Objekts.
Dies ermöglicht es Ihnen, die von der Verbindung verwendeten ICE-Server und die zu verwendenden Transport-Richtlinien zu ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dann ist es wahrscheinlich kein sehr häufiger Anwendungsfall) ist der Austausch des Satzes von zu verwendenden ICE-Servern. Zwei mögliche Szenarien, in denen dies geschehen könnte:

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde ohne Angabe von ICE-Servern instanziiert.
  Wenn beispielsweise der [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) Konstruktor ohne Parameter aufgerufen wurde, müssten Sie `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Aushandlung beginnen kann.
- Eine Neuverhandlung der Verbindung ist erforderlich, und aus irgendeinem Grund muss ein anderer Satz von ICE-Servern verwendet werden.
  Vielleicht ist der Benutzer in eine neue Region umgezogen, daher ist es notwendig, neue regionale ICE-Server zu verwenden.
  In diesem Fall könnte man `setConfiguration()` aufrufen, um auf neue regionale ICE-Server zu wechseln, und dann einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen für eine Verbindung nicht ändern, nachdem sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, welches die zu setzenden Optionen bereitstellt.
    Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte vollständig die vorhandenen.
    Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen darüber, welche Optionen erlaubt sind.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN", "TURN")}} Server ist, aber vollständige Anmeldeinformationen nicht bereitgestellt wurden (d.h. entweder der `username` oder das `credential` fehlt, oder wenn `credentialType` `"password"` ist und `credential` kein String ist).
    Dies verhindert eine erfolgreiche Anmeldung beim Server.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration` geänderte Identitätsinformationen enthält, die Verbindung jedoch bereits Identitätsinformationen spezifiziert hat.
    Dies passiert, wenn `configuration.peerIdentity` oder `configuration.certificates` gesetzt sind und ihre Werte von der aktuellen Konfiguration abweichen.
    Dies kann auch ausgelöst werden, wenn es Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy` gibt, oder an `configuration.iceCandidatePoolSize`, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` keine URLs enthält oder wenn einer der Werte in der Liste ungültig ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE-Neustart erforderlich ist und die Aushandlung mit einem anderen ICE-Server durchgeführt werden muss.

```js
const restartConfig = {
  iceServers: [
    {
      urls: "turn:asia.turn-server.net",
      username: "allie@oopcode.com",
      credential: "topsecretpassword",
    },
  ],
};

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection.restartIce();

myPeerConnection
  .createOffer() // restartIce() causes iceRestart to be set true
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    // send the offer to the other peer using the signaling server
  })
  .catch(window.reportError);
```

Zuerst wird ein neues Objekt `restartConfig` erstellt, welches den neuen ICE-Server und dessen Anmeldedaten spezifiziert.
Dieses wird dann an `setConfiguration()` übergeben.
Die ICE-Aushandlung wird durch Aufruf von [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) neu gestartet, was dazu führt, dass das nächste erstellte Angebot die neuen ICE-Serverinformationen enthält.
Von dort aus wird der Prozess wie gewohnt fortgesetzt, indem die lokale Beschreibung auf das zurückgegebene Angebot gesetzt und dieses Angebot an den anderen Beteiligten gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
