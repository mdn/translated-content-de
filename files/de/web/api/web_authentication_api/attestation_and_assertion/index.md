---
title: Attestation und Assertion
slug: Web/API/Web_Authentication_API/Attestation_and_Assertion
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Web Authentication API")}}

Es gibt zwei verschiedene Arten von Zertifikaten, die in WebAuthn für die Registrierung und Authentifizierung verwendet werden. Sie haben ähnliche Namen und ähnliche Zwecke, aber das Verständnis der Unterschiede kann zunächst zu Verwirrung führen. Die folgenden Abschnitte beschreiben die Attestation, die während der Registrierung erfolgt, und die Assertion, die während der Authentifizierung stattfindet.

## Attestation

Wenn ein Authenticator ein neues Schlüsselpaar bei einem Dienst registriert, signiert der Authenticator den öffentlichen Schlüssel mit einem Attestationszertifikat. Das Attestationszertifikat ist während der Herstellungszeit im Authenticator eingebaut und ist spezifisch für ein Gerätemodell. Das bedeutet, dass alle "Samsung Galaxy S8"-Telefone, die zu einer bestimmten Zeit oder in einem bestimmten Produktionslauf hergestellt wurden, dasselbe Attestationszertifikat besitzen.

Die Attestation wird über die WebAuthn API als [AuthenticatorAttestationResponse](/de/docs/Web/API/AuthenticatorAttestationResponse) zurückgegeben. Das Attestationsformat enthält zwei grundlegende {{jsxref("ArrayBuffer")}}-Objekte:

- **clientDataJSON** - Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser sah, als er zur Authentifizierung aufgefordert wurde.
- [attestationObject](/de/docs/Web/API/AuthenticatorAttestationResponse/attestationObject) - Kryptographische Attestation, dass ein neu generiertes Schlüsselpaar von diesem Authenticator erstellt wurde. Dies enthält:
  - [Authenticator-Daten](/de/docs/Web/API/Web_Authentication_API/Authenticator_data), welche ein `attestedCredentialData`-Feld enthalten, das wiederum die `credentialId` und `credentialPublicKey` beinhaltet. Die `attestedCredentialData` ist ein optionales Feld, das in der Attestation verwendet wird. Es ist nicht enthalten, wenn es in der AuthenticatorAssertionResponse verwendet wird.
  - Eine Attestationsaussage, die optional je nach Anforderung des Dienstleisters vorhanden ist. Im Allgemeinen wird es nicht empfohlen, eine Attestation anzufordern, daher ist es wahrscheinlicher, dass diese Aussage nicht vorhanden ist.

Verschiedene Geräte haben unterschiedliche Attestationsformate. Die [vordefinierten Attestationsformate in WebAuthn](https://w3c.github.io/webauthn/#sctn-defined-attestation-formats) sind:

- **Packed** - ein generisches Attestationsformat, das häufig von Geräten verwendet wird, deren einzige Funktion ein WebAuthn-Authenticator ist, wie z.B. Sicherheitsschlüssel.
- **TPM** - das Trusted Platform Module (TPM) ist ein Satz von Spezifikationen der Trusted Platform Group (TPG). Dieses Attestationsformat findet sich häufig in Desktop-Computern und wird von Windows Hello als bevorzugtes Attestationsformat verwendet.
- **Android Key Attestation** - eines der in Android O hinzugefügten Features war Android Key Attestation, das es dem Android-Betriebssystem ermöglicht, Schlüssel zu attestieren.
- **Android SafetyNet** - vor Android Key Attestation war die einzige Option für Android-Geräte, Android SafetyNet-Attestationen zu erstellen.
- **FIDO U2F** - Sicherheitsschlüssel, die den FIDO U2F-Standard implementieren, verwenden dieses Format.
- **none** - Browser können Benutzer darauf hinweisen, ob eine Webseite berechtigt ist, ihre Attestationsdaten zu sehen, und/oder können Attestationsdaten aus der Antwort des Authenticators entfernen, wenn der `attestation`-Parameter in `navigator.credentials.create()` auf `none` gesetzt ist.

Der Zweck der Attestation ist es, kryptographisch zu beweisen, dass ein neu generiertes Schlüsselpaar von einem bestimmten Gerät stammt. Dies bietet eine Vertrauensbasis für ein neu generiertes Schlüsselpaar sowie die Möglichkeit, die Eigenschaften eines verwendeten Geräts zu identifizieren (wie der private Schlüssel geschützt ist, ob / welche Art Biometrik verwendet wird, ob ein Gerät zertifiziert wurde, etc.). Es sollte beachtet werden, dass, obwohl die Attestation die Fähigkeit für eine Vertrauensbasis bietet, die Validierung dieser Vertrauensbasis häufig nicht erforderlich ist. Bei der Registrierung eines Authenticators für ein neues Konto wird typischerweise ein Trust On First Use (TOFU) Modell angewendet; und beim Hinzufügen eines Authenticators zu einem bestehenden Konto wurde ein Benutzer bereits authentifiziert und hat eine sichere Sitzung etabliert.

## Assertion

Wenn ein Benutzer sich entscheidet, sich bei einem Dienst anzumelden, sendet der Server eine Herausforderung, und der Authenticator signiert diese mit einem zuvor bei diesem Dienst registrierten Schlüsselpaar. Dies erzeugt eine Assertion. Im Gegensatz zur Attestation ist das Format der Assertion immer dasselbe, unabhängig davon, welches Gerät verwendet wird.

Die Assertion wird über die WebAuthn API als [AuthenticatorAssertionResponse](/de/docs/Web/API/AuthenticatorAssertionResponse) zurückgegeben. Das Assertion-Format ist relativ einfach, da es vier grundlegende ArrayBuffer enthält:

- [clientDataJSON](/de/docs/Web/API/AuthenticatorResponse/clientDataJSON) - Dasselbe wie bei der Attestation. Ein ArrayBuffer, der eine JSON-Darstellung dessen enthält, was der Browser sah, als er zur Authentifizierung aufgefordert wurde.
- [authenticatorData](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) - Daten, die vom Authenticator erstellt und/oder verwendet werden (siehe auch [authenticator data](/de/docs/Web/API/Web_Authentication_API/Authenticator_data)).
- **signature** - eine Signatur über die clientDataJSON und authenticatorData, die mit dem während der Registrierung erstellten öffentlichen Schlüssel verifiziert werden kann.
- **userHandle** - Optional. (Nullable) Ein Benutzeridentifikator. Dies kann ein Benutzername, ein Hash eines Benutzernamens usw. sein. Wird von einem Dienst verwendet, um einen Bereich für Anmeldeinformationen zu definieren. Maximale Länge von 64 Bytes. Ältere Authenticatoren (U2F) unterstützen diese Ausgabe nicht.

Es ist wichtig hervorzuheben, dass die Signatur für die Assertion ein anderes Schlüsselpaar als die Attestation verwendet. Eine Assertion wird unter Verwendung des Schlüsselpaares für einen Dienst signiert, das während der Registrierung generiert wurde. Eine Attestation wird mit dem Attestations-Privatschlüssel und dem Attestationszertifikat signiert, die in alle Modelle desselben Geräts eingebaut wurden. (Außer im Fall der Selbst-Attestation.)
