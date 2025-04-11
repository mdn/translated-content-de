---
title: "Django Tutorial Teil 2: Erstellen einer Skeleton-Website"
short-title: "2: Skeleton-Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt Ihnen, wie Sie ein "Skeleton"-Website-Projekt als Grundlage erstellen können, das Sie dann mit standortspezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Einrichten einer Django-Entwicklungsumgebung</a>.
        Überprüfen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django-Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, die Werkzeuge von Django zu verwenden, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Dieser Artikel zeigt, wie Sie eine "Skeleton"-Website erstellen können, die Sie dann mit standortspezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (wir besprechen diese in späteren Artikeln).

Um zu beginnen:

1. Verwenden Sie das Tool `django-admin`, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu erstellen, die als Ihr Projektmanagement-Skript dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Download-Bereich, etc. Django empfiehlt, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann bei Bedarf in verschiedenen Projekten wiederverwendet werden können.

3. Registrieren Sie die neuen Anwendungen, um sie in das Projekt aufzunehmen.
4. Verknüpfen Sie den **url/path**-Mapper für jede Anwendung.

Für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) sind der Website- und Projektordner _locallibrary_ benannt und umfassen eine Anwendung namens _catalog_.
Die Ordnerstruktur auf oberster Ebene sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte besprechen die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels besprechen wir andere, eventuell nötige websiteweite Konfigurationen zu diesem Zeitpunkt.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Befehlszeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das "django_local_library", das Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) beim Einrichten der Entwicklungsumgebung, verschieben).
3. Erstellen Sie das neue Projekt mit dem Befehl `django-admin startproject`, wie gezeigt, und navigieren Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das `django-admin`-Tool erstellt folgende Ordner-/Dateistruktur:

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

Der Projekt-Unterordner _locallibrary_ ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung von Anwendungen, die wir erstellen, der Ort unserer statischen Dateien, Datenbankkonfigurationsdetails, etc.
- **urls.py** definiert die Website-URL-zu-Ansicht-Zuordnungen. Während diese alle URL-Zuordnungscode enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung zu helfen, mit dem Webserver zu kommunizieren. Dies können Sie als Vorlage behandeln.
- **asgi.py** ist ein Standard für die Kommunikation asynchroner Web-Apps und -Server in Python. Der Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bot. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungs-Frameworks.

Das Skript **manage.py** wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungs-Webserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie anschließend den folgenden Befehl aus, um die _catalog_-Anwendung zu erstellen, die innerhalb unseres Projekts _locallibrary_ lebt. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner wie Ihr Projekt-**manage.py** ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie anstelle von Befehlen, die mit `python3` beginnen, `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (wie im folgenden Beispiel gezeigt).
Die meisten Dateien sind nach ihrem Zweck benannt (z.B. Ansichten sollten in **views.py** gespeichert werden, Modelle in **models.py**, Tests in **tests.py**, Verwaltungskonfiguration in **admin.py**, Anwendungsregistrierung in **apps.py**) und enthalten einige minimale Vorlagencode für die Arbeit mit den zugehörigen Objekten.

Das aktualisierte Projektverzeichnis sollte nun folgendermaßen aussehen:

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
- **\_\_init\_\_.py** — eine leere Datei, die hier erstellt wurde, damit Django/Python den Ordner als [Python Package](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Ihnen erlaubt, seine Objekte innerhalb anderer Teile des Projekts zu verwenden.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Ort, an dem Sie Ihre URL-Zuordnungen, Vorlagen und statischen Dateien ablegen können. Wir zeigen Ihnen, wie Sie diese weiter unten erstellen können (diese sind nicht in jeder Website erforderlich, aber sie sind in diesem Beispiel erforderlich).

## Registrierung der Kataloganwendung

Nun, da die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie eingeschlossen wird, wenn irgendwelche Werkzeuge ausgeführt werden (wie z.B. das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie zur `INSTALLED_APPS` Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei **django-locallibrary-tutorial/locallibrary/settings.py** und finden Sie die Definition für die `INSTALLED_APPS` Liste. Fügen Sie dann am Ende der Liste eine neue Zeile hinzu, wie unten gezeigt:

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
> Sie werden bemerken, dass bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) vorhanden sind. Diese ermöglichen Unterstützung für die [Django-Verwaltungsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die von ihr genutzte Funktionalität (einschließlich Sitzungen, Authentifizierung, etc.).

## Festlegen der Datenbank

An diesem Punkt würden Sie normalerweise auch die für das Projekt zu verwendende Datenbank festlegen. Es macht Sinn, dieselbe Datenbank für Entwicklung und Produktion zu verwenden, wo möglich, um geringfügige Unterschiede im Verhalten zu vermeiden. Sie können sich über die verschiedenen Optionen in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) informieren.

Für den Großteil dieses Beispiels verwenden wir die standardmäßige SQLite-Datenbank, da wir nicht erwarten, dass viel gleichzeitiger Zugriff auf eine Demonstrationsdatenbank erforderlich ist, und sie erfordert keine zusätzliche Arbeit zur Einrichtung! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später, im [Bereitstellen von Django für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration), zeigen wir Ihnen auch, wie Sie eine Postgres-Datenbank konfigurieren können, die möglicherweise eher für größere Websites geeignet ist.

## Andere Projekteinstellungen

Die **settings.py** Datei wird auch für die Konfiguration einer Reihe anderer Einstellungen verwendet, aber an diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — dies sollte gleich einem String aus der standardmäßigen [Liste der tz-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) gemacht werden (die TZ-Spalte in der Tabelle enthält die Werte, die Sie möchten). Ändern Sie Ihren `TIME_ZONE`-Wert zu einem dieser Strings, der Ihrer Zeitzone entspricht, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei andere Einstellungen, die Sie jetzt nicht ändern, aber von denen Sie wissen sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Djangos Website verwendet wird. Wenn Sie diesen Code nicht in der Entwicklung schützen, müssen Sie einen anderen Code (möglicherweise abgelesen von einer Umgebungsvariable oder Datei) beim Hochladen in die Produktion verwenden.
- `DEBUG`. Dies ermöglicht es, Debug-Protokolle bei Fehlern anzuzeigen, statt HTTP-Statuscode-Antworten. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber vorerst können wir es auf `True` belassen.

## Verbindungsaufbau mit dem URL-Mapper

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen an die zugehörige Anwendung zu delegieren.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den instruktiven Text, welcher einige der Möglichkeiten zur Verwendung des URL-Mappers erklärt.

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

Die URL-Zuordnungen werden über die Variable `urlpatterns` verwaltet, die eine Python-Liste von `path()`-Funktionen ist. Jede `path()`-Funktion verknüpft entweder ein URL-Muster mit einer speziellen Ansicht, die angezeigt wird, wenn das Muster übereinstimmt, oder mit einer anderen Liste von URL-Musterprüfcodes (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert zunächst eine Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, das die eigenen URL-Zuordnungsdefinitionen der Verwaltungsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist ein String, der ein zu matchendes URL-Muster definiert. Dieser String kann eine benannte Variable enthalten (in spitzen Klammern), z.B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_beliebige_zeichen_/** matchen und _`beliebige_zeichen`_ als String mit dem Parameternamen `id` an die Ansicht übergeben. Wir diskutieren die Pfadmethoden und Routenmuster weiter in späteren Themen.

Um ein neues Listenelement zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieses neue Element enthält einen `path()`, der Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code, der sie verwendet, eingefügt haben (damit es leicht zu erkennen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen oben in einer Python-Datei einzufügen.

Lassen Sie uns nun die Stamm-URL unserer Seite umleiten (d.h. `127.0.0.1:8000`) zur URL `127.0.0.1:8000/catalog/`. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL zum Umleiten (`/catalog/`) als erstes Argument bei der URL-Musterübereinstimmung in der `path()`-Funktion annimmt (die Stamm-URL in diesem Fall).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der Pfadfunktion leer, um '/' anzudeuten. Wenn Sie den ersten Parameter als '/' schreiben, wird Ihnen Django die folgende Warnung anzeigen, wenn Sie den Entwicklungsserver starten:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django liefert standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder aus, aber es kann nützlich sein, dass der Entwicklungswebserver dies während der Erstellung der Seite tut. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Serven von statischen Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen hinzufügen.

Fügen Sie nun den folgenden abschließenden Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach das neue Listenelement mit dem `+=` Operator angehängt, um alten und neuen Code klar zu trennen). Wir könnten stattdessen dieses neue Muster-Mapping in die ursprüngliche Listendefinition einschließen:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei in Ihrem _catalog_-Ordner namens **urls.py**, und fügen Sie den folgenden Text hinzu, um die (leere) importierte `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website tut eigentlich noch nichts, aber es ist sinnvoll, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas kaputt gemacht haben.

Bevor wir das tun, sollten wir zunächst eine _Datenbankmigration_ durchführen. Dies aktualisiert unsere Datenbank (um alle Modelle in unseren installierten Anwendungen einzuschließen) und entfernt einige Build-Warnungen.

### Ausführen von Datenbankmigrationen

Django verwendet einen Object-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die Datenstruktur der zugrunde liegenden Datenbank abzubilden. Während wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationen-Skripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um die zugrunde liegende Datenstruktur in der Datenbank automatisch an das Modell anzupassen.

Als wir die Website erstellt haben, hat Django automatisch eine Reihe von Modellen für die Verwendung durch den Admin-Bereich der Website hinzugefügt (die wir später betrachten werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im selben Verzeichnis wie **manage.py** befinden):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle in einer Weise ändern, die die Struktur der Daten, die gespeichert werden müssen, beeinflusst (einschließlich der Hinzufügung und Entfernung von gesamten Modellen und einzelnen Feldern).

Der `makemigrations` Befehl _erstellt_ (aber wendet nicht an) die Migrationen für alle in Ihrem Projekt installierten Anwendungen. Sie können auch den Anwendungsnamen angeben, um eine Migration nur für eine einzelne App auszuführen. Dies gibt Ihnen die Gelegenheit, den Code dieser Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sich entscheiden, sie leicht anzupassen!

Der `migrate` Befehl ist dasjenige, das die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche zur aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen wiederholen und die Seite erneut testen, wann immer Sie bedeutende Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Weitere Informationen zu den weniger verwendeten Migrationsbefehlen finden Sie in [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation).

### Ausführen der Website

Während der Entwicklung können Sie die Website zunächst mit dem _Entwicklungswebserver_ bedienen und dann in Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungswebserver ist nicht robust oder leistungsfähig genug für die Produktion, aber er ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen, um sie einem bequemen schnellen Test zu unterziehen. Standardmäßig wird sie die Seite auf Ihrem lokalen Computer (`http://127.0.0.1:8000/)` servieren, aber Sie können auch andere Computer in Ihrem Netzwerk angeben, denen sie dienen soll. Weitere Informationen finden Sie unter [django-admin and manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungswebserver_ aus, indem Sie den Befehl `runserver` aufrufen (im selben Verzeichnis wie **manage.py**):

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Seite ansehen, indem Sie zu `http://127.0.0.1:8000/` in Ihrem lokalen Webbrowser navigieren. Sie sollten eine Seitenfehlerseite sehen, die so aussieht:

![Django Debug-Seite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, weil wir keine Seiten/URLs im `catalog.urls` Modul definiert haben (auf das wir umgeleitet werden, wenn wir eine URL zum Stamm der Seite erhalten).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite demonstriert eine großartige Django-Funktion — automatisiertes Debug-Protokollierung. Wann immer eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem beliebigen vom Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die von uns angegebene URL keinem unserer URL-Muster entspricht (wie aufgeführt). Protokollierung ist in der Produktion deaktiviert (was der Fall ist, wenn wir die Seite im Web live schalten), in welchem Fall eine weniger informative, aber benutzerfreundlichere Seite ausgeliefert wird.

## Vergessen Sie nicht, ein Backup zu GitHub zu machen

Wir haben gerade erhebliche Arbeit geleistet, deshalb ist jetzt ein guter Zeitpunkt, um das Projekt mit GitHub zu sichern.

Bewegen Sie zuerst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) beim Einrichten der Entwicklungsumgebung.
Dies beinhaltet **manage.py**, den **locallibrary** Unterordner, den **catalog** Unterordner und alles andere im obersten Ordner.

Dann fügen Sie die Änderungen im **django_local_library** Ordner hinzu und committen Sie sie, und pushen Sie sie zu GitHub.
Von der Wurzel dieses Ordners aus können Sie eine ähnliche Befehlsreihe verwenden wie in dem Abschnitt [Änderungen modifizieren und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des _Entwicklungsumgebung_-Themas:

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

Erstellen und mergen Sie dann einen PR aus Ihrem GitHub-Repository.
Nach dem Merging können Sie zum `main` Branch wechseln und Ihre Änderungen von GitHub pullen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website` Branch nicht löschen, können Sie immer später zu ihm zurückkehren.

Wir werden dies möglicherweise in Zukunft nicht mehr erwähnen, aber Sie finden es vielleicht nützlich, GitHub am Ende jedes Abschnitts dieses Tutorials mit Ihren Änderungen zu aktualisieren.

## Fordern Sie sich selbst heraus

Das Verzeichnis **catalog/** enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie die Vorlagen.

Wie Sie zuvor gesehen haben, wurde eine URL-Zuordnung für die Admin-Seite bereits in der **urls.py** des Projekts hinzugefügt. Navigieren Sie zum Admin-Bereich in Ihrem Browser und sehen Sie, was passiert (Sie können die korrekte URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben jetzt ein vollständiges Skeleton-Website-Projekt erstellt, das Sie mit URLs, Modellen, Ansichten und Vorlagen füllen können.

Da das Skeleton für die [Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) nun vollständig und funktionsfähig ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, was sie tun soll.

## Siehe auch

- [Schreiben Ihrer ersten Django-App - Teil 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
