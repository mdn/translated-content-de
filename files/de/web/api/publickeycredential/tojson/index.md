---
title: "PublicKeyCredential: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`**-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt eine {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentation")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob die Berechtigung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn Web-App-Code [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, damit es an den Server der vertrauenden Partei gesendet werden kann, wenn ein Benutzer registriert oder authentifiziert wird. Sie ist nicht dazu gedacht, direkt im Web-App-Code aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine {{Glossary("JSON_type_representation", "JSON-Typ-Repräsentation")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob die Berechtigung bei der Registrierung von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder beim Authentifizieren eines Benutzers von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wurde. Die Werte und Typen der enthaltenen Eigenschaften sind dieselben wie bei [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass {{Glossary("Base64", "base64url")}}-kodierte Zeichenfolgen anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekt-Eigenschaften sind:

- `id`
  - : Der von [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) zurückgegebene Wert.
- `rawId`
  - : Eine {{Glossary("Base64", "base64url")}}-kodierte Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).
- `authenticatorAttachment` {{optional_inline}}
  - : Der von [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) zurückgegebene Wert.
- `type`
  - : Der String `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das {{Glossary("Base64", "base64url")}}-kodierte Versionen der von [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegebenen Werte enthält.
- `response`

  - : Das Antwortobjekt hängt davon ab, ob die Berechtigungen nach einem Registrierungs- oder Authentifizierungsvorgang zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typ-Repräsentation von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) sein, bei der Pufferwerte {{Glossary("Base64", "base64url")}} kodiert wurden.

    - Bei der Authentifizierung eines Benutzers wird der zurückgegebene Wert eine JSON-Typ-Repräsentation von [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) sein, bei der Pufferwerte {{Glossary("Base64", "base64url")}} kodiert wurden.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

Beim Registrieren eines neuen Benutzers wird ein Server der vertrauenden Partei der Web-App Informationen zu den erwarteten Anmeldeinformationen bereitstellen. Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das sich mit der neuen Berechtigung (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt.

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert dann die zurückgegebene Berechtigung mithilfe von `JSON.stringify()` (welches wiederum `toJSON()` aufruft) und sendet sie zurück an den Server.

```js
const registration_url = "https://example.com/registration";
const apiRegOptsResp = await fetch(registration_url, {
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
