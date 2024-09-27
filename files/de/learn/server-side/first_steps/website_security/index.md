---
title: Website-Sicherheit
slug: Learn/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Website-Designs und der -Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Website-Sicherheitsguru machen, aber er wird Ihnen helfen, zu verstehen, wo Bedrohungen herkommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Computerkenntnisse.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der häufigsten Bedrohungen für die Sicherheit von Webanwendungen und
        welche Maßnahmen man ergreifen kann, um das Risiko eines Hacks der eigenen Website zu reduzieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir von Websites, die aufgrund von Denial-of-Service-Angriffen nicht verfügbar sind oder modifizierte (und oft schädliche) Informationen auf ihren Startseiten anzeigen. In anderen aufsehenerregenden Fällen sind Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendetails in die Öffentlichkeit gelangt und setzen Website-Benutzer sowohl einem persönlichen als auch finanziellen Risiko aus.

Der Zweck der Website-Sicherheit besteht darin, diese (oder jegliche Art von) Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit lautet: _Der Akt/die Praxis, Websites vor unbefugtem Zugriff, Nutzung, Veränderung, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Design-Anstrengungen über die gesamte Website hinweg: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern und dem clientseitigen Code. Auch wenn das alles sehr bedrohlich klingt, ist die gute Nachricht, dass wenn Sie ein serverseitiges Web-Framework verwenden, es fast sicher "standardmäßig" robuste und durchdachte Abwehrmechanismen gegen eine Reihe der häufigeren Angriffe bereitstellen wird. Andere Angriffe können durch Ihre Webserver-Konfiguration gemildert werden, zum Beispiel durch das Aktivieren von HTTPS. Schließlich gibt es öffentlich zugängliche Schwachstellenscanner-Tools, die Ihnen helfen können herauszufinden, ob Ihnen offensichtliche Fehler unterlaufen sind.

Der Rest dieses Artikels gibt Ihnen weitere Details zu einigen häufigen Bedrohungen und ein paar einfachen Schritten, die Sie unternehmen können, um Ihre Website zu schützen.

> [!NOTE]
> Dies ist ein einführendes Thema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, aber es ist nicht erschöpfend.

## Bedrohungen für die Website-Sicherheit

Dieser Abschnitt listet nur einige der häufigsten Bedrohungen für Websites und deren Abmilderung auf. Während Sie lesen, beachten Sie, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung entweder vertraut oder nicht paranoid genug über die vom Browser kommenden Daten ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _durch_ die Website in die Browser anderer Benutzer einzuschleusen. Da der eingefügte Code vom Browser von der Website kommt, wird er _vertraut_ und kann Dinge tun wie das Senden des Autorisierungs-Cookies des Benutzers an den Angreifer. Wenn der Angreifer das Cookie hat, kann er sich in die Website einloggen, als wäre er der Benutzer, und alles tun, was der Benutzer kann, wie z. B. auf Kreditkartendetails zugreifen, Kontaktdetails einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektierte_ und _persistente_ unterteilt, basierend darauf, wie die Website die eingeschleusten Skripte an einen Browser zurückliefert.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn Benutzerdaten, die an den Server übermittelt werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Alle Skripte im ursprünglichen Benutzerdaten werden ausgeführt, wenn die neue Seite geladen wird.
  Zum Beispiel könnte ein Suchfunktion einer Seite, bei der Suchbegriffe als URL-Parameter kodiert sind und diese Begriffe zusammen mit den Resultaten angezeigt werden, von einem Angreifer ausgenutzt werden, indem er einen Suchlink erstellt, der ein bösartiges Skript als Parameter enthält (z. B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und diesen an einen anderen Benutzer sendet. Wenn der Zielbenutzer auf diesen "interessanten Link" klickt, wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie bereits erwähnt, erhält der Angreifer dadurch alle Informationen, die er benötigt, um sich als Zielbenutzer auf der Website anzumelden, möglicherweise Einkäufe als Benutzer zu tätigen oder deren Kontaktdaten zu teilen.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript _auf_ der Website _gespeichert_ und dann später unverändert zur Ausführung durch andere Benutzer angezeigt wird.
  Zum Beispiel könnte ein Diskussionsforum, das Kommentare mit unverändertem HTML akzeptiert, ein bösartiges Skript von einem Angreifer speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen senden, die erforderlich sind, um auf das Konto des Benutzers zuzugreifen. Diese Art von Angriff ist extrem beliebt und mächtig, da der Angreifer möglicherweise keine direkte Interaktion mit den Opfern hat.

Während die Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, ist auch jede andere vom Browser kommende Daten potenziell anfällig, wie z. B. Cookiedaten, die vom Browser gerendert werden, oder Benutzerdaten, die hochgeladen und angezeigt werden.

Die beste Verteidigung gegen XSS-Schwachstellen besteht darin, alle Markups zu entfernen oder zu deaktivieren, die potenziell Anweisungen zur Codeausführung enthalten können. Für HTML sind dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess der Modifikation von Benutzerdaten, sodass sie nicht zur Ausführung von Skripten oder zur Beeinflussung der Ausführung von Server-Code verwendet werden können, wird als Eingabesanitisierung bezeichnet. Viele Web-Frameworks sanitisieren Benutzereingaben aus HTML-Formularen bereits standardmäßig.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Benutzerberechtigungen zugegriffen, modifiziert oder gelöscht werden können. Ein erfolgreicher Injection-Angriff könnte Identitäten fälschen, neue Identitäten mit Administratorrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/modifizieren, sodass sie unbrauchbar werden.

Die Typen der SQL-Injection umfassen Fehler-basierte SQL-Injection, SQL-Injection basierend auf booleschen Fehlern und Zeit-basierte SQL-Injection.

Diese Schwachstelle liegt vor, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übermittelt werden, die Bedeutung der Anweisung ändern können. Zum Beispiel ist der folgende Code dazu gedacht, alle Benutzer mit einem bestimmten Namen (`userName`) aufzulisten, der aus einem HTML-Formular übermittelt wurde:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen realen Namen angibt, wird die Anweisung wie beabsichtigt funktionieren. Ein böswilliger Benutzer könnte jedoch das Verhalten dieser SQL-Anweisung komplett ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt, was zur neuen Anweisung im folgenden Beispiel führt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt (was die Informationen jedes Benutzers offenlegt). Dies funktioniert, weil der erste Teil des eingeschleusten Textes (`a';`) die ursprüngliche Anweisung abschließt.

Um diese Art von Angriff zu vermeiden, müssen Sie sicherstellen, dass keine Benutzerdaten, die an eine SQL-Abfrage übergeben werden, die Art der Abfrage ändern können. Eine Möglichkeit, dies zu tun, besteht darin, alle Zeichen in den Benutzereingaben, die in SQL eine besondere Bedeutung haben, zu [escapen](https://en.wikipedia.org/wiki/Escape_character).

> [!NOTE]
> Die SQL-Anweisung behandelt das **'**-Zeichen als Anfang und Ende eines Zeichenfolgenliterals. Indem vor diesem Zeichen ein Backslash gestellt wird (**\\'**), escapen wir das Symbol und weisen SQL an, es stattdessen als Zeichen (nur Teil der Zeichenfolge) zu behandeln.

In der folgenden Anweisung escapen wir das **'**-Zeichen. SQL interpretiert den Namen nun als die gesamte fettgedruckte Zeichenfolge (die ein sehr seltsamer Name ist, aber nicht schädlich).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Web-Frameworks kümmern sich oft um das Escapen der Zeichen für Sie. Django sorgt zum Beispiel dafür, dass alle Benutzerdaten, die an Querysets (Modellanfragen) übergeben werden, escaped sind.

> [!NOTE]
> Dieser Abschnitt basiert stark auf den Informationen [hier in Wikipedia](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen unter Verwendung der Anmeldedaten eines anderen Benutzers ohne dessen Wissen oder Zustimmung durchzuführen.

Dieser Angriffstyp wird am besten durch ein Beispiel veranschaulicht. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Website es angemeldeten Benutzern erlaubt, Geld an ein bestimmtes Konto zu senden, indem eine HTTP-`POST`-Anfrage ausgeführt wird, die den Kontonamen und einen Geldbetrag enthält. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Website-Benutzer (mit dem _Absenden_-Button, der als Link zu einer "schnell reich werden"-Website getarnt ist).

Wenn ein Benutzer den Absenden-Button klickt, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Website assoziiert hat (das Hinzufügen assoziierter Cookies zu Anfragen ist ein normales Browserverhalten). Der Server wird die Cookies überprüfen und verwenden, um festzustellen, ob der Benutzer angemeldet ist und die Erlaubnis hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Benutzer, der den _Absenden_-Button klickt, während er bei der Handelswebsite angemeldet ist, die Transaktion durchführen wird. Josh wird reich.

> [!NOTE]
> Der Trick hier besteht darin, dass Josh keinen Zugriff auf die Cookies (oder Anmeldeinformationen) des Benutzers benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch allen Anfragen an den zugehörigen Server hinzu.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, vom Server generiertes Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt, wenn das Webformular gesendet wird, das für Überweisungen verwendet wird. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server für den Benutzer bereitstellt. Selbst wenn er das Geheimnis herausfinden und für einen bestimmten Benutzer ein Formular erstellen würde, könnte er dasselbe Formular nicht mehr verwenden, um jeden Benutzer anzugreifen.

Web-Frameworks beinhalten oft solche CSRF-Präventionsmechanismen.

### Andere Bedrohungen

Weitere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Glossary/Clickjacking). Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare Top-Level-Site bestimmt sind, und leitet sie zu einer versteckten Seite darunter um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bank-Website anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, der vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Benutzer dazu zu bringen, einen Button auf einer sichtbaren Seite zu klicken, wobei er dabei unwissentlich einen völlig anderen Button klickt. Als Abwehr kann Ihre Website verhindern, dass sie in einem iframe auf einer anderen Seite eingebettet wird, indem sie die entsprechenden HTTP-Header setzt.
- [Denial of Service](/de/docs/Glossary/Distributed_Denial_of_Service) (DoS). DoS wird normalerweise erreicht, indem eine Zielwebsite mit gefälschten Anfragen überflutet wird, sodass der Zugriff auf eine Website für legitime Benutzer unterbrochen wird. Die Anfragen können zahlreich sein oder sie können einzeln große Mengen an Ressourcen verbrauchen (z. B. langsames Lesen oder Hochladen großer Dateien). DoS-Abwehrmechanismen arbeiten normalerweise, indem sie "schlechten" Datenverkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmechanismen sind in der Regel vor oder im Webserver angesiedelt (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei und Offenlegung). Bei diesem Angriff versucht ein böswilliger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, auf die er keinen Zugriff haben sollte. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übergeben kann, die Datei-Navigationszeichen enthalten (zum Beispiel `../../`). Die Lösung besteht darin, Eingaben zu sanitisieren, bevor sie verwendet werden.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Benutzer eine "ungewollte" Datei zur Anzeige oder Ausführung in Daten angeben, die an den Server übermittelt werden. Beim Laden könnte diese Datei auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führt). Die Lösung besteht darin, Eingaben zu sanitisieren, bevor sie verwendet werden.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Command-Injection-Angriffe ermöglichen es einem böswilligen Benutzer, beliebige Systembefehle auf dem Hostbetriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu sanitisieren, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Für eine umfassende Auflistung von Bedrohungen der Website-Sicherheit siehe [Kategorie: Web-Sicherheitsausnutzung](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Kategorie: Angriff](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Ein paar wichtige Nachrichten

Fast alle der zuvor beschriebenen Sicherheitsexploits sind erfolgreich, wenn die Webanwendung Daten vom Browser vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle vom Benutzer stammenden Daten sanitisieren, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an einen Betriebssystem- oder Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals Daten vom Browser zu vertrauen**. Dies schließt, ist aber nicht beschränkt auf, Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie vom Benutzer hochgeladene Dateien. Überprüfen und sanitisieren Sie stets alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie ein effektiveres Passwortmanagement. Fördern Sie starke Passwörter. Ziehen Sie zweistufige Authentifizierung für Ihre Website in Betracht, sodass der Benutzer zusätzlich zu einem Passwort einen weiteren Authentifizierungscode eingeben muss (üblicherweise einen, der über eine physische Hardware geliefert wird, die nur der Benutzer besitzt, wie einen Code in einer SMS, die an sein Telefon gesendet wird).
- Konfigurieren Sie Ihren Webserver, um [HTTPS](/de/docs/Glossary/HTTPS) und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) zu verwenden. HTTPS verschlüsselt Daten, die zwischen Ihrem Client und Server gesendet werden. Dies stellt sicher, dass Anmeldedaten, Cookies, `POST`-Anfragen-Daten und Header-Informationen nicht leicht von Angreifern zugänglich sind.
- Verfolgen Sie die populärsten Bedrohungen (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und beheben Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Schwachstellenscanner-Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Website durchzuführen. Später, wenn Ihre sehr erfolgreiche Website möglicherweise auch Bugs findet, indem ein Bug-Bounty angeboten wird [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und zeigen Sie nur Daten an, die Sie benötigen. Wenn Ihre Benutzer beispielsweise sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur genügend der Kartennummer an, damit sie vom Benutzer identifiziert werden kann, aber nicht genug, dass sie von einem Angreifer kopiert und auf einer anderen Website verwendet werden kann. Das derzeit häufigste Muster besteht darin, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder mildern.
  Wenn möglich, planen Sie regelmäßige automatisierte Updates ein und idealerweise Updates zu Zeiten, in denen Ihre Website das geringste Verkehrsaufkommen hat.
  Es ist am besten, Ihre Daten vor dem Aktualisieren zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können helfen, viele der häufigeren Schwachstellen abzumildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Web-Sicherheit und einige der häufigeren Bedrohungen erklärt, gegen die sich Ihre Website zu schützen versuchen sollte. Das Wichtigste ist, dass Sie verstehen sollten, dass eine Webanwendung keinen Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten sanitisert werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel haben Sie das Ende [dieses Moduls](/de/docs/Learn/Server-side/First_steps) erreicht, das Ihre ersten Schritte in der serverseitigen Website-Programmierung behandelt. Wir hoffen, dass Sie Freude daran hatten, diese grundlegenden Konzepte zu lernen und nun bereit sind, ein Web-Framework auszuwählen und mit dem Programmieren zu beginnen.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
