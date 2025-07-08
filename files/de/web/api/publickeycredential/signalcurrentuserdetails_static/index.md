---
title: "PublicKeyCredential: signalCurrentUserDetails() Static-Methode"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalCurrentUserDetails()`** Static-Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP)-Server aktualisiert hat.

Dies ermöglicht dem Authenticator, die Benutzerkontodetails zu aktualisieren, um sicherzustellen, dass sie mit denen der RP übereinstimmen. Sie sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach dem Anmelden oder wenn er die mit seinen Anmeldeinformationen auf der RP-Web-App verbundenen Metadaten ändert.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die aktualisierten Benutzerinformationen darstellt und die folgenden Eigenschaften enthält:
    - `displayName`
      - : Ein String, der den aktualisierten Benutzer [`displayName`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) darstellt.
    - `name`
      - : Ein String, der den aktualisierten Benutzer [`name`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) darstellt.
    - `rpId`
      - : Ein String, der die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-kodierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf die sich die Anmeldedaten beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die Informationen, die im Authenticator eines Benutzers über ein [erkennbares Anmeldedatum](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [ein Passkey](https://passkeys.dev/)) gespeichert sind, nicht mehr mit dem RP-Server synchron sind. Dies kann auftreten, wenn der Benutzer seinen Benutzernamen oder Anzeigenamen in der RP-Web-App aktualisiert, ohne den Authenticator zu aktualisieren.

Beim nächsten Anmeldeversuch mit einem erkennbaren Anmeldedatum wird das Anmeldedatum dem Benutzer mit dem alten Benutzernamen/Anzeigenamen in der entsprechenden Benutzeroberfläche präsentiert, was zu einer verwirrenden Benutzererfahrung führen kann.

Um dieses Problem zu vermeiden, sollte `signalCurrentUserDetails()` jedes Mal in der RP-Web-App aufgerufen werden, wenn ein Benutzer seine Kontodetails aktualisiert oder sich anmeldet, um dem Authenticator mitzuteilen, dass die Benutzerinformationen aktualisiert wurden. Es liegt am Authenticator, wie er diese Informationen verarbeitet, aber die Erwartung ist, dass er seine Benutzerinformationen mit dem bereitgestellten Update synchronisiert.

## Beispiele

### Signalisiert die aktuellen Benutzerdetails

In diesem Beispiel rufen wir die Methode `signalCurrentUserDetail()` auf und übergeben ihr die Details eines Anmeldedatums, das der Benutzer gerade auf der RP bearbeitet hat. Infolgedessen sollte der Authenticator seine eigene Kopie des Anmeldedatums aktualisieren, damit sie mit der RP synchron bleibt.

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

Für weitere Codebeispiele siehe [Passwörter mit Anmeldedaten auf Ihrem Server mit der Signal-API konsistent halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Passwörter mit Anmeldedaten auf Ihrem Server mit der Signal-API konsistent halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
