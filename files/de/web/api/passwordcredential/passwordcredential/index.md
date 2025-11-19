---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 662d8cb5f7f95378325a85ab5382adc130666069
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`** Konstruktor erstellt ein neues [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt.

## Syntax

```js-nolint
new PasswordCredential(data)
new PasswordCredential(form)
```

### Parameter

Entweder der Folgenden:

- `data`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `iconURL` {{optional_inline}}
      - : Ein String, der die URL eines Symbols oder Avatars darstellt, das mit dem Berechtigungsnachweis verknüpft werden soll.
    - `id`
      - : Ein String, der den Benutzernamen des Benutzername/Passwort-Kombination darstellt.
    - `name` {{optional_inline}}
      - : Ein String, der einen für Menschen verständlichen Namen darstellt, der mit dem Berechtigungsnachweis verknüpft ist und dem Benutzer dabei helfen soll, diesen Berechtigungsnachweis in einer Benutzeroberfläche auszuwählen.
    - `origin`
      - : Ein String, der den Ursprung des Berechtigungsnachweises darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem spezifizierten Ursprung nutzbar sind, für den sie bestimmt sind.
    - `password`
      - : Ein String, der das Passwort des Berechtigungsnachweises darstellt.

- `form`
  - : Ein Verweis auf ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) mit geeigneten Eingabefeldern. Das Formular sollte zumindest eine ID und ein Passwort enthalten. Es könnte auch ein CSRF-Token erfordern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn eine der `id`, `origin` oder `password` Optionen leer ist.

## Beispiele

Dieses Beispiel zeigt, wie man ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) einrichtet, um Daten zu erfassen, die wir verwenden, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt zu erstellen.

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

Dann eine Referenz zu diesem Formularelement, um es zu verwenden, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt zu erstellen und es im Passwortsystem des Browsers zu speichern.

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
