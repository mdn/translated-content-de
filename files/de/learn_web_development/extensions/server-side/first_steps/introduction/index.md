---
title: Einführung in die serverseitige Programmierung
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen zum Anfängerkurs zur serverseitigen Programmierung auf den MDN-Web-Dokumenten! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer übergeordneten Perspektive und beantworten Fragen wie „Was ist das?“, „Wie unterscheidet es sich von der clientseitigen Programmierung?“ und „Warum ist es so nützlich?“. Nach dem Lesen dieses Artikels werden Sie die zusätzlichen Möglichkeiten verstehen, die Websites durch serverseitiges Codieren bieten.

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

Die meisten großangelegten Websites verwenden serverseitigen Code, um bei Bedarf unterschiedliche Daten dynamisch anzuzeigen, die in der Regel aus einer auf einem Server gespeicherten Datenbank stammen und an den Client gesendet werden, um dort über einen Code (z. B. HTML und JavaScript) angezeigt zu werden.

Der vielleicht bedeutendste Vorteil von serverseitigem Code besteht darin, dass er es ermöglicht, Website-Inhalte für einzelne Benutzer maßzuschneidern. Dynamische Seiten können Inhalte hervorheben, die basierend auf den Vorlieben und Gewohnheiten der Benutzer relevanter sind. Sie können Websites auch benutzerfreundlicher machen, indem persönliche Vorlieben und Informationen gespeichert werden — beispielsweise die Wiederverwendung gespeicherter Kreditkartendaten, um nachfolgende Zahlungen zu vereinfachen.

Es kann sogar die Interaktion mit den Nutzern der Seite ermöglichen, indem Benachrichtigungen und Updates per E-Mail oder über andere Kanäle gesendet werden. All diese Fähigkeiten ermöglichen eine viel tiefere Einbindung der Benutzer.

In der modernen Welt der Webentwicklung wird dringend empfohlen, sich mit der serverseitigen Entwicklung zu beschäftigen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage umfasst eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel um die Ressource abzurufen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern (die Feld-Wert-Paare, die über eine [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die durch die [HTTP POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}} codiert sind.

Webserver warten auf Anfragen von Clients, verarbeiten sie bei Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwort**nachricht. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war (z. B. „HTTP/1.1 200 OK" für Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z. B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das unten stehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die beim Anfordern einer bestimmten Ressource denselben festkodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-„GET“-Anfrage, die ihre URL angibt.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt als HTTP-Antwort das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) zurück (in der Regel 200 OK). Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur dann, wenn er benötigt wird. Auf einer dynamischen Website werden HTML-Seiten normalerweise durch das Einfügen von Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen erstellt (dies ist eine viel effizientere Art der Speicherung großer Inhaltsmengen als bei statischen Websites).

Eine dynamische Seite kann für eine URL basierend auf Informationen, die vom Benutzer bereitgestellt werden oder in gespeicherten Präferenzen enthalten sind, unterschiedliche Daten zurückgeben und kann andere Operationen als Teil der Rückgabe einer Antwort ausführen (z. B. das Versenden von Benachrichtigungen).

Der Großteil des Codes, der eine dynamische Website unterstützt, muss auf dem Server ausgeführt werden. Dieser Code zu erstellen, wird als "**serverseitige Programmierung**" (oder manchmal als "**Back-End-Scripting**") bezeichnet.

Das unten stehende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, woraufhin der Server die Anfragen verarbeitet und entsprechende HTTP-Antworten zurücksendet.

Anfragen nach _statischen_ Ressourcen werden auf die gleiche Weise wie bei statischen Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern – typischerweise: CSS, JavaScript, Bilder, vorher erstellte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank zu erhalten und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie im Client-Server-Überblick.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen (2) an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ dargestellt). Bei „dynamischen Anfragen“ interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Wenden wir uns nun dem Code zu, der in der serverseitigen und der clientseitigen Programmierung beteiligt ist. In jedem Fall ist der Code erheblich unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl server- als auch clientseitig verwendet werden kann).
- Sie laufen in verschiedenen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und konzentriert sich hauptsächlich auf die Verbesserung des Erscheinungsbilds und des Verhaltens einer gerenderten Webseite. Dazu gehört das Auswählen und Gestalten von UI-Komponenten, das Erstellen von Layouts, Navigationen, Formularprüfungen usw. Im Gegensatz dazu befasst sich die serverseitige Website-Programmierung hauptsächlich damit, _welcher Inhalt_ als Reaktion auf Anfragen an den Browser zurückgegeben wird. Der serverseitige Code behandelt Aufgaben wie das Validieren eingereichter Daten und Anfragen, die Verwendung von Datenbanken zur Speicherung und Abruf von Daten und das Senden der erforderlichen Daten an den Client bei Bedarf.

Clientseitiger Code wird in [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben - er wird in einem Webbrowser ausgeführt und hat wenig bis gar keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eingeschränktem Zugriff auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer zum Ansehen einer Website möglicherweise verwendet - Browser bieten inkonsistente Ebenen von Kompatibilität mit clientseitigen Codefunktionen, und ein Teil der Herausforderung bei der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung elegant zu handhaben.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden - Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Server-Betriebssystem und der Entwickler kann wählen, welche Programmiersprache (und welche spezielle Version) er verwenden möchte.

Entwickler schreiben ihren Code typischerweise mithilfe von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die unterschiedlichen Aufgabentypen zu vereinfachen, mit denen man in einem bestimmten Bereich konfrontiert ist.

Auch hier verwenden sowohl der client- als auch der serverseitige Code Frameworks, die Bereiche sind jedoch sehr unterschiedlich und daher auch die Frameworks. Clientseitige Web-Frameworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks viele „gemeinsame“ Webserver-Funktionalitäten bieten, die man sonst selbst implementieren müsste (z. B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Templating-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden häufig verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber man kann sich auch entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-UI benötigen.
>
> Im Gegensatz dazu würde man fast nie in Betracht ziehen, die serverseitige Komponente einer Webanwendung ohne ein Framework zu schreiben - die Implementierung einer wichtigen Funktion wie eines HTTP-Servers ist wirklich schwer, von Grund auf zu tun, sagen wir in Python, aber Python-Web-Frameworks wie Django bieten einen solchen „out of the box“, zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Serverseite tun?

Die serverseitige Programmierung ist sehr nützlich, da sie es uns ermöglicht, Informationen _effizient_ für einzelne Benutzer bereitzustellen und dadurch ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon verwenden serverseitige Programmierung, um Suchergebnisse für Produkte zu erstellen, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu geben, Einkäufe zu vereinfachen usw.

Banken verwenden die serverseitige Programmierung zur Speicherung von Kontoinformationen und ermöglichen nur autorisierten Benutzern das Anzeigen und Durchführen von Transaktionen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff zu steuern.

Einige der häufigen Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte bei Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Die serverseitige Programmierung ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML und andere Dateitypen (z. B. PDFs, Bilder usw.) dynamisch zu erstellen und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) für die Darstellung durch geeignete clientseitige Web-Frameworks zurückzugeben (dies reduziert die Verarbeitungsbelastung auf dem Server und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, sondern könnte alternativ das Ergebnis von Softwaretools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Gerätetyp zugeschnitten werden, der ihn empfängt.

Weil die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Datenbank des Inventars aktualisieren).

> [!NOTE]
> Sie müssen sich nicht viel anstrengen, um den Vorteil von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie auf [Amazon](https://www.amazon.com/) oder eine andere E-Commerce-Site.
> 2. Suchen Sie nach einigen Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, obwohl sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, der Inhalt für verschiedene Produkte jedoch aus der Datenbank gezogen wurde.
>
> Bei einem allgemeinen Suchbegriff („Fisch“, sagen wir) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Durch die Verwendung einer Datenbank können diese effizient gespeichert und geteilt und die Präsentation der Informationen an nur einem Ort kontrolliert werden.

### Maßgeschneidertes Benutzererlebnis

Server können Informationen über Clients speichern und verwenden, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Beispielsweise speichern viele Websites Kreditkarten, damit die Daten nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routing-Informationen bereitzustellen, und Such- oder Reisehistorien, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusehen und Antworten und Benachrichtigungen weiter anzupassen, beispielsweise indem eine Liste der zuvor besuchten oder beliebten Orte bereitgestellt wird, die Sie auf einer Karte ansehen möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchshistorie. Häufig besuchte oder häufig gesuchte Standorte werden mehr als andere hervorgehoben.
>
> Die Google-Suchergebnisse sind basierend auf früheren Suchen optimiert.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach „Fußball“.
> 3. Versuchen Sie anschließend, „Lieblings-“ in das Suchfeld einzugeben und beobachten Sie die Autovervollständigungs-Vorhersagen.
>
> Zufall? Keineswegs!

### Kontrollierter Zugriff auf Inhalte

Die serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen zu liefern, die ein Benutzer sehen darf.

Reale Beispiele sind soziale Netzwerke, die es Benutzern ermöglichen, zu bestimmen, wer die Inhalte sehen kann, die sie auf die Website stellen, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, bei denen der Zugriff auf Inhalte kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Loggen Sie sich in Ihr Konto ein – welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Sitzungs-/Statusinformationen speichern

Die serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen - im Grunde eine Mechanik, die es einem Server ermöglicht, Informationen zu speichern, die dem aktuellen Benutzer einer Seite zugeordnet sind, und basierend auf diesen Informationen unterschiedliche Antworten zu senden.

Dies erlaubt es beispielsweise, dass eine Seite weiß, dass ein Benutzer sich zuvor eingeloggt hat und Links zu seinen E-Mails oder seiner Bestellhistorie anzeigt, oder vielleicht den Zustand eines einfachen Spiels speichert, sodass der Benutzer eine Seite erneut besuchen und dort fortfahren kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnement-Modell hat, und öffnen Sie eine Reihe von Tabs (z. B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite über mehrere Stunden/Tage hinweg kontinuierlich. Schließlich werden Sie anfangen, auf Seiten umgeleitet zu werden, die erklären, wie man ein Abonnement abschließt, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert sind.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Mitteilungen zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die ähnliche Produkte vorschlagen, die Sie bereits gekauft oder angesehen haben.
- Ein Webserver kann Warnmeldungen an Webseitenadministratoren senden, die auf niedrigen Speicher auf dem Server oder verdächtiges Benutzerverhalten hinweisen.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine „Bestätigung der Registrierung“. Wählen Sie fast jede große Seite, die Sie interessiert (Google, Amazon, Instagram usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten in Kürze eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung zur Aktivierung Ihres Kontos erforderlich macht.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: wonach sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Die serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Beispielsweise werben Amazon und Google Produkte basierend auf vorherigen Suchen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Benutzer sind, gehen Sie auf Ihren Haupt-Feed und schauen Sie sich den Strom von Beiträgen an. Beachten Sie, wie einige Beiträge nicht in numerischer Reihenfolge sind - insbesondere Beiträge mit mehr „Likes“ sind oft höher auf der Liste als jüngere Beiträge.
>
> Sehen Sie auch, welche Art von Anzeigen Ihnen angezeigt werden – Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Seiten angesehen haben. Der Algorithmus von Facebook zur Highlightsetzung von Inhalten und Werbung kann ein wenig geheimnisvoll sein, aber es ist klar, dass er von Ihren Likes und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und seine Hauptaufgabe darin besteht, zu steuern, _welche_ Informationen an den Benutzer gesendet werden (während sich clientseitiger Code hauptsächlich um die Struktur und Darstellung dieser Daten für den Benutzer kümmert).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen _effizient_ für einzelne Benutzer bereitstellen, und eine gute Vorstellung davon haben, was Sie tun könnten, wenn Sie ein serverseitiger Programmierer sind.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel helfen wir Ihnen bei der Auswahl des besten Web-Frameworks für Ihre erste Seite. Hier führen wir Sie durch die Hauptinteraktionen zwischen Client und Server in etwas mehr Detail.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
