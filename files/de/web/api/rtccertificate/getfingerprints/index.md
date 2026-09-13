---
title: "RTCCertificate: getFingerprints() Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode des **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)** Interfaces wird verwendet, um ein Array von Zertifikat-Fingerabdrücken zu erhalten.

Dies kann im Anwendungscode verwendet werden, um Zertifikat-Fingerabdrücke zu erhalten, bei denen es sich um {{Glossary("hash_function", "Hashes")}} der Zertifikate handelt, die mit den verschiedenen vom Browser unterstützten Algorithmen erstellt wurden.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerabdruck-Werten.
Jeder Fingerabdruck wird durch ein Objekt mit folgenden Eigenschaften dargestellt:

- `algorithm`
  - : Ein String, der den Algorithmus der Hash-Funktion angibt, der verwendet wurde, um den Fingerabdruck in `value` zu erstellen.
    Erlaubte Werte umfassen: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : Ein String, der den Zertifikat-Fingerabdruck in Kleinbuchstaben-Hexadezimalwert darstellt, wie er mit der `algorithm`-Hash-Funktion berechnet wurde.
    Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5).

## Beschreibung

Die [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Instanzen, die für eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden, können mit der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus einem Speicher in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API) abgerufen und im Konstruktor festgelegt werden.
Wenn im Konstruktor keine Zertifikate übergeben werden, werden sie automatisch erstellt, in diesem Fall können die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden.

Browser werden automatisch Zertifikate und Fingerabdrücke, die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, während der SDP-Angebotsphase austauschen, und diese werden als Teil des DTLS-Handshake verwendet, um zu überprüfen, dass der Remote-Teilnehmer mit dem Zertifikat/Endpunkt übereinstimmt, das im SDP gesendet wurde.
Dies bietet eine grundlegende Validierung dafür, dass die WebRTC-Kommunikation mit dem Remote-Teilnehmer aufgebaut wird, der das Angebot initiiert hat, bietet jedoch beispielsweise keine Validierung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es nützlich sein, dass die Anwendungsebene Zertifikat-Fingerabdrücke außerhalb des Bandes teilt:

- Wenn eine Vertrauensbeziehung zwischen zwei Web-Browsern hergestellt wurde, kann sie beibehalten werden, indem die Zertifikate gespeichert und in einer späteren Sitzung (bis zu einem Jahr später) wiederverwendet werden.
  Die vertrauenswürdigen Zertifikate werden durch ihre Fingerabdrücke identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerabdrücke senden und den zugehörigen Benutzer "außerhalb des Bandes" (d.h. außerhalb des vom Browser vermittelten WebRTC-Kommunikationsflusses) validieren.
  Die Anwendung kann den Fingerabdruck verwenden, um spätere Sitzungen mit dem spezifischen Benutzer zu identifizieren.
- In einigen Konferenzserver- ("Middlebox") Implementierungen muss der Server die Fingerabdrücke kennen, bevor ein Angebot/Antwort erfolgt.

Peers können verschiedene Sets von Algorithmen unterstützen.
Wenn Zertifikate verglichen werden, sollten alle Fingerabdruckwerte für das von den Peers unterstützte Algorithmusset übereinstimmen.

## Beispiele

### Zertifikat-Fingerabdrücke abrufen

Dieses Beispiel zeigt, wie Sie Zertifikat-Fingerabdrücke vom lokalen Peer erhalten und mit Fingerabdrücken vom Remote-Peer vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten Zertifikate und deren Fingerabdrücke.
Wir erhalten die Fingerabdrücke vom Remote-Peer über "einen Mechanismus außerhalb des Bandes".

```js
// Get the certificate fingerprints from the local peer.
const rtcPeerConnection = new RTCPeerConnection();
const configuration = rtcPeerConnection.getConfiguration();
const certificates = configuration.certificates;
let fingerprintsFromClient;

if (certificates && certificates.length > 0) {
  for (const cert of certificates) {
    // For purpose of demonstration, just get first certificate
    fingerprintsFromClient = cert.getFingerprints();
    break;
  }
}

// Get the certificate fingerprints from the remote peer for particular certificate (pseudo code)
const fingerprintsFromServer = [/* … */];
```

Es gibt zahlreiche Möglichkeiten, die Fingerabdruck-Arrays für ein bestimmtes Zertifikat zu vergleichen.
Hier konvertieren wir die Arrays in Dictionary-Objekte, wobei der Algorithmusname die Eigenschaft ist, und vergleichen sie dann.
Dies funktioniert, weil für jeden Algorithmus nur ein Fingerabdruckwert existieren kann.
(Es gibt viele andere Möglichkeiten, die beiden Arrays zu sortieren und zu vergleichen).

```js
let clientFingerprintDict = Object.fromEntries(
  fingerprintsFromClient.map((x) => [x.algorithm, x.value]),
);
let serverFingerprintDict = Object.fromEntries(
  fingerprintsFromServer.map((x) => [x.algorithm, x.value]),
);

// Function to compare two objects and return true if there are common properties
// and all common properties match.
function compareObjects(obj1, obj2) {
  const commonProperties = Object.keys(obj1).filter((prop) =>
    Object.hasOwn(obj2, prop),
  );
  // Return false if there are no common properties
  if (Object.keys(commonProperties).length === 0) return false;

  // Return false if any common properties don't match
  for (const prop of commonProperties) {
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

const matchingFingerprints = compareObjects(
  clientFingerprintDict,
  serverFingerprintDict,
);
console.log(matchingFingerprints);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
