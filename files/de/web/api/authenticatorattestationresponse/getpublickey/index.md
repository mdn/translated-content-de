---
title: "AuthenticatorAttestationResponse: getPublicKey()-Methode"
short-title: getPublicKey()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKey
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getPublicKey()`**-Methode der {{domxref("AuthenticatorAttestationResponse")}}-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}}-Objekt zurück, das die DER `SubjectPublicKeyInfo` des neuen Zertifikats enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.

Dies ist eine Komfortfunktion, die entwickelt wurde, um den einfachen Zugang zum öffentlichen Schlüssel zu ermöglichen. Dieser Schlüssel muss gespeichert werden, um zukünftige Authentifizierungsvorgänge zu verifizieren (d.h. unter Verwendung von {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}}).

## Syntax

```js-nolint
getPublicKey()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}-Objekt, das die DER `SubjectPublicKeyInfo` des neuen Zertifikats enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.

## Beispiele

Siehe [Erstellen eines Public Key-Zertifikats mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
