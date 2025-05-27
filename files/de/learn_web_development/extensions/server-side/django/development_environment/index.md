---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtungsanleitung für die Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django steht, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können – unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das Wissen geben, das Sie benötigen, um mit der Entwicklung von Django-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/Befehlszeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Django-Entwicklungsumgebung (4.*) auf Ihrem Computer zum Laufen zu bringen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsmöglichkeiten. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie sie testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zum Entwickeln und Testen von Django-Anwendungen verwenden können, bevor Sie sie in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten zusammen mit einem einfachen _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Webbrowser zu testen.

Es gibt andere periphere Tools, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linters für die automatische Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Was sind die Django-Installationsoptionen?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, aus dem Python Package Index (PyPi) und in vielen Fällen aus der Paketmanager-Anwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass eine von mehreren Datenbanken verwendet wird, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- In der Hauptsystem-Python-Umgebung oder innerhalb separater Python-virtuellen Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Wahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten können, und diese Einrichtung wird im Rest dieses Moduls angenommen.

> [!NOTE]
> Andere mögliche Installationsoptionen sind in der offiziellen Django-Dokumentation abgedeckt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Veröffentlichung unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Veröffentlichung zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python-Paket-Repository (PyPi) mit dem Tool _pip_. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version ziemlich alt sein kann und nur in der System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie wollen).
- Aus der Quelle installieren. Sie können die neueste aufgeschlossene Version von Django aus dem Quellcode bekommen und installieren. Dies wird Anfängern nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, zum Django-Projekt selbst beizutragen.

Dieser Artikel zeigt, wie man Django aus PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Gemeinschaftsbibliotheken, die unterschiedliche Ebenen der Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie sich für Produktion und Entwicklung für dieselbe Datenbank entscheiden (obwohl Django viele Datenbankunterschiede mithilfe seines Objekt-Relationalen Mappers (ORM) abstrahiert, gibt es dennoch [mögliche Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und die meisten dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichte Datenbank gedacht und kann kein hohes Maß an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardtools (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python-virtuellen Umgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes geteilt wird. Während Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie immer nur eine bestimmte Version jedes Pakets gleichzeitig installieren.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können potenziell Konflikte miteinander haben (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie nur eine Django-Version auf dem Computer ausrichten. Dies kann ein Problem sein, wenn Sie neue Websites (mit der neuesten Version von Django) erstellen möchten, während Sie weiterhin Websites pflegen, die auf ältere Versionen angewiesen sind.

Daher führen erfahrene Python-/Django-Entwickler Python-Anwendungen typischerweise in unabhängigen _Python-virtuellen Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-virtuellen Umgebungen!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Python 3 installieren

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das Tool für den [Python Package Index](https://pypi.org/) — _pip3_ —, das zum Verwalten (Installieren, Aktualisieren und Entfernen) von Python-Paketen/Bibliotheken verwendet wird, die von Django und Ihren anderen Python-Anwendungen verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie feststellen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mit der geeigneten plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Tool für den Python Package Index (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch standardmäßig **nicht** verfügbar.
Sie können _pip3_ im Bash-Terminal mit dem folgenden Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die von [Django 5.0](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) unterstützt wird.
> Sie _müssen_ nicht die neueste Version von Python für diese Anleitung verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist auf älteren Versionen enthalten).
Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Veröffentlichung der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Veröffentlichung der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (Zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Stellen Sie sicher, dass Sie das Kästchen mit der Bezeichnung "Add Python to PATH" ankreuzen.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer enthält standardmäßig _pip3_ (den Python-Paketmanager).
Sie können installierte Pakete wie gezeigt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der oben genannte Befehl funktioniert.
> Sollten Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kästchen "Add Python to environment variables" aktivieren.

## Python 3 und pip3 aufrufen

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen auszuführen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Versions-3-Zeichenfolge, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung der Version 3 Befehle mit `python3` und `pip3` unter Linux/macOS und `py -3` und `py -3 -m pip` unter Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die plattformspezifischen Befehle, die auf den meisten Systemen funktionieren.

## Verwendung von Django in einer Python-virtuellen Umgebung

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Tool [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools schaffen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Software für virtuelle Umgebungen

#### Einrichtung der virtuellen Umgebung unter Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Sie können den [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder den folgenden Anweisungen folgen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei mit dem Namen **.bashrc** in Ihrem Home-Verzeichnis). Diese legen den Ort fest, an dem die virtuellen Umgebungen gespeichert werden sollen, den Ort Ihrer Entwicklungsprojektverzeichnisse und den Standort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Standort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie überprüfen, ob Python und das Skript an den erwarteten Orten sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

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

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### Einrichtung der virtuellen Umgebung unter macOS

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genauso wie auf Ubuntu (auch hier können Sie den Anweisungen entweder aus dem [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder den unten stehenden folgen).

Installieren Sie _virtualenvwrapper_ (und das gebündelte _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, dann ist die Startdatei eine versteckte Datei mit dem Namen **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash shell_ verwenden, dann wird es eine versteckte Datei mit dem Namen **.bash_profile** sein. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Standort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie überprüfen, ob Python und das Skript an den erwarteten Orten sind (und dann die Startdatei entsprechend ändern).
>
> Beispielsweise endete ein Installationstest auf macOS mit den folgenden Zeilen, die in der Startdatei erforderlich waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Standorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

Zu diesem Zeitpunkt sollten Sie eine Reihe von Skripten sehen, die ausgeführt werden (die gleichen Skripte wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht zum Bearbeiten finden können, können Sie sie auch im Terminal mit Nano öffnen.
>
> Angenommen, Sie verwenden Bash, sehen die Befehle so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Home-Verzeichnis
> ls -la # Auflisten des Inhalts des Verzeichnisses. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im Nano-Texteditor innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die oben genannten Zeilen ein
> # Verwenden Sie Ctrl+X, um Nano zu verlassen, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

### Erstellung einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist der Umgang mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen. Wenn dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies sehen, weil der Beginn der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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
> Ab jetzt in diesem Artikel (und in der Tat im Modul) sollten Sie davon ausgehen, dass alle Befehle in einer Python-virtuellen Umgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar weitere nützliche Befehle, die Sie kennen sollten (es gibt weitere in der Tool-Dokumentation, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlassen der aktuellen Python-virtuellen Umgebung
- `workon` — Auflisten verfügbarer virtueller Umgebungen
- `workon name_of_environment` — Aktivieren der angegebenen Python-virtuellen Umgebung
- `rmvirtualenv name_of_environment` — Entfernen der angegebenen Umgebung.

## Installation von Django

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
> Wenn der obige Windows-Befehl kein Django-Modul zeigt, versuchen Sie:
>
> ```bash
> py -m django --version
> ```
>
> In Windows werden _Python 3_-Skripte durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Wenn Sie Probleme mit Befehlen haben, versuchen Sie, den `-3` Modifikator wegzulassen.
> In Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie das Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Tools zur Quellcodeverwaltung (Source Code Management, SCM) und Versionskontrolle ermöglichen es Ihnen, zuverlässig Versionen Ihres Quellcodes zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab.
Für diese Anleitung werden wir unseren Code auf [GitHub](https://github.com/) hosten, einem der beliebtesten cloudbasierten Quellcode-Hostingdienste, und das **git**-Tool verwenden, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist gute Praxis bei der Softwareentwicklung!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu lernen, siehe [Lernen von Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Behälter" zur Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für eine einzelne Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in welchem Fall der Code für alle im Internet sichtbar ist, oder privat, in welchem Fall sie auf die besitzende Organisation oder das Benutzerkonto beschränkt sind.

Alle Arbeiten werden an einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit im aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Sie können mit git andere Branches davon abzweigen, die zu Beginn alle Commits des ursprünglichen Branches haben.
Sie können Branches getrennt weiterentwickeln, indem Sie Commits hinzufügen, und dann später mit einem "Pull Request" (PR) auf GitHub Änderungen von einem Branch zu einem anderen zusammenführen.
Sie können auch git verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln, zum Beispiel um verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `tags` auf jedem Branch zu erstellen und später diesen Branch zu diesem Punkt wiederherzustellen.

### Ein Konto und Repository auf GitHub erstellen

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" zur Speicherung der [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir es in der restlichen Anleitung weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Nachdem Sie sich eingeloggt haben, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus.
   Während diese nicht verpflichtend sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library-Website in Django geschrieben".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dies macht _allen_ Quellcode sichtbar.
     > Denken Sie daran, keine Anmeldeinformationen oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahl-Liste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl-Liste.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Markieren Sie **Initialisiere dieses Repository mit einer README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt ist, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf den grünen **Code**-Button.
   Wählen Sie im Abschnitt "Clone" die Registerkarte "HTTPS" und kopieren Sie die URL.
   Wenn Sie den Reponame "django_local_library" verwendet haben, sollte die URL in etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads)).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Navigieren Sie in den Ordner des Repos.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung committen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir sie, um Ihnen zu zeigen, wie man Änderungen von GitHub zieht, lokal Änderungen vornimmt und sie dann auf GitHub pusht.

1. In der Eingabeaufforderung/dem Terminal holen wir zuerst die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir gerade den Quellcode geklont haben und wissen, dass er aktuell ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, der den Speicherort des Repos angibt, in dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, ob Ursprung unser Repo auf GitHub ist, indem Sie den Befehl: `git remote -v` verwenden.

2. Als nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen Branch auszuwählen, der der aktuelle Branch ist, an dem Sie arbeiten.
   Das `-b`-Flag zeigt an, dass wir beabsichtigen, einen neuen Branch mit dem Namen "update_gitignore" zu erstellen, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen ans Ende der Datei und speichern Sie sie dann:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie z. B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcodedateien hinzufügen, keine Binärdateien, temporäre Dateien usw.).
   Es sollte ungefähr so aussehen wie die untenstehende Liste.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`ten Sie die Dateien in Ihr lokales Repo, indem Sie das `-m`-Flag verwenden, um eine kurze, aber klare Commit-Nachricht anzugeben.
   Dies entspricht der Genehmigung der Änderungen und dem offiziellen Hinzufügen zu Ihrem lokalen Repo.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zum jetzigen Zeitpunkt wurde das entfernte Repo nicht geändert.
   Wir können den `update_gitignore`-Branch in das "origin"-Repo (GitHub) mit dem folgenden Befehl pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zu der Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen, mit einer Schaltfläche, die Sie drücken können, wenn Sie den gerade hochgeladenen Branch "Vergleichen und pull requesten" möchten.
   Wählen Sie die Schaltfläche und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und zu mergen.

   ![Banner, das fragt, ob der Benutzer jüngste Branch-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main"-Branch im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, wenn sich Dateien ändern, indem Sie diesen Modifizieren/Committen/Push-Zyklus verwenden.

Im nächsten Thema verwenden wir dieses Repo, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-fähigen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den standardmäßig für Django generierten Dateien melden.

## Installation testen

Der obige Test funktioniert, macht aber nicht wirklich Spaß. Ein interessanterer Test ist es, ein Skelettprojekt zu erstellen und es in Aktion zu sehen. Gehen Sie dazu zunächst in Ihrer Eingabeaufforderung/dem Terminal zu dem Ort, an dem Sie Ihre Django-Anwendungen speichern möchten. Erstellen Sie einen Ordner für Ihre Test-Site und navigieren Sie in diesen hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Skelett-Website mit dem Namen "_mytestsite_" mit dem Tool **django-admin** erstellen, wie gezeigt. Nachdem Sie die Site erstellt haben, können Sie in den Ordner navigieren, in dem sich das Hauptskript zum Verwalten von Projekten befindet, **manage.py** genannt.

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
> Sie können die Warnungen über "nicht angewendete Migration(en)" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und in Betrieb.

Im Abschnitt Testen haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) in Ihrem Browser ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und bauen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnelle Installationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Django installieren — Kompletter Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch das Entfernen von Django
- [Django auf Windows installieren](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
