---
title: "Django Tutorial Teil 2: Erstellen einer Skelett-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein Website-Projekt als „Skelett“ erstellen können, welches Sie dann mit site-spezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Ein Django-Entwicklungsumgebung einrichten</a>.
        Überprüfen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, Djangos Werkzeuge zu nutzen, um Ihre eigenen neuen Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie ein „Skelett“ einer Website erstellen können, das sie dann mit site-spezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (wir besprechen diese in späteren Artikeln).

Um anzufangen:

1. Verwenden Sie das `django-admin`-Werkzeug, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu generieren, welches als Ihr Projektverwaltungsskript dient.
2. Verwenden Sie **manage.py** um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Downloadbereich, etc. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann bei Bedarf in verschiedenen Projekten wiederverwendet werden können.

3. Registrieren Sie die neuen Anwendungen, um sie im Projekt einzuschließen.
4. Verbinden Sie den **url/path**-Mapper für jede Anwendung.

Für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) sind die Website- und Projektordner _locallibrary_ genannt und beinhalten eine Anwendung namens _catalog_.
Die Ordnerstruktur auf oberster Ebene wird daher wie folgt aussehen:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte erörtern die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels besprechen wir andere, site-weite Konfigurationen, die Sie ebenfalls in diesem Stadium vornehmen können.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Befehlsshell (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das „django_local_library“ verschieben, das Sie [als lokales GitHub-Repository erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben, als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem `django-admin startproject`-Befehl, wie gezeigt, und navigieren Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das `django-admin`-Werkzeug erstellt eine Ordner-/Dateistruktur wie folgt:

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

Der _locallibrary_ Projektunterordner ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung von Anwendungen, die wir erstellen, der Position unserer statischen Dateien, Details zur Datenbankkonfiguration usw.
- **urls.py** definiert die URL-zu-Ansichts-Zuordnungen der Website. Während dies _alle_ URL-Zuordnungscodes enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver zu helfen. Sie können dies als Boilerplate behandeln.
- **asgi.py** ist ein Standard für die Kommunikation zwischen Python asynchronen Web-Apps und Servern. Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bot. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungsframeworks.

Das **manage.py**-Skript wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie anschließend den folgenden Befehl aus, um die _catalog_-Anwendung zu erstellen, die innerhalb unseres _locallibrary_-Projekts leben wird. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner wie **manage.py** Ihres Projekts ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo Sie einen Befehl sehen, der mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Werkzeug erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (siehe im folgenden Beispiel).
Die meisten Dateien sind nach ihrem Zweck benannt (z. B. sollen Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfiguration der Verwaltungsseite in **admin.py**, Anwendungsregistrierung in **apps.py**) gespeichert werden und enthalten etwas minimalen Boilerplate-Code, um mit den zugehörigen Objekten zu arbeiten.

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

- Einen _migrations_-Ordner, der "Migrations" speichert — Dateien, die es Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, während Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine leere Datei, die hier erstellt wurde, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Sie seine Objekte in anderen Teilen des Projekts verwenden können.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Ort, an dem Sie Ihre URL-Zuordnungen, Vorlagen und statischen Dateien ablegen können. Wir zeigen Ihnen, wie Sie diese weiter unten erstellen können (diese sind nicht in jeder Website erforderlich, aber in diesem Beispiel schon).

## Registrieren der Kataloganwendung

Jetzt, da die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie einbezogen wird, wenn irgendwelche Werkzeuge ausgeführt werden (wie das Hinzufügen von Modellen zur Datenbank beispielsweise). Anwendungen werden registriert, indem Sie sie der `INSTALLED_APPS`-Liste in den Projekteinstellungen hinzufügen.

Öffnen Sie die Projektdatei **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition für die `INSTALLED_APPS`-Liste. Fügen Sie dann eine neue Zeile am Ende der Liste hinzu, wie unten gezeigt:

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
> Sie werden bemerken, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung für die [Django-Administrationsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die Funktionalität, die sie verwendet (einschließlich Sitzungen, Authentifizierung usw.).

## Die Datenbank spezifizieren

Dies ist auch der Punkt, an dem Sie normalerweise die zu verwendende Datenbank für das Projekt spezifizieren würden. Es macht Sinn, wenn möglich dieselbe Datenbank für Entwicklung und Produktion zu verwenden, um kleinere Unterschiede im Verhalten zu vermeiden. Informationen zu den verschiedenen Optionen finden Sie in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation).

Wir werden die Standard-SQLite-Datenbank für die meisten Beispiele verwenden, da wir nicht erwarten, dass viele gleichzeitige Zugriffe auf eine Demonstrationsdatenbank erforderlich sind, und ihre Einrichtung keine zusätzliche Arbeit erfordert! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später werden wir im Abschnitt [Django in Produktion deployen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration) auch zeigen, wie eine Postgres-Datenbank konfiguriert wird, die möglicherweise für größere Websites besser geeignet ist.

## Andere Projekteinstellungen

Die **settings.py**-Datei wird auch für die Konfiguration einer Anzahl anderer Einstellungen verwendet, aber zu diesem Zeitpunkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — diese sollte gleich einem String aus der standard [Liste der TZ-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE`-Wert in einen dieser Strings, der für Ihre Zeitzone geeignet ist, z. B.:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei andere Einstellungen, die Sie jetzt nicht ändern werden, die Sie aber beachten sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil von Djangos Website-Sicherheitsstrategie verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie einen anderen Code verwenden (vielleicht aus einer Umgebungsvariable oder Datei gelesen), wenn er in Produktion geht.
- `DEBUG`. Dies ermöglicht das Anzeigen von Debug-Protokollen bei Fehlern anstelle der HTTP-Statuscode-Antworten. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber vorerst können wir es auf `True` belassen.

## Den URL-Mapper einhängen

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen an die dazugehörige Anwendung zu delegieren.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den Anweisungstext, der einige der Möglichkeiten erklärt, wie der URL-Mapper verwendet werden kann.

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

Die URL-Zuordnungen werden durch die `urlpatterns`-Variable verwaltet, die eine Python-_Liste_ von `path()`-Funktionen ist. Jede `path()`-Funktion ordnet entweder ein URL-Muster einer _bestimmten Ansicht_ zu, die angezeigt wird, wenn das Muster passt, oder einer anderen Liste von URL-Muster-Testcode (in diesem zweiten Fall wird das Muster zur „Basis-URL“ für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert zunächst eine einzige Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, welches die eigenen URL-Zuordnungsdefinitionen der Verwaltungsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist ein String, der ein URL-Muster definiert, das übereinstimmt. Dieser String kann eine benannte Variable (in spitzen Klammern) enthalten, z.B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_any_chars_/** übereinstimmen lassen und _`any_chars`_ an die Ansicht als String mit dem Parametername `id` übergeben. Wir besprechen Path-Methoden und Routenmuster weiter in den späteren Themen.

Um ein neues Listen-Element zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen zum Ende der Datei hinzu. Dieses neue Element enthält einen `path()`, das Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code, der es verwendet, hinzugefügt haben (damit es einfach zu sehen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen zuoberst einer Python-Datei einzufügen.

Lassen Sie uns jetzt die Stamm-URL unserer Site (d.h. `127.0.0.1:8000`) auf die URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Um dies zu tun, verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL, auf die weitergeleitet werden soll (`/catalog/`), als erstes Argument nimmt, wenn das URL-Muster im `path()`-Funktion übereinstimmt (die Stamm-URL, in diesem Fall).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der path-Funktion leer, um „/“ zu implizieren. Wenn Sie den ersten Parameter als „/“ schreiben, gibt Ihnen Django die folgende Warnung, wenn Sie den Entwicklungsserver starten:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django serviert standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder, aber es kann nützlich sein, wenn der Entwicklungswebserver dies während der Erstellung Ihrer Website tut. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Servieren von statischen Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt den folgenden endgültigen Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach ein neues Listenelement unter Verwendung des `+=`-Operators angehängt, um den alten und neuen Code deutlich zu trennen). Wir hätten stattdessen dieses neue Muster-zu-Karte in der ursprünglichen Listendefinition enthalten können:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzter Schritt erstellen Sie eine Datei in Ihrem _catalog_-Ordner namens **urls.py**, und fügen Sie den folgenden Text ein, um die (leeren) importierten `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _macht_ tatsächlich noch nichts, aber es ist wert, sie auszuführen, um sicherzustellen, dass keines unserer Änderungen etwas gebrochen hat.

Bevor wir das tun, sollten wir zuerst eine _Datenbankmigration_ ausführen. Dies aktualisiert unsere Datenbank (um Modelle in unseren installierten Anwendungen einzuschließen) und entfernt einige Build-Warnungen.

### Datenbankmigrationen ausführen

Django verwendet einen Objekt-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die von der zugrunde liegenden Datenbank verwendete Datenstruktur abzubilden. Während wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationsskripte erstellen (in **/django-locallibrary-tutorial/catalog/migrations/**), um die zugrunde liegende Datenstruktur in der Datenbank automatisch zu migrieren, um mit dem Modell zu übereinstimmen.

Als wir die Website erstellten, fügte Django automatisch eine Anzahl von Modellen für die Verwendung im Admin-Bereich der Seite hinzu (die wir später betrachten werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich in dem Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle in einer Weise ändern, welche die Struktur der zu speichernden Daten beeinflusst (einschließlich Hinzufügung und Entfernung ganzer Modelle und einzelner Felder).

Der `makemigrations`-Befehl _erstellt_ (wendet jedoch nicht an) die Migrationen für alle Anwendungen, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsname angeben, um nur eine Migration für eine einzelne App auszuführen. Dies gibt Ihnen die Möglichkeit, den Code für diese Migrationen zu prüfen, bevor sie angewendet werden. Wenn Sie ein Django-Profi sind, möchten Sie sie möglicherweise leicht anpassen!

Der `migrate`-Befehl ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche zu der aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen erneut ausführen und die Website erneut testen, wann immer Sie wesentliche Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Siehe [Migrations](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation) für zusätzliche Informationen über die weniger verwendeten Migrationsbefehle.

### Die Website ausführen

Während der Entwicklung können Sie die Website zuerst mit Hilfe des _Entwicklungswebservers_ servieren und dann über Ihren lokalen Webbrowser betrachten.

> [!NOTE]
> Der Entwicklungswebserver ist nicht robust oder leistungsfähig genug für den Produktionseinsatz, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen, um ihr einen bequemen schnellen Test zu geben. Standardmäßig wird die Seite auf Ihren lokalen Computer serviert (`http://127.0.0.1:8000/), aber Sie können auch andere Computer in Ihrem Netzwerk zum Servieren angeben. Für weitere Informationen siehe [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungswebserver_ aus, indem Sie den `runserver`-Befehl (im gleichen Verzeichnis wie **manage.py**) aufrufen:

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Site betrachten, indem Sie zu `http://127.0.0.1:8000/` in Ihrem lokalen Webbrowser navigieren. Sie sollten eine Website-Fehlerseite sehen, die wie folgt aussieht:

![Django Debug page (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, da wir keine Seiten/URLs im `catalog.urls`-Modul definiert haben (auf das wir umgeleitet werden, wenn wir eine URL auf die Stammseite der Website erhalten).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite demonstriert eine großartige Django-Funktion — automatisiertes Debug-Protokollieren. Wann immer eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem von Ihrem Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die von uns angegebene URL keinem unserer URL-Muster entspricht (wie aufgelistet). Die Protokollierung ist in der Produktion ausgeschaltet (das heißt, wenn wir die Seite live im Web stellen), in welchem Fall eine weniger informative, aber benutzerfreundlichere Seite serviert wird.

## Vergessen Sie nicht, auf GitHub zu sichern

Wir haben gerade einige bedeutende Arbeit geleistet, also ist jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Verschieben Sie zuerst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben, als Sie die Entwicklungsumgebung eingerichtet haben.
Dies umfasst **manage.py**, den **locallibrary**-Unterordner, den **catalog**-Unterordner und alles andere im obersten Ordner.

Dann fügen Sie die Änderungen im **django_local_library**-Ordner hinzu und committen diese und pushen sie zu GitHub.
Vom Stamm dieses Ordners können Sie einen ähnlichen Satz von Befehlen verwenden, wie sie im Abschnitt [Änderungen modifizieren und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des _Entwicklungsumgebung_ Themas zu finden sind:

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

Erstellen und mergen Sie dann einen PR von Ihrem GitHub-Repository.
Nach dem Mergen können Sie zurück zum `main`-Branch wechseln und Ihre Änderungen von GitHub ziehen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Branch nicht löschen, können Sie jederzeit später darauf zurückwechseln.

Wir werden dies in Zukunft möglicherweise nicht mehr erwähnen, aber Sie finden es möglicherweise nützlich, GitHub am Ende jedes Abschnitts in diesem Tutorial mit Ihren Änderungen zu aktualisieren.

## Fordern Sie sich selbst heraus

Das **catalog/**-Verzeichnis enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie den Boilerplate.

Wie Sie zuvor gesehen haben, wurde eine URL-Zuordnung für die Admin-Seite bereits in der **urls.py** des Projekts hinzugefügt. Navigieren Sie zum Admin-Bereich in Ihrem Browser und sehen Sie, was passiert (Sie können die richtige URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben jetzt ein vollständiges Skelett-Website-Projekt erstellt, welches Sie fortfahren können, mit URLs, Modellen, Ansichten und Vorlagen zu füllen.

Jetzt, da das Skelett für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) vollständig und laufend ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, was sie tun soll.

## Siehe auch

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Applications](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
