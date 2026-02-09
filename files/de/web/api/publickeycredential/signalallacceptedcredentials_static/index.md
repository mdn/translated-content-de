---
title: "PublicKeyCredential: signalAllAcceptedCredentials() statische Methode"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalAllAcceptedCredentials()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authentifikator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server noch für einen bestimmten Benutzer besitzt.

Dies ermöglicht es dem Authentifikator, Credential-Informationen zu aktualisieren und alle Credentials zu entfernen, die vom RP nicht mehr erkannt werden, wie z. B. solche für gelöschte Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn sich ein Benutzer beim RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist - nach Anmeldung oder Sign-in oder wenn der Benutzer ein Credential löscht -, da sie sensible Informationen des Benutzers offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Credentials repräsentiert und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array von Base64url-kodierten Strings, die die [`IDs der Credentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellen, die noch gültig sind.
    - `rpId`
      - : Ein String, der die [`ID des RP`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, das das Signal gesendet hat.
    - `userId`
      - : Ein Base64url-kodierter String, der die [`ID des Benutzers`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) repräsentiert, auf den sich die Credentials beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `userId` oder eines der `allAcceptedCredentialIds`-Elemente sind keine gültigen Base64url-kodierten Strings.

## Beschreibung

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über ein [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (zum Beispiel einen [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) nicht mehr mit dem Server synchron sind. Dies passiert üblicherweise, wenn der Benutzer ein Credential aus der RP-Webanwendung löscht, ohne den Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit entdeckbaren Credentials anzumelden, wird ihm eine Auswahl von Credentials aus dem Authentifikator präsentiert, aus denen er wählen kann, und das ausgewählte Credential wird an die RP-Webanwendung zurückgegeben, um sich damit anzumelden. Wenn der Benutzer ein Credential auswählt, das vom RP-Server gelöscht wurde, wird es nicht erkannt und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Credentials angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu vermeiden, sollte `signalAllAcceptedCredentials()` jedes Mal von der RP-Webanwendung aufgerufen werden, wenn ein Benutzer ein Credential löscht oder sich anmeldet, um dem Authentifikator mitzuteilen, welche Credentials noch für den gegebenen Benutzer gültig sind. Es liegt am Authentifikator, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Informationen mit der bereitgestellten Liste der Credentials synchronisiert. Credentials, die nicht in der Liste erscheinen, sollten entfernt werden, damit dem Benutzer keine Credentials angeboten werden, die in der Anmelde-UI nicht existieren.

> [!WARNING]
> Seien Sie vorsichtig beim Aufrufen von `signalAllAcceptedCredentials()` — alle gültigen Credentials, die nicht in der Liste enthalten sind, sollen vom Authentifikator entfernt werden, was den Benutzer daran hindert, sich mit ihnen anzumelden. Das Übergeben einer leeren Liste kann alle Credentials des Benutzers entfernen. Einige Authentifikatoren könnten das Wiederherstellen von Credentials unterstützen, indem `signalAllAcceptedCredentials()` mit den zuvor entfernten Credential-IDs in der Liste erneut aufgerufen wird.

`signalAllAcceptedCredentials()` sollte _nur_ dann aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da es sensible Informationen des Benutzers offenlegt. Wenn der Benutzer nicht authentifiziert ist, weil er versucht hat, sich mit einem Credential anzumelden, das auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit dem nicht erkannten Credential aufrufen, damit der Authentifikator es löschen kann. Siehe [Entdeckbare Credential-Synchronisierungsmethoden](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) für einen detaillierteren Vergleich.

## Beispiele

### Signalisierung der akzeptierten Credentials

In diesem Beispiel rufen wir die Methode `signalAllAcceptedCredentials()` auf und übergeben ihr die Details aller zum Benutzer gehörenden Credentials, einschließlich derjenigen, mit denen er sich gerade angemeldet hat. Infolgedessen sollte der Authentifikator seine eigene Kopie der Credentials aktualisieren, damit sie mit dem RP synchron bleiben.

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

Für weitere Code-Beispiele siehe [Passkeys auf Ihrem Server mit den Credentials im Einklang halten mittels der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Passkeys auf Ihrem Server mit den Credentials im Einklang halten mittels der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
