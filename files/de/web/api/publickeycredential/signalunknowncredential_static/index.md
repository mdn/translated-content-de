---
title: "PublicKeyCredential: signalUnknownCredential() statische Methode"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`signalUnknownCredential()`** statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authentifikator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server nicht erkannt wurde.

Dadurch kann der Authentifikator Anmeldedaten entfernen, die von der RP nicht zugelassen sind, wie etwa jene für gelöschte Konten oder Konten, die auf dem Authentifikator erstellt und gespeichert, aber nicht ordnungsgemäß auf dem Server aktualisiert wurden. In der Regel wird die Methode aufgerufen, nachdem die Anmeldung fehlgeschlagen ist, weil die Kontodetails der RP nicht zur Verfügung standen. Sie kann auch verwendet werden, wenn der aktuelle Benutzer nicht authentifiziert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die nicht erkannte Anmeldeinformation darstellt und die folgenden Eigenschaften enthält:
    - `credentialId`
      - : Ein base64url-kodierter String, der die [ID der Anmeldeinformation](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) darstellt, die nicht erkannt wurde.
    - `rpId`
      - : Ein String, der die [ID der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) darstellt, die das Signal gesendet hat.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die im Authentifikator eines Benutzers gespeicherten Informationen über eine [erkennbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [ein Passkey](https://passkeys.dev/)) nicht mehr mit dem RP-Server synchron sind. Dies geschieht normalerweise, wenn der Benutzer eine Anmeldeinformation aus der RP-Webanwendung löscht, ohne den Authentifikator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit erkennbaren Anmeldeinformationen anzumelden, wird ihm ein Satz von Anmeldeinformationen vom Authentifikator zur Auswahl präsentiert, und die ausgewählte Anmeldeinformation wird an die RP-Webanwendung zurückgegeben, um sich anzumelden. Wenn der Benutzer eine Anmeldeinformation auswählt, die vom RP-Server gelöscht wurde, wird sie nicht erkannt und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu mildern, sollte `signalUnknownCredential()` in der RP-Webanwendung jedes Mal aufgerufen werden, wenn ein Anmeldeversuch mit erkennbaren Anmeldeinformationen fehlschlägt, um dem Authentifikator mitzuteilen, dass die Credential-ID nicht erkannt wurde.

Es liegt beim Authentifikator, wie er mit dieser Information umgeht, aber die Erwartung ist, dass er die betreffende Anmeldeinformation löscht, sodass es keine Diskrepanz in den auf dem Authentifikator und der Relying Party gespeicherten Daten gibt.

Darüber hinaus kann `signalUnknownCredential()` auch aufgerufen werden, wenn eine Webanwendung in der Lage ist, eine erkennbare Anmeldeinformation auf dem Authentifikator zu erstellen, aus irgendeinem Grund jedoch nicht in der Lage ist, die Anmeldeinformationen auf den Server hochzuladen.

`signalUnknownCredential()` kann aufgerufen werden, auch wenn der aktuelle Benutzer nicht authentifiziert ist, da es keine sensiblen Informationen preisgibt.

## Beispiele

### Signalisieren einer unbekannten Anmeldeinformation

In diesem Beispiel wird ein Anmeldeversuch über erkennbare Anmeldeinformationen mittels eines [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufrufs durchgeführt. Die Anmeldeinformation wird erfolgreich zurückgegeben, und die Credential-ID und Nutzlast werden in Konstanten gespeichert.

Die Nutzlast wird über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den RP-Server gesendet, um den Benutzer anzumelden, aber die Anfrage schlägt mit einer {{httpstatus("404")}}-Antwort fehl, weil die RP diesen Benutzer nicht erkennt (zum Beispiel, weil diese Anmeldeinformation zuvor von der RP gelöscht wurde).

Als Folge davon rufen wir die `signalUnknownCredential()`-Methode auf und übergeben ihr die `rpId` und Credential-ID, um dem Authentifikator mitzuteilen, dass die Anmeldeinformation der RP unbekannt ist. Der Authentifikator sollte dann die Anmeldeinformation löschen, damit das gleiche Problem nicht erneut auftritt.

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
- [Passkeys mit Anmeldeinformationen auf Ihrem Server konsistent halten mit der Signal API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
