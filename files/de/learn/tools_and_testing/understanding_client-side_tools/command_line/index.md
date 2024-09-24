---
title: Einführung in die Befehlszeile
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In Ihrem Entwicklungsprozess werden Sie zweifellos einige Befehle im Terminal (oder auf der "Befehlszeile" – dies ist im Wesentlichen dasselbe) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie darin eingeben müssen, wie man Befehle miteinander verkettet und wie Sie Ihre eigenen Befehlszeilen-Tools (CLI-Tools) hinzufügen können.

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
        Verstehen, was das Terminal/die Befehlszeile ist, welche grundlegenden Befehle Sie lernen sollten und wie man neue Befehlszeilen-Tools installiert.
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie irgendwelche Werkzeuge für die Webentwicklung verwenden, besteht eine sehr hohe Wahrscheinlichkeit, dass Sie die Befehlszeile öffnen und einige Befehle ausführen müssen, um Ihre gewählten Werkzeuge zu nutzen (solche Werkzeuge werden oft als **CLI-Tools** bezeichnet – Command Line Interface Tools).

Viele Werkzeuge können verwendet werden, indem man Befehle in die Befehlszeile eingibt. Viele sind bereits auf Ihrem System vorinstalliert, und eine große Anzahl anderer kann aus Paketregistern installiert werden. Paketregister sind wie App-Stores, jedoch (hauptsächlich) für werkzeuge und Software, die auf der Befehlszeile basieren. Wir werden im Laufe dieses Kapitels sehen, wie man einige Werkzeuge installiert, und im nächsten Kapitel mehr über Paketregister erfahren.

Einer der größten Kritikpunkte an der Befehlszeile ist, dass sie in der Benutzererfahrung stark hinterherhinkt. Die Befehlszeile zum ersten Mal zu sehen, kann eine entmutigende Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick sind sie alles andere als einladend, aber es gibt viel, das Sie damit tun können, und wir versprechen, dass es mit ein wenig Anleitung und Übung einfacher wird, sie zu benutzen! Deshalb stellen wir Ihnen dieses Kapitel zur Verfügung – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den 1950er-60er Jahren und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute nutzen (zum Glück). Sie können ein wenig über die Geschichte im Wikipedia-Eintrag für [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Computern bis zu Servern, die in der Cloud verborgen sind, über Mikrocomputer wie den Raspberry PI Zero bis hin zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem und die grundlegenden Funktionen des Computers und ist deshalb unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung – zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten Dateien sofort aktualisiert, sagen wir von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrer Finder- oder Explorer-GUI-App aktualisiert hätten, würde es lange dauern.

Jedenfalls wird das Terminal nicht so schnell verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der verschiedenen Programme, die Sie zu einem Terminal führen können.

Die nächsten Bilder zeigen die in Windows verfügbaren Eingabeaufforderungen – es gibt eine gute Auswahl an Optionen vom "cmd"-Programm bis "powershell" – das über das Startmenü ausgeführt werden kann, indem Sie den Programmnamen eingeben.

![Ein Standard-Windows-Cmd-Zeilenfenster und ein Windows-Powershell-Fenster](win-terminals.png)

Und unten sehen Sie die Terminal-Anwendung von macOS.

![Ein einfaches Standard-macOS-Terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (z. B. das Terminal und die darin zugänglichen Werkzeuge). Viele Tutorials und Tools, die heute im Web existieren, unterstützen (und leider setzen sie oft voraus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie Zugriff auf das Terminal auf Ihrem gewählten System erhalten.

#### Linux/Unix

Wie oben angedeutet, haben Linux/Unix-Systeme ein Terminal, das standardmäßig verfügbar ist und sich unter Ihren Anwendungen befindet.

#### macOS

macOS verfügt über ein System namens Darwin, das unter der grafischen Benutzeroberfläche liegt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die grundlegenden Werkzeuge bereitstellt. macOS Darwin stimmt größtenteils mit Unix überein, sicherlich ausreichend, um uns während der Arbeit an diesem Artikel keine Sorgen zu machen.

Das Terminal ist auf macOS unter Anwendungen/Dienstprogramme/Terminal verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Befehlszeile) unter Windows traditionell nicht so einfach oder komfortabel wie bei anderen Betriebssystemen. Aber die Dinge verbessern sich.

Windows hatte traditionell ein eigenes terminalähnliches Programm namens cmd ("die Eingabeaufforderung") für eine lange Zeit, aber das hat definitiv keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren, um ein Terminal-Erlebnis auf Windows zu bieten, wie Powershell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)) und Gitbash (das Teil des [git für Windows](https://gitforwindows.org/) Tools ist).

Aber die beste Option für Windows in der modernen Zeit ist das Windows Subsystem für Linux (WSL) – eine Kompatibilitätsschicht, die Linux-Betriebssysteme direkt von Windows 10 aus ausführt und Ihnen ermöglicht, ein "echtes Terminal" direkt auf Windows zu betreiben, ohne eine virtuelle Maschine verwenden zu müssen.

Dies kann direkt aus dem Windows Store kostenlos installiert werden. Sie finden alle Dokumentationen, die Sie benötigen, in der [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![Ein Screenshot der Dokumentation für Windows Subsystem für Linux](wsl.png)

Wenn Sie sich entscheiden müssen, welche Option Sie unter Windows wählen, würden wir dringend empfehlen, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden gut funktionieren, aber Sie werden es einfacher finden, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Nebenbemerkung: Was ist der Unterschied zwischen einer Befehlszeile und einem Terminal?

In der Regel finden Sie diese beiden Begriffe austauschbar verwendet. Technisch gesehen ist ein Terminal eine Software, die ein Shell startet und sich damit verbindet. Eine Shell ist Ihre Sitzung und die Sitzungsumgebung (wo Dinge wie das Prompt und Verknüpfungen angepasst werden können). Die Befehlszeile ist die eigentliche Zeile, in der Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Obwohl es eine Fülle von Werkzeugen von der Befehlszeile aus gibt, wenn Sie Werkzeuge wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, gibt es auch viele Erweiterungen, die als Proxy verwendet werden können, um Befehlszeilenbefehle zu verwenden, ohne das Terminal direkt benutzen zu müssen. Allerdings werden Sie nicht für alles, was Sie tun möchten, eine Code-Editor-Erweiterung finden — irgendwann müssen Sie Erfahrung mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — beginnen wir damit, uns einige Terminalbefehle anzusehen! Hier sind nur einige der Dinge, die die Befehlszeile standardmäßig tun kann, zusammen mit den Namen der relevanten Werkzeuge in jedem Fall:

- Navigieren Sie im Dateisystem Ihres Computers zusammen mit grundlegenden Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich in Ihrer Verzeichnisstruktur: `cd`
  - Verzeichnisse erstellen: `mkdir`
  - Dateien erstellen (und deren Metadaten ändern): `touch`
  - Dateien oder Verzeichnisse kopieren: `cp`
  - Dateien oder Verzeichnisse verschieben: `mv`
  - Dateien oder Verzeichnisse löschen: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Nach Textfragmenten in größeren Textkörpern suchen: `grep`
- Den Inhalt einer Datei seitenweise anzeigen: `less`, `cat`
- Textströme manipulieren und transformieren (zum Beispiel alle Vorkommen von `<div>`s in einer HTML-Datei in `<article>` ändern): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Befehlszeile eingehen — dies ist nur eine kurze Einführung!

Lassen Sie uns fortfahren und einige dieser Werkzeuge in der Befehlszeile verwenden. Bevor Sie weitergehen, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Befehlszeile

Wenn Sie die Befehlszeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um "etwas zu tun". Alle Betriebssysteme (vorausgesetzt, sie sind standardmäßig eingerichtet) öffnen ihr Terminalprogramm in Ihrem "Home"-Verzeichnis, und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

Der Befehl `cd` ermöglicht es Ihnen, das Verzeichnis zu wechseln. Technisch gesehen ist `cd` kein Programm, sondern ein eingebauter Befehl. Das bedeutet, dass Ihr Betriebssystem es standardmäßig bereitstellt und dass Sie es auch nicht versehentlich löschen können – Gott sei Dank! Sie müssen sich nicht zu sehr darum kümmern, ob ein Befehl eingebaut ist oder nicht, aber beachten Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen erscheinen.

Um das Verzeichnis zu wechseln, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, zu dem Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Home-Verzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![Ergebnisse des Befehls cd Desktop in verschiedenen Windows-Terminals — der Ort im Terminal wechselt auf den Desktop](win-terminals-cd.png)

Versuchen Sie, dies in das Terminal Ihres Systems einzugeben:

```bash
cd Desktop
```

Wenn Sie wieder in das vorherige Verzeichnis zurückkehren möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>Tab</kbd>-Taste, um Namen zu vervollständigen, von denen Sie wissen, dass sie vorhanden sind, anstatt den gesamten Namen eintippen zu müssen. Versuchen Sie nach der Eingabe der obigen beiden Befehle, `cd D` einzugeben und <kbd>Tab</kbd> zu drücken — es sollte der Verzeichnisname `Desktop` für Sie vervollständigt werden, sofern er im aktuellen Verzeichnis vorhanden ist. Beachten Sie dies, wenn Sie weiter voranschreiten.

Wenn das Verzeichnis, zu dem Sie wechseln möchten, tief verschachtelt ist, müssen Sie den Pfad kennen, um dorthin zu gelangen. Dies wird normalerweise einfacher, je vertrauter Sie mit der Struktur Ihres Dateisystems werden. Sind Sie sich aber nicht sicher, können Sie es normalerweise mit einer Kombination des Befehls `ls` (siehe unten) herausfinden und indem Sie in Ihrem Explorer/Finder herumklicken, um zu sehen, wo sich ein Verzeichnis befindet, im Verhältnis zu Ihrem aktuellen Standort.

Zum Beispiel, wenn Sie zu einem Verzeichnis namens `src` innerhalb eines Verzeichnisses namens `project` auf dem `Desktop` wechseln möchten, könnten Sie diese drei Befehle ausführen, um von Ihrem Home-Ordner dorthin zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, wobei die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie Sie es tun, wenn Sie Pfade zu Bildern oder anderen Ressourcen in CSS-, HTML- oder JavaScript-Code angeben:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Einfügen eines Schrägstrichs am Anfang Ihres Pfads diesen zu einem absoluten Pfad macht, zum Beispiel `/Users/your-user-name/Desktop`. Das Weglassen des Schrägstrichs, wie wir oben getan haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau das gleiche, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Stamm der Website", während das Weglassen des Schrägstrichs bedeutet, dass "die URL relativ zu meiner aktuellen Seite ist".

> [!NOTE]
> Unter Windows verwenden Sie umgekehrte Schrägstriche anstelle von Schrägstrichen, z. B. `cd Desktop\project\src` — dies mag wirklich seltsam erscheinen, aber wenn Sie daran interessiert sind, warum, [sehen Sie sich diesen YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) an, in dem ein Microsoft-Hauptingenieur eine Erklärung bietet.

### Auflisten des Verzeichnisinhalts

Ein weiterer eingebauter Unix-Befehl ist `ls` (Kurzform für list), der den Inhalt des Verzeichnisses, in dem Sie sich gerade befinden, auflistet. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — dort ist das Äquivalent `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich einfach — Sie erhalten nur den Namen jedes vorhandenen Elements, nicht ob es sich um eine Datei oder ein Verzeichnis handelt oder irgendetwas anderes. Glücklicherweise kann eine kleine Änderung der Befehlsverwendung Ihnen viel mehr Informationen geben.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — dies sind Modifikatoren, die Sie am Ende eines Befehls hinzufügen, wodurch er sich etwas anders verhält. Diese bestehen in der Regel aus einem Leerzeichen nach dem Befehlsnamen, gefolgt von einem Bindestrich, gefolgt von einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` gibt die Option `-l` (_Bindestrich ell_) eine Auflistung mit einer Datei oder einem Verzeichnis in jeder Zeile und vielen weiteren angezeigten Informationen. Verzeichnisse können identifiziert werden, indem Sie nach einem Buchstaben "d" ganz links auf den Zeilen suchen. Dies sind die, in die wir `cd` eingeben können.

Unten ist ein Screenshot mit einem "Standard"-macOS-Terminal oben und einem angepassten Terminal mit einigen zusätzlichen Symbolen und Farben, um es lebendig aussehen zu lassen — beide zeigen die Ergebnisse der Ausführung von `ls -l`:

![Ein Standard-macOS-Terminal und ein bunteres benutzerdefiniertes macOS-Terminal, das eine Dateiliste zeigt - das Ergebnis des Ausführens des Befehls ls -l](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl zur Verfügung hat, können Sie sich die [man-Seite](https://en.wikipedia.org/wiki/Man_page) ansehen. Dies geschieht, indem der Befehl `man` gefolgt vom Namen des Befehls eingegeben wird, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dadurch wird die man-Seite im Standard-Textdateibetrachter des Terminals geöffnet (z. B. [`less`](https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten dann in der Lage sein, mit den Pfeiltasten oder einem ähnlichen Mechanismus durch die Seite zu scrollen. Die man-Seite listet alle Optionen im Detail auf, was anfangs ein wenig einschüchternd wirken kann, aber zumindest wissen Sie, dass sie da ist, wenn Sie sie brauchen. Wenn Sie mit dem Durchsehen der man-Seite fertig sind, müssen Sie diese mit dem Beenden-Befehl Ihres Textbetrachters beenden ("q" in `less`; Sie müssen möglicherweise im Internet danach suchen, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie diese normalerweise als eine einzige Zeichenkette nach dem Bindestrich-Zeichen anfügen, z.B. `ls -lah` oder `ls -ltrh`. Versuchen Sie, die `ls` man-Seite zu durchsuchen, um herauszufinden, was diese zusätzlichen Optionen bedeuten!

Da wir nun zwei grundlegende Befehle besprochen haben, probieren Sie ein wenig in Ihrem Verzeichnis aus und sehen Sie, ob Sie von einem Ort zum anderen navigieren können.

### Erstellen, Kopieren, Verschieben, Entfernen

Es gibt eine Reihe anderer grundlegender Dienstbefehle, die Sie wahrscheinlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, daher werden wir sie nicht alle so ausführlich erklären wie die vorherigen.

Probieren Sie sie in einem Testverzeichnis aus, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, und verwenden Sie die folgenden Beispielbefehle zur Orientierung:

- `mkdir` — Dies erstellt ein neues Verzeichnis in dem aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehlsnamen angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — Entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` wird das Verzeichnis entfernen, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles darin enthaltene entfernen), dann können Sie stattdessen `rm -r` verwenden (siehe unten), aber dies ist gefährlich. Stellen Sie sicher, dass sich nichts darin befindet, das Sie später möglicherweise noch benötigen könnten, da es für immer verschwunden sein wird.
- `touch` — Erstellt eine neue leere Datei in dem aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — Verschiebt eine Datei vom ersten angegebenen Dateipfad zum zweiten angegebenen Dateipfad, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Pfade werden als Dateipfade geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis in eine Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch gesehen wird die Datei verschoben, aber aus praktischer Sicht wird die Datei tatsächlich umbenannt.
- `cp` — Ähnlich wie bei `mv`, erstellt `cp` eine Kopie der Datei im ersten angegebenen Pfad im zweiten angegebenen Pfad. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können diese natürlich anders benennen, wenn Sie möchten).
- `rm` — Entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass diese Löschung dauerhaft ist und nicht über den Papierkorb rückgängig gemacht werden kann, den Sie möglicherweise in Ihrer Desktop-Benutzeroberfläche haben.

> [!NOTE]
> Viele Terminalbefehle ermöglichen Ihnen die Verwendung von Asterisk als "Wildcard"-Zeichen, was "jede Zeichenfolge" bedeutet. Dies ermöglicht es Ihnen, eine Aktion gegen eine potenziell große Anzahl von Dateien gleichzeitig auszuführen, die alle dem angegebenen Muster entsprechen. Zum Beispiel würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — gefährlich?

Wir haben es bereits angedeutet, aber um es klarzustellen — Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle sind nicht sehr gefährlich, aber wenn Sie anfangen, komplexere Befehle zu erstellen, müssen Sie sorgfältig überlegen, was der Befehl bewirken wird, und versuchen, sie zuerst zu testen, bevor Sie sie im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie hatten 1000 Textdateien in einem Verzeichnis, und Sie möchten durch sie alle gehen und nur die löschen, die einen bestimmten Teilstring im Dateinamen haben. Wenn Sie nicht vorsichtig sind, könnten Sie versehentlich etwas Wichtiges löschen und dabei eine Menge Ihrer Arbeit verlieren. Eine gute Gewohnheit besteht darin, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er Ihrer Meinung nach aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu machen und den Befehl zuerst darauf ausführen, um ihn zu testen.

Ein weiterer guter Tipp — wenn Ihnen der Versuch von Terminalbefehlen auf Ihrem eigenen Computer nicht behaglich ist, ist ein sicherer Ort, um sie auszuprobieren, [Glitch.com](https://glitch.com/). Neben der großartigen Möglichkeit, Webentwicklungscode auszuprobieren, bieten die Projekte auch Zugang zu einem Terminal, sodass Sie all diese Befehle direkt in diesem Terminal ausführen können, in dem Wissen, dass Sie Ihren eigenen Computer nicht beschädigen werden.

![Ein doppelter Screenshot, der die Homepage von glitch.com und den Terminal-Emulator von Glitch zeigt](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über bestimmte Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist ein Community-gesteuerter Dokumentationsdienst, ähnlich wie MDN, aber speziell für Terminalbefehle.

Im nächsten Abschnitt werden wir es aufgreifen (oder tatsächlich mehrere Stufen aufgreifen) und sehen, wie wir Werkzeuge auf der Befehlszeile verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Benutzeroberfläche des Desktops vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet wirklich sein Potenzial, wenn Sie anfangen, Befehle miteinander zu verketten, indem Sie das `|` (Pipe) Symbol verwenden. Lassen Sie uns ein sehr schnelles Beispiel betrachten, was dies bedeutet.

Wir haben bereits `ls` betrachtet, das den Inhalt des aktuellen Verzeichnisses ausgibt:

```bash
ls
```

Aber was, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen möchten? `ls` kann das nicht allein tun.

Es gibt ein weiteres verfügbares Unix-Werkzeug namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von dem, was als Eingabe eingegeben wird. Dies kann eine Textdatei sein — das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen von dem zählen, was in es **eingeleitet** wird. Zum Beispiel zählt der folgende Befehl die Anzahl der Zeilen, die vom `ls` Befehl ausgegeben würden (was es normalerweise ins Terminal drucken würde, wenn er allein ausgeführt wird), und gibt diese Zählung anstelle dessen im Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in einer eigenen Zeile druckt, ergibt das effektiv eine Verzeichnis- und Dateizählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix-)Befehlszeilen-Werkzeugen ist, dass sie Text ins Terminal drucken (auch als "Drucken in die Standardausgabe" oder `STDOUT` bekannt). Viele Befehle können auch Inhalte aus gestreamter Eingabe lesen (bekannt als "Standard-Eingabe" oder `STDIN`).

Das Pipe-Operator kann diese Eingaben und Ausgaben verbinden und es uns ermöglichen, zunehmend komplexere Operationen aufzubauen, um unseren Bedürfnissen gerecht zu werden — die Ausgabe eines Befehls kann zur Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe auf `STDOUT` drucken, aber stattdessen wird die Ausgabe von `ls` in `wc` gepiped, das diese Ausgabe als Eingabe annimmt, die Anzahl der Zeilen, die es enthält, zählt und diese Zählung stattdessen auf `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas komplizierteres durchgehen.

Wir versuchen zunächst, den Inhalt der MDN-„fetch“-Seite mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie erhalten keine Ausgabe, weil die Seite umgeleitet wurde (auf [/Web/API/fetch](/de/docs/Web/API/Window/fetch)). Wir müssen `curl` explizit sagen, dass es Weiterleitungen mit dem `-L`-Flag folgen soll.

Lassen Sie uns auch die Header sehen, die `developer.mozilla.org` mit dem `-I`-Flag von `curl` zurückgibt, und alle Standort-Weiterleitungen, die es an das Terminal sendet, drucken, indem wir die Ausgabe von `curl` in `grep` pipen (wir werden `grep` bitten, alle Zeilen zurückzugeben, die das Wort "location" enthalten).

Versuchen Sie, das Folgende auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die letzte Seite erreichen):

```bash
curl https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte ungefähr so aussehen (`curl` wird zuerst einige Download-Zähler und Ähnliches ausgeben):

```bash
location: /de/docs/Web/API/fetch
```

Obwohl konstruiert, könnten wir dieses Ergebnis noch ein Stück weiter führen und die Inhalte der Zeile `location:` transformieren, indem wir den Basis-Ursprung an den Anfang jeder Zeile anhängen, sodass wir vollständige URLs gedruckt bekommen. Dafür werden wir `awk` hinzufügen (das ist eine Programmiersprache ähnlich wie JavaScript oder Ruby oder Python, nur viel älter!).

Versuchen Sie, dies auszuführen:

```bash
curl https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte ungefähr so aussehen:

```bash
https://developer.mozilla.org/de/docs/Web/API/fetch
```

Indem wir diese Befehle verbunden haben, haben wir die Ausgabe so angepasst, dass die vollständigen URLs angezeigt werden, durch die der Mozilla-Server umleitet, wenn wir die `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` URL anfordern. Ihr System kennenzulernen, wird sich in den kommenden Jahren als nützlich erweisen – lernen Sie, wie diese Single-Serving-Tools funktionieren und wie sie Teil Ihres Werkzeugkastens werden können, um Nischenprobleme zu lösen.

## Powerups hinzufügen

Nun, da wir uns einige der eingebauten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, schauen wir uns an, wie wir ein Drittanbieter-CLI-Tool installieren und es nutzen können.

Das große Ökosystem von installierbaren Tools für die Frontend-Webentwicklung existiert derzeit hauptsächlich innerhalb von [npm](https://www.npmjs.com/), einem privat betriebenen Paket-Hosting-Service, der eng mit Node.js zusammenarbeitet. Dies erweitert sich langsam – Sie können damit rechnen, dass im Laufe der Zeit mehr Paketanbieter auftauchen werden.

Das [Installieren von Node.js](https://nodejs.org/en/) installiert auch das npm-Befehlszeilen-Tool (und ein zusätzliches npm-zentriertes Tool namens npx), das einen Zugang zum Installieren zusätzlicher Befehlszeilen-Tools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie zur obigen URL gehen und einen Node.js-Installer herunterladen und ausführen, der zu Ihrem Betriebssystem passt. Wenn Sie dazu aufgefordert werden, stellen Sie sicher, dass npm als Teil der Installation enthalten ist.

![Der Node.js-Installer unter Windows zeigt die Option, npm einzuschließen](npm-install-option.png)

Obwohl wir uns eine Reihe verschiedener Werkzeuge im nächsten Artikel ansehen werden, werden wir mit [Prettier](https://prettier.io/) beginnen. Prettier ist ein meinungsgetriebenes Code-Formatierungswerkzeug, das nur "wenige Optionen" hat. Weniger Optionen bedeuten in der Regel einfachere. Da das Werkzeug manchmal außer Kontrolle geraten kann, was die Komplexität betrifft, können "wenige Optionen" sehr attraktiv sein.

### Wo sollen unsere CLI-Tools installiert werden?

Bevor wir uns mit der Installation von Prettier beschäftigen, gibt es eine Frage zu beantworten — "wo sollten wir es installieren?"

Mit `npm` haben wir die Wahl, Tools global zu installieren — damit wir überall darauf zugreifen können — oder lokal zum aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile in beiden Richtungen — und die folgenden Listen der Vor- und Nachteile für die globale Installation sind alles andere als erschöpfend.

**Vorteile der globalen Installation:**

- Von überall in Ihrem Terminal aus zugänglich
- Nur einmal installieren
- Verbraucht weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Code Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team haben keinen Zugriff auf diese Tools, z.B. wenn Sie den Code über ein Tool wie git teilen.
- In Bezug auf den vorherigen Punkt erschwert es die Reproduzierbarkeit des Projektcodes (wenn Sie Ihre Werkzeuge lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_ Liste kürzer ist, ist die negative Auswirkung der globalen Installation potenziell viel größer als die Vorteile. Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstanden haben.

### Installation von Prettier

Prettier ist ein meinungsgetriebenes Code-Formatierungswerkzeug für Frontend-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr bietet.

Prettier kann:

- Den kognitiven Aufwand sparen, den Stil manuell über alle Ihre Code-Dateien hinweg konsistent zu halten; Prettier kann dies automatisch für Sie tun.
- Anfängern in der Webentwicklung helfen, ihren Code im besten Praxis-Stil zu formatieren.
- Auf jedem Betriebssystem und selbst als direkter Bestandteil der Projekt-Tooling installiert werden, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Stil verwenden, wie Sie es tun.
- Konfiguriert werden, um beim Speichern, während Sie tippen oder sogar vor dem Veröffentlichen Ihres Codes zu laufen (mit zusätzlichem Werkzeug, das wir später im Modul sehen werden).

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationshandbuch](https://prettier.io/docs/en/install.html) vorgeschlagen.

Nachdem Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden erklären, was `--save-dev` im nächsten Artikel tut):

```bash
npm install --save-dev prettier
```

Sie können die Datei jetzt lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen. Das Ausführen des Befehls ohne Argumente wird wie bei vielen anderen Befehlen Nutzungs- und Hilfsinformationen anzeigen. Versuchen Sie dies jetzt:

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

Es ist immer sinnvoll, zumindest die Nutzungsinformationen zu überfliegen, auch wenn sie lang sind. Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird durch Ausführen von `npx prettier` die neueste Version von Prettier heruntergeladen und sofort _nur für diesen Befehl_ ausgeführt. Das mag zwar reizvoll klingen, neue Versionen von Prettier können jedoch die Ausgabe geringfügig modifizieren. Sie möchten, dass es lokal installiert wird, um die Version von Prettier, die Sie verwenden, zum Formatieren zu fixieren, bis Sie bereit sind, sie zu ändern.

### Prettier ausprobieren

Lassen Sie uns einen kurzen Blick auf Prettier werfen, sodass Sie sehen, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo in Ihrem Dateisystem, das leicht zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen einen Codebasis ausführen, um einfach zu überprüfen, ob unser Code angepasst werden muss. `cd` in Ihr Verzeichnis und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe in der Art von:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Es gibt also einige Codestile, die behoben werden können. Kein Problem. Die Hinzufügung der Option `--write` zum `prettier` Befehl wird diese beheben, sodass wir uns auf das Schreiben nützlichen Codes konzentrieren können.

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

Aber noch wichtiger ist, wenn Sie zurück zu Ihrer JavaScript-Datei schauen, werden Sie sehen, dass sie zu etwas wie diesem formatiert wurde:

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

Abhängig von Ihrem Workflow (oder dem Workflow, den Sie wählen) kann dies ein automatisierter Teil Ihres Prozesses werden. Automatisierung ist wirklich dort, wo Werkzeuge glänzen; unsere persönliche Vorliebe ist die Art der Automatisierung, die "einfach passiert", ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es eine Anzahl von Wegen, um Automatisierung zu erreichen, und obwohl sie den Umfang dieses Artikels übersteigen, gibt es einige ausgezeichnete Ressourcen online, die helfen (einige davon wurden verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein git-Repository committen, mit [Husky](https://github.com/typicode/husky).
- Jedes Mal, wenn Sie in Ihrem Code-Editor "Speichern" drücken, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von Continuous Integration Checks mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite Option — während Sie zum Beispiel VS Code verwenden, greift Prettier ein und bereinigt alle Formatierungen, die es tun muss, jedes Mal, wenn wir auf Speichern drücken. Sie finden viel mehr Informationen zur Verwendung von Prettier auf verschiedene Weise in den [Prettier-Dokumentationen](https://prettier.io/docs/en/).

## Andere Werkzeuge zum Ausprobieren

Wenn Sie mit ein paar weiteren Werkzeugen spielen möchten, hier ist eine kurze Liste, die Spaß macht:

- [`bat`](https://github.com/sharkdp/bat) — Eine "schönere" `cat` (`cat` wird verwendet, um den Inhalt von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Befehlszeile, aber visualisiert (`ping` ist ein nützliches Werkzeug, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozessbetrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie ein Düsenflugzeug klingen lässt und Sie das verursachende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber als Befehlszeilentool verfügbar.

Beachten Sie, dass einige der obigen Vorschläge ähnlich wie bei Prettier über npm installiert werden müssen.

## Zusammenfassung

Damit kommen wir zum Ende unserer kurzen Tour durch das Terminal/die Befehlszeile. Als Nächstes werden wir uns detaillierter mit Paketmanagern befassen und sehen, was wir mit ihnen tun können.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}
