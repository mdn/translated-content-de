---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel sowie eine Signatur über das gesamte `attestationObject` mit einem privaten Schlüssel enthält, der im Authentifikator gespeichert ist, wenn er hergestellt wird.

Als Teil des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authentifikator ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel, der dem privaten Schlüssel entspricht, der die Beglaubigungssignatur erstellt hat, ist bekannt; es gibt jedoch verschiedene bekannte öffentliche Schlüsselketten für Beglaubigungen in verschiedenen Ökosystemen (zum Beispiel Android oder TPM-Beglaubigungen).

## Wert

Nach der Dekodierung des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) kodierten `ArrayBuffer` wird das resultierende JavaScript-Objekt die folgenden Eigenschaften enthalten:

- `authData`

  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt zugänglich ist (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) Karte ist.

    Dasselbe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Feld wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Wenn es in der Beglaubigung verwendet wird, enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das `attestedCredentialData`-Feld enthält die `credentialId` und den `credentialPublicKey`.

- `fmt`

  - : Ein Textstring, der das Format des attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Vielzahl an Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats); Formate können jedoch auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn definierte Formate sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Beglaubigungserklärung, die im von `"fmt"` definierten Format vorliegt. Sie können [die WebAuthn-Spezifikation für Details zu jedem Format einsehen](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselcredentials mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Erklärung mit einer kryptographischen `challenge` zu erstellen, deren Signatur durch den Authentifikator in `attStmt` enthalten ist, mit der angegebenen `attestation` Transportoption.
