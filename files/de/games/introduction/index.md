---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Das moderne Web hat sich schnell zu einer geeigneten Plattform entwickelt – nicht nur für die Entwicklung beeindruckender, hochwertiger Spiele, sondern auch für deren Verbreitung. Dieser Artikel stellt Ihnen die Vorteile des Webs als Spieleplattform und die Technologien vor, die dies ermöglichen.

Die Bandbreite der Spiele, die sich für das Web entwickeln lassen, steht der von Desktop- und nativen Betriebssystemplattformen in nichts nach. Mit modernen Webtechnologien und einem aktuellen Browser lassen sich beeindruckende, erstklassige Spiele für das Web entwickeln. Dabei geht es nicht um einfache Kartenspiele oder soziale Multiplayer-Spiele, wie sie früher mit Flash® umgesetzt wurden. Es geht um 3D-Action-Shooter, Rollenspiele und mehr. Dank erheblicher Leistungssteigerungen bei der Just-in-Time-Kompilierung von [JavaScript](/de/docs/Web/JavaScript) und neuer APIs können Sie Spiele entwickeln, die im Browser oder auf Geräten mit {{Glossary("HTML5", "HTML5")}} laufen, ohne Kompromisse eingehen zu müssen.

## HTML als Spieleplattform

Sie können das Web als eine bessere Zielplattform für Ihr Spiel betrachten. Wie wir gern sagen: „Das Web ist die Plattform.“ Sehen wir uns die Kernbestandteile der Webplattform an:

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col">Funktion</th>
      <th scope="col">Technologie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/de/docs/Web/API/Web_Audio_API">Web Audio API</a></td>
    </tr>
    <tr>
      <td><strong>Grafik</strong></td>
      <td>
        <a href="/de/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Eingabe</strong></td>
      <td>
        <a href="/de/docs/Web/API/Touch_events">Touch-Events</a>,
        <a href="/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >, Gerätesensoren, <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/de/docs/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++, das mit
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zu
        JavaScript kompiliert wird)
      </td>
    </tr>
    <tr>
      <td><strong>Netzwerk</strong></td>
      <td>
        <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a> und/oder
        <a href="/de/docs/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>Speicherung</strong></td>
      <td>
        <a href="/de/docs/Web/API/IndexedDB_API">IndexedDB</a> oder die „Cloud“
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/de/docs/Web/HTML">HTML</a>,
        <a href="/de/docs/Web/CSS">CSS</a>,
        <a href="/de/docs/Web/SVG">SVG</a> (und vieles mehr!)
      </td>
    </tr>
  </tbody>
</table>

## Die geschäftlichen Vorteile

Ob Sie als Einzelperson oder für ein großes Spielestudio entwickeln: Sie möchten wissen, warum es sinnvoll ist, Ihr nächstes Spielprojekt auf das Web auszurichten. Sehen wir uns an, wie das Web Ihnen dabei helfen kann.

1. Die Reichweite des Webs ist enorm: Es ist überall. Mit HTML entwickelte Spiele laufen auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App im App-Store eines anderen Anbieters zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web und über andere Medien vermarkten. Dabei profitieren Sie davon, dass sich Webinhalte leicht verlinken und teilen lassen, um neue Kunden zu erreichen.
3. Sie behalten dort die Kontrolle, wo es darauf ankommt: bei Zahlungen. Sie müssen nicht 30 % Ihrer Einnahmen abgeben, nur weil sich Ihr Spiel im Ökosystem eines anderen Anbieters befindet. Stattdessen bestimmen Sie Ihren Preis selbst und nutzen einen Zahlungsdienst Ihrer Wahl.
4. Sie können Ihr Spiel jederzeit aktualisieren. Sie müssen nicht auf eine Freigabe warten, während jemand in einem anderen Unternehmen entscheidet, ob Ihre wichtige Fehlerbehebung heute oder morgen veröffentlicht wird.
5. Sie bestimmen selbst über Ihre Analysen. Statt sich darauf zu verlassen, dass jemand anderes festlegt, welche Analysen Sie benötigen, können Sie eigene Daten erheben oder einen Drittanbieter Ihrer Wahl nutzen, um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können die Beziehung zu Ihren Kunden auf Ihre Weise direkter gestalten. Kundenfeedback muss nicht mehr durch die begrenzten Möglichkeiten eines App-Stores gefiltert werden. Treten Sie ohne Vermittler so mit Ihren Kunden in Kontakt, wie Sie es möchten.
7. Ihre Spieler können Ihr Spiel jederzeit und überall spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf dem Smartphone, Tablet, privaten Laptop, Arbeitsrechner oder einem anderen Gerät prüfen.

## Webtechnologien für Spieleentwickler

Sehen wir uns die APIs an, die das Web für die Spieleentwicklung bietet. Die folgende ausführliche Liste vermittelt Ihnen einen Eindruck davon, was Sie mit dem Web umsetzen können:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und empfangen Sie beliebige Daten über einen Webserver – vom Herunterladen neuer Spiellevel und Grafiken bis zum Austausch von Spielstatusinformationen, die nicht in Echtzeit übertragen werden müssen.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Mit dieser einfachen API kann Ihr Spiel den gesamten Bildschirm einnehmen und die Spieler so noch stärker ins Geschehen eintauchen lassen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Ihre Nutzer Ihr Spiel mit Gamepads oder anderen Spielcontrollern steuern können sollen, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Mit diesen beiden Technologien können Sie die Benutzeroberfläche Ihres Spiels erstellen, gestalten und anordnen. Zu HTML gehört das Element {{HTMLElement("canvas")}}, das eine Möglichkeit zum Erstellen von 2D-Grafiken bietet.
- [HTML-Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Mit dem Element {{HTMLElement("audio")}} können Sie einfache Soundeffekte und Musik abspielen. Für anspruchsvollere Anforderungen an die Audioverarbeitung sehen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) an.
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsfähige API zum Speichern von Nutzerdaten auf dem eigenen Computer oder Gerät. Damit können Sie Spielstände und andere Informationen lokal speichern, sodass sie nicht bei jeder Verwendung erneut heruntergeladen werden müssen. Das hilft auch dabei, Ihr Spiel ohne Internetverbindung spielbar zu machen – etwa während eines langen Flugs.
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die Programmiersprache des Webs, ist in modernen Browsern sehr schnell und wird kontinuierlich schneller. Nutzen Sie JavaScript, um den Code für Ihr Spiel zu schreiben, oder sehen Sie sich Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](https://en.wikipedia.org/wiki/Asm.js) an, mit denen Sie bestehende Spiele leichter portieren können.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Mit der Pointer Lock API können Sie die Maus oder ein anderes Zeigegerät an die Oberfläche Ihres Spiels binden. Statt einer absoluten Cursorposition erhalten Sie Änderungen der Koordinaten. So können Sie die Eingaben der Nutzer präziser erfassen und verhindern, dass Eingaben versehentlich an anderer Stelle erfolgen und dadurch wichtige Aktionen verpasst werden.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Damit können Sie Vektorgrafiken erstellen, die unabhängig von Größe und Auflösung des Bildschirms gleichmäßig skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Typed Arrays ermöglichen Ihnen den Zugriff auf binäre Rohdaten aus JavaScript heraus. So können Sie GL-Texturen, Spieldaten und andere Daten bearbeiten, auch wenn sie nicht in einem nativen JavaScript-Format vorliegen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Mit dieser API können Sie die Wiedergabe, Synthese und Verarbeitung von Audio über JavaScript-Code steuern, eindrucksvolle Soundeffekte erzeugen sowie Musik in Echtzeit abspielen und bearbeiten.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Damit können Sie leistungsfähige, hardwarebeschleunigte 3D- und 2D-Grafiken für Webinhalte erstellen. WebGL ist eine vom Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Mit der WebRTC API (Real-Time Communications) können Sie Audio- und Videodaten steuern, Videokonferenzen ermöglichen und andere Anwendungsdaten zwischen zwei Nutzern austauschen. Sollen Ihre Spieler miteinander sprechen können, während sie Monster bekämpfen? Dann ist diese API die richtige Wahl.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Mit der WebSocket API können Sie Ihre App oder Website mit einem Server verbinden und Daten in Echtzeit austauschen. Das eignet sich besonders für Multiplayer-Spiele, Chatdienste und Ähnliches.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Mit Workers können Sie Hintergrund-Threads starten, die eigenen JavaScript-Code ausführen, und so moderne Mehrkernprozessoren nutzen.
