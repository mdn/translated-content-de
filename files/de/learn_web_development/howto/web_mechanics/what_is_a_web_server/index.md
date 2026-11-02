---
title: Was ist ein Webserver?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_web_server
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

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
        Sie erfahren, was ein Webserver ist, und gewinnen ein grundlegendes Verständnis dafür, wie er funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Der Begriff _Webserver_ kann Hardware oder Software bezeichnen – oder beides im Zusammenspiel.

1. Auf der Hardwareseite ist ein Webserver ein Computer, auf dem Webserver-Software und die zu einer Website gehörenden Dateien gespeichert sind (beispielsweise HTML-Dokumente, Bilder, CSS-Stylesheets und JavaScript-Dateien). Ein Webserver ist mit dem Internet verbunden und ermöglicht den Datenaustausch mit anderen Geräten im Web.
2. Auf der Softwareseite umfasst ein Webserver mehrere Komponenten, die steuern, wie Webnutzer auf gehostete Dateien zugreifen. Dazu gehört mindestens ein _HTTP-Server_. Ein HTTP-Server ist eine Software, die {{Glossary("URL", "URLs")}} (Webadressen) und {{Glossary("HTTP", "HTTP")}} (das Protokoll, mit dem Ihr Browser Webseiten abruft) versteht. Ein HTTP-Server ist über die Domainnamen der Websites erreichbar, die er hostet, und liefert deren Inhalte an die Geräte der Endnutzer.

Wenn ein Browser eine auf einem Webserver gehostete Datei benötigt, fordert er sie über HTTP an. Sobald die Anfrage den richtigen Webserver (die Hardware) erreicht, nimmt der _HTTP-Server_ (die Software) sie entgegen, sucht das angeforderte Dokument und sendet es ebenfalls über HTTP an den Browser zurück. (Findet der Server das Dokument nicht, gibt er stattdessen eine [404](/de/docs/Web/HTTP/Reference/Status/404)-Antwort zurück.)

![Grundlegende Darstellung einer Client-Server-Verbindung über HTTP](web-server.svg)

Um eine Website zu veröffentlichen, benötigen Sie entweder einen statischen oder einen dynamischen Webserver.

Ein **statischer Webserver** oder Stack besteht aus einem Computer (Hardware) mit einem HTTP-Server (Software). Wir nennen ihn „statisch“, weil der Server seine gehosteten Dateien unverändert an Ihren Browser sendet.

Ein **dynamischer Webserver** besteht aus einem statischen Webserver und zusätzlicher Software, meist einem _Anwendungsserver_ und einer _Datenbank_. Wir nennen ihn „dynamisch“, weil der Anwendungsserver die Inhalte aufbereitet, bevor er sie über den HTTP-Server an Ihren Browser sendet.

Um beispielsweise die fertigen Webseiten zu erzeugen, die Sie im Browser sehen, kann der Anwendungsserver eine HTML-Vorlage mit Inhalten aus einer Datenbank füllen. Websites wie MDN oder Wikipedia haben Tausende von Webseiten. Üblicherweise bestehen solche Websites nicht aus Tausenden statischer HTML-Dokumente, sondern aus nur wenigen HTML-Vorlagen und einer umfangreichen Datenbank. Das erleichtert die Pflege und Bereitstellung der Inhalte.

## Vertiefung

Zur Erinnerung: Um eine Webseite abzurufen, sendet Ihr Browser eine Anfrage an den Webserver. Dieser sucht in seinem Speicher nach der angeforderten Datei. Wenn er sie findet, liest er sie, verarbeitet sie bei Bedarf und sendet sie an den Browser. Sehen wir uns diese Schritte genauer an.

### Dateien hosten

Zunächst muss ein Webserver die Dateien der Website speichern: sämtliche HTML-Dokumente und die zugehörigen Ressourcen, darunter Bilder, CSS-Stylesheets, JavaScript-Dateien, Schriftarten und Videos.

Technisch könnten Sie all diese Dateien auf Ihrem eigenen Computer hosten. Es ist jedoch wesentlich praktischer, sie auf einem dedizierten Webserver zu speichern, denn:

- Ein dedizierter Webserver ist in der Regel besser verfügbar, also häufiger in Betrieb und erreichbar.
- Von Ausfallzeiten und Systemproblemen abgesehen ist ein dedizierter Webserver ständig mit dem Internet verbunden.
- Ein dedizierter Webserver kann dauerhaft dieselbe IP-Adresse haben. Dies wird als _dedizierte IP-Adresse_ bezeichnet. (Nicht alle {{Glossary("ISP", "ISPs")}} stellen für private Internetanschlüsse eine feste IP-Adresse bereit.)
- Ein dedizierter Webserver wird in der Regel von einem Drittanbieter gewartet.

Aus all diesen Gründen ist die Wahl eines guten Hosting-Anbieters ein wichtiger Teil beim Aufbau Ihrer Website. Vergleichen Sie die Angebote verschiedener Unternehmen und wählen Sie eines, das Ihren Anforderungen und Ihrem Budget entspricht. Weitere Informationen finden Sie unter [Hosting und einen Domainnamen beschaffen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#getting_hosting_and_a_domain_name).

Sobald Sie einen Webhosting-Dienst haben, müssen Sie Ihre Dateien auf Ihren Webserver hochladen. Weitere Informationen finden Sie unter [Ihre Website veröffentlichen > Auf Ihrer Website veröffentlichen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website#publishing_to_your_website).

### Kommunikation über HTTP

Außerdem unterstützt ein Webserver {{Glossary("HTTP", "HTTP")}} (Hypertext Transfer Protocol). Wie der Name schon sagt, legt HTTP fest, wie Hypertext (verlinkte Webdokumente) zwischen zwei Computern übertragen wird.

Ein {{Glossary("Protocol", "Protokoll")}} ist ein Regelwerk für die Kommunikation zwischen zwei Computern. HTTP ist ein textbasiertes, zustandsloses Protokoll.

- Textbasiert
  - : Alle Befehle bestehen aus Klartext und sind für Menschen lesbar.
- Zustandslos
  - : Weder der Server noch der Client erinnern sich an frühere Kommunikation. Wenn sich ein Server beispielsweise nur auf HTTP stützt, kann er sich weder ein von Ihnen eingegebenes Passwort noch Ihren Fortschritt bei einem nicht abgeschlossenen Vorgang merken. Für solche Aufgaben benötigen Sie einen Anwendungsserver. (Auf diese Art von Technologie gehen wir in anderen Artikeln ein.)

HTTP gibt klare Regeln dafür vor, wie ein Client und ein Server miteinander kommunizieren.
Wenn Sie mehr erfahren möchten, lesen Sie die [HTTP-Dokumentation](/de/docs/Web/HTTP).
Für den Anfang sollten Sie sich Folgendes merken:

- _Clients_ stellen HTTP-Anfragen an _Server_. Server _antworten_ auf die HTTP-Anfragen eines _Clients_.
- Wenn Clients eine Datei über HTTP anfordern, müssen sie deren {{Glossary("URL", "URL")}} angeben.
- Der Webserver _muss_ auf jede HTTP-Anfrage antworten, zumindest mit einer Fehlermeldung.

Auf einem Webserver ist der HTTP-Server dafür zuständig, eingehende Anfragen zu verarbeiten und zu beantworten.

1. Wenn ein HTTP-Server eine Anfrage erhält, prüft er, ob die angeforderte URL einer vorhandenen Datei entspricht.
2. Falls ja, sendet der Webserver den Dateiinhalt an den Browser zurück. Falls nicht, prüft der Server, ob er für die Anfrage dynamisch eine Datei erzeugen soll (siehe [Statische und dynamische Inhalte](#statische_und_dynamische_inhalte)).
3. Ist keine dieser Möglichkeiten gegeben, gibt der Webserver eine Fehlermeldung an den Browser zurück, meist {{HTTPStatus("404", "404 Not Found")}}.
   Der 404-Fehler ist so häufig, dass manche Webdesigner viel Zeit und Mühe in die Gestaltung von 404-Fehlerseiten investieren.
   ![Die 404-Seite von MDN als Beispiel für eine solche Fehlerseite](mdn-404.jpg)

### Statische und dynamische Inhalte

Vereinfacht gesagt kann ein Server statische oder dynamische Inhalte bereitstellen. Denken Sie daran: _Statisch_ bedeutet, dass Inhalte unverändert ausgeliefert werden. Statische Websites sind am einfachsten einzurichten. Deshalb empfehlen wir Ihnen, Ihre erste Website als statische Website zu erstellen.

_Dynamisch_ bedeutet, dass der Server Inhalte verarbeitet oder sie sogar bei Bedarf aus einer Datenbank erzeugt. Dieser Ansatz bietet mehr Flexibilität. Allerdings ist der technische Stack komplexer, wodurch die Erstellung einer Website erheblich anspruchsvoller wird.

Es gibt keinen fertigen Anwendungsserver, der für jeden denkbaren Anwendungsfall die richtige Lösung ist. Manche Anwendungsserver sind darauf ausgelegt, Blogs, Wikis oder E-Commerce-Lösungen zu hosten und zu verwalten; andere sind allgemeiner einsetzbar. Wenn Sie eine dynamische Website erstellen, sollten Sie sich Zeit nehmen, Ihre Anforderungen zu prüfen und die Technologie zu finden, die am besten zu Ihren Bedürfnissen passt.

Die meisten Website-Entwickler müssen keinen Anwendungsserver von Grund auf neu erstellen, da es viele fertige Lösungen gibt, von denen sich zahlreiche umfassend konfigurieren lassen.
Wenn Sie dennoch einen eigenen Server erstellen müssen, empfiehlt es sich wahrscheinlich, ein Server-Framework zu verwenden. So können Sie dessen vorhandenen Code und Bibliotheken nutzen und nur die Teile erweitern, die für Ihren Anwendungsfall erforderlich sind.
Nur relativ wenige Entwickler dürften einen Server vollständig von Grund auf neu entwickeln müssen – beispielsweise, um die strengen Ressourcenbeschränkungen eines eingebetteten Systems einzuhalten.
Wenn Sie mit der Entwicklung eines Servers experimentieren möchten, sehen Sie sich die Ressourcen im Lernpfad [Serverseitige Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side) an.
