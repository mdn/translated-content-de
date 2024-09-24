---
title: "AuthenticatorResponse: clientDataJSON-Eigenschaft"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
l10n:
  sourceCommit: aad1608e2f3cec373feaa9bbd8c11bbd00cc849a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`clientDataJSON`**-Eigenschaft der {{domxref("AuthenticatorResponse")}}-Schnittstelle speichert einen [JSON](/de/docs/Learn/JavaScript/Objects/JSON)-String in einem {{jsxref("ArrayBuffer")}}, der die Client-Daten darstellt, die an {{domxref("CredentialsContainer.create()", "navigator.credentials.create()")}} oder {{domxref("CredentialsContainer.get()", "navigator.credentials.get()")}} übergeben wurden. Diese Eigenschaft wird nur auf einem der Kindobjekte von `AuthenticatorResponse` verwendet, speziell {{domxref("AuthenticatorAttestationResponse")}} oder {{domxref("AuthenticatorAssertionResponse")}}.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Instanz-Eigenschaften

Nachdem das `clientDataJSON`-Objekt von einem `ArrayBuffer` in ein JavaScript-Objekt konvertiert wurde, hat es die folgenden Eigenschaften:

- `challenge`

  - : Die [base64url](/de/docs/Glossary/Base64)
    kodierte Version der kryptografischen Herausforderung, die vom Server der vertrauenden Partei gesendet wird.
    Der ursprüngliche Wert wird als `challenge`-Option in
    {{domxref("CredentialsContainer.get()")}} oder
    {{domxref("CredentialsContainer.create()")}} übergeben.

- `crossOrigin` {{optional_inline}}

  - : Ein Boolescher Wert. Wenn auf `true` gesetzt, bedeutet dies, dass der aufrufende Kontext ein {{htmlelement("iframe")}} ist, das nicht gleichherkunft mit seinen übergeordneten Frames ist.

- `origin`

  - : Der vollständig qualifizierte Ursprung der vertrauenden Partei, der vom Client/Browser dem Authenticator übergeben wurde. Wir sollten erwarten, dass die _ID der vertrauenden Partei_ ein Suffix dieses Wertes ist.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}

  - : Ein Objekt, das den Status des [Token-Bindungsprotokolls](https://datatracker.ietf.org/doc/html/rfc8471) für die Kommunikation mit der vertrauenden Partei beschreibt. Es hat zwei Eigenschaften:

    - `status`: Ein String, der entweder `"supported"` ist, was bedeutet, dass der Client Token-Bindung unterstützt, aber nicht mit der vertrauenden Partei verhandelt hat, oder `"present"`, wenn die Token-Bindung bereits verwendet wurde.
    - `id`: Ein String, der die [base64url](/de/docs/Glossary/Base64)
      Kodierung der Token-Bindungs-ID ist, die für die Kommunikation verwendet wurde.

    Sollte diese Eigenschaft fehlen, würde dies darauf hinweisen, dass der Client keine Token-Bindung unterstützt.

    > **Hinweis:** `tokenBinding` ist seit Level 3 der Spezifikation veraltet, aber das Feld ist reserviert, sodass es nicht für einen anderen Zweck wiederverwendet wird.

- `topOrigin` {{optional_inline}}

  - : Enthält den vollständig qualifizierten obersten Ursprung der vertrauenden Partei. Es wird nur gesetzt, wenn `crossOrigin` `true` ist.

- `type`
  - : Ein String, der entweder `"webauthn.get"` ist, wenn ein bestehendes Anmeldeinformation abgerufen wird, oder `"webauthn.create"`, wenn eine neue Anmeldeinformation erstellt wird.

## Beispiele

```js
function arrayBufferToStr(buf) {
  return String.fromCharCode.apply(null, new Uint8Array(buf));
}

// pk ist ein PublicKeyCredential, das das Ergebnis eines create()- oder get()-Versprechens ist
const clientDataStr = arrayBufferToStr(pk.response.clientDataJSON);
const clientDataObj = JSON.parse(clientDataStr);

console.log(clientDataObj.type); // "webauthn.create" oder "webauthn.get"
console.log(clientDataObj.challenge); // base64 kodierter String, der die ursprüngliche Herausforderung enthält
console.log(clientDataObj.origin); // das window.origin
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
