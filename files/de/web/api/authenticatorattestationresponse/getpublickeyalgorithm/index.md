---
title: "AuthenticatorAttestationResponse: getPublicKeyAlgorithm()-Methode"
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKeyAlgorithm()`**-Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt eine Zahl zurück, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für das neue Anmelde-Token verwendet wird.

Dies ist eine Komfortfunktion, die den einfachen Zugriff auf den Algorithmustyp ermöglicht. Diese Information muss gespeichert werden, um zukünftige Authentifizierungsvorgänge (z. B. unter Verwendung von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) überprüfen zu können.

## Syntax

```js-nolint
getPublicKeyAlgorithm()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für das neue Anmelde-Token verwendet wird.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Anmelde-Token](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
