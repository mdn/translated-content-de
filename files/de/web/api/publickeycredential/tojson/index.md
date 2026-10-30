---
title: "PublicKeyCredential: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die Methode **`toJSON()`** der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PublicKeyCredential`-Objekt repräsentiert.

Die Methode wird bei der {{Glossary("JSON", "JSON")}}-Serialisierung automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `PublicKeyCredential`-Objekt angetroffen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) {{optional_inline}}: nicht vorhanden, wenn der Wert `null` ist
- `clientExtensionResults`: ein JSON-serialisierbares Objekt, das die von [`getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegebenen Werte repräsentiert, wobei Pufferwerte als base64url-Zeichenfolgen codiert sind
- [`id`](/de/docs/Web/API/PublicKeyCredential/id)
- [`rawId`](/de/docs/Web/API/PublicKeyCredential/rawId): als {{Glossary("Base64", "base64url")}}-Zeichenfolge codiert
- [`response`](/de/docs/Web/API/PublicKeyCredential/response): ein JSON-serialisierbares Objekt, das den Wert von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) repräsentiert, wobei Pufferwerte als base64url-Zeichenfolgen codiert sind. Im Einzelnen:
  - Wenn es sich um eine [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) handelt, enthält es die folgenden Eigenschaften:
    - [`authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)
    - [`clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)
    - [`signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature)
    - [`userHandle`](/de/docs/Web/API/AuthenticatorAssertionResponse/userHandle) {{optional_inline}}: nicht vorhanden, wenn der Wert `null` ist
  - Wenn es sich um eine [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) handelt, enthält es die folgenden Eigenschaften:
    - [`attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)
    - `authenticatorData`: der von [`getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) zurückgegebene Wert
    - [`clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON)
    - `publicKey` {{optional_inline}}: der von [`getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) zurückgegebene Wert; entfällt, wenn er `null` ist
    - `publicKeyAlgorithm`: der von [`getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm) zurückgegebene Wert
    - `transports`: der von [`getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports) zurückgegebene Wert
- [`type`](/de/docs/Web/API/Credential/type)

Sofern nicht anders angegeben, wird der Wert jeder Eigenschaft unverändert übernommen.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

### toJSON() direkt aufrufen

Bei der Registrierung eines neuen Benutzers stellt der Server der Relying Party der Web-App Informationen über die erwarteten Anmeldedaten bereit.
Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf. Die Methode gibt ein Promise zurück, das mit den neuen Anmeldedaten (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const credential = await navigator.credentials.create({
  publicKey: createCredentialOptions,
});

const json = credential.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.id); // Same value as credential.id
```

### Als JSON-Zeichenfolge serialisieren

Die zurückgegebenen Anmeldedaten werden mit {{jsxref("JSON.stringify()")}} serialisiert, wodurch die Methode `toJSON()` automatisch aufgerufen wird. Die Web-App sendet die serialisierten Anmeldedaten zurück an den Server.

```js
const jsonString = JSON.stringify(credential);
console.log(jsonString);

const registrationURL = "https://example.com/registration";
const apiRegOptsResp = await fetch(registrationURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: jsonString,
});
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "authenticatorAttachment": "platform",
  "clientExtensionResults": {},
  "id": "...",
  "rawId": "...",
  "response": {
    "attestationObject": "...",
    "authenticatorData": "...",
    "clientDataJSON": "...",
    "publicKey": "...",
    "publicKeyAlgorithm": -7,
    "transports": ["internal"]
  },
  "type": "public-key"
}
```

Die base64url-codierten Werte sind zur besseren Lesbarkeit als `"..."` abgekürzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
