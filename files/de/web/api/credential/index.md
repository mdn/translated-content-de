---
title: Berechtigung
slug: Web/API/Credential
l10n:
  sourceCommit: 952db471d65c30302c44388edf3c0aa094874319
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

Das **`Credential`** Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) liefert Informationen über eine Entität (normalerweise ein Benutzer), normalerweise als Voraussetzung für eine Vertrauensentscheidung.

`Credential` Objekte können folgende Typen haben:

- {{domxref("FederatedCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("PasswordCredential")}}
- {{domxref("PublicKeyCredential")}}
- {{domxref("OTPCredential")}}

## Instanzeigenschaften

- {{domxref("Credential.id")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Kennung der Berechtigung enthält. Dies könnte eine GUID, ein Benutzername oder eine E-Mail-Adresse sein.
- {{domxref("Credential.type")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der Berechtigung enthält. Gültige Werte sind `password`, `federated`, `public-key`, `identity` und `otp`. (Für {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}}, {{domxref("PublicKeyCredential")}}, {{domxref("IdentityCredential")}} und {{domxref("OTPCredential")}})

## Instanzmethoden

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
