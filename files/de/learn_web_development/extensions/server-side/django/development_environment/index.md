---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 2e3661d1b4b277983b2dd9a935ba2648e8f8a9b9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Da Sie nun wissen, wofür Django geeignet ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das nötige Wissen vermitteln, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/der Befehlszeile und wie Sie Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Rechner lauffähig zu haben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Rechner so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und gibt einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows sowie deren Testmöglichkeiten.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie für die Entwicklung und das Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die wichtigsten Werkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, mit dem Sie lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers testen können.

Es gibt weitere Hilfswerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie [Texteditoren](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDEs zum Bearbeiten von Code, Lintern zur automatischen Formatierung usw. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Einrichtungsoptionen gibt es?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quelltext, aus dem Python Package Index (PyPi) und in vielen Fällen über das Paketverwaltungsprogramm des Hostcomputers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umgebung oder in separaten Python-Virtualumgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine etwas andere Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Möglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl an Betriebssystemen einrichten, und davon wird im Rest dieses Moduls ausgegangen.

> [!NOTE]
> Weitere Installationsoptionen sind in der offiziellen Django-Dokumentation beschrieben. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner betrieben werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen. Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Zielversion von Django unterstützt wird. Für Django 5.0 sind die zulässigen Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Version zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, an denen Sie Django herunterladen können:

- Das Python Package Repository (PyPi) unter Verwendung des _pip_-Tools. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Mit Betriebssystemen gebündelte Django-Distributionen bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version möglicherweise ziemlich alt ist und nur in der System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Aus dem Quelltext installieren. Sie können die neueste Vorabversion von Django aus dem Quelltext erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie Sie Django aus PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie sowohl für die Produktion als auch für die Entwicklung dieselbe Datenbank auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Objekt-Relationalen Mapper (ORM) abstrahiert, gibt es dennoch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und die meisten Module) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist für den Einsatz als leichte Datenbank gedacht und kann kein hohes Maß an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass es SQLite verwendet, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, weil es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python-Virtualumgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Obwohl Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können sich gegenseitig beeinträchtigen (d.h. wenn sie von verschiedenen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem darstellen, wenn Sie neue Websites erstellen möchten (unter Verwendung der neuesten Version von Django), während Sie gleichzeitig Websites warten, die auf älteren Versionen basieren.

Daher führen erfahrene Python/Django-Entwickler Python-Apps typischerweise in unabhängigen _Python-Virtualumgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt, dass Sie Python-Virtualumgebungen verwenden!

In diesem Modul wird angenommen, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Python 3 installieren

Um Django nutzen zu können, müssen Sie Python 3 auf Ihrem Betriebssystem installiert haben. Sie benötigen außerdem das [Python Package Index](https://pypi.org/)-Tool — _pip3_ —, das zur Verwaltung (Installation, Aktualisierung und Entfernung) von Python-Paketen/Bibliotheken verwendet wird, die von Django und Ihren anderen Python-Apps verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen für Ubuntu Linux 20.04, macOS und Windows 10 installieren.

> [!NOTE]
> Je nach Plattform können Sie möglicherweise auch Python/pip über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12. Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index Tool (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch nicht standardmäßig verfügbar. Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) wird. Sie benötigen nicht die neueste Python-Version für dieses Tutorial, aber wenn Sie möchten, gibt es Anweisungen im Internet.

### macOS

macOS beinhaltet standardmäßig nicht Python 3 (Python 2 ist in älteren Versionen enthalten). Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>.
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert. (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Befolgen Sie die Installationsanweisungen.

Sie können die erfolgreiche Installation nun bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können ähnlich überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows beinhaltet standardmäßig kein Python, aber Sie können es (zusammen mit dem _pip3_-Tool) ganz einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>.
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert. (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Achten Sie darauf, das Kästchen "Python zum Pfad hinzufügen" auszuwählen.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer umfasst _pip3_ (den Python-Paketmanager) standardmäßig. Sie können installierte Pakete wie gezeigt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert. Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen. Sie können dies tun, indem Sie den Installer erneut ausführen, "Ändern" auswählen und das Kästchen "Python zu Umgebungsvariablen hinzufügen" auf der zweiten Seite aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen. Wenn dies auf Ihrem System erlaubt ist, erhalten Sie einen "3"-Versionsstring, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung von Version 3 Befehle mit `python3` und `pip3` auf Linux/macOS und `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die untenstehenden Anweisungen zeigen die plattformspezifischen Befehle, wie sie auf den meisten Systemen funktionieren.

## Verwendung von Django in einer Python-Virtualumgebung

Die Bibliotheken, die wir zur Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Tool [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der virtuellen Umgebung

#### Einrichtung der virtuellen Umgebung auf Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), oder folgen Sie den Anweisungen unten.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (diese befindet sich in Ihrem Home-Verzeichnis als versteckte Datei mit dem Namen **.bashrc**). Diese legen den Speicherort fest, an dem die virtuellen Umgebungen gespeichert werden sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3 und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie prüfen, ob Python und das Skript an der erwarteten Stelle sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie eine Reihe von Skripten sehen, die wie unten gezeigt ausgeführt werden:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Nun können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

#### Einrichtung der virtuellen Umgebung auf macOS

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genau dasselbe wie auf Ubuntu (auch hier können Sie den Anweisungen entweder aus der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und Bündelung von _virtualenv_) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie für Ubuntu). Wenn Sie die _zsh shell_ verwenden, ist die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash shell_ verwenden, ist es eine versteckte Datei namens **.bash_profile**. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht vorhanden ist.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie prüfen, ob Python und das Skript an der erwarteten Stelle sind (und dann die Startdatei entsprechend ändern).
>
> In einem Installationstest auf macOS wurden die folgenden Zeilen im Startup-Datei als notwendig erachtet:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal aufrufen:

```bash
source ~/.bash_profile
```

An diesem Punkt können Sie möglicherweise eine Reihe von Skripten sehen, die ausgeführt werden (dieselben Skripte wie bei der Installation auf Ubuntu). Sie sollten jetzt in der Lage sein, eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei zum Bearbeiten im Finder nicht finden können, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle ungefähr so aus:
>
> ```bash
> cd ~  # Wechseln Sie zu Ihrem Home-Verzeichnis
> ls -la # Listen Sie den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im nano-Texteditor innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und fügen Sie die obigen Zeilen ein
> # Verwenden Sie Strg + X, um nano zu beenden, und wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist sogar noch einfacher als das Einrichten von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zu virtuellen Umgebungen speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen. Während dieses Befehls sehen Sie, wie die Umgebung eingerichtet wird (das, was Sie sehen, hängt leicht von der Plattform ab). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies daran erkennen, dass am Anfang der Eingabeaufforderung der Name der Umgebung in Klammern angezeigt wird (unten zeigen wir dies für Ubuntu, aber die finale Zeile ist auf Windows/macOS ähnlich).

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

Jetzt, da Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Ab diesem Zeitpunkt (und in der Tat in diesem Modul) wird davon ausgegangen, dass alle Befehle in einer Python-Virtualumgebung wie oben eingerichtet ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Werkzeugdokumentation, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden Sie die aktuelle Python-Virtualumgebung
- `workon` — Auflisten der verfügbaren virtuellen Umgebungen
- `workon name_of_environment` — Aktivieren Sie die angegebene Python-Virtualumgebung
- `rmvirtualenv name_of_environment` — Entfernen der angegebenen Umgebung.

## Django installieren

Sobald Sie eine virtuelle Umgebung erstellt haben und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies prüft nur, ob Python das Django-Modul finden kann):

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
> In Windows werden _Python 3_-Skripte standardmäßig durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer speziellen Installation variieren kann. Versuchen Sie, den `-3`-Modifikator wegzulassen, wenn Sie Probleme mit den Befehlen haben. In Linux/macOS ist der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie diesen Präfix durch: `py -3`

## Versionsverwaltung mit Git und GitHub

Versionsverwaltung (SCM) und Versionierungstools ermöglichen es Ihnen, zuverlässige Versionen Ihres Quellcodes zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekanntem guten Code" bei Bedarf zu teilen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab. Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Dienste zum Hosten von Quellcode, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraxis! Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub. Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Container" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält. Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf das Eigentümerkonto der Organisation oder des Benutzers beschränkt.

Alle Arbeiten werden an einem bestimmten "Zweig" des Codes in Ihrem Repo durchgeführt. Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit am aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig mit dem Namen "main" erstellt. Sie können mit git andere Zweige von diesem abspalten, die zunächst alle Commits des ursprünglichen Zweigs enthalten. Sie können Zweige separat weiterentwickeln, indem Sie Commits hinzufügen und später auf GitHub eine "Pull Request" (PR) verwenden, um Änderungen von einem Zweig in einen anderen zu übernehmen. Sie können auch git verwenden, um zwischen Zweigen auf Ihrem lokalen Rechner zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu den Zweigen ist es möglich, `Tags` auf jedem Zweig zu erstellen und diesen Zweig später zu diesem Punkt wiederherzustellen.

### Erstellen eines Kontos und Repositories auf GitHub

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos). Dann erstellen und konfigurieren wir ein Repository mit dem Namen "django_local_library" zum Speichern der [Lokalen Bibliotheks-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir sie im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus. Obwohl diese nicht verpflichtend sind, werden sie dringend empfohlen.

   - Geben Sie einen Repositorienamen ein: "django_local_library".
   - Geben Sie eine neue Repositorybeschreibung ein: "Lokale Bibliothekswebsite geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dadurch wird _der gesamte_ Quellcode sichtbar. Denken Sie daran, keine Anmeldedaten oder andere vertrauliche Materialien in Ihrem Repository zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der Auswahlkabine _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlkabine _Add license_. MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code**-Schaltfläche. Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" und kopieren Sie die URL. Wenn Sie den Repositorynamen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<Ihr_Git_Benutzer_ID>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Wechseln Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Ändern und synchronisieren von Änderungen

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung commiten und das Repository auf GitHub aktualisieren. Dies ist eine nützliche Änderung, hauptsächlich zeigen wir Ihnen jedoch, wie Sie Änderungen von GitHub abrufen, sie lokal vornehmen und dann an GitHub senden.

1. In der Eingabeaufforderung/Terminal erhalten wir zuerst die neuesten Quellversionen von GitHub und übernehmen sie dann in den aktuellen Zweig:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist. Generell sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _Remote_, das den Ort des Repos darstellt, an dem sich die Quelle befindet, und "main" ist der Zweig. Sie können überprüfen, dass "origin" unser Repo auf GitHub ist, indem Sie den Befehl verwenden: `git remote -v`.

2. Als Nächstes erstellen wir einen neuen Zweig, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einen bestimmten Zweig als aktuellen Arbeitszweig auszuwählen. Das `-b`-Flag zeigt an, dass wir die Absicht haben, einen neuen Zweig namens "update_gitignore" zu erstellen, anstatt einen bestehenden Zweig mit diesem Namen auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, kopieren Sie die folgenden Zeilen am Ende dieser und speichern Sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add`-Befehl, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien korrekt sind, die Sie `commit` bereitstellen werden (Sie möchten Quelltexte, keine Binärdateien, temporären Dateien usw. einschließen). Es sollte ungefähr so aussehen:

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, machen Sie ein `commit` an die Dateien im lokalen Repo, wobei das `-m`-Flag verwendet wird, um eine prägnante, aber klare Commit-Nachricht anzugeben. Dies entspricht der Unterzeichnung der Änderungen und der offiziellen Aufnahme in das lokale Repo.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repository nicht geändert. Wir können den Zweig `update_gitignore` an das "origin"-Repository (GitHub) mit folgendem Befehl senden:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repository erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte mit einer Schaltfläche erscheinen, die Sie drückt, wenn Sie den soeben hochgeladenen Zweig "Vergleichen und Pull Request" möchten. Wählen Sie die Schaltfläche und folgen Sie den Anweisungen, um ein Pull Request zu erstellen und dann zu mergen.

   ![Banner, das fragt, ob der Benutzer kürzlich aktualisierte Zweige vergleichen und mergen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen enthält der "main"-Zweig im Repository auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, wenn sich Dateien durch diesen Hinzufügs-/Commits-/Push-Zyklus ändern.

Im nächsten Thema verwenden wir dieses Repo, um unseren lokalbibliotheksquellen Code zu speichern.

## Weitere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-kompatiblen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den von Django generierten Standarddateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, macht aber nicht viel Spaß. Ein interessanterer Test besteht darin, ein Grundgerüstprojekt zu erstellen und zu sehen, wie es funktioniert. Gehen Sie dazu zunächst zu Ihrem Kommandozeile/Terminal, um den Ort zu bestimmen, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testsite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Grundgerüstsite namens "_mytestsite_" mit dem **django-admin**-Tool erstellen, wie gezeigt. Nach der Erstellung der Site können Sie in den Ordner navigieren, in dem sich das Hauptskript zur Verwaltung von Projekten befindet, namens **manage.py**.

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
> Sie können die Warnungen über "nicht angewendete Migration(en)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der grundlegenden Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet.

Im Abschnitt zum Testen haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie im Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und erstellen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Kurzanleitung zur Installation](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [So installieren Sie Django — Vollständige Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt wird
- [So installieren Sie Django auf Windows](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
