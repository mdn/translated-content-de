---
title: "PublicKeyCredential: Statische Methode signalCurrentUserDetails()"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalCurrentUserDetails()`** der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem Server der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) aktualisiert hat.

Dadurch kann der Authenticator die Benutzerkontodaten aktualisieren, damit sie mit den bei der RP gespeicherten Daten übereinstimmen. Die Methode sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach der Anmeldung oder wenn er die Metadaten seiner Anmeldedaten in der Webanwendung der RP ändert.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameter

- `options`
  - : Ein Objekt mit den aktualisierten Benutzerinformationen, das die folgenden Eigenschaften enthält:
    - `displayName`
      - : Ein String, der den aktualisierten [`displayName`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) des Benutzers enthält.
    - `name`
      - : Ein String, der den aktualisierten [`name`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) des Benutzers enthält.
    - `rpId`
      - : Ein String, der die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) enthält, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-kodierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) enthält, zu dem die Anmeldedaten gehören.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen zurückgewiesen:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Domain der RP ist ungültig.
- {{jsxref("TypeError")}}
  - : `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Die Informationen, die im Authenticator eines Benutzers über eine [auffindbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (beispielsweise einen [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) gespeichert sind, können vom Stand auf dem Server abweichen. Das kann passieren, wenn der Benutzer seinen Benutzernamen oder Anzeigenamen in der Webanwendung der RP aktualisiert, ohne den Authenticator zu aktualisieren.

Wenn sich der Benutzer das nächste Mal mit einer auffindbaren Anmeldeinformation anmelden möchte, wird sie ihm in der entsprechenden Benutzeroberfläche weiterhin mit dem alten Benutzernamen oder Anzeigenamen angezeigt. Das kann verwirrend sein.

Um dies zu vermeiden, sollte `signalCurrentUserDetails()` in der Webanwendung der RP jedes Mal aufgerufen werden, wenn ein Benutzer seine Benutzerkontodaten aktualisiert oder sich anmeldet. So wird dem Authenticator mitgeteilt, dass die Benutzerinformationen aktualisiert wurden. Wie der Authenticator diese Informationen verarbeitet, bleibt ihm überlassen. Es wird jedoch erwartet, dass er seine Benutzerinformationen mit den übermittelten Änderungen synchronisiert.

## Beispiele

### Aktuelle Benutzerdaten signalisieren

In diesem Beispiel rufen wir die Methode `signalCurrentUserDetail()` auf und übergeben ihr die Details einer Anmeldeinformation, die der Benutzer gerade bei der RP bearbeitet hat. Daraufhin sollte der Authenticator seine eigene Kopie der Anmeldeinformation aktualisieren, damit sie mit den Daten der RP übereinstimmt.

```js
if (PublicKeyCredential.signalCurrentUserDetails) {
  await PublicKeyCredential.signalCurrentUserDetails({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    name: "a.new.email.address@example.com", // username
    displayName: "Maria Sanchez",
  });
} else {
  // Encourage the user to update their details in the authenticator
}
```

Weitere Codebeispiele finden Sie unter [Passkeys mit den Anmeldedaten auf Ihrem Server mithilfe der Signal API synchron halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Passkeys mit den Anmeldedaten auf Ihrem Server mithilfe der Signal API synchron halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
