---
title: PasswordCredentialInit
slug: Web/API/PasswordCredentialInit
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Credential Management API")}}

Das **`PasswordCredentialInit`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der `password`-Option übergeben wird, wenn ein Passwort-Credential erstellt wird.

## Initialisierung von einem Formular

Statt dieses Wörterbuch direkt zu übergeben, kann eine Webseite ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) übergeben, und die Implementierung von `create()` wird die Daten des Credentials aus den Werten der absendbaren Elemente des Formulars befüllen, basierend auf dem Wert des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs des Elements.

| `autocomplete`-Wert                        | Angestrebte Credential-Eigenschaft |
| ------------------------------------------ | ---------------------------------- |
| `"username"`                               | `id`                               |
| `"name"` oder `"nickname"`                 | `name`                             |
| `"new-password"` oder `"current-password"` | `password`                         |
| `"photo"`                                  | `iconURL`                          |

Falls das Formular sowohl `"new-password"` als auch `"current-password"`-Elemente enthält, wird der Wert für `"new-password"` verwendet.

Die `origin`-Eigenschaft ist auf den Ursprung des Dokuments gesetzt, in dem das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) enthalten ist.

## Instanz-Eigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Icons oder Avatars repräsentiert, das mit dem Credential assoziiert wird.
- `id`
  - : Ein String, der eine eindeutige ID für das Credential darstellt.
- `name` {{optional_inline}}
  - : Ein String, der den Benutzernamen des Credentials darstellt.
- `origin`
  - : Ein String, der den Ursprung des Credentials darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendet werden können, für den sie vorgesehen sind.
- `password`
  - : Ein String, der das Passwort des Credentials darstellt.

## Beispiele

### Erstellen eines Passwort-Credentials aus einem Objektliteral

Dieses Beispiel konstruiert ein Objektliteral zur Initialisierung eines Passwort-Credentials.

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

### Erstellen eines Passwort-Credentials aus einem Formular

Dieses Beispiel verwendet ein Formular zur Initialisierung eines Passwort-Credentials.

#### HTML

Das HTML deklariert ein {{HTMLElement("form")}}, das drei absendbare Elemente enthält, die die Benutzer-ID, den Anzeigenamen des Benutzers und das Passwort repräsentieren.

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

Das JavaScript übergibt das Formular an `create()` und protokolliert einige der Werte des resultierenden Credentials.

Das von `create()` zurückgegebene Versprechen wird abgelehnt, wenn das Formular keine Werte für die obligatorischen Credential-Eigenschaften enthält.

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

{{EmbedLiveSample("Erstellen eines Passwort-Credentials aus einem Formular", "", "260")}}

## Spezifikationen

{{Specifications}}
