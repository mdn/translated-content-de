---
title: "Django-Tutorial Teil 7: Session-Framework"
short-title: "7: Session-Framework"
slug: Learn_web_development/Extensions/Server-side/Django/Sessions
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website um einen sitzungsbasierten Besuchszähler auf der Startseite.
Das ist ein relativ einfaches Beispiel, zeigt aber, wie Sie mit dem Session-Framework dauerhaftes Verhalten für anonyme Benutzer auf Ihren eigenen Websites bereitstellen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Tutorial-Teile, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views">Django-Tutorial Teil 6: Generische Listen- und Detailansichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Sessions verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, die wir in den vorherigen Tutorials erstellt haben, ermöglicht es Benutzern, Bücher und Autoren im Katalog anzusehen. Obwohl die Inhalte dynamisch aus der Datenbank generiert werden, haben alle Benutzer bei der Nutzung der Website im Wesentlichen Zugriff auf dieselben Seiten und Informationen.

In einer „echten“ Bibliothek möchten Sie einzelnen Benutzern möglicherweise ein personalisiertes Erlebnis bieten, das auf ihrer bisherigen Nutzung der Website, ihren Präferenzen und Ähnlichem beruht.
Beispielsweise könnten Sie Warnmeldungen, die ein Benutzer bereits bestätigt hat, bei seinem nächsten Besuch ausblenden oder seine Präferenzen speichern und berücksichtigen – etwa die Anzahl der Suchergebnisse, die pro Seite angezeigt werden sollen.

Mit dem Session-Framework können Sie dieses Verhalten umsetzen: Sie können beliebige Daten für einzelne Website-Besucher speichern und wieder abrufen.

## Was sind Sessions?

Die gesamte Kommunikation zwischen Webbrowsern und Servern erfolgt über {{Glossary("HTTP", "HTTP")}}, ein _zustandsloses_ Protokoll. Das bedeutet, dass Nachrichten zwischen Client und Server vollständig unabhängig voneinander sind – es gibt kein Konzept einer „Abfolge“ oder eines Verhaltens, das auf vorherigen Nachrichten beruht. Wenn Ihre Website eine fortlaufende Beziehung zu einem Client nachverfolgen soll, müssen Sie dies daher selbst implementieren.

Sessions sind der Mechanismus, mit dem Django (und ein Großteil des Internets) den „Zustand“ zwischen einer Website und einem bestimmten Browser nachverfolgt. Sie ermöglichen es, beliebige Daten pro Browser zu speichern und sie der Website bei jeder Verbindung des Browsers zur Verfügung zu stellen. Auf einzelne Datenelemente einer Session wird über einen „Schlüssel“ zugegriffen, der sowohl zum Speichern als auch zum Abrufen der Daten dient.

Django verwendet ein Cookie mit einer speziellen _Session-ID_, um jeden Browser und die zugehörige Session auf der Website zu identifizieren. Die eigentlichen _Session-Daten_ werden standardmäßig in der Datenbank der Website gespeichert. Das ist sicherer, als die Daten in einem Cookie zu speichern, wo sie anfälliger für Manipulationen durch böswillige Benutzer wären. Sie können Django so konfigurieren, dass es Session-Daten an anderen Orten speichert (im Cache, in Dateien oder in „sicheren“ Cookies). Der Standardspeicherort ist jedoch eine gute und relativ sichere Wahl.

## Sessions aktivieren

Sessions wurden automatisch aktiviert, als wir die [Grundstruktur der Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (in Tutorial 2).

Die Konfiguration befindet sich in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**/locallibrary/settings.py**), wie unten gezeigt:

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

## Sessions verwenden

Innerhalb einer View können Sie über den Parameter `request` auf das Attribut `session` zugreifen. `request` ist ein `HttpRequest`, der als erstes Argument an die View übergeben wird.
Dieses Session-Attribut repräsentiert die Verbindung zum aktuellen Benutzer – genauer gesagt zum aktuellen _Browser_, der durch die Session-ID im Cookie des Browsers für diese Website identifiziert wird.

Das Attribut `session` ist ein wörterbuchähnliches Objekt, das Sie innerhalb Ihrer View beliebig oft lesen und beschreiben können. Sie können alle üblichen Wörterbuchoperationen ausführen, beispielsweise sämtliche Daten löschen, prüfen, ob ein Schlüssel vorhanden ist, oder die Daten durchlaufen. Meistens verwenden Sie jedoch einfach die übliche Wörterbuch-API, um Werte abzurufen und zu setzen.

Die folgenden Codeausschnitte zeigen, wie Sie Daten mit dem Schlüssel `my_car` abrufen, setzen und löschen, die der aktuellen Session (dem Browser) zugeordnet sind.

> [!NOTE]
> Ein großer Vorteil von Django ist, dass Sie sich in Ihrer View nicht um die Mechanismen kümmern müssen, die die Session mit der aktuellen Anfrage verknüpfen. Wenn wir die folgenden Codeausschnitte in unserer View verwenden würden, könnten wir sicher sein, dass die Informationen zu `my_car` ausschließlich dem Browser zugeordnet sind, der die aktuelle Anfrage gesendet hat.

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

Die API bietet außerdem weitere Methoden, die hauptsächlich zur Verwaltung des zugehörigen Session-Cookies dienen. Dazu gehören beispielsweise Methoden, mit denen Sie prüfen können, ob der Browser des Clients Cookies unterstützt, Ablaufdaten für Cookies festlegen und überprüfen sowie abgelaufene Sessions aus dem Datenspeicher entfernen können. Die vollständige API ist unter [Sessions verwenden](https://docs.djangoproject.com/en/6.1/topics/http/sessions/) (Django-Dokumentation) beschrieben.

## Session-Daten speichern

Standardmäßig speichert Django Änderungen nur dann in der Session-Datenbank und sendet das Session-Cookie an den Client, wenn die Session _geändert_ (durch eine Zuweisung) oder ein Eintrag _gelöscht_ wurde. Wenn Sie Daten wie im vorherigen Abschnitt über ihren Session-Schlüssel aktualisieren, müssen Sie sich darum nicht kümmern. Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie dagegen Informationen _innerhalb_ von Session-Daten aktualisieren, erkennt Django die Änderung an der Session nicht und speichert die Daten nicht. Das wäre beispielsweise der Fall, wenn Sie die `wheels`-Daten innerhalb Ihrer `my_car`-Daten wie unten gezeigt ändern. In diesem Fall müssen Sie die Session ausdrücklich als geändert markieren.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können dieses Verhalten ändern, sodass die Website bei jeder Anfrage die Datenbank aktualisiert und ein Cookie sendet. Fügen Sie dazu `SESSION_SAVE_EVERY_REQUEST = True` zu Ihren Projekteinstellungen (**/locallibrary/settings.py**) hinzu.

## Einfaches Beispiel – Besuche zählen

Als einfaches praxisnahes Beispiel erweitern wir unsere Bibliothek so, dass sie dem aktuellen Benutzer anzeigt, wie oft er die Startseite von _LocalLibrary_ besucht hat.

Öffnen Sie **/catalog/views.py** und fügen Sie die Zeilen mit `num_visits` in `index()` ein (wie unten gezeigt).

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

Zunächst rufen wir den Wert des Session-Schlüssels `'num_visits'` ab. Falls er noch nicht gesetzt wurde, verwenden wir den Wert 0. Bei jeder Anfrage erhöhen wir anschließend den Wert und speichern ihn wieder in der Session, damit er beim nächsten Seitenbesuch verfügbar ist. Die Variable `num_visits` wird dann über unsere Kontextvariable an das Template übergeben.

> [!NOTE]
> Wir könnten hier auch prüfen, ob der Browser überhaupt Cookies unterstützt (Beispiele finden Sie unter [Sessions verwenden](https://docs.djangoproject.com/en/6.1/topics/http/sessions/)). Alternativ könnten wir die Benutzeroberfläche so gestalten, dass es keine Rolle spielt, ob Cookies unterstützt werden.

Fügen Sie die am Ende des folgenden Blocks gezeigte Zeile in Ihr HTML-Haupttemplate (**/catalog/templates/index.html**) ein, und zwar am Ende des Abschnitts „Dynamischer Inhalt“. Dadurch wird die Kontextvariable `num_visits` angezeigt.

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

Beachten Sie, dass wir das integrierte Django-Template-Tag [pluralize](https://docs.djangoproject.com/en/6.1/ref/templates/builtins/#pluralize) verwenden, um ein „s“ anzuhängen, wenn die Seite mehrfach besucht wurde.

Speichern Sie Ihre Änderungen und aktualisieren Sie die Startseite. Die Zahl sollte bei jedem Besuch steigen.

## Zusammenfassung

Sie wissen jetzt, wie einfach Sie mit Sessions die Interaktion mit _anonymen_ Benutzern verbessern können.

In den nächsten Artikeln erklären wir das Framework für Authentifizierung und Autorisierung (Berechtigungen) und zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [Sessions verwenden](https://docs.djangoproject.com/en/6.1/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}
