---
title: Einführung in die Kommandozeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal ausführen müssen (oder auf der "Kommandozeile" — das bedeutet im Wesentlichen das Gleiche). Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie man Befehle miteinander verknüpft und wie Sie Ihre eigenen Kommandozeilen-Werkzeuge (CLI) hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Kommandozeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie man die Kommandozeile auf verschiedenen Systemen aufruft.</li>
          <li>Kennen der grundlegenden Tastenkombinationen (z. B. Pfeil nach oben, um vorherige Befehle zu erreichen, Tab für Autovervollständigung).</li>
          <li>Kennen der grundlegenden Befehle (z. B. <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/-flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung von textbasierten Programmen. Wenn Sie Werkzeuge für die Webentwicklung verwenden, werden Sie mit hoher Wahrscheinlichkeit die Kommandozeile öffnen müssen, um einige Befehle einzugeben, um Ihre ausgewählten Werkzeuge zu verwenden. Diese Werkzeuge werden oft als **CLI-Werkzeuge** (Kommandozeilen-Werkzeuge) bezeichnet.

Eine Vielzahl von Werkzeugen kann verwendet werden, indem Sie Befehle in die Kommandozeile eingeben; viele sind bereits vorinstalliert, und viele weitere sind über Paketregistries installierbar. Paketregistries sind wie App-Stores, aber (meistens) für auf der Kommandozeile basierende Werkzeuge und Software. Wir werden später in diesem Kapitel sehen, wie man einige Werkzeuge installiert, und mehr über Paketregistries im nächsten Kapitel erfahren.

Eine der größten Kritiken an der Kommandozeile ist, dass sie stark in der Benutzererfahrung fehlt. Die Kommandozeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick wirken sie nicht einladend, aber es gibt viel, was Sie damit tun können, und wir versprechen Ihnen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir Ihnen dieses Kapitel an — um Ihnen den Start in dieser scheinbar feindlichen Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute benutzen (dafür sollten wir dankbar sein). Sie können ein bisschen von der Geschichte in Wikipedias Eintrag über [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme — von Desktop-Computern bis hin zu in der Cloud versteckten Servern, über Mikrocomputer wie den Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das grundlegende Dateisystem des Computers und auf tiefgehende Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell zu erledigen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, zum Beispiel von „ch01-xxxx.png“ zu „ch02-xxxx.png“. Wenn Sie die Dateinamen mit Ihrem Finder- oder Explorer-UI-App aktualisieren würden, würde es lange dauern.

Jedenfalls wird das Terminal nicht so schnell verschwinden.

### Wie sieht das Terminal aus?

Unten können Sie einige der verschiedenen Programme sehen, die Sie zu einem Terminal bringen können.

Die nächsten Bilder zeigen die Eingabeaufforderungen, die in Windows verfügbar sind — es gibt eine gute Auswahl, von der "cmd"-Programm bis zu "powershell" — das Sie vom Startmenü aus starten können, indem Sie den Programmnamen eingeben.

![Ein Standard-Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminal-Anwendung von macOS.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Werkzeuge (z. B. das Terminal und die Werkzeuge, die Sie darüber erreichen können). Viele existierende Tutorials und Tools im Web unterstützen (und bedauerlicherweise setzen voraus) Unix-basierte Systeme, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie man Zugang zu dem Terminal auf Ihrem gewählten System erhält.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die tiefgehenden Werkzeuge bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, was sicherlich gut genug ist, um uns keine Sorgen zu machen, während wir diesen Artikel durcharbeiten.

Das Terminal ist unter macOS verfügbar unter `Programme/Dienstprogramme/Terminal`.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Kommandozeile) unter Windows traditionell nicht so einfach oder leicht wie unter anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hatte traditionell ein eigenes terminalähnliches Programm namens `cmd` (die Eingabeaufforderung) für eine lange Zeit, aber dieses hat keine Parität mit Unix-Befehlen und ist gleichwertig mit dem alten Windows-DOS-Prompt.

Bessere Programme gibt es, um eine Terminal-Erfahrung auf Windows bereitzustellen, wie PowerShell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Gitbash (das als Teil des [git für Windows](https://gitforwindows.org/) Werkzeugsets kommt).

Die beste Option für Windows ist jedoch heutzutage das Windows Subsystem für Linux (WSL) — eine Kompatibilitätsschicht, die es ermöglicht, Linux-Betriebssysteme direkt von Windows 10 aus auszuführen, sodass Sie ein „echtes Terminal“ direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt kostenlos aus dem Windows Store installiert werden. Alle notwendigen Dokumentationen finden Sie in der [Windows Subsystem für Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Windows Subsystem für Linux Dokumentation](wsl.png)

In Bezug auf die Auswahl auf Windows empfehlen wir dringend, zu versuchen, das WSL zu installieren. Sie könnten mit der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Werkzeuge werden gut funktionieren, aber alles wird einfacher sein, wenn Sie eine bessere Parität mit Unix-Werkzeugen haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Im Allgemeinen werden diese beiden Begriffe austauschbar verwendet. Technisch ist ein Terminal eine Software, die startet und sich mit einer Shell verbindet. Eine Shell ist Ihre Sitzung und Ihre Sitzungsumgebung (wo Dinge wie der Prompt und Abkürzungen angepasst werden können). Die Kommandozeile ist die wörtliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Auswahl an Werkzeugen gibt, die von der Kommandozeile aus erreichbar sind, gibt es für Werkzeuge wie [Visual Studio Code](https://code.visualstudio.com/) auch viele Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Allerdings werden Sie keine Code-Editor-Erweiterung für alles finden, was Sie tun möchten — Sie werden schließlich einige Erfahrungen mit dem Terminal sammeln müssen.

## Grundlegende integrierte Terminalbefehle

Genug geredet — lassen Sie uns einige Terminalbefehle betrachten! Aus der Box kann die Kommandozeile folgende Dinge tun, zusammen mit den Namen der jeweils relevanten Werkzeuge:

- Navigieren Sie durch das Dateisystem Ihres Computers und führen Sie grundlegende Aufgaben aus, wie Erstellen, Kopieren, Umbenennen und Löschen:
  - Bewegen Sie sich durch Ihre Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Laden Sie Dateien von bestimmten URLs herunter: `curl`
- Suchen Sie nach Textfragmenten in größeren Textkörpern: `grep`
- Anzeigen des Inhalts einer Datei Seite für Seite: `less`, `cat`
- Manipulieren und Transformieren von Textströmen (zum Beispiel alle Vorkommen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Anzahl guter Tutorials im Web, die viel tiefer in die Kommandozeile einsteigen — dies ist nur eine kurze Einführung!

Lassen Sie uns weitermachen und sehen, wie man einige dieser Werkzeuge auf der Kommandozeile verwendet. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um „etwas zu tun“. Alle Betriebssysteme (bei einer Standardinstallation angenommen) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> „Verzeichnis“ ist der technische Begriff für das, was wir im vorherigen Artikel „Ordner“ genannt haben. Wenn man sich die Dateistruktur in einer Benutzeroberfläche (UI) anschaut, macht der Begriff „Ordner“ mehr Sinn, da die verwendeten Symbole wie alte physische Speicherordner aussehen. Allerdings hört man den Begriff „Verzeichnis“ auch häufig, besonders wenn man darüber spricht, Dateien über die Kommandozeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Grunde das Gleiche.

Der `cd`-Befehl lässt Sie das Verzeichnis ändern. Technisch ist cd kein Programm, sondern ein integriert. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und dass Sie es auch nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl integriert ist oder nicht, aber bedenken Sie, dass Built-ins auf allen unix-basierten Systemen erscheinen.

1. Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

   ![Ergebnisse des cd-Desktop-Befehls, der in einer Vielzahl von Windows-Terminals ausgeführt wird - der Ort des Terminals wechselt auf den Desktop](win-terminals-cd.png)

2. Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um zum vorherigen Verzeichnis zurückzukehren, können Sie zwei Punkte verwenden. Geben Sie dies jetzt ein:

   ```bash
   cd ..
   ```

> [!NOTE]
> Eine sehr nützliche Terminal-Abkürzung ist die Verwendung der <kbd>Tab</kbd>-Taste, um Namen zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt das Ganze eintippen zu müssen. Zum Beispiel, nach dem Eingeben der obigen beiden Befehle, versuchen Sie `cd D` einzugeben und <kbd>Tab</kbd> zu drücken — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Beachten Sie dies, wenn Sie vorankommen.

Wenn das Verzeichnis, zu dem Sie möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird in der Regel einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden, aber wenn Sie sich nicht sicher über den Pfad sind, können Sie ihn normalerweise mit einer Kombination des `ls`-Befehls (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo ein Verzeichnis relativ zu Ihrem aktuellen Standort ist.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, könnten Sie diese drei Befehle eingeben, um von Ihrem _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, mit den verschiedenen Elementen des Pfades getrennt durch Schrägstriche, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code spezifizieren:

```bash
cd Desktop/project/src
```

Beachten Sie, dass die Angabe eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Wenn wir den führenden Schrägstrich weglassen, wie wir es oben gemacht haben, wird der Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau dasselbe, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet „an der Wurzel der Website“, während das Weglassen des Schrägstrichs bedeutet „die URL ist relativ zu meiner aktuellen Seite“.

> [!NOTE]
> Auf Windows verwenden Sie Rückwärtsschrägstriche anstelle von Schrägstrichen, z. B. `cd Desktop\project\src` — dies mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der Principal-Ingenieure von Microsoft an.

### Auflisten des Verzeichnisinhalts

Ein weiterer integrierter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die standardmäßige Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Verzeichnis, aber die Informationen sind wirklich grundlegend — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt, oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung der Befehlsnutzung Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, wodurch er sich in etwas anderer Weise verhält. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Z. B., geben Sie dies ein und sehen, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` gibt die Option `-l` (_bindestrich ell_) eine Auflistung mit einer Datei oder einem Verzeichnis pro Zeile und einer Menge mehr Informationen an. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben „d“ auf der ganz linken Seite der Zeilen sucht. Das sind die, in die wir mit `cd` hineingehen können.

Unten ist ein Screenshot mit einem "vanilla" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebhaft zu halten — beide zeigen die Ergebnisse des Ausführens von `ls -l`:

![Ein standardmäßiges macOS-Terminal und ein farbenfroheres benutzerdefiniertes macOS-Terminal, das eine Dateiauflistung zeigt - das Ergebnis der Ausführung des ls -l-Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen für jeden Befehl verfügbar sind, können Sie seine [man page](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem Sie den `man`-Befehl, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, eingeben, z. B. `man ls`. Dies öffnet die Man-Seite im Standardtextdateibetrachter des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, durch die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus zu scrollen. Die Man-Seite listet alle Optionen im Detail auf, was zu Beginn etwas einschüchternd sein mag, aber zumindest wissen Sie, dass sie da ist, falls Sie sie benötigen. Wenn Sie mit dem Lesen der Man-Seite fertig sind, müssen Sie sie mit dem Quit-Befehl Ihres Textbetrachters verlassen („q“ in `less`; möglicherweise müssen Sie im Web suchen, um sie zu finden, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese in der Regel alle in einer einzigen Zeichenkette nach dem Bindestrich-Charakter setzen, zum Beispiel `ls -lah`, oder `ls -ltrh`. Versuchen Sie, sich die `ls`-Man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Da wir nun zwei fundamentale Befehle besprochen haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, kopieren, verschieben und löschen

Es gibt eine Reihe anderer grundlegender Dienstprogrammebefehle, die Sie wahrscheinlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir nicht auf alle im Detail eingehen wie bei den vorherigen beiden.

Versuchen Sie, mit ihnen in einem Testverzeichnis zu spielen, das Sie irgendwo erstellt haben, damit Sie nichts Wichtiges versehentlich löschen, und verwenden Sie die folgenden Beispielbefehle als Anleitung:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` entfernt das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles, was es enthält), dann können Sie `rm -r` stattdessen verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass in dem Verzeichnis nichts enthalten ist, was Sie später noch brauchen könnten, da es für immer verschwunden sein wird.
- `touch` — erstellt eine neue leere Datei, im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei von der ersten angegebenen Dateiposition zur zweiten angegebenen Dateiposition, z. B. `mv mdn-example.md mdn-example.txt` (die Positionen werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch wird die Datei verschoben, aber aus praktischer Sicht benennt dieser Befehl die Datei tatsächlich um.
- `cp` — ähnlich in der Verwendung wie `mv`, erstellt `cp` eine Kopie der Datei an der ersten angegebenen Position an der zweiten angegebenen Position. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich etwas anderes nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise in Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele terminalbefehle erlauben es Ihnen, Asterisque als „Platzhalter“-Zeichen zu verwenden, was „jede Zeichenfolge“ bedeutet. Dies ermöglicht es Ihnen, eine Operation gegen möglicherweise eine große Anzahl von Dateien auf einmal durchzuführen, die alle dem angegebenen Muster entsprechen. Ein Beispiel wäre, `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben darauf bereits angespielt, aber um klar zu sein — Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle sind nicht sehr gefährlich, aber wenn Sie beginnen, komplexere Befehle zusammenzustellen, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie hätten 1000 Textdateien in einem Verzeichnis, und Sie möchten alle durchgehen und nur die löschen, die eine bestimmte Teilzeichenkette im Dateinamen enthalten. Wenn Sie nicht aufpassen, könnten Sie etwas Wichtiges löschen, wodurch Sie eine Menge Ihrer Arbeit verlieren.
Eine gute Angewohnheit ist es, Ihren Terminalbefehl in einem Texteditor auszuarbeiten, herauszufinden, wie Sie glauben, dass er aussehen soll, und dann eine Sicherungskopie Ihres Verzeichnisses zu machen und den Befehl darauf auszuführen, um ihn zu testen.

Wenn Sie sich nicht wohl fühlen, Terminalbefehle auf Ihrem eigenen Rechner auszuprobieren, gibt es gehostete Online-Terminals, die sichere Orte bieten, um Befehle einzugeben, ohne das Risiko, Ihren eigenen Rechner zu beschädigen:

- Unser Lernpartner, [Scrimba](https://scrimba.com/home?via=mdn), bietet ein Terminal zum Eingeben von Befehlen in ihrer Lernumgebung an. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Kurs, der auch eine lustige interaktive Einführung in das Navigieren durch den Dateibaum und das Manipulieren von Dateien und Verzeichnissen über das Terminal bietet.
- Der [Command-line playground](https://sandbox.bio/playgrounds/terminal) auf sandbox.bio ist ein großartiger Ort, um Terminalbefehle auszuprobieren, sodass Sie sich mit Kommandozeilen-Schnittstellen und gängigen Shells wie Bash vertraut machen können.

Eine großartige Ressource, um einen schnellen Überblick über spezifische Terminalbefehle zu bekommen, ist [tldr.sh](https://tldr.sh/). Dies ist ein von der Gemeinschaft getriebener Dokumentationsdienst, ähnlich wie MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt legen wir eine Stufe zu (oder sogar mehrere Stufen) und sehen, wie wir Werkzeuge auf der Kommandozeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Verbinden von Befehlen mit Pipes

Das Terminal zeigt wirklich seine Stärken, wenn man beginnt, Befehle mit dem `|` (Pipe) Symbol zu verknüpfen. Lassen Sie uns ein sehr schnelles Beispiel dafür betrachten, was das bedeutet.

Wir haben bereits `ls` betrachtet, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine tun.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was in es eingegeben wird. Das kann eine Textdatei sein — das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von dem zählen, was darin **gepipet** wird. Zum Beispiel zählt der untenstehende Befehl die Anzahl der von `ls` ausgegebenen Zeilen (was er normalerweise in das Terminal drucken würde, wenn er allein ausgeführt würde) und gibt diese Zählung statt dessen ins Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile druckt, haben wir damit effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix) Kommandozeilenwerkzeugen ist, dass sie Text ins Terminal drucken (auch genannt „zu Standardausgabe drucken“ oder `STDOUT`). Eine ganze Reihe von Befehlen kann auch Inhalt von gestreamter Eingabe lesen (bekannt als „Standardeingabe“ oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben _verbinden_, sodass wir immer komplexere Operationen aufbauen können, die unseren Bedürfnissen entsprechen — die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall druckt `ls` normalerweise seine Ausgabe zu `STDOUT`, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe nimmt, die Anzahl der darin enthaltenen Zeilen zählt und diese Anzahl stattdessen zu `STDOUT` druckt.

## Ein etwas komplizierteres Beispiel

Lassen Sie uns etwas Komplizierteres durchgehen.

1. Wir werden zuerst versuchen, den Inhalt der MDN-Seite „fetch“ mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Sie erhalten keine Ausgabe, weil die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit anweisen, Umleitungen mit dem `-L`-Flag zu folgen.

2. Lassen Sie uns auch die Headers betrachten, die `developer.mozilla.org` mit dem Flag `-I` von `curl` zurückgibt, und alle Standort-Redirects, die er ins Terminal sendet, ausgeben, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort „location“ enthalten). Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Ihre Ausgabe sollte in etwa so aussehen (`curl` wird zuerst einige Downloadzähler und ähnliches ausgeben):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Obwohl konstruiert, könnten wir dieses Ergebnis noch ein wenig weiterführen und den Inhalt der `location:`-Zeilen umwandeln, indem wir den Basisursprung an den Anfang jedes von ihnen setzen, sodass wir vollständige URLs ausgedruckt bekommen. Dafür werden wir `awk` hinzuziehen (das eine Programmiersprache ähnlich wie JavaScript oder Ruby oder Python ist, nur viel älter!). Versuchen Sie, dies auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihre endgültige Ausgabe sollte in etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Durch die Kombination dieser Befehle haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server beim Anfordern der URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` umgeleitet wird. Es wird nützlich sein, wenn Sie Ihr System in den nächsten Jahren kennenlernen — lernen Sie, wie diese Einzweck-Werkzeuge funktionieren und wie sie Teil Ihrer Werkzeugkiste werden können, um Nischenprobleme zu lösen.

## Power-Ups hinzufügen

Nachdem wir uns nun einige der integrierten Befehle angesehen haben, über die Ihr System verfügt, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und verwenden können.

Das riesige Ökosystem an installierbaren Werkzeugen für die Front-End-Webentwicklung existiert derzeit größtenteils im [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet. Dies erweitert sich langsam — Sie können erwarten, dass im Laufe der Zeit weitere Paket-Anbieter auftauchen.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilenwerkzeug (und ein ergänzendes npm-zentrisches Werkzeug namens npx), das als Gateway zur Installation zusätzlicher Kommandozeilenwerkzeuge dient. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie zur oben genannten URL gehen, und einen geeigneten Node.js-Installer für Ihr Betriebssystem herunterladen und ausführen. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm Teil der Installation ist.

![Der Node.js-Installer auf Windows, der die Option zum Einschließen von npm zeigt](npm-install-option.png)

Wir werden wieder [Prettier](https://prettier.io/) als Beispiel hier verwenden. Wir haben gezeigt, wie man es als VS Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) Artikel installiert. Hier zeigen wir Ihnen, wie man es als Kommandozeilenwerkzeug installiert.

> [!NOTE]
> Prettier ist ein meinungsstarker Code-Formatter, der nur „wenige Optionen“ hat. Weniger Optionen bedeutet in der Regel einfacher. Angesichts dessen, wie out-of-hand Tooling manchmal in Bezug auf Komplexität werden kann, kann „wenige Optionen“ sehr ansprechend sein.

### Wo sollten wir unsere CLI-Werkzeuge installieren?

Bevor wir in die Installation von Prettier eintauchen, gibt es eine Frage zu beantworten — „wo sollten wir es installieren?“

Mit `npm` haben wir die Wahl, Werkzeuge global zu installieren — sodass wir von überall darauf zugreifen können — oder lokal in das aktuelle Projektverzeichnis.

Es gibt Vor- und Nachteile in beide Richtungen — und die folgende Liste von Vor- und Nachteilen für die globale Installation ist bei weitem nicht vollständig.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer dieselbe Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Code Ihrer Projekts kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugang zu diesen Werkzeugen, zum Beispiel; wenn Sie den Code über ein Werkzeug wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt, macht es den Projekt-Code schwieriger zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_ kürzer erscheinen, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Installation von Prettier

Prettier ist ein meinungsstarker Code-Formatter für Front-End-Entwickler, der sich auf JavaScript-basierte Sprachen fokussiert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Belastung reduzieren, den Stil manuell über all Ihre Code-Dateien konsistent zu halten; Prettier kann dies automatisch für Sie tun.
- Neulinge in der Webentwicklung in Best Practices ihren Code formatieren helfen.
- Auf jedem Betriebssystem installiert werden und sogar als direkter Teil der Projekttools funktionieren, was sicherstellt, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen oder sogar vor dem Veröffentlichen Ihres Codes ausgeführt wird (mit zusätzlichen Werkzeugen, die wir später in diesem Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/install.html) vorgeschlagen.

1. Nachdem Sie node installiert haben, öffnen Sie das Terminal und führen den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` macht):

   ```bash
   npm install --save-dev prettier
   ```

2. Sie können die Datei jetzt lokal mit dem Tool [npx](https://docs.npmjs.com/cli/commands/npx/) ausführen. Wenn Sie den Befehl ohne Argumente ausführen, wird wie bei vielen anderen Befehlen eine Verwendungs- und Hilfsinformation angeboten. Versuchen Sie dies jetzt:

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

Es lohnt sich immer, zumindest die Verwendungsinformationen zu überfliegen, auch wenn sie lang sind.
Sie helfen Ihnen besser zu verstehen, wie das Werkzeug verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird das Ausführen von `npx prettier` die neueste Version von Prettier herunterladen und in einem Schritt _nur für diesen Befehl_ ausführen.
> Auch wenn das vielleicht großartig klingt, kann es vorkommen, dass neue Versionen von Prettier die Ausgabe leicht modifizieren.
> Sie möchten es lokal installieren, damit Sie die Version von Prettier, die Sie für die Formatierung verwenden, fixieren, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns ein kurzes Spiel mit Prettier machen, damit Sie sehen können, wie es funktioniert.

1. Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie jetzt den folgenden Code in einer neuen Datei namens `index.js`, innerhalb Ihres Testverzeichnisses:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier gegen eine Codebasis ausführen, um nur zu überprüfen, ob unser Code angepasst werden soll. Wechseln Sie in Ihr Verzeichnis, und versuchen, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

   Sie sollten eine Ausgabe in dieser Art bekommen:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Es gibt also einige Code-Stile, die gefixt werden können. Kein Problem. Das Hinzufügen der Option `--write` zum `prettier`-Befehl wird das beheben und uns auf das eigentliche Schreiben von nützlichem Code konzentrieren lassen. Versuchen Sie nun, diese Version des Befehls auszuführen:

   ```bash
   npx prettier --write index.js
   ```

   Sie erhalten eine Ausgabe in dieser Art:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Wichtiger ist aber, dass Ihre JavaScript-Datei neu formatiert wurde zu etwas wie:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich, wo Werkzeuge excellieren; unsere persönliche Vorliebe ist die Art von Automatisierung, die „einfach passiert“, ohne dass man etwas konfigurieren muss.

Mit Prettier gibt es eine Anzahl von Möglichkeiten, Automatisierung zu erreichen, und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es online einige exzellente Ressourcen für Hilfe (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git Repository einfügen, mithilfe von [Husky](https://github.com/typicode/husky).
- Immer wenn Sie „Speichern“ in Ihrem Code-Editor drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen, mithilfe von Werkzeugen wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Vorliebe ist die zweite Möglichkeit — während Sie z. B. VS Code verwenden, tritt Prettier in Kraft und bereinigt jedes Formatierungsproblem, das es bei jedem Speicher auftritt. Sie können eine Menge mehr Informationen über die Verwendung von Prettier auf verschiedene Arten in den [Prettier-Dokumentationen](https://prettier.io/docs/) finden.

## Andere Werkzeuge zum Ausprobieren

Wenn Sie mit ein paar weiteren Werkzeugen spielen möchten, hier ist eine kurze Liste, die Spaß macht, auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein „nettere“ `cat` (`cat` wird verwendet, um den Inhalt von Dateien auszudrucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeilen, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server reagiert).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas dazu führt, dass Ihr CPU-Lüfter wie ein Düsenflugzeug klingt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — wurde früher in diesem Kapitel erwähnt, aber verfügbar als Kommandozeilenwerkzeug.

Beachten Sie, dass einige der oben genannten Vorschläge mit npm installiert werden müssen, wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour über das Terminal/die Kommandozeile und zum Ende des Moduls zur Einrichtung der Umgebung. Als Nächstes werden wir Sie dazu bringen, Ihre erste einfache Website zu erstellen, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
