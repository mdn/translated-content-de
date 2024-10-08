---
title: "RTCCertificate: getFingerprints()-Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode des **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)**-Interfaces wird verwendet, um ein Array von Zertifikat-Fingerabdrücken zu erhalten.

Eine Anwendung kann diese Methode verwenden, um die Fingerabdrücke des Client-Zertifikats mit den Fingerabdrücken des Server-Zertifikats zu vergleichen. Der Server und der Client können unterschiedliche Sätze von Algorithmen unterstützen: Alle Fingerabdruckwerte für den Satz von Algorithmen, die sowohl vom Client als auch vom Server unterstützt werden, sollten übereinstimmen.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerabdruckwerten. Jeder Fingerabdruck wird durch ein Objekt mit den folgenden Eigenschaften repräsentiert:

- `algorithm`
  - : Ein String, der den Hash-Funktionsalgorithmus angibt, der zum Erstellen des Fingerabdrucks in `value` verwendet wurde. Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- aus [RFC4572] Abschnitt 5. -->
- `value`
  - : Ein String, der den Zertifikat-Fingerabdruck im Kleinbuchstaben-Hex-String enthält, wie mit der `algorithm`-Hash-Funktion berechnet. Das Format ist genauer in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) definiert.

## Beispiele

### Abrufen von Zertifikat-Fingerabdrücken

Dieses Beispiel zeigt, wie Sie Zertifikat-Fingerabdrücke abrufen und sie mit Fingerabdrücken eines Servers vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten die Fingerabdrücke. Wir erhalten auch die Fingerabdrücke vom Server über einen „gewissen Mechanismus“.

```js
const rtcPeerConnection = new RTCPeerConnection();

// Get the certificate fingerprints from the client.
const fingerprintsFromClient = rtcPeerConnection.certificate.getFingerprints();

// Get the certificate fingerprints from the server (pseudo code)
const fingerprintsFromServer = ...;
```

Es gibt zahlreiche Möglichkeiten, die Fingerprint-Arrays zu vergleichen. Hier konvertieren wir die Arrays in Wörterbuchobjekte, wobei der Algorithmusname die Eigenschaft ist, und vergleichen sie dann. Dies funktioniert, da für jeden Algorithmus nur ein Fingerprint-Wert existieren kann. (Es gibt viele andere Möglichkeiten, die beiden Arrays zu sortieren und zu vergleichen).

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
