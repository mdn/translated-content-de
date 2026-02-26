---
title: Phishing
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: 849ca26a53af83dbb6b576b6f05ea618f9291d1f
---

Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem ein Benutzer dazu gebracht wird zu glauben, dass er mit einer Seite interagiert, bei der er ein Konto hat, obwohl er in Wirklichkeit mit dem Angreifer interagiert. Der Angreifer überzeugt den Benutzer, seine Anmeldedaten auf der gefälschten Seite einzugeben und stiehlt so die Daten des Benutzers.

## Übersicht

Phishing ist ein sehr alter, aber immer noch sehr verbreiteter Angriff, der viele Variationen durchlaufen hat, sowohl um Abwehrmaßnahmen zu umgehen als auch um neue Schwachstellen auszunutzen. In seiner einfachsten Form sieht er so aus:

1. Der Angreifer registriert einen Domainnamen, der der Zielseite ähnelt. Beispielsweise könnte der Angreifer, wenn die Website der Bank des Benutzers `my-bank.example.com` ist, die Domain `my-bank.examp1e.com` registrieren.
2. Der Angreifer erstellt an dieser Adresse eine Seite, die der echten Seite ähnelt.
3. Der Angreifer sendet dem Benutzer eine E-Mail, die vorgibt, von `my-bank.example.com` zu stammen, und gibt einen Grund an, warum der Benutzer die Seite besuchen sollte, und enthält einen Link zur gefälschten Seite `my-bank.examp1e.com`.
4. Der Benutzer klickt auf den Link und wird aufgefordert, sich anzumelden. Er gibt seinen Benutzernamen und sein Passwort ein, und der Angreifer hat nun seine Anmeldedaten.

Phishing-Angriffe verwenden manchmal andere Techniken, um ihre Opfer zu kontaktieren, wie zum Beispiel Textnachrichten oder Telefonanrufe, und manchmal beinhalten sie überhaupt keine Websites, sondern überzeugen Benutzer, ihnen Passwörter oder PIN-Codes mündlich mitzuteilen.

Einige Phishing-Angriffe sind äußerst willkürlich und senden viele Nachrichten an potenzielle Opfer in der Hoffnung, dass einige hereingelegt werden. Bei _Spear-Phishing_-Angriffen hingegen recherchieren Angreifer gezielt nach bestimmten Opfern, indem sie persönliche Informationen über sie sammeln, um den Köder überzeugender zu machen. Beispielsweise könnte die E-Mail vorgeben, von jemandem zu stammen, den das Opfer kennt, und sogar private Informationen enthalten.

Phishing-Angriffe sind nicht von naiven oder unerfahrenen Benutzern abhängig: Jahrzehntelange Erfahrung zeigt, dass selbst sehr erfahrene und kenntnisreiche Benutzer anfällig für Phishing-Angriffe sein können, insbesondere wenn sie beschäftigt, müde oder abgelenkt sind.

## Abwehrmaßnahmen

Eine Sache, die Phishing für eine Website schwierig zu verteidigen macht, ist, dass die Zielsite überhaupt nicht in den Angriff einbezogen ist. Es hängt ganz davon ab, dass der Benutzer durch den Angreifer getäuscht wird. In diesem Abschnitt besprechen wir einige Praktiken, die helfen können, aber die einzige, die wirklich effektiv ist, ist die Verwendung von [Passkeys](#passkeys) anstelle von Passwörtern.

### DNS-Konfiguration

Phishing-E-Mails fälschen oft die Absenderadresse, um das Opfer glauben zu lassen, dass die E-Mail wirklich von der Ziel-Website stammt. Drei {{Glossary("DNS", "DNS")}}-Einträge helfen E-Mail-Servern, diese Fälschungen zu erkennen, was dazu beiträgt, sicherzustellen, dass Phishing-E-Mails im E-Mail-Client des Opfers als Spam markiert oder vollständig blockiert werden.

- Der [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/)-Eintrag listet Adressen auf, die von der Domain E-Mails senden dürfen. Ein empfangender E-Mail-Server extrahiert den Domainnamen aus dem `Return-Path`-Header der E-Mail und sucht den zugehörigen SPF-Eintrag dieser Domain.
- Der [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/)-Eintrag ermöglicht es dem Absender, E-Mails {{Glossary("digital_signature", "digital zu signieren")}}. Der empfangende Server extrahiert den Domainnamen aus der Signatur und verwendet ihn, um den zugehörigen DKIM-Eintrag dieser Domain aufzusuchen. Der DKIM-Eintrag enthält den öffentlichen Schlüssel zur Überprüfung der Signatur. Der Domainname in der Signatur muss auch mit dem Domainnamen im `From`-Header der E-Mail abgeglichen werden (das bedeutet im Wesentlichen, dass die Domainnamen übereinstimmen müssen oder der Wert im `From`-Header eine Subdomain der Domain in der Signatur sein muss).
- Der [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/)-Eintrag sagt dem Empfänger, wie mit SPF- und DKIM-Fehlern umzugehen ist: ob sie als Spam in Quarantäne gestellt, abgelehnt oder erlaubt werden sollen.

Sie sollten diese DNS-Einträge für Ihre Domains setzen, um E-Mail-Servern zu helfen, gefälschte Nachrichten zu erkennen.

### Passwort-Manager

Passwort-Manager können einen gewissen Schutz gegen Phishing-Angriffe bieten. Sie erfüllen drei Hauptfunktionen:

- **Passwortgenerierung**: Erstellen starker Passwörter, wenn Benutzer sich anmelden.
- **Passwortspeicherung**: Sicheres Speichern der Passwörter eines Benutzers, sodass der Benutzer sie sich nicht merken muss (und daher stärkere Passwörter verwenden kann).
- **Passworteingabe**: Automatische Eingabe des Benutzerpassworts für eine Seite, wenn der Benutzer die Anmeldeseite der Seite besucht.

Der letzte Punkt kann gegen Phishing helfen. Der Benutzer sieht möglicherweise nicht den Unterschied zwischen der gefälschten Domain `my-bank.examp1e.com` und der echten Domain `my-bank.example.com`, aber der Passwort-Manager wird dies tun und daher das echte Passwort nicht automatisch auf der gefälschten Seite eingeben. Mit etwas Glück ist dies für den Benutzer genug Warnung, dass die Anmeldeanforderung nicht legitim ist.

Als Webentwickler können Sie Ihre Benutzer nicht dazu bringen, einen Passwort-Manager zu verwenden. Sie können jedoch, wenn Sie nicht vorsichtig sind, es unmöglich machen, dass Passwort-Manager sich in Ihre Website integrieren lassen. Der Artikel [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) ist eine ausgezeichnete Zusammenfassung von Praktiken, die zu beachten sind, und Praktiken, die vermieden werden sollten, wenn Sie möchten, dass Benutzer Passwort-Manager auf Ihrer Seite verwenden können. Es ist auch wichtig, Ihre Website mit Passwort-Managern zu testen, sowohl mit denen, die in Browser integriert sind, als auch mit beliebten eigenständigen Anwendungen.

Leider sind Benutzer dazu erzogen worden zu erwarten, dass Werkzeuge manchmal fehlschlagen, und sich mit ihren Ausfällen zu arrangieren. Selbst wenn ein Benutzer also einen Passwort-Manager hat, er mit Ihrer Website funktioniert und das Passwort bei einem Phishing-Versuch nicht automatisch ausfüllt, haben Sie immer noch keine Garantie, dass der Benutzer das Passwort nicht einfach manuell einfügt.

### Mehrfaktor-Authentifizierung

Die Verwendung von {{Glossary("multi-factor_authentication", "Mehrfaktor-Authentifizierung (MFA)")}}, um Benutzer zu authentifizieren, macht Phishing schwieriger, aber je nach spezifischer Methode verhindert sie es nicht.

Insbesondere in den häufigsten Umsetzungen von MFA muss der Benutzer sein Passwort und einen weiteren Code eingeben, der als [Einmalkennwort (OTP)](/de/docs/Web/Security/Authentication/OTP) bezeichnet wird und nur für diesen Anmeldeversuch gilt. Zwei gängige Varianten sind:

- SMS-basierte OTP:
  - Der Benutzer gibt beim Registrieren seine Handynummer an.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, sendet die Website eine SMS an den Benutzer, die ein OTP enthält.
  - Der Benutzer gibt das OTP ein.
  - Stimmen die OTP-Werte überein, wird der Benutzer angemeldet.

- Zeitbasiertes OTP (TOTP):
  - Der Benutzer hat eine Authentifizierungs-App installiert.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, berechnet die Website ein OTP unter Verwendung der aktuellen Zeit als Eingabe.
  - Der Authentifikator des Benutzers führt dieselbe Berechnung durch, und der Benutzer gibt das von der App generierte OTP ein.
  - Stimmen die OTP-Werte überein, wird der Benutzer angemeldet.

TOTP wird als sicherer als SMS-basierte OTP angesehen, weil es möglich ist, dass Angreifer SMS-Nachrichten abfangen. Aus der Perspektive des Phishings sind jedoch beide Methoden anfällig.

Um einen Benutzer zu phishen, der OTP als zweiten Faktor verwendet, fungiert die gefälschte Seite des Angreifers als aktiver Vermittler zwischen dem Benutzer und der echten Seite:

1. Der Angreifer sendet dem Benutzer die E-Mail mit dem Link zur gefälschten Seite.
2. Der Benutzer klickt auf den Link in der E-Mail und gibt seinen Benutzernamen und sein Passwort auf der gefälschten Seite ein.
3. Die gefälschte Seite leitet den Benutzernamen und das Passwort an die echte Seite weiter.
4. Die echte Seite generiert ein TOTP.
5. Die gefälschte Seite fordert den Benutzer auf, sein TOTP einzugeben.
6. Die Authentifizierungs-App des Benutzers generiert dasselbe TOTP, und der Benutzer gibt es auf der gefälschten Seite ein.
7. Die gefälschte Seite leitet das TOTP an die echte Seite weiter, und der Angreifer erhält Zugang.

![Diagramm, das zeigt, wie ein Phishing-Angriff gegen 2-Faktor-TOTP-Authentifizierung funktionieren kann](totp-phish.svg)

Dies ist weitaus schwieriger als nur ein Passwort zu phishen, da der Angreifer in Echtzeit operieren muss. Phishing-Toolkits verringern jedoch die Komplexität der Durchführung erheblich.

### Passkeys

Die stärkste technische Verteidigung gegen Phishing ist die Authentifizierung von Benutzern mit [Passkeys](/de/docs/Web/Security/Authentication/Passkeys).

Ein Passkey wird erstellt, wenn der Benutzer sich auf der Seite registriert, und ist spezifisch für den {{Glossary("origin", "Ursprung")}}, für den er ursprünglich erstellt wurde. Der Passkey wird von einem Modul namens _Authenticator_ generiert und gespeichert, welches im oder am Gerät des Benutzers eingebaut ist.

Im Gegensatz zu Passwörtern oder OTP-Codes gibt ein Benutzer niemals manuell einen Passkey auf einer Seite ein: Tatsächlich wird der Passkey nie an die Seite übertragen. Wenn eine Website den Benutzer auffordert, sich mit Web Authentication zu authentifizieren, bittet der Browser den Authenticator um einen Passkey, der zum Ursprung der Seite passt. Wenn er einen findet, generiert der Authenticator ein Token, das der Browser an die Website sendet. Die Website überprüft das Token und meldet den Benutzer an.

Da der Passkey spezifisch für den Ursprung der Seite ist, kann der Benutzer einen für sein Konto bei `my-bank.example.com` erstellten Passkey nicht bei `my-bank.examp1e.com` verwenden. Der Browser wird es einfach nicht als relevant für die gefälschte Seite betrachten.

Dies macht Passkeys zu einer effektiven Verteidigung gegen Phishing. Passkeys sind eine viel neuere Authentifizierungsmethode als Passwörter oder OTP, und die Tools, die sie umgeben, sind weniger ausgereift. Dies ändert sich jedoch, und Passkeys könnten schließlich Passwörter als die häufigste Authentifizierungsmethode im Web verdrängen.

### Personalisierter Sicherheitsindikator

Eine weitere Phishing-Verteidigung, die heutzutage nicht mehr oft verwendet wird, besteht darin, dass die Website auf ihrer Anmeldeseite eine geheime Nachricht oder ein Bild anzeigt.

1. Nachdem sich der Benutzer angemeldet hat, wird er aufgefordert, eine geheime Nachricht oder ein Bild zu wählen, das mit seinem Konto verknüpft werden soll.
2. Wenn der Benutzer sich anmeldet, gibt er zuerst seinen Benutzernamen ein.
3. Die Anmeldeseite zeigt dann das mit dem Konto verknüpfte Geheimnis an.
4. Wenn das Geheimnis nicht das ist, was der Benutzer erwartet hat, sollte er sein Passwort nicht eingeben.

Die Idee ist, dass der Angreifer nicht weiß, was das Geheimnis ist, und es daher nicht auf der gefälschten Anmeldeseite anzeigen kann.

Bei einer Variation dieser Technik verwendet die Website ein persistentes Cookie, um zu entscheiden, welches Geheimnis angezeigt werden soll, anstelle des Benutzernamens.

In der Praxis gibt es einige Schwierigkeiten mit dieser Technik:

- Es erfordert, dass der Benutzer auf den Sicherheitsindikator achtet: Das heißt, es erfordert Benutzerschulung. Erfahrungsgemäß hat sich gezeigt, dass Benutzerschulung als allgemeines Prinzip (das heißt außerhalb eines kontrollierten Kontexts wie eines sicher verwalteten Unternehmens) nicht sehr effektiv ist, um Phishing-Angriffe zu verhindern.
- Abhängig vom Mechanismus, der verwendet wird, um zu entscheiden, welches Geheimnis angezeigt wird, kann es anfällig für denselben Manipulator-in-der-Mitte-Angriff wie MFA sein.
- Der Mechanismus, den der Server verwendet, um zu entscheiden, welches Geheimnis angezeigt werden soll, kann anfällig sein: Beispielsweise kann es einfacher für einen Angreifer sein, einen Benutzernamen zu entdecken als ein Passwort. Mit einem Benutzernamen könnte ein Angreifer das Geheimnis herausfinden und eine überzeugende gefälschte Seite aufbauen.

Aufgrund dieser Schwächen wird diese Verteidigung selten verwendet: Sowohl MFA als auch Passkeys werden als stärkerer Schutz angesehen.

## Zusammenfassung der Verteidigungsliste

- Setzen Sie `SPF`-, `DKIM`- und `DMARC`-DNS-Einträge für Ihre Domains.
- Erwägen Sie die Verwendung von Passkeys zur Authentifizierung von Benutzern.
- Wenn Sie Passwörter verwenden, überlegen Sie, MFA zu nutzen, und stellen Sie sicher, dass Passwort-Manager mit Ihrer Seite funktionieren können.
