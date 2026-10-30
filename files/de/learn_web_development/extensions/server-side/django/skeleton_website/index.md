---
title: "Django-Tutorial Teil 2: Erstellen eines Website-Grundgerüsts"
short-title: "2: Website-Grundgerüst"
slug: Learn_web_development/Extensions/Server-side/Django/skeleton_website
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser zweite Artikel unseres [Django-Tutorials](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) zeigt, wie Sie ein Website-Projekt als Grundgerüst erstellen. Dieses können Sie anschließend um seitenspezifische Einstellungen, Pfade, Modelle, Views und Templates ergänzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Eine Django-Entwicklungsumgebung einrichten</a>.
        Lesen Sie das <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website">Django-Tutorial</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie können mit den Werkzeugen von Django eigene neue Website-Projekte starten.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Dieser Artikel zeigt, wie Sie eine Website als Grundgerüst erstellen, die Sie anschließend um seitenspezifische Einstellungen, Pfade, Modelle, Views und Templates ergänzen können. Diese behandeln wir in späteren Artikeln.

So beginnen Sie:

1. Verwenden Sie das Werkzeug `django-admin`, um einen Projektordner, grundlegende Dateivorlagen und **manage.py** zu erzeugen. Dieses Skript dient zur Verwaltung Ihres Projekts.
2. Verwenden Sie **manage.py**, um eine oder mehrere _Anwendungen_ zu erstellen.

   > [!NOTE]
   > Eine Website kann aus einem oder mehreren Bereichen bestehen, beispielsweise einer Hauptseite, einem Blog, einem Wiki oder einem Download-Bereich. Django empfiehlt, diese Komponenten als separate _Anwendungen_ zu entwickeln. Bei Bedarf können Sie sie dann in anderen Projekten wiederverwenden.

3. Registrieren Sie die neuen Anwendungen, damit sie in das Projekt eingebunden werden.
4. Binden Sie für jede Anwendung die **URL-/Pfad-Zuordnung** ein.

Bei der [Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) heißen die Website- und Projektordner _locallibrary_. Das Projekt enthält eine Anwendung namens _catalog_.
Die Ordnerstruktur auf oberster Ebene sieht daher wie folgt aus:

```bash
locallibrary/         # Website folder
    manage.py         # Script to run Django tools for this project (created using django-admin)
    locallibrary/     # Website/project folder (created using django-admin)
    catalog/          # Application folder (created using manage.py)
```

Die folgenden Abschnitte erläutern die einzelnen Schritte ausführlich und zeigen, wie Sie Ihre Änderungen testen können.
Am Ende dieses Artikels besprechen wir weitere projektweite Einstellungen, die Sie in dieser Phase vornehmen können.

## Das Projekt erstellen

So erstellen Sie das Projekt:

1. Öffnen Sie eine Befehlszeile oder ein Terminalfenster und stellen Sie sicher, dass Ihre [virtuelle Umgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#using_a_virtual_environment) aktiv ist.
2. Wechseln Sie in den Ordner, in dem Sie Ihre Local-Library-Anwendung erstellen möchten. Später verschieben wir sie in den Ordner „django_local_library“, den Sie beim Einrichten der Entwicklungsumgebung [als lokales GitHub-Repository erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben.
3. Erstellen Sie das neue Projekt mit dem Befehl `django-admin startproject` wie gezeigt und wechseln Sie anschließend in den Projektordner:

   ```bash
   django-admin startproject locallibrary
   cd locallibrary
   ```

   Das Werkzeug `django-admin` erstellt die folgende Ordner- und Dateistruktur:

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
- **settings.py** enthält alle Website-Einstellungen, darunter die Registrierung der von uns erstellten Anwendungen, den Speicherort der statischen Dateien und Angaben zur Datenbankkonfiguration.
- **urls.py** definiert die Zuordnung zwischen Website-URLs und Views. Die Datei könnte zwar den _gesamten_ Code für die URL-Zuordnung enthalten, üblicher ist es jedoch, einen Teil der Zuordnungen an einzelne Anwendungen zu delegieren. Das werden Sie später sehen.
- **wsgi.py** hilft Ihrer Django-Anwendung bei der Kommunikation mit dem Webserver. Sie können diese Datei als vorgegebenen Standardcode betrachten.
- **asgi.py** steht für einen Standard, über den asynchrone Python-Webanwendungen und Server miteinander kommunizieren. Das Asynchronous Server Gateway Interface (ASGI) ist der asynchrone Nachfolger des Web Server Gateway Interface (WSGI). ASGI bietet einen Standard sowohl für asynchrone als auch für synchrone Python-Anwendungen, während WSGI nur einen Standard für synchrone Anwendungen bereitstellte. ASGI ist abwärtskompatibel mit WSGI und unterstützt mehrere Server und Anwendungsframeworks.

Das Skript **manage.py** dient dazu, Anwendungen zu erstellen, mit Datenbanken zu arbeiten und den Entwicklungswebserver zu starten.

> [!NOTE]
> Im weiteren Verlauf dieses Tutorials beziehen sich Dateipfade wie **/locallibrary/settings.py** auf den Projektordner der obersten Ebene, der **manage.py** enthält. Der führende `/` steht für diesen Ordner.

## Die catalog-Anwendung erstellen

Führen Sie als Nächstes den folgenden Befehl aus, um die Anwendung _catalog_ innerhalb unseres Projekts _locallibrary_ zu erstellen. Achten Sie darauf, den Befehl im selben Ordner wie die Datei **manage.py** Ihres Projekts auszuführen:

```bash
# Linux/macOS
python3 manage.py startapp catalog

# Windows
py manage.py startapp catalog
```

> [!NOTE]
> Im weiteren Verlauf des Tutorials wird die Syntax für Linux/macOS verwendet.
> Wenn Sie unter Windows arbeiten, verwenden Sie anstelle eines Befehls, der mit `python3` beginnt, `py` oder `py -3`.

Das Werkzeug erstellt einen neuen Ordner und fügt Dateien für die verschiedenen Bestandteile der Anwendung hinzu, wie das folgende Beispiel zeigt.
Die meisten Dateien sind nach ihrem Zweck benannt: Views gehören beispielsweise in **views.py**, Modelle in **models.py**, Tests in **tests.py**, die Konfiguration der Administrationsoberfläche in **admin.py** und die Anwendungsregistrierung in **apps.py**. Die Dateien enthalten bereits etwas grundlegenden Standardcode für die Arbeit mit den jeweiligen Objekten.

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

Außerdem haben wir nun:

- Einen Ordner _migrations_, in dem „Migrationen“ gespeichert werden. Das sind Dateien, mit denen Sie Ihre Datenbank automatisch aktualisieren können, wenn Sie Ihre Modelle ändern.
- **\_\_init\_\_.py** — eine hier erstellte leere Datei, damit Django/Python den Ordner als [Python-Paket](https://docs.python.org/3/tutorial/modules.html#packages) erkennt und Sie dessen Objekte in anderen Teilen des Projekts verwenden können.

> [!NOTE]
> Ist Ihnen aufgefallen, was in der obigen Dateiliste fehlt? Für Views und Modelle gibt es bereits Dateien, aber noch keinen Ort für Ihre URL-Zuordnungen, Templates und statischen Dateien. Wir zeigen Ihnen später, wie Sie diese erstellen. Sie werden nicht für jede Website benötigt, wohl aber für dieses Beispiel.

## Die catalog-Anwendung registrieren

Nachdem die Anwendung erstellt wurde, müssen wir sie beim Projekt registrieren. So wird sie berücksichtigt, wenn Werkzeuge ausgeführt werden, beispielsweise beim Hinzufügen von Modellen zur Datenbank. Anwendungen werden registriert, indem sie der Liste `INSTALLED_APPS` in den Projekteinstellungen hinzugefügt werden.

Öffnen Sie die Projekteinstellungsdatei **/locallibrary/settings.py** und suchen Sie die Definition der Liste `INSTALLED_APPS`. Fügen Sie am Ende der Liste eine neue Zeile hinzu, wie unten gezeigt:

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

Die neue Zeile gibt das Anwendungskonfigurationsobjekt (`CatalogConfig`) an, das beim Erstellen der Anwendung in **/catalog/apps.py** für Sie erzeugt wurde.

> [!NOTE]
> Sie werden feststellen, dass bereits viele andere Einträge in `INSTALLED_APPS` vorhanden sind. Weiter unten in der Einstellungsdatei finden Sie außerdem `MIDDLEWARE`. Diese Einträge aktivieren die Unterstützung für die [Django-Administrationsoberfläche](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site) und die von ihr verwendeten Funktionen, darunter Sessions und Authentifizierung.

## Die Datenbank festlegen

An dieser Stelle würden Sie normalerweise auch die Datenbank festlegen, die für das Projekt verwendet werden soll. Wenn möglich, ist es sinnvoll, für Entwicklung und Produktion dieselbe Datenbank zu verwenden, um kleinere Unterschiede im Verhalten zu vermeiden. Informationen zu den verschiedenen Optionen finden Sie unter [Datenbanken](https://docs.djangoproject.com/en/6.1/ref/settings/#databases) in der Django-Dokumentation.

Für den größten Teil dieses Beispiels verwenden wir die standardmäßig eingerichtete SQLite-Datenbank. Bei einer Demonstrationsdatenbank erwarten wir nicht viele gleichzeitige Zugriffe, und SQLite erfordert keinen zusätzlichen Einrichtungsaufwand. Wie diese Datenbank konfiguriert ist, sehen Sie in **settings.py**:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Später zeigen wir unter [Django in der Produktionsumgebung bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment#database_configuration) außerdem, wie Sie eine Postgres-Datenbank konfigurieren. Diese eignet sich möglicherweise besser für größere Websites.

## Weitere Projekteinstellungen

Die Datei **settings.py** dient auch dazu, zahlreiche weitere Einstellungen zu konfigurieren. An dieser Stelle möchten Sie wahrscheinlich nur die [TIME_ZONE](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-TIME_ZONE) ändern. Ihr Wert sollte eine Zeichenfolge aus der standardisierten [Liste der Zeitzonen der tz-Datenbank](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein. Die gewünschten Werte stehen in der Spalte „TZ“ der Tabelle. Ändern Sie den Wert von `TIME_ZONE` in eine dieser Zeichenfolgen, die Ihrer Zeitzone entspricht, beispielsweise:

```python
TIME_ZONE = 'Europe/London'
```

Zwei weitere Einstellungen werden Sie jetzt nicht ändern, sollten sie aber kennen:

- `SECRET_KEY`. Dies ist ein geheimer Schlüssel, der Teil von Djangos Sicherheitskonzept für Websites ist. Wenn Sie diesen Code während der Entwicklung nicht schützen, müssen Sie für den Produktivbetrieb einen anderen Schlüssel verwenden, den Sie beispielsweise aus einer Umgebungsvariablen oder einer Datei einlesen.
- `DEBUG`. Diese Einstellung bewirkt, dass bei Fehlern Debug-Informationen angezeigt werden, statt nur eine Antwort mit einem HTTP-Statuscode zurückzugeben. In der Produktionsumgebung sollte sie auf `False` gesetzt sein, da Debug-Informationen für Angreifer nützlich sind. Vorerst können wir sie jedoch auf `True` belassen.

## Die URL-Zuordnung einbinden

Beim Erstellen der Website wird im Projektordner eine Datei für die URL-Zuordnung (**urls.py**) angelegt. Sie können darin zwar alle URL-Zuordnungen verwalten, üblicherweise werden die Zuordnungen jedoch an die jeweilige Anwendung delegiert.

Öffnen Sie **/locallibrary/urls.py** und beachten Sie den erklärenden Text zu einigen Verwendungsmöglichkeiten der URL-Zuordnung.

```python
"""
URL configuration for locallibrary project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.1/topics/http/urls/
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

Die URL-Zuordnungen werden über die Variable `urlpatterns` verwaltet, eine Python-_Liste_ von `path()`-Funktionen. Jede `path()`-Funktion verknüpft entweder ein URL-Muster mit einer _bestimmten View_, die bei einer Übereinstimmung angezeigt wird, oder mit einer weiteren Liste zur Prüfung von URL-Mustern. Im zweiten Fall wird das Muster zur „Basis-URL“ für die im Zielmodul definierten Muster. Anfangs enthält die Liste `urlpatterns` eine einzige Funktion. Sie ordnet alle URLs mit dem Muster _admin/_ dem Modul `admin.site.urls` zu, das die URL-Zuordnungen der Administrationsanwendung enthält.

> [!NOTE]
> Die Route in `path()` ist eine Zeichenfolge, die ein URL-Muster für den Abgleich definiert. Diese Zeichenfolge kann eine benannte Variable in spitzen Klammern enthalten, beispielsweise `'catalog/<id>/'`. Dieses Muster entspricht einer URL wie **catalog/_any_chars_/** und übergibt _`any_chars`_ als Zeichenfolge mit dem Parameternamen `id` an die View. Pfadmethoden und Routenmuster behandeln wir in späteren Abschnitten ausführlicher.

Um der Liste `urlpatterns` einen neuen Eintrag hinzuzufügen, ergänzen Sie am Ende der Datei die folgenden Zeilen. Der neue Eintrag enthält eine `path()`-Funktion, die Anfragen mit dem Muster `catalog/` an das Modul `catalog.urls` weiterleitet, also an die Datei mit der relativen URL **catalog/urls.py**.

```python
# Use include() to add paths from the catalog application
from django.urls import include

urlpatterns += [
    path('catalog/', include('catalog.urls')),
]
```

> [!NOTE]
> Beachten Sie, dass wir die Importzeile (`from django.urls import include`) zusammen mit dem Code eingefügt haben, der sie verwendet. So ist leicht zu erkennen, was wir hinzugefügt haben. Üblicherweise stehen jedoch alle Importzeilen am Anfang einer Python-Datei.

Leiten wir nun die Stamm-URL unserer Website (`127.0.0.1:8000`) an die URL `127.0.0.1:8000/catalog/` weiter. Dies ist die einzige Anwendung, die wir in diesem Projekt verwenden. Dafür nutzen wir eine spezielle View-Funktion namens `RedirectView`. Wenn das in `path()` angegebene URL-Muster übereinstimmt — hier die Stamm-URL —, leitet sie an die neue relative URL (`/catalog/`) weiter, die ihr als erstes Argument übergeben wird.

Fügen Sie am Ende der Datei die folgenden Zeilen hinzu:

```python
# Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/catalog/', permanent=True)),
]
```

Lassen Sie den ersten Parameter der `path()`-Funktion leer, um „/“ anzugeben. Wenn Sie als ersten Parameter „/“ eintragen, gibt Django beim Starten des Entwicklungsservers die folgende Warnung aus:

```python
System check identified some issues:

WARNINGS:
?: (urls.W002) Your URL pattern '/' has a route beginning with a '/'.
Remove this slash as it is unnecessary.
If this pattern is targeted in an include(), ensure the include() pattern has a trailing '/'.
```

Standardmäßig stellt Django keine statischen Dateien wie CSS, JavaScript und Bilder bereit. Während Sie Ihre Website erstellen, kann es jedoch hilfreich sein, wenn der Entwicklungswebserver dies übernimmt. Als letzte Ergänzung dieser URL-Zuordnung können Sie die Bereitstellung statischer Dateien während der Entwicklung aktivieren, indem Sie die folgenden Zeilen anhängen.

Fügen Sie jetzt den folgenden abschließenden Block am Ende der Datei hinzu:

```python
# Use static() to add URL mapping to serve static files during development (only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

> [!NOTE]
> Die Liste `urlpatterns` lässt sich auf verschiedene Weise erweitern. Zuvor haben wir mit dem Operator `+=` einen neuen Listeneintrag angehängt, um den alten und den neuen Code klar voneinander zu trennen. Stattdessen hätten wir das neue Zuordnungsmuster auch direkt in die ursprüngliche Listendefinition aufnehmen können:
>
> ```python
> urlpatterns = [
>     path('admin/', admin.site.urls),
>     path('catalog/', include('catalog.urls')),
>     path('', RedirectView.as_view(url='catalog/')),
> ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
> ```

Erstellen Sie abschließend im Ordner _catalog_ eine Datei namens **urls.py** und fügen Sie den folgenden Text hinzu. Damit definieren Sie die importierte, zunächst leere Liste `urlpatterns`. Hier werden wir beim Aufbau der Anwendung unsere Muster eintragen.

```python
from django.urls import path
from . import views

urlpatterns = [

]
```

## Das Website-Grundgerüst testen

An diesem Punkt haben wir ein vollständiges Projektgrundgerüst. Die Website _tut_ zwar noch nichts, aber es lohnt sich, sie auszuführen, um sicherzustellen, dass unsere Änderungen nichts beschädigt haben.

Zuvor sollten wir eine _Datenbankmigration_ ausführen. Dadurch wird unsere Datenbank aktualisiert, sodass sie alle Modelle unserer installierten Anwendungen enthält, und einige Warnungen beim Erstellen werden beseitigt.

### Datenbankmigrationen ausführen

Django verwendet einen Object-Relational-Mapper (ORM), um Modelldefinitionen im Django-Code auf die Datenstruktur der zugrunde liegenden Datenbank abzubilden. Wenn wir unsere Modelldefinitionen ändern, erfasst Django diese Änderungen und kann Skripte für Datenbankmigrationen erstellen, die unter **/catalog/migrations/** gespeichert werden. Damit lässt sich die zugrunde liegende Datenstruktur der Datenbank automatisch an das Modell anpassen.

Als wir die Website erstellt haben, hat Django automatisch mehrere Modelle für den Administrationsbereich hinzugefügt, den wir später betrachten werden. Führen Sie die folgenden Befehle aus, um in der Datenbank Tabellen für diese Modelle anzulegen. Stellen Sie sicher, dass Sie sich im Verzeichnis befinden, das **manage.py** enthält:

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

> [!WARNING]
> Sie müssen diese Befehle jedes Mal ausführen, wenn Sie Ihre Modelle so ändern, dass sich die Struktur der zu speichernden Daten ändert. Das gilt sowohl beim Hinzufügen oder Entfernen ganzer Modelle als auch bei einzelnen Feldern.

Der Befehl `makemigrations` _erstellt_ die Migrationen für alle in Ihrem Projekt installierten Anwendungen, wendet sie aber nicht an. Sie können zusätzlich den Namen einer Anwendung angeben, um nur für diese eine Migration zu erstellen. So haben Sie Gelegenheit, den Code der Migrationen zu prüfen, bevor sie angewendet werden. Wenn Sie bereits viel Erfahrung mit Django haben, können Sie ihn bei Bedarf leicht anpassen.

Der Befehl `migrate` wendet die Migrationen auf Ihre Datenbank an. Django hält fest, welche Migrationen bereits auf die aktuelle Datenbank angewendet wurden.

> [!NOTE]
> Nach größeren Änderungen sollten Sie die Migrationen erneut ausführen und die Website noch einmal testen. Das dauert nicht lange.
>
> Weitere Informationen zu den seltener verwendeten Migrationsbefehlen finden Sie unter [Migrationen](https://docs.djangoproject.com/en/6.1/topics/migrations/) in der Django-Dokumentation.

### Die Website ausführen

Während der Entwicklung können Sie die Website zunächst über den _Entwicklungswebserver_ bereitstellen und sie anschließend in Ihrem lokalen Webbrowser aufrufen.

> [!NOTE]
> Der Entwicklungswebserver ist für den Produktivbetrieb weder robust noch leistungsfähig genug. Während der Entwicklung können Sie Ihre Django-Website damit jedoch sehr einfach starten und schnell testen. Standardmäßig stellt er die Website auf Ihrem lokalen Computer bereit (`http://127.0.0.1:8000/)`. Sie können aber auch festlegen, dass sie für andere Computer in Ihrem Netzwerk erreichbar ist. Weitere Informationen finden Sie unter [django-admin und manage.py: runserver](https://docs.djangoproject.com/en/6.1/ref/django-admin/#runserver) in der Django-Dokumentation.

Starten Sie den _Entwicklungswebserver_ mit dem Befehl `runserver` im selben Verzeichnis wie **manage.py**:

```bash
python3 manage.py runserver
```

Sobald der Server läuft, können Sie die Website in Ihrem lokalen Webbrowser unter `http://127.0.0.1:8000/` aufrufen. Sie sollten eine Fehlerseite sehen, die ungefähr so aussieht:

![Django-Debug-Seite](django_404_debug_page.png)

Keine Sorge! Diese Fehlerseite ist zu erwarten, weil wir im Modul `catalog.urls` noch keine Seiten oder URLs definiert haben. An dieses Modul werden Anfragen an die Stamm-URL der Website weitergeleitet.

Damit wissen wir, dass Django funktioniert!

> [!NOTE]
> Die Beispielseite zeigt eine nützliche Django-Funktion: die automatische Anzeige von Debug-Informationen. Wenn eine Seite nicht gefunden werden kann, zeigt Django eine Fehlerseite mit hilfreichen Informationen oder mit einem vom Code ausgelösten Fehler an. In diesem Fall sehen wir, dass die angegebene URL keinem unserer aufgeführten URL-Muster entspricht. In der Produktionsumgebung, wenn die Website im Web veröffentlicht ist, wird diese Ausgabe deaktiviert. Stattdessen wird eine weniger informative, aber benutzerfreundlichere Seite angezeigt.

## Vergessen Sie nicht, Ihr Projekt auf GitHub zu sichern

Wir haben gerade einige wichtige Arbeiten abgeschlossen. Daher ist jetzt ein guter Zeitpunkt, das Projekt mithilfe von GitHub zu sichern.

Verschieben Sie zunächst den _Inhalt_ des Ordners **locallibrary** auf oberster Ebene in den Ordner **django_local_library**, den Sie beim Einrichten der Entwicklungsumgebung [als lokales GitHub-Repository erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#clone_the_repo_to_your_local_computer) haben.
Dazu gehören **manage.py**, der Unterordner **locallibrary**, der Unterordner **catalog** und alles Weitere im Ordner auf oberster Ebene.

Fügen Sie anschließend die Änderungen im Ordner **django_local_library** hinzu, committen Sie sie und pushen Sie sie zu GitHub.
Im Stammverzeichnis dieses Ordners können Sie ähnliche Befehle verwenden wie im Abschnitt [Änderungen vornehmen und synchronisieren](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#modify_and_sync_changes) des Themas _Entwicklungsumgebung_:

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

Erstellen Sie dann in Ihrem GitHub-Repository einen Pull Request (PR) und führen Sie ihn zusammen.
Danach können Sie zum Branch `main` zurückwechseln und Ihre Änderungen von GitHub abrufen:

```bash
git checkout main
git pull origin main
```

> [!NOTE]
> Wenn Sie den Branch `skeleton_website` nicht löschen, können Sie jederzeit später zu ihm zurückwechseln.

Wir werden dies künftig nicht unbedingt jedes Mal erwähnen. Es kann jedoch sinnvoll sein, GitHub nach jedem Abschnitt dieses Tutorials mit Ihren Änderungen zu aktualisieren.

## Probieren Sie es selbst aus

Das Verzeichnis **catalog/** enthält Dateien für die Views, Modelle und andere Teile der Anwendung. Öffnen Sie diese Dateien und sehen Sie sich den enthaltenen Standardcode an.

Wie Sie bereits gesehen haben, wurde in der Datei **urls.py** des Projekts schon eine URL-Zuordnung für die Administrationsoberfläche hinzugefügt. Rufen Sie den Administrationsbereich in Ihrem Browser auf und sehen Sie nach, was passiert. Die passende URL können Sie aus der Zuordnung ableiten.

## Zusammenfassung

Sie haben nun ein vollständiges Website-Projekt als Grundgerüst erstellt, das Sie als Nächstes um URLs, Modelle, Views und Templates ergänzen können.

Da das Grundgerüst für die [Local-Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) fertig ist und läuft, können wir nun den Code schreiben, der die vorgesehenen Funktionen der Website umsetzt.

## Siehe auch

- [Ihre erste Django-Anwendung schreiben – Teil 1](https://docs.djangoproject.com/en/6.1/intro/tutorial01/) (Django-Dokumentation)
- [Anwendungen](https://docs.djangoproject.com/en/6.1/ref/applications/#configuring-applications) (Django-Dokumentation).
  Enthält Informationen zur Konfiguration von Anwendungen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django")}}
