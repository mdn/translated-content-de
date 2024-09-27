---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`AuthenticatorAssertionResponse`**-Interface der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) enthält eine [digitale Signatur](/de/docs/Glossary/Signature/Security) aus dem privaten Schlüssel eines bestimmten WebAuthn-Zertifikats. Der Server der vertrauenden Partei kann diese Signatur überprüfen, um einen Benutzer zu authentifizieren, zum Beispiel, wenn er sich anmeldet.

Eine `AuthenticatorAssertionResponse`-Objektinstanz ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das von einem erfolgreichen Rückruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) zurückgegeben wurde.

Dieses Interface erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist auf kontextübergreifende Verwendung beschränkt. Die Nutzung innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das Informationen vom Authenticator enthält, wie z.B. den Relying Party ID Hash (rpIdHash), einen Signaturzähler, Test der Benutzerpräsenz und Benutzerverifikationsflaggen sowie alle vom Authenticator verarbeiteten Erweiterungen.
- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authenticator übergeben wurden, um sich mit diesem Zertifikat zu authentifizieren — z.B., wenn [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den Optionen, die im `get()`-Aufruf übergeben wurden, sowie einige Informationen, die vom Browser kontrolliert werden.
- [`AuthenticatorAssertionResponse.signature`](/de/docs/Web/API/AuthenticatorAssertionResponse/signature) {{ReadOnlyInline}}
  - : Eine Assertions-Signatur über [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) und [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON). Die Assertions-Signatur wird mit dem privaten Schlüssel des Schlüsselpaares erstellt, das während des ursprünglichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs erstellt wurde, und mit dem öffentlichen Schlüssel desselben Schlüsselpaares überprüft.
- [`AuthenticatorAssertionResponse.userHandle`](/de/docs/Web/API/AuthenticatorAssertionResponse/userHandle) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, das einen undurchsichtigen Benutzerbezeichner enthält, der als `user.id` in den Optionen angegeben ist, die beim ursprünglichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf übergeben wurden.

## Instanz-Methoden

Keine.

## Beispiele

Siehe [Benutzeranmeldung mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/get#user_login_using_the_webauthn_api) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse): das Interface für die Art von Antwort, die beim Erstellen eines neuen Zertifikats gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): das Eltern-Interface
