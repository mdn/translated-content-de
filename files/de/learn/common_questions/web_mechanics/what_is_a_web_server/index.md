---
title: Was ist ein Webserver?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erklären wir, was Webserver sind, wie sie funktionieren und warum sie wichtig sind.

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
          >den Unterschied zwischen einer Webseite, einer Website, einem Web
          Server und einer Suchmaschine verstehen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden lernen, was ein Webserver ist und ein allgemeines Verständnis
        dafür gewinnen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software beziehen oder auf beide, die zusammenarbeiten.

1. Auf der Hardwaresseite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Softwareseite umfasst ein Webserver mehrere Teile, die steuern, wie Webnutzer auf gehostete Dateien zugreifen. Mindestens handelt es sich um einen _HTTP-Server_. Ein HTTP-Server ist Software, die [URLs](/de/docs/Glossary/URL) (Webadressen) und [HTTP](/de/docs/Glossary/HTTP) (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Ein HTTP-Server kann über die Domainnamen der Websites aufgerufen werden, die er speichert, und liefert den Inhalt dieser gehosteten Websites an das Endgerät des Nutzers.

Auf der grundlegendsten Ebene fordert ein Browser, wann immer er eine auf einem Webserver gehostete Datei benötigt, die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-)Webserver erreicht, nimmt der (Software-) _HTTP-Server_ die Anfrage entgegen, findet das angeforderte Dokument und sendet es ebenfalls über HTTP an den Browser zurück. (Falls der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stapel, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn "statisch", weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn "dynamisch", weil der Anwendungsserver die gehosteten Dateien vor dem Senden des Inhalts an Ihren Browser über den HTTP-Server aktualisiert.

Zum Beispiel könnte der Anwendungsserver, um die endgültigen Webseiten zu erstellen, die Sie im Browser sehen, eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen solche Websites aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus tausenden von statischen HTML-Dokumenten. Dieses Setup erleichtert die Wartung und Bereitstellung der Inhalte.

## Tiefer eintauchen

Zur Überprüfung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der die angeforderte Datei in seinem eigenen Speicherplatz sucht. Sobald er die Datei findet, liest der Server sie, verarbeitet sie bei Bedarf und sendet sie an den Browser. Lassen Sie uns diese Schritte im Detail betrachten.

### Dateien hosten

Zunächst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und deren zugehörigen Assets, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriftarten und Videos.

Technisch könnten Sie alle diese Dateien auf Ihrem eigenen Computer hosten, aber es ist weitaus bequemer, alle Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver in der Regel verfügbarer ist (in Betrieb).
- Mit Ausnahme von Ausfallzeiten und Systemproblemen, ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann immer die gleiche IP-Adresse haben. Dies ist als _dedizierte IP-Adresse_ bekannt. (Nicht alle [ISPs](/de/docs/Glossary/ISP) bieten eine feste IP-Adresse für Hausanschlüsse an.)
- Ein dedizierter Webserver wird typischerweise von einem Drittanbieter gewartet.

Aus all diesen Gründen ist die Suche nach einem guten Hosting-Anbieter ein wesentlicher Bestandteil beim Aufbau Ihrer Website. Überprüfen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie einen aus, der Ihren Anforderungen und Ihrem Budget entspricht. (Dienste reichen von kostenlos bis zu Tausenden von Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für [HTTP](/de/docs/Glossary/HTTP) (**H**yper**t**ext **T**ransfer **P**rotocol). Wie der Name schon sagt, gibt HTTP an, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein [Protokoll](/de/docs/Glossary/Protocol) ist ein Satz von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle sind im Klartext und menschenlesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich vorherige Kommunikationen. Beispielsweise kann ein Server sich bei ausschließlicher Nutzung von HTTP nicht an ein eingegebenes Passwort oder den Fortschritt bei einer unvollständigen Transaktion erinnern. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren. Wir werden HTTP selbst in einem [technischen Artikel](/de/docs/Web/HTTP) später behandeln. Für den Moment sollten Sie sich dieser Dinge bewusst sein:

- In der Regel stellen nur _Clients_ HTTP-Anfragen, und zwar nur an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_. Ein Server kann auch Daten in einen Client-Cache füllen, bevor diese angefordert werden, über einen Mechanismus namens [Server-Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).
- Beim Anfordern einer Datei über HTTP müssen Clients die [URL](/de/docs/Glossary/URL) der Datei angeben.
- Der Webserver _muss_ jede HTTP-Anfrage beantworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server verantwortlich für die Bearbeitung und Beantwortung eingehender Anfragen.

1. Beim Empfang einer Anfrage überprüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalte zurück an den Browser. Wenn nicht, prüft der Server, ob er für die Anfrage eine Datei dynamisch generieren soll (siehe [Statischer vs. dynamischer Inhalt](#statischer_vs._dynamischer_inhalt)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, meistens {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe auf das Design von 404 Fehlerseiten verwenden.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statischer vs. dynamischer Inhalt

Grob gesagt kann ein Server entweder statischen oder dynamischen Inhalt bereitstellen. Denken Sie daran, dass der Begriff _statisch_ "unverändert bereitgestellt" bedeutet. Statische Websites sind am einfachsten einzurichten, daher empfehlen wir Ihnen, Ihre erste Website zu einer statischen Website zu machen.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder sogar aus einer Datenbank "on the fly" generiert. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stapel ist komplexer, was es erheblich anspruchsvoller macht, eine Website zu erstellen.

Es ist unmöglich, einen einzigen Anwendungserver von der Stange zu empfehlen, der die richtige Lösung für jeden möglichen Anwendungsfall ist. Einige Anwendungsserver sind dafür ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere allgemeiner sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele fertige Lösungen gibt, die in hohem Maße konfigurierbar sind. Wenn Sie jedoch einen eigenen Server erstellen müssen, möchten Sie wahrscheinlich ein Server-Framework verwenden, um dessen vorhandenen Code und Bibliotheken zu nutzen und nur die Teile zu erweitern, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen. Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server vollständig von Grund auf entwickeln müssen: Zum Beispiel, um enge Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen. Wenn Sie daran interessiert sind, mit dem Bau eines Servers zu experimentieren, schauen Sie sich die Ressourcen im [Server-seitige Website-Programmierung](/de/docs/Learn/Server-side) Lernpfad an.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- sich darüber informieren, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software erfahren, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- zu etwas Praktischem übergehen, wie [Dateien auf einen Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).
