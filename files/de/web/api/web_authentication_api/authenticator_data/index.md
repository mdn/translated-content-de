---
title: Authenticator data
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authenticator-Datenstruktur enthält Informationen des Authenticators über die Verarbeitung einer Anfrage zur Erstellung oder Authentifizierung von Anmeldedaten — wie den Hash der Relying Party ID (`rpIdHash`), einen Signaturzähler, Test der Benutzerpräsenz, Benutzerauthentifizierungs-Flags und alle vom Authenticator verarbeiteten Erweiterungen. Diese Seite erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf die Authenticator-Daten

Authenticator-Daten werden dem Browser als ein {{jsxref("ArrayBuffer")}} zur Verfügung gestellt und können auf verschiedene Weise abgerufen werden. Die zwei bequemsten Möglichkeiten sind:

- In der [`PublicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData)-Eigenschaft, die auf dem von einer erfolgreichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Anfrage (Erstellung von Anmeldedaten) zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird.
- Über die [`PublicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData)-Methode, die auf dem von einer erfolgreichen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get)-Anfrage (Authentifizierung) zurückgegebenen [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird.

## Datenstruktur

Ein Authenticator-Daten-{{jsxref("ArrayBuffer")}} ist mindestens 37 Bytes lang und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)

  - : Der SHA-256-Hash der [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier), für die die Anmeldeinformationen bestimmt sind. Der Server stellt sicher, dass dieser Hash mit dem SHA256-Hash der eigenen Relying Party ID übereinstimmt, um Phishing oder andere Man-in-the-Middle-Angriffe zu verhindern.

- **flags** (1 Byte)

  - : Ein Bitfeld, das verschiedene Attribute anzeigt, die vom Authenticator festgestellt wurden. Die Bits sind wie folgt, wobei Bit 0 das am wenigsten signifikante Bit ist und alle nicht speziell erwähnten Bits "für zukünftige Verwendung reserviert" sind:

    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d.h. auf `1`), hat der Authenticator bestätigt, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP), wie das Drücken eines Knopfes am Authenticator, anwesend war.
    - Bit 2, Benutzerverifizierung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch biometrische Merkmale, PIN oder andere Methoden verifiziert.
    - Bit 3, Backup-Berechtigung (BE): Wenn gesetzt, ist die öffentliche Schlüsselan-forderungsquelle, die der Authenticator zur Erstellung einer Aussage verwendet hat, backup-berechtigt. Das bedeutet, dass sie auf irgendeine Weise gesichert werden kann (z. B. über Cloud- oder lokales Netzwerksynchronisierung) und daher möglicherweise auf einem anderen als ihrem Ersteller-Authenticator vorhanden sein kann. Backup-berechtigte Anmeldequellen sind daher auch als Multi-Device-Anmeldedaten bekannt.
    - Bit 4, Backup-Status (BS): Wenn gesetzt, ist die öffentliche Schlüsselan-forderungsquelle derzeit gesichert (siehe Bit 3 für Kontext).
    - Bit 6, Attestierte Anmeldedaten (AT): Wenn gesetzt, folgen die attestierten Anmeldedaten direkt den ersten 37 Bytes dieser `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen den attestierten Anmeldedaten, falls vorhanden, oder folgen unmittelbar den ersten 37 Bytes der `authenticatorData`, wenn keine attestierten Anmeldedaten vorhanden sind.

- **signCount** (4 Bytes)

  - : Ein Signaturzähler, falls vom Authenticator unterstützt (ansonsten auf 0 gesetzt). Server können optional diesen Zähler verwenden, um eine Authenticator-Duplikation zu erkennen.

- **attestedCredentialData** (variable Länge)

  - : Die erstellten Anmeldedaten. Diese sind nur während einer [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Anfrage vorhanden. Dies ist eine Byte-Sequenz mit dem folgenden Format:

    - **AAGUID** (16 Bytes): Der Authenticator Attestation Globally Unique Identifier, eine eindeutige Nummer, die das Modell des Authenticators identifiziert (nicht die spezifische Instanz des Authenticators). Eine Relying Party kann dies verwenden, um die Eigenschaften des Authenticators zu ermitteln, indem sie dessen Metadatenliste über den [FIDO-Metadatendienst](https://fidoalliance.org/metadata/) abruft. Dies ist in bestimmten Situationen relevant, wie z. B. bei Unternehmenseinsätzen oder wenn regulatorische Anforderungen einen bestimmten Typ von Authenticator vorschreiben; ansonsten sollte es ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der direkt nachfolgenden Anmelde-ID.
    - **_credentialId_** (variable Länge): Eine eindeutige Kennung für diese Anmeldedaten, sodass sie für zukünftige Authentifizierungen angefordert werden kann. Die Anmelde-ID ist "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-kodierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server gespeichert, der mit dem Konto eines Benutzers verbunden ist, und für zukünftige Authentifizierungen verwendet. Relying Parties können die DER-kodierte Form davon abrufen, ohne die COSE-kodierten Authenticator-Daten über die [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey)-Methode zu parsen.

- **Erweiterungen** (variable Länge)

  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049)-Karte, die die Antwortausgaben von Erweiterungen enthält, die vom Authenticator verarbeitet wurden.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Browser immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er diese einfach. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication Extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authenticator-Daten enthalten nur die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Browser (Client) verarbeitet wurden, können über [`PublicKeyCredential.getClientExtensionResults`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) abgerufen werden.

## Siehe auch

[Definition der Authenticator-Daten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
