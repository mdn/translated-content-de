---
title: Installation von grundlegender Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 34e4f9a1e1d492f79d5b87709539df9b571419cc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung zu betreiben, und was Sie jetzt installieren sollten, einschließlich eines Code-Editors und einiger moderner Webbrowser.

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
          <li>Verstehen, welche Software Sie benötigen, um anzufangen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere häufige Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eines der wichtigsten Werkzeuge, die jeder Entwickler auf seinem Rechner verfügbar haben sollte. Neben dem eigentlichen Schreibprozess des Codes bieten Code-Editoren eine Vielzahl weiterer Funktionen an. Wir haben einen ganzen Artikel zu Code-Editoren später in der Serie gewidmet.

Für den Moment empfehlen wir, dass Sie [Visual Studio Code](https://code.visualstudio.com/) installieren, da es plattformübergreifend verfügbar ist, eine großartige Ausstattung und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um den Rest dieses Artikels nachvollziehen zu können.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben, ist entscheidend für die Webentwicklung, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher nutzen, um auf sie zuzugreifen. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet haben.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der „Über“-Seite des Browsers nach Updates suchen, z. B. verfügbar im Menü _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder das Menü-Symbol > _Hilfe_ > _Über Firefox_ oder Menü-Symbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Im Moment sollten Sie ein paar Desktop- und mobile/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Am häufigsten stoßen Sie auf Webbrowser auf Desktop-, Laptop- und Mobilgeräten, aber Sie werden auch auf Webbrowser auf anderen Geräten wie Tablets, Uhren und Fernsehern stoßen. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Linie installiert und verfügbar haben, um darauf zu testen (sodass Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/browsers/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, waren aber historisch gesehen alle mit der WebKit-Engine von Apple aufgrund der App-Store-Regeln von Apple betrieben. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund regulatorischer Änderungen. Siehe [Apple ermöglicht endlich die vollständige Version von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser zusammengeführt werden, um diese Website darzustellen, von einem entfernten Webserver abgerufen, der auf einem Serverrechner irgendwo auf der Welt gehostet wird. Sie lernen mehr darüber, wie dies funktioniert, im nächsten Artikel der Serie.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung – auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie wie folgt vor in Visual Studio Code:

1. Öffnen Sie den _Erweiterungen_-Bereich mithilfe der Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Suchfeld „Search...“ oben in diesem Bereich „live preview“ ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)-Erweiterung von Microsoft sein.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, die erklärt, wie sie verwendet wird.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Wenn Sie jetzt an einer HTML-Datei im Editor arbeiten, sollten Sie auf die Schaltfläche „Vorschau anzeigen“ klicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht besonders flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption verfügbar machen, die verwendet werden kann, um Beispiele in jedem Browser zu laden, den Sie zur Verfügung haben. Weitere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind) finden Sie unter [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafik-Editoren

Webentwickler müssen häufig Bilddateien für die Verwendung auf den von ihnen erstellten Websites bearbeiten. Dies kann oft das Entwerfen/Erstellen von Grafikmaterialien bedeuten, aber genauso oft werden die Grafiken von einem Grafikdesigner zur Verfügung gestellt (dies könnte ein Teamkollege oder ein Dritter sein), in diesem Fall kann der Webentwickler aufgefordert werden, die erhaltenen Dateien zuzuschneiden oder zu skalieren.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise erfordern, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Es gibt viele Grafikbearbeitungswerkzeuge. Wir würden empfehlen, dass Sie kein Geld für ein teures kommerzielles Produkt ausgeben, bis Sie weiter in Ihrer Lernreise fortgeschritten sind, _wenn_ Sie das Gefühl haben, dass Sie es wirklich brauchen. Es gibt viele kostenlose Softwarewerkzeuge und Online-Dienste, die wahrscheinlich vorerst ausreichend sind.

Zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, umfasst jedoch auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich Größenänderung, Drehung, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows-[Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Webseite [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie ausführen müssen, wenn Sie Materialien für die Verwendung auf einer Website vorbereiten.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsbedürfnisse haben, benötigen Sie ein vollständiges Grafikpaket. In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte relative Neuzugänge wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/), und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut bewertete kostenlose Apps, wie z.B. [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zusammenzuarbeiten, Code und Ressourcen zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unverzichtbar sind, müssen Sie sich jetzt noch keine Gedanken darüber machen. Wir haben ein Modul, das der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) gewidmet ist, nahe dem Ende unserer Kernmodule-Serie.

## Site-Bereitstellungs-Apps

Nachdem Sie eine Website oder App fertiggestellt haben (auf Ihrem lokalen Rechner oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einen Remote-Webserver stellen, damit Ihre Benutzer die damit verbundene Webadresse eingeben und sie im Internet ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von der Anschaffung von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), der Verwendung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), oder sogar der Einrichtung einer schnellen Demo, die Sie mit anderen mit etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) teilen können.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge – Sie müssen jetzt noch nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema später im Kurs viele Male behandeln. Sie werden bald praktische Erfahrungen damit sammeln, in unserem [Ihr erstes Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
