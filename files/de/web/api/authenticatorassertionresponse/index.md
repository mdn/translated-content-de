---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAssertionResponse`**-Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) enthält eine {{Glossary("Signature/Security", "digitale Signatur")}} des privaten Schlüssels eines bestimmten WebAuthn-Credentials. Der Server der vertrauenden Partei kann diese Signatur zur Authentifizierung eines Benutzers überprüfen, beispielsweise wenn dieser sich anmeldet.

Eine Instanz eines `AuthenticatorAssertionResponse`-Objekts ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das durch einen erfolgreichen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wird.

Diese Schnittstelle erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf Kontexte der obersten Ebene beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das Informationen vom Authentifikator enthält, wie zum Beispiel den Relying Party ID Hash (rpIdHash), einen Zähler für Signaturen, Prüfflaggen für Anwesenheit und Benutzerüberprüfung sowie alle vom Authentifikator verarbeiteten Erweiterungen.
- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben wurden, um sich mit diesem Credential zu authentifizieren — das heißt, wenn [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) mit der Option `publicKey` aufgerufen wird. Diese Daten enthalten einige Informationen aus den Optionen, die beim `get()`-Aufruf übergeben werden, sowie einige Informationen, die vom Browser gesteuert werden.
- [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) {{ReadOnlyInline}}
  - : Eine Assertion-Signatur über [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) und [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON). Die Assertion-Signatur wird mit dem privaten Schlüssel des Schlüsselpaares erstellt, das während des ursprünglichen Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt wurde und durch den öffentlichen Schlüssel desselben Schlüsselpaares verifiziert.
- [`AuthenticatorAssertionResponse.userHandle`](/de/docs/Web/API/AuthenticatorAssertionResponse/userHandle) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das einen undurchsichtigen Benutzer-Identifikator enthält, der als `user.id` in den Optionen angegeben ist, die an den ursprünglichen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wurden.

## Instanz-Methoden

Keine.

## Beispiele

Siehe [Abrufen eines öffentlichen Schlüssel-Credentials](/de/docs/Web/API/CredentialsContainer/get#retrieving_a_public_key_credential) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse): die Schnittstelle für die Art von Antwort, die bei der Erstellung eines neuen Credentials gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): die übergeordnete Schnittstelle
