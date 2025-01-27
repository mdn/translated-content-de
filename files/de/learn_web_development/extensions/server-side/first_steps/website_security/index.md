---
title: Website-Sicherheit
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 36795aa260fb585b39082bdd658cabc913dc52d8
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Webdesigns und der Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Website-Sicherheitsexperten machen, aber er wird Ihnen helfen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

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
        zu erfahren, was Sie tun können, um das Risiko eines Hackerangriffs auf Ihre Seite zu reduzieren.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir davon, dass Websites aufgrund von "Denial of Service"-Angriffen nicht verfügbar sind oder auf ihren Startseiten geänderte (und oft schädliche) Informationen anzeigen. In anderen prominenten Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten öffentlich zugänglich gemacht, was Website-Nutzer sowohl persönlicher Peinlichkeit als auch finanziellem Risiko aussetzt.

Der Zweck der Website-Sicherheit besteht darin, diese (oder ähnliche) Arten von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit _ist der Akt/die Praxis, Websites vor unbefugtem Zugriff, Nutzung, Änderung, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Gestaltungsaufwand für die gesamte Website: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihrer Richtlinien zur Erstellung und Erneuerung von Passwörtern und dem clientseitigen Code. Während all das sehr bedrohlich klingt, ist die gute Nachricht, dass, wenn Sie ein serverseitiges Web-Framework verwenden, es mit hoher Wahrscheinlichkeit "standardmäßig" robuste und durchdachte Abwehrmechanismen gegen einige der häufigeren Angriffe bereitstellt. Andere Angriffe können durch Ihre Webserver-Konfiguration gemindert werden, beispielsweise durch die Aktivierung von HTTPS. Schließlich gibt es öffentlich verfügbare Schwachstellen-Scanner-Tools, die Ihnen helfen können, herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen detailliertere Informationen über einige häufige Bedrohungen und einige einfache Schritte, die Sie unternehmen können, um Ihre Seite zu schützen.

> [!NOTE]
> Dies ist ein Einführungsartikel, der Ihnen helfen soll, über Website-Sicherheit nachzudenken, aber er ist nicht erschöpfend.

## Website-Sicherheitsbedrohungen

Dieser Abschnitt listet nur einige der häufigsten Website-Bedrohungen und deren Bewältigung auf. Beim Lesen sollten Sie feststellen, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung den Daten aus dem Browser entweder vertraut oder nicht _paranoid genug_ ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff zur Beschreibung einer Klasse von Angriffen, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Da der injizierte Code vom Browser von der Website kommt, wird der Code _vertraut_ und kann z.B. das Autorisierungscookie des Benutzers an den Angreifer senden. Wenn der Angreifer das Cookie hat, kann er sich wie der Benutzer auf der Website anmelden und alles tun, was der Benutzer kann, z.B. auf seine Kreditkartendaten zugreifen, Kontaktdaten einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektiert_ und _persistent_ unterteilt, basierend darauf, wie die Website die injizierten Skripte an einen Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn Benutzerinhalte, die an den Server gesendet werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Jegliche Skripte im ursprünglichen Benutzerinhalt werden ausgeführt, wenn die neue Seite geladen wird.
  Zum Beispiel, stellen Sie sich eine Suchfunktion auf einer Website vor, bei der die Suchbegriffe als URL-Parameter kodiert sind und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink mit einem bösartigen Skript als Parameter (z.B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) konstruieren und ihn einem anderen Benutzer per E-Mail senden. Wenn der Zielbenutzer auf diesen "interessanten Link" klickt, wird das Skript beim Anzeigen der Suchergebnisse ausgeführt. Wie bereits erwähnt, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als Zielbenutzer auf der Website anzumelden, was möglicherweise dazu führt, dass er Käufe als Benutzer tätigt oder deren Kontaktdaten weitergibt.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ wird und später unverändert für andere Benutzer zur unwissentlichen Ausführung erneut angezeigt wird.
  Zum Beispiel könnte ein Diskussionsforum, das Kommentare akzeptiert, die unverändertes HTML enthalten, ein bösartiges Skript von einem Angreifer speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen schicken, die zur Kontoübernahme des Benutzers benötigt werden. Diese Art von Angriff ist äußerst populär und mächtig, da der Angreifer möglicherweise keinen direkten Kontakt zu den Opfern hat.

Während die Daten von `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle Daten aus dem Browser potenziell gefährdet, wie z.B. von Browsern gerenderte Cookie-Daten oder hochgeladene Benutzerdateien, die angezeigt werden.

Die beste Verteidigung gegen XSS-Schwachstellen besteht darin, alle Markup-Elemente zu entfernen oder zu deaktivieren, die Anweisungen zur Ausführung von Code enthalten könnten. Für HTML umfasst dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess der Modifikation von Benutzerdaten, damit sie nicht zur Ausführung von Skripten oder anderweitigen Beeinflussung der Ausführung von Servercode genutzt werden können, wird als Eingabesäuberung bezeichnet. Viele Web-Frameworks säubern Benutzerinput aus HTML-Formularen standardmäßig automatisch.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Benutzerberechtigungen aufgerufen, geändert oder gelöscht werden können. Ein erfolgreicher Injection-Angriff könnte Identitäten vortäuschen, neue Identitäten mit Administrationsrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/verändern, um sie unbrauchbar zu machen.

SQL-Injection-Arten umfassen fehlerbasierte SQL-Injection, SQL-Injection basierend auf logischen Fehlern und zeitbasierte SQL-Injection.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung ändern können. Zum Beispiel ist der folgende Code dazu gedacht, alle Benutzer mit einem bestimmten Namen (`userName`) aufzulisten, der aus einem HTML-Formular übermittelt wurde:

```python
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, funktioniert die Anweisung wie beabsichtigt. Ein böswilliger Benutzer könnte jedoch das Verhalten dieser SQL-Anweisung vollständig ändern, um die neue Anweisung im folgenden Beispiel zu erstellen, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erzeugt eine gültige SQL-Anweisung, die die `users` Tabelle löscht und alle Daten aus der `userinfo` Tabelle auswählt (was die Informationen aller Benutzer preisgibt). Dies funktioniert, weil der erste Teil des injizierten Textes (`a';`) die ursprüngliche Anweisung vervollständigt.

Um solche Angriffe zu vermeiden, wird als Best Practice die Verwendung von parametrierten Abfragen (Prepared Statements) empfohlen. Dieser Ansatz stellt sicher, dass die Benutzereingabe als Datenstring und nicht als ausführbares SQL behandelt wird, sodass der Benutzer die speziellen SQL-Syntaxzeichen nicht missbrauchen kann, um unbeabsichtigte SQL-Anweisungen zu generieren. Das folgende ist ein Beispiel:

```sql
SELECT * FROM users WHERE name = ? AND password = ?;
```

Beim Ausführen der obigen Abfrage, z.B. in Python, übergeben wir den `name` und das `password` als Parameter, wie unten gezeigt.

```python
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Bibliotheken bieten häufig gut abstrahierte APIs, die den Schutz vor SQL-Injection für den Entwickler handhaben, wie z.B. die Modelle von Django. Sie können SQL-Injection vermeiden, indem Sie gekapselte APIs verwenden anstatt direkt rohe SQL-Abfragen zu schreiben.

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen einem böswilligen Benutzer, Aktionen mit den Anmeldeinformationen eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen.

Diese Art von Angriff wird am besten durch ein Beispiel erklärt. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Website eingeloggt Benutzern erlaubt, Geld mittels einer HTTP-`POST`-Anfrage an ein bestimmtes Konto zu senden, die den Konto-Namen und einen Geldbetrag enthält. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und versendet es per E-Mail an andere Nutzer der Website (mit der _Absende_-Schaltfläche, die als Link zu einer "schnell reich werden"-Seite getarnt ist).

Wenn ein Benutzer auf die Absende-Schaltfläche klickt, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Seite in Verbindung bringt (das Hinzufügen von zugehörigen Website-Cookies zu Anfragen ist normales Browserverhalten). Der Server wird die Cookies überprüfen und verwendet sie, um festzustellen, ob der Benutzer eingeloggt ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Benutzer, der auf die _Absende_-Schaltfläche klickt, während er auf der Handelsseite eingeloggt ist, die Transaktion ausführt. Josh wird reich.

> [!NOTE]
> Der Trick hierbei ist, dass Josh keinen Zugang zu den Cookies (oder Zugangsdaten) des Benutzers benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch in alle Anfragen an den zugehörigen Server ein.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, von der Website generiertes Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt, wenn das Webformular zum Geldtransfer gesendet wird. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server dem Benutzer bereitstellt. Auch wenn er das Geheimnis herausfände und ein Formular für einen bestimmten Benutzer erstellt, könnte er dasselbe Formular nicht länger für Angriffe auf alle Benutzer verwenden.

Web-Frameworks beinhalten häufig solche CSRF-Präventionsmechanismen.

### Weitere Bedrohungen

Weitere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff kapert ein böswilliger Benutzer Klicks, die für eine sichtbare oberste Seite bestimmt sind, und leitet sie zu einer versteckten Seite darunter. Diese Technik könnte verwendet werden, um zum Beispiel eine legitime Bankseite anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, der vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um einen Benutzer dazu zu bringen, auf eine Schaltfläche auf einer sichtbaren Seite zu klicken, wobei er tatsächlich unwissentlich eine völlig andere Schaltfläche anklickt. Als Abwehrmaßnahme kann Ihre Site verhindern, dass sie in einem iframe auf einer anderen Site eingebettet wird, indem die entsprechenden HTTP-Header gesetzt werden.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird in der Regel durch Überfluten einer Zielseite mit gefälschten Anfragen erreicht, sodass der Zugriff auf eine Seite für legitime Benutzer unterbrochen wird. Die Anfragen können zahlreich sein oder sie können einzeln große Ressourcenmengen verbrauchen (z.B. langsames Lesen oder Hochladen großer Dateien). DoS-Abwehrmaßnahmen funktionieren in der Regel, indem sie "schlechten" Verkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmaßnahmen sind typischerweise vor oder im Webserver lokalisiert (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://de.wikipedia.org/wiki/Verzeichnisausbruch) (Dateien und Offenlegung). Bei diesem Angriff versucht ein böswilliger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, auf die er keinen Zugriff haben sollte. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übergeben kann, die Navigationszeichen des Dateisystems enthalten (zum Beispiel `../../`). Die Lösung besteht darin, Eingaben zu bereinigen, bevor sie verwendet werden.
- [Datei-Inklusion](https://de.wikipedia.org/wiki/Datei-Inklusion). Bei diesem Angriff kann ein Benutzer eine „unbeabsichtigte“ Datei zur Anzeige oder Ausführung in Daten angeben, die an den Server übergeben werden. Bei Laden dieser Datei könnte sie auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führt). Die Lösung besteht darin, Eingaben zu bereinigen, bevor sie verwendet werden.
- [Befehlsinjektion](https://owasp.org/www-community/attacks/Command_Injection). Befehlsinjektionsangriffe ermöglichen es einem böswilligen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu bereinigen, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Für eine umfassende Liste der Bedrohungen der Website-Sicherheit siehe [Kategorie: Web-Sicherheitsanfälligkeiten](https://de.wikipedia.org/wiki/Kategorie:Web-Sicherheitsanfälligkeiten) (Wikipedia) und [Kategorie: Angriff](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Einige wichtige Botschaften

Fast alle der in den vorhergehenden Abschnitten erwähnten Sicherheitsexploits sind erfolgreich, wenn die Webanwendung den Daten aus dem Browser vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle Benutzerdaten bereinigen, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an ein Betriebssystem oder einen Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals den Daten aus dem Browser zu vertrauen**. Dies schließt, aber ist nicht beschränkt auf Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie vom Benutzer hochgeladene Dateien. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie ergreifen können, sind:

- Verwenden Sie effektivere Passwortverwaltung. Ermutigen Sie zu starken Passwörtern. Ziehen Sie eine Zwei-Faktor-Authentifizierung für Ihre Seite in Betracht, sodass der Benutzer neben einem Passwort einen weiteren Authentifizierungscode eingeben muss (normalerweise einen, der über einige Hardware geliefert wird, die nur der Benutzer hat, wie ein Code in einer SMS, die an sein Telefon gesendet wird).
- Konfigurieren Sie Ihren Webserver zur Verwendung von {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS). HTTPS verschlüsselt die zwischen Client und Server gesendeten Daten. Dies stellt sicher, dass Anmeldedaten, Cookies, `POST`-Anfrage-Daten und Header-Informationen für Angreifer nicht leicht zugänglich sind.
- Behalten Sie die populärsten Bedrohungen im Auge (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und adressieren Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Schwachstellen-Scanning-Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Seite durchzuführen. Später in der Entwicklung Ihrer sehr erfolgreichen Website können Sie Bugs auch durch das Angebot von Bug-Belohnungen finden [wie Mozilla hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und zeigen Sie nur Daten an, die Sie benötigen. Wenn Ihre Nutzer sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur genug der Kartennummer an, damit sie vom Benutzer identifiziert werden kann, aber nicht genug, damit sie von einem Angreifer kopiert und auf einer anderen Seite verwendet werden kann. Das häufigste Muster zu dieser Zeit ist es, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder mindern.
  Wenn möglich, planen Sie regelmäßige automatische Updates und idealerweise während Zeiten, in denen Ihre Website den geringsten Verkehr hat.
  Es ist am besten, Ihre Daten vor dem Update zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können helfen, viele der häufigeren Schwachstellen zu mindern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Web-Sicherheit und einige der häufigeren Bedrohungen erklärt, gegen die Ihre Website versuchen sollte, sich zu schützen. Das Wichtigste ist, dass Sie verstehen sollten, dass eine Webanwendung keinen Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten bereinigt werden, bevor sie angezeigt, in SQL-Abfragen oder Dateisystemaufrufen verwendet werden.

Mit diesem Artikel sind Sie am Ende [dieses Moduls](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) angekommen, das Ihre ersten Schritte in der serverseitigen Website-Programmierung behandelt. Wir hoffen, dass Sie Freude daran hatten, diese grundlegenden Konzepte zu lernen, und jetzt bereit sind, ein Web-Framework auszuwählen und mit dem Programmieren zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
