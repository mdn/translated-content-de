---
title: Installation der Grundsoftware
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

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
          <li>Verstehen, welche Software Sie für den Einstieg benötigen.</li>
          <li>Installation eines Code-Editors, einiger moderner Browser und eines lokalen Testservers.</li>
          <li>Erkundung von Optionen für andere häufige Arten von Anwendungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein angemessener Code-Editor ist eine der wichtigsten Dinge, die jedem Entwickler auf seinem Computer zur Verfügung stehen sollten. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl anderer Funktionen. Wir haben dem Thema Code-Editoren später in der Serie einen eigenen Artikel gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, ein großartiges Funktionsset und Support bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels zu folgen.

## Moderne Webbrowser

Der Zugriff auf moderne Webbrowser ist essentiell für die Webentwicklung, damit Sie Ihre Webseiten oder Apps in den Browsern testen können, die Ihre Besucher zur Nutzung verwenden. Sie müssen auch Ihre Webbrowser auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitskorrekturen angewendet wurden.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und die Änderungen beim Neustart anzuwenden. Sie können normalerweise auf der "Über"-Seite des Browsers nach Updates suchen, zum Beispiel im Menü unter _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder das Menüsymbol > _Hilfe_ > _Über Firefox_ oder das Menüsymbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Gerät-Browser installieren, um Ihren Code zu testen. Am häufigsten werden Sie Webbrowser auf Desktop-, Laptop- und Mobilgeräten antreffen, aber Sie werden auch auf Webbrowser auf anderen Geräten wie Tablets, Uhren und Fernsehern stoßen. Wenn möglich, stellen Sie sicher, dass Sie von jeder Kategorie einen Browser installiert und verfügbar zum Testen haben (damit Sie nicht nur in mehreren Browsern basierend auf der gleichen Rendering-Engine testen):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerät-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine unter der Haube aufgrund der App-Store-Regeln von Apple angetrieben. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund von Regulierungsänderungen. Siehe [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die zur Darstellung der Seite in Ihrem Browser kombiniert werden, von einem Remote-Webserver abgerufen, der auf einem Servercomputer irgendwo anders auf der Welt gehostet wird. Sie werden mehr darüber erfahren, wie dies im nächsten Artikel der Serie funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie häufig die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie in Visual Studio Code wie folgt vor:

1. Öffnen Sie das _Erweiterungen_-Fenster, indem Sie die Menüoption _Ansicht_ > _Erweiterungen_ verwenden.
2. Geben Sie in das "Suche..."-Feld oben in diesem Fenster "live preview" ein. Das oberste Suchergebnis sollte die von Microsoft erstellte [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)-Erweiterung sein.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, wie sie verwendet wird.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Jetzt sollten Sie, wenn Sie an einer HTML-Datei im Editor arbeiten, in der Lage sein, auf die Schaltfläche "Vorschau anzeigen" zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In der Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption haben, die zum Laden von Beispielen in jedem Browser verwendet werden kann, den Sie besitzen. Für weitere Optionen (und mehr Hintergrundinformationen, warum lokale Server notwendig sind), sehen Sie [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler müssen häufig Bilddateien für die Verwendung auf den von ihnen erstellten Webseiten bearbeiten. Dies kann oft das Entwerfen/Erstellen von grafischen Assets bedeuten, die Grafiken werden jedoch ebenso oft von einem Grafikdesigner bereitgestellt (dies kann ein Teammitglied oder ein Dritter sein), in welchem Fall der Webentwickler aufgefordert werden kann, die erhaltenen Dateien zuzuschneiden oder deren Größe zu ändern.

Keine der Lernartikel auf MDN verlangt von Ihnen, eigene Grafiken zu erstellen, obwohl einige von ihnen erfordern können, dass Sie die von uns bereitgestellten Dateien bearbeiten.

Es gibt viele Werkzeuge zur Grafikbearbeitung. Wir würden empfehlen, dass Sie kein Geld für ein teures kommerzielles Produkt ausgeben, bis Sie weiter in Ihrer Lernreise fortgeschritten sind, _falls_ Sie das Gefühl haben, dass Sie es wirklich benötigen. Es gibt viele kostenlose Softwaretools und Online-Dienste, die wahrscheinlich vorerst ausreichend sind.

Zum Beispiel:

- macOS wird mit einem Tool namens [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Es wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, verfügt jedoch auch über einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, darunter Größenänderung, Rotation, Zuschneiden, Annotation und Konvertierung zwischen verschiedenen Dateitypen.
- Die eingebaute Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Assets für die Verwendung auf einer Website vorbereiten.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsanforderungen haben, benötigen Sie ein vollständiges Grafikpaket. In Bezug auf kommerzielle Angebote war [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lange Zeit der Industriestandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icons und UI-Arbeiten geeignet sind. Es gibt auch beliebte Neulinge wie [Figma](https://www.figma.com/), [The Affinity Suite](https://affinity.serif.com/en-us/) und [Canva](https://www.canva.com/).

Falls Ihr Budget eingeschränkt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es sich lohnt zu erkunden. Es gibt auch einige gut betrachtete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zu kollaborieren, Code und Ressourcen zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich im Moment keine Sorgen darüber machen. Wir haben ein Modul, das sich dem Thema [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) am Ende unserer Kernmodule-Serie widmet.

## Website-Bereitstellungs-Apps

Nachdem Sie eine Website oder App fertiggestellt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einen Remote-Webserver übertragen, damit Ihre Benutzer die zugehörige Webadresse eingeben und sie im Web sehen können!

Es gibt verschiedene Möglichkeiten, wie Sie dies tun können: durch den Kauf von Hosting und die Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), oder sogar durch das Einrichten eines schnellen Demos, um es mit anderen zu teilen, indem Sie etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) verwenden.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt noch nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema viele Male im Laufe des Kurses behandeln. Sie werden bald genug praktische Erfahrung damit sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
