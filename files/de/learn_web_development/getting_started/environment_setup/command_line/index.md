---
title: Kommandozeilen-Crashkurs
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos manchmal gezwungen sein, Befehle im Terminal (oder auf der "Befehlszeile" — das ist im Wesentlichen dasselbe) auszuführen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie eingeben müssen, wie Sie Befehle verkettet und wie Sie Ihre eigenen Kommandozeilen-Tools (CLI-Tools) hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computer-Betriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Kommandozeile ist und was Sie damit machen können.</li>
          <li>Verstehen, wie man auf verschiedenen Systemen auf die Kommandozeile zugreift.</li>
          <li>Kennen von grundlegenden Tastenkombinationen (zum Beispiel Pfeil nach oben für vorherige Befehle, Tab für Autovervollständigung).</li>
          <li>Kennen von grundlegenden Befehlen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie jegliche Werkzeuge für die Webentwicklung ausführen, ist die Wahrscheinlichkeit sehr hoch, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Werkzeuge zu nutzen (solche Werkzeuge werden oft als **CLI-Tools** — Kommandozeilenschnittstellen-Werkzeuge — bezeichnet).

Eine Vielzahl von Werkzeugen kann durch Eingabe von Befehlen in die Kommandozeile verwendet werden; viele sind bereits auf Ihrem System vorinstalliert, und eine enorme Anzahl anderer ist aus Paketregistern installierbar. Paketregister sind wie App-Stores, aber (meistens) für auf der Kommandozeile basierte Werkzeuge und Software. Wie einige Werkzeuge installiert werden können, wird später in diesem Kapitel gezeigt, und wir werden mehr über Paketregister im nächsten Kapitel lernen.

Eine der größten Kritiken an der Kommandozeile ist, dass ihr die Benutzererfahrung stark fehlt. Die Kommandozeile zum ersten Mal anzusehen kann eine einschüchternde Erfahrung sein: Ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick scheinen sie kaum einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu verwenden!
Deshalb bieten wir dieses Kapitel an — um Ihnen zu helfen, sich in dieser scheinbar unfreundlichen Umgebung zurechtzufinden.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig über die Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben — von Desktop-Computern über Server, die in der Cloud verborgen sind, bis hin zu Mikrocomputern wie dem Raspberry PI Zero und sogar Mobiltelefonen. Es bietet direkten Zugriff auf das zugrundeliegende Dateisystem und niedrigstufige Funktionen des Computers und ist daher unglaublich nützlich, um komplexe Aufgaben schnell zu erledigen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" auf "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrer Finder- oder Explorer-GUI-App aktualisieren würden, würde es sehr lange dauern.

Jedenfalls wird das Terminal nicht so schnell verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Geschmacksrichtungen von Programmen, die Ihnen den Zugriff auf ein Terminal ermöglichen.

Die nächsten Bilder zeigen die verfügbaren Befehlseingabeaufforderungen in Windows — es gibt eine gute Auswahl an Optionen von dem "cmd"-Programm bis zu "powershell" — die vom Startmenü aus gestartet werden können, indem der Programmname eingegeben wird.

![Ein einfaches Windows-CMD-Fenster und ein Windows-PowerShell-Fenster](win-terminals.png)

Und unten können Sie die macOS-Terminalanwendung sehen.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Werkzeuge (z.B. das Terminal und die Werkzeuge, auf die Sie darüber zugreifen können). Viele Tutorials und Tools, die heute im Internet existieren, unterstützen (und gehen leider von) Unix-basierte Systeme aus, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf das Terminal auf Ihrem gewählten System zugreifen können.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme ein Terminal, das standardmäßig verfügbar ist und unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzerschnittstelle liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die niedrigstufigen Werkzeuge bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, was sicherlich gut genug ist, um uns keine Sorgen zu bereiten, während wir diesen Artikel durcharbeiten.

Das Terminal ist auf macOS verfügbar unter `Applications/Utilities/Terminal`.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach wie bei anderen Betriebssystemen. Aber es wird besser.

Windows hatte traditionell ein eigenes terminalähnliches Programm namens `cmd` ("die Eingabeaufforderung") für lange Zeit, aber dies hat keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme bieten eine Terminalerfahrung auf Windows, wie PowerShell ([siehe hier zum Finden von Installationsprogrammen](https://github.com/PowerShell/PowerShell)) und Gitbash (das Teil des [git for Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der heutigen Zeit ist jedoch das Windows Subsystem for Linux (WSL) — eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt von Windows 10 aus auszuführen, die es Ihnen ermöglicht, ein "echtes Terminal" direkt unter Windows auszuführen, ohne eine virtuelle Maschine zu benötigen.

Dies kann kostenlos direkt aus dem Windows Store installiert werden. Sie finden die gesamte benötigte Dokumentation in der [Windows Subsystem for Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows Subsystem for Linux-Dokumentation](wsl.png)

In Bezug darauf, welche Option Sie unter Windows wählen sollten, würden wir dringend empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der Standardeingabeaufforderung (`cmd`) bleiben, und viele Werkzeuge werden in Ordnung funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die startet und sich mit einer Shell verbindet. Eine Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie der Prompt und die Tastenkombinationen angepasst werden können). Die Befehlszeile ist die tatsächliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Fülle von Werkzeugen gibt, die von der Befehlszeile aus verfügbar sind, gibt es, wenn Sie Werkzeuge wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Allerdings werden Sie keine Code-Editor-Erweiterung für alles finden, was Sie tun möchten — Sie werden schließlich einige Erfahrung mit dem Terminal sammeln müssen.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — lassen Sie uns einige Terminalbefehle ansehen! Out of the box gibt es hier nur eine Handvoll von Dingen, die die Kommandozeile tun kann, zusammen mit den Namen der entsprechenden Werkzeuge in jedem Fall:

- Navigieren durch das Dateisystem Ihres Computers sowie grundlegende Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegung durch Ihre Verzeichnisstruktur (Ordner): `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und ihre Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Herunterladen von Dateien von bestimmten URLs: `curl`
- Suchen nach Textfragmenten innerhalb größerer Textkörper: `grep`
- Anzeigen des Inhalts einer Datei seitenweise: `less`, `cat`
- Manipulieren und Transformieren von Textströmen (zum Beispiel das Ändern aller Instanzen von `<div>`s in einer HTML-Datei in `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe von guten Tutorials im Web, die viel tiefer in die Kommandozeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns fortfahren und uns ansehen, wie einige dieser Werkzeuge auf der Kommandozeile verwendet werden. Bevor Sie weiter gehen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt, ein Standard-Setup) werden ihr Terminalprogramm in Ihrem _Home_-Verzeichnis starten, und von dort aus wollen Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel "Ordner" genannt haben. Wenn man sich die Dateistruktur in einer Benutzeroberfläche (UI) ansieht, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie alte physische Speicherordner aussehen. Allerdings hört man den Begriff "Verzeichnis" auch häufig, insbesondere wenn es darum geht, Dateien über die Kommandozeile zu manipulieren. Es gibt Nuancen, aber im Wesentlichen bedeuten die beiden Begriffe dasselbe.

Der `cd`-Befehl ermöglicht Ihnen, das Verzeichnis zu ändern. Technisch gesehen ist `cd` kein Programm, sondern ein eingebauter Befehl. Das bedeutet, dass Ihr Betriebssystem es ohne weiteres bereitstellt, und auch, dass Sie es nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht zu sehr darum kümmern, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen vorhanden sind.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![Ergebnisse des cd Desktop-Befehls, der in verschiedenen Windows-Terminals ausgeführt wird - der Terminalstandort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalabkürzung ist die Verwendung der <kbd>tab</kbd>-Taste, um Namen zu vervollständigen, die Sie wissen, dass sie vorhanden sind, anstatt den ganzen Namen eintippen zu müssen. Zum Beispiel, nachdem Sie die obigen zwei Befehle eingegeben haben, versuchen Sie `cd D` zu tippen und <kbd>tab</kbd> zu drücken — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, während Sie weitergehen.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad dorthin kennen. Das wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden, aber wenn Sie sich nicht sicher sind, können Sie es normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Wenn Sie beispielsweise zu einem Verzeichnis namens `src`, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, gelangen möchten, könnten Sie diese drei Befehle ausführen, um dorthin zu gelangen, ausgehend von Ihrem _Home_-Verzeichnis:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau so, wie Sie es tun, wenn sie Pfade zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines führenden Schrägstrichs zu Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau das gleiche, was Sie in Ihrem Webbrowser bei URLs sehen würden. Ein führender Schrägstrich bedeutet "am Anfang der Website", während das Weglassen des Schrägstrichs "die URL ist relativ zu meiner aktuellen Seite" bedeutet.

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschläge anstelle von Schrägstrichen, zum Beispiel `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie sich dafür interessieren, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, der eine Erklärung eines der Hauptingenieure von Microsoft enthält.

### Auflisten des Verzeichnisinhalts

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich derzeit befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach — Sie bekommen nur den Namen jedes Elements, das vorhanden ist, nicht, ob es sich um eine Datei oder ein Verzeichnis handelt, oder irgendetwas anderes. Zum Glück kann eine kleine Änderung der Befehlssyntax Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — dies sind Modifikatoren, die Sie an das Ende eines Befehls anhängen, wodurch er sich in einer etwas anderen Weise verhält. Diese bestehen normalerweise aus einem Abstand nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel versuchen Sie dies und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt Ihnen die `-l` (_Bindestrich ell_) Option eine Auflistung mit einer Datei oder einem Verzeichnis in jeder Zeile, und viel mehr Informationen werden angezeigt. Verzeichnisse können identifiziert werden, indem Sie nach einem Buchstaben "d" ganz links auf den Zeilen suchen. Das sind die, in die wir `cd`-en können.

Unten ist ein Screenshot mit einem "normalen" macOS Terminal oben und einem benutzerdefinierten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse des `ls -l`-Befehls:

![Ein einfaches macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, das eine Dateiliste zeigt - das Ergebnis des `ls -l`-Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl zur Verfügung hat, können Sie sich die "man page" ansehen. Dies geschieht, indem Sie den `man`-Befehl eingeben, gefolgt vom Namen des Befehls, den Sie sehen möchten, zum Beispiel `man ls`. Dies öffnet die Man-Seite im Standard-Textdateibetrachter des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann über die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus scrollen können. Die Man-Seite listet alle Optionen im Detail auf, was zu Beginn ein wenig einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Sobald Sie mit dem Durchsehen der Man-Seite fertig sind, müssen Sie sie mit dem gewünschten Quit-Befehl Ihres Textbetrachters verlassen ("q" in `less`; Sie müssen möglicherweise im Web danach suchen, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie normalerweise in einer einzelnen Zeichenkette nach dem Bindestrich-Zeichen zusammenfügen, zum Beispiel in `ls -lah`, oder `ls -ltrh`. Versuchen Sie, die Man-Seite von `ls` zu betrachten, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Nun, da wir zwei grundlegende Befehle besprochen haben, stöbern Sie ein wenig in Ihrem Verzeichnis herum und prüfen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, Kopieren, Bewegen, Entfernen

Es gibt eine Reihe von anderen grundlegenden Dienstprogrammbefehlen, die Sie wahrscheinlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle so ausführlich erklären wie die letzten beiden.

Spielen Sie in einem Testverzeichnis, das Sie irgendwo erstellt haben, herum, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die Beispielbefehle unten zur Orientierung:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel wird `mkdir my-awesome-website` ein neues Verzeichnis mit dem Namen `my-awesome-website` erstellen.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel wird `rmdir my-awesome-website` das Verzeichnis löschen, das wir oben erstellt haben. Wenn Sie ein Verzeichnis löschen möchten, das nicht leer ist (und auch alles, was es enthält), dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber dies ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, das Sie später noch benötigen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel erstellt `touch mdn-example.md` eine neue leere Datei mit dem Namen `mdn-example.md`.
- `mv` — verschiebt eine Datei von der ersten angegebenen Dateiposition zur zweiten angegebenen Dateiposition, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Positionen werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei mit dem Namen `mdn-example.md` im aktuellen Verzeichnis zu einer Datei mit dem Namen `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird mit diesem Befehl eigentlich die Datei umbenannt.
- `cp` — ähnlich wie `mv` erstellt `cp` eine Kopie der Datei an der ersten angegebenen Position an der zweiten angegebenen Position. Zum Beispiel wird `cp mdn-example.txt mdn-example.txt.bak` eine Kopie von `mdn-example.txt` mit dem Namen `mdn-example.txt.bak` erstellen (Sie können sie natürlich anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel wird `rm mdn-example.txt` eine einzelne Datei mit dem Namen `mdn-example.txt` löschen. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben, rückgängig gemacht werden kann.

> [!NOTE]
> Viele Terminalbefehle erlauben Ihnen die Verwendung von Sternchen als "Wildcard"-Zeichen, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, einen Vorgang gegen eine potenziell große Anzahl von Dateien gleichzeitig auszuführen, die alle dem angegebenen Muster entsprechen. Zum Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben dies bereits angedeutet, aber um klar zu sein — Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht allzu viel Gefahr, aber wenn Sie anfangen, komplexere Befehle zusammenzusetzen, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, ihn zuerst zu testen, bevor Sie ihn schließlich im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie hätten 1000 Textdateien in einem Verzeichnis und Sie möchten alle durchgehen und nur die löschen, die ein bestimmtes Substring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie am Ende etwas Wichtiges löschen und dadurch einen Großteil Ihrer Arbeit verlieren.
Eine gute Angewohnheit ist es, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er Ihrer Meinung nach aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu machen und zu versuchen, den Befehl zuerst auf dieser zu testen.

Ein weiterer guter Tipp — wenn Sie nicht gerne Terminalbefehle auf Ihrem eigenen Rechner ausprobieren, ist ein netter sicherer Ort, um sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben einem großartigen Ort für das Ausprobieren von Webentwicklungscode bieten die Projekte auch Zugriff auf ein Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, in der beruhigenden Gewissheit, dass Sie Ihren eigenen Computer nicht kaputt machen.

![ein Doppelscreenshot, der die Glitch.com-Startseite und den Glitch-Terminalemulator zeigt](glitch.png)

Eine großartige Ressource für einen schnellen Überblick über bestimmte Terminalbefehle ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-getriebener Dokumentationsdienst, ähnlich wie die MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt lassen Sie uns einen Gang höher schalten (oder in der Tat mehrere Gänge) und sehen, wie wir auf der Kommandozeile Werkzeuge miteinander verbinden können, um wirklich zu sehen, wie das Terminal vorteilhaft über die normale Desktop-Benutzeroberfläche sein kann.

## Verbinden von Befehlen mit Pipes

Das Terminal zeigt wirklich seine Stärken, wenn Sie beginnen, Befehle mit dem Symbol `|` (Pipe) zu verketten. Lassen Sie uns ein sehr kurzes Beispiel dafür ansehen, was dies bedeutet.

Wir haben bereits `ls` untersucht, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht allein tun.

Es gibt ein weiteres Unix-Tool namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was eingegeben wird. Dies kann eine Textdatei sein — das untenstehende Beispiel zählt die Anzahl der Zeilen in `myfile.txt`:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von allem zählen, was in es hineingepiped wird. Zum Beispiel zählt der untenstehende Befehl die Anzahl der Zeilen, die vom `ls`-Befehl ausgegeben werden (was normalerweise in das Terminal gedruckt würde, wenn er allein ausgeführt würde) und gibt diese Zählung stattdessen an das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile druckt, gibt uns das effektiv eine Verzeichnis- und Dateianzahl.

Was passiert hier also? Eine allgemeine Philosophie von (Unix-)Kommandozeilen-Tools ist, dass sie Text auf dem Terminal ausdrucken (auch als ":Drucken auf den Standardausgang" oder `STDOUT` bezeichnet). Eine beträchtliche Anzahl von Befehlen kann auch Inhalt von gestreamtem Input lesen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben miteinander verbinden und es uns ermöglichen, zunehmend komplexere Operationen zu unseren Bedürfnissen zusammenzustellen — die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe zu `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe nimmt, die Anzahl der Zeilen zählt, die sie enthält, und diese Zählung stattdessen zu `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas komplizierteres durchgehen.

Wir wollen zuerst versuchen, den Inhalt der MDN "fetch"-Seite mit dem `curl`-Befehl (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.com/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch` abzurufen.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie werden keine Ausgabe erhalten, da die Seite weitergeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` explizit sagen, dass es Weiterleitungen folgen soll, indem wir das `-L`-Flag verwenden.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.com` zurückgibt, mithilfe des `-I`-Flags von `curl`, und alle Standortweiterleitungen, die er sendet, ans Terminal ausgeben, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie das Folgende auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir auf der endgültigen Seite landen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Download-Zähler und Ähnliches ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl es ein wenig konstruiert ist, könnten wir dieses Ergebnis ein wenig weiterführen und die `location:`-Zeileninhalte transformieren, indem wir den Basis-Ursprung an den Anfang jeder URL hinzufügen, sodass vollständige URLs ausgegeben werden.
Dafür werden wir `awk` hinzufügen (das eine Programmiersprache ähnlich wie Javascript oder Ruby oder Python ist, nur viel älter!).

Versuchen Sie dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihr endgültiges Ergebnis sollte etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server umgeleitet, als wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anforderten.
Das Wissen über Ihr System wird sich in den kommenden Jahren als nützlich erweisen — lernen Sie, wie diese Single Serving Tools funktionieren und wie sie Teil Ihres Toolkits werden können, um spezielle Probleme zu lösen.

## Hinzufügen von Leistungssteigerungen

Jetzt, da wir uns einige der eingebauten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und nutzen können.

Das riesige Ökosystem von installierbaren Tools für die Frontend-Webentwicklung existiert derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies wird langsam erweitert — Sie können erwarten, dass in Zukunft mehr Paketprovider auftauchen.

Die [Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilentool (und ein zusätzliches, npm-zentriertes Tool namens npx), das als Gateway zur Installation zusätzlicher Kommandozeilenwerkzeuge dient. Node.js und npm funktionieren überall gleich: auf macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie die obige URL aufrufen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm Teil der Installation ist.

![Der Node.js-Installer unter Windows zeigt die Option an, npm einzuschließen](npm-install-option.png)

Wir verwenden hier wiederum [Prettier](https://prettier.io/) als Beispiel. Wir haben gezeigt, wie man es als VS-Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions)-Artikel installiert. Hier zeigen wir Ihnen, wie Sie es als Kommandozeilenwerkzeug installieren.

> [!NOTE]
> Prettier ist ein Meinungs-Codeformatierer, der nur "wenige Optionen" hat. Weniger Optionen bedeutet tendenziell gebräuchlich einfacherer. Angesichts dessen, dass Werkzeuge manchmal in Bezug auf ihre Komplexität ausufern können, können "wenige Optionen" sehr ansprechend sein.

### Wo sollen wir unsere CLI-Tools installieren?

Bevor wir zum Installieren von Prettier kommen, müssen wir eine Frage beantworten — "Wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren — so dass wir sie von überall zugänglich machen — oder lokal im aktuellen Projektverzeichnis.

Es gibt bei beiden Vor- und Nachteile — und die folgenden Listen von Vor- und Nachteilen für das globale Installieren sind alles andere als vollständig.

**Vorzüge des globalen Installierens:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Weniger Speicherplatzbedarf
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile des globalen Installierens:**

- Möglicherweise nicht mit dem Code Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf jene Tools, zum Beispiel wenn Sie den Code über ein Tool wie git gemeinsam nutzen.
- In Verbindung mit dem vorherigen Punkt macht es Projektcode schwerer zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Cons_-Liste kürzer ist, ist die negative Auswirkung des globalen Installierens potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber installieren Sie es gerne global, sobald Sie die relativen Risiken verstanden haben.

### Installation von Prettier

Prettier ist ein Meinungs-Codeformatierungstool für Frontend-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Die kognitive Belastung, den Stil konsistent manuell über alle Ihre Code-Dateien hinweg zu bekommen, zu speichern; Prettier kann dies für Sie automatisch erledigen.
- Neulingen in der Webentwicklung helfen, ihren Code im Best-Practice-Stil zu formatieren.
- Auf jedem Betriebssystem und sogar als direkter Bestandteil der Projektwerkzeuge installiert werden, wodurch sichergestellt wird, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- Konfiguriert werden, um beim Speichern, beim Tippen oder sogar vor der Veröffentlichung Ihres Codes ausgeführt zu werden (mit zusätzlichem Werkzeug, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

Sobald Sie node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` macht):

```bash
npm install --save-dev prettier
```

Sie können die Datei nun lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/)-Tool ausführen.
Wenn Sie den Befehl ohne Argumente ausführen, erhalten Sie, wie bei vielen anderen Befehlen, Angaben zu Nutzung und Hilfe.
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

Es lohnt sich immer, zumindest die Benutzungsinformationen zu überfliegen, auch wenn sie lang sind.
Es hilft Ihnen, besser zu verstehen, wie das Tool gedacht ist, verwendet zu werden.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, dann wird `npx prettier` die neueste Version von Prettier herunterladen und ausführen — alles in einem Vorgang _nur für diesen Befehl_.
> Obwohl das großartig klingt, können neue Versionen von Prettier möglicherweise die Ausgabe geringfügig ändern.
> Sie sollten es lokal installieren, damit Sie die Version von Prettier, die Sie zum Formatieren verwenden, festlegen, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns ein kurzes mit Prettier experimentieren, damit Sie sehen können, wie es funktioniert.

Erstellen Sie dazu zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Code-Basis einsetzen, um einfach zu überprüfen, ob unser Code geändert werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe entlang der Linie erhalten:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also, es gibt einige Codestile, die behoben werden können. Kein Problem. Das Hinzufügen der Option `--write` zum `prettier`-Befehl behebt diese, sodass wir uns tatsächlich auf das Schreiben nützlichen Codes konzentrieren können.

Versuchen Sie nun, diese Version des Befehls auszuführen:

```bash
npx prettier --write index.js
```

Sie erhalten eine Ausgabe wie diese

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

Aber noch wichtiger ist, dass, wenn Sie zurück zu Ihrer JavaScript-Datei schauen, Sie feststellen werden, dass sie wie folgt formatiert worden ist:

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

Abhängig von Ihrem Arbeitsablauf (oder dem Arbeitsablauf, den Sie auswählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Tools übertreffen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie eine Automatisierung erreicht werden kann, und auch wenn sie über den Rahmen dieses Artikels hinausgehen, gibt es hervorragende Ressourcen im Internet, die helfen können (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository einpflegen, verwenden Sie [Husky](https://github.com/typicode/husky).
- Wann immer Sie auf "Speichern" im Code-Editor klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — während wir beispielsweise VS Code verwenden, schaltet sich Prettier ein und bereinigt jedes Formatierungsproblem, sobald wir auf Speichern drücken. Weitere Informationen über die Verwendung von Prettier auf verschiedene Weisen finden Sie in den [Prettier-Dokumentationen](https://prettier.io/docs/).

## Andere Werkzeuge zum Ausprobieren

Wenn Sie mit ein paar weiteren Tools spielen möchten, hier ist eine kurze Liste, die Spaß macht, um sie auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien zu drucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` in der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie einen Düsenantrieb klingen lässt und Sie das entsprechende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber als Kommandozeilen-Tool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, so wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit sind wir am Ende unserer Einführungstour durch das Terminal/Kommandozeile und das Modul zur Einrichtung der Umgebung. Als nächstes werden Sie an der Erstellung Ihrer ersten einfachen Website arbeiten, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
