---
title: "Django Tutorial Teil 4: Die Django Admin-Seite"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Jetzt, da wir Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, werden wir die Django Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle auf der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten auf, wie Sie die Darstellung der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models"
          >Django Tutorial Teil 3: Modelle verwenden</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Vorteile und Einschränkungen der Django Admin-Seite zu verstehen und sie zu verwenden, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Seitenbereich zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen verwenden können. Dies kann Ihnen während der Entwicklung viel Zeit sparen und es Ihnen sehr einfach machen, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann, je nach Art der Website, auch zur Datenverwaltung in der Produktion nützlich sein. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d.h. nur für die Verwendung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Schnittstelle für alle Benutzer darstellt und viele unnötige Details über die Modelle preisgibt.

Alle Konfigurationen, die zur Einbindung der Admin-Anwendung in Ihre Website erforderlich sind, wurden automatisch durchgeführt, als Sie das [Skeleton-Projekt erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (Informationen zu den tatsächlichen Abhängigkeiten finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie nur Ihre Modelle in der Admin-Anwendung _registrieren_. Am Ende dieses Artikels zeigen wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nachdem wir die Modelle registriert haben, werden wir zeigen, wie man einen neuen "Superuser" erstellt, sich auf der Seite anmeldet und einige Bücher, Autoren, Buchinstanzen und Genres erstellt. Diese Daten werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Es sieht derzeit so aus – beachten Sie, dass `django.contrib.admin` bereits importiert wird:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text an das Ende der Datei kopieren. Dieser Code importiert die Modelle und ruft `admin.site.register` auf, um jedes von ihnen zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zur Darstellung der natürlichen Sprache eines Buches zu erstellen ([siehe den Modell-Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, um ein Modell oder Modelle auf der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten sprechen, wie Sie Ihre Modelle registrieren können.

## Einen Superuser erstellen

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiter_-Status. Um Datensätze anzuzeigen und zu erstellen, benötigen wir außerdem, dass dieser Benutzer die Berechtigung hat, alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Seite und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Rufen Sie den folgenden Befehl im gleichen Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wird ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir den Login testen können:

```bash
python3 manage.py runserver
```

## Anmelden und die Seite verwenden

Um sich auf der Seite anzumelden, öffnen Sie die URL _/admin_ (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihren neuen Superuser-Benutzernamen und Passwort ein (Sie werden zur _Login_-Seite weitergeleitet und dann zurück zur _/admin_-URL, nachdem Sie Ihre Daten eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung, an. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle damit verbundenen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um einen Datensatz dieses Typs zu erstellen.

![Admin-Seite - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts von _Bücher_, um ein neues Buch zu erstellen (dies zeigt einen Dialog ähnlich dem unten abgebildeten Dialog an). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) mit den im Modell angegebenen Werten übereinstimmen.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+**-Schaltfläche neben den entsprechenden Feldern drücken (oder vorhandene Werte aus den Listen auswählen, wenn Sie sie bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie etwas Zeit damit verbringen, Ihrer Anwendung einige Bücher, Autoren, Sprachen und Genres (z.B. Fantasy) hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den **Startseite**-Link im oberen Lesezeichen, um zur Hauptadmin-Seite zurückzukehren. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten zu sehen). Nachdem Sie einige Bücher hinzugefügt haben, sieht die Liste möglicherweise ähnlich wie im folgenden Screenshot aus. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, die wir im letzten Artikel angegeben haben.

![Admin-Seite - Liste der Buchobjekte](admin_book_list.png)

In dieser Liste können Bücher gelöscht werden, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht möchten, die Aktion _löschen…_ aus der Dropdown-Liste _Aktion_ auswählen und dann die **Go**-Schaltfläche drücken. Sie können auch neue Bücher hinzufügen, indem Sie die Schaltfläche **BUCH HINZUFÜGEN** drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, die unten gezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung der Schaltflächen **Löschen**, **HISTORIE** und **AUF SEITE ANSEHEN** (diese letzte Schaltfläche erscheint, weil wir die Methode `get_absolute_url()` in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die Schaltfläche **AUF SEITE ANSEHEN** löst eine `NoReverseMatch`-Ausnahme aus, da die `get_absolute_url()`-Methode versucht, eine benannte URL-Abbildung ('book-detail') zu `reverse()`, die noch nicht definiert wurde. Wir definieren eine URL-Abbildung und die zugehörige Ansicht in [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views).

![Admin-Seite - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (verwenden Sie den _Home_-Link in der Breadcrumb-Leiste) und sehen Sie sich dann die **Autoren**- und **Genres**-Listen an — Sie sollten bereits einige erstellt haben, als Sie die neuen Bücher hinzugefügt haben. Sie können jedoch gerne noch mehr hinzufügen.

Was Sie nicht haben werden, sind _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Buch` aus einer `Buchinstanz` erstellen können — dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den Bildschirm _Buchinstanz hinzufügen_ anzuzeigen. Beachten Sie die große, global eindeutige ID, die verwendet werden kann, um eine einzelne Kopie eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Seite - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, setzen Sie auch ein zukünftiges _Fälligkeitsdatum_.

Das ist alles! Sie haben nun gelernt, wie Sie die Administrationsseite einrichten und verwenden. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellt haben.

## Erweiterte Konfiguration

Django leistet ziemlich gute Arbeit bei der Erstellung einer grundlegenden Admin-Seite, indem es die Informationen der registrierten Modelle verwendet:

- Jedes Modell hat eine Liste von einzelnen Datensätzen, die durch den durch die `__str__()`-Methode des Modells erstellten String identifiziert und mit Detailansichten/Formularen zur Bearbeitung verknüpft sind. Diese Ansicht hat standardmäßig ein Aktionsmenü oben, mit dem Sie Massenlöschvorgänge bei Datensätzen durchführen können.
- Die Modeldetaldatensatzformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell, die vertikal in der Deklarationsreihenfolge angeordnet sind.

Sie können die Oberfläche weiter anpassen, um sie noch benutzerfreundlicher zu machen. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen für jeden Datensatz anzeigen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze angezeigt werden, basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus).
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und auswählen, wo dieses Menü auf dem Formular angezeigt wird.

- Detailansichten

  - Auswählen, welche Felder angezeigt (oder ausgeschlossen) werden sollen, zusammen mit ihrer Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, Ausrichtung usw.
  - Verknüpfte Felder zu einem Datensatz hinzufügen, um die Inline-Bearbeitung zu ermöglichen (z.B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie ihren Autorendatensatz erstellen).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Oberfläche für unsere _LocalLibrary_ verbessern werden, einschließlich der Hinzufügung von mehr Informationen zu `Book`- und `Author`-Modelllisten und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation der `Language`- und `Genre`-Modelle nicht ändern, da sie jeweils nur ein Feld haben und es daher keinen wirklichen Vorteil bringt, dies zu tun!

Eine vollständige Referenz aller Anpassungsmöglichkeiten der Admin-Seite finden Sie in [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects)-Klasse (die das Layout beschreibt) und registrieren Sie sie mit dem Modell.

Lassen Sie uns mit dem `Author`-Modell beginnen. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung (vorher mit einem #) für das `Author`-Modell aus:

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AuthorAdmin`- und Registrierung hinzu, wie unten gezeigt.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Nun fügen wir `ModelAdmin`-Klassen für `Book` und `BookInstance` hinzu. Wir müssen erneut die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun, um die neuen Modelle zu erstellen und zu registrieren; für den Zweck dieser Demonstration verwenden wir stattdessen den `@register`-Dekorator, um die Modelle zu registrieren (dies tut genau das Gleiche wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass sich das Admin-Verhalten nicht ändert! Wir können diese nun erweitern, um unser modell-spezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren anhand des Objektnamens auf, der aus der `__str__()`-Methode des Modells generiert wird. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber sobald Sie viele haben, können Sie Duplikate haben. Um sie zu unterscheiden oder nur weil Sie mehr interessante Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib

/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um zusätzliche Felder zur Ansicht hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den folgenden Code. Die Feldnamen, die in der Liste angezeigt werden sollen, werden in einem _Tupel_ in der erforderlichen Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die in Ihrem ursprünglichen Modell angegeben sind).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie jetzt in Ihrer Website zur Autorenliste. Die oben genannten Felder sollten jetzt angezeigt werden, wie folgt:

![Admin-Seite - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book`-Modell zeigen wir zusätzlich den `author` und `genre` an. Der `author` ist ein `ForeignKey`-Feld (Eins-zu-viele-Beziehung) und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die Version unten.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, weil dies mit hohen Datenbankzugriffskosten verbunden wäre). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir definieren sie unten).

> [!NOTE]
> Das Abrufen des `genre`-Feldes ist möglicherweise keine gute Idee, da die "Kosten" des Datenbankzugriffs hoch sind. Wir zeigen Ihnen dies, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann - zum Beispiel, um einen _Löschen_-Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book`-Modell (**models.py**) ein. Dies erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls sie vorhanden sind) und erstellt eine `short_description` für die Admin-Seite für diese Methode.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und die aktualisierte Admin-Seite gespeichert haben, öffnen Sie Ihre Website und gehen Sie zur _Bücher_-Listenansicht; Sie sollten eine Bücherliste wie die untenstehende sehen:

![Admin-Seite - Verbesserte Bücherliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, falls Sie eines definiert haben) haben beide nur ein Feld, daher gibt es keinen Grund, ein zusätzliches Modell für sie zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BookInstance`-Modellliste zu aktualisieren, um zumindest den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben dies als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, die angezeigten Elemente filtern zu können. Dies wird durch Auflisten der Felder im Attribut `list_filter` erreicht. Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den untenstehenden Codeausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

In der Listenansicht wird nun ein Filterfeld rechts angezeigt. Beachten Sie, wie Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin-Seite - Buchinstanz-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Detailansichtslayout organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal an, in ihrer Reihenfolge der Deklaration im Modell. Sie können die Deklarationsreihenfolge ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar welche Bearbeitungs-Widgets in den Administrationsformularen verwendet werden.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, daher besteht kein großer Bedarf, das Layout zu ändern. Wir werden trotzdem einige Änderungen vornehmen, nur um Ihnen zu zeigen, wie es geht.

#### Steuerung, welche Felder angezeigt und angeordnet werden

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das Attribut `fields` listet nur die Felder, die im Formular angezeigt werden sollen, in der Reihenfolge auf. Felder werden standardmäßig vertikal angezeigt, aber horizontal angezeigt, wenn Sie sie weiter in einem Tupel gruppieren (wie in den "Datum"-Feldern oben gezeigt).

In Ihrer Website gehen Sie zur Autoren-Detailansicht — diese sollte nun wie unten gezeigt erscheinen:

![Admin-Seite - Verbesserte Autorendetailansicht](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das Attribut `exclude` verwenden, um eine Liste von Attributen zu deklarieren, die vom Formular ausgeschlossen werden sollen (alle anderen Attribute des Modells werden angezeigt).

#### Abschnitte in der Detailansicht

Sie können "Abschnitte" hinzufügen, um verwandte Modelinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das Attribut [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) verwenden.

Im `BookInstance`-Modell haben wir Informationen darüber, was das Buch ist (d.h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese in unsere `BookInstanceAdmin`-Klasse wie unten gezeigt hinzufügen, indem wir die `fieldsets`-Eigenschaft verwenden.

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

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, wenn Sie keinen Titel wünschen) und ein zugehöriges Tupel von Feldern in einem Dictionary - das Format ist kompliziert zu beschreiben, aber relativ einfach zu verstehen, wenn Sie sich den unmittelbar oben stehenden Codeausschnitt ansehen.

Navigieren Sie jetzt zu einer Buchinstanz-Ansicht in Ihrer Website; das Formular sollte wie unten gezeigt erscheinen:

![Admin-Seite - Verbesserte Buchinstanz-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung verknüpfter Datensätze

Manchmal kann es sinnvoll sein, verknüpfte Datensätze gleichzeitig hinzuzufügen. Zum Beispiel kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen zu den spezifischen Exemplaren, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [Inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) des Typs [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, genau wie das Standardmodell-Layout) deklarieren. Sie können die `BookInstance`-Informationen inline zu unserer `Book`-Detailansicht hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht eines `Buches` in Ihrer Website - am Ende sollten Sie nun die Buchinstanzen sehen, die sich auf dieses Buch beziehen (unmittelbar unter den Genre-Feldern des Buches):

![Admin-Seite - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die alle Felder aus dem _Inline_-Modell hinzufügt. Sie können alle Arten von zusätzlichen Informationen für das Layout angeben, einschließlich der Felder, die angezeigt werden sollen, ihrer Reihenfolge, ob sie nur lesbar sind oder nicht, usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzhafte Grenzen in dieser Funktionalität! Im Screenshot oben haben wir drei vorhandene Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, KEINE Ersatz-Buchinstanzen standardmäßig zu haben und sie einfach mit dem Link **Eine weitere Buchinstanz hinzufügen** hinzuzufügen, oder in der Lage zu sein, die `BookInstance`-Instanzen einfach als nicht lesbare Links von hier aus aufzulisten. Die erste Option kann durch Setzen des Attributs `extra` auf `0` im Modell `BooksInstanceInline` erreicht werden, probieren Sie es selbst aus.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, jetzt ist es an der Zeit, dass Sie ein paar Dinge versuchen.

1. Für die `BookInstance`-Listenansicht fügen Sie Code hinzu, um das Buch, den Status, das Fälligkeitsdatum und die ID (anstelle des Standardtexts `__str__()`) anzuzeigen.
2. Fügen Sie eine Inline-Auflistung von `Buch`-Elementen zur Autor-Detailansicht hinzu, indem Sie denselben Ansatz wie für `Buch`/`BuchInstanz` verwenden.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie man die Admin-Seite sowohl in ihrer einfachsten als auch in ihrer verbesserten Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Seite navigiert und Datensätze anzeigt, löscht und aktualisiert. Dabei haben Sie eine Reihe von Bücher, BuchInstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Lektüre

- [Schreiben Ihrer ersten Django-App, Teil 2: Die Django Admin-Seite einführen](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumente)
- [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
