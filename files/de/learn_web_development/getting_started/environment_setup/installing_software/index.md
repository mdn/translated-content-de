---
title: Installieren grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 5f7d53df92f53fbd9b713ee65a3d437522a55a78
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie für einfache Webentwicklung benötigen und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computer-Betriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um loszulegen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Möglichkeiten für andere gängige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eines der wichtigsten Werkzeuge, die ein Entwickler auf seinem Computer haben sollte. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl von Funktionen. Wir haben einen ganzen Artikel zu Code-Editoren später in der Serie gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es auf verschiedenen Plattformen verfügbar ist, eine großartige Auswahl an Funktionen und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Die Verfügbarkeit moderner Webbrowser ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen auch sicherstellen, dass Ihre Webbrowser auf dem neuesten Stand sind, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet sind.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der "Über"-Seite des Browsers nach Updates suchen, zum Beispiel im Menü bei _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder über das Menüsymbol > _Hilfe_ > _Über Firefox_ oder Menüsymbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Für jetzt sollten Sie ein paar Desktop- und Mobile-/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Sie werden am häufigsten Webbrowser auf Desktop-, Laptop- und Mobilgeräten antreffen, aber Sie werden auch Webbrowser auf anderen Geräten wie Tablets, Uhren und Fernsehern finden. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Reihe installiert und verfügbar haben, um darauf zu testen (damit Sie nicht nur in mehreren Browsern testen, die auf demselben Rendering-Engine basieren):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, die historisch alle von Apples WebKit-Engine unter der Haube angetrieben wurden, aufgrund der Regeln im App Store von Apple. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser zu entwickeln, die auf ihren eigenen Rendering-Engines basieren, aufgrund von regulatorischen Änderungen. Siehe [Apple ermöglicht endlich volle Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver geladen, der auf einem Servercomputer irgendwo anders auf der Welt gehostet wird. Sie werden mehr darüber lernen, wie dies im nächsten Artikel der Serie funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie oft die Hauptindexdatei HTML direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, besteht darin, eine Code-Editor-Erweiterung zu verwenden - so ist der Server direkt in Ihrem Code-Editor verfügbar. Führen Sie die folgenden Schritte in Visual Studio Code aus:

1. Öffnen Sie das _Erweiterungen_-Fenster über das Menü _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Feld "Suchen..." oben in diesem Fenster "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)-Erweiterung, erstellt von Microsoft, sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die Anweisungen zur Verwendung enthält.
4. Drücken Sie die _Installieren_-Schaltfläche, um die Erweiterung zu installieren.
5. Wenn Sie jetzt an einer HTML-Datei im Editor arbeiten, sollten Sie die "Vorschau anzeigen"-Schaltfläche anklicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In der Zukunft möchten Sie vielleicht eine flexiblere lokale Server-Option haben, die verwendet werden kann, um Beispiele in jedem von Ihnen installierten Browser zu laden. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler sind oft dafür verantwortlich, Bilddateien für die Verwendung auf den von ihnen erstellten Websites zu bearbeiten. Dies kann häufig bedeuten, grafische Assets zu entwerfen/zu erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Dritter sein), in diesem Fall könnte der Webentwickler dazu aufgefordert werden, die erhaltenen Dateien zuzuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige davon erfordern, dass Sie die Dateien, die wir bereitstellen, manipulieren.

Es gibt viele Grafikbearbeitungstools. Wir empfehlen, dass Sie kein Geld für ein teures kommerzielles Produkt ausgeben, bis Sie weiter in Ihrem Lernprozess sind, _sofern_ Sie das Gefühl haben, dass Sie es wirklich benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die für den Moment wahrscheinlich ausreichen werden.

Zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, verfügt aber auch über einige wirklich nützliche Funktionen zur Bildbearbeitung, einschließlich Größenänderungen, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) verfügt über viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Service, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für den Einsatz auf einer Website durchführen müssen.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsbedürfnisse haben, benötigen Sie ein vollständiges Grafikpaket. Was kommerzielle Angebote betrifft, so ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) schon lange der Branchenstandard, besonders für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeit geeignet sind. Es gibt auch beliebte Newcomer wie [Figma](https://www.figma.com/), [The Affinity Suite](https://affinity.serif.com/en-us/), und [Canva](https://www.canva.com/).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut bewertete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**-Werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich im Moment keine Sorgen darüber machen. Wir haben ein Modul, das sich der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, am Ende unserer Core-Module-Serie.

## Website-Bereitstellungs-Apps

Nachdem Sie eine Website oder App fertig entwickelt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie diese auf einen Remote-Webserver stellen, damit Ihre Benutzer die zugeordnete Webadresse eingeben und sie im Web anzeigen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, vom Kauf von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/) oder der schnellen Erstellung eines Demos, um es mit anderen über etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) zu teilen.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge – Sie müssen im Moment nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema viele Male später im Kurs behandeln. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
