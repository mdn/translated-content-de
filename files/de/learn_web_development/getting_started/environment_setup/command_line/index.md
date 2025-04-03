---
title: Schnellkurs für die Befehlszeile
short-title: Command line
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

In Ihrem Entwicklungsprozess werden Sie unweigerlich einige Befehle im Terminal (oder auf der "Befehlszeile" — das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie Sie Befehle miteinander verketten und wie Sie Ihre eigenen Befehlszeilenschnittstellen (CLI)-Werkzeuge hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über Ihr Computerbetriebssystem, die grundlegende Software, die Sie zur Erstellung einer Website verwenden werden, und Dateisysteme.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was die Befehlszeile ist und was Sie damit tun können.</li>
          <li>Verstehen, wie Sie auf verschiedenen Systemen auf die Befehlszeile zugreifen.</li>
          <li>Kennen grundlegender Tastaturkürzel (z. B. Pfeil nach oben, um vorherige Befehle aufzurufen, Tab zur Autovervollständigung).</li>
          <li>Kennen grundlegender Befehle (z. B. <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/-flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie irgendein Tool für die Webentwicklung ausführen, besteht eine nahezu garantierte Chance, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um Ihre gewählten Werkzeuge zu verwenden (solche Werkzeuge werden oft als **CLI-Tools** — Command Line Interface Tools — bezeichnet).

Eine große Anzahl von Tools kann verwendet werden, indem Befehle in die Befehlszeile eingegeben werden; viele sind bereits auf Ihrem System vorinstalliert, und eine Vielzahl weiterer Tools kann über Paketregister installiert werden.
Paketregister sind wie App-Stores, aber (hauptsächlich) für Befehlszeilen-basierte Tools und Software.
Später in diesem Kapitel werden wir sehen, wie man einige Werkzeuge installiert, und wir lernen mehr über Paketregister im nächsten Kapitel.

Eine der größten Kritiken an der Befehlszeile ist, dass sie in Bezug auf die Benutzererfahrung erheblich mangelhaft ist.
Die Befehlszeile zum ersten Mal zu sehen, kann eine einschüchternde Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit nur wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick wirken sie wenig einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu verwenden!
Deshalb bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt ungefähr aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt nicht wirklich dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig über die Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstanter Bestandteil aller Betriebssysteme geblieben – von Desktop-Computern bis zu in der Cloud versteckten Servern, über Mikrocomputer wie den Raspberry PI Zero bis hin zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und auf niedrigstufige Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung – beispielsweise um einen Befehl zu schreiben, um die Titel von Hunderten von Dateien in einem Augenblick zu aktualisieren, z. B. von „ch01-xxxx.png“ zu „ch02-xxxx.png“. Würden Sie die Dateinamen mit Ihrer Finder oder Explorer GUI-App ändern, würde das sehr lange dauern.

Wie auch immer, das Terminal wird in naher Zukunft nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die Ihnen den Zugriff auf ein Terminal ermöglichen.

Die nächsten Bilder zeigen die Kommandozeilenaufforderungen, die in Windows verfügbar sind – es gibt eine gute Auswahl an Optionen vom Programm "cmd" bis zu "powershell" – die Sie über das Startmenü durch Eingabe des Programmnamen ausführen können.

![Ein Standard-Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die macOS Terminal-Anwendung.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greift man auf das Terminal zu?

Viele Entwickler verwenden heutzutage Unix-basierte Tools (z. B. das Terminal und die Werkzeuge, die Sie darüber aufrufen können). Viele Tutorials und Werkzeuge, die heute im Web existieren, unterstützen (und nehmen leider auch an) Unix-basierte Systeme an, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf Ihrem gewählten System auf das Terminal zugreifen können.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme ein Terminal, das standardmäßig verfügbar ist und in Ihren Anwendungen aufgeführt ist.

#### macOS

macOS hat ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und Zugriff auf niedrigstufige Werkzeuge bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, sicherlich gut genug, um uns keine Kopfschmerzen zu bereiten, während wir diesen Artikel bearbeiten.

Das Terminal ist auf macOS unter `Programme/Dienstprogramme/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmiertools war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach wie auf anderen Betriebssystemen. Aber es wird besser.

Windows hatte traditionell ein eigenes terminalähnliches Programm namens `cmd` ("die Eingabeaufforderung") seit langem, aber dieses hat keine Parität mit Unix-Befehlen und ist gleichwertig mit der alten Windows DOS-Eingabeaufforderung.

Bessere Programme bieten eine terminalähnliche Erfahrung auf Windows, wie PowerShell ([siehe hier, um Installationsprogramme zu finden](https://github.com/PowerShell/PowerShell)) und Gitbash (das Teil des [git for Windows](https://gitforwindows.org/) Werkzeugkastens ist).

Die beste Option für Windows in der heutigen Zeit ist jedoch das Windows Subsystem für Linux (WSL) — eine Kompatibilitätsschicht zum Ausführen von Linux-Betriebssystemen direkt aus Windows 10 heraus, sodass Sie ein "echtes Terminal" direkt auf Windows ausführen können, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Sie finden alle Dokumentationen, die Sie benötigen, in der [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Windows Subsystem for Linux Dokumentation](wsl.png)

In Bezug auf die Auswahlmöglichkeit in Windows empfehlen wir nachdrücklich, das WSL zu installieren. Sie könnten bei der standardmäßigen Eingabeaufforderung (`cmd`) bleiben, und viele Werkzeuge funktionieren gut, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Werkzeugen haben.

#### Hinweis: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die startet und eine Verbindung zu einer Shell herstellt. Eine Shell ist Ihre Sitzung und Umgebung (wo Dinge wie der Prompt und die Tastenkombinationen möglicherweise angepasst werden). Die Befehlszeile ist die tatsächliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine Fülle von Werkzeugen gibt, die von der Befehlszeile aus verfügbar sind, gibt es bei der Verwendung von Werkzeugen wie [Visual Studio Code](https://code.visualstudio.com/) auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Allerdings werden Sie nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden — irgendwann müssen Sie etwas Erfahrung mit dem Terminal sammeln.

## Grundlegende integrierte Terminalbefehle

Genug geredet — lassen Sie uns einige Terminalbefehle ansehen! Out-of-the-box gibt es einige Dinge, die die Befehlszeile kann, zusammen mit den Namen der entsprechenden Werkzeuge in jedem Fall:

- Navigieren im Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen innerhalb Ihrer Verzeichnisstruktur: `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Herunterladen von Dateien von bestimmten URLs: `curl`
- Suchen nach Textfragmenten in größeren Textkörpern: `grep`
- Anzeigen des Inhalts einer Datei seitenweise: `less`, `cat`
- Manipulieren und Transformieren von Textströmen (zum Beispiel Ändern aller Instanzen von `<div>` in einer HTML-Datei in `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Befehlszeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns vorwärts gehen und einen Blick darauf werfen, wie man einige dieser Werkzeuge auf der Befehlszeile verwendet. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (bei Standardinstallation) starten ihr Terminalprogramm im _Home_-Verzeichnis, und von dort aus möchten Sie wahrscheinlich zu einem anderen Ort wechseln.

> [!NOTE]
> "Verzeichnis" ist der technische Begriff für das, was wir im vorherigen Artikel als "Ordner" bezeichnet haben. Beim Betrachten der Dateistruktur in einer Benutzeroberfläche (UI) macht der Begriff "Ordner" mehr Sinn, da die verwendeten Symbole wie alte physische Aufbewahrungsordner aussehen. Sie hören jedoch häufig auch den Begriff "Verzeichnis", besonders wenn es darum geht, Dateien über die Befehlszeile zu manipulieren. Es gibt Nuancen, aber die beiden Begriffe bedeuten im Wesentlichen dasselbe.

Der `cd`-Befehl lässt Sie das Verzeichnis ändern. Technisch gesehen ist cd kein Programm, sondern ein eingebautes System. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und Sie es auch nicht versehentlich löschen können — zum Glück! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen unix-basierten Systemen erscheinen.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, in das Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![Ergebnisse des cd Desktop Befehls, der in einer Vielzahl von Windows-Terminals ausgeführt wird - die Terminal-Location wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie in das vorherige Verzeichnis zurückgehen möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalabkürzung ist die Verwendung der <kbd>tab</kbd>-Taste, um Namen, von denen Sie wissen, dass sie vorhanden sind, automatisch zu vervollständigen, anstatt das Ganze eingeben zu müssen. Versuchen Sie zum Beispiel nach Eingabe der obigen beiden Befehle `cd D` einzugeben und <kbd>tab</kbd> zu drücken — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, wenn Sie weitermachen.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief verschachtelt ist, müssen Sie den Pfad dorthin kennen. Dies wird in der Regel einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden, aber wenn Sie sich nicht sicher sind, können Sie normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` wollen, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem _Desktop_ befindet, könnten Sie diese drei Befehle verwenden, um dorthin zu gelangen, von Ihrem _Home_-Verzeichnis aus:

```bash
cd Desktop
cd project
cd src
```

Aber das ist eine Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines führenden Schrägstrichs zum Pfad den Pfad absolut macht, z.B. `/Users/your-user-name/Desktop`. Das Weglassen des führenden Schrägstrichs, wie wir es oben getan haben, macht den Pfad relativ zum aktuellen Arbeitsverzeichnis. Das ist genau so, wie Sie es bei URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "an der Wurzel der Website", während das Weglassen des Schrägstrichs bedeutet, "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschläge anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, schauen Sie sich diesen [YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, in dem einer der Principal Engineers von Microsoft eine Erklärung gibt.

### Auflisten des Verzeichnisinhalts

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für List), der die Inhalte des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die standardmäßige Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend – Sie bekommen nur den Namen jedes Elements, nicht, ob es eine Datei oder ein Verzeichnis ist, oder irgendetwas anderes. Zum Glück kann eine kleine Änderung der Befehlssyntax Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifikatoren, die Sie an das Ende eines Befehls anhängen, wodurch er sich ein wenig anders verhält. Diese bestehen typischerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich und einem oder mehreren Buchstaben.

Versuchen Sie zum Beispiel Folgendes und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_Bindestrich ell_)-Option eine Liste mit je einer Datei oder einem Verzeichnis pro Zeile und viel mehr angezeigten Informationen. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen schaut. Das sind die, in die wir `cd` wechseln können.

Unten ist ein Screenshot mit einem "Vanilla" macOS Terminal oben, und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig zu halten – beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein Vanilla macOS Terminal und ein bunteres, anpassbares macOS Terminal, zeigt eine Dateiliste - das Ergebnis der Ausführung des ls -l Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl hat, können Sie seine [Man-Seite](https://en.wikipedia.org/wiki/Man_page) aufrufen. Dies geschieht, indem Sie den `man`-Befehl eingeben, gefolgt von dem Namen des Befehls, den Sie nachschlagen möchten, z.B. `man ls`. Dies öffnet die Man-Seite im standardmäßigen Textdatei-Viewer des Terminals (z.B. [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, durch die Seite mit den Pfeiltasten zu blättern oder einem ähnlichen Mechanismus. Die Man-Seite listet alle Optionen ausführlich auf, was anfangs ein wenig einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Sobald Sie mit dem Durchlesen der Man-Seite fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Text-Viewers schließen ("q" in `less`; Sie müssen möglicherweise im Internet nachsehen, um es zu finden, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie normalerweise alle in einem einzigen String nach dem Bindestrich Zeichen setzen, z.B. `ls -lah` oder `ls -ltrh`. Versuchen Sie, die `ls` Man-Seite zu lesen, um herauszufinden, was diese zusätzlichen Optionen bewirken!

Jetzt, da wir über zwei grundlegende Befehle gesprochen haben, schauen Sie sich ein wenig in Ihrem Verzeichnis um und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe weiterer nützlicher Grundbefehle, die Sie wahrscheinlich ziemlich oft verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle so detailliert erklären wie die vorhergehenden paar.

Spielen Sie mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nichts versehentlich Wichtiges löschen, und verwenden Sie dabei die untenstehenden Beispielbefehle als Anleitung:

- `mkdir` — Damit erstellen Sie ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel erstellt `mkdir my-awesome-website` ein neues Verzeichnis mit dem Namen `my-awesome-website`.
- `rmdir` — Entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel entfernt `rmdir my-awesome-website` das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein nicht leeres Verzeichnis entfernen möchten (und auch alles, was es enthält), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, das Sie später noch benötigen könnten, da es für immer verschwunden ist.
- `touch` — Erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel erstellt `touch mdn-example.md` eine neue leere Datei mit dem Namen `mdn-example.md`.
- `mv` — Verschiebt eine Datei von dem ersten angegebenen Speicherort zum zweiten angegebenen Speicherort. Zum Beispiel `mv mdn-example.md mdn-example.txt` (die Orte werden als Dateipfade angegeben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber praktisch gesehen wird die Datei damit umbenannt.
- `cp` — ähnelt der Verwendung von `mv`, `cp` erstellt eine Kopie der Datei am ersten angegebenen Ort am zweiten angegebenen Ort. Zum Beispiel erstellt `cp mdn-example.txt mdn-example.txt.bak` eine Kopie von `mdn-example.txt` mit dem Namen `mdn-example.txt.bak` (Sie können es natürlich anders benennen, wenn Sie möchten).
- `rm` — Entfernt die angegebene Datei. Zum Beispiel löscht `rm mdn-example.txt` eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie auf Ihrer Desktop-Benutzeroberfläche haben könnten.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Sternchen als Platzhalterzeichen zu verwenden, was "jede Sequenz von Zeichen" bedeutet. Dies ermöglicht es Ihnen, eine Operation auf eine potenziell große Anzahl von Dateien gleichzeitig auszuführen, von denen alle dem angegebenen Muster entsprechen. Als Beispiel `rm mdn-*` würde alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und auf `.bak` enden.

## Terminal — als gefährlich betrachtet?

Wir haben dies bereits angedeutet, aber um klar zu sein — Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle bergen nicht allzu viele Gefahren, aber sobald Sie komplexere Befehle zusammenstellen, müssen Sie sorgfältig überlegen, was der Befehl bewirken wird, und versuchen, sie zuerst zu testen, bevor Sie sie endgültig im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie haben 1000 Textdateien in einem Verzeichnis und möchten sie alle durchgehen und nur die löschen, die einen bestimmten Substring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dadurch eine Menge Ihrer Arbeit verlieren.
Eine gute Gewohnheit ist es, Ihren Terminalbefehl in einem Texteditor zu schreiben, zu überlegen, wie er aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und den Befehl zuerst darauf auszuprobieren, um ihn zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht wohl dabei fühlen, Terminalbefehle auf Ihrem eigenen Rechner auszuprobieren, ist ein sicherer Ort, um sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben der Möglichkeit, Webentwicklungscode auszuprobieren, geben Ihnen die Projekte auch Zugriff auf ein Terminal, sodass Sie alle diese Befehle direkt in diesem Terminal ausführen können, in dem Wissen, dass Sie Ihren eigenen Computer nicht kaputt machen werden.

![Ein Doppelscreenshot, der die glitch.com-Startseite und den glitch-Terminalemulator zeigt](glitch.png)

Eine großartige Ressource für einen schnellen Überblick über spezifische Terminalbefehle ist [tldr.sh](https://tldr.sh/). Dies ist ein community-gesteuerter Dokumentationsdienst, ähnlich wie MDN, der aber spezifisch für Terminalbefehle ist.

Im nächsten Abschnitt gehen wir einen Schritt weiter (oder in der Tat mehrere Schritte weiter) und sehen, wie wir Werkzeuge auf der Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet sein volles Potenzial, wenn Sie beginnen, Befehle mit dem `|` (Pipe) Symbol zu verketten. Schauen wir uns ein sehr schnelles Beispiel an, was das bedeutet.

Wir haben bereits `ls` angesehen, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das alleine nicht.

Es gibt ein weiteres Unix-Werkzeug namens `wc`. Das zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes eines beliebigen Eingabewerts. Dies kann eine Textdatei sein – im folgenden Beispiel wird die Anzahl der Zeilen in `myfile.txt` ausgegeben:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen eines beliebigen Ausgabewerts zählen, der in es **gepipet** wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die vom `ls`-Befehl ausgegeben werden (was es normalerweise auf dem Terminal ausgeben würde, wenn es alleine ausgeführt wird) und gibt diese Anzahl stattdessen auf dem Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile ausgibt, erhalten wir damit effektiv eine Verzeichnungs- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix-)Befehlszeilenwerkzeugen ist, dass sie Text auf das Terminal ausgeben (auch "Standardausgabe drucken" oder `STDOUT` genannt). Ein guter Teil der Befehle kann auch Inhalte aus einem Stream lesen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Ein- und Ausgaben miteinander _verbinden_ und es uns ermöglichen, immer komplexere Operationen zu erstellen, um unseren Bedürfnissen gerecht zu werden — die Ausgabe von einem Befehl kann die Eingabe für den nächsten Befehl werden. In diesem Fall würde `ls` normalerweise seine Ausgabe an `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepipet, das diese Ausgabe als eine Eingabe nimmt, die Anzahl der Zeilen darin zählt und diese Anzahl an `STDOUT` ausgibt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas etwas komplizierteres durchgehen.

Wir werden zunächst versuchen, den Inhalt von MDNs "fetch"-Seite mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, weil die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` ausdrücklich mitteilen, Weiterleitungen mit der `-L`-Flagge zu folgen.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` zurückgibt, indem wir das `-I`-Flag von `curl` verwenden und alle Location-Redirects, die es sendet, auf dem Terminal ausgeben, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, das Folgende auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (kurz vor dem Ausführen wird `curl` einige Download-Zähler und Ähnliches ausgeben):

```bash
location: /en-US/docs/Web/API/Window/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis noch ein wenig weiter treiben und die Inhalte der `location:`-Zeilen transformieren, indem wir die Basis-URL an den Anfang jedes einzelnen hinzufügen, sodass vollständige URLs Ausgeber eingefügt werden.
Dafür werden wir `awk` zum Mix hinzufügen (was eine Programmiersprache ähnlich zu JavaScript oder Ruby oder Python ist, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihr endgültiges Ergebnis sollte etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs anzuzeigen, durch die der Mozilla-Server uns beim Anfordern der URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` weiterleitet.
Ihr System besser kennenzulernen, wird sich in den kommenden Jahren als nützlich erweisen — lernen Sie, wie diese einmal verwendbaren Werkzeuge arbeiten und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Hinzufügen von Erweiterungen

Da wir nun einige der integrierten Befehle untersucht haben, mit denen Ihr System ausgestattet ist, lassen Sie uns sehen, wie wir ein Drittanbieter-CLI-Tool installieren und es verwenden können.

Das riesige Ökosystem von installierbaren Tools für die Frontend-Webentwicklung existiert derzeit hauptsächlich in [npm](https://www.npmjs.com/), einem privat betriebenen Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies erweitert sich langsam — Sie können erwarten, dass in Zukunft mehr Paketprovider auftauchen werden.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilentool (und ein ergänzendes npm-zentrisches Tool namens npx), das Zugang zur Installation zusätzlicher Befehlszeilentools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie zur obigen URL gehen und einen Node.js-Installer herunterladen und ausführen, der Ihrem Betriebssystem entspricht. Falls Sie aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation eingeschlossen ist.

![Der Node.js-Installer auf Windows, der die Option zum Einschließen von npm zeigt](npm-install-option.png)

Wir werden wieder [Prettier](https://prettier.io/) als Beispiel verwenden. Wir haben gezeigt, wie man es als VS Code-Erweiterung in unserem Artikel [Code-Editoren](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions) installiert. Hier zeigen wir, wie Sie es als Befehlszeilentool installieren.

> [!NOTE]
> Prettier ist ein "meinungsstarkes" Code-Formatierungstool mit nur wenigen "Optionen". Weniger Optionen bedeutet tendenziell einfacher. Angesichts der Tatsache, dass Tooling manchmal im Hinblick auf Komplexität außer Kontrolle geraten kann, kann "wenige Optionen" sehr ansprechend sein.

### Wo sollen wir unsere CLI-Tools installieren?

Bevor wir in die Installation von Prettier eintauchen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, ob wir die Tools global installieren — so dass sie überall zugänglich sind — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile auf beiden Seiten — und die folgenden Listen von Vor- und Nachteilen für das globale Installieren sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal aus jederzeit zugänglich
- Nur einmal installieren
- Benötigt weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht kompatibel mit Ihrem Projektcode
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, zum Beispiel, wenn Sie den Code über ein Tool wie Git teilen.
- In Bezug auf den vorherigen Punkt, macht das, es schwieriger, Projektcode zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, ist die negative Auswirkung der globalen Installation potenziell viel größer als der Nutzen.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relative Risiken verstehen.

### Installation von Prettier

Prettier ist ein "meinungsstarkes" Code-Formatierungswerkzeug für Frontend-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Den kognitiven Aufwand beseitigen, den Stil manuell in allen Ihren Code-Dateien konsistent zu halten; Prettier kann dies automatisch für Sie tun.
- Neulingen in der Webentwicklung helfen, ihren Code im besten Praktiken-Stil zu formatieren.
- Auf jedem Betriebssystem installiert und sogar direkt als Teil der Projektwerkzeuge integriert werden, wodurch sichergestellt wird, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- So konfiguriert werden, dass es beim Speichern, beim Tippen oder sogar vor der Veröffentlichung Ihres Codes ausgeführt wird (mit zusätzlichem Werkzeug, die wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/install.html) vorgeschlagen.

Nachdem Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir erklären, was `--save-dev` im nächsten Artikel bewirkt):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mithilfe des [npx](https://docs.npmjs.com/cli/commands/npx/)-Tools ausführen.
Das Ausführen des Befehls ohne Argumente, wie bei vielen anderen Befehlen, bietet Benutzerdokumentation und Hilfeinformationen an.
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

Es lohnt sich immer mindestens die Übersicht über die Benutzerdokumentation zu überfliegen, auch wenn sie lang ist.
Es wird Ihnen helfen, besser zu verstehen, wie das Werkzeug verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird durch das Ausführen von `npx prettier` die neueste Version von Prettier heruntergeladen und ausgeführt, alles auf einmal _nur für diesen Befehl_.
> Auch wenn das großartig klingen mag, können neue Versionen von Prettier die Ausgabe leicht ändern.
> Sie möchten es lokal installieren, um die Version von Prettier zu fixieren, die Sie für die Formatierung verwenden, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns kurz mit Prettier spielen, damit Sie sehen, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo auf Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js`, in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen eine Codebasis ausführen, um einfach zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe erhalten, die in etwa so aussieht wie:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also, es gibt einige Code-Stile, die behoben werden können. Kein Problem. Durch das Hinzufügen der `--write`-Option zum `prettier`-Befehl werden diese korrigiert, sodass wir uns darauf konzentrieren können, tatsächlich nützlichen Code zu schreiben.

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

Aber noch wichtiger, wenn Sie zurück zu Ihrer JavaScript-Datei schauen, stellen Sie fest, dass sie so etwas formatiert wurde:

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

Abhängig von Ihrem Arbeitsablauf (oder dem Arbeitsablauf, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich der Bereich, in dem Werkzeuge glänzen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie die Automatisierung erreicht werden kann, und obwohl sie außerhalb des Umfangs dieses Artikels liegt, gibt es online einige ausgezeichnete Ressourcen, die helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository über [Husky](https://github.com/typicode/husky) einchecken.
- Immer wenn Sie in Ihrem Code-Editor auf "speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist der zweite Punkt — während der Nutzung von z.B. VS Code tritt Prettier in und räumt alle Formatierungen, die es tun muss, weg, jedes Mal, wenn wir speichern. Sie finden viel mehr Informationen über die Verwendung von Prettier auf verschiedene Weise in den [Prettier-Dokumenten](https://prettier.io/docs/).

## Weitere Werkzeuge zum Ausprobieren

Wenn Sie noch ein paar weitere Werkzeuge ausprobieren möchten, hier ist eine kurze Liste, die Spaß macht zu testen:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visuell angezeigt (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozess-Viewer, nützlich, um herauszufinden, welches Programm Ihren CPU-Lüfter wie ein Triebwerk verhält und Sie will, das verantwortliche Programm zu identifizieren.
- [`tldr`](https://tldr.sh/#installation) — Schon am Anfang erwähnt, aber als Befehlszeilentool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise mit npm installiert werden müssen, wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer Einführungstour durch das Terminal/die Befehlszeile und dem Modul zur Einrichtung der Umgebung. Als nächstes werden wir Sie daran arbeiten lassen, Ihre erste einfache Website zu erstellen, sodass Sie ein Gefühl dafür bekommen, wie Webentwicklung aussieht.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
