---
title: Einführung in die serverseitige Programmierung
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen zum Anfängerkurs der serverseitigen Programmierung auf MDN! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer übergeordneten Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nachdem Sie diesen Artikel gelesen haben, werden Sie die zusätzlichen Möglichkeiten verstehen, die Webseiten durch serverseitiges Programmieren bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis davon, was ein Web-Server ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit damit zu erlangen, was serverseitige Programmierung ist, was sie leisten kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen, die im Allgemeinen aus einer auf einem Server gespeicherten Datenbank abgerufen und dem Client zur Anzeige mit Hilfe von Code (z. B. HTML und JavaScript) gesendet werden.

Vielleicht der bedeutendste Vorteil von serverseitigem Code besteht darin, dass er Ihnen erlaubt, Website-Inhalte für individuelle Benutzer anzupassen. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Es kann auch die Benutzung von Seiten erleichtern, indem persönliche Präferenzen und Informationen gespeichert werden — zum Beispiel die wiederholte Verwendung gespeicherter Kreditkartendetails, um nachfolgende Zahlungen zu vereinfachen.

Es kann sogar die Interaktion mit Benutzern der Seite ermöglichen, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle zu senden. All diese Fähigkeiten ermöglichen ein wesentlich tieferes Engagement mit den Benutzern.

In der modernen Welt der Webentwicklung ist es sehr zu empfehlen, sich mit serverseitiger Entwicklung zu beschäftigen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Web-Servern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um die Ressource zu bekommen, zu löschen oder zu übermitteln), und kann zusätzliche Informationen enthalten, die in URL-Parameter (die Feld-Wert-Paare über einen [Abfrage-String](https://de.wikipedia.org/wiki/Querystring) gesendet werden), als POST-Daten (Daten, die durch die [HTTP-POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden), oder in verbundenen {{Glossary("Cookie", "Cookies")}} kodiert sind.

Web-Server warten auf Client-Anforderungsnachrichten, verarbeiten sie bei Ankunft und antworten dem Webbrowser mit einer **HTTP-Antwort**-Nachricht. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z. B. "HTTP/1.1 200 OK" für Erfolg).

Der Body einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z. B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das Diagramm unten zeigt eine grundlegende Web-Server-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die immer denselben fest codierten Inhalt vom Server zurückgibt, wann immer eine bestimmte Ressource angefordert wird). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage, die seine URL angibt.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) (in der Regel 200 OK) enthält. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur wenn er benötigt wird. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine wesentlich effizientere Methode zum Speichern großer Mengen von Inhalten als die Verwendung von statischen Websites).

Eine dynamische Site kann für eine URL unterschiedliche Daten basierend auf vom Benutzer bereitgestellten Informationen oder gespeicherten Präferenzen zurückgeben und kann andere Operationen als Teil der Rückgabe einer Antwort ausführen (z. B. Benachrichtigungen senden).

Der größte Teil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server ausgeführt werden. Das Erstellen dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal "**Backend-Scripting**") bezeichnet.

Das Diagramm unten zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, der dann die Anfragen verarbeitet und geeignete HTTP-Antworten zurückgibt.

Anfragen für _statische_ Ressourcen werden auf die gleiche Weise wie bei statischen Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorab erstellte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu konstruieren. Dies ist das gleiche Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ angezeigt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Widmen wir uns nun dem Code, der an der serverseitigen und clientseitigen Programmierung beteiligt ist. In jedem Fall unterscheidet sich der Code erheblich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden im Allgemeinen nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl server- als auch clientseitig verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und befasst sich hauptsächlich mit der Verbesserung des Aussehens und Verhaltens einer gerenderten Webseite. Dies umfasst die Auswahl und Gestaltung von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung usw. Im Gegensatz dazu umfasst die serverseitige Website-Programmierung hauptsächlich die Auswahl von _welchen_ Inhalten als Antwort auf Anfragen an den Browser zurückgegeben werden. Der serverseitige Code übernimmt Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der richtigen Daten an den Client nach Bedarf.

Clientseitiger Code wird mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben — er wird innerhalb eines Webbrowsers ausgeführt und hat wenig oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eines begrenzten Zugriffs auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer verwenden könnte, um eine Website anzuzeigen — Browser bieten unterschiedliche Ebenen von Kompatibilität mit clientseitigen Code-Funktionen, und ein Teil der Herausforderung der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung reibungslos zu handhaben.

Serverseitiger Code kann in einer beliebigen Anzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Serverbetriebssystem und der Entwickler kann die Programmiersprache (und bestimmte Version) auswählen, die er verwenden möchte.

Entwickler schreiben normalerweise ihren Code mithilfe von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Aufgabentypen in einem bestimmten Bereich zu vereinfachen.

Wiederum verwenden sowohl Client- als auch serverseitiger Code Frameworks, jedoch sind die Bereiche sehr unterschiedlich und daher auch die Frameworks. Clientseitige Web-Frameworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks viele "gemeinsame" Webserver-Funktionalitäten bieten, die Sie ansonsten selbst implementieren müssten (z. B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugang, Templating-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden häufig verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können auch wählen, den gesamten Code von Hand zu schreiben; tatsächlich kann es schneller und effizienter sein, den Code von Hand zu schreiben, wenn Sie nur eine kleine, einfache Website-Benutzeroberfläche benötigen.
>
> Im Gegensatz dazu würden Sie fast niemals in Erwägung ziehen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben — die Implementierung einer wichtigen Funktion wie eines HTTP-Servers ist wirklich schwer von Grund auf mit sagen wir Python zu tun, aber Python-Webframeworks wie Django bieten einen aus der Box, zusammen mit anderen sehr nützlichen Tools.

## Was können Sie auf der Server-Seite tun?

Serverseitige Programmierung ist sehr nützlich, da sie uns erlaubt, Informationen _effizient_ zu liefern, die für einzelne Benutzer maßgeschneidert sind, und damit ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon verwenden serverseitige Programmierung, um Suchergebnisse für Produkte zu erstellen, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu geben, Käufe zu vereinfachen usw.

Banken nutzen serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern Einsichtnahme und Transaktionen zu ermöglichen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia nutzen serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff zu steuern.

Einige der häufigsten Anwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es Überschneidungen gibt!

### Effiziente Speicherung und Lieferung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht es uns, die Informationen stattdessen in einer Datenbank zu speichern und HTML und andere Dateitypen (z. B. PDFs, Bilder usw.) dynamisch zusammenzustellen und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) zurückzugeben, die von geeigneten clientseitigen Webframeworks gerendert werden (dies reduziert die Verarbeitungsbelastung auf dem Server und die Datenmenge, die gesendet werden muss).

Der Server ist nicht auf die Übermittlung von Informationen aus Datenbanken beschränkt und kann stattdessen das Ergebnis von Softwaretools oder Daten aus Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Typ des empfangenden Client-Geräts zugeschnitten werden.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Bestandsdatenbank aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss nicht hart arbeiten, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Lieferung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Website.
> 2. Suchen Sie nach mehreren Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, auch wenn die Ergebnisse variieren.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber die Inhalte für verschiedene Produkte aus der Datenbank abgerufen wurden.
>
> Bei einem gängigen Suchbegriff ("Fisch", zum Beispiel) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Durch die Verwendung einer Datenbank können diese effizient gespeichert und geteilt werden, und die Darstellung der Informationen kann zentral gesteuert werden.

### Benutzerdefinierte Benutzererfahrung

Server können Informationen über Kunden speichern und verwenden, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Beispielsweise speichern viele Seiten Kreditkarten, damit die Details nicht erneut eingegeben werden müssen. Seiten wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routing-Informationen bereitzustellen, und Such- oder Reisehistorien nutzen, um lokale Geschäfte in Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann genutzt werden, um ihre Interessen vorherzusehen und die Antworten und Benachrichtigungen weiter anzupassen, z. B. indem eine Liste zuvor besuchter oder beliebter Orte bereitgestellt wird, die Sie auf einer Karte betrachten möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihren Such- und Besuchsverlauf. Häufig besuchte oder häufig gesuchte Orte werden stärker hervorgehoben.
>
> Google-Suchergebnisse sind basierend auf vorherigen Suchen optimiert.
>
> 1. Gehen Sie zur [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Lieblings" im Suchfeld einzugeben und beachten Sie die Autovervollständigungsvorschläge.
>
> Zufall? Nada!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Seiten, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen zu liefern, die ein Benutzer sehen darf.

Reale Beispiele umfassen soziale Netzwerke, die Benutzern erlauben, zu bestimmen, wer die Inhalte sehen kann, die sie auf die Seite posten, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Denken Sie an andere reale Beispiele, bei denen der Zugriff auf Inhalte kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Melden Sie sich bei Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Speicherung von Sitzungs-/Zustandsinformationen

Serverseitige Programmierung erlaubt Entwicklern, **Sitzungen** zu nutzen — im Wesentlichen ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verbunden sind, und basierend auf diesen Informationen unterschiedliche Antworten zu liefern.

Damit kann zum Beispiel eine Seite wissen, dass ein Benutzer sich zuvor angemeldet hat und Links zu seinen E-Mails oder seiner Bestellhistorie anzeigen, oder den Zustand eines einfachen Spiels speichern, sodass der Benutzer eine Seite erneut besuchen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungssite, die ein Abonnementmodell hat, und öffnen Sie eine Reihe von Tabs (z. B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiterhin über einige Stunden/Tage. Schließlich werden Sie anfangen, auf Seiten umgeleitet zu werden, die erklären, wie man sich anmeldet, und Sie werden nicht auf Artikel zugreifen können. Diese Information ist ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert sind.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele beinhalten:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikation zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die ähnlich zu den bereits gekauften oder betrachteten sind, die für Sie interessant sein könnten.
- Ein Web-Server kann Warnmeldungen an Website-Administratoren senden, die sie auf geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivitäten hinweisen.

> [!NOTE]
> Der häufigste Typ von Benachrichtigungen ist eine "Registrierungsbestätigung". Wählen Sie fast jede bekannte große Site, die Sie interessiert (Google, Amazon, Instagram, etc.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie werden bald eine E-Mail erhalten, die Ihre Registrierung bestätigt oder die eine Bestätigung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben Amazon und Google Produkte basierend auf vorherigen Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Nutzer sind, gehen Sie zu Ihrem Hauptfeed und schauen Sie sich die Stream-Posts an. Beachten Sie, wie einige der Beiträge nicht nummerisch in Reihenfolge sind - insbesondere Beiträge mit mehr "Gefällt mir"-Angaben stehen oft höher auf der Liste als neuere Posts.
>
> Schauen Sie sich auch an, welche Art von Werbung Ihnen angezeigt wird — Sie könnten Werbeanzeigen für Dinge sehen, die Sie auf anderen Seiten betrachtet haben. Facebooks Algorithmus zum Hervorheben von Inhalten und zur Werbung kann ein bisschen ein Mysterium sein, aber es ist klar, dass er von Ihren Vorlieben und Ihrem Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptrolle darin besteht, zu steuern, _welche_ Informationen an den Benutzer gesendet werden (während clientseitiger Code hauptsächlich die Struktur und Darstellung dieser Daten für den Benutzer behandelt).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Webseiten zu schaffen, die _effizient_ Informationen liefern, die für einzelne Benutzer maßgeschneidert sind, und wissen nun gut, was Sie vielleicht tun könnten, wenn Sie ein serverseitiger Programmierer sind.

Schließlich sollten Sie verstehen, dass serverseitiger Code in einer Vielzahl von Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Site auszuwählen. Wir werden Ihnen die wichtigsten Client-Server-Interaktionen etwas genauer erläutern.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
