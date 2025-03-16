---
title: Installation von grundlegender Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 161981d722b1811ffdc9d5a1325600bfcec1c4bd
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie für einfache Webentwicklung benötigen und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit dem Betriebssystem Ihres Computers.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um loszulegen.</li>
          <li>Installieren eines Code-Editors, einiger moderner Browser und eines lokalen Testservers.</li>
          <li>Erforschen von Optionen für andere gängige App-Typen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eine der wichtigsten Ressourcen, die ein Entwickler auf seinem Rechner zur Verfügung haben sollte. Neben dem Schreiben des Codes bieten Code-Editoren eine Vielzahl weiterer Funktionalitäten. Wir haben diesem Thema später in der Serie einen eigenen Artikel gewidmet.

Vorerst empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, über eine großartige Ausstattung und Unterstützung verfügt und der Editor ist, den wir hauptsächlich verwenden. Sie sollten diesen jetzt installieren, um den Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Der Zugriff auf moderne Webbrowser ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps auf den Browsern testen können, die Ihre Besucher verwenden, um auf sie zuzugreifen. Sie müssen Ihre Webbrowser auch aktualisiert halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates enthalten.

> [!NOTE]
> Die meisten Browser installieren Updates automatisch und wenden die Änderungen an, wenn sie neu gestartet werden. Sie können normalerweise auf der Browser-Seite "Über" nach Updates suchen, z.B. im Menü unter _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder das Menüsymbol > _Hilfe_ > _Über Firefox_ oder Menüsymbol > _Hilfe_ > _Über Google Chrome_ auf Firefox/Chrome für Windows.

Fürs Erste sollten Sie ein paar Desktop- und mobile/alternative Browser installieren, um Ihren Code zu testen. Webbrowser findet man am häufigsten auf Desktops, Laptops und mobilen Geräten, aber auch auf anderen Geräten wie Tablets, Uhren und Fernsehgeräten. Wenn möglich, stellen Sie sicher, dass Sie einen Browser aus jeder Reihe installiert und zum Testen verfügbar haben (so dass Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren):

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Gerätebrowser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben genannten Android-Browser haben iOS-Versionen, die aber historisch gesehen alle von Apples WebKit Engine angetrieben wurden, aufgrund der Regeln des Apple App Stores. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund von Regulierungsänderungen. Siehe [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die kombiniert werden, um diese Seite anzuzeigen, von einem entfernten Webserver abgerufen, der sich auf einem anderen Servercomputer irgendwo auf der Welt befindet. Sie werden mehr darüber lernen, wie das funktioniert, im nächsten Artikel dieser Serie.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung – auf diese Weise ist sie direkt in Ihrem Code-Editor verfügbar. Gehen Sie folgendermaßen in Visual Studio Code vor:

1. Öffnen Sie den _Erweiterungen_-Bereich über die Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im "Suche..."-Feld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die von Microsoft erstellte [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die erklärt, wie Sie sie verwenden.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Jetzt sollten Sie, wenn Sie an einer HTML-Datei im Editor arbeiten, die Schaltfläche "Show Preview" anklicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption verwenden, die verwendet werden kann, um Beispiele in jedem Browser zu laden, den Sie haben. Für weitere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler werden oft dazu aufgefordert, Bilddateien für die Nutzung auf den von ihnen erstellten Websites zu bearbeiten. Dies kann häufig bedeuten, dass sie grafische Ressourcen entwerfen/erstellen, aber auch, dass die Grafiken oft von einem Grafikdesigner bereitgestellt werden (dies könnte ein Teammitglied oder ein Dritter sein), in welchem Fall der Webentwickler möglicherweise beauftragt wird, die empfangenen Dateien zuzuschneiden oder deren Größe zu ändern.

Keiner der Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige von ihnen möglicherweise verlangen, dass Sie die Dateien bearbeiten, die wir bereitstellen.

Es gibt viele Werkzeuge zur Bildbearbeitung. Wir würden Ihnen empfehlen, kein Geld für ein teures kommerzielles Produkt auszugeben, bis Sie weiter in Ihrer Lernreise vorangeschritten sind, _falls_ Sie das Gefühl haben, es wirklich zu benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die für den Moment wahrscheinlich ausreichen.

Zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dieses wird hauptsächlich zum Betrachten von Bildern und PDFs verwendet, hat aber auch einige wirklich nützliche Funktionen zur Bildbearbeitung, einschließlich Größenänderung, Drehung, Zuschneiden, Kommentieren und Konvertierung zwischen verschiedenen Dateitypen.
- Die eingebaute Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/) Website bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie erledigen müssen, wenn Sie Assets für die Nutzung auf einer Website vorbereiten.

Wenn Sie umfangreichere Anforderungen an die Erstellung/Bearbeitung von Grafiken haben, benötigen Sie ein vollwertiges Grafikpaket. In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte, relativ neue Anbieter wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/), und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, bieten die meisten der oben genannten Apps Testversionen oder kostenlose Modi an, die es wert sind, erkundet zu werden. Es gibt auch einige hoch angesehene kostenlose Apps, wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/), und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt mit einem Team zusammenzuarbeiten, Code und Ressourcen zu teilen und Bearbeitungskonflikte zu vermeiden. Zurzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unerlässlich sind, müssen Sie sich jetzt noch keine Sorgen darüber machen. Wir haben ein Modul, das sich mit [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) am Ende unserer Core-Module-Serie beschäftigt.

## Site-Deployment-Apps

Nachdem Sie die Entwicklung einer Website oder einer App (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver) abgeschlossen haben, möchten Sie diese auf einen entfernten Webserver übertragen, damit Ihre Benutzer die mit ihr verknüpfte Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, angefangen beim Kauf von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zur Einrichtung einer schnellen Demo zum Teilen mit anderen, indem Sie etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/) verwenden.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge – Sie müssen jetzt nichts über die Veröffentlichung von Websites wissen. Wir werden uns diesem Thema viele Male später im Kurs widmen. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
