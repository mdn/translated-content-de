---
title: Website-Sicherheit
slug: Learn_web_development/Extensions/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Website-Designs und der Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Experten für Website-Sicherheit machen, aber er wird Ihnen helfen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Computerkenntnisse.</td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der häufigsten Bedrohungen für die Sicherheit von
        Webanwendungen und was Sie tun können, um das Risiko zu verringern, dass
        Ihre Website gehackt wird.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Wir hören regelmäßig von Websites, die aufgrund von Denial-of-Service-Angriffen nicht verfügbar sind oder modifizierte (und oft schädliche) Informationen auf ihren Homepages anzeigen. In anderen prominenten Fällen sind Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in die Öffentlichkeit gelangt, was Nutzer der Website sowohl persönlichem Ärgernis als auch finanziellem Risiko aussetzt.

Der Zweck der Website-Sicherheit besteht darin, diese (oder andere) Arten von Angriffen zu verhindern. Die formale Definition von Website-Sicherheit _ist der Akt/die Praxis, Websites vor unbefugtem Zugriff, Nutzung, Modifikation, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Designanstrengungen in der gesamten Website: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern und dem clientseitigen Code. Während all das sehr bedrohlich klingt, ist die gute Nachricht, dass, wenn Sie ein serverseitiges Web-Framework verwenden, es fast sicher "standardmäßig" robuste und gut durchdachte Verteidigungsmechanismen gegen eine Reihe der häufigsten Angriffe ermöglicht. Andere Angriffe können durch Ihre Webserver-Konfiguration gemildert werden, zum Beispiel durch Aktivieren von HTTPS. Schließlich gibt es öffentlich verfügbare Schwachstellenscanner-Tools, die Ihnen helfen können, herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen mehr Details über einige häufige Bedrohungen und einige der einfachen Schritte, die Sie unternehmen können, um Ihre Website zu schützen.

> [!NOTE]
> Dies ist ein einführendes Thema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, aber es ist nicht erschöpfend.

## Website-Sicherheitsbedrohungen

Dieser Abschnitt listet nur einige der häufigsten Bedrohungen für Websites und deren Abwehrmaßnahmen auf. Beachten Sie beim Lesen, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung den Daten aus dem Browser vertraut oder nicht _paranoid genug_ gegenüber diesen Daten ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer einzuschleusen. Da der eingefügte Code vom Browser von der Seite kommt, wird der Code _vertraut_ und kann Dinge tun wie das Senden des Autorisierungs-Cookies des Benutzers an den Angreifer. Wenn der Angreifer das Cookie hat, kann er sich auf einer Website einloggen, als wäre er der Benutzer, und alles tun, was der Benutzer kann, wie zum Beispiel auf Kreditkartendaten zugreifen, Kontaktdaten einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektiert_ und _persistent_ unterteilt, je nachdem, wie die Seite die eingespritzten Skripte an einen Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn Benutzerinhalte, die an den Server übergeben werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Alle Skripte im ursprünglichen Benutzerinhalt werden ausgeführt, wenn die neue Seite geladen wird.
  Ein Beispiel ist eine Suchfunktion auf einer Website, bei der die Suchbegriffe als URL-Parameter kodiert sind und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink konstruieren, der ein bösartiges Skript als Parameter enthält (z.B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und ihn an einen anderen Benutzer senden. Wenn der Zielbenutzer auf diesen "interessanten Link" klickt, wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie zuvor erläutert, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als der Zielbenutzer auf der Website anzumelden, Einkäufe als der Benutzer zu tätigen oder deren Kontaktdetails zu teilen.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ und später unverändert für andere Benutzer ungewollt zur Ausführung erneut angezeigt wird.
  Ein Beispiel ist ein Diskussionsforum, das Kommentare akzeptiert, die unmodifizierten HTML-Inhalt enthalten. Es könnte ein bösartiges Skript eines Angreifers gespeichert werden. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann an den Angreifer die Informationen senden, die erforderlich sind, um auf das Benutzerkonto zuzugreifen. Diese Art von Angriff ist sehr beliebt und mächtig, da der Angreifer möglicherweise keinen direkten Kontakt zu den Opfern hat.

Obwohl die Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle Daten aus dem Browser potenziell anfällig, z.B. Cookie-Daten, die vom Browser gerendert werden, oder vom Benutzer hochgeladene und angezeigte Dateien.

Der beste Schutz gegen XSS-Schwachstellen besteht darin, jegliches Markup zu entfernen oder zu deaktivieren, das potenziell Anweisungen zum Ausführen von Code enthalten könnte. Für HTML gehören dazu Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess der Modifikation von Benutzerdaten, so dass sie nicht für Skriptausführung oder anderweitig zur Beeinflussung der Ausführung von Server-Code verwendet werden können, wird als Eingabesäuberung bezeichnet. Viele Web-Frameworks säubern automatisch Benutzereingaben aus HTML-Formularen standardmäßig.

### SQL-Injektion

SQL-Injektions-Schwachstellen ermöglichen es böswilligen Benutzern, beliebige SQL-Code auf einer Datenbank auszuführen, wodurch Daten unabhängig von den Benutzerberechtigungen abgerufen, geändert oder gelöscht werden können. Ein erfolgreicher Injektionsangriff könnte Identitäten vortäuschen, neue Identitäten mit Administrationsrechten schaffen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/modifizieren, um sie unbenutzbar zu machen.

Zu den Arten der SQL-Injektion gehören Fehler-basierte SQL-Injektion, SQL-Injektion basierend auf booleschen Fehlern und zeitbasierte SQL-Injektion.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die in eine darunter liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung ändern können. Zum Beispiel soll der folgende Code alle Benutzer mit einem bestimmten Namen (`userName`) auflisten, der aus einem HTML-Formular übermittelt wurde:

```python
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, funktioniert die Anweisung wie beabsichtigt. Ein bösartiger Benutzer könnte jedoch das Verhalten dieser SQL-Anweisung vollständig ändern zur neuen Anweisung im folgenden Beispiel, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` spezifiziert.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erstellt eine gültige SQL-Anweisung, die die `users`-Tabelle löscht und alle Daten aus der `userinfo`-Tabelle auswählt (was die Informationen jedes Benutzers offenbart). Dies funktioniert, weil der erste Teil des eingespritzten Textes (`a';`) die ursprüngliche Anweisung abschließt.

Um solche Angriffe zu vermeiden, besteht die beste Praxis darin, parametrisierte Abfragen (vorbereitete Anweisungen) zu verwenden. Dieser Ansatz stellt sicher, dass die Benutzereingabe als Datenzeichenfolge und nicht als ausführbares SQL behandelt wird, so dass der Benutzer keine speziellen SQL-Syntaxzeichen missbrauchen kann, um unbeabsichtigte SQL-Anweisungen zu erzeugen. Das folgende ist ein Beispiel:

```sql
SELECT * FROM users WHERE name = ? AND password = ?;
```

Beim Ausführen der obigen Abfrage, zum Beispiel in Python, übergeben wir den `name` und `password` als Parameter, wie unten gezeigt.

```python
cursor.execute("SELECT * FROM users WHERE name = ? AND password = ?", (name, password))
```

Bibliotheken bieten oft gut abstrahierte APIs, die den Schutz vor SQL-Injektionen für den Entwickler handhaben, wie beispielsweise die Modelle von Django. Sie können SQL-Injektionen vermeiden, indem Sie gekapselte APIs verwenden anstelle von direktem Schreiben von rohem SQL.

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem bösartigen Benutzer, Aktionen mit den Anmeldedaten eines anderen Benutzers auszuführen, ohne dass dieser Benutzer davon weiß oder zustimmt.

Diese Art von Angriff wird am besten durch ein Beispiel erklärt. Josh ist ein bösartiger Benutzer, der weiß, dass eine bestimmte Site eingeloggt Benutzern erlaubt, Geld mit einer HTTP-`POST`-Anfrage, die den Kontonamen und einen Geldbetrag enthält, an ein bestimmtes Konto zu senden. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Benutzer der Site (mit der _Absenden_-Schaltfläche, die als Link zu einer „schnell reich werden“-Site getarnt ist).

Wenn ein Benutzer auf die Absenden-Schaltfläche klickt, wird eine HTTP-`POST`-Anfrage mit den Transaktionsdetails und allen clientseitigen Cookies, die der Browser mit der Site assoziiert, an den Server gesendet (das Hinzufügen von zugehörigen Site-Cookies zu Anfragen ist normales Browserverhalten). Der Server überprüft die Cookies und verwendet sie, um festzustellen, ob der Benutzer eingeloggt ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Benutzer, der auf die _Absenden_-Schaltfläche klickt, während er bei der Handelsseite eingeloggt ist, die Transaktion ausführt. Josh wird reich.

> [!NOTE]
> Die Tücke dabei ist, dass Josh keinen Zugriff auf die Cookies des Benutzers (oder Zugriffsdaten) benötigt. Informationen hierfür werden vom Benutzerbrowser gespeichert und automatisch in allen Anfragen an den assoziierten Server eingeschlossen.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, von der Site generiertes Geheimnis enthalten. Das Geheimnis wird vom Server bereitgestellt, wenn das Webformular zum Bereitstellen von Überweisungen versendet wird. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellen kann, da er das Geheimnis kennen müsste, das der Server für den Benutzer bereitstellt. Selbst wenn er das Geheimnis herausgefunden und ein Formular für einen bestimmten Benutzer erstellt hätte, könnte er dasselbe Formular nicht mehr verwenden, um jeden Benutzer anzugreifen.

Web-Frameworks beinhalten oft solche CSRF-Schutzmechanismen.

### Weitere Bedrohungen

Weitere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare Seite auf oberster Ebene gedacht sind und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte genutzt werden, um zum Beispiel eine legitime Bankseite anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} aufzufangen, das vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Benutzer einen sichtbaren Knopf auf der Webseite klicken zu lassen, wobei er unwissentlich tatsächlich einen völlig anderen Knopf klickt. Als Verteidigung kann Ihre Site verhindern, dass sie in einem iframe in einer anderen Site eingebettet wird, indem sie die entsprechenden HTTP-Header setzt.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird in der Regel erreicht, indem ein Zielort mit gefälschten Anfragen überflutet wird, so dass der Zugriff auf eine Site für legitime Benutzer gestört wird. Die Anfragen können zahlreich sein oder einzeln große Mengen an Ressourcen verbrauchen (z.B. langsame Lesevorgänge oder das Hochladen großer Dateien). DoS-Verteidigungen arbeiten normalerweise dadurch, dass sie "bösen" Datenverkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Abwehrmechanismen befinden sich in der Regel vor oder im Webserver (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://de.wikipedia.org/wiki/Directory_Traversal-Angriff) (Datei- und Offenzlegung). Bei diesem Angriff versucht ein bösartiger Benutzer, Teile des Dateisystems des Webservers zuzugreifen, die sie nicht zugreifen dürfen. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übergeben kann, die Dateisystem-Navigationszeichen enthalten (z.B. `../../`). Die Lösung besteht darin, die Eingabe zu bereinigen, bevor sie verwendet wird.
- [Datei-Einschluss](https://de.wikipedia.org/wiki/File_Inclusion_Schwachstelle). Bei diesem Angriff kann ein Benutzer eine „unerwünschte“ Datei zur Anzeige oder Ausführung in Daten angeben, die an den Server übergeben werden. Wenn geladen, könnte diese Datei auf dem Webserver oder dem Client (geführt zu einem XSS-Angriff) ausgeführt werden. Die Lösung besteht darin, die Eingabe zu bereinigen, bevor sie verwendet wird.
- [Befehlseinschleusung](https://owasp.org/www-community/attacks/Command_Injection). Befehlseinschleusungs-Angriffe ermöglichen einem bösartigen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, die Benutzereingaben zu bereinigen, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Eine umfassende Auflistung von Website-Sicherheitsbedrohungen finden Sie unter [Kategorie: Web security exploits](https://de.wikipedia.org/wiki/Kategorie:Web_security_exploits) (Wikipedia) und [Kategorie: Attack](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Ein paar wichtige Botschaften

Fast alle Sicherheitslücken in den vorhergehenden Abschnitten sind erfolgreich, wenn die Webanwendung Daten aus dem Browser vertraut. Was auch immer Sie sonst tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle durch Benutzer stammenden Daten bereinigen, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an einen Betriebssystem- oder Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lehre, die Sie über Website-Sicherheit lernen können, lautet, **vertrauen Sie niemals Daten aus dem Browser**. Dies schließt (aber beschränkt sich nicht auf) Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie Benutzer hochgeladene Dateien ein. Überprüfen und bereinigen Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige der weiteren konkreten Schritte, die Sie unternehmen können, sind:

- Effektivere Passwortverwaltung nutzen. Starke Passwörter fördern. Ziehen Sie eine Zwei-Faktor-Authentifizierung für Ihre Site in Betracht, so dass zusätzlich zu einem Passwort der Benutzer einen weiteren Authentifizierungscode eingeben muss (in der Regel einen, der über eine physische Hardware geliefert wird, die nur der Benutzer hat, wie z.B. ein Code in einer SMS an sein Telefon).
- Konfigurieren Sie Ihren Webserver, um {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) zu verwenden. HTTPS verschlüsselt Daten, die zwischen Ihrem Client und Server gesendet werden. Dies stellt sicher, dass Anmeldeinformationen, Cookies, `POST`-Anfragedaten und Header-Informationen nicht einfach für Angreifer zugänglich sind.
- Halten Sie sich über die beliebtesten Bedrohungen auf dem Laufenden (die [aktuelle OWASP-Liste finden Sie hier](https://owasp.org/www-project-top-ten/)) und adressieren Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Schwachstellenscanner-Werkzeuge](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests an Ihrer Seite durchzuführen. Später, wenn Ihre sehr erfolgreiche Website auch Fehler findet, indem Sie eine Bug-Bounty anbieten [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und zeigen Sie nur Daten an, die Sie benötigen. Wenn Ihre Benutzer beispielsweise sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur genug von der Kartennummer an, dass der Benutzer sie identifizieren kann, und nicht genug, dass sie von einem Angreifer kopiert und auf einer anderen Seite verwendet werden kann. Das häufigste Muster zu diesem Zeitpunkt ist, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder abschwächen.
  Wenn möglich, planen Sie regelmäßige automatische Updates und idealerweise Updates während Zeiten, in denen Ihre Website das geringste Verkehrsaufkommen hat.
  Es ist am besten, Ihre Daten vor Updates zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können helfen, viele der häufigsten Schwachstellen zu mildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Websicherheit und einige der häufigsten Bedrohungen erklärt, gegen die Ihre Website versuchen sollte, sich zu schützen. Am wichtigsten ist, dass Sie verstehen, dass eine Webanwendung keinem Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten bereinigt werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel haben Sie das Ende [dieses Moduls](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) erreicht, das Ihre ersten Schritte in der serverseitigen Webprogrammierung behandelt. Wir hoffen, dass Ihnen das Lernen dieser grundlegenden Konzepte Spaß gemacht hat und Sie jetzt bereit sind, ein Web-Framework auszuwählen und mit der Programmierung zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks", "Learn_web_development/Extensions/Server-side/First_steps")}}
