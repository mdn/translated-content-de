---
title: Phishing
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: 5e3308146f872a133a3221e612ea8c6ee85dd77d
---

Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem ein Benutzer dazu gebracht wird zu glauben, dass er mit einer Website interagiert, bei der er ein Konto hat, während er in Wirklichkeit mit dem Angreifer interagiert. Der Angreifer überzeugt den Benutzer, seine Anmeldedaten auf der gefälschten Website einzugeben und stiehlt dadurch die Anmeldedaten des Benutzers.

## Überblick

Phishing ist ein sehr alter, aber immer noch sehr häufiger Angriff, der viele Variationen durchlaufen hat, sowohl um Abwehrmaßnahmen zu umgehen als auch um neue Schwachstellen auszunutzen. In einer grundlegenden Form jedoch:

1. Registriert der Angreifer einen Domainnamen, der der Zielseite ähnelt. Beispielsweise, wenn die Bankwebsite des Benutzers `my-bank.example.com` ist, könnte der Angreifer `my-bank.examp1e.com` registrieren.
2. Der Angreifer erstellt eine Website unter dieser Adresse, die der echten Website ähnelt.
3. Der Angreifer sendet dem Benutzer eine E-Mail, die vorgibt, von `my-bank.example.com` zu sein, und gibt irgendeinen Grund an, warum der Benutzer die Website besuchen soll, und enthält einen Link zur gefälschten Website `my-bank.examp1e.com`.
4. Der Benutzer klickt auf den Link und wird aufgefordert, sich anzumelden. Er gibt seinen Benutzernamen und sein Passwort ein, und der Angreifer hat nun seine Anmeldedaten.

Phishing-Angriffe verwenden manchmal verschiedene Techniken, um ihre Opfer zu kontaktieren, wie Textnachrichten oder Anrufe, und manchmal sind keine Webseiten beteiligt, indem Benutzer dazu gebracht werden, ihnen verbal Passwörter oder PIN-Codes mitzuteilen.

Einige Phishing-Angriffe sind sehr unspezifisch und senden viele Nachrichten an potenzielle Opfer, in der Hoffnung, dass einige getäuscht werden. Bei _Spear-Phishing_-Angriffen hingegen recherchieren die Angreifer spezifische Opfer, sammeln persönliche Informationen über sie, um den Köder überzeugender zu machen. Beispielsweise könnte die E-Mail vorgeben, von jemandem zu kommen, den das Opfer kennt, und sogar private Informationen enthalten.

Phishing-Angriffe hängen nicht von naiven oder unerfahrenen Benutzern ab: Jahrzehntelange Erfahrung hat gezeigt, dass selbst sehr erfahrene und gut informierte Benutzer anfällig für Phishing-Angriffe sein können, insbesondere wenn sie beschäftigt, müde oder abgelenkt sind.

## Abwehrmaßnahmen

Eine der Herausforderungen, gegen Phishing auf einer Website zu verteidigen, besteht darin, dass die Zielseite überhaupt nicht in den Angriff involviert ist. Es hängt vollständig davon ab, dass der Benutzer vom Angreifer getäuscht wird. In diesem Abschnitt werden wir einige Praktiken besprechen, die helfen können, aber die einzige wirklich effektive Maßnahme ist die Verwendung von [Passkeys](web_authentication_passkeys) anstelle von Passwörtern.

### DNS-Konfiguration

Phishing-E-Mails fälschen oft die Absenderadresse, um das Opfer glauben zu machen, dass die E-Mail wirklich von der Zielwebsite stammt. Drei {{Glossary("DNS", "DNS")}}-Einträge helfen E-Mail-Servern, diese Fälschungen zu erkennen, was dazu beiträgt, sicherzustellen, dass Phishing-E-Mails im E-Mail-Client des Opfers als Spam markiert oder komplett blockiert werden.

- Der [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/)-Eintrag listet Adressen auf, die berechtigt sind, E-Mails von der Domain zu senden. Ein empfangender E-Mail-Server extrahiert den Domain-Namen aus dem `Return-Path`-Header der E-Mail und sucht den mit dieser Domain verbundenen SPF-Eintrag.
- Der [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/)-Eintrag ermöglicht es dem Absender, E-Mails {{Glossary("digital_signature", "digital zu signieren")}}. Der empfangende Server extrahiert den Domain-Namen aus der Signatur und verwendet ihn, um den mit dieser Domain verbundenen DKIM-Eintrag zu suchen. Der DKIM-Eintrag enthält den öffentlichen Schlüssel zur Überprüfung der Signatur. Der Domain-Name in der Signatur muss außerdem mit dem Domain-Namen im `From`-Header der E-Mail übereinstimmen (dies bedeutet im Wesentlichen, dass die Domain-Namen übereinstimmen müssen oder der Wert im `From`-Header eine Subdomain der Domain in der Signatur sein muss).
- Der [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/)-Eintrag sagt dem Empfänger, wie er bei SPF- und DKIM-Fehlschlägen vorgehen soll: ob sie als Spam zu isolieren, abzulehnen oder zuzulassen sind.

Sie sollten diese DNS-Einträge für Ihre Domains festlegen, um E-Mail-Servern zu helfen, gefälschte Nachrichten zu erkennen.

### Passwort-Manager

Passwort-Manager können einen gewissen Schutz gegen Phishing-Angriffe bieten. Sie erfüllen drei Hauptfunktionen:

- **Passwort-Generierung**: Erstellung starker Passwörter, wenn Benutzer sich anmelden.
- **Passwort-Speicherung**: Sicheres Speichern der Passwörter eines Benutzers, sodass dieser sie sich nicht merken muss (und daher stärkere Passwörter verwenden kann)
- **Passwort-Eingabe**: Automatische Eingabe des Benutzerpassworts für eine Webseite, wenn der Benutzer die Anmeldeseite der Site besucht.

Der letzte Punkt kann gegen Phishing helfen. Der Benutzer sieht möglicherweise nicht den Unterschied zwischen der gefälschten Domain `my-bank.examp1e.com` und der echten Domain `my-bank.example.com`, aber der Passwort-Manager erkennt ihn und gibt infolgedessen das echte Passwort nicht automatisch auf der gefälschten Seite ein. Mit etwas Glück reicht dies als Warnung für den Benutzer aus, dass die Anmeldeanforderung nicht legitim ist.

Als Webentwickler können Sie Ihre Benutzer nicht dazu zwingen, einen Passwort-Manager zu verwenden. Wenn Sie jedoch nicht vorsichtig sind, können Sie es unmöglich machen, dass Passwort-Manager mit Ihrer Seite interagieren. Der Artikel [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) ist eine hervorragende Zusammenfassung der zu befolgenden Praktiken und der zu vermeidenden Praktiken, wenn Sie möchten, dass Benutzer Passwort-Manager auf Ihrer Website verwenden können. Es ist auch wichtig, Ihre Website mit Passwort-Managern zu testen, sowohl mit in Browsern integrierten als auch mit populären eigenständigen Anwendungen.

Leider sind Benutzer darauf trainiert, zu erwarten, dass Werkzeuge manchmal versagen, und um deren Versagen zu umgehen. Auch wenn ein Benutzer einen Passwort-Manager hat, und er mit Ihrer Website funktioniert, und das Passwort während eines Phishing-Versuchs nicht automatisch ausfüllt, gibt es keine Garantie dafür, dass der Benutzer das Passwort nicht einfach manuell einfügt. 

### Multi-Faktor-Authentifizierung

Die Nutzung von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}} zur Authentifizierung von Benutzern erschwert Phishing, verhindert es aber nicht unbedingt, je nach der spezifischen verwendeten Methode.

Insbesondere muss der Benutzer in den häufigsten MFA-Implementierungen sein Passwort und einen weiteren Code eingeben, der als _Einmalpasswort_ (OTP) bezeichnet wird und einzigartig für diesen Anmeldeversuch ist. Zwei gängige Varianten sind:

- SMS-basiertes OTP:
  - Der Benutzer gibt bei der Registrierung seine Handynummer an.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort angegeben hat, sendet die Website eine SMS an den Benutzer, die ein OTP enthält.
  - Der Benutzer gibt das OTP ein.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

- Zeitbasiertes OTP (TOTP):
  - Der Benutzer hat eine Authentifikator-App installiert.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort angegeben hat, berechnet die Website ein OTP unter Verwendung der aktuellen Zeit als Eingabe.
  - Der Authentifikator des Benutzers führt die gleiche Berechnung aus, und der Benutzer gibt das von der App generierte OTP ein.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

TOTP gilt als sicherer als SMS-basiertes OTP, da es möglich ist, dass Angreifer SMS-Nachrichten abfangen. Aus der Perspektive des Phishing sind jedoch beide Methoden anfällig.

Um einen Benutzer zu phishen, der OTP als zweiten Faktor verwendet, ist die gefälschte Website des Angreifers ein aktiver Vermittler in der Mitte zwischen dem Benutzer und der echten Website:

1. Der Angreifer sendet dem Benutzer die E-Mail, die den Link zur gefälschten Website enthält.
2. Der Benutzer klickt auf den Link in der E-Mail und gibt seinen Benutzernamen und sein Passwort auf der gefälschten Website ein.
3. Die gefälschte Website übermittelt den Benutzernamen und das Passwort an die echte Website.
4. Die echte Website generiert ein TOTP.
5. Die gefälschte Website fordert den Benutzer auf, sein TOTP einzugeben.
6. Die Authentifikator-App des Benutzers generiert das gleiche TOTP und der Benutzer gibt es auf der gefälschten Website ein.
7. Die gefälschte Website übermittelt das TOTP an die echte Website, und der Angreifer erhält Zugang.

![Diagramm, das zeigt, wie ein Phishing-Angriff gegen die zeitbasierte TOTP-Authentifizierung funktionieren kann](totp-phish.svg)

Dies ist viel schwieriger als nur ein Passwort zu phishen, da der Angreifer in Echtzeit arbeiten muss. Phishing-Toolkits reduzieren jedoch die Komplexität der Durchführung erheblich.

### Web-Authentifizierung (Passkeys)

Der stärkste technische Schutz gegen Phishing besteht darin, Benutzer mit _Passkeys_ zu authentifizieren, die auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basieren.

Ein Passkey wird erstellt, wenn der Benutzer sich auf der Website registriert, und ist spezifisch für den {{Glossary("origin", "Origin")}}, für den er ursprünglich erstellt wurde. Der Passkey wird von einem Modul namens _Authenticator_ generiert und gespeichert, das in das Gerät des Benutzers integriert ist oder daran angeschlossen wird.

Im Gegensatz zu Passwörtern oder OTP-Codes gibt ein Benutzer einen Passkey nie manuell auf einer Website ein: Tatsächlich wird der Passkey niemals an die Website übertragen. Wenn eine Website den Benutzer auffordert, sich mit der Web-Authentifizierung zu verifizieren, fragt der Browser den Authenticator nach einem Passkey, der mit dem Origin der Website übereinstimmt. Wenn er einen findet, generiert der Authenticator ein Token, das der Browser an die Website sendet. Die Website überprüft das Token und meldet den Benutzer an.

Da der Passkey spezifisch für den Origin der Website ist, kann der Benutzer, wenn ein Passkey für sein Konto bei `my-bank.example.com` erstellt wurde, diesen nicht bei `my-bank.examp1e.com` verwenden. Der Browser betrachtet ihn einfach nicht als relevant für die gefälschte Website.

Dies macht Passkeys zu einem effektiven Schutz gegen Phishing. Passkeys sind eine viel neuere Authentifizierungsmethode als Passwörter oder OTP, und die zugehörige Tooling ist weniger ausgereift. Dies ändert sich jedoch, und Passkeys könnten schließlich Passwörter als die häufigste Authentifizierungsmethode im Web ablösen.

### Personalisierter Sicherheitsindikator

Eine weitere, mittlerweile selten genutzte Phishing-Abwehr besteht darin, dass die Website eine geheime Nachricht oder ein Bild auf ihrer Anmeldeseite für den Benutzer anzeigt.

1. Nachdem der Benutzer sich angemeldet hat, wird er aufgefordert, eine geheime Nachricht oder ein Bild auszuwählen, das mit seinem Konto verknüpft wird.
2. Wenn der Benutzer sich anmeldet, gibt er zunächst seinen Benutzernamen ein.
3. Die Anmeldeseite zeigt dann das mit dem Konto verknüpfte Geheimnis an.
4. Wenn das Geheimnis nicht das ist, was der Benutzer erwartet hat, sollte er sein Passwort nicht eingeben.

Die Idee ist, dass der Angreifer das Geheimnis nicht kennt und es daher nicht auf der gefälschten Anmeldeseite anzeigen kann.

In einer Variation dieser Technik verwendet die Website ein persistentes Cookie, um zu entscheiden, welches Geheimnis sie anzeigt, anstelle des Benutzernamens.

In der Praxis gibt es einige Schwierigkeiten mit dieser Technik:

- Sie hängt davon ab, dass der Benutzer auf den Sicherheitsindikator achtet: das heißt, sie verlässt sich auf Benutzerbildung. Erfahrungen haben gezeigt, dass Benutzerbildung als allgemeines Prinzip (außerhalb eines kontrollierten Kontextes wie einem sicher gemanagten Unternehmen) nicht sehr effektiv darin ist, Phishing-Angriffe zu verhindern.
- Je nach verwendetem Mechanismus zur Entscheidung, welches Geheimnis angezeigt wird, kann sie für denselben Vermittler in der Mitte anfällig sein wie MFA.
- Der Mechanismus, den der Server verwendet, um zu entscheiden, welches Geheimnis angezeigt werden soll, kann anfällig sein: Beispielsweise könnte es für einen Angreifer einfacher sein, einen Benutzernamen zu entdecken als ein Passwort. Mit einem Benutzernamen könnte ein Angreifer das Geheimnis herausfinden und eine überzeugende gefälschte Website erstellen.

Aufgrund dieser Schwächen wird diese Verteidigungsstrategie selten verwendet: Sowohl MFA als auch Passkeys gelten als stärkere Abwehrmaßnahmen.

### Zusammenfassung der Abwehrmaßnahmen

- Legen Sie `SPF`-, `DKIM`- und `DMARC`-DNS-Einträge für Ihre Domains fest.
- Erwägen Sie die Verwendung von Passkeys zur Authentifizierung von Benutzern.
- Falls Sie Passwörter verwenden, ziehen Sie MFA in Betracht und stellen Sie sicher, dass Passwort-Manager mit Ihrer Website arbeiten können.
