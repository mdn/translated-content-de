---
title: "PublicKeyCredential: signalAllAcceptedCredentials() statische Methode"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die statische Methode **`signalAllAcceptedCredentials()`** des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authentifikator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [relying party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server für einen bestimmten Benutzer noch besitzt.

Dies ermöglicht dem Authentifikator, Anmeldeinformationen zu aktualisieren, indem alle Anmeldeinformationen entfernt werden, die vom RP nicht mehr erkannt werden, wie z.B. die für gelöschte Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn sich ein Benutzer beim RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist — nach Registrierung oder Anmeldung, oder wenn der Benutzer ein Anmeldedaten-Element löscht — da es sensible Informationen des Benutzers offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Anmeldedaten darstellt und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array von base64url-codierten Strings, die die [`IDs der Anmeldedaten](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellen, die noch gültig sind.
    - `rpId`
      - : Ein String, der die [`ID des RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, das das Signal gesendet hat.
    - `userId`
      - : Ein base64url-codierter String, der die [`ID des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) darstellt, auf den sich die Anmeldedaten beziehen.

### Rückgabewert

Ein {{jsxref("Promise")}} das zu {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `userId` oder Elemente der `allAcceptedCredentialIds` sind keine gültigen base64url-codierten Strings.

## Beschreibung

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über ein [erkennbares Anmeldeinformationen](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel, [ein Passkey](https://passkeys.dev/)) nicht mit dem Server synchron sind. Dies tritt normalerweise auf, wenn der Benutzer eine Anmeldeinformation aus der RP-Web-App löscht, ohne den Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit erkennbaren Anmeldedaten einzuloggen, wird ihm eine Reihe von Anmeldedaten aus dem Authentifikator präsentiert, aus denen er auswählen kann, und die ausgewählte Anmeldedaten wird zur Anmeldung an die RP-Web-App zurückgegeben. Wählt der Benutzer eine Anmeldedaten aus, die vom RP-Server gelöscht wurde, wird sie nicht erkannt und der Login schlägt fehl. Dies ist für den Benutzer eine verwirrende Erfahrung, da er erwartet, nur Anmeldedaten angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu mindern, sollte die `signalAllAcceptedCredentials()`-Methode von der RP-Web-App jedes Mal aufgerufen werden, wenn der Benutzer eine Anmeldeinformation löscht oder sich anmeldet, um dem Authentifikator mitzuteilen, welche Anmeldedaten für den gegebenen Benutzer noch gültig sind. Es liegt am Authentifikator, wie er diese Informationen handhabt, aber die Erwartung ist, dass er seine Informationen mit der bereitgestellten Anmeldedatenliste synchronisiert. Anmeldedaten, die nicht in der Liste erscheinen, sollten entfernt werden, sodass der Benutzer keine Anmeldedaten angeboten bekommt, die im Anmelde-UI nicht existieren.

> [!WARNING]
> Üben Sie Vorsicht beim Aufrufen von `signalAllAcceptedCredentials()` — jegliche gültige Anmeldedaten, die nicht in der Liste enthalten sind, sollen aus dem Authentifikator entfernt werden, was den Benutzer daran hindern wird, sich damit anzumelden. Das Übergeben einer leeren Liste kann alle Anmeldedaten des Benutzers entfernen. Einige Authenticatoren können das Wiederherstellen von Anmeldedaten über einen nachfolgenden Aufruf von `signalAllAcceptedCredentials()` unterstützen, wenn die zuvor entfernten Credential-IDs in die Liste aufgenommen werden.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da es sensible Informationen des Benutzers offenlegt. Wenn der Benutzer nicht authentifiziert ist, weil er versucht hat, sich mit einer Anmeldeinformation anzumelden, die auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit der nicht erkannten Anmeldeinformation aufrufen, damit der Authenticator sie löschen kann. Siehe [Methoden zur Synchronisierung erkennbarer Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) für einen detaillierteren Vergleich.

## Beispiele

### Signalisieren der akzeptierten Anmeldedaten

In diesem Beispiel rufen wir die `signalAllAcceptedCredentials()`-Methode auf und übergeben ihr die Details aller Anmeldedaten, die dem Benutzer gehören, einschließlich derer, mit denen er sich gerade eingeloggt hat. Als Ergebnis sollte der Authenticator seine eigene Kopie der Anmeldedaten aktualisieren, sodass sie mit dem RP synchron bleiben.

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
- [Keep passkeys consistent with credentials on your server with the Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
