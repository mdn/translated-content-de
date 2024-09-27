---
title: "AuthenticatorAttestationResponse: getPublicKey()-Methode"
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKey()`**-Methode des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt einen {{jsxref("ArrayBuffer")}} zurück, der das DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, falls dies nicht verfügbar ist.

Dies ist eine praktische Funktion, die entwickelt wurde, um einen einfachen Zugriff auf den öffentlichen Schlüssel zu ermöglichen. Dieser Schlüssel muss gespeichert werden, um zukünftige Authentifizierungsoperationen zu verifizieren (z. B. mit [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)).

## Syntax

```js-nolint
getPublicKey()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} mit dem DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, falls dies nicht verfügbar ist.

## Beispiele

Sehen Sie sich [Erstellen eines öffentlichen Schlüsselberechtigungsnachweises mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
