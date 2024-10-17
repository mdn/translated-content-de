---
title: "RTCPeerConnection: setConfiguration() Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle setzt die aktuelle Konfiguration der Verbindung basierend auf den Werten im angegebenen Objekt.
Dies ermöglicht es Ihnen, die von der Verbindung verwendeten ICE-Server und die zu verwendenden Transportpolitiken zu ändern.

Die häufigste Verwendung dieser Methode (und selbst dann wahrscheinlich keine sehr häufige Verwendung) besteht darin, den Satz von ICE-Servern zu ersetzen, die verwendet werden sollen. Zwei mögliche Szenarien, in denen dies geschehen könnte:

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde instanziiert, ohne dass ICE-Server angegeben wurden.
  Wenn zum Beispiel der [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) Konstruktor ohne Parameter aufgerufen wurde, müssen Sie `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Aushandlung beginnen kann.
- Eine Neuverhandlung der Verbindung ist erforderlich, und aus irgendeinem Grund muss ein anderer Satz von ICE-Servern verwendet werden.
  Vielleicht hat der Benutzer in eine neue Region gewechselt, sodass es notwendig ist, neue regionale ICE-Server zu verwenden, zum Beispiel.
  In dieser Situation könnte man `setConfiguration()` aufrufen, um zu neuen regionalen ICE-Servern zu wechseln und dann ein [ICE restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) zu initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen einer Verbindung nicht ändern, sobald sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die festzulegenden Optionen bereitstellt.
    Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte die vorhandenen vollständig.
    Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen darüber, welche Optionen zulässig sind.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN", "TURN")}} Server sind, aber keine vollständigen Anmeldeinformationen bereitgestellt werden (d. h. entweder der `username` oder das `credential` fehlt, oder wenn `credentialType` `"password"` ist und `credential` kein String ist).
    Dies verhindert eine erfolgreiche Anmeldung beim Server.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration` geänderte Identitätsinformationen enthält, aber die Verbindung bereits Identitätsinformationen festgelegt hat.
    Dies geschieht, wenn `configuration.peerIdentity` oder `configuration.certificates` festgelegt sind und ihre Werte von der aktuellen Konfiguration abweichen.
    Diese Ausnahme kann auch ausgelöst werden, wenn es Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy`, oder an `configuration.iceCandidatePoolSize` gibt, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` keine URLs enthält oder wenn einer der Werte in der Liste ungültig ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE Neustart erforderlich ist und dass die Aushandlung mit einem anderen ICE-Server durchgeführt werden muss.

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

myPeerConnection
  .createOffer({ iceRestart: true })
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    // send the offer to the other peer using the signaling server
  })
  .catch(window.reportError);
```

Zuerst wird ein neues Objekt, `restartConfig`, erstellt, das den neuen ICE-Server und seine Anmeldeinformationen angibt.
Dieses wird dann an `setConfiguration()` übergeben.
Die ICE-Aushandlung wird durch Aufrufen von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), wobei `true` als Wert für die `iceRestart` Option angegeben wird, neu gestartet.
Von dort aus führt man den Prozess wie gewohnt weiter, indem man die lokale Beschreibung auf das zurückgegebene Angebot setzt und dieses Angebot dann an den anderen Teilnehmer sendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
