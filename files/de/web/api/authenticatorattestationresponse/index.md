---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`AuthenticatorAttestationResponse`** Interface der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Credential-Registrierung. Es enthält Informationen über das Credential, die der Server benötigt, um WebAuthn-Bestätigungen durchzuführen, wie z. B. seine Credential-ID und den öffentlichen Schlüssel.

Eine Instanz des `AuthenticatorAttestationResponse`-Objekts ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response) Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) Objekts verfügbar, das von einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wurde.

Dieses Interface erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist auf Top-Level-Kontexte beschränkt. Die Nutzung seiner Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements wird keine Wirkung haben.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}

  - : Ein {{jsxref("ArrayBuffer")}}, der Authentifikator-Daten und eine Attestierungserklärung für ein neues Schlüsselpaar enthält, das vom Authentifikator generiert wurde.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Geerbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse), enthält diese Eigenschaft die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben wurden, um dieses Credential zu erstellen — d.h. wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den Optionen, die in den `create()`-Aufruf übergeben wurden, sowie einige vom Browser kontrollierte Informationen.

## Instanz-Methoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authentifikator-Daten enthält, die innerhalb der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die DER `SubjectPublicKeyInfo` des neuen Credentials enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, falls diese Information nicht verfügbar ist.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus darstellt, der für das neue Credential verwendet wird.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Strings zurück, das beschreibt, welche Transportmethoden (z.B. `usb`, `nfc`) voraussichtlich mit dem Authentifikator unterstützt werden. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Credentials](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): das Interface für den Typ der Antwort, der bei der Abfrage eines bestehenden Credentials gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): das übergeordnete Interface
