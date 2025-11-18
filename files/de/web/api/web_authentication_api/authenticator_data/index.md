---
title: Authenticator-Daten
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authenticator-Datenstruktur enthält Informationen vom Authenticator über die Verarbeitung einer Anfrage zur Erstellung oder Authentifizierung von Anmeldeinformationen — wie den Relying Party ID Hash (`rpIdHash`), einen Signaturzähler, den Test der Benutzerpräsenz, Benutzerüberprüfungs-Flags und alle vom Authenticator verarbeiteten Erweiterungen. Auf dieser Seite wird erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf Authenticator-Daten

Authenticator-Daten werden dem Browser als {{jsxref("ArrayBuffer")}} zur Verfügung gestellt und können auf verschiedene Weise abgerufen werden. Die zwei bequemsten Methoden sind:

- In der [`PublicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData) Eigenschaft, die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird, das aus einem erfolgreichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) (Anmeldeinformationenerstellung) Aufruf zurückgegeben wird.
- Über die [`PublicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData) Methode, die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar gemacht wird, das aus einem erfolgreichen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (Authentifizierung) Aufruf zurückgegeben wird.

## Datenstruktur

Ein Authenticator-Daten-{{jsxref("ArrayBuffer")}} ist mindestens 37 Bytes lang und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)
  - : Der SHA-256 Hash der [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier), auf die die Anmeldeinformationen bezogen sind. Der Server stellt sicher, dass dieser Hash mit dem SHA256-Hash seiner eigenen Relying Party ID übereinstimmt, um Phishing oder andere Man-in-the-Middle-Angriffe zu verhindern.
- **flags** (1 Byte)
  - : Ein Bitfeld, das verschiedene Attribute angibt, die vom Authenticator bestätigt wurden. Die Bits sind wie folgt, wobei Bit 0 das am wenigsten signifikante Bit ist und alle nicht unten genannten Bits "für zukünftige Verwendung reserviert" sind:
    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d.h. auf `1`), hat der Authenticator bestätigt, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP), zum Beispiel durch Berühren eines Knopfes auf dem Authenticator, anwesend war.
    - Bit 2, Benutzerüberprüfung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch biometrische Identifikation, PIN oder andere Methode überprüft.
    - Bit 3, Sicherungsberechtigung (BE): Wenn gesetzt, ist die öffentliche Schlüsselquelle, die vom Authenticator zur Generierung einer Bestätigung verwendet wird, sicherungsberechtigt. Dies bedeutet, dass sie in irgendeiner Weise (zum Beispiel via Cloud- oder lokalen Netzwerksynchronisierung) gesichert werden kann und somit möglicherweise auf einem anderen Authenticator als dem, der sie generiert hat, vorhanden sein könnte. Sicherungsberechtigte Anmeldequellen werden daher auch als Multi-Geräte-Anmeldeinformationen bezeichnet.
    - Bit 4, Sicherungsstatus (BS): Wenn gesetzt, ist die öffentliche Schlüsselquelle derzeit gesichert (siehe Bit 3 für Kontext).
    - Bit 6, Attestierte Anmeldeinformationen-Daten (AT): Wenn gesetzt, folgen die attestierten Anmeldeinformationen-Daten unmittelbar auf die ersten 37 Bytes dieses `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen den attestierten Anmeldeinformationen-Daten, wenn sie vorhanden sind, oder folgen unmittelbar auf die ersten 37 Bytes der `authenticatorData`, wenn keine attestierten Anmeldeinformationen-Daten vorhanden sind.

- **signCount** (4 Bytes)
  - : Ein Signaturzähler, wenn vom Authenticator unterstützt (anders auf 0 gesetzt). Server können diesen Zähler optional verwenden, um die Klonung des Authenticators zu erkennen.
- **attestedCredentialData** (variable Länge)
  - : Die Anmeldeinformationen, die erstellt wurden. Diese sind nur bei einem [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) Aufruf vorhanden. Dies ist eine Byte-Sequenz mit dem folgenden Format:
    - **AAGUID** (16 Bytes): Der Authenticator Attestation Globally Unique Identifier, eine eindeutige Nummer, die das Modell des Authenticators identifiziert (nicht die spezifische Instanz des Authenticators). Eine vertrauende Partei kann diese verwenden, um anhand der FIDO-Metadaten-Dienst die Eigenschaften des Authenticators zu ermitteln. Dies ist in bestimmten Situationen relevant, wie zum Beispiel bei Unternehmensbereitstellungen oder wenn gesetzliche Anforderungen die Verwendung eines bestimmten Authentifikatortyps vorschreiben; ansonsten sollte es ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der Anmelde-ID, die diesen Bytes unmittelbar folgt.
    - **_credentialId_** (variable Länge): Ein eindeutiger Bezeichner für diese Anmeldeinformationen, um sie für zukünftige Authentifizierungen anfordern zu können. Die Anmeldeinformationen sind "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-codierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server im Zusammenhang mit dem Konto eines Benutzers gespeichert und für zukünftige Authentifizierungen verwendet. Die vertrauende Parteien können die DER-codierte Form davon abrufen, ohne die COSE-codierten Authenticator-Daten zu analysieren, über die [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) Methode.

- **extensions** (variable Länge)
  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049) Karte, die die Antwortausgaben von Erweiterungen enthält, die vom Authenticator verarbeitet wurden.

    Erweiterungen sind optional, und unterschiedliche Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Browser stets optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird sie einfach ignoriert. Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authenticator-Daten enthalten nur die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden. Die Ergebnisse von Erweiterungen, die vom Browser (Client) verarbeitet wurden, können über [`PublicKeyCredential.getClientExtensionResults`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) abgerufen werden.

## Siehe auch

[Definition der Authenticator-Daten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
