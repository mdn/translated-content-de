---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 0f20b61b2166b7805f6cb1a10b2e395a1f9e8e58
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte usw. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer organisieren, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte korrekt darstellen, bevor Sie sie schließlich auf einen Server hochladen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und wie Sie eine sinnvolle Dateistruktur für eine Website einrichten.

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
          <li>Dateien und Ordner manipulieren.</li>
          <li>Best Practices für die Benennung.</li>
          <li>Standardordnerstruktur einer Website.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Dateien und Ordner manipulieren

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/das Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, was Sie im nächsten Artikel noch näher kennenlernen werden. Viele Menschen finden es jedoch einfacher, sich zunächst visuell mit Dateisystemen vertraut zu machen, was wir hier besprechen werden. Moderne Betriebssysteme haben eine robuste Benutzeroberfläche für Dateisysteme, die Sie verwenden können, um Dateien und Ordner nach Bedarf zu manipulieren.

Auf macOS beispielsweise gibt es das Finder-Programm:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde mit Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere OS-Version oder ein völlig anderes OS, in diesem Fall wird die Erfahrung anders sein. Es gibt zahlreiche Anleitungen im Web zur grundlegenden Nutzung von Betriebssystemen — wir empfehlen Ihnen, im Web nach Informationen zu Ihrem speziellen Betriebssystem zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Benutzer`-Ordner, der einen Ordner für jedes Benutzerkonto auf dem System enthält, auch bekannt als der _Home_-Ordner des Benutzers. Dieser wird in der Regel durch ein Haus-Symbol dargestellt, um ihn leichter finden zu können. Der _Home_-Ordner enthält wiederum andere wichtige Standardordner (und -dateien), die speziell für diesen Benutzer relevant sind, wie _Dokumente_, _Musik_ usw. Es gibt noch viele andere Dateien und Ordner auf Ihrem Computer, aber kümmern Sie sich vorerst nicht um diese.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdateien, die sich auf Ihre Arbeit beziehen, irgendwo in Ihrem _Home_-Ordner erstellen, vielleicht im Ordner _Dokumente_. Das ergibt Sinn, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Stellen auf Ihrem System zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputtmachen. Erstellen und bearbeiten Sie Dateien zunächst nur in Ihrem _Home_-Ordner, bis Sie wissen, was Sie tun.

### Einen Ordner erstellen

Erstellen wir einen neuen Ordner, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in der Benutzeroberfläche Ihres Dateisystems auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Dokumente_-Ordner.
2. Erstellen Sie einen neuen Ordner an diesem Ort mit dem Namen `web-projects`:
   1. Unter Windows kann dies durch Auswahl der Schaltfläche _Neu_ im Datei-Explorer-Fenster und Auswahl von _Ordner_ (oder durch Drücken von <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>), Eingabe von `web-projects` als Namen des neuen Ordner-Symbols und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erfolgen.
   2. Unter macOS kann dies durch Auswahl von _Datei_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>) erfolgen — Sie sehen ein neues Ordnersymbol mit dem Namen _unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (dies funktioniert auch bei Dateien):

- Unter Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben ein vereinfachtes Menü, das zuerst angezeigt wird — Sie müssen möglicherweise mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ und dann _Umbenennen_ auswählen!
- Unter macOS klicken Sie auf den Ordnernamen, um ihn zu bearbeiten.

### Ein Projektordner in VS Code öffnen und Dateien erstellen

Während Sie Textdateien innerhalb der OS-Dateisystem-Benutzeroberfläche erstellen können, ist es in der Regel einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. Tatsächlich hat VS Code seinen eigenen Dateiexplorer, der es Ihnen ermöglicht, alle benötigten Ordner und Dateien für Ihre Webprojekte zu erstellen.

Warum haben wir Sie dann aufgefordert, einen Ordner mit der OS-Dateisystem-Benutzeroberfläche zu erstellen? Weil VS Code auf einen initialen obersten Ordner verwiesen werden muss!

Es ist auch nützlich, ein wenig darüber zu verstehen, wie Ihr OS-Dateisystem strukturiert ist. Dies wird nützlicher, wenn Sie später kompliziertere Werkzeuge nutzen.

Öffnen wir jetzt unseren `web-projects`-Ordner in VS Code:

1. Öffnen Sie VS Code.
2. Wählen Sie _Datei_ > _Ordner öffnen..._ aus dem Menü.
   > [!NOTE]
   > Wenn Sie Tastaturbefehle verwenden, können Sie den Befehl _Ordner öffnen_ in Windows ausführen, indem Sie die <kbd>Ctrl</kbd>-Taste gedrückt halten und <kbd>K</kbd> und dann <kbd>O</kbd> drücken. Der einfachste Weg für macOS-Benutzer, dies zu tun, ist das Öffnen der _Befehlspalette_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, „Ordner öffnen“ einzugeben, um die Befehlsliste zu filtern, die Cursortasten zu verwenden, um zu _Datei: Ordner öffnen_ zu navigieren, und dann <kbd>Enter</kbd> zu drücken.
3. Eine Mini-Version der OS-Dateisystem-Benutzeroberfläche erscheint. Verwenden Sie diese, um Ihren `web-projects`-Ordner zu finden, ihn auszuwählen und dann auf die Schaltfläche _Ordner auswählen_ zu drücken.
4. Sie werden mit einem Dialogfeld mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ konfrontiert. Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Derzeit sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, daher können Sie auf _Ja, ich vertraue den Autoren_ klicken.

Sie sollten Ihren `web-projects`-Ordner im _EXPLORER_-Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Achten Sie darauf, zunächst nur Ihre eigenen Dateien in Ihrem _Home_-Ordner zu bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Exkurs zur Tastaturnavigation in VS Code

VS Code hat, obwohl nicht perfekt, eine umfangreiche Liste an Tastenkombinationen. In diesem Artikel haben wir versucht, nützliche wie möglich einzubeziehen, aber Sie finden umfassendere Listen im [VS Code Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings).

Generell können Sie durch das Drücken der <kbd>Tab</kbd>-Taste zwischen verschiedenen Bereichen der Benutzeroberfläche von VS Code navigieren (<kbd>Shift</kbd> + <kbd>Tab</kbd> bewegt Sie zurück zu einem vorherigen Tab-Fokuspunkt). Wenn es mehrere Schaltflächen in einem Tab-Fokuspunkt gibt, können Sie die Cursortasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie eine Datei bearbeiten, wird die Tabulatortaste nicht durch die Benutzeroberfläche navigieren — sie fügt Tabulatorzeichen in die Datei ein. Um von der Datei, die Sie bearbeiten, zum _EXPLORER_-Bereich zu wechseln, können Sie auf macOS <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken, oder auf Windows <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.

Um zurück zum Dateieditor zu wechseln und zwischen den verschiedenen, in unterschiedlichen Tabs geöffneten Dateien zu wechseln, halten Sie die <kbd>Ctrl</kbd>-Taste gedrückt und verwenden <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd>, um die Liste der geöffneten Tabs nach oben und unten zu bewegen (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei, die Sie bearbeiten möchten, hervorgehoben haben, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Ab hier können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das _Neue Datei..._-Symbol klicken (oder darauf <kbd>Tab</kbd> drücken und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie den Dateinamen als "index.html" in das erscheinende Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im _Welcome_-Tab, um Dateien und Ordner zu erstellen, da diese anders funktionieren. Tatsächlich können Sie das _Welcome_-Tab schließen, da Sie es nicht benötigen. Dies können Sie erreichen, indem Sie auf das "x" auf der rechten Seite des Tabs klicken oder auf macOS <kbd>Cmd</kbd> + <kbd>W</kbd> drücken (<kbd>Ctrl</kbd> + <kbd>W</kbd> auf Windows).

Gehen Sie an diesem Punkt zurück zu Ihrer OS-Dateisystem-Benutzeroberfläche, betreten Sie Ihren `web-projects`-Ordner durch Doppelklicken, und Sie sollten dort ebenfalls Ihre Datei `index.html` sehen. VS Code nutzt das zugrunde liegende OS-Dateisystem, ohne ein eigenes, seltsames Dateisystem zu verwenden.

### Verschieben von index.html in seinen eigenen Unterordner

Sie können Ordner innerhalb anderer Ordner erstellen (sogenannte _Unterordner_) so tief wie Sie möchten. Sie können auch Dateien (und Ordner) innerhalb anderer Ordner verschieben, indem Sie sie auf diesen Ordner ziehen und dort ablegen.

Lassen Sie uns dies erkunden und dabei unsere `index.html`-Datei in einen eigenen Unterordner verschieben. Wir möchten diese Datei nicht wirklich direkt im `web-projects`-Ordner liegen haben.

1. Erstellen Sie einen neuen Ordner innerhalb `web-projects`, mit der Schaltfläche _Neuer Ordner..._ im _EXPLORER_-Bereich von VS Code.
2. Nennen Sie ihn `test-site`.
3. Sie sollten nun die Datei `index.html` auf den Ordner `test-site` ziehen und dort ablegen können, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie die Tastatur verwenden, können Sie diese Schritte befolgen:
   >
   > 1. Verwenden Sie die Pfeiltasten, um die Fokusumrandung über die Datei `index.html` zu bewegen.
   > 2. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>X</kbd> (<kbd>Ctrl</kbd> + <kbd>X</kbd> unter Windows), um die Datei für das Bewegen auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um die Fokusumrandung über den Ordner zu bewegen.
   > 4. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>V</kbd> (<kbd>Ctrl</kbd> + <kbd>V</kbd> unter Windows), um die Datei in diesen Ordner zu verschieben.

Es gibt noch viel mehr, was wir über die Bedienung von OS-Dateisystem-Benutzeroberflächen und VS Code einbeziehen könnten, aber wir haben begrenzten Platz, also belassen wir es dabei. Dies sollte Ihnen genug Informationen geben, um loszulegen, und wir ermutigen Sie, im Web nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern machen können.

Fahren wir fort mit einer kurzen Diskussion über die Struktur von Websites.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal an Websites arbeiten (auf Ihrem Computer), sollten Sie alle zu einer Website gehörenden Dateien in einem einzigen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Wie bereits im Artikel erklärt, haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben Sie auch angewiesen, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns nun einige weitere Elemente in `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren. Im nächsten Modul werden wir Ihnen ein vollständiges Website-Beispiel dazu erarbeiten lassen. Die häufigsten Elemente jeder Website sind eine Index-HTML-Datei und Ordner zur Speicherung von Bildern, Stildateien und Skriptdateien:

1. **`index.html`**: Diese Datei enthält in der Regel Ihre Homepage-Inhalte, also den Text und die Bilder, die Leute sehen, wenn sie zuerst auf Ihre Seite kommen.
2. **`images`-Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Seite verwenden.
3. **`styles`-Ordner**: Dieser Ordner enthält den CSS-Code, der zur Gestaltung Ihrer Inhalte verwendet wird (zum Beispiel Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um interaktive Funktionen zu Ihrer Seite hinzuzufügen (zum Beispiel Definition dessen, was passiert, wenn Schaltflächen angeklickt werden).

Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Es gibt in der Regel zwei Teile eines Dateinamens — den **Namen** und die **Erweiterung**. Nehmen Sie die oben erstellte Datei — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Beschränkungen hinsichtlich der verwendbaren Zeichen haben. Es ist besser, sich zumindest am Anfang auf Zahlen und Buchstaben zu beschränken. Außerdem könnten Systeme bestimmten Namen oder Teilen von Namen spezielle Bedeutungen geben — wie bereits erwähnt, werden `index`-Dateien in der Regel als die Haupt-Homepage-Datei einer Website erkannt.
- Die Dateierweiterung identifiziert den Dateityp, mit dem wir es zu tun haben, und wird von Computersystemen verwendet, um zu identifizieren, welche Art von Inhalt zu erwarten ist, welches Programm zum Öffnen der Datei verwendet werden sollte usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei einfachen Text und speziell HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass beim Versuch, die Datei zu öffnen, Ihr Standard-Texteditor, der VS Code sein sollte, wenn Sie all unseren Anweisungen gefolgt sind, verwendet werden sollte.

Es ist nicht in allen Fällen wahr, aber die meisten Dateien benötigen eine Erweiterung, um richtig behandelt zu werden. Das Entfernen oder Ändern der Dateierweiterung wird wahrscheinlich Fehler verursachen, daher sollten Sie sie nicht ändern, es sei denn, Sie wissen genau, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu haben, zum Beispiel `my.cats.html`. In solchen Fällen wird der letzte Punkt als Beginn der Dateierweiterung angenommen.

Auf Windows-Computern könnten Sie Probleme haben, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannten Dateitypen ausblenden** aktiviert hat. Sie können diese deaktivieren, indem Sie zum Datei-Explorer gehen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet suchen.

### Beste Praktiken für die Benennung von Dateien

In diesem Kurs werden wir Ihnen immer raten, Ordner- und Dateinamen vollständig in Kleinbuchstaben ohne Leerzeichen zu benennen. Es gibt viele Möglichkeiten, bei Nichtbeachtung dieser Regeln Probleme zu bekommen — die folgenden sind einige der häufigsten:

1. Viele Computersysteme, darunter die meisten Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie also zum Beispiel ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` ablegen und dann in einer anderen Datei versuchen, das Bild unter `test-site/images/myimage.jpg` zu referenzieren, könnte es nicht funktionieren.
2. Wenn Sie Befehle auf der Befehlszeile ausführen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, da sie sonst als zwei separate Elemente interpretiert werden.
3. Einige Programmiersprachen (zum Beispiel Python) arbeiten nicht gut mit Leerzeichen in Dateinamen unter bestimmten Umständen (zum Beispiel, wenn diese Dateien als Module importiert werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie zum Beispiel eine Datei namens <code>my&nbsp;file.html</code> im Stammverzeichnis Ihres Servers haben, wird sie in der Regel unter einer URL wie `https://example.com/my%20file.html` zugänglich sein. Webserver ersetzen normalerweise Leerzeichen in Dateinamen durch `%20` (weil URLs {{Glossary("Percent-encoding", "percent-encoded")}} sind), was subtile Fehler bei einigen Systemen verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Anstelle von Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) statt eines Leerzeichens — zum Beispiel `my-file.html` statt <code>my&nbsp;file.html</code>. Dies ist eine gute Praxis.

Am besten gewöhnen Sie sich an, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie später auf weniger Probleme stoßen.

> [!NOTE]
> Weitere Best Practices für Dateinamen und URLs finden Sie in [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Wesentlichen eine Route, damit eine Datei weiß, wo sich eine andere befindet. Zum Beispiel, wenn Sie eine Webseite mit einem Bild erstellen, muss Ihr Webseitencode einen Dateipfad enthalten, der den Speicherort des anzuzeigenden Bildes angibt.

Arbeiten wir ein einfaches Beispiel durch. Vielleicht verstehen Sie jetzt noch nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie unser [Firefox-Symbolbild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihrem _images_-Ordner ab.
3. Stellen Sie sicher, dass der Bilddateiname kurz und einfach ist, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie auch sicher, dass Sie die Dateierweiterung beibehalten.

Nun fügen wir der `index.html`-Datei Inhalte hinzu, die es ihr ermöglichen, die Bilddatei zu finden und anzuzeigen.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau so in die Datei ein, wie unten gezeigt. Dies ist HTML, die Sprache, die wir verwenden, um Webseitenelemente zu definieren und zu strukturieren. Sie werden sehr bald mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Ordner, der sich im gleichen Ordner wie `index.html` befindet. Um die Dateistruktur von `index.html` zu unserem Bild zu durchlaufen, wäre der Dateipfad `images/your-image-filename`. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` hieß, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen den doppelten Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei, laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie die HTML-Datei <kbd>Strg</kbd>/mit der rechten Maustaste anklicken und dann _Öffnen mit_ wählen und einen Webbrowser aus dem sich öffnenden Untermenü auswählen. Sie könnten auch Ihre Dateisystem-Benutzeroberfläche und ein Webbrowserfenster auf demselben Bildschirm öffnen und die HTML-Datei über das Webbrowserfenster ziehen und ablegen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der sich um die Welt wickelt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, plus einen Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im Ordner **oberhalb** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Zum Beispiel, wenn `index.html` sich in einem Unterordner von `test-site` befand und `my-image.jpg` sich in `test-site` befand, könnten Sie `my-image.jpg` aus `index.html` heraus mit `../my-image.jpg` referenzieren.
- Sie können diese so viel kombinieren, wie Sie möchten, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet normalerweise Rückwärtsschrägstriche, nicht Vorwärtsschrägstriche, z. B. `C:\Windows`. In HTML spielt das keine Rolle — auch wenn Sie Ihre Website auf Windows entwickeln, sollten Sie weiterhin Schrägstriche in Ihrem Code verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
