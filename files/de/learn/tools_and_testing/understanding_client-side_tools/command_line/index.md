---
title: Crashkurs zur Kommandozeile
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Im Verlauf Ihrer Entwicklungstätigkeiten werden Sie zweifellos einige Befehle im Terminal ausführen müssen (oder in der "Kommandozeile" – diese Begriffe bedeuten im Wesentlichen dasselbe). Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie man Befehle miteinander verknüpft und wie man eigene Kommandozeilen-Tools (CLI-Tools) hinzufügt.

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
        Zu verstehen, was das Terminal/die Kommandozeile ist, welche grundlegenden Befehle Sie lernen sollten und wie man neue Kommandozeilen-Tools installiert.
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie irgendeine Art von Werkzeugen für die Webentwicklung nutzen, besteht eine nahezu garantierte Wahrscheinlichkeit, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um die von Ihnen gewählten Werkzeuge zu verwenden (solche Werkzeuge werden oft als **CLI-Tools** — Tools für Kommandozeilenschnittstellen — bezeichnet).

Eine große Anzahl von Tools kann durch das Eintippen von Befehlen in die Kommandozeile verwendet werden; viele sind bereits auf Ihrem System vorinstalliert, und eine riesige Anzahl anderer ist über Paketregister installierbar.
Paketregister sind wie App Stores, jedoch (meist) für Kommandozeilen-basierte Tools und Software.
Wir werden später in diesem Kapitel sehen, wie man einige Tools installiert, und wir werden im nächsten Kapitel mehr über Paketregister lernen.

Eines der größten Kritikpunkte an der Kommandozeile ist, dass sie in der Benutzererfahrung enorm fehlt.
Zum ersten Mal die Kommandozeile zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick sind sie alles andere als einladend, aber es gibt viel, was Sie mit ihnen tun können. Wir versprechen, dass die Nutzung mit ein wenig Anleitung und Übung einfacher werden wird!
Deshalb bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher stammt das Terminal?

Das Terminal stammt etwa aus den 1950er-60er Jahren, und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (wofür wir dankbar sein sollten). Sie können ein wenig über die Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben - von Desktop-Rechnern über Server, die in der Cloud versteckt sind, bis hin zu Mikrocomputern wie dem Raspberry PI Zero und sogar bis zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und auf niedriglevelige Features und ist daher unglaublich nützlich, um komplexe Aufgaben schnell zu erledigen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung - zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit der Finder- oder Explorer-GUI-App aktualisieren würden, würde dies lange dauern.

Jedenfalls wird das Terminal in absehbarer Zeit nicht verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Geschmacksrichtungen von Programmen, die Ihnen den Zugang zu einem Terminal ermöglichen können.

Die nächsten Bilder zeigen die Kommandozeilenaufforderungen, die in Windows verfügbar sind – es gibt eine gute Auswahl an Optionen von dem Programm "cmd" bis zu "powershell" – die aus dem Startmenü gestartet werden können, indem der Programmname eingegeben wird.

![Ein Standardfenster der Windows-Kommandozeile und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminal-Anwendung von macOS.

![Ein grundlegendes macOS-Terminal](mac-terminal.png)

### Wie greift man auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z. B. das Terminal und die über es zugänglichen Tools). Viele Tutorials und Tools, die heute im Web existieren, unterstützen (und nehmen leider an) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie Zugang zum Terminal auf Ihrem gewählten System erhalten.

#### Linux/Unix

Wie oben angedeutet, verfügen Linux/Unix-Systeme standardmäßig über ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS hat ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die niedrigleveligen Tools bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, sicherlich gut genug, um uns während dieses Artikels keine Bedenken zu bereiten.

Das Terminal ist unter Applications/Utilities/Terminal auf macOS verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Nutzung des Terminals (oder der Kommandozeile) unter Windows traditionell nicht so einfach oder unkompliziert wie unter anderen Betriebssystemen. Aber die Dinge werden besser.

Windows hatte traditionell sein eigenes terminalähnliches Programm namens cmd (die "Eingabeaufforderung") für lange Zeit, aber dies hat definitiv keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren für eine Terminal-Erfahrung unter Windows, wie PowerShell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git für Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der modernen Zeit ist jedoch das Windows-Subsystem für Linux (WSL) – eine Kompatibilitätsschicht für die Ausführung von Linux-Betriebssystemen direkt innerhalb von Windows 10, die es Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows zu betreiben, ohne eine virtuelle Maschine zu benötigen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Alle benötigten Dokumentationen finden Sie in der [Dokumentation des Windows-Subsystems für Linux](https://learn.microsoft.com/en-us/windows/wsl/).

![ein Screenshot der Dokumentation des Windows-Subsystems für Linux](wsl.png)

In Bezug darauf, welche Option Sie unter Windows wählen sollen, empfehlen wir dringend, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Kommandozeile (`cmd`) bleiben, und viele Tools werden in Ordnung sein, aber Sie werden alles einfacher finden, wenn Sie eine bessere Parität mit den Unix-Tools haben.

#### Seitenbemerkung: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Im Allgemeinen werden Sie finden, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die startet und sich mit einer Shell verbindet. Eine Shell ist Ihre Sitzung und Sitzungsumgebung (wo Dinge wie die Eingabeaufforderung und Shortcuts vielleicht angepasst werden). Die Kommandozeile ist die wörtliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal benutzen?

Obwohl es eine Fülle von Tools über die Kommandozeile gibt, gibt es bei der Nutzung von Tools wie [Visual Studio Code](https://code.visualstudio.com/) auch eine Masse von Erweiterungen, die als Proxy genutzt werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt nutzen zu müssen. Sie werden jedoch nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden - irgendwann werden Sie etwas Erfahrung mit dem Terminal sammeln müssen.

## Grundlegende eingebaute Terminalbefehle

Genug geredet – schauen wir uns einige Terminalbefehle an! Out of the box kann die Kommandozeile einige Dinge tun, zusammen mit den Namen der relevanten Tools in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers, zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich in Ihrer Verzeichnisstruktur: `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Laden Sie Dateien von bestimmten URLs herunter: `curl`
- Suchen Sie nach Textfragmenten innerhalb größerer Textkörper: `grep`
- Sehen Sie sich den Inhalt einer Datei seitenweise an: `less`, `cat`
- Manipulieren und transformieren Sie Textströme (zum Beispiel ändern Sie alle Instanzen von `<div>`s in einer HTML-Datei zu `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Kommandozeile eintauchen – dies ist nur eine kurze Einführung!

Lassen Sie uns weitermachen und schauen, wie wir einige dieser Tools in der Kommandozeile verwenden. Bevor Sie fortfahren, öffnen Sie Ihr Terminalprogramm!

### Navigation in der Kommandozeile

Wenn Sie die Kommandozeile betreten, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt, eine Standardkonfiguration) starten ihr Terminalprogramm in Ihrem "Home"-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

Der Befehl `cd` ermöglicht es Ihnen, das Verzeichnis zu ändern. Technisch gesehen ist `cd` kein Programm, sondern ein eingebauter Befehl. Dies bedeutet, dass Ihr Betriebssystem es out of the box bereitstellt und dass Sie es auch nicht versehentlich löschen können – Gott sei Dank! Sie müssen sich nicht allzu viele Gedanken darüber machen, ob ein Befehl eingebaut ist oder nicht, aber bedenken Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen erscheinen.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die untenstehenden Screenshots).

![Ergebnisse des cd Desktop Befehls in einer Vielzahl von Windows-Terminals – der Terminalort wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie zum vorherigen Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>Tabulator</kbd>-Taste, um Namen, von denen Sie wissen, dass sie vorhanden sind, automatisch zu vervollständigen, anstatt den gesamten Namen eintippen zu müssen. Zum Beispiel, nach dem Tippen der obigen beiden Befehle, versuchen Sie `cd D` einzugeben und die <kbd>Tabulator</kbd>-Taste zu drücken – es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Behalten Sie dies im Hinterkopf, wenn Sie voranschreiten.

Wenn das Verzeichnis, zu dem Sie gehen möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dahin zu gelangen. Dies wird normalerweise einfacher, je mehr Sie mit der Struktur Ihres Dateisystems vertraut sind, aber wenn Sie sich nicht sicher über den Pfad sind, können Sie es normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und dem Herumklicken in Ihrem Explorer/Findefenster herausfinden, um zu sehen, wo sich ein Verzeichnis befindet, relativ zu dem, wo Sie sich gerade befinden.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem `Desktop` befindet, könnten Sie diese drei Befehle eingeben, um dorthin zu gelangen von Ihrem Home-Ordner:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung – stattdessen können Sie einen Befehl eingeben, mit den verschiedenen Elementen im Pfad durch Schrägstriche getrennt, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Assets in CSS, HTML oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass bei Pfaden, die einen führenden Schrägstrich enthalten, der Pfad absolut ist, beispielsweise `/Users/your-user-name/Desktop`. Wenn der führende Schrägstrich, wie oben gezeigt, weggelassen wird, ist der Pfad relativ zu Ihrem derzeitigen Arbeitsverzeichnis. Dies ist genau das gleiche wie bei URLs in Ihrem Webbrowser zu sehen. Ein führender Schrägstrich bedeutet "am Root der Website", während das Weglassen des Schrägstrichs bedeutet "die URL ist relativ zu meiner aktuellen Seite".

> [!NOTE]
> Unter Windows verwenden Sie Rückschrägstriche statt Schrägstriche, z. B. `cd Desktop\project\src` – das mag ungewohnt erscheinen, aber wenn Sie daran interessiert sind, warum das so ist, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung von einem der Hauptingenieure von Microsoft an.

### Verzeichnisinhalte auflisten

Ein weiterer eingebauter Unix-Befehl ist `ls` (Kurzform für list), der die Inhalte des Verzeichnisses auflistet, in dem Sie sich gerade befinden. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Kommandozeile (`cmd`) verwenden – das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem derzeitigen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach – Sie erhalten nur den Namen jedes Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt, oder sonstige Informationen. Glücklicherweise kann eine kleine Änderung in der Verwendung des Befehls Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen – diese sind Modifikatoren, die Sie an das Ende eines Befehls anhängen, die ihn auf eine leicht andere Weise verhalten lassen. Diese bestehen normalerweise aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie bekommen:

```bash
ls -l
```

Im Falle von `ls` gibt die Option `-l` (_Bindestrich ell_) eine Liste mit einer Datei oder einem Verzeichnis auf jeder Zeile, und es werden wesentlich mehr Informationen angezeigt. Verzeichnisse können erkannt werden, indem man nach einem "d" ganz links auf den Zeilen sucht. Das sind die, in die man `cd` verwenden kann.

Unten ist ein Screenshot mit einem "Standard" macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebhaft zu halten – beide zeigen die Ergebnisse des `ls -l`-Befehls:

![Ein macOS-Terminal mit Standard- und benutzerdefinierter Darstellung, das eine Dateiliste zeigt - die Ergebnisse des `ls -l` Befehls](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen für jeden Befehl verfügbar sind, können Sie dessen [Man-Page](https://en.wikipedia.org/wiki/Man_page) aufrufen. Dies geschieht, indem Sie den Befehl `man` eingeben, gefolgt vom Namen des Befehls, den Sie nachsehen möchten, zum Beispiel `man ls`. Dadurch wird die Man-Page im Standard-Textdateianzeiger des Terminals geöffnet (zum Beispiel [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann durch die Seite scrollen können, indem Sie die Pfeiltasten verwenden, oder einen ähnlichen Mechanismus. Die Man-Page listet alle Optionen ausführlich auf, was am Anfang etwas einschüchternd sein kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Wenn Sie mit dem Durchsehen der Man-Page fertig sind, müssen Sie diese über den Beenden-Befehl Ihres Textanzeigers beenden ("q" in `less`; Sie müssen möglicherweise im Internet suchen, um diesen zu finden, wenn er nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie normalerweise alle in eine einzige Zeichenkette nach dem Bindestrich-Zeichen setzen, zum Beispiel `ls -lah` oder `ls -ltrh`. Versuchen Sie, die Man-Page von `ls` zu öffnen, um zu verstehen, was diese zusätzlichen Optionen tun!

Nun, da wir zwei grundlegende Befehle behandelt haben, stöbern Sie ein wenig in Ihrem Verzeichnis herum und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich oft verwenden werden, während Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht alle so ausführlich erklären wie die vorherigen.

Spielen Sie etwas mit ihnen in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nichts Wichtiges versehentlich löschen, indem Sie die folgenden Beispielbefehle zur Orientierung verwenden:

- `mkdir` – dies erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` – entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` entfernt das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles, was es enthält), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich im Verzeichnis nichts befindet, das Sie später noch benötigen könnten, da es für immer verloren sein wird.
- `touch` – dies erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` – verschiebt eine Datei vom ersten angegebenen Dateipfad zum zweiten angegebenen Dateipfad, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Pfade werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis in eine Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch wird die Datei verschoben, aber aus praktischer Perspektive wird die Datei umbenannt.
- `cp` – ähnlich wie `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Standort, im zweiten angegebenen Standort. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich auch anders nennen, wenn Sie möchten).
- `rm` – entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht rückgängig gemacht werden kann über den Papierkorb, den Sie vielleicht auf Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Asterisken als "Wildcard"-Zeichen zu verwenden, was "bezeichnender beliebiger Zeichen" bedeutet. Dadurch können Sie eine Operation gegen möglicherweise viele Dateien gleichzeitig ausführen, die alle dem angegebenen Muster entsprechen. Zum Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — als gefährlich erachtet?

Wir haben dies schon zuvor angedeutet, aber um es klarzustellen – Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht allzu viel Gef Gefahr, aber wenn Sie beginnen komplexere Befehle zusammenzustellen, müssen Sie genau darüber nachdenken, was der Befehl tun wird, und versuchen Sie ihn zuerst zu testen, bevor Sie ihn im beabsichtigten Verzeichnis ausführen.

Angenommen, Sie haben 1000 Textdateien in einem Verzeichnis und möchten sie alle durchgehen und nur die löschen, die ein bestimmtes Substring im Dateinamen haben. Wenn Sie nicht vorsichtig sind, könnten Sie etwas Wichtiges löschen und dabei viel Ihrer Arbeit verlieren.
Eine gute Angewohnheit ist, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er Ihrer Meinung nach aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und zu versuchen, den Befehl zuerst daran auszuführen, um ihn zu testen.

Ein weiterer guter Tipp — wenn Sie sich nicht wohlfühlen, Terminalbefehle auf Ihrer eigenen Maschine auszuprobieren, ist ein sicherer Ort, um sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben dem großartigen Ort, um Webentwicklungscode auszuprobieren, geben Ihnen Projekte dort auch Zugriff auf ein Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, im Wissen, dass Sie Ihre eigene Maschine nicht beschädigen.

![ein Doppelscreenshot zeigt die Glitch.com-Startseite und den Glitch-Terminalemulator](glitch.png)

Eine großartige Ressource, um sich schnell einen Überblick über spezifische Terminalbefehle zu verschaffen, ist [tldr.sh](https://tldr.sh/). Dies ist ein von der Community betriebenes Dokumentationsservice, ähnlich wie MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt werden wir einen Gang höher schalten (oder sogar mehrere Gänge) und sehen, wie wir Tools in der Kommandozeile miteinander verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche von Vorteil sein kann.

## Befehle mit Pipes verbinden

Das Terminal kommt wirklich zur Geltung, wenn Sie beginnen, Befehle mit dem `|` (Pipe)-Symbol zu verketten. Schauen wir uns ein sehr kurzes Beispiel an, was das bedeutet.

Wir haben bereits `ls` betrachtet, das die Inhalte des aktuellen Verzeichnisses ausgeben kann:

```bash
ls
```

Aber was wäre, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht allein tun.

Es gibt ein weiteres Unix-Tool namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von dem, was hineingegeben wird. Dies kann eine Textdatei sein – das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen dessen zählen, was in es **gepiped** wird. Zum Beispiel gibt der folgende Befehl die Anzahl der Zeilen aus, die der `ls`-Befehl normalerweise in das Terminal drucken würde, wenn er alleine ausgeführt würde, und statt dessen diese Anzahl an das Terminal aus.

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in ihrer eigenen Zeile druckt, gibt uns das effektiv eine Verzeichnis- und Dateianzahl.

Was passiert hier? Eine allgemeine Philosophie der (unix) Kommandozeilen-Tools ist, dass sie Text auf das Terminal drucken (auch "in Standardausgabe drucken" oder `STDOUT` genannt). Ein Großteil der Befehle kann auch Inhalte aus gestreamtem Eingab einehen beziehen (bekannt als "Standardeingabe" oder `STDIN`).

Der Pipe-Operator kann diese Ein- und Ausgaben miteinander _verbinden_ und es uns ermöglichen, zunehmend komplexere Operationen entsprechend unseren Bedürfnissen aufzubauen – die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` seine Ausgabe normalerweise an `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe aufnimmt, die Anzahl der enthaltenen Zeilen zählt und diese Anzahl an `STDOUT` drucken.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas etwas Komplizierteres durchgehen.

Zuerst versuchen wir, die Inhalte von MDNs "fetch"-Seite mit dem `curl`-Befehl (der benutzt werden kann, um Inhalte von URLs anzufordern) von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch` abzurufen.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, da die Seite umgeleitet wurde (nach /Web/API/fetch).
Wir müssen `curl` explizit sagen, dass es Redirektierungen mit dem `-L`-Flag folgen soll.

Sehen wir uns auch die Header an, die `developer.mozilla.org` mit Hilfe der `-I`-Option von `curl` zurückgibt, und lassen wir alle Location-Redirektierungen mit `grep` in das Terminal drucken (wir werden `grep` anweisen, alle Zeilen, die das Wort "location" enthalten, zurückzugeben).

Versuchen Sie, den folgenden Code auszuführen (Sie werden sehen, dass nur eine Umleitung besteht, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte in etwa so aussehen (`curl` gibt zuerst einige Downloadzähler und Ähnliches aus):

```bash
location: /en-US/docs/Web/API/fetch
```

Obwohl leicht erzwungen, könnten wir dieses Ergebnis ein wenig weiter nehmen und den Inhalt der Zeilen `location:` transformieren, indem wir die Basis-URL zum Anfang jeder Zeile hinzufügen, so dass wir vollständige URLs gedruckt bekommen.
Dafür fügen wir `awk` in die Mischung ein (was eine Programmiersprache ähnlich wie JavaScript oder Ruby oder Python ist, nur um einiges älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server weiterleitet, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL anfordern.
Zu wissen, wie Ihr System funktioniert, wird sich in den kommenden Jahren als nützlich erweisen – lernen Sie, wie diese Einzelfunktions-Tools arbeiten und wie sie Teil Ihres Werkzeugsatzes werden können, um spezielle Probleme zu lösen.

## Power-Ups hinzufügen

Nachdem wir uns einige der eingebauten Befehle angeschaut haben, mit denen Ihr System ausgestattet ist, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und nutzen können.

Das riesige Ökosystem von installierbaren Tools für die Frontend-Webentwicklung existiert derzeit größtenteils in [npm](https://www.npmjs.com/), einem privaten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies wächst langsam – Sie können erwarten, dass mit der Zeit mehr Paket-Anbieter auftauchen werden.

Die [Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilen-Tool (und ein ergänzendes auf npm zentriertes Tool namens npx), das einen Gateway bietet, um zusätzliche Kommandozeilen-Tools zu installieren. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie jetzt npm auf Ihrem System, indem Sie auf die obige URL gehen und einen Node.js-Installer herunterladen, der für Ihr Betriebssystem geeignet ist. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass Sie npm als Teil der Installation einbeziehen.

![Der Node.js Installer auf Windows zeigt die Option zur Aufnahme von npm](npm-install-option.png)

Obwohl wir im nächsten Artikel eine Reihe von verschiedenen Tools betrachten werden, werden wir uns an [Prettier](https://prettier.io/) versuchen.
Prettier ist ein Meinungshafter Code-Formatierer, der nur „wenige Optionen“ hat.
Weniger Optionen bedeuten tendenziell Einfachheit.
Angesichts der Komplexität, die sich manchmal bei Tools entwickeln kann, kann „wenige Optionen“ sehr ansprechend wirken.

### Wo sollten wir unsere CLI-Tools installieren?

Bevor wir uns in die Installation von Prettier stürzen, müssen wir eine Frage beantworten: „Wo sollten wir es installieren?“

Mit `npm` haben wir die Wahl, Tools global zu installieren – so dass wir sie überall zugänglich haben – oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile für beide Wege – und die folgenden Listen von Vor- und Nachteilen für die globale Installation sind bei weitem nicht erschöpfend.

**Vorteile der globalen Installation:**

- Überall in Ihrem Terminal zugänglich.
- Nur einmal installieren.
- Verbraucht weniger Speicherplatz.
- Immer dieselbe Version.
- Fühlt sich an wie jeder andere Unix-Befehl.

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Code Ihrer Projekbasis kompatibel.
- Andere Entwickler in Ihrem Team hätten keinen Zugang zu diesen Tools, wenn Sie den Code über ein Tool wie Git teilen.
- Bezüglich des vorherigen Punktes: Es macht es schwieriger, den Projektcode zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten festgelegt und mit `npm install` installiert werden).

Obwohl die Liste der _Nachteile_ kürzer ist, kann der negative Einfluss der globalen Installation potenziell viel größer sein als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Installation von Prettier

Prettier ist ein auf Meinung basierender Code-Formatierer für Frontend-Entwickler, der sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Die kognitive Belastung ersparen, den Stil manuell über alle Ihre Dateien hinweg konsistent zu halten; Prettier kann dies automatisch für Sie tun.
- Neulingen in der Webentwicklung helfen, ihren Code im Best-Practice-Stil zu formatieren.
- Auf jedem Betriebssystem installiert werden und sogar ein direkter Teil der Projekt-Tools sein, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, den von Ihnen verwendeten Code-Stil verwenden.
- Konfiguriert werden, um beim Speichern, während Sie tippen oder sogar vor der Veröffentlichung Ihres Codes zu laufen (mit weiteren Werkzeugen, die wir später in diesem Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installations-Leitfaden](https://prettier.io/docs/en/install.html) vorgeschlagen.

Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden erklären, was `--save-dev` im nächsten Artikel tut):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen.
Wenn Sie den Befehl ohne Argumente ausführen, wird Ihnen, wie bei vielen anderen Befehlen, Nutzungs- und Hilfeinformationen angezeigt.
Versuchen Sie es jetzt:

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

Es ist immer einen Blick wert, zumindest die Nutzungsinformationen zu überfliegen, auch wenn sie lang sind.
Es hilft Ihnen besser zu verstehen, wie das Tool beabsichtigt ist, genutzt zu werden.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird `npx prettier` die neueste Version von Prettier herunterladen und ausführen, alles in einem Durchgang _nur für diesen Befehl_.
> Auch wenn das großartig klingt, können neue Versionen von Prettier die Ausgabe leicht verändern.
> Sie möchten es lokal installieren, damit Sie die Version von Prettier festlegen, die Sie zur Formatierung verwenden, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns mit Prettier herumspielen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie jetzt den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen einen Codebestand ausführen, um einfach zu überprüfen, ob unser Code angepasst werden sollte. `cd` in Ihr Verzeichnis und versuchen Sie diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe etwa folgendermaßen erhalten:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also gibt es einige Code-Stile, die korrigiert werden können. Kein Problem. Durch Hinzufügen der `--write`-Option zum `prettier`-Befehl werden diese behoben, sodass wir uns auf das Schreiben von nützlichem Code konzentrieren können.

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

Aber noch wichtiger ist, dass wenn Sie auf Ihre JavaScript-Datei zurückblicken, werden Sie feststellen, dass sie zu etwas wie diesem umformatiert wurde:

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

Abhängig von Ihrem Workflow (oder dem Workflow, für den Sie sich entscheiden) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automation ist wirklich dort, wo Tools brillieren; unsere persönliche Präferenz ist die Art von Automation, die "einfach passiert", ohne dass man etwas konfigurieren muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automation erreicht werden kann und obwohl sie über den Umfang dieses Artikels hinausgehen, gibt es einige ausgezeichnete Ressourcen online, um zu helfen (einige davon wurden verlinkt). Sie können Prettier folgendermaßen aufrufen:

- Vor dem Commit Ihres Codes in ein Git-Repository mit [Husky](https://github.com/typicode/husky).
- Immer Wenn Sie in Ihrem Code-Editor auf "Speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil der kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite – während wir etwa VS Code verwenden, greift Prettier ein und bereinigt jedes Format, das es zu tun hat, jedes Mal wenn wir speichern. Sie können viel mehr Informationen über die Verwendung von Prettier auf verschiedene Weise in den [Prettier-Dokumenten](https://prettier.io/docs/en/) finden.

## Andere Tools zum Ausprobieren

Wenn Sie mit einigen weiteren Tools spielen möchten, folgt hier eine kurze Liste von Tools, die interessant sind, auszuprobieren:

- [`bat`](https://github.com/sharkdp/bat) — Ein "schöneres" `cat` (`cat` wird verwendet, um den Inhalt von Dateien zu drucken).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server reagiert).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Düsenflugzeug verhalten lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — In diesem Kapitel bereits erwähnt, aber als Kommandozeilentool verfügbar.

Beachten Sie, dass einige der oben genannten Vorschläge möglicherweise die Installation mit npm erfordern, so wie wir es mit Prettier gemacht haben.

## Zusammenfassung

Damit kommen wir zum Ende unserer kurzen Tour durch das Terminal/die Kommandozeile. Als Nächstes werden wir uns genauer mit Paketmanagern befassen und was wir damit machen können.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
