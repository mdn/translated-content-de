---
title: "PublicKeyCredential: parseCreationOptionsFromJSON() statische Methode"
short-title: parseCreationOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`parseCreationOptionsFromJSON()`** statische Methode des {{domxref("PublicKeyCredential")}} Interfaces erstellt ein {{domxref("PublicKeyCredentialCreationOptions")}} Objekt aus einer JSON-Darstellung seiner Eigenschaften.

Die Methode ist eine bequeme Funktion zum Konvertieren der von einem vertrauenden Server bereitgestellten Anmeldeoptionsinformationen in eine Form, die eine Web-App verwenden kann, um [Anmeldedaten zu erstellen](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user).

## Syntax

```js-nolint
PublicKeyCredential.parseCreationOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit derselben Struktur wie ein {{domxref("PublicKeyCredentialCreationOptions")}}, jedoch mit [base64url](/de/docs/Glossary/Base64)-kodierten Strings anstelle von Puffer-Eigenschaften.

### Rückgabewert

Ein {{domxref("PublicKeyCredentialCreationOptions")}} Objekt.

### Ausnahmen

- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `options` Objekt nicht in ein {{domxref("PublicKeyCredentialCreationOptions")}} Objekt konvertiert werden kann.

## Beschreibung

Der Web Authentication Prozess zum [Erstellen eines Schlüsselpaares und Registrieren eines Nutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) beinhaltet, dass ein vertrauender Server der Web-App die Informationen liefert, die benötigt werden, um Anmeldedaten zu erstellen, einschließlich Details zur Nutzeridentität, zum vertrauenden Server und einer "Challenge".
Die Web-App gibt diese Informationen an einen Authenticator weiter, um die Anmeldedaten zu erstellen, indem sie [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einem {{domxref("PublicKeyCredentialCreationOptions")}} Objekt als Argument aufruft.

Die Spezifikation definiert nicht, wie die Informationen, die zum Erstellen einer Anmeldedaten benötigt werden, gesendet werden.
Ein praktischer Ansatz ist, dass der Server die Informationen in einer {{glossary("JSON type representation")}} des {{domxref("PublicKeyCredentialCreationOptions")}} Objekts kapselt, das seine Struktur widerspiegelt, aber Puffer-Eigenschaften wie `challenge` und `user.id` als [base64url](/de/docs/Glossary/Base64) Strings kodiert.
Dieses Objekt kann in einen [JSON](/de/docs/Glossary/JSON) String serialisiert, an die Web-App gesendet und deserialisiert werden und dann mit **`parseCreationOptionsFromJSON()`** in ein {{domxref("PublicKeyCredentialCreationOptions")}} Objekt umgewandelt werden.

## Beispiele

Beim Registrieren eines neuen Nutzers liefert ein vertrauender Server der Web-App Informationen über die erwarteten Anmeldedaten.
Der unten stehende Code definiert diese Informationen in der oben beschriebenen Form des [`options` Parameters](#options) (entnommen von ["Einen AuthenticatorAttestationResponse erhalten"](/de/docs/Web/API/AuthenticatorResponse#getting_an_authenticatorattestationresponse) in `AuthenticatorResponse`):

```js
const createCredentialOptionsJSON = {
  challenge:
    "21, 31, 105, " /* 29 weitere zufällige vom Server in diesem String generierte Bytes */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: "16",
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};
```

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) serialisiert und an die Web-App gesendet werden.

```js
JSON.stringify(createCredentialOptionsJSON);
```

Die Web-App kann den JSON-String zurück in ein `createCredentialOptionsJSON` Objekt deserialisieren (nicht gezeigt).
Die **`parseCreationOptionsFromJSON()`** Methode wird verwendet, um dieses Objekt in die Form zu konvertieren, die in `navigator.credentials.create()` verwendet werden kann:

```js
// Konvertiert Optionen in die Form, die durch create() verwendet wird
const createCredentialOptions =
  PublicKeyCredential.parseCreationOptionsFromJSON(
    createCredentialOptionsJSON, // JSON-typ Darstellung
  );

navigator.credentials
  .create({ createCredentialOptions })
  .then((newCredentialInfo) => {
    // Hier die neuen Anmeldeinformationen verarbeiten.
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.toJSON()")}}
