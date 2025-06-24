---
title: "PublicKeyCredential: getClientExtensionResults()-Methode"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`**-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt eine Zuordnung zwischen den Kennungen von Erweiterungen zurück, die während der Erstellung oder Authentifizierung von Anmeldeinformationen angefordert wurden, und deren Ergebnissen nach der Verarbeitung durch den Benutzeragenten.

Während der Erstellung oder des Abrufs eines `PublicKeyCredential` (über [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) jeweils) ist es möglich, eine "benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `extensions`-Eigenschaft der `publicKey`-Option angegeben sind. Weitere Informationen zum Anfordern der verschiedenen Erweiterungen finden Sie in [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> [!NOTE] > `getClientExtensionResults()` gibt nur die Ergebnisse von Erweiterungen zurück, die vom Benutzeragenten (Client) verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden, finden Sie in den [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Map", "Map")}}, wobei jeder Eintrag einen Zeichenfolgenbezeichner der Erweiterung als Schlüssel und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert enthält.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beispiele

```js
const publicKey = {
  // Here are the extension "inputs"
  extensions: {
    appid: "https://accounts.example.com",
  },
  allowCredentials: {
    id: "fgrt46jfgd...",
    transports: ["usb", "nfc"],
    type: "public-key",
  },
  challenge: new Uint8Array(16) /* from the server */,
};

navigator.credentials
  .get({ publicKey })
  .then((publicKeyCred) => {
    const myResults = publicKeyCred.getClientExtensionResults();
    // myResults will contain the output of processing the "appid" extension
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Informationen darüber, welche Erweiterungen von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

## Siehe auch

- [Die Liste der aktuell definierten Erweiterungen](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die das Ergebnis der Verarbeitung der Erweiterungen durch den Authenticator enthält
