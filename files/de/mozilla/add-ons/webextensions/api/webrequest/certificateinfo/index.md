---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein Objekt, das ein einzelnes [X.509 Zertifikat](https://datatracker.ietf.org/doc/html/rfc5280) beschreibt.

Das {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} Objekt, das von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben wird, enthält eine `certificates`-Eigenschaft, die ein Array dieser Objekte ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `fingerprint`
  - : `Object`. Ein Objekt mit den folgenden Eigenschaften:
    - `sha1`
      - : `String`. SHA-1-Hash der DER-Kodierung des Zertifikats.
    - `sha256`
      - : `String`. SHA-256-Hash der DER-Kodierung des Zertifikats.

- `isBuiltInRoot`
  - : `Boolean`. `true`, wenn das Zertifikat eines der im Browser installierten Vertrauensanker ist, andernfalls `false`.
- `issuer`
  - : `String`. Der Distinguished Name der Entität, die das Zertifikat ausgestellt hat, formatiert als kommaseparierte Liste von Relative Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".

- `rawDER`
  - : `Array` von `Number`. Wenn [`webRequest.getSecurityInfo()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) mit der Option `rawDER` auf `true` gesetzt aufgerufen wurde, enthält dies die DER-Kodierung des Zertifikats.
- `serialNumber`
  - : `String`. Die [Seriennummer](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2) des Zertifikats.
- `subject`
  - : `String`. Der Distinguished Name der Entität, an die das Zertifikat ausgestellt wurde, formatiert als kommaseparierte Liste von Relative Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".

- `subjectPublicKeyInfoDigest`
  - : `Object`. Ein Objekt, das die folgenden Eigenschaften enthält:
    - `sha256`
      - : `String`. Base64-kodierter SHA-256-Hash der DER-kodierten [öffentlichen Schlüsselinformationen](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7).

- `validity`
  - : `Object`. Gültigkeitszeitraum für das Zertifikat. Ein Objekt, das die folgenden Eigenschaften enthält:
    - `start`
      - : `Number`. Der Beginn des Gültigkeitszeitraums des Zertifikats, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
    - `end`
      - : `Number`. Das Ende des Gültigkeitszeitraums des Zertifikats, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
