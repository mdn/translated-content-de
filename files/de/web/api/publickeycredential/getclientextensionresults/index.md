---
title: "PublicKeyCredential: getClientExtensionResults()-Methode"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`**-Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle gibt eine Zuordnung zwischen den Identifikatoren der während der Anmeldeinformationserstellung oder -authentifizierung angeforderten Erweiterungen und deren Ergebnissen nach der Verarbeitung durch den Benutzeragenten zurück.

Während der Erstellung oder des Abrufs eines `PublicKeyCredential` (über [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) und [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) bzw.) ist es möglich, eine "benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `extensions`-Eigenschaft der `publicKey`-Option angegeben sind. Weitere Informationen zum Anfordern der verschiedenen Erweiterungen finden Sie unter [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> **Note:** `getClientExtensionResults()` gibt nur die Ergebnisse von Erweiterungen zurück, die vom Benutzeragenten (Client) verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Authentifikator verarbeitet werden, finden Sie in den [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Eine {{jsxref("Map", "Karte")}}, wobei jeder Eintrag eine Erweiterungs-Identifikatoren-Zeichenkette als Schlüssel und die Ausgabe der Verarbeitung der Erweiterung durch den Client als Wert enthält.

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

- [Die Liste der aktuell definierten Erweiterungen](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die das Ergebnis der Erweiterungsverarbeitung des Authentifikators enthält
