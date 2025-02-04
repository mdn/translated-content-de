---
title: "PublicKeyCredential: signalUnknownCredential() statische Methode"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: 1e98f1356a5eda11db10cd9b08dc52cce868ebff
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die **`signalUnknownCredential()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle signalisiert dem Authentifikator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server nicht erkannt wurde.

Dies ermöglicht es dem Authentifikator, Anmeldeinformationen zu entfernen, die von der RP nicht erlaubt sind, wie zum Beispiel solche für gelöschte Konten oder Konten, die auf dem Authentifikator erstellt und gespeichert wurden, aber nicht ordnungsgemäß auf dem Server aktualisiert wurden. Im Allgemeinen wird die Methode aufgerufen, nachdem das Anmelden fehlgeschlagen ist, weil die Kontodetails für die RP nicht verfügbar waren. Sie kann verwendet werden, selbst wenn der aktuelle Benutzer nicht authentifiziert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die nicht erkannte Anmeldeinformation darstellt und die folgenden Eigenschaften enthält:
    - `credentialId`
      - : Ein base64url-kodierter String, der die [`id` der Anmeldeinformation](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellt, die nicht erkannt wurde.
    - `rpId`
      - : Ein String, der die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domäne ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die Informationen, die im Authentifikator eines Benutzers über eine [auffindbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [einen Passkey](https://passkeys.dev/)) gespeichert sind, nicht mehr mit dem RP-Server synchron sind. Dies geschieht in der Regel, wenn der Benutzer eine Anmeldeinformation aus der RP-Webanwendung löscht, ohne den Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit auffindbaren Anmeldeinformationen anzumelden, wird ihm ein Satz von Anmeldeinformationen aus dem Authentifikator zur Auswahl präsentiert, und die ausgewählte Anmeldeinformation wird an die RP-Webanwendung zurückgegeben, um sich anzumelden. Wenn der Benutzer eine Anmeldeinformation auswählt, die vom RP-Server gelöscht wurde, wird sie nicht erkannt und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu mindern, sollte `signalUnknownCredential()` in der RP-Webanwendung jedes Mal aufgerufen werden, wenn eine Anmeldung auf Basis auffindbarer Anmeldeinformationen fehlschlägt, um dem Authentifikator mitzuteilen, dass die Credential-ID nicht erkannt wurde.

Es liegt am Authentifikator, mit dieser Information umzugehen, aber die Erwartung ist, dass er die relevante Anmeldeinformation löscht, damit es keine Abweichung zwischen den im Authentifikator und bei der Relying Party gespeicherten Daten gibt.

Darüber hinaus könnte `signalUnknownCredential()` auch aufgerufen werden, wenn eine Webanwendung in der Lage ist, eine auffindbare Anmeldeinformation auf dem Authentifikator zu erstellen, aber aus irgendeinem Grund die Anmeldeinformationen nicht auf den Server hochladen kann.

`signalUnknownCredential()` kann aufgerufen werden, selbst wenn der aktuelle Benutzer nicht authentifiziert ist, da es keine sensiblen Informationen preisgibt.

## Beispiele

### Signalisieren eines unbekannten Credentials

In diesem Beispiel wird ein Anmeldeversuch mit auffindbaren Anmeldeinformationen über einen [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf unternommen. Die Anmeldeinformation wird erfolgreich zurückgegeben, und die Credential-ID und Nutzdaten werden in Konstanten gespeichert.

Die Nutzdaten werden über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den RP-Server gesendet, um den Benutzer anzumelden, aber die Anfrage schlägt mit einer {{httpstatus("404")}}-Antwort fehl, weil die RP diesen Benutzer nicht erkennt (zum Beispiel weil diese Anmeldeinformation zuvor von der RP gelöscht wurde).

Infolgedessen rufen wir die `signalUnknownCredential()`-Methode auf, indem wir ihr die `rpId` und die Credential-ID übergeben, um dem Authentifikator mitzuteilen, dass die Anmeldeinformation der RP unbekannt ist. Der Authentifikator sollte dann die Anmeldeinformation löschen, damit dieses Problem nicht erneut auftritt.

```js
const credential = await navigator.credentials.get({
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203, ...]),
  rpId: "example.com",
  allowCredentials: []
  // Empty allowCredentials list means only discoverable
  // credentials are presented to the user
});

// Retrieve base64url-encoded credential ID,
// such as "vI0qOggiE3OT01ZRWBYz5l4MEgU0c7PmAA"
const credID = credential.id;
// Retrieve payload to send to the RP server
const payload = credential.toJSON();

const result = await fetch("/login", {
  // fetch() options, will include the payload in the request body
});

// Detect authentication failure due to lack of the credential
if (result.status === 404) {
  if (PublicKeyCredential.signalUnknownCredential) {
    await PublicKeyCredential.signalUnknownCredential({
      rpId: "example.com",
      credentialId: credID
    });
  } else {
    // Encourage the user to delete the credential from the authenticator
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static)
- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [Passkeys mit Anmeldeinformationen auf Ihrem Server mit der Signal-API konsistent halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
