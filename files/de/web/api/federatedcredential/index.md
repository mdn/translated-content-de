---
title: FederatedCredential
slug: Web/API/FederatedCredential
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Das **`FederatedCredential`**-Interface der [Credential Management API](/de/docs/Web/API/Credential_Management_API) bietet Informationen über Anmeldedaten von einem föderierten Identitätsanbieter. Ein föderierter Identitätsanbieter ist eine Entität, der eine Website vertraut, um einen Benutzer korrekt zu authentifizieren, und die eine API zu diesem Zweck bereitstellt. [OpenID Connect](https://openid.net/developers/specs/) ist ein Beispiel für ein Rahmenwerk föderierter Identitätsanbieter.

> [!NOTE]
> Die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) bietet eine vollständigere Lösung für die Verwaltung von Identitätsföderationen im Browser und verwendet den {{domxref("IdentityCredential")}}-Typ.

In Browsern, die es unterstützen, kann eine Instanz dieses Interfaces im `credential`-Mitglied des `init`-Objekts für den globalen {{domxref("Window/fetch", "fetch()")}} übergeben werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `FederatedCredential`-Objekt.

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren, {{domxref("Credential")}}._

- {{domxref("FederatedCredential.provider")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der den föderierten Identitätsanbieter einer Anmeldeinformation enthält.
- {{domxref("FederatedCredential.protocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der das föderierte Identitätsprotokoll einer Anmeldeinformation enthält.

## Instanzmethoden

Keine.

## Beispiele

```js
const cred = new FederatedCredential({
  id,
  name,
  provider: "https://account.google.com",
  iconURL,
});

// Speichern Sie es
navigator.credentials.store(cred).then(() => {
  // Etwas anderes tun.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
