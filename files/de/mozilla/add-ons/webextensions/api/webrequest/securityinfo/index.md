---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanfrage beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anfrage nicht durch [TLS](/de/docs/Glossary/TLS) gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` sein wird.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`

  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der Option `certificateChain` aufgerufen wurde und diese Option auf `true` gesetzt war, enthält dies ein `CertificateInfo` Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis hin zur Vertrauenswurzel.

    Andernfalls enthält es ein einzelnes `CertificateInfo` Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Zeigt den [Certificate Transparency](https://certificate.transparency.dev/) Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Verschlüsselungssatz, der für die Verbindung verwendet wird, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. Wenn es ein Problem mit dem TLS-Handshake gab (zum Beispiel, wenn das Zertifikat abgelaufen ist oder keine vertrauenswürdige Wurzel gefunden werden konnte oder ein Zertifikat widerrufen wurde), wird `status` auf "broken" gesetzt und die `errorMessage` Eigenschaft wird eine Fehlermeldung enthalten, die aus der internen Fehlercodeliste von Firefox stammt.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können und das `onHeaderReceived`-Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. Daher wird dies in der Praxis nie gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) verwendet, andernfalls `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Domänenname des Servers nicht mit dem Domänennamen in seinem Zertifikat übereinstimmt, andernfalls `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) hat, andernfalls `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb der Gültigkeitsdauer des Serverzertifikats liegt (d. h. das Zertifikat ist abgelaufen oder noch nicht gültig), andernfalls `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true`, wenn keine Kette zu einem vertrauenswürdigen Root-Zertifikat erstellt werden konnte, andernfalls `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den Schlüsselabgleichsalgorithmus, der in dieser Anfrage verwendet wurde.
- `protocolVersion` {{optional_inline}}

  - : `String`. Version des verwendeten TLS-Protokolls. Einer von:

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (wenn die Version nicht gültig ist)

- `secretKeyLength` {{optional_inline}}

  - : `Number`. Die Länge des geheimen Schlüssels in Bits.

- `signatureSchemeName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das Signaturschema, das in dieser Anfrage verwendet wurde.
- `state`

  - : `String`. Zustand der Verbindung. Einer von:

    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel war das Zertifikat abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird jedoch als schwach angesehen. Sie können `weaknessReasons` untersuchen, um das Problem herauszufinden.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können und das `onHeaderReceived` Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. Daher wird dies in der Praxis nie auf "broke" gesetzt.

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung delegierte Anmeldeinformationen verwendet hat, andernfalls `false`.

- `usedEch` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, andernfalls `false`.

- `usedOcsp` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol) Anfrage gestellt hat, andernfalls `false`.

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine private DNS-Anfrage gestellt hat, wie z.B. mit DoH (DNS über HTTPS), andernfalls `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur den einzelnen Wert "cipher" enthalten, was darauf hinweist, dass der verhandelte Verschlüsselungssatz als schwach angesehen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
