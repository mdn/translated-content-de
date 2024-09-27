---
title: "PublicKeyCredential: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`** Methode der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) gibt eine [JSON-Typdarstellung](/de/docs/Glossary/JSON_type_representation) eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob das Credential von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) oder von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn Web-App-Code [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, damit es zum Vertrauensdiensteanbieter-Server gesendet werden kann, wenn ein Benutzer registriert oder authentifiziert wird. Sie ist nicht dazu gedacht, direkt im Web-App-Code aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine [JSON-Typdarstellung](/de/docs/Glossary/JSON_type_representation) eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob das Credential bei der Registrierung von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wurde oder bei der Authentifizierung eines Benutzers von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get). Die Werte und Typen der enthaltenen Eigenschaften sind die gleichen wie für [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass [base64url](/de/docs/Glossary/Base64)-kodierte Strings anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekteigenschaften sind:

- `id`
  - : Der von [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) zurückgegebene Wert.
- `rawId`
  - : Eine [base64url](/de/docs/Glossary/Base64)-kodierte Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).
- `authenticatorAttachment` {{optional_inline}}
  - : Der von [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) zurückgegebene Wert.
- `type`
  - : Der String `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das [base64url](/de/docs/Glossary/Base64)-kodierte Versionen der Werte enthält, die von [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegeben werden.
- `response`

  - : Das Antwortobjekt hängt davon ab, ob die Credentials nach einer Registrierungs- oder Authentifizierungsoperation zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typdarstellung von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) sein, bei der Pufferwerte [base64url](/de/docs/Glossary/Base64) kodiert wurden.

    - Bei der Authentifizierung eines Benutzers wird der zurückgegebene Wert eine JSON-Typdarstellung von [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) sein, bei der Pufferwerte [base64url](/de/docs/Glossary/Base64) kodiert wurden.

## Beispiele

Bei der Registrierung eines neuen Benutzers wird der Vertrauensdiensteanbieter-Server der Web-App Informationen über die erwarteten Credentials zur Verfügung stellen. Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Promise zurückgibt, das mit dem neuen Credential (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert dann das zurückgegebene Credential mit `JSON.stringify()` (was wiederum `toJSON()` aufruft) und sendet es zurück an den Server.

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
