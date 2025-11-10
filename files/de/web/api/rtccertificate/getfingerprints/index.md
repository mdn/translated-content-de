---
title: "RTCCertificate: getFingerprints()-Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: 847f754b374ed8928a270ab17672a1675802776f
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode der **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)**-Schnittstelle wird verwendet, um ein Array von Zertifikatsfingerabdrücken zu erhalten.

Dies kann im Anwendungscode verwendet werden, um Zertifikatsfingerabdrücke zu erhalten, bei denen es sich um {{Glossary("hash_function", "Hashes")}} des Zertifikats handelt, die mithilfe der verschiedenen vom Browser unterstützten Algorithmen erstellt wurden.

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
  - : Ein String, der den Algorithmus der Hash-Funktion angibt, der zum Erstellen des Fingerabdrucks in `value` verwendet wurde.
    Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : Ein String, der den Zertifikatsfingerabdruck als hexadezimale Zeichenfolge in Kleinbuchstaben enthält, berechnet mit der `algorithm`-Hash-Funktion.
    Das Format ist genauer definiert in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/rfc/rfc4572#section-5).

## Beschreibung

Die [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Instanzen, die für eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden, können mit der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus einem Speicher in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API) abgerufen und im Konstruktor festgelegt werden.
Wenn im Konstruktor keine Zertifikate übergeben werden, werden sie automatisch erstellt, wobei die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden können.

Browser tauschen automatisch Zertifikate und Fingerabdrücke aus, die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) während der SDP-Angebotsphase assoziiert sind. Diese werden als Teil des DTLS-Handshakes verwendet, um zu überprüfen, dass die entfernte Partei zum Zertifikat/Endpunkt passt, der im SDP gesendet wurde.
Dies bietet eine niedrigstufige Validierung, dass die WebRTC-Kommunikation mit der entfernten Partei eingerichtet wird, die das Angebot initiiert hat, bietet jedoch beispielsweise keine Validierung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es nützlich sein, Fingerabdrücke von Zertifikaten auf Anwendungsebene außer Band zu teilen:

- Wenn eine Vertrauensstellung zwischen zwei Web-Browsern etabliert wurde, kann diese durch Speicherung der Zertifikate aufrechterhalten und in einer späteren Sitzung (bis zu einem Jahr später) wiederverwendet werden.
  Die vertrauenswürdigen Zertifikate werden durch ihre Fingerabdrücke identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerabdrücke senden und den zugehörigen Benutzer „außer Band“ validieren (d.h. außerhalb des vom Browser vermittelten WebRTC-Kommunikationsflusses).
  Die Anwendung kann den Fingerabdruck verwenden, um spätere Sitzungen mit dem spezifischen Benutzer zu identifizieren.
- In einigen Implementierungen von Konferenzservern („Middlebox“) muss der Server möglicherweise die Fingerabdrücke kennen, bevor er ein Angebot oder eine Antwort abgibt.

Peers können unterschiedliche Sätze von Algorithmen unterstützen.
Beim Vergleichen von Zertifikaten sollten alle Fingerabdruckwerte für den Satz von Algorithmen, die Peers unterstützen, übereinstimmen.

## Beispiele

### Zertifikatsfingerabdrücke erhalten

Dieses Beispiel zeigt, wie Sie Zertifikatsfingerabdrücke vom lokalen Peer abfragen und mit Fingerabdrücken vom entfernten Peer vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten Zertifikate und deren Fingerabdrücke.
Wir erhalten die Fingerabdrücke vom entfernten Peer über einen „außer Band Mechanismus“.

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

Es gibt zahlreiche Möglichkeiten, die Fingerabdruckarrays für ein bestimmtes Zertifikat zu vergleichen.
Hier konvertieren wir die Arrays in Wörterbuchobjekte, bei denen der Algorithmusname die Eigenschaft ist und vergleichen sie dann.
Dies funktioniert, weil für jeden Algorithmus nur ein Fingerabdruckwert existieren kann.
(Es gibt viele andere Möglichkeiten, die zwei Arrays zu sortieren und zu vergleichen).

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
