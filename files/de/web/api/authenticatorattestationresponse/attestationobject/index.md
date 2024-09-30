---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft des [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Interfaces gibt ein {{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel sowie die Signatur über das gesamte `attestationObject` mit einem privaten Schlüssel enthält, der im Authentifikator gespeichert ist, wenn er hergestellt wird.

Im Rahmen des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authentifikator ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel, der dem privaten Schlüssel entspricht, der die Attestationssignatur erstellt hat, ist allgemein bekannt. Es gibt jedoch verschiedene bekannte Attestations-Kettenschlüssel für unterschiedliche Ökosysteme (zum Beispiel Android- oder TPM-Attestationen).

## Wert

Nach Dekodierung des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) kodierten `ArrayBuffer` enthält das resultierende JavaScript-Objekt die folgenden Eigenschaften:

- `authData`

  - : Die [Authentifikator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt freigelegt wird (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Karte ist.

    Dasselbe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Feld wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Wenn es in der Attestation verwendet wird, enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das Feld attestedCredentialData enthält die `credentialId` und `credentialPublicKey`.

- `fmt`

  - : Ein Textstring, der das Format der attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Anzahl von Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats); jedoch können Formate auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn definierte Formate sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestationsaussage, die dem von `"fmt"` definierten Format entspricht.
    Für weitere Informationen siehe [die WebAuthn-Spezifikation zu den einzelnen Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüssel-Anmeldedatensatzes mit der WebAuthn API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein ausführliches Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Aussage mit einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authentifikator in `attStmt` enthalten ist, mit der angegebenen `attestation`-Transportoption.
