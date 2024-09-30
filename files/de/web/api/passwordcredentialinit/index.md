---
title: PasswordCredentialInit
slug: Web/API/PasswordCredentialInit
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{APIRef("Credential Management API")}}

Das **`PasswordCredentialInit`** Dictionary repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `password`-Option übergeben wird, wenn ein Passwort-Anmeldeinformationen erstellt werden.

## Initialisierung aus einem Formular

Anstatt dieses Dictionary direkt zu übergeben, kann eine Website ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) übergeben, und die Implementierung von `create()` wird die Daten der Anmeldeinformationen basierend auf den Werten der für die Übermittlung des Formulars vorgesehenen Elemente auffüllen, basierend auf dem Wert des [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete)-Attributs des Elements.

| `autocomplete` Wert                      | Anmeldeinformationseigenschaft anvisiert |
| ---------------------------------------- | --------------------------------------- |
| `"username"`                             | `id`                                    |
| `"name"` oder `"nickname"`               | `name`                                  |
| `"new-password"` oder `"current-password"` | `password`                              |
| `"photo"`                                | `iconURL`                               |

Wenn das Formular sowohl `"new-password"` als auch `"current-password"` Elemente enthält, wird der Wert für `"new-password"` verwendet.

Die `origin` Eigenschaft wird auf den Ursprung des Dokuments gesetzt, in dem das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) enthalten ist.

## Instanzeigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Symbols oder Avatars darstellt, das mit der Anmeldeinformation verknüpft ist.
- `id`
  - : Ein String, der eine eindeutige ID für die Anmeldeinformation darstellt.
- `name` {{optional_inline}}
  - : Ein String, der den Benutzernamen der Anmeldeinformation darstellt.
- `origin`
  - : Ein String, der den Ursprung der Anmeldeinformation darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential) Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendbar sein werden, für den sie bestimmt sind.
- `password`
  - : Ein String, der das Passwort der Anmeldeinformation darstellt.

## Beispiele

### Erstellen einer Passwort-Anmeldeinformation aus einem Objekt-Literal

Dieses Beispiel erstellt ein Objekt-Literal, um eine Passwort-Anmeldeinformation zu initialisieren.

```js
const credInit = {
  id: "1234",
  name: "Serpentina",
  origin: "https://example.org",
  password: "the last visible dog",
};

const makeCredential = document.querySelector("#make-credential");

makeCredential.addEventListener("click", async () => {
  const cred = await navigator.credentials.create({
    password: credInit,
  });
  console.log(cred.name);
  // Serpentina
  console.log(cred.password);
  // the last visible dog
});
```

### Erstellen einer Passwort-Anmeldeinformation aus einem Formular

Dieses Beispiel verwendet ein Formular, um eine Passwort-Anmeldeinformation zu initialisieren.

#### HTML

Das HTML deklariert ein {{HTMLElement("form")}}, das drei übermittelbare Elemente enthält, die die Benutzer-ID, den Anzeigenamen des Benutzers und das Passwort repräsentieren.

```html
<form>
  <div>
    <label for="userid">Enter your user ID: </label>
    <input type="text" name="userid" id="userid" autocomplete="username" />
  </div>
  <div>
    <label for="username">Enter your username: </label>
    <input type="text" name="username" id="username" autocomplete="name" />
  </div>
  <div>
    <label for="password">Enter your password: </label>
    <input
      type="password"
      name="password"
      id="password"
      autocomplete="new-password" />
  </div>
</form>

<button id="make-credential">Make credential</button>

<pre id="log"></pre>
```

```css hidden
form {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 10px;
}

#log {
  height: 60px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Das JavaScript übergibt das Formular an `create()`, und protokolliert einige der Werte der resultierenden Anmeldeinformation.

Das von `create()` zurückgegebene Versprechen wird abgelehnt, wenn das Formular keine Werte für die obligatorischen Anmeldeeigenschaften enthält.

```js
const makeCredential = document.querySelector("#make-credential");
const formCreds = document.querySelector("form");

makeCredential.addEventListener("click", async () => {
  try {
    const credential = await navigator.credentials.create({
      password: formCreds,
    });
    log(
      `New credential:\nname: ${credential.name}, password: ${credential.password}`,
    );
  } catch (e) {
    if (e.name === "TypeError") {
      log("Error creating credential\nMake sure you filled in all the fields");
    }
  }
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

#### Ergebnis

{{EmbedLiveSample("Creating a password credential from a form", "", "260")}}

## Spezifikationen

{{Specifications}}
