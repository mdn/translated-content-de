---
title: How the web works
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 34e4f9a1e1d492f79d5b87709539df9b571419cc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine Beschreibung dessen, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon anzeigen.

Diese Theorie ist kurzfristig nicht entscheidend für das Schreiben von Webcode, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>TCP/IP, HTTP und Pakete.</li>
          <li>HTTP-Syntax auf einem grundlegenden Niveau.</li>
          <li>Gängige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Bestandteile einer URL (Protokoll, Domain und Subdomain).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Beschriftung "request" geht vom Client zum Server, und ein Pfeil mit der Beschriftung "responses" geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte typischer Webnutzer (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbare Software zum Webzugriff (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Clientgerät auf eine Webseite zugreifen möchte, wird eine Kopie der Webseite vom Server auf den Client heruntergeladen, um sie im Webbrowser des Benutzers anzuzeigen.

## Die anderen Teile des Werkzeugs

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere beteiligte Teile, die wir im Folgenden beschreiben werden.

Stellen wir uns vor, das Web sei eine Straße. Am einen Ende der Straße ist der Client, der wie Ihr Haus ist. Am anderen Ende der Straße ist der Server, ein Geschäft, aus dem Sie etwas kaufen möchten.

![Ein Schwarz-Weiß-Foto einer Person, die an einem Zebrastreifen über eine Straße geht](road.jpg)

Zusätzlich zu Client und Server müssen wir auch folgende Begriffe kennenlernen:

- **Ihre Internetverbindung**: Ermöglicht es Ihnen, Daten im Web zu senden und zu empfangen. Sie ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet reisen sollten. Das ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, ins Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist das wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen).
- **DNS**: Das Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor er die Website abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website liegt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Das ist wie die Adresse des Geschäfts nachzuschlagen, damit Sie darauf zugreifen können.
- **HTTP**: Das Hypertext Transfer Protocol ist ein Anwendungs{{Glossary("Protocol", "protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponenten-Dateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie aus dem Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt, obwohl Sie später auf andere Technologien stoßen werden.
  - **Assets**: Dies ist ein Sammelbegriff für alle anderen Dinge, die eine Website ausmachen, wie Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert also genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (in unserem Beispiel ist das wie ins Geschäft zu gehen):

1. Der Browser geht zum DNS-Server und findet die reale Adresse des Servers, auf dem die Website gehostet wird (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anforderungsnachricht an den Server und bittet ihn, eine Kopie der Website an den Client zu senden (Sie gehen ins Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen zwischen dem Client und dem Server übertragenen Daten werden über Ihre Internetverbindung unter Verwendung von TCP/IP übertragen.
3. Wenn der Server die Anfrage des Clients genehmigt, sendet der Server eine "200 OK"-Nachricht an den Client, was bedeutet: "Natürlich können Sie sich diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe von kleinen Datenblöcken an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück zu Ihrem Haus).
4. Der Browser setzt die kleinen Datenblöcke zu einer kompletten Webseite zusammen und zeigt sie Ihnen an (die Waren kommen bei Ihnen an — neue glänzende Sachen, großartig!).

## Reihenfolge, in der Komponenten-Dateien analysiert werden

Wenn Browser Anfragen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien häufig {{htmlelement("link")}}-Elemente, die auf externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets sowie {{htmlelement("script")}}-Elemente verweisen, die externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Skripte referenzieren. Es ist wichtig zu wissen, in welcher Reihenfolge diese Dateien [vom Browser analysiert werden](/de/docs/Web/Performance/How_browsers_work#parsing), während der Browser die Seite lädt:

- Der Browser analysiert zuerst die HTML-Datei, was dazu führt, dass der Browser alle im `<link>`-Element referenzierten externen CSS-Stylesheets und alle im `<script>`-Element referenzierten Skripte erkennt.
- Während der Browser das HTML analysiert, sendet er Anfragen zurück an den Server für alle CSS-Dateien, die er in den `<link>`-Elementen gefunden hat, und alle JavaScript-Dateien, die er in den `<script>`-Elementen gefunden hat, und analysiert dann daraus das CSS und JavaScript.
- Der Browser generiert einen Speicher- [DOM](/de/docs/Web/API/Document_Object_Model)-Baum aus dem analysierten HTML, generiert eine Speicherstruktur für das {{Glossary("CSSOM", "CSSOM")}} aus dem analysierten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das analysierte JavaScript aus.
- Während der Browser den DOM-Baum erstellt, die Stile aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf den Bildschirm gezeichnet, und der Benutzer sieht den Seiteninhalt und kann beginnen, mit ihm zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebseiten zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Dies wird als {{Glossary("IP_Address", "IP-Adresse")}} bezeichnet und stellt einen eindeutigen Ort im Web dar. Allerdings ist es nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, um eine Webadresse, die Sie in Ihren Browser eingeben (wie "mozilla.org"), mit der echten (IP-)Adresse der Website abzugleichen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS-Lookup-Tool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen Client und Server übertragen werden. Was meinen wir hiermit? Grundsätzlich werden Daten beim Senden über das Web in Tausende von kleinen Stücken gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen gesendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Stücke zu ersetzen, wenn dies passiert. Außerdem können die Pakete auf verschiedenen Wegen geleitet werden, wodurch der Austausch schneller wird und es ermöglicht, dass viele verschiedene Benutzer gleichzeitig dieselbe Website herunterladen können. Wenn jede Website als ein großer Block gesendet würde, könnte immer nur ein Benutzer sie gleichzeitig herunterladen, was das Web offensichtlich sehr ineffizient und wenig unterhaltsam machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Quellenangabe

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
