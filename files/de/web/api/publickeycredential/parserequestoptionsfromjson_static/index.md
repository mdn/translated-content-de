---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() statische Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`parseRequestOptionsFromJSON()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces konvertiert eine {{Glossary("JSON_type_representation", "JSON Typdarstellung")}} in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

Die Methode ist eine praktische Funktion, um Informationen, die von einem vertrauenswürdigen Server an eine Webanwendung bereitgestellt werden, in Anfrage zu einer vorhandenen Berechtigung umzuwandeln.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit derselben Struktur wie eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz, jedoch mit {{Glossary("Base64", "base64url")}}-codierten Zeichenfolgen anstelle von Puffer-Eigenschaften.

### Rückgabewert

Eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des `options`-Objekts nicht in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz umgewandelt werden kann.

## Beschreibung

Der Web-Authentifizierungsprozess zur [Authentifizierung eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) beinhaltet, dass ein vertrauenswürdiger Server der Webanwendung die Informationen sendet, die benötigt werden, um eine vorhandene Berechtigung zu finden, einschließlich Angaben zur Benutzeridentität, der vertrauenswürdigen Partei, einer „Challenge“ und optional, wo die Berechtigung zu suchen ist: beispielsweise auf einem lokalen integrierten Authentifikator oder auf einem externen über USB, BLE usw.
Die Webanwendung übergibt diese Informationen an einen Authentifikator, um die Berechtigung zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die vom Server bereitgestellten Daten als [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz enthält.

Die Spezifikation definiert nicht, wie die Informationen, die für die Anforderung einer Berechtigung benötigt werden, gesendet werden.
Ein praktischer Ansatz ist, dass der Server die Informationen in einer {{Glossary("JSON_type_representation", "JSON Typdarstellung")}} einer [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz kapselt, die deren Struktur widerspiegelt, jedoch die Puffer-Eigenschaften wie die `challenge` als {{Glossary("Base64", "base64url")}}-Zeichenfolgen codiert.
Dieses Objekt kann in eine {{Glossary("JSON", "JSON")}}-Zeichenfolge serialisiert, an die Webanwendung gesendet und deserialisiert werden, und dann mithilfe von **`parseRequestOptionsFromJSON()`** in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz umgewandelt werden.

## Beispiele

Beim Autorisieren eines bereits registrierten Benutzers wird ein vertrauenswürdiger Server der Webanwendung Informationen über die angeforderten Berechtigungen, die vertrauenswürdige Partei und eine Challenge bereitstellen.
Der folgende Code definiert diese Informationen in der im [`options`-Parameter](#options) beschriebenen Form:

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

Da dieses Objekt nur JSON-Datentypen verwendet, kann es unter Verwendung von [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert und an die Webanwendung gesendet werden.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

Die Webanwendung kann die JSON-Zeichenfolge zurück in ein `requestCredentialOptionsJSON`-Objekt deserialisieren (nicht gezeigt).
Die Methode **`parseRequestOptionsFromJSON()`** wird verwendet, um dieses Objekt in die Form zu konvertieren, die in `navigator.credentials.get()` verwendet werden kann:

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
