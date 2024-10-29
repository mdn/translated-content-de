---
title: Attestation und Assertion
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("Web Authentication API")}}

Im WebAuthn gibt es zwei unterschiedliche Arten von Zertifikaten, die für die Registrierung und Authentifizierung verwendet werden. Sie haben ähnliche Namen und Zwecke, aber das Verständnis der Unterschiede kann anfangs für Verwirrung sorgen. Die folgenden Abschnitte beschreiben die Attestation, die während der Registrierung erfolgt, und die Assertion, die während der Authentifizierung stattfindet.

## Attestation

Wenn ein Authenticator ein neues Schlüsselpaar bei einem Dienst registriert, signiert der Authenticator den öffentlichen Schlüssel mit einem Attestationszertifikat. Das Attestationszertifikat wird während der Herstellung in den Authenticator eingebaut und ist spezifisch für ein Gerätemodell. Das bedeutet, dass alle "Samsung Galaxy S8"-Telefone, die zu einem bestimmten Zeitpunkt oder in einer bestimmten Produktionsreihe hergestellt wurden, dasselbe Attestationszertifikat haben.

Die Attestation wird über die WebAuthn-API als [AuthenticatorAttestationResponse](/de/docs/Web/API/AuthenticatorAttestationResponse) zurückgegeben. Das Attestationsformat enthält zwei grundlegende {{jsxref("ArrayBuffer")}} Objekte:

- **clientDataJSON** - Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser gesehen hat, als er zur Authentifizierung aufgefordert wurde.
- [attestationObject](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - Kryptographische Attestation, dass ein neu generiertes Schlüsselpaar von diesem Authenticator erstellt wurde. Dies enthält:
  - [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die ein `attestedCredentialData`-Feld enthalten, das wiederum die `credentialId` und `credentialPublicKey` enthält. Die `attestedCredentialData` ist ein optionales Feld, das bei der Attestation verwendet wird. Es wird nicht verwendet, wenn es in der AuthenticatorAssertionResponse verwendet wird.
  - Eine Attestationsaussage, die optional vorhanden ist, abhängig davon, ob die vertrauende Partei eine Attestation anfordert. Im Allgemeinen wird den vertrauenden Parteien nicht empfohlen, eine Attestation anzufordern, so dass es wahrscheinlicher ist, dass diese Aussage nicht vorhanden ist.

Verschiedene Geräte haben unterschiedliche Attestationsformate. Die [vordefinierten Attestationsformate in WebAuthn](https://www.w3.org/TR/webauthn/#defined-attestation-formats) sind:

- **Packed** - ein generisches Attestationsformat, das häufig von Geräten verwendet wird, deren einzige Funktion als WebAuthn-Authenticator ist, wie z. B. Sicherheitsschlüssel.
- **TPM** - das Trusted Platform Module (TPM) ist eine Reihe von Spezifikationen der Trusted Platform Group (TPG). Dieses Attestationsformat findet sich häufig in Desktop-Computern und wird von Windows Hello als bevorzugtes Attestationsformat verwendet.
- **Android Key Attestation** - eine der in Android O hinzugefügten Funktionen war die Android Key Attestation, die es dem Android-Betriebssystem ermöglicht, Schlüssel zu attestieren.
- **Android SafetyNet** - vor der Android Key Attestation war die einzige Option für Android-Geräte die Erstellung von Android SafetyNet-Attestationen.
- **FIDO U2F** - Sicherheitsschlüssel, die den FIDO U2F-Standard implementieren, verwenden dieses Format.
- **none** - Browser können Benutzer auffordern, ob sie möchten, dass eine Website ihre Attestationsdaten sehen darf, und/oder können Attestationsdaten aus der Antwort des Authenticators entfernen, wenn der `attestation`-Parameter in `navigator.credentials.create()` auf `none` gesetzt ist.

Der Zweck der Attestation besteht darin, kryptographisch zu beweisen, dass ein neu generiertes Schlüsselpaar von einem bestimmten Gerät stammt. Dies bietet eine Vertrauenswurzel für ein neu generiertes Schlüsselpaar und ermöglicht es, die Attribute eines verwendeten Geräts zu identifizieren (wie der private Schlüssel geschützt ist; ob / welche Art von Biometrie verwendet wird; ob ein Gerät zertifiziert wurde; etc.). Es sollte beachtet werden, dass, obwohl die Attestation die Fähigkeit für eine Vertrauenswurzel bietet, die Validierung der Vertrauenswurzel häufig nicht notwendig ist. Bei der Registrierung eines Authenticators für ein neues Konto gilt typischerweise ein "Trust On First Use" (TOFU)-Modell, und beim Hinzufügen eines Authenticators zu einem bestehenden Konto wurde ein Benutzer bereits authentifiziert und hat eine sichere Sitzung etabliert.

## Assertion

Wenn ein Benutzer sich entscheidet, bei einem Dienst einzuloggen, sendet der Server eine Herausforderung und der Authenticator signiert diese mit einem zuvor bei dem Dienst registrierten Schlüsselpaar. Dies erzeugt eine Assertion. Im Gegensatz zur Attestation ist das Format der Assertion immer gleich, unabhängig vom verwendeten Gerät.

Die Assertion wird über die WebAuthn-API als [AuthenticatorAssertionResponse](/de/docs/Web/API/AuthenticatorAssertionResponse) zurückgegeben. Das Assertion-Format ist recht einfach, da es vier grundlegende ArrayBuffers enthält:

- [clientDataJSON](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) - Dasselbe wie bei der Attestation. Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser sah, als er zur Authentifizierung aufgefordert wurde.
- [authenticatorData](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - Daten, die vom Authenticator erstellt und/oder verwendet werden (siehe auch [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data)).
- **signature** - eine Signatur über die clientDataJSON und authenticatorData, die mit dem während der Registrierung erstellten öffentlichen Schlüssel verifiziert werden kann.
- **userHandle** - Optional. (Nullable) Ein Benutzeridentifikator. Dies kann ein Benutzername sein, oder ein Hash eines Benutzernamens etc. Wird von einem Dienst verwendet, um Anmeldedaten einen Geltungsbereich zu geben. Maximale Länge von 64 Byte. Ältere Authenticators (U2F) unterstützen diese Ausgabe nicht.

Es ist wichtig hervorzuheben, dass die Signatur für die Assertion ein anderes Schlüsselpaar verwendet als die Attestation. Eine Assertion wird mit dem Schlüsselpaar für einen Dienst signiert, das während der Registrierung generiert wurde. Eine Attestation wird mit dem Attestationsprivatschlüssel und dem Attestationszertifikat signiert, die in alle Modelle desselben Geräts eingebrannt sind. (Mit Ausnahme im Falle der Selbst-Attestation.)
