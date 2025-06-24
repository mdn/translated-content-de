---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`**
Konstruktor erstellt ein neues [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das `credential`
vom `init` Objekt für das globale [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben werden.

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
      - : Ein String, der die URL eines Symbols oder Avatars darstellt, das mit den Zugangsdaten in Verbindung gebracht werden soll.
    - `id`
      - : Ein String, der eine eindeutige ID für die Zugangsdaten darstellt.
    - `name` {{optional_inline}}
      - : Ein String, der den Benutzernamen der Zugangsdaten darstellt.
    - `origin`
      - : Ein String, der den Ursprung der Zugangsdaten darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekte sind ursprungsgebunden, was bedeutet, dass sie nur am angegebenen Ursprung verwendet werden können, für den sie vorgesehen sind.
    - `password`
      - : Ein String, der das Passwort der Zugangsdaten darstellt.

- `form`
  - : Ein Verweis auf ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) mit entsprechenden Eingabefeldern. Das Formular sollte mindestens eine ID und ein Passwort enthalten. Es könnte auch ein CSRF-Token erfordern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen `id`, `origin` oder `password` leer ist.

## Beispiele

Dieses Beispiel zeigt, wie ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) eingerichtet wird, um Daten zu erfassen, die wir zur Erstellung eines [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekts verwenden werden.

Angefangen mit dem Formularelement.

```html
<form id="form" method="post">
  <label for="id">Username:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Password:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Dann ein Verweis auf dieses Formularelement, das genutzt wird, um ein [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekt zu erstellen und es im Passwortsystem des Browsers zu speichern.

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
