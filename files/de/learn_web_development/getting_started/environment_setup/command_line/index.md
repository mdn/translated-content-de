---
title: Einführung in die Kommandozeile
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Im Verlauf Ihrer Entwicklung werden Sie unweigerlich einige Befehle im Terminal (oder auf der „Kommandozeile“ – das ist im Wesentlichen das Gleiche) ausführen müssen. Dieser Artikel bietet eine Einführung in das Terminal, die wesentlichen Befehle, die Sie dort eingeben müssen, wie Sie Befehle miteinander verketten und wie Sie Ihre eigenen Kommandozeilentools (CLI-Tools) hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundlegende Vertrautheit mit Ihrem Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was die Kommandozeile ist und was Sie damit tun können.</li>
          <li>Verständnis dafür, wie Sie auf verschiedenen Systemen auf die Kommandozeile zugreifen.</li>
          <li>Kennenlernen grundlegender Tastenkombinationen (zum Beispiel Pfeil nach oben, um vorherige Befehle aufzurufen, Tab für Autovervollständigung).</li>
          <li>Grundlegende Befehle kennen (zum Beispiel <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Befehlsoptionen/Flags.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Willkommen im Terminal

Das Terminal ist eine Textschnittstelle zur Ausführung textbasierter Programme. Wenn Sie Werkzeuge für die Webentwicklung verwenden, besteht eine nahezu garantierte Möglichkeit, dass Sie die Kommandozeile öffnen und einige Befehle ausführen müssen, um Ihre ausgewählten Tools zu verwenden (solche Tools werden oft als **CLI-Tools** – Kommandozeilen-Tools – bezeichnet).

Eine große Zahl von Tools kann durch die Eingabe von Befehlen in die Kommandozeile verwendet werden; viele sind auf Ihrem System bereits vorinstalliert, und eine große Zahl anderer kann aus Paketregistern installiert werden. Paketregister sind wie App-Stores, aber (meistens) für kommandozeilenbasierte Tools und Software. Wie man einige Tools installiert, werden wir später in diesem Kapitel sehen, und wir werden mehr über Paketregister im nächsten Kapitel lernen.

Eine der größten Kritiken an der Kommandozeile ist, dass sie in Sachen Benutzererfahrung stark zu wünschen übrig lässt. Die Kommandozeile zum ersten Mal zu sehen, kann eine einschüchternde Erfahrung sein: ein leerer Bildschirm und ein blinkender Cursor, mit sehr wenig offensichtlicher Hilfe, was zu tun ist.

Auf den ersten Blick sind sie weit davon entfernt, einladend zu sein, aber es gibt viel, was Sie mit ihnen tun können, und wir versprechen, dass es mit etwas Anleitung und Übung einfacher wird, sie zu verwenden! Deshalb bieten wir dieses Kapitel an – um Ihnen den Einstieg in diese scheinbar unfreundliche Umgebung zu erleichtern.

### Woher kommt das Terminal?

Das Terminal stammt aus den Jahren 1950-60 und seine ursprüngliche Form ähnelt wirklich nicht dem, was wir heute verwenden (dafür sollten wir dankbar sein). Sie können ein bisschen Geschichte im Wikipedia-Eintrag zu [Computer Terminal](https://en.wikipedia.org/wiki/Computer_terminal) lesen.

Seitdem ist das Terminal ein konstantes Merkmal aller Betriebssysteme geblieben – von Desktop-Computern bis hin zu Servern, die in der Cloud versteckt sind, zu Mikrocomputern wie dem Raspberry PI Zero und sogar zu Mobiltelefonen. Es bietet direkten Zugriff auf das zugrunde liegende Dateisystem des Computers und auf niedrige Funktionsebenen und ist daher unglaublich nützlich, um komplexe Aufgaben schnell auszuführen, wenn Sie wissen, was Sie tun.

Es ist auch nützlich für die Automatisierung – zum Beispiel, um einen Befehl zu schreiben, der die Titel von Hunderten von Dateien sofort aktualisiert, zum Beispiel von "ch01-xxxx.png" zu "ch02-xxxx.png". Wenn Sie die Dateinamen mit Ihrem Finder- oder Explorer-GUI-App aktualisieren, würde es viel Zeit in Anspruch nehmen.

Jedenfalls wird das Terminal nicht so schnell verschwinden.

### Wie sieht das Terminal aus?

Unten sehen Sie einige der unterschiedlichen Programme, die Ihnen den Zugang zu einem Terminal ermöglichen.

Die nächsten Bilder zeigen die Eingabeaufforderungen, die in Windows verfügbar sind – es gibt eine gute Auswahl an Optionen vom „cmd“-Programm bis zu „powershell“ – die über das Startmenü aufgerufen werden können, indem Sie den Programmnamen eingeben.

![A vanilla windows cmd line window, and a windows powershell window](win-terminals.png)

Und unten sehen Sie die macOS-Terminalanwendung.

![A basic vanilla macOS terminal](mac-terminal.png)

### Wie greifen Sie auf das Terminal zu?

Viele Entwickler verwenden heute Unix-basierte Tools (zum Beispiel das Terminal und die darin zugänglichen Tools). Viele Tutorials und Werkzeuge, die heute im Internet existieren, unterstützen (und gehen leider davon aus) Unix-basierte Systeme, aber keine Sorge – sie sind auf den meisten Systemen verfügbar. In diesem Abschnitt werden wir uns ansehen, wie Sie auf das Terminal in Ihrem gewählten System zugreifen können.

#### Linux/Unix

Wie oben angedeutet, verfügen Linux/Unix-Systeme standardmäßig über ein Terminal, das unter Ihren Anwendungen aufgeführt ist.

#### macOS

macOS verfügt über ein System namens Darwin, das unter der grafischen Benutzeroberfläche sitzt. Darwin ist ein Unix-ähnliches System, das das Terminal und den Zugriff auf die grundlegenden Tools bereitstellt. macOS Darwin hat größtenteils Parität mit Unix, sicherlich gut genug, um uns während dieses Artikels keine Sorgen zu bereiten. 

Das Terminal ist auf macOS unter `Programme/Dienstprogramme/Terminal` verfügbar.

#### Windows

Wie bei einigen anderen Programmierwerkzeugen war die Verwendung des Terminals (oder der Eingabeaufforderung) unter Windows traditionell nicht so einfach oder unkompliziert wie bei anderen Betriebssystemen. Aber die Dinge verbessern sich. Windows hatte traditionell lange Zeit sein eigenes terminalähnliches Programm namens `cmd` („die Eingabeaufforderung“), aber dies hat definitiv keine Parität mit Unix-Befehlen und entspricht der alten Windows-DOS-Eingabeaufforderung.

Bessere Programme existieren für die Bereitstellung einer Terminalerfahrung auf Windows, wie PowerShell ([siehe hier, um Installer zu finden](https://github.com/PowerShell/PowerShell)), und Gitbash (das Teil des [git for Windows](https://gitforwindows.org/) Toolsets ist).

Die beste Option für Windows in der modernen Zeit ist jedoch das Windows Subsystem für Linux (WSL) – eine Kompatibilitätsschicht, um Linux-Betriebssysteme direkt von Windows 10 aus auszuführen, die es Ihnen ermöglicht, ein „echtes Terminal“ direkt auf Windows zu betreiben, ohne dass eine virtuelle Maschine erforderlich ist.

Dies kann direkt kostenlos aus dem Windows Store installiert werden. Sie finden alle erforderlichen Dokumentationen in den [Windows Subsystem for Linux Documentation](https://learn.microsoft.com/en-us/windows/wsl/).

![a screenshot of the Windows subsystem for Linux documentation](wsl.png)

Wenn es darum geht, welche Option Sie auf Windows wählen sollten, würden wir dringend empfehlen, zu versuchen, das WSL zu installieren. Sie könnten bei der Standard-Eingabeaufforderung (`cmd`) bleiben, und viele Tools werden gut funktionieren, aber Sie werden feststellen, dass alles einfacher ist, wenn Sie eine bessere Parität mit Unix-Tools haben.

#### Seitenanmerkung: Was ist der Unterschied zwischen einer Kommandozeile und einem Terminal?

Im Allgemeinen werden Sie feststellen, dass diese beiden Begriffe austauschbar verwendet werden. Technisch gesehen ist ein Terminal eine Software, die eine Shell startet und verbindet. Eine Shell ist Ihre Sitzung und Ihre Sitzungsumgebung (wo Dinge wie Eingabeaufforderung und Verknüpfungen angepasst werden können). Die Kommandozeile ist die buchstäbliche Zeile, in die Sie Befehle eingeben und der Cursor blinkt.

### Müssen Sie das Terminal verwenden?

Auch wenn es eine große Anzahl von Tools gibt, die von der Kommandozeile aus verfügbar sind, gibt es, wenn Sie Tools wie [Visual Studio Code](https://code.visualstudio.com/) verwenden, auch eine Vielzahl von Erweiterungen, die als Proxy verwendet werden können, um Terminalbefehle zu verwenden, ohne das Terminal direkt verwenden zu müssen. Sie werden jedoch keine Code-Editor-Erweiterung für alles, was Sie tun möchten, finden — Sie müssen irgendwann Erfahrungen mit dem Terminal sammeln.

## Grundlegende eingebaute Terminalbefehle

Genug geredet — schauen wir uns einige Terminalbefehle an! Out-of-the-box kann die Kommandozeile einige verschiedene Dinge tun, wobei die Namen der entsprechenden Tools in jedem Fall angegeben sind:

- Navigieren Sie im Dateisystem Ihres Computers zusammen mit basalen Aufgaben wie Erstellen, Kopieren, Umbenennen und Löschen:

  - Bewegen Sie sich durch Ihre Verzeichnisstruktur: `cd`
  - Erstellen Sie Verzeichnisse: `mkdir`
  - Erstellen Sie Dateien (und ändern Sie deren Metadaten): `touch`
  - Kopieren Sie Dateien oder Verzeichnisse: `cp`
  - Verschieben Sie Dateien oder Verzeichnisse: `mv`
  - Löschen Sie Dateien oder Verzeichnisse: `rm`

- Dateien von bestimmten URLs herunterladen: `curl`
- Nach Textfragmenten in größeren Textkörpern suchen: `grep`
- Die Inhalte einer Datei Seite für Seite ansehen: `less`, `cat`
- Ströme von Text manipulieren und transformieren (zum Beispiel ändern alle Instanzen von `<div>`s in einer HTML-Datei zu `<article>`): `awk`, `tr`, `sed`

> [!NOTE]
> Es gibt eine Reihe guter Tutorials im Internet, die viel tiefer in die Kommandozeile eintauchen — dies ist nur eine kurze Einführung!

Lassen Sie uns fortfahren und untersuchen, wie einige dieser Tools auf der Kommandozeile verwendet werden können. Bevor Sie fortfahren, öffnen Sie Ihr Terminalprogramm!

### Navigation auf der Kommandozeile

Wenn Sie die Kommandozeile besuchen, müssen Sie unweigerlich zu einem bestimmten Verzeichnis navigieren, um „etwas zu tun“. Alle Betriebssysteme (vorausgesetzt, eine Standardinstallation) starten ihr Terminalprogramm in Ihrem „Benutzer“-Verzeichnis und von dort aus möchten Sie wahrscheinlich an einen anderen Ort wechseln.

Der `cd`-Befehl ermöglicht es Ihnen, das Verzeichnis zu ändern. Technisch gesehen ist cd kein Programm, sondern ein eingebauter Befehl. Das bedeutet, dass Ihr Betriebssystem es out-of-the-box bereitstellt und Sie es nicht versehentlich löschen können — Gott sei Dank! Sie müssen sich nicht allzu sehr darum kümmern, ob ein Befehl eingebaut ist oder nicht, aber beachten Sie, dass eingebaute Befehle auf allen Unix-basierten Systemen erscheinen.

Um das Verzeichnis zu ändern, geben Sie `cd` in Ihr Terminal ein, gefolgt von dem Verzeichnis, in das Sie wechseln möchten. Angenommen, das Verzeichnis befindet sich in Ihrem Benutzerverzeichnis, können Sie `cd Desktop` verwenden (siehe die Screenshots unten).

![results of the cd Desktop command being run in a variety of windows terminals - the terminal location moves into the desktop](win-terminals-cd.png)

Versuchen Sie, dies in Ihrem System-Terminal einzugeben:

```bash
cd Desktop
```

Wenn Sie wieder in das vorherige Verzeichnis wechseln möchten, können Sie zwei Punkte verwenden:

```bash
cd ..
```

> [!NOTE]
> Eine sehr nützliche Terminalverknüpfung ist die Verwendung der <kbd>Tab</kbd>-Taste, um vorhandene Namen zu vervollständigen, anstatt den gesamten Namen eingeben zu müssen. Beispielsweise, nach Eingabe der obigen zwei Befehle, versuchen Sie `cd D` zu tippen und dann <kbd>Tab</kbd> zu drücken — es sollte den Verzeichnisnamen `Desktop` für Sie vervollständigen, vorausgesetzt, es ist im aktuellen Verzeichnis vorhanden. Denken Sie daran, während Sie voranschreiten.

Wenn das Verzeichnis, das Sie aufrufen möchten, tief verschachtelt ist, müssen Sie den Pfad dorthin kennen. Dies wird normalerweise einfacher, je mehr Sie sich mit der Struktur Ihres Dateisystems vertraut machen, aber wenn Sie sich über den Pfad unsicher sind, können Sie ihn normalerweise mit einer Kombination aus dem `ls`-Befehl (siehe unten) und durch Klicken im Explorer/Finder-Fenster erkunden, um zu sehen, wo sich ein Verzeichnis relativ zu Ihrem aktuellen Standort befindet.

Zum Beispiel, wenn Sie in ein Verzeichnis namens `src` gehen möchten, das sich in einem Verzeichnis namens `project` befindet, das sich auf dem `Desktop` befindet, könnten Sie diese drei Befehle eingeben, um dorthin von Ihrem Benutzerordner zu gelangen:

```bash
cd Desktop
cd project
cd src
```

Aber das ist Zeitverschwendung — stattdessen können Sie einen Befehl eingeben, bei dem die verschiedenen Elemente im Pfad durch Schrägstriche getrennt sind, genau wie beim Spezifizieren von Pfaden zu Bildern oder anderen Ressourcen in CSS, HTML oder JavaScript-Code:

```bash
cd Desktop/project/src
```

Beachten Sie, dass das Hinzufügen eines führenden Schrägstrichs am Anfang Ihres Pfades ihn absolut macht, z.B. `/Users/Ihr-Benutzername/Desktop`. Das Fehlen des führenden Schrägstrichs, wie wir es oben gemacht haben, macht den Pfad relativ zu Ihrem aktuellen Arbeitsverzeichnis. Dies ist genau dasselbe, wie Sie es mit URLs in Ihrem Webbrowser sehen würden. Ein führender Schrägstrich bedeutet "am Ursprung der Webseite", während das Weglassen des Schrägstrichs bedeutet, dass die URL relativ zu meiner aktuellen Seite ist.

> [!NOTE]
> Unter Windows verwenden Sie Rückwärtsschläge anstelle von Schrägstrichen, z.B. `cd Desktop\project\src` — das mag wirklich seltsam anmuten, aber wenn Sie interessiert sind an dem Warum, sehen Sie sich diesen [YouTube-Clip](https://www.youtube.com/watch?v=5T3IJfBfBmI) mit einer Erklärung eines Microsoft Principal Engineers an.

### Auflisten von Verzeichnisinhalten

Ein weiterer eingebauter Unix-Befehl ist `ls` (Kurzform von „list“), der die Inhalte des Verzeichnisses, in dem Sie sich gerade befinden, auflistet. Beachten Sie, dass dies nicht funktioniert, wenn Sie die Standard-Windows-Eingabeaufforderung (`cmd`) verwenden — das Äquivalent dort ist `dir`.

Versuchen Sie, dies jetzt in Ihrem Terminal auszuführen:

```bash
ls
```

Dies gibt Ihnen eine Liste der Dateien und Verzeichnisse in Ihrem aktuellen Arbeitsverzeichnis, aber die Informationen sind wirklich rudimentär — Sie erhalten nur den Namen jedes vorhandenen Elements und nicht, ob es sich um eine Datei oder ein Verzeichnis handelt oder andere Informationen. Glücklicherweise kann eine kleine Änderung der Befehlsnutzung Ihnen viel mehr Informationen liefern.

### Einführung in Befehlsoptionen

Die meisten Terminalbefehle haben Optionen — das sind Modifikatoren, die Sie dem Ende eines Befehls hinzufügen, damit dieser sich ein wenig anders verhält. Diese bestehen normalerweise aus einem Abstand nach dem Befehl, gefolgt von einem Bindestrich und einem oder mehreren Buchstaben.

Zum Beispiel, probieren Sie dies aus und sehen Sie, was Sie erhalten:

```bash
ls -l
```

Im Fall von `ls` gibt die `-l` (_dash ell_) Option Ihnen ein Listing mit einer Datei oder einem Verzeichnis auf jeder Zeile und zeigt viel mehr Informationen an. Verzeichnisse können identifiziert werden, indem man ein „d“ ganz links bei den Zeilen betrachtet. Das sind diejenigen, in die wir `cd` betreten können.

Unten ist ein Screenshot mit einem „vanilla“ macOS Terminal oben und einem individuellen Terminal mit einigen extra Symbolen und Farben, um es lebhaft zu halten — beide zeigen die Ergebnisse von der Ausführung von `ls -l`:

![A vanilla macOS terminal and a more colorful custom macOS terminal, showing a file listing - the result of running the ls -l command](mac-terminals-ls.png)

> [!NOTE]
> Um genau herauszufinden, welche Optionen jeder Befehl verfügbar hat, können Sie seine [man-Seite](https://en.wikipedia.org/wiki/Man_page) aufrufen. Dies erfolgt indem Sie das `man` Kommando tippen, gefolgt von dem Namen des Befehls, den Sie nachschlagen möchten, zum Beispiel `man ls`. Dies öffnet die man-Seite im Standard-Textdateibetrachter des Terminals (zum Beispiel, [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) in meinem Terminal), und Sie sollten in der Lage sein, die Seite mit den Pfeiltasten oder einem ähnlichen Mechanismus zu durchsuchen. Die man-Seite listet alle Optionen im Detail auf, was anfangs etwas einschüchternd sein kann, aber zumindest wissen Sie, dass es dort ist, wenn Sie es brauchen. Sobald Sie mit dem Durchsuchen der man-Seite fertig sind, müssen Sie sie mit dem Beenden-Befehl Ihres Textanzeigers beenden („q“ in `less`; Sie müssen möglicherweise im Internet danach suchen, wenn es nicht offensichtlich ist).

> [!NOTE]
> Um einen Befehl mit mehreren Optionen gleichzeitig auszuführen, können Sie sie alle üblicherweise in einer einzelnen Zeichenkette nach dem Bindestrichzeichen setzen, zum Beispiel `ls -lah`, oder `ls -ltrh`. Versuchen Sie, sich die `ls` man-Seite anzusehen, um herauszufinden, was diese zusätzlichen Optionen tun!

Nachdem wir zwei grundlegende Befehle besprochen haben, probieren Sie ein bisschen in Ihrem Verzeichnis aus und sehen Sie, ob Sie von einem Ort zum nächsten navigieren können.

### Erstellen, kopieren, verschieben, entfernen

Es gibt eine Reihe anderer grundlegender Dienstprogramme, die Sie wahrscheinlich häufig verwenden werden, wenn Sie mit dem Terminal arbeiten. Sie sind ziemlich einfach, also werden wir sie nicht so detailliert erklären wie die vorhergehenden.

Spielen Sie in einem Testverzeichnis, das Sie irgendwo erstellt haben, damit Sie nicht versehentlich etwas Wichtiges löschen, mit den Beispielbefehlen unten zum Üben:

- `mkdir` — das erstellt ein neues Verzeichnis im aktuellen Verzeichnis, in dem Sie sich befinden, mit dem Namen, den Sie nach dem Befehl angeben. Zum Beispiel, `mkdir my-awesome-website` erstellt ein neues Verzeichnis namens `my-awesome-website`.
- `rmdir` — entfernt das angegebene Verzeichnis, aber nur, wenn es leer ist. Zum Beispiel, `rmdir my-awesome-website` entfernt das Verzeichnis, das wir oben erstellt haben. Wenn Sie ein Verzeichnis entfernen möchten, das nicht leer ist (und auch alles darin), können Sie stattdessen `rm -r` verwenden (siehe unten), aber das ist gefährlich. Stellen Sie sicher, dass sich darin nichts befindet, das Sie später benötigen könnten, da es für immer weg sein wird.
- `touch` — erstellt eine neue leere Datei im aktuellen Verzeichnis. Zum Beispiel, `touch mdn-example.md` erstellt eine neue leere Datei namens `mdn-example.md`.
- `mv` — bewegt eine Datei vom ersten angegebenen Dateipfad zum zweiten angegebenen Dateipfad, zum Beispiel `mv mdn-example.md mdn-example.txt` (die Speicherorte sind als Dateiwege geschrieben). Dieser Befehl verschiebt eine Datei namens `mdn-example.md` im aktuellen Verzeichnis zu einer Datei namens `mdn-example.txt` im aktuellen Verzeichnis. Technisch wird die Datei bewegt, aber aus praktischer Sicht wird die Datei mit diesem Befehl umbenannt.
- `cp` — ähnlich zu `mv`, erstellt `cp` eine Kopie der Datei am ersten angegebenen Ort am zweiten angegebenen Ort. Zum Beispiel, `cp mdn-example.txt mdn-example.txt.bak` erstellt eine Kopie von `mdn-example.txt` namens `mdn-example.txt.bak` (Sie können es natürlich anders benennen, wenn Sie möchten).
- `rm` — entfernt die angegebene Datei. Zum Beispiel, `rm mdn-example.txt` löscht eine einzelne Datei namens `mdn-example.txt`. Beachten Sie, dass dieses Löschen dauerhaft ist und nicht über den Papierkorb, den Sie möglicherweise auf Ihrer Desktop-Benutzeroberfläche haben, rückgängig gemacht werden kann.

> [!NOTE]
> Viele Terminalbefehle erlauben es Ihnen, Sternchen als „wild cards“ zu verwenden, was „jede Zeichenfolge“ bedeutet. Auf diese Weise können Sie eine Aktion auf eine potenziell große Anzahl von Dateien gleichzeitig ausführen, die alle mit dem angegebenen Muster übereinstimmen. Beispielsweise würde `rm mdn-*` alle Dateien löschen, die mit `mdn-` beginnen. `rm mdn-*.bak` würde alle Dateien löschen, die mit `mdn-` beginnen und mit `.bak` enden.

## Terminal — gefährlich genannt?

Wir haben dies bereits angedeutet, aber um es klar zu machen – Sie müssen vorsichtig mit dem Terminal sein. Einfache Befehle bergen nicht allzu viel Gefahr, aber wenn Sie anfangen, komplexere Befehle zusammenzusetzen, müssen Sie sorgfältig überlegen, was der Befehl tun wird, und versuchen, ihn zuerst zu testen, bevor Sie ihn schließlich im vorgesehenen Verzeichnis ausführen.

Angenommen, Sie hatten 1000 Textdateien in einem Verzeichnis und wollten alle durchgehen und nur diejenigen löschen, die einen bestimmten Substring im Dateinamen enthalten. Wenn Sie nicht vorsichtig sind, könnten Sie am Ende etwas Wichtiges löschen, was dazu führen könnte, dass Sie viel Ihrer Arbeit verlieren.
Eine gute Angewohnheit, die man übernehmen kann, ist, Ihren Terminalbefehl in einem Texteditor zu schreiben, herauszufinden, wie er Ihrer Meinung nach aussehen sollte, und dann eine Sicherungskopie Ihres Verzeichnisses zu erstellen und zu versuchen, den Befehl zuerst auf diesem zu testen.

Ein weiterer guter Tipp — wenn Sie die Terminalbefehle nicht auf Ihrer eigenen Maschine ausprobieren möchten, ist ein sicherer Ort, um sie zu versuchen, [Glitch.com](https://glitch.com/). Zusammen mit einer großartigen Möglichkeit, Webentwicklungs-Code auszuprobieren, bieten die Projekte Ihnen auch Zugang zu einem Terminal, sodass Sie alle diese Befehle direkt in diesem Terminal ausführen können, in der Gewissheit, dass Sie Ihre eigene Maschine nicht beschädigen werden.

![a double screenshot showing the glitch.com home page, and the glitch terminal emulator](glitch.png)

Eine großartige Ressource, um einen schnellen Überblick über spezifische Terminalbefehle zu erhalten, ist [tldr.sh](https://tldr.sh/). Dies ist eine Community-gesteuerte Dokumentationsdienstleistung, ähnlich zu MDN, aber spezifisch für Terminalbefehle.

Im nächsten Abschnitt lassen Sie uns ein paar Stufen höher gehen (oder tatsächlich mehrere Stufen) und sehen, wie wir Werkzeuge auf der Kommandozeile verbinden können, um wirklich zu sehen, wie das Terminal gegenüber der regulären Desktop-Benutzeroberfläche vorteilhaft sein kann.

## Befehle mit Pipes verbinden

Das Terminal entfaltet sein volles Potenzial, wenn Sie anfangen, Befehle mit dem `|` (Pipe)-Symbol zu verketten. Lassen Sie uns ein sehr kurzes Beispiel dafür betrachten, was das bedeutet.

Wir haben bereits `ls` betrachtet, das die Inhalte des aktuellen Verzeichnisses auflistet:

```bash
ls
```

Aber was wäre, wenn wir schnell die Anzahl der Dateien und Verzeichnisse im aktuellen Verzeichnis zählen wollten? `ls` kann das nicht alleine erledigen.

Es gibt ein weiteres Unix-Tool namens `wc`. Dies zählt die Anzahl der Wörter, Zeilen, Zeichen oder Bytes von dem, was ihm zugeführt wird. Dies kann eine Textdatei sein – das untenstehende Beispiel gibt die Anzahl der Zeilen in `myfile.txt` aus:

```bash
wc -l myfile.txt
```

Aber es kann auch die Anzahl der Zeilen dessen zählen, was in es **eingeführt** wird. Zum Beispiel: Der folgende Befehl zählt die Anzahl der Zeilen, die vom `ls`-Befehl ausgegeben werden (was er normalerweise anzeigen würde, wenn er alleine ausgeführt wird), und gibt diese Zählung stattdessen im Terminal aus:

```bash
ls | wc -l
```

Da `ls` jede Datei oder jedes Verzeichnis in eine eigene Zeile druckt, erhalten wir dadurch effektiv eine Verzeichnis- und Datei-Zählung.

Was passiert hier also? Eine allgemeine Philosophie von (unix) Kommandozeilen-Tools ist, dass sie Text in das Terminal drucken (auch bekannt als „in die Standardausgabe drucken“ oder `STDOUT`). Ein Großteil der Befehle kann auch Inhalte aus gestreamtem Input lesen (bekannt als „Standard-Eingabe“ oder `STDIN`).

Der Pipe-Operator kann diese Eingaben und Ausgaben **verbinden**, sodass wir zunehmend komplexere Operationen erstellen können, die unseren Bedürfnissen entsprechen - die Ausgabe eines Befehls kann zu der Eingabe des nächsten Befehls werden. In diesem Fall würde `ls` normalerweise seine Ausgabe zu `STDOUT` drucken, aber anstelle dessen wird die Ausgabe von `ls` an `wc` weitergeleitet, das diese als Eingabe übernimmt, die Anzahl der enthaltenen Zeilen zählt und diese Zählung stattdessen an `STDOUT` druckt.

## Ein etwas komplexeres Beispiel

Lassen Sie uns etwas durchgehen, das ein bisschen komplexer ist.

Wir werden zunächst versuchen, die Inhalte der MDN-Seite „fetch“ mit dem `curl`-Befehl abzurufen (der verwendet werden kann, um Inhalte von URLs anzufordern), von `https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Versuchen Sie es jetzt:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Sie werden keine Ausgabe erhalten, weil die Seite umgeleitet wurde (zu [/Web/API/fetch](/de/docs/Web/API/Window/fetch)).
Wir müssen `curl` ausdrücklich anweisen, Redirects mit dem `-L`-Flag zu folgen.

Lassen Sie uns auch die Header ansehen, die `developer.mozilla.org` mit dem `-I`-Flag von `curl` zurückgibt, und alle Standortumleitungen, die es sendet, an das Terminal drucken, indem wir die Ausgabe von `curl` in `grep` weiterleiten (wir werden `grep` bitten, alle Zeilen, die das Wort „location“ enthalten, zurückzugeben).

Versuchen Sie, Folgendes auszuführen (Sie werden sehen, dass es nur eine Umleitung gibt, bevor wir die endgültige Seite erreichen):

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
```

Ihre Ausgabe sollte in etwa so aussehen (`curl` wird zuerst einige Downloadzähler und dergleichen ausgeben):

```bash
location: /en-US/docs/Web/API/fetch
```

Obwohl es gestellt wirkt, könnten wir dieses Ergebnis noch ein Stück weiterführen und die Inhalte der `location:`-Zeilen transformieren, indem wir den Basis-Ursprung an den Start jeder Nachricht hinzufügen, sodass wir vollständige URLs anzeigen.
Dafür werden wir `awk` hinzuziehen (das ist eine Programmiersprache ähnlich zu JavaScript oder Ruby oder Python, nur viel älter!).

Versuchen Sie, das auszuführen:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Ihre endgültige Ausgabe sollte in etwa so aussehen:

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
```

Indem wir diese Befehle kombiniert haben, haben wir die Ausgabe angepasst, um die vollständigen URLs anzuzeigen, durch die der Mozilla-Server umleitet, wenn wir die URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch` anfordern.
Ihr System kennenzulernen, wird sich in den kommenden Jahren als nützlich erweisen – lernen Sie, wie diese Einzelbedienungstools funktionieren und wie sie Teil Ihres Toolkits werden können, um Nischenprobleme zu lösen.

## Aufrüsten hinzufügen

Jetzt, da wir uns einige der integrierten Befehle angesehen haben, mit denen Ihr System ausgestattet ist, lassen Sie uns schauen, wie wir ein Drittanbieter-CLI-Tool installieren und verwenden können.

Das umfangreiche Ökosystem von installierbaren Tools für die Frontend-Webentwicklung existiert derzeit größtenteils innerhalb von [npm](https://www.npmjs.com/), einem privat geführten Paket-Hosting-Dienst, der eng mit Node.js zusammenarbeitet.
Dies wird langsam erweitert – Sie können erwarten, dass mit der Zeit mehr Paket-Anbieter erscheinen werden.

[Die Installation von Node.js](https://nodejs.org/en/) installiert auch das npm-Kommandozeilen-Tool (und ein ergänzendes npm-zentriertes Tool namens npx), das einen Zugang zum Installieren von zusätzlichen Kommandozeilen-Tools bietet. Node.js und npm funktionieren auf allen Systemen gleich: macOS, Windows und Linux.

Installieren Sie npm jetzt auf Ihrem System, indem Sie auf die obige URL gehen und einen Node.js-Installer heruntergeladen und ausgeführt haben, der für Ihr Betriebssystem geeignet ist. Sorgen Sie dafür, dass npm Teil der Installation ist, wenn Sie dazu aufgefordert werden.

![the Node.js installer on windows, showing the option to include npm](npm-install-option.png)

Obwohl wir in den nächsten Artikeln verschiedene Tools betrachten werden, werden wir uns an [Prettier](https://prettier.io/) herantrauen.
Prettier ist ein meinungsstarkes Code-Formatierungstool, das nur „wenige Optionen“ bietet.
Die geringere Anzahl an Optionen bedeutet weniger Komplexität.
Da das Tooling manchmal außer Kontrolle geraten kann in Bezug auf Komplexität, kann „wenige Optionen“ sehr ansprechend sein.

### Wo installieren wir unsere CLI-Tools?

Bevor wir uns der Installation von Prettier widmen, gibt es eine Frage zu beantworten — „wo sollten wir es installieren?“

Mit `npm` haben wir die Möglichkeit, Tools global zu installieren — damit wir sie überall verwenden können — oder lokal im aktuellen Projektverzeichnis.

Es gibt Vor- und Nachteile in beide Richtungen — und die folgenden Listen von Vor- und Nachteilen des globalen Installierens sind weit davon entfernt, vollständig zu sein.

**Vorteile der globalen Installation:**

- Von überall im Terminal aus zugänglich
- Nur einmal installieren
- Verwendet weniger Speicherplatz
- Immer die gleiche Version
- Fühlt sich an wie jeder andere Unix-Befehl

**Nachteile der globalen Installation:**

- Möglicherweise nicht mit dem Codebase Ihres Projekts kompatibel
- Andere Entwickler in Ihrem Team werden nicht auf diese Tools zugreifen können, wenn Sie den Codebase zum Beispiel über ein Tool wie Git teilen.
- In Verbindung mit dem vorherigen Punkt macht es Projekt-Code schwieriger zu replizieren (wenn Sie Ihre Tools lokal installieren, können sie als Abhängigkeiten eingerichtet und mit <code>npm install</code> installiert werden).

Obwohl die _Nachteile_-Liste kürzer ist, ist der negative Einfluss des globalen Installierens möglicherweise viel größer als die Vorteile.
Hier werden wir lokal installieren, aber fühlen Sie sich frei, global zu installieren, sobald Sie die relativen Risiken verstehen.

### Installation von Prettier

Prettier ist ein meinungsstarkes Codeformatierungstool für Frontend-Entwickler, das sich auf JavaScript-basierte Sprachen konzentriert und Unterstützung für HTML, CSS, SCSS, JSON und mehr hinzufügt.

Prettier kann:

- Den kognitiven Aufwand reduzieren, den Stil manuell durch alle Ihre Code-Dateien konsistent zu halten; Prettier kann dies automatisch für Sie tun.
- Neulingen in der Webentwicklung helfen, ihren Code im Best-Practice-Modus zu formatieren.
- Auf jedem Betriebssystem und sogar als direkter Bestandteil des Projekt-Toolings installiert werden, um sicherzustellen, dass Kollegen und Freunde, die an Ihrem Code arbeiten, denselben Coderichtlinien verwenden.
- So konfiguriert werden, dass es beim Speichern, während des Schreibens oder sogar vor der Veröffentlichung Ihres Codes (mit zusätzlichen Werkzeugen, die wir später in diesem Modul sehen werden) ausgeführt wird.

Für diesen Artikel werden wir Prettier lokal installieren, wie im [Prettier-Installationsleitfaden](https://prettier.io/docs/en/install.html) vorgeschlagen.

Sobald Sie Node installiert haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl aus, um Prettier zu installieren (wir werden im nächsten Artikel erklären, was `--save-dev` tut):

```bash
npm install --save-dev prettier
```

Sie können die Datei nun lokal mit dem [npx](https://docs.npmjs.com/cli/commands/npx/) Tool ausführen.
Wenn Sie den Befehl ohne Argumente ausführen, wird wie bei vielen anderen Befehlen eine Verwendungs- und Hilfsinformation angezeigt.
Versuchen Sie es jetzt:

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

Es ist immer lohnenswert, zumindest kurz die Verwendungsinformation zu überfliegen, auch wenn sie lang ist.
Es wird Ihnen helfen, besser zu verstehen, wie das Tool verwendet werden soll.

> [!NOTE]
> Wenn Sie Prettier nicht zuerst lokal installiert haben, wird `npx prettier` die neueste Version von Prettier herunterladen und ausführen, alles auf einmal _nur für diesen Befehl_.
> Obwohl das großartig klingt, können neue Versionen von Prettier die Ausgabe leicht ändern.
> Sie möchten es lokal installieren, um die Version von Prettier zu fixieren, die Sie zum Formatieren verwenden, bis Sie bereit sind, sie zu ändern.

### Spielen mit Prettier

Lassen Sie uns einen kurzen Testlauf mit Prettier machen, damit Sie sehen können, wie es funktioniert.

Erstellen Sie zunächst ein neues Verzeichnis irgendwo auf Ihrem Dateisystem, das einfach zu finden ist. Vielleicht ein Verzeichnis namens `prettier-test` auf Ihrem `Desktop`.

Speichern Sie nun den folgenden Code in einer neuen Datei namens `index.js` in Ihrem Testverzeichnis:

```js-nolint
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Wir können Prettier gegen einen Codebestand ausführen, um einfach zu überprüfen, ob unser Code angepasst werden muss. Wechseln Sie in Ihr Verzeichnis, und versuchen Sie, diesen Befehl auszuführen:

```bash
npx prettier --check index.js
```

Sie sollten eine Ausgabe in etwa dieser Art erhalten:

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Also gibt es ein paar Codestile, die angepasst werden können. Kein Problem. Das Hinzufügen der `--write`-Option zum Prettier-Befehl wird diese aufräumen, sodass wir uns darauf konzentrieren können, tatsächlich nützlichen Code zu schreiben.

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

Aber noch wichtiger ist, dass Ihre JavaScript-Datei jetzt folgendermaßen neu formatiert wurde:

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

Je nach Ihrem Arbeitsablauf (oder dem, den Sie auswählen) können Sie dies zu einem automatisierten Teil Ihres Prozesses machen. Automatisierung ist wirklich, wo Tools auszeichnen; unsere persönliche Präferenz ist die Art der Automatisierung, die „einfach passiert“, ohne dass etwas konfiguriert werden muss.

Mit Prettier gibt es eine Reihe von Möglichkeiten, wie Automatisierung erreicht werden kann und obwohl sie über den Umfang dieses Artikels hinausgeht, gibt es einige ausgezeichnete Ressourcen online, um zu helfen (einige davon sind verlinkt). Sie können Prettier aufrufen:

- Bevor Sie Ihren Code in ein Git-Repository committen, indem Sie [Husky](https://github.com/typicode/husky) verwenden.
- Jedes Mal, wenn Sie „speichern“ in Ihrem Code-Editor betätigen, sei es [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) oder [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- Als Teil von kontinuierlichen Integrationsprüfungen mit Tools wie [GitHub Actions](https://github.com/features/actions).

Unsere persönliche Präferenz ist die zweite — während der Verwendung von zum Beispiel VS Code, wird Prettier starten und alle Formatierung anpassen, die angepasst werden muss, jedes Mal, wenn wir auf speichern klicken. Sie können viel mehr Informationen über die Verwendung von Prettier in verschiedenen Weisen in den [Prettier Dokumenten](https://prettier.io/docs/en/) finden.

## Andere Tools, mit denen Sie spielen können

Wenn Sie mit noch ein paar Tools spielen möchten, hier ist eine kurze Liste, die es sich zu versuchen lohnt:

- [`bat`](https://github.com/sharkdp/bat) — Ein „schöneres“ `cat` (`cat` wird verwendet, um die Inhalte von Dateien anzuzeigen).
- [`prettyping`](https://denilson.sa.nom.br/prettyping/) — `ping` auf der Kommandozeile, aber visualisiert (`ping` ist ein nützliches Tool, um zu überprüfen, ob ein Server antwortet).
- [`htop`](https://htop.dev/) — Ein Prozess-Betrachter, nützlich, wenn etwas Ihren CPU-Lüfter wie eine Turbine klingen lässt und Sie das störende Programm identifizieren möchten.
- [`tldr`](https://tldr.sh/#installation) — bereits früher in diesem Kapitel erwähnt, aber verfügbar als Kommandozeilentool.

Beachten Sie, dass einige der oben genannten Vorschläge möglicherweise wie Prettier über npm installiert werden müssen.

## Zusammenfassung

Das bringt uns zum Ende unserer Einführungstour durch das Terminal/die Kommandozeile und des Environment Setup Moduls. Als Nächstes werden wir Ihnen dabei helfen, Ihre erste einfache Website zu erstellen, damit Sie einen Eindruck davon bekommen, wie Webentwicklung ist.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
