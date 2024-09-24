---
title: "PublicKeyCredential: rawId-Eigenschaft"
short-title: rawId
slug: Web/API/PublicKeyCredential/rawId
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`rawId`** schreibgeschützte Eigenschaft des {{domxref("PublicKeyCredential")}}-Interfaces ist ein {{jsxref("ArrayBuffer")}}-Objekt, das den Bezeichner der Anmeldedaten enthält.

Die {{domxref("PublicKeyCredential.id")}}-Eigenschaft ist eine [base64url kodierte](/de/docs/Glossary/Base64) Version dieses Bezeichners.

> [!NOTE]
> Diese Eigenschaft darf nur in obersten Kontexten verwendet werden und wird beispielsweise in einem {{HTMLElement("iframe")}} nicht verfügbar sein.

## Wert

Ein {{jsxref("ArrayBuffer")}}, der den Bezeichner der Anmeldedaten enthält. Dieser Bezeichner soll global einzigartig sein und ist für den aktuellen `PublicKeyCredential` und seine zugehörige {{domxref("AuthenticatorAssertionResponse")}} vorgesehen.

## Beispiele

```js
const options = {
  challenge: new Uint8Array(26) /* vom Server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* Für jeden Benutzer zu ändern */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const rawId = pubKeyCredential.rawId;
    // Machen Sie etwas mit rawId
  })
  .catch((err) => {
    // Behandeln Sie alle Fehler
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
