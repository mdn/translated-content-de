---
title: "AuthenticatorAttestationResponse: getPublicKeyAlgorithm() Methode"
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKeyAlgorithm()`** Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Interfaces gibt eine Zahl zurück, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht. Diese Zahl repräsentiert den kryptographischen Algorithmus, der für das neue Credential verwendet wird.

Dies ist eine Komfortfunktion, die erstellt wurde, um einen einfachen Zugriff auf den Algorithmustyp zu ermöglichen. Diese Information muss gespeichert werden, um zukünftige Authentifizierungsvorgänge zu verifizieren (d.h. unter Verwendung von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)).

## Syntax

```js-nolint
getPublicKeyAlgorithm()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptographischen Algorithmus repräsentiert, der für das neue Credential verwendet wird.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssels mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
