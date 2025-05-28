---
title: "PublicKeyCredential: getClientExtensionResults()-Methode"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`**-Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt eine Zuordnung zwischen den Bezeichnern der während der Anmeldeinformationen-Erstellung oder -Authentifizierung angeforderten Erweiterungen und deren Ergebnissen nach der Verarbeitung durch den Benutzeragenten zurück.

Während der Erstellung oder des Abrufs eines `PublicKeyCredential` (über [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) bzw. [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) ist es möglich, eine "benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `extensions`-Eigenschaft der `publicKey`-Option angegeben sind. Weitere Informationen zum Anfordern der verschiedenen Erweiterungen finden Sie in den [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> **Note:** `getClientExtensionResults()` gibt nur die Ergebnisse von Erweiterungen zurück, die vom Benutzeragenten (Client) verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Authentifikator verarbeitet wurden, finden Sie in den [Authentifikator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Map", "map")}}, wobei jeder Eintrag eine Erweiterungs-Bezeichnerzeichenfolge als Schlüssel und das Ausgabewert der Verarbeitung der Erweiterung durch den Client als Wert ist.

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
> Erweiterungen sind optional, und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Das Verarbeiten von Erweiterungen ist für den Client immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen darüber, welche Erweiterungen von welchen Browsern unterstützt werden, finden Sie in den [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

## Siehe auch

- [Die Liste der aktuell definierten Erweiterungen](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die das
  Ergebnis der Erweiterungsverarbeitung des Authentifikators enthält
