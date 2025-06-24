---
title: Einführung in die Befehlszeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Verlauf Ihrer Entwicklung werden Sie unweigerlich aufgefordert, einige Befehle im Terminal (oder auf der "Befehlszeile" – das ist im Grunde dasselbe) auszuführen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie Sie Befehle verknüpfen und wie Sie eigene Befehlszeilentools (CLI-Tools) hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie die Befehlszeile auf verschiedenen Systemen aufrufen.</li>
          <li>Kennen Sie grundlegende Tastaturkürzel (z. B. Pfeil nach oben, um auf vorherige Befehle zuzugreifen, Tab für Autovervollständigung).</li>
          <li>Kennen Sie grundlegende Befehle (z. B. <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/-flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung von textbasierten Programmen. Wenn Sie irgendwelche Tools für die Webentwicklung verwenden, gibt es eine nahezu garantierte Wahrscheinlichkeit, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** — Command Line Interface Tools bezeichnet).

Eine große Anzahl von Tools kann verwendet werden, indem Sie Befehle in die Befehlszeile eingeben; viele sind bereits auf Ihrem System vorinstalliert, und eine riesige Anzahl anderer ist über Paketregister installierbar.
Paketregister sind wie App Stores, aber (meistens) für befehlszeilenbasierte Tools und Software.
Wie man später in diesem Kapitel einige Tools installiert, und mehr über Paketregister erfahren wir im nächsten Kapitel.

Eine der größten Kritiken an der Befehlszeile ist, dass es ihr stark an Benutzerfreundlichkeit mangelt.
Zum ersten Mal die Befehlszeile zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe darüber, was zu tun ist.

Oberflächlich betrachtet sind sie alles andere als einladend, aber man kann viel mit ihnen tun, und wir versprechen, dass die Nutzung mit ein bisschen Anleitung und Übung einfacher wird!
Deshalb bieten wir Ihnen dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher stammt das Terminal?

Das Terminal stammt etwa aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt kaum dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein bisschen über die Geschichte im Wikipedia-Eintrag zum [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Computern bis hin zu Servern in der Cloud, zu Mikrocomputern wie dem Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugang zum zugrunde liegenden Dateisystem des Computers und zu niederebenen Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell zu erledigen, wenn man weiß, was man tut.

Es ist auch nützlich für die Automatisierung – etwa um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder- oder Explorer- GUI-App aktualisiert hätten, würde es sehr lange dauern.

Wie dem auch sei, das Terminal verschwindet nicht so schnell.

### Wie sieht das Terminal aus?

Unten können Sie einige der verschiedenen Programme sehen, die Ihnen Zugang zu einem Terminal verschaffen können.

Die nächsten Bilder zeigen die Eingabeaufforderungen, die in Windows verfügbar sind – es gibt eine gute Auswahl an Optionen, von dem "cmd"-Programm bis zu "Powershell" — die vom Startmenü aus durch Eingabe des Programmnamens ausgeführt werden können.

![Ein einfaches Windows-Cmd-Fenster und ein Windows-PowerShell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![Ein einfaches macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z. B. das Terminal und die Tools, die Sie darin aufrufen können). Viele Tutorials und Tools, die heute im Internet existieren, unterstützen (und leider gehen sie davon aus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf das Terminal auf Ihrem ausgewählten System zugreifen können.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

Unter macOS gibt es ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal bereitstellt und den Zugang zu den niedrigen Ebenen der Systemwerkzeuge ermöglicht. macOS Darwin bietet größtenteils eine Parität mit Unix, die jedenfalls ausreicht, um uns keine Sorgen zu bereiten, während wir diesen Artikel durchgehen.

Das Terminal ist auf macOS unter `Programme/Dienstprogramme/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder problemlos wie unter anderen Betriebssystemen. Aber die Dinge werden besser.

Windows hatte traditionell lange Zeit ein eigenes terminalähnliches Programm namens `cmd` (die Eingabeaufforderung), aber dieses hat keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren, um eine Terminalerfahrung unter Windows zu bieten, wie PowerShell ([siehe hier, um Installateure zu finden](https://github.com/PowerShell/PowerShell)) und Gitbash (die im Rahmen des [git for Windows](https://gitforwindows.org/) Toolsets kommt).

Die beste Option für Windows ist heutzutage jedoch das Windows Subsystem for Linux (WSL) – eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt von innerhalb Windows 10 aus zu betreiben, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows ohne virtuelle Maschine auszuführen.

Diese kann direkt kostenlos im Windows Store installiert werden. Sie können alle erforderlichen Dokumentationen im [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/) finden.

![Ein Screenshot der Windows Subsystem for Linux Dokumentation](wsl.png)

Was die Wahl der Option unter Windows betrifft, würden wir dringend empfehlen, das WSL zu installieren. Sie könnten bei der Standardeingabeaufforderung (`cmd`) bleiben und viele Werkzeuge werden funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Randbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Generell finden Sie diese beiden Begriffe oft austauschbar verwendet. Technisch gesehen ist ein Terminal eine Software, die eine Shell startet und verbindet. Eine Shell ist Ihre Sitzung und Umgebung (wo Dinge wie das Eingabeaufforderung und Tastaturkürzel angepasst werden könnten). Die Befehlszeile ist die wörtliche Zeile, in die Sie Befehle eingeben und wo der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine große Fülle von Tools gibt, die von der Befehlszeile aus verfügbar sind, gibt es bei der Verwendung von Tools wie [Visual Studio Code](https://code.visualstudio.com/) auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu nutzen, ohne direkt das Terminal verwenden zu müssen. Sie werden jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden – Sie müssen letztlich etwas Erfahrung mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet – lassen Sie uns anfangen, uns einige Terminalbefehle anzusehen! Aus der Box heraus, hier sind nur einige der Dinge, die die Befehlszeile tun kann, zusammen mit den relevanten Werkzeugnamen in jedem Fall:

- Navigieren im Dateisystem Ihres Computers sowie grundlegende Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich in Ihrer Verzeichnisstruktur: `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Herunterladen von Dateien, die sich an bestimmten URLs befinden: `curl`
- Suchen nach Textfragmenten innerhalb größerer Textkörper: `grep`
- Anzeigen des Inhalts einer Datei seitenweise: `less`, `cat`
- Textströme manipulieren und transformieren (z.B. alle Instanzen von `<div>`s in einer HTML-Datei zu `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Befehlszeile eintauchen – dies ist nur eine kurze Einführung!

Lassen Sie uns fortfahren und sehen, wie wir einige dieser Tools auf der Befehlszeile verwenden können. Bevor Sie weitermachen, öffnen Sie Ihr Terminal-Programm!

### Navigation in der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt eine Standardinstallation) starten ihr Terminalprogramm in Ihrem _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel als "Ordner" bezeichneten. Wenn Sie sich die Dateistruktur in einer Benutzeroberfläche (UI) ansehen, macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie altmodische physische Aufbewahrungsordner aussehen. Sie hören jedoch häufig auch den Begriff "Verzeichnis", insbesondere wenn es darum geht, Dateien mit der Befehlszeile zu manipulieren. Es gibt Nuancen, aber im Grunde bedeuten die beiden Begriffe dasselbe.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu wechseln. Technisch gesehen ist cd kein Programm, sondern ein eingebautes Feature. Dies bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und dass Sie es nicht versehentlich löschen können – Gott sei Dank! Sie müssen sich nicht zu sehr darum kümmern, ob ein Befehl eingebaut ist oder nicht, aber beachten Sie, dass eingebaute Befehle auf allen unixbasierten Systemen vorhanden sind.

1. Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

   ![Ergebnisse des cd Desktop Befehls in einer Vielzahl von Windows Terminals - der Terminal Standort bewegt sich auf den Desktop](win-terminals-cd.png)

2. Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

   ```bash
   cd Desktop
   ```

3. Um zum vorherigen Verzeichnis zurückzukehren, können Sie zwei Punkte verwenden. Tippen Sie dies jetzt:

   ```bash
   cd ..
   ```

> [!NOTE]
> Eine sehr nützliche Terminal-Abkürzung ist die Verwendung der <kbd>Tab</kbd>-Taste, um Namen zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt den gesamten Namen ausschreiben zu müssen. Versuchen Sie nach der Eingabe der oben genannten beiden Befehle, `cd D` zu tippen und dann <kbd>Tab</kbd> zu drücken – es sollte den Verzeichnisnamen `Desktop` automatisch für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Beachten Sie dies, während Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief geschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden, aber wenn Sie sich des Pfades nicht sicher sind, können Sie ihn normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Wenn Sie beispielsweise zu einem Verzeichnis namens `src` gelangen möchten, das sich in einem Verzeichnis namens `project` auf dem _Desktop_ befindet, könnten Sie diese drei Befehle eingeben, um dorthin zu gelangen von Ihrem _Home_-Verzeichnis aus:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung – stattdessen können Sie einen einzigen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt werden, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Assets in CSS, HTML oder JavaScript spezifizieren:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Einfügen eines führenden Schrägstrichs in Ihrem Pfad den Pfad absolut macht, zum Beispiel `/Users/Ihr-Benutzername/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Das ist genau dasselbe, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Stamm der Website", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie anstelle von Schrägstrichen Rückwärtsschrägstriche, z.B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, in dem einer der Microsoft Principal Engineers eine Erklärung liefert.

### Auflisten von Verzeichnisinhalten

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für Liste), der die Inhalte des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden – das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach – Sie erhalten nur den Namen jedes vorhandenen Elements, nicht, ob es sich um eine Datei oder ein Verzeichnis handelt, oder etwas anderes. Zum Glück kann eine kleine Änderung des Befehls Gebrauchs Ihnen viel mehr Informationen geben.

### Einführung von Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – dies sind Modifikatoren, die Sie ans Ende eines Befehls anhängen, die ihn auf eine etwas andere Weise verhalten lassen. Diese bestehen in der Regel aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, versuchen Sie dies und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_Bindestrich ell_) Option Ihnen eine Auflistung mit einer Datei oder einem Verzeichnis in jeder Zeile und zeigt viel mehr Informationen an. Verzeichnisse können erkannt werden, indem man nach einem Buchstaben "d" ganz links in den Zeilen sucht. Dies sind die, in die wir `cd` können.

Unten ist ein Screenshot mit einem "Vanille"-macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten – beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein einfaches macOS-Terminal und ein farbenfroheres benutzerdefiniertes macOS-Terminal, das eine Dateiliste anzeigt - das Ergebnis eines ls -l Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl zur Verfügung hat, können Sie sich die [man-Seite](https://en.wikipedia.org/wiki/Man_page) für den Befehl ansehen. Dies geschieht, indem Sie den Befehl `man` gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, eingeben, zum Beispiel `man ls`. Dies öffnet die man-Seite im Standard-Textdateibetrachter des Terminals (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, mit den Pfeiltasten oder einem ähnlichen Mechanismus durch die Seite zu blättern. Die man-Seite listet alle Optionen im Detail auf, was zu Beginn etwas einschüchternd wirken kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Wenn Sie mit der man-Seite fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Textdateibetrachters verlassen (im Fall von `less` "q"; Sie müssen möglicherweise im Internet suchen, um dies herauszufinden, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie normalerweise alle in einer einzigen Zeichenfolge nach dem Bindestrich Zeichen einfügen, zum Beispiel `ls -lah` oder `ls -ltrh`. Versuchen Sie, sich die ls-man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Da wir nun zwei grundlegende Befehle behandelt haben, schauen Sie sich doch ein bisschen in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich ziemlich häufig verwenden werden, während Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle in ebenso viele Details erklären wie die vorherigen beiden.

Spielen Sie mit ihnen in einem Testverzeichnis herum, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die Beispielbefehle unten als Anleitung:

- `mkdir` — erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel wird `mkdir my-awesome-website` ein neues Verzeichnis namens `my-awesome-website` erstellen.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` würde das von uns vorher erstellte Verzeichnis entfernen. Wenn Sie ein nicht-leeres Verzeichnis entfernen möchten (und auch alles darin), dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, was Sie später möglicherweise benötigen, da es endgültig verschwunden sein wird.
- `touch` — erstellt eine neue leere Datei, im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei vom ersten angegebenen Speicherort zum zweiten angegebenen Speicherort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte sind als Dateipfade angegeben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht benennt dieser Befehl die Datei eigentlich um.
- `cp` — ähnlich in der Nutzung wie `mv`, erstellt `cp` eine Kopie der Datei am ersten angegebenen Speicherort am zweiten angegebenen Speicherort. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich etwas anderes nennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben die Verwendung von Sternchen als "Wildcard"-Zeichen, was "jede Zeichenabfolge" bedeutet. Dies ermöglicht es Ihnen, eine Operation gleichzeitig auf eine möglicherweise große Anzahl von Dateien auszuführen, die alle dem angegebenen Muster entsprechen. Als Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` anfangen und mit `.bak` enden.

## Terminal – potenziell gefährlich?

Wir haben das schon einmal erwähnt, aber um klar zu sein – Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht zu viel Risiko, aber wenn Sie anfangen, komplexere Befehle zu erstellen, müssen Sie sorgfältig überlegen, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie endgültig im beabsichtigten Verzeichnis ausführen.

Angenommen, Sie hätten 1000 Textdateien in einem Verzeichnis, und Sie möchten sie alle durchgehen und nur die löschen, die einen bestimmten Unterstring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie am Ende etwas Wichtiges löschen, wodurch Ihnen viel Arbeit verloren geht.
Eine gute Angewohnheit ist es, Ihren Terminal-Befehl in einem Texteditor herauszuschreiben, zu überlegen, wie er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und den Befehl zuerst darauf auszuführen, um ihn zu testen.

Wenn Sie nicht daran interessiert sind, Terminalbefehle auf Ihrem eigenen Rechner auszuprobieren, gibt es online gehostete Terminals, die sichere Orte bieten, um das Eingeben von Befehlen zu üben, ohne das Risiko einzugehen, Ihren eigenen Rechner zu beschädigen:

- Unser Lernpartner [Scrimba](https://scrimba.com/home?via=mdn) bietet ein Terminal zum Eingeben von Befehlen in ihrer Lernumgebung. Ein großartiger Ort, um dies in Aktion zu sehen, ist ihr [Command Line Basics](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Kurs, der auch eine unterhaltsame interaktive Einführung in das Navigieren durch die Dateistruktur und das Manipulieren von Dateien und Verzeichnissen über das Terminal bietet.
- [Glitch.com](https://glitch.com/) ist ein großartiger Ort, um Webentwicklungscode auszuprobieren, und Glitch-Projekte enthalten auch ein Terminal zum Ausführen von Befehlen.

Eine großartige Ressource, um einen kurzen Überblick über spezifische Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein community-gesteuertes Dokumentationsprojekt, ähnlich wie MDN, jedoch spezifisch für Terminalbefehle.

Im nächsten Abschnitt wollen wir das ganze um einen Takt (oder sogar mehrere Takte) steigern und sehen, wie wir Werkzeuge auf der Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal von Vorteil gegenüber der regulären Desktop-Benutzeroberfläche sein kann.

## Verbinden von Befehlen mit Pipes

Das Terminal entfaltet sein volles Potenzial wirklich, wenn Sie beginnen, Befehle mit dem `|` (Pipe) Symbol zu verketten. Lassen Sie uns ein sehr schnelles Beispiel dafür ansehen, was das bedeutet.

Wir haben bereits `ls` betrachtet, das die Inhalte des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollen? `ls` kann das nicht alleine.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Dieses zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was ihm übergeben wird. Dies kann eine Textdatei sein – das folgende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen dessen zählen, was in es **gepipet** wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, wie sie von dem Befehl `ls` ausgegeben werden (was er normalerweise in das Terminal drucken würde, wenn er alleine ausgeführt wird), und gibt stattdessen diese Anzahl an das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in seiner eigenen Zeile druckt, gibt uns das effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix-) Befehlszeilen-Tools ist, dass sie Text an das Terminal senden (auch als "an Standardausgabe drucken" oder `STDOUT` bezeichnet). Eine große Menge an Befehlen kann auch Inhalte aus gestreamtem Input lesen (bekannt als "Standardinput" oder `STDIN`).

Der Pipe-Operator kann diese Ein- und Ausgaben verbinden, sodass wir zunehmend komplexere Operationen aufbauen können, um unsere Bedürfnisse zu erfüllen – die Ausgabe eines Befehls kann zum Eingabewert des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe an `STDOUT` senden, aber stattdessen wird `ls`'s Ausgabe in `wc` gepipet, das diese Ausgabe als Eingabe nimmt, die Anzahl der Zeilen zählt und anstelle dieser Anzahl an `STDOUT` sendet.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas komplizierteres durchgehen.

1. Wir werden zuerst versuchen, die Inhalte der Seite „fetch“ von MDN mit dem `curl` Befehl abzurufen (mit dem Inhalte von URLs angefordert werden können), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

Wahrscheinlich werden Sie keine Ausgabe erhalten, da die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit sagen, Umleitungen mit der `-L`-Option zu folgen.

2. Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` zurücksendet, mit der `-I`-Option von `curl`, und alle von ihm gesendeten Umleitungspositionen in das Terminal drucken, indem wir die Ausgabe von `curl` in `grep` pipen (wir bitten `grep`, alle Zeilen zurückzugeben, die das Wort "location" enthalten). Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

Ihre Ausgabe sollte etwa so aussehen (`curl` wird zunächst einige Download-Zähler und dergleichen ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

3. Obwohl es konstruiert ist, könnten wir dieses Ergebnis ein wenig weiter treiben und den Inhalt der `location:`-Zeile transformieren, indem wir den Basisursprung an den Anfang jeder hinzufügen, sodass wir vollständige URLs ausgedruckt bekommen. Dazu fügen wir `awk` hinzu (eine Programmiersprache, die JS, Ruby oder Python ähnlich ist, nur viel älter!). Versuchen Sie, dies auszuführen:

   ```bash
   curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Ihre endgültige Ausgabe sollte etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Durch die Kombination dieser Befehle haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server umleitet, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Die Kenntnis Ihres Systems wird sich in den kommenden Jahren als nützlich erweisen – lernen Sie, wie diese einzelnen Werkzeuge arbeiten und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Hinzufügen von „Power-Ups“

Nun, da wir einige der eingebauten Befehle unseres Systems betrachtet haben, sehen wir nun, wie wir ein Drittanbieter-CLI-Tool installieren und verwenden können.

Das riesige Ökosystem von installierbaren Tools für die Front-End-Webentwicklung existiert derzeit größtenteils innerhalb von [npm](https://www.npmjs.com/), einem privatrechtlichen, pakethostenden Service, der eng mit Node.js zusammenarbeitet.
Dieses expandiert langsam – Sie können erwarten, im Laufe der Zeit mehr Paket-Anbieter zu sehen.

Das [Installieren von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilenwerkzeug (und ein ergänzendes npm-zentrisches Werkzeug namens npx), das als Gateway zur Installation zusätzlicher Befehlszeilenwerkzeuge dient. Node.js und npm arbeiten auf allen Systemen auf die gleiche Weise: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie auf die obige URL gehen und einen Node.js-Installer herunterladen und ausführen, der für Ihr Betriebssystem geeignet ist. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass Sie npm als Teil der Installation einbeziehen.

![Der Node.js-Installer auf Windows, der die Option zeigt, npm einzubeziehen](npm-install-option.png)

Wir verwenden hier als Beispiel wieder [Prettier](https://prettier.io/). Wir haben gezeigt, wie man es als VS Code-Erweiterung in unserem [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) Artikel installiert. Hier werden wir Ihnen zeigen, wie es als Befehlszeilen-Tool installiert wird.

> [!NOTE]
> Prettier ist ein meinungsbasierter Code-Formatter mit nur "wenigen Optionen". Weniger Optionen bedeuten tendenziell weniger Komplexität. Da das Tooling manchmal außer Kontrolle geraten kann hinsichtlich der Komplexität, kann "wenige Optionen" sehr verlockend sein.

### Wo installieren wir unsere CLI-Tools?

Bevor wir in die Installation von Prettier eintauchen, steht eine Frage im Raum – "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren – sodass wir überall darauf zugreifen können – oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile in beide Richtungen – und die folgenden Listen von Vor- und Nachteilen für das globale Installieren sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Benötigt weniger Speicherplatz
- Immer dieselbe Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht kompatibel mit Ihrem Projekt-Code
- Andere Entwickler in Ihrem Team haben keinen Zugang zu diesen Tools, z.B. wenn Sie den Code mit einem Tool wie git gemeinsam nutzen.
- Im Zusammenhang mit dem vorherigen Punkt macht es das Projekt schwerer zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten festgelegt und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber zögern Sie nicht, nach der Globalinstallation zu gehen, sobald Sie die relativen Risiken verstehen.

### Installation von Prettier

Prettier ist ein meinungsbasierter Code-Formatter für Front-End-Entwickler, der sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Überlastung des konsistenten manuellen Stils in all Ihren Code-Dateien vermeiden; Prettier kann dies automatisch für Sie erledigen.
- Anfängern in der Webentwicklung helfen, ihren Code im bestmöglichen Format zu formatieren.
- Auf jedem Betriebssystem installiert und sogar als direkter Teil der Projektausrüstung konfiguriert werden, sodass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben von Ihnen verwendeten Code-Stil verwenden.
- Konfiguriert werden, um beim Speichern zu laufen, während Sie tippen oder sogar vor dem Veröffentlichen Ihres Codes (mit zusätzlichem Werkzeug, das wir später in diesem Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie in der [Prettier-Installationsanleitung](https://prettier.io/docs/install.html) vorgeschlagen.

1. Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir erklären, was `--save-dev` im nächsten Artikel bewirkt):

   ```bash
   npm install --save-dev prettier
   ```

2. Sie können jetzt die Datei lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen. Wenn Sie den Befehl ohne Argumente ausführen, erhalten Sie wie bei vielen anderen Befehlen eine Nutzungs- und Hilfeinformation. Versuchen Sie das jetzt:

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

Es lohnt sich immer, sich zumindest oberflächlich über die Nutzungsinformationen zu informieren, selbst wenn sie lang sind.
Sie helfen Ihnen, besser zu verstehen, wie das Tool gedacht ist, benutzt zu werden.

> [!NOTE]
> Wenn Sie nicht zuerst Prettier lokal installiert haben, dann wird `npx prettier` die neueste Version von Prettier herunterladen und ausführen – dies alles nur für diesen Befehl.
> Während das großartig klingen mag, könnten neue Versionen von Prettier das Ergebnis leicht ändern.
> Sie möchten es lokal installieren, um die von Ihnen verwendete Version von Prettier zum Formatieren zu fixieren, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns kurz mit Prettier spielen, damit Sie sehen können, wie es funktioniert.

1. Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

2. Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

   ```js-nolint
   const myObj = {
   a:1,b:{c:2}}
   function printMe(obj){console.log(obj.b.c)}
   printMe(myObj)
   ```

3. Wir können Prettier gegen eine Codebasis laufen lassen, nur um zu überprüfen, ob unser Code angepasst werden möchte. `Cd` in Ihr Verzeichnis und versuchen Sie, diesen Befehl auszuführen:

   ```bash
   npx prettier --check index.js
   ```

Die Ausgabe sollte etwa so aussehen:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

4. Es gibt also einige Code-Stile, die behoben werden können. Kein Problem. Das Hinzufügen der `--write` Option zum `prettier`-Befehl wird diese beheben, so dass wir uns auf das eigentliche Schreiben nützlicher Codes konzentrieren können. Versuchen Sie jetzt, diese Version des Befehls auszuführen:

   ```bash
   npx prettier --write index.js
   ```

Sie erhalten eine Ausgabe wie diese:

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

Aber noch wichtiger ist, dass sich Ihre JavaScript-Datei in etwas wie das folgende umformatiert hat, wenn Sie sich diese ansehen:

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

Abhängig von Ihrem Arbeitsablauf (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich, wo Tools hervorragende Leistungen erbringen; unsere persönliche Präferenz ist die Art der Automatisierung, die "einfach passiert" ohne irgendwelche Konfiguration.

Mit Prettier gibt es eine Reihe von Möglichkeiten, Automatisierung zu erreichen, und obwohl sie jenseits des Geltungsbereichs dieses Artikels liegen, gibt es im Internet einige ausgezeichnete Ressourcen, die helfen können (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository committen, mit [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie in Ihrem Code-Editor auf "Speichern" klicken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Option – während wir z.B. VS Code verwenden, tritt Prettier in Aktion und bereinigt jede Formatierung, die es benötigt, jedes Mal, wenn wir auf Speichern klicken. Sie finden viel mehr Informationen zum Verwenden von Prettier auf verschiedene Weisen in den [Prettier-Dokumenten](https://prettier.io/docs/).

## Weitere Tools zum Ausprobieren

Wenn Sie ein paar weitere Tools ausprobieren möchten, hier ist eine kurze Liste, die Spaß macht:

- [`bat`](https://github.com/sharkdp/bat) – Ein "schönerer" `cat` (`cat` wird verwendet, um den Inhalt von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) – `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) – Ein Prozessbetrachter, nützlich, wenn etwas dazu führt, dass Ihr CPU-Lüfter sich wie ein Jet-Triebwerk verhält und Sie das schuldige Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) – bereits früher in diesem Kapitel erwähnt, aber auch als Befehlszeilen-Tool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Das bringt uns zum Ende unserer Einführungstour durch das Terminal/die Befehlszeile und dem Ende des Modul "Umgebungseinrichtung". Als nächstes werden wir Ihnen helfen, Ihre erste einfache Website zu erstellen, damit Sie eine Vorstellung davon bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
