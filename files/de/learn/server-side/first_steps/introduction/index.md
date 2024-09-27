---
title: Einführung in die Serverseite
slug: Learn/Server-side/First_steps/Introduction
l10n:
  sourceCommit: cae1efc0face20ee84d888dd93ca4f276c40a5d8
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

Willkommen zum Einstiegsprogrammierkurs für die Serverseite auf MDN! In diesem ersten Artikel betrachten wir die Programmierung auf der Serverseite aus einer höheren Perspektive und beantworten Fragen wie "was ist das?", "wie unterscheidet es sich von der Programmierung auf der Clientseite?" und "warum ist es so nützlich?". Nach dem Lesen dieses Artikels werden Sie die zusätzliche Leistungsfähigkeit verstehen, die Webseiten durch serverseitige Codierung zur Verfügung steht.

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
        Vertrautheit mit der Programmierung auf der Serverseite zu gewinnen, was sie leisten kann und wie sie sich von der Programmierung auf der Clientseite unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf unterschiedliche Daten dynamisch anzuzeigen, die in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und über Code (z. B. HTML und JavaScript) an den Client gesendet werden, um angezeigt zu werden.

Der vielleicht bedeutendste Vorteil von serverseitigem Code ist, dass er es Ihnen ermöglicht, Website-Inhalte für einzelne Benutzer anzupassen. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Sie können Websites auch benutzerfreundlicher machen, indem sie persönliche Präferenzen und Informationen speichern — beispielsweise die Wiederverwendung gespeicherter Kreditkartendaten, um nachfolgende Zahlungen zu vereinfachen.

Sie können sogar die Interaktion mit den Benutzern der Website ermöglichen, indem sie Benachrichtigungen und Updates per E-Mail oder über andere Kanäle senden. All diese Funktionen ermöglichen eine viel tiefere Einbindung der Benutzer.

In der modernen Welt der Webentwicklung ist es sehr zu empfehlen, etwas über serverseitige Entwicklung zu lernen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ([HTTP](/de/docs/Glossary/HTTP)). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche starten, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (z. B. um die Ressource abzurufen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern kodiert sind (die Feld-Wert-Paare, die über eine [Query-String](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die von der [HTTP POST-Methode](/de/docs/Web/HTTP/Methods/POST) gesendet werden) oder in zugehörigen [Cookies](/de/docs/Glossary/Cookie).

Webserver warten auf Client-Anfragen, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer **HTTP-Antwort**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war (z.B. "HTTP/1.1 200 OK" für Erfolg).

Der Körper einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das folgende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die denselben fest programmierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird). Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage, die ihre URL angibt.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Status#successful_responses) (normalerweise 200 OK) enthält. Kann die Datei aus irgendeinem Grund nicht abgerufen werden, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur bei Bedarf. Auf einer dynamischen Website werden HTML-Seiten normalerweise durch das Einfügen von Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen erstellt (dies ist eine viel effizientere Möglichkeit, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann für eine URL unterschiedliche Daten basierend auf Informationen liefern, die vom Benutzer bereitgestellt oder in gespeicherten Präferenzen gespeichert sind, und kann als Teil der Rückgabeantwort andere Operationen ausführen (z.B. Benachrichtigungen senden).

Der größte Teil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server ausgeführt werden. Die Erstellung dieses Codes nennt man "**serverseitige Programmierung**" (oder gelegentlich "**Back-End-Scripting**").

Das folgende Diagramm zeigt eine einfache Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, der dann die Anfragen verarbeitet und entsprechende HTTP-Antworten zurückgibt.

Anfragen nach _statischen_ Ressourcen werden auf dieselbe Weise wie bei statischen Seiten behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorab erstellte PDF-Dateien, etc.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen an serverseitigen Code weitergeleitet (im Diagramm als _Web-Anwendung_ gezeigt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung gleich?

Wenden wir uns nun dem Code zu, der bei der serverseitigen und clientseitigen Programmierung beteiligt ist. In jedem Fall ist der Code signifikant unterschiedlich:

- Sie haben unterschiedliche Zwecke und Belange.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Clientseite verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Der im Browser ausgeführte Code ist als **Client-seitiger Code** bekannt und befasst sich hauptsächlich mit der Verbesserung des Erscheinungsbildes und des Verhaltens einer gerenderten Webseite. Dies umfasst die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierungen, etc. Im Gegensatz dazu betrifft die serverseitige Websiteprogrammierung hauptsächlich die Auswahl, _welche Inhalte_ als Reaktion auf Anfragen an den Browser zurückgegeben werden. Der serverseitige Code erledigt Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Nutzung von Datenbanken zur Speicherung und zum Abrufen von Daten und die Entsendung der korrekten Daten an den Client, wenn erforderlich.

Client-seitiger Code wird unter Verwendung von [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) geschrieben — er wird in einem Webbrowser ausgeführt und hat nur geringen oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eingeschränkten Zugriffs auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser ein Benutzer zur Anzeige einer Website verwenden könnte — Browser bieten unterschiedliche Kompatibilitätsstufen für Funktionen von Client-seitigem Code, und Teil der Herausforderung bei der Programmierung auf der Clientseite besteht darin, Unterschiede in der Browserunterstützung elegant zu handhaben.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Serverbetriebssystem und der Entwickler kann die Programmiersprache (und die spezifische Version) wählen, die er verwenden möchte.

Entwickler schreiben ihren Code typischerweise unter Verwendung von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Code-Konstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die unterschiedlichen Arten von Aufgaben zu vereinfachen, die in einem bestimmten Bereich anfallen.

Erneut, während sowohl Client- als auch serverseitige Code-Frameworks verwenden, sind die Domänen sehr unterschiedlich, und daher sind es auch die Frameworks. Client-seitige Web-Frameworks erleichtern Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks viel "gemeinsame" Webserver-Funktionalität bereitstellen, die Sie ansonsten selbst implementieren müssten (z. B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Templating-Bibliotheken usw.).

> [!NOTE]
> Client-seitige Frameworks werden häufig verwendet, um die Entwicklung von Client-seitigem Code zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code von Hand zu schreiben; in der Tat kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur ein kleines, einfaches Website-UI benötigen.
>
> Im Gegensatz dazu würden Sie fast nie erwägen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben — die Implementierung einer wichtigen Funktion wie eines HTTP-Servers ist wirklich schwer von Grund auf neu zu erstellen, sagen wir in Python, aber Python-Web-Frameworks wie Django bieten einen von Haus aus, zusammen mit anderen sehr nützlichen Tools.

## Was kann man auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, weil sie es uns ermöglicht, Informationen _effizient_ zu liefern, die für einzelne Benutzer maßgeschneidert sind, und damit ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon verwenden serverseitige Programmierung, um Suchergebnisse für Produkte zu erstellen, gezielte Produktempfehlungen basierend auf Client-Präferenzen und vorherigen Kaufgewohnheiten zu geben, Käufe zu vereinfachen, usw.

Banken nutzen serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern die Ansicht und Transaktion zu ermöglichen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu kontrollieren.

Einige der häufigen Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Lieferung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML sowie andere Dateitypen (z.B. PDFs, Bilder, etc.) dynamisch zu erstellen und zurückzugeben. Es ist auch möglich, Daten ([JSON](/de/docs/Glossary/JSON), [XML](/de/docs/Glossary/XML), etc.) zur Darstellung durch entsprechende Client-seitige Web-Frameworks zurückzugeben (was die Verarbeitungsbelastung auf dem Server reduziert und die Menge an Daten, die gesendet werden müssen).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und könnte alternativ das Ergebnis von Softwaretools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar für den Typ des Empfangsgeräts des Clients gezielt werden.

Da die Informationen in einer Datenbank sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Inventardatenbank aktualisieren).

> [!NOTE]
> Ihre Fantasie muss nicht hart arbeiten, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Lieferung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Website.
> 2. Suchen Sie nach mehreren Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, auch wenn sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank gezogen wurde.
>
> Bei einem gängigen Suchbegriff ("Fisch", sagen wir) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Mithilfe einer Datenbank können diese effizient gespeichert und geteilt werden, und es ermöglicht, die Darstellung der Informationen an einem einzigen Ort zu steuern.

### Angepasste Benutzererfahrung

Server können Informationen über Kunden speichern und verwenden, um eine bequeme und maßgeschneiderte Benutzererfahrung zu bieten. Beispielsweise speichern viele Websites Kreditkarten, damit die Informationen nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformationen bereitzustellen, und Such- oder Reiseverläufe, um lokale Geschäfte in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse von Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusehen und Antworten und Benachrichtigungen weiter anzupassen, beispielsweise eine Liste zuvor besuchter oder populärer Orte, die Sie sich auf einer Karte ansehen möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchshistorie. Häufig besuchte oder häufig gesuchte Standorte werden stärker hervorgehoben als andere.
>
> Die Google-Suchergebnisse werden basierend auf vorherigen Suchen optimiert.
>
> 1. Gehen Sie zur [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Lieblings" in das Suchfeld einzugeben, und beobachten Sie die automatische Vervollständigungsvorschläge der Suche.
>
> Ein Zufall? Nein!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Reale Beispiele umfassen soziale Netzwerke, die Benutzern erlauben, zu bestimmen, wer die Inhalte sehen kann, die sie auf die Seite posten, und wessen Inhalt in ihrem Feed angezeigt wird.

> [!NOTE]
> Denken Sie an andere reale Beispiele, bei denen der Zugriff auf Inhalte kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Melden Sie sich in Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Speicherung von Sitzungs-/Statusinformationen

Serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu verwenden — im Grunde ein Mechanismus, der es einem Server ermöglicht, Informationen im Zusammenhang mit dem aktuellen Benutzer einer Website zu speichern und basierend auf diesen Informationen unterschiedliche Antworten zu senden.

Dies ermöglicht es beispielsweise einer Seite zu wissen, dass sich ein Benutzer vorher eingeloggt hat und Links zu seinen E-Mails oder Bestellhistorien anzuzeigen, oder vielleicht den Status eines einfachen Spiels zu speichern, sodass den Benutzer die Seite erneut besuchen kann und den Punkt wieder aufnehmen kann, wo er es verlassen hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat, und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite über einige Stunden/Tage weiterhin. Irgendwann werden Sie anfangen, auf Seiten weitergeleitet zu werden, die erklären, wie man ein Abonnement abschließt, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert werden.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele umfassen:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikation zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die denjenigen ähneln, die bereits gekauft oder angesehen wurden und die Sie interessieren könnten.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren darüber senden, dass auf dem Server wenig Speicher verfügbar ist, oder über verdächtige Benutzeraktivitäten.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine "Bestätigung der Registrierung". Wählen Sie fast jede große Site aus, die Sie interessiert (Google, Amazon, Instagram, usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten bald eine E-Mail, die Ihre Registrierung bestätigt oder die Anerkennung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben sowohl Amazon als auch Google für Produkte basierend auf vorherigen Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Nutzer sind, gehen Sie zu Ihrem Haupt-Feed und schauen Sie sich den Strom von Beiträgen an. Beachten Sie, wie einige der Beiträge nicht in numerischer Reihenfolge sind - insbesondere Beiträge mit mehr "Gefällt mir" sind oft höher auf der Liste als neuere Beiträge.
>
> Schauen Sie sich auch an, welche Art von Anzeigen Ihnen gezeigt werden — Sie sehen möglicherweise Anzeigen für Dinge, die Sie auf anderen Sites angesehen haben. Der Algorithmus von Facebook zur Hervorhebung von Inhalten und Werbung kann ein bisschen ein Rätsel sein, aber es ist klar, dass es von Ihren Likes und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben jetzt gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptrolle darin besteht, zu kontrollieren, _welche_ Informationen an den Benutzer gesendet werden (während Client-seitiger Code hauptsächlich die Struktur und Präsentation dieser Daten an den Benutzer behandelt).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen effizient liefern, die für einzelne Benutzer maßgeschneidert sind, und eine gute Vorstellung davon haben, einige der Dinge, die Sie tun könnten, wenn Sie ein serverseitiger Programmierer sind.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Webframework verwenden sollten, um den gesamten Prozess einfacher zu machen.

In einem zukünftigen Artikel helfen wir Ihnen dabei, das beste Webframework für Ihre erste Seite auszuwählen. Hier führen wir Sie durch die wichtigsten Client-Server-Interaktionen mit nur ein wenig mehr Details.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
