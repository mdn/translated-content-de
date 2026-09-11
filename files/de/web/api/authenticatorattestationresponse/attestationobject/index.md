---
title: "AuthenticatorAttestationResponse: Eigenschaft „attestationObject“"
short-title: attestationObject
slug: Web/API/AuthenticatorAttestationResponse/attestationObject
l10n:
  sourceCommit: 381dfaf4d7f555e847b0af726a93ce48cde15915
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

Die Eigenschaft **`attestationObject`** des Interfaces
[`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) gibt einen
{{jsxref("ArrayBuffer")}} zurück, der den neuen öffentlichen Schlüssel sowie eine Signatur über das
gesamte `attestationObject` mit einem privaten Schlüssel enthält, der bei der Herstellung
im Authenticator gespeichert wird.

Im Rahmen des Aufrufs von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt ein Authenticator
ein neues Schlüsselpaar sowie ein `attestationObject` für dieses Schlüsselpaar. Der öffentliche Schlüssel,
der dem privaten Schlüssel entspricht, mit dem die Attestierungssignatur erstellt wurde, ist allgemein
bekannt; allerdings gibt es verschiedene bekannte Attestierungs-Ketten öffentlicher Schlüssel für unterschiedliche
Ökosysteme (beispielsweise Android- oder TPM-Attestierungen).

## Wert

Nach dem Dekodieren des [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-kodierten
`ArrayBuffer` enthält das resultierende JavaScript-Objekt die folgenden
Eigenschaften:

- `authData`
  - : Die [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data) für die Operation. Beachten Sie, dass in [`AuthenticatorAssertionResponse`](/de/docs/Web/API/AuthenticatorAssertionResponse) die `authenticatorData` als Eigenschaft in einem JavaScript-Objekt verfügbar gemacht wird (siehe [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)), während in [`AuthenticatorAttestationResponse`](/de/docs/Web/API/AuthenticatorAttestationResponse) die `authenticatorData` eine Eigenschaft in einer [CBOR](https://datatracker.ietf.org/doc/html/rfc8949)-Map ist.

    Dasselbe Feld [`AuthenticatorAssertionResponse.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) wird sowohl von `AuthenticatorAttestationResponse` als auch von `AuthenticatorAssertionResponse` verwendet. Bei der Verwendung für die Attestierung enthält es ein optionales Feld, `attestedCredentialData`. Dieses Feld ist bei der Verwendung in `AuthenticatorAssertionResponse` nicht enthalten. Das Feld `attestedCredentialData` enthält `credentialId` und `credentialPublicKey`.

- `fmt`
  - : Eine Textzeichenfolge, die das Format von `attStmt` angibt. Die [WebAuthn-Spezifikation definiert eine Reihe von Formaten](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats); Formate können jedoch auch
    in anderen Spezifikationen definiert und in einer [IANA-Registry](https://w3c.github.io/webauthn/#sctn-att-fmt-reg) registriert werden. Von WebAuthn
    definierte Formate sind:
    - `"packed"`
    - `"tpm"`
    - `"android-key"`
    - `"android-safetynet"`
    - `"fido-u2f"`
    - `"none"`

- `attStmt`
  - : Eine Attestierungserklärung im durch `"fmt"` definierten Format. Weitere
    Details zu jedem Format finden Sie vorerst in der [WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats).

## Beispiele

Ein ausführliches Beispiel finden Sie unter [Erstellen einer Public-Key-Credential](/de/docs/Web/API/CredentialsContainer/create#creating_a_public_key_credential).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create): die Methode zum Erstellen einer Erklärung mit einer kryptografischen `challenge`, deren Signatur durch den Authenticator in `attStmt` enthalten ist, mit der angegebenen Transportoption `attestation`.
