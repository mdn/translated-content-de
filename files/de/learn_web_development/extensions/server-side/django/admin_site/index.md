---
title: "Django Tutorial Teil 4: Django-Admin-Seite"
short-title: "4: Django-Admin-Seite"
slug: Learn_web_development/Extensions/Server-side/Django/Admin_site
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}

Nachdem wir nun Modelle für die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, werden wir die Django-Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir, wie man die Modelle bei der Admin-Seite registriert, dann zeigen wir, wie man sich einloggt und einige Daten erstellt. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Präsentation der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Models"
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

## Überblick

Die Django-Admin-_Anwendung_ kann Ihre Modelle verwenden, um automatisch einen Bereich der Website zu erstellen, mit dem Sie Datensätze erstellen, anzeigen, aktualisieren und löschen können. Dies kann Ihnen während der Entwicklung viel Zeit sparen, da Sie Ihre Modelle sehr einfach testen und ein Gefühl dafür bekommen können, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch nützlich sein, um Daten in der Produktion zu verwalten, abhängig von der Art der Website. Das Django-Projekt empfiehlt es nur für die interne Datenverwaltung (d.h. nur zur Verwendung durch Admins oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht unbedingt die bestmögliche Benutzeroberfläche für alle Benutzer darstellt und viele unnötige Details über die Modelle offenlegt.

Die gesamte Konfiguration, die erforderlich ist, um die Admin-Anwendung in Ihre Website einzubeziehen, wurde automatisch erledigt, als Sie das [Skelettprojekt erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) (Informationen zu den tatsächlichen Abhängigkeiten finden Sie in den [Django-Dokumenten hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Das Ergebnis ist, dass alles, was Sie **tun müssen**, um Ihre Modelle der Admin-Anwendung hinzuzufügen, ist, sie zu _registrieren_. Am Ende dieses Artikels zeigen wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser darzustellen.

Nachdem wir die Modelle registriert haben, zeigen wir, wie man einen neuen "Superuser" erstellt, sich auf der Seite anmeldet und einige Bücher, Autoren, Buchinstanzen und Genres erstellt. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial beginnen werden.

## Modelle registrieren

Öffnen Sie zuerst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Es sieht derzeit so aus – beachten Sie, dass `django.contrib.admin` bereits importiert wird:

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
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches repräsentiert ([siehe den Tutorial-Artikel zu Modellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle auf der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar; wir werden weiter unten mehr über andere Wege sprechen, wie Sie Ihre Modelle registrieren können.

## Erstellen eines Superusers

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Mitarbeiter_-Status. Um Datensätze anzeigen und erstellen zu können, benötigt dieser Benutzer auch Berechtigungen, um alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollständigen Zugriff auf die Seite und alle erforderlichen Berechtigungen hat, indem Sie **manage.py** verwenden.

Rufen Sie den folgenden Befehl im gleichen Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde ein neuer Superuser zur Datenbank hinzugefügt. Starten Sie jetzt den Entwicklungsserver neu, damit wir das Login testen können:

```bash
python3 manage.py runserver
```

## Anmeldung und Nutzung der Seite

Um sich auf der Seite anzumelden, öffnen Sie die _/admin_-URL (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-Benutzer-ID und Passwort-Daten ein (Sie werden zur _Login_-Seite umgeleitet und dann zurück zur _/admin_-URL, nachdem Sie Ihre Daten eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle zugehörigen Datensätze auflistet, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den **Hinzufügen**-Link neben jedem Modell klicken, um einen Datensatz dieses Typs zu erstellen.

![Admin-Seite - Startseite](admin_home.png)

Klicken Sie auf den **Hinzufügen**-Link rechts von _Büchern_, um ein neues Buch zu erstellen (dies zeigt ein Dialogfeld an, das dem unten gezeigten sehr ähnlich ist). Beachten Sie, wie die Titel jedes Feldes, der verwendete Widget-Typ und der `help_text` (falls vorhanden) den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+**-Taste neben den jeweiligen Feldern drücken (oder vorhandene Werte aus den Listen auswählen, wenn Sie diese bereits erstellt haben). Wenn Sie fertig sind, können Sie **SPEICHERN**, **Speichern und neu erstellen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie etwas Zeit damit verbringen, einige Bücher, Autoren, Sprachen und Genres (z.B. Fantasy) zu Ihrer Anwendung hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies macht Ihre Listen- und Detailansichten interessanter, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den **Startseite**-Link im oberen Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den **Bücher**-Link, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten zu sehen). Jetzt, da Sie einige Bücher hinzugefügt haben, könnte die Liste ähnlich wie im Screenshot unten aussehen. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der Book-Model-`__str__()`-Methode zurückgegeben wird, die wir im letzten Artikel angegeben haben.

![Admin-Seite - Liste der Buchobjekte](admin_book_list.png)

Von dieser Liste aus können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht wünschen, die _löschen…_ Aktion aus der _Aktion_-Dropdown-Liste auswählen und dann die **Los**-Taste drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Taste drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, wie unten gezeigt, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung von **Löschen**, **VERLAUFSVERZEICHNIS** und **AUF SEITE ANZEIGEN** Tasten (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF SEITE ANZEIGEN**-Schaltfläche löst eine `NoReverseMatch`-Ausnahme aus, weil die `get_absolute_url()`-Methode versucht, eine benannte URL-Zuordnung ('book-detail') zurückzusetzen, die noch nicht definiert wurde.
> Wir werden eine URL-Zuordnung und die zugehörige Ansicht in [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views) definieren.

![Admin-Seite - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (über den _Startseiten_-Link in der Navigationsleiste) und sehen Sie dann die **Autoren**- und **Genre**-Listen an – Sie sollten bereits einige angelegt haben, als Sie die neuen Bücher hinzugefügt haben, aber zögern Sie nicht, weitere hinzuzufügen.

Was Sie nicht haben werden, sind irgendwelche _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Buch` von einem `BuchInstanz` erstellen können – das ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den _Buchinstanz hinzufügen_-Bildschirm unten anzuzeigen. Beachten Sie die große, global eindeutige Id, die verwendet werden kann, um ein einzelnes Exemplar eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Seite - BuchInstanz Hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Reihe dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, stellen Sie auch ein zukünftiges _Fälligkeitsdatum_ ein.

Das war's! Sie haben nun gelernt, wie Sie die Administrationsseite einrichten und verwenden können. Sie haben auch Datensätze für `Buch`, `BuchInstanz`, `Genre`, `Sprache` und `Autor` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweitere Konfiguration

Django macht einen ziemlich guten Job beim Erstellen einer grundlegenden Admin-Seite mit den Informationen aus den registrierten Modellen:

- Jedes Modell hat eine Liste von einzelnen Datensätzen, die durch den String identifiziert werden, der mit der `__str__()`-Methode des Modells erstellt wurde, und mit Detailansichten/Formularen für die Bearbeitung verknüpft ist. Standardmäßig hat diese Ansicht ein Aktionsmenü oben, das Sie verwenden können, um Massenlöschoperationen für Datensätze durchzuführen.
- Die Modelldetaildatensatzformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell, die vertikal in ihrer Deklarationsreihenfolge angeordnet sind.

Sie können die Schnittstelle weiter anpassen, um sie noch einfacher zu verwenden. Einige der Dinge, die Sie tun können, sind:

- Listenansichten:

  - Zusätzliche Felder/Informationen für jeden Datensatz hinzufügen.
  - Filter hinzufügen, um auszuwählen, welche Datensätze aufgelistet sind, basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus).
  - Zusätzliche Optionen für das Aktionsmenü in Listenansichten hinzufügen und auswählen, wo dieses Menü auf dem Formular angezeigt wird.

- Detailansichten
  - Welche Felder angezeigt werden (oder ausgeschlossen werden), zusammen mit ihrer Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, Orientierung usw. wählen.
  - Mit einem Datensatz verwandte Felder hinzufügen, um das Inline-Bearbeiten zu ermöglichen (z.B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie deren Autorendatensatz erstellen).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Schnittstelle für unsere _LocalLibrary_ verbessern, einschließlich der Hinzufügung weiterer Informationen zu `Buch`- und `Autor`-Modelllisten und der Verbesserung der Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation der Modelle `Sprache` und `Genre` nicht ändern, da sie jeweils nur ein Feld haben, sodass es keinen wirklichen Vorteil in der Änderung gibt!

Sie finden eine vollständige Referenz aller Anpassungsoptionen der Admin-Seite in [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django Docs).

### Registrieren einer ModelAdmin-Klasse

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) Klasse (die das Layout beschreibt) und registrieren es mit dem Modell.

Beginnen wir mit dem `Autor`-Modell. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung für das `Autor`-Modell aus (präfixieren Sie sie mit einer #):

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AutorAdmin`- und Registrierungsklasse wie unten gezeigt hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Jetzt fügen wir `ModelAdmin`-Klassen für `Buch` und `BuchInstanz` hinzu. Wir müssen die ursprünglichen Registrierungen erneut auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Jetzt erstellen und registrieren wir die neuen Modelle; für den Zweck dieser Demonstration verwenden wir stattdessen den `@register`-Dekorator, um die Modelle zu registrieren (dies macht genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), so dass das Admin-Verhalten unverändert bleibt! Wir können diese nun erweitern, um unser modellspezifisches Admin-Verhalten zu definieren.

### Listenansichten konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mit dem Objektnamen auf, der aus der Modell-`__str__()`-Methode generiert wurde. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber sobald Sie viele haben, können Sie am Ende Duplikate haben. Um sie zu unterscheiden oder weil Sie einfach mehr interessante Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um zusätzliche Felder zur Ansicht hinzuzufügen.

Ersetzen Sie Ihre `AutorAdmin`-Klasse durch den Code unten. Die anzuzeigenden Feldnamen in der Liste werden in einem _Tupel_ in der erforderlichen Reihenfolge deklariert, wie gezeigt (dies sind die gleichen Namen, die in Ihrem ursprünglichen Modell angegeben sind).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie nun zur Autorenliste auf Ihrer Website. Die oben genannten Felder sollten jetzt angezeigt werden, wie folgt:

![Admin-Seite - Verbessere Autorenliste](admin_improved_author_list.png)

Für unser `Buch`-Modell zeigen wir zusätzlich den `author` und `genre` an. Der `author` ist ein `ForeignKey`-Feld (eins-zu-viele Beziehung) und wird daher durch den `__str__()`-Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BuchAdmin`-Klasse durch die Version unten.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, da dies mit hohen Kosten für den Datenbankzugriff verbunden wäre). Stattdessen definieren wir eine `display_genre`-Funktion, um die Informationen als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir definieren sie unten).

> [!NOTE]
> Das Abrufen des `genres` ist möglicherweise keine gute Idee hier, aufgrund der "Kosten" des Datenbankvorgangs. Wir zeigen Ihnen jedoch, wie Sie dies tun, weil der Aufruf von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um neben jedem Element in der Liste einen _Lösch_-Link hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Buch`-Modell (**models.py**) ein. Dies erstellt einen String aus den ersten drei Werten des `genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die für diese Methode auf der Admin-Seite verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nach dem Speichern des Modells und des aktualisierten Admins öffnen Sie Ihre Website und gehen zur _Bücher_-Listen-Seite; die Liste sollte wie die unten gezeigte aussehen:

![Admin-Seite - Verbesserte Bücherliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Sprache`-Modell, falls Sie eines definiert haben) haben jeweils nur ein Feld, daher macht es keinen Sinn, ein zusätzliches Modell zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BuchInstanz`-Modellliste so zu aktualisieren, dass mindestens der Status und das erwartete Rückgabedatum angezeigt werden. Wir haben das am Ende dieses Artikels als Herausforderung hinzugefügt!

### Hinzufügen von Listenfiltern

Sobald Sie eine große Anzahl von Elementen in einer Liste haben, kann es nützlich sein, die anzuzeigenden Elemente filtern zu können.
Dies erfolgt durch Auflisten von Feldern im `list_filter`-Attribut.
Ersetzen Sie Ihre aktuelle `BuchInstanzAdmin`-Klasse durch den folgenden Codeabschnitt.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht wird nun ein Filterfeld rechts enthalten. Beachten Sie, wie Sie die Daten und den Status auswählen können, um die Werte zu filtern:

![Admin-Seite - BuchInstanz Listenfilter](admin_improved_bookinstance_list_filters.png)

### Layout der Detailansicht organisieren

Standardmäßig ordnen die Detailansichten alle Felder vertikal und in ihrer Deklarationsreihenfolge im Modell an. Sie können die Deklarationsreihenfolge ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar welche Bearbeitungswidgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, sodass es keinen großen Bedarf gibt, das Layout zu ändern; wir werden jedoch einige Änderungen vornehmen, um Ihnen zu zeigen, wie es geht.

#### Kontrolle darüber, welche Felder angezeigt und angeordnet werden

Aktualisieren Sie Ihre `AutorAdmin`-Klasse, um die `fields`-Zeile wie unten gezeigt hinzuzufügen:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur die Felder auf, die im Formular angezeigt werden sollen, in Ordnung. Standardmäßig werden Felder vertikal angezeigt, jedoch horizontal angezeigt, wenn Sie sie weiter in einem Tupel gruppieren (wie bei den "Datums"-Feldern oben gezeigt).

Gehen Sie auf Ihrer Website zur Autoren-Detailansicht – sie sollte nun wie unten angezeigt aussehen:

![Admin-Seite - Verbesserter Autorendetail](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Aufteilung der Detailansicht

Sie können Abschnitte hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) Attribut verwenden.

Im `BuchInstanz`-Modell haben wir Informationen darüber, was das Buch ist (d.h. `name`, `imprint` und `id`) und wann es verfügbar sein wird (`status`, `due_back`). Wir können diese wie unten dargestellt in unsere `BuchInstanzAdmin`-Klasse aufnehmen, unter Verwendung der `fieldsets`-Eigenschaft.

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

Jeder Abschnitt hat einen eigenen Titel (oder `None`, wenn Sie keinen Titel wünschen) und ein zugehöriges Tupel von Feldern in einem Dictionary – das Format ist kompliziert zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie sich den unmittelbar obigen Codeabschnitt ansehen.

Navigieren Sie nun zu einer Buchinstanzansicht auf Ihrer Website; das Formular sollte wie unten angezeigt aussehen:

![Admin-Seite - Verbesserter BuchInstanz-Detail mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung von zugehörigen Datensätzen

Manchmal macht es Sinn, zugehörige Datensätze gleichzeitig hinzufügen zu können. Beispielsweise kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifischen Kopien, die Sie haben, auf derselben Detailseite zu haben.

Sie können dies erreichen, indem Sie [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) deklarieren, vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, genau wie das Standardmodell-Layout). Sie können die `BuchInstanz`-Informationen inline zu unserem `Buch`-Detail hinzufügen, indem Sie `inlines` in Ihrem `BuchAdmin` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht eines `Buch` auf Ihrer Website – am unteren Rand sollten Sie jetzt die Buchinstanzen sehen, die sich auf dieses Buch beziehen (unmittelbar unter den Genre-Feldern des Buches):

![Admin-Seite - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir lediglich unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder aus dem _inlined_ Modell hinzufügt. Sie können alle möglichen zusätzlichen Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Es gibt einige schmerzhafte Einschränkungen bei dieser Funktionalität! Im obigen Screenshot haben wir drei bestehende Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, standardmäßig KEINE ersatzlosen Buchinstanzen zu haben und sie einfach mit dem **Weitere Buchinstanz hinzufügen**-Link hinzuzufügen, oder die `BuchInstanz`-Datensätze einfach als nicht lesbare Links von hier aus aufzulisten. Die erste Option kann durch Festlegen des `extra`-Attributs auf `0` im `BooksInstanceInline`-Modell erreicht werden, probieren Sie es selbst aus.

## Fordern Sie sich heraus

Wir haben in diesem Abschnitt viel gelernt, jetzt ist es an der Zeit, dass Sie ein paar Dinge ausprobieren.

1. Fügen Sie für die `BuchInstanz`-Listenansicht Code hinzu, um das Buch, den Status, das Fälligkeitsdatum und die ID anzuzeigen (anstelle des Standardtexts `__str__()`).
2. Fügen Sie eine Inline-Auflistung von `Buch`-Elementen zur `Autor`-Detailansicht hinzu, indem Sie den gleichen Ansatz wie bei `Buch`/`BuchInstanz` verwenden.

## Zusammenfassung

Das war's! Sie haben nun gelernt, wie man die Administrationsseite sowohl in ihrer einfachsten als auch in ihrer verbesserten Form einrichtet, wie man einen Superuser erstellt und wie man die Admin-Seite navigiert und betrachtet, Datensätze löscht und aktualisiert. Unterwegs haben Sie eine Menge Bücher, BuchInstanzen, Genres und Autoren erstellt, die wir in der Lage sein werden, aufzulisten und anzuzeigen, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [Schreiben Ihrer ersten Django-App, Teil 2: Einführung in das Django-Admin-Tool](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumente)
- [Die Django-Admin-Seite](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Models", "Learn_web_development/Extensions/Server-side/Django/Home_page", "Learn_web_development/Extensions/Server-side/Django")}}
