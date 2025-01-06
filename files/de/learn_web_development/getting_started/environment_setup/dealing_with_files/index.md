---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 0e5b7e1a0abdfb8119d63f11b533df4b9c2e9127
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer zusammenstellen, sicherstellen, dass sie miteinander kommunizieren können, und alle Ihre Inhalte korrekt anzeigen, bevor Sie sie schließlich auf einen Server hochladen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Dateiexplorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über das Betriebssystem (OS) Ihres Computers und die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Dateien und Ordner manipulieren.</li>
          <li>Benennungs-Best Practices.</li>
          <li>Standard Webseiten-Ordnerstruktur.</li>
          <li>Umgang mit Dateipfaden</li>
          <li>Umgang mit Dateiendungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Dateien und Ordner manipulieren

Es gibt viele verschiedene Möglichkeiten, die auf Ihrem Computer enthaltenen Dateien und Ordner zu erstellen und zu bearbeiten. Sie können dies über die Kommandozeile/den Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, was Sie im nächsten Artikel genauer lernen werden. Viele Menschen finden es jedoch einfacher, visuell über Dateisysteme zu lernen, worüber wir hier sprechen werden. Moderne Betriebssysteme (OSes) verfügen über eine robuste Benutzeroberfläche für Dateisysteme (UI), die Sie nach Bedarf zur Manipulation von Dateien und Ordnern verwenden können.

Auf macOS haben Sie zum Beispiel das Finder-Programm:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Währenddessen hat Windows den Datei-Explorer:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde mit Windows 11 und macOS 15 verfasst. Sie verwenden möglicherweise eine andere OS-Version oder ein völlig anderes OS, in diesem Fall kann die Erfahrung leicht abweichen. Im Internet gibt es viele Leitfäden zur grundlegenden OS-Nutzung — wir ermutigen Sie, im Internet nach Informationen zu Ihrem speziellen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes auf dem System existierende Benutzerkonto enthält, auch bekannt als der _Home_-Ordner des Benutzers. Er wird normalerweise durch ein Haus-Icon dargestellt, um ihn leichter auffindbar zu machen. Im _Home_-Ordner werden andere wichtige Standardordner (und Dateien) enthalten sein, die für diesen bestimmten Benutzer relevant sind, wie _Documents_, _Music_ usw. Es gibt noch viele andere Dateien und Ordner auf Ihrem Computer, aber um die müssen Sie sich jetzt nicht kümmern.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdaten, die sich auf Ihre Arbeit beziehen, irgendwo in Ihrem _Home_-Ordner erstellen, vielleicht im _Documents_-Ordner. Dies macht Sinn, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien in anderen Bereichen Ihres Systems zu erstellen und zu bearbeiten (z.B. Bereiche, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputtmachen. Halten Sie sich vorerst daran, Dateien in Ihrem _Home_-Ordner zu erstellen und zu bearbeiten.

### Einen Ordner erstellen

Erstellen Sie einen neuen Ordner, um alle Ihre Webprojekte zu speichern.

1. Klicken Sie in Ihrer Dateisystem-UI auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Documents_-Ordner.
2. Erstellen Sie hier einen neuen Ordner namens `web-projects`:
   1. Auf Windows kann dies durch das Auswählen der _Neu_-Schaltfläche im Datei-Explorer-Fenster und Auswahl von _Ordner_ (oder durch Drücken von <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>) geschehen. Geben Sie `web-projects` als Namen des neuen Ordner-Icons ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.
   2. Auf macOS kann dies durch Auswahl von _Datei_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>) geschehen — Sie sehen einen neuen Ordner namens _unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (dies funktioniert auch mit Dateien):

- Auf Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben ein vereinfachtes Menü, das zuerst angezeigt wird — möglicherweise müssen Sie mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ wählen und anschließend _Umbenennen_!
- Auf macOS klicken/auswählen Sie den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Während Sie Textdateien im Dateisystem-UI des Betriebssystems erstellen können, ist es im Allgemeinen einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. In der Tat hat VS Code einen eigenen Dateiexplorer, der es Ihnen ermöglicht, alle Ordner und Dateien zu erstellen, die Sie für Ihre Webprojekte benötigen.

Warum haben wir Sie dann dazu gebracht, einen Ordner im Dateisystem-UI des Betriebssystems zu erstellen? Weil VS Code auf einen initialen Top-Level-Ordner gezeigt werden muss!

Es ist auch nützlich, ein wenig darüber zu verstehen, wie Ihr OS-Dateisystem strukturiert ist. Dies wird nützlicher, wenn Sie beginnen, komplexere Werkzeuge später zu verwenden.

Öffnen wir jetzt unseren `web-projects`-Ordner in VS Code:

1. Öffnen Sie VS Code.
2. Wählen Sie _Datei_ > _Ordner öffnen..._ aus dem Menü.
   > [!NOTE]
   > Wenn Sie ein Tastaturnutzer sind, können Sie den _Ordner öffnen_-Befehl in Windows ausführen, indem Sie die <kbd>Ctrl</kbd>-Taste halten und <kbd>K</kbd> dann <kbd>O</kbd> drücken. Die einfachste Methode für macOS-Nutzer besteht darin, die _Befehlsübersicht_ mit <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu verwenden, um zu _Datei: Ordner öffnen_ zu navigieren, und dann <kbd>Enter</kbd> zu drücken.
3. Eine Mini-Version des Dateisystem-UI des OS wird erscheinen. Verwenden Sie es, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die _Ordner auswählen_-Schaltfläche.
4. Sie erhalten ein Dialogfeld mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, daher können Sie auf _Ja, ich vertraue den Autoren_ klicken.

Sie sollten Ihren `web-projects`-Ordner nun im _EXPLORER_-Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Stellen Sie erneut sicher, dass Sie vorerst nur Ihre eigenen Dateien in Ihrem _Home_-Ordner bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Eine Anmerkung zur Tastaturnavigation in VS Code

VS Code hat, obwohl nicht perfekt, eine umfangreiche Sammlung von Tastenkombinationen. Im Laufe dieses Artikels haben wir versucht, nützliche dort einzuschließen, wo es möglich war, aber Sie können umfassendere Listen im VS Code [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference) finden.

Im Allgemeinen, wenn Sie VS Code über die Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um durch verschiedene Bereiche der Benutzeroberfläche zu wechseln (<kbd>Shift</kbd> + <kbd>Tab</kbd> bringt Sie zu einer vorherigen Tab-Fokusposition). Wenn es mehrere Schaltflächen in einer Tab-Fokusposition gibt, können Sie die Pfeiltasten benutzen, um zwischen ihnen zu wechseln.

Wenn Sie derzeit eine Datei bearbeiten, navigiert die Tab-Taste nicht durch die Benutzeroberfläche — sie fügt Tabzeichen in die Datei ein. Um aus der Datei, die Sie bearbeiten, in den _EXPLORER_-Bereich zu wechseln, können Sie auf einem Mac <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd> drücken, oder auf Windows <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>.

Um wieder in den Dateieditor-Paneel zurückzukehren und zwischen den verschiedenen Dateien, die in verschiedenen Tabs geöffnet sind, zu wechseln, halten Sie die <kbd>Ctrl</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd>, um in der Liste der offenen Tabs rauf und runter zu navigieren (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei hervorgehoben haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie das _Neue Datei..._-Icon anklicken (oder darauf <kbd>Tab</kbd> drücken und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken).
2. Geben Sie den Dateinamen als "index.html" im erscheinenden Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben auf der _Willkommens_-Registerkarte, um Dateien und Ordner zu erstellen, da diese anders arbeiten. In der Tat können Sie die _Willkommens_-Registerkarte schließen, da Sie sie nicht benötigen. Machen Sie dies, indem Sie das "x" auf der rechten Seite des Registers klicken oder auf macOS <kbd>Cmd</kbd> + <kbd>W</kbd> drücken (<kbd>Ctrl</kbd> + <kbd>W</kbd> auf Windows).

Gehen Sie an diesem Punkt zurück zu Ihrem OS-Dateisystem-UI, gehen Sie in Ihren `web-projects`-Ordner, indem Sie darauf doppelklicken, und Sie sollten Ihre `index.html`-Datei dort ebenfalls sehen. VS Code verwendet das zugrunde liegende Dateisystem des OS und nicht ein eigenes seltsames Dateisystem.

### Verschieben von index.html in seinen eigenen Unterordner

Sie können Ordner innerhalb anderer Ordner erstellen (genannt _Unterordner_), beliebig viele Ebenen tief. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie darauf ziehen und ablegen.

Lassen Sie uns dies erkunden und im Prozess unsere `index.html`-Datei in einen eigenen Unterordner verschieben. Wir wollen sie wirklich nicht im Hauptordner `web-projects` liegen haben.

1. Erstellen Sie einen neuen Ordner innerhalb von `web-projects`, indem Sie die Schaltfläche _Neuer Ordner..._ im _EXPLORER_-Bereich von VS Code verwenden.
2. Nennen Sie ihn `test-site`.
3. Sie sollten nun in der Lage sein, die Datei `index.html` zu ziehen und auf den Ordner `test-site` abzulegen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturnutzer sind, können Sie dies mit den folgenden Schritten tun:
   >
   > 1. Verwenden Sie die Pfeiltasten auf und ab, um den Fokusrahmen über die Datei `index.html` zu bewegen.
   > 2. Drücken Sie <kbd>Cmd</kbd> + <kbd>X</kbd> auf macOS (<kbd>Ctrl</kbd> + <kbd>X</kbd> auf Windows), um die Datei für das Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokusrahmen über den Ordner zu bewegen.
   > 4. Drücken Sie <kbd>Cmd</kbd> + <kbd>V</kbd> auf macOS (<kbd>Ctrl</kbd> + <kbd>V</kbd> auf Windows), um die Datei in diesen Ordner zu verschieben.

Es gibt viel mehr, was wir über die Verwendung von Dateisystem-UIs und VS Code sagen könnten, aber wir haben begrenzten Platz, also belassen wir es vorerst dabei. Dies hat Ihnen genügend Informationen gegeben, um anzufangen, und wir ermutigen Sie, im Internet nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern machen können.

Kommen wir zu einer kurzen Diskussion über die Struktur einer Website.

## Welche Struktur sollte eine Website haben?

Wenn Sie an Websites lokal (auf Ihrem Computer) arbeiten, sollten Sie alle zugehörigen Dateien für jede Seite in einem Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Webseitenordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Webseitenprojekte zu speichern. Wir haben Sie auch aufgefordert, einen Unterordner mit dem Namen `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Fügen wir einige weitere Features in `test-site` hinzu, um eine typische Webseitenstruktur zu demonstrieren; im nächsten Modul werden wir Sie dazu bewegen, ein vollständiges Webseiten-Beispiel darin aufzubauen. Die häufigsten Dinge, die ein Webseitenprojekt enthalten wird, sind eine Index-HTML-Datei und Ordner, um Bilder zu speichern, Stylesheet-Dateien und Skript-Dateien:

1. **`index.html`**: Diese Datei enthält im Allgemeinen Ihre Homepage-Inhalte, das heißt, die Texte und Bilder, die Personen sehen, wenn sie zuerst auf Ihre Website gelangen.
2. **`images`-Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Seite verwenden.
3. **`styles`-Ordner**: Dieser Ordner enthält den CSS-Code, der verwendet wird, um Ihre Inhalte zu stylen (zum Beispiel, um Text- und Hintergrundfarben festzulegen).
4. **`scripts`-Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um interaktive Funktionalität zu Ihrer Webseite hinzuzufügen (zum Beispiel zu definieren, was passiert, wenn auf Schaltflächen geklickt wird).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html`-Datei innerhalb von `test-site` haben. Erstellen Sie nun die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Dateinamen bestehen in der Regel aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen Sie die Datei, die wir oben erstellt haben — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen hinsichtlich der zu verwendenden Zeichen haben werden. Es ist besser, sich zumindest anfangs auf Nummern und Buchstaben zu beschränken. Außerdem können Systeme speziellen Namen oder Teilen von Namen eine besondere Bedeutung zuweisen — wie wir bereits gesagt haben, werden `index`-Dateien in der Regel als die Hauptdatei der Homepage einer Website erkannt.
- Die Dateierweiterung identifiziert den Dateityp, den wir behandeln, und wird von Computersystemen verwendet, um zu bestimmen, welche Art von Inhalt die Datei erwarten kann, welches Programm verwendet werden soll, um die Datei zu öffnen usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Nur-Text enthalten sollte, und genauer gesagt, HTML-Code. Aufgrund der Erweiterung weiß Ihr Computer, dass er, wenn Sie versuchen, die Datei zu öffnen, sie mit Ihrem Standard-Texteditor öffnen sollte, der VS Code sein sollte, wenn Sie alle unsere Anweisungen bis jetzt befolgt haben.

Es ist nicht in allen Fällen so, aber die meisten Dateien benötigen eine Erweiterung, um korrekt gehandhabt zu werden. Das Entfernen oder Ändern der Dateierweiterung kann wahrscheinlich zu Fehlern führen, daher sollten Sie dies nur tun, wenn Sie wirklich wissen, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu setzen, zum Beispiel `my.cats.html`. In solchen Fällen wird angenommen, dass der letzte Punkt der Beginn der Dateinamenerweiterung ist.

Auf Windows-Computern können Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** eingeschaltet hat. Sie können dies ausschalten, indem Sie zum Datei-Explorer gehen, die **Ordneroptionen…**-Option auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet recherchieren.

### Best Practices für die Benennung von Dateien

Während Sie diesem Kurs folgen, werden Sie bemerken, dass wir Sie immer bitten, Ordner und Dateien vollständig in Kleinbuchstaben ohne Leerzeichen zu benennen. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Datei- und Ordnernamen Probleme schafft — einige der häufigsten sind wie folgt:

1. Viele Computersysteme, darunter die meisten Webserver, unterscheiden zwischen Groß- und Kleinschreibung. Wenn Sie also beispielsweise ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` platzieren und dann in einer anderen Datei versuchen, das Bild mit `test-site/images/myimage.jpg` zu referenzieren, könnte es nicht funktionieren.
2. Wenn Sie Befehle auf der Kommandozeile ausführen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, da sie sonst als zwei separate Elemente interpretiert werden.
3. Einige Programmiersprachen (zum Beispiel Python) arbeiten in bestimmten Umständen nicht gut mit Leerzeichen in Dateinamen (zum Beispiel, wenn diese Dateien Module sind, die importiert werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie zum Beispiel eine Datei namens `my file.html` im Stammordner Ihres Servers haben, wird sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` erreichbar sein. Webserver ersetzen normalerweise die Leerzeichen in Dateinamen durch `%20` (weil URLs {{Glossary("Percent-encoding", "prozent-codiert")}} sind), was subtile Bugs mit einigen Systemen verursachen kann, wenn sie annehmen, dass Dateinamen und URLs perfekt übereinstimmen.

Anstelle von Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` anstelle von `my file.html`. Dies ist eine gute Praxis.

Es ist am besten, sich daran zu gewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Bindestriche getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie weniger Probleme weiter unten auf dem Weg begegnen.

> [!NOTE]
> Weitere Best Practices für Dateinamen und URLs finden Sie in [URL-Struktur-Best-Practices für Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde einen Weg, damit eine Datei weiß, wo sich eine andere Datei befindet. Zum Beispiel, wenn Sie eine Webseite erstellen, die ein Bild enthält, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Speicherort des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel dafür durchgehen. Vielleicht verstehen Sie im Moment nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel über einen Dienst wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Icon-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) verwenden, um dieses Beispiel durchzuführen.
2. Legen Sie das Bild in Ihrem _images_-Ordner ab.
3. Stellen Sie sicher, dass die Bilddatei etwas Kurz- und Einfaches heißt, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie auch sicher, dass Sie die Dateierweiterung beibehalten.

Jetzt werden wir Inhalt in die `index.html`-Datei einfügen, um es ihr zu ermöglichen, die Bilddatei zu lokalisieren und anzuzeigen.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau wie unten gezeigt in die Datei ein. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Sie werden sehr bald viel mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Ordner, der im gleichen Ordner wie `index.html` ist. Um im Dateisystem von `index.html` zu unserem Bild zu navigieren, benötigen wir den Dateipfad `images/dein-bild-dateiname`. Wenn Ihr Bild zum Beispiel `firefox-icon.png` heißt, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die doppelten Anführungszeichen des `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie mit <kbd>Ctrl</kbd>/rechts auf die HTML-Datei klicken und dann _Öffnen mit_ wählen und einen Webbrowser aus dem sich ergebenden Untermenü auswählen. Sie könnten auch Ihre Dateisystem-UI und ein Webbrowser-Fenster auf dem gleichen Bildschirm öffnen und die HTML-Datei über das Webbrowser-Fenster ziehen und ablegen.

Sie sollten eine einfache Webseite sehen, auf der Ihr Bild angezeigt wird!

![Ein Screenshot unserer einfachen Website, der nur das Firefox-Logo zeigt - ein brennender Fuchs um den Globus](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im gleichen Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, z.B. `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad, plus einen Schrägstrich, z.B. `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im Ordner **oberhalb** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn `index.html` zum Beispiel in einem Unterordner von `test-site` war und `my-image.jpg` innerhalb von `test-site` war, könnten Sie `my-image.jpg` von `index.html` aus referenzieren, indem Sie `../my-image.jpg` verwenden.
- Sie können diese nach Belieben kombinieren, z.B. `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem neigt dazu, Backslashes anstelle von Schrägstrichen zu verwenden, z.B. `C:\Windows`. Dies ist in HTML nicht wichtig — selbst wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code weiterhin Schrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
