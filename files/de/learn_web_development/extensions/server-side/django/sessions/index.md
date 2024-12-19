---
title: "Django-Tutorial Teil 7: Sitzungs-Framework"
slug: Learn_web_development/Extensions/Server-side/Django/Sessions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website und fügt einen besuchsbasierenden Sitzungszähler zur Startseite hinzu. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework nutzen können, um anonymen Benutzern auf Ihren eigenen Websites persistentes Verhalten anzubieten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views">Django-Tutorial Teil 6: Generische Listen- und Detailansichten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Sitzungen verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, die wir in den vorherigen Tutorials erstellt haben, erlaubt es Benutzern, Bücher und Autoren im Katalog zu durchsuchen. Während der Inhalt dynamisch aus der Datenbank generiert wird, haben alle Benutzer im Wesentlichen Zugriff auf die gleichen Seiten und Informationsarten, wenn sie die Seite nutzen.

In einer "echten" Bibliothek möchten Sie möglicherweise einzelnen Benutzern eine personalisierte Erfahrung basierend auf ihrer vorherigen Nutzung der Seite, ihren Präferenzen usw. bieten. Zum Beispiel könnten Sie Warnmeldungen, die der Nutzer bereits zur Kenntnis genommen hat, beim nächsten Besuch der Seite ausblenden oder ihre Präferenzen speichern und respektieren (wie z.B. die Anzahl der Suchergebnisse, die auf jeder Seite angezeigt werden sollen).

Das Sitzungs-Framework ermöglicht Ihnen, solches Verhalten zu implementieren, indem Sie beliebige Daten pro Seitenbesucher speichern und abrufen können.

## Was sind Sitzungen?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über {{Glossary("HTTP", "HTTP")}}, das _zustandslos_ ist. Die Tatsache, dass das Protokoll zustandslos ist, bedeutet, dass Nachrichten zwischen Client und Server vollständig unabhängig voneinander sind — es gibt keinen Begriff von "Sequenz" oder Verhalten basierend auf vorherigen Nachrichten. Daher müssen Sie, wenn Sie eine Seite haben möchten, die die fortlaufenden Beziehungen mit einem Client verfolgt, dies selbst implementieren.

Sitzungen sind der Mechanismus, den Django (und der größte Teil des Internets) verwendet, um den "Zustand" zwischen der Seite und einem bestimmten Browser zu verfolgen. Sitzungen ermöglichen es Ihnen, beliebige Daten pro Browser zu speichern und diese Daten der Seite zur Verfügung zu stellen, wann immer der Browser eine Verbindung herstellt. Einzelne Datenpunkte, die mit der Sitzung assoziiert sind, werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch zum Abrufen der Daten verwendet wird.

Django verwendet ein Cookie, das eine spezielle _Sitzungs-ID_ enthält, um jeden Browser und seine zugehörige Sitzung mit der Seite zu identifizieren. Die eigentlichen Sitzungs_daten_ werden standardmäßig in der Seitendatenbank gespeichert (dies ist sicherer, als die Daten in einem Cookie zu speichern, wo sie bösartigen Benutzern stärker ausgesetzt sind). Sie können Django so konfigurieren, dass die Sitzungsdaten an anderen Orten (Cache, Dateien, "sichere" Cookies) gespeichert werden, aber der Standardort ist eine gute und relativ sichere Option.

## Sitzungen aktivieren

Sitzungen wurden automatisch aktiviert, als wir die [Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2).

Die Konfiguration wird in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) festgelegt, wie unten gezeigt:

```python
INSTALLED_APPS = [
    # …
    'django.contrib.sessions',
    # …

MIDDLEWARE = [
    # …
    'django.contrib.sessions.middleware.SessionMiddleware',
    # …
```

## Sitzungen verwenden

Sie können auf das `session`-Attribut innerhalb einer Ansicht vom `request`-Parameter aus zugreifen (ein `HttpRequest`, der als erstes Argument an die Ansicht übergeben wird). Dieses Session-Attribut repräsentiert die spezifische Verbindung zum aktuellen Benutzer (oder präziser, die Verbindung zum aktuellen _Browser_, identifiziert durch die Sitzungs-ID im Browser-Cookie für diese Seite).

Das `session`-Attribut ist ein wörterbuchähnliches Objekt, das Sie beliebig oft in Ihrer Ansicht lesen und schreiben können, wobei Sie es nach Belieben ändern können. Sie können alle normalen Wörterbuchoperationen ausführen, einschließlich aller Datenlöschen, Testen, ob ein Schlüssel vorhanden ist, durch Daten schleifen usw. Meistens verwenden Sie jedoch einfach die Standard-"Wörterbuch"-API, um Werte zu erhalten und zu setzen.

Die unten stehenden Codefragmente zeigen, wie Sie mit dem Schlüssel `my_car` einige Daten assoziiert mit der aktuellen Sitzung (dem Browser) erhalten, setzen und löschen können.

> [!NOTE]
> Ein großer Vorteil von Django ist, dass Sie in Ihrer Ansicht nicht über die Mechanismen nachdenken müssen, die die Sitzung mit Ihrer aktuellen Anfrage verknüpfen. Wenn wir die unten stehenden Fragmente in unserer Ansicht verwenden würden, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verknüpft sind, der die aktuelle Anfrage gesendet hat.

```python
# Get a session value by its key (e.g. 'my_car'), raising a KeyError if the key is not present
my_car = request.session['my_car']

# Get a session value, setting a default if it is not present ('mini')
my_car = request.session.get('my_car', 'mini')

# Set a session value
request.session['my_car'] = 'mini'

# Delete a session value
del request.session['my_car']
```

Die API bietet auch eine Reihe anderer Methoden, die hauptsächlich zur Verwaltung des zugehörigen Sitzungscookies verwendet werden. Zum Beispiel gibt es Methoden, um zu testen, ob Cookies im Client-Browser unterstützt werden, um das Ablaufdatum von Cookies festzulegen und zu überprüfen sowie abgelaufene Sitzungen aus dem Datenspeicher zu löschen. Sie können sich über die vollständige API in der [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation) informieren.

## Sitzungsdaten speichern

Standardmäßig speichert Django nur dann in der Sitzungsdatenbank und sendet das Sitzungs-Cookie an den Client, wenn die Sitzung _geändert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mithilfe ihres Sitzungsschlüssels wie im vorherigen Abschnitt aktualisieren, müssen Sie sich darüber keine Sorgen machen! Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ von Sitzungsdaten aktualisieren, erkennt Django nicht, dass Sie eine Änderung an der Sitzung vorgenommen haben und speichert die Daten nicht (zum Beispiel, wenn Sie `wheels`-Daten innerhalb Ihrer `my_car`-Daten ändern, wie unten gezeigt). In diesem Fall müssen Sie die Sitzung explizit als geändert markieren.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten so ändern, dass die Seite die Datenbank bei jeder Anfrage aktualisiert/das Cookie sendet, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` in Ihre Projekteinstellungen (**django-locallibrary-tutorial/locallibrary/settings.py**) hinzufügen.

## Einfaches Beispiel — Abrufen der Besuchszählungen

Als ein einfaches Praxisbeispiel werden wir unsere Bibliothek aktualisieren, um dem aktuellen Benutzer mitzuteilen, wie oft er die _LocalLibrary_-Startseite besucht hat.

Öffnen Sie **/django-locallibrary-tutorial/catalog/views.py**, und fügen Sie die Zeilen hinzu, die `num_visits` in `index()` enthalten (wie unten gezeigt).

```python
def index(request):
    # …

    num_authors = Author.objects.count()  # The 'all()' is implied by default.

    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 0)
    num_visits += 1
    request.session['num_visits'] = num_visits

    context = {
        'num_books': num_books,
        'num_instances': num_instances,
        'num_instances_available': num_instances_available,
        'num_authors': num_authors,
        'num_visits': num_visits,
    }

    # Render the HTML template index.html with the data in the context variable.
    return render(request, 'index.html', context=context)
```

Hier holen wir zuerst den Wert des Sitzungs-Schlüssels `'num_visits'`, indem wir den Wert auf 0 setzen, falls er vorher nicht gesetzt war. Jedes Mal, wenn eine Anfrage empfangen wird, inkrementieren wir den Wert und speichern ihn zurück in der Sitzung (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann in unserer Kontextvariablen an das Template übergeben.

> [!NOTE]
> Wir könnten hier auch testen, ob Cookies im Browser überhaupt unterstützt werden (siehe [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unser UI so gestalten, dass es keine Rolle spielt, ob Cookies unterstützt werden oder nicht.

Fügen Sie die gezeigte Zeile unten in Ihrem Haupt-HTML-Template (**/django-locallibrary-tutorial/catalog/templates/index.html**) hinzu, am Ende des Abschnitts "Dynamischer Inhalt", um die `num_visits` Kontextvariable anzuzeigen.

```django
<h2>Dynamic content</h2>

<p>The library has the following record counts:</p>
<ul>
  <li><strong>Books:</strong> \{{ num_books }}</li>
  <li><strong>Copies:</strong> \{{ num_instances }}</li>
  <li><strong>Copies available:</strong> \{{ num_instances_available }}</li>
  <li><strong>Authors:</strong> \{{ num_authors }}</li>
</ul>

<p>
  You have visited this page \{{ num_visits }} time\{{ num_visits|pluralize }}.
</p>
```

Beachten Sie, dass wir das eingebaute Django-Template-Tag [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) verwenden, um ein "s" hinzuzufügen, wenn die Seite mehrmals besucht wurde.

Speichern Sie Ihre Änderungen und starten Sie den Testserver neu. Jedes Mal, wenn Sie die Seite aktualisieren, sollte sich die Zahl aktualisieren.

## Zusammenfassung

Sie wissen nun, wie einfach es ist, Sitzungen zu nutzen, um Ihre Interaktion mit _anonymen_ Benutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Authentifizierungs- und Autorisierungs- (Berechtigungs-)Framework erklären und Ihnen zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}
