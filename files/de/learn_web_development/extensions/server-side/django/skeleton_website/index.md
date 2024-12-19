---
title: "Django-Tutorial Teil 2: Erstellen einer Skelett-Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein "Skelett"-Website-Projekt als Basis erstellen können, das Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

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
        In der Lage zu sein, die Werkzeuge von Django zu nutzen, um eigene neue Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Skelett"-Website erstellen können, die Sie dann mit sitespezifischen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (dies wird in späteren Artikeln behandelt).

Um loszulegen:

1. Verwenden Sie das `django-admin`-Tool, um einen Projektordner, grundlegende Dateivorlagen und **manage.py**, welches als Ihr Projektmanagement-Skript dient, zu generieren.
2. Verwenden Sie **manage.py** um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Download-Bereich, etc. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann in verschiedenen Projekten wiederverwendet werden können, falls gewünscht.

3. Registrieren Sie die neuen Anwendungen, um sie im Projekt einzuschließen.
4. Verbinden Sie den **url/path** Mapper für jede Anwendung.

Für die [Website der lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) werden die Website- und Projektordner _locallibrary_ genannt und beinhalten eine Anwendung namens _catalog_.
Die Struktur des obersten Verzeichnisses sieht dann folgendermaßen aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte erläutern die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels besprechen wir andere sitespezifische Konfigurationen, die Sie ebenfalls in diesem Stadium vornehmen können.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie ein Befehlsfenster (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre lokale Bibliotheksanwendung erstellen möchten (später werden wir sie in das "django_local_library" verschieben, das Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben).
3. Erstellen Sie das neue Projekt mit dem Befehl `django-admin startproject`, wie gezeigt, und navigieren Sie dann in den Projektordner:

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

Der _locallibrary_ Projektunterordner ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung aller erstellten Anwendungen, der Lage unserer statischen Dateien, Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die URL-zu-Ansicht-Zuordnungen der Website. Während dies _alle_ URL-Mapping-Codes enthalten könnte, ist es üblicher, einige der Zuordnungen an bestimmte Anwendungen zu delegieren, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung zu helfen, mit dem Webserver zu kommunizieren. Sie können dies als Boilerplate betrachten.
- **asgi.py** ist ein Standard für Python-asynchrone Web-Apps und -Server, um miteinander zu kommunizieren. Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger von Web Server Gateway Interface (WSGI). ASGI bietet einen Standard sowohl für asynchrone als auch für synchrone Python-Apps, während WSGI nur einen Standard für synchrone Apps bot. ASGI ist rückwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungs-Frameworks.

Das **manage.py**-Skript wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als nächstes den folgenden Befehl aus, um die _catalog_ Anwendung zu erstellen, die innerhalb unseres _locallibrary_ Projekts leben wird. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner wie **manage.py** Ihres Projekts ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Syntax von Linux/macOS.
> Wenn Sie unter Windows arbeiten, verwenden Sie überall dort, wo ein Befehl mit `python3` beginnt, stattdessen `py` (oder `py -3`).

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (siehe folgendes Beispiel).
Die meisten der Dateien sind nach ihrem Zweck benannt (z. B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfigurationen der Administrationsseite in **admin.py**, Anwendungsregistrierungen in **apps.py** gespeichert werden) und enthalten einige minimale Boilerplate-Codes, um mit den zugehörigen Objekten zu arbeiten.

Das aktualisierte Projektverzeichnis sollte jetzt folgendermaßen aussehen:

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

- Einen _migrations_ Ordner, der "Migrations" speichert — Dateien, die es Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine hier erstellte leere Datei, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Sie seine Objekte in anderen Teilen des Projekts verwenden können.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Obwohl es einen Ort für Ihre Ansichten und Modelle gibt, gibt es keinen Platz, um Ihre URL-Zuordnungen, Vorlagen und statischen Dateien zu platzieren. Wir zeigen Ihnen, wie Sie diese weiter unten erstellen (diese sind nicht in jeder Website erforderlich, aber sie sind in diesem Beispiel erforderlich).

## Registrieren der Kataloganwendung

Nachdem die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie einbezogen wird, wenn Werkzeuge ausgeführt werden (z. B. beim Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie der Liste `INSTALLED_APPS` in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei, **django-locallibrary-tutorial/locallibrary/settings.py**, und finden Sie die Definition für die Liste `INSTALLED_APPS`. Fügen Sie dann am Ende der Liste eine neue Zeile hinzu, wie unten gezeigt:

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
> Sie werden bemerken, dass bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) vorhanden sind. Diese aktivieren die Unterstützung für die [Django-Administrationsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die von ihr verwendeten Funktionen (einschließlich Sitzungen, Authentifizierung usw.).

## Festlegen der Datenbank

Dies ist auch der Punkt, an dem Sie normalerweise die für das Projekt zu verwendende Datenbank festlegen würden. Es macht Sinn, soweit möglich dieselbe Datenbank für Entwicklung und Produktion zu verwenden, um geringfügige Unterschiede im Verhalten zu vermeiden. Sie können sich über die verschiedenen Optionen unter [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation) informieren.

Wir werden die Standard-SQLite-Datenbank für den größten Teil dieses Beispiels verwenden, da wir nicht erwarten, dass ein hoher gleichzeitiger Zugriff auf eine Demonstrationsdatenbank erforderlich ist, und es keine zusätzliche Arbeit erfordert, sie einzurichten! Sie können sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später zeigen wir Ihnen im Abschnitt [Django-Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration), wie Sie eine Postgres-Datenbank konfigurieren können, die sich besser für größere Websites eignen könnte.

## Andere Projekteinstellungen

Die **settings.py**-Datei wird auch zur Konfiguration einer Reihe anderer Einstellungen verwendet, aber an diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — diese sollte gleich einer Zeichenfolge aus der standardmäßigen [Liste der TZ-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE`-Wert in eine dieser Zeichenfolgen, die Ihrer Zeitzone entsprechen, beispielsweise:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, aber die Sie beachten sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Django verwendet wird. Wenn Sie diesen Code in der Entwicklung nicht schützen, müssen Sie beim Einsetzen in die Produktion einen anderen Code verwenden (vielleicht aus einer Umgebungsvariablen oder Datei gelesen).
- `DEBUG`. Dies ermöglicht, dass Debug-Protokolle im Fehlerfall anstelle von HTTP-Statuscode-Antworten angezeigt werden. Dies sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind; für jetzt können wir es jedoch auf `True` belassen.

## Verknüpfen des URL-Mappers

Die Website wird mit einer URL-Mapping-Datei (**urls.py**) im Projektordner erstellt. Obwohl Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, Zuordnungen an die zugehörige Anwendung weiterzuleiten.

Öffnen Sie **django-locallibrary-tutorial/locallibrary/urls.py** und beachten Sie den ausführlichen Text, der einige der Möglichkeiten zur Verwendung des URL-Mappers erklärt.

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

Die URL-Zuordnungen werden über die Variable `urlpatterns` verwaltet, die eine Python-Liste von `path()`-Funktionen ist. Jede `path()`-Funktion ordnet entweder ein URL-Muster einer _spezifischen Ansicht_ zu, die angezeigt wird, wenn das Muster übereinstimmt, oder einer anderen Liste von URL-Muster-Testcodes (im zweiten Fall wird das Muster zur "Grund-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert zunächst eine einzelne Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuweist, das die eigenen URL-Mapping-Definitionen der Administrationsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist eine Zeichenfolge, die ein zu matchendes URL-Muster definiert. Diese Zeichenfolge könnte eine benannte Variable (in spitzen Klammern) enthalten, z. B. `'catalog/<id>/'`. Dieses Muster passt zu einer URL wie **catalog/_any_chars_/** und übergibt _`any_chars`_ als Zeichenfolge mit dem Parametername `id` an die Ansicht. Wir besprechen Pfadmethoden und Routenmuster in späteren Themen näher.

Um ein neues Listenelement zur `urlpatterns`-Liste hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieses neue Element enthält einen `path()`, der Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet (die Datei mit der relativen URL **catalog/urls.py**).

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) zusammen mit dem Code eingefügt haben, der sie verwendet (so dass leicht zu erkennen ist, was wir hinzugefügt haben), aber es ist üblich, alle Importzeilen am Anfang einer Python-Datei zu platzieren.

Jetzt lassen Sie uns die Root-URL unserer Seite (d.h. `127.0.0.1:8000`) zur URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dafür verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL, zu der umgeleitet werden soll (`/catalog/`), als ersten Parameter nimmt, wenn das in der `path()`-Funktion angegebene URL-Muster übereinstimmt (in diesem Fall die Root-URL).

Fügen Sie folgende Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der Pfadfunktion leer, um `" / "` zu implizieren. Wenn Sie den ersten Parameter als `" / "` schreiben, gibt Ihnen Django die folgende Warnung, wenn Sie den Entwicklungsserver starten:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django liefert standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder aus, es kann jedoch nützlich sein, wenn der Entwicklungswebserver dies tut, während Sie Ihre Seite erstellen. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Bereitstellen statischer Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie das folgende abschließende Block jetzt am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt mehrere Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach einen neuen Listeneintrag mit dem `+=`-Operator angehängt, um den alten und neuen Code klar zu trennen). Wir hätten dieses neue Musterkarten stattdessen einfach zur ursprünglichen Listendefinition hinzufügen können:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei in Ihrem _catalog_-Ordner mit dem Namen **urls.py** und fügen den folgenden Text hinzu, um das (leere) importierte `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung erstellen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein komplettes Skeleton-Projekt. Die Website "tut" noch nichts, aber es ist wert, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas kaputt gemacht haben.

Bevor wir das tun, sollten wir zuerst eine _Datenbank-Migration_ durchführen. Dies aktualisiert unsere Datenbank (um alle Modelle in unseren installierten Anwendungen einzuschließen) und entfernt einige Build-Warnungen.

### Datenbankmigrationen durchführen

Django verwendet einen Objekt-Relational-Mapper (ORM), um Modell-Definitionen im Django-Code mit der von der zugrunde liegenden Datenbank verwendeten Datenstruktur zu verknüpfen. Während wir unsere Modell-Definitionen ändern, verfolgt Django die Änderungen und kann Datenbank-Migrationsskripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um automatisch die zugrunde liegende Datenstruktur in der Datenbank an das Modell anzugleichen.

Als wir die Website erstellt haben, hat Django automatisch eine Reihe von Modellen für die Verwendung durch den Admin-Bereich der Seite hinzugefügt (die wir später ansehen werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle so ändern, dass sich die Struktur der zu speichernden Daten ändert (einschließlich der Hinzufügung und Entfernung ganzer Modelle und einzelner Felder).

Der Befehl `makemigrations` _erstellt_ (aber wendet nicht an) die Migrationen für alle Anwendungen an, die in Ihrem Projekt installiert sind. Sie können auch den Anwendungsnamen angeben, um eine Migration nur für eine einzelne Anwendung durchzuführen. Dies gibt Ihnen die Möglichkeit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sie möglicherweise geringfügig optimieren!

Der Befehl `migrate` ist derjenige, der die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche in der aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen erneut ausführen und die Seite erneut testen, wann immer Sie wesentliche Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Weitere Informationen zu den weniger genutzten Migrationsbefehlen finden Sie in den [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation).

### Die Website ausführen

Während der Entwicklung können Sie die Website zuerst mit dem _Entwicklungswebserver_ bereitstellen und sie dann in Ihrem lokalen Webbrowser ansehen.

> [!NOTE]
> Der Entwicklungswebserver ist nicht robust oder leistungsstark genug für den Produktionseinsatz, aber er ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung in Gang zu bringen, um ihr einen bequemen schnellen Test zu geben. Standardmäßig wird er die Seite auf Ihrem lokalen Computer bereitstellen (`http://127.0.0.1:8000/), Sie können aber auch andere Computer in Ihrem Netzwerk zur Bereitstellung angeben. Weitere Informationen finden Sie in [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungswebserver_ aus, indem Sie den Befehl `runserver` in demselben Verzeichnis wie **manage.py** aufrufen:

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Seite ansehen, indem Sie in Ihrem lokalen Webbrowser zu `http://127.0.0.1:8000/` navigieren. Sie sollten eine Site-Fehlerseite sehen, die so aussieht:

![Django-Debug-Seite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite wird erwartet, da wir keine Seiten/URLs im `catalog.urls`-Modul definiert haben (auf das wir umgeleitet werden, wenn wir eine URL zur Root der Seite erhalten).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite demonstriert ein tolles Feature von Django — automatisiertes Debug-Protokollieren. Immer wenn eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem von dem Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die von uns angegebene URL keinem unserer URL-Muster entspricht (wie aufgelistet). Das Protokollieren wird in der Produktion (was der Fall ist, wenn wir die Seite live ins Web stellen) deaktiviert, in welchem Fall eine weniger informative, aber benutzerfreundlichere Seite ausgeliefert wird.

## Vergessen Sie nicht, auf GitHub zu sichern

Wir haben gerade eine bedeutende Arbeit geleistet, daher ist jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Zuerst verschieben Sie den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung eingerichtet haben. 
Dies umfasst **manage.py**, den **locallibrary** Unterordner, den **catalog** Unterordner und alles andere im obersten Ordner.

Fügen Sie dann die Änderungen im **django_local_library**-Ordner hinzu, committen Sie sie und pushen Sie sie zu GitHub. 
Vom Stamm dieses Ordners aus können Sie einen ähnlichen Satz von Befehlen wie im Abschnitt [Änderungen bearbeiten und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_ verwenden:

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

Erstellen Sie dann einen PR aus Ihrem GitHub-Repository und führen diesen zusammen. 
Nach dem Zusammenführen können Sie zurück zum `main`-Branch wechseln und Ihre Änderungen von GitHub ziehen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Branch nicht löschen, können Sie jederzeit später wieder zu diesem wechseln.

Wir werden dies möglicherweise nicht in Zukunft erwähnen, aber es kann nützlich sein, Ihre Änderungen am Ende jedes Abschnitts in diesem Tutorial mit GitHub zu aktualisieren.

## Fordern Sie sich selbst heraus

Das Verzeichnis **catalog/** enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und inspizieren Sie das Boilerplate.

Wie Sie bereits gesehen haben, wurde im **urls.py** der Projektes bereits ein URL-Mapping für die Admin-Seite hinzugefügt. Navigieren Sie in Ihrem Browser zum Admin-Bereich und sehen Sie, was passiert (Sie können die richtige URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Skeleton-Website-Projekt erstellt, das Sie mit URLs, Modellen, Ansichten und Vorlagen füllen können.

Da das Skeleton für die [Website der lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) nun vollständig und funktionsfähig ist, ist es an der Zeit, den Code zu schreiben, der diese Website das tun lässt, wozu sie gedacht ist.

## Siehe auch

- [Schreiben Ihrer ersten Django-App - Teil 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation). Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
