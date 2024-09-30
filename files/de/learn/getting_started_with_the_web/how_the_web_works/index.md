---
title: Wie das Web funktioniert
slug: Learn/Getting_started_with_the_web/How_the_Web_works
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

_Wie das Web funktioniert_ bietet einen vereinfachten Überblick darüber, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon anzeigen.

Diese Theorie ist zunächst nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie davon profitieren, zu verstehen, was im Hintergrund geschieht.

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm ihrer Interaktion könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein mit "Anfrage" beschrifteter Pfeil geht vom Client zum Server, und ein mit "Antwort" beschrifteter Pfeil geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte typischer Webbenutzer (zum Beispiel Ihr mit Wi-Fi verbundenes Computer oder Ihr mit dem Mobilfunknetz verbundenes Telefon) und die auf diesen Geräten verfügbaren Webzugriffs-Software (in der Regel ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client-Gerät auf eine Webseite zugreifen möchte, wird eine Kopie der Webseite vom Server auf die Client-Maschine heruntergeladen und im Webbrowser des Benutzers angezeigt.

## Die anderen Teile des Werkzeugkastens

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere involvierte Teile, die wir unten beschreiben werden.

Stellen Sie sich vor, das Web ist eine Straße. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, der ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weißes Foto einer Person, die eine Straße an einem Zebrastreifen überquert](road.jpg)

Neben dem Client und dem Server müssen wir auch Folgendes begrüßen:

- **Ihre Internetverbindung**: Erlaubt Ihnen, Daten im Web zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Das ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen).
- **DNS**: Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor er die Website abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er die HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Das ist wie das Nachschlagen der Adresse des Geschäfts, damit Sie darauf zugreifen können.
- **HTTP**: Hypertext Transfer Protocol ist ein Anwendungs-[protokoll](/de/docs/Glossary/Protocol), das eine Sprache definiert, mit der Clients und Server miteinander sprechen. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponenten-Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie im Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript gebaut, obwohl Sie später auf andere Technologien stoßen werden.
  - **Assets**: Dies ist ein Sammelbegriff für all die anderen Dinge, die eine Website ausmachen, wie Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (für unser Beispiel ist das wie zum Geschäft zu gehen):

1. Der Browser geht zum DNS-Server und findet die reale Adresse des Servers, auf dem die Website lebt (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen dem Client und dem Server gesendet werden, werden über Ihre Internetverbindung mit TCP/IP gesendet.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, was bedeutet "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website in einer Reihe kleiner Pakete, die als Datenpakete bezeichnet werden, an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück zu Ihrem Haus).
4. Der Browser setzt die kleinen Pakete zu einer vollständigen Webseite zusammen und zeigt sie an (die Waren kommen vor Ihrer Tür an — neue glänzende Sachen, großartig!).

## Reihenfolge, in der Komponenten-Dateien geparst werden

Wenn Browser Anfragen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien häufig {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn/CSS)-Stile verweisen, und {{htmlelement("script")}}-Elemente, die auf externe [JavaScript](/de/docs/Learn/JavaScript)-Skripte verweisen. Es ist wichtig zu wissen, in welcher Reihenfolge diese Dateien [vom Browser geparst werden](/de/docs/Web/Performance/How_browsers_work#parsing), während der Browser die Seite lädt:

- Der Browser parst zuerst die HTML-Datei, was dazu führt, dass der Browser alle `<link>`-Element-Referenzen auf externe CSS-Stile und alle `<script>`-Element-Referenzen auf Skripte erkennt.
- Während der Browser das HTML parst, sendet er Anfragen zurück an den Server für alle CSS-Dateien, die es aus `<link>`-Elementen gefunden hat, und für alle JavaScript-Dateien, die es aus `<script>`-Elementen gefunden hat, und parst dann diese CSS und JavaScript.
- Der Browser generiert einen im Arbeitsspeicher befindlichen [DOM](/de/docs/Web/API/Document_Object_Model)-Baum aus dem geparsten HTML, generiert eine im Arbeitsspeicher befindliche [CSSOM](/de/docs/Glossary/CSSOM)-Struktur aus dem geparsten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das geparste JavaScript aus.
- Während der Browser den DOM-Baum erstellt, die Stile aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf den Bildschirm gemalt, und der Benutzer sieht den Seiteninhalt und kann beginnen, damit zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die netten, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als [IP-Adresse](/de/docs/Glossary/IP_Address) bezeichnet und repräsentiert einen eindeutigen Ort im Web. Doch das ist nicht sehr leicht zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abgleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier? Grundsätzlich werden Daten über das Web in Tausenden von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Stücke zu ersetzen, wenn dies passiert. Außerdem können die Pakete über verschiedene Wege weitergeleitet werden, wodurch der Austausch schneller wird und viele verschiedene Benutzer die gleiche Website gleichzeitig herunterladen können. Wenn jede Website als ein einziger großer Block gesendet würde, könnte nur ein Benutzer sie zu einem Zeitpunkt herunterladen, was das Web offensichtlich sehr ineffizient und nicht sehr angenehm zu nutzen machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)

## Kredit

Straßenfoto: [Straßenkomposition](https://www.pinterest.com/pin/400538960580676851/), von [kevin digga](https://www.pinterest.com/kevindigga/).

{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
