---
title: "CredentialsContainer: store() Methode"
short-title: store()
slug: Web/API/CredentialsContainer/store
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`store()`** Methode des
[`CredentialsContainer`](/de/docs/Web/API/CredentialsContainer) speichert eine Reihe von Berechtigungen für den Benutzer innerhalb einer
[`Credential`](/de/docs/Web/API/Credential) Instanz und gibt diese in einem {{jsxref("Promise")}} zurück.

> [!NOTE]
> Diese Methode ist auf Top-Level-Kontexte beschränkt. Aufrufe innerhalb eines
> `<iframe>` Elements werden ohne Effekt aufgelöst.

## Syntax

```js-nolint
store(credentials)
```

### Parameter

- `credentials`
  - : Eine gültige [`Credential`](/de/docs/Web/API/Credential) Instanz.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es bereits eine Berechtigung desselben Typs wie die aktuelle gibt, die bearbeitet wird.

## Beispiele

### Speichern einer Passwortberechtigung bei erfolgreicher Authentifizierung

Dieser Code wird ausgeführt, nachdem sich ein Benutzer angemeldet oder eingeloggt hat und der Server die Berechtigung als korrekt bestätigt hat.

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
