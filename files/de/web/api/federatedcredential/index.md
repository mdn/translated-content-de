---
title: FederatedCredential
slug: Web/API/FederatedCredential
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Das **`FederatedCredential`**-Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) liefert Informationen über Anmeldeinformationen von einem föderierten Identitätsanbieter. Ein föderierter Identitätsanbieter ist eine Instanz, der eine Website vertraut, die korrekte Authentifizierung eines Benutzers durchzuführen, und die eine API für diesen Zweck bereitstellt. [OpenID Connect](https://openid.net/developers/specs/) ist ein Beispiel für ein Rahmenwerk eines föderierten Identitätsanbieters.

> [!NOTE]
> Die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) bietet eine vollständigere Lösung für das Management der Identitätsföderation im Browser und verwendet den [`IdentityCredential`](/de/docs/Web/API/IdentityCredential)-Typ.

In Browsern, die dies unterstützen, kann eine Instanz dieses Interfaces im `credential`-Mitglied des `init`-Objekts für globales [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden.

{{InheritanceDiagram}}

## Konstruktor

- [`FederatedCredential()`](/de/docs/Web/API/FederatedCredential/FederatedCredential) {{Experimental_Inline}}
  - : Erstellt ein neues `FederatedCredential`-Objekt.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren, [`Credential`](/de/docs/Web/API/Credential)._

- [`FederatedCredential.provider`](/de/docs/Web/API/FederatedCredential/provider) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den föderierten Identitätsanbieter einer Anmeldeinformation enthält.
- [`FederatedCredential.protocol`](/de/docs/Web/API/FederatedCredential/protocol) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der das föderierte Identitätsprotokoll einer Anmeldeinformation enthält.

## Instanz-Methoden

Keine.

## Beispiele

```js
const cred = new FederatedCredential({
  id,
  name,
  provider: "https://account.google.com",
  iconURL,
});

// Store it
navigator.credentials.store(cred).then(() => {
  // Do something else.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
