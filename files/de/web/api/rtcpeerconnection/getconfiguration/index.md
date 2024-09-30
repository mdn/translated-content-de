---
title: "RTCPeerConnection: Methode getConfiguration()"
short-title: getConfiguration()
slug: Web/API/RTCPeerConnection/getConfiguration
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`getConfiguration()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Objekt zurück, das die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), auf der die Methode aufgerufen wird, angibt.

Die zurückgegebene Konfiguration ist die zuletzt über [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) angewandte oder, falls `setConfiguration()` nicht aufgerufen wurde, die Konfiguration, mit der die `RTCPeerConnection` erstellt wurde. Die Konfiguration enthält eine Liste der von der Verbindung verwendeten ICE-Server, Informationen über Transportrichtlinien und Identitätsinformationen.

## Syntax

```js-nolint
getConfiguration()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreibt. Siehe [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#parameters) für weitere Informationen über zulässige Optionen.

## Beispiele

Dieses Beispiel fügt einer aktiven Verbindung ein neues Zertifikat hinzu, falls bereits keines verwendet wird.

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

Dieses Beispiel ruft die aktuelle Konfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ab und prüft dann, ob Zertifikate gesetzt sind, indem (a) überprüft wird, ob die Konfiguration einen Wert für `certificates` hat, und (b) ob deren Länge null ist.

Wenn festgestellt wird, dass keine Zertifikate vorhanden sind, wird [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufgerufen, um ein neues Zertifikat zu erstellen; es wird ein Erfüllungs-Handler bereitgestellt, der ein neues Array mit dem neu erstellten Zertifikat zur aktuellen Konfiguration hinzufügt und es an [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnect/setConfiguration) übergibt, um das Zertifikat zur Verbindung hinzuzufügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
