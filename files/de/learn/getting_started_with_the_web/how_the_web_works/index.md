---
title: Wie das Web funktioniert
slug: Learn/Getting_started_with_the_web/How_the_Web_works
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

_Wie das Web funktioniert_ bietet eine vereinfachte Übersicht darüber, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon ansehen.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm ihrer Interaktion könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil namens Anfrage geht vom Client zum Server, und ein Pfeil namens Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die mit dem Internet verbundenen Geräte eines typischen Webbenutzers (zum Beispiel Ihr Computer, der mit Ihrem Wi-Fi verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare Webzugriffssoftware (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Sites oder Apps speichern. Wenn ein Clientgerät auf eine Webseite zugreifen möchte, wird eine Kopie der Webseite vom Server auf die Client-Maschine heruntergeladen, um im Webbrowser des Benutzers angezeigt zu werden.

## Die anderen Teile des Werkzeugsatzes

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere beteiligte Teile, die wir unten beschreiben werden.

Stellen wir uns jetzt vor, das Web ist eine Straße. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, ein Geschäft, in dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Zusätzlich zu Client und Server begrüßen wir auch:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Web zu senden und zu empfangen. Im Grunde ist es wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, ins Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen).
- **DNS**: Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihrem Browser eingeben, sieht der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor er sie abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an die richtige Stelle senden kann (siehe unten). Dies ist wie das Nachschlagen der Adresse des Geschäfts, damit Sie darauf zugreifen können.
- **HTTP**: Hypertext Transfer Protocol ist ein Anwendungs-[Protokoll](/de/docs/Glossary/Protocol), das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponenten-Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt, obwohl Sie später auf andere Technologien stoßen werden.
  - **Assets**: Dies ist ein Sammelbegriff für all die anderen Dinge, die eine Website ausmachen, wie Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert also genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (in unserem Beispiel ist das der Gang ins Geschäft):

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen ins Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen Client und Server gesendet werden, werden über Ihre Internetverbindung unter Verwendung von TCP/IP gesendet.
3. Wenn der Server die Anforderung des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe kleiner Datenpakete an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren und Sie bringen sie zu Ihrem Haus zurück).
4. Der Browser setzt die kleinen Teile zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (die Waren kommen bei Ihnen zu Hause an — neue glänzende Sachen, großartig!).

## Reihenfolge, in der Komponentendateien analysiert werden

Wenn Browser Anfragen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien häufig {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn/CSS)-Stylesheets verweisen, sowie {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn/JavaScript)-Skripte verweisen. Es ist wichtig zu wissen, in welcher Reihenfolge diese Dateien [vom Browser analysiert werden](/de/docs/Web/Performance/How_browsers_work#parsing), während der Browser die Seite lädt:

- Der Browser analysiert zuerst die HTML-Datei, was dazu führt, dass der Browser alle `<link>`-Element-Referenzen zu externen CSS-Stylesheets sowie alle `<script>`-Element-Referenzen zu Skripten erkennt.
- Während der Browser das HTML analysiert, sendet er Anfragen zurück an den Server für alle CSS-Dateien, die er aus `<link>`-Elementen gefunden hat, sowie alle JavaScript-Dateien, die er aus `<script>`-Elementen gefunden hat und analysiert dann das CSS und JavaScript.
- Der Browser generiert einen in-memory [DOM](/de/docs/Web/API/Document_Object_Model)-Baum aus dem analysierten HTML, generiert eine in-memory [CSSOM](/de/docs/Glossary/CSSOM)-Struktur aus dem analysierten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das analysierte JavaScript aus.
- Während der Browser den DOM-Baum aufbaut, die Stile aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf dem Bildschirm gezeichnet, und der Benutzer sieht den Seiteninhalt und kann beginnen, mit ihm zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in die Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als [IP-Adresse](/de/docs/Glossary/IP_Address) bezeichnet und stellt einen eindeutigen Standort im Internet dar. Allerdings ist das nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine von Ihnen in den Browser eingegebene Webadresse (wie "mozilla.org") mit der echten (IP-) Adresse der Website verknüpfen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir damit? Im Grunde werden beim Senden von Daten über das Internet Tausende von kleinen Teilen versendet. Es gibt verschiedene Gründe, warum Daten in kleinen Paketen gesendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Teile zu ersetzen, wenn dies passiert. Darüber hinaus können die Pakete auf unterschiedlichen Wegen geleitet werden, was den Austausch beschleunigt und es vielen verschiedenen Benutzern ermöglicht, gleichzeitig die gleiche Website herunterzuladen. Wenn jede Website als ein großes Stück gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web offensichtlich sehr ineffizient und nicht sehr unterhaltsam machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)

## Anerkennung

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [kevin digga](https://www.pinterest.com/kevindigga/).

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
