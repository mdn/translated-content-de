---
title: Authenticator-Daten
slug: Web/API/Web_Authentication_API/Authenticator_data
l10n:
  sourceCommit: 0184c0811f65e8ff7c24990c32bc833a8e7e60da
---

{{DefaultAPISidebar("Web Authentication API")}}

Die Authenticator-Datenstruktur enthält Informationen vom Authenticator über die Verarbeitung einer Anmeldeinformationserstellung oder Authentifizierungsanfrage – wie der `rpIdHash` der vertrauenden Partei, ein Signaturzähler, ein Test der Benutzerpräsenz, Benutzerüberprüfungsflaggen und alle vom Authenticator verarbeiteten Erweiterungen. Diese Seite erklärt, was in der Datenstruktur enthalten ist.

## Zugriff auf Authenticator-Daten

Authenticator-Daten werden dem Browser als ein {{jsxref("ArrayBuffer")}} verfügbar gemacht und können auf verschiedene Weise abgerufen werden. Die zwei bequemsten Methoden sind:

- Über die Methode [`PublicKeyCredential.response.getAuthenticatorData()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar ist, das von einem erfolgreichen [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create) (Erstellung von Anmeldeinformationen) Aufruf zurückgegeben wird.
- In der Eigenschaft [`PublicKeyCredential.response.authenticatorData`](/de/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData), die auf dem [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential) verfügbar ist, das von einem erfolgreichen [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) (Authentifizierung) Aufruf zurückgegeben wird.

## Datenstruktur

Ein Authenticator-Daten {{jsxref("ArrayBuffer")}} ist mindestens 37 Bytes lang und enthält die folgenden Felder:

- **rpIdHash** (32 Bytes)
  - : Der SHA-256-Hash der [Relying Party ID](https://w3c.github.io/webauthn/#relying-party-identifier), auf die die Anmeldeinformation beschränkt ist. Der Server wird sicherstellen, dass dieser Hash zum SHA256-Hash seiner eigenen vertrauenden Partei-ID passt, um Phishing oder andere Man-in-the-Middle-Angriffe zu verhindern.
- **flags** (1 Byte)
  - : Ein Bitfeld, das verschiedene Attribute anzeigt, die vom Authenticator bestätigt wurden. Die Bits sind wie folgt, wobei Bit 0 das am wenigsten signifikante Bit ist und alle nicht speziell erwähnten Bits "für zukünftige Verwendung reserviert" sind:
    - Bit 0, Benutzerpräsenz (UP): Wenn gesetzt (d.h. auf `1`), hat der Authenticator bestätigt, dass der Benutzer durch einen Test der Benutzerpräsenz (TUP) anwesend war, z. B. durch das Drücken eines Knopfes am Authenticator.
    - Bit 2, Benutzerüberprüfung (UV): Wenn gesetzt, hat der Authenticator den tatsächlichen Benutzer durch ein biometrisches Merkmal, eine PIN oder eine andere Methode überprüft.
    - Bit 3, Backup-Berechtigung (BE): Wenn gesetzt, ist die von dem Authenticator zur Generierung einer Aussage verwendete öffentliche Schlüsselanmeldequelle für ein Backup geeignet. Dies bedeutet, dass sie auf irgendeine Weise gesichert werden kann (zum Beispiel über die Cloud oder lokale Netzwerksynchronisierung) und daher auf einem anderen Authenticator als dem ursprünglichen Authenticator vorhanden sein kann. Backup-fähige Anmeldequellen sind daher auch als Mehrgeräte-Anmeldungen bekannt.
    - Bit 4, Backup-Zustand (BS): Wenn gesetzt, ist die öffentlicher Schlüsselanmeldequelle aktuell gesichert (siehe Bit 3 für Kontext).
    - Bit 6, Attestierte Anmeldedaten (AT): Wenn gesetzt, folgen die attestierten Anmeldedaten unmittelbar nach den ersten 37 Bytes dieser `authenticatorData`.
    - Bit 7, Erweiterungsdaten (ED): Wenn gesetzt, sind Erweiterungsdaten vorhanden. Erweiterungsdaten folgen den attestierten Anmeldedaten, falls vorhanden, oder folgen sofort den ersten 37 Bytes der `authenticatorData`, wenn keine attestierten Anmeldedaten vorhanden sind.

- **signCount** (4 Bytes)
  - : Ein Signaturzähler, wenn vom Authenticator unterstützt (andernfalls auf 0 gesetzt). Server können diesen Zähler optional verwenden, um eine Klonung des Authenticators zu erkennen.
- **attestedCredentialData** (variable Länge)
  - : Die Anmeldeinformationen, die erstellt wurden. Dies ist nur während eines [`navigator.credentials.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufrufs vorhanden. Dies ist eine Sequenz von Bytes mit folgendem Format:
    - **AAGUID** (16 Bytes): Die Authenticator Attestation Globally Unique Identifier, eine eindeutige Nummer, die das Modell des Authenticators identifiziert (nicht die spezifische Instanz des Authenticators). Eine vertrauende Partei kann dies verwenden, um die Eigenschaften des Authenticators herauszufinden, indem sie seine Metadatenanweisung über den [FIDO-Metadatendienst](https://fidoalliance.org/metadata/) abruft. Dies ist in bestimmten Situationen relevant, wie etwa bei Unternehmensbereitstellungen oder wo regulatorische Anforderungen vorschreiben, dass ein bestimmter Typ von Authenticator verwendet werden muss; in anderen Fällen sollte es ignoriert werden.

    - **_credentialIdLength_** (2 Bytes): Die Länge der Anmelde-ID, die direkt auf diese Bytes folgt.
    - **_credentialId_** (variable Länge): Ein eindeutiger Bezeichner für diese Anmeldeinformationen, sodass sie für zukünftige Authentifizierungen angefordert werden können. Die Anmeldeinformation ist "_credentialIdLength_" Bytes lang.
    - **credentialPublicKey** (variable Länge): Ein [COSE](https://datatracker.ietf.org/doc/html/rfc8152)-codierter öffentlicher Schlüssel. Dieser öffentliche Schlüssel wird auf dem Server im Zusammenhang mit einem Benutzerkonto gespeichert und für zukünftige Authentifizierungen verwendet. Vertrauende Parteien können die DER-codierte Form davon ohne das Parsen der COSE-codierten Authenticator-Daten über die Methode [`AuthenticatorAttestationResponse.getPublicKey()`](/de/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) abrufen.

- **extensions** (variable Länge)
  - : Eine optionale [CBOR](https://datatracker.ietf.org/doc/html/rfc7049)-Karte, die die Antwortausgaben von vom Authenticator verarbeiteten Erweiterungen enthält.

    Erweiterungen sind optional und verschiedene Browser können unterschiedliche Erweiterungen erkennen. Die Verarbeitung von Erweiterungen ist für den Browser immer optional: Wenn ein Browser eine bestimmte Erweiterung nicht erkennt, wird diese einfach ignoriert. Für Informationen zur Verwendung von Erweiterungen und welche von welchen Browsern unterstützt werden, siehe [Web Authentication Extensions](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions).

    > [!NOTE]
    > Die Authenticator-Daten enthalten nur die Ergebnisse von vom Authenticator verarbeiteten Erweiterungen. Die Ergebnisse von vom Browser (Client) verarbeiteten Erweiterungen können über [`PublicKeyCredential.getClientExtensionResults`](/de/docs/Web/API/PublicKeyCredential/getClientExtensionResults) abgerufen werden.

## Siehe auch

[Definition der Authenticator-Daten in der WebAuthn-Spezifikation](https://w3c.github.io/webauthn/#sctn-authenticator-data)
