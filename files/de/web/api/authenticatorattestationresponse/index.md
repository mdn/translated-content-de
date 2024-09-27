---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`AuthenticatorAttestationResponse`** Schnittstelle der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) ist das Ergebnis einer WebAuthn-Anmeldeinformationen-Registrierung. Sie enthält Informationen über die Anmeldeinformation, die der Server benötigt, um WebAuthn-Aussagen durchzuführen, wie z.B. die Anmeldeinformation-ID und den öffentlichen Schlüssel.

Ein `AuthenticatorAttestationResponse` Objekt ist in der [`response`](/de/docs/Web/API/PublicKeyCredential/response)-Eigenschaft eines [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential)-Objekts verfügbar, das durch einen erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben wird.

Diese Schnittstelle erbt von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse).

{{InheritanceDiagram}}

> [!NOTE]
> Diese Schnittstelle ist auf oberste Kontexte beschränkt. Die Nutzung ihrer Funktionen innerhalb eines {{HTMLElement("iframe")}}-Elements hat keine Wirkung.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse)._

- [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) {{ReadOnlyInline}}

  - : Ein {{jsxref("ArrayBuffer")}}, der Authenticator-Daten und eine Attestationsaussage für ein neues Schlüsselpaar enthält, das vom Authenticator generiert wurde.

- [`AuthenticatorResponse.clientDataJSON`](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) {{ReadOnlyInline}}
  - : Von [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse) geerbt, enthält diese Eigenschaft die JSON-kompatible Serialisierung der Daten, die vom Browser an den Authenticator übergeben werden, um diese Anmeldeinformation zu erzeugen – d.h., wenn [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) mit einer `publicKey`-Option aufgerufen wird. Diese Daten enthalten einige Informationen aus den Optionen, die beim Aufruf von `create()` übergeben werden, sowie einige vom Browser kontrollierte Informationen.

## Instanz-Methoden

- [`AuthenticatorAttestationResponse.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die Authenticator-Daten enthält, die in der [`AuthenticatorAttestationResponse.attestationObject`](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject)-Eigenschaft enthalten sind.
- [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die DER `SubjectPublicKeyInfo` der neuen Anmeldeinformation enthält (siehe [Subject Public Key Info](https://www.rfc-editor.org/rfc/rfc5280#section-4.1.2.7)) oder `null`, falls nicht verfügbar.
- [`AuthenticatorAttestationResponse.getPublicKeyAlgorithm()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm)
  - : Gibt eine Zahl zurück, die einem [COSE Algorithm Identifier](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) entspricht und den kryptographischen Algorithmus für die neue Anmeldeinformation darstellt.
- [`AuthenticatorAttestationResponse.getTransports()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getTransports)
  - : Gibt ein Array von Zeichenfolgen zurück, das beschreibt, welche Transportmethoden (z.B. `usb`, `nfc`) mit dem Authenticator unterstützt werden. Das Array kann leer sein, wenn die Information nicht verfügbar ist.

## Beispiele

Siehe [Erstellen einer öffentlichen Schlüsselanmeldeinformation mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse): die Schnittstelle für den Antworttyp, wenn eine bestehende Anmeldeinformation abgerufen wird
- [`AuthenticatorResponse`](/de/docs/Web/API/AuthenticatorResponse): die übergeordnete Schnittstelle
