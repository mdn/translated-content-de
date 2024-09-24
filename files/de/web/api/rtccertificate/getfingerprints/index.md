---
title: "RTCCertificate: getFingerprints()-Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode der **{{domxref("RTCCertificate")}}**-Schnittstelle wird verwendet, um ein Array von Zertifikatsfingerabdrücken zu erhalten.

Eine Anwendung kann diese Methode verwenden, um die Fingerabdrücke des Client-Zertifikats mit den Fingerabdrücken des Zertifikats vom Server zu vergleichen. Der Server und der Client können verschiedene Algorithmen unterstützen: Alle Fingerabdruckwerte für die Menge der von beiden, dem Client und dem Server, unterstützten Algorithmen sollten übereinstimmen.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerabdruckwerten. Jeder Fingerabdruck wird durch ein Objekt mit den folgenden Eigenschaften dargestellt:

- `algorithm`
  - : Ein String, der den Algorithmus der Hash-Funktion angibt, der zur Erstellung des Fingerabdrucks in `value` verwendet wurde. Erlaubte Werte umfassen: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : Ein String, der den Zertifikatsfingerabdruck als Kleinbuchstaben-Hexadezimalzeichenkette enthält, wie mit der `algorithm` Hash-Funktion berechnet. Das Format wird genauer in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5) definiert.

## Beispiele

### Erhalten von Zertifikatsfingerabdrücken

Dieses Beispiel zeigt, wie Sie möglicherweise Zertifikatsfingerabdrücke erhalten und mit Fingerabdrücken von einem Server vergleichen.

Zuerst erstellen wir eine Verbindung und erhalten die Fingerabdrücke. Wir erhalten auch die Fingerabdrücke vom Server mit einem "bestimmten Mechanismus".

```js
const rtcPeerConnection = new RTCPeerConnection();

// Erhalten der Zertifikatsfingerabdrücke vom Client.
const fingerprintsFromClient = rtcPeerConnection.certificate.getFingerprints();

// Erhalten der Zertifikatsfingerabdrücke vom Server (Pseudo-Code)
const fingerprintsFromServer = ...;
```

Es gibt zahlreiche Möglichkeiten, die Fingerabdruck-Arrays zu vergleichen. Hier konvertieren wir die Arrays in Wörterbuchobjekte, bei denen der Algorithmusname die Eigenschaft ist, und vergleichen sie dann. Dies funktioniert, da nur ein Fingerabdruckwert für jeden Algorithmus existieren kann. (Es gibt viele andere Möglichkeiten, die beiden Arrays zu sortieren und zu vergleichen).

```js
let clientFingerprintDict = Object.fromEntries(
  fingerprintsFromClient.map((x) => [x.algorithm, x.value]),
);
let serverFingerprintDict = Object.fromEntries(
  fingerprintsFromServer.map((x) => [x.algorithm, x.value]),
);

// Funktion zum Vergleichen von zwei Objekten und Rückgabe von true, wenn es gemeinsame Eigenschaften gibt und alle gemeinsamen Eigenschaften übereinstimmen.
function compareObjects(obj1, obj2) {
  const commonProperties = Object.keys(obj1).filter((prop) =>
    obj2.hasOwnProperty(prop),
  );
  // Rückgabe von false, wenn es keine gemeinsamen Eigenschaften gibt
  if (Object.keys(commonProperties).length === 0) return false;

  // Rückgabe von false, wenn gemeinsame Eigenschaften nicht übereinstimmen
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
