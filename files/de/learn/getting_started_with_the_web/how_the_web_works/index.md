---
title: Wie das Web funktioniert
slug: Learn/Getting_started_with_the_web/How_the_Web_works
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

_Wie das Web funktioniert_ bietet eine vereinfachte Ansicht dessen, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon anzeigen.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, das zeigt, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung Anfrage geht vom Client zum Server, und ein Pfeil mit der Beschriftung Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetverbundenen Geräte eines typischen Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetzwerk verbunden ist) und die auf diesen Geräten verfügbaren Webzugriffssoftware (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Sites oder Apps speichern. Wenn ein Clientgerät auf eine Webseite zugreifen möchte, wird eine Kopie der Webseite vom Server auf die Clientmaschine heruntergeladen, um im Webbrowser des Benutzers angezeigt zu werden.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die involviert sind, und wir werden sie unten beschreiben.

Stellen Sie sich vor, das Web ist eine Straße. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, der ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weißes Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Neben dem Client und dem Server müssen wir auch noch folgende Dinge begrüßen:

- **Ihre Internetverbindung**: Ermöglicht Ihnen das Senden und Empfangen von Daten im Web. Sie ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen).
- **DNS**: Das Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihrem Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor er die Website abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist vergleichbar mit der Suche nach der Adresse des Geschäfts, um darauf zugreifen zu können.
- **HTTP**: Hypertext Transfer Protocol ist ein Anwendungs-{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist vergleichbar mit der Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponenten-Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript gebaut, wobei Sie ein wenig später auf andere Technologien stoßen werden.
  - **Assets**: Dies ist ein Sammelbegriff für all die anderen Dinge, die eine Website ausmachen, wie z. B. Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert also genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (für unser Beispiel ist das wie zum Geschäft gehen):

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung unter Verwendung von TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK" Nachricht, was bedeutet "Natürlich können Sie sich diese Website ansehen! Hier ist sie" und beginnt dann, die Dateien der Website als Reihe kleiner Pakete, sogenannte Datenpakete, an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück zu Ihrem Haus).
4. Der Browser setzt die kleinen Pakete zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (die Waren kommen vor Ihrer Tür an — neue glänzende Sachen, toll!).

## Reihenfolge, in der Komponenten-Dateien analysiert werden

Wenn Browser Anfragen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien oft {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn/CSS)-Stylesheets verweisen und {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn/JavaScript)-Skripte verweisen. Es ist wichtig zu wissen, in welcher Reihenfolge diese Dateien [vom Browser analysiert](/de/docs/Web/Performance/How_browsers_work#parsing) werden, während der Browser die Seite lädt:

- Der Browser analysiert zuerst die HTML-Datei, was dazu führt, dass der Browser alle `<link>`-Elementverweise auf externe CSS-Stylesheets und alle `<script>`-Elementverweise auf Skripte erkennt.
- Während der Browser das HTML analysiert, sendet er Anfragen zurück an den Server für alle CSS-Dateien, die er von `<link>`-Elementen gefunden hat, und alle JavaScript-Dateien, die er von `<script>`-Elementen gefunden hat, und analysiert daraus dann CSS und JavaScript.
- Der Browser generiert einen im Arbeitsspeicher gespeicherten [DOM](/de/docs/Web/API/Document_Object_Model)-Baum aus dem analysierten HTML, erzeugt eine im Arbeitsspeicher gespeicherte [CSSOM](/de/docs/Glossary/CSSOM)-Struktur aus dem analysierten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das analysierte JavaScript aus.
- Während der Browser den DOM-Baum aufbaut, die Stile aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf den Bildschirm gemalt, und der Benutzer sieht den Seiteninhalt und kann beginnen, mit ihm zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die freundlichen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind besondere Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Standort im Web dar. Es ist jedoch nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine von Ihnen in den Browser eingegebene Webadresse (wie "mozilla.org") mit der echten (IP) Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier? Grundsätzlich werden Daten, die über das Web gesendet werden, in Tausenden kleiner Stücke übertragen. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Stücke zu ersetzen, wenn dies passiert. Darüber hinaus können die Pakete über verschiedene Wege geleitet werden, was den Austausch schneller macht und es vielen verschiedenen Benutzern ermöglicht, gleichzeitig dieselbe Website herunterzuladen. Wenn jede Website als ein großes Stück gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web offensichtlich sehr ineffizient machen und wenig Spaß machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)

## Kredit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [kevin digga](https://www.pinterest.com/kevindigga/).

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
