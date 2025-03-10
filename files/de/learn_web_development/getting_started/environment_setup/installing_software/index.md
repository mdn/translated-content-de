---
title: Installation von grundlegender Software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

In diesem Artikel besprechen wir, welche Software Sie benötigen, um einfache Webentwicklung durchzuführen, und was Sie jetzt installieren müssen, einschließlich eines Code-Editors und einiger moderner Webbrowser.

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
          <li>Verstehen, welche Software Sie benötigen, um loszulegen.</li>
          <li>Einen Code-Editor, einige moderne Browser und einen lokalen Testserver installieren.</li>
          <li>Optionen für andere gängige Arten von Anwendungen erkunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Code-Editoren

Ein guter Code-Editor ist eines der wichtigsten Dinge, die jedem Entwickler auf ihrem Rechner zur Verfügung stehen sollten. Neben dem Ort, an dem Sie Ihren Code schreiben, bieten Code-Editoren eine Vielzahl anderer Funktionen. Wir haben der Beschreibung von Code-Editoren einen eigenen Artikel in dieser Serie gewidmet.

Für den Moment empfehlen wir, [Visual Studio Code](https://code.visualstudio.com/) zu installieren, da es plattformübergreifend verfügbar ist, über ein hervorragendes Funktionsset und Support verfügt und der Editor ist, den wir größtenteils verwenden. Sie sollten es jetzt installieren, um den Rest dieses Artikels verfolgen zu können.

## Moderne Web-Browser

Moderne Webbrowser zur Verfügung zu haben, ist entscheidend für die Webentwicklung, damit Sie Ihre Websites oder Apps in den Browsern testen können, die Ihre Besucher verwenden, um darauf zuzugreifen. Sie müssen Ihre Webbrowser auch auf dem neuesten Stand halten, damit sie die neuesten Webtechnologien unterstützen und die neuesten Sicherheitsupdates angewendet haben.

> [!NOTE]
> Die meisten Browser neigen dazu, Updates automatisch zu installieren und die Änderungen anzuwenden, wenn sie neu gestartet werden. Sie können normalerweise im "Über" Bereich des Browsers nach Updates suchen, z. B. verfügbar im Menü bei _Firefox_ > _Über Firefox_ oder _Chrome_ > _Über Google Chrome_ auf Firefox/Chrome für macOS, oder das Menü-Symbol > _Hilfe_ > _Über Firefox_ oder Menü-Symbol > _Hilfe_ > _Über Google Chrome_ bei Firefox/Chrome für Windows.

Derzeit sollten Sie ein paar Desktop- und Mobile/alternative Geräte-Browser installieren, um Ihren Code darin zu testen. Am häufigsten kommen Sie mit Webbrowsern auf Desktop-, Laptop- und Mobilgeräten in Kontakt, aber Sie werden auch Webbrowser auf anderen Geräten wie Tablets, Uhren und Fernsehern finden. Wenn möglich, stellen Sie sicher, dass Sie aus jeder Kategorie einen Browser installiert haben, damit Sie nicht nur in mehreren Browsern testen, die auf derselben Rendering-Engine basieren:

- Desktop-Browser:
  - Chromium: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Gecko: [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).
  - WebKit: [Apple Safari](https://www.apple.com/safari/).
- Mobile/alternative Geräte-Browser:
  - Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Gecko (Android): [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/browsers/mobile/android/).
  - WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > Die meisten der oben aufgeführten Android-Browser haben iOS-Versionen, aber diese wurden historisch alle von Apples WebKit-Engine angetrieben aufgrund von Apples App Store-Regeln. Zum Zeitpunkt des Verfassens beginnen Browser damit, Versionen ihrer iOS-Browser zu entwickeln, die auf ihren eigenen Rendering-Engines basieren, aufgrund regulatorischer Änderungen. Siehe [Apple lässt endlich vollwertige Versionen von Chrome und Firefox auf dem iPhone laufen](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

## Lokale Webserver

Normalerweise, wenn Sie eine Webadresse in einen Browser eingeben, um eine Website zu laden, werden die Dateien, die kombiniert werden, um die Seite in Ihrem Browser zu rendern, von einem entfernten Webserver abgerufen, der auf einem Server-Computer irgendwo anders in der Welt gehostet wird. Sie werden in dem nächsten Artikel dieser Serie mehr darüber erfahren.

Wenn Sie eine Website lokal (auf Ihrem eigenen Rechner) erstellen, können Sie oft die Haupt-HTML-Indexdatei direkt im Browser laden, um sie zu testen. Einige Beispiele müssen jedoch durch einen lokal installierten Webserver ausgeführt werden, um erfolgreich zu funktionieren.

Eine der einfachsten Optionen, die wir gefunden haben, um einen lokalen Server zur Verfügung zu stellen, ist die Verwendung einer Code-Editor-Erweiterung — auf diese Weise ist er direkt in Ihrem Code-Editor verfügbar. Führen Sie Folgendes in Visual Studio Code aus:

1. Öffnen Sie die _Erweiterungen_-Ansicht über die Menüoption _Ansicht_ > _Erweiterungen_.
2. Geben Sie im Suchfeld oben in dieser Ansicht "live preview" ein. Das oberste Suchergebnis sollte die von Microsoft erstellte [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)-Erweiterung sein.
3. Klicken Sie auf diese Option, um eine Informationsseite darüber zu öffnen, die erklärt, wie sie zu verwenden ist.
4. Drücken Sie die Schaltfläche _Installieren_, um die Erweiterung zu installieren.
5. Nun sollten Sie, wenn Sie an einer HTML-Datei im Editor arbeiten, die "Vorschau anzeigen"-Schaltfläche klicken können, um das Live-Beispiel in einem separaten Tab zu öffnen.

Die oben genannte Option ist einfach, aber nicht sehr flexibel. In Zukunft wollen Sie vielleicht eine flexiblere lokale Serveroption zur Verfügung haben, die für das Laden von Beispielen in jedem verfügbaren Browser verwendet werden kann. Für andere Optionen (und mehr Hintergrundinformationen, warum lokale Server notwendig sind), siehe [Anleitung zur Einrichtung eines lokalen Testservers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Grafikbearbeitungsprogramme

Webentwickler müssen oft Bilddateien für die Websites, die sie erstellen, bearbeiten. Das kann bedeuten, grafische Elemente zu entwerfen/erstellen, aber ebenso oft werden die Grafiken von einem Grafikdesigner (das kann ein Teamkollege oder ein Dritter sein) bereitgestellt, wobei der Webentwickler damit beauftragt werden kann, die erhaltenen Dateien zuzuschneiden oder in der Größe zu ändern.

Keine der Lernartikel auf MDN erfordern von Ihnen, eigene Grafiken zu erstellen, obwohl einige davon verlangen könnten, die von uns bereitgestellten Dateien zu bearbeiten.

Es stehen viele Grafikbearbeitungstools zur Verfügung. Wir empfehlen, kein Geld für ein teures kommerzielles Produkt auszugeben, bis Sie weiter in Ihrer Lernerfahrung fortgeschritten sind, _wenn_ Sie das Gefühl haben, dass Sie es wirklich benötigen. Es gibt viele kostenlose Software-Tools und Online-Dienste, die wahrscheinlich für den Moment ausreichend sind.

Zum Beispiel:

- macOS verfügt über ein Tool namens [Vorschau](https://support.apple.com/en-gb/guide/preview/welcome/mac), das hauptsächlich zum Anzeigen von Bildern und PDFs verwendet wird, aber auch einige wirklich nützliche Funktionen zum Bearbeiten von Bildern bietet, darunter Größenänderung, Drehen, Zuschneiden, Kommentieren und Konvertieren zwischen verschiedenen Dateitypen.
- Die integrierte Windows [Fotos-App](https://support.microsoft.com/en-gb/windows/manage-photos-and-videos-with-microsoft-photos-app-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) bietet viele ähnliche Funktionen.
- Die Website [tinypng](https://tinypng.com/) bietet einen kostenlosen Dienst, mit dem Sie PNGs, JPEGs und mehr komprimieren können. Dies ist eine sehr häufige Aufgabe, die Sie beim Vorbereiten von Assets für die Verwendung auf einer Website durchführen müssen.

Wenn Sie umfangreichere Grafikbearbeitungs-/Erstellungsbedürfnisse haben, werden Sie ein vollständiges Grafikpaket benötigen. In kommerzieller Hinsicht ist [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) seit langem der Industriestandard, und es gibt auch beliebte relative Neulinge wie [Figma](https://www.figma.com/), [Sketch](https://www.sketch.com/) und [Canva](https://www.canva.com).

Wenn Ihr Budget begrenzt ist, haben die meisten der oben genannten Apps Test- oder Gratis-Modi, die es wert sind, erkundet zu werden. Es gibt auch einige gut bewertete kostenlose Apps wie [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) und [Paint.NET](https://www.getpaint.net/).

## Versionskontroll-Tools

**Versionskontroll**-Tools werden von Entwicklern verwendet, um Dateien auf Servern zu verwalten, in einem Team an einem Projekt zusammenzuarbeiten, Code und Assets zu teilen und Bearbeitungskonflikte zu vermeiden. Derzeit ist [Git](https://git-scm.com/) das beliebteste Versionskontrollsystem zusammen mit Hosting-Services wie [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/).

Obwohl Versionskontroll-Tools für Webentwicklungsteams unerlässlich sind, müssen Sie sich jetzt nicht darum kümmern. Wir haben ein Modul, das sich dem Thema [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) annimmt, am Ende unserer Core-Modulreihe.

## Site-Bereitstellungs-Apps

Nachdem Sie eine Website oder App (auf Ihrem lokalen Computer oder möglicherweise auf einem Entwicklungsserver) fertiggestellt haben, möchten Sie sie auf einem entfernten Webserver bereitstellen, damit Ihre Benutzer die damit verbundene Webadresse eingeben und sie im Web anzeigen können!

Es gibt verschiedene Möglichkeiten, dies zu tun, von der Anschaffung eines Hostings und der Verwendung einer [SFTP-App](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), über die Nutzung eines Dienstes wie [GitHub Pages](https://pages.github.com/) oder [Netlify](https://www.netlify.com/), bis hin zur Einrichtung eines schnellen Demos, das Sie mit anderen teilen können, unter Verwendung von etwas wie [Glitch](https://glitch.com/) oder [CodePen](https://codepen.io/).

So eine Liste von Optionen mag überwältigend erscheinen, aber keine Sorge — Sie müssen jetzt nichts über das Veröffentlichen von Websites wissen. Wir werden dieses Thema viele Male im Verlauf des Kurses behandeln. Sie werden bald praktische Erfahrungen damit sammeln, in unserem Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
