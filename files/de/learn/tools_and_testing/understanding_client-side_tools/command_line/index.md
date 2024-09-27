---
title: Crashkurs zur Kommandozeile
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder in der "Kommandozeile" — das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie Sie Befehle verketten und wie Sie Ihre eigenen Command Line Interface (CLI)-Tools hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Terminal/die Kommandozeile ist, welche grundlegenden Befehle Sie lernen sollten und wie Sie neue Kommandozeilen-Tools installieren können.
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie Werkzeuge für die Webentwicklung ausführen, besteht eine nahezu garantierte Chance, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Werkzeuge zu verwenden (solche Werkzeuge werden oft als **CLI-Tools** bezeichnet — Command Line Interface Tools).

Eine große Anzahl von Tools kann verwendet werden, indem man Befehle in die Kommandozeile eingibt; viele sind bereits auf Ihrem System vorinstalliert, und eine riesige Anzahl anderer kann aus Paketregistern installiert werden. Paketregister sind wie App-Stores, aber (meistens) für kommandozeilenbasierte Tools und Software. Wir werden später in diesem Kapitel sehen, wie man einige Tools installiert, und im nächsten Kapitel erfahren wir mehr über Paketregister.

Eine der größten Kritiken an der Kommandozeile ist, dass sie in der Benutzererfahrung erheblich fehlt. Das erste Betrachten der Kommandozeile kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

An der Oberfläche sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir dieses Kapitel an — um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig Geschichte auf Wikipedias Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) nachlesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben — von Desktop-Computern bis zu Servern, die in der Cloud versteckt sind, zu Mikrokonsolen wie dem Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und auf Low-Level-Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, um die Titel von Hunderten von Dateien sofort zu aktualisieren, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrer Finder- oder Explorer-GUI-App aktualisieren würden, würde es lange dauern.

Jedenfalls wird das Terminal so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die verfügbar sind, um Sie zu einem Terminal zu bringen.

Die nächsten Bilder zeigen die Kommandoaufforderungen, die in Windows verfügbar sind — es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zu "powershell" — die vom Startmenü aus durch Eingabe des Programmnamen ausgeführt werden können.

![Ein Standard-Windows-cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminalanwendung von macOS.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greift man auf das Terminal zu?

Viele Entwickler nutzen heute Unix-basierte Werkzeuge (z. B. das Terminal und die Werkzeuge, auf die Sie darüber zugreifen können). Viele Tutorials und Werkzeuge, die heute im Internet existieren, unterstützen (und nehmen leider) Unix-basierte Systeme an, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt schauen wir uns an, wie man auf das Terminal auf Ihrem gewählten System zugreifen kann.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme ein Terminal, das standardmäßig verfügbar ist und sich unter Ihren Anwendungen befindet.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal bereitstellt und Zugang zu den Low-Level-Tools bietet. macOS Darwin hat größtenteils Parität mit Unix, was sicherlich gut genug ist, um uns beim Durcharbeiten dieses Artikels keine Sorgen zu bereiten.

Das Terminal ist auf macOS unter Anwendungen/Dienstprogramme/Terminal verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Kommandozeile) unter Windows traditionell nicht so einfach oder unkompliziert wie bei anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hatte traditionell lange Zeit ein eigenes terminalähnliches Programm namens cmd ("die Kommandoaufforderung"), aber dies hat definitiv keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Aufforderung.

Bessere Programme für eine Terminalerfahrung auf Windows existieren, wie Powershell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git for Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der heutigen Zeit ist jedoch das Windows Subsystem für Linux (WSL) — eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt aus Windows 10 heraus auszuführen, sodass Sie ein "echtes Terminal" direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Sie finden alle erforderlichen Dokumentationen in der [Windows Subsystem für Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows Subsystem für Linux Dokumentation](wsl.png)

In Bezug auf die Wahl der Option unter Windows würden wir dringend empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Kommandoaufforderung (`cmd`) bleiben, und viele Werkzeuge werden gut funktionieren, aber Sie werden feststellen, dass alles einfacher wird, wenn Sie bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die eine Verbindung zu einer Shell herstellt. Eine Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie die Eingabeaufforderung und Shortcuts möglicherweise angepasst werden). Die Kommandozeile ist die buchstäbliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal benutzen?

Obwohl es eine große Fülle von Tools gibt, die von der Kommandozeile aus verfügbar sind, gibt es, wenn Sie Tools wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, auch eine Masse an Erweiterungen, die als Proxy genutzt werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt nutzen zu müssen. Allerdings werden Sie nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden — Sie werden schließlich einige Erfahrungen mit dem Terminal sammeln müssen.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — schauen wir uns einige Terminalbefehle an! Aus der Box gibt es nur ein paar Dinge, die die Kommandozeile kann, zusammen mit den Namen der relevanten Werkzeuge in jedem Fall:

- Navigieren im Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie erstellen, kopieren, umbenennen und löschen:

  - Durch das Verzeichnisstruktur bewegen: `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Nach Textfragmenten in größeren Textkörpern suchen: `grep`
- Inhalte einer Datei seitenweise anzeigen: `less`, `cat`
- Textströme manipulieren und transformieren (zum Beispiel alle Instanzen von `<div>`s in einer HTML-Datei zu `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe von guten Tutorials im Web, die viel tiefer in die Kommandozeile gehen — dies ist nur eine kurze Einführung!

Lassen Sie uns voranschreiten und einige dieser Werkzeuge auf der Kommandozeile verwenden. Bevor Sie weitergehen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (wenn sie standardmäßig eingerichtet sind) starten ihr Terminalprogramm in Ihrem "home"-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu wechseln. Technisch gesehen ist cd kein Programm, sondern ein eingebauter Befehl. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und Sie es nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen Unix-basierenden Systemen vorhanden sind.

Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die untenstehenden Screenshots).

![Ergebnisse des cd Desktop-Befehls, der in einer Vielzahl von Windows-Terminals ausgeführt wird - der Terminalstandort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminal-Abkürzung ist die Verwendung der <kbd>Tabulator</kbd>-Taste, um Namen automatisch zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt alles vollständig eingeben zu müssen. Zum Beispiel, nachdem Sie die obigen beiden Befehle eingegeben haben, versuchen Sie, `cd D` zu tippen und <kbd>Tabulator</kbd> zu drücken — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, er ist im aktuellen Verzeichnis vorhanden. Denken Sie daran, wenn Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems sind. Wenn Sie sich nicht sicher über den Pfad sind, können Sie ihn in der Regel mit einer Kombination des `ls`-Befehls (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem `Desktop` befindet, könnten Sie diese drei Befehle eingeben, um von Ihrem home-Verzeichnis aus dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad durch Schrägstriche getrennt werden, genau wie Sie dies tun würden, wenn Sie Pfade zu Bildern oder anderen Assets in CSS-, HTML- oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Einschließen eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau dasselbe, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Anfang der Webseite", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschrägstriche anstelle von Vorwärtsschrägstrichen, z.B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, der eine Erklärung von einem der Principal Engineers von Microsoft enthält.

### Auflisten der Verzeichnisinhalte

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für Liste), der die Inhalte des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Kommandoaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie jetzt, das in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht, ob es sich um eine Datei oder ein Verzeichnis handelt, oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung der Befehlsnutzung Ihnen viel mehr Informationen geben.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — dies sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, die sein Verhalten leicht ändern. Diese bestehen in der Regel aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Versuchen Sie zum Beispiel dies auszuführen und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_Bindestrich L_)-Option eine Liste mit einer Datei oder einem Verzeichnis auf jeder Zeile an und zeigt viel mehr Informationen an. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" auf der ganz linken Seite der Zeilen sucht. Dies sind diejenigen, in die wir `cd` eingeben können.

Unten ist ein Screenshot mit einem "Standard"-macOS-Terminal am oberen Rand und einem benutzerdefinierten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse des Befehls `ls -l`:

![Ein Standard-macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, die eine Dateiliste anzeigen - das Ergebnis der Ausführung des Befehls ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl zur Verfügung hat, können Sie seine [man-Seite](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem man den Befehl `man` eingibt, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dies öffnet die man-Seite im Standard-Textdatei-Betrachter des Terminals (z.B. [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, mit den Pfeiltasten oder einem ähnlichen Mechanismus durch die Seite zu scrollen. Die man-Seite listet alle Optionen im Detail auf, was am Anfang ein wenig einschüchternd sein kann, aber zumindest wissen Sie, dass es da ist, wenn Sie es brauchen. Sobald Sie mit dem Durchsehen der man-Seite fertig sind, müssen Sie diese mit dem Beenden-Befehl Ihres Textbetrachters beenden ("q" in `less`; Sie müssen möglicherweise im Internet suchen, um ihn zu finden, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise alle in eine einzige Zeichenfolge nach dem Bindestrichzeichen setzen, zum Beispiel `ls -lah`, oder `ls -ltrh`. Versuchen Sie, sich die `ls`-man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen tun!

Da wir nun zwei grundlegende Befehle besprochen haben, stöbern Sie ein wenig in Ihrem Verzeichnis herum und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, kopieren, verschieben, entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich ziemlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, sodass wir nicht alle so detailliert erklären werden wie die vorherigen beiden.

Probieren Sie sie in einem Testverzeichnis aus, das Sie irgendwo erstellt haben, damit Sie nichts Wichtiges versehentlich löschen, indem Sie die folgenden Beispielbefehle zur Orientierung verwenden:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — entfernt das benannte Verzeichnis, jedoch nur, wenn es leer ist. Zum Beispiel entfernt `rmdir my-awesome-website` das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles darin entfernen), können Sie stattdessen `rm -r` verwenden (siehe unten), aber dies ist gefährlich. Achten Sie darauf, dass sich in dem Verzeichnis nichts befindet, das Sie später noch benötigen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei vom ersten angegebenen Speicherort zum zweiten angegebenen Speicherort, z.B. `mv mdn-example.md mdn-example.txt` (die Speicherorte werden als Dateipfade angegeben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird diese Datei dadurch umbenannt.
- `cp` — ähnlich wie bei der Verwendung von `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Speicherort im zweiten angegebenen Speicherort. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können sie natürlich auch anders benennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben, rückgängig gemacht werden kann.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Sterne als "Wildcard"-Zeichen zu verwenden, was eine beliebige Zeichenabfolge bedeutet. Dies ermöglicht es Ihnen, einen Vorgang gegen eine potenziell große Anzahl von Dateien gleichzeitig auszuführen, die alle dem angegebenen Muster entsprechen. Als Beispiel, `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als gefährlich angesehen?

Wir haben es bereits angedeutet, aber um klar zu sein — Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle tragen nicht zu viel Gefahr, aber während Sie beginnen, komplexere Befehle zusammenzustellen, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im beabsichtigten Verzeichnis ausführen.

Angenommen, Sie hatten 1000 Textdateien in einem Verzeichnis, und Sie wollten sie alle durchgehen und nur diejenigen löschen, die ein bestimmtes Substring im Dateinamen haben. Wenn Sie nicht vorsichtig sind, dann könnten Sie am Ende etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren. Eine gute Angewohnheit, die man sich aneignen sollte, ist, Ihren Terminalbefehl in einem Texteditor auszuarbeiten, herauszufinden, wie Sie denken, dass er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und den Befehl zuerst darauf auszuführen, um ihn zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht sicher fühlen, Terminalbefehle auf Ihrem eigenen Computer auszuprobieren, ist ein sicherer Ort, sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben einem großartigen Ort, um Webentwicklungscode auszuprobieren, bieten die Projekte auch Zugang zu einem Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, in dem Wissen, dass Sie Ihren eigenen Computer nicht kaputt machen werden.

![ein Doppelscreenshot, der die glitch.com-Startseite und den Glitch-Terminalemulator zeigt](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über bestimmte Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-getriebener Dokumentationsdienst, ähnlich wie MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt gehen wir ein Niveau höher (oder sogar mehrere Niveaus) und sehen, wie wir Befehle auf der Kommandozeile verbinden können, um wirklich zu sehen, wie das Terminal im Vergleich zur normalen Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal kommt wirklich in Fahrt, wenn Sie beginnen, Befehle mithilfe des `|` (Pipe)-Symbols zu verketten. Schauen wir uns ein sehr schnelles Beispiel an, was das bedeutet.

Wir haben bereits `ls` betrachtet, das die Inhalte des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine.

Es gibt ein weiteres Unix-Tool, das `wc` heißt. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes dessen, was ihm eingegeben wird. Dies kann eine Textdatei sein — das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen dessen zählen, was **in** ihm gepiped wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die der `ls`-Befehl ausgibt (was er normalerweise zum Terminal ausgeben würde, wenn er alleine ausgeführt wird) und gibt diese Anzahl stattdessen an das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis auf einer eigenen Zeile ausgibt, gibt uns das effektiv eine Verzeichnis- und Dateizählung.

Was passiert also hier? Eine allgemeine Philosophie der (Unix-)Kommandozeilen-Tools ist, dass sie Text zum Terminal ausgeben (auch als "Drucken zu standardmäßiger Ausgabe" oder `STDOUT` bezeichnet). Eine beträchtliche Anzahl von Befehlen kann auch Inhalte aus gestreamten Eingaben lesen (bekannt als "standardmäßige Eingabe" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben _verbinden_, sodass wir zunehmend komplexere Operationen aufbauen können, um unseren Bedürfnissen gerecht zu werden — die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe zu `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe nimmt, die Anzahl der Zeilen zählt, die sie enthält, und diese Anzahl stattdessen zu `STDOUT` ausgibt.

## Ein etwas komplexeres Beispiel

Gehen wir etwas Komplizierteres durch.

Wir werden zuerst versuchen, die Inhalte der MDN-"fetch"-Seite mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit mitteilen, Weiterleitungen mit dem `-L`-Flag zu folgen.

Lassen Sie uns auch die Header betrachten, die `developer.mozilla.org` zurückgibt, indem wir das `curl`-Flag `-I` verwenden, und drucken Sie alle Standortweiterleitungen, die es an das Terminal sendet, indem wir die Ausgabe von `curl` in `grep` pipen (wir bitten `grep`, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte so aussehen (curl wird zunächst einige Download-Zähler und dergleichen ausgeben):

```bash
location: /en-US/docs/Web/API/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis noch ein wenig weiterführen und die Inhalte der `location:`-Zeilen transformieren, indem wir das Basis-Ursprung am Anfang jeder hinzufügen, sodass wir vollständige URLs ausgedruckt bekommen. Dafür fügen wir `awk` hinzu (das eine Programmiersprache ist, die JavaScript oder Ruby oder Python ähnelt, nur viel älter!)

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte in etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs zu zeigen, durch die der Mozilla-Server umleitet, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL anfordern. Ihr System kennenzulernen, wird sich in den kommenden Jahren als nützlich erweisen — lernen Sie, wie diese Single-Serving-Tools funktionieren und wie sie Teil Ihres Toolkits werden können, um Nischenprobleme zu lösen.

## Power-ups hinzufügen

Jetzt, da wir uns einige der eingebauten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir uns an, wie wir ein zusätzliches CLI-Tool installieren und verwenden können.

Das riesige Ökosystem installierbarer Tools für die Front-End-Webentwicklung befindet sich derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privat geführten, Paket-hosting-Dienst, der eng mit Node.js zusammenarbeitet. Dies beginnt sich langsam zu erweitern — Sie können erwarten, dass in Zukunft mehr Paket-Anbieter auftauchen.

Die [Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilen-Tool (und ein ergänzendes, npm-zentriertes Tool namens npx), welches ein Tor zur Installation zusätzlicher Kommandozeilen-Tools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie zu der oben genannten URL gehen und ein Node.js-Installer herunterladen und ausführen, der für Ihr Betriebssystem geeignet ist. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![Der Node.js-Installer unter Windows mit der Option npm zu inkludieren](npm-install-option.png)

Obwohl wir im nächsten Artikel mit einer Reihe verschiedener Tools weitermachen werden, konzentrieren wir uns zunächst auf [Prettier](https://prettier.io/). Prettier ist ein meinungsstarker Code-Formatierer, der nur ein "paar Optionen" hat. Weniger Optionen bedeutet in der Regel Einfachheit. Angesichts dessen, wie Tools manchmal in Bezug auf Komplexität außer Kontrolle geraten können, kann "wenige Optionen" sehr ansprechend sein.

### Wo sollten wir unsere CLI-Tools installieren?

Bevor wir uns mit der Installation von Prettier befassen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren — sodass wir sie überall nutzen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt jeweils Vor- und Nachteile — und die folgenden Listen von Vor- und Nachteilen bei der globalen Installation sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz auf der Festplatte
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit der Codebasis Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, zum Beispiel, wenn Sie die Codebasis über ein Tool wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt macht es Projektcode schwerer zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _cons_-Liste kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile. Hier werden wir es lokal installieren, aber fühlen Sie sich frei, global zu installieren, wenn Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarkes Code-Formatierungswerkzeug für Front-End-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Belastung der manuellen Stil-Konsistenz über alle Ihre Code-Dateien hinweg sparen; Prettier kann dies automatisch für Sie übernehmen.
- Anfängern in der Webentwicklung helfen, ihren Code nach Best-Practice-Gesichtspunkten zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar als direkter Teil von Projekt-Tools, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Programmstil verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen, oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Tooling, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/en/install.html) vorgeschlagen.

Nachdem Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` tut):

```bash
npm install --save-dev prettier
```

Sie können nun die Datei lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/)-Tool ausführen. Wenn Sie den Befehl ohne Argumente ausführen, wie bei vielen anderen Befehlen, erhalten Sie Benutzungs- und Hilfsinformationen. Versuchen Sie es jetzt:

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

Es lohnt sich immer, zumindest einen flüchtigen Blick über die Benutzungsinformationen zu werfen, auch wenn sie lang sind. Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird `npx prettier` die neueste Version von Prettier herunterladen und ausführen, alles auf einmal _nur für diesen Befehl_. Obwohl das großartig klingt, könnten neue Versionen von Prettier die Ausgabe leicht modifizieren. Sie sollten es lokal installieren, um die Prettier-Version festzulegen, die Sie für die Formatierung verwenden, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns schnell ein wenig mit Prettier spielen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst irgendwo auf Ihrem Dateisystem ein neues Verzeichnis, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie dann den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Codebasis ausführen, um nur zu überprüfen, ob unser Code angepasst werden muss. Wechseln Sie in Ihr Verzeichnis und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe in etwa so erhalten:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Es gibt also einige Code-Stile, die korrigiert werden können. Kein Problem. Wenn Sie die Option `--write` zu dem `prettier`-Befehl hinzufügen, wird dies korrigiert und lässt uns den Fokus auf das eigentliche Schreiben von nützlichem Code.

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

Aber was noch wichtiger ist, wenn Sie zu Ihrer JavaScript-Datei zurückgehen, werden Sie feststellen, dass sie in etwa wie folgt formatiert wurde:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen), können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Tools glänzen; unsere persönliche Präferenz ist die Art der Automatisierung, die "einfach passiert", ohne dass man etwas konfigurieren muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie die Automatisierung erreicht werden kann, und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es einige ausgezeichnete Ressourcen online, die helfen können (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository commiten, verwenden Sie [Husky](https://github.com/typicode/husky).
- Immer wenn Sie "Speichern" in Ihrem Code-Editor drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen unter Verwendung von Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — während der Verwendung von z.B. VS Code, tritt Prettier in Kraft und räumt jedes benötigte Format auf, jedes Mal, wenn wir speichern. Sie können viel mehr Informationen darüber finden, wie Sie Prettier auf verschiedene Weisen verwenden können, in den [Prettier-Dokumenten](https://prettier.io/docs/en/).

## Andere Tools zum Ausprobieren

Wenn Sie ein paar weitere Tools ausprobieren möchten, hier ist eine kurze Liste, die Spaß macht, auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "nicerer" `cat` (`cat` wird verwendet, um die Inhalte von Dateien auszugeben).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter dazu bringt, sich wie ein Düsenflugzeug zu benehmen, und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — früher in diesem Kapitel erwähnt, aber als Kommandozeilentool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, ähnlich wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer kurzen Tour durch das Terminal/die Kommandozeile. Als nächstes werden wir uns genauer mit Paketmanagern befassen und was wir mit ihnen machen können.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
