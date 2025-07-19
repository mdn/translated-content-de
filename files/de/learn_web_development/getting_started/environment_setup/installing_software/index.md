---
title: Installation von grundlegender Software
short-title: Installation von Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen, und welche Sie jetzt installieren sollten, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem (OS).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um loszulegen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere häufige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eine der wichtigsten Dinge, die jedem Entwickler auf seinem Rechner zur Verfügung stehen sollten. Neben dem Schreiben von Code bietet ein Code-Editor viele weitere Funktionen. Wir haben einen ganzen Artikel über Code-Editoren später in der Serie gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, großartige Funktionen und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Moderne Webbrowser sind für die Webentwicklung unverzichtbar, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet sind.

Die gängigsten Browser, auf die Sie stoßen werden, sind wie folgt:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.firefox.com/en-US/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben genannten Android-Browser haben iOS-Versionen, aber diese basierten historisch alle auf Apples WebKit-Engine unter der Haube aufgrund der Regeln des Apple App Store. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Render-Engines zu erstellen, aufgrund von regulatorischen Änderungen. Siehe [Apple erlaubt endlich vollwertige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise im "Über"-Bereich des Browsers nach Updates suchen. Dies ist in verschiedenen Browsern und Betriebssystemen leicht unterschiedlich zugänglich, zum Beispiel:

- Firefox: Erreichbar unter _Firefox_ > _Über Firefox_ auf macOS und Menü-Icon > _Hilfe_ > _Über Firefox_ unter Windows.
- Chrome: Erreichbar unter _Chrome_ > _Über Google Chrome_ auf macOS und Menü-Icon > _Hilfe_ > _Über Google Chrome_ unter Windows.

### Welche Browser zu installieren sind

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Wenn möglich, installieren Sie mindestens einen Browser aus jedem der oben genannten Unterpunkte, damit Sie nicht nur in mehreren Browsern testen, die auf der gleichen Rendering-Engine basieren.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Webseite zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver auf einem Servercomputer irgendwo auf der Welt abgerufen. Sie werden mehr darüber erfahren, wie dies im nächsten Artikel der Serie funktioniert.

Wenn Sie eine Webseite lokal (auf Ihrem eigenen Rechner) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um diese zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Möglichkeiten, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie wie folgt in Visual Studio Code vor:

1. Öffnen Sie das _Erweiterungen_-Fenster über das Menü _Ansicht_ > _Erweiterungen_.
2. Geben Sie oben in diesem Fenster im "Suchen..."-Feld "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein, erstellt von Microsoft.
3. Klicken Sie auf diese Option, um eine Informationsseite über sie zu öffnen, die auch erklärt, wie man sie benutzt.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Nun sollten Sie, wenn Sie an einer HTML-Datei im Editor arbeiten, die Schaltfläche "Vorschau anzeigen" anklicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die oben genannte Option ist einfach, aber nicht besonders flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption, die zur Verfügung steht, um Beispiele in jedem Browser zu laden, den Sie haben. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler sind oft darauf angewiesen, Bilddateien für den Einsatz auf den von ihnen erstellten Websites zu bearbeiten. Dies kann oft dazu führen, Grafikassets zu entwerfen/erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Drittanbieter sein), in welchem Fall der Webentwickler möglicherweise aufgerufen wird, die empfangenen Dateien zu zuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen erfordern, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Wir empfehlen Ihnen, keinen Grafik-Editor zu installieren, bis Sie ihn später in Ihrem Lernweg benötigen. Geben Sie sicherlich kein Geld für ein teures kommerzielles Produkt aus, es sei denn, Sie glauben wirklich, dass es Ihnen Wert bringt.

Es gibt viele kostenlose Software-Tools und Online-Dienste, die für den Moment wahrscheinlich ausreichen werden, zum Beispiel:

- macOS enthält ein Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac). Es wird hauptsächlich zum Betrachten von Bildern und PDFs verwendet, hat aber auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich Größenänderung, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für den Einsatz auf einer Website erledigen müssen.

Im Hinblick auf kommerzielle Angebote war [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lange Zeit der Industriestandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neulinge wie [Figma](https://www.figma.com/), [The Affinity Suite](https://affinity.serif.com/en-us/), und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es sich zu erkunden lohnt. Es gibt auch einige gut angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Zurzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unverzichtbar sind, müssen Sie sich momentan nicht darum kümmern. Wir haben ein Modul, das sich der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, das gegen Ende unserer Core-Module-Serie kommt.

## Website-Deploy-Apps

Nachdem Sie eine Website oder App fertig entwickelt haben (auf Ihrem lokalen Computer oder möglicherweise auf einem Entwicklungsserver), möchten Sie diese auf einen entfernten Webserver stellen, sodass Ihre Benutzer die zugehörige Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von dem Kauf von Hosting und der Nutzung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zur Erstellung einer schnellen Demo, um sie mit anderen zu teilen, mithilfe von Tools wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema später in dem Kurs viele Male behandeln. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihr erstes Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
