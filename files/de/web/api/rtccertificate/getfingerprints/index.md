---
title: "RTCCertificate: Methode getFingerprints()"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 6f5921b2634db4bd565e5e0cd38eafdadb4bb383
---

{{APIRef("WebRTC")}}

Die Methode **`getFingerprints()`** der Schnittstelle **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)** wird verwendet, um ein Array von Zertifikat-Fingerprints abzurufen.

Dies kann in Code auf Anwendungsebene verwendet werden, um Zertifikat-Fingerprints abzurufen. Dabei handelt es sich um {{Glossary("hash_function", "Hashes")}} des Zertifikats, die mithilfe der verschiedenen vom Browser unterstützten Algorithmen erstellt werden.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerprint-Werten.
Jeder Fingerprint wird durch ein Objekt mit den folgenden Eigenschaften dargestellt:

- `algorithm`
  - : Ein String, der den Hash-Funktionsalgorithmus angibt, der verwendet wurde, um den Fingerprint in `value` zu erstellen.
    Zulässige Werte sind unter anderem: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- aus [RFC4572], Abschnitt 5. -->
- `value`
  - : Ein String, der den Zertifikat-Fingerprint als hexadezimalen String in Kleinbuchstaben enthält, berechnet mit der Hash-Funktion `algorithm`.
    Das Format ist in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5) genauer definiert.

## Beschreibung

Die für eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendeten [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Instanzen können mithilfe der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus einem [IndexedDB](/de/docs/Web/API/IndexedDB_API)-Speicher abgerufen und im Konstruktor festgelegt werden.
Wenn im Konstruktor keine Zertifikate übergeben werden, werden sie automatisch erstellt. In diesem Fall können die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden.

Browser tauschen während der SDP-Angebotsphase automatisch die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpften Zertifikate und Fingerprints aus. Diese werden als Teil des DTLS-Handshakes verwendet, um zu überprüfen, ob die Gegenstelle mit dem im SDP gesendeten Zertifikat/Endpunkt übereinstimmt.
Dies stellt eine Validierung auf niedriger Ebene bereit, dass die WebRTC-Kommunikation mit der Gegenstelle aufgebaut wird, die das Angebot initiiert hat, bietet jedoch beispielsweise keine Validierung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es für die Anwendungsebene nützlich sein, Zertifikat-Fingerprints außerhalb des üblichen Kommunikationswegs auszutauschen:

- Wenn zwischen zwei Webbrowsern eine Vertrauensbeziehung hergestellt wurde, kann sie durch das Speichern der Zertifikate und deren Wiederverwendung in einer späteren Sitzung persistiert werden (bis zu einem Jahr später).
  Die vertrauenswürdigen Zertifikate werden anhand ihrer Fingerprints identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerprints senden und den zugehörigen Benutzer „out of band“ validieren (d.h. außerhalb des vom Browser vermittelten WebRTC-Kommunikationsflusses).
  Die Anwendung kann den Fingerprint verwenden, um spätere Sitzungen mit dem jeweiligen Benutzer zu identifizieren.
- In einigen Implementierungen von Konferenzservern („Middleboxes“) muss der Server möglicherweise die Fingerprints kennen, bevor ein Angebot/eine Antwort verarbeitet wird.

Peers können unterschiedliche Mengen an Algorithmen unterstützen.
Beim Vergleichen von Zertifikaten sollten alle Fingerprint-Werte für die von Peers unterstützte Menge von Algorithmen übereinstimmen.

## Beispiele

### Abrufen von Zertifikat-Fingerprints

Dieses Beispiel zeigt, wie Sie Zertifikat-Fingerprints vom lokalen Peer abrufen und mit Fingerprints vom Remote-Peer vergleichen können.

Zuerst erstellen wir eine Verbindung und rufen Zertifikate sowie deren Fingerprints ab.
Die Fingerprints vom Remote-Peer erhalten wir über „einen Out-of-Band-Mechanismus“.

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

Es gibt zahlreiche Möglichkeiten, die Fingerprint-Arrays für ein bestimmtes Zertifikat zu vergleichen.
Hier konvertieren wir die Arrays in Wörterbuchobjekte, bei denen der Algorithmusname die Eigenschaft ist, und vergleichen sie anschließend.
Dies funktioniert, weil für jeden Algorithmus nur ein Fingerprint-Wert vorhanden sein kann.
(Es gibt viele weitere Möglichkeiten, die beiden Arrays zu sortieren und zu vergleichen.)

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
