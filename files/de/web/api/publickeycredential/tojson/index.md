---
title: "PublicKeyCredential: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`** Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Interfaces gibt eine {{Glossary("JSON_type_representation", "JSON-Typ Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob die Referenz durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn der Code einer Web-App [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, damit es an den vertrauenden Server gesendet werden kann, wenn ein Benutzer registriert oder authentifiziert wird. Sie ist nicht dafür gedacht, direkt im Code einer Web-App aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine {{Glossary("JSON_type_representation", "JSON-Typ Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob die Referenz bei der Registrierung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder beim Authentifizieren eines Benutzers durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wurde. Die Werte und Typen der enthaltenen Eigenschaften sind dieselben wie für [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass {{Glossary("Base64", "base64url")}}-codierte Strings anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekt-Eigenschaften sind:

- `id`
  - : Der Wert, der von [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) zurückgegeben wird.
- `rawId`
  - : Eine {{Glossary("Base64", "base64url")}}-codierte Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).
- `authenticatorAttachment` {{optional_inline}}
  - : Der Wert, der von [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) zurückgegeben wird.
- `type`
  - : Der String `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das {{Glossary("Base64", "base64url")}}-codierte Versionen der von [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegebenen Werte enthält.
- `response`
  - : Das `response` Eigenschaftsobjekt hängt davon ab, ob die Referenzen nach einer Registrierung oder einem Authentifizierungsvorgang zurückgegeben werden.
    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typ Darstellung von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) sein, bei der Pufferwerte {{Glossary("Base64", "base64url")}} codiert wurden.

    - Bei der Authentifizierung eines Benutzers ist der zurückgegebene Wert eine JSON-Typ Darstellung von [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse), bei der Pufferwerte {{Glossary("Base64", "base64url")}} codiert wurden.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beispiele

Bei der Registrierung eines neuen Benutzers stellt ein vertrauender Server Informationen über die erwarteten Referenzen zur Verfügung, die an die Web-App übermittelt werden.
Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das mit der neuen Referenz (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert anschließend die zurückgegebene Referenz mit `JSON.stringify()` (was wiederum `toJSON()` aufruft) und sendet sie zurück an den Server.

```js
const registrationURL = "https://example.com/registration";
const apiRegOptsResp = await fetch(registrationURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCredentialInfo), // Calls newCredentialInfo.toJSON
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static)
- [`PublicKeyCredential.parseRequestOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static)
