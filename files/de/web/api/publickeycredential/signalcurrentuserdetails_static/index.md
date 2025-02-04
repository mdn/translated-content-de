---
title: "PublicKeyCredential: signalCurrentUserDetails() statische Methode"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die **`signalCurrentUserDetails()`** statische Methode der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP)-Server aktualisiert hat.

Dies ermöglicht es dem Authenticator, die Kontoangaben des Benutzers zu aktualisieren, um sicherzustellen, dass diese mit denen der RP synchron bleiben. Diese Methode sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach dem Anmelden oder wenn er die Metadaten, die mit seinen Anmeldeinformationen auf der RP-Webanwendung verknüpft sind, ändert.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die aktualisierten Benutzerinformationen darstellt und die folgenden Eigenschaften enthält:
    - `displayName`
      - : Ein String, der den aktualisierten Benutzer-`displayName` darstellt.
    - `name`
      - : Ein String, der den aktualisierten Benutzer-`name` darstellt.
    - `rpId`
      - : Ein String, der die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-kodierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf den sich die Anmeldeinformationen beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die Informationen, die in einem Benutzer-Authenticator über eine [auffindbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) gespeichert sind (zum Beispiel, [ein Passkey](https://passkeys.dev/)), sich mit dem RP-Server nicht synchronisieren. Dies kann vorkommen, wenn der Benutzer seinen Benutzernamen oder Anzeigenamen in der RP-Webanwendung aktualisiert, ohne den Authenticator zu aktualisieren.

Beim nächsten Anmeldeversuch mit einer auffindbaren Anmeldeinformation wird dem Benutzer die Anmeldeinformation weiterhin mit dem alten Benutzernamen/Anzeigenamen in der zugehörigen Benutzeroberfläche präsentiert, was zu einer verwirrenden Benutzererfahrung führen kann.

Um dieses Problem zu vermeiden, sollte `signalCurrentUserDetails()` auf der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Benutzer seine Kontodetails aktualisiert oder sich anmeldet, um dem Authenticator mitzuteilen, dass die Benutzerinformationen aktualisiert wurden. Es liegt im Ermessen des Authenticators, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Benutzerinformationen mit dem bereitgestellten Update synchronisiert.

## Beispiele

### Signalisierung der aktuellen Benutzerdetails

In diesem Beispiel rufen wir die Methode `signalCurrentUserDetail()` auf und übergeben die Details einer Anmeldeinformation, die der Benutzer gerade auf der RP bearbeitet hat. Infolgedessen sollte der Authenticator seine eigene Kopie der Anmeldeinformation aktualisieren, sodass sie mit der RP synchron bleibt.

```js
if (PublicKeyCredential.signalCurrentUserDetails) {
  await PublicKeyCredential.signalCurrentUserDetails({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    name: "a.new.email.address@example.com", // username
    displayName: "John Doe",
  });
} else {
  // Encourage the user to update their details in the authenticator
}
```

Für ein vollständiges Beispiel siehe [WebAuthn Signal API Demo](https://signal-api-demo.glitch.me/) (siehe [den Quellcode](https://glitch.com/edit/#!/signal-api-demo?path=site.js)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Passkeys mit Anmeldeinformationen auf Ihrem Server mit der Signal-API konsistent halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
