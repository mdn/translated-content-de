---
title: "PublicKeyCredential: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`**-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces gibt eine {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob die Berechtigung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create), beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user), oder durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn Web-Apps [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden, um ein [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) zu serialisieren, damit es beim Registrieren oder Authentifizieren eines Benutzers an den vertrauenden Server gesendet werden kann. Sie ist nicht dafür vorgesehen, direkt im Web-App-Code aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine {{Glossary("JSON_type_representation", "JSON-Typ-Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts.

Die eingeschlossenen Eigenschaften hängen davon ab, ob die Berechtigung bei der Registrierung durch [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder bei der Authentifizierung eines Benutzers durch [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wurde. Die Werte und Typen der enthaltenen Eigenschaften sind dieselben wie bei [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass {{Glossary("Base64", "base64url")}}-codierte Zeichenfolgen anstelle von Buffer-Eigenschaften verwendet werden.

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

  - : Das Antwort-Objekt hängt davon ab, ob die Berechtigungen nach einer Registrierung oder Authentifizierung zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers ist `response` eine JSON-Typ-Darstellung von [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse), bei der Buffer-Werte {{Glossary("Base64", "base64url")}} codiert wurden.

    - Bei der Authentifizierung eines Benutzers wird der zurückgegebene Wert eine JSON-Typ-Darstellung von [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) sein, bei der Buffer-Werte {{Glossary("Base64", "base64url")}} codiert wurden.

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.

## Beispiele

Bei der Registrierung eines neuen Benutzers wird ein vertrauender Server Informationen über die erwarteten Berechtigungen an die Web-App liefern. Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das mit den neuen Berechtigungen (einem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)) erfüllt wird.

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
