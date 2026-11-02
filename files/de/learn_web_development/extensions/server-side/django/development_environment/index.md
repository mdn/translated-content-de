---
title: Einrichten einer Django-Entwicklungsumgebung
short-title: Einrichtung der Entwicklungsumgebung
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
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
        Eine funktionsfähige Entwicklungsumgebung für Django (6.1.*) auf Ihrem Computer einrichten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick über die Django-Entwicklungsumgebung

Django macht es Ihnen leicht, Ihren Computer für die Entwicklung von Webanwendungen einzurichten. In diesem Abschnitt erfahren Sie, was die Entwicklungsumgebung umfasst und welche Möglichkeiten Sie bei der Einrichtung und Konfiguration haben. Im weiteren Verlauf des Artikels erläutern wir die _empfohlene_ Methode zur Installation der Django-Entwicklungsumgebung unter Ubuntu, macOS und Windows und zeigen Ihnen, wie Sie sie testen können.

### Was ist die Django-Entwicklungsumgebung?

Die Entwicklungsumgebung ist eine Installation von Django auf Ihrem lokalen Computer. Sie können damit Django-Apps entwickeln und testen, bevor Sie sie in einer Produktionsumgebung bereitstellen.

Django selbst stellt vor allem eine Reihe von Python-Skripten zum Erstellen und Bearbeiten von Django-Projekten bereit. Dazu kommt ein einfacher _Entwicklungswebserver_, mit dem Sie lokale Django-Webanwendungen (also Anwendungen auf Ihrem Computer statt auf einem externen Webserver) im Browser Ihres Computers testen können.

Zur Entwicklungsumgebung gehören häufig weitere Werkzeuge, auf die wir hier nicht eingehen. Dazu zählen beispielsweise ein [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und Linter zur automatischen Formatierung. Wir gehen davon aus, dass Sie bereits einen Code-Editor installiert haben.

### Welche Möglichkeiten gibt es bei der Einrichtung von Django?

Django lässt sich hinsichtlich Installationsort und Konfiguration sehr flexibel einsetzen. Sie können Django:

- auf verschiedenen Betriebssystemen installieren;
- aus dem Quellcode, über den Python Package Index (PyPi) und in vielen Fällen über den Paketmanager des Hostcomputers installieren;
- für die Verwendung einer von mehreren Datenbanken konfigurieren, die gegebenenfalls ebenfalls separat installiert und konfiguriert werden müssen;
- in der systemweiten Python-Umgebung oder in separaten virtuellen Python-Umgebungen ausführen.

Jede dieser Möglichkeiten erfordert eine etwas andere Einrichtung und Konfiguration. Die folgenden Unterabschnitte erläutern einige der Optionen. Im weiteren Verlauf des Artikels zeigen wir Ihnen, wie Sie Django auf einigen Betriebssystemen einrichten. Von dieser Einrichtung gehen wir auch im restlichen Modul aus.

> [!NOTE]
> Weitere Installationsmöglichkeiten werden in der offiziellen Django-Dokumentation beschrieben. Links zu den [entsprechenden Dokumenten finden Sie weiter unten](#siehe_auch).

#### Welche Betriebssysteme werden unterstützt?

Django-Webanwendungen können auf fast jedem Computer ausgeführt werden, auf dem die Programmiersprache Python 3 läuft, darunter Windows, macOS, Linux/Unix und Solaris. Nahezu jeder Computer sollte leistungsfähig genug sein, um Django während der Entwicklung auszuführen.

In diesem Artikel finden Sie Anleitungen für Windows, macOS und Linux/Unix.

#### Welche Python-Version sollte verwendet werden?

Sie können jede Python-Version verwenden, die von Ihrer Zielversion von Django unterstützt wird. Für Django 6.1 sind Python 3.12 bis 3.14 zulässig (siehe [FAQ: Installation](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django)).

Das Django-Projekt _empfiehlt_ die Verwendung der neuesten verfügbaren Version innerhalb der unterstützten Python-Versionen und unterstützt diese „offiziell“.

#### Wo können wir Django herunterladen?

Es gibt drei Bezugsquellen für Django:

- Das Python-Paketrepository (PyPi) mit dem Werkzeug _pip_. Dies ist der beste Weg, um die neueste stabile Django-Version zu erhalten.
- Den Paketmanager Ihres Computers. Mit dem Betriebssystem ausgelieferte Django-Pakete bieten einen vertrauten Installationsweg. Beachten Sie jedoch, dass die enthaltene Version recht alt sein kann und sich nur in der systemweiten Python-Umgebung installieren lässt, was möglicherweise nicht Ihren Anforderungen entspricht.
- Den Quellcode. Sie können die neueste, noch in Entwicklung befindliche Django-Version aus dem Quellcode beziehen und installieren. Für Einsteiger ist dies nicht empfehlenswert, wird aber benötigt, wenn Sie selbst zu Django beitragen möchten.

Dieser Artikel zeigt, wie Sie Django über PyPi installieren, um die neueste stabile Version zu erhalten.

#### Welche Datenbank?

Django unterstützt offiziell die Datenbanken PostgreSQL, MariaDB, MySQL, Oracle und SQLite. Darüber hinaus gibt es Community-Bibliotheken, die andere verbreitete SQL- und NoSQL-Datenbanken in unterschiedlichem Umfang unterstützen. Wir empfehlen, für die Produktions- und die Entwicklungsumgebung dieselbe Datenbank zu wählen. Django abstrahiert zwar viele Unterschiede zwischen Datenbanken durch seinen Object-Relational Mapper (ORM), dennoch gibt es [potenzielle Probleme](https://docs.djangoproject.com/en/6.1/ref/databases/), die Sie besser vermeiden sollten.

In diesem Artikel und im größten Teil dieses Moduls verwenden wir die Datenbank _SQLite_, die ihre Daten in einer Datei speichert. SQLite ist als leichtgewichtige Datenbank gedacht und eignet sich nicht für ein hohes Maß an gleichzeitigen Zugriffen. Für Anwendungen, die hauptsächlich Daten lesen, ist sie jedoch eine ausgezeichnete Wahl.

> [!NOTE]
> Wenn Sie Ihr Website-Projekt mit den Standardwerkzeugen (_django-admin_) erstellen, ist Django standardmäßig für die Verwendung von SQLite konfiguriert. Für den Einstieg ist das eine gute Wahl, da keine zusätzliche Einrichtung oder Konfiguration erforderlich ist.

#### Systemweit oder in einer virtuellen Python-Umgebung installieren?

Wenn Sie Python 3 installieren, erhalten Sie eine einzige globale Umgebung, die von sämtlichem Python-3-Code gemeinsam genutzt wird. Sie können darin beliebige Python-Pakete installieren, aber jeweils nur eine bestimmte Version eines Pakets gleichzeitig.

> [!NOTE]
> Python-Anwendungen, die in der globalen Umgebung installiert sind, können miteinander in Konflikt geraten, beispielsweise wenn sie unterschiedliche Versionen desselben Pakets benötigen.

Wenn Sie Django in der standardmäßigen globalen Umgebung installieren, können Sie auf dem Computer nur eine Django-Version verwenden. Das kann problematisch sein, wenn Sie neue Websites mit der neuesten Django-Version erstellen und gleichzeitig Websites pflegen möchten, die auf älteren Versionen beruhen.

Erfahrene Python- und Django-Entwickler führen Python-Apps deshalb üblicherweise in unabhängigen _virtuellen Python-Umgebungen_ aus. So können auf einem Computer mehrere unterschiedliche Django-Umgebungen vorhanden sein. Auch das Django-Entwicklungsteam empfiehlt die Verwendung virtueller Python-Umgebungen!

Dieses Modul setzt voraus, dass Sie Django in einer virtuellen Umgebung installiert haben. Im Folgenden zeigen wir Ihnen, wie das geht.

## Python 3 installieren

Um Django zu verwenden, muss Python 3 auf Ihrem Betriebssystem installiert sein. Außerdem benötigen Sie das Werkzeug _pip3_ für den [Python Package Index](https://pypi.org/). Damit verwalten Sie die Python-Pakete und -Bibliotheken, die Django und Ihre anderen Python-Apps verwenden: Sie können sie installieren, aktualisieren und entfernen.

Dieser Abschnitt erklärt kurz, wie Sie unter Ubuntu Linux 26.04 (und 24.04), macOS und Windows 11 prüfen, welche Python-Versionen vorhanden sind, und bei Bedarf neue Versionen installieren.

> [!NOTE]
> Je nach Plattform können Sie Python und pip möglicherweise auch über den Paketmanager des Betriebssystems oder auf anderem Wege installieren. Für die meisten Plattformen können Sie die benötigten Installationsdateien von <https://www.python.org/downloads/> herunterladen und mit dem plattformspezifischen Verfahren installieren.

### Ubuntu 26.04

Ubuntu Linux 26.04 LTS enthält standardmäßig Python 3.14. Sie können dies mit dem folgenden Befehl im Bash-Terminal überprüfen:

```bash
python3 -V
# Output: Python 3.14.4
```

Weder das Werkzeug _pip3_ für den Python Package Index noch das Modul _venv_, mit dem Sie später virtuelle Umgebungen erstellen, ist jedoch standardmäßig verfügbar. Sie können beide im Bash-Terminal installieren:

```bash
sudo apt install python3-pip python3-venv
```

> [!NOTE]
> Wenn Sie stattdessen **Ubuntu 24.04 LTS** verwenden, gibt `python3 -V` Python 3.12 aus.
> Diese Version liegt im [von Django 6.1 unterstützten Bereich](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django). Sie müssen also keine neuere Python-Version installieren, um der Anleitung zu folgen.
> Den Befehl `sudo apt install python3-pip python3-venv` müssen Sie trotzdem ausführen, da pip und venv auch unter 24.04 nicht standardmäßig installiert sind.

### macOS

macOS enthält standardmäßig kein Python 3 (ältere Versionen enthalten Python 2). Sie können dies mit dem folgenden Befehl im Terminal überprüfen:

```bash
python3 -V
```

Der Befehl zeigt entweder eine Python-Versionsnummer an, was bedeutet, dass Python 3 installiert ist, oder `python3: command not found`, was bedeutet, dass Python 3 nicht gefunden wurde.

Sie können Python 3 zusammen mit dem Werkzeug _pip3_ einfach über [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:
   1. Rufen Sie <https://www.python.org/downloads/macos/> auf.
   2. Laden Sie die stabile Ausgabe der neuesten [unterstützten Version](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 6.1 funktioniert.
      Zum Zeitpunkt der Erstellung dieses Artikels ist das Python 3.14.7.

2. Suchen Sie die Datei mit dem _Finder_ und doppelklicken Sie auf die Paketdatei. Folgen Sie den Installationsanweisungen.

Öffnen Sie anschließend ein neues Terminalfenster, führen Sie `python3 -V` erneut aus und prüfen Sie, ob die Python-Versionsnummer angezeigt wird.

Ob _pip3_ installiert ist, können Sie prüfen, indem Sie die verfügbaren Pakete auflisten:

```bash
pip3 list
```

### Windows 11

Windows enthält standardmäßig kein Python. Sie können es jedoch zusammen mit dem Werkzeug _pip3_ einfach über [python.org](https://www.python.org/) installieren:

1. Laden Sie das benötigte Installationsprogramm herunter:
   1. Rufen Sie <https://www.python.org/downloads/windows/> auf.
   2. Laden Sie die stabile Ausgabe der neuesten [unterstützten Version](https://docs.djangoproject.com/en/6.1/faq/install/#what-python-version-can-i-use-with-django) herunter, die mit Django 6.1 funktioniert.
      Zum Zeitpunkt der Erstellung dieses Artikels ist das Python 3.14.7.

2. Installieren Sie Python, indem Sie auf die heruntergeladene Datei doppelklicken und den Installationsanweisungen folgen.
3. Aktivieren Sie unbedingt das Kontrollkästchen „Add Python to PATH“.

Öffnen Sie danach eine neue Eingabeaufforderung und überprüfen Sie mit dem folgenden Befehl, ob Python 3 installiert wurde:

```bash
py -3 -V
```

Das Windows-Installationsprogramm enthält standardmäßig _pip3_, den Python-Paketmanager. Sie können die installierten Pakete wie folgt auflisten:

```bash
py -3 -m pip list
```

> [!NOTE]
> Das Installationsprogramm sollte alles einrichten, was für den obigen Befehl erforderlich ist.
> Falls Sie dennoch eine Meldung erhalten, dass Python nicht gefunden werden kann, haben Sie es möglicherweise nicht zum Systempfad hinzugefügt.
> Führen Sie dazu das Installationsprogramm erneut aus, wählen Sie „Modify“ und aktivieren Sie auf der zweiten Seite das Kontrollkästchen „Add Python to environment variables“.

## Python 3 und pip3 aufrufen

Wie Sie vielleicht bemerkt haben, verwenden wir in den vorigen Abschnitten je nach Betriebssystem unterschiedliche Befehle, um Python 3 und pip aufzurufen.

Wenn nur Python 3 installiert ist und nicht Python 2, können Sie im Allgemeinen auf jedem Betriebssystem die einfachen Befehle `python` und `pip` verwenden. Wenn dies auf Ihrem System möglich ist, wird bei der Ausführung dieser Befehle mit `-V` eine Versionsangabe mit „3“ angezeigt:

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

Die folgenden Anweisungen verwenden die plattformspezifischen Befehle, da diese auf mehr Systemen funktionieren.

## Django in einer virtuellen Python-Umgebung verwenden

Wir erstellen unsere virtuellen Umgebungen mit [venv](https://docs.python.org/3/library/venv.html), dem in Python integrierten Werkzeug für virtuelle Umgebungen. _venv_ ist seit Version 3.3 in Python enthalten. Sie müssen also über die Schritte unter [Python 3 installieren](#python_3_installieren) hinaus nichts Zusätzliches installieren. Dies entspricht auch der [Empfehlung des Django-Projekts](https://docs.djangoproject.com/en/6.1/intro/contributing/#getting-a-copy-of-django-s-development-version).

> [!NOTE]
> Unter Ubuntu muss das Paket `python3-venv` bereits installiert sein, damit dies funktioniert (siehe [Ubuntu 26.04](#ubuntu_26.04)). Unter macOS und Windows wird _venv_ automatisch mitinstalliert, wenn Sie Python von python.org installieren. Für diese Plattformen ist daher kein separater Einrichtungsschritt nötig.

### Eine virtuelle Umgebung erstellen

Wechseln Sie in den Ordner, in dem Sie Ihre Django-Projekte aufbewahren möchten, und erstellen Sie mit dem Modul `venv` eine neue virtuelle Umgebung. Der folgende Befehl erstellt einen Ordner namens `my_django_environment`, der eine eigenständige Kopie von Python und seinen Werkzeugen enthält:

```bash
# Linux/macOS
python3 -m venv my_django_environment

# Windows
py -3 -m venv my_django_environment
```

Die Umgebung ist noch nicht aktiv. Sie müssen sie ausdrücklich aktivieren und diesen Schritt in jeder neuen Terminalsitzung wiederholen:

```bash
# Linux/macOS
source my_django_environment/bin/activate

# Windows (Command Prompt)
my_django_environment\Scripts\activate.bat

# Windows (PowerShell)
my_django_environment\Scripts\Activate.ps1
```

> [!NOTE]
> Falls PowerShell die Ausführung von `Activate.ps1` mit einer Meldung verweigert, dass die Ausführung von Skripten deaktiviert ist, müssen Sie diese zunächst für die aktuelle Sitzung zulassen:
>
> ```bash
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

Sobald die Umgebung aktiv ist, erscheint ihr Name am Anfang der Eingabeaufforderung in Klammern. Das folgende Beispiel stammt aus Ubuntu; unter Windows und macOS sieht es ähnlich aus:

```plain
(my_django_environment) ubuntu@ubuntu:~$
```

Jetzt befinden Sie sich in der virtuellen Umgebung und können Django installieren und mit der Entwicklung beginnen.

> [!NOTE]
> Gehen Sie ab jetzt in diesem Artikel und im gesamten Modul davon aus, dass alle Befehle innerhalb einer virtuellen Python-Umgebung wie der oben eingerichteten ausgeführt werden.

### Eine virtuelle Umgebung verwenden

Für die Arbeit mit virtuellen Umgebungen sollten Sie außerdem Folgendes wissen:

- Um die aktuelle Umgebung zu verlassen, führen Sie `deactivate` aus.
- Um die Umgebung in einer neuen Terminalsitzung wieder zu verwenden, führen Sie ihren Aktivierungsbefehl erneut aus, beispielsweise `source my_django_environment/bin/activate`.
  Jede Umgebung ist lediglich ein Ordner. Es gibt daher keinen separaten Befehl, um Umgebungen aufzulisten oder zwischen ihnen zu wechseln.
- Um eine Umgebung vollständig zu entfernen, deaktivieren Sie sie zuerst mit `deactivate` und löschen Sie dann ihren Ordner, beispielsweise mit `rm -rf my_django_environment` unter Linux/macOS oder im Datei-Explorer unter Windows.

## Django installieren

Nachdem Sie eine virtuelle Umgebung erstellt und aktiviert haben, können Sie Django mit _pip3_ installieren.

```bash
# Linux/macOS
python3 -m pip install django~=6.1.0

# Windows
py -3 -m pip install django~=6.1.0
```

Mit dem folgenden Befehl können Sie prüfen, ob Django installiert ist. Er testet lediglich, ob Python das Django-Modul finden kann:

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> Wenn der obige Windows-Befehl kein vorhandenes Django-Modul anzeigt, versuchen Sie Folgendes:
>
> ```bash
> py -m django --version
> ```
>
> Unter Windows werden _Python-3_-Skripte gestartet, indem dem Befehl `py -3` vorangestellt wird. Dies kann jedoch je nach Installation variieren.
> Falls Probleme mit Befehlen auftreten, versuchen Sie, den Zusatz `-3` wegzulassen.
> Unter Linux/macOS lautet der Befehl `python3`.

> [!WARNING]
> Im restlichen **Modul** wird zum Aufrufen von Python 3 der _Linux_-Befehl (`python3`) verwendet. Wenn Sie unter _Windows_ arbeiten, ersetzen Sie diesen Befehl durch `py -3`.

## Quellcodeverwaltung mit Git und GitHub

Werkzeuge für die Quellcodeverwaltung (Source Code Management, SCM) und Versionsverwaltung ermöglichen es Ihnen, Versionen Ihres Quellcodes zuverlässig zu speichern und wiederherzustellen, Änderungen auszuprobieren und Code zwischen Ihren Experimenten und einem bekanntermaßen funktionierenden Stand auszutauschen.

Es gibt viele verschiedene SCM-Werkzeuge, darunter git, Mercurial, Perforce, SVN (Subversion) und CVS (Concurrent Versions System), sowie cloudbasierte SCM-Hostingdienste wie Bitbucket, GitHub und GitLab. Für dieses Tutorial speichern wir unseren Code auf [GitHub](https://github.com/), einem der beliebtesten cloudbasierten Hostingdienste für Quellcode. Mit dem Werkzeug **git** verwalten wir den Quellcode lokal und übertragen ihn bei Bedarf zu GitHub.

> [!NOTE]
> Die Verwendung von SCM-Werkzeugen gehört zu guter Softwareentwicklungspraxis!
> Diese Anweisungen bieten eine grundlegende Einführung in git und GitHub.
> Weitere Informationen finden Sie unter [Versionskontrolle](/de/docs/Learn_web_development/Core/Version_control) und [Lernressourcen zu Git und GitHub](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources) (GitHub-Dokumentation).

### Grundbegriffe

Git und GitHub verwenden Repositories („Repos“) als übergeordnete Speicherorte für Code. Ein Repo enthält normalerweise den Quellcode für genau eine Anwendung oder ein Modul. Repositories können öffentlich sein, sodass jeder im Internet den Code sehen kann, oder privat. Auf private Repositories haben nur die zugehörige Organisation oder das zugehörige Benutzerkonto Zugriff.

Alle Arbeiten erfolgen in einem bestimmten Codezweig, einem „Branch“, Ihres Repos. Wenn Sie Änderungen an einem Branch sichern möchten, können Sie einen „Commit“ erstellen. Er speichert alle Änderungen seit dem letzten Commit im aktuellen Branch.

Das Repo wird mit einem Standard-Branch namens „main“ erstellt. Mit git können Sie davon weitere Branches ableiten, die anfangs alle Commits des ursprünglichen Branches enthalten. Indem Sie Commits hinzufügen, können Sie Branches unabhängig voneinander weiterentwickeln. Später können Sie auf GitHub einen „Pull Request“ (PR) verwenden, um Änderungen aus einem Branch in einen anderen zu übernehmen. Mit git können Sie auf Ihrem lokalen Computer außerdem zwischen Branches wechseln, um beispielsweise unterschiedliche Ansätze auszuprobieren.

Neben Branches können Sie in jedem Branch `tags` erstellen und den Branch später an diesem Punkt wiederherstellen.

### Ein Konto und ein Repository auf GitHub erstellen

Zunächst erstellen wir ein kostenloses Konto auf GitHub. Anschließend erstellen und konfigurieren wir ein Repository namens „django_local_library“. Darin speichern wir die [Website der lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), während wir sie im weiteren Verlauf dieses Tutorials entwickeln.

Gehen Sie wie folgt vor:

1. Rufen Sie <https://github.com/> auf und erstellen Sie ein Konto.
2. Nachdem Sie sich angemeldet haben, klicken Sie in der oberen Symbolleiste auf **+** und wählen Sie **New repository**.
3. Füllen Sie alle Felder des Formulars aus.
   Sie sind zwar nicht alle Pflichtfelder, die Angaben werden aber dringend empfohlen.
   - Geben Sie als Repository-Namen „django_local_library“ ein.
   - Geben Sie als Beschreibung „Local Library website written in Django“ ein.
   - Wählen Sie „Public“ für das Repository aus (die Standardeinstellung).

     > [!WARNING]
     > Dadurch wird der _gesamte_ Quellcode öffentlich sichtbar.
     > Speichern Sie keine Zugangsdaten oder anderen vertraulichen Informationen in Ihrem Repo, sofern es nicht privat ist.

   - Stellen Sie den Schalter **Add README** auf **On**.
   - Wählen Sie **Python** in der Auswahlliste _Add .gitignore_.
   - Wählen Sie Ihre bevorzugte Lizenz in der Auswahlliste _Add license_.
     MDN verwendet für dieses Beispiel „Creative Commons Zero v1.0 Universal“.

4. Klicken Sie auf **Create repository**.

   Das Repository wird erstellt und enthält zunächst nur die Dateien `.gitignore`, `LICENSE` und `README.md`.

### Das Repo auf Ihren lokalen Computer klonen

Nachdem das Repository („Repo“) auf GitHub erstellt wurde, klonen (kopieren) wir es auf den lokalen Computer:

1. Klicken Sie auf GitHub auf die grüne Schaltfläche **Code**.
   Wählen Sie im Abschnitt „Clone“ den Tab „HTTPS“ und kopieren Sie die URL.
   Wenn Sie den Repository-Namen „django_local_library“ verwendet haben, sollte die URL ungefähr so aussehen: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Installieren Sie _git_ auf Ihrem lokalen Computer ([offizielle Anleitung zum Herunterladen von Git](https://git-scm.com/downloads/)).
3. Richten Sie die Authentifizierung ein, damit git Änderungen an GitHub übertragen kann.
   Am einfachsten installieren Sie dazu die [GitHub CLI](https://cli.github.com/) und führen anschließend den folgenden Befehl aus.
   Wählen Sie bei den Abfragen **GitHub.com**, **HTTPS**, **Yes** (um git mit Ihren GitHub-Zugangsdaten zu authentifizieren) und **Login with a web browser**:

   ```bash
   gh auth login
   ```

   > [!NOTE]
   > GitHub akzeptiert Ihr Kontopasswort nicht für git-Operationen.
   > Weitere Möglichkeiten, darunter SSH-Schlüssel, finden Sie unter [GitHub-Zugangsdaten in Git zwischenspeichern](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git) (GitHub-Dokumentation).

4. Öffnen Sie eine Eingabeaufforderung oder ein Terminal und klonen Sie Ihr Repo mit der zuvor kopierten URL:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   Dadurch wird das Repository im aktuellen Verzeichnis erstellt.

5. Wechseln Sie in den Repo-Ordner.

   ```bash
   cd django_local_library
   ```

### Änderungen vornehmen und synchronisieren

Jetzt ändern wir die Datei `.gitignore` auf dem lokalen Computer, erstellen einen Commit für die Änderung und aktualisieren das Repository auf GitHub. Die Änderung ist nützlich, dient hier aber vor allem dazu, Ihnen zu zeigen, wie Sie Änderungen von GitHub abrufen, lokal Änderungen vornehmen und diese anschließend zu GitHub übertragen.

1. In der Eingabeaufforderung bzw. im Terminal rufen wir zunächst die neueste Version des Quellcodes von GitHub ab („fetch“) und übernehmen sie anschließend in den aktuellen Branch („pull“):

   > [!NOTE]
   > Dieser Schritt ist nicht zwingend erforderlich, da wir den Quellcode gerade erst geklont haben und wissen, dass er aktuell ist.
   > Im Allgemeinen sollten Sie Ihren Quellcode jedoch vor Änderungen mit GitHub synchronisieren.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   „origin“ ist ein _Remote_, das den Speicherort des Repos mit dem Quellcode bezeichnet, und „main“ ist der Branch.
   Mit dem Befehl `git remote -v` können Sie überprüfen, ob „origin“ auf unser Repo auf GitHub verweist.

2. Als Nächstes erstellen wir einen neuen Branch für unsere Änderungen und wechseln zu ihm:

   ```bash
   git checkout -b update_gitignore
   ```

   Mit dem Befehl `checkout` wechseln Sie den Branch, an dem Sie gerade arbeiten.
   Die Option `-b` gibt an, dass wir einen neuen Branch namens „update_gitignore“ erstellen möchten, statt einen bereits vorhandenen Branch mit diesem Namen auszuwählen.

3. Öffnen Sie die Datei **.gitignore**, fügen Sie die folgenden Zeilen am Ende ein und speichern Sie die Datei:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Mit `.gitignore` geben Sie Dateien an, die git nicht automatisch sichern soll, beispielsweise temporäre Dateien und andere Build-Artefakte.

4. Fügen Sie mit dem Befehl `add` alle geänderten Dateien, die nicht durch **.gitignore** ausgeschlossen sind, zur „Staging Area“ des aktuellen Branches hinzu.

   ```bash
   git add -A
   ```

5. Überprüfen Sie mit dem Befehl `status`, ob alle Dateien, für die Sie einen `commit` erstellen möchten, korrekt sind. Sie sollten Quellcodedateien einschließen, aber keine Binärdateien oder temporären Dateien.
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

6. Wenn alles stimmt, erstellen Sie einen `commit` der Dateien in Ihrem lokalen Repo. Verwenden Sie die Option `-m`, um eine kurze, aber aussagekräftige Commit-Nachricht anzugeben.
   Damit bestätigen Sie die Änderungen und machen sie offiziell zum Bestandteil des lokalen Repos.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. Das entfernte Repo wurde bis zu diesem Punkt noch nicht geändert.
   Mit dem folgenden Befehl können wir den Branch `update_gitignore` zum Repo „origin“ auf GitHub übertragen:

   ```bash
   git push origin update_gitignore
   ```

8. Kehren Sie zur Seite auf GitHub zurück, auf der Sie Ihr Repo erstellt haben, und laden Sie die Seite neu.

   Es sollte ein Banner mit einer Schaltfläche erscheinen, über die Sie für den gerade hochgeladenen Branch einen „Compare and pull request“ erstellen können.
   Klicken Sie auf die Schaltfläche und folgen Sie den Anweisungen, um einen Pull Request zu erstellen und anschließend zusammenzuführen.

   ![Banner mit der Frage, ob der Benutzer die jüngsten Branch-Änderungen vergleichen und zusammenführen möchte](github_compare_and_pull_banner.png)

   Nach dem Zusammenführen enthält der Branch „main“ im Repo auf GitHub Ihre Änderungen an `.gitignore`.

9. Wenn sich Dateien ändern, können Sie Ihr lokales Repo weiterhin mit diesem Ablauf aus Hinzufügen, Committen und Übertragen aktualisieren.

Im nächsten Thema verwenden wir dieses Repo, um den Quellcode der Website unserer lokalen Bibliothek zu speichern.

## Weitere Python-Werkzeuge

Erfahrene Python-Entwickler installieren gegebenenfalls zusätzliche Werkzeuge wie Linter, die dabei helfen, häufige Fehler im Code zu erkennen.

Verwenden Sie einen Linter, der Django berücksichtigt, beispielsweise [pylint-django](https://pypi.org/project/pylint-django/). Manche allgemeinen Python-Linter wie `pylint` melden fälschlicherweise Fehler in den für Django generierten Standarddateien.

## Ihre Installation testen

Der obige Test funktioniert, ist aber nicht besonders spannend. Ein interessanterer Test besteht darin, ein Projektgerüst zu erstellen und zu prüfen, ob es läuft. Wechseln Sie dazu in der Eingabeaufforderung bzw. im Terminal zunächst an den Ort, an dem Sie Ihre Django-Apps speichern möchten. Erstellen Sie einen Ordner für Ihre Testwebsite und wechseln Sie in diesen Ordner.

```bash
mkdir django_test
cd django_test
```

Anschließend können Sie mit dem Werkzeug **django-admin** wie gezeigt ein neues Website-Grundgerüst namens „_mytestsite_“ erstellen. Wechseln Sie danach in dessen Ordner. Dort finden Sie das Hauptskript zur Verwaltung von Projekten: **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

In diesem Ordner können wir mit **manage.py** und dem Befehl `runserver` den _Entwicklungswebserver_ starten:

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> Die Warnungen zu „unapplied migration(s)“ können Sie an dieser Stelle ignorieren!

Sobald der Server läuft, können Sie die Website in Ihrem lokalen Webbrowser unter `http://127.0.0.1:8000/` aufrufen. Sie sollten die standardmäßige Django-Willkommensseite sehen, auf der eine Rakete und die Meldung „The install worked successfully! Congratulations!“ angezeigt werden.

## Zusammenfassung

Sie haben jetzt eine funktionsfähige Django-Entwicklungsumgebung auf Ihrem Computer eingerichtet.

Im Abschnitt zum Testen haben Sie außerdem kurz gesehen, wie Sie mit `django-admin startproject` eine neue Django-Website erstellen und sie mit dem Entwicklungswebserver (`python3 manage.py runserver`) in Ihrem Browser ausführen können. Im nächsten Artikel bauen wir darauf auf und entwickeln eine einfache, aber vollständige Webanwendung.

## Siehe auch

- [Kurzanleitung zur Installation](https://docs.djangoproject.com/en/6.1/intro/install/) (Django-Dokumentation)
- [Django installieren – vollständiger Leitfaden](https://docs.djangoproject.com/en/6.1/topics/install/) (Django-Dokumentation) – behandelt auch die Deinstallation von Django
- [Django unter Windows installieren](https://docs.djangoproject.com/en/6.1/howto/windows/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
