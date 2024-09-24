---
title: "PublicKeyCredential: response-Eigenschaft"
short-title: response
slug: Web/API/PublicKeyCredential/response
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die schreibgeschützte **`response`**-Eigenschaft der
{{domxref("PublicKeyCredential")}}-Schnittstelle ist ein {{domxref("AuthenticatorResponse")}}
Objekt, das vom Authenticator an den Benutzeragenten zur Erstellung/Abrufung
von Anmeldeinformationen gesendet wird. Die in dieser Antwort enthaltenen Informationen werden vom Server der vertrauenden Partei verwendet, um die Legitimität der Anforderung zu überprüfen.

Eine `AuthenticatorResponse` ist entweder:

- eine {{domxref("AuthenticatorAttestationResponse")}} (wenn das
  `PublicKeyCredential` über
  {{domxref("CredentialsContainer.create()")}} erstellt wird)
- eine {{domxref("AuthenticatorAssertionResponse")}} (wenn das
  `PublicKeyCredential` über
  {{domxref("CredentialsContainer.get()")}} abgerufen wird).

Um die _Erstellung_ von Anmeldeinformationen zu validieren, benötigt der Server der vertrauenden Partei sowohl:

- diese Antwort
- die Erweiterungen des Clients (gegeben durch
  {{domxref("PublicKeyCredential.getClientExtensionResults()")}}), um die
  Anforderung zu validieren.

> [!NOTE]
> Bei der Validierung des Abrufs bestehender Anmeldeinformationen sind das
> gesamte `PublicKeyCredential`-Objekt und die Client-Erweiterungen für den Server der
> vertrauenden Partei erforderlich.

> [!NOTE]
> Diese Eigenschaft kann nur in Kontexten auf oberster Ebene verwendet werden und
> steht beispielsweise in einem {{HTMLElement("iframe")}} nicht zur Verfügung.

## Wert

Ein {{domxref("AuthenticatorResponse")}}-Objekt, das die Daten enthält, die ein Skript der vertrauenden Partei erhält und das an den Server der vertrauenden Partei gesendet werden sollte, um die Anforderung zur Erstellung oder zum Abruf zu validieren. Dieses Objekt enthält Daten vom Client
({{domxref("AuthenticatorResponse/clientDataJSON")}}) und vom Authenticator.

## Beispiele

```js
const options = {
  challenge: new Uint8Array(16) /* vom Server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* vom Server */,
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
