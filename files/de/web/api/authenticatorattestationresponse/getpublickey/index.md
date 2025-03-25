---
title: "AuthenticatorAttestationResponse: getPublicKey() Methode"
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKey()`** Methode der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der das DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.

Dies ist eine Komfortfunktion, die entwickelt wurde, um einfachen Zugriff auf den öffentlichen Schlüssel zu ermöglichen. Dieser Schlüssel muss gespeichert werden, um zukünftige Authentifizierungsvorgänge zu verifizieren (z.B. mit [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)).

## Syntax

```js-nolint
getPublicKey()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}, der das DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Berechtigungsnachweises](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
