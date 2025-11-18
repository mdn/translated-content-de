---
title: "AuthenticatorResponse: clientDataJSON-Eigenschaft"
short-title: clientDataJSON
slug: Web/API/AuthenticatorResponse/clientDataJSON
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`clientDataJSON`**-Eigenschaft der [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)-Schnittstelle speichert einen [JSON](/de/docs/Learn_web_development/Core/Scripting/JSON)-String in einem {{jsxref("ArrayBuffer")}}, der die Client-Daten darstellt, die an [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) oder [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wurden. Diese Eigenschaft wird nur in einem der Kindobjekte von `AuthenticatorResponse` aufgerufen, insbesondere in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) oder [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse).

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Instanzeigenschaften

Nachdem das `clientDataJSON`-Objekt von einem `ArrayBuffer` in ein JavaScript-Objekt umgewandelt wurde, wird es die folgenden Eigenschaften haben:

- `challenge`
  - : Die {{Glossary("Base64", "base64url")}}-kodierte Version der kryptografischen Herausforderung, die vom Server der vertrauenden Partei gesendet wurde. Der Originalwert wird als `challenge`-Option in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) oder [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben.

- `crossOrigin` {{optional_inline}}
  - : Ein boolescher Wert. Wenn auf `true` gesetzt, bedeutet dies, dass der aufrufende Kontext ein {{htmlelement("iframe")}} ist, das nicht denselben Ursprung wie seine übergeordneten Frames hat.

- `origin`
  - : Der vollständig qualifizierte Ursprung der vertrauenden Partei, der vom Client/Browser dem Authentifikator bereitgestellt wurde. Es sollte erwartet werden, dass die _ID der vertrauenden Partei_ ein Suffix dieses Wertes ist.

- `tokenBinding` {{optional_inline}} {{deprecated_inline}}
  - : Ein Objekt, das den Status des [Token-Binding-Protokolls](https://datatracker.ietf.org/doc/html/rfc8471) für die Kommunikation mit der vertrauenden Partei beschreibt. Es hat zwei Eigenschaften:
    - `status`: Ein String, der entweder `"supported"` ist und anzeigt, dass der Client Token-Binding unterstützt, jedoch nicht mit der vertrauenden Partei verhandelt hat, oder `"present"`, wenn Token-Binding bereits verwendet wurde.
    - `id`: Ein String, der die {{Glossary("Base64", "base64url")}}-Kodierung der Token-Binding-ID ist, die für die Kommunikation verwendet wurde.

    Sollte diese Eigenschaft fehlen, würde dies darauf hindeuten, dass der Client kein Token-Binding unterstützt.

    > [!NOTE] > `tokenBinding` ist seit Level 3 der Spezifikation veraltet, aber das Feld ist reserviert, damit es nicht für einen anderen Zweck wiederverwendet wird.

- `topOrigin` {{optional_inline}}
  - : Enthält den vollständig qualifizierten Ursprungswert der obersten Ebene der vertrauenden Partei. Er wird nur gesetzt, wenn `crossOrigin` `true` ist.

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
