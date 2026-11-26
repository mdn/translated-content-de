---
title: Grundlegende Software installieren
short-title: Software installieren
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 51f9f1329e9d05233d39daaa9d5e4f89d77e57b5
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel erfahren Sie, welche Software Sie für die einfache Webentwicklung benötigen und was Sie jetzt installieren sollten, darunter einen Code-Editor und einige moderne Webbrowser.

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
          <li>Verstehen, welche Software Sie für den Einstieg benötigen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für weitere gängige Arten von Anwendungen kennenlernen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor gehört zu den wichtigsten Werkzeugen, die Entwickler auf ihrem Computer benötigen. Er dient nicht nur zum Schreiben von Code, sondern bietet auch zahlreiche weitere Funktionen. Später in dieser Artikelreihe widmen wir Code-Editoren einen eigenen Artikel.

Vorerst empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren. Der Editor ist für verschiedene Plattformen verfügbar, bietet viele Funktionen und guten Support und ist der Editor, den wir hauptsächlich verwenden. Installieren Sie ihn jetzt, damit Sie den weiteren Schritten in diesem Artikel folgen können.

## Moderne Webbrowser

Für die Webentwicklung sind moderne Webbrowser unerlässlich. Damit können Sie Ihre Websites oder Anwendungen in den Browsern testen, mit denen Ihre Besucher darauf zugreifen. Halten Sie Ihre Webbrowser außerdem auf dem neuesten Stand, damit sie aktuelle Webtechnologien unterstützen und die neuesten Sicherheitskorrekturen erhalten.

Die gängigsten Browser sind:

- Desktop-Browser:
  - Auf [Chromium](<https://en.wikipedia.org/wiki/Chromium_(web_browser)>) basierend: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Auf [Gecko](<https://en.wikipedia.org/wiki/Gecko_(software)>) basierend: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - Auf [WebKit](https://en.wikipedia.org/wiki/WebKit) basierend: [Apple Safari](https://www.apple.com/safari/).
- Browser für Mobilgeräte und andere Geräte:
  - Auf Chromium basierend (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Auf Gecko basierend (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - Auf WebKit basierend (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser gibt es auch für iOS. Aufgrund der Regeln für Apples App Store verwendeten diese Versionen jedoch lange Zeit alle die WebKit-Engine von Apple. Zum Zeitpunkt der Erstellung dieses Artikels beginnen Browseranbieter infolge regulatorischer Änderungen damit, iOS-Versionen auf Basis ihrer eigenen Rendering-Engines zu entwickeln. Weitere Informationen finden Sie unter [Apple erlaubt endlich, dass vollständige Versionen von Chrome und Firefox auf dem iPhone laufen](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser installieren Updates automatisch und übernehmen die Änderungen beim nächsten Neustart. Ob Updates verfügbar sind, können Sie in der Regel auf der „Über“-Seite des Browsers prüfen. Je nach Browser und Betriebssystem finden Sie diese an unterschiedlichen Stellen, zum Beispiel:

- Firefox: Unter macOS über _Firefox_ > _Über Firefox_ und unter Windows über das Menüsymbol > _Hilfe_ > _Über Firefox_.
- Chrome: Unter macOS über _Chrome_ > _Über Google Chrome_ und unter Windows über das Menüsymbol > _Hilfe_ > _Über Google Chrome_.

### Welche Browser Sie installieren sollten

Installieren Sie zunächst einige Browser für Desktop-Computer sowie für Mobilgeräte oder andere Geräte, um Ihren Code darin zu testen. Wählen Sie Browser mit mindestens zwei unterschiedlichen Rendering-Engines aus, beispielsweise Chromium und Gecko. So testen Sie nicht nur in mehreren Browsern, die auf derselben Engine basieren. Das ist wichtig, weil Ihr Code Fehler enthalten kann, die nur eine bestimmte Rendering-Engine betreffen.

WebKit-basierte Browser sind für Windows, Linux und Android nicht verfügbar. Wenn Sie Ihren Code in allen drei wichtigen Rendering-Engines testen möchten und einen Windows-Computer verwenden, benötigen Sie Zugriff auf ein Testgerät mit macOS oder iOS. Alternativ können Sie eine Softwarelösung wie eine virtuelle Maschine oder eine Testplattform nutzen. Umfassende Tests sind zu diesem Zeitpunkt allerdings noch nicht nötig. Vorerst reicht es, wenn Sie wissen, dass Sie Ihren Code mit verschiedenen Rendering-Engines testen sollten, und damit etwas Übung sammeln.

Teststrategien behandeln wir ausführlicher in unserem Modul [Testen](/de/docs/Learn_web_development/Extensions/Testing).

## Lokale Webserver

Wenn Sie eine Webadresse in einen Browser eingeben, um eine Website aufzurufen, werden die Dateien, aus denen der Browser die Seite darstellt, normalerweise von einem entfernten Webserver abgerufen. Dieser läuft auf einem Servercomputer, der sich irgendwo auf der Welt befinden kann. Wie das funktioniert, erfahren Sie im nächsten Artikel dieser Reihe.

Wenn Sie eine Website lokal auf Ihrem eigenen Computer erstellen, können Sie die Haupt-HTML-Datei häufig direkt im Browser öffnen, um sie zu testen. Manche Beispiele funktionieren jedoch nur, wenn Sie sie über einen lokal installierten Webserver aufrufen.

### Einen lokalen Webserver installieren

Eine der einfachsten Möglichkeiten, einen lokalen Server bereitzustellen, ist eine Erweiterung für den Code-Editor. So steht Ihnen der Server direkt im Editor zur Verfügung. Gehen Sie in Visual Studio Code wie folgt vor:

1. Öffnen Sie den Bereich _Extensions_ über das Menü _View_ > _Extensions_.
2. Geben Sie oben in diesem Bereich in das Feld „Search...“ den Begriff „live preview“ ein. Das erste Suchergebnis sollte die von Microsoft entwickelte Erweiterung [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) sein.
3. Klicken Sie auf dieses Ergebnis, um eine Seite mit Informationen zur Erweiterung und ihrer Verwendung zu öffnen.
4. Klicken Sie auf _Install_, um die Erweiterung zu installieren.
5. Wenn Sie nun eine HTML-Datei im Editor bearbeiten, können Sie über die Schaltfläche „Show Preview“ eine Live-Vorschau in einem separaten Tab öffnen.

Diese Lösung ist einfach, aber nicht besonders flexibel. Später möchten Sie vielleicht einen flexibleren lokalen Server verwenden, mit dem Sie Beispiele in jedem Ihrer Browser aufrufen können. Weitere Möglichkeiten und Hintergrundinformationen dazu, warum lokale Server erforderlich sind, finden Sie unter [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler müssen häufig Bilddateien für die Websites bearbeiten, die sie erstellen. Dazu kann das Entwerfen oder Erstellen von Grafiken gehören. Oft werden die Grafiken aber auch von Grafikdesignern bereitgestellt – etwa von einem Teammitglied oder einem externen Dienstleister. In diesem Fall müssen Webentwickler die erhaltenen Dateien möglicherweise zuschneiden oder ihre Größe ändern.

Für keinen der Lernartikel auf MDN müssen Sie eigene Grafiken erstellen. Bei einigen Artikeln müssen Sie jedoch möglicherweise die von uns bereitgestellten Dateien bearbeiten.

Wir empfehlen Ihnen, erst dann einen Grafikeditor zu installieren, wenn Sie ihn später tatsächlich benötigen. Geben Sie auf keinen Fall Geld für ein teures kommerzielles Produkt aus, wenn Sie nicht überzeugt sind, dass es Ihnen einen Mehrwert bietet.

Es gibt viele kostenlose Programme und Onlinedienste, die vorerst wahrscheinlich ausreichen, zum Beispiel:

- macOS enthält ein Programm namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac). Es wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, bietet aber auch nützliche Funktionen zur Bildbearbeitung. Dazu gehören das Ändern der Größe, Drehen, Zuschneiden, Hinzufügen von Anmerkungen und Konvertieren zwischen verschiedenen Dateitypen.
- Die in Windows integrierte [Fotos-App](https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst zum Komprimieren von PNGs, JPEGs und weiteren Dateitypen. Das Komprimieren ist eine sehr häufige Aufgabe, wenn Sie Dateien für die Verwendung auf einer Website vorbereiten.

Unter den kommerziellen Angeboten gilt [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit Langem als Branchenstandard, insbesondere für die Fotobearbeitung. Programme wie [Sketch](https://www.sketch.com/) eignen sich dagegen besser für die Gestaltung von Icons und Benutzeroberflächen. Zu den beliebten neueren Angeboten gehören [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) und [Canva](https://www.canva.com/).

Für die meisten dieser Anwendungen gibt es Testversionen oder kostenlose Nutzungsmodelle, die sich auszuprobieren lohnen. Daneben gibt es anerkannte kostenlose Anwendungen wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://paint.net/).

## Versionsverwaltungstools

Entwickler verwenden **Versionsverwaltungstools**, um Dateien auf Servern zu verwalten, im Team an Projekten zusammenzuarbeiten, Code und andere Dateien zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionsverwaltungssystem. Häufig wird es zusammen mit Hostingdiensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/) verwendet.

Versionsverwaltungstools sind für Webentwicklungsteams unverzichtbar, aber Sie müssen sich noch nicht damit beschäftigen. Gegen Ende unserer Reihe von Grundlagenmodulen finden Sie ein eigenes Modul zur [Versionsverwaltung](/de/docs/Learn_web_development/Core/Version_control).

## Anwendungen zur Veröffentlichung von Websites

Wenn Sie die Entwicklung einer Website oder Anwendung abgeschlossen haben – auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver –, möchten Sie sie auf einem entfernten Webserver bereitstellen. Dann können Benutzer die zugehörige Webadresse eingeben und die Website im Web aufrufen.

Dafür gibt es verschiedene Möglichkeiten: Sie können Webhosting buchen und einen {{Glossary("FTP", "(S)FTP-Client")}} verwenden, einen Dienst wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/) nutzen oder mit [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) schnell eine Demo erstellen, die Sie mit anderen teilen können.

Diese Auswahl mag zunächst überwältigend wirken. Keine Sorge: Sie müssen im Moment noch nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema im weiteren Verlauf des Kurses mehrfach aufgreifen. Erste praktische Erfahrungen sammeln Sie schon bald in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website), insbesondere im Artikel [Ihre Website veröffentlichen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
