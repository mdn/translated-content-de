---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAssertionResponse`**-Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) enthält eine [digitale Signatur](/de/docs/Glossary/Signature/Security) vom privaten Schlüssel eines bestimmten WebAuthn-Anmeldedatensatzes. Der Server der vertrauenden Partei kann diese Signatur verifizieren, um einen Benutzer zu authentifizieren, zum Beispiel, wenn er sich anmeldet.

Ein `AuthenticatorAssertionResponse`-Objekt befindet sich in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts, das durch einen erfolgreichen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wird.

Diese Schnittstelle erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf Top-Level-Kontexte beschränkt. Die Verwendung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das Informationen vom Authentifikator enthält, wie zum Beispiel den Relying Party ID Hash (rpIdHash), einen Signaturzähler, Flags zur Überprüfung der Benutzersichtbarkeit und Benutzerverifizierung sowie alle vom Authentifikator verarbeiteten Erweiterungen.
- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben werden, um mit diesem Anmeldedatensatz zu authentifizieren — d.h., wenn [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen von den Optionen, die an den `get()`-Aufruf übergeben wurden, und einige Informationen, die vom Browser kontrolliert werden.
- [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) {{ReadOnlyInline}}
  - : Eine Bestätigungssignatur über [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) und [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON). Die Bestätigungssignatur wird mit dem privaten Schlüssel des Schlüsselpaares erstellt, das während des ursprünglichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs erstellt wurde und mit dem öffentlichen Schlüssel desselben Schlüsselpaares verifiziert wird.
- [`AuthenticatorAssertionResponse.userHandle`](/de/docs/Web/API/AuthenticatorAssertionResponse/userHandle) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der eine undurchsichtige Benutzerkennung enthält, die als `user.id` in den an den ursprünglichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf übergebenen Optionen angegeben wird.

## Instanz-Methoden

Keine.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse): die Schnittstelle für den Typ der Antwort, die bei der Erstellung eines neuen Anmeldedatensatzes gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): die übergeordnete Schnittstelle
