---
title: FederatedCredentialInit
slug: Web/API/FederatedCredentialInit
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Credential Management API")}}

Das **`FederatedCredentialInit`** Dictionary stellt das Objekt dar, das an {{domxref("CredentialsContainer.create()")}} als der Wert der `federated`-Option übergeben wird: das heißt, beim Erstellen eines {{domxref("FederatedCredential")}} Objekts, das ein Anmeldedatenobjekt repräsentiert, das mit einem föderierten Identitätsanbieter verknüpft ist.

> [!NOTE]
> Die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) ersetzt die {{domxref("FederatedCredential")}} Schnittstelle zugunsten der {{domxref("IdentityCredential")}} Schnittstelle.
>
> Das `FederatedCredentialInit` Dictionary wird nicht verwendet, wenn mit der `IdentityCredential` Schnittstelle gearbeitet wird.

## Instanzeigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Icons oder Avatars repräsentiert, das den Anmeldedaten zugeordnet werden soll.
- `id`
  - : Ein String, der eine eindeutige ID für die Anmeldedaten repräsentiert.
- `name` {{optional_inline}}
  - : Ein String, der den Benutzernamen der Anmeldedaten repräsentiert.
- `origin`
  - : Ein String, der den Ursprung der Anmeldedaten repräsentiert. {{domxref("FederatedCredential")}} Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendbar sind, für den sie bestimmt waren.
- `protocol` {{optional_inline}}
  - : Ein String, der das Protokoll des föderierten Identitätsanbieters der Anmeldedaten repräsentiert (zum Beispiel `"openidconnect"`).
- `provider`
  - : Ein String, der den föderierten Identitätsanbieter der Anmeldedaten repräsentiert (zum Beispiel `"https://www.facebook.com"` oder `"https://accounts.google.com"`).

## Beispiele

### Erstellen eines föderierten Identitätsnachweises

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
