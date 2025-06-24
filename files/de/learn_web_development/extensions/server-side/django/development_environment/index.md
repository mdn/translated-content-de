---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können — unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte dieser Artikel Ihnen alles Nötige bieten, um mit der Entwicklung von Django-Anwendungen zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal bzw. der Befehlszeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installiert.
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

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten und bietet einen Überblick über einige Ihrer Einrichtungs- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zur Entwicklung und zum Testen von Django-Anwendungen verwenden können, bevor Sie diese in einer produktiven Umgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zur Erstellung und Bearbeitung von Django-Projekten, zusammen mit einem einfachen _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Browser zu testen.

Es gibt weitere periphere Werkzeuge, die oft Teil der Entwicklungsumgebung sind und die wir hier nicht abdecken. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder ein IDE zur Codebearbeitung, Linters zur automatischen Formatierung usw. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Django-Setup-Optionen gibt es?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, vom Python Package Index (PyPi) und in vielen Fällen aus der Paketmanager-Anwendung des Hostcomputers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise ebenfalls separat installiert und konfiguriert werden müssen.
- Im Hauptsystem Python-Umgebung oder innerhalb separater Python-Virtualumgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Möglichkeiten. Für den Rest des Artikels zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im gesamten restlichen Modul vorausgesetzt.

> [!NOTE]
> Weitere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [entsprechenden Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen. Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede von Ihrem Ziel-Django-Release unterstützte Python-Version verwenden. Für Django 5.0 sind die zulässigen Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version des unterstützten Python-Releases.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi), unter Verwendung des _pip_-Werkzeugs. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version ziemlich alt sein kann und nur in die System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Installieren Sie es aus dem Quellcode. Sie können die neueste Cutting-Edge-Version von Django aus dem Quellcode erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist aber erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie man Django von PyPi installiert, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die PostgreSQL, MariaDB, MySQL, Oracle und SQLite Datenbanken, und es gibt Bibliotheken aus der Community, die unterschiedliche Unterstützungsniveaus für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie dieselbe Datenbank sowohl für die Produktion als auch für die Entwicklung auswählen (obwohl Django viele der Datenbankunterschiede mit Hilfe seines Objekt-Relation Mapping (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist für die Verwendung als leichtgewichtige Datenbank vorgesehen und kann keinen hohen Grad an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass es SQLite verwendet, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python-Virtualumgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes geteilt wird. Während Sie beliebige Python-Pakete in der Umgebung installieren können, können Sie nur eine bestimmte Version jedes Pakets gleichzeitig installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können möglicherweise miteinander in Konflikt geraten (d.h. wenn sie von unterschiedlichen Versionen desselben Pakets abhängen).

Wenn Sie Django in die Standard- oder globale Umgebung installieren, können Sie nur eine Version von Django auf dem Computer verwenden. Dies kann ein Problem sein, wenn Sie neue Websites erstellen (mit der neuesten Version von Django), während Sie gleichzeitig Websites pflegen, die auf älteren Versionen basieren.

Aus diesem Grund führen erfahrene Python-/Django-Entwickler Python-Anwendungen häufig in unabhängigen _Python-Virtualumgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklerteam selbst empfiehlt, dass Sie Python-Virtualumgebungen verwenden!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie das geht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben. Sie benötigen auch das [Python Package Index](https://pypi.org/) Tool — _pip3_ —, das verwendet wird, um Python-Pakete/Bibliotheken, die von Django und Ihren anderen Python-Anwendungen verwendet werden, zu verwalten (installieren, aktualisieren und entfernen).

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Versionen von Python vorhanden sind, und wie Sie bei Bedarf neue Versionen installieren können, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch vom eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mithilfe der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12. Sie können dies überprüfen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index-Tool (_pip3_), das Sie benötigen, um Pakete für Python 3 (einschließlich Django) zu installieren, ist jedoch standardmäßig **nicht** verfügbar. Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version [die von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen nicht die neueste Python-Version für dieses Tutorial verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält Python 3 nicht standardmäßig (Python 2 ist in älteren Versionen enthalten). Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Nun können Sie die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und auf die Python-Versionsnummer prüfen.

Sie können ähnlich überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält Python standardmäßig nicht, aber Sie können es (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen.
3. Achten Sie darauf, das Kontrollkästchen "Python zu PATH hinzufügen" zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert standardmäßig _pip3_ (den Python-Paketmanager). Sie können installierte Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie für die obigen Befehle benötigen.
> Sollten Sie jedoch eine Nachricht erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Ändern" auswählen und das Kontrollkästchen "Python zu Umgebungsvariablen hinzufügen" auf der zweiten Seite aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können die nackten Befehle `python` und `pip` im Allgemeinen verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen. Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Zeichenfolge der Version "3", wenn Sie `-V` mit den nackten Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zum Verwenden der Version 3 die Befehle mit `python3` und `pip3` unter Linux/macOS, und `py -3` und `py -3 -m pip` unter Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die plattformspezifischen Befehle, wie sie auf den meisten Systemen funktionieren.

## Verwendung von Django in einer Python-Virtualumgebung

Die Bibliotheken, die wir zur Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die ihrerseits beide das [virtualenv](https://virtualenv.pypa.io/en/latest/)-Werkzeug verwenden. Die Wrapper-Tools schaffen eine konsistente Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Software für virtuelle Umgebungen

#### Einrichtung der virtuellen Umgebung auf Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Sie können [die offizielle Installationsanleitung](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) überprüfen oder den untenstehenden Anweisungen folgen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Heimatverzeichnis). Diese setzen den Ort, an dem die virtuellen Umgebungen sein sollten, den Ort Ihrer Entwicklungsprojektdirektoren und den Ort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, ist eine Möglichkeit, zu überprüfen, ob Python und das Skript sich am erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Orte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie einen Haufen von Skripten sehen, die wie unten gezeigt ausgeführt werden:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung anlegen.

#### Einrichtung der virtuellen Umgebung auf macOS

Die Einrichtung von _virtualenvwrapper_ auf macOS ist fast genau dieselbe wie auf Ubuntu (auch hier können Sie den Anweisungen entweder im [offiziellen Installationshandbuch](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das gebündelte _virtualenv_) mit _pip_ wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (diese sind die gleichen Zeilen wie für Ubuntu). Wenn Sie die _zsh-Shell_ verwenden, befindet sich die Startdatei in einer versteckten Datei namens **.zshrc** in Ihrem Heimverzeichnis. Wenn Sie die _bash-Shell_ verwenden, befindet sie sich in einer versteckten Datei namens **.bash_profile**. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `source /usr/local/bin/virtualenvwrapper.sh` zeigen auf den normalen Installationsort von Python 3 und auf den normalen Speicherort des `virtualenvwrapper.sh`-Skripts. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, ist eine Möglichkeit zu prüfen, ob Python und das Skript sich am erwarteten Ort befinden (und dann die Startdatei entsprechend ändern).
>
> Eine Installationstest auf macOS ergab beispielsweise, dass die folgenden Zeilen in der Startdatei notwendig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Orte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Laden Sie dann die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

An diesem Punkt sollten Sie eine Reihe von Skripten, die wie die Skripte bei der Ubuntu-Installation sind, sehen. Sie sollten jetzt in der Lage sein, mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden können, können Sie diese auch im Terminal mit Nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle etwa so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Heimverzeichnis
> ls -la #Listen Sie den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei mit dem Nano-Texteditor im Terminal
> # Scroll zum Ende der Datei und kopiere die obigen Zeilen hinein
> # Mit Strg+X, um Nano zu verlassen, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung der virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist sogar noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zur virtuellen Umgebung speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist, den folgenden Befehl in der Befehlszeile auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung anlegen.

### Erstellung einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Nun können Sie mit dem Befehl `mkvirtualenv` eine neue virtuelle Umgebung anlegen. Während dieser Befehl ausgeführt wird, sehen Sie die Umgebung (was Sie sehen ist etwas plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein — Sie können dies daran erkennen, dass der Start der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

```bash
mkvirtualenv my_django_environment
```

Sie sollten eine Ausgabe sehen, die dieser ähnelt:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Jetzt befinden Sie sich in der virtuellen Umgebung, in der Sie Django installieren und mit der Entwicklung beginnen können.

> [!NOTE]
> Ab sofort in diesem Artikel (und indeed das Modul) davon aus, dass alle Befehle innerhalb einer Python-Virtualumgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt nur einige andere nützliche Befehle, die Sie wissen sollten (es gibt mehr in der Werkzeugdokumentation, aber das sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden der aktuellen Python-Virtualumgebung
- `workon` — Auflisten verfügbarer virtueller Umgebungen
- `workon name_of_environment` — Aktivieren der angegebenen Python-Virtualumgebung
- `rmvirtualenv name_of_environment` — Entfernen der angegebenen Umgebung.

## Installation von Django

Sobald Sie eine virtuelle Umgebung erstellt, und `workon` aufgerufen haben, um diese zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können testen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet lediglich, dass Python das Django-Modul finden kann):

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
> In Windows werden _Python 3_-Skripte gestartet, indem Sie den Befehl mit `py -3` voranstellen, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3`-Modifier auszulassen, wenn Sie bei Befehlen auf Probleme stoßen.
> In Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl für das Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Werkzeuge zur Quellcodeverwaltung (SCM) und Versionskontrollsysteme ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "erkanntem guten Code" zu teilen, wenn Sie es benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab. Für dieses Tutorial werden wir unseren Code auf [GitHub](https://github.com/) hosten, einem der beliebtesten cloudbasierten Quellcode-Hosting-Dienste, und das **git**-Tool verwenden, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraxis!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu lernen, sehen Sie sich [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) an.

### Hauptkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberste "Behälter" zum Speichern von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält. Repositories können öffentlich sein, in diesem Fall ist der Code für alle im Internet sichtbar, oder privat, in diesem Fall sind sie auf die besitzende Organisation oder das Benutzerkonto beschränkt.

Alle Arbeiten werden in einem bestimmten "Zweig" des Codes in Ihrem Repo durchgeführt. Wenn Sie einige Änderungen an einem Zweig sichern möchten, können Sie einen "commit" erstellen, der alle Änderungen seit Ihrem letzten Commit am aktuellen Zweig speichert.

Das Repo wird mit einem Standardzweig namens "main" erstellt. Sie können mit git andere Zweige davon abspalten, die zunächst alle Commits des ursprünglichen Zweigs enthalten. Sie können Zweige getrennt voneinander weiterentwickeln, indem Sie Commits hinzufügen und dann später eine "Pull-Anfrage" (PR) auf GitHub verwenden, um Änderungen von einem Zweig in einen anderen zu übertragen. Sie können auch git verwenden, um zwischen Zweigen auf Ihrem lokalen Computer zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Neben Zweigen ist es möglich, `tags` in einem beliebigen Zweig zu erstellen und diesen Zweig später an jenem Punkt abzurufen.

### Erstellen Sie ein Konto und ein Repository auf GitHub

Zunächst erstellen wir ein Konto auf GitHub (dies ist kostenlos). Dann erstellen und konfigurieren wir ein Repository namens "django_local_library", um die [Lokale Bibliotheks-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zu speichern, während wir es im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Nachdem Sie sich angemeldet haben, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen **Neues Repository**.
3. Füllen Sie alle Felder dieses Formulars aus. Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokale Bibliotheks-Website geschrieben in Django".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dadurch wird der gesamte Quellcode sichtbar.
     > Denken Sie daran, in Ihr Repo keine Anmeldeinformationen oder andere sensible Materialien zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahliste.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialisieren Sie dieses Repository mit einem README**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Das Repo auf Ihren lokalen Computer klonen

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code** Schaltfläche. Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" aus und kopieren Sie die URL. Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer ([offizielle Git Download-Anleitung](https://git-scm.com/downloads)).
3. Öffnen Sie die Befehlszeile/das Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dies wird das Repository im aktuellen Verzeichnis erstellen.

4. Navigieren Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen ändern und synchronisieren

Nun werden wir die `.gitignore`-Datei auf dem lokalen Computer ändern, die Änderung festschreiben und das Repository auf GitHub aktualisieren. Dies ist eine nützliche Änderung, aber hauptsächlich tun wir es, um Ihnen zu zeigen, wie man Änderungen von GitHub überträgt, lokal Änderungen macht und diese dann an GitHub überträgt.

1. In der Befehlszeile/dem Terminal "fetch" (holen) wir zuerst und dann ziehen (holen und in den aktuellen Zweig integrieren) die neueste Version des Quellcodes von GitHub:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir den Quellcode gerade geklont haben und wissen, dass er auf dem neuesten Stand ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, das den Ort des Repos repräsentiert, an dem der Quellcode sich befindet, und "main" ist der Zweig.
   Sie können überprüfen, ob der Origin unser Repo auf GitHub ist mit dem Befehl: `git remote -v`.

2. Als nächstes checken wir einen neuen Zweig aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der `checkout`-Befehl wird verwendet, um einen bestimmten Zweig auszuwählen, der gerade bearbeitet wird.
   Das `-b` Flag weist darauf hin, dass wir beabsichtigen, einen neuen Zweig namens "update_gitignore" zu erstellen, anstatt einen bestehenden mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore**-Datei, kopieren Sie die folgenden Zeilen ans Ende und speichern Sie ab:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollten, wie temporäre Dateien und andere Erzeugnisse des Build-Prozesses.

4. Verwenden Sie den `add`-Befehl, um alle geänderten Dateien (die nicht von der **.gitignore** ausgeschlosssen sind) in den "Staging-Bereich" für den aktuellen Zweig hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den `status`-Befehl, um zu überprüfen, ob alle Dateien, die Sie `commit` (festschreiben) wollen, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporäre Dateien etc.).
   Es sollte ein bisschen wie die folgende Auflistung aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit` die Dateien in Ihr lokales Repo, indem Sie das `-m` Flag verwenden, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht der Unterzeichnung der Änderungen und deren offizieller Integration in das lokale Repo.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Zu diesem Zeitpunkt wurde das Remote-Repo nicht geändert.
   Wir können den `update_gitignore`-Zweig an das "origin" Repo (GitHub) mit dem folgenden Befehl übertragen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, wo Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einer Schaltfläche, die Sie drücken können, wenn Sie den frisch hochgeladenen Branch "vergleichen und anfordern" möchten.
   Wählen Sie die Schaltfläche aus und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und dann zu mergen.

   ![Banner fragt, ob der Benutzer die letzten Branch-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Mergen enthält der "main"-Zweig des Repos auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich die Dateien ändern, indem Sie diesen Zyklus von add/commit/push verwenden.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer lokalen Bibliotheks-Website zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Werkzeuge, wie Linters (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige gängige Python-Linter (wie `pylint`) fälschlicherweise Fehler in den Standarddateien, die für Django generiert werden, melden.

## Ihre Installation testen

Der obige Test funktioniert, aber er macht nicht sehr viel Spaß. Ein interessanterer Test ist es, ein Grundgerüstprojekt zu erstellen und es in Aktion zu sehen. Um dies zu tun, navigieren Sie zuerst im Kommandozeilen-/Terminalfenster zu dem Ort, an dem Sie Ihre Django-Anwendungen speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Dann können Sie eine neue Skelettseite namens "_mytestsite_" mit dem **django-admin** Tool erstellen, wie gezeigt. Nach der Erstellung der Seite können Sie in den Ordner navigieren, in dem Sie das Hauptskript zur Verwaltung von Projekten namens **manage.py** finden werden.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ innerhalb dieses Ordners mit **manage.py** und dem `runserver`-Befehl, wie gezeigt, ausführen.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht angewendete Migration(en)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie die folgende URL in Ihrem lokalen Webbrowser aufrufen: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die ungefähr so aussieht:

![Die Startseite der Skelett-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und zum Laufen gebracht.

Im Abschnitt "Testen" haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und diese in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess, indem wir eine einfache, aber vollständige Webanwendung erstellen.

## Siehe auch

- [Schnellinstallationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Vollständige Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — Behandelt auch, wie man Django entfernt
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
