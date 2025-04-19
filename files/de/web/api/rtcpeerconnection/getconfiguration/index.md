---
title: "RTCPeerConnection: getConfiguration()-Methode"
short-title: getConfiguration()
slug: Web/API/RTCPeerConnection/getConfiguration
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("WebRTC")}}

Die **`getConfiguration()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt, auf der die Methode aufgerufen wird.

Die zurückgegebene Konfiguration ist die zuletzt über [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) angewandte Konfiguration, oder, wenn `setConfiguration()` nicht aufgerufen wurde, die Konfiguration, mit der die `RTCPeerConnection` konstruiert wurde. Die Konfiguration umfasst eine Liste der von der Verbindung verwendeten ICE-Server, Informationen über Transportpolitiken und Identitätsinformationen.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreibt. Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen zu den zulässigen Optionen.

## Beispiele

Dieses Beispiel fügt einer aktiven Verbindung ein neues Zertifikat hinzu, wenn diese nicht bereits eines verwendet.

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

In diesem Beispiel wird die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) abgerufen. Dann wird überprüft, ob Zertifikate gesetzt sind, indem festgestellt wird, ob (a) die Konfiguration einen Wert für `certificates` hat und (b) ob deren Länge null ist.

Wenn festgestellt wird, dass keine Zertifikate vorhanden sind, wird [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufgerufen, um ein neues Zertifikat zu erstellen. Es wird ein Fulfillment-Handler bereitgestellt, der ein neues Array mit dem neu erstellten Zertifikat zur aktuellen Konfiguration hinzufügt und es an [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) übergibt, um das Zertifikat der Verbindung hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
