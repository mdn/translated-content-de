---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`**
Konstruktor erstellt ein neues [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das `credential` aus dem `init`-Objekt für den globalen [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben bekommen.

## Syntax

```js-nolint
new PasswordCredential(data)
new PasswordCredential(form)
```

### Parameter

Eines der folgenden:

- `data`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `iconURL` {{optional_inline}}
      - : Ein String, der die URL eines Icons oder Avatars darstellt, das mit den Anmeldeinformationen verknüpft werden soll.
    - `id`
      - : Ein String, der eine eindeutige ID für die Anmeldeinformationen darstellt.
    - `name` {{optional_inline}}
      - : Ein String, der den Benutzernamen der Anmeldeinformationen darstellt.
    - `origin`
      - : Ein String, der die Herkunft der Anmeldeinformationen darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekte sind herkunftsgebunden, was bedeutet, dass sie nur an dem spezifischen Herkunftsbereich verwendet werden können, für den sie bestimmt sind.
    - `password`
      - : Ein String, der das Passwort der Anmeldeinformationen darstellt.

- `form`
  - : Ein Verweis auf ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) mit geeigneten Eingabefeldern. Das Formular sollte mindestens eine ID und ein Passwort enthalten. Es könnte auch ein CSRF-Token erforderlich sein.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen `id`, `origin` oder `password` leer ist.

## Beispiele

Dieses Beispiel zeigt, wie man ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) einrichtet, um Daten zu erfassen, die wir verwenden, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt zu erstellen.

Beginnen Sie mit dem Formularelement.

```html
<form id="form" method="post">
  <label for="id">Username:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Password:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Dann eine Referenz zu diesem Formularelement, die verwendet wird, um ein
[`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekt zu erstellen und es im Passwortsystem des Browsers zu speichern.

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
