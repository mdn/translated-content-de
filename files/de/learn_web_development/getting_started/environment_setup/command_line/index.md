---
title: Einführung in die Befehlszeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal ausführen müssen (oder auf der "Befehlszeile" — das ist im Wesentlichen dasselbe). Dieser Artikel bietet eine Einführung in das Terminal, die grundlegenden Befehle, die Sie eingeben müssen, wie Sie Befehle verketten und wie Sie Ihre eigenen Command Line Interface (CLI) Tools hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zum Erstellen einer Website verwenden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie die Befehlszeile auf verschiedenen Systemen erreichen.</li>
          <li>Grundlegende Tastenkombinationen kennen (zum Beispiel Pfeil nach oben für vorherige Befehle, Tabulator für Autovervollständigung).</li>
          <li>Grundlegende Befehle kennen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/-flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zum Ausführen von textbasierten Programmen. Wenn Sie Werkzeuge für die Webentwicklung einsetzen, steht die Wahrscheinlichkeit hoch, dass Sie die Befehlszeile öffnen müssen, um einige Befehle auszuführen, um Ihre ausgewählten Werkzeuge zu nutzen (solche Werkzeuge werden oft als **CLI-Tools** bezeichnet — Command Line Interface Tools).

Eine große Anzahl von Werkzeugen kann durch Eingabe von Befehlen in die Befehlszeile genutzt werden; viele sind bereits auf Ihrem System vorinstalliert, und eine riesige Anzahl anderer ist aus Paketregistern installierbar. Paketregister sind wie App-Stores, jedoch (meistens) für auf der Befehlszeile basierende Tools und Software. Wir werden später in diesem Kapitel sehen, wie man einige Tools installiert, und mehr über Paketregister im nächsten Kapitel erfahren.

Eine der größten Kritiken an der Befehlszeile ist, dass sie erheblich in der Benutzerfreundlichkeit fehlt. Wenn man die Befehlszeile das erste Mal sieht, kann es erschreckend sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Oberflächlich betrachtet sind sie weit davon entfernt einladend zu sein, aber es gibt viel, was Sie damit tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu nutzen! Deshalb bieten wir dieses Kapitel an — um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig von der Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben — von Desktop-Computern bis zu Servern, die in der Cloud versteckt sind, bis hin zu Mikrocomputern wie dem Raspberry Pi Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem und die niedrigen Funktionen des Computers und ist daher unglaublich nützlich für die schnelle Durchführung komplexer Aufgaben, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder- oder Explorer-GUI-App aktualisieren würden, würde es lange dauern.

Wie auch immer, das Terminal wird so bald nicht verschwinden.

### Wie sieht das Terminal aus?

Im Folgenden sehen Sie einige der verschiedenen Programme, die verfügbar sind und die Sie zu einem Terminal führen können.

Die nächsten Bilder zeigen die Eingabeaufforderungen, die in Windows verfügbar sind — es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zu "PowerShell" — die durch Eingabe des Programmnamen im Startmenü ausgeführt werden können.

![Ein einfaches Windows-Cmd-Fenster und ein Windows-PowerShell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z. B. das Terminal und die Werkzeuge, auf die Sie zugreifen können). Viele Tutorials und Tools, die es heute im Web gibt, unterstützen (und gehen leider davon aus) Unix-basierte Systeme, aber keine Sorge — diese sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf das Terminal auf Ihrem gewählten System zugreifen können.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme ein Terminal, das standardmäßig verfügbar ist und in Ihren Anwendungen aufgelistet ist.

#### macOS

macOS hat ein System namens Darwin, das unter der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal bereitstellt und Zugriff auf die grundlegenden Werkzeuge gewährt. macOS Darwin hat weitgehend Parität mit Unix, auf jeden Fall gut genug, um uns keine Sorgen zu bereiten, während wir diesen Artikel durcharbeiten.

Das Terminal ist auf macOS verfügbar unter `Applications/Utilities/Terminal`.

#### Windows

Ähnlich wie bei einigen anderen Programmierwerkzeugen war die Nutzung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder benutzerfreundlich wie unter anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hat traditionell sein eigenes terminalähnliches Programm namens `cmd` ("die Eingabeaufforderung") gehabt, das aber keine Parität mit Unix-Befehlen hat und dem alten Windows-DOS-Eingabebildschirm entspricht.

Bessere Programme existieren, um eine Terminalerfahrung auf Windows bereitzustellen, wie PowerShell ([siehe hier zur Installation](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git für Windows](https://gitforwindows.org/)-Toolsets ist).

Allerdings ist die beste Option für Windows heutzutage das Windows Subsystem for Linux (WSL) — eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt von Windows 10 aus zu betreiben, wodurch Sie ein „echtes Terminal“ direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann kostenlos direkt aus dem Windows Store installiert werden. Sie finden alle benötigten Dokumentationen in der [Windows Subsystem for Linux-Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Windows Subsystem for Linux-Dokumentation](wsl.png)

In Bezug auf die Wahlmöglichkeit unter Windows, würden wir dringend empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden gut funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Randbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die einen Shell startet und verbindet. Ein Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie das Prompt und Shortcuts angepasst sein könnten). Die Befehlszeile ist die tatsächliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Fülle an Werkzeugen gibt, die über die Befehlszeile verfügbar sind, gibt es auch bei der Verwendung von Tools wie [Visual Studio Code](https://code.visualstudio.com/) eine Masse von Erweiterungen, die als Stellvertreter genutzt werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Allerdings werden Sie keine Code-Editor-Erweiterung für alles finden, was Sie tun möchten — Sie müssen irgendwann Erfahrung mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — fangen wir an, uns einige Terminalbefehle anzusehen! Hier sind nur einige der Dinge, die die Befehlszeile sofort tun kann, zusammen mit den Namen der entsprechenden Werkzeuge in jedem Fall:

- Navigieren durch das Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur (Ordner): `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Nach Textfragmenten in größeren Textmengen suchen: `grep`
- Den Inhalt einer Datei seitenweise anzeigen: `less`, `cat`
- Textströme manipulieren und transformieren (zum Beispiel alle Instanzen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Web, die viel tiefer in die Befehlszeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns vorankommen und einige dieser Werkzeuge auf der Befehlszeile verwenden. Bevor Sie fortfahren, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt, es ist eine Standardeinrichtung) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort gehen.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel "Ordner" genannt haben. Wenn Sie die Dateistruktur über eine Benutzeroberfläche betrachten, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Speicherordner aussehen. Allerdings hört man den Begriff "Verzeichnis" auch häufig, besonders wenn es darum geht, Dateien über die Befehlszeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu wechseln. Technisch gesehen ist cd kein Programm, sondern ein eingebautes. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und Sie es nicht versehentlich löschen können — zum Glück! Sie müssen sich nicht allzu sehr darüber sorgen, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen vorhanden sind.

1. Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

   ![Ergebnisse des cd Desktop-Befehls, der in einer Vielzahl von Windows-Terminals ausgeführt wird - der Terminal-Standort wechselt in den Desktop](win-terminals-cd.png)

2. Versuchen Sie, dies jetzt in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um zum vorherigen Verzeichnis zurückzukehren, können Sie zwei Punkte verwenden. Geben Sie dies jetzt ein:

   ```bash
   cd ..
   ```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>tab</kbd>-Taste, um Namen zu vervollständigen, bei denen Sie wissen, dass sie vorhanden sind, anstatt den ganzen Namen eintippen zu müssen. Versuchen Sie nach Eingabe der obigen zwei Befehle `cd D` zu tippen und drücken Sie <kbd>tab</kbd> — das sollte das Verzeichnis `Desktop` für Sie vervollständigen, vorausgesetzt es ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, wenn Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Das wird normalerweise einfacher, wenn Sie sich mit der Struktur Ihres Dateisystems vertraut machen, aber wenn Sie sich des Pfades nicht sicher sind, können Sie ihn normalerweise durch eine Kombination des Befehls `ls` (siehe unten) und durch Klicken im Explorer/Finder-Fenster herausfinden, um zu sehen, wo ein Verzeichnis relativ zum aktuellen Standort liegt.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, könnten Sie diese drei Befehle eingeben, um dorthin aus dem _Home_-Verzeichnis zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, mit den verschiedenen Elementen im Pfad durch Schrägstriche getrennt, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass die Einfügung eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, z.B. `/Users/Ihr-Benutzername/Desktop`. Das Auslassen des führenden Schrägstrichs, wie wir es oben gemacht haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "an der Wurzel der Website", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschrägstriche anstelle von Vorwärtsschrägstrichen, z. B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum das so ist, sehen Sie sich [diesen YouTube-Clip an](https://www.youtube.com/watch?v=5T3IJfBfBmI), in dem ein Microsoft Principal Engineer dies erklärt.

### Verzeichnisinhalt auflisten

Ein weiteres Unix-internes Kommando ist `ls` (kurz für list), das den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, das jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend — Sie erhalten nur die Namen der vorhandenen Elemente, aber nicht, ob es sich um eine Datei oder ein Verzeichnis handelt oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung in der Befehlsnutzung Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifizierer, die Sie ans Ende eines Befehls anhängen, um ihn auf eine leicht andere Weise zu verhalten. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehl, gefolgt von einem Bindestrich und einem oder mehreren Buchstaben.

Zum Beispiel probieren Sie dies aus und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` gibt die Option `-l` (_Bindestrich L_) eine Liste mit einer Datei oder einem Verzeichnis pro Zeile und viel mehr Informationen aus. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen sucht. Das sind die, in die wir mit `cd` wechseln können.

Unten ist ein Screenshot mit einem "einfachen" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein standardmäßiges macOS-Terminal und ein bunteres angepasstes macOS-Terminal, die eine Dateiliste anzeigen - das Ergebnis des ls -l Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen jeder Befehl verfügbar hat, können Sie sich die [Man-Seite](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem Sie den `man`-Befehl, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls` eingeben. Dies öffnet die Man-Seite im Standard-Textdateibetrachter des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten die Seite dann mit den Pfeiltasten oder einem ähnlichen Mechanismus durchblättern können. Die Man-Seite listet alle Optionen im Detail auf, was am Anfang ein wenig einschüchternd wirken kann, aber immerhin wissen Sie, dass sie da ist, wenn Sie sie brauchen. Sobald Sie mit der Durchsicht der Man-Seite fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Textbetrachters verlassen ("q" in `less`; Sie müssen möglicherweise im Web nach der Tastenkombination suchen, wenn sie nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese in der Regel alle in einer einzigen Zeichenfolge nach dem Bindestrichzeichen setzen, zum Beispiel `ls -lah` oder `ls -ltrh`. Versuchen Sie, sich die `ls` Man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Da wir nun zwei grundlegende Befehle besprochen haben, erkunden Sie Ihr Verzeichnis ein wenig und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Hilfsbefehle, die Sie wahrscheinlich ziemlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir nicht alle im Detail erklären wie die vorherigen.

Spielen Sie ein wenig mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die Beispielbefehle unten zur Orientierung:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel erstellt `mkdir my-awesome-website` ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — entfernt das angegebene Verzeichnis, jedoch nur, wenn es leer ist. Zum Beispiel entfernt `rmdir my-awesome-website` das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles entfernt, was es enthält), dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass nichts darin enthalten ist, was Sie möglicherweise später benötigen, denn es wird für immer weg sein.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel erstellt `touch mdn-example.md` eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei vom ersten angegebenen Dateispeicherort zum zweiten angegebenen Dateispeicherort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis in eine Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird die Datei durch diesen Befehl umbenannt.
- `cp` — ähnlich in der Verwendung wie `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Speicherort, im zweiten angegebenen Speicherort. Zum Beispiel erstellt `cp mdn-example.txt mdn-example.txt.bak` eine Kopie von `mdn-example.txt` mit dem Namen `mdn-example.txt.bak` (Sie können sie natürlich auch anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel löscht `rm mdn-example.txt` eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen permanent ist und nicht über den Papierkorb auf Ihrem Desktop rückgängig gemacht werden kann.

> [!NOTE]
> Viele Terminalbefehle erlauben es, Sterne als "Wildcard"-Zeichen zu verwenden, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es, eine Operation auf eine potenziell große Anzahl von Dateien auf einmal auszuführen, die alle dem angegebenen Muster entsprechen. Ein Beispiel dafür ist `rm mdn-*`, das alle Dateien löscht, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben das bereits angedeutet, aber um es deutlich zu machen — Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht allzu viel Gefahr, aber während Sie anfangen, kompliziertere Befehle zusammenzustellen, sollten Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie haben 1000 Textdateien in einem Verzeichnis, und Sie möchten sie alle durchgehen und nur diejenigen löschen, die einen bestimmten Teilstring im Dateinamen haben. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dadurch eine große Menge an Arbeit verlieren. Eine gute Angewohnheit ist, Ihren Terminalbefehl in einem Texteditor auszuarbeiten, herauszufinden, wie er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und den Befehl zuerst dort zu testen.

Wenn Sie sich nicht wohl dabei fühlen, Terminalbefehle auf Ihrer eigenen Maschine auszuprobieren, gibt es gehostete Online-Terminals, die sichere Orte zum Üben des Eingebens von Befehlen bieten, ohne das Risiko, Ihre eigene Maschine zu beschädigen:

- Unser Lernpartner [Scrimba](https://scrimba.com/home?via=mdn) bietet ein Terminal für die Eingabe von Befehlen in ihrer Lernumgebung. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr Kurs [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, der auch eine unterhaltsame interaktive Einführung in die Navigation durch die Verzeichnisstruktur und das Manipulieren von Dateien und Verzeichnissen über das Terminal bietet.
- [Glitch.com](https://glitch.com/) ist ein großartiger Ort, um Webentwicklungscode auszuprobieren, und Glitch-Projekte enthalten auch ein Terminal für das Ausführen von Befehlen.

Eine großartige Ressource, um eine schnelle Übersicht über bestimmte Terminalbefehle zu bekommen, ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-getriebener Dokumentationsdienst, ähnlich wie MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt werden wir das Ganze ein wenig aufpeppen (oder eigentlich mehrere Rasten hochdrehen) und sehen, wie wir Werkzeuge auf der Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal im Vorteil gegenüber der regulären Desktopbenutzeroberfläche sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet wirklich seine Stärke, wenn Sie beginnen, Befehle mit dem Zeichen `|` (Pipe) zu verketten. Lassen Sie uns ein sehr schnelles Beispiel dafür ansehen, was das bedeutet.

Wir haben bereits `ls` angesehen, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? Das kann `ls` alleine nicht.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was ihm eingegeben wird. Dies könnte eine Textdatei sein — das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von allem zählen, was ihm mit einer Pipe zugeführt wird. Zum Beispiel zählt der unten stehende Befehl die Anzahl der Zeilen, die von `ls` ausgegeben werden (was normalerweise an das Terminal gedruckt würde, wenn es allein ausgeführt wird) und gibt diese Anzahl an das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in seiner eigenen Zeile druckt, ergibt dies effektiv eine Verzeichnis- und Dateianzahl.

Was geht hier also vor sich? Allgemein gesagt ist die Philosophie der (Unix-)Befehlszeilenwerkzeuge, dass sie Text an das Terminal drucken (das auch als "Pastebin" bezeichnet wird oder `STDOUT`). Eine gute Anzahl von Befehlen kann auch Inhalte aus gestreamtem Input lesen (bekannt als "Standardinput" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben miteinander verbinden, sodass wir zunehmend komplexere Operationen aufbauen können, um unseren Bedürfnissen zu entsprechen — die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` seine Ausgabe normalerweise an `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` geleitet, das diese Ausgabe als Input nimmt, die Anzahl der Zeilen zählt, die sie enthält, und diese Anzahl statt dessen an `STDOUT` druckt.

## Ein etwas komplizierteres Beispiel

Lassen Sie uns etwas durchgehen, das ein bisschen komplizierter ist.

1. Wir werden zunächst versuchen, den Inhalt von MDNs "Fetch"-Seite mit dem `curl`-Befehl abzurufen (das verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Sie bekommen keine Ausgabe, weil die Seite umgeleitet wurde (nach [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit anweisen, Umleitungen mit dem `-L`-Flag zu folgen.

2. Sehen wir uns auch die Header an, die `developer.mozilla.org` zurückgibt, indem wir `curl`s `-I`-Flag verwenden und alle Weiterleitungsaufzeichnungen, die es sendet, an das Terminal drucken, indem wir die Ausgabe von `curl` in `grep` leiten (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten). Versuchen Sie, den folgenden Befehl auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Ihre Ausgabe sollte ungefähr so aussehen (`curl` gibt zuerst einige Downloadzähler und dergleichen aus):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Obwohl konstruiert, könnten wir dieses Ergebnis ein wenig weiternehmen und den Inhalt der `location:`-Zeilen so transformieren, dass wir die Basis-URL zum Anfang jeder Zeile hinzufügen, um vollständige URLs auszugeben. Dafür fügen wir `awk` hinzu (das ist eine Programmiersprache ähnlich wie JavaScript oder Ruby oder Python, nur viel älter!). Versuchen Sie, diesen Befehl auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihr endgültiges Ergebnis sollte so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server während der Anforderung der `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL umgeleitet wird. Wenn Sie Ihr System besser kennenlernen, wird es in den kommenden Jahren hilfreich sein — lernen Sie, wie diese Einzelwerkzeuge funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Power-ups hinzufügen

Jetzt haben wir uns einige der eingebauten Befehle angesehen, mit denen Ihr System ausgestattet ist, sehen wir uns an, wie wir ein CLI-Tool von einem Drittanbieter installieren und verwenden können.

Das weite Ökosystem der installierbaren Tools für die Front-End-Webentwicklung existiert derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet. Dies erweitert sich langsam — Sie können erwarten, dass mit der Zeit mehr Paket-Anbieter hinzukommen.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das Befehlszeilen-Tool npm (und ein ergänzendes, npm-zentrisches Tool namens npx), das einen Zugangspunkt zur Installation zusätzlicher Befehlszeilentools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie zur oben angegebenen URL gehen und einen geeigneten Node.js-Installer für Ihr Betriebssystem herunterladen und ausführen. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![Der Node.js-Installer auf Windows mit der Option, npm einzuschließen](npm-install-option.png)

Wir werden hier erneut [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie man es als VS Code-Erweiterung im Artikel [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) installiert. Hier zeigen wir Ihnen, wie Sie es als Befehlszeilentool installieren können.

> [!NOTE]
> Prettier ist ein meinungsstarker Code-Formatter, der nur "wenige Optionen" hat. Weniger Optionen bedeuten tendenziell Einfachheit. Angesichts dessen, wie Werkzeuge manchmal außer Kontrolle geraten können, was die Komplexität betrifft, kann "wenige Optionen" sehr ansprechend sein.

### Wo sollen wir unsere CLI-Tools installieren?

Bevor wir in die Installation von Prettier eintauchen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren — sodass wir von überall darauf zugreifen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile in beide Richtungen — und die folgende Liste von Vor- und Nachteilen für die globale Installation ist bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Benötigt weniger Speicherplatz
- Immer dieselbe Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Codebase Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben kein Zugriff auf diese Tools, zum Beispiel wenn Sie den Codebase über ein Tool wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt erschwert es die Replikation des Projekt-Codes (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarkes Code-Formatierungswerkzeug für Front-End-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Belastung beim manuellem Abstimmen des Stils in allen Ihren Code-Dateien sparen; Prettier kann dies automatisch für Sie tun.
- Neulingen in der Webentwicklung helfen, ihren Code im Best-Practice-Stil zu formatieren.
- Auf jedem Betriebssystem und sogar als direkter Teil der Projektwerkzeuge installiert werden, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Code-Stil verwenden wie Sie.
- So konfiguriert werden, dass es beim Speichern, während der Eingabe oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichen Werkzeugen, die wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

1. Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` bedeutet):

   ```bash
   npm install --save-dev prettier
   ```

2. Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/)-Tool ausführen. Wenn Sie den Befehl ohne Argumente ausführen, wird, wie bei vielen anderen Befehlen, die Nutzungs- und Hilfsinformationen angezeigt. Versuchen Sie das jetzt:

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

Es ist immer einen Blick wert, zumindest kurz über die Nutzungsinformationen zu schauen, selbst wenn sie lang sind.
Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, dann wird `npx prettier` die neueste Version von Prettier für genau diesen Befehl herunterladen und ausführen.
> Auch wenn das großartig klingt, können neue Versionen von Prettier die Ausgabe leicht modifizieren.
> Sie möchten es lokal installieren, damit Sie zunächst die Version von Prettier fixieren, die Sie zur Formatierung verwenden, bis Sie bereit sind, sie zu ändern.

### Mit Prettier spielen

Lassen Sie uns schnell mit Prettier spielen, damit Sie sehen, wie es funktioniert.

1. Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier gegen eine Codebasis ausführen, um nur zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

   Sie sollten eine Ausgabe in etwa dieser Form erhalten:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Alles klar, es gibt hier einige Code-Stile, die angepasst werden können. Kein Problem. Indem Sie die `--write` Option zum `prettier`-Befehl hinzufügen, wird alles automatisch angepasst, sodass wir uns auf das Schreiben von nützlichem Code konzentrieren können. Führen Sie nun diese Version des Befehls aus:

   ```bash
   npx prettier --write index.js
   ```

   Sie erhalten eine Ausgabe wie diese:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Aber noch wichtiger, wenn Sie sich Ihre JavaScript-Datei ansehen, wird sie so umformatiert worden sein:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Tools glänzen; unsere persönliche Präferenz ist der Typ der Automatisierung, die "einfach passiert", ohne dass Sie etwas konfigurieren müssen.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann, und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es einige ausgezeichnete Ressourcen online, die helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository einfügen, verwenden Sie [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie in Ihrem Code-Editor "speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von Continuous Integration-Checks unter Verwendung von Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Option — während der Verwendung von beispielsweise VS Code aktiviert sich Prettier und bereinigt jegliches Formatierungsproblem, das es zu erledigen gibt, jedes Mal, wenn wir speichern. Sie können viel mehr Informationen über die Verwendung von Prettier auf unterschiedliche Weise in der [Prettier-Dokumentation](https://prettier.io/docs/) finden.

## Andere Tools zum Ausprobieren

Wenn Sie mit ein paar weiteren Tools spielen möchten, hier ist eine kurze Liste, die Spaß macht:

- [`bat`](https://github.com/sharkdp/bat) — Ein "nicer" `cat` (`cat` wird verwendet, um die Inhalte von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich wenn etwas Ihren CPU-Lüfter wie einen Düsenantrieb klingen lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber als Befehlszeilentool verfügbar.

Beachten Sie, dass einige der oben genannten Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour durch das Terminal/die Befehlszeile und zum Ende des Moduls zur Einrichtung der Umgebung. Als Nächstes werden wir Sie dazu bringen, Ihre erste einfache Website zu erstellen, um eine Vorstellung davon zu bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
