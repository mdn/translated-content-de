---
title: Authenticator-Daten
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authenticator-Datenstruktur enthält Informationen des Authenticators über die Verarbeitung einer Anfrage zur Erstellung oder Authentifizierung von Anmeldedaten — wie den Relying-Party-ID-Hash (`rpIdHash`), einen Signaturzähler, Test der Benutzerpräsenz, Benutzerauthentifizierungs-Flags und alle vom Authenticator verarbeiteten Erweiterungen. Diese Seite erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf Authenticator-Daten

Authenticator-Daten werden dem Browser als ein {{jsxref("ArrayBuffer")}} bereitgestellt und können auf verschiedene Weise abgerufen werden. Die zwei bequemsten Methoden sind:

- Über die Methode [`PublicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird, der von einem erfolgreichen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) (Erstellung von Anmeldedaten) zurückgegeben wird.
- In der Eigenschaft [`PublicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird, der von einem erfolgreichen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (Authentifizierung) zurückgegeben wird.

## Datenstruktur

Ein Authenticator-Daten-{{jsxref("ArrayBuffer")}} hat eine Mindestlänge von 37 Bytes und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)
  - : Der SHA-256-Hash der [Relying-Party-ID](https://w3c.github.io/webauthn/#relying-party-identifier), der die Anmeldedaten zugeordnet sind. Der Server stellt sicher, dass dieser Hash mit dem SHA256-Hash seiner eigenen Relying-Party-ID übereinstimmt, um Phishing oder andere [Manipulator-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe zu verhindern.
- **flags** (1 Byte)
  - : Ein Bitfeld, das verschiedene vom Authenticator behauptete Attribute anzeigt. Die Bits sind wie folgt, wobei Bit 0 das wenigst signifikante Bit ist und alle nicht speziell unten erwähnten Bits "für zukünftige Verwendung reserviert" sind:
    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d.h. auf `1`), bestätigt der Authenticator, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP), wie das Drücken eines Knopfes am Authenticator, anwesend war.
    - Bit 2, Benutzerauthentifizierung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch ein biometrisches Merkmal, eine PIN oder eine andere Methode verifiziert.
    - Bit 3, Backup-Berechtigung (BE): Wenn gesetzt, ist die vom Authenticator verwendete Public-Key-Credential-Quelle für Sicherungen berechtigt. Das bedeutet, dass sie auf irgendeine Weise gesichert werden kann (z. B. über die Cloud oder lokale Netzwerksynchronisierung) und somit möglicherweise auf einem anderen Authenticator als dem ursprünglichen Authenticator vorhanden wird. Backup-berechtigte Credential-Quellen sind daher auch als Multi-Geräte-Anmeldedaten bekannt.
    - Bit 4, Backup-Status (BS): Wenn gesetzt, ist die Public-Key-Credential-Quelle derzeit gesichert (siehe Bit 3 für Kontext).
    - Bit 6, Belegte Anmeldedaten (AT): Wenn gesetzt, folgen die belegten Anmeldedaten sofort den ersten 37 Bytes dieser `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen belegten Anmeldedaten, wenn diese vorhanden sind, oder folgen unmittelbar den ersten 37 Bytes der `authenticatorData`, wenn keine belegten Anmeldedaten vorhanden sind.

- **signCount** (4 Bytes)
  - : Ein Signaturzähler, falls vom Authenticator unterstützt (andernfalls auf 0 gesetzt). Server können diesen Zähler optional nutzen, um Authenticator-Kloning zu erkennen.
- **attestedCredentialData** (variable Länge)
  - : Die erstellten Anmeldedaten. Diese sind nur während eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs vorhanden. Dies ist eine Byte-Sequenz mit folgendem Format:
    - **AAGUID** (16 Bytes): Der Authenticator Attestation Globally Unique Identifier, eine eindeutige Nummer, die das Modell des Authenticators identifiziert (nicht die spezifische Instanz des Authenticators). Eine Relying-Party kann dies nutzen, um die Eigenschaften des Authenticators herauszufinden, indem sie dessen Metadaten über den [FIDO-Metadatenservice](https://fidoalliance.org/metadata/) abruft. Dies ist in bestimmten Situationen relevant, wie z. B. Unternehmensbereitstellungen oder wo regulatorische Anforderungen einen bestimmten Authenticator-Typ vorschreiben; es sollte sonst ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der unmittelbar danach folgenden Anmelde-ID.
    - **_credentialId_** (variable Länge): Ein eindeutiger Bezeichner für diese Anmeldedaten, damit sie für zukünftige Authentifizierungen angefordert werden können. Die Anmelde-ID ist "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-kodierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server gespeichert, der mit dem Konto eines Benutzers verknüpft ist, und für zukünftige Authentifizierungen verwendet. Relying-Partys können die DER-kodierte Form davon abrufen, ohne die COSE-kodierten Authenticator-Daten zu analysieren, über die Methode [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey).

- **extensions** (variable Länge)
  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049)-Karte, die die Antwortausgaben von Erweiterungen enthält, die vom Authenticator verarbeitet wurden.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Browser immer optional: Erkennt ein Browser eine bestimmte Erweiterung nicht, ignoriert er sie einfach. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [WebAuthn-Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authenticator-Daten enthalten nur die Ergebnisse der vom Authenticator verarbeiteten Erweiterungen. Die Ergebnisse der vom Browser (Client) verarbeiteten Erweiterungen können über [`PublicKeyCredential.getClientExtensionResults`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) abgerufen werden.

## Siehe auch

[Definition von Authenticator-Daten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
