---
title: "Django Tutorial Teil 4: Django-Admin-Seite"
short-title: "4: Django-Admin-Seite"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Da wir nun Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, werden wir die Django-Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich einloggen und einige Daten erstellen können. Am Ende des Artikels werden wir einige Möglichkeiten zeigen, wie Sie die Präsentation der Admin-Seite weiter verbessern können.

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
        Um die Vorteile und Einschränkungen der Django-Admin-Seite zu verstehen und sie zu verwenden, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django-Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Website-Bereich zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen verwenden können. Dies kann Ihnen während der Entwicklung viel Zeit sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch nützlich für die Datenverwaltung in der Produktion sein, abhängig von der Art der Website. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d.h. nur zur Verwendung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Schnittstelle für alle Benutzer ist und viele unnötige Details über die Modelle preisgibt.

Alle Konfigurationen, die erforderlich sind, um die Admin-Anwendung in Ihre Website aufzunehmen, wurden automatisch durchgeführt, als Sie [das Gerüstprojekt erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben (für Informationen über die tatsächlichen benötigten Abhängigkeiten siehe die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Als Ergebnis müssen Sie nur **Ihre Modelle bei der Admin-Anwendung registrieren**, um sie hinzuzufügen. Am Ende dieses Artikels werden wir eine kurze Demonstration geben, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser anzuzeigen.

Nachdem Sie die Modelle registriert haben, zeigen wir Ihnen, wie Sie einen neuen "Superuser" erstellen, sich auf der Seite einloggen und einige Bücher, Autoren, Buchinstanzen und Genres erstellen können. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Registrieren von Modellen

Öffnen Sie zuerst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Derzeit sieht es so aus — beachten Sie, dass es bereits `django.contrib.admin` importiert:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text am Ende der Datei einfügen. Dieser Code importiert die Modelle und ruft dann `admin.site.register` auf, um jedes von ihnen zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches darstellt ([siehe den Modell-Tutorial-Artikel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder mehrere Modelle auf der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten zur Registrierung Ihrer Modelle sprechen.

## Erstellen eines Superusers

Um sich bei der Admin-Seite einzuloggen, benötigen wir ein Benutzerkonto mit aktivierten _Mitarbeiter_-Status. Um Datensätze anzuzeigen und zu erstellen, müssen diesem Benutzer auch Berechtigungen erteilt werden, all unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Seite und alle benötigten Berechtigungen hat, indem Sie **manage.py** verwenden.

Rufen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wird ein neuer Superuser zur Datenbank hinzugefügt worden sein. Starten Sie nun den Entwicklungsserver neu, damit wir den Login testen können:

```bash
python3 manage.py runserver
```

## Einloggen und Nutzung der Seite

Um sich auf der Seite einzuloggen, öffnen Sie die URL _/admin_ (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihren neuen Superuser-Benutzernamen und Passwort ein (Sie werden zur _Login_-Seite weitergeleitet und dann zurück zur _/admin_-URL, nachdem Sie Ihre Daten eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um einen Datensatz dieses Typs zu erstellen.

![Admin-Site - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts neben _Bücher_, um ein neues Buch zu erstellen (dies zeigt einen Dialog ähnlich dem unten an). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) mit den im Modell angegebenen Werten übereinstimmen.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+** Schaltfläche neben den jeweiligen Feldern drücken (oder vorhandene Werte aus den Listen auswählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, können Sie auf **SPEICHERN**, **Speichern und weiteres hinzufügen** oder **Speichern und weiter bearbeiten** klicken, um den Datensatz zu speichern.

![Admin-Site - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie etwas Zeit damit verbringen, einige Bücher, Autoren, Sprachen und Genres (z.B. Fantasy) zu Ihrer Anwendung hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher umfasst (dies macht Ihre Listen- und Detailansichten interessanter, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den **Start**-Link im oberen Lesezeichen, um zurück zur Haupt-Admin-Seite zu gelangen. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modellsammlungen zu sehen). Jetzt, da Sie ein paar Bücher hinzugefügt haben, könnte die Liste ähnlich dem unten abgebildeten Screenshot aussehen. Der Titel jedes Buches wird angezeigt; dies ist der im letzten Artikel angegebene Rückgabewert in der `__str__()` Methode des Buchmodells.

![Admin-Site - Liste der Buchobjekte](admin_book_list.png)

Aus dieser Liste können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht möchten, die _löschen…_ Aktion aus der _Aktion_-Dropdown-Liste auswählen und dann die **Los**-Schaltfläche drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Schaltfläche drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, die unten angezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und das Hinzufügen von **Löschen**, **VERLAUF** und **AUF SEITE ANZEIGEN**-Schaltflächen (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()` Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF SEITE ANZEIGEN**-Schaltfläche löst eine `NoReverseMatch` Ausnahme aus, da die `get_absolute_url()` Methode versucht, eine benannte URL-Zuordnung ('buch-detail') zu `reverse()`, die noch nicht definiert wurde.
> Wir werden eine URL-Zuordnung und zugehörige Ansicht im [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) definieren.

![Admin-Site - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (verwenden Sie den _Start_-Link in der Breadcrumb-Navigation) und sehen Sie sich dann die **Autor**- und **Genre**-Listen an — Sie sollten bereits einige erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, weitere hinzuzufügen.

Was Sie nicht haben werden, sind irgendwelche _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Buch` aus einer `Buchinstanz` erstellen können — dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Start_-Seite und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den unten stehenden _Buchinstanz hinzufügen_ Bildschirm anzuzeigen. Beachten Sie die große, global eindeutige ID, die verwendet werden kann, um eine einzelne Kopie eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Site - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, setzen Sie auch ein zukünftiges _Zurückerwartet_-Datum.

Das war's! Sie haben nun gelernt, wie Sie die Verwaltungsseite einrichten und nutzen. Sie haben auch Datensätze für `Buch`, `Buchinstanz`, `Genre`, `Sprache` und `Autor` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet gute Arbeit dabei, eine grundlegende Admin-Seite anhand der Informationen aus den registrierten Modellen zu erstellen:

- Jedes Modell hat eine Liste von einzelnen Datensätzen, die durch die mit der `__str__()` Methode des Modells erstellte Zeichenkette identifiziert werden, und verlinkt mit Detailansichten/-formularen zur Bearbeitung. Standardmäßig hat diese Ansicht ein Aktionsmenü oben, das Sie verwenden können, um Massenlöschoperationen auf Datensätzen durchzuführen.
- Die Modellspezifischen Datensatzformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell, vertikal angeordnet in der Reihenfolge der Deklaration.

Sie können die Benutzeroberfläche weiter anpassen, um sie noch benutzerfreundlicher zu machen. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:
  - Weitere Felder/Informationen für jeden Datensatz anzeigen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus) aufgelistet werden.
  - Weitere Optionen im Aktionsmenü in Listenansichten hinzufügen und auswählen, wo dieses Menü im Formular angezeigt wird.

- Detailansichten
  - Auswählen, welche Felder angezeigt (oder ausgeschlossen) werden sollen, sowie deren Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, Ausrichtung usw.
  - Zu einem Datensatz gehörende Felder hinzufügen, um eine Inline-Bearbeitung zu ermöglichen (z.B. die Möglichkeit hinzuzufügen und Bücher zu bearbeiten, während Sie das Autorendatensatz erstellen).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Benutzeroberfläche unserer _LocalLibrary_ verbessern, einschließlich der Anzeige weiterer Informationen in `Buch`- und `Autor`-Modelllisten und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation der `Sprache`- und `Genre`-Modelle nicht ändern, da sie jeweils nur ein Feld haben und es daher keinen wirklichen Nutzen hat, dies zu tun!

Sie finden eine vollständige Referenz aller Anpassungsmöglichkeiten der Admin-Seite unter [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation).

### Registrieren einer ModelAdmin-Klasse

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) Klasse (die das Layout beschreibt) und registrieren sie beim Modell.

Beginnen wir mit dem `Autor`-Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie die ursprüngliche Registrierung (beginnen mit einem #) für das `Autor`-Modell aus:

```python
# admin.site.register(Author)
```

Fügen Sie nun ein neues `AuthorAdmin` und die Registrierung wie unten gezeigt hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Nun fügen wir `ModelAdmin`-Klassen für `Buch` und `Buchinstanz` hinzu. Wir müssen wiederum die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun zur Erstellung und Registrierung der neuen Modelle; für den Zweck dieser Demonstration verwenden wir stattdessen den `@register`-Decorator, um die Modelle zu registrieren (dies tut genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass das Admin-Verhalten unverändert bleibt! Wir können diese nun erweitern, um unser modell-spezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mit dem von der `__str__()` Methode des Modells erzeugten Objektname. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber sobald Sie viele haben, können Sie Duplikate erhalten. Um sie zu unterscheiden, oder einfach, weil Sie interessantere Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der Ansicht zusätzliche Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den unten stehenden Code. Die anzuzeigenden Feldnamen werden in einem _Tuple_ in der erforderlichen Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die in Ihrem ursprünglichen Modell angegeben wurden).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie nun zur Autorenliste auf Ihrer Website. Die oben genannten Felder sollten nun angezeigt werden, wie folgt:

![Admin-Site - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Buch`-Modell zeigen wir zusätzlich den `Autor` und das `Genre` an. Der `Autor` ist ein `ForeignKey`-Feld (ein-zu-viele-Beziehung) und wird daher durch den `__str__()` Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die unten stehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `Genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, da dies einen großen Datenbankzugriff "Kosten" verursachen würde). Stattdessen werden wir eine `display_genre` Funktion definieren, um die Informationen als Zeichenkette zu erhalten (dies ist die Funktion, die wir oben aufrufen; wir werden sie unten definieren).

> [!NOTE]
> Das Abrufen des `Genre`-Feldes ist hier möglicherweise keine gute Idee, aufgrund der "Kosten" der Datenbankoperation. Wir zeigen Ihnen, wie, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann — zum Beispiel, um einen _Löschen_ Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Buch`-Modell (**models.py**) ein. Dies erstellt eine Zeichenkette aus den ersten drei Werten des `Genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die auf der Admin-Seite für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nach dem Speichern des Modells und der aktualisierten Admin-Seite öffnen Sie Ihre Website und gehen Sie zur _Bücher_-Listen-Seite; Sie sollten eine Buchliste sehen, wie unten dargestellt:

![Admin-Site - Verbesserte Buchliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Sprache`-Modell, falls Sie eines definiert haben) haben beide nur ein Feld, daher macht es keinen Sinn, ein zusätzliches Modell dafür zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `Buchinstanz`-Modellliste zu aktualisieren, um zumindest den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das am Ende dieses Artikels als Herausforderung hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, filtern zu können, welche Elemente angezeigt werden.
Dies wird durch Auflisten von Feldern im Attribut `list_filter` erreicht.
Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den folgenden Code-Ausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht enthält nun ein Filterfeld rechts. Beachten Sie, wie Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin-Site - Buchinstanz-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Layout der Detailansicht organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in der Reihenfolge der Deklaration im Modell an. Sie können die Reihenfolge der Deklaration ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar welche Bearbeitungswidgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die _LocalLibrary_ Modelle sind relativ einfach, sodass es keinen großen Bedarf gibt, das Layout zu ändern; wir werden dennoch einige Änderungen vornehmen, nur um Ihnen zu zeigen, wie.

#### Steuerung der angezeigten und angeordneten Felder

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das Attribut `fields` listet nur die Felder auf, die im Formular angezeigt werden sollen, in der Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber sie werden horizontal angezeigt, wenn Sie sie weiter in einem Tuple gruppieren (wie in den "Datum"-Feldern oben gezeigt).

Auf Ihrer Website gehen Sie zur Autoren-Detailansicht — sie sollte jetzt wie unten angezeigt werden:

![Admin-Site - Verbesserte Autorendetailansicht](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das Attribut `exclude` verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Gliederung der Detailansicht

Sie können "Abschnitte" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das Attribut [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) verwenden.

Im `Buchinstanz`-Modell haben wir Informationen darüber, was das Buch ist (d.h. `Name`, `Prägung` und `id`) und wann es verfügbar sein wird (`Status`, `zurück_erwartet`). Wir können diese in unsere `BookInstanceAdmin`-Klasse hinzufügen, wie unten gezeigt, indem wir die `fieldsets`-Eigenschaft verwenden.

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

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, wenn Sie keinen Titel möchten) und ein zugeordnetes Tuple von Feldern in einem Dictionary — das Format ist kompliziert zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie sich den Codeausschnitt oben ansehen.

Navigieren Sie nun zu einer Buchinstanz-Ansicht auf Ihrer Website; das Formular sollte wie unten gezeigt angezeigt werden:

![Admin-Site - Verbesserte Buchinstanz-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung zugehöriger Datensätze

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzuzufügen. Beispielsweise kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifischen Exemplare, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [Inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) deklarieren, vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, genau wie das Standardmodell-Layout). Sie können die `Buchinstanz`-Informationen inline zu unserem `Buch`-Detail hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht für ein `Buch` auf Ihrer Website — am Ende sollten Sie nun die Buchinstanzen sehen können, die zu diesem Buch gehören (direkt unter den Buchgenre-Feldern):

![Admin-Site - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir einfach unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder des _eingefügten_ Modells hinzufügt. Sie können alle möglichen zusätzlichen Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, deren Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzhafte Grenzen in dieser Funktionalität! Im obigen Screenshot haben wir drei vorhandene Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, standardmäßig KEINE Ersatzbuchinstanzen zu haben und sie einfach mit dem **Füge eine weitere Buchinstanz hinzu**-Link hinzuzufügen, oder die `BookInstance`s einfach als nicht lesbare Links von hier aufzulisten. Die erste Option kann durch Einstellen des `extra`-Attributes auf `0` im `BooksInstanceInline`-Modell erreicht werden, versuchen Sie es selbst.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, also ist es jetzt an der Zeit, dass Sie ein paar Dinge ausprobieren.

1. Fügen Sie in der `Buchinstanz`-Listenansicht Code hinzu, um das Buch, den Status, das Rückgabedatum und die ID anzuzeigen (anstatt des Standard-`__str__()`-Textes).
2. Fügen Sie eine Inline-Auflistung von `Buch`-Elementen zur `Autor`-Detailansicht hinzu, indem Sie denselben Ansatz wie bei `Buch`/`Buchinstanz` verwenden.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie Sie die Verwaltungsseite sowohl in ihrer einfachsten als auch in ihrer verbesserten Form einrichten, wie Sie einen Superuser erstellen und wie Sie die Admin-Seite navigieren und Datensätze anzeigen, löschen und aktualisieren können. Unterwegs haben Sie eine Menge Bücher, Buchinstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Erstellen Ihrer ersten Django-App, Teil 2: Einführung in den Django-Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)
- [Die Django-Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
