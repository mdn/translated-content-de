---
title: Was ist ein Webserver?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{QuicklinksWithSubPages("Learn_web_development/Howto")}}

In diesem Artikel erklären wir, was Webserver sind, wie sie funktionieren und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen,
        <a href="/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >wie das Internet funktioniert</a
        >, und
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web"
          >den Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine verstehen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden lernen, was ein Webserver ist und ein allgemeines Verständnis dafür gewinnen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich sowohl auf Hardware als auch auf Software beziehen, oder auf beide zusammen.

1. Auf der Hardwareseite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Softwareseite umfasst ein Webserver mehrere Teile, die steuern, wie Web-Benutzer auf gehostete Dateien zugreifen. Mindestens ist es ein _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Ein HTTP-Server kann über die Domain-Namen der Websites, die er speichert, aufgerufen werden und liefert den Inhalt dieser gehosteten Websites an das Gerät des Endbenutzers.

Auf der grundlegendsten Ebene, immer wenn ein Browser eine Datei benötigt, die auf einem Webserver gehostet wird, fordert der Browser die Datei über HTTP an. Wenn die Anfrage den korrekten (Hardware-)Webserver erreicht, akzeptiert der (Software-) _HTTP-Server_ die Anfrage, findet das angeforderte Dokument und sendet es über HTTP zurück an den Browser. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404) Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn "statisch", weil der Server die gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn "dynamisch", weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er Inhalte über den HTTP-Server an Ihren Browser sendet.

Beispielsweise könnte der Anwendungsserver, um die endgültigen Webseiten zu erzeugen, die Sie im Browser sehen, eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Seiten wie MDN oder Wikipedia haben tausende von Webseiten. Typischerweise bestehen solche Websites aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus tausenden statischer HTML-Dokumente. Diese Einrichtung erleichtert die Pflege und Auslieferung der Inhalte.

## Tiefergehender Einblick

Zur Wiederholung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der in seinem eigenen Speicherbereich nach der angeforderten Datei sucht. Wenn er die Datei findet, liest sie der Server, verarbeitet sie nach Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte im Detail an.

### Dateien hosten

Zuerst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und ihre zugehörigen Ressourcen, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriften und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist viel bequemer, Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver typischerweise besser verfügbar ist (er ist hochgefahren und läuft).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann die ganze Zeit dieselbe IP-Adresse haben. Dies ist bekannt als eine _dedizierte IP-Adresse_. (Nicht alle {{Glossary("ISP", "ISPs")}} bieten eine feste IP-Adresse für Heimanschlüsse an.)
- Ein dedizierter Webserver wird typischerweise von einem Drittanbieter gewartet.

Aus all diesen Gründen ist es ein wichtiger Teil beim Aufbau Ihrer Website, einen guten Hosting-Anbieter zu finden. Prüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie einen, der zu Ihren Bedürfnissen und Ihrem Budget passt. (Die Dienstleistungen reichen von kostenlos bis zu tausenden von Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol). Wie der Name schon sagt, gibt HTTP an, wie Hypertext (verlinkte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist eine Reihe von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind im Klartext und menschenlesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich vorherige Kommunikationen. Zum Beispiel kann sich ein Server, der allein auf HTTP setzt, kein Passwort merken, das Sie eingetippt haben, oder Ihre Fortschritte bei einer unvollständigen Transaktion. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren.
Wenn Sie mehr erfahren möchten, können Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP) lesen.
Beachten Sie vorerst Folgendes:

- _Clients_ senden HTTP-Anfragen an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_.
- Wenn Clients eine Datei über HTTP anfordern, müssen sie die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss auf jede_ HTTP-Anfrage antworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server dafür verantwortlich, eingehende Anfragen zu bearbeiten und zu beantworten.

1. Nach Empfang einer Anfrage prüft ein HTTP-Server, ob die angeforderte URL mit einer bestehenden Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalt zurück an den Browser. Wenn nicht, prüft der Server, ob er dynamisch eine Datei für die Anfrage erzeugen sollte (siehe [Statische vs. dynamische Inhalte](#statische_vs._dynamische_inhalte)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, am häufigsten {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe auf das Design von 404-Fehlerseiten verwenden.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statische vs. dynamische Inhalte

Grob gesagt, kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ bedeutet "wie vorhanden bereitgestellt". Statische Websites lassen sich am einfachsten einrichten, daher empfehlen wir, Ihre erste Website als statische Seite zu gestalten.

Der Begriff _dynamisch_ bedeutet, dass der Server die Inhalte verarbeitet oder sogar in Echtzeit aus einer Datenbank erstellt. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, was es erheblich schwieriger macht, eine Website zu erstellen.

Es ist unmöglich, eine universelle Anwendungsserver-Lösung zu empfehlen, die für jeden möglichen Anwendungsfall ideal ist. Einige Anwendungsserver sind dafür ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere allgemeiner sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele fertige Lösungen gibt, von denen viele hoch konfigurierbar sind.
Aber wenn Sie doch Ihren eigenen Server erstellen müssen, dann möchten Sie wahrscheinlich ein Server-Framework verwenden, das vorhandenen Code und Bibliotheken nutzt und nur die Teile erweitert, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server komplett von Grund auf neu entwickeln müssen: beispielsweise um enge Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen.
Wenn Sie daran interessiert sind, einen Server zu bauen, schauen Sie sich die Ressourcen im Lernpfad [Server-seitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) an.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- mehr darüber lesen, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software lernen, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- zu etwas Praktischem übergehen, wie [Dateien auf einen Webserver hochzuladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
