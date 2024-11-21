---
title: Einführung in die serverseitige Programmierung
slug: Learn/Server-side/First_steps/Introduction
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

Willkommen beim Einsteigerkurs zur serverseitigen Programmierung von MDN! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer höheren Perspektive und beantworten Fragen wie „Was ist das?“, „Wie unterscheidet es sich von der clientseitigen Programmierung?“ und „Warum ist es so nützlich?“. Nach dem Lesen dieses Artikels werden Sie das zusätzliche Potenzial verstehen, das durch serverseitiges Coding für Websites verfügbar ist.

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
        Sich mit dem Konzept der serverseitigen Programmierung vertraut machen, was sie leisten kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen. Diese Daten werden in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und zur Anzeige über einige Code (z.B. HTML und JavaScript) an den Client gesendet.

Der vielleicht wichtigste Vorteil von serverseitigem Code besteht darin, dass Sie den Inhalt der Website für einzelne Benutzer maßschneidern können. Dynamische Seiten können Inhalte hervorheben, die basierend auf Benutzerpräferenzen und -gewohnheiten relevanter sind. Außerdem können sie Websites benutzerfreundlicher gestalten, indem sie persönliche Präferenzen und Informationen speichern – zum Beispiel gespeicherte Kreditkartendaten verwenden, um nachfolgende Zahlungen zu vereinfachen.

Es kann sogar die Interaktion mit Benutzern der Website ermöglichen, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle zu senden. All diese Funktionen ermöglichen eine viel tiefere Bindung der Benutzer.

In der modernen Webentwicklung wird das Erlernen der serverseitigen Entwicklung dringend empfohlen.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) über das **H**yper**T**ext **T**ransfer **P**rotocol ({{Glossary("HTTP", "HTTP")}}). Wenn Sie auf einer Webseite auf einen Link klicken, ein Formular absenden oder eine Suche durchführen, wird eine **HTTP-Anfrage** von Ihrem Browser an den Zielserver gesendet.

Die Anfrage enthält eine URL, die die betroffene Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel, um die Ressource abzurufen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern kodiert sind (die Feld-Wert-Paare, die über einen [Abfrage-String](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die von der [HTTP POST-Methode](/de/docs/Web/HTTP/Methods/POST) gesendet werden) oder in zugehörigen {{Glossary("Cookie", "Cookies")}}.

Webserver warten auf Client-Anforderungsnachrichten, verarbeiten diese bei Ankunft und antworten dem Webbrowser mit einer **HTTP-Antwort**nachricht. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war oder nicht (z.B. „HTTP/1.1 200 OK“ für Erfolg).

Der Inhalt einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das untenstehende Diagramm zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die bei Anforderung einer bestimmten Ressource denselben hartkodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-„GET“-Anfrage mit der Angabe ihrer URL.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [Erfolgsstatus](/de/docs/Web/HTTP/Status#successful_responses) (normalerweise 200 OK) zurück. Wenn die Datei aus irgendeinem Grund nicht abgerufen werden kann, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Status#server_error_responses)).

![Ein vereinfachtes Diagramm eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ nur bei Bedarf generiert wird. Auf einer dynamischen Website werden HTML-Seiten in der Regel erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine wesentlich effizientere Möglichkeit, große Mengen an Inhalten zu speichern, als statische Websites zu verwenden).

Eine dynamische Seite kann unterschiedliche Daten für eine URL basierend auf vom Benutzer bereitgestellten Informationen oder gespeicherten Präferenzen zurückgeben und kann andere Operationen als Teil der Rückgabe einer Antwort ausführen (z.B. das Senden von Benachrichtigungen).

Die meisten Codes zur Unterstützung einer dynamischen Website müssen auf dem Server ausgeführt werden. Diese Codeerstellung wird als "**serverseitige Programmierung**" (oder manchmal "**Back-End-Scripting**") bezeichnet.

Das untenstehende Diagramm zeigt eine Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server. Der Server verarbeitet dann die Anfragen und gibt geeignete HTTP-Antworten zurück.

Anfragen für _statische_ Ressourcen werden auf dieselbe Weise wie für statische Websites behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern – typischerweise: CSS, JavaScript, Bilder, vorkreierte PDF-Dateien, etc.).

![Ein vereinfachtes Diagramm eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Dies ist dasselbe Diagramm wie im Client-Server-Überblick.](web_application_with_html_and_steps.png)

Anfragen für dynamische Ressourcen werden stattdessen an serverseitigen Code weitergeleitet (2) (im Diagramm als _Webanwendung_ dargestellt). Bei „dynamischen Anfragen“ interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort mit dem generierten HTML zurück (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Schauen wir uns jetzt den Code an, der an der serverseitigen und clientseitigen Programmierung beteiligt ist. In beiden Fällen unterscheiden sich die Codes erheblich:

- Sie haben unterschiedliche Zwecke und Aufgaben.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Clientseite verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Der Code, der im Browser ausgeführt wird, wird als **clientseitiger Code** bezeichnet und konzentriert sich hauptsächlich auf die Verbesserung des Aussehens und des Verhaltens einer gerenderten Webseite. Dies umfasst die Auswahl und das Styling von UI-Komponenten, das Erstellen von Layouts, die Navigation, die Formularvalidierung usw. Demgegenüber geht es bei der serverseitigen Website-Programmierung hauptsächlich darum, _welcher_ Inhalt als Antwort auf Anfragen an den Browser zurückgegeben wird. Der serverseitige Code behandelt Aufgaben wie das Validieren eingereichter Daten und Anfragen, das Verwenden von Datenbanken zum Speichern und Abrufen von Daten und das Senden der richtigen Daten an den Client bei Bedarf.

Clientseitiger Code wird mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) geschrieben — er wird in einem Webbrowser ausgeführt und hat wenig bis keinen Zugriff auf das zugrunde liegende Betriebssystem (einschließlich eingeschränktem Zugriff auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer möglicherweise verwendet, um eine Website anzusehen — Browser bieten unterschiedliche Niveaus der Kompatibilität mit clientseitigen Codefunktionen, und ein Teil der Herausforderung bei der clientseitigen Programmierung besteht darin, Unterschiede in der Browserunterstützung elegant zu bewältigen.

Serverseitiger Code kann in einer Vielzahl von Programmiersprachen geschrieben werden — Beispiele für populäre serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Serverbetriebssystem und der Entwickler kann wählen, welche Programmiersprache (und welche spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code typischerweise unter Verwendung von **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die verschiedenen Arten von Aufgaben in einem bestimmten Bereich zu vereinfachen.

Obwohl sowohl client- als auch serverseitiger Code Frameworks verwenden, sind die Bereiche sehr unterschiedlich, und daher sind es auch die Frameworks. Clientseitige Web-Frameworks vereinfachen Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks viele „gemeinsame“ Webserver-Funktionalitäten bieten, die Sie sonst selbst implementieren müssten (z.B. Unterstützung für Sitzungen, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugriff, Template-Bibliotheken usw.).

> [!NOTE]
> Clientseitige Frameworks werden oft eingesetzt, um die Entwicklung des clientseitigen Codes zu beschleunigen, aber Sie können sich auch dafür entscheiden, den gesamten Code von Hand zu schreiben; tatsächlich kann es schneller und effizienter sein, den Code von Hand zu schreiben, wenn Sie nur eine kleine, einfache Website-Benutzeroberfläche benötigen.
>
> Im Gegensatz dazu würden Sie es fast nie in Betracht ziehen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben — das Implementieren einer vitalen Funktion wie eines HTTP-Servers ist wirklich schwierig, von Grund auf in Python zu machen, aber Python-Webframeworks wie Django bieten einen von vornherein, zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Serverseite tun?

Serverseitige Programmierung ist sehr nützlich, da sie es uns ermöglicht, _effizient_ Informationen bereitzustellen, die auf einzelne Benutzer zugeschnitten sind, und so ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon nutzen serverseitige Programmierung, um Suchergebnisse für Produkte zu konstruieren, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu machen, Käufe zu vereinfachen usw.

Banken verwenden serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern die Ansicht und Durchführung von Transaktionen zu gestatten. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um interessante Inhalte hervorzuheben, zu teilen und den Zugriff darauf zu steuern.

Einige der gängigen Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Ihnen wird auffallen, dass sich einige überschneiden!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktikabel.

Serverseitige Programmierung ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML und andere Dateitypen (z.B. PDFs, Bilder usw.) dynamisch zu erstellen und zurückzugeben. Es ist auch möglich, Daten ({{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} usw.) für die Darstellung durch geeignete clientseitige Webframeworks zurückzugeben (dies reduziert die Verarbeitungslast auf dem Server und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und kann alternativ das Ergebnis von Software-Tools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Typ des Endbenutzergeräts abgestimmt werden, das ihn empfängt.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Bestandsdatenbank aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss nicht hart arbeiten, um den Nutzen von serverseitigem Code für die effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Seite.
> 2. Suchen Sie nach mehreren Schlagwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, obwohl sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie erneut, wie sie eine gemeinsame Struktur und Layout haben, aber die Inhalte für verschiedene Produkte aus der Datenbank gezogen wurden.
>
> Bei einem häufig gesuchten Begriff („Fisch“, sagen wir) können Sie buchstäblich Millionen zurückgegebener Werte sehen. Die Verwendung einer Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und sie ermöglicht es, die Darstellung der Informationen an nur einem Ort zu steuern.

### Angepasstes Benutzererlebnis

Server können Informationen über die Kunden speichern und verwenden, um ein bequemes und individuelles Benutzererlebnis zu bieten. Beispielsweise speichern viele Websites Kreditkarten, sodass die Details nicht erneut eingegeben werden müssen. Websites wie Google Maps können gespeicherte oder aktuelle Standortdaten verwenden, um Routeninformationen bereitzustellen, und Such- oder Reiseverläufe nutzen, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine eingehendere Analyse der Benutzergewohnheiten kann verwendet werden, um deren Interessen vorherzusagen und Antworten sowie Benachrichtigungen weiter anzupassen, beispielsweise eine Liste zuvor besuchter oder beliebter Orte bereitzustellen, die Sie auf einer Karte möglicherweise ansehen möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihren Such- und Besuchsverlauf. Häufig besuchte oder häufig gesuchte Standorte werden mehr hervorgehoben als andere.
>
> Google-Suchergebnisse werden basierend auf vorherigen Suchanfragen optimiert.
>
> 1. Gehen Sie zu [Google Search](https://www.google.com/).
> 2. Suchen Sie nach „Fußball“.
> 3. Versuchen Sie nun, „Liebling“ in das Suchfeld einzugeben und beobachten Sie die Autovervollständigungs-Suchvorschläge.
>
> Zufall? Nada!

### Kontrollierter Zugriff auf Inhalte

Serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen bereitzustellen, die ein Benutzer sehen darf.

Echte Beispiele sind soziale Netzwerke, die es Benutzern ermöglichen, zu bestimmen, wer den von ihnen geposteten Inhalt auf der Website sehen kann, und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Denken Sie an andere reale Beispiele, bei denen der Zugriff auf Inhalte gesteuert wird. Was können Sie beispielsweise sehen, wenn Sie zur Website Ihrer Bank gehen? Melden Sie sich bei Ihrem Konto an — welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Speicherung von Sitzungs-/Statusinformationen

Serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen — im Wesentlichen ein Mechanismus, der es einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Site verbunden sind, und verschiedene Antworten basierend auf diesen Informationen zu senden.

Dies ermöglicht beispielsweise einer Website zu wissen, dass sich ein Benutzer bereits angemeldet hat, und Links zu seinen E-Mails oder Bestellhistorie anzuzeigen, oder vielleicht den Zustand eines einfachen Spiels zu speichern, sodass der Benutzer die Site erneut besuchen kann und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat, und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Site weiterhin über mehrere Stunden/Tage. Schließlich werden Sie damit beginnen, auf Seiten umgeleitet zu werden, die erklären, wie Sie sich abonnieren, und Sie werden keine Artikel mehr zugreifen können. Diese Informationen sind ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert werden.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS-Nachrichten, um Sie über neue Kommunikationen zu informieren.
- Amazon sendet regelmäßig Produktemails, die Produkte vorschlagen, die denen bereits gekaufter oder angesehener ähneln, für die Sie sich interessieren könnten.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren senden, die sie auf geringen Speicherplatz auf dem Server oder verdächtige Benutzeraktivitäten hinweisen.

> [!NOTE]
> Die häufigste Art von Benachrichtigung ist eine „Registrierungsbestätigung“. Wählen Sie fast jede große Site, die Sie interessiert (Google, Amazon, Instagram usw.), und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten in Kürze eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung zur Aktivierung Ihres Kontos erfordert.

### Datenanalyse

Eine Website kann viele Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Beispielsweise werben sowohl Amazon als auch Google für Produkte basierend auf vorherigen Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie Facebook-Benutzer sind, gehen Sie zu Ihrem Haupt-Feed und schauen Sie sich den Stream von Posts an. Beachten Sie, wie einige Posts aus numerischer Ordnung sind - insbesondere Posts mit mehr "Likes" sind oft höher auf der Liste als neuere Posts.
>
> Schauen Sie sich auch an, welche Art von Werbung Ihnen gezeigt wird - Sie könnten Anzeigen für Dinge sehen, die Sie auf anderen Websites angesehen haben. Der Algorithmus von Facebook zur Hervorhebung von Inhalten und Werbung kann ein bisschen rätselhaft sein, aber es ist klar, dass er von Ihren „Gefällt mir“-Angaben und Ansichtengewohnheiten abhängt!

## Zusammenfassung

Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben nun gelernt, dass serverseitiger Code auf einem Webserver läuft und seine Hauptaufgabe darin besteht, zu kontrollieren, _welche_ Informationen dem Benutzer gesendet werden (während clientseitiger Code hauptsächlich für die Strukturierung und Präsentation dieser Daten an den Benutzer verantwortlich ist).

Sie sollten auch verstehen, dass sie nützlich ist, weil sie es uns ermöglicht, Websites zu erstellen, die _effizient_ Informationen liefern, die auf einzelne Benutzer zugeschnitten sind, und eine gute Vorstellung davon haben, was Sie möglicherweise tun können, wenn Sie ein serverseitiger Programmierer werden.

Zuletzt sollten Sie verstehen, dass serverseitiger Code in einer Reihe von Programmiersprachen geschrieben werden kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel werden wir Ihnen helfen, das beste Web-Framework für Ihre erste Site auszuwählen. Hier werden wir Sie durch die Hauptinteraktionen zwischen Client und Server etwas detaillierter führen.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
