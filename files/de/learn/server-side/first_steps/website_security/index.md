---
title: Website-Sicherheit
slug: Learn/Server-side/First_steps/Website_security
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten der Website-Gestaltung und -Nutzung. Dieser einführende Artikel wird Sie nicht zu einem Experten für Website-Sicherheit machen, aber er wird Ihnen helfen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die gängigsten Angriffe zu schützen.

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
        was Sie tun können, um das Risiko eines Hacking-Angriffs auf Ihre Website zu verringern.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir davon, dass Websites aufgrund von Denial-of-Service-Angriffen nicht verfügbar werden oder modifizierte (und oft schädliche) Informationen auf ihren Startseiten anzeigen. In anderen aufsehenerregenden Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in der Öffentlichkeit bekannt, wodurch Website-Nutzer sowohl persönlicher Verlegenheit als auch finanziellem Risiko ausgesetzt sind.

Zweck der Website-Sicherheit ist es, diese (oder ähnliche) Arten von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit _ist der Akt/die Praxis, Websites vor unbefugtem Zugriff, Nutzung, Modifikation, Zerstörung oder Störung zu schützen_.

Effektive Website-Sicherheit erfordert Designaufwand über die gesamte Website hinweg: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern und dem Client-seitigen Code. Während all das sehr bedrohlich klingt, ist die gute Nachricht, dass, wenn Sie ein serverseitiges Web-Framework verwenden, es fast mit Sicherheit "standardmäßig" robuste und durchdachte Abwehrmechanismen gegen eine Reihe der häufigsten Angriffe bereitstellen wird. Andere Angriffe können durch Ihre Webserver-Konfiguration abgeschwächt werden, beispielsweise durch die Aktivierung von HTTPS. Schließlich gibt es öffentlich zugängliche Tools zur Verwundbarkeitsscanner, die Ihnen helfen können festzustellen, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen mehr Details über einige der häufigsten Bedrohungen und einige der einfachen Schritte, die Sie unternehmen können, um Ihre Website zu schützen.

> [!NOTE]
> Dies ist ein einführendes Thema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, jedoch ist es nicht erschöpfend.

## Website-Sicherheitsbedrohungen

Dieser Abschnitt listet nur einige der häufigsten Website-Bedrohungen und deren Abmilderung auf. Beachten Sie beim Lesen, wie Bedrohungen am erfolgreichsten sind, wenn die Webanwendung entweder dem Datenstrom aus dem Browser vertraut oder _nicht paranoid genug_ gegenüber diesen Daten ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Nutzer einzuschleusen. Da der eingeschleuste Code vom Browser von der Website kommt, wird der Code _vertraut_ und kann Dinge tun, wie das Autorisierungscookie des Nutzers an den Angreifer senden. Hat der Angreifer das Cookie, kann er sich in eine Website einloggen, als wäre er der Nutzer, und alles tun, was der Nutzer tun kann, wie z.B. Zugriff auf deren Kreditkartendetails, Kontaktdaten einsehen oder Passwörter ändern.

> [!NOTE]
> XSS-Sicherheitslücken sind historisch häufiger als jede andere Art von Sicherheitsbedrohung aufgetreten.

Die XSS-Schwachstellen werden in _reflektiert_ und _persistent_ unterteilt, basierend darauf, wie die Website die eingefügten Skripte an den Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn vom Nutzer bereitgestellte Inhalte, die an den Server gesendet werden, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben werden. Alle Skripte in den ursprünglichen Nutzerinhalten werden ausgeführt, sobald die neue Seite geladen wird.
  Betrachten Sie beispielsweise eine Websitesuchfunktion, bei der die Suchbegriffe als URL-Parameter kodiert sind und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink konstruieren, der ein bösartiges Skript als Parameter enthält (z.B. `https://developer.mozilla.org?q=beer<script%20src="http://example.com/tricky.js"></script>`) und diesen an einen anderen Nutzer senden. Wenn der Zielnutzer auf diesen "interessanten Link" klickt, wird das Skript ausgeführt, sobald die Suchergebnisse angezeigt werden. Wie bereits erwähnt, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als Zielnutzer auf der Website anzumelden, möglicherweise Käufe als der Nutzer zu tätigen oder seine Kontaktdaten zu teilen.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ wird und später unverändert erneut angezeigt wird, sodass andere Nutzer es ungewollt ausführen.
  Beispielsweise könnte ein Diskussionsforum, das Kommentare akzeptiert, die nicht modifizierte HTML enthalten, ein bösartiges Skript von einem Angreifer speichern. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die erforderlichen Informationen senden, um auf das Benutzerkonto zuzugreifen. Diese Art von Angriff ist äußerst populär und mächtig, da der Angreifer möglicherweise nicht einmal direkten Kontakt mit den Opfern hat.

Obwohl die Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle vom Browser kommenden Daten potenziell anfällig, wie z.B. Cookiedaten, die vom Browser gerendert werden, oder vom Nutzer hochgeladene und angezeigte Dateien.

Die beste Verteidigung gegen XSS-Schwachstellen besteht darin, jede Markierung zu entfernen oder zu deaktivieren, die potenziell Anweisungen enthält, Code auszuführen. Für HTML umfasst dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess, Nutzerdaten so zu modifizieren, dass sie nicht zur Ausführung von Skripten oder zur Beeinflussung der Ausführung von Servercode verwendet werden können, wird als Eingabesäuberung (input sanitization) bezeichnet. Viele Web-Frameworks bereinigen standardmäßig Nutzereingaben aus HTML-Formularen automatisch.

### SQL-Injection

SQL-Injection-Schwachstellen ermöglichen es bösartigen Nutzern, beliebigen SQL-Code auf einer Datenbank auszuführen, wobei sie erlauben, auf Daten zuzugreifen, diese zu ändern oder zu löschen, unabhängig von den Nutzerberechtigungen. Ein erfolgreicher Injection-Angriff könnte Identitäten vortäuschen, neue Identitäten mit Administrationsrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/verändern, um sie unbrauchbar zu machen.

SQL-Injection-Typen umfassen Error-basierte SQL-Injection, auf booleschen Fehlern basierende SQL-Injection und zeitbasierte SQL-Injection.

Diese Schwachstelle liegt vor, wenn Nutzereingaben, die an eine zugrunde liegende SQL-Anweisung übergeben werden, die Bedeutung der Anweisung ändern können. Zum Beispiel ist der folgende Code dazu gedacht, alle Nutzer mit einem bestimmten Namen (`userName`), der aus einem HTML-Formular angegeben wurde, aufzulisten:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Nutzer einen realen Namen angibt, wird die Anweisung wie beabsichtigt funktionieren. Ein bösartiger Nutzer könnte jedoch das Verhalten dieser SQL-Anweisung vollständig in die neue Anweisung im folgenden Beispiel ändern, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erstellt eine gültige SQL-Anweisung, die die `users`-Tabelle löscht und alle Daten aus der `userinfo`-Tabelle auswählt (die die Informationen jedes Nutzers offenlegt). Dies funktioniert, weil der erste Teil des eingeschleusten Textes (`a';`) die ursprüngliche Anweisung vervollständigt.

Um diese Art von Angriff zu vermeiden, müssen Sie sicherstellen, dass Nutzerdaten, die an eine SQL-Abfrage weitergegeben werden, die Natur der Abfrage nicht ändern können. Eine Möglichkeit ist es, alle Zeichen in den Nutzereingaben zu [escapieren](https://en.wikipedia.org/wiki/Escape_character), die eine besondere Bedeutung in SQL haben.

> [!NOTE]
> Die SQL-Anweisung behandelt das **'** Zeichen als Anfang und Ende eines Zeichenfolgen-Literals. Indem man dieses Zeichen mit einem Rückwärtsschrägstrich davor (**\\'**) versieht, escapieren wir das Symbol und teilen SQL mit, es stattdessen als Zeichen (nur als Teil der Zeichenkette) zu behandeln.

In der folgenden Anweisung wird das **'** Zeichen escapiert. Das SQL wird nun den Namen als die ganze Zeichenkette in Fettdruck interpretieren (was in der Tat ein sehr eigenartiger Name ist, aber nicht schädlich).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Web-Frameworks übernehmen oft das Escapieren der Zeichen für Sie. Django zum Beispiel stellt sicher, dass alle Nutzerdaten, die an Querysets (Modellanfragen) weitergegeben werden, escapiert werden.

> [!NOTE]
> Dieser Abschnitt stützt sich stark auf die Informationen in [Wikipedia hier](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem bösartigen Nutzer, Aktionen mit den Anmeldedaten eines anderen Nutzers auszuführen, ohne dessen Wissen oder Zustimmung.

Dieser Angriffstyp wird am besten durch ein Beispiel erklärt. Josh ist ein bösartiger Nutzer, der weiß, dass eine bestimmte Website eingeloggt Nutzern erlaubt, Geld per HTTP `POST`-Anfrage an ein bestimmtes Konto zu senden, das den Kontonamen und einen Geldbetrag enthält. Josh erstellt ein Formular, das seine Bankdaten und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Nutzer der Website (mit dem _Absenden_ Button in Form eines Links zu einer "schnell reich werden"-Website getarnt).

Wenn ein Nutzer den Absenden-Button klickt, wird eine HTTP `POST`-Anfrage an den Server gesendet, die die Transaktionsdetails und alle Client-seitigen Cookies enthält, die der Browser mit der Website assoziiert (das Hinzufügen von zugehörigen Website-Cookies zu Anfragen ist normales Browserverhalten). Der Server überprüft die Cookies und nutzt sie, um festzustellen, ob der Nutzer eingeloggt ist und die Berechtigung hat, die Transaktion durchzuführen.

Das Ergebnis ist, dass jeder Nutzer, der auf den _Absenden_ Button klickt, während er bei der Handelsseite eingeloggt ist, die Transaktion durchführt. Josh wird reich.

> [!NOTE]
> Der Trick besteht hier darin, dass Josh keinen Zugriff auf die Cookies (oder Zugangsdaten) des Nutzers benötigt. Der Browser des Nutzers speichert diese Informationen und fügt sie automatisch in alle Anfragen an den zugehörigen Server ein.

Eine Möglichkeit, diese Art von Angriff zu verhindern, ist, dass der Server verlangt, dass `POST`-Anfragen ein vom Nutzer erzeugtes serverseitiges Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt werden, wenn das Webformular zum Übertragen von Geldbeträgen gesendet wird. Dieser Ansatz hindert Josh daran, sein eigenes Formular zu erstellen, da er das Geheimnis kennen müsste, das der Server für den Nutzer bereitstellt. Selbst wenn er das Geheimnis herausfindet und ein Formular für einen bestimmten Nutzer erstellt, wäre er nicht mehr in der Lage, dasselbe Formular zu verwenden, um alle Nutzer anzugreifen.

Web-Frameworks enthalten oft solche CSRF-Präventionsmechanismen.

### Weitere Bedrohungen

Andere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Bei diesem Angriff kapert ein bösartiger Nutzer Klicks, die für eine sichtbare oberste Ebene der Website bestimmt sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte beispielsweise verwendet werden, um eine legitime Bank-Website anzuzeigen, aber die Anmeldedaten in einem unsichtbaren {{htmlelement("iframe")}} zu erfassen, der vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Nutzer dazu zu bringen, auf einen Button auf einer sichtbaren Website zu klicken, wobei er tatsächlich unwissentlich einen völlig anderen Button klickt. Um sich dagegen zu schützen, kann Ihre Website verhindern, dass sie in einem iframe in einer anderen Website eingebettet wird, indem sie die entsprechenden HTTP-Header setzt.
- {{Glossary("Distributed_Denial_of_Service", "Denial of Service")}} (DoS). DoS wird in der Regel erreicht, indem eine Zielwebsite mit falschen Anfragen überflutet wird, sodass der Zugriff auf die Website für legitime Nutzer gestört wird. Die Anfragen können zahlreich sein oder einzeln große Ressourcen verbrauchen (z.B. langsame Lesevorgänge oder das Hochladen großer Dateien). DoS-Verteidigungen arbeiten in der Regel, indem sie "schlechten" Datenverkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Verteidigungen befinden sich typischerweise vor oder im Webserver (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei- und Offenlegung). Bei diesem Angriff versuchte ein bösartiger Nutzer auf Teile des Dateisystems des Webservers zuzugreifen, auf die er keinen Zugriff haben sollte. Diese Schwachstelle entsteht, wenn der Nutzer Dateinamen übergeben kann, die Dateisystem-Navigationszeichen enthalten (beispielsweise `../../`). Die Lösung besteht darin, die Eingabe zu bereinigen, bevor sie verwendet wird.
- [File Inclusion](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Nutzer eine "ungewollte" Datei zur Anzeige oder Ausführung in Daten spezifizieren, die an den Server übergeben werden. Wenn diese Datei geladen wird, könnte sie auf dem Webserver oder clientseitig (was zu einem XSS-Angriff führt) ausgeführt werden. Die Lösung besteht darin, die Eingabe zu bereinigen, bevor sie verwendet wird.
- [Command Injection](https://owasp.org/www-community/attacks/Command_Injection). Command-Injection-Angriffe ermöglichen es einem bösartigen Nutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, die Nutzereingaben zu bereinigen, bevor sie in Systemaufrufen verwendet werden können.

Eine umfassende Liste von Website-Sicherheitsbedrohungen finden Sie unter [Kategorie: Web-Sicherheitsausbeutungen](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Kategorie: Angriff](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Einige wichtige Botschaften

Fast alle Sicherheitsausbeutungen in den vorherigen Abschnitten sind erfolgreich, wenn die Webanwendung Daten aus dem Browser vertraut. Was auch immer Sie sonst tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle von Nutzern stammenden Daten bereinigen, bevor sie im Browser angezeigt werden, in SQL-Abfragen verwendet oder an einen Betriebssystem- oder Dateisystemaufruf übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über Website-Sicherheit lernen können, ist, **niemals Daten aus dem Browser zu vertrauen**. Dies umfasst, ist aber nicht beschränkt auf Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und Cookies sowie vom Nutzer hochgeladene Dateien. Überprüfen und bereinigen Sie stets alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie effektivere Passwortverwaltungsmaßnahmen. Ermutigen Sie zu starken Passwörtern. Erwägen Sie eine Zwei-Faktor-Authentifizierung für Ihre Website, sodass zusätzlich zu einem Passwort der Nutzer einen weiteren Authentifizierungscode eingeben muss (normalerweise einen, der über irgendeine physische Hardware bereitgestellt wird, die nur der Nutzer hat, z.B. einen Code in einer SMS, die auf sein Telefon gesendet wird).
- Konfigurieren Sie Ihren Webserver so, dass er {{Glossary("HTTPS", "HTTPS")}} und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) verwendet. HTTPS verschlüsselt die zwischen Ihrem Client und Server gesendeten Daten. Dies stellt sicher, dass Anmeldeinformationen, Cookies, `POST`-Anfragen-Daten und Header-Informationen Angreifern nicht leicht zugänglich sind.
- Verfolgen Sie die beliebtesten Bedrohungen (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und beheben Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Tools zur Verwundbarkeitsscanner](https://owasp.org/www-community/Vulnerability_Scanning_Tools), um automatisierte Sicherheitstests auf Ihrer Website durchzuführen. Später, wenn Ihre sehr erfolgreiche Website, möglicherweise auch Fehler durch die Bereitstellung von Kopfgeldern für Fehler findet [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/).
- Speichern und anzeigen Sie nur die Daten, die Sie benötigen. Wenn Ihre Nutzer beispielsweise sensible Informationen wie Kreditkartendetails speichern müssen, zeigen Sie nur so viel von der Kartennummer an, dass sie vom Nutzer identifiziert werden kann, und nicht genug, dass sie von einem Angreifer kopiert und auf einer anderen Website verwendet werden kann. Das häufigste Muster zu dieser Zeit ist, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder abschwächen.
  Wenn möglich, planen Sie regelmäßige automatische Updates ein und idealerweise Updates während Zeiten, in denen Ihre Website den geringsten Verkehr hat.
  Es ist am besten, Ihre Daten vor dem Aktualisieren zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass es keine Kompatibilitätsprobleme auf Ihrem Server gibt.

Web-Frameworks können helfen, viele der häufigeren Schwachstellen zu mindern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Websicherheit und einige der häufigeren Bedrohungen erklärt, gegen die Ihre Website schützen sollte. Am wichtigsten ist, dass Sie verstehen sollten, dass eine Webanwendung keinen Browserdaten vertrauen kann. Alle Benutzerdaten sollten bereinigt werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel sind Sie am Ende [dieses Moduls](/de/docs/Learn/Server-side/First_steps) angelangt, das Ihre ersten Schritte in der serverseitigen Website-Programmierung abdeckt. Wir hoffen, Sie haben es genossen, diese grundlegenden Konzepte zu lernen, und Sie sind jetzt bereit, ein Web-Framework auszuwählen und mit der Programmierung zu beginnen.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
