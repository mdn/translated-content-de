---
title: Website-Sicherheit
slug: Learn/Server-side/First_steps/Website_security
l10n:
  sourceCommit: 8c36614793c9feadf8fea07fd10b6372be4fd179
---

{{LearnSidebar}}{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}

Website-Sicherheit erfordert Wachsamkeit in allen Aspekten des Webdesigns und der Nutzung. Dieser einführende Artikel macht Sie zwar nicht zu einem Website-Sicherheitsguru, aber er hilft Ihnen zu verstehen, woher Bedrohungen kommen und was Sie tun können, um Ihre Webanwendung gegen die häufigsten Angriffe zu schützen.

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
        was Sie tun können, um das Risiko eines Angriffs auf Ihre Seite zu verringern.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Website-Sicherheit?

Das Internet ist ein gefährlicher Ort! Mit großer Regelmäßigkeit hören wir von Websites, die aufgrund von Denial-of-Service-Angriffen nicht verfügbar sind oder veränderte (und oft schädliche) Informationen auf ihren Startseiten anzeigen. In anderen prominenten Fällen wurden Millionen von Passwörtern, E-Mail-Adressen und Kreditkartendaten in die Öffentlichkeit geleakt, was die Benutzer von Websites sowohl persönlichem Unbehagen als auch finanziellem Risiko aussetzt.

Zweck der Website-Sicherheit ist es, diese (oder jegliche) Arten von Angriffen zu verhindern. Die formellere Definition von Website-Sicherheit _ist die Praxis des Schutzes von Websites vor unautorisiertem Zugriff, Nutzung, Änderung, Zerstörung oder Störung_.

Effektive Website-Sicherheit erfordert Designaufwand über die gesamte Website: in Ihrer Webanwendung, der Konfiguration des Webservers, Ihren Richtlinien zur Erstellung und Erneuerung von Passwörtern sowie im clientseitigen Code. Auch wenn all das sehr bedrohlich klingt, ist die gute Nachricht, dass Sie bei Verwendung eines serverseitigen Web-Frameworks fast immer robusten und gut durchdachten Abwehrmechanismen gegen eine Reihe der häufigsten Angriffe „standardmäßig“ haben werden. Andere Angriffe können durch die Konfiguration Ihres Webservers abgeschwächt werden, zum Beispiel durch die Aktivierung von HTTPS. Schließlich gibt es öffentlich verfügbare Schwachstellen-Scanner-Tools, die Ihnen helfen können herauszufinden, ob Sie offensichtliche Fehler gemacht haben.

Der Rest dieses Artikels gibt Ihnen weitere Details über einige häufige Bedrohungen und einige einfache Schritte, die Sie zum Schutz Ihrer Seite unternehmen können.

> [!NOTE]
> Dies ist ein Einführungsthema, das Ihnen helfen soll, über Website-Sicherheit nachzudenken, aber es ist nicht erschöpfend.

## Bedrohungen für die Website-Sicherheit

In diesem Abschnitt werden einige der häufigsten Website-Bedrohungen und deren Abwehr aufgelistet. Beachten Sie beim Lesen, dass Bedrohungen am erfolgreichsten sind, wenn die Webanwendung entweder dem vom Browser kommenden Daten vertraut oder _nicht paranoid genug_ ist.

### Cross-Site Scripting (XSS)

XSS ist ein Begriff, der eine Klasse von Angriffen beschreibt, die es einem Angreifer ermöglichen, clientseitige Skripte _über_ die Website in die Browser anderer Benutzer zu injizieren. Da der injizierte Code vom Browser als vertrauenswürdig angesehen wird, kann der Code Dinge wie das Senden des Autorisierungs-Cookies des Benutzers an den Angreifer ausführen. Wenn der Angreifer das Cookie hat, kann er sich auf der Seite anmelden, als wäre er der Benutzer, und alles tun, was der Benutzer tun kann, wie den Zugriff auf seine Kreditkartendetails zu erhalten, Kontaktdaten einzusehen oder Passwörter zu ändern.

> [!NOTE]
> XSS-Schwachstellen waren historisch gesehen häufiger als jede andere Art von Sicherheitsbedrohung.

Die XSS-Schwachstellen werden in _reflektiert_ und _persistent_ unterteilt, basierend darauf, wie die Website die injizierten Skripte an einen Browser zurückgibt.

- Eine _reflektierte_ XSS-Schwachstelle tritt auf, wenn vom Nutzer übergebener Inhalt, der an den Server gesendet wird, _sofort_ und _unverändert_ zur Anzeige im Browser zurückgegeben wird. Alle Skripte im ursprünglichen Nutzerinhalt werden beim Laden der neuen Seite ausgeführt.
  Stellen Sie sich beispielsweise eine Suche auf einer Website vor, bei der die Suchbegriffe als URL-Parameter codiert sind und diese Begriffe zusammen mit den Ergebnissen angezeigt werden. Ein Angreifer kann einen Suchlink konstruieren, der ein bösartiges Skript als Parameter enthält (z. B. `https://developer.mozilla.org?q=bier<script%20src="http://example.com/tricky.js"></script>`) und ihn an einen anderen Benutzer senden. Wenn der Zielbenutzer auf diesen „interessanten Link“ klickt, wird das Skript ausgeführt, wenn die Suchergebnisse angezeigt werden. Wie bereits besprochen, gibt dies dem Angreifer alle Informationen, die er benötigt, um sich als Zielbenutzer auf der Website anzumelden, möglicherweise Käufe im Namen des Benutzers zu tätigen oder dessen Kontaktinformationen zu teilen.
- Eine _persistente_ XSS-Schwachstelle tritt auf, wenn das bösartige Skript auf der Website _gespeichert_ wird und dann später unverändert für andere Benutzer wiedergegeben wird, die es unwissentlich ausführen.
  Stellen Sie sich beispielsweise ein Diskussionsforum vor, das Kommentare akzeptiert, die unverändertes HTML enthalten können, und wo ein bösartiges Skript von einem Angreifer gespeichert werden könnte. Wenn die Kommentare angezeigt werden, wird das Skript ausgeführt und kann dem Angreifer die Informationen senden, die erforderlich sind, um auf das Benutzerkonto zuzugreifen. Diese Art von Angriff ist extrem populär und mächtig, da der Angreifer möglicherweise überhaupt keinen direkten Kontakt mit den Opfern hat.

Während die Daten aus `POST`- oder `GET`-Anfragen die häufigste Quelle für XSS-Schwachstellen sind, sind alle vom Browser kommenden Daten potenziell anfällig, wie z.B. Cookie-Daten, die vom Browser angezeigt werden, oder vom Benutzer hochgeladene und angezeigte Dateien.

Die beste Verteidigung gegen XSS-Schwachstellen besteht darin, jegliche Markups zu entfernen oder zu deaktivieren, die potenziell Anweisungen zur Code-Ausführung enthalten können. Für HTML umfasst dies Elemente wie `<script>`, `<object>`, `<embed>` und `<link>`.

Der Prozess der Änderung von Benutzerdaten, damit sie nicht zur Ausführung von Skripten oder zur Beeinflussung der Ausführung von Servercode genutzt werden können, wird als Eingabe-Sanitisierung bezeichnet. Viele Web-Frameworks sanitisieren standardmäßig Benutzereingaben aus HTML-Formularen.

### SQL-Injection

SQL-Injection-Lücken ermöglichen es böswilligen Benutzern, willkürlichen SQL-Code auf einer Datenbank auszuführen, sodass Daten unabhängig von den Berechtigungen des Benutzers abgerufen, geändert oder gelöscht werden können. Ein erfolgreicher Injektionsangriff kann Identitäten vortäuschen, neue Identitäten mit Administratorrechten erstellen, auf alle Daten auf dem Server zugreifen oder die Daten zerstören/ändern, sodass sie unbrauchbar werden.

SQL-Injection-Arten umfassen Fehler-basierte SQL-Injections, SQL-Injections basierend auf booleschen Fehlern und zeitbasierte SQL-Injections.

Diese Schwachstelle ist vorhanden, wenn Benutzereingaben, die an eine zugrunde liegende SQL-Anweisung übermittelt werden, die Bedeutung der Anweisung ändern können. Zum Beispiel ist der folgende Code dazu gedacht, alle Benutzer mit einem bestimmten Namen (`userName`) aufzulisten, der aus einem HTML-Formular bereitgestellt wurde:

```sql
statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

Wenn der Benutzer einen echten Namen angibt, funktioniert die Anweisung wie beabsichtigt. Ein böswilliger Benutzer könnte jedoch das Verhalten dieser SQL-Anweisung vollständig ändern, zu der neuen Anweisung im folgenden Beispiel, indem er `a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't` für den `userName` angibt.

```sql
SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

Die modifizierte Anweisung erstellt eine gültige SQL-Anweisung, die die Tabelle `users` löscht und alle Daten aus der Tabelle `userinfo` auswählt (was die Informationen jedes Benutzers preisgibt). Dies funktioniert, weil der erste Teil des injizierten Textes (`a';`) die ursprüngliche Anweisung abschließt.

Um eine solche Art von Angriff zu vermeiden, müssen Sie sicherstellen, dass Benutzerdaten, die an eine SQL-Abfrage übergeben werden, die Natur der Abfrage nicht ändern können. Eine Möglichkeit dies zu tun, besteht darin, alle Zeichen in der Benutzereingabe zu [maskieren](https://en.wikipedia.org/wiki/Escape_character), die eine spezielle Bedeutung in SQL haben.

> [!NOTE]
> Die SQL-Anweisung behandelt das Zeichen **'** als Anfang und Ende eines Zeichenfolgenliterals. Indem wir diesem Zeichen einen Backslash voranstellen (**\\'**), maskieren wir das Symbol und teilen SQL mit, es als Zeichen zu behandeln (nur als Teil der Zeichenfolge).

In der folgenden Anweisung maskieren wir das Zeichen **'**. Die SQL wird nun den Namen als die gesamte fettgedruckte Zeichenfolge interpretieren (was zwar ein sehr seltsamer Name ist, aber nicht schädlich).

```sql
SELECT * FROM users WHERE name = 'a\';DROP TABLE users; SELECT * FROM userinfo WHERE \'t\' = \'t';
```

Webframeworks übernehmen oft das Maskieren der Zeichen für Sie. Django zum Beispiel stellt sicher, dass alle Benutzerdaten, die an Abfragen (Modelabfragen) übergeben werden, maskiert werden.

> [!NOTE]
> Dieser Abschnitt basiert stark auf den Informationen in [Wikipedia hier](https://en.wikipedia.org/wiki/SQL_injection).

### Cross-Site Request Forgery (CSRF)

CSRF-Angriffe ermöglichen es einem böswilligen Benutzer, Aktionen mithilfe der Anmeldedaten eines anderen Benutzers auszuführen, ohne dass dieser davon weiß oder zustimmt.

Diese Art von Angriff wird am besten durch ein Beispiel erklärt. Josh ist ein böswilliger Benutzer, der weiß, dass eine bestimmte Website angemeldeten Nutzern erlaubt, Geld an ein angegebenes Konto zu senden, indem eine HTTP-`POST`-Anfrage gesendet wird, die den Kontonamen und einen Geldbetrag enthält. Josh erstellt ein Formular, das seine Bankdetails und einen Geldbetrag als versteckte Felder enthält, und sendet es per E-Mail an andere Benutzer der Website (mit einem _Absenden_-Button, der als Link zu einer „schnell reich werden“-Seite getarnt ist).

Wenn ein Benutzer auf den Absenden-Button klickt, wird eine HTTP-`POST`-Anfrage an den Server mit den Transaktionsdetails und allen clientseitigen Cookies, die der Browser mit der Website verknüpft, gesendet (die Hinzufügung zugehöriger Site-Cookies zu Anfragen ist normales Browserverhalten). Der Server überprüft die Cookies und verwendet sie, um festzustellen, ob der Benutzer angemeldet ist und die Berechtigung für die Transaktion hat.

Das Ergebnis ist, dass jeder Benutzer, der auf den _Absenden_-Button klickt, während er im Handelssystem der Website eingeloggt ist, die Transaktion ausführt. Josh wird reich.

> [!NOTE]
> Der Trick hier ist, dass Josh keinen Zugriff auf die Cookies des Benutzers (oder Zugangsdaten) benötigt. Der Browser des Benutzers speichert diese Informationen und fügt sie automatisch in alle Anfragen an den zugehörigen Server ein.

Eine Möglichkeit, diese Art von Angriff zu verhindern, besteht darin, dass der Server verlangt, dass `POST`-Anfragen ein benutzerspezifisches, von der Website generiertes Geheimnis enthalten. Das Geheimnis würde vom Server bereitgestellt, wenn das Webformular zum Übertragen von Geldern gesendet wird. Dieser Ansatz verhindert, dass Josh sein eigenes Formular erstellt, da er das Geheimnis kennen müsste, das der Server dem Benutzer bereitstellt. Selbst wenn er das Geheimnis herausfinden und ein Formular für einen bestimmten Benutzer erstellen würde, könnte er dasselbe Formular nicht länger verwenden, um jeden Benutzer anzugreifen.

Web-Frameworks beinhalten oft solche CSRF-Präventionsmechanismen.

### Andere Bedrohungen

Andere häufige Angriffe/Schwachstellen umfassen:

- [Clickjacking](/de/docs/Glossary/Clickjacking). Bei diesem Angriff kapert ein bösartiger Benutzer Klicks, die für eine sichtbare Top-Level-Website bestimmt sind, und leitet sie auf eine versteckte Seite darunter um. Diese Technik könnte beispielsweise dazu verwendet werden, um eine legitime Bankwebsite anzuzeigen, aber die Anmeldedaten in ein unsichtbares {{htmlelement("iframe")}} zu kopieren, das vom Angreifer kontrolliert wird. Clickjacking könnte auch verwendet werden, um den Benutzer dazu zu bringen, einen Button auf einer sichtbaren Website zu klicken, was jedoch dazu führt, dass unwissentlich ein völlig anderer Button geklickt wird. Zu verteidigungszwecken kann Ihre Website das Einbetten in ein iframe einer anderen Website verhindern, indem die entsprechenden HTTP-Header gesetzt werden.
- [Denial of Service](/de/docs/Glossary/Distributed_Denial_of_Service) (DoS). DoS wird normalerweise erreicht, indem eine Zielwebsite mit gefälschten Anfragen überflutet wird, sodass der Zugang zu einer Website für legitime Benutzer gestört wird. Die Anfragen können zahlreich sein, oder sie verbrauchen einzeln große Mengen an Ressourcen (z.B. langsame Lesevorgänge oder das Hochladen großer Dateien). DoS-Verteidigungen arbeiten normalerweise, indem sie „schlechten“ Verkehr identifizieren und blockieren, während legitime Nachrichten durchgelassen werden. Diese Verteidigungen befinden sich typischerweise vor oder im Webserver (sie sind nicht Teil der Webanwendung selbst).
- [Directory Traversal](https://en.wikipedia.org/wiki/Directory_traversal_attack) (Datei- und Offenlegung). Bei diesem Angriff versucht ein bösartiger Benutzer, auf Teile des Dateisystems des Webservers zuzugreifen, auf die er keinen Zugriff haben sollte. Diese Schwachstelle tritt auf, wenn der Benutzer Dateinamen übermitteln kann, die Navigationszeichen des Dateisystems enthalten (z.B. `../../`). Die Lösung besteht darin, Eingaben vor der Verwendung zu sanitisieren.
- [Datei-Einbindung](https://en.wikipedia.org/wiki/File_inclusion_vulnerability). Bei diesem Angriff kann ein Benutzer eine „unbeabsichtigte“ Datei zur Anzeige oder Ausführung in Daten angeben, die an den Server gesendet werden. Wenn die Datei geladen wird, könnte sie auf dem Webserver oder clientseitig ausgeführt werden (was zu einem XSS-Angriff führen kann). Die Lösung besteht darin, Eingaben vor der Verwendung zu sanitisieren.
- [Befehlsinjektion](https://owasp.org/www-community/attacks/Command_Injection). Befehlsinjektionsangriffe ermöglichen es einem bösartigen Benutzer, beliebige Systembefehle auf dem Host-Betriebssystem auszuführen. Die Lösung besteht darin, Benutzereingaben zu sanitisieren, bevor sie möglicherweise in Systemaufrufen verwendet werden.

Eine umfassende Auflistung von Bedrohungen der Website-Sicherheit finden Sie unter [Kategorie: Web security exploits](https://en.wikipedia.org/wiki/Category:Web_security_exploits) (Wikipedia) und [Kategorie: Attack](https://owasp.org/www-community/attacks/) (Open Web Application Security Project).

## Einige wichtige Nachrichten

Fast alle Sicherheitslücken in den vorhergehenden Abschnitten sind erfolgreich, wenn die Webanwendung den vom Browser kommenden Daten vertraut. Was auch immer Sie tun, um die Sicherheit Ihrer Website zu verbessern, Sie sollten alle benutzerstammenden Daten sanitisieren, bevor sie im Browser angezeigt, in SQL-Abfragen verwendet oder an Betriebssystem- oder Dateisystemaufrufe übergeben werden.

> [!WARNING]
> Die wichtigste Lektion, die Sie über die Sicherheit von Websites lernen können, ist, **niemals Daten aus dem Browser zu vertrauen**. Dies umfasst, aber ist nicht beschränkt auf Daten in URL-Parametern von `GET`-Anfragen, `POST`-Anfragen, HTTP-Headern und -Cookies sowie benutzerhochgeladenen Dateien. Überprüfen und sanitisieren Sie immer alle eingehenden Daten. Gehen Sie immer vom Schlimmsten aus.

Einige weitere konkrete Schritte, die Sie unternehmen können, sind:

- Verwenden Sie effektivere Passwortverwaltung. Fördern Sie starke Passwörter. Erwägen Sie eine Zwei-Faktor-Authentifizierung für Ihre Website, sodass der Benutzer zusätzlich zu einem Passwort einen weiteren Authentifizierungscode eingeben muss (in der Regel einen, der über ein physisches Hardware-Gerät geliefert wird, das nur der Benutzer hat, z. B. ein Code in einer SMS an sein Telefon).
- Konfigurieren Sie Ihren Webserver, um [HTTPS](/de/docs/Glossary/HTTPS) und [HTTP Strict Transport Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) (HSTS) zu verwenden. HTTPS verschlüsselt Daten, die zwischen Ihrem Client und dem Server gesendet werden. Dies gewährleistet, dass Anmeldedaten, Cookies, `POST`-Anfragedaten und Header-Informationen für Angreifer nicht leicht zugänglich sind.
- Behalten Sie die beliebtesten Bedrohungen im Auge (die [aktuelle OWASP-Liste ist hier](https://owasp.org/www-project-top-ten/)) und adressieren Sie die häufigsten Schwachstellen zuerst.
- Verwenden Sie [Vulnerability Scanning Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools) für automatisierte Sicherheitstests auf Ihrer Website. Später kann Ihre sehr erfolgreiche Website möglicherweise auch Fehler finden, indem sie ein Bug-Bounty-Programm [wie Mozilla es hier tut](https://www.mozilla.org/en-US/security/bug-bounty/faq-webapp/) anbietet.
- Speichern und zeigen Sie nur die Daten an, die Sie benötigen. Wenn Ihre Benutzer beispielsweise sensible Informationen wie Kreditkartendaten speichern müssen, zeigen Sie nur genügend der Kartennummer an, damit der Benutzer sie identifizieren kann, und nicht genug, damit ein Angreifer sie kopieren und auf einer anderen Seite verwenden kann. Das derzeit häufigste Muster besteht darin, nur die letzten 4 Ziffern einer Kreditkartennummer anzuzeigen.
- Halten Sie Software auf dem neuesten Stand.
  Die meisten Server haben regelmäßige Sicherheitsupdates, die bekannte Schwachstellen beheben oder mildern.
  Planen Sie, wenn möglich, regelmäßige automatisierte Updates ein und idealerweise Updates während Zeiten, in denen Ihre Website das geringste Verkehrsaufkommen hat.
  Es ist am besten, Ihre Daten vor dem Update zu sichern und neue Softwareversionen zu testen, um sicherzustellen, dass keine Kompatibilitätsprobleme auf Ihrem Server auftreten.

Webframeworks können viele der häufigeren Schwachstellen abmildern.

## Zusammenfassung

Dieser Artikel hat das Konzept der Websicherheit und einige der häufigeren Bedrohungen erklärt, gegen die Ihre Website zu schützen versuchen sollte. Am wichtigsten ist, dass Sie verstehen sollten, dass eine Webanwendung keine Daten aus dem Webbrowser vertrauen kann. Alle Benutzerdaten sollten saniert werden, bevor sie angezeigt oder in SQL-Abfragen und Dateisystemaufrufen verwendet werden.

Mit diesem Artikel sind Sie am Ende [dieses Moduls](/de/docs/Learn/Server-side/First_steps) angelangt, das Ihre ersten Schritte in die serverseitige Webprogrammierung behandelt. Wir hoffen, dass Sie diese grundlegenden Konzepte gerne gelernt haben und nun bereit sind, ein Webframework auszuwählen und mit der Programmierung zu beginnen.

{{PreviousMenu("Learn/Server-side/First_steps/Web_frameworks", "Learn/Server-side/First_steps")}}
