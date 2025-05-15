---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{GamesSidebar}}

Das moderne Web hat sich schnell zu einer tragfähigen Plattform entwickelt, nicht nur für die Erstellung atemberaubender, hochwertiger Spiele, sondern auch für deren Verbreitung. Dieser Artikel stellt Ihnen die Vorteile der Nutzung des Webs als Spieleplattform vor und die Technologien, die dies ermöglichen.

Das Spektrum der Spiele, die erstellt werden können, steht den Desktop- und nativen Betriebssystem-Pendants in nichts nach. Mit modernen Webtechnologien und einem aktuellen Browser ist es durchaus möglich, beeindruckende, hochklassige Spiele für das Web zu entwickeln. Und wir sprechen nicht von einfachen Kartenspielen oder Multiplayer-Social-Games, die in der Vergangenheit mit Flash® realisiert wurden. Es geht um 3D-Action-Shooter, Rollenspiele und mehr. Dank massiver Leistungsverbesserungen in der [JavaScript](/de/docs/Web/JavaScript) Just-in-Time-Compiler-Technologie und neuen APIs können Sie Spiele entwickeln, die im Browser (oder auf {{Glossary("HTML5", "HTML5")}}-basierten Geräten) laufen, ohne Kompromisse einzugehen.

## Die HTML-Spieleplattform

Sie können das Web wirklich als eine hervorragende Zielplattform für Ihr Spiel betrachten. Wie wir gerne sagen: "Das Web ist die Plattform." Werfen wir einen Blick auf den Kern der Webplattform:

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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ mit
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zur
        Kompilierung in JavaScript)
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

## Der Geschäftszweck

Als Spieleentwickler, ob als Einzelperson oder großes Spielestudio, möchten Sie wissen, warum es sinnvoll ist, das Web für Ihr nächstes Spieleprojekt zu nutzen. Sehen wir uns an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App in einem fremden App Store zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web sowie in anderen Medien bewerben, indem Sie die inhärenten Verlinkungs- und Teilbarkeitsmöglichkeiten des Webs nutzen, um neue Kunden zu erreichen.
3. Sie haben Kontrolle, wo es zählt: Zahlungen. Sie müssen nicht 30 % Ihrer Einnahmen an jemand anderen abgeben, nur weil Ihr Spiel in deren Ökosystem ist. Stattdessen können Sie den Preis festlegen, den Sie möchten, und den Zahlungsdienstleister wählen, den Sie bevorzugen.
4. Noch mehr Kontrolle: Sie können Ihr Spiel aktualisieren, wann immer Sie möchten. Kein atemloses Warten auf Genehmigung, während jemand in einem anderen Unternehmen entscheidet, ob Ihr kritischer Fehlerbehebungspatch heute oder morgen veröffentlicht wird.
5. Kontrollieren Sie Ihre Analysen! Anstatt sich darauf zu verlassen, dass jemand anderes alle Entscheidungen über die benötigten Analysen trifft, können Sie Ihre eigenen sammeln — oder einen Drittanbieter wählen, der Ihnen am besten gefällt — um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können Ihre Kundenbeziehungen selbst enger steuern. Kein Filter mehr durch die begrenzten Mechanismen eines App Stores. Engagieren Sie sich mit Ihren Kunden so, wie Sie es möchten, ohne einen Mittelsmann.
7. Ihre Spieler können Ihr Spiel überall und jederzeit spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihrem Handy, Tablet, Laptop zu Hause, Desktop bei der Arbeit oder jedem anderen Gerät überprüfen.

## Webtechnologien für Spieleentwickler

Für die Technikbegeisterten möchten wir einen genauen Blick auf die APIs werfen, die das Web den Spieleentwicklern bietet. Hier ist eine umfassende Liste, um Ihnen einen Vorgeschmack darauf zu geben, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und Empfangen jeglicher Art von Daten, die Sie von einem Webserver möchten, wie z.B. das Herunterladen neuer Spielebenen und Grafiken oder das Übermitteln von nicht-echtzeitlicher Spielstatusinformation hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Diese einfache API ermöglicht es Ihrem Spiel, den gesamten Bildschirm zu übernehmen und den Spieler so in das Geschehen eintauchen zu lassen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Benutzer Gamepads oder andere Spiel-Controller für Ihr Spiel verwenden können, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen ermöglichen Ihnen diese beiden Technologien den Aufbau, das Styling und das Layout der Benutzeroberfläche Ihres Spiels. Ein Teil von HTML ist das {{HTMLElement("canvas")}}-Element, das eine Möglichkeit bietet, 2D-Grafiken zu erstellen.
- [HTML audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Das {{HTMLElement("audio")}}-Element ermöglicht es Ihnen, einfach Soundeffekte und Musik abzuspielen. Wenn Ihre Anforderungen umfangreicher sind, sehen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für echte Audioverarbeitungs-Power an!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Datenspeicher-API zur Pflege von Benutzerdaten auf ihrem eigenen Computer oder Gerät. Eine großartige Möglichkeit, den Spielstand und andere Informationen lokal zu speichern, sodass sie nicht jedes Mal heruntergeladen werden müssen, wenn sie benötigt werden. Auch nützlich, um Ihr Spiel auch dann spielbar zu machen, wenn der Benutzer nicht mit dem Web verbunden ist (z. B. wenn er stundenlang im Flugzeug sitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die Programmiersprache, die im Web verwendet wird, ist in modernen Browsern blitzschnell und wird ständig schneller. Nutzen Sie seine Power, um den Code für Ihr Spiel zu schreiben, oder schauen Sie sich Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/) an, um Ihre vorhandenen Spiele einfach zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API ermöglicht es Ihnen, die Maus oder ein anderes Zeigegerät in die Benutzeroberfläche Ihres Spiels zu sperren, sodass Sie statt absoluter Cursorpositionen Koordinaten-Delta erhalten, die Ihnen genauere Messungen darüber geben, was der Benutzer tut, und verhindern, dass der Benutzer versehentlich seine Eingabe woandershin sendet, wodurch wichtige Aktionen verpasst werden.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht den Aufbau von Vektorgrafiken, die unabhängig von der Größe oder Auflösung des Displays des Benutzers reibungslos skalieren.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript-typisierte Arrays geben Ihnen Zugriff auf rohe Binärdaten aus JavaScript heraus; dies ermöglicht Ihnen die Manipulation von GL-Texturen, Spieledaten oder allem anderen, auch wenn sie nicht im nativen JavaScript-Format vorliegen.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, großartige Soundeffekte zu erstellen sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Ermöglicht die Erstellung von hochleistungsfähigen, hardwarebeschleunigten 3D- (und 2D-)Grafiken aus Web-Inhalten. Dies ist eine webgestützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die WebRTC (Real-Time Communications) API gibt Ihnen die Möglichkeit, Audio- und Videodaten zu steuern, einschließlich Tele-Konferenzen und der Übertragung anderer Anwendungsdaten hin und her zwischen zwei Benutzern. Möchten Sie, dass Ihre Spieler miteinander sprechen können, während sie Monster in die Luft jagen? Dann ist dies die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket-API ermöglicht es Ihnen, Ihre App oder Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Spielaktionen, Chat-Dienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Arbeiter geben Ihnen die Möglichkeit, Hintergrund-Threads zu erstellen, die ihren eigenen JavaScript-Code ausführen, um die Vorteile moderner, mehrkerniger Prozessoren zu nutzen.
