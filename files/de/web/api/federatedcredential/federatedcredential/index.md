---
title: "FederatedCredential: FederatedCredential() Konstruktor"
short-title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
l10n:
  sourceCommit: 4ee6823d1ae58f39e1863b9fc6f6b34d4a417336
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`FederatedCredential()`** Konstruktor erstellt ein neues [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das `credential`-Objekt, das aus dem `init`-Objekt für das globale [`fetch()`](/de/docs/Web/API/Window/fetch) empfangen wurde, übergeben werden.

## Syntax

```js-nolint
new FederatedCredential(data)
```

### Parameter

- `data`
  - : Ein [`FederatedCredentialInit`](/de/docs/Web/API/FederatedCredentialInit) Objekt. Ein Objekt mit den folgenden Eigenschaften:
    - `name` {{optional_inline}}
      - : Ein String, der den Benutzernamen des Credentials darstellt.
    - `iconURL` {{optional_inline}}
      - : Ein String, der die URL eines Icons oder Avatars darstellt, der dem Credential zugeordnet werden soll.
    - `origin`
      - : Ein String, der den Ursprung des Credentials darstellt. [`FederatedCredential`](/de/docs/Web/API/FederatedCredential) Objekte sind ursprungsgebunden, daher werden sie nur auf dem hier angegebenen Ursprung verwendbar sein.
    - `provider`
      - : Ein String, der den föderierten Identitätsanbieter des Credentials identifiziert, angegeben als der Ursprung, den der Anbieter zum Anmelden der Nutzer verwendet (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).
    - `protocol` {{optional_inline}}
      - : Ein String, der das Protokoll des föderierten Identitätsanbieters des Credentials darstellt (zum Beispiel, `"openidconnect"`).

## Beispiele

### Erstellen eines föderierten Identitäts-Credentials

```js
const credData = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const fedCred = new FederatedCredential(credData);

// Store it
navigator.credentials.store(fedCred).then(() => {
  // Do something else
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
