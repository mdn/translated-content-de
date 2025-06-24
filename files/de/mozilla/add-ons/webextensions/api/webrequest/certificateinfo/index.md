---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein Objekt, das ein einzelnes [X.509-Zertifikat](https://datatracker.ietf.org/doc/html/rfc5280) beschreibt.

Das {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}}-Objekt, das von der API {{WebExtAPIRef("webRequest.getSecurityInfo()")}} zurückgegeben wird, enthält eine `certificates`-Eigenschaft, die ein Array dieser Objekte ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `fingerprint`

  - : `Objekt`. Ein Objekt mit den folgenden Eigenschaften:
    - `sha1`
      - : `String`. SHA-1-Hash der DER-Codierung des Zertifikats.
    - `sha256`
      - : `String`. SHA-256-Hash der DER-Codierung des Zertifikats.

- `isBuiltInRoot`
  - : `Boolean`. `true`, wenn das Zertifikat eines der im Browser installierten Vertrauensanker ist, andernfalls `false`.
- `issuer`

  - : `String`. Der Distinguished Name der Entität, die das Zertifikat ausgestellt hat, formatiert als kommagetrennte Liste von Relative Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".

- `rawDER`
  - : `Array` von `Number`. Wenn [`webRequest.getSecurityInfo()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) mit der Option `rawDER` aufgerufen wurde und diese auf `true` gesetzt war, enthält dies die DER-Codierung des Zertifikats.
- `serialNumber`
  - : `String`. Die [Seriennummer](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2) des Zertifikats.
- `subject`

  - : `String`. Der Distinguished Name der Entität, an die das Zertifikat ausgestellt wurde, formatiert als kommagetrennte Liste von Relative Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".

- `subjectPublicKeyInfoDigest`

  - : `Objekt`. Ein Objekt, das die folgenden Eigenschaften enthält:
    - `sha256`
      - : `String`. Base64-kodierter SHA-256-Hash der DER-codierten [Public-Key-Info](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7).

- `validity`
  - : `Objekt`. Gültigkeitszeitraum für das Zertifikat. Ein Objekt, das die folgenden Eigenschaften enthält:
    - `start`
      - : `Number`. Der Beginn des Gültigkeitszeitraums des Zertifikats in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
    - `end`
      - : `Number`. Das Ende des Gültigkeitszeitraums des Zertifikats in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
