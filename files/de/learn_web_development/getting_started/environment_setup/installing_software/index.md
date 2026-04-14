---
title: Installation von grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: ac12900a68c677e6c2f7ed0c7b7d32881e42003d
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen und was Sie jetzt installieren sollten, einschließlich eines Code-Editors und einiger moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem (OS).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie zum Start benötigen.</li>
          <li>Installieren Sie einen Code-Editor, einige moderne Browser und einen lokalen Testserver.</li>
          <li>Erkunden Sie Optionen für andere häufige Arten von Apps.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein vernünftiger Code-Editor ist eines der wichtigsten Dinge, die jedem Entwickler auf seinem Rechner zur Verfügung stehen sollten. Neben dem Ort, an dem Sie Ihren Code schreiben, verfügen Code-Editoren über eine Vielzahl anderer Funktionen. Wir haben einen ganzen Artikel über Code-Editoren im weiteren Verlauf der Serie gewidmet.

Für den Moment empfehlen wir Ihnen, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, ein großartiges Funktionsset und Support hat und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dies jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Moderne Webbrowser verfügbar zu haben, ist unerlässlich für die Webentwicklung, damit Sie Ihre Websites oder Apps in denjenigen Browsern testen können, die Ihre Besucher verwenden, um auf sie zuzugreifen. Sie müssen Ihre Webbrowser auch auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet sind.

Die gängigsten Browser, die Sie antreffen werden, sind wie folgt:

- Desktop-Browser:
  - Auf [Chromium](<https://en.wikipedia.org/wiki/Chromium_(web_browser)>)-basiert: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Auf [Gecko](<https://en.wikipedia.org/wiki/Gecko_(software)>)-basiert: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - Auf [WebKit](https://en.wikipedia.org/wiki/WebKit)-basiert: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium-basiert (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko-basiert (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - WebKit-basiert (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben genannten Android-Browser haben auch iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine unter der Haube angetrieben aufgrund von Apples App Store-Regeln. Zum Zeitpunkt des Schreibens beginnen Browser, Versionen ihrer iOS-Browser basierend auf ihren eigenen Rendering-Engines zu erstellen, aufgrund regulatorischer Änderungen. Siehe [Apple erlaubt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser neigen dazu, Updates automatisch zu installieren, und wenden die Änderungen an, wenn sie neu gestartet werden. Sie können normalerweise nach Updates auf der "Über"-Seite des Browsers suchen. Diese ist an leicht unterschiedlichen Stellen in verschiedenen Browsern und Betriebssystemen verfügbar, zum Beispiel:

- Firefox: Verfügbar unter _Firefox_ > _Über Firefox_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Firefox_ unter Windows.
- Chrome: Verfügbar unter _Chrome_ > _Über Google Chrome_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Google Chrome_ unter Windows.

### Welche Browser zu installieren sind

Für den Moment sollten Sie ein paar Desktop- und mobile/alternative Geräte-Browser installieren, um Ihren Code darin zu testen. Installieren Sie Browser basierend auf mindestens zwei verschiedenen Rendering-Engines (zum Beispiel Chromium und Gecko), sodass Sie nicht nur in mehreren Browsern basierend auf derselben Rendering-Engine testen. Dies ist wichtig, da Ihr Code Bugs enthalten kann, die nur eine Rendering-Engine betreffen.

WebKit-basierte Browser sind für Windows-, Linux- und Android-Betriebssysteme nicht verfügbar. Wenn Sie Ihren Code in allen drei Haupt-Rendering-Engines testen möchten und Ihr Computer Windows-basiert ist, müssen Sie Zugang zu einem macOS- oder iOS-basierten Testgerät erhalten oder eine softwarebasierte Lösung wie eine virtuelle Maschine oder Plattform verwenden. Sie müssen sich in diesem Stadium jedoch keine Sorgen um umfassendes Testen machen — festzustellen, dass Sie Ihren Code über unterschiedliche Rendering-Engines hinweg testen sollten und etwas Übung zu bekommen, ist jetzt ausreichend.

Sie werden sich im Detail mit Teststrategien in unserem [Testing](/de/docs/Learn_web_development/Extensions/Testing) Modul befassen.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einem Browser eingeben, um eine Website zu laden, werden die Dateien, die zusammenkommen, um die Seite in Ihrem Browser darzustellen, von einem entfernten Webserver abgerufen, der auf einem anderen Rechner weltweit gehostet wird. Sie werden im nächsten Artikel der Serie mehr darüber erfahren, wie das funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie häufig die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Einige Beispiele müssen jedoch über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Gehen Sie folgendermaßen vor in Visual Studio Code:

1. Öffnen Sie den _Erweiterungen_-Bereich über die Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im "Suche..."-Feld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung sein, erstellt von Microsoft.
3. Klicken Sie auf diese Option, um eine Seite mit Informationen darüber zu öffnen, die auch Anweisungen zur Nutzung enthält.
4. Drücken Sie die _Installieren_-Taste, um die Erweiterung zu installieren.
5. Jetzt, wenn Sie an einer HTML-Datei im Editor arbeiten, sollten Sie auf die Schaltfläche "Vorschau anzeigen" klicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In Zukunft möchten Sie möglicherweise eine flexiblere lokale Serveroption, die genutzt werden kann, um Beispiele in jedem Browser zu laden, den Sie haben. Für andere Optionen (und mehr Hintergrundinformationen, warum lokale Server notwendig sind), siehe [Wie richten Sie einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler müssen oft Bilddateien manipulieren für die Nutzung auf den von ihnen erstellten Websites. Dies kann häufig bedeuten, grafische Assets zu entwerfen/erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner bereitgestellt (dies könnte ein Teamkollege oder ein Drittanbieter sein), in welchem Fall der Webentwickler möglicherweise aufgefordert wird, die Dateien, die sie erhalten, zuzuschneiden oder in der Größe zu ändern.

Kein Lernartikel auf MDN erfordert, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige erfordern könnten, dass Sie die Dateien manipulieren, die wir bereitstellen.

Wir empfehlen, dass Sie keinen Grafikeditor installieren, bis Sie ihn später in Ihrem Lernweg benötigen. Geben Sie sicherlich kein Geld für ein teures kommerzielles Produkt aus, es sei denn, Sie denken, dass es wirklich einen Mehrwert bietet.

Es gibt viele kostenlose Software-Tools und Online-Dienste, die jetzt wahrscheinlich gut genug sein werden, zum Beispiel:

- macOS kommt mit einem Werkzeug namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac). Dies wird hauptsächlich zum Anzeigen von Bildern und PDFs verwendet, es hat aber auch einige wirklich nützliche Funktionen zur Bildbearbeitung, einschließlich Größenänderung, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die [tinypng](https://tinypng.com/) Website bietet einen kostenlosen Dienst, der es Ihnen ermöglicht, PNGs, JPEGs und mehr zu komprimieren. Dies ist eine sehr häufige Aufgabe, die Sie ausführen müssen, wenn Sie Assets für die Nutzung auf einer Website vorbereiten.

In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, insbesondere für die Fotobearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeit geeignet sind. Es gibt auch beliebte Neueinsteiger wie [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder freie Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut angesehene kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**-Werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an einem Projekt im Team zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontrollwerkzeuge für Webentwicklungsteams unverzichtbar sind, brauchen Sie sich jetzt noch nicht darum zu kümmern. Wir haben ein Modul, das sich der [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, gegen Ende unserer Kernmodule-Serie.

## Site-Bereitstellungs-Apps

Nachdem Sie die Entwicklung einer Website oder App abgeschlossen haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie sie auf einen entfernten Webserver stellen, damit Ihre Benutzer die zugehörige Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, indem Sie Hosting kaufen und eine [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp) verwenden, einen Dienst wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/) verwenden oder sogar ein schnell erstelltes Demo zum Teilen mit anderen zusammenstellen, indem Sie etwas wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.

Eine solche Liste von Optionen mag überwältigend erscheinen, aber keine Sorge – Sie müssen jetzt noch nichts über die Veröffentlichung von Websites wissen. Wir werden dieses Thema im Verlauf des Kurses viele Male ansprechen. Sie werden bald genug praktische Erfahrung damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
