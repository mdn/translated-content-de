---
title: "PublicKeyCredential: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`**-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt eine [JSON-Typ-Darstellung](/de/docs/Glossary/JSON_type_representation) eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob die Berechtigung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user) oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) bei der [Authentifizierung eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) erhalten wurde.

Diese Methode wird automatisch aufgerufen, wenn Code einer Web-App [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, damit es beim Registrieren oder Authentifizieren eines Benutzers an den vertrauenden Server gesendet werden kann. Sie ist nicht dazu gedacht, direkt im Code einer Web-App aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine [JSON-Typ-Darstellung](/de/docs/Glossary/JSON_type_representation) eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob die Berechtigung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) bei der Registrierung oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim Authentifizieren eines Benutzers zurückgegeben wurde. Die Werte und Typen der enthaltenen Eigenschaften entsprechen denen von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass [base64url](/de/docs/Glossary/Base64)-codierte Strings anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekt-Eigenschaften sind:

- `id`
  - : Der Wert, der durch [`PublicKeyCredential.id`](/de/docs/Web/API/PublicKeyCredential/id) zurückgegeben wird.
- `rawId`
  - : Eine [base64url](/de/docs/Glossary/Base64)-codierte Version von [`PublicKeyCredential.rawId`](/de/docs/Web/API/PublicKeyCredential/rawId).
- `authenticatorAttachment` {{optional_inline}}
  - : Der Wert, der durch [`PublicKeyCredential.authenticatorAttachment`](/de/docs/Web/API/PublicKeyCredential/authenticatorAttachment) zurückgegeben wird.
- `type`
  - : Der String `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das [base64url](/de/docs/Glossary/Base64)-codierte Versionen der Werte enthält, die durch [`PublicKeyCredential.getClientExtensionResults()`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) zurückgegeben werden.
- `response`

  - : Das Antwort-Objekt hängt davon ab, ob die Berechtigungen nach einer Registrierung oder einem Authentifizierungsvorgang zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typ-Darstellung von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) sein, bei der Pufferwerte [base64url](/de/docs/Glossary/Base64) codiert wurden.

    - Bei der Authentifizierung eines Benutzers wird der zurückgegebene Wert eine JSON-Typ-Darstellung von [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) sein, bei der Pufferwerte [base64url](/de/docs/Glossary/Base64) codiert wurden.

## Beispiele

Bei der Registrierung eines neuen Benutzers wird ein vertrauender Server der Web-App Informationen über die erwarteten Berechtigungen bereitstellen. Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den erhaltenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das mit der neuen Berechtigung (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert dann die zurückgegebene Berechtigung mit `JSON.stringify()` (was wiederum `toJSON()` aufruft) und sendet sie zurück an den Server.

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
