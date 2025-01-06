---
title: Leitfaden für die Befehlszeilen-Einführung
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 0e5b7e1a0abdfb8119d63f11b533df4b9c2e9127
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Entwicklungsprozess wird es unvermeidlich sein, dass Sie einige Befehle im Terminal (oder auf der "Befehlszeile" – das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie man Befehle miteinander verkettet und wie Sie Ihre eigenen Befehlszeilenschnittstellen (CLI) Tools hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit machen können.</li>
          <li>Verstehen, wie man auf verschiedenen Systemen auf die Befehlszeile zugreift.</li>
          <li>Grundlegende Tastaturkürzel kennen (zum Beispiel Pfeil nach oben für frühere Befehle, Tabulatortaste für Autovervollständigung).</li>
          <li>Grundlegende Befehle kennen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags verstehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zum Ausführen textbasierter Programme. Wenn Sie Werkzeuge zur Webentwicklung nutzen, ist es sehr wahrscheinlich, dass Sie die Befehlszeile öffnen und einige Befehle eingeben müssen, um die gewählten Werkzeuge zu nutzen (solche Werkzeuge werden oft als **CLI-Tools** – Command Line Interface Tools – bezeichnet).

Eine Vielzahl von Tools kann verwendet werden, indem Befehle in die Befehlszeile eingegeben werden; viele davon sind bereits vorinstalliert auf Ihrem System, und eine große Anzahl anderer ist aus Paketregistern installierbar.
Paketregister sind wie App-Stores, aber (meistens) für auf der Befehlszeile basierende Werkzeuge und Software. Wir werden später in diesem Kapitel sehen, wie einige Tools installiert werden, und später im nächsten Kapitel mehr über Paketregister lernen.

Eine der größten Kritiken an der Befehlszeile ist, dass sie erheblich an Benutzerfreundlichkeit fehlt. Die Befehlszeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu nutzen! Aus diesem Grund bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher stammt das Terminal?

Das Terminal stammt etwa aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt überhaupt nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig von der Geschichte im Wikipedia-Eintrag für [Computer-Terminal](https://en.wikipedia.org/wiki/Computer_terminal) nachlesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Maschinen bis hin zu Servern, die in der Cloud verborgen sind, über Mikrocomputer wie den Raspberry PI Zero und sogar bis zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem und die Low-Level-Funktionen des Computers und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn man weiß, was zu tun ist.

Es ist auch nützlich für die Automatisierung – beispielsweise, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, z.B. von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrer Finder- oder Explorer-GUI-App aktualisieren würden, würde es lange dauern.

Wie dem auch sei, das Terminal wird so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Geschmacksrichtungen von Programmen, die Sie in ein Terminal bringen können.

Die nächsten Bilder zeigen die verfügbaren Eingabeaufforderungen in Windows – es gibt eine gute Auswahl von der "cmd"-Programm bis zur "powershell" – die über das Startmenü ausgeführt werden können, indem Sie den Programmnamen eintippen.

![Ein Standard-Windows cmd Fenster und ein Windows PowerShell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminal-Anwendung für macOS.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z.B. das Terminal und die Tools, die Sie darüber erreichen können). Viele Tutorials und Tools, die es heute im Web gibt, unterstützen (und gehen leider davon aus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt schauen wir uns an, wie man auf das Terminal auf dem gewählten System zugreift.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgelistet ist.

#### macOS

macOS hat ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die Low-Level-Tools bietet. macOS Darwin hat größtenteils Parität mit Unix, sicherlich gut genug, um uns keine Sorgen zu bereiten, während wir diesen Artikel durcharbeiten.

Das Terminal ist auf macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) auf Windows traditionell nicht so einfach wie auf anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hat traditionell sein eigenes terminal-ähnliches Programm namens `cmd` ("die Eingabeaufforderung") seit langer Zeit, aber dies hat keine Parität mit Unix-Befehlen und entspricht der alten Windows DOS-Aufforderung.

Bessere Programme existieren, um ein Terminalerlebnis auf Windows zu bieten, wie PowerShell ([installieren Sie hier](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git für Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows ist heutzutage jedoch das Windows Subsystem for Linux (WSL) – eine Kompatibilitätsschicht zum Ausführen von Linux-Betriebssystemen direkt von Windows 10 aus, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows auszuführen, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Sie finden alle Dokumentationen, die Sie benötigen, in der [Windows Subsystem for Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows subsystem for Linux Dokumentation](wsl.png)

In Bezug darauf, welche Option auf Windows gewählt werden soll, würden wir Ihnen stark empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden in Ordnung funktionieren, aber Sie werden feststellen, dass alles einfacher wird, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden Sie diese beiden Begriffe austauschbar finden. Technisch gesehen ist ein Terminal eine Software, die gestartet wird und eine Verbindung zu einer Shell herstellt. Eine Shell ist Ihre Sitzung und Umgebung (wo Dinge wie Eingabeaufforderung und Abkürzungen angepasst werden können). Die Befehlszeile ist die eigentliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Vielfalt an Werkzeugen gibt, die von der Befehlszeile aus verfügbar sind, wenn Sie Werkzeuge wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, gibt es auch eine Masse von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Sie werden jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden – irgendwann müssen Sie sich mit dem Terminal vertraut machen.

## Grundlegende integrierte Terminalbefehle

Genug geredet – lassen Sie uns einige Terminalbefehle anschauen! Aus der Box heraus gibt es nur einige der Dinge, die die Befehlszeile tun kann, zusammen mit den Namen der relevanten Werkzeuge in jedem Fall:

- Navigation in Ihrem Dateisystem und grundlegende Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich in Ihrer Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Erstellen von Verzeichnissen: `mkdir`
  - Erstellen von Dateien (und Ändern ihrer Metadaten): `touch`
  - Kopieren von Dateien oder Verzeichnissen: `cp`
  - Verschieben von Dateien oder Verzeichnissen: `mv`
  - Löschen von Dateien oder Verzeichnissen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Suchen nach Textabschnitten innerhalb größerer Textkörper: `grep`
- Anzeigen des Inhalts einer Datei seitenweise: `less`, `cat`
- Manipulieren und Transformieren von Textströmen (zum Beispiel alle Instanzen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Web, die viel tiefer in die Befehlszeile gehen – dies ist nur eine kurze Einführung!

Lassen Sie uns weitermachen und sehen, wie wir einige dieser Werkzeuge auf der Befehlszeile verwenden. Bevor Sie weiter gehen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile besuchen, werden Sie unweigerlich zu einem bestimmten Verzeichnis navigieren müssen, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt ein Standard-Setup) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort werden Sie wahrscheinlich an einen anderen Ort wechseln wollen.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel "Ordner" nannten. Wenn Sie die Dateistruktur in einer Benutzeroberfläche (UI) betrachten, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Speicherordner aussehen. Sie hören jedoch häufig auch den Begriff "Verzeichnis", insbesondere wenn es darum geht, Dateien über die Befehlszeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Wesentlichen dasselbe.

Der Befehl `cd` ermöglicht es Ihnen, das Verzeichnis zu ändern. Technisch gesehen ist cd kein Programm, sondern ein integriertes. Das bedeutet, dass Ihr Betriebssystem es out of the box bereitstellt und Sie es auch nicht versehentlich löschen können – zum Glück! Sie müssen sich nicht allzu viele Sorgen darüber machen, ob ein Befehl eingebaut ist oder nicht, aber denken Sie daran, dass eingebaute auf allen Unix-basierten Systemen vorhanden sind.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, in das Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![Ergebnisse des Befehls cd Desktop, der in einer Vielzahl von Windows-Terminals ausgeführt wird - der Standort des Terminals wechselt in den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminal-Abkürzung ist die Verwendung der <kbd>Tabulator</kbd>-Taste, um Namen zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt das Ganze eintippen zu müssen. Versuchen Sie, nach Eingabe der obigen beiden Befehle `cd D` zu tippen und die <kbd>Tabulator</kbd>-Taste zu drücken – es sollte der Verzeichnisname `Desktop` für Sie vervollständigt werden, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Denken Sie daran, dies im Hinterkopf zu behalten, während Sie fortfahren.

Wenn das Verzeichnis, in das Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Das wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems sind, aber wenn Sie sich nicht sicher sind, welchen Pfad Sie verwenden sollen, können Sie ihn normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis befindet, relativ zu dem Ort, an dem Sie sich gerade befinden.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project`, das sich auf dem _Desktop_ befindet, könnten Sie diese drei Befehle benutzen, um vom _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung – stattdessen können Sie einen Befehl eingeben, mit den verschiedenen Elementen im Pfad durch Schrägstriche getrennt, genauso wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Assets in CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines vorausschauenden Schrägstrichs zu Ihrem Pfad diesen absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Das Auslassen des vorausschauenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, was Sie bei URLs in Ihrem Webbrowser sehen würden. Ein vorausschauender Schrägstrich bedeutet "am Anfang der Website", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschrägstriche anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` – das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich dieses YouTube-Video](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der leitenden Microsoft-Ingenieure an.

### Auflisten der Verzeichnisinhalte

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für Liste), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden – das Äquivalent dazu ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach – Sie bekommen nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt, oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung der Befehlseingabe Ihnen viel mehr Informationen geben.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – dies sind Modifikatoren, die Sie an das Ende eines Befehls anhängen und die ihn ein wenig anders verhalten lassen. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel versuchen Sie das aus und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_Bindestrich l_) Option eine Liste mit einer Datei oder einem Verzeichnis in jeder Zeile und zeigt viel mehr Informationen an. Verzeichnisse können identifiziert werden, indem man auf einen Buchstaben "d" ganz links auf den Linien schaut. Das sind die, in die wir `cd`-wechslen können.

Unten ist ein Screenshot mit einem "Vanilla" macOS Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig aussehen zu lassen – beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein Standard-MacOS-Terminal und ein bunteres angepasstes macOS-Terminal, das eine Dateiliste zeigt - das Ergebnis der Ausführung des Befehls ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jedem Befehl zur Verfügung stehen, können Sie sich die [man page](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies wird durch Eingeben des `man`-Befehls gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, z.B. `man ls`, gemacht. Dies öffnet in der Standardeinstellung des Terminals den Standardtextdateiviewer (z.B. [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann durch die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus scrollen können. Die man page listet alle Optionen sehr detailliert auf, was zu Beginn etwas einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Sobald Sie mit dem Durchsehen der man page fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Textviewers ("q" in `less`; Sie müssen möglicherweise im Internet suchen, um es zu finden, wenn es nicht offensichtlich ist) beenden.

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise in einem einzigen String nach dem Bindestrichzeichen anbringen, z.B. `ls -lah` oder `ls -ltrh`. Versuchen Sie, sich die `ls` man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen tun!

Nachdem wir nun zwei grundlegende Befehle erläutert haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe weiterer grundlegender Dienstprogramme, die Sie wahrscheinlich häufig verwenden werden, während Sie das Terminal verwenden. Sie sind ziemlich einfach, daher werden wir nicht alle im Detail erläutern, wie wir es bei den vorherigen beiden getan haben.

Experimentieren Sie mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen. Benutzen Sie die folgenden Beispielbefehle zur Orientierung:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel, `mkdir my-awesome-website` wird ein neues Verzeichnis mit dem Namen `my-awesome-website` erstellen.
- `rmdir` — entfernt das benannte Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` wird das Verzeichnis entfernen, das wir oben erstellt haben. Wenn Sie ein nicht leeres Verzeichnis (und auch alles, was es enthält) entfernen möchten, dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber dies ist gefährlich. Stellen Sie sicher, dass es dort nichts gibt, was Sie später benötigen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei von der ersten angegebenen Dateiposition zur zweiten angegebenen Dateiposition, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Positionen sind als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht benennen Sie die Datei tatsächlich um.
- `cp` — ähnlich in der Verwendung wie `mv`, erstellt `cp` eine Kopie der Datei an der ersten angegebenen Position an der zweiten angegebenen Position. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich auch anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle ermöglichen Ihnen die Verwendung von Sternchen als "Wild Card"-Zeichen, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, eine Operation gegen eine potenziell große Anzahl von Dateien auf einmal auszuführen, die alle dem angegebenen Muster entsprechen. Zum Beispiel, `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben das zuvor angedeutet, aber um klar zu sein – Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle sind nicht sehr gefährlich, aber wenn Sie beginnen, kompliziertere Befehle zusammenzustellen, müssen Sie sorgfältig überlegen, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie im vorgesehenen Verzeichnis schließlich ausführen.

Nehmen wir an, Sie hätten 1.000 Textdateien in einem Verzeichnis, und Sie wollten alle durchgehen und nur die löschen, die einen bestimmten Teilstring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren.
Eine gute Gewohnheit ist es, Ihren Terminalbefehl in einem Texteditor auszuarbeiten, herauszufinden, wie er aussehen sollte, dann eine Sicherheitskopie Ihres Verzeichnisses zu machen und den Befehl zuerst darauf zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht wohl dabei fühlen, Befehlszeilenbefehle auf Ihrem eigenen Rechner auszuprobieren, ist ein sicherer Ort, dies zu tun, bei [Glitch.com](https://glitch.com/). Neben der Möglichkeit, Webentwicklungscode auszuprobieren, bieten die Projekte auch Zugriff auf ein Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, in der sicheren Gewissheit, dass Sie Ihren eigenen Rechner nicht beschädigen.

![ein Doppelscreenshot, der die glitch.com-Startseite und den Glitch-Ternminalemulator zeigt](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über spezifische Befehlszeilenbefehle zu bekommen, ist [tldr.sh](https://tldr.sh/). Dies ist ein von der Gemeinschaft betriebenes Dokumentationsservice, ähnlich MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt werden wir es um einige Stufen (oder sogar um mehrere Stufen) steigern und sehen, wie wir Werkzeuge auf der Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche Vorteile haben kann.

## Verbinden von Befehlen mit Pipes

Das Terminal entfaltet sein volles Potenzial, wenn man beginnt, Befehle mit dem `|` (Pipe) Symbol zu verketten. Sehen wir uns ein ganz schnelles Beispiel an, was das bedeutet.

Wir haben bereits `ls` angesehen, welches den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollen? `ls` kann das nicht allein tun.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes dessen, was in es eingegeben wird. Dies kann eine Textdatei sein — das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von was auch immer gezählt werden, was in es **gepipe**t wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die vom Befehl `ls` ausgegeben werden (was er normalerweise ins Terminal drucken würde, wenn er allein ausgeführt wird) und gibt stattdessen diese Anzahl ins Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis auf ihrer eigenen Zeile druckt, ergibt das effektiv eine Zählung von Verzeichnissen und Dateien.

Was geht hier vor sich? Eine allgemeine Philosophie der (unix-basierten) Befehlszeilenwerkzeuge ist, dass sie Text ins Terminal drucken (auch bezeichnet als "Drucken auf die Standardausgabe" oder `STDOUT`). Eine Vielzahl von Befehlen kann auch Inhalte aus gestreamtem Input lesen (bekannt als "Standardinput" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben zusammen _verbinden_, so dass wir zunehmend komplexere Operationen aufbauen können, um unsere Bedürfnisse zu erfüllen — die Ausgabe eines Befehls kann zum Eingang des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe an `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepipet, welches diese Ausgabe als Eingang nimmt, die Anzahl der Zeilen zählt, die sie enthält, und die Zählung stattdessen an `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas ein wenig Komplizierteres durcharbeiten.

Wir werden zunächst versuchen, den Inhalt der MDN-"fetch"-Seite mit dem Befehl `curl` abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie werden keine Ausgabe erhalten, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` explizit anweisen, Weiterleitungen mit der `-L`-Flagge zu folgen.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` mit der `-I`-Flagge von `curl` zurückgibt, und drucken Sie alle Standorte, die es an das Terminal sendet, indem Sie die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, das folgende auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Download-Zähler und dergleichen ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl es konstruiert ist, könnten wir dieses Ergebnis ein wenig weiterführen und die Inhalte der `location:`-Zeilen transformieren, indem wir den Ursprung der Base an den Anfang jeder Zeile hinzufügen, sodass wir vollständige URLs gedruckt bekommen.
Dafür werden wir `awk` in die Mischung hinzufügen (welches eine Programmiersprache ist, ähnlich JavaScript oder Ruby oder Python, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs zu zeigen, durch die der Mozilla-Server weiterleitet, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Es wird sich in den kommenden Jahren als nützlich erweisen, Ihr System kennenzulernen — lernen Sie, wie diese Einzeldiener-Werkzeuge funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Powerups hinzufügen

Nachdem wir uns einige der eingebauten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir, wie wir ein Drittanbieter-CLI-Werkzeug installieren und nutzen können.

Das weite Ökosystem installierbarer Werkzeuge für die Front-End-Webentwicklung existiert derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privaten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam — in Zukunft können Sie erwarten, mehr Paket-Anbieter zu sehen.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilen-Werkzeug (und ein ergänzendes npm-zentrisches Werkzeug namens npx), welches ein Tor zur Installation weiterer Befehlszeilenwerkzeuge bietet. Node.js und npm funktionieren gleich auf allen Systemen: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie zur obigen URL gehen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Falls aufgefordert, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![der Node.js-Installer auf Windows, der die Option zeigt, npm zu inkludieren](npm-install-option.png)

Wir werden hier wieder [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie man es als VS Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions)-Artikel installiert. Hier zeigen wir Ihnen, wie es als Befehlszeilenwerkzeug installiert wird.

> [!NOTE]
> Prettier ist ein meinungsstarker Code-Formatter, der nur "wenige Optionen" hat. Weniger Optionen bedeutet tendenziell einfacher. Angesichts der Tatsache, dass Tools manchmal in Bezug auf Komplexität außer Kontrolle geraten können, kann "wenige Optionen" sehr ansprechend sein.

### Wo sollen unsere CLI-Werkzeuge installiert werden?

Bevor wir mit der Installation von Prettier beginnen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Werkzeuge global zu installieren — so dass wir überall darauf zugreifen können — oder lokal in das aktuelle Projektverzeichnis.

Es gibt Vor- und Nachteile in jeder Richtung — und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Von überall im Terminal aus zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer dieselbe Version
- Fühlt sich an wie ein anderer unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit Ihrer Projektcodebasis kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugang zu diesen Werkzeugen, z.B. wenn Sie die Codebasis über ein Tool wie git teilen.
- In Verbindung mit dem vorherigen Punkt, macht es es schwierig, Projektcode zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_-Liste kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarker Code-Formatter für Front-End-Entwickler, der sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Die kognitive Auslastung sparen, die Sie hätte, den Stil manuell über alle Ihre Code-Dateien hinweg konsistent zu machen; Prettier kann dies automatisch für Sie tun.
- Neulingen in der Webentwicklung helfen, ihren Code im Best-Practice-Stil zu formatieren.
- Auf allen Betriebssystemen installiert und sogar als direkter Teil der Projektausrüstung eingerichtet werden, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Code-Stil wie Sie verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit weiterem Werkzeug, das wir später in diesem Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/en/install.html) vorgeschlagen.

Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir erklären, was `--save-dev` im nächsten Artikel bedeutet):

```bash
npm install --save-dev prettier
```

Sie können die Datei nun lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen.
Wird der Befehl ohne Argumente ausgeführt, bietet er, wie viele andere Befehle, Nutzungs- und Hilfsinformationen an.
Versuchen Sie dies jetzt:

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

Es lohnt sich immer, mindestens einen Überblick über die Nutzungsinformationen zu werfen, auch wenn sie lang sind.
Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie nicht zuerst Prettier lokal installiert haben, dann lädt und führt `npx prettier` die neueste Version von Prettier aus, alles in einem Vorgang _nur für diesen Befehl_.
> Auch wenn das großartig klingen mag, können neue Versionen von Prettier die Ausgabe leicht ändern.
> Sie möchten es lokal installieren, damit Sie die von Ihnen verwendete Prettier-Version für das Formatieren fixieren, bis Sie bereit sind, sie zu ändern.

### Mit Prettier experimentieren

Lassen Sie uns einen kurzen Test mit Prettier machen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zuerst irgendwo auf Ihrem Dateisystem ein neues Verzeichnis, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Codebasis ausführen, um nur zu prüfen, ob unser Code angepasst werden möchte. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe erhalten, die in etwa so aussieht:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also, es gibt einige Codestile, die behoben werden müssen. Kein Problem. Wenn Sie die `--write`-Option zum `prettier`-Befehl hinzufügen, wird das behoben, so dass wir uns darauf konzentrieren können, tatsächlich nützlichen Code zu schreiben.

Versuchen Sie jetzt diese Version des Befehls auszuführen:

```bash
npx prettier --write index.js
```

Sie werden eine Ausgabe wie diese erhalten:

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

Aber noch wichtiger, wenn Sie sich Ihre JavaScript-Datei ansehen, werden Sie feststellen, dass sie in etwa so neu formatiert wurde:

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

Abhängig von Ihrem Arbeitsablauf (oder dem Arbeitsablauf, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich da, wo Werkzeuge hervorragend sind; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass man irgendetwas konfigurieren muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, Automatisierung zu erreichen, und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es einige hervorragende Ressourcen online, die helfen können (einige davon wurden verlinkt). Sie können Prettier auslösen:

- Bevor Sie Ihren Code in ein git-Repository einfügen, verwenden Sie [Husky](https://github.com/typicode/husky).
- Wann immer Sie in Ihrem Code-Editor "speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen, die Werkzeuge wie [GitHub Actions](https://github.com/features/actions) verwenden.

Unsere persönliche Präferenz ist die zweite – während wir sagen, VS Code verwenden, tritt Prettier in Aktion und bereinigt jedes Format, das es muss, jedes Mal, wenn wir speichern drücken. Sie können viel mehr Informationen über die Verwendung von Prettier auf verschiedene Weise in den [Prettier-Dokumentationen](https://prettier.io/docs/en/) finden.

## Weitere Werkzeuge zum Ausprobieren

Wenn Sie mit einigen weiteren Werkzeugen spielen möchten, hier ist eine kurze Liste, die Spaß machen wird auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien zu drucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozess-Viewer, nützlich, wenn etwas Ihr CPU-Lüfter wie ein Düsenflugzeug klingen lässt und Sie das problematische Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — früher in diesem Kapitel erwähnt, aber auch als Befehlszeilen-Tool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Damit sind wir am Ende unserer Einführungstour durch das Terminal/Befehlszeile und des Moduls zur Einrichtung der Umgebung. Als Nächstes werden wir Sie daran arbeiten lassen, Ihre erste einfache Website zu erstellen, damit Sie eine Vorstellung davon bekommen, wie die Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
