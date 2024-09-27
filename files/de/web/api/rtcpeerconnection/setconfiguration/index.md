---
title: "RTCPeerConnection: setConfiguration()-Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle legt die aktuelle Konfiguration der Verbindung basierend auf den Werten des angegebenen Objekts fest. Dadurch können Sie die von der Verbindung verwendeten ICE-Server und die zu verwendenden Transportprotokolle ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dann möglicherweise kein sehr häufiger Anwendungsfall) ist das Ersetzen der zu verwendenden ICE-Server. Zwei mögliche Szenarien, in denen dies geschehen könnte:

- Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wurde instanziiert, ohne ICE-Server anzugeben. Wenn z.B. der [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktor ohne Parameter aufgerufen wurde, müssen Sie `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Aushandlung beginnen kann.
- Eine Neuverhandlung der Verbindung ist erforderlich, und es muss aus irgendeinem Grund ein anderer Satz von ICE-Servern verwendet werden. Vielleicht ist der Benutzer in eine neue Region umgezogen, sodass die Verwendung neuer regionaler ICE-Server erforderlich ist. In dieser Situation könnte man `setConfiguration()` aufrufen, um zu neuen regionalen ICE-Servern zu wechseln, und dann einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen für eine Verbindung nicht ändern, nachdem sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die festzulegenden Optionen bereitstellt. Die Änderungen sind nicht additiv; stattdessen ersetzen die neuen Werte vollständig die vorhandenen Werte. Weitere Informationen zu den zulässigen Optionen finden Sie in [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine oder mehrere URLs, die in `configuration.iceServers` angegeben sind, ein [TURN](/de/docs/Glossary/TURN)-Server ist, aber keine vollständigen Anmeldeinformationen bereitgestellt werden (d.h., entweder der `username` oder das `credential` fehlt oder wenn `credentialType` `"password"` ist und `credential` kein String ist). Dies verhindert eine erfolgreiche Anmeldung beim Server.
- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die `configuration` geänderte Identitätsinformationen enthält, die Verbindung jedoch bereits Identitätsinformationen spezifiziert hat. Dies geschieht, wenn `configuration.peerIdentity` oder `configuration.certificates` gesetzt sind und ihre Werte von der aktuellen Konfiguration abweichen. Dies kann auch ausgelöst werden, wenn es Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy` oder an `configuration.iceCandidatePoolSize` gibt, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) bereits aufgerufen wurde.
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

Zuerst wird ein neues Objekt, `restartConfig`, erstellt, das den neuen ICE-Server und seine Anmeldeinformationen spezifiziert. Dieses wird dann `setConfiguration()` übergeben. Die ICE-Aushandlung wird durch Aufrufen von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) neu gestartet, wobei `true` als Wert der `iceRestart`-Option angegeben wird. Von dort aus führen wir den Prozess wie gewohnt fort, indem wir die lokale Beschreibung auf das zurückgegebene Angebot setzen und dieses Angebot dann an den anderen Teilnehmer senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
