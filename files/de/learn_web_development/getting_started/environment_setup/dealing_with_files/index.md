---
title: Umgang mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Website besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und so weiter. Beim Aufbau einer Website müssen Sie diese Dateien in eine sinnvolle Struktur auf Ihrem lokalen Computer zusammenfügen, sicherstellen, dass sie miteinander kommunizieren können, und alle Inhalte richtig darstellen, bevor Sie sie schließlich auf einen Server stellen, damit die Welt sie sehen kann. Dieser Artikel erklärt, wie Sie die Benutzeroberfläche (UI) des Dateiexplorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Website einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem (OS) und die grundlegende Software, die Sie zum Erstellen einer Website verwenden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Manipulieren von Dateien und Ordnern.</li>
          <li>Beste Praktiken zur Benennung.</li>
          <li>Standard-Website-Ordnerstruktur.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateierweiterungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipulieren von Dateien und Ordnern

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/Terminal Ihres Computers mit einer Reihe von Textbefehlen tun, über die Sie im nächsten Artikel mehr erfahren. Viele Menschen finden es jedoch einfacher, visuell zu lernen, wie Dateisysteme funktionieren, und genau das werden wir hier besprechen. Moderne Betriebssysteme (OS) verfügen über eine robuste Dateisystem-Benutzeroberfläche (UI), mit der Sie Dateien und Ordner bei Bedarf manipulieren können.

Auf macOS beispielsweise haben Sie das Programm Finder:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde mit Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere OS-Version oder ein anderes OS insgesamt, in diesem Fall kann sich die Erfahrung leicht unterscheiden. Es gibt viele Leitfäden im Web zur grundlegenden OS-Nutzung – wir empfehlen Ihnen, im Web nach Informationen zu Ihrem speziellen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto enthält, das auf dem System existiert, auch als Home-Ordner des Benutzers bekannt. Dieser wird in der Regel durch ein Haussymbol dargestellt, um das Auffinden zu erleichtern. Der Home-Ordner enthält wiederum andere wichtige Standardordner (und Dateien), die für diesen Benutzer besonders relevant sind, wie _Documents_, _Music_ usw. Es gibt auch viele andere Dateien und Ordner auf Ihrem Computer, aber machen Sie sich darüber jetzt keine Sorgen.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen Home-Ordner zugreifen.

Sie sollten Projektdateien zu Ihrer Arbeit irgendwo im Home-Ordner erstellen, vielleicht im _Documents_-Ordner. Das macht Sinn, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie anfangen, Dateien an anderen Stellen Ihres Systems zu erstellen und zu bearbeiten (zum Beispiel in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas beschädigen. Im Moment sollten Sie sich darauf beschränken, Dateien im Home-Ordner zu erstellen und zu bearbeiten.

### Einen Ordner erstellen

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in Ihrem Dateisystem-UI auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Documents_-Ordner.
2. Erstellen Sie einen neuen Ordner an diesem Ort namens `web-projects`:
   1. Auf Windows kann dies durch Auswählen der _Neu_-Schaltfläche im Datei-Explorer-Fenster und Auswahl von _Ordner_ (oder durch Drücken von <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>), durch Eingeben von `web-projects` als Namen des neuen Ordners, der erscheint, und das Drücken von <kbd>Eingabe</kbd> erfolgen.
   2. Auf macOS kann dies durch Auswahl von _Ablage_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Befehl</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) erfolgen — Sie sehen einen neuen Ordner mit dem Namen _unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein, und drücken Sie <kbd>Eingabe</kbd>.

Wenn Sie einen Tippfehler machen, können Sie den Ordnernamen bearbeiten, um ihn zu korrigieren (dies funktioniert auch bei Dateien):

- Auf Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben ein vereinfachtes Menü, das zunächst angezeigt wird – Sie müssen möglicherweise mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ auswählen und schließlich _Umbenennen_ auswählen!
- Auf macOS klicken Sie auf/auswählen des Ordnernamens, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Während Sie Textdateien innerhalb der OS-Dateisystem-UI erstellen können, ist es in der Regel einfacher und fehlerfreier, sie in Ihrem Code-Editor zu erstellen. Tatsächlich hat VS Code einen eigenen Dateiexplorer, mit dem Sie alle Ordner und Dateien erstellen können, die Sie für Ihre Webprojekte benötigen.

Warum haben wir Sie also dazu gebracht, einen Ordner mit der OS-Dateisystem-UI zu erstellen? Weil VS Code auf einen anfänglichen obersten Ordner hingewiesen werden muss!

Es ist auch nützlich, ein wenig über die Struktur des Dateisystems Ihres Betriebssystems zu verstehen. Dies wird nützlicher, wenn Sie später komplexere Werkzeuge verwenden.

Lassen Sie uns jetzt unseren `web-projects`-Ordner in VS Code öffnen:

1. Öffnen Sie VS Code.
2. Wählen Sie _Datei_ > _Ordner öffnen..._ aus dem Menü.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie den Befehl _Ordner öffnen_ in Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> und dann <kbd>O</kbd> drücken. Der einfachste Weg für einen macOS-Benutzer besteht darin, die _Befehlspalette_ mit <kbd>Befehl</kbd> + <kbd>Umschalt</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, die Pfeiltasten zu verwenden, um zu _Datei: Ordner öffnen_ zu wechseln, und dann <kbd>Eingabe</kbd> zu drücken.
3. Eine Mini-Version der OS-Dateisystem-UI wird angezeigt. Verwenden Sie sie, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die Taste _Ordner auswählen_.
4. Ihnen wird ein Dialogfeld mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ angezeigt. Lesen Sie dies sorgfältig durch, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, daher können Sie auf _Ja, ich vertraue den Autoren_ klicken.

Sie sollten nun Ihren `web-projects`-Ordner im _EXPLORER_-Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Erneut: Achten Sie darauf, dass Sie bis auf Weiteres nur Ihre eigenen Dateien im Home-Ordner bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Nebenaspekt zur Tastaturnavigation in VS Code

VS Code ist zwar keineswegs perfekt, verfügt jedoch über eine umfangreiche Sammlung von Tastaturkürzeln. In diesem Artikel haben wir nach Möglichkeit nützliche hinzugefügt, aber Sie können umfassendere Listen in der VS Code [Tastenkombinationen-Referenz](https://code.visualstudio.com/docs/configure/keybindings) finden.

Im Allgemeinen können Sie, wenn Sie VS Code über die Tastatur navigieren möchten, die <kbd>Tab</kbd>-Taste drücken, um sich durch verschiedene Bereiche der Benutzeroberfläche zu bewegen (<kbd>Umschalt</kbd> + <kbd>Tab</kbd> bewegt Sie zu einem vorherigen Tab-Fokuspunkt). Wenn mehrere Schaltflächen in einem Tab-Fokuspunkt vorhanden sind, können Sie die Pfeiltasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie derzeit eine Datei bearbeiten, navigiert die Tab-Taste nicht durch die Benutzeroberfläche, sondern fügt Tabulatoren in der Datei hinzu. Um aus der Datei, die Sie bearbeiten, in den _EXPLORER_-Bereich wechseln, können Sie auf macOS <kbd>Befehl</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> drücken, oder auf Windows <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd>.

Um zurück zum Dateieditor-Bereich zu gelangen und zwischen den verschiedenen in verschiedenen Tabs geöffneten Dateien zu wechseln, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden Sie <kbd>Tab</kbd> und <kbd>Umschalt</kbd> + <kbd>Tab</kbd>, um die Liste der geöffneten Tabs rauf und runter zu bewegen (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei markiert haben, die Sie bearbeiten möchten, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Erstellen einer Datei

Von hier aus können Sie neue Dateien und Ordner mit den entsprechenden Schaltflächen oben im _EXPLORER-_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie das _Neue Datei..._-Symbol anklicken (oder <kbd>Tab</kbd> drücken, um sie auszuwählen, und <kbd>Eingabe</kbd> drücken).
2. Geben Sie als Dateinamen "index.html" in das erscheinende Texteingabefeld ein und drücken Sie <kbd>Eingabe</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben im _Willkommens_-Tab, um Dateien und Ordner zu erstellen, da sie etwas anders funktionieren. Sie können das _Willkommens_-Tab schließen, da Sie es nicht benötigen. Tun Sie dies, indem Sie das „x“ auf der rechten Seite des Tabs anklicken oder auf macOS <kbd>Befehl</kbd> + <kbd>W</kbd> (auf Windows <kbd>Strg</kbd> + <kbd>W</kbd>) drücken.

Gehen Sie an diesem Punkt zurück zu Ihrem OS-Dateisystem-UI, betreten Sie Ihren `web-projects`-Ordner, indem Sie ihn doppelklicken, und Sie sollten auch Ihre `index.html`-Datei dort sehen. VS Code verwendet das zugrunde liegende OS-Dateisystem und nicht ein eigenes, seltsames Dateisystem.

### Verschieben der index.html in einen eigenen Unterordner

Sie können Ordner innerhalb anderer Ordner (sogenannte _Unterordner_) so viele Ebenen tief erstellen, wie Sie möchten. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie per Drag-and-Drop darauf ziehen.

Lassen Sie uns dies erkunden und dabei unsere Datei `index.html` in einen eigenen Unterordner verschieben. Wir möchten sie wirklich nicht direkt im Hauptordner `web-projects` haben.

1. Erstellen Sie einen neuen Ordner in `web-projects` mithilfe der _Neuer Ordner..._-Schaltfläche im VS Code _EXPLORER_-Bereich.
2. Benennen Sie ihn `test-site`.
3. Sie sollten nun in der Lage sein, die Datei `index.html` zu ziehen und auf den Ordner `test-site` zu legen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie dies folgendermaßen tun:
   >
   > 1. Verwenden Sie die Auf- und Abwärtspfeile, um die Fokusumrandung über die Datei `index.html` zu bewegen.
   > 2. Drücken Sie auf macOS <kbd>Befehl</kbd> + <kbd>X</kbd> (<kbd>Strg</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um die Fokusumrandung über den Ordner zu bewegen.
   > 4. Drücken Sie auf macOS <kbd>Befehl</kbd> + <kbd>V</kbd> (<kbd>Strg</kbd> + <kbd>V</kbd> auf Windows), um die Datei in diesen Ordner zu verschieben.

Es gibt noch viel mehr, was wir über die Verwendung von OS-Dateisystem-UIs und VS Code erklären könnten, aber wir haben nur begrenzten Platz, daher belassen wir es vorerst dabei. Dies hat Ihnen genügend Informationen gegeben, um loszulegen, und wir ermuntern Sie, im Web nach Informationen zu suchen, wie man andere Dinge mit Dateien und Ordnern macht.

Lassen Sie uns zu einer kurzen Diskussion der Webseitenstruktur übergehen.

## Welche Struktur sollte eine Website haben?

Wenn Sie lokal an Websites arbeiten (auf Ihrem Computer), sollten Sie alle zugehörigen Dateien für jede Website in einem einzelnen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Website-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Website-Projekte zu speichern. Wir haben Sie auch dazu gebracht, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Funktionen in `test-site` hinzufügen, um eine typische Website-Struktur zu demonstrieren; im nächsten Modul werden wir Sie dazu bringen, ein vollständiges Website-Beispiel darin aufzubauen. Die häufigsten Dinge, die jedes Website-Projekt enthalten wird, sind eine Index-HTML-Datei und Ordner, um Bilder, Style-Dateien und Skript-Dateien zu enthalten:

1. **`index.html`**: Diese Datei wird im Allgemeinen den Inhalt Ihrer Homepage enthalten, das heißt, den Text und die Bilder, die Menschen sehen, wenn sie zuerst auf Ihre Website gehen.
2. **`images`-Ordner**: Dieser Ordner wird alle Bilder enthalten, die Sie auf Ihrer Website verwenden.
3. **`styles`-Ordner**: Dieser Ordner wird den CSS-Code enthalten, der zum Stylen Ihrer Inhalte verwendet wird (zum Beispiel das Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: Dieser Ordner wird den gesamten JavaScript-Code enthalten, der verwendet wird, um interaktive Funktionalität zu Ihrer Website hinzuzufügen (zum Beispiel das Definieren, was passiert, wenn Schaltflächen geklickt werden).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html`-Datei in `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Ein Dateiname besteht im Allgemeinen aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen wir die oben erstellte Datei — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Beschränkungen bezüglich der Zeichen haben, die verwendet werden können. Es ist besser, sich zumindest am Anfang an Zahlen und Buchstaben zu halten. Darüber hinaus können Systeme bestimmten Namen oder Namensbestandteilen eine spezielle Bedeutung beimessen — wie bereits erwähnt, werden `index`-Dateien häufig als die Haupt-Homepage-Datei einer Website erkannt.
- Die Dateiendung identifiziert den Dateityp, mit dem wir es zu tun haben, und wird von Computersystemen verwendet, um zu identifizieren, welche Art von Inhalt sie in der Datei erwarten können, welches Programm sie zum Öffnen der Datei verwenden sollten usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Klartext und genauer gesagt HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass beim Versuch, die Datei zu öffnen, Ihr Standard-Texteditor verwendet werden sollte, der VS Code sein sollte, wenn Sie all unseren Anweisungen bisher gefolgt sind.

Es gilt nicht in allen Fällen, aber die meisten Dateien benötigen eine Erweiterung, um ordnungsgemäß verarbeitet zu werden. Das Entfernen oder Ändern der Dateiendung führt wahrscheinlich zu Fehlern, daher sollten Sie sie nicht ändern, es sei denn, Sie wissen wirklich, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu haben, zum Beispiel `my.cats.html`. In solchen Fällen wird angenommen, dass der letzte Punkt den Beginn der Dateiendung darstellt.

Auf Windows-Computern haben Sie möglicherweise Schwierigkeiten, die Erweiterungen einiger Dateien zu sehen, da Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. Sie können dies deaktivieren, indem Sie zum Datei-Explorer gehen, die Option **Ordneroptionen…** auswählen, das Kontrollkästchen **Erweiterungen für bekannte Dateitypen ausblenden** deaktivieren und dann auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Web suchen.

### Beste Praktiken für Dateinamen

Während Sie diesen Kurs verfolgen, werden Sie feststellen, dass wir Sie immer bitten, Ordner und Dateien vollständig in Kleinbuchstaben ohne Leerzeichen zu benennen. Es gibt viele Möglichkeiten, wie die Verwendung von Leerzeichen in Datei- und Ordnernamen Probleme schafft — einige der häufigsten sind folgende:

1. Viele Computersysteme, einschließlich der meisten Webserver, sind case-sensitiv. Wenn Sie also beispielsweise ein Bild auf Ihrer Website unter `test-site/images/MyImage.jpg` speichern und dann in einer anderen Datei versuchen, auf das Bild mit `test-site/images/myimage.jpg` zu verweisen, funktioniert es möglicherweise nicht.
2. Wenn Sie Befehle in der Befehlszeile aufrufen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, da sie sonst als zwei separate Elemente interpretiert werden.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren nicht gut mit Leerzeichen in Dateinamen unter bestimmten Umständen (zum Beispiel, wenn diese Dateien Module sind, die importiert werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie beispielsweise eine Datei namens `my file.html` im Stammordner Ihres Servers haben, wird sie in der Regel unter einer URL wie `https://example.com/my%20file.html` zugänglich sein. Webserver ersetzen normalerweise die Leerzeichen in Dateinamen mit `%20` (weil URLs {{Glossary("Percent-encoding", "prozentcodiert")}} sind), was in einigen Systemen subtile Fehler verursachen kann, wenn sie davon ausgehen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt Leerzeichen verwenden viele Entwickler ein Trennzeichen wie einen Bindestrich (`-`) statt eines Leerzeichens — zum Beispiel `my-file.html` anstelle von `my file.html`. Dies ist eine gute Praxis.

Es ist am besten, sich anzugewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit Bindestrichen getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie auf weniger Probleme stoßen.

> [!NOTE]
> Weitere Best Practices für Dateinamen und -URLs finden Sie in den [URL-Struktur-Best Practices für Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde eine Route, damit eine Datei weiß, wo sich eine andere befindet. Wenn Sie beispielsweise eine Webseite mit einem Bild erstellen, muss Ihr Webseiten-Code einen Dateipfad enthalten, der den Standort des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel dazu durchgehen. Sie verstehen vielleicht im Moment nicht alles, was das bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Web nach einem Bild, das Ihnen gefällt (zum Beispiel unter Verwendung eines Dienstes wie [Google Images](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Symbolbild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihren _images_-Ordner.
3. Stellen Sie sicher, dass die Bilddatei etwas Kurzes und Einfaches ohne Leerzeichen im Namen hat. Beispielsweise ist `firefox-icon.png` gut, und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie außerdem sicher, dass Sie die Dateiendung beibehalten.

Jetzt fügen wir der `index.html`-Datei Inhalt hinzu, der es ihr ermöglicht, die Bilddatei zu finden und anzuzeigen.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt exakt wie unten gezeigt in die Datei ein. Dies ist HTML, die Sprache, die wir verwenden, um den Inhalt von Webseiten zu definieren und zu strukturieren. Darüber werden Sie sehr bald noch viel mehr lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild in die Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Ordner, der sich im selben Ordner wie die `index.html` befindet. Um von `index.html` zur Bilddatei durch die Dateistruktur zu gehen, lautet der Dateipfad `images/your-image-filename`. Wenn Ihr Bild zum Beispiel `firefox-icon.png` hieß, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen die Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie mit <kbd>Strg</kbd>/Rechtsklick auf die HTML-Datei klicken, dann _Öffnen mit_ wählen und einen Webbrowser aus dem erscheinenden Untermenü auswählen. Alternativ können Sie Ihre Dateisystem-UI und ein Webbrowserfenster auf demselben Bildschirm öffnen und die HTML-Datei per Drag-and-Drop über das Webbrowserfenster ziehen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Website, die nur das Firefox-Logo zeigt - ein flammenwerfender Fuchs, der die Welt umarmt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im selben Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um auf eine Datei in einem Unterordner zu verweisen, schreiben Sie den Ordnernamen vor den Pfad plus einen Schrägstrich, zum Beispiel `unterordner/mein-bild.jpg`.
- Um auf eine Zieldatei im **über** der aufrufenden HTML-Datei liegenden Ordner zu verlinken, schreiben Sie zwei Punkte. Wenn beispielsweise `index.html` in einem Unterordner von `test-site` und `mein-bild.jpg` in `test-site` war, könnten Sie in `index.html` mit `../mein-bild.jpg` auf `mein-bild.jpg` verweisen.
- Sie können dies nach Belieben kombinieren, zum Beispiel `../unterordner/ein-weiterer-unterordner/mein-bild.jpg`.

> [!NOTE]
> Das Windows-Dateisystem neigt dazu, Rückwärtsslashes statt Schrägstriche zu verwenden, z.B. `C:\Windows`. Dies spielt in HTML keine Rolle — selbst wenn Sie Ihre Webseite unter Windows entwickeln, sollten Sie in Ihrem Code Schrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
