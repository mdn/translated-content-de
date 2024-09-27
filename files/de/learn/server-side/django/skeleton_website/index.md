---
title: "Django-Tutorial Teil 2: Erstellung einer Grundstruktur für eine Website"
slug: Learn/Server-side/Django/skeleton_website
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django-Tutorial](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein Projekt für eine "Grundstruktur" einer Website erstellen können, die Sie dann mit spezifischen Einstellungen, Pfaden, Modellen, Ansichten und Templates ausstatten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Django/development_environment">Einrichten einer Django-Entwicklungsumgebung</a>.
        Überprüfen Sie das <a href="/de/docs/Learn/Server-side/Django/Tutorial_local_library_website">Django-Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, die Django-Tools zu nutzen, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Grundstruktur" einer Website erstellen können, die Sie dann mit spezifischen Einstellungen, Pfaden, Modellen, Ansichten und Templates ausfüllen können (wir diskutieren diese in späteren Artikeln).

Um zu beginnen:

1. Verwenden Sie das `django-admin`-Tool, um einen Projektordner, die Basisdateivorlagen und **manage.py** zu generieren, das als Verwaltungsskript für Ihr Projekt dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Downloadbereich usw. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann bei Bedarf in verschiedenen Projekten wiederverwendet werden können.

3. Registrieren Sie die neuen Anwendungen, um sie in das Projekt einzubeziehen.
4. Verbinden Sie den **url/path**-Mapper für jede Anwendung.

Für die [Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) sind der Website- und Projektordner _locallibrary_ benannt und enthalten eine Anwendung namens _catalog_.
Die Ordnerstruktur auf oberster Ebene sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte erläutern die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels diskutieren wir weitere projektweite Konfigurationen, die Sie ebenfalls zu diesem Zeitpunkt vornehmen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Kommandozeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in den "django_local_library" verschieben, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) beim Einrichten der Entwicklungsumgebung).
3. Erstellen Sie das neue Projekt mithilfe des Befehls `django-admin startproject`, wie gezeigt, und navigieren Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das `django-admin`-Tool erstellt folgende Ordner/Dateistruktur:

   ```bash
   locallibrary/
       manage.py
       locallibrary/
           __init__.py
           settings.py
           urls.py
           wsgi.py
           asgi.py
   ```

Der _locallibrary_ Projekt-Unterordner ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung aller von uns erstellten Anwendungen, den Speicherort unserer statischen Dateien, Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die URL-zu-Ansicht-Zuordnungen der Seite. Während dies _alle_ URL-Zuordnungscodes enthalten könnte, ist es häufiger, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver zu helfen. Sie können dies als Boilerplate betrachten.
- **asgi.py** ist ein Standard für die Kommunikation von Python-asynchronen Webanwendungen und -servern. Der Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bereitstellte. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungsframeworks.

Das **manage.py**-Skript wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als nächstes den folgenden Befehl aus, um die _catalog_ Anwendung zu erstellen, die innerhalb unseres _locallibrary_ Projekts leben wird. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner ausführen wie **manage.py** Ihres Projekts:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo ein Befehl mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (im folgenden Beispiel gezeigt).
Die meisten Dateien sind nach ihrem Zweck benannt (z. B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfiguration der Administrationsseite in **admin.py**, Anwendungsregistrierung in **apps.py**) gespeichert werden und enthalten einige minimale Boilerplate-Codes für die Arbeit mit den zugehörigen Objekten.

Das aktualisierte Projektverzeichnis sollte jetzt wie folgt aussehen:

```bash
locallibrary/
    manage.py
    locallibrary/
    catalog/
        admin.py
        apps.py
        models.py
        tests.py
        views.py
        __init__.py
        migrations/
```

Zusätzlich haben wir jetzt:

- Einen _migrations_ Ordner, der verwendet wird, um "Migrationen" zu speichern — Dateien, die es Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine hier erstellte leere Datei, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und es Ihnen ermöglicht, seine Objekte in anderen Teilen des Projekts zu verwenden.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen, um Ihre URL-Zuordnungen, Templates und statischen Dateien zu speichern. Wir zeigen Ihnen, wie Sie diese weiter hinten erstellen (sie werden nicht in jeder Website benötigt, aber sie sind in diesem Beispiel erforderlich).

## Registrierung der Kataloganwendung

Nun, da die Anwendung erstellt wurde, müssen wir sie im Projekt registrieren, damit sie einbezogen wird, wenn irgendwelche Tools ausgeführt werden (wie beispielsweise das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie der `INSTALLED_APPS` Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei, **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition der `INSTALLED_APPS` Liste. Fügen Sie dann eine neue Zeile am Ende der Liste hinzu, wie unten gezeigt:

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Add our new application
    'catalog.apps.CatalogConfig', # This object was created for us in /catalog/apps.py
]
```

Die neue Zeile gibt das Anwendungskonfigurationsobjekt (`CatalogConfig`) an, das für Sie in **/django-locallibrary-tutorial/catalog/apps.py** generiert wurde, als Sie die Anwendung erstellt haben.

> [!NOTE]
> Sie werden bemerken, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE` weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung der [Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site) und der Funktionalitäten, die sie verwendet (einschließlich Sitzungen, Authentifizierung usw.).

## Angabe der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die für das Projekt zu verwendende Datenbank angeben würden. Es macht Sinn, dieselbe Datenbank für Entwicklung und Produktion zu verwenden, wo immer möglich, um geringfügige Unterschiede im Verhalten zu vermeiden. Sie können mehr über die verschiedenen Optionen in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) erfahren.

Wir werden die Standard-SQLite-Datenbank für den größten Teil dieses Beispiels verwenden, da wir nicht erwarten, dass wir viel gleichzeitigen Zugriff auf eine Demonstrationsdatenbank benötigen, und es erfordert keine zusätzliche Einrichtung! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später in der [Bereitstellung von Django für die Produktion](/de/docs/Learn/Server-side/Django/Deployment#database_configuration) zeigen wir Ihnen auch, wie Sie eine Postgres-Datenbank konfigurieren können, die für größere Websites möglicherweise besser geeignet ist.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch zur Konfiguration einer Reihe anderer Einstellungen verwendet, aber an diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — dies sollte mit einem String aus der Standard-[Liste der Zeitzonen der tz-Datenbank](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) gleichgesetzt werden (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE`-Wert in einen dieser Strings, der für Ihre Zeitzone geeignet ist, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei andere Einstellungen, die Sie jetzt nicht ändern werden, aber von denen Sie wissen sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Djangos Website verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie einen anderen Code verwenden (vielleicht aus einer Umgebungsvariable oder Datei lesen), wenn Sie ihn in die Produktion überführen.
- `DEBUG`. Dies ermöglicht Debugging-Protokolle, die bei Fehlern angezeigt werden, anstatt HTTP-Statuscode-Antworten. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber jetzt können wir es auf `True` lassen.

## Verbinden des URL-Mappers

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, die Zuordnungen an die zugehörige Anwendung zu delegieren.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den erläuternden Text, der einige der Verwendungsmöglichkeiten des URL-Mappers erklärt.

```python
"""
URL configuration for locallibrary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Die URL-Zuordnungen werden über die `urlpatterns`-Variable verwaltet, die eine Python-_Liste_ von `path()`-Funktionen ist. Jede `path()`-Funktion verknüpft entweder ein URL-Muster mit einer _bestimmten Ansicht_, die angezeigt wird, wenn das Muster übereinstimmt, oder mit einer anderen Liste von URL-Muster-Testcodes (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert anfangs eine einzige Funktion, die alle URLs mit dem Muster _admin/_ auf das Modul `admin.site.urls` mappt, das die URL-Mapping-Definitionen der Administrationsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist ein String, der ein URL-Muster zur Übereinstimmung definiert. Dieser String kann eine benannte Variable (in spitzen Klammern) enthalten, z. B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_any_chars_/** abgleichen und _`any_chars`_ als String mit dem Namen `id` an die Ansicht übergeben. Wir diskutieren Pfadmethoden und Routenmuster weiter in späteren Themen.

Um einen neuen Listeneintrag zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieser neue Eintrag enthält einen `path()`, der Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit dem relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code aufgenommen haben, der sie verwendet (damit es leicht zu erkennen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen oben in einer Python-Datei einzufügen.

Nun lassen Sie uns die Stamm-URL unserer Seite (d. h. `127.0.0.1:8000`) auf die URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige Anwendung, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL, auf die umgeleitet werden soll (`/catalog/`), als erstes Argument nimmt, wenn das in der `path()`-Funktion angegebene URL-Muster übereinstimmt (in diesem Fall die Stamm-URL).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der path-Funktion leer, um `/` anzudeuten. Wenn Sie den ersten Parameter als '/' schreiben, wird Django Ihnen beim Starten des Entwicklungsservers die folgende Warnung geben:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django stellt standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder bereit, aber es kann nützlich sein, wenn der Entwicklungswebserver dies tut, während Sie Ihre Seite erstellen. Als letzte Ergänzung zu diesem URL-Mapper können Sie die Bereitstellung statischer Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt diesen letzten Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (früher haben wir einfach einen neuen Listeneintrag mit dem `+=`-Operator angefügt, um den alten und neuen Code klar zu trennen). Wir hätten dieses neue Muster-Mapping stattdessen einfach in die ursprüngliche Listendefinition aufnehmen können:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei in Ihrem _catalog_-Ordner namens **urls.py** und fügen Sie den folgenden Text hinzu, um die (leeren) importierten `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Grundgerüst-Projekt. Die Website _macht_ noch nichts, aber es lohnt sich, sie zu starten, um sicherzustellen, dass keine unserer Änderungen etwas kaputt gemacht hat.

Bevor wir das tun, sollten wir zuerst eine _Datenbankmigration_ durchführen. Dies aktualisiert unsere Datenbank (um alle Modelle in unseren installierten Anwendungen einzubeziehen) und entfernt einige Build-Warnungen.

### Ausführen von Datenbankmigrationen

Django verwendet ein Object-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die Datenstruktur abzustimmen, die von der zugrunde liegenden Datenbank verwendet wird. Während wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationsskripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um die zugrunde liegende Datenstruktur in der Datenbank automatisch an das Modell anzupassen.

Beim Erstellen der Website hat Django automatisch eine Anzahl von Modellen für die Verwaltung der Site hinzugefügt (die wir uns später ansehen werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle auf eine Weise ändern, die die Struktur der zu speichernden Daten beeinflusst (einschließlich sowohl der Hinzufügung als auch der Entfernung ganzer Modelle und einzelner Felder).

Der `makemigrations`-Befehl _erstellt_ (aber wendet nicht an) die Migrationen für alle Anwendungen, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsnamen angeben, um eine Migration nur für eine einzelne App durchzuführen. Dies gibt Ihnen die Möglichkeit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sie möglicherweise leicht anpassen!

Der `migrate`-Befehl ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche in der aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen erneut ausführen und die Seite erneut testen, wann immer Sie wesentliche Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Weitere Informationen über die weniger genutzten Migrationsbefehle finden Sie unter [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation).

### Ausführen der Website

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungs-Webserver_ bereitstellen und sie dann in Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungs-Webserver ist nicht robust oder leistungsstark genug für die Produktion, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen, um ihr einen bequemen schnellen Test zu geben. Standardmäßig wird die Seite auf Ihrem lokalen Computer (`http://127.0.0.1:8000/`) bereitgestellt, Sie können jedoch auch andere Computer in Ihrem Netzwerk angeben, um sie bereitzustellen. Weitere Informationen finden Sie in [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungs-Webserver_ aus, indem Sie den `runserver`-Befehl (im gleichen Verzeichnis wie **manage.py**) aufrufen:

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie in Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Seitenfehlerseite sehen, die so aussieht:

![Django Debug page (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, da wir keine Seiten/URLs im `catalog.urls`-Modul definiert haben (auf das wir umgeleitet werden, wenn wir eine URL zur Stammseite der Seite erhalten).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite zeigt eine großartige Funktion von Django — automatisiertes Debug-Logging. Immer wenn eine Seite nicht gefunden werden kann, zeigt Django eine Fehlerseite mit nützlichen Informationen oder einem von dem Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die von uns gelieferte URL mit keinem unserer URL-Muster (wie aufgelistet) übereinstimmt. Protokollierung ist im Produktivbetrieb ausgeschaltet (wenn wir die Seite live ins Web übertragen), in diesem Fall wird eine weniger informative, aber benutzerfreundlichere Seite bereitgestellt.

## Vergessen Sie nicht, auf GitHub zu sichern

Wir haben gerade einige bedeutende Arbeiten erledigt, also ist jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Verschieben Sie zuerst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) beim Einrichten der Entwicklungsumgebung.
Dies wird **manage.py**, den **locallibrary** Unterordner, den **catalog** Unterordner und alles andere im obersten Ordner enthalten.

Fügen Sie dann die Änderungen im **django_local_library**-Ordner hinzu und committen Sie sie und pushen Sie sie zu GitHub.
Vom Root dieses Ordners aus können Sie eine ähnliche Reihe von Befehlen wie in der [Änderungen modifizieren und synchronisieren](/de/docs/Learn/Server-side/Django/development_environment#modify_and_sync_changes) Abschnitt des _Entwicklungsumgebung_ Themas verwenden:

```bash
# Get the current source from GitHub on the main branch
git checkout main
git pull origin main

# Create a branch and add/commit your newly created app skeleton
git checkout -b skeleton_website # Create and activate a new branch "skeleton_website"
git add -A # Add all changed files to the staging area
git commit -m "Create Skeleton framework for LocalLibrary" # Commit the changed files

# Push the branch to GitHub
git push origin skeleton_website
```

Erstellen Sie dann einen PR von Ihrem GitHub-Repo und führen Sie ihn zusammen.
Nach dem Zusammenführen können Sie zurück zur `main`-Branch wechseln und Ihre Änderungen von GitHub abrufen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie die `skeleton_website`-Branch nicht löschen, können Sie jederzeit später darauf zurückwechseln.

Wir werden dies möglicherweise in Zukunft nicht mehr explizit erwähnen, aber Sie könnten es nützlich finden, GitHub mit Ihren Änderungen am Ende jedes Abschnitts in diesem Tutorial zu aktualisieren.

## Fordern Sie sich selbst heraus

Das **catalog/**-Verzeichnis enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie die Boilerplate.

Wie Sie bereits gesehen haben, wurde im **urls.py** der Projektdatei bereits eine URL-Zuordnung für die Administrationsseite hinzugefügt. Navigieren Sie zur Admin-Bereich in Ihrem Browser und sehen Sie, was passiert (Sie können die korrekte URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Grundgerüst einer Website-Projekt erstellt, das Sie mit URLs, Modellen, Ansichten und Templates ausstatten können.

Da das Grundgerüst für die [Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) nun fertiggestellt und funktionsfähig ist, ist es an der Zeit, den Code zu schreiben, der diese Website dazu bringt, das zu tun, wofür sie gedacht ist.

## Siehe auch

- [Schreiben Ihrer ersten Django-App - Teil 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
