---
title: Was ist ein Webserver?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
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
        Sie werden lernen, was ein Webserver ist, und ein allgemeines Verständnis dafür erlangen, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann sich auf Hardware oder Software beziehen, oder auf beides, wenn sie zusammenarbeiten.

1. Auf der Hardwareseite ist ein Webserver ein Computer, der Webserver-Software und die Komponenten-Dateien einer Website speichert (zum Beispiel HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver ist mit dem Internet verbunden und unterstützt den physischen Datenaustausch mit anderen Geräten, die mit dem Web verbunden sind.
2. Auf der Softwareseite umfasst ein Webserver mehrere Komponenten, die steuern, wie Webbenutzer auf gehostete Dateien zugreifen. Mindestens ist dies ein _HTTP-Server_. Ein HTTP-Server ist Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, das Ihr Browser verwendet, um Webseiten anzuzeigen) versteht. Ein HTTP-Server kann über die Domainnamen der Websites, die er speichert, zugegriffen werden und liefert den Inhalt dieser gehosteten Websites an das Gerät des Endbenutzers.

Auf der grundlegendsten Ebene fordert ein Browser immer dann, wenn er eine auf einem Webserver gehostete Datei benötigt, die Datei über HTTP an. Wenn die Anfrage den richtigen (Hardware-)Webserver erreicht, akzeptiert der (Software-) _HTTP-Server_ die Anfrage, findet das angeforderte Dokument und sendet es zurück an den Browser, ebenfalls über HTTP. (Wenn der Server das angeforderte Dokument nicht findet, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Reference/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client/Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver**, oder Stack, besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn "statisch", weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver plus zusätzlicher Software, meistens einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn "dynamisch", weil der Anwendungsserver die gehosteten Dateien aktualisiert, bevor er den Inhalt über den HTTP-Server an Ihren Browser sendet.

Um die endgültigen Webseiten zu erzeugen, die Sie im Browser sehen, könnte der Anwendungsserver zum Beispiel eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Seiten wie MDN oder Wikipedia haben Tausende von Webseiten. Typischerweise bestehen solche Seiten nur aus wenigen HTML-Vorlagen und einer riesigen Datenbank, statt aus Tausenden von statischen HTML-Dokumenten. Dieses Setup erleichtert die Pflege und Bereitstellung des Inhalts.

## Tiefer eintauchen

Um das Ganze noch einmal zu überdenken: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver, der die angeforderte Datei in seinem eigenen Speicherplatz sucht. Wenn die Datei gefunden wird, liest der Server sie, verarbeitet sie nach Bedarf und sendet sie an den Browser. Schauen wir uns diese Schritte genauer an.

### Dateien hosten

Zuerst muss ein Webserver die Dateien der Website speichern, nämlich alle HTML-Dokumente und ihre zugehörigen Ressourcen, einschließlich Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriftarten und Videos.

Technisch gesehen könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten, aber es ist viel bequemer, alle Dateien auf einem dedizierten Webserver zu speichern, weil:

- Ein dedizierter Webserver typischerweise verfügbarer ist (in Betrieb und funktionsfähig).
- Abgesehen von Ausfallzeiten und Systemproblemen ist ein dedizierter Webserver immer mit dem Internet verbunden.
- Ein dedizierter Webserver kann die ganze Zeit über die gleiche IP-Adresse haben. Dies wird als _dedizierte IP-Adresse_ bezeichnet. (Nicht alle {{Glossary("ISP", "ISPs")}} stellen eine feste IP-Adresse für Heimleitungen bereit.)
- Ein dedizierter Webserver wird typischerweise von einem Dritten gewartet.

Aus all diesen Gründen ist es ein wichtiger Teil beim Erstellen Ihrer Website, einen guten Hosting-Anbieter zu finden. Prüfen Sie die verschiedenen Services, die Unternehmen anbieten. Wählen Sie einen, der Ihren Bedürfnissen und Ihrem Budget entspricht. (Die Angebote reichen von kostenlos bis zu Tausenden von Dollar pro Monat.) Weitere Details finden Sie [in diesem Artikel](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost#hosting).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie [Ihre Dateien auf Ihren Webserver hochladen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).

### Kommunikation über HTTP

Zweitens bietet ein Webserver Unterstützung für {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol). Wie der Name schon sagt, spezifiziert HTTP, wie Hypertext (verknüpfte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist ein Satz von Regeln für die Kommunikation zwischen zwei Computern. HTTP ist ein textuelles, zustandsloses Protokoll.

- Textuell
  - : Alle Befehle sind im Klartext und menschlich lesbar.
- Zustandslos
  - : Weder der Server noch der Client merken sich vorherige Kommunikation. Zum Beispiel kann ein Server sich bei alleiniger Verwendung von HTTP kein Passwort merken, das Sie eingegeben haben, oder Ihren Fortschritt bei einer unvollständigen Transaktion verfolgen. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Wir werden diese Art von Technologie in anderen Artikeln behandeln.)

HTTP liefert klare Regeln dafür, wie ein Client und ein Server kommunizieren.
Wenn Sie mehr erfahren möchten, können Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP) lesen.
Für den Moment gibt es ein paar Dinge zu beachten:

- _Clients_ machen HTTP-Anfragen an _Server_. Server _antworten_ auf eine _Client_-HTTP-Anfrage.
- Wenn Clients eine Datei über HTTP anfordern, müssen sie die {{Glossary("URL", "URL")}} der Datei angeben.
- Der Webserver _muss_ jede HTTP-Anfrage beantworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server verantwortlich für die Verarbeitung und Beantwortung eingehender Anfragen.

1. Nach Erhalt einer Anfrage überprüft ein HTTP-Server, ob die angeforderte URL mit einer vorhandenen Datei übereinstimmt.
2. Wenn ja, sendet der Webserver den Dateiinhalte zurück an den Browser. Wenn nicht, wird überprüft, ob die Anfrage die dynamische Generierung einer Datei erfordert (siehe [Statische vs. dynamische Inhalte](#statische_vs._dynamische_inhalte)).
3. Wenn weder von beiden Optionen möglich ist, gibt der Webserver eine Fehlermeldung an den Browser zurück, in der Regel {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so verbreitet, dass einige Webdesigner beträchtliche Zeit und Mühe investieren, um 404-Fehlerseiten zu gestalten.
   ![Die MDN 404-Seite als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statische vs. dynamische Inhalte

Grob gesagt kann ein Server entweder statische oder dynamische Inhalte bereitstellen. Denken Sie daran, dass der Begriff _statisch_ bedeutet "wie es ist serviert". Statische Websites sind am einfachsten einzurichten, daher empfehlen wir Ihnen, Ihre erste Seite als statische Seite zu erstellen.

Der Begriff _dynamisch_ bedeutet, dass der Server den Inhalt verarbeitet oder ihn sogar dynamisch aus einer Datenbank erstellt. Dieser Ansatz bietet mehr Flexibilität, aber der technische Stack ist komplexer, was den Aufbau einer Website erheblich herausfordernder macht.

Es ist unmöglich, ein einziges gebrauchsfertiges Anwendungsserver-Produkt vorzuschlagen, das die richtige Lösung für jeden möglichen Anwendungsfall darstellt. Einige Anwendungsserver sind darauf ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten, während andere generischer sind. Wenn Sie eine dynamische Website erstellen, nehmen Sie sich die Zeit, Ihre Anforderungen zu erforschen und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es so viele gebrauchsfertige Lösungen gibt, von denen viele hochgradig konfigurierbar sind.
Wenn Sie jedoch Ihren eigenen Server erstellen müssen, sollten Sie wahrscheinlich ein Server-Framework verwenden, um auf bestehendem Code und Bibliotheken aufzubauen und nur die Teile zu erweitern, die Sie benötigen, um Ihren Anwendungsfall zu erfüllen.
Nur eine relativ kleine Anzahl von Entwicklern sollte einen Server komplett von Grund auf neu entwickeln müssen: zum Beispiel, um enge Ressourceneinschränkungen auf einem eingebetteten System zu erfüllen.
Wenn Sie experimentieren möchten, wie man einen Server erstellt, schauen Sie sich die Ressourcen im [Serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) Lernpfad an.

## Nächste Schritte

Nun, da Sie mit Webservern vertraut sind, könnten Sie:

- lesen, [wie viel es kostet, etwas im Web zu tun](/de/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- mehr über [verschiedene Software, die Sie benötigen, um eine Webseite zu erstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need) erfahren
- zu etwas Praktischem übergehen wie [wie man Dateien auf einen Webserver hochlädt](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server).
