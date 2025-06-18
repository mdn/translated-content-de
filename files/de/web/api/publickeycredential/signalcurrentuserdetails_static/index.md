---
title: "PublicKeyCredential: signalCurrentUserDetails() statische Methode"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalCurrentUserDetails()`**-statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeigenamen auf dem [relying party](https://de.wikipedia.org/wiki/Relying_party) (RP)-Server aktualisiert hat.

Dies ermöglicht dem Authenticator, die Benutzerdaten zu aktualisieren, um sicherzustellen, dass sie mit denen des RP synchron bleiben. Es sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach der Anmeldung oder wenn er die mit seinen Anmeldedaten auf der RP-Webanwendung verknüpften Metadaten ändert.

## Syntax

```js-nolint
signalCurrentUserDetails(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die aktualisierten Benutzerdaten darstellt und die folgenden Eigenschaften enthält:
    - `displayName`
      - : Ein String, der den aktualisierten Benutzer-[`displayName`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#displayname) darstellt.
    - `name`
      - : Ein String, der den aktualisierten Benutzer-[`name`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#name_2) darstellt.
    - `rpId`
      - : Ein String, der die [`id` des RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-kodierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf den sich die Anmeldedaten beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die Informationen, die in einem Authenticator eines Benutzers über ein [entdeckbares Anmeldedatum](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [einen Passkey](https://passkeys.dev/)) gespeichert sind, mit dem RP-Server nicht mehr synchron sind. Dies kann passieren, wenn der Benutzer seinen Benutzernamen oder Anzeigenamen in der RP-Webanwendung aktualisiert, ohne den Authenticator zu aktualisieren.

Das nächste Mal, wenn sie versuchen, sich mit einem entdeckbaren Anmeldedatum anzumelden, wird ihnen das Anmeldedatum dennoch mit dem alten Benutzernamen/Anzeigenamen in der entsprechenden Benutzeroberfläche angezeigt, was zu einer verwirrenden Benutzererfahrung führen kann.

Um dieses Problem zu vermeiden, sollte `signalCurrentUserDetails()` in der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Benutzer seine Kontodaten aktualisiert oder sich anmeldet, um dem Authenticator mitzuteilen, dass die Benutzerinformationen aktualisiert wurden. Es liegt in der Verantwortung des Authenticators, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Benutzerdaten mit dem bereitgestellten Update synchronisiert.

## Beispiele

### Signalisierung der aktuellen Benutzerdaten

In diesem Beispiel rufen wir die `signalCurrentUserDetail()`-Methode auf und übergeben die Details eines Anmeldedatums, das der Benutzer gerade auf der RP bearbeitet hat. Als Ergebnis sollte der Authenticator seine eigene Kopie des Anmeldedatums aktualisieren, sodass sie mit dem RP synchron bleibt.

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
- [Halten Sie Passkeys konsistent mit Anmeldedaten auf Ihrem Server mit der Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
