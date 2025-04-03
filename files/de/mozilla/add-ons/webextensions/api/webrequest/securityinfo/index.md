---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanforderung beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anfrage nicht mit {{Glossary("TLS", "TLS")}} gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`

  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der Option `certificateChain` aufgerufen wurde, die auf `true` gesetzt ist, enthält dies ein `CertificateInfo`-Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis hin zur Vertrauenswurzel.

    Andernfalls enthält es ein einzelnes `CertificateInfo`-Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Zeigt den [Certificate Transparency](https://certificate.transparency.dev/)-Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}

  - : `String`. Die Verschlüsselungssuite, die für die Verbindung verwendet wird, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".

- `errorMessage` {{optional_inline}}

  - : `String`. Wenn es ein Problem mit dem TLS-Handshake gab (zum Beispiel ist das Zertifikat abgelaufen, es konnte keine vertrauenswürdige Wurzel gefunden werden oder ein Zertifikat wurde widerrufen), dann wird `status` "broken" sein und die `errorMessage`-Eigenschaft enthält eine Beschreibung des Fehlers, entnommen aus der internen Fehlercodeliste von Firefox.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können und das `onHeaderReceived`-Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. Daher wird dies in der Praxis nie gesetzt.

- `hsts` {{optional_inline}}

  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) verwendet, andernfalls `false`.

- `isDomainMismatch` {{optional_inline}}

  - : `Boolean`. `true`, wenn der Domainname des Servers nicht mit dem Domainnamen in seinem Zertifikat übereinstimmt, andernfalls `false`.

- `isExtendedValidation` {{optional_inline}}

  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) besitzt, andernfalls `false`.

- `isNotValidAtThisTime` {{optional_inline}}

  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), andernfalls `false`.

- `isUntrusted` {{optional_inline}}

  - : `Boolean`. `true`, wenn eine Kette zurück zu einem vertrauenswürdigen Wurzelzertifikat nicht erstellt werden konnte, andernfalls `false`.

- `keaGroupName` {{optional_inline}}

  - : `String`. Wenn `state` "secure" ist, beschreibt dies den Schlüsselaustauschalgorithmus, der in dieser Anfrage verwendet wurde.

- `protocolVersion` {{optional_inline}}

  - : `String`. Die Version des verwendeten TLS-Protokolls. Einer der folgenden Werte:

    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (falls die Version nicht gültig ist)

- `secretKeyLength` {{optional_inline}}

  - : `Number`. Die Länge des geheimen Schlüssels in Bits.

- `signatureSchemeName` {{optional_inline}}

  - : `String`. Wenn `state` "secure" ist, beschreibt dies das Signaturschema, das in dieser Anfrage verwendet wurde.

- `state`

  - : `String`. Der Status der Verbindung. Einer der folgenden Werte:

    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel ist das Zertifikat abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird aber als schwach angesehen. Sie können `weaknessReasons` untersuchen, um das Problem zu identifizieren.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived`-Listener aufrufen können und das `onHeaderReceived`-Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dieser Wert also nie auf "broke" gesetzt sein.

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung Delegated Credentials verwendet hat, andernfalls `false`.

- `usedEch` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, andernfalls `false`.

- `usedOcsp` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol)-Anfrage gestellt hat, andernfalls `false`.

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`. `true`, wenn die Verbindung ein privates DNS-Lookup durchgeführt hat, z.B. mit DoH (DNS über HTTPS), andernfalls `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur den Wert "cipher" enthalten, was darauf hinweist, dass die ausgehandelte Verschlüsselungssuite als schwach gilt.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
