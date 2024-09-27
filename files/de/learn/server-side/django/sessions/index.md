---
title: "Django Tutorial Teil 7: Sitzungs-Framework"
slug: Learn/Server-side/Django/Sessions
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Webseite, indem es einen Sitzungs-basierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework nutzen können, um ein beständiges Verhalten für anonyme Benutzer auf Ihren eigenen Websites zu ermöglichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn/Server-side/Django/Generic_views">Django Tutorial Teil 6: Generische Listen- und Detailansichten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis, wie Sitzungen verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Webseite, die wir in den vorherigen Tutorials erstellt haben, ermöglicht es Benutzern, Bücher und Autoren im Katalog zu durchsuchen. Während der Inhalt dynamisch aus der Datenbank generiert wird, haben alle Benutzer beim Besuch der Website im Wesentlichen Zugang zu denselben Seiten und Informationen.

In einer "echten" Bibliothek möchten Sie möglicherweise einzelnen Benutzern eine angepasste Erfahrung bieten, basierend auf ihrer vorherigen Nutzung der Website, ihren Präferenzen usw. Beispielsweise könnten Sie Warnmeldungen ausblenden, die der Benutzer bereits beim nächsten Besuch der Website bestätigt hat, oder seine Präferenzen speichern und respektieren (z. B. die Anzahl der Suchergebnisse, die auf jeder Seite angezeigt werden sollen).

Das Sitzungs-Framework ermöglicht es Ihnen, ein solches Verhalten zu implementieren, sodass Sie beliebige Daten pro Website-Besucher speichern und abrufen können.

## Was sind Sitzungen?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über [HTTP](/de/docs/Glossary/HTTP), welches _zustandslos_ ist. Dass das Protokoll zustandslos ist, bedeutet, dass Nachrichten zwischen Client und Server völlig unabhängig voneinander sind - es gibt kein Konzept von "Sequenz" oder Verhalten basierend auf vorherigen Nachrichten. Wenn Sie also eine Website haben möchten, die die laufende Beziehung zu einem Client verfolgt, müssen Sie das selbst implementieren.

Sitzungen sind der von Django (und den meisten Teilen des Internets) verwendete Mechanismus, um den "Zustand" zwischen der Website und einem bestimmten Browser zu verfolgen. Sitzungen ermöglichen es Ihnen, beliebige Daten pro Browser zu speichern und diese Daten der Website zur Verfügung zu stellen, wann immer der Browser eine Verbindung herstellt. Einzelne Datenpunkte, die mit der Sitzung verknüpft sind, werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch zum Abrufen der Daten verwendet wird.

Django verwendet ein Cookie, das eine spezielle _Sitzungs-ID_ enthält, um jeden Browser und die zugehörige Sitzung mit der Website zu identifizieren. Die eigentlichen Sitzungsdaten werden standardmäßig in der Site-Datenbank gespeichert (dies ist sicherer, als die Daten in einem Cookie zu speichern, wo sie anfälliger für böswillige Benutzer sind). Sie können Django so konfigurieren, dass die Sitzungsdaten an anderen Orten gespeichert werden (Cache, Dateien, "sichere" Cookies), aber der Standardspeicherort ist eine gute und relativ sichere Option.

## Sitzungen aktivieren

Sitzungen wurden automatisch aktiviert, als wir die [Skeleton-Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (im Tutorial 2).

Die Konfiguration ist in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

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

## Verwendung von Sitzungen

Sie können innerhalb einer Ansicht über den `request`-Parameter (ein `HttpRequest`, das als erstes Argument an die Ansicht übergeben wird) auf das `session`-Attribut zugreifen. Dieses Sitzungs-Attribut stellt die spezifische Verbindung zum aktuellen Benutzer dar (oder um genauer zu sein, die Verbindung zum aktuellen _Browser_, wie in der Sitzungs-ID im Cookie des Browsers für diese Site identifiziert).

Das `session`-Attribut ist ein Dictionary-ähnliches Objekt, das Sie beliebig oft in Ihrer Ansicht lesen und schreiben können, um es nach Wunsch zu ändern. Sie können alle normalen Dictionary-Operationen ausführen, einschließlich des Löschens aller Daten, des Testens, ob ein Schlüssel vorhanden ist, des Durchlaufens der Daten usw. Die meiste Zeit verwenden Sie jedoch einfach die Standard-"Dictionary"-API zum Abrufen und Festlegen von Werten.

Die untenstehenden Codefragmente zeigen, wie Sie einige Daten mit dem Schlüssel `my_car`, die mit der aktuellen Sitzung (dem Browser) verknüpft sind, abrufen, festlegen und löschen können.

> [!NOTE]
> Eines der großartigen Dinge an Django ist, dass Sie nicht über die Mechanismen nachdenken müssen, die die Sitzung mit Ihrer aktuellen Anfrage in Ihrer Ansicht verknüpfen. Wenn wir die untenstehenden Fragmente in unserer Ansicht verwenden würden, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verbunden sind, der die aktuelle Anfrage gesendet hat.

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

Die API bietet auch eine Reihe weiterer Methoden, die hauptsächlich zum Verwalten des zugehörigen Sitzungs-Cookies verwendet werden. Zum Beispiel gibt es Methoden, um zu testen, ob Cookies im Client-Browser unterstützt werden, um Ablaufdaten von Cookies festzulegen und zu überprüfen und um abgelaufene Sitzungen aus dem Datenspeicher zu löschen. Sie können sich über die vollständige API in der [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumente) informieren.

## Speichern von Sitzungsdaten

Standardmäßig speichert Django nur in die Sitzungsdatenbank und sendet das Sitzungs-Cookie an den Client, wenn die Sitzung _modifiziert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mit ihrem Sitzungs-Schlüssel wie im vorherigen Abschnitt gezeigt aktualisieren, müssen Sie sich darum keine Sorgen machen! Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ von Sitzungsdaten aktualisieren, erkennt Django nicht, dass Sie eine Änderung an der Sitzung vorgenommen haben, und speichert die Daten (zum Beispiel, wenn Sie die `wheels`-Daten innerhalb Ihrer `my_car`-Daten ändern, wie unten gezeigt). In diesem Fall müssen Sie die Sitzung ausdrücklich als modifiziert kennzeichnen.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten so ändern, dass die Website die Datenbank bei jeder Anfrage aktualisiert/das Cookie sendet, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` in Ihre Projekteinstellungen (**django-locallibrary-tutorial/locallibrary/settings.py**) hinzufügen.

## Einfaches Beispiel — Abrufen von Besuchszählern

Als einfaches Praxisbeispiel werden wir unsere Bibliothek dahingehend aktualisieren, dass sie dem aktuellen Benutzer mitteilt, wie oft er die Startseite der _LocalLibrary_ besucht hat.

Öffnen Sie **/django-locallibrary-tutorial/catalog/views.py** und fügen Sie die Zeilen, die `num_visits` enthalten, in `index()` ein (wie unten gezeigt).

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

Hier holen wir zuerst den Wert des Sitzungs-Schlüssels `'num_visits'` und setzen den Wert auf 0, wenn er zuvor nicht gesetzt wurde. Jedes Mal, wenn eine Anfrage eingeht, erhöhen wir dann den Wert und speichern ihn zurück in der Sitzung (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann in unsere Kontextvariable an die Vorlage übergeben.

> [!NOTE]
> Wir könnten auch testen, ob Cookies überhaupt im Browser unterstützt werden (siehe [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unser UI so gestalten, dass es egal ist, ob Cookies unterstützt werden oder nicht.

Fügen Sie die unten gezeigte Zeile unten im folgenden Block in Ihre Haupt-HTML-Vorlage (**/django-locallibrary-tutorial/catalog/templates/index.html**) am Ende des Abschnitts "Dynamischer Inhalt" ein, um die Kontextvariable `num_visits` anzuzeigen.

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

Sie wissen nun, wie einfach es ist, Sitzungen zu verwenden, um Ihre Interaktion mit _anonymen_ Benutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Authentifizierungs- und Berechtigungs-Framework erklären und Ihnen zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
