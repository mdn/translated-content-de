---
title: "AuthenticatorAttestationResponse: getPublicKeyAlgorithm()-Methode"
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKeyAlgorithm()`**-Methode des {{domxref("AuthenticatorAttestationResponse")}}-Interfaces gibt eine Zahl zurück, die einem [COSE-Algorithmus-Identifikator](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für das neue Zertifikat verwendet wird.

Dies ist eine Komfortfunktion, die entwickelt wurde, um den Algorithmustyp einfach zugänglich zu machen. Diese Information muss gespeichert werden, um zukünftige Authentifizierungsvorgänge (d. h. die Verwendung von {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}) zu überprüfen.

## Syntax

```js-nolint
getPublicKeyAlgorithm()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die einem [COSE-Algorithmus-Identifikator](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für das neue Zertifikat verwendet wird.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselzertifikats mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
