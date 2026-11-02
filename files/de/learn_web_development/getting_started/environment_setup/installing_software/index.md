---
title: Grundlegende Software installieren
short-title: Software installieren
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel erfahren Sie, welche Software Sie für die einfache Webentwicklung benötigen und was Sie jetzt installieren sollten, darunter einen Code-Editor und einige moderne Webbrowser.

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
          <li>Verstehen, welche Software Sie für den Einstieg benötigen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Weitere gängige Arten von Anwendungen kennenlernen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor gehört zu den wichtigsten Werkzeugen, die Entwickelnde auf ihrem Computer benötigen. Sie schreiben darin nicht nur Ihren Code: Code-Editoren bieten auch zahlreiche weitere Funktionen. Weiter hinten in dieser Artikelreihe widmen wir Code-Editoren einen eigenen Artikel.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren. Es ist für verschiedene Plattformen verfügbar, bietet viele Funktionen und guten Support und ist der Editor, den wir überwiegend verwenden. Installieren Sie ihn jetzt, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Für die Webentwicklung benötigen Sie moderne Webbrowser, damit Sie Ihre Websites oder Apps in den Browsern testen können, mit denen Ihre Besucher darauf zugreifen. Halten Sie Ihre Webbrowser außerdem aktuell, damit sie die neuesten Webtechnologien unterstützen und über die neuesten Sicherheitskorrekturen verfügen.

Den folgenden Browsern werden Sie am häufigsten begegnen:

- Desktop-Browser:
  - Auf [Chromium](<https://en.wikipedia.org/wiki/Chromium_(web_browser)>) basierend: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Auf [Gecko](<https://en.wikipedia.org/wiki/Gecko_(software)>) basierend: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - Auf [WebKit](https://en.wikipedia.org/wiki/WebKit) basierend: [Apple Safari](https://www.apple.com/safari/).
- Browser für Mobilgeräte und andere Geräte:
  - Auf Chromium basierend (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Auf Gecko basierend (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - Auf WebKit basierend (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben genannten Android-Browser gibt es auch für iOS. Aufgrund der Regeln für Apples App Store verwendeten diese Versionen jedoch lange Zeit alle Apples WebKit-Engine. Zum Zeitpunkt der Erstellung dieses Artikels beginnen Browserhersteller aufgrund regulatorischer Änderungen damit, iOS-Versionen auf Grundlage ihrer eigenen Rendering-Engines zu entwickeln. Siehe [Apple erlaubt endlich vollwertige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser installieren Updates automatisch und übernehmen die Änderungen beim Neustart. Ob Updates verfügbar sind, können Sie normalerweise auf der „Über“-Seite des Browsers prüfen. Wo Sie diese finden, unterscheidet sich je nach Browser und Betriebssystem etwas, zum Beispiel:

- Firefox: Unter macOS über _Firefox_ > _Über Firefox_ und unter Windows über das Menüsymbol > _Hilfe_ > _Über Firefox_.
- Chrome: Unter macOS über _Chrome_ > _Über Google Chrome_ und unter Windows über das Menüsymbol > _Hilfe_ > _Über Google Chrome_.

### Welche Browser Sie installieren sollten

Installieren Sie zunächst einige Desktop-Browser sowie Browser für Mobilgeräte oder andere Geräte, um Ihren Code darin zu testen. Wählen Sie Browser mit mindestens zwei unterschiedlichen Rendering-Engines (beispielsweise Chromium und Gecko), damit Sie nicht nur mehrere Browser testen, die auf derselben Engine basieren. Das ist wichtig, weil Ihr Code Fehler enthalten kann, die nur eine Rendering-Engine betreffen.

WebKit-basierte Browser sind für Windows, Linux und Android nicht verfügbar. Wenn Sie Ihren Code in allen drei großen Rendering-Engines testen möchten und einen Windows-Computer verwenden, benötigen Sie Zugang zu einem Testgerät mit macOS oder iOS. Alternativ können Sie eine Softwarelösung wie eine virtuelle Maschine oder eine Testplattform nutzen. Umfassende Tests sind in dieser Phase allerdings noch nicht nötig. Für den Moment reicht es, wenn Sie sich bewusst machen, dass Sie Ihren Code mit verschiedenen Rendering-Engines testen sollten, und damit erste Erfahrungen sammeln.

Teststrategien behandeln wir ausführlicher in unserem Modul [Testen](/de/docs/Learn_web_development/Extensions/Testing).

## Lokale Webserver

Wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, aus denen Ihr Browser die Seite zusammensetzt, normalerweise von einem entfernten Webserver abgerufen. Dieser läuft auf einem Servercomputer irgendwo auf der Welt. Wie das funktioniert, erfahren Sie im nächsten Artikel dieser Reihe.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie zum Testen die Haupt-HTML-Datei häufig direkt im Browser öffnen. Einige Beispiele funktionieren jedoch nur, wenn sie über einen lokal installierten Webserver ausgeführt werden.

### Einen lokalen Webserver installieren

Eine der einfachsten Möglichkeiten, einen lokalen Server bereitzustellen, ist eine Erweiterung für den Code-Editor. So können Sie ihn direkt im Editor verwenden. Gehen Sie in Visual Studio Code wie folgt vor:

1. Öffnen Sie den Bereich _Extensions_ über den Menüpunkt _View_ > _Extensions_.
2. Geben Sie oben in diesem Bereich in das Feld „Search...“ den Begriff „live preview“ ein. Das erste Suchergebnis sollte die von Microsoft entwickelte Erweiterung [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) sein.
3. Klicken Sie auf das Ergebnis, um eine Seite mit Informationen zur Erweiterung und ihrer Verwendung zu öffnen.
4. Klicken Sie auf _Install_, um die Erweiterung zu installieren.
5. Wenn Sie nun im Editor an einer HTML-Datei arbeiten, sollten Sie über die Schaltfläche „Show Preview“ eine Live-Vorschau in einem separaten Tab öffnen können.

Diese Lösung ist einfach, aber nicht besonders flexibel. Später möchten Sie vielleicht einen flexibleren lokalen Server verwenden, mit dem Sie Beispiele in jedem Ihrer Browser laden können. Weitere Möglichkeiten und Hintergrundinformationen dazu, warum lokale Server benötigt werden, finden Sie unter [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickelnde müssen häufig Bilddateien für die von ihnen erstellten Websites bearbeiten. Das kann bedeuten, Grafiken zu entwerfen oder zu erstellen. Oft werden die Grafiken aber auch von einer Grafikdesignerin oder einem Grafikdesigner bereitgestellt – möglicherweise aus dem eigenen Team oder von einem externen Anbieter. Dann müssen Webentwickelnde die erhaltenen Dateien gegebenenfalls zuschneiden oder ihre Größe ändern.

Für keinen der Lernartikel auf MDN müssen Sie eigene Grafiken erstellen. In einigen Artikeln müssen Sie jedoch möglicherweise von uns bereitgestellte Dateien bearbeiten.

Wir empfehlen Ihnen, erst dann einen Grafikeditor zu installieren, wenn Sie ihn im weiteren Lernverlauf benötigen. Geben Sie vor allem kein Geld für ein teures kommerzielles Produkt aus, wenn Sie nicht überzeugt sind, dass es Ihnen einen echten Mehrwert bietet.

Es gibt viele kostenlose Programme und Onlinedienste, die vorerst wahrscheinlich ausreichen, zum Beispiel:

- macOS enthält ein Werkzeug namens [Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac). Es dient hauptsächlich zum Anzeigen von Bildern und PDFs, bietet aber auch einige nützliche Funktionen zur Bildbearbeitung: Sie können unter anderem die Größe ändern, Bilder drehen und zuschneiden, Anmerkungen hinzufügen und Dateien in andere Formate umwandeln.
- Die in Windows integrierte [Fotos-App](https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst zum Komprimieren von PNGs, JPEGs und weiteren Dateiformaten. Das ist eine häufige Aufgabe, wenn Sie Dateien für die Verwendung auf einer Website vorbereiten.

Unter den kommerziellen Angeboten gilt [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit Langem als Branchenstandard, insbesondere für die Fotobearbeitung. Programme wie [Sketch](https://www.sketch.com/) eignen sich dagegen besser für die Arbeit an Icons und Benutzeroberflächen. Zu den beliebten neueren Angeboten gehören [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) und [Canva](https://www.canva.com/).

Viele der genannten Anwendungen bieten Testversionen oder kostenlose Nutzungsmodelle, die Sie ausprobieren können. Außerdem gibt es einige angesehene kostenlose Anwendungen, darunter [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://paint.net/).

## Werkzeuge zur Versionsverwaltung

Mit Werkzeugen zur **Versionsverwaltung** verwalten Entwickelnde Dateien auf Servern, arbeiten im Team an Projekten, teilen Code und andere Dateien und vermeiden Konflikte bei der Bearbeitung. [Git](https://git-scm.com/) ist derzeit das beliebteste Versionsverwaltungssystem. Häufig wird es zusammen mit Hostingdiensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/) verwendet.

Werkzeuge zur Versionsverwaltung sind für Webentwicklungsteams unverzichtbar, aber Sie müssen sich jetzt noch nicht damit beschäftigen. Gegen Ende unserer Reihe von Kernmodulen finden Sie ein eigenes Modul zur [Versionsverwaltung](/de/docs/Learn_web_development/Core/Version_control).

## Anwendungen zum Veröffentlichen von Websites

Wenn Sie die Entwicklung einer Website oder App abgeschlossen haben – auf Ihrem eigenen Computer oder vielleicht auf einem Entwicklungsserver –, möchten Sie sie auf einem entfernten Webserver bereitstellen. Dann können Ihre Nutzer die zugehörige Webadresse eingeben und die Website oder App im Web aufrufen.

Dafür gibt es verschiedene Möglichkeiten: Sie können Webhosting erwerben und einen {{Glossary("FTP", "(S)FTP-Client")}} verwenden, einen Dienst wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/) nutzen oder mit [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) eine kurze Demo erstellen, die Sie mit anderen teilen.

Diese Auswahl mag überwältigend wirken, aber keine Sorge: Sie müssen sich jetzt noch nicht mit der Veröffentlichung von Websites auskennen. Wir werden dieses Thema im weiteren Kursverlauf mehrfach aufgreifen. Schon bald sammeln Sie damit praktische Erfahrungen – in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website), insbesondere im Artikel [Ihre Website veröffentlichen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
