---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() statische Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: dd49e9f6381aa1a35e9d582808f2fd1d4abfa813
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`parseRequestOptionsFromJSON()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle konvertiert eine {{Glossary("JSON_type_representation", "JSON-Type-Repräsentation")}} in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

Die Methode ist eine Komfortfunktion zum Umwandeln von Informationen, die von einem vertrauenden Server einer Webanwendung bereitgestellt werden, um ein bestehendes Anmeldedatum anzufordern.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit der gleichen Struktur wie eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz, jedoch mit {{Glossary("Base64", "base64url")}}-codierten Zeichenfolgen anstelle von Puffer-Eigenschaften.

### Rückgabewert

Eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des `options`-Objekts nicht in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz konvertiert werden kann.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beschreibung

Der Web-Authentifizierungsprozess zum [Authentifizieren eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) beinhaltet, dass ein vertrauender Server der Webanwendung Informationen zur Verfügung stellt, die benötigt werden, um ein bestehendes Anmeldedatum zu finden. Dazu gehören Details über die Benutzeridentität, das vertrauende Unternehmen, eine "Challenge" und optional, wo das Anmeldedatum zu suchen ist: beispielsweise auf einem lokal integrierten Authentifikator oder auf einem externen über USB, BLE und so weiter.
Die Webanwendung übergibt diese Informationen an einen Authentifikator, um das Anmeldedatum zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die vom Server bereitgestellten Daten als [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz enthält.

Die Spezifikation definiert nicht, wie die Informationen zum Anfordern eines Anmeldedatums versendet werden.
Ein praktischer Ansatz besteht darin, dass der Server die Informationen in eine {{Glossary("JSON_type_representation", "JSON-Type-Repräsentation")}} einer [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz einkapselt, die deren Struktur widerspiegelt, aber Puffer-Eigenschaften wie die `challenge` als {{Glossary("Base64", "base64url")}}-Zeichenfolgen codiert. Dieses Objekt kann in einen {{Glossary("JSON", "JSON")}}-String serialisiert, an die Webanwendung gesendet und deserialisiert werden und dann mit **`parseRequestOptionsFromJSON()`** in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz umgewandelt werden.

## Beispiele

Beim Autorisieren eines bereits registrierten Benutzers liefert ein vertrauender Server der Webanwendung Informationen über die angeforderten Anmeldedaten, das vertrauende Unternehmen und eine Challenge. Der Code unten definiert diese Informationen in der im [`options`-Parameter](#options) oben beschriebenen Form:

```js
const requestCredentialOptionsJSON =  {
    challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
    rpId: "acme.com",
    allowCredentials: [{
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174, ...])
    }],
    userVerification: "required",
  }
```

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mithilfe von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert und an die Webanwendung gesendet werden.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

Die Webanwendung kann den JSON-String zurück in ein `requestCredentialOptionsJSON`-Objekt deserialisieren (nicht gezeigt). Die **`parseRequestOptionsFromJSON()`**-Methode wird verwendet, um dieses Objekt in die Form zu konvertieren, die in `navigator.credentials.get()` verwendet werden kann:

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
