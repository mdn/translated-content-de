---
title: "Django Tutorial Teil 2: Erstellen einer Skelett-Website"
short-title: "2: Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein "Skeleton"-Website-Projekt als Grundlage erstellen können, das Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Richten Sie eine Django-Entwicklungsumgebung ein</a>.
        Überprüfen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django-Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, Djangos Tools zu verwenden, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website erstellen können, die Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (wir besprechen diese in späteren Artikeln).

Um loszulegen:

1. Verwenden Sie das Tool `django-admin`, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu generieren, das als Ihr Projektverwaltungsskript dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Beispielsweise Hauptwebsite, Blog, Wiki, Download-Bereich usw. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die bei Bedarf in verschiedenen Projekten wiederverwendet werden könnten.

3. Registrieren Sie die neuen Anwendungen, um sie in das Projekt aufzunehmen.
4. Verbinden Sie den **url/path** Mapper für jede Anwendung.

Für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) sind der Website- und der Projektordner _locallibrary_ benannt und enthalten eine Anwendung namens _catalog_. Die Ordnerstruktur der obersten Ebene sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte besprechen die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können. Am Ende dieses Artikels diskutieren wir andere standortweite Konfigurationen, die Sie in diesem Stadium ebenfalls durchführen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie ein Befehlsfenster (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokal Bibliothek-Anwendung erstellen möchten (später verschieben wir sie in die "django_local_library", die Sie [als lokales GitHub-Repository angelegt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem Befehl `django-admin startproject`, wie gezeigt, und navigieren Sie dann in den Projektordner:

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

Der Projektunterordner _locallibrary_ ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung aller erstellten Anwendungen, des Speicherorts unserer statischen Dateien, der Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die Site-URL-zu-Ansicht- Zuordnungen. Während dies _alle_ URL-Zuordnungscodes enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver zu helfen. Sie können dies als Vorlage verwenden.
- **asgi.py** ist ein Standard für Python-asynchrone Web-Apps und Server, um miteinander zu kommunizieren. Die Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger der Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bot. ASGI ist rückwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungs-Frameworks.

Das Skript **manage.py** wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als Nächstes den folgenden Befehl aus, um die _catalog_ Anwendung zu erstellen, die innerhalb unseres _locallibrary_ Projekts leben wird. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner wie Ihr **manage.py** Projekt ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo Sie einen Befehl sehen, der mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (siehe folgendes Beispiel). Die meisten Dateien sind nach ihrem Zweck benannt (z. B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Verwaltungssite-Konfigurationen in **admin.py**, Anwendungsregistrierungen in **apps.py** gespeichert werden) und enthalten einige minimale Boilerplate-Codes zur Arbeit mit den zugehörigen Objekten.

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

Zusätzlich haben wir jetzt:

- Einen _migrations_ Ordner, der für die Speicherung von "Migrationen" verwendet wird — Dateien, die es ermöglichen, Ihre Datenbank automatisch zu aktualisieren, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine hier erstellte leere Datei, damit Django/Python den Ordner als [Python Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Sie seine Objekte innerhalb anderer Teile des Projekts verwenden können.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Ort, an dem Sie Ihre URL-Zuordnungen, Vorlagen und statischen Dateien ablegen können. Wir zeigen Ihnen, wie Sie sie weiter unten erstellen (diese sind nicht in jeder Website erforderlich, aber sie werden in diesem Beispiel benötigt).

## Registrierung der Kataloganwendung

Nachdem die Anwendung jetzt erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie einbezogen wird, wenn Tools ausgeführt werden (wie z. B. das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie der `INSTALLED_APPS`-Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei, **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition für die `INSTALLED_APPS`-Liste. Fügen Sie dann am Ende der Liste eine neue Zeile hinzu, wie unten gezeigt:

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

Die neue Zeile gibt das Anwendungs-Konfigurationsobjekt (`CatalogConfig`) an, das für Sie in **/django-locallibrary-tutorial/catalog/apps.py** generiert wurde, als Sie die Anwendung erstellt haben.

> [!NOTE]
> Sie werden feststellen, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung der [Django-Verwaltungssite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und der von ihr verwendeten Funktionalitäten (einschließlich Sessions, Authentifizierung usw.).

## Festlegen der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die zu verwendende Datenbank für das Projekt festlegen würden. Es ist sinnvoll, wo möglich, dieselbe Datenbank für Entwicklung und Produktion zu verwenden, um geringfügige Verhaltensunterschiede zu vermeiden. Informationen zu den verschiedenen Optionen finden Sie in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django Dokumentation).

Wir verwenden die Standard-SQLite-Datenbank für den größten Teil dieses Beispiels, weil wir nicht erwarten, dass auf eine Demonstrationsdatenbank übermäßig zugegriffen wird und es keine zusätzliche Einrichtung erfordert! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später im Abschnitt [Django in die Produktion bringen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration) zeigen wir Ihnen auch, wie Sie eine Postgres-Datenbank konfigurieren, die möglicherweise besser für größere Websites geeignet ist.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch zur Konfiguration einer Reihe anderer Einstellungen verwendet, aber an dieser Stelle möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — diese sollte gleich einer Zeichenfolge aus der Standard-[Liste der tz-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) festgelegt werden (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE` Wert in eine dieser Zeichenketten, die für Ihre Zeitzone geeignet ist, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, sich aber bewusst sein sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil von Djangos Website-Sicherheitsstrategie verwendet wird. Wenn Sie diesen Code nicht in der Entwicklung schützen, müssen Sie einen anderen Code verwenden (möglicherweise von einer Umgebungsvariable oder Datei gelesen), wenn Sie ihn in die Produktion bringen.
- `DEBUG`. Dies ermöglicht es, dass Debug-Logs bei einem Fehler angezeigt werden, anstatt HTTP-Statuscode-Antworten. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber für jetzt können wir es auf `True` belassen.

## Verbinden des URL-Mappers

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen mit der zugehörigen Anwendung zu überlassen.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den Anleitungstext, der einige der Möglichkeiten erklärt, den URL-Mapper zu verwenden.

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

Die URL-Zuordnungen werden durch die Variable `urlpatterns` verwaltet, die eine Python-_Liste_ der `path()` Funktionen ist. Jede `path()` Funktion ordnet entweder ein URL-Muster einer _spezifischen Ansicht_ zu, die angezeigt wird, wenn das Muster übereinstimmt, oder einer anderen Liste von URL-Muster-Testcodierung (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns` Liste definiert anfangs eine einzelne Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, das die eigenen URL-Zuordnungsdefinitionen der Admin-Anwendung enthält.

> [!NOTE]
> Die Route in `path()` ist eine Zeichenfolge, die ein zuzuordnendes URL-Muster definiert. Diese Zeichenfolge kann eine benannte Variable (in spitzen Klammern) enthalten, z. B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_any_chars_/** zuordnen und _`any_chars`_ als Zeichenfolge mit dem Parameternamen `id` zur Ansicht übergeben. Wir besprechen Pfadmethoden und Routenmuster weiter in späteren Themen.

Um ein neues Listenelement zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieses neue Element enthält eine `path()`, die Anforderungen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code enthalten haben, der sie verwendet (um leicht zu sehen, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen an den Anfang einer Python-Datei zu setzen.

Nun lassen Sie uns die Wurzel-URL unserer Seite (d.h. `127.0.0.1:8000`) auf die URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle View-Funktion, `RedirectView`, die die neue relative URL, auf die umgeleitet werden soll (`/catalog/`), als erstes Argument nimmt, wenn das durch die `path()` Funktion angegebene URL-Muster übereinstimmt (die Wurzel-URL, in diesem Fall).

Fügen Sie die folgenden Zeilen an das Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der Path-Funktion leer, um '/' anzudeuten. Wenn Sie den ersten Parameter als '/' schreiben, gibt Ihnen Django beim Starten des Entwicklungsservers die folgende Warnung:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django dient standardmäßig nicht statische Dateien wie CSS, JavaScript und Bilder, aber es kann nützlich für den Entwicklungswebserver sein, dies zu tun, während Sie Ihre Website erstellen. Als abschließende Ergänzung zu diesem URL-Mapper können Sie das Anbieten von statischen Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt den folgenden letzten Block der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach ein neues Listenelement mit dem `+=` Operator angehängt, um den alten und neuen Code klar zu trennen). Wir könnten dieses neue Muster auch in die ursprüngliche Listendefinition einfügen:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei in Ihrem _catalog_ Ordner mit dem Namen **urls.py** und fügen Sie den folgenden Text hinzu, um die (leeren) importierten `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung erstellen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

Zu diesem Zeitpunkt haben wir ein vollständiges Skelettprojekt. Die Website tut eigentlich noch _nichts_, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass unsere Änderungen nichts kaputt gemacht haben.

Bevor wir das tun, sollten wir zuerst eine _Datenbank-Migration_ durchführen. Diese aktualisiert unsere Datenbank (um alle Modelle in unseren installierten Anwendungen aufzunehmen) und entfernt einige Build-Warnungen.

### Ausführen von Datenbankmigrationen

Django verwendet einen Objekt-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die Datenstruktur abzubilden, die von der zugrunde liegenden Datenbank verwendet wird. Wenn wir unsere Modell-Definitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationsskripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um die zugrunde liegende Datenstruktur in der Datenbank automatisch mit dem Modell abzugleichen.

Als wir die Website erstellt haben, hat Django automatisch eine Anzahl von Modellen für die Verwendung im Admin-Bereich der Site hinzugefügt (auf die wir später eingehen werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich in dem Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle in einer Weise ändern, die die Struktur der zu speichernden Daten beeinflusst (einschließlich sowohl Hinzufügung als auch Entfernung ganzer Modelle und einzelner Felder).

Der Befehl `makemigrations` _erstellt_ (aber wendet nicht an) die Migrationen für alle im Projekt installierten Anwendungen. Sie können auch den Anwendungsnamen angeben, um eine Migration nur für eine einzelne App durchzuführen. Dadurch erhalten Sie die Möglichkeit, den Code für diese Migrationen zu prüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sich entscheiden, diese leicht zu optimieren!

Der `migrate` Befehl ist es, der die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche bereits zur aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen wiederholt ausführen und die Seite erneut testen, wann immer Sie wesentliche Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Siehe [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation) für zusätzliche Informationen über die weniger verwendeten Migrationsbefehle.

### Die Website ausführen

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungswebserver_ bereitstellen und sie dann in Ihrem lokalen Webbrowser ansehen.

> [!NOTE]
> Der Entwicklungswebserver ist weder robust noch leistungsfähig genug für die Nutzung in der Produktion, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen, um sie schnell zu testen. Standardmäßig wird die Website an Ihren lokalen Computer (`http://127.0.0.1:8000/`) bereitgestellt, aber Sie können auch andere Computer in Ihrem Netzwerk angeben. Für weitere Informationen siehe [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungswebserver_ aus, indem Sie den Befehl `runserver` aufrufen (im gleichen Verzeichnis wie **manage.py**):

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie in Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Fehlerseite sehen, die so aussieht:

![Django Debug-Seite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, da wir keine Seiten/URLs im `catalog.urls`-Modul definiert haben (auf die wir umleiten, wenn wir eine URL für die Basis der Site erhalten).

Zu diesem Zeitpunkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielsseite demonstriert ein großartiges Django-Feature — automatisiertes Debug-Logging. Jedes Mal, wenn eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem von dem Code generierten Fehler an. In diesem Fall können wir sehen, dass die von uns angegebene URL mit keinem unserer URL-Muster (wie aufgelistet) übereinstimmt. Logging wird in Produktion ausgeschaltet (was der Fall ist, wenn wir die Site live im Web schalten), in welchem Fall eine weniger informative, aber benutzerfreundlichere Seite bereitgestellt wird.

## Vergessen Sie nicht, auf GitHub zu sichern

Wir haben gerade bedeutende Arbeit geleistet, daher ist jetzt ein guter Zeitpunkt, um das Projekt mit GitHub zu sichern.

Bewegen Sie zuerst den _Inhalt_ des oberen **locallibrary** Ordners in den **django_local_library** Ordner, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben. Dies beinhaltet **manage.py**, den **locallibrary** Unterordner, den **catalog** Unterordner und alles andere im oberen Ordner.

Dann fügen Sie die Änderungen im **django_local_library** Ordner hinzu, committen sie und schieben sie zu GitHub. Vom Root dieses Ordners aus können Sie eine ähnliche Reihe von Befehlen wie die im Abschnitt [Änderungen ändern und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_ verwenden:

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

Dann erstellen und mergen Sie einen PR von Ihrem GitHub-Repo. Nach dem Mergen können Sie zurück zum `main`-Zweig wechseln und Ihre Änderungen von GitHub ziehen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Zweig nicht löschen, können Sie jederzeit zu einem späteren Zeitpunkt zu ihm zurückkehren.

Wir werden dies möglicherweise nicht jedes Mal in Zukunft erwähnen, aber vielleicht finden Sie es nützlich, GitHub am Ende jedes Abschnitts in diesem Tutorial mit Ihren Änderungen zu aktualisieren.

## Fordern Sie sich heraus

Das **catalog/** Verzeichnis enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie das Boilerplate.

Wie Sie zuvor gesehen haben, wurde dem `urls.py`-Projekt bereits eine URL-Zuweisung für die Admin-Site hinzugefügt. Navigieren Sie im Browser zum Admin-Bereich und sehen Sie, was passiert (Sie können die korrekte URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Skelett-Website-Projekt erstellt, das Sie mit URLs, Modellen, Ansichten und Vorlagen füllen können.

Da das Skelett für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) jetzt vollständig und funktionsfähig ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, wofür sie gedacht ist.

## Siehe auch

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
