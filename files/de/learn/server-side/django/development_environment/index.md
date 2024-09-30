---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn/Server-side/Django/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen alles bieten, was Sie benötigen, um mit der Entwicklung von Django-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse im Umgang mit einem Terminal/der Kommandozeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zu haben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie für die Entwicklung und das Testen von Django-Anwendungen verwenden können, bevor Sie sie in eine Produktionsumgebung überführen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d. h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen im Webbrowser Ihres Computers zu testen.

Es gibt andere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDE zum Bearbeiten von Code, Linters zur automatischen Formatierung usw. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Was sind die Django-Einrichtungsoptionen?

Django ist äußerst flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, aus dem Python Package Index (PyPi) und in vielen Fällen aus der Paketmanager-Anwendung des Host-Computers installiert werden.
- Mit einer von mehreren Datenbanken konfiguriert werden, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder in separaten Python-Virtual-Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine etwas andere Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Auswahlmöglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten können, und diese Einrichtung wird im gesamten restlichen Modul vorausgesetzt.

> [!NOTE]
> Weitere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#windows).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen. Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrem Ziel-Django-Release unterstützt wird. Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Veröffentlichung.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi), mit dem _pip_-Tool. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise ziemlich alt ist und nur in die System-Python-Umgebung installiert werden kann (was möglicherweise nicht gewünscht ist).
- Aus dem Quellcode installieren. Sie können die neueste brandaktuelle Version von Django aus dem Quellcode beziehen und installieren. Dies ist nicht für Anfänger empfohlen, aber erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django aus PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie für Produktion und Entwicklung dieselbe Datenbank auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational-Mapper (ORM) abstrahiert, gibt es dennoch [potentielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) werden wir die _SQLite_-Datenbank verwenden, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und kann kein hohes Maß an gleichzeitigen Zugriffen unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass es SQLite verwendet, wenn Sie Ihr Website-Projekt mit den Standardtools (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Installation systemweit oder in einer Python-Virtual-Umgebung?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Während Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie nur eine bestimmte Version jedes Pakets gleichzeitig installieren.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können möglicherweise miteinander in Konflikt geraten (d. h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in der Standard-/globalen Umgebung installieren, können Sie auf dem Computer nur eine Version von Django verwenden. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (mit der neuesten Version von Django), während Sie weiterhin Websites pflegen, die auf älteren Versionen beruhen.

Daher führen erfahrene Python/Django-Entwickler Python-Apps in unabhängigen _Python-Virtual-Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-Virtual-Umgebungen!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen, wie man dies im Folgenden macht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben. Sie benötigen auch das [Python Package Index](https://pypi.org/)-Tool — _pip3_, das verwendet wird, um Python-Pakete/Bibliotheken zu verwalten (installieren, aktualisieren und entfernen), die von Django und Ihren anderen Python-Anwendungen verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch aus dem eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit der entsprechenden plattformabhängigen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12. Sie können dies überprüfen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Allerdings ist das Python Package Index-Tool (_pip3_), das Sie zur Installation von Paketen für Python 3 (einschließlich Django) benötigen, **nicht** standardmäßig verfügbar. Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen für dieses Tutorial nicht die neueste Python-Version verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 wird in älteren Versionen enthalten). Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der aktuellsten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und nach der Python-Versionsnummer überprüfen.

Sie können ähnlich überprüfen, dass _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es leicht (zusammen mit dem _pip3_-Tool) von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der aktuellsten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen.
3. Achten Sie darauf, das Kästchen mit der Bezeichnung "Add Python to PATH" zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert standardmäßig _pip3_ (den Python-Paketmanager). Sie können die installierten Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der oben genannte Befehl funktioniert. Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es dem Systempfad hinzuzufügen. Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kästchen "Add Python to environment variables" aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die einfachen Befehle `python` und `pip` generell verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen. Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Version "3"-Zeichenfolge, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie auf Linux/macOS die Befehle mit `python3` und `pip3` und auf Windows mit `py -3` und `py -3 -m pip` präfixen, um Version 3 zu verwenden:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die plattformspezifischen Befehle, da sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-Virtual-Umgebung

Die Bibliotheken, die wir verwenden werden, um unsere virtuellen Umgebungen zu erstellen, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das Werkzeug [virtualenv](https://virtualenv.pypa.io/en/latest/) verwenden. Die Wrapper-Tools erstellen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Virtual Environment-Software

#### Ubuntu Virtual Environment-Einrichtung

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder folgen Sie den Anweisungen unten.

Installieren Sie das Werkzeug mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese geben den Speicherort an, an dem die virtuellen Umgebungen gespeichert werden sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, ist etwas zu überprüfen, ob sich Python und das Skript an dem erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie sehen, dass eine Menge Skripte ausgeführt werden, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung erstellen.

#### macOS Virtual Environment-Einrichtung

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau die gleiche wie auf Ubuntu (auch hier können Sie den Anweisungen aus dem [offiziellen Installationsleitfaden](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das gebündelte _virtualenv_) wie angezeigt mit _pip_.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind die gleichen Zeilen wie bei Ubuntu). Wenn Sie die _zsh shell_ verwenden, wird die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, wird es eine versteckte Datei namens **.bash_profile** sein. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht vorhanden ist.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, ist etwas zu überprüfen, ob sich Python und das Skript an dem erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Ein Installationstest auf macOS ergab zum Beispiel die folgenden Zeilen als notwendig in der Startdatei:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die korrekten Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Aufruf im Terminal machen:

```bash
source ~/.bash_profile
```

An diesem Punkt sollten Sie möglicherweise sehen, dass eine Menge Skripte ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten jetzt in der Lage sein, mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden können, um sie zu bearbeiten, können Sie sie auch im Terminal mit nano öffnen.
>
> Wenn Sie bash verwenden, sehen die Befehle etwa so aus:
>
> ```bash
> cd ~  # Zu meinem Home-Verzeichnis navigieren
> ls -la #Der Inhalt des Verzeichnisses sollte aufgelistet werden. Sie sollten .bash_profile sehen
> nano .bash_profile #Datei im Nano-Texteditor öffnen, im Terminal
> # Am Ende der Datei scrollen und die obigen Zeilen kopieren
> # Mit Strg+X nano beenden, Y wählen, um die Datei zu speichern.
> ```

#### Windows Virtual Environment-Einrichtung

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Werkzeug Informationen zu virtuellen Umgebungen speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist das Arbeiten mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie mit dem `mkvirtualenv`-Befehl eine neue virtuelle Umgebung erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, dass die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, ist die neue virtuelle Umgebung aktiv — Sie können dies daran erkennen, dass der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist für Windows/macOS ähnlich).

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
> Von nun an in diesem Artikel (und tatsächlich im Modul) bitten wir Sie, davon auszugehen, dass alle Befehle innerhalb einer Python-Virtual-Umgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Dokumentation des Tools, aber das sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden der aktuellen Python-Virtual-Umgebung
- `workon` — Verfügbare virtuelle Umgebungen auflisten
- `workon name_of_environment` — Die angegebene Python-Virtual-Umgebung aktivieren
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
> Wenn der obige Windows-Befehl kein Django-Modul anzeigt, versuchen Sie:
>
> ```bash
> py -m django --version
> ```
>
> In Windows werden _Python 3_-Skripte standardmäßig durch Voranstellen des Befehls mit `py -3` gestartet, obwohl dies je nach Ihrer spezifischen Installation variieren kann. Versuchen Sie, den `-3`-Modifikator wegzulassen, wenn Sie Probleme mit Befehlen haben. In Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet das _Linux_-Kommando zum Aufrufen von Python 3 (`python3`). Wenn Sie unter _Windows_ arbeiten, ersetzen Sie diesen Präfix durch: `py -3`

## Source-Code-Verwaltung mit Git und GitHub

Werkzeuge zur Quellcode-Verwaltung (SCM) und Versionierung ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie es benötigen.

Es gibt viele verschiedene SCM-Tools, darunter Git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab. Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloud-basierten Hosting-Dienste für Quellcode, hosten und das **git**-Tool verwenden, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraxis! Diese Anleitungen bieten eine grundlegende Einführung in Git und GitHub. Weitere Informationen finden Sie in [Git lernen](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Eimer" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält. Repositories können öffentlich sein, in diesem Fall ist der Code für alle im Internet sichtbar, oder privat, in diesem Fall sind sie auf die besitzende Organisation oder das Benutzerkonto beschränkt.

Alle Arbeiten werden an einem bestimmten Code-"Branch" in Ihrem Repo durchgeführt. Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit des aktuellen Branches speichert.

Das Repo wird mit einem Standard-Branch namens "main" erstellt. Sie können mit Git andere Branches davon abzweigen, die zu Beginn dieselben Commits wie der ursprüngliche Branch haben. Sie können Branches separat weiterentwickeln, indem Sie Commits hinzufügen, und später Änderungen von einem Branch zu einem anderen mergen, indem Sie eine "Pull Request" (PR) auf GitHub verwenden. Sie können auch Git verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `tags` auf einem beliebigen Branch zu erstellen und diesen Branch später an diesem Punkt wiederherzustellen.

### Ein Konto und ein Repository auf GitHub erstellen

Zuerst werden wir ein kostenloses Konto auf GitHub erstellen. Mit einem kostenlosen Konto können Sie keine privaten Repos erstellen, aber Sie können so viele _öffentliche_ Repositories ("Repos") erstellen, wie Sie möchten. Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um den [Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir es im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Nachdem Sie sich angemeldet haben, klicken Sie im oberen Menü auf den Link **+** und wählen Sie **Neues Repository**.
3. Füllen Sie alle Felder auf diesem Formular aus. Obwohl diese nicht obligatorisch sind, wird dies dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library-Website in Django geschrieben".
   - Wählen Sie "Öffentlich" für das Repository (die Standardeinstellung).

     > [!WARNING]
     > Dies macht _alle_ Quellcodes sichtbar. Denken Sie daran, keine Anmeldedaten oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Lizenz hinzufügen_ aus. MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Dieses Repository mit einer README initialisieren**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**. Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" aus und kopieren Sie die URL. Wenn Sie den Repositoriumsnamen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie können Versionen für verschiedene Plattformen [hier](https://git-scm.com/downloads) finden).
3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dies erstellt das Repository im aktuellen Verzeichnis.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen ändern und synchronisieren

Jetzt werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung committen und das Repository auf GitHub aktualisieren. Dies ist eine nützliche Änderung, aber hauptsächlich machen wir es, um Ihnen zu zeigen, wie Sie Änderungen von GitHub abrufen, lokal Änderungen vornehmen und dann an GitHub pushen.

1. In der Eingabeaufforderung/dem Terminal holen wir zunächst die neueste Version des Quellcodes von GitHub ab ("fetch") und ziehen sie dann (holen und in den aktuellen Branch mergen):

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er aktuell ist. Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Das "origin" ist ein _Remote_, das den Standort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch. Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl `git remote -v` verwenden.

2. Als nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einen bestimmten Branch als aktuellen Arbeits-Branch auszuwählen. Das `-b`-Flag gibt an, dass wir beabsichtigen, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, kopieren Sie die folgenden Zeilen an das Ende und speichern Sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von Git gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporären Dateien usw.). Es sollte ein wenig wie die unten gezeigte Liste aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, committen Sie die Dateien in Ihr lokales Repo, indem Sie das `-m`-Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben. Dies entspricht der schriftlichen Bestätigung der Änderungen und ihrer Aufnahme als offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert. Wir können den Branch `update_gitignore` mittels des folgenden Befehls an das "origin"-Repo (GitHub) übergeben:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen, mit einer Schaltfläche, auf die Sie klicken können, wenn Sie den soeben hochgeladenen Branch "vergleichen und einen Pull-Request erstellen" möchten. Wählen Sie die Schaltfläche aus und folgen Sie dann den Anweisungen, um eine Pull-Request zu erstellen und dann zu mergen.

   ![Banner, in dem gefragt wird, ob der Benutzer kürzlich vorgenommene Branch-Updates vergleichen und mergen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen wird der "main"-Branch im Repo auf GitHub Ihre Änderungen an `.gitignore` enthalten.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Zyklus aus "add/commit/push" verwenden.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer Local Library-Website zu speichern.

## Andere Python-Werkzeuge

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Werkzeuge, wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-verständlichen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linters (wie `pylint`) inkorrekt Fehler in den standardmäßig für Django generierten Dateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, aber er macht nicht viel Spaß. Ein interessanterer Test ist, ein Skelettprojekt zu erstellen und es in Aktion zu sehen. Gehen Sie dazu zuerst im Terminal/Eingabeaufforderung zu dem Ort, an dem Sie Ihre Django-Anwendungen speichern möchten. Erstellen Sie einen Ordner für Ihre Test-Site und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Skelett-Site namens "_mytestsite_" mit dem Tool **django-admin** erstellen, wie gezeigt. Nach der Erstellung der Site können Sie in den Ordner navigieren, in dem Sie das Hauptskript zum Verwalten von Projekten, **manage.py**, finden.

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
> Sie können die Warnungen über "nicht angewendete Migration(en)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zur folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Site sehen, die so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und in Betrieb genommen.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und diese mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) in Ihrem Browser ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und erstellen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schneller Installationsleitfaden](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Anleitung zur Installation von Django — vollständiger Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie Django entfernt werden kann
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
