---
title: Installation von grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung zu betreiben und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem (OS).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um zu beginnen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere gängige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein ordentlicher Code-Editor ist eines der wichtigsten Werkzeuge, die jedem Entwickler auf seinem Computer zur Verfügung stehen sollten. Neben dem Schreiben Ihres Codes bieten Code-Editoren eine Vielzahl weiterer Funktionen. Wir haben dem Thema Code-Editoren später in der Serie einen ganzen Artikel gewidmet.

Für den Moment empfehlen wir die Installation von [Visual Studio Code](https://code.visualstudio.com/), da es auf verschiedenen Plattformen verfügbar ist, eine großartige Funktionspalette bietet und der Editor ist, den wir hauptsächlich verwenden. Installieren Sie dies jetzt, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet sind.

Die gängigsten Browser, auf die Sie stoßen werden, sind folgende:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerät-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber historisch wurden diese alle von Apples WebKit-Engine angetrieben, aufgrund der App-Store-Regeln von Apple. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser auf Basis ihrer eigenen Rendering-Engines zu erstellen, aufgrund regulatorischer Änderungen. Siehe [Apple ermöglicht endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser neigen dazu, Updates automatisch zu installieren und die Änderungen anzuwenden, wenn sie neu gestartet werden. Sie können normalerweise in der „Über“-Seite des Browsers nach Updates suchen, die an leicht unterschiedlichen Orten in verschiedenen Browsern und Betriebssystemen verfügbar ist, zum Beispiel:

- Firefox: Verfügbar unter _Firefox_ > _Über Firefox_ auf macOS und Menüicon > _Hilfe_ > _Über Firefox_ unter Windows.
- Chrome: Verfügbar unter _Chrome_ > _Über Google Chrome_ auf macOS und Menüicon > _Hilfe_ > _Über Google Chrome_ unter Windows.

### Welche Browser zu installieren sind

Für den Moment sollten Sie ein paar Desktop- und Mobile/alternative Gerät-Browser installieren, um Ihren Code darin zu testen. Wenn möglich, installieren Sie mindestens einen Browser aus jedem der vorherigen Unterpunkte, damit Sie nicht nur in mehreren Browsern testen, die auf der gleichen Rendering-Engine basieren.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver abgerufen, der auf einem Servercomputer irgendwo anders auf der Welt gehostet wird. Sie lernen mehr darüber im nächsten Artikel der Serie.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Möglichkeiten, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung - auf diese Weise steht er direkt in Ihrem Code-Editor zur Verfügung. Machen Sie Folgendes in Visual Studio Code:

1. Öffnen Sie den _Erweiterungen_-Bereich über das Menü _Ansicht_ > _Erweiterungen_.
2. Geben Sie im "Suchen..."-Feld oben in diesem Bereich "live preview" ein. Das oberste Suchresultat sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung von Microsoft sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die erklärt, wie man sie verwendet.
4. Drücken Sie den _Installieren_-Button, um die Erweiterung zu installieren.
5. Jetzt, wenn Sie an einer HTML-Datei im Editor arbeiten, sollten Sie den "Vorschau anzeigen"-Button klicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die oben genannte Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption haben, die verwendet werden kann, um Beispiele in jedem Browser zu laden, den Sie haben. Für andere Optionen (und mehr Hintergrundinformationen, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler sind oft aufgefordert, Bilddateien für die Verwendung auf den von ihnen erstellten Websites zu bearbeiten. Dies kann oft bedeuten, grafische Assets zu entwerfen/erstellen, aber genauso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Dritter sein), in welchem Fall der Webentwickler möglicherweise aufgefordert wird, die ihm zur Verfügung gestellten Dateien zuzuschneiden oder deren Größe zu ändern.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise verlangen, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Wir empfehlen, dass Sie keinen Grafik-Editor installieren, bis Sie ihn später in Ihrem Lernprozess benötigen. Geben Sie sicherlich kein Geld für ein teures kommerzielles Produkt aus, es sei denn, Sie glauben wirklich, dass es einen Mehrwert bietet.

Es gibt viele kostenlose Softwaretools und Online-Dienste, die wahrscheinlich für jetzt gut genug sind, zum Beispiel:

- macOS kommt mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac). Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, hat aber auch einige sehr nützliche Funktionen zur Bildbearbeitung, einschließlich Größenanpassung, Drehen, Zuschneiden, Anmerkungen und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Assets für die Verwendung auf einer Website vorbereiten.

Was kommerzielle Angebote betrifft, so ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icons- und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neulinge wie [Figma](https://www.figma.com/), [Das Affinity-Suite](https://affinity.serif.com/en-us/), und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige hoch angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**-Tools werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zu kollaborieren, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Gerade jetzt ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich darüber derzeit keine Gedanken machen. Wir haben ein Modul, das sich [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) am Ende unserer Core-Modul-Reihe widmet.

## Site-Bereitstellungsanwendungen

Nachdem Sie eine Website oder App fertig entwickelt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einen entfernten Webserver übertragen, damit Ihre Benutzer die zugeordnete Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von dem Kauf von Hosting und der Nutzung einer [SFTP-Anwendung](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zur schnellen Erstellung einer Demo, die Sie mit anderen teilen können, mithilfe von [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/).

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen sich gerade jetzt keine Gedanken über das Veröffentlichen von Websites machen. Wir werden dieses Thema später im Kurs viele Male betrachten. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
