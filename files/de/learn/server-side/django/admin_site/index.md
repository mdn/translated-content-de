---
title: "Django-Tutorial Teil 4: Django-Admin-Seite"
slug: Learn/Server-side/Django/Admin_site
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

Jetzt, da wir Modelle für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Webseite erstellt haben, werden wir die Django-Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn/Server-side/Django/Models"
          >Django-Tutorial Teil 3: Verwendung von Modellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die Vorteile und Einschränkungen der Django-Admin-Seite zu verstehen und sie zu nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Django-Admin-_Anwendung_ kann Ihre Modelle nutzen, um automatisch einen Seitenbereich zu erstellen, den Sie verwenden können, um Datensätze zu erstellen, anzuzeigen, zu aktualisieren und zu löschen. Dies kann Ihnen viel Zeit während der Entwicklung sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch zur Datenverwaltung im Produktionsbetrieb nützlich sein, je nach Art der Website. Das Django-Projekt empfiehlt sie jedoch nur für die interne Datenverwaltung (d. h. nur zur Verwendung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Schnittstelle für alle Benutzer darstellt und viele unnötige Details über die Modelle preisgibt.

Alle Konfigurationen, die erforderlich sind, um die Admin-Anwendung in Ihre Website einzubeziehen, wurden automatisch durchgeführt, als Sie das [Skelettprojekt erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website) (Informationen zu den tatsächlichen Abhängigkeiten finden Sie in den [Django-Dokumentationen hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Als Ergebnis müssen Sie nur Ihre Modelle _registrieren_, um sie der Admin-Anwendung hinzuzufügen. Am Ende dieses Artikels bieten wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nachdem wir die Modelle registriert haben, zeigen wir, wie man einen neuen "Superuser" erstellt, sich auf der Seite anmeldet und einige Bücher, Autoren, Buchinstanzen und Genres erstellt. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Es sieht derzeit so aus – beachten Sie, dass es bereits `django.contrib.admin` importiert:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text am Ende der Datei einfügen. Dieser Code importiert die Modelle und ruft dann `admin.site.register` auf, um jedes davon zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches darstellt ([siehe den Artikel zum Tutorial über Modelle](/de/docs/Learn/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle bei der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten sprechen, Ihre Modelle zu registrieren.

## Einen Superuser erstellen

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiter_-Status. Um Datensätze anzuzeigen und zu erstellen, benötigen wir auch Berechtigungen für diesen Benutzer, um alle unsere Objekte zu verwalten. Sie können ein „Superuser“-Konto erstellen, das vollen Zugriff auf die Seite und alle erforderlichen Berechtigungen über **manage.py** hat.

Rufen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde ein neuer Superuser in die Datenbank aufgenommen. Starten Sie nun den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmeldung und Nutzung der Seite

Um sich auf der Seite anzumelden, öffnen Sie die _/admin_ URL (z. B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-User-ID und Passwort-Anmeldedaten ein (Sie werden auf die _Login_-Seite weitergeleitet und dann zurück zur _/admin_ URL, nachdem Sie Ihre Daten eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um mit der Erstellung eines Datensatzes dieses Typs zu beginnen.

![Admin Site - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts von _Büchern_, um ein neues Buch zu erstellen (dies zeigt einen Dialog ähnlich dem unten angezeigten). Beachten Sie, wie sich die Titel jedes Feldes, die verwendete Widget-Art und der `help_text` (falls vorhanden) an den Werten orientieren, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+**-Taste neben den jeweiligen Feldern drücken (oder bereits vorhandene Werte aus den Listen auswählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin Site - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie etwas Zeit damit verbringen, Ihrer Anwendung einige Bücher, Autoren, Sprachen und Genres hinzuzufügen (z. B. Fantasy). Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den **Startseite**-Link im obersten Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Dann klicken Sie auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten zu sehen). Jetzt, da Sie einige Bücher hinzugefügt haben, könnte die Liste ähnlich dem untenstehenden Screenshot aussehen. Der Titel jedes Buches wird angezeigt; Dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, den wir im letzten Artikel angegeben haben.

![Admin Site - Liste der Buchobjekte](admin_book_list.png)

Sie können Bücher aus dieser Liste löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht wollen, die Aktion _löschen…_ aus der _Aktion_-Dropdown-Liste auswählen und dann die **Los**-Taste drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Taste drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, die unten gezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung der **Löschen**, **VERLAUF** und **AUF DIE SEITE ANZEIGEN** Knöpfe (dieser letzte Knopf erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF DIE SEITE ANZEIGEN**-Schaltfläche löst eine `NoReverseMatch`-Ausnahme aus, da die `get_absolute_url()`-Methode versucht, eine _reverse()_-zugeordnete URL-Abbildung ('book-detail') durchzuführen, die noch nicht definiert wurde.
> Wir definieren eine URL-Zuordnung und die dazugehörige Ansicht im [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views).

![Admin Site - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie jetzt zurück zur **Startseite** (über den _Startseite_-Link in der Breadcrumb-Navigation) und sehen Sie die Listen **Autor** und **Genre** an — Sie sollten bereits einige erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fügen Sie bei Bedarf gerne noch mehr hinzu.

Was Sie nicht haben werden, sind _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Buch` aus einer `Buchinstanz` erstellen können — dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den _Buchinstanz hinzufügen_-Bildschirm unten anzuzeigen. Beachten Sie die große, global eindeutige ID, die verwendet werden kann, um eine einzelne Kopie eines Buches in der Bibliothek separat zu identifizieren.

![Admin Site - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, setzen Sie auch ein zukünftiges _Fälligkeitsdatum_.

Das war's! Sie haben jetzt gelernt, wie Sie die Administrationsseite einrichten und verwenden. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django erledigt einen ziemlich guten Job beim Erstellen einer grundlegenden Admin-Seite mit den Informationen aus den registrierten Modellen:

- Jedes Modell verfügt über eine Liste einzelner Datensätze, identifiziert durch den String, der mit der `__str__()`-Methode des Modells erstellt wurde, und verlinkt zu Detailansichten/-formularen zur Bearbeitung. Standardmäßig verfügt diese Ansicht über ein Aktionsmenü oben, das Sie verwenden können, um Massenlöschvorgänge für Datensätze durchzuführen.
- Die Modell-Detail-Formulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell, vertikal in ihrer Deklarationsreihenfolge angeordnet.

Sie können die Schnittstelle weiter anpassen, um die Nutzung noch einfacher zu machen. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen, die für jeden Datensatz angezeigt werden.
  - Filter hinzufügen, um auszuwählen, welche Datensätze aufgelistet werden, basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus).
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und entscheiden, wo dieses Menü im Formular angezeigt wird.

- Detailansichten:

  - Wählen Sie aus, welche Felder angezeigt werden (oder auszuschließen sind), sowie deren Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, die Orientierung usw.
  - Verwandte Felder zu einem Datensatz hinzufügen, um Inline-Bearbeitung zu ermöglichen (z.B. hinzufügen und bearbeiten von Buchdatensätzen, während Sie deren Autordatei erstellen).

In diesem Abschnitt werden wir einige Änderungen vornehmen, die die Schnittstelle für unsere _LocalLibrary_ verbessern, einschließlich dem Hinzufügen weiterer Informationen zu `Book` und `Author` Modelllisten und der Verbesserung ihrer Bearbeitungsansichtslayouts. Wir werden die `Language`- und `Genre`-Modellpräsentation nicht ändern, da sie jeweils nur ein Feld haben, sodass dies keinen wirklichen Vorteil bringt!

Eine vollständige Referenz aller Anpassungsoptionen für die Admin-Seite finden Sie in [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) Klasse (die das Layout beschreibt) und registrieren Sie sie mit dem Modell.

Beginnen wir mit dem `Author`-Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung (prefix mit einem #) für das `Author`-Modell aus:

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AuthorAdmin` hinzu und registrieren Sie sie wie unten gezeigt.

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

Jetzt um die neuen Modelle zu erstellen und zu registrieren; für den Zweck dieser Demonstration verwenden wir stattdessen den `@register`-Dekorator, um die Modelle zu registrieren (dies macht genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), daher bleibt das Admin-Verhalten unverändert! Wir können diese nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mit dem Objektnamen auf, der aus der `__str__()`-Methode des Modells generiert wurde. Das ist in Ordnung, wenn Sie nur wenige Autoren haben, aber sobald Sie viele haben, könnten Sie Duplikate bekommen. Um sie zu unterscheiden, oder einfach weil Sie interessantere Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um zusätzliche Felder zur Ansicht hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den untenstehenden Code. Die anzuzeigenden Feldnamen werden in einer _Tuple_ in der erforderlichen Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die in Ihrem ursprünglichen Modell angegeben sind).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie jetzt zur Autorenliste auf Ihrer Website. Die obigen Felder sollten jetzt angezeigt werden, wie unten gezeigt:

![Admin Site - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book`-Modell werden wir zusätzlich den `author` und das `genre` anzeigen. Der `author` ist ein `ForeignKey`-Feld (Eins-zu-Viele-Beziehung) und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die untenstehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es ein `ManyToManyField` ist (Django verhindert dies, da es eine große Datenbankzugriffskosten bedeuten würde). Stattdessen definieren wir eine `display_genre` Funktion, um die Informationen als String zu erhalten (dies ist die oben genannte Funktion, die wir unten definieren werden).

> [!NOTE]
> Das Abrufen des `genre` ist hier möglicherweise keine gute Idee, aufgrund der „Kosten“ der Datenbankoperation. Wir zeigen Ihnen, wie es geht, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um einen _Lösch_-Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book`-Modell ein (**models.py**). Dies erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die auf der Admin-Seite für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und das aktualisierte Admin gespeichert haben, öffnen Sie Ihre Website und gehen Sie zur _Bücher_-Listen-Seite; Sie sollten eine Bücherliste wie die untenstehende sehen:

![Admin Site - Verbesserte Bücherliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, wenn Sie eines definiert haben) haben jeweils nur ein Feld, daher ist es sinnlos, ein zusätzliches Modell für sie zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BookInstance`-Modellliste zu aktualisieren, um mindestens den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, filtern zu können, welche Elemente angezeigt werden.
Dies wird erreicht, indem Felder im `list_filter`-Attribut aufgelistet werden.
Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch das folgende Codefragment.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht wird jetzt ein Filterfeld auf der rechten Seite enthalten. Beachten Sie, wie Sie Daten und Status wählen können, um die Werte zu filtern:

![Admin Site - Buchinstanz Listenfilter](admin_improved_bookinstance_list_filters.png)

### Layout der Detailansicht organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in ihrer Deklarationsreihenfolge aus. Sie können die Deklarationsreihenfolge, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte genutzt werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden, ändern.

> [!NOTE]
> Die _LocalLibrary_ Modelle sind relativ einfach, daher besteht nicht unbedingt ein großer Bedarf, das Layout zu ändern; wir werden jedoch einige Änderungen vornehmen, um Ihnen zu zeigen, wie es geht.

#### Kontrolle, welche Felder angezeigt und angeordnet sind

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields` Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur die Felder auf, die in dem Formular angezeigt werden sollen, in der angegebenen Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber sie werden horizontal angezeigt, wenn Sie sie weiter in einem Tuple gruppieren (wie bei den „Datum“-Feldern oben gezeigt).

Gehen Sie auf Ihrer Website zur Autorendetailansicht — sie sollte nun wie unten angezeigt werden:

![Admin Site - Verbesserte Autorendetail](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen anzugeben, die im Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Die Detailansicht sectionieren

Sie können „Abschnitte“ hinzufügen, um verwandte Modellinformationen im Detailformular zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) Attribut verwenden.

Im `BookInstance` Modell haben wir Informationen darüber, was das Buch ist (d. h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese zu unserer `BookInstanceAdmin`-Klasse hinzufügen, wie unten gezeigt, indem wir das `fieldsets`-Attribut verwenden.

```python
@admin.register(BookInstance)
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')

    fieldsets = (
        (None, {
            'fields': ('book', 'imprint', 'id')
        }),
        ('Verfügbarkeit', {
            'fields': ('status', 'due_back')
        }),
    )
```

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, falls Sie keinen Titel möchten) und ein zugeordnetes Tuple von Feldern in einem Dictionary — das Format ist kompliziert zu beschreiben, aber ziemlich leicht zu verstehen, wenn Sie das obenstehende Codefragment betrachten.

Navigieren Sie nun zu einer Buchinstanz-Ansicht auf Ihrer Website; das Formular sollte wie unten gezeigt angezeigt werden:

![Admin Site - Verbesserte Buchinstanzdetail mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeiten von zugehörigen Datensätzen

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise könnte es sinnvoll sein, sowohl die Buchinformationen als auch Informationen zu den spezifischen Kopien, die Sie besitzen, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [Inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontale Anordnung) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikale Anordnung, genau wie das Standardmodell-Layout) deklarieren. Sie können die `BookInstance`-Informationen inline zu unserem Buchdetail hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht für ein `Buch` auf Ihrer Website — am unteren Rand sollten Sie jetzt die Buchinstanzen sehen, die sich auf dieses Buch beziehen (unmittelbar unter den Genre-Feldern des Buches):

![Admin Site - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder des _inlined_ Modells hinzufügt. Sie können alle möglichen zusätzlichen Informationen für das Layout angeben, einschließlich der Felder, die angezeigt werden sollen, deren Reihenfolge, ob sie nur gelesen werden können oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzliche Grenzen in dieser Funktionalität! Im obigen Screenshot haben wir drei bestehende Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, wenn standardmäßig KEINE freien Buchinstanzen vorhanden wären und diese einfach mit dem **Buchinstanz hinzufügen**-Link hinzugefügt werden könnten, oder die `BookInstance`s einfach nur lesbare Links von hier wären. Die erste Option kann durchgeführt werden, indem das `extra`-Attribut in `BooksInstanceInline`-Modell auf `0` gesetzt wird, versuchen Sie es selbst.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, also ist es jetzt an der Zeit, dass Sie einige Dinge ausprobieren.

1. Für die `BookInstance` Listenansicht, fügen Sie Code hinzu, um das Buch, den Status, das Rückgabedatum und die ID anzuzeigen (anstatt der Standard-`__str__()`-Text).
2. Fügen Sie eine Inline-Liste von `Buch`-Elementen zur `Author` Detailansicht hinzu, indem Sie denselben Ansatz verwenden, den wir für `Buch`/`Buchinstanz` verwendet haben.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie Sie die Administrationsseite sowohl in ihrer einfachsten als auch verbesserten Form einrichten, wie Sie einen Superuser erstellen und wie Sie die Admin-Seite navigieren sowie Datensätze ansehen, löschen und aktualisieren. Auf dem Weg haben Sie eine Menge Bücher, Buchinstanzen, Genres und Autoren erstellt, die wir anzeigen und auflisten können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Schreiben Ihrer ersten Django-App, Teil 2: Einführung in das Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumente)
- [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}
