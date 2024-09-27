---
title: "Django-Tutorial Teil 4: Django-Admin-Seite"
slug: Learn/Server-side/Django/Admin_site
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

Nachdem wir nun Modelle für die [Lokale Bibliothek](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, werden wir die Django-Admin-Seite nutzen, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich einloggen und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn/Server-side/Django/Models"
          >Django-Tutorial Teil 3: Arbeiten mit Modellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, welche Vorteile und Einschränkungen die Django-Admin-Seite bietet, und sie zu nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Bereich der Website zu erstellen, den Sie zum Erstellen, Ansehen, Aktualisieren und Löschen von Datensätzen nutzen können. Dies kann während der Entwicklung viel Zeit sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch zur Datenverwaltung in der Produktion nützlich sein, je nach Art der Website. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d. h. nur für die Nutzung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die beste Schnittstelle für alle Benutzer ist und viele unnötige Details über die Modelle offenlegt.

Die gesamte Konfiguration, die erforderlich ist, um die Admin-Anwendung in Ihre Website einzubeziehen, wurde automatisch durchgeführt, als Sie das [Grundgerüst-Projekt erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website). (Weitere Informationen zu den tatsächlich benötigten Abhängigkeiten finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie, um Ihre Modelle in die Admin-Anwendung einzufügen, **nur** diese _registrieren_. Am Ende dieses Artikels geben wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nachdem die Modelle registriert sind, zeigen wir, wie Sie einen neuen "Superuser" erstellen, sich auf der Seite anmelden und einige Bücher, Autoren, Buchinstanzen und Genres erstellen. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zuerst die Datei **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Sie sieht derzeit wie folgt aus — beachten Sie, dass `django.contrib.admin` bereits importiert wird:

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
> Die oben stehenden Zeilen nehmen an, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches darstellt ([siehe den Modell-Tutorial-Artikel](/de/docs/Learn/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle auf der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten zur Registrierung Ihrer Modelle sprechen.

## Einen Superuser erstellen

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Staff_ Status. Um Datensätze anzuzeigen und zu erstellen, benötigen wir auch die Berechtigungen, um alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollständigen Zugriff auf die Seite und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Führen Sie den folgenden Befehl im gleichen Verzeichnis wie **manage.py** aus, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wird ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie jetzt den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmeldung und Nutzung der Seite

Um sich auf der Seite anzumelden, öffnen Sie die _/admin_ URL (z. B. `http://127.0.0.1:8000/admin`) und geben Ihre neuen Superuser-Benutzerdaten und Passwort ein (Sie werden auf die _Anmelde_-Seite weitergeleitet und dann zurück zur _/admin_ URL, nachdem Sie Ihre Angaben eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierten Anwendungen, an. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um mit der Erstellung eines Datensatzes dieses Typs zu beginnen.

![Admin Site - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts von _Bücher_, um ein neues Buch zu erstellen (dies zeigt ein Dialogfeld ähnlich dem untenstehenden an). Beachten Sie, wie die Titel jedes Feldes, die verwendete Widget-Art und der `help_text` (falls vorhanden) den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie auf die **+** Schaltfläche neben den jeweiligen Feldern drücken (oder bestehende Werte aus den Listen auswählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, drücken Sie **SPEICHERN**, **Speichern und neues hinzufügen** oder **Speichern und weiter bearbeiten**, um den Datensatz zu speichern.

![Admin Site - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An dieser Stelle möchten wir, dass Sie etwas Zeit mit der Eingabe einiger Bücher, Autoren, Sprachen und Genres (z. B. Fantasy) in Ihre Anwendung verbringen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher umfasst (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Nachdem Sie Bücher hinzugefügt haben, klicken Sie auf den **Startseite**-Link im obersten Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Buchliste anzuzeigen (oder auf eine der anderen Links, um andere Modelllisten zu sehen). Jetzt, da Sie einige Bücher hinzugefügt haben, könnte die Liste der unten gezeigten ähneln. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, die wir im letzten Artikel spezifiziert haben.

![Admin Site - Liste der Buchobjekte](admin_book_list.png)

Von dieser Liste aus können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch, das Sie nicht wollen, auswählen, die _löschen…_ Aktion aus der _Aktionen_ Dropdown-Liste auswählen und dann die **Go**-Schaltfläche drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Schaltfläche drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, die unten gezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung der **Löschen**, **VERLAUF** und **AUF SEITE ANZEIGEN**-Schaltflächen (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Durch Klicken auf die **AUF SEITE ANZEIGEN**-Schaltfläche wird eine `NoReverseMatch` Ausnahme ausgelöst, da die `get_absolute_url()` Methode versucht, eine benannte URL-Mapping ('book-detail') zu `reverse()`, das noch nicht definiert wurde. Wir werden eine URL-Zuordnung und zugehörige Ansicht in [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views) definieren.

![Admin Site - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (mit dem _Startseite_-Link im Brotkrümelpfad) und schauen sich dann die **Autor**- und **Genre**-Listen an — Sie sollten bereits einige erstellt haben, wenn Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, noch mehr hinzuzufügen.

Was Sie nicht haben werden, sind irgendwelche _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Book` aus einer `BookInstance` erstellen können — dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um die Bildschirmanzeige _Buchinstanz hinzufügen_ unten anzuzeigen. Beachten Sie die große, weltweit einzigartige Id, die verwendet werden kann, um eine einzelne Kopie eines Buches in der Bibliothek separat zu identifizieren.

![Admin Site - BuchInstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Legen Sie den Status für mindestens einige Datensätze als _Verfügbar_ und für andere als _Ausgeliehen_ fest. Wenn der Status **nicht** _Verfügbar_ ist, legen Sie auch ein zukünftiges _Zurück erwartet_ Datum fest.

Das war's! Sie haben nun gelernt, wie man die Administrationsseite einrichtet und nutzt. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet gute Arbeit, um mit den registrierten Modellen eine grundlegende Admin-Seite zu erstellen:

- Jedes Modell hat eine Liste einzelner Datensätze, die durch den String identifiziert werden, der mit der `__str__()`-Methode des Modells erstellt wurde und mit Detailansichten/Formularen für die Bearbeitung verlinkt sind. Standardmäßig hat diese Ansicht ein Aktionsmenü oben, das Sie verwenden können, um Bulk-Delete-Operationen auf Datensätzen durchzuführen.
- Die Modellspeicherungsformulare für die Bearbeitung und Hinzufügung von Datensätzen enthalten alle Felder im Modell, vertikal in ihrer Deklarationsreihenfolge angeordnet.

Sie können die Schnittstelle weiter anpassen, um sie noch einfacher zu machen. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen für jeden Datensatz hinzufügen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze aufgelistet werden, basierend auf Datum oder einem anderen Auswahlwert (z. B. Buchausleihstatus).
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und auswählen, wo dieses Menü im Formular angezeigt wird.

- Detailansichten

  - Auswählen, welche Felder angezeigt (oder ausgeschlossen) werden sollen, zusammen mit ihrer Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, Ausrichtung etc.
  - Verwandte Felder zu einem Datensatz hinzufügen, um Inline-Bearbeitung zu ermöglichen (z. B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie deren Autorendatensatz erstellen).

In diesem Abschnitt werden wir einige Änderungen vornehmen, die die Schnittstelle für unsere _Lokale Bibliothek_ verbessern werden, einschließlich zusätzlicher Informationen zu `Book` und `Author` Modelllisten und Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Darstellung der `Language`- und `Genre`-Modelle nicht ändern, da sie nur ein Feld haben, sodass es keinen wirklichen Vorteil bringt, dies zu tun!

Eine vollständige Referenz aller Anpassungsoptionen der Admin-Seite finden Sie unter [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django Docs).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Schnittstelle angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) Klasse (die das Layout beschreibt) und registrieren diese mit dem Modell.

Beginnen wir mit dem `Author` Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung (präfixieren Sie sie mit einem #) für das `Author` Modell:

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AuthorAdmin` und Registrierung wie unten gezeigt hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Jetzt fügen wir `ModelAdmin`-Klassen für `Book`, und `BookInstance` hinzu. Wir müssen erneut die ursprünglichen Registrierungen kommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun erstellen und registrieren wir die neuen Modelle; zu Demonstrationszwecken werden wir stattdessen den `@register` Dekorator verwenden, um die Modelle zu registrieren (dies tut genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), daher wird das Admin-Verhalten unverändert bleiben! Wir können sie nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _Lokale Bibliothek_ listet derzeit alle Autoren mit dem Objektnamen auf, der aus der `__str__()`-Methode des Modells generiert wird. Das ist in Ordnung, wenn Sie nur ein paar Autoren haben, aber wenn es viele sind, können Sie Duplikate erhalten. Um sie zu unterscheiden oder einfach nur, weil Sie interessantere Informationen zu jedem Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der Ansicht zusätzliche Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse mit dem untenstehenden Code. Die anzuzeigenden Feldnamen in der Liste werden in einem _Tupel_ in der gewünschten Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die im Originalmodell angegeben wurden).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie nun zu der Autorenliste auf Ihrer Website. Die oben genannten Felder sollten nun wie folgt angezeigt werden:

![Admin Site - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book` Modell werden wir zusätzlich den `author` und `genre` anzeigen. Der `author` ist ein `ForeignKey`-Feld (eins-zu-viele) Beziehung und wird daher durch den `__str__()` Wert des zugehörigen Datensatzes dargestellt. Ersetzen Sie die `BookAdmin`-Klasse mit der folgenden Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es ein `ManyToManyField` ist (Django verhindert dies, da es mit hohen Datenbankzugriffskosten verbunden wäre). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir werden sie unten definieren).

> [!NOTE]
> Das `genre` hier zu erhalten, mag keine gute Idee sein, wegen der "Kosten" des Datenbankzugriffs. Wir zeigen Ihnen, wie das funktioniert, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um einen _Löschen_-Link neben jedem Listeneintrag hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book` Modell (**models.py**) ein. Dieser erstellt einen String aus den ersten drei Werten des `genre`-Feldes (sofern vorhanden) und erstellt eine `short_description`, die für diese Methode in der Admin-Seite verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und das aktualisierte Admin gespeichert haben, öffnen Sie Ihre Website und gehen zur _Bücher_-Listen-Seite; Sie sollten eine Bücherliste wie die unten stehende sehen:

![Admin Site - Verbesserte Bücherliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, wenn Sie eines definiert haben) haben beide nur ein Feld, sodass es keinen Sinn macht, ein zusätzliches Modell hinzuzufügen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es ist sinnvoll, die `BookInstance`-Modellliste zu aktualisieren, um mindestens den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, filtern zu können, welche Elemente angezeigt werden.
Dies wird erreicht, indem Felder im `list_filter`-Attribut aufgelistet werden.
Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse mit dem folgenden Codefragment.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht wird jetzt ein Filterfeld auf der rechten Seite beinhalten. Beachten Sie, wie Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin Site - Buchinstanz Listenfilter](admin_improved_bookinstance_list_filters.png)

### Layout der Detailansicht organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in ihrer Deklarationsreihenfolge fest. Sie können die Reihenfolge der Deklaration ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungswidgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die _Lokale Bibliothek_ Modelle sind relativ einfach, sodass es nicht dringend nötig ist, das Layout zu ändern; wir werden trotzdem einige Änderungen vornehmen, nur um Ihnen zu zeigen, wie.

#### Kontrolle, welche Felder angezeigt und wie sie angeordnet werden

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur diejenigen Felder auf, die im Formular angezeigt werden sollen, in der Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber sie werden horizontal angezeigt, wenn Sie sie weiter in einem Tupel gruppieren (wie in den "date"-Feldern oben gezeigt).

Gehen Sie zu Ihrer Website zur Autoren-Detailansicht — sie sollte nun wie unten gezeigt erscheinen:

![Admin Site - Verbessertes Autorendetail](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Sektionen im Detailansicht verwenden

Sie können "Sektionen" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) Attribut verwenden.

Im `BookInstance` Modell haben wir Informationen, die sich darauf beziehen, was das Buch ist (d. h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese zu unserer `BookInstanceAdmin` Klasse wie unten gezeigt hinzufügen, indem wir die `fieldsets` Eigenschaft verwenden.

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

Jede Sektion hat ihren eigenen Titel (oder `None`, wenn Sie keinen Titel möchten) und ein zugehöriges Tupel von Feldern in einem Wörterbuch — das Format ist kompliziert zu beschreiben, aber relativ einfach zu verstehen, wenn Sie sich das oben stehende Codefragment ansehen.

Navigieren Sie nun zu einer Buchinstanzansicht auf Ihrer Website; das Formular sollte wie unten gezeigt erscheinen:

![Admin Site - Verbesserte Buchinstanzdetails mit Sektionen](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung zugehöriger Datensätze

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Zum Beispiel könnte es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifischen Exemplare, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) deklarieren, vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, wie das Standardmodell-Layout). Sie können die `BookInstance` Informationen inline zu unserem `Book` Detail hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht für ein `Book` auf Ihrer Website — am unteren Rand sehen Sie nun die Buchinstanzen, die sich auf dieses Buch beziehen (direkt unter den Genre-Feldern des Buches):

![Admin Site - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder aus dem _inlined_ Modell hinzufügt. Sie können alle möglichen zusätzlichen Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Information).

> [!NOTE]
> Es gibt einige schmerzhafte Grenzen in dieser Funktionalität! Im obigen Screenshot haben wir drei bestehende Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, standardmäßig KEINE zusätzlichen Buchinstanzen zu haben und sie einfach mit dem Link **Add another Book instance** hinzuzufügen oder einfach die `BookInstance`-Elemente als nicht lesbare Links von hier aus aufzulisten. Die erste Option kann erreicht werden, indem das `extra` Attribut auf `0` im `BooksInstanceInline` Modell gesetzt wird, probieren Sie es selbst aus.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, also ist es jetzt an der Zeit, ein paar Dinge selbst zu versuchen.

1. Für die `BookInstance` Listenansicht fügen Sie Code hinzu, um das Buch, den Status, das Rückgabedatum und die Id anzuzeigen (anstatt des Standard-`__str__()` Textes).
2. Fügen Sie eine Inline-Auflistung von `Book` Elementen zur `Author` Detailansicht hinzu, indem Sie denselben Ansatz verwenden, den wir für `Book`/`BookInstance` verwendet haben.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie man die Administrationsseite sowohl in ihrer einfachsten als auch verbesserten Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Seite navigiert und Datensätze anzeigt, löscht und aktualisiert. Auf dem Weg haben Sie eine Menge Bücher, Buchinstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Writing your first Django app, part 2: Introducing the Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django Docs)
- [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django Docs)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}
