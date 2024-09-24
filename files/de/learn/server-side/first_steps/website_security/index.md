---
title: Website-Sicherheit
slug: Learn/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Webdesigns und der Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Website-Sicherheitsguru machen, aber er wird Ihnen helfen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

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
        was Sie tun können, um das Risiko zu verringern, dass Ihre Seite gehackt wird.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit erfahren wir von Websites, die aufgrund von Denial-of-Service-Angriffen nicht mehr verfügbar sind oder auf ihren Startseiten veränderte (und oft schädliche) Informationen anzeigen. In anderen hochkarätigen Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in die Öffentlichkeit geleakt, was Nutzer der Website sowohl persönlichen Peinlichkeiten als auch finanziellen Risiken aussetzt.

Der Zweck der Website-Sicherheit besteht darin, diese (oder andere) Arten von Angriffen zu verhindern. Die formalere Definition von Website-Sicherheit _ist die Handlung/Praxis, Websites vor unbefugtem Zugriff, Nutzung, Veränderung, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Designaufwand über die gesamte Website: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern und dem clientseitigen Code. Obwohl all das sehr düster klingt, ist die gute Nachricht, dass, wenn Sie ein serverseitiges Web-Framework verwenden, es fast sicher „standardmäßig“ robuste und gut durchdachte Abwehrmechanismen gegen eine Reihe der häufigeren Angriffe ermöglicht. Andere Angriffe können durch Ihre Webserver-Konfiguration gemildert werden, z. B. durch das Aktivieren von HTTPS. Schließlich gibt es öffentlich zugängliche Tools zur Schwachstellenprüfung, die Ihnen helfen können, herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels bietet Ihnen mehr Details zu einigen häufigen Bedrohungen und einigen einfachen Schritten, die Sie unternehmen können, um Ihre Seite zu schützen.

> [!NOTE]
> Dies ist ein Einführungsthema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, ist jedoch nicht erschöpfend.

## Bedrohungen für die Website-Sicherheit

Dieser Abschnitt listet nur einige der häufigsten Bedrohungen für Websites auf und wie sie gemildert werden. Beachten Sie beim Lesen, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung entweder vertraut oder nicht misstrauisch genug gegenüber den Daten ist, die vom Browser kommen.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Nutzer zu injizieren. Da der eingeschleuste Code vom Browser von der Seite stammt, wird er als _vertrauenswürdig_ angesehen und kann Dinge tun, wie zum Beispiel das Sitzungscookie des Nutzers an den Angreifer senden. Wenn der Angreifer das Cookie hat, kann er sich in die Seite einloggen, als ob er der Nutzer wäre, und alles tun, was der Nutzer kann, z. B. auf seine Kreditkartendetails zugreifen, Kontaktdaten einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektierte_ und _persistente_ unterteilt, basierend darauf, wie die Website die eingeschleusten Skripte an einen Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn Benutzerinhalte, die an den Server übermittelt werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgesendet werden. Jegliche Skripte im ursprünglichen Benutzerinhalt werden ausgeführt, wenn die neue Seite geladen wird.
  Betrachten Sie zum Beispiel eine Website-Suchfunktion, bei der die Suchbegriffe als URL-Parameter kodiert und zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink erstellen, der ein bösartiges Skript als Parameter enthält (z.B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und diesen an einen anderen Benutzer schicken. Klickt der Zielbenutzer auf diesen "interessanten Link", wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie bereits erwähnt, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als Zielbenutzer auf der Seite einzuloggen, möglicherweise Einkäufe zu tätigen oder seine Kontaktinformationen weiterzugeben.
- Eine _persistente_ XSS-Schwachstelle liegt vor, wenn das bösartige Skript _auf_ der Website gespeichert wird und später unverändert wieder angezeigt wird, damit andere Benutzer es unwissentlich ausführen können.
  Ein Beispiel dafür ist ein Diskussionsforum, das Kommentare akzeptiert, die nicht modifiziertes HTML enthalten, und so einem Angreifer die Möglichkeit gibt, ein schädliches Skript zu speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen zusenden, die benötigt werden, um auf das Konto des Nutzers zuzugreifen. Diese Art von Angriff ist äußerst beliebt und mächtig, da der Angreifer möglicherweise nicht einmal direkten Kontakt mit den Opfern hat.

Während Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle Daten aus dem Browser potenziell gefährdet, wie z. B. Cookie-Daten, die vom Browser angezeigt werden, oder von Benutzern hochgeladene und angezeigte Dateien.

Die beste Verteidigung gegen XSS-Schwachstellen ist das Entfernen oder Deaktivieren von Markups, die potenziell Anweisungen zum Ausführen von Code enthalten können. Für HTML umfasst dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess, Benutzerdaten so zu ändern, dass sie nicht verwendet werden können, um Skripte auszuführen oder anderweitig die Ausführung von Servercode zu beeinflussen, wird als Eingabebereinigung bezeichnet. Viele Web-Frameworks bereinigen standardmäßig Benutzereingaben von HTML-Formularen.

### SQL-Injektion

SQL-Injektionsschwachstellen ermöglichen es böswilligen Nutzern, beliebigen SQL-Code auf einer Datenbank auszuführen und so Zugriff auf Daten zu erhalten, sie zu ändern oder zu löschen, unabhängig von den Berechtigungen des Nutzers. Ein erfolgreicher Injektionsangriff kann Identitäten fälschen, neue Identitäten mit Administratorrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/ändern, um sie unbrauchbar zu machen.

SQL-Injektionstypen umfassen Fehlerbasierte SQL-Injektion, SQL-Injektion basierend auf booleschen Fehlern und Zeitbasierte SQL-Injektion.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übermittelt werden, die Bedeutung der Anweisung ändern können. Zum Beispiel soll der folgende Code alle Nutzer mit einem bestimmten Namen (`userName`) auflisten, der aus einem HTML-Formular stammt:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Nutzer einen echten Namen angibt, funktioniert die Anweisung wie beabsichtigt. Ein böswilliger Nutzer könnte jedoch das Verhalten dieser SQL-Anweisung vollständig ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die geänderte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt (was die Informationen jedes Nutzers offenbart). Dies funktioniert, weil der erste Teil des eingeschleusten Textes (`a';`) die ursprüngliche Anweisung abschließt.

Um diese Art von Angriffen zu vermeiden, müssen Sie sicherstellen, dass alle Benutzerdaten, die an eine SQL-Abfrage übergeben werden, die Natur der Abfrage nicht ändern können. Eine Möglichkeit, dies zu tun, besteht darin, alle Zeichen in den Benutzereingaben, die in SQL eine besondere Bedeutung haben, zu [escapen](https://en.wikipedia.org/wiki/Escape_character).

> [!NOTE]
> Die SQL-Anweisung behandelt das Zeichen **'** als Anfang und Ende eines Zeichenketten-Literals. Indem Sie einen Backslash vor dieses Zeichen setzen (**\\'**), escapen Sie das Symbol und weisen SQL an, es stattdessen als Zeichen (nur als Teil der Zeichenkette) zu behandeln.

In der folgenden Anweisung escapen wir das Zeichen **'**. SQL wird nun den Namen als die ganze Zeichenkette in Fett interpretiert (was ein sehr seltsamer Name ist, aber nicht schädlich).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Web-Frameworks übernehmen häufig das Escaping der Zeichen für Sie. Django beispielsweise stellt sicher, dass alle Benutzerangaben, die an Querysets (Modellabfragen) übergeben werden, escapet werden.

> [!NOTE]
> Dieser Abschnitt basiert stark auf den Informationen in [Wikipedia hier](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Nutzer, Aktionen mit den Anmeldeinformationen eines anderen Nutzers auszuführen, ohne dass dieser Nutzer darüber Kenntnis oder Zustimmung hat.

Dieser Angriffstyp wird am besten durch ein Beispiel erklärt. Josh ist ein böswilliger Nutzer, der weiß, dass eine bestimmte Seite eingeloggten Nutzern erlaubt, Geld an ein bestimmtes Konto zu senden, indem sie eine HTTP-`POST`-Anfrage mit dem Kontonamen und einer Geldsumme senden. Josh erstellt ein Formular, das seine Bankverbindung und einen Geldbetrag als versteckte Felder enthält, und sendet es an andere Nutzer der Seite (mit der _Absenden_-Schaltfläche als Link zu einer "schnell reich werden" Seite getarnt).

Wenn ein Nutzer die Absenden-Schaltfläche klickt, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Seite verknüpft (das Hinzufügen von zugehörigen Site-Cookies zu Anfragen ist normales Browserverhalten). Der Server überprüft die Cookies und verwendet sie, um zu bestimmen, ob der Nutzer eingeloggt ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Nutzer, der auf die Absenden-Schaltfläche klickt, solange er bei der Handelsseite eingeloggt ist, die Transaktion durchführt. Josh wird reich.

> [!NOTE]
> Der Trick hierbei ist, dass Josh keinen Zugriff auf die Cookies (oder Zugriffsdaten) des Nutzers benötigt. Der Browser des Nutzers speichert diese Informationen und fügt sie automatisch allen Anfragen an den zugehörigen Server hinzu.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, von der Site generiertes Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt, wenn das Webformular gesendet wird, mit dem Transfers durchgeführt werden. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server dem Nutzer bereitstellt. Selbst wenn er das Geheimnis herausfände und für einen bestimmten Nutzer ein Formular erstellen würde, könnte er dasselbe Formular nicht mehr verwenden, um jeden Nutzer anzugreifen.

Web-Frameworks beinhalten häufig solche CSRF-Präventionsmechanismen.

### Weitere Bedrohungen

Andere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Glossary/Clickjacking). Bei diesem Angriff übernimmt ein böswilliger Nutzer Klicks, die für eine sichtbare Top-Level-Seite gedacht sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte verwendet werden, um beispielsweise eine legitime Bankseite anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, das vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Benutzer dazu zu bringen, einen sichtbaren Button auf einer Seite zu klicken, was tatsächlich dazu führt, dass ein völlig anderer Button angeklickt wird. Als Abwehrmaßnahme kann Ihre Seite verhindern, dass sie in einem iframe auf einer anderen Seite eingebettet wird, indem sie die entsprechenden HTTP-Header setzt.
- [Denial of Service](/de/docs/Glossary/Distributed_Denial_of_Service) (DoS). DoS wird normalerweise erreicht, indem eine Zielseite mit gefälschten Anfragen überschwemmt wird, sodass der Zugriff auf die Seite für legitime Benutzer unterbrochen wird. Die Anfragen können zahlreich sein oder einzeln große Mengen an Ressourcen verbrauchen (z. B. langsames Lesen oder Hochladen großer Dateien). DoS-Abwehrmaßnahmen arbeiten normalerweise, indem sie "bösartigen" Datenverkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmaßnahmen befinden sich typischerweise vor oder im Webserver (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei- und Offenlegung). Bei diesem Angriff versucht ein böswilliger Nutzer, auf Teile des Dateisystems des Webservers zuzugreifen, die ihm nicht zugänglich sein sollten. Diese Schwachstelle tritt auf, wenn der Nutzer Dateinamen übergeben kann, die Dateisystem-Navigationszeichen enthalten (zum Beispiel `../../`). Die Lösung besteht darin, Eingaben zu bereinigen, bevor sie verwendet werden.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Benutzer eine "nicht beabsichtigte" Datei zur Anzeige oder Ausführung in Daten, die an den Server übermittelt werden, spezifizieren. Wenn diese Datei geladen wird, könnte sie auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führt). Die Lösung besteht darin, Eingaben zu bereinigen, bevor sie verwendet werden.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Bei Command-Injection-Angriffen kann ein böswilliger Nutzer beliebige Systembefehle auf dem Host-Betriebssystem ausführen. Die Lösung besteht darin, Benutzereingaben zu bereinigen, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Für eine umfassende Auflistung von Bedrohungen der Website-Sicherheit siehe [Category: Web security exploits](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Category: Attack](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Ein paar wichtige Botschaften

Fast alle Sicherheitslücken in den vorherigen Abschnitten sind erfolgreich, wenn die Webanwendung den Daten vom Browser vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle Benutzerdaten bereinigen, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an einen Betriebssystem- oder Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über die Sicherheit von Websites lernen können, ist, **niemals den Daten des Browsers zu vertrauen**. Dazu gehören, aber nicht beschränkt auf Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Header und Cookies sowie von Benutzern hochgeladene Dateien. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom schlimmsten Fall aus.

Einige andere konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie ein effektiveres Passwortmanagement. Ermutigen Sie zu starken Passwörtern. Erwägen Sie die Zwei-Faktor-Authentifizierung für Ihre Seite, sodass der Nutzer zusätzlich zu einem Passwort einen weiteren Authentifizierungscode eingeben muss (normalerweise einen, der über einige physische Hardware geliefert wird, die nur der Nutzer hat, wie zum Beispiel ein Code in einer SMS, die an sein Telefon gesendet wird).
- Konfigurieren Sie Ihren Webserver zur Nutzung von [HTTPS](/de/docs/Glossary/HTTPS) und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS). HTTPS verschlüsselt die zwischen Ihrem Client und Server gesendeten Daten. Dies stellt sicher, dass Anmeldeinformationen, Cookies, `POST`-Anfragen und Header-Informationen nicht leicht für Angreifer zugänglich sind.
- Verfolgen Sie die beliebtesten Bedrohungen (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und gehen Sie die häufigsten Schwachstellen zuerst an.
- Verwenden Sie [Tools zur Schwachstellenprüfung](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Seite durchzuführen. Später, wenn Ihre sehr erfolgreiche Website möglicherweise Fehler findet, indem Sie eine Bug-Bounty anbieten [wie Mozilla hier](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und zeigen Sie nur die Daten an, die Sie benötigen. Zum Beispiel, wenn Ihre Nutzer sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur so viele der Kartennummer an, dass sie von den Nutzern erkannt werden kann, und nicht genügend, dass sie von einem Angreifer kopiert und auf einer anderen Seite verwendet werden kann. Das häufigste Muster zurzeit zeigt nur die letzten 4 Ziffern einer Kreditkartennummer an.
- Halten Sie die Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder mildern.
  Wenn möglich, planen Sie regelmäßige automatisierte Updates ein und idealerweise während Zeiten, in denen Ihre Website den geringsten Verkehr hat.
  Es ist am besten, Ihre Daten vor einem Update zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass auf Ihrem Server keine Kompatibilitätsprobleme bestehen.

Web-Frameworks können viele der häufigeren Schwachstellen mildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Web-Sicherheit und einige der häufigeren Bedrohungen erläutert, gegen die Ihre Website versuchen sollte, sich zu schützen. Am wichtigsten ist, dass Sie verstehen sollten, dass eine Webanwendung keinen Daten des Webbrowsers vertrauen kann. Alle Benutzerdaten sollten bereinigt werden, bevor sie angezeigt, in SQL-Abfragen verwendet oder in Dateisystemaufrufen übergeben werden.

Mit diesem Artikel sind Sie am Ende [dieses Moduls](/de/docs/Learn/Server-side/First_steps) angelangt, das Ihre ersten Schritte im serverseitigen Website-Programmieren behandelt. Wir hoffen, dass Ihnen das Lernen dieser grundlegenden Konzepte Spaß gemacht hat und Sie nun bereit sind, ein Web-Framework auszuwählen und mit dem Programmieren zu beginnen.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
