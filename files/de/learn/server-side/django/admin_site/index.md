---
title: "Django Tutorial Teil 4: Django Admin-Seite"
slug: Learn/Server-side/Django/Admin_site
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}

Nachdem wir nun Modelle für die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erstellt haben, werden wir die Django Admin-Seite nutzen, um einige "echte" Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich einloggen und einige Daten erstellen. Am Ende des Artikels zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Zuerst abschließen: <a href="/de/docs/Learn/Server-side/Django/Models"
          >Django Tutorial Teil 3: Verwendung von Modellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Vorteile und Einschränkungen der Django Admin-Seite zu verstehen und sie zu nutzen, um einige Datensätze für unsere Modelle zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Django Admin-_Anwendung_ kann Ihre Modelle nutzen, um automatisch einen Bereich der Website zu erstellen, den Sie verwenden können, um Datensätze zu erstellen, anzuzeigen, zu aktualisieren und zu löschen. Dies kann Ihnen während der Entwicklung viel Zeit sparen und es sehr einfach machen, Ihre Modelle zu testen und ein Gefühl dafür zu bekommen, ob Sie die _richtigen_ Daten haben. Die Admin-Anwendung kann auch nützlich sein, um Daten in der Produktion zu verwalten, abhängig von der Art der Website. Das Django-Projekt empfiehlt sie nur für die interne Datenverwaltung (d.h. nur zur Nutzung durch Administratoren oder Personen innerhalb Ihrer Organisation), da der modellzentrierte Ansatz nicht notwendigerweise die beste mögliche Benutzeroberfläche für alle Benutzer ist und viele unnötige Details über die Modelle preisgibt.

Die gesamte Konfiguration, die für die Einbindung der Admin-Anwendung in Ihre Website erforderlich ist, wurde automatisch durchgeführt, als Sie [das Skelettprojekt erstellt](/de/docs/Learn/Server-side/Django/skeleton_website) haben (für Informationen zu den tatsächlich benötigten Abhängigkeiten siehe die [Django-Dokumentation hier](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/)). Daher müssen Sie, um Ihre Modelle der Admin-Anwendung hinzuzufügen, sie lediglich _registrieren_. Am Ende dieses Artikels geben wir eine kurze Demonstration, wie Sie den Admin-Bereich weiter konfigurieren können, um unsere Modelldaten besser anzuzeigen.

Nach der Registrierung der Modelle zeigen wir, wie man einen neuen "Superuser" erstellt, sich auf der Seite anmeldet und einige Bücher, Autoren, Buchinstanzen und Genres erstellt. Diese werden nützlich sein, um die Ansichten und Vorlagen zu testen, die wir im nächsten Tutorial erstellen werden.

## Registrierung von Modellen

Öffnen Sie zuerst **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Es sieht derzeit so aus — beachten Sie, dass `django.contrib.admin` bereits importiert ist:

```python
from django.contrib import admin

# Register your models here.
```

Registrieren Sie die Modelle, indem Sie den folgenden Text in den unteren Teil der Datei kopieren. Dieser Code importiert die Modelle und ruft dann `admin.site.register` auf, um jedes von ihnen zu registrieren.

```python
from .models import Author, Genre, Book, BookInstance, Language

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Genre)
admin.site.register(BookInstance)
admin.site.register(Language)
```

> [!NOTE]
> Die obigen Zeilen gehen davon aus, dass Sie die Herausforderung angenommen haben, ein Modell zu erstellen, das die natürliche Sprache eines Buches repräsentiert ([siehe den Modelle-Tutorial-Artikel](/de/docs/Learn/Server-side/Django/Models))!

Dies ist der einfachste Weg, ein Modell oder Modelle auf der Seite zu registrieren. Die Admin-Seite ist hochgradig anpassbar, und wir werden weiter unten mehr über die anderen Möglichkeiten sprechen, Ihre Modelle zu registrieren.

## Erstellung eines Superusers

Um sich auf der Admin-Seite anzumelden, benötigen wir ein Benutzerkonto mit aktiviertem _Staff_-Status. Um Datensätze anzuzeigen und zu erstellen, benötigen wir außerdem, dass dieser Benutzer Berechtigungen hat, um alle unsere Objekte zu verwalten. Sie können ein "Superuser"-Konto erstellen, das vollen Zugriff auf die Seite und alle erforderlichen Berechtigungen mit **manage.py** hat.

Rufen Sie den folgenden Befehl im selben Verzeichnis wie **manage.py** auf, um den Superuser zu erstellen. Sie werden aufgefordert, einen Benutzernamen, eine E-Mail-Adresse und ein _starkes_ Passwort einzugeben.

```bash
python3 manage.py createsuperuser
```

Sobald dieser Befehl abgeschlossen ist, wurde der Datenbank ein neuer Superuser hinzugefügt. Starten Sie nun den Entwicklungsserver neu, damit wir den Login testen können:

```bash
python3 manage.py runserver
```

## Einloggen und Nutzung der Seite

Um sich auf der Seite anzumelden, öffnen Sie die URL _/admin_ (z.B. `http://127.0.0.1:8000/admin`) und geben Sie Ihre neuen Superuser-Benutzer-ID und Passwort-Credentials ein (Sie werden zur _Login_-Seite weitergeleitet und anschließend zur URL _/admin_ zurückgeleitet, nachdem Sie Ihre Daten eingegeben haben).

Dieser Teil der Seite zeigt alle unsere Modelle, gruppiert nach installierter Anwendung. Sie können auf einen Modellnamen klicken, um zu einem Bildschirm zu gelangen, der alle seine zugehörigen Datensätze anzeigt, und Sie können weiter auf diese Datensätze klicken, um sie zu bearbeiten. Sie können auch direkt auf den Link **Hinzufügen** neben jedem Modell klicken, um mit der Erstellung eines Datensatzes dieses Typs zu beginnen.

![Admin-Seite - Startseite](admin_home.png)

Klicken Sie auf den Link **Hinzufügen** rechts neben _Bücher_, um ein neues Buch zu erstellen (dies zeigt ein Dialogfenster an, das in etwa dem folgenden ähnelt). Beachten Sie die Titel jedes Feldes, den verwendeten Widget-Typ und das `help_text` (falls vorhanden), die den Werten entsprechen, die Sie im Modell angegeben haben.

Geben Sie Werte für die Felder ein. Sie können neue Autoren oder Genres erstellen, indem Sie die **+**-Taste neben den jeweiligen Feldern drücken (oder vorhandene Werte aus den Listen auswählen, wenn Sie sie bereits erstellt haben). Wenn Sie fertig sind, können Sie auf **SPEICHERN**, **Speichern und ein weiteres hinzufügen** oder **Speichern und weiter bearbeiten** drücken, um den Datensatz zu speichern.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

> [!NOTE]
> An diesem Punkt möchten wir, dass Sie einige Zeit damit verbringen, einige Bücher, Autoren, Sprachen und Genres (z.B. Fantasy) zu Ihrer Anwendung hinzuzufügen. Stellen Sie sicher, dass jeder Autor und jedes Genre ein paar verschiedene Bücher enthält (dies wird Ihre Listen- und Detailansichten interessanter machen, wenn wir sie später in der Artikelserie implementieren).

Wenn Sie mit dem Hinzufügen von Büchern fertig sind, klicken Sie auf den Link **Startseite** im oberen Lesezeichen, um zur Haupt-Admin-Seite zurückzukehren. Klicken Sie dann auf den Link **Bücher**, um die aktuelle Liste der Bücher anzuzeigen (oder auf einen der anderen Links, um andere Modelllisten anzuzeigen). Jetzt, wo Sie ein paar Bücher hinzugefügt haben, sieht die Liste vielleicht ähnlich aus wie der Screenshot unten. Der Titel jedes Buches wird angezeigt; dies ist der Wert, der in der `__str__()`-Methode des Buchmodells zurückgegeben wird, die wir im letzten Artikel angegeben haben.

![Admin-Seite - Liste der Buchobjekte](admin_book_list.png)

Aus dieser Liste können Sie Bücher löschen, indem Sie das Kontrollkästchen neben dem Buch auswählen, das Sie nicht möchten, die _löschen…_ Aktion aus der _Aktion_-Dropdown-Liste auswählen und dann die **Los**-Taste drücken. Sie können auch neue Bücher hinzufügen, indem Sie die **BUCH HINZUFÜGEN**-Taste drücken.

Sie können ein Buch bearbeiten, indem Sie seinen Namen im Link auswählen. Die Bearbeitungsseite für ein Buch, wie unten gezeigt, ist fast identisch mit der "Hinzufügen"-Seite. Die Hauptunterschiede sind der Seitentitel (_Buch ändern_) und die Hinzufügung von **Löschen**, **VERLAUF** und **AUF DER SEITE ANZEIGEN**-Tasten (diese letzte Schaltfläche erscheint, weil wir die `get_absolute_url()`-Methode in unserem Modell definiert haben).

> [!NOTE]
> Das Klicken auf die **AUF DER SEITE ANZEIGEN**-Schaltfläche löst eine `NoReverseMatch`-Ausnahme aus, weil die `get_absolute_url()`-Methode versucht, eine benannte URL-Zuordnung ('book-detail') umzukehren, die noch nicht definiert wurde. Wir werden eine URL-Zuordnung und eine zugehörige Ansicht in [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views) definieren.

![Admin-Seite - Buch bearbeiten](admin_book_modify.png)

Navigieren Sie nun zurück zur **Startseite** (indem Sie dem _Start_-Link in der Navigationsleiste folgen) und sehen Sie sich die **Autor**- und **Genre**-Listen an – Sie sollten bereits einige davon erstellt haben, als Sie die neuen Bücher hinzugefügt haben, aber fühlen Sie sich frei, noch ein paar hinzuzufügen.

Was Sie nicht haben werden, sind _Buchinstanzen_, da diese nicht aus Büchern erstellt werden (obwohl Sie ein `Buch` aus einer `BookInstance` erstellen können – dies ist die Natur des `ForeignKey`-Feldes). Navigieren Sie zurück zur _Startseite_ und drücken Sie die zugehörige **Hinzufügen**-Schaltfläche, um den Bildschirm _Buchinstanz hinzufügen_ unten anzuzeigen. Beachten Sie die große, global eindeutige ID, die verwendet werden kann, um ein einzelnes Exemplar eines Buches in der Bibliothek separat zu identifizieren.

![Admin-Seite - Buchinstanz hinzufügen](admin_bookinstance_add.png)

Erstellen Sie eine Reihe dieser Datensätze für jedes Ihrer Bücher. Setzen Sie den Status für mindestens einige Datensätze auf _Verfügbar_ und für andere auf _Ausgeliehen_. Wenn der Status **nicht** _Verfügbar_ ist, setzen Sie auch ein zukünftiges _Fälligkeitsdatum_.

Das war’s! Sie haben jetzt gelernt, wie Sie die Verwaltungsseite einrichten und nutzen. Sie haben auch Datensätze für `Buch`, `BookInstance`, `Genre`, `Sprache` und `Autor` erstellt, die wir verwenden können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Erweiterte Konfiguration

Django leistet ziemlich gute Arbeit beim Erstellen einer grundlegenden Admin-Seite unter Verwendung der Informationen aus den registrierten Modellen:

- Jedes Modell hat eine Liste einzelner Datensätze, die durch den mit der `__str__()`-Methode des Modells erstellten String identifiziert und mit Detailansichten/Formularen zum Bearbeiten verknüpft sind. Standardmäßig hat diese Ansicht ein Aktionsmenü oben, das Sie verwenden können, um Massen-Löschaktionen auf Datensätzen durchzuführen.
- Die Modell-Detail-Datensatzformulare zum Bearbeiten und Hinzufügen von Datensätzen enthalten alle Felder im Modell, vertikal in ihrer Deklarationsreihenfolge angeordnet.

Sie können die Benutzeroberfläche weiter anpassen, um sie noch einfacher zu verwenden. Einige der Dinge, die Sie tun können, sind:

- Listendarstellungen:

  - Zusätzliche Felder/Informationen anzeigen, die für jeden Datensatz angezeigt werden.
  - Filter hinzufügen, um auszuwählen, welche Datensätze basierend auf Datum oder einem anderen Auswahlwert (z.B. Buchausleihstatus) aufgeführt werden.
  - Zusätzliche Optionen zum Aktionsmenü in Listendarstellungen hinzufügen und wählen, wo dieses Menü auf dem Formular angezeigt wird.

- Detailansichten

  - Wählen Sie aus, welche Felder angezeigt werden (oder ausgeschlossen werden), zusammen mit ihrer Reihenfolge, Gruppierung, ob sie bearbeitbar sind, das verwendete Widget, die Ausrichtung usw.
  - Verwandte Felder zu einem Datensatz hinzufügen, um die Inline-Bearbeitung zu ermöglichen (z.B. die Möglichkeit hinzufügen, Buchdatensätze hinzuzufügen und zu bearbeiten, während Sie ihren Autorendatensatz erstellen).

In diesem Abschnitt werden wir uns einige Änderungen ansehen, die die Benutzeroberfläche für unsere _LocalLibrary_ verbessern werden, einschließlich der Hinzufügung weiterer Informationen zu den Listen von `Buch` und `Autor`-Modellen und der Verbesserung des Layouts ihrer Bearbeitungsansichten. Wir werden die Präsentation der Modelle `Sprache` und `Genre` nicht ändern, da diese jeweils nur ein Feld haben, sodass es keinen wirklichen Nutzen gibt, dies zu tun!

Eine vollständige Referenz aller Anpassungsoptionen für die Admin-Seite finden Sie in [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation).

### Registrieren einer ModelAdmin-Klasse

Um zu ändern, wie ein Modell in der Admin-Oberfläche angezeigt wird, definieren Sie eine [ModelAdmin](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#modeladmin-objects) Klasse (die das Layout beschreibt) und registrieren diese beim Modell.

Fangen wir mit dem `Autor`-Modell an. Öffnen Sie **admin.py** in der Kataloganwendung (**/django-locallibrary-tutorial/catalog/admin.py**). Kommentieren Sie Ihre ursprüngliche Registrierung aus (fügen Sie ein # voran) für das `Autor`-Modell:

```python
# admin.site.register(Author)
```

Fügen Sie nun eine neue `AuthorAdmin`- und Registrierung wie unten gezeigt hinzu.

```python
# Define the admin class
class AuthorAdmin(admin.ModelAdmin):
    pass

# Register the admin class with the associated model
admin.site.register(Author, AuthorAdmin)
```

Nun fügen wir `ModelAdmin`-Klassen für `Buch` und `BookInstance` hinzu. Wir müssen erneut die ursprünglichen Registrierungen auskommentieren:

```python
# admin.site.register(Book)
# admin.site.register(BookInstance)
```

Nun erstellen und registrieren wir die neuen Modelle; für diese Demonstration verwenden wir stattdessen den `@register` Dekorator, um die Modelle zu registrieren (dies macht genau dasselbe wie die `admin.site.register()`-Syntax):

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

Derzeit sind alle unsere Admin-Klassen leer (siehe `pass`), sodass sich das Admin-Verhalten nicht geändert hat! Wir können diese jetzt erweitern, um das model-spezifische Admin-Verhalten zu definieren.

### Listendarstellungen konfigurieren

Die _LocalLibrary_ listet derzeit alle Autoren mit dem Objektnamen auf, der aus der `__str__()`-Methode des Modells generiert wurde. Dies ist in Ordnung, wenn Sie nur wenige Autoren haben, aber wenn Sie viele haben, können Duplikate auftreten. Um sie zu unterscheiden oder einfach, weil Sie interessantere Informationen über jeden Autor anzeigen möchten, können Sie [list_display](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display) verwenden, um zusätzliche Felder zur Ansicht hinzuzufügen.

Ersetzen Sie Ihre `AuthorAdmin`-Klasse mit dem Code unten. Die anzuzeigenden Feldnamen werden in einem _Tupel_ in der gewünschten Reihenfolge deklariert, wie dargestellt (dies sind dieselben Namen, die in Ihrem ursprünglichen Modell angegeben wurden).

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')
```

Navigieren Sie jetzt zur Autorenliste auf Ihrer Website. Die obigen Felder sollten nun angezeigt werden, wie unten dargestellt:

![Admin-Seite - Verbesserte Autorenliste](admin_improved_author_list.png)

Für unser `Buch`-Modell werden wir zusätzlich den `Autor` und das `Genre` anzeigen. Der `Autor` ist ein `ForeignKey`-Feld (eins-zu-viele Beziehung) und wird daher durch den `__str__()` Wert für den zugehörigen Datensatz dargestellt. Ersetzen Sie die `BookAdmin`-Klasse durch die untenstehende Version.

```python
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')
```

Leider können wir das `Genre`-Feld nicht direkt in `list_display` angeben, da es sich um ein `ManyToManyField` handelt (Django verhindert dies, weil dadurch ein hoher Datenbankzugriff "Kosten" entstehen würde). Stattdessen definieren wir eine `display_genre`-Funktion, um die Information als String zu erhalten (dies ist die Funktion, die wir oben aufgerufen haben; wir werden sie unten definieren).

> [!NOTE]
> Die Abfrage des `Genre` ist hier möglicherweise keine gute Idee aufgrund der "Kosten" der Datenbankoperation. Wir zeigen Ihnen wie, weil das Aufrufen von Funktionen in Ihren Modellen aus anderen Gründen sehr nützlich sein kann – zum Beispiel, um einen _Löschen_-Link neben jedem Element in der Liste hinzuzufügen.

Fügen Sie den folgenden Code in Ihr `Buch`-Modell (**models.py**) ein. Dieser erstellt einen String aus den ersten drei Werten des `Genre`-Feldes (falls vorhanden) und erstellt eine `short_description`, die auf der Admin-Seite für diese Methode verwendet werden kann.

```python
def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'
```

Nachdem Sie das Modell und die aktualisierte Admin-Seite gespeichert haben, öffnen Sie Ihre Website und gehen Sie zur _Bücher_-Listen-Seite; Sie sollten eine Buchliste ähnlich der untenstehenden sehen:

![Admin-Seite - Verbesserte Buchliste](admin_improved_book_list.png)

Das `Genre`-Modell (und das `Sprache`-Modell, falls Sie eines definiert haben) haben beide nur ein Feld, daher gibt es keinen Sinn, weitere Modelle für sie zu erstellen, um zusätzliche Felder anzuzeigen.

> [!NOTE]
> Es lohnt sich, die `BookInstance`-Modellliste zu aktualisieren, um mindestens den Status und das erwartete Rückgabedatum anzuzeigen. Wir haben dies als Herausforderung am Ende dieses Artikels hinzugefügt!

### Listenfilter hinzufügen

Sobald Sie viele Elemente in einer Liste haben, kann es nützlich sein, filtern zu können, welche Elemente angezeigt werden. Dies wird erreicht, indem Felder im `list_filter` Attribut aufgelistet werden. Ersetzen Sie Ihre aktuelle `BookInstanceAdmin`-Klasse durch den folgenden Codefragment.

```python
class BookInstanceAdmin(admin.ModelAdmin):
    list_filter = ('status', 'due_back')
```

Die Listenansicht enthält nun ein Filterfeld auf der rechten Seite. Beachten Sie, dass Sie Daten und Status auswählen können, um die Werte zu filtern:

![Admin-Seite - BookInstance Listenfilter](admin_improved_bookinstance_list_filters.png)

### Detailansichts-Layout organisieren

Standardmäßig legen die Detailansichten alle Felder vertikal in ihrer Deklarationsreihenfolge an. Sie können die Deklarationsreihenfolge ändern, welche Felder angezeigt (oder ausgeschlossen) werden, ob Abschnitte verwendet werden, um die Informationen zu organisieren, ob Felder horizontal oder vertikal angezeigt werden und sogar, welche Bearbeitungs-Widgets in den Admin-Formularen verwendet werden.

> [!NOTE]
> Die _LocalLibrary_-Modelle sind relativ einfach, sodass es für uns keinen großen Bedarf gibt, das Layout zu ändern; wir werden trotzdem einige Änderungen vornehmen, um Ihnen zu zeigen, wie.

#### Steuerung, welche Felder angezeigt werden und deren Anordnung

Aktualisieren Sie Ihre `AuthorAdmin`-Klasse, um die `fields`-Zeile hinzuzufügen, wie unten gezeigt:

```python
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'date_of_birth', 'date_of_death')

    fields = ['first_name', 'last_name', ('date_of_birth', 'date_of_death')]
```

Das `fields`-Attribut listet nur die Felder auf, die im Formular angezeigt werden sollen, in der gewünschten Reihenfolge. Felder werden standardmäßig vertikal angezeigt, aber sie werden horizontal angezeigt, wenn Sie sie weiter in einem Tupel gruppieren (wie in den "Datum"-Feldern oben gezeigt).

Gehen Sie nun zur Autoren-Detailansicht auf Ihrer Website – es sollte nun wie unten dargestellt erscheinen:

![Admin-Seite - Verbesserte Autorendetailansicht](admin_improved_author_detail.png)

> [!NOTE]
> Sie können auch das `exclude`-Attribut verwenden, um eine Liste von Attributen zu deklarieren, die aus dem Formular ausgeschlossen werden sollen (alle anderen Attribute im Modell werden angezeigt).

#### Abschnittierung der Detailansicht

Sie können "Abschnitte" hinzufügen, um verwandte Modellinformationen innerhalb des Detailformulars zu gruppieren, indem Sie das [fieldsets](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.fieldsets) Attribut verwenden.

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

Jeder Abschnitt hat seinen eigenen Titel (oder `None`, wenn Sie keinen Titel möchten) und ein zugehöriges Tupel von Feldern in einem Dictionary — das Format ist kompliziert zu beschreiben, aber ziemlich einfach zu verstehen, wenn Sie sich das unmittelbar oben stehende Codefragment ansehen.

Navigieren Sie nun zu einer Buchinstanzansicht auf Ihrer Website; das Formular sollte wie unten dargestellt erscheinen:

![Admin-Seite - Verbesserte BookInstance-Detailansicht mit Abschnitten](admin_improved_bookinstance_detail_sections.png)

### Inline-Bearbeitung von zugehörigen Datensätzen

Manchmal kann es sinnvoll sein, beim gleichen Detaileintrag verbundene Datensätze hinzuzufügen. Zum Beispiel kann es sinnvoll sein, sowohl die Buchinformationen als auch Informationen über die spezifischen Exemplare, die Sie haben, auf der gleichen Detailseite zu haben.

Sie können dies tun, indem Sie [inlines](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.inlines) vom Typ [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) (horizontales Layout) oder [StackedInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.StackedInline) (vertikales Layout, genau wie das Standardmodell-Layout) deklarieren. Sie können die `BookInstance`-Informationen inline zu unserem `Buch`-Detail hinzufügen, indem Sie in Ihrem `BookAdmin` `inlines` angeben:

```python
class BooksInstanceInline(admin.TabularInline):
    model = BookInstance

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'display_genre')

    inlines = [BooksInstanceInline]
```

Navigieren Sie nun zu einer Ansicht für ein `Buch` auf Ihrer Website — unten sollten Sie jetzt die zu diesem Buch gehörenden Buchinstanzen sehen (unmittelbar unter den Genre-Feldern des Buches):

![Admin-Seite - Buch mit Inlines](admin_improved_book_detail_inlines.png)

In diesem Fall haben wir nur unsere tabellarische Inline-Klasse deklariert, die einfach alle Felder aus dem _eingeblendeten_ Modell hinzufügt. Sie können allerlei zusätzliche Informationen für das Layout angeben, einschließlich der anzuzeigenden Felder, ihrer Reihenfolge, ob sie schreibgeschützt sind oder nicht usw. (siehe [TabularInline](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/#django.contrib.admin.TabularInline) für weitere Informationen).

> [!NOTE]
> Diese Funktionalität hat einige schmerzhafte Einschränkungen! Im obigen Screenshot haben wir drei bestehende Buchinstanzen, gefolgt von drei Platzhaltern für neue Buchinstanzen (die sehr ähnlich aussehen!). Es wäre besser, zunächst KEINE zusätzlichen Buchinstanzen zu haben und diese einfach mit dem Link **Eine weitere Buchinstanz hinzufügen** hinzuzufügen oder einfach die `BookInstance`s hier nur als nicht lesbare Links aufzulisten. Die erste Option kann umgesetzt werden, indem das `extra`-Attribut auf `0` im `BooksInstanceInline`-Modell gesetzt wird, probieren Sie es selbst aus.

## Fordern Sie sich selbst heraus

Wir haben in diesem Abschnitt viel gelernt, es ist also an der Zeit, dass Sie ein paar Dinge ausprobieren.

1. Fügen Sie für die `BookInstance`-Listenansicht Code hinzu, um das Buch, den Status, das Fälligkeitsdatum und die ID anzuzeigen (anstelle des Standard-`__str__()`-Textes).
2. Fügen Sie eine Inline-Liste von `Buch`-Elementen zur `Autor`-Detailansicht hinzu, indem Sie denselben Ansatz wie bei `Buch`/`BookInstance` verwenden.

## Zusammenfassung

Das war’s! Sie haben nun gelernt, wie Sie die Verwaltungsseite in ihrer einfachsten und verbesserten Form einrichten, wie Sie einen Superuser erstellen und wie Sie die Admin-Seite navigieren, anzeigen, löschen und aktualisieren. Im Laufe der Zeit haben Sie eine Menge Bücher, Buchinstanzen, Genres und Autoren erstellt, die wir auflisten und anzeigen können, sobald wir unsere eigenen Ansichten und Vorlagen erstellen.

## Weiterführende Literatur

- [The Django Admin site](https://docs.djangoproject.com/en/5.0/ref/contrib/admin/) (Django-Dokumentation)
- [Writing your first Django app, part 2: Introducing the Django Admin](https://docs.djangoproject.com/en/5.0/intro/tutorial02/#introducing-the-django-admin) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/Models", "Learn/Server-side/Django/Home_page", "Learn/Server-side/Django")}}
