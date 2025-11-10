---
title: Was ist ein Webserver?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Artikel erklären wir, was Webserver sind, wie Webserver funktionieren und warum sie wichtig sind.

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
        Sie werden lernen, was ein Webserver ist, und ein allgemeines Verständnis dafür bekommen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software oder auf beide im Zusammenspiel beziehen.

1. Auf der Hardware-Seite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Software-Seite umfasst ein Webserver mehrere Teile, die steuern, wie Webbenutzer auf gehostete Dateien zugreifen. Mindestens ist dies ein _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Auf einen HTTP-Server kann über die Domainnamen der Websites zugegriffen werden, die er speichert, und er liefert den Inhalt dieser gehosteten Websites an das Endgerät des Benutzers.

Auf der grundlegendsten Ebene, wenn ein Browser eine Datei benötigt, die auf einem Webserver gehostet wird, fordert der Browser die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-) Webserver erreicht, akzeptiert der (Software-) _HTTP-Server_ die Anfrage, findet das angeforderte Dokument und sendet es zurück an den Browser, ebenfalls über HTTP. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Reference/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver** oder Stack besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn „statisch“, weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn „dynamisch“, weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er Inhalte über den HTTP-Server an Ihren Browser sendet.

Um zum Beispiel die endgültigen Webseiten zu erzeugen, die Sie im Browser sehen, könnte der Anwendungsserver eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen solche Websites aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus Tausenden von statischen HTML-Dokumenten. Diese Konfiguration erleichtert die Wartung und Bereitstellung der Inhalte.

## Tiefergehender Einblick

Zur Übersicht: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der in seinem eigenen Speicher nach der angeforderten Datei sucht. Wenn er die Datei findet, liest der Server sie, verarbeitet sie nach Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte genauer an.

### Dateien hosten

Zunächst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und deren zugehörige Assets, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriftarten und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist weitaus praktischer, Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver in der Regel verfügbarer ist (betriebsbereit).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver immer die gleiche IP-Adresse haben kann. Dies wird als _dedicated IP address_ bezeichnet. (Nicht alle {{Glossary("ISP", "ISPs")}} bieten eine festgelegte IP-Adresse für Heimleitungen an.)
- Ein dedizierter Webserver typischerweise von Dritten gewartet wird.

Aus all diesen Gründen ist es ein wesentlicher Bestandteil beim Aufbau Ihrer Website, einen guten Hosting-Anbieter zu finden. Prüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie einen, der Ihren Bedürfnissen und Ihrem Budget entspricht. (Die Dienstleistungen reichen von kostenlos bis zu mehreren tausend Dollar pro Monat.) Sie finden mehr Details [in diesem Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens stellt ein Webserver Unterstützung für {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol) bereit. Wie der Name schon sagt, spezifiziert HTTP, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist eine Menge von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind im Klartext und menschlich lesbar.
- Zustandslos
  - : Weder der Server noch der Client erinnern sich an vorherige Kommunikation. Zum Beispiel kann ein Server beim bloßen Verlassen von HTTP allein sich weder an ein eingegebenes Passwort erinnern noch Ihren Fortschritt bei einer unvollständigen Transaktion speichern. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP stellt klare Regeln für die Kommunikation zwischen einem Client und einem Server bereit.
Wenn Sie mehr erfahren möchten, können Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP) lesen.
Für den Moment gibt es ein paar Dinge zu beachten:

- _Clients_ stellen HTTP-Anfragen an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_.
- Bei der Anfrage einer Datei über HTTP müssen Clients die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss jede HTTP-Anfrage beantworten_, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server dafür zuständig, eingehende Anfragen zu verarbeiten und zu beantworten.

1. Beim Empfang einer Anfrage prüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Ist dies der Fall, sendet der Webserver den Dateiinhalt zurück an den Browser. Andernfalls prüft der Server, ob er eine Datei dynamisch für die Anfrage generieren soll (siehe [Statische vs. dynamische Inhalte](#statische_vs._dynamische_inhalte)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, meistens {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe darauf verwenden, 404-Fehlerseiten zu gestalten.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statische vs. dynamische Inhalte

Grob gesagt kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ „unverändert bereitgestellt“ bedeutet. Statische Websites sind am einfachsten einzurichten, daher empfehlen wir, Ihre erste Seite als statische Seite zu erstellen.

Der Begriff _dynamisch_ bedeutet, dass der Server die Inhalte verarbeitet oder sie sogar aus einer Datenbank dynamisch generiert. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, was den Aufbau einer Website enorm herausfordernder macht.

Es ist unmöglich, eine einzige, serienmäßige Anwendungsserverlösung vorzuschlagen, die die richtige Lösung für jeden möglichen Anwendungsfall ist. Einige Anwendungsserver sind darauf ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere eher generisch sind. Wenn Sie eine dynamische Website bauen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele serienmäßige Lösungen gibt, von denen viele hochgradig konfigurierbar sind.
Wenn Sie jedoch einen eigenen Server entwickeln müssen, wollen Sie wahrscheinlich ein Server-Framework verwenden, dessen vorhandenen Code und Bibliotheken nutzen und nur die Teile erweitern, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern müsste einen Server vollständig von Grund auf entwickeln: zum Beispiel, um enge Ressourceneinschränkungen auf einem eingebetteten System zu erfüllen.
Wenn Sie experimentieren möchten, einen Server zu bauen, schauen Sie sich die Ressourcen im [Server-seitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernpfad an.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- mehr über [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost) herausfinden
- mehr über [verschiedene Software erfahren, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- etwas Praktisches ausprobieren, wie [wie man Dateien auf einem Webserver hochlädt](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
