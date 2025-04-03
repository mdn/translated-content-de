---
title: Einführung in die Serverseite
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen beim MDN-Kurs für Anfänger in der serverseitigen Programmierung! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer hohen Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nachdem Sie diesen Artikel gelesen haben, verstehen Sie die zusätzliche Kraft, die Websites durch serverseitiges Codieren zur Verfügung steht.

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
        Vertrautheit damit zu gewinnen, was serverseitige Programmierung ist, was sie kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten großangelegten Websites verwenden serverseitigen Code, um bei Bedarf dynamisch verschiedene Daten anzuzeigen, die im Allgemeinen aus einer auf einem Server gespeicherten Datenbank abgerufen und über einige Codes (z.B. HTML und JavaScript) an den Client gesendet werden.

Vielleicht der bedeutendste Vorteil von serverseitigem Code ist, dass er es ermöglicht, Website-Inhalte individuell für Benutzer anzupassen. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Zudem können Seiten benutzerfreundlicher werden, indem persönliche Vorlieben und Informationen gespeichert werden – beispielsweise das wiederholte Verwenden gespeicherter Kreditkartendetails zur Vereinfachung nachfolgender Zahlungen.

Es kann sogar die Interaktion mit Nutzern der Website ermöglichen, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle zu senden. All diese Fähigkeiten ermöglichen eine viel tiefere Benutzerbindung.

Im modernen Webentwicklungsumfeld ist es sehr empfehlenswert, mehr über serverseitige Entwicklung zu lernen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) unter Verwendung des **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (z.B. um die Ressource abzurufen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern kodiert sind (die Feld-Wert-Paare, die über eine [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die mit der [HTTP-POST-Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Nachrichten von Client-Anfragen, verarbeiten sie bei ihrem Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwort**-Nachricht. Die Antwort enthält eine Statuszeile, die angibt, ob die Anforderung erfolgreich war (z.B. "HTTP/1.1 200 OK" für Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das untenstehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die jedes Mal dasselbe fest kodierte Material vom Server zurückgibt, wenn eine bestimmte Ressource angefordert wird). Wenn ein Nutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anforderung, die seine URL angibt.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort zurück, die das Dokument und einen [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) (normalerweise 200 OK) enthält. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Webseite ist eine, bei der ein Teil der Antwortinhalte _dynamisch_ generiert wird, nur wenn es benötigt wird. Auf einer dynamischen Webseite werden HTML-Seiten normalerweise durch das Einfügen von Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen erstellt (dies ist eine weitaus effizientere Methode, um große Mengen an Inhalten zu speichern, als statische Webseiten zu verwenden).

Eine dynamische Seite kann unterschiedliche Daten für eine URL basierend auf Informationen bieten, die vom Benutzer bereitgestellt oder in Präferenzen gespeichert wurden, und kann andere Operationen als Teil der Rückgabe einer Antwort durchführen (z.B. Benachrichtigungen senden).

Der Großteil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server ausgeführt werden. Das Erstellen dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal "**Backend-Scripting**") bezeichnet.

Das untenstehende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, dann verarbeitet der Server die Anfragen und gibt entsprechende HTTP-Antworten zurück.

Anfragen nach _statischen_ Ressourcen werden auf die gleiche Weise wie für statische Seiten behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern - typischerweise: CSS, JavaScript, Bilder, vorgefertigte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu konstruieren. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen zur serverseitigen Ausführung weitergeleitet (2) (im Diagramm als _Webanwendung_ dargestellt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort zurück, die das generierte HTML enthält (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Wenden wir uns nun dem Code zu, der bei der serverseitigen und clientseitigen Programmierung beteiligt ist. In jedem Fall ist der Code erheblich unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden im Allgemeinen nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Client-Seite verwendet werden kann).
- Sie laufen in verschiedenen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und ist hauptsächlich damit beschäftigt, das Erscheinungsbild und Verhalten einer gerenderten Webseite zu verbessern. Dazu gehören die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, die Navigation, Formularvalidierung usw. Im Gegensatz dazu besteht die serverseitige Website-Programmierung hauptsächlich darin, _welche Inhalte_ als Antwort auf Anfragen an den Browser zurückgegeben werden. Der serverseitige Code kümmert sich um Aufgaben wie die Validierung übermittelter Daten und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der korrekten Daten an den Client nach Bedarf.

Clientseitiger Code wird unter Verwendung von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben - er wird in einem Webbrowser ausgeführt und hat kaum oder keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich des eingeschränkten Zugriffs auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer möglicherweise verwendet, um eine Website anzusehen - Browser bieten inkonsistente Kompatibilitätsstufen mit Client-Codefunktionen, und eine der Herausforderungen der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung elegant zu handhaben.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden - Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Server-Betriebssystem, und der Entwickler kann entscheiden, welche Programmiersprache (und welche spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code normalerweise unter Verwendung von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die dazu entwickelt wurden, häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Erneut, während sowohl Client- als auch serverseitige Code-Frameworks verwenden, sind die Domänen sehr unterschiedlich, und daher sind auch die Frameworks unterschiedlich. Clientseitige Webframeworks vereinfachen Aufgaben im Bereich Layout und Präsentation, während serverseitige Webframeworks eine Menge "allgemeiner" Webserver-Funktionen bereitstellen, die Sie sonst selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Vorlagenbibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden häufig verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann es schneller und effizienter sein, Ihren Code selbst zu schreiben, wenn Sie nur ein kleines, einfaches Website-UI benötigen.
>
> Im Gegensatz dazu würden Sie fast nie in Betracht ziehen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben - die Implementierung einer wesentlichen Funktion wie eines HTTP-Servers ist wirklich schwer, von Grund auf in Python zu erstellen, aber Python-Web-Frameworks wie Django bieten einen standardmäßig an, zusammen mit anderen sehr nützlichen Tools.

## Was können Sie auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, da sie uns ermöglicht, Informationen effizient für einzelne Benutzer bereitzustellen und dadurch eine viel bessere Benutzererfahrung zu schaffen.

Unternehmen wie Amazon verwenden serverseitige Programmierung, um Suchergebnisse für Produkte zu erstellen, gezielte Produktempfehlungen basierend auf den Vorlieben und früheren Kaufgewohnheiten der Kunden zu geben, Käufe zu vereinfachen usw.

Banken nutzen serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern das Anzeigen und Durchführen von Transaktionen zu ermöglichen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu steuern.

Einige der häufigsten Anwendungen und Vorteile der serverseitigen Programmierung sind im Folgenden aufgeführt. Ihnen wird auffallen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Serverseitige Programmierung ermöglicht es uns, stattdessen die Informationen in einer Datenbank zu speichern und dynamisch HTML und andere Dateitypen (z.B. PDFs, Bilder usw.) zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) zur Verarbeitung durch geeignete clientseitige Webframeworks zurückzugeben (dies reduziert die Verarbeitungsbelastung auf dem Server und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, sondern kann stattdessen das Ergebnis von Software-Tools oder Daten aus Kommunikationsdiensten zurückgeben. Die Inhalte können sogar auf den Typ des empfangenden Client-Geräts ausgerichtet sein.

Weil die Informationen in einer Datenbank sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Datenbank mit Inventar aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss nicht viel arbeiten, um den Vorteil von serverseitigem Code für effiziente Speicherung und Lieferung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Site.
> 2. Suchen Sie nach einer Reihe von Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, obwohl sich die Ergebnisse tun.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank gezogen wurde.
>
> Für einen allgemeinen Suchbegriff ("Fisch" zum Beispiel) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Mithilfe einer Datenbank können diese effizient gespeichert und geteilt werden, und es ermöglicht, die Präsentation der Informationen nur an einem Ort zu kontrollieren.

### Angepasste Benutzererfahrung

Server können Informationen über Clients speichern und verwenden, um eine bequeme und maßgeschneiderte Benutzererfahrung zu bieten. Zum Beispiel speichern viele Sites Kreditkarten, so dass Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routinginformationen bereitzustellen, und Such- oder Reisehistorie, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um ihre Interessen vorherzusehen und Antworten und Benachrichtigungen weiter anzupassen, zum Beispiel eine Liste von zuvor besuchten oder beliebten Orten bereitzustellen, die Sie auf einer Karte sehen könnten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Besuchsprotokolle. Häufig unternommene oder häufig gesuchte Orte werden stärker hervorgehoben als andere.
>
> Google-Suchergebnisse sind optimiert basierend auf vorherigen Suchanfragen.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Liebling" in das Suchfeld einzugeben und beobachten Sie die Autovervollständigungs-Suchvorschläge.
>
> Zufall? Niemals!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf berechtigte Benutzer einzuschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Reale Beispiele umfassen Social-Networking-Sites, die es Benutzern ermöglichen, zu bestimmen, wer die Inhalte sehen kann, die sie auf der Seite posten, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, bei denen der Zugang zu Inhalten kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Loggen Sie sich in Ihr Konto ein - welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Sitzungsspeicher/-statusinformationen speichern

Serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen - im Grunde genommen ein Mechanismus, der einem Server erlaubt, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verbunden sind, und verschiedene Antworten basierend auf diesen Informationen zu senden.

Dadurch kann beispielsweise eine Website wissen, dass ein Benutzer sich zuvor eingeloggt hat und Links zu seinen E-Mails oder der Bestellhistorie anzeigen oder möglicherweise den Zustand eines einfachen Spiels speichern, so dass der Benutzer die Website erneut besuchen kann und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnentenmodell hat, und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite über einige Stunden/Tage. Schließlich werden Sie beginnen, zu Seiten weitergeleitet zu werden, die erklären, wie man sich anmelden kann, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert werden.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder via E-Mail, SMS, Instant Messaging, Video-Gespräche oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikation zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die ähnlich zu denen sind, die bereits gekauft oder angesehen wurden und die für Sie interessant sein könnten.
- Ein Webserver könnte Warnnachrichten an Site-Administratoren senden, um sie auf geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivitäten aufmerksam zu machen.

> [!NOTE]
> Die häufigste Art der Benachrichtigung ist die "Bestätigung der Registrierung". Wählen Sie fast jede große Site, die Sie interessiert (Google, Amazon, Instagram usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten in Kürze eine E-Mail, die Ihre Registrierung bestätigt oder eine Anerkennung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: wonach sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel werben sowohl Amazon als auch Google für Produkte basierend auf früheren Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Benutzer sind, gehen Sie zu Ihrem Hauptfeed und schauen Sie sich den Strom von Posts an. Beachten Sie, wie einige der Posts aus der numerischen Reihenfolge sind - insbesondere Posts mit mehr "Likes" sind oft höher auf der Liste als neuere Posts.
>
> Schauen Sie sich auch an, welche Art von Anzeigen Ihnen gezeigt werden — Sie sehen möglicherweise Anzeigen für Dinge, die Sie auf anderen Seiten angesehen haben. Der Algorithmus von Facebook für das Hervorheben von Inhalten und Werbung kann ein wenig ein Rätsel sein, aber es ist klar, dass er von Ihren Vorlieben und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels zur serverseitigen Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, zu kontrollieren, _welche_ Informationen dem Benutzer gesendet werden (während clientseitiger Code hauptsächlich sowohl Struktur als auch Präsentation dieser Daten an den Benutzer verwaltet).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen effizient für einzelne Benutzer bereitstellen, und eine gute Vorstellung davon haben, was Sie als serverseitiger Programmierer möglicherweise tun können.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Vielzahl von Programmiersprachen geschrieben werden kann und dass Sie ein Webframework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Webframework für Ihre erste Site zu wählen. Hier führen wir Sie durch die Hauptinteraktionen zwischen Client und Server in ein wenig mehr Detail.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
