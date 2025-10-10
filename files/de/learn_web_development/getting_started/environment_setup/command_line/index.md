---
title: Schnelleinführung in die Befehlszeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess müssen Sie sicherlich einige Befehle im Terminal ausführen (oder in der "Befehlszeile" – das ist im Wesentlichen dasselbe). Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie Sie Befehle miteinander verketten und wie Sie Ihre eigene Befehlszeilenschnittstellen-Tools (CLI-Tools) hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie die Befehlszeile auf verschiedenen Systemen aufrufen können.</li>
          <li>Kennenlernen grundlegender Tastenkombinationen (zum Beispiel Pfeiltaste nach oben für vorherige Befehle, Tab für Autovervollständigung).</li>
          <li>Kenntnis grundlegender Befehle (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie ein Tooling für die Webentwicklung ausführen, ist es fast garantiert, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um Ihre gewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** bezeichnet – Command Line Interface Tools).

Eine große Anzahl von Tools kann durch die Eingabe von Befehlen in die Befehlszeile verwendet werden; viele sind bereits auf Ihrem System vorinstalliert, und eine große Anzahl anderer ist aus Paketregistern installierbar. Paketregister sind wie App-Stores, aber (meist) für Befehlszeilenbasierte Tools und Software. Wir werden später in diesem Kapitel sehen, wie man einige Tools installiert, und mehr über Paketregister im nächsten Kapitel lernen.

Eine der größten Kritiken an der Befehlszeile ist, dass sie stark in Benutzererfahrung fehlt. Das erste Mal die Befehlszeile zu sehen kann eine einschüchternde Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig über die Geschichte auf Wikipedia im Beitrag über [Computerterminall](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem bleibt das Terminal eine konstante Funktion aller Betriebssysteme – von Desktop-Maschinen über Server, die in der Cloud versteckt sind, bis hin zu Mikrocomputern wie dem Raspberry PI Zero und sogar Mobiltelefonen. Es bietet direkten Zugriff auf das zugrundeliegende Dateisystem des Computers und grundlegende Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung – zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit dem Finder oder Explorer GUI-App aktualisiert hätten, würde dies eine lange Zeit in Anspruch nehmen.

Jedenfalls wird das Terminal so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Varianten von Programmen, die verfügbar sind, um ein Terminal zu erreichen.

Die nächsten Bilder zeigen die verfügbaren Eingabeaufforderungen in Windows – es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zum "powershell", die über das Startmenü durch Eingabe des Programmnamen ausgeführt werden können.

![Ein einfaches Windows cmd-Fenster und ein Windows Powershell-Fenster](win-terminals.png)

Und unten zu sehen ist die macOS Terminal-Anwendung.

![Ein einfaches macOS Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler nutzen heute Unix-basierte Tools (z.B. das Terminal und die darin zugänglichen Tools). Viele Tutorials und Tools, die heute im Web existieren, unterstützen (und gehen leider davon aus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf das Terminal auf Ihrem gewählten System zugreifen können.

#### Linux/Unix

Wie bereits angedeutet, verfügen Linux/Unix-Systeme standardmäßig über ein Terminal, das in Ihrer Anwendungsliste angezeigt wird.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf grundlegende Tools bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, zumindest gut genug, um uns keine Sorgen zu bereiten, während wir diesen Artikel durchgehen.

Das Terminal ist auf macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder unkompliziert wie bei anderen Betriebssystemen. Aber es wird besser.

Windows hat traditionell sein eigenes terminal-ähnliches Programm namens `cmd` (die "Eingabeaufforderung") schon lange, aber es hat keine Parität mit Unix-Befehlen und ist dem alten Windows DOS-Prompt gleichwertig.

Bessere Programme bieten eine bessere Terminalerfahrung auf Windows, wie PowerShell ([hier finden Sie Installationsprogramme](https://github.com/PowerShell/PowerShell)) und Git Bash (das als Teil des [git für Windows](https://gitforwindows.org/) Toolsets kommt).

Die beste Option für Windows ist heutzutage jedoch das Windows Subsystem for Linux (WSL) – eine Kompatibilitätsschicht zum Ausführen von Linux-Betriebssystemen direkt aus dem Inneren von Windows 10, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows auszuführen, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt im Windows Store kostenlos installiert werden. Sie finden alle benötigte Dokumentation in der [Windows Subsystem for Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows Subsystem für Linux Dokumentation](wsl.png)

In Bezug darauf, welche Option für Windows gewählt werden soll, würden wir dringend empfehlen, zu versuchen, das WSL zu installieren. Sie könnten mit der Standardeingabeaufforderung (`cmd`) auskommen, und viele Tools werden gut funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen finden Sie, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die gestartet wird und sich mit einer Shell verbindet. Eine Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie die Eingabeaufforderung und Tastenkombinationen angepasst werden könnten). Die Befehlszeile ist die tatsächliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Anzahl von Werkzeugen gibt, die von der Befehlszeile verfügbar sind, gibt es mit Tools wie [Visual Studio Code](https://code.visualstudio.com/) auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt nutzen zu müssen. Allerdings werden Sie nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden – Sie müssen letztendlich einige Erfahrungen mit dem Terminal sammeln.

## Grundlegende integrierte Terminalbefehle

Genug geredet – schauen wir uns einige Terminalbefehle an! Out of the box kann die Befehlszeile unter anderem folgende Dinge erledigen, zusammen mit den Namen der relevanten Tools in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers und führen Sie grundsätzliche Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen aus:
  - Bewegen Sie sich in Ihrer Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Fragmenten von Text in größeren Textmengen suchen: `grep`
- Eine Datei Seite für Seite anzeigen: `less`, `cat`
- Ströme von Text manipulieren und transformieren (zum Beispiel alle Instanzen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Anzahl von guten Tutorials im Web, die viel tiefer in die Befehlszeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns weitermachen und die Verwendung einiger dieser Tools in der Befehlszeile betrachten. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation in der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (bei einer Standardeinrichtung) starten ihr Terminalprogramm im _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel "Ordner" genannt haben. Wenn man sich die Dateistruktur in einer Benutzeroberfläche (UI) ansieht, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Speicherordner aussehen. Sie werden jedoch häufig auch den Begriff "Verzeichnis" hören, besonders wenn es darum geht, Dateien über die Befehlszeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Der `cd`-Befehl lässt Sie das Verzeichnis Ändern (Change Directory). Technisch gesehen ist cd kein Programm, sondern ein eingebautes Feature. Das bedeutet, dass Ihr Betriebssystem es von Haus aus bereitstellt und Sie es auch nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht zu sehr darum kümmern, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen erscheinen.

1. Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Wenn sich das Verzeichnis in Ihrem Home-Verzeichnis befindet, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

   ![Ergebnisse des Ausführens des cd Desktop-Befehls in einer Vielzahl von Windows-Terminals - der Terminal-Standort wechselt auf den Desktop](win-terminals-cd.png)

2. Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um zum vorherigen Verzeichnis zurückzukehren, können Sie zwei Punkte verwenden. Geben Sie dies jetzt ein:

   ```bash
   cd ..
   ```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>tab</kbd>-Taste zur automatischen Vervollständigung von Namen, von denen Sie wissen, dass sie vorhanden sind, anstatt sie vollständig eintippen zu müssen. Zum Beispiel, nachdem Sie die obigen zwei Befehle getippt haben, versuchen Sie `cd D` zu tippen und drücken Sie dann <kbd>tab</kbd> – es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, wenn er im aktuellen Verzeichnis vorhanden ist. Behalten Sie das im Hinterkopf, während Sie vorwärts gehen.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad dorthin wissen. Das wird normalerweise einfacher, wenn Sie mit der Struktur Ihres Dateisystems vertrauter werden, aber wenn Sie sich des Pfades nicht sicher sind, können Sie ihn normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihr Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Beispielsweise, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, können Sie diese drei Befehle von Ihrem _Home_-Verzeichnis aus eingeben, um dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung – stattdessen können Sie einen Befehl mit den verschiedenen Elementen im Pfad eingeben, die durch Schrägstriche getrennt sind, so wie Sie das normalerweise tun, wenn Sie Pfade zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Einfügen eines vorderen Schrägstrichs in Ihren Pfad den Pfad absolut macht, zum Beispiel `/Users/your-user-name/Desktop`. Das Weglassen des vorderen Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, wie Sie es bei URLs in Ihrem Webbrowser sehen würden. Ein vorderer Schrägstrich bedeutet "am Root der Webseite", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwendet man Rückwärtsschrägstriche anstelle von Schrägstrichen, zum Beispiel `cd Desktop\project\src` – das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, der eine Erklärung von einem der leitenden Ingenieure von Microsoft enthält.

### Verzeichnisinhalte auflisten

Ein weiterer in Unix eingebauter Befehl ist `ls` (Abkürzung für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die standardmäßige Windows-Befehlszeile verwenden (`cmd`) – der entsprechende Befehl dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend – Sie erhalten nur den Namen jedes verfügbaren Elements, nicht jedoch, ob es sich um eine Datei oder ein Verzeichnis handelt oder andere Details. Glücklicherweise kann eine kleine Änderung der Befehlsverwendung Ihnen viele weitere Informationen liefern.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – dies sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, wodurch dieser sich etwas anders verhält. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, versuchen Sie dies und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die Option `-l` (Bindestrich ell) eine Liste aus, bei der sich eine Datei oder ein Verzeichnis auf jeder Zeile befindet, und zeigt viele weitere Informationen an. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen sucht. Diese sind diejenigen, in die wir `cd` einfügen können.

Unten ist ein Screenshot mit einem "einfachen" macOS-Terminal oben und einem angepassten Terminal mit zusätzlichen Symbolen und Farben, um es lebendig zu halten – beide zeigen die Ergebnisse des `ls -l`-Befehls:

![Ein einfaches macOS-Terminal und ein farbenfroheres benutzerdefiniertes macOS-Terminal, das eine Dateiauflistung anzeigt - Ergebnis des ls -l-Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um zu erfahren, welche Optionen für jeden Befehl verfügbar sind, können Sie dessen [Man-Seite](https://en.wikipedia.org/wiki/Man_page) aufrufen. Dies geschieht durch Eingabe des Befehls `man`, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dies öffnet die Man-Seite im standardmäßigen Textdatei-Viewer des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus durchzublättern. Die Man-Seite listet alle Optionen im Detail auf, was zwar zu Beginn etwas einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, falls Sie sie benötigen. Wenn Sie die Man-Seite durchgesehen haben, müssen Sie sich mit dem "Beenden"-Befehl Ihres Textviewers (in `less` "q"; sie müssen möglicherweise im Web nachsehen, sofern es nicht offensichtlich ist) aus dieser herausbewegen.

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise alle in einer Zeichenkette hinter dem Bindestrich-Zeichen setzen, zum Beispiel `ls -lah` oder `ls -ltrh`. Versuchen Sie, die Man-Seite von `ls` zu durchsuchen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Jetzt, da wir zwei grundlegende Befehle besprochen haben, sehen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe von anderen grundlegenden Dienstprogrammbefehlen, die Sie wahrscheinlich ziemlich oft verwenden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir nicht alle im Detail beschreiben wie die vorherigen zwei.

Spielen Sie mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die folgenden Beispielbefehle als Leitfaden:

- `mkdir` — Dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — Entfernt das benannte Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` entfernt das oben erstellte Verzeichnis. Wenn Sie ein nicht leeres Verzeichnis (und auch alles, was es enthält) entfernen möchten, können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, das Sie möglicherweise später noch benötigen, da es für immer verschwunden sein wird.
- `touch` — Erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — Verschiebt eine Datei von dem ersten angegebenen Ort an den zweiten angegebenen Ort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Orte werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch wird die Datei verschoben, aber aus praktischer Sicht ändert dieser Befehl tatsächlich den Namen der Datei.
- `cp` — Ähnlich wie `mv`, erstellt `cp` eine Kopie der Datei am ersten angegebenen Ort am zweiten angegebenen Ort. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich auch anders nennen, wenn Sie möchten).
- `rm` — Entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben Ihnen, Sternchen als "Wildcard"-Zeichen zu verwenden, was "jede Zeichenfolge" bedeutet. Dies erlaubt Ihnen, eine Operation gegen eine möglicherweise große Anzahl von Dateien auszuführen, die alle dem angegebenen Muster entsprechen. Ein Beispiel, `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben dies bereits angedeutet, aber um klar zu sein — Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle tragen nicht viel Gefahr, aber wenn Sie anfangen, komplexere Befehle zusammenzustellen, müssen Sie sorgfältig überlegen, was der Befehl tun wird, und versuchen, sie zuerst auszuprobieren, bevor Sie sie schließlich im vorgesehenen Verzeichnis ausführen.

Nehmen wir an, Sie hätten 1.000 Textdateien in einem Verzeichnis und Sie möchten alle durchgehen und nur diejenigen Dateien löschen, die einen bestimmten Teilstring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren.
Eine gute Gewohnheit ist es, Ihren Terminalbefehl in einem Texteditor auszuarbeiten, herauszufinden, wie Sie glauben, dass er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und den Befehl zuerst darauf auszuführen, um ihn zu testen.

Wenn Sie nicht gerne Terminalbefehle auf Ihrem eigenen Rechner ausprobieren, gibt es gehostete Online-Terminals, die sichere Orte bieten, an denen Sie das Eingeben von Befehlen üben können, ohne das Risiko einzugehen, Ihren eigenen Rechner zu beschädigen:

- Unser Lernpartner, [Scrimba](https://scrimba.com/home?via=mdn), bietet ein Terminal zur Eingabe von Befehlen in ihrer Lernumgebung. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Kurs, der auch eine unterhaltsame interaktive Einführung in die Navigation im Dateibaum und das Manipulieren von Dateien und Verzeichnissen über das Terminal bietet.
- Der [Command-line playground](https://sandbox.bio/playgrounds/terminal) auf sandbox.bio ist ein großartiger Ort, um Terminalbefehle auszuprobieren, sodass Sie sich mit Befehlszeilenschnittstellen und gängigen Shells wie Bash vertraut machen können.

Eine großartige Ressource, um einen schnellen Überblick über bestimmte Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein gemeinschaftlich gesteuerter Dokumentationsdienst, ähnlich wie MDN, jedoch spezifisch für Terminalbefehle.

In der nächsten Sektion steigern wir uns ein wenig (oder sogar einiges) und sehen, wie wir Werkzeuge in der Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche von Vorteil sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet sein wirkliches Potenzial, wenn man beginnt, Befehle mithilfe des `|` (Pipe)-Symbols zu verketten. Schauen wir uns ein sehr schnelles Beispiel an, was das bedeutet.

Wir haben uns bereits `ls` angesehen, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine.

Es gibt ein weiteres Unix-Tool namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was ihm übergeben wird. Dies kann eine Textdatei sein — das folgende Beispiel gibt die Zeilenanzahl in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Zeilenanzahl von allem zählen, was als Ausgabe _durchgeleitet_ wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die von dem `ls`-Befehl ausgegeben werden (was er würde normalerweise auf das Terminal ausgeben, wenn er alleine ausgeführt wird) und gibt diese Zählung stattdessen auf dem Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile ausgibt, gibt uns das effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix) Befehlszeilentools ist, dass sie Text auf das Terminal drucken (auch bekannt als "Druck auf die Standardausgabe" oder `STDOUT`). Eine gute Anzahl von Befehlen kann auch Inhalte von gestreamten Eingaben lesen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben _verbinden_, sodass wir immer komplexere Operationen nach unseren Bedürfnissen aufbauen können — die Ausgabe eines Befehls kann die Eingabe für den nächsten Befehl sein. In diesem Fall würde `ls` seine Ausgabe normalerweise auf `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` durch `wc` weitergeleitet, das diese Ausgabe als Eingabe nimmt, die Anzahl der Linien zählt, die es enthält, und an `STDOUT` die Zählung ausgibt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas durchgehen, das ein bisschen komplizierter ist.

1. Wir werden zuerst versuchen, den Inhalt der MDN-„fetch“-Seite mit dem `curl`-Befehl (der zum Abrufen von Inhalten von URLs verwendet werden kann) von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch` abzurufen. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Sie werden keine Ausgabe erhalten, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit beauftragen, Weiterleitungen mit dem Flag `-L` zu folgen.

2. Sehen wir uns auch die Header an, die `developer.mozilla.org` zurückgibt, indem wir das `-I`-Flag von `curl` verwenden und alle Standortweiterleitungen, die es sendet, auf das Terminal ausgeben, indem wir die Ausgabe von `curl` in `grep` weiterleiten (wir werden `grep` anweisen, alle Zeilen zurückzugeben, die das Wort "location" enthalten). Versuchen Sie, das Folgende auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Ihre Ausgabe sollte in etwa so aussehen (`curl` wird zuerst einige Downloadzähler und ähnliches ausgeben):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Obwohl künstlich, könnten wir dieses Ergebnis noch etwas weiter bringen und die Inhalte der `location:`-Zeilen transformieren, um den Basis-Ursprung am Anfang jeder Zeile hinzuzufügen, sodass vollständige URLs ausgegeben werden. Dafür fügen wir `awk` ein (das eine Programmiersprache ist, die JavaScript oder Ruby oder Python ähnelt, nur viel älter!). Versuchen Sie, dies auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihre endgültige Ausgabe sollte in etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs zu zeigen, durch die der Mozilla-Server umleitet, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL anfordern.
Das Kennenlernen Ihres Systems wird sich in den kommenden Jahren als nützlich erweisen — lernen Sie, wie diese Einzelzweck-Tools funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um spezielle Probleme zu lösen.

## Powerups hinzufügen

Jetzt, da wir uns einige der eingebauten Befehle angesehen haben, die Ihr System ausgestattet hat, sehen wir, wie wir ein Drittanbieter-CLI-Tool installieren und verwenden können.

Das riesige Ökosystem von installierbaren Tools für die Front-End-Webentwicklung existiert derzeit größtenteils in [npm](https://www.npmjs.com/), einem privat betriebenen Pakethostingdienst, der eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam — Sie können erwarten, dass mit der Zeit mehr Paketversorger auftauchen werden.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilentool (und ein ergänzendes, auf npm-zentriertes Tool namens npx), das einen Zugang zur Installation zusätzlicher Befehlszeilentools bietet. Node.js und npm funktionieren gleich auf allen Systemen: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie auf die oben angegebene URL gehen und einen geeigneten Node.js Installer für Ihr Betriebssystem herunterladen und ausführen. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass Sie npm als Teil der Installation einbeziehen.

![der Node.js Installer auf Windows, der die Option zeigt, npm einzuschließen](npm-install-option.png)

Wir werden hier wieder [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions)-Artikel gezeigt, wie man es als VS Code-Extension installiert. Hier zeigen wir, wie Sie es als Befehlszeilentool installieren.

> [!NOTE]
> Prettier ist ein meinungsstarker Code-Formatierer, der nur „wenige Optionen“ bietet. Weniger Optionen bedeuten in der Regel einfachere Konfiguration. Da die Tooling gelegentlich in Bezug auf Komplexität ausufern kann, kann „wenige Optionen“ sehr ansprechend sein.

### Wo sollten wir unsere CLI-Tools installieren?

Bevor wir mit der Installation von Prettier beginnen, gibt es eine Frage zu beantworten — „wo sollten wir es installieren?“

Mit `npm` haben wir die Möglichkeit, Tools global zu installieren — sodass wir von überall darauf zugreifen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile für beide Methoden — und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Benötigt weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Code-Stand Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben möglicherweise keinen Zugriff auf diese Tools, zum Beispiel, wenn Sie den Code-Stand über ein Tool wie Git teilen.
- Im Zusammenhang mit dem vorherigen Punkt wird der Projektcode schwerer zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet werden und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarkes Code-Formatierungstool für Front-End-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Belastung durch das manuelle Angleichen des Stils in allen Ihren Code-Dateien befreien; Prettier kann dies automatisch für Sie erledigen.
- Neulinge bei der Webentwicklung unterstützen, ihren Code nach Best Practices zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar als direkter Teil des Projekttoolings, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- So konfiguriert werden, dass es beim Speichern, während Ihrer Eingabe oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Tooling, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/install.html) vorgeschlagen.

1. Nachdem Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir erklären, was `--save-dev` tut, im nächsten Artikel):

   ```bash
   npm install --save-dev prettier
   ```

2. Jetzt können Sie die Datei lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/)-Tool ausführen. Wenn Sie den Befehl ohne Argumente ausführen, wie bei vielen anderen Befehlen, werden Verwendungs- und Hilfsinformationen angeboten. Versuchen Sie es jetzt:

   ```bash
   npx prettier
   ```

Ihre Ausgabe sollte etwa so aussehen:

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Es lohnt sich immer mindestens, die Verwendungsinformationen zu überfliegen, auch wenn sie lang sind.
Es hilft Ihnen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, lädt und führt `npx prettier` die neueste Version von Prettier in einem Aufwasch _nur für diesen Befehl_ aus.
> Auch wenn das großartig klingen mag, könnten neue Versionen von Prettier die Ausgabe leicht modifizieren.
> Sie möchten es lokal installieren, um sicherzustellen, dass Sie die Version von Prettier, die Sie für die Formatierung verwenden, fixieren, bis Sie bereit sind, sie zu ändern.

### Mit Prettier spielen

Lassen Sie uns einen kurzen Blick darauf werfen, wie Prettier funktioniert.

1. Erstellen Sie zunächst irgendwo in Ihrem Dateisystem ein neues Verzeichnis, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier gegen einen Code-Stand laufen lassen, um nur zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

   Sie sollten eine Ausgabe erhalten, die etwa so lautet:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Also, es gibt einige Code-Stile, die repariert werden müssen. Kein Problem. Wenn Sie die Option `--write` zum `prettier`-Befehl hinzufügen, werden diese behoben, sodass wir uns darauf konzentrieren können, tatsächlich nützlichen Code zu schreiben. Versuchen Sie nun, diese Version des Befehls auszuführen:

   ```bash
   npx prettier --write index.js
   ```

   Sie erhalten eine Ausgabe wie diese:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Aber noch wichtiger, wenn Sie zu Ihrer JavaScript-Datei zurückkehren, werden Sie feststellen, dass sie in etwa folgendermaßen formatiert wurde:

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

Abhängig von Ihrem Arbeitsablauf (oder dem von Ihnen gewählten Arbeitsfluss) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich dort, wo Tools glänzen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann, und obwohl diese über den Umfang dieses Artikels hinausgehen, gibt es einige ausgezeichnete Ressourcen online, die dabei helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository einfügen, indem Sie [Husky](https://github.com/typicode/husky) verwenden.
- Jedes Mal, wenn Sie in Ihrem Code-Editor auf „Speichern“ klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Im Rahmen von {{Glossary("continuous_integration", "Continuous Integration")}}-Prüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Option — während der Verwendung von z. B. VS Code greift Prettier ein und bereinigt alle Formatierungen, die nach der Eingabe von „Speichern“ erforderlich sind. Sie finden viel mehr Informationen darüber, wie Prettier auf verschiedene Arten verwendet werden kann, in den [Prettier-Dokumenten](https://prettier.io/docs/).

## Weitere Tools zum Ausprobieren

Wenn Sie mit ein paar weiteren Tools herumspielen möchten, hier eine kurze Liste von Dingen, die Sie ausprobieren können:

- [`bat`](https://github.com/sharkdp/bat) — Ein „besseres“ `cat` (`cat` wird verwendet, um den Inhalt von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Düsentriebwerk wirken lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — wurde bereits in diesem Kapitel erwähnt, aber als Befehlszeilen-Tool erhältlich.

Beachten Sie, dass einige der vorgenannten Vorschläge wie bei Prettier mit npm installiert werden müssen.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour durch das Terminal/die Befehlszeile und zum Abschluss des Moduls "Umgebungseinrichtung". Als Nächstes werden wir Sie dazu bringen, Ihre erste einfache Website zu erstellen, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
