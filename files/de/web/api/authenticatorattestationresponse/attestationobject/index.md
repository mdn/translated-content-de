---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der den neuen öffentlichen Schlüssel sowie eine Signatur über das gesamte `attestationObject` mit einem privaten Schlüssel enthält, der im Authenticator gespeichert ist, wenn dieser hergestellt wird.

Als Teil des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) wird ein Authenticator ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar erstellen. Der öffentliche Schlüssel, der dem privaten Schlüssel entspricht, der die Attestationssignatur erstellt hat, ist bekannt; jedoch gibt es verschiedene bekannte Attestations-Öffentlich-Schlüsselketten für unterschiedliche Ökosysteme (z.B. Android oder TPM-Attestierungen).

## Wert

Nach der Dekodierung des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-codierten `ArrayBuffer` enthält das resultierende JavaScript-Objekt die folgenden Eigenschaften:

- `authData`
  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als eine Eigenschaft in einem JavaScript-Objekt verfügbar ist (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Map ist.

    Dasselbe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Feld wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Bei der Verwendung in der Attestation enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es im `AuthenticatorAssertionResponse` verwendet wird. Das attestedCredentialData-Feld enthält die `credentialId` und `credentialPublicKey`.

- `fmt`
  - : Ein Textstring, der das Format der attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Reihe von Formaten](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats); jedoch können Formate auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://w3c.github.io/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn definierte Formate sind:
    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestationsaussage, die im von `"fmt"` definierten Format ist. Für Details zu jedem Format [siehe die WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats).

## Beispiele

Siehe [Erstellung eines öffentlichen Schlüssel-Zertifikats](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Erklärung mit einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authenticator in `attStmt` enthalten ist, mit der angegebenen `attestation`-Transportoption.
