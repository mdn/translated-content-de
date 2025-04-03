---
title: "RTCCertificate: getFingerprints() Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode der **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)** Schnittstelle wird verwendet, um ein Array von Zertifikats-Fingerabdrücken zu erhalten.

Eine Anwendung kann diese Methode nutzen, um die Fingerabdrücke des Client-Zertifikats mit den Fingerabdrücken des Server-Zertifikats zu vergleichen.
Der Server und der Client können unterschiedliche Algorithmen unterstützen: Alle Fingerabdruckwerte für die Menge der Algorithmen, die sowohl vom Client als auch vom Server unterstützt werden, sollten übereinstimmen.

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
  - : Ein String, der die Hash-Funktions-Algorithmus angibt, der zur Erstellung des Fingerabdrucks in `value` verwendet wurde.
    Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- aus [RFC4572] Abschnitt 5. -->
- `value`
  - : Ein String, der den Zertifikatsfingerabdruck als hexadezimale Zeichenkette in Kleinbuchstaben enthält, errechnet mit der Hash-Funktion `algorithm`.
    Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Beispiele

### Abrufen von Zertifikats-Fingerabdrücken

Dieses Beispiel zeigt, wie Sie Zertifikats-Fingerabdrücke erhalten und mit den Fingerabdrücken eines Servers vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten die Fingerabdrücke.
Wir erhalten die Fingerabdrücke auch vom Server durch einen "bestimmten Mechanismus".

```js
const rtcPeerConnection = new RTCPeerConnection();

// Get the certificate fingerprints from the client.
const fingerprintsFromClient = rtcPeerConnection.certificate.getFingerprints();

// Get the certificate fingerprints from the server (pseudo code)
const fingerprintsFromServer = [
  /* … */
];
```

Es gibt zahlreiche Möglichkeiten, die Fingerabdruck-Arrays zu vergleichen.
Hier wandeln wir die Arrays in Wörterbuchobjekte um, bei denen der Algorithmusname die Eigenschaft ist und vergleichen sie dann.
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
