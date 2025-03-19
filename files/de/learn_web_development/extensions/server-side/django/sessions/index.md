---
title: "Django Tutorial Teil 7: Sitzungs-Framework"
short-title: "7: Sitzungs-Framework"
slug: Learn_web_development/Extensions/Server-side/Django/Sessions
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, indem es einen session-basierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework verwenden können, um für anonyme Nutzer auf Ihren eigenen Websites persistentes Verhalten bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Themen des Tutorials ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views">Django Tutorial Teil 6: Generische Listen- und Detailansichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis, wie Sitzungen verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, die wir in den vorherigen Tutorials erstellt haben, erlaubt es den Nutzern, Bücher und Autoren im Katalog zu durchsuchen. Während die Inhalte dynamisch aus der Datenbank generiert werden, haben alle Nutzer im Wesentlichen Zugang zu den gleichen Seiten und Arten von Informationen, wenn sie die Website nutzen.

In einer "echten" Bibliothek möchten Sie möglicherweise einzelnen Nutzern eine personalisierte Erfahrung bieten, basierend auf deren vorheriger Nutzung der Website, Vorlieben usw. Beispielsweise könnten Sie Warnmeldungen ausblenden, die der Nutzer zuvor zur Kenntnis genommen hat, wenn er die Website das nächste Mal besucht, oder deren Präferenzen speichern und berücksichtigen (wie beispielsweise die Anzahl der Suchergebnisse, die auf jeder Seite angezeigt werden sollen).

Das Sitzungs-Framework ermöglicht es Ihnen, solches Verhalten zu implementieren, sodass Sie Daten pro Website-Besucher speichern und abrufen können.

## Was sind Sitzungen?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über {{Glossary("HTTP", "HTTP")}}, welches _zustandslos_ ist. Die Tatsache, dass das Protokoll zustandslos ist, bedeutet, dass Nachrichten zwischen dem Client und dem Server völlig unabhängig voneinander sind — es gibt kein Konzept von "Sequenz" oder Verhalten basierend auf vorherigen Nachrichten. Daher müssen Sie, wenn Sie eine Website betreiben möchten, die die laufende Beziehung zu einem Client verfolgt, dies selbst implementieren.

Sitzungen sind der Mechanismus, den Django (und der größte Teil des Internets) verwendet, um den "Zustand" zwischen der Website und einem bestimmten Browser zu verfolgen. Sitzungen erlauben es Ihnen, beliebige Daten pro Browser zu speichern und diese Daten der Website immer dann zur Verfügung zu stellen, wenn der Browser eine Verbindung herstellt. Einzelne Datenschlüssel, die mit der Sitzung verbunden sind, werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch zum Abrufen der Daten verwendet wird.

Django verwendet ein Cookie, das eine spezielle _Sitzungs-ID_ enthält, um jeden Browser und seine zugehörige Sitzung mit der Website zu identifizieren. Die eigentlichen Sitzungs*daten* werden standardmäßig in der Datenbank der Website gespeichert (dies ist sicherer, als die Daten in einem Cookie zu speichern, wo sie für bösartige Nutzer anfälliger sind). Sie können Django so konfigurieren, dass die Sitzungsdaten an anderen Orten gespeichert werden (Cache, Dateien, "sichere" Cookies), aber der Standardstandort ist eine gute und relativ sichere Option.

## Sitzungen aktivieren

Sitzungen wurden automatisch aktiviert, als wir die [Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (im Tutorial 2).

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

Sie können im Rahmen einer Ansicht über den Parameter `request` (ein `HttpRequest`, das als erstes Argument an die Ansicht übergeben wird) auf das `session`-Attribut zugreifen. Dieses Sitzungsattribut stellt die spezifische Verbindung zum aktuellen Benutzer dar (oder genauer gesagt, die Verbindung zum aktuellen _Browser_, wie durch die Sitzungs-ID im Cookie des Browsers für diese Seite identifiziert).

Das `session`-Attribut ist ein einem Wörterbuch ähnliches Objekt, das Sie beliebig oft in Ihrer Ansicht lesen und schreiben können und es nach Belieben ändern können. Sie können alle normalen Wörterbuchoperationen durchführen, einschließlich aller Daten löschen, testen, ob ein Schlüssel vorhanden ist, Durchlaufen von Daten usw. In den meisten Fällen verwenden Sie jedoch einfach die Standard-"Wörterbuch"-API, um Werte zu erhalten und zu setzen.

Die untenstehenden Codefragmente zeigen, wie Sie einige Daten mit dem Schlüssel `my_car`, die mit der aktuellen Sitzung (Browser) verknüpft sind, abrufen, setzen und löschen können.

> [!NOTE]
> Eines der großartigen Dinge an Django ist, dass Sie nicht über die Mechanismen nachdenken müssen, die die Sitzung mit Ihrer aktuellen Anfrage in Ihrer Ansicht verbinden. Wenn wir die unten gezeigten Fragmente in unserer Ansicht verwendeten, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verknüpft sind, der die aktuelle Anfrage gesendet hat.

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

Die API bietet auch eine Reihe anderer Methoden, die hauptsächlich zum Verwalten des zugehörigen Sitzungs-Cookies verwendet werden. Zum Beispiel gibt es Methoden, um zu testen, ob Cookies im Client-Browser unterstützt werden, um Cookie-Ablaufdaten festzulegen und zu überprüfen, sowie um abgelaufene Sitzungen aus dem Datenspeicher zu löschen. Sie können die vollständige API unter [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation) finden.

## Speichern von Sitzungsdaten

Standardmäßig speichert Django nur in der Sitzungsdatenbank und sendet das Sitzungs-Cookie an den Client, wenn die Sitzung _modifiziert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mithilfe ihres Sitzungs-Schlüssels aktualisieren, wie im vorherigen Abschnitt gezeigt, müssen Sie sich darüber keine Gedanken machen! Zum Beispiel:

```python
# This is detected as an update to the session, so session data is saved.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ der Sitzungsdaten aktualisieren, erkennt Django nicht, dass Sie eine Änderung an der Sitzung vorgenommen haben, und speichert die Daten nicht (zum Beispiel, wenn Sie die `wheels`-Daten in Ihren `my_car`-Daten ändern, wie unten gezeigt). In diesem Fall müssen Sie die Sitzung explizit als geändert kennzeichnen.

```python
# Session object not directly modified, only data within the session. Session changes not saved!
request.session['my_car']['wheels'] = 'alloy'

# Set session as modified to force data updates/cookie to be saved.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten ändern, sodass die Website die Datenbank/das Cookie bei jeder Anfrage aktualisiert, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` zu Ihren Projekteinstellungen (**django-locallibrary-tutorial/locallibrary/settings.py**) hinzufügen.

## Einfaches Beispiel — Abrufen von Besuchszahlen

Als einfaches Beispiel aus der Praxis werden wir unsere Bibliothek aktualisieren, um dem aktuellen Benutzer mitzuteilen, wie oft er die Startseite der _LocalLibrary_ besucht hat.

Öffnen Sie **/django-locallibrary-tutorial/catalog/views.py** und fügen Sie die Zeilen hinzu, die `num_visits` in `index()` enthalten (wie unten gezeigt).

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

Hier rufen wir zuerst den Wert des `'num_visits'`-Sitzungsschlüssels ab und setzen den Wert auf 0, wenn er zuvor nicht festgelegt wurde. Jedes Mal, wenn eine Anfrage eingeht, erhöhen wir den Wert und speichern ihn zurück in der Sitzung (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann an das Template in unserer Kontextvariablen übergeben.

> [!NOTE]
> Wir könnten auch testen, ob Cookies im Browser überhaupt unterstützt werden (siehe [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unser UI so gestalten, dass es egal ist, ob Cookies unterstützt werden oder nicht.

Fügen Sie die unten gezeigte Zeile am Ende des folgenden Blocks zu Ihrer Haupt-HTML-Vorlage (**/django-locallibrary-tutorial/catalog/templates/index.html**) am Ende des Bereichs "Dynamische Inhalte" hinzu, um die `num_visits` Kontextvariable anzuzeigen.

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

Beachten Sie, dass wir das eingebaute Template-Tag [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) von Django verwenden, um ein "s" hinzuzufügen, wenn die Seite mehrfach besucht wurde.

Speichern Sie Ihre Änderungen und starten Sie den Testserver neu. Jedes Mal, wenn Sie die Seite aktualisieren, sollte sich die Zahl aktualisieren.

## Zusammenfassung

Sie wissen jetzt, wie einfach es ist, Sitzungen zu nutzen, um Ihre Interaktion mit _anonymen_ Nutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Authentifizierungs- und Berechtigungs-Framework erläutern und Ihnen zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [Anleitung zur Verwendung von Sitzungen](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Generic_views", "Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django")}}
