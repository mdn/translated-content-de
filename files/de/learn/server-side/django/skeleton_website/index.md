---
title: "Django-Tutorial Teil 2: Erstellung einer Skelett-Website"
slug: Learn/Server-side/Django/skeleton_website
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}

Dieser zweite Artikel unseres [Django-Tutorials](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit spezifischen Website-Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

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
        In der Lage sein, die Tools von Django zu nutzen, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website erstellen können, die Sie dann mit spezifischen Website-Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (wir besprechen diese in späteren Artikeln).

Um anzufangen:

1. Verwenden Sie das `django-admin`-Tool, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu erstellen, das als Ihr Projektskript dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel die Hauptseite, ein Blog, ein Wiki, ein Download-Bereich usw. Django ermutigt dazu, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann bei Bedarf in verschiedenen Projekten wiederverwendet werden können.

3. Registrieren Sie die neuen Anwendungen, um sie im Projekt zu integrieren.
4. Richten Sie den **url/path**-Mapper für jede Anwendung ein.

Für die [Local Library-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) heißen der Website- und der Projektordner _locallibrary_ und beinhalten eine Anwendung namens _catalog_.
Die Struktur des obersten Verzeichnisses sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte diskutieren die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels besprechen wir andere Website-weite Konfigurationen, die Sie zu diesem Zeitpunkt ebenfalls durchführen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Befehlszeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das Verzeichnis "django_local_library" verschieben, das Sie [als lokales GitHub-Repository erstellt](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben, als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem `django-admin startproject`-Befehl, wie gezeigt, und navigieren Sie dann in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das `django-admin`-Tool erstellt eine Ordner-/Dateistruktur wie folgt:

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

Der _locallibrary_ Projekt-Subordner ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung aller erstellten Anwendungen, den Speicherort unserer statischen Dateien, Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die Zuordnungen von Website-URLs zu Ansichten. Während dies den gesamten URL-Mapping-Code enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung zu helfen, mit dem Webserver zu kommunizieren. Sie können dies als Boilerplate behandeln.
- **asgi.py** ist ein Standard für die Kommunikation zwischen Python-asynchronen Web-Apps und Servern. Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet einen Standard sowohl für asynchrone als auch für synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bereitstellte. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungsframeworks.

Das **manage.py**-Skript wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungs-Webserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als Nächstes den folgenden Befehl aus, um die _catalog_-Anwendung zu erstellen, die innerhalb unseres _locallibrary_-Projekts lebt. Führen Sie diesen Befehl unbedingt im selben Ordner aus wie **manage.py** des Projekts:

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
Die meisten Dateien sind nach ihrem Zweck benannt (z. B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfiguration der Administrationsseite in **admin.py**, Anwendungsregistrierung in **apps.py** gespeichert werden) und enthalten einige minimale Boilerplate-Code für die Arbeit mit den zugehörigen Objekten.

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

- Einen _migrations_-Ordner, der "Migrationen" speichert — Dateien, die es Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine hier erstellte leere Datei, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Sie seine Objekte in anderen Teilen des Projekts verwenden können.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Platz für Ihre URL-Zuordnungen, Vorlagen und statischen Dateien. Wir werden Ihnen zeigen, wie Sie sie weiter unten erstellen (sie sind nicht in jeder Website erforderlich, aber in diesem Beispiel schon).

## Registrierung der Kataloganwendung

Nun, da die Anwendung erstellt wurde, müssen wir sie mit dem Projekt registrieren, damit sie eingeschlossen wird, wenn irgendwelche Werkzeuge ausgeführt werden (wie das Hinzufügen von Modellen zur Datenbank zum Beispiel). Anwendungen werden durch Hinzufügen zur Liste `INSTALLED_APPS` in den Projekteinstellungen registriert.

Öffnen Sie die Projekteinstellungsdatei **django-locallibrary-tutorial/locallibrary/settings.py** und finden Sie die Definition für die Liste `INSTALLED_APPS`. Fügen Sie dann eine neue Zeile am Ende der Liste hinzu, wie unten gezeigt:

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
> Ihnen wird auffallen, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung für die [Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site) und die von ihr verwendeten Funktionen (einschließlich Sitzungen, Authentifizierung usw.).

## Spezifizieren der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die für das Projekt zu verwendende Datenbank angeben würden. Es ist sinnvoll, soweit möglich, dieselbe Datenbank für Entwicklung und Produktion zu verwenden, um geringfügige Verhaltensunterschiede zu vermeiden. Sie können die verschiedenen Optionen in [Databases](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) erfahren.

Wir werden die Standard-SQLite-Datenbank für den Großteil dieses Beispiels verwenden, da wir nicht erwarten, dass ein hoher gleichzeitiger Zugriff auf eine Demonstrationsdatenbank erforderlich ist, und es keine zusätzliche Arbeit erfordert, diese einzurichten! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert wird:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später im [Einsatz von Django in der Produktion](/de/docs/Learn/Server-side/Django/Deployment#database_configuration) werden wir Ihnen auch zeigen, wie man eine Postgres-Datenbank konfiguriert, die für größere Websites möglicherweise besser geeignet ist.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch zur Konfiguration einer Reihe anderer Einstellungen verwendet, aber zu diesem Zeitpunkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — dies sollte gleich einer Zeichenkette von der standardisierten [Liste der Zeitzonen der TZ-Datenbank](https://de.wikipedia.org/wiki/Liste_der_Zeitzonen_der_tz-Datenbank) gemacht werden (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE`-Wert in eine dieser Zeichenketten, die für Ihre Zeitzone geeignet ist, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt noch zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, aber über die Sie sich bewusst sein sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Django-Websites verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie einen anderen Code (vielleicht von einer Umgebungsvariable oder Datei gelesen) verwenden, wenn Sie ihn in Produktion setzen.
- `DEBUG`. Dies ermöglicht Debug-Protokolle auf Fehlern anzuzeigen, anstatt HTTP-Statuscode-Antworten. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber für den Moment können wir es auf `True` belassen.

## Einrichten des URL-Mappers

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen an die zugehörige Anwendung zu delegieren.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den Anleitungstext, der einige der Möglichkeiten erklärt, wie der URL-Mapper verwendet werden kann.

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

Die URL-Zuordnungen werden über die Variable `urlpatterns` verwaltet, die eine Python _Liste_ von `path()`-Funktionen darstellt. Jede `path()`-Funktion verknüpft entweder ein URL-Muster mit einer _spezifischen Ansicht_, die angezeigt wird, wenn das Muster übereinstimmt, oder mit einer weiteren Liste von URL-Muster-Testcode (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster im Zielmodul). Die `urlpatterns`-Liste definiert zunächst eine einzige Funktion, die alle URLs mit dem Muster _admin/_ zum Modul `admin.site.urls` weiterleitet, das die eigenen URL-Mapping-Definitionen der Administrationsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist eine Zeichenkette, die ein zu matchendes URL-Muster definiert. Diese Zeichenkette könnte eine benannte Variable (in spitzen Klammern) enthalten, z. B. `'catalog/<id>/'`. Dieses Muster wird mit einer URL wie **catalog/_beliebige_zeichen_/** übereinstimmen und _`beliebige_zeichen`_ als Zeichenkette mit dem Parameternamen `id` an die Ansicht übergeben. Wir diskutieren Pfadmethoden und Routenmuster weiter in späteren Themen.

Um ein neues Listenelement zur `urlpatterns`-Liste hinzuzufügen, fügen Sie am Ende der Datei die folgenden Zeilen hinzu. Dieses neue Element enthält ein `path()`, das Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code aufgenommen haben, der sie verwendet (damit leicht zu sehen ist, was wir hinzugefügt haben), aber es ist üblich, alle Ihre Importzeilen oben in einer Python-Datei zu inkludieren.

Jetzt leiten wir die Root-URL unserer Site (d. h. `127.0.0.1:8000`) auf die URL `127.0.0.1:8000/catalog/` um. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dazu verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL, auf die umgeleitet werden soll (`/catalog/`), als ihr erstes Argument nimmt, wenn das in der `path()`-Funktion angegebene URL-Muster übereinstimmt (diese ist im Beispiel die Root-URL).

Fügen Sie am Ende der Datei die folgenden Zeilen hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der path-Funktion leer, um '/' implizieren. Wenn Sie den ersten Parameter als '/' schreiben, wird Django Ihnen die folgende Warnung geben, wenn Sie den Entwicklungsserver starten:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django liefert standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder aus, aber es kann nützlich sein, den Entwicklungs-Webserver dazu zu bringen, dies während der Erstellung Ihrer Site zu tun. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Ausliefern statischer Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt den folgenden finalen Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt mehrere Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach ein neues Listenelement mit dem Operator `+=` angehängt, um den alten und neuen Code klar zu trennen). Wir hätten dieses neue Muster-Map stattdessen einfach in die ursprüngliche Liste-Definition aufnehmen können:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei innerhalb Ihres _catalog_-Ordners namens **urls.py** und fügen Sie den folgenden Text ein, um die (leere) importierte `urlpatterns` zu definieren. Hier fügen wir unsere Muster hinzu, während wir die Anwendung aufbauen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Rahmens

An diesem Punkt haben wir ein vollständiges Skelettprojekt. Die Website tut derzeit noch nichts, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas gebrochen hat.

Bevor wir das tun, sollten wir zuerst eine _Datenbankmigration_ durchführen. Dies aktualisiert unsere Datenbank (um jede Modelle in unseren installierten Anwendungen hinzuzufügen) und entfernt einige Build-Warnungen.

### Durchführung von Datenbankmigrationen

Django verwendet einen Object-Relational-Mapper (ORM), um Modelldefinitionen in dem Django-Code zu den Datenstrukturen der zugrunde liegenden Datenbank zuzuordnen. Wenn wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbankmigrationen-Skripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um die zugrunde liegende Datenstruktur in der Datenbank automatisch zu den Modellen zu migrieren.

Als wir die Website erstellten, fügte Django automatisch eine Anzahl von Modellen für die Verwendung durch den Admin-Abschnitt der Site hinzu (den wir später betrachten werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle so ändern, dass sie die Struktur der Daten betreffen, die gespeichert werden müssen (einschließlich Hinzufügen und Entfernen von ganzen Modellen und einzelnen Feldern).

Der `makemigrations`-Befehl _erstellt_ (aber wendet nicht an) die Migrationen für alle Anwendungen an, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsnamen angeben, um nur eine Migration für eine einzelne App auszuführen. Das gibt Ihnen die Gelegenheit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sie eventuell leicht optimieren!

Der `migrate`-Befehl ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche bereits zur aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen neu ausführen und die Site neu testen, wann immer Sie signifikante Änderungen vornehmen. Das dauert nicht sehr lange!
>
> Siehe [Migrations](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation) für zusätzliche Informationen über die weniger häufig genutzten Migrationsbefehle.

### Ausführen der Website

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungs-Webserver_ betreiben und sie dann in Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungs-Webserver ist nicht robust oder performant genug für den Produktionseinsatz, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung zum Laufen zu bringen und sie bequem schnell zu testen. Er wird standardmäßig die Site auf Ihrem lokalen Rechner (`http://127.0.0.1:8000/`) bereitstellen, aber Sie können auch andere Computer in Ihrem Netzwerk angeben, auf die er zugreifen soll. Für weitere Informationen siehe [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungs-Webserver_ aus, indem Sie den `runserver`-Befehl aufrufen (im selben Verzeichnis wie **manage.py**):

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Website anzeigen, indem Sie in Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Seitenfehlerseite sehen, die so aussieht:

![Django Debug-Seite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, weil wir keine Seiten/URLs im `catalog.urls`-Modul definiert haben (zu denen wir umgeleitet werden, wenn wir eine URL zur Root-Site erhalten).

Zu diesem Zeitpunkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite demonstriert eine tolle Django-Funktion — automatisiertes Debug-Protokollierung. Wann immer eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem beliebigen durch den Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die angegebene URL mit keinem unserer URL-Muster übereinstimmt (wie aufgelistet). Das Protokollieren ist in der Produktion ausgeschaltet (was ist, wenn wir die Site live im Internet stellen), in diesem Fall wird eine weniger informative, aber benutzerfreundlichere Seite ausgeliefert.

## Vergessen Sie nicht, auf GitHub zu sichern

Wir haben gerade einige bedeutende Arbeiten durchgeführt, daher ist jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Verschieben Sie zunächst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt](/de/docs/Learn/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben, als Sie die Entwicklungsumgebung einrichteten.
Dies umfasst **manage.py**, den **locallibrary**-Unterordner, den **catalog**-Unterordner und alles andere innerhalb des obersten Ordners.

Fügen Sie dann die Änderungen im **django_local_library**-Ordner hinzu und erstellen sie einen Commit, und schieben Sie sie auf GitHub.
Vom Stamm dieses Ordners aus können Sie eine ähnliche Befehlsreihe wie in dem Abschnitt [Änderungen ändern und synchronisieren](/de/docs/Learn/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_ verwenden:

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

Erstellen Sie dann eine PR von Ihrem GitHub-Repository und führen Sie eine Zusammenführung durch.
Nach der Zusammenführung können Sie zurück zum `main`-Zweig wechseln und Ihre Änderungen von GitHub abrufen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Zweig nicht löschen, können Sie jederzeit später zu ihm zurückkehren.

Wir werden dies nicht unbedingt in Zukunft erwähnen, aber Sie könnten es nützlich finden, GitHub am Ende jedes Abschnitts in diesem Tutorial mit Ihren Änderungen zu aktualisieren.

## Fordern Sie sich heraus

Das Verzeichnis **catalog/** enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie das Boilerplate.

Wie Sie bereits gesehen haben, wurde im Projekt bereits ein URL-Mapping für die Admin-Site in der Datei **urls.py** hinzugefügt. Navigieren Sie im Browser in den Admin-Bereich und sehen Sie, was passiert (Sie können die korrekte URL aus dem Mapping ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Skelett-Website-Projekt erstellt, das Sie anschließend mit URLs, Modellen, Ansichten und Vorlagen füllen können.

Da das Skelett für die [Local Library-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) vollständig und in Betrieb ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, was sie tun soll.

## Siehe auch

- [Schreiben Ihrer ersten Django-App - Teil 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn/Server-side/Django/Tutorial_local_library_website", "Learn/Server-side/Django/Models", "Learn/Server-side/Django")}}
