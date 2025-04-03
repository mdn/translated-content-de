---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichten der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Nun, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können – unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das nötige Wissen vermitteln, um mit der Entwicklung von Django-Apps beginnen zu können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse im Umgang mit einem Terminal oder einer Kommandozeile und darüber, wie Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zu betreiben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. In diesem Abschnitt wird erklärt, was Sie mit der Entwicklungsumgebung erhalten, und es wird ein Überblick über einige Ihrer Setup- und Konfigurationsoptionen gegeben. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie verwenden können, um Django-Apps zu entwickeln und zu testen, bevor Sie diese in einer Produktivumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bietet, sind eine Reihe von Python-Skripten zur Erstellung und Bearbeitung von Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Webbrowser zu testen.

Es gibt andere zusätzliche Tools, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zur Bearbeitung des Codes, Linter zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist äußerst flexibel in Bezug auf die Installation und Konfiguration. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, über den Python Package Index (PyPi) und in vielen Fällen über den Paketmanager des Hostcomputers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem der Python-Umgebung oder in separaten Python-Virtual-Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration. Die folgenden Unterabschnitte erklären einige Ihrer Möglichkeiten. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer begrenzten Anzahl von Betriebssystemen einrichten, und dieses Setup wird im gesamten Rest dieses Moduls vorausgesetzt.

> [!NOTE]
> Weitere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner betrieben werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die erforderliche Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel bieten wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und „offiziell unterstützt“) die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo kann man Django herunterladen?

Es gibt drei Orte, an denen Sie Django herunterladen können:

- Das Python-Package-Repository (PyPi), mit dem _pip_-Tool. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise recht alt ist und nur in die System-Python-Umgebung installiert werden kann (was nicht das ist, was Sie möchten).
- Installation aus dem Quellcode. Sie können die neueste, bahnbrechende Version von Django aus dem Quelltext beziehen und installieren. Dies wird für Anfänger nicht empfohlen, aber notwendig, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie Sie Django von PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie für Produktion und Entwicklung dieselbe Datenbank auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichte Datenbank gedacht und kann keinen hohen Grad an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich nur-lesend sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl für den Einstieg, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Systemweit oder in einer Python-Virtual-Umgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Während Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In der globalen Umgebung installierte Python-Anwendungen können potenziell miteinander in Konflikt stehen (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (unter Verwendung der neuesten Version von Django), während Sie weiterhin Websites warten, die auf älteren Versionen basieren.

Daher führen erfahrene Python-/Django-Entwickler Python-Apps in unabhängigen _Python-Virtual-Environment_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt die Verwendung von Python-Virtual-Environment!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen dies weiter unten.

## Installation von Python 3

Um Django zu verwenden, muss Python 3 auf Ihrem Betriebssystem installiert sein.
Sie benötigen auch das [Python Package Index](https://pypi.org/)-Tool — _pip3_ — mit dem Python-Pakete/-Bibliotheken verwaltet werden, die von Django und Ihren anderen Python-Apps verwendet werden (installieren, aktualisieren und entfernen).

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Je nach Plattform können Sie Python/pip möglicherweise auch aus dem eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit dem entsprechenden plattformspezifischen Verfahren installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies überprüfen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das für die Installation von Paketen für Python 3 (einschließlich Django) erforderliche Python-Package-Index-Tool (_pip3_) ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal installieren, indem Sie:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen in diesem Tutorial nicht die neueste Version von Python verwenden, aber wenn Sie möchten, gibt es im Internet Anweisungen dafür.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist auf älteren Versionen enthalten).
Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Lokalisieren Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Jetzt können Sie die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können ähnlich überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es leicht zusammen mit dem _pip3_-Tool von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Stellen Sie sicher, dass das Kästchen „Add Python to PATH“ aktiviert ist.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert _pip3_ (den Python-Paket-Manager) standardmäßig.
Sie können die installierten Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, „Modify“ auswählen und das Kästchen „Add Python to environment variables“ auf der zweiten Seite aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten verschiedene Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 (und nicht Python 2) installiert haben, können die bloßen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem zu laufen.
Wenn dies auf Ihrem System zulässig ist, erhalten Sie eine „3“-Zeichenfolge, wenn Sie `-V` mit den bloßen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie der Befehle mit `python3` und `pip3` auf Linux/macOS, und `py -3` und `py -3 -m pip` auf Windows voranstellen, um Version 3 zu verwenden:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die unten stehenden Anweisungen zeigen die plattformspezifischen Befehle, wie sie auf den meisten Systemen funktionieren.

## Verwendung von Django in einer Python-Virtual-Umgebung

Die Bibliotheken, die wir zur Erstellung unserer Virtual-Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide wiederum das [virtualenv](https://virtualenv.pypa.io/en/latest/) Tool verwenden. Die Wrapper-Tools sorgen für eine einheitliche Schnittstelle für das Management von Umgebungen auf allen Plattformen.

### Installation der Virtual-Environment-Software

#### Einrichtung der virtuellen Ubuntu-Umgebung

Nach der Installation von Python und pip können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), oder folgen Sie den unten stehenden Anweisungen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese zeigen den Speicherort, an dem die virtuellen Umgebungen leben sollten, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts an:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn der _virtualenv_ bei einem Test nicht funktioniert, sollte geprüft werden, ob Python und das Skript am erwarteten Ort vorhanden sind (und dann die Startdatei entsprechend anpassen).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie eine Menge ausgeführter Skripte sehen, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### Einrichtung der virtuellen macOS-Umgebung

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast identisch mit dem auf Ubuntu (auch hier können Sie entweder den Anweisungen aus der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder den untenstehenden folgen).

Installieren Sie _virtualenvwrapper_ (und das gebündelte _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie bei Ubuntu).
Wenn Sie die _zsh-Shell_ verwenden, ist die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash-Shell_ benutzen, ist es eine versteckte Datei namens **.bash_profile**. Möglicherweise müssen Sie die Datei anlegen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn der _virtualenv_ bei einem Test nicht funktioniert, ist zu überprüfen, ob Python und das Skript am erwarteten Ort vorhanden sind (und dann die Startdatei entsprechend anpassen).
>
> Ein Installationstest auf macOS endete zum Beispiel mit den folgenden, notwendigen Zeilen in der Startdatei:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie folgenden Aufruf im Terminal machen:

```bash
source ~/.bash_profile
```

An diesem Punkt sollten Sie eine Reihe von Skripten sehen, die ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Jetzt sollten Sie in der Lage sein, eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden, können Sie diese auch im Terminal mit Nano öffnen.
>
> Angenommen, Sie verwenden Bash, sehen die Befehle etwa so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu Ihrem Home-Verzeichnis
> ls -la # Liste die Inhalte des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im Nano-Texteditor, innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obenstehenden Zeilen hinein
> # Mit Strg+X verlassen Sie Nano, wählen Sie Y um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Windows-Umgebung

Das Installieren von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist sogar noch einfacher als das Einrichten von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool die Informationen zur virtuellen Umgebung speichert (dies gibt es einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen ziemlich ähnlich.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Jetzt, da Sie sich innerhalb der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von jetzt an in diesem Artikel (und in der Tat im Modul), nehmen Sie bitte an, dass alle Befehle innerhalb einer Python-Virtual-Umgebung ablaufen, wie wir sie oben eingerichtet haben.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar weitere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber das sind diejenigen, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlassen Sie die aktuelle Python-Virtual-Umgebung
- `workon` — Listet verfügbare virtuelle Umgebungen auf
- `workon name_of_environment` — Aktiviert die angegebene Python-Virtual-Umgebung
- `rmvirtualenv name_of_environment` — Entfernt die angegebene Umgebung.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt haben und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet nur, dass Python das Django-Modul finden kann):

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
> In Windows _Python 3_ -Skripte werden gestartet, indem Sie dem Befehl `py -3` voranstellen, obwohl dies je nach spezifischer Installation variieren kann.
> Versuchen Sie, den Modifikator `-3` wegzulassen, wenn Sie Probleme mit den Befehlen haben.
> In Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Versionskontrolle mit Git und GitHub

Quellcodeverwaltung (Source Code Management, SCM) und Versionierungstools erlauben es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und „bekannt gutem Code“ zu teilen, wenn Sie es benötigen.

Es gibt viele verschiedene SCM-Tools, einschließlich Git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System), etc., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub, und GitLab.
Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hostingdienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und ihn nach Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist gute Softwareentwicklungspraxis!
> Diese Anweisungen liefern eine grundlegende Einführung in Git und GitHub.
> Um mehr zu lernen, sehen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als obersten "Behälter" zur Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf das Konto der Organisation oder des Benutzers beschränkt.

Alle Arbeiten werden an einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "commit" erstellen, das alle Änderungen seit Ihrem letzten Commit zum aktuellen Branch speichert.

Das Repo wird mit einem Standard-Branch namens "main" erstellt. Sie können mit Git andere Branches davon abzweigen, die zu Beginn alle Commits des ursprünglichen Branches enthalten.
Sie können Branches separat weiterentwickeln, indem Sie Commits hinzufügen, und dann später mit einer "Pull Request" (PR) auf GitHub Änderungen von einem Branch in einen anderen zusammenführen.
Sie können mit Git auch zwischen Branches auf Ihrem lokalen Computer wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `tags` an einem beliebigen Branch zu erstellen und diesen Branch später wiederherzustellen.

### Ein Konto und Repository auf GitHub erstellen

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die folgende [Lokale Bibliothek-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir sie im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie im oberen Toolbar auf den **+** Link und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder dieses Formulars aus.
   Obwohl diese nicht zwingend sind, werden sie dringend empfohlen.

   - Enter a repository name: "django_local_library".
   - Enter a new repository description: "Local Library website written in Django".
   - Wählen Sie "Öffentlich" für das Repository (standardmäßig).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar.
     > Denken Sie daran, keine Zugangsdaten oder anderes sensiblen Material in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
     MDN verwendet „Creative Commons Zero v1.0 Universal“ für dieses Beispiel.
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Auf GitHub klicken Sie auf die grüne **Code** Schaltfläche.
   Im Bereich "Klonen" wählen Sie den "HTTPS"-Tab und kopieren die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendeten, sollte die URL so etwas wie: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie finden Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads)).
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

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer modifizieren, die Änderung committen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, hauptsächlich machen wir es jedoch, um Ihnen zu zeigen, wie man Änderungen von GitHub holt, lokal Änderungen macht und sie dann an GitHub pusht.

1. In der Eingabeaufforderung/dem Terminal holen wir zuerst den neuesten Stand des Quellcodes von GitHub („fetch“) und dann ziehen wir ihn („pull“) (holen und in den aktuellen Branch mergen):

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir gerade den Quellcode geklont haben und wissen, dass es auf dem neuesten Stand ist.
   > Normalerweise sollten Sie jedoch die Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, der den Ort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl: `git remote -v` verwenden.

2. Als Nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen Branch als den aktuellen Branch, an dem Sie arbeiten, auszuwählen.
   Das `-b` Flag gibt an, dass wir einen neuen Branch namens "update_gitignore" erstellen wollen, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen an das Ende davon und speichern sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um anzugeben, welche Dateien nicht automatisch von git gesichert werden sollten, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add`-Befehl, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status`-Befehl, um zu überprüfen, dass alle Dateien, die Sie `commit`ten möchten, korrekt sind (Sie möchten Quellcodedateien enthalten, nicht aber Binärdateien, temporäre Dateien usw.).
   Es sollte ein bisschen wie die folgende Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien in Ihrem lokalen Repo, indem Sie das `-m` Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht dem Unterzeichnen der Änderungen und dem offiziellen Bestandteil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht verändert.
   Wir können den `update_gitignore` Branch in das "origin" Repo (GitHub) pushen, indem wir den folgenden Befehl verwenden:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einem Button, den Sie drücken können, wenn Sie den gerade hochgeladenen Branch "Compare and pull request" (vergleichen und eine Pull-Request erstellen) möchten.
   Wählen Sie den Button und folgen Sie dann den Anweisungen, um eine Pull-Request zu erstellen und dann zu mergen.

   ![Banner, der fragt, ob der Benutzer die kürzlichen Branch-Updates vergleichen und mergen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen enthält der "main" Branch im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich die Dateien ändern, indem Sie diesen Hinzufügen/Committen/Pushen-Zyklus verwenden.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Weitere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linter (wie `pylint`) fälschlicherweise Fehler in den standardmäßig für Django generierten Dateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, macht aber nicht sehr viel Spaß. Ein interessanterer Test besteht darin, ein Skelettprojekt zu erstellen und es in Betrieb zu sehen. Dazu navigieren Sie zuerst in Ihrer Eingabeaufforderung/im Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testsite und navigieren Sie in diesen hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Skelett-Seite namens "_mytestsite_" mit dem **django-admin**-Tool erstellen, wie gezeigt. Nachdem Sie die Seite erstellt haben, können Sie in den Ordner navigieren, in dem sich das für das Projektmanagement verantwortliche Hauptskript befindet, das **manage.py** genannt wird.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem `runserver` Befehl, wie gezeigt verwenden.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unapplied migration(s)" zu diesem Zeitpunkt ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie zu dieser URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Skelett-App von Django](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und in Betrieb genommen.

Im Testabschnitt sahen Sie außerdem kurz, wie wir mit `django-admin startproject` eine neue Django-Website erstellen können und diese mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) in Ihrem Browser ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und erstellen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnellinstallationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Komplette Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie man Django entfernt
- [Wie man Django unter Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
