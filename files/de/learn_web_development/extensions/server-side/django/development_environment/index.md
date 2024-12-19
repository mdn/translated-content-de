---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — welches gängige Betriebssystem Sie auch verwenden, dieser Artikel sollte Ihnen die notwendigen Informationen bieten, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse im Umgang mit einem Terminal/einer Befehlszeile und wie man Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zum Laufen zu bringen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, den eigenen Computer so einzurichten, dass man mit der Entwicklung von Webanwendungen beginnen kann. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und gibt einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zur Entwicklung und zum Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die wichtigsten Tools, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Bearbeiten von Django-Projekten, zusammen mit einem einfachen _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d. h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers zu testen.

Es gibt weitere Peripheriewerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier jedoch nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zur Codebearbeitung, Linters zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Einrichtungsoptionen gibt es?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, vom Python Package Index (PyPi) und in vielen Fällen von der Paketmanageranwendung des Hostcomputers installiert werden.
- Konfiguriert werden, um eine von mehreren Datenbanken zu verwenden, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- In der Hauptsystem-Python-Umgebung oder in separaten Python-virtuellen Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Wahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten können, und diese Einrichtung wird für den Rest dieses Moduls angenommen.

> [!NOTE]
> Weitere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte über die notwendige Leistung verfügen, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Version von Python sollte verwendet werden?

Sie können jede von Ihrer Ziel-Django-Version unterstützte Python-Version verwenden.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Version zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi) unter Verwendung des _pip_-Tools. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version möglicherweise ziemlich alt ist und nur in die System-Python-Umgebung installiert werden kann (was nicht unbedingt gewünscht ist).
- Installation aus dem Quellcode. Sie können die neueste cutting-edge Version von Django aus dem Quellcode erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django von PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie für Produktion und Entwicklung dieselbe Datenbank auswählen (obwohl Django viele der Unterschiede der Datenbanken mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es dennoch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und die meisten dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist für den Einsatz als leichtgewichtige Datenbank gedacht und kann keinen hohen Grad an Parallelität unterstützen. Sie ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist so konfiguriert, dass es standardmäßig SQLite verwendet, wenn Sie Ihr Website-Projekt mithilfe der Standardwerkzeuge (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Installation systemweit oder in einer Python-virtuellen Umgebung?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Code verwendet wird. Während Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie gleichzeitig nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können potenziell miteinander in Konflikt geraten (d. h., wenn sie auf unterschiedliche Versionen desselben Pakets angewiesen sind).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django ansprechen. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (mithilfe der neuesten Version von Django), während Sie weiterhin Websites pflegen, die auf ältere Versionen angewiesen sind.

Aus diesem Grund führen erfahrene Python-/Django-Entwickler Python-Apps üblicherweise in unabhängigen _Python-virtuellen Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt die Verwendung von Python-virtuellen Umgebungen!

In diesem Modul gehen wir davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie dies gelingt.

## Python 3 installieren

Um Django nutzen zu können, müssen Sie Python 3 auf Ihrem Betriebssystem installiert haben. Sie benötigen auch das [Python Package Index](https://pypi.org/)-Werkzeug — _pip3_ —, das zum Verwalten (Installieren, Aktualisieren und Entfernen) von Python-Paketen/Bibliotheken verwendet wird, die von Django und Ihren anderen Python-Apps genutzt werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Versionen von Python vorhanden sind, und bei Bedarf neue Versionen installieren können, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch vom eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mithilfe der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS beinhaltet standardmäßig Python 3.10.12.
Dies können Sie bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index Tool (_pip3_), das Sie zur Installation von Paketen für Python 3 (einschließlich Django) benötigen, steht jedoch **nicht** standardmäßig zur Verfügung.
Sie können _pip3_ im Bash-Terminal installieren, indem Sie:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version [die von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ nicht die neueste Python-Version für diese Anleitung verwenden, aber wenn Sie es möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist in älteren Versionen enthalten).
Dies können Sie bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dieser wird entweder die Python-Versionsnummer anzeigen, was darauf hindeutet, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) ganz einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Befolgen Sie die Installationsaufforderungen.

Sie können jetzt die erfolgreiche Installation bestätigen, indem Sie `python3 -V` erneut ausführen und die Python-Versionsnummer überprüfen.

Sie können ebenfalls überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es ganz einfach (zusammen mit dem _pip3_-Tool) von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und die Installationsaufforderungen befolgen.
3. Stellen Sie sicher, dass Sie das Kästchen "Add Python to PATH" markieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer enthält standardmäßig _pip3_ (den Python-Paketmanager).
Sie können die installierten Pakete auflisten, wie gezeigt:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und im zweiten Bildschirm das Kästchen "Add Python to environment variables" markieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen zu verwenden.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Zeichenkette mit der Versionsnummer "3", wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung von Version 3 die Befehle auf Linux/macOS mit `python3` und `pip3` und auf Windows mit `py -3` und `py -3 -m pip` voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die unten stehenden Anweisungen zeigen die plattformspezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-virtuellen Umgebung

Die Bibliotheken, die wir zum Erstellen unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide wiederum das Werkzeug [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools schaffen eine konsistente Oberfläche zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Software für virtuelle Umgebungen

#### Setup der virtuellen Umgebung unter Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ beinhaltet) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), oder folgen Sie den Anweisungen unten.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese legen fest, wo die virtuellen Umgebungen gespeichert werden sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn _virtualenv_ nicht funktioniert, wenn Sie es testen, kann man überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

Zu diesem Zeitpunkt sollten Sie eine Reihe von Skripten sehen, die wie unten gezeigt ausgeführt werden:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### Setup der virtuellen Umgebung unter macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau dieselbe wie unter Ubuntu (auch hier können Sie den Anweisungen entweder von der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) folgen oder den unten stehenden).

Installieren Sie _virtualenvwrapper_ (und das enthaltene _virtualenv_) wie gezeigt mit _pip_.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind dieselben Zeilen wie für Ubuntu).
Wenn Sie die _zsh Shell_ verwenden, ist die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash Shell_ verwenden, ist es eine versteckte Datei namens **.bash_profile**. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn _virtualenv_ nicht funktioniert, wenn Sie es testen, kann man überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Beispielsweise wurde bei einem Installationstest auf macOS festgestellt, dass die folgenden Zeilen im Startskript nötig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie danach die Startdatei erneut, indem Sie folgenden Aufruf im Terminal machen:

```bash
source ~/.bash_profile
```

An diesem Punkt, könnten Sie eine Ansammlung von Skripten sehen, die ausgeführt werden (dieselben, die bei der Ubuntu-Installation ausgeführt wurden). Sie sollten nun in der Lage sein, mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden und bearbeiten können, können Sie diese auch im Terminal mit nano öffnen.
>
> Wenn Sie bash verwenden, sehen die Befehle in etwa so aus:
>
> ```bash
> cd ~  # Zum Home-Verzeichnis navigieren
> ls -la # Inhalt des Verzeichnisses auflisten. Sie sollten .bash_profile sehen
> nano .bash_profile # Die Datei im nano-Texteditor öffnen, innerhalb des Terminals
> # Zum Ende der Datei scrollen und die obigen Zeilen einfügen
> # Verwenden Sie Ctrl+X, um nano zu verlassen. Wählen Sie Y, um die Datei zu speichern.
> ```

#### Setup der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da man nicht konfigurieren muss, wo das Tool die Informationen über virtuelle Umgebungen speichert (es gibt einen Standardwert). Alles, was man tun muss, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Nun können Sie mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Nun können Sie mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv — Sie erkennen dies daran, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

```bash
mkvirtualenv my_django_environment
```

Sie sollten eine Ausgabe ähnlich der folgenden sehen:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Jetzt, da Sie sich innerhalb der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an in diesem Artikel (und tatsächlich im gesamten Modul) sollten Sie davon ausgehen, dass alle Befehle innerhalb einer Python-virtuellen Umgebung wie der von uns eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Dokumentation des Tools, aber diese sind diejenigen, die Sie regelmäßig verwenden werden):

- `deactivate` — Beendet die aktuelle Python-virtuelle Umgebung
- `workon` — Listet verfügbare virtuelle Umgebungen auf
- `workon name_of_environment` — Aktiviert die angegebene Python-virtuelle Umgebung
- `rmvirtualenv name_of_environment` — Entfernt die angegebene Umgebung.

## Installation von Django

Nachdem Sie eine virtuelle Umgebung erstellt haben und `workon` verwendet haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, dass Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet nur, dass Python das Django-Modul finden kann):

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Wenn der obige Windows-Befehl kein django-Modul anzeigt, probieren Sie:
>
> ```bash
> py -m django --version
> ```
>
> Unter Windows werden _Python 3_-Skripte standardmäßig durch das Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3`-Modifikator wegzulassen, falls Probleme mit Befehlen auftreten.
> Unter Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zur Ausführung von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie diesen Präfix mit: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Quellcodeverwaltung (SCM) und Versionierungstools ermöglichen es Ihnen, zuverlässig Versionen Ihres Quellcodes zu speichern und zu wiederherstellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" auszutauschen, wenn Sie es benötigen.

Es gibt viele verschiedene SCM-Tools, einschließlich git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) und Cloud-SCM-Hosting-Dienste wie Bitbucket, GitHub und GitLab.
Für diese Anleitung hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, und verwenden das Tool **git**, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Der Einsatz von SCM-Tools ist eine gute Softwareentwicklungspraktik!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Wichtige Konzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Behälter" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf das Organisation- oder Benutzerkonto beschränkt, dem sie gehören.

Alle Arbeiten werden an einem bestimmten "Zweig" von Code in Ihrem Repo durchgeführt.
Wenn Sie Änderungen an einem Zweig sichern möchten, können Sie einen "Commit" erstellen, der alle Änderungen seit Ihrem letzten Commit auf dem aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig namens "main" erstellt. Sie können mit git andere Zweige daraus erstellen, die anfänglich alle Commits des ursprünglichen Zweigs enthalten.
Zweige können separat durch das Hinzufügen von Commits weiterentwickelt werden, und später können Sie einen "Pull Request" (PR) auf GitHub verwenden, um Änderungen von einem Zweig in einen anderen zu mergen.
Mit git können Sie auch zwischen Zweigen auf Ihrem lokalen Computer wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu Zweigen ist es möglich, `tags` zu erstellen, die auf jedem Zweig erstellt werden können, und später diese Zweige zu diesem Punkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositories auf GitHub

Zuerst werden wir ein kostenloses Konto auf GitHub erstellen.
Mit einem kostenlosen Konto können Sie keine privaten Repositories erstellen, aber Sie können beliebig viele _öffentliche_ Repositories ("Repos") erstellen.
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Lokale Bibliotheks-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, wenn wir sie im Rest dieser Anleitung weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Werkzeugleiste und wählen Sie **New repository**.
3. Füllen Sie alle Felder auf diesem Formular aus.
   Obwohl sie nicht obligatorisch sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliotheks-Website, die in Django geschrieben wurde".
   - Wählen Sie "Public" für das Repository (die Standardeinstellung).

     > [!WARNING]
     > Dies macht _alle_ Quellcode sichtbar.
     > Denken Sie daran, keine Anmeldeinformationen oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Auswahlliste.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt "Clone" die Registerkarte "HTTPS" und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<Ihr_git_benutzer_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
3. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung festschreiben und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir es, um Ihnen zu zeigen, wie man Änderungen von GitHub holt, Änderungen lokal vornimmt und diese dann an GitHub sendet.

1. In der Eingabeaufforderung/im Terminal holen wir uns zunächst (fetch) und ziehen dann (pull und mergen in den aktuellen Zweig) die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir gerade den Quellcode geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > In der Regel sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, der den Speicherort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Zweig.
   Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl: `git remote -v` verwenden.

2. Als Nächstes checken wir einen neuen Zweig aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einige Zweige als den aktuellen Zweig auszuwählen, an dem Sie arbeiten.
   Das `-b`-Flag zeigt an, dass wir beabsichtigen, einen neuen Zweig namens "update_gitignore" zu erstellen, anstatt einen vorhandenen Zweig mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen an ihr Ende und speichern Sie dann:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um anzugeben, welche Dateien nicht automatisch von git gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die von der **.gitignore**-Datei nicht ignoriert werden) zur "Staging Area" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcode-Dateien und keine Binärdateien, temporäre Dateien usw. einschließen).
   Es sollte ungefähr wie die untenstehende Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `committen` Sie die Dateien in Ihr lokales Repo, indem Sie das `-m`-Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht der Unterschrift unter den Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Wir können den `update_gitignore`-Zweig an das "origin" Repo (GitHub) mit dem folgenden Befehl senden:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einer Schaltfläche zum Drücken, wenn Sie den Branch, den Sie gerade hochgeladen haben, "vergleichen und einen Pull-Request erstellen" möchten.
   Wählen Sie die Schaltfläche und folgen Sie dann den Anweisungen, um einen Pull-Request zu erstellen und zu mergen.

   ![Banner, der fragt, ob der Benutzer die neuesten Zweig-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen wird der "main"-Branch des Repos auf GitHub Ihre Änderungen an `.gitignore` enthalten.

9. Sie können weiterhin Ihr lokales Repo aktualisieren, wenn sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Im nächsten Thema werden wir dieses Repos verwenden, um unseren Quelltext für die lokale Bibliotheks-Website zu speichern.

## Andere Python-Werkzeuge

Erfahrene Python-Entwickler können zusätzliche Werkzeuge installieren, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter verwenden sollten, wie [pylint-django](https://pypi.org/project/pylint-django/), da einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den Standarddateien, die für Django generiert wurden, melden.

## Testen Ihrer Installation

Der obige Test funktioniert, macht aber nicht sehr viel Spaß. Ein interessanterer Test ist es, ein Grundgerüstprojekt zu erstellen und es zu sehen, wie es funktioniert. Um dies zu tun, navigieren Sie zuerst in Ihrem Eingabeaufforderung/Terminal dort hin, wo Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Anschließend können Sie mit dem **django-admin**-Tool wie gezeigt eine neue Grundgerüst-Site namens "_mytestsite_" erstellen. Nach dem Erstellen der Site können Sie in den Ordner navigieren, in dem Sie das Hauptskript für Projektverwaltung, **manage.py**, finden.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ in diesem Ordner mit **manage.py** und dem `runserver`-Befehl wie gezeigt ausführen.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unangelegte Migrationen" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie die folgende URL in Ihrem lokalen Webbrowser aufrufen: `http://127.0.0.1:8000/`. Sie sollten eine Website sehen, die so aussieht:

![Die Startseite der Django-Skelett-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und funktionsfähig.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) laufen lassen können. Im nächsten Artikel erweitern wir diesen Prozess, indem wir eine einfache, aber vollständige Webanwendung erstellen.

## Siehe auch

- [Schnellanleitung zur Installation](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Vollständige Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie man Django entfernt
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
