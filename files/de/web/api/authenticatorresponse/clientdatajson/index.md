---
title: "AuthenticatorResponse: clientDataJSON-Eigenschaft"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`clientDataJSON`**-Eigenschaft der [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Schnittstelle speichert einen [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON)-String in einem {{jsxref("ArrayBuffer")}}, der die Client-Daten darstellt, die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wurden. Diese Eigenschaft wird nur auf einem der Kindobjekte von `AuthenticatorResponse` zugegriffen, insbesondere [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) oder [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Instanz-Eigenschaften

Nachdem das `clientDataJSON`-Objekt von einem `ArrayBuffer` in ein JavaScript-Objekt konvertiert wurde, hat es die folgenden Eigenschaften:

- `challenge`

  - : Die {{Glossary("Base64", "base64url")}}-codierte Version der kryptografischen Herausforderung, die vom Server der vertrauenden Partei gesendet wurde.
    Der ursprüngliche Wert wird als `challenge`-Option in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) oder [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben.

- `crossOrigin` {{optional_inline}}

  - : Ein boolean. Wenn auf `true` gesetzt, bedeutet dies, dass der aufrufende Kontext ein {{htmlelement("iframe")}} ist, das nicht selben Ursprungs ist wie seine übergeordneten Frames.

- `origin`

  - : Der vollständig qualifizierte Ursprung der vertrauenden Partei, der dem Authenticator vom Client/Browser übergeben wurde. Es ist zu erwarten, dass die _ID der vertrauenden Partei_ eine Endung dieses Werts ist.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}

  - : Ein Objekt, das den Status des [Token-Bindungsprotokolls](https://datatracker.ietf.org/doc/html/rfc8471) für die Kommunikation mit der vertrauenden Partei beschreibt. Es hat zwei Eigenschaften:

    - `status`: Ein String, der entweder `"supported"` ist, was anzeigt, dass der Client die Token-Bindung unterstützt, aber nicht mit der vertrauenden Partei ausgehandelt hat, oder `"present"`, wenn die Token-Bindung bereits verwendet wurde.
    - `id`: Ein String, der die {{Glossary("Base64", "base64url")}}-Kodierung der Token-Bindungs-ID darstellt, die für die Kommunikation verwendet wurde.

    Sollte diese Eigenschaft fehlen, würde dies darauf hindeuten, dass der Client die Token-Bindung nicht unterstützt.

    > **Note:** `tokenBinding` ist seit Level 3 der Spezifikation veraltet, aber das Feld ist reserviert, damit es nicht für einen anderen Zweck wiederverwendet wird.

- `topOrigin` {{optional_inline}}

  - : Enthält den vollständig qualifizierten Top-Level-Ursprung der vertrauenden Partei. Es ist nur gesetzt, wenn `crossOrigin` `true` ist.

- `type`
  - : Ein String, der entweder `"webauthn.get"` ist, wenn ein bestehendes Anmeldeinformationen abgerufen wird, oder `"webauthn.create"`, wenn ein neues Anmeldeinformationen erstellt wird.

## Beispiele

```js
function arrayBufferToStr(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// pk is a PublicKeyCredential that is the result of a create() or get() Promise
const clientDataStr = arrayBufferToStr(pk.response.clientDataJSON);
const clientDataObj = JSON.parse(clientDataStr);

console.log(clientDataObj.type); // "webauthn.create" or "webauthn.get"
console.log(clientDataObj.challenge); // base64 encoded String containing the original challenge
console.log(clientDataObj.origin); // the window.origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
