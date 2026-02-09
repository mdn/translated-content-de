---
title: "PublicKeyCredential: signalCurrentUserDetails() statische Methode"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalCurrentUserDetails()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authentifikator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem [relying party (RP)](https://en.wikipedia.org/wiki/Relying_party)-Server aktualisiert hat.

Dies ermöglicht es dem Authentifikator, Benutzerkontodaten zu aktualisieren, um sicherzustellen, dass sie mit denen der RP synchron bleiben. Es sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach dem Einloggen oder wenn er die mit seinen Anmeldeinformationen auf der RP-Webanwendung verbundenen Metadaten ändert.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die aktualisierten Benutzerinformationen darstellt und die folgenden Eigenschaften enthält:
    - `displayName`
      - : Ein String, der den aktualisierten Benutzer-[`displayName`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) darstellt.
    - `name`
      - : Ein String, der den aktualisierten Benutzer-[`name`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) darstellt.
    - `rpId`
      - : Ein String, der die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-kodierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf den sich die Anmeldeinformationen beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die in einem Benutzerauthentifikator gespeicherten Informationen zu einem [auffindbaren Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (z. B. ein [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) nicht mehr mit dem Server übereinstimmen. Dies kann auftreten, wenn der Benutzer seinen Benutzernamen oder Anzeigenamen in der RP-Webanwendung aktualisiert, ohne den Authentifikator zu aktualisieren.

Das nächste Mal, wenn der Benutzer versucht, sich mit einem auffindbaren Anmeldedatum anzumelden, wird ihm das Anmeldedatum immer noch mit dem alten Benutzernamen/Anzeigenamen in der entsprechenden Benutzeroberfläche angezeigt, was zu einer verwirrenden Benutzererfahrung führen kann.

Um dieses Problem zu vermeiden, sollte `signalCurrentUserDetails()` auf der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Benutzer seine Kontodaten aktualisiert oder sich anmeldet, um dem Authentifikator mitzuteilen, dass die Benutzerinformationen aktualisiert wurden. Es liegt am Authentifikator, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Benutzerinformationen mit dem bereitgestellten Update synchronisiert.

## Beispiele

### Signalisieren der aktuellen Benutzerdetails

In diesem Beispiel rufen wir die Methode `signalCurrentUserDetail()` auf und übergeben die Details eines Anmeldedatums, das der Benutzer gerade auf der RP bearbeitet hat. Infolgedessen sollte der Authentifikator seine eigene Kopie des Anmeldedatums aktualisieren, damit es mit der RP synchron bleibt.

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

Für weitere Codebeispiele siehe [Halten Sie Passkeys mit Anmeldeinformationen auf Ihrem Server konsistent mit der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Halten Sie Passkeys mit Anmeldeinformationen auf Ihrem Server konsistent mit der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
