---
title: Einführung in die serverseitige Programmierung
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 8bc4e3fe45532906246a760bff0b06b7cd105c52
---

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen zum MDN-Einführungskurs für serverseitige Programmierung! In diesem ersten Artikel betrachten wir die serverseitige Programmierung auf einer übergeordneten Ebene und beantworten Fragen wie „Was ist das?“, „Wie unterscheidet sie sich von der clientseitigen Programmierung?“ und „Warum ist sie so nützlich?“. Nach dem Lesen dieses Artikels werden Sie die zusätzliche Leistungsfähigkeit verstehen, die Websites durch serverseitigen Code zur Verfügung steht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis davon, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit damit erlangen, was serverseitige Programmierung ist, was
        sie leisten kann und wie sie sich von clientseitiger Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten umfangreichen Websites verwenden serverseitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen. Diese werden in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und an den Client gesendet, damit sie dort mithilfe von Code (z. B. HTML und JavaScript) angezeigt werden.

Der vielleicht bedeutendste Vorteil von serverseitigem Code besteht darin, dass Sie Website-Inhalte auf einzelne Benutzer zuschneiden können. Dynamische Websites können Inhalte hervorheben, die auf Grundlage von Benutzerpräferenzen und -gewohnheiten relevanter sind. Sie können Websites auch einfacher nutzbar machen, indem sie persönliche Einstellungen und Informationen speichern — beispielsweise indem gespeicherte Kreditkartendaten wiederverwendet werden, um nachfolgende Zahlungen zu vereinfachen.

Sie können sogar die Interaktion mit den Benutzern einer Website ermöglichen, indem sie Benachrichtigungen und Aktualisierungen per E-Mail oder über andere Kanäle senden. All diese Fähigkeiten ermöglichen eine wesentlich intensivere Einbindung der Benutzer.

In der modernen Welt der Webentwicklung ist es sehr empfehlenswert, sich mit serverseitiger Entwicklung zu beschäftigen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche ausführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (beispielsweise die Ressource abzurufen, zu löschen oder zu veröffentlichen), und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die über einen [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendeten Feld-Wert-Paare), als POST-Daten (Daten, die durch die [HTTP-POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Anfragenachrichten von Clients, verarbeiten diese bei ihrem Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwort**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z. B. „HTTP/1.1 200 OK“ bei Erfolg).

Der Body einer erfolgreichen Antwort auf eine Anfrage enthält die angeforderte Ressource (z. B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden kann.

### Statische Websites

Das folgende Diagramm zeigt eine grundlegende Webserverarchitektur für eine _statische Website_ (eine statische Website gibt immer denselben fest codierten Inhalt vom Server zurück, wenn eine bestimmte Ressource angefordert wird). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-„GET“-Anfrage, in der deren URL angegeben wird.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) enthält (üblicherweise 200 OK). Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Websites

Eine dynamische Website ist eine Website, bei der ein Teil des Antwortinhalts _dynamisch_ und nur bei Bedarf generiert wird. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine wesentlich effizientere Methode, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Website kann für eine URL abhängig von Informationen, die der Benutzer bereitstellt, oder von gespeicherten Einstellungen unterschiedliche Daten zurückgeben und im Rahmen der Rückgabe einer Antwort weitere Vorgänge durchführen (z. B. Benachrichtigungen senden).

Der größte Teil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server ausgeführt werden. Das Erstellen dieses Codes wird als „**serverseitige Programmierung**“ (oder manchmal als „**Back-End-Scripting**“) bezeichnet.

Das folgende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server; anschließend verarbeitet der Server die Anfragen und gibt entsprechende HTTP-Antworten zurück.

Anfragen nach _statischen_ Ressourcen werden auf dieselbe Weise wie bei statischen Websites verarbeitet (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorab erstellte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen (2) an serverseitigen Code weitergeleitet (im Diagramm als _Web Application_ dargestellt). Bei „dynamischen Anfragen“ interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort zurück, die das generierte HTML enthält (5, 6).

## Sind serverseitige und clientseitige Programmierung gleich?

Wenden wir uns nun dem Code zu, der an serverseitiger und clientseitiger Programmierung beteiligt ist. In beiden Fällen unterscheidet sich der Code erheblich:

- Sie haben unterschiedliche Zwecke und Anforderungen.
- Sie verwenden im Allgemeinen nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das auf der Server- und Client-Seite verwendet werden kann).
- Sie werden in unterschiedlichen Betriebssystemumgebungen ausgeführt.

Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und befasst sich hauptsächlich damit, das Erscheinungsbild und Verhalten einer gerenderten Webseite zu verbessern. Dazu gehören das Auswählen und Gestalten von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung usw. Im Gegensatz dazu umfasst die serverseitige Website-Programmierung hauptsächlich die Auswahl, _welcher Inhalt_ als Antwort auf Anfragen an den Browser zurückgegeben wird. Der serverseitige Code übernimmt Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten sowie das Senden der jeweils erforderlichen korrekten Daten an den Client.

Clientseitiger Code wird mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben — er wird innerhalb eines Webbrowsers ausgeführt und hat wenig oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eines eingeschränkten Zugriffs auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer möglicherweise zur Anzeige einer Website verwendet — Browser bieten unterschiedliche Grade an Kompatibilität mit Funktionen von clientseitigem Code, und ein Teil der Herausforderung bei der clientseitigen Programmierung besteht darin, Unterschiede bei der Browserunterstützung elegant zu behandeln.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (Node.js). Der serverseitige Code hat vollständigen Zugriff auf das Serverbetriebssystem, und der Entwickler kann auswählen, welche Programmiersprache (und welche konkrete Version) verwendet werden soll.

Entwickler schreiben ihren Code üblicherweise mithilfe von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die dazu entwickelt wurden, häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben zu vereinfachen, die in einem bestimmten Bereich auftreten.

Obwohl sowohl clientseitiger als auch serverseitiger Code Frameworks verwenden, sind die Bereiche sehr unterschiedlich — und damit auch die Frameworks. Clientseitige Web-Frameworks vereinfachen Layout- und Darstellungsaufgaben, während serverseitige Web-Frameworks viele „übliche“ Webserverfunktionen bereitstellen, die Sie andernfalls selbst implementieren müssten (z. B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfachen Datenbankzugriff, Template-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden häufig verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können auch den gesamten Code von Hand schreiben; tatsächlich kann das manuelle Schreiben Ihres Codes schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-Benutzeroberfläche benötigen.
>
> Im Gegensatz dazu würden Sie fast nie erwägen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben — eine wichtige Funktion wie einen HTTP-Server beispielsweise in Python von Grund auf zu implementieren, ist wirklich schwierig, aber Python-Web-Frameworks wie Django stellen einen direkt einsatzbereit bereit, zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, weil sie uns ermöglicht, auf _effiziente_ Weise auf einzelne Benutzer zugeschnittene Informationen bereitzustellen und dadurch eine wesentlich bessere Benutzererfahrung zu schaffen.

Unternehmen wie Amazon verwenden serverseitige Programmierung, um Suchergebnisse für Produkte zu erstellen, gezielte Produktempfehlungen auf Grundlage von Client-Präferenzen und früheren Kaufgewohnheiten zu geben, Käufe zu vereinfachen usw.

Banken verwenden serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern das Anzeigen und Durchführen von Transaktionen zu erlauben. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu steuern.

Nachfolgend sind einige der üblichen Einsatzmöglichkeiten und Vorteile der serverseitigen Programmierung aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden. Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht uns stattdessen, Informationen in einer Datenbank zu speichern und HTML sowie andere Dateitypen (z. B. PDFs, Bilder usw.) dynamisch zu erstellen und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) zur Darstellung durch geeignete clientseitige Web-Frameworks zurückzugeben (dies reduziert die Verarbeitungsbelastung des Servers und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, sondern kann alternativ das Ergebnis von Softwarewerkzeugen oder Daten aus Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Typ des Client-Geräts zugeschnitten werden, das ihn empfängt.

Da sich die Informationen in einer Datenbank befinden, können sie außerdem leichter mit anderen Geschäftssystemen geteilt und von diesen aktualisiert werden (wenn beispielsweise Produkte entweder online oder in einem Geschäft verkauft werden, kann das Geschäft seine Bestandsdatenbank aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss sich nicht besonders anstrengen, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Website.
> 2. Suchen Sie nach mehreren Schlüsselwörtern und beachten Sie, dass sich die Seitenstruktur nicht ändert, obwohl die Ergebnisse es tun.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, dass sie eine gemeinsame Struktur und ein gemeinsames Layout haben, die Inhalte für verschiedene Produkte jedoch aus der Datenbank abgerufen wurden.
>
> Für einen häufigen Suchbegriff („Fisch“ beispielsweise) können Sie buchstäblich Millionen zurückgegebener Werte sehen. Eine Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und erlaubt es, die Darstellung der Informationen an nur einer Stelle zu steuern.

### Angepasste Benutzererfahrung

Server können Informationen über Clients speichern und verwenden, um eine komfortable und maßgeschneiderte Benutzererfahrung bereitzustellen. Beispielsweise speichern viele Websites Kreditkartendaten, damit die Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformationen bereitzustellen, sowie Such- oder Reiseverläufe, um lokale Unternehmen in Suchergebnissen hervorzuheben.

Eine tiefergehende Analyse von Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusehen und Antworten und Benachrichtigungen weiter anzupassen, beispielsweise durch die Bereitstellung einer Liste zuvor besuchter oder beliebter Orte, die Sie vielleicht auf einer Karte ansehen möchten.

> [!NOTE]
> [Google Maps](https://www.google.com/maps) speichert Ihren Such- und Besuchsverlauf. Häufig besuchte oder häufig gesuchte Orte werden stärker hervorgehoben als andere.
>
> Google-Suchergebnisse werden auf Grundlage früherer Suchen optimiert.
>
> 1. Gehen Sie zu [Google Suche](https://www.google.com/).
> 2. Suchen Sie nach „Fußball“.
> 3. Versuchen Sie nun, „Lieblings“ in das Suchfeld einzugeben, und beobachten Sie die Autovervollständigungs-Suchvorschläge.
>
> Zufall? Wohl kaum!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Beispiele aus der Praxis sind soziale Netzwerke, die Benutzern ermöglichen festzulegen, wer die Inhalte sehen kann, die sie auf der Website veröffentlichen, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Denken Sie an weitere Beispiele aus der Praxis, in denen der Zugriff auf Inhalte kontrolliert wird. Was können Sie beispielsweise sehen, wenn Sie die Online-Website Ihrer Bank aufrufen? Melden Sie sich bei Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Sitzungs-/Statusinformationen speichern

Serverseitige Programmierung ermöglicht Entwicklern die Verwendung von **Sitzungen** — im Grunde ein Mechanismus, der einem Server erlaubt, Informationen zu speichern, die dem aktuellen Benutzer einer Website zugeordnet sind, und auf Grundlage dieser Informationen unterschiedliche Antworten zu senden.

Dadurch kann eine Website beispielsweise wissen, dass ein Benutzer sich zuvor angemeldet hat, und Links zu dessen E-Mails oder Bestellverlauf anzeigen. Oder sie kann möglicherweise den Status eines einfachen Spiels speichern, sodass der Benutzer eine Website erneut aufrufen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Nachrichtenseite mit einem Abonnementmodell und öffnen Sie mehrere Tabs (z. B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Website über einige Stunden oder Tage hinweg weiter. Schließlich werden Sie auf Seiten weitergeleitet, die erklären, wie Sie ein Abonnement abschließen können, und Sie können nicht mehr auf Artikel zugreifen. Diese Informationen sind ein Beispiel für in Cookies gespeicherte Sitzungsinformationen.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videogespräche oder andere Kommunikationsdienste senden.

Einige Beispiele:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikation zu benachrichtigen.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die bereits gekauften oder angesehenen Produkten ähneln und Sie interessieren könnten.
- Ein Webserver kann Warnmeldungen an Website-Administratoren senden, um sie auf einen geringen verfügbaren Speicher auf dem Server oder verdächtige Benutzeraktivitäten aufmerksam zu machen.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine „Registrierungsbestätigung“. Wählen Sie fast jede große Website, die Sie interessiert (Google, Amazon, Instagram usw.), und erstellen Sie mit Ihrer E-Mail-Adresse ein neues Konto. Sie erhalten kurz darauf eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung zur Aktivierung Ihres Kontos verlangt.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: wonach sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten anhand der Analyse dieser Daten zu verfeinern.

Amazon und Google bewerben beispielsweise beide Produkte auf Grundlage früherer Suchen (und Käufe).

> [!NOTE]
> Wenn Sie Facebook verwenden, gehen Sie zu Ihrem Haupt-Feed und sehen Sie sich den Strom von Beiträgen an. Beachten Sie, dass einige Beiträge nicht in chronologischer Reihenfolge erscheinen — insbesondere Beiträge mit mehr „Likes“ stehen oft weiter oben in der Liste als neuere Beiträge.
>
> Sehen Sie sich auch an, welche Art von Werbung Ihnen angezeigt wird — möglicherweise sehen Sie Werbung für Dinge, die Sie auf anderen Websites angesehen haben. Der Algorithmus von Facebook zum Hervorheben von Inhalten und Werbung kann etwas rätselhaft sein, aber es ist klar, dass er von Ihren Likes und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und seine Hauptaufgabe darin besteht, zu steuern, _welche_ Informationen an den Benutzer gesendet werden (während clientseitiger Code hauptsächlich die Struktur und Darstellung dieser Daten für den Benutzer behandelt).

Sie sollten außerdem verstehen, dass dies nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die auf _effiziente_ Weise auf einzelne Benutzer zugeschnittene Informationen bereitstellen. Außerdem sollten Sie eine gute Vorstellung von einigen Dingen haben, die Sie als serverseitiger Programmierer tun können.

Abschließend sollten Sie verstehen, dass serverseitiger Code in verschiedenen Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu vereinfachen.

In einem zukünftigen Artikel helfen wir Ihnen bei der Auswahl des besten Web-Frameworks für Ihre erste Website. Hier führen wir Sie etwas detaillierter durch die wichtigsten Client-Server-Interaktionen.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
