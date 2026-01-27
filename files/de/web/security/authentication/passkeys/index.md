---
title: Passkeys
slug: Web/Security/Authentication/Passkeys
l10n:
  sourceCommit: 545c1267ae9642d850ef539956442c2bb4de280a
---

Passkeys ermöglichen es Webseiten, Benutzer zu authentifizieren, ohne dass die Benutzer selbst Passwörter oder andere Geheimcodes auf der Seite eingeben müssen. Sie beseitigen [viele der ernsthaftesten Schwächen anderer Authentifizierungsmethoden](#sicherheitseigenschaften_von_passkeys) wie Passwörter.

Sie gelten als [die sicherste Authentifizierungsmethode, die Webseiten zur Verfügung steht](#sicherheitseigenschaften_von_passkeys), und wir empfehlen, dass Seiten Passkeys als bevorzugte Authentifizierungsmethode übernehmen und [die Verwendung von Passwörtern auslaufen lassen](#übergang_von_passwörtern).

Anstelle eines geteilten Geheimnisses stützen sich Passkeys auf Public-Key-Kryptografie. Ein Passkey ist ein {{Glossary("Public-key_cryptography", "öffentlicher/privater Schlüsselpaar")}}, das an das Konto eines bestimmten Benutzers auf einer bestimmten Webseite gebunden ist.

Der private Schlüssel wird in einem Modul namens _Authenticator_ gespeichert, das [im oder an das Gerät des Benutzers angeschlossen ist](#plattform-_und_roaming-authentificatoren). Ein Authenticator kann in die Plattform integriert sein oder ein separates Hardware-Token wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey) oder eine Anwendungsverwaltungslösung wie [KeePassXC](https://keepassxc.org/) sein.

Der öffentliche Schlüssel wird auf dem Server der Webseite gespeichert. Wenn sich der Benutzer anmeldet, verwendet der Authenticator den privaten Schlüssel, um einen [_Challenge_](#challenges)-Wert vom Server zusammen mit Kontextinformationen wie der anfragenden {{Glossary("origin", "Origin")}} {{Glossary("digital_signature", "digital zu signieren")}}. Das resultierende Objekt wird _Assertion_ genannt. Der Server der Webseite kann die Signatur der Assertion mit dem öffentlichen Schlüssel verifizieren und den Benutzer einloggen.

In diesem Leitfaden werden wir:

- Die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API) einführen, die Web-Apps die Verwendung von Passkeys ermöglicht.
- Die beiden Hauptabläufe, die von WebAuthn unterstützt werden, durchgehen: [Registrierung](#registrierung) und [Anmeldung](#anmeldung).
- Einige der Hauptfunktionen der [WebAuthn API](#funktionen_von_webauthn) erkunden.
- Die [Sicherheitseigenschaften von Passkeys](#sicherheitseigenschaften_von_passkeys) zusammenfassen.
- Einige bewährte Praktiken erkunden, um zu verhindern, dass Benutzer ausgesperrt werden, wenn sie [ihre Passkeys verlieren](#umgang_mit_verlorenen_passkeys), um Benutzern zu helfen, [ihre Passkeys zu verwalten](#verwaltung_von_passkeys), und um Benutzern beim [Übergang von Passwörtern](#übergang_von_passwörtern) zu helfen.

## Die WebAuthn API

Um mit einem Authenticator zu interagieren, verwendet eine Webseite die [Web Authentication API (WebAuthn)](/de/docs/Web/API/Web_Authentication_API). In der WebAuthn-Spezifikation wird eine Webseite, die Passkeys zur Authentifizierung von Benutzern verwendet, als _Relying Party_ (RP) bezeichnet, und wir werden diesen Begriff in diesem Leitfaden verwenden.

WebAuthn ist eine Erweiterung der [Credential Management API](/de/docs/Web/API/Credential_Management_API), eines Frameworks zum Verwalten von {{Glossary("credential", "Credentials")}} für verschiedene Authentifizierungsmethoden, einschließlich [Passwörter](/de/docs/Web/Security/Authentication/Passwords) und [föderierter Identität](/de/docs/Web/Security/Authentication/Federated_identity), sowie Passkeys.

Die beiden Hauptfunktionen, die von RPs verwendet werden, sind:

- [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create), das verwendet wird, um einen neuen Passkey zu erstellen, wenn sich ein Benutzer auf Ihrer Seite registriert.
- [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get), das verwendet wird, um eine Assertion aus dem gespeicherten Passkey des Benutzers zu generieren, wenn sich der Benutzer auf Ihrer Seite anmeldet.

## Registrierung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen neuen Passkey zu erstellen und ein neues Benutzerkonto einzurichten.

![Übersicht über die Benutzerregistrierung mit Passkeys.](passkeys-register.svg)

Wenn der Benutzer sich auf einer Seite registrieren möchte, fordert der Front-End-Code der RP zuerst einen [_Challenge_](#challenges) von ihrem Server an: Dies ist ein zufälliger Wert, der auf dem Server generiert wird und den der Server später verwendet, um sicherzustellen, dass der resultierende Passkey als Antwort auf diese Anfrage generiert wurde.

Als Nächstes ruft der Front-End-Code der RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf. Es können verschiedene Optionen spezifiziert werden, einschließlich:

- **Attestationspräferenzen**: Ob die RP an Authenticator-[Attestation](#attestation) interessiert ist (ein Mechanismus, der der RP hilft zu entscheiden, ob sie dem Authenticator vertrauen sollte), und wenn ja, welche Form die Attestation annehmen soll.

- **Authenticator-Präferenzen**: Welche [Art von Authenticator](#plattform-_und_roaming-authentificatoren) verwendet werden soll und ob der Authenticator [Benutzerauthentifizierung](#benutzerverifikation) durchführen soll, bevor der Passkey erstellt wird.

- **Challenge**: Der [Challenge](#challenges), der vom RP-Server generiert wurde. Dies hilft, sich gegen {{Glossary("replay_attack", "Replay-Angriffe")}} zu schützen.

- **Webseiteninformationen**: Ein menschenlesbarer Name und eine ID für die RP, die mit dem neuen Passkey verknüpft werden. Die ID bestimmt den [Scope](#passkey-scope) des resultierenden Passkeys.

- **Benutzerinformationen**: Informationen über den Benutzer, die mit dem neuen Passkey verknüpft werden, einschließlich eines menschenlesbaren Anzeigenamens, einer Kontokennung und einer menschenlesbaren Kontokennung wie einer E-Mail-Adresse oder einem Benutzernamen.

Je nach den Fähigkeiten des Authenticators und den Präferenzen der RP kann der Authenticator den Benutzer auffordern, die Erstellung des Passkeys über eine Methode der [Benutzerverifikation](#benutzerverifikation) zu autorisieren: zum Beispiel die Verwendung eines biometrischen Merkmals wie eines Fingerabdrucks.

Der Authenticator erstellt dann einen Passkey für das Konto. Er speichert den privaten Schlüssel lokal und gibt ein Objekt zurück, das den öffentlichen Schlüssel, den Challenge und einige zusätzliche Informationen enthält. Wenn der Authenticator eine Attestation durchführt, dann wird dies alles {{Glossary("digital_signature", "digital signiert")}} entweder mit dem privaten Schlüssel oder einem [Attestation](#attestation)-Schlüssel, der dem Authenticator gehört.

Der Front-End-Code der RP sendet dies an den Server, der:

- Die Attestation verifiziert, falls eine Attestation stattfindet
- Verifiziert, dass der Challenge den erwarteten Wert hat
- Ein neues Benutzerkonto erstellt und den öffentlichen Schlüssel darin zusammen mit den Benutzerkontoinformationen speichert.

## Anmeldung

In diesem Abschnitt werden wir den Ablauf durchgehen, der verwendet wird, um einen Benutzer mit einem Passkey anzumelden.

![Übersicht über die Benutzeranmeldung mit Passkeys.](passkeys-sign-in.svg)

Wenn der Benutzer versucht, sich anzumelden, fordert der Front-End-Code der RP erneut einen [Challenge](#challenges)-Wert vom Server an.

Als Nächstes ruft der Front-End-Code der RP [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) auf. Es können verschiedene Optionen spezifiziert werden, einschließlich:

- **Zulässige Credentials**: Ein Array von Kennungen für die Passkeys, die die RP akzeptieren wird. Dieses Array kann leer sein oder ausgelassen werden, in diesem Fall können alle geeigneten Passkeys verwendet werden.

- **Challenge**: Der [Challenge](#challenges), der vom RP-Server generiert wurde.

- **Webseiten-ID**: Die ID der RP, die versucht, den Benutzer anzumelden. Siehe [Passkey-Scope](#passkey-scope).

- **Benutzerverifikation**: Ob der Authenticator [Benutzerverifikation](#benutzerverifikation) durchführen soll, bevor der Passkey verwendet wird.

Als Nächstes findet der Browser Passkeys, die den gegebenen Kriterien entsprechen: wenn er mehr als einen findet, kann er den Benutzer bitten, einen auszuwählen. Der Authenticator, der diesen Passkey speichert, wird den Benutzer typischerweise auffordern, die Verwendung dieses Passkeys zu autorisieren, einschließlich [Benutzerverifikation](#benutzerverifikation), wenn dies von der RP angefordert wird und vom Authenticator unterstützt wird.

Der Authenticator wird dann den privaten Schlüssel des Passkeys verwenden, um eine digital signierte [Assertion](#assertions) zu erstellen, einschließlich des Challenge und anderer Daten.

Der Front-End-Code der RP sendet die Assertion an den Server, der die Signatur mit dem gespeicherten öffentlichen Schlüssel verifiziert. Wenn die Verifikation erfolgreich ist, kann der Benutzer angemeldet werden.

## Funktionen von WebAuthn

In diesem Abschnitt werden wir einige Aspekte der WebAuthn-API näher erläutern.

### Plattform- und Roaming-Authentificatoren

Die WebAuthn-API unterscheidet zwei Arten von Authenticatoren:

- **Plattformauthenticatoren**
  - : Diese Authenticatoren können nicht vom Gerät entfernt werden. Zum Beispiel Authenticatoren, die in das Betriebssystem des Geräts integriert sind, wie das [Touch ID](https://en.wikipedia.org/wiki/Touch_ID)-System in Apple-Geräten oder das [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security)-System.
- **Roaming-Authenticatoren**
  - : Diese Authenticatoren können vom Gerät entfernt und an ein anderes Gerät angeschlossen werden. Das klassische Beispiel hierfür ist ein Authenticator, der in einem USB-Stick implementiert ist, wie ein [YubiKey](https://en.wikipedia.org/wiki/YubiKey).

Wenn eine RP einen neuen Passkey erstellt, kann sie als Teil der [`authenticatorSelection`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#authenticatorselection)-Option, die sie an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergibt, fragen, welche Art von Authenticator sie verwenden möchte.

Der Hauptvorteil eines Plattformauthenticators ist, dass er für den Benutzer bequem ist: sie müssen sich kein separates Hardwareteil merken. Der Hauptnachteil ist, dass er nur mit seinem Host-Gerät verwendet werden kann.

Plattformauthenticatoren können manchmal als Roaming-Authenticatoren fungieren: zum Beispiel könnte ein Plattformauthenticator auf einem mobilen Gerät einem Laptop als Roaming-Authenticator über eine Bluetooth-Verbindung zur Verfügung stehen.

Obwohl Plattformauthenticatoren nicht vom Gerät entfernt werden können, können sie oft ihre Passkeys über Cloud-Synchronisation oder Import/Export-Funktionen mit anderen Authenticatoren teilen. Beispielsweise könnte ein Plattformanbieter es den Benutzern ermöglichen, ihre Passkeys über alle Geräte in ihrer Produktfamilie hinweg zu teilen.

### Entdeckbare und nicht-entzückbare Credentials

Die WebAuthn-Spezifikation unterscheidet zwischen _entdeckbaren_ und _nicht-entdeckbaren_ Credentials.

- **Entdeckbare Credentials**, auch bekannt als _resident keys_, sind solche, die verwendet werden können, ohne dass die RP zuerst den Benutzer identifizieren muss, der authentifiziert wird: das heißt, das "allowed credentials"-Array, das an [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergeben wird, kann leer sein. Mit einem entdeckbaren Credential werden alle Signierschlüssel im Authenticator gespeichert, sodass der Authenticator Signaturen erstellen kann, ohne dass er eine Eingabe der RP benötigt.

- **Nicht-entdeckbare Credentials**, auch bekannt als _non-resident keys_, sind solche, für die die RP zuerst den Benutzer identifizieren muss, der authentifiziert wird (zum Beispiel, indem sie ihn seinen Benutzernamen eingeben lässt) und dann die zugehörige Credential-ID in das "allowed credentials"-Array von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) übergibt.

  Nicht-entdeckbare Credentials benötigen die Credential-ID, weil sie den Signierschlüssel nicht selbst im Authenticator speichern, sondern den Signierschlüssel jedes Mal aus einem internen Seed und dem Credential-ID-Wert generieren, wenn er benötigt wird. Das heißt, der Kontoschlüssel ist nicht im Authenticator vorhanden.

Der Vorteil der Verwendung nicht-entdeckbarer Credentials besteht darin, dass ein Authenticator mit begrenztem Speicherplatz möglicherweise eine potenziell unbegrenzte Anzahl von Konten unterstützen kann, weil das Schlüsselmaterieal für jedes Konto nicht im Authenticator gespeichert ist.

Der Vorteil der Verwendung entdeckbarer Credentials besteht darin, dass sie es einem Browser ermöglichen, [Autofill](/de/docs/Web/Security/Authentication/Passkeys#autofill_ui) mit Public-Key-Credentials zu implementieren, was es für Benutzer viel einfacher macht, sich anzumelden, insbesondere wenn sie sowohl Public-Key-Credentials als auch Passwörter für eine bestimmte Seite haben könnten.

**Aus diesem Grund müssen Passkeys immer entdeckbare Credentials sein, weshalb RPs, die eine Authentifizierung auf Grundlage von Passkeys implementieren, diese immer entdeckbar machen sollten**.

Um ein entdeckbares Credential zu erstellen, sollte die RP die Option `residentKey` auf `"required"` und die Option `requireResidentKey` auf `true` setzen, wenn sie ein neues Credential im Aufruf an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt.

### Challenges

Wenn eine RP einen Authenticator darum bittet, einen neuen Passkey zu erstellen oder einen bestehenden Passkey zu verwenden, muss sie einen _Challenge_ bereitstellen. Dies ist ein zufälliger, anfragebezogener Wert, der von einem Angreifer nicht vorhersehbar ist. Der Challenge muss in einer vertrauenswürdigen Umgebung generiert werden (was in der Regel bedeutet: auf dem Server, nicht im Front-End).

Der Front-End-Code der RP übergibt den Challenge in den `create()`- oder `get()`-Aufruf, und der Browser schließt denselben Wert in das von diesen Methoden zurückgegebene Objekt ein. Im Fall von `get()` ist der Challenge-Wert auch Teil der Eingabe für die digitale Signatur, die vom Authenticator berechnet wird.

Wenn der Webserver die Antwort vom Authenticator verifiziert, muss er prüfen, dass der Challenge der gleiche Wert ist, den er ursprünglich bereitgestellt hat.

Der Webserver sollte den Challenge-Wert nach etwa 10 Minuten ungültig machen und alle Antworten mit dem Challenge ablehnen, die nach dieser Zeit eingegangen sind.

Der Challenge stellt einen Beweis dafür dar, dass die Antwort des Authenticator eine Antwort auf _diese_ Anfrage und keine alte Antwort auf eine vorherige Anfrage ist, die ein Angreifer gestohlen hat. Diese Art von Angriff wird als {{Glossary("replay_attack", "Replay-Angriff")}} bezeichnet.

### Attestation

Die Sicherheit eines Passkeys hängt teilweise von der Zuverlässigkeit des verwendeten Authenticators ab. Zum Beispiel könnte ein Angreifer die Schlüssel stählen und Benutzer imitieren, wenn ein Authenticator die privaten Schlüssel, die er speichert, nicht schützt. WebAuthn definiert einen optionalen Mechanismus namens _Attestation_, bei dem ein Authenticator der RP verifizierbare Nachweise über den Authenticator und die von ihm erzeugten Daten (wie Schlüsselpaar oder signierte Assertions) liefern kann. Dies kann der RP helfen zu entscheiden, ob sie sich auf den Authenticator verlassen möchte, um ihre Benutzer zu authentifizieren.

Um die Attestation zu implementieren, enthält der Authenticator ein Schlüsselpaar namens _Attestation Key_, das zum Zeitpunkt der Herstellung in das Gerät eingebaut wurde und als zu der Organisation gehörend {{Glossary("digital_certificate", "zertifiziert")}} ist, die diesen Authenticator hergestellt hat. Zum Beispiel könnte im Zertifikat angegeben sein, dass dieser Authenticator von "Acme Authenticator Incorporated" produziert wurde.

Wenn der Authenticator einen neuen Passkey erstellt, signiert er das resultierende Objekt mit seinem Attestation Key. Die RP verifiziert die Signatur und das zugehörige Zertifikat und hat dann einen Nachweis, dass der Passkey von einem Authenticator erstellt wurde, der von "Acme Authenticator Incorporated" produziert wurde.

Nicht alle Authenticatoren unterstützen die Attestation, und RPs können angeben, dass sie an Attestation nicht interessiert sind. In diesen Situationen könnte das von einem Aufruf an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegebene Objekt überhaupt nicht signiert sein, oder es könnte mithilfe des Passkeys selbst (dies wird als _Self-Attestation_ bezeichnet) signiert sein. In diesen Situationen hat die RP keinen verlässlichen Beweis über den Ursprung oder die Fähigkeiten des Authenticators.

### Benutzerverifikation

Wenn eine Webseite [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) aufruft, um einen neuen Passkey zu erstellen, oder [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufruft, um eine Assertion zu erstellen, fragt der Authenticator den Benutzer immer um Zustimmung zur Durchführung der Operation.

Die RP kann auch den Authenticator darum bitten, eine _Benutzerverifikation_ durchzuführen, die bedeutet, dass der Benutzer aufgefordert wird, die Verwendung ihres Credentials zu autorisieren, zum Beispiel durch Eingabe einer PIN oder eines biometrischen Merkmals wie eines Fingerabdrucks.

Wenn dies geschieht, gilt es als eine Form der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung")}}: Der Authenticator selbst ist "etwas, das der Benutzer hat", während die PIN oder das biometrische Merkmal jeweils "etwas, das sie wissen" oder "etwas, das sie sind" ist.

Beachten Sie, dass nicht alle Authenticatoren die Benutzerverifikation unterstützen.

### Passkey-Scope

Der Scope eines Passkeys bestimmt, welche Seiten den Passkey verwenden dürfen.

Standardmäßig:

- Wenn eine Seite einen Passkey durch Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) erstellt, setzt der Browser den RP-ID des Passkeys auf die Domainkomponente der {{Glossary("origin", "Origin")}} des Aufrufers, und der Authenticator speichert diesen Wert zusammen mit dem Passkey.

- Wenn eine Seite einen Passkey durch Aufruf von [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) verwendet, übergibt der Browser die Domainkomponente der {{Glossary("origin", "Origin")}} des Aufrufers an den Authenticator, und der Authenticator erlaubt den Passkey nur zu verwenden, wenn dieser Wert mit dem gespeicherten RP-ID übereinstimmt.

Dies bedeutet, dass ein Passkey standardmäßig nur von einer Seite verwendet werden kann, die aus derselben Origin (exklusive des Ports) stammt wie die Seite, die ihn ursprünglich erstellt hat.

Webseiten können diese Regeln innerhalb bestimmter Grenzen lockern:

- Wenn eine Webseite einen Passkey erstellt, kann sie dem [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create)-Aufruf eine ID übergeben, und der Authenticator verwendet diese als RP-ID.

- Ebenso kann eine Webseite, die versucht, einen Passkey zu verwenden, eine ID an den [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get)-Aufruf übergeben, und der Authenticator vergleicht diese ID mit der gespeicherten RP-ID.

Für sowohl `create()` als auch `get()` muss der übergebene Wert eine {{Glossary("registrable_domain", "registrierbare Domain")}} sein, die ein _Domain-Suffix_ der Domain der Origin des Aufrufers ist.

Diese Lockerung bedeutet, dass zum Beispiel eine Seite unter `https://register.example.com` möglicherweise einen Passkey mit einer RP-ID von `example.com` erstellt, und eine Seite unter `https://login.example.com` dann erlaubt wäre, diesen Passkey zu verwenden.

Der Scope von Passkeys hilft, sich gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing) zu verteidigen. Bei einem Phishing-Angriff wird dem Benutzer eine bösartige Seite präsentiert, die aussieht wie die Zielseite, und die den Benutzer auffordert, ihre Anmeldeinformationen für die Zielseite einzugeben. Typischerweise erscheint die URL der bösartigen Seite ähnlich wie die der Zielseite, was den Benutzer verwirrt. Zum Beispiel, wenn die Zielseite `https://example.com` ist, dann könnte die Phishing-Seite von `https://examp1e.com` bereitgestellt werden.

Mit den Scope-Regeln für Passkeys jedoch ist eine Seite, die von `https://examp1e.com` bereitgestellt wird, nicht in der Lage, Passkeys zu verwenden, die für `https://example.com` erstellt wurden.

### Erfahren von Origin

Die signierte [Assertion](#assertions), die von einem Authenticator zurückgegeben wird, enthält Informationen über den Kontext des Aufrufers:

- Die {{Glossary("origin", "Origin")}} des Dokuments, das [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) aufgerufen hat.
- Wenn der Aufrufer als {{htmlelement("iframe")}} eingebettet war, ob der Aufrufer die gleiche Origin wie das oberste Dokument hatte.
- Die Origin des obersten Dokuments, wenn der Aufrufer als {{htmlelement("iframe")}} eingebettet war und nicht die gleiche Origin wie der Aufrufer hatte.

Wenn der RP-Server die Assertion verifiziert, muss er prüfen, ob diese Werte dem entsprechen, was er erwartet.

Dies bietet eine Schutzschicht gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, zusätzlich zu der, die von [Passkey-Scope](#passkey-scope) bereitgestellt wird.

## Sicherheitseigenschaften von Passkeys

Passkeys sind sicherer als Passwörter, und wir können sehen, wie ihr Design die ernsthaftesten [Schwächen von Passwörtern](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) adressiert:

- Im Gegensatz zu einem Passwort erfindet der Benutzer niemals einen Passkey-Wert oder muss ihn sich merken. Dies bedeutet, dass Benutzer keine schwachen Passkey-Werte wählen können, sodass sie nicht anfällig für [Raten](/de/docs/Web/Security/Authentication/Passwords#guessing)-Angriffe sind. Die Passkey-Generierung wird vom Benutzer auf den Authenticator übertragen.

- Passkeys werden nie über Websites hinweg wiederverwendet, sodass sie nicht anfällig für [Credential-Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing)-Angriffe sind. Wenn ein Angreifer Zugriff auf einen Passkey erhält, kann er ihn nur für die Seite verwenden, die ihn ursprünglich erstellt hat.

- Bei Passkeys muss der Server keine Geheimnisse speichern: er speichert nur den öffentlichen Schlüssel. Wenn ein Angreifer [in die Datenbank des Servers eindringt](/de/docs/Web/Security/Authentication/Passwords#database_compromise), kann er den privaten Schlüssel, der im Authenticator gespeichert ist, nicht kompromittieren. Beachten Sie jedoch, dass sie Benutzerkonten kompromittieren können, wenn sie _falsche Credentials_ in der Datenbank des Servers schreiben können.

- Wenn der Benutzer versucht, sich anzumelden, wird der Browser nur nach Passkeys suchen, deren Scope mit der anfragenden Seite übereinstimmt, und der RP-Server kann verifizieren, dass die Origin des Anfragenden die erwartete war. Dies macht Passkeys resistent gegen [Phishing](/de/docs/Web/Security/Attacks/Phishing)-Angriffe, weil Front-End-Code, der von einer Phishing-Seite wie `https://examp1e.com` bereitgestellt wird, nicht in der Lage ist, den mit `https://example.com` assoziierten Passkey zu verwenden.

Obwohl Passkeys Schutz gegen diese häufigen Web-Authentifizierungsangriffe bieten, eliminieren sie nicht alle Bedrohungen. Da die weitverbreitete Bereitstellung von Passkeys relativ neu ist, gibt es noch kein fundiertes Verständnis der Angriffe, denen Passkeys möglicherweise ausgesetzt sind, aber es ist wahrscheinlich, dass einige Angriffe sich auf die Geräte des Benutzers konzentrieren: zum Beispiel, wenn sie dazu verleitet werden, einen bösartigen Authenticator zu installieren. Angriffe können auch auf Teile des Authentifizierungssystems abzielen, die nicht durch Passkeys gesichert sind, wie z.B. Kontowiederherstellungsmechanismen.

## Umgang mit verlorenen Passkeys

Wenn ein Benutzer einen Authenticator verliert, sei es ein separates Modul oder in ihr Telefon integriert, verlieren sie alle darin enthaltenen Passkeys.

In diesem Abschnitt diskutieren wir zwei Strategien für den Umgang mit Authenticator-Verlust:

- [Erstellung mehrerer Passkeys für ein einzelnes Konto](#erstellung_mehrerer_passkeys)
- [Passkeys sichern](#passkey-backup)

### Erstellung mehrerer Passkeys

Im Gegensatz zu den Ratschlägen zu Passwörtern werden RPs ermutigt, für ein einzelnes Konto mehrere Passkeys zu erstellen. Ein häufiges Muster wäre:

- Ein Passkey in einem [Plattformauthenticator](#platform_authenticators), der als ihr alltäglicher Passkey für die Seite fungiert
- Ein Passkey in einem [Roaming-Authenticator](#roaming_authenticators), den der Benutzer an einem sicheren Ort aufbewahrt, als Backup für den Fall, dass der Benutzer sein Gerät verliert.

Die [`excludeCredentials`](/de/docs/Web/API/PublicKeyCredentialCreationOptions#excludecredentials)-Option, die an [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) übergeben wird, listet Credential-IDs auf und sagt dem Browser, dass die Authenticatoren, die die aufgelisteten Schlüssel enthalten, nicht für den neuen Schlüssel verwendet werden dürfen. Das heißt, es ist eine Möglichkeit für die RP sicherzustellen, dass der neue Passkey in einem neuen Authenticator erstellt wird.

### Passkey-Backup

Einige Authenticatoren unterstützen das Backup auf verschiedene Weise, wie z.B. Cloud-Synchronisation oder manuellen Export. Die signierte Assertion, die von einem Aufruf an `get()` zurückgegeben wird, enthält ein Set von [Flags](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#flags), das unter anderem angibt, ob der Passkey:

- _Backup-fähig_ ist: das heißt, ob er in einem Authenticator gespeichert ist, der Backup unterstützt
- Tatsächlich gesichert wurde.

Eine RP kann diese Informationen verwenden, um einen Benutzer bei der Verwaltung seiner Credentials zu unterstützen. Zum Beispiel:

- Wenn der Passkey nicht backup-fähig ist, könnte die RP dem Benutzer vorschlagen, einen weiteren Passkey in einem anderen Authenticator zu erstellen, der als Backup verwendet werden könnte.

- Wenn die RP Benutzer von Passwörtern migriert und der Benutzer ein altes Passwort sowie einen Passkey hat und die Assertion anzeigt, dass der Passkey gesichert wurde, könnte die RP den Benutzer einladen, ihr altes Passwort zu löschen, da sie es nicht mehr als Backup benötigen.

## Verwaltung von Passkeys

Wir haben gesehen, dass ein Benutzer möglicherweise mehrere Passkeys für ein einzelnes Konto hat, die sich über mehrere Authenticatoren und mehrere Geräte verteilen. Jeder Passkey entspricht einem WebAuthn-Credential, mit privatem Schlüsselmaterieal, das durch den Authenticator geschützt ist, und einem entsprechenden öffentlichen Schlüssel, der von der RP als Teil der Konto des Benutzers gespeichert wird.

Manchmal muss der Benutzer möglicherweise einen Passkey für ihr RP-Konto löschen: Dies bedeutet im Wesentlichen, den öffentlichen Schlüssel, der im Server der RP gespeichert ist, zu löschen, damit der entsprechende private Schlüssel nicht mehr verwendet werden kann, um den Benutzer anzumelden. Dies ist in der Regel erforderlich, wenn der Benutzer keine Kontrolle mehr über den Authenticator hat, zum Beispiel weil sie das Gerät verloren haben, das ihn enthält.

Das bedeutet, dass eine RP eine Möglichkeit implementieren sollte, damit ein authentifizierter Benutzer die registrierten Passkeys für sein Konto anzeigen und bestimmte öffentliche Schlüssel löschen kann. Für jeden Schlüssel sollte die RP Informationen anzeigen, die einem Benutzer helfen, zu verstehen, welcher Schlüssel es ist und mit welchem Authenticator er verknüpft ist. Dies kann einschließen:

- **Passkey-Anbietername**: Der Name des Passkey-Anbieters, wie "Windows Hello" oder "Bitwarden".

  > [!NOTE]
  > Um diesen Wert zu bestimmen:
  >
  > - Finden Sie den _AAGUID_-Wert in den [`attestedCredentialData`](/de/docs/Web/API/Web_Authentication_API/Authenticator_data#attestedcredentialdata), die vom Browser bei einem erfolgreichen Aufruf von [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) zurückgegeben werden.
  > - Verwenden Sie diesen, um den entsprechenden Namen in der [Passkey-Anbieter-AAGUIDs](https://github.com/passkeydeveloper/passkey-authenticator-aaguids)-Liste nachzuschlagen.
  >
  > Siehe auch [Bestimmen des Passkey-Anbieters mit AAGUID](https://web.dev/articles/webauthn-aaguid).

- **Zeitstempel**: Die Zeit, zu der der Passkey zuletzt zum Anmelden verwendet wurde.

- **Backup-Status**: Ein Indikator dafür, ob der Passkey gesichert wurde (siehe [Passkey-Backup](#passkey-backup)).

Darüber hinaus sollte der Benutzer in der Lage sein, den Passkey-Namen zu bearbeiten und den Passkey zu löschen.

Wenn der Benutzer versucht, den letzten Passkey zu löschen, sollte die RP ihn über die Auswirkungen informieren: Die RP könnte dem Benutzer erlauben, sich mit einer anderen Methode wie einem [Einmalcode](/de/docs/Web/Security/Authentication/OTP) anzumelden, oder sie könnten keinen Zugriff mehr auf ihr Konto haben.

Siehe auch [Benutzern helfen, Passkeys effektiv zu verwalten](https://web.dev/articles/passkey-management).

### Server- und Authenticatoren-Synchronisation

Beachten Sie, dass, wenn der Benutzer einen Passkey auf dem RP-Server löscht, dies eine Asymmetrie zwischen dem Server und dem Authenticator einführt, der den entsprechenden privaten Schlüssel enthält. Der Authenticator glaubt immer noch, dass der Passkey gültig ist, sodass der Browser ihn dem Benutzer als Anmeldeoption anbieten kann, aber die RP akzeptiert seine Assertions nicht mehr.

Um die Wahrscheinlichkeit solcher Probleme zu verringern, definiert die WebAuthn-API eine Reihe von statischen Methoden von [`PublicKeyCredential`](/de/docs/Web/API/PublicKeyCredential), die es einer RP ermöglichen, Authenticatoren über serverseitige Änderungen zu informieren:

- [`PublicKeyCredential.signalUnknownCredential()`](/de/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static) teilt dem Browser mit, dass ein bestimmter Passkey von der RP nicht erkannt wurde und wird typischerweise von der RP direkt nachdem der Benutzer versucht hat, sich mit diesem Passkey anzumelden, aufgerufen. Das häufigste Szenario ist hier, dass der Benutzer diesen Passkey auf dem Server gelöscht hat und dann versehentlich versucht hat, sich damit anzumelden.

- [`PublicKeyCredential.signalAllAcceptedCredentials()`](/de/docs/Web/API/PublicKeyCredential/signalAllAcceptedCredentials_static) gibt dem Browser die Kennungen aller Passkeys, die die RP derzeit als gültig akzeptiert, um alle angeschlossenen Authenticatoren in die Lage zu versetzen, ihre gespeicherten Schlüssel zu aktualisieren. Es könnte jedes Mal aufgerufen werden, wenn sich der Benutzer erfolgreich authentifiziert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie die Anmeldungs-IDs des Benutzers aufdeckt.

- [`PublicKeyCredential.signalCurrentUserDetails()`](/de/docs/Web/API/PublicKeyCredential/signalCurrentUserDetails_static) teilt dem Browser den aktuellen Benutzernamen und Anzeigenamen des Benutzers mit und sollte aufgerufen werden, wenn ein authentifizierter Benutzer diese Werte ändert. Diese API darf nur für authentifizierte Benutzer aufgerufen werden, da sie Benutzerdaten offenlegt.

## Übergang von Passwörtern

Die meisten Websites, die Passkey-Unterstützung hinzufügen, unterstützen bereits die Passwort-basierte Authentifizierung und haben eine bestehende Benutzerbasis mit Passwörtern. Diese Benutzer sind nicht vor den [Schwächen der Passwörter](/de/docs/Web/Security/Authentication/Passwords#weaknesses_of_password-based_authentication) sicher, bis sie nicht nur Passkeys auf Ihrer Website haben und verwenden, sondern auch keine Passwörter mehr besitzen, die mit ihren Konten verknüpft sind.

Sie können einen dreistufigen Prozess implementieren, um Benutzer von Passwörtern zu Passkeys zu migrieren:

- [Benutzern ermöglichen, Passkeys neben ihren Passwörtern zu erstellen](#erstellung_von_passkeys_neben_passwörtern)
- [Benutzern ermöglichen, ihre Passkeys anstelle ihrer Passwörter zu verwenden](#verwendung_von_passkeys_neben_passwörtern)
- [Benutzern ermöglichen, ihre Passwörter zu löschen](#passwörter_aufgeben)

### Erstellung von Passkeys neben Passwörtern

Der erste Schritt besteht darin, den Benutzern die Möglichkeit zu bieten, einen Passkey zu erstellen, wenn sie sich erfolgreich mit einem Passwort auf Ihrer Website anmelden.

#### Bedingtes Erstellen

Ein zusätzlicher Schritt zur Erhöhung der Passkey-Adoption ist eine Funktion namens _Bedingtes Erstellen_. Dies ermöglicht einer RP, einen neuen Passkey für das Konto eines Benutzers zu erstellen, ohne dass eine Benutzereingabe erforderlich ist, wenn bestimmte Bedingungen erfüllt sind.

Um das bedingte Erstellen zu aktivieren, ruft die RP [`CredentialsContainer.create()`](/de/docs/Web/API/CredentialsContainer/create) auf und übergibt die [`mediation`](/de/docs/Web/API/CredentialsContainer/create#mediation) Option auf `"conditional"` gesetzt:

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

- Wenn der Benutzer sich gerade mit einem Passwort angemeldet hat, indem er einen Passwortmanager verwendet, der auch Passkeys unterstützt (das heißt, einen _Credential-Manager_, der auch als Authenticator fungieren kann), wird der Browser diesen Credential-Manager bitten, einen neuen Passkey für den Benutzer zu erstellen, ohne den Benutzer zu fragen.

- Andernfalls schlägt der `create()`-Aufruf fehl.

Aus Sicht des Benutzers, wenn das Erstellen fehlschlägt, wissen sie nicht, dass er gemacht wurde, und wenn es erfolgreich ist, kann die RP sie darüber informieren, dass sie einen Passkey haben, den sie beim nächsten Mal verwenden können, um sich anzumelden.

Die Theorie hier ist, dass, wenn der Benutzer bereits auf einen Credential-Manager für die Anmeldung vertraut, sie ihm implizit vertrauen, dass er ihre Anmelde-Credentials _im Allgemeinen_ verwaltet, sodass sie ihm vertrauen können, eine neue Form von Credentials für sie zu erstellen.

### Verwendung von Passkeys neben Passwörtern

Wenn ein Benutzer sowohl ein Passwort als auch einen oder mehrere Passkeys hat, können sie entscheiden, entweder das eine oder das andere zu verwenden, um sich anzumelden, und die RP möchte sie möglicherweise dazu ermutigen, den Passkey zu verwenden.

In der Übergangsphase könnte ein Benutzer entweder Passwörter oder Passkeys für ihr Konto haben oder beides. In dieser Situation kann eine Benutzeroberfläche, die sie fragt, mit welcher Methode sie sich anmelden möchten, verwirrend sein: sie könnten nicht wissen, welche Methode sie für welches Konto haben.

#### Autofill-Benutzeroberfläche

Eine Technik, um Benutzern in dieser Situation zu helfen, ist die _Autofill-Benutzeroberfläche_, auch manchmal _Bedingte Vermittlung_ genannt.

Bei dieser Technik bietet die Anmeldeseite der RP dem Benutzer ein Formular, das ihnen ermöglicht, sich mit einem Benutzernamen und Passwort anzumelden. Im Feld für den Benutzernamen fügt die RP einen Autocomplete-Wert von `"webauthn"` hinzu:

```html
<input type="text" name="username" autocomplete="username webauthn" autofocus />
```

Im Hintergrund startet die RP den normalen Prozess, um eine mit einem Passkey signierte Assertion anzufordern: sie holt einen [Challenge](#challenges) vom Server und bereitet die anderen Optionen für [`CredentialsContainer.get()`](/de/docs/Web/API/CredentialsContainer/get) vor.

Wenn die RP jedoch `get()` aufruft, übergibt sie die `mediation: "conditional"` Option (genau wie beim [bedingtem Erstellen](#bedingtes_erstellen)):

```js
const assertion = await navigator.credentials.get({
  publicKey: options,
  mediation: "conditional",
});
```

Die Wirkung davon ist, dass der Aufruf wartet, bis der Benutzer mit dem Benutzernamen-Feld interagiert. Wenn der Benutzer mit dem Feld interagiert, sucht der Browser nach Passkeys, die verwendet werden können, um sich bei der RP anzumelden, und zeigt sie dem Benutzer als Autofill-Werte an. Wenn der Benutzer einen auswählt, wird der ausgewählte Passkey verwendet, und die RP kann die resultierende Assertion verwenden, um den Benutzer anzumelden.

Wenn der Benutzer keinen Passkey für die Seite hat oder keinen der angebotenen Passkeys auswählt, kann er seinen Benutzernamen und sein Passwort eingeben oder von ihrem Passwortmanager automatisch ausfüllen lassen.

Dies bedeutet, dass Sie Benutzer unterstützen können, die entweder Passwörter oder Passkeys oder beides haben, ohne spezielle Benutzeroberfläche und ohne dass der Benutzer sich merken muss, ob er tatsächlich einen Passkey für Ihre Website hat.

### Passwörter aufgeben

Selbst wenn ein Benutzer einen Passkey für Ihre Website hat und diesen gegenüber seinem Passwort bevorzugt nutzt, ist er weiterhin anfällig für Angriffe wie [Credential Stuffing](/de/docs/Web/Security/Authentication/Passwords#credential_stuffing), [Raten](/de/docs/Web/Security/Authentication/Passwords#guessing) und [Phishing](/de/docs/Web/Security/Attacks/Phishing), solange Sie ein Passwort für ihr Konto aufbewahren.

Als letzten Schritt möchten Sie sicherlich, dass ein Benutzer sein Passwort vollständig löscht. Sie können diese Option in ihren Kontoeinstellungen anbieten und möglicherweise dazu drängen, ihr Passwort zu löschen, wenn sie es lange nicht mehr verwendet haben (aber ihre Passkeys regelmäßig nutzen).

Jedoch sollten Sie auch berücksichtigen, dass der Besitz eines Passworts einem Benutzer hilft, sich davor zu schützen, aus ihrem Konto ausgeschlossen zu werden, wenn sie den Zugang zu ihrem Passkey verlieren. Bevor Sie Benutzer ermutigen, ihr Passwort zu löschen, können Sie prüfen, ob sie alternativ geschützt sind, z.B. durch [mehrere Passkeys auf verschiedenen Authenticatoren](#erstellung_mehrerer_passkeys) und/oder Passkeys, die [gesichert wurden](#passkey-backup).

## Siehe auch

- [Die Web Authentication API](/de/docs/Web/API/Web_Authentication_API)
- [Passkey Central](https://www.passkeycentral.org/home)
- [passkeys.dev](https://passkeys.dev/)
- [Passkeys](https://developers.google.com/identity/passkeys/) (developers.google.com)
