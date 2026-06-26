---
title: "AuthenticatorAttestationResponse: getPublicKey()-Methode"
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKey()`**-Methode der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das das DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/info/rfc5280/#section-4.1.2.7)), oder `null`, falls dies nicht verfügbar ist.

Dies ist eine Hilfsfunktion, die erstellt wurde, um den einfachen Zugriff auf den öffentlichen Schlüssel zu ermöglichen. Dieser Schlüssel muss gespeichert werden, um zukünftige Authentifizierungsoperationen zu verifizieren (d.h. unter Verwendung von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)).

## Syntax

```js-nolint
getPublicKey()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}} enthaltend das DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises (siehe [Subject Public Key Info](https://www.rfc-editor.org/info/rfc5280/#section-4.1.2.7)), oder `null`, falls dies nicht verfügbar ist.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Berechtigungsnachweises](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
