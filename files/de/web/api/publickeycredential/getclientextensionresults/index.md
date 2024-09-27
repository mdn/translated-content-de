---
title: "PublicKeyCredential: Methode getClientExtensionResults()"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`**-Methode der
[`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt eine Zuordnung zwischen den Kennungen der während der Erstellung oder Authentifizierung von Anmeldeinformationen angeforderten Erweiterungen und ihren Ergebnissen nach der Verarbeitung durch den Benutzeragenten zurück.

Während der Erstellung oder dem Abrufen eines `PublicKeyCredential` (über
[`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und
[`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) jeweils) ist es möglich,
"benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `publicKey`-Optionseigenschaft `extensions` angegeben sind. Weitere Informationen zum Anfordern der verschiedenen Erweiterungen finden Sie in den [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> **Note:** `getClientExtensionResults()` gibt nur die Ergebnisse der vom Benutzeragenten (Client) verarbeiteten Erweiterungen zurück. Die Ergebnisse der vom Authenticator verarbeiteten Erweiterungen finden Sie in den [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Map", "Map")}}, wobei jeder Eintrag eine Zeichenfolge der Erweiterungskennung als Schlüssel und das Ergebnis der Verarbeitung der Erweiterung durch den Client als Wert darstellt.

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
> Erweiterungen sind optional und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Client stets optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen darüber, welche Erweiterungen von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

## Siehe auch

- [Die Liste der derzeit definierten Erweiterungen](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die das
  Ergebnis der Erweiterungsverarbeitung des Authenticators enthält
