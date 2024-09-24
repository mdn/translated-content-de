---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAttestationResponse`**-Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Berechtigungsregistrierung. Sie enthält Informationen über die Berechtigung, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie z.B. die Berechtigungs-ID und den öffentlichen Schlüssel.

Eine `AuthenticatorAttestationResponse`-Objektinstanz ist in der {{domxref("PublicKeyCredential.response", "response")}}-Eigenschaft eines {{domxref("PublicKeyCredential")}}-Objekts verfügbar, das von einem erfolgreichen Aufruf von {{domxref("CredentialsContainer.create()")}} zurückgegeben wird.

Diese Schnittstelle erbt von {{domxref("AuthenticatorResponse")}}.

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf Kontexte der obersten Ebene beschränkt. Die Verwendung ihrer Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, {{domxref("AuthenticatorResponse")}}._

- {{domxref("AuthenticatorAttestationResponse.attestationObject")}} {{ReadOnlyInline}}

  - : Ein {{jsxref("ArrayBuffer")}}, der Authenticator-Daten und eine Attestationsaussage für ein neues Schlüsselpaar enthält, das vom Authenticator generiert wurde.

- {{domxref("AuthenticatorResponse.clientDataJSON")}} {{ReadOnlyInline}}
  - : Geerbt von {{domxref("AuthenticatorResponse")}}, enthält diese Eigenschaft die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authenticator übergeben werden, um diese Berechtigung zu generieren – also, wenn {{domxref("CredentialsContainer.create()")}} mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen von den in den `create()`-Aufruf übergebenen Optionen und einige Informationen, die vom Browser kontrolliert werden.

## Instanzmethoden

- {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData()")}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die im {{domxref("AuthenticatorAttestationResponse.attestationObject")}}-Eigenschaft enthaltenen Authenticator-Daten enthält.
- {{domxref("AuthenticatorAttestationResponse.getPublicKey()")}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die DER `SubjectPublicKeyInfo` des neuen Berechtigungsnachweises enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn diese nicht verfügbar ist.
- {{domxref("AuthenticatorAttestationResponse.getPublicKeyAlgorithm()")}}
  - : Gibt eine Zahl zurück, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für den neuen Berechtigungsnachweis verwendet wird.
- {{domxref("AuthenticatorAttestationResponse.getTransports()")}}
  - : Gibt ein Array von Zeichenfolgen zurück, das beschreibt, welche Transportmethoden (z.B. `usb`, `nfc`) voraussichtlich mit dem Authenticator unterstützt werden. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselberechtigungsnachweises mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("AuthenticatorAssertionResponse")}}: die Schnittstelle für den Antworttyp, der bei der Abrufung eines bestehenden Berechtigungsnachweises gegeben wird
- {{domxref("AuthenticatorResponse")}}: die übergeordnete Schnittstelle
