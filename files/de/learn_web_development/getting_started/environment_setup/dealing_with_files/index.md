---
title: Arbeiten mit Dateien
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Eine Webseite besteht aus vielen Dateien: Textinhalte, Code, Stylesheets, Medieninhalte und mehr. Wenn Sie eine Webseite erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur auf Ihrem lokalen Computer anordnen, sicherstellen, dass sie miteinander kommunizieren können, und sicherstellen, dass alle Inhalte korrekt dargestellt werden, bevor Sie sie schließlich auf einen Server hochladen, damit die Welt sie sehen kann. In diesem Artikel wird erklärt, wie Sie die Benutzeroberfläche (UI) des Datei-Explorers Ihres Computers verwenden und eine sinnvolle Dateistruktur für eine Webseite einrichten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem (OS) und der grundlegenden Software, die Sie zum Erstellen einer Webseite verwenden werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Manipulation von Dateien und Ordnern.</li>
          <li>Best Practices für die Benennung.</li>
          <li>Standard-Ordnerstruktur für Webseiten.</li>
          <li>Umgang mit Dateipfaden.</li>
          <li>Umgang mit Dateiendungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipulation von Dateien und Ordnern

Es gibt viele verschiedene Möglichkeiten, die Dateien und Ordner auf Ihrem Computer zu erstellen und zu bearbeiten. Sie können dies über die Befehlszeile/Terminal Ihres Computers mithilfe einer Reihe von Textbefehlen tun, die Sie im nächsten Artikel näher kennenlernen werden. Viele Menschen finden es jedoch einfacher, sich zunächst visuell mit Dateisystemen zu beschäftigen, was wir hier besprechen werden. Moderne Betriebssysteme (OSes) haben eine robuste Benutzeroberfläche (UI) für Dateisysteme, die Sie verwenden können, um Dateien und Ordner nach Bedarf zu manipulieren.

Auf macOS haben Sie zum Beispiel das Programm Finder:

![Die macOS Finder-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](finder.png)

Während Windows den Datei-Explorer hat:

![Die Windows Datei-Explorer-Anwendung, die den Inhalt eines typischen Home-Ordners zeigt](file-explorer.png)

> [!NOTE]
> Dieser Leitfaden wurde unter Verwendung von Windows 11 und macOS 15 geschrieben. Möglicherweise verwenden Sie eine andere OS-Version oder ein anderes OS insgesamt, in welchem Fall sich die Erfahrung leicht unterscheiden kann. Es gibt viele Anleitungen im Internet zur Grundnutzung von Betriebssystemen — wir empfehlen Ihnen, online nach Informationen zu Ihrem speziellen OS zu suchen.

### Grundstruktur

Die meisten modernen Betriebssysteme haben einen `Users`-Ordner, der einen Ordner für jedes Benutzerkonto enthält, das auf dem System existiert, auch bekannt als der _Home_-Ordner des Benutzers. Dies wird in der Regel durch ein Haus-Symbol dargestellt, um die Auffindbarkeit zu erleichtern. Im _Home_-Ordner befinden sich dann weitere wichtige Standardordner (und Dateien), die für diesen Benutzer besonders relevant sind, wie _Dokumente_, _Musik_ usw. Es gibt noch viele andere Dateien und Ordner auf Ihrem Computer, aber machen Sie sich darüber vorerst keine Sorgen.

Der aktuell angemeldete Benutzer kann standardmäßig nur auf seinen eigenen _Home_-Ordner zugreifen.

Sie sollten Projektdateien, die sich auf Ihre Arbeit beziehen, irgendwo in Ihrem _Home_-Ordner erstellen, vielleicht unter _Dokumente_. Das ist sinnvoll, da Webseiten-Dateien oft als _Dokumente_ bezeichnet werden.

> [!WARNING]
> Wenn Sie beginnen, Dateien an anderen Stellen auf Ihrem System zu erstellen und zu bearbeiten (z. B. in Bereichen, die das Betriebssystem oder wichtige Anwendungen steuern), könnten Sie etwas beschädigen. Vorerst sollten Sie sich darauf beschränken, Dateien in Ihrem _Home_-Ordner zu erstellen und zu bearbeiten.

### Einen Ordner erstellen

Lassen Sie uns einen neuen Ordner erstellen, um alle unsere Webprojekte zu speichern.

1. Klicken Sie in Ihrer Dateisystem-UI auf Ihren _Home_-Ordner und doppelklicken Sie dann auf Ihren _Dokumente_-Ordner.
2. Erstellen Sie an diesem Ort einen neuen Ordner namens `web-projects`:
   1. Unter Windows kann dies durch Auswahl der _Neu_-Schaltfläche im Datei-Explorer-Fenster und der Auswahl von _Ordner_ (oder durch Drücken von <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) erfolgen. Geben Sie `web-projects` als Namen des neuen Ordners ein und drücken Sie <kbd>Enter</kbd>.
   2. Auf macOS kann dies durch Auswahl von _Ablage_ > _Neuer Ordner_ im Finder-Menü (oder durch Drücken von <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>N</kbd>) erfolgen — Sie sehen einen neuen Ordner namens _unbenannter Ordner_. Klicken Sie auf den Ordnernamen, um ihn zu bearbeiten, geben Sie `web-projects` ein und drücken Sie <kbd>Enter</kbd>.

Wenn Sie sich vertippen, können Sie den Ordnernamen korrigieren (dies funktioniert auch mit Dateien):

- Unter Windows klicken Sie mit der rechten Maustaste auf den Ordner, wählen _Umbenennen_ aus dem Menü und bearbeiten ihn. Einige Windows-Versionen haben zunächst ein vereinfachtes Menü — möglicherweise müssen Sie mit der rechten Maustaste klicken, dann _Weitere Optionen anzeigen_ auswählen und schließlich _Umbenennen_ wählen!
- Auf macOS klicken Sie auf/selektieren den Ordnernamen, um ihn zu bearbeiten.

### Öffnen eines Projektordners und Erstellen von Dateien in VS Code

Obwohl Sie Textdateien innerhalb der OS-Dateisystem-UI erstellen können, ist es im Allgemeinen einfacher und weniger fehleranfällig, sie in Ihrem Code-Editor zu erstellen. Tatsächlich hat VS Code seinen eigenen Datei-Explorer, mit dem Sie alle Ordner und Dateien erstellen können, die Sie für Ihre Webprojekte benötigen.

Also, warum haben wir Sie durch die Mühe geschickt, einen Ordner mit der OS-Dateisystem-UI zu erstellen? Weil VS Code auf einen anfänglichen übergeordneten Ordner hingewiesen werden muss!

Es ist auch nützlich, ein wenig über die Struktur Ihres OS-Dateisystems zu verstehen. Dies wird nützlicher, wenn Sie später komplexere Werkzeuge verwenden.

Lassen Sie uns unseren `web-projects`-Ordner jetzt in VS Code öffnen:

1. Öffnen Sie VS Code.
2. Wählen Sie _Datei_ > _Ordner öffnen..._ aus dem Menü.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie den _Ordner öffnen_-Befehl in Windows ausführen, indem Sie die <kbd>Strg</kbd>-Taste gedrückt halten und <kbd>K</kbd> dann <kbd>O</kbd> drücken. Der einfachste Weg für einen macOS-Benutzer, dies zu tun, besteht darin, die _Befehlsübersicht_ mit <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>P</kbd> zu öffnen, "Ordner öffnen" einzugeben, um die Befehlsliste zu filtern, mit den Cursortasten nach unten zu _Datei: Ordner öffnen_ zu wechseln und <kbd>Enter</kbd> zu drücken.
3. Eine Mini-Version der OS-Dateisystem-UI wird angezeigt. Verwenden Sie sie, um Ihren `web-projects`-Ordner zu finden, wählen Sie ihn aus und drücken Sie die Schaltfläche _Ordner auswählen_.
4. Ihnen wird ein Dialogfenster mit dem Titel _Vertrauen Sie den Autoren der Dateien in diesem Ordner?_ angezeigt. Lesen Sie dies sorgfältig, um zu verstehen, worum es geht. Im Moment sind Sie die einzige Person, die Dateien in diesem Ordner erstellt, sodass Sie auf _Ja, ich vertraue den Autoren_ klicken können.

Sie sollten Ihren `web-projects`-Ordner im _EXPLORER_-Bereich von VS Code geöffnet sehen, wie unten gezeigt:

![Das VS Code Explorer-Panel, das einen leeren Ordner namens web-projects zeigt](vs-code-explorer.png)

> [!WARNING]
> Achten Sie darauf, vorerst nur Ihre eigenen Dateien in Ihrem _Home_-Ordner zu bearbeiten, um Probleme mit Ihrem System zu vermeiden.

#### Ein Exkurs zur Tastaturnavigation in VS Code

VS Code verfügt, obwohl nicht perfekt, über eine umfassende Sammlung von Tastenkombinationen. In diesem Artikel haben wir versucht, nützliche Shortcuts dort einzubringen, wo möglich, aber umfassendere Listen finden Sie in der VS Code [Referenz zu Tastenkombinationen](https://code.visualstudio.com/docs/editor/keybindings).

Im Allgemeinen, wenn Sie VS Code über die Tastatur navigieren möchten, können Sie die <kbd>Tab</kbd>-Taste drücken, um durch verschiedene Bereiche der UI zu wechseln (<kbd>Umschalt</kbd> + <kbd>Tab</kbd> bringt Sie zu einer früheren Tab-Fokusposition zurück). Wenn es mehrere Schaltflächen in einer Tab-Fokusposition gibt, können Sie die Pfeiltasten verwenden, um zwischen ihnen zu wechseln.

Wenn Sie gerade eine Datei bearbeiten, navigiert die Tab-Taste nicht durch die UI — sie fügt Tab-Zeichen in die Datei ein. Um aus der Datei, die Sie bearbeiten, zum _EXPLORER_-Bereich zu wechseln, können Sie <kbd>Cmd</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> auf macOS oder <kbd>Strg</kbd> + <kbd>Umschalt</kbd> + <kbd>E</kbd> auf Windows drücken.

Um zurück zum Datei-Editor-Panel zu gelangen und zwischen den verschiedenen in verschiedenen Tabs geöffneten Dateien zu wechseln, halten Sie die <kbd>Strg</kbd>-Taste gedrückt und verwenden <kbd>Tab</kbd> und <kbd>Umschalt</kbd> + <kbd>Tab</kbd>, um nach oben und unten in der Liste der geöffneten Tabs zu wechseln (sowohl auf macOS als auch auf Windows). Sobald Sie die Datei, die Sie bearbeiten möchten, hervorgehoben haben, lassen Sie die Tasten los, um zu diesem Tab zu wechseln.

#### Eine Datei erstellen

Von hier aus können Sie neue Dateien und Ordner über die entsprechenden Schaltflächen oben im _EXPLORER_-Bereich erstellen.

1. Erstellen Sie eine neue Datei, indem Sie auf das _Neue Datei..._-Symbol klicken (oder mit <kbd>Tab</kbd> zu ihm navigieren und <kbd>Enter</kbd> drücken).
2. Geben Sie den Dateinamen als "index.html" in das angezeigte Texteingabefeld ein und drücken Sie <kbd>Enter</kbd>.

> [!NOTE]
> Verwenden Sie nicht die Schaltflächen oben auf dem _Willkommen_-Tab, um Dateien und Ordner zu erstellen, da sie ein wenig anders funktionieren. Tatsächlich können Sie das _Willkommen_-Tab schließen, da Sie es nicht benötigen. Tun Sie dies, indem Sie auf das "x" auf der rechten Seite des Tabs klicken oder <kbd>Cmd</kbd> + <kbd>W</kbd> auf macOS (bzw. <kbd>Strg</kbd> + <kbd>W</kbd> auf Windows) drücken.

Gehen Sie nun zurück zu Ihrer OS-Dateisystem-UI, gehen Sie in Ihren `web-projects`-Ordner, indem Sie darauf doppelklicken, und Sie sollten dort ebenfalls Ihre `index.html`-Datei sehen. VS Code verwendet das zugrundeliegende OS-Dateisystem und verwendet kein eigenes seltsames Dateisystem.

### Verschieben von index.html in einen eigenen Unterordner

Sie können Ordner in anderen Ordnern erstellen (so genannte _Unterordner_), so tief wie Sie möchten. Sie können auch Dateien (und Ordner) in andere Ordner verschieben, indem Sie sie auf den betreffenden Ordner ziehen und dort ablegen.

Lassen Sie uns dies erkunden und dabei unsere `index.html`-Datei in einen eigenen Unterordner verschieben. Wir möchten sie nicht wirklich im Hauptordner `web-projects` liegen haben.

1. Erstellen Sie einen neuen Ordner innerhalb von `web-projects` über die Schaltfläche _Neuer Ordner..._ im _EXPLORER_-Bereich von VS Code.
2. Nennen Sie ihn `test-site`.
3. Sie sollten nun in der Lage sein, die `index.html`-Datei auf den `test-site`-Ordner zu ziehen und dort abzulegen, um die Datei in den Ordner zu verschieben.
   > [!NOTE]
   > Wenn Sie ein Tastaturbenutzer sind, können Sie dies durch folgende Schritte tun:
   >
   > 1. Verwenden Sie die Pfeiltasten nach oben und unten, um die Fokusumrandung auf die `index.html`-Datei zu verschieben.
   > 2. Drücken Sie <kbd>Cmd</kbd> + <kbd>X</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>X</kbd> auf Windows), um die Datei zum Verschieben auszuwählen.
   > 3. Verwenden Sie die Pfeiltasten, um die Fokusumrandung auf den Ordner zu verschieben.
   > 4. Drücken Sie <kbd>Cmd</kbd> + <kbd>V</kbd> auf macOS (<kbd>Strg</kbd> + <kbd>V</kbd> auf Windows), um die Datei in diesen Ordner zu verschieben.

Es gibt noch viel mehr, das wir über die Verwendung von OS-Dateisystem-UIs und VS Code einfügen könnten, aber wir haben nur begrenzten Platz, also belassen wir es vorerst dabei. Dies hat Ihnen genug Informationen gegeben, um loszulegen, und wir ermutigen Sie, im Internet nach Informationen zu suchen, wie Sie andere Dinge mit Dateien und Ordnern tun können.

Lassen Sie uns nun zu einer kurzen Diskussion über die Struktur von Webseiten übergehen.

## Welche Struktur sollte eine Webseite haben?

Wenn Sie lokal (auf Ihrem Computer) an Webseiten arbeiten, sollten Sie alle zusammengehörigen Dateien für jede Seite in einem einzigen Ordner aufbewahren. Im Gegenzug sollten Sie alle Ihre Webseiten-Ordner in einem zentralen Ordner aufbewahren, damit sie alle leicht zu finden sind.

Früher im Artikel haben wir Sie angewiesen, einen zentralen Ordner namens `web-projects` zu erstellen, um alle Ihre Webseitenprojekte zu speichern. Wir haben Sie auch aufgefordert, einen Unterordner namens `test-site` mit einer leeren `index.html`-Datei darin zu erstellen.

Lassen Sie uns einige weitere Funktionen innerhalb von `test-site` hinzufügen, um eine typische Webseitenstruktur zu demonstrieren; im nächsten Modul werden wir Sie anleiten, ein vollständiges Webseitenbeispiel darin aufzubauen. Die häufigsten Dinge, die jedes Webseitenprojekt enthalten wird, sind eine Index-HTML-Datei und Ordner, um Bilder, Stil- und Skript-Dateien zu enthalten:

1. **`index.html`**: Diese Datei wird im Allgemeinen Ihren Homepage-Inhalt enthalten, das heißt, den Text und die Bilder, die Menschen sehen, wenn sie zuerst auf Ihre Seite gehen.
2. **`images`-Ordner**: Dieser Ordner wird alle Bilder enthalten, die Sie auf Ihrer Seite verwenden.
3. **`styles`-Ordner**: Dieser Ordner wird den CSS-Code enthalten, der zur Gestaltung Ihres Inhalts verwendet wird (zum Beispiel, Festlegen von Text- und Hintergrundfarben).
4. **`scripts`-Ordner**: Dieser Ordner wird den gesamten JavaScript-Code enthalten, der verwendet wird, um Ihrer Seite interaktive Funktionen hinzuzufügen (zum Beispiel, Definieren, was passiert, wenn Schaltflächen angeklickt werden).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten bereits eine `index.html`-Datei innerhalb von `test-site` haben. Erstellen Sie jetzt die Ordner `images`, `styles` und `scripts` darin.

## Dateinamen

Ein Dateiname besteht in der Regel aus zwei Teilen — dem **Namen** und der **Erweiterung**. Nehmen Sie die Datei, die wir oben erstellt haben — `index.html`:

- Der Name in diesem Fall ist `index`. Dateinamen können im Allgemeinen beliebige Zeichen enthalten, obwohl verschiedene Computersysteme unterschiedliche Einschränkungen bezüglich der verwendbaren Zeichen haben. Es ist besser, sich zunächst an Zahlen und Buchstaben zu halten. Außerdem können Systeme bestimmten Namen oder Namebestandteilen besondere Bedeutungen zuweisen — wie bereits gesagt, werden `index`-Dateien oft als Haupt-Homepage-Dateien einer Webseite erkannt.
- Die Dateiendung identifiziert den Dateityp, mit dem wir es zu tun haben, und wird von Computersystemen verwendet, um zu identifizieren, welche Art von Inhalt in der Datei erwartet werden kann, welches Programm zum Öffnen der Datei verwendet werden sollte usw. In diesem Fall ist die Erweiterung `.html`, was bedeutet, dass die Datei Klartext und spezifisch HTML-Code enthalten sollte. Aufgrund der Erweiterung weiß Ihr Computer, dass er beim Öffnen der Datei Ihren Standard-Texteditor verwenden soll, was VS Code sein sollte, wenn Sie alle unsere bisherigen Anweisungen befolgt haben.

Es ist nicht in allen Fällen zutreffend, aber die meisten Dateien benötigen eine Erweiterung, um korrekt verarbeitet zu werden. Das Entfernen oder Ändern der Dateiendung wird wahrscheinlich zu Fehlern führen, daher sollten Sie diese nicht ändern, es sei denn, Sie wissen genau, was Sie tun.

> [!NOTE]
> Es ist möglich, mehr als einen Punkt in einem Dateinamen zu verwenden, zum Beispiel `my.cats.html`. In solchen Fällen wird der letzte Punkt als Beginn der Dateiendung angenommen.

Auf Windows-Computern kann es sein, dass Sie Schwierigkeiten haben, die Erweiterungen mancher Dateien zu sehen, weil Windows standardmäßig eine Option namens **Erweiterungen für bekannte Dateitypen ausblenden** aktiviert hat. Sie können diese Option deaktivieren, indem Sie im Datei-Explorer die **Ordneroptionen...** wählen, das Häkchen bei **Erweiterungen für bekannte Dateitypen ausblenden** entfernen und auf **OK** klicken. Für spezifischere Informationen zu Ihrer Windows-Version können Sie im Internet suchen.

### Best Practices für das Benennen von Dateien

In diesem Kurs werden Sie bemerken, dass wir immer verlangen, dass Sie Ordner und Dateien vollständig in Kleinbuchstaben und ohne Leerzeichen benennen. Es gibt viele Gründe, warum die Verwendung von Leerzeichen in Datei- und Ordnernamen Probleme verursacht — einige der häufigsten sind wie folgt:

1. Viele Computersysteme, einschließlich der meisten Webserver, sind kleinschreibungssensitiv. Wenn Sie also ein Bild auf Ihrer Webseite unter `test-site/images/MyImage.jpg` platzieren und dann in einer anderen Datei versuchen, das Bild mit `test-site/images/myimage.jpg` zu referenzieren, funktioniert es möglicherweise nicht.
2. Wenn Sie Befehle in der Befehlszeile ausführen, müssen Sie Anführungszeichen um Dateinamen mit Leerzeichen setzen, da sie sonst als zwei getrennte Elemente interpretiert werden.
3. Einige Programmiersprachen (zum Beispiel Python) funktionieren in bestimmten Situationen nicht gut mit Leerzeichen in Dateinamen (zum Beispiel, wenn diese Dateien als Module importiert werden sollen).
4. Dateinamen werden häufig auf Webadressen/URLs abgebildet. Wenn Sie zum Beispiel eine Datei namens `my file.html` im Stammverzeichnis Ihres Servers haben, ist sie im Allgemeinen unter einer URL wie `https://example.com/my%20file.html` erreichbar. Webserver ersetzen in Dateinamen üblicherweise die Leerzeichen durch `%20` (weil URLs {{Glossary("Percent-encoding", "prozentkodiert")}} sind), was bei einigen Systemen subtile Fehler erzeugen kann, wenn sie annehmen, dass Dateinamen und URLs perfekt übereinstimmen.

Statt der Leerzeichen verwenden viele Entwickler ein Trennzeichen wie ein Hyphen (`-`) anstelle eines Leerzeichens — zum Beispiel `my-file.html` statt `my file.html`. Dies ist ein guter Brauch.

Es ist am besten, sich daran zu gewöhnen, Ihre Ordner- und Dateinamen in Kleinbuchstaben ohne Leerzeichen und mit durch Hyphens getrennten Wörtern zu schreiben, zumindest bis Sie wissen, was Sie tun. Auf diese Weise werden Sie auf weniger Probleme stoßen.

> [!NOTE]
> Weitere Best Practices für Dateinamen und URLs finden Sie bei den [URL-Struktur Best Practices von Google](https://developers.google.com/search/docs/crawling-indexing/url-structure).

## Dateipfade

Um von einer Datei auf eine andere zu verweisen, müssen Sie einen Dateipfad angeben — im Grunde eine Route, damit die eine Datei weiß, wo die andere ist. Wenn Sie zum Beispiel eine Webseite mit einem Bild erstellen, muss Ihr Webseitencode einen Dateipfad enthalten, der die Position des Bildes angibt, das Sie anzeigen möchten.

Lassen Sie uns ein einfaches Beispiel dafür durchgehen. Sie verstehen vielleicht noch nicht, was das alles bedeutet, aber das ist in Ordnung.

1. Suchen Sie im Internet nach einem Bild, das Ihnen gefällt (zum Beispiel mit einem Dienst wie [Google Bilder](https://www.google.com/imghp)) und laden Sie es herunter. Alternativ können Sie einfach unser [Firefox-Symbolbild](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) für dieses Beispiel verwenden.
2. Legen Sie das Bild in Ihren _images_-Ordner.
3. Stellen Sie sicher, dass die Bilddatei einen kurzen und einfachen Namen hat, ohne Leerzeichen. Zum Beispiel ist `firefox-icon.png` gut, und `cat.jpg` ist gut, aber `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` ist nicht gut. Stellen Sie außerdem sicher, dass Sie die Dateiendung beibehalten.

Nun fügen wir Inhalt zur `index.html`-Datei hinzu, damit sie die Bilddatei lokalisieren und anzeigen kann.

1. Öffnen Sie Ihre `index.html` in VS Code und fügen Sie den folgenden Inhalt in die Datei ein, genau wie unten gezeigt. Dies ist HTML, die Sprache, die wir verwenden, um Webseiteninhalte zu definieren und zu strukturieren. Sie werden sehr bald viel mehr darüber lernen!

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

2. Die Zeile `<img src="" alt="My test image">` ist der HTML-Code, der ein Bild auf der Seite einfügt. Wir müssen dem HTML mitteilen, wo sich das Bild befindet. Das Bild befindet sich im _images_-Ordner, der sich im selben Ordner wie `index.html` befindet. Um von `index.html` zur Bildstruktur zu gelangen, ist der benötigte Dateipfad `images/Ihr-Bild-Dateiname`. Zum Beispiel, wenn Ihr Bild `firefox-icon.png` genannt wurde, wäre der Dateipfad `images/firefox-icon.png`.
3. Fügen Sie den Dateipfad in Ihren HTML-Code zwischen den Anführungszeichen von `src=""` ein.
4. Speichern Sie Ihre HTML-Datei, und laden Sie sie dann in Ihrem Webbrowser. Sie können dies tun, indem Sie die HTML-Datei mit der rechten Maustaste anklicken/Strg klicken und dann _Öffnen mit_ auswählen und einen Webbrowser aus dem sich ergebenden Menü auswählen. Sie könnten auch die Dateisystem-UI und ein Webbrowser-Fenster auf demselben Bildschirm öffnen und die HTML-Datei über das Webbrowser-Fenster ziehen und dort ablegen.

Sie sollten eine einfache Webseite sehen, die Ihr Bild anzeigt!

![Ein Screenshot unserer einfachen Webseite, die nur das Firefox-Logo zeigt - ein flammender Fuchs, der die Welt umschlingt](website-screenshot.png)

### Allgemeine Regeln für Dateipfade

- Um auf eine Zieldatei im selben Ordner wie die aufrufende HTML-Datei zu verlinken, verwenden Sie einfach den Dateinamen, zum Beispiel `my-image.jpg`.
- Um eine Datei in einem Unterordner zu referenzieren, schreiben Sie den Ordnernamen vor den Pfad, plus ein Schrägstrich, zum Beispiel `subfolder/my-image.jpg`.
- Um auf eine Zieldatei im **übergeordneten** Ordner der aufrufenden HTML-Datei zu verlinken, schreiben Sie zwei Punkte. Wenn zum Beispiel `index.html` in einem Unterordner von `test-site` und `my-image.jpg` in `test-site` lag, könnten Sie `my-image.jpg` von `index.html` aus mit `../my-image.jpg` referenzieren.
- Sie können diese Regeln beliebig kombinieren, zum Beispiel `../subfolder/another-subfolder/my-image.jpg`.

> [!NOTE]
> Das Windows-Dateisystem neigt dazu, Rückwärtsschrägstriche zu verwenden, nicht Vorwärtsschrägstriche, z. B. `C:\Windows`. Das spielt in HTML keine Rolle — sogar wenn Sie Ihre Webseite auf Windows entwickeln, sollten Sie in Ihrem Code Vorwärtsschrägstriche verwenden.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
