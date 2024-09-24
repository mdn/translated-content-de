---
title: Einführung in die serverseitige Programmierung
slug: Learn/Server-side/First_steps/Introduction
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

Willkommen beim MDN Anfängerkurs in serverseitiger Programmierung! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer übergeordneten Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nach dem Lesen dieses Artikels werden Sie die zusätzlichen Möglichkeiten verstehen, die Websites durch serverseitige Programmierung zur Verfügung stehen.

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
        Vertrautheit mit dem zu gewinnen, was serverseitige Programmierung ist, was sie leisten kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf unterschiedliche Daten dynamisch anzuzeigen, die in der Regel aus einer auf einem Server gehosteten Datenbank abgerufen und dann an den Client gesendet werden, um mittels Code (z. B. HTML und JavaScript) angezeigt zu werden.

Vielleicht ist der größte Vorteil von serverseitigem Code, dass er es ermöglicht, Website-Inhalte für einzelne Benutzer individuell anzupassen. Dynamische Seiten können Inhalte hervorheben, die auf Benutzerpräferenzen und -gewohnheiten basieren. Sie können auch Websites benutzerfreundlicher machen, indem sie persönliche Einstellungen und Informationen speichern — zum Beispiel durch Wiederverwendung gespeicherter Kreditkartendaten, um nachfolgende Zahlungen zu vereinfachen.

Es kann sogar die Interaktion mit den Benutzern der Website ermöglichen, indem Benachrichtigungen und Updates per E-Mail oder über andere Kanäle gesendet werden. All diese Fähigkeiten ermöglichen eine viel tiefere Einbindung der Nutzer.

In der modernen Welt der Webentwicklung ist es sehr empfehlenswert, sich über serverseitige Entwicklung zu informieren.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{glossary("HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage umfasst eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (z. B. um die Ressource zu erhalten, zu löschen oder zu übermitteln) und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die Feld-Wert-Paare, die über eine [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die durch die [HTTP POST-Methode](/de/docs/Web/HTTP/Methods/POST) gesendet werden) oder in zugehörigen {{glossary("Cookie", "Cookies")}}.

Webserver warten auf Client-Anfragen, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer **HTTP-Antwort**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z. B. "HTTP/1.1 200 OK" für Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z. B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das untenstehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die bei Anforderung einer bestimmten Ressource immer denselben hartcodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage, in der die URL angegeben wird.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Status#successful_responses) enthält (normalerweise 200 OK). Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur bei Bedarf. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine viel effizientere Methode, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann für eine URL unterschiedliche Daten zurückgeben, basierend auf den vom Benutzer bereitgestellten Informationen oder gespeicherten Präferenzen, und kann andere Operationen als Teil der Rückgabe einer Antwort durchführen (z. B. Benachrichtigungen senden).

Ein Großteil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server ausgeführt werden. Das Erstellen dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal "**Back-end-Scripting**") bezeichnet.

Das untenstehende Diagramm zeigt eine einfache Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, der die Anfragen dann verarbeitet und entsprechende HTTP-Antworten zurückgibt.

Anfragen für _statische_ Ressourcen werden genauso behandelt wie bei statischen Websites (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorerstellte PDF-Dateien etc.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen (2) an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ bezeichnet). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Lassen Sie uns nun den Code betrachten, der für die serverseitige und clientseitige Programmierung verwendet wird. In beiden Fällen ist der Code signifikant unterschiedlich:

- Sie haben verschiedene Zwecke und Anliegen.
- Sie verwenden im Allgemeinen nicht dieselben Programmiersprachen (Ausnahme ist JavaScript, das auf Server- und Client-Seite verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, ist als **clientseitiger Code** bekannt und konzentriert sich in erster Linie darauf, das Erscheinungsbild und Verhalten einer gerenderten Webseite zu verbessern. Dazu gehören das Auswählen und Gestalten von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung usw. Im Gegensatz dazu geht es bei der serverseitigen Website-Programmierung hauptsächlich darum, _welche Inhalte_ als Antwort auf Anfragen an den Browser zurückgeschickt werden. Der serverseitige Code übernimmt Aufgaben wie die Validierung eingesendeter Daten und Anfragen, die Nutzung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der richtigen Daten an den Client nach Bedarf.

Clientseitiger Code wird mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) geschrieben — er wird innerhalb eines Webbrowsers ausgeführt und hat wenig bis keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eingeschränktem Zugriff auf das Dateisystem).

Webentwickler können nicht steuern, welchen Browser jeder Benutzer zur Ansicht einer Webseite verwendet — Browser bieten unterschiedliche Niveaus an Kompatibilität mit clientseitigen Code-Features, und eine der Herausforderungen bei der clientseitigen Programmierung besteht darin, die Unterschiede in der Browserunterstützung elegant zu handhaben.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Server-Betriebssystem und der Entwickler kann wählen, welche Programmiersprache (und spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code in der Regel unter Verwendung von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Code-Konstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Auch wenn sowohl clientseitiger als auch serverseitiger Code Frameworks verwendet, sind die Bereiche sehr unterschiedlich, und daher sind es auch die Frameworks. Clientseitige Web-Frameworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks eine Menge "gemeinsamer" Webserver-Funktionalität bieten, die Sie ansonsten selbst implementieren müssten (z. B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Templating-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden oft verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann es schneller und effizienter sein, den Code von Hand zu schreiben, wenn Sie nur eine kleine, einfache Website-UI benötigen.
>
> Im Gegensatz dazu würden Sie fast nie in Erwägung ziehen, die serverseitige Komponente einer Webanwendung ohne ein Framework zu schreiben — eine wichtige Funktion wie einen HTTP-Server von Grund auf neu zu implementieren, ist in Python zum Beispiel sehr schwierig, aber Python-Web-Frameworks wie Django bieten einen standardmäßig an, zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, weil sie es uns ermöglicht, Informationen _effizient_ bereitzustellen, die für einzelne Benutzer maßgeschneidert sind und damit ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon nutzen serverseitige Programmierung, um Suchergebnisse für Produkte zu konstruieren, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu machen, Käufe zu vereinfachen usw.

Banken verwenden serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern die Ansicht und Durchführung von Transaktionen zu ermöglichen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia nutzen serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff auf sie zu kontrollieren.

Einige der häufigsten Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Dabei werden Sie feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jede Nachricht eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht es, die Informationen stattdessen in einer Datenbank zu speichern und HTML und andere Dateitypen (z. B. PDFs, Bilder usw.) dynamisch zu konstruieren und zurückzusenden. Es ist auch möglich, Daten ({{glossary("JSON")}}, {{glossary("XML")}} usw.) zur Darstellung durch geeignete clientseitige Web-Frameworks zurückzugeben (dies reduziert die Belastung des Servers und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und kann alternativ das Ergebnis von Software-Tools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar für den Typ des Client-Geräts, das ihn empfängt, gezielt sein.

Da die Informationen in einer Datenbank vorliegen, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder im stationären Handel verkauft werden, könnte der Shop sein Inventar-Datenbank aktualisieren).

> [!NOTE]
> Ihre Fantasie muss sich nicht anstrengen, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Site.
> 2. Suchen Sie nach einer Reihe von Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, auch wenn sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber die Inhalte für verschiedene Produkte aus der Datenbank abgerufen wurden.
>
> Bei einem häufig gesuchten Begriff ("Fisch", zum Beispiel) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Mit einer Datenbank können diese effizient gespeichert und geteilt werden, und sie erlaubt die Präsentation der Informationen an nur einem Ort zu steuern.

### Personalisierte Benutzererfahrung

Server können Informationen über Clients speichern und verwenden, um eine bequeme und maßgeschneiderte Benutzererfahrung bereitzustellen. Beispielsweise speichern viele Websites Kreditkarteninformationen, so dass Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformationen bereitzustellen, und Such- oder Reisehistorien, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusehen und die Antworten und Benachrichtigungen weiter anzupassen, beispielsweise indem eine Liste zuvor besuchter oder beliebter Orte bereitgestellt wird, die Sie sich auf einer Karte ansehen möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchshistorie. Häufig besuchte oder häufig gesuchte Orte werden mehr als andere hervorgehoben.
>
> Google-Suchergebnisse sind basierend auf früheren Suchanfragen optimiert.
>
> 1. Gehen Sie zur [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Lieblings-" in das Suchfeld einzugeben und beobachten Sie die Autovervollständigungssuchvorschläge.
>
> Zufall? Nada!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Reale Beispiele umfassen soziale Netzwerke, die es Benutzern ermöglichen zu bestimmen, wer die von ihnen auf die Website eingestellten Inhalte sehen kann und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Denken Sie an andere reale Beispiele, bei denen der Zugang zu Inhalten kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Site Ihrer Bank gehen? Loggen Sie sich in Ihr Konto ein — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Speicherung von Sitzungs-/Statusinformationen

Serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen — im Grunde ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Site verbunden sind, und verschiedene Antworten basierend auf diesen Informationen zu senden.

Dies erlaubt es beispielsweise einer Site zu wissen, dass ein Benutzer bereits eingeloggt ist und Links zu ihren E-Mails oder Bestellhistorie anzuzeigen, oder vielleicht den Status eines einfachen Spiels zu speichern, damit der Benutzer die Site erneut besuchen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat und öffnen Sie eine Reihe von Tabs (z. B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiter über mehrere Stunden/Tage hinweg. Schließlich werden Sie beginnen, zu Seiten umgeleitet zu werden, die erklären, wie Sie ein Abonnement abschließen können, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert werden.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Video-Unterhaltungen oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter versenden E-Mails und SMS-Nachrichten, um Sie über neue Mitteilungen zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Ihnen Produkte vorschlagen, die den bereits gekauften oder angesehenen ähneln, die Sie möglicherweise interessieren könnten.
- Ein Webserver könnte Warnmeldungen an die Site-Administratoren senden, die sie über geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivitäten informieren.

> [!NOTE]
> Der häufigste Benachrichtigungstyp ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Website aus, die Sie interessiert (Google, Amazon, Instagram usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten bald eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: wonach sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf einer Analyse dieser Daten zu verfeinern.

Zum Beispiel werben sowohl Amazon als auch Google für Produkte basierend auf früheren Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Benutzer sind, gehen Sie zu Ihrem Hauptfeed und schauen Sie sich die Vielzahl von Beiträgen an. Beachten Sie, wie einige der Beiträge nicht in numerischer Reihenfolge sind — insbesondere Beiträge mit mehr "Likes" sind oft höher in der Liste als neuere Beiträge.
>
> Schauen Sie sich auch an, welche Art von Anzeigen Ihnen gezeigt werden — Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Seiten angesehen haben. Der Algorithmus von Facebook zur Hervorhebung von Inhalten und Werbung kann etwas mysteriös sein, aber es ist klar, dass er auf Ihren Vorlieben und Betrachtungsgewohnheiten basiert!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, zu kontrollieren, _welche_ Informationen an den Benutzer gesendet werden (während sich clientseitiger Code hauptsächlich mit der Struktur und Darstellung dieser Daten für den Benutzer befasst).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen, die für einzelne Benutzer maßgeschneidert sind, _effizient_ liefern, und Sie haben eine gute Vorstellung davon, was Sie tun könnten, wenn Sie ein serverseitiger Programmierer werden.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Website auszuwählen. Hier werden wir Ihnen die wichtigsten Client-Server-Interaktionen in etwas mehr Detail erklären.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
