---
title: "PublicKeyCredential: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: dd49e9f6381aa1a35e9d582808f2fd1d4abfa813
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`** Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt eine {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob das Anmeldeinformation-Objekt durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user), oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn der Code der Web-App [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, sodass es zum vertrauenden Server gesendet werden kann, wenn ein Benutzer registriert oder authentifiziert wird.
Es ist nicht vorgesehen, dass diese Methode direkt im Code der Web-App aufgerufen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob das Anmeldeinformation-Objekt durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) bei der Registrierung oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) bei der Authentifizierung eines Benutzers zurückgegeben wurde. Die Werte und Typen der enthaltenen Eigenschaften sind dieselben wie für [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass {{Glossary("Base64", "base64url")}}-codierte Strings anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekteigenschaften sind:

- `id`
  - : Der Wert, der von [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) zurückgegeben wird.
- `rawId`
  - : Eine {{Glossary("Base64", "base64url")}}-codierte Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).
- `authenticatorAttachment` {{optional_inline}}
  - : Der Wert, der von [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) zurückgegeben wird.
- `type`
  - : Der String `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das {{Glossary("Base64", "base64url")}}-codierte Versionen der Werte enthält, die von [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegeben werden.
- `response`

  - : Das Antwort-Objekt hängt davon ab, ob die Anmeldeinformationen nach einer Registrierung oder einer Authentifizierung zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typ-Darstellung von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) sein, bei der Pufferwerte {{Glossary("Base64", "base64url")}} codiert wurden.

    - Bei der Authentifizierung eines Benutzers wird der zurückgegebene Wert eine JSON-Typ-Darstellung der [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) sein, bei der Pufferwerte {{Glossary("Base64", "base64url")}} codiert wurden.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist ungültig.

## Beispiele

Bei der Registrierung eines neuen Benutzers liefert ein vertrauender Server der Web-App Informationen über die erwarteten Anmeldeinformationen.
Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das mit den neuen Anmeldeinformationen (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert dann die zurückgegebenen Anmeldeinformationen mit `JSON.stringify()` (was wiederum `toJSON()` aufruft) und sendet sie zurück an den Server.

```js
const registration_url = "https://example.com/registration";
const apiRegOptsResp = await fetch(registration_url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCredentialInfo), //Calls newCredentialInfo.toJSON
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
