---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

Passkeys ermöglichen es Websites, Benutzer zu authentifizieren, ohne dass diese direkt auf der Seite Passwörter oder andere Geheimcodes eingeben müssen. Sie beheben [viele der schwerwiegendsten Schwächen anderer Authentifizierungsmethoden](#sicherheitsmerkmale_von_passkeys) wie Passwörter.

Anstatt eines geteilten Geheimnisses verlassen sich Passkeys auf Public-Key-Kryptografie. Ein Passkey ist ein {{Glossary("Public-key_cryptography", "public/private key pair")}}, das an das Konto eines bestimmten Benutzers auf einer bestimmten Website gebunden ist.

Der private Schlüssel wird in einem Modul gespeichert, das _Authenticator_ genannt wird, das sich [auf oder an dem Gerät des Benutzers befindet](#plattform-_und_roaming_authenticatoren). Ein Authenticator könnte in die Plattform integriert sein oder ein separates Hardwaregerät wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) oder eine Credential-Management-App wie [KeePassXC](https://keepassxc.org/).

Der öffentliche Schlüssel wird auf dem Server der Website gespeichert. Wenn sich der Benutzer anmeldet, verwendet der Authenticator den privaten Schlüssel, um einen [_Challenge_](#challenges)-Wert des Servers zusammen mit kontextuellen Informationen wie dem anfordernden {{Glossary("origin", "Origin")}} {{Glossary("digital_signature", "digital zu signieren")}}. Das resultierende Objekt wird _Assertion_ genannt. Der Server der Website kann den öffentlichen Schlüssel verwenden, um die Signatur der Assertion zu verifizieren und den Benutzer anzumelden.

In diesem Leitfaden werden wir:

- Die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API) vorstellen, die es Web-Apps ermöglicht, Passkeys zu verwenden.
- Die beiden Hauptabläufe, die von WebAuthn unterstützt werden, durchgehen: [Registrierung](#registrierung) und [Anmeldung](#anmeldung).
- Einige der Haupt[merkmale der WebAuthn API](#merkmale_der_webauthn) erkunden.
- Die [Sicherheitsmerkmale von Passkeys](#sicherheitsmerkmale_von_passkeys) zusammenfassen.
- Einige bewährte Praktiken erkunden, um zu verhindern, dass Benutzer ausgesperrt werden, wenn sie ihre [Passkeys verlieren](#umgang_mit_verlorenen_passkeys), um Benutzern zu helfen, ihre [Passkeys zu verwalten](#verwaltung_von_passkeys) und Benutzern zu helfen, von [Passwörtern zu migrieren](#migration_von_passwörtern).

## Die WebAuthn API

Um mit einem Authenticator zu interagieren, verwendet eine Website die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API). In der WebAuthn-Spezifikation wird eine Website, die Passkeys verwendet, um Benutzer zu authentifizieren, _Relying Party_ (RP) genannt, und wir werden diesen Begriff in diesem Leitfaden verwenden.

WebAuthn ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), die ein Framework zum Verwalten von {{Glossary("credential", "Credentials")}} für verschiedene Authentifizierungsmethoden bereitstellt, einschließlich [Passwörter](/de/docs/Web/Security/Authentication/Passwords) und [föderierte Identität](/de/docs/Web/Security/Authentication/Federated_identity) sowie Passkeys.

Die zwei Hauptfunktionen, die von RPs verwendet werden, sind:

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), mit der Sie einen neuen Passkey erstellen, wenn sich ein Benutzer auf Ihrer Seite registriert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), die verwendet wird, um eine Assertion aus dem gespeicherten Passkey des Benutzers zu generieren, wenn sich der Benutzer auf Ihrer Seite anmeldet.

## Registrierung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen neuen Passkey zu erstellen und ihn einzurichten, um ein neues Benutzerkonto einzurichten.

![Übersicht der Benutzerregistrierung mit Passkeys.](passkeys-register.svg)

Wenn der Benutzer sich auf einer Seite registrieren möchte, fragt der Front-End-Code der RP zunächst seinen Server nach einer [_Challenge_](#challenges): Dies ist ein zufälliger Wert, der auf dem Server generiert wird, den der Server später verwendet, um sicherzustellen, dass der resultierende Passkey als Reaktion auf diese Anfrage erzeugt wurde.

Als nächstes ruft der Front-End-Code der RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf. Dabei können verschiedene Optionen spezifiziert werden, darunter:

- **Bevorzugte Attestierung**: Ob die RP an einer Authenticator-[Attestation](#attestation) interessiert ist (ein Mechanismus, der der RP hilft zu entscheiden, ob sie dem Authenticator vertrauen sollte) und wenn ja, welche Form die Attestation annehmen sollte.

- **Bevorzugte Authenticator**: Welchen [Typ Authenticator](#plattform-_und_roaming_authenticatoren) zu verwenden ist und ob der Authenticator [Benutzerverifikation](#benutzerverifikation) durchführen sollte, bevor der Passkey erstellt wird.

- **Challenge**: Die vom Server der RP generierte [Challenge](#challenges). Dies hilft, {{Glossary("replay_attack", "Replay-Angriffe")}} zu verhindern.

- **Websiteinformationen**: Ein menschenlesbarer Name und eine ID für die RP, die mit dem neuen Passkey verknüpft werden. Die ID bestimmt den [Geltungsbereich](#geltungsbereich_des_passkeys) des resultierenden Passkeys.

- **Benutzerinformationen**: Informationen über den Benutzer, die mit dem neuen Passkey verknüpft werden, einschließlich eines menschenlesbaren Anzeigenamens, einer Kontokennung und einer menschenlesbaren Kontokennung wie einer E-Mail-Adresse oder einem Benutzernamen.

Abhängig von den Fähigkeiten des Authenticators und den Vorlieben der RP kann der Authenticator den Benutzer bitten, die Erstellung des Passkeys über ein [Benutzerverifikationsverfahren](#benutzerverifikation) zu autorisieren: zum Beispiel durch die Nutzung eines biometrischen Merkmals wie eines Fingerabdrucks.

Der Authenticator erstellt dann einen Passkey für das Konto. Er speichert den privaten Schlüssel lokal und gibt ein Objekt zurück, das den öffentlichen Schlüssel, die Challenge und einige zusätzliche Informationen enthält. Wenn der Authenticator eine Attestation durchführt, wird alles {{Glossary("digital_signature", "digital signiert")}} mit dem privaten Schlüssel oder einem [Attestationsschlüssel](#attestation), der zum Authenticator gehört.

Der Front-End-Code der RP sendet dies an den Server, der:

- Die Attestation verifiziert, falls eine Attestation stattfindet
- Überprüft, dass die Challenge der erwartete Wert ist
- Ein neues Benutzerkonto erstellt und den öffentlichen Schlüssel mitsamt den Kontoinformationen des Benutzers darin speichert.

## Anmeldung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen Benutzer mit einem Passkey anzumelden.

![Übersicht der Benutzeranmeldung mit Passkeys.](passkeys-sign-in.svg)

Wenn der Benutzer versucht, sich anzumelden, fordert der Front-End-Code der RP erneut einen [Challenge](#challenges)-Wert vom Server an.

Als nächstes ruft der Front-End-Code der RP [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Dabei können verschiedene Optionen spezifiziert werden, darunter:

- **Erlaubte Credentials**: Ein Array von Kennungen für die Passkeys, die die RP akzeptiert. Dieses Array kann leer sein oder weggelassen werden, in welchem Fall alle geeigneten Passkeys verwendet werden können.

- **Challenge**: Die vom Server der RP generierte [Challenge](#challenges).

- **Website-ID**: Die ID der RP, die versucht, den Benutzer anzumelden. Siehe [Geltungsbereich des Passkeys](#geltungsbereich_des_passkeys).

- **Benutzerverifikation**: Ob der Authenticator [Benutzerverifikation](#benutzerverifikation) durchführen sollte, bevor der Passkey verwendet wird.

Der Browser findet dann Passkeys, die den gegebenen Kriterien entsprechen: Wenn er mehr als einen findet, kann er den Benutzer bitten, einen auszuwählen. Der Authenticator, der diesen Passkey speichert, wird den Benutzer typischerweise bitten, die Verwendung dieses Passkeys zu autorisieren, einschließlich [Benutzerverifikation](#benutzerverifikation), wenn diese von der RP angefordert wird und vom Authenticator unterstützt wird.

Der Authenticator wird dann den privaten Schlüssel des Passkeys verwenden, um eine digital signierte [Assertion](#assertions) zu erstellen, einschließlich der Challenge und anderer Daten.

Das Front-End der RP sendet die Assertion an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel verifiziert. Wenn die Verifikation erfolgreich ist, kann der Benutzer angemeldet werden.

## Merkmale der WebAuthn

In diesem Abschnitt werden wir einige Aspekte der WebAuthn API detaillierter betrachten.

### Plattform- und roaming Authenticatoren

Die WebAuthn API unterscheidet zwei Arten von Authenticatoren:

- **Plattform Authenticatoren**
  - : Diese Authenticatoren sind nicht vom Gerät entfernbar. Zum Beispiel Authenticatoren, die in das Betriebssystem des Geräts integriert sind, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System.
- **Roaming Authenticatoren**
  - : Diese Authenticatoren können vom Gerät entfernt und an ein anderes Gerät angeschlossen werden. Klassisches Beispiel hierfür ist ein Authenticator, der in einem USB-Schlüssel implementiert ist, wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Wenn eine RP einen neuen Passkey erstellt, kann sie angeben, welchen Typ von Authenticator sie verwenden möchte, als Teil der [`authenticatorSelection`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#authenticatorselection)-Option, die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übermittelt wird.

Der Hauptvorteil eines Plattform Authenticators besteht darin, dass er für den Benutzer bequem ist: Sie müssen sich nicht um ein separates Stück Hardware kümmern. Der hauptsächliche Nachteil ist, dass er nur mit seinem Hostgerät verwendet werden kann.

Plattform Authenticatoren können manchmal als roaming Authenticatoren fungieren: Zum Beispiel könnte ein Plattform Authenticator auf einem mobilen Gerät einem Laptop als roaming Authenticator über eine Bluetooth-Verbindung zur Verfügung stehen.

Obwohl Plattform Authenticatoren nicht vom Gerät entfernt werden können, können sie häufig ihre Passkeys mit anderen Authenticatoren über Cloud-Synchronisierung oder Import/Export-Funktionen teilen. Zum Beispiel könnte ein Plattformanbieter Benutzern ermöglichen, ihre Passkeys über alle Geräte innerhalb ihrer Produktfamilie hinweg zu teilen.

### Erkennbare und nicht erkennbare Credentials

Die WebAuthn-Spezifikation unterscheidet zwischen _erkennbaren_ und _nicht erkennbaren_ Credentials.

- **Erkennbare Credentials**, auch bekannt als _resident keys_, sind solche, die verwendet werden können, ohne dass die RP zuerst den Benutzer, der authentifiziert wird, identifizieren muss: das heißt, das "allowed credentials"-Array, das in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird, kann leer sein. Bei einem erkennbaren Credential werden alle Schlüsseldaten im Authenticator gespeichert, sodass der Authenticator Signaturen erzeugen kann, ohne dass er vom RP Input benötigt.

- **Nicht erkennbare Credentials**, auch bekannt als _non-resident keys_, sind solche, bei denen die RP zuerst den Benutzer, der authentifiziert wird, identifizieren muss (zum Beispiel, indem der Benutzer seinen Benutzernamen eingibt), und dann die zugehörige Credential-ID in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben muss, im "allowed credentials"-Array.

  Nicht erkennbare Credentials benötigen die Credential-ID, da sie den Signaturschlüssel selbst nicht im Authenticator speichern, sondern den Signaturschlüssel jedes Mal erzeugen, wenn er benötigt wird, aus einem internen Seed und dem Credential-ID-Wert. Das heißt, der Account-Schlüssel ist nicht im Authenticator gespeichert.

Der Vorteil der Verwendung von nicht erkennbaren Credentials besteht darin, dass ein Authenticator mit begrenztem Speicher eine potenziell unbegrenzte Anzahl von Accounts unterstützen kann, da das Schlüsseldatenmaterial für jeden Account nicht im Authenticator gespeichert ist.

Der Vorteil der Verwendung von erkennbaren Credentials besteht darin, dass sie es einem Browser ermöglichen, [Autofill](#autofill_ui) mit öffentlichen Schlüsseln zu implementieren, was es den Benutzern erheblich erleichtert, sich anzumelden, besonders wenn sie möglicherweise sowohl öffentliche Schlüsseldaten als auch Passwörter für eine gegebene Seite haben.

**Aus diesem Grund müssen Passkeys immer erkannbare Credentials sein, so dass RPs, die passkey-basierte Authentifizierung implementieren, sie immer erkennbar machen sollten.**

Um ein erkennbares Credential zu erstellen, sollte die RP die Option `residentKey` auf `"required"` setzen und die Option `requireResidentKey` auf `true` setzen, wenn sie ein neues Credential im [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf erstellt.

### Challenges

Wenn eine RP einen Authenticator bittet, einen neuen Passkey zu erstellen oder einen bestehenden Passkey zu verwenden, muss sie eine _Challenge_ bereitstellen. Dies ist ein Zufallswert, der für die Anfrage spezifisch ist und der für einen Angreifer nicht vorhersehbar ist. Die Challenge muss in einer vertrauenswürdigen Umgebung generiert werden (was allgemein bedeutet, auf dem Server nicht auf der Benutzeroberfläche).

Der Front-End-Code der RP übergibt die Challenge in den `create()`- oder `get()`-Aufruf, und der Browser inkludiert denselben Wert im Objekt, das von diesen Methoden zurückgegeben wird. Im Fall von `get()` ist der Challenge-Wert auch Teil des Eingangs für die digitale Signatur, die vom Authenticator berechnet wird.

Wenn der Webserver die Antwort des Authenticators überprüft, muss der Webserver sicherstellen, dass die Challenge derselbe Wert ist, den er ursprünglich bereitgestellt hat.

Der Webserver sollte auch den Challenge-Wert nach etwa 10 Minuten ungültig machen und Antworten ablehnen, die die Challenge enthalten, die nach dieser Zeit eingetroffen sind.

Die Challenge repräsentiert den Nachweis, dass die Antwort des Authenticators eine Antwort auf _diese_ Anfrage war und nicht eine alte Antwort auf eine vorherige Anfrage, die ein Angreifer gestohlen hat. Diese Art von Angriff wird als {{Glossary("replay_attack", "Replay-Angriff")}} bezeichnet.

### Attestation

Die Sicherheit eines Passkeys hängt teilweise von der Zuverlässigkeit des verwendeten Authenticators ab. Wenn zum Beispiel ein Authenticator die privaten Schlüssel, die er speichert, nicht schützt, könnte ein Angreifer die Schlüssel stehlen und Benutzer imitieren. WebAuthn definiert einen optionalen Mechanismus namens _Attestation_, bei dem ein Authenticator verifizierbare Beweise an die RP über den Authenticator und die von ihm produzierten Daten (wie Schlüsselpaaren oder signierten Assertions) liefern kann. Dies kann der RP helfen zu entscheiden, ob sie sich auf den Authenticator stützen möchte, um ihre Benutzer zu authentifizieren.

Um die Attestation zu implementieren, enthält der Authenticator ein Schlüsselpaar namens _Attestation-Schlüssel_, das während der Herstellung in das Gerät eingebaut wurde und das als zur Organisation, die den Authenticator hergestellt hat, gehörend {{Glossary("digital_certificate", "zertifiziert")}} ist. Zum Beispiel könnte das Zertifikat aussagen, dass dieser Authenticator von "Acme Authenticator Incorporated" produziert wurde.

Wenn der Authenticator einen neuen Passkey erstellt, signiert er das resultierende Objekt mit seinem Attestationschlüssel. Die RP überprüft die Signatur und das zugehörige Zertifikat, und hat dann den Nachweis, dass der Passkey von einem Authenticator erstellt wurde, der von "Acme Authenticator Incorporated" produziert wurde.

Nicht alle Authenticatoren unterstützen die Attestation und RPs können angeben, dass sie an der Attestation nicht interessiert sind. In solchen Situationen kann das von einem Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegebene Objekt überhaupt nicht signiert sein oder es kann mit dem Passkey selbst (dies wird als _Selbstattestation_ bezeichnet) unterschrieben sein. In diesen Situationen hat die RP keinen verlässlichen Beweis über die Herkunft des Authenticators oder seine Fähigkeiten.

### Benutzerverifikation

Wenn eine Website [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, um einen neuen Passkey zu erstellen, oder [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufruft, um eine Assertion zu erstellen, wird der Authenticator den Benutzer immer um Zustimmung zur Operation bitten.

Die RP kann den Authenticator auch darum bitten, eine _Benutzerverifikation_ durchzuführen, was bedeutet, dass der Benutzer aufgefordert wird, die Nutzung seines Credentials zu autorisieren, beispielsweise durch Eingabe einer PIN oder eines biometrischen Details wie eines Fingerabdrucks.

Wenn dies geschieht, wird es als eine Form der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}} angesehen: Der Authenticator selbst ist "etwas, das der Benutzer hat", während die PIN oder das biometrische Detail jeweils "etwas, das er weiß" oder "etwas, das er ist" sind.

Beachten Sie, dass nicht alle Authenticatoren die Benutzerverifikation unterstützen.

### Geltungsbereich des Passkeys

Der Geltungsbereich eines Passkeys bestimmt, welche Seiten den Passkey verwenden dürfen.

Standardmäßig:

- Wenn eine Seite einen Passkey durch den Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt, setzt der Browser die _RP ID_ des Passkeys auf die Domain-Komponente des {{Glossary("origin", "Origin")}} des Anrufers, und der Authenticator speichert diesen Wert zusammen mit dem Passkey.

- Wenn eine Seite einen Passkey durch den Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet, übermittelt der Browser die Domain-Komponente des {{Glossary("origin", "Origin")}} des Anrufers an den Authenticator, und der Authenticator erlaubt die Verwendung des Passkeys nur, wenn dieser Wert mit der gespeicherten RP ID übereinstimmt.

Das bedeutet, dass ein Passkey standardmäßig nur von einer Seite mit demselben Origin (ohne den Port) verwendet werden kann wie die Seite, die ihn ursprünglich erstellt hat.

Websites dürfen diese Regeln innerhalb gewisser Grenzen lockern:

- Wenn eine Website einen Passkey erstellt, kann sie eine ID in [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben, und der Authenticator verwendet dies als RP ID.

- Ebenso kann, wenn eine Website versucht, einen Passkey zu verwenden, eine ID in [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben werden, und der Authenticator vergleicht diese ID mit der gespeicherten RP ID.

Für sowohl `create()` als auch `get()` muss der übergebene Wert eine {{Glossary("registrable_domain", "eintragbare Domain")}} sein, die ein _Domain-Suffix_ der Domain des Origin des Anrufers ist.

Diese Lockerung bedeutet, dass zum Beispiel eine Seite unter `https://register.example.com` einen Passkey mit einer RP ID von `example.com` erstellen kann, und eine Seite unter `https://login.example.com` wird dann berechtigt, diesen Passkey zu verwenden.

Der Geltungsbereich des Passkeys hilft, [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe abzuwehren. Bei einem Phishing-Angriff wird dem Benutzer eine bösartige Seite präsentiert, die wie die Zielseite aussieht und den Benutzer auffordert, seine Anmeldedaten für die Zielseite einzugeben. Typischerweise erscheint die URL der bösartigen Seite ähnlich der Zielseite, was dem Benutzer hilft, verwirrt zu werden. Zum Beispiel, wenn die Zielseite `https://example.com` ist, könnte die Phishing-Seite von `https://examp1e.com` bedient werden.

Mit den Geltungsbereichsregeln für Passkeys kann jedoch eine Seite, die von `https://examp1e.com` bereitgestellt wird, keine Passkeys verwenden, die für `https://example.com` erstellt wurden.

### Origin-Verifikation

Die signierte [Assertion](#assertions), die von einem Authenticator zurückgegeben wird, enthält Informationen über den Kontext des Anrufers:

- Das {{Glossary("origin", "Origin")}} des Dokuments, das [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen hat.
- Wenn der Anrufer als {{htmlelement("iframe")}} eingebettet war, ob der Anrufer das gleiche Origin wie das obere Dokument hatte.
- Das Origin des oberen Dokuments, wenn der Anrufer als {{htmlelement("iframe")}} eingebettet war und nicht dasselbe Origin wie der Anrufer war.

Wenn der RP-Server die Assertion überprüft, muss er sicherstellen, dass diese Werte dem entsprechen, was er erwartet.

Dies bietet eine Schutzschicht gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, zusätzlich zu der durch den [Geltungsbereich des Passkeys](#geltungsbereich_des_passkeys) gebotenen.

## Sicherheitsmerkmale von Passkeys

Passkeys sind sicherer als Passwörter, und wir können sehen, wie ihr Design die schwerwiegendsten [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) anspricht:

- Im Gegensatz zu einem Passwort, muss der Benutzer niemals einen Passkey-Wert erfinden oder sich merken. Das bedeutet, dass Benutzer keine schwachen Passkey-Werte wählen können, sodass sie nicht anfällig für [Erratungsangriffe](/de/docs/Web/Security/Authentication/Passwords#guessing) sind. Die Passkey-Erstellung wird vom Benutzer auf den Authenticator übertragen.

- Passkeys werden nie zwischen Seiten wiederverwendet, sodass sie nicht anfällig für [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe sind. Wenn ein Angreifer Zugang zu einem Passkey erhält, kann er ihn nur für die Seite verwenden, die ihn ursprünglich erstellt hat.

- Mit Passkeys muss der Server niemals Geheimnisse speichern: er speichert nur den öffentlichen Schlüssel. Wenn ein Angreifer [sich Zugang zur Datenbank des Servers verschafft](/de/docs/Web/Security/Authentication/Passwords#database_compromise), können sie den privaten Schlüssel, der im Authenticator gespeichert ist, nicht kompromittieren. Beachten Sie jedoch, dass sie Benutzerkonten kompromittieren können, wenn sie falsche Credentials in die Datenbank des Servers schreiben können.

- Wenn der Benutzer versucht, sich anzumelden, sucht der Browser nur nach Passkeys, deren Geltungsbereich mit der anfordernden Seite übereinstimmt, und der Server der RP kann überprüfen, dass das Origin des Anforderers dem entsprach, was erwartet wurde. Dies macht Passkeys resistent gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, da Front-End-Code, der von einer Phishing-Seite wie `https://examp1e.com` bereitgestellt wird, nicht in der Lage ist, den mit `https://example.com` verbundenen Passkey zu verwenden.

Obwohl Passkeys Schutz gegen diese häufigen Web-Authentifizierungsangriffe bieten, beseitigen sie nicht alle Bedrohungen. Da die flächendeckende Einführung von Passkeys relativ neu ist, gibt es noch kein ausgereiftes Verständnis der Angriffe, denen Passkeys möglicherweise ausgesetzt sind, aber es ist wahrscheinlich, dass sich einige Angriffe auf die Geräte der Benutzer konzentrieren werden: beispielsweise sie zu überzeugen, einen bösartigen Authenticator zu installieren. Angriffe könnten auch auf Teile des Authentifizierungssystems abzielen, die nicht durch Passkeys gesichert sind, wie zum Beispiel Kontowiederherstellungsmechanismen.

## Umgang mit verlorenen Passkeys

Wenn ein Benutzer einen Authenticator verliert, sei es ein separates Modul oder in ihr Telefon integriert, verlieren sie alle Passkeys, die er enthält.

In diesem Abschnitt werden wir zwei Strategien für den Umgang mit Authenticator-Verlust besprechen:

- [Erstellung mehrerer Passkeys für ein einziges Konto](#erstellung_mehrerer_passkeys)
- [Sicherung von Passkeys](#passkey-sicherung)

### Erstellung mehrerer Passkeys

Im Gegensatz zu den Ratschlägen bezüglich Passwörtern werden RPs ermutigt, mehrere Passkeys für ein einziges Konto zu erstellen. Ein häufiges Muster wäre:

- Ein Passkey in einem [Plattform Authenticator](#platform_authenticators), der ihr alltäglicher Passkey für die Seite ist
- Ein Passkey in einem [roaming Authenticator](#roaming_authenticators), den der Benutzer sicher aufbewahrt, als Backup, falls der Benutzer sein Gerät verliert.

Die Option [`excludeCredentials`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#excludecredentials), die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird, listet Credential-IDs auf und teilt dem Browser mit, dass die Authenticatoren, die die aufgeführten Schlüssel enthalten, nicht für den neuen Schlüssel verwendet werden dürfen. Das heißt, es ist eine Möglichkeit für die RP, sicherzustellen, dass der neue Passkey in einem neuen Authenticator erstellt wird.

### Passkey-Sicherung

Einige Authenticatoren unterstützen Backups auf verschiedene Weise, wie zum Beispiel über Cloud-Sync oder manuellen Export. Die signierte Assertion, die aus einem Aufruf von `get()` zurückgegeben wird, enthält eine Reihe von [Flags](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#flags), die unter anderem angeben, ob der Passkey:

- _Backup-fähig_ ist: das heißt, ob er in einem Authenticator gespeichert ist, der Backups unterstützt
- Tatsächlich gesichert wurde.

Eine RP kann diese Informationen verwenden, um einem Benutzer bei der Verwaltung seiner Credentials zu helfen. Zum Beispiel:

- Wenn der Passkey nicht backup-fähig ist, könnte die RP dem Benutzer vorschlagen, einen anderen Passkey in einem anderen Authenticator zu erstellen, der als Backup verwendet werden könnte.

- Wenn die RP Benutzer von Passwörtern migriert und der Benutzer ein altes Passwort sowie einen Passkey hat, und die Assertion anzeigt, dass der Passkey gesichert wurde, könnte die RP den Benutzer einladen, sein altes Passwort zu löschen, da sie es nicht mehr als Backup benötigen.

## Verwaltung von Passkeys

Wir haben gesehen, dass ein Benutzer für ein einzelnes Konto mehrere Passkeys haben kann, die auf mehreren Authenticatoren und mehreren Geräten verteilt sind. Jeder Passkey entspricht einem WebAuthn-Credential, wobei das private Schlüsselmaterial vom Authenticator geschützt wird und ein entsprechender öffentlicher Schlüssel von der RP als Teil der Kontoinformationen des Benutzers gespeichert wird.

Manchmal muss der Benutzer möglicherweise einen Passkey aus seinem RP-Konto löschen: Dies bedeutet im Wesentlichen, den öffentlichen Schlüssel, der auf dem Server der RP gespeichert ist, zu löschen, sodass der entsprechende private Schlüssel nicht mehr verwendet werden kann, um den Benutzer anzumelden. Dies ist im Allgemeinen erforderlich, wenn der Benutzer die Kontrolle über den Authenticator nicht mehr hat, zum Beispiel weil sie das Gerät, das ihn enthält, verloren haben.

Das bedeutet, dass eine RP eine Möglichkeit implementieren sollte, für einen authentifizierten Benutzer die registrierten Passkeys für ihr Konto anzuzeigen und bestimmte öffentliche Schlüssel zu löschen. Für jeden Schlüssel sollte die RP Informationen anzeigen, die dem Benutzer helfen zu verstehen, welcher Schlüssel es ist und mit welchem Authenticator er verknüpft ist. Dies kann Folgendes umfassen:

- **Name des Passkey-Anbieters**: Der Name des Passkey-Anbieters, wie "Windows Hello" oder "Bitwarden".

  > [!NOTE]
  > Um diesen Wert zu bestimmen:
  >
  > - Finden Sie den _AAGUID_-Wert in den [`attestedCredentialData`](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata), die vom Browser aus einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben werden.
  > - Verwenden Sie diesen, um den entsprechenden Namen in der [Passkey Provider AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids) Liste nachzuschlagen.
  >
  > Siehe auch [Bestimmen des Passkey-Anbieters mit AAGUID](https://web.dev/articles/webauthn-aaguid).

- **Timestamp**: Die Zeit, zu der der Passkey zuletzt zum Anmelden verwendet wurde.

- **Backup-Status**: Ein Indikator dafür, ob der Passkey gesichert wurde (siehe [Passkey-Backup](#passkey-sicherung)).

Darüber hinaus sollte der Benutzer in der Lage sein, den Namen des Passkeys zu bearbeiten und den Passkey zu löschen.

Wenn der Benutzer versucht, den letzten Passkey zu löschen, sollte die RP ihn über die Implikationen informieren: Die RP könnte dem Benutzer erlauben, sich mit einer anderen Methode wie einem [Einmalcode](/de/docs/Web/Security/Authentication/OTP) anzumelden, oder sie könnten keinen Zugriff mehr auf ihr Konto haben.

Siehe auch [Helfen Sie den Benutzern, Passkeys effektiv zu verwalten](https://web.dev/articles/passkey-management).

### Synchronisation von Server und Authenticatoren

Beachten Sie, dass wenn der Benutzer einen Passkey auf dem Server der RP löscht, dies eine Asymmetrie zwischen dem Server und dem Authenticator einführt, der den entsprechenden privaten Schlüssel enthält. Der Authenticator denkt immer noch, dass der Passkey gültig ist, sodass der Browser ihn dem Benutzer als Anmeldeoption anbieten kann, aber die RP akzeptiert seine Assertions nicht mehr.

Um die Wahrscheinlichkeit solcher Probleme zu reduzieren, definiert die WebAuthn API eine Reihe statischer Methoden von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), mit denen eine RP Authenticatoren über serverseitige Änderungen informieren kann:

- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) teilt dem Browser mit, dass ein bestimmter Passkey von der RP nicht erkannt wurde, und wird typischerweise von der RP unmittelbar nach dem Versuch des Benutzers, sich mit diesem Passkey anzumelden, aufgerufen. Das häufigste Szenario ist, dass der Benutzer diesen Passkey auf dem Server gelöscht hat und dann versehentlich versucht hat, sich damit anzumelden.

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) gibt dem Browser die Kennungen aller Passkeys, die die RP derzeit als gültig akzeptiert, um alle angeschlossenen Authenticatoren in die Lage zu versetzen, ihre gespeicherten Schlüssel zu aktualisieren. Es könnte jedes Mal aufgerufen werden, wenn der Benutzer sich erfolgreich authentifiziert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie die Credential-IDs des Benutzers preisgibt.

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) teilt dem Browser den aktuellen Benutzernamen und den Anzeigenamen mit und sollte aufgerufen werden, wenn ein authentifizierter Benutzer diese Werte ändert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie Benutzerdaten preisgibt.

## Migration von Passwörtern

Die meisten Websites, die Unterstützung für Passkeys hinzufügen, unterstützen bereits eine auf Passwörtern basierende Authentifizierung und haben eine bestehende Nutzerbasis mit Passwörtern. Diese Benutzer sind nicht vor den [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) sicher, bis sie nicht nur Passkeys auf Ihrer Seite haben und verwenden, sondern keine Passwörter mehr besitzen, die mit ihren Konten verknüpft sind.

Sie können einen dreistufigen Prozess implementieren, um Benutzer von Passwörtern zu migrieren:

- [Benutzern die Erstellung von Passkeys zusätzlich zu ihren Passwörtern ermöglichen](#erstellung_von_passkeys_neben_passwörtern)
- [Benutzern die Möglichkeit geben, ihre Passkeys anstelle ihrer Passwörter zu verwenden](#verwendung_von_passkeys_neben_passwörtern)
- [Benutzern ermöglichen, ihre Passwörter zu löschen](#verabschiedung_von_passwörtern)

### Erstellung von Passkeys neben Passwörtern

Der erste Schritt ist, den Benutzern die Möglichkeit zu bieten, beim erfolgreichen Anmelden auf Ihrer Seite mit einem Passwort einen Passkey zu erstellen.

#### Bedingtes Erstellen

Ein zusätzlicher Schritt zur Erhöhung der Passkey-Adoption ist ein Feature, das _bedingtes Erstellen_ genannt wird. Es ermöglicht einer RP, für ein Benutzerkonto einen neuen Passkey zu erstellen, ohne dass eine Benutzerinteraktion erforderlich ist, wenn bestimmte Bedingungen erfüllt sind.

Um das bedingte Erstellen zu aktivieren, ruft die RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf, wobei die [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation)-Option auf `"conditional"` gesetzt ist:

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

- Wenn sich der Benutzer gerade mit einem Passwort angemeldet hat, indem er einen Passwort-Manager verwendet, der auch Passkeys unterstützt (das heißt, ein _Credentials-Manager_, der auch als Authenticator fungieren kann), wird der Browser diesen Credentials-Manager bitten, einen neuen Passkey für den Benutzer zu erstellen, ohne den Benutzer zu fragen.

- Andernfalls wird der `create()`-Aufruf fehlschlagen.

Aus Sicht des Benutzers, wenn das Erstellen fehlgeschlagen ist, weiß er nicht, dass es gemacht wurde, und wenn es erfolgreich ist, kann die RP ihn darüber informieren, dass er einen Passkey hat, den er beim nächsten Mal verwenden kann, um sich anzumelden.

Die Theorie dahinter ist, dass, wenn der Benutzer bereits für die Anmeldung auf einen Credentials-Manager vertraut, er ihm generell vertraut, sich um seine Anmeldeinformationen zu kümmern, sodass er ihm auch vertrauen kann, eine neue Form des Credentials für ihn zu erstellen.

### Verwendung von Passkeys neben Passwörtern

Wenn ein Benutzer ein Passwort und einen oder mehrere Passkeys hat, kann er sich für die Anmeldung für eines von beiden entscheiden, und die RP könnte ihn ermutigen, den Passkey zu verwenden.

In der Übergangszeit könnte ein Benutzer entweder Passwörter oder Passkeys für sein Konto haben, oder beides. In dieser Situation kann eine Benutzeroberfläche, die ihn fragt, mit welcher Methode er sich anmelden möchte, verwirrend sein: er könnte sich nicht erinnern, welche Methode er für welches Konto hat.

#### Autofill UI

Eine Technik, um Benutzern in dieser Situation zu helfen, ist die _Autofill UI_, auch manchmal _bedingte Vermittlung_ genannt.

In dieser Technik bietet die Anmeldeseite der RP dem Benutzer ein Formular an, das ihm ermöglicht, sich mit einem Benutzernamen und Passwort anzumelden. Im Feld für den Benutzernamen fügt die RP einen Autocomplete-Wert von `"webauthn"` hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" autofocus />
```

Im Hintergrund startet die RP den normalen Prozess, um eine mit einem Passkey signierte Assertion anzufordern: sie holt eine [Challenge](#challenges) vom Server und bereitet die anderen Optionen für [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) vor.

Wenn die RP jedoch `get()` aufruft, übergibt sie die Option `mediation: "conditional"` (wie beim [bedingten Erstellen](#bedingtes_erstellen)):

```js
const assertion = await navigator.credentials.get({
  publicKey: options,
  mediation: "conditional",
});
```

Der Effekt davon ist, dass der Aufruf wartet, bis der Benutzer mit dem Benutzerfeld interagiert. Wenn der Benutzer mit dem Feld interagiert, sucht der Browser nach Passkeys, die verwendet werden können, um sich bei der RP anzumelden, und zeigt sie dem Benutzer als Autofill-Werte an. Wenn der Benutzer einen auswählt, wird der ausgewählte Passkey verwendet, und die RP kann die resultierende Assertion verwenden, um den Benutzer anzumelden.

Wenn der Benutzer keinen Passkey für die Seite hat oder keinen der angebotenen Passkeys auswählt, kann er seinen Benutzernamen und sein Passwort eingeben oder es von seinem Passwort-Manager automatisch ausfüllen lassen.

Dies bedeutet, dass Sie Benutzer unterstützen können, die möglicherweise Passwörter oder Passkeys oder beides haben, ohne spezielle UI, und ohne dass der Benutzer sich daran erinnern muss, ob er überhaupt einen Passkey für Ihre Seite hat.

### Verabschiedung von Passwörtern

Selbst wenn ein Benutzer einen Passkey für Ihre Seite hat und ihn gegenüber seinem Passwort bevorzugt verwendet, ist er immer noch anfällig für Angriffe wie [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing), [Erraten](/de/docs/Web/Security/Authentication/Passwords#guessing) und [Phishing](/de/docs/Web/Security/Attacks/Phishing), solange Sie ein Passwort für das Konto behalten.

Als letzten Schritt könnten Sie einem Benutzer ermöglichen, sein Passwort vollständig zu löschen. Sie können dies als Option in ihren Kontoeinstellungen anbieten und sie möglicherweise dazu anstoßen, ihr Passwort zu löschen, wenn sie es längere Zeit nicht mehr verwendet haben (aber ihre Passkeys regelmäßig genutzt haben).

Sie sollten jedoch auch berücksichtigen, dass ein Passwort einem Benutzer hilft, sich gegen den Verlust des Zugangs zu ihrem Konto zu schützen, wenn sie ihre Passkeys verlieren. Bevor Sie Benutzer dazu ermutigen, ihr Passwort zu löschen, können Sie prüfen, ob sie alternativen Schutz haben, wie [mehrere Passkeys auf verschiedenen Authenticatoren](#erstellung_mehrerer_passkeys) und/oder Passkeys, die [gesichert wurden](#passkey-sicherung).

## Siehe auch

- [Die Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Passkey Central](https://www.passkeycentral.org/home)
- [passkeys.dev](https://passkeys.dev/)
- [Passkeys](https://developers.google.com/identity/passkeys/) (developers.google.com)
