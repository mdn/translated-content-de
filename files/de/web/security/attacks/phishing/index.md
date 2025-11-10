---
title: Phishing
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: b07e3b87504a8984cf31d7a735ec373d33a11cd5
---

Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem ein Benutzer dazu gebracht wird zu glauben, dass er mit einer Website interagiert, bei der er ein Konto hat, während er tatsächlich mit dem Angreifer interagiert. Der Angreifer überzeugt den Benutzer, seine Anmeldedaten auf der gefälschten Website einzugeben, und stiehlt so die Anmeldedaten des Benutzers.

## Übersicht

Phishing ist ein sehr alter, aber immer noch sehr häufiger Angriff, der viele Variationen durchlaufen hat, sowohl um Abwehrmaßnahmen zu umgehen als auch um neue Schwachstellen auszunutzen. In einer einfachen Form, jedoch:

1. Registriert der Angreifer einen Domainnamen, der der Zielseite ähnelt. Wenn beispielsweise die Webseite des Benutzers `my-bank.example.com` ist, könnte der Angreifer `my-bank.examp1e.com` registrieren.
2. Der Angreifer erstellt eine Website unter dieser Adresse, die der echten Seite ähnelt.
3. Der Angreifer sendet dem Benutzer eine E-Mail, die von `my-bank.example.com` zu stammen scheint, mit einem Grund, den Benutzer zu bitten, die Seite zu besuchen, und einen Link zur gefälschten Seite `my-bank.examp1e.com` enthält.
4. Der Benutzer klickt auf den Link und wird aufgefordert, sich anzumelden. Er gibt seinen Benutzernamen und Passwort ein, und der Angreifer hat nun seine Anmeldedaten.

Phishing-Angriffe verwenden manchmal verschiedene Techniken, um ihre Opfer zu kontaktieren, wie z.B. Textnachrichten oder Anrufe, und manchmal sind keine Websites beteiligt, indem Benutzer dazu gebracht werden, ihre Passwörter oder PIN-Codes mündlich mitzuteilen.

Einige Phishing-Angriffe sind sehr wahllos und senden viele Nachrichten an potenzielle Opfer in der Hoffnung, dass einige getäuscht werden. Bei _Spear-Phishing_-Angriffen hingegen recherchieren Angreifer spezielle Opfer, sammeln persönliche Informationen über sie, um den Köder überzeugender zu machen. Beispielsweise kann die E-Mail vorgeben, von jemandem zu stammen, den das Opfer kennt, und sogar private Informationen enthalten.

Phishing-Angriffe sind nicht von naiven oder unerfahrenen Benutzern abhängig: Jahrzehntelange Erfahrung hat gezeigt, dass selbst sehr erfahrene und sachkundige Benutzer anfällig für Phishing-Angriffe sein können, insbesondere wenn sie beschäftigt, müde oder abgelenkt sind.

## Abwehrmaßnahmen

Eine Sache, die es schwierig macht, sich gegen Phishing zu verteidigen, ist, dass die Zielseite überhaupt nicht an dem Angriff beteiligt ist. Es ist vollständig davon abhängig, dass der Benutzer vom Angreifer getäuscht wird. In diesem Abschnitt werden wir einige Praktiken besprechen, die helfen können, aber die einzige wirklich effektive ist die Verwendung von [Passkeys](#web_authentication_passkeys) anstelle von Passwörtern.

### DNS-Konfiguration

Phishing-E-Mails fälschen häufig die Absenderadresse, um das Opfer zu glauben zu machen, dass die E-Mail wirklich von der Zielwebsite stammt. Drei {{Glossary("DNS", "DNS")}}-Einträge helfen E-Mail-Servern, diese Fälschungen zu erkennen, was dazu beiträgt, dass Phishing-E-Mails im E-Mail-Client des Opfers als Spam markiert oder vollständig blockiert werden.

- Der [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/)-Eintrag listet Adressen auf, die berechtigt sind, eine E-Mail von der Domain zu senden. Ein empfangender E-Mail-Server extrahiert den Domainnamen aus dem `Return-Path`-Header der E-Mail und schaut den mit dieser Domain verbundenen SPF-Eintrag nach.
- Der [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/)-Eintrag ermöglicht es dem Absender, E-Mails {{Glossary("digital_signature", "digital zu signieren")}}. Der empfangende Server extrahiert den Domainnamen aus der Signatur und verwendet ihn, um den mit dieser Domain verbundenen DKIM-Eintrag nachzuschlagen. Der DKIM-Eintrag enthält den öffentlichen Schlüssel, der zur Überprüfung der Signatur verwendet wird. Der Domainname in der Signatur muss auch mit dem Domainnamen im `From`-Header der E-Mail übereinstimmen (das bedeutet im Wesentlichen, dass die Domainnamen übereinstimmen müssen oder der Wert im `From`-Header eine Subdomain der Domain in der Signatur sein muss).
- Der [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/) gibt dem Empfänger Anweisungen, wie er mit SPF- und DKIM-Fehlern umgehen soll: ob sie als Spam in Quarantäne gestellt, abgelehnt oder erlaubt werden sollen.

Sie sollten diese DNS-Einträge für Ihre Domains festlegen, um E-Mail-Servern zu helfen, gefälschte Nachrichten zu erkennen.

### Passwort-Manager

Passwort-Manager können einen gewissen Schutz gegen Phishing-Angriffe bieten. Sie erfüllen drei Hauptfunktionen:

- **Passwortgenerierung**: Starke Passwörter erstellen, wenn Benutzer sich anmelden.
- **Passwortspeicherung**: Die Passwörter eines Benutzers sicher speichern, damit der Benutzer sie nicht auswendig lernen muss (und folglich stärkere Passwörter verwenden kann).
- **Passwort-Eintrag**: Das Passwort des Benutzers automatisch für eine Seite eingeben, wenn der Benutzer die Anmeldeseite der Website besucht.

Die letzte dieser Funktionen kann gegen Phishing helfen. Der Benutzer sieht möglicherweise nicht den Unterschied zwischen der gefälschten Domain `my-bank.examp1e.com` und der echten Domain `my-bank.example.com`, aber der Passwort-Manager wird dies tun und folglich das echte Passwort nicht automatisch auf der gefälschten Seite eingeben. Mit Glück wird dies eine ausreichende Warnung für den Benutzer sein, dass die Anforderunge zur Anmeldung nicht legitim ist.

Als Webentwickler können Sie Ihre Benutzer nicht zwingen, einen Passwort-Manager zu verwenden. Aber Sie können es, wenn Sie nicht vorsichtig sind, unmöglich machen, dass Passwort-Manager sich mit Ihrer Website integrieren. Der Artikel [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) ist eine ausgezeichnete Zusammenfassung der zu befolgenden Praktiken und der Praktiken, die zu vermeiden sind, wenn Sie möchten, dass Benutzer Passwort-Manager auf Ihrer Website verwenden können. Es ist auch wichtig, Ihre Website mit Passwort-Managern zu testen, sowohl mit den in Browsern integrierten als auch mit beliebten eigenständigen Anwendungen.

Leider sind Benutzer daran gewöhnt, dass Werkzeuge manchmal ausfallen, und daran, ihre Ausfälle zu umgehen. Selbst wenn also ein Benutzer einen Passwort-Manager hat, und dieser mit Ihrer Website funktioniert, und das Passwort während eines Phishing-Versuchs nicht automatisch eingibt, haben Sie immer noch keine Garantie, dass der Benutzer das Passwort nicht einfach manuell einfügt.

### Multi-Faktor-Authentifizierung

Die Verwendung der {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}} zur Authentifizierung von Benutzern erschwert das Phishing, verhindert es jedoch nicht unbedingt, abhängig von der verwendeten Methode.

Insbesondere bei den häufigsten MFA-Implementierungen muss der Benutzer sowohl sein Passwort als auch einen anderen Code eingeben, der als _One-Time Password_ (OTP) bezeichnet wird und für diesen Anmeldeversuch einzigartig ist. Zwei gängige Varianten sind:

- SMS-basiertes OTP:
  - Der Benutzer gibt bei der Registrierung seine Handynummer an.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, sendet die Website dem Benutzer eine SMS mit einem OTP.
  - Der Benutzer gibt das OTP ein.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

- Zeitbasiertes OTP (TOTP):
  - Der Benutzer hat eine Authentifizierungs-App installiert.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, berechnet die Website ein OTP, wobei die aktuelle Zeit als Eingabe genutzt wird.
  - Der Authenticator des Benutzers führt dieselbe Berechnung durch, und der Benutzer gibt das OTP ein, das die App generiert hat.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

TOTP gilt als sicherer als SMS-basiertes OTP, da es möglich ist, dass Angreifer SMS-Nachrichten abfangen. Aus Phishing-Sicht sind jedoch beide Methoden anfällig.

Um einen Benutzer zu phishen, der OTP als zweiten Faktor verwendet, handelt die gefälschte Website des Angreifers aktiv als Vermittler zwischen dem Benutzer und der echten Website:

1. Der Angreifer sendet dem Benutzer die E-Mail, die den Link zur gefälschten Seite enthält.
2. Der Benutzer klickt auf den Link in der E-Mail und gibt seinen Benutzernamen und sein Passwort auf der gefälschten Seite ein.
3. Die gefälschte Seite übermittelt den Benutzernamen und das Passwort an die echte Seite.
4. Die echte Seite generiert ein TOTP.
5. Die gefälschte Seite fordert den Benutzer auf, sein TOTP einzugeben.
6. Die Authentifizierungs-App des Benutzers generiert dasselbe TOTP, und der Benutzer gibt es auf der gefälschten Seite ein.
7. Die gefälschte Seite übermittelt das TOTP an die echte Seite und der Angreifer erhält Zugang.

![Diagramm, das zeigt, wie ein Phishing-Angriff mit einer Zwei-Faktor-TOTP-Authentifizierung funktionieren kann](totp-phish.svg)

Dies ist viel schwieriger als nur ein Passwort zu phishen, da der Angreifer in Echtzeit operieren muss. Phishing-Toolkits verringern jedoch die Komplexität erheblich.

### Web-Authentifizierung (Passkeys)

Die stärkste technische Verteidigung gegen Phishing ist die Authentifizierung von Benutzern mit _Passkeys_, die auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basieren.

Ein Passkey wird erstellt, wenn sich der Benutzer auf der Seite registriert, und ist spezifisch für den {{Glossary("origin", "Ursprung")}}, für den er ursprünglich erstellt wurde. Der Passkey wird von einem Modul generiert und gespeichert, das als _Authenticator_ bezeichnet wird und in das Gerät des Benutzers integriert oder an das Gerät angeschlossen ist.

Im Gegensatz zu Passwörtern oder OTP-Codes gibt ein Benutzer niemals manuell einen Passkey auf einer Website ein: tatsächlich wird der Passkey niemals an die Website übertragen. Wenn eine Website den Benutzer auffordert, sich mit der Web-Authentifizierung zu authentifizieren, fordert der Browser den Authenticator auf, einen Passkey zu finden, der zum Ursprung der Website passt. Wenn ein passender Passkey gefunden wird, erzeugt der Authenticator ein Token, das der Browser an die Website sendet. Die Website überprüft das Token und meldet den Benutzer an.

Da der Passkey spezifisch für den Ursprung der Seite ist, kann ein Passkey, der für das Konto des Benutzers bei `my-bank.example.com` erstellt wurde, nicht auf `my-bank.examp1e.com` verwendet werden. Der Browser wird dies einfach nicht als anwendbar auf die gefälschte Seite betrachten.

Dies macht Passkeys zu einer effektiven Verteidigung gegen Phishing. Passkeys sind ein viel neuerer Authentifizierungsmethode als Passwörter oder OTP, und die Werkzeuge darum herum sind weniger ausgereift. Dies ändert sich jedoch, und Passkeys könnten Passwörter schließlich als die häufigste Authentifizierungsmethode im Web ablösen.

### Personalisierter Sicherheitsindikator

Eine andere Phishing-Abwehr, die nicht mehr oft verwendet wird, ist, dass die Website eine geheime Nachricht oder ein Bild auf der Anmeldeseite des Benutzers anzeigt.

1. Nachdem sich der Benutzer angemeldet hat, wird er aufgefordert, eine geheime Nachricht oder ein Bild auszuwählen, das mit seinem Konto verknüpft ist.
2. Wenn der Benutzer sich anmeldet, gibt er zuerst seinen Benutzernamen ein.
3. Die Anmeldeseite zeigt dann das mit dem Konto verknüpfte Geheimnis.
4. Wenn das Geheimnis nicht das ist, was der Benutzer erwartet hat, sollte der Benutzer sein Passwort nicht eingeben.

Die Idee ist, dass der Angreifer das Geheimnis nicht kennt und es daher nicht auf der gefälschten Anmeldeseite anzeigen kann.

In einer Variation dieser Technik verwendet die Website ein dauerhaftes Cookie, um zu entscheiden, welches Geheimnis angezeigt werden soll, anstatt des Benutzernamens.

In der Praxis gibt es einige Schwierigkeiten mit dieser Technik:

- Sie beruht darauf, dass der Benutzer auf den Sicherheitsindikator achtet: Das heißt, sie beruht auf Benutzerschulung. Erfahrung hat gezeigt, dass Benutzerschulung als allgemeines Prinzip (das heißt außerhalb eines kontrollierten Kontexts wie eines sicher verwalteten Unternehmens) nicht sehr effektiv ist, um Phishing-Angriffe zu verhindern.
- Abhängig vom Mechanismus, der verwendet wird, um zu entscheiden, welches Geheimnis angezeigt werden soll, kann es anfällig für denselben Vermittler-Angriff sein wie MFA.
- Der Mechanismus, den der Server verwendet, um zu entscheiden, welches Geheimnis angezeigt werden soll, kann anfällig sein: Beispielsweise kann es für einen Angreifer einfacher sein, einen Benutzernamen zu entdecken als ein Passwort. Mit einem Benutzernamen könnte ein Angreifer das Geheimnis bestimmen und eine überzeugende gefälschte Website erstellen.

Aufgrund dieser Schwächen wird diese Verteidigung selten verwendet: sowohl MFA als auch Passkeys werden als stärkere Verteidigungen angesehen.

## Verteidigungs-Checkliste

- Legen Sie `SPF`, `DKIM` und `DMARC` DNS-Einträge für Ihre Domains fest.
- Erwägen Sie die Verwendung von Passkeys zur Authentifizierung von Benutzern.
- Wenn Sie Passwörter verwenden, ziehen Sie MFA in Betracht und stellen Sie sicher, dass Passwort-Manager mit Ihrer Website arbeiten können.
