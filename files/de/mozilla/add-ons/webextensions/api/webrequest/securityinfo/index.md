---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanfrage beschreibt. Ein Objekt dieses Typs wird von der API {{WebExtAPIRef("webRequest.getSecurityInfo()")}} zurückgegeben.

Wenn die Anfrage nicht mit [TLS](/de/docs/Glossary/TLS) gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`

  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der `certificateChain`-Option aufgerufen wurde und diese auf `true` gesetzt ist, enthält sie ein `CertificateInfo`-Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis einschließlich der Trust-Root.

    Andernfalls enthält es ein einzelnes `CertificateInfo`-Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Gibt den [Certificate Transparency](https://certificate.transparency.dev/) Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Für die Verbindung verwendete Cipher Suite, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. Wenn es ein Problem mit dem TLS-Handshake gab (zum Beispiel, das Zertifikat war abgelaufen oder eine vertrauenswürdige Root konnte nicht gefunden werden oder ein Zertifikat wurde widerrufen), dann ist `status` "broken" und die `errorMessage` Eigenschaft enthält einen Fehlerbeschreibungstext, der aus der internen Fehlercodeliste von Firefox entnommen wurde.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived`-Event nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also nie gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) verwendet, ansonsten `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Domainname des Servers nicht mit dem Domainnamen in seinem Zertifikat übereinstimmt, ansonsten `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) hat, ansonsten `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), ansonsten `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true`, wenn keine Kette zurück zu einem vertrauenswürdigen Root-Zertifikat konstruiert werden konnte, ansonsten `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den für diese Anfrage verwendeten Schlüsselaustauschalgorithmus.
- `protocolVersion` {{optional_inline}}

  - : `String`. Version des verwendeten TLS-Protokolls. Eines von:

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (wenn die Version ungültig ist)

- `secretKeyLength` {{optional_inline}}

  - : `Number`. Die Länge des geheimen Schlüssels in Bits.

- `signatureSchemeName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das in dieser Anfrage verwendete Signaturschema.
- `state`

  - : `String`. Zustand der Verbindung. Eines von:

    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel, das Zertifikat war abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird aber als schwach angesehen. Sie können `weaknessReasons` untersuchen, um das Problem herauszufinden.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived`-Event nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also nie auf "broke" gesetzt.

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung Delegierte Anmeldeinformationen verwendet hat, ansonsten `false`.

- `usedEch` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, ansonsten `false`.

- `usedOcsp` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol)-Anfrage gemacht hat, ansonsten `false`.

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine private DNS-Abfrage gemacht hat, wie zum Beispiel mit DoH (DNS über HTTPS), ansonsten `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur einen einzigen Wert "cipher" enthalten, der darauf hinweist, dass die ausgehandelte Cipher Suite als schwach angesehen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
