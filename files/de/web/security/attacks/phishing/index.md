---
title: Phishing
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: d34afbf0ccb9dee3bd2a1ab2175dd7e91a39c178
---

Phishing ist ein {{Glossary("social_engineering", "Social Engineering")}}-Angriff, bei dem ein Benutzer dazu gebracht wird, zu glauben, dass er mit einer Seite interagiert, bei der er ein Konto hat, während er in Wirklichkeit mit dem Angreifer interagiert. Der Angreifer überzeugt den Benutzer, seine Anmeldedaten auf der gefälschten Seite einzugeben, und stiehlt dadurch die Anmeldedaten des Benutzers.

## Überblick

Phishing ist ein sehr alter, aber immer noch sehr verbreiteter Angriff, der viele Variationen durchlaufen hat, sowohl um Verteidigungsmaßnahmen zu umgehen als auch um neue Schwachstellen auszunutzen. In einer Grundform sieht der Angriff folgendermaßen aus:

1. Der Angreifer registriert einen Domainnamen, der der Zielseite ähnelt. Zum Beispiel, wenn die Banking-Website des Benutzers `my-bank.example.com` ist, könnte der Angreifer `my-bank.examp1e.com` registrieren.
2. Der Angreifer erstellt eine Seite unter dieser Adresse, die der echten Seite ähnelt.
3. Der Angreifer sendet dem Benutzer eine E-Mail, die angeblich von `my-bank.example.com` stammt, gibt einen Grund an, den Benutzer zu bitten, die Seite zu besuchen, und enthält einen Link zur gefälschten Seite `my-bank.examp1e.com`.
4. Der Benutzer klickt auf den Link und wird aufgefordert, sich anzumelden. Er gibt seinen Benutzernamen und sein Passwort ein, und der Angreifer hat nun seine Anmeldedaten.

Phishing-Angriffe nutzen manchmal verschiedene Techniken, um mit ihren Opfern in Kontakt zu treten, wie SMS oder Anrufe, und beinhalten manchmal gar keine Websites, sondern überzeugen die Benutzer, Passwörter oder PIN-Codes mündlich preiszugeben.

Einige Phishing-Angriffe sind sehr wahllos und senden viele Nachrichten an potenzielle Opfer, in der Hoffnung, dass einige hereingelegt werden. Bei _Spear-Phishing_-Angriffen hingegen, recherchieren die Angreifer spezifische Opfer und sammeln persönliche Informationen über sie, um den Köder überzeugender zu gestalten. Zum Beispiel könnte die E-Mail angeblich von jemandem stammen, den das Opfer kennt, und sogar private Informationen enthalten.

Phishing-Angriffe sind nicht auf naive oder unerfahrene Benutzer angewiesen: Jahrzehntelange Erfahrung hat gezeigt, dass selbst sehr erfahrene und sachkundige Benutzer anfällig für Phishing-Angriffe sein können, besonders wenn sie beschäftigt, müde oder abgelenkt sind.

## Abwehrmaßnahmen

Eine der Herausforderungen für eine Website beim Schutz gegen Phishing ist, dass die Zielseite überhaupt nicht in den Angriff involviert ist. Es hängt vollständig davon ab, dass der Benutzer vom Angreifer getäuscht wird. In diesem Abschnitt werden wir einige Praktiken besprechen, die helfen können, aber die einzige wirklich effektive Maßnahme ist die Verwendung von [Passkeys](#web_authentication_passkeys) anstelle von Passwörtern.

### DNS-Konfiguration

Phishing-E-Mails fälschen häufig die Absenderadresse, um das Opfer glauben zu lassen, die E-Mail stamme wirklich von der Zielwebsite. Drei {{Glossary("DNS", "DNS")}}-Einträge helfen E-Mail-Servern, diese Fälschungen zu erkennen, was dazu beiträgt, dass Phishing-E-Mails im E-Mail-Client des Opfers als Spam markiert oder ganz blockiert werden.

- Der [Security Policy Framework (SPF)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/)-Eintrag listet Adressen auf, die berechtigt sind, E-Mails von der Domain zu senden. Ein empfangender E-Mail-Server extrahiert den Domainnamen aus dem `Return-Path`-Header der E-Mail und sucht den damit verbundenen SPF-Eintrag.
- Der [DomainKeys Identified Mail (DKIM)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/)-Eintrag ermöglicht es dem Absender, E-Mails {{Glossary("digital_signature", "digital zu signieren")}}. Der empfangende Server extrahiert den Domainnamen aus der Signatur und verwendet ihn, um den damit verbundenen DKIM-Eintrag nachzuschlagen. Der DKIM-Eintrag enthält den öffentlichen Schlüssel zur Überprüfung der Signatur. Der Domainname in der Signatur muss auch mit dem Domainnamen im `From`-Header der E-Mail übereinstimmen (das bedeutet im Wesentlichen, dass die Domainnamen übereinstimmen müssen oder der Wert im `From`-Header eine Subdomain der Domain in der Signatur sein muss).
- Der [Domain-based Message Authentication Reporting and Conformance (DMARC)](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/)-Eintrag gibt dem Empfänger an, wie er mit SPF- und DKIM-Fehlern umgehen soll: ob er sie als Spam kennzeichnen, ablehnen oder zulassen soll.

Sie sollten diese DNS-Einträge für Ihre Domains festlegen, um E-Mail-Servern bei der Erkennung gefälschter Nachrichten zu helfen.

### Passwort-Manager

Passwort-Manager können einen gewissen Schutz gegen Phishing-Angriffe bieten. Sie erfüllen drei Hauptfunktionen:

- **Passwort-Generierung**: Erstellen starker Passwörter, wenn sich Benutzer registrieren.
- **Passwort-Speicherung**: Sicheres Speichern der Passwörter eines Benutzers, sodass er sich diese nicht merken muss (und daher stärkere Passwörter verwenden kann).
- **Passwort-Eingabe**: Automatisches Eingeben des Benutzerpassworts für eine Seite, wenn der Benutzer die Anmeldeseite der Seite besucht.

Es ist dieser letzte Punkt, der gegen Phishing helfen kann. Der Benutzer sieht möglicherweise nicht den Unterschied zwischen der gefälschten Domain `my-bank.examp1e.com` und der echten Domain `my-bank.example.com`, aber der Passwort-Manager wird es erkennen und das reale Passwort nicht automatisch auf der gefälschten Seite eingeben. Mit etwas Glück wird dies dem Benutzer genug Warnung sein, dass die Login-Anforderung nicht legitim ist.

Als Webentwickler können Sie nicht erzwingen, dass Ihre Benutzer einen Passwort-Manager verwenden. Sie können jedoch, wenn Sie nicht vorsichtig sind, es unmöglich machen, dass Passwort-Manager mit Ihrer Seite interagieren können. Der Artikel [Making password managers play ball with your login form](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) bietet eine hervorragende Zusammenfassung von Praktiken, die befolgt werden sollten, und die es zu vermeiden gilt, wenn Benutzer Passwort-Manager auf Ihrer Seite nutzen können sollen. Es ist auch wichtig, Ihre Seite mit Passwort-Managern zu testen, sowohl mit denen, die in Browsern integriert sind, als auch mit populären eigenständigen Anwendungen.

Leider sind Benutzer daran gewöhnt, dass Werkzeuge manchmal versagen, und neigen dazu, deren Fehler zu umgehen. Selbst wenn ein Benutzer also einen Passwort-Manager hat, und dieser mit Ihrer Seite funktioniert und das Passwort bei einem Phishing-Versuch nicht automatisch ausfüllt, gibt es immer noch keine Garantie, dass der Benutzer das Passwort nicht einfach manuell einfügt.

### Multi-Faktor-Authentifizierung

Die Verwendung von {{Glossary("multi-factor_authentication", "Multi-Faktor-Authentifizierung (MFA)")}} zur Authentifizierung von Benutzern erschwert Phishing, verhindert es jedoch je nach spezifischer Methode nicht.

Insbesondere in den gängigsten MFA-Implementierungen muss der Benutzer sein Passwort und einen weiteren Code eingeben, der als _Einmal-Passwort_ (OTP) bezeichnet wird, der für diesen spezifischen Anmeldeversuch einzigartig ist. Zwei gängige Varianten sind:

- SMS-basiertes OTP:
  - Der Benutzer gibt seine Handynummer bei der Registrierung an.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, sendet die Website eine SMS an den Benutzer, die ein OTP enthält.
  - Der Benutzer gibt das OTP ein.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

- Zeitbasiertes OTP (TOTP):
  - Der Benutzer hat eine Authentifizierungs-App installiert.
  - Nachdem der Benutzer seinen Benutzernamen und sein Passwort eingegeben hat, berechnet die Website ein OTP unter Verwendung der aktuellen Zeit als Eingabe.
  - Der Authenticator des Benutzers führt dieselbe Berechnung durch, und der Benutzer gibt das OTP ein, das die App generiert hat.
  - Wenn die OTP-Werte übereinstimmen, wird der Benutzer angemeldet.

TOTP wird als sicherer als SMS-basiertes OTP angesehen, da es möglich ist, dass Angreifer SMS-Nachrichten abfangen. Aus Sicht von Phishing sind jedoch beide Methoden anfällig.

Um einen Benutzer zu phishen, der OTP als zweiten Faktor verwendet, ist die gefälschte Seite des Angreifers als aktiver Mittelsmann zwischen dem Benutzer und der echten Seite tätig:

1. Der Angreifer sendet dem Benutzer die E-Mail mit dem Link zur gefälschten Seite.
2. Der Benutzer klickt auf den Link in der E-Mail und gibt seinen Benutzernamen und sein Passwort auf der gefälschten Seite ein.
3. Die gefälschte Seite leitet den Benutzernamen und das Passwort an die echte Seite weiter.
4. Die echte Seite generiert eine TOTP.
5. Die gefälschte Seite fordert den Benutzer auf, seine TOTP einzugeben.
6. Die Authentifizierungs-App des Benutzers generiert dieselbe TOTP, und der Benutzer gibt sie auf der gefälschten Seite ein.
7. Die gefälschte Seite leitet die TOTP an die echte Seite weiter, und der Angreifer erhält Zugriff.

![Diagramm, das zeigt, wie ein Phishing-Angriff gegen eine 2-Faktor-TOTP-Authentifizierung funktionieren kann](totp-phish.svg)

Dies ist viel schwieriger als nur ein Passwort zu phishen, da der Angreifer in Echtzeit agieren muss. Phishing-Toolkits reduzieren jedoch die Komplexität der Durchführung erheblich.

### Web-Authentifizierung (Passkeys)

Die stärkste technische Abwehr gegen Phishing besteht darin, Benutzer mit _Passkeys_ zu authentifizieren, die auf der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) basieren.

Ein Passkey wird erstellt, wenn sich der Benutzer auf der Seite registriert, und ist spezifisch für den {{Glossary("origin", "Origin")}}, für den er ursprünglich erstellt wurde. Der Passkey wird von einem Modul namens _Authenticator_ generiert und gespeichert, das in das Gerät des Benutzers eingebaut oder daran angeschlossen ist.

Im Gegensatz zu Passwörtern oder OTP-Codes gibt ein Benutzer niemals manuell einen Passkey auf einer Seite ein: Tatsächlich wird der Passkey überhaupt nicht an die Seite übertragen. Wenn eine Website den Benutzer auffordert, sich mit Web Authentication zu authentifizieren, fragt der Browser den Authenticator nach einem Passkey, der mit dem Origin der Seite übereinstimmt. Wenn er einen findet, generiert der Authenticator ein Token, das der Browser an die Website sendet. Die Website überprüft das Token und meldet den Benutzer an.

Da der Passkey spezifisch für den Origin der Seite ist, kann ein Passkey, der für das Konto des Benutzers bei `my-bank.example.com` erstellt wurde, nicht auf `my-bank.examp1e.com` verwendet werden. Der Browser wird ihn einfach nicht als anwendbar für die gefälschte Seite betrachten.

Dies macht Passkeys zu einer effektiven Abwehr gegen Phishing. Passkeys sind eine viel neuere Authentifizierungsmethode als Passwörter oder OTP, und die Tools dafür sind weniger ausgereift. Dies ändert sich jedoch, und Passkeys könnten letztendlich Passwörter als die am häufigsten verwendete Authentifizierungsmethode im Web ablösen.

### Personalisierter Sicherheitsindikator

Eine weitere Phishing-Abwehr, die heutzutage nicht mehr häufig verwendet wird, ist, dass die Website dem Benutzer eine geheime Nachricht oder ein Bild auf ihrer Anmeldeseite anzeigt.

1. Nachdem sich der Benutzer angemeldet hat, wird er gebeten, eine geheime Nachricht oder ein Bild auszuwählen, das mit seinem Konto verknüpft werden soll.
2. Wenn sich der Benutzer anmeldet, gibt er zuerst seinen Benutzernamen ein.
3. Die Anmeldeseite zeigt dann das mit dem Konto verknüpfte Geheimnis an.
4. Wenn das Geheimnis nicht dem entspricht, was der Benutzer erwartet hatte, sollte er sein Passwort nicht eingeben.

Die Idee ist, dass der Angreifer das Geheimnis nicht kennt und es daher nicht auf der gefälschten Anmeldeseite anzeigen kann.

In einer Variation dieser Technik verwendet die Website ein persistentes Cookie, um zu entscheiden, welches Geheimnis angezeigt werden soll, anstelle des Benutzernamens.

In der Praxis gibt es einige Schwierigkeiten mit dieser Technik:

- Sie basiert darauf, dass der Benutzer auf den Sicherheitsindikator achtet: das heißt, sie ist von der Benutzerschulung abhängig. Erfahrungen haben gezeigt, dass Benutzerschulungen als allgemeines Prinzip (also außerhalb eines kontrollierten Kontexts wie eines sicher verwalteten Unternehmens) nicht sehr effektiv sind, um Phishing-Angriffe zu verhindern.
- Je nach Mechanismus zur Entscheidung, welches Geheimnis angezeigt werden soll, kann es anfällig für denselben Mittelsmann-Angriff wie MFA sein.
- Der Mechanismus, den der Server verwendet, um zu entscheiden, welches Geheimnis angezeigt werden soll, kann anfällig sein: Beispielsweise kann es einfacher für einen Angreifer sein, einen Benutzernamen herauszufinden als ein Passwort. Mit einem Benutzernamen könnte ein Angreifer das Geheimnis bestimmen und eine überzeugende gefälschte Seite erstellen.

Aufgrund dieser Schwächen wird diese Abwehr selten genutzt: Sowohl MFA als auch Passkeys gelten als stärkere Abwehrmaßnahmen.

## Zusammenfassung der Abwehrmaßnahmen

- Setzen Sie `SPF`, `DKIM` und `DMARC` DNS-Einträge für Ihre Domains.
- Überlegen Sie, Passkeys zur Authentifizierung von Benutzern zu verwenden.
- Wenn Sie Passwörter verwenden, erwägen Sie MFA, und stellen Sie sicher, dass Passwort-Manager mit Ihrer Seite funktionieren können.
