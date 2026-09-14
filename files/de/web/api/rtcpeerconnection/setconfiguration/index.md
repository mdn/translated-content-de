---
title: "Methode RTCPeerConnection: setConfiguration()"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 9c560a9d9de6f663ada0c1bebaf93a3c76e0901d
---

{{APIRef("WebRTC")}}

Die Methode **`setConfiguration()`** des Interfaces [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) legt die aktuelle Konfiguration der Verbindung anhand der im angegebenen Objekt enthaltenen Werte fest.
Damit können Sie die von der Verbindung verwendeten ICE-Server und die zu verwendenden Transportrichtlinien ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dann wahrscheinlich kein sehr häufiger Anwendungsfall) besteht darin, den Satz der zu verwendenden ICE-Server zu ersetzen. Zwei mögliche Szenarien, in denen dies geschehen könnte:

- Die Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde erstellt, ohne ICE-Server anzugeben.
  Wenn beispielsweise der Konstruktor [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) ohne Parameter aufgerufen wurde, müssten Sie anschließend `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Aushandlung beginnen kann.
- Eine erneute Aushandlung der Verbindung ist erforderlich, und aus irgendeinem Grund muss ein anderer Satz von ICE-Servern verwendet werden.
  Möglicherweise hat der Benutzer beispielsweise eine neue Region betreten, sodass die Verwendung neuer regionaler ICE-Server erforderlich ist.
  In dieser Situation könnte `setConfiguration()` aufgerufen werden, um zu neuen regionalen ICE-Servern zu wechseln, und anschließend ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) eingeleitet werden.

> [!NOTE]
> Sie können die Identitätsinformationen für eine Verbindung nicht ändern, nachdem sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die festzulegenden Optionen bereitstellt.
    Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte die vorhandenen Werte vollständig.
    Weitere Informationen zu den zulässigen Optionen finden Sie unter [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN", "TURN")}}-Server sind, aber keine vollständigen Anmeldeinformationen bereitgestellt werden (d.h. entweder `username` oder `credential` fehlt oder `credentialType` `"password"` ist und `credential` kein String ist).
    Dadurch wird eine erfolgreiche Anmeldung beim Server verhindert.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration` geänderte Identitätsinformationen enthält, die Verbindung jedoch bereits Identitätsinformationen angegeben hat.
    Dies geschieht, wenn `configuration.alwaysNegotiateDataChannels`, `configuration.peerIdentity` oder `configuration.certificates` festgelegt sind und sich ihre Werte von der aktuellen Konfiguration unterscheiden.
    Dies kann auch ausgelöst werden, wenn Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy` vorgenommen werden oder an `configuration.iceCandidatePoolSize`, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` keine URLs enthält oder einer der Werte in der Liste ungültig ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE-Neustart erforderlich ist und die Aushandlung unter Verwendung eines anderen ICE-Servers erfolgen muss.

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

Zunächst wird ein neues Objekt, `restartConfig`, erstellt, das den neuen ICE-Server und dessen Anmeldeinformationen angibt.
Dieses wird dann an `setConfiguration()` übergeben.
Die ICE-Aushandlung wird durch den Aufruf von [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) neu gestartet, wodurch das nächste erstellte Angebot die Informationen des neuen ICE-Servers enthält.
Danach behandeln wir den Prozess wie üblich, indem wir die lokale Beschreibung auf das zurückgegebene Angebot setzen und dieses Angebot anschließend an den anderen Peer senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
