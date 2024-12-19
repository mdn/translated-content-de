---
title: Wie das Web funktioniert
slug: Learn_web_development/Getting_started/Web_standards/How_the_web_works
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_Web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}

_Wie das Web funktioniert_ bietet eine vereinfachte Ansicht darüber, was passiert, wenn Sie eine Webseite in einem Webbrowser auf Ihrem Computer oder Telefon anzeigen.

Diese Theorie ist kurzfristig nicht entscheidend, um Webcode zu schreiben, aber schon bald werden Sie wirklich davon profitieren, zu verstehen, was im Hintergrund passiert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Clients und Server und ihre Rollen im Web.</li>
          <li>DNS und wie es auf hoher Ebene funktioniert.</li>
          <li>TCP/IP, HTTP und Pakete.</li>
          <li>HTTP-Syntax auf einfachem Niveau.</li>
          <li>Gängige HTTP-Antwortcodes (z. B. 200, 301, 403, 404 und 500).</li>
          <li>Komponenten einer URL (Protokoll, Domain und Subdomain).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Clients und Server

Computer, die mit dem Internet verbunden sind, werden als **Clients** und **Server** bezeichnet. Ein vereinfachtes Diagramm, wie sie interagieren, könnte so aussehen:

![Zwei Kreise, die Client und Server darstellen. Ein Pfeil mit der Aufschrift "Request" geht vom Client zum Server, und ein Pfeil mit der Aufschrift "Responses" geht vom Server zum Client](simple-client-server.png)

- Clients sind die internetfähigen Geräte des typischen Webnutzers (zum Beispiel Ihr Computer, der mit Ihrem WLAN verbunden ist, oder Ihr Telefon, das mit Ihrem Mobilfunknetz verbunden ist) und die auf diesen Geräten verfügbaren webzugreifenden Software (normalerweise ein Webbrowser wie Firefox oder Chrome).
- Server sind Computer, die Webseiten, Websites oder Apps speichern. Wenn ein Client-Gerät auf eine Webseite zugreifen möchte, wird eine Kopie der Webseite vom Server auf das Client-Gerät heruntergeladen, um im Webbrowser des Benutzers angezeigt zu werden.

## Die anderen Teile der Werkzeugkiste

Der oben beschriebene Client und Server erzählen nicht die ganze Geschichte. Es gibt viele andere Teile, die beteiligt sind, und wir werden sie unten beschreiben.

Stellen Sie sich für den Moment vor, dass das Web eine Straße ist. Am einen Ende der Straße befindet sich der Client, der wie Ihr Haus ist. Am anderen Ende der Straße befindet sich der Server, der ein Geschäft ist, in dem Sie etwas kaufen möchten.

![Ein schwarz-weiß Foto einer Person, die an einem Zebrastreifen eine Straße überquert](road.jpg)

Zusätzlich zu Client und Server müssen wir auch Hallo sagen zu:

- **Ihrer Internetverbindung**: Ermöglicht es Ihnen, Daten im Web zu senden und zu empfangen. Es ist im Grunde wie die Straße zwischen Ihrem Haus und dem Geschäft.
- **TCP/IP**: Transmission Control Protocol und Internet Protocol sind Kommunikationsprotokolle, die definieren, wie Daten über das Internet übertragen werden sollen. Dies ist wie die Transportmechanismen, die es Ihnen ermöglichen, eine Bestellung aufzugeben, zum Geschäft zu gehen und Ihre Waren zu kaufen. In unserem Beispiel ist dies wie ein Auto oder ein Fahrrad (oder wie auch immer Sie sich fortbewegen mögen).
- **DNS**: Domain Name System ist wie ein Adressbuch für Websites. Wenn Sie eine Webadresse in Ihren Browser eingeben, schaut der Browser im DNS nach, um die IP-Adresse der Website zu finden, bevor er die Website abrufen kann. Der Browser muss herausfinden, auf welchem Server die Website lebt, damit er HTTP-Nachrichten an den richtigen Ort senden kann (siehe unten). Das ist wie das Nachschlagen der Adresse des Geschäfts, sodass Sie darauf zugreifen können.
- **HTTP**: Hypertext Transfer Protocol ist ein Anwendungs-{{Glossary("Protocol", "Protokoll")}}, das eine Sprache definiert, mit der Clients und Server miteinander sprechen können. Das ist wie die Sprache, die Sie verwenden, um Ihre Waren zu bestellen.
- **Komponentendateien**: Eine Website besteht aus vielen verschiedenen Dateien, die wie die verschiedenen Teile der Waren sind, die Sie aus dem Geschäft kaufen. Diese Dateien kommen in zwei Haupttypen:

  - **Code-Dateien**: Websites werden hauptsächlich aus HTML, CSS und JavaScript erstellt, obwohl Sie später auf andere Technologien stoßen werden.
  - **Assets**: Dies ist ein Sammelbegriff für all die anderen Dinge, die eine Website ausmachen, wie Bilder, Musik, Videos, Word-Dokumente und PDFs.

## Was passiert also genau?

Wenn Sie eine Webadresse in Ihren Browser eingeben (in unserem Beispiel, das ist wie der Gang zum Geschäft):

1. Der Browser geht zum DNS-Server und findet die echte Adresse des Servers, auf dem die Website lebt (Sie finden die Adresse des Geschäfts).
2. Der Browser sendet eine HTTP-Anfrage an den Server und fragt ihn, ob er eine Kopie der Website an den Client senden kann (Sie gehen zum Geschäft und bestellen Ihre Waren). Diese Nachricht und alle anderen Daten, die zwischen Client und Server gesendet werden, werden über Ihre Internetverbindung mithilfe von TCP/IP übertragen.
3. Wenn der Server die Anforderung des Clients genehmigt, sendet der Server dem Client eine "200 OK"-Nachricht, die bedeutet: "Natürlich können Sie diese Website ansehen! Hier ist sie", und beginnt dann, die Dateien der Website als eine Reihe von kleinen Paketen an den Browser zu senden (das Geschäft gibt Ihnen Ihre Waren, und Sie bringen sie zurück in Ihr Haus).
4. Der Browser setzt die kleinen Stücke zu einer vollständigen Webseite zusammen und zeigt sie Ihnen an (die Waren kommen an Ihrer Tür an - neues glänzendes Zeug, großartig!).

## Reihenfolge, in der Komponentendateien geparst werden

Wenn Browser Anforderungen an Server für HTML-Dateien senden, enthalten diese HTML-Dateien häufig `{{htmlelement("link")}}`-Elemente, die auf externe [CSS](/de/docs/Learn_web_development/Core/Styling_basics)-Stylesheets und `{{htmlelement("script")}}`-Elemente verweisen, die auf externe [JavaScript](/de/docs/Learn_web_development/Core/Scripting)-Skripte verweisen. Es ist wichtig, die Reihenfolge zu kennen, in der diese Dateien beim Laden der Seite [vom Browser geparst werden](/de/docs/Web/Performance/How_browsers_work#parsing):

- Der Browser parst zuerst die HTML-Datei, was dazu führt, dass der Browser alle `<link>`-Element-Referenzen zu externen CSS-Stylesheets und alle `<script>`-Element-Referenzen zu Skripten erkennt.
- Während der Browser das HTML parst, sendet er Anforderungen an den Server für alle CSS-Dateien, die er aus den `<link>`-Elementen gefunden hat, und alle JavaScript-Dateien, die er aus den `<script>`-Elementen gefunden hat, und parst daraus anschließend das CSS und JavaScript.
- Der Browser generiert aus dem geparsten HTML einen im Arbeitsspeicher befindlichen [DOM](/de/docs/Web/API/Document_Object_Model)-Baum, erstellt eine im Arbeitsspeicher befindliche {{Glossary("CSSOM", "CSSOM")}}-Struktur aus dem geparsten CSS und [kompiliert und führt](/de/docs/Web/Performance/How_browsers_work#javascript_compilation) das geparste JavaScript aus.
- Während der Browser den DOM-Baum aufbaut und die Stile aus dem CSSOM-Baum anwendet und das JavaScript ausführt, wird eine visuelle Darstellung der Seite auf den Bildschirm gemalt, und der Benutzer sieht den Seiteninhalt und kann anfangen, mit ihm zu interagieren.

## DNS erklärt

Echte Webadressen sind nicht die schönen, einprägsamen Zeichenfolgen, die Sie in Ihre Adressleiste eingeben, um Ihre Lieblingswebsites zu finden. Sie sind spezielle Zahlen, die so aussehen: `192.0.2.172`.

Das nennt man eine {{Glossary("IP_Address", "IP-Adresse")}}, und sie repräsentiert einen einzigartigen Ort im Web. Es ist jedoch nicht sehr einfach zu merken, oder? Deshalb wurde das Domain Name System erfunden. Dieses System verwendet spezielle Server, die eine von Ihnen in den Browser eingegebene Webadresse (wie "mozilla.org") mit der echten (IP-) Adresse der Website verknüpfen.

Websites können direkt über ihre IP-Adressen erreicht werden. Sie können ein [DNS-Abfragetool](https://www.nslookup.io/website-to-ip-lookup/) verwenden, um die IP-Adresse einer Website zu finden.

## Pakete erklärt

Früher haben wir den Begriff "Pakete" verwendet, um das Format zu beschreiben, in dem die Daten zwischen dem Client und dem Server übertragen werden. Was meinen wir hier? Im Grunde genommen wird, wenn Daten über das Web gesendet werden, diese in Tausenden kleiner Stücke gesendet. Es gibt mehrere Gründe, warum Daten in kleinen Paketen versendet werden. Sie gehen manchmal verloren oder werden beschädigt, und es ist einfacher, kleine Stücke zu ersetzen, wenn dies passiert. Außerdem können die Pakete auf unterschiedlichen Wegen geleitet werden, was den Austausch schneller macht und vielen verschiedenen Benutzern erlaubt, gleichzeitig dieselbe Website herunterzuladen. Wenn jede Website als ein einziger großer Block gesendet würde, könnte sie nur von einem Benutzer zur gleichen Zeit heruntergeladen werden, was das Web offensichtlich sehr ineffizient und nicht sehr unterhaltsam zu nutzen machen würde.

## Siehe auch

- [Wie das Internet funktioniert](/de/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Credit

Straßenfoto: [Street composing](https://www.pinterest.com/pin/400538960580676851/), von [Kevin Digga](https://www.pinterest.com/kevindigga/).

{{NextMenu("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Web_standards")}}
