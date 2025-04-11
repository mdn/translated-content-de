---
title: "Django Tutorial Teil 7: Sitzungsframework"
short-title: "7: Sitzungsframework"
slug: Learn_web_development/Extensions/Server-side/Django/Sessions
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem es einen sitzungsbasierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, aber es zeigt, wie Sie das Sitzungsframework verwenden können, um für anonyme Benutzer auf Ihren eigenen Websites ein dauerhaftes Verhalten zu schaffen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views">Django Tutorial Teil 6: Generische Listen- und Detailansichten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu verstehen, wie Sitzungen verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, die wir in den vorherigen Tutorials erstellt haben, ermöglicht es Benutzern, Bücher und Autoren im Katalog zu durchsuchen. Obwohl der Inhalt dynamisch aus der Datenbank generiert wird, haben alle Benutzer im Wesentlichen Zugriff auf dieselben Seiten und Arten von Informationen, wenn sie die Website nutzen.

In einer "echten" Bibliothek möchten Sie möglicherweise einzelnen Benutzern ein personalisiertes Erlebnis bieten, basierend auf ihrer vorherigen Nutzung der Website, ihren Präferenzen usw. Zum Beispiel könnten Sie Warnmeldungen, die der Benutzer zuvor zur Kenntnis genommen hat, das nächste Mal ausblenden, wenn er die Website besucht, oder seine Präferenzen speichern und berücksichtigen (wie die Anzahl der Suchergebnisse, die auf jeder Seite angezeigt werden sollen).

Das Sitzungsframework ermöglicht es Ihnen, ein solches Verhalten zu implementieren, indem Sie beliebige Daten auf einer pro-Site-Besucher-Basis speichern und abrufen können.

## Was sind Sitzungen?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über {{Glossary("HTTP", "HTTP")}}, das _zustandslos_ ist. Die Tatsache, dass das Protokoll zustandslos ist, bedeutet, dass Nachrichten zwischen dem Client und dem Server völlig unabhängig voneinander sind — es gibt keinen Begriff von "Sequenz" oder Verhalten basierend auf vorherigen Nachrichten. Wenn Sie also eine Website haben möchten, die laufende Beziehungen mit einem Client verfolgt, müssen Sie dies selbst implementieren.

Sitzungen sind der Mechanismus, den Django (und die meisten Internetdienste) verwenden, um den "Zustand" zwischen der Website und einem bestimmten Browser zu verfolgen. Sitzungen ermöglichen es Ihnen, beliebige Daten pro Browser zu speichern und diese Daten der Website zur Verfügung zu stellen, wann immer der Browser eine Verbindung herstellt. Einzelne Datenpunkte, die mit der Sitzung verknüpft sind, werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch Abrufen der Daten verwendet wird.

Django verwendet ein Cookie, das eine spezielle _Sitzungs-ID_ enthält, um jeden Browser und seine zugehörige Sitzung mit der Website zu identifizieren. Die tatsächlichen Sitzungsdaten werden standardmäßig in der Site-Datenbank gespeichert (dies ist sicherer als das Speichern der Daten in einem Cookie, wo sie anfälliger für böswillige Benutzer sind). Sie können Django so konfigurieren, dass die Sitzungsdaten an anderen Orten gespeichert werden (Cache, Dateien, "sichere" Cookies), aber der Standardspeicherort ist eine gute und relativ sichere Option.

## Sitzungen aktivieren

Sitzungen wurden automatisch aktiviert, als wir die [Gerüst-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2).

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

Sie können im Rahmen einer Ansicht über den `request`-Parameter (ein `HttpRequest`, der als erstes Argument an die Ansicht übergeben wird) auf das `session`-Attribut zugreifen. Dieses Sitzungsattribut repräsentiert die spezifische Verbindung zum aktuellen Benutzer (oder genauer gesagt, die Verbindung zum aktuellen _Browser_, identifiziert durch die Sitzungs-ID im Cookie des Browsers für diese Website).

Das `session`-Attribut ist ein objektähnliches Wörterbuch, auf das Sie so oft, wie Sie möchten, in Ihrer Ansicht lesen und schreiben können und es nach Belieben ändern können. Sie können alle normalen Wörterbuchoperationen ausführen, einschließlich des Löschens aller Daten, des Testens, ob ein Schlüssel vorhanden ist, des Durchlaufens der Daten usw. Meistens verwenden Sie jedoch einfach die Standard-"Wörterbuch"-API, um Werte zu erhalten und zu setzen.

Die unten stehenden Codefragmente zeigen, wie Sie einige Daten mit dem Schlüssel `my_car`, die mit der aktuellen Sitzung (Browser) verbunden sind, erhalten, setzen und löschen können.

> [!NOTE]
> Einer der großen Vorteile von Django ist, dass Sie nicht über die Mechanismen, die die Sitzung mit Ihrer aktuellen Anfrage in Ihrer Ansicht verbinden, nachdenken müssen. Wenn wir die untenstehenden Fragmente in unserer Ansicht verwenden würden, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verbunden sind, der die aktuelle Anfrage gesendet hat.

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

Die API bietet auch eine Reihe anderer Methoden, die hauptsächlich dazu verwendet werden, das zugehörige Sitzungscookie zu verwalten. Beispielsweise gibt es Methoden, um zu testen, ob Cookies im Clientbrowser unterstützt werden, um das Ablaufdatum des Cookies zu setzen und zu überprüfen und um abgelaufene Sitzungen aus dem Datenspeicher zu löschen. Weitere Informationen über die vollständige API finden Sie in [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation).

## Speichern von Sitzungsdaten

Standardmäßig speichert Django nur dann in die Sitzungsdatenbank und sendet das Sitzungs-Cookie an den Client, wenn die Sitzung _geändert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mit ihrem Sitzungs-Schlüssel wie im vorherigen Abschnitt gezeigt aktualisieren, müssen Sie sich darüber keine Sorgen machen! Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ von Sitzungsdaten aktualisieren, wird Django nicht erkennen, dass Sie eine Änderung an der Sitzung vorgenommen haben und die Daten speichern (zum Beispiel, wenn Sie `wheels`-Daten in Ihren `my_car`-Daten ändern würden, wie unten gezeigt). In diesem Fall müssen Sie die Sitzung ausdrücklich als geändert markieren.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten so ändern, dass die Site die Datenbank/das Cookie bei jeder Anfrage aktualisiert, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` in Ihre Projekteinstellungen einfügen (**django-locallibrary-tutorial/locallibrary/settings.py**).

## Einfaches Beispiel — Abruf von Besuchszahlen

Als einfaches Praxisbeispiel aktualisieren wir unsere Bibliothek, um dem aktuellen Benutzer mitzuteilen, wie oft er die Startseite der _LocalLibrary_ besucht hat.

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

Hier holen wir zuerst den Wert des `'num_visits'`-Sitzungsschlüssels, und setzen den Wert auf 0, wenn er zuvor nicht gesetzt wurde. Jedes Mal, wenn eine Anfrage empfangen wird, erhöhen wir dann den Wert und speichern ihn wieder in der Sitzung (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann in unsere Kontextvariable an die Vorlage übergeben.

> [!NOTE]
> Wir könnten hier auch testen, ob Cookies im Browser überhaupt unterstützt werden (siehe [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unser UI so gestalten, dass es egal ist, ob Cookies unterstützt werden oder nicht.

Fügen Sie die unten stehende Zeile am Ende des folgenden Blocks zu Ihrer Haupt-HTML-Vorlage (**/django-locallibrary-tutorial/catalog/templates/index.html**) am Ende des Abschnitts "Dynamische Inhalte" hinzu, um die `num_visits`-Kontextvariable anzuzeigen.

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

Beachten Sie, dass wir das in Django integrierte Template-Tag [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) verwenden, um ein "s" hinzuzufügen, wenn die Seite mehrere Male besucht wurde.

Speichern Sie Ihre Änderungen und starten Sie den Testserver neu. Jedes Mal, wenn Sie die Seite aktualisieren, sollte sich die Anzahl aktualisieren.

## Zusammenfassung

Sie wissen jetzt, wie einfach es ist, Sitzungen zu verwenden, um Ihre Interaktion mit _anonymen_ Benutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Authentifizierungs- und Autorisierungsrahmenwerk erklären und Ihnen zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [How to use sessions](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}
