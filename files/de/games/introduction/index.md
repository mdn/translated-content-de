---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

Das moderne Web ist schnell zu einer tragfähigen Plattform geworden, nicht nur um atemberaubende, hochwertige Spiele zu erstellen, sondern auch um diese Spiele zu verbreiten.

Die Bandbreite der erstellbaren Spiele ist vergleichbar mit Desktop- und nativen OS-Pendants. Mit modernen Webtechnologien und einem aktuellen Browser ist es durchaus möglich, beeindruckende Spitzen-Spiele für das Web zu entwickeln. Und wir sprechen nicht von einfachen Kartenspielen oder Multiplayer-Social-Spielen, die in früheren Zeiten mit Flash® umgesetzt wurden. Wir sprechen von 3D-Action-Shootern, Rollenspielen und mehr. Dank massiver Leistungsverbesserungen in der [JavaScript](/de/docs/Web/JavaScript) Just-in-Time-Compiler-Technologie und neuen APIs können Sie Spiele erstellen, die im Browser (oder auf [HTML5](/de/docs/Glossary/HTML5)-fähigen Geräten) laufen, ohne Kompromisse einzugehen.

## Die HTML-Spielplattform

Sie können das Web tatsächlich als bessere Zielplattform für Ihr Spiel betrachten. Wie wir gerne sagen: "Das Web ist die Plattform." Schauen wir uns den Kern der Webplattform an:

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
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ mit
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a>, um nach JavaScript zu kompilieren)
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
      <td><strong>Speicher</strong></td>
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

## Das Geschäftliche

Als Spieleentwickler, ob Sie nun Einzelperson oder ein großes Spiele-Studio sind, wollen Sie wissen, warum es sinnvoll ist, das Web als Zielplattform für Ihr nächstes Spieleprojekt auszuwählen. Schauen wir uns an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit sind verbessert. Sie sind nicht darauf beschränkt, Ihre App in einem fremden App-Store zu bewerben. Stattdessen können Sie Ihr Spiel überall im Web sowie in anderen Medien bewerben und promoten, indem Sie sich die inhärenten Verlinkungs- und Teilbarkeitsmöglichkeiten des Webs zunutze machen, um neue Kunden zu erreichen.
3. Sie haben die Kontrolle, wo es wichtig ist: Zahlungen. Sie müssen nicht 30% Ihrer Einnahmen an jemand anderen abgeben, nur weil Ihr Spiel in deren Ökosystem ist. Stattdessen können Sie den Preis festlegen, den Sie möchten, und den von Ihnen bevorzugten Zahlungsabwicklungsdienst verwenden.
4. Erneut mit mehr Kontrolle können Sie Ihr Spiel jederzeit aktualisieren. Kein atemloses Warten auf eine Genehmigung mehr, während jemand verborgen in einer anderen Firma entscheidet, ob Ihr kritischer Fehlerbehebung heute oder morgen ausgeliefert wird.
5. Kontrollieren Sie Ihre Analysen! Anstatt sich auf jemanden anderen zu verlassen, um alle Entscheidungen darüber zu treffen, welche Analysen Sie benötigen, können Sie Ihre eigenen erfassen – oder den Drittanbieter auswählen, den Sie am besten finden – um Informationen über Ihre Verkäufe und die Reichweite Ihres Spiels zu sammeln.
6. Sie können Ihre Kundenbeziehung enger in Ihrer eigenen Art und Weise gestalten. Kein mehr durch die begrenzten Mechanismen eines App-Stores gefiltertes Kundenfeedback. Treten Sie mit Ihren Kunden in der von Ihnen gewünschten Weise in Kontakt, ohne einen Zwischenhändler.
7. Ihre Spieler können Ihr Spiel jederzeit und überall spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihren Handys, Tablets, ihren Heimcomputern, ihren Arbeitsdesktops oder auf jedem anderen Gerät überprüfen.

## Webtechnologien für Spieleentwickler

Für die Technikinteressierten, schauen wir uns die APIs an, die das Web bietet und die auf Spieleentwickler zugeschnitten sind. Hier eine umfassende Liste, um Ihnen einen Vorgeschmack auf das zu geben, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Senden und empfangen Sie beliebige Daten von einem Webserver, wie etwa das Herunterladen neuer Spielebenen und -grafiken bis hin zur Übertragung von nicht echtzeitfähigen Spielstatusinformationen.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Diese einfache API lässt Ihr Spiel den gesamten Bildschirm übernehmen, um den Spieler in die Aktion eintauchen zu lassen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Benutzer Gamepads oder andere Spielsteuerungen verwenden können, um Ihr Spiel zu betreiben, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen lassen diese beiden Technologien Sie das Benutzerinterface Ihres Spiels erstellen, gestalten und anordnen. Teil von HTML ist das {{HTMLElement("canvas")}}-Element, das eine Möglichkeit bietet, 2D-Grafiken zu erstellen.
- [HTML audio](/de/docs/Web/HTML/Element/audio)
  - : Das {{HTMLElement("audio")}}-Element ermöglicht es Ihnen, einfach Soundeffekte und Musik abzuspielen. Wenn Ihre Anforderungen umfangreicher sind, werfen Sie einen Blick auf die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für echte Audiobearbeitungsleistung!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Datenspeicher-API zur Verwaltung von Benutzerdaten auf deren eigenem Computer oder Gerät. Eine großartige Möglichkeit, den Spielstand und andere Informationen lokal zu speichern, damit sie nicht jedes Mal heruntergeladen werden müssen, wenn sie benötigt werden. Auch nützlich, um Ihr Spiel spielbar zu halten, selbst wenn der Benutzer nicht mit dem Web verbunden ist (z.B. wenn er stundenlang im Flugzeug festsitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die auf dem Web verwendete Programmiersprache, ist in modernen Browsern blitzschnell und wird ständig schneller. Nutzen Sie seine Leistung, um den Code für Ihr Spiel zu schreiben, oder schauen Sie sich Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/) an, um Ihre bestehenden Spiele einfach zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API ermöglicht es Ihnen, die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels zu sperren, sodass Sie anstelle der absoluten Cursorposition Koordinatendeltas erhalten, die Ihnen genauere Messungen darüber geben, was der Benutzer tut, und verhindern, dass der Benutzer versehentlich seine Eingabe woandershin sendet und dadurch wichtige Aktionen verpasst.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Erlaubt Ihnen, skalierbare Vektorgrafiken zu erstellen, die unabhängig von Größe oder Auflösung des Displays des Benutzers glatt skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript Typed Arrays geben Ihnen Zugriff auf rohe Binärdaten innerhalb von JavaScript; dies erlaubt Ihnen, GL-Texturen, Spieldaten oder alles andere zu manipulieren, selbst wenn es nicht in einem nativen JavaScript-Format vorliegt.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, großartige Soundeffekte zu erstellen sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Ermöglicht es Ihnen, Hochleistungs-3D- (und 2D-) Grafiken aus Webinhalten zu erstellen, die hardwarebeschleunigt sind. Dies ist eine vom Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die WebRTC (Real-Time Communications)-API gibt Ihnen die Macht, Audio- und Videodaten zu steuern, einschließlich der Telekonferenz und der Übertragung anderer Anwendungsdaten zwischen zwei Benutzern. Möchten Sie, dass Ihre Spieler miteinander sprechen können, während sie Monster besiegen? Dies ist die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket API ermöglicht es Ihnen, Ihre App oder Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Mehrspieler-Action, Chatdienste und dergleichen.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Workers geben Ihnen die Möglichkeit, Hintergrund-Threads zu erstellen, die ihren eigenen JavaScript-Code ausführen, um die modernen Mehrkernprozessoren auszunutzen.
