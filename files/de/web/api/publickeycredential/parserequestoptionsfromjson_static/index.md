---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() statische Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`parseRequestOptionsFromJSON()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces wandelt eine {{Glossary("JSON_type_representation", "JSON-Darstellungstyp")}} in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz um.

Diese Methode ist eine bequeme Funktion, um Informationen, die von einem verlassenden Server zur Verfügung gestellt werden, in einer Web-App zur Anforderung eines vorhandenen Berechtigungsnachweises zu konvertieren.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`
  - : Ein Objekt mit derselben Struktur wie eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz, jedoch mit {{Glossary("Base64", "base64url")}}-kodierten Zeichenfolgen anstelle von Buffer-Eigenschaften.

### Rückgabewert

Eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des `options`-Objekts nicht in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz konvertiert werden kann.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

Der Web-Authentifizierungsprozess zur [Authentifizierung eines (registrierten) Nutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) beinhaltet, dass ein vertrauender Server der Web-App die Informationen bereitstellt, die benötigt werden, um einen vorhandenen Berechtigungsnachweis zu finden, einschließlich Details über die Nutzeridentität, die vertrauende Partei, eine "Challenge" und optional, wo der Berechtigungsnachweis zu suchen ist: zum Beispiel auf einem lokalen integrierten Authenticator oder auf einem externen über USB, BLE usw.
Die Web-App übermittelt diese Informationen an einen Authenticator, um den Berechtigungsnachweis zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die vom Server bereitgestellten Daten als [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz enthält.

Die Spezifikation definiert nicht, wie die Informationen, die für die Anforderung eines Berechtigungsnachweises benötigt werden, gesendet werden.
Ein praktischer Ansatz besteht darin, dass der Server die Informationen in einer {{Glossary("JSON_type_representation", "JSON-Darstellungstyp")}} einer [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz kapselt, die seine Struktur widerspiegelt, aber Buffer-Eigenschaften wie die `challenge` als {{Glossary("Base64", "base64url")}}-Zeichenfolgen kodiert.
Dieses Objekt kann in eine {{Glossary("JSON", "JSON")}}-Zeichenfolge serialisiert, an die Web-App gesendet, deserialisiert und dann mit **`parseRequestOptionsFromJSON()`** in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz umgewandelt werden.

## Beispiele

Bei der Autorisierung eines bereits registrierten Nutzers wird ein vertrauender Server der Web-App Informationen über die angeforderten Berechtigungsnachweise, die vertrauende Partei und eine Challenge bereitstellen.
Der unten stehende Code definiert diese Informationen in der im [`options`-Parameter](#options) beschriebenen Form:

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

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mithilfe von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON konvertiert und an die Web-App gesendet werden.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

Die Web-App kann die JSON-Zeichenfolge zurück in ein `requestCredentialOptionsJSON`-Objekt deserialisieren (nicht gezeigt).
Die **`parseRequestOptionsFromJSON()`**-Methode wird verwendet, um dieses Objekt in die Form zu konvertieren, die in `navigator.credentials.get()` verwendet werden kann:

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
