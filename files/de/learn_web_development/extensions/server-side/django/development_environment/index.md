---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 309332432613c28978128146179e29d27a91249d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können — unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Sie dieser Artikel in die Lage versetzen, mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse in der Verwendung eines Terminals/Befehlszeile und wie man Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) soll auf Ihrem Computer laufen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, den eigenen Computer so einzurichten, dass man mit der Entwicklung von Webanwendungen beginnen kann. Dieser Abschnitt erklärt, was Sie von der Entwicklungsumgebung erwarten können, und gibt einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsmöglichkeiten. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zum Entwickeln und Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers zu testen.

Es gibt andere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linters zur automatischen Formatierung usw. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Einrichtungsoptionen gibt es?

Django ist äußerst flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus der Quelle, aus dem Python Package Index (PyPi) und in vielen Fällen über das Paketmanager-Anwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-virtueller Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Abschnitte erklären einige Ihrer Optionen. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im gesamten restlichen Modul vorausgesetzt.

> [!NOTE]
> Weitere mögliche Installationsoptionen sind in der offiziellen Django-Dokumentation beschrieben. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf nahezu jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Nahezu jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ: Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Version zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python-Paketarchiv (PyPi) mit dem _pip_-Werkzeug. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Eine Version des Paketmanagers Ihres Computers verwenden. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version recht alt sein kann und nur im System-Python-Umfeld installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Von der Quelle installieren. Sie können die neueste, hochaktuelle Version von Django aus der Quelle erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt Ihnen, wie Sie Django aus PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützungsstufen für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dieselbe Datenbank sowohl für die Produktion als auch für die Entwicklung auszuwählen (obwohl Django viele der Datenbankunterschiede mit seinem objekt-relationalen Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und kann keinen hohen Grad an Parallelität unterstützen. Sie ist jedoch eine hervorragende Wahl für Anwendungen, die hauptsächlich schreibgeschützter Natur sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, weil keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Systemweit oder in einer virtuellen Python-Umgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes geteilt wird. Während Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können möglicherweise miteinander in Konflikt geraten (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django verwenden. Dies kann ein Problem darstellen, wenn Sie neue Websites erstellen möchten (die mit der neuesten Version von Django erstellt wurden), während Sie immer noch Websites warten, die auf älteren Versionen basieren.

Daher führen erfahrene Python/Django-Entwickler Python-Anwendungen typischerweise in unabhängigen _Python-virtuellen Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-virtuellen Umgebungen!

In diesem Modul gehen wir davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen, wie das funktioniert.

## Python 3 installieren

Um Django zu verwenden, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das Werkzeug [Python Package Index](https://pypi.org/) — _pip3_ —, das verwendet wird, um Python-Pakete/-Bibliotheken zu verwalten (installieren, aktualisieren und entfernen), die von Django und Ihren anderen Python-Apps verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Versionen von Python vorhanden sind, und neue Versionen bei Bedarf installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Je nach Plattform können Sie möglicherweise Python/pip auch aus dem Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und über die entsprechende plattformspezifische Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält von Haus aus Python 3.10.12.
Sie können dies durch Ausführen des folgenden Befehls im Bash-Terminal bestätigen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index-Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal installieren, indem Sie:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ die neueste Version von Python für dieses Tutorial nicht verwenden, aber wenn Sie dies möchten, gibt es dafür Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist in älteren Versionen enthalten).
Sie können dies durch Ausführen des folgenden Befehls im Terminal bestätigen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was bedeutet, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können ganz einfach Python 3 (zusammen mit dem _pip3_-Werkzeug) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Befolgen Sie die Installationsanweisungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es ganz einfach (zusammen mit dem _pip3_-Werkzeug) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Stellen Sie sicher, dass Sie das Kästchen mit der Aufschrift "Add Python to PATH" aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer enthält standardmäßig _pip3_ (den Python-Paketmanager).
Sie können die installierten Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Das Installationsprogramm sollte alles einrichten, was Sie für den obigen Befehl benötigen.
> Falls Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es in Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie das Installationsprogramm erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kästchen "Add Python to environment variables" aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten auf verschiedenen Betriebssystemen unterschiedliche Befehle verwendet haben, um Python 3 und pip auszuführen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können allgemein die grundlegenden Befehle `python` und `pip` verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Zeichenfolge der Version "3", wenn Sie `-V` mit den grundlegenden Befehlen ausführen, wie dargestellt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie Befehle mit `python3` und `pip3` auf Linux/macOS und `py -3` und `py -3 -m pip` auf Windows voranstellen, um Version 3 zu verwenden:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die plattformspezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer virtuellen Python-Umgebung

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Werkzeug [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools schaffen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der virtuellen Umgebung

#### Einrichtung der virtuellen Umgebung unter Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ installieren (das _virtualenv_ enthält). Sie können die [offizielle Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder den Anweisungen unten folgen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese geben den Speicherort an, an dem die virtuellen Umgebungen leben sollen, die Speicherorte Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript an den erwarteten Orten sind (und dann entsprechend die Startdatei ändern).
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

Zu diesem Zeitpunkt sollten Sie sehen, dass eine Reihe von Skripten ausgeführt wird, wie unten gezeigt:

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

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genau dasselbe wie auf Ubuntu (wiederum können Sie den Anweisungen aus entweder der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das inbegriffene _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, wird die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, wird sie eine versteckte Datei namens **.bash_profile** sein. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript an den erwarteten Orten sind (und dann entsprechend die Startdatei ändern).
>
> Bei einer Installation auf macOS waren beispielsweise die folgenden Zeilen in der Startdatei erforderlich:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Aufruf im Terminal vornehmen:

```bash
source ~/.bash_profile
```

An diesem Punkt sehen Sie möglicherweise eine Reihe von Skripten, die ausgeführt werden (dieselben wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden können, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Home-Verzeichnis
> ls -la # Listen Sie den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im nano-Texteditor, innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die oben genannten Zeilen hinein
> # Verwenden Sie Strg+X, um nano zu verlassen, und wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als das Einrichten von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ähnelt die Arbeit mit virtuellen Umgebungen auf allen Plattformen.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen. Während dieser Befehl läuft, sehen Sie, dass die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformabhängig). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies daran sehen, dass der Beginn der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

```bash
mkvirtualenv my_django_environment
```

Sie sollten eine Ausgabe sehen, die etwa wie folgt aussieht:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Jetzt, wo Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an wird in diesem Artikel (und tatsächlich im Modul) angenommen, dass alle Befehle innerhalb einer Python-virtuellen Umgebung wie der oben eingerichteten ausgeführt werden.

### Nutzung einer virtuellen Umgebung

Es gibt nur einige andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber das sind diejenigen, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden Sie die aktuelle Python-virtuelle Umgebung
- `workon` — Listet verfügbare virtuelle Umgebungen auf
- `workon name_of_environment` — Aktiviert die angegebene Python-virtuelle Umgebung
- `rmvirtualenv name_of_environment` — Entfernt die angegebene Umgebung.

## Django installieren

Sobald Sie eine virtuelle Umgebung erstellt haben und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

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
> Wenn der obige Windows-Befehl kein django-Modul anzeigt, versuchen Sie es mit:
>
> ```bash
> py -m django --version
> ```
>
> In Windows werden _Python 3_-Skripte ausgeführt, indem der Befehl mit `py -3` vorangestellt wird, obwohl dies je nach spezifischer Installation variieren kann.
> Versuchen Sie, den `-3`-Modifier wegzulassen, wenn Sie Probleme mit der Ausführung von Befehlen haben.
> Unter Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie an _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Quellcode-Verwaltungs- (SCM) und Versionierungswerkzeuge ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Experimenten und "bekannt guter" Code auszutauschen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, einschließlich git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und SCM-Hosting-Quellen in der Cloud wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der bekanntesten cloudbasierten Quellcode-Hosting-Dienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und bei Bedarf nach GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungs-Praxis!
> Diese Anleitungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Wichtige Konzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Bucket" für die Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in welchem Fall der Code für jeden im Internet sichtbar ist, oder privat, in welchem Fall sie auf das. Die Arbeit erfolgt vollständig auf einem bestimmten "Branch" des Codes in Ihrem Repo.
Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit in den aktuellen Zweig speichert.

Das Repository wird mit einem standardmäßigen Branch namens "main" erstellt. Sie können andere Zweige mit git daraus erstellen, die zunächst alle Commits des Original-Zweigs haben.
Sie können Zweige separat durch Hinzufügen von Commits weiterentwickeln und dann später mit einem "Pull Request" (PR) auf GitHub Änderungen von einem Zweig in einen anderen zusammenführen.
Sie können auch mit git zwischen Zweigen auf Ihrem lokalen Computer wechseln, zum Beispiel um verschiedene Dinge auszuprobieren.

Zusätzlich zu Zweigen ist es möglich, `tags` auf jedem Zweig zu erstellen und diesen später an dieser Stelle wiederherzustellen.

### Erstellen eines Kontos und eines Repos auf GitHub

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Anschließend erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Lokale Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir sie im restlichen Teil dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Toolbar und wählen **New repository**.
3. Füllen Sie alle Felder in diesem Formular aus.
   Obwohl sie nicht zwingend erforderlich sind, werden sie dringend empfohlen.
   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliothek-Website in Django geschrieben".
   - Wählen Sie "Public" für das Repository (Standard).

     > [!WARNING]
     > Dies macht den _gesamten_ Quellcode sichtbar.
     > Denken Sie daran, keine Anmeldeinformationen oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Auswahlliste.
     MDN verwendet für dieses Beispiel "Creative Commons Zero v1.0 Universal".
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Auf GitHub klicken Sie auf den grünen **Code**-Button.
   Wählen Sie im Bereich "Clone" die Registerkarte "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repositories-Namen "django_local_library" verwendet haben, sollte die URL ungefähr so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo, indem Sie die oben kopierte URL verwenden:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Ändern und synchronisieren von Änderungen

Jetzt werden wir die Datei `.gitignore` auf dem lokalen Computer ändern, die Änderung committen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber wir machen es hauptsächlich, um Ihnen zu zeigen, wie Sie Änderungen von GitHub abrufen, lokal ändern und dann zu GitHub pushen.

1. In der Eingabeaufforderung/im Terminal "holen" (fetch) und "ziehen" (pull) wir zunächst die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _Remote_, der den Speicherort des Repositories repräsentiert, an dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl ausführen: `git remote -v`.

2. Als Nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einige Branches auszuwählen, die der aktuelle Branch sind, an dem Sie arbeiten.
   Das `-b`-Flag gibt an, dass wir beabsichtigen, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, kopieren Sie die folgenden Zeilen am Ende und speichern Sie dann:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der Datei **.gitignore** ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch einzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien einfügen, keine Binärdaten, temporären Dateien usw.).
   Es sollte ein wenig wie die untenstehende Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien in Ihr lokales Repo und verwenden dabei das `-m`-Flag, um eine kurze, aber klare Commit-Nachricht anzugeben.
   Dies entspricht der Bestätigung der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. An diesem Punkt wurde das Remote-Repo nicht geändert.
   Wir können den Branch `update_gitignore` mithilfe des folgenden Befehls auf das "origin"-Repo (GitHub) pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einem Button, den Sie drücken können, wenn Sie den kürzlich hochgeladenen Branch "Compare and pull request" möchten.
   Wählen Sie den Button und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und diese dann zu mergen.

   ![Banner, der fragt, ob der Benutzer den kürzlich aktualisierten Branch vergleichen und mergen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen enthält der "main"-Branch im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können weiterhin Ihr lokales Repo aktualisieren, während sich Dateien ändern, indem Sie diesen Zyklus von hinzufügen/commit/push verwenden.

Im nächsten Thema verwenden wir dieses Repo, um unseren Quellcode der lokalen Bibliothek-Website zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-fähigen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige allgemeine Python-Linters (wie `pylint`) Fehler in den von Django standardmäßig generierten Dateien fälschlicherweise als Fehler berichten.

## Testen Ihrer Installation

Der obige Test funktioniert, aber er macht nicht viel Spaß. Ein interessanterer Test ist es, ein Grundgerüst für ein Projekt zu erstellen und es zum Laufen zu bringen. Um dies zu tun, navigieren Sie zuerst in Ihrer Eingabeaufforderung/Ihrem Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testsite und navigieren Sie in diesen hinein.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Grundgerüst-Site namens "_mytestsite_" mit dem Tool **django-admin** erstellen, wie gezeigt. Nachdem Sie die Site erstellt haben, können Sie in den Ordner navigieren, in dem sich das Hauptskript zur Verwaltung von Projekten befindet, das **manage.py** genannt wird.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ innerhalb dieses Ordners mit **manage.py** und dem Befehl `runserver` ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht durchgeführte Migrationsvorgänge" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Django-Skelett-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und zum Laufen gebracht.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen können und diese in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und erstellen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnelle Installationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Anleitung zur vollständigen Installation von Django](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — deckt auch ab, wie Django entfernt wird
- [Wie man Django unter Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
