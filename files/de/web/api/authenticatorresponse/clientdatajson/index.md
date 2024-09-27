---
title: "AuthenticatorResponse: clientDataJSON-Eigenschaft"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
l10n:
  sourceCommit: aad1608e2f3cec373feaa9bbd8c11bbd00cc849a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`clientDataJSON`**-Eigenschaft des [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Interfaces speichert einen [JSON](/de/docs/Learn/JavaScript/Objects/JSON)-String in einem
{{jsxref("ArrayBuffer")}}, der die vom Client übergebenen Daten darstellt, die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übermittelt wurden. Diese Eigenschaft wird nur auf einem der untergeordneten Objekte von `AuthenticatorResponse` zugegriffen, speziell auf [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) oder [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Instanz-Eigenschaften

Nachdem das `clientDataJSON`-Objekt von einem
`ArrayBuffer` in ein JavaScript-Objekt umgewandelt wurde, hat es die folgenden Eigenschaften:

- `challenge`

  - : Die [base64url](/de/docs/Glossary/Base64)
    kodierte Version der kryptografischen Herausforderung, die vom Server der vertrauenden Partei gesendet wurde.
    Der ursprüngliche Wert wird als `challenge`-Option in
    [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) oder
    [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben.

- `crossOrigin` {{optional_inline}}

  - : Ein Boolean. Wenn auf `true` gesetzt, bedeutet dies, dass der aufrufende Kontext ein {{htmlelement("iframe")}} ist, das sich nicht im gleichen Ursprung wie seine übergeordneten Frame befindet.

- `origin`

  - : Der vollständig qualifizierte Ursprung der vertrauenden Partei, der vom
    Client/Browser dem Authenticator übergeben wurde. Es sollte erwartet werden, dass die _ID der vertrauenden Partei_ ein Suffix dieses Wertes ist.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}

  - : Ein Objekt, das den Zustand des [Token-Binding-Protokolls](https://datatracker.ietf.org/doc/html/rfc8471) für die Kommunikation mit der vertrauenden Partei beschreibt. Es hat zwei Eigenschaften:

    - `status`: Ein String, der entweder `"supported"` ist, was anzeigt, dass der Client Token-Binding unterstützt, aber nicht mit der vertrauenden
      Partei ausgehandelt hat, oder `"present"`, wenn Token-Binding bereits verwendet wurde
    - `id`: Ein String, der die [base64url](/de/docs/Glossary/Base64)
      Kodierung der Token-Binding-ID ist, die für die Kommunikation verwendet wurde.

    Sollte diese Eigenschaft fehlen, würde dies bedeuten, dass der Client Token-Binding nicht unterstützt.

    > **Note:** `tokenBinding` ist ab Level 3 der Spezifikation veraltet, aber das Feld ist reserviert, damit es nicht für einen anderen Zweck wiederverwendet wird.

- `topOrigin` {{optional_inline}}

  - : Enthält den vollständig qualifizierten Top-Level-Ursprung der vertrauenden Partei. Es wird nur gesetzt, wenn `crossOrigin` auf `true` steht.

- `type`
  - : Ein String, der entweder `"webauthn.get"` ist, wenn ein bestehendes Anmeldedaten abgerufen wird, oder `"webauthn.create"`, wenn ein neues Anmeldedaten erstellt wird.

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
