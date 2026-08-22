---
title: "RTCCertificate: getFingerprints()-Methode"
short-title: getFingerprints()
slug: Web/API/RTCCertificate/getFingerprints
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebRTC")}}

Die **`getFingerprints()`**-Methode der **[`RTCCertificate`](/de/docs/Web/API/RTCCertificate)**-Schnittstelle wird verwendet, um ein Array von Zertifikat-Fingerabdrücken zu erhalten.

Dies kann in Anwendungscode verwendet werden, um Zertifikat-Fingerabdrücke zu erhalten, die {{Glossary("hash_function", "Hashs")}} des Zertifikats sind, die mit den verschiedenen vom Browser unterstützten Algorithmen erstellt wurden.

## Syntax

```js-nolint
getFingerprints()
```

### Parameter

Keine.

### Rückgabewert

Ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Fingerabdruckwerten.
Jeder Fingerabdruck wird durch ein Objekt mit folgenden Eigenschaften dargestellt:

- `algorithm`
  - : Ein String, der den Hash-Algorithmus angibt, der verwendet wurde, um den Fingerabdruck in `value` zu erstellen.
    Erlaubte Werte sind: `"sha-1"`, `"sha-224"`, `"sha-256"`, `"sha-384"`, `"sha-512"`, `"md5"`, `"md2"`.<!-- from [RFC4572] Section 5. -->
- `value`
  - : Ein String, der den Zertifikat-Fingerabdruck im kleinen Hex-String beinhaltet, wie er mit der `algorithm`-Hash-Funktion berechnet wurde.
    Das Format ist genauer in [RFC4572, Abschnitt 5](https://www.rfc-editor.org/info/rfc4572/#section-5) definiert.

## Beschreibung

Die [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)-Instanzen, die für eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden, können mit der statischen Methode [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) erstellt oder aus dem Speicher in einer [IndexedDB](/de/docs/Web/API/IndexedDB_API) abgerufen und im Konstruktor festgelegt werden.
Wenn keine Zertifikate im Konstruktor übergeben werden, werden sie automatisch erstellt. In diesem Fall können die verwendeten Zertifikate mit [`RTCPeerConnection.getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration) abgerufen werden.

Browser tauschen während der SDP-Angebotsphase automatisch Zertifikate und Fingerabdrücke aus, die mit jeder [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verbunden sind, und diese werden als Teil des DTLS-Handshake verwendet, um zu überprüfen, ob die Gegenstelle mit dem Zertifikat/Endpunkt übereinstimmt, das im SDP gesendet wird.
Dies bietet eine grundlegende Validierung, dass die WebRTC-Kommunikation mit der Gegenstelle eingerichtet wird, die das Angebot initiiert hat, bietet jedoch zum Beispiel keine Überprüfung der Identität der kommunizierenden Benutzer.

In einigen Fällen kann es nützlich sein, dass die Anwendungsebene Zertifikat-Fingerabdrücke "out of band" austauscht:

- Wenn eine Vertrauensbeziehung zwischen zwei Webbrowsern aufgebaut wurde, kann diese beibehalten werden, indem die Zertifikate gespeichert und in einer späteren Sitzung (bis zu einem Jahr später) wieder verwendet werden.
  Die vertrauenswürdigen Zertifikate werden durch ihre Fingerabdrücke identifiziert.
- Peers, die einen bestimmten Benutzer identifizieren möchten, können Fingerabdrücke senden und den zugehörigen Benutzer "außerhalb des Browser-vermittelten WebRTC-Kommunikationsflusses" validieren.
  Die Anwendung kann den Fingerabdruck verwenden, um spätere Sitzungen mit dem spezifischen Benutzer zu identifizieren.
- In einigen Konferenzserver- ("Middlebox")-Implementierungen muss der Server möglicherweise die Fingerabdrücke kennen, bevor ein Angebot/Antwort-Prozess stattfindet.

Peers können unterschiedliche Algorithmen-Sets unterstützen.
Beim Vergleichen von Zertifikaten sollten alle Fingerabdruckwerte für das von den Peers unterstützte Algorithmus-Set übereinstimmen.

## Beispiele

### Abrufen von Zertifikat-Fingerabdrücken

Dieses Beispiel zeigt, wie Sie Zertifikat-Fingerabdrücke vom lokalen Peer abrufen und mit denen des Remote-Peers vergleichen können.

Zuerst erstellen wir eine Verbindung und erhalten Zertifikate und deren Fingerabdrücke.
Wir holen die Fingerabdrücke vom Remote-Peer mithilfe "eines Mechanismus außerhalb des Bandes".

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

Es gibt zahlreiche Möglichkeiten, die Fingerabdruckarrays für ein bestimmtes Zertifikat zu vergleichen.
Hier konvertieren wir die Arrays in Wörterbuchobjekte, bei denen der Algorithmusname die Eigenschaft ist, und vergleichen diese dann.
Dies funktioniert, weil nur ein Fingerabdruckwert für jeden Algorithmus existieren kann.
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
