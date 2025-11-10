---
title: Credential
slug: Web/API/Credential
l10n:
  sourceCommit: 463cfc7f25a083241b06a5f5a9a927924f48ca6e
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`Credential`** Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) liefert Informationen über eine Entität (normalerweise einen Benutzer), normalerweise als Voraussetzung für eine Vertrauensentscheidung.

`Credential` Objekte können von den folgenden Typen sein:

- [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)
- [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)
- [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)
- [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)
- [`OTPCredential`](/de/docs/Web/API/OTPCredential)

## Instanz-Eigenschaften

- [`Credential.id`](/de/docs/Web/API/Credential/id) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Kennung des Credentials enthält. Dies kann eine GUID, ein Benutzername oder eine E-Mail-Adresse sein.
- [`Credential.type`](/de/docs/Web/API/Credential/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ des Credentials enthält. Gültige Werte sind `password`, `federated`, `public-key`, `identity` und `otp`. (Für [`PasswordCredential`](/de/docs/Web/API/PasswordCredential), [`FederatedCredential`](/de/docs/Web/API/FederatedCredential), [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), [`IdentityCredential`](/de/docs/Web/API/IdentityCredential) und [`OTPCredential`](/de/docs/Web/API/OTPCredential))

## Statische Methoden

- [`Credential.isConditionalMediationAvailable()`](/de/docs/Web/API/Credential/isConditionalMediationAvailable_static) {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das immer auf `false` auflöst. Unterklassen können diesen Wert überschreiben.

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
