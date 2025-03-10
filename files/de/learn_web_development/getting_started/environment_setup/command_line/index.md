---
title: Crashkurs zur Befehlszeile
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie unweigerlich einige Befehle im Terminal ausführen müssen (oder auf der "Befehlszeile" — diese sind im Wesentlichen dasselbe). Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie Sie Befehle miteinander verknüpfen und wie Sie Ihre eigenen Befehlszeilen-Tools (CLI) hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie man auf verschiedenen Systemen auf die Befehlszeile zugreift.</li>
          <li>Kennen von grundlegenden Tastaturkürzeln (zum Beispiel Pfeil nach oben, um vorherige Befehle aufzurufen, Tabulator für die Autovervollständigung).</li>
          <li>Kennen von grundlegenden Befehlen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Options-/Flagbefehle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zum Ausführen von textbasierten Programmen. Wenn Sie irgendein Werkzeug für die Webentwicklung nutzen, besteht eine fast garantierte Chance, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Werkzeuge zu verwenden (solche Werkzeuge werden oft als **CLI-Tools** — Command Line Interface Tools — bezeichnet).

Eine große Anzahl von Tools kann durch Eingeben von Befehlen in der Befehlszeile verwendet werden; viele sind bereits auf Ihrem System vorinstalliert, und eine große Anzahl anderer kann von Paketregistern installiert werden.
Paketregister sind wie App-Stores, aber (hauptsächlich) für befehlszeilenbasierte Tools und Software.
Wir werden später in diesem Kapitel sehen, wie einige Tools installiert werden, und mehr über Paketregister im nächsten Kapitel erfahren.

Eine der größten Kritiken an der Befehlszeile ist, dass sie stark in der Benutzererfahrung fehlt.
Die Befehlszeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick wirken sie alles andere als einladend, aber man kann eine Menge damit machen, und wir versprechen, dass die Nutzung mit ein wenig Anleitung und Übung einfacher wird!
Deshalb bieten wir dieses Kapitel an — um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt etwa aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können etwas über die Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben — von Desktop-Maschinen bis zu Servern in der Cloud, zu Microcomputern wie dem Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und niedrigstufige Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder oder Explorer GUI-App aktualisieren, würde es lange dauern.

Wie auch immer, das Terminal wird so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die Ihnen Zugang zu einem Terminal verschaffen können.

Die nächsten Bilder zeigen die verfügbaren Befehlsaufforderungen in Windows — es gibt eine gute Auswahl an Optionen vom Programm "cmd" bis zu "powershell" — die vom Startmenü aus durch Eingabe des Programmnamen ausgeführt werden können.

![Ein normales Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten können Sie die macOS Terminal-Anwendung sehen.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler nutzen heute Unix-basierte Werkzeuge (z.B. das Terminal und die Tools, auf die Sie darüber zugreifen können). Viele existierende Tutorials und Werkzeuge auf dem Web unterstützen (und gehen leider davon aus) Unix-basierte Systeme, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt sehen wir, wie Sie den Zugriff auf das Terminal auf Ihrem gewählten System erhalten.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal bereitstellt und Zugriff auf die niedrigstufigen Tools gewährt. macOS Darwin hat größtenteils Parität zu Unix, was gut genug ist, um uns bei der Arbeit durch diesen Artikel keine Sorgen zu bereiten.

Das Terminal ist auf macOS unter `Programme/Dienstprogramme/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Nutzung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder komfortabel wie bei anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hatte traditionell sein eigenes terminal-ähnliches Programm namens `cmd` ("die Befehlsaufforderung") für eine lange Zeit, aber dies hat keine Parität mit Unix-Befehlen und ist gleichwertig mit dem alten Windows-DOS-Prompt.

Es gibt bessere Programme, die ein Terminalerlebnis auf Windows bieten, wie PowerShell ([finden Sie hier Installer](https://github.com/PowerShell/PowerShell)) und Gitbash (das als Teil des [git für Windows](https://gitforwindows.org/) Toolsets kommt).

Die beste Option für Windows heutzutage ist jedoch das Windows Subsystem for Linux (WSL) — eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt innerhalb von Windows 10 auszuführen, sodass Sie ein "echtes Terminal" direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Sie finden alle notwendigen Dokumentationen in der [Windows Subsystem for Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows Subsystem for Linux Dokumentation](wsl.png)

Was die Wahl auf Windows anbelangt, würden wir dringend empfehlen, zu versuchen, WSL zu installieren. Sie könnten bei der Standard-Befehlsaufforderung (`cmd`) bleiben, und viele Werkzeuge werden dort auch funktionieren, aber alles wird einfacher sein, wenn Sie eine bessere Parität zu Unix-Tools haben.

#### Nebenbei bemerkt: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden diese beiden Begriffe austauschbar verwendet. Technisch gesehen ist ein Terminal eine Software, die gestartet wird und eine Verbindung zu einer Shell herstellt. Eine Shell ist Ihre Sitzung und Umgebungsvariablen-Sitzung (wo Dinge wie das Prompt und Shortcuts möglicherweise angepasst werden können). Die Befehlszeile ist die eigentliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Fülle von Tools von der Befehlszeile aus gibt, gibt es auch eine Vielzahl von Erweiterungen in Tools wie [Visual Studio Code](https://code.visualstudio.com/), die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Allerdings finden Sie möglicherweise nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung — Sie müssen letztendlich zumindest etwas Erfahrung mit dem Terminal sammeln.

## Grundlegende integrierte Terminalbefehle

Genug geredet — lassen Sie uns einige Terminalbefehle ansehen! Hier sind nur einige der Dinge, die die Befehlszeile "out of the box" tun kann, zusammen mit den Namen der jeweiligen Werkzeuge:

- Navigieren Sie durch das Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur (Ordner): `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Nach Textfragmenten in größeren Textmengen suchen: `grep`
- Den Inhalt einer Datei seitenweise ansehen: `less`, `cat`
- Textströme manipulieren und transformieren (zum Beispiel alle Vorkommen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Befehlszeile gehen — dies ist nur eine kurze Einführung!

Lassen Sie uns weitermachen und die Verwendung einiger dieser Tools auf der Befehlszeile ansehen. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation in der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt, es handelt sich um eine Standardinstallation) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der Fachausdruck für das, was wir im vorherigen Artikel als "Ordner" bezeichnet haben. Wenn Sie die Dateistruktur in einer Benutzeroberfläche (UI) betrachten, ergibt der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie alte physische Speicherordner aussehen. Allerdings hören Sie den Begriff "Verzeichnis" ebenfalls häufig, besonders wenn es darum geht, Dateien über die Befehlszeile zu manipulieren. Es gibt Unterschiede, aber im Wesentlichen bedeuten die beiden Begriffe dasselbe.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu wechseln. Technisch gesehen ist cd kein Programm, sondern ein eingebauter Befehl. Das bedeutet, dass Ihr Betriebssystem es "out of the box" bereitstellt und Sie es auch nicht versehentlich löschen können — zum Glück! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber beachten Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen erscheinen.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Vorausgesetzt, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die untenstehenden Screenshots).

![Ergebnisse des cd Desktop-Befehls, der in verschiedenen Windows-Terminals ausgeführt wird - der Terminalstandort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie wieder in das vorherige Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Ein sehr nützlicher Terminal-Shortcut ist die Verwendung der <kbd>Tab</kbd>-Taste, um Namen zu vervollständigen, die vorhanden sind, anstatt den gesamten Namen eingeben zu müssen. Nachdem Sie die obigen zwei Befehle eingegeben haben, versuchen Sie zum Beispiel, `cd D` zu tippen und <kbd>Tab</kbd> zu drücken — der Verzeichnisname `Desktop` sollte für Sie vervollständigt werden, vorausgesetzt, er ist im aktuellen Verzeichnis vorhanden. Denken Sie daran, wenn Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird in der Regel einfacher, wenn Sie sich mit der Struktur Ihres Dateisystems vertraut machen, aber wenn Sie sich nicht sicher sind, können Sie in der Regel mit einer Kombination aus dem `ls`-Befehl (siehe unten) die Route finden und in Ihrem Explorer/Finder-Fenster herumklicken, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, könnten Sie diese drei Befehle eingeben, um von Ihrem _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt werden, genau wie beim Spezifizieren von Pfaden zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, was Sie bei URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "an der Wurzel der Website", während das Weglassen des Schrägstrichs bedeutet, "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Auf Windows verwenden Sie Rückwärtsschrägstriche anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` — das mag sehr seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der führenden Microsoft-Ingenieure an.

### Listing des Verzeichnisinhalts

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich aktuell befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Befehlsaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht jedoch, ob es sich um eine Datei oder ein Verzeichnis handelt, oder sonst etwas. Glücklicherweise kann eine kleine Änderung der Befehlsnutzung Ihnen viel mehr Informationen liefern.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — dies sind Modifikatoren, die Sie an das Ende eines Befehls anhängen, die ihn in einer leicht anderen Weise machen lassen. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehr Buchstaben.

Versuchen Sie zum Beispiel das Folgende und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` liefert die `-l` (_Bindestrich ell_) Option eine Liste mit einer Datei oder einem Verzeichnis pro Zeile und zeigt viel mehr Informationen an. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen sucht. Das sind diejenigen, in die wir `cd` eingeben können.

Unten ist ein Screenshot mit einem "Vanilla" macOS-Terminal oben und einem benutzerdefinierten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse des `ls -l` Befehls an:

![Ein einfaches macOS-Terminal und ein bunterer benutzerdefinierter macOS-Terminal, der eine Dateiliste zeigt - das Ergebnis des ls -l Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen jeder Befehl verfügbar hat, können Sie sich die [man-Seite](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem Sie den `man` Befehl eingeben, gefolgt von dem Namen des Befehls, den Sie nachschlagen möchten, beispielsweise `man ls`. Dies wird die man-Seite im Standard-Textdateibetrachter des Terminals öffnen (zum Beispiel, [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann durch die Seite mit den Pfeiltasten scrollen können, oder ein ähnlicher Mechanismus. Die man-Seite listet alle Optionen im Detail auf, was zu Beginn etwas einschüchternd sein kann, aber zumindest wissen Sie, dass es da ist, wenn Sie es benötigen. Wenn Sie mit dem Durchsehen der man-Seite fertig sind, müssen Sie es mit dem Beenden-Befehl Ihres Textbetrachters ("q" in `less`; möglicherweise müssen Sie im Internet danach suchen, wenn es nicht offensichtlich ist) verlassen.

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese in einer einzigen Zeichenkette nach dem Bindestrich-Zeichen zusammenfügen, zum Beispiel `ls -lah`, oder `ls -ltrh`. Versuchen Sie, sich die `ls` man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Da wir nun zwei fundamentale Befehle besprochen haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Anzahl anderer grundlegender Dienstprogramme, die Sie wahrscheinlich häufig verwenden, während Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle so detailliert erklären wie die vorherigen.

Spielen Sie in einem Testverzeichnis damit herum, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die Beispielbefehle unten zur Orientierung:

- `mkdir` — dieses erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel wird `mkdir my-awesome-website` ein neues Verzeichnis namens `my-awesome-website` erstellen.
- `rmdir` — entfernt das benannte Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel wird `rmdir my-awesome-website` das von uns erstellte Verzeichnis entfernen. Wenn Sie ein nicht leeres Verzeichnis entfernen möchten (und auch alles, was es enthält), können Sie stattdessen `rm -r` verwenden (siehe unten), aber dies ist gefährlich. Stellen Sie sicher, dass nichts drin ist, was Sie später möglicherweise benötigen, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei von dem ersten angegebenen Dateistandort an den zweiten angegebenen Dateistandort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Standorte werden als Dateipfade geschrieben). Dieser Befehl bewegt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird diese Datei in Wirklichkeit umbenannt.
- `cp` — ähnlich in der Anwendung wie `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Verzeichnispfad, im zweiten angegebenen Verzeichnispfad. Zum Beispiel `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (natürlich können Sie es auch anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel `rm mdn-example.txt` löscht eine einzelne Datei namens `mdl-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben Ihnen, Sternchen als "Wildcard"-Zeichen zu verwenden, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, Vorgänge gegen möglicherweise eine große Anzahl von Dateien auf einmal auszuführen, die alle mit dem angegebenen Muster übereinstimmen. Zum Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben dies bereits angedeutet, aber um klar zu sein — Sie müssen vorsichtig mit dem Terminal umgehen. Einfache Befehle bergen nicht allzu viel Gefahr, aber wenn Sie anfangen, komplexere Befehle zu erstellen, müssen Sie sorgfältig überlegen, was der Befehl bewirken wird, und versuchen Sie, sie zuerst zu testen, bevor Sie sie endgültig im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie haben 1000 Textdateien in einem Verzeichnis und möchten alle durchgehen und nur die löschen, die ein bestimmtes Teilzeichen im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren.
Eine gute Gewohnheit ist, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie Sie denken, dass er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und zu versuchen, den Befehl auf dieser Kopie zuerst auszuführen, um ihn zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht wohlfühlen, Terminalbefehle auf Ihrem eigenen Computer auszuprobieren, ist ein sicherer Ort, dies zu tun, bei [Glitch.com](https://glitch.com/). Zusammen mit einer tollen Plattform, um Webentwicklungs-Codes auszuprobieren, bieten die Projekte dort auch Zugang zu einem Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, sicher in dem Wissen, dass Sie Ihre eigene Maschine nicht kaputt machen.

![ein Doppelscreenshot, der die Glitch.com-Homepage und den Glitch-Terminalemulator zeigt](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über spezifische Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-gesteuerter Dokumentationsdienst, ähnlich wie MDN, jedoch spezifisch für Terminalbefehle.

Im nächsten Abschnitt gehen wir einen Schritt weiter (oder sogar mehrere Schritte) und sehen, wie wir Werkzeuge auf der Befehlszeile verknüpfen können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Verknüpfen von Befehlen mit Pipes

Das Terminal entfaltet sein volles Potenzial, wenn Sie anfangen, Befehle mit dem `|` (Pipe) Symbol zu verketten. Lassen Sie uns ein sehr kurzes Beispiel ansehen, was das bedeutet.

Wir haben bereits `ls` betrachtet, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine machen.

Es gibt ein weiteres Unix-Tool namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von dem, was ihm eingegeben wird. Dies kann eine Textdatei sein — das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von dem zählen, was in es **gepipet** wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die der `ls` Befehl ausgeben würde (was er normalerweise bei eigenständiger Ausführung ins Terminal drucken würde), und gibt stattdessen diese Anzahl ins Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in seiner eigenen Zeile druckt, erhalten wir effektiv eine Verzeichnis- und Dateizählung.

Also, was geschieht hier? Eine allgemeine Philosophie von (unix-)Befehlszeilenwerkzeugen ist, dass sie Text an das Terminal drucken (auch als "Drucken an die Standardausgabe" oder `STDOUT` bezeichnet). Viele Befehle können auch Inhalte von gestreamten Eingaben lesen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Ein- und Ausgaben miteinander _verbinden_, sodass wir zunehmend komplexere Operationen aufbauen können, die unseren Bedürfnissen entsprechen — die Ausgabe von einem Befehl kann zum Eingang des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe an `STDOUT` drucken, aber stattdessen wird sie in `wc` gepiped, das diese Ausgabe als Eingang nimmt, die Anzahl der Zeilen zählt, die es enthält, und diese Zählung stattdessen an `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas anfangen, was ein wenig komplizierter ist.

Wir werden versuchen, den Inhalt der MDN-"fetch"-Seite mit dem `curl` Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern) von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie werden keine Ausgabe erhalten, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` ausdrücklich anweisen, Umleitungen zu folgen, indem wir das `-L` Flag verwenden.

Schauen wir uns jetzt die Header an, die `developer.mozilla.org` zurückgibt, indem wir das `-I` Flag von `curl` verwenden, und geben alle Ortsumleitungen, die es an das Terminal sendet, durch das Piping der Ausgabe von `curl` in `grep` (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, das Folgende auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte in etwa so aussehen (`curl` wird zuerst einige Download-Zähler und ähnliches ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis noch ein wenig weiterverfolgen und den Inhalt der `location:`-Zeilen transformieren, indem wir den Basis-Origin an den Anfang jeder Zeile hinzufügen, so dass wir vollständige URLs angezeigt bekommen.
Dafür fügen wir `awk` hinzu (das eine Programmiersprache ähnlich zu JavaScript oder Ruby oder Python ist, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte in etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs gezeigt werden, die der Mozilla-Server verwendet, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Sich mit Ihrem System vertraut zu machen, erweist sich als nützlich in den kommenden Jahren — lernen Sie, wie diese Einzelserve-Tools funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um spezifische Probleme zu lösen.

## Hinzufügen von Verstärkungen

Nun, da wir uns einige der eingebauten Befehle angeschaut haben, mit denen Ihr System ausgestattet ist, lassen Sie uns ansehen, wie wir ein Drittanbieter-CLI-Tool installieren und nutzen können.

Das umfangreiche Ökosystem von installierbaren Tools für die Front-End-Webentwicklung besteht derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privat geführten, paketbereitstellenden Dienst, der eng mit Node.js zusammenarbeitet.
Dies wird langsam erweitert — erwarten Sie, dass mit der Zeit weitere Paketlieferanten hinzukommen.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilenwerkzeug (und ein ergänzendes npm-zentriertes Werkzeug namens npx), das ein Tor zur Installation zusätzlicher Befehlszeilenwerkzeuge bietet. Node.js und npm funktionieren gleich auf allen Systemen: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie die oben genannte URL besuchen und einen für Ihr Betriebssystem entsprechenden Node.js-Installer herunterladen und ausführen. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![der Node.js-Installer unter Windows, der die Option zeigt, npm einzuschließen](npm-install-option.png)

Wir werden erneut [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie es als VS Code-Erweiterung installiert wird, in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) Artikel. Hier zeigen wir Ihnen, wie es als Befehlszeilen-Werkzeug installiert wird.

> [!NOTE]
> Prettier ist ein meinungsstarker Codeformatierer, der nur "wenige Optionen" hat. Weniger Optionen bedeutet in der Regel einfacher. Angesichts der Tatsache, dass sich Tools manchmal in Bezug auf Komplexität übermäßig entwickeln können, kann "wenige Optionen" sehr ansprechend sein.

### Wo installieren wir unsere CLI-Tools?

Bevor wir uns in die Installation von Prettier stürzen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, ob wir Tools global — sodass wir sie überall verwenden können — oder lokal im aktuellen Projektverzeichnis installieren möchten.

Es gibt Vor- und Nachteile in beide Richtungen — und die folgenden Listen der Vor- und Nachteile für die globale Installation sind bei Weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Benötigt weniger Festplattenspeicher
- Immer die gleiche Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht kompatibel mit Ihrem Projekt-Codebase
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, zum Beispiel, wenn Sie den Code über ein Werkzeug wie git teilen.
- In Bezug auf den vorherigen Punkt macht es das Replizieren des Projektcodes schwieriger (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten konfiguriert und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_ Liste kürzer ist, ist die negative Auswirkung der globalen Installation möglicherweise viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Installieren von Prettier

Prettier ist ein meinungsstarkes Codeformatierungswerkzeug für Front-End-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Den kognitiven Aufwand sparen, den Stil manuell über alle Ihre Code-Dateien hinweg konsistent zu halten; Prettier kann das für Sie automatisch tun.
- Neulingen in der Webentwicklung helfen, ihren Code im best-practice-Stil zu formatieren.
- Auf jedem Betriebssystem installiert werden, ja sogar als direkter Bestandteil von Projekt-Tooling, der sicherstellt, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Code-Stil verwenden, den Sie verwenden.
- Konfiguriert werden, um beim Speichern, während des Tippens oder sogar vor der Veröffentlichung Ihres Codes ausgeführt zu werden (mit zusätzlichen Tools, die wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/install.html) vorgeschlagen.

Nachdem Sie node installiert haben, öffnen Sie das Terminal und führen den folgenden Befehl aus, um Prettier zu installieren (wir erklären im nächsten Artikel, was `--save-dev` macht):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen.
Das Ausführen des Befehls ohne Argumente bietet Ihnen, wie viele andere Befehle, Nutzungs- und Hilfeinformationen.
Versuchen Sie dies jetzt:

```bash
npx prettier
```

Ihre Ausgabe sollte in etwa so aussehen:

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Es lohnt immer zumindest einen kurzen Blick auf die Nutzungsinformationen zu werfen, auch wenn sie lang sind.
Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird `npx prettier` die neueste Version von Prettier in einem Durchgang _nur für diesen Befehl_ herunterladen und ausführen.
> Auch wenn das großartig klingt, können neue Versionen von Prettier die Ausgabe geringfügig ändern.
> Sie möchten es lokal installieren, damit Sie die verwendete Version von Prettier bis zur gewünschten Änderung für die Formatierung fixieren.

### Spielen mit Prettier

Lassen Sie uns kurz mit Prettier spielen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Codebasis laufen lassen, um nur zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe erhalten, die in etwa so aussieht:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also, es gibt einige Code-Stile, die behoben werden können. Kein Problem. Wenn Sie die Option `--write` zum `prettier` Befehl hinzufügen, behebt es diese und lässt uns darauf konzentrieren, tatsächlich nützlichen Code zu schreiben.

Versuchen Sie jetzt, diese Version des Befehls auszuführen:

```bash
npx prettier --write index.js
```

Sie erhalten eine Ausgabe wie diese

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

Aber noch wichtiger, wenn Sie zu Ihrer JavaScript-Datei zurückblicken, werden Sie feststellen, dass sie in etwas umformatiert wurde:

```js
const myObj = {
  a: 1,
  b: { c: 2 },
};
function printMe(obj) {
  console.log(obj.b.c);
}
printMe(myObj);
```

Je nach Ihrem Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich das, worin Tools glänzen; unser persönlicher Favorit ist die Art von Automatisierung, die "einfach geschieht", ohne dass sie konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann, und obwohl sie den Rahmen dieses Artikels sprengen würden, gibt es online einige hervorragende Ressourcen, die Ihnen helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository einchecken, unter Verwendung von [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie in Ihrem Code-Editor auf "Speichern" klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen unter Verwendung von Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — beim Verwenden von beispielsweise VS Code, springt Prettier an und bereinigt jegliche Formatierungen, die es zu tun hat, jedes Mal, wenn wir speichern. Sie können viel mehr Informationen über die Verwendung von Prettier auf verschiedene Weisen in den [Prettier Docs](https://prettier.io/docs/) finden.

## Andere Werkzeuge zum Ausprobieren

Wenn Sie ein paar weitere Tools ausprobieren möchten, hier ist eine kurze Liste, die Spaß macht zu testen:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schönerer" `cat` (`cat` wird verwendet, um den Inhalt von Dateien auszugeben).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessanzeiger, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Düsentriebwerk reagieren lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — früher in diesem Kapitel erwähnt, aber verfügbar als Befehlszeilen-Tool.

Beachten Sie, dass einige der obigen Vorschläge über npm installiert werden müssen, wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour durch das Terminal/die Befehlszeile und zum Environment Setup Modul. Als Nächstes werden wir Sie dazu bringen, an Ihrer ersten einfachen Website zu arbeiten, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
