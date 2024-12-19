---
title: Einführung in die Server-Seite
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen im MDN-Anfängerkurs zur Programmierung auf der Server-Seite! In diesem ersten Artikel betrachten wir die Programmierung auf der Server-Seite aus einer höheren Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der Programmierung auf der Client-Seite?" und "Warum ist es so nützlich?". Nach dem Lesen dieses Artikels werden Sie die zusätzliche Leistungsfähigkeit verstehen, die Webseiten durch das Codieren auf der Server-Seite zur Verfügung steht.

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
        Vertrautheit mit dem, was Server-seitige Programmierung ist, was sie leisten kann und wie sie sich von der Client-seitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten großen Websites verwenden Server-seitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen, die in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und über etwas Code (z.B. HTML und JavaScript) an den Client gesendet werden, um angezeigt zu werden.

Vielleicht der bedeutendste Vorteil von Server-seitigem Code ist, dass er es ermöglicht, Websiteninhalte für einzelne Benutzer anzupassen. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Sie können auch die Nutzung der Seiten erleichtern, indem persönliche Präferenzen und Informationen gespeichert werden – beispielsweise gespeicherte Kreditkartendaten wiederverwenden, um nachfolgende Zahlungen zu vereinfachen.

Es kann sogar die Interaktion mit Nutzern der Website ermöglichen, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle zu senden. All diese Fähigkeiten ermöglichen eine viel tiefere Einbindung der Benutzer.

In der modernen Welt der Webentwicklung wird empfohlen, sich mit der Entwicklung auf der Server-Seite vertraut zu machen.

## Was ist Programmierung auf der Server-Seite für Websites?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) unter Verwendung des **H**yper**T**ext **T**ransfer **P**rotocols ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel um die Ressource abzurufen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die Feld-Wert-Paare, die über einen [Query-String](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die von der [HTTP POST-Methode](/de/docs/Web/HTTP/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Client-Anfragemeldungen, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer **HTTP-Antwort**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z.B. "HTTP/1.1 200 OK" bei Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das untenstehende Diagramm zeigt eine einfache Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die bei Anforderung einer bestimmten Ressource immer denselben fest codierten Inhalt vom Server zurückgibt). Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage mit der URL.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [Erfolgsstatus](/de/docs/Web/HTTP/Status#successful_responses) (in der Regel 200 OK) zurück. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ generiert wird, nur wenn es nötig ist. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine viel effizientere Art, große Mengen von Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann für eine URL basierend auf Informationen, die vom Benutzer bereitgestellt oder in Präferenzen gespeichert werden, unterschiedliche Daten zurückgeben und kann weitere Operationen als Teil der Rückgabe einer Antwort durchführen (z.B. Benachrichtigungen senden).

Der Großteil des Codes, der eine dynamische Website unterstützt, muss auf dem Server ausgeführt werden. Das Erstellen dieses Codes wird als "**Programmierung auf der Server-Seite**" (oder manchmal als "**Back-End-Scripting**") bezeichnet.

Das Diagramm unten zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, der die Anfragen verarbeitet und entsprechende HTTP-Antworten zurückgibt.

Anfragen für _statische_ Ressourcen werden auf dieselbe Weise wie bei statischen Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern – typischerweise: CSS, JavaScript, Bilder, vorerstellte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der die Programmierung auf der Server-Seite verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu konstruieren. Dies ist dasselbe Diagramm wie im Client-Server-Überblick.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen an Server-seitigen Code weitergeleitet (2), der im Diagramm als _Webanwendung_ dargestellt ist. Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest benötigte Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind Programmierung auf der Server-Seite und Client-Seite dasselbe?

Wenden wir uns nun dem Code zu, der in der Programmierung auf der Server-Seite und der Client-Seite beteiligt ist. In jedem Fall ist der Code signifikant unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Client-Seite verwendet werden kann).
- Sie laufen in verschiedenen Betriebssystemumgebungen.

Code, der im Browser läuft, wird als **Client-seitiger Code** bezeichnet und ist hauptsächlich darauf ausgerichtet, das Aussehen und das Verhalten einer gerenderten Webseite zu verbessern. Dazu gehören die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, die Navigation, die Formularvalidierung usw. Im Gegensatz dazu befasst sich die Programmierung auf der Server-Seite hauptsächlich damit, _welche Inhalte_ als Antwort auf Anfragen an den Browser zurückgesendet werden. Der Server-seitige Code übernimmt Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der richtigen Daten an den Client nach Bedarf.

Client-seitiger Code wird mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben – er wird in einem Webbrowser ausgeführt und hat kaum oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich begrenztem Zugang zum Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer möglicherweise verwendet, um eine Website anzuzeigen – Browser bieten ungleichmäßige Kompatibilitätsniveaus mit Funktionen des Client-seitigen Codes, und eine der Herausforderungen der Programmierung auf der Client-Seite ist es, Unterschiede in der Browser-Unterstützung elegant zu handhaben.

Server-seitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden – Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der Server-seitige Code hat vollen Zugriff auf das Betriebssystem des Servers, und der Entwickler kann wählen, welche Programmiersprache (und welche spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code in der Regel mit **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die darauf ausgelegt sind, häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Auch wenn sowohl Client- als auch Server-seitiger Code Frameworks verwenden, sind die Bereiche sehr unterschiedlich, und daher auch die Frameworks. Client-seitige Web-Frameworks vereinfachen Layout- und Präsentationsaufgaben, während Server-seitige Web-Frameworks eine Menge "gewöhnlicher" Webserver-Funktionalität bieten, die Sie sonst selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugang, Vorlagenbibliotheken usw.).

> [!NOTE]
> Client-seitige Frameworks werden oft verwendet, um die Entwicklung von Client-seitigem Code zu beschleunigen, aber es steht Ihnen auch frei, den gesamten Code manuell zu schreiben; tatsächlich kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-Benutzeroberfläche benötigen.
>
> Im Gegensatz dazu würden Sie fast nie in Betracht ziehen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben – die Implementierung eines wesentlichen Features wie eines HTTP-Servers ist wirklich schwer von Grund auf neu in Python zu tun, aber Python-Web-Frameworks wie Django bieten ein solches sofort verfügbar, zusammen mit anderen sehr nützlichen Tools.

## Was können Sie auf der Server-Seite tun?

Die Programmierung auf der Server-Seite ist sehr nützlich, weil sie es uns ermöglicht, Informationen effizient zu liefern, die für einzelne Benutzer maßgeschneidert sind, und dadurch ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon verwenden Server-seitige Programmierung, um Suchergebnisse für Produkte zu konstruieren, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früherem Kaufverhalten zu machen, Käufe zu vereinfachen usw.

Banken verwenden Server-seitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern zu ermöglichen, Transaktionen anzuzeigen und durchzuführen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden Server-seitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu kontrollieren.

Einige der häufigsten Anwendungen und Vorteile der Programmierung auf der Server-Seite sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden. Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Die Programmierung auf der Server-Seite ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und dynamisch HTML und andere Dateitypen (z.B. PDFs, Bilder usw.) zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) für die Darstellung von geeigneten Client-seitigen Web-Frameworks zurückzugeben (dies reduziert die Verarbeitungslast auf dem Server und die Menge der gesendeten Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und kann stattdessen das Ergebnis von Software-Tools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Typ des empfangenden Client-Geräts ausgerichtet sein.

Da die Informationen in einer Datenbank vorliegen, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, kann das Geschäft seine Bestandsdatenbank aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss sich nicht anstrengen, um den Nutzen von Server-seitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Site.
> 2. Suchen Sie nach mehreren Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, obwohl sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank gezogen wurde.
>
> Für einen allgemeinen Suchbegriff ("Fish", sagen wir) können Sie Millionen von zurückgegebenen Werten sehen. Die Verwendung einer Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und ermöglicht es, die Darstellung der Informationen an nur einer Stelle zu steuern.

### Benutzerdefiniertes Benutzererlebnis

Server können Informationen über Kunden speichern und verwenden, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Zum Beispiel speichern viele Websites Kreditkarten, sodass Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte für die Bereitstellung von Routing-Informationen verwenden und Such- oder Reisehistorien nutzen, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusagen und Antworten und Benachrichtigungen weiter zu individualisieren, indem beispielsweise eine Liste zuvor besuchter oder beliebter Orte bereitgestellt wird, die Sie auf einer Karte ansehen möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Verlaufsdaten. Häufig besuchte oder häufig gesuchte Orte werden gegenüber anderen stärker hervorgehoben.
>
> Google-Suchergebnisse werden basierend auf früheren Suchen optimiert.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Football".
> 3. Versuchen Sie nun, "Favorite" in das Suchfeld einzugeben und beobachten Sie die Autocomplete-Suchvorschläge.
>
> Zufall? Keineswegs!

### Kontrollierter Zugriff auf Inhalte

Die Programmierung auf der Server-Seite ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Echte Beispiele sind soziale Netzwerke, die es Benutzern ermöglichen, festzulegen, wer die von ihnen geposteten Inhalte sehen kann, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Bedenken Sie andere reale Beispiele, bei denen der Zugriff auf Inhalte kontrolliert wird. Was können Sie beispielsweise sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Melden Sie sich in Ihrem Konto an – welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Speicherung von Sitzungs-/Zustandsinformationen

Die Programmierung auf der Server-Seite ermöglicht es Entwicklern, **Sitzungen** zu nutzen – im Wesentlichen ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verknüpft sind, und unterschiedliche Antworten basierend auf diesen Informationen zu senden.

Dies ermöglicht es beispielsweise einer Seite zu wissen, dass ein Benutzer sich bereits angemeldet hat und Links zu seinen E-Mails oder seiner Bestellhistorie anzuzeigen, oder vielleicht den Zustand eines einfachen Spiels zu speichern, sodass der Benutzer die Seite erneut besuchen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite mit einem Abonnementmodell und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiter über mehrere Stunden/Tage hinweg. Schließlich werden Sie beginnen, auf Seiten umgeleitet zu werden, die erklären, wie man abonniert, und Sie werden unfähig sein, Artikel zuzugreifen. Diese Informationen sind ein Beispiel für in Cookies gespeicherte Sitzungsinformationen.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen entweder über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS, um Sie über neue Kommunikation zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die denjenigen, die bereits gekauft oder betrachtet wurden, ähnlich sind und an denen Sie möglicherweise interessiert sind.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren senden, die sie auf geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivitäten aufmerksam machen.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Website, die Sie interessiert (Google, Amazon, Instagram usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie werden bald eine E-Mail erhalten, die Ihre Registrierung bestätigt oder eine Bestätigung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann eine Menge Daten über Benutzer sammeln: wonach sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Die Programmierung auf der Server-Seite kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben sowohl Amazon als auch Google Produkte basierend auf vorherigen Suchen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Nutzer sind, gehen Sie zu Ihrem Haupt-Feed und schauen Sie sich den Strom von Beiträgen an. Beachten Sie, wie einige der Beiträge nicht in nummerischer Reihenfolge sind – insbesondere Posts mit mehr "Likes" höher auf der Liste sind als neuere Posts.
>
> Schauen Sie sich auch an, welche Art von Anzeigen Sie sehen – Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Websites angesehen haben. Facebooks Algorithmus zum Hervorheben von Inhalten und Werbung kann etwas im Dunkeln liegen, aber es ist klar, dass er von Ihren "Likes" und Sehgewohnheiten abhängt!

## Zusammenfassung

Glückwunsch, Sie haben das Ende des ersten Artikels über die Programmierung auf der Server-Seite erreicht.

Sie haben nun gelernt, dass Server-seitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, _welche_ Informationen dem Benutzer gesendet werden (während Client-seitiger Code hauptsächlich den Aufbau und die Präsentation dieser Daten für den Benutzer übernimmt).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen maßgeschneidert für einzelne Benutzer _effizient_ liefern, und Sie haben eine gute Vorstellung von einigen der Dinge, die Sie als Server-seitiger Programmierer tun könnten.

Letztlich sollten Sie verstehen, dass Server-seitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess einfacher zu gestalten.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Seite auszuwählen. Hier werden wir Sie durch die wesentlichen Client-Server-Interaktionen mit etwas mehr Detail führen.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
