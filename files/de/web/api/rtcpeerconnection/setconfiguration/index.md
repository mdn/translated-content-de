---
title: "RTCPeerConnection: setConfiguration() Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle setzt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten.
Dies ermöglicht es Ihnen, die von der Verbindung verwendeten ICE-Server sowie die zu verwendenden Transportprotokoll-Richtlinien zu ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dann wahrscheinlich kein sehr häufiger Anwendungsfall) besteht darin, die Menge der zu verwendenden ICE-Server zu ersetzen. Zwei mögliche Szenarien, in denen dies geschehen könnte:

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde erstellt, ohne irgendwelche ICE-Server anzugeben.
  Wenn zum Beispiel der [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) Konstruktor ohne Parameter aufgerufen wurde, müssten Sie `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Verhandlung beginnen kann.
- Eine Neuaushandlung der Verbindung ist erforderlich, und es muss aus irgendeinem Grund eine andere Menge von ICE-Servern verwendet werden.
  Vielleicht ist der Benutzer in eine neue Region umgezogen, daher ist es notwendig, neue regionale ICE-Server zu verwenden.
  In dieser Situation könnte man `setConfiguration()` aufrufen, um zu neuen regionalen ICE-Servern zu wechseln und dann einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) zu initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen einer Verbindung nicht ändern, wenn sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die festzulegenden Optionen bereitstellt.
    Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte die vorhandenen vollständig.
    Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen darüber, welche Optionen erlaubt sind.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN", "TURN")}} Server sind, aber keine vollständigen Anmeldeinformationen bereitgestellt werden (das heißt, entweder der `username` oder das `credential` fehlt, oder wenn `credentialType` `"password"` ist und `credential` kein String ist).
    Dies verhindert eine erfolgreiche Anmeldung am Server.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration` geänderte Identitätsinformationen enthält, aber die Verbindung bereits Identitätsinformationen spezifiziert hat.
    Dies geschieht, wenn `configuration.peerIdentity` oder `configuration.certificates` gesetzt sind und ihre Werte von der aktuellen Konfiguration abweichen.
    Dies kann auch ausgelöst werden, wenn Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy` oder an `configuration.iceCandidatePoolSize` vorgenommen werden, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration.iceServers` keine URLs enthält oder wenn einer der Werte in der Liste ungültig ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE-Neustart erforderlich ist und dass die Verhandlung mit einem anderen ICE-Server durchgeführt werden muss.

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

Zunächst wird ein neues Objekt `restartConfig` erstellt, das den neuen ICE-Server und seine Anmeldeinformationen spezifiziert.
Dies wird dann an `setConfiguration()` übergeben.
Die ICE-Verhandlung wird durch den Aufruf von [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) neu gestartet, was dazu führt, dass das nächste erstellte Angebot die neuen ICE-Serverinformationen enthält.
Von dort aus bearbeiten wir den Prozess wie gewohnt, indem die lokale Beschreibung auf das zurückgegebene Angebot gesetzt und dieses Angebot dann an den anderen Teilnehmer gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
