---
title: Einführung in die serverseitige Programmierung
slug: Learn/Server-side/First_steps/Introduction
l10n:
  sourceCommit: cae1efc0face20ee84d888dd93ca4f276c40a5d8
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}

Willkommen zum Einsteigerkurs für serverseitige Programmierung auf MDN! In diesem ersten Artikel betrachten wir die serverseitige Programmierung aus einer hohen Perspektive und beantworten Fragen wie "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es so nützlich?". Nachdem Sie diesen Artikel gelesen haben, werden Sie die zusätzlichen Möglichkeiten verstehen, die Websites durch serverseitige Programmierung geboten werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, was ein Webserver ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit damit erlangen, was serverseitige Programmierung ist, was sie leisten kann und wie sie sich von der clientseitigen Programmierung unterscheidet.
      </td>
    </tr>
  </tbody>
</table>

Die meisten groß angelegten Websites verwenden serverseitigen Code, um bei Bedarf dynamisch unterschiedliche Daten anzuzeigen, die in der Regel aus einer auf einem Server gespeicherten Datenbank abgerufen und dem Client zur Anzeige über einen Code (z.B. HTML und JavaScript) gesendet werden.

Der vielleicht bedeutendste Vorteil von serverseitigem Code besteht darin, dass er Ihnen ermöglicht, Website-Inhalte für einzelne Benutzer maßzuschneidern. Dynamische Seiten können Inhalte hervorheben, die basierend auf den Vorlieben und Gewohnheiten der Benutzer relevanter sind. Sie können auch die Benutzerfreundlichkeit von Websites verbessern, indem sie persönliche Vorlieben und Informationen speichern — zum Beispiel gespeicherte Kreditkartendaten wiederverwenden, um nachfolgende Zahlungen zu vereinfachen.

Es ist sogar möglich, mit den Benutzern der Website zu interagieren, Benachrichtigungen und Updates per E-Mail oder über andere Kanäle zu senden. All diese Fähigkeiten ermöglichen eine viel tiefere Bindung der Benutzer.

Im modernen Bereich der Webentwicklung ist das Lernen über serverseitige Entwicklung sehr empfehlenswert.

## Was ist serverseitige Website-Programmierung?

Webbrowser kommunizieren mit [Webservern](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server) unter Verwendung des **H**yper**T**ext **T**ransfer **P**rotocols ([HTTP](/de/docs/Glossary/HTTP)). Wenn Sie auf einer Webseite einen Link anklicken, ein Formular absenden oder eine Suche ausführen, wird eine **HTTP-Anfrage** von Ihrem Browser zum Zielserver gesendet.

Die Anfrage enthält eine URL, die die betreffende Ressource identifiziert, eine Methode, die die erforderliche Aktion definiert (zum Beispiel um die Ressource zu holen, zu löschen oder zu posten), und kann zusätzliche Informationen enthalten, die in URL-Parametern kodiert sind (die Feldwertpaare, die über eine [Abfragezeichenfolge](https://en.wikipedia.org/wiki/Query_string) gesendet werden), als POST-Daten (Daten, die durch die [HTTP-POST-Methode](/de/docs/Web/HTTP/Methods/POST) gesendet werden), oder in zugehörigen [Cookies](/de/docs/Glossary/Cookie).

Webserver warten auf Anfragen von Clients, verarbeiten sie bei deren Eintreffen und antworten dem Webbrowser mit einer **HTTP-Antwort**. Die Antwort enthält eine Statuszeile, die angibt, ob die Anfrage erfolgreich war (z.B. "HTTP/1.1 200 OK" bei Erfolg).

Der Body einer erfolgreichen Antwort auf eine Anfrage würde die angeforderte Ressource enthalten (z.B. eine neue HTML-Seite oder ein Bild), die dann vom Webbrowser angezeigt werden könnte.

### Statische Seiten

Das Diagramm unten zeigt eine grundlegende Webserver-Architektur für eine _statische Seite_ (eine statische Seite ist eine, die bei Anforderung einer bestimmten Ressource immer denselben fest kodierten Inhalt vom Server zurückgibt). Wenn ein Benutzer zu einer Seite navigieren möchte, sendet der Browser eine HTTP-"GET"-Anfrage, die ihre URL spezifiziert.

Der Server ruft das angeforderte Dokument aus seinem Dateisystem ab und gibt eine HTTP-Antwort mit dem Dokument und einem [Erfolgsstatus](/de/docs/Web/HTTP/Status#successful_responses) zurück (in der Regel 200 OK). Kann die Datei aus irgendeinem Grund nicht abgerufen werden, wird ein Fehlerstatus zurückgegeben (siehe [Client-Fehlerantworten](/de/docs/Web/HTTP/Status#client_error_responses) und [Server-Fehlerantworten](/de/docs/Web/HTTP/Status#server_error_responses)).

![Eine vereinfachte Darstellung eines statischen Webservers.](basic_static_app_server.png)

### Dynamische Seiten

Eine dynamische Website ist eine, bei der ein Teil des Antwortinhalts _dynamisch_ erzeugt wird, nur bei Bedarf. Auf einer dynamischen Website werden HTML-Seiten normalerweise erstellt, indem Daten aus einer Datenbank in Platzhalter in HTML-Vorlagen eingefügt werden (dies ist eine viel effizientere Möglichkeit, große Mengen von Inhalten zu speichern als mit statischen Websites).

Eine dynamische Seite kann je nach vom Benutzer bereitgestellten Informationen oder gespeicherten Vorlieben unterschiedliche Daten für eine URL zurückgeben und kann als Teil der Rückgabe einer Antwort weitere Operationen ausführen (z.B. Benachrichtigungen senden).

Der Großteil des Codes, der eine dynamische Website unterstützt, muss auf dem Server laufen. Die Erstellung dieses Codes wird als "**serverseitige Programmierung**" (oder manchmal auch "**Back-End-Scripting**") bezeichnet.

Das Diagramm unten zeigt eine einfache Architektur für eine _dynamische Website_. Wie im vorherigen Diagramm senden Browser HTTP-Anfragen an den Server, dann verarbeitet der Server die Anfragen und gibt entsprechende HTTP-Antworten zurück.

Anfragen nach _statischen_ Ressourcen werden auf die gleiche Weise wie bei statischen Seiten behandelt (statische Ressourcen sind alle Dateien, die sich nicht ändern – typischerweise: CSS, JavaScript, Bilder, vorher erstellte PDF-Dateien, etc.).

![Eine vereinfachte Darstellung eines Webservers, der serverseitige Programmierung verwendet, um Informationen aus einer Datenbank abzurufen und HTML aus Vorlagen zu erstellen. Das ist dasselbe Diagramm wie im Client-Server-Überblick.](web_application_with_html_and_steps.png)

Anfragen nach dynamischen Ressourcen werden stattdessen an serverseitigen Code weitergeleitet (2) (im Diagramm als _Webanwendung_ dargestellt). Für "dynamische Anfragen" interpretiert der Server die Anfrage, liest die erforderlichen Informationen aus der Datenbank (3), kombiniert die abgerufenen Daten mit HTML-Vorlagen (4) und sendet eine Antwort zurück, die das generierte HTML enthält (5,6).

## Sind serverseitige und clientseitige Programmierung dasselbe?

Lassen Sie uns nun die Aufmerksamkeit auf den Code richten, der bei der serverseitigen und clientseitigen Programmierung beteiligt ist. In beiden Fällen ist der Code erheblich unterschiedlich:

- Sie haben unterschiedliche Zwecke und Anliegen.
- Sie verwenden in der Regel nicht dieselben Programmiersprachen (die Ausnahme ist JavaScript, das sowohl auf der Server- als auch auf der Client-Seite verwendet werden kann).
- Sie laufen in unterschiedlichen Betriebssystemumgebungen.

Der im Browser ausgeführte Code wird als **clientseitiger Code** bezeichnet und befasst sich in erster Linie mit der Verbesserung des Aussehens und Verhaltens einer gerenderten Webseite. Dazu gehört das Auswählen und Gestalten von UI-Komponenten, das Erstellen von Layouts, Navigation, Formularvalidierung, etc. Im Gegensatz dazu befasst sich die serverseitige Website-Programmierung hauptsächlich mit der Auswahl, _welcher Inhalt_ als Antwort auf Anfragen an den Browser zurückgegeben wird. Der serverseitige Code bearbeitet Aufgaben wie die Validierung eingereichter Daten und Anfragen, die Verwendung von Datenbanken zum Speichern und Abrufen von Daten und das Senden der erforderlichen Daten an den Client nach Bedarf.

Client-seitiger Code wird mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) geschrieben — er läuft innerhalb eines Webbrowsers und hat wenig oder keinen Zugang zum zugrunde liegenden Betriebssystem (einschließlich begrenztem Zugriff auf das Dateisystem).

Webentwickler können nicht kontrollieren, welchen Browser jeder Benutzer zur Anzeige einer Website verwendet – Browser bieten unterschiedliche Kompatibilitätsstufen mit Funktionen für clientseitigen Code, und ein Teil der Herausforderung bei der clientseitigen Programmierung besteht darin, Unterschiede im Browser-Support elegant zu handhaben.

Serverseitiger Code kann in einer beliebigen Anzahl von Programmiersprachen geschrieben werden – Beispiele für beliebte serverseitige Websprachen sind PHP, Python, Ruby, C# und JavaScript (NodeJS). Der serverseitige Code hat vollen Zugriff auf das Betriebssystem des Servers, und der Entwickler kann wählen, welche Programmiersprache (und welche spezifische Version) er verwenden möchte.

Entwickler schreiben ihren Code typischerweise mit **Web-Frameworks**. Web-Frameworks sind Sammlungen von Funktionen, Objekten, Regeln und anderen Codekonstrukten, die entwickelt wurden, um häufige Probleme zu lösen, die Entwicklung zu beschleunigen und die unterschiedlichen Arten von Aufgaben zu vereinfachen, denen man sich in einem bestimmten Bereich gegenübersieht.

Auch wenn sowohl der Client- als auch der serverseitige Code Frameworks verwenden, sind die Bereiche sehr unterschiedlich und daher auch die Frameworks. Client-seitige Web-Frameworks vereinfachen die Layout- und Präsentationsaufgaben, während serverseitige Web-Frameworks viele "allgemeine" Webserver-Funktionalitäten bieten, die Sie sonst selbst implementieren müssten (z.B. Unterstützung für Sessions, Unterstützung für Benutzer und Authentifizierung, einfacher Datenbankzugang, Vorlagenbibliotheken, etc.).

> [!NOTE]
> Client-seitige Frameworks werden häufig verwendet, um die Entwicklung des clientseitigen Codes zu beschleunigen, aber Sie können sich auch entscheiden, den gesamten Code von Hand zu schreiben; Tatsächlich kann das Schreiben Ihres Codes von Hand schneller und effizienter sein, wenn Sie nur eine kleine, einfache Benutzeroberfläche für die Website benötigen.
>
> Im Gegensatz dazu würden Sie fast nie in Betracht ziehen, die serverseitige Komponente einer Web-App ohne ein Framework zu schreiben — die Implementierung einer wichtigen Funktion wie eines HTTP-Servers ist wirklich schwer von Grund auf in Python zu machen, aber Python-Web-Frameworks wie Django stellen einen sofort zur Verfügung, zusammen mit anderen sehr nützlichen Werkzeugen.

## Was können Sie auf der Server-Seite tun?

Die serverseitige Programmierung ist sehr nützlich, da sie uns ermöglicht, Informationen _effizient_ bereitzustellen, die auf einzelne Benutzer zugeschnitten sind, und dadurch ein viel besseres Benutzererlebnis zu schaffen.

Unternehmen wie Amazon nutzen serverseitige Programmierung, um Suchergebnisse für Produkte zu konstruieren, gezielte Produktempfehlungen basierend auf Kundenpräferenzen und früheren Kaufgewohnheiten zu machen, Käufe zu vereinfachen, etc.

Banken verwenden serverseitige Programmierung, um Kontoinformationen zu speichern und nur autorisierten Benutzern die Ansicht und Durchführung von Transaktionen zu ermöglichen. Andere Dienste wie Facebook, Twitter, Instagram und Wikipedia verwenden serverseitige Programmierung, um ansprechenden Inhalt hervorzuheben, zu teilen und den Zugriff darauf zu kontrollieren.

Einige der häufigsten Verwendungen und Vorteile der serverseitigen Programmierung sind unten aufgeführt. Sie werden feststellen, dass es einige Überschneidungen gibt!

### Effiziente Speicherung und Bereitstellung von Informationen

Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und stellen Sie sich vor, wie viele Beiträge auf Facebook geschrieben wurden? Für jedes Produkt oder jeden Beitrag eine separate statische Seite zu erstellen, wäre völlig unpraktisch.

Die serverseitige Programmierung ermöglicht es uns stattdessen, die Informationen in einer Datenbank zu speichern und HTML und andere Arten von Dateien (z.B. PDFs, Bilder, etc.) dynamisch zu konstruieren und zurückzugeben. Es ist auch möglich, Daten ([JSON](/de/docs/Glossary/JSON), [XML](/de/docs/Glossary/XML), etc.) zurückzugeben, die von geeigneten client-seitigen Web-Frameworks gerendert werden (dies reduziert die Verarbeitungsbelastung auf dem Server und die Menge der zu sendenden Daten).

Der Server ist nicht darauf beschränkt, Informationen aus Datenbanken zu senden, und könnte stattdessen das Ergebnis von Software-Tools oder Daten von Kommunikationsdiensten zurückgeben. Der Inhalt kann sogar auf den Typ des Clients abgestimmt werden, der ihn empfängt.

Da die Informationen in einer Datenbank gespeichert sind, können sie auch leichter mit anderen Geschäftssystemen geteilt und aktualisiert werden (zum Beispiel, wenn Produkte entweder online oder in einem Geschäft verkauft werden, könnte das Geschäft seine Bestandsdatenbank aktualisieren).

> [!NOTE]
> Ihre Vorstellungskraft muss nicht schwer arbeiten, um den Nutzen von serverseitigem Code für effiziente Speicherung und Bereitstellung von Informationen zu erkennen:
>
> 1. Gehen Sie zu [Amazon](https://www.amazon.com/) oder einer anderen E-Commerce-Site.
> 2. Suchen Sie nach einer Anzahl von Schlüsselwörtern und beachten Sie, wie sich die Seitenstruktur nicht ändert, obwohl sich die Ergebnisse ändern.
> 3. Öffnen Sie zwei oder drei verschiedene Produkte. Beachten Sie nochmals, dass sie eine gemeinsame Struktur und Layout haben, aber der Inhalt für verschiedene Produkte aus der Datenbank abgerufen wurde.
>
> Bei einem häufigen Suchbegriff ("Fisch", sagen wir) können Sie buchstäblich Millionen zurückgegebener Werte sehen. Die Verwendung einer Datenbank ermöglicht es, diese effizient zu speichern und zu teilen, und erlaubt es, die Präsentation der Informationen an nur einem Ort zu steuern.

### Benutzerdefiniertes Benutzererlebnis

Server können Informationen über Clients speichern und verwenden, um ein bequemes und maßgeschneidertes Benutzererlebnis zu bieten. Zum Beispiel speichern viele Websites Kreditkarten, sodass Details nicht erneut eingegeben werden müssen. Seiten wie Google Maps können gespeicherte oder aktuelle Standorte verwenden, um Routeninformatio anzubieten, und Such- oder Reiseverlauf, um lokale Unternehmen in den Suchergebnissen hervorzuheben.

Eine tiefere Analyse von Benutzergewohnheiten kann verwendet werden, um deren Interessen vorauszusehen und Antworten und Benachrichtigungen weiter anzupassen, indem beispielsweise eine Liste von zuvor besuchten oder beliebten Orten bereitgestellt wird, die Sie auf einer Karte betrachten möchten.

> **Hinweis:** [Google Maps](https://www.google.com/maps) speichert Ihren Such- und Besuchsverlauf. Häufig besuchte oder häufig gesuchte Orte werden stärker hervorgehoben als andere.
>
> Die Google-Suchergebnisse werden basierend auf früheren Suchanfragen optimiert.
>
> 1. Gehen Sie zu [Google Suche](https://www.google.com/).
> 2. Suchen Sie nach "Fußball".
> 3. Versuchen Sie nun, "Lieblings" in das Suchfeld einzugeben und beobachten Sie die Autocomplete-Suchvorschläge.
>
> Zufall? Keine Chance!

### Kontrollierter Zugang zu Inhalten

Die serverseitige Programmierung ermöglicht es Websites, den Zugriff auf autorisierte Benutzer zu beschränken und nur die Informationen zu bedienen, die ein Benutzer sehen darf.

Reale Beispiele umfassen soziale Netzwerke, die es Benutzern erlauben, zu bestimmen, wer die von ihnen geposteten Inhalte sehen kann und wessen Inhalte in ihrem Feed erscheinen.

> [!NOTE]
> Betrachten Sie andere reale Beispiele, bei denen der Zugang zu Inhalten kontrolliert wird. Zum Beispiel, was können Sie sehen, wenn Sie zur Online-Seite Ihrer Bank gehen? Loggen Sie sich in Ihr Konto ein - welche zusätzlichen Informationen können Sie sehen und ändern? Welche Informationen können Sie sehen, die nur die Bank ändern kann?

### Sitzungs-/Statusinformationen speichern

Die serverseitige Programmierung ermöglicht es Entwicklern, **Sitzungen** zu nutzen — im Wesentlichen ein Mechanismus, der einem Server ermöglicht, Informationen zu speichern, die mit dem aktuellen Benutzer einer Website verknüpft sind, und unterschiedliche Antworten basierend auf diesen Informationen zu senden.

Dies erlaubt es beispielsweise einer Website zu wissen, dass sich ein Benutzer bereits angemeldet hat und Links zu seinen E-Mails oder seiner Bestellhistorie anzuzeigen, oder vielleicht den Status eines einfachen Spiels zu speichern, damit der Benutzer die Seite erneut besuchen und dort weitermachen kann, wo er aufgehört hat.

> [!NOTE]
> Besuchen Sie eine Zeitungsseite, die ein Abonnementmodell hat, und öffnen Sie eine Reihe von Tabs (z.B. [The Age](https://www.theage.com.au/)). Besuchen Sie die Seite weiterhin über mehrere Stunden/Tage. Schließlich werden Sie zu Seiten weitergeleitet, die erklären, wie man ein Abonnement abschließt, und Sie werden keinen Zugang mehr zu den Artikeln haben. Diese Information ist ein Beispiel für Sitzungsinformationen, die in Cookies gespeichert werden.

### Benachrichtigungen und Kommunikation

Server können allgemeine oder benutzerspezifische Benachrichtigungen über die Website selbst oder per E-Mail, SMS, Instant Messaging, Videoanrufe oder andere Kommunikationsdienste senden.

Einige Beispiele sind:

- Facebook und Twitter senden E-Mails und SMS, um Sie über neue Kommunikationen zu benachrichtigen.
- Amazon sendet regelmäßig Produkt-E-Mails, die Produkte vorschlagen, die denen ähnlich sind, die bereits gekauft oder angesehen wurden und die Sie vielleicht interessieren könnten.
- Ein Webserver könnte Warnmeldungen an Site-Administratoren senden, die sie auf niedrigen Speicher auf dem Server oder verdächtige Benutzeraktivitäten hinweisen.

> [!NOTE]
> Die häufigste Art der Benachrichtigung ist eine "Registrierungsbestätigung". Wählen Sie fast jede große Seite, die Sie interessiert (Google, Amazon, Instagram, etc.), und erstellen Sie ein neues Konto mit Ihrer E-Mail-Adresse. Sie erhalten bald eine E-Mail, die Ihre Registrierung bestätigt oder eine Bestätigung erfordert, um Ihr Konto zu aktivieren.

### Datenanalyse

Eine Website kann eine Menge Daten über Benutzer sammeln: was sie suchen, was sie kaufen, was sie empfehlen, wie lange sie auf jeder Seite bleiben. Die serverseitige Programmierung kann verwendet werden, um Antworten basierend auf der Analyse dieser Daten zu verfeinern.

Zum Beispiel bewerben sowohl Amazon als auch Google Produkte basierend auf früheren Suchanfragen (und Käufen).

> [!NOTE]
> Wenn Sie ein Facebook-Benutzer sind, gehen Sie zu Ihrem Haupt-Feed und schauen Sie sich den Strom von Beiträgen an. Beachten Sie, wie einige der Beiträge numerisch nicht in der richtigen Reihenfolge sind — insbesondere Beiträge mit mehr "Gefällt mir"-Angaben stehen häufig höher in der Liste als neuere Beiträge.
>
> Schauen Sie sich auch an, welche Art von Werbung Ihnen angezeigt wird — möglicherweise sehen Sie Anzeigen für Dinge, die Sie auf anderen Websites angesehen haben. Der Algorithmus von Facebook zum Hervorheben von Inhalten und zur Werbung kann ein wenig mysteriös sein, aber es ist klar, dass er von Ihren Vorlieben und Sehgewohnheiten abhängt!

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende des ersten Artikels über serverseitige Programmierung erreicht.

Sie haben jetzt gelernt, dass serverseitiger Code auf einem Webserver ausgeführt wird und dass seine Hauptaufgabe darin besteht, _welche_ Informationen an den Benutzer gesendet werden (während clientseitiger Code hauptsächlich die Struktur und Präsentation dieser Daten für den Benutzer behandelt).

Sie sollten auch verstehen, dass es nützlich ist, weil es uns ermöglicht, Websites zu erstellen, die Informationen _effizient_ auf einzelne Benutzer zugeschnitten bereitstellen, und eine gute Vorstellung davon haben, was Sie tun könnten, wenn Sie ein serverseitiger Programmierer sind.

Zuletzt sollten Sie wissen, dass serverseitiger Code in mehreren Programmiersprachen geschrieben sein kann und dass Sie ein Web-Framework verwenden sollten, um den gesamten Prozess zu erleichtern.

In einem zukünftigen Artikel helfen wir Ihnen dabei, das beste Web-Framework für Ihre erste Seite auszuwählen. Hier werden wir Sie durch die wichtigsten Client-Server-Interaktionen in etwas mehr Detail führen.

{{NextMenu("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps")}}
