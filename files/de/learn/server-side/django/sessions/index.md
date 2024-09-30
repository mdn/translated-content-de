---
title: "Django-Tutorial Teil 7: Sessions-Framework"
slug: Learn/Server-side/Django/Sessions
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unser [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Webseite, indem es der Startseite einen besucherbasierten Sitzungszähler hinzufügt. Dies ist ein relativ einfaches Beispiel, aber es zeigt, wie Sie das Sessions-Framework nutzen können, um auf Ihren eigenen Seiten für anonyme Nutzer ein fortwährendes Verhalten zu implementieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Generic_views">Django-Tutorial Teil 6: Generische Listen- und Detailansichten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis der Nutzung von Sessions.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Webseite, die wir in den vorherigen Tutorials erstellt haben, ermöglicht es den Nutzern, Bücher und Autoren im Katalog zu durchstöbern. Obwohl der Inhalt dynamisch aus der Datenbank generiert wird, haben im Wesentlichen alle Nutzer Zugriff auf die gleichen Seiten und Arten von Informationen, wenn sie die Seite nutzen.

In einer "echten" Bibliothek möchten Sie möglicherweise einzelnen Nutzern eine individualisierte Erfahrung bieten, basierend auf ihrer vorherigen Nutzung der Seite, ihren Vorlieben usw. Zum Beispiel könnten Sie Warnmeldungen ausblenden, die der Nutzer zuvor anerkannt hat, wenn er das nächste Mal die Seite besucht, oder seine Einstellungen speichern und respektieren (wie z.B. die Anzahl der Suchergebnisse, die auf jeder Seite angezeigt werden sollen).

Das Sessions-Framework ermöglicht es Ihnen, dieses Verhalten zu implementieren, indem es Ihnen erlaubt, beliebige Daten pro Seitenbesucher zu speichern und abzurufen.

## Was sind Sessions?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über [HTTP](/de/docs/Glossary/HTTP), das _zustandslos_ ist. Da das Protokoll zustandslos ist, sind Nachrichten zwischen Client und Server völlig unabhängig voneinander — es gibt keinen Begriff von "Sequenz" oder Verhalten basierend auf vorherigen Nachrichten. Wenn Sie also eine Seite haben möchten, die die fortlaufende Beziehung zu einem Client verfolgt, müssen Sie dies selbst implementieren.

Sessions sind der Mechanismus, den Django (und der Großteil des Internets) verwendet, um den "Zustand" zwischen der Seite und einem bestimmten Browser zu verfolgen. Sessions ermöglichen es, beliebige Daten pro Browser zu speichern und diese Daten der Seite zur Verfügung zu stellen, wann immer der Browser eine Verbindung herstellt. Einzelne Datenpunkte, die mit der Session verbunden sind, werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch zum Abrufen der Daten verwendet wird.

Django verwendet ein Cookie, das eine spezielle _Session-ID_ enthält, um jeden Browser und seine zugehörige Session mit der Seite zu identifizieren. Die tatsächlichen Session-_daten_ werden standardmäßig in der Seitendatenbank gespeichert (dies ist sicherer, als die Daten in einem Cookie zu speichern, wo sie anfälliger für böswillige Benutzer sind). Sie können Django so konfigurieren, dass die Session-Daten an anderen Stellen gespeichert werden (Cache, Dateien, "sichere" Cookies), aber der Standardort ist eine gute und relativ sichere Option.

## Aktivieren von Sessions

Sessions wurden automatisch aktiviert, als wir [die Skelett-Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (im Tutorial 2).

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

## Verwendung von Sessions

Sie können innerhalb einer Ansicht über den `request`-Parameter (ein `HttpRequest`, das als erstes Argument an die Ansicht übergeben wird) auf das `session`-Attribut zugreifen. Dieses Session-Attribut repräsentiert die spezifische Verbindung zum aktuellen Benutzer (oder genauer gesagt, die Verbindung zum aktuellen _Browser_, wie sie durch die Session-ID im Cookie des Browsers für diese Seite identifiziert wird).

Das `session`-Attribut ist ein dictionary-artiges Objekt, das Sie in Ihrer Ansicht so oft lesen und schreiben können, wie Sie möchten, und es nach Belieben ändern können. Sie können alle normalen Dictionary-Operationen durchführen, einschließlich des Löschens aller Daten, des Testens, ob ein Schlüssel vorhanden ist, des Durchlaufens der Daten usw. Meistens verwenden Sie jedoch einfach die Standard-"Dictionary"-API, um Werte zu erhalten und zu setzen.

Die folgenden Codeausschnitte zeigen, wie Sie einige Daten mit dem Schlüssel `my_car` abrufen, setzen und löschen können, die mit der aktuellen Session (Browser) verbunden sind.

> [!NOTE]
> Einer der großen Vorteile von Django ist, dass Sie nicht über die Mechanismen nachdenken müssen, die die Session mit Ihrer aktuellen Anfrage in Ihrer Ansicht verknüpfen. Wenn wir die untenstehenden Fragmente in unserer Ansicht verwenden würden, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verknüpft sind, der die aktuelle Anfrage gesendet hat.

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

Die API bietet auch eine Reihe anderer Methoden, die hauptsächlich zum Verwalten des zugehörigen Session-Cookies verwendet werden. Zum Beispiel gibt es Methoden, um zu testen, ob Cookies im Client-Browser unterstützt werden, um Cookie-Ablaufdaten zu setzen und zu überprüfen und um abgelaufene Sessions aus dem Datenspeicher zu löschen. Sie können sich über die vollständige API in der [Anleitung zur Verwendung von Sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation) informieren.

## Speichern von Session-Daten

Standardmäßig speichert Django in der Session-Datenbank und sendet das Session-Cookie an den Client nur dann, wenn die Session _verändert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mit ihrem Session-Schlüssel aktualisieren, wie im vorherigen Abschnitt gezeigt, brauchen Sie sich darüber keine Sorgen zu machen! Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ von Session-Daten aktualisieren, wird Django nicht erkennen, dass Sie eine Änderung an der Session vorgenommen haben und die Daten speichern (zum Beispiel, wenn Sie `wheels`-Daten innerhalb Ihrer `my_car`-Daten ändern, wie unten gezeigt). In diesem Fall müssen Sie die Session explizit als verändert kennzeichnen.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten ändern, damit die Seite die Datenbank aktualisiert/das Cookie bei jeder Anfrage sendet, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` in Ihre Projekteinstellungen (**django-locallibrary-tutorial/locallibrary/settings.py**) hinzufügen.

## Einfaches Beispiel — Besuchszählungen abrufen

Als ein einfaches Beispiel aus der realen Welt aktualisieren wir unsere Bibliothek so, dass sie dem aktuellen Nutzer angibt, wie oft er die Startseite der _LocalLibrary_ besucht hat.

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

Hier erhalten wir zuerst den Wert des `'num_visits'`-Session-Schlüssels und setzen den Wert auf 0, wenn er zuvor nicht festgelegt wurde. Jedes Mal, wenn eine Anfrage empfangen wird, inkrementieren wir dann den Wert und speichern ihn zurück in der Session (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann in unsere Kontextvariable an das Template übergeben.

> [!NOTE]
> Wir könnten hier auch testen, ob Cookies im Browser überhaupt unterstützt werden (siehe [Anleitung zur Verwendung von Sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unsere Benutzeroberfläche so gestalten, dass es egal ist, ob Cookies unterstützt werden oder nicht.

Fügen Sie die unterhalb des folgenden Blocks gezeigte Zeile in Ihr Haupt-HTML-Template (**/django-locallibrary-tutorial/catalog/templates/index.html**) am Ende des Abschnitts "Dynamischer Inhalt" ein, um die `num_visits`-Kontextvariable anzuzeigen.

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

Beachten Sie, dass wir das in Django eingebaute Template-Tag [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) verwenden, um ein "s" hinzuzufügen, wenn die Seite mehrmals besucht wurde.

Speichern Sie Ihre Änderungen und starten Sie den Testserver neu. Jedes Mal, wenn Sie die Seite aktualisieren, sollte sich die Zahl ändern.

## Zusammenfassung

Sie wissen nun, wie einfach es ist, mit Sessions die Interaktion mit _anonymen_ Nutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Framework für Authentifizierung und Autorisierung (Berechtigungen) erklären und Ihnen zeigen, wie Sie Benutzerkonten unterstützen.

## Siehe auch

- [Anleitung zur Verwendung von Sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
