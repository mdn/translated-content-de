---
title: Was ist ein Webserver?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erklären wir, was Webserver sind, wie Webserver arbeiten und warum sie wichtig sind.

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
        Sie werden lernen, was ein Webserver ist und ein allgemeines Verständnis dafür erlangen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software oder auf beide zusammen beziehen.

1. Auf der Hardware-Seite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver ist mit dem Internet verbunden und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Software-Seite umfasst ein Webserver mehrere Teile, die steuern, wie Webbenutzer auf die gehosteten Dateien zugreifen. Im Minimum ist dies ein _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzusehen) versteht. Ein HTTP-Server kann über die Domainnamen der Websites, die er speichert, aufgerufen werden, und er liefert den Inhalt dieser gehosteten Websites an das Endgerät des Benutzers.

Auf der grundlegendsten Ebene, wenn ein Browser eine Datei benötigt, die auf einem Webserver gehostet wird, fordert der Browser die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-)Webserver erreicht, akzeptiert der (Software-) _HTTP-Server_ die Anfrage, findet das angeforderte Dokument und sendet es über HTTP zurück an den Browser. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn "statisch", weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist ein _Anwendungsserver_ und eine _Datenbank_. Wir nennen ihn "dynamisch", weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er den Inhalt über den HTTP-Server an Ihren Browser sendet.

Beispielsweise könnte der Anwendungsserver, um die endgültigen Webseiten zu erstellen, die Sie im Browser sehen, eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen solche Websites aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus Tausenden von statischen HTML-Dokumenten. Diese Einrichtung erleichtert es, die Inhalte zu pflegen und auszuliefern.

## Vertiefung

Zur Wiederholung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der nach der angeforderten Datei in seinem eigenen Speicherplatz sucht. Sobald die Datei gefunden wird, liest der Server sie, verarbeitet sie nach Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte etwas genauer an.

### Dateien hosten

Zuerst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und ihre zugehörigen Komponenten, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriften und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist viel praktischer, alle Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver ist in der Regel besser verfügbar (läuft ständig).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann die gleiche IP-Adresse behalten. Dies nennt man eine _dedizierte IP-Adresse_. (Nicht alle {{Glossary("ISP", "ISPs")}} bieten eine feste IP-Adresse für private Leitungen.)
- Ein dedizierter Webserver wird typischerweise von einem Drittanbieter gewartet.

Aus all diesen Gründen ist es ein entscheidender Teil des Aufbaus Ihrer Website, einen guten Hosting-Anbieter zu finden. Prüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie eine aus, die Ihren Bedürfnissen und Ihrem Budget entspricht. (Dienste reichen von kostenlos bis zu mehreren tausend Dollar pro Monat.) Sie finden weitere Details [in diesem Artikel](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für {{Glossary("HTTP", "HTTP")}} (**H**yper**t**ext **T**ransfer **P**rotocol). Wie der Name schon sagt, spezifiziert HTTP, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist eine Reihe von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind in Klartext und menschlich lesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich vorherige Kommunikationen. Zum Beispiel kann ein Server, der sich nur auf HTTP verlässt, sich nicht an ein eingegebenes Passwort erinnern oder Ihren Fortschritt bei einer unvollständigen Transaktion. Für Aufgaben wie diese benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren. Wir werden HTTP selbst in einem [technischen Artikel](/de/docs/Web/HTTP) später behandeln. Vorerst sind folgende Dinge wichtig:

- Gewöhnlich machen nur _Clients_ HTTP-Anfragen, und nur an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_. Ein Server kann auch Daten in den Cache eines Clients laden, vor einer Anforderung, durch einen Mechanismus namens [Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).
- Bei einer HTTP-Anfrage müssen Clients die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss_ auf jede HTTP-Anfrage antworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server für die Bearbeitung und Beantwortung eingehender Anfragen verantwortlich.

1. Beim Erhalt einer Anfrage prüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Ist dies der Fall, sendet der Webserver den Dateiinhalte zurück an den Browser. Wenn nicht, prüft der Server, ob er eine Datei für die Anfrage dynamisch generieren soll (siehe [Statischer vs. dynamischer Inhalt](#statischer_vs._dynamischer_inhalt)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, am häufigsten {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe darauf verwenden, 404-Fehlerseiten zu gestalten.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statischer vs. dynamischer Inhalt

Grob gesagt kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ "unverändert bereitgestellt" bedeutet. Statische Websites sind am einfachsten einzurichten, daher empfehlen wir Ihnen, Ihre erste Website als statische Website zu gestalten.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder sogar im laufenden Betrieb aus einer Datenbank generiert. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, was es erheblich schwieriger macht, eine Website zu erstellen.

Es ist unmöglich, einen einzelnen vorkonfigurierten Anwendungsserver vorzuschlagen, der die richtige Lösung für jeden möglichen Anwendungsfall sein wird. Einige Anwendungsserver sind darauf ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere generischer sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und finden Sie die Technologie, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele vorgefertigte Lösungen gibt, von denen viele hochgradig konfigurierbar sind.
Wenn Sie jedoch doch Ihren eigenen Server erstellen müssen, möchten Sie wahrscheinlich ein Server-Framework verwenden, um seinen bestehenden Code und Bibliotheken zu nutzen und nur die Teile zu erweitern, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server vollständig von Grund auf entwickeln müssen: zum Beispiel, um enge Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen.
Wenn Sie mit dem Bau eines Servers experimentieren möchten, schauen Sie sich die Ressourcen im [Serverseitiges Website-Programmierung](/de/docs/Learn/Server-side) Lernpfad an.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- nachlesen, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software erfahren, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- etwas Praktisches tun, wie [Dateien auf einen Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).
