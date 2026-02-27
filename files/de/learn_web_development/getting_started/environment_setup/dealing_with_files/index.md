---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 12fddfa7a8dfa7f4f30f7f55889b0e94a585d847
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in eine sinnvolle Struktur auf Ihrem lokalen Computer zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können und dass alle Inhalte korrekt angezeigt werden, bevor Sie sie schließlich auf einem Server veröffentlichen, damit sie von der ganzen Welt gesehen werden können. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem (OS) und der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Arbeiten mit Dateien und Ordnern.</li>
          <li>Beste Praktiken für Namensgebung.</li>
          <li>Standard-Website-Ordnerstruktur.</li>
          <li>Umgang mit Dateipfaden</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Arbeiten mit Dateien und Ordnern

Es gibt viele verschiedene Wege, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/Terminal Ihres Computers mithilfe einer Reihe von Textbefehlen tun, worüber Sie im nächsten Artikel mehr erfahren werden. Allerdings finden viele Menschen es einfacher, das Dateisystem visuell zu erlernen, und darum geht es hier. Moderne Betriebssysteme (OSes) verfügen über eine robuste Benutzeroberfläche (UI) für das Dateisystem, die Sie verwenden können, um Dateien und Ordner nach Bedarf zu bearbeiten.

Auf macOS haben Sie zum Beispiel das Finder-Programm:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde unter Verwendung von Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere OS-Version oder ein anderes OS, in welchem Fall die Erfahrung variieren wird. Es gibt viele Leitfäden im Web zur grundlegenden OS-Nutzung — wir empfehlen Ihnen, im Web nach Informationen zu Ihrem speziellen Betriebssystem zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto enthält, das auf dem System existiert, auch bekannt als _Home_-Ordner des Benutzers. Dieser wird normalerweise durch ein Haus-Symbol dargestellt, um ihn leichter zu finden. Der _Home_-Ordner enthält wiederum andere wichtige Standardordner (und Dateien), die speziell für diesen Benutzer relevant sind, wie _Dokumente_, _Musik_ usw. Es gibt auch viele andere Dateien und Ordner auf Ihrem Computer, aber machen Sie sich keine Sorgen um diese jetzt.

Der aktuell angemeldete Benutzer wird standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen können.

Sie sollten Projektdateien, die mit Ihrer Arbeit zusammenhängen, irgendwo in Ihrem _Home_-Ordner erstellen, vielleicht im _Dokumente_-Ordner. Dies ist sinnvoll, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Stellen auf Ihrem System zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen kontrollieren), könnten Sie etwas kaputt machen. Erstellen und bearbeiten Sie deshalb Dateien nur innerhalb Ihres _Home_-Ordners, bis Sie wissen, was Sie tun.

### Erstellen eines Ordners

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in Ihrer Dateisystem-Benutzeroberfläche auf Ihren _Home_-Ordner und dann doppelt auf Ihren _Dokumente_-Ordner.
2. Erstellen Sie an dieser Stelle einen neuen Ordner mit dem Namen `web-projects`:
   1. Unter Windows kann dies durch Klicken auf die Schaltfläche _Neu_ im Datei-Explorer-Fenster und Auswählen von _Ordner_ (oder Drücken von <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) geschehen. Geben Sie `web-projects` als Namen des neuen Ordners ein, der erscheint, und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.
   2. Unter macOS kann dies durch Auswählen von _Ablage_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) geschehen. Sie sehen dann einen neuen Ordner mit dem Namen _Neuer Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein, und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Falls Sie einen Tippfehler machen, können Sie den Ordnernamen korrigieren (das funktioniert auch mit Dateien):

- Unter Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Bei einigen Windows-Versionen erscheint zunächst ein vereinfachtes Menü — Sie müssen möglicherweise mit der rechten Maustaste klicken, dann _Mehr Optionen anzeigen_ wählen und dann auf _Umbenennen_ klicken!
- Unter macOS klicken Sie auf den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Während Sie Textdateien innerhalb der OS-Dateisystem-Benutzeroberfläche erstellen können, ist es in der Regel einfacher und weniger fehleranfällig, sie innerhalb Ihres Code-Editors zu erstellen. Tatsächlich hat VS Code seinen eigenen Datei-Explorer, der es Ihnen ermöglicht, alle notwendigen Ordner und Dateien für Ihre Webprojekte zu erstellen.

Warum haben wir Sie also den Aufwand gemacht, einen Ordner mit der OS-Dateisystem-Benutzeroberfläche zu erstellen? Weil VS Code auf einen anfänglichen obersten Ordner gerichtet werden muss!

Es ist auch nützlich, ein wenig darüber zu verstehen, wie Ihr OS-Dateisystem strukturiert ist. Dies wird nützlicher, wenn Sie anfangen, komplexere Werkzeuge zu verwenden.

Lassen Sie uns nun unseren `web-projects` Ordner in VS Code öffnen:

1. Öffnen Sie VS Code.
2. Wählen Sie im Menü _Ablage_ > _Ordner öffnen..._.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie den _Ordner öffnen_-Befehl in Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> dann <kbd>O</kbd> drücken. Der einfachste Weg für einen macOS-Benutzer ist, die _Befehlspalette_ mit <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu verwenden, um zu _Datei: Ordner öffnen_ zu gelangen, und <kbd>Enter</kbd> zu drücken.
3. Eine Mini-Version der OS-Dateisystem-Benutzeroberfläche wird angezeigt. Verwenden Sie diese, um Ihren `web-projects` Ordner zu finden, wählen Sie ihn aus und drücken Sie die Schaltfläche _Ordner auswählen_.
4. Sie werden mit einem Dialogfeld konfrontiert, das mit _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ überschrieben ist. Lesen Sie dies sorgfältig, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellen wird, daher können Sie auf _Ja, ich vertraue den Autoren_ klicken.

Sie sollten Ihren `web-projects` Ordner im VS Code _EXPLORER_-Bereich geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Vergewissern Sie sich erneut, dass Sie sich vorerst auf das Bearbeiten Ihrer eigenen Dateien innerhalb Ihres _Home_-Ordners beschränken, um Probleme mit Ihrem System zu vermeiden.

#### Ein Exkurs zur Tastaturnavigation in VS Code

VS Code hat, auch wenn es nicht perfekt ist, eine umfangreiche Reihe von Tastenkombinationen. In diesem Artikel haben wir versucht, nützliche soweit wie möglich einzubeziehen, aber Sie können umfassendere Listen in der VS Code [Tastenkombinationen-Referenz](https://code.visualstudio.com/docs/configure/keybindings) finden.

Im Allgemeinen, wenn Sie VS Code mit der Tastatur navigieren möchten, können Sie die <kbd>Tabulator</kbd>-Taste verwenden, um durch verschiedene Bereiche der Benutzeroberfläche zu wechseln (<kbd>Umschalt</kbd> + <kbd>Tabulator</kbd> bewegt Sie zu einer vorherigen Tabulator-Fokusposition). Wenn es mehrere Schaltflächen in einer Tabulator-Fokusposition gibt, können Sie die Pfeiltasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie derzeit eine Datei bearbeiten, navigiert die Tabulator-Taste nicht durch die Benutzeroberfläche — sie fügt Tabulatorzeichen in die Datei ein. Um von der Datei, die Sie bearbeiten, zur _EXPLORER_-Leiste zu wechseln, können Sie <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> auf macOS oder <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> auf Windows drücken.

Um zurück zur Dateieditorleiste zu wechseln und zwischen den verschiedenen Dateien, die in verschiedenen Tabs geöffnet sind, zu wechseln, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden Sie <kbd>Tabulator</kbd> sowie <kbd>Umschalt</kbd> + <kbd>Tabulator</kbd>, um die Liste der geöffneten Tabs hoch- und runterzubewegen (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei, die Sie bearbeiten möchten, hervorgehoben haben, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das _Neue Datei..._-Symbol klicken (oder mit <kbd>Tabulator</kbd> darauf wechseln und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie den Dateinamen "index.html" in das erscheinende Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im _Willkommen_-Tab, um Dateien und Ordner zu erstellen, da diese etwas anders funktionieren. Tatsächlich können Sie den _Willkommen_-Tab schließen, da Sie ihn nicht benötigen. Dies können Sie tun, indem Sie auf das "x" auf der rechten Seite des Tabs klicken oder indem Sie <kbd>Cmd</kbd> + <kbd>W</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>W</kbd> auf Windows) drücken.

An diesem Punkt, gehen Sie zurück zu Ihrer OS-Dateisystem-Benutzeroberfläche, gehen Sie in Ihren `web-projects` Ordner, indem Sie darauf doppelklicken, und Sie sollten Ihre `index.html` Datei dort ebenfalls sehen. VS Code verwendet das zugrunde liegende OS-Dateisystem, nicht ein eigenes Dateisystem.

### Verschieben von index.html in einen eigenen Unterordner

Sie können Ordner in anderen Ordnern erstellen (genannt _Unterordner_) und beliebig viele Ebenen tief gehen. Sie können auch Dateien (und Ordner) durch Ziehen und Ablegen auf einen Ordner in andere Ordner verschieben.

Lassen Sie uns dies erkunden und dabei unsere `index.html` Datei in einen eigenen Unterordner verschieben. Wir wollen sie wirklich nicht im Haupt-`web-projects` Ordner haben.

1. Erstellen Sie einen neuen Ordner in `web-projects`, indem Sie die _Neuer Ordner..._-Schaltfläche im _EXPLORER_-Bereich von VS Code verwenden.
2. Nennen Sie ihn `test-site`.
3. Sie sollten jetzt in der Lage sein, die `index.html` Datei zu ziehen und auf den `test-site` Ordner abzulegen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie dies mit den folgenden Schritten tun:
   >
   > 1. Verwenden Sie die Auf- und Abwärtspfeiltasten, um den Fokusrahmen über der `index.html` Datei zu verschieben.
   > 2. Drücken Sie <kbd>Cmd</kbd> + <kbd>X</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokusrahmen über den Ordner zu verschieben.
   > 4. Drücken Sie <kbd>Cmd</kbd> + <kbd>V</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>V</kbd> auf Windows), um die Datei in den Ordner zu verschieben.

Es gibt viel mehr, was wir über die Benutzung von OS-Dateisystem-Benutzeroberflächen und VS Code einfügen könnten, aber wir haben begrenzten Platz, also belassen wir es vorerst dabei. Dies hat Ihnen genügend Informationen gegeben, um anzufangen, und wir ermutigen Sie, im Web nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern tun können.

Lassen Sie uns nun zu einer kurzen Diskussion über die Struktur einer Website übergehen.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal (auf Ihrem Computer) an Websites arbeiten, sollten Sie alle zugehörigen Dateien für jede Website in einem einzigen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Ihnen angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben Sie auch dazu gebracht, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Features in `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren; im nächsten Modul werden wir Sie dazu bringen, ein vollständiges Website-Beispiel darin aufzubauen. Die häufigsten Dinge, die jedes Website-Projekt enthalten wird, sind eine Index-HTML-Datei und Ordner, um Bilder, Style-Dateien und Script-Dateien zu enthalten:

1. **`index.html`**: Diese Datei enthält in der Regel den Inhalt Ihrer Startseite, also den Text und die Bilder, die Menschen sehen, wenn sie zuerst auf Ihre Seite gehen.
2. **`images`-Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Seite verwenden.
3. **`styles`-Ordner**: Dieser Ordner enthält den CSS-Code, der zum Stylen Ihres Inhalts verwendet wird (zum Beispiel, um Text- und Hintergrundfarben festzulegen).
4. **`scripts`-Ordner**: Dieser Ordner enthält allen JavaScript-Code, der verwendet wird, um interaktive Funktionen zu Ihrer Seite hinzuzufügen (zum Beispiel, um zu definieren, was passiert, wenn Schaltflächen geklickt werden).

Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie jetzt die `images`, `styles` und `scripts` Ordner darin.

## Dateinamen

Dateinamen bestehen im Allgemeinen aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen Sie die Datei, die wir oben erstellt haben — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen hinsichtlich der verwendbaren Zeichen haben. Es ist besser, sich zumindest am Anfang auf Zahlen und Buchstaben zu beschränken. Darüber hinaus können Systeme bestimmten Namen oder Namensbestandteilen besondere Bedeutung zuweisen — wie wir bereits gesagt haben, werden `index`-Dateien in der Regel als die Haupt-Startseite einer Website erkannt.
- Die Dateierweiterung identifiziert den Typ der Datei, mit der wir es zu tun haben, und wird von Computersystemen verwendet, um zu bestimmen, welche Art von Inhalt in der Datei erwartet wird und welches Programm verwendet werden sollte, um die Datei zu öffnen, usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei aus einfachem Text und genauer aus HTML-Code bestehen sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass er die Datei mit Ihrem Standard-Texteditor öffnen soll, der VS Code sein sollte, wenn Sie alle unsere Anweisungen bis jetzt befolgt haben.

Es ist nicht in allen Fällen wahr, aber die meisten Dateien benötigen eine Erweiterung, um korrekt verarbeitet zu werden. Das Entfernen oder Ändern der Dateierweiterung führt wahrscheinlich zu Fehlern, daher sollten Sie sie nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu haben, zum Beispiel `my.cats.html`. In solchen Fällen wird davon ausgegangen, dass der letzte Punkt der Anfang der Dateierweiterung ist.

Auf Windows-Computern könnten Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, da Windows eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** standardmäßig aktiviert hat. Sie können dies ausschalten, indem Sie im Datei-Explorer die Option **Ordneroptionen...** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet suchen.

### Beste Praktiken für Dateinamen

Während Sie diesem Kurs folgen, werden Sie bemerken, dass wir Sie immer bitten, Ordner und Dateien komplett kleinzuschreiben, ohne Leerzeichen. Es gibt viele Möglichkeiten, wie das Ignorieren dieses Rates Probleme verursacht — einige der häufigsten sind wie folgt:

1. Viele Computersysteme, einschließlich der meisten Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie also zum Beispiel ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, auf das Bild mit `test-site/images/myimage.jpg` zu verweisen, könnte es nicht funktionieren.
2. Wenn Sie Befehle in der Befehlszeile ausführen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, ansonsten werden sie als zwei separate Elemente interpretiert.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren nicht gut mit Leerzeichen in Dateinamen unter bestimmten Umständen (zum Beispiel, wenn diese Dateien Module sind, die importiert werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie zum Beispiel eine Datei namens <code>my&nbsp;file.html</code> im Stammordner Ihres Servers haben, ist sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` zugänglich. Webserver ersetzen normalerweise die Leerzeichen in Dateinamen durch `%20` (weil URLs {{Glossary("Percent-encoding", "prozentcodiert")}} sind), was subtile Fehler bei einigen Systemen verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` anstelle von <code>my&nbsp;file.html</code>. Dies ist eine gute Praxis.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen zwischen Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie weniger Probleme in der Zukunft haben.

> [!NOTE]
> Sie können weitere beste Praktiken für Dateinamen und URLs in den [URL-Struktur-Best-Practices für Google](https://developers.google.com/search/docs/crawling-indexing/url-structure) finden.

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde eine Route, sodass eine Datei weiß, wo sich eine andere Datei befindet. Zum Beispiel, wenn Sie eine Webseite mit einem Bild erstellen, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Ort des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel dafür durchgehen. Vielleicht verstehen Sie nicht, was das alles jetzt bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Internet ein Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Bilder](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Icon-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihren _images_ Ordner.
3. Stellen Sie sicher, dass die Bilddatei einen kurzen und einfachen Namen ohne Leerzeichen hat. Zum Beispiel ist `firefox-icon.png` gut, und `cat.jpg` ist auch gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie auch sicher, dass Sie die Dateierweiterung beibehalten.

Nun fügen wir der `index.html` Datei Inhalte hinzu, um es ihr zu ermöglichen, die Bilddatei zu lokalisieren und anzuzeigen.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau so ein, wie er unten gezeigt wird. Dies ist HTML, die Sprache, die wir verwenden, um Webseitenelemente zu definieren und zu strukturieren. Sie werden darüber sehr bald viel mehr lernen!

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

2. Die Zeile `<img src="" alt="Mein Testbild">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML-Code mitteilen, wo das Bild ist. Das Bild befindet sich im _images_ Ordner, der sich im gleichen Ordner wie `index.html` befindet. Um von `index.html` zur Bilddatei durch die Dateistruktur zu navigieren, benötigen wir den Dateipfad `images/dein-bild-dateiname`. Wenn Ihr Bild zum Beispiel `firefox-icon.png` genannt wurde, würde der Dateipfad `images/firefox-icon.png` sein.
3. Fügen Sie den Dateipfad in den HTML-Code zwischen die Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Dies können Sie tun, indem Sie mit <kbd>Strg</kbd>/Rechtsklick die HTML-Datei auswählen, dann _Öffnen mit_ und einen Webbrowser aus dem resultierenden Untermenü wählen. Sie könnten auch Ihre Dateisystem-Benutzeroberfläche und ein Webbrowserfenster auf dem gleichen Bildschirm öffnen und die HTML-Datei über das Webbrowserfenster ziehen und ablegen.

Sie sollten eine grundlegende Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umarmt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `mein-bild.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, plus einem Schrägstrich, zum Beispiel `unterordner/mein-bild.jpg`.
- Um auf eine Zieldatei im Ordner **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn zum Beispiel `index.html` in einem Unterordner von `test-site` und `mein-bild.jpg` in `test-site` ist, könnten Sie `mein-bild.jpg` von `index.html` mit `../mein-bild.jpg` referenzieren.
- Sie können diese nach Belieben kombinieren, zum Beispiel `../unterordner/ein-weiterer-unterordner/mein-bild.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet normalerweise Rückwärtsschrägstriche, nicht Vorwärtsschrägstriche, z.B. `C:\Windows`. Dies ist im HTML-Code egal — auch wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code Vorwärtsschträgstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
