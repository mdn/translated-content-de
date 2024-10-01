---
title: "RTCPeerConnection: setConfiguration() Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`**-Methode der Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) legt die aktuelle Konfiguration der Verbindung basierend auf den Werten fest, die im angegebenen Objekt enthalten sind. Dies ermöglicht es Ihnen, die von der Verbindung verwendeten ICE-Server und die zu verwendenden Transport-Richtlinien zu ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dieser ist wahrscheinlich nicht sehr häufig) besteht darin, die Menge der zu verwendenden ICE-Server zu ersetzen. Zwei potenzielle Szenarien, in denen dies möglich sein könnte:

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde erstellt, ohne ICE-Server anzugeben. Wenn zum Beispiel der [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktor ohne Parameter aufgerufen wurde, müssten Sie dann `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Verhandlung beginnen kann.
- Eine Neuverhandlung der Verbindung ist erforderlich, und aus irgendeinem Grund muss ein anderes Set von ICE-Servern verwendet werden. Vielleicht hat sich der Benutzer in eine neue Region bewegt, sodass die Verwendung neuer regionaler ICE-Server notwendig ist. In diesem Fall könnte man `setConfiguration()` aufrufen, um auf neue regionale ICE-Server zu wechseln, und dann einen [ICE Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen einer Verbindung nicht ändern, sobald diese bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die zu setzenden Optionen bereitstellt. Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte vollständig die bestehenden. Weitere Informationen zu erlaubten Optionen finden Sie unter [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN", "TURN")}}-Server sind, jedoch keine vollständigen Anmeldeinformationen bereitgestellt werden (d.h. entweder der `username` oder die `credential` fehlt, oder wenn `credentialType` `"password"` ist und `credential` kein String ist). Dies verhindert eine erfolgreiche Anmeldung beim Server.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration` geänderte Identitätsinformationen enthält, die Verbindung jedoch bereits Identitätsinformationen festgelegt hat. Dies tritt auf, wenn `configuration.peerIdentity` oder `configuration.certificates` festgelegt sind und deren Werte sich von der aktuellen Konfiguration unterscheiden. Dies kann auch auftreten, wenn Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy`, oder an `configuration.iceCandidatePoolSize` vorgenommen werden, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` keine URLs enthält oder wenn einer der Werte in der Liste ungültig ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE-Neustart erforderlich ist und dass die Verhandlung mit einem anderen ICE-Server durchgeführt werden muss.

```js
const restartConfig = {
  iceServers: [
    {
      urls: "turn:asia.myturnserver.net",
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

Zunächst wird ein neues Objekt `restartConfig` erstellt, das den neuen ICE-Server und dessen Anmeldeinformationen angibt. Dieses wird dann in `setConfiguration()` übergeben. Die ICE-Verhandlung wird durch Aufrufen von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), wobei `true` als Wert der `iceRestart`-Option angegeben wird, neu gestartet. Von dort aus erfolgt der Rest des Prozesses wie gewohnt, indem die lokale Beschreibung auf das zurückgegebene Angebot gesetzt wird und dieses Angebot dann an den anderen Teilnehmer gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
