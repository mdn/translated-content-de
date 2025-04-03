---
title: "Django Tutorial Teil 4: Die Django-Admin-Site"
short-title: "4: Die Django-Admin-Site"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website erstellt haben, werden wir die Django-Admin-Site nutzen, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Site registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und Daten erstellen können. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Präsentation der Admin-Site weiter verbessern können.

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
        Die Vorteile und Einschränkungen der Django-Admin-Site verstehen und sie nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Die Django-Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Bereich der Website zu erstellen, den Sie zum Erstellen, Anzeigen, Aktualisieren und Löschen von Datensätzen verwenden können. Dies kann während der Entwicklung viel Zeit sparen, da es sehr einfach ist, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch nützlich sein, um Daten in der Produktion zu verwalten, je nach Art der Website. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d.h. nur zur Verwendung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Benutzeroberfläche für alle Benutzer ist und viele unnötige Details über die Modelle preisgibt.

Alle Konfigurationen, die erforderlich sind, um die Admin-Anwendung in Ihre Website einzubinden, wurden automatisch vorgenommen, als Sie das [Grundgerüst-Projekt erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (Informationen zu den tatsächlich benötigten Abhängigkeiten finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Als Ergebnis müssen Sie nur Ihre Modelle _registrieren_, um sie zur Admin-Anwendung hinzuzufügen. Am Ende dieses Artikels geben wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser anzuzeigen.

Nachdem die Modelle registriert wurden, zeigen wir, wie man einen neuen "Superuser" erstellt, sich bei der Site anmeldet und einige Bücher, Autoren, Buchinstanzen und Genres erstellt. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Modelle registrieren

Öffnen Sie zunächst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Es sieht derzeit so aus – beachten Sie, dass es bereits `django.contrib.admin` importiert:

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
> Die oben dargestellten Zeilen setzen voraus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches repräsentiert ([sehen Sie sich den Modell-Tutorial-Artikel an](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle bei der Site zu registrieren. Die Admin-Site ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten der Registrierung Ihrer Modelle sprechen.

## Einen Superuser erstellen

Um sich bei der Admin-Site anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiter_-Status. Um Datensätze anzeigen und erstellen zu können, benötigen wir außerdem die Berechtigungen dieses Benutzers, um alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Site und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Rufen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wird ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir die Anmeldung testen können:

```bash
python3 manage.py runserver
```

## Anmelden und die Site nutzen

Um sich bei der Site anzumelden, öffnen Sie die _/admin_-URL (z. B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-Benutzerdaten und Passwort ein (Sie werden zur _Anmeldeseite_ umgeleitet und dann zurück zur _/admin_-URL, nachdem Sie Ihre Angaben eingegeben haben).

Dieser Teil der Site zeigt alle unsere Modelle, gruppiert nach installierten Anwendungen. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den Link **Hinzufügen** neben jedem Modell klicken, um mit der Erstellung eines Datensatzes dieses Typs zu beginnen.

![Admin-Site - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts neben _Bücher_, um ein neues Buch zu erstellen (dies zeigt ein Dialogfeld an, das dem unten gezeigten sehr ähnlich ist). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie auf die **+**-Taste neben den jeweiligen Feldern drücken (oder vorhandene Werte aus den Listen wählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin-Site - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An dieser Stelle möchten wir, dass Sie etwas Zeit damit verbringen, Ihrer Anwendung einige Bücher, Autoren, Sprachen und Genres (z. B. Fantasy) hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (das wird Ihre Listen- und Detailansichten später in der Artikelserie interessanter machen).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den **Start**-Link im oberen Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modellslisten zu sehen). Jetzt, da Sie einige Bücher hinzugefügt haben, sieht die Liste möglicherweise ähnlich aus wie im Screenshot unten. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells, die wir im letzten Artikel angegeben haben, zurückgegeben wird.

![Admin-Site - Liste der Buchobjekte](admin_book_list.png)

Aus dieser Liste können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht möchten, die Aktion _Löschen…_ aus der Dropdown-Liste _Aktion_ wählen und dann die **Los**-Taste drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Taste drücken.

Sie können ein Buch bearbeiten, indem Sie auf seinen Namen im Link klicken. Die Bearbeitungsseite für ein Buch, die unten gezeigt wird, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung von **Löschen**, **HISTORY** und **AUF DER SITE ANSEHEN**-Tasten (diese letzte Taste erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF DER SITE ANSEHEN**-Taste führt zu einer `NoReverseMatch`-Ausnahme, weil die `get_absolute_url()`-Methode versucht, ein benannten URL-Mapping ('book-detail') zu `reverse()`, das noch nicht definiert wurde.
> Wir werden eine URL-Zuordnung und eine zugehörige Ansicht im [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) definieren.

![Admin-Site - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie jetzt zurück zur **Start**-Seite (mit dem _Start_-Link in der Brotkrumennavigation) und sehen Sie sich dann die Listen **Autor** und **Genre** an – Sie sollten bereits einige davon erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, noch mehr hinzuzufügen.

Was Sie nicht haben werden, sind _Buchinstanzen_, da diese nicht von Büchern erstellt werden (obwohl Sie ein `Book` aus einer `BookInstance` erstellen können – das ist die Natur des `ForeignKey`-Feldes). Kehren Sie zur _Start_-Seite zurück und drücken Sie die zugehörige **Hinzufügen**-Taste, um den Bildschirm _Buchinstanz hinzufügen_ unten anzuzeigen. Beachten Sie die große, weltweit eindeutige ID, die verwendet werden kann, um ein einzelnes Exemplar eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Site - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Anzahl dieser Datensätze für jedes Ihrer Bücher. Legen Sie den Status als _Verfügbar_ für zumindest einige Datensätze und _Ausgeliehen_ für andere fest. Wenn der Status **nicht** _Verfügbar_ ist, legen Sie auch ein zukünftiges _Fälligkeitsdatum_ fest.

Das war's! Sie haben nun gelernt, wie man die Verwaltungssite einrichtet und nutzt. Sie haben auch Datensätze für `Book`, `BookInstance`, `Genre`, `Language` und `Author` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet ziemlich gute Arbeit, indem es eine grundlegende Admin-Site anhand der Informationen der registrierten Modelle erstellt:

- Jedes Modell verfügt über eine Liste einzelner Datensätze, die durch den mit der `__str__()`-Methode des Modells erstellten String gekennzeichnet sind und mit Detailansichten/Formularen zum Bearbeiten verlinkt. Standardmäßig verfügt diese Ansicht über ein Aktionsmenü oben, mit dem Sie Massenlöschungen von Datensätzen durchführen können.
- Die Detailformulare für das Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell und sind vertikal in ihrer Deklarationsreihenfolge angeordnet.

Sie können die Benutzeroberfläche weiter anpassen, um sie noch benutzerfreundlicher zu machen. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen für jeden Datensatz anzeigen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze angezeigt werden, basierend auf Datum oder einem anderen Auswahlwert (z. B. Ausleihstatus des Buches).
  - Zusätzliche Optionen zum Aktionsmenü in Listenansichten hinzufügen und wählen, wo dieses Menü im Formular angezeigt wird.

- Detailansichten

  - Wählen, welche Felder angezeigt (oder ausgeschlossen) werden, zusammen mit ihrer Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, die Ausrichtung usw.
  - Verwandte Felder zu einem Datensatz hinzufügen, um Inline-Bearbeitung zu ermöglichen (z. B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während man den Autorendatensatz erstellt).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Oberfläche unserer _LocalLibrary_ verbessern, einschließlich der Hinzufügung weiterer Informationen zu den `Book`- und `Author`-Modelllisten und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation der Modelle `Language` und `Genre` nicht ändern, da sie jeweils nur ein Feld haben, sodass es keinen wirklichen Vorteil gibt, dies zu tun!

Eine vollständige Referenz aller Anpassungsmöglichkeiten der Admin-Site finden Sie in [Die Django-Admin-Site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente).

### Eine ModelAdmin-Klasse registrieren

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects)-Klasse (die das Layout beschreibt) und registrieren es mit dem Modell.

Beginnen wir mit dem `Author`-Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung für das `Author`-Modell aus (präfixen Sie sie mit einem #):

```python
# admin.site.register(Author)
```

Fügen Sie nun wie unten gezeigt eine neue `AuthorAdmin`-Registrierung hinzu.

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

Jetzt um die neuen Modelle zu erstellen und zu registrieren; für diese Demonstration verwenden wir den `@register`-Dekorator, um die Modelle zu registrieren (dies tut genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind all unsere Admin-Klassen leer (siehe `pass`), daher wird das Admin-Verhalten unverändert bleiben! Wir können diese jetzt erweitern, um unser modell-spezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mit dem durch die `__str__()`-Methode des Modells generierten Objektnamen auf. Das ist in Ordnung, wenn Sie nur wenige Autoren haben, aber wenn Sie viele haben, können Duplikate auftreten. Um sie zu differenzieren oder einfach weil Sie mehr interessante Informationen über jeden Autor zeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um der Ansicht zusätzliche Felder hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse durch den untenstehenden Code. Die anzuzeigenden Feldnamen werden in einem _Tupel_ in der gewünschten Reihenfolge deklariert, wie gezeigt (diese sind die gleichen Namen, die Sie in Ihrem ursprünglichen Modell angegeben haben).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie jetzt zur Autorenliste auf Ihrer Website. Die oben genannten Felder sollten nun angezeigt werden, etwa so:

![Admin-Site - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Book`-Modell zeigen wir zusätzlich den `author` und `genre` an. Der `author` ist ein `ForeignKey`-Feld (eins-zu-viele) Beziehung und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die untenstehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, da es einen hohen Datenbank-Abfrage-"Kosten" verursachen würde). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir werden sie unten definieren).

> [!NOTE]
> Das Abrufen des `genre` ist möglicherweise keine gute Idee hier, aufgrund der "Kosten" der Datenbankoperation. Wir zeigen Ihnen, wie das geht, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um einen _Löschen_-Link neben jedem Listeneintrag hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Book`-Modell (**models.py**) ein. Dies erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die in der Admin-Site für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und den aktualisierten Admin gespeichert haben, öffnen Sie Ihre Website und gehen zur _Books_-Listen-Seite; Sie sollten eine Buchliste wie unten sehen:

![Admin-Site - Verbesserte Buchliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Language`-Modell, wenn Sie eines definiert haben) haben beide nur ein Feld, daher ist es nicht sinnvoll, ein zusätzliches Modell zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BookInstance`-Modellliste zu aktualisieren, um zumindest den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben das als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Artikel in einer Liste haben, kann es nützlich sein, filtern zu können, welche Artikel angezeigt werden.
Dies erfolgt, indem Sie Felder im `list_filter`-Attribut auflisten.
Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den untenstehenden Codeausschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht enthält nun ein Filterfeld auf der rechten Seite. Beachten Sie, dass Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin-Site - Buchinstanzen-Listenfilter](admin_improved_bookinstance_list_filters.png)

### Layout der Detailansicht organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in der Reihenfolge ihrer Deklaration im Modell an. Sie können die Deklarationsreihenfolge, welche Felder angezeigt werden (oder ausgeschlossen werden), ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden, ändern.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, daher besteht nicht unbedingt die Notwendigkeit, das Layout zu ändern; wir werden jedoch einige Änderungen vornehmen, um Ihnen zu zeigen, wie das geht.

#### Kontrolle darüber, welche Felder angezeigt und angeordnet werden

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur die Felder auf, die im Formular angezeigt werden sollen, in der angegebenen Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber horizontal angezeigt, wenn Sie sie weiter in einem Tupel gruppieren (wie in den "Datum"-Feldern oben gezeigt).

Gehen Sie auf Ihrer Website zur Autoren-Detailansicht – sie sollte nun wie unten gezeigt aussehen:

![Admin-Site - Verbesserte Autorendetailansicht](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die vom Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Die Detailansicht in Abschnitte unterteilen

Sie können "Abschnitte" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, mithilfe des [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets)-Attributs.

Im `BookInstance`-Modell haben wir Informationen darüber, was das Buch ist (d.h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese zu unserer `BookInstanceAdmin`-Klasse hinzufügen, wie unten gezeigt, indem wir die `fieldsets`-Eigenschaft verwenden.

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

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, wenn Sie keinen Titel wünschen) und ein zugehöriges Tupel von Feldern in einem Wörterbuch – das Format ist kompliziert zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie den oben gezeigten Codeausschnitt betrachten.

Navigieren Sie jetzt zu einer Buchinstanz-Ansicht auf Ihrer Website; das Formular sollte wie unten gezeigt aussehen:

![Admin-Site - Verbesserte Buchinstanz-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung von zugehörigen Datensätzen

Manchmal kann es sinnvoll sein, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen zu den spezifischen Exemplaren auf derselben Detailseite zu haben.

Sie können dies erreichen, indem Sie [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) deklarieren, vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontale Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikale Layout, genau wie das Standardmodell-Layout). Sie können die `BookInstance`-Informationen inline zu unserem `Book`-Detail hinzufügen, indem Sie `inlines` in Ihrem `BookAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie jetzt zu einer Ansicht für ein `Book` auf Ihrer Website – am unteren Rand sollten Sie jetzt die Buchinstanzen sehen, die sich auf dieses Buch beziehen (unmittelbar unter den Feldern des Buchgenres):

![Admin-Site - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder aus dem _inline_ Modell hinzufügt. Sie können alle möglichen zusätzlichen Informationen zum Layout festlegen, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie nur-lesbar sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für mehr Informationen).

> [!NOTE]
> Es gibt einige schmerzhafte Einschränkungen in dieser Funktionalität! Im obigen Screenshot haben wir drei existierende Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, keine Reserve-Buchinstanzen standardmäßig zu haben und sie nur mit dem **Weiteres Buchinstanz hinzufügen**-Link hinzuzufügen, oder einfach die `BookInstance`s hier als nicht-lesbare Links aufzulisten. Die erste Option kann getan werden, indem man das `extra`-Attribut in `BooksInstanceInline`-Modell auf `0` setzt, versuchen Sie es selbst.

## Fordern Sie sich selbst heraus

Wir haben viel in diesem Abschnitt gelernt, also ist es jetzt an der Zeit, dass Sie einige Dinge ausprobieren.

1. Fügen Sie in der `BookInstance`-Listenansicht Code hinzu, um das Buch, den Status, das Rückgabedatum und die ID anzuzeigen (anstelle des Standard-`__str__()`-Textes).
2. Fügen Sie eine Inline-Listung von `Book`-Elementen zur `Author`-Detailansicht hinzu, indem Sie denselben Ansatz verwenden, wie wir ihn für `Book`/`BookInstance` verwendet haben.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie man die Verwaltungssite sowohl in ihrer einfachsten als auch in verbesserter Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Site navigiert und Datensätze anzeigt, löscht und aktualisiert. Unterwegs haben Sie eine Reihe von Büchern, Buchinstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Schreiben Sie Ihre erste Django-App, Teil 2: Einführung in die Django-Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumente)
- [Die Django-Admin-Site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
