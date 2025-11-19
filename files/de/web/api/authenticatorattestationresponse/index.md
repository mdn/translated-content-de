---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Das **`AuthenticatorAttestationResponse`**-Interface der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Anmeldeinformationsregistrierung. Es enthält Informationen über die Anmeldeinformationen, die der Server benötigt, um WebAuthn-Behauptungen auszuführen, wie z. B. deren Anmeldekennungen und öffentliche Schlüssel.

Eine Instanz des `AuthenticatorAttestationResponse`-Objekts ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das von einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wird.

Dieses Interface erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Dieses Interface ist auf oberste Kontexte beschränkt. Die Verwendung seiner Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Element, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}
  - : Ein {{jsxref("ArrayBuffer")}}, der Authentifikator-Daten und eine Attestation-Aussage für ein neues Schlüsselpaar enthält, das vom Authentifikator generiert wurde.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Diese von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) geerbte Eigenschaft enthält die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authentifikator übergeben wurden, um diese Anmeldeinformationen zu generieren – d.h. wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den in den `create()`-Aufruf übergebenen Optionen und einige Informationen, die vom Browser kontrolliert werden.

## Instanz-Methoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die Authentifikator-Daten enthält, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die DER `SubjectPublicKeyInfo` der neuen Anmeldeinformationen enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)), oder `null`, falls diese nicht verfügbar ist.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einem [COSE-Algorithmus-Identifikator](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptografischen Algorithmus für die neuen Anmeldeinformationen darstellt.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Zeichenfolgen zurück, die beschreiben, welche Transportmethoden (z. B. `usb`, `nfc`) vermutlich mit dem Authentifikator unterstützt werden. Das Array kann leer sein, wenn die Informationen nicht verfügbar sind.

## Beispiele

Siehe [Erstellen einer öffentlichen Schlüssel-Anmeldeinformation](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): das Interface für den Typ der Antwort, die beim Abrufen einer bestehenden Anmeldeinformation gegeben wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): das übergeordnete Interface
