---
title: "PublicKeyCredential: response-Eigenschaft"
short-title: response
slug: Web/API/PublicKeyCredential/response
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`response`** schreibgeschützte Eigenschaft der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle ist ein [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekt, das vom Authenticator an den User-Agent zur Erstellung oder Abrufung von Anmeldeinformationen gesendet wird. Die in dieser Antwort enthaltenen Informationen werden vom Server der vertrauenden Partei verwendet, um zu überprüfen, ob die Anfrage legitim ist.

Eine `AuthenticatorResponse` ist entweder:

- eine [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) (wenn das `PublicKeyCredential` über [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wird)
- eine [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) (wenn das `PublicKeyCredential` über [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) erhalten wird).

Um die _Erstellung_ von Anmeldeinformationen zu validieren, benötigt der Server der vertrauenden Partei beide:

- diese Antwort
- die Erweiterungen des Clients (gegeben durch [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults)), um die Anfrage zu validieren.

> [!NOTE]
> Beim Validieren des Abrufs bestehender Anmeldeinformationen sind das gesamte `PublicKeyCredential`-Objekt und die Erweiterungen des Clients für den Server der vertrauenden Partei erforderlich.

> [!NOTE]
> Diese Eigenschaft kann nur in Top-Level-Kontexten verwendet werden und ist zum Beispiel in einem {{HTMLElement("iframe")}} nicht verfügbar.

## Wert

Ein [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Objekt, das die Daten enthält, die das Skript der vertrauenden Partei empfängt und an den Server der vertrauenden Partei gesendet werden sollten, um die Anfrage zur Erstellung oder zum Abrufen zu validieren. Dieses Objekt enthält Daten vom Client ([`AuthenticatorResponse/clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)) und vom Authenticator.

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
