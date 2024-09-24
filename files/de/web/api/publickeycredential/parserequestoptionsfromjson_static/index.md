---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() statische Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`parseRequestOptionsFromJSON()`** statische Methode des {{domxref("PublicKeyCredential")}} Interfaces wandelt eine {{glossary("JSON type representation")}} in eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz um.

Die Methode ist eine praktische Funktion zur Umwandlung von Informationen, die von einem vertrauenden Server an eine Webanwendung übermittelt werden, um ein bestehendes Anmeldedaten zu anzufordern.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit der gleichen Struktur wie eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz, aber mit [base64url](/de/docs/Glossary/Base64)-kodierten Zeichenfolgen, die anstelle von Buffer-Eigenschaften verwendet werden.

### Rückgabewert

Eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz.

### Ausnahmen

- `EncodingError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Teil des `options` Objekts nicht in eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz umgewandelt werden kann.

## Beschreibung

Der Web-Authentifizierungsprozess zur [Authentifizierung eines (registrierten) Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) umfasst, dass ein vertrauender Server der Webanwendung Informationen sendet, die benötigt werden, um ein bestehendes Anmeldedaten zu finden, einschließlich Details zur Benutzeridentität, der vertrauenden Partei, eines "Challenges" und optional, wo nach dem Anmeldedaten gesucht werden soll: beispielsweise auf einem lokalen eingebauten Authentifikator oder einem externen über USB, BLE und so weiter. Die Webanwendung überträgt diese Informationen an einen Authentifikator, um das Anmeldedaten zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die serverseitig bereitgestellten Daten als eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz enthält.

Die Spezifikation definiert nicht, wie die Informationen, die benötigt werden, um ein Anmeldedaten anzufordern, gesendet werden. Ein praktischer Ansatz ist, dass der Server die Informationen in einer {{glossary("JSON type representation")}} einer {{domxref("PublicKeyCredentialRequestOptions")}} Instanz kapselt, die ihre Struktur widerspiegelt, aber Buffer-Eigenschaften wie die `challenge` als [base64url](/de/docs/Glossary/Base64)-Zeichenfolgen kodiert. Dieses Objekt kann in einen [JSON](/de/docs/Glossary/JSON)-String serialisiert, an die Webanwendung gesendet und deserialisiert und dann mithilfe von **`parseRequestOptionsFromJSON()`** in eine {{domxref("PublicKeyCredentialRequestOptions")}} Instanz umgewandelt werden.

## Beispiele

Bei der Autorisierung eines bereits registrierten Benutzers wird ein vertrauender Server der Webanwendung Informationen über die angeforderten Anmeldedaten, die vertrauende Partei und eine Challenge liefern. Der folgende Code definiert diese Informationen in der oben beschriebenen Form des [`options` Parameters](#options):

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

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert und an die Webanwendung gesendet werden.

```js
JSON.stringify(requestCredentialOptionsJSON);
```

Die Webanwendung kann den JSON-String zurück in ein `requestCredentialOptionsJSON` Objekt deserialisieren (nicht gezeigt). Die **`parseRequestOptionsFromJSON()`** Methode wird verwendet, um dieses Objekt in die Form umzuwandeln, die in `navigator.credentials.get()` verwendet werden kann:

```js
// Konvertieren Sie Optionen in die Form, die von get() verwendet wird
const publicKey = PublicKeyCredential.parseRequestOptionsFromJSON(
  requestCredentialOptionsJSON, // JSON-typische Darstellung
);

navigator.credentials
  .get({ publicKey })
  .then((returnedCredentialInfo) => {
    // Hier die zurückgegebenen Anmeldeinformationen verarbeiten.
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
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
