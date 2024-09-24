---
title: "FederatedCredential: FederatedCredential() Konstruktor"
short-title: FederatedCredential()
slug: Web/API/FederatedCredential/FederatedCredential
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`FederatedCredential()`**
Konstruktor erstellt ein neues {{domxref("FederatedCredential")}} Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das `credential` erhalten, das aus dem `init`-Objekt für globales {{domxref("Window/fetch", "fetch()")}} übergeben wird.

## Syntax

```js-nolint
new FederatedCredential(init)
```

### Parameter

- `init`

  - : Optionen sind:

    - `provider`
      - : Ein String; der den Credential-Provider identifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
