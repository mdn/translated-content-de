---
title: Authenticator-Daten
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authenticator-Datenstruktur enthält Informationen vom Authenticator über die Verarbeitung eines Anmeldedatensatz-Erstellungs- oder Authentifizierungsanforderungsprozesses — wie den Relying Party-ID-Hash (`rpIdHash`), einen Signaturzähler, den Test der Benutzerpräsenz, Benutzervalidierungsflags und alle vom Authenticator verarbeiteten Erweiterungen. Diese Seite erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf Authenticator-Daten

Authenticator-Daten werden dem Browser als {{jsxref("ArrayBuffer")}} bereitgestellt und können auf verschiedene Weise abgerufen werden. Die beiden bequemsten Methoden sind:

- In der Eigenschaft [`PublicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar ist, das von einem erfolgreichen Aufruf von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) (Anmeldedatensatz-Erstellung) zurückgegeben wird.
- Über die Methode [`PublicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar ist, das von einem erfolgreichen Aufruf von [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (Authentifizierung) zurückgegeben wird.

## Datenstruktur

Ein Authenticator-Daten-{{jsxref("ArrayBuffer")}} ist mindestens 37 Bytes lang und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)
  - : Der SHA-256-Hash der [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier), auf die der Anmeldedatensatz beschränkt ist. Der Server wird sicherstellen, dass dieser Hash mit dem SHA-256-Hash seiner eigenen Relying Party ID übereinstimmt, um Phishing oder andere Man-in-the-Middle-Angriffe zu verhindern.
- **flags** (1 Byte)

  - : Ein Bitfeld, das verschiedene Attribute angibt, die vom Authenticator bestätigt wurden. Die Bits sind wie folgt, wobei Bit 0 das am wenigsten signifikante Bit ist und alle nicht speziell unten erwähnten Bits "für zukünftige Verwendung reserviert" sind:

    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d.h. auf `1`), hat der Authenticator bestätigt, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP) anwesend war, beispielsweise durch das Drücken eines Knopfes auf dem Authenticator.
    - Bit 2, Benutzervalidierung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch Biometrie, PIN oder eine andere Methode überprüft.
    - Bit 3, Backup-Berechtigung (BE): Wenn gesetzt, ist die vom Authenticator zur Erstellung einer Behauptung verwendete Public-Key-Anmeldedatensatzquelle backup-fähig. Das bedeutet, dass es in irgendeiner Form gesichert werden kann (zum Beispiel über Cloud- oder lokale Netzwerksynchronisation) und somit auf einem anderen Authenticator als dem generierenden Authenticator vorhanden sein kann. Backup-fähige Anmeldedatensatzquellen sind daher auch als Mehrgeräteanmeldedaten bekannt.
    - Bit 4, Backup-Status (BS): Wenn gesetzt, wird die Public-Key-Anmeldedatensatzquelle derzeit gesichert (siehe Bit 3 für den Kontext).
    - Bit 6, Bestätigte Anmeldedaten (AT): Wenn gesetzt, folgen die bestätigten Anmeldedaten unmittelbar den ersten 37 Bytes dieser `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen den bestätigten Anmeldedaten, wenn diese vorhanden sind, oder folgen unmittelbar den ersten 37 Bytes der `authenticatorData`, wenn keine bestätigten Anmeldedaten vorhanden sind.

- **signCount** (4 Bytes)
  - : Ein Signaturzähler, falls vom Authenticator unterstützt (ansonsten auf 0 gesetzt). Server können diesen Zähler optional verwenden, um Authenticator-Klonung zu erkennen.
- **attestedCredentialData** (variable Länge)

  - : Die erstellten Anmeldedaten. Dies ist nur während eines Aufrufs von [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) vorhanden. Dies ist eine Byte-Sequenz mit folgendem Format:

    - **AAGUID** (16 Bytes): Der Authenticator Attestation Globally Unique Identifier, eine eindeutige Zahl, die das Modell des Authenticators identifiziert (nicht die spezifische Instanz des Authenticators). Eine Relying Party kann diese verwenden, um die Eigenschaften des Authenticators durch Nachschlagen seiner Metadatenerklärung über den [FIDO Metadata Service](https://fidoalliance.org/metadata/) herauszufinden. Dies ist in bestimmten Situationen relevant, wie z.B. unternehmenseinsätze oder wo regulatorische Anforderungen einen bestimmten Typ von Authenticator vorschreiben; andernfalls sollte es ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der Anmeldedaten-ID, die diesen Bytes unmittelbar folgt.
    - **_credentialId_** (variable Länge): Ein eindeutiger Identifikator für diese Anmeldedaten, damit sie für zukünftige Authentifizierungen angefordert werden können. Die Anmeldedaten sind "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-codierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server gespeichert, der mit einem Benutzerkonto verknüpft ist, und für zukünftige Authentifizierungen verwendet. Relying Parties können die DER-codierte Form davon ohne das Parsen der COSE-codierten Authenticator-Daten über die Methode [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) abrufen.

- **extensions** (variable Länge)

  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049)-Karte, die die Antwortausgaben von Erweiterungen enthält, die vom Authenticator verarbeitet wurden.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Das Verarbeiten von Erweiterungen ist für den Browser stets optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication Extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authenticator-Daten enthalten nur die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Browser (Client) verarbeitet wurden, können über [`PublicKeyCredential.getClientExtensionResults`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) abgerufen werden.

## Siehe auch

[Definition von Authenticator-Daten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
