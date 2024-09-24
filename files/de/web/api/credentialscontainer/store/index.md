---
title: "CredentialsContainer: store()-Methode"
short-title: store()
slug: Web/API/CredentialsContainer/store
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Credential Management API")}}{{SecureContext_Header}}

Die **`store()`**-Methode des {{domxref("CredentialsContainer")}} speichert ein Satz von Anmeldeinformationen für den Benutzer innerhalb einer {{domxref("Credential")}}-Instanz und gibt diese in einem {{jsxref("Promise")}} zurück.

> [!NOTE]
> Diese Methode ist auf oberste Ebenen beschränkt. Aufrufe innerhalb eines `<iframe>`-Elements werden ohne Effekt aufgelöst.

## Syntax

```js-nolint
store(credentials)
```

### Parameter

- `credentials`
  - : Eine gültige {{domxref("Credential")}}-Instanz.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es auch eine Anmeldeinformation des gleichen Typs wie die aktuelle unter Bearbeitung gibt.

## Beispiele

### Speichern einer Passwortanmeldeinformation nach erfolgreicher Authentifizierung

Dieser Code würde ausgeführt, nachdem ein Benutzer sich registriert oder eingeloggt hat und der Server bestätigt, dass die Anmeldeinformationen korrekt sind.

```js
// Überprüfen, ob der Browser Passwort-Anmeldedaten (und die Credential Management API) unterstützt
if ("PasswordCredential" in window) {
  let credential = new PasswordCredential({
    id: "example-username",
    name: "Carina Anand", // Im Falle eines Logins kommt der Name vom Server.
    password: "correct horse battery staple",
  });

  navigator.credentials.store(credential).then(
    () => {
      console.info("Anmeldeinformation im Credential Manager des Benutzers gespeichert.");
    },
    (err) => {
      console.error("Fehler beim Speichern der Anmeldeinformationen: ", err);
    },
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
