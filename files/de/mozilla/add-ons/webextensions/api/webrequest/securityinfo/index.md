---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanfrage beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anfrage nicht durch [TLS](/de/docs/Glossary/TLS) gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`

  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der Option `certificateChain` aufgerufen wurde und diese auf `true` gesetzt ist, wird es ein `CertificateInfo` Objekt für jedes Zertifikat in der Kette enthalten, vom Serverzertifikat bis einschließlich des Trust-Roots.

    Andernfalls enthält es ein einzelnes `CertificateInfo` Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}

  - : `String`. Gibt den [Certificate Transparency](https://certificate.transparency.dev/) Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:

    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Verschlüsselungssuite, die für die Verbindung verwendet wird, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}

  - : `String`. Falls es ein Problem mit dem TLS-Handshake gab (zum Beispiel, wenn das Zertifikat abgelaufen ist, oder ein vertrauenswürdiger Root nicht gefunden werden konnte, oder ein Zertifikat widerrufen wurde), wird `status` "broken" sein und die `errorMessage` Eigenschaft wird eine Zeichenkette enthalten, die den Fehler beschreibt, entnommen aus der internen Fehlercode-Liste von Firefox.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived` Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also niemals gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true` wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) verwendet, andernfalls `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true` wenn der Domainname des Servers nicht mit dem Domainnamen in seinem Zertifikat übereinstimmt, andernfalls `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true` wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) hat, andernfalls `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true` wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), andernfalls `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true` wenn eine Kette zu einem vertrauenswürdigen Root-Zertifikat nicht konstruiert werden konnte, andernfalls `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den Schlüsselaustauschalgorithmus, der in dieser Anfrage verwendet wurde.
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
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das in dieser Anfrage verwendete Signaturschema.
- `state`

  - : `String`. Zustand der Verbindung. Einer von:

    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel, das Zertifikat war abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird jedoch als schwach betrachtet. Sie können `weaknessReasons` untersuchen, um das Problem zu finden.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived` Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also niemals auf "broken" gesetzt sein.

- `usedDelegatedCredentials` {{optional_inline}}

  - : `Boolean`. `true` wenn die Verbindung Delegierung von Zertifikaten verwendet hat, andernfalls `false`.

- `usedEch` {{optional_inline}}

  - : `Boolean`. `true` wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, andernfalls `false`.

- `usedOcsp` {{optional_inline}}

  - : `Boolean`. `true` wenn die Verbindung eine OCSP-Anfrage (Online Certificate Status Protocol) gemacht hat, andernfalls `false`.

- `usedPrivateDns` {{optional_inline}}

  - : `Boolean`. `true` wenn die Verbindung eine private DNS-Abfrage gemacht hat, wie zum Beispiel mit DoH (DNS über HTTPS), andernfalls `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, zeigt dies den Grund an. Aktuell kann dies nur einen einzigen Wert "cipher" enthalten, der anzeigt, dass die ausgehandelte Verschlüsselungssuite als schwach angesehen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
