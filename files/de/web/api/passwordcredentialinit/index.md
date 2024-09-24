---
title: PasswordCredentialInit
slug: Web/API/PasswordCredentialInit
l10n:
  sourceCommit: 66afe9b59c609043c91e51487cfcecaecbbadb3d
---

{{APIRef("Credential Management API")}}

Das **`PasswordCredentialInit`** Wörterbuch repräsentiert das Objekt, das an {{domxref("CredentialsContainer.create()")}} als Wert der `password`-Option übergeben wird, wenn ein Passwortanmeldedaten erstellt wird.

## Initialisierung aus einem Formular

Anstatt dieses Wörterbuch direkt zu übergeben, kann eine Website ein {{domxref("HTMLFormElement")}} übergeben, und die Implementierung von `create()` füllt die Daten der Anmeldedaten basierend auf den Werten der submitfähigen Elemente des Formulars, abhängig von dem Wert des [`autocomplete`](/de/docs/Web/HTML/Attributes/autocomplete) Attributs des Elements.

| `autocomplete` Wert                      | Zielobjekt der Anmeldedaten |
| ---------------------------------------- | ---------------------------- |
| `"username"`                             | `id`                         |
| `"name"` oder `"nickname"`               | `name`                       |
| `"new-password"` oder `"current-password"` | `password`                   |
| `"photo"`                                | `iconURL`                    |

Wenn das Formular sowohl `"new-password"` als auch `"current-password"` Elemente enthält, wird der Wert für `"new-password"` verwendet.

Die `origin` Eigenschaft wird auf den Ursprung des Dokuments gesetzt, das das {{domxref("HTMLFormElement")}} enthält.

## Instanzeigenschaften

- `iconURL` {{optional_inline}}
  - : Ein String, der die URL eines Icons oder Avatars darstellt, das mit den Anmeldedaten verknüpft ist.
- `id`
  - : Ein String, der eine eindeutige ID für die Anmeldedaten darstellt.
- `name` {{optional_inline}}
  - : Ein String, der den Benutzernamen der Anmeldedaten darstellt.
- `origin`
  - : Ein String, der den Ursprung der Anmeldedaten darstellt. {{domxref("PasswordCredential")}} Objekte sind ursprungsgebunden, was bedeutet, dass sie nur auf dem spezifischen Ursprung verwendbar sind, für den sie vorgesehen sind.
- `password`
  - : Ein String, der das Passwort der Anmeldedaten darstellt.

## Beispiele

### Erstellen einer Passwortanmeldedaten aus einem Objektliterale

Dieses Beispiel erstellt ein Objektliterale zur Initialisierung einer Passwortanmeldedaten.

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

### Erstellen einer Passwortanmeldedaten aus einem Formular

Dieses Beispiel verwendet ein Formular zur Initialisierung einer Passwortanmeldedaten.

#### HTML

Das HTML deklariert ein {{HTMLElement("form")}}, das drei submitfähige Elemente enthält, die die Benutzer-ID, den Anzeigenamen des Benutzers und das Passwort darstellen.

```html
<form>
  <div>
    <label for="userid">Geben Sie Ihre Benutzer-ID ein: </label>
    <input type="text" name="userid" id="userid" autocomplete="username" />
  </div>
  <div>
    <label for="username">Geben Sie Ihren Benutzernamen ein: </label>
    <input type="text" name="username" id="username" autocomplete="name" />
  </div>
  <div>
    <label for="password">Geben Sie Ihr Passwort ein: </label>
    <input
      type="password"
      name="password"
      id="password"
      autocomplete="new-password" />
  </div>
</form>

<button id="make-credential">Anmeldedaten erstellen</button>

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

Das JavaScript übergibt das Formular an `create()`, und protokolliert einige der Werte der resultierenden Anmeldedaten.

Das von `create()` zurückgegebene Versprechen wird abgewiesen, wenn das Formular keine Werte für die erforderlichen Anmeldedateneigenschaften enthält.

```js
const makeCredential = document.querySelector("#make-credential");
const formCreds = document.querySelector("form");

makeCredential.addEventListener("click", async () => {
  try {
    const credential = await navigator.credentials.create({
      password: formCreds,
    });
    log(
      `Neue Anmeldedaten:\nname: ${credential.name}, password: ${credential.password}`,
    );
  } catch (e) {
    if (e.name === "TypeError") {
      log("Fehler beim Erstellen der Anmeldedaten\nStellen Sie sicher, dass Sie alle Felder ausgefüllt haben");
    }
  }
});

const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

#### Resultat

{{EmbedLiveSample("Creating a password credential from a form", "", "260")}}

## Spezifikationen

{{Specifications}}
