---
title: Installation von grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: c49748a0ce4fdf77427e29cb6edbca8953a514e7
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie für die einfache Webentwicklung benötigen und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

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
          <li>Installieren eines Code-Editors, einiger moderner Browser und eines lokalen Testservers.</li>
          <li>Erkunden von Optionen für andere gängige Arten von Apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eines der wichtigsten Dinge, die ein Entwickler auf seinem Computer haben sollte. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl weiterer Funktionen. Wir haben einen ganzen Artikel den Code-Editoren später in der Serie gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, ein großartiges Funktionsset und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels zu folgen.

## Moderne Webbrowser

Moderne Webbrowser bereitzuhalten ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher zum Zugriff darauf verwenden. Sie müssen auch sicherstellen, dass Ihre Browser auf dem neuesten Stand sind, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates enthalten.

Die häufigsten Browser, auf die Sie stoßen werden, sind wie folgt:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).

    > [!NOTE]
    > Die meisten der oben genannten Android-Browser haben iOS-Versionen, waren aber historisch bedingt alle unter der Haube mit Apples WebKit-Engine aufgrund von Apples App-Store-Regeln ausgestattet. Zum Zeitpunkt des Schreibens beginnen Browser damit, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund von Regulierungsänderungen. Siehe [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der "Über"-Seite des Browsers nach Updates suchen. Diese befindet sich an leicht unterschiedlichen Stellen in verschiedenen Browsern und Betriebssystemen, zum Beispiel:

- Firefox: Verfügbar unter _Firefox_ > _Über Firefox_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Firefox_ auf Windows.
- Chrome: Verfügbar unter _Chrome_ > _Über Google Chrome_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Windows.

### Welche Browser zu installieren

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Wenn möglich, installieren Sie mindestens einen Browser aus jedem der zuvor gezeigten Unterpunkte, damit Sie nicht nur in mehreren Browsern testen, die auf der gleichen Rendering-Engine basieren.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver abgerufen, der auf einem Servercomputer irgendwo anders in der Welt gehostet wird. Sie lernen im nächsten Artikel der Serie mehr darüber, wie dies funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server bereitzustellen, ist die Verwendung einer Code-Editor-Erweiterung – auf diese Weise ist sie direkt innerhalb Ihres Code-Editors verfügbar. Gehen Sie wie folgt in Visual Studio Code vor:

1. Öffnen Sie den _Erweiterungen_-Bereich mithilfe der Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Suchfeld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)-Erweiterung von Microsoft sein.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, die erläutert, wie man sie benutzt.
4. Drücken Sie die _Installieren_-Schaltfläche, um die Erweiterung zu installieren.
5. Jetzt sollten Sie, wenn Sie an einer HTML-Datei im Editor arbeiten, in der Lage sein, auf die Schaltfläche "Vorschau anzeigen" zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie vielleicht eine flexiblere lokale Serveroption haben, die verwendet werden kann, um Beispiele in jedem Browser zu laden, den Sie haben. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen häufig Bilddateien bearbeiten, um sie auf den von ihnen erstellten Websites zu verwenden. Dies kann oft bedeuten, grafische Assets zu entwerfen/erstellen, aber auch die Grafiken werden oft von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Dritter sein), in welchem Fall der Webentwickler möglicherweise aufgefordert wird, die erhaltenen Dateien zuzuschneiden oder deren Größe zu ändern.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen verlangen könnten, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Wir empfehlen Ihnen, keinen Grafik-Editor zu installieren, bevor Sie ihn später in Ihrem Lernprozess benötigen. Geben Sie sicherlich kein Geld für ein teures kommerzielles Produkt aus es sei denn, Sie sind wirklich der Meinung, dass es einen Mehrwert bringen wird.

Es gibt viele kostenlose Softwaretools und Online-Dienste, die wahrscheinlich für den Moment gut genug sind, zum Beispiel:

- macOS wird mit einem Werkzeug namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dieses wird hauptsächlich für das Ansehen von Bildern und PDFs verwendet, hat aber auch einige sehr nützliche Funktionen für die Bildbearbeitung, einschließlich Größenänderung, Drehen, Zuschneiden, Anmerkungen und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/)-Website bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für die Verwendung auf einer Website ausführen müssen.

In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neuzugänge wie [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige anerkannte kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**-Tools werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Zurzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich jetzt keine Sorgen darüber machen. Wir haben ein Modul speziell über [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) am Ende unserer Kernmodule-Serie.

## Site-Deployment-Apps

Nachdem Sie die Entwicklung einer Website oder App (auf Ihrem lokalen Computer oder möglicherweise auf einem Entwicklungsserver) abgeschlossen haben, möchten Sie sie auf einen entfernten Webserver übertragen, damit Ihre Benutzer die zugehörige Webadresse eingeben und sie im Internet aufrufen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, vom Kauf von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Verwendung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zum schnellen Zusammenstellen einer Demo, die Sie mit anderen teilen können, mit etwas wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

Eine solche Liste von Optionen mag überwältigend erscheinen, aber machen Sie sich keine Sorgen – Sie müssen jetzt noch nichts über die Veröffentlichung von Websites wissen. Wir werden dieses Thema im Laufe des Kurses mehrfach behandeln. Sie werden bald praktische Erfahrungen damit sammeln, in unserem [Ihr erstes Projekt](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
