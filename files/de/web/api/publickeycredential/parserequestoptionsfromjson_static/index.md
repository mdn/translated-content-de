---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() statische Methode"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`parseRequestOptionsFromJSON()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle konvertiert eine [JSON-Typ-Repräsentation](/de/docs/Glossary/JSON_type_representation) in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

Diese Methode ist eine Komfortfunktion zum Konvertieren von Informationen, die von einem vertrauenden Server an eine Web-App übermittelt werden, um ein bestehendes Anmeldeinformationen anzufordern.

## Syntax

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### Parameter

- `options`

  - : Ein Objekt mit derselben Struktur wie eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz, jedoch mit [base64url](/de/docs/Glossary/Base64)-codierten Zeichenfolgen anstelle von Buffer-Eigenschaften.

### Rückgabewert

Eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz.

### Ausnahmen

- `EncodingError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des `options`-Objekts nicht in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz konvertiert werden kann.

## Beschreibung

Der Web Authentication-Prozess zur [Authentifizierung eines (registrierten) Nutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) umfasst, dass ein vertrauender Server die Web-App mit Informationen beliefert, die benötigt werden, um ein bestehendes Anmeldeinformationen zu finden, einschließlich Details zur Benutzeridentität, die vertrauende Partei, eine "Herausforderung" und optional, wo Anmeldeinformationen gesucht werden sollen: zum Beispiel auf einem eingebauten lokalen Authentifikator oder auf einem externen über USB, BLE und so weiter.
Die Web-App überträgt diese Informationen an einen Authentifikator, um die Anmeldeinformationen zu finden, indem sie [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einem Argument aufruft, das die vom Server bereitgestellten Daten als [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz enthält.

Die Spezifikation definiert nicht, wie die zur Anforderung von Anmeldeinformationen benötigten Informationen gesendet werden.
Ein praktischer Ansatz besteht darin, dass der Server die Informationen in einer [JSON-Typ-Repräsentation](/de/docs/Glossary/JSON_type_representation) einer [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz kapselt, die ihre Struktur widerspiegelt, aber Buffer-Eigenschaften wie die `challenge` als [base64url](/de/docs/Glossary/Base64)-Zeichenfolgen codiert.
Dieses Objekt kann in eine [JSON](/de/docs/Glossary/JSON)-Zeichenfolge serialisiert, an die Web-App gesendet und deserialisiert und dann mit **`parseRequestOptionsFromJSON()`** in eine [`PublicKeyCredentialRequestOptions`](/de/docs/Web/API/PublicKeyCredentialRequestOptions)-Instanz konvertiert werden.

## Beispiele

Bei der Autorisierung eines bereits registrierten Nutzers liefert ein vertrauender Server der Web-App Informationen über die angeforderten Anmeldeinformationen, die vertrauende Partei und eine Herausforderung.
Der untenstehende Code definiert diese Informationen in der im Abschnitt [`options`-Parameter](#options) beschriebenen Form:

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

Da dieses Objekt nur JSON-Datentypen verwendet, kann es mit [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert und an die Web-App gesendet werden.

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
