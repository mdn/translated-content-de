---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass die Benutzer selbst Passwörter oder andere geheime Codes auf der Seite eingeben müssen. Sie adressieren [viele der ernsthaftesten Schwächen anderer Authentifizierungsmethoden](#sicherheitsmerkmale_von_passkeys) wie Passwörter.

Anstelle eines geteilten Geheimnisses basieren Passkeys auf der Public-Key-Kryptographie. Ein Passkey ist ein {{Glossary("Public-key_cryptography", "öffentlich/private Schlüsselpaar")}}, das an das Konto eines bestimmten Benutzers auf einer bestimmten Website gebunden ist.

Der private Schlüssel wird in einem Modul namens _Authenticator_ gespeichert, der sich [im oder am Gerät des Benutzers befindet](#plattform-_und_roaming-authentikatoren). Ein Authenticator kann in die Plattform integriert oder ein separater Hardware-Schlüssel wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) oder eine Anmeldeinformation-Manager-App wie [KeePassXC](https://keepassxc.org/) sein.

Der öffentliche Schlüssel wird auf dem Server der Website gespeichert. Wenn der Benutzer sich anmeldet, verwendet der Authenticator den privaten Schlüssel, um einen vom Server kommenden [_Challenge_](#challenges)-Wert zusammen mit kontextbezogenen Informationen wie der anfragenden {{Glossary("origin", "Herkunft")}} {{Glossary("digital_signature", "digital zu signieren")}}. Das resultierende Objekt wird _Assertion_ genannt. Der Server der Website kann den öffentlichen Schlüssel verwenden, um die Signatur der Assertion zu überprüfen und den Benutzer anzumelden.

In diesem Leitfaden werden wir:

- Die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API) vorstellen, die es Webanwendungen ermöglicht, Passkeys zu verwenden.
- Die beiden Hauptabläufe durchgehen, die von WebAuthn unterstützt werden: [Registrierung](#registrierung) und [Anmeldung](#anmeldung).
- Einige der Hauptmerkmale der [WebAuthn-API](#merkmale_von_webauthn) erkunden.
- Die [Sicherheitsmerkmale von Passkeys](#sicherheitsmerkmale_von_passkeys) zusammenfassen.
- Einige gute Praktiken erkunden, um Benutzern zu helfen, nicht ausgesperrt zu werden, wenn sie [ihre Passkeys verlieren](#umgang_mit_verlorenen_passkeys), um ihnen zu helfen, [ihre Passkeys zu verwalten](#verwaltung_von_passkeys), und um ihnen zu helfen, [von Passwörtern zu migrieren](#migration_von_passwörtern).

## Die WebAuthn-API

Um mit einem Authenticator zu interagieren, verwendet eine Website die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API). In der WebAuthn-Spezifikation wird eine Website, die Passkeys zur Authentifizierung von Benutzern verwendet, als _Vertrauenswürdige Partei_ (RP) bezeichnet, und wir werden diesen Begriff in diesem Leitfaden verwenden.

WebAuthn ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die ein Framework zum Verwalten von {{Glossary("credential", "Anmeldeinformationen")}} für verschiedene Authentifizierungsmethoden bietet, einschließlich [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) und [föderierter Identität](/de/docs/Web/Security/Authentication/Federated_identity) sowie Passkeys.

Die zwei Hauptfunktionen, die von RPs verwendet werden, sind:

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), welches Sie verwenden, um einen neuen Passkey zu erstellen, wenn sich ein Benutzer auf Ihrer Website registriert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), welches Sie verwenden, um eine Assertion aus dem gespeicherten Passkey des Benutzers zu generieren, wenn der Benutzer sich auf Ihrer Website anmeldet.

## Registrierung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen neuen Passkey zu erstellen und ihn zur Einrichtung eines neuen Benutzerkontos zu verwenden.

![Übersicht der Benutzerregistrierung mit Passkeys.](passkeys-register.svg)

Wenn der Benutzer sich auf einer Seite registrieren möchte, fordert der RP-Frontendcode zunächst eine [_Challenge_](#challenges) von seinem Server an: Dies ist ein auf dem Server generierter Zufallswert, den der Server später verwenden wird, um sicherzustellen, dass der resultierende Passkey als Antwort auf diese Anfrage generiert wurde.

Als nächstes ruft der RP-Frontendcode [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf. Hierbei können verschiedene Optionen spezifiziert werden, einschließlich:

- **Attestation-Einstellungen**: Ob die RP an der Authenticator-[Attestation](#attestation) interessiert ist (ein Mechanismus, der der RP hilft zu entscheiden, ob sie dem Authenticator vertrauen sollte), und falls ja, in welcher Form die Attestation erfolgen soll.

- **Authenticator-Präferenzen**: Welche [Art von Authenticator](#plattform-_und_roaming-authentikatoren) verwendet werden soll und ob der Authenticator eine [Benutzerverifizierung](#benutzerverifizierung) durchführen soll, bevor der Passkey erstellt wird.

- **Challenge**: Die vom RP-Server generierte [Challenge](#challenges). Dies hilft, sich vor {{Glossary("replay_attack", "Replay-Angriffen")}} zu schützen.

- **Webseiteninformationen**: Ein menschenlesbarer Name und eine ID für die RP, die dem neuen Passkey zugeordnet werden. Die ID bestimmt den [Geltungsbereich](#passkey-scope) des resultierenden Passkeys.

- **Benutzerinformationen**: Informationen über den Benutzer, die dem neuen Passkey zugeordnet werden, einschließlich eines menschenlesbaren Anzeigenamens, einer Konto-ID und einer menschenlesbaren Konto-ID wie einer E-Mail-Adresse oder einem Benutzernamen.

Abhängig von den Fähigkeiten des Authenticators und den Präferenzen der RP kann der Authenticator den Benutzer um Autorisierung für die Erstellung des Passkeys durch eine Art von [Benutzerverifizierung](#benutzerverifizierung) bitten: zum Beispiel durch Verwendung eines Biometrie-Tools wie eines Fingerabdrucks.

Der Authenticator erstellt dann einen Passkey für das Konto. Er speichert den privaten Schlüssel lokal und gibt ein Objekt zurück, das den öffentlichen Schlüssel, die Challenge und einige zusätzliche Informationen enthält. Wenn der Authenticator eine Attestation durchführt, wird dies alles entweder mit dem privaten Schlüssel oder einem [Attestation](#attestation)-Schlüssel des Authenticators {{Glossary("digital_signature", "digital signiert")}}.

Der Frontend-Code der RP sendet dies an den Server, der:

- Die Attestation überprüft, falls eine Attestation stattfindet
- Überprüft, dass die Challenge der erwartete Wert ist
- Ein neues Benutzerkonto erstellt und den öffentlichen Schlüssel zusammen mit den Kontoinformationen des Benutzers in diesem speichert.

## Anmeldung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen Benutzer mit einem Passkey anzumelden.

![Übersicht der Benutzeranmeldung mit Passkeys.](passkeys-sign-in.svg)

Wenn der Benutzer versucht sich anzumelden, fragt der Frontend-Code der RP erneut den Server nach einem [Challenge](#challenges)-Wert.

Als nächstes ruft der Frontend-Code der RP [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Hierbei können verschiedene Optionen spezifiziert werden, einschließlich:

- **Erlaubte Anmeldeinformationen**: Ein Array von Identifikatoren für die Passkeys, die die RP akzeptiert. Dieses Array kann leer oder weggelassen werden. In diesem Fall können beliebige geeignete Passkeys verwendet werden.

- **Challenge**: Die von der RP-Server generierte [Challenge](#challenges).

- **Website-ID**: Die ID der RP, die versucht, den Benutzer anzumelden. Siehe [Passkey-Geltungsbereich](#passkey-scope).

- **Benutzerverifizierung**: Ob der Authenticator eine [Benutzerverifizierung](#benutzerverifizierung) durchführen soll, bevor der Passkey verwendet wird.

Als nächstes durchsucht der Browser nach Passkeys, die den angegebenen Kriterien entsprechen: Wenn er mehr als einen findet, kann er den Benutzer bitten, einen auszuwählen. Der Authenticator, der diesen Passkey speichert, wird in der Regel den Benutzer um Erlaubnis bitten, den Passkey zu verwenden, einschließlich der [Benutzerverifizierung](#benutzerverifizierung), wenn diese von der RP gewünscht und vom Authenticator unterstützt wird.

Der Authenticator wird dann den privaten Schlüssel des Passkeys verwenden, um eine digital signierte [Assertion](#assertions) zu erstellen, einschließlich der Challenge und anderer Daten.

Der Frontend-Code der RP sendet die Assertion an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel überprüft. Wenn die Überprüfung erfolgreich ist, kann der Benutzer angemeldet werden.

## Merkmale von WebAuthn

In diesem Abschnitt werden wir verschiedene Aspekte der WebAuthn-API näher betrachten.

### Plattform- und Roaming-Authentikatoren

Die WebAuthn-API unterscheidet zwischen zwei Arten von Authentikatoren:

- **Plattform-Authentikatoren**
  - Diese Authentikatoren können nicht vom Gerät entfernt werden. Zum Beispiel sind in das Betriebssystem des Geräts eingebaute Authentikatoren wie das System [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) in Apple-Geräten oder das System [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security).
- **Roaming-Authentikatoren**
  - Diese Authentikatoren können vom Gerät entfernt und an ein anderes Gerät angeschlossen werden. Das klassische Beispiel hierfür ist ein Authenticator, der in einem USB-Schlüssel implementiert ist, wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Wenn eine RP einen neuen Passkey erstellt, kann sie fragen, welche Art von Authenticator verwendet werden soll, als Teil der [`authenticatorSelection`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#authenticatorselection)-Option, die sie an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergibt.

Der Hauptvorteil eines Plattform-Authenticators ist, dass er für den Benutzer bequem ist: Er muss kein separates Hardwareteil mit sich führen. Der Hauptnachteil ist, dass er nur mit seinem Hostgerät verwendet werden kann.

Plattform-Authentikatoren können manchmal als Roaming-Authentikatoren fungieren: Zum Beispiel könnte ein Plattform-Authenticator auf einem Mobilgerät einem Laptop als Roaming-Authenticator über eine Bluetooth-Verbindung zur Verfügung stehen.

Obwohl Plattform-Authentikatoren nicht vom Gerät entfernt werden können, können sie oft ihre Passkeys über Cloud-Synchronisation oder Import/Export-Funktionen mit anderen Authentikatoren teilen. Zum Beispiel könnte ein Plattformanbieter es Benutzern ermöglichen, ihre Passkeys über alle Geräte der gleichen Produktfamilie zu teilen.

### Erkennbare und nicht erkennbare Anmeldeinformationen

Die WebAuthn-Spezifikation unterscheidet zwischen _erkennbaren_ und _nicht-erkennbaren_ Anmeldeinformationen.

- **Erkennbare Anmeldeinformationen**, auch als _residente Schlüssel_ bekannt, sind solche, die verwendet werden können, ohne dass die RP zuerst den Benutzer identifizieren muss, der authentifiziert wird: Das bedeutet, dass das "erlaubte Anmeldeinformationen"-Array, das in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird, leer sein kann. Bei einer erkennbaren Anmeldeinformation wird das gesamte Signierschlüsselmaterial im Authenticator gespeichert, sodass der Authenticator Signaturen generieren kann, ohne dass die RP eingreifen muss.

- **Nicht erkennbare Anmeldeinformationen**, auch als _nicht-residente Schlüssel_ bekannt, sind solche, für die die RP zuerst den Benutzer identifizieren muss, der authentifiziert wird (zum Beispiel indem sie ihn auffordern, seinen Benutzernamen einzugeben), und dann die zugehörige Anmeldeinfo-ID in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben, im "erlaubte Anmeldeinformationen"-Array.

  Nicht erkennbare Anmeldeinformationen benötigen die Anmeldeinfo-ID, weil sie den Signierschlüssel selbst nicht im Authenticator speichern, sondern den Signierschlüssel jedes Mal generieren, wenn er benötigt wird, aus einem internen Saatwert und dem Wert der Anmeldeinfo-ID. Das bedeutet, dass der Kontoschlüssel nicht im Authenticator gespeichert ist.

Der Vorteil der Verwendung nicht erkennbarer Anmeldeinformationen ist, dass ein Authenticator mit begrenztem Speicher eine potenziell unbegrenzte Anzahl von Konten unterstützen kann, da das Schlüsselmater für jedes Konto nicht im Authenticator gespeichert ist.

Der Vorteil der Verwendung erkennbarer Anmeldeinformationen besteht darin, dass sie es einem Browser ermöglichen, [Autovervollständigung](#autovervollständigungs-ui) mit öffentlichen Schlüssel-Anmeldeinformationen zu implementieren, was es den Benutzern erheblich erleichtert, sich anzumelden, insbesondere wenn sie sowohl öffentliche Schlüssel-Anmeldeinformationen als auch Passwörter für eine bestimmte Seite haben.

**Aus diesem Grund müssen Passkeys immer erkennbare Anmeldeinformationen sein, sodass RPs, die auf Passkey-basierte Authentifizierung setzen, sie immer erkennbar machen sollten**.

Um eine erkennbare Anmeldeinformation zu erstellen, sollte die RP die `residentKey`-Option auf `"required"` und die `requireResidentKey`-Option auf `true` setzen, wenn sie eine neue Anmeldeinformation im Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt.

### Challenges

Wenn eine RP einen Authenticator bittet, einen neuen Passkey zu erstellen oder einen vorhandenen Passkey zu verwenden, muss sie eine _Challenge_ bereitstellen. Dies ist ein zufälliger Wert, der spezifisch für die Anfrage ist und nicht von einem Angreifer vorhersehbar wäre. Die Challenge muss in einer vertrauenswürdigen Umgebung generiert werden (was im Allgemeinen bedeutet, auf dem Server, nicht auf der Frontend-Seite).

Der Frontend-Code der RP gibt die Challenge in den `create()`- oder `get()`-Aufruf weiter, und der Browser schließt denselben Wert in das von diesen Methoden zurückgegebene Objekt ein. Im Fall von `get()` ist der Challenge-Wert auch Teil der Eingabe für die vom Authenticator berechnete digitale Signatur.

Wenn der Webserver die Antwort vom Authenticator überprüft, muss der Webserver sicherstellen, dass die Challenge der ursprünglich bereitgestellte Wert ist.

Der Webserver sollte den Challenge-Wert auch nach etwa 10 Minuten ungültig machen und alle Antworten ablehnen, die die Challenge enthalten und nach dieser Zeit eingetroffen sind.

Die Challenge stellt einen Beweis dar, dass die Antwort des Authenticators tatsächlich eine Antwort auf _diese_ Anfrage war und nicht eine alte Antwort auf eine frühere Anfrage, die ein Angreifer gestohlen hat. Diese Art von Angriff wird als {{Glossary("replay_attack", "Replay-Angriff")}} bezeichnet.

### Attestation

Die Sicherheit eines Passkeys hängt teilweise von der Zuverlässigkeit des verwendeten Authenticators ab. Zum Beispiel, wenn ein Authenticator die privaten Schlüssel, die er speichert, nicht schützt, könnte ein Angreifer die Schlüssel stehlen und Benutzer nachahmen. WebAuthn definiert einen optionalen Mechanismus namens _Attestation_, in dem ein Authenticator überprüfbare Beweise für die RP über den Authenticator und die von ihm erzeugten Daten (wie Schlüsselpaare oder signierte Assertions) liefern kann. Dies kann der RP helfen zu entscheiden, ob sie dem Authenticator vertrauen möchte, um ihre Benutzer zu authentifizieren.

Um die Attestation zu implementieren, enthält der Authenticator ein Schlüsselpaar namens _Attestation-Key_, das zur Zeit der Herstellung in das Gerät eingebaut wurde und das als zu der Organisation gehörend zertifiziert ist, die diesen Authenticator hergestellt hat. Zum Beispiel könnte das Zertifikat besagen, dass dieser Authenticator von "Acme Authenticator Incorporated" hergestellt wurde.

Wenn der Authenticator einen neuen Passkey erstellt, signiert er das resultierende Objekt mit seinem Attestation-Key. Die RP überprüft die Signatur und das zugehörige Zertifikat und hat dann Beweise dafür, dass der Passkey von einem von "Acme Authenticator Incorporated" hergestellten Authenticator erstellt wurde.

Nicht alle Authenticatoren unterstützen die Attestation, und RPs können angeben, dass sie an der Attestation nicht interessiert sind. In solchen Situationen kann das von einem Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegebene Objekt überhaupt nicht signiert sein oder es kann mit dem Passkey selbst (dies wird als _Selbstattestation_ bezeichnet) signiert sein. In solchen Situationen hat die RP keine verlässlichen Beweise über die Herkunft oder Fähigkeiten des Authenticators.

### Benutzerverifizierung

Wenn eine Website [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, um einen neuen Passkey zu erstellen, oder [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufruft, um eine Assertion zu erstellen, fragt der Authenticator den Benutzer immer um Zustimmung zur Handlung.

Die RP kann den Authenticator auch bitten, eine _Benutzerverifizierung_ durchzuführen, was bedeutet, dass der Benutzer aufgefordert wird, die Nutzung ihrer Anmeldeinformationen zu autorisieren, zum Beispiel durch Eingabe einer PIN oder eines biometrischen Merkmals wie eines Fingerabdrucks.

Wenn dies passiert, wird es als eine Form der {{Glossary("multi-factor_authentication", "Mehrfaktor-Authentifizierung")}} angesehen: der Authenticator selbst ist "etwas, das der Benutzer hat", während die PIN oder das biometrische Merkmal jeweils "etwas ist, das er weiß" oder "etwas, das er ist".

Beachten Sie, dass nicht alle Authenticatoren die Benutzerverifizierung unterstützen.

### Passkey-Scope

Der Scope eines Passkeys bestimmt, welche Seiten den Passkey verwenden dürfen.

Standardmäßig:

- Wenn eine Seite einen Passkey erstellt, indem sie [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, setzt der Browser die _RP-ID_ des Passkeys auf die Domain-Komponente der Herkunft der aufrufenden Seite, und der Authenticator speichert diesen Wert zusammen mit dem Passkey.

- Wenn eine Seite einen Passkey durch den Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet, übergibt der Browser die Domain-Komponente der Herkunft der aufrufenden Seite an den Authenticator, und der Authenticator erlaubt die Verwendung des Passkeys nur, wenn dieser Wert mit der gespeicherten RP-ID übereinstimmt.

Das bedeutet, dass ein Passkey, standardmäßig, nur von einer Seite derselben Herkunft (ohne den Port) wie die Seite verwendet werden kann, die ihn ursprünglich erstellt hat.

Webseiten dürfen diese Regeln relaxieren, innerhalb gewisser Einschränkungen:

- Wenn eine Webseite einen Passkey erstellt, kann sie eine ID in [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben, und der Authenticator wird dies als die RP-ID verwenden.

- Ebenso kann eine Webseite, wenn sie versucht, einen Passkey zu verwenden, eine ID in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben, und der Authenticator wird diese ID mit der gespeicherten RP-ID vergleichen.

Für `create()` und `get()` muss der übergebene Wert eine {{Glossary("registrable_domain", "registrierbare Domain")}} sein, die ein _Domain-Suffix_ der Domain der Herkunft des Aufrufers ist.

Diese Lockerung bedeutet, dass z. B. eine Seite unter `https://register.example.com` einen Passkey mit einer RP-ID von `example.com` erstellen kann und eine Seite unter `https://login.example.com` dann diesen Passkey verwenden darf.

Der Passkey-Scope hilft, [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe abzuwehren. Bei einem Phishing-Angriff wird dem Benutzer eine bösartige Seite präsentiert, die der Zielseite ähnelt und den Benutzer auffordert, seine Anmeldeinformationen für die Zielseite einzugeben. Normalerweise erscheint die URL der bösartigen Seite ähnlich der der Zielseite, was den Benutzer verwirren soll. Wenn z. B. die Zielseite `https://example.com` ist, könnte die Phishing-Seite von `https://examp1e.com` bereitgestellt werden.

Mit den Scope-Regeln für Passkeys ist jedoch eine Seite, die von `https://examp1e.com` bereitgestellt wird, nicht in der Lage, Passkeys zu verwenden, die für `https://example.com` erstellt wurden.

### Herkunftsverifizierung

Die signierte [Assertion](#assertions), die von einem Authenticator zurückgegeben wird, enthält Informationen über den Kontext des Aufrufers:

- Die {{Glossary("origin", "Herkunft")}} des Dokuments, das [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen hat.
- Wenn der Aufrufer als ein {{htmlelement("iframe")}} eingebettet war, ob der Aufrufer dieselbe Herkunft wie das Top-Level-Dokument hatte.
- Die Herkunft des Top-Level-Dokuments, wenn der Aufrufer als ein {{htmlelement("iframe")}} eingebettet war und keine gleiche Herkunft mit dem Aufrufer hatte.

Wenn der RP-Server die Assertion überprüft, muss er prüfen, ob diese Werte den erwarteten entsprechen.

Dies bietet eine Schutzschicht gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, zusätzlich zu der durch den [Passkey-Scope](#passkey-scope) bereitgestellten.

## Sicherheitsmerkmale von Passkeys

Passkeys sind sicherer als Passwörter, und wir können sehen, wie ihr Design die ernsthaftesten [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) adressiert:

- Im Gegensatz zu einem Passwort, erfindet der Benutzer nie einen Passkey-Wert oder muss ihn sich merken. Das bedeutet, Benutzer können keine schwachen Passkey-Werte wählen, und sie sind nicht anfällig für [Rateversuche](/de/docs/Web/Security/Authentication/Passwords#guessing). Die Generierung des Passkeys wird vom Benutzer auf den Authenticator übertragen.

- Passkeys werden niemals über mehrere Seiten hinweg wiederverwendet, sodass sie nicht anfällig für [Credential-Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing) sind. Wenn ein Angreifer Zugriff auf einen Passkey erhält, kann er ihn nur für die Website verwenden, die ihn ursprünglich erstellt hat.

- Mit Passkeys muss der Server niemals Geheimnisse speichern: Er speichert nur den öffentlichen Schlüssel. Wenn also ein Angreifer die [Datenbank des Servers kompromittiert](/de/docs/Web/Security/Authentication/Passwords#database_compromise), können sie den privaten Schlüssel nicht kompromittieren, der im Authenticator gespeichert ist. Beachten Sie jedoch, dass sie Benutzerkonten kompromittieren können, wenn sie gefälschte Anmeldeinformationen in die Datenbank des Servers schreiben können.

- Wenn der Benutzer versucht, sich anzumelden, sucht der Browser nur nach Passkeys, deren Scope mit der anfragenden Seite übereinstimmt, und der Server der RP kann überprüfen, dass die Herkunft des Anfragenden dem entsprach, was sie erwartet haben. Dies macht Passkeys widerstandsfähig gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, da Frontend-Code, der von einer Phishing-Website wie `https://examp1e.com` bereitgestellt wird, nicht in der Lage ist, den mit `https://example.com` assoziierten Passkey zu verwenden.

Obwohl Passkeys Schutz gegen diese häufigen Web-Authentifizierungsangriffe bieten, beseitigen sie nicht alle Bedrohungen. Da die breite Einführung von Passkeys relativ neu ist, gibt es noch kein ausgereiftes Verständnis für die Angriffe, denen Passkeys ausgesetzt sein könnten, aber es ist wahrscheinlich, dass einige Angriffe sich auf die Geräte der Benutzer konzentrieren würden: zum Beispiel, sie dazu zu bringen, einen bösartigen Authenticator zu installieren. Angriffe können auch auf Teile des Authentifizierungssystems zielen, die nicht durch Passkeys gesichert sind, wie Mechanismen zur Kontowiederherstellung.

## Umgang mit verlorenen Passkeys

Wenn ein Benutzer einen Authenticator verliert, sei es ein separates Modul oder in sein Telefon integriert, verliert er all die Passkeys, die er enthält.

In diesem Abschnitt werden wir zwei Strategien zum Umgang mit dem Verlust eines Authenticators besprechen:

- [Erstellung mehrerer Passkeys für ein einziges Konto](#erstellung_mehrerer_passkeys)
- [Backup von Passkeys](#passkey-backup)

### Erstellung mehrerer Passkeys

Im Gegensatz zum Rat bezüglich Passwörtern wird RPs empfohlen, mehrere Passkeys für ein einziges Konto zu erstellen. Ein häufiges Muster wäre, Folgendes zu haben:

- Einen Passkey in einem [Plattform-Authenticator](#platform_authenticators), der ihr alltäglicher Passkey für die Seite ist
- Einen Passkey in einem [Roaming-Authenticator](#roaming_authenticators), den der Benutzer irgendwo sicher aufbewahrt, als Backup, falls der Benutzer sein Gerät verliert.

Die [`excludeCredentials`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#excludecredentials)-Option, die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird, listet Anmeldeinfo-IDs auf und teilt dem Browser mit, dass die Authenticatoren, die die aufgelisteten Schlüssel enthalten, nicht für den neuen Schlüssel verwendet werden dürfen. Das bedeutet, dass es eine Möglichkeit für die RP ist sicherzustellen, dass der neue Passkey in einem neuen Authenticator erstellt wird.

### Passkey-Backup

Einige Authenticatoren unterstützen Backup durch verschiedene Methoden, wie Cloud-Synchronisation oder manuellen Export. Die von einem Aufruf von `get()` zurückgegebene signierte Assertion enthält eine Reihe von [Flags](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#flags), die unter anderem angeben, ob der Passkey:

- _Backup-berechtigt_ ist: das bedeutet, ob er in einem Authenticator gespeichert ist, der Backup unterstützt
- Tatsächlich gesichert wurde.

Eine RP kann diese Informationen verwenden, um einem Benutzer bei der Verwaltung seiner Anmeldeinformationen zu helfen. Beispielsweise:

- Wenn der Passkey nicht backup-berechtigt ist, könnte die RP reagieren, indem sie den Benutzer einlädt, einen anderen Passkey in einem anderen Authenticator zu erstellen, der als Backup verwendet werden könnte.

- Wenn die RP Benutzer von Passwörtern wegmigriert und der Benutzer ein altes Passwort sowie einen Passkey hat und die Assertion anzeigt, dass der Passkey gesichert wurde, könnte die RP den Benutzer einladen, sein altes Passwort zu löschen, da er es nicht mehr als Backup benötigt.

## Verwaltung von Passkeys

Wir haben gesehen, dass ein Benutzer mehrere Passkeys für ein einziges Konto haben kann, verteilt auf mehrere Authenticatoren und mehrere Geräte. Jeder Passkey entspricht einer WebAuthn-Anmeldeinformation, mit privatem Schlüsselmater, das durch den Authenticator geschützt ist, und einem entsprechenden öffentlichen Schlüssel, der von der RP als Teil der Kontoinformationen des Benutzers gespeichert wird.

Manchmal muss der Benutzer möglicherweise einen Passkey für sein RP-Konto löschen: dies bedeutet im Wesentlichen, den auf dem RP-Server gespeicherten öffentlichen Schlüssel zu löschen, sodass der entsprechende private Schlüssel nicht mehr verwendet werden kann, um den Benutzer anzumelden. Dies ist im Allgemeinen nötig, wenn der Benutzer die Kontrolle über den Authenticator nicht mehr hat, z. B. weil er das Gerät verloren hat, das ihn enthält.

Das bedeutet, dass eine RP eine Möglichkeit implementieren sollte, einem authentifizierten Benutzer das Anzeigen der registrierten Passkeys für sein Konto zu ermöglichen und spezifische öffentliche Schlüssel zu löschen. Für jeden Schlüssel sollte die RP Informationen anzeigen, die dem Benutzer helfen zu verstehen, welcher Schlüssel es ist und mit welchem Authenticator er assoziiert ist. Dies kann Folgendes umfassen:

- **Passkey-Anbietername**: Der Name des Passkey-Anbieters, wie "Windows Hello" oder "Bitwarden".

  > [!NOTE]
  > Um diesen Wert zu bestimmen:
  >
  > - Finden Sie den _AAGUID_-Wert in den [`attestedCredentialData`](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata), die vom Browser aus einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben werden.
  > - Verwenden Sie dies, um den entsprechenden Namen in der [Passkey Provider AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids)-Liste nachzuschlagen.
  >
  > Siehe auch [Bestimmung des Passkey-Anbieters mit AAGUID](https://web.dev/articles/webauthn-aaguid).

- **Zeitstempel**: Die Zeit, zu der der Passkey zuletzt zur Anmeldung verwendet wurde.

- **Backup-Status**: Ein Indikator dafür, ob der Passkey gesichert wurde (siehe [Passkey-Backup](#passkey-backup)).

Zusätzlich sollte der Benutzer in der Lage sein, den Passkey-Namen zu bearbeiten und den Passkey zu löschen.

Wenn der Benutzer versucht, den letzten Passkey zu löschen, sollte die RP ihn über die Implikationen dessen informieren: Die RP könnte dem Benutzer erlauben, sich mit einer anderen Methode wie einem [Einmalkennwort](/de/docs/Web/Security/Authentication/OTP) anzumelden, oder er könnte möglicherweise nicht mehr auf sein Konto zugreifen.

Siehe auch [Benutzern helfen, Passkeys effektiv zu verwalten](https://web.dev/articles/passkey-management).

### Synchronisierung von Server und Authenticatoren

Beachten Sie, dass, wenn der Benutzer einen Passkey auf dem RP-Server löscht, dies eine Asymmetrie zwischen dem Server und dem Authenticator einführt, der den entsprechenden privaten Schlüssel enthält. Der Authenticator denkt immer noch, dass der Passkey gültig ist, sodass der Browser ihn dem Benutzer als Anmeldemöglichkeit anbieten kann, aber die RP wird dessen Assertions nicht mehr akzeptieren.

Um die Wahrscheinlichkeit von Problemen wie diesen zu verringern, definiert die WebAuthn-API eine Reihe von statischen Methoden von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), die es einer RP ermöglichen, Authenticatoren über serverseitige Änderungen zu informieren:

- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) teilt dem Browser mit, dass ein bestimmter Passkey von der RP nicht erkannt wurde und wird typischerweise von der RP unmittelbar nachdem der Benutzer versucht hat, sich mit diesem Passkey anzumelden, aufgerufen. Das häufigste Szenario hierbei ist, dass der Benutzer diesen Passkey auf dem Server gelöscht und dann versehentlich versucht hat, sich mit ihm anzumelden.

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) gibt dem Browser die Identifikatoren aller Passkeys, die die RP derzeit als gültig akzeptiert, um alle angeschlossenen Authenticatoren dazu zu bringen, ihre gespeicherten Schlüssel zu aktualisieren. Es könnte jedes Mal aufgerufen werden, wenn der Benutzer erfolgreich authentifiziert wird. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie die Anmeldeinformationen des Benutzers preisgibt.

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) teilt dem Browser den aktuellen Benutzernamen und Anzeigenamen des Benutzers mit und sollte aufgerufen werden, wenn ein authentifizierter Benutzer diese Werte ändert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie Benutzerdaten preisgibt.

## Migration von Passwörtern

Die meisten Websites, die Unterstützung für Passkeys hinzufügen, unterstützen bereits passwortbasierte Authentifizierung und haben eine bestehende Basis von Benutzern mit Passwörtern. Diese Benutzer sind nicht sicher vor den [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication), bis sie nicht nur Passkeys auf Ihrer Seite haben und verwenden, sondern auch keine Passwörter mehr mit ihren Konten assoziiert sind.

Sie können einen dreistufigen Prozess zur Migration von Benutzern von Passwörtern implementieren:

- [Benutzern die Möglichkeit geben, Passkeys neben ihren Passwörtern zu erstellen](#erstellung_von_passkeys_neben_passwörtern)
- [Benutzern die Möglichkeit geben, ihre Passkeys anstelle ihrer Passwörter zu verwenden](#verwendung_von_passkeys_neben_passwörtern)
- [Benutzern die Möglichkeit geben, ihre Passwörter zu löschen](#zurückziehen_von_passwörtern)

### Erstellung von Passkeys neben Passwörtern

Der erste Schritt hier besteht darin, Benutzern die Möglichkeit zu bieten, einen Passkey zu erstellen, wenn sie sich erfolgreich mit einem Passwort auf Ihrer Seite anmelden.

#### Bedingtes Erstellen

Ein weiterer Schritt zur Erhöhung der Passkey-Nutzung ist eine Funktion namens _bedingtes Erstellen_. Dies ermöglicht es einer RP, einen neuen Passkey für das Konto eines Benutzers zu erstellen, ohne dass eine Benutzerinteraktion erforderlich ist, wenn bestimmte Bedingungen erfüllt sind.

Um das bedingte Erstellen zu ermöglichen, ruft die RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und übergibt die [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation)-Option mit dem Wert `"conditional"`:

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

- Wenn sich der Benutzer gerade mit einem Passwort angemeldet hat, ein Passwort-Manager verwendet hat, der auch Passkeys unterstützt (das heißt, ein _Credentials Manager_, der auch als Authenticator fungieren kann), dann wird der Browser diesen Credentials Manager bitten, einen neuen Passkey für den Benutzer zu erstellen, ohne den Benutzer zu fragen.

- Andernfalls wird der Aufruf von `create()` fehlschlagen.

Aus Sicht des Benutzers, wenn das Erstellen gescheitert ist, weiß er nicht, dass es gemacht wurde, und wenn es erfolgreich ist, kann die RP ihn informieren, dass er einen Passkey hat, den er beim nächsten Mal zur Anmeldung verwenden kann.

Die Theorie hier ist, dass, wenn der Benutzer sich bereits auf einen Credentials Manager zur Anmeldung verlässt, er ihm implizit vertraut, um seine Anmeldeinformationen _allgemein_ zu verwalten, sodass er ihm vertrauen kann, um eine neue Form von Anmeldeinformationen für ihn zu erstellen.

### Verwendung von Passkeys neben Passwörtern

Wenn ein Benutzer sowohl ein Passwort als auch einen oder mehrere Passkeys hat, kann er wählen, ob er sich mit dem einen oder dem anderen anmelden möchte und die RP könnte ihn ermutigen, den Passkey zu verwenden.

In der Übergangsphase könnte ein Benutzer entweder Passwörter oder Passkeys für sein Konto haben oder beides. In dieser Situation kann eine Benutzeroberfläche, die ihn fragt, welche Methode er zur Anmeldung verwenden möchte, verwirrend sein: Er erinnert sich möglicherweise nicht daran, welche Methode er für welches Konto hat.

#### Autovervollständigungs-UI

Eine Technik, um Benutzern in dieser Situation zu helfen, ist die _Autovervollständigungs-UI_, auch manchmal als _bedingte Mediation_ bezeichnet.

In dieser Technik bietet die Anmeldeseite der RP dem Benutzer ein Formular an, das es ihm erlaubt, sich mit einem Benutzernamen und Passwort anzumelden. Im Feld für den Benutzernamen fügt die RP einen Autovervollständigungswert von `"webauthn"` hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" autofocus />
```

Im Hintergrund startet die RP den normalen Prozess, um eine mit einem Passkey signierte Assertion anzufordern: sie holt eine [Challenge](#challenges) vom Server und bereitet die anderen Optionen für [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) vor.

Wenn jedoch die RP `get()` aufruft, übergibt sie die Option `mediation: "conditional"` (genau wie beim [bedingten Erstellen](#bedingtes_erstellen)):

```js
const assertion = await navigator.credentials.get({
  publicKey: options,
  mediation: "conditional",
});
```

Der Effekt davon ist, dass der Aufruf wartet, bis der Benutzer mit dem Benutzernamen-Feld interagiert. Wenn der Benutzer mit dem Feld interagiert, sucht der Browser nach Passkeys, die verwendet werden können, um sich bei der RP anzumelden, und zeigt sie dem Benutzer als Autovervollständigungswerte an. Wenn der Benutzer einen auswählt, wird der ausgewählte Passkey verwendet und die RP kann die resultierende Assertion verwenden, um den Benutzer anzumelden.

Wenn der Benutzer keinen Passkey für die Seite hat oder keinen der angebotenen Passkeys auswählt, kann er seinen Benutzernamen und sein Passwort eingeben, oder es kann von seinem Passwort-Manager ausgefüllt werden.

Das bedeutet, dass Sie Benutzer unterstützen können, die entweder Passwörter oder Passkeys oder beides haben, ohne spezielle Benutzeroberfläche und ohne dass der Benutzer sich daran erinnern muss, ob er tatsächlich einen Passkey für Ihre Seite hat.

### Zurückziehen von Passwörtern

Selbst wenn ein Benutzer einen Passkey für Ihre Seite hat und ihn bevorzugt zum Passwort verwendet, ist er dennoch anfällig für Angriffe wie [Credential-Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing), [Rateversuche](/de/docs/Web/Security/Authentication/Passwords#guessing) und [Phishing](/de/docs/Web/Security/Attacks/Phishing), solange Sie ein Passwort für sein Konto behalten.

Als letzten Schritt könnten Sie einem Benutzer anbieten, sein Passwort vollständig zu löschen. Sie können dies als Option in ihren Kontoeinstellungen anbieten und sie möglicherweise dazu drängen, ihr Passwort zu löschen, wenn sie es seit langer Zeit nicht mehr verwendet haben (aber regelmäßig ihre Passkeys verwendet haben).

Sie sollten jedoch auch in Betracht ziehen, dass das Vorhandensein eines Passworts einem Benutzer hilft, gegen das Aussperren aus seinem Konto geschützt zu sein, falls er den Zugriff auf seinen Passkey verliert. Bevor Sie Benutzer dazu ermutigen, ihr Passwort zu löschen, können Sie prüfen, ob sie alternativen Schutz haben, wie [mehrere Passkeys auf verschiedenen Authenticatoren](#erstellung_mehrerer_passkeys) und/oder Passkeys, die [gesichert](#passkey-backup) wurden.

## Siehe auch

- [Die Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Passkey Central](https://www.passkeycentral.org/home)
- [passkeys.dev](https://passkeys.dev/)
- [Passkeys](https://developers.google.com/identity/passkeys/) (developers.google.com)
