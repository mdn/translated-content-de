---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GamesSidebar}}

Das moderne Web hat sich schnell zu einer praktikablen Plattform entwickelt, nicht nur für die Erstellung beeindruckender, hochwertiger Spiele, sondern auch für deren Vertrieb.

Die Bandbreite der erstellbaren Spiele steht den Desktop- und nativen Betriebssystem-Pendants in nichts nach. Mit modernen Webtechnologien und einem aktuellen Browser ist es durchaus möglich, beeindruckende erstklassige Spiele für das Web zu entwickeln. Dabei sprechen wir nicht von einfachen Kartenspielen oder Multiplayer-Social-Games, die in früheren Zeiten mit Flash® realisiert wurden. Wir sprechen von 3D-Action-Shootern, RPGs und mehr. Dank enormer Leistungsverbesserungen in der Just-in-Time-Compiler-Technologie von [JavaScript](/de/docs/Web/JavaScript) und neuen APIs können Sie Spiele entwickeln, die im Browser (oder auf von {{Glossary("HTML5", "HTML5")}} unterstützten Geräten) laufen, ohne Kompromisse einzugehen.

## Die HTML-Spieleplattform

Sie können das Web wirklich als besser geeignete Zielplattform für Ihr Spiel betrachten. Wie wir gerne sagen, "das Web ist die Plattform". Schauen wir uns den Kern der Webplattform an:

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
        <a href="/de/docs/Web/API/Touch_events">Touch Events</a>,
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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ mithilfe von
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zu
        JavaScript kompilieren)
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
        <a href="/de/docs/Web/API/IndexedDB_API">IndexedDB</a> oder die "Cloud"
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

## Das Geschäftsargument

Als Spieleentwickler, egal ob Sie Einzelperson oder ein großes Entwicklerstudio sind, möchten Sie wissen, warum es sinnvoll ist, das Web als Zielplattform für Ihr nächstes Spielprojekt zu wählen. Schauen Sie sich an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App auf dem App-Store eines Dritten zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web sowie in anderen Medien bewerben und den inhärenten Linkfähigkeiten und der Teilbarkeit des Webs nutzen, um neue Kunden zu erreichen.
3. Sie haben die Kontrolle, wo es darauf ankommt: Zahlungen. Sie müssen keine 30 % Ihrer Einnahmen abgeben, nur weil Ihr Spiel in der Plattform eines anderen ist. Stattdessen können Sie verlangen, was Sie möchten, und jeden Zahlungsabwicklungsdienst verwenden, den Sie bevorzugen.
4. Mit mehr Kontrolle können Sie Ihr Spiel aktualisieren, wann immer Sie möchten. Kein banges Warten auf die Genehmigung, während jemand versteckt in einem anderen Unternehmen entscheidet, ob Ihr kritischer Fehlerbehebungspatch heute oder morgen veröffentlicht wird.
5. Kontrollieren Sie Ihre Analysen! Anstatt sich auf jemand anderen zu verlassen, der alle Entscheidungen darüber trifft, welche Analysen Sie benötigen, können Sie Ihre eigenen sammeln — oder den Dritten auswählen, den Sie am besten finden —, um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können Ihre Kundenbeziehungen enger in Ihrer eigenen Art verwalten. Kein gefiltertes Kundenfeedback mehr durch die eingeschränkten Mechanismen eines App-Stores. Pflegen Sie den Kontakt mit Ihren Kunden auf die Weise, die Sie möchten, ohne einen Mittelsmann.
7. Ihre Spieler können Ihr Spiel jederzeit und überall spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihren Telefonen, Tablets, ihren Laptops zu Hause, ihren Arbeitsplatz-Desktops oder auf jedem anderen Gerät abrufen.

## Webtechnologien für Spieleentwickler

Für die Technikbegeisterten unter Ihnen, lassen Sie uns in die APIs eintauchen, die das Web für Spieleentwickler bereitstellt. Hier ist eine umfassende Liste, die Ihnen einen Vorgeschmack darauf gibt, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und Empfangen beliebiger Daten von einem Webserver wie das Herunterladen neuer Spiellevels und Grafiken sowie das Übermitteln von nicht in Echtzeit aktualisierten Spielstatusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Mit dieser einfachen API kann Ihr Spiel den gesamten Bildschirm einnehmen und so den Spieler in das Geschehen eintauchen lassen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Nutzer Gamepads oder andere Spielcontroller verwenden können, um Ihr Spiel zu steuern, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen ermöglichen Ihnen diese beiden Technologien den Aufbau, das Styling und das Layout der Benutzeroberfläche Ihres Spiels. Ein Teil von HTML ist das {{HTMLElement("canvas")}}-Element, das eine Möglichkeit bietet, 2D-Grafik zu erstellen.
- [HTML audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Das {{HTMLElement("audio")}}-Element ermöglicht es Ihnen, einfach einfache Soundeffekte und Musik abzuspielen. Wenn Ihre Anforderungen umfangreicher sind, sehen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für echte Audiobearbeitungskraft an!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Datenspeicher-API zur Verwaltung von Benutzerdaten auf deren eigenem Computer oder Gerät. Eine großartige Möglichkeit, den Spielstand und andere Informationen lokal zu speichern, sodass sie nicht jedes Mal heruntergeladen werden müssen, wenn sie benötigt werden. Auch nützlich, um Ihr Spiel spielbar zu machen, selbst wenn der Benutzer nicht mit dem Web verbunden ist (wie zum Beispiel, wenn er für Stunden im Flugzeug festsitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die Programmiersprache des Webs, ist in modernen Browsern blitzschnell und wird ständig schneller. Nutzen Sie seine Leistungsfähigkeit, um den Code für Ihr Spiel zu schreiben, oder schauen Sie sich Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/) an, um Ihre vorhandenen Spiele leicht zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API ermöglicht es Ihnen, die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels zu sperren, sodass Sie anstatt absolute Cursorpositionierungen zu erhalten, Koordinatenänderungen erhalten, die Ihnen genauere Messungen darüber liefern, was der Benutzer tut. Dies verhindert zudem, dass der Benutzer seine Eingaben versehentlich woanders hin sendet und dadurch wichtige Aktionen verpasst.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erlaubt es Ihnen, Vektorgrafiken zu erstellen, die unabhängig von der Größe oder Auflösung der Anzeige des Benutzers sanft skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript-typisierte Arrays geben Ihnen Zugriff auf Roh-Binärdaten von innerhalb von JavaScript; das erlaubt es Ihnen, GL-Texturen, Spieldaten oder alles andere zu manipulieren, auch wenn es nicht im nativen JavaScript-Format ist.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, großartige Soundeffekte zu erstellen sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Erlaubt es Ihnen, hochperformante, hardwarebeschleunigte 3D- (und 2D-) Grafik aus Web-Inhalten zu erstellen. Dies ist eine vom Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die WebRTC (Real-Time Communications) API gibt Ihnen die Möglichkeit, Audio- und Videodaten zu steuern, einschließlich Videokonferenzen und der Übertragung anderer Anwendungsdaten zwischen zwei Benutzern. Möchten Sie, dass Ihre Spieler miteinander sprechen können, während sie Monster zerbomben? Das ist die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket-API erlaubt es Ihnen, Ihre App oder Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Mehrspieler-Gameplay, Chatdienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Arbeiter geben Ihnen die Möglichkeit, Hintergrundthreads zu erzeugen, die ihren eigenen JavaScript-Code ausführen, um die Vorteile moderner Mehrkernprozessoren zu nutzen.
