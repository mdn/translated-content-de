---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Da Sie nun wissen, wofür Django geeignet ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können — welches gängige Betriebssystem Sie auch immer verwenden, dieser Artikel sollte Ihnen das geben, was Sie benötigen, um mit der Entwicklung von Django-Apps beginnen zu können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/einer Kommandozeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zum Laufen zu bringen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der verbleibende Artikel erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie für die Entwicklung und das Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bietet, sind eine Reihe von Python-Skripten zum Erstellen und Bearbeiten von Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, mit dem Sie lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers testen können.

Es gibt andere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind, auf die wir hier nicht eingehen werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linter für die automatische Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Optionen gibt es für die Einrichtung von Django?

Django ist äußerst flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Vom Quellcode, aus dem Python Package Index (PyPi) und in vielen Fällen über die Paketmanager-Anwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-Virtualenvs ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Wahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im restlichen Modul angenommen.

> [!NOTE]
> Weitere mögliche Installationsoptionen sind in der offiziellen Django-Dokumentation beschrieben. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung besitzen, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi) mit dem _pip_-Tool. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die zusammen mit Betriebssystemen ausgeliefert werden, bieten ein vertrautes Installationsverfahren. Beachten Sie jedoch, dass die gepackte Version möglicherweise ziemlich alt ist und nur in die systemweite Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie wollen).
- Vom Quellcode installieren. Sie können die neueste Version von Django vom Quellcode beziehen und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django von PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere populäre SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie für Produktions- und Entwicklungsumgebung dieselbe Datenbank auswählen (obwohl Django mit seinem ORM viele Datenbankunterschiede abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und die meisten dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und kann keine hohe Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich lesend sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einem virtuellen Python-Umfeld installieren?

Wenn Sie Python 3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python 3-Codes gemeinsam genutzt wird. Während Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie gleichzeitig nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können potenziell miteinander in Konflikt stehen (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängig sind).

Wenn Sie Django in die Standard/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (mit der neuesten Version von Django), während Sie weiterhin Websites pflegen, die auf älteren Versionen basieren.

Daher führen erfahrene Python-/Django-Entwickler Python-Apps häufig in unabhängigen _Python-Virtualenvironments_ aus. Dies ermöglicht mehrere unterschiedliche Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt, dass Sie Python-Virtualenvironments verwenden!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen wie unten.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das [Python Package Index](https://pypi.org/)-Tool — _pip3_ — das verwendet wird, um Python-Pakete/Bibliotheken zu verwalten (installieren, aktualisieren und entfernen), die von Django und Ihren anderen Python-Apps verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie die auf Ihrem System installierten Python-Versionen überprüfen können und neue Versionen bei Bedarf installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Je nach Plattform können Sie auch Python/pip über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit der entsprechenden, plattformenspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index-Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal installieren mit:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, [die von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ nicht die neueste Version von Python für dieses Tutorial verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig nicht Python 3 (Python 2 ist in älteren Versionen enthalten).
Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, die angibt, dass Python 3 installiert ist, oder `python3: command not found`, was bedeutet, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Finden Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können jetzt die erfolgreiche Installation bestätigen, indem Sie `python3 -V` erneut ausführen und die Python-Version überprüfen.

Sie können auf ähnliche Weise überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig nicht Python, aber Sie können es (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Stellen Sie sicher, dass das Kontrollkästchen "Add Python to PATH" aktiviert ist.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert standardmäßig _pip3_ (den Python-Paketmanager).
Sie können installierte Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie für den obigen Befehl benötigen.
> Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kontrollkästchen "Add Python to environment variables" aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Version "3" Zeichenkette, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie für die Verwendung von Version 3 Befehle mit `python3` und `pip3` auf Linux/macOS und `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die Anweisungen unten zeigen die plattformenspezifischen Befehle, wie sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer virtuellen Python-Umgebung

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide auf dem Tool [virtualenv](https://virtualenv.pypa.io/en/latest/) basieren. Die Wrapper-Tools erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Software für virtuelle Umgebungen

#### Einrichtung der virtuellen Umgebung auf Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ beinhaltet) installieren. Sie können [die offizielle Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder die Anweisungen unten befolgen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese legen den Speicherort fest, an dem die virtuellen Umgebungen gespeichert werden sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh` Skripts. Wenn _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie prüfen, ob Python und das Skript sich an dem erwarteten Speicherort befinden (und ändern Sie gegebenenfalls die Startdatei).
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei erneut, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie sehen, wie eine Menge Skripte ausgeführt werden, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen.

#### Einrichtung der virtuellen Umgebung auf macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau die gleiche wie auf Ubuntu (auch hier können Sie die Anweisungen entweder aus der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten befolgen).

Installieren Sie _virtualenvwrapper_ (und bundling _virtualenv_) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (diese sind dieselben Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, wird die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, wird sie eine versteckte Datei namens **.bash_profile** sein. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die `VIRTUALENVWRAPPER_PYTHON` Variable verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh` Skripts. Wenn _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie prüfen, ob Python und das Skript sich an dem erwarteten Speicherort befinden (und ändern Sie gegebenenfalls die Startdatei).
>
> Ein Installationstest auf macOS führte z.B. dazu, dass die folgenden Zeilen im Startdatei nötig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei erneut, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

An diesem Punkt sehen Sie möglicherweise eine Menge Skripte, die ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht zum Bearbeiten finden können, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle so aus:
>
> ```bash
> cd ~  # Zum Home-Verzeichnis navigieren
> ls -la #Den Inhalt des Verzeichnisses auflisten. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im Texteditor nano, im Terminal
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obigen Zeilen hinein
> # Verwenden Sie Ctrl+X, um nano zu beenden, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung auf Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool die Informationen der virtuellen Umgebung speichert (es gibt einen Standardwert). Sie müssen lediglich den folgenden Befehl in der Eingabeaufforderung ausführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen.

### Erstellen einer virtuellen Umgebung

Wenn Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Jetzt, wo Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an in diesem Artikel (und in der Tat im Modul) sollten Sie davon ausgehen, dass alle Befehle innerhalb einer Python-Virtualenvironments wie dem oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlassen der aktuellen Python-Virtualenvironments
- `workon` — Auflisten der verfügbaren virtuellen Umgebungen
- `workon name_of_environment` — Aktivieren der angegebenen Python-Virtualenvironments
- `rmvirtualenv name_of_environment` — Entfernen der angegebenen Umgebung.

## Installation von Django

Nachdem Sie eine virtuelle Umgebung erstellt und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet nur, ob Python das Django-Modul finden kann):

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Wenn der obige Windows-Befehl kein django-Modul anzeigt, versuchen Sie:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_ werden Skripte gestartet, indem Sie dem Befehl `py -3` voranstellen, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3` Modifikator wegzulassen, wenn Sie auf Probleme mit Befehlen stoßen.
> In Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie dieses Präfix mit: `py -3`

## Verwaltung des Quellcodes mit Git und GitHub

Tools zur Versionierung des Quellcodes (Source Code Management, SCM) und der Versionierung ermöglichen es Ihnen, zuverlässig Versionen Ihres Quellcodes zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie ihn brauchen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., sowie cloudbasierte SCM-hosting services wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/) hosten, einem der beliebtesten cloud-basierten Quellcode-Hosting-Services, und das Tool **git** verwenden, um unseren Quellcode lokal zu verwalten und bei Bedarf nach GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraktik!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Lernen von Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als das oberste "Container" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf die besitzende Organisation oder das Benutzerkonto beschränkt.

Alle Arbeiten werden auf einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit zum aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Sie können andere Branches daraus mit git erstellen, die anfänglich alle Commits des ursprünglichen Branches enthalten.
Sie können Branches getrennt entwickeln, indem Sie Commits hinzufügen, und dann später einen "Pull Request" (PR) auf GitHub verwenden, um Änderungen von einem Branch zu einem anderen zu zusammenführen.
Sie können auch git verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln, um verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `Tags` auf jedem Branch zu erstellen und später diesen Branch zu diesem Zeitpunkt wiederherzustellen.

### Ein Konto und Repository auf GitHub erstellen

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" zum Speichern der [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir sie im Rest dieses Tutorials entwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus.
   Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliothekswebsite, geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository aus (die Standardeinstellung).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar.
     > Denken Sie daran, keine Anmeldeinformationen oder anderes vertrauliches Material in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahl aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl aus.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code** Schaltfläche.
   Wählen Sie im "Clone" Abschnitt die "HTTPS" Registerkarte aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads)).
3. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen ändern und synchronisieren

Jetzt werden wir die `.gitignore` Datei auf dem lokalen Computer ändern, die Änderung committen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir das, um Ihnen zu zeigen, wie man Änderungen von GitHub abruft, lokal Änderungen vornimmt und diese dann zu GitHub pusht.

1. In der Eingabeaufforderung/im Terminal holen (fetch) wir zuerst und ziehen (pull) dann die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir gerade den Quellcode geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Jedoch sollten Sie im Allgemeinen Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "Ursprung" ist ein _Remote_, das den Speicherort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, dass der Ursprung unser Repo auf GitHub ist, indem Sie den Befehl eingeben: `git remote -v`.

2. Als nächstes erstellen wir einen neuen Branch, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout` Befehl wird verwendet, um einen Branch zum aktuellen Branch zu machen, an dem Sie arbeiten.
   Das `-b` Flag zeigt an, dass wir vorhaben, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore** Datei, kopieren Sie die folgenden Zeilen am Ende ein und speichern Sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um anzugeben, welche Dateien git nicht automatisch sichern sollte, wie z.B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add` Befehl, um alle geänderten Dateien (die nicht von der **.gitignore** Datei ignoriert werden) dem "Staging-Bereich" des aktuellen Branches hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status` Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellendateien einfügen, nicht Binärdateien, temporäre Dateien usw.).
   Es sollte ungefähr so wie die folgende Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit` die Dateien in Ihrem lokalen Repo, indem Sie das `-m` Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht dem Abzeichnen der Änderungen und dem offiziellen Bestandteil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Wir können den `update_gitignore` Branch in das "origin"-Repo (GitHub) mit dem folgenden Befehl pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen, mit einer Schaltfläche, die drückt wenn Sie den "Compare and pull request" für den kürzlich hochgeladenen Branch ausführen möchten.
   Wählen Sie die Schaltfläche aus und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und zusammenzuführen.

   ![Banner fragt, ob der Benutzer die neuesten Zweig-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main" Branch im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, indem Sie diesen Add/Commit/Push-Zyklus verwenden, wenn sich die Dateien ändern.

Im nächsten Thema verwenden wir dieses Repo zum Speichern unseres Quellcodes der lokalen Bibliothekswebsite.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige allgemeine Python-Linter (wie `pylint`) fälschlicherweise Fehler in den Standarddateien von Django melden.

## Testen Sie Ihre Installation

Der obige Test funktioniert, aber er macht nicht viel Spaß. Ein interessanterer Test ist es, ein Skelettprojekt zu erstellen und es zu sehen, wie es funktioniert. Um dies zu tun, navigieren Sie zuerst in Ihrer Eingabeaufforderung/Ihrem Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testwebsite und navigieren Sie in diesen.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Skelettwebsite namens "_mytestsite_" mit dem **django-admin** Tool erstellen, wie gezeigt. Nachdem Sie die Site erstellt haben, können Sie in den Ordner navigieren, in dem Sie das Hauptskript für die Projektverwaltung finden, das **manage.py** genannt wird.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem `runserver` Befehl ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht angewandte Migration(en)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Site sehen, die so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer installiert und eingerichtet.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und im Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und erstellen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnellanleitung zur Installation](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Komplette Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie man Django entfernt
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
