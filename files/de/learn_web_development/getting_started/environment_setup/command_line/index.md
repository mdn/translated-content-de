---
title: Crashkurs zur Kommandozeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder auf der "Kommandozeile" – das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die grundlegenden Befehle, die Sie dort eingeben müssen, wie Sie Befehle miteinander verketten und wie Sie Ihre eigenen Befehlszeilentools (CLI-Tools) hinzufügen.

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
          <li>Was die Kommandozeile ist und was Sie damit tun können.</li>
          <li>Verständnis, wie man auf verschiedenen Systemen auf die Kommandozeile zugreift.</li>
          <li>Kenntnis grundlegender Tastenkombinationen (zum Beispiel Pfeil nach oben für vorherige Befehle, Tabulator für Autovervollständigung).</li>
          <li>Kenntnis grundlegender Befehle (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine textbasierte Schnittstelle zur Ausführung textbasierter Programme. Wenn Sie irgendwelche Tools für die Webentwicklung ausführen, besteht eine nahezu garantierte Chance, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** – Kommandozeilenschnittstellentools – bezeichnet).

Eine große Anzahl von Tools kann verwendet werden, indem Befehle in die Kommandozeile eingegeben werden; viele sind bereits auf Ihrem System vorinstalliert, und eine große Anzahl anderer sind über Paketregister installierbar. Paketregister sind wie App-Stores, aber (hauptsächlich) für kommandozeilenbasierte Tools und Software. Später in diesem Kapitel werden wir sehen, wie man einige Tools installiert, und im nächsten Kapitel werden wir mehr über Paketregister erfahren.

Eine der größten Kritiken an der Kommandozeile ist ihr stark eingeschränktes Benutzererlebnis. Die Kommandozeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

An der Oberfläche sind sie weit davon entfernt, einladend zu sein, aber es gibt viel, was man mit ihnen tun kann, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt ungefähr aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute benutzen (dafür sollten wir dankbar sein). Sie können ein wenig über die Geschichte auf Wikipedias Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Maschinen bis zu Servern in der Cloud, bis hin zu Mikrocomputern wie dem Raspberry Pi Zero und sogar Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und niedrigstufige Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn man weiß, was man tut.

Es ist auch nützlich für die Automatisierung – zum Beispiel, um einen Befehl zu schreiben, um die Titel von Hunderten von Dateien automatisch zu aktualisieren, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrer Finder- oder Explorer-GUI-App aktualisieren würden, würde es lange dauern.

Jedenfalls wird das Terminal nicht so schnell verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die Ihnen Zugang zu einem Terminal verschaffen können.

Die nächsten Bilder zeigen die verfügbaren Kommandoaufforderungen in Windows – es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zu "Powershell" – das über das Startmenü durch Eingabe des Programmnamen ausgeführt werden kann.

![Ein einfaches Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greift man auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z.B. das Terminal und die Tools, die Sie über dieses zugreifen können). Viele Tutorials und Tools, die es heute im Web gibt, unterstützen (und leider gehen sie davon aus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie man auf das Terminal auf Ihrem gewählten System zugreift.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgelistet ist.

#### macOS

macOS hat ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die niedrigstufigen Tools bereitstellt. macOS Darwin hat meistens eine Parität mit Unix, sicherlich gut genug, um uns keine Sorgen zu machen, während wir diesen Artikel durcharbeiten.

Das Terminal ist auf macOS unter `Applications/Utilities/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmiertools war die Verwendung des Terminals (oder der Kommandozeile) unter Windows traditionell nicht so einfach wie bei anderen Betriebssystemen. Aber es wird besser.

Windows hatte schon lange sein eigenes terminalähnliches Programm namens `cmd` ("die Eingabeaufforderung"), aber dies hat keine Parität mit Unix-Befehlen und entspricht der alten DOS-Eingabeaufforderung von Windows.

Bessere Programme existieren für die Bereitstellung einer Terminalerfahrung unter Windows, wie beispielsweise PowerShell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git für Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der heutigen Zeit ist jedoch das Windows Subsystem for Linux (WSL) – eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt innerhalb von Windows 10 auszuführen, sodass Sie ein "wahrhaftiges Terminal" direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Es kann kostenlos direkt aus dem Windows Store installiert werden. Sie finden alle benötigten Dokumentationen in der [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Windows Subsystem for Linux-Dokumentationen](wsl.png)

In Bezug darauf, welche Option Sie unter Windows wählen sollten, würden wir stark empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der standardmäßigen Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden dort in Ordnung funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

In der Regel werden diese beiden Begriffe austauschbar verwendet. Technisch gesehen ist ein Terminal eine Software, die eine Shell startet und verbindet. Eine Shell ist Ihre Sitzung und Ihre Sitzungsumgebung (wo Dinge wie die Eingabeaufforderung und Verknüpfungen angepasst werden können). Die Kommandozeile ist die wörtliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal benutzen?

Obwohl es eine große Fülle von Tools gibt, die über die Kommandozeile verfügbar sind, gibt es, wenn Sie Tools wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Sie werden jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden – Sie werden irgendwann etwas Erfahrung mit dem Terminal sammeln müssen.

## Grundlegende integrierte Terminalbefehle

Genug geredet – schauen wir uns einige Terminalbefehle an! Aus der Box heraus, hier sind nur einige der Dinge, die die Kommandozeile tun kann, zusammen mit den Namen der jeweiligen Tools in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur (Ordnerstruktur): `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Bewegen Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Dateien herunterladen, die an bestimmten URLs gefunden werden: `curl`
- Nach Textfragmenten innerhalb größerer Textmengen suchen: `grep`
- Den Inhalt einer Datei seitenweise anzeigen: `less`, `cat`
- Textströme manipulieren und transformieren (z.B. Ändern aller Vorkommen von `<div>` in einer HTML-Datei zu `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Kommandozeile eintauchen – dies ist nur eine kurze Einführung!

Gehen wir weiter und schauen wir uns an, wie einige dieser Tools auf der Kommandozeile verwendet werden. Bevor Sie weitergehen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (angenommen, eine Standardinstallation) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich zu einem anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel als "Ordner" bezeichnet haben. Bei der Betrachtung der Dateistruktur innerhalb einer Benutzeroberfläche (UI) ist der Begriff "Ordner" sinnvoller, da die verwendeten Symbole wie altmodische physische Speicherordner aussehen. Allerdings hören Sie den Begriff "Verzeichnis" auch häufig, besonders wenn es darum geht, Dateien über die Kommandozeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Grunde dasselbe.

Der Befehl `cd` lässt Sie das Verzeichnis wechseln (Change Directory). Technisch gesehen ist cd kein Programm, sondern ein eingebautes Kommando. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und Sie es auch nicht versehentlich löschen können – zum Glück! Es ist nicht allzu wichtig, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Kommandos auf allen Unix-basierten Systemen vorhanden sind.

Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die unten stehenden Screenshots).

![Ergebnisse des Befehls cd Desktop, der in verschiedenen Windows-Terminals ausgeführt wird - der Terminalort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>Tabulator</kbd>-Taste, um Namen automatisch zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt den ganzen Namen vollständig eingeben zu müssen. Zum Beispiel, nachdem Sie die oben genannten beiden Befehle eingegeben haben, versuchen Sie `cd D` zu tippen und <kbd>Tabulator</kbd> zu drücken – es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Beachten Sie dies, wenn Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Das wird normalerweise einfacher, wenn Sie sich mit der Struktur Ihres Dateisystems besser vertraut machen, aber wenn Sie sich nicht sicher über den Pfad sind, können Sie diesen normalerweise mit einer Kombination des `ls`-Befehls (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo ein Verzeichnis im Verhältnis zu Ihrem aktuellen Standort ist.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem _Desktop_ befindet, könnten Sie diese drei Befehle verwenden, um von Ihrem _Home_-Verzeichnis dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung – stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad mit Schrägstrichen getrennt sind, ähnlich wie beim Angeben von Pfaden zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Einfügen eines Schrägstrichs am Anfang Ihres Pfads den Pfad absolut macht, zum Beispiel `/Users/your-user-name/Desktop`. Das Auslassen des Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau daselbe, was Sie bei URLs in Ihrem Webbrowser sehen würden. Ein vorderer Schrägstrich bedeutet "an der Wurzel der Website", während das Auslassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschläge anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` – das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, mit einer Erklärung eines der leitenden Ingenieure von Microsoft.

### Auflisten des Verzeichnisinhalts

Ein weiteres eingebautes Unix-Kommando ist `ls` (kurz für list), das die Inhalte des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die standardmäßige Windows-Eingabeaufforderung (`cmd`) verwenden – das dortige Äquivalent ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich sehr einfach – Sie erhalten nur den Namen jedes vorhandenen Elements, aber nicht, ob es sich um eine Datei oder ein Verzeichnis handelt, oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung an der Verwendung des Befehls eine Menge mehr Informationen liefern.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – dies sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, die sein Verhalten auf eine leicht andere Weise ändern. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die Option `-l` (_Bindestrich ell_) Ihnen eine Auflistung mit einem Dateinamens oder Verzeichnisnamen in jeder Zeile und viel mehr angezeigten Informationen. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links in den Zeilen sucht. Das sind die, in die wir `cd` ausführen können.

Unten ist ein Screenshot mit einem "einfachen" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten – beide zeigen die Ergebnisse des Ausführens von `ls -l`:

![Ein einfaches macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, das eine Dateiauflistung zeigt - das Ergebnis des Ausführens des Befehls ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen für jeden Befehl verfügbar sind, können Sie seine [man-Seite](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem der `man`-Befehl zusammen mit dem Namen des Befehls, den Sie nachschlagen möchten, eingegeben wird, zum Beispiel `man ls`. Dies öffnet die man-Seite im Standard-Textdateibetrachtungstool des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten in der Lage sein, die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus zu durchsuchen. Die man-Seite listet alle Optionen im Detail auf, was zu Beginn etwas einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Sobald Sie mit dem Durchsehen der man-Seite fertig sind, müssen Sie sie mit dem Beenden-Kommando Ihres Textbetrachters beenden ("q" in `less`; Sie müssen möglicherweise im Internet danach suchen, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise alle in einem einzigen String nach dem Bindestrich-Zeichen setzen, zum Beispiel `ls -lah`, oder `ls -ltrh`. Versuchen Sie, die `ls` man-Seite zu lesen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Jetzt, da wir zwei grundlegende Befehle besprochen haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich ziemlich oft verwenden werden, während Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir nicht alle im Detail erklären wie die vorherigen beiden.

Versuchen Sie damit in einem Testverzeichnis herumzuspielen, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die folgenden Beispielbefehle als Leitfaden:

- `mkdir` – dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel, `mkdir my-awesome-website` wird ein neues Verzeichnis namens `my-awesome-website` erstellen.
- `rmdir` – entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` wird das von uns erstellte Verzeichnis entfernen. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und dabei auch alles enthält, es entfernen), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich in dem Verzeichnis nichts befindet, was Sie später noch benötigen könnten, da es für immer verschwunden ist.
- `touch` – erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` – bewegt eine Datei vom ersten angegebenen Dateipfad zu dem zweiten angegebenen Dateipfad, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Positionen werden als Dateipfade geschrieben). Dieser Befehl bewegt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis in eine Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei bewegt, aber von einem praktischen Standpunkt aus gesehen, wird die Datei tatsächlich umbenannt.
- `cp` – ähnlich wie bei `mv` erzeugt `cp` eine Kopie der Datei an der ersten angegebenen Position an der zweiten angegebenen Position. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können sie natürlich etwas anderes nennen, wenn Sie möchten).
- `rm` – entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzige Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Asterixe als "Platzhalter"-Zeichen zu verwenden, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, eine Operation gegen eine potenziell große Anzahl von Dateien auszuführen, die alle mit dem angegebenen Muster übereinstimmen. Zum Beispiel, `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal – als gefährlich betrachtet?

Wir haben darauf hingewiesen, aber um klar zu sein – Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle sind nicht allzu gefährlich, aber wenn Sie anfangen, komplexere Befehle zusammenzustellen, müssen Sie genau überlegen, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im beabsichtigten Verzeichnis ausführen.

Angenommen, Sie haben 1000 Textdateien in einem Verzeichnis und möchten alle durchgehen und nur diejenigen löschen, die eine bestimmte Teilzeichenfolge im Dateinamen haben. Wenn Sie nicht vorsichtig sind, könnten Sie versehentlich etwas Wichtiges löschen, wodurch Sie eine Menge Ihrer Arbeit verlieren.

Eine gute Angewohnheit ist es, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er aussehen sollte, und eine Sicherungskopie Ihres Verzeichnisses zu erstellen, um den Befehl darauf zu testen.

Wenn Sie nicht bequem damit sind, Terminalbefehle auf Ihrer eigenen Maschine auszuprobieren, stehen gehostete Online-Terminals zur Verfügung, die sichere Orte bieten, um das Eingeben von Befehlen zu üben, ohne das Risiko, Ihre eigene Maschine zu beschädigen:

- Unser Lernpartner, [Scrimba](https://scrimba.com/home?via=mdn), bietet ein Terminal für das Eingeben von Befehlen in ihrer Lernumgebung. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr [Crashkurs zur Kommandozeile](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>, der auch eine unterhaltsame interaktive Einführung zum Navigieren in der Datei-Struktur und zur Dateimanipulation über das Terminal bietet.
- [Glitch.com](https://glitch.com/) ist ein großartiger Ort, um Webentwicklungscode auszuprobieren, und Glitch-Projekte beinhalten auch ein Terminal für das Ausführen von Befehlen.

Eine großartige Ressource für einen schnellen Überblick über bestimmte Terminalbefehle ist [tldr.sh](https://tldr.sh/). Dies ist ein gemeinschaftlich betriebenes Dokumentationsservice, ähnlich wie MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt wollen wir es eine Stufe (oder mehrere Stufen tatsächlich) höher schalten und sehen, wie wir Befehle auf der Kommandozeile verbinden können, um wirklich zu sehen, wie das Terminal bei der Arbeit mit der regulären Desktop-Benutzeroberfläche von Vorteil sein kann.

## Verbinden von Befehlen mit Pipes

Das Terminal entfaltet sein volles Potenzial, wenn Sie beginnen, Befehle miteinander zu verketten, indem Sie das `|` (Pipe) Symbol verwenden. Schauen wir uns ein sehr schnelles Beispiel an, was das bedeutet.

Wir haben bereits `ls` gesehen, das die Inhalte des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine.

Es gibt ein anderes Unix-Tool namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was in es eingegeben wird. Das kann eine Textdatei sein – das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von allem zählen, was in es hineingepiped wird. Zum Beispiel zählt der folgende Befehl die Anzahl der von `ls` ausgegebenen Zeilen (was es normalerweise auf das Terminal ausdrucken würde, wenn es allein ausgeführt wird) und gibt stattdessen diese Anzahl auf das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in eine eigene Zeile druckt, ergibt sich dadurch effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (Unix-)Kommandozeilentools ist, dass sie Text auf das Terminal ausdrucken (auch als "Ausgabe auf die Standardausgabe" bezeichnet oder `STDOUT`). Viele Befehle können auch Inhalte aus gestreamtem Input lesen (bekannt als "Standard-Input" oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben verbinden, sodass wir zunehmend komplexere Operationen erstellen können, die unseren Bedürfnissen entsprechen – die Ausgabe eines Befehls kann zum Input des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe auf `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Input nimmt, die Anzahl der enthaltenen Zeilen zählt und diese Anzahl stattdessen auf `STDOUT` ausdruckt.

## Ein etwas komplexeres Beispiel

Gehen wir etwas komplizierteres durch.

Wir versuchen zunächst, die Inhalte der MDN-Seite "fetch" mit dem Befehl `curl` abzurufen (der zum Anfordern von Inhalten von URLs verwendet werden kann), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, weil die Seite umgeleitet wurde (auf [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` explizit mitteilen, Umleitungen mit dem `-L`-Flag zu folgen.

Schauen wir uns auch die Header an, die `developer.mozilla.org` mit dem `-I`-Flag von `curl` zurückgibt, und drucken alle Ortumleitungen, die es an das Terminal sendet, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, das Folgende auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte etwa so aussehen (`curl` wird zuerst einige Zähler und Ähnliches ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis ein wenig weiter treiben und die `location:` Zeileninhalte transformieren, indem wir den Basisursprung am Anfang jeder hinzufügen, sodass vollständige URLs ausgedruckt werden.
Dafür fügen wir `awk` hinzu (was eine Programmiersprache ähnlich zu JavaScript oder Ruby oder Python ist, nur viel älter!).

Versuchen Sie dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs zu zeigen, die der Mozilla-Server abruft, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Das Kennenlernen Ihres Systems wird sich in den kommenden Jahren als nützlich erweisen – erfahren Sie, wie diese Einweg-Tools funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Hinzufügen von Power-ups

Jetzt, wo wir uns einige der eingebauten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir, wie wir ein Drittanbieter-CLI-Tool installieren und verwenden können.

Das umfangreiche Ökosystem an installierbaren Tools für die Front-End-Webentwicklung existiert derzeit hauptsächlich in [npm](https://www.npmjs.com/), einem in Privatbesitz befindlichen, paket-hosting Dienst, das eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam – Sie können erwarten, dass in der Zukunft mehr Anbieter von Paketen auftauchen.

[Installing Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilen-Tool (und ein zusätzliches npm-zentrisches Tool namens npx), das ein Tor zur Installation zusätzlicher Befehlszeilen-Tools bietet. Node.js und npm arbeiten auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie die oben genannte URL besuchen und einen geeigneten Node.js-Installer für Ihr Betriebssystem herunterladen und ausführen. Stellen Sie sicher, dass Sie npm als Teil der Installation einschließen, wenn Sie dazu aufgefordert werden.

![Der Node.js-Installer auf Windows, der die Option zeigt, npm zu inkludieren](npm-install-option.png)

Wir werden wieder [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie man es als Visual Studio Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions)-Artikel installiert. Hier zeigen wir Ihnen, wie Sie es als Befehlszeilen-Tool installieren.

> [!NOTE]
> Prettier ist ein meinungsstarker Codeformatierer, der nur "wenige Optionen" hat. Weniger Optionen bedeutet oft einfachere Bedienung. Da Tools manchmal außer Kontrolle geraten können hinsichtlich ihrer Komplexität, können "wenige Optionen" sehr ansprechend sein.

### Wo sollen unsere CLI-Tools installiert werden?

Bevor wir beginnen, Prettier zu installieren, gibt es eine Frage zu beantworten – "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global – also überall zugänglich – oder lokal in das aktuelle Projektverzeichnis zu installieren.

Es gibt Vor- und Nachteile in beiden Richtungen – und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind keineswegs vollständig.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer die selbe Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Code der Projekts kompatibel
- Andere Entwickler in Ihrem Team werden nicht Zugriff auf diese Tools haben, zum Beispiel, wenn Sie den Code über ein Tool wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt, macht es den Projektcode schwieriger zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, sind die negativen Auswirkungen der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein meinungsstarkes Code-Formatierungstool für Frontend-Entwickler und konzentriert sich auf JavaScript-basierte Sprachen und fügt Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzu.

Prettier kann:

- Die kognitive Belastung vermeiden, den Stil manuell in allen Ihren Code-Dateien konsistent zu halten; Prettier kann dies automatisch für Sie erledigen.
- Neulingen in der Webentwicklung helfen, ihren Code nach den besten Praktiken zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar direkt als Teil des Projektwerkzeugs, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Code-Stil verwenden, den Sie verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Werkzeug, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

Nachdem Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden erklären, was `--save-dev` im nächsten Artikel macht):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen.
Das Ausführen des Befehls ohne Argumente wird, wie bei vielen anderen Befehlen, Nutzungs- und Hilfsinformationen anzeigen.
Versuchen Sie dies jetzt:

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

Es lohnt sich immer, zumindest die Nutzungsinformationen zu überfliegen, selbst wenn sie lang sind.
Es wird Ihnen helfen zu verstehen, wie das Tool gedacht ist verwendet zu werden.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird das Ausführen von `npx prettier` die neueste Version von Prettier für diesen einen Befehl herunterladen und ausführen.
> Während das großartig klingt, können neue Versionen von Prettier leicht die Ausgabe ändern.
> Sie möchten es lokal installieren, damit Sie die Version von Prettier, die Sie für die Formatierung verwenden, fixieren, bis Sie bereit sind, diese zu ändern.

### Spielen mit Prettier

Lassen Sie uns eine kurze Runde mit Prettier spielen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Codebasis ausführen, um nur zu überprüfen, ob unser Code angepasst werden muss. Navigieren Sie mit `cd` in Ihr Verzeichnis und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe erhalten wie:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Es gibt also einige Codestile, die behoben werden können. Kein Problem. Wenn Sie die Option `--write` zum `prettier`-Befehl hinzufügen, werden diese behoben, sodass wir uns darauf konzentrieren können, wirklich nützlichen Code zu schreiben.

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

Aber noch wichtiger, wenn Sie zu Ihrer JavaScript-Datei zurückblicken, werden Sie feststellen, dass sie in etwa so formatiert wurde:

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

Abhängig von dem Arbeitsablauf (oder dem, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Tools glänzen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne irgendetwas konfigurieren zu müssen.

Mit Prettier gibt es eine Vielzahl von Möglichkeiten, um Automatisierung zu erreichen und obwohl sie über den Rahmen dieses Artikels hinausgehen, gibt es einige ausgezeichnete Ressourcen im Internet, die helfen können (von denen einige verlinkt wurden). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository komittieren, mit [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie auf "Speichern" in Ihrem Code-Editor klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von Prüfvorgängen der kontinuierlichen Integration mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Option – während Sie zum Beispiel VS Code verwenden, springt Prettier ein und bereinigt jedes Mal jedes Format, das es tun muss, wenn wir speichern drücken. Sie finden viel mehr Informationen über die Verwendung von Prettier auf verschiedene Arten in den [Prettier-Dokumenten](https://prettier.io/docs/).

## Andere Tools zum Ausprobieren

Wenn Sie mit ein paar weiteren Tools spielen möchten, hier ist eine kurze Liste, die Spaß machen könnte:

- [`bat`](https://github.com/sharkdp/bat) – Eine "schönere" `cat` (`cat` wird verwendet, um die Inhalte von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) – `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server reagiert).
- [`htop`](https://htop.dev/) – Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie einen Düsenjet klingen lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) – bereits erwähnt in diesem Kapitel, aber als Kommandozeilen-Tool erhältlich.

Beachten Sie, dass einige der oben genannten Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour durch das Terminal/Kommandozeile und zum Ende des Environment-Setup-Moduls. Als nächstes lassen wir Sie Ihre erste einfache Website erstellen, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
