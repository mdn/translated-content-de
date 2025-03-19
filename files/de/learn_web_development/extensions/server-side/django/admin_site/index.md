---
title: "Django-Tutorial Teil 4: Django-Admin-Seite"
short-title: "4: Django-Admin-Seite"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir nun Modelle für die [Lokalbibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) erstellt haben, werden wir die Django-Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models">Django-Tutorial Teil 3: Modelle verwenden</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Vorteile und Einschränkungen der Django-Admin-Seite verstehen und diese nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Django-Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Website-Bereich zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen verwenden können. Dies kann während der Entwicklung viel Zeit sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch für die Datenverwaltung in der Produktion nützlich sein, je nach Art der Website. Das Django-Projekt empfiehlt jedoch, sie nur für die interne Datenverwaltung zu verwenden (d.h. nur für die Nutzung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Benutzeroberfläche für alle Benutzer darstellt und viele unnötige Details über die Modelle preisgibt.

Die gesamte Konfiguration, die zum Einbinden der Admin-Anwendung in Ihre Website erforderlich war, wurde automatisch erstellt, als Sie das [Gerüstprojekt erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (für Informationen über die tatsächlichen Abhängigkeiten siehe die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie lediglich Ihre Modelle _registrieren_, um sie zur Admin-Anwendung hinzuzufügen. Am Ende dieses Artikels geben wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nachdem wir die Modelle registriert haben, zeigen wir, wie Sie einen neuen "Superuser" erstellen, sich auf der Seite anmelden und einige Bücher, Autoren, Buchinstanzen und Genres erstellen können. Diese werden nützlich sein, um die Ansichten und Templates zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zuerst **admin.py** in der Katalog-Anwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Derzeit sieht es so aus – beachten Sie, dass es bereits `django.contrib.admin` importiert:

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
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches darstellt ([siehe den Artikel über Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, um ein Modell oder mehrere Modelle auf der Seite zu registrieren. Die Admin-Seite ist stark anpassbar, und wir werden später im Artikel mehr über die anderen Möglichkeiten der Registrierung Ihrer Modelle sprechen.

## Einen Superuser erstellen

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiter_-Status. Um Datensätze anzuzeigen und zu erstellen, benötigen wir außerdem, dass dieser Benutzer Berechtigungen hat, um alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Seite und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Führen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** aus, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmelden und die Seite verwenden

Um sich auf der Seite anzumelden, öffnen Sie die _/admin_-URL (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-Benutzer- und Passwort-Zugangsdaten ein (Sie werden auf die _Login_-Seite weitergeleitet und dann nach Eingabe Ihrer Daten zurück zur _/admin_-URL).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den Link **Hinzufügen** neben jedem Modell klicken, um einen Datensatz dieses Typs zu erstellen.

![Admin-Seite - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts von _Bücher_, um ein neues Buch zu erstellen (dies zeigt einen Dialog wie den unten). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie auf die **+**-Schaltfläche neben den jeweiligen Feldern drücken (oder bestehende Werte aus den Listen auswählen, wenn Sie sie bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie etwas Zeit damit verbringen, Ihrer Anwendung einige Bücher, Autoren, Sprachen und Genres (z. B. Fantasy) hinzuzufügen. Achten Sie darauf, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie fertig sind, Bücher hinzuzufügen, klicken Sie auf den **Home**-Link im oberen Lesezeichen, um zurück zur Haupt-Admin-Seite zu gelangen. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten anzuzeigen). Wenn Sie nun einige Bücher hinzugefügt haben, sieht die Liste vielleicht ähnlich aus wie der untenstehende Screenshot. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, die wir im letzten Artikel spezifiziert haben.

![Admin-Seite - Liste der Buchobjekte](admin_book_list.png)

Aus dieser Liste können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht möchten, die _löschen..._-Aktion aus der _Aktion_-Dropdownliste auswählen und dann die **Los**-Schaltfläche drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Schaltfläche drücken.

Sie können ein Buch bearbeiten, indem Sie auf dessen Namen im Link klicken. Die Bearbeitungsseite für ein Buch, die unten gezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung von **Löschen**, **VERLAUF** und **AUF WEBSITE ANZEIGEN**-Schaltflächen (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF WEBSITE ANZEIGEN**-Schaltfläche erzeugt eine `NoReverseMatch`-Ausnahme, da die `get_absolute_url()`-Methode versucht, eine benannte URL-Zuordnung ('book-detail') `reverse()` durchzuführen, die noch nicht definiert wurde.
> Wir werden eine URL-Zuordnung und die zugehörige Ansicht in [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) definieren.

![Admin-Seite - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (mit dem Link _Home_ im Breadcrumb-Trail) und betrachten Sie dann die **Autoren**- und **Genre**-Listen — Sie sollten bereits eine ganze Menge erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, einige weitere hinzuzufügen.

Was Sie nicht haben werden, sind _Buchexemplare_, weil diese nicht von Büchern erstellt werden (obwohl Sie ein `Book` von einem `BookInstance` erstellen können — das ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie den zugehörigen **Hinzufügen**-Button, um das Bildschirm _Buchinstanz hinzufügen_ unten anzuzeigen. Beachten Sie die große, weltweit eindeutige ID, die verwendet werden kann, um ein einzelnes Exemplar eines Buches in der Bibliothek zu identifizieren.

![Admin-Seite - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Reihe dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status als _Verfügbar_ für mindestens einige Datensätze und _Ausgeliehen_ für andere. Wenn der Status **nicht** _Verfügbar_ ist, dann setzen Sie auch ein zukünftiges _Fälligkeitsdatum_.

Das war's! Sie haben nun gelernt, wie man die Admin-Seite einrichtet und verwendet. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet gute Arbeit bei der Erstellung einer grundlegenden Admin-Seite unter Verwendung der Informationen aus den registrierten Modellen:

- Jedes Modell hat eine Liste von einzelnen Datensätzen, die durch den mit der `__str__()`-Methode des Modells erstellten String identifiziert sind und in einem Detailansichtsformular zum Bearbeiten verknüpft sind. Standardmäßig hat diese Ansicht oben ein Aktionsmenü, mit dem Sie Massenlöschvorgänge an Datensätzen durchführen können.
- Die Modellausschnittformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle im Modell enthaltenen Felder, die vertikal in deren Deklarationsreihenfolge angeordnet sind.

Sie können die Oberfläche weiter anpassen, um sie noch benutzerfreundlicher zu machen. Einige Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen zu jedem Datensatz hinzufügen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze aufgelistet werden, basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus).
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und wählen, wo dieses Menü im Formular angezeigt wird.

- Detailansichten

  - Wählen, welche Felder angezeigt (oder ausgeschlossen), in welcher Reihenfolge, gruppiert, bearbeitet werden können, welches Widget verwendet wird, Ausrichtung usw.
  - Verwandte Felder zu einem Datensatz hinzufügen, um eine Inline-Bearbeitung zu ermöglichen (z.B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie deren Autorendatensatz erstellen).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Oberfläche für unsere _LocalLibrary_ verbessern, einschließlich der Hinzufügung weiterer Informationen zu `Book`- und `Author`-Modelllisten und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation des `Language`- und `Genre`-Modells nicht ändern, da sie jeweils nur ein Feld haben, sodass kein wirklicher Nutzen besteht!

Sie finden eine vollständige Referenz aller Anpassungsmöglichkeiten der Admin-Seite in [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects)-Klasse (die das Layout beschreibt) und registrieren es mit dem Modell.

Beginnen wir mit dem `Author`-Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung für das `Author`-Modell aus (prefixieren Sie sie mit einem #):

```python
# admin.site.register(Author)
```

Fügen Sie nun wie unten gezeigt eine neue `AuthorAdmin` und Registrierung hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Nun fügen wir `ModelAdmin`-Klassen für `Book` und `BookInstance` hinzu. Wir müssen erneut die ursprünglichen Registrierungen kommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun, um die neuen Modelle zu erstellen und zu registrieren; zu Vorführzwecken werden wir stattdessen den `@register`-Dekorator verwenden, um die Modelle zu registrieren (das macht genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass sich das Admin-Verhalten nicht geändert hat! Wir können diese nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mithilfe des Objektnamens auf, der aus der Modell-`__str__()`-Methode generiert wird. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber sobald Sie viele haben, können Sie möglicherweise Duplikate haben. Um diese zu unterscheiden oder einfach, weil Sie interessantere Informationen zu jedem Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der Ansicht weitere Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den unten stehenden Code. Die anzuzeigenden Feldnamen in der Liste werden in einem _Tupel_ in der angegebenen Reihenfolge deklariert (diese sind dieselben Namen, die Sie in Ihrem ursprünglichen Modell angegeben haben).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie jetzt zur Autorenliste auf Ihrer Website. Die oben genannten Felder sollten jetzt angezeigt werden, wie hier:

![Admin-Seite - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book`-Modell werden wir zusätzlich den `author` und `genre` anzeigen. Der `author` ist ein `ForeignKey`-Feld (eins-zu-viele-Beziehung) und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die unten stehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, da dies hohe Datenbankzugriffskosten bedeuten würde). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (das ist die Funktion, die wir oben aufgerufen haben; wir werden sie unten definieren).

> [!NOTE]
> Das Abrufen des `genre` mag hier keine gute Idee sein, wegen der "Kosten" der Datenbankoperation. Wir zeigen Ihnen jedoch, wie, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – beispielsweise, um einen _Löschen_-Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book`-Modell (**models.py**) ein. Dies erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die im Admin-Bereich für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und den aktualisierten Admin gespeichert haben, öffnen Sie Ihre Website und gehen Sie zur _Bücher_-Liste; Sie sollten eine Bücherliste wie die untenstehende sehen:

![Admin-Seite - Verbesserte Bücherliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, falls Sie eines definiert haben) haben beide ein einzelnes Feld, sodass es keinen Grund gibt, ein zusätzliches Modell zu erstellen, um weitere Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BookInstance`-Modellliste zu aktualisieren, um wenigstens den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das am Ende dieses Artikels als Herausforderung hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, die Möglichkeit zu haben, die anzuzeigenden Elemente zu filtern. Dies wird erreicht, indem Felder im `list_filter`-Attribut aufgelistet werden. Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den unten stehenden Codeausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht wird nun ein Filterfeld rechts enthalten. Beachten Sie, wie Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin-Seite - Buchinstanz-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Detailansichts-Layout organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in der Reihenfolge ihrer Deklaration im Modell aus. Sie können die Deklarationsreihenfolge, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden, ändern.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, sodass es keinen großen Bedarf gibt, das Layout zu ändern; wir werden jedoch einige Änderungen vornehmen, nur um Ihnen zu zeigen, wie.

#### Welche Felder angezeigt werden und wie sie angeordnet sind steuern

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur jene Felder auf, die im Formular angezeigt werden sollen, in der Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber horizontal angezeigt, wenn Sie sie in einem Tupel gruppieren (wie die "date"-Felder oben gezeigt).

Auf Ihrer Website gehen Sie zur Detailansicht des Autors – sie sollte jetzt wie unten gezeigt erscheinen:

![Admin-Seite - Verbesserte Autorendetails](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die vom Formular ausgeschlossen werden (alle anderen Attribute im Modell werden angezeigt).

#### Die Detailansicht unterteilen

Sie können "Abschnitte" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets)-Attribut verwenden.

Im `BookInstance`-Modell haben wir Informationen darüber, was das Buch ist (d.h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese unserem `BookInstanceAdmin` hinzufügen, wie unten gezeigt, indem Sie das `fieldsets`-Attribut verwenden.

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

Jeder Abschnitt hat einen eigenen Titel (oder `None`, wenn Sie keinen Titel möchten) und ein zugehöriges Tupel von Feldern in einem Wörterbuch – das Format ist kompliziert zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie sich den Codeausschnitt unmittelbar oben ansehen.

Gehen Sie jetzt zu einer Buchinstanzansicht auf Ihrer Website; das Formular sollte wie unten gezeigt erscheinen:

![Admin-Seite - Verbesserte Buchinstanz-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung von zugehörigen Datensätzen

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Zum Beispiel kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifische Exemplare, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies tun, indem Sie [Inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) von Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, genau wie das Standardmodell-Layout) deklarieren. Sie können die `BookInstance`-Informationen inline zu unserem `Book`-Detail hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie jetzt zu einer Ansicht für ein `Book` auf Ihrer Website – unten sollten Sie nun die Buchexemplare sehen, die sich auf dieses Buch beziehen (unmittelbar unter den Feldern des Buch-Genres):

![Admin-Seite - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder vom _inline_ Modell hinzufügt. Sie können alle Arten von zusätzlichen Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzhafte Grenzen in dieser Funktionalität! Im obigen Screenshot haben wir drei vorhandene Buchexemplare, gefolgt von drei Platzhaltern für neue Buchexemplare (die sehr ähnlich aussehen!). Es wäre besser, KEINE Reservebuchexemplare standardmäßig zu haben und diese einfach mit dem **Ein weiteres Buchexemplar hinzufügen**-Link hinzuzufügen, oder um einfach die `BookInstance`s als nicht-lesbare Links von hier aus aufzulisten. Die erste Option kann durch Festlegen des `extra`-Attributs auf `0` im `BooksInstanceInline`-Modell erreicht werden, versuchen Sie es selbst.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, also ist es jetzt an der Zeit, dass Sie ein paar Dinge ausprobieren.

1. Fügen Sie für die `BookInstance`-Listenansicht Code hinzu, um das Buch, den Status, das Fälligkeitsdatum und die ID (anstelle des Standard-`__str__()`-Texts) anzuzeigen.
2. Fügen Sie eine Inline-Auflistung von `Book`-Elementen zur `Author`-Detailansicht mit dem gleichen Ansatz hinzu, den wir für `Book`/`BookInstance` verwendet haben.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie man die Admin-Seite sowohl in ihrer einfachsten als auch in verbesserter Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Seite navigiert und Datensätze anzeigt, löscht und aktualisiert. Unterwegs haben Sie eine Menge Bücher, Buchinstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigene Sicht und Templates erstellen.

## Weiterführende Literatur

- [Writing your first Django app, Teil 2: Einführung in das Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)
- [Die Django Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
