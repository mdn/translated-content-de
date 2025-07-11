---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Das moderne Web hat sich schnell zu einer praktikablen Plattform entwickelt, nicht nur um beeindruckende, hochwertige Spiele zu erstellen, sondern auch um diese Spiele zu verbreiten. Dieser Artikel stellt Ihnen die Vorteile der Nutzung des Webs als Spieleplattform vor und die Technologien, die dies ermöglichen.

Die Vielfalt der Spiele, die erstellt werden können, entspricht den Desktop- und nativen OS-Pendants. Mit modernen Webtechnologien und einem aktuellen Browser ist es durchaus möglich, beeindruckende, erstklassige Spiele für das Web zu entwickeln. Und wir sprechen nicht nur von einfachen Kartenspielen oder Multiplayer-Social-Games, die früher mit Flash® realisiert wurden. Wir sprechen von 3D-Action-Shootern, Rollenspielen (RPGs) und mehr. Dank enormer Leistungssteigerungen in der [JavaScript](/de/docs/Web/JavaScript) Just-in-Time-Compiler-Technologie und neuen APIs können Sie Spiele erstellen, die im Browser (oder auf {{Glossary("HTML5", "HTML5")}}-basierten Geräten) laufen, ohne Kompromisse einzugehen.

## Die HTML-Spielplattform

Sie können das Web wirklich als bessere Zielplattform für Ihr Spiel betrachten. Wie wir gerne sagen, "das Web ist die Plattform". Schauen wir uns den Kern der Webplattform an:

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
        >, Sensorsysteme, <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/de/docs/Web/API/Fullscreen_API">Fullscreen API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++, unter Verwendung von
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

## Der Geschäftszweck

Als Spieleentwickler, egal ob Einzelperson oder großes Spielestudio, möchten Sie wissen, warum es sinnvoll ist, das Web mit Ihrem nächsten Spieleprojekt ins Visier zu nehmen. Schauen wir uns an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Mit HTML entwickelte Spiele funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App in einem fremden App-Store zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web sowie in anderen Medien bewerben und die inhärente Verlinkbarkeit und Teilbarkeit des Webs nutzen, um neue Kunden zu erreichen.
3. Sie haben die Kontrolle, wo es wichtig ist: Zahlungen. Sie müssen nicht 30% Ihrer Einnahmen an jemand anderen abgeben, nur weil Ihr Spiel in dessen Ökosystem ist. Stattdessen erheben Sie die von Ihnen gewünschten Gebühren und nutzen jeden Zahlungsdienstleister, den Sie mögen.
4. Sie haben wiederum mehr Kontrolle und können Ihr Spiel aktualisieren, wann immer Sie wollen. Kein nervöses Warten auf die Genehmigung, während jemand im Verborgenen eines anderen Unternehmens entscheidet, ob Ihr kritischer Fehlerbehebungs-Update heute oder morgen veröffentlicht wird.
5. Kontrollieren Sie Ihre Analysen! Anstatt jemand anderem die Entscheidungen überlassen zu müssen, welche Analysen Sie benötigen, können Sie Ihre eigenen sammeln - oder den Drittanbieter wählen, den Sie am meisten schätzen - um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können Ihre Kundenbeziehung enger und auf Ihre Weise gestalten. Kein Kundenfeedback mehr, das durch die beschränkten Mechanismen eines App-Stores gefiltert wird. Engagieren Sie sich auf Ihre Weise mit Ihren Kunden, ohne einen Zwischenhändler.
7. Ihre Spieler können Ihr Spiel überall und jederzeit spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihren Telefonen, Tablets, ihren Laptops zu Hause, ihren Desktop-Computern bei der Arbeit oder sonst überall überprüfen.

## Webtechnologien für Spieleentwickler

Für die Technikinteressierten, tauchen wir in die APIs ein, die das Web für Spieleentwickler anbietet. Hier ist eine ausführliche Liste, die Ihnen einen Eindruck davon gibt, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und Empfangen jeder Art von Daten von einem Webserver, wie das Herunterladen neuer Spiellevels und -grafiken oder das Übertragen von nicht echtzeitbezogenen Spielstatusinformationen hin und her.
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
  - : Diese einfache API lässt Ihr Spiel den gesamten Bildschirm übernehmen und versetzt somit den Spieler in die Handlung.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Benutzer Gamepads oder andere Steuergeräte verwenden können, um Ihr Spiel zu steuern, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen ermöglichen Ihnen diese beiden Technologien, das Benutzerinterface Ihres Spiels zu erstellen, zu gestalten und zu layouten. Teil von HTML ist das {{HTMLElement("canvas")}}-Element, das eine Möglichkeit bietet, 2D-Grafiken zu erstellen.
- [HTML Audio](/de/docs/Web/HTML/Reference/Elements/audio)
  - : Das {{HTMLElement("audio")}}-Element erlaubt es Ihnen, einfach Soundeffekte und Musik abzuspielen. Wenn Ihre Anforderungen höher sind, schauen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) an, um echte Audiobearbeitungskraft zu erhalten!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Daten-Speicherung-API, um Benutzerdaten auf ihrem eigenen Computer oder Gerät zu speichern. Eine großartige Möglichkeit, Spielstände und andere Informationen lokal zu speichern, damit sie nicht jedes Mal heruntergeladen werden müssen, wenn sie benötigt werden. Auch nützlich, um Ihr Spiel spielbar zu halten, selbst wenn der Benutzer nicht mit dem Web verbunden ist (zum Beispiel, wenn er stundenlang im Flugzeug sitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die Programmiersprache des Webs, ist in modernen Browsern blitzschnell und wird immer schneller. Nutzen Sie seine Leistungsfähigkeit, um den Code für Ihr Spiel zu schreiben, oder sehen Sie sich Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/) an, um Ihre vorhandenen Spiele einfach zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API lässt Sie die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels sperren, sodass Sie anstatt absoluter Cursor-Positionierung Koordinatenabweichungen erhalten, die Ihnen genauere Messungen ermöglichen, was der Benutzer tut, und verhindern, dass der Benutzer versehentlich seinen Eingabebefehl woanders hinschickt und so wichtige Aktionen verpasst.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht Ihnen den Aufbau von Vektorgrafiken, die sich unabhängig von der Größe oder Auflösung des Benutzerdisplays nahtlos skalieren.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript Typed Arrays geben Ihnen Zugriff auf Rohdaten innerhalb von JavaScript; dies ermöglicht es Ihnen, GL-Texturen, Spieldaten oder alles andere zu manipulieren, selbst wenn es nicht im nativen JavaScript-Format vorliegt.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, grandiose Soundeffekte zu kreieren sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Ermöglicht Ihnen die Erstellung von Hochleistungs-3D- (und 2D-)Grafiken mit Hardwarebeschleunigung aus Webinhalten. Dies ist eine vom Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die WebRTC (Real-Time Communications)-API gibt Ihnen die Kontrolle über Audio- und Videodaten, einschließlich Telekonferenzen und der Übertragung anderer Anwendungsdaten zwischen zwei Benutzern. Möchten Sie, dass Ihre Spieler miteinander sprechen können, während sie Monster zerstören? Das ist die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket API ermöglicht es Ihnen, Ihre App oder Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Spielaktionen, Chatdienste und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Web Workers geben Ihnen die Möglichkeit, Hintergrundthreads zu erzeugen, die ihren eigenen JavaScript-Code ausführen, um die modernen, Mehrkern-Prozessoren auszunutzen.
