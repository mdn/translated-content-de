---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: e82295d471ebda705947d0e5752421df3f85ad43
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, wo Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — welches gängige Betriebssystem Sie auch immer verwenden, dieser Artikel sollte Ihnen das nötige Rüstzeug bieten, um mit der Entwicklung von Django-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/Befehlszeile und wie man Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zum Laufen bringen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsmöglichkeiten. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine lokale Installation von Django auf Ihrem Computer, die Sie zur Entwicklung und zum Testen von Django-Anwendungen verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bietet, sind eine Reihe von Python-Skripten zur Erstellung und Arbeit mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Computer-Webbrowser zu testen.

Es gibt andere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zur Bearbeitung von Code, Linters zur automatischen Formatierung, und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist extrem flexibel, was die Installation und Konfiguration betrifft. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Vom Quellcode, aus dem Python Package Index (PyPi) und in vielen Fällen aus der Paketmanager-Anwendung des Host-Computers installiert werden.
- Konfiguriert werden, um eine von mehreren Datenbanken zu verwenden, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- Im Haupt-Python-Systemumfeld oder innerhalb separater Python-Virtualenvironments ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. In den folgenden Unterabschnitten werden einige Ihrer Optionen erläutert. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im Rest dieses Moduls vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Nahezu jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo kann man Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi) mit dem _pip_-Tool. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version ziemlich alt sein kann und nur in das System-Python-Umfeld installiert werden kann (was möglicherweise nicht das ist, was Sie wollen).
- Installation aus dem Quellcode. Sie können die neueste brandneue Version von Django aus dem Quellcode erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist aber erforderlich, wenn Sie bereit sind, zum Django-Projekt beizutragen.

Dieser Artikel zeigt, wie man Django von PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die PostgreSQL-, MariaDB-, MySQL-, Oracle- und SQLite-Datenbanken, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dieselbe Datenbank sowohl für Produktion als auch für Entwicklung auszuwählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) werden wir die _SQLite_-Datenbank verwenden, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und kann eine hohe Anzahl von gleichzeitigen Zugangsanfragen nicht unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich lesend sind.

> [!NOTE]
> Django ist so konfiguriert, dass SQLite standardmäßig verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweite Installation oder in einer Python-Virtualenviroment?

Wenn Sie Python3 installieren, erhalten Sie ein einziges globales Umfeld, das für alle Python3-Codes gemeinsam ist. Während Sie in der Lage sind, beliebige Python-Pakete in das Umfeld zu installieren, können Sie zu einem Zeitpunkt nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In das globale Umfeld installierte Python-Anwendungen können möglicherweise miteinander in Konflikt geraten (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in das Standard-/globale Umfeld installieren, können Sie auf dem Computer nur eine Version von Django ansprechen. Das kann ein Problem sein, wenn Sie neue Websites erstellen möchten (unter Verwendung der neuesten Version von Django), während Sie immer noch Websites pflegen, die von älteren Versionen abhängen.

Infolgedessen führen erfahrene Python-/DJango-Entwickler Python-Anwendungen in unabhängigen _Python-Virtualenviroments_ aus. Dies ermöglicht mehrere unterschiedliche Django-Umgebungen auf einem einzelnen Computer. Das Django-Entwickler-Team selbst empfiehlt die Verwendung von Python-Virtualenviroments!

Dieses Modul geht davon aus, dass Sie Django in einer Virtualenviroment installiert haben, und wir zeigen Ihnen unten, wie.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben. Sie benötigen auch das [Python Package Index](https://pypi.org/)-Tool — _pip3_ — welches verwendet wird, um die von Django und anderen Python-Anwendungen verwendeten Python-Pakete/Bibliotheken zu verwalten (installieren, aktualisieren und entfernen).

In diesem Abschnitt wird kurz erklärt, wie Sie prüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren können, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie eventuell auch Python/pip über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die benötigten Installationsdateien unter <https://www.python.org/downloads/> herunterladen und sie mithilfe der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Dies können Sie bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Allerdings ist das Python Package Index-Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste von [Django 5.0 unterstützte Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ für diese Anleitung nicht die neueste Version von Python verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist auf älteren Versionen enthalten).
Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was anzeigt, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der jüngsten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt der Erstellung ist dies Python 3.11.8).

2. Suchen Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch prüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der jüngsten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt der Erstellung ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Achten Sie darauf, das Kästchen "Python zu PATH hinzufügen" zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer enthält standardmäßig _pip3_ (den Python-Paketmanager).
Sie können installierte Pakete wie folgt anzeigen:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Sollten Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und das Kästchen "Python zu Umgebungsvariablen hinzufügen" auf der zweiten Seite auswählen.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` normalerweise verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie einen "3" Versionsstring, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie, um Version 3 zu verwenden, die Befehle mit `python3` und `pip3` auf Linux/macOS und `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die plattformabhängigen Befehle, wie sie auf den meisten Systemen funktionieren.

## Verwendung von Django in einer Python-Virtualenviroment

Die Bibliotheken, die wir für die Erstellung unserer Virtualenvironments verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das [virtualenv](https://virtualenv.pypa.io/en/latest/) Tool verwenden. Die Wrapper-Tools schaffen eine konsistente Oberfläche zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Software für Virtualenviroment

#### Einrichtung des Virtualenviroments auf Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Sie können den [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder die folgenden Anweisungen befolgen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei mit dem Namen **.bashrc** in Ihrem Heimatverzeichnis). Diese legen den Speicherort der Virtualenviroments, der Entwicklungsprojekt-Direktoren und des mit diesem Paket installierten Skripts fest:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Standort des Skripts `virtualenvwrapper.sh`. Wenn das _virtualenv_ bei einem Test nicht funktioniert, ist eine der Dinge, die man überprüfen sollte, ob sich Python und das Skript an den erwarteten Standorten befinden (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

Zu diesem Zeitpunkt sollten eine Reihe von Skripten ausgeführt werden, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualenviroment erstellen.

#### Einrichtung des Virtualenviroments auf macOS

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast identisch wie auf Ubuntu (auch hier können Sie den Anweisungen im [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das im Bundle _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, ist die Startdatei eine versteckte Datei mit dem Namen **.zshrc** in Ihrem Heimatverzeichnis. Wenn Sie die _bash shell_ verwenden, ist sie eine versteckte Datei mit dem Namen **.bash_profile**. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen SonySkripttestandort. Wenn das _virtualenv_ bei einem Test nicht funktioniert, sollte überprüft werden, ob sich Python und das Skript an den erwarteten Standorten befinden (und dann die Startdatei entsprechend ändern).
>
> Zum Beispiel endete ein Installationstest auf macOS damit, dass die folgenden Zeilen in der Startdatei notwendig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

Zu diesem Zeitpunkt sollten eine Reihe von Skripten ausgeführt werden (die gleichen Skripte wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue Virtualenviroment zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden können, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, aussehen die Befehle ungefähr so:
>
> ```bash
> cd ~  # Zum Heimatverzeichnis navigieren
> ls -la #Inhalte des Verzeichnisses anzeigen. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen der Datei im nano Texteditor innerhalb des Terminals
> # Scrollen Sie bis zum Ende der Datei und fügen Sie die oben genannten Zeilen ein
> # Verwenden Sie Strg+X, um nano zu verlassen, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung des Virtualenviroments auf Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur Virtualenviroment speichert (es gibt einen Standardwert). Sie müssen lediglich den folgenden Befehl in der Eingabeaufforderung ausführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualeviroment erstellen.

### Erstellen eines Virtualenviroments

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit Virtualeviroments auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualenviroment erstellen. Während dieser Befehl ausgeführt wird, werden Sie sehen, wie das Umfeld eingerichtet wird (was Sie sehen, ist leicht abhängig von der Plattform). Wenn der Befehl abgeschlossen ist, wird das neue Virtualenviroment aktiv sein — Sie können dies daran erkennen, dass am Anfang der Eingabeaufforderung der Name des Umfelds in Klammern steht (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Jetzt befinden Sie sich innerhalb des Virtualeviroments, können Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an in diesem Artikel (und in diesem Modul) sollten Sie davon ausgehen, dass alle Befehle innerhalb eines Python-Virtualnvornments wie das oben eingerichtete ausgeführt werden.

### Verwendung eines Virtualenviroments

Es gibt nur einige nützliche Befehle, die Sie kennen sollten (es gibt mehr in den Tool-Dokumentationen, aber dies sind die Befehle, die Sie regelmäßig verwenden werden):

- `deactivate` — das aktuelle Python-Virtualenviroment verlassen
- `workon` — verfügbare Virtualeviroments auflisten
- `workon name_of_environment` — das angegebene Python-Virtualenviroment aktivieren
- `rmvirtualenv name_of_environment` — das angegebene Umfeld entfernen.

## Installation von Django

Sobald Sie ein Virtualenviroment erstellt und `workon` aufgerufen haben, um es zu aktivieren, können Sie _pip3_ verwenden, um Django zu installieren.

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
> Wenn der obige Windows-Befehl kein Django-Modul anzeigt, versuchen Sie es mit:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_ Skripte werden durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3` Modifikator zu weglassen, wenn Sie bei Befehlen auf Probleme stoßen.
> Unter Linux/macOS ist der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufruf von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Versionsverwaltung mit Git und GitHub

Versionsverwaltung (SCM) und Tools zur Versionsverwaltung ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Experimenten und "bekannt gutem Code" zu teilen, wenn Sie es brauchen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab.
Für diese Anleitung hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hostingdienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Praxis bei der Softwareentwicklung!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Lernen Sie git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Eimer" zur Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, womit der Code für jeden im Internet sichtbar ist, oder privat, womit sie auf die inhabende Organisation oder das Benutzerkonto eingeschränkt sind.

Alle Arbeiten werden auf einem bestimmten "Zweig" des Codes in Ihrem Repo erledigt.
Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit an dem aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig namens "main" erstellt. Sie können mit git andere Zweige von diesem abzweigen, die anfänglich alle Commitments des ursprünglichen Zweigs haben.
Sie können Zweige separat weiterentwickeln, indem Sie Commitments hinzufügen und später eine Zusammenführungsanforderung (Pull Request, PR) in GitHub verwenden, um Änderungen von einem Zweig in einen anderen zu übernehmen.
Sie können git auch verwenden, um zwischen Zweigen auf Ihrem lokalen Computer zu wechseln, zum Beispiel um verschiedene Dinge auszuprobieren.

Zusätzlich zu den Zweigen ist es möglich, `tags` auf einem beliebigen Zweig zu erstellen und diesen Zweig später an diesem Punkt wiederherzustellen.

### Ein Konto und ein Repository auf GitHub erstellen

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Local library website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir es im Rest dieser Anleitung entwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository** aus.
3. Füllen Sie alle Felder in diesem Formular aus.
   Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.
   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliotheks-Website geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (die Standardeinstellung).

     > [!WARNING]
     > Dies macht _alle_ Quellcode sichtbar.
     > Denken Sie daran, dass Sie keine Anmeldedaten oder andere vertrauliche Materialien in Ihrem Repo speichern sollten, es sei denn, es ist privat.

   - Wählen Sie **Python** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Add license_.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialisieren Sie dieses Repository mit einer README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code**-Schaltfläche.
   Wählen Sie im Abschnitt "Clone" die Registerkarte "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<Ihr_Git_Benutzername>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
3. Öffnen Sie eine Eingabeaufforderung/ein Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Navigieren Sie in den Ordner des Repos.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer bearbeiten, die Änderung comitten und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir sie, um zu zeigen, wie man Änderungen von GitHub holt, lokal Änderungen vornimmt und sie dann auf GitHub pusht.

1. In der Eingabeaufforderung/im Terminal holen wir uns zuerst die aktuelle Version des Codes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir die Quelle gerade geklont haben und wissen, dass sie aktuell ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Das "origin" ist ein _Remote_, der den Standort des Repos repräsentiert, an dem sich die Quelle befindet, und "main" ist der Zweig.
   Sie können mit dem Befehl `git remote -v` überprüfen, dass origin unser Repo auf GitHub ist.

2. Als Nächstes checken wir einen neuen Zweig aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen Zweig auszuwählen, der der aktuelle Zweig sein soll, an dem Sie arbeiten.
   Das `-b`-Flag gibt an, dass wir beabsichtigen, einen neuen Zweig mit dem Namen "update_gitignore" statt eines vorhandenen Zweigs mit diesem Namen zu erstellen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen am Ende hinein und speichern Sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die von git nicht automatisch gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der Datei **.gitignore** ignoriert werden) zum "Stagingbereich" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu prüfen, dass alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten, dass Quellcode-Dateien enthalten sind, keine Binärdateien, temporäre Dateien usw.).
   Es sollte ungefähr so aussehen wie die untenstehende Liste.

   ```bash
   git status
   ```

   ```plain
   On branch update_gitignore
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `committen` Sie die Dateien in Ihr lokales Repo und verwenden das `-m`-Flag, um eine prägnante, aber klare Commit-Meldung anzugeben.
   Dies entspricht dem Abzeichnen auf den Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das entfernte Repo nicht geändert.
   Wir können den `update_gitignore`-Zweig zum "origin"-Repo (GitHub) mit dem folgenden Befehl pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte mit einer Schaltfläche erscheinen, auf die Sie klicken können, um den soeben hochgeladenen Zweig auf "Compare and pull request" zu vergleichen und zu bearbeiten.
   Wählen Sie die Schaltfläche aus und befolgen Sie dann die Anweisungen, um eine Pull-Anfrage zu erstellen und dann zusammenzuführen.

   ![Banner, das fragt, ob der Benutzer den kürzlich aktualisierten Zweig vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main"-Zweig im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, wenn sich Dateien ändern, durch diese Hinzufügen/Commiten/Pushen-Schleife.

Im nächsten Thema verwenden wir dieses Repo, um unseren Quellcode für die lokale Bibliothekswebsite zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linters (die dabei helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den Standarddateien melden, die für Django generiert werden.

## Testen Ihrer Installation

Der obige Test funktioniert, aber er macht nicht viel Spaß. Ein interessanterer Test besteht darin, ein Skelettprojekt zu erstellen und es in Aktion zu sehen. Dazu navigieren Sie zuerst in Ihrer Eingabeaufforderung/Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testsite und navigieren Sie in diesen.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Skelettsite namens "_mytestsite_" mit dem **django-admin**-Tool erstellen, wie gezeigt. Nach dem Erstellen der Site können Sie in den Ordner navigieren, wo Sie das Hauptskript für die Projektverwaltung mit dem Namen **manage.py** finden.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ innerhalb dieses Ordner mit **manage.py** und dem `runserver`-Befehl ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen zu den "nicht angewendeten Migrationen" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie die folgende URL in Ihrem lokalen Webbrowser öffnen: `http://127.0.0.1:8000/`. Sie sollten eine Site sehen, die so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und zum Laufen gebracht.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie im Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess, indem wir eine einfache, aber vollständige Webanwendung erstellen.

## Siehe auch

- [Schnelle Installationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Django installieren - Vollständige Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [Django unter Windows installieren](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
