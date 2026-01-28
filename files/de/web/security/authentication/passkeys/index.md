---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass der Benutzer Passwörter oder andere Geheimcodes auf der Website eingeben muss. Sie adressieren [viele der gravierendsten Schwachstellen anderer Authentifizierungsmethoden](#sicherheitsmerkmale_von_passkeys) wie Passwörter.

Anstelle eines geteilten Geheimnisses verlassen sich Passkeys auf asymmetrische Kryptographie. Ein Passkey ist ein {{Glossary("Public-key_cryptography", "Schlüsselpaar aus öffentlichem und privatem Schlüssel")}}, das an das Konto eines bestimmten Benutzers auf einer bestimmten Website gebunden ist.

Der private Schlüssel wird in einem Modul namens _Authenticator_ gespeichert, das [im oder am Gerät des Benutzers](#plattform-_und_roaming-authenticatoren) integriert ist. Ein Authenticator kann in die Plattform integriert sein oder ein separates Hardware-Token wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) oder eine Passwortmanager-App wie [KeePassXC](https://keepassxc.org/) sein.

Der öffentliche Schlüssel wird auf dem Server der Website gespeichert. Wenn sich der Benutzer anmeldet, verwendet der Authenticator den privaten Schlüssel, um einen [_Challenge_](#challenges)-Wert vom Server digital zu signieren, zusammen mit kontextbezogenen Informationen wie dem anfordernden {{Glossary("origin", "Herkunftsort")}}. Das resultierende Objekt wird _Assertion_ genannt. Der Server der Website kann die Signatur der Assertion mit dem öffentlichen Schlüssel verifizieren und den Benutzer anmelden.

In diesem Leitfaden werden wir:

- Die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API) vorstellen, die es Web-Apps ermöglicht, Passkeys zu verwenden.
- Die zwei Hauptabläufe durchgehen, die von WebAuthn unterstützt werden: [Registrierung](#registrierung) und [Anmeldung](#anmeldung).
- Einige der Hauptmerkmale der [WebAuthn-API](#merkmale_der_webauthn-api) untersuchen.
- Die [Sicherheitsmerkmale von Passkeys](#sicherheitsmerkmale_von_passkeys) zusammenfassen.
- Gute Praktiken erkunden, um zu verhindern, dass Benutzer ausgesperrt werden, wenn sie [ihre Passkeys verlieren](#umgang_mit_verlorenen_passkeys), Benutzern helfen, [ihre Passkeys zu verwalten](#verwaltung_von_passkeys) und Benutzern beim [Übergang von Passwörtern](#von_passwörtern_zu_passkeys_migrieren) zu helfen.

## Die WebAuthn-API

Um mit einem Authenticator zu interagieren, verwendet eine Website die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API). In der WebAuthn-Spezifikation wird eine Website, die Passkeys zur Authentifizierung von Benutzern verwendet, als _Relying Party_ (RP) bezeichnet, und wir werden diesen Begriff in diesem Leitfaden verwenden.

WebAuthn ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), einem Framework zur Verwaltung von {{Glossary("credential", "Anmeldeinformationen")}} für verschiedene Authentifizierungsmethoden, einschließlich [Passwörter](/de/docs/Web/Security/Authentication/Passwords) und [föderierte Identität](/de/docs/Web/Security/Authentication/Federated_identity) sowie Passkeys.

Die zwei Hauptfunktionen, die von RPs verwendet werden, sind:

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die verwendet wird, um einen neuen Passkey zu erstellen, wenn ein Benutzer sich auf Ihrer Website registriert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die verwendet wird, um eine Assertion aus dem gespeicherten Passkey des Benutzers zu generieren, wenn der Benutzer sich auf Ihrer Website anmeldet.

## Registrierung

In diesem Abschnitt gehen wir den Ablauf durch, der verwendet wird, um einen neuen Passkey zu erstellen und damit ein neues Benutzerkonto einzurichten.

![Übersicht der Benutzerregistrierung mit Passkeys.](passkeys-register.svg)

Wenn der Benutzer darum bittet, sich auf einer Website zu registrieren, fordert der Frontend-Code des RPs zuerst seinen Server nach einer [_Challenge_](#challenges): Dies ist ein zufälliger Wert, der auf dem Server generiert wird und den der Server später verwenden wird, um sicherzustellen, dass der resultierende Passkey als Reaktion auf diese Anforderung generiert wurde.

Anschließend ruft der Frontend-Code des RPs [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf. Es können verschiedene Optionen angegeben werden, einschließlich:

- **Attestationspräferenzen**: Ob das RP an einer Authentifizierungs-[Attestation](#attestation) (ein Mechanismus, der dem RP hilft zu entscheiden, ob es dem Authenticator vertrauen soll) interessiert ist und, wenn ja, in welcher Form die Attestation vorliegen soll.

- **Authenticator-Präferenzen**: Welcher [Typ von Authenticator](#plattform-_und_roaming-authenticatoren) verwendet werden soll und ob der Authenticator eine [Benutzerüberprüfung](#benutzerüberprüfung) durchführen soll, bevor der Passkey erstellt wird.

- **Challenge**: Die vom RP-Server generierte [Challenge](#challenges). Dies hilft, {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

- **Webseiteninformationen**: Ein lesbarer Name und eine ID für das RP, die mit dem neuen Passkey assoziiert werden. Die ID bestimmt den [Geltungsbereich](#passkey-geltungsbereich) des resultierenden Passkeys.

- **Benutzerinformationen**: Informationen über den Benutzer, die mit dem neuen Passkey assoziiert werden, einschließlich eines lesbaren Anzeigenamens, eines Kontoidentifikators und eines lesbaren Kontoidentifikators wie einer E-Mail-Adresse oder einem Benutzernamen.

Abhängig von den Fähigkeiten des Authenticators und den Präferenzen des RPs kann der Authenticator den Benutzer bitten, die Erstellung des Passkeys über eine Methode der [Benutzerüberprüfung](#benutzerüberprüfung) zu autorisieren: zum Beispiel unter Verwendung eines biometrischen Merkmals wie eines Fingerabdrucks.

Der Authenticator erstellt dann einen Passkey für das Konto. Er speichert den privaten Schlüssel lokal und gibt ein Objekt zurück, das den öffentlichen Schlüssel, die Challenge und einige zusätzliche Informationen enthält. Wenn der Authenticator eine Attestation durchführt, wird dies alles {{Glossary("digital_signature", "digital signiert")}} mit entweder dem privaten Schlüssel oder einem [Attestation-Schlüssel](#attestation), der dem Authenticator gehört.

Der Frontend-Code des RPs sendet dies an den Server, der:

- Überprüft die Attestation, wenn eine Attestation stattfindet
- Überprüft, dass die Challenge der erwartete Wert ist
- Erstellt ein neues Benutzerkonto und speichert den öffentlichen Schlüssel zusammen mit den Kontoinformationen des Benutzers darin.

## Anmeldung

In diesem Abschnitt gehen wir den Ablauf durch, der verwendet wird, um einen Benutzer mit einem Passkey anzumelden.

![Übersicht der Benutzeranmeldung mit Passkeys.](passkeys-sign-in.svg)

Wenn der Benutzer versucht, sich anzumelden, fordert der Frontend-Code des RPs erneut den Server nach einem [Challenge](#challenges)-Wert.

Anschließend ruft der Frontend-Code des RPs [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Es können verschiedene Optionen angegeben werden, einschließlich:

- **Erlaubte Anmeldeinformationen**: Ein Array von Bezeichnern für die Passkeys, die das RP akzeptieren wird. Dieses Array kann leer oder weggelassen werden, in diesem Fall können beliebige geeignete Passkeys verwendet werden.

- **Challenge**: Die vom RP-Server generierte [Challenge](#challenges).

- **Website-ID**: Die ID des RP, der versucht, den Benutzer anzumelden. Siehe [Passkey Scope](#passkey-geltungsbereich).

- **Benutzerüberprüfung**: Ob der Authenticator eine [Benutzerüberprüfung](#benutzerüberprüfung) durchführen soll, bevor der Passkey verwendet wird.

Anschließend findet der Browser Passkeys, die den angegebenen Kriterien entsprechen: Wenn er mehr als einen findet, kann er den Benutzer bitten, einen auszuwählen. Der Authenticator, der diesen Passkey speichert, wird in der Regel den Benutzer bitten, die Verwendung dieses Passkeys zu autorisieren, einschließlich [Benutzerüberprüfung](#benutzerüberprüfung), wenn dies vom RP angefordert und vom Authenticator unterstützt wird.

Der Authenticator verwendet dann den privaten Schlüssel des Passkeys, um eine digital signierte [Assertion](#assertions) zu erstellen, die die Challenge und andere Daten enthält.

Der Frontend-Code des RPs sendet die Assertion an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel verifiziert. Wenn die Verifizierung erfolgreich ist, kann der Benutzer angemeldet werden.

## Merkmale der WebAuthn-API

In diesem Abschnitt gehen wir auf einige Aspekte der WebAuthn-API näher ein.

### Plattform- und Roaming-Authenticatoren

Die WebAuthn-API unterscheidet zwei Arten von Authenticatoren:

- **Plattform-Authenticatoren**
  - : Diese Authenticatoren sind nicht vom Gerät entfernbar. Zum Beispiel, Authenticatoren, die in das Betriebssystem des Geräts eingebaut sind, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System.
- **Roaming-Authenticatoren**
  - : Diese Authenticatoren können vom Gerät entfernt und an ein anderes Gerät angeschlossen werden. Das klassische Beispiel hierfür ist ein Authenticator, der in einem USB-Schlüssel implementiert ist, wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Wenn ein RP einen neuen Passkey erstellt, kann es angeben, welchen Typ von Authenticator es verwenden möchte, als Teil der [`authenticatorSelection`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#authenticatorselection)-Option, die es an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergibt.

Der Hauptvorteil eines Plattform-Authenticators ist, dass er für den Benutzer bequem ist: Sie müssen kein separates Stück Hardware im Auge behalten. Der Hauptnachteil ist, dass er nur mit seinem Hostgerät verwendet werden kann.

Plattform-Authenticatoren können manchmal als Roaming-Authenticatoren fungieren: Zum Beispiel könnte ein Plattform-Authenticator auf einem mobilen Gerät einem Laptop als Roaming-Authenticator über eine Bluetooth-Verbindung zur Verfügung stehen.

Obwohl Plattform-Authenticatoren nicht vom Gerät entfernt werden können, können sie ihre Passkeys oft über Cloud-Synchronisation oder Import/Export-Funktionen mit anderen Authenticatoren teilen. Zum Beispiel könnte ein Plattformanbieter es Benutzern ermöglichen, ihre Passkeys über alle Geräte zu teilen, die zu ihrer Produktfamilie gehören.

### Entdeckbare und nicht entdeckbare Anmeldedaten

Die WebAuthn-Spezifikation unterscheidet zwischen _entdeckbaren_ und _nicht entdeckbaren_ Anmeldedaten.

- **Entdeckbare Anmeldedaten**, auch bekannt als _residente Schlüssel_, sind solche, die verwendet werden können, ohne dass das RP zuerst den Benutzer identifizieren muss, der authentifiziert wird: das heißt, das "allowed credentials"-Array, das in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird, kann leer sein. Bei einer entdeckbaren Anmeldedaten werden alle Signaturschlüsselmaterialien im Authenticator gespeichert, sodass der Authenticator Signaturen generieren kann, ohne dass eine Eingabe vom RP benötigt wird.

- **Nicht entdeckbare Anmeldedaten**, auch bekannt als _nicht-residente Schlüssel_, sind solche, für die das RP zuerst den Benutzer identifizieren muss, der authentifiziert wird (zum Beispiel indem sie ihren Benutzernamen eingeben), und dann die zugehörige Anmelde-ID in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben muss, in das "allowed credentials"-Array.

  Nicht entdeckbare Anmeldedaten benötigen die Anmelde-ID, weil sie den Signaturschlüssel selbst nicht im Authenticator speichern, sondern ihn jedes Mal, wenn er benötigt wird, aus einem internen Seed und dem Anmelde-ID-Wert generieren. Das heißt, der Kontoschlüssel ist nicht im Authenticator gespeichert.

Der Vorteil der Verwendung nicht entdeckbarer Anmeldedaten besteht darin, dass ein Authenticator mit begrenztem Speicher eine potenziell unbegrenzte Anzahl von Konten unterstützen kann, weil das Schlüsselmaterial für jedes Konto nicht im Authenticator gespeichert wird.

Der Vorteil der Verwendung entdeckbarer Anmeldedaten besteht darin, dass sie es einem Browser ermöglichen, [Autovervollständigung](#autofill-benutzeroberfläche) mit öffentlichen Schlüsselanmeldedaten zu implementieren, was es für Benutzer erheblich einfacher macht, sich anzumelden, insbesondere wenn sie sowohl öffentliche Schlüsselanmeldedaten als auch Passwörter für eine bestimmte Website haben.

**Aus diesem Grund müssen Passkeys immer entdeckbare Anmeldedaten sein, daher sollten RPs, die auf Passkey-basierte Authentifizierung setzen, immer daran arbeiten, sie entdeckbar zu machen**.

Um eine entdeckbare Anmeldedaten zu erstellen, sollte das RP die Option `residentKey` auf `"required"` und die Option `requireResidentKey` auf `true` setzen, wenn es eine neue Anmeldedaten in dem Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt.

### Challenges

Wenn ein RP einen Authenticator darum bittet, einen neuen Passkey zu erstellen oder einen bestehenden Passkey zu verwenden, muss es eine _Challenge_ bereitstellen. Dies ist ein zufälliger Wert, der spezifisch für die Anfrage ist und nicht von einem Angreifer voraussehbar wäre. Die Challenge muss in einer vertrauenswürdigen Umgebung generiert werden (das bedeutet im Allgemeinen auf dem Server, nicht im Frontend).

Der Frontend-Code des RPs übergibt die Challenge an den `create()`- oder `get()`-Aufruf, und der Browser schließt denselben Wert in das Objekt ein, das von diesen Methoden zurückgegeben wird. Im Fall von `get()` ist der Challenge-Wert auch Teil der Eingabe für die digitale Signatur, die vom Authenticator berechnet wird.

Wenn der Webserver die Antwort des Authenticators überprüft, muss der Webserver sicherstellen, dass die Challenge denselben Wert hat, den er ursprünglich bereitgestellt hat.

Der Webserver sollte den Challenge-Wert auch nach etwa 10 Minuten ungültig machen und jede Antwort ablehnen, die die Challenge enthält, die nach dieser Zeit angekommen ist.

Die Challenge stellt einen Beweis dar, dass die Antwort des Authenticators eine Antwort auf _diese_ Anfrage war und nicht eine alte Antwort auf eine frühere Anfrage, die ein Angreifer gestohlen hat. Eine solche Art von Angriff wird als {{Glossary("replay_attack", "Replay-Angriff")}} bezeichnet.

### Attestation

Die Sicherheit eines Passkey hängt teilweise von der Zuverlässigkeit des verwendeten Authenticators ab. Beispielsweise könnte ein Angreifer, wenn ein Authenticator die privaten Schlüssel, die er speichert, nicht schützt, diese Schlüssel stehlen und sich als Benutzer ausgeben. WebAuthn definiert einen optionalen Mechanismus namens _Attestation_, bei dem ein Authenticator dem RP verifizierbare Beweise über den Authenticator und die von ihm erzeugten Daten (wie Schlüsselpaar oder signierte Assertions) zur Verfügung stellen kann. Dies kann dem RP helfen zu entscheiden, ob es sich auf den Authenticator verlassen möchte, um seine Benutzer zu authentifizieren.

Um die Attestation zu implementieren, enthält der Authenticator ein Schlüsselpaar, das als _Attestation-Key_ bezeichnet wird, der zum Zeitpunkt der Herstellung in das Gerät eingebaut wurde und als zu der Organisation gehörend {{Glossary("digital_certificate", "zertifiziert")}} wurde, die diesen Authenticator hergestellt hat. Zum Beispiel könnte das Zertifikat besagen, dass dieser Authenticator von "Acme Authenticator Incorporated" hergestellt wurde.

Wenn der Authenticator einen neuen Passkey erstellt, signiert er das resultierende Objekt mit seinem Attestation-Key. Das RP überprüft die Signatur und das zugehörige Zertifikat und hat dann den Beweis, dass der Passkey von einem Authenticator erstellt wurde, der von "Acme Authenticator Incorporated" hergestellt wurde.

Nicht alle Authenticatoren unterstützen die Attestation, und RPs können angeben, dass sie an der Attestation nicht interessiert sind. In diesen Situationen könnte das von einem Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegebene Objekt überhaupt nicht signiert sein, oder es könnte mit dem Passkey selbst signiert werden (dies wird als _Selbstattestation_ bezeichnet). In diesen Situationen verfügt das RP über keine verlässlichen Beweise über den Ursprung oder die Fähigkeiten des Authenticators.

### Benutzerüberprüfung

Wenn eine Website [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, um einen neuen Passkey zu erstellen, oder [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufruft, um eine Assertion zu erstellen, wird der Authenticator den Benutzer immer bitten, der Operation zuzustimmen.

Das RP kann den Authenticator auch bitten, eine _Benutzerüberprüfung_ durchzuführen, was bedeutet, dass der Benutzer gebeten wird, die Verwendung seiner Anmeldedaten zu autorisieren, zum Beispiel durch Eingabe einer PIN oder eines biometrischen Merkmals wie eines Fingerabdrucks.

Wenn dies geschieht, wird es als eine Form der {{Glossary("multi-factor_authentication", "Mehrfaktorauthentifizierung")}} angesehen: Der Authenticator selbst ist "etwas, das der Benutzer hat", während die PIN oder das biometrische Merkmal respektive "etwas, das sie wissen" oder "etwas, das sie sind".

Es ist zu beachten, dass nicht alle Authenticatoren Benutzerüberprüfung unterstützen.

### Passkey-Geltungsbereich

Der Geltungsbereich eines Passkey bestimmt, welche Websites den Passkey verwenden dürfen.

Standardmäßig:

- Wenn eine Seite einen Passkey erstellt, indem sie [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, setzt der Browser die _RP ID_ des Passkey auf die Domänenkomponente der Herkunft des Aufrufers, und der Authenticator speichert diesen Wert zusammen mit dem Passkey.

- Wenn eine Seite einen Passkey verwendet, indem sie [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufruft, übergibt der Browser die Domänenkomponente der Herkunft des Aufrufers an den Authenticator, und der Authenticator lässt den Passkey nur dann verwenden, wenn dieser Wert mit der gespeicherten RP ID übereinstimmt.

Das bedeutet, dass ein Passkey standardmäßig nur von einer Seite verwendet werden kann, die den gleichen Ursprung (ohne den Port) hat wie die Seite, die ihn ursprünglich erstellt hat.

Websites dürfen diese Regeln innerhalb einiger Einschränkungen lockern:

- Wenn eine Website einen Passkey erstellt, kann sie eine ID an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben, und der Authenticator wird diese als RP ID verwenden.

- Ebenso kann eine Website, die versucht einen Passkey zu verwenden, eine ID an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben, und der Authenticator vergleicht diese ID mit der gespeicherten RP ID.

Für sowohl `create()` als auch `get()` muss der übergebene Wert eine {{Glossary("registrable_domain", "registrierbare Domäne")}} sein, die eine _Domänensuffix_ der Domäne des Ursprungs des Aufrufers ist.

Diese Lockerung bedeutet, dass beispielsweise eine Seite bei `https://register.example.com` einen Passkey mit einer RP ID von `example.com` erstellen kann, und eine Seite bei `https://login.example.com` diesen Passkey dann verwenden darf.

Der Geltungsbereich des Passkeys hilft, [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe zu verhindern. Bei einem Phishing-Angriff wird dem Benutzer eine bösartige Seite präsentiert, die wie die Ziel-Website aussieht und den Benutzer auffordert, seine Anmeldeinformationen für die Ziel-Website einzugeben. Typischerweise erscheint die URL der bösartigen Seite ähnlich wie die der Zielseite, was zur Verwirrung des Benutzers beiträgt. Wenn zum Beispiel die Zielseite `https://example.com` ist, könnte die Phishing-Seite von `https://examp1e.com` bereitgestellt werden.

Mit den Geltungsbereich-Regeln für Passkeys kann jedoch eine von `https://examp1e.com` bereitgestellte Website keine Passkeys verwenden, die für `https://example.com` erstellt wurden.

### Herkunftsüberprüfung

Die vom Authenticator zurückgegebene signierte [Assertion](#assertions) enthält Informationen über den Kontext des Aufrufers:

- Die {{Glossary("origin", "Herkunft")}} des Dokuments, das [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen hat.
- Wenn der Aufrufer als {{htmlelement("iframe")}} eingebettet war, ob der Aufrufer die gleiche Herkunft wie das oberste Dokument hatte.
- Die Herkunft des obersten Dokuments, wenn der Aufrufer als {{htmlelement("iframe")}} eingebettet war und nicht dieselbe Herkunft wie der Aufrufer hatte.

Wenn der RP-Server die Assertion überprüft, muss er sicherstellen, dass diese Werte den erwarteten entsprechen.

Dies bietet eine Schutzschicht gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, zusätzlich zu dem Schutz, den der [Geltungsbereich des Passkeys](#passkey-geltungsbereich) bietet.

## Sicherheitsmerkmale von Passkeys

Passkeys sind sicherer als Passwörter und wir können sehen, wie ihr Design die schwerwiegendsten [Schwachstellen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) adressiert:

- Im Gegensatz zu einem Passwort erfindet der Benutzer keine Passkey-Werte und muss sie sich nicht merken. Das bedeutet, dass User keine schwachen Passkey-Werte wählen können, sodass sie nicht anfällig für [Schätzangriffe](/de/docs/Web/Security/Authentication/Passwords#guessing) sind. Die Passkey-Erstellung wird vom Benutzer auf den Authenticator übertragen.
- Passkeys werden nie über verschiedene Websites hinweg wiederverwendet, sodass sie nicht anfällig für [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe sind. Falls ein Angreifer Zugriff auf einen Passkey erhält, kann er ihn nur für die Website verwenden, die ihn ursprünglich erstellt hat.

- Mit Passkeys muss der Server keine Geheimnisse speichern: Er speichert nur den öffentlichen Schlüssel. Wenn also ein Angreifer [in die Datenbank des Servers einbricht](/de/docs/Web/Security/Authentication/Passwords#database_compromise), können sie den privaten Schlüssel nicht kompromittieren, der im Authenticator gespeichert ist. Beachten Sie jedoch, dass sie Benutzerkonten kompromittieren können, wenn sie _gefälschte Anmeldedaten_ in die Datenbank des Servers schreiben können.

- Wenn der Benutzer versucht, sich anzumelden, sucht der Browser nur nach Passkeys, deren Geltungsbereich mit der anfordernden Website übereinstimmt, und der Server des RPs kann überprüfen, dass der Ursprung des Anforderers dem entspricht, was sie erwarten. Das macht Passkeys resistent gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, da Frontend-Code, der von einer Phishing-Site wie `https://examp1e.com` bereitgestellt wird, den Passkey, der mit `https://example.com` assoziiert ist, nicht nutzen kann.

Obwohl Passkeys Schutz gegen diese häufigen Web-Authentifizierungsangriffe bieten, eliminieren sie nicht alle Bedrohungen. Da der weit verbreitete Einsatz von Passkeys relativ neu ist, gibt es noch kein ausgereiftes Verständnis der Angriffe, denen Passkeys möglicherweise ausgesetzt sind, aber es ist wahrscheinlich, dass einige Angriffe sich auf die Geräte der Benutzer konzentrieren: zum Beispiel, indem sie sie dazu bringen, einen bösartigen Authenticator zu installieren. Angriffe könnten auch Teile des Authentifizierungssystems ins Visier nehmen, die nicht durch Passkeys gesichert sind, wie z.B. Mechanismen zur Kontowiederherstellung.

## Umgang mit verlorenen Passkeys

Wenn ein Benutzer einen Authenticator verliert, sei es ein separates Modul oder in ihr Telefon integriert, verlieren sie alle Passkeys, die er enthält.

In diesem Abschnitt werden wir zwei Strategien besprechen, um mit dem Verlust von Authenticatoren umzugehen:

- [Erstellen mehrerer Passkeys für ein einzelnes Konto](#erstellen_mehrerer_passkeys)
- [Backup von Passkeys](#backup_von_passkeys)

### Erstellen mehrerer Passkeys

Im Gegensatz zu den Empfehlungen zu Passwörtern werden RPs ermutigt, mehrere Passkeys für ein einzelnes Konto zu erstellen. Ein gängiges Muster wäre:

- Ein Passkey in einem [Plattform-Authenticator](#platform_authenticators), der ihr alltäglicher Passkey für die Website ist
- Ein Passkey in einem [Roaming-Authenticator](#roaming_authenticators), den der Benutzer irgendwo sicher aufbewahrt, als Backup für den Fall, dass der Benutzer Ihr Gerät verliert.

Die [`excludeCredentials`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#excludecredentials)-Option, die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird, listet Anmelde-IDs auf und teilt dem Browser mit, dass die Authenticatoren mit den aufgelisteten Schlüsseln nicht für den neuen Schlüssel verwendet werden dürfen. Das ist eine Möglichkeit für das RP, sicherzustellen, dass der neue Passkey in einem neuen Authenticator erstellt wird.

### Backup von Passkeys

Einige Authenticatoren unterstützen Backup auf verschiedene Weisen, z. B. über Cloud-Synchronisation oder manueller Export. Die zurückgegebene signierte Assertion aus einem Aufruf von `get()` enthält eine Reihe von [Flags](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#flags), die unter anderem angeben, ob der Passkey:

- _Backup-geeignet_ ist: das bedeutet, ob er in einem Authenticator gespeichert ist, der Backup unterstützt
- tatsächlich gesichert wurde.

Ein RP kann diese Informationen verwenden, um Benutzern bei der Verwaltung ihrer Anmeldeinformationen zu helfen. Zum Beispiel:

- Wenn der Passkey nicht backup-geeignet ist, könnte das RP den Benutzer einladen, einen weiteren Passkey in einem anderen Authenticator zu erstellen, der als Backup verwendet werden kann.

- Wenn das RP Benutzer von Passwörtern migriert und der Benutzer ein altes Passwort sowie einen Passkey hat und die Assertion angibt, dass der Passkey gesichert wurde, könnte das RP den Benutzer einladen, ihr altes Passwort zu löschen, da sie es nicht mehr als Backup benötigen.

## Verwaltung von Passkeys

Wir haben gesehen, dass ein Benutzer mehrere Passkeys für ein einzelnes Konto haben kann, verteilt über mehrere Authenticatoren und mehrere Geräte. Jeder Passkey entspricht einem WebAuthn Credential, mit privatem SchlüsselmaterSal geschützt durch den Authenticator und einem entsprechenden öffentlichen Schlüssel, der vom RP als Teil der Kontoinformationen des Benutzers gespeichert wird.

Manchmal muss der Benutzer möglicherweise einen Passkey für sein RP-Konto löschen: Dies bedeutet im Wesentlichen, den auf dem RP-Server gespeicherten öffentlichen Schlüssel zu löschen, sodass der entsprechende private Schlüssel nicht mehr verwendet werden kann, um den Benutzer anzumelden. Dies ist im Allgemeinen erforderlich, wenn der Benutzer keinen Zugriff auf den Authenticator mehr hat, zum Beispiel, weil er das Gerät, das ihn enthält, verloren hat.

Das bedeutet, dass ein RP eine Möglichkeit implementieren sollte, mit der sich ein authentifizierter Benutzer die registrierten Passkeys für ihr Konto anzeigen lassen und bestimmte öffentliche Schlüssel löschen kann. Für jeden Schlüssel sollte das RP Informationen bereitstellen, die einem Benutzer helfen zu verstehen, welcher Schlüssel es ist und mit welchem Authenticator er verbunden ist. Dies könnte Folgendes beinhalten:

- **Name des Passkey-Anbieters**: Der Name des Passkey-Anbieters, wie "Windows Hello" oder "Bitwarden".

  > [!NOTE]
  > Um diesen Wert zu bestimmen:
  >
  > - Finden Sie den _AAGUID_-Wert in den vom Browser zurückgegebenen [`attestedCredentialData`](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata) nach einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create).
  > - Verwenden Sie diesen Wert, um den entsprechenden Namen in der [Passkey Provider AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids)-Liste nachzuschlagen.
  >
  > Siehe auch [Den Passkey-Anbieter mit AAGUID bestimmen](https://web.dev/articles/webauthn-aaguid).

- **Zeitstempel**: Der Zeitpunkt, zu dem der Passkey zuletzt verwendet wurde, um sich anzumelden.

- **Backup-Status**: Ein Indikator dafür, ob der Passkey gesichert wurde (siehe [Passkey-Backup](#backup_von_passkeys)).

Darüber hinaus sollte der Benutzer in der Lage sein, den Passkey-Namen zu bearbeiten und den Passkey zu löschen.

Wenn der Benutzer versucht, den letzten Passkey zu löschen, sollte das RP ihm über die Auswirkungen informieren: Das RP könnte dem Benutzer ermöglichen, sich mit einer anderen Methode wie einem [Einmalcode](/de/docs/Web/Security/Authentication/OTP) anzumelden, oder sie könnten keinen Zugriff mehr auf ihr Konto haben.

Siehe auch [Benutzern helfen, Passkeys effektiv zu verwalten](https://web.dev/articles/passkey-management).

### Server und Authenticatoren synchronisieren

Beachten Sie, dass wenn der Benutzer einen Passkey auf dem RP-Server löscht, dies eine Asymmetrie zwischen dem Server und dem Authenticator, der den entsprechenden privaten Schlüssel enthält, einführt. Der Authenticator denkt immer noch, dass den Passkey gültig ist, daher könnte der Browser ihn dem Benutzer als Anmeldemöglichkeit anbieten, aber das RP wird seine Assertions nicht mehr akzeptieren.

Um die Wahrscheinlichkeit von Problemen wie diesen zu verringern, definiert die WebAuthn-API eine Reihe von statischen Methoden von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), die es einem RP ermöglichen, Authenticatoren über serverseitige Änderungen zu informieren:

- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) teilt dem Browser mit, dass ein bestimmter Passkey vom RP nicht erkannt wurde und wird typischerweise vom RP unmittelbar nach dem Anmeldeversuch des Benutzers mit diesem Passkey aufgerufen. Das häufigste Szenario hier ist, dass der Benutzer diesen Passkey auf dem Server gelöscht hat und dann fälschlicherweise versucht hat, sich damit anzumelden.

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) gibt dem Browser die Bezeichner aller Passkeys, die das RP derzeit als gültig akzeptiert, um alle angeschlossenen Authenticatoren in die Lage zu versetzen, ihre gespeicherten Schlüssel zu aktualisieren. Es könnte jedes Mal aufgerufen werden, wenn der Benutzer erfolgreich authentifiziert wird. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie die Anmelde-ID des Benutzers preisgibt.

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) teilt dem Browser den aktuellen Benutzernamen und den angezeigten Namen des Benutzers mit und sollte aufgerufen werden, wenn ein authentifizierter Benutzer diese Werte ändert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie Benutzerdaten preisgibt.

## Von Passwörtern zu Passkeys migrieren

Die meisten Websites, die Passkey-Unterstützung hinzufügen, werden bereits passwortbasierte Authentifizierung unterstützen und werden eine bestehende Basis von Benutzern mit Passwörtern haben. Diese Benutzer sind nicht vor den [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) geschützt, bis sie nicht nur Passkeys auf Ihrer Website besitzen und verwenden, sondern auch keine Passwörter mehr haben, die mit ihren Konten verknüpft sind.

Sie können einen dreistufigen Prozess implementieren, um Benutzer von Passwörtern zu migrieren:

- [Benutzern die Möglichkeit geben, Passkeys neben ihren Passwörtern zu erstellen](#passkeys_neben_passwörtern_erstellen)
- [Benutzern die Möglichkeit geben, ihre Passkeys anstelle ihrer Passwörter zu verwenden](#passkeys_neben_passwörtern_verwenden)
- [Benutzern die Möglichkeit geben, ihre Passwörter zu löschen](#passwörter_zurückziehen)

### Passkeys neben Passwörtern erstellen

Der erste Schritt hier ist, den Benutzern die Möglichkeit zu bieten, einen Passkey zu erstellen, wenn sie sich erfolgreich mit einem Passwort auf Ihrer Website anmelden.

#### Bedingtes Erstellen

Ein zusätzlicher Schritt zur Steigerung der Passkey-Nutzung ist eine Funktion namens _conditional create_. Dies ermöglicht es einem RP, ohne Benutzereingriff einen neuen Passkey für das Benutzerkonto zu erstellen, wenn bestimmte Bedingungen erfüllt sind.

Um das bedingte Erstellen zu aktivieren, ruft das RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf, wobei die [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation)-Option auf `"conditional"` gesetzt ist:

```js
try {
  const publicKeyCredential = await navigator.credentials.create({
    publicKey: options,
    mediation: "conditional",
  });
  // handle new passkey creation
  // let the user know that they have a passkey now
} catch (e) {
  // passkey was not created
}
```

Mit dieser Option:

- Wenn der Benutzer sich gerade mit einem Passwort angemeldet hat, indem er einen Passwortmanager verwendet, der auch Passkeys unterstützt (das heißt, ein _credentials manager_, der auch als Authenticator fungieren kann), dann wird der Browser diesen credentials manager bitten, ohne den Benutzer zu fragen, einen neuen Passkey für den Benutzer zu erstellen.

- Andernfalls wird der `create()`-Aufruf fehlschlagen.

Aus der Sicht des Benutzers, wenn der Erstellungsaufruf fehlschlug, wissen sie nicht, dass er gemacht wurde, und wenn er erfolgreich ist, kann das RP sie darüber informieren, dass sie einen Passkey haben, den sie das nächste Mal zur Anmeldung verwenden können.

Der Gedanke dabei ist, dass wenn der Benutzer sich bei der Anmeldung bereits auf einen credentials manager verlässt, er implizit darauf vertraut, dass dieser seine Anmeldeinformationen _im Allgemeinen_ verwaltet, sodass er ihm vertrauen kann, eine neue Form von Anmeldeinformationen für sie zu erstellen.

### Passkeys neben Passwörtern verwenden

Wenn ein Benutzer sowohl ein Passwort als auch einen oder mehrere Passkeys hat, können sie wählen, welches sie zur Anmeldung verwenden, und das RP könnte sie dazu ermutigen, den Passkey zu verwenden.

In der Übergangszeit könnte ein Benutzer entweder Passwörter oder Passkeys für ihr Konto haben, oder beides. In dieser Situation kann eine Benutzeroberfläche, die sie fragt, welche Methode sie zur Anmeldung verwenden möchten, verwirrend sein: Sie erinnern sich möglicherweise nicht daran, welche Methode sie für welches Konto haben.

#### Autofill-Benutzeroberfläche

Eine Technik, um Benutzern in dieser Situation zu helfen, ist die _Autofill-Benutzeroberfläche_, auch manchmal _Conditional Mediation_ genannt.

Bei dieser Technik bietet die Anmeldeseite des RPs dem Benutzer ein Formular an, das es dem Benutzer ermöglicht, sich mit einem Benutzernamen und Passwort anzumelden. Im Feld für den Benutzernamen fügt das RP einen Autocomplete-Wert von `"webauthn"` hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" autofocus />
```

Im Hintergrund startet das RP den normalen Prozess, um eine Assertion zu verwenden, die mit einem Passkey signiert ist: Es holt eine [Challenge](#challenges) vom Server und bereitet die anderen Optionen für [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) vor.

Wenn das RP `get()` aufruft, übergibt es jedoch die Option `mediation: "conditional"` (genauso wie beim [conditional create](#bedingtes_erstellen)):

```js
const assertion = await navigator.credentials.get({
  publicKey: options,
  mediation: "conditional",
});
```

Der Effekt davon ist, dass der Aufruf wartet, bis der Benutzer mit dem Benutzernamefeld interagiert. Wenn der Benutzer mit dem Feld interagiert, sucht der Browser nach Passkeys, die zur Anmeldung beim RP verwendet werden können und zeigt sie dem Benutzer als Autofill-Werte an. Wenn der Benutzer einen auswählt, wird der ausgewählte Passkey verwendet und das RP kann die resultierende Assertion verwenden, um den Benutzer anzumelden.

Wenn der Benutzer keinen Passkey für die Website hat oder sie keinen der angebotenen Passkeys auswählen, können sie ihren Benutzernamen und ihr Passwort eingeben oder es von ihrem Passwortmanager automatisiert ausfüllen lassen.

Das bedeutet, dass Sie Benutzer unterstützen können, die möglicherweise Passwörter oder Passkeys oder beides haben, ohne spezielle Benutzeroberflächen zu haben, und ohne dass der Benutzer sich daran erinnern muss, ob sie tatsächlich einen Passkey für Ihre Website haben.

### Passwörter zurückziehen

Selbst wenn ein Benutzer einen Passkey für Ihre Website hat und ihn im Vergleich zu ihrem Passwort bevorzugt verwendet, sind sie trotzdem anfällig für Angriffe wie [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing), [Schätzangriffe](/de/docs/Web/Security/Authentication/Passwords#guessing) und [Phishing](/de/docs/Web/Security/Attacks/Phishing), solange Sie ein Passwort für ihr Konto behalten.

Daher möchten Sie den Benutzer möglicherweise in einem letzten Schritt vollständig dazu ermutigen, ihr Passwort zu löschen. Sie können dies als Option in ihren Konto-Einstellungen anbieten und sie möglicherweise dazu drängen, ihr Passwort zu löschen, falls sie es lange Zeit nicht verwendet haben (aber regelmäßig ihre Passkeys benutzt haben).

Allerdings sollten Sie auch berücksichtigen, dass das Vorhandensein eines Passworts einem Benutzer hilft, vor dem Ausschluss aus ihrem Konto zu schützen, falls sie den Zugriff auf ihren Passkey verlieren. Bevor Sie Benutzer dazu ermutigen, ihr Passwort zu löschen, können Sie überprüfen, dass sie alternative Schutzmaßnahmen haben, wie [mehrere Passkeys auf verschiedenen Authenticatoren](#erstellen_mehrerer_passkeys) und/oder Passkeys, die [gesichert](#backup_von_passkeys) wurden.

## Siehe auch

- [Die Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Passkey Central](https://www.passkeycentral.org/home)
- [passkeys.dev](https://passkeys.dev/)
- [Passkeys](https://developers.google.com/identity/passkeys/) (developers.google.com)
