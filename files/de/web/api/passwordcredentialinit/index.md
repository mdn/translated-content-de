---
title: PasswordCredentialInit
slug: Web/API/PasswordCredentialInit
l10n:
  sourceCommit: 0fe625f488d9b548f57bb7f4c714287ba093d96b
---

{{APIRef("Credential Management API")}}

Das **`PasswordCredentialInit`**-Wörterbuch repräsentiert das Objekt, das an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) als Wert der Option `password` übergeben wird, wenn ein Passwort-Anmeldedatensatz erstellt wird.

## Initialisierung aus einem Formular

Anstatt dieses Wörterbuch direkt zu übergeben, kann eine Website ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) übergeben, und die Implementierung von `create()` wird die Daten des Anmeldedatensatzes basierend auf den Werten der abschickbaren Elemente des Formulars und dem Wert des [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete)-Attributs des Elements ausfüllen.

| `autocomplete`-Wert                        | Ziel-Eigenschaft des Anmeldedatensatzes |
| ------------------------------------------ | --------------------------------------- |
| `"username"`                               | `id`                                    |
| `"name"` oder `"nickname"`                 | `name`                                  |
| `"new-password"` oder `"current-password"` | `password`                              |
| `"photo"`                                  | `iconURL`                               |

Falls das Formular sowohl `"new-password"` als auch `"current-password"` enthält, wird der Wert für `"new-password"` verwendet.

Die `origin`-Eigenschaft wird auf den Ursprung des Dokuments gesetzt, in dem das [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) enthalten ist.

## Instanz-Eigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Icons oder Avatars darstellt, das mit dem Anmeldedatensatz assoziiert werden soll.
- `id`
  - : Ein String, der den Benutzernamen-Teil der Benutzername/Passwort-Kombination darstellt.
- `name` {{optional_inline}}
  - : Ein String, der einen für Menschen verständlichen Namen darstellt, der mit dem Anmeldedatensatz assoziiert ist und dem Benutzer helfen soll, diesen Anmeldedatensatz in einer Benutzeroberfläche auszuwählen.
- `origin`
  - : Ein String, der den Ursprung des Anmeldedatensatzes darstellt. [`PasswordCredential`](/de/docs/Web/API/PasswordCredential)-Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem angegebenen Ursprung verwendbar sind, für den sie vorgesehen sind.
- `password`
  - : Ein String, der das Passwort des Anmeldedatensatzes darstellt.

## Beispiele

### Erstellen eines Passwort-Anmeldedatensatzes aus einem Objektliteral

Dieses Beispiel konstruiert ein Objektliteral, um einen Passwort-Anmeldedatensatz zu initialisieren.

```js
const credInit = {
  id: "serpent1234", // "username" in a typical username/password pair
  name: "Serpentina", // display name for credential
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
  console.log(cred.id);
  // serpent1234
  console.log(cred.password);
  // the last visible dog
});
```

### Erstellen eines Passwort-Anmeldedatensatzes aus einem Formular

Dieses Beispiel verwendet ein Formular, um einen Passwort-Anmeldedatensatz zu initialisieren.

#### HTML

Das HTML deklariert ein {{HTMLElement("form")}} mit drei abschickbaren Elementen, die die Benutzer-ID, den Anzeigenamen des Benutzers und das Passwort repräsentieren.

```html
<form>
  <div>
    <label for="displayname">Enter your display name: </label>
    <input
      type="text"
      name="displayname"
      id="displayname"
      autocomplete="name" />
  </div>
  <div>
    <label for="username">Enter your username: </label>
    <input type="text" name="username" id="username" autocomplete="username" />
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

Das JavaScript übergibt das Formular an `create()` und protokolliert einige der Werte des resultierenden Anmeldedatensatzes.

Das von `create()` zurückgegebene Promise wird zurückgewiesen, wenn das Formular keine Werte für die obligatorischen Anmeldedatensatzeigenschaften enthält.

```js
const makeCredential = document.querySelector("#make-credential");
const formCreds = document.querySelector("form");

makeCredential.addEventListener("click", async () => {
  try {
    const credential = await navigator.credentials.create({
      password: formCreds,
    });
    log(
      `New credential:\ndisplay name: ${credential.name}, username: ${credential.id}, password: ${credential.password}`,
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

{{EmbedLiveSample("Erstellen eines Passwort-Anmeldedatensatzes aus einem Formular", "", "260")}}

## Spezifikationen

{{Specifications}}
