---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django gedacht ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen — unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel alles Notwendige bieten, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/einer Kommandozeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer lauffähig zu haben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie beginnen können, Webanwendungen zu entwickeln. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie für die Entwicklung und das Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Bearbeiten von Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Webbrowser zu testen.

Es gibt weitere Peripheriewerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linters zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist äußerst flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quelltext, aus dem Python Package Index (PyPi) und in vielen Fällen aus der Paketverwaltung des Host-Rechners installiert werden.
- Konfiguriert werden, um eine von mehreren Datenbanken zu verwenden, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder in separaten Python-Virtual-Umfeldern ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Auswahlmöglichkeiten. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten können, und diese Einrichtung wird im gesamten Rest dieses Moduls vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken die [relevanten Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf nahezu jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und unterstützt "offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo kann man Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python-Paket-Repository (PyPi) mit dem _pip_-Werkzeug. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus der Paketverwaltung Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die Paketversion möglicherweise ziemlich alt ist und nur in der System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Aus dem Quelltext installieren. Sie können die neueste Cutting-Edge-Version von Django aus dem Quelltext beziehen und installieren. Dies wird Anfängern nicht empfohlen, aber es ist notwendig, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django aus PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die PostgreSQL-, MariaDB-, MySQL-, Oracle- und SQLite-Datenbanken, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie dieselbe Datenbank sowohl für Produktion als auch Entwicklung auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es immer noch [potentielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist für den Einsatz als leichtgewichtige Datenbank gedacht und kann kein hohes Maß an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass es SQLite verwendet, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python Virtual Environment installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzelne globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Während Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können sich potenziell gegenseitig stören (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (mit der neuesten Version von Django) und gleichzeitig Websites pflegen möchten, die von älteren Versionen abhängen.

Daher führen erfahrene Python-/Django-Entwickler Python-Apps typischerweise in unabhängigen _Python-Virtual-Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-Virtual-Umgebungen!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen weiter unten, wie das geht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem installiert haben.
Sie benötigen auch das [Python Package Index](https://pypi.org/)-Werkzeug — _pip3_ — welches zum Verwalten (Installieren, Aktualisieren und Entfernen) von Python-Paketen/Bibliotheken verwendet wird, die von Django und Ihren anderen Python-Apps genutzt werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und neue Versionen bei Bedarf für Ubuntu Linux 20.04, macOS und Windows 10 installieren.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch aus dem eigenen Paketmanager des Betriebssystems oder auf andere Weise installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mit der geeigneten plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index Werkzeug (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal installieren mit:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen nicht die neueste Version von Python für dieses Tutorial verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist auf älteren Versionen enthalten).
Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Werkzeug) ganz einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie den stabilen Release der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Lokalisieren Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können die erfolgreiche Installation jetzt bestätigen, indem Sie `python3 -V` erneut ausführen und nach der Python-Versionsnummer suchen.

Sie können ähnlich überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es einfach (zusammen mit dem _pip3_-Werkzeug) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie den stabilen Release der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Achten Sie darauf, das Kästchen "Add Python to PATH" zu markieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer enthält _pip3_ (den Python-Paketmanager) standardmäßig.
Sie können die installierten Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Das Installationsprogramm sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Nachricht erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie das Installationsprogramm erneut ausführen, "Modify" auswählen und das Kästchen "Add Python to environment variables" auf der zweiten Seite markieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 (und nicht Python 2) installiert haben, können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine "Version 3"-Zeichenfolge, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie, um Version 3 zu verwenden, die Befehle mit `python3` und `pip3` unter Linux/macOS und `py -3` und `py -3 -m pip` unter Windows prefixen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die untenstehenden Anweisungen zeigen die plattformspezifischen Befehle, wie sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python Virtual Environment

Die Bibliotheken, die wir verwenden werden, um unsere virtuellen Umgebungen zu erstellen, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die wiederum beide das [virtualenv](https://virtualenv.pypa.io/en/latest/)-Werkzeug verwenden. Die Wrapper-Werkzeuge schaffen eine einheitliche Schnittstelle zur Verwaltung von Umgebungen auf allen Plattformen.

### Installation der Virtual Environment-Software

#### Ubuntu Virtual Environment-Einrichtung

Nach der Installation von Python und pip können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Sie können [die offizielle Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder den untenstehenden Anleitungen folgen.

Installieren Sie das Werkzeug mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese legen den Speicherort fest, an dem die virtuellen Umgebungen leben sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ bei Ihrem Test nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei durch Ausführen des folgenden Befehls im Terminal neu:

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

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

#### macOS Virtual Environment-Einrichtung

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau wie bei Ubuntu (auch hier können Sie die Anweisungen aus der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder den untenstehenden Anweisungen folgen).

Installieren Sie _virtualenvwrapper_ (und das Bündelungs- _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie bei Ubuntu).
Wenn Sie die _zsh-Shell_ verwenden, befindet sich die Startdatei in einer versteckten Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash-Shell_ verwenden, befindet sie sich in einer versteckten Datei namens **.bash_profile**. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ bei Ihrem Test nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Bei einem Installationstest auf macOS waren zum Beispiel die folgenden Zeilen in der Startdatei erforderlich:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei durch Ausführen des folgenden Befehls im Terminal neu:

```bash
source ~/.bash_profile
```

An diesem Punkt sehen Sie möglicherweise eine Reihe von Skripten, die ausgeführt werden (die gleichen Skripte wie bei der Ubuntu-Installation). Sie sollten nun in der Lage sein, eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden können, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle in etwa so aus:
>
> ```bash
> cd ~  # In mein Home-Verzeichnis navigieren
> ls -la #Den Inhalt des Verzeichnisses auflisten. Sie sollten .bash_profile sehen
> nano .bash_profile # Die Datei im Nano-Texteditor innerhalb des Terminals öffnen
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obenstehenden Zeilen hinein
> # Verwenden Sie Strg+X, um nano zu beenden, und wählen Sie Y, um die Datei zu speichern.
> ```

#### Windows Virtual Environment-Einrichtung

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als das Einrichten von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Werkzeug Informationen über virtuelle Umgebungen speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, dass die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (wir zeigen dies unten für Ubuntu, aber die letzte Zeile ist für Windows/macOS ähnlich).

```bash
mkvirtualenv my_django_environment
```

Sie sollten eine ähnliche Ausgabe wie die folgende sehen:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Sobald Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an in diesem Artikel (und in der Tat im Modul) nehmen Sie bitte an, dass alle Befehle innerhalb einer Python Virtual Environment wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur wenige andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Dokumentation des Werkzeugs, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden der aktuellen Python Virtual Environment.
- `workon` — Verfügbare virtuelle Umgebungen auflisten.
- `workon name_of_environment` — Die angegebene Python-Virtual-Umgebung aktivieren.
- `rmvirtualenv name_of_environment` — Die angegebene Umgebung entfernen.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

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
> In Windows werden _Python 3_-Skripte standardmäßig durch das Präfix `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3`-Modifikator zu weglassen, wenn Sie auf Probleme mit Befehlen stoßen.
> Unter Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcode-Verwaltung mit Git und GitHub

Quellcode-Verwaltungs- (SCM) und Versionierungstools ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn nötig.

Es gibt viele verschiedene SCM-Tools, einschließlich Git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/) hosten, einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, und das **git**-Werkzeug verwenden, um unseren Quellcode lokal zu verwalten und ihn bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine bewährte Praxis in der Softwareentwicklung!
> Diese Anleitungen bieten eine grundlegende Einführung in Git und GitHub.
> Um mehr zu erfahren, siehe [Lernen Sie Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repo") als obersten "Behälter" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf das besitzende Unternehmen oder Benutzerkonto beschränkt.

Alle Arbeiten werden auf einem bestimmten "Zweig" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie einen "Commit" erstellen, der alle Änderungen seit Ihrem letzten Commit an den aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig namens "main" erstellt. Sie können mit git andere Zweige davon abzweigen, die anfangs alle Commits des ursprünglichen Zweigs enthalten.
Sie können Zweige getrennt weiterentwickeln, indem Sie Commits hinzufügen, und dann später einen "Pull Request" (PR) auf GitHub verwenden, um Änderungen von einem Zweig in einen anderen zu zusammenzuführen.
Sie können auch mit git zwischen Zweigen auf Ihrem lokalen Computer wechseln, um zum Beispiel verschiedene Dinge auszuprobieren.

Zusätzlich zu den Zweigen ist es möglich, `Tags` auf jedem Zweig zu erstellen und diesen Zweig später an diesem Punkt wiederherzustellen.

### Erstellen eines Kontos und Repositories auf GitHub

Zuerst werden wir ein Konto auf GitHub erstellen (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir sie im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Werkzeugleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus.
   Obwohl diese nicht zwingend sind, werden sie dringend empfohlen.
   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library-Website in Django geschrieben".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar.
     > Denken Sie daran, keine Anmeldeinformationen oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Liste aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Liste aus.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Markieren Sie **Initialisieren Sie dieses Repository mit einem README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf den grünen **Code**-Button.
   Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Jetzt werden wir die Datei `.gitignore` auf dem lokalen Computer ändern, die Änderung commiten und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir es, um Ihnen zu zeigen, wie man Änderungen von GitHub herunterlädt, lokal Änderungen vornimmt und sie dann an GitHub überträgt.

1. In der Eingabeaufforderung/dem Terminal holen wir zuerst die neueste Version des Quellcodes von GitHub ab (fetch) und ziehen sie dann (pull), um sie in den aktuellen Zweig zu integrieren:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Das "origin" ist ein _Remote_, das den Standort des Repos repräsentiert, an dem sich der Quellcode befindet, und "main" ist der Zweig.
   Sie können überprüfen, ob "origin" unser Repo auf GitHub ist, indem Sie den Befehl: `git remote -v` verwenden.

2. Als Nächstes checken wir einen neuen Zweig aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen bestimmten Zweig als aktuellen Zweig auszuwählen, an dem Sie arbeiten.
   Das `-b`-Flag zeigt an, dass wir beabsichtigen, einen neuen Zweig mit dem Namen "update_gitignore" zu erstellen, anstatt einen vorhandenen Zweig mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen an das Ende und speichern Sie sie anschließend:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die von git nicht automatisch gesichert werden sollen, wie z.B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add`-Befehl, um alle geänderten Dateien (die von der **.gitignore**-Datei nicht ignoriert werden) in den "staging area" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit`en möchten, korrekt sind (Sie möchten Quellcodendateien einfügen, keine Binärdateien, temporäre Dateien etc.).
   Es sollte ähnlich der untenstehenden Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`en Sie die Dateien in Ihrem lokalen Repo, indem Sie das `-m`-Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht einer Signatur bei den Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Wir können den `update_gitignore`-Zweig mit dem folgenden Befehl an das "origin" Repo (GitHub) pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Es sollte ein Banner erscheinen, mit einem Button, den Sie drücken können, wenn Sie den von Ihnen gerade hochgeladenen Zweig "Vergleichen und pull requesten" möchten.
   Wählen Sie den Button aus und folgen Sie dann den Anweisungen, um einen Pull-Request zu erstellen und dann zusammenzuführen.

   ![Banner, das fragt, ob der Benutzer die neuesten Zweig-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main"-Zweig des Repos auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Zyklus von Hinzufügen/Committen/Pushen verwenden.

Im nächsten Thema verwenden wir dieses Repo, um unseren Quellcode der lokalen Bibliotheks-Website zu speichern.

## Andere Python-Werkzeuge

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Werkzeuge wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-kompatiblen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den von Django generierten Standarddateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, aber es macht nicht sehr viel Spaß. Ein interessanterer Test besteht darin, ein Skeleton-Projekt zu erstellen und es funktionsfähig zu sehen. Um dies zu tun, navigieren Sie zuerst in Ihrer Eingabeaufforderungs/Terminal zu der Stelle, an der Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie in diesen Ordner.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Skeletton-Website namens "_mytestsite_" mit dem **django-admin**-Werkzeug wie gezeigt erstellen. Nachdem Sie die Seite erstellt haben, können Sie in den Ordner navigieren, wo Sie das Hauptskript zur Verwaltung von Projekten, namens **manage.py**, finden.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem `runserver`-Befehl ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unapplied migration(s)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie die folgende URL in Ihrem lokalen Webbrowser aufrufen: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Django-Skelett-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet.

Im Abschnitt Testen haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel vertiefen wir diesen Prozess, indem wir eine einfache, aber vollständige Webanwendung erstellen.

## Siehe auch

- [Schneller Installationsleitfaden](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Kompletter Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [Wie man Django unter Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
