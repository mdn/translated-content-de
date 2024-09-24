---
title: webRequest.CertificateInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/CertificateInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das ein einzelnes [X.509-Zertifikat](https://datatracker.ietf.org/doc/html/rfc5280) beschreibt.

Das {{WebExtAPIRef("webRequest.SecurityInfo", "SecurityInfo")}} Objekt, das von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben wird, enthält eine `certificates` Eigenschaft, die ein Array dieser Objekte ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `fingerprint`

  - : `Object`. Ein Objekt mit den folgenden Eigenschaften:

    - `sha1`
      - : `String`. SHA-1-Hash der DER-Codierung des Zertifikats.
    - `sha256`
      - : `String`. SHA-256-Hash der DER-Codierung des Zertifikats.

- `isBuiltInRoot`
  - : `Boolean`. `true`, wenn das Zertifikat zu den im Browser installierten Vertrauenswurzeln gehört, andernfalls `false`.
- `issuer`

  - : `String`. Name der Organisation, die dieses Zertifikat ausgestellt hat, dargestellt als Distinguished Name und formatiert als kommagetrennte Liste von Relativen Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US".

- `rawDER`
  - : `Array` von `Number`. Wenn [`webRequest.getSecurityInfo()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/getSecurityInfo) mit der Option `rawDER` aufgerufen wurde und diese auf `true` gesetzt ist, enthält diese Eigenschaft die DER-Codierung des Zertifikats.
- `serialNumber`
  - : `String`. Die [Seriennummer](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.2) des Zertifikats.
- `subject`

  - : `String`. Name der Organisation, die dieses Zertifikat ausgestellt hat, dargestellt als Distinguished Name und formatiert als kommagetrennte Liste von Relativen Distinguished Names, jeweils in der Form "type=value".

    Zum Beispiel: "CN=\*.cdn.mozilla.net,O=Mozilla Corporation,L=Mountain View,ST=California,C=US".

- `subjectPublicKeyInfoDigest`

  - : `Object`. Ein Objekt mit den folgenden Eigenschaften:

    - `sha256`
      - : `String`. Base64-codierter SHA-256-Hash der DER-codierten [Public Key Info](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.7).

- `validity`

  - : `Object`. Gültigkeitszeitraum für das Zertifikat. Ein Objekt mit den folgenden Eigenschaften:

    - `start`
      - : `Number`. Der Beginn des Gültigkeitszeitraums des Zertifikats, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).
    - `end`
      - : `Number`. Das Ende des Gültigkeitszeitraums des Zertifikats, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
