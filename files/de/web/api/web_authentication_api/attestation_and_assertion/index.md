---
title: Attestierung und Behauptung
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{DefaultAPISidebar("Web Authentication API")}}

Es gibt zwei verschiedene Arten von Zertifikaten, die im WebAuthn für Registrierung und Authentifizierung verwendet werden. Sie haben ähnliche Namen und ähnliche Zwecke, aber die Unterschiede zu verstehen, kann anfänglich verwirrend sein. Die folgenden Abschnitte beschreiben die Attestierung, die während der Registrierung erfolgt, und die Behauptung, die während der Authentifizierung erfolgt.

## Attestierung

Wenn ein Authenticator ein neues Schlüsselpaar bei einem Dienst registriert, signiert der Authenticator den öffentlichen Schlüssel mit einem Attestierungszertifikat. Das Attestierungszertifikat ist während der Herstellung in den Authenticator integriert und ist spezifisch für ein Gerätemodell. Das heißt, alle "Samsung Galaxy S8" Telefone, die zu einem bestimmten Zeitpunkt oder in einer bestimmten Fertigungsreihe hergestellt wurden, haben dasselbe Attestierungszertifikat.

Die Attestierung wird über die WebAuthn API als [AuthenticatorAttestationResponse](/de/docs/Web/API/AuthenticatorAttestationResponse) zurückgegeben. Das Attestierungsformat enthält zwei grundlegende {{jsxref("ArrayBuffer")}} Objekte:

- **clientDataJSON** - Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser sah, als er zur Authentifizierung aufgefordert wurde.
- [attestationObject](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - Kryptographische Attestierung, dass ein neu generiertes Schlüsselpaar von diesem Authenticator erstellt wurde. Dies enthält:
  - [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), die ein `attestedCredentialData`-Feld enthalten, das wiederum `credentialId` und `credentialPublicKey` enthält. Die `attestedCredentialData` ist ein optionales Feld, das in der Attestierung verwendet wird. Es wird nicht enthalten, wenn es in der AuthenticatorAssertionResponse verwendet wird.
  - Eine Attestierungsaussage, die je nach Anfrage der vertrauenden Partei optional vorhanden ist. Im Allgemeinen werden vertrauende Parteien nicht ermutigt, eine Attestierung anzufordern, daher ist es wahrscheinlicher, dass diese Aussage nicht vorhanden ist.

Verschiedene Geräte haben unterschiedliche Attestierungsformate. Die [vordefinierten Attestierungsformate in WebAuthn](https://www.w3.org/TR/webauthn/#defined-attestation-formats) sind:

- **Packed** - ein generisches Attestierungsformat, das häufig von Geräten verwendet wird, deren einzige Funktion es ist, als WebAuthn Authenticator zu dienen, wie zum Beispiel Sicherheitsschlüssel.
- **TPM** - das Trusted Platform Module (TPM) ist eine Reihe von Spezifikationen der Trusted Platform Group (TPG). Dieses Attestierungsformat findet man häufig auf Desktop-Computern und wird von Windows Hello als bevorzugtes Attestierungsformat verwendet.
- **Android Key Attestation** - eines der in Android O hinzugefügten Features war Android Key Attestation, das es dem Android-Betriebssystem ermöglicht, Schlüssel zu attestieren.
- **Android SafetyNet** - vor Android Key Attestation war die einzige Option für Android-Geräte die Erstellung von Android SafetyNet-Attestierungen.
- **FIDO U2F** - Sicherheitsschlüssel, die den FIDO U2F-Standard implementieren, verwenden dieses Format.
- **none** - Browser können Benutzer fragen, ob sie einer Website erlauben möchten, ihre Attestierungsdaten zu sehen, und/oder Attestierungsdaten aus der Antwort des Authenticators entfernen, wenn der `attestation`-Parameter in `navigator.credentials.create()` auf `none` gesetzt ist.

Der Zweck der Attestierung besteht darin, kryptografisch zu beweisen, dass ein neu generiertes Schlüsselpaar von einem bestimmten Gerät stammt. Dies bietet eine Vertrauensbasis für ein neu generiertes Schlüsselpaar sowie die Möglichkeit, die Attribute eines verwendeten Geräts zu identifizieren (wie der private Schlüssel geschützt ist; ob/ welche Art von Biometrie verwendet wird; ob ein Gerät zertifiziert wurde; usw.). Es sollte beachtet werden, dass, während die Attestierung die Fähigkeit für eine Vertrauensbasis bietet, die Validierung der Vertrauensbasis häufig nicht notwendig ist. Beim Registrieren eines Authenticators für ein neues Konto gilt typischerweise ein Trust-On-First-Use (TOFU)-Modell; und beim Hinzufügen eines Authenticators zu einem bestehenden Konto ist ein Benutzer bereits authentifiziert und hat eine sichere Sitzung etabliert.

## Behauptung

Wenn ein Benutzer sich entschließt, sich bei einem Dienst anzumelden, sendet der Server eine Herausforderung, und der Authenticator signiert diese mit einem Schlüsselpaar, das zuvor bei diesem Dienst registriert wurde. Dies erzeugt eine Behauptung. Im Gegensatz zur Attestierung ist das Format der Behauptung immer dasselbe, unabhängig davon, welches Gerät verwendet wird.

Die Behauptung wird über die WebAuthn API als [AuthenticatorAssertionResponse](/de/docs/Web/API/AuthenticatorAssertionResponse) zurückgegeben. Das Behauptungsformat ist ziemlich einfach, da es vier grundlegende ArrayBuffers enthält:

- [clientDataJSON](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) - Das gleiche wie bei der Attestierung. Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser sah, als er zur Authentifizierung aufgefordert wurde.
- [authenticatorData](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - Daten, die vom Authenticator erstellt und/oder verwendet werden (siehe auch [Authentificator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data)).
- **signature** - Eine Signatur über die clientDataJSON und authenticatorData, die mit dem während der Registrierung erstellten öffentlichen Schlüssel verifiziert werden kann.
- **userHandle** - Optional. (Nullable) Ein Benutzerkennzeichen. Dies kann ein Benutzername oder ein Hash eines Benutzernamens sein usw. Wird von einem Dienst verwendet, um eine Zuordnung zu Anmeldeinformationen herzustellen. Maximale Länge von 64 Bytes. Ältere Authenticatoren (U2F) unterstützen diese Ausgabe nicht.

Es ist wichtig zu betonen, dass die Signatur für die Behauptung ein anderes Schlüsselpaar als die Attestierung verwendet. Eine Behauptung wird mit dem Schlüsselpaar für einen Dienst signiert, das während der Registrierung erstellt wurde. Eine Attestierung wird mit dem privaten Attestierungsschlüssel und dem Attestierungszertifikat signiert, die in alle Modelle desselben Geräts eingebrannt wurden. (Außer im Fall von Selbstattestierung.)
