---
title: "AuthenticatorResponse: clientDataJSON-Eigenschaft"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
l10n:
  sourceCommit: aad1608e2f3cec373feaa9bbd8c11bbd00cc849a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`clientDataJSON`**-Eigenschaft des [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Interfaces speichert einen [JSON](/de/docs/Learn/JavaScript/Objects/JSON)-String in einem {{jsxref("ArrayBuffer")}}, der die Kundendaten darstellt, die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wurden. Diese Eigenschaft wird nur auf einem der Kindobjekte von `AuthenticatorResponse` zugegriffen, speziell [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) oder [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Instanzeigenschaften

Nachdem das `clientDataJSON`-Objekt von einem
`ArrayBuffer` in ein JavaScript-Objekt umgewandelt wurde, wird es folgende Eigenschaften haben:

- `challenge`

  - : Die {{Glossary("Base64", "base64url")}}-kodierte Version der kryptografischen Herausforderung, die vom Server der vertrauenden Partei gesendet wurde.
    Der ursprüngliche Wert wird als `challenge`-Option in
    [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) oder
    [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben.

- `crossOrigin` {{optional_inline}}

  - : Ein boolescher Wert. Wenn auf `true` gesetzt, bedeutet es, dass der aufrufende Kontext ein {{htmlelement("iframe")}} ist, das nicht dieselbe Herkunft wie seine Vorfahren-Frames hat.

- `origin`

  - : Die vollständig qualifizierte Herkunft der vertrauenden Partei, die vom
    Client/Browser an den Authenticator übergeben wurde. Wir sollten erwarten, dass die _ID der vertrauenden Partei_ ein Suffix dieses Werts ist.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}

  - : Ein Objekt, das den Status des [Token-Bindungsprotokolls](https://datatracker.ietf.org/doc/html/rfc8471) für die Kommunikation mit der vertrauenden Partei beschreibt. Es hat zwei Eigenschaften:

    - `status`: Ein String, der entweder `"supported"` ist, was anzeigt, dass der Client Token-Bindung unterstützt, aber keine Aushandlung mit der vertrauenden Partei stattfand, oder `"present"`, wenn Token-Bindung bereits verwendet wurde.
    - `id`: Ein String, der die {{Glossary("Base64", "base64url")}}-Kodierung der Token-Bindungs-ID ist, die für die Kommunikation verwendet wurde.

    Fehlt diese Eigenschaft, so würde dies anzeigen, dass der Client keine
    Token-Bindung unterstützt.

    > **Note:** `tokenBinding` ist seit Level 3 der Spezifikation veraltet, aber das Feld ist reserviert, damit es nicht für einen anderen Zweck wiederverwendet wird.

- `topOrigin` {{optional_inline}}

  - : Beinhaltet die vollständig qualifizierte Top-Level-Herkunft der vertrauenden Partei. Es wird nur gesetzt, wenn `crossOrigin` `true` ist.

- `type`
  - : Ein String, der entweder `"webauthn.get"` ist, wenn ein bestehender Berechtigungsnachweis abgerufen wird, oder `"webauthn.create"`, wenn ein neuer Berechtigungsnachweis erstellt wird.

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
