---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`parseRequestOptionsFromJSON()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces konvertiert eine {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} in eine Instanz von [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions).

Die Methode ist eine bequeme Funktion, um Informationen, die von einem vertrauenswürdigen Server bereitgestellt werden, in eine Web-App zu konvertieren, um eine bestehende Anmeldeinformation anzufordern.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit derselben Struktur wie eine Instanz von [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions), aber mit {{Glossary("Base64", "base64url")}}-kodierten Zeichenfolgen anstelle von Puffer-Eigenschaften.

### Rückgabewert

Eine Instanz von [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions).

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des `options` Objekts nicht in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Instanz konvertiert werden kann.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

Der Web-Authentifizierungsprozess für die [Authentifizierung eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) beinhaltet, dass ein vertrauenswürdiger Server der Web-App die Informationen zur Verfügung stellt, die benötigt werden, um eine bestehende Anmeldeinformation zu finden, einschließlich Details zur Benutzeridentität, zur vertrauenswürdigen Partei, einer "Herausforderung" und optional dazu, wo die Anmeldeinformation zu suchen ist: zum Beispiel auf einem lokalen eingebauten Authenticator oder auf einem externen über USB, BLE und so weiter.
Die Web-App übergibt diese Informationen einem Authenticator, um die Anmeldeinformation zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die vom Server bereitgestellten Daten als Instanz von [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) enthält.

Die Spezifikation definiert nicht, wie die Informationen für die Anforderung einer Anmeldeinformation gesendet werden.
Ein praktischer Ansatz ist, dass der Server die Informationen in einer {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} einer [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) Instanz kapselt, die deren Struktur widerspiegelt, aber Puffer-Eigenschaften wie die `challenge` als {{Glossary("Base64", "base64url")}}-Zeichenketten kodiert.
Dieses Objekt kann in einen {{Glossary("JSON", "JSON")}}-String serialisiert, an die Web-App gesendet, deserialisiert und dann mit **`parseRequestOptionsFromJSON()`** in eine Instanz von [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions) konvertiert werden.

## Beispiele

Bei der Autorisierung eines bereits registrierten Benutzers stellt ein vertrauenswürdiger Server der Web-App Informationen zu den angeforderten Anmeldeinformationen, der vertrauenswürdigen Partei und einer Herausforderung bereit.
Der folgende Code definiert diese Informationen in der Form, die im [Parameter `options`](#options) oben beschrieben ist:

```js
const requestCredentialOptionsJSON = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
  rpId: "acme.com",
  allowCredentials: [
    {
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* … */]),
    },
  ],
  userVerification: "required",
};
```

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert und an die Web-App gesendet werden.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

Die Web-App kann den JSON-String zurück in ein `requestCredentialOptionsJSON` Objekt deserialisieren (nicht gezeigt).
Die **`parseRequestOptionsFromJSON()`** Methode wird verwendet, um dieses Objekt in die Form zu konvertieren, die in `navigator.credentials.get()` verwendet werden kann:

```js
// Convert options to form used by get()
const publicKey = PublicKeyCredential.parseRequestOptionsFromJSON(
  requestCredentialOptionsJSON, // JSON-type representation
);

navigator.credentials
  .get({ publicKey })
  .then((returnedCredentialInfo) => {
    // Handle the returned credential information here.
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
