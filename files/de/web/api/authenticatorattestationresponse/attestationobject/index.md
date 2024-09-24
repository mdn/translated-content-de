---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der
{{domxref("AuthenticatorAttestationResponse")}} Schnittstelle gibt ein
{{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel sowie eine Signatur über das gesamte `attestationObject` mit einem privaten Schlüssel enthält, der beim Herstellungsprozess im Authentifikator gespeichert wird.

Im Rahmen des Aufrufs von {{domxref("CredentialsContainer.create()")}} wird ein Authentifikator ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar erstellen. Der öffentliche Schlüssel, der dem privaten Schlüssel, welches die Attestationssignatur erstellt hat, entspricht, ist bekannt; es gibt jedoch verschiedene bekannte Attestationsketten von öffentlichen Schlüsseln für unterschiedliche Ökosysteme (zum Beispiel Android oder TPM-Attestationen).

## Wert

Nach dem Dekodieren des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) codierten `ArrayBuffer` wird das resultierende JavaScript-Objekt die folgenden Eigenschaften enthalten:

- `authData`

  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in {{domxref("AuthenticatorAssertionResponse")}}, die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt offengelegt wird (siehe {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}), während in {{domxref("AuthenticatorAttestationResponse")}}, die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949) Karte ist.

    Das gleiche Feld {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Bei der Verwendung in der Attestation enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das attestedCredentialData-Feld enthält die `credentialId` und den `credentialPublicKey`.

- `fmt`

  - : Ein Textstring, der das Format der attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Anzahl an Formaten](https://www.w3.org/TR/webauthn/#defined-attestation-formats); jedoch können Formate auch in anderen Spezifikationen definiert und in einem [IANA-Register](https://www.w3.org/TR/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn definierte Formate sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestationsaussage, die im Format von `"fmt"` definiert ist. Für nun, [sehen Sie die WebAuthn-Spezifikation für Details zu jedem Format](https://www.w3.org/TR/webauthn/#defined-attestation-formats).

## Beispiele

Sehen Sie [Erstellen eines öffentlichen Schlüsselanmeldedatensatzes mit der WebAuthn-API](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential_using_the_webauthn_api) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CredentialsContainer.create()")}}: die Methode, die verwendet wird, um eine Aussage mit einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authentifikator in `attStmt` enthalten ist, mit der spezifizierten `attestation` Transportoption.
