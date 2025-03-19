---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Nun, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — unabhängig davon, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen alles bieten, was Sie benötigen, um mit der Entwicklung von Django-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/einer Eingabeaufforderung und wie Sie Softwarepakete auf dem Betriebssystem Ihres Entwicklungscomputers installieren.
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

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und gibt eine Übersicht über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zum Entwickeln und Testen von Django-Anwendungen verwenden können, bevor Sie sie in eine Produktionsumgebung überführen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten, zusammen mit einem einfachen _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers zu testen.

Es gibt andere Peripheriewerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht abdecken werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linters zum automatischen Formatieren usw. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, vom Python-Paketindex (PyPi) und in vielen Fällen vom Paketmanager des Hostcomputers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-Virtualumgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Abschnitte erklären einige Ihrer Wahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird in diesem Modul vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer laufen, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen. Fast jeder Computer sollte die erforderliche Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Version von Python sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Veröffentlichung unterstützt wird. Für Django 5.0 sind die zulässigen Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell"), die neueste verfügbare Version der unterstützten Python-Ausgabe zu verwenden.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, an denen Sie Django herunterladen können:

- Das Python-Paket-Repository (PyPi) mit dem _pip_-Werkzeug. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Eine Version von Ihrem Paketmanager des Computers verwenden. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise recht alt ist und nur in der System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie wollen).
- Aus dem Quellcode installieren. Sie können die neueste, richtungsweisende Version von Django aus dem Quellcode beziehen und installieren. Dies wird für Anfänger nicht empfohlen, ist aber erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django von PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die PostgreSQL-, MariaDB-, MySQL-, Oracle- und SQLite-Datenbanken, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie dieselbe Datenbank für sowohl Produktion als auch Entwicklung auswählen (obwohl Django viele der Datenbankunterschiede über seinen objekt-relationalen Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollen).

Für diesen Artikel (und die meisten dieses Moduls) werden wir die _SQLite_-Datenbank verwenden, die ihre Daten in einer Datei speichert. SQLite ist für die Verwendung als leichtgewichtige Datenbank gedacht und kann kein hohes Maß an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Systemweit oder in einer Python-Virtualumgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Code verwendet wird. Obwohl Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie jeweils nur eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> In der globalen Umgebung installierte Python-Anwendungen können potenziell miteinander in Konflikt geraten (d.h. wenn sie von verschiedenen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie nur eine Version von Django auf dem Computer anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (unter Verwendung der neuesten Version von Django), während Sie weiterhin Websites warten, die auf älteren Versionen basieren.

Aus diesem Grund führen erfahrene Python/Django-Entwickler Python-Apps typischerweise innerhalb unabhängiger _Python-Virtualumgebungen_ aus. Dies ermöglicht mehrere unterschiedliche Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt, Python-Virtualumgebungen zu verwenden!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben. Sie benötigen auch das [Python-Paketindex](https://pypi.org/)-Werkzeug _pip3_, das verwendet wird, um Python-Pakete/-Bibliotheken zu verwalten (installieren, aktualisieren und entfernen), die von Django und Ihren anderen Python-Apps verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen für Ubuntu Linux 20.04, macOS und Windows 10 installieren können.

> [!NOTE]
> Je nach Plattform können Sie Python/pip möglicherweise auch vom Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und sie mithilfe der geeigneten plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12. Sie können dies überprüfen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Allerdings ist das Python-Paketindexwerkzeug (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, standardmäßig **nicht** verfügbar. Sie können _pip3_ im Bash-Terminal installieren mit:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die von [Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django). Sie müssen _nicht_ die neueste Version von Python für dieses Tutorial verwenden, aber wenn Sie möchten, gibt es Anweisungen im Internet.

### macOS

macOS enthält standardmäßig nicht Python 3 (Python 2 ist auf älteren Versionen enthalten). Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was anzeigt, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (einschließlich des _pip3_-Werkzeugs) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mithilfe des _Finders_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Sie können jetzt bestätigen, dass die Installation erfolgreich war, indem Sie `python3 -V` erneut ausführen und nach der Python-Versionsnummer suchen.

Ähnlich können Sie überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig nicht Python, aber Sie können es (einschließlich des _pip3_-Werkzeugs) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen
3. Stellen Sie sicher, dass Sie das Kontrollkästchen "Add Python to PATH" aktivieren

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Das Windows-Installationsprogramm enthält standardmäßig _pip3_ (den Python-Paketmanager). Sie können installierte Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Das Installationsprogramm sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert. Wenn Sie jedoch eine Nachricht erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen. Sie können dies tun, indem Sie das Installationsprogramm erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kontrollkästchen "Add Python to environment variables" aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen. Wenn dies auf Ihrem System zulässig ist, erhalten Sie beim Ausführen von `-V` mit den einfachen Befehlen eine Version "3"-Zeichenfolge, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung von Version 3 die Befehle mit `python3` und `pip3` auf Linux/macOS und `py -3` und `py -3 -m pip` auf Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die unten gezeigten Anweisungen zeigen die plattformspezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django innerhalb einer Python-Virtualumgebung

Die Bibliotheken, die wir zur Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide wiederum das [virtualenv](https://virtualenv.pypa.io/en/latest/)-Werkzeug verwenden. Die Wrapper-Werkzeuge erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Virtual Environment Software

#### Einrichtung der virtuellen Umgebung in Ubuntu

Nach der Installation von Python und pip können Sie _virtualenvwrapper_ (das _virtualenv_ beinhaltet) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder folgen Sie den untenstehenden Anweisungen.

Installieren Sie das Werkzeug mit _pip3_:

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
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` weisen auf den normalen Installationsort für Python 3 hin, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie überprüfen, ob Python und das Skript an den erwarteten Stellen sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie sehen, dass eine Menge Skripte wie unten gezeigt ausgeführt werden:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### Einrichtung der virtuellen Umgebung in macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genauso wie auf Ubuntu (wiederum können Sie den Anweisungen in der [offiziellen Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (inklusive _virtualenv_) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (diese sind dieselben Zeilen wie für Ubuntu). Wenn Sie die _zsh-Shell_ verwenden, befindet sich die Startdatei in einer versteckten Datei namens **.zshrc** in Ihrem Home-Verzeichnis. Wenn Sie die _bash-Shell_ verwenden, befindet sie sich in einer versteckten Datei namens **.bash_profile**. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` weist auf den normalen Installationsort für Python 3 hin, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, sollten Sie prüfen, ob Python und das Skript an den erwarteten Stellen sind (und dann die Startdatei entsprechend ändern).
>
> Zum Beispiel ergab ein Installationstest auf macOS, dass folgende Zeilen in der Startdatei notwendig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` ermitteln.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

An diesem Punkt könnten Sie sehen, dass eine Menge Skripte ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten nun in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden können, können Sie es auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle in etwa so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Home-Verzeichnis
> ls -la # Listen Sie den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im nano Texteditor innerhalb des Terminals
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obigen Zeilen hinein
> # Verwenden Sie Strg+X, um nano zu beenden, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung in Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, weil Sie nicht konfigurieren müssen, wo das Werkzeug Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Sie müssen nur den folgenden Befehl in der Eingabeaufforderung ausführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattform-spezifisch). Wenn der Befehl abgeschlossen ist, ist die neue virtuelle Umgebung aktiv — Sie können dies daran erkennen, dass der Anfang des Prompts der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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
> Ab jetzt in diesem Artikel (und tatsächlich im Modul) sollten Sie annehmen, dass alle Befehle innerhalb einer Python-Umgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Werkzeugdokumentation, aber dies sind die Befehle, die Sie regelmäßig verwenden werden):

- `deactivate` — Schaltet die aktuelle Python-Umgebung aus
- `workon` — Listet verfügbare virtuelle Umgebungen auf
- `workon name_of_environment` — Aktiviert die angegebene Python-Umgebung
- `rmvirtualenv name_of_environment` — Entfernt die angegebene Umgebung.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt und `workon` aufgerufen haben, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie folgenden Befehl ausführen (dies testet nur, ob Python das Django-Modul finden kann):

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
> In Windows werden _Python 3_-Skripte gestartet, indem der Befehl mit `py -3` vorangestellt wird, obwohl dies je nach Ihrer spezifischen Installation variieren kann. Versuchen Sie, den `-3`-Modifikator wegzulassen, wenn Sie auf Probleme mit Befehlen stoßen. In Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl, um Python 3 aufzurufen (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie dieses Präfix mit: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Quellcodeverwaltung (Source Code Management, SCM) und Versionierungswerkzeuge ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "gültigem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Werkzeuge, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab. Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, hosten und das **git**-Werkzeug verwenden, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Werkzeugen ist gute Software-Entwicklungspraxis! Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub. Um mehr zu erfahren, siehe [Git lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Zentrale Konzepte

Git (und GitHub) verwenden Repositories ("Repos") als das oberste "Behältnis" zur Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält. Repositories können öffentlich sein, in diesem Fall ist der Code für alle im Internet sichtbar, oder privat, in diesem Fall sind sie auf die besitzende Organisation oder das Benutzerkonto beschränkt.

Alle Arbeiten werden an einem bestimmten "Zweig" des Codes in Ihrem Repo durchgeführt. Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie einen "Commit" erstellen, der alle Änderungen seit Ihrem letzten Commit am aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig namens "main" erstellt. Sie können andere Zweige davon mit git abspalten, die zunächst alle Commits des ursprünglichen Zweigs haben. Sie können Zweige separat durch Hinzufügen von Commits entwickeln und dann später mit einer "Pull Request" (PR) auf GitHub Änderungen von einem Zweig zu einem anderen zusammenführen. Sie können auch git verwenden, um zwischen Zweigen auf Ihrem lokalen Computer zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Neben Zweigen ist es möglich, `Tags` auf einem beliebigen Zweig zu erstellen und diesen Zweig später an diesem Punkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositories auf GitHub

Zuerst erstellen wir ein Konto auf GitHub (dies ist kostenlos). Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" zur Speicherung der [Lokalen Bibliothek Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir es im Rest dieses Tutorials entwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+**-Link in der oberen Symbolleiste und wählen **Neues Repository** aus.
3. Füllen Sie alle Felder auf diesem Formular aus. Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliothekswebsite geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (die Standardeinstellung).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar. Denken Sie daran, keine Anmeldeinformationen oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahliste aus. MDN verwendet für dieses Beispiel "Creative Commons Zero v1.0 Universal".
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Sobald das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code**-Schaltfläche. Im Abschnitt "Klonen" wählen Sie den "HTTPS"-Tab aus und kopieren die URL. Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
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

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung comitten und das Repository auf GitHub aktualisieren. Dies ist eine nützliche Änderung, hauptsächlich tun wir es jedoch, um Ihnen zu zeigen, wie Sie Änderungen von GitHub abrufen, lokal vornehmen und dann auf GitHub pushen.

1. In der Eingabeaufforderung/dem Terminal holen wir zuerst (holen) und ziehen dann (holen und in den aktuellen Zweig integrieren) die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir gerade den Quellcode geklont haben und wissen, dass er auf dem neuesten Stand ist. Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "Ursprung" ist ein _Remote_, das den Standort des Repos repräsentiert, wo sich der Quellcode befindet, und "main" ist der Zweig. Sie können überprüfen, ob der Ursprung unser Repo auf GitHub ist, indem Sie den Befehl `git remote -v` verwenden.

2. Als nächstes erstellen wir einen neuen Zweig, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einen Zweig als den aktuellen Zweig auszuwählen, an dem Sie arbeiten. Das `-b`-Flag zeigt an, dass wir beabsichtigen, einen neuen Zweig mit dem Namen "update_gitignore" zu erstellen, anstatt einen bestehenden Zweig mit diesem Namen auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, kopieren Sie die folgenden Zeilen an das Ende davon und speichern Sie es dann:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien zu kennzeichnen, die nicht automatisch von git gesichert werden sollen, z. B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) dem "Staging-Bereich" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `committen` möchten, korrekt sind (Sie möchten Quellcodedateien einbeziehen, keine Binärdateien, temporären Dateien usw.). Es sollte ein wenig wie die folgende Liste aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, comitten Sie die Dateien in Ihr lokales Repo unter Verwendung des `-m`-Flags, um eine kurze aber klare Commit-Nachricht anzugeben. Dies entspricht dem Unterzeichnen der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Wir können den `update_gitignore`-Zweig in das "origin"-Repo (GitHub) mit dem folgenden Befehl pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite. Ein Banner sollte erscheinen, mit einer Schaltfläche, ob Sie den kürzlich hochgeladenen Zweig "vergleichen und eine Pull-Anfrage stellen" möchten. Wählen Sie die Schaltfläche und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und dann zusammenzuführen.

   ![Banner, der fragt, ob der Benutzer kürzlich genehmigte Änderungen vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach der Zusammenführung enthält der "Haupt"-Zweig im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen add/commit/push-Zyklus verwenden.

Im nächsten Thema werden wir dieses Repo verwenden, um unseren lokalen Bibliotheks-Website-Quellcode zu speichern.

## Weitere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-fähigen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, weil einige gängige Python-Linters (wie `pylint`) fälschlicherweise Fehler in den Standarddateien, die für Django generiert wurden, berichten.

## Testen Ihrer Installation

Der obige Test funktioniert, aber er macht nicht sehr viel Spaß. Ein interessanterer Test ist es, ein Skelett-Projekt zu erstellen und es arbeiten zu sehen. Dazu navigieren Sie zuerst in Ihrem Eingabeaufforderung/Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und wechseln Sie in diesen.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Skelett-Site namens "_mytestsite_" mit dem **django-admin**-Werkzeug wie gezeigt erstellen. Nach dem Erstellen der Site können Sie in den Ordner navigieren, in dem Sie das Hauptskript zur Verwaltung von Projekten finden, genannt **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ innerhalb dieses Ordners unter Verwendung von **manage.py** und des `runserver`-Befehls ausführen, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unzuverlässige Migration(en)" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie im lokalen Webbrowser zu folgender URL navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Site sehen, die so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und betriebsbereit.

Im Testabschnitt haben Sie außerdem kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und diese im Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess, um eine einfache, aber vollständige Webanwendung zu erstellen.

## Siehe auch

- [Schnellanleitung zur Installation](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Anleitung zur Installation von Django — Komplettanleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
