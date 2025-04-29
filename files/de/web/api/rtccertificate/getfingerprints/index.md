---
title: "RTCCertificate: getFingerprints() Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: c692ea0b068f9ecaa153882b44f7514cde32d882
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode des **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)**-Interfaces wird verwendet, um ein Array von Zertifikats-Fingerabdrücken zu erhalten.

Dies kann im Anwendungscode verwendet werden, um Zertifikats-Fingerabdrücke zu erhalten, die {{Glossary("hash_function", "Hashes")}} des Zertifikats sind, erstellt mit den verschiedenen vom Browser unterstützten Algorithmen.

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
  - : Ein String, der den verwendeten Hash-Algorithmus zur Erstellung des Fingerprints in `value` anzeigt.
    Erlaubte Werte beinhalten: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`. <!-- aus [RFC4572] Abschnitt 5. -->
- `value`
  - : Ein String, der den Zertifikats-Fingerprint im Kleinbuchstaben-Hexadezimalformat enthält, berechnet mit der `algorithm`-Hashfunktion.
    Das Format ist genauer in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) definiert.

## Beschreibung

Die [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Instanzen, die für ein bestimmtes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden, können mit der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus einem [IndexedDB](/de/docs/Web/API/IndexedDB_API) Speicher abgerufen und im Konstruktor festgelegt werden. Wenn keine Zertifikate im Konstruktor übergeben werden, werden sie automatisch erstellt. In diesem Fall können die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden.

Browser tauschen während der SDP-Angebotsphase automatisch Zertifikate und Fingerabdrücke aus, die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verknüpft sind, und diese werden als Teil des DTLS-Handshakes verwendet, um zu überprüfen, dass die Gegenstelle dem in der SDP gesendeten Zertifikat/Endpunkt entspricht. Dies bietet eine grundlegende Validierung, dass die WebRTC-Kommunikation mit der Gegenstelle eingerichtet wird, die das Angebot initiiert hat, bietet jedoch beispielsweise keine Validierung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es nützlich sein, auf Anwendungsebene den Austausch von Zertifikats-Fingerabdrücken außerhalb des Bandes durchzuführen:

- Wenn eine Vertrauensbeziehung zwischen zwei Webbrowsern etabliert wurde, kann diese durch Speichern der Zertifikate und deren Wiederverwendung in einer späteren Sitzung (bis zu einem Jahr später) aufrechterhalten werden.
  Die vertrauten Zertifikate werden durch ihre Fingerabdrücke identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerabdrücke senden und den zugehörigen Benutzer "außerhalb des Bandes" validieren (d.h. außerhalb des browsergesteuerten WebRTC-Kommunikationsflusses).
  Die Anwendung kann den Fingerabdruck verwenden, um spätere Sitzungen mit dem spezifischen Benutzer zu identifizieren.
- In einigen Implementierungen von Konferenzservern ("Middlebox") kann es erforderlich sein, dass der Server die Fingerabdrücke kennt, bevor ein Angebot/Antwort Austausch erfolgt.

Peers können unterschiedliche Sätze von Algorithmen unterstützen. Beim Vergleich von Zertifikaten sollten alle Fingerprint-Werte für den von den Peers unterstützten Algorithmensatz übereinstimmen.

## Beispiele

### Erhalten von Zertifikats-Fingerabdrücken

Dieses Beispiel zeigt, wie Sie Zertifikats-Fingerabdrücke vom lokalen Peer erhalten und mit den Fingerabdrücken des entfernten Peers vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten Zertifikate und deren Fingerabdrücke.
Wir erhalten die Fingerabdrücke des entfernten Peers mittels "eines Mechanismus außerhalb des Bandes".

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

Es gibt zahlreiche Möglichkeiten, die Fingerprint-Arrays für ein bestimmtes Zertifikat zu vergleichen. Hier konvertieren wir die Arrays in Wörterbuchobjekte, wobei der Algorithmusname die Eigenschaft ist und dann vergleichen wir sie. Dies funktioniert, weil für jeden Algorithmus nur ein Fingerprint-Wert existieren kann. (Es gibt viele andere Möglichkeiten, die beiden Arrays zu sortieren und zu vergleichen).

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
    obj2.hasOwnProperty(prop),
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
