---
title: "PublicKeyCredential: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`toJSON()`**-Methode der {{domxref("PublicKeyCredential")}}-Schnittstelle gibt eine {{glossary("JSON-Typ-Darstellung")}} eines {{domxref("PublicKeyCredential")}} zurück.

Die Eigenschaften des zurückgegebenen Objekts hängen davon ab, ob die Berechtigung von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) beim [Erstellen eines Schlüsselpaares und Registrieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user), oder von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) beim [Authentifizieren eines Benutzers](/de/docs/Web/API/Web_Authentication_API#authenticating_a_user) zurückgegeben wird.

Diese Methode wird automatisch aufgerufen, wenn Web-App-Code [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) aufruft, um eine {{domxref("PublicKeyCredential")}} zu serialisieren, damit sie an den Server der vertrauenden Partei gesendet werden kann, wenn ein Benutzer registriert oder authentifiziert wird.
Sie ist nicht dafür gedacht, direkt im Web-App-Code aufgerufen zu werden.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine {{glossary("JSON-Typ-Darstellung")}} eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts.

Die enthaltenen Eigenschaften hängen davon ab, ob die Berechtigung bei der Registrierung von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder bei der Authentifizierung eines Benutzers von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wurde.
Die Werte und Typen der enthaltenen Eigenschaften entsprechen denen für [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit der Ausnahme, dass [base64url](/de/docs/Glossary/Base64)-codierte Zeichenfolgen anstelle von Puffer-Eigenschaften verwendet werden.

Die Objekteigenschaften sind:

- `id`
  - : Der von {{domxref("PublicKeyCredential.id")}} zurückgegebene Wert.
- `rawId`
  - : Eine [base64url](/de/docs/Glossary/Base64)-codierte Version von {{domxref("PublicKeyCredential.rawId")}}.
- `authenticatorAttachment` {{optional_inline}}
  - : Der von {{domxref("PublicKeyCredential.authenticatorAttachment")}} zurückgegebene Wert.
- `type`
  - : Die Zeichenfolge `"public-key"`.
- `clientExtensionResults`
  - : Ein Array, das [base64url](/de/docs/Glossary/Base64)-codierte Versionen der von {{domxref("PublicKeyCredential.getClientExtensionResults()")}} zurückgegebenen Werte enthält.
- `response`

  - : Das Antwortobjekt hängt davon ab, ob die Berechtigungen nach einer Registrierung oder einer Authentifizierung zurückgegeben werden.

    - Bei der Registrierung eines neuen Benutzers wird `response` eine JSON-Typ-Darstellung von {{domxref("AuthenticatorAttestationResponse")}} sein, bei der Puffervariablen [base64url](/de/docs/Glossary/Base64) kodiert wurden.

    - Bei der Authentifizierung eines Benutzers ist der zurückgegebene Wert eine JSON-Typ-Darstellung von {{domxref("AuthenticatorAssertionResponse")}}, bei der Puffervariablen [base64url](/de/docs/Glossary/Base64) kodiert wurden.

## Beispiele

Bei der Registrierung eines neuen Benutzers wird ein vertrauender Server der Web-App Informationen über die erwarteten Berechtigungen zur Verfügung stellen.
Die Web-App ruft [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) mit den empfangenen Informationen (`createCredentialOptions` unten) auf, was ein Versprechen zurückgibt, das mit der neuen Berechtigung erfüllt wird (ein {{domxref("PublicKeyCredential")}}).

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

Die Web-App serialisiert dann die zurückgegebene Berechtigung mit `JSON.stringify()` (das wiederum `toJSON()` aufruft) und sendet sie zurück an den Server.

```js
const registration_url = "https://example.com/registration";
const apiRegOptsResp = await fetch(registration_url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCredentialInfo), //Ruft newCredentialInfo.toJSON auf
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
