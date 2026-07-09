---
title: Installation von grundlegender Software
short-title: Installation von Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
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
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere gängige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eines der wichtigsten Dinge, die jedem Entwickler auf seinem Computer zur Verfügung stehen sollten. Zusätzlich zu dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl weiterer Funktionen. Wir haben in dieser Serie einen ganzen Artikel den Code-Editoren gewidmet.

Für den Moment empfehlen wir, dass Sie [Visual Studio Code](https://code.visualstudio.com/) installieren, da es plattformübergreifend verfügbar ist, über ausgezeichnete Funktionen und Unterstützung verfügt und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um den Rest dieses Artikels nachvollziehen zu können.

## Moderne Webbrowser

Moderne Webbrowser sind für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates anwenden.

Die am häufigsten verwendeten Browser, auf die Sie stoßen werden, sind wie folgt:

- Desktop-Browser:
  - Auf Chromium basierend: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Auf Gecko basierend: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - Auf WebKit basierend: [Apple Safari](https://www.apple.com/safari/).
- Mobile/Alternative Geräte-Browser:
  - Auf Chromium basierend (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Auf Gecko basierend (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - Auf WebKit basierend (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben auch iOS-Versionen, waren historisch gesehen jedoch alle mit Apples WebKit-Engine unter der Haube ausgestattet, aufgrund der Regeln des Apple App Stores. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund regulatorischer Änderungen. Siehe [Apple erlaubt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der "Über" Seite des Browsers nach Updates suchen. Diese befindet sich an etwas unterschiedlichen Stellen je nach Browser und Betriebssystem, zum Beispiel:

- Firefox: Verfügbar unter _Firefox_ > _Über Firefox_ auf macOS, und Menü-Symbol > _Hilfe_ > _Über Firefox_ auf Windows.
- Chrome: Verfügbar unter _Chrome_ > _Über Google Chrome_ auf macOS, und Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Windows.

### Welche Browser zu installieren sind

Für den Moment sollten Sie ein paar Desktop- und Mobile/Alternative Geräte-Browser installieren, um Ihren Code darin zu testen. Installieren Sie Browser basierend auf mindestens zwei verschiedenen Rendering-Engines (zum Beispiel Chromium und Gecko), damit Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren. Dies ist wichtig, da Ihr Code Fehler enthalten könnte, die nur eine Rendering-Engine betreffen.

WebKit-basierte Browser sind nicht für Windows-, Linux- und Android-Betriebssysteme verfügbar. Wenn Sie Ihren Code in allen drei wichtigen Rendering-Engines testen möchten und Ihr Computer windowsbasiert ist, müssen Sie auf ein macOS- oder iOS-basiertes Testgerät zugreifen oder eine softwarebasierte Lösung wie eine virtuelle Maschine oder eine Testplattform verwenden. Sie müssen sich jetzt jedoch keine Sorgen über umfassendes Testen machen — es reicht aus, zu erkennen, dass Sie Ihren Code über verschiedene Rendering-Engines hinweg testen sollten und ein wenig Übung darin zu bekommen.

Sie werden Teststrategien in unserem [Testen](/de/docs/Learn_web_development/Extensions/Testing) Modul genauer betrachten.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver abgerufen, der auf einem Servercomputer irgendwo anders auf der Welt gehostet wird. Sie werden in dem nächsten Artikel der Serie mehr darüber erfahren, wie dies funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie häufig die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Nutzung einer Erweiterung für den Code-Editor — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie in Visual Studio Code wie folgt vor:

1. Öffnen Sie den _Erweiterungen_ Bereich über die _Ansicht_ > _Erweiterungen_ Menüoption.
2. Geben Sie im oberen Suchfeld dieses Bereichs "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein, erstellt von Microsoft.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, einschließlich, wie man es verwendet.
4. Drücken Sie den _Installieren_ Button, um die Erweiterung zu installieren.
5. Wenn Sie nun an einer HTML-Datei im Editor arbeiten, sollten Sie in der Lage sein, auf die "Vorschau anzeigen" Schaltfläche zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption haben, die genutzt werden kann, um Beispiele in jedem von Ihnen verfügbaren Browser zu laden. Für andere Optionen (und weiterführende Hintergrundinformationen, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler müssen oft Bilddateien für die Verwendung auf den von ihnen erstellten Websites bearbeiten. Das kann häufig bedeuten, grafische Assets zu entwerfen/erstellen, aber ebenso werden die Grafiken oft von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Dritter sein), in welchem Fall der Webentwickler möglicherweise aufgefordert wird, die empfangenen Dateien zu zuschneiden oder in der Größe anzupassen.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise erfordern, dass Sie die bereitgestellten Dateien bearbeiten.

Wir würden empfehlen, dass Sie keinen Grafikeditor installieren, bis Sie ihn später in Ihrem Lernprozess benötigen. Investieren Sie sicherlich kein Geld in ein teures kommerzielles Produkt, es sei denn, Sie denken wirklich, dass es einen Mehrwert bringt.

Es gibt viele kostenlose Software-Tools und Online-Dienste, die wahrscheinlich gut genug für den Moment sind, zum Beispiel:

- macOS kommt mit einem Tool namens [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac). Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, es enthält jedoch auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich Größenänderung, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app) verfügt über viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/) Website bietet einen kostenlosen Service, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Assets für die Verwendung auf einer Website vorbereiten.

Beim Handel mit kommerziellen Angeboten hat sich [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lange als Industriestandard etabliert, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neulinge wie [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/), und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige renommierte kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://paint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zu kollaborieren, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Zurzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Services wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich darüber jetzt keine Sorgen machen. Wir haben ein Modul, das sich dem [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) am Ende unserer Core-Modulreihe widmet.

## Webseiten-Bereitstellungs-Apps

Nachdem Sie eine Website oder App fertig entwickelt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie diese auf einen entfernten Webserver stellen, damit Ihre Benutzer die damit verbundene Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, vom Kauf von Hosting und der Nutzung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zum Erstellen eines schnellen Demos, um es mit anderen zu teilen, z.B. mit [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt noch nichts darüber kennen, wie man Websites veröffentlicht. Wir werden dieses Thema später im Kurs viele Male behandeln. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
