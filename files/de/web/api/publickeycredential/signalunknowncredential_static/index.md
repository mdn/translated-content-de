---
title: "PublicKeyCredential: signalUnknownCredential() statische Methode"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: a060aa315813bd1e69e4a43d7aed241f649e7e0d
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalUnknownCredential()`** statische Methode der [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Schnittstelle signalisiert dem Authenticator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP)-Server nicht erkannt wurde.

Dies ermöglicht es dem Authenticator, Anmeldeinformationen zu entfernen, die nicht vom RP erlaubt sind, wie z.B. für gelöschte Konten oder Konten, die auf dem Authenticator erstellt und gespeichert wurden, aber nicht ordnungsgemäß auf dem Server aktualisiert wurden. Im Allgemeinen wird die Methode aufgerufen, nachdem der Anmeldevorgang fehlgeschlagen ist, weil die Kontodetails dem RP nicht zur Verfügung standen. Sie kann auch genutzt werden, wenn der aktuelle Benutzer nicht authentisiert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die nicht erkannte Anmeldeinformation repräsentiert und die folgenden Eigenschaften enthält:
    - `credentialId`
      - : Ein base64url-kodierter String, der die nicht erkannte [`ID` der Anmeldeinformation](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellt.
    - `rpId`
      - : Ein String, der die gesendete [`ID` des RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die im Authenticator eines Benutzers gespeicherten Informationen über eine [erkennbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (z.B. ein [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) mit dem Server nicht synchron sind. Dies tritt normalerweise auf, wenn der Benutzer eine Anmeldeinformation aus der RP-Webanwendung löscht, ohne den Authenticator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit erkennbaren Anmeldeinformationen anzumelden, wird ihm ein Satz von Anmeldeinformationen vom Authenticator zur Auswahl präsentiert, und die ausgewählte Anmeldeinformation wird an die RP-Webanwendung zurückgegeben, um sich anzumelden. Wenn der Benutzer eine Anmeldeinformation auswählt, die vom RP-Server gelöscht wurde, wird sie nicht erkannt, und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu mildern, sollte `signalUnknownCredential()` bei jedem Fehlschlag einer Anmeldung, die auf erkennbaren Anmeldeinformationen basiert, in der RP-Webanwendung aufgerufen werden, um dem Authenticator mitzuteilen, dass die Credential-ID nicht erkannt wurde.

Es liegt im Ermessen des Authenticators, wie diese Information behandelt wird, aber die Erwartung ist, dass die relevante Anmeldeinformation gelöscht wird, sodass keine Diskrepanz in den auf dem Authenticator und der Relying Party gespeicherten Daten besteht.

Zusätzlich kann `signalUnknownCredential()` aufgerufen werden, wenn eine Webanwendung in der Lage ist, eine erkennbare Anmeldeinformation auf dem Authenticator zu erstellen, aber aus irgendeinem Grund nicht in der Lage ist, die Anmeldeinformationsdaten an den Server zu übertragen.

`signalUnknownCredential()` kann auch aufgerufen werden, wenn der aktuelle Benutzer nicht authentisiert ist, da es keine sensiblen Informationen preisgibt.

## Beispiele

### Signalisierung einer unbekannten Anmeldeinformation

In diesem Beispiel wird ein Anmeldeversuch mit erkennbaren Anmeldeinformationen über einen [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf unternommen. Die Anmeldeinformation wird erfolgreich zurückgegeben, und die Credential-ID und die Nutzdaten werden in Konstanten gespeichert.

Die Nutzdaten werden über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den RP-Server gesendet, um den Benutzer anzumelden, aber die Anfrage schlägt mit einer {{httpstatus("404")}} Antwort fehl, weil der RP diesen Benutzer nicht erkennt (zum Beispiel, weil diese Anmeldeinformation zuvor vom RP gelöscht wurde).

Als Ergebnis dessen rufen wir die `signalUnknownCredential()` Methode auf und übergeben ihr die `rpId` und die Credential-ID, um dem Authenticator mitzuteilen, dass die Anmeldeinformation dem RP unbekannt ist. Der Authenticator sollte dann die Anmeldeinformation löschen, damit das Problem nicht wieder auftritt.

```js
const credential = await navigator.credentials.get({
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
  rpId: "example.com",
  allowCredentials: [],
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
      credentialId: credID,
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
- [Halten Sie Passkeys mit Anmeldeinformationen auf Ihrem Server konsistent mit der Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
