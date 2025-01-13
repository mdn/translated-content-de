---
title: Installation grundlegender Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahren, welche Software Sie benötigen, um loszulegen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere gängige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist für jeden Entwickler eines der wichtigsten Werkzeuge, die auf dem Computer verfügbar sein sollten. Neben dem Schreiben Ihres Codes bieten Code-Editoren eine Vielzahl weiterer Funktionen. Wir haben später in der Serie einen ganzen Artikel dem Thema Code-Editoren gewidmet.

Für den Moment empfehlen wir, dass Sie [Visual Studio Code](https://code.visualstudio.com/) installieren, da es auf verschiedenen Plattformen verfügbar ist, ein großartiges Funktionsset und Unterstützung bietet, und der Editor ist, den wir überwiegend verwenden. Sie sollten dies jetzt installieren, um den Rest dieses Artikels nachvollziehen zu können.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben, ist essenziell für die Webentwicklung, damit Sie Ihre Webseiten oder Apps auf den Browsern testen können, mit denen Ihre Besucher darauf zugreifen. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet werden.

> [!NOTE]
> Die meisten Browser neigen dazu, Aktualisierungen automatisch zu installieren, und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der "Über" Seite des Browsers nach Updates suchen, z. B. im Menü unter _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder das Menü-Symbol > _Hilfe_ > _Über Firefox_ oder Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Für den Anfang sollten Sie ein paar Desktop- und Mobil-/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Am häufigsten begegnen Ihnen Webbrowser auf Desktop-, Laptop- und mobilen Geräten, aber Sie werden Webbrowser auch auf anderen Geräten wie Tablets, Uhren und Fernsehern finden. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Linie installiert haben, um darauf zu testen (sodass Sie nicht nur in mehreren Browsern basierend auf derselben Rendering-Engine testen):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile-/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, diese wurden jedoch historisch aufgrund der Regeln des App Stores von Apple alle von Apples WebKit-Engine angetrieben. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund regulatorischer Änderungen. Siehe [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die im Browser zur Darstellung dieser Seite kombiniert werden, von einem entfernten Webserver auf einem Server-Computer irgendwo auf der Welt abgerufen. Sie werden lernen, wie das im nächsten Artikel in der Serie funktioniert.

Beim Erstellen einer Website lokal (auf Ihrem eigenen Computer), können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Möglichkeiten, die wir gefunden haben, um einen lokalen Server bereitzustellen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie folgendermaßen mit Visual Studio Code vor:

1. Öffnen Sie den _Erweiterungen_-Bereich mit der Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Suchfeld „live preview“ ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung, erstellt von Microsoft, sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die erklärt, wie man sie verwendet.
4. Drücken Sie die _Installieren_-Schaltfläche, um die Erweiterung zu installieren.
5. Wenn Sie jetzt an einer HTML-Datei im Editor arbeiten, sollten Sie die Schaltfläche "Vorschau anzeigen" klicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption bereitstellen, die verwendet werden kann, um Beispiele in jedem verfügbaren Browser zu laden. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen oft Bilddateien bearbeiten, um sie auf den von ihnen erstellten Websites zu verwenden. Dies kann oft bedeuten, Grafiken zu entwerfen/erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner (dies könnte ein Teammitglied oder ein Dritter sein) bereitgestellt, in diesem Fall kann der Webentwickler gebeten werden, die erhaltenen Dateien zuzuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise erfordern, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Es gibt viele Grafikbearbeitungstools. Wir empfehlen, dass Sie kein Geld für ein teures kommerzielles Produkt ausgeben, bis Sie in Ihrem Lernprozess weiter fortgeschritten sind, _wenn_ Sie glauben, dass Sie es wirklich benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die wahrscheinlich für den Einstieg ausreichen.

Zum Beispiel:

- macOS bietet ein Tool namens [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac). Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, verfügt jedoch über einige sehr nützliche Funktionen zur Bearbeitung von Bildern, einschließlich Größe ändern, drehen, zuschneiden, kommentieren und zwischen verschiedenen Dateitypen konvertieren.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie oft erledigen müssen, wenn Sie Assets für die Verwendung auf einer Website vorbereiten.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsanforderungen haben, benötigen Sie ein vollständig funktionsfähiges Grafikpaket. In Bezug auf kommerzielle Angebote war [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lange Zeit der Industriestandard, und es gibt auch populäre relative Neulinge wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/) und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**-Tools werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zu arbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Services wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich jetzt noch keine Sorgen darüber machen. Wir haben ein Modul, das sich [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, fast am Ende unserer Core-Module-Serie.

## Bereitstellungs-Apps für Websites

Nachdem Sie die Entwicklung einer Website oder App (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver) abgeschlossen haben, möchten Sie sie auf einen entfernten Webserver stellen, damit Ihre Benutzer die zugehörige Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von dem Kauf eines Webhosting-Dienstes und der Nutzung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Verwendung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/) oder sogar der Einrichtung eines schnellen Demos, um es mit anderen zu teilen, indem Sie etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) verwenden.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt noch nichts über das Veröffentlichen von Websites wissen. Wir werden uns mit diesem Thema öfter im Verlauf des Kurses beschäftigen. Sie werden bald genug praktische Erfahrungen dazu sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
