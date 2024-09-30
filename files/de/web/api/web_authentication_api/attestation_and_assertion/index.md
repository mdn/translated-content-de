---
title: Attestation und Assertion
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{DefaultAPISidebar("Web Authentication API")}}

Es gibt zwei verschiedene Arten von Zertifikaten, die in WebAuthn für Registrierung und Authentifizierung verwendet werden. Sie haben ähnliche Namen und ähnliche Zwecke, aber das Verständnis der Unterschiede kann anfänglich verwirrend sein. Die folgenden Abschnitte beschreiben die Attestation, die während der Registrierung erfolgt, und die Assertion, die während der Authentifizierung erfolgt.

## Attestation

Wenn ein Authenticator ein neues Schlüsselpaar bei einem Dienst registriert, signiert der Authenticator den öffentlichen Schlüssel mit einem Attestationszertifikat. Das Attestationszertifikat wird während der Herstellung in den Authenticator eingebaut und ist spezifisch für ein Gerätemodell. Das bedeutet, dass alle "Samsung Galaxy S8"-Telefone, die zu einem bestimmten Zeitpunkt oder in einer bestimmten Produktionsreihe hergestellt wurden, dasselbe Attestationszertifikat besitzen.

Die Attestation wird über die WebAuthn API als [AuthenticatorAttestationResponse](/de/docs/Web/API/AuthenticatorAttestationResponse) zurückgegeben. Das Attestationsformat enthält zwei grundlegende {{jsxref("ArrayBuffer")}} Objekte:

- **clientDataJSON** - Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser bei einer Authentifizierungsanfrage gesehen hat.
- [attestationObject](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - Kryptografische Attestation, dass ein neu generiertes Schlüsselpaar von diesem Authenticator erstellt wurde. Dies enthält:
  - [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die ein `attestedCredentialData`-Feld enthalten, welches wiederum die `credentialId` und `credentialPublicKey` enthält. Das `attestedCredentialData` ist ein optionales Feld, das in der Attestation verwendet wird. Es ist nicht enthalten, wenn es in der AuthenticatorAssertionResponse verwendet wird.
  - Eine Attestationsaussage, die je nach Anforderung der relying party optional vorhanden ist. Im Allgemeinen wird relying parties nicht empfohlen, eine Attestation anzufordern, daher ist es wahrscheinlicher, dass diese Aussage nicht vorhanden ist.

Verschiedene Geräte haben unterschiedliche Attestationsformate. Die [vordefinierten Attestationsformate in WebAuthn](https://www.w3.org/TR/webauthn/#defined-attestation-formats) sind:

- **Packed** - ein generisches Attestationsformat, das häufig von Geräten verwendet wird, deren einzige Funktion als WebAuthn-Authenticator ist, wie z.B. Sicherheitsschlüssel.
- **TPM** - das Trusted Platform Module (TPM) ist eine Menge von Spezifikationen der Trusted Platform Group (TPG). Dieses Attestationsformat ist häufig in Desktop-Computern zu finden und wird von Windows Hello als bevorzugtes Attestationsformat verwendet.
- **Android Key Attestation** - eine der Funktionen, die in Android O hinzugefügt wurden, war die Android Key Attestation, die es dem Android-Betriebssystem ermöglicht, Schlüssel zu attestieren.
- **Android SafetyNet** - vor der Android Key Attestation war die einzige Option für Android-Geräte, Android SafetyNet-Attestationen zu erstellen.
- **FIDO U2F** - Sicherheitsschlüssel, die den FIDO U2F Standard implementieren, verwenden dieses Format.
- **none** - Browser können Benutzer fragen, ob sie einer Seite erlauben möchten, ihre Attestationsdaten zu sehen, und/oder können Attestationsdaten aus der Antwort des Authenticators entfernen, wenn der `attestation` Parameter in `navigator.credentials.create()` auf `none` gesetzt ist.

Der Zweck der Attestation ist es, kryptografisch zu beweisen, dass ein neu generiertes Schlüsselpaar von einem bestimmten Gerät stammt. Dies bietet eine Vertrauensbasis für ein neu generiertes Schlüsselpaar und ermöglicht es, die Attribute eines verwendeten Geräts zu identifizieren (wie der private Schlüssel geschützt ist; ob/welche Art von Biometrie verwendet wird; ob ein Gerät zertifiziert wurde; usw.). Es sollte beachtet werden, dass, obwohl die Attestation die Fähigkeit für eine Vertrauensbasis bietet, die Validierung derselben häufig nicht notwendig ist. Bei der Registrierung eines Authenticators für ein neues Konto gilt typischerweise ein Trust On First Use (TOFU) Modell; und beim Hinzufügen eines Authenticators zu einem bestehenden Konto wurde der Benutzer bereits authentifiziert und hat eine sichere Sitzung aufgebaut.

## Assertion

Wenn ein Benutzer sich entscheidet, bei einem Dienst anzumelden, sendet der Server eine Herausforderung, die der Authenticator mit einem zuvor bei diesem Dienst registrierten Schlüsselpaar signiert. Dies erzeugt eine Assertion. Im Gegensatz zur Attestation ist das Format der Assertion immer gleich, unabhängig davon, welches Gerät verwendet wird.

Die Assertion wird über die WebAuthn API als [AuthenticatorAssertionResponse](/de/docs/Web/API/AuthenticatorAssertionResponse) zurückgegeben. Das Assertionsformat ist ziemlich einfach, da es vier grundlegende ArrayBuffers enthält:

- [clientDataJSON](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) - Dasselbe wie bei der Attestation. Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser bei einer Authentifizierungsanfrage gesehen hat.
- [authenticatorData](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - Daten, die vom Authenticator erstellt und/oder verwendet werden (siehe auch [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data)).
- **signature** - eine Signatur über die clientDataJSON und authenticatorData, die mit dem während der Registrierung erstellten öffentlichen Schlüssel verifiziert werden kann.
- **userHandle** - Optional. (Nullable) Ein Benutzerkennzeichen. Dies kann ein Benutzername, oder ein Hash eines Benutzernamens usw. sein. Wird von einem Dienst verwendet, um den Anmeldedaten einen Scope zu geben. Maximale Länge von 64 Bytes. Ältere Authenticatoren (U2F) unterstützen diese Ausgabe nicht.

Es ist wichtig hervorzuheben, dass die Signatur für die Assertion ein anderes Schlüsselpaar verwendet als die Attestation. Eine Assertion wird mit dem Schlüsselpaar für einen Dienst signiert, das während der Registrierung generiert wurde. Eine Attestation wird mit dem privaten Attestationsschlüssel und dem Attestationszertifikat signiert, die in alle Modelle desselben Geräts integriert wurden. (Außer im Fall der Selbstattestation.)
