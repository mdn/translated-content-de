---
title: "PublicKeyCredential: `signalAllAcceptedCredentials()` statische Methode"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalAllAcceptedCredentials()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Schnittstelle signalisiert dem Authenticator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server noch für einen bestimmten Benutzer hält.

Dies ermöglicht es dem Authenticator, die Anmeldeinformationen zu aktualisieren und alle Anmeldeinformationen zu entfernen, die von der RP nicht mehr erkannt werden, wie z.B. für gelöschte Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn ein Benutzer sich bei der RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist — nach der Anmeldung oder Anmeldung oder wenn der Benutzer eine Anmeldeinformation löscht — da es sensible Informationen des Benutzers offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Anmeldeinformationen darstellt und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array von base64url-codierten Zeichenfolgen, das die [`id`s der Anmeldeinformationen](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) repräsentiert, die noch gültig sind.
    - `rpId`
      - : Eine Zeichenfolge, die die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, die das Signal gesendet hat.
    - `userId`
      - : Eine base64url-codierte Zeichenfolge, die die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) repräsentiert, auf die sich die Anmeldeinformationen beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `userId` oder eines der `allAcceptedCredentialIds`-Elemente sind keine gültigen base64url-codierten Zeichenfolgen.

## Beschreibung

Es ist möglich, dass die in einem Benutzer-Authenticator gespeicherten Informationen über eine [erkennbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [ein Passkey](https://passkeys.dev/)) nicht mehr mit dem Server synchron sind. Dies geschieht normalerweise, wenn der Benutzer eine Anmeldeinformation aus der RP-Web-App löscht, ohne den Authenticator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit erkennbaren Anmeldeinformationen anzumelden, wird ihm eine Auswahl von Anmeldeinformationen aus dem Authenticator präsentiert, aus denen er wählen kann, und die ausgewählte Anmeldeinformation wird an die RP-Web-App zurückgegeben, um sich damit anzumelden. Wenn der Benutzer eine Anmeldeinformation auswählt, die vom RP-Server gelöscht wurde, wird diese nicht erkannt und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu entschärfen, sollte `signalAllAcceptedCredentials()` von der RP-Web-App jedes Mal aufgerufen werden, wenn ein Benutzer eine Anmeldeinformation löscht oder sich anmeldet, um dem Authenticator mitzuteilen, welche Anmeldeinformationen für den jeweiligen Benutzer noch gültig sind. Es liegt im Ermessen des Authenticators, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Informationen mit der bereitgestellten Anmeldeliste synchronisiert. Anmeldeinformationen, die nicht in der Liste erscheinen, sollten entfernt werden, damit dem Benutzer keine Anmeldeinformationen angezeigt werden, die in der Anmelde-UI nicht existieren.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie `signalAllAcceptedCredentials()` aufrufen — alle gültigen Anmeldeinformationen, die nicht in der Liste enthalten sind, sollen vom Authenticator entfernt werden, was verhindert, dass der Benutzer sich mit ihnen anmeldet. Das Übergeben einer leeren Liste kann alle Anmeldeinformationen des Benutzers entfernen. Einige Authenticator unterstützen möglicherweise das Wiederherstellen von Anmeldeinformationen durch einen nachfolgenden Aufruf von `signalAllAcceptedCredentials()` mit den zuvor entfernten Anmelde-IDs in der Liste.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da es sensible Informationen des Benutzers offenlegt. Wenn der Benutzer nicht authentifiziert ist, weil er versucht hat, sich mit einer Anmeldeinformation anzumelden, die auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit der nicht erkannten Anmeldeinformation aufrufen, damit der Authenticator sie löschen kann. Siehe [Erkennbare Anmeldeinformationen-Synchronisationsmethoden](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) für einen detaillierteren Vergleich.

## Beispiele

### Signalisieren der akzeptierten Anmeldeinformationen

In diesem Beispiel rufen wir die Methode `signalAllAcceptedCredentials()` auf, indem wir ihr die Details aller zum Benutzer gehörenden Anmeldeinformationen übergeben, einschließlich derjenigen, mit denen sie sich gerade angemeldet haben. Infolgedessen sollte der Authenticator seine eigene Kopie der Anmeldeinformationen aktualisieren, damit sie mit der RP synchron bleiben.

```js
if (PublicKeyCredential.signalAllAcceptedCredentials) {
  await PublicKeyCredential.signalAllAcceptedCredentials({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    allAcceptedCredentialIds: [
      // A list of base64url-encoded credential IDs
      "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA",
      // …
    ],
  });
}
```

Für ein vollständiges Beispiel siehe [WebAuthn Signal API Demo](https://signal-api-demo.glitch.me/) (siehe [den Quellcode](https://glitch.com/edit/#!/signal-api-demo?path=site.js)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Halten Sie Passkeys konsistent mit Anmeldeinformationen auf Ihrem Server mit der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
