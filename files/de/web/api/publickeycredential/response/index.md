---
title: "PublicKeyCredential: response-Eigenschaft"
short-title: response
slug: Web/API/PublicKeyCredential/response
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`response`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces ist ein [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekt, das vom Authenticator an den User-Agent gesendet wird, um Anmeldedaten zu erstellen oder abzurufen. Die in dieser Antwort enthaltenen Informationen werden vom Server der vertrauenden Partei verwendet, um die Legitimität der Anforderung zu überprüfen.

Eine `AuthenticatorResponse` ist entweder:

- eine [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) (wenn die `PublicKeyCredential` über [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wird)
- eine [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) (wenn die `PublicKeyCredential` über [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) erhalten wird).

Um die _Erstellung_ von Anmeldedaten zu validieren, benötigt der Server der vertrauenden Partei sowohl:

- diese Antwort
- die Erweiterungen des Clients (bereitgestellt von [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)), um die Anforderung zu validieren.

> [!NOTE]
> Beim Validieren des Abrufs bestehender Anmeldedaten sind das gesamte `PublicKeyCredential`-Objekt und die Client-Erweiterungen notwendig für den Server der vertrauenden Partei.

> [!NOTE]
> Diese Eigenschaft kann nur in Top-Level-Kontexten verwendet werden und wird z. B. in einem {{HTMLElement("iframe")}} nicht verfügbar sein.

## Wert

Ein [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekt, das die Daten enthält, die das Skript einer vertrauenden Partei erhält und die an den Server der vertrauenden Partei gesendet werden sollten, um die Anforderung zur Erstellung oder zum Abruf zu validieren. Dieses Objekt enthält Daten vom Client ([`AuthenticatorResponse/clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) und vom Authenticator.

## Beispiele

```js
const options = {
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
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
    const response = pubKeyCredential.response;
    const clientExtResults = pubKeyCredential.getClientExtensionResults();
    // Send response and client extensions to the server so that it can validate
    // and create credentials
  })
  .catch((err) => {
    // Deal with any error
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
