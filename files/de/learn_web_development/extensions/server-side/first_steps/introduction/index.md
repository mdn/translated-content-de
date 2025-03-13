---
title: Einführung in das serverseitige Programmieren
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen zum MDN-Einsteigerkurs für das serverseitige Programmieren! In diesem ersten Artikel betrachten wir das serverseitige Programmieren aus einer höheren Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich vom clientseitigen Programmieren?" und "Warum ist es so nützlich?". Nach dem Lesen dieses Artikels werden Sie die zusätzliche Stärke verstehen, die Websites durch serverseitige Codierung zur Verfügung steht.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse darüber, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit damit gewinnen, was serverseitiges Programmieren ist, was es kann und wie es sich vom clientseitigen Programmieren unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen. Diese Daten werden in der Regel aus einer Datenbank abgerufen, die auf einem Server gespeichert ist, und zum Client gesendet, um sie über einige Codezeilen (z.B. HTML und JavaScript) anzuzeigen.

Der vielleicht bedeutendste Vorteil von serverseitigem Code ist, dass er es Ihnen ermöglicht, Website-Inhalte für einzelne Benutzer maßzuschneidern. Dynamische Websites können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Sie können auch Websites benutzerfreundlicher gestalten, indem persönliche Präferenzen und Informationen gespeichert werden — zum Beispiel die Wiederverwendung gespeicherter Kreditkartendaten zur Vereinfachung nachfolgender Zahlungen.

Es kann sogar die Interaktion mit Benutzern der Website ermöglichen, indem Benachrichtigungen und Updates per E-Mail oder über andere Kanäle versendet werden. All diese Fähigkeiten ermöglichen eine viel tiefere Einbindung der Benutzer.

In der modernen Welt der Webentwicklung wird das Erlernen von serverseitiger Entwicklung dringend empfohlen.

## Was ist serverseitiges Website-Programmieren?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel Erhalten, Löschen oder Posten der Ressource) und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die Feld-Wert-Paare, die über eine [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die durch die [HTTP POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Client-Anforderungsnachrichten, verarbeiten sie bei ihrem Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwortnachricht**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z.B. "HTTP/1.1 200 OK" für Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das folgende Diagramm zeigt eine grundlegende Web-Server-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die immer denselben fest codierten Inhalt vom Server zurückgibt, wenn eine bestimmte Ressource angefordert wird). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage mit Angabe seiner URL.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) (normalerweise 200 OK) enthält. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Clientfehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Serverfehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der einige der Antwortinhalte _dynamisch_ nur bei Bedarf generiert werden. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine viel effizientere Methode, um große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann unterschiedliche Daten für eine URL basierend auf den vom Benutzer bereitgestellten Informationen oder gespeicherten Präferenzen zurückgeben und kann andere Operationen als Teil der Rückgabe einer Antwort ausführen (z.B. Benachrichtigungen senden).

Der Großteil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server laufen. Das Erstellen dieses Codes wird als "**serverseitiges Programmieren**" (oder manchmal als "**Back-End-Scripting**") bezeichnet.

Das folgende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, dann verarbeitet der Server die Anfragen und gibt entsprechende HTTP-Antworten zurück.

Anfragen für _statische_ Ressourcen werden auf die gleiche Weise wie bei statischen Seiten verarbeitet (statische Ressourcen sind alle Dateien, die sich nicht ändern — typischerweise: CSS, JavaScript, Bilder, vorerstellte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu konstruieren. Dies ist das gleiche Diagramm wie im Client-Server-Überblick.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen (2) an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ gezeigt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest erforderliche Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort zurück, die das generierte HTML enthält (5,6).

## Sind serverseitiges und clientseitiges Programmieren dasselbe?

Wenden wir uns nun den Code-Komponenten zu, die beim serverseitigen und clientseitigen Programmieren beteiligt sind. In jedem Fall ist der Code erheblich unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl server- als auch clientseitig verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, wird als **Client-seitiger Code** bezeichnet und befasst sich hauptsächlich mit der Verbesserung des Erscheinungsbildes und Verhaltens einer gerenderten Webseite. Dazu gehören die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung usw. Im Gegensatz dazu befasst sich das serverseitige Website-Programmieren größtenteils damit, _welche Inhalte_ dem Browser als Antwort auf Anfragen zurückgegeben werden. Der serverseitige Code übernimmt Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Verwendung von Datenbanken zur Speicherung und Abfrage von Daten sowie das Senden der korrekten Daten an den Client, wie erforderlich.

Client-seitiger Code wird mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben — er wird in einem Webbrowser ausgeführt und hat wenig oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich begrenztem Zugriff auf das Dateisystem).

Webentwickler haben keine Kontrolle darüber, welchen Browser jeder Benutzer verwenden könnte, um eine Website anzuzeigen — Browser bieten uneinheitliche Kompatibilität mit clientseitigen Code-Funktionen, und ein Teil der Herausforderung des Client-seitigen Programmierens besteht darin, Unterschiede in der Browserunterstützung elegant zu handhaben.

Server-seitiger Code kann in einer beliebigen Anzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Betriebssystem des Servers und der Entwickler kann wählen, welche Programmiersprache (und spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code typischerweise mit **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die zum Lösen gängiger Probleme entworfen wurden, um die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Auch wenn sowohl Client- als auch serverseitiger Code Frameworks verwenden, sind die Bereiche sehr unterschiedlich, und daher sind auch die Frameworks unterschiedlich. Client-seitige Webframeworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Webframeworks viel "standardmäßige" Webserver-Funktionalität bieten, die Sie sonst möglicherweise selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Template-Bibliotheken usw.).

> [!NOTE]
> Client-seitige Frameworks werden oft verwendet, um die Entwicklung des clientseitigen Codes zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code selbst zu schreiben; in der Tat kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-UI benötigen.
>
> Im Gegensatz dazu würden Sie fast nie in Betracht ziehen, die serverseitige Komponente einer Webanwendung ohne ein Framework zu schreiben — die Implementierung eines wesentlichen Merkmals wie eines HTTP-Servers ist wirklich schwer, in zum Beispiel Python von Grund auf durchzuführen, aber Python-Webframeworks wie Django bieten einen "out of the box", zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Serverseite tun?

Das serverseitige Programmieren ist sehr nützlich, weil es uns ermöglicht, Informationen _effizient_ bereitzustellen, die auf den einzelnen Benutzer zugeschnitten sind und dadurch eine viel bessere Benutzererfahrung zu schaffen.

Unternehmen wie Amazon verwenden serverseitiges Programmieren, um Suchergebnisse für Produkte zu erstellen, gezielte Produktvorschläge basierend auf Kundenpräferenzen und vorherigen Kaufgewohnheiten zu machen, Einkäufe zu vereinfachen usw.

Banken nutzen serverseitiges Programmieren, um Kontoinformationen zu speichern und nur autorisierten Benutzern das Anzeigen und Durchführen von Transaktionen zu erlauben. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia nutzen serverseitiges Programmieren, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu steuern.

Einige der häufigsten Anwendungen und Vorteile des serverseitigen Programmierens sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte bei Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktikabel.

Serverseitiges Programmieren ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML und andere Dateitypen (z.B. PDFs, Bilder usw.) dynamisch zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) zur Anzeige durch entsprechende clientseitige Webframeworks zurückzugeben (dies reduziert die Verarbeitungslast auf dem Server und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, sondern kann alternativ das Ergebnis von Softwaretools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar für den Typ des empfangenden Clientgeräts gezielt angepasst werden.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Datenbank mit dem Lagerbestand aktualisieren).

> [!NOTE]
> Ihre Fantasie muss nicht viel leisten, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Website.
> 2. Suchen Sie nach mehreren Stichwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, aber die Ergebnisse schon.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank gezogen wurde.
>
> Bei einem häufigen Suchbegriff ("Fisch" z.B.) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Mithilfe einer Datenbank können diese effizient gespeichert und geteilt werden, und die Präsentation der Informationen kann an nur einem Ort gesteuert werden.

### Individuelle Benutzererfahrung

Server können Informationen über Kunden speichern und verwenden, um eine bequeme und maßgeschneiderte Benutzererfahrung zu bieten. Beispielsweise speichern viele Websites Kreditkarten, sodass die Daten nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformationen bereitzustellen und Such- oder Reiseverläufe zu speichern, um in den Suchergebnissen lokale Geschäfte hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um deren Interessen vorherzusehen und Antworten und Benachrichtigungen weiter anzupassen, zum Beispiel indem eine Liste von zuvor besuchten oder beliebten Standorten angeboten wird, die Sie auf einer Karte ansehen möchten.

> **Note:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchshistorie. Häufig besuchte oder häufig gesuchte Standorte werden mehr hervorgehoben als andere.
>
> Google-Suchergebnisse sind basierend auf vorherigen Suchen optimiert.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie jetzt, "Favorit" in das Suchfeld einzugeben und beobachten Sie die Autocomplete-Suchvorschläge.
>
> Zufall? Nulla!

### Kontrollierter Zugriff auf Inhalte

Durch serverseitiges Programmieren können Websites den Zugriff auf autorisierte Benutzer beschränken und nur die Informationen bereitstellen, die ein Benutzer sehen darf.

Reale Beispiele sind soziale Netzwerke, die es Benutzern ermöglichen zu bestimmen, wer die von ihnen geposteten Inhalte auf der Website sehen kann und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, bei denen der Zugriff auf Inhalte kontrolliert wird. Was können Sie beispielsweise sehen, wenn Sie die Online-Website Ihrer Bank besuchen? Melden Sie sich bei Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur von der Bank geändert werden können?

### Speicherung von Sitzungs-/Statusinformationen

Serverseitiges Programmieren ermöglicht es Entwicklern, **Sitzungen** zu nutzen — im Wesentlichen ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verbunden sind, und basierend auf diesen Informationen unterschiedliche Antworten zu senden.

Dies ermöglicht es beispielsweise einer Website, zu wissen, dass sich ein Benutzer vorher eingeloggt hat, und Links zu seinen E-Mails oder Bestellhistorie anzuzeigen, oder vielleicht den Status eines einfachen Spiels zu speichern, sodass der Benutzer eine Website erneut aufrufen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat, und öffnen Sie eine ganze Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiter über ein paar Stunden/Tage. Irgendwann werden Sie auf Seiten umgeleitet, die erklären, wie man ein Abonnement abschließt, und Sie werden nicht mehr in der Lage sein, Artikel zu lesen. Diese Information ist ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert sind.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Mitteilungen zu informieren.
- Amazon sendet regelmäßig Produktempfehlungen per E-Mail, die ähnliche Produkte vorschlagen, wie die, die bereits gekauft oder angesehen wurden, und die Sie interessieren könnten.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren senden, die auf wenig Speicherplatz auf dem Server oder verdächtige Benutzeraktivität hinweisen.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Website, die Sie interessiert (Google, Amazon, Instagram usw.), und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie werden in Kürze eine E-Mail zur Bestätigung Ihrer Registrierung erhalten, oder zur Bestätigung, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitiges Programmieren kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben Amazon und Google für Produkte basierend auf vorherigen Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Nutzer sind, gehen Sie zu Ihrem Hauptfeed und betrachten den Strom von Beiträgen. Beachten Sie, wie einige der Beiträge aus der numerischen Reihenfolge sind — insbesondere Beiträge mit mehr "Likes" sind oft höher in der Liste als neuere Beiträge.
>
> Schauen Sie auch, welche Art von Werbung Ihnen gezeigt wird — Sie könnten Werbung für Dinge sehen, die Sie auf anderen Webseiten angesehen haben. Der Algorithmus von Facebook zur Hervorhebung von Inhalten und Werbung kann etwas undurchsichtig sein, aber es ist klar, dass er von Ihren Vorlieben und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitiges Programmieren erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, zu kontrollieren, _welche_ Informationen dem Benutzer gesendet werden (während clientseitiger Code hauptsächlich die Struktur und Präsentation dieser Daten für den Benutzer verwaltet).

Sie sollten auch verstehen, dass er nützlich ist, weil er es uns ermöglicht, Websites zu erstellen, die Informationen _effizient_ liefern, die auf einzelne Benutzer zugeschnitten sind, und Sie haben eine gute Vorstellung von einigen Dingen, die Sie tun könnten, wenn Sie ein serverseitiger Programmierer sind.

Schließlich sollten Sie verstehen, dass serverseitiger Code in einer Vielzahl von Programmiersprachen geschrieben werden kann und dass Sie ein Webframework verwenden sollten, um den gesamten Prozess zu vereinfachen.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Webframework für Ihre erste Seite auszuwählen. Hier werden wir Sie etwas detaillierter durch die wichtigsten Client-Server-Interaktionen führen.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
