---
title: "CredentialsContainer: store() Methode"
short-title: store()
slug: Web/API/CredentialsContainer/store
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`store()`**-Methode des [`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) speichert ein Set von Anmeldeinformationen für den Benutzer in einer [`Credential`](/de/docs/Web/API/Credential)-Instanz und gibt diese in einem {{jsxref("Promise")}} zurück.

> [!NOTE]
> Diese Methode ist auf oberste Kontexte beschränkt. Aufrufe innerhalb eines `<iframe>`-Elements werden ohne Wirkung aufgelöst.

## Syntax

```js-nolint
store(credentials)
```

### Parameter

- `credentials`
  - : Eine gültige [`Credential`](/de/docs/Web/API/Credential)-Instanz.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `undefined` aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es bereits eine Anmeldeinformation des gleichen Typs wie die aktuelle gibt, die in Bearbeitung ist.

## Beispiele

### Speichern einer Passwort-Anmeldeinformation bei erfolgreicher Authentifizierung

Dieses Codebeispiel wird ausgeführt, nachdem sich ein Benutzer angemeldet oder registriert hat und der Server die Anmeldeinformation als korrekt bestätigt hat.

```js
// Check if the browser supports password credentials (and the Credential Management API)
if ("PasswordCredential" in window) {
  let credential = new PasswordCredential({
    id: "example-username",
    name: "Carina Anand", // In case of a login, the name comes from the server.
    password: "correct horse battery staple",
  });

  navigator.credentials.store(credential).then(
    () => {
      console.info("Credential stored in the user agent's credential manager.");
    },
    (err) => {
      console.error("Error while storing the credential: ", err);
    },
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
