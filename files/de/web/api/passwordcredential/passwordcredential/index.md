---
title: "PasswordCredential: PasswordCredential() Konstruktor"
short-title: PasswordCredential()
slug: Web/API/PasswordCredential/PasswordCredential
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Credential Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`PasswordCredential()`** Konstruktor erstellt ein neues {{domxref("PasswordCredential")}} Objekt. In unterstützenden Browsern kann eine Instanz dieser Klasse das `credential` aus dem `init` Objekt für die globale {{domxref("Window/fetch", "fetch()")}} übergeben bekommen.

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
      - : Ein String, der die URL eines Icons oder Avatars darstellt, das mit dem Credential verknüpft werden soll.
    - `id`
      - : Ein String, der eine eindeutige ID für das Credential darstellt.
    - `name` {{optional_inline}}
      - : Ein String, der den Benutzernamen des Credentials darstellt.
    - `origin`
      - : Ein String, der den Ursprung des Credentials darstellt. {{domxref("PasswordCredential")}} Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendbar sind, für den sie vorgesehen waren.
    - `password`
      - : Ein String, der das Passwort des Credentials darstellt.

- `form`
  - : Ein Verweis auf ein {{domxref("HTMLFormElement")}} mit geeigneten Eingabefeldern. Das Formular sollte mindestens eine ID und ein Passwort enthalten. Es könnte auch ein CSRF-Token erfordern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine der Optionen `id`, `origin` oder `password` leer ist.

## Beispiele

Dieses Beispiel zeigt, wie ein {{domxref("HTMLFormElement")}} eingerichtet wird, um Daten zu erfassen, die wir zur Erstellung eines {{domxref("PasswordCredential")}} Objekts verwenden.

Beginnen wir mit dem Formularelement.

```html
<form id="form" method="post">
  <label for="id">Benutzername:</label>
  <input type="text" name="id" autocomplete="username" />
  <label for="password">Passwort:</label>
  <input type="password" name="password" autocomplete="current-password" />
  <input type="hidden" name="csrf_token" value="*****" />
</form>
```

Dann ein Verweis auf dieses Formularelement, um damit ein {{domxref("PasswordCredential")}} Objekt zu erstellen und es im Passwortsystem des Browsers zu speichern.

```js
const form = document.querySelector("#form");
const creds = new PasswordCredential(form);
// Die Zugangsdaten speichern.
navigator.credentials.store(creds).then((creds) => {
  // Machen Sie etwas mit den Zugangsdaten, wenn nötig.
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
