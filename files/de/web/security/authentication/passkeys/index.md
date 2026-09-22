---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass diese auf der Website selbst Passwörter oder andere geheime Codes eingeben müssen. Sie beheben [viele der schwerwiegendsten Schwächen anderer Authentifizierungsmethoden](#sicherheitseigenschaften_von_passkeys), wie etwa Passwörter.

Anstelle eines gemeinsamen Geheimnisses basieren Passkeys auf Public-Key-Kryptografie. Ein Passkey ist ein {{Glossary("Public-key_cryptography", "Public-/Private-Key-Paar")}}, das an das Konto eines bestimmten Benutzers auf einer bestimmten Website gebunden ist.

Der private Schlüssel wird in einem Modul namens _Authenticator_ gespeichert, das sich [im Gerät des Benutzers befindet oder daran angeschlossen ist](#plattform-_und_roaming-authenticators). Ein Authenticator kann in die Plattform integriert sein, ein separater Hardwareschlüssel wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) oder eine Anmeldedaten-Manager-App wie [KeePassXC](https://keepassxc.org/) sein.

Der öffentliche Schlüssel wird auf dem Server der Website gespeichert. Wenn sich der Benutzer anmeldet, verwendet der Authenticator den privaten Schlüssel, um einen [_Challenge_-Wert](#challenges) vom Server zusammen mit Kontextinformationen wie dem anfragenden {{Glossary("origin", "Origin")}} {{Glossary("digital_signature", "digital zu signieren")}}. Das resultierende Objekt wird als _Assertion_ bezeichnet. Der Server der Website kann den öffentlichen Schlüssel verwenden, um die Signatur der Assertion zu überprüfen und den Benutzer anzumelden.

In diesem Leitfaden werden wir:

- die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API) vorstellen, die Web-Apps die Verwendung von Passkeys ermöglicht.
- die beiden von WebAuthn unterstützten Hauptabläufe durchgehen: [Registrierung](#registrierung) und [Anmeldung](#anmeldung).
- einige der wichtigsten [Funktionen der WebAuthn API](#funktionen_von_webauthn) untersuchen.
- die [Sicherheitseigenschaften von Passkeys](#sicherheitseigenschaften_von_passkeys) zusammenfassen.
- einige bewährte Verfahren untersuchen, um zu verhindern, dass Benutzer ausgesperrt werden, falls sie [ihre Passkeys verlieren](#umgang_mit_verlorenen_passkeys), um Benutzern beim [Verwalten ihrer Passkeys](#passkeys_verwalten) zu helfen und um Benutzern bei der [Migration von Passwörtern](#migration_von_passwörtern) zu helfen.

## Die WebAuthn API

Um mit einem Authenticator zu interagieren, verwendet eine Website die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API). In der WebAuthn-Spezifikation wird eine Website, die Passkeys zur Authentifizierung von Benutzern verwendet, als _Relying Party_ (RP) bezeichnet, und wir werden diesen Begriff in diesem Leitfaden verwenden.

WebAuthn ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), einem Framework zur Verwaltung von {{Glossary("credential", "Anmeldedaten")}} für verschiedene Authentifizierungsmethoden, einschließlich [Passwörtern](/de/docs/Web/Security/Authentication/Passwords) und [föderierter Identität](/de/docs/Web/Security/Authentication/Federated_identity) sowie Passkeys.

Die beiden wichtigsten von RPs verwendeten Funktionen sind:

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), die Sie verwenden, um einen neuen Passkey zu erstellen, wenn sich ein Benutzer auf Ihrer Website registriert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die Sie verwenden, um eine Assertion aus dem gespeicherten Passkey des Benutzers zu erzeugen, wenn sich der Benutzer auf Ihrer Website anmeldet.

## Registrierung

In diesem Abschnitt werden wir den Ablauf zum Erstellen eines neuen Passkeys und dessen Verwendung zum Einrichten eines neuen Benutzerkontos durchgehen.

![Übersicht über die Benutzerregistrierung mit Passkeys.](passkeys-register.svg)

Wenn der Benutzer die Registrierung auf einer Website anfordert, fordert der Front-End-Code der RP zunächst einen [_Challenge_-Wert](#challenges) von ihrem Server an: Dies ist ein auf dem Server erzeugter Zufallswert, den der Server später verwendet, um sicherzustellen, dass der resultierende Passkey als Antwort auf diese Anfrage erzeugt wurde.

Als Nächstes ruft der Front-End-Code der RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf. Dabei können verschiedene Optionen angegeben werden, darunter:

- **Attestation-Präferenzen**: Ob die RP an einer Authenticator-[Attestation](#attestation) interessiert ist (ein Mechanismus, der der RP bei der Entscheidung hilft, ob sie dem Authenticator vertrauen sollte) und, falls ja, welche Form die Attestation haben soll.

- **Authenticator-Präferenzen**: Welcher [Typ von Authenticator](#plattform-_und_roaming-authenticators) verwendet werden soll und ob der Authenticator vor der Erstellung des Passkeys eine [Benutzerverifizierung](#benutzerverifizierung) durchführen soll.

- **Challenge**: Die vom Server der RP erzeugte [Challenge](#challenges). Dies trägt zum Schutz vor {{Glossary("replay_attack", "Replay-Angriffen")}} bei.

- **Website-Informationen**: Ein für Menschen lesbarer Name und eine ID für die RP, die dem neuen Passkey zugeordnet werden. Die ID bestimmt den [Geltungsbereich](#passkey-geltungsbereich) des resultierenden Passkeys.

- **Benutzerinformationen**: Informationen über den Benutzer, die dem neuen Passkey zugeordnet werden, einschließlich eines für Menschen lesbaren Anzeigenamens, eines Konto-Identifikators und eines für Menschen lesbaren Konto-Identifikators wie einer E-Mail-Adresse oder eines Benutzernamens.

Abhängig von den Fähigkeiten des Authenticators und den Präferenzen der RP kann der Authenticator den Benutzer auffordern, die Erstellung des Passkeys mittels einer [Benutzerverifizierungs](#benutzerverifizierung)-Methode zu autorisieren, beispielsweise durch die Verwendung eines biometrischen Merkmals wie eines Fingerabdrucks.

Der Authenticator erstellt dann einen Passkey für das Konto. Er speichert den privaten Schlüssel lokal und gibt ein Objekt zurück, das den öffentlichen Schlüssel, die Challenge und einige zusätzliche Informationen enthält. Wenn der Authenticator eine Attestation durchführt, wird dies alles entweder mit dem privaten Schlüssel oder einem zum Authenticator gehörenden [Attestation](#attestation)-Schlüssel {{Glossary("digital_signature", "digital signiert")}}.

Der Front-End-Code der RP sendet dies an den Server, der:

- die Attestation überprüft, falls eine Attestation stattfindet.
- überprüft, ob die Challenge den erwarteten Wert hat.
- ein neues Benutzerkonto erstellt und darin den öffentlichen Schlüssel zusammen mit den Kontoinformationen des Benutzers speichert.

## Anmeldung

In diesem Abschnitt werden wir den Ablauf zum Anmelden eines Benutzers mit einem Passkey durchgehen.

![Übersicht über die Benutzeranmeldung mit Passkeys.](passkeys-sign-in.svg)

Wenn der Benutzer versucht, sich anzumelden, fordert der Front-End-Code der RP erneut einen [Challenge](#challenges)-Wert vom Server an.

Als Nächstes ruft der Front-End-Code der RP [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Dabei können verschiedene Optionen angegeben werden, darunter:

- **Zulässige Anmeldedaten**: Ein Array von Identifikatoren für die Passkeys, die die RP akzeptiert. Dieses Array kann leer sein oder weggelassen werden; in diesem Fall können beliebige geeignete Passkeys verwendet werden.

- **Challenge**: Die vom Server der RP erzeugte [Challenge](#challenges).

- **Website-ID**: Die ID der RP, die versucht, den Benutzer anzumelden. Siehe [Passkey-Geltungsbereich](#passkey-geltungsbereich).

- **Benutzerverifizierung**: Ob der Authenticator vor der Verwendung des Passkeys eine [Benutzerverifizierung](#benutzerverifizierung) durchführen soll.

Als Nächstes sucht der Browser nach Passkeys, die den angegebenen Kriterien entsprechen: Findet er mehr als einen, kann er den Benutzer auffordern, einen auszuwählen. Der Authenticator, der diesen Passkey speichert, fordert den Benutzer in der Regel auf, die Verwendung dieses Passkeys zu autorisieren, einschließlich einer [Benutzerverifizierung](#benutzerverifizierung), wenn diese von der RP angefordert wird und vom Authenticator unterstützt wird.

Der Authenticator verwendet dann den privaten Schlüssel des Passkeys, um eine digital signierte Assertion zu erstellen, die die Challenge und weitere Daten enthält.

Das Front-End der RP sendet die Assertion an den Server, der die Signatur mithilfe des gespeicherten öffentlichen Schlüssels überprüft. Ist die Überprüfung erfolgreich, kann der Benutzer angemeldet werden.

## Funktionen von WebAuthn

In diesem Abschnitt gehen wir näher auf verschiedene Aspekte der WebAuthn API ein.

### Plattform- und Roaming-Authenticators

Die WebAuthn API unterscheidet zwei Arten von Authenticators:

- **Plattform-Authenticators**
  - : Diese Authenticators können nicht vom Gerät entfernt werden. Dazu gehören beispielsweise in das Betriebssystem des Geräts integrierte Authenticators wie das [Touch-ID](https://en.wikipedia.org/wiki/Touch_ID)-System auf Apple-Geräten oder das [Windows-Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System.
- **Roaming-Authenticators**
  - : Diese Authenticators können vom Gerät entfernt und an ein anderes Gerät angeschlossen werden. Das klassische Beispiel hierfür ist ein in einem USB-Schlüssel implementierter Authenticator wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Wenn eine RP einen neuen Passkey erstellt, kann sie im Rahmen der Option [`authenticatorSelection`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#authenticatorselection), die sie an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergibt, anfordern, welcher Authenticator-Typ verwendet werden soll.

Der Hauptvorteil eines Plattform-Authenticators besteht darin, dass er für den Benutzer praktisch ist: Er muss keine separate Hardware verwalten. Der Hauptnachteil besteht darin, dass er nur mit seinem Hostgerät verwendet werden kann.

Plattform-Authenticators können manchmal als Roaming-Authenticators fungieren: Beispielsweise kann ein Plattform-Authenticator auf einem Mobilgerät über eine Bluetooth-Verbindung einem Laptop als Roaming-Authenticator zur Verfügung stehen.

Obwohl Plattform-Authenticators nicht aus ihrem Gerät entfernt werden können, können sie ihre Passkeys oft über Cloud-Synchronisierung oder Import-/Exportfunktionen mit anderen Authenticators teilen. Beispielsweise kann ein Plattformanbieter es Benutzern ermöglichen, ihre Passkeys auf allen Geräten seiner Produktfamilie zu teilen.

### Auffindbare und nicht auffindbare Anmeldedaten

Die WebAuthn-Spezifikation unterscheidet zwischen _auffindbaren_ und _nicht auffindbaren_ Anmeldedaten.

- **Auffindbare Anmeldedaten**, auch als _resident keys_ bezeichnet, können verwendet werden, ohne dass die RP zunächst den zu authentifizierenden Benutzer identifizieren muss: Das heißt, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergebene Array „zulässige Anmeldedaten“ kann leer sein. Bei auffindbaren Anmeldedaten wird das gesamte Schlüsselmaterial zum Signieren im Authenticator gespeichert, sodass der Authenticator Signaturen erzeugen kann, ohne Eingaben von der RP zu benötigen.

- **Nicht auffindbare Anmeldedaten**, auch als _non-resident keys_ bezeichnet, erfordern, dass die RP zunächst den zu authentifizierenden Benutzer identifiziert, beispielsweise indem sie ihn seinen Benutzernamen eingeben lässt, und dann die zugehörige Anmeldedaten-ID im Array „zulässige Anmeldedaten“ an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergibt.

  Nicht auffindbare Anmeldedaten benötigen die Anmeldedaten-ID, weil sie den Signaturschlüssel selbst nicht im Authenticator speichern. Stattdessen erzeugen sie den Signaturschlüssel jedes Mal, wenn er benötigt wird, aus einem internen Seed und dem Wert der Anmeldedaten-ID. Das heißt, der Kontoschlüssel ist nicht im Authenticator gespeichert.

Der Vorteil nicht auffindbarer Anmeldedaten besteht darin, dass ein Authenticator mit begrenztem Speicher eine potenziell unbegrenzte Anzahl von Konten unterstützen kann, da das Schlüsselmaterial für jedes Konto nicht im Authenticator gespeichert wird.

Der Vorteil auffindbarer Anmeldedaten besteht darin, dass sie einem Browser ermöglichen, [Autofill](#autofill-benutzeroberfläche) mit Public-Key-Anmeldedaten zu implementieren. Dadurch wird die Anmeldung für Benutzer deutlich einfacher, insbesondere wenn sie für eine bestimmte Website sowohl Public-Key-Anmeldedaten als auch Passwörter haben könnten.

**Aus diesem Grund müssen Passkeys immer auffindbare Anmeldedaten sein. RPs, die eine Passkey-basierte Authentifizierung implementieren, sollten sie daher immer auffindbar machen**.

Um auffindbare Anmeldedaten zu erstellen, sollte die RP beim Erstellen neuer Anmeldedaten im Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) die Option `residentKey` auf `"required"` und die Option `requireResidentKey` auf `true` setzen.

### Challenges

Wenn eine RP einen Authenticator auffordert, einen neuen Passkey zu erstellen oder einen vorhandenen Passkey zu verwenden, muss sie eine _Challenge_ bereitstellen. Dies ist ein zufälliger, anfragespezifischer Wert, der für einen Angreifer nicht vorhersagbar sein darf. Die Challenge muss in einer vertrauenswürdigen Umgebung erzeugt werden, was im Allgemeinen bedeutet: auf dem Server und nicht im Front-End.

Der Front-End-Code der RP übergibt die Challenge an den Aufruf von `create()` oder `get()`, und der Browser schließt denselben Wert in das von diesen Methoden zurückgegebene Objekt ein. Bei `get()` ist der Challenge-Wert außerdem Teil der Eingabe für die vom Authenticator berechnete digitale Signatur.

Wenn der Webserver die Antwort des Authenticators überprüft, muss er prüfen, ob die Challenge denselben Wert hat, den er ursprünglich bereitgestellt hat.

Der Webserver sollte den Challenge-Wert außerdem nach etwa 10 Minuten invalidieren und alle Antworten ablehnen, die die Challenge enthalten und nach dieser Zeit eintreffen.

Die Challenge stellt einen Nachweis dar, dass die Antwort des Authenticators eine Antwort auf _diese_ Anfrage war und keine alte Antwort auf eine frühere Anfrage, die ein Angreifer stehlen konnte. Diese Art von Angriff wird als {{Glossary("replay_attack", "Replay-Angriff")}} bezeichnet.

### Attestation

Die Sicherheit eines Passkeys hängt teilweise von der Zuverlässigkeit des verwendeten Authenticators ab. Wenn ein Authenticator beispielsweise die von ihm gespeicherten privaten Schlüssel nicht schützt, könnte ein Angreifer die Schlüssel stehlen und Benutzer imitieren. WebAuthn definiert einen optionalen Mechanismus namens _Attestation_, bei dem ein Authenticator der RP überprüfbare Nachweise über den Authenticator und die von ihm erzeugten Daten, wie Schlüsselpaare oder signierte Assertions, liefern kann. Dies kann der RP bei der Entscheidung helfen, ob sie sich zur Authentifizierung ihrer Benutzer auf den Authenticator verlassen möchte.

Um Attestation zu implementieren, enthält der Authenticator ein Schlüsselpaar namens _Attestation-Schlüssel_, das bei der Herstellung in das Gerät integriert wurde und {{Glossary("digital_certificate", "zertifiziert")}} ist als zu der Organisation gehörend, die diesen Authenticator hergestellt hat. Beispielsweise könnte das Zertifikat angeben, dass dieser Authenticator von „Acme Authenticator Incorporated“ produziert wurde.

Wenn der Authenticator einen neuen Passkey erstellt, signiert er das resultierende Objekt mit seinem Attestation-Schlüssel. Die RP überprüft die Signatur und das zugehörige Zertifikat und erhält dadurch einen Nachweis, dass der Passkey von einem durch „Acme Authenticator Incorporated“ hergestellten Authenticator erstellt wurde.

Nicht alle Authenticators unterstützen Attestation, und RPs können angeben, dass sie nicht an Attestation interessiert sind. In diesen Situationen ist das von einem Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegebene Objekt möglicherweise gar nicht signiert oder mit dem Passkey selbst signiert. Dies wird als _Self-Attestation_ bezeichnet. In diesen Situationen hat die RP keine verlässlichen Nachweise über Herkunft oder Fähigkeiten des Authenticators.

### Benutzerverifizierung

Wenn eine Website [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zum Erstellen eines neuen Passkeys aufruft oder [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) zum Erstellen einer Assertion aufruft, fordert der Authenticator den Benutzer immer auf, dem Vorgang zuzustimmen.

Die RP kann den Authenticator außerdem auffordern, eine _Benutzerverifizierung_ durchzuführen. Das bedeutet, dass der Benutzer aufgefordert wird, die Verwendung seiner Anmeldedaten zu autorisieren, etwa durch die Eingabe einer PIN oder die Verwendung eines biometrischen Merkmals wie eines Fingerabdrucks.

In diesem Fall wird dies als eine Form der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} angesehen: Der Authenticator selbst ist „etwas, das der Benutzer besitzt“, während die PIN beziehungsweise das biometrische Merkmal „etwas, das er weiß“ oder „etwas, das er ist“ darstellt.

Beachten Sie, dass nicht alle Authenticators die Benutzerverifizierung unterstützen.

### Passkey-Geltungsbereich

Der Geltungsbereich eines Passkeys bestimmt, welche Websites den Passkey verwenden dürfen.

Standardmäßig gilt:

- Wenn eine Seite durch Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) einen Passkey erstellt, setzt der Browser die _RP-ID_ des Passkeys auf die Domain-Komponente des {{Glossary("origin", "Origin")}} des Aufrufers, und der Authenticator speichert diesen Wert zusammen mit dem Passkey.

- Wenn eine Seite durch Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) einen Passkey verwendet, übergibt der Browser die Domain-Komponente des {{Glossary("origin", "Origin")}} des Aufrufers an den Authenticator. Der Authenticator erlaubt die Verwendung des Passkeys nur, wenn dieser Wert mit der gespeicherten RP-ID übereinstimmt.

Das bedeutet, dass ein Passkey standardmäßig nur von einer Seite mit demselben Origin, mit Ausnahme des Ports, wie die Seite verwendet werden kann, die ihn ursprünglich erstellt hat.

Websites dürfen diese Regeln innerhalb bestimmter Einschränkungen lockern:

- Wenn eine Website einen Passkey erstellt, kann sie eine ID an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben, und der Authenticator verwendet diese als RP-ID.

- Ebenso kann eine Website beim Versuch, einen Passkey zu verwenden, eine ID an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben, und der Authenticator vergleicht diese ID mit der gespeicherten RP-ID.

Sowohl für `create()` als auch für `get()` muss der übergebene Wert eine {{Glossary("registrable_domain", "registrierbare Domain")}} sein, die ein _Domain-Suffix_ der Domain des Origin des Aufrufers ist.

Diese Lockerung bedeutet beispielsweise, dass eine Seite unter `https://register.example.com` einen Passkey mit einer RP-ID von `example.com` erstellen kann und eine Seite unter `https://login.example.com` diesen Passkey dann verwenden darf.

Der Passkey-Geltungsbereich hilft bei der Abwehr von [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffen. Bei einem Phishing-Angriff wird dem Benutzer eine bösartige Seite präsentiert, die wie die Zielwebsite aussieht und ihn auffordert, seine Anmeldedaten für die Zielwebsite einzugeben. Typischerweise ähnelt die URL der bösartigen Website derjenigen der Zielwebsite und trägt so dazu bei, den Benutzer zu verwirren. Wenn die Zielwebsite beispielsweise `https://example.com` ist, könnte die Phishing-Website unter `https://examp1e.com` bereitgestellt werden.

Mit den Geltungsbereichsregeln für Passkeys kann eine unter `https://examp1e.com` bereitgestellte Website jedoch keine Passkeys verwenden, die für `https://example.com` erstellt wurden.

### Origin-Überprüfung

Die von einem Authenticator zurückgegebene signierte Assertion enthält Informationen über den Kontext des Aufrufers:

- Den {{Glossary("origin", "Origin")}} des Dokuments, das [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen hat.
- Falls der Aufrufer als {{htmlelement("iframe")}} eingebettet war, ob der Aufrufer denselben Origin wie das Dokument der obersten Ebene hatte.
- Den Origin des Dokuments der obersten Ebene, falls der Aufrufer als {{htmlelement("iframe")}} eingebettet war und nicht denselben Origin wie der Aufrufer hatte.

Wenn der RP-Server die Assertion überprüft, muss er prüfen, ob diese Werte den erwarteten Werten entsprechen.

Dies bietet zusätzlich zu dem durch den [Passkey-Geltungsbereich](#passkey-geltungsbereich) bereitgestellten Schutz eine Schutzebene gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe.

## Sicherheitseigenschaften von Passkeys

Passkeys sind sicherer als Passwörter. An ihrem Design lässt sich erkennen, wie sie die schwerwiegendsten [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) beheben:

- Anders als ein Passwort erfindet der Benutzer nie einen Passkey-Wert und muss ihn sich auch nicht merken. Das bedeutet, dass Benutzer keine schwachen Passkey-Werte wählen können und daher nicht für [Rate](/de/docs/Web/Security/Authentication/Passwords#guessing)-Angriffe anfällig sind. Die Erzeugung von Passkeys wird vom Benutzer auf den Authenticator verlagert.

- Passkeys werden niemals über Websites hinweg wiederverwendet und sind daher nicht für [Credential-Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe anfällig. Erhält ein Angreifer Zugriff auf einen Passkey, kann er ihn nur für die Website verwenden, die ihn ursprünglich erstellt hat.

- Bei Passkeys muss der Server niemals Geheimnisse speichern: Er speichert nur den öffentlichen Schlüssel. Wenn ein Angreifer also [in die Datenbank des Servers eindringt](/de/docs/Web/Security/Authentication/Passwords#database_compromise), kann er den privaten Schlüssel nicht kompromittieren, da dieser im Authenticator gespeichert ist. Beachten Sie jedoch, dass er Benutzerkonten kompromittieren kann, wenn er gefälschte Anmeldedaten in die Datenbank des Servers _schreiben_ kann.

- Wenn der Benutzer versucht, sich anzumelden, sucht der Browser nur nach Passkeys, deren Geltungsbereich mit der anfragenden Website übereinstimmt, und der Server der RP kann überprüfen, ob der Origin des Anfragenden dem erwarteten Origin entspricht. Dadurch sind Passkeys resistent gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, da Front-End-Code, der von einer Phishing-Website wie `https://examp1e.com` bereitgestellt wird, den mit `https://example.com` verknüpften Passkey nicht verwenden kann.

Obwohl Passkeys Schutz gegen diese häufigen Angriffe auf die Web-Authentifizierung bieten, beseitigen sie nicht alle Bedrohungen. Da der breite Einsatz von Passkeys noch relativ neu ist, gibt es noch kein ausgereiftes Verständnis der Angriffe, denen Passkeys ausgesetzt sein können. Es ist jedoch wahrscheinlich, dass sich manche Angriffe auf die Geräte der Benutzer konzentrieren, etwa indem sie dazu gebracht werden, einen bösartigen Authenticator zu installieren. Angriffe können auch Teile des Authentifizierungssystems betreffen, die nicht durch Passkeys geschützt sind, wie etwa Mechanismen zur Kontowiederherstellung.

## Umgang mit verlorenen Passkeys

Wenn ein Benutzer einen Authenticator verliert, unabhängig davon, ob es sich um ein separates Modul oder eine Integration in sein Telefon handelt, verliert er alle darin enthaltenen Passkeys.

In diesem Abschnitt besprechen wir zwei Strategien für den Umgang mit dem Verlust eines Authenticators:

- [Erstellen mehrerer Passkeys für ein einzelnes Konto](#erstellen_mehrerer_passkeys)
- [Sichern von Passkeys](#passkey-backup)

### Erstellen mehrerer Passkeys

Im Gegensatz zu den Empfehlungen für Passwörter werden RPs dazu ermutigt, mehrere Passkeys für ein einzelnes Konto zu erstellen. Ein häufiges Muster wäre:

- Ein Passkey in einem [Plattform-Authenticator](#platform_authenticators), der der alltägliche Passkey des Benutzers für die Website ist.
- Ein Passkey in einem [Roaming-Authenticator](#roaming_authenticators), den der Benutzer als Backup für den Fall, dass er sein Gerät verliert, an einem sicheren Ort aufbewahrt.

Die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergebene Option [`excludeCredentials`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#excludecredentials) listet Anmeldedaten-IDs auf und teilt dem Browser mit, dass die Authenticators, die die aufgelisteten Schlüssel enthalten, nicht für den neuen Schlüssel verwendet werden dürfen. Das heißt, sie ist eine Möglichkeit für die RP sicherzustellen, dass der neue Passkey in einem neuen Authenticator erstellt wird.

### Passkey-Backup

Einige Authenticators unterstützen Backups mit verschiedenen Methoden, etwa Cloud-Synchronisierung oder manuellem Export. Die signierte Assertion, die von einem Aufruf von `get()` zurückgegeben wird, enthält eine Reihe von [Flags](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#flags), die unter anderem angeben, ob der Passkey:

- _backupfähig_ ist, das heißt, ob er in einem Authenticator gespeichert ist, der Backups unterstützt.
- tatsächlich gesichert wurde.

Eine RP kann diese Informationen verwenden, um einem Benutzer bei der Verwaltung seiner Anmeldedaten zu helfen. Zum Beispiel:

- Wenn der Passkey nicht backupfähig ist, kann die RP darauf reagieren, indem sie den Benutzer auffordert, einen weiteren Passkey in einem anderen Authenticator zu erstellen, der als Backup verwendet werden könnte.

- Wenn die RP Benutzer von Passwörtern weg migriert und der Benutzer sowohl ein altes Passwort als auch einen Passkey hat und die Assertion angibt, dass der Passkey gesichert wurde, kann die RP den Benutzer auffordern, sein altes Passwort zu löschen, da er es nicht mehr als Backup benötigt.

## Passkeys verwalten

Wir haben gesehen, dass ein Benutzer mehrere Passkeys für ein einzelnes Konto haben kann, die über mehrere Authenticators und mehrere Geräte verteilt sind. Jeder Passkey entspricht einer WebAuthn-Anmeldedaten, wobei das private Schlüsselmaterial durch den Authenticator geschützt und ein entsprechender öffentlicher Schlüssel von der RP als Teil der Kontoinformationen des Benutzers gespeichert wird.

Manchmal muss ein Benutzer einen Passkey für sein RP-Konto löschen: Dies bedeutet im Wesentlichen, den auf dem Server der RP gespeicherten öffentlichen Schlüssel zu löschen, sodass der entsprechende private Schlüssel nicht mehr zum Anmelden des Benutzers verwendet werden kann. Dies ist im Allgemeinen erforderlich, wenn der Benutzer keine Kontrolle mehr über den Authenticator hat, etwa weil er das Gerät verloren hat, das ihn enthält.

Das bedeutet, dass eine RP eine Möglichkeit implementieren sollte, damit ein authentifizierter Benutzer die registrierten Passkeys für sein Konto anzeigen und bestimmte öffentliche Schlüssel löschen kann. Für jeden Schlüssel sollte die RP Informationen anzeigen, die einem Benutzer helfen zu verstehen, um welchen Schlüssel es sich handelt und welchem Authenticator er zugeordnet ist. Dazu können gehören:

- **Name des Passkey-Anbieters**: Der Name des Passkey-Anbieters, etwa „Windows Hello“ oder „Bitwarden“.

  > [!NOTE]
  > So ermitteln Sie diesen Wert:
  >
  > - Suchen Sie den Wert _AAGUID_ in den [`attestedCredentialData`](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata), die vom Browser nach einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben werden.
  > - Verwenden Sie diesen, um den entsprechenden Namen in der Liste [Passkey Provider AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids) nachzuschlagen.
  >
  > Siehe auch [Determine the passkey provider with AAGUID](https://web.dev/articles/webauthn-aaguid).

- **Zeitstempel**: Der Zeitpunkt, zu dem der Passkey zuletzt zur Anmeldung verwendet wurde.

- **Backup-Status**: Ein Indikator dafür, ob der Passkey gesichert wurde (siehe [Passkey-Backup](#passkey-backup)).

Zusätzlich sollte der Benutzer den Passkey-Namen bearbeiten und den Passkey löschen können.

Wenn der Benutzer versucht, den letzten Passkey zu löschen, sollte die RP ihn über die Folgen informieren: Die RP könnte dem Benutzer erlauben, sich mit einer anderen Methode wie einem [Einmalcode](/de/docs/Web/Security/Authentication/OTP) anzumelden, oder er könnte möglicherweise nicht mehr auf sein Konto zugreifen.

Siehe auch [Help users manage passkeys effectively](https://web.dev/articles/passkey-management).

### Server und Authenticators synchronisieren

Beachten Sie, dass das Löschen eines Passkeys auf dem Server der RP eine Asymmetrie zwischen dem Server und dem Authenticator einführt, der den entsprechenden privaten Schlüssel enthält. Der Authenticator hält den Passkey weiterhin für gültig, sodass der Browser ihn dem Benutzer möglicherweise als Anmeldeoption anbietet, die RP dessen Assertions jedoch nicht mehr akzeptiert.

Um die Wahrscheinlichkeit solcher Probleme zu verringern, definiert die WebAuthn API eine Reihe statischer Methoden von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), die es einer RP ermöglichen, Authenticators über serverseitige Änderungen zu informieren:

- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) teilt dem Browser mit, dass ein bestimmter Passkey von der RP nicht erkannt wurde. Die Methode wird typischerweise von der RP unmittelbar aufgerufen, nachdem der Benutzer versucht hat, sich mit diesem Passkey anzumelden. Das häufigste Szenario ist hier, dass der Benutzer diesen Passkey auf dem Server gelöscht und dann fälschlicherweise versucht hat, sich damit anzumelden.

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) gibt dem Browser die Identifikatoren aller Passkeys, die die RP derzeit als gültig akzeptiert, damit alle angeschlossenen Authenticators ihre gespeicherten Schlüssel aktualisieren können. Die Methode könnte jedes Mal aufgerufen werden, wenn sich der Benutzer erfolgreich authentifiziert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie die Anmeldedaten-IDs des Benutzers offenlegt.

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) teilt dem Browser den aktuellen Benutzernamen und Anzeigenamen des Benutzers mit und sollte aufgerufen werden, wenn ein authentifizierter Benutzer diese Werte ändert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie Benutzerdaten offenlegt.

## Migration von Passwörtern

Die meisten Websites, die Passkey-Unterstützung hinzufügen, unterstützen bereits die passwortbasierte Authentifizierung und verfügen über eine bestehende Benutzerbasis mit Passwörtern. Diese Benutzer sind nicht vor den [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) geschützt, bis sie nicht nur Passkeys auf Ihrer Website haben und verwenden, sondern auch keine mit ihren Konten verknüpften Passwörter mehr besitzen.

Sie können einen dreistufigen Prozess implementieren, um Benutzer von Passwörtern zu migrieren:

- [Benutzern ermöglichen, Passkeys zusätzlich zu ihren Passwörtern zu erstellen](#passkeys_zusätzlich_zu_passwörtern_erstellen)
- [Benutzern ermöglichen, ihre Passkeys anstelle ihrer Passwörter zu verwenden](#passkeys_zusätzlich_zu_passwörtern_verwenden)
- [Benutzern ermöglichen, ihre Passwörter zu löschen](#passwörter_abschaffen)

### Passkeys zusätzlich zu Passwörtern erstellen

Der erste Schritt besteht darin, Benutzern die Möglichkeit zu bieten, einen Passkey zu erstellen, wenn sie sich erfolgreich mit einem Passwort auf Ihrer Website anmelden.

#### Bedingtes Erstellen

Ein zusätzlicher Schritt zur Steigerung der Passkey-Akzeptanz ist eine Funktion namens _conditional create_. Diese ermöglicht es einer RP, unter bestimmten Bedingungen einen neuen Passkey für das Konto eines Benutzers zu erstellen, ohne dass eine Benutzerinteraktion erforderlich ist.

Um bedingtes Erstellen zu aktivieren, ruft die RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und übergibt die auf `"conditional"` gesetzte Option [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation):

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

Mit dieser Option gilt:

- Wenn sich der Benutzer gerade mit einem Passwort unter Verwendung eines Passwort-Managers angemeldet hat, der auch Passkeys unterstützt, also eines _Anmeldedaten-Managers_, der auch als Authenticator fungieren kann, fordert der Browser diesen Anmeldedaten-Manager auf, einen neuen Passkey für den Benutzer zu erstellen, ohne den Benutzer zu fragen.

- Andernfalls schlägt der Aufruf von `create()` fehl.

Aus Sicht des Benutzers weiß er nicht, dass der Aufruf erfolgt ist, wenn die Erstellung fehlschlägt. Wenn sie erfolgreich ist, kann die RP ihn darüber informieren, dass er einen Passkey hat, den er bei der nächsten Anmeldung verwenden kann.

Die zugrunde liegende Annahme ist, dass der Benutzer einem Anmeldedaten-Manager bereits implizit vertraut, wenn er sich für die Anmeldung darauf verlässt, seine Anmeldedaten _allgemein_ zu verwalten. Daher kann er ihm auch vertrauen, eine neue Form von Anmeldedaten für ihn zu erstellen.

### Passkeys zusätzlich zu Passwörtern verwenden

Wenn ein Benutzer sowohl ein Passwort als auch einen oder mehrere Passkeys hat, kann er für die Anmeldung beides verwenden, und die RP möchte ihn möglicherweise dazu ermutigen, den Passkey zu verwenden.

Während der Übergangsphase kann ein Benutzer entweder Passwörter oder Passkeys für sein Konto haben oder beides. In dieser Situation kann eine Benutzeroberfläche, die fragt, mit welcher Methode er sich anmelden möchte, verwirrend sein: Er erinnert sich möglicherweise nicht, welche Methode er für welches Konto hat.

#### Autofill-Benutzeroberfläche

Eine Technik, um Benutzern in dieser Situation zu helfen, ist die _Autofill-Benutzeroberfläche_, die manchmal auch als _conditional mediation_ bezeichnet wird.

Bei dieser Technik bietet die Anmeldeseite der RP dem Benutzer ein Formular an, mit dem er sich mit einem Benutzernamen und Passwort anmelden kann. Im Feld für den Benutzernamen fügt die RP einen `autocomplete`-Wert von `"webauthn"` hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" autofocus />
```

Im Hintergrund startet die RP den normalen Prozess zum Anfordern einer mit einem Passkey signierten Assertion: Sie ruft eine [Challenge](#challenges) vom Server ab und bereitet die weiteren Optionen für [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) vor.

Wenn die RP jedoch `get()` aufruft, übergibt sie die Option `mediation: "conditional"` – genau wie bei [conditional create](#bedingtes_erstellen):

```js
const assertion = await navigator.credentials.get({
  publicKey: options,
  mediation: "conditional",
});
```

Dies bewirkt, dass der Aufruf wartet, bis der Benutzer mit dem Benutzernamenfeld interagiert. Wenn der Benutzer mit dem Feld interagiert, sucht der Browser nach Passkeys, mit denen eine Anmeldung bei der RP möglich ist, und zeigt sie dem Benutzer als Autofill-Werte an. Wählt der Benutzer einen davon aus, wird der ausgewählte Passkey verwendet, und die RP kann die resultierende Assertion verwenden, um den Benutzer anzumelden.

Hat der Benutzer keinen Passkey für die Website oder wählt er keinen der angebotenen Passkeys aus, kann er seinen Benutzernamen und sein Passwort eingeben oder von seinem Passwort-Manager automatisch ausfüllen lassen.

Das bedeutet, dass Sie Benutzer unterstützen können, die Passwörter oder Passkeys oder beides haben könnten, ohne eine spezielle Benutzeroberfläche und ohne dass sich der Benutzer merken muss, ob er tatsächlich einen Passkey für Ihre Website hat.

### Passwörter abschaffen

Auch wenn ein Benutzer einen Passkey für Ihre Website hat und ihn seinem Passwort vorzieht, ist er weiterhin für Angriffe wie [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing), [Raten](/de/docs/Web/Security/Authentication/Passwords#guessing) und [Phishing](/de/docs/Web/Security/Attacks/Phishing) anfällig, solange Sie ein Passwort für sein Konto speichern.

Als letzten Schritt möchten Sie daher möglicherweise, dass ein Benutzer sein Passwort vollständig löscht. Sie können dies als Option in seinen Kontoeinstellungen anbieten und ihn möglicherweise dazu anregen, sein Passwort zu löschen, wenn er es lange nicht verwendet hat, aber seine Passkeys regelmäßig genutzt hat.

Sie sollten jedoch auch berücksichtigen, dass ein Passwort einen Benutzer davor schützt, aus seinem Konto ausgesperrt zu werden, wenn er den Zugriff auf seinen Passkey verliert. Bevor Sie Benutzer dazu ermutigen, ihr Passwort zu löschen, können Sie prüfen, ob sie über alternativen Schutz verfügen, etwa [mehrere Passkeys auf verschiedenen Authenticators](#erstellen_mehrerer_passkeys) und/oder Passkeys, die [gesichert](#passkey-backup) wurden.

## Siehe auch

- [Die Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Passkey Central](https://www.passkeycentral.org/home)
- [passkeys.dev](https://passkeys.dev/)
- [Passkeys](https://developers.google.com/identity/passkeys/) (developers.google.com)
