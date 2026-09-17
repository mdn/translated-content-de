---
title: Website-Sicherheit
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten der Gestaltung und Nutzung einer Website. Dieser einführende Artikel macht Sie nicht zu einem Experten für Website-Sicherheit, aber er hilft Ihnen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu härten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Computerkenntnisse.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die häufigsten Bedrohungen für die Sicherheit von Webanwendungen zu
        verstehen und zu erfahren, was Sie tun können, um das Risiko zu
        verringern, dass Ihre Website gehackt wird.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir von Websites, die aufgrund von Denial-of-Service-Angriffen nicht verfügbar werden oder auf ihren Startseiten veränderte (und häufig schädliche) Informationen anzeigen. In anderen aufsehenerregenden Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten öffentlich zugänglich gemacht, wodurch Website-Benutzer sowohl persönlichen Peinlichkeiten als auch finanziellen Risiken ausgesetzt wurden.

Der Zweck der Website-Sicherheit besteht darin, diese (oder beliebige andere) Arten von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit _ist die Handlung/Praxis, Websites vor unbefugtem Zugriff, unbefugter Nutzung, Veränderung, Zerstörung oder Störung zu schützen_.

Wirksame Website-Sicherheit erfordert Entwicklungsaufwand für die gesamte Website: in Ihrer Webanwendung, bei der Konfiguration des Webservers, in Ihren Richtlinien zum Erstellen und Erneuern von Passwörtern sowie im clientseitigen Code. Auch wenn das alles sehr bedrohlich klingt, ist die gute Nachricht, dass ein serverseitiges Web-Framework mit hoher Wahrscheinlichkeit standardmäßig robuste und gut durchdachte Abwehrmechanismen gegen einige der häufigeren Angriffe bereitstellt. Andere Angriffe können durch Ihre Webserver-Konfiguration abgemildert werden, beispielsweise durch die Aktivierung von HTTPS. Schließlich gibt es öffentlich verfügbare Tools zum Scannen auf Schwachstellen, die Ihnen helfen können herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels enthält weitere Einzelheiten zu einigen häufigen Bedrohungen und zu einfachen Schritten, die Sie zum Schutz Ihrer Website unternehmen können.

> [!NOTE]
> Dies ist ein Einführungsthema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, erhebt jedoch keinen Anspruch auf Vollständigkeit.

## Bedrohungen für die Website-Sicherheit

In diesem Abschnitt werden nur einige der häufigsten Bedrohungen für Websites und deren Abwehrmaßnahmen aufgeführt. Beachten Sie beim Lesen, dass Bedrohungen besonders erfolgreich sind, wenn die Webanwendung den vom Browser kommenden Daten entweder vertraut oder _nicht paranoid genug_ gegenüber ihnen ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff für eine Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Da der eingefügte Code vom Browser von der Website stammt, wird er als _vertrauenswürdig_ eingestuft und kann beispielsweise das Autorisierungs-Cookie des Benutzers für die Website an den Angreifer senden. Wenn der Angreifer das Cookie besitzt, kann er sich auf einer Website als Benutzer anmelden und alles tun, was der Benutzer tun kann, beispielsweise auf dessen Kreditkartendaten zugreifen, Kontaktdaten anzeigen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

XSS-Schwachstellen werden anhand der Art und Weise, wie die Website die eingeschleusten Skripte an einen Browser zurückgibt, in _reflected_ und _persistent_ unterteilt.

- Eine _reflected_-XSS-Schwachstelle tritt auf, wenn an den Server übergebene Benutzerinhalte zur Anzeige im Browser _sofort_ und _unverändert_ zurückgegeben werden. Alle Skripte im ursprünglichen Benutzerinhalt werden ausgeführt, wenn die neue Seite geladen wird.
  Stellen Sie sich beispielsweise eine Suchfunktion auf einer Website vor, bei der die Suchbegriffe als URL-Parameter kodiert sind und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink erstellen, der ein bösartiges Skript als Parameter enthält (z. B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`), und ihn einem anderen Benutzer per E-Mail senden. Wenn der Zielbenutzer auf diesen „interessanten Link“ klickt, wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie zuvor erläutert, erhält der Angreifer dadurch alle Informationen, die er benötigt, um die Website als Zielbenutzer aufzurufen und möglicherweise als Benutzer Einkäufe zu tätigen oder dessen Kontaktinformationen weiterzugeben.
- Eine _persistent_-XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ und später unverändert erneut angezeigt wird, damit andere Benutzer es unwissentlich ausführen.
  Beispielsweise könnte ein Diskussionsforum, das Kommentare mit unverändertem HTML akzeptiert, ein bösartiges Skript eines Angreifers speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen senden, die zum Zugriff auf das Konto des Benutzers erforderlich sind. Diese Art von Angriff ist äußerst verbreitet und wirkungsvoll, weil der Angreifer möglicherweise nicht einmal direkten Kontakt mit den Opfern haben muss.

Obwohl Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind potenziell alle Daten aus dem Browser gefährdet, etwa vom Browser gerenderte Cookie-Daten oder hochgeladene und angezeigte Benutzerdateien.

Die beste Abwehr gegen XSS-Schwachstellen besteht darin, sämtliches Markup zu entfernen oder zu deaktivieren, das möglicherweise Anweisungen zur Ausführung von Code enthalten kann. Bei HTML umfasst dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess, Benutzerdaten so zu verändern, dass sie nicht zum Ausführen von Skripten oder anderweitig zur Beeinflussung der Ausführung von Servercode verwendet werden können, wird als Eingabebereinigung bezeichnet. Viele Web-Frameworks bereinigen Benutzereingaben aus HTML-Formularen standardmäßig automatisch.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen. Dadurch können Daten unabhängig von den Berechtigungen des Benutzers abgerufen, verändert oder gelöscht werden. Ein erfolgreicher Injection-Angriff kann Identitäten vortäuschen, neue Identitäten mit Administrationsrechten erstellen, auf alle Daten des Servers zugreifen oder Daten zerstören bzw. verändern, sodass sie nicht mehr nutzbar sind.

Zu den Arten von SQL-Injection gehören fehlerbasierte SQL-Injection, auf booleschen Fehlern basierende SQL-Injection und zeitbasierte SQL-Injection.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung verändern können. Der folgende Code soll beispielsweise alle Benutzer mit einem bestimmten Namen (`userName`) auflisten, der über ein HTML-Formular bereitgestellt wurde:

```python
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, funktioniert die Anweisung wie vorgesehen. Ein böswilliger Benutzer könnte das Verhalten dieser SQL-Anweisung jedoch vollständig in die neue Anweisung im folgenden Beispiel ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` als `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die veränderte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt, wodurch die Informationen aller Benutzer offengelegt werden. Dies funktioniert, weil der erste Teil des eingeschleusten Textes (`a';`) die ursprüngliche Anweisung abschließt.

Um solche Angriffe zu vermeiden, besteht die beste Vorgehensweise darin, parametrisierte Abfragen (vorbereitete Anweisungen) zu verwenden. Dieser Ansatz stellt sicher, dass Benutzereingaben als Datenzeichenfolge und nicht als ausführbares SQL behandelt werden, sodass der Benutzer keine speziellen SQL-Syntaxzeichen missbrauchen kann, um unbeabsichtigte SQL-Anweisungen zu erzeugen. Im Folgenden finden Sie ein Beispiel:

```sql
SELECT * FROM users WHERE name = ? AND password = ?;
```

Beim Ausführen der obigen Abfrage, beispielsweise in Python, übergeben wir `name` und `password` als Parameter, wie unten gezeigt.

```python
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Bibliotheken stellen häufig gut abstrahierte APIs bereit, die den Schutz vor SQL-Injection für Entwickler übernehmen, beispielsweise die Modelle von Django. Sie können SQL-Injection vermeiden, indem Sie gekapselte APIs verwenden, anstatt direkt rohes SQL zu schreiben.

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, ohne dessen Wissen oder Zustimmung Aktionen unter Verwendung der Anmeldedaten eines anderen Benutzers auszuführen.

Diese Art von Angriff lässt sich am besten anhand eines Beispiels erklären. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Website angemeldeten Benutzern erlaubt, Geld an ein angegebenes Konto zu senden, indem sie eine HTTP-`POST`-Anfrage mit dem Kontonamen und einem Geldbetrag verwenden. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Benutzer der Website. Dabei tarnt er die Schaltfläche _Submit_ als Link zu einer Website für „schnell reich werden“.

Wenn ein Benutzer auf die Schaltfläche zum Absenden klickt, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Website verknüpft hat. Das Hinzufügen zugehöriger Website-Cookies zu Anfragen ist normales Browserverhalten. Der Server prüft die Cookies und verwendet sie, um festzustellen, ob der Benutzer angemeldet ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Benutzer, der auf die Schaltfläche _Submit_ klickt, während er auf der Handelswebsite angemeldet ist, die Transaktion ausführt. Josh wird reich.

> [!NOTE]
> Der Trick besteht darin, dass Josh keinen Zugriff auf die Cookies des Benutzers oder dessen Zugangsdaten benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch allen Anfragen an den zugehörigen Server hinzu.

Eine Möglichkeit, diesen Angriffstyp zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, von der Website generiertes Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt, wenn das Webformular zum Durchführen von Überweisungen gesendet wird. Dieser Ansatz verhindert, dass Josh ein eigenes Formular erstellt, weil er das Geheimnis kennen müsste, das der Server für den Benutzer bereitstellt. Selbst wenn er das Geheimnis herausfände und ein Formular für einen bestimmten Benutzer erstellte, könnte er dasselbe Formular nicht mehr verwenden, um jeden Benutzer anzugreifen.

Web-Frameworks enthalten häufig solche Mechanismen zur CSRF-Prävention.

### Weitere Bedrohungen

Weitere häufige Angriffe bzw. Schwachstellen sind:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare Website der obersten Ebene bestimmt sind, und leitet sie an eine darunter liegende verborgene Seite weiter. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bank-Website anzuzeigen, während die Anmeldedaten in einem unsichtbaren, vom Angreifer kontrollierten {{htmlelement("iframe")}} erfasst werden. Clickjacking könnte auch verwendet werden, um den Benutzer dazu zu bringen, auf einer sichtbaren Website auf eine Schaltfläche zu klicken, dabei jedoch unwissentlich auf eine völlig andere Schaltfläche zu klicken. Als Abwehrmaßnahme kann Ihre Website verhindern, dass sie in einem iframe auf einer anderen Website eingebettet wird, indem sie die entsprechenden HTTP-Header setzt.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird üblicherweise erreicht, indem eine Zielwebsite mit gefälschten Anfragen überflutet wird, sodass der Zugriff auf die Website für legitime Benutzer gestört wird. Die Anfragen können zahlreich sein oder jeweils große Mengen an Ressourcen verbrauchen, beispielsweise durch langsames Lesen oder das Hochladen großer Dateien. DoS-Abwehrmaßnahmen funktionieren in der Regel, indem sie „schlechten“ Datenverkehr erkennen und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmaßnahmen befinden sich typischerweise vor oder im Webserver und sind nicht Teil der Webanwendung selbst.
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei- und Offenlegung). Bei diesem Angriff versucht ein böswilliger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, auf die er keinen Zugriff haben sollte. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übergeben kann, die Zeichen zur Navigation im Dateisystem enthalten, beispielsweise `../../`. Die Lösung besteht darin, Eingaben vor ihrer Verwendung zu bereinigen.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Benutzer eine „unbeabsichtigte“ Datei zur Anzeige oder Ausführung in Daten angeben, die an den Server übergeben werden. Beim Laden kann diese Datei auf dem Webserver oder auf der Clientseite ausgeführt werden, was zu einem XSS-Angriff führt. Die Lösung besteht darin, Eingaben vor ihrer Verwendung zu bereinigen.
- [Command Injection](https://community.owasp.org/attacks/Command_Injection). Command-Injection-Angriffe ermöglichen es einem böswilligen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu bereinigen, bevor sie in Systemaufrufen verwendet werden könnten.

Eine umfassende Auflistung der Bedrohungen für die Website-Sicherheit finden Sie unter [Category: Web security exploits](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Category: Attack](https://community.owasp.org/attacks/) (Open Web Application Security Project).

## Einige wichtige Botschaften

Fast alle Sicherheits-Exploits in den vorherigen Abschnitten sind erfolgreich, wenn die Webanwendung Daten aus dem Browser vertraut. Unabhängig davon, was Sie sonst noch tun, um die Sicherheit Ihrer Website zu verbessern, sollten Sie alle von Benutzern stammenden Daten bereinigen, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an einen Aufruf des Betriebssystems oder Dateisystems übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **Daten aus dem Browser niemals zu vertrauen**. Dies umfasst unter anderem Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie von Benutzern hochgeladene Dateien. Prüfen und bereinigen Sie stets alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie unternehmen können:

- Verwenden Sie eine wirksamere Passwortverwaltung. Fördern Sie die Verwendung starker Passwörter. Erwägen Sie eine Zwei-Faktor-Authentifizierung für Ihre Website, sodass der Benutzer zusätzlich zu einem Passwort einen weiteren Authentifizierungscode eingeben muss. Dieser wird üblicherweise über physische Hardware bereitgestellt, die nur der Benutzer besitzt, etwa durch einen per SMS an sein Telefon gesendeten Code.
- Konfigurieren Sie Ihren Webserver für die Verwendung von {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS). HTTPS verschlüsselt Daten, die zwischen Ihrem Client und Server gesendet werden. Dadurch wird sichergestellt, dass Anmeldedaten, Cookies, Daten aus `POST`-Anfragen und Header-Informationen nicht leicht für Angreifer verfügbar sind.
- Behalten Sie die beliebtesten Bedrohungen im Blick (die [aktuelle OWASP-Liste finden Sie hier](https://owasp.org/projects/top-ten)) und behandeln Sie zuerst die häufigsten Schwachstellen.
- Verwenden Sie [Tools zum Scannen auf Schwachstellen](https://community.owasp.org/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Website durchzuführen. Später kann Ihre sehr erfolgreiche Website möglicherweise auch Fehler finden, indem Sie eine Bug-Bounty anbieten, [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und zeigen Sie nur Daten an, die Sie benötigen. Wenn Ihre Benutzer beispielsweise sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur so viel von der Kartennummer an, dass sie vom Benutzer identifiziert werden kann, aber nicht genug, damit sie von einem Angreifer kopiert und auf einer anderen Website verwendet werden kann. Das derzeit häufigste Muster besteht darin, nur die letzten vier Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software aktuell.
  Die meisten Server erhalten regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder abmildern.
  Planen Sie nach Möglichkeit regelmäßige automatisierte Updates und idealerweise zu Zeiten, in denen Ihre Website den geringsten Datenverkehr aufweist.
  Es ist am besten, Ihre Daten vor dem Update zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass es auf Ihrem Server keine Kompatibilitätsprobleme gibt.

Web-Frameworks können helfen, viele der häufigeren Schwachstellen abzumildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Websicherheit und einige der häufigeren Bedrohungen erläutert, vor denen Ihre Website sich schützen sollte. Am wichtigsten ist, dass Sie verstehen sollten, dass eine Webanwendung keinen Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten bereinigt werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel haben Sie das Ende [dieses Moduls](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) erreicht, das Ihre ersten Schritte in der serverseitigen Website-Programmierung behandelt. Wir hoffen, dass Ihnen das Erlernen dieser grundlegenden Konzepte gefallen hat und Sie nun bereit sind, ein Web-Framework auszuwählen und mit dem Programmieren zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
