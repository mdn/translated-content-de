---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Da Sie nun wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können – egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen alles bieten, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/Kommandozeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer einzurichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. In diesem Abschnitt wird erläutert, was Sie mit der Entwicklungsumgebung erhalten, und es wird ein Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen gegeben. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie man diese testen kann.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zur Entwicklung und zum Testen von Django-Apps verwenden können, bevor Sie sie in eine Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten, zusammen mit einem einfachen _Entwicklungs-Webserver_, den Sie zum Testen lokaler (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers verwenden können.

Es gibt andere unterstützende Werkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linter zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Einrichtungsoptionen gibt es?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, vom Python Package Index (PyPi) und in vielen Fällen von der Paketmanager-Anwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-virtueller Umgebungen betrieben werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Abschnitte erklären einige Ihrer Auswahlmöglichkeiten. Im Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im Rest dieses Moduls vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen sind in der offiziellen Django-Dokumentation abgedeckt. Wir verlinken auf die [passenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf nahezu jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Nahezu jeder Computer sollte die erforderliche Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die zugelassenen Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi), unter Verwendung des _pip_ Tools. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Verteilungen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version recht alt sein kann und nur in die System-Python-Umgebung installiert werden kann (was nicht unbedingt das ist, was Sie wollen).
- Installation aus dem Quellcode. Sie können die neueste Version von Django aus dem Quellcode beziehen und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, aktiv zu Django beizutragen.

Dieser Artikel zeigt, wie man Django aus PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere populäre SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie für sowohl Produktion als auch Entwicklung dieselbe Datenbank auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Objekt-Relationalen Mapper (ORM) abstrahiert, gibt es dennoch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) werden wir die SQLite-Datenbank verwenden, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und kann kein hohes Maß an gleichzeitigen Zugriffen unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist so konfiguriert, dass SQLite standardmäßig verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Installation systemweit oder in einer Python-virtuellen Umgebung?

Wenn Sie Python3 installieren, erhalten Sie eine einzelne globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Während Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie gleichzeitig nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können potenziell miteinander in Konflikt geraten (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anpeilen. Das kann ein Problem sein, wenn Sie neue Websites (mit der neuesten Version von Django) erstellen möchten, während Sie weiterhin Websites pflegen, die von älteren Versionen abhängig sind.

Daher führen erfahrene Python/Django-Entwickler Python-Apps typischerweise innerhalb unabhängiger _Python-virtueller Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt, dass Sie Python-virtuelle Umgebungen verwenden!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir werden Ihnen im Folgenden zeigen, wie.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das Tool des [Python Package Index](https://pypi.org/) — _pip3_ — welches zum Verwalten (Installieren, Aktualisieren und Entfernen) der von Django und Ihren anderen Python-Apps verwendeten Python-Pakete/Bibliotheken verwendet wird.

In diesem Abschnitt wird kurz erläutert, wie Sie überprüfen können, welche Versionen von Python vorhanden sind, und bei Bedarf neue Versionen für Ubuntu Linux 20.04, macOS und Windows 10 installieren.

> [!NOTE]
> Je nach Plattform können Sie Python/pip möglicherweise auch über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal installieren, indem Sie den folgenden Befehl verwenden:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste von [Django 5.0 unterstützte Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen die neueste Version von Python für dieses Tutorial nicht verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig nicht Python 3 (Python 2 ist in älteren Versionen enthalten).
Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_ Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Lokalisieren Sie die Datei im _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können ähnlich überprüfen, dass _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es leicht (zusammen mit dem _pip3_ Tool) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Achten Sie darauf, das Kästchen mit der Bezeichnung "Add Python to PATH" zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert _pip3_ (den Python-Paketmanager) standardmäßig.
Sie können die installierten Pakete wie gezeigt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Nachricht erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und das Kästchen mit der Aufschrift "Add Python to environment variables" auf der zweiten Seite aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` auf jedem Betriebssystem im Allgemeinen verwendet werden, um Python und pip auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Version "3"-Zeichenfolge, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

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

Die folgenden Anweisungen zeigen die plattformspezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-virtuellen Umgebung

Die Bibliotheken, die wir zur Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die wiederum beide das [virtualenv](https://virtualenv.pypa.io/en/latest/) Tool verwenden. Die Wrapper-Tools erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der virtuellen Umgebung

#### Einrichtung der virtuellen Umgebung unter Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Der offizielle Installationsleitfaden kann [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) gefunden werden, oder folgen Sie den unten stehenden Anweisungen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei ein (dies ist eine versteckte Datei mit dem Namen **.bashrc** in Ihrem Home-Verzeichnis). Diese legen den Ort fest, an dem die virtuellen Umgebungen gespeichert werden sollen, den Ort Ihrer Entwicklungsprojektverzeichnisse und den Ort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, ist eines der Dinge, die zu überprüfen sind, dass Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Orte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie sehen, dass eine Reihe von Skripten ausgeführt wird, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem `mkvirtualenv` Befehl eine neue virtuelle Umgebung erstellen.

#### Einrichtung der virtuellen Umgebung unter macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau dieselbe wie unter Ubuntu (wieder können Sie den Anweisungen aus dem [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das Paket _virtualenv_) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind dieselben Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, dann wird die Startdatei eine versteckte Datei mit dem Namen **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, dann wird es eine versteckte Datei mit dem Namen **.bash_profile** sein. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, ist eines der Dinge, die zu überprüfen sind, dass Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
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
> Sie können die richtigen Orte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Aufruf im Terminal tätigen:

```bash
source ~/.bash_profile
```

An diesem Punkt sehen Sie möglicherweise, dass eine Reihe von Skripten ausgeführt wird (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden, um sie zu bearbeiten, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle ungefähr so ​​aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Heimatverzeichnis
> ls -la # Listet den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnet die Datei im nano-Texteditor innerhalb des Terminals
> # Blättern Sie zum Ende der Datei und kopieren Sie die obigen Zeilen
> # Verwenden Sie Strg + X, um nano zu verlassen, und wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem `mkvirtualenv` Befehl eine neue virtuelle Umgebung erstellen. Während dieser Befehl läuft, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformabhängig). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv — Sie können dies erkennen, da der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Jetzt befinden Sie sich innerhalb der virtuellen Umgebung und können Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Ab jetzt in diesem Artikel (und tatsächlich im gesamten Modul) gehen wir davon aus, dass alle Befehle innerhalb einer Python-virtuellen Umgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur einige wenige andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Dokumentation des Tools, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlassen der aktuellen Python-virtuellen Umgebung
- `workon` — Listen Sie die verfügbaren virtuellen Umgebungen auf
- `workon name_of_environment` — Aktivieren Sie die angegebene Python-virtuelle Umgebung
- `rmvirtualenv name_of_environment` — Entfernen Sie die angegebene Umgebung.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt und `workon` aufgerufen haben, um sie zu betreten, können Sie mit _pip3_ Django installieren.

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
> Wenn der obige Windows-Befehl kein django-Modul anzeigt, versuchen Sie Folgendes:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_ Skripts werden durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3` Modifikator wegzulassen, wenn Sie auf Probleme mit Befehlen stoßen.
> In Linux/macOS ist der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Quellcodeverwaltung (SCM) und Versionierungstools ermöglichen es Ihnen, zuverlässig Versionen Ihres Quellcodes zu speichern und wiederherzustellen, Änderungen auszuprobieren, und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hostingdienste, hosten und das **git** Werkzeug verwenden, um unseren Quellcode lokal zu verwalten und ihn bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraxis!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Eimer" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für alle im Internet sichtbar, oder privat, in diesem Fall sind sie auf das Besitzunternehmen oder Benutzerkonto beschränkt.

Alle Arbeiten werden an einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit an den aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Sie können mit git andere Branches davon ableiten, die zunächst alle Commits des ursprünglichen Branches enthalten.
Sie können Branches separat entwickeln, indem Sie Commits hinzufügen und später eine "Pull Request" (PR) auf GitHub verwenden, um Änderungen von einem Branch in einen anderen zu mergen.
Sie können auch git verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln und beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu den Branches ist es möglich, auf jedem Branch `tags` zu erstellen und diesen Branch später zu diesem Zeitpunkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositorys auf GitHub

Zunächst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" zum Speichern der [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir es im Verlauf dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder in diesem Formular aus.
   Auch wenn diese nicht verpflichtend sind, sind sie stark zu empfehlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library Website geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (der Standard).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar.
     > Denken Sie daran, keine Anmeldedaten oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahl aus.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahl aus.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Repository mit einer README initialisieren**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Da das Repository ("Repo") auf GitHub erstellt wurde, müssen wir es nun auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL ungefähr so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Versionen für verschiedene Plattformen finden Sie [hier](https://git-scm.com/downloads)).
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

Jetzt werden wir die `.gitignore` Datei auf dem lokalen Computer ändern, die Änderung festschreiben und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber meistens machen wir es, um Ihnen zu zeigen, wie Sie Änderungen von GitHub abrufen, lokal Änderungen vornehmen und sie dann an GitHub senden.

1. In der Eingabeaufforderung/dem Terminal holen wir zuerst (holen) und ziehen dann (holen und in den aktuellen Branch zusammenführen) die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _Remote_, das den Ort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl `git remote -v` verwenden.

2. Als Nächstes checken wir einen neuen Branch ein, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout` Befehl wird verwendet, um einen Branch auszuwählen, der der aktuelle Branch ist, an dem Sie arbeiten.
   Das `-b` Flag gibt an, dass wir beabsichtigen, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen vorhandenen Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore** Datei, kopieren Sie die folgenden Zeilen ans Ende und speichern Sie die Datei:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie z. B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den `add` Befehl, um alle geänderten Dateien (die nicht von der **.gitignore** Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status` Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien einfügen, keine Binärdateien, temporäre Dateien usw.).
   Es sollte ungefähr so aussehen wie die unten stehende Liste.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit` die Dateien in Ihr lokales Repo, verwenden Sie das `-m` Flag, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht dem Abzeichnen der Änderungen und deren offizieller Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das entfernte Repo nicht geändert.
   Wir können den `update_gitignore` Branch auf das "origin" Repo (GitHub) mit dem folgenden Befehl pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einer Schaltfläche, die Sie auffordert, den gerade hochgeladenen Branch "Vergleichen und Pull-Anfrage" zu vergleichen.
   Wählen Sie die Schaltfläche aus und folgen Sie den Anweisungen, um eine Pull-Anfrage zu erstellen und dann zu mergen.

   ![Banner, der fragt, ob der Benutzer kürzlich aktualisierte Branches vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der "main" Branch im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, wenn sich Dateien mit diesem add/commit/push Zyklus ändern.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Weitere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-kompatiblen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linter (wie `pylint`) fälschlicherweise Fehler in den standardmäßigen Dateien melden, die für Django generiert wurden.

## Testen Ihrer Installation

Der oben durchgeführte Test funktioniert, macht aber nicht viel Spaß. Ein interessanterer Test ist es, ein Grundgerüstprojekt zu erstellen und zu sehen, wie es funktioniert. Dazu navigieren Sie zunächst in Ihrer Eingabeaufforderung/Ihrem Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue standardmäßige Website namens "_mytestsite_" mit dem **django-admin** Tool erstellen, wie gezeigt. Nach der Erstellung der Seite können Sie in den Ordner navigieren, in dem Sie das Hauptskript zur Verwaltung von Projekten finden, das **manage.py** genannt wird.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit dem Befehl **manage.py** und dem `runserver` Befehl ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht angewendete Migrationen" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie die folgende URL in Ihrem lokalen Webbrowser aufrufen: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Standard-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und funktionsfähig.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und sie in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel werden wir diesen Prozess erweitern, um eine einfache, aber vollständige Webanwendung zu erstellen.

## Siehe auch

- [Schneller Installationsleitfaden](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Vollständiger Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — beinhaltet auch, wie man Django entfernt
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
