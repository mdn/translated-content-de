---
title: "Django-Tutorial Teil 7: Sitzungs-Framework"
slug: Learn/Server-side/Django/Sessions
l10n:
  sourceCommit: d888ef98fd829a136bf210cf5f14857b308417d5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django")}}

Dieses Tutorial erweitert unsere [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website, indem es einen auf Sitzungen basierenden Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, aber es zeigt, wie Sie das Sitzungs-Framework nutzen können, um auf Ihren eigenen Websites ein persistentes Verhalten für anonyme Benutzer bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vollständiger Abschluss aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Generic_views">Django-Tutorial Teil 6: Generische Listen- und Detailansichten</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Sitzungen verwendet werden.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Website, die wir in den vorherigen Tutorials erstellt haben, erlaubt Benutzern, Bücher und Autoren im Katalog zu durchsuchen. Obwohl der Inhalt dynamisch aus der Datenbank generiert wird, werden alle Benutzer im Wesentlichen Zugang zu den gleichen Seiten und Informationsarten haben, wenn sie die Seite nutzen.

In einer "realen" Bibliothek möchten Sie möglicherweise einzelnen Benutzern eine angepasste Erfahrung bieten, basierend auf ihrer bisherigen Nutzung der Website, ihren Vorlieben usw. Zum Beispiel könnten Sie Warnmeldungen ausblenden, die der Benutzer zuvor zur Kenntnis genommen hat, oder ihre Präferenzen speichern und berücksichtigen (z. B. die Anzahl der Suchergebnisse, die sie auf jeder Seite angezeigt haben möchten).

Das Sitzungs-Framework ermöglicht es Ihnen, dieses Verhalten zu implementieren, indem Sie die Speicherung und das Abrufen beliebiger Daten auf Basis einzelner Website-Besucher ermöglichen.

## Was sind Sitzungen?

Alle Kommunikation zwischen Webbrowsern und Servern erfolgt über {{Glossary("HTTP")}}, das _zustandslos_ ist. Die Tatsache, dass das Protokoll zustandslos ist, bedeutet, dass Nachrichten zwischen dem Client und dem Server komplett unabhängig voneinander sind — es gibt keinen Begriff von "Abfolge" oder Verhalten auf der Grundlage vorheriger Nachrichten. Daher müssen Sie, wenn Sie eine Site haben möchten, die die laufenden Beziehungen mit einem Client verfolgt, dies selbst implementieren.

Sitzungen sind der Mechanismus, den Django (und der größte Teil des Internets) verwendet, um den "Zustand" zwischen der Site und einem bestimmten Browser nachzuverfolgen. Sitzungen erlauben es Ihnen, pro Browser beliebige Daten zu speichern und diese Daten der Site zur Verfügung zu haben, wann immer der Browser eine Verbindung herstellt. Einzelne mit der Sitzung assoziierte Daten werden dann durch einen "Schlüssel" referenziert, der sowohl zum Speichern als auch zum Abrufen der Daten verwendet wird.

Django verwendet ein Cookie mit einer speziellen _Sitzungs-ID_, um jeden Browser und seine zugehörige Sitzung mit der Site zu identifizieren. Die eigentlichen Sitzungsdaten werden standardmäßig in der Website-Datenbank gespeichert (dies ist sicherer als die Speicherung der Daten in einem Cookie, wo sie anfälliger für bösartige Benutzer sind). Sie können Django so konfigurieren, dass die Sitzungsdaten an anderen Orten gespeichert werden (Cache, Dateien, "sichere" Cookies), aber der Standardort ist eine gute und relativ sichere Option.

## Sitzungen aktivieren

Sitzungen wurden automatisch aktiviert, als wir die [Skelett-Website erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (im Tutorial 2).

Die Konfiguration wird in den Abschnitten `INSTALLED_APPS` und `MIDDLEWARE` der Projektdatei (**django-locallibrary-tutorial/locallibrary/settings.py**) eingerichtet, wie unten gezeigt:

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

Sie können innerhalb einer Ansicht über den `request`-Parameter (ein `HttpRequest`, der als erstes Argument an die Ansicht übergeben wird) auf das `session`-Attribut zugreifen. Dieses Sitzungsattribut repräsentiert die spezifische Verbindung zum aktuellen Benutzer (oder genauer gesagt, die Verbindung zum aktuellen _Browser_, identifiziert durch die Sitzungs-ID im Cookie des Browsers für diese Site).

Das `session`-Attribut ist ein objektähnliches Wörterbuch, das Sie beliebig oft lesen und schreiben können, indem Sie es nach Belieben ändern. Sie können alle normalen Wörterbuchoperationen durchführen, einschließlich Löschen aller Daten, Testen, ob ein Schlüssel vorhanden ist, Durchlaufen von Daten usw. Meistens werden Sie jedoch einfach die Standard-"Wörterbuch"-API verwenden, um Werte zu erhalten und zu setzen.

Die unten gezeigten Codefragmente zeigen, wie Sie einige Daten mit dem Schlüssel "`my_car`", die der aktuellen Sitzung (Browser) zugeordnet sind, erhalten, setzen und löschen können.

> [!NOTE]
> Eines der großartigen Dinge an Django ist, dass Sie nicht über die Mechanismen nachdenken müssen, die die Sitzung mit Ihrer aktuellen Anfrage in Ihrer Ansicht binden. Wenn wir die untenstehenden Fragmente in unserer Ansicht verwenden würden, wüssten wir, dass die Informationen über `my_car` nur mit dem Browser verknüpft sind, der die aktuelle Anfrage gesendet hat.

```python
# Rufen Sie einen Sitzungswert anhand seines Schlüssels ab (z. B. 'my_car'), und lösen Sie einen KeyError aus, wenn der Schlüssel nicht vorhanden ist
my_car = request.session['my_car']

# Rufen Sie einen Sitzungswert ab und setzen Sie einen Standardwert, falls er nicht vorhanden ist ('mini')
my_car = request.session.get('my_car', 'mini')

# Setzen Sie einen Sitzungswert
request.session['my_car'] = 'mini'

# Löschen Sie einen Sitzungswert
del request.session['my_car']
```

Die API bietet auch eine Reihe anderer Methoden, die hauptsächlich zum Verwalten des zugehörigen Sitzungs-Cookies verwendet werden. Zum Beispiel gibt es Methoden, um zu testen, ob Cookies im Client-Browser unterstützt werden, um Ablaufdaten für Cookies festzulegen und zu überprüfen und um abgelaufene Sitzungen aus dem Datenspeicher zu löschen. Sie können sich über die vollständige API unter [Wie man Sitzungen verwendet](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation) informieren.

## Sitzungsdaten speichern

Django speichert standardmäßig nur in der Sitzungsdatenbank und sendet das Sitzungs-Cookie nur dann an den Client, wenn die Sitzung _geändert_ (zugewiesen) oder _gelöscht_ wurde. Wenn Sie einige Daten mit dem Sitzungs-Schlüssel aktualisieren, wie im vorherigen Abschnitt gezeigt, müssen Sie sich darüber keine Gedanken machen! Zum Beispiel:

```python
# Dies wird als Update der Sitzung erkannt, daher werden Sitzungsdaten gespeichert.
request.session['my_car'] = 'mini'
```

Wenn Sie einige Informationen _innerhalb_ der Sitzungsdaten aktualisieren, dann erkennt Django nicht, dass Sie eine Änderung an der Sitzung vorgenommen haben und die Daten speichern (zum Beispiel, wenn Sie die "`wheels`"-Daten innerhalb Ihrer "`my_car`"-Daten ändern würden, wie unten gezeigt). In diesem Fall müssen Sie die Sitzung explizit als geändert markieren.

```python
# Sitzungsobjekt nicht direkt modifiziert, nur Daten innerhalb der Sitzung. Sitzungsänderungen werden nicht gespeichert!
request.session['my_car']['wheels'] = 'alloy'

# Setzen Sie die Sitzung als geändert, um Datenaktualisierungen/Cookie zum Speichern zu erzwingen.
request.session.modified = True
```

> [!NOTE]
> Sie können das Verhalten ändern, sodass die Site die Datenbank bei jeder Anfrage aktualisiert/das Cookie sendet, indem Sie `SESSION_SAVE_EVERY_REQUEST = True` in Ihre Projekteinstellungen (**django-locallibrary-tutorial/locallibrary/settings.py**) einfügen.

## Einfaches Beispiel — Besuchszähler erhalten

Als einfaches Praxisbeispiel werden wir unsere Bibliothek aktualisieren, um dem aktuellen Benutzer mitzuteilen, wie oft er die Startseite der _LocalLibrary_ besucht hat.

Öffnen Sie **/django-locallibrary-tutorial/catalog/views.py** und fügen Sie die Zeilen, die `num_visits` enthalten, in `index()` ein (wie unten gezeigt).

```python
def index(request):
    # …

    num_authors = Author.objects.count()  # Das 'all()' ist standardmäßig impliziert.

    # Anzahl der Besuche dieser Ansicht, wie in der Sitzungsvariablen gezählt.
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

    # Rendern Sie das HTML-Template index.html mit den Daten in der Kontextvariablen.
    return render(request, 'index.html', context=context)
```

Hier holen wir zuerst den Wert des Sitzungsschlüssels `'num_visits'`, wobei wir den Wert auf 0 setzen, wenn er zuvor nicht gesetzt wurde. Jedes Mal, wenn eine Anfrage empfangen wird, erhöhen wir dann den Wert und speichern ihn zurück in der Sitzung (für das nächste Mal, wenn der Benutzer die Seite besucht). Die Variable `num_visits` wird dann in unserem Kontextvariablen an das Template übergeben.

> [!NOTE]
> Wir könnten auch hier testen, ob Cookies überhaupt im Browser unterstützt werden (siehe [Wie man Sitzungen verwendet](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) für Beispiele) oder unser UI so gestalten, dass es egal ist, ob Cookies unterstützt werden oder nicht.

Fügen Sie die unten gezeigte Zeile am Ende Ihres Haupt-HTML-Templates (**/django-locallibrary-tutorial/catalog/templates/index.html**) am Ende des Abschnitts "Dynamischer Inhalt" hinzu, um die `num_visits`-Kontextvariable anzuzeigen.

```django
<h2>Dynamischer Inhalt</h2>

<p>Die Bibliothek hat die folgenden Datensatzanzahlen:</p>
<ul>
  <li><strong>Bücher:</strong> \{{ num_books }}</li>
  <li><strong>Exemplare:</strong> \{{ num_instances }}</li>
  <li><strong>Verfügbare Exemplare:</strong> \{{ num_instances_available }}</li>
  <li><strong>Autoren:</strong> \{{ num_authors }}</li>
</ul>

<p>
  Sie haben diese Seite \{{ num_visits }} Mal besucht\{{ num_visits|pluralize }}.
</p>
```

Beachten Sie, dass wir den eingebauten Django-Template-Tag [pluralize](https://docs.djangoproject.com/en/5.0/ref/templates/builtins/#pluralize) verwenden, um ein "s" hinzuzufügen, wenn die Seite mehrfach besucht wurde.

Speichern Sie Ihre Änderungen und starten Sie den Testserver neu. Jedes Mal, wenn Sie die Seite aktualisieren, sollte sich die Zahl erhöhen.

## Zusammenfassung

Sie wissen jetzt, wie einfach es ist, Sitzungen zu nutzen, um Ihre Interaktion mit _anonymen_ Benutzern zu verbessern.

In unseren nächsten Artikeln werden wir das Authentifizierungs- und Autorisierungs- (Berechtigungs-) Framework erklären und Ihnen zeigen, wie Sie Benutzerkonten unterstützen können.

## Siehe auch

- [Wie man Sitzungen verwendet](https://docs.djangoproject.com/en/5.0/topics/http/sessions/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Generic_views", "Learn/Server-side/Django/Authentication", "Learn/Server-side/Django")}}
