---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte richtig aussehen lassen, bevor Sie sie schließlich auf einen Server stellen, damit die ganze Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Dateibrowsers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse Ihres Computerbetriebssystems (OS) und der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Dateien und Ordner manipulieren.</li>
          <li>Namensgebungs-Best-Practices.</li>
          <li>Standardmäßige Website-Ordnerstruktur.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Dateien und Ordner manipulieren

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/Terminal Ihres Computers tun, indem Sie eine Reihe von Textbefehlen verwenden, die Sie im nächsten Artikel näher kennenlernen werden. Viele Menschen finden es jedoch einfacher, visuell über Dateisysteme zu lernen, und genau das werden wir hier besprechen. Moderne Betriebssysteme haben eine robuste Benutzeroberfläche für Dateisysteme, die Sie zum Manipulieren von Dateien und Ordnern nach Bedarf verwenden können.

Auf macOS haben Sie zum Beispiel das Finder-Programm:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Während Windows den Dateiexplorer hat:

![Die Windows-Dateiexplorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde unter Windows 11 und macOS 15 verfasst. Möglicherweise verwenden Sie eine andere OS-Version oder ein ganz anderes OS, weshalb das Erlebnis leicht abweichen kann. Es gibt viele Leitfäden im Internet zur grundlegenden OS-Nutzung — wir empfehlen Ihnen, im Web nach Informationen zu Ihrem speziellen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto auf dem System enthält, auch als _Home_-Ordner des Benutzers bekannt. Dieser wird normalerweise durch ein Haus-Symbol dargestellt, um ihn leichter zu finden. Im _Home_-Ordner befinden sich wiederum andere wichtige Standardordner (und Dateien), die speziell für diesen Benutzer relevant sind, wie _Documents_, _Music_, usw. Es gibt viele andere Dateien und Ordner auf Ihrem Computer, aber kümmern Sie sich jetzt nicht darum.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdateien, die mit Ihrer Arbeit zusammenhängen, irgendwo in Ihrem _Home_-Ordner erstellen, vielleicht im _Documents_-Ordner. Das ist sinnvoll, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie beginnen, Dateien an anderen Orten auf Ihrem System zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputt machen. Erstellen und bearbeiten Sie derzeit Dateien nur in Ihrem _Home_-Ordner.

### Einen Ordner erstellen

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in der Benutzeroberfläche Ihres Dateisystems auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Documents_-Ordner.
2. Erstellen Sie an diesem Ort einen neuen Ordner mit dem Namen `web-projects`:
   1. Unter Windows können Sie dies tun, indem Sie im Dateiexplorer-Fenster die Schaltfläche _New_ auswählen und _Folder_ auswählen (oder <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken), `web-projects` als den Namen des neuen Ordners eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken.
   2. Unter macOS können Sie dies tun, indem Sie im Finder-Menü _Datei_ > _Neuer Ordner_ auswählen (oder <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken) — Sie sehen einen neuen Ordner mit dem Namen _Unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Sie einen Tippfehler gemacht haben, können Sie den Ordnernamen korrigieren (dies funktioniert auch mit Dateien):

- Unter Windows: Klicken Sie mit der rechten Maustaste auf den Ordner, wählen Sie im Menü _Umbenennen_, dann bearbeiten Sie ihn. Einige Windows-Versionen haben zunächst ein vereinfachtes Menü — möglicherweise müssen Sie mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ und dann _Umbenennen_ auswählen!
- Unter macOS: Klicken Sie auf den Ordnernamen oder wählen Sie ihn aus, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Während Sie Textdateien innerhalb der Dateisystem-Benutzeroberfläche Ihres Betriebssystems erstellen können, ist es im Allgemeinen einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. Tatsächlich verfügt VS Code über einen eigenen Dateiexplorer, mit dem Sie alle benötigten Ordner und Dateien für Ihre Webprojekte erstellen können.

Warum haben wir Sie dann die Mühe gemacht, einen Ordner mit der Benutzeroberfläche Ihres Betriebssystems zu erstellen? Weil VS Code auf einen anfänglichen Top-Level-Ordner zeigen muss!

Es ist auch nützlich, ein wenig über die Struktur Ihres Dateisystems zu verstehen. Dies wird nützlicher, wenn Sie später anspruchsvollere Werkzeuge verwenden.

Lassen Sie uns nun unseren `web-projects`-Ordner in VS Code öffnen:

1. Öffnen Sie VS Code.
2. Wählen Sie im Menü _Datei_ > _Ordner öffnen..._.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie den _Ordner öffnen_-Befehl unter Windows ausführen, indem Sie die <kbd>Ctrl</kbd>-Taste gedrückt halten und <kbd>K</kbd> und dann <kbd>O</kbd> drücken. Der einfachste Weg für macOS-Benutzer besteht darin, die _Befehlskonsole_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, mit den Cursortasten zu _Datei: Ordner öffnen_ zu wechseln und dann <kbd>Enter</kbd> zu drücken.
3. Es erscheint eine Mini-Version der Dateisystem-Benutzeroberfläche. Verwenden Sie diese, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die Schaltfläche _Ordner auswählen_.
4. Sie werden mit einem Dialogfeld mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ konfrontiert. Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, daher können Sie _Ja, ich vertraue den Autoren_ klicken.

Sie sollten Ihren `web-projects`-Ordner im VS Code _EXPLORER_-Feld geöffnet sehen, wie unten dargestellt:

![Das VS Code Explorer-Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Stellen Sie erneut sicher, dass Sie vorerst nur Ihre eigenen Dateien in Ihrem _Home_-Ordner bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Hinweis zur Tastaturnavigation in VS Code

VS Code hat zwar bei weitem nicht perfekt, ein umfassendes Set an Tastenkombinationen. Im ganzen Artikel haben wir versucht, nützliche einzuschließen, wo möglich, aber Sie finden umfassendere Listen unter dem VS Code [Tastenkombinationsreferenz](https://code.visualstudio.com/docs/configure/keybindings).

Im Allgemeinen, wenn Sie VS Code über die Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um in verschiedenen Bereichen der Benutzeroberfläche zu wechseln (<kbd>Shift</kbd> + <kbd>Tab</kbd> bringt Sie zurück zur vorherigen Tabfokus-Position). Wenn sich mehrere Schaltflächen in einer Tabfokus-Position befinden, können Sie die Cursortasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie gerade eine Datei bearbeiten, wird die Tab-Taste nicht um die Benutzeroberfläche navigieren - sie fügt Tab-Zeichen in die Datei ein. Um von der bearbeiteten Datei zum _EXPLORER_-Paneel zu wechseln, können Sie auf macOS <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>, oder auf Windows <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken.

Um zurück zum Dateieditorfeld zu wechseln und zwischen den verschiedenen Dateien zu wechseln, die in verschiedenen Registerkarten geöffnet sind, halten Sie die <kbd>Ctrl</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd>, um nach oben und unten durch die Liste der geöffneten Registerkarten zu navigieren (auf sowohl macOS als auch Windows). Sobald Sie die Datei hervorgehoben haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu dieser Registerkarte zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Paneel erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das Symbol _Neue Datei..._ klicken (oder mit <kbd>Tab</kbd> dorthin navigieren und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie den Dateinamen als "index.html" im angezeigten Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben auf der _Willkommens_-Registerkarte, um Dateien und Ordner zu erstellen, da sie etwas anders funktionieren. Tatsächlich können Sie die _Willkommens_-Registerkarte schließen, da Sie sie nicht benötigen. Dies können Sie tun, indem Sie auf das "x" auf der rechten Seite der Registerkarte klicken oder <kbd>Cmd</kbd> + <kbd>W</kbd> auf macOS (<kbd>Ctrl</kbd> + <kbd>W</kbd> auf Windows) drücken.

Gehen Sie jetzt zurück zu Ihrer Dateisystem-Benutzeroberfläche, gehen Sie in Ihren `web-projects`-Ordner, indem Sie darauf doppelklicken, und Sie sollten dort auch Ihre `index.html`-Datei sehen. VS Code verwendet das zugrunde liegende Dateisystem des Betriebssystems und nicht irgendein seltsames Dateisystem.

### Verschieben von index.html in seinen eigenen Unterordner

Sie können Ordner innerhalb anderer Ordner erstellen (sogenannte _Unterordner_) und Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie per Drag & Drop auf diesen Ordner ziehen.

Lassen Sie uns dies erkunden und dabei unsere `index.html`-Datei in ihren eigenen Unterordner verschieben. Wir möchten eigentlich nicht, dass sie im Hauptordner `web-projects` sitzt.

1. Erstellen Sie einen neuen Ordner innerhalb von `web-projects` mit der Schaltfläche _Neuer Ordner..._ im _EXPLORER_-Paneel von VS Code.
2. Nennen Sie ihn `test-site`.
3. Sie sollten jetzt in der Lage sein, die `index.html`-Datei zu ziehen und auf den `test-site`-Ordner zu ziehen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie dies durch folgende Schritte tun:
   >
   > 1. Verwenden Sie die Pfeiltasten nach oben und unten, um die Fokusskontur über die `index.html`-Datei zu bewegen.
   > 2. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>X</kbd> (<kbd>Ctrl</kbd> + <kbd>X</kbd> auf Windows), um die Datei auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um die Fokusskontur über dem Ordner zu bewegen.
   > 4. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>V</kbd> (<kbd>Ctrl</kbd> + <kbd>V</kbd> auf Windows), um die Datei in den Ordner zu verschieben.

Es gibt noch viel mehr, was wir über die Benutzeroberflächen von Dateisystemen und VS Code sagen könnten, aber wir haben nur begrenzten Platz, daher belassen wir es vorerst dabei. Dies hat Ihnen genug Informationen gegeben, um loszulegen, und wir ermutigen Sie, im Web nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern tun können.

Lassen Sie uns nun über die Struktur einer Webseite sprechen.

## Welche Struktur sollte eine Webseite haben?

Wenn Sie an Webseiten lokal (auf Ihrem Computer) arbeiten, sollten Sie alle zugehörigen Dateien für jede site in einem einzigen Ordner speichern. Im Gegenzug sollten Sie alle Ihre Webseitenordner in einem zentralen Ordner speichern, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Webseitenprojekte zu speichern. Wir haben Sie auch dazu gebracht, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Funktionen in `test-site` hinzufügen, um eine typische Webseitenstruktur zu demonstrieren; im nächsten Modul werden wir Sie dazu bringen, ein vollständiges Webseitenbeispiel darin aufzubauen. Die häufigsten Dinge, die jedes Website-Projekt enthalten wird, sind eine index HTML-Datei und Ordner, die Bilder, Stildateien und Skriptdateien enthalten:

1. **`index.html`**: Diese Datei enthält in der Regel Ihre Homepage-Inhalte, das sind die Texte und Bilder, die Menschen sehen, wenn sie Ihre Website zum ersten Mal besuchen.
2. **`images`-Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden.
3. **`styles`-Ordner**: Dieser Ordner enthält den CSS-Code, der zum Stylen Ihrer Inhalte verwendet wird (zum Beispiel das Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um Ihrer Website interaktive Funktionen hinzuzufügen (zum Beispiel, um zu definieren, was passiert, wenn Schaltflächen geklickt werden).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Ein Dateiname besteht im Allgemeinen aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen Sie die Datei, die wir oben erstellt haben — `index.html`:

- Der Name ist in diesem Fall `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen hinsichtlich der Verwendung von Zeichen haben. Es ist besser, zunächst auf Zahlen und Buchstaben zu beschränken. Darüber hinaus können Systeme bestimmten Namen oder Namensteilen eine spezielle Bedeutung geben — wie bereits erwähnt, werden `index`-Dateien in der Regel als die Haupt-Homepage-Datei einer Website erkannt.
- Die Dateierweiterung identifiziert den Dateityp, mit dem wir es zu tun haben, und wird von Computersystemen verwendet, um den Inhaltstyp zu identifizieren, der in der Datei erwartet wird, welches Programm verwendet werden sollte, um die Datei zu öffnen usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Klartext enthalten sollte, und speziell HTML-Code. Aufgrund der Erweiterung weiß Ihr Computer, dass er, wenn Sie versuchen, die Datei zu öffnen, sie mit Ihrem Standard-Texteditor öffnen sollte, der VS Code sein sollte, wenn Sie alle unsere Anweisungen bis jetzt befolgt haben.

Es ist nicht in allen Fällen zutreffend, aber die meisten Dateien benötigen eine Erweiterung, um korrekt verarbeitet zu werden. Das Entfernen oder Ändern der Dateierweiterung führt wahrscheinlich zu Fehlern, sodass Sie sie nicht ändern sollte, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich mehr als einen Punkt in einem Dateinamen zu setzen, zum Beispiel `mein.katzen.html`. In solchen Fällen wird der letzte Punkt als Beginn der Dateierweiterung angenommen.

Auf Windows-Computern haben Sie möglicherweise Schwierigkeiten, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. Sie können dies deaktivieren, indem Sie den Datei-Explorer öffnen, die **Ordneroptionen…**-Option wählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

### Best Practices für Dateinamen

Im Rahmen dieses Kurses werden Ihnen immer wieder Ordner- und Dateinamen komplett in Kleinbuchstaben ohne Leerzeichen angegeben. Es gibt viele Gründe, warum die Verwendung von Leerzeichen in Datei- und Ordnernamen Probleme schafft — einige der häufigeren sind:

1. Viele Computersysteme, einschließlich der meisten Webserver, sind case-sensitive. Wenn Sie zum Beispiel ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` und dann in einer anderen Datei versuchen, das Bild mit `test-site/images/myimage.jpg` zu referenzieren, funktioniert es möglicherweise nicht.
2. Bei der Ausführung von Befehlen in der Befehlszeile müssen Sie Datei- und Ordnernamen mit Leerzeichen in Anführungszeichen setzen, da sie sonst als zwei separate Elemente interpretiert werden.
3. Einige Programmiersprachen (zum Beispiel Python) arbeiten in bestimmten Umständen (zum Beispiel, wenn diese Dateien Module sind, die importiert werden müssen) nicht gut mit Leerzeichen in Dateinamen.
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my file.html` im Stammverzeichnis Ihres Servers haben, ist sie in der Regel unter einer URL wie `https://example.com/my%20file.html` zugänglich. Webserver ersetzen die Leerzeichen in Dateinamen normalerweise durch `%20` (da URLs {{Glossary("Percent-encoding", "Prozent-codiert")}} sind), was bei einigen Systemen subtile Fehler verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` anstelle von `my file.html`. Dies ist eine gute Praxis.

Es ist am besten, sich angewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. So werden Sie später auf weniger Probleme stoßen.

> [!NOTE]
> Weitere Best Practices für Dateinamen und URLs finden Sie unter [URL-Struktur-Best Practices für Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um auf eine Datei von einer anderen zu verweisen, müssen Sie einen Dateipfad angeben — im Wesentlichen einen Weg, damit eine Datei weiß, wo sich eine andere befindet. Zum Beispiel, wenn Sie eine Webseite erstellen, die ein Bild enthält, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Speicherort des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel durchgehen. Möglicherweise verstehen Sie noch nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie auch einfach unser [Firefox-Icon-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihren _images_-Ordner.
3. Stellen Sie sicher, dass die Bilddatei einen kurzen und einfachen Namen hat, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut, und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie auch sicher, dass Sie die Dateierweiterung beibehalten.

Jetzt werden wir dem `index.html`-Datei-Inhalt hinzufügen, um es ihm zu ermöglichen, die Bilddatei zu finden und anzuzeigen.

1. Öffnen Sie Ihr `index.html` in VS Code und fügen Sie den folgenden Inhalt in die Datei genau so ein, wie er unten gezeigt wird. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Sie werden sehr bald viel mehr darüber lernen!

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>My test page</title>
     </head>
     <body>
       <img src="" alt="My test image" />
     </body>
   </html>
   ```

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo das Bild ist. Das Bild befindet sich im _images_-Ordner, der sich im gleichen Ordner wie `index.html` befindet. Um die Dateistruktur von `index.html` zu unserem Bild herunterzuwandern, wäre der benötigte Dateipfad `images/your-image-filename`. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` hieße, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen den Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie mit <kbd>Ctrl</kbd>/rechte Maustaste auf die HTML-Datei klicken, dann _Öffnen mit_ wählen und einen Webbrowser aus dem resultierenden Untermenü auswählen. Sie könnten auch die Benutzeroberfläche Ihres Dateisystems und ein Webbrowser-Fenster auf demselben Bildschirm öffnen und die HTML-Datei über das Webbrowser-Fenster ziehen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website zeigt nur das Firefox-Logo – einen brennenden Fuchs, der die Welt umarmt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verweisen, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, plus einen Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im **oberhalb** befindlichen Ordner der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Zum Beispiel, wenn `index.html` sich in einem Unterordner von `test-site` befinden würde und `my-image.jpg` sich in `test-site` befände, könnten Sie `my-image.jpg` von `index.html` mit `../my-image.jpg` referenzieren.
- Sie können diese so oft kombinieren, wie Sie möchten, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet tendenziell umgekehrte Schrägstriche, nicht Schrägstriche, z.B., `C:\Windows`. Dies spielt in HTML keine Rolle — selbst wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code Schrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
