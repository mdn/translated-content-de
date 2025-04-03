---
title: "PublicKeyCredential: signalUnknownCredential() statische Methode"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}{{seecompattable}}

Die **`signalUnknownCredential()`**-statische Methode des [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Interfaces signalisiert dem Authenticator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) Server nicht erkannt wurde.

Dies ermöglicht es dem Authenticator, Anmeldedaten zu entfernen, die von der RP nicht erlaubt sind, wie z. B. solche für gelöschte Konten oder Konten, die auf dem Authenticator erstellt und gespeichert wurden, aber nicht ordnungsgemäß auf dem Server aktualisiert wurden. Generell wird die Methode aufgerufen, nachdem die Anmeldung fehlgeschlagen ist, weil die Kontodaten der RP nicht zur Verfügung standen. Sie kann verwendet werden, auch wenn der aktuelle Benutzer nicht authentifiziert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die nicht erkannte Anmeldeinformation repräsentiert und folgende Eigenschaften enthält:
    - `credentialId`
      - : Ein base64url-kodierter String, der die [`ID des Credentials`](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) repräsentiert, die nicht erkannt wurde.
    - `rpId`
      - : Ein String, der die [`ID der RP`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, die das Signal gesendet hat.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf {{jsxref("undefined")}} auflöst.

### Ausnahmen

Das Promise wird mit den folgenden Ausnahmen abgelehnt:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die RP-Domain ist nicht gültig.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `credentialId` ist kein gültiger base64url-kodierter String.

## Beschreibung

Es ist möglich, dass die in einem Benutzerauthenticator gespeicherten Informationen über eine [auffindbare Anmeldeinformation](/de/docs/Web/API/Web_Authentication_API#discoverable_credentials_and_conditional_mediation) (zum Beispiel [einen Passkey](https://passkeys.dev/)) nicht mit dem RP-Server synchron sind. Dies geschieht normalerweise, wenn der Benutzer ein Credential aus der RP-Web-App löscht, ohne den Authenticator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit auffindbaren Anmeldeinformationen anzumelden, werden ihm eine Reihe von Anmeldeinformationen vom Authenticator zur Auswahl präsentiert, und das ausgewählte Credential wird zur Anmeldung an die RP-Web-App zurückgesendet. Wenn der Benutzer ein Credential auswählt, das vom RP-Server gelöscht wurde, wird es nicht erkannt und die Anmeldung schlägt fehl. Dies ist eine verwirrende Erfahrung für Benutzer, die erwarten, nur Anmeldeinformationen angeboten zu bekommen, die erfolgreich sein sollten.

Um dieses Problem zu entschärfen, sollte `signalUnknownCredential()` in der RP-Web-App jedes Mal aufgerufen werden, wenn eine Anmeldung auf Basis auffindbarer Anmeldeinformationen fehlschlägt, um dem Authenticator mitzuteilen, dass die Credential-ID nicht erkannt wurde.

Es hängt vom Authenticator ab, wie er mit dieser Information umgeht, aber die Erwartung ist, dass er das betreffende Credential löscht, sodass keine Diskrepanzen zwischen den im Authenticator und der RP gespeicherten Daten bestehen.

Darüber hinaus kann `signalUnknownCredential()` auch aufgerufen werden, wenn eine Web-App in der Lage ist, ein auffindbares Credential auf dem Authenticator zu erstellen, aber aus irgendeinem Grund unfähig ist, die Credential-Informationen an den Server zu übermitteln.

`signalUnknownCredential()` kann aufgerufen werden, auch wenn der aktuelle Benutzer nicht authentifiziert ist, da es keine sensiblen Informationen preisgibt.

## Beispiele

### Signalisieren eines unbekannten Credentials

In diesem Beispiel wird ein Anmeldeversuch unter Verwendung auffindbarer Anmeldeinformationen über einen [`get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf gemacht. Das Credential wird erfolgreich zurückgegeben, und die Credential-ID und die Nutzlast werden in Konstanten gespeichert.

Die Nutzlast wird über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den RP-Server gesendet, um den Benutzer anzumelden, aber die Anfrage schlägt mit einer {{httpstatus("404")}}-Antwort fehl, weil die RP diesen Benutzer nicht erkennt (zum Beispiel, weil das Credential zuvor von der RP gelöscht wurde).

Aufgrund dessen rufen wir die Methode `signalUnknownCredential()` auf und übergeben ihr die `rpId` und die Credential-ID, um den Authenticator darüber zu informieren, dass das Credential der RP unbekannt ist. Der Authenticator sollte dann das Credential löschen, damit es nicht erneut dasselbe Problem verursacht.

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
- [Halten Sie Passkeys konsistent mit Anmeldedaten auf Ihrem Server mit der Signal-API](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
