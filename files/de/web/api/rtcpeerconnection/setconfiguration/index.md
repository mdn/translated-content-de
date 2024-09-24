---
title: "RTCPeerConnection: setConfiguration()-Methode"
short-title: setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`setConfiguration()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle legt die aktuelle Konfiguration der Verbindung anhand der in dem angegebenen Objekt enthaltenen Werte fest.
Dies ermöglicht es Ihnen, die von der Verbindung verwendeten ICE-Server und die verwendeten Transportrichtlinien zu ändern.

Der häufigste Anwendungsfall für diese Methode (und selbst dann wahrscheinlich kein sehr häufiger Anwendungsfall) ist das Ersetzen der zu verwendenden ICE-Server. Zwei potenzielle Szenarien, in denen dies getan werden könnte:

- Die {{domxref("RTCPeerConnection")}} wurde instanziiert, ohne ICE-Server anzugeben.
  Wenn zum Beispiel der {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}}-Konstruktor ohne Parameter aufgerufen wurde, müssten Sie `setConfiguration()` aufrufen, um ICE-Server hinzuzufügen, bevor die ICE-Verhandlung beginnen kann.
- Eine Neue Verhandlung der Verbindung ist erforderlich, und es muss aus irgendeinem Grund eine andere Menge von ICE-Servern verwendet werden.
  Vielleicht ist der Benutzer in eine neue Region gezogen, sodass die Verwendung neuer regionaler ICE-Server notwendig ist, beispielsweise.
  In diesem Fall könnte man `setConfiguration()` aufrufen, um zu neuen regionalen ICE-Servern zu wechseln, und dann einen [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) zu initiieren.

> [!NOTE]
> Sie können die Identitätsinformationen einer Verbindung nicht ändern, nachdem sie bereits festgelegt wurden.

## Syntax

```js-nolint
setConfiguration(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt, das die festzulegenden Optionen bereitstellt.
    Die Änderungen sind nicht additiv; die neuen Werte ersetzen die vorhandenen vollständig.
    Weitere Informationen zu den zulässigen Optionen finden Sie unter [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters).

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine oder mehrere der in `configuration.iceServers` angegebenen URLs ein {{Glossary("TURN")}}-Server sind, aber vollständige Anmeldeinformationen nicht bereitgestellt werden (das heißt, entweder der `username` oder `credential` fehlen, oder wenn `credentialType` `"password"` ist und `credential` kein String ist).
    Dies verhindert eine erfolgreiche Anmeldung am Server.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `configuration` geänderte Identitätsinformationen enthält, die Verbindung jedoch bereits Identitätsinformationen angegeben hat.
    Dies geschieht, wenn `configuration.peerIdentity` oder `configuration.certificates` festgelegt sind und ihre Werte von der aktuellen Konfiguration abweichen.
    Dies kann auch ausgelöst werden, wenn Änderungen an `configuration.bundlePolicy` oder `configuration.rtcpMuxPolicy` oder an `configuration.iceCandidatePoolSize` vorgenommen werden, wenn {{domxref("RTCPeerConnection.setLocalDescription()")}} bereits aufgerufen wurde.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("RTCPeerConnection")}} geschlossen ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `configuration.iceServers` keine URLs enthält oder einer der Werte in der Liste ungültig ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `configuration.iceServers` eine URL mit einem nicht unterstützten Schema enthält.

## Beispiel

In diesem Beispiel wurde bereits festgestellt, dass ein ICE-Neustart erforderlich ist und die Verhandlung mit einem anderen ICE-Server durchgeführt werden muss.

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
  .catch(reportError);
```

Zuerst wird ein neues Objekt, `restartConfig`, erstellt, das den neuen ICE-Server und seine Anmeldeinformationen angibt.
Dies wird dann an `setConfiguration()` übergeben.
Die ICE-Verhandlung wird durch den Aufruf von {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}} neu gestartet, wobei `true` als Wert der `iceRestart`-Option angegeben wird.
Von dort aus wird der Prozess wie gewohnt fortgesetzt, indem die lokale Beschreibung auf das zurückgegebene Angebot gesetzt und dieses Angebot dann an den anderen Teilnehmer gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCPeerConnection.getConfiguration()")}}
- {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
- {{domxref("RTCPeerConnection")}}
