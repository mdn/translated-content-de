---
title: Wie das Web funktioniert
slug: Learn/Getting_started_with_the_web/How_the_Web_works
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

_Wie das Web funktioniert_ bietet eine vereinfachte Sicht darauf, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon anzeigen.

Diese Theorie ist kurzfristig nicht zwingend erforderlich, um Webcode zu schreiben, aber es wird nicht lange dauern, bis Sie davon profitieren, zu verstehen, was im Hintergrund passiert.

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm ihrer Interaktion könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Aufschrift Anfrage geht vom Client zum Server und ein Pfeil mit der Aufschrift Antworten geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte typischer Webbenutzer (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare Websoftware (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client-Gerät eine Webseite aufrufen möchte, wird eine Kopie der Webseite vom Server auf die Client-Maschine heruntergeladen, um sie im Webbrowser des Benutzers anzuzeigen.

## Die anderen Teile des Werkzeugsatzes

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen wir uns für den Moment vor, dass das Web eine Straße ist. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, ein Geschäft, aus dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Zusätzlich zu Client und Server müssen wir auch folgendes begrüßen:

- **Ihre Internetverbindung**: Ermöglicht Ihnen, Daten im Web zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu fahren und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen).
- **DNS**: Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, sieht der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor sie die Website abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Dies ist wie die Suche nach der Adresse des Geschäfts, damit Sie es zugänglich machen können.
- **HTTP**: Hypertext Transfer Protocol ist ein Anwendung{{Glossary("Protocol", "sprotokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Dies ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponenten-Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie im Geschäft kaufen. Diese Dateien gibt es in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt, obwohl Sie später noch andere Technologien kennenlernen werden.
  - **Assets**: Dies ist ein Sammelbegriff für all die anderen Dinge, aus denen eine Website besteht, wie Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (für unser Beispiel ist das wie zum Geschäft gehen):

1. Geht der Browser zum DNS-Server und sucht die reale Adresse des Servers, auf dem die Website liegt (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anfrage-Nachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen Client und Server gesendeten Daten werden mit TCP/IP über Ihre Internetverbindung gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie," und beginnt, die Dateien der Website in Form einer Serie kleiner Datenpakete an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück zu Ihrem Haus).
4. Der Browser setzt die kleinen Pakete zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (die Waren kommen an Ihre Tür — neue glänzende Dinge, großartig!).

## Reihenfolge, in der Komponenten-Dateien geparst werden

Wenn Browser Anfragen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien oft {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn/CSS)-Stylesheets verweisen, und {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn/JavaScript)-Skripte verweisen. Es ist wichtig zu wissen, in welcher Reihenfolge diese Dateien vom Browser [geparst werden](/de/docs/Web/Performance/How_browsers_work#parsing), während der Browser die Seite lädt:

- Der Browser parst zuerst die HTML-Datei, was dazu führt, dass der Browser alle `<link>`-Element-Bezüge zu externen CSS-Stylesheets und alle `<script>`-Element-Bezüge zu Skripten erkennt.
- Während der Browser das HTML parst, sendet er Anfragen zurück an den Server für alle CSS-Dateien, die er aus `<link>`-Elementen gefunden hat, und alle JavaScript-Dateien, die er aus `<script>`-Elementen gefunden hat, und von diesen parst er dann das CSS und JavaScript.
- Der Browser erzeugt einen Speicher-internen [DOM](/de/docs/Web/API/Document_Object_Model)-Baum aus dem geparsten HTML, erzeugt eine Speicher-interne {{Glossary("CSSOM", "CSSOM")}}-Struktur aus dem geparsten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das geparste JavaScript aus.
- Während der Browser den DOM-Baum aufbaut und die Styles aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf den Bildschirm gezeichnet, und der Benutzer sieht den Seiteninhalt und kann anfangen, damit zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Es sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen einzigartigen Standort im Internet dar. Es ist jedoch nicht leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, um eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der realen (IP-)Adresse der Website zu verknüpfen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS Look-Up-Tool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir hier genau? Grundsätzlich werden Daten, die über das Internet gesendet werden, in Tausenden von kleinen Stücken verschickt. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Stücke zu ersetzen, wenn dies passiert. Zusätzlich können die Pakete auf unterschiedlichen Wegen geleitet werden, was den Austausch schneller macht und es ermöglicht, dass viele verschiedene Benutzer gleichzeitig dieselbe Website herunterladen können. Wenn jede Website als ein großes Stück gesendet würde, könnte nur ein Benutzer sie gleichzeitig herunterladen, was das Web sehr ineffizient und nicht sehr unterhaltsam machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)

## Credit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
