---
title: Installation von grundlegender Software
short-title: Installing software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie für einfache Webentwicklung benötigen und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und moderner Webbrowser.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit Ihrem Computer-Betriebssystem (OS).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, welche Software Sie benötigen, um loszulegen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Möglichkeiten für andere übliche Arten von Apps erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein anständiger Code-Editor ist eine der wichtigsten Dinge, die jedem Entwickler zur Verfügung stehen sollten. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl anderer Funktionen. Wir haben in dieser Serie einen ganzen Artikel den Code-Editoren gewidmet.

Für den Moment empfehlen wir, dass Sie [Visual Studio Code](https://code.visualstudio.com/) installieren, da es plattformübergreifend verfügbar ist, eine großartige Funktionalität und Unterstützung bietet und der Editor ist, den wir hauptsächlich verwenden. Sie sollten dieses jetzt installieren, um dem Rest dieses Artikels folgen zu können.

## Moderne Webbrowser

Moderne Webbrowser zur Verfügung zu haben, ist für die Webentwicklung unerlässlich, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen Ihre Webbrowser auch aktuell halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitspatches enthalten.

Die gängigsten Browser, auf die Sie stoßen werden, sind wie folgt:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.firefox.com/en-US/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.firefox.com/en-US/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine angetrieben, aufgrund von Apples App-Store-Regeln. Zum Zeitpunkt, als dieser Text verfasst wurde, beginnen Browser mit der Erstellung von iOS-Browsern, die auf ihren eigenen Rendering-Engines basieren, aufgrund von Änderungen der gesetzlichen Vorschriften. Siehe [Apple lässt endlich vollständige Versionen von Chrome und Firefox auf dem iPhone laufen](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

Die meisten modernen Browser installieren Updates automatisch und wenden die Änderungen an, wenn sie neu gestartet werden. In der Regel können Sie nach Updates auf der "Über"-Seite des Browsers suchen. Diese ist je nach Browser und Betriebssystem an leicht unterschiedlichen Stellen verfügbar, zum Beispiel:

- Firefox: Unter _Firefox_ > _Über Firefox_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Firefox_ unter Windows verfügbar.
- Chrome: Unter _Chrome_ > _Über Google Chrome_ auf macOS und Menü-Symbol > _Hilfe_ > _Über Google Chrome_ unter Windows verfügbar.

### Welche Browser installiert werden sollen

Für den Anfang sollten Sie ein paar Desktop- und Mobile-/alternative Geräte-Browser installieren, um Ihren Code zu testen. Wenn möglich, installieren Sie mindestens einen Browser aus jedem der oben genannten Unterpunkte, sodass Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren.

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die von Ihrem Browser kombiniert werden, um diese Seite darzustellen, von einem entfernten Webserver abgerufen, der auf einem anderen Servercomputer irgendwo auf der Welt gehostet wird. Sie werden mehr darüber erfahren, wie das in dem nächsten Artikel in der Serie funktioniert.

Wenn Sie eine Website lokal (auf Ihrem eigenen Computer) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt in einem Browser laden, um sie zu testen. Allerdings müssen einige Beispiele über einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

### Installation eines lokalen Webservers

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server verfügbar zu machen, ist die Verwendung einer Code-Editor-Erweiterung – auf diese Weise steht er direkt in Ihrem Code-Editor zur Verfügung. Tun Sie Folgendes in Visual Studio Code:

1. Öffnen Sie den _Extensions_ Bereich über das Menü _View_ > _Extensions_.
2. Geben Sie im Suchfeld oben in diesem Bereich "live preview" ein. Das oberste Suchergebnis sollte die [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Erweiterung, erstellt von Microsoft, sein.
3. Klicken Sie auf diese Option, um eine Informationsseite dazu zu öffnen, die auch Gebrauchsanweisungen enthält.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Jetzt sollten Sie in der Lage sein, beim Arbeiten an einer HTML-Datei im Editor die "Show Preview" Schaltfläche zu klicken, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die obige Option ist einfach, aber nicht sehr flexibel. In der Zukunft möchten Sie vielleicht eine flexiblere lokale Serveroption, die Sie verwenden können, um Beispiele in jedem Browser, den Sie haben, zu laden. Für andere Optionen (und mehr Hintergrundinformationen darüber, warum lokale Server notwendig sind), siehe [Wie richtet man einen lokalen Testserver ein?](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikeditoren

Webentwickler müssen oft Bilddateien bearbeiten, um sie auf den von ihnen erstellten Websites zu verwenden. Das kann oft bedeuten, grafische Elemente zu gestalten/erstellen, aber ebenso werden die Grafiken oft von einem Grafikdesigner bereitgestellt (das könnte ein Teamkollege oder ein Dritter sein), und in diesem Fall könnte der Webentwickler gebeten werden, die erhaltenen Dateien zuzuschneiden oder in der Größe zu ändern.

Keiner der Lernartikel auf MDN verlangt, dass Sie Ihre eigenen Grafiken erstellen, obwohl einige davon möglicherweise von Ihnen verlangen, die bereitgestellten Dateien zu bearbeiten.

Wir empfehlen, dass Sie keinen Grafikeditor installieren, bevor Sie ihn später in Ihrem Lernweg benötigen. Geben Sie auf keinen Fall Geld für ein teures kommerzielles Produkt aus, es sei denn, Sie denken wirklich, dass es einen Mehrwert bringt.

Es gibt viele kostenlose Softwaretools und Online-Dienste, die wahrscheinlich für den Moment ausreichend sind, zum Beispiel:

- macOS wird mit einem Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac) geliefert. Dies wird hauptsächlich zum Betrachten von Bildern und PDFs verwendet, hat aber auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern, einschließlich der Größenänderung, Drehung, Zuschneiden, Kommentierung und der Konvertierung zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie durchführen müssen, wenn Sie Ressourcen für die Verwendung auf einer Website vorbereiten.

In Bezug auf kommerzielle Angebote ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, insbesondere für die Foto-Bearbeitung, während Programme wie [Sketch](https://www.sketch.com/) besser für Icon- und UI-Arbeit geeignet sind. Es gibt auch beliebte Newcomer wie [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) und [Canva](https://www.canva.com/).

Die meisten der oben genannten Apps haben Testversionen oder kostenlose Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut bewertete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontrollwerkzeuge

**Versionskontroll**werkzeuge werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, an Projekten mit einem Team zu arbeiten, Code und Ressourcen auszutauschen und Bearbeitungskonflikte zu vermeiden. Zurzeit ist [Git](https://git-scm.com/) das populärste Versionskontrollsystem zusammen mit Hosting-Diensten wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Während Versionskontrollwerkzeuge für Webentwicklungsteams wesentlich sind, müssen Sie sich jetzt nicht darum kümmern. Wir haben ein Modul, das sich [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) widmet, am Ende unserer Kernmodule-Serie.

## Website-Deployment-Apps

Nachdem Sie eine Website oder App fertiggestellt haben (auf Ihrem lokalen Computer oder vielleicht auf einem Entwicklungsserver), möchten Sie diese auf einen entfernten Webserver hochladen, damit Ihre Nutzer die zugehörige Webadresse eingeben und sie im Web ansehen können!

Es gibt verschiedene Wege, wie Sie das tun können, angefangen vom Kauf von Hosting und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zu einem schnellen Demo, das Sie mit anderen teilen können, verwendet von Plattformen wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/).

So eine Liste von Optionen kann überwältigend erscheinen, aber keine Sorge – Sie müssen jetzt nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema später im Kurs mehrmals behandeln. Sie werden bald genug praktische Erfahrungen damit sammeln, in unserem [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) Modul.

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
