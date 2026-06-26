---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`AuthenticatorAttestationResponse`**-Interface der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Anmeldeinformation-Registrierung. Es enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie zum Beispiel die Anmeldeinformations-ID und den öffentlichen Schlüssel.

Eine Instanz des `AuthenticatorAttestationResponse`-Objekts ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das durch einen erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wird.

Dieses Interface erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist auf Kontexte der obersten Ebene beschränkt. Die Nutzung seiner Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements wird keine Wirkung haben.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}} der Authentifikator-Daten und eine Attestierungserklärung für ein neues Schlüsselpaar, das vom Authentifikator generiert wurde.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) geerbt; diese Eigenschaft enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben wurden, um diese Anmeldeinformation zu generieren — d.h. wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit der `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den an den `create()`-Aufruf übergebenen Optionen sowie einige Informationen, die vom Browser kontrolliert werden.

## Instanz-Methoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authentifikator-Daten enthält, die in der Eigenschaft [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) enthalten sind.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die DER `SubjectPublicKeyInfo` der neuen Anmeldeinformation enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/info/rfc5280/#section-4.1.2.7)), oder `null`, wenn dies nicht verfügbar ist.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht, der den kryptografischen Algorithmus darstellt, der für die neue Anmeldeinformation verwendet wird.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Zeichenfolgen zurück, die beschreiben, welche Transportmethoden (z.B. `usb`, `nfc`) vermutlich vom Authentifikator unterstützt werden. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Siehe [Erstellen einer öffentlichen Schlüssel-Anmeldeinformation](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): das Interface für den Antworttyp, der beim Abrufen einer vorhandenen Anmeldeinformation gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): das Eltern-Interface
