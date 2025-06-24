---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanforderung beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anfrage nicht mit {{Glossary("TLS", "TLS")}} gesichert wurde, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`

  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der `certificateChain`-Option aufgerufen wurde und diese auf `true` gesetzt ist, enthält dies ein `CertificateInfo`-Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis einschließlich der Vertrauenswurzel.

    Andernfalls enthält es ein einziges `CertificateInfo`-Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Gibt den [Certificate Transparency](https://certificate.transparency.dev/) Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:
    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Verschlüsselungssuite, die für die Verbindung verwendet wird, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. Wenn es ein Problem mit dem TLS-Handshake gab (zum Beispiel, das Zertifikat ist abgelaufen, eine vertrauenswürdige Wurzel konnte nicht gefunden werden oder ein Zertifikat wurde widerrufen), dann ist `status` "broken" und die `errorMessage`-Eigenschaft enthält einen String, der den Fehler beschreibt und aus der internen Fehlercode-Liste von Firefox entnommen wurde.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können, und das `onHeaderReceived`-Ereignis wird nicht ausgelöst, wenn der Handshake fehlschlägt. Praktisch wird dies daher nie gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) verwendet, andernfalls `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Domainname des Servers nicht mit dem Domainnamen in seinem Zertifikat übereinstimmt, andernfalls `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) besitzt, andernfalls `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), andernfalls `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true`, wenn keine Kette zu einem vertrauenswürdigen Stammzertifikat erstellt werden konnte, andernfalls `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den in dieser Anforderung verwendeten Schlüsselaustauschalgorithmus.
- `protocolVersion` {{optional_inline}}

  - : `String`. Version des verwendeten TLS-Protokolls. Eine von:
    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (wenn die Version nicht gültig ist)

- `secretKeyLength` {{optional_inline}}

  - : `Number`. Die Länge des geheimen Schlüssels in Bit.

- `signatureSchemeName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das in dieser Anfrage verwendete Signaturschema.
- `state`

  - : `String`. Zustand der Verbindung. Eine von:

    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel, das Zertifikat ist abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird aber als schwach betrachtet. Sie können `weaknessReasons` untersuchen, um das Problem zu ermitteln.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können, und das `onHeaderReceived`-Ereignis wird nicht ausgelöst, wenn der Handshake fehlschlägt. Praktisch wird dies daher nie auf "broken" gesetzt.

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung delegierte Anmeldeinformationen verwendet hat, andernfalls `false`.

- `usedEch` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, andernfalls `false`.

- `usedOcsp` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol)-Anfrage durchgeführt hat, andernfalls `false`.

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine private DNS-Abfrage durchgeführt hat, wie z.B. mit DoH (DNS über HTTPS), andernfalls `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur den einzigen Wert "cipher" enthalten, was darauf hinweist, dass die ausgehandelte Verschlüsselungssuite als schwach angesehen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
