---
title: "PublicKeyCredential: statische Methode signalAllAcceptedCredentials()"
short-title: signalAllAcceptedCredentials()
slug: Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die statische Methode **`signalAllAcceptedCredentials()`** der Schnittstelle [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) teilt dem Authenticator alle gültigen [Credential-IDs](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) mit, die der Server der [Relying Party](https://en.wikipedia.org/wiki/Relying_party) (RP) noch für einen bestimmten Benutzer gespeichert hat.

Dadurch kann der Authenticator seine Informationen über Credentials aktualisieren und alle Credentials entfernen, die von der RP nicht mehr erkannt werden, etwa solche für gelöschte Konten. Die Methode sollte jedes Mal aufgerufen werden, wenn sich ein Benutzer bei der RP authentifiziert.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist – nach der Registrierung oder Anmeldung oder wenn der Benutzer ein Credential löscht –, da die Methode sensible Informationen über den Benutzer offenlegt.

## Syntax

```js-nolint
signalAllAcceptedCredentials(options)
```

### Parameter

- `options`
  - : Ein Objekt, das die gültigen Credentials repräsentiert und die folgenden Eigenschaften enthält:
    - `allAcceptedCredentialIds`
      - : Ein Array aus base64url-kodierten Zeichenfolgen, die die [`id`s der Credentials](/de/docs/Web/API/PublicKeyCredentialRequestOptions#id) repräsentieren, die noch gültig sind.
    - `rpId`
      - : Eine Zeichenfolge, die die [`id` der RP](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_2) repräsentiert, die das Signal gesendet hat.
    - `userId`
      - : Eine base64url-kodierte Zeichenfolge, die die [`id` des Benutzers](/de/docs/Web/API/PublicKeyCredentialCreationOptions#id_3) repräsentiert, zu dem die Credentials gehören.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

Das Promise wird mit einer der folgenden Ausnahmen zurückgewiesen:

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Domain der RP ist ungültig.
- {{jsxref("TypeError")}}
  - : `userId` oder eines der Elemente von `allAcceptedCredentialIds` ist keine gültige base64url-kodierte Zeichenfolge.

## Beschreibung

Die Informationen, die im Authenticator eines Benutzers über ein [auffindbares Credential](/de/docs/Web/API/Web_Authentication_API#discoverable_and_non-discoverable_credentials) (beispielsweise einen [Passkey](/de/docs/Web/Security/Authentication/Passkeys)) gespeichert sind, können von den Informationen auf dem Server abweichen. Dies geschieht üblicherweise, wenn der Benutzer ein Credential in der Web-App der RP löscht, ohne den Authenticator zu aktualisieren.

Wenn ein Benutzer versucht, sich mit auffindbaren Credentials anzumelden, zeigt ihm der Authenticator eine Auswahl an Credentials an. Das ausgewählte Credential wird zur Anmeldung an die Web-App der RP zurückgegeben. Wählt der Benutzer ein Credential aus, das auf dem RP-Server gelöscht wurde, wird es nicht erkannt und die Anmeldung schlägt fehl. Das ist für Benutzer verwirrend, da sie erwarten, dass ihnen nur Credentials angeboten werden, mit denen die Anmeldung erfolgreich sein kann.

Um dieses Problem zu vermeiden, sollte die Web-App der RP `signalAllAcceptedCredentials()` jedes Mal aufrufen, wenn ein Benutzer ein Credential löscht oder sich anmeldet. So teilt sie dem Authenticator mit, welche Credentials für den jeweiligen Benutzer noch gültig sind. Wie der Authenticator diese Informationen verarbeitet, bleibt ihm überlassen. Es wird jedoch erwartet, dass er seine Informationen mit der übergebenen Credential-Liste synchronisiert. Credentials, die nicht in der Liste stehen, sollten entfernt werden, damit dem Benutzer in der Anmeldeoberfläche keine nicht mehr vorhandenen Credentials angeboten werden.

> [!WARNING]
> Gehen Sie beim Aufruf von `signalAllAcceptedCredentials()` mit Bedacht vor: Gültige Credentials, die nicht in der Liste enthalten sind, sollen aus dem Authenticator entfernt werden. Der Benutzer kann sich dann nicht mehr mit ihnen anmelden. Wenn Sie eine leere Liste übergeben, werden möglicherweise alle Credentials des Benutzers entfernt. Manche Authenticators unterstützen möglicherweise die Wiederherstellung von Credentials durch einen späteren Aufruf von `signalAllAcceptedCredentials()`, bei dem die IDs der zuvor entfernten Credentials in der Liste enthalten sind.

`signalAllAcceptedCredentials()` sollte _nur_ aufgerufen werden, wenn der aktuelle Benutzer authentifiziert ist, da die Methode sensible Informationen über den Benutzer offenlegt. Ist der Benutzer nicht authentifiziert, weil er versucht hat, sich mit einem Credential anzumelden, das auf dem RP-Server nicht existiert, sollten Sie stattdessen [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) mit dem nicht erkannten Credential aufrufen, damit der Authenticator es löschen kann. Einen ausführlicheren Vergleich finden Sie unter [Methoden zur Synchronisierung auffindbarer Credentials](/de/docs/Web/API/Web_Authentication_API#discoverable_credential_synchronization_methods).

## Beispiele

### Gültige Credentials signalisieren

In diesem Beispiel rufen wir die Methode `signalAllAcceptedCredentials()` auf und übergeben ihr die Angaben zu allen Credentials des Benutzers, einschließlich des Credentials, mit dem er sich gerade angemeldet hat. Der Authenticator sollte daraufhin seine eigene Kopie der Credentials aktualisieren, damit sie mit den Informationen der RP synchron bleibt.

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

Weitere Codebeispiele finden Sie unter [Passkeys mit den Credentials auf Ihrem Server mithilfe der Signal API synchron halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static)
- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- [Passkeys mit den Credentials auf Ihrem Server mithilfe der Signal API synchron halten](https://developer.chrome.com/docs/identity/webauthn-signal-api) auf developer.chrome.com (2024)
