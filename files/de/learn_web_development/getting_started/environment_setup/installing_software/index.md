---
title: Installation grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen und welche Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem (OS) Ihres Computers.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um zu beginnen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Möglichkeiten für andere häufige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eines der wichtigsten Werkzeuge, das jedem Entwickler zur Verfügung stehen sollte. Neben der Funktion als Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl weiterer Funktionen. Wir haben einen ganzen Artikel zu Code-Editoren später in der Serie gewidmet.

Fürs Erste empfehlen wir, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, eine großartige Funktionspalette und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten es jetzt installieren, um mit dem Rest dieses Artikels Schritt zu halten.

## Moderne Webbrowser

Moderne Webbrowser sind essenziell für die Webentwicklung, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher zur Zugriff nutzen. Sie müssen auch Ihre Webbrowser aktuell halten, um sicherzustellen, dass sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates erhalten haben.

Die gängigsten Browser, auf die Sie stoßen werden, sind die folgenden:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/Alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben genannten Android-Browser haben iOS-Versionen, aber diese wurden aufgrund der Regeln des Apple App Stores historisch alle von Apples WebKit-Engine angetrieben. Zum Zeitpunkt des Schreibens beginnen Browser mit der Erstellung von Versionen ihrer iOS-Browser, die auf ihren eigenen Rendering-Engines basieren, aufgrund von regulatorischen Änderungen. Siehe [Apple erlaubt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser installieren Updates automatisch und wenden die Änderungen an, wenn sie neu gestartet werden. Sie können in der Regel auf der "Über"-Seite des Browsers nach Updates suchen. Diese befindet sich an leicht unterschiedlichen Orten in verschiedenen Browsern und Betriebssystemen, zum Beispiel:

- Firefox: Verfügbar unter _Firefox_ > _Über Firefox_ auf macOS und über das Menü-Symbol > _Hilfe_ > _Über Firefox_ auf Windows.
- Chrome: Verfügbar unter _Chrome_ > _Über Google Chrome_ auf macOS und über das Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Windows.

### Welche Browser sollten installiert werden

Für den Anfang sollten Sie ein paar Desktop- und mobile/alternative Geräte-Browser installieren, um Ihren Code zu testen. Wenn möglich, installieren Sie mindestens einen Browser aus jedem der zuvor gezeigten Unterpunkte, damit Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, von einem entfernten Webserver auf einem Server-Computer irgendwo auf der Welt abgerufen. Sie werden mehr darüber erfahren, wie dies im nächsten Artikel in der Serie funktioniert.

Beim Erstellen einer Website lokal (auf Ihrem eigenen Computer) kann es oft ausreichen, die Haupt-HTML-Index-Datei direkt in einem Browser zu laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, besteht darin, eine Code-Editor-Erweiterung zu verwenden - auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Führen Sie die folgenden Schritte in Visual Studio Code aus:

1. Öffnen Sie das _Erweiterungen_-Panel über die Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Feld "Suche..." oben in diesem Panel "live preview" ein. Das oberste Suchergebnis sollte die von Microsoft erstellte [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die erklärt, wie sie verwendet wird.
4. Drücken Sie die _Installieren_-Taste, um die Erweiterung zu installieren.
5. Wenn Sie jetzt an einer HTML-Datei im Editor arbeiten, sollten Sie in der Lage sein, auf die Schaltfläche "Vorschau anzeigen" zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption haben, die verwendet werden kann, um Beispiele in jedem von Ihnen verfügbaren Browser zu laden. Für andere Optionen (und weitere Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen häufig Bilddateien für die Verwendung auf den von ihnen erstellten Websites bearbeiten. Dies kann oft bedeuten, dass sie Grafikressourcen entwerfen/erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Drittanbieter sein), in welchem Fall der Webentwickler möglicherweise aufgefordert wird, die erhaltenen Dateien zuzuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise erfordern, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Wir empfehlen, dass Sie keinen Grafik-Editor installieren, bis Sie ihn später auf Ihrer Lernreise benötigen. Geben Sie definitiv kein Geld für ein teures kommerzielles Produkt aus, es sei denn, Sie glauben wirklich, dass es Mehrwert bringt.

Es gibt viele kostenlose Software-Tools und Online-Dienste, die wahrscheinlich für den Moment ausreichend sind, zum Beispiel:

- macOS kommt mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac). Es wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, bietet aber auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich Skalieren, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die eingebaute Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/)-Website bietet einen kostenlosen Dienst zum Komprimieren von PNGs, JPEGs und mehr. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Ressourcen für die Verwendung auf einer Website vorbereiten.

In Bezug auf kommerzielle Angebote war [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lange der Branchenstandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neuzugänge wie [Figma](https://www.figma.com/), [The Affinity Suite](https://affinity.serif.com/en-us/) und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es sich lohnt, auszuprobieren. Es gibt auch einige gut bewertete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zusammenzuarbeiten, Code und Ressourcen zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich im Moment noch nicht darum kümmern. Wir haben ein Modul, das der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) gewidmet ist, und es ist am Ende unserer Serie von Core-Modulen zu finden.

## Anwendungsprogramme für die Seiteneinführung

Nachdem Sie eine Website oder App entwickelt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einen entfernten Webserver stellen, damit Ihre Benutzer die zugeordnete Webadresse eingeben und sie im Internet anzeigen können!

Es gibt verschiedene Wege, wie Sie dies tun können, von Hosting-Kauf und Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zur schnellen Erstellung eines Demos, das Sie mit anderen über etwas wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) teilen können.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge - Sie müssen im Moment nichts über die Veröffentlichung von Websites wissen. Wir werden dieses Thema später im Kurs viele Male betrachten. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
