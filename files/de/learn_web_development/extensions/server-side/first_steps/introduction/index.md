---
title: Einführung in die serverseitige Programmierung
short-title: Introduction
slug: Learn_web_development/Extensions/Server-side/First_steps/Introduction
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}

Willkommen im MDN Anfängerkurs zur serverseitigen Programmierung! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer hohen Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nach der Lektüre dieses Artikels werden Sie die zusätzlichen Möglichkeiten verstehen, die Webseiten durch serverseitige Programmierung zur Verfügung stehen.

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
        Vertrautheit mit der serverseitigen Programmierung zu erlangen, was sie leisten kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten großen Websites verwenden serverseitigen Code, um dynamisch verschiedene Daten anzuzeigen, wenn dies erforderlich ist. Diese Daten werden im Allgemeinen aus einer Datenbank auf einem Server abgerufen und an den Client gesendet, um dort mithilfe von Code (z.B. HTML und JavaScript) angezeigt zu werden.

Der vielleicht größte Vorteil von serverseitigem Code besteht darin, dass er es Ihnen ermöglicht, Website-Inhalte für einzelne Benutzer anzupassen. Dynamische Websites können Inhalte hervorheben, die für den Benutzer basierend auf seinen Vorlieben und Gewohnheiten relevanter sind. Außerdem können sie Websites benutzerfreundlicher gestalten, indem persönliche Präferenzen und Informationen gespeichert werden — zum Beispiel die Wiederverwendung gespeicherter Kreditkartendaten, um nachfolgende Zahlungen zu erleichtern.

Dies kann sogar die Interaktion mit Site-Benutzern ermöglichen, indem Benachrichtigungen und Updates per E-Mail oder über andere Kanäle gesendet werden. All diese Fähigkeiten ermöglichen eine viel tiefere Interaktion mit Benutzern.

Im modernen Webentwicklungsumfeld wird das Erlernen der serverseitigen Entwicklung dringend empfohlen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) mittels des **H**yper**T**ext **T**ransfer **P**rotocols ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einen Link auf einer Webseite klicken, ein Formular absenden oder eine Suche ausführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um die Ressource abzurufen, zu löschen oder zu versenden), und kann zusätzliche Informationen enthalten, die in URL-Parametern codiert sind (die Feld-Wert-Paare, die über einen [Query String](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die mit der [HTTP POST Methode](/de/docs/Web/HTTP/Reference/Methods/POST) gesendet werden), oder in verbundenen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Client-Anfragenachrichten, verarbeiten diese bei Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwortnachricht**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war (z. B. "HTTP/1.1 200 OK" für Erfolg).

Der Hauptteil einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z. B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden kann.

### Statische Seiten

Das untenstehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Website_ (eine statische Website ist eine, die bei jeder Anforderung einer bestimmten Ressource denselben fest kodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer auf eine Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage unter Angabe der URL.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [Erfolgsstatus](/de/docs/Web/HTTP/Reference/Status#successful_responses) (normalerweise 200 OK) zurück. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Reference/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur bei Bedarf. Bei einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine wesentlich effizientere Möglichkeit, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Site kann je nach den vom Benutzer bereitgestellten Informationen oder gespeicherten Vorlieben unterschiedliche Daten für eine URL zurückgeben und kann im Rahmen der Antwort auch andere Operationen ausführen (z. B. das Senden von Benachrichtigungen).

Der Großteil des Codes zur Unterstützung einer dynamischen Website muss auf dem Server laufen. Das Erstellen dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal "**Back-End-Scripting**") bezeichnet.

Das folgende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, der die Anfragen dann verarbeitet und entsprechende HTTP-Antworten zurückgibt.

Anfragen für _statische_ Ressourcen werden auf die gleiche Weise wie für statische Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern - typischerweise: CSS, JavaScript, Bilder, vorgefertigte PDF-Dateien usw.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank zu beschaffen und HTML aus Vorlagen zu konstruieren. Dies ist dasselbe Diagramm wie in der Client-Server-Übersicht.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen (2) an serverseitigen Code weitergeleitet (im Diagramm als _Webanwendung_ dargestellt). Bei "dynamischen Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Nun wollen wir uns dem Code zuwenden, der in der serverseitigen und der clientseitigen Programmierung verwendet wird. In beiden Fällen ist der Code erheblich unterschiedlich:

- Sie verfolgen unterschiedliche Zwecke und Anliegen.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Client-Seite verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und befasst sich hauptsächlich mit der Verbesserung von Erscheinung und Verhalten einer gerenderten Webseite. Dazu gehören das Auswählen und Gestalten von UI-Komponenten, das Erstellen von Layouts, die Navigation, die Formularvalidierung usw. Im Gegensatz dazu beinhaltet die serverseitige Website-Programmierung hauptsächlich das Auswählen, _welche Inhalte_ dem Browser als Antwort auf Anfragen zurückgegeben werden. Der serverseitige Code übernimmt Aufgaben wie das Validieren von übermittelten Daten und Anfragen, die Nutzung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der erforderlichen Daten an den Client.

Der clientseitige Code wird mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) geschrieben - er wird in einem Webbrowser ausgeführt und hat wenig oder keinen Zugang zum zugrunde liegenden Betriebssystem (einschließlich des eingeschränkten Zugriffs auf das Dateisystem).

Webentwickler können nicht steuern, welchen Browser jeder Nutzer verwenden könnte, um eine Website anzusehen – Browser bieten inkonsistente Niveaus der Kompatibilität mit clientseitigen Code-Funktionen, und ein Teil der Herausforderung der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung elegant zu bewältigen.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden — Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Serverbetriebssystem und der Entwickler kann auswählen, welche Programmiersprache (und spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code typischerweise unter Verwendung von **Webframeworks**. Webframeworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Code-Konstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Nochmals, obwohl sowohl Client- als auch serverseitige Codes Frameworks verwenden, sind die Domänen sehr unterschiedlich und daher sind es auch die Frameworks. Clientseitige Webframeworks vereinfachen Design- und Präsentationsaufgaben, während serverseitige Webframeworks eine Menge an "allgemeiner" Webserver-Funktionalität liefern, die Sie sonst selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Templating-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden häufig verwendet, um die Entwicklung von clientseitigem Code zu beschleunigen, aber Sie können auch entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Website-Oberfläche benötigen.
>
> Im Gegensatz dazu würden Sie kaum jemals in Erwägung ziehen, die serverseitige Komponente einer Webanwendung ohne ein Framework zu schreiben — die Implementierung eines wesentlichen Features wie eines HTTP-Servers ist wirklich schwer von Grund auf zu tun, sagen wir, in Python. Aber Python-Webframeworks wie Django bieten eins von Haus aus, zusammen mit anderen sehr nützlichen Tools.

## Was können Sie auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, weil sie es uns ermöglicht, Informationen effizient zu liefern, die auf einzelne Benutzer zugeschnitten sind und dadurch ein viel besseres Benutzererlebnis schaffen.

Unternehmen wie Amazon nutzen serverseitige Programmierung, um Suchergebnisse für Produkte zusammenzustellen, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früherem Kaufverhalten zu machen, Einkäufe zu vereinfachen usw.

Banken verwenden serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern Ansichts- und Transaktionsmöglichkeiten zu bieten. Andere Services wie Facebook, Twitter, Instagram und Wikipedia nutzen serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu kontrollieren.

Einige der häufigen Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Lieferung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Die serverseitige Programmierung ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML und andere Dateitypen (z.B. PDF-Dateien, Bilder usw.) dynamisch zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) für die Darstellung durch geeignete clientseitige Webframeworks zurückzugeben (dies reduziert die Verarbeitungsbelastung des Servers und die Datenmenge, die gesendet werden muss).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und kann alternativ das Ergebnis von Software-Tools oder Daten aus Kommunikationsdiensten zurückgeben. Die Inhalte können sogar auf den Typ des Client-Geräts abgestimmt werden, das sie empfängt.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Datenbank mit Inventar aktualisieren).

> [!NOTE]
> Ihre Fantasie muss nicht schwer arbeiten, um den Vorteil von serverseitigem Code für die effiziente Speicherung und Lieferung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Website.
> 2. Suchen Sie nach einer Reihe von Schlüsselwörtern und notieren Sie, wie sich die Seitenstruktur nicht ändert, obwohl die Ergebnisse es tun.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und ein gemeinsames Layout haben, aber die Inhalte für verschiedene Produkte aus der Datenbank abgerufen wurden.
>
> Für einen häufigen Suchbegriff ("Fisch" zum Beispiel) können Sie buchstäblich Millionen von zurückgegebenen Werten sehen. Die Verwendung einer Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und es ermöglicht, die Darstellung der Informationen an nur einer Stelle zu steuern.

### Benutzerdefiniertes Benutzererlebnis

Server können Informationen über Kunden speichern und verwenden, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Beispielsweise speichern viele Websites Kreditkarten, sodass die Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standorte für die Bereitstellung von Routeninformationen verwenden und Such- oder Reisehistorien, um lokale Unternehmen in Suchergebnissen hervorzuheben.

Eine tiefere Analyse der Benutzergewohnheiten kann verwendet werden, um ihre Interessen zu antizipieren und Antworten und Benachrichtigungen weiter anzupassen, zum Beispiel durch Bereitstellung einer Liste von zuvor besuchten oder beliebten Standorten, die Sie auf einer Karte anzeigen möchten.

> [!NOTE] > [Google Maps](https://www.google.com/maps) speichert Ihre Such- und Verlaufshistorie. Häufig besuchte oder häufig gesuchte Standorte werden stärker hervorgehoben als andere.
>
> Die Google-Suchergebnisse sind basierend auf vorherigen Suchen optimiert.
>
> 1. Gehen Sie zu [Google-Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Lieblings" in das Suchfeld einzugeben und beachten Sie die Autovervollständigungs-Suchvorschläge.
>
> Zufall? Nada!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Reale Beispiele umfassen Social-Networking-Sites, die den Benutzern ermöglichen zu bestimmen, wer den von ihnen auf der Seite geposteten Inhalt sehen kann und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, in denen der Zugriff auf Inhalte kontrolliert wird. Was können Sie zum Beispiel sehen, wenn Sie auf die Online-Seite Ihrer Bank gehen? Melden Sie sich in Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur von der Bank geändert werden können?

### Sitzungs-/Zustandsinformationen speichern

Die serverseitige Programmierung ermöglicht es den Entwicklern, **Sitzungen** zu verwenden - im Grunde ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verbunden sind, und basierend auf diesen Informationen unterschiedliche Antworten zu senden.

Dies ermöglicht es beispielsweise, dass eine Seite weiß, dass sich ein Benutzer zuvor angemeldet hat und Links zu seinen E-Mails oder Bestellhistorie anzeigt oder vielleicht den Zustand eines einfachen Spiels speichert, sodass der Benutzer wieder auf die Site gehen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite mit einem Abonnementmodell und öffnen Sie einen Haufen Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiter über mehrere Stunden/Tage. Schließlich werden Sie weitergeleitet zu Seiten, die erklären, wie man abonniert, und Sie werden nicht mehr auf Artikel zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert sind.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Video-Anrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikationsnachrichten zu informieren.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die denen ähnlich sind, die bereits gekauft oder angesehen wurden und an denen Sie interessiert sein könnten.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren senden, die sie auf geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivität hinweisen.

> [!NOTE]
> Die häufigste Art von Benachrichtigungen ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Seite, an der Sie interessiert sind (Google, Amazon, Instagram usw.) und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten in Kürze eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung zur Aktivierung Ihres Kontos erfordert.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Die serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Beispielsweise werben Amazon und Google Produkte basierend auf vorherigen Suchen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Nutzer sind, gehen Sie zu Ihrem Haupt-Feed und schauen Sie sich den Strom von Beiträgen an. Beachten Sie, wie einige der Beiträge aus numerischer Reihenfolge heraus sind - insbesondere Beiträge mit mehr "Gefällt mir" sind oft höher auf der Liste als neuere Beiträge.
>
> Schauen Sie sich auch an, welche Art von Anzeigen Ihnen gezeigt werden — Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Seiten angesehen haben. Der Algorithmus von Facebook zur Hervorhebung von Inhalten und Werbung kann ein bisschen ein Rätsel sein, aber es ist klar, dass er von Ihren Vorlieben und Betrachtungsgewohnheiten abhängt!

## Zusammenfassung

Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, zu steuern, _welche_ Informationen an den Nutzer gesendet werden (während sich clientseitiger Code hauptsächlich um die Struktur und Darstellung dieser Daten an den Nutzer kümmert).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die _effizient_ Informationen bereitstellen, die auf einzelne Benutzer zugeschnitten sind, und dass Sie eine gute Vorstellung von einigen der Dinge haben, die Sie als serverseitiger Programmierer tun könnten.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Webframework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Webframework für Ihre erste Seite auszuwählen. Hier werden wir Ihnen die wichtigsten Client-Server-Interaktionen etwas näher erläutern.

{{NextMenu("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps")}}
