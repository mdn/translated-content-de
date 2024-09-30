---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAttestationResponse`**-Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Anmeldeinformationen Registrierung. Sie enthält Informationen über die Anmeldeinformationen, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie z.B. die Anmeldeinformations-ID und den öffentlichen Schlüssel.

Eine Instanz eines `AuthenticatorAttestationResponse`-Objekts ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das durch einen erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wird.

Diese Schnittstelle erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf Kontexte der obersten Ebene beschränkt. Die Verwendung ihrer Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements wird keine Auswirkungen haben.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}

  - : Ein {{jsxref("ArrayBuffer")}}, das Authentifikator-Daten und eine Attestation-Erklärung für ein neues Schlüsselpaar enthält, das vom Authentifikator generiert wurde.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) geerbt, enthält diese Eigenschaft die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben werden, um diese Anmeldeinformationen zu generieren — d.h., wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den in den `create()`-Aufruf übergebenen Optionen und einige Informationen, die vom Browser kontrolliert werden.

## Instanz-Methoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authentifikator-Daten enthält, die innerhalb der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das das DER `SubjectPublicKeyInfo` der neuen Anmeldeinformationen enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einem [COSE-Algorithmus-Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für die neuen Anmeldeinformationen verwendet wird.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Zeichenfolgen zurück, das beschreibt, welche Transportmethoden (z.B., `usb`, `nfc`) mit dem Authentifikator unterstützt werden sollen. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Siehe [Erstellen einer öffentlichen Schlüssel-Anmeldeinformation mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): die Schnittstelle für den Antworttyp, der beim Abrufen einer bestehenden Anmeldeinformation gegeben wird.
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): die Elternschnittstelle
