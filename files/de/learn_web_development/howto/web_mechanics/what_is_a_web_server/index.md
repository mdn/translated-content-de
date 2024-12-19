---
title: Was ist ein Webserver?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

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
          >den Unterschied zwischen einer Webseite, einer Website, einem
          Webserver und einer Suchmaschine verstehen</a
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

Der Begriff _Webserver_ kann sich auf Hardware oder Software oder beides beziehen, die zusammenarbeiten.

1. Auf der Hardware-Seite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Software-Seite umfasst ein Webserver mehrere Teile, die steuern, wie Webnutzer auf gehostete Dateien zugreifen. Mindestens ist dies ein _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Ein HTTP-Server kann über die Domainnamen der Websites, die er speichert, aufgerufen werden, und er liefert den Inhalt dieser gehosteten Websites an das Endgerät des Benutzers.

Auf der grundlegendsten Ebene, wann immer ein Browser eine Datei benötigt, die auf einem Webserver gehostet wird, fordert der Browser die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-)Webserver erreicht, akzeptiert der (Software-) _HTTP-Server_ die Anfrage, findet das angeforderte Dokument und sendet es über HTTP zurück an den Browser. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn "statisch", weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn "dynamisch", weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor der Inhalt über den HTTP-Server an Ihren Browser gesendet wird.

Zum Beispiel, um die endgültigen Webseiten zu erzeugen, die Sie im Browser sehen, könnte der Anwendungsserver eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben tausende von Webseiten. Typischerweise bestehen solche Websites aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstelle von tausenden von statischen HTML-Dokumenten. Diese Einrichtung erleichtert die Wartung und Bereitstellung des Inhalts.

## Vertiefung

Zur Wiederholung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der in seinem eigenen Speicher nach der angeforderten Datei sucht. Sobald die Datei gefunden wurde, liest der Server sie, verarbeitet sie bei Bedarf und sendet sie an den Browser. Werfen wir einen genaueren Blick auf diese Schritte.

### Hosting von Dateien

Zunächst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und deren zugehörige Ressourcen, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriftarten und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist weitaus bequemer, alle Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver ist in der Regel besser verfügbar (up and running).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann immer dieselbe IP-Adresse haben. Dies wird als _dedizierte IP-Adresse_ bezeichnet. (Nicht alle {{Glossary("ISP", "ISPs")}} stellen eine feste IP-Adresse für Heimleitungen bereit.)
- Ein dedizierter Webserver wird in der Regel von einem Dritten gepflegt.

Aus all diesen Gründen ist es ein entscheidender Teil beim Aufbau Ihrer Website, einen guten Hosting-Anbieter zu finden. Prüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie eine, die Ihren Bedürfnissen und Ihrem Budget entspricht. (Die Dienstleistungen reichen von kostenlos bis zu mehreren tausend Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Service haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens unterstützt ein Webserver {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol). Wie der Name schon sagt, gibt HTTP an, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist eine Reihe von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind im Klartext und für Menschen lesbar.
- Zustandslos
  - : Weder der Server noch der Client erinnern sich an vorherige Kommunikationen. Zum Beispiel kann ein Server allein auf HTTP angewiesen kein Passwort speichern, das Sie eingetippt haben, oder sich an Ihren Fortschritt bei einer unvollständigen Transaktion erinnern. Für Aufgaben wie diese benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren.
Wenn Sie mehr erfahren möchten, können Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP) lesen.
Vorläufig gibt es ein paar Dinge zu beachten:

- _Clients_ machen HTTP-Anfragen an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_.
- Bei der Anforderung einer Datei über HTTP müssen Clients die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss jede_ HTTP-Anfrage beantworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server verantwortlich für die Verarbeitung und Beantwortung eingehender Anfragen.

1. Bei Empfang einer Anfrage überprüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalt zurück an den Browser. Falls nicht, prüft der Server, ob er für die Anfrage eine Datei dynamisch generieren sollte (siehe [Statischer vs. dynamischer Inhalt](#statischer_vs._dynamischer_inhalt)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, am häufigsten {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe in das Design von 404-Fehlerseiten investieren.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statischer vs. dynamischer Inhalt

Grob gesagt, kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ "wie er ist" bedeutet. Statische Websites sind die einfachsten einzurichten, daher empfehlen wir, dass Sie Ihre erste Website als statische Seite gestalten.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder sogar dynamisch aus einer Datenbank erzeugt. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, wodurch es erheblich schwieriger wird, eine Website zu erstellen.

Es ist unmöglich, eine einzige Standard-Anwendung zu empfehlen, die für jeden Anwendungsfall die richtige Lösung darstellt. Einige Anwendungsserver sind darauf ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere generischer sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu untersuchen und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele fertige Lösungen gibt, von denen viele hoch konfigurierbar sind. Wenn Sie allerdings Ihren eigenen Server erstellen müssen, dann möchten Sie wahrscheinlich ein Server-Framework verwenden und den bestehenden Code und die Bibliotheken nutzen, um nur die Teile zu erweitern, die Sie für Ihren Anwendungsfall benötigen. Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server komplett von Grund auf neu entwickeln: zum Beispiel, um enge Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen. Wenn Sie experimentieren möchten, einen Server zu bauen, schauen Sie sich die Ressourcen im [Server-seitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernpfad an.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- nachlesen, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need) erfahren
- zu etwas Praktischem übergehen, wie [Dateien auf einen Webserver hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
