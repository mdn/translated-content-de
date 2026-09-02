---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Da Sie nun wissen, wofür Django dient, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können – unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel alles bieten, was Sie brauchen, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/der Befehlszeile und im Installieren von Softwarepaketen auf dem Betriebssystem Ihres Entwicklungscomputers.
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

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten und bietet einen Überblick über einige Ihrer Setup- und Konfigurationsoptionen. Der restliche Artikel erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie für die Entwicklung und das Testen von Django-Apps verwenden können, bevor Sie sie in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bietet, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Webbrowser zu testen.

Es gibt andere Zusatzwerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht abdecken. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder IDE zum Bearbeiten von Code, Linter zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist äußerst flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, aus dem Python Package Index (PyPi) und in vielen Fällen über die Paketmanager-Anwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-Virtualumgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine etwas andere Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Wahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im restlichen Modul vorausgesetzt.

> [!NOTE]
> Weitere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken zu den [entsprechenden Dokumenten unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Version zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi) mit dem Werkzeug _pip_. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version vom Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise recht alt ist und nur in das System-Python-Umfeld installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Aus dem Quellcode installieren. Sie können die neueste hochmoderne Version von Django aus dem Quelltext beziehen und installieren. Dies wird für Anfänger nicht empfohlen, ist aber notwendig, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie Sie Django aus PyPi installieren können, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite. Es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dieselbe Datenbank sowohl für Produktion als auch für Entwicklung auszuwählen (obwohl Django viele der Datenbankunterschiede mit seinem Objekt-Relationalen Mapper (ORM) abstrahiert, gibt es dennoch [potentielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und die meisten Module) werden wir die _SQLite_-Datenbank verwenden, die ihre Daten in einer Datei speichert. SQLite ist für den Einsatz als leichte Datenbank gedacht und kann ein hohes Maß an Parallelität nicht unterstützen. Sie ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) beginnen. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Installation systemweit oder in einer Python-Virtualumgebung?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes geteilt wird. Während Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> Python-Anwendungen, die in die globale Umgebung installiert werden, können möglicherweise miteinander in Konflikt stehen (d.h. wenn sie von verschiedenen Versionen desselben Pakets abhängen).

Wenn Sie Django in die standard-/globale Umgebung installieren, können Sie nur eine Version von Django auf dem Computer anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites (mit der neuesten Version von Django) erstellen möchten und gleichzeitig Websites pflegen, die auf älteren Versionen beruhen.

Erfahrene Python/Django-Entwickler führen daher Python-Apps in unabhängigen _Python-Virtualumgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt die Verwendung von Python-Virtualumgebungen!

In diesem Modul gehen wir davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das [Python Package Index](https://pypi.org/)-Werkzeug — _pip3_ — das verwendet wird, um Python-Pakete/Bibliotheken zu verwalten (installieren, aktualisieren und entfernen), die von Django und Ihren anderen Python-Anwendungen verwendet werden.

In diesem Abschnitt wird kurz erklärt, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und wie Sie bei Bedarf neue Versionen installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Je nach Plattform können Sie Python/pip möglicherweise auch über den eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS beinhaltet standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index-Werkzeug (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch **nicht** standardmäßig verfügbar.
Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version [die von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ die neueste Python-Version für diese Anleitung nicht verwenden, aber wenn Sie es möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig nicht Python 3 (Python 2 ist in älteren Versionen enthalten).
Sie können dies bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Werkzeug) ganz einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt der Erstellung dieser Anleitung ist dies Python 3.11.8).

2. Finden Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Sie können die erfolgreiche Installation jetzt bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch prüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält Python standardmäßig nicht, aber Sie können es problemlos (zusammen mit dem _pip3_-Werkzeug) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:
   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt der Erstellung dieser Anleitung ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen.
3. Stellen Sie sicher, dass Sie das Kontrollkästchen "Add Python to PATH" aktivieren.

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
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und das Kontrollkästchen "Add Python to environment variables" auf der zweiten Seite aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Zeichenkette mit der Version "3", wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung von Version 3 Befehle mit `python3` und `pip3` auf Linux/macOS, und `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die unten stehenden Anweisungen zeigen die plattformspezifischen Befehle, wie sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-Virtualumgebung

Die Bibliotheken, die wir zur Erstellung unserer Virtualumgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Werkzeug [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools schaffen eine einheitliche Schnittstelle zur Verwaltung von Umgebungen auf allen Plattformen.

### Installation der Virtualumgebungssoftware

#### Einrichtung der Virtualumgebung auf Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Sie können [die offizielle Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder den unten stehenden Anweisungen folgen.

Installieren Sie das Werkzeug mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese geben den Speicherort der Virtualumgebungen, den Standort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts an:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn die _virtualenv_ beim Testen nicht funktioniert, sollten Sie prüfen, ob Python und das Skript an den erwarteten Speicherorten sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei erneut, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie eine Reihe von Skripten ausgeführt sehen, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualumgebung erstellen.

#### Einrichtung der Virtualumgebung auf macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist nahezu identisch mit der auf Ubuntu (auch hier können Sie den Anweisungen entweder aus dem [offiziellen Installationshandbuch](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das gebündelte _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind dieselben Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, wird die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, wird es eine versteckte Datei namens **.bash_profile** sein. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` zeigt auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn die _virtualenv_ beim Testen nicht funktioniert, sollten Sie prüfen, ob Python und das Skript am erwarteten Speicherort sind (und dann die Startdatei entsprechend ändern).
>
> Ein Beispiel für einen Installationstest auf macOS erforderte schließlich die folgenden Zeilen in der Startdatei:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei durch folgende Eingabe im Terminal erneut:

```bash
source ~/.bash_profile
```

Zu diesem Zeitpunkt könnten Sie eine Reihe von Skripten ausgeführt sehen (dieselben Skripte wie bei der Installation unter Ubuntu). Sie sollten jetzt in der Lage sein, mit dem `mkvirtualenv`-Befehl eine neue Virtualumgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden können, können Sie sie auch im Terminal mit nano öffnen.
>
> Vorausgesetzt, Sie verwenden bash, sehen die Befehle etwa so aus:
>
> ```bash
> cd ~  # Wechseln Sie in mein Home-Verzeichnis
> ls -la #Listen Sie den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im nano-Texteditor innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die oben genannten Zeilen hinein
> # Verwenden Sie Strg+X, um nano zu beenden, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der Virtualumgebung auf Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zu Virtualumgebungen speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualumgebung erstellen

### Erstellen einer Virtualumgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit Virtualumgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue Virtualumgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist etwas plattformspezifisch). Wenn der Befehl abgeschlossen ist, ist die neue Virtualumgebung aktiv — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist für Windows/macOS ähnlich).

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

Jetzt, da Sie sich in der Virtualumgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Ab sofort in diesem Artikel (und tatsächlich im Modul) nehmen Sie bitte an, dass alle Befehle in einer Python-Virtualumgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer Virtualumgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden Sie die aktuelle Python-Virtualumgebung
- `workon` — Listen Sie verfügbare Virtualumgebungen auf
- `workon name_of_environment` — Aktivieren Sie die angegebene Python-Virtualumgebung
- `rmvirtualenv name_of_environment` — Entfernen Sie die angegebene Umgebung.

## Installation von Django

Sobald Sie eine Virtualumgebung erstellt haben und mit `workon` in sie eingetreten sind, können Sie _pip3_ verwenden, um Django zu installieren.

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
> In Windows werden _Python 3_-Skripte ausgeführt, indem der Befehl mit `py -3` vorangestellt wird, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3`-Modifikator wegzulassen, wenn Sie auf Probleme stoßen.
> In Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den Linux-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcode-Verwaltung mit Git und GitHub

Quellcode-Verwaltungs- (SCM) und Versionierungstools ermöglichen es Ihnen, zuverlässig Versionen Ihres Quellcodes zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System), etc., und Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab.
Für diese Anleitung hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraxis!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Lernen Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Eimer" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in diesem Fall ist der Code für jeden im Internet sichtbar, oder privat, in diesem Fall sind sie auf das Eigentümerkonto oder die Benutzerkonten beschränkt.

Alle Arbeiten werden an einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie Änderungen an einem Branch sichern möchten, können Sie einen "Commit" erstellen, der alle Änderungen seit Ihrem letzten Commit an dem aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Sie können mit git andere Branches von diesem abspalten, die zunächst alle Commits des ursprünglichen Branches enthalten.
Sie können Branches separat weiterentwickeln, indem Sie Commits hinzufügen, und dann später eine "Pull Request" (PR) auf GitHub verwenden, um Änderungen von einem Branch in einen anderen zu übernehmen.
Mit git können Sie auch zwischen Branches auf Ihrem lokalen Computer wechseln, um verschiedene Dinge auszuprobieren.

Neben Branches ist es möglich, `tags` auf jedem Branch zu erstellen und diesen Branch später an diesem Punkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositories auf GitHub

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos).
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Lokale Bibliothekswebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir es im Rest dieser Anleitung weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen Sie **Neues Repository** aus.
3. Füllen Sie alle Felder in diesem Formular aus.
   Während diese nicht obligatorisch sind, werden sie dringend empfohlen.
   - Geben Sie einen Repositoriumnamen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliothekswebsite geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dies wird _alle_ Quellcodes sichtbar machen.
     > Denken Sie daran, keine Anmeldeinformationen oder anderes sensibles Material in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_-Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_-Auswahlliste.
     MDN verwendet für dieses Beispiel "Creative Commons Zero v1.0 Universal".
   - Aktivieren Sie **Initialisieren Sie dieses Repository mit einer README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Nachdem das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt "Klonen" den Tab "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer ([offizieller Git-Download-Leitfaden](https://git-scm.com/downloads/)).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen bearbeiten und synchronisieren

Nun werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung übernehmen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich tun wir dies, um Ihnen zu zeigen, wie Sie Änderungen von GitHub beziehen, lokale Änderungen vornehmen und diese dann an GitHub senden.

1. In der Eingabeaufforderung/dem Terminal holen (holen) wir zunächst das neueste Quellcode von GitHub ab (fetchen), und fügen es dann in den aktuellen Branch ein (pullen):

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, der den Standort des Repos angibt, in dem sich die Quelle befindet, und "main" ist der Branch.
   Sie können mit dem Befehl `git remote -v` überprüfen, dass origin unser Repo auf GitHub ist.

2. Als nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen Branch zum aktuellen Branch zu machen, an dem Sie arbeiten.
   Das `-b`-Flag gibt an, dass wir die Absicht haben, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen vorhandenen Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen unten hinein und speichern Sie dann:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um anzugeben, dass Dateien nicht automatisch von git gesichert werden sollen, wie z. B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" des aktuellen Branches zu verschieben.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, dass alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien und nicht Binärdateien, temporäre Dateien usw. einschließen).
   Es sollte in etwa so aussehen wie die unten stehende Liste.

   ```bash
   git status
   ```

   ```plain
   On branch update_gitignore
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit`en Sie die Dateien in Ihr lokales Repo, indem Sie das `-m`-Flag verwenden, um eine prägnante aber klare Commit-Nachricht anzugeben.
   Dies entspricht dem Abzeichnen der Änderungen und ihrer offiziellen Aufnahme in das lokale Repo.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Wir können den Branch `update_gitignore` an das "origin" Repo (GitHub) mit folgendem Befehl senden:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück auf die Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und laden Sie die Seite neu.

   Ein Banner sollte erscheinen mit einer Schaltfläche, die Sie drückt, wenn Sie die soeben hochgeladenen Branch-Änderungen "Compare and pull request" möchten.
   Wählen Sie die Schaltfläche und folgen Sie den Anweisungen, um eine Pull-Request zu erstellen und dann zu mergen.

   ![Banner fragt, ob der Benutzer die kürzlich aktualisierten Branches vergleichen und mergen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen enthält der "main" Branch im Repo auf GitHub Ihre Änderungen an der `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Hinzufügen/Commit/Senden-Zyklus verwenden.

Im nächsten Thema verwenden wir dieses Repo, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie z. B. Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linter (wie `pylint`) irrtümlich Fehler in den standardmäßig für Django generierten Dateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, ist aber nicht sehr unterhaltsam. Ein interessanterer Test besteht darin, ein Gerüstprojekt zu erstellen und es in Aktion zu sehen. Um dies zu tun, navigieren Sie zuerst in Ihrem Kommandozeilenfenster/Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Test-Website und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Gerüstsite namens "_mytestsite_" mit dem Werkzeug **django-admin** erstellen, wie gezeigt. Nachdem Sie die Seite erstellt haben, können Sie in den Ordner navigieren, in dem Sie das Hauptskript zum Verwalten von Projekten, **manage.py**, finden.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem Befehl `runserver` ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht angewandte Migration(en)" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Website anzeigen, indem Sie im lokalen Webbrowser zur folgenden URL navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Gerüst-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) im Browser ausführen können. Im nächsten Artikel erweitern wir diesen Prozess, indem wir eine einfache, aber vollständige Webanwendung erstellen.

## Siehe auch

- [Schneller Installationsleitfaden](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Anleitung zur vollständigen Installation von Django](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [So installieren Sie Django auf Windows](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
