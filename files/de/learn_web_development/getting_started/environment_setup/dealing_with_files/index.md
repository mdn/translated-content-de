---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: a92a495c8483b26e18e677a364b0fc687832345c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien auf Ihrem lokalen Computer in einer sinnvollen Struktur organisieren, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte korrekt darstellen, bevor Sie sie schließlich auf einem Server veröffentlichen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Dateiexplorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem (OS) Ihres Computers und der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Dateien und Ordner bearbeiten.</li>
          <li>Bewährte Praktiken für die Benennung.</li>
          <li>Standard-Ordnerstruktur für Websites.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Dateien und Ordner bearbeiten

Es gibt viele verschiedene Möglichkeiten, die auf Ihrem Computer enthaltenen Dateien und Ordner zu erstellen und zu bearbeiten. Sie können dies über die Kommandozeile/das Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, worüber Sie im nächsten Artikel mehr erfahren werden. Viele Menschen finden es jedoch einfacher, zunächst visuell etwas über Dateisysteme zu lernen, worüber wir hier sprechen werden. Moderne Betriebssysteme (OSes) verfügen über eine leistungsfähige Benutzeroberfläche (UI) für Dateisysteme, mit der Sie Dateien und Ordner bei Bedarf bearbeiten können.

Unter macOS haben Sie beispielsweise das Programm Finder:

![Die macOS-Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Windows hingegen verfügt über den Datei-Explorer:

![Die Windows-Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde mit Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere Betriebssystemversion oder ein ganz anderes Betriebssystem, wodurch sich die Erfahrung unterscheidet. Im Web gibt es zahlreiche Leitfäden zur grundlegenden Nutzung von Betriebssystemen – wir empfehlen Ihnen, im Web nach Informationen zu Ihrem jeweiligen Betriebssystem zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der für jedes auf dem System vorhandene Benutzerkonto einen Ordner enthält, der auch als _Home_-Ordner des Benutzers bezeichnet wird. Dieser wird normalerweise durch ein Haus-Symbol dargestellt, damit er leichter zu finden ist. Der _Home_-Ordner enthält wiederum weitere wichtige Standardordner (und Dateien), die speziell für diesen Benutzer relevant sind, etwa _Documents_, _Music_ usw. Auf Ihrem Computer gibt es auch viele weitere Dateien und Ordner, aber darum müssen Sie sich vorerst nicht kümmern.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdateien, die sich auf Ihre Arbeit beziehen, irgendwo innerhalb Ihres _Home_-Ordners erstellen, vielleicht innerhalb von _Documents_. Das ist sinnvoll, da Webseiten-Dateien häufig als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Stellen Ihres Systems zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas beschädigen. Beschränken Sie sich darauf, Dateien innerhalb Ihres _Home_-Ordners zu erstellen und zu bearbeiten, bis Sie wissen, was Sie tun.

### Einen Ordner erstellen

Erstellen wir einen neuen Ordner, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in der Dateisystem-Benutzeroberfläche auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Documents_-Ordner.
2. Erstellen Sie an diesem Ort einen neuen Ordner mit dem Namen `web-projects`:
   1. Unter Windows können Sie dies tun, indem Sie im Fenster des Datei-Explorers die Schaltfläche _New_ auswählen und _Folder_ wählen (oder <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken), `web-projects` als Namen für das angezeigte neue Ordnersymbol eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken.
   2. Unter macOS können Sie dies tun, indem Sie im Finder-Menü _File_ > _New Folder_ auswählen (oder <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken) – es wird ein neuer Ordner namens _untitled folder_ angezeigt. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (das funktioniert auch bei Dateien):

- Klicken Sie unter Windows mit der rechten Maustaste auf den Ordner, wählen Sie im Menü _Rename_ und bearbeiten Sie dann den Namen. Einige Windows-Versionen zeigen zunächst ein vereinfachtes Menü an – möglicherweise müssen Sie mit der rechten Maustaste klicken, dann _Show more options_ und anschließend _Rename_ auswählen!
- Klicken Sie unter macOS auf den Ordnernamen bzw. wählen Sie ihn aus, um ihn zu bearbeiten.

### Einen Projektordner öffnen und Dateien in VS Code erstellen

Sie können zwar Textdateien in der Dateisystem-Benutzeroberfläche des Betriebssystems erstellen, aber im Allgemeinen ist es einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. Tatsächlich verfügt VS Code über einen eigenen Dateiexplorer, mit dem Sie alle Ordner und Dateien erstellen können, die Sie für Ihre Webprojekte benötigen.

Warum haben wir Sie dann dazu gebracht, einen Ordner über die Dateisystem-Benutzeroberfläche des Betriebssystems zu erstellen? Weil VS Code auf einen anfänglichen Ordner der obersten Ebene verwiesen werden muss!

Es ist außerdem nützlich, ein wenig darüber zu verstehen, wie das Dateisystem Ihres Betriebssystems strukturiert ist. Das wird hilfreicher, wenn Sie später komplexere Werkzeuge verwenden.

Öffnen wir jetzt unseren Ordner `web-projects` in VS Code:

1. Öffnen Sie VS Code.
2. Wählen Sie im Menü _File_ > _Open Folder..._ aus.
   > [!NOTE]
   > Wenn Sie die Tastatur verwenden, können Sie den Befehl _Open Folder_ unter Windows ausführen, indem Sie die <kbd>Ctrl</kbd>-Taste gedrückt halten und <kbd>K</kbd> und anschließend <kbd>O</kbd> drücken. Für macOS-Benutzer ist es am einfachsten, die _Command Palette_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> zu öffnen, „Open Folder“ einzugeben, um die Befehlsliste zu filtern, mit den Pfeiltasten zu _File: Open Folder_ zu navigieren und dann <kbd>Enter</kbd> zu drücken.
3. Es wird eine Mini-Version der Dateisystem-Benutzeroberfläche des Betriebssystems angezeigt. Verwenden Sie sie, um Ihren Ordner `web-projects` zu finden, wählen Sie ihn aus und drücken Sie dann die Schaltfläche _Select Folder_.
4. Ihnen wird ein Dialogfeld mit dem Titel _Do you trust the authors of the files in this folder?_ angezeigt. Lesen Sie es sorgfältig, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellen wird, daher können Sie auf _Yes, I trust the authors_ klicken.

Sie sollten Ihren Ordner `web-projects` im Bereich _EXPLORER_ von VS Code geöffnet sehen, wie unten dargestellt:

![Der VS-Code-Explorer-Bereich mit einem leeren Ordner namens web-projects](vs-code-explorer.png)

> [!WARNING]
> Stellen Sie erneut sicher, dass Sie sich vorerst darauf beschränken, Ihre eigenen Dateien innerhalb Ihres _Home_-Ordners zu bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Hinweis zur Tastaturnavigation in VS Code

VS Code verfügt, obwohl es keineswegs perfekt ist, über eine umfangreiche Sammlung von Tastenkombinationen. In diesem Artikel haben wir versucht, nützliche Tastenkombinationen anzugeben, wo immer dies möglich war. Umfassendere Listen finden Sie jedoch in der VS-Code-Referenz [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings).

Wenn Sie VS Code allgemein per Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um zwischen verschiedenen Bereichen der Benutzeroberfläche zu wechseln (<kbd>Shift</kbd> + <kbd>Tab</kbd> bringt Sie zu einer vorherigen Tab-Fokusposition). Wenn eine Tab-Fokusposition mehrere Schaltflächen enthält, können Sie mit den Pfeiltasten zwischen ihnen wechseln.

Wenn Sie gerade eine Datei bearbeiten, navigiert die Tab-Taste nicht durch die Benutzeroberfläche – sie fügt Tabulatorzeichen in die Datei ein. Um aus der Datei, die Sie bearbeiten, zum Bereich _EXPLORER_ zu wechseln, können Sie unter macOS <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> oder unter Windows <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken.

Um zum Dateieditorbereich zurückzukehren und zwischen den verschiedenen Dateien zu wechseln, die in unterschiedlichen Tabs geöffnet sind, halten Sie die <kbd>Ctrl</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> sowie <kbd>Shift</kbd> + <kbd>Tab</kbd>, um in der Liste geöffneter Tabs nach oben und unten zu wechseln (sowohl unter macOS als auch unter Windows). Sobald Sie die Datei hervorgehoben haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie über die entsprechenden Schaltflächen oben im Bereich _EXPLORER_ neue Dateien und Ordner erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das Symbol _New File..._ klicken (oder mit <kbd>Tab</kbd> dorthin navigieren und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie im angezeigten Texteingabefeld den Dateinamen „index.html“ ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im Tab _Welcome_, um Dateien und Ordner zu erstellen, da diese etwas anders funktionieren. Tatsächlich können Sie den Tab _Welcome_ schließen, da Sie ihn nicht benötigen. Klicken Sie dazu auf das „x“ auf der rechten Seite des Tabs oder drücken Sie unter macOS <kbd>Cmd</kbd> + <kbd>W</kbd> (unter Windows <kbd>Ctrl</kbd> + <kbd>W</kbd>).

Gehen Sie nun zurück zur Dateisystem-Benutzeroberfläche Ihres Betriebssystems, öffnen Sie Ihren Ordner `web-projects` per Doppelklick und Sie sollten dort ebenfalls Ihre Datei `index.html` sehen. VS Code verwendet das zugrunde liegende Dateisystem des Betriebssystems und kein eigenes, seltsames Dateisystem.

### index.html in einen eigenen Unterordner verschieben

Sie können Ordner innerhalb anderer Ordner erstellen (diese werden _Unterordner_ genannt), und zwar beliebig viele Ebenen tief. Sie können außerdem Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie per Drag-and-Drop auf diesen Ordner ziehen.

Sehen wir uns das an und verschieben dabei unsere Datei `index.html` in ihren eigenen Unterordner. Wir möchten sie nicht direkt im Hauptordner `web-projects` liegen haben.

1. Erstellen Sie innerhalb von `web-projects` einen neuen Ordner über die Schaltfläche _New Folder..._ im Bereich _EXPLORER_ von VS Code.
2. Nennen Sie ihn `test-site`.
3. Sie sollten nun die Datei `index.html` auf den Ordner `test-site` ziehen und dort ablegen können, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie die Tastatur verwenden, können Sie dies mit den folgenden Schritten tun:
   >
   > 1. Verwenden Sie die Pfeiltasten nach oben und unten, um den Fokusrahmen über die Datei `index.html` zu bewegen.
   > 2. Drücken Sie unter macOS <kbd>Cmd</kbd> + <kbd>X</kbd> (unter Windows <kbd>Ctrl</kbd> + <kbd>X</kbd>), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokusrahmen über den Ordner zu bewegen.
   > 4. Drücken Sie unter macOS <kbd>Cmd</kbd> + <kbd>V</kbd> (unter Windows <kbd>Ctrl</kbd> + <kbd>V</kbd>), um die Datei in diesen Ordner zu verschieben.

Es gibt noch viel mehr, was wir über die Verwendung von Dateisystem-Benutzeroberflächen des Betriebssystems und VS Code erklären könnten, aber wir haben nur begrenzt Platz, daher belassen wir es vorerst dabei. Das hat Ihnen genug Informationen gegeben, um loszulegen, und wir empfehlen Ihnen, im Web nach Informationen dazu zu suchen, wie Sie andere Aufgaben mit Dateien und Ordnern erledigen können.

Kommen wir nun zu einer kurzen Besprechung der Website-Struktur.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal auf Websites arbeiten (auf Ihrem Computer), sollten Sie alle zu einer Website gehörenden Dateien in einem einzigen Ordner aufbewahren. Sie sollten wiederum alle Ihre Website-Ordner in einem zentralen Ordner speichern, damit sie alle leicht zu finden sind.

Früher in diesem Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Außerdem haben wir Sie einen Unterordner namens `test-site` mit einer leeren Datei `index.html` darin erstellen lassen.

Fügen wir innerhalb von `test-site` weitere Bestandteile hinzu, um eine typische Website-Struktur zu demonstrieren. Im nächsten Modul werden Sie darin ein vollständiges Website-Beispiel erstellen. Die häufigsten Bestandteile jedes Website-Projekts sind eine Index-HTML-Datei und Ordner für Bilder, Style-Dateien und Script-Dateien:

1. **`index.html`**: Diese Datei enthält in der Regel den Inhalt Ihrer Startseite, also den Text und die Bilder, die Personen sehen, wenn sie Ihre Website zum ersten Mal besuchen.
2. **Ordner `images`**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden.
3. **Ordner `styles`**: Dieser Ordner enthält den CSS-Code, der zum Gestalten Ihrer Inhalte verwendet wird (zum Beispiel zum Festlegen von Text- und Hintergrundfarben).
4. **Ordner `scripts`**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um Ihrer Website interaktive Funktionen hinzuzufügen (zum Beispiel um festzulegen, was geschieht, wenn auf Schaltflächen geklickt wird).

Sie sollten bereits eine Datei `index.html` innerhalb von `test-site` haben. Erstellen Sie nun darin die Ordner `images`, `styles` und `scripts`.

## Dateinamen

Ein Dateiname besteht im Allgemeinen aus zwei Teilen: dem **Namen** und der **Erweiterung**. Sehen Sie sich die oben erstellte Datei an: `index.html`:

- Der Name ist in diesem Fall `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen für verwendbare Zeichen haben. Es ist besser, zumindest zu Beginn bei Zahlen und Buchstaben zu bleiben. Darüber hinaus können Systeme bestimmten Namen oder Teilen von Namen eine besondere Bedeutung geben – wie bereits erwähnt, werden `index`-Dateien häufig als Hauptdatei der Startseite einer Website erkannt.
- Die Dateierweiterung identifiziert den Dateityp und wird von Computersystemen verwendet, um zu erkennen, welche Art von Inhalt sie in der Datei erwarten können, welches Programm zum Öffnen der Datei verwendet werden sollte usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Klartext und insbesondere HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass er beim Versuch, die Datei zu öffnen, Ihren Standard-Texteditor verwenden sollte, der VS Code sein sollte, wenn Sie bisher alle unsere Anweisungen befolgt haben.

Das gilt nicht in allen Fällen, aber die meisten Dateien benötigen eine Erweiterung, um korrekt verarbeitet zu werden. Das Entfernen oder Ändern der Dateierweiterung führt wahrscheinlich zu Fehlern; Sie sollten sie daher nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu verwenden, zum Beispiel `my.cats.html`. In solchen Fällen wird angenommen, dass der letzte Punkt den Beginn der Dateierweiterung markiert.

Auf Windows-Computern könnten Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Hide extensions for known file types** aktiviert hat. Sie können dies deaktivieren, indem Sie zum Datei-Explorer gehen, die Option **Folder options…** auswählen, das Kontrollkästchen **Hide extensions for known file types** deaktivieren und dann auf **OK** klicken. Genauere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

### Bewährte Praktiken für die Benennung von Dateien

Während Sie diesem Kurs folgen, werden Sie feststellen, dass wir Sie immer bitten, Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen zu benennen. Das Ignorieren dieses Ratschlags kann auf viele Arten Probleme verursachen – einige der häufigsten sind:

1. Viele Computersysteme, einschließlich der meisten Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie beispielsweise ein Bild unter `test-site/images/MyImage.jpg` auf Ihrer Website ablegen und dann in einer anderen Datei versuchen, mit `test-site/images/myimage.jpg` auf das Bild zu verweisen, funktioniert dies möglicherweise nicht.
2. Wenn Sie Befehle in der Kommandozeile aufrufen, müssen Sie Dateinamen mit Leerzeichen in Anführungszeichen setzen, andernfalls werden sie als zwei separate Elemente interpretiert.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren unter bestimmten Umständen nicht gut mit Leerzeichen in Dateinamen (beispielsweise, wenn diese Dateien zu importierende Module sind).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie beispielsweise eine Datei namens <code>my&nbsp;file.html</code> im Stammordner Ihres Servers haben, ist sie in der Regel unter einer URL wie `https://example.com/my%20file.html` erreichbar. Webserver ersetzen die Leerzeichen in Dateinamen normalerweise durch `%20` (weil URLs {{Glossary("Percent-encoding", "prozentkodiert")}} sind), was bei einigen Systemen subtile Fehler verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs exakt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) – zum Beispiel `my-file.html` statt <code>my&nbsp;file.html</code>. Dies ist eine gute Praxis.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie später auf weniger Probleme stoßen.

> [!NOTE]
> Weitere bewährte Praktiken für Dateinamen und URLs finden Sie unter [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben – im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Wenn Sie beispielsweise eine Webseite mit einem Bild erstellen, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Speicherort des Bildes angibt, das Sie anzeigen möchten.

Sehen wir uns ein grundlegendes Beispiel dafür an. Möglicherweise verstehen Sie noch nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Web nach einem Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Images](https://www.google.com/imghp)), und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Symbolbild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihrem Ordner _images_ ab.
3. Stellen Sie sicher, dass die Bilddatei einen kurzen und einfachen Namen ohne Leerzeichen hat. Beispielsweise sind `firefox-icon.png` und `cat.jpg` gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie außerdem sicher, dass Sie die Dateierweiterung beibehalten.

Nun fügen wir der Datei `index.html` Inhalt hinzu, damit sie die Bilddatei finden und anzeigen kann.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau wie unten dargestellt in die Datei ein. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Sie werden sehr bald viel mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen HTML mitteilen, wo sich das Bild befindet. Das Bild liegt im Ordner _images_, der sich im selben Ordner wie `index.html` befindet. Um in der Dateistruktur von `index.html` zu unserem Bild zu gelangen, benötigen wir den Dateipfad `images/your-image-filename`. Wenn Ihr Bild beispielsweise `firefox-icon.png` hieße, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihrem HTML-Code zwischen den doppelten Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihren Webbrowser. Dazu können Sie bei gedrückter <kbd>Ctrl</kbd>-Taste bzw. mit der rechten Maustaste auf die HTML-Datei klicken, _Open With_ auswählen und im daraufhin angezeigten Untermenü einen Webbrowser auswählen. Sie können auch die Dateisystem-Benutzeroberfläche und ein Webbrowserfenster auf demselben Bildschirm öffnen und die HTML-Datei per Drag-and-Drop auf das Webbrowserfenster ziehen.

Sie sollten eine grundlegende Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer grundlegenden Website, die nur das Firefox-Logo zeigt – einen flammenden Fuchs, der die Welt umschließt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im selben Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, gefolgt von einem Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im Ordner **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn sich `index.html` beispielsweise in einem Unterordner von `test-site` und `my-image.jpg` in `test-site` befindet, können Sie von `index.html` aus mit `../my-image.jpg` auf `my-image.jpg` verweisen.
- Sie können diese beliebig kombinieren, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet in der Regel Backslashes statt Forward Slashes, beispielsweise `C:\Windows`. Das spielt in HTML keine Rolle – auch wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code weiterhin Forward Slashes verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
