---
title: "PublicKeyCredential: signalCurrentUserDetails() statische Methode"
short-title: signalCurrentUserDetails()
slug: Web/API/PublicKeyCredential/signalCurrentUserDetails_static
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalCurrentUserDetails()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle signalisiert dem Authenticator, dass ein bestimmter Benutzer seinen Benutzernamen und/oder Anzeige-Namen auf dem [relying party](https://en.wikipedia.org/wiki/Relying_party) (RP)-Server aktualisiert hat.

Dies ermöglicht dem Authenticator, die Benutzerkontodetails zu aktualisieren, um sicherzustellen, dass sie mit denen des RP synchron bleiben. Sie sollte nur verwendet werden, wenn der aktuelle Benutzer authentifiziert ist – nach dem Anmelden oder wenn er die Metadaten ändert, die mit seinen Anmeldedaten in der RP-Webanwendung verknüpft sind.

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
      - : Ein base64url-codierter String, der die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf den sich die Anmeldedaten beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die im Authenticator eines Benutzers gespeicherten Informationen über eine [entdeckbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel, [einen Passkey](https://passkeys.dev/)) nicht mehr mit dem RP-Server synchron sind. Dies kann passieren, wenn der Benutzer seinen Benutzernamen oder Anzeige-Namen in der RP-Webanwendung aktualisiert, ohne den Authenticator zu aktualisieren.

Beim nächsten Anmeldeversuch mit einer entdeckbaren Anmeldeinformation wird dem Benutzer die Anmeldeinformation weiterhin mit dem alten Benutzernamen/Anzeige-Namen in der entsprechenden Benutzeroberfläche präsentiert, was zu einer verwirrenden Benutzererfahrung führen kann.

Um dieses Problem zu vermeiden, sollte `signalCurrentUserDetails()` in der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Benutzer seine Kontodaten aktualisiert oder sich anmeldet, um dem Authenticator mitzuteilen, dass die Benutzerinformationen aktualisiert wurden. Es liegt an dem Authenticator, wie er mit dieser Information umgeht, aber die Erwartung ist, dass er seine Benutzerinformationen mit dem bereitgestellten Update synchronisiert.

## Beispiele

### Signalisierung der aktuellen Benutzerdetails

In diesem Beispiel rufen wir die Methode `signalCurrentUserDetail()` auf und übergeben ihr die Details eines Anmeldedatensatzes, den der Benutzer gerade auf der RP bearbeitet hat. Infolgedessen soll der Authenticator seine eigene Kopie des Anmeldedatensatzes aktualisieren, damit er mit der RP synchron bleibt.

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

Für ein vollständiges Beispiel siehe [WebAuthn Signal API Demo](https://signal-api-demo.glitch.me/) (siehe [den Quellcode](https://glitch.com/edit/#!/signal-api-demo?path=site.js)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
