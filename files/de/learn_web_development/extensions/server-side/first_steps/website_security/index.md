---
title: Website-Sicherheit
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Website-Designs und der Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Website-Security-Guru machen, aber er hilft Ihnen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu härten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Computerkenntnisse.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der häufigsten Bedrohungen für die Sicherheit von Webanwendungen und
        was Sie tun können, um das Risiko eines Hacks auf Ihrer Seite zu verringern.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir von Websites, die aufgrund von „Denial of Service“-Angriffen nicht verfügbar sind oder auf ihren Startseiten geänderte (und oft schädliche) Informationen anzeigen. In anderen bekannten Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in die Öffentlichkeit geleakt, was die Benutzer der Website sowohl persönlicher Peinlichkeit als auch finanzieller Risiken aussetzt.

Zweck der Website-Sicherheit ist es, diese (oder andere) Arten von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit _ist die Handlung/Praxis, Websites vor unbefugtem Zugriff, Nutzung, Änderung, Zerstörung oder Unterbrechung zu schützen_.

Effektive Website-Sicherheit erfordert Gestaltungsaufwand über die gesamte Website hinweg: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien für das Erstellen und Erneuern von Passwörtern und dem clientseitigen Code. Auch wenn all das sehr bedrohlich klingt, gibt es gute Nachrichten: Wenn Sie ein serverseitiges Web-Framework verwenden, wird es fast immer „standardmäßig“ robuste und gut durchdachte Abwehrmechanismen gegen eine Reihe der häufigeren Angriffe bieten. Andere Angriffe können durch Ihre Webserver-Konfiguration gemildert werden, zum Beispiel durch Aktivierung von HTTPS. Schließlich gibt es öffentlich verfügbare Tools zur Schwachstellenscanner, die Ihnen helfen können festzustellen, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen weitere Details über einige häufige Bedrohungen und einige einfache Maßnahmen, die Sie ergreifen können, um Ihre Seite zu schützen.

> [!NOTE]
> Dies ist ein einführendes Thema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, es ist jedoch nicht erschöpfend.

## Bedrohungen der Website-Sicherheit

Dieser Abschnitt listet nur einige der häufigsten Website-Bedrohungen auf und wie sie abgemildert werden. Achten Sie beim Lesen darauf, wie erfolgreich Bedrohungen sind, wenn die Webanwendung entweder dem Browser vertraut oder nicht _paranoid genug_ bezüglich der Daten ist, die vom Browser kommen.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _durch_ die Website in die Browser anderer Nutzer zu injizieren. Da der injizierte Code zusammen mit der Website zum Browser gelangt, wird er _vertraut_ und kann Dinge tun wie das Übertragen des Autorisierungs-Cookies des Nutzers an den Angreifer. Hat der Angreifer das Cookie, kann er sich als der Nutzer auf der Website anmelden und alles tun, was der Nutzer kann, etwa Kreditkartendetails einsehen, Kontaktdaten sehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektierte_ und _persistente_ unterteilt, basierend darauf, wie die Seite die injizierten Skripte an einen Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn Benutzerinhalte, die an den Server übergeben werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Alle Skripte in den ursprünglichen Benutzerdaten werden beim Laden der neuen Seite ausgeführt.
  Ein Beispiel ist eine Suchfunktion auf einer Website, bei der die Suchbegriffe als URL-Parameter kodiert werden und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink konstruieren, der ein bösartiges Skript als Parameter enthält (z. B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und ihn an einen anderen Benutzer senden. Wenn der Zielbenutzer auf diesen "interessanten Link" klickt, wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie bereits besprochen, erhält der Angreifer dadurch alle benötigten Informationen, um als Zielbenutzer auf die Seite zu gelangen, was potenziell Käufe als der Benutzer ermöglicht oder deren Kontaktdaten teilt.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript _auf der Website gespeichert_ und später unverändert für andere Benutzer zur unfreiwilligen Ausführung wieder angezeigt wird.
  Ein Beispiel dafür ist ein Diskussionsforum, das Kommentare akzeptiert, welche unveränderten HTML-Code enthalten könnten und ein bösartiges Skript eines Angreifers speichert. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann die Informationen übermitteln, die erforderlich sind, um auf das Benutzerkonto zuzugreifen. Diese Art von Angriff ist extrem populär und mächtig, weil der Angreifer möglicherweise nicht einmal direkten Kontakt zu den Opfern hat.

Obwohl Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle Daten vom Browser potenziell anfällig, zum Beispiel von Cookies, die vom Browser gerendert wurden, oder von Benutzerdateien, die hochgeladen und angezeigt werden.

Der beste Schutz gegen XSS-Schwachstellen besteht darin, jegliche Markups, die potenziell Anweisungen zum Ausführen von Code enthalten könnten, zu entfernen oder zu deaktivieren. Für HTML gilt dies für Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Vorgang des Änderens von Benutzerdaten, damit sie nicht zur Ausführung von Skripten oder zur Beeinflussung der Ausführung von Server-Code genutzt werden können, wird als Eingabesäuberung (Input-Sanitization) bezeichnet. Viele Web-Frameworks reinigen Benutzereingaben von HTML-Formularen standardmäßig automatisch.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen es böswilligen Benutzern, willkürlichen SQL-Code auf einer Datenbank auszuführen, der Zugriff auf Daten ermöglicht, diese modifiziert oder löscht, ungeachtet der Berechtigungen des Benutzers. Ein erfolgreicher Injektionsangriff könnte Identitäten vortäuschen, neue Identitäten mit Administratorrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/verändern, um sie unbrauchbar zu machen.

SQL-Injection-Arten umfassen Fehlerbasierte SQL-Injection, SQL-Injection basierend auf booleschen Fehlern, und zeitbasierte SQL-Injection.

Diese Schwachstelle tritt auf, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung ändern können. Zum Beispiel soll der folgende Code alle Benutzer mit einem bestimmten Namen (`userName`) auflisten, der aus einem HTML-Formular stammt:

```python
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, funktioniert die Anweisung wie beabsichtigt. Ein böswilliger Benutzer könnte jedoch das Verhalten dieser SQL-Anweisung völlig ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die geänderte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt (was die Informationen jedes Benutzers offenlegt). Dies funktioniert, weil der erste Teil der eingefügten Zeichenfolge (`a';`) die ursprüngliche Anweisung vervollständigt.

Um solche Angriffe zu vermeiden, ist es am besten, parametrisierte Abfragen (vorbereitete Statements) zu verwenden. Diese Methode stellt sicher, dass Benutzereingaben als Datenzeichenfolge behandelt werden und nicht als ausführbares SQL, sodass der Benutzer keine SQL-Sonderzeichensyntax missbrauchen kann, um unbeabsichtigte SQL-Anweisungen zu generieren. Das folgende Beispiel zeigt dies:

```sql
SELECT * FROM users WHERE name = ? AND password = ?;
```

Beim Ausführen der obigen Abfrage, zum Beispiel in Python, übergeben wir den `name` und den `password` als Parameter, wie unten gezeigt.

```python
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Bibliotheken bieten oft gut abstrahierte APIs, die den Schutz vor SQL-Injection für den Entwickler übernehmen, wie zum Beispiel die Modelle von Django. Man kann SQL-Injection vermeiden, indem man gekapselte APIs verwendet, anstatt rohe SQL-Befehle direkt zu schreiben.

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen einem böswilligen Benutzer, Aktionen mit den Anmeldedaten eines anderen Benutzers ohne dessen Wissen oder Zustimmung auszuführen.

Diese Art von Angriff lässt sich am besten anhand eines Beispiels erklären. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Seite es eingeloggten Benutzern erlaubt, mit einer HTTP-`POST`-Anfrage Geld an ein bestimmtes Konto zu senden, das den Kontonamen und einen Geldbetrag enthält. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Benutzer der Seite (mit dem _Absenden_-Button, der als Link zu einer "schnell reich werden"-Website getarnt ist).

Wenn ein Benutzer auf die Absenden-Schaltfläche klickt, wird eine HTTP-`POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle clientseitigen Cookies enthält, die der Browser mit der Website assoziiert (das Hinzufügen assoziierter Seiten-Cookies zu Anfragen ist normales Browserverhalten). Der Server überprüft die Cookies und verwendet sie, um zu bestimmen, ob der Benutzer eingeloggt ist und die Berechtigung hat, die Transaktion auszuführen.

Das Ergebnis ist, dass jeder Benutzer, der auf die _Absenden_-Schaltfläche klickt, während er auf der Handelsseite eingeloggt ist, die Transaktion ausführt. Josh wird reich.

> [!NOTE]
> Der Trick dabei ist, dass Josh keinen Zugriff auf die Cookies (oder Zugangsdaten) des Benutzers benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch in alle Anfragen an den zugehörigen Server ein.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches sitegeneriertes Geheimnis enthalten. Das Geheimnis wird vom Server bereitgestellt, wenn das Webformular, das für Überweisungen genutzt wird, gesendet wird. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server für den Benutzer bereitstellt. Selbst wenn er das Geheimnis herausfindet und ein Formular für einen bestimmten Benutzer erstellt, könnte er dieses Formular nicht mehr nutzen, um jeden Benutzer anzugreifen.

Web-Frameworks enthalten oft Mechanismen zum Schutz vor CSRF.

### Weitere Bedrohungen

Andere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff entführt ein böswilliger Benutzer Klicks, die für eine sichtbare oberste Website gedacht sind, und leitet sie an eine darunter liegende versteckte Seite um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bankseite anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, das vom Angreifer kontrolliert wird. Clickjacking könnte auch dazu verwendet werden, den Benutzer dazu zu bringen, auf eine Schaltfläche auf einer sichtbaren Website zu klicken, wobei er dabei unwissentlich auf eine völlig andere Schaltfläche klickt. Als Verteidigung kann Ihre Seite verhindern, dass sie in einem iframe in einer anderen Seite eingebettet wird, indem die entsprechenden HTTP-Header gesetzt werden.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird normalerweise durch das Überfluten einer Zielseite mit gefälschten Anfragen erreicht, sodass der Zugriff auf eine Seite für legitime Benutzer gestört wird. Die Anfragen können zahlreich sein oder einzeln große Mengen an Ressourcen verbrauchen (z.B. langsame Lesevorgänge oder Hochladen großer Dateien). DoS-Abwehrmechanismen arbeiten normalerweise, indem sie "schlechten" Traffic identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmechanismen befinden sich typischerweise vor oder im Webserver (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://de.wikipedia.org/wiki/Directory_Traversal) (File and disclosure). Bei diesem Angriff versucht ein böswilliger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, die sie nicht zugreifen können sollten. Diese Schwachstelle tritt auf, wenn der Benutzer in der Lage ist, Dateinamen zu übergeben, die Dateisystem-Navigationszeichen enthalten (zum Beispiel `../../`). Die Lösung besteht darin, Eingaben zu säubern, bevor sie verwendet werden.
- [File Inclusion](https://de.wikipedia.org/wiki/Dateiinklusion). Bei diesem Angriff kann ein Benutzer eine "unerwünschte" Datei zur Anzeige oder Ausführung in Daten an den Server übergeben. Beim Laden könnte diese Datei auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führt). Die Lösung besteht darin, Eingaben zu säubern, bevor sie verwendet werden.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Command-Injection-Angriffe ermöglichen es einem böswilligen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu säubern, bevor sie in Systemaufrufen verwendet werden könnten.

Für eine umfassende Liste von Website-Sicherheitsbedrohungen siehe [Kategorie: Web-Sicherheitsexploits](https://de.wikipedia.org/wiki/Kategorie:Websicherheit) (Wikipedia) und [Kategorie: Angriff](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Einige Schlüsselbotschaften

Fast alle in den vorangegangenen Abschnitten beschriebenen Sicherheitsexploits sind erfolgreich, wenn die Webanwendung den Daten aus dem Browser vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle vom Benutzer stammenden Daten säubern, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an ein Betriebssystem oder einen Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist **niemals den Daten aus dem Browser zu vertrauen**. Dies umfasst, aber beschränkt sich nicht auf Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie von Benutzern hochgeladene Dateien. Überprüfen und säubern Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie effektivere Passwortmanagement-Praktiken. Fördern Sie starke Passwörter. Erwägen Sie die Implementierung einer Zwei-Faktor-Authentifizierung auf Ihrer Website, sodass ein zusätzliches Authentifizierungscode, der in der Regel über physische Hardware, die nur der Benutzer besitzt, geliefert wird, erforderlich ist (normalerweise ein Code, der per SMS an ihr Telefon gesendet wird).
- Konfigurieren Sie Ihren Webserver, um {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) zu verwenden. HTTPS verschlüsselt die zwischen Ihrem Client und Server gesendeten Daten. Dies stellt sicher, dass Anmeldeinformationen, Cookies, in `POST`-Anfragen enthaltene Daten und Header-Informationen nicht leicht für Angreifer zugänglich sind.
- Behalten Sie die populärsten Bedrohungen im Blick (die [aktuelle OWASP-Liste finden Sie hier](https://owasp.org/www-project-top-ten/)) und beheben Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Schwachstellen-Scanning-Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Website durchzuführen. Später, wenn Ihre sehr erfolgreiche Webseite auch Fehler durch ein Bug-Bounty-Programm findet [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und anzeigen Sie nur Daten, die Sie benötigen. Wenn Ihre Benutzer sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur so viel der Kartennummer an, dass der Nutzer sie erkennen kann, aber nicht genug, dass ein Angreifer sie kopieren und auf einer anderen Webseite verwenden kann. Das häufigste Muster zurzeit ist, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie die Software aktuell.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder entschärfen.
  Falls möglich, planen Sie regelmäßige automatisierte Updates und idealerweise, planen Sie Updates zu Zeiten, in denen Ihre Website das geringste Verkehrsaufkommen hat.
  Am besten sichern Sie Ihre Daten vor dem Update und testen neue Softwareversionen, um sicherzugehen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können dazu beitragen, viele der häufigsten Schwachstellen zu mindern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Web-Sicherheit und einige der häufigeren Bedrohungen erklärt, gegen die Ihre Website versuchen sollte, sich zu schützen. Am wichtigsten sollten Sie verstehen, dass eine Webanwendung keine Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten gesäubert werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel haben Sie das Ende von [diesem Modul](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) erreicht, das Ihre ersten Schritte in der serverseitigen Website-Programmierung abdeckt. Wir hoffen, dass Sie daran Gefallen gefunden haben, diese grundlegenden Konzepte zu lernen, und Sie nun bereit sind, ein Web-Framework auszuwählen und mit der Programmierung zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
