---
title: Kommandozeilen-Schnellkurs
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 52a81d8138473b6ac4bec77d0be4261cb0b76d41
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Verlauf Ihres Entwicklungsprozesses werden Sie zweifellos einige Befehle im Terminal (oder auf der "Kommandozeile" — das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie Sie Befehle miteinander verknüpfen und wie Sie Ihre eigenen Kommandozeilen-Tools (CLI) hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis für Ihr Computer-Betriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Kommandozeile ist und was Sie damit machen können.</li>
          <li>Verstehen, wie Sie auf verschiedenen Systemen auf die Kommandozeile zugreifen können.</li>
          <li>Kennen grundlegende Tastenkombinationen (zum Beispiel Pfeil-nach-oben, um auf vorherige Befehle zuzugreifen, Tab für Autovervollständigung).</li>
          <li>Kennen grundlegende Befehle (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung von textbasierten Programmen. Wenn Sie irgendwelche Werkzeuge für die Webentwicklung verwenden, ist es fast garantiert, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre gewählten Werkzeuge zu verwenden (solche Werkzeuge werden oft als **CLI-Tools** — Kommandozeilen-Interface-Tools bezeichnet).

Eine große Anzahl von Werkzeugen kann durch Eingabe von Befehlen in die Kommandozeile verwendet werden; viele sind auf Ihrem System vorinstalliert, und eine große Anzahl anderer ist aus Paketregistern installierbar. Paketregister sind wie App-Stores, aber (meistens) für kommandozeilenbasierte Werkzeuge und Software. Später in diesem Kapitel werden wir sehen, wie man einige Werkzeuge installiert, und im nächsten Kapitel werden wir mehr über Paketregister lernen.

Eine der größten Kritiken an der Kommandozeile ist, dass es ihr an Benutzererfahrung mangelt. Zum ersten Mal die Kommandozeile zu betrachten, kann eine einschüchternde Erfahrung sein: ein leerer Bildschirm, ein blinkender Cursor und nur sehr wenig offensichtlich verfügbare Hilfe für das, was zu tun ist.

Auf den ersten Blick sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir dieses Kapitel an — um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher stammt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig der Geschichte im Wikipedia-Artikel für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) nachlesen.

Seitdem ist das Terminal ein konstanter Bestandteil aller Betriebssysteme geblieben — von Desktop-Computern über Server, die in der Cloud versteckt sind, bis hin zu Mikrocomputern wie dem Raspberry PI Zero und sogar Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und niedrige Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, um die Titel von Hunderten von Dateien sofort zu aktualisieren, sagen wir von "ch01-xxxx.png" in "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder oder Explorer GUI-App aktualisieren würden, würde es lange dauern.

Jedenfalls wird das Terminal so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Geschmacksrichtungen von Programmen, die Ihnen ein Terminal bieten können.

Die nächsten Bilder zeigen die verfügbaren Kommandoaufforderungen in Windows — es gibt eine gute Auswahl an Optionen, vom "cmd"-Programm bis zu "powershell" — die über das Startmenü durch Eingabe des Programnamens aufgerufen werden können.

![Ein einfaches Windows-Cmd- und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Werkzeuge (z.B. das Terminal und die Werkzeuge, auf die Sie dadurch zugreifen können). Viele Tutorials und Werkzeuge, die heute im Web existieren, unterstützen (und setzen leider voraus) Unix-basierte Systeme, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir untersuchen, wie Sie Zugang zum Terminal auf Ihrem gewählten System bekommen.

#### Linux/Unix

Wie oben angedeutet, verfügen Linux/Unix-Systeme standardmäßig über ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS verfügt über ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugang zu den niedrigstufigen Werkzeugen bietet. macOS Darwin hat größtenteils Parität mit Unix, sicherlich gut genug, um keine Sorgen zu verursachen, während wir durch diesen Artikel arbeiten.

Das Terminal ist auf macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war es traditionell nicht so einfach oder benutzerfreundlich, das Terminal (oder die Kommandozeile) auf Windows zu verwenden wie auf anderen Betriebssystemen. Aber die Dinge werden besser.

Windows hat traditionell ein eigenes terminal-ähnliches Programm namens `cmd` (die Kommandoaufforderung) seit langem, aber es gibt keine Parität mit Unix-Befehlen und ist äquivalent zu den alten Windows-DOS-Aufforderungen.

Es gibt jedoch bessere Programme, die ein Terminal-Erlebnis auf Windows bieten, wie PowerShell ([sehen Sie hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Git Bash (das als Teil des [Git für Windows](https://gitforwindows.org/) Toolsets kommt).

Die beste Option für Windows in der heutigen Zeit ist jedoch das Windows Subsystem for Linux (WSL) — eine Kompatibilitätsebene für den direkten Betrieb von Linux-Betriebssystemen von innen heraus auf Windows 10, die es Ihnen ermöglicht, ein "richtiges Terminal" direkt auf Windows zu betreiben, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows-Store kostenlos installiert werden. Sie können alle benötigten Dokumentationen in den [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/) finden.

![Ein Screenshot der Windows-Subsystem für Linux-Dokumentation](wsl.png)

In Bezug darauf, welche Option auf Windows gewählt wird, empfehlen wir dringend, das WSL zu installieren. Sie könnten bei der Standard-Kommandoaufforderung (`cmd`) bleiben, und viele Werkzeuge werden gut funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Werkzeugen haben.

#### Nebennotiz: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Allgemein finden Sie, dass diese beiden Begriffe austauschbar verwendet werden. Technisch ist ein Terminal eine Software, die einen Shell startet und sich damit verbindet. Eine Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie das Eingabeaufforderung und Abkürzungen angepasst werden können). Die Kommandozeile ist die wörtliche Zeile, in der Sie Eingaben tätigen und der Cursor blinkt.

### Müssen Sie das Terminal benutzen?

Obwohl es eine Fülle an Werkzeugen gibt, die von der Kommandozeile aus verfügbar sind, gibt es in Tools wie [Visual Studio Code](https://code.visualstudio.com/) auch eine Masse an Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt benutzen zu müssen. Allerdings werden Sie keine Code-Editor-Erweiterung für alles finden, was Sie tun möchten — Sie müssen irgendwann Erfahrung mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — schauen wir uns einige Terminalbefehle an! Aus der Box heraus kann die Kommandozeile die folgenden Dinge tun, zusammen mit den Namen der relevanten Werkzeuge in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers samt grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:
  - Bewegen Sie sich in Ihrer Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Laden Sie Dateien von bestimmten URLs herunter: `curl`
- Suchen Sie nach Textfragmenten in größeren Textkörpern: `grep`
- Zeigen Sie den Inhalt einer Datei seitenweise an: `less`, `cat`
- Manipulieren und transformieren Sie Datenströme (zum Beispiel ändern aller Instanzen von `<div>`s in einer HTML-Datei zu `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Kommandozeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns vorankommen und einige dieser Werkzeuge auf der Kommandozeile verwenden. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile betreten, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (unter der Annahme einer Standardeinrichtung) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort möchten Sie sich wahrscheinlich an einen anderen Ort bewegen.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel als "Ordner" bezeichnet haben. Beim Blick auf die Dateistruktur in einer Benutzeroberfläche (UI) macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Aufbewahrungsordner aussehen. Sie werden jedoch auch häufig den Begriff "Verzeichnis" hören, insbesondere wenn es darum geht, Dateien über die Kommandozeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Das `cd`-Kommando lässt Sie das Verzeichnis wechseln. Technisch gesehen ist cd kein Programm, sondern ein eingebautes. Das bedeutet, dass Ihr Betriebssystem es out of the box bereitstellt und auch, dass Sie es nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht allzu sehr darum kümmern, ob ein Kommando eingebaut ist oder nicht, aber bedenken Sie, dass eingebautes auf allen unix-basierten Systemen vorhanden ist.

1. Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die untenstehenden Screenshots).

   ![Ergebnisse des cd Desktop-Befehls, der in verschiedenen Windows-Terminals ausgeführt wird - der Terminalstandort wird auf den Desktop verschoben](win-terminals-cd.png)

2. Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um zum vorherigen Verzeichnis zurückzukehren, können Sie zwei Punkte verwenden. Geben Sie dies jetzt ein:

   ```bash
   cd ..
   ```

> [!NOTE]
> Eine sehr nützliche Terminalabkürzung ist die Verwendung der <kbd>tab</kbd>-Taste, um Namen zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt das Ganze eintippen zu müssen. Versuchen Sie zum Beispiel, die oben genannten beiden Befehle einzugeben, und tippen Sie dann `cd D` und drücken Sie <kbd>tab</kbd> — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, er ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, während Sie vorwärts gehen.

Wenn sich das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt befindet, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, da Sie sich mit der Struktur Ihres Dateisystems vertrauter machen, aber wenn Sie sich beim Pfad nicht sicher sind, können Sie es normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis befindet, relativ zu dem Ort, an dem Sie gerade sind.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen wollten, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem _Desktop_ befindet, könnten Sie diese drei Befehle verwenden, um dorthin zu gelangen, aus Ihrem _Home_-Verzeichnis:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Assets im CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines führenden Schrägstrichs zu Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Wenn der führende Schrägstrich weggelassen wird, wie wir es oben getan haben, wird der Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis gemacht. Dies ist genau dasselbe, was Sie mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Ursprung der Website", während das Weglassen des Schrägstrichs bedeutet, dass die URL relativ zu meiner aktuellen Seite ist.

> [!NOTE]
> In Windows verwenden Sie Rückwärtsschrägstriche statt Vorwärtsschrägstriche, z.B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip an](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der Microsoft Principal Engineers.

### Auflisten von Verzeichnisinhalten

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für Liste), der den Inhalt des Verzeichnisses, in dem Sie sich aktuell befinden, auflistet. Beachten Sie, dass dies nicht funktioniert, wenn Sie die standardmäßige Windows-Kommandoaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie jetzt, dies in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt, oder etwas anderes. Zum Glück kann eine kleine Änderung in der Befehlssyntax Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, wodurch er sich ein wenig anders verhält. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_Bindestrich ell_)-Option eine Liste mit einer Datei oder einem Verzeichnis auf jeder Zeile und mit viel mehr Informationen aus. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen schaut. Das sind diejenigen, in die wir `cd` können.

Unten ist ein Screenshot mit einem "einfachen" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse von `ls -l`:

![Ein einfaches macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, die eine Dateiauflistung zeigen - das Ergebnis von ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen jeder Befehl zur Verfügung hat, können Sie seine [man page](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies wird durchgeführt, indem Sie den Befehl `man` eingeben, gefolgt vom Namen des Befehls, den Sie ansehen möchten, beispielsweise `man ls`. Dies öffnet die man-Seite im standardmäßigen Textdatei-Viewer des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, durch die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus zu blättern. Die man-Seite listet alle Optionen ausführlich auf, was anfangs etwas einschüchternd sein kann, aber zumindest wissen Sie, dass es da ist, wenn Sie es brauchen. Sobald Sie fertig sind, die man-Seite zu betrachten, müssen Sie sie mit dem Beenden-Befehl Ihres Textbetrachters beenden ("q" in `less`; möglicherweise müssen Sie im Internet suchen, um sie zu finden, wenn sie nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise in einer einzigen Zeichenkette nach dem Bindestrich-Zeichen anfügen, zum Beispiel `ls -lah` oder `ls -ltrh`. Versuchen Sie, die `ls`-man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen tun!

Jetzt, da wir zwei grundlegende Befehle besprochen haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich häufig nutzen werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir nicht alle so detailliert erklären wie die vorherigen beiden.

Spielen Sie ein bisschen mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die folgenden Beispielbefehle als Leitfaden:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel `rmdir my-awesome-website` entfernt das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles, was es enthält, entfernen), dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, was Sie später möglicherweise benötigen, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei vom ersten angegebenen Dateispeicherort zum zweiten angegebenen Dateispeicherort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber praktisch betrachtet, wird die Datei mit diesem Befehl umbenannt.
- `cp` — ähnlich in der Verwendung wie `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Speicherort in dem zweiten angegebenen Speicherort. Zum Beispiel `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich auch anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass diese Löschung dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben Ihnen die Verwendung von Sternchen als "Wildcard"-Zeichen, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, eine Operation auf potenziell einer großen Anzahl von Dateien gleichzeitig durchzuführen, die alle dem angegebenen Muster entsprechen. Als Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben das zuvor angedeutet, aber um es klar zu sagen — Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht allzu viel Risiko, aber wenn Sie anfangen, komplexere Befehle zusammenzustellen, müssen Sie sorgfältig darüber nachdenken, was der Befehl bewirken wird, und versuchen, ihn zuerst zu testen, bevor Sie ihn schließlich im beabsichtigten Verzeichnis ausführen.

Angenommen, Sie hätten 1000 Textdateien in einem Verzeichnis und wollten sie alle durchgehen und nur die löschen, die einen bestimmten Teilstring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie am Ende etwas Wichtiges löschen und damit eine Menge Arbeit verlieren. Eine gute Gewohnheit ist es, den Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er aussehen soll, dann eine Sicherungskopie Ihres Verzeichnisses anzufertigen und zu versuchen, den Befehl zuerst darauf auszuführen, um ihn zu testen.

Wenn Sie sich nicht wohl fühlen, Terminalbefehle auf Ihrer eigenen Maschine auszuprobieren, gibt es gehostete Online-Terminals, die sichere Orte bieten, um das Eingeben von Befehlen zu üben, ohne das Risiko, Ihre eigene Maschine zu beschädigen:

- Unser Lernpartner, [Scrimba](https://scrimba.com/home?via=mdn), verfügt über ein Terminal zum Eingeben von Befehlen in ihrer Lernumgebung. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Kurs, der auch eine unterhaltsame interaktive Einführung in die Navigation durch den Dateibaum und die Manipulation von Dateien und Verzeichnissen über das Terminal bietet.
- Der [Kommandozeilen-Spielplatz](https://sandbox.bio/playgrounds/terminal) auf sandbox.bio ist ein großartiger Ort, um Terminalbefehle auszuprobieren, damit Sie sich mit Kommandozeilenschnittstellen und gängigen Shells wie Bash vertraut machen können.

Eine großartige Ressource, um einen schnellen Überblick über bestimmte Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein community-getriebener Dokumentationsdienst, ähnlich wie MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt steigern wir es einen (oder sogar mehrere) Gang höher und sehen, wie wir auf der Kommandozeile Werkzeuge miteinander verbinden können, um wirklich zu sehen, wie das Terminal einen Vorteil gegenüber der regulären Desktop-Benutzeroberfläche bietet.

## Befehle miteinander verbinden mit Pipes

Das Terminal entfaltet sein volles Potenzial, wenn Sie beginnen, Befehle miteinander zu verketten, indem Sie das `|` (Pipe)-Symbol verwenden. Schauen wir uns ein sehr schnelles Beispiel dafür an, was dies bedeutet.

Wir haben `ls` bereits behandelt, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollen? `ls` kann das nicht alleine tun.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was ihm eingegeben wird. Dies kann eine Textdatei sein — das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von allem zählen, was in es **gepiped** wird. Zum Beispiel zählt der untenstehende Befehl die Anzahl der Zeilen, die der `ls`-Befehl ausgibt (was er normalerweise ausdrucken würde, wenn er alleine ausgeführt würde) und gibt diese Anzahl stattdessen an das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis auf seiner eigenen Zeile ausgibt, gibt uns das effektiv eine Verzeichnis- und Datei-Anzahl.

Was passiert hier also? Eine allgemeine Philosophie von (unix-)Kommandozeilenwerkzeugen ist, dass sie Text an das Terminal ausgeben (auch als "an die Standardausgabe drucken" oder `STDOUT` bezeichnet). Viele Befehle können auch Inhalte aus gestreamten Eingaben lesen (bekannt als "Standard-Eingabe" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben miteinander _verbinden_, sodass wir zunehmend komplexere Operationen aufbauen können, die unseren Bedürfnissen entsprechen — die Ausgabe von einem Befehl kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe an `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe aufnimmt, die Anzahl der Zeilen zählt, die sie enthält, und diese Anzahl stattdessen an `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas Komplizierteres durchgehen.

1. Wir werden zunächst versuchen, die Inhalte der MDN-"fetch"-Seite mit dem Befehl `curl` abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Sie werden keine Ausgabe erhalten, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit sagen, dass es Umleitungen folgen soll, indem wir das `-L`-Flag verwenden.

2. Schauen wir uns auch die Header an, die `developer.mozilla.org` mit dem `-I`-Flag von `curl` zurückgibt, und drucken alle Umleitungszeilen, die es an das Terminal sendet, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten). Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Download-Zähler und Ähnliches ausgeben):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Obwohl konstruiert, könnten wir dieses Ergebnis noch ein wenig weiterführen und den Inhalt der `location:`-Zeilen transformieren, indem wir den Basis-Ursprung am Anfang jeder hinzufügen, so dass wir vollständige URLs ausgedruckt haben. Dafür werden wir `awk` in die Mischung einfügen (was eine Programmiersprache ähnlich wie JavaScript oder Ruby oder Python ist, nur viel älter!). Versuchen Sie, dies auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihre finale Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server Weiterleitungen durchführt, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch`-URL anfordern. Wenn Sie Ihr System kennenlernen, wird es sich als nützlich erweisen, in den kommenden Jahren — lernen Sie, wie diese Einzelbedienungswerkzeuge funktionieren und wie sie Teil Ihres Werkzeugsatzes werden können, um Nischenprobleme zu lösen.

## Leistungssteigerungen hinzufügen

Nachdem wir nun einige der eingebauten Befehle, mit denen Ihr System ausgestattet ist, betrachtet haben, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und nutzen können.

Das riesige Ökosystem installierbarer Werkzeuge für die Frontend-Webentwicklung existiert derzeit hauptsächlich in [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet. Dies erweitert sich langsam — Sie können erwarten, dass mit der Zeit mehr Paket-Anbieter auftauchen.

Das [Installieren von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilen-Tool (und ein ergänzendes npm-zentrisches Tool namens npx), das einen Zugangspunkt zur Installation zusätzlicher Kommandozeilen-Tools bietet. Node.js und npm funktionieren gleich auf allen Systemen: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie die obige URL besuchen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Wenn Sie gefragt werden, stellen Sie sicher, dass Sie npm als Teil der Installation einschließen.

![Der Node.js-Installer unter Windows, der die Option zeigt, npm einzuschließen](npm-install-option.png)

Wir werden hier nochmals [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie man es als VS Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) Artikel installiert. Hier zeigen wir Ihnen, wie man es als Kommandozeilen-Tool installiert.

> [!NOTE]
> Prettier ist ein meinungsbasierter Code-Formatierer, der nur wenige "Optionen" hat. Weniger Optionen bedeuten tendenziell einfacher. Angesichts dessen, wie Werkzeuge manchmal aus dem Ruder laufen können, was die Komplexität betrifft, kann "wenige Optionen" sehr attraktiv sein.

### Wo sollen wir unsere CLI-Tools installieren?

Bevor wir uns darauf stürzen, Prettier zu installieren, gibt es eine Frage zu beantworten — "wo sollen wir es installieren?"

Mit `npm` haben wir die Wahl, Werkzeuge global zu installieren — so dass wir von überall aus auf sie zugreifen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile in jeder Hinsicht — und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht vollständig.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Nutzt weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht kompatibel mit dem Codebase Ihres Projekts
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Werkzeuge, zum Beispiel wenn Sie den Codebase über ein Tool wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt wird das Projektcode schwerer zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet werden und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, sind die negativen Auswirkungen der globalen Installation potenziell größer als die Vorteile. Hier installieren wir lokal, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Installieren von Prettier

Prettier ist ein meinungsbasierter Code-Formatierer für Frontend-Entwickler, der sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Den kognitiven Aufwand sparen, den Stil manuell über alle Ihre Code-Dateien hinweg konsistent zu halten; Prettier kann dies für Sie automatisch tun.
- Neulingen in der Webentwicklung helfen, ihren Code nach Best-Practice-Art zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar als direkter Bestandteil des Projektwerkzeugs, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- So konfiguriert werden, dass es beim Speichern, beim Tippen oder sogar vor dem Veröffentlichen Ihres Codes ausgeführt wird (mit zusätzlichem Werkzeug, das wir später in diesem Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie es im [Prettier-Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen wird.

1. Nachdem Sie node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` bedeutet):

   ```bash
   npm install --save-dev prettier
   ```

2. Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Werkzeug ausführen. Wenn der Befehl ohne Argumente ausgeführt wird, wird wie bei vielen anderen Befehlen eine Gebrauchsanweisung und Hilfeinformationen angezeigt. Versuchen Sie dies jetzt:

   ```bash
   npx prettier
   ```

Ihre Ausgabe sollte ungefähr so aussehen:

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Es lohnt sich immer, zumindest die Gebrauchsanweisung zu überfliegen, auch wenn sie lang ist. Dies hilft Ihnen, besser zu verstehen, wie das Tool beabsichtigt ist, verwendet zu werden.

> [!NOTE]
> Wenn Sie nicht zuerst Prettier lokal installiert haben, wird `npx prettier` beim Ausführen die neueste Version von Prettier instant herunterladen und ausführen — nur für diesen Befehl. Während das großartig klingt, können neue Versionen von Prettier die Ausgabe leicht ändern. Sie wollen es lokal installieren, damit Sie die Version von Prettier, die Sie für das Formatieren verwenden, bis Sie bereit sind, sie zu ändern, festlegen.

### Spielen mit Prettier

Lassen Sie uns kurz mit Prettier spielen, damit Sie sehen können, wie es funktioniert.

1. Erstellen Sie zunächst irgendwo in Ihrem Dateisystem ein neues Verzeichnis, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js`, in Ihrem Testverzeichnis:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier gegen ein Codebase ausführen, um nur zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

   Sie sollten eine Ausgabe in dieser Art erhalten:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Also, da gibt es ein paar Kodierweisen, die repariert werden können. Kein Problem. Das Hinzufügen der `--write`-Option zum `prettier`-Befehl wird diese aufräumen und uns fokussieren auf das Schreiben von nützlichem Code. Versuchen Sie nun, diese Version des Befehls auszuführen:

   ```bash
   npx prettier --write index.js
   ```

   Sie erhalten eine Ausgabe wie diese:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Aber noch wichtiger, wenn Sie zurück zu Ihrer JavaScript-Datei schauen, werden Sie feststellen, dass sie zu so etwas wie dem folgenden umformatiert wurde:

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

Je nach Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Werkzeuge glänzen; unser persönlicher Favorit ist die Art von Automatisierung, die "einfach passiert" ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es im Internet hervorragende Ressourcen, die helfen können (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository über [Husky](https://github.com/typicode/husky) einfügen.
- Immer wenn Sie in Ihrem Code-Editor auf "Speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Werkzeugen wie [GitHub Actions](https://github.com/features/actions).

Unser persönlicher Favorit ist der zweite — während der Verwendung von zum Beispiel VS Code tritt Prettier ein und bereinigt jegliche Formatierung, die es bei jedem Speichervorgang durchführen muss. Sie können viel mehr Informationen über die Verwendung von Prettier auf verschiedene Arten in den [Prettier-Dokumenten](https://prettier.io/docs/) finden.

## Andere Werkzeuge zum Ausprobieren

Wenn Sie mit ein paar weiteren Werkzeugen spielen möchten, hier ist eine kurze Liste, die Spaß macht, zu ausprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien zu drucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozess-Viewer, nützlich, wenn etwas Ihren CPU-Lüfter dazu bringt, sich wie ein Düsenantrieb zu verhalten und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — schon früher in diesem Kapitel erwähnt, aber als Kommandozeilen-Tool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise über npm installiert werden müssen, so wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit sind wir am Ende unserer Einführungstour durch das Terminal/Kommandozeile und des Environment-Setup-Moduls angekommen. Als nächstes werden wir Sie dazu bringen, Ihre erste einfache Website zu erstellen, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung ist.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
