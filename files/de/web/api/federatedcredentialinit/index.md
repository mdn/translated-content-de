---
title: FederatedCredentialInit
slug: Web/API/FederatedCredentialInit
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Credential Management API")}}

Das **`FederatedCredentialInit`** Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `federated`-Option übergeben wird: das heißt, beim Erstellen eines [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekts, das ein Anmeldedatenobjekt eines föderierten Identitätsanbieters darstellt.

> [!NOTE]
> Die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) ersetzt die [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Schnittstelle zugunsten der [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Schnittstelle.
>
> Das `FederatedCredentialInit` Wörterbuch wird nicht verwendet, wenn mit der `IdentityCredential`-Schnittstelle gearbeitet wird.

## Instanzeigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Symbols oder Avatars darstellt, das mit den Anmeldedaten verknüpft wird.
- `id`
  - : Ein String, der eine eindeutige ID für die Anmeldedaten darstellt.
- `name` {{optional_inline}}
  - : Ein String, der den Benutzernamen der Anmeldedaten darstellt.
- `origin`
  - : Ein String, der den Ursprung der Anmeldedaten darstellt. [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendet werden können, für den sie bestimmt sind.
- `protocol` {{optional_inline}}
  - : Ein String, der das Protokoll des föderierten Identitätsanbieters der Anmeldedaten darstellt (zum Beispiel `"openidconnect"`).
- `provider`
  - : Ein String, der den föderierten Identitätsanbieter der Anmeldedaten darstellt (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

## Beispiele

### Erstellen von Anmeldedaten für eine föderierte Identität

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  protocol: "openidconnect",
  provider: "https://provider.example.org",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    federated: credInit,
  });
  console.log(cred.name);
  console.log(cred.provider);
});
```

## Spezifikationen

{{Specifications}}
