---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalten, Code, Stylesheets, Medieninhalten und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien auf Ihrem lokalen Computer in eine sinnvolle Struktur zusammenfügen, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte richtig gestalten, bevor Sie sie schließlich auf einen Server hochladen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

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
          <li>Bearbeiten von Dateien und Ordnern.</li>
          <li>Beste Praktiken für die Benennung.</li>
          <li>Standard-Ordnerstruktur für Websites.</li>
          <li>Umgang mit Datei-Pfaden.</li>
          <li>Umgang mit Dateiendungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten von Dateien und Ordnern

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Kommandozeile/Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, mehr dazu im nächsten Artikel. Viele Menschen finden es jedoch einfacher, zunächst visuell über Dateisysteme zu lernen, was wir hier besprechen werden. Moderne Betriebssysteme (OS) verfügen über eine robuste Benutzeroberfläche für Dateisysteme (UI), die Sie zum Bearbeiten von Dateien und Ordnern nach Bedarf verwenden können.

Auf macOS gibt es beispielsweise das Finder-Programm:

![Die macOS Finder-Anwendung zeigt den Inhalt eines typischen Home-Ordners](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung zeigt den Inhalt eines typischen Home-Ordners](file-explorer.png)

> [!NOTE]
> Diese Anleitung wurde mit Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere Version des Betriebssystems oder ein völlig anderes Betriebssystem, in diesem Fall wird das Erlebnis anders sein. Es gibt viele Anleitungen im Internet zur grundlegenden Nutzung des Betriebssystems - wir empfehlen Ihnen, im Internet nach Informationen über Ihr spezifisches Betriebssystem zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto auf dem System enthält, auch bekannt als der _Home_-Ordner des Benutzers. Dieser wird normalerweise durch ein Haus-Symbol dargestellt, um ihn leichter zu finden. Im _Home_-Ordner befinden sich weitere wichtige Standardordner (und Dateien), die speziell für diesen Benutzer relevant sind, wie _Documents_, _Music_ usw. Es gibt auch viele andere Dateien und Ordner auf Ihrem Computer, aber machen Sie sich darüber vorerst keine Sorgen.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdateien, die sich auf Ihre Arbeit beziehen, irgendwo in Ihrem _Home_-Ordner erstellen, möglicherweise im _Documents_-Ordner. Das macht Sinn, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Orten auf Ihrem System zu erstellen und zu bearbeiten (z. B. in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputt machen. Bleiben Sie vorerst bei der Erstellung und Bearbeitung von Dateien in Ihrem _Home_-Ordner, bis Sie wissen, was Sie tun.

### Erstellen eines Ordners

Erstellen wir einen neuen Ordner, um alle unsere Web-Projekte zu speichern.

1. Klicken Sie in Ihrer Benutzeroberfläche des Dateisystems auf Ihren _Home_-Ordner und dann doppelt auf Ihren _Documents_-Ordner.
2. Erstellen Sie an diesem Ort einen neuen Ordner namens `web-projects`:
   1. In Windows können Sie dies tun, indem Sie die Schaltfläche _Neu_ im Datei-Explorer-Fenster auswählen und _Ordner_ auswählen (oder <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken), den Namen des neuen Ordners `web-projects` eingeben und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken.
   2. In macOS können Sie dies tun, indem Sie im Finder-Menü _Datei_ > _Neuer Ordner_ auswählen (oder <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> drücken) — Sie sehen einen neuen Ordner mit dem Namen _unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (das funktioniert auch mit Dateien):

- In Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten den Namen. Einige Windows-Versionen haben anfangs ein vereinfachtes Menü - Sie müssen möglicherweise mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ auswählen und dann _Umbenennen_ auswählen!
- In macOS klicken/selektieren Sie den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Während Sie Textdateien im Dateisystem-UI des OS erstellen können, ist es in der Regel einfacher und weniger fehleranfällig, diese in Ihrem Code-Editor zu erstellen. Tatsächlich hat VS Code einen eigenen Datei-Explorer, der es Ihnen ermöglicht, alle Ordner und Dateien zu erstellen, die Sie für Ihre Web-Projekte benötigen.

Warum haben wir Sie trotzdem den Ordner mit dem Dateisystem-UI des OS erstellen lassen? Weil VS Code initial auf einen übergeordneten Ordner zeigen muss!

Es ist auch nützlich, ein wenig darüber zu verstehen, wie Ihr Dateisystem des OS strukturiert ist. Dies wird nützlicher, wenn Sie später komplexere Werkzeuge verwenden.

Öffnen wir jetzt unseren `web-projects`-Ordner in VS Code:

1. Öffnen Sie VS Code.
2. Wählen Sie _Datei_ > _Ordner öffnen..._ aus dem Menü.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie den Befehl _Ordner öffnen_ in Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> und dann <kbd>O</kbd> drücken. Der einfachste Weg für einen macOS-Benutzer ist, die _Befehlspalette_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu verwenden, um zu _Datei: Ordner öffnen_ zu wechseln, und dann <kbd>Enter</kbd> zu drücken.
3. Ein Miniatur-UI des Dateisystems des OS erscheint. Verwenden Sie es, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die Schaltfläche _Ordner auswählen_.
4. Sie werden mit einem Dialogfeld mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ konfrontiert. Lesen Sie dies sorgfältig, um zu verstehen, worum es geht. Derzeit sind Sie die einzige Person, die Dateien in diesem Ordner erstellen wird, sodass Sie auf _Ja, ich vertraue den Autoren_ klicken können.

Sie sollten Ihren `web-projects`-Ordner im VS Code _EXPLORER_-Fenster geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel zeigt einen leeren Ordner namens web-projects](vs-code-explorer.png)

> [!WARNING]
> Achten Sie nochmals darauf, vorerst nur Ihre eigenen Dateien in Ihrem _Home_-Ordner zu bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Exkurs zur Navigation mit der Tastatur in VS Code

VS Code, wenn auch nicht perfekt, verfügt über eine umfangreiche Reihe von Tastenkombinationen. In diesem Artikel haben wir versucht, wo möglich, nützliche Kombinationen einzufügen, aber Sie finden umfassendere Listen im VS Code [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings).

Im Allgemeinen, wenn Sie in VS Code über die Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um zwischen verschiedenen Bereichen der Benutzeroberfläche zu wechseln (<kbd>Shift</kbd> + <kbd>Tab</kbd>, um zu einer vorherigen Registerkartenfokussierung zu wechseln). Wenn sich mehrere Schaltflächen in einer Registerkartenfokussierung befinden, können Sie mit den Pfeiltasten zwischen ihnen wechseln.

Wenn Sie gerade eine Datei bearbeiten, navigiert die Tabulatortaste nicht um die Benutzeroberfläche – sie fügt Tabulatorzeichen in die Datei ein. Um von der Datei, die Sie bearbeiten, zum _EXPLORER_-Fenster zu wechseln, können Sie auf macOS <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken oder auf Windows <kbd>Strg</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.

Um zurück zum Dateibearbeitungsfenster zu wechseln und zwischen den verschiedenen in verschiedenen Registerkarten geöffneten Dateien zu navigieren, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd>, um durch die Liste der geöffneten Registerkarten zu navigieren (sowohl auf macOS als auch auf Windows). Wenn Sie die Datei, die Sie bearbeiten möchten, hervorgehoben haben, lassen Sie die Tasten los, um zu dieser Registerkarte zu wechseln.

#### Erstellen einer Datei

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Fenster erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das _Neue Datei..._-Symbol klicken (oder mit <kbd>Tab</kbd> dahin gehen und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie als Dateinamen "index.html" im erscheinenden Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im _Willkommen_-Tab, um Dateien und Ordner zu erstellen, da diese etwas anders funktionieren. Tatsächlich können Sie das _Willkommen_-Tab schließen, da Sie es nicht benötigen. Tun Sie dies, indem Sie auf das "x" auf der rechten Seite der Registerkarte klicken oder indem Sie auf macOS <kbd>Cmd</kbd> + <kbd>W</kbd> drücken (<kbd>Strg</kbd> + <kbd>W</kbd> auf Windows).

Gehen Sie jetzt zurück zur Benutzeroberfläche des Dateisystems Ihres OS, gehen Sie in Ihren `web-projects`-Ordner, indem Sie darauf doppelklicken, und Sie sollten Ihre `index.html`-Datei dort ebenfalls sehen. VS Code verwendet das zugrunde liegende Dateisystem des OS, nicht ein eigenes.

### Verschieben von index.html in einen eigenen Unterordner

Sie können Ordner innerhalb anderer Ordner erstellen (genannt _Unterordner_) so tief in der Hierarchie, wie Sie möchten. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie darauf ziehen und ablegen.

Lassen Sie uns dies erkunden und dabei unsere `index.html`-Datei in einen eigenen Unterordner verschieben. Wir möchten sie nicht wirklich im Hauptordner `web-projects` haben.

1. Erstellen Sie einen neuen Ordner innerhalb von `web-projects`, indem Sie im _EXPLORER_-Fenster von VS Code auf die Schaltfläche _Neuer Ordner..._ klicken.
2. Benennen Sie ihn `test-site`.
3. Jetzt sollten Sie in der Lage sein, die `index.html`-Datei zu ziehen und auf den `test-site`-Ordner abzulegen, um die Datei in diesen Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie dies mit den folgenden Schritten tun:
   >
   > 1. Verwenden Sie die Pfeiltasten auf und ab, um den Fokus auf die Datei `index.html` zu legen.
   > 2. Drücken Sie <kbd>Cmd</kbd> + <kbd>X</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokus auf den Ordner zu legen.
   > 4. Drücken Sie <kbd>Cmd</kbd> + <kbd>V</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>V</kbd> auf Windows), um die Datei in diesen Ordner zu verschieben.

Es gibt weitaus mehr, was wir über die Bedienung von Dateisystem-UIs des OS und VS Code sagen könnten, aber wir haben begrenzten Platz, daher belassen wir es dabei. Dies hat Ihnen genug Informationen gegeben, um loszulegen, und wir empfehlen Ihnen, im Internet nach Informationen zu suchen, wie man andere Dinge mit Dateien und Ordnern tut.

Lasst uns jetzt zu einer kurzen Diskussion über die Struktur von Websites übergehen.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal (auf Ihrem Computer) an Websites arbeiten, sollten Sie alle zugehörigen Dateien für jede Website in einem einzigen Ordner aufbewahren. Umgekehrt sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Bereits früher im Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben Sie auch dazu veranlasst, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Funktionen zu `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren. Im nächsten Modul werden Sie ein vollständiges Website-Beispiel darin aufbauen. Die häufigsten Dinge, die jedes Website-Projekt enthalten wird, sind eine Index-HTML-Datei und Ordner zum Speichern von Bildern, Style-Dateien und Script-Dateien:

1. **`index.html`**: Diese Datei wird im Allgemeinen Ihre Homepage-Inhalte enthalten, das heißt, den Text und die Bilder, die Menschen sehen, wenn sie Ihre Website zum ersten Mal aufrufen.
2. **`images`-Ordner**: In diesem Ordner werden alle Bilder gespeichert, die Sie auf Ihrer Website verwenden.
3. **`styles`-Ordner**: In diesem Ordner wird der CSS-Code gespeichert, der zum Stylen Ihrer Inhalte verwendet wird (zum Beispiel das Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: In diesem Ordner wird der gesamte JavaScript-Code gespeichert, der verwendet wird, um interaktive Funktionalität zu Ihrer Website hinzuzufügen (zum Beispiel das Bestimmen, was passiert, wenn Schaltflächen geklickt werden).

Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Es gibt in der Regel zwei Teile zu einem Dateinamen — den **Namen** und die **Erweiterung**. Nehmen Sie die Datei, die wir oben erstellt haben — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen zu den verwendbaren Zeichen haben. Es ist besser, sich vorerst nur mit Zahlen und Buchstaben zu beschäftigen. Darüber hinaus können Systeme bestimmten Namen oder Namensanteilen eine besondere Bedeutung zuweisen — wie wir bereits gesagt haben, werden `index`-Dateien in der Regel als Hauptstartdatei einer Website erkannt.
- Die Dateierweiterung identifiziert den Dateityp, mit dem wir arbeiten, und wird von Computersystemen verwendet, um zu identifizieren, welche Art von Inhalt die Datei enthält, welches Programm sie zum Öffnen der Datei verwenden sollen usw. In diesem Fall lautet die Erweiterung `.html`, was bedeutet, dass die Datei einfachen Text und insbesondere HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass er beim Öffnen der Datei Ihren Standard-Text-Editor verwenden soll, der VS Code sein sollte, wenn Sie alle unsere Anweisungen befolgt haben.

Es trifft nicht in allen Fällen zu, aber die meisten Dateien benötigen eine Erweiterung, um ordnungsgemäß behandelt zu werden. Das Entfernen oder Ändern der Dateierweiterung wird wahrscheinlich Fehler verursachen, also sollten Sie sie nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu setzen, zum Beispiel `my.cats.html`. In solchen Fällen wird angenommen, dass der letzte Punkt den Beginn der Dateierweiterung kennzeichnet.

Auf Windows-Computern könnten Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. Sie können dies deaktivieren, indem Sie den Datei-Explorer öffnen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für detailliertere Informationen, die Ihre Windows-Version betreffen, können Sie im Internet nachschlagen.

### Beste Praktiken für die Benennung von Dateien

Im Verlauf dieses Kurses werden Sie feststellen, dass wir Sie immer bitten, Ordner- und Dateinamen vollständig in Kleinbuchstaben ohne Leerzeichen zu schreiben. Es gibt viele Arten, in denen das Ignorieren dieses Rats Probleme verursacht – einige der häufigsten sind:

1. Viele Computersysteme, einschließlich der meisten Webserver, sind auf Groß- und Kleinschreibung empfindlich. Wenn Sie beispielsweise ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` platzieren und dann in einer anderen Datei versuchen, das Bild mit `test-site/images/myimage.jpg` zu referenzieren, funktioniert es möglicherweise nicht.
2. Bei Kommandos auf der Kommandozeile müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, sonst werden sie als zwei separate Elemente interpretiert.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren in bestimmten Umständen nicht gut mit Leerzeichen in Dateinamen (zum Beispiel, wenn diese Dateien als zu importierende Module verwendet werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my file.html` im Hauptverzeichnis Ihres Servers haben, ist sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` erreichbar. Webserver ersetzen in der Regel die Leerzeichen in Dateinamen durch `%20` (weil URLs {{Glossary("Percent-encoding", "percent-codiert")}} sind), was subtile Fehler bei einigen Systemen verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Anstelle von Leerzeichen verwenden viele Entwickler ein Trennzeichen wie ein Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` statt `my file.html`. Dies ist eine gute Praxis.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen zwischen den Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie auf weniger Probleme stoßen.

> [!NOTE]
> Weitere bewährte Methoden für Dateinamen und URLs finden Sie unter [URL-Struktur Best Practices für Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Datei-Pfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Datei-Pfad angeben — im Wesentlichen eine Route, damit eine Datei weiß, wo sich eine andere befindet. Zum Beispiel, wenn Sie eine Webseite erstellen, die ein Bild enthält, muss Ihr Webseiten-Code einen Datei-Pfad enthalten, der den Speicherort des anzuzeigenden Bildes angibt.

Lassen Sie uns ein einfaches Beispiel dazu durchgehen. Es ist in Ordnung, wenn Sie jetzt nicht alles verstehen.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel, indem Sie einen Dienst wie [Google Bilder](https://www.google.com/imghp) verwenden), und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Logo-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihren _images_-Ordner.
3. Stellen Sie sicher, dass die Bilddatei kurz und einfach benannt ist, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut, und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie auch sicher, dass Sie die Dateierweiterung beibehalten.

Nun fügen wir der `index.html`-Datei Inhalt hinzu, damit sie die Bilddatei findet und anzeigt.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau wie unten gezeigt in die Datei ein. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Darüber werden Sie bald viel mehr lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo sich das Bild befindet. Da sich das Bild im Ordner _images_ befindet, der im selben Ordner wie `index.html` liegt, ist der Datei-Pfad, den wir benötigen, `images/Ihr-Bild-Dateiname`. Wenn Ihr Bild beispielsweise `firefox-icon.png` genannt wird, wäre der Datei-Pfad `images/firefox-icon.png`.
3. Fügen Sie den Datei-Pfad in Ihren HTML-Code zwischen die doppelten Anführungszeichen von `src=""`.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie mit <kbd>Ctrl</kbd>/Rechtsklick auf die HTML-Datei klicken und dann _Öffnen mit_ auswählen und einen Webbrowser aus dem erscheinenden Untermenü wählen. Sie könnten auch das Datei-Explorer-UI und ein Browserfenster auf demselben Bildschirm öffnen und die HTML-Datei einfach in das Browserfenster ziehen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein brennender Fuchs, der sich um die Welt wickelt](website-screenshot.png)

### Allgemeine Regeln für Datei-Pfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verweisen, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, gefolgt von einem Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei in dem Ordner **über** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` also in einem Unterordner von `test-site` wäre und `my-image.jpg` in `test-site`, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können diese Kombinationen so oft verketten, wie Sie möchten, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem neigt dazu, Backslashes anstelle von Schrägstrichen zu verwenden, z.B. `C:\Windows`. Dies spielt im HTML keine Rolle — auch wenn Sie Ihre Website auf Windows entwickeln, sollten Sie dennoch Schrägstriche in Ihrem Code verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
