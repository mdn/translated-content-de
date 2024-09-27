---
title: Einrichten einer Django-Entwicklungsumgebung
slug: Learn/Server-side/Django/development_environment
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}

Jetzt, wo Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können - welches Betriebssystem Sie auch nutzen, dieser Artikel sollte Ihnen alles bieten, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal/der Befehlszeile und wie man Softwarepakete auf dem Betriebssystem Ihres Entwicklungsrechners installiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine Entwicklungsumgebung für Django (4.*) auf Ihrem Computer zum Laufen bringen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es sehr einfach, Ihren eigenen Computer so einzurichten, dass Sie Webanwendungen entwickeln können. Dieser Abschnitt erklärt, was Sie mit der Entwicklungsumgebung erhalten, und bietet einen Überblick über einige Ihrer Setup- und Konfigurationsoptionen. Der Rest des Artikels erklärt die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung auf Ubuntu, macOS und Windows und wie Sie sie testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Django-Installation auf Ihrem lokalen Computer, die Sie zum Entwickeln und Testen von Django-Apps verwenden können, bevor Sie diese in einer Produktionsumgebung bereitstellen.

Die Hauptwerkzeuge, die Django selbst bereitstellt, sind eine Reihe von Python-Skripten zum Erstellen und Arbeiten mit Django-Projekten sowie ein einfacher _Entwicklungs-Webserver_, den Sie verwenden können, um lokale Django-Webanwendungen (d.h. auf Ihrem Computer, nicht auf einem externen Webserver) in Ihrem Browser zu testen.

Es gibt andere Randwerkzeuge, die oft Teil der Entwicklungsumgebung sind, die wir hier nicht behandeln. Dazu gehören Dinge wie ein [Texteditor](/de/docs/Learn/Common_questions/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code, Linter zur automatischen Formatierung und so weiter. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Optionen gibt es für das Django-Setup?

Django ist extrem flexibel in Bezug darauf, wie und wo es installiert und konfiguriert werden kann. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, über das Python Package Index (PyPi) und in vielen Fällen über die Paketmanageranwendung des Host-Computers installiert werden.
- So konfiguriert werden, dass es eine von mehreren Datenbanken verwendet, die möglicherweise separat installiert und konfiguriert werden müssen.
- Im Hauptsystem-Python-Umfeld oder innerhalb separater Python-virtueller Umgebungen ausgeführt werden.

Jede dieser Optionen erfordert eine leicht unterschiedliche Konfiguration und Einrichtung. Die folgenden Unterabschnitte erklären einige Ihrer Auswahlmöglichkeiten. Für den restlichen Artikel zeigen wir Ihnen, wie Sie Django auf einer kleinen Anzahl von Betriebssystemen einrichten, und dieses Setup wird im Laufe dieses Moduls vorausgesetzt.

> [!NOTE]
> Andere mögliche Installationsoptionen sind in der offiziellen Django-Dokumentation beschrieben. Wir verlinken auf die [entsprechenden Dokumente unten](#windows).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Rechner ausgeführt werden, der die Programmiersprache Python 3 ausführen kann: Windows, macOS, Linux/Unix, Solaris, um nur einige zu nennen.
Fast jeder Computer sollte die notwendige Leistung haben, um Django während der Entwicklung auszuführen.

In diesem Artikel geben wir Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede von Ihrer Ziel-Django-Version unterstützte Python-Version verwenden.
Für Django 5.0 sind die erlaubten Versionen Python 3.10 bis 3.12 (siehe [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ (und "unterstützt offiziell") die Verwendung der neuesten verfügbaren Version der unterstützten Python-Version.

#### Wo kann man Django herunterladen?

Es gibt drei Orte, an denen Sie Django herunterladen können:

- Das Python Package Repository (PyPi), mit dem _pip_-Tool. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Verwenden Sie eine Version aus dem Paketmanager Ihres Computers. Distributionen von Django, die mit Betriebssystemen gebündelt sind, bieten einen vertrauten Installationsmechanismus. Beachten Sie jedoch, dass die verpackte Version möglicherweise ziemlich alt ist und nur in die System-Python-Umgebung installiert werden kann (was möglicherweise nicht gewünscht ist).
- Installation aus dem Quellcode. Sie können die neueste Entwicklungs-Version von Django aus dem Quellcode erhalten und installieren. Dies wird für Anfänger nicht empfohlen, ist jedoch erforderlich, wenn Sie bereit sind, zum Django-Projekt selbst beizutragen.

Dieser Artikel zeigt, wie Sie Django von PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite, und es gibt Community-Bibliotheken, die unterschiedliche Unterstützungsniveaus für andere beliebte SQL- und NoSQL-Datenbanken bieten. Wir empfehlen, dass Sie dieselbe Datenbank für Produktion und Entwicklung auswählen (obwohl Django viele der Datenbankunterschiede mit seinem Object-Relational Mapper (ORM) abstrahiert, gibt es dennoch [potenzielle Probleme](https://docs.djangoproject.com/en/5.0/ref/databases/), die besser vermieden werden).

Für diesen Artikel (und den größten Teil dieses Moduls) verwenden wir die _SQLite_-Datenbank, die ihre Daten in einer Datei speichert. SQLite ist für den Einsatz als leichte Datenbank gedacht und kann kein hohes Maß an Parallelität unterstützen. Es ist jedoch eine ausgezeichnete Wahl für Anwendungen, die hauptsächlich schreibgeschützt sind.

> [!NOTE]
> Django ist standardmäßig so konfiguriert, dass SQLite verwendet wird, wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) starten. Es ist eine großartige Wahl, wenn Sie gerade erst anfangen, da es keine zusätzliche Konfiguration oder Einrichtung erfordert.

#### Systemweit oder in einer Python-virtuellen Umgebung installieren?

Wenn Sie Python3 installieren, erhalten Sie eine einzige globale Umgebung, die von allen Python3-Codes gemeinsam genutzt wird. Obwohl Sie in der Umgebung beliebige Python-Pakete installieren können, können Sie nur jeweils eine bestimmte Version jedes Pakets installieren.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können möglicherweise miteinander in Konflikt geraten (d.h. wenn sie auf unterschiedliche Versionen desselben Pakets angewiesen sind).

Wenn Sie Django in die Standard-/globale Umgebung installieren, können Sie auf dem Computer nur eine Version von Django anvisieren. Dies kann ein Problem sein, wenn Sie neue Websites erstellen möchten (mithilfe der neuesten Version von Django), während Sie weiterhin Websites pflegen, die auf älteren Versionen beruhen.

Infolgedessen führen erfahrene Python/Django-Entwickler Python-Apps typischerweise in unabhängigen _Python-virtuellen Umgebungen_ aus. Dies ermöglicht mehrere verschiedene Django-Umgebungen auf einem einzelnen Computer. Das Django-Entwicklerteam selbst empfiehlt die Verwendung von Python-virtuellen Umgebungen!

Dieses Modul geht davon aus, dass Sie Django in einer virtuellen Umgebung installiert haben, und wir zeigen Ihnen im Folgenden, wie das geht.

## Installation von Python 3

Um Django verwenden zu können, müssen Sie Python 3 auf Ihrem Betriebssystem haben.
Außerdem benötigen Sie das [Python Package Index](https://pypi.org/)-Tool — _pip3_ —, das zum Verwalten (Installieren, Aktualisieren und Entfernen) von Python-Paketen/Bibliotheken verwendet wird, die von Django und anderen Python-Apps verwendet werden.

Dieser Abschnitt erklärt kurz, wie Sie überprüfen können, welche Python-Versionen vorhanden sind, und neue Versionen bei Bedarf installieren, für Ubuntu Linux 20.04, macOS und Windows 10.

> [!NOTE]
> Je nach Plattform können Sie Python/pip möglicherweise auch aus dem Paketmanager des Betriebssystems oder über andere Mechanismen installieren. Für die meisten Plattformen können Sie die erforderlichen Installationsdateien von <https://www.python.org/downloads/> herunterladen und diese mit der entsprechenden plattformspezifischen Methode installieren.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS enthält standardmäßig Python 3.10.12.
Sie können dies bestätigen, indem Sie den folgenden Befehl im Bash-Terminal ausführen:

```bash
python3 -V
# Output: Python 3.10.12
```

Das Python Package Index-Tool (_pip3_), das Sie zum Installieren von Paketen für Python 3 (einschließlich Django) benötigen, ist jedoch standardmäßig **nicht** verfügbar.
Sie können _pip3_ im Bash-Terminal installieren, indem Sie:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 ist die älteste Version, die [von Django 5.0 unterstützt wird](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> Sie _müssen_ nicht die neueste Version von Python für dieses Tutorial verwenden, aber wenn Sie möchten, gibt es Anleitungen im Internet.

### macOS

macOS enthält standardmäßig kein Python 3 (Python 2 ist in älteren Versionen enthalten).
Dies können Sie bestätigen, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
python3 -V
```

Entweder wird die Python-Versionsnummer angezeigt, was darauf hinweist, dass Python 3 installiert ist, oder `python3: command not found`, was signalisiert, dass Python 3 nicht gefunden wurde.

Sie können Python 3 (zusammen mit dem _pip3_-Tool) leicht von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/macos/>
   2. Laden Sie die stabile Veröffentlichung der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django), die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Suchen Sie die Datei mit _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsaufforderungen.

Sie können nun die erfolgreiche Installation bestätigen, indem Sie erneut `python3 -V` ausführen und die Python-Versionsnummer überprüfen.

Sie können auch überprüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 10 oder 11

Windows enthält standardmäßig kein Python, aber Sie können es leicht (zusammen mit dem _pip3_-Tool) von [python.org](https://www.python.org/) installieren:

1. Laden Sie das erforderliche Installationsprogramm herunter:

   1. Gehen Sie zu <https://www.python.org/downloads/windows/>
   2. Laden Sie die stabile Veröffentlichung der neuesten [unterstützten Version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django), die mit Django 5.0 funktioniert.
      (zum Zeitpunkt des Schreibens ist dies Python 3.11.8).

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsaufforderungen folgen.
3. Aktivieren Sie das Kontrollkästchen "Add Python to PATH".

Sie können dann überprüfen, ob Python 3 installiert wurde, indem Sie den folgenden Text in die Eingabeaufforderung eingeben:

```bash
py -3 -V
```

Der Windows-Installer umfasst _pip3_ (den Python-Paketmanager) standardmäßig.
Sie können installierte Pakete folgendermaßen auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Der Installer sollte alles einrichten, was Sie für das obige Kommando benötigen.
> Wenn Sie jedoch eine Nachricht erhalten, dass Python nicht gefunden werden kann, haben Sie möglicherweise vergessen, es zu Ihrem Systempfad hinzuzufügen.
> Sie können dies tun, indem Sie den Installer erneut ausführen, "Modify" auswählen und auf der zweiten Seite das Kontrollkästchen "Add Python to environment variables" aktivieren.

## Aufrufen von Python 3 und pip3

Sie werden feststellen, dass wir in den vorherigen Abschnitten auf verschiedenen Betriebssystemen unterschiedliche Befehle verwenden, um Python 3 und pip aufzurufen.

Wenn Sie nur Python 3 installiert haben (und nicht Python 2), können im Allgemeinen die nackten Befehle `python` und `pip` verwendet werden, um Python und pip auf jedem Betriebssystem auszuführen.
Wenn dies auf Ihrem System erlaubt ist, erhalten Sie eine Version "3", wenn Sie `-V` mit den nackten Befehlen ausführen, wie gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie verwenden Sie für die Verwendung von Version 3 die Präfixbefehle `python3` und `pip3` auf Linux/macOS bzw. `py -3` und `py -3 -m pip` auf Windows:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die Anweisungen unten zeigen die plattformspezifischen Befehle, wie sie auf mehr Systemen funktionieren.

## Verwendung von Django in einer Python-virtuellen Umgebung

Die Bibliotheken, die wir für die Erstellung unserer virtuellen Umgebungen verwenden, sind [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux und macOS) und [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), die beide das [virtualenv](https://virtualenv.pypa.io/en/latest/) Tool verwenden. Die Wrapper-Tools schaffen eine konsistente Schnittstelle zum Verwalten von Schnittstellen auf allen Plattformen.

### Installation der Software für virtuelle Umgebungen

#### Ubuntu-Einrichtung für virtuelle Umgebungen

Nachdem Sie Python und pip installiert haben, können Sie _virtualenvwrapper_ (das _virtualenv_ umfasst) installieren. Der offizielle Installationsleitfaden kann [hier](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) gefunden werden, oder folgen Sie den untenstehenden Anweisungen.

Installieren Sie das Tool mit _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Dann fügen Sie die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (dies ist eine versteckte Datei namens **.bashrc** in Ihrem Home-Verzeichnis). Diese setzen den Speicherort, wo die virtuellen Umgebungen leben sollen, den Ort Ihrer Entwicklungsprojektverzeichnisse und den Speicherort des mit diesem Paket installierten Skripts:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die `VIRTUALENVWRAPPER_PYTHON` und `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` Variablen zeigen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh` Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Dann laden Sie die Startdatei neu, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bashrc
```

An diesem Punkt sollten Sie sehen, dass eine Reihe von Skripten ausgeführt werden, wie unten gezeigt:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Jetzt können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen.

#### macOS Einrichtung für virtuelle Umgebungen

Das Einrichten von _virtualenvwrapper_ auf macOS ist fast genau das gleiche wie unter Ubuntu (wieder können Sie den Anweisungen entweder im [offiziellen Installationshandbuch](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) oder unten folgen).

Installieren Sie _virtualenvwrapper_ (und das Paket _virtualenv_) mit _pip_, wie gezeigt.

```bash
sudo pip3 install virtualenvwrapper
```

Fügen Sie dann die folgenden Zeilen am Ende Ihrer Shell-Startdatei hinzu (es sind dieselben Zeilen wie für Ubuntu).
Wenn Sie die _zsh shell_ verwenden, wird die Startdatei eine versteckte Datei namens **.zshrc** in Ihrem Home-Verzeichnis sein. Wenn Sie die _bash shell_ verwenden, wird sie eine versteckte Datei namens **.bash_profile** sein. Sie müssen die Datei möglicherweise erstellen, wenn sie noch nicht existiert.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> Die `VIRTUALENVWRAPPER_PYTHON` Variablen weisen auf den normalen Installationsort für Python 3, und `source /usr/local/bin/virtualenvwrapper.sh` zeigt auf den normalen Ort des `virtualenvwrapper.sh` Skripts. Wenn das _virtualenv_ beim Testen nicht funktioniert, sollten Sie überprüfen, ob Python und das Skript am erwarteten Ort sind (und dann die Startdatei entsprechend ändern).
>
> Beispielsweise endete ein Installationstest auf macOS mit den folgenden Zeilen, die in der Startdatei erforderlich sind:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> Sie können die richtigen Speicherorte für Ihr System mit den Befehlen `which virtualenvwrapper.sh` und `which python3` finden.

Dann laden Sie die Startdatei, indem Sie den folgenden Befehl im Terminal ausführen:

```bash
source ~/.bash_profile
```

An diesem Punkt können Sie eine Reihe von Skripten ausgeführt sehen (dieselben Skripten wie für die Ubuntu-Installation). Sie sollten jetzt in der Lage sein, eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl zu erstellen.

> [!NOTE]
> Wenn Sie die Startdatei im Finder nicht finden können, können Sie sie auch im Terminal mit nano öffnen.
>
> Vorausgesetzt, Sie verwenden bash, sehen die Befehle ungefähr so aus:
>
> ```bash
> cd ~  # Navigieren Sie zu meinem Home-Verzeichnis
> ls -la #Listet den Inhalt des Verzeichnisses auf. Sie sollten .bash_profile sehen
> nano .bash_profile # Öffnet die Datei im Nano-Texteditor im Terminal
> # Scrollen Sie zum Ende der Datei und kopieren Sie die obigen Zeilen hinein
> # Verwenden Sie Strg+X, um Nano zu verlassen, wählen Sie Y, um die Datei zu speichern.
> ```

#### Windows-Einrichtung für virtuelle Umgebungen

Die Installation von [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) ist noch einfacher als die Einrichtung von _virtualenvwrapper_, da Sie den Ort, an dem das Tool Informationen zur virtuellen Umgebung speichert, nicht konfigurieren müssen (es gibt einen Standardwert). Alles, was Sie tun müssen, ist den folgenden Befehl in der Eingabeaufforderung auszuführen:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Nun können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen.

### Erstellung einer virtuellen Umgebung

Sobald Sie _virtualenvwrapper_ oder _virtualenvwrapper-win_ installiert haben, ist die Arbeit mit virtuellen Umgebungen auf allen Plattformen sehr ähnlich.

Nun können Sie eine neue virtuelle Umgebung mit dem `mkvirtualenv` Befehl erstellen. Während dieses Befehls ausgeführt wird, sehen Sie, wie die Umgebung eingerichtet wird (was Sie sehen, ist leicht plattformabhängig). Wenn der Befehl abgeschlossen ist, wird die neue virtuelle Umgebung aktiv sein – Sie können dies daran erkennen, dass der Beginn des Prompts der Name der Umgebung in Klammern ist (unten zeigen wir dies für Ubuntu, aber die letzte Zeile ist ähnlich für Windows/macOS).

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

Sobald Sie sich in der virtuellen Umgebung befinden, können Sie Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Von nun an in diesem Artikel (und tatsächlich im gesamten Modul) gehen wir davon aus, dass alle Befehle innerhalb einer Python-virtuellen Umgebung ausgeführt werden, wie wir sie oben eingerichtet haben.

### Verwendung einer virtuellen Umgebung

Es gibt nur ein paar andere nützliche Befehle, die Sie kennen sollten (es gibt mehr in der Tool-Dokumentation, aber dies sind die, die Sie regelmäßig verwenden werden):

- `deactivate` — Verlassen Sie die aktuelle Python-virtuelle Umgebung
- `workon` — Verfügbare virtuelle Umgebungen auflisten
- `workon name_of_environment` — Aktivieren Sie die angegebene Python-virtuelle Umgebung
- `rmvirtualenv name_of_environment` — Entfernen Sie die angegebene Umgebung.

## Django installieren

Sobald Sie eine virtuelle Umgebung erstellt haben und `workon` aufrufen, um sie zu betreten, können Sie _pip3_ verwenden, um Django zu installieren.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

Sie können überprüfen, ob Django installiert ist, indem Sie den folgenden Befehl ausführen (dies testet lediglich, ob Python das Django-Modul finden kann):

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
> In Windows _Python 3_ werden Skripte gestartet, indem dem Befehl das Präfix `py -3` hinzugefügt wird, obwohl dies je nach Ihrer spezifischen Installation variieren kann.
> Versuchen Sie, den `-3`-Modifizierer wegzulassen, wenn Sie auf Probleme mit Befehlen stoßen.
> In Linux/macOS lautet der Befehl `python3.`

> [!WARNING]
> Der Rest dieses **Moduls** verwendet den _Linux_-Befehl zum Aufrufen von Python 3 (`python3`). Wenn Sie auf _Windows_ arbeiten, ersetzen Sie dieses Präfix durch: `py -3`

## Quellcodeverwaltung mit Git und GitHub

Tools zur Quellcodeverwaltung (Source Code Management, SCM) und Versionierung ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und "bekannt gutem Code" zu teilen, wenn Sie ihn benötigen.

Es gibt viele verschiedene SCM-Tools, einschließlich Git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System) usw., sowie Cloud-SCM-Hosting-Quellen wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten Cloud-basierten Source-Code-Hosting-Dienste, und verwenden das Tool **git**, um unseren Quellcode lokal zu verwalten und bei Bedarf an GitHub zu senden.

> [!NOTE]
> Die Verwendung von SCM-Tools ist eine gute Softwareentwicklungspraktik!
> Die Anleitungen bieten eine grundlegende Einführung in Git und GitHub.
> Um mehr zu erfahren, siehe [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Schlüsselkonzepte

Git (und GitHub) verwenden Repositories ("Repos") als oberstes Container für die Speicherung von Code, wobei jedes Repo normalerweise den Quellcode für nur eine Anwendung oder ein Modul enthält.
Repositories können öffentlich sein, was bedeutet, dass der Code für jeden im Internet sichtbar ist, oder privat, mit denen sie auf die besitzende Organisation oder das Benutzerkonto beschränkt sind.

Alle Arbeiten werden in einem bestimmten "Branch" von Code in Ihrem Repo durchgeführt.
Wenn Sie einige Änderungen an einem Branch sichern möchten, können Sie ein "Commit" erstellen, das alle Änderungen seit Ihrem letzten Commit zum aktuellen Branch speichert.

Das Repo wird mit einem Standardbranch namens "main" erstellt. Mit Git können Sie andere Branches davon ausgehend erzeugen, die anfangs alle Commits des ursprünglichen Branchs aufweisen.
Sie können Branches separat weiterentwickeln, indem Sie Commits hinzufügen und später dann mithilfe einer "Pull Request" (PR) auf GitHub Änderungen von einem Branch in einen anderen zusammenführen.
Sie können auch Git verwenden, um zwischen Branches auf Ihrem lokalen Computer zu wechseln, beispielsweise um verschiedene Dinge auszuprobieren.

Zusätzlich zu Branches ist es möglich, `Tags` auf einem Branch zu erstellen und diesen Branch später zu diesem Punkt wiederherzustellen.

### Ein Konto und Repository auf GitHub erstellen

Zuerst erstellen wir ein kostenloses Konto auf GitHub.
Mit einem kostenlosen Konto können Sie keine privaten Repositories erstellen, aber Sie können so viele _öffentliche_ Repositories ("Repos") erstellen, wie Sie möchten.
Dann erstellen und konfigurieren wir ein Repository namens "django_local_library" für die Speicherung der [Local library website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website), während wir es im Rest dieses Tutorials weiterentwickeln.

Die Schritte sind:

1. Besuchen Sie <https://github.com/> und erstellen Sie ein Konto.
2. Sobald Sie angemeldet sind, klicken Sie in der oberen Symbolleiste auf den **+**-Link und wählen **New repository** aus.
3. Füllen Sie alle Felder in diesem Formular aus.
   Obwohl diese nicht zwingend erforderlich sind, werden sie dringend empfohlen.

   - Geben Sie einen Repository-Namen ein: "django_local_library".
   - Geben Sie eine neue Repository-Beschreibung ein: "Local Library website geschrieben in Django".
   - Wählen Sie "Public" für das Repository (die Standardeinstellung).

     > [!WARNING]
     > Dadurch wird der _gesamte_ Quellcode sichtbar.
     > Denken Sie daran, keine Anmeldedaten oder andere sensible Materialien in Ihrem Repo zu speichern, es sei denn es ist privat.

   - Wählen Sie **Python** in der _Add .gitignore_ Auswahlliste.
   - Wählen Sie Ihre bevorzugte Lizenz in der _Add license_ Auswahlliste.
     MDN verwendet "Creative Commons Zero v1.0 Universal" für dieses Beispiel.
   - Aktivieren Sie **Initialize this repository with a README**.

4. Drücken Sie **Create repository**.

   Das Repository wird erstellt und enthält nur die Dateien `README.txt` und `.gitignore`.

### Klonen des Repos auf Ihren lokalen Computer

Jetzt, da das Repository ("Repo") auf GitHub erstellt wurde, wollen wir es auf unseren lokalen Computer klonen (kopieren):

1. Klicken Sie auf GitHub auf die grüne **Code** Schaltfläche.
   Wählen Sie in der Sektion "Clone" die Registerkarte "HTTPS" und kopieren Sie die URL.
   Wenn Sie den Repository-Namen "django_local_library" verwendet haben, sollte die URL etwa so aussehen: `https://github.com/<Ihr_Git_Benutzer_ID>/django_local_library.git`.

2. Installieren Sie _git_ für Ihren lokalen Computer (Sie finden Versionen für unterschiedliche Plattformen [hier](https://git-scm.com/downloads)).

3. Öffnen Sie eine Eingabeaufforderung/Terminal und klonen Sie Ihr Repo mit der oben kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

4. Gehen Sie in das Repo-Verzeichnis.

   ```bash
   cd django_local_library
   ```

### Änderungen modifizieren und synchronisieren

Jetzt werden wir die Datei `.gitignore` auf dem lokalen Computer ändern, die Änderung commiten und das Repository auf GitHub aktualisieren.
Dies ist eine nützliche Änderung, vor allem aber zeigen wir Ihnen, wie Sie Änderungen von GitHub abrufen, lokal bearbeiten und dann an GitHub senden können.

1. In der Eingabeaufforderung/im Terminal holen wir zuerst die neueste Version der Quelle von GitHub ab und mergen sie dann in den aktuellen Branch:

   > [!NOTE]
   > Dieser Schritt ist nicht unbedingt notwendig, da wir die Quelle gerade geklont haben und wissen, dass sie aktuell ist.
   > Im Allgemeinen sollten Sie jedoch bevor Sie Änderungen vornehmen, Ihre Quellen von GitHub aktualisieren.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   Der "origin" ist ein _remote_, der den Ort des Repos repräsentiert, an dem sich die Quelle befindet, und "main" ist der Branch.
   Sie können überprüfen, ob origin unser Repo auf GitHub ist, indem Sie den Befehl `git remote -v` verwenden.

2. Als nächstes checken wir einen neuen Branch aus, um unsere Änderungen zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Der Befehl `checkout` wird verwendet, um einen Branch zu wechseln, sodass dieser Branch der aktuelle ist, an dem Sie arbeiten.
   Das `-b`-Flag zeigt an, dass wir einen neuen Branch namens "update_gitignore" erstellen möchten, anstatt einen bestehenden Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die **.gitignore** Datei, kopieren Sie die folgenden Zeilen ans Ende und speichern Sie sie:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Beachten Sie, dass `.gitignore` verwendet wird, um Dateien anzugeben, die von Git nicht automatisch gesichert werden sollen, wie temporäre Dateien und andere Build-Artefakte.

4. Verwenden Sie den Befehl `add`, um alle geänderten Dateien (die nicht durch die **.gitignore**-Datei ignoriert werden) in den "Staging-Bereich" des aktuellen Branches hinzuzufügen.

   ```bash
   git add -A
   ```

5. Verwenden Sie den Befehl `status`, um zu überprüfen, dass alle Dateien, die Sie `commit` möchten, korrekt sind (Sie möchten Quellcode-Dateien einbeziehen, nicht Binärdateien, temporäre Dateien etc.).
   Es sollte ein wenig wie die folgende Liste aussehen.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn Sie zufrieden sind, können Sie die Dateien mit der `commit` Anweisung zu Ihrem lokalen Repo übergeben, indem Sie das `-m` Flag verwenden, um eine prägnante, aber klare Commit-Botschaft anzugeben.
   Dies entspricht der Unterschrift der Änderungen und macht sie zu einem offiziellen Teil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Bis zu diesem Punkt hat sich das entfernte Repo nicht verändert.
   Wir können den `update_gitignore` Branch an das "origin" Repo (GitHub) mit dem folgenden Befehl übertragen:

   ```bash
   git push origin update_gitignore
   ```

8. Gehen Sie zurück zu der Seite auf GitHub, auf der Sie Ihr Repo erstellt haben, und aktualisieren Sie die Seite.

   Ein Banner sollte erscheinen mit einem Knopf, den Sie drücken können, wenn Sie die soeben hochgeladenen Branch-Updates "Vergleichen und eine Pull-Anfrage stellen" möchten.
   Wählen Sie den Knopf aus und folgen Sie dann den Anweisungen, um eine Pull-Anfrage zu erstellen und dann zu mergen.

   ![Banner, der fragt, ob der Benutzer kürzlich branch-Updates vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der Branch "main" im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Sie können Ihr lokales Repo weiterhin aktualisieren, während sich Dateien ändern, indem Sie diesen Zyklus: Hinzufügen/Commit/Push anwenden.

Im nächsten Thema werden wir dieses Repo verwenden, um den Quellcode unserer lokalen Bibliothekswebsite zu speichern.

## Andere Python-Tools

Erfahrene Python-Entwickler installieren möglicherweise zusätzliche Tools, wie Linter (die helfen, häufige Fehler im Code zu erkennen).

Beachten Sie, dass Sie einen Django-fähigen Linter wie [pylint-django](https://pypi.org/project/pylint-django/) verwenden sollten, da einige häufige Python-Linter (wie `pylint`) fälschlich Fehler in den von Django generierten Standarddateien melden.

## Testen Ihrer Installation

Der obige Test funktioniert, aber er macht nicht sehr viel Spaß. Ein interessanterer Test ist es, ein Gerüstprojekt zu erstellen und es funktionieren zu sehen. Gehen Sie zunächst in Ihrer Eingabeaufforderung/Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testsite und navigieren Sie hinein.

```bash
mkdir django_test
cd django_test
```

Sie können dann eine neue Gerüstseite namens "_mytestsite_" mit dem **django-admin** Tool wie gezeigt erstellen. Nachdem Sie die Seite erstellt haben, können Sie in den Ordner navigieren, in dem Sie das Hauptskript zur Verwaltung von Projekten finden, das **manage.py** genannt wird.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Wir können den _Entwicklungs-Webserver_ aus diesem Ordner mit **manage.py** und dem Befehl `runserver` starten, wie gezeigt.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Sie können die Warnungen über "unangewendete Migration(en)" an diesem Punkt ignorieren!

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie zu der folgenden URL in Ihrem lokalen Webbrowser navigieren: `http://127.0.0.1:8000/`. Sie sollten eine Seite sehen, die folgendermaßen aussieht:

![Die Startseite der Django-Gerüst-App](django_skeleton_app_homepage_django_4_0.png)

## Zusammenfassung

Sie haben nun eine Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet und lauffähig.

Im Testabschnitt haben Sie auch kurz gesehen, wie wir mit `django-admin startproject` eine neue Django-Website erstellen und im Browser mit dem Entwicklungs-Webserver (`python3 manage.py runserver`) ausführen können. Im nächsten Artikel erweitern wir diesen Prozess und bauen eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Schnellinstallationsanleitung](https://docs.djangoproject.com/en/5.0/intro/install/) (Django-Dokumentation)
- [Django installieren — vollständiger Leitfaden](https://docs.djangoproject.com/en/5.0/topics/install/) (Django-Dokumentation) — behandelt auch das Entfernen von Django
- [Django auf Windows installieren](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Introduction", "Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django")}}
