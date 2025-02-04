---
title: "PublicKeyCredential: signalAllAcceptedCredentials() statische Methode"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die **`signalAllAcceptedCredentials()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authentifikator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id), die der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server für einen bestimmten Benutzer noch hält.

Dies ermöglicht es dem Authentifikator, die Anmeldeinformationen zu aktualisieren und alle Anmeldedaten zu entfernen, die nicht mehr von der RP erkannt werden, wie z.B. die der gelöschten Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn sich ein Benutzer bei der RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist — nach der Anmeldung oder beim Löschen eines Anmeldedatensatzes — da sie sensible Informationen des Benutzers offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Anmeldedaten repräsentiert und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array von base64url-codierten Zeichenfolgen, die die [`IDs der Anmeldedaten`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) repräsentieren, die noch gültig sind.
    - `rpId`
      - : Eine Zeichenfolge, die die [`ID der RP`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, die das Signal gesendet hat.
    - `userId`
      - : Eine base64url-codierte Zeichenfolge, die die [`ID des Benutzers`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) repräsentiert, mit dem die Anmeldedaten verbunden sind.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `userId` oder irgendeines der `allAcceptedCredentialIds`-Elemente sind keine gültigen base64url-codierten Zeichenfolgen.

## Beschreibung

Es ist möglich, dass die Informationen, die in einem Benutzer-Authentifikator über eine [entdeckbare Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel, [ein Passkey](https://passkeys.dev/)) gespeichert sind, nicht mehr mit dem Server synchron sind. Dies tritt normalerweise auf, wenn der Benutzer eine Anmeldedaten aus der RP-Web-App löscht, ohne den Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit entdeckbaren Anmeldedaten anzumelden, wird ihm eine Auswahl an Anmeldedaten vom Authentifikator präsentiert, aus denen er wählen kann, und die ausgewählte Anmeldedaten wird an die RP-Web-App zurückgesendet, um sich anzumelden. Wenn der Benutzer eine Anmeldedaten auswählt, die vom RP-Server gelöscht wurde, wird sie nicht erkannt, und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, dass ihnen nur Anmeldedaten angeboten werden, die funktionieren sollten.

Um dieses Problem zu mildern, sollte `signalAllAcceptedCredentials()` von der RP-Web-App jedes Mal aufgerufen werden, wenn ein Benutzer eine Anmeldedaten löscht oder sich anmeldet, um dem Authentifikator mitzuteilen, welche Anmeldedaten für den angegebenen Benutzer noch gültig sind. Es liegt am Authentifikator, wie er mit dieser Information umgeht, aber es wird erwartet, dass er seine Informationen mit der bereitgestellten Anmeldedatenliste synchronisiert. Anmeldedaten, die nicht in der Liste erscheinen, sollten entfernt werden, damit dem Benutzer keine Anmeldedaten angeboten werden, die in der Anmelde-UI nicht existieren.

> [!WARNING]
> Seien Sie vorsichtig beim Aufrufen von `signalAllAcceptedCredentials()` — alle gültigen Anmeldedaten, die nicht in der Liste enthalten sind, sollen vom Authentifikator entfernt werden, wodurch der Benutzer daran gehindert wird, sich mit ihnen anzumelden. Wenn Sie eine leere Liste übergeben, können alle Anmeldedaten des Benutzers gelöscht werden. Einige Authentifikatoren können das Wiederherstellen von Anmeldedaten durch einen anschließenden Aufruf von `signalAllAcceptedCredentials()` mit den zuvor entfernten Credential-IDs, die in der Liste enthalten sind, unterstützen.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da es sensible Informationen des Benutzers offenlegt. Wenn der Benutzer nicht authentifiziert ist, weil er versucht hat, sich mit einer Anmeldedaten anzumelden, die auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit der nicht erkannten Anmeldedaten aufrufen, damit der Authentifikator sie löschen kann. Siehe [Methoden zur Synchronisierung entdeckbarer Anmeldedaten](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods) für einen detaillierteren Vergleich.

## Beispiele

### Signalisierung der akzeptierten Anmeldedaten

In diesem Beispiel rufen wir die `signalAllAcceptedCredentials()` Methode auf und übergeben ihr die Details aller Anmeldedaten, die dem Benutzer gehören, einschließlich derer, mit denen er sich gerade angemeldet hat. Infolgedessen sollte der Authentifikator seine eigene Kopie der Anmeldedaten aktualisieren, sodass sie mit der RP synchron bleiben.

```js
if (PublicKeyCredential.signalAllAcceptedCredentials) {
  await PublicKeyCredential.signalAllAcceptedCredentials({
    rpId: "example.com",
    userId: "M2YPl-KGnA8", // base64url-encoded user ID
    allAcceptedCredentialIds: [
      // A list of base64url-encoded credential IDs
      "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA",
      // ...
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
- [Halten Sie Passwörter mit Anmeldedaten auf Ihrem Server mit der Signal-API konsistent](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
