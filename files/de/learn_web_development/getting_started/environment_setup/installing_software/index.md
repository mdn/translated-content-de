---
title: Installation der grundlegenden Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: c821233f96df6d8e967a122f01c7ca420944a02c
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung zu betreiben, und was Sie jetzt installieren sollten, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse Ihres Betriebssystems.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um zu starten.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Erkundung von Optionen für andere gängige Arten von Apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eines der wichtigsten Werkzeuge, die ein Entwickler auf seinem Rechner zur Verfügung haben sollte. Neben der Funktion, Code zu schreiben, bieten Code-Editoren eine Fülle von weiteren Funktionen. Wir haben einen ganzen Artikel nur Code-Editoren in der Serie gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, eine großartige Funktionsvielfalt und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben, ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher verwenden. Sie müssen Ihre Webbrowser auch auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitspatches enthalten.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und Änderungen anzuwenden, wenn sie neu gestartet werden. Sie können in der Regel im Browser-Menü auf der Seite "Über" nach Updates suchen, zum Beispiel im Menü von _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder durch das Menü-Symbol > _Hilfe_ > _Über Firefox_ oder Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Geräte-Browser installieren, um Ihren Code darin zu testen. Am häufigsten trifft man auf Desktop-, Laptop- und Mobilgeräte-Webbrowser, aber es gibt auch Browser auf anderen Geräten wie Tablets, Uhren und Fernsehern. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Reihe installiert und verfügbar haben, um darauf zu testen (damit Sie nicht nur in mehreren Browsern auf der Basis derselben Rendering-Engine testen):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine im Hintergrund angetrieben aufgrund der Regeln des Apple App Stores. Zum Zeitpunkt der Erstellung beginnen Browser damit, Versionen ihrer iOS-Browser zu erstellen, die auf ihren eigenen Rendering-Engines basieren, aufgrund regulatorischer Änderungen. Siehe [Apple erlaubt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die vom Browser zusammengeführten Dateien von einem entfernten Webserver abgerufen, der auf einem Server irgendwo anders auf der Welt gehostet wird. Sie erfahren mehr über diesen Vorgang im nächsten Artikel der Serie.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie normalerweise die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu sein.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung — so ist sie direkt innerhalb Ihres Code-Editors verfügbar. Machen Sie Folgendes in Visual Studio Code:

1. Öffnen Sie den _Extensions_-Bereich über die Menüoption _View_ > _Extensions_.
2. Geben Sie im Suchfeld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung von Microsoft sein.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, die auch Hinweise zur Nutzung enthält.
4. Drücken Sie die Schaltfläche _Install_, um die Erweiterung zu installieren.
5. Wenn Sie an einer HTML-Datei im Editor arbeiten, sollten Sie jetzt in der Lage sein, auf den Button "Show Preview" zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie vielleicht eine flexiblere lokale Serveroption verfügbar machen, die dazu genutzt werden kann, Beispiele in jedem verfügbaren Browser zu laden. Weitere Optionen (und weitere Hintergrundinformationen dazu, warum lokale Server notwendig sind), finden Sie unter [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen oft Bilddateien für die Verwendung auf den von ihnen erstellten Websites bearbeiten. Das kann oft bedeuten, grafische Materialien zu entwerfen/erstellen, aber ebenso wird die Grafik oft von einem Grafikdesigner (dies könnte ein Teamkollege oder ein Drittanbieter sein) bereitgestellt, in diesem Fall kann der Webentwickler aufgefordert werden, die Dateien zuzuschneiden oder in ihrer Größe zu ändern.

In keinem der Lernartikel auf MDN müssen Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen erfordern können, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Es gibt viele Grafik-Bearbeitungstools. Wir empfehlen Ihnen, kein Geld für ein teures kommerzielles Produkt auszugeben, bis Sie weiter auf Ihrer Lernreise sind, _falls_ Sie wirklich das Gefühl haben, dass Sie es benötigen. Es gibt viele kostenlose Softwaretools und Online-Dienste, die wahrscheinlich jetzt ausreichen.

Zum Beispiel:

- macOS kommt mit einem Werkzeug namens [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac). Dieses wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, hat jedoch auch einige wirklich nützliche Funktionen zur Bearbeitung von Bildern, einschließlich Größenänderung, Drehung, Zuschneiden, Annotierung und Konvertierung zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Photos App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/) Website bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Materialien für die Verwendung auf einer Website vorbereiten.

Wenn Sie umfangreichere Anforderungen an die Grafikbearbeitung/erstellung haben, benötigen Sie ein vollständiges Grafikpaket. In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte relativ neue Produkte wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/) und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontrollwerkzeuge** werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zusammenzuarbeiten, Code und Materialien zu teilen und Bearbeitungskonflikte zu vermeiden. Zur Zeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich jetzt noch nicht darum kümmern. Wir haben ein Modul nur für [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) gegen Ende unserer Kernmodulreihe.

## Veröffentlichungs-Apps

Nachdem Sie die Entwicklung einer Website oder App (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver) abgeschlossen haben, möchten Sie diese auf einen entfernten Webserver übertragen, damit Ihre Nutzer die zugeordnete Webadresse eingeben und sie im Web anzeigen können!

Es gibt verschiedene Methoden, wie Sie dies tun können, von der Miete eines Hostings und der Verwendung einer [SFTP App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zum Einrichten eines schnellen Demos, um es mit anderen zu teilen, mit etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/).

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen sich jetzt keine Gedanken über das Veröffentlichen von Websites machen. Wir werden dieses Thema später in dem Kurs mehrfach betrachten. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
