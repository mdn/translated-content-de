---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der
[`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein
{{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel enthält, sowie eine Signatur über das
gesamte `attestationObject` mit einem privaten Schlüssel, der im
Authenticator gespeichert ist, wenn er hergestellt wird.

Im Rahmen des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authenticator
ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel,
der dem privaten Schlüssel entspricht, der die Attestationssignatur erstellt hat, ist wohlbekannt; es gibt jedoch verschiedene gut bekannte Attestationskettenschlüssel für verschiedene
Ecosysteme (zum Beispiel Android- oder TPM-Attestationen).

## Wert

Nach der Dekodierung des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) codierten
`ArrayBuffer` wird das resultierende JavaScript-Objekt die folgenden
Eigenschaften enthalten:

- `authData`

  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt verfügbar gemacht wird (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Map ist.

    Das gleiche Feld [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Wenn es in einer Attestation verwendet wird, enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld wird nicht verwendet, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das Feld attestedCredentialData enthält die `credentialId` und `credentialPublicKey`.

- `fmt`

  - : Ein Textstring, der das Format des attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Anzahl von Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats); jedoch können Formate auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg) registriert werden. Formen,
    die von WebAuthn definiert sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestationsaussage, die das von `"fmt"` definierte Format hat. Weitere
    Informationen finden Sie in der [WebAuthn-Spezifikation zu jedem Format](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Beispiele

Siehe [Erstellen eines öffentlichen Schlüsselanmeldedatensatzes](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Aussage mit
  einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authenticator in `attStmt`,
  mit der angegebenen Transportoption `attestation` enthalten ist.
