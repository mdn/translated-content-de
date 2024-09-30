---
title: Einführung in die Befehlszeile
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Im Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder in der "Befehlszeile" — das ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie Sie Befehle verketten und wie Sie Ihre eigenen Command Line Interface (CLI)-Tools hinzufügen können.

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
        Verständnis dafür, was das Terminal/die Befehlszeile ist, welche grundlegenden Befehle Sie lernen sollten und wie Sie neue Befehlszeilentools installieren.
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle für die Ausführung textbasierter Programme. Wenn Sie Tools für die Webentwicklung nutzen, besteht eine fast garantierte Chance, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um die von Ihnen gewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** — Command Line Interface Tools — bezeichnet).

Viele Tools können verwendet werden, indem man Befehle in die Befehlszeile eingibt; viele sind bereits auf Ihrem System vorinstalliert, und eine große Anzahl anderer Tools kann aus Paketregistern installiert werden. Paketregister sind wie App-Stores, aber (meistens) für auf der Befehlszeile basierende Tools und Software. Wir werden später in diesem Kapitel sehen, wie man einige Tools installiert, und im nächsten Kapitel mehr über Paketregister erfahren.

Eine der größten Kritikpunkte an der Befehlszeile ist, dass sie in der Benutzererfahrung erheblich fehlt. Die Befehlszeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe darüber, was zu tun ist.

Oberflächlich betrachtet sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit etwas Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb bieten wir dieses Kapitel an, um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein wenig Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben — von Desktop-Maschinen bis hin zu in der Cloud versteckten Servern, über Mikrocomputer wie den Raspberry PI Zero, bis hin zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und auf niedrigstufige Funktionen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung — zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen über Ihre Finder- oder Explorer-GUI-App aktualisieren würden, würde es lange dauern.

Wie auch immer, das Terminal wird so schnell nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Geschmacksrichtungen von Programmen, die Ihnen den Zugang zu einem Terminal ermöglichen können.

Die nächsten Bilder zeigen die in Windows verfügbaren Befehlsaufforderungen — es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis zu "powershell" — die vom Startmenü ausgeführt werden können, indem der Programmname eingegeben wird.

![Ein normales Windows-Cmd-Fenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminalanwendung unter macOS.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler nutzen heute Unix-basierte Tools (z. B. das Terminal und die Tools, die Sie darüber erreichen können). Viele Tutorials und Tools, die es heute im Web gibt, unterstützen (und gehen bedauerlicherweise von) Unix-basierte(n) Systeme(n) aus, aber keine Sorge — sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt sehen wir uns an, wie Sie Zugriff auf das Terminal auf Ihrem gewählten System erhalten.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme standardmäßig ein Terminal, das in Ihren Anwendungen aufgeführt ist.

#### macOS

macOS verfügt über ein System namens Darwin, das unterhalb der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die niedrigstufigen Tools bereitstellt. macOS Darwin hat meist Parität mit Unix, jedenfalls genug, um uns keine Sorgen zu machen, während wir diesen Artikel durcharbeiten.

Das Terminal ist auf macOS unter Applications/Utilities/Terminal verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Nutzung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder bequem wie bei anderen Betriebssystemen. Aber die Dinge werden besser.

Windows hatte traditionell sein eigenes terminalähnliches Programm namens cmd ("die Eingabeaufforderung") für eine lange Zeit, aber dies hat definitiv keine Parität mit Unix-Befehlen und ist äquivalent zur alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren für die Bereitstellung einer Terminalerfahrung auf Windows, wie z. B. Powershell ([hier finden Sie Installationsprogramme](https://github.com/PowerShell/PowerShell)), und Gitbash (das als Teil des [git for Windows](https://gitforwindows.org/) Toolsets kommt).

Die beste Option für Windows in der modernen Zeit ist jedoch das Windows Subsystem for Linux (WSL) — eine Kompatibilitätsschicht für die Ausführung von Linux-Betriebssystemen direkt innerhalb von Windows 10, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows auszuführen, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Alle benötigten Dokumentationen finden Sie in der [Windows Subsystem for Linux Dokumentation](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Windows Subsystem for Linux Dokumentation](wsl.png)

In Bezug darauf, welche Option Sie unter Windows wählen sollten, empfehlen wir nachdrücklich, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Werkzeuge werden funktionieren, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Anmerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

Allgemein werden diese beiden Begriffe synonym verwendet. Technisch ist ein Terminal eine Software, die startet und sich mit einer Shell verbindet. Eine Shell ist Ihre Sitzung und die Umgebung der Sitzung (wo Dinge wie die Eingabeaufforderung und Abkürzungen angepasst werden könnten). Die Befehlszeile ist die buchstäbliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal benutzen?

Obwohl es eine große Anzahl von Werkzeugen gibt, die über die Befehlszeile verfügbar sind, gibt es auch eine Masse von Erweiterungen für Tools wie [Visual Studio Code](https://code.visualstudio.com/), die als Vermittler dienen können, um Befehlszeilenbefehle zu verwenden, ohne das Terminal direkt zu nutzen. Es wird jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung geben — irgendwann müssen Sie zumindest einige Erfahrungen mit dem Terminal machen.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — schauen wir uns einige Terminalbefehle an! Aus der Box können Sie mit der Befehlszeile nur einige der folgenden Dinge tun, zusammen mit den entsprechenden Namen der relevanten Werkzeuge in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur: `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Laden Sie Dateien von bestimmten URLs herunter: `curl`
- Suchen Sie nach Textfragmenten in größeren Textmengen: `grep`
- Anzeigen des Inhalts einer Datei seitenweise: `less`, `cat`
- Manipulieren und Transformieren von Textströmen (zum Beispiel das Ändern aller Instanzen von `<div>`s in einer HTML-Datei in `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Web, die viel tiefer in die Befehlszeile gehen — dies ist nur eine kurze Einführung!

Schauen wir vorwärts und sehen wir uns an, wie wir einige dieser Werkzeuge in der Befehlszeile verwenden. Bevor Sie weitermachen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie zwangsläufig zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt eine Standardinstallation) starten ihr Terminalprogramm in Ihrem "Home"-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

Der `cd`-Befehl lässt Sie ein Verzeichnis ändern. Technisch gesehen ist cd kein Programm, sondern ein eingebautes. Dies bedeutet, dass Ihr Betriebssystem es direkt aus der Box bereitstellt und dass Sie es nicht versehentlich löschen können — danke, Himmel! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen unix-basierten Systemen erscheinen.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, in das Sie wechseln möchten. Vorausgesetzt, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die unten stehenden Screenshots).

![Ergebnisse des cd Desktop-Befehls, der in einer Vielzahl von Windows-Terminals ausgeführt wird - der Terminal-Standort bewegt sich auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie wieder zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalabkürzung ist die Verwendung der <kbd>tab</kbd>-Taste zum automatischen Vervollständigen von Namen, von denen Sie wissen, dass sie vorhanden sind, anstatt den ganzen Namen eingeben zu müssen. Versuchen Sie beispielsweise, nachdem Sie die obigen beiden Befehle eingegeben haben, `cd D` einzugeben und <kbd>tab</kbd> zu drücken. Es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, dass es im aktuellen Verzeichnis vorhanden ist. Beachten Sie dies, während Sie voranschreiten.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden. Wenn Sie sich jedoch nicht sicher sind, können Sie den Pfad in der Regel mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken in Ihrem Explorer/Finder-Fenster herausfinden, um zu sehen, wo ein Verzeichnis sich befindet, relativ zu Ihrem aktuellen Standort.

Wenn Sie beispielsweise zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` auf dem `Desktop` befindet, könnten Sie diese drei Befehle eingeben, um dorthin von Ihrem Home-Verzeichnis zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt werden, genau wie bei der Angabe von Pfaden zu Bildern oder anderen Ressourcen in CSS-, HTML- oder JavaScript-Code:

```bash
cd Desktop/project/src
```

Beachten Sie, dass bei einem führenden Schrägstrich im Pfad der Pfad absolut wird, z. B. `/Users/Ihr-Benutzername/Desktop`. Wenn der führende Schrägstrich weggelassen wird, wie wir es oben getan haben, wird der Pfad relativ zu Ihrem aktuell genutzten Arbeitsverzeichnis. Dies ist genau das, was Sie bei URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Ursprung der Website", während das Weglassen des Schrägstrichs "die URL ist relativ zu meiner aktuellen Seite" bedeutet.

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschrägstriche anstelle von Schrägstrichen, z. B. `cd Desktop\project\src` — das mag wirklich seltsam erscheinen, aber wenn Sie interessiert sind, warum das so ist, [sehen Sie sich diesen YouTube-Clip an](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der leitenden Ingenieure von Microsoft.

### Auflisten der Verzeichnisinhalte

Ein weiterer eingebauter Unix-Befehl ist `ls` (kurz für list), der den Inhalt des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal zu testen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuell genutzten Arbeitsverzeichnis, aber die Informationen sind wirklich grundlegend — Sie erhalten nur den Namen jedes präsentierten Elements, nicht, ob es sich um eine Datei oder ein Verzeichnis handelt oder etwas anderes. Glücklicherweise kann eine kleine Änderung der Befehlsverwendung viel mehr Informationen bieten.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — dies sind Modifikationen, die Sie am Ende eines Befehls anfügen, die ihn in einer leicht anderen Weise funktionieren lassen. Diese bestehen in der Regel aus einem Leerzeichen nach dem Befehl, gefolgt von einem Bindestrich und einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Falle von `ls` gibt die `-l` (_Bindestrich ell_) Option eine Auflistung mit einer Datei oder einem Verzeichnis pro Zeile und viel mehr angezeigten Informationen. Verzeichnisse können identifiziert werden, indem man nach einem Buchstaben "d" ganz links auf den Zeilen sucht. Das sind die, in die wir `cd` hinein können.

Unten ist ein Screenshot mit einem "Vanilla"-macOS-Terminal oben und einem benutzerdefinierten Terminal mit zusätzlichen Symbolen und Farben, um es lebendig zu halten — beide zeigen die Ergebnisse des `ls -l`-Befehls:

![Ein Vanilla-macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, das eine Datei-Liste zeigt - das Ergebnis des ls -l-Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um herauszufinden, welche Optionen jeder Befehl hat, können Sie die [man Seite](https://de.wikipedia.org/wiki/Man_page) aufrufen. Dies geschieht, indem Sie den `man`-Befehl eingeben, gefolgt vom Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dadurch wird die man Seite im Standard-Textdatei-Viewer des Terminals geöffnet (zum Beispiel [`less`](<https://de.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, durch die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus zu blättern. Die man Seite listet alle Optionen im Detail auf, was am Anfang möglicherweise etwas einschüchternd ist, aber zumindest wissen Sie, dass es da ist, wenn Sie es brauchen. Sobald Sie mit dem Durchsehen der man Seite fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Text-Viewers („q“ in `less`; Sie müssen möglicherweise im Internet suchen, um sie zu finden, wenn sie nicht offensichtlich ist) beenden.

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese in der Regel alle in eine einzelne Zeichenfolge nach dem Bindestrichzeichen setzen, z. B. `ls -lah` oder `ls -ltrh`. Versuchen Sie, die man-Seite von `ls` zu betrachten, um herauszufinden, was diese zusätzlichen Optionen tun!

Da wir nun zwei grundlegende Befehle besprochen haben, stöbern Sie ein wenig in Ihrem Verzeichnis herum und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, kopieren, verschieben, entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich ziemlich oft verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, daher werden wir sie nicht alle so detailliert erklären wie die vorherigen.

Probieren Sie sie in einem Testverzeichnis aus, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, indem Sie die Beispielbefehle unten als Orientierungshilfe verwenden:

- `mkdir` — Dies erstellt ein neues Verzeichnis innerhalb des aktuellen Verzeichnisses, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel `mkdir my-awesome-website` wird ein neues Verzeichnis namens `my-awesome-website` erstellen.
- `rmdir` — Entfernt das benannte Verzeichnis, jedoch nur, wenn es leer ist. Zum Beispiel `rmdir my-awesome-website` wird das Verzeichnis entfernen, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles, was es enthält), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, was Sie später noch benötigen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — verschiebt eine Datei aus dem ersten angegebenen Dateispeicherort an den zweiten angegebenen Dateispeicherort, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch wird die Datei verschoben, aber aus praktischer Sicht wird mit diesem Befehl die Datei tatsächlich umbenannt.
- `cp` – ähnlich in der Verwendung wie `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Speicherort, im zweiten angegebenen Speicherort. Zum Beispiel `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können sie natürlich auch anders benennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb, den Sie auf Ihrer Desktop-Benutzeroberfläche haben könnten, rückgängig gemacht werden kann.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Sternchen als "Wild Card"-Zeichen zu verwenden, was "jede Zeichenfolge" bedeutet. Auf diese Weise können Sie eine Operation gegen eine potenziell große Anzahl von Dateien auf einmal ausführen, die alle dem angegebenen Muster entsprechen. Als Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als schädlich betrachtet?

Wir haben es zuvor angedeutet, aber um klar zu sein — Sie müssen mit dem Terminal vorsichtig sein. Einfache Befehle bergen nicht allzu viel Gefahr, aber wenn Sie anfangen, komplexere Befehle zusammenzustellen, müssen Sie sorgfältig darüber nachdenken, was der Befehl tun wird, und versuchen, sie zuerst zu testen, bevor Sie sie schließlich im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie hätten 1000 Textdateien in einem Verzeichnis und wollten sie alle durchgehen und nur die löschen, die einen bestimmten Unterstring im Dateinamen haben. Wenn Sie nicht vorsichtig sind, könnten Sie möglicherweise etwas Wichtiges löschen, was Ihnen eine Menge Arbeit kostet.
Eine gute Angewohnheit ist es, Ihren Termnialbefehl in einem Texteditor zu schreiben, herauszufinden, wie Sie denken, dass er aussehen sollte, eine Sicherungskopie Ihres Verzeichnisses zu machen und den Befehl zuerst darin zu testen.

Ein weiterer guter Tipp - wenn Sie sich nicht wohl fühlen, Terminalbefehle auf Ihrem eigenen Computer auszuprobieren, ist ein netter sicherer Ort, um sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben einem großartigen Ort, um Code für die Webentwicklung auszuprobieren, bieten die Projekte auch Zugang zu einem Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, mit dem Wissen, dass Sie Ihren eigenen Computer nicht beschädigen werden.

![ein doppelter Screenshot, der die glitch.com-Startseite und den glitch-Terminal-Emulator zeigt](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über spezifische Terminalbefehle zu bekommen, ist [tldr.sh](https://tldr.sh/). Dies ist ein community-getriebener Dokumentationsdienst, ähnlich wie MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt lassen Sie uns das Ganze um einige Stufen erhöhen (oder in der Tat um mehrere Stufen) und sehen Sie, wie wir Werkzeuge über die Befehlszeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal im Vergleich zur regulären Desktop-Benutzeroberfläche von Vorteil sein kann.

## Verbinden von Befehlen mit Pipes

Das Terminal wird wirklich nützlich, wenn Sie beginnen, Befehle durch das `|` (Pipe)-Symbol miteinander zu verkettwen. Schauen wir uns ein sehr schnelles Beispiel an, was das bedeutet.

Wir haben bereits `ls` angesehen, das die Inhalte des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was ist, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das allein nicht.

Es gibt ein weiteres Unix-Tool namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von allem, was ihm eingegeben wird. Dies kann eine Textdatei sein — das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von allem zählen, was _in_ es _gepipet_ wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die der `ls`-Befehl ausgibt (was er normalerweise in das Terminal drucken würde, wenn er alleine ausgeführt wird) und gibt stattdessen diese Anzahl in das Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile druckt, gibt uns das effektiv eine Verzeichnis- und Dateianzahl.

Also, was passiert hier? Eine allgemeine Philosophie von (unix) Befehlszeilenwerkzeugen ist, dass sie Text in das Terminal drucken (auch als "Drucken in die Standardausgabe" bezeichnet oder `STDOUT`). Eine gute Anzahl von Befehlen kann auch Inhalte aus einem gestreamten Eingang lesen (bekannt als "Standard-Eingabe" oder `STDIN`).

Der Pipe-Operator kann diese Eingänge und Ausgänge miteinander _verbinden_, wodurch wir zunehmend komplexere Operationen aufbauen können, die unseren Bedürfnissen entsprechen — der Ausgang von einem Befehl kann zum Eingang des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seinen Ausgang auf `STDOUT` drucken, aber stattdessen wird der Ausgang von `ls` in `wc` gepipet, das diesen Ausgang als Eingang nimmt, die Anzahl der darin enthaltenen Zeilen zählt und diese Anzahl stattdessen auf `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas komplizierteres durchgehen.

Wir werden zuerst versuchen, den Inhalt der MDN-"fetch"-Seite mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, da die Seite umgeleitet wurde (zur [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` ausdrücklich sagen, dass es Weiterleitungen folgen soll, indem wir das `-L`-Flag verwenden.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` zurückgibt, indem wir das `curl`'s `-I`-Flag verwenden, und alle Standort-Weiterleitungen, die es an das Terminal sendet, drucken, indem wir den Ausgang von `curl` in `grep` pipen (wir bitten `grep`, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, den folgenden Befehl auszuführen (Sie werden sehen, dass es nur eine Weiterleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Downloadzähler und dergleichen ausgeben):

```bash
location: /en-US/docs/Web/API/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis etwas weiter treiben und den `location:`-Zeileninhalt transformieren, indem wir den Basis-Ursprung am Anfang jedes einzelnen hinzufügen, sodass vollständige URLs ausgegeben werden.
Dazu fügen wir `awk` hinzu (das eine Programmiersprache ist, ähnlich wie JavaScript oder Ruby oder Python, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir den Ausgang so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server umgeleitet wird, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch`-URL anfordern.
Es wird sich als nützlich erweisen, Ihr System kennenzulernen, um dieses Wissen in den kommenden Jahren zu nutzen — lernen Sie, wie diese Einzeldiener-Tools funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Powerups hinzufügen

Nachdem wir nun einige der integrierten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und nutzen können.

Das große Ökosystem installierbarer Tools für die Frontend-Webentwicklung befindet sich derzeit größtenteils innerhalb von [npm](https://www.npmjs.com/), einem privat betriebenen Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies wird langsam erweitert — im Laufe der Zeit können Sie mit mehr Paketprovidern rechnen.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilentool (und ein ergänzendes npm-zentriertes Tool namens npx), das ein Gateway zur Installation zusätzlicher Befehlszeilentools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie zur obigen URL gehen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![der Node.js-Installer auf Windows, der die Option zeigt, npm einzuschließen](npm-install-option.png)

Obwohl wir eine Reihe verschiedener Tools im nächsten Artikel und darüber hinaus betrachten werden, werden wir uns zunächst mit [Prettier](https://prettier.io/) befassen.
Prettier ist ein Meinung nachvollziehender Code-Formatter, der nur „wenige Optionen" hat.
Weniger Optionen bedeutet in der Regel einfachere.
Angesichts dessen, wie sich Werkzeuge manchmal in Bezug auf Komplexität entwickeln können, kann "wenige Optionen" sehr ansprechend sein.

### Wo sollen wir unsere CLI-Tools installieren?

Bevor wir in die Installation von Prettier eintauchen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Werkzeuge global zu installieren — damit wir sie überall zugänglich machen können — oder lokal im aktuellen Projektverzeichnis.

Es gibt sowohl Vor- als auch Nachteile — und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich wie jeder andere Unix-Befehl an

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Codebase Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Werkzeuge, zum Beispiel, wenn Sie den Codebase über ein Tool wie git teilen.
- Im Zusammenhang mit dem vorherigen Punkt macht es das Projekt schwerer zu replizieren (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_ Liste kürzer ist, ist der negative Einfluss der globalen Installation potenziell viel größer als die Vorteile.
Hier werden wir lokal installieren, aber zögern Sie nicht, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Prettier installieren

Prettier ist ein Meinung durchsetzender Code-Formatter für Frontend-Entwickler, der sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Den kognitiven Aufwand sparen, den Stil manuell konsistent über alle Ihre Code-Dateien hinweg zu halten; Prettier kann dies automatisch für Sie erledigen.
- Neulingen in der Webentwicklung helfen, ihren Code im besten Ansatz zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar als direkter Teil der Projekt-Tooling, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Codestil verwenden.
- So konfiguriert werden, dass es beim Speichern, während Sie tippen oder sogar vor der Veröffentlichung Ihres Codes (mit zusätzlichem Tooling, das wir später im Modul sehen werden) ausgeführt wird.

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/en/install.html) vorgeschlagen.

Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erläutern, was `--save-dev` tut):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Werkzeug ausführen.
Das Ausführen des Befehls ohne Argumente wird, wie bei vielen anderen Befehlen, Nutzungs- und Hilfsinformationen bieten.
Versuchen Sie das jetzt:

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

Es ist immer mindestens einen kurzen Überblick über die Nutzungsinformationen wert, auch wenn sie lang ist.
Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird das Ausführen von `npx prettier` die neueste Version von Prettier in einem Schritt herunterladen und ausführen _nur für diesen Befehl_.
> Auch wenn das großartig klingen mag, könnten neue Versionen von Prettier die Ausgabe leicht ändern.
> Sie möchten es lokal installieren, damit Sie die von Ihnen verwendete Version von Prettier für die Formatierung festlegen, bis Sie bereit sind, sie zu ändern.

### Mit Prettier spielen

Lassen Sie uns einen kurzen Blick auf Prettier werfen, damit Sie sehen können, wie es funktioniert.

Erstens erstellen Sie ein neues Verzeichnis irgendwo im Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie jetzt den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen einen Codebase laufen lassen, um einfach zu überprüfen, ob unser Code angepasst werden sollte. `cd` in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe in etwa so erhalten:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Es gibt also einige Code-Formate, die behoben werden können. Kein Problem. Das Hinzufügen der Option `--write` zum `prettier` Befehl wird das beheben, sodass wir uns darauf konzentrieren können, tatsächlich nützlichen Code zu schreiben.

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

Aber noch wichtiger ist, dass, wenn Sie zurück zu Ihrer JavaScript-Datei schauen, diese auf etwas wie dies formatiert wurde:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich, wo Werkzeuge glänzen; unsere persönliche Präferenz ist die Art von Automatisierung, die "einfach passiert", ohne dass Sie etwas konfigurieren müssen.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es ausgezeichnete Ressourcen online, die helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository einchecken, mit [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie "speichern" in Ihrem Code-Editor drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — während der Nutzung von z. B. VS Code tritt Prettier in Kraft und bereinigt jegliche Formatierungen, die es zu tun hat, jedes Mal, wenn wir speichern. Sie können viel mehr Informationen darüber finden, Prettier auf verschiedene Weise zu verwenden, in den [Prettier-Dokumentationen](https://prettier.io/docs/en/).

## Andere Werkzeuge zum Ausprobieren

Wenn Sie noch mehr Werkzeuge ausprobieren möchten, ist hier eine kurze Liste, die Spaß macht, auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "netterer" `cat` (`cat` wird verwendet, um den Inhalt von Dateien zu drucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Jettriebwerk verhalten lässt und Sie das schuldige Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber verfügbar als Befehlszeilenwerkzeug.

Beachten Sie, dass einige der obigen Vorschläge möglicherweise über npm installiert werden müssen, wie wir es mit Prettier getan haben.

## Zusammenfassung

Damit sind wir am Ende unserer kurzen Tour durch das Terminal/die Befehlszeile angelangt. Als nächstes schauen wir uns Paketmanager im Detail an und was wir mit ihnen tun können.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
