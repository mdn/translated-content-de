---
title: "AuthenticatorAttestationResponse: attestationObject-Eigenschaft"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die **`attestationObject`**-Eigenschaft der
[`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse)-Schnittstelle gibt ein
{{jsxref("ArrayBuffer")}} zurück, das den neuen öffentlichen Schlüssel sowie die Signatur über das
gesamte `attestationObject` mit einem privaten Schlüssel enthält, der im
Authentifikator gespeichert ist, wenn er hergestellt wird.

Im Rahmen des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authentifikator
ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel,
der dem privaten Schlüssel entspricht, der die Attestierungs-Signatur erstellt hat, ist bekannt; es gibt jedoch verschiedene bekannte Attestierungs-Öffentliche-Schlüsselketten für unterschiedliche
Ökosysteme (zum Beispiel Android oder TPM-Attestierungen).

## Wert

Nach der Dekodierung des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-kodierten
`ArrayBuffer` wird das resultierende JavaScript-Objekt die folgenden
Eigenschaften enthalten:

- `authData`

  - : Die [Authentifikator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für den Vorgang. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData`-Daten als Eigenschaft in einem JavaScript-Objekt freigelegt werden (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData`-Daten eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Karte sind.

    Das gleiche [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Feld wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Wenn es in der Attestierung verwendet wird, enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist nicht enthalten, wenn es in der `AuthenticatorAssertionResponse` verwendet wird. Das attestedCredentialData-Feld enthält die `credentialId` und `credentialPublicKey`.

- `fmt`

  - : Ein Text-String, der das Format der attStmt angibt. Die [WebAuthn-Spezifikation definiert eine Anzahl von Formaten](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats); es können jedoch auch Formate in anderen Spezifikationen definiert und in einem [IANA-Register](https://w3c.github.io/webauthn/#sctn-att-fmt-reg) registriert werden. Formate, die von WebAuthn definiert werden, sind:

    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestierungs-Aussage, die im Format von `"fmt"` definiert ist. Für
    weitere Details zu jedem Format, [sehen Sie die WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats).

## Beispiele

Siehe [Erstellen eines Public-Key-Zertifikats](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential) für ein detailliertes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode, die verwendet wird, um eine Aussage mit
  einer kryptografischen `challenge` zu erstellen, deren Signatur durch den Authentifikator in `attStmt` enthalten ist,
  mit der angegebenen `attestation`-Transportoption.
