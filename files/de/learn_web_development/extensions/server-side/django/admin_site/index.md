---
title: "Django Tutorial Teil 4: Django-Admin-Seite"
short-title: "4: Django-Admin-Seite"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir nun Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, verwenden wir die Django-Admin-Seite, um einige "echte" Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir, wie Sie sich einloggen und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Präsentation der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models"
          >Django Tutorial Teil 3: Verwendung von Modellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Vorteile und Einschränkungen der Django-Admin-Seite zu verstehen und diese zu nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django-Admin-_Anwendung_ kann Ihre Modelle nutzen, um automatisch einen Webseiten-Bereich zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen verwenden können. Dies kann Ihnen während der Entwicklung viel Zeit sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch nützlich zur Datenverwaltung in der Produktion sein, je nach Art der Website. Das Django-Projekt empfiehlt sie nur zur internen Datenverwaltung (d.h. nur für die Nutzung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Schnittstelle für alle Benutzer ist und viele unnötige Details zu den Modellen offenbart.

Die gesamte Konfiguration, die erforderlich ist, um die Admin-Anwendung in Ihre Website einzuschließen, wurde automatisch ausgeführt, als Sie [das Skelettprojekt erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (für Informationen zu tatsächlichen erforderlichen Abhängigkeiten, siehe die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie Ihre Modelle nur _registrieren_, um sie der Admin-Anwendung hinzuzufügen. Am Ende dieses Artikels geben wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser anzeigen zu können.

Nachdem wir die Modelle registriert haben, zeigen wir, wie man einen neuen "Superuser" erstellt, sich auf der Website anmeldet und einige Bücher, Autoren, Buchexemplare und Genres erstellt. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Sie sieht derzeit so aus – beachten Sie, dass `django.contrib.admin` bereits importiert wird:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text an das Ende der Datei kopieren. Dieser Code importiert die Modelle und ruft dann `admin.site.register` auf, um jedes von ihnen zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen setzen voraus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches darstellt ([siehe den Modell-Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle bei der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten zur Registrierung Ihrer Modelle sprechen.

## Erstellen eines Superusers

Um sich auf der Admin-Seite anmelden zu können, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiterstatus_. Um Datensätze anzeigen und erstellen zu können, benötigen wir auch, dass dieser Benutzer die Berechtigungen hat, alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Seite und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Führen Sie den folgenden Befehl im gleichen Verzeichnis wie **manage.py** aus, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir den Login testen können:

```bash
python3 manage.py runserver
```

## Einloggen und Nutzung der Seite

Um sich auf der Seite einzuloggen, öffnen Sie die _/admin_-URL (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-Benutzer-ID und Passwort-Credentials ein (Sie werden zur _Login_-Seite weitergeleitet und nach der Eingabe Ihrer Daten zurück zur _/admin_-URL).

Dieser Teil der Seite zeigt alle unsere Modelle an, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um mit der Erstellung eines Datensatzes dieses Typs zu beginnen.

![Admin-Seite - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts neben _Books_, um ein neues Buch zu erstellen (es wird ein Dialogfeld wie das unten angezeigte angezeigt). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) mit den Werten übereinstimmen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+**-Schaltfläche neben den entsprechenden Feldern drücken (oder vorhandene Werte aus den Listen auswählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** wählen, um den Datensatz zu speichern.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie einige Zeit damit verbringen, Ihrer Anwendung ein paar Bücher, Autoren, Sprachen und Genres (z.B. Fantasy) hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den Link **Startseite** im oberen Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den Link **Books**, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten zu sehen). Jetzt, da Sie ein paar Bücher hinzugefügt haben, könnte die Liste ähnlich wie im Screenshot unten aussehen. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, die wir im letzten Artikel angegeben haben.

![Admin-Seite - Liste der Buchobjekte](admin_book_list.png)

Sie können Bücher aus dieser Liste löschen, indem Sie das Kontrollkästchen neben dem Buch, das Sie nicht möchten, auswählen, die _löschen..._-Aktion aus dem _Aktionen_-Dropdown-Menü auswählen und dann die **Go**-Schaltfläche drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Schaltfläche drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, wie unten gezeigt, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung der Schaltflächen **Löschen**, **HISTORIE** und **AUF DER SEITE ANZEIGEN** (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Wenn Sie auf die **AUF DER SEITE ANZEIGEN**-Schaltfläche klicken, wird eine `NoReverseMatch`-Ausnahme ausgelöst, da die `get_absolute_url()`-Methode versucht, ein benanntes URL-Mapping ('book-detail') umzukehren, das noch nicht definiert wurde.
> Wir definieren ein URL-Mapping und die zugehörige Ansicht in [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views).

![Admin-Seite - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (mit dem _Start_-Link in der Brotkrümelspur) und sehen Sie sich dann die **Autor**- und **Genre**-Listen an – Sie sollten bereits einige erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, einige weitere hinzuzufügen.

Was Sie nicht haben werden, sind _Buchexemplare_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Book` aus einem `BookInstance` erstellen können – dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den _Buchexemplar hinzufügen_-Bildschirm unten anzuzeigen. Beachten Sie die große, weltweit eindeutige Id, mit der ein einzelnes Exemplar eines Buches in der Bibliothek getrennt identifiziert werden kann.

![Admin-Seite - Buchexemplar hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, setzen Sie auch ein zukünftiges _Fälligkeitsdatum_.

Das war's! Sie haben jetzt gelernt, wie man die Verwaltungsseite einrichtet und verwendet. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet bereits gute Arbeit bei der Erstellung einer grundlegenden Admin-Seite unter Verwendung der Informationen der registrierten Modelle:

- Jedes Modell hat eine Liste einzelner Datensätze, die durch den String identifiziert werden, der von der `__str__()`-Methode des Modells erzeugt wird, und mit Detailansichten/Formularen zum Bearbeiten verknüpft ist. Standardmäßig hat diese Ansicht ein Aktionsmenü oben, mit dem Sie Massenlöschvorgänge für Datensätze durchführen können.
- Die Detail-Datensatzformulare des Modells zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder des Modells, vertikal in ihrer Deklarationsreihenfolge angeordnet.

Sie können die Schnittstelle weiter anpassen, um sie noch benutzerfreundlicher zu gestalten. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen für jeden Datensatz anzeigen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus) aufgelistet werden.
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und wählen, wo dieses Menü im Formular angezeigt wird.

- Detailansichten

  - Wählen, welche Felder angezeigt (oder ausgeschlossen) werden, zusammen mit ihrer Reihenfolge, Gruppierung, ob sie editierbar sind, das verwendete Widget, Orientierung usw.
  - Verwandte Felder zu einem Datensatz hinzufügen, um inline bearbeitet zu werden (z.B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie deren Autorendatensatz erstellen).

In diesem Abschnitt werden wir einige Änderungen betrachten, die die Schnittstelle für unsere _LocalLibrary_ verbessern, einschließlich des Hinzufügens weiterer Informationen zu den Modelllisten `Book` und `Author` und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation des `Language`- und des `Genre`-Modells nicht ändern, da sie jeweils nur ein Feld haben und es daher keinen wirklichen Nutzen bringt, dies zu tun!

Eine vollständige Referenz aller Anpassungsoptionen für die Admin-Seite finden Sie in [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django Docs).

### Registrierung einer ModelAdmin-Klasse

Um zu ändern, wie ein Modell in der Admin-Schnittstelle angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects)-Klasse (die das Layout beschreibt) und registrieren sie mit dem Modell.

Lassen Sie uns mit dem `Author`-Modell beginnen. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung für das `Author`-Modell aus (versehen Sie sie mit einem # am Anfang):

```python
# admin.site.register(Author)
```

Fügen Sie jetzt eine neue `AuthorAdmin`-Klasse und Registrierung wie unten gezeigt hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Jetzt fügen wir `ModelAdmin`-Klassen für `Book` und `BookInstance` hinzu. Wir müssen erneut die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun erstellen und registrieren wir die neuen Modelle; für die Zwecke dieser Demonstration verwenden wir statt der Syntax `admin.site.register()` den `@register`-Dekorator, um die Modelle zu registrieren (dies bewirkt genau dasselbe):

```python
# Register the Admin classes for Book using the decorator
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass

# Register the Admin classes for BookInstance using the decorator
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    pass
```

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass sich das Admin-Verhalten nicht ändert! Wir können diese nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Derzeit listet die _LocalLibrary_ alle Autoren anhand des durch die `__str__()`-Methode des Modells erzeugten Objektnamens auf. Das ist in Ordnung, wenn Sie nur wenige Autoren haben, aber wenn Sie viele haben, könnten Sie am Ende mit Duplikaten enden. Um sie zu unterscheiden, oder einfach weil Sie interessantere Informationen über jeden Autor zeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der Ansicht zusätzliche Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den unten angegebenen Code. Die Feldnamen, die in der Liste angezeigt werden sollen, werden in einer _Tupel_-Reihenfolge in der erforderlichen Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die im ursprünglichen Modell angegeben sind).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie nun zur Autorenliste auf Ihrer Website. Die oben genannten Felder sollten jetzt angezeigt werden, wie folgt:

![Admin-Seite - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book`-Modell werden wir zusätzlich den `author` und `genre` anzeigen. Der `author` ist ein `ForeignKey`-Feld (eins-zu-viele Beziehung), und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die unten angegebene Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es ein `ManyToManyField` ist (Django verhindert dies, da dies mit erheblichen Datenbankzugriffskosten verbunden wäre). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir werden sie unten definieren).

> [!NOTE]
> Das Abrufen des `genre` ist hier möglicherweise keine gute Idee, aufgrund der "Kosten" des Datenbankzugriffs. Wir zeigen Ihnen, wie das geht, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um einen _Löschung_-Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book`-Modell ein (**models.py**). Dieser erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die im Admin-Bereich für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nach dem Speichern des Modells und des aktualisierten Admins, öffnen Sie Ihre Website und gehen Sie zur _Books_-Liste; Sie sollten eine Buchliste wie die unten abgebildete sehen:

![Admin-Seite - Verbesserte Buchliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, wenn Sie eines definiert haben) hat jeweils ein einziges Feld, sodass es keinen Sinn macht, ein zusätzliches Modell für sie zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es ist sinnvoll, die `BookInstance`-Modellliste zu aktualisieren, um mindestens den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, die anzuzeigenden Elemente zu filtern. Dies geschieht, indem Sie Felder im `list_filter`-Attribut auflisten. Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den folgenden Codeausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht enthält jetzt ein Filterfeld rechts. Beachten Sie, dass Sie Datumsangaben und Status wählen können, um die Werte zu filtern:

![Admin-Seite - BookInstance-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Detailansichts-Layout organisieren

Standardmäßig werden in den Detailansichten alle Felder vertikal in der Reihenfolge ihrer Deklaration im Modell angeordnet. Sie können die Reihenfolge der Deklaration ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte zur Organisation der Informationen verwendet werden, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungswidgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, daher gibt es keinen großen Bedarf, das Layout zu ändern; wir werden jedoch einige Änderungen vornehmen, nur um Ihnen zu zeigen, wie es funktioniert.

#### Kontrolle, welche Felder angezeigt werden und wie sie angeordnet sind

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet genau die Felder auf, die im Formular angezeigt werden sollen, in Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber horizontal angezeigt, wenn Sie diese weiter in ein Tupel gruppieren (wie bei den "Datum"-Feldern oben gezeigt).

Gehen Sie auf Ihrer Website zur Autoren-Detailansicht – diese sollte jetzt wie unten angezeigt werden:

![Admin-Seite - Verbesserte Autorendetails](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen (alle anderen im Modell enthaltenen Attribute werden angezeigt).

#### Abschnittsweise Darstellung der Detailansicht

Sie können "Abschnitte" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets)-Attribut verwenden.

Im `BookInstance`-Modell haben wir Informationen, die sich darauf beziehen, was das Buch ist (d.h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese zu unserer `BookInstanceAdmin`-Klasse hinzufügen, wie unten gezeigt, indem wir die `fieldsets`-Eigenschaft verwenden.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Availability', {
            'fields': ('status', 'due_back')
        }),
    )
```

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, wenn Sie keinen Titel wünschen) und ein zugeordnetes Tupel von Feldern in einem Wörterbuch – das Format ist schwierig zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie sich den Codeausschnitt unmittelbar oben ansehen.

Gehen Sie jetzt in Ihrer Website zu einer Buchexemplaransicht; das Formular sollte wie unten angezeigt werden:

![Admin-Seite - Verbesserte Buchinstanz-Details mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung von zugehörigen Datensätzen

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifischen Exemplare, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) deklarieren vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontale Anordnung) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikale Anordnung, genau wie die Standardmodellanordnung). Sie können die `BookInstance`-Informationen inline zu unserem `Book`-Detail hinzufügen, indem Sie in Ihrem `BookAdmin` `inlines` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Gehen Sie jetzt zu einer Ansicht für ein `Book` auf Ihrer Website – unten sollten nun die Buchexemplare zu sehen sein, die sich auf dieses Buch beziehen (unmittelbar unter den Genre-Feldern des Buches):

![Admin-Seite - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nichts anderes getan, als unsere tabellarische Inline-Klasse zu deklarieren, die einfach alle Felder aus dem _eingefügten_ Modell hinzufügt. Sie können eine Vielzahl von zusätzlichen Informationen für das Layout angeben, einschließlich der Felder, die angezeigt werden sollen, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzliche Grenzen in dieser Funktionalität! Im obigen Screenshot haben wir drei vorhandene Buchexemplare, gefolgt von drei Platzhaltern für neue Buchexemplare (die sehr ähnlich aussehen!). Es wäre besser, KEINE Ersatz-Buchexemplare standardmäßig zu haben und nur mit dem **Weiteres Buchexemplar hinzufügen**-Link hinzuzufügen, oder die `BookInstance`s einfach als nicht lesbare Links von hier aus aufzulisten. Die erste Option kann erreicht werden, indem das `extra`-Attribut in der `BooksInstanceInline`-Modell auf `0` gesetzt wird; versuchen Sie es selbst.

## Fordern Sie sich selbst heraus

Wir haben in diesem Abschnitt viel gelernt, daher ist es nun an der Zeit, dass Sie einige Dinge ausprobieren.

1. Für die `BookInstance`-Listenansicht, fügen Sie Code hinzu, um das Buch, den Status, das Fälligkeitsdatum und die ID anzuzeigen (anstatt den Standard-`__str__()`-Text).
2. Fügen Sie eine Inline-Auflistung von `Book`-Elementen zur `Author`-Detailansicht hinzu, ähnlich wie wir es für `Book`/`BookInstance` getan haben.

## Zusammenfassung

Das war's! Sie haben jetzt gelernt, wie man die Verwaltungsseite sowohl in ihrer einfachsten als auch verbesserten Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Seite navigiert und Datensätze anzeigt, löscht und aktualisiert. Unterwegs haben Sie eine Menge Bücher, Buchexemplare, Genres und Autoren erstellt, die wir listen und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Writing your first Django app, part 2: Introducing the Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)
- [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
