---
title: Credential
slug: Web/API/Credential
l10n:
  sourceCommit: 616b1da6696a833451891ad8c767ff15474b08f7
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Die **`Credential`**-Schnittstelle der [Credential Management API](/de/docs/Web/API/Credential_Management_API) liefert Informationen über eine Entität (normalerweise ein Benutzer), die normalerweise als Voraussetzung für eine Vertrauensentscheidung erforderlich sind.

`Credential`-Objekte können folgende Typen haben:

- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)

## Instanz-Eigenschaften

- [`Credential.id`](/de/docs/Web/API/Credential/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Bezeichner des Anmeldedatensatzes enthält. Dies kann eine GUID, ein Benutzername oder eine E-Mail-Adresse sein.
- [`Credential.type`](/de/docs/Web/API/Credential/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ des Anmeldedatensatzes enthält. Gültige Werte sind `password`, `federated`, `public-key`, `identity` und `otp`. (Für [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) und [`OTPCredential`](/de/docs/Web/API/OTPCredential))

## Statische Methoden

- [`Credential.isConditionalMediationAvailable()`](/de/docs/Web/API/Credential/isConditionalMediationAvailable_static)
  - : Gibt ein {{jsxref("Promise")}} zurück, das immer zu `false` aufgelöst wird. Unterklassen können diesen Wert überschreiben.

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
