---
title: Crashkurs zur Befehlszeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder auf der „command line“ – beides ist praktisch dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wichtigsten Befehle, die Sie darin eingeben müssen, das Verketten von Befehlen und das Hinzufügen eigener Tools für die Befehlszeilenschnittstelle (CLI).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, sowie mit Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie auf verschiedenen Systemen auf die Befehlszeile zugreifen.</li>
          <li>Grundlegende Tastenkürzel kennen (zum Beispiel Pfeil nach oben für vorherige Befehle, Tab für automatische Vervollständigung).</li>
          <li>Grundlegende Befehle kennen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zum Ausführen textbasierter Programme. Wenn Sie Werkzeuge für die Webentwicklung verwenden, ist es nahezu garantiert, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um die von Ihnen gewählten Tools zu verwenden (solche Tools werden häufig als **CLI tools** – Tools für die Befehlszeilenschnittstelle – bezeichnet).

Eine große Anzahl von Tools kann durch die Eingabe von Befehlen in die Befehlszeile verwendet werden; viele sind bereits auf Ihrem System vorinstalliert, und eine riesige Anzahl weiterer Tools kann aus Paketregistern installiert werden.
Paketregister sind wie App-Stores, aber (größtenteils) für befehlszeilenbasierte Tools und Software.
Später in diesem Kapitel werden wir sehen, wie man einige Tools installiert, und im nächsten Kapitel erfahren wir mehr über Paketregister.

Einer der größten Kritikpunkte an der Befehlszeile ist, dass ihre Benutzererfahrung stark zu wünschen übrig lässt.
Die Befehlszeile zum ersten Mal zu sehen, kann eine einschüchternde Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit nur wenig offensichtlicher Hilfe dazu, was zu tun ist.

Oberflächlich betrachtet sind sie alles andere als einladend, aber Sie können viel mit ihnen tun, und wir versprechen, dass die Nutzung mit etwas Anleitung und Übung einfacher wird!
Deshalb stellen wir dieses Kapitel bereit – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt ungefähr aus den 1950er- und 1960er-Jahren, und seine ursprüngliche Form ähnelt dem, was wir heute verwenden, überhaupt nicht (dafür sollten wir dankbar sein). Sie können etwas über seine Geschichte im Wikipedia-Artikel [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein fester Bestandteil aller Betriebssysteme geblieben – von Desktop-Rechnern über in der Cloud verborgene Server bis hin zu Mikrocomputern wie dem Raspberry PI Zero und sogar Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem und Low-Level-Funktionen des Computers und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch für die Automatisierung nützlich – beispielsweise, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, etwa von „ch01-xxxx.png“ zu „ch02-xxxx.png“. Wenn Sie die Dateinamen mithilfe Ihrer Finder- oder Explorer-GUI-App aktualisieren würden, würde dies sehr lange dauern.

Wie auch immer, das Terminal wird so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige verschiedene Programme, die Ihnen Zugriff auf ein Terminal ermöglichen.

Die nächsten Bilder zeigen die unter Windows verfügbaren Eingabeaufforderungen – es gibt eine gute Auswahl an Optionen, vom Programm „cmd“ bis zu „powershell“ –, die über das Startmenü durch Eingabe des Programmnamens ausgeführt werden können.

![Ein einfaches Windows-cmd-Fenster und ein Windows-PowerShell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwicklerinnen und Entwickler verwenden heute Unix-basierte Tools (z. B. das Terminal und die Tools, auf die Sie darüber zugreifen können). Viele Tutorials und Tools, die heute im Web verfügbar sind, unterstützen Unix-basierte Systeme – und setzen diese leider voraus –, aber keine Sorge: Sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt sehen wir uns an, wie Sie auf Ihrem gewählten System Zugriff auf das Terminal erhalten.

#### Linux/Unix

Wie oben angedeutet, verfügen Linux/Unix-Systeme standardmäßig über ein Terminal, das in Ihren Anwendungen aufgeführt ist.

#### macOS

macOS verfügt über ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die Low-Level-Tools bereitstellt. macOS Darwin ist größtenteils mit Unix kompatibel, sicherlich ausreichend, damit uns bei der Arbeit mit diesem Artikel keine Probleme entstehen.

Das Terminal ist unter macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach wie auf anderen Betriebssystemen. Aber die Lage verbessert sich.

Windows verfügt traditionell seit Langem über ein eigenes Terminal-ähnliches Programm namens `cmd` („die Eingabeaufforderung“), aber dieses entspricht nicht den Unix-Befehlen und ist mit der alten Windows-DOS-Eingabeaufforderung vergleichbar.

Es gibt bessere Programme für ein Terminal-Erlebnis unter Windows, beispielsweise PowerShell ([hier finden Sie Installer](https://github.com/PowerShell/PowerShell)) und Git Bash (das Teil des Toolsets [git for Windows](https://gitforwindows.org/) ist).

Die beste Option für modernes Windows ist jedoch das Windows Subsystem for Linux (WSL) – eine Kompatibilitätsschicht zum Ausführen von Linux-Betriebssystemen direkt innerhalb von Windows 10, mit der Sie ein „echtes Terminal“ direkt unter Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann kostenlos direkt über den Windows Store installiert werden. Die vollständige Dokumentation finden Sie in der [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Dokumentation zum Windows Subsystem for Linux](wsl.png)

Was die Wahl einer Option unter Windows angeht, empfehlen wir dringend, WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools funktionieren ausreichend gut, aber mit einer besseren Übereinstimmung mit Unix-Tools wird Ihnen alles leichter fallen.

#### Randbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die eine Shell startet und sich mit ihr verbindet. Eine Shell ist Ihre Sitzung und Ihre Sitzungsumgebung (in der beispielsweise die Eingabeaufforderung und Tastenkürzel angepasst sein können). Die Befehlszeile ist die tatsächliche Zeile, in die Sie Befehle eingeben und in der der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl über die Befehlszeile eine große Fülle an Tools verfügbar ist, gibt es bei der Verwendung von Tools wie [Visual Studio Code](https://code.visualstudio.com/) auch zahlreiche Erweiterungen, die als Proxy dienen können, um Terminalbefehle zu verwenden, ohne das Terminal direkt nutzen zu müssen. Sie werden jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden – irgendwann müssen Sie Erfahrungen mit dem Terminal sammeln.

## Grundlegende integrierte Terminalbefehle

Genug geredet – sehen wir uns einige Terminalbefehle an! Standardmäßig kann die Befehlszeile unter anderem die folgenden Dinge erledigen, zusammen mit den Namen der jeweils relevanten Tools:

- Durch das Dateisystem Ihres Computers navigieren sowie grundlegende Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:
  - Sich in Ihrer Verzeichnisstruktur bewegen: `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und ihre Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien herunterladen, die unter bestimmten URLs zu finden sind: `curl`
- Nach Textfragmenten in größeren Textmengen suchen: `grep`
- Den Inhalt einer Datei seitenweise anzeigen: `less`, `cat`
- Textströme bearbeiten und umwandeln (beispielsweise alle Vorkommen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Im Web gibt es eine Reihe guter Tutorials, die viel tiefer in die Befehlszeile einsteigen – dies ist nur eine kurze Einführung!

Gehen wir weiter und sehen uns an, wie einige dieser Tools auf der Befehlszeile verwendet werden. Bevor Sie fortfahren, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile verwenden, müssen Sie zwangsläufig zu einem bestimmten Verzeichnis navigieren, um „etwas zu tun“. Alle Betriebssysteme (bei einer Standardkonfiguration) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> „Directory“ ist der Fachbegriff für das, was wir im vorherigen Artikel „folder“ genannt haben. Beim Betrachten der Dateistruktur in einer Benutzeroberfläche (UI) ist der Begriff „folder“ sinnvoller, da die verwendeten Symbole wie physische Ablageordner der alten Schule aussehen. Dennoch hört man den Begriff „directory“ ebenfalls häufig, insbesondere wenn es um die Bearbeitung von Dateien über die Befehlszeile geht. Es gibt feine Unterschiede, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Der Befehl `cd` ermöglicht Ihnen, das Verzeichnis zu wechseln (Change Directory). Technisch gesehen ist cd kein Programm, sondern ein integrierter Befehl. Das bedeutet, dass Ihr Betriebssystem ihn standardmäßig bereitstellt und dass Sie ihn nicht versehentlich löschen können – zum Glück! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl integriert ist oder nicht, aber bedenken Sie, dass integrierte Befehle auf allen Unix-basierten Systemen vorhanden sind.

1. Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, in das Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

   ![Ergebnisse der Ausführung des Befehls cd Desktop in verschiedenen Windows-Terminals – der Terminalstandort wechselt auf den Desktop](win-terminals-cd.png)

2. Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um wieder in das vorherige Verzeichnis zurückzugehen, können Sie zwei Punkte verwenden. Geben Sie jetzt Folgendes ein:

   ```bash
   cd ..
   ```

> [!NOTE]
> Ein sehr nützliches Terminal-Tastenkürzel ist die Verwendung der Taste <kbd>Tab</kbd>, um Namen, die bekanntermaßen vorhanden sind, automatisch zu vervollständigen, anstatt sie vollständig ausschreiben zu müssen. Nachdem Sie beispielsweise die beiden obigen Befehle eingegeben haben, versuchen Sie, `cd D` einzugeben und <kbd>Tab</kbd> zu drücken – der Verzeichnisname `Desktop` sollte automatisch vervollständigt werden, sofern er im aktuellen Verzeichnis vorhanden ist. Behalten Sie dies im Hinterkopf, wenn Sie fortfahren.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief verschachtelt ist, müssen Sie den Pfad dorthin kennen. Das wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden. Wenn Sie sich jedoch über den Pfad nicht sicher sind, können Sie ihn in der Regel durch eine Kombination aus dem Befehl `ls` (siehe unten) und Klicks in Ihrem Explorer-/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Wenn Sie beispielsweise zu einem Verzeichnis namens `src` wechseln möchten, das sich in einem Verzeichnis namens `project` befindet, das auf dem _Desktop_ liegt, könnten Sie diese drei Befehle eingeben, um von Ihrem _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung – stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie beim Angeben von Pfaden zu Bildern oder anderen Assets in CSS-, HTML- oder JavaScript-Code:

```bash
cd Desktop/project/src
```

Beachten Sie, dass ein vorangestellter Schrägstrich Ihren Pfad absolut macht, beispielsweise `/Users/your-user-name/Desktop`. Wenn Sie den führenden Schrägstrich weglassen, wie wir es oben getan haben, wird der Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, wie Sie es bei URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet „an der Wurzel der Website“, während das Weglassen des Schrägstrichs bedeutet: „Die URL ist relativ zu meiner aktuellen Seite“.

> [!NOTE]
> Unter Windows verwenden Sie umgekehrte Schrägstriche statt Schrägstrichen, z. B. `cd Desktop\project\src` – das mag sehr seltsam erscheinen, aber wenn Sie wissen möchten, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, der eine Erklärung von einem Principal Engineer bei Microsoft enthält.

### Verzeichnisinhalte auflisten

Ein weiterer integrierter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Windows-Standard-Eingabeaufforderung (`cmd`) verwenden – das entsprechende Kommando lautet dort `dir`.

Versuchen Sie jetzt, dies in Ihrem Terminal auszuführen:

```bash
ls
```

Dadurch erhalten Sie eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind sehr einfach – Sie erhalten nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt oder andere Informationen. Glücklicherweise kann eine kleine Änderung der Befehlsverwendung Ihnen viel mehr Informationen liefern.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – das sind Modifizierer, die Sie am Ende eines Befehls hinzufügen und die sein Verhalten leicht verändern. Diese bestehen üblicherweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich und einem oder mehreren Buchstaben.

Probieren Sie beispielsweise Folgendes aus und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` liefert die Option `-l` (_Bindestrich ell_) eine Auflistung mit einer Datei oder einem Verzeichnis pro Zeile und deutlich mehr angezeigten Informationen. Verzeichnisse können Sie daran erkennen, dass auf der ganz linken Seite der Zeilen ein Buchstabe „d“ steht. Das sind die Verzeichnisse, in die wir mit `cd` wechseln können.

Unten sehen Sie einen Screenshot mit einem „einfachen“ macOS-Terminal oben und einem angepassten Terminal mit zusätzlichen Symbolen und Farben, damit es lebendiger aussieht – beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein einfaches macOS-Terminal und ein farbenfroheres angepasstes macOS-Terminal mit einer Dateiliste – das Ergebnis der Ausführung des Befehls ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen für jeden Befehl genau verfügbar sind, können Sie dessen [man page](https://en.wikipedia.org/wiki/Man_page) ansehen. Dazu geben Sie den Befehl `man` gefolgt vom Namen des Befehls ein, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dadurch wird die man page im Standard-Textdateibetrachter des Terminals geöffnet (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann mit den Pfeiltasten oder einem ähnlichen Mechanismus durch die Seite scrollen können. Die man page führt alle Optionen sehr detailliert auf, was anfangs etwas einschüchternd sein kann, aber zumindest wissen Sie dann, dass sie vorhanden ist, falls Sie sie benötigen. Wenn Sie die man page nicht mehr ansehen möchten, müssen Sie sie mit dem Beenden-Befehl Ihres Textbetrachters verlassen („q“ in `less`; möglicherweise müssen Sie im Web danach suchen, falls dies nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise alle in einer einzigen Zeichenfolge nach dem Bindestrichzeichen angeben, zum Beispiel `ls -lah` oder `ls -ltrh`. Sehen Sie sich die man page von `ls` an, um herauszufinden, was diese zusätzlichen Optionen tun!

Nachdem wir nun zwei grundlegende Befehle besprochen haben, erkunden Sie Ihr Verzeichnis ein wenig und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, kopieren, verschieben, löschen

Es gibt eine Reihe weiterer grundlegender Hilfsbefehle, die Sie bei der Arbeit mit dem Terminal wahrscheinlich ziemlich häufig verwenden werden. Sie sind recht einfach, daher werden wir sie nicht so ausführlich wie die vorherigen beiden erklären.

Probieren Sie sie in einem Testverzeichnis aus, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen. Verwenden Sie die folgenden Beispielbefehle als Anleitung:

- `mkdir` – erstellt ein neues Verzeichnis innerhalb des aktuellen Verzeichnisses, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel erstellt `mkdir my-awesome-website` ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` – entfernt das benannte Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel entfernt `rmdir my-awesome-website` das oben erstellte Verzeichnis. Wenn Sie ein nicht leeres Verzeichnis entfernen möchten (und außerdem alles löschen möchten, was es enthält), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich im Verzeichnis nichts befindet, was Sie später noch benötigen könnten, da es für immer verschwunden sein wird.
- `touch` – erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel erstellt `touch mdn-example.md` eine neue leere Datei namens `mdn-example.md`.
- `mv` – verschiebt eine Datei vom ersten angegebenen Dateispeicherort zum zweiten angegebenen Dateispeicherort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber praktisch betrachtet benennt dieser Befehl die Datei um.
- `cp` – ähnlich wie `mv` verwendet, erstellt `cp` eine Kopie der Datei am ersten angegebenen Speicherort am zweiten angegebenen Speicherort. Zum Beispiel erstellt `cp mdn-example.txt mdn-example.txt.bak` eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können sie natürlich auch anders nennen, wenn Sie möchten).
- `rm` – entfernt die angegebene Datei. Zum Beispiel löscht `rm mdn-example.txt` eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise in Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle ermöglichen Ihnen, Sternchen als Platzhalterzeichen zu verwenden, was „jede Zeichenfolge“ bedeutet. Damit können Sie eine Operation auf potenziell sehr viele Dateien gleichzeitig anwenden, die alle dem angegebenen Muster entsprechen. Als Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal – als schädlich betrachtet?

Wir haben dies bereits angedeutet, aber um es klar zu sagen: Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle bergen nicht allzu viele Gefahren, aber sobald Sie komplexere Befehle zusammenstellen, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, ihn zunächst zu testen, bevor Sie ihn schließlich im vorgesehenen Verzeichnis ausführen.

Nehmen wir an, Sie hätten 1000 Textdateien in einem Verzeichnis und wollten sie alle durchgehen und nur diejenigen löschen, die eine bestimmte Teilzeichenfolge im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dabei viel Arbeit verlieren.
Eine gute Gewohnheit ist es, Ihren Terminalbefehl zuerst in einem Texteditor zu schreiben, herauszufinden, wie er Ihrer Meinung nach aussehen sollte, dann eine Sicherungskopie Ihres Verzeichnisses anzulegen und den Befehl zunächst darauf auszuführen, um ihn zu testen.

Falls Sie sich nicht wohl dabei fühlen, Terminalbefehle auf Ihrem eigenen Rechner auszuprobieren, gibt es gehostete Online-Terminals, die sichere Orte bieten, um die Eingabe von Befehlen zu üben, ohne zu riskieren, Ihren eigenen Rechner zu beschädigen:

- Unser Lernpartner [Scrimba](https://scrimba.com/home?via=mdn) bietet in seiner Lernumgebung ein Terminal zum Eingeben von Befehlen. Ein großartiger Ort, um dies in Aktion zu sehen, ist der Kurs [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, der außerdem eine unterhaltsame interaktive Einführung in die Navigation durch den Dateibaum und die Bearbeitung von Dateien und Verzeichnissen über das Terminal bietet.
- Der [Command-line playground](https://sandbox.bio/playgrounds/terminal) auf sandbox.bio ist ein großartiger Ort, um Terminalbefehle auszuprobieren, damit Sie sich mit Befehlszeilenschnittstellen und gängigen Shells wie Bash vertraut machen können.

Eine großartige Ressource für einen schnellen Überblick über bestimmte Terminalbefehle ist [tldr.sh](https://tldr.sh/). Dies ist ein von der Community betriebener Dokumentationsdienst, ähnlich wie MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt erhöhen wir die Schwierigkeit etwas (oder eigentlich um mehrere Stufen) und sehen uns an, wie wir Tools auf der Befehlszeile miteinander verbinden können, um wirklich zu erkennen, warum das Terminal gegenüber der normalen Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet seine Stärken erst richtig, wenn Sie beginnen, Befehle mithilfe des Symbols `|` (Pipe) miteinander zu verketten. Sehen wir uns ein sehr schnelles Beispiel dafür an, was das bedeutet.

Wir haben bereits `ls` betrachtet, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Was aber, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen möchten? `ls` kann das allein nicht.

Es gibt ein weiteres verfügbares Unix-Tool namens `wc`. Dieses zählt die Anzahl von Wörtern, Zeilen, Zeichen oder Bytes von allem, was ihm als Eingabe übergeben wird. Dies kann eine Textdatei sein – das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Es kann jedoch auch die Anzahl der Zeilen von beliebiger Ausgabe zählen, die an es **weitergeleitet** wird. Der folgende Befehl zählt beispielsweise die Anzahl der Zeilen, die vom Befehl `ls` ausgegeben werden (was normalerweise im Terminal ausgegeben würde, wenn der Befehl allein ausgeführt wird), und gibt stattdessen diese Anzahl im Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile ausgibt, erhalten wir so effektiv eine Anzahl der Verzeichnisse und Dateien.

Was passiert hier also? Eine allgemeine Philosophie von (Unix-)Befehlszeilentools ist, dass sie Text im Terminal ausgeben (auch als „printing to standard output“ oder `STDOUT` bezeichnet). Viele Befehle können außerdem Inhalte aus gestreamter Eingabe lesen (als „standard input“ oder `STDIN` bekannt).

Der Pipe-Operator kann diese Ein- und Ausgaben _verbinden_, sodass wir zunehmend komplexere Operationen erstellen können, die unseren Anforderungen entsprechen – die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` seine Ausgabe normalerweise nach `STDOUT` schreiben, stattdessen wird die Ausgabe von `ls` jedoch an `wc` weitergeleitet, das diese Ausgabe als Eingabe verwendet, die Anzahl der darin enthaltenen Zeilen zählt und stattdessen diese Anzahl nach `STDOUT` ausgibt.

## Ein etwas komplexeres Beispiel

Gehen wir etwas Komplizierteres durch.

1. Zuerst versuchen wir, den Inhalt der „fetch“-Seite von MDN mit dem Befehl `curl` abzurufen (der zum Anfordern von Inhalten von URLs verwendet werden kann), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Sie erhalten keine Ausgabe, da die Seite weitergeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` mithilfe des Flags `-L` explizit anweisen, Weiterleitungen zu folgen.

2. Sehen wir uns außerdem die Header an, die `developer.mozilla.org` mit dem Flag `-I` von `curl` zurückgibt, und geben wir alle Weiterleitungen mit location aus, die an das Terminal gesendet werden. Dazu leiten wir die Ausgabe von `curl` an `grep` weiter (wir weisen `grep` an, alle Zeilen zurückzugeben, die das Wort „location“ enthalten). Führen Sie Folgendes aus (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Ihre Ausgabe sollte ungefähr so aussehen (`curl` gibt zunächst einige Download-Zähler und Ähnliches aus):

   ```bash
   location: /en-US/docs/Web/API/Window/fetch
   ```

3. Obwohl es konstruiert ist, könnten wir dieses Ergebnis noch etwas weiterverarbeiten und den Inhalt der Zeile `location:` umwandeln, indem wir den Basis-Origin am Anfang jeder Zeile hinzufügen, sodass vollständige URLs ausgegeben werden. Dafür fügen wir `awk` hinzu (eine Programmiersprache ähnlich wie JavaScript, Ruby oder Python, nur deutlich älter!). Versuchen Sie Folgendes auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihre endgültige Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Durch die Kombination dieser Befehle haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, über die der Mozilla-Server weiterleitet, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Ihr System kennenzulernen, wird sich in den kommenden Jahren als nützlich erweisen – lernen Sie, wie diese Tools für einzelne Aufgaben funktionieren und wie sie Teil Ihres Toolkits zur Lösung spezieller Probleme werden können.

## Erweiterungen hinzufügen

Nachdem wir uns einige der integrierten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, sehen wir uns an, wie wir ein CLI-Tool eines Drittanbieters installieren und verwenden können.

Das große Ökosystem installierbarer Tools für die Frontend-Webentwicklung befindet sich derzeit größtenteils in [npm](https://www.npmjs.com/), einem privat betriebenen Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam – Sie können erwarten, dass im Laufe der Zeit mehr Paketanbieter hinzukommen.

Durch die Installation von [Node.js](https://nodejs.org/en/) wird auch das Befehlszeilentool npm installiert (sowie ein ergänzendes, auf npm ausgerichtetes Tool namens npx), das einen Zugang zur Installation zusätzlicher Befehlszeilentools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie die oben genannte URL aufrufen und einen für Ihr Betriebssystem passenden Node.js-Installer herunterladen und ausführen. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm in die Installation einbezogen wird.

![Der Node.js-Installer unter Windows, der die Option zum Einbeziehen von npm zeigt](npm-install-option.png)

Wir verwenden hier wieder [Prettier](https://prettier.io/) als Beispiel. Wir haben gezeigt, wie Sie es als VS-Code-Erweiterung in unserem Artikel [Code editors](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) installieren. Hier zeigen wir Ihnen, wie Sie es als Befehlszeilentool installieren.

> [!NOTE]
> Prettier ist ein meinungsstarker Code-Formatierer, der nur über „wenige Optionen“ verfügt. Weniger Optionen bedeuten tendenziell mehr Einfachheit. Da Tooling in Bezug auf Komplexität manchmal außer Kontrolle geraten kann, können „wenige Optionen“ sehr attraktiv sein.

### Wo sollten wir unsere CLI-Tools installieren?

Bevor wir uns mit der Installation von Prettier befassen, gibt es eine Frage zu beantworten: „Wo sollten wir es installieren?“

Mit `npm` können wir Tools global installieren – sodass wir überall darauf zugreifen können – oder lokal im aktuellen Projektverzeichnis.

Beide Möglichkeiten haben Vor- und Nachteile – und die folgenden Listen der Vor- und Nachteile einer globalen Installation sind bei weitem nicht vollständig.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal verfügbar
- Nur einmal installieren
- Benötigt weniger Speicherplatz
- Immer dieselbe Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit der Codebasis Ihres Projekts kompatibel
- Andere Entwicklerinnen und Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, etwa wenn Sie die Codebasis über ein Tool wie git teilen.
- In Zusammenhang mit dem vorherigen Punkt: Der Projektcode lässt sich schwerer reproduzieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, können die negativen Auswirkungen einer globalen Installation potenziell wesentlich größer sein als die Vorteile.
Hier installieren wir lokal, aber Sie können sie gerne global installieren, sobald Sie die jeweiligen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarkes Tool zur Codeformatierung für Frontend-Entwicklerinnen und -Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Den kognitiven Aufwand sparen, den Stil manuell über alle Ihre Codedateien hinweg konsistent zu halten; Prettier kann dies automatisch für Sie erledigen.
- Neulingen in der Webentwicklung helfen, ihren Code gemäß Best Practices zu formatieren.
- Auf jedem Betriebssystem und sogar direkt als Teil des Projekt-Toolings installiert werden, um sicherzustellen, dass Kolleginnen, Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Codestil nutzen.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Tooling, das wir später im Modul sehen werden).

Für diesen Artikel installieren wir Prettier lokal, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

1. Sobald Sie node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (was `--save-dev` bewirkt, erklären wir im nächsten Artikel):

   ```bash
   npm install --save-dev prettier
   ```

2. Sie können die Datei nun lokal mithilfe des Tools [npx](https://docs.npmjs.com/cli/commands/npx/) ausführen. Wie bei vielen anderen Befehlen werden bei der Ausführung ohne Argumente Informationen zur Verwendung und Hilfe angeboten. Probieren Sie das jetzt aus:

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

Es lohnt sich immer, zumindest die Nutzungsinformationen zu überfliegen, selbst wenn sie lang sind.
Dies hilft Ihnen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, lädt und führt `npx prettier` die neueste Version von Prettier in einem Schritt aus – _nur für diesen Befehl_.
> Das mag großartig klingen, aber neue Versionen von Prettier können die Ausgabe leicht verändern.
> Sie sollten es lokal installieren, damit die Version von Prettier, die Sie für die Formatierung verwenden, festgelegt bleibt, bis Sie bereit sind, sie zu ändern.

### Mit Prettier experimentieren

Lassen Sie uns kurz mit Prettier experimentieren, damit Sie sehen können, wie es funktioniert.

1. Erstellen Sie zunächst irgendwo in Ihrem Dateisystem ein neues Verzeichnis, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` innerhalb Ihres Testverzeichnisses:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier auf einer Codebasis ausführen, um lediglich zu prüfen, ob unser Code angepasst werden soll. Wechseln Sie mit `cd` in Ihr Verzeichnis und versuchen Sie, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

   Sie sollten eine Ausgabe ähnlich der folgenden erhalten:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Es gibt also einige Code-Stile, die korrigiert werden können. Kein Problem. Durch Hinzufügen der Option `--write` zum Befehl `prettier` werden diese korrigiert, sodass wir uns auf das Schreiben tatsächlich nützlichen Codes konzentrieren können. Versuchen Sie nun, diese Version des Befehls auszuführen:

   ```bash
   npx prettier --write index.js
   ```

   Sie erhalten eine Ausgabe wie diese:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Wichtiger ist jedoch: Wenn Sie wieder in Ihre JavaScript-Datei schauen, werden Sie feststellen, dass sie ungefähr wie folgt neu formatiert wurde:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich die Stärke von Tools; wir bevorzugen persönlich die Art von Automatisierung, die „einfach passiert“, ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es mehrere Möglichkeiten zur Automatisierung. Sie gehen zwar über den Umfang dieses Artikels hinaus, aber im Internet gibt es hervorragende Ressourcen, die helfen (einige davon wurden verlinkt). Sie können Prettier ausführen:

- Bevor Sie Ihren Code mit [Husky](https://github.com/typicode/husky) in ein git-Repository committen.
- Jedes Mal, wenn Sie in Ihrem Code-Editor auf „Speichern“ klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von Prüfungen zur {{Glossary("continuous_integration", "continuous integration")}} mithilfe von Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Möglichkeit – während wir beispielsweise VS Code verwenden, wird Prettier aktiv und bereinigt bei jedem Speichern alle erforderlichen Formatierungen. In der [Prettier-Dokumentation](https://prettier.io/docs/) finden Sie wesentlich mehr Informationen über die unterschiedliche Verwendung von Prettier.

## Weitere Tools zum Ausprobieren

Wenn Sie mit einigen weiteren Tools experimentieren möchten, finden Sie hier eine kurze Liste, die Spaß macht:

- [`bat`](https://github.com/sharkdp/bat) – Ein „besseres“ `cat` (`cat` wird verwendet, um den Inhalt von Dateien auszugeben).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) – `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu prüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) – Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Düsentriebwerk arbeiten lässt und Sie das verursachende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) – bereits früher in diesem Kapitel erwähnt, aber als Befehlszeilentool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es bei Prettier getan haben.

## Zusammenfassung

Damit sind wir am Ende unserer Einführungstour durch das Terminal/die Befehlszeile und das Modul zur Einrichtung der Entwicklungsumgebung angelangt. Als Nächstes beginnen Sie mit dem Erstellen Ihrer ersten einfachen Website, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
