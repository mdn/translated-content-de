---
title: Credential
slug: Web/API/Credential
l10n:
  sourceCommit: 952db471d65c30302c44388edf3c0aa094874319
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`Credential`** Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) liefert Informationen über eine Entität (meistens ein Benutzer) normalerweise als Voraussetzung für eine Vertrauensentscheidung.

`Credential` Objekte können von den folgenden Typen sein:

- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)

## Instanzen-Eigenschaften

- [`Credential.id`](/de/docs/Web/API/Credential/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Kennung des Berechtigungsnachweises enthält. Dies könnte eine GUID, ein Benutzername oder eine E-Mail-Adresse sein.
- [`Credential.type`](/de/docs/Web/API/Credential/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ des Berechtigungsnachweises enthält. Gültige Werte sind `password`, `federated`, `public-key`, `identity` und `otp`. (Für [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) und [`OTPCredential`](/de/docs/Web/API/OTPCredential))

## Instanzen-Methoden

Keine.

## Beispiele

```js
const pwdCredential = new PasswordCredential({
  id: "example-username", // Username/ID
  name: "Carina Anand", // Display name
  password: "correct horse battery staple", // Password
});

console.assert(pwdCredential.type === "password");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
