---
title: Website-Sicherheit
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten der Websitegestaltung und -nutzung. Dieser einführende Artikel wird Sie nicht zu einem Sicherheitsexperten machen, aber er wird Ihnen helfen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Computerkenntnisse.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die häufigsten Bedrohungen für die Sicherheit von Webanwendungen zu verstehen und
        was Sie tun können, um das Risiko zu verringern, dass Ihre Seite gehackt wird.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Wir hören regelmäßig von Websites, die aufgrund von Denial-of-Service-Angriffen nicht erreichbar sind oder auf ihren Startseiten modifizierte (und oft schädliche) Informationen anzeigen. In anderen hochkarätigen Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in die öffentliche Domäne geleakt, was die Nutzer der Website sowohl persönlicher Verlegenheit als auch finanziellen Risiken aussetzte.

Der Zweck der Website-Sicherheit besteht darin, diese (oder jegliche) Art von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit ist _der Akt/die Praxis, Websites vor unbefugtem Zugriff, Nutzung, Änderung, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Designeinsatz in der gesamten Website: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern und im clientseitigen Code. Während all das sehr bedrohlich klingt, ist die gute Nachricht, dass wenn Sie ein serverseitiges Web-Framework verwenden, es fast sicher "standardmäßig" robuste und durchdachte Abwehrmechanismen gegen eine Reihe der häufigsten Angriffe bietet. Andere Angriffe können durch Ihre Webserver-Konfiguration gemildert werden, zum Beispiel durch die Aktivierung von HTTPS. Schließlich gibt es öffentlich verfügbare Tools zur Schwachstellensuche, die Ihnen helfen können herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen mehr Details über einige häufige Bedrohungen und einige der einfachen Schritte, die Sie unternehmen können, um Ihre Seite zu schützen.

> [!NOTE]
> Dies ist ein Einführungsthema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, aber es ist nicht erschöpfend.

## Bedrohungen für die Website-Sicherheit

Dieser Abschnitt listet nur einige der häufigsten Bedrohungen für Websites und deren Abmilderung auf. Während Sie lesen, bemerken Sie, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung entweder dem Browser vertraut oder nicht _paranoid genug_ über die vom Browser kommenden Daten ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Nutzer zu injizieren. Da der injizierte Code vom Browser von der Seite kommt, ist der Code _vertraut_ und kann Dinge tun, wie das Autorisierungs-Cookie des Benutzers an den Angreifer senden. Wenn der Angreifer das Cookie hat, kann er sich in eine Seite einloggen, als wäre er der Benutzer, und alles tun, was der Benutzer tun kann, wie z.B. auf dessen Kreditkartendaten zugreifen, Kontaktdetails einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektiert_ und _persistent_ unterteilt, basierend darauf, wie die Seite die injizierten Skripte in einem Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle entsteht, wenn Benutzerinhalte, die an den Server übermittelt werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Jegliche Skripte in den ursprünglichen Benutzerdaten werden ausgeführt, wenn die neue Seite geladen wird.
  Nehmen Sie beispielsweise eine Suchfunktion auf einer Seite, bei der die Suchbegriffe als URL-Parameter kodiert werden und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink konstruieren, der ein bösartiges Skript als Parameter enthält (z.B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und diesen an einen anderen Benutzer senden. Klickt der Zielbenutzer auf diesen "interessanten Link", wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie bereits besprochen, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als Zielbenutzer auf der Seite anzumelden, potenziell als der Benutzer Einkäufe zu tätigen oder dessen Kontaktdaten zu teilen.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ wird und später unverändert wieder angezeigt wird, damit andere Benutzer es unwissentlich ausführen.
  Ein Beispiel wäre ein Diskussionsboard, das Kommentare akzeptiert, die unmodifizierten HTML-Code enthalten. Es könnte ein bösartiges Skript eines Angreifers speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen senden, die erforderlich sind, um auf das Benutzerkonto zuzugreifen. Diese Art von Angriff ist äußerst beliebt und mächtig, weil der Angreifer möglicherweise nicht einmal direkten Kontakt mit den Opfern hat.

Während die Daten von `POST` oder `GET`-Anfragen die häufigste Quelle von XSS-Schwachstellen sind, sind potenziell alle Daten vom Browser anfällig, wie Cookie-Daten, die vom Browser angezeigt werden, oder Benutzerdateien, die hochgeladen und angezeigt werden.

Die beste Verteidigung gegen XSS-Schwachstellen ist das Entfernen oder Deaktivieren jeglicher Markierungen, die potenziell Anweisungen zum Ausführen von Code enthalten könnten. Für HTML schließt dies Elemente ein, wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess der Modifikation von Benutzerdaten, sodass sie nicht verwendet werden können, um Skripte auszuführen oder anderweitig die Ausführung von Servercode zu beeinflussen, ist als Input-Sanitisierung bekannt. Viele Web-Frameworks sanitieren standardmäßig Benutzereingaben aus HTML-Formularen automatisch.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Rechten des Benutzers abgerufen, geändert oder gelöscht werden können. Ein erfolgreicher Injektion-Angriff kann Identitäten fälschen, neue Identitäten mit Administratorrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/ändern, um sie unbrauchbar zu machen.

Zu den SQL-Injection-Typen gehören Fehlerbasierte SQL-Injection, SQL-Injection basierend auf booleschen Fehlern und Zeitbasierte SQL-Injection.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung ändern können. Zum Beispiel soll der folgende Code alle Benutzer mit einem bestimmten Namen (`userName`) auflisten, der aus einem HTML-Formular übermittelt wurde:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, wird die Anweisung wie vorgesehen funktionieren. Ein böswilliger Benutzer könnte das Verhalten dieser SQL-Anweisung völlig ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für das `userName` angibt, auf die neue Anweisung im folgenden Beispiel.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt (was die Informationen jedes Benutzers offenbart). Dies funktioniert, weil der erste Teil des eingespritzten Textes (`a';`) die ursprüngliche Anweisung vervollständigt.

Um diese Art von Angriff zu vermeiden, müssen Sie sicherstellen, dass alle Benutzerdaten, die an eine SQL-Abfrage übergeben werden, die Natur der Abfrage nicht ändern können. Eine Möglichkeit, dies zu tun, ist das [Escapen](https://en.wikipedia.org/wiki/Escape_character) aller Zeichen in den Benutzereingaben, die in SQL eine besondere Bedeutung haben.

> [!NOTE]
> Die SQL-Anweisung behandelt das Zeichen **'** als Anfang und Ende eines String-Literals. Indem Sie dieses Zeichen mit einem Backslash (**\\'**) versehen, escapen wir das Symbol und weisen SQL an, es stattdessen als gewöhnliches Zeichen zu behandeln (nur als Teil des Strings).

In der folgenden Anweisung escapen wir das Zeichen **'**. SQL interpretiert den Namen jetzt als den gesamten fettgedruckten String (der wirklich ein seltsamer Name ist, aber nicht schädlich).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Web-Frameworks kümmern sich oft um das Escapen der Zeichen für Sie. Django beispielsweise stellt sicher, dass alle Benutzerdaten, die an Querysets (Modellabfragen) übergeben werden, escaped werden.

> [!NOTE]
> Dieser Abschnitt bezieht sich stark auf die Informationen in [Wikipedia hier](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe erlauben es einem böswilligen Benutzer, Aktionen mit den Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen.

Dieser Angriffs-Typ lässt sich am besten durch ein Beispiel erklären. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Seite eingeloggten Benutzern erlaubt, Geld auf ein angegebenes Konto zu überweisen, indem eine HTTP-`POST`-Anfrage abgeschickt wird, die den Kontonamen und einen Geldbetrag enthält. Josh erstellt ein Formular inklusive seiner Bankdetails und eines Geldbetrags als versteckte Felder und sendet es an andere Benutzer der Seite (mit dem _Absenden_-Button als Link zu einer "schnell reich werden"-Seite getarnt).

Klickt ein Benutzer den Absenden-Button, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Seite verknüpft (das Hinzufügen verbundener Website-Cookies zu Anfragen ist normales Browserverhalten). Der Server prüft die Cookies und nutzt sie, um festzustellen, ob der Benutzer eingeloggt ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Benutzer, der während des Einloggens in die Handelsseite den _Absenden_-Button klickt, die Transaktion durchführt. Josh wird reich.

> [!NOTE]
> Der Trick hier ist, dass Josh keinen Zugriff auf die Cookies (oder Zugangsdaten) des Benutzers benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch in alle Anfragen an den zugehörigen Server ein.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, den Server zu verpflichten, dass `POST`-Anfragen ein benutzerspezifisches, sitegeneriertes Geheimnis enthalten. Das Geheimnis würde vom Server beim Versenden des Webformulars zur Durchführung von Überweisungen bereitgestellt. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server für den Benutzer bereitstellt. Selbst wenn er das Geheimnis herausfinden und ein Formular für einen bestimmten Benutzer erstellen würde, könnte er dasselbe Formular nicht mehr verwenden, um alle Benutzer anzugreifen.

Web-Frameworks enthalten oft solche CSRF-Präventionsmechanismen.

### Andere Bedrohungen

Weitere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare oberste Seite bestimmt sind, und leitet sie zu einer versteckten Seite darunter um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldeinformationen in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, der vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Benutzer dazu zu bringen, einen Button auf einer sichtbaren Seite zu klicken, tatsächlich aber unwissentlich einen völlig anderen Button. Zum Schutz kann Ihre Seite verhindern, dass sie in einem `iframe` auf einer anderen Seite eingebettet wird, indem die entsprechenden HTTP-Header gesetzt werden.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird in der Regel erreicht, indem eine Zielsite mit gefälschten Anfragen überflutet wird, sodass der Zugriff auf die Seite für legitime Benutzer gestört wird. Die Anfragen können zahlreich sein oder einzeln große Mengen an Ressourcen verbrauchen (z.B. langsame Lesevorgänge oder das Hochladen großer Dateien). DoS-Abwehrmechanismen arbeiten in der Regel, indem sie “bösen” Traffic identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmechanismen befinden sich normalerweise vor oder im Webserver (sie sind kein Teil der Webanwendung selbst).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei- und Offenlegung). Bei diesem Angriff versucht ein böswilliger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, auf die er nicht zugreifen sollte. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übergeben kann, die Zeichen zur Dateisystemnavigation enthalten (zum Beispiel `../../`). Die Lösung besteht darin, die Eingabe zu sanitieren, bevor sie verwendet wird.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Benutzer eine "unerwünschte" Datei zur Anzeige oder Ausführung in Daten an den Server übergeben. Wenn geladen, könnte diese Datei auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führen könnte). Die Lösung besteht darin, die Eingaben zu sanitieren, bevor sie verwendet werden.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Command-Injection-Angriffe erlauben es einem böswilligen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu sanitieren, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Für eine umfassende Liste der Bedrohungen der Website-Sicherheit siehe [Kategorie: Websicherheitsexploits](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Kategorie: Angriff](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Einige Schlüsselbotschaften

Fast alle der Sicherheitsangriffe in den vorherigen Abschnitten sind erfolgreich, wenn die Webanwendung Daten vom Browser vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle benutzerstammenden Daten sanitisieren, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an Betriebssystem- oder Dateisystemaufrufe übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dazu gehören unter anderem Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie hochgeladene Benutzerdateien. Überprüfen und sanitieren Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie eine effektivere Passwortverwaltung. Ermutigen Sie zu starken Passwörtern. Betrachten Sie die Zwei-Faktor-Authentifizierung für Ihre Seite, sodass der Benutzer zusätzlich zu einem Passwort einen weiteren Authentifizierungscode eingeben muss (normalerweise einen, der über eine physische Hardware geliefert wird, die nur der Benutzer hat, wie ein Code in einer SMS an sein Telefon gesendet).
- Konfigurieren Sie Ihren Webserver zur Nutzung von {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS). HTTPS verschlüsselt Daten, die zwischen Ihrem Client und Server gesendet werden. Dies stellt sicher, dass Anmeldeinformationen, Cookies, `POST`-Anfrage-Daten und Header-Informationen nicht leicht für Angreifer zugänglich sind.
- Halten Sie sich über die beliebtesten Bedrohungen auf dem Laufenden (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und beheben Sie zunächst die häufigsten Schwachstellen.
- Verwenden Sie [Schwachstellensuch-Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools) für automatisierte Sicherheitstests auf Ihrer Seite. Später, wenn Ihre erfolgreiche Website wächst, können Sie möglicherweise auch durch das Angebot eines Bug-Bounty-Programms, wie Mozilla es hier tut, Fehler finden [(https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/)].
- Speichern und zeigen Sie nur die Daten an, die Sie benötigen. Zum Beispiel, wenn Ihre Benutzer sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur genug von der Kartennummer an, damit der Benutzer sie identifizieren kann, und nicht genug, damit ein Angreifer sie kopieren und auf einer anderen Seite verwenden könnte. Das häufigste Muster ist derzeit, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder abschwächen.
  Wenn möglich, planen Sie regelmäßige automatische Updates und idealerweise Updates zu Zeiten, in denen Ihre Website das geringste Verkehrsaufkommen hat.
  Am besten sichern Sie Ihre Daten vor dem Update und testen neue Softwareversionen, um sicherzustellen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können helfen, viele der häufigsten Schwachstellen zu mildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Web-Sicherheit und einige der häufigsten Bedrohungen erklärt, gegen die Ihre Website Schutz bieten sollte. Am wichtigsten ist, dass Sie verstehen sollten, dass eine Webanwendung keiner Daten vom Webbrowser vertrauen kann. Alle Benutzerdaten sollten saniert werden, bevor sie angezeigt oder in SQL-Anfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel sind Sie am Ende von [diesem Modul](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) angelangt, das Ihre ersten Schritte in der serverseitigen Website-Programmierung behandelt. Wir hoffen, dass Ihnen das Lernen dieser grundlegenden Konzepte Spaß gemacht hat und dass Sie nun bereit sind, ein Web-Framework auszuwählen und mit der Programmierung zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
