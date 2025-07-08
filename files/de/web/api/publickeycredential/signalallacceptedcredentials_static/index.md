---
title: "PublicKeyCredential: `signalAllAcceptedCredentials()` statische Methode"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalAllAcceptedCredentials()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle signalisiert dem Authentifikator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server für einen bestimmten Benutzer noch verwaltet.

Dies ermöglicht es dem Authentifikator, Anmeldeinformationen zu aktualisieren und alle Credentials zu entfernen, die von der RP nicht mehr erkannt werden, wie z. B. solche für gelöschte Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn sich ein Benutzer bei der RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist - nach der Anmeldung oder wenn der Benutzer ein Credential löscht - da es sensible Informationen des Benutzers offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Anmeldeinformationen darstellt und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array von base64url-codierten Strings, die die [`IDs der Credentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellen, die noch gültig sind.
    - `rpId`
      - : Ein String, der die [`ID der RP`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.
    - `userId`
      - : Ein base64url-codierter String, der die [`ID des Benutzers`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, mit dem die Anmeldeinformationen in Verbindung stehen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `userId` oder irgendein Element von `allAcceptedCredentialIds` sind keine gültigen base64url-codierten Strings.

## Beschreibung

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über ein [entdeckbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [einen Passkey](https://passkeys.dev/)) nicht mit dem Server synchron sind. Dies tritt normalerweise auf, wenn der Benutzer ein Credential aus der RP-Webanwendung löscht, ohne seinen Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit entdeckbaren Anmeldeinformationen einzuloggen, wird ihm eine Auswahl von Credentials aus dem Authentifikator präsentiert, aus denen er wählen kann. Das ausgewählte Credential wird dann an die RP-Webanwendung zurückgeschickt, um sich damit anzumelden. Wählt der Benutzer ein Credential aus, das auf dem RP-Server gelöscht wurde, wird es nicht erkannt und der Login schlägt fehl. Dies führt zu Verwirrung bei den Benutzern, die erwarten, nur gültige Credentials angeboten zu bekommen.

Um dieses Problem zu mindern, sollte `signalAllAcceptedCredentials()` von der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Benutzer ein Credential löscht oder sich anmeldet, um dem Authentifikator mitzuteilen, welche Credentials für den gegebenen Benutzer noch gültig sind. Es liegt im Ermessen des Authentifikators, wie er mit diesen Informationen umgeht, aber die Erwartung ist, dass er seine Informationen mit der bereitgestellten Credential-Liste synchronisiert. Credentials, die nicht in der Liste erscheinen, sollten entfernt werden, damit dem Benutzer keine Credentials angeboten werden, die nicht in der Anmelde-UI existieren.

> [!WARNING]
> Seien Sie vorsichtig beim Aufruf von `signalAllAcceptedCredentials()` — alle in der Liste nicht enthaltenen gültigen Credentials sollen vom Authentifikator entfernt werden, was den Benutzer daran hindern wird, sich mit ihnen anzumelden. Eine leere Liste übergeben könnte alle Credentials des Benutzers entfernen. Einige Authentifikatoren unterstützen möglicherweise das Wiederherstellen von Credentials durch einen nachfolgenden Aufruf von `signalAllAcceptedCredentials()` mit den zuvor entfernten Credential-IDs, die in der Liste enthalten sind.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da es sensible Informationen des Benutzers offenlegt. Wenn der Benutzer nicht authentifiziert ist, weil er versucht hat, sich mit einem Credential anzumelden, das auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit dem nicht erkannten Credential aufrufen, damit der Authentifikator es löschen kann. Siehe [Methoden zur Synchronisierung entdeckbarer Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) für einen detaillierteren Vergleich.

## Beispiele

### Signalisierung der akzeptierten Credentials

In diesem Beispiel rufen wir die Methode `signalAllAcceptedCredentials()` auf und übergeben ihr die Details aller Anmeldeinformationen des Benutzers, einschließlich derjenigen, mit denen er sich gerade eingeloggt hat. Dadurch sollte der Authentifikator seine eigene Kopie der Anmeldeinformationen aktualisieren, damit sie mit der RP synchron bleiben.

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

Für weitere Codebeispiele siehe [Halte Passkeys konsistent mit Anmeldeinformationen auf Ihrem Server mit der Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Halte Passkeys konsistent mit Anmeldeinformationen auf Ihrem Server mit der Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
