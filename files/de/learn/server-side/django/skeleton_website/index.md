---
title: "Django-Tutorial Teil 2: Erstellen einer Skelett-Website"
slug: Learn/Server-side/Django/skeleton_website
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django-Tutorial](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit webbasierten Einstellungen, Pfaden, Modellen, Ansichten und Templates ausstatten können.

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
        Die Fähigkeit, Djangos Werkzeuge zu nutzen, um Ihre eigenen neuen Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website erstellen können, die Sie dann mit webbasierten Einstellungen, Pfaden, Modellen, Ansichten und Templates ausstatten können (wir besprechen diese in späteren Artikeln).

Um anzufangen:

1. Verwenden Sie das `django-admin` Tool, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py**, das als Ihr Projektverwaltungsskript dient, zu erstellen.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptwebsite, Blog, Wiki, Download-Bereich usw. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann bei Bedarf in verschiedenen Projekten wiederverwendet werden können.

3. Registrieren Sie die neuen Anwendungen, um sie im Projekt einzuschließen.
4. Richten Sie den **url/path** Mapper für jede Anwendung ein.

Für die [Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) sind die Website- und Projektordner _locallibrary_ genannt und beinhalten eine Anwendung namens _catalog_. Die Verzeichnisstruktur auf oberster Ebene sieht daher folgendermaßen aus:

```bash
locallibrary/         # Website-Ordner
    manage.py         # Skript zum Ausführen von Django-Tools für dieses Projekt (erstellt mit django-admin)
    locallibrary/     # Website-/Projekt-Ordner (erstellt mit django-admin)
    catalog/          # Anwendungs-Ordner (erstellt mit manage.py)
```

Die folgenden Abschnitte erläutern die einzelnen Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können. Am Ende dieses Artikels besprechen wir andere projektweite Konfigurationen, die Sie ebenfalls in dieser Phase vornehmen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Kommandozeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das "django_local_library" verschieben, das Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem `django-admin startproject` Befehl, wie gezeigt, und wechseln Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das `django-admin` Tool erstellt eine Ordner-/Dateistruktur wie folgt:

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
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung der von uns erstellten Anwendungen, des Speicherorts unserer statischen Dateien, der Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die URL-zu-Ansicht-Zuordnungen der Website. Während dies _alle_ URL-Mapping-Codes enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung beim Kommunizieren mit dem Webserver zu helfen. Sie können dies als Boilerplate behandeln.
- **asgi.py** ist ein Standard für Python-asynchrone Web-Apps und Server, um miteinander zu kommunizieren. Das Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet ein Standard für sowohl asynchrone als auch synchrone Python-Apps, während WSGI nur ein Standard für synchrone Apps bot. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungs-Frameworks.

Das **manage.py** Skript wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als nächstes den folgenden Befehl aus, um die _catalog_ Anwendung zu erstellen, die in unserem _locallibrary_ Projekt leben wird. Stellen Sie sicher, dass Sie diesen Befehl aus dem gleichen Ordner wie **manage.py** ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo Sie einen Befehl sehen, der mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (wie im folgenden Beispiel gezeigt). Die meisten Dateien sind nach ihrem Zweck benannt (z.B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfiguration der Administrationsseite in **admin.py**, Anwendungsregistrierung in **apps.py** gespeichert werden) und enthalten etwas minimalen Boilerplate-Code für die Arbeit mit den zugehörigen Objekten.

Das aktualisierte Projektverzeichnis sollte nun wie folgt aussehen:

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

- Einen _migrations_ Ordner, der verwendet wird, um "Migrations" zu speichern — Dateien, die Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, während Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine leere Datei, die hier erstellt wurde, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und es Ihnen ermöglicht, seine Objekte in anderen Teilen des Projekts zu verwenden.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Ort, um Ihre URL-Zuordnungen, Templates und statischen Dateien abzulegen. Wir zeigen Ihnen, wie Sie diese weiter unten erstellen können (diese sind nicht in jeder Website erforderlich, aber in diesem Beispiel sind sie erforderlich).

## Registrierung der Kataloganwendung

Nachdem die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie berücksichtigt wird, wenn Werkzeuge ausgeführt werden (wie z.B. das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie zur `INSTALLED_APPS` Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei, **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition für die `INSTALLED_APPS` Liste. Fügen Sie dann am Ende der Liste eine neue Zeile hinzu, wie unten gezeigt:

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Fügen Sie unsere neue Anwendung hinzu
    'catalog.apps.CatalogConfig', # Dieses Objekt wurde für uns in /catalog/apps.py erstellt
]
```

Die neue Zeile gibt das Anwendungs-Konfigurationsobjekt (`CatalogConfig`) an, das für Sie in **/django-locallibrary-tutorial/catalog/apps.py** erstellt wurde, als Sie die Anwendung erstellt haben.

> [!NOTE]
> Sie werden bemerken, dass bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in den Einstellungen) vorhanden sind. Diese ermöglichen die Unterstützung der [Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site) und der Funktionen, die sie verwendet (einschließlich Sitzungen, Authentifizierung, usw.).

## Festlegen der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die Datenbank festlegen würden, die für das Projekt verwendet werden soll. Es macht Sinn, möglichst dieselbe Datenbank für Entwicklung und Produktion zu verwenden, um kleinere Unterschiede im Verhalten zu vermeiden. Sie können sich über die verschiedenen Optionen unter [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) informieren.

Wir werden die Standard-SQLite-Datenbank für den größten Teil dieses Beispiels verwenden, da wir nicht erwarten, viele gleichzeitige Zugriffe auf eine Demonstrationsdatenbank zu benötigen, und es erfordert keine zusätzliche Arbeit zur Einrichtung! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später, im Abschnitt [Bereitstellung von Django in der Produktion](/de/docs/Learn/Server-side/Django/Deployment#database_configuration), zeigen wir Ihnen auch, wie Sie eine Postgres-Datenbank konfigurieren können, die für größere Websites besser geeignet sein könnte.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch zur Konfiguration einer Reihe anderer Einstellungen verwendet, aber an diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — dies sollte gleich einem String aus der standardisierten [Liste der tz-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) gemacht werden (die TZ-Säule in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE` Wert in einen dieser Strings, der Ihrer Zeitzone entspricht, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, aber die Sie kennen sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil von Djangos Sicherheitsstrategie für Websites verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie einen anderen Code verwenden (vielleicht aus einer Umgebungsvariablen oder Datei auslesen), wenn Sie ihn in die Produktion bringen.
- `DEBUG`. Dies ermöglicht, dass bei Fehlern Debug-Protokolle anstelle von HTTP-Statuscode-Antworten angezeigt werden. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sein können, aber fürs Erste können wir es auf `True` belassen.

## Verbinden des URL-Mappers

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen der zugehörigen Anwendung zu überlassen.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den erklärenden Text, der einige der Möglichkeiten erläutert, den URL-Mapper zu verwenden.

```python
"""
URL-Konfiguration für das locallibrary Projekt.

Die `urlpatterns` Liste verknüpft URLs mit Ansichten. Für weitere Informationen siehe:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Beispiele:
Funktionsbasierte Ansichten
    1. Import hinzufügen:  from my_app import views
    2. URL zu urlpatterns hinzufügen:  path('', views.home, name='home')
Klassenbasierte Ansichten
    1. Import hinzufügen:  from other_app.views import Home
    2. URL zu urlpatterns hinzufügen:  path('', Home.as_view(), name='home')
Einbinden einer anderen URLconf
    1. Import der include() Funktion: from django.urls import include, path
    2. URL zu urlpatterns hinzufügen:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
```

Die URL-Zuordnungen werden über die `urlpatterns` Variable verwaltet, die eine Python _Liste_ von `path()` Funktionen ist. Jede `path()` Funktion verknüpft entweder ein URL-Muster mit einer _speziellen Ansicht_, die angezeigt wird, wenn das Muster übereinstimmt, oder mit einer anderen Liste von URL-Muster-Tests (im zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns` Liste definiert anfangs eine einzelne Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, das die eigenen URL-Mapping-Definitionen der Verwaltungsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist ein String, der ein zu vergleichendes URL-Muster definiert. Dieser String kann eine benannte Variable (in spitzen Klammern) enthalten, z.B. `'catalog/<id>/'`. Dieses Muster wird mit einer URL wie **catalog/_irgendwelche_z_chars_/** übereinstimmen und _`irgendwelche_z_chars`_ als String mit dem Parametername `id` an die Ansicht übergeben. Wir besprechen die path Methoden und Routenmuster in späteren Themen genauer.

Um der `urlpatterns` Liste ein neues Listenelement hinzuzufügen, ergänzen Sie die folgenden Zeilen am Ende der Datei. Dieses neue Element enthält ein `path()`, das Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Verwenden Sie include(), um Pfade aus der Kataloganwendung hinzuzufügen
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) zusammen mit dem Code inkludiert haben, der sie verwendet (damit es einfach zu sehen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen am Anfang einer Python-Datei zu halten.

Nun leiten wir die Basis-URL unserer Website (d.h. `127.0.0.1:8000`) an die URL `127.0.0.1:8000/catalog/` um. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL (`/catalog/`) als erstes Argument akzeptiert, wenn das in der `path()` Funktion angegebene URL-Muster übereinstimmt (die Basis-URL, in diesem Fall).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# URL-Maps hinzufügen, um die Basis-URL an unsere Anwendung umzuleiten
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der path Funktion leer, um '/'. Wenn Sie den ersten Parameter als '/' schreiben, wird Ihnen Django beim Starten des Entwicklungsservers die folgende Warnung geben:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Ihr URL-Muster '/' hat eine Route, die mit '/' beginnt.
Entfernen Sie diesen Schrägstrich, da er nicht notwendig ist.
Wenn dieses Muster in einem include() abgezielt wird, stellen Sie sicher, dass das include() Muster ein auslaufendes '/' hat.
```

Django bietet standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder an, aber es kann nützlich sein, dass der Entwicklungswebserver dies tut, während Sie Ihre Website erstellen. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Serven von statischen Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie die folgenden letzten Blöcke unten in der Datei hinzu:

```python
# Verwenden Sie static(), um eine URL-Zuordnung hinzuzufügen, um statische Dateien während der Entwicklung zu servieren (nur)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt mehrere Möglichkeiten, die `urlpatterns` Liste zu erweitern (bisher haben wir nur neue Listenelemente mit dem `+=` Operator angehängt, um den alten und neuen Code klar zu trennen). Wir könnten dieses neue Muster-Map auch einfach in die ursprüngliche Listendefinition inkludieren:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Erstellen Sie als letzten Schritt eine Datei in Ihrem _catalog_ Ordner namens **urls.py** und fügen Sie den folgenden Text hinzu, um die (leeren) importierten `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website _tut_ eigentlich noch nichts, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas beschädigt hat.

Bevor wir das tun, sollten wir zuerst eine _Datenbankmigration_ durchführen. Dies aktualisiert unsere Datenbank (um alle Modelle in unseren installierten Anwendungen einzuschließen) und entfernt einige Build-Warnungen.

### Datenbankmigrationen ausführen

Django verwendet einen Object-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code in die von der zugrunde liegenden Datenbank verwendete Datenstruktur abzubilden. Wenn wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationsskripte erstellen (in **/django-locallibrary-tutorial/catalog/migrations/**), um die zugrunde liegende Datenstruktur in der Datenbank automatisch an das Modell anzupassen.

Als wir die Website erstellten, fügte Django automatisch eine Reihe von Modellen zur Verwendung durch den Admin-Bereich der Website hinzu (die wir später betrachten werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich in dem Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle ändern, sodass dies die Struktur der Daten beeinflusst, die gespeichert werden müssen (einschließlich sowohl der Hinzufügung als auch der Entfernung von ganzen Modellen und einzelnen Feldern).

Der `makemigrations` Befehl _erstellt_ (aber wendet nicht an) die Migrationen für alle Anwendungen, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsnamen angeben, um nur eine Migration für eine einzelne App auszuführen. Dadurch haben Sie die Möglichkeit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sie auch leicht anpassen!

Der `migrate` Befehl ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche zu der aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen neu ausführen und die Website neu testen, wann immer Sie signifikante Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Weiterführende Informationen über die weniger genutzten Migrationsbefehle finden Sie unter [Migrations](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation).

### Die Website ausführen

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungswebserver_ bereitstellen und sie dann auf Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungswebserver ist für den produktiven Einsatz nicht robust oder leistungsstark genug, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung in Betrieb zu nehmen, um ihr einen bequemen schnellen Test zu geben. Standardmäßig wird die Site auf Ihrem lokalen Computer bereitgestellt (`http://127.0.0.1:8000/)`, aber Sie können auch andere Computer in Ihrem Netzwerk angeben, an die sie bereitgestellt werden soll. Für weitere Informationen siehe [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungswebserver_ aus, indem Sie den `runserver` Befehl aufrufen (im gleichen Verzeichnis wie **manage.py**):

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Site anzeigen, indem Sie mit Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Site-Fehlerseite sehen, die folgendermaßen aussieht:

![Django Debug Seite (Django 4.2)](django_404_debug_page.png)

Machen Sie sich keine Sorgen! Diese Fehlerseite wird erwartet, weil wir keine Seiten/URLs im `catalog.urls` Modul definiert haben (zu dem wir weitergeleitet werden, wenn wir eine URL an die Basis der Site senden).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite demonstriert eine großartige Django-Funktion — automatisiertes Debug-Protokollieren. Immer wenn eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem Fehler, der vom Code ausgelöst wird. In diesem Fall können wir sehen, dass die von uns angegebene URL, keines unserer URL-Muster übereinstimmt (wie aufgelistet). Das Protokollieren ist in Produktion ausgeschaltet (was der Fall ist, wenn wir die Site live ins Web stellen), wobei in diesem Fall eine weniger informative, aber benutzerfreundlichere Seite bereitgestellt wird.

## Vergessen Sie nicht, eine Sicherung auf GitHub zu machen

Wir haben gerade einige bedeutende Arbeiten durchgeführt, so dass jetzt ein guter Zeitpunkt ist, um das Projekt mit GitHub zu sichern.

Bewegen Sie zuerst den _Inhalt_ des obersten **locallibrary** Ordners in den **django_local_library** Ordner, den Sie bei der Einrichtung der Entwicklungsumgebung[als lokales GitHub-Repository erstellt haben](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer).
Dies wird **manage.py**, den **locallibrary** Unterordner, den **catalog** Unterordner und alles andere im obersten Ordner umfassen.

Fügen Sie dann die Änderungen im **django_local_library** Ordner hinzu, committen Sie sie und pushen Sie sie zu GitHub.
Vom Stammverzeichnis dieses Ordners können Sie eine ähnliche Reihe von Befehlen wie in dem Abschnitt [Änderungen ändern und synchronisieren](/de/docs/Learn/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_ verwenden:

```bash
# Holen Sie sich die aktuelle Quelle von GitHub auf dem Hauptbranch
git checkout main
git pull origin main

# Erstellen Sie einen Branch und fügen Sie das von Ihnen neu erstellte App-Skelett hinzu/commiten Sie es
git checkout -b skeleton_website # Erstellen und aktivieren Sie einen neuen Branch "skeleton_website"
git add -A # Fügen Sie alle geänderten Dateien zum Staging-Bereich hinzu
git commit -m "Create Skeleton framework for LocalLibrary" # Commit der geänderten Dateien

# Pushen Sie den Branch zu GitHub
git push origin skeleton_website
```

Erstellen und mergen Sie dann eine PR von Ihrem GitHub-Repository.
Nach dem Mergen können Sie zum `main` Branch zurückkehren und Ihre Änderungen von GitHub abrufen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website` Branch nicht löschen, können Sie jederzeit zu einem späteren Zeitpunkt darauf zurückwechseln.

Wir werden dies nicht unbedingt in Zukunft erwähnen, aber es könnte für Sie nützlich sein, GitHub mit Ihren Änderungen am Ende jedes Abschnitts in diesem Tutorial zu aktualisieren.

## Fordern Sie sich heraus

Das **catalog/** Verzeichnis enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und untersuchen Sie das Boilerplate.

Wie Sie zuvor gesehen haben, wurde im **urls.py** des Projekts bereits ein URL-Mapping für die Admin-Seite hinzugefügt. Navigieren Sie im Browser in den Admin-Bereich und sehen Sie, was passiert (Sie können die korrekte URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben jetzt ein vollständiges Skelett-Website-Projekt erstellt, das Sie mit URLs, Modellen, Ansichten und Templates ausstatten können.

Jetzt, da das Skelett für die [Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) vollständig und lauffähig ist, ist es an der Zeit, den Code zu schreiben, der diese Website dazu bringt, das zu tun, was sie soll.

## Siehe auch

- [Writing your first Django app - part 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
