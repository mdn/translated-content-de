---
title: Kommandozeilen-Crashkurs
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder auf der "Kommandozeile" – diese bedeuten effektiv dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie Sie Befehle miteinander verketten und wie Sie Ihre eigenen Kommandozeilen-Interface (CLI)-Tools hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit dem Betriebssystem Ihres Computers, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Kommandozeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie die Kommandozeile auf verschiedenen Systemen aufrufen können.</li>
          <li>Kennen von grundlegenden Tastenkombinationen (zum Beispiel Pfeiltaste nach oben, um auf vorherige Befehle zuzugreifen, Tabulator für Autovervollständigung).</li>
          <li>Kennen von grundlegenden Befehlen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung von textbasierten Programmen. Wenn Sie Entwicklungstools für das Web verwenden, wird nahezu garantiert, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** bezeichnet – Kommandozeilen-Interface-Tools).

Eine Vielzahl von Tools kann durch Eingabe von Befehlen in die Kommandozeile verwendet werden; viele sind auf Ihrem System vorinstalliert, und eine große Anzahl anderer kann aus Paketregistern installiert werden. Paketregister sind wie App-Stores, aber (meistens) für Kommandozeilen-basierte Tools und Software. Wir sehen später in diesem Kapitel, wie man einige Tools installiert, und lernen im nächsten Kapitel mehr über Paketregister.

Eine der größten Kritiken an der Kommandozeile ist, dass sie in der Benutzererfahrung enorm mangelt. Zum ersten Mal die Kommandozeile zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe dazu, was zu tun ist.

Auf den ersten Blick scheinen sie weit entfernt von einladend zu sein, aber es gibt viel, was man mit ihnen tun kann, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu verwenden! Aus diesem Grund bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt nicht wirklich dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig über die Geschichte in Wikipedias Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Rechnern bis zu Servern, die in der Cloud versteckt sind, zu Mikrocomputern wie dem Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem und die niedrigen Ebenen des Computers und ist daher unglaublich nützlich, um komplexe Aufgaben schnell zu erledigen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für Automatisierung – zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder oder Explorer GUI-App aktualisieren würden, würde es lange dauern.

Wie dem auch sei, das Terminal wird so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die verfügbar sind und die Sie zu einem Terminal führen können.

Die nächsten Bilder zeigen die Befehlsaufforderungen von Windows – es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zu "powershell" – die über das Startmenü gestartet werden können, indem Sie den Programmnamen eingeben.

![Ein einfaches Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches vanilla macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z.B. das Terminal und die Tools, auf die Sie über es zugreifen können). Viele vorhandene Tutorials und Tools im Web unterstützen (und nehmen leider an) Unix-basierte Systeme an, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt sehen wir, wie Sie auf das Terminal auf Ihrem gewählten System zugreifen können.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgelistet ist.

#### macOS

macOS hat ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die Tools auf niedriger Ebene bereitstellt. macOS Darwin hat im Wesentlichen Parität mit Unix, sicherlich gut genug, um uns keine Sorgen zu bereiten, während wir diesen Artikel durchgehen.

Das Terminal ist unter macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Kommandozeile) unter Windows traditionell nicht so einfach oder einfach wie unter anderen Betriebssystemen. Aber die Dinge entwickeln sich zum Besseren.

Windows hatte lange Zeit ein eigenes terminalähnliches Programm namens `cmd` ("die Eingabeaufforderung"), aber dies hat keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren, um ein Terminalerlebnis unter Windows zu bieten, wie PowerShell ([sehen Sie hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)) und Gitbash (das Teil des [Git für Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der modernen Zeit ist jedoch das Windows-Subsystem für Linux (WSL) — eine Kompatibilitätsschicht zur direkten Ausführung von Linux-Betriebssystemen innerhalb von Windows 10, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows auszuführen, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows-Store kostenlos installiert werden. Alle benötigten Dokumentationen finden Sie in der [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Windows Subsystem for Linux-Dokumentation](wsl.png)

In Bezug darauf, welche Option Sie unter Windows wählen sollten, empfehlen wir dringend, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden OK arbeiten, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Randnotiz: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Generell werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die einen Shell startet und damit verbindet. Ein Shell ist Ihre Sitzung und Ihre Session-Umgebung (wo Dinge wie die Eingabeaufforderung und Verknüpfungen angepasst werden könnten). Die Kommandozeile ist die buchstäbliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Fülle an Tools von der Kommandozeile aus verfügbar gibt, gibt es auch eine Masse von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu nutzen, ohne das Terminal direkt verwenden zu müssen, wenn Sie Tools wie [Visual Studio Code](https://code.visualstudio.com/) verwenden. Es wird jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung geben — Sie müssen irgendwann etwas Erfahrung mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — lassen Sie uns einige Terminalbefehle ansehen! Aus dem Karton heraus kann die Kommandozeile einige Dinge tun, zusammen mit den Namen der relevanten Tools in jedem Fall:

- Navigieren Sie durch das Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Fragmente von Text innerhalb größerer Textkörper durchsuchen: `grep`
- Inhalt einer Datei Seite für Seite anzeigen: `less`, `cat`
- Ströme von Text manipulieren und transformieren (zum Beispiel alle Instanzen von `<div>` in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe von guten Tutorials im Web, die viel tiefer in die Kommandozeile einsteigen — dies ist nur eine kurze Einführung!

Lassen Sie uns voranschreiten und sehen, wie wir einige dieser Tools in der Kommandozeile verwenden. Bevor Sie weitergehen, öffnen Sie Ihr Terminal-Programm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile betreten, müssen Sie sich zwangsläufig zu einem bestimmten Verzeichnis bewegen, um "etwas zu tun". Alle Betriebssysteme (angenommen, eine Standardeinstellung) starten ihr Terminal-Programm in Ihrem _Home_-Verzeichnis und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der Fachbegriff für das, was wir im vorherigen Artikel als "Ordner" bezeichnet haben. Wenn man die Dateistruktur innerhalb einer Benutzeroberfläche (UI) betrachtet, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Ablageordner aussehen. Allerdings hört man auch häufig den Begriff "Verzeichnis", insbesondere wenn man über das Manipulieren von Dateien mithilfe der Kommandozeile spricht. Es gibt Feinheiten, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu ändern. Technisch gesehen ist cd kein Programm, sondern ein eingebautes Werkzeug. Das bedeutet, dass Ihr Betriebssystem es von Haus aus bereitstellt und auch, dass Sie es nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber beachten Sie, dass eingebaute Funktionen auf allen Unix-basierten Systemen vorhanden sind.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![Ergebnisse des Befehls cd Desktop, der in einer Vielzahl von Windows-Terminals ausgeführt wird – der Terminal-Standort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in Ihr Terminal einzugeben:

```bash
cd Desktop
```

Wenn Sie in das vorherige Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>Tab</kbd>-Taste, um Namen, die Sie kennen, automatisch zu vervollständigen, anstatt die ganze Sache eintippen zu müssen. Probieren Sie nach dem Eingeben der oben genannten beiden Befehle, `cd D` gefolgt von <kbd>Tab</kbd> einzugeben — es sollte den Verzeichnisnamen `Desktop` für Sie automatisch vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, während Sie vorankommen.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, wenn Sie sich mit der Struktur Ihres Dateisystems vertraut machen, aber wenn Sie sich über den Pfad nicht sicher sind, können Sie ihn normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo ein Verzeichnis sich befindet, relativ zu Ihrem aktuellen Standort.

Wenn Sie zum Beispiel zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` befindet, das wiederum auf Ihrem _Desktop_ ist, könnten Sie diese drei Befehle verwenden, um von Ihrem _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie Sie es bei der Angabe von Pfaden zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code tun:

```bash
cd Desktop/project/src
```

Achten Sie darauf, dass das Einschließen eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/your-user-name/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau das gleiche, wie Sie URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Root der Website", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie umgekehrte Schrägstriche anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, in dem einer der Hauptingenieure von Microsoft die Erklärung liefert.

### Verzeichnisinhalt auflisten

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses, in dem Sie sich gerade befinden, auflistet. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich rudimentär — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt oder irgendetwas anderes. Zum Glück kann eine kleine Änderung der Befehl

snutzung Ihnen viel mehr Informationen liefern.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifier, die Sie an das Ende eines Befehls anhängen, wodurch er sich auf eine etwas andere Weise verhält. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie das aus und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Falle von `ls` gibt Ihnen die Option `-l` (_Bindestrich ell_) eine Liste mit einer Datei oder einem Verzeichnis in jeder Zeile und zeigt viel mehr Informationen an. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" auf der ganz linken Seite der Zeilen sucht. Diese sind die, in die wir `cd` verwenden können.

Unten ist ein Screenshot mit einem "vanilla" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig aussehen zu lassen — beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein vanilla macOS-Terminal und ein farbenfroheres benutzerdefiniertes macOS-Terminal, die eine Datei-Liste zeigen - das Ergebnis der Ausführung des ls -l Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen jeder Befehl verfügbar hat, können Sie dessen [man page](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies wird durch Eingabe des Befehls `man`, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls`, durchgeführt. Dies öffnet die Man-Seite im standardmäßigen Textdatei-Viewer des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, mit den Pfeiltasten durch die Seite zu blättern oder einen ähnlichen Mechanismus zu verwenden. Die Man-Seite listet alle Optionen im Detail auf, was zu Beginn etwas überwältigend sein kann, aber zumindest wissen Sie, dass es da ist, wenn Sie es brauchen. Sobald Sie das Durchsehen der Man-Seite beendet haben, müssen Sie sie über den Beendigungsbefehl Ihres Text-Viewers verlassen ("q" in `less`; möglicherweise müssen Sie im Web danach suchen, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie normalerweise nach dem Bindestrich in einer einzigen Zeichenfolge eingeben, z.B. `ls -lah` oder `ls -ltrh`. Versuchen Sie, in der Man-Seite von `ls` nachzuschlagen, um herauszufinden, was diese zusätzlichen Optionen tun!

Nachdem wir nun zwei fundamentale Befehle besprochen haben, sehen Sie sich in Ihrem Verzeichnis um und sehen, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich ziemlich oft verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle so detailliert wie die beiden vorherigen erklären.

Spielen Sie mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, herum, damit Sie nicht versehentlich etwas Wichtiges löschen, indem Sie die untenstehenden Beispielbefehle als Leitfaden verwenden:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, indem Sie den Namen nach dem Befehlsnamen angeben. Zum Beispiel erstellt `mkdir mein-tolles-webseite` ein neues Verzeichnis namens `mein-tolles-webseite`.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel entfernt `rmdir mein-tolles-webseite` das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis löschen möchten, das nicht leer ist (und auch alles, was es enthält, entfernen), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich darin nichts befindet, was Sie später brauchen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel erstellt `touch mdn-beispiel.md` eine neue leere Datei namens `mdn-beispiel.md`.
- `mv` — verschiebt eine Datei vom ersten angegebenen Dateispeicherort zum zweiten angegebenen Dateispeicherort, zum Beispiel `mv mdn-beispiel.md mdn-beispiel.txt` (die Speicherorte sind als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-beispiel.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-beispiel.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird mit diesem Befehl die Datei tatsächlich umbenannt.
- `cp` — ähnlich im Gebrauch wie `mv`, erstellt `cp` eine Kopie der Datei am ersten angegebenen Speicherort am zweiten angegebenen Speicherort. Zum Beispiel erstellt `cp mdn-beispiel.txt mdn-beispiel.txt.bak` eine Kopie von `mdn-beispiel.txt` namens `mdn-beispiel.txt.bak` (Sie können es natürlich auch anders nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel löscht `rm mdn-beispiel.txt` eine einzelne Datei namens `mdn-beispiel.txt`. Beachten Sie, dass dieses Löschen permanent ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben Ihnen die Verwendung von Sternchen als "Wildcards", das bedeutet "jede Zeichenfolge". Dies erlaubt es Ihnen, eine Operation gegen eine potenziell große Anzahl von Dateien gleichzeitig auszuführen, die alle dem angegebenen Muster entsprechen. Als ein Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben dies zuvor angedeutet, aber um es klar zu sagen — Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle bergen nicht allzu viel Gefahr, aber wenn Sie beginnen, komplexere Befehle zu kombinieren, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im vorgesehenen Verzeichnis ausführen.

Sagen wir, Sie hätten 1000 Textdateien in einem Verzeichnis, und Sie möchten alle durchgehen und nur die löschen, die einen bestimmten Teilstring im Dateinamen haben. Wenn Sie nicht aufpassen, könnten Sie am Ende etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren.
Eine gute Gewohnheit ist es, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie Sie denken, dass er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu machen und zu versuchen, den Befehl zuerst darauf auszuführen, um ihn zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht wohlfühlen, Terminalbefehle auf Ihrem eigenen Rechner auszuprobieren, ist ein sicherer Ort, um sie auszuprobieren, über [Glitch.com](https://glitch.com/). Neben einem großartigen Ort, um Webentwicklungs-Code auszuprobieren, bieten die Projekte auch Zugriff auf ein Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, in dem Wissen, dass Sie Ihren eigenen Rechner nicht kaputt machen.

![Ein Doppelscreenshot, der die glitch.com-Startseite und den glitch-Terminalemulator zeigt](glitch.png)

Eine großartige Ressource für einen schnellen Überblick über spezifische Terminalbefehle ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-gesteuerter Dokumentationsdienst, ähnlich wie MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt lassen Sie uns den Schwierigkeitsgrad eine Stufe (oder tatsächlich mehrere Stufen) anheben und sehen, wie wir Werkzeuge auf der Kommandozeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal im Vergleich zur regulären Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet wirklich sein Potenzial, wenn Sie beginnen, Befehle mithilfe des `|` (Pipe)-Symbols miteinander zu verketten. Lassen Sie uns ein sehr schnelles Beispiel dafür ansehen, was das bedeutet.

Wir haben bereits `ls` gesehen, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was ist, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen möchten? `ls` kann das nicht alleine.

Es gibt ein weiteres Unix-Tool namens `wc`, das die Anzahl der Wörter, Zeilen, Zeichen oder Bytes dessen zählt, was ihm zugeführt wird. Dies kann eine Textdatei sein — das folgende Beispiel gibt die Anzahl der Zeilen in `meinedatei.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen dessen zählen, was ihm **gepipelt** wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die der `ls`-Befehl ausgibt (was er normalerweise ausdrucken würde, wenn er alleine ausgeführt wird) und gibt diese Zählung stattdessen ins Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile ausgibt, gibt uns das effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (Unix-)Befehlszeilentools ist, dass sie Text ins Terminal drucken (auch als "Drucken auf Standardausgabe" oder `STDOUT` bezeichnet). Eine gute Anzahl von Befehlen kann auch Inhalte von gestreamtem Input lesen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Inputs und Outputs miteinander _verbinden_, sodass wir immer komplexere Operationen erstellen können, um unsere Bedürfnisse zu erfüllen — die Ausgabe eines Befehls kann zum Input des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe auf `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepipelt, das diese Ausgabe als Input nimmt, die Anzahl der Zeilen zählt, die sie enthält, und diese Anzahl stattdessen auf `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas Komplexeres durchgehen.

Wir werden zuerst versuchen, den Inhalt der MDN-"fetch"-Seite mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit anweisen, Umleitungen mit dem `-L`-Flag zu folgen.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` mithilfe des `curl`-Flags `-I` zurückgibt, und alle Umleitungsstandorte, die es an das Terminal sendet, ausgeben, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Download-Zähler und ähnliches ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis noch weiter ausbauen und die `location:`-Zeileninhalte transformieren, indem wir den Basisursprung am Anfang jeder hinzufügen, sodass wir vollständige URLs ausgegeben bekommen.
Dafür fügen wir `awk` hinzu (welches eine Programmiersprache ähnlich JavaScript oder Ruby oder Python ist, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Durch das Kombinieren dieser Befehle haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, die der Mozilla-Server beim Anfordern der `/docs/Web/API/WindowOrWorkerGlobalScope/fetch`-URL durchläuft.
Ihr System kennen zu lernen, wird in den kommenden Jahren nützlich sein — lernen Sie, wie diese individuellen Hilfsprogramme funktionieren, und wie sie Teil Ihres Toolkits werden können, um Nischenprobleme zu lösen.

## Aufrüstungen hinzufügen

Jetzt, da wir uns einige der eingebauten Kommandos angesehen haben, mit denen Ihr System ausgestattet ist, sehen wir uns an, wie wir ein drittes CLI-Tool installieren und es nutzen können.

Das riesige Ökosystem installierbarer Tools für die Front-End-Webentwicklung befindet sich derzeit größtenteils innerhalb von [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam — Sie können erwarten, dass mit der Zeit mehr Paketanbieter erscheinen.

[Node.js installieren](https://nodejs.org/en/) installiert auch das npm-Kommandozeilentool (und ein ergänzendes npm-zentriertes Tool namens npx), das einen Zugang zur Installation zusätzlicher Kommandozeilen-Tools bietet. Node.js und npm funktionieren dasselbe auf allen Systemen: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie auf die obige URL gehen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, npm als Teil der Installation einzuschließen.

![der Node.js-Installer unter Windows, der die Option zeigt, npm einzuschließen](npm-install-option.png)

Wir werden erneut [Prettier](https://prettier.io/) als Beispiel hier verwenden. Wir haben gezeigt, wie man es als VS-Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) Artikel installiert. Hier zeigen wir Ihnen, wie Sie es als Kommandozeilen-Tool installieren.

> [!NOTE]
> Prettier ist ein meinungsbetonter Code-Formatter, der nur "wenige Optionen" hat. Weniger Optionen bedeuten in der Regel einfacher. Angesichts dessen, dass Tools manchmal aus dem Ruder laufen in Bezug auf Komplexität, kann "wenige Optionen" sehr verlockend sein.

### Wo sollen unsere CLI-Tools installiert werden?

Bevor wir tiefer in die Installation von Prettier eintauchen, gibt es eine Frage zu beantworten — "Wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren — damit wir überall darauf zugreifen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile für jede Möglichkeit — und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht vollständig.

**Vorteile der globalen Installation:**

- Zugänglich überall in Ihrem Terminal
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht kompatibel mit dem Code Ihrer Projektdatenbank
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, zum Beispiel, wenn Sie die Datenbank über ein Tool wie Git teilen.
- In Verbindung mit dem vorherigen Punkt macht es den Projektcode schwieriger zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten konfiguriert und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_-Liste kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier installieren wir lokal, aber fühlen Sie sich frei, global zu installieren, sobald Sie die damit verbundenen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsbetontes Code-Formatierungstool für Front-End-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Die kognitive Belastung reduzieren, den Stil manuell über alle Ihre Code-Dateien hinweg konsistent zu machen; Prettier kann dies automatisch für Sie tun.
- Anfängern in der Webentwicklung helfen, ihren Code im Best-Practice-Stil zu formatieren.
- Auf jedem Betriebssystem installiert und sogar als direkter Teil des Projektools konfiguriert werden, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Programmierstiel verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen, oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Tooling, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` macht):

```bash
npm install --save-dev prettier
```

Sie können nun die Datei lokal mithilfe des [npx](https://docs.npmjs.com/cli/commands/npx/) Tools ausführen.
Das Ausführen des Befehls ohne Argumente wird, wie bei vielen anderen Befehlen, Nutzungs- und Hilfsinformationen anbieten.
Versuchen Sie es jetzt:

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

Es lohnt sich immer, zumindest die Nutzungsinformationen zu überfliegen, auch wenn sie lang sind.
Es hilft Ihnen, besser zu verstehen, wie das Tool gedacht ist, verwendet zu werden.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird `npx prettier` die neueste Version von Prettier heruntergeladen und für diesen Befehl ausführen.
> Während das großartig klingen mag, können neue Versionen von Prettier die Ausgabe leicht modifizieren.
> Sie möchten es lokal installieren, damit Sie die Version von Prettier, die Sie für die Formatierung verwenden, fixieren, bis Sie bereit sind, es zu ändern.

### Mit Prettier spielen

Lassen Sie uns einen kurzen Blick auf Prettier werfen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen einen Codebasis ausführen, um nur zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe erhalten wie:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Es gibt also einige Codestile, die behoben werden können. Kein Problem. Durch Hinzufügen der `--write`-Option zum `prettier`-Befehl werden diese behoben, sodass wir uns auf das Schreiben von nützlichem Code konzentrieren können.

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

Aber das Wichtigste ist, wenn Sie zu Ihrer JavaScript-Datei zurückkehren, werden Sie feststellen, dass sie in etwa so formatiert wurde:

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

Je nachdem, wie Ihr Arbeitsablauf (oder der Arbeitsablauf, den Sie wählen) aussieht, können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Punkt, an dem Tools glänzen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass man etwas konfigurieren muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann, und obwohl sie den Rahmen dieses Artikels sprengen, gibt es einige ausgezeichnete Ressourcen online, die helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository committen, mit [Husky](https://github.com/typicode/husky).
- Immer wenn Sie in Ihrem Code-Editor auf "Speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von Continuous-Integration-Checks mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — während der Verwendung von VS Code aktiviert sich Prettier und säubert jedes Formatieren, das es tun muss, jedes Mal, wenn wir auf Speichern drücken. Sie finden viel mehr Informationen über die Verwendung von Prettier auf verschiedene Weisen in den [Prettier-Dokumentationen](https://prettier.io/docs/).

## Andere Werkzeuge zum Spielen

Wenn Sie mit ein paar weiteren Tools spielen möchten, hier ist eine kurze Liste, die Spaß macht, auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Strahltriebwerk klingen lässt und Sie das schuldige Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber als Kommandozeilen-Tool erhältlich.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Damit schließen wir unsere Einführungstour durch das Terminal/die Kommandozeile und das Modul zur Einrichtung der Entwicklungsumgebung ab. Als nächstes bringen wir Sie dazu, Ihre erste einfache Website zu erstellen, damit Sie ein Gefühl dafür bekommen, wie sich Webentwicklung anfühlt.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
