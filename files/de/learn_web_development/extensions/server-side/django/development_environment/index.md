---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem Sie nun wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie unter Windows, Linux (Ubuntu) und macOS eine Django-Entwicklungsumgebung einrichten und testen. Unabhängig davon, welches dieser gängigen Betriebssysteme Sie verwenden, finden Sie hier alles, was Sie für den Einstieg in die Entwicklung von Django-Apps benötigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse im Umgang mit einem Terminal bzw. einer Befehlszeile und in der Installation von Softwarepaketen auf dem Betriebssystem Ihres Entwicklungscomputers.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine funktionsfähige Entwicklungsumgebung für Django (6.1.*) auf Ihrem Computer.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Mit Django lässt sich Ihr Computer sehr einfach für die Entwicklung von Webanwendungen einrichten. Dieser Abschnitt erklärt, was die Entwicklungsumgebung umfasst, und gibt einen Überblick über einige Möglichkeiten zur Einrichtung und Konfiguration. Im weiteren Verlauf des Artikels wird die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung unter Ubuntu, macOS und Windows beschrieben. Außerdem erfahren Sie, wie Sie die Installation testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer. Sie können damit Django-Apps entwickeln und testen, bevor Sie sie in einer Produktionsumgebung bereitstellen.

Django selbst stellt vor allem eine Reihe von Python-Skripten zum Erstellen und Bearbeiten von Django-Projekten sowie einen einfachen _Entwicklungswebserver_ bereit. Mit diesem können Sie lokale Django-Webanwendungen – also Anwendungen auf Ihrem Computer statt auf einem externen Webserver – im Browser Ihres Computers testen.

Zur Entwicklungsumgebung gehören oft weitere Werkzeuge, auf die wir hier nicht eingehen. Dazu zählen beispielsweise ein [Texteditor](/de/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) oder eine IDE zum Bearbeiten von Code sowie Linter für die automatische Formatierung. Wir gehen davon aus, dass Sie bereits einen Texteditor installiert haben.

### Welche Möglichkeiten gibt es, Django einzurichten?

Django ist hinsichtlich Installationsort und Konfiguration äußerst flexibel. Django kann:

- Auf verschiedenen Betriebssystemen installiert werden.
- Aus dem Quellcode, über den Python Package Index (PyPi) und in vielen Fällen über die Paketverwaltung des Hostcomputers installiert werden.
- Für die Verwendung mit einer von mehreren Datenbanken konfiguriert werden, die gegebenenfalls separat installiert und eingerichtet werden müssen.
- In der Python-Hauptumgebung des Systems oder in separaten virtuellen Python-Umgebungen ausgeführt werden.

Jede dieser Möglichkeiten erfordert eine etwas andere Konfiguration und Einrichtung. Die folgenden Unterabschnitte erläutern einige Ihrer Optionen. Im weiteren Verlauf des Artikels zeigen wir Ihnen, wie Sie Django auf ausgewählten Betriebssystemen einrichten. Diese Einrichtung wird für den Rest dieses Moduls vorausgesetzt.

> [!NOTE]
> Weitere Installationsmöglichkeiten werden in der offiziellen Django-Dokumentation behandelt. Die [entsprechenden Dokumente](#siehe_auch) sind weiter unten verlinkt.

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, auf dem die Programmiersprache Python 3 läuft: beispielsweise unter Windows, macOS, Linux/Unix oder Solaris.
Fast jeder Computer sollte während der Entwicklung genügend Leistung für Django bieten.

Dieser Artikel enthält Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von der gewünschten Django-Version unterstützt wird.
Für Django 6.1 sind Python 3.12 bis 3.14 zulässig (siehe [FAQ: Installation](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ die neueste verfügbare unterstützte Python-Version und unterstützt sie „offiziell“.

#### Wo kann Django heruntergeladen werden?

Es gibt drei Bezugsquellen für Django:

- Das Python-Paketverzeichnis (PyPi) über das Werkzeug _pip_. Dies ist der beste Weg, um die neueste stabile Version von Django zu erhalten.
- Die Paketverwaltung Ihres Computers. Django-Pakete, die mit Betriebssystemen bereitgestellt werden, lassen sich auf vertraute Weise installieren. Beachten Sie jedoch, dass die enthaltene Version recht alt sein kann und sich nur in der systemweiten Python-Umgebung installieren lässt – was möglicherweise nicht Ihren Anforderungen entspricht.
- Den Quellcode. Sie können die neueste, noch in Entwicklung befindliche Version von Django aus dem Quellcode beziehen und installieren. Das ist für Einsteiger nicht empfehlenswert, aber erforderlich, wenn Sie selbst zu Django beitragen möchten.

Dieser Artikel zeigt, wie Sie Django über PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite. Darüber hinaus gibt es Community-Bibliotheken, die weitere verbreitete SQL- und NoSQL-Datenbanken in unterschiedlichem Umfang unterstützen. Wir empfehlen, für Produktion und Entwicklung dieselbe Datenbank zu wählen. Django gleicht zwar viele Unterschiede zwischen Datenbanken über seinen Object-Relational Mapper (ORM) aus, dennoch gibt es [potenzielle Probleme](https://docs.djangoproject.com/en/6.1/ref/databases/), die sich so besser vermeiden lassen.

Für diesen Artikel und den größten Teil dieses Moduls verwenden wir die Datenbank _SQLite_, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und eignet sich nicht für einen hohen Grad gleichzeitiger Zugriffe. Für Anwendungen, aus denen überwiegend Daten gelesen werden, ist sie jedoch eine ausgezeichnete Wahl.

> [!NOTE]
> Wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) erstellen, ist Django standardmäßig für die Verwendung von SQLite konfiguriert. Für den Einstieg ist das eine gute Wahl, da keine zusätzliche Konfiguration oder Einrichtung erforderlich ist.

#### Systemweite Installation oder virtuelle Python-Umgebung?

Wenn Sie Python 3 installieren, erhalten Sie eine einzige globale Umgebung, die von sämtlichem Python-3-Code gemeinsam genutzt wird. Sie können darin beliebige Python-Pakete installieren, aber jeweils nur eine Version eines bestimmten Pakets gleichzeitig.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können miteinander in Konflikt geraten – etwa wenn sie unterschiedliche Versionen desselben Pakets benötigen.

Wenn Sie Django in der standardmäßigen globalen Umgebung installieren, können Sie auf dem Computer nur eine Django-Version verwenden. Das kann zum Problem werden, wenn Sie neue Websites mit der neuesten Django-Version erstellen und gleichzeitig Websites betreuen möchten, die ältere Versionen benötigen.

Erfahrene Python- und Django-Entwickler führen Python-Apps daher üblicherweise in voneinander unabhängigen _virtuellen Python-Umgebungen_ aus. So lassen sich mehrere unterschiedliche Django-Umgebungen auf einem Computer betreiben. Auch das Django-Entwicklungsteam empfiehlt die Verwendung virtueller Python-Umgebungen!

Dieses Modul setzt voraus, dass Sie Django in einer virtuellen Umgebung installiert haben. Wie das geht, zeigen wir Ihnen weiter unten.

## Python 3 installieren

Um Django verwenden zu können, muss Python 3 auf Ihrem Betriebssystem installiert sein.
Außerdem benötigen Sie das Werkzeug _pip3_ für den [Python Package Index](https://pypi.org/). Damit verwalten Sie Python-Pakete und -Bibliotheken, die Django und Ihre anderen Python-Apps verwenden: Sie können sie installieren, aktualisieren und entfernen.

Dieser Abschnitt erklärt kurz, wie Sie unter Ubuntu Linux 26.04 (und 24.04), macOS und Windows 11 vorhandene Python-Versionen überprüfen und bei Bedarf neue Versionen installieren.

> [!NOTE]
> Je nach Plattform können Sie Python und pip möglicherweise auch über die Paketverwaltung des Betriebssystems oder auf anderem Weg installieren. Für die meisten Plattformen können Sie die benötigten Installationsdateien unter <https://www.python.org/downloads/> herunterladen und mit der für Ihre Plattform vorgesehenen Methode installieren.

### Ubuntu 26.04

Ubuntu Linux 26.04 LTS enthält standardmäßig Python 3.14.
Sie können dies überprüfen, indem Sie im Bash-Terminal den folgenden Befehl ausführen:

```bash
python3 -V
# Output: Python 3.14.4
```

Allerdings sind weder das Werkzeug _pip3_ für den Python Package Index noch das Modul _venv_, mit dem Sie später virtuelle Umgebungen erstellen, standardmäßig verfügbar.
Beides können Sie im Bash-Terminal wie folgt installieren:

```bash
sudo apt install python3-pip python3-venv
```

> [!NOTE]
> Wenn Sie stattdessen **Ubuntu 24.04 LTS** verwenden, meldet `python3 -V` Python 3.12.
> Diese Version liegt im [von Django 6.1 unterstützten Bereich](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django). Sie müssen also keine neuere Python-Version installieren, um der Anleitung zu folgen.
> Sie müssen dennoch `sudo apt install python3-pip python3-venv` ausführen: Auch unter 24.04 sind pip und venv nicht standardmäßig installiert.

### macOS

macOS enthält standardmäßig kein Python 3; ältere Versionen enthalten Python 2.
Sie können dies mit dem folgenden Befehl im Terminal überprüfen:

```bash
python3 -V
```

Entweder wird eine Python-Versionsnummer angezeigt, was bedeutet, dass Python 3 installiert ist, oder die Meldung `python3: command not found`, was bedeutet, dass Python 3 nicht gefunden wurde.

Sie können Python 3 zusammen mit dem Werkzeug _pip3_ einfach über [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:
   1. Rufen Sie <https://www.python.org/downloads/macos/> auf.
   2. Laden Sie die stabile Ausgabe der neuesten [unterstützten Version](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 6.1 funktioniert.
      Zum Zeitpunkt der Erstellung dieses Artikels ist das Python 3.14.7.

2. Suchen Sie die Datei im _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Anweisungen zur Installation.

Überprüfen Sie die erfolgreiche Installation, indem Sie ein neues Terminalfenster öffnen, erneut `python3 -V` ausführen und kontrollieren, ob eine Python-Versionsnummer angezeigt wird.

Auf ähnliche Weise können Sie prüfen, ob _pip3_ installiert ist, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 11

Windows enthält standardmäßig kein Python. Sie können es jedoch zusammen mit dem Werkzeug _pip3_ einfach über [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:
   1. Rufen Sie <https://www.python.org/downloads/windows/> auf.
   2. Laden Sie die stabile Ausgabe der neuesten [unterstützten Version](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 6.1 funktioniert.
      Zum Zeitpunkt der Erstellung dieses Artikels ist das Python 3.14.7.

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Anweisungen zur Installation folgen.
3. Aktivieren Sie unbedingt das Kontrollkästchen „Add Python to PATH“.

Öffnen Sie anschließend eine neue Eingabeaufforderung und überprüfen Sie mit dem folgenden Befehl, ob Python 3 installiert wurde:

```bash
py -3 -V
```

Das Windows-Installationsprogramm enthält standardmäßig _pip3_, die Python-Paketverwaltung.
Installierte Pakete können Sie wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Das Installationsprogramm sollte alles einrichten, was für den obigen Befehl erforderlich ist.
> Falls Sie dennoch die Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie es möglicherweise nicht zum Systempfad hinzugefügt.
> Führen Sie dazu das Installationsprogramm erneut aus, wählen Sie „Modify“ und aktivieren Sie auf der zweiten Seite das Kontrollkästchen „Add Python to environment variables“.

## Python 3 und pip3 aufrufen

Wie Sie in den vorherigen Abschnitten gesehen haben, werden Python 3 und pip je nach Betriebssystem mit unterschiedlichen Befehlen aufgerufen.

Wenn nur Python 3 und nicht Python 2 installiert ist, können Sie Python und pip in der Regel auf jedem Betriebssystem mit den einfachen Befehlen `python` und `pip` ausführen.
Falls das auf Ihrem System möglich ist, enthalten die mit `-V` ausgegebenen Versionsangaben eine „3“, wie hier gezeigt:

```bash
python -V
pip -V
```

Wenn Python 2 installiert ist, sollten Sie für Version 3 unter Linux/macOS die Befehle `python3` und `pip3` und unter Windows `py -3` und `py -3 -m pip` verwenden:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

Die folgenden Anleitungen verwenden die plattformspezifischen Befehle, da diese auf mehr Systemen funktionieren.

## Django in einer virtuellen Python-Umgebung verwenden

Wir erstellen unsere virtuellen Umgebungen mit [venv](https://docs.python.org/3/library/venv.html), dem in Python integrierten Werkzeug für virtuelle Umgebungen. Python enthält _venv_ seit Version 3.3. Sie müssen also über die Schritte unter [Python 3 installieren](#python_3_installieren) hinaus nichts zusätzlich installieren. Auch das [Django-Projekt selbst empfiehlt](https://docs.djangoproject.com/en/6.1/intro/contributing/#getting-a-copy-of-django-s-development-version) diese Vorgehensweise.

> [!NOTE]
> Unter Ubuntu muss dafür das Paket `python3-venv` bereits installiert sein (siehe [Ubuntu 26.04](#ubuntu_26.04)). Unter macOS und Windows wird _venv_ bei der Installation von Python über python.org automatisch mitinstalliert. Auf diesen Plattformen ist kein separater Einrichtungsschritt erforderlich.

### Eine virtuelle Umgebung erstellen

Wechseln Sie in den Ordner, in dem Sie Ihre Django-Projekte speichern möchten, und erstellen Sie mit dem Modul `venv` eine neue virtuelle Umgebung. Der folgende Befehl erstellt einen Ordner namens `my_django_environment`, der eine eigenständige Kopie von Python und den zugehörigen Werkzeugen enthält:

```bash
# Linux/macOS
python3 -m venv my_django_environment

# Windows
py -3 -m venv my_django_environment
```

Die Umgebung ist noch nicht aktiv. Sie müssen sie ausdrücklich aktivieren und dies in jeder neuen Terminalsitzung wiederholen:

```bash
# Linux/macOS
source my_django_environment/bin/activate

# Windows (Command Prompt)
my_django_environment\Scripts\activate.bat

# Windows (PowerShell)
my_django_environment\Scripts\Activate.ps1
```

> [!NOTE]
> Wenn PowerShell die Ausführung von `Activate.ps1` mit dem Hinweis verweigert, dass die Ausführung von Skripten deaktiviert ist, müssen Sie die Skriptausführung zunächst für die aktuelle Sitzung erlauben:
>
> ```bash
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

Sobald die Umgebung aktiv ist, erscheint ihr Name in Klammern am Anfang der Eingabeaufforderung. Das folgende Beispiel zeigt dies unter Ubuntu; unter Windows und macOS ist der Effekt derselbe:

```plain
(my_django_environment) ubuntu@ubuntu:~$
```

Nun befinden Sie sich in der virtuellen Umgebung und können Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Gehen Sie ab hier für diesen Artikel und das gesamte Modul davon aus, dass alle Befehle innerhalb einer virtuellen Python-Umgebung wie der oben eingerichteten ausgeführt werden.

### Eine virtuelle Umgebung verwenden

Für die Arbeit mit virtuellen Umgebungen sollten Sie noch Folgendes wissen:

- Um die aktuelle Umgebung zu verlassen, führen Sie `deactivate` aus.
- Um die Umgebung in einer neuen Terminalsitzung erneut zu verwenden, führen Sie ihren Aktivierungsbefehl noch einmal aus, beispielsweise `source my_django_environment/bin/activate`.
  Jede Umgebung ist lediglich ein Ordner. Es gibt daher keinen separaten Befehl, um Umgebungen aufzulisten oder zwischen ihnen zu wechseln.
- Um eine Umgebung vollständig zu entfernen, führen Sie zuerst `deactivate` aus und löschen Sie dann ihren Ordner – unter Linux/macOS beispielsweise mit `rm -rf my_django_environment` oder unter Windows im Datei-Explorer.

## Django installieren

Nachdem Sie eine virtuelle Umgebung erstellt und aktiviert haben, können Sie Django mit _pip3_ installieren.

```bash
# Linux/macOS
python3 -m pip install django~=6.1.0

# Windows
py -3 -m pip install django~=6.1.0
```

Mit dem folgenden Befehl können Sie prüfen, ob Django installiert ist. Er testet lediglich, ob Python das Django-Modul findet:

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Wenn der obige Windows-Befehl kein Django-Modul anzeigt, versuchen Sie Folgendes:
>
> ```bash
> py -m django --version
> ```
>
> Unter Windows wird Python-3-Skripten beim Aufruf `py -3` vorangestellt. Je nach Installation kann dies jedoch abweichen.
> Falls bei Befehlen Probleme auftreten, versuchen Sie, den Zusatz `-3` wegzulassen.
> Unter Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Im restlichen **Modul** wird zum Aufrufen von Python 3 der _Linux_-Befehl `python3` verwendet. Wenn Sie unter _Windows_ arbeiten, ersetzen Sie diesen Präfix durch `py -3`.

## Quellcodeverwaltung mit Git und GitHub

Werkzeuge zur Quellcodeverwaltung (Source Code Management, SCM) und Versionsverwaltung ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und einem bekanntermaßen funktionierenden Stand auszutauschen.

Es gibt viele verschiedene SCM-Werkzeuge, darunter git, Mercurial, Perforce, SVN (Subversion) und CVS (Concurrent Versions System), sowie cloudbasierte SCM-Hostingdienste wie Bitbucket, GitHub und GitLab.
Für dieses Tutorial hosten wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Hostingdienste für Quellcode. Mit **git** verwalten wir den Quellcode lokal und übertragen ihn bei Bedarf auf GitHub.

> [!NOTE]
> Der Einsatz von SCM-Werkzeugen gehört zu guter Softwareentwicklung!
> Diese Anleitung bietet eine grundlegende Einführung in git und GitHub.
> Weitere Informationen finden Sie unter [Versionsverwaltung](/de/docs/Learn_web_development/Core/Version_control) und [Lernressourcen zu Git und GitHub](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) (GitHub-Dokumentation).

### Grundbegriffe

Git und GitHub verwenden Repositories („Repos“) als übergeordnete Speicherorte für Code. Normalerweise enthält jedes Repo den Quellcode einer einzigen Anwendung oder eines einzigen Moduls.
Repositories können öffentlich sein, sodass jeder im Internet den Code sehen kann, oder privat, sodass nur die besitzende Organisation bzw. das besitzende Benutzerkonto Zugriff hat.

Die gesamte Arbeit findet auf einem bestimmten „Branch“ des Codes in Ihrem Repo statt.
Wenn Sie Änderungen an einem Branch sichern möchten, können Sie einen „Commit“ erstellen. Dieser speichert alle Änderungen seit dem letzten Commit auf dem aktuellen Branch.

Das Repo wird mit einem Standard-Branch namens „main“ erstellt. Mit git können Sie davon weitere Branches ableiten, die zunächst alle Commits des ursprünglichen Branches enthalten.
Sie können Branches durch zusätzliche Commits unabhängig voneinander weiterentwickeln und später auf GitHub mit einem „Pull Request“ (PR) die Änderungen eines Branches in einen anderen zusammenführen.
Mit git können Sie auf Ihrem lokalen Computer auch zwischen Branches wechseln, um beispielsweise verschiedene Ansätze auszuprobieren.

Zusätzlich zu Branches können Sie auf jedem Branch `tags` erstellen und den Branch später in dem so markierten Zustand wiederherstellen.

### Konto und Repository auf GitHub erstellen

Zunächst erstellen wir ein kostenloses Konto auf GitHub.
Anschließend erstellen und konfigurieren wir ein Repository namens „django_local_library“. Darin speichern wir die [Website der lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir sie im weiteren Verlauf dieses Tutorials entwickeln.

Gehen Sie dazu wie folgt vor:

1. Rufen Sie <https://github.com/> auf und erstellen Sie ein Konto.
2. Klicken Sie nach der Anmeldung oben in der Symbolleiste auf **+** und wählen Sie **New repository**.
3. Füllen Sie alle Felder des Formulars aus.
   Die Angaben sind zwar nicht alle verpflichtend, werden aber dringend empfohlen.
   - Geben Sie als Repository-Namen „django_local_library“ ein.
   - Geben Sie als Beschreibung „Local Library website written in Django“ ein.
   - Wählen Sie „Public“ für das Repository aus; dies ist die Standardeinstellung.

     > [!WARNING]
     > Dadurch wird der _gesamte_ Quellcode sichtbar.
     > Speichern Sie keine Zugangsdaten oder andere vertrauliche Informationen in Ihrem Repo, sofern es nicht privat ist.

   - Stellen Sie den Schalter **Add README** auf **On**.
   - Wählen Sie **Python** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie in der Auswahlliste _Add license_ Ihre bevorzugte Lizenz.
     MDN verwendet für dieses Beispiel „Creative Commons Zero v1.0 Universal“.

4. Klicken Sie auf **Create repository**.

   Das Repository wird erstellt und enthält zunächst nur die Dateien `.gitignore`, `LICENSE` und `README.md`.

### Das Repo auf Ihren lokalen Computer klonen

Nachdem das Repository („Repo“) auf GitHub erstellt wurde, klonen (kopieren) wir es auf unseren lokalen Computer:

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt „Clone“ den Tab „HTTPS“ und kopieren Sie die URL.
   Wenn Sie das Repository „django_local_library“ genannt haben, sollte die URL ungefähr so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizielle Git-Downloadanleitung](https://git-scm.com/downloads/)).
3. Richten Sie die Authentifizierung ein, damit git Änderungen an GitHub übertragen kann.
   Am einfachsten installieren Sie dazu die [GitHub CLI](https://cli.github.com/) und führen anschließend den folgenden Befehl aus.
   Wählen Sie bei den Eingabeaufforderungen **GitHub.com**, **HTTPS**, **Yes** (um git mit Ihren GitHub-Zugangsdaten zu authentifizieren) und **Login with a web browser**:

   ```bash
   gh auth login
   ```

   > [!NOTE]
   > GitHub akzeptiert Ihr Kontopasswort nicht für git-Vorgänge.
   > Weitere Möglichkeiten, darunter SSH-Schlüssel, finden Sie unter [GitHub-Zugangsdaten in Git zwischenspeichern](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git) (GitHub-Dokumentation).

4. Öffnen Sie eine Eingabeaufforderung bzw. ein Terminal und klonen Sie Ihr Repo mit der zuvor kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

5. Wechseln Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen vornehmen und synchronisieren

Jetzt ändern wir die lokale Datei `.gitignore`, erstellen einen Commit für die Änderung und aktualisieren das Repository auf GitHub.
Die Änderung ist nützlich; vor allem möchten wir Ihnen damit aber zeigen, wie Sie Änderungen von GitHub abrufen, lokal bearbeiten und anschließend wieder an GitHub übertragen.

1. In der Eingabeaufforderung bzw. im Terminal rufen wir zunächst die neueste Version des Quellcodes von GitHub ab („fetch“) und übernehmen sie dann in den aktuellen Branch („pull“ – abrufen und zusammenführen):

   > [!NOTE]
   > Dieser Schritt ist hier nicht unbedingt erforderlich, da wir den Quellcode gerade erst geklont haben und wissen, dass er aktuell ist.
   > Im Allgemeinen sollten Sie Ihren lokalen Quellcode jedoch vor Änderungen mit GitHub abgleichen.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   „origin“ ist ein _Remote_, der den Speicherort des Quellcode-Repositories bezeichnet, und „main“ ist der Branch.
   Mit dem Befehl `git remote -v` können Sie überprüfen, ob „origin“ auf unser Repo bei GitHub verweist.

2. Als Nächstes erstellen wir einen neuen Branch und wechseln zu ihm, um unsere Änderungen darin zu speichern:

   ```bash
   git checkout -b update_gitignore
   ```

   Mit dem Befehl `checkout` wechseln Sie den Branch, an dem Sie gerade arbeiten.
   Das Flag `-b` gibt an, dass wir einen neuen Branch namens „update_gitignore“ erstellen möchten, statt einen bereits vorhandenen Branch dieses Namens auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, fügen Sie die folgenden Zeilen am Ende ein und speichern Sie die Datei:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Mit `.gitignore` geben Sie Dateien an, die git nicht automatisch sichern soll, etwa temporäre Dateien und andere Build-Artefakte.

4. Fügen Sie mit dem Befehl `add` alle geänderten Dateien, die nicht durch **.gitignore** ausgeschlossen werden, zur „Staging Area“ des aktuellen Branches hinzu.

   ```bash
   git add -A
   ```

5. Prüfen Sie mit dem Befehl `status`, ob alle Dateien, für die Sie einen `commit` erstellen möchten, die richtigen sind. Sie sollten Quellcodedateien einschließen, aber keine Binärdateien, temporären Dateien usw.
   Die Ausgabe sollte ungefähr so aussehen:

   ```bash
   git status
   ```

   ```plain
   On branch update_gitignore
   Changes to be committed:
     (use "git restore --staged <file>..." to unstage)

           modified:   .gitignore
   ```

6. Wenn alles stimmt, erstellen Sie für die Dateien einen `commit` in Ihrem lokalen Repo. Geben Sie mit dem Flag `-m` eine kurze, aber aussagekräftige Commit-Nachricht an.
   Damit bestätigen Sie die Änderungen und machen sie zu einem offiziellen Bestandteil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Das entfernte Repo wurde bislang nicht geändert.
   Mit dem folgenden Befehl können wir den Branch `update_gitignore` an das Repo „origin“ auf GitHub übertragen:

   ```bash
   git push origin update_gitignore
   ```

8. Kehren Sie zur GitHub-Seite zurück, auf der Sie Ihr Repo erstellt haben, und laden Sie die Seite neu.

   Ein Banner sollte erscheinen, über das Sie für den gerade hochgeladenen Branch „Compare and pull request“ auswählen können.
   Klicken Sie auf die Schaltfläche und folgen Sie den Anweisungen, um einen Pull Request zu erstellen und anschließend zusammenzuführen.

   ![Banner mit der Frage, ob der Benutzer die jüngsten Änderungen des Branches vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der Branch „main“ Ihres Repos auf GitHub Ihre Änderungen an `.gitignore`.

9. Wenn sich Dateien ändern, können Sie Ihr lokales Repo weiterhin mit diesem Ablauf aus Hinzufügen, Committen und Übertragen aktualisieren.

Im nächsten Thema verwenden wir dieses Repo, um den Quellcode unserer Website für die lokale Bibliothek zu speichern.

## Weitere Python-Werkzeuge

Erfahrene Python-Entwickler installieren gegebenenfalls zusätzliche Werkzeuge wie Linter, die dabei helfen, häufige Fehler im Code zu erkennen.

Verwenden Sie einen Linter, der Django berücksichtigt, beispielsweise [pylint-django](https://pypi.org/project/pylint-django/). Einige allgemeine Python-Linter wie `pylint` melden fälschlicherweise Fehler in den von Django erzeugten Standarddateien.

## Ihre Installation testen

Der obige Test funktioniert, ist aber nicht besonders anschaulich. Interessanter ist es, ein Grundgerüst für ein Projekt zu erstellen und zu prüfen, ob es funktioniert. Wechseln Sie dazu zunächst in der Eingabeaufforderung bzw. im Terminal zu dem Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testwebsite und wechseln Sie hinein.

```bash
mkdir django_test
cd django_test
```

Anschließend können Sie mit dem Werkzeug **django-admin** wie gezeigt das Grundgerüst für eine neue Website namens „_mytestsite_“ erstellen. Wechseln Sie danach in den erstellten Ordner. Dort finden Sie das Hauptskript zur Verwaltung von Projekten namens **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

Aus diesem Ordner heraus können wir den _Entwicklungswebserver_ mit **manage.py** und dem Befehl `runserver` starten:

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Die Warnungen zu „unapplied migration(s)“ können Sie an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Website anzeigen, indem Sie in Ihrem lokalen Webbrowser die folgende URL aufrufen: `http://127.0.0.1:8000/`.
Sie sollten die standardmäßige Willkommensseite von Django sehen. Sie zeigt eine Rakete und die Meldung „The install worked successfully! Congratulations!“.

## Zusammenfassung

Auf Ihrem Computer ist jetzt eine funktionsfähige Django-Entwicklungsumgebung eingerichtet.

Im Abschnitt zum Testen haben Sie außerdem kurz gesehen, wie Sie mit `django-admin startproject` eine neue Django-Website erstellen und sie mit dem Entwicklungswebserver (`python3 manage.py runserver`) in Ihrem Browser aufrufen. Im nächsten Artikel bauen wir darauf auf und entwickeln eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Kurzanleitung zur Installation](https://docs.djangoproject.com/en/6.1/intro/install/) (Django-Dokumentation)
- [Django installieren – vollständiger Leitfaden](https://docs.djangoproject.com/en/6.1/topics/install/) (Django-Dokumentation) – behandelt auch das Entfernen von Django
- [Django unter Windows installieren](https://docs.djangoproject.com/en/6.1/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
