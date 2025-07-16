---
title: webRequest.SecurityInfo
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/SecurityInfo
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein Objekt, das die Sicherheitseigenschaften einer bestimmten Webanforderung beschreibt. Ein Objekt dieses Typs wird von der {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API zurückgegeben.

Wenn die Anfrage nicht unter Verwendung von {{Glossary("TLS", "TLS")}} gesichert ist, enthält dieses Objekt nur die Eigenschaft `state`, deren Wert `"insecure"` ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `certificates`
  - : `Array` von {{WebExtAPIRef("webRequest.CertificateInfo", "CertificateInfo")}}. Wenn {{WebExtAPIRef("webRequest.getSecurityInfo()")}} mit der Option `certificateChain` aufgerufen wurde und diese auf `true` gesetzt ist, enthält dies ein `CertificateInfo`-Objekt für jedes Zertifikat in der Kette, vom Serverzertifikat bis hin zur Vertrauenswurzel.

    Andernfalls enthält es nur ein `CertificateInfo`-Objekt für das Serverzertifikat.

- `certificateTransparencyStatus` {{optional_inline}}
  - : `String`. Gibt den [Certificate Transparency](https://certificate.transparency.dev/) Status für die Verbindung an. Dieser kann einen der folgenden Werte annehmen:
    - "not_applicable"
    - "policy_compliant"
    - "policy_not_enough_scts"
    - "policy_not_diverse_scts"

- `cipherSuite` {{optional_inline}}
  - : `String`. Die für die Verbindung verwendete Verschlüsselungssuite, formatiert gemäß der [TLS-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5246#appendix-A.5), zum Beispiel: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256".
- `errorMessage` {{optional_inline}}
  - : `String`. Falls es ein Problem mit dem TLS-Handshake gab (zum Beispiel, wenn das Zertifikat abgelaufen war, keine vertrauenswürdige Wurzel gefunden wurde oder ein Zertifikat widerrufen wurde), wird `status` "broken" sein und die Eigenschaft `errorMessage` wird eine Zeichenkette enthalten, die den Fehler beschreibt, entnommen aus der internen Liste von Fehlercodes in Firefox.

    Beachten Sie jedoch, dass `getSecurityInfo()` derzeit nur im `onHeaderReceived`-Listener aufgerufen werden kann und das `onHeaderReceived`-Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also nie gesetzt.

- `hsts` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Host [Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) verwendet, andernfalls `false`.
- `isDomainMismatch` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Domainname des Servers nicht mit dem im Zertifikat übereinstimmt, andernfalls `false`.
- `isExtendedValidation` {{optional_inline}}
  - : `Boolean`. `true`, wenn der Server ein [Extended Validation Certificate](https://en.wikipedia.org/wiki/Extended_Validation_Certificate) hat, andernfalls `false`.
- `isNotValidAtThisTime` {{optional_inline}}
  - : `Boolean`. `true`, wenn die aktuelle Zeit außerhalb des Gültigkeitszeitraums des Serverzertifikats liegt (d.h. das Zertifikat ist abgelaufen oder noch nicht gültig), andernfalls `false`.
- `isUntrusted` {{optional_inline}}
  - : `Boolean`. `true`, wenn keine Kette zu einem vertrauenswürdigen Wurzelzertifikat erstellt werden konnte, andernfalls `false`.
- `keaGroupName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies den bei dieser Anfrage verwendeten Schlüsselaustauschalgorithmus.
- `protocolVersion` {{optional_inline}}
  - : `String`. Die Version des verwendeten TLS-Protokolls. Einer der folgenden Werte:
    - "TLSv1"
    - "TLSv1.1"
    - "TLSv1.2"
    - "TLSv1.3"
    - "unknown" (wenn die Version nicht gültig ist)

- `secretKeyLength` {{optional_inline}}
  - : `Number`. Die Länge des geheimen Schlüssels in Bit.

- `signatureSchemeName` {{optional_inline}}
  - : `String`. Wenn `state` "secure" ist, beschreibt dies das bei dieser Anfrage verwendete Signaturschema.
- `state`
  - : `String`. Zustand der Verbindung. Einer der folgenden Werte:
    - "broken": der TLS-Handshake ist fehlgeschlagen (zum Beispiel, das Zertifikat war abgelaufen)
    - "insecure": die Verbindung ist keine TLS-Verbindung
    - "secure": die Verbindung ist eine sichere TLS-Verbindung
    - "weak": die Verbindung ist eine TLS-Verbindung, wird jedoch als schwach betrachtet. Sie können `weaknessReasons` untersuchen, um das Problem zu finden.

    Beachten Sie jedoch, dass `getSecurityInfo()` derzeit nur im `onHeaderReceived`-Listener aufgerufen werden kann und das `onHeaderReceived`-Ereignis nicht ausgelöst wird, wenn der Handshake fehlschlägt. In der Praxis wird dies also nie auf "broken" gesetzt.

- `usedDelegatedCredentials` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung Delegated Credentials verwendet hat, andernfalls `false`.

- `usedEch` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung ECH (Encrypted Client Hello) verwendet hat, andernfalls `false`.

- `usedOcsp` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung eine OCSP (Online Certificate Status Protocol)-Anfrage ausgeführt hat, andernfalls `false`.

- `usedPrivateDns` {{optional_inline}}
  - : `Boolean`. `true`, wenn die Verbindung eine private DNS-Abfrage durchgeführt hat, wie zum Beispiel mit DoH (DNS over HTTPS), andernfalls `false`.

- `weaknessReasons` {{optional_inline}}
  - : `String`. Wenn `state` "weak" ist, gibt dies den Grund an. Derzeit kann dies nur den Wert "cipher" enthalten, was darauf hinweist, dass die ausgehandelte Verschlüsselungssuite als schwach angesehen wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
