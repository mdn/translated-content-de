---
title: "PublicKeyCredential: Methode getClientExtensionResults()"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`getClientExtensionResults()`**-Methode des
{{domxref("PublicKeyCredential")}}-Interfaces gibt eine Zuordnung zwischen den Identifikatoren der bei der Erstellung oder Authentifizierung angeforderten Erweiterungen und deren Ergebnissen nach Verarbeitung durch den Benutzeragenten zurück.

Während der Erstellung oder Abfrage eines `PublicKeyCredential` (über
{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} und
{{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} jeweils) ist es möglich, "benutzerdefinierte" Verarbeitung durch den Client für verschiedene Erweiterungen anzufordern, die in der `extensions`-Eigenschaft der `publicKey`-Option angegeben sind. Weitere Informationen über das Anfordern der verschiedenen Erweiterungen finden Sie in den [Web Authentication-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

> **Hinweis:** `getClientExtensionResults()` gibt nur die Ergebnisse von Erweiterungen zurück, die vom Benutzeragenten (Client) verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden, finden Sie in den [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die in {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} verfügbar sind.

## Syntax

```js-nolint
getClientExtensionResults()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Map", "Map")}}, wobei jeder Eintrag ein String als Schlüssel für den Identifikator der Erweiterung und die Ausgabe aus der Verarbeitung der Erweiterung durch den Client als Wert hat.

## Beispiele

```js
const publicKey = {
  // Hier sind die "Eingaben" der Erweiterungen
  extensions: {
    appid: "https://accounts.example.com",
  },
  allowCredentials: {
    id: "fgrt46jfgd...",
    transports: ["usb", "nfc"],
    type: "public-key",
  },
  challenge: new Uint8Array(16) /* vom Server */,
};

navigator.credentials
  .get({ publicKey })
  .then((publicKeyCred) => {
    const myResults = publicKeyCred.getClientExtensionResults();
    // myResults wird die Ausgabe der Verarbeitung der "appid"-Erweiterung enthalten
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

- [Die Liste der derzeit definierten Erweiterungen](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}, die das
  Ergebnis der Verarbeitung der Erweiterungen durch den Authenticator enthält.
