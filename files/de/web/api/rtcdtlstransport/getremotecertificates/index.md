---
title: "RTCDtlsTransport: Methode getRemoteCertificates()"
short-title: getRemoteCertificates()
slug: Web/API/RTCDtlsTransport/getRemoteCertificates
l10n:
  sourceCommit: 2dc27362f1f5a228a279f869784597b94a2f8d96
---

{{APIRef("WebRTC")}}

Die Methode **`getRemoteCertificates()`** des [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Interfaces gibt die Zertifikatskette des entfernten Peers der DTLS-Verbindung zurück.

## Syntax

```js-nolint
getRemoteCertificates()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{jsxref("ArrayBuffer")}}-Objekten, die die Zertifikatskette des entfernten Peers darstellen.
Jedes Objekt enthält ein DER-kodiertes X.509-Zertifikat.

Für [`new`](/de/docs/Web/API/RTCDtlsTransport/state#new) Verbindungen ist dies ein leeres Array. Es wird mit den Zertifikaten des entfernten Peers gefüllt, wenn der Status des Transports auf [`connected`](/de/docs/Web/API/RTCDtlsTransport/state#connected) wechselt.

### Ausnahmen

Keine

## Beschreibung

WebRTC-Medien- und Datenkanäle sind durch Datagram Transport Layer Security (DTLS) gesichert.
Während der Signalisierung bewirbt jeder Endpunkt den Fingerabdruck des DTLS-Zertifikats, das er präsentieren wird.
Während des DTLS-Handshakes überprüft der Browser, dass das vom entfernten Peer präsentierte Zertifikat mit dem Fingerabdruck im verhandelten SDP übereinstimmt.

DTLS garantiert, dass der verbundene Peer derjenige ist, mit dem Sie verhandelt haben, da nur dieser Peer über den privaten Schlüssel verfügt, der mit dem Zertifikat übereinstimmt, dessen Fingerabdruck während der Signalisierung ausgetauscht wurde.
Da WebRTC jedoch selbstsignierte Zertifikate verwendet, anstatt solche, die von einer Zertifizierungsstelle ausgestellt werden, identifiziert das Zertifikat nicht die Person, den Dienst oder das Gerät am anderen Ende.
Die Identität des entfernten Peers muss normalerweise über einen externen Mechanismus festgestellt werden, wie z.B. durch einen Vergleich der Zertifikatsfingerabdrücke mündlich über einen Telefonanruf oder über einen separaten authentifizierten Kanal.

Die Methode `getRemoteCertificates()` ermöglicht es Ihnen, die von DTLS verwendeten entfernten Zertifikate zu erhalten und sie für die _Anwendungsschicht_-Authentifizierung des entfernten Peers zu verwenden.

Für die Fingerabdruckkontinuität muss jeder Peer dasselbe Zertifikat über Sitzungen hinweg verwenden, anstatt bei jeder Verbindung ein neues zu generieren.
Nachdem Sie sich mit dem entfernten Peer verbunden haben, würden Sie Informationen extern austauschen, um zu überprüfen, dass es sich um die beabsichtigte Partei handelt, und `getRemoteCertificates()` verwenden, um ihre Zertifikate zu erhalten.
Wenn Sie sich anschließend mit diesem entfernten Peer verbinden, würden Sie nur die Kommunikation zulassen, wenn er genau dieselben Zertifikatsfingerabdrücke hat.
Es gibt immer noch ein Zeitfenster für einen Mann-in-der-Mitte-Angriff, aber es existiert nur für die allererste Verbindung zwischen den Peers.

Beachten Sie, dass `getRemoteCertificates()` rohe, DER-kodierte X.509-Zertifikate als `ArrayBuffer`-Objekte zurückgibt.
Distinguished Encoding Rules (DER) ist das binäre Serialisierungsformat, das für X.509-Zertifikate in TLS und DTLS verwendet wird.
Im Gegensatz zu [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) exponieren diese Puffer Fingerabdrücke und Verfallsdaten nicht direkt.
Um mit ihnen zu arbeiten, müssen Sie die rohen Bytes verarbeiten: Sie können den Puffer mit [`SubtleCrypto.digest()`](/de/docs/Web/API/SubtleCrypto/digest) hashen, um einen Fingerabdruck zu berechnen (wie im untenstehenden Beispiel gezeigt) oder ihn an eine X.509-Parsing-Bibliothek übergeben, um einzelne Felder zu inspizieren.

## Beispiel

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man das Zertifikat des entfernten Peers nach dem DTLS-Handshake fingerabdruckt und es mit einem gespeicherten Wert vergleicht.

```js
async function getRemoteFingerprint(dtlsTransport) {
  const certs = dtlsTransport.getRemoteCertificates();
  if (certs.length === 0) {
    return null;
  }

  // Hash the raw DER-encoded certificate with SHA-256
  const digest = await crypto.subtle.digest("SHA-256", certs[0]);

  // Format as colon-separated hex, matching the SDP a=fingerprint convention
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(":");
}

// Call after the DTLS handshake is complete
pc.addEventListener("connectionstatechange", async () => {
  if (pc.connectionState === "connected") {
    const sender = pc.getSenders()[0];
    if (!sender?.transport) return;

    const fingerprint = await getRemoteFingerprint(sender.transport);
    if (!fingerprint) return;
    const stored = localStorage.getItem("remote-peer-fingerprint");

    if (!stored) {
      localStorage.setItem("remote-peer-fingerprint", fingerprint);
    } else if (stored !== fingerprint) {
      console.error("Certificate mismatch — closing connection");
      pc.close();
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
