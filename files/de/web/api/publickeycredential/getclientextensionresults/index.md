---
title: "PublicKeyCredential: getClientExtensionResults() Methode"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 3735f39708265a883e5fc9829c4335c31378e3ce
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`** Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces gibt ein Objekt zurück, das die Kennungen der während der Erstellung oder Authentifizierung der Berechtigung angeforderten Erweiterungen und deren Ergebnisse nach der Verarbeitung durch den Benutzeragenten abbildet.

Während der Erstellung oder des Abrufens eines `PublicKeyCredential` (über [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) bzw. [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)) ist es möglich, eine "benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `extensions` Eigenschaft der `publicKey` Option angegeben sind. Weitere Informationen zum Anfordern der verschiedenen Erweiterungen finden Sie in [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> [!NOTE]
> `getClientExtensionResults()` gibt nur die Ergebnisse von Erweiterungen zurück, die vom Benutzeragenten (Client) verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden, finden Sie in den [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, wobei jeder Eintrag eine Zeichenkette zur Kennung der Erweiterung als Schlüssel und das Resultat der Verarbeitung der Erweiterung durch den Client als Wert hat.

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

- [Die Liste der derzeit definierten Erweiterungen](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die das Ergebnis der Verarbeitung von Erweiterungen durch den Authenticator enthält.
