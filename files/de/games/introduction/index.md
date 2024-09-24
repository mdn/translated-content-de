---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

Das moderne Web hat sich schnell zu einer tragfähigen Plattform entwickelt, nicht nur um beeindruckende, hochwertige Spiele zu erstellen, sondern auch um jene Spiele zu verbreiten.

Die Vielfalt der Spiele, die erstellt werden können, ist mit Desktop- und nativen Betriebssystem-Pendants vergleichbar. Mit modernen Webtechnologien und einem aktuellen Browser ist es möglich, beeindruckende, erstklassige Spiele für das Web zu entwickeln. Dabei geht es nicht nur um einfache Kartenspiele oder Mehrspieler-Socialgames, die früher mit Flash® umgesetzt wurden. Es handelt sich um 3D-Action-Shooter, RPGs und mehr. Dank massiver Leistungssteigerungen in der [JavaScript](/de/docs/Web/JavaScript) Just-in-Time-Compiler-Technologie und neuer APIs können Sie Spiele entwickeln, die im Browser (oder auf [HTML5](/de/docs/Glossary/HTML5)-fähigen Geräten) ohne Kompromisse laufen.

## Die HTML-Spielplattform

Sie können das Web tatsächlich als bessere Zielplattform für Ihr Spiel betrachten. Wie wir gerne sagen: "Das Web ist die Plattform." Lassen Sie uns einen Blick auf das Herzstück der Webplattform werfen:

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
        <a href="/de/docs/Web/API/Touch_events">Touch-Ereignisse</a>,
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
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> zu
        JavaScript kompiliert)
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

## Der Geschäftsvorteil

Als Spieleentwickler, egal ob Sie eine einzelne Person oder ein großes Spielestudio sind, möchten Sie wissen, warum es sinnvoll ist, das Web für Ihr nächstes Spielprojekt ins Visier zu nehmen. Schauen wir uns an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Spiele, die mit HTML entwickelt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App in einem fremden App-Store zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web sowie in anderen Medien werben und die inhärente Verlinkbarkeit und Teilbarkeit des Webs nutzen, um neue Kunden zu erreichen.
3. Sie haben die Kontrolle, wo es wichtig ist: Zahlungen. Sie müssen nicht 30 % Ihrer Einnahmen an jemand anderen abgeben, nur weil Ihr Spiel in deren Ökosystem ist. Stattdessen können Sie verlangen, was Sie möchten, und jeden Zahlungsdienstleister verwenden, den Sie bevorzugen.
4. Nochmals mit mehr Kontrolle können Sie Ihr Spiel aktualisieren, wann immer Sie möchten. Keine atemlose Warterei auf die Freigabe, während jemand innerhalb eines anderen Unternehmens entscheidet, ob Ihr kritischer Bugfix heute oder morgen veröffentlicht wird.
5. Kontrollieren Sie Ihre Analytik! Anstatt sich darauf zu verlassen, dass jemand anderes alle Entscheidungen darüber trifft, welche Analysen Sie benötigen, können Sie Ihre eigenen erheben – oder den Dritten auswählen, den Sie am besten finden –, um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können die Kundenbeziehung auf Ihre Weise enger verwalten. Kein Filtern von Kundenfeedbacks mehr durch die begrenzten Mechanismen eines App-Stores. Engagieren Sie sich mit Ihren Kunden auf Ihre Weise, ohne Zwischenhändler.
7. Ihre Spieler können Ihr Spiel überall und jederzeit spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihren Handys, Tablets, Laptops zu Hause, Arbeitsdesktops oder irgendetwas anderem überprüfen.

## Webtechnologien für Spieleentwickler

Für die Technikinteressierten, schauen wir uns die APIs an, die das Web speziell für Spieleentwickler bietet. Hier eine ausführliche Liste, um Ihnen einen Eindruck davon zu geben, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und empfangen Sie jede Art von Daten, die Sie von einem Webserver benötigen, wie das Herunterladen neuer Spielebenen und Grafiken oder das Übertragen von nicht in Echtzeit spielbezogenen Statusinformationen hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Diese einfache API ermöglicht es Ihrem Spiel, den gesamten Bildschirm zu übernehmen und den Spieler so in Aktion zu versetzen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Benutzer Gamepads oder andere Steuerungen verwenden können, um Ihr Spiel zu bedienen, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen ermöglichen Ihnen diese beiden Technologien, das Benutzerinterface Ihres Spiels zu bauen, zu gestalten und zu layouten. Teil von HTML ist das {{HTMLElement("canvas")}} Element, das eine Möglichkeit bietet, 2D-Grafiken zu erstellen.
- [HTML Audio](/de/docs/Web/HTML/Element/audio)
  - : Das {{HTMLElement("audio")}} Element ermöglicht es Ihnen, einfach einfache Soundeffekte und Musik abzuspielen. Wenn Ihre Bedürfnisse umfänglicher sind, schauen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für echte Audiobearbeitungskraft an!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Datenbank-API, um Benutzerdaten auf ihrem eigenen Computer oder Gerät zu speichern. Eine großartige Möglichkeit, den Spielstatus und andere Informationen lokal zu speichern, sodass sie nicht jedes Mal heruntergeladen werden müssen, wenn sie benötigt werden. Ebenfalls nützlich, um Ihr Spiel spielbar zu machen, auch wenn der Benutzer nicht mit dem Web verbunden ist (wie etwa, wenn er stundenlang in einem Flugzeug festsitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die auf dem Web genutzte Programmiersprache, ist in modernen Browsern sehr schnell und wird immer schneller. Nutzen Sie dessen Leistung, um den Code für Ihr Spiel zu schreiben, oder erwägen Sie Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/), um Ihre bestehenden Spiele einfach zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API ermöglicht es Ihnen, die Maus oder ein anderes Zeigegerät innerhalb der Oberfläche Ihres Spiels zu sperren, sodass Sie statt der absoluten Cursorpositionierung Koordinatenänderungen erhalten, die Ihnen genauere Messungen darüber geben, was der Benutzer tut, und verhindern, dass Benutzer ihre Eingaben unabsichtlich woanders hin senden und dadurch wichtige Aktion verpassen.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht Ihnen, Vektorgrafiken zu erstellen, die sich nahtlos skalieren, unabhängig von der Größe oder Auflösung des Displays des Benutzers.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript Typed Arrays geben Ihnen Zugriff auf rohe Binärdaten innerhalb von JavaScript; dies ermöglicht Ihnen die Manipulation von GL-Texturen, Spieldaten oder allem anderen, selbst wenn es nicht im nativen JavaScript-Format vorliegt.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, großartige Soundeffekte zu erzeugen sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Ermöglicht es Ihnen, hochleistungsfähige, hardwarebeschleunigte 3D- (und 2D-)Grafiken aus Webinhalten zu erstellen. Dies ist eine im Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die API für Echtzeitkommunikation (WebRTC) gibt Ihnen die Möglichkeit, Audio- und Videodaten zu steuern, einschließlich der Telekonferenz und der Übertragung anderer Anwendungsdaten zwischen zwei Benutzern hin und her. Möchten Sie, dass Ihre Spieler während des Monsterwütens miteinander sprechen können? Dies ist die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket API ermöglicht es Ihnen, Ihre App oder Ihre Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Gaming-Aktionen, Chat-Dienste und Ähnliches.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Web Workers geben Ihnen die Möglichkeit, Hintergrund-Threads mit eigenem JavaScript-Code zu starten, um die Vorteile moderner, mehrkerniger Prozessoren zu nutzen.
