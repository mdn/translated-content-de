---
title: "PublicKeyCredential: statische Methode signalUnknownCredential()"
short-title: signalUnknownCredential()
slug: Web/API/PublicKeyCredential/signalUnknownCredential_static
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalUnknownCredential()`** der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) signalisiert dem Authenticator, dass eine [Credential-ID](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) vom Server der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) nicht erkannt wurde.

Dadurch kann der Authenticator Credentials entfernen, die von der RP nicht zugelassen werden, etwa solche für gelöschte Konten oder für Konten, die erstellt und im Authenticator gespeichert wurden, deren Daten aber auf dem Server nicht ordnungsgemäß aktualisiert wurden. In der Regel wird die Methode aufgerufen, wenn eine Anmeldung fehlschlägt, weil der RP die Kontodaten nicht vorliegen. Sie kann auch verwendet werden, wenn der aktuelle Benutzer nicht authentifiziert ist, da sie keine sensiblen Informationen preisgibt.

## Syntax

```js-nolint
signalUnknownCredential(options)
```

### Parameter

- `options`
  - : Ein Objekt, das das nicht erkannte Credential repräsentiert und die folgenden Eigenschaften enthält:
    - `credentialId`
      - : Eine Base64url-codierte Zeichenfolge, die die [`id` des Credentials](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) repräsentiert, das nicht erkannt wurde.
    - `rpId`
      - : Eine Zeichenfolge, die die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, die das Signal gesendet hat.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen zurückgewiesen:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Domain der RP ist ungültig.
- {{jsxref("TypeError")}}
  - : `credentialId` ist keine gültige Base64url-codierte Zeichenfolge.

## Beschreibung

Die Informationen, die im Authenticator eines Benutzers über ein [auffindbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (beispielsweise einen [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) gespeichert sind, können vom Stand auf dem Server abweichen. Dies geschieht üblicherweise, wenn der Benutzer ein Credential in der Web-App der RP löscht, ohne den Authenticator zu aktualisieren.

Wenn sich ein Benutzer mit auffindbaren Credentials anmelden möchte, wird ihm eine Auswahl der Credentials aus dem Authenticator angezeigt. Das ausgewählte Credential wird zur Anmeldung an die Web-App der RP zurückgegeben. Wählt der Benutzer ein Credential aus, das vom Server der RP gelöscht wurde, wird es nicht erkannt und die Anmeldung schlägt fehl. Das ist für Benutzer verwirrend, da sie erwarten, dass ihnen nur Credentials angeboten werden, mit denen die Anmeldung gelingen kann.

Um dieses Problem zu vermeiden, sollte die Web-App der RP bei jeder fehlgeschlagenen Anmeldung mit einem auffindbaren Credential `signalUnknownCredential()` aufrufen und den Authenticator so darüber informieren, dass die Credential-ID nicht erkannt wurde.

Wie der Authenticator mit dieser Information umgeht, bleibt ihm überlassen. Es wird jedoch erwartet, dass er das betreffende Credential löscht, damit die auf dem Authenticator und bei der Relying Party gespeicherten Daten nicht mehr voneinander abweichen.

Außerdem kann `signalUnknownCredential()` aufgerufen werden, wenn eine Web-App zwar ein auffindbares Credential auf dem Authenticator erstellen kann, die Credential-Informationen aber aus irgendeinem Grund nicht auf den Server hochladen kann.

`signalUnknownCredential()` kann auch aufgerufen werden, wenn der aktuelle Benutzer nicht authentifiziert ist, da die Methode keine sensiblen Informationen preisgibt.

## Beispiele

### Ein unbekanntes Credential signalisieren

In diesem Beispiel wird über einen Aufruf von [`get()`](/de/docs/Web/API/CredentialsContainer/get) versucht, sich mit auffindbaren Credentials anzumelden. Das Credential wird erfolgreich zurückgegeben; seine ID und seine Nutzdaten werden in Konstanten gespeichert.

Die Nutzdaten werden über eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage an den Server der RP gesendet, um den Benutzer anzumelden. Die Anfrage schlägt jedoch mit einer {{httpstatus("404")}}-Antwort fehl, weil die RP das Credential nicht erkennt (beispielsweise weil es zuvor bei der RP gelöscht wurde).

Daraufhin rufen wir die Methode `signalUnknownCredential()` auf und übergeben ihr die `rpId` und die Credential-ID. So informieren wir den Authenticator darüber, dass das Credential der RP unbekannt ist. Der Authenticator sollte das Credential anschließend löschen, damit es nicht erneut zu demselben Problem kommt.

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
- [Passkeys mit den Credentials auf Ihrem Server mithilfe der Signal API synchron halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
