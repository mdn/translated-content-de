---
title: Phishing
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

Phishing ist ein {{Glossary("social_engineering", "Social Engineering")}}-Angriff, bei dem ein Benutzer dazu verleitet wird, zu glauben, dass er mit einer Website interagiert, auf der er ein Konto hat, obwohl er tatsächlich mit dem Angreifer interagiert. Der Angreifer überzeugt den Benutzer, seine Anmeldedaten auf der gefälschten Website einzugeben, und stiehlt dadurch die Anmeldedaten des Benutzers.

## Übersicht

Phishing ist ein sehr alter, aber immer noch sehr verbreiteter Angriff, der viele Variationen durchlaufen hat, sowohl um Abwehrmaßnahmen zu umgehen als auch um neue Schwachstellen auszunutzen. In einer grundlegenden Form verläuft er jedoch so:

1. Der Angreifer registriert einen Domainnamen, der der Zielseite ähnelt. Zum Beispiel, wenn die Webseite der Bank des Benutzers `my-bank.example.com` lautet, könnte der Angreifer `my-bank.examp1e.com` registrieren.
2. Der Angreifer erstellt eine Website unter dieser Adresse, die der echten Website ähnelt.
3. Der Angreifer sendet eine E-Mail an den Benutzer, die vorgibt von `my-bank.example.com` zu sein, und gibt einen Grund an, warum der Benutzer die Website besuchen sollte; die E-Mail enthält einen Link zur gefälschten Website `my-bank.examp1e.com`.
4. Der Benutzer klickt auf den Link und wird aufgefordert, sich anzumelden. Er gibt seinen Benutzernamen und sein Passwort ein, und der Angreifer hat nun seine Anmeldedaten.

Phishing-Angriffe nutzen manchmal andere Techniken, um ihre Opfer zu kontaktieren, wie Textnachrichten oder Anrufe, und beinhalten manchmal überhaupt keine Websites, sondern überzeugen Benutzer, Passwörter oder PIN-Codes mündlich preiszugeben.

Einige Phishing-Angriffe sind sehr wahllos und versenden viele Nachrichten an potenzielle Opfer in der Hoffnung, dass einige hereinfallen. Bei _Spear-Phishing_-Angriffen hingegen recherchieren die Angreifer bestimmte Opfer, sammeln persönliche Informationen über sie, um den Köder überzeugender zu machen. Zum Beispiel könnte die Email vorgeben, von jemandem zu stammen, den das Opfer kennt, und sogar private Informationen enthalten.

Phishing-Angriffe sind nicht davon abhängig, dass Benutzer naiv oder unerfahren sind: Jahrzehntelange Erfahrung zeigt, dass auch sehr erfahrene und sachkundige Benutzer anfällig für Phishing-Angriffe sein können, insbesondere wenn sie beschäftigt, müde oder abgelenkt sind.

## Abwehrmaßnahmen

Eine Sache, die es schwierig macht, Phishing für eine Website abzuwehren, ist, dass die Zielseite überhaupt nicht in den Angriff involviert ist. Es hängt ganz davon ab, dass der Benutzer vom Angreifer getäuscht wird. In diesem Abschnitt besprechen wir einige Praktiken, die helfen können, aber die einzige wirklich effektive Methode ist die Verwendung von [Passkeys](#web_authentication_passkeys) anstelle von Passwörtern.

### DNS-Konfiguration

Phishing-E-Mails fälschen oft die Absenderadresse, um das Opfer glauben zu lassen, dass die E-Mail wirklich von der Zielseite stammt. Drei {{Glossary("DNS", "DNS")}}-Einträge helfen E-Mail-Servern, diese Fälschungen zu erkennen, was dazu beiträgt, dass Phishing-E-Mails im E-Mail-Client des Opfers als Spam markiert oder vollständig blockiert werden.

- Der [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/)-Eintrag listet Adressen auf, die berechtigt sind, E-Mails von der Domain zu senden. Ein empfangender E-Mail-Server extrahiert den Domainnamen aus dem `Return-Path`-Header der E-Mail und sucht den mit dieser Domain verbundenen SPF-Eintrag.
- Der [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/)-Eintrag ermöglicht es dem Absender, E-Mails {{Glossary("digital_signature", "digital zu signieren")}}. Der empfangende Server extrahiert den Domainnamen aus der Signatur und verwendet ihn, um den mit dieser Domain verbundenen DKIM-Eintrag nachzuschlagen. Der DKIM-Eintrag enthält den öffentlichen Schlüssel, der zur Überprüfung der Signatur verwendet wird. Der Domainname in der Signatur muss auch mit dem Domainnamen im `From`-Header der E-Mail übereinstimmen (das bedeutet im Wesentlichen, dass die Domainnamen übereinstimmen müssen oder der Wert im `From`-Header ein Subdomain der Domain in der Signatur sein muss).
- Der [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/) legt fest, wie der Empfänger mit SPF- und DKIM-Fehlern umgehen soll: ob er sie als Spam kennzeichnen, ablehnen oder erlauben soll.

Sie sollten diese DNS-Einträge für Ihre Domains setzen, um E-Mail-Servern zu helfen, gefälschte Nachrichten zu erkennen.

### Passwort-Manager

Passwort-Manager können einen gewissen Schutz vor Phishing-Angriffen bieten. Sie erfüllen drei Hauptfunktionen:

- **Passwortgenerierung**: Starke Passwörter erstellen, wenn Benutzer sich anmelden.
- **Passwortspeicherung**: Die Passwörter eines Benutzers sicher speichern, damit der Benutzer sie sich nicht merken muss (und daher stärkere Passwörter verwenden kann).
- **Passworteingabe**: Das Passwort des Benutzers automatisch auf einer Website eingeben, wenn der Benutzer die Anmeldeseite der Website besucht.

Es ist der letzte dieser Punkte, der gegen Phishing helfen kann. Der Benutzer könnte den Unterschied zwischen der gefälschten Domain `my-bank.examp1e.com` und der echten Domain `my-bank.example.com` nicht sehen, aber der Passwort-Manager wird es tun, und als Ergebnis wird er das echte Passwort nicht automatisch auf der gefälschten Website eingeben. Mit etwas Glück wird dies eine ausreichende Warnung für den Benutzer sein, dass die Anmeldeaufforderung nicht legitim ist.

Als Webentwickler können Sie Ihre Benutzer nicht zwingen, einen Passwort-Manager zu verwenden. Aber Sie können es unmöglich machen, dass Passwort-Manager sich in Ihre Website integrieren, wenn Sie nicht vorsichtig sind. Der Artikel [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) ist eine ausgezeichnete Zusammenfassung von Praktiken, die man folgen, und Praktiken, die man vermeiden sollte, wenn man will, dass Benutzer Passwort-Manager auf Ihrer Website verwenden können. Es ist auch wichtig, Ihre Website mit Passwort-Managern zu testen, sowohl mit denen, die in Browser integriert sind, als auch mit beliebten eigenständigen Anwendungen.

Leider sind Benutzer darauf trainiert, zu erwarten, dass Werkzeuge manchmal versagen und ihre Fehler zu umgehen. Auch wenn ein Benutzer einen Passwort-Manager hat und dieser mit Ihrer Website funktioniert und bei einem Phishing-Angriff das Passwort nicht automatisch ausgefüllt wird, haben Sie immer noch keine Garantie, dass der Benutzer das Passwort nicht einfach manuell einfügt.

### Multi-Faktor-Authentifizierung

Die Verwendung von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}} zur Authentifizierung von Benutzern macht Phishing schwieriger, verhindert es jedoch abhängig von der spezifischen Methode nicht.

Insbesondere bei den häufigsten MFA-Implementierungen muss der Benutzer sein Passwort und einen weiteren Code, einen _Einmalpasswort_ (OTP), eingeben, der für diesen Anmeldeversuch einzigartig ist. Zwei häufige Varianten sind:

- SMS-basiertes OTP:
  - Der Benutzer gibt beim Registrieren seine Handynummer an.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, sendet die Website eine SMS an den Benutzer, die ein OTP enthält.
  - Der Benutzer gibt das OTP ein.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

- Zeitbasiertes OTP (TOTP):
  - Der Benutzer hat eine Authenticator-App installiert.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, berechnet die Website ein OTP unter Verwendung der aktuellen Zeit als Eingabe.
  - Der Authenticator des Benutzers führt dieselbe Berechnung durch und der Benutzer gibt das OTP ein, das die App generiert hat.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

TOTP wird als sicherer als SMS-basiertes OTP betrachtet, da es für Angreifer möglich ist, SMS-Nachrichten abzufangen. Aus der Sicht des Phishings sind jedoch beide Methoden anfällig.

Um einen Benutzer zu phishen, der OTP als zweiten Faktor verwendet, ist die gefälschte Website des Angreifers ein aktiver Vermittler in der Mitte zwischen dem Benutzer und der echten Website:

1. Der Angreifer sendet dem Benutzer die E-Mail, die den Link zur gefälschten Website enthält.
2. Der Benutzer klickt auf den Link in der E-Mail und gibt seinen Benutzernamen und sein Passwort auf der gefälschten Website ein.
3. Die gefälschte Website gibt den Benutzernamen und das Passwort an die echte Website weiter.
4. Die echte Website generiert ein TOTP.
5. Die gefälschte Website fordert den Benutzer auf, sein TOTP einzugeben.
6. Die Authenticator-App des Benutzers generiert dasselbe TOTP und der Benutzer gibt es auf der gefälschten Website ein.
7. Die gefälschte Website übermittelt das TOTP an die echte Website und der Angreifer erhält Zugriff.

![Diagramm zeigt, wie ein Phishing-Angriff gegen eine 2-Faktor-TOTP-Authentifizierung funktionieren kann](totp-phish.svg)

Dies ist viel schwieriger als nur ein Passwort zu phishen, da der Angreifer in Echtzeit operieren muss. Dennoch reduzieren Phishing-Toolkits die Komplexität dabei erheblich.

### Web-Authentifizierung (Passkeys)

Der stärkste technische Schutz gegen Phishing ist die Authentifizierung von Benutzern mit _Passkeys_, die auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basieren.

Ein Passkey wird erstellt, wenn der Benutzer sich auf der Website registriert, und ist spezifisch für den {{Glossary("origin", "Ursprung")}}, für den er ursprünglich erstellt wurde. Der Passkey wird von einem Modul namens _Authenticator_ generiert und gespeichert, das in oder an das Gerät des Benutzers angeschlossen ist.

Im Gegensatz zu Passwörtern oder OTP-Codes gibt ein Benutzer niemals manuell einen Passkey auf einer Website ein: Tatsächlich wird der Passkey überhaupt nicht an die Website übertragen. Wenn eine Website den Benutzer auffordert, sich mit Web Authentication zu authentifizieren, fragt der Browser den Authenticator nach einem Passkey, der zum Ursprung der Website passt. Wenn er einen findet, generiert der Authenticator ein Token, das der Browser an die Website sendet. Die Website überprüft das Token und meldet den Benutzer an.

Da der Passkey spezifisch für den Ursprung der Website ist, kann er, wenn er für das Konto des Benutzers auf `my-bank.example.com` erstellt wurde, nicht auf `my-bank.examp1e.com` verwendet werden. Der Browser wird ihn einfach nicht als anwendbar auf die gefälschte Website ansehen.

Dies macht Passkeys zu einem effektiven Schutz gegen Phishing. Passkeys sind eine viel neuere Authentifizierungsmethode als Passwörter oder OTP und die Werkzeuge um sie herum sind weniger ausgereift. Dies ändert sich jedoch und Passkeys könnten Passwörter als häufigste Authentifizierungsmethode im Web bald verdrängen.

### Personalisierter Sicherheitsindikator

Ein weiterer Phishing-Schutz, der heute nicht mehr häufig verwendet wird, besteht darin, dass die Website dem Benutzer eine geheime Nachricht oder ein Bild auf ihrer Anmeldeseite anzeigt.

1. Nachdem sich der Benutzer registriert hat, wird er gebeten, eine geheime Nachricht oder ein Bild auszuwählen, das mit seinem Konto verknüpft werden soll.
2. Wenn sich der Benutzer anmeldet, gibt er zuerst seinen Benutzernamen ein.
3. Die Anmeldeseite zeigt dann das mit dem Konto verknüpfte Geheimnis an.
4. Wenn das Geheimnis nicht das ist, was der Benutzer erwartet hat, sollte er sein Passwort nicht eingeben.

Die Idee ist, dass der Angreifer das Geheimnis nicht kennt und es daher nicht auf der gefälschten Anmeldeseite anzeigen kann.

In einer Variante dieser Technik verwendet die Website ein dauerhaftes Cookie, um zu bestimmen, welches Geheimnis angezeigt werden soll, anstatt den Benutzernamen.

In der Praxis ergeben sich dabei jedoch einige Schwierigkeiten:

- Es erfordert, dass der Benutzer auf den Sicherheitsindikator achtet: Das heißt, es hängt von der Benutzerschulung ab. Erfahrungen haben gezeigt, dass als allgemeines Prinzip (das heißt außerhalb eines kontrollierten Kontexts wie einem sicher verwalteten Unternehmen) die Schulung von Benutzern nicht sehr effektiv ist, um Phishing-Angriffe zu verhindern.
- Abhängig vom Mechanismus, der verwendet wird, um zu bestimmen, welches Geheimnis angezeigt werden soll, könnte es anfällig für denselben Vermittlungsangriff wie MFA sein.
- Der Mechanismus, den der Server verwendet, um zu bestimmen, welches Geheimnis angezeigt werden soll, könnte anfällig sein: Zum Beispiel könnte es für einen Angreifer einfacher sein, einen Benutzernamen herauszufinden als ein Passwort. Mit einem Benutzernamen könnte ein Angreifer das Geheimnis bestimmen und eine überzeugende gefälschte Website aufbauen.

Als Ergebnis dieser Schwächen wird diese Verteidigung selten verwendet: Sowohl MFA als auch Passkeys werden als stärkere Abwehrmaßnahmen angesehen.

### Zusammenfassende Checkliste zur Abwehr

- Setzen Sie `SPF`-, `DKIM`- und `DMARC`-DNS-Einträge für Ihre Domains.
- Erwägen Sie die Verwendung von Passkeys zur Authentifizierung von Benutzern.
- Wenn Sie Passwörter verwenden, ziehen Sie die Nutzung von MFA in Betracht, und stellen Sie sicher, dass Passwort-Manager mit Ihrer Website funktionieren können.
