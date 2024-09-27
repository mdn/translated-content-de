---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`**
Konstruktor erstellt ein neues [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse `credential` aus dem `init`-Objekt für den globalen [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden.

## Syntax

```js-nolint
new PasswordCredential(data)
new PasswordCredential(form)
```

### Parameter

Einer der folgenden:

- `data`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `iconURL` {{optional_inline}}
      - : Eine Zeichenkette, die die URL eines Symbols oder Avatars darstellt, das mit der Berechtigung verknüpft wird.
    - `id`
      - : Eine Zeichenkette, die eine eindeutige ID für die Berechtigung darstellt.
    - `name` {{optional_inline}}
      - : Eine Zeichenkette, die den Benutzernamen der Berechtigung darstellt.
    - `origin`
      - : Eine Zeichenkette, die den Ursprung der Berechtigung darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendet werden können, für den sie vorgesehen sind.
    - `password`
      - : Eine Zeichenkette, die das Passwort der Berechtigung darstellt.

- `form`
  - : Eine Referenz zu einem [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) mit geeigneten Eingabefeldern. Das
    Formular sollte mindestens eine ID und ein Passwort enthalten. Es könnte auch ein
    CSRF-Token erfordern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen `id`, `origin` oder `password` leer ist.

## Beispiele

Dieses Beispiel zeigt, wie ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) eingerichtet wird, um Daten zu erfassen,
die wir zur Erstellung eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekts verwenden werden.

Beginnend mit dem Formularelement.

```html
<form id="form" method="post">
  <label for="id">Username:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Password:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Dann eine Referenz zu diesem Formularelement, die zur Erstellung eines
[`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekts verwendet und im Passwortsystem des Browsers gespeichert wird.

```js
const form = document.querySelector("#form");
const creds = new PasswordCredential(form);
// Store the credentials.
navigator.credentials.store(creds).then((creds) => {
  // Do something with the credentials if you need to.
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
