---
title: Was ist ein Webserver?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erklären wir, was Webserver sind, wie Webserver funktionieren und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >, und
        <a
          href="/de/docs/Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines"
          >den Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine verstehen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden lernen, was ein Webserver ist, und ein allgemeines Verständnis dafür gewinnen, wie dieser funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software beziehen, oder auf beides, das zusammenarbeitet.

1. Auf der Hardware-Seite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Software-Seite umfasst ein Webserver mehrere Teile, die steuern, wie Webnutzer auf gehostete Dateien zugreifen. Mindestens ist dies ein _HTTP-Server_. Ein HTTP-Server ist eine Software, die {{Glossary("URL","URLs")}} (Webadressen) und {{Glossary("HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Auf einen HTTP-Server kann über die Domainnamen der Websites, die er speichert, zugegriffen werden, und er liefert den Inhalt dieser gehosteten Websites an das Endgerät des Benutzers.

Auf der grundlegendsten Ebene fordert ein Browser, sobald er eine auf einem Webserver gehostete Datei benötigt, die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-) Webserver erreicht, nimmt der (Software-) _HTTP-Server_ die Anfrage an, findet das angeforderte Dokument und sendet es über HTTP an den Browser zurück. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Der Server wird "statisch" genannt, weil er die gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Der Server wird "dynamisch" genannt, weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er den Inhalt über den HTTP-Server an Ihren Browser sendet.

Um die finalen Webseiten zu erzeugen, die Sie im Browser sehen, könnte der Anwendungsserver beispielsweise eine HTML-Vorlage mit Inhalten aus einer Datenbank befüllen. Seiten wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen diese Arten von Seiten nur aus wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus Tausenden von statischen HTML-Dokumenten. Diese Einrichtung macht es einfacher, den Inhalt zu pflegen und auszuliefern.

## Eingehendere Betrachtung

Zur Wiederholung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der die angeforderte Datei in seinem eigenen Speicherplatz sucht. Der Server liest die Datei, verarbeitet sie bei Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte genauer an.

### Dateien hosten

Zuerst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und ihre zugehörigen Ressourcen, einschließlich Bildern, CSS-Stylesheets, JavaScript-Dateien, Schriften und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist weit bequemer, alle Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver typischerweise besser verfügbar ist (läuft und ist einsatzbereit).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver immer die gleiche IP-Adresse haben kann. Dies wird als _dedizierte IP-Adresse_ bezeichnet. (Nicht alle {{Glossary("ISP", "ISPs")}} bieten eine feste IP-Adresse für Heimleitungen an.)
- Ein dedizierter Webserver typischerweise von einem Drittanbieter gepflegt wird.

Aus all diesen Gründen ist die Auswahl eines guten Hosting-Anbieters ein wichtiger Teil beim Aufbau Ihrer Website. Prüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie eine aus, die Ihren Bedürfnissen und Ihrem Budget entspricht. (Dienstleistungen reichen von kostenlos bis zu Tausenden von Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für {{Glossary("HTTP")}} (*H*yper*t*ext *T*ransfer *P*rotocol). Wie der Name impliziert, legt HTTP fest, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol")}} ist eine Reihe von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind Klartext und menschenlesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich vorherige Kommunikationen. Zum Beispiel kann ein Server sich nicht an ein Passwort erinnern, das Sie getippt haben, oder sich an Ihren Fortschritt bei einer unvollständigen Transaktion erinnern. Sie benötigen einen Anwendungsserver für solche Aufgaben. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren. Wir werden HTTP selbst in einem [technischen Artikel](/de/docs/Web/HTTP) später behandeln. Im Moment sollten Sie sich dieser Dinge bewusst sein:

- Normalerweise machen nur _Clients_ HTTP-Anfragen und nur an _Server_. Server _antworten_ auf eine _Client_-HTTP-Anfrage. Ein Server kann auch Daten in einen Client-Cache einfügen, noch bevor sie angefragt wurden, durch einen Mechanismus namens [Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).
- Beim Anfordern einer Datei über HTTP müssen Clients die {{Glossary("URL")}} der Datei angeben.
- Der Webserver _muss_ jede HTTP-Anfrage beantworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server dafür verantwortlich, eingehende Anfragen zu verarbeiten und zu beantworten.

1. Bei Empfang einer Anfrage überprüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalts an den Browser zurück. Andernfalls überprüft der Server, ob er eine Datei dynamisch für die Anfrage generieren soll (siehe [Statische vs. dynamische Inhalte](#statische_vs._dynamische_inhalte)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, meist {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe auf das Design von 404-Fehlerseiten verwenden.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statische vs. dynamische Inhalte

Grob gesprochen kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, der Begriff _statisch_ bedeutet "unverändert bereitgestellt". Statische Websites sind am einfachsten einzurichten, daher empfehlen wir, Ihre erste Website als statische Website zu erstellen.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder sogar dynamisch aus einer Datenbank generiert. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, was es erheblich schwieriger macht, eine Website aufzubauen.

Es ist unmöglich, eine einzige standardisierte Anwendung zu empfehlen, die für jeden möglichen Anwendungsfall die richtige Lösung ist. Einige Anwendungsserver sind so konzipiert, dass sie Blogs, Wikis oder E-Commerce-Lösungen hosten und verwalten, während andere allgemeiner gehalten sind. Wenn Sie eine dynamische Website aufbauen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler werden keinen Anwendungsserver von Grund auf neu erstellen müssen, da es so viele verfügbare Lösungen gibt, von denen viele hochgradig konfigurierbar sind.
Aber wenn Sie doch Ihren eigenen Server erstellen müssen, dann werden Sie wahrscheinlich ein Server-Framework verwenden wollen, das vorhandenen Code und Bibliotheken nutzt und nur die Teile erweitert, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server vollständig von Grund auf neu entwickeln müssen: beispielsweise, um enge Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen.
Wenn Sie experimentieren möchten, wie ein Server aufgebaut wird, werfen Sie einen Blick auf die Ressourcen im Lernpfad [Serverseitige Website-Programmierung](/de/docs/Learn/Server-side).

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- sich darüber informieren, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software, die Sie zur Erstellung einer Website benötigen](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need) erfahren
- etwas Praktisches in Angriff nehmen, wie zum Beispiel [wie man Dateien auf einen Webserver hochlädt](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).
