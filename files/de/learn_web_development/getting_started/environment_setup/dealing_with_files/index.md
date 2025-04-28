---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer zusammenfügen, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte richtig darstellen, bevor Sie diese schließlich auf einen Server stellen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem (OS) und die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Manipulation von Dateien und Ordnern.</li>
          <li>Beste Praktiken für die Benennung.</li>
          <li>Standard-Website-Ordnerstruktur.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipulation von Dateien und Ordnern

Es gibt viele verschiedene Möglichkeiten, die auf Ihrem Computer enthaltenen Dateien und Ordner zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/das Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, was Sie im nächsten Artikel genauer lernen werden. Viele Menschen finden es jedoch einfacher, visuell über Dateisysteme zu lernen, was wir hier besprechen werden. Moderne Betriebssysteme (OSes) verfügen über eine robuste Dateisystem-Benutzeroberfläche (UI), die Sie verwenden können, um Dateien und Ordner nach Bedarf zu manipulieren.

Unter macOS haben Sie zum Beispiel das Programm Finder:

![Die macOS-Anwendung Finder, die den Inhalt eines typischen Home-Ordners anzeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows-Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners anzeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde unter Verwendung von Windows 11 und macOS 15 geschrieben. Sie verwenden möglicherweise eine andere OS-Version oder ein ganz anderes OS, in diesem Fall kann die Erfahrung etwas abweichen. Es gibt zahlreiche Leitfäden im Internet zur grundlegenden Nutzung des Betriebssystems — wir empfehlen Ihnen, im Internet nach Informationen zu Ihrem spezifischen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der für jedes auf dem System vorhandene Benutzerkonto einen Ordner enthält, auch bekannt als Home-Ordner des Benutzers. Dieser wird normalerweise durch ein Haus-Symbol dargestellt, um ihn leichter zu finden. Im Home-Ordner befinden sich dann andere wichtige Standardordner (und Dateien), die für diesen Benutzer relevant sind, wie _Documents_, _Music_, etc. Es gibt noch viele andere Dateien und Ordner auf Ihrem Computer, aber kümmern Sie sich vorerst nicht darum.

Der momentan angemeldete Benutzer kann standardmäßig nur auf seinen eigenen Home-Ordner zugreifen.

Sie sollten Projektdateien, die mit Ihrer Arbeit zusammenhängen, irgendwo in Ihrem Home-Ordner erstellen, vielleicht in _Documents_. Dies ist sinnvoll, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Stellen auf Ihrem System zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputt machen. Im Moment sollten Sie lediglich Dateien in Ihrem Home-Ordner erstellen und bearbeiten.

### Einen Ordner erstellen

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in Ihrer Dateisystem-UI auf Ihren Home-Ordner und doppelklicken Sie dann auf Ihren _Documents_-Ordner.
2. Erstellen Sie in diesem Verzeichnis einen neuen Ordner mit dem Namen `web-projects`:
   1. Unter Windows kann dies erfolgen, indem Sie die Schaltfläche _New_ im Datei-Explorer-Fenster auswählen und _Folder_ auswählen (oder <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken), `web-projects` als Namen des neuen Ordner-Symbols eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken.
   2. Unter macOS kann dies erfolgen, indem Sie im Finder-Menü _File_ > _New Folder_ auswählen (oder <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken) — Sie sehen ein neues Verzeichnis mit dem Namen _untitled folder_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Ihnen ein Tippfehler unterläuft, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (dies funktioniert auch mit Dateien):

- Unter Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Rename_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben ein vereinfachtes Menü, das ursprünglich angezeigt wird — möglicherweise müssen Sie mit der rechten Maustaste klicken, dann _Show more options_ auswählen und dann _Rename_ auswählen!
- Unter macOS klicken/s wählen Sie auf den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Obwohl Sie Textdateien innerhalb der Dateisystem-UI des Betriebssystems erstellen können, ist es im Allgemeinen einfacher und weniger fehleranfällig, sie innerhalb Ihres Code-Editors zu erstellen. Tatsächlich hat VS Code einen eigenen Datei-Explorer, der es Ihnen ermöglicht, alle Ordner und Dateien zu erstellen, die Sie für Ihre Webprojekte benötigen.

Warum haben wir Sie dazu gebracht, einen Ordner über die Dateisystem-UI des Betriebssystems zu erstellen? Weil VS Code auf einen initialen obersten Ordner hingewiesen werden muss!

Es ist auch nützlich, ein wenig über die Struktur Ihres OS-Dateisystems zu verstehen. Dies wird nützlicher, wenn Sie später komplexere Werkzeuge verwenden.

Lassen Sie uns jetzt unseren `web-projects` Ordner in VS Code öffnen:

1. Öffnen Sie VS Code.
2. Wählen Sie im Menü _File_ > _Open Folder..._.
   > [!NOTE]
   > Wenn Sie Tastaturbefehle nutzen, können Sie den _Open Folder_ Befehl unter Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> dann <kbd>O</kbd> drücken. Für macOS-Benutzer ist es am einfachsten, die _Command Palette_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> zu öffnen, "Open Folder" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu benutzen, um _File: Open Folder_ auszuwählen, und dann <kbd>Enter</kbd> zu drücken.
3. Es erscheint eine Mini-Version der Dateisystem-UI des OS. Verwenden Sie sie, um Ihren `web-projects` Ordner zu finden, wählen Sie ihn aus und klicken Sie dann auf die Schaltfläche _Select Folder_.
4. Es wird ein Dialogfeld mit dem Titel _Do you trust the authors of the files in this folder?_ angezeigt. Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Derzeit sind Sie die einzige Person, die in diesem Ordner Dateien erstellen wird, daher können Sie auf _Yes, I trust the authors_ klicken.

Sie sollten Ihren `web-projects` Ordner im _EXPLORER_ Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Vergewissern Sie sich erneut, dass Sie momentan Ihre eigenen Dateien nur innerhalb Ihres Home-Ordners bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Exkurs zur Navigation mit der Tastatur in VS Code

VS Code bietet zwar keine perfekten, aber dennoch eine umfangreiche Sammlung an Tastenkombinationen. Im Verlauf dieses Artikels haben wir versucht, nützliche davon zu erwähnen, wo immer möglich, aber Sie können umfassendere Listen im [VS Code Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings) finden.

Allgemein können Sie mit der <kbd>Tab</kbd>-Taste zwischen verschiedenen Bereichen der VS-Code-Benutzeroberfläche wechseln (<kbd>Shift</kbd> + <kbd>Tab</kbd> bringt Sie zu einer vorherigen Tab-Fokus-Position). Wenn es mehrere Schaltflächen in einer Tab-Fokus-Position gibt, können Sie mit den Pfeiltasten zwischen ihnen bewegen.

Wenn Sie derzeit eine Datei bearbeiten, navigiert die Tabulatortaste nicht durch die Benutzeroberfläche — sie fügt Tabulatorzeichen in die Datei ein. Um vom Datei-Bereich zum _EXPLORER_-Bereich zu wechseln, können Sie auf macOS <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken, oder auf Windows <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.

Um zum Dateieditor-Bereich zurückzukehren und zwischen verschiedenen Dateien in verschiedenen Registerkarten zu wechseln, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd>, um in der Liste der geöffneten Registerkarten nach oben und unten zu wechseln (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei hervorgehoben haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu dieser Registerkarte zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_ Paneel erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das _New File..._ Symbol klicken (oder mit <kbd>Tab</kbd> dorthin navigieren und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie den Dateinamen "index.html" in das erscheinende Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben in der _Welcome_ Tab, um Dateien und Ordner zu erstellen, da sie etwas anders funktionieren. Tatsächlich können Sie die _Welcome_ Tab schließen, da Sie sie nicht benötigen. Schließen Sie sie, indem Sie auf das „x“ rechts oben in der Registerkarte klicken oder auf macOS <kbd>Cmd</kbd> + <kbd>W</kbd> drücken (<kbd>Ctrl</kbd> + <kbd>W</kbd> auf Windows).

An diesem Punkt gehen Sie zurück zu Ihrer Dateisystem-UI des OS, gehen Sie in Ihren `web-projects` Ordner, indem Sie darauf doppelklicken, und Sie sollten dort auch Ihre `index.html` Datei sehen. VS Code verwendet das zugrunde liegende Dateisystem des OS, und nicht ein eigenes, merkwürdiges Dateisystem.

### Verschieben der index.html in einen eigenen Unterordner

Sie können Ordner in andere Ordner erstellen (genannt _Sub-Ordner_), so viele Ebenen tief, wie Sie möchten. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie darauf ziehen und ablegen.

Lassen Sie uns das erkunden und dabei unsere `index.html` Datei in ihren eigenen Unterordner verschieben. Wir möchten sie eigentlich nicht im Hauptordner `web-projects` belassen.

1. Erstellen Sie einen neuen Ordner in `web-projects`, indem Sie die Schaltfläche _New Folder..._ im VS Code _EXPLORER_ Bereich verwenden.
2. Nennen Sie ihn `test-site`.
3. Sie sollten jetzt in der Lage sein, die `index.html` Datei zu ziehen und auf dem `test-site` Ordner abzulegen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie Tastaturbefehle nutzen, können Sie dies mit folgenden Schritten erreichen:
   >
   > 1. Verwenden Sie die Pfeiltasten nach oben und unten, um den Fokusumriss über die `index.html` Datei zu bewegen.
   > 2. Drücken Sie <kbd>Cmd</kbd> + <kbd>X</kbd> auf macOS (<kbd>Ctrl</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokusumriss über den Ordner zu bewegen.
   > 4. Drücken Sie <kbd>Cmd</kbd> + <kbd>V</kbd> auf macOS (<kbd>Ctrl</kbd> + <kbd>V</kbd> auf Windows), um die Datei in den Ordner zu verschieben.

Es gibt viel mehr, das wir über die Nutzung der Dateisystem-UI des OS und VS Code einbeziehen könnten, aber wir haben begrenzten Platz, daher belassen wir es für jetzt dabei. Dies hat Ihnen genug Informationen gegeben, um zu beginnen, und wir ermutigen Sie, im Internet nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern tun können.

Lassen Sie uns zu einer kurzen Diskussion der Website-Struktur übergehen.

## Welche Struktur sollte eine Website haben?

Wenn Sie an Websites lokal (auf Ihrem Computer) arbeiten, sollten Sie alle zugehörigen Dateien für jede Seite in einem einzigen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, sodass alle leicht zu finden sind.

Zu Beginn des Artikels haben wir Sie dazu angeleitet, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben auch einen Unterordner namens `test-site` mit einer leeren `index.html` Datei darin erstellt.

Lassen Sie uns einige weitere Merkmale innerhalb von `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren; im nächsten Modul werden wir Sie dazu anleiten, ein vollständiges Website-Beispiel darin aufzubauen. Die häufigsten Dinge, die jedes Website-Projekt enthält, sind eine index HTML-Datei und Ordner, um Bilder, Style-Dateien und Script-Dateien zu enthalten:

1. **`index.html`**: Diese Datei enthält in der Regel Ihre Homepage-Inhalte, d.h. den Text und die Bilder, die Personen sehen, wenn sie das erste Mal auf Ihre Seite gehen.
2. **`images` Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Seite verwenden.
3. **`styles` Ordner**: Dieser Ordner enthält den CSS-Code, der verwendet wird, um Ihre Inhalte zu gestalten (zum Beispiel Text- und Hintergrundfarben festlegen).
4. **`scripts` Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um Ihrer Seite interaktive Funktionalitäten hinzuzufügen (zum Beispiel definieren, was passiert, wenn auf Schaltflächen geklickt wird).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html` Datei innerhalb von `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Es gibt im Allgemeinen zwei Teile eines Dateinamens — den **Namen** und die **Erweiterung**. Nehmen Sie die oben erstellte Datei — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl unterschiedliche Computersysteme verschiedene Einschränkungen für erlaubte Zeichen haben. Es ist besser, sich zu Beginn an Zahlen und Buchstaben zu halten. Außerdem kann Systemen spezielle Bedeutungen für bestimmte Namen oder Teile von Namen geben — wie wir bereits gesagt haben, werden `index`-Dateien häufig als die Hauptdatei der Homepage einer Website erkannt.
- Die Dateierweiterung identifiziert den Typ der Datei, mit der wir es zu tun haben, und wird von Computersystemen verwendet, um zu erkennen, welche Art von Inhalt die Datei erwartet, welches Programm sie verwenden sollte, um die Datei zu öffnen etc. in diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei einfachen Text enthalten sollte, genauer gesagt HTML-Code. Aufgrund der Erweiterung weiß Ihr Computer, dass er sie mit Ihrem Standard-Texteditor öffnen sollte, was VS Code sein sollte, wenn Sie all unseren Anweisungen bis jetzt gefolgt sind.

Es ist nicht in allen Fällen wahr, aber die meisten Dateien benötigen eine Erweiterung, um richtig gehandhabt zu werden. Das Entfernen oder Ändern der Dateierweiterung wird wahrscheinlich Fehler verursachen, daher sollten Sie sie nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu setzen, zum Beispiel `my.cats.html`. In solchen Fällen wird der letzte Punkt als Beginn der Dateierweiterung angesehen.

Auf Windows-Computern könnten Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, weil Windows standardmäßig eine Option namens **Hide extensions for known file types** aktiviert hat. Sie können dies deaktivieren, indem Sie in den Datei-Explorer gehen, die Option **Folder options…** auswählen, das Kontrollkästchen **Hide extensions for known file types** deaktivieren und dann auf **OK** klicken. Für genauere Informationen, die Ihre Windows-Version betreffen, können Sie im Internet suchen.

### Beste Praktiken für die Benennung von Dateien

Während Sie diesem Kurs folgen, werden Sie bemerken, dass wir immer darauf achten, dass Sie Ordner und Dateien vollständig in Kleinbuchstaben ohne Leerzeichen benennen. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Datei- und Ordnernamen Probleme verursachen kann — einige der häufigeren sind die folgenden:

<!-- cSpell:ignore myimage -->

1. Viele Computersysteme, einschließlich der meisten Webserver, sind nicht „case-sensitive“. Wenn Sie beispielsweise ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` haben und in einer anderen Datei versuchen, das Bild mit `test-site/images/myimage.jpg` anzurufen, funktioniert es möglicherweise nicht.
2. Wenn Sie Befehle in der Befehlszeile aufrufen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, andernfalls werden sie als zwei separate Elemente interpretiert.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren nicht gut mit Leerzeichen in Dateinamen unter bestimmten Umständen (zum Beispiel, wenn diese Dateien Module zum Importieren sind).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my file.html` im Stammverzeichnis Ihres Servers haben, ist sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` erreichbar. Web-Server ersetzen normalerweise die Leerzeichen in Dateinamen mit `%20` (da URLs {{Glossary("Percent-encoding", "percent-encoded")}} sind), was subtile Fehler mit einigen Systemen verursachen kann, wenn sie annehmen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` statt `my file.html`. Das ist eine gute Praxis.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest so lange, bis Sie wissen, was Sie tun. So begegnen Sie weniger Problemen.

> [!NOTE]
> Weitere bewährte Verfahren für Dateinamen und URLs finden Sie in [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Zum Beispiel muss Ihr Webseitencode, wenn Sie eine Webseite mit einem Bild erstellen, einen Dateipfad enthalten, der den Standort des angezeigten Bildes angibt.

Lassen Sie uns ein einfaches Beispiel dafür durchgehen. Es macht nichts, wenn Sie im Moment noch nicht verstehen, was das alles bedeutet.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel über einen Dienst wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie unser [Firefox-Icon-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) nutzen, um dieses Beispiel zu verwenden.
2. Legen Sie das Bild in Ihrem _images_-Ordner ab.
3. Stellen Sie sicher, dass die Bilddatei einen kurzen und einfachen Namen hat, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Achten Sie auch darauf, dass Sie die Dateierweiterung beibehalten.

Nun werden wir Inhalte zur `index.html` Datei hinzufügen, die es ihr ermöglicht, die Bilddatei zu lokalisieren und anzuzeigen.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt in die Datei genau so ein, wie unten gezeigt. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Sie werden bald viel mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo das Bild ist. Das Bild befindet sich im _images_-Ordner, der im selben Ordner wie `index.html` liegt. Um die Dateistruktur von `index.html` zu unserem Bild zu gehen, lautet der Dateipfad, den wir benötigen, `images/your-image-filename`. Wenn Ihr Bild beispielsweise `firefox-icon.png` heißt, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie <kbd>Strg</kbd>/Rechtsklick auf die HTML-Datei durchführen, dann _Open With_ auswählen und einen Webbrowser aus dem erscheinenden Untermenü auswählen. Sie können auch Ihre OS-Datei-UI und ein Webbrowserfenster nebeneinander öffnen und die HTML-Datei über das Webbrowserfenster ziehen und dort ablegen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umarmt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, plus einen Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im Ordner **oberhalb** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` beispielsweise in einem Unterordner von `test-site` wäre und `my-image.jpg` in `test-site` wäre, könnten Sie von `index.html` aus auf `my-image.jpg` mit `../my-image.jpg` verweisen.
- Sie können diese beliebig kombinieren, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet normalerweise Backslashes, nicht Schrägstriche, z.B. `C:\Windows`. Das spielt bei HTML keine Rolle — selbst wenn Sie Ihre Website unter Windows entwickeln, sollten Sie in Ihrem Code Schrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
