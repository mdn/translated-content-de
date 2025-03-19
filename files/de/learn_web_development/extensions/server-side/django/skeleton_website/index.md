---
title: "Django Tutorial Teil 2: Erstellen einer Grundstruktur für eine Website"
short-title: "2: Grundstruktur für die Website"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel in unserem [Django-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein Projekt für eine "Grundstruktur" einer Website erstellen können, das als Basis dient und das Sie anschließend mit seitenbezogenen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Ein Django-Entwicklungsumfeld einrichten</a>.
        Überprüfen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django-Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, die Django-Tools zu verwenden, um Ihre eigenen neuen Website-Projekte zu starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine "Grundstruktur" für eine Website erstellen können, die Sie dann mit seitenbezogenen Einstellungen, Pfaden, Modellen, Ansichten und Vorlagen füllen können (diese besprechen wir in späteren Artikeln).

Um zu beginnen:

1. Verwenden Sie das Tool `django-admin`, um einen Projektordner, die grundlegenden Dateivorlagen und **manage.py** zu erstellen, das als Ihr Projektmanagement-Skript dient.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Abschnitten bestehen. Zum Beispiel Hauptseite, Blog, Wiki, Download-Bereich etc. Django ermutigt Sie, diese Komponenten als separate _Anwendungen_ zu entwickeln, die dann in verschiedenen Projekten wiederverwendet werden können, wenn gewünscht.

3. Registrieren Sie die neuen Anwendungen, um sie in das Projekt einzuschließen.
4. Verknüpfen Sie den **url/path**-Mapper für jede Anwendung.

Für die [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) sind der Website- und der Projektordner _locallibrary_ benannt und umfassen eine Anwendung namens _catalog_. Die Ordnerstruktur der obersten Ebene sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte besprechen die Prozessschritte im Detail und zeigen, wie Sie Ihre Änderungen testen können. Am Ende dieses Artikels diskutieren wir andere siteweite Konfigurationen, die Sie ebenfalls zu diesem Zeitpunkt durchführen könnten.

## Erstellen des Projekts

Um das Projekt zu erstellen:

1. Öffnen Sie eine Kommandozeile (oder ein Terminalfenster) und stellen Sie sicher, dass Sie sich in Ihrer [virtuellen Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) befinden.
2. Navigieren Sie zu dem Ordner, in dem Sie Ihre Local Library-Anwendung erstellen möchten (später werden wir sie in den "django_local_library"-Ordner verschieben, den Sie bei der Einrichtung der Entwicklungsumgebung [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer)).
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

Der Projektunterordner _locallibrary_ ist der Einstiegspunkt für die Website:

- **\_\_init\_\_.py** ist eine leere Datei, die Python anweist, dieses Verzeichnis als Python-Paket zu behandeln.
- **settings.py** enthält alle Website-Einstellungen, einschließlich der Registrierung aller von uns erstellten Anwendungen, der Position unserer statischen Dateien, Datenbankkonfigurationsdetails usw.
- **urls.py** definiert die Zuordnungen von Site-URLs zu Ansichten. Während hier _alle_ URL-Zuordnungscodes enthalten sein könnten, ist es üblicher, einige Zuordnungen bestimmten Anwendungen zu überlassen, wie Sie später sehen werden.
- **wsgi.py** wird verwendet, um Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver zu helfen. Sie können dies als Boilerplate behandeln.
- **asgi.py** ist ein Standard, mit dem Python-asynchrone Webanwendungen und Server miteinander kommunizieren können. Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger von Web Server Gateway Interface (WSGI). ASGI bietet einen Standard für sowohl asynchrone als auch synchrone Python-Anwendungen, während WSGI nur für synchrone Anwendungen einen Standard bot. ASGI ist rückwärtskompatibel mit WSGI und unterstützt mehrere Server- und Anwendungsframeworks.

Das Skript **manage.py** wird verwendet, um Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungs-Webserver zu starten.

## Erstellen der Kataloganwendung

Führen Sie als Nächstes den folgenden Befehl aus, um die _catalog_-Anwendung zu erstellen, die innerhalb unseres _locallibrary_-Projekts lebt. Stellen Sie sicher, dass Sie diesen Befehl aus demselben Ordner wie **manage.py** Ihres Projekts ausführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Der Rest des Tutorials verwendet die Linux/macOS-Syntax.
> Wenn Sie unter Windows arbeiten, sollten Sie überall dort, wo Sie einen Befehl sehen, der mit `python3` beginnt, stattdessen `py` (oder `py -3`) verwenden.

Das Tool erstellt einen neuen Ordner und füllt ihn mit Dateien für die verschiedenen Teile der Anwendung (siehe folgendes Beispiel). Die meisten Dateien sind nach ihrem Zweck benannt (z.B. sollten Ansichten in **views.py**, Modelle in **models.py**, Tests in **tests.py**, Konfigurationen der Verwaltungsseite in **admin.py**, Anwendungsregistrierungen in **apps.py** gespeichert werden) und enthalten etwas minimalen Boilerplate-Code, um mit den zugehörigen Objekten zu arbeiten.

Das aktualisierte Projektverzeichnis sollte nun so aussehen:

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

Darüber hinaus haben wir jetzt:

- Einen _migrations_-Ordner, der "Migrationen" speichert - Dateien, die es Ihnen ermöglichen, Ihre Datenbank automatisch zu aktualisieren, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine leere Datei, die hier erstellt wurde, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und es Ihnen ermöglicht, seine Objekte in anderen Teilen des Projekts zu verwenden.

> [!NOTE]
> Haben Sie bemerkt, was in der obigen Dateiliste fehlt? Während es einen Platz für Ihre Ansichten und Modelle gibt, gibt es keinen Platz, um Ihre URL-Zuordnungen, Vorlagen und statischen Dateien abzulegen. Wir zeigen Ihnen, wie Sie diese weiter erstellen können (sie werden nicht in jeder Website benötigt, aber in diesem Beispiel schon).

## Registrierung der Kataloganwendung

Nachdem die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren, damit sie enthalten wird, wenn Werkzeuge ausgeführt werden (z. B. das Hinzufügen von Modellen zur Datenbank). Anwendungen werden registriert, indem sie der `INSTALLED_APPS`-Liste in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei **django-locallibrary-tutorial/locallibrary/settings.py** und finden Sie die Definition für die `INSTALLED_APPS`-Liste. Fügen Sie dann eine neue Zeile am Ende der Liste hinzu, wie unten gezeigt:

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
> Sie werden feststellen, dass es bereits viele andere `INSTALLED_APPS` (und `MIDDLEWARE`, weiter unten in der Einstellungsdatei) gibt. Diese ermöglichen die Unterstützung der [Django-Verwaltungsseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die von ihr verwendete Funktionalität (einschließlich Sitzungen, Authentifizierung usw.).

## Datenbank festlegen

Dies ist auch der Punkt, an dem Sie normalerweise die zu verwendende Datenbank für das Projekt festlegen würden. Es macht Sinn, für die Entwicklung und Produktion dieselbe Datenbank zu verwenden, um kleinere Unterschiede im Verhalten zu vermeiden. Weitere Informationen zu den verschiedenen Optionen finden Sie in [Datenbanken](https://docs.djangoproject.com/en/5.0/ref/settings/#databases) (Django-Dokumentation).

Wir werden die Standard-SQLite-Datenbank für den Großteil dieses Beispiels verwenden, da wir nicht erwarten, dass auf einer Demonstrationsdatenbank viel gleichzeitiger Zugriff erforderlich ist und dafür keine zusätzliche Einrichtung erforderlich ist! Sie sehen, wie diese Datenbank in **settings.py** konfiguriert ist:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später zeigen wir Ihnen in [Django-Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration), wie Sie eine Postgres-Datenbank konfigurieren können, die möglicherweise besser für größere Websites geeignet ist.

## Andere Projekteinstellungen

Die Datei **settings.py** wird auch zur Konfiguration einer Anzahl anderer Einstellungen verwendet. An diesem Punkt möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-TIME_ZONE) ändern — diese sollte gleich einer Zeichenkette aus der Standard-[Liste der TZ-Datenbank-Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) gemacht werden (die TZ-Spalte in der Tabelle enthält die gewünschten Werte). Ändern Sie Ihren `TIME_ZONE`-Wert auf eine dieser Zeichenketten, die für Ihre Zeitzone geeignet ist, zum Beispiel:

```python
TIME_ZONE = 'Europe/London'
```

Es gibt zwei weitere Einstellungen, die Sie jetzt nicht ändern werden, aber die Sie beachten sollten:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der als Teil der Sicherheitsstrategie von Django verwendet wird. Wenn Sie diesen Code nicht in der Entwicklung schützen, müssen Sie einen anderen Code verwenden (vielleicht aus einer Umgebungsvariablen oder Datei gelesen), wenn Sie ihn in Produktion setzen.
- `DEBUG`. Diese Einstellung ermöglicht die Anzeige von Debug-Protokollen bei Fehlern, anstatt HTTP-Statuscode-Antworten. Diese sollte in der Produktion auf `False` gesetzt werden, da Debug-Informationen für Angreifer nützlich sind, aber vorerst lassen wir sie auf `True`.

## Den URL-Mapper einrichten

Die Website wird mit einer URL-Mapper-Datei (**urls.py**) im Projektordner erstellt. Während Sie diese Datei verwenden können, um alle Ihre URL-Zuordnungen zu verwalten, ist es üblicher, die Zuordnungen der zugehörigen Anwendung zu überlassen.

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

Die URL-Zuordnungen werden über die `urlpatterns`-Variable verwaltet, welche eine Python-Liste von `path()` Funktionen ist. Jede `path()` Funktion ordnet entweder ein URL-Muster einer _bestimmten Ansicht_ zu, die angezeigt wird, wenn das Muster übereinstimmt, oder einer anderen Liste von URL-Muster-Testcodes (in diesem zweiten Fall wird das Muster zur "Basis-URL" für Muster, die im Zielmodul definiert sind). Die `urlpatterns`-Liste definiert zunächst eine einzige Funktion, die alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zuordnet, das die eigene URL-Zuordnungsdefinition der Verwaltungsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist eine Zeichenkette, die ein zu matchendes URL-Muster definiert. Diese Zeichenkette kann eine benannte Variable (in spitzen Klammern) beinhalten, z.B. `'catalog/<id>/'`. Dieses Muster wird eine URL wie **catalog/_any_chars_/** matchen und _`any_chars`_ als String mit dem Parameternamen `id` an die Ansicht übergeben. Wir diskutieren Methoden und Routenmuster in späteren Themen ausführlicher.

Um der `urlpatterns`-Liste ein neues Listenelement hinzuzufügen, fügen Sie die folgenden Zeilen am Ende der Datei hinzu. Dieses neue Element enthält einen `path()`, der Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` (die Datei mit der relativen URL **catalog/urls.py**) weiterleitet.

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) mit dem Code eingefügt haben, der sie verwendet (damit es einfach ist, zu sehen, was wir hinzugefügt haben), aber es üblich ist, alle Ihre Importzeilen oben in einer Python-Datei einzuschließen.

Lassen Sie uns nun die Stamm-URL unserer Seite (also `127.0.0.1:8000`) an die URL `127.0.0.1:8000/catalog/` umleiten. Dies ist die einzige App, die wir in diesem Projekt verwenden werden. Dafür verwenden wir eine spezielle Ansichts-Funktion, `RedirectView`, die die neue relative URL, auf die umgeleitet werden soll (`/catalog/`), als erstes Argument nimmt, wenn das im `path()`-Funktion angegebene URL-Muster übereinstimmt (in diesem Fall die Stamm-URL).

Fügen Sie die folgenden Zeilen am Ende der Datei hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der Path-Funktion leer, um '/' zu implizieren. Wenn Sie den ersten Parameter als '/' schreiben, gibt Ihnen Django beim Starten des Entwicklungsservers die folgende Warnung:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Django bedient standardmäßig keine statischen Dateien wie CSS, JavaScript und Bilder, aber es kann für den Entwicklungswebserver nützlich sein, dies zu tun, während Sie Ihre Seite erstellen. Als letzte Ergänzung zu diesem URL-Mapper können Sie das Bedienen von statischen Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie den folgenden abschließenden Block nun am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Es gibt eine Reihe von Möglichkeiten, die `urlpatterns`-Liste zu erweitern (zuvor haben wir einfach ein neues Listenelement mit dem `+=`-Operator hinzugefügt, um klar den alten und neuen Code zu trennen). Wir könnten stattdessen dieses neue Muster-Map in die ursprüngliche Listendefinition einschließen:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Als letzten Schritt erstellen Sie eine Datei in Ihrem _catalog_-Ordner namens **urls.py** und fügen Sie den folgenden Text ein, um die (leeren) importierten `urlpatterns` zu definieren. Hier werden wir unsere Muster hinzufügen, während wir die Anwendung erstellen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Testen des Website-Frameworks

An diesem Punkt haben wir ein vollständiges Skeleton-Projekt. Die Website _macht_ tatsächlich noch nichts, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass keine unserer Änderungen etwas beschädigt haben.

Bevor wir das tun, sollten wir zuerst eine _Datenbank-Migration_ durchführen. Dadurch wird unsere Datenbank aktualisiert (um alle Modelle in unseren installierten Anwendungen einzuschließen) und einige Build-Warnungen entfernt.

### Datenbank-Migrationen durchführen

Django verwendet einen Object-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die vom zugrunde liegenden Datenbank verwendete Datenstruktur abzubilden. Während wir unsere Modelldefinitionen ändern, verfolgt Django die Änderungen und kann Datenbank-Migrationsskripte (in **/django-locallibrary-tutorial/catalog/migrations/**) erstellen, um automatisch die zugrunde liegende Datenstruktur in der Datenbank zu migrieren und die dem Modell anzupassen.

Als wir die Website erstellten, hat Django automatisch eine Reihe von Modellen für den Gebrauch im Verwaltungsbereich der Seite hinzugefügt (die wir später betrachten werden). Führen Sie die folgenden Befehle aus, um Tabellen für diese Modelle in der Datenbank zu definieren (stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält):

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn sich Ihre Modelle in einer Weise ändern, die die Struktur der zu speichernden Daten beeinflusst (einschließlich des Hinzufügens und Entfernens von ganzen Modellen und einzelnen Feldern).

Der Befehl `makemigrations` _erstellt_ (wendet jedoch nicht an) die Migrationen für alle Anwendungen an, die in Ihrem Projekt installiert sind. Sie können den Anwendungsnamen auch angeben, um nur eine Migration für eine einzelne App auszuführen. Dies gibt Ihnen die Möglichkeit, den Code für diese Migrationen zu überprüfen, bevor sie angewendet werden. Wenn Sie ein Django-Experte sind, können Sie sich dafür entscheiden, sie leicht zu ändern!

Der Befehl `migrate` ist das, was die Migrationen auf Ihre Datenbank anwendet. Django verfolgt, welche zur aktuellen Datenbank hinzugefügt wurden.

> [!NOTE]
> Sie sollten Migrationen erneut ausführen und die Seite erneut testen, wann immer Sie bedeutende Änderungen vornehmen. Es dauert nicht sehr lange!
>
> Siehe [Migrationen](https://docs.djangoproject.com/en/5.0/topics/migrations/) (Django-Dokumentation) für zusätzliche Informationen über die weniger häufig verwendeten Migrationsbefehle.

### Die Website ausführen

Während der Entwicklung können Sie die Website zunächst mit dem _Entwicklungs-Webserver_ bedienen und dann in Ihrem lokalen Webbrowser anzeigen.

> [!NOTE]
> Der Entwicklungs-Webserver ist nicht robust oder leistungsfähig genug für den Produktionseinsatz, aber es ist eine sehr einfache Möglichkeit, Ihre Django-Website während der Entwicklung in Betrieb zu nehmen, um ihr einen bequemen schnellen Test zu geben. Standardmäßig wird sie die Seite auf Ihrem lokalen Computer (`http://127.0.0.1:8000/`) bedienen, aber Sie können auch andere Computer in Ihrem Netzwerk angeben, um sie zu bedienen. Weitere Informationen finden Sie unter [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/5.0/ref/django-admin/#runserver) (Django-Dokumentation).

Führen Sie den _Entwicklungs-Webserver_ aus, indem Sie den Befehl `runserver` aufrufen (im selben Verzeichnis wie **manage.py**):

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Seite anzeigen, indem Sie in Ihrem lokalen Webbrowser auf `http://127.0.0.1:8000/` navigieren. Sie sollten eine Seitenfehlermeldung sehen, die so aussieht:

![Django-Debugseite (Django 4.2)](django_404_debug_page.png)

Keine Sorge! Diese Fehlermeldung wird erwartet, da wir noch keine Seiten/URLs im Modul `catalog.urls` definiert haben (zu dem wir umgeleitet werden, wenn wir eine URL auf die Wurzel der Seite erhalten).

An diesem Punkt wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite zeigt ein großartiges Django-Feature - automatisierte Debug-Protokollierung. Wann immer eine Seite nicht gefunden werden kann, zeigt Django einen Fehlerbildschirm mit nützlichen Informationen oder einem von dem Code ausgelösten Fehler an. In diesem Fall können wir sehen, dass die von uns angegebene URL mit keinem unserer URL-Muster (wie aufgelistet) übereinstimmt. Die Protokollierung ist in der Produktion ausgeschaltet (was der Fall ist, wenn die Seite live im Web geschaltet wird), in welchem Fall eine weniger informative, aber benutzerfreundlichere Seite serviert wird.

## Vergessen Sie nicht, sich bei GitHub zu sichern

Wir haben gerade einige bedeutende Arbeit geleistet, also ist jetzt ein guter Zeitpunkt, das Projekt mit GitHub zu sichern.

Bewegen Sie zuerst den _Inhalt_ des obersten **locallibrary**-Ordners in den **django_local_library**-Ordner, den Sie [als lokales GitHub-Repository erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer), als Sie die Entwicklungsumgebung einrichteten.
Dazu gehören **manage.py**, der **locallibrary**-Unterordner, der **catalog**-Unterordner und alles andere innerhalb des obersten Ordners.

Fügen Sie dann die Änderungen im **django_local_library**-Ordner hinzu und committen Sie sie und pushen Sie sie zu GitHub.
Vom Stammverzeichnis dieses Ordners aus können Sie eine ähnliche Reihe von Befehlen verwenden wie in dem Abschnitt [Änderungen ändern und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_:

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

Erstellen und mergen Sie dann einen PR aus Ihrem GitHub-Repo.
Nach dem Mergen können Sie wieder zum `main`-Branch wechseln und Ihre Änderungen von GitHub abrufen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den `skeleton_website`-Branch nicht löschen, können Sie später jederzeit zu ihm zurückkehren.

Wir werden dies in Zukunft nicht unbedingt wieder erwähnen, aber Sie finden es vielleicht nützlich, GitHub mit Ihren Änderungen am Ende jedes Abschnitts in diesem Tutorial zu aktualisieren.

## Fordern Sie sich heraus

Das Verzeichnis **catalog/** enthält Dateien für die Ansichten, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und überprüfen Sie das Boilerplate.

Wie Sie vorher gesehen haben, wurde bereits eine URL-Zuordnung für die Admin-Seite in der **urls.py** des Projekts hinzugefügt. Navigieren Sie in Ihrem Browser zum Admin-Bereich und sehen Sie, was passiert (Sie können die richtige URL aus der Zuordnung ableiten).

## Zusammenfassung

Sie haben nun ein vollständiges Projekt für eine Grundstruktur einer Website erstellt, die Sie mit URLs, Modellen, Ansichten und Vorlagen füllen können.

Da das Skeleton für die [Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) jetzt vollständig und laufend ist, ist es an der Zeit, den Code zu schreiben, der diese Website dazu bringt, das zu tun, was sie soll.

## Siehe auch

- [Schreiben Sie Ihre erste Django-App - Teil 1](https://docs.djangoproject.com/en/5.0/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/5.0/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
