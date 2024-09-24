---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn/Server-side/Django/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen alles bieten, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/einer Befehlszeile und wie Sie Softwarepakete auf dem Betriebssystem des Entwicklungscomputers installieren.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer eingerichtet zu haben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie mit der Entwicklung von Webanwendungen beginnen können. In diesem Abschnitt wird erklärt, was Sie mit der Entwicklungsumgebung erhalten, und es wird ein Überblick über einige Ihrer Setup- und Konfigurationsoptionen gegeben. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie diese testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer, die Sie zur Entwicklung und zum Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale (d. h. auf Ihrem Computer, nicht auf einem externen Webserver) Django-Webanwendungen in Ihrem Webbrowser zu testen.

Es gibt andere Hilfswerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln werden. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder IDE zum Bearbeiten von Code, Linter zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Was sind die Django-Setup-Optionen?

Django ist extrem flexibel in Bezug auf Installation und Konfiguration. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus der Quelle, vom Python Package Index (PyPi) und in vielen Fällen vom Paketmanager der Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise auch separat installiert und konfiguriert werden müssen.
- In der Hauptsystem-Python-Umgebung oder innerhalb separater Python-Virtualumgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine etwas andere Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Auswahlmöglichkeiten. Im restlichen Artikel zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und diese Einrichtung wird im restlichen Modul vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen werden in der offiziellen Django-Dokumentation behandelt. Wir verlinken auf die [relevanten Dokumente unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anweisungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Ziel-Django-Version unterstützt wird.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Versionen.

#### Wo können wir Django herunterladen?

Es gibt drei Orte, um Django herunterzuladen:

- Das Python Package Repository (PyPi), mithilfe des _pip_-Tools. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die gepackte Version ziemlich alt sein kann und nur in die System-Python-Umgebung installiert werden kann (was möglicherweise nicht das ist, was Sie möchten).
- Installation aus der Quelle. Sie können die neueste, experimentelle Version von Django aus der Quelle erhalten und installieren. Dies wird Anfängern nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, selbst zu Django beizutragen.

Dieser Artikel zeigt, wie Sie Django von PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützung für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie dieselbe Datenbank sowohl für die Produktion als auch für die Entwicklung auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es immer noch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden sollten).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank vorgesehen und kann ein hohes Maß an Parallelität nicht unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich nur gelesen werden.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade anfangen, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Systemweit oder in einer Python-Virtualumgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allem Python3-Code geteilt wird. Während Sie jede beliebige Python-Pakete in der Umgebung installieren können, können Sie immer nur eine bestimmte Version jedes Pakets zu einer Zeit installieren.

> [!NOTE]
> In die globale Umgebung installierte Python-Anwendungen können möglicherweise miteinander in Konflikt stehen (z. B. wenn sie auf unterschiedliche Versionen desselben Pakets angewiesen sind).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie nur eine Version von Django auf dem Computer ansteuern. Dies kann ein Problem darstellen, wenn Sie neue Websites erstellen möchten (unter Verwendung der neuesten Version von Django), während Sie weiterhin Websites pflegen, die auf ältere Versionen angewiesen sind.

Erfahrene Python-/Django-Entwickler führen Python-Apps daher typischerweise in unabhängigen _Python-Virtualumgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzigen Computer. Das Django-Entwicklungsteam selbst empfiehlt die Verwendung von Python-Virtualumgebungen!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen unten, wie dies gemacht wird.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Sie benötigen auch das [Python Package Index](https://pypi.org/) Tool — _pip3_ — das für das Verwalten (Installieren, Aktualisieren und Entfernen) von Python-Paketen/Bibliotheken verwendet wird, die von Django und Ihren anderen Python-Apps genutzt werden.

In diesem Abschnitt wird kurz erklärt, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren können, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Abhängig von Ihrer Plattform können Sie Python/pip möglicherweise auch vom eigenen Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Ausgabe: Python 3.10.12
```

Das Python Package Index-Tool (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch standardmäßig **nicht** verfügbar.
Sie können _pip3_ im Bash-Terminal mit folgendem Befehl installieren:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie müssen für dieses Tutorial nicht die neueste Python-Version verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (auf älteren Versionen ist Python 2 enthalten).
Sie können dies überprüfen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Dies zeigt entweder die Python-Versionsnummer an, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was darauf hinweist, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) einfach von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Finden Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Sie können die erfolgreiche Installation nun bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch überprüfen, dass _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält nicht standardmäßig Python, aber Sie können es einfach (zusammen mit dem _pip3_-Tool) von [python.org](https://www.python.org/) installieren:

1. Laden Sie den erforderlichen Installer herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Version der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python durch Doppelklicken auf die heruntergeladene Datei und folgen Sie den Installationsanweisungen.
3. Achten Sie darauf, das Kontrollkästchen „Python zu PATH hinzufügen“ zu aktivieren.

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer integriert _pip3_ (den Python-Paketmanager) standardmäßig.
Sie können installierte Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie benötigen, damit der obige Befehl funktioniert.
> Wenn Sie jedoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, „Ändern“ auswählen und das Kontrollkästchen „Python zu Umgebungsvariablen hinzufügen“ auf der zweiten Seite aktivieren.

## Aufruf von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten unterschiedliche Befehle verwenden, um Python 3 und pip auf verschiedenen Betriebssystemen aufzurufen.

Wenn Sie nur Python 3 (und nicht Python 2) installiert haben, können die einfachen Befehle `python` und `pip` normalerweise verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie einen Versionsstring „3“, wenn Sie `-V` mit den einfachen Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie zur Verwendung von Version 3 Befehle mit `python3` und `pip3` unter Linux/macOS und mit `py -3` und `py -3 -m pip` unter Windows voranstellen:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anweisungen zeigen die spezifischen Befehle der Plattform, da sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-Virtualumgebung

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das [virtualenv](https://virtualenv.pypa.io/en/latest/) Tool verwenden. Die Wrapper-Werkzeuge schaffen eine einheitliche Schnittstelle zur Verwaltung von Schnittstellen auf allen Plattformen.

### Installation der Virtual-Environment-Software

#### Einrichtung einer virtuellen Umgebung unter Ubuntu

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ enthält) installieren. Die offizielle Installationsanleitung finden Sie [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder befolgen Sie die unten stehenden Anweisungen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei mit dem Namen **.bashrc** in Ihrem Home-Verzeichnis). Diese legen den Speicherort fest, an dem die virtuellen Umgebungen gespeichert werden sollen, den Speicherort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variablen `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` verweisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie überprüfen, ob Python und das Skript sich an den erwarteten Orten befinden (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei erneut, indem Sie den folgenden Befehl im Terminal ausführen:

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

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

#### Einrichtung einer virtuellen Umgebung auf macOS

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genau das gleiche wie auf Ubuntu (auch hier können Sie den Anweisungen entweder im [offiziellen Installationshandbuch](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das enthaltene _virtualenv_) wie gezeigt mit _pip_.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies sind dieselben Zeilen wie bei Ubuntu).
Wenn Sie die _zsh Shell_ verwenden, dann wird die Startdatei eine versteckte Datei mit dem Namen **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash Shell_ verwenden, dann wird es eine versteckte Datei mit dem Namen **.bash_profile** sein. Möglicherweise müssen Sie die Datei erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die Variable `VIRTUALENVWRAPPER_PYTHON` verweist auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` verweist auf den normalen Speicherort des Skripts `virtualenvwrapper.sh`. Wenn das _virtualenv_ nicht funktioniert, wenn Sie es testen, sollten Sie überprüfen, ob Python und das Skript sich an den erwarteten Orten befinden (und dann die Startdatei entsprechend ändern).
>
> Ein Test zur Installation auf macOS führte beispielsweise dazu, dass die folgenden Zeilen in der Startdatei notwendig waren:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` herausfinden.

Laden Sie dann die Startdatei erneut, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

An diesem Punkt sollten Sie möglicherweise eine Reihe von Skripten sehen, die ausgeführt werden (dieselben Skripte wie bei der Ubuntu-Installation). Sie sollten nun in der Lage sein, eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei nicht im Finder finden, können Sie diese auch im Terminal mit nano öffnen.
>
> Angenommen, Sie verwenden bash, sehen die Befehle so aus:
>
> ```bash
> cd ~  # Navigiere zu meinem Home-Verzeichnis
> ls -la # Liste den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnen Sie die Datei im Texteditor nano innerhalb des Terminals
> # Blättern Sie zum Ende der Datei und kopieren Sie die obigen Zeilen hinein
> # Verwenden Sie Strg+X, um nano zu beenden, wählen Sie Y, um die Datei zu speichern.
> ```

#### Einrichtung einer virtuellen Umgebung unter Windows

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist sogar noch einfacher als das Einrichten von _virtualenvwrapper_, da Sie nicht konfigurieren müssen, wo das Tool Informationen zu virtuellen Umgebungen speichert (es gibt einen Standardwert). Alles, was Sie tun müssen, ist den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen.

### Erstellen einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Jetzt können Sie eine neue virtuelle Umgebung mit dem Befehl `mkvirtualenv` erstellen. Während dieser Befehl ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformspezifisch). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein - Sie können dies sehen, weil der Anfang der Eingabeaufforderung der Name der Umgebung in Klammern sein wird (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Nun, da Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Ab sofort in diesem Artikel (und tatsächlich im Modul) nehmen Sie bitte an, dass Befehle innerhalb einer Python-Virtualumgebung wie der oben eingerichteten ausgeführt werden.

### Verwendung einer virtuellen Umgebung

Es gibt noch einige andere nützliche Befehle, die Sie kennen sollten (im Handbuch finden Sie mehr, aber das sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Beenden der aktuellen Python-Virtualumgebung
- `workon` — Auflisten der verfügbaren virtuellen Umgebungen
- `workon name_of_environment` — Aktivieren der angegebenen Python-Virtualumgebung
- `rmvirtualenv name_of_environment` — Entfernen der angegebenen Umgebung.

## Django installieren

Sobald Sie eine virtuelle Umgebung erstellt und mit `workon` betreten haben, können Sie _pip3_ verwenden, um Django zu installieren.

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
> Wenn der obige Windows-Befehl kein Django-Modul anzeigt, versuchen Sie es mit:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_ Skripte werden gestartet, indem der Befehl mit `py -3` vorangestellt wird, obwohl dies je nach spezifischer Installation variieren kann.
> Versuchen Sie, den `-3` Modifikator wegzulassen, wenn Sie Probleme mit den Befehlen haben.
> Unter Linux/macOS ist der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie diesen Präfix mit: `py -3`.

## Quellcodeverwaltung mit Git und GitHub

Werkzeuge zur Quellcodeverwaltung (SCM) und Versionskontrolle ermöglichen es Ihnen, Ihre Quellcodeversionen zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bewährtem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, darunter git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., und Cloud-SCM-Hostingquellen wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten Cloud-basierten Quellcode-Hostingdienste, und verwenden das **git**-Tool, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Praxis in der Softwareentwicklung!
> Die Anleitungen bieten eine grundlegende Einführung in git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Hauptkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als das oberste Level "Eimer" zur Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, in welchem Fall der Code für alle im Internet sichtbar ist, oder privat, in welchem Fall sie auf das organisations- oder kontoinhaberische Konto beschränkt sind.

Alle Arbeiten werden auf einem bestimmten "Branch" des Codes in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit an den aktuellen Branch speichert.

Das Repository wird mit einem Standard-Branch mit dem Namen "main" erstellt. Sie können mit git andere Branches von diesem aus erstellen, die zunächst alle Commits des Original-Branches enthalten.
Sie können Branches separat entwickeln, indem Sie Commits hinzufügen und dann später mit einer "Pull Request" (PR) auf GitHub Änderungen von einem Branch in einen anderen zusammenführen.
Sie können git auch verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln, um beispielsweise verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `Tags` auf einem beliebigen Branch zu erstellen und diesen Branch später zu diesem Zeitpunkt wiederherzustellen.

### Erstellen eines Kontos und eines Repositorys auf GitHub

Zuerst erstellen wir ein kostenloses Konto auf GitHub.
Mit einem kostenlosen Konto können Sie keine privaten Repos erstellen, aber Sie können so viele _öffentliche_ Repositories ("Repos") erstellen, wie Sie möchten.
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" zur Speicherung der [Lokalbibliotheks-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website), während wir es im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie eingeloggt sind, klicken Sie auf den **+** Link in der oberen Symbolleiste und wählen Sie **Neues Repository** aus.
3. Füllen Sie alle Felder auf diesem Formular aus.
   Obwohl diese nicht obligatorisch sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Lokalbibliotheks-Website in Django geschrieben".
   - Wählen Sie "Öffentlich" für das Repository (Standard).

     > [!WARNING]
     > Dadurch wird _alle_ Quellcode sichtbar gemacht.
     > Denken Sie daran, keine Anmeldedaten oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn, es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahlbox.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlbox.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Dieses Repository mit einem README initialisieren**.

4. Drücken Sie **Repository erstellen**.

   Das Repository wird erstellt und enthält lediglich die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, möchten wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt "Klonen" die Registerkarte "HTTPS" aus und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa folgendermaßen aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

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

Jetzt werden wir die `.gitignore` Datei auf dem lokalen Computer ändern, die Änderung committen und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, aber hauptsächlich machen wir es, um Ihnen zu zeigen, wie man Änderungen von GitHub abruft, lokale Änderungen vornimmt und diese dann auf GitHub pusht.

1. In der Eingabeaufforderung/Terminal holen wir zuerst die neueste Version des Quellcodes von GitHub ("fetch"), ziehen sie ("pull") und fügen sie in den aktuellen Branch ein:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt erforderlich, da wir den Quellcode gerade geklont haben und wissen, dass er aktuell ist.
   > Im Allgemeinen sollten Sie jedoch Ihre Quellen von GitHub aktualisieren, bevor Sie Änderungen vornehmen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _Remote_, das den Ort des Repos darstellt, an dem sich der Quellcode befindet, und "main" ist der Branch.
   Sie können überprüfen, ob der Ursprung unser Repo auf GitHub ist, indem Sie den Befehl ausführen: `git remote -v`.

2. Als Nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einen Branch zu wechseln, sodass er der aktuelle Branch ist, an dem Sie arbeiten.
   Das `-b`-Flag gibt an, dass wir beabsichtigen, einen neuen Branch namens "update_gitignore" zu erstellen, anstatt einen vorhandenen Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore** Datei, kopieren Sie die folgenden Zeilen am Ende davon und speichern Sie sie:

   ```plain
   # Text-Sicherungsdateien
   *.bak

   # Datenbank
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die nicht automatisch von git gesichert werden sollen, wie z.B. temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht von der **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" für den aktuellen Branch hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, ob alle Dateien, die Sie `commit` beabsichtigen, korrekt sind (Sie möchten Quellcodedateien einschließen, keine Binärdateien, temporäre Dateien usw.).
   Es sollte ähnlich dem unten stehenden Listing aussehen.

   ```bash
   > git status
   Auf Branch main
   Ihr Branch ist aktuell mit 'origin/update_gitignore'.
   Geänderte Dateien zur Übernahme:
     (verwenden Sie "git reset HEAD <file>..." zum Zurücksetzen)

           verändert:   .gitignore
   ```

6. Wenn Sie zufrieden sind, `commit` die Dateien in das lokale Repo und verwenden Sie das `-m`-Flag, um eine prägnante, aber klare Commit-Nachricht anzugeben.
   Dies entspricht dem Signieren der Änderungen ab und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: füge .bak und .sqlite3 hinzu"
   ```

7. An diesem Punkt wurde das Remote-Repo noch nicht verändert.
   Wir können den `update_gitignore` Branch mit dem folgenden Befehl auf das "origin" Repo (GitHub) pushen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zur Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen, mit einer Schaltfläche, die Sie drücken können, wenn Betriff "Vergleichen und Pull-Anfrage", für den Zweig, den Sie gerade hochgeladen haben, suchen.
   Wählen Sie die Schaltfläche aus und befolgen Sie dann die Anweisungen, um eine Pull-Anfrage zu erstellen und dann zusammenzuführen.

   ![Banner, um zu fragen, ob der Benutzer die neusten Zweigaktualisierungen vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenfügen wird der "main" Branch im Repo auf GitHub Ihre Änderungen an `.gitignore` enthalten.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, indem Sie diesen hinzufügen/commit/push Zyklus verwenden, während Sie Dateien ändern.

Im nächsten Thema verwenden wir dieses Repo, um den Quellcode unserer lokalen Bibliotheksseite zu speichern.

## Andere Python-Werkzeuge

Erfahrene Python-Entwickler können zusätzliche Werkzeuge installieren, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-bewussten Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige häufig verwendete Python-Linter (wie `pylint`) fälschlicherweise Fehler in den standardmäßig generierten Dateien für Django melden.

## Testen Ihrer Installation

Der obige Test funktioniert, ist aber nicht sehr unterhaltsam. Ein interessanterer Test besteht darin, ein Gerüstprojekt zu erstellen und es in Betrieb zu sehen. Um dies zu tun, navigieren Sie zuerst in Ihrem Eingabeaufforderung/Terminal dorthin, wo Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testseite und navigieren Sie in diesen hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Gerüstseite namens "_mytestsite_" mit dem Tool **django-admin** erstellen, wie gezeigt. Nachdem Sie die Site erstellt haben, können Sie in den Ordner navigieren, in dem Sie das Hauptskript zur Verwaltung von Projekten finden, genannt **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner heraus mit **manage.py** und dem `runserver`-Befehl starten, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "nicht angewandte Migration(en)" an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die so aussieht:

![Die Startseite der Gerüst-Django-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben jetzt eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und laufen.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir eine neue Django-Website mit `django-admin startproject` erstellen und diese in Ihrem Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und entwickeln eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnellinstallationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Wie man Django installiert — Vollständige Anleitung](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch, wie man Django entfernt
- [Wie man Django auf Windows installiert](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
