---
title: "AuthenticatorAttestationResponse: Methode getPublicKeyAlgorithm()"
short-title: getPublicKeyAlgorithm()
slug: Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die Methode **`getPublicKeyAlgorithm()`** der Schnittstelle [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) gibt eine Zahl zurück, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose#algorithms) entspricht und den für die neue Anmeldeinformation verwendeten kryptografischen Algorithmus darstellt.

Dies ist eine Convenience-Funktion, die erstellt wurde, um einen einfachen Zugriff auf den Algorithmustyp zu ermöglichen. Diese Informationen müssen gespeichert werden, um zukünftige Authentifizierungsvorgänge zu verifizieren (d.h. unter Verwendung von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)).

## Syntax

```js-nolint
getPublicKeyAlgorithm()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose#algorithms) entspricht und den für die neue Anmeldeinformation verwendeten kryptografischen Algorithmus darstellt.

## Beispiele

Siehe [Erstellen einer Public-Key-Anmeldeinformation](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
