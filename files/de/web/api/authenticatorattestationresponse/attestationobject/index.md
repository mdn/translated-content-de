---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel sowie eine Signatur über das gesamte `attestationObject` mit einem privaten Schlüssel enthält, der im Authenticator bei der Herstellung gespeichert wird.

Im Rahmen des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authenticator ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel, der dem privaten Schlüssel entspricht, der die Attestationssignatur erstellt hat, ist bekannt; jedoch gibt es verschiedene bekannte Attestations-Public-Key-Ketten für unterschiedliche Ökosysteme (zum Beispiel Android- oder TPM-Attestationen).

## Wert

Nach dem Dekodieren des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-kodierten `ArrayBuffer` enthält das resultierende JavaScript-Objekt die folgenden Eigenschaften:

- `authData`

  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt exponiert ist (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während sie in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Karte ist.

    Das gleiche [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Feld wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Bei Verwendung in der Attestation enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das attestedCredentialData-Feld enthält die `credentialId` und `credentialPublicKey`.

- `fmt`

  - : Ein Textstring, der das Format der attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Anzahl von Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats); jedoch können Formate auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn definierte Formate sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestationsaussage, die dem durch `"fmt"` definierten Format entspricht. Für weitere Informationen sehen Sie bitte [die WebAuthn-Spezifikation zu den einzelnen Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Beispiele

Sehen Sie sich [Erstellen eines öffentlichen Schlüsselanmeldedatensatzes mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Erklärung mit einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authenticator in `attStmt` enthalten ist, mit der angegebenen `attestation`-Transportoption.
