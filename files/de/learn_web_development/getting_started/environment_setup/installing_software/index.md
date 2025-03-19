---
title: Installation grundlegender Software
short-title: Installation von Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung zu betreiben, und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um zu beginnen.</li>
          <li>Installieren Sie einen Code-Editor, einige moderne Browser und einen lokalen Testserver.</li>
          <li>Erkunden Sie Optionen für andere häufige Arten von Apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eines der wichtigsten Dinge, die jedem Entwickler auf seinem Computer zur Verfügung stehen sollten. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine ganze Reihe weiterer Funktionen. Wir haben im weiteren Verlauf der Serie einen gesamten Artikel den Code-Editoren gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, über eine großartige Feature-Sammlung und Unterstützung verfügt und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um den Rest dieses Artikels zu verfolgen.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben, ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Halten Sie Ihre Webbrowser zudem aktuell, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet sind.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren, indem sie die Änderungen anwenden, wenn sie neu gestartet werden. Sie können normalerweise auf Updates auf der „Über“-Seite des Browsers prüfen, zum Beispiel im Menü unter _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ bei Firefox/Chrome für macOS oder das Menü-Symbol > _Hilfe_ > _Über Firefox_ oder Menü-Symbol > _Hilfe_ > _Über Google Chrome_ bei Firefox/Chrome für Windows.

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Am häufigsten begegnen Ihnen Webbrowser auf Desktop-, Laptop- und Mobilgeräten, jedoch auch auf anderen Geräten wie Tablets, Uhren und Fernsehern. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Reihe installiert und zum Testen verfügbar haben (damit Sie nicht nur in mehreren Browsern mit demselben Rendering-Engine testen):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle unter der Haube von Apples WebKit-Engine angetrieben, aufgrund der Regeln des Apple App Stores. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, bedingt durch regulatorische Änderungen. Weitere Informationen finden Sie unter [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser zur Darstellung dieser Website kombiniert werden, von einem entfernten Webserver abgerufen, der auf einem Server-Computer irgendwo auf der Welt gehostet wird. Im nächsten Artikel der Serie erfahren Sie mehr darüber, wie das funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Allerdings müssen einige Beispiele über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Möglichkeiten, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist sie direkt in Ihrem Code-Editor verfügbar. Führen Sie folgende Schritte in Visual Studio Code aus:

1. Öffnen Sie den _Extensions_-Bereich über die Menüoption _Ansicht_ > _Extensions_.
2. Geben Sie im „Search...“-Feld oben in diesem Bereich „live preview“ ein. Das oberste Suchergebnis sollte die von Microsoft erstellte [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die enthält, wie es verwendet wird.
4. Drücken Sie die _Installieren_-Taste, um die Erweiterung zu installieren.
5. Wenn Sie nun an einer HTML-Datei im Editor arbeiten, sollten Sie in der Lage sein, auf die Schaltfläche „Vorschau anzeigen“ zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft könnten Sie eine flexiblere lokale Serveroption wünschen, die verwendet werden kann, um Beispiele in jedem Browser zu laden, den Sie haben. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen oft Bilddateien bearbeiten, um sie auf den von ihnen erstellten Websites zu verwenden. Dies kann oft bedeuten, grafische Assets zu entwerfen/zu erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teammitglied oder ein Drittanbieter sein), in welchem Fall der Webentwickler möglicherweise gebeten wird, die erhaltenen Dateien zu zuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen erfordern können, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Es gibt viele Grafikbearbeitungsprogramme. Wir empfehlen, dass Sie kein Geld für ein teures kommerzielles Produkt ausgeben, bis Sie weiter in Ihrer Lernreise sind, _wenn_ Sie das Gefühl haben, dass Sie es wirklich benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die wahrscheinlich für den Moment gut genug sind.

Zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dieses wird hauptsächlich verwendet, um Bilder und PDFs anzuzeigen, hat aber auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich Größenänderung, Drehung, Zuschneiden, Kommentierung und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) kommt mit vielen ähnlichen Funktionen.
- Die [tinypng](https://tinypng.com/) Website bietet einen kostenlosen Dienst, der es Ihnen ermöglicht, PNGs, JPEGs und mehr zu komprimieren. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für die Verwendung auf einer Website durchführen müssen.

Wenn Sie umfangreichere Grafiken bearbeitungs/erstellungsbedürfnisse haben, benötigen Sie ein vollwertiges Grafikpaket. Hinsichtlich kommerzieller Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte relative Newcomer wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/) und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder freie Modi, die es sich lohnt zu erkunden. Es gibt auch einige gut bewertete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontrollwerkzeuge** werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das am häufigsten genutzte Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Auch wenn Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich im Moment nicht darum kümmern. Wir haben ein Modul, das sich [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, nahe dem Ende unserer Core-Module-Serie.

## Site-Deployment-Apps

Nachdem Sie eine Website oder App fertig entwickelt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einem entfernten Webserver platzieren, damit Ihre Benutzer die damit verbundene Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, vom Kauf eines Hostings und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), oder sogar dem schnellen Einrichten einer Demo, um sie mit anderen über etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) zu teilen.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema später im Kurs viele Male betrachten. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
