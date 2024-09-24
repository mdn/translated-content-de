---
title: Authentifikatordaten
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authentifikatordatentstruktur enthält Informationen vom Authenticator über die Verarbeitung einer Anmeldeinformations-, Erstellungs- oder Authentifizierungsanfrage — wie den Relying Party ID-Hash (`rpIdHash`), einen Signaturzähler, Test der Benutzerpräsenz, Benutzerüberprüfungsflaggen und etwaige Erweiterungen, die vom Authenticator verarbeitet wurden. Diese Seite erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf Authentifikatordaten

Authentifikatordaten werden dem Browser als {{jsxref("ArrayBuffer")}} zur Verfügung gestellt und können auf verschiedene Weise zugegriffen werden. Die beiden bequemsten Methoden sind:

- In der {{domxref("AuthenticatorAssertionResponse.authenticatorData", "PublicKeyCredential.response.authenticatorData")}}-Eigenschaft, die über die {{domxref("PublicKeyCredential")}} verfügbar ist, die bei einem erfolgreichen Aufruf von {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} (Erstellung von Anmeldeinformationen) zurückgegeben wird.
- Über die {{domxref("AuthenticatorAttestationResponse.getAuthenticatorData", "PublicKeyCredential.response.getAuthenticatorData()")}}-Methode, die über die {{domxref("PublicKeyCredential")}} verfügbar ist, die bei einem erfolgreichen Aufruf von {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} (Authentifizierungsanfrage) zurückgegeben wird.

## Datenstruktur

Ein Authentifikator-Daten {{jsxref("ArrayBuffer")}} hat mindestens eine Länge von 37 Bytes und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)
  - : Der SHA-256-Hash der [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier), dem die Anmeldeinformation zugeordnet ist. Der Server wird sicherstellen, dass dieser Hash mit dem SHA256-Hash seiner eigenen Relying Party ID übereinstimmt, um Phishing oder andere Man-in-the-Middle-Angriffe zu verhindern.
- **flags** (1 Byte)

  - : Ein Bitfeld, das verschiedene Attribute anzeigt, die vom Authenticator bestätigt wurden. Die Bits sind wie folgt, wobei Bit 0 das am wenigsten signifikante Bit ist und alle hier nicht speziell erwähnten Bits "für zukünftige Verwendung reserviert" sind:

    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d. h. auf `1`), hat der Authenticator validiert, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP), z. B. durch Betätigen eines Knopfes am Authenticator, anwesend war.
    - Bit 2, Benutzerüberprüfung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch biometrische Daten, PIN oder eine andere Methode überprüft.
    - Bit 3, Sicherungsberechtigung (BE): Wenn gesetzt, ist die vom Authenticator zur Erzeugung einer Bestätigung verwendete Public-Key-Anmeldeinformationsquelle sicherungsfähig. Das bedeutet, dass sie auf irgendeine Weise gesichert werden kann (zum Beispiel über Cloud- oder lokales Netzwerksynchronisation) und daher auf einem anderen Authenticator als dem erzeugenden Authenticator verfügbar werden kann. Sicherungsfähige Anmeldeinformationsquellen sind daher auch als Mehrgeräteanmeldedaten bekannt.
    - Bit 4, Sicherungszustand (BS): Wenn gesetzt, ist die Public-Key-Anmeldeinformationsquelle derzeit gesichert (siehe Bit 3 für den Kontext).
    - Bit 6, Bestätigte Anmeldeinformationen (AT): Wenn gesetzt, folgen die bestätigten Anmeldeinformationen unmittelbar den ersten 37 Bytes dieses `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen den bestätigten Anmeldeinformationen, wenn sie vorhanden sind, oder folgen unmittelbar den ersten 37 Bytes der `authenticatorData`, wenn keine bestätigten Anmeldeinformationen vorhanden sind.

- **signCount** (4 Bytes)
  - : Ein Signaturzähler, sofern vom Authenticator unterstützt (anderenfalls auf 0 gesetzt). Server können optional diesen Zähler verwenden, um eine Klonierung des Authenticators zu erkennen.
- **attestedCredentialData** (variable Länge)

  - : Die Anmeldeinformation, die erstellt wurde. Diese ist nur bei einem Aufruf von {{domxref("CredentialsContainer.create", "navigator.credentials.create()")}} vorhanden. Dies ist eine Bytesequenz mit dem folgenden Format:

    - **AAGUID** (16 Bytes): Der Authenticator Attestation Globally Unique Identifier, eine eindeutige Nummer, die das Modell des Authenticators (nicht die spezifische Instanz des Authenticators) identifiziert. Eine vertrauende Partei kann dies verwenden, um die Eigenschaften des Authenticators herauszufinden, indem sie die Metadatenangabe über den [FIDO-Metadatenservice](https://fidoalliance.org/metadata/) abruft. Dies ist in bestimmten Situationen relevant, wie z.B. bei Unternehmenseinsätzen oder wenn regulatorische Anforderungen den Einsatz eines bestimmten Typs von Authenticator vorschreiben; andernfalls sollte es ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der Anmelde-ID, die diesen Bytes unmittelbar folgt.
    - **_credentialId_** (variable Länge): Ein eindeutiger Bezeichner für diese Anmeldeinformation, damit sie für zukünftige Authentifizierungen angefordert werden kann. Die Anmeldeinformation ist "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-codierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server im Zusammenhang mit dem Benutzerkonto gespeichert und für zukünftige Authentifizierungen verwendet. Vetrauende Parteien können die DER-codierte Form davon ohne Analyse der COSE-codierten Authenticator-Daten über die Methode {{domxref("AuthenticatorAttestationResponse.getPublicKey()")}} abrufen.

- **extensions** (variable Länge)

  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049)-Karte, die die Antwortausgaben von Erweiterungen enthält, die vom Authenticator verarbeitet wurden.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Browser immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, ignoriert er sie einfach. Weitere Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, finden Sie unter [Web Authentication extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authentifikatordaten enthalten nur die Ergebnisse von Erweiterungen, die vom Authenticator verarbeitet wurden. Ergebnisse von Erweiterungen, die vom Browser (Client) verarbeitet wurden, können über {{domxref("PublicKeyCredential.getClientExtensionResults")}} abgerufen werden.

## Siehe auch

[Definition der Authentifikatordaten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
