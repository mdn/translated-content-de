---
title: Einführung in die serverseitige Programmierung
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 710372d69095aaeadfba6c892f3e39ed63df4c54
---

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen beim MDN-Kurs für Einsteiger in die serverseitige Programmierung! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer höheren Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nach dem Lesen dieses Artikels werden Sie die zusätzlichen Möglichkeiten verstehen, die durch serverseitiges Coding für Websites verfügbar sind.

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
        Vertrautheit mit dem, was serverseitige Programmierung ist, was sie leisten kann, und wie sie sich von der clientseitigen Programmierung unterscheidet, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

Die meisten Großprojekten von Websites verwenden serverseitigen Code, um bei Bedarf verschiedene Daten dynamisch anzuzeigen. Diese Daten werden in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und dem Client zur Anzeige über Code (z.B. HTML und JavaScript) bereitgestellt.

Der möglicherweise bedeutendste Vorteil von serverseitigem Code besteht darin, dass er es ermöglicht, Website-Inhalte für einzelne Benutzer anzupassen. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Sie können auch die Nutzung von Websites erleichtern, indem persönliche Präferenzen und Informationen gespeichert werden — zum Beispiel die Wiederverwendung gespeicherter Kreditkartendaten, um nachfolgende Zahlungen zu vereinfachen.

Serverseitige Programmierung kann sogar eine Interaktion mit den Benutzern der Website ermöglichen, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle senden. All diese Möglichkeiten ermöglichen eine viel tiefere Einbindung der Benutzer.

Im modernen Web-Entwicklungsumfeld wird das Lernen über serverseitige Entwicklung dringend empfohlen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL zur Identifizierung der betroffenen Ressource, eine Methode, die die erforderliche Aktion definiert (z.B. um die Ressource abzurufen, zu löschen oder zu veröffentlichen), und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die Feld-Wert-Paare, die über eine [Abfragezeichenkette](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die mit der [HTTP-POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden) oder in verknüpften {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Nachrichtenanforderungen des Clients, verarbeiten sie, wenn sie eintreffen, und antworten dem Webbrowser mit einer **HTTP-Antwort**-Nachricht. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z.B. "HTTP/1.1 200 OK" für Erfolg).

Der Körper einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das untenstehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die bei Anforderung einer bestimmten Ressource immer denselben fest kodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage, die ihre URL angibt.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) (normalerweise 200 OK) zurück. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehler-Antworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehler-Antworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur wenn er benötigt wird. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine viel effizientere Art, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann verschiedene Daten für eine URL basierend auf den vom Benutzer bereitgestellten Informationen oder gespeicherten Präferenzen zurückgeben und kann andere Operationen als Teil der Antwortausgabe ausführen (z.B. Benachrichtigungen senden).

Die meiste Unterstützungscode für eine dynamische Website muss auf dem Server ausgeführt werden. Die Erstellung dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal "**Back-End-Skript**") bezeichnet.

Das untenstehende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, dann verarbeitet der Server die Anfragen und gibt entsprechende HTTP-Antworten zurück.

Anfragen für _statische_ Ressourcen werden auf die gleiche Weise wie bei statischen Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorgefertigte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ gezeigt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort zurück, die das generierte HTML enthält (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Betrachten wir nun den Code, der in serverseitiger und clientseitiger Programmierung verwendet wird. In beiden Fällen ist der Code signifikant unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden im Allgemeinen nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf dem Server als auch auf dem Client verwendet werden kann).
- Sie laufen in verschiedenen Betriebssystemumgebungen.

Code, der im Browser läuft, wird als **clientseitiger Code** bezeichnet und beschäftigt sich hauptsächlich mit der Verbesserung der Darstellung und des Verhaltens einer gerenderten Webseite. Dies umfasst die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung usw. Im Gegensatz dazu beinhaltet die serverseitige Website-Programmierung hauptsächlich die Auswahl dessen, _welcher Inhalt_ als Antwort auf Anfragen an den Browser zurückgegeben wird. Der serverseitige Code kümmert sich um Aufgaben wie Datenvalidierung und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der korrekten Daten an den Client nach Bedarf.

Clientseitiger Code wird unter Verwendung von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben — es wird in einem Webbrowser ausgeführt und hat wenig oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eingeschränktem Zugriff auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer möglicherweise verwendet, um eine Website anzuzeigen — Browser bieten inkonsistente Kompatibilitätsniveaus mit clientseitigen Code-Features, und ein Teil der Herausforderung der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung elegant zu handhaben.

Serverseitiger Code kann in einer Reihe von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (Node.js). Der serverseitige Code hat vollen Zugriff auf das Serverbetriebssystem und der Entwickler kann wählen, welche Programmiersprache (und welche spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code in der Regel mit **Webframeworks**. Webframeworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die dazu gedacht sind, häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Erneut, während sowohl client- als auch serverseitiger Code Frameworks verwenden, sind die Domänen sehr unterschiedlich und daher auch die Frameworks. Clientseitige Webframeworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Webframeworks viele "gemeinsame" Webserver-Funktionen bieten, die Sie sonst möglicherweise selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Vorlagebibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden oft verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-Benutzeroberfläche benötigen.
>
> Im Gegensatz dazu würden Sie fast niemals in Betracht ziehen, die serverseitige Komponente einer Webanwendung ohne Framework zu schreiben — das Implementieren eines wichtigen Features wie eines HTTP-Servers ist wirklich schwer, von Grund auf in sagen wir Python zu tun, aber Python-Webframeworks wie Django bieten einen sofort einsatzbereiten, zusammen mit anderen sehr nützlichen Tools.

## Was kann man auf der Server-Seite tun?

Die serverseitige Programmierung ist sehr nützlich, da sie es ermöglicht, Informationen effizient bereitzustellen, die auf einzelne Benutzer zugeschnitten sind, und dadurch ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon nutzen serverseitige Programmierung, um Suchergebnisse für Produkte zu konstruieren, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu geben, Käufe zu vereinfachen usw.

Banken nutzen serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern die Ansicht und Durchführung von Transaktionen zu erlauben. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia nutzen serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugang zu kontrollieren.

Einige der häufigen Anwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte bei Amazon verfügbar sind und wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht uns, die Informationen stattdessen in einer Datenbank zu speichern und dynamisch HTML und andere Dateitypen (z.B. PDFs, Bilder usw.) zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) zurückzugeben, die von geeigneten clientseitigen Webframeworks gerendert werden sollen (dies reduziert die Verarbeitungsbelastung des Servers und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, sondern kann auch das Ergebnis von Softwaretools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Gerätetyp abgestimmt werden, der ihn empfängt.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (z.B. wenn Produkte entweder online oder im Geschäft verkauft werden, könnte das Geschäft seine Lagerbestand-Datenbank aktualisieren).

> [!NOTE]
> Ihre Fantasie muss nicht hart arbeiten, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Besuchen Sie [Amazon](https://www.amazon.com/) oder eine andere E-Commerce-Seite.
> 2. Suchen Sie nach einer Anzahl von Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, auch wenn sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank abgerufen wurde.
>
> Bei einem allgemeinen Suchbegriff ("Fisch" zum Beispiel) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Die Verwendung einer Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und ermöglicht es, die Präsentation der Informationen an nur einer Stelle zu steuern.

### Anpassung des Benutzererlebnisses

Server können Informationen über Clients speichern und nutzen, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Zum Beispiel speichern viele Seiten Kreditkarten, damit die Details nicht erneut eingegeben werden müssen. Seiten wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformationen bereitzustellen, und Such- oder Reiseverläufe, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um deren Interessen vorherzusagen und Antworten und Benachrichtigungen weiter anzupassen, zum Beispiel durch eine Liste von zuvor besuchten oder beliebten Orten, die Sie möglicherweise auf einer Karte betrachten möchten.

> [!NOTE]
> [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchsgeschichte. Häufig besuchte oder häufig gesuchte Standorte werden mehr als andere hervorgehoben.
>
> Google-Suchergebnisse werden basierend auf früheren Suchen optimiert.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie jetzt, "Favorit" in das Suchfeld einzugeben, und beobachten Sie die automatischen Suchvorschläge.
>
> Zufall? Nada!

### Kontrollierter Zugang zu Inhalten

Serverseitige Programmierung ermöglicht es Websites, den Zugang auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Beispiele aus der Praxis sind Social-Networking-Seiten, die es den Benutzern ermöglichen, zu bestimmen, wer die Inhalte sehen kann, die sie auf der Seite veröffentlichen, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, bei denen der Zugang zu Inhalten kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Melden Sie sich bei Ihrem Konto an – welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Sitzungs-/Statusinformationen speichern

Serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen – im Wesentlichen einen Mechanismus, der es einem Server erlaubt, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verbunden sind, und unterschiedliche Antworten basierend auf diesen Informationen zu senden.

Dies ermöglicht es zum Beispiel einer Website zu wissen, dass sich ein Benutzer früher angemeldet hat und Links zu seinen E-Mails oder Bestellverlauf anzuzeigen, oder vielleicht den Zustand eines einfachen Spiels zu speichern, damit der Benutzer die Website erneut besuchen und weitermachen kann, wo er sie verlassen hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat, und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiterhin über einige Stunden/Tage. Schließlich werden Sie anfangen, auf Seiten umgeleitet zu werden, die erklären, wie Sie sich anmelden, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert sind.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen durch die Website selbst oder per E-Mail, SMS, Sofortnachrichten, Videokonversationen oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikationen zu benachrichtigen.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die ähnlich zu denen sind, die bereits gekauft oder angesehen wurden und die Sie interessieren könnten.
- Ein Webserver könnte Warnmeldungen an Website-Administratoren senden, um diese auf geringen Arbeitsspeicher auf dem Server oder verdächtige Benutzeraktivität aufmerksam zu machen.

> [!NOTE]
> Der häufigste Benachrichtigungstyp ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Seite aus, die Sie interessiert (Google, Amazon, Instagram usw.), und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten in Kürze eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung zur Aktivierung Ihres Kontos erfordert.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben sowohl Amazon als auch Google für Produkte basierend auf früheren Suchen (und Käufen).

> [!NOTE]
> Wenn Sie Facebook-Benutzer sind, gehen Sie zu Ihrem Hauptfeed und betrachten Sie den Strom von Beiträgen. Beachten Sie, wie einige der Beiträge aus der numerischen Reihenfolge herausfallen - insbesondere Beiträge mit mehr "Likes" stehen oft höher auf der Liste als neuere Beiträge.
>
> Betrachten Sie auch, welche Art von Anzeigen Ihnen angezeigt werden – Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Seiten angesehen haben. Facebooks Algorithmus zur Hervorhebung von Inhalten und Werbung kann ein wenig ein Rätsel sein, aber es ist klar, dass es von Ihren Likes und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und seine Hauptaufgabe darin besteht, zu steuern, _welche_ Informationen an den Benutzer gesendet werden (während sich clientseitiger Code hauptsächlich um die Struktur und Präsentation dieser Daten an den Benutzer kümmert).

Sie sollten auch verstehen, dass es nützlich ist, da es uns ermöglicht, Websites zu erstellen, die Informationen effizient an einzelne Benutzer liefern und eine gute Vorstellung davon haben, was Sie tun könnten, wenn Sie ein serverseitiger Entwickler werden.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Webframework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel helfen wir Ihnen bei der Auswahl des besten Webframeworks für Ihre erste Seite. Hier führen wir Sie ein wenig detaillierter durch die wichtigsten Client-Server-Interaktionen.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
