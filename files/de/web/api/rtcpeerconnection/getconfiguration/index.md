---
title: "RTCPeerConnection: Methode getConfiguration()"
short-title: getConfiguration()
slug: Web/API/RTCPeerConnection/getConfiguration
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`getConfiguration()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration der {{domxref("RTCPeerConnection")}} angibt, auf der die Methode aufgerufen wird.

Die zurückgegebene Konfiguration ist die zuletzt angewendete Konfiguration über {{domxref("RTCPeerConnection.setConfiguration","setConfiguration()")}}, oder wenn
`setConfiguration()` nicht aufgerufen wurde, die Konfiguration, mit der die `RTCPeerConnection` erstellt wurde.
Die Konfiguration enthält eine Liste der von der Verbindung verwendeten ICE-Server, Informationen zu Transport-Richtlinien und Identitätsinformationen.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration der {{domxref("RTCPeerConnection")}} beschreibt.
Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen zu den erlaubten Optionen.

## Beispiele

Dieses Beispiel fügt einer aktiven Verbindung ein neues Zertifikat hinzu, wenn noch keines verwendet wird.

```js
let configuration = myPeerConnection.getConfiguration();

if (configuration.certificates?.length === 0) {
  RTCPeerConnection.generateCertificate({
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-256",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
  }).then((cert) => {
    configuration.certificates = [cert];
    myPeerConnection.setConfiguration(configuration);
  });
}
```

Dieses Beispiel holt sich die aktuelle Konfiguration der {{domxref("RTCPeerConnection")}}, untersucht dann, ob sie bereits Zertifikate hat, indem geprüft wird, ob (a) die Konfiguration einen Wert für `certificates` hat und (b) ob die Länge davon null ist.

Wenn festgestellt wird, dass keine Zertifikate vorhanden sind, wird {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}} aufgerufen, um ein neues Zertifikat zu erstellen; wir stellen einen Fulfillment-Handler bereit, der ein neues Array mit dem neu erstellten Zertifikat zur aktuellen Konfiguration hinzufügt und es an {{domxref("RTCPeerConnect.setConfiguration", "setConfiguration()")}} übergibt, um das Zertifikat zur Verbindung hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCPeerConnection.setConfiguration()")}}
- {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
- {{domxref("RTCPeerConnection")}}
