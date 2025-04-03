---
title: "Django-Tutorial Teil 3: Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie man Modelle für die LocalLibrary-Website definiert. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Es wird auch kurz gezeigt, auf welche Hauptweisen auf Modelldaten zugegriffen werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Erstellen einer Skelett-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen und dabei die Felder angemessen auszuwählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*Typen* und möglicherweise auch deren maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte zur Dokumentation, Beschriftungstexte für Formulare etc. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine aus mehreren auswählen. Sobald Sie die zu verwendende Datenbank ausgewählt haben, müssen Sie nicht mehr direkt darauf zugreifen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte mühsame Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie Modelle für das [LocalLibrary-Website-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugegriffen wird.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Kopien verfügbar haben (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten in die Website selbst einzucodieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle sind in diesem Fall das Buchgenre (z.B. Science-Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit diesem Gedanken zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästen dargestellt).

![LocalLibrary Model UML mit fester Autoren-Multiplikation innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status der spezifischen physischen Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben auch beschlossen, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben beschlossen, kein Modell für den `BookInstance:status` zu haben – wir haben die Werte (`LOAN_STATUS`) fest codiert, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kastens sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Zahlen (maximal und minimal) jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästen, dass Buch und Genre miteinander verbunden sind. Die Zahlen in der Nähe des Genre-Modells zeigen, dass ein Buch eins oder mehr Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buch-Modell zeigen, dass ein Genre null oder viele zugeordnete Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung in die Erklärung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Basics

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und über einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der untenstehende Codeausschnitt zeigt ein "typisches" Modell namens `MyModelName`:

```python
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the URL to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name
```

In den folgenden Abschnitten werden wir jedes der Features innerhalb des Modells im Detail erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern haben, von jedem Typ — jedes repräsentiert eine Datenspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jedes Datenbankdatensatz (Zeile) besteht aus einem der jeweiligen Feldwerte. Lassen Sie uns das untenstehende Beispiel betrachten:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einziges Feld namens `my_field_name` vom Typ `models.CharField` — das bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthalten wird. Die Feldtypen werden mit bestimmten Klassen zugewiesen, die den Datensatztyp bestimmen, der verwendet wird, um die Daten in der Datenbank zu speichern, zusammen mit den Validierungskriterien, die verwendet werden, wenn Werte von einem HTML-Formular empfangen werden (d.h. was ein gültiger Wert ist). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Werts in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfreicher Text, der in einem Formular angezeigt werden kann, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Vorlagen darauf zu verweisen.
Felder haben auch eine Beschriftung, die mit dem `verbose_name`-Argument angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht gesetzt ist, wird die Beschriftung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` bei Verwendung in Formularen die Standardbeschriftung _My field name_).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst deren Standardreihenfolge, wenn ein Modell in einem Formular (z.B. in der Admin-Website) gerendert wird, obwohl dies umgangen werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können verwendet werden, wenn viele/most der verschiedenen Feldtypen deklariert werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet eine Textbeschriftung für HTML-Formulare (z.B. in der Admin-Website), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschlich lesbarer Name für das Feld, das in Feldbeschriftungen verwendet wird. Wenn nicht angegeben, wird Django den Standard-`verbose_name` aus dem Feldnamen ableiten.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in welchem Fall das Objekt jedes Mal aufgerufen wird, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` wird stattdessen eine leere Zeichenfolge speichern). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie zwingen wird, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, da, wenn Sie leere Werte zulassen, Sie auch möchten, dass die Datenbank sie angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies bereitgestellt wird, wird das standardmäßig zugehörige Formular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten sein, anstelle des standardmäßigen Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die keine gleichen Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, legt das aktuelle Feld als Primärschlüssel für das Modell fest (Ein Primärschlüssel ist eine spezielle Datenbankspalte, die dafür bestimmt ist, alle verschiedenen Tabellendatensätze eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, wird Django automatisch ein Feld zu diesem Zweck hinzufügen.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellung angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der Local-Library-**catalog/apps.py**-Datei sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen — Sie können die [vollständige Liste der Feldoptionen hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Allgemeine Feldtypen

Die folgende Liste beschreibt einige der am häufigsten verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittlere feste Längen der Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für lange Zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlen (ganze Zahlen) und zum Validieren eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Representieren von Datums- und Datums-/Uhrzeitinformationen (als Python-`datetime.date` und `datetime.datetime`-Objekte) verwendet. Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld auf das aktuelle Datum jedes Mal zu setzen, wenn das Modell gespeichert wird), `auto_now_add` (um das Datum nur beim Erstellen des Modells festzulegen) und `default` (um ein Standarddatum festzulegen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden zum Hochladen von Dateien bzw. Bildern verwendet (das `ImageField` fügt eine zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert wird. Ein solcher Primärschlüssel wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell anzugeben (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine"-Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" zu diesem "Schlüssel" enthalten, sind auf der "vielen"-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele-Beziehung anzugeben (z.B. ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Feldtypen, einschließlich Felder für verschiedene Zahlentypen (große Ganzzahlen, kleine Ganzzahlen, Fließkommazahlen), Boolesche Werte, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Uhrzeit usw.). Sie können die [vollständige Liste hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können Modell-Metadaten auf Modellebene durch Deklarieren der `class Meta` angeben, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eines der nützlichsten Features dieser Metadaten ist es, die _Standardreihenfolge_ der zurückgegebenen Datensätze zu steuern, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Übereinstimmungsreihenfolge in einer Liste von Feldnamen in das `ordering`-Attribut angeben, wie oben gezeigt. Die Reihenfolge hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Zum Beispiel, wenn wir uns entscheiden würden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel, von A-Z, und dann nach Veröffentlichungsdatum innerhalb jedes Titels, von neu nach alt, sortiert werden.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsrechte" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um das Sortieren basierend auf einem anderen Feld zu ermöglichen, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte von Daten festzulegen, die gespeichert werden können, oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können, und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell auf eine vorhandene Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Model metadata options](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Minimal sollte in jedem Modell die Standard-Python-Klassenmethode `__str__()` definiert werden, um einen menschlich lesbaren String für jedes Objekt zurückzugeben.** Dieser String wird verwendet, um individuelle Datensätze in der Administrationsseite darzustellen (und überall sonst, wo Sie sich auf eine Modellinstanz beziehen müssen). Oft wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufig eingeschlossene Methode in Django-Modellen ist `get_absolute_url()`, die eine URL zurückgibt, um einzelne Modell-Datensätze auf der Website anzuzeigen (wenn Sie diese Methode definieren, wird Django automatisch eine "Auf Website anzeigen"-Schaltfläche zu den Datensatzbearbeitungsbildschirmen des Modells auf der Admin-Seite hinzufügen). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um individuelle Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Modelldetailansicht" weiterzuleiten (die die erforderliche Arbeit zur Anzeige des Datensatzes erledigt). Die obige `reverse()`-Funktion ist in der Lage, Ihren URL-Mapper (im obigen Fall benannt _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, damit dies funktioniert, immer noch die URL-Zuordnung, Ansicht und Vorlage erstellen!

Sie können auch andere beliebige Methoden definieren und sie von Ihrem Code oder Vorlagen aus aufrufen (vorausgesetzt, dass sie keine Parameter übernehmen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und um Abfragen auszuführen, um alle Datensätze oder bestimmte Teilsätze von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie das im Tutorial machen, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines zugewiesen, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte einen Wert von 1.

Sie können mit der Punktsyntax auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suche nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Die Erklärung, wie man nach Datensätzen mit "abstrakten" Modell- und Feldnamen sucht, kann etwas verwirrend sein. In der folgenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre auch ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mit `objects.all()` erhalten. Das `QuerySet` ist ein iterierbares Objekt, das bedeutet, dass es eine Anzahl von Objekten enthält, durch die wir iterieren/über die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, die zurückgegebenen `QuerySet` so zu filtern, dass ein spezifiziertes **Text**- oder **Numerisches**-Feld mit bestimmten Kriterien übereinstimmt. Zum Beispiel, um nach Büchern zu filtern, die "wild" im Titel enthalten, und sie dann zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die übereinstimmt werden sollen, und der Übereinstimmungstyp werden im Filterparameter-Namen definiert, wobei das Format verwendet wird: `field_name__match_type` (beachten Sie die _doppelten Unterstriche_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einer Groß-/Kleinschreibungssensitiven Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie machen können: `icontains` (groß-/kleinschreibungsunempfindlich), `iexact` (groß-/kleinschreibungsunempfindliche genaue Übereinstimmung), `exact` (groß-/kleinschreibungssensitive genaue Übereinstimmung) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie möglicherweise auf ein Feld filtern, das eine Eins-zu-viele-Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie "indizieren" zu Feldern innerhalb des zugehörigen Modells mit zusätzlichen doppelten Unterstrichen.
Also zum Beispiel um nach Büchern mit einem bestimmten Genre-Muster zu filtern, müssen Sie über das `genre`-Feld zum `name` indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren, wie Sie möchten.
> Zum Beispiel könnte ein `Book`, das unterschiedliche Typen hat, die mit einer weiteren "cover"-Beziehung definiert sind, einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt noch vieles mehr, was Sie mit Abfragen machen können, einschließlich Rückwärtssuchen von zugehörigen Modellen, Verkettung von Filtern, Rückgabe eines kleineren Satzes von Werten usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Der Boilerplate-Code oben auf der Seite importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den `Genre`-Modellcode, der unten gezeigt wird, und fügen Sie ihn am Ende Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern – z.B. ob es Fiktion oder Sachliteratur, Romantik oder Militärgeschichte ist usw.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als freien Text oder eine Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt hart kodiert zu sein.

```python
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case insensitive match)"
            ),
        ]
```

Das Modell hat ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat einige `help_text`).
Wir haben dieses Feld als eindeutig (`unique=True`) festgelegt, weil es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das von einem bestimmten Datensatz definiert wird. Es wurde kein verbose name definiert, sodass die Feldbeschriftung `Name` lautet, wenn sie in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat, sowie eine zugehörige Ansicht und Vorlage definieren).

Das Setzen von `unique=True` auf dem obigen Feld verhindert, dass Genres mit _exakt_ gleichem Namen erstellt werden, aber nicht Varianten wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den [Metadaten](#metadaten) des Modells, um anzugeben, dass der kleingeschriebene Wert im `name`-Feld in der Datenbank eindeutig sein muss, und zeigt die `violation_error_message`-Zeichenfolge an, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen für ein Feld oder Felder definieren.
Weitere Informationen finden Sie in der [Einschränkungen-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buch-Modell

Kopieren Sie das `Book`-Modell unten und fügen Sie es ebenfalls am Ende Ihrer Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch im Allgemeinen, aber nicht eine bestimmte physische "Instanz" oder "Kopie", die zur Ausleihe zur Verfügung steht.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen.
Beim `isbn` beachten Sie, wie der erste unbenannte Parameter explizit die Beschriftung auf "ISBN" setzt (ansonsten wäre es standardmäßig "Isbn"). Wir setzen auch den Parameter `unique` als `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert global eindeutig in einer Tabelle).
Im Gegensatz zum `isbn` (und dem Genrenamen) ist der `title` nicht als eindeutig festgelegt, da verschiedene Bücher möglicherweise denselben Namen haben könnten.
Das Modell verwendet `TextField` für die `summary`, da dieser Text ziemlich lang sein könnte.

```python
class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Foreign Key used because book can only have one author, but authors can have multiple books.
    # Author as a string rather than object because it hasn't been declared yet in file.

    summary = models.TextField(
        max_length=1000, help_text="Enter a brief description of the book")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(
        Genre, help_text="Select a genre for this book")

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter deklariert, entweder unter Verwendung der Modellklasse oder einer Zeichenfolge, die den Namen des zugehörigen Modells enthält. Sie müssen den Namen des Modells als Zeichenfolge verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, wodurch die Datenbank erlaubt wird, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, was verhindern wird, dass der mit einem Buch verbundene Autor gelöscht wird, wenn er von irgendeinem Buch referenziert wird.

> [!WARNING]
> Standardmäßig lautet `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wird, dieses Buch ebenfalls gelöscht würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch ihn verwendet oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, das das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz darzustellen. Die endgültige Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

### BookInstance-Modell

Kopieren Sie als Nächstes das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind nun vertraut. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
- `CharField` repräsentiert das Imprint (spezifische Veröffentlichung) des Buches.

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):

    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

Wir deklarieren zusätzlich einige neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell zu setzen.
  Dieser Feldtyp weist jeder Instanz (jedem Buch, das in der Bibliothek gefunden werden kann) einen global eindeutigen Wert zu.
- `DateField` wird für das `due_back`-Datum (an dem das Buch nach dem Ausleihen oder in Wartung voraussichtlich verfügbar wird) verwendet. Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modell-Metadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu ordnen, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, der eine Auswahl-/Auswahlliste definiert. Wie Sie sehen können, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält, und übergeben es als choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst als nicht verfügbar erstellt werden, bevor sie in die Regale gestellt werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt unter Verwendung einer Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book`.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die Zeichenfolgeninterpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte Zeichenfolgensyntax](https://peps.python.org/pep-3101/) verwendet, die auch eine gültige Möglichkeit zum Formatieren von Zeichenfolgen in Python ist (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autor-Modell

Kopieren Sie das `Author`-Modell (unten gezeigt) unter den vorhandenen Code in **models.py**.

```python
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

Alle Felder/Methoden sollten jetzt vertraut sein. Das Modell definiert einen Autor mit einem Vornamen, Nachnamen und Geburts- sowie Todesdaten (beide optional). Es gibt an, dass `__str__()` standardmäßig den Namen in der Reihenfolge _Nachname_, _Vorname_ zurückgibt. Die `get_absolute_url()` Methode kehrt die `author-detail` URL-Zuordnung um, um die URL zum Anzeigen eines einzelnen Autors zu erhalten.

## Führen Sie die Datenbankmigrationen erneut aus

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie zu Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Förderer stiftet eine Anzahl neuer Bücher, die in einer anderen Sprache (sagen wir Persisch) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden können, und sie dann zu den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte "language" mit einem `Book`, `BookInstance` oder einem anderen Objekt assoziiert sein?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer hart codierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, wofür wir uns entschieden haben, auf GitHub [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells die Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und umzusetzen.

An dieser Stelle werden wir kurz vom Erstellen der Website abweichen und uns die _Django-Administrationsseite_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet-API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
