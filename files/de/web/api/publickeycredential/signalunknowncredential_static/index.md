---
title: "PublicKeyCredential: signalUnknownCredential() statische Methode"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: b1392b60ee71b9f09c0123694a494a71d0dbbb8a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die statische Methode **`signalUnknownCredential()`** der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle signalisiert dem Authenticator, dass eine [Credential ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP)-Server nicht erkannt wurde.

Dadurch kann der Authenticator Anmeldedaten entfernen, die vom RP nicht zugelassen sind, wie z. B. solche, die zu gelöschten Konten gehören oder Konten, die auf dem Authenticator erstellt, aber nicht ordnungsgemäß auf dem Server aktualisiert wurden. Die Methode wird im Allgemeinen aufgerufen, nachdem eine Anmeldung fehlgeschlagen ist, weil die Kontodetails dem RP nicht verfügbar waren. Sie kann auch aufgerufen werden, wenn der aktuelle Benutzer nicht authentifiziert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die nicht erkannte Anmeldeinformation darstellt und die folgenden Eigenschaften enthält:
    - `credentialId`
      - : Ein base64url-codierter String, der die [`id` der Anmeldeinformation](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellt, die nicht erkannt wurde.
    - `rpId`
      - : Ein String, der die [`id` des RPs](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, welche das Signal gesendet hat.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-codierter String.

## Beschreibung

Es ist möglich, dass die Informationen, die in einem Benutzer-Authenticator über eine [discoverable credential](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [eine Passkey](https://passkeys.dev/)) gespeichert sind, nicht mit dem RP-Server synchronisiert sind. Dies geschieht in der Regel, wenn der Benutzer eine Anmeldeinformation aus der RP-Webanwendung löscht, ohne den Authenticator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit discoverable credentials anzumelden, wird ihm eine Auswahl an Anmeldeinformationen aus dem Authenticator präsentiert, aus denen er wählen kann, und die ausgewählte Anmeldeinformation wird an die RP-Webanwendung zurückgegeben, um sich anzumelden. Wenn der Benutzer eine Anmeldeinformation auswählt, die vom RP-Server gelöscht wurde, wird diese nicht erkannt, und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu mindern, sollte `signalUnknownCredential()` auf der RP-Webanwendung jedes Mal aufgerufen werden, wenn eine Anmeldung basierend auf discoverable credentials fehlschlägt, um den Authenticator darüber zu informieren, dass die Credential ID nicht erkannt wurde.

Es liegt am Authenticator, wie er diese Information behandelt, aber die Erwartung ist, dass er die entsprechende Anmeldeinformation löscht, sodass keine Diskrepanz zwischen den Daten, die auf dem Authenticator und dem Relying Party gespeichert sind, besteht.

Zusätzlich könnte `signalUnknownCredential()` auch aufgerufen werden, wenn eine Webanwendung in der Lage ist, eine discoverable credential auf dem Authenticator zu erstellen, aber aus irgendeinem Grund nicht in der Lage ist, die Credential-Informationen auf den Server hochzuladen.

`signalUnknownCredential()` kann auch dann aufgerufen werden, wenn der aktuelle Benutzer nicht authentifiziert ist, da keine sensiblen Informationen preisgegeben werden.

## Beispiele

### Signalisiert eine unbekannte Anmeldeinformation

In diesem Beispiel wird ein Anmeldeversuch mit discoverable credentials über einen [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf durchgeführt. Die Anmeldeinformation wird erfolgreich zurückgegeben, und die Credential ID und Nutzdaten werden in Konstanten gespeichert.

Die Nutzdaten werden über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den RP-Server gesendet, um den Benutzer anzumelden, aber die Anfrage schlägt mit einer {{httpstatus("404")}}-Antwort fehl, da der RP diesen Benutzer nicht erkennt (zum Beispiel, weil diese Anmeldeinformation zuvor vom RP gelöscht wurde).

Infolgedessen rufen wir die Methode `signalUnknownCredential()` auf, übergeben ihr die `rpId` und die Credential ID, um den Authenticator darüber zu informieren, dass die Anmeldeinformation dem RP unbekannt ist. Der Authenticator sollte diese Anmeldeinformation dann löschen, damit sie nicht erneut das gleiche Problem verursacht.

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
- [Passkeys konsistent mit Anmeldeinformationen auf Ihrem Server halten mit der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
