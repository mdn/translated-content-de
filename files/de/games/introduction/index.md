---
title: Einführung in die Spieleentwicklung für das Web
slug: Games/Introduction
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GamesSidebar}}

Das moderne Web hat sich schnell zu einer tragfähigen Plattform entwickelt, nicht nur für die Erstellung beeindruckender, hochwertiger Spiele, sondern auch für deren Verbreitung.

Die Bandbreite der möglichen Spiele ist mit Desktop- und nativen Betriebssystem-Pendants vergleichbar. Mit modernen Webtechnologien und einem aktuellen Browser ist es durchaus möglich, beeindruckende, erstklassige Spiele für das Web zu erstellen. Und wir sprechen hier nicht von einfachen Kartenspielen oder Multiplayer-Social-Games, die in früheren Zeiten mit Flash® umgesetzt wurden. Wir reden von 3D-Action-Shootern, Rollenspielen und mehr. Dank massiver Leistungsverbesserungen in der [JavaScript](/de/docs/Web/JavaScript)-Just-in-Time-Compiler-Technologie und neuen APIs können Sie Spiele erstellen, die im Browser (oder auf {{Glossary("HTML5", "HTML5")}}-fähigen Geräten) ohne Kompromisse laufen.

## Die HTML-Spielplattform

Sie können das Web wahrhaftig als bessere Zielplattform für Ihr Spiel betrachten. Wie wir zu sagen pflegen: "Das Web ist die Plattform." Werfen wir einen Blick auf das Kernstück der Webplattform:

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
          >Gamepad API</a>, Gerätesensoren, <a href="/de/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/de/docs/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/de/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Sprache</strong></td>
      <td>
        <a href="/de/docs/Web/JavaScript">JavaScript</a> (oder C/C++ unter
        Verwendung von <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a>, um in JavaScript zu kompilieren)
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

## Der geschäftliche Nutzen

Als Spieleentwickler, egal ob Sie als Einzelperson oder in einem großen Spielestudio arbeiten, möchten Sie wissen, warum es sinnvoll ist, das Web als Ziel für Ihr nächstes Spielprojekt zu wählen. Schauen wir uns an, wie das Web Ihnen helfen kann.

1. Die Reichweite des Webs ist enorm; es ist überall. Spiele, die mit HTML erstellt wurden, funktionieren auf Smartphones, Tablets, PCs und Smart-TVs.
2. Marketing und Auffindbarkeit werden verbessert. Sie sind nicht darauf beschränkt, Ihre App in den App Stores anderer zu bewerben. Stattdessen können Sie Ihr Spiel im gesamten Web sowie in anderen Medien bewerben und die inhärente Verlinkbarkeit und Teilbarkeit des Webs nutzen, um neue Kunden zu erreichen.
3. Sie haben Kontrolle, wo es darauf ankommt: Zahlungen. Sie müssen nicht 30 % Ihrer Einnahmen an jemand anderen abtreten, nur weil Ihr Spiel in deren Ökosystem ist. Stattdessen können Sie berechnen, was Sie möchten, und den Zahlungsdienstanbieter Ihrer Wahl nutzen.
4. Noch mehr Kontrolle: Sie können Ihr Spiel jederzeit aktualisieren. Keine bange Warterei auf Genehmigung, während jemand versteckt in einem anderen Unternehmen entscheidet, ob Ihr kritischer Bugfix heute oder morgen ausgeliefert wird.
5. Kontrollieren Sie Ihre Analysen! Statt sich darauf verlassen zu müssen, dass jemand anderes alle Entscheidungen darüber trifft, welche Analysen Sie benötigen, können Sie Ihre eigenen sammeln — oder den Drittanbieter Ihrer Wahl wählen — um Informationen über Ihren Umsatz und die Reichweite Ihres Spiels zu sammeln.
6. Sie können Ihre Kundenbeziehungen enger und auf Ihre eigene Art und Weise managen. Kein Filtern von Kundenfeedback mehr durch die begrenzten Mechanismen eines App Stores. Treten Sie mit Ihren Kunden in der gewünschten Weise in Kontakt, ohne einen Mittelsmann.
7. Ihre Spieler können Ihr Spiel überall und jederzeit spielen. Da das Web allgegenwärtig ist, können Ihre Kunden den Status ihres Spiels auf ihren Handys, Tablets, Laptops zu Hause, Desktops am Arbeitsplatz oder auf jedem anderen Gerät überprüfen.

## Webtechnologien für Spieleentwickler

Für die Technikbegeisterten, lassen Sie uns in die APIs eintauchen, die das Web bietet und speziell auf Spieleentwickler zugeschnitten sind. Hier ist eine umfassende Liste, die Ihnen einen Vorgeschmack darauf gibt, was das Web für Sie tun kann:

- [Fetch API](/de/docs/Web/API/Fetch_API)
  - : Versenden und Empfangen jeder Art von Daten, die Sie von einem Webserver möchten, wie das Herunterladen neuer Spielebenen und Grafiken oder das Übertragen von nicht-echtzeitlicher Spielstatusinformation hin und her.
- [Full Screen API](/de/docs/Web/API/Fullscreen_API)
  - : Diese einfache API ermöglicht es Ihrem Spiel, den gesamten Bildschirm zu übernehmen, um den Spieler vollständig in das Geschehen zu versetzen.
- [Gamepad API](/de/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Wenn Sie möchten, dass Ihre Benutzer Gamepads oder andere Gamecontroller verwenden können, benötigen Sie diese API.
- [HTML](/de/docs/Web/HTML) und [CSS](/de/docs/Web/CSS)
  - : Zusammen ermöglichen Ihnen diese beiden Technologien den Aufbau, das Styling und das Layout Ihrer Spiele-Benutzeroberfläche. Zu HTML gehört auch das {{HTMLElement("canvas")}}-Element, das eine Möglichkeit zur Erstellung von 2D-Grafiken bietet.
- [HTML audio](/de/docs/Web/HTML/Element/audio)
  - : Das {{HTMLElement("audio")}}-Element ermöglicht es Ihnen, einfach Soundeffekte und Musik abzuspielen. Wenn Ihre Anforderungen komplexer sind, schauen Sie sich die [Web Audio API](/de/docs/Web/API/Web_Audio_API) für leistungsstarkes Audioprocessing an!
- [IndexedDB](/de/docs/Web/API/IndexedDB_API)
  - : Eine leistungsstarke Datenspeicher-API zur Verwaltung von Benutzerdaten auf ihrem eigenen Computer oder Gerät. Eine großartige Möglichkeit, den Spielstatus und andere Informationen lokal zu speichern, sodass sie nicht jedes Mal neu heruntergeladen werden müssen, wenn sie benötigt werden. Auch nützlich, um Ihr Spiel spielbar zu machen, selbst wenn der Benutzer nicht mit dem Web verbunden ist (z. B. wenn er stundenlang im Flugzeug festsitzt).
- [JavaScript](/de/docs/Web/JavaScript)
  - : JavaScript, die im Web verwendete Programmiersprache, ist in modernen Browsern blitzschnell, und wird ständig schneller. Nutzen Sie seine Leistung, um den Code für Ihr Spiel zu schreiben, oder betrachten Sie Technologien wie [Emscripten](https://github.com/emscripten-core/emscripten/wiki) oder [Asm.js](http://asmjs.org/spec/latest/), um Ihre vorhandenen Spiele einfach zu portieren.
- [Pointer Lock API](/de/docs/Web/API/Pointer_Lock_API)
  - : Die Pointer Lock API ermöglicht es Ihnen, die Maus oder ein anderes Zeigegerät innerhalb der Benutzeroberfläche Ihres Spiels zu sperren, sodass Sie anstelle einer absoluten Cursorpositionierung die Koordinatendeltas erhalten, die Ihnen präzisere Messungen dessen ermöglichen, was der Benutzer tut, und verhindern, dass der Benutzer versehentlich seine Eingaben woanders hin sendet und damit wichtige Aktionen verpasst.
- [SVG](/de/docs/Web/SVG) (Scalable Vector Graphics)
  - : Ermöglicht Ihnen den Aufbau von Vektorgrafiken, die unabhängig von Größe oder Auflösung des Benutzerbildschirms reibungslos skaliert werden.
- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript-Typed Arrays geben Ihnen Zugriff auf rohe Binärdaten aus JavaScript heraus; dies ermöglicht es Ihnen, GL-Texturen, Spieldaten oder alles andere zu manipulieren, auch wenn es sich nicht in einem nativen JavaScript-Format befindet.
- [Web Audio API](/de/docs/Web/API/Web_Audio_API)
  - : Diese API zur Steuerung der Wiedergabe, Synthese und Manipulation von Audio aus JavaScript-Code ermöglicht es Ihnen, beeindruckende Soundeffekte zu erzeugen sowie Musik in Echtzeit abzuspielen und zu manipulieren.
- [WebGL](/de/docs/Web/API/WebGL_API)
  - : Ermöglicht es Ihnen, leistungsstarke, hardwarebeschleunigte 3D- (und 2D-) Grafiken aus Webinhalten zu erstellen. Dies ist eine von Web unterstützte Implementierung von [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/de/docs/Web/API/WebRTC_API)
  - : Die WebRTC (Real-Time Communications) API gibt Ihnen die Möglichkeit, Audio- und Videodaten zu steuern, einschließlich Videokonferenzen und der Übertragung anderer Anwendungsdaten zwischen zwei Benutzern. Möchten Sie, dass Ihre Spieler miteinander sprechen können, während sie Monster besiegen? Dies ist die API für Sie.
- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : Die WebSocket-API ermöglicht es Ihnen, Ihre Anwendung oder Website mit einem Server zu verbinden, um Daten in Echtzeit hin und her zu übertragen. Perfekt für Multiplayer-Gaming-Action, Chat-Services und so weiter.
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Arbeiter ermöglichen es Ihnen, Hintergrund-Threads zu erzeugen, die ihren eigenen JavaScript-Code ausführen, um moderne, Multicore-Prozessoren zu nutzen.
