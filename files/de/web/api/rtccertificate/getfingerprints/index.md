---
title: "RTCCertificate: getFingerprints()-Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode der **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)**-Schnittstelle wird verwendet, um ein Array von Zertifikats-Fingerabdrücken zu erhalten.

Dies kann im Code auf Anwendungsebene genutzt werden, um Zertifikats-Fingerabdrücke zu erhalten. Diese sind {{Glossary("hash_function", "Hashes")}} des Zertifikats, die mit den verschiedenen vom Browser unterstützten Algorithmen erstellt werden.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerabdruckwerten.
Jeder Fingerabdruck wird durch ein Objekt mit den folgenden Eigenschaften dargestellt:

- `algorithm`
  - : Ein String, der den Hash-Algorithmus angibt, der verwendet wurde, um den Fingerabdruck in `value` zu erstellen.
    Erlaubte Werte umfassen: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- aus [RFC4572] Abschnitt 5. -->
- `value`
  - : Ein String, der den Zertifikats-Fingerabdruck als kleingeschriebene Hex-Zeichenfolge enthält, wie mit der `algorithm`-Hash-Funktion berechnet.
    Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5).

## Beschreibung

Instanzen von [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die für eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden, können mit der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus einem [IndexedDB](/de/docs/Web/API/IndexedDB_API) gespeichert und im Konstruktor gesetzt werden.
Wenn im Konstruktor keine Zertifikate übergeben werden, werden sie automatisch erstellt. In diesem Fall können die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden.

Browser werden automatisch Zertifikate und Fingerabdrücke austauschen, die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) während der SDP-Angebotsphase verbunden sind. Diese werden als Teil des DTLS-Handshakes verwendet, um zu überprüfen, ob die entfernte Partei mit dem Zertifikat/Endpunkt übereinstimmt, der im SDP gesendet wurde.
Dies bietet eine grundlegende Überprüfung, dass die WebRTC-Kommunikation mit der entfernten Partei aufgebaut wird, die das Angebot initiiert hat, bietet jedoch beispielsweise keine Validierung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es nützlich sein, Fingerabdrücke von Zertifikaten auf Anwendungsebene außerhalb des Bandes zu teilen:

- Wenn eine Vertrauensbeziehung zwischen zwei Webbrowsern etabliert wurde, kann sie durch Speichern der Zertifikate beibehalten werden und in einer späteren Sitzung (bis zu einem Jahr später) wiederverwendet werden.
  Die vertrauenswürdigen Zertifikate werden durch ihre Fingerabdrücke identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerabdrücke senden und den zugehörigen Benutzer "out of band" validieren (d.h. außerhalb des browservermittelten WebRTC-Kommunikationsflusses).
  Die Anwendung kann den Fingerabdruck verwenden, um später Sitzungen mit dem spezifischen Benutzer zu identifizieren.
- In einigen Implementierungen von Konferenzservern ("Middlebox") muss der Server möglicherweise die Fingerabdrücke kennen, bevor ein Angebot/Antwort erfolgt.

Peers können unterschiedliche Algorithmen-Sätze unterstützen.
Beim Vergleichen von Zertifikaten sollten alle Fingerabdruckwerte für den von Peers unterstützten Algorithmus-Satz übereinstimmen.

## Beispiele

### Abrufen von Zertifikats-Fingerabdrücken

Dieses Beispiel zeigt, wie Sie Zertifikats-Fingerabdrücke vom lokalen Peer erhalten und mit den Fingerabdrücken des entfernten Peers vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten Zertifikate und deren Fingerabdrücke.
Wir erhalten die Fingerabdrücke des entfernten Peers mit "einem Mechanismus außerhalb des Bandes".

```js
// Get the certificate fingerprints from the local peer.
const rtcPeerConnection = new RTCPeerConnection();
const configuration = rtcPeerConnection.getConfiguration();
const certificates = configuration.certificates;
let fingerprintsFromClient;

if (certificates && certificates.length > 0) {
  certificates.forEach((cert) => {
    // For purpose of demonstration, just get first certificate
    fingerprintsFromClient = cert.getFingerprints();
    break;
  });
}

// Get the certificate fingerprints from the remote peer for particular certificate (pseudo code)
const fingerprintsFromServer = [
  /* … */
];
```

Es gibt zahlreiche Möglichkeiten, die Fingerabdruck-Arrays für ein bestimmtes Zertifikat zu vergleichen.
Hier konvertieren wir die Arrays in Wörterbuch-Objekte, bei denen der Algorithmusname die Eigenschaft ist, und vergleichen diese dann.
Dies funktioniert, da nur ein Fingerabdruckswert für jeden Algorithmus existieren kann.
(Es gibt viele andere Wege, die beiden Arrays zu sortieren und zu vergleichen).

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
