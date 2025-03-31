---
title: Installation grundlegender Software
short-title: Software installieren
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen, und was Sie jetzt installieren sollten, einschließlich eines Code-Editors und einiger moderner Webbrowser.

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
          <li>Verstehen, welche Software Sie benötigen, um zu starten.</li>
          <li>Installation eines Code-Editors, einiger moderner Browser und eines lokalen Testservers.</li>
          <li>Erkunden Sie Optionen für andere gängige Arten von Apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eines der wichtigsten Werkzeuge, die ein Entwickler auf seinem Computer haben sollte. Neben dem Schreiben Ihres Codes bietet ein Code-Editor eine Vielzahl weiterer Funktionen. Wir haben später in der Serie einen ganzen Artikel den Code-Editoren gewidmet.

Für den Moment empfehlen wir, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, über ein großartiges Funktionsangebot und Unterstützung verfügt und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Der Zugriff auf moderne Webbrowser ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher nutzen, um darauf zuzugreifen. Sie müssen Ihre Webbrowser auch auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitskorrekturen angewendet sind.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und die Änderungen anzuwenden, wenn sie neu gestartet werden. Sie können in der Regel auf der "Über" Seite des Browsers nach Updates suchen, zum Beispiel verfügbar im Menü unter _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ bei Firefox/Chrome für macOS, oder unter dem Menüsymbol > _Hilfe_ > _Über Firefox_ oder Menüsymbol > _Hilfe_ > _Über Google Chrome_ bei Firefox/Chrome für Windows.

Für den Moment sollten Sie ein paar Desktop- und Mobile-/alternative Gerätebrowser installieren, um Ihren Code darin zu testen. Am häufigsten begegnen Ihnen Webbrowser auf Desktop-, Laptop- und Mobilgeräten, aber Sie werden auch Webbrowser auf anderen Geräten wie Tablets, Uhren und Fernsehern finden. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Richtung installiert haben und darauf testen können (damit Sie nicht nur in mehreren Browsern testen, die auf der gleichen Rendering-Engine basieren):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile-/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine unter der Haube betrieben aufgrund von Apples App Store-Regeln. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund von regulatorischen Änderungen. Siehe [Apple erlaubt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die zur Darstellung dieser Website durch Ihren Browser kombiniert werden, von einem entfernten Webserver abgerufen, der auf einem Servercomputer irgendwo anders auf der Welt gehostet wird. Sie lernen, wie dies in dem nächsten Artikel der Serie funktioniert.

Beim Erstellen einer Website lokal (auf Ihrem eigenen Computer) können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Allerdings müssen einige Beispiele über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Möglichkeiten, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung - auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie in Visual Studio Code wie folgt vor:

1. Öffnen Sie den Bereich _Erweiterungen_ über die Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie in das "Suchen..."-Feld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung, erstellt von Microsoft, sein.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, einschließlich Anweisungen zur Verwendung.
4. Drücken Sie die _Installieren_ Schaltfläche, um die Erweiterung zu installieren.
5. Nun sollten Sie beim Arbeiten an einer HTML-Datei im Editor in der Lage sein, die "Vorschau anzeigen" Schaltfläche zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie vielleicht eine flexiblere Option für einen lokalen Server, der dazu verwendet werden kann, Beispiele in jedem Ihrer Browser zu laden. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler sind oft gefordert, Bilddateien für die von ihnen erstellten Websites zu bearbeiten. Dies kann bedeuten, grafische Elemente zu entwerfen/erstellen, aber ebenso werden die Grafiken oft von einem Grafikdesigner bereitgestellt (dies kann ein Teammitglied oder eine dritte Person sein), in welchem Fall der Webentwickler möglicherweise gebeten wird, die erhaltenen Dateien zu zuschneiden oder zu ändern.

Keiner der Lernartikel auf MDN erfordert von Ihnen, Ihre eigenen Grafiken zu erstellen, obwohl einige von ihnen möglicherweise erfordern, die bereitgestellten Dateien zu bearbeiten.

Es gibt viele Grafikbearbeitungswerkzeuge. Wir empfehlen, nicht in ein teures kommerzielles Produkt zu investieren, bis Sie weiter in Ihrem Lernprozess sind, _falls_ Sie wirklich glauben, es zu benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die jetzt wahrscheinlich ausreichend sein werden.

Zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dies wird hauptsächlich für das Anzeigen von Bildern und PDFs verwendet, hat aber auch einige wirklich nützliche Funktionen zur Bildbearbeitung, einschließlich Größenanpassung, Drehen, Zuschneiden, Anmerkungen und Konvertierung zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für eine Website erledigen müssen.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsmöglichkeiten benötigen, möchten Sie ein vollwertiges Grafikpaket. Im kommerziellen Bereich ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte relativ neue Anbieter wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/), und [Canva](https://www.canva.com/).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige hoch angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zu arbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwickler-Teams unerlässlich sind, brauchen Sie sich jetzt noch keine Sorgen darüber zu machen. Wir haben ein Modul, das der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) gewidmet ist, am Ende unserer Kernmodulserie.

## Website-Deploy-Apps

Nachdem Sie die Entwicklung einer Website oder App abgeschlossen haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einem Remote-Webserver platzieren, damit Ihre Nutzer die Webadresse eingeben und sie im Web anzeigen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von dem Kauf von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zu einem schnellen Demo-Setup, das Sie mit anderen teilen können, indem Sie etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) verwenden.

Eine solche Liste von Optionen kann überwältigend erscheinen, aber keine Sorge – Sie brauchen jetzt nichts über die Veröffentlichung von Websites zu wissen. Wir werden dieses Thema später im Kurs noch viele Male behandeln. Sie werden bald genug praktische Erfahrung damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
