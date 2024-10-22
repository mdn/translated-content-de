---
title: Was ist ein Webserver?
slug: Learn/Common_questions/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: bd48972c8a9c2acf3b8fa6e41248d0952eb0c406
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

In diesem Artikel erklären wir, was Webserver sind, wie sie funktionieren und warum sie wichtig sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen,
        <a href="/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work">wie das Internet funktioniert</a>,
        und den Unterschied zwischen einer Webseite, einer Website, einem Webserver und einer Suchmaschine verstehen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie werden lernen, was ein Webserver ist, und ein allgemeines Verständnis dafür gewinnen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software beziehen, oder auf beide zusammenarbeitend.

1. Auf der Hardwareseite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver verbindet sich mit dem Internet und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Softwareseite umfasst ein Webserver mehrere Teile, die steuern, wie Webnutzer auf gehostete Dateien zugreifen. Mindestens umfasst das einen _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Ein HTTP-Server kann über die Domain-Namen der Websites, die er speichert, abgerufen werden und liefert den Inhalt dieser gehosteten Websites an das Endgerät des Nutzers.

Auf der einfachsten Ebene, wenn ein Browser eine Datei benötigt, die auf einem Webserver gehostet wird, fordert der Browser die Datei über HTTP an. Wenn die Anforderung den richtigen (Hardware-)Webserver erreicht, akzeptiert der (Software-)_HTTP-Server_ die Anforderung, findet das angeforderte Dokument und sendet es über HTTP zurück an den Browser. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Er wird "statisch" genannt, weil der Server die gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver und zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Er wird "dynamisch" genannt, weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er Inhalte über den HTTP-Server an Ihren Browser sendet.

Um die endgültigen Webseiten zu erstellen, die Sie im Browser sehen, könnte der Anwendungsserver beispielsweise eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen solche Seiten aus nur wenigen HTML-Vorlagen und einer riesigen Datenbank, anstatt aus Tausenden von statischen HTML-Dokumenten. Diese Konfiguration erleichtert die Wartung und Bereitstellung der Inhalte.

## Vertiefung

Zur Übersicht: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der in seinem eigenen Speicherplatz nach der angeforderten Datei sucht. Nachdem er die Datei gefunden hat, liest der Server sie, verarbeitet sie nach Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte genauer an.

### Dateien hosten

Zuerst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und deren zugehörige Assets, einschließlich Bilder, CSS-Stile, JavaScript-Dateien, Schriftarten und Videos.

Technisch könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist weitaus praktischer, Dateien auf einem dedizierten Webserver zu speichern, da:

- Ein dedizierter Webserver in der Regel besser verfügbar ist (läuft und ist betriebsbereit).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann die ganze Zeit über dieselbe IP-Adresse haben. Dies ist als _dedizierte IP-Adresse_ bekannt. (Nicht alle {{Glossary("ISP", "ISPs")}} bieten eine feste IP-Adresse für Heimanschlüsse an.)
- Ein dedizierter Webserver wird in der Regel von einem Drittanbieter gewartet.

Aus all diesen Gründen ist die Suche nach einem guten Hosting-Anbieter ein wichtiger Teil des Aufbaus Ihrer Website. Untersuchen Sie die verschiedenen Dienstleistungen, die Unternehmen anbieten. Wählen Sie eine aus, die Ihren Bedürfnissen und Ihrem Budget entspricht. (Die Dienste reichen von kostenlos bis zu Tausenden von Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol). Wie sein Name schon sagt, gibt HTTP an, wie Hypertext (verlinkte Webdokumente) zwischen zwei Computern übertragen werden soll.

Ein {{Glossary("Protocol", "Protokoll")}} ist eine Reihe von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textuelles, zustandsloses Protokoll.

- Textuell
  - : Alle Befehle sind in Klartext und für Menschen lesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich frühere Kommunikationen. Zum Beispiel kann ein Server, wenn er sich nur auf HTTP verlässt, kein Passwort merken, das Sie eingegeben haben, oder sich an Ihren Fortschritt bei einer unvollständigen Transaktion erinnern. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP bietet klare Regeln dafür, wie ein Client und ein Server kommunizieren.
Wenn Sie mehr darüber erfahren möchten, können Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP) lesen.
Für jetzt gibt es ein paar Dinge, die Sie beachten sollten:

- _Clients_ senden HTTP-Anfragen an _Server_. Server _antworten_ auf die HTTP-Anfrage eines _Clients_.
- Bei der Anforderung einer Datei über HTTP müssen Clients die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss jede_ HTTP-Anfrage beantworten, mindestens mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server dafür verantwortlich, eingehende Anforderungen zu verarbeiten und zu beantworten.

1. Nach Erhalt einer Anfrage prüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalt zurück an den Browser. Wenn nicht, prüft der Server, ob er für die Anfrage eine Datei dynamisch generieren soll (siehe [Statischer vs. dynamischer Inhalt](#statischer_vs._dynamischer_inhalt)).
3. Wenn keine dieser Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, am häufigsten {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass einige Webdesigner beträchtliche Zeit und Mühe in die Gestaltung von 404-Fehlerseiten investieren.
   ![Die MDN-404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statischer vs. dynamischer Inhalt

Grob gesagt kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ "unverändert serviert" bedeutet. Statische Websites sind am einfachsten einzurichten, daher empfehlen wir Ihnen, Ihre erste Website als statische Website zu machen.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder ihn sogar aus einer Datenbank dynamisch generiert. Diese Herangehensweise bietet mehr Flexibilität, aber der technische Stack ist komplexer, was den Aufbau einer Website erheblich anspruchsvoller macht.

Es ist unmöglich, eine einzige Standard-Serveranwendung zu empfehlen, die für jeden möglichen Anwendungsfall die richtige Lösung sein wird. Einige Anwendungsserver sind dazu gedacht, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere allgemeiner sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu recherchieren und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele Standardlösungen gibt, von denen viele hochgradig konfigurierbar sind. Aber wenn Sie Ihren eigenen Server erstellen müssen, möchten Sie wahrscheinlich ein Server-Framework verwenden, indem Sie dessen bestehenden Code und Bibliotheken nutzen und nur die Teile erweitern, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server vollständig von Grund auf entwickeln müssen, zum Beispiel um knappe Ressourcenbeschränkungen auf einem eingebetteten System zu erfüllen. Wenn Sie mit dem Bau eines Servers experimentieren möchten, werfen Sie einen Blick auf die Ressourcen im [Server-seitige Website-Programmierung](/de/docs/Learn/Server-side) Lernpfad.

## Nächste Schritte

Jetzt, da Sie mit Webservern vertraut sind, könnten Sie:

- sich darüber informieren, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn/Common_questions/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software erfahren, die Sie benötigen, um eine Website zu erstellen](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- etwas Praktisches machen, wie [wie man Dateien auf einem Webserver hochlädt](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server).
