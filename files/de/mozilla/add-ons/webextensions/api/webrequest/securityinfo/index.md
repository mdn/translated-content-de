---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt, das die Sicherheitsmerkmale einer bestimmten Webanforderung beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anforderung nicht unter Verwendung von {{Glossary("TLS", "TLS")}} gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`
  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der Option `certificateChain` aufgerufen wurde und diese auf `true` gesetzt ist, enthält dies ein `CertificateInfo`-Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis hin zur Vertrauenswurzel.

    Ansonsten enthält es ein einzelnes `CertificateInfo`-Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}
  - : `String`. Gibt den [Certificate Transparency](https://certificate.transparency.dev/)-Status für die Verbindung an. Dies kann einen der folgenden Werte annehmen:
    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Die für die Verbindung verwendete Verschlüsselungssuite, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5): zum Beispiel "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}
  - : `String`. Wenn es ein Problem mit dem TLS-Handshake gab (zum Beispiel, wenn das Zertifikat abgelaufen ist oder keine vertrauenswürdige Wurzel gefunden werden konnte oder ein Zertifikat widerrufen wurde), dann wird `status` auf "broken" gesetzt und die Eigenschaft `errorMessage` enthält eine Zeichenkette, die den Fehler beschreibt und aus der internen Fehlercodes-Liste von Firefox entnommen wird.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived` Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also niemals gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) verwendet, `false` andernfalls.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Domain-Name des Servers nicht mit dem Domain-Namen im Zertifikat übereinstimmt, `false` andernfalls.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) besitzt, `false` andernfalls.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), `false` andernfalls.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true`, wenn eine Kette zu einem vertrauenswürdigen Wurzelzertifikat nicht konstruiert werden konnte, `false` andernfalls.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den Key-Exchange-Algorithmus, der in dieser Anforderung verwendet wird.
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
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das Signaturschema, das in dieser Anforderung verwendet wird.
- `state`
  - : `String`. Zustand der Verbindung. Einer von:
    - "broken": Der TLS-Handshake ist fehlgeschlagen (zum Beispiel, das Zertifikat ist abgelaufen).
    - "insecure": Die Verbindung ist keine TLS-Verbindung.
    - "secure": Die Verbindung ist eine sichere TLS-Verbindung.
    - "weak": Die Verbindung ist eine TLS-Verbindung, wird jedoch als schwach angesehen. Sie können `weaknessReasons` untersuchen, um das Problem herauszufinden.

    Beachten Sie jedoch, dass Sie derzeit `getSecurityInfo()` nur im `onHeaderReceived` Listener aufrufen können und das `onHeaderReceived` Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also niemals auf "broken" gesetzt.

- `usedDelegatedCredentials` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung Delegated Credentials verwendet hat, `false` andernfalls.

- `usedEch` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, `false` andernfalls.

- `usedOcsp` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol)-Anfrage gestellt hat, `false` andernfalls.

- `usedPrivateDns` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung eine private DNS-Abfrage gemacht hat, wie z. B. mit DoH (DNS über HTTPS), `false` andernfalls.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur einen einzigen Wert "cipher" enthalten, was darauf hinweist, dass die ausgehandelte Verschlüsselungssuite als schwach angesehen wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
