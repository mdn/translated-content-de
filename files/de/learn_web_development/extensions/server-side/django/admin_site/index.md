---
title: "Django-Tutorial Teil 4: Django-Admin-Website"
short-title: "4: Django-Admin-Website"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: f3f56081b4d400cdfa28d80a881b6be325774e5e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website erstellt haben, verwenden wir die Django-Admin-Website, um einige „echte“ Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Website registrieren, und anschließend, wie Sie sich anmelden und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Website weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie zuerst Folgendes ab: <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models"
          >Django-Tutorial Teil 3: Modelle verwenden</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Vorteile und Einschränkungen der Django-Admin-Website verstehen und sie verwenden, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django-Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Websitebereich zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen nutzen können. Dies kann Ihnen während der Entwicklung viel Zeit sparen, da Sie Ihre Modelle sehr einfach testen und ein Gefühl dafür bekommen können, ob Sie die _richtigen_ Daten haben. Abhängig vom Typ der Website kann die Admin-Anwendung auch für die Verwaltung von Daten in der Produktion nützlich sein. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d.h. nur zur Verwendung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Schnittstelle für alle Benutzer ist und viele unnötige Details über die Modelle offenlegt.

Die gesamte Konfiguration, die erforderlich ist, um die Admin-Anwendung in Ihre Website einzubinden, wurde automatisch vorgenommen, als Sie das [Skelettprojekt erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben (Informationen über die tatsächlich benötigten Abhängigkeiten finden Sie in der [Django-Dokumentation](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie lediglich Ihre Modelle bei der Admin-Anwendung _registrieren_, um sie hinzuzufügen. Am Ende dieses Artikels führen wir kurz vor, wie Sie den Admin-Bereich weiter konfigurieren können, damit unsere Modelldaten besser angezeigt werden.

Nach der Registrierung der Modelle zeigen wir, wie Sie einen neuen „Superuser“ erstellen, sich auf der Website anmelden und einige Bücher, Autoren, Buchexemplare und Genres erstellen. Diese werden nützlich sein, um die Views und Templates zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der catalog-Anwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Die Datei sieht derzeit so aus – beachten Sie, dass sie `django.contrib.admin` bereits importiert:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text ans Ende der Datei kopieren. Dieser Code importiert die Modelle und ruft dann `admin.site.register` auf, um jedes von ihnen zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen setzen voraus, dass Sie die Aufgabe angenommen haben, ein Modell zur Darstellung der natürlichen Sprache eines Buches zu erstellen ([siehe den Artikel zum Modelle-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist die einfachste Möglichkeit, ein Modell oder mehrere Modelle bei der Website zu registrieren. Die Admin-Website ist stark anpassbar, und weiter unten besprechen wir weitere Möglichkeiten zur Registrierung Ihrer Modelle.

## Einen Superuser erstellen

Um sich auf der Admin-Website anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Staff_-Status. Um Datensätze anzuzeigen und zu erstellen, muss dieser Benutzer außerdem Berechtigungen zur Verwaltung all unserer Objekte haben. Mit **manage.py** können Sie ein „Superuser“-Konto erstellen, das vollständigen Zugriff auf die Website und alle erforderlichen Berechtigungen besitzt.

Führen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** aus, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmelden und die Website verwenden

Um sich auf der Website anzumelden, öffnen Sie die URL _/admin_ (z. B. `http://127.0.0.1:8000/admin`) und geben Sie die Benutzer-ID und das Passwort Ihres neuen Superusers ein. Sie werden zur _login_-Seite weitergeleitet und nach Eingabe Ihrer Daten wieder zur URL _/admin_ zurückgeführt.

Dieser Teil der Website zeigt alle unsere Modelle an, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einer Ansicht zu gelangen, die alle zugehörigen Datensätze auflistet, und anschließend auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den Link **Add** neben jedem Modell klicken, um einen Datensatz dieses Typs zu erstellen.

![Admin-Website – Startseite](admin_home.png)

Klicken Sie auf den Link **Add** rechts neben _Books_, um ein neues Buch zu erstellen. Dadurch wird ein Dialog ähnlich dem untenstehenden angezeigt. Beachten Sie, wie die Titel der einzelnen Felder, der verwendete Widget-Typ und der `help_text` (falls vorhanden) den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die Schaltfläche **+** neben den jeweiligen Feldern drücken, oder vorhandene Werte aus den Listen auswählen, falls Sie diese bereits erstellt haben. Wenn Sie fertig sind, können Sie **SAVE**, **Save and add another** oder **Save and continue editing** drücken, um den Datensatz zu speichern.

![Admin-Website – Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An dieser Stelle möchten wir Sie bitten, etwas Zeit damit zu verbringen, einige Bücher, Autoren, Sprachen und Genres (z. B. Fantasy) zu Ihrer Anwendung hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre mit mehreren unterschiedlichen Büchern verknüpft ist. Dadurch werden Ihre Listen- und Detail-Views interessanter, wenn wir sie später in der Artikelreihe implementieren.

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den Link **Home** im oberen Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den Link **Books**, um die aktuelle Liste der Bücher anzuzeigen, oder auf einen der anderen Links, um weitere Modelllisten zu sehen. Nachdem Sie einige Bücher hinzugefügt haben, könnte die Liste ähnlich wie im Screenshot unten aussehen. Der Titel jedes Buchs wird angezeigt; dies ist der Wert, der von der `__str__()`-Methode des Book-Modells zurückgegeben wird, die wir im letzten Artikel angegeben haben.

![Admin-Website – Liste der Buchobjekte](admin_book_list.png)

Aus dieser Liste können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem nicht gewünschten Buch auswählen, die Aktion _delete…_ aus der Dropdown-Liste _Action_ wählen und dann die Schaltfläche **Go** drücken. Sie können außerdem neue Bücher hinzufügen, indem Sie die Schaltfläche **ADD BOOK** drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die unten dargestellte Bearbeitungsseite für ein Buch ist fast identisch mit der Seite zum Hinzufügen. Die wichtigsten Unterschiede sind der Seitentitel (_Change book_) und die zusätzlichen Schaltflächen **Delete**, **HISTORY** und **VIEW ON SITE**. Diese letzte Schaltfläche wird angezeigt, weil wir die Methode `get_absolute_url()` in unserem Modell definiert haben.

> [!NOTE]
> Durch Klicken auf die Schaltfläche **VIEW ON SITE** wird eine `NoReverseMatch`-Exception ausgelöst, weil die Methode `get_absolute_url()` versucht, mit `reverse()` ein benanntes URL-Mapping ('book-detail') aufzulösen, das noch nicht definiert wurde.
> Wir werden ein URL-Mapping und eine zugehörige View in [Django-Tutorial Teil 6: Generische Listen- und Detail-Views](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) definieren.

![Admin-Website – Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur Seite **Home** (über den Link _Home_ in der Breadcrumb-Navigation) und sehen Sie sich dann die Listen **Author** und **Genre** an. Sie sollten bereits einige Einträge haben, die beim Hinzufügen der neuen Bücher erstellt wurden, aber Sie können gern weitere hinzufügen.

Was Sie nicht haben werden, sind _Book Instances_, da diese nicht aus Books erstellt werden. Sie können jedoch ein `Book` aus einer `BookInstance` erstellen – das ist die Natur des Feldes `ForeignKey`. Navigieren Sie zurück zur Seite _Home_ und drücken Sie die zugehörige Schaltfläche **Add**, um den untenstehenden Bildschirm _Add book instance_ anzuzeigen. Beachten Sie die große, global eindeutige ID, die verwendet werden kann, um ein einzelnes Exemplar eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Website – BookInstance hinzufügen](admin_bookinstance_add.png)

Erstellen Sie mehrere dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Available_ und für andere auf _On loan_. Wenn der Status **nicht** _Available_ ist, legen Sie außerdem ein zukünftiges Datum für _Due back_ fest.

Das war's! Sie haben nun gelernt, wie Sie die Administrations-Website einrichten und verwenden. Sie haben außerdem Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Views und Templates erstellen.

## Erweiterte Konfiguration

Django leistet recht gute Arbeit beim Erstellen einer grundlegenden Admin-Website anhand der Informationen aus den registrierten Modellen:

- Jedes Modell verfügt über eine Liste einzelner Datensätze, die durch den mit der `__str__()`-Methode des Modells erstellten String identifiziert und mit Detail-Views/Formularen zur Bearbeitung verknüpft werden. Standardmäßig besitzt diese View oben ein Aktionsmenü, mit dem Sie Massenlöschvorgänge für Datensätze durchführen können.
- Die Modelldatensatzformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder des Modells, vertikal in der Reihenfolge ihrer Deklaration angeordnet.

Sie können die Schnittstelle weiter anpassen, um sie noch einfacher verwendbar zu machen. Unter anderem können Sie Folgendes tun:

- Listen-Views:
  - Zusätzliche Felder/Informationen anzeigen, die für jeden Datensatz dargestellt werden.
  - Filter hinzufügen, um anhand eines Datums oder eines anderen Auswahlwerts festzulegen, welche Datensätze aufgelistet werden, z. B. den Ausleihstatus eines Buchs.
  - Zusätzliche Optionen zum Aktionsmenü in Listen-Views hinzufügen und wählen, wo dieses Menü im Formular angezeigt wird.

- Detail-Views:
  - Auswählen, welche Felder angezeigt oder ausgeschlossen werden, sowie deren Reihenfolge, Gruppierung, Bearbeitbarkeit, verwendetes Widget, Ausrichtung usw.
  - Verknüpfte Felder zu einem Datensatz hinzufügen, um Inline-Bearbeitung zu ermöglichen, z. B. die Möglichkeit, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie den zugehörigen Autorendatensatz erstellen.

In diesem Abschnitt betrachten wir einige Änderungen, die die Schnittstelle für unsere _LocalLibrary_ verbessern werden. Dazu gehören das Hinzufügen weiterer Informationen zu den Modelllisten `Book` und `Author` sowie die Verbesserung des Layouts ihrer Bearbeitungs-Views. Wir werden die Darstellung der Modelle `Language` und `Genre` nicht ändern, da sie jeweils nur ein Feld haben und dies daher keinen wirklichen Vorteil bietet!

Eine vollständige Referenz aller Anpassungsoptionen für die Admin-Website finden Sie unter [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche dargestellt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects)-Klasse, die das Layout beschreibt, und registrieren sie beim Modell.

Beginnen wir mit dem Modell `Author`. Öffnen Sie **admin.py** in der catalog-Anwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung für das Modell `Author` aus, indem Sie ihr ein `#` voranstellen:

```python
# admin.site.register(Author)
```

Fügen Sie nun ein neues `AuthorAdmin` und eine Registrierung hinzu, wie unten gezeigt.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Jetzt fügen wir `ModelAdmin`-Klassen für `Book` und `BookInstance` hinzu. Auch hierfür müssen wir die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun erstellen und registrieren wir die neuen Modelle. Für diese Demonstration verwenden wir stattdessen den Decorator `@register`, um die Modelle zu registrieren. Dies bewirkt genau dasselbe wie die Syntax `admin.site.register()`:

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass das Admin-Verhalten unverändert bleibt! Wir können diese Klassen nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listen-Views konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren anhand des Objektnamens auf, der mit der Modellmethode `__str__()` erstellt wird. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber bei vielen Autoren könnten Duplikate auftreten. Um sie voneinander zu unterscheiden oder einfach, weil Sie interessantere Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der View zusätzliche Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den untenstehenden Code. Die Feldnamen, die in der Liste angezeigt werden sollen, werden wie gezeigt in der erforderlichen Reihenfolge in einem _Tuple_ deklariert. Dies sind dieselben Namen, die Sie in Ihrem ursprünglichen Modell angegeben haben.

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie nun zur Autorenliste auf Ihrer Website. Die obigen Felder sollten jetzt wie folgt angezeigt werden:

![Admin-Website – Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser Modell `Book` zeigen wir zusätzlich `author` und `genre` an. `author` ist eine `ForeignKey`-Feldbeziehung (eins-zu-viele) und wird daher durch den `__str__()`-Wert des zugehörigen Datensatzes dargestellt. Ersetzen Sie die Klasse `BookAdmin` durch die untenstehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das Feld `genre` nicht direkt in `list_display` angeben, da es ein `ManyToManyField` ist. Django verhindert dies, weil dies hohe „Kosten“ beim Datenbankzugriff verursachen würde. Stattdessen definieren wir eine Funktion `display_genre`, um die Informationen als String zu erhalten. Dies ist die oben aufgerufene Funktion; wir definieren sie unten.

> [!NOTE]
> Das Abrufen von `genre` ist hier aufgrund der „Kosten“ der Datenbankoperation möglicherweise keine gute Idee. Wir zeigen Ihnen dies, weil der Aufruf von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann, etwa um neben jedem Element in der Liste einen _Delete_-Link hinzuzufügen.

Fügen Sie den folgenden Code in Ihr Modell `Book` ein (**models.py**). Dadurch wird ein String aus den ersten drei Werten des Felds `genre` erstellt, falls diese vorhanden sind, und eine `short_description`, die auf der Admin-Website für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und den aktualisierten Admin-Bereich gespeichert haben, öffnen Sie Ihre Website und wechseln Sie zur Listenseite _Books_. Sie sollten eine Buchliste wie die untenstehende sehen:

![Admin-Website – Verbesserte Buchliste](admin_improved_book_list.png)

Das Modell `Genre` und auch das Modell `Language`, falls Sie eines definiert haben, besitzen jeweils nur ein Feld. Daher lohnt es sich nicht, für sie ein zusätzliches Modell zu erstellen, um weitere Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die Modellliste `BookInstance` so zu aktualisieren, dass mindestens der Status und das erwartete Rückgabedatum angezeigt werden. Dies haben wir am Ende dieses Artikels als Aufgabe hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, die angezeigten Elemente filtern zu können.
Dies erfolgt durch Auflisten von Feldern im Attribut `list_filter`.
Ersetzen Sie Ihre aktuelle Klasse `BookInstanceAdmin` durch das untenstehende Codefragment.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listen-View enthält nun rechts ein Filterfeld. Beachten Sie, wie Sie Datumsangaben und Status auswählen können, um die Werte zu filtern:

![Admin-Website – BookInstance-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Das Layout der Detail-View organisieren

Standardmäßig ordnen die Detail-Views alle Felder vertikal in der Reihenfolge ihrer Deklaration im Modell an. Sie können die Deklarationsreihenfolge ändern, festlegen, welche Felder angezeigt oder ausgeschlossen werden, ob Abschnitte zur Organisation der Informationen verwendet werden, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die Modelle der _LocalLibrary_ sind relativ einfach, daher besteht für uns kein großer Bedarf, das Layout zu ändern. Wir werden dennoch einige Änderungen vornehmen, um Ihnen zu zeigen, wie dies funktioniert.

#### Steuern, welche Felder angezeigt und angeordnet werden

Aktualisieren Sie Ihre Klasse `AuthorAdmin`, um die Zeile `fields` hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das Attribut `fields` listet nur die Felder auf, die im Formular angezeigt werden sollen, und zwar in der angegebenen Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber horizontal dargestellt, wenn Sie sie zusätzlich in einem Tuple gruppieren, wie bei den obigen Datumsfeldern gezeigt.

Wechseln Sie auf Ihrer Website zur Autorendetail-View – sie sollte nun wie unten dargestellt aussehen:

![Admin-Website – Verbesserte Autorendetails](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das Attribut `exclude` verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen. Alle anderen Attribute des Modells werden angezeigt.

#### Die Detail-View in Abschnitte unterteilen

Sie können „Abschnitte“ hinzufügen, um zusammengehörige Modellinformationen innerhalb des Detailformulars zu gruppieren. Verwenden Sie dazu das Attribut [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets).

Im Modell `BookInstance` haben wir Informationen darüber, was das Buch ist, also `name`, `imprint` und `id`, sowie darüber, wann es verfügbar sein wird, also `status` und `due_back`. Wir können diese wie unten gezeigt mithilfe der Eigenschaft `fieldsets` zu unserer Klasse `BookInstanceAdmin` hinzufügen.

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

Jeder Abschnitt hat einen eigenen Titel oder `None`, falls Sie keinen Titel möchten, sowie ein zugehöriges Tuple von Feldern in einem Dictionary. Das Format ist kompliziert zu beschreiben, aber recht einfach zu verstehen, wenn Sie sich das unmittelbar obenstehende Codefragment ansehen.

Navigieren Sie nun auf Ihrer Website zu einer Buchexemplar-View. Das Formular sollte wie unten dargestellt aussehen:

![Admin-Website – Verbesserte BookInstance-Details mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung zugehöriger Datensätze

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen zu den spezifischen vorhandenen Exemplaren auf derselben Detailseite zu haben.

Sie können dies durch Deklarieren von [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für ein horizontales Layout oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) für ein vertikales Layout tun, genau wie beim Standardmodelllayout. Sie können die Informationen aus `BookInstance` inline zu unseren `Book`-Details hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer View für ein `Book` auf Ihrer Website. Unten sollten Sie nun die Buchexemplare sehen, die zu diesem Buch gehören, unmittelbar unter den Genre-Feldern des Buchs:

![Admin-Website – Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir lediglich unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder des _eingebundenen_ Modells hinzufügt. Sie können viele zusätzliche Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. Weitere Informationen finden Sie unter [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline).

> [!NOTE]
> Diese Funktionalität hat einige unangenehme Einschränkungen! Im obigen Screenshot haben wir drei vorhandene Buchexemplare, gefolgt von drei Platzhaltern für neue Buchexemplare, die sehr ähnlich aussehen. Es wäre besser, standardmäßig KEINE freien Buchexemplare zu haben und sie nur über den Link **Add another Book instance** hinzuzufügen, oder die `BookInstance`s hier einfach als nicht bearbeitbare Links auflisten zu können. Die erste Option lässt sich umsetzen, indem Sie das Attribut `extra` im Modell `BooksInstanceInline` auf `0` setzen. Probieren Sie es selbst aus.

## Fordern Sie sich selbst heraus

Wir haben in diesem Abschnitt viel gelernt. Jetzt ist es an der Zeit, dass Sie einige Dinge selbst ausprobieren.

1. Fügen Sie für die Listen-View `BookInstance` Code hinzu, um das Buch, den Status, das Rückgabedatum und die ID anzuzeigen, anstatt des Standardtexts von `__str__()`.
2. Fügen Sie der Detail-View `Author` mithilfe desselben Ansatzes wie für `Book`/`BookInstance` eine Inline-Liste von `Book`-Elementen hinzu.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie Sie die Administrations-Website sowohl in ihrer einfachsten als auch in ihrer verbesserten Form einrichten, wie Sie einen Superuser erstellen und wie Sie auf der Admin-Website navigieren sowie Datensätze anzeigen, löschen und aktualisieren. Dabei haben Sie eine Reihe von Books, BookInstances, Genres und Authors erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Views und Templates erstellen.

## Weiterführende Informationen

- [Ihre erste Django-App schreiben, Teil 2: Einführung in Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)
- [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
