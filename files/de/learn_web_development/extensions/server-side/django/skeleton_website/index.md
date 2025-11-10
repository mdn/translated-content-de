---
title: "Django Tutorial Teil 2: Erstellen einer Skeleton-Website"
short-title: "2: Skeleton-Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein "Skeleton"-Website-Projekt als Basis erstellen können, das Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Views und Templates füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Einrichten einer Django-Entwicklungsumgebung</a>.
        Überprüfen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        In der Lage sein, die Werkzeuge von Django zu nutzen, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie eine "Skeleton"-Website erstellen können, die Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Views und Templates füllen können (diese werden wir in späteren Artikeln besprechen).

Um zu beginnen:

1. Verwenden Sie das Tool `django-admin`, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu erstellen, welches als Ihr Projektmanagement-Skript dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Downloadbereich usw. Django ermutigt Sie dazu, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann in verschiedenen Projekten wiederverwendet werden können, falls gewünscht.

3. Registrieren Sie die neuen Anwendungen, um sie in das Projekt einzufügen.
4. Binden Sie den **Url-/Pfad-Mapping** für jede Anwendung ein.

Für die [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) sind der Website- und Projektordner _locallibrary_ genannt und enthalten eine Anwendung namens _catalog_.
Die Ordnerstruktur auf der obersten Ebene ist daher wie folgt:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte besprechen die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels diskutieren wir andere Konfigurationen, die Sie ebenfalls in diesem Stadium für die gesamte Website vornehmen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Befehlszeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das "django_local_library" verschieben, das Sie als [lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem Befehl `django-admin startproject` wie gezeigt, und navigieren Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das Tool `django-admin` erstellt eine Ordner-/Dateistruktur wie folgt:

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

Der Unterordner _locallibrary_ ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung von Anwendungen, die wir erstellen, dem Standort unserer statischen Dateien, Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die Site-URL-to-View-Zuordnungen. Während dies alle URL-Mapping-Codes enthalten könnte, ist es häufiger, einige der Mappings an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver zu helfen. Sie können dies als Boilerplate behandeln.
- **asgi.py** ist ein Standard für die Kommunikation zwischen asynchronen Python-Web-Apps und Servern. Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger der Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bot. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungs-Frameworks.

Das Skript **manage.py** wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungs-Webserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als Nächstes den folgenden Befehl aus, um die _catalog_-Anwendung zu erstellen, die innerhalb unseres _locallibrary_-Projekts leben soll. Stellen Sie sicher, dass Sie diesen Befehl aus dem gleichen Ordner wie **manage.py** Ihres Projekts ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo Sie einen Befehl sehen, der mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (wie im folgenden Beispiel gezeigt).
Die meisten Dateien sind nach ihrem Zweck benannt (z. B. sollten Views in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Verwaltungsgsite-Konfiguration in **admin.py**, Anwendungsregistrierung in **apps.py** gespeichert werden) und enthalten etwas minimalen Boilerplate-Code für die Arbeit mit den zugehörigen Objekten.

Das aktualisierte Projektverzeichnis sollte jetzt so aussehen:

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

Zusätzlich haben wir nun:

- Einen _migrations_-Ordner, der dazu verwendet wird, "Migrationen" zu speichern - Dateien, mit denen Sie Ihre Datenbank automatisch aktualisieren können, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine leere Datei, die hier erstellt wurde, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und es Ihnen ermöglicht, seine Objekte innerhalb anderer Teile des Projekts zu verwenden.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Views und Modelle gibt, gibt es keinen Ort, an dem Sie Ihre URL-Mappings, Templates und statischen Dateien ablegen können. Wir zeigen Ihnen weiter entlang, wie Sie sie erstellen können (diese sind nicht in jeder Website erforderlich, aber in diesem Beispiel sind sie es).

## Registrierung der Kataloganwendung

Nachdem die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie enthalten ist, wenn irgendwelche Werkzeuge ausgeführt werden (zum Beispiel das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie zur `INSTALLED_APPS`-Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekt-Einstellungsdatei, **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition der `INSTALLED_APPS`-Liste. Fügen Sie dann eine neue Zeile am Ende der Liste hinzu, wie unten gezeigt:

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

Die neue Zeile spezifiziert das Anwendungs-Konfigurationsobjekt (`CatalogConfig`), das für Sie in **/django-locallibrary-tutorial/catalog/apps.py** generiert wurde, als Sie die Anwendung erstellt haben.

> [!NOTE]
> Sie werden feststellen, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung der [Django-Verwaltungssite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die von ihr verwendete Funktionalität (einschließlich Sitzungen, Authentifizierung usw.).

## Festlegen der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die für das Projekt zu verwendende Datenbank angeben würden. Es ist sinnvoll, soweit möglich die gleiche Datenbank für Entwicklung und Produktion zu verwenden, um geringfügige Verhaltensunterschiede zu vermeiden. Sie können sich über die verschiedenen Optionen in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) informieren.

Wir werden die standardmäßige SQLite-Datenbank für den größten Teil dieses Beispiels verwenden, da wir nicht erwarten, dass viele gleichzeitige Zugriffe auf eine Demonstrationsdatenbank erforderlich sind, und sie erfordert keine zusätzliche Arbeit für die Einrichtung! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später werden wir im Abschnitt [Bereitstellen von Django für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration) auch zeigen, wie Sie eine Postgres-Datenbank konfigurieren, die möglicherweise besser für größere Sites geeignet ist.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch verwendet, um eine Reihe anderer Einstellungen zu konfigurieren, aber an diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — diese sollte gleich einem String aus der standardmäßigen [Liste der Zeitzonendatenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE` Wert in einen dieser Strings, der für Ihre Zeitzone geeignet ist, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, von denen Sie aber Kenntnis haben sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Djangos Website verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie beim Übergang in die Produktion einen anderen Code verwenden (vielleicht aus einer Umgebungsvariable oder Datei lesen).
- `DEBUG`. Dies ermöglicht es, Debugging-Protokolle anstelle von HTTP-Statuscode-Antworten anzuzeigen. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber momentan können wir es auf `True` lassen.

## Anbindung des URL-Mappers

Die Website wird mit einer URL-Mapping-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Mappings zu verwalten, ist es üblicher, Mappings der zugehörigen Anwendung zu überlassen.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den Anleitungstext, der einige Möglichkeiten erläutert, den URL-Mapper zu verwenden.

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
Including another URLConf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Die URL-Mappings werden über die `urlpatterns`-Variable verwaltet, welche eine Python-_Liste_ von `path()`-Funktionen ist. Jede `path()`-Funktion ordnet entweder ein URL-Muster einer _spezifischen View_ zu, die angezeigt wird, wenn das Muster übereinstimmt, oder mit einer anderen Liste von URL-Muster-Testcodes (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert ursprünglich eine einzige Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, welches die eigenen URL-Mapping-Definitionen der Verwaltungsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist ein String, der ein zu matchendes URL-Muster definiert. Dieser String kann eine benannte Variable (in spitzen Klammern) enthalten, z.B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_any_chars_/** übereinstimmen und _`any_chars`_ als String mit dem Parameternamen `id` an die View übergeben. Wir besprechen Methoden für Pfade und Routenmuster weiter in späteren Themen.

Um ein neues Listenelement zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieses neue Element enthält einen `path()`, der Anforderungen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code aufgenommen haben, der sie verwendet (damit es leicht zu sehen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen am Anfang einer Python-Datei einzuschließen.

Nun lassen Sie uns die Root-URL unserer Seite (d.h. `127.0.0.1:8000`) zur URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle View-Funktion, `RedirectView`, die die neue relative URL zur Weiterleitung empfängt (`/catalog/`) als ihr erstes Argument, wenn das in der `path()`-Funktion angegebene URL-Muster übereinstimmt (die Root-URL, in diesem Fall).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der Pfadfunktion leer, um '/' anzuzeigen. Wenn Sie den ersten Parameter als '/' schreiben, gibt Ihnen Django beim Starten des Entwicklungsservers die folgende Warnung:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django liefert standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder aus, aber es kann nützlich sein, dass der Entwicklungs-Webserver dies tut, während Sie Ihre Seite erstellen. Als eine letzte Ergänzung zu diesem URL-Mapper können Sie das Bereitstellen von statischen Dateien während der Entwicklung ermöglichen, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt den folgenden letzten Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (vorher haben wir einfach ein neues Listenelement mit dem `+=`-Operator angehängt, um den alten und neuen Code klar zu trennen). Wir könnten stattdessen dieses neue Muster-Map in der ursprünglichen Listendefinition eingefügt haben:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Erstellen Sie als letzten Schritt eine Datei in Ihrem _catalog_-Ordner namens **urls.py** und fügen Sie den folgenden Text ein, um die (leere) importierte `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Skeleton-Projekt. Die Website _tut_ zwar noch nichts, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas kaputt gemacht hat.

Bevor wir das tun, sollten wir zuerst eine _Datenbankmigration_ ausführen. Dies aktualisiert unsere Datenbank (um Modelle in unseren installierten Anwendungen einzuschließen) und entfernt einige Build-Warnungen.

### Datenbankmigrationen durchführen

Django verwendet einen Object-Relational-Mapper (ORM), um Modell-Definitionen im Django-Code auf die in der zugrundeliegenden Datenbank verwendete Datenstruktur abzubilden. Während wir unsere Modell-Definitionen ändern, verfolgt Django diese Änderungen und kann Datenbankmigrationsskripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um die zugrundeliegende Datenstruktur in der Datenbank automatisch an das Modell anzupassen.

Als wir die Website erstellt haben, hat Django automatisch eine Reihe von Modellen für die Verwaltung der Site (die wir später betrachten werden) hinzugefügt. Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle in einer Weise ändern, die die Struktur der Daten beeinflusst, die gespeichert werden muss (einschließlich sowohl Hinzufügung als auch Entfernung von ganzen Modellen und einzelnen Feldern).

Der Befehl `makemigrations` _erstellt_ (wendet jedoch nicht an) die Migrationen für alle Anwendungen an, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsnamen angeben, um nur eine Migration für eine einzelne App durchzuführen. Dies gibt Ihnen die Möglichkeit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sich dafür entscheiden, sie leicht anzupassen!

Der Befehl `migrate` ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche dieser Migrationen in die aktuelle Datenbank aufgenommen wurden.

> [!NOTE]
> Sie sollten die Migrationen und die Site erneut testen, wann immer Sie wesentliche Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Siehe [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation) für zusätzliche Informationen über weniger häufig verwendete Migrationsbefehle.

### Die Website ausführen

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungs-Webserver_ bereitstellen und sie dann auf Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungs-Webserver ist nicht robust oder leistungsfähig genug für den Produktionseinsatz, aber er ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen, um einen bequemen kurzen Test zu ermöglichen. Standardmäßig wird die Website auf Ihrem lokalen Computer bereitgestellt (`http://127.0.0.1:8000/`), aber Sie können auch andere Computer in Ihrem Netzwerk angeben, denen Sie bereitstellen möchten. Für weitere Informationen siehe [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungs-Webserver_ aus, indem Sie den Befehl `runserver` (im gleichen Verzeichnis wie **manage.py**) aufrufen:

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie in Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Site-Fehlerseite sehen, die etwa so aussieht:

![Django Debug-Seite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, weil wir keine Seiten/URLs im Modul `catalog.urls` definiert haben (zu dem wir weitergeleitet werden, wenn wir eine URL zur Root der Website erhalten).

An diesem Punkt wissen wir, dass Django arbeitet!

> [!NOTE]
> Die Beispielseite demonstriert ein großartiges Feature von Django - automatisiertes Debug-Protokollieren. Jedes Mal, wenn eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem Fehler, der vom Code verursacht wurde. In diesem Fall können wir sehen, dass die von uns angegebene URL keinem unserer URL-Muster (wie aufgelistet) entspricht. Das Protokollieren wird in der Produktion (wenn wir die Site live auf das Web schalten) deaktiviert, wobei in diesem Fall eine weniger informative, aber benutzerfreundlichere Seite bereitgestellt wird.

## Vergessen Sie nicht das Backup bei GitHub

Wir haben gerade einige signifikante Arbeiten erledigt, daher ist es jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Verschieben Sie zuerst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie als [lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben.
Dies umfasst **manage.py**, den **locallibrary**-Unterordner, den **catalog**-Unterordner und alles andere im obersten Ordner.

Fügen Sie dann die Änderungen im **django_local_library**-Ordner hinzu und begehen Sie sie und pushen Sie sie zu GitHub.
Vom Root dieses Ordners aus können Sie eine ähnliche Menge von Befehlen verwenden, wie sie im Abschnitt [Änderungen modifizieren und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_ beschrieben sind:

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

Dann erstellen und mergen Sie einen PR aus Ihrem GitHub-Repo.
Nach dem Mergen können Sie zurück zum `main`-Branch wechseln und Ihre Änderungen von GitHub ziehen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Branch nicht löschen, können Sie jederzeit zu einem späteren Zeitpunkt zu ihm zurückkehren.

Wir werden dies in Zukunft nicht unbedingt erneut erwähnen, aber Sie könnten es nützlich finden, Ihre Änderungen am Ende jedes Abschnitts in diesem Tutorial bei GitHub zu aktualisieren.

## Fordern Sie sich selbst heraus

Das Verzeichnis **catalog/** enthält Dateien für die Views, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und überprüfen Sie die Boilerplates.

Wie Sie bereits gesehen haben, wurde eine URL-Zuordnung für die Admin-Site bereits im **urls.py** des Projekts hinzugefügt. Navigieren Sie im Browser zum Admin-Bereich und sehen, was passiert (Sie können die korrekte URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Skeleton-Website-Projekt erstellt, das Sie mit URLs, Modellen, Views und Templates füllen können.

Da das Skeleton für die [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) nun vollständig und funktionstüchtig ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, was sie tun soll.

## Siehe auch

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Applications](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
