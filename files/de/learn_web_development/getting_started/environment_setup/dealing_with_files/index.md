---
title: Arbeiten mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Mediendateien und so weiter. Wenn Sie eine Website erstellen, müssen Sie diese Dateien auf Ihrem lokalen Computer zu einer sinnvollen Struktur zusammenfügen, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte ansprechend gestalten, bevor Sie sie schließlich auf einen Server stellen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

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
          <li>Manipulation von Dateien und Ordnern.</li>
          <li>Best Practices zur Benennung.</li>
          <li>Standard-Ordnerstruktur für Websites.</li>
          <li>Umgang mit Dateipfaden</li>
          <li>Umgang mit Dateiendungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipulierung von Dateien und Ordnern

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/Terminal Ihres Computers mithilfe einer Reihe von Textbefehlen tun, was Sie im nächsten Artikel genauer lernen werden. Viele Menschen finden es jedoch einfacher, das Dateisystem visuell zu verstehen, was wir hier besprechen werden. Moderne Betriebssysteme (OS) verfügen über eine robuste Benutzeroberfläche (UI) für Dateisysteme, mit der Sie Dateien und Ordner nach Bedarf manipulieren können.

Auf macOS haben Sie beispielsweise das Programm Finder:

![Das macOS Finder-Programm, das den Inhalt eines typischen Heimatordners zeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Heimatordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde unter Windows 11 und macOS 15 geschrieben. Sie verwenden möglicherweise eine andere OS-Version oder ein völlig anderes OS, in diesem Fall kann die Erfahrung leicht unterschiedlich sein. Es gibt viele Anleitungen im Web zur grundlegenden OS-Nutzung — wir ermutigen Sie, im Web nach Informationen zu Ihrem spezifischen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto enthält, das auf dem System existiert, auch bekannt als der _Home_-Ordner des Benutzers. Dieser wird normalerweise durch ein Haus-Icon dargestellt, um ihn leichter zu finden. Der _Home_-Ordner enthält wiederum andere wichtige Standardordner (und Dateien), die für diesen Benutzer speziell relevant sind, wie _Dokumente_, _Musik_ usw. Es gibt auch viele andere Dateien und Ordner auf Ihrem Computer, aber darum brauchen Sie sich jetzt nicht zu kümmern.

Der derzeit angemeldete Benutzer hat standardmäßig nur Zugriff auf seinen eigenen _Home_-Ordner.

Sie sollten Projektdateien, die sich auf Ihre Arbeit beziehen, irgendwo in Ihrem _Home_-Ordner erstellen, möglicherweise in _Documents_. Das macht Sinn, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie beginnen, Dateien an anderen Stellen in Ihrem System zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas kaputtmachen. Halten Sie sich vorerst daran, Dateien in Ihrem _Home_-Ordner zu erstellen und zu bearbeiten.

### Erstellen eines Ordners

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in der Benutzeroberfläche Ihres Dateisystems auf Ihren _Home_-Ordner und dann doppelt auf Ihren _Documents_-Ordner.
2. Erstellen Sie an diesem Ort einen neuen Ordner mit dem Namen `web-projects`:
   1. Auf Windows kann dies durch Auswählen der Schaltfläche _Neu_ im Datei-Explorer-Fenster und Auswählen von _Ordner_ (oder durch Drücken von <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) erfolgen. Geben Sie `web-projects` als Namen des neuen Ordners ein und drücken Sie <kbd>Enter</kbd>.
   2. Auf macOS kann dies durch Auswahl von _Datei_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd> ) erfolgen — Sie sehen einen neuen Ordner namens _Untitled Folder_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (das funktioniert auch mit Dateien):

- Auf Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben ein einfacheres Menü, das zunächst angezeigt wird — Sie müssen möglicherweise mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ auswählen und dann _Umbenennen_ wählen!
- Auf macOS klicken Sie auf den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Obwohl Sie Textdateien innerhalb der Dateisystem-Benutzeroberfläche des OS erstellen können, ist es im Allgemeinen einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. Tatsächlich verfügt VS Code über einen eigenen Datei-Explorer, mit dem Sie alle benötigten Ordner und Dateien für Ihre Webprojekte erstellen können.

Warum also haben wir Sie die Mühe gemacht, einen Ordner mit der Benutzeroberfläche des OS-Dateisystems zu erstellen? Weil VS Code auf einen anfänglichen Ordner auf oberster Ebene hingewiesen werden muss!

Es ist auch nützlich, ein wenig darüber zu verstehen, wie Ihr OS-Dateisystem strukturiert ist. Dies wird nützlicher, wenn Sie beginnen, komplexere Werkzeuge zu verwenden.

Öffnen wir jetzt unseren `web-projects`-Ordner in VS Code:

1. Öffnen Sie VS Code.
2. Wählen Sie aus dem Menü _Datei_ > _Ordner öffnen..._.
   > [!NOTE]
   > Wenn Sie Tastaturbenutzer sind, können Sie den _Ordner öffnen_ -Befehl auf Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> dann <kbd>O</kbd> drücken. Der einfachste Weg für einen macOS-Benutzer, dies zu tun, besteht darin, die _Befehls-Palette_ mit <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu verwenden, um zu _Datei: Ordner öffnen_ zu wechseln, und dann <kbd>Enter</kbd> zu drücken.
3. Eine Mini-Version der Dateisystem-Benutzeroberfläche des OS erscheint. Verwenden Sie es, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die Schaltfläche _Ordner auswählen_.
4. Ihnen wird ein Dialogfeld mit der Überschrift _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ angezeigt. Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, also können Sie auf _Ja, ich vertraue den Autoren_ klicken.

Sie sollten Ihren `web-projects`-Ordner im _EXPLORER_-Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel zeigt einen leeren Ordner namens web-projects](vs-code-explorer.png)

> [!WARNING]
> Achten Sie auch hier wieder darauf, vorerst nur Ihre eigenen Dateien innerhalb Ihres _Home_-Ordners zu bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein kleiner Exkurs zur Tastaturnavigation in VS Code

VS Code hat, obwohl nicht perfekt, eine umfassende Sammlung von Tastenkombinationen. In diesem Artikel haben wir versucht, wo möglich, nützliche Kombinationen einzubauen, aber Sie können umfassendere Listen im VS Code [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/configure/keybindings) finden.

Im Allgemeinen, wenn Sie VS Code über die Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um sich durch verschiedene Bereiche der UI zu bewegen (<kbd>Umschalt</kbd> + <kbd>Tab</kbd> bewegt Sie zu einer vorherigen Tab-Fokusposition). Wenn es mehrere Schaltflächen in einer Tab-Fokusposition gibt, können Sie die Pfeiltasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie gerade eine Datei bearbeiten, wird die Tab-Taste nicht verwendet, um in der UI zu navigieren — sie fügt Tab-Zeichen in die Datei ein. Um von der Datei, die Sie bearbeiten, zum _EXPLORER_-Bereich zu wechseln, können Sie auf macOS <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> oder auf Windows <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> drücken.

Um zum Dateieditor-Bereich zurückzukehren und zwischen den verschiedenen Dateien zu wechseln, die in unterschiedlichen Tabs geöffnet sind, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> und <kbd>Umschalt</kbd> + <kbd>Tab</kbd>, um in der Liste der offenen Tabs auf- und abzusteigen (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei hervorgehoben haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das \_Neue Datei-\_Icon klicken (oder mit <kbd>Tab</kbd> darauf gehen und <kbd>Enter</kbd> drücken).
2. Geben Sie als Dateinamen "index.html" in das erscheinende Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im _Willkommens_-Tab, um Dateien und Ordner zu erstellen, da diese etwas anders funktionieren. Tatsächlich können Sie das _Willkommens_-Tab schließen, da Sie es nicht benötigen. Tun Sie dies, indem Sie auf das "x" auf der rechten Seite des Tabs klicken oder auf macOS <kbd>Cmd</kbd> + <kbd>W</kbd> (<kbd>Strg</kbd> + <kbd>W</kbd> auf Windows) drücken.

An diesem Punkt gehen Sie zurück zur Benutzeroberfläche des Dateisystems Ihres OS, öffnen Sie Ihren `web-projects`-Ordner durch Doppelklick, und Sie sollten auch Ihre `index.html` -Datei dort sehen. VS Code verwendet das zugrunde liegende Dateisystem des OS und nicht irgendein seltsames eigenes Dateisystem.

### Verschieben von index.html in einen eigenen Unterordner

Sie können Ordner in andere Ordner erstellen (sogenannte _Unterordner_) bis zu beliebig vielen Ebenen. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie auf diesen Ordner ziehen und ablegen.

Lassen Sie uns dies erkunden und dabei unsere `index.html`-Datei in einen eigenen Unterordner verschieben. Wir möchten sie nicht direkt im Hauptordner `web-projects` platzieren.

1. Erstellen Sie einen neuen Ordner in `web-projects` mit der Schaltfläche _Neuer Ordner..._ im _EXPLORER_-Bereich von VS Code.
2. Nennen Sie ihn `test-site`.
3. Sie sollten jetzt die `index.html`-Datei darauf ziehen können, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie Tastaturbenutzer sind, können Sie dies folgendermaßen tun:
   >
   > 1. Verwenden Sie die Pfeiltasten hoch und runter, um den Fokusrahmen über die `index.html`-Datei zu bewegen.
   > 2. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>X</kbd> (<kbd>Strg</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um den Fokusrahmen über den Ordner zu bewegen.
   > 4. Drücken Sie auf macOS <kbd>Cmd</kbd> + <kbd>V</kbd> (<kbd>Strg</kbd> + <kbd>V</kbd> auf Windows), um die Datei in den Ordner zu verschieben.

Es gibt viel mehr, das wir über die Benutzeroberflächen von Dateisystemen des OS und VS Code sagen könnten, aber wir haben hier begrenzten Raum, deshalb belassen wir es dabei. Dies hat Ihnen genug Informationen gegeben, um zu beginnen, und wir ermutigen Sie, im Web nach Informationen zu suchen, wie man andere Dinge mit Dateien und Ordnern macht.

Lassen Sie uns zu einer kurzen Diskussion über die Struktur von Websites übergehen.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal (auf Ihrem Computer) an Websites arbeiten, sollten Sie alle zugehörigen Dateien für jede Site in einem einzigen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Sie gebeten, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben Sie auch gebeten, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Funktionen in `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren; im nächsten Modul werden wir Sie dazu bringen, ein vollständiges Website-Beispiel darin zu erstellen. Die häufigsten Dinge, die jedes Website-Projekt enthalten wird, sind eine index-HTML-Datei und Ordner, die Bilder, Style-Dateien und Skriptdateien enthalten:

1. **`index.html`**: Diese Datei enthält in der Regel Ihre Homepage-Inhalte, das heißt, den Text und die Bilder, die Benutzer sehen, wenn sie zuerst auf Ihre Website gelangen.
2. **`images`-Ordner**: Dieser Ordner enthält alle Bilder, die Sie auf Ihrer Website verwenden.
3. **`styles`-Ordner**: Dieser Ordner enthält den CSS-Code, der verwendet wird, um Ihre Inhalte zu stylen (zum Beispiel Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: Dieser Ordner enthält den gesamten JavaScript-Code, der verwendet wird, um Ihre Website interaktiv zu machen (zum Beispiel definieren, was passiert, wenn Knöpfe angeklickt werden).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie nun die `images`-, `styles`- und `scripts`-Ordner darin.

## Dateinamen

Normalerweise bestehen Dateinamen aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen wir die Datei, die wir oben erstellt haben — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen für die verwendbaren Zeichen haben. Es ist besser, sich zumindest am Anfang an Zahlen und Buchstaben zu halten. Außerdem können Systeme bestimmten Namen oder Namensbestandteilen eine spezielle Bedeutung zuweisen — wie wir bereits gesagt haben, werden `index`-Dateien häufig als Haupt-Homepage-Datei einer Website erkannt.
- Die Dateiendung identifiziert den Dateityp, mit dem wir es zu tun haben, und wird von Computersystemen verwendet, um zu identifizieren, welche Art von Inhalt sie in der Datei erwarten können, welches Programm sie zum Öffnen der Datei verwenden sollten, usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Klartext und genauer HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass er die Datei mit Ihrem Standard-Texteditor öffnen sollte, was VS Code sein sollte, wenn Sie alle unsere Anweisungen bis jetzt befolgt haben.

Es stimmt nicht in allen Fällen, aber die meisten Dateien benötigen eine Erweiterung, um ordnungsgemäß behandelt zu werden. Das Entfernen oder Ändern der Dateiendung führt wahrscheinlich zu Fehlern, daher sollten Sie sie nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu haben, zum Beispiel `my.cats.html`. In solchen Fällen wird der letzte Punkt als Beginn der Dateiendung angesehen.

Auf Windows-Computern könnten Sie Schwierigkeiten haben, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Dateiendungen für bekannte Dateitypen ausblenden** eingeschaltet hat. Sie können dies deaktivieren, indem Sie zu Datei-Explorer gehen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Dateiendungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

### Best Practices für die Benennung von Dateien

Während Sie diesem Kurs folgen, werden Sie feststellen, dass wir Sie immer bitten, Ordner und Dateien vollständig in Kleinbuchstaben ohne Leerzeichen zu benennen. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Ordner- und Dateinamen Probleme erzeugt — einige der häufigeren sind wie folgt:

1. Viele Computersysteme, einschließlich der meisten Webserver, sind groß-/kleinschreibungssensitiv. Wenn Sie also beispielsweise ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` platzieren und dann in einer anderen Datei versuchen, auf das Bild mit `test-site/images/myimage.jpg` zu verweisen, funktioniert es möglicherweise nicht.
2. Wenn Sie Befehle in der Befehlszeile aufrufen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, andernfalls werden sie als zwei separate Elemente interpretiert.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren in bestimmten Fällen (zum Beispiel wenn es sich um Module handelt, die importiert werden sollen) nicht gut mit Leerzeichen in Dateinamen.
4. Dateinamen stimmen häufig mit Webadressen/URLs überein. Wenn Sie beispielsweise eine Datei namens `my file.html` im Stammordner Ihres Servers haben, wird sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` zugänglich sein. Webserver ersetzen normalerweise die Leerstellen in Dateinamen durch `%20` (weil URLs {{Glossary("Percent-encoding", "prozent-codiert")}} sind), was subtile Fehler mit einigen Systemen erzeugen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie ein Bindestrich (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` anstelle von `my file.html`. Dies ist eine gute Praxis.

Es ist am besten, sich angewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen zwischen den Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie weniger Probleme in der Zukunft haben.

> [!NOTE]
> Weitere Best Practices für Dateinamen und URLs finden Sie in [URL structure best practices for Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde genommen eine Route, damit eine Datei weiß, wo sich eine andere befindet. Zum Beispiel wird beim Erstellen einer Webseite, die ein Bild enthält, Ihr Webseitencode einen Dateipfad enthalten müssen, der den Speicherort des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel dazu durchgehen. Es ist in Ordnung, wenn Sie jetzt noch nicht alles darüber verstehen.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Icon-Bild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) verwenden, um dieses Beispiel zu verwenden.
2. Legen Sie das Bild in Ihrem _images_-Ordner ab.
3. Stellen Sie sicher, dass der Bilddateiname kurz und einfach ohne Leerzeichen ist. Zum Beispiel sind `firefox-icon.png` und `cat.jpg` gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Achten Sie auch darauf, die Dateiendung beizubehalten.

Nun fügen wir der Datei `index.html` Inhalte hinzu, damit sie die Bilddatei finden und anzeigen kann.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt genau so ein, wie er unten angezeigt wird. Dies ist HTML, die Sprache, die wir verwenden, um Webseitenelemente zu definieren und zu strukturieren. Sie werden sehr bald viel mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML sagen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Ordner, der sich im selben Ordner wie `index.html` befindet. Um von `index.html` zur Bilddatei im Dateisystem zu gelangen, benötigen wir den Dateipfad `images/your-image-filename`. Wenn Ihr Bild beispielsweise `firefox-icon.png` heißt, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Dies können Sie tun, indem Sie die HTML-Datei mit <kbd>Strg</kbd>/Rechtsklick auswählen und dann _Öffnen mit_ und einen Webbrowser aus dem Untermenü auswählen. Sie könnten auch die Benutzeroberfläche Ihres Dateisystems und ein Webbrowserfenster auf demselben Bildschirm öffnen und die HTML-Datei über das Webbrowserfenster ziehen und ablegen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein brennender Fuchs umspannt die Welt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im selben Ordner wie die aufrufende HTML-Datei zu verweisen, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor dem Pfad, plus einen Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im Ordner **oberhalb** der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn also `index.html` in einem Unterordner von `test-site` und `my-image.jpg` sich in `test-site` befindet, könnten Sie `my-image.jpg` von `index.html` mit `../my-image.jpg` referenzieren.
- Sie können diese so oft kombinieren, wie Sie möchten, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem verwendet tendenziell Backslashes, nicht Schrägstriche, z. B. `C:\Windows`. Dies spielt in HTML keine Rolle — selbst wenn Sie Ihre Website auf Windows entwickeln, sollten Sie in Ihrem Code dennoch Schrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
