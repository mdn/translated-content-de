---
title: "FederatedCredential: FederatedCredential() Konstruktor"
short-title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`FederatedCredential()`** Konstruktor erstellt ein neues [`FederatedCredential`](/de/docs/Web/API/FederatedCredential)-Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das von dem `init`-Objekt empfangene `credential` für das globale [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben bekommen.

## Syntax

```js-nolint
new FederatedCredential(init)
```

### Parameter

- `init`
  - : Optionen sind:
    - `provider`
      - : Ein String, der den Anmeldeinformationsanbieter identifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
