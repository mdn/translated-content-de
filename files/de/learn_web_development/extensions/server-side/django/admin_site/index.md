---
title: "Django-Tutorial Teil 4: Die Django-Admin-Oberfläche"
short-title: "4: Die Django-Admin-Oberfläche"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir Modelle für die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) erstellt haben, verwenden wir die Django-Admin-Oberfläche, um einige „echte“ Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle in der Admin-Oberfläche registrieren. Anschließend erfahren Sie, wie Sie sich anmelden und Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, die Darstellung der Admin-Oberfläche weiter zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie zuerst <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models"
          >Django-Tutorial Teil 3: Modelle verwenden</a
        > ab.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Vorteile und Einschränkungen der Django-Admin-Oberfläche verstehen und mit ihr Datensätze für unsere Modelle erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django-Admin-_Anwendung_ kann anhand Ihrer Modelle automatisch einen Bereich der Website erstellen, in dem Sie Datensätze anlegen, anzeigen, aktualisieren und löschen können. Das kann Ihnen während der Entwicklung viel Zeit sparen: Sie können Ihre Modelle einfach testen und prüfen, ob Sie die _richtigen_ Daten erfasst haben. Je nach Art der Website kann die Admin-Anwendung auch zur Verwaltung von Daten im Produktivbetrieb nützlich sein. Das Django-Projekt empfiehlt sie jedoch nur für die interne Datenverwaltung, also für Administratoren oder Personen innerhalb Ihrer Organisation. Der modellzentrierte Ansatz bietet nicht unbedingt für alle Benutzer die bestmögliche Oberfläche und legt viele unnötige Details über die Modelle offen.

Die gesamte Konfiguration, die zum Einbinden der Admin-Anwendung in Ihre Website erforderlich ist, wurde automatisch vorgenommen, als Sie das [Projektgerüst erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website). Informationen zu den tatsächlich benötigten Abhängigkeiten finden Sie unter [Die Django-Admin-Oberfläche](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/) in der Django-Dokumentation. Um Ihre Modelle zur Admin-Anwendung hinzuzufügen, müssen Sie sie daher lediglich _registrieren_. Am Ende dieses Artikels zeigen wir kurz, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nach der Registrierung der Modelle zeigen wir Ihnen, wie Sie einen neuen „Superuser“ erstellen, sich an der Website anmelden und einige Bücher, Autoren, Buchexemplare und Genres anlegen. Diese Daten werden beim Testen der Views und Templates hilfreich sein, die wir im nächsten Tutorial erstellen.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der catalog-Anwendung (**/catalog/admin.py**). Die Datei sieht derzeit so aus. Beachten Sie, dass `django.contrib.admin` bereits importiert wird:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text am Ende der Datei einfügen. Dieser Code importiert die Modelle und ruft anschließend für jedes Modell `admin.site.register` auf.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen setzen voraus, dass Sie die Herausforderung angenommen und ein Modell für die natürliche Sprache eines Buches erstellt haben ([siehe den Artikel über Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist die einfachste Möglichkeit, ein oder mehrere Modelle in der Admin-Oberfläche zu registrieren. Die Admin-Oberfläche lässt sich umfassend anpassen. Weiter unten gehen wir auf andere Möglichkeiten ein, Ihre Modelle zu registrieren.

## Einen Superuser erstellen

Um sich an der Admin-Oberfläche anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Staff_-Status. Damit dieser Benutzer Datensätze anzeigen und erstellen kann, benötigt er außerdem Berechtigungen zur Verwaltung aller unserer Objekte. Mit **manage.py** können Sie ein „Superuser“-Konto erstellen, das vollständigen Zugriff auf die Website und alle erforderlichen Berechtigungen besitzt.

Führen Sie im selben Verzeichnis wie **manage.py** den folgenden Befehl aus, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _sicheres_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald der Befehl abgeschlossen ist, wurde der Datenbank ein neuer Superuser hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmelden und die Admin-Oberfläche verwenden

Um sich anzumelden, öffnen Sie die URL _/admin_ (zum Beispiel `http://127.0.0.1:8000/admin`) und geben Sie den Benutzernamen und das Passwort Ihres neuen Superusers ein. Sie werden zur _Anmeldeseite_ weitergeleitet und nach Eingabe Ihrer Zugangsdaten zur URL _/admin_ zurückgeführt.

Dieser Bereich der Website zeigt alle unsere Modelle an, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einer Seite mit allen zugehörigen Datensätzen zu gelangen. Wenn Sie dort auf einen Datensatz klicken, können Sie ihn bearbeiten. Über den Link **Add** neben einem Modell können Sie direkt einen neuen Datensatz dieses Typs erstellen.

![Admin-Oberfläche – Startseite](admin_home.png)

Klicken Sie rechts neben _Books_ auf **Add**, um ein neues Buch zu erstellen. Daraufhin erscheint ein Formular ähnlich dem unten abgebildeten. Beachten Sie, dass die Bezeichnungen der einzelnen Felder, die verwendeten Widgets und gegebenenfalls der `help_text` den Werten entsprechen, die Sie im Modell festgelegt haben.

Geben Sie Werte für die Felder ein. Über die Schaltfläche **+** neben den jeweiligen Feldern können Sie neue Autoren oder Genres erstellen. Wenn Sie bereits welche angelegt haben, können Sie stattdessen vorhandene Werte aus den Listen auswählen. Klicken Sie anschließend auf **SAVE**, **Save and add another** oder **Save and continue editing**, um den Datensatz zu speichern.

![Admin-Oberfläche – Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> Nehmen Sie sich an dieser Stelle etwas Zeit, um Ihrer Anwendung einige Bücher, Autoren, Sprachen und Genres (zum Beispiel Fantasy) hinzuzufügen. Achten Sie darauf, dass jedem Autor und jedem Genre mehrere unterschiedliche Bücher zugeordnet sind. Dadurch werden die Listen- und Detailansichten interessanter, wenn wir sie später in dieser Artikelreihe implementieren.

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie oben auf **Home**, um zur Hauptseite der Admin-Oberfläche zurückzukehren. Klicken Sie dann auf **Books**, um die aktuelle Bücherliste anzuzeigen. Über die anderen Links können Sie die Listen der übrigen Modelle aufrufen. Nachdem Sie einige Bücher hinzugefügt haben, könnte die Liste ähnlich wie im folgenden Screenshot aussehen. Für jedes Buch wird der Titel angezeigt. Dies ist der Wert, den die im vorherigen Artikel festgelegte Methode `__str__()` des `Book`-Modells zurückgibt.

![Admin-Oberfläche – Liste der Buchobjekte](admin_book_list.png)

Um Bücher aus dieser Liste zu löschen, aktivieren Sie das Kontrollkästchen neben einem Buch, wählen im Dropdown-Menü _Action_ die Aktion _delete…_ und klicken anschließend auf **Go**. Mit **ADD BOOK** können Sie außerdem neue Bücher hinzufügen.

Um ein Buch zu bearbeiten, klicken Sie auf seinen Namen. Die unten gezeigte Bearbeitungsseite für ein Buch ist fast identisch mit der Seite zum Hinzufügen. Die wichtigsten Unterschiede sind der Seitentitel (_Change book_) und die zusätzlichen Schaltflächen **Delete**, **HISTORY** und **VIEW ON SITE**. Letztere erscheint, weil wir in unserem Modell die Methode `get_absolute_url()` definiert haben.

> [!NOTE]
> Ein Klick auf **VIEW ON SITE** löst eine `NoReverseMatch`-Exception aus, weil die Methode `get_absolute_url()` versucht, mit `reverse()` eine benannte URL-Zuordnung ('book-detail') aufzulösen, die noch nicht definiert wurde.
> Eine URL-Zuordnung und den zugehörigen View definieren wir in [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views).

![Admin-Oberfläche – Buch bearbeiten](admin_book_modify.png)

Kehren Sie nun über den Link _Home_ in der Breadcrumb-Navigation zur **Home**-Seite zurück und sehen Sie sich die Listen **Author** und **Genre** an. Durch das Hinzufügen der Bücher sollten bereits einige Einträge entstanden sein. Sie können aber gern weitere hinzufügen.

Noch nicht vorhanden sind _Book Instances_, denn diese werden beim Erstellen von Büchern nicht automatisch angelegt. Umgekehrt können Sie jedoch ein `Book` aus einer `BookInstance` heraus erstellen – das ergibt sich aus der Funktionsweise des `ForeignKey`-Felds. Kehren Sie zur _Home_-Seite zurück und klicken Sie auf die zugehörige Schaltfläche **Add**, um die unten gezeigte Seite _Add book instance_ zu öffnen. Beachten Sie die lange, global eindeutige ID, mit der sich ein einzelnes Exemplar eines Buches in der Bibliothek identifizieren lässt.

![Admin-Oberfläche – BookInstance hinzufügen](admin_bookinstance_add.png)

Erstellen Sie für jedes Ihrer Bücher mehrere solcher Datensätze. Setzen Sie den Status bei einigen auf _Available_ und bei anderen auf _On loan_. Wenn der Status **nicht** _Available_ lautet, legen Sie außerdem ein zukünftiges Datum für _Due back_ fest.

Das war’s! Sie haben gelernt, wie Sie die Admin-Oberfläche einrichten und verwenden. Außerdem haben Sie Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir eigene Views und Templates anlegen.

## Erweiterte Konfiguration

Django kann aus den Informationen der registrierten Modelle bereits eine brauchbare grundlegende Admin-Oberfläche erstellen:

- Für jedes Modell gibt es eine Liste seiner Datensätze. Sie werden durch den von der Methode `__str__()` des Modells erzeugten String bezeichnet und sind mit Detailansichten beziehungsweise Bearbeitungsformularen verknüpft. Standardmäßig befindet sich oben in dieser Ansicht ein Aktionsmenü, über das Sie mehrere Datensätze auf einmal löschen können.
- Die Detailformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder des Modells. Sie sind untereinander in der Reihenfolge angeordnet, in der sie deklariert wurden.

Sie können die Oberfläche weiter anpassen, um ihre Verwendung noch einfacher zu machen. Beispielsweise können Sie:

- Listenansichten:
  - Zusätzliche Felder oder Informationen für jeden Datensatz anzeigen.
  - Filter hinzufügen, um anhand eines Datums oder eines anderen Auswahlwerts festzulegen, welche Datensätze angezeigt werden, beispielsweise anhand des Ausleihstatus eines Buches.
  - Weitere Optionen zum Aktionsmenü der Listenansichten hinzufügen und festlegen, wo dieses Menü im Formular erscheint.

- Detailansichten:
  - Festlegen, welche Felder angezeigt oder ausgeschlossen werden, in welcher Reihenfolge und Gruppierung sie erscheinen, ob sie bearbeitbar sind, welches Widget verwendet wird und wie sie ausgerichtet sind.
  - Zugehörige Felder zu einem Datensatz hinzufügen, um sie direkt dort bearbeiten zu können. Beispielsweise könnten Sie beim Erstellen eines Autorendatensatzes auch Buchdatensätze hinzufügen und bearbeiten.

In diesem Abschnitt sehen wir uns einige Änderungen an, die die Oberfläche unserer _LocalLibrary_ verbessern. Wir werden unter anderem zusätzliche Informationen in den Listen der Modelle `Book` und `Author` anzeigen und die Anordnung ihrer Bearbeitungsansichten verbessern. Die Darstellung der Modelle `Language` und `Genre` ändern wir nicht: Sie haben jeweils nur ein Feld, sodass dies keinen wirklichen Vorteil bringen würde.

Eine vollständige Referenz aller Anpassungsmöglichkeiten finden Sie unter [Die Django-Admin-Oberfläche](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/) in der Django-Dokumentation.

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche dargestellt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#modeladmin-objects)-Klasse, die das Layout beschreibt, und registrieren diese für das Modell.

Beginnen wir mit dem Modell `Author`. Öffnen Sie **admin.py** in der catalog-Anwendung (**/catalog/admin.py**). Kommentieren Sie die ursprüngliche Registrierung des Modells `Author` aus, indem Sie ihr ein `#` voranstellen:

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AuthorAdmin`-Klasse und die zugehörige Registrierung hinzu, wie unten gezeigt.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Als Nächstes fügen wir `ModelAdmin`-Klassen für `Book` und `BookInstance` hinzu. Auch hier müssen wir zuerst die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun erstellen und registrieren wir die neuen Klassen. Für diese Demonstration verwenden wir zur Registrierung den Decorator `@register` statt `admin.site.register()`; beides bewirkt genau dasselbe:

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass sich das Verhalten der Admin-Oberfläche nicht ändert. Jetzt können wir die Klassen erweitern, um modellspezifisches Verhalten festzulegen.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren unter dem Objektnamen auf, den die Methode `__str__()` des Modells erzeugt. Bei wenigen Autoren ist das ausreichend. Wenn es viele werden, können jedoch doppelte Namen auftreten. Um die Autoren unterscheiden zu können oder einfach interessantere Informationen über sie anzuzeigen, können Sie mit [list_display](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) weitere Felder zur Ansicht hinzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den folgenden Code. Die Namen der Felder, die in der Liste erscheinen sollen, werden in der gewünschten Reihenfolge als _Tuple_ angegeben. Es sind dieselben Namen wie in Ihrem ursprünglichen Modell.

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Öffnen Sie nun die Autorenliste auf Ihrer Website. Die zusätzlichen Felder sollten wie folgt angezeigt werden:

![Admin-Oberfläche – verbesserte Autorenliste](admin_improved_author_list.png)

Für unser Modell `Book` zeigen wir zusätzlich `author` und `genre` an. `author` ist ein `ForeignKey`-Feld und bildet eine Eins-zu-viele-Beziehung ab. Deshalb wird es durch den `__str__()`-Wert des zugehörigen Datensatzes dargestellt. Ersetzen Sie die Klasse `BookAdmin` durch die folgende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das Feld `genre` nicht direkt in `list_display` angeben, weil es ein `ManyToManyField` ist. Django verhindert dies, da es hohe Kosten durch Datenbankzugriffe verursachen würde. Stattdessen definieren wir eine Funktion `display_genre`, die die Informationen als String zurückgibt. Diese Funktion haben wir oben bereits aufgerufen; im Folgenden definieren wir sie.

> [!NOTE]
> Wegen der Kosten des Datenbankzugriffs ist es hier möglicherweise keine gute Idee, `genre` abzurufen. Wir zeigen Ihnen dennoch, wie es geht, denn das Aufrufen von Funktionen Ihrer Modelle kann auch aus anderen Gründen sehr nützlich sein – beispielsweise, um neben jedem Listeneintrag einen _Delete_-Link hinzuzufügen.

Fügen Sie Ihrem Modell `Book` (**models.py**) den folgenden Code hinzu. Er erstellt aus den ersten drei Werten des Felds `genre` einen String, sofern Werte vorhanden sind, und legt eine `short_description` fest, die in der Admin-Oberfläche für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und die aktualisierte Admin-Konfiguration gespeichert haben, öffnen Sie auf Ihrer Website die Liste _Books_. Sie sollten eine Bücherliste wie die folgende sehen:

![Admin-Oberfläche – verbesserte Bücherliste](admin_improved_book_list.png)

Das Modell `Genre` und gegebenenfalls das von Ihnen definierte Modell `Language` haben jeweils nur ein Feld. Daher lohnt es sich nicht, zusätzliche Admin-Klassen zu erstellen, um weitere Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die Liste des Modells `BookInstance` so zu erweitern, dass sie mindestens den Status und das voraussichtliche Rückgabedatum anzeigt. Am Ende dieses Artikels haben wir daraus eine Aufgabe für Sie gemacht!

### Listenfilter hinzufügen

Wenn eine Liste viele Einträge enthält, ist es hilfreich, die angezeigten Einträge filtern zu können. Dazu geben Sie Felder im Attribut `list_filter` an. Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den folgenden Codeausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht enthält nun rechts einen Filterbereich. Beachten Sie, dass Sie die Einträge nach Datum und Status filtern können:

![Admin-Oberfläche – Filter für die BookInstance-Liste](admin_improved_bookinstance_list_filters.png)

### Das Layout der Detailansicht gestalten

Standardmäßig ordnen Detailansichten alle Felder untereinander an, und zwar in der Reihenfolge ihrer Deklaration im Modell. Sie können diese Reihenfolge ändern, Felder ein- oder ausschließen, Informationen in Abschnitte gliedern, Felder horizontal oder vertikal darstellen und sogar festlegen, welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die Modelle der _LocalLibrary_ sind recht einfach, sodass wir das Layout nicht unbedingt ändern müssen. Wir nehmen trotzdem einige Änderungen vor, um Ihnen die Möglichkeiten zu zeigen.

#### Angezeigte Felder und ihre Anordnung festlegen

Ergänzen Sie Ihre `AuthorAdmin`-Klasse um die Zeile mit `fields`, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das Attribut `fields` gibt die Felder an, die im Formular angezeigt werden sollen, und legt ihre Reihenfolge fest. Standardmäßig erscheinen Felder untereinander. Wenn Sie sie jedoch zusätzlich in einem Tuple gruppieren, werden sie nebeneinander dargestellt, wie oben bei den Datumsfeldern.

Öffnen Sie auf Ihrer Website die Detailansicht eines Autors. Sie sollte nun wie folgt aussehen:

![Admin-Oberfläche – verbesserte Autorendetailansicht](admin_improved_author_detail.png)

> [!NOTE]
> Mit dem Attribut `exclude` können Sie auch eine Liste von Attributen angeben, die aus dem Formular ausgeschlossen werden sollen. Alle anderen Attribute des Modells werden dann angezeigt.

#### Die Detailansicht in Abschnitte gliedern

Mit dem Attribut [fieldsets](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) können Sie im Detailformular „Abschnitte“ erstellen, um zusammengehörige Modellinformationen zu gruppieren.

Im Modell `BookInstance` gibt es Informationen darüber, um welches Buch es sich handelt (`name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Mit der Eigenschaft `fieldsets` können wir diese Informationen in unserer Klasse `BookInstanceAdmin` wie folgt gruppieren.

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

Jeder Abschnitt hat einen eigenen Titel oder `None`, wenn Sie keinen Titel möchten. Außerdem enthält er ein zugehöriges Tuple mit Feldern in einem Dictionary. Das Format ist nicht leicht zu beschreiben, aber anhand des unmittelbar vorhergehenden Codeausschnitts recht einfach zu verstehen.

Öffnen Sie nun auf Ihrer Website die Detailansicht eines Buchexemplars. Das Formular sollte wie folgt aussehen:

![Admin-Oberfläche – verbesserte BookInstance-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Zugehörige Datensätze direkt bearbeiten

Manchmal ist es sinnvoll, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise könnten die Informationen über ein Buch und über die vorhandenen Exemplare auf derselben Detailseite stehen.

Dazu deklarieren Sie [inlines](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) vom Typ [TabularInline](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.TabularInline) für eine horizontale Anordnung oder [StackedInline](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.StackedInline) für eine vertikale Anordnung wie beim standardmäßigen Modelllayout. Indem Sie `inlines` in `BookAdmin` angeben, können Sie die Informationen aus `BookInstance` direkt in die Detailansicht von `Book` einbinden:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Öffnen Sie nun auf Ihrer Website die Ansicht eines `Book`. Unten sollten Sie die zugehörigen Buchexemplare sehen, direkt unter den Genre-Feldern des Buches:

![Admin-Oberfläche – Buch mit Inline-Datensätzen](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir lediglich unsere tabellarische Inline-Klasse deklariert. Sie fügt einfach alle Felder des _eingebundenen_ Modells hinzu. Sie können viele weitere Angaben zum Layout machen, darunter, welche Felder angezeigt werden, in welcher Reihenfolge sie erscheinen und ob sie schreibgeschützt sind. Weitere Informationen finden Sie unter [TabularInline](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/#django.contrib.admin.TabularInline).

> [!NOTE]
> Diese Funktionalität hat einige ärgerliche Einschränkungen! Im obigen Screenshot sehen Sie drei vorhandene Buchexemplare, gefolgt von drei Platzhaltern für neue Buchexemplare, die sich optisch kaum unterscheiden. Besser wäre es, standardmäßig KEINE leeren Felder für zusätzliche Buchexemplare anzuzeigen und neue Exemplare nur über den Link **Add another Book instance** hinzuzufügen. Alternativ wäre es hilfreich, die `BookInstance`-Einträge hier lediglich als nicht bearbeitbare Links aufzulisten. Die erste Möglichkeit lässt sich umsetzen, indem Sie das Attribut `extra` im Modell `BooksInstanceInline` auf `0` setzen. Probieren Sie es selbst aus.

## Probieren Sie es selbst aus

Sie haben in diesem Abschnitt viel gelernt. Jetzt sind Sie an der Reihe, einige Änderungen selbst vorzunehmen.

1. Ergänzen Sie die Listenansicht von `BookInstance` um Code, der das Buch, den Status, das Rückgabedatum und die ID anzeigt, statt des standardmäßigen Texts aus `__str__()`.
2. Fügen Sie der Detailansicht von `Author` eine Inline-Liste von `Book`-Einträgen hinzu. Gehen Sie dabei genauso vor wie bei `Book` und `BookInstance`.

## Zusammenfassung

Das war’s! Sie haben gelernt, wie Sie die Admin-Oberfläche in ihrer einfachsten Form einrichten und anschließend verbessern, einen Superuser erstellen und in der Admin-Oberfläche navigieren sowie Datensätze anzeigen, löschen und aktualisieren. Nebenbei haben Sie zahlreiche Books, BookInstances, Genres und Authors erstellt, die wir auflisten und anzeigen können, sobald wir eigene Views und Templates anlegen.

## Weiterführende Informationen

- [Ihre erste Django-App schreiben, Teil 2: Einführung in den Django-Admin-Bereich](https://docs.djangoproject.com/en/6.1/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)
- [Die Django-Admin-Oberfläche](https://docs.djangoproject.com/en/6.1/ref/contrib/admin/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
