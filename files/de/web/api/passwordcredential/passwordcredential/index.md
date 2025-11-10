---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 2c96a567388bb92a3fcbbadc2f262baa2599b5d0
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`** Konstruktor erstellt ein neues [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt.

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
      - : Ein String, der die URL eines Icons oder Avatars darstellt, welches mit dem Credential verknüpft wird.
    - `id`
      - : Ein String, der eine eindeutige ID für das Credential darstellt.
    - `name` {{optional_inline}}
      - : Ein String, der den Benutzernamen des Credentials darstellt.
    - `origin`
      - : Ein String, der die Herkunft des Credentials darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekte sind herkunftsgebunden, was bedeutet, dass sie nur an dem angegebenen Ursprung nutzbar sind, für den sie vorgesehen sind.
    - `password`
      - : Ein String, der das Password des Credentials darstellt.

- `form`
  - : Ein Verweis auf ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) mit geeigneten Eingabefeldern.
    Das Formular sollte mindestens eine ID und ein Passwort enthalten.
    Es könnte auch ein CSRF-Token erfordern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen `id`, `origin` oder `password` leer ist.

## Beispiele

Dieses Beispiel zeigt, wie man ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) einrichtet, um Daten zu erfassen, die wir verwenden, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt zu erstellen.

Beginnend mit dem Formularelement:

```html
<form id="form" method="post">
  <label for="id">Username:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Password:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Dann ein Verweis auf dieses Formularelement, um es zu nutzen, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt zu erstellen und es im Passwortsystem des Browsers zu speichern.

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
