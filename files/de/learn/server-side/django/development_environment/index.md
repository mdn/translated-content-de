---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn/Server-side/Django/development_environment
l10n:
  sourceCommit: 969c3ca835e0a43a403ed61a3ea8245539fcc4dd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können. Egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen das geben, was Sie benötigen, um mit der Entwicklung von Django-Apps beginnen zu können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse über die Verwendung eines Terminals/Kommandozeilen und wie Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert werden.
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

## Übersicht über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zum Entwickeln und Testen von Django-Apps verwenden können, bevor Sie sie in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Computer-Webbrowser zu testen.

Es gibt andere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht abdecken werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDE zum Bearbeiten von Code, Linter für die automatische Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Einrichtungsoptionen gibt es?

Django ist äußerst flexibel in Bezug auf die Art und Weise, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus der Quelle, vom Python Package Index (PyPi) und in vielen Fällen über die Paketmanager-Anwendung des Hostcomputers installiert werden.
- Konfiguriert werden, um eine von mehreren Datenbanken zu verwenden, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Haupt-Python-Systemumfeld oder innerhalb separater Python-virtueller Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Optionen. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im Verlauf dieses Moduls angenommen.

> [!NOTE]
> Andere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Version zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, an denen Sie Django herunterladen können:

- Das Python Package Repository (PyPi), indem Sie das _pip_-Tool verwenden. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise sehr alt ist und nur in das System-Python-Umfeld installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Von der Quelle installieren. Sie können die neueste bleeding-edge Version von Django aus der Quelle erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt Ihnen, wie Sie Django von PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die PostgreSQL-, MariaDB-, MySQL-, Oracle- und SQLite-Datenbanken, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützungsstufen für andere beliebte SQL- und NoSQL-Datenbanken bereitstellen. Wir empfehlen, dass Sie dieselbe Datenbank sowohl für Produktion als auch für Entwicklung wählen (obwohl Django viele der Datenbankunterschiede mit seinem Objekt-Relationalen Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und die meisten dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichte Datenbank konzipiert und kann keine hohen Stufen der Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python-Virtual-Environment installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzelne globale Umgebung, die von allen Python3-Codes geteilt wird. Obwohl Sie in dieser Umgebung beliebige Python-Pakete installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können möglicherweise miteinander in Konflikt geraten (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (die die neueste Version von Django verwenden), während Sie weiterhin Websites pflegen, die auf älteren Versionen beruhen.

Erfahrene Python/Django-Entwickler führen in der Regel Python-Apps in unabhängigen _Python-Virtual-Environments_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-Virtual-Environments!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Python 3 installieren

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem installiert haben. Sie benötigen auch das [Python Package Index](https://pypi.org/)-Tool — _pip3_ —, mit dem Sie die von Django und Ihren anderen Python-Apps verwendeten Python-Pakete/Bibliotheken verwalten (installieren, aktualisieren und entfernen) können.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und wie Sie bei Bedarf neue Versionen für Ubuntu Linux 20.04, macOS und Windows 10 installieren können.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch vom eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die benötigten Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS umfasst standardmäßig Python 3.10.12. Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, ist jedoch **nicht** standardmäßig verfügbar. Sie können _pip3_ im Bash-Terminal installieren, indem Sie Folgendes ausführen:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die von [Django 5.0 unterstützt](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) wird. Sie müssen für dieses Tutorial nicht die neueste Python-Version verwenden, aber wenn Sie möchten, finden sich im Internet Anleitungen.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist auf älteren Versionen enthalten). Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Besuchen Sie <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django), die mit Django 5.0 funktioniert, herunter.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können ebenso überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es (zusammen mit dem _pip3_-Tool) ganz einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Besuchen Sie <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django), die mit Django 5.0 funktioniert, herunter.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen.
3. Achten Sie darauf, das Kästchen "Add Python to PATH" zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer umfasst standardmäßig _pip3_ (den Python-Paketmanager). Sie können installierte Pakete wie gezeigt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert. Sollte jedoch eine Meldung angezeigt werden, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es Ihrem Systempfad hinzuzufügen. Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kästchen "Add Python to environment variables" aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können in der Regel auf jedem Betriebssystem die einfachen Befehle `python` und `pip` verwendet werden, um Python und pip auszuführen. Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Version-3-Zeichenkette, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie, um Version 3 zu verwenden, Befehle mit `python3` und `pip3` auf Linux/macOS und mit `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die nachstehenden Anweisungen zeigen die plattform-spezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django innerhalb einer Python-Virtual-Environment

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Tool [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Virtual-Environment-Software

#### Einrichtung der virtuellen Umgebung auf Ubuntu

Nach der Installation von Python und pip können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), oder folgen Sie den Anweisungen unten.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese geben den Speicherort an, an dem die virtuellen Umgebungen leben sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript sich am erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie eine Reihe von Skripten sehen, die ausgeführt werden, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### Einrichtung der virtuellen Umgebung auf macOS

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genau dasselbe wie auf Ubuntu (wiederum können Sie den Anweisungen aus der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das _virtualenv_ gebündelt) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind dieselben Zeilen wie für Ubuntu). Wenn Sie die _zsh-Shell_ verwenden, ist die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash-Shell_ verwenden, wird sie eine versteckte Datei namens **.bash_profile** sein. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript sich am erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Beispiel: Ein Installationstest auf macOS führte dazu, dass folgende Zeilen in der Startdatei erforderlich waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Aufruf im Terminal machen:

```bash
source ~/.bash_profile
```

An diesem Punkt können Sie eine Reihe von Skripten sehen, die ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten nun in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle ungefähr so aus:
>
> ```bash
> cd ~  # Wechseln Sie in mein Home-Verzeichnis
> ls -la # Listet den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im Nano-Texteditor innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obigen Zeilen ein
> # Verwenden Sie Ctrl+X, um Nano zu beenden, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung auf Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist sogar einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, gestaltet sich die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformabhängig). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist für Windows/macOS ähnlich).

```bash
mkvirtualenv my_django_environment
```

Sie sollten eine Ausgabe sehen, die der folgenden ähnelt:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Jetzt, wo Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Für den Rest dieses Artikels (und in der Tat des Moduls) können Sie davon ausgehen, dass alle Befehle in einer Python-Virtual-Environment wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber dies sind die Befehle, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlässt die aktuelle Python-Virtual-Environment
- `workon` — Listet verfügbare virtuelle Umgebungen auf
- `workon name_of_environment` — Aktiviert die angegebene Python-Virtual-Environment
- `rmvirtualenv name_of_environment` — Entfernt die angegebene Umgebung.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet lediglich, ob Python das Django-Modul finden kann):

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Wenn der obige Windows-Befehl kein Django-Modul anzeigt, versuchen Sie:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_-Skripte werden durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach spezifischer Installation variieren kann.
> Versuchen Sie, den `-3`-Modifikator wegzulassen, wenn Sie Probleme mit Befehlen haben.
> In Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie diesen Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Quellcodeverwaltung (SCM) und Versionierungstools ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekanntem gutem Code" zu teilen, wenn Sie es benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw. sowie Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab. Für dieses Tutorial lagern wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und ihn bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Software-Entwicklungspraxis!
> Diese Anleitungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberstes "Bucket" zur Speicherung von Code, wobei jedes Repository normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält. Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf die Besitzorganisation oder das Benutzerkonto beschränkt.

Alle Arbeiten werden an einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt. Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit im aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Sie können mit git andere Branches von diesem aus erstellen, die zunächst alle Commits des Originalbranches enthalten. Sie können Branches separat durch das Hinzufügen von Commits weiterentwickeln und später mit einem "Pull Request" (PR) auf GitHub Änderungen von einem Branch in einen anderen zusammenführen. Sie können git auch verwenden, um zwischen Branches auf Ihrem lokalen Rechner zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `tags` auf einem beliebigen Branch zu erstellen und diesen Branch später zu diesem Zeitpunkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositories auf GitHub

Zuerst erstellen wir ein kostenloses Konto auf GitHub. Mit einem kostenlosen Konto können Sie keine privaten Repos erstellen, aber Sie können so viele _öffentliche_ Repositories ("Repos") erstellen, wie Sie möchten. Dann erstellen und konfigurieren wir ein Repository mit dem Namen "django_local_library" zur Speicherung des [Local library website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website), während wir es im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **New repository** aus.
3. Füllen Sie alle Felder in diesem Formular aus. Während diese nicht obligatorisch sind, sind sie stark empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library website written in Django".
   - Wählen Sie "Public" für das Repository (Standard).

     > [!WARNING]
     > Dies wird _alle_ Quellcodes sichtbar machen.
     > Denken Sie daran, keine Anmeldeinformationen oder anderes sensitives Material in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahlleiste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlleiste aus. MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Markieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Nun, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Auf GitHub klicken Sie auf die grüne Schaltfläche **Code**. Im Abschnitt "Clone" wählen Sie den "HTTPS"-Reiter aus und kopieren die URL. Wenn Sie den Repositorynamen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
3. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Nun werden wir die `.gitignore`-Datei auf dem lokalen Computer modifizieren, die Änderung festschreiben und das Repository auf GitHub aktualisieren. Dies ist eine nützliche Änderung, hauptsächlich aber zeigen wir damit, wie Sie Änderungen von GitHub holen, lokal ändern und dann auf GitHub hochladen können.

1. In der Eingabeaufforderung/im Terminal holen ("fetch") wir zuerst und ziehen ("pull") dann die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht zwingend erforderlich, da wir den Quellcode gerade erst geklont haben und wissen, dass er aktuell ist. Im Allgemeinen sollten Sie Ihre Quellen von GitHub jedoch aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, das den Speicherort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch. Sie können überprüfen, dass origin unser Repo auf GitHub ist, indem Sie den Befehl: `git remote -v` verwenden.

2. Als nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen Branch auszuwählen, der der aktuelle Branch ist, an dem Sie arbeiten. Der `-b`-Schalter zeigt an, dass wir beabsichtigen, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen vorhandenen Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen ans Ende und speichern Sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add`-Befehl, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) im "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`-ten möchten, korrekt sind (Sie möchten Quellcodedateien, keine Binärdateien, temporäre Dateien usw. einbeziehen). Es sollte etwa so aussehen wie die Liste unten.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`-ten Sie die Dateien in Ihren lokalen Repo und verwenden Sie den `-m`-Schalter, um eine prägnante, aber klare Commit-Nachricht anzugeben. Dies ist gleichbedeutend damit, die Änderungen zu genehmigen und sie zum offiziellen Teil des lokalen Repos zu machen.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Wir können den neuen Branch `update_gitignore` mit dem folgenden Befehl an das "origin"-Repo (GitHub) pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück auf die Seite auf GitHub, wo Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einer Schaltfläche, die Sie auffordert, den Branch, den Sie gerade hochgeladen haben, zu "Compare and pull request". Wählen Sie die Schaltfläche aus und folgen Sie den Anweisungen, um einen Pull Request zu erstellen und dann zusammenzuführen.

   ![Banner, der fragt, ob Nutzer kürzlich aktualisierte Branches vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main"-Branch auf dem Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien mithilfe dieses add/commit/push-Zyklus ändern.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Weitere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linter (wie `pylint`) fälschlicherweise Fehler in den von Django generierten Standarddateien melden.

## Testen Ihrer Installation

Der oben dargestellte Test funktioniert, ist aber nicht sehr unterhaltsam. Ein interessanterer Test besteht darin, ein Skelettprojekt zu erstellen und es arbeiten zu sehen. Dazu navigieren Sie zuerst in Ihrer Eingabeaufforderung/Ihrem Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Skelettseite namens "_mytestsite_" mit dem **django-admin**-Tool erstellen, wie gezeigt. Nachdem Sie die Seite erstellt haben, können Sie in den Ordner navigieren, in dem sich das Hauptskript für die Projektverwaltung befindet, **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem `runserver`-Befehl starten, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unapplied migration(s)" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie im lokalen Webbrowser zu der folgenden URL navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die ungefähr so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und zum Laufen gebracht.

Im Abschnitt Testen haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) im Browser ausführen können. Im nächsten Artikel vertiefen wir diesen Prozess und bauen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnelle Installationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Anleitung zur Installation von Django — vollständiger Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [Anleitung zur Installation von Django unter Windows](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
