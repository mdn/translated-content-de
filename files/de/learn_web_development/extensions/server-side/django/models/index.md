---
title: "Django Tutorial Teil 3: Modelle verwenden"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Modelle für die LocalLibrary-Website definiert werden. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Er zeigt auch kurz einige der Hauptmethoden, mit denen Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellen einer Skelett-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage zu sein, Ihre eigenen Modelle zu entwerfen und zu erstellen, indem Sie Felder angemessen auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch deren maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für Dokumentationen, Bezeichnungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine von mehreren als Teil Ihrer Projekteinstellungen auswählen. Sobald Sie sich für eine zu verwendende Datenbank entschieden haben, müssen Sie überhaupt nicht direkt darauf zugreifen – Sie schreiben einfach Ihre Modellstruktur und einen anderen Code, und Django erledigt die ganze Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie Sie die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Beispiel definieren und darauf zugreifen.

## Entwurf der LocalLibrary-Modelle

Bevor Sie loslegen und mit dem Codieren der Modelle beginnen, lohnt es sich, einige Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf Buchtitel, Autor, Sprache und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, separate Modelle für jedes „Objekt“ (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahloptionen (z. B. wie eine Dropdown-Liste von Auswahlmöglichkeiten) darzustellen, anstatt die Auswahlmöglichkeiten direkt in der Website zu codieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle sind in diesem Fall das Buchgenre (z. B. Science Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) oder viele zu viele (`ManyToManyField`) sind.

Vor diesem Hintergrund zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Modell UML mit fixierter Autor-Multiplizität in der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status spezifischer physischer Exemplare des im System verfügbaren Buches) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir haben die Werte (`LOAN_STATUS`) codiert, da wir nicht erwarten, dass diese sich ändern. In jedem der Kästchen unten sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabewerte.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells angeben, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und ein Genre verwandt sind. Die Zahlen in der Nähe des Genremodells zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt gibt ein grundlegendes Primer, das erklärt, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Primer

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modell-Definition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Subklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der unten gezeigte Codeausschnitt zeigt ein „typisches“ Modell, das `MyModelName` genannt wird:

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

In den folgenden Abschnitten werden wir auf jedes der Funktionen innerhalb des Modells im Detail eingehen:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern beliebigen Typs haben – jedes repräsentiert eine Datenspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jede Datenbankaufzeichnung (Zeile) besteht aus einem der Feldwerte. Betrachten wir das unten gezeigte Beispiel:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` – was bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthält. Die Feldtypen werden unter Verwendung spezifischer Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der verwendet wird, um die Daten in der Datenbank zu speichern, zusammen mit den Validierungskriterien, die verwendet werden sollen, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente übernehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfetext, der möglicherweise in einem Formular angezeigt wird, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Vorlagen auf ihn zu verweisen.
Felder haben auch eine Beschriftung, die mit dem Argument `verbose_name` angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht festgelegt ist, wird die Beschriftung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` eine Standardbeschriftung von _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf ihre Standardreihenfolge aus, wenn ein Modell in einem Formular gerendert wird (z. B. auf der Admin-Seite), obwohl dies überschrieben werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können beim Deklarieren vieler/meisten verschiedener Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Stellt ein Textetikett für HTML-Formulare bereit (z. B. auf der Admin-Seite), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, der in Feldbeschriftungen verwendet wird. Wenn nicht angegeben, leitet Django den Standard-verbose_name aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein. In diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies zutrifft (ein `CharField` speichert stattdessen eine leere Zeichenkette). Der Standard ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, ist das Feld in Ihren Formularen leer zulässig. Der Standard ist `False`, was bedeutet, dass die Formularvalidierung von Django Sie zwingt, einen Wert einzugeben. Dies wird häufig mit `null=True` verwendet, da Sie, wenn Sie leere Werte zulassen möchten, auch möchten, dass die Datenbank in der Lage ist, sie angemessen darzustellen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Optionen für dieses Feld. Wenn dies angegeben ist, wird das standardmäßige entsprechende Formular-Widget anstelle des Standard-Textfelds ein Auswahlfeld mit diesen Optionen sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, wird sichergestellt, dass der Feldwert in der Datenbank eindeutig ist.
  Dies kann genutzt werden, um die Duplizierung von Feldern zu verhindern, die nicht die gleichen Werte haben dürfen.
  Der Standard ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (Ein Primärschlüssel ist eine spezielle Datenbanksäule, die dazu dient, alle verschiedenen Tabelleneinträge eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, fügt Django automatisch ein Feld zu diesem Zweck hinzu.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede Anwendung in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD)-Einstellung angegeben werden.

  > [!NOTE]
  > Anwendungen, die mit **manage.py** erstellt werden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der lokalen Bibliothek **catalog/apps.py**-Datei sehen:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen – Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Allgemeine Feldtypen

Die folgende Liste beschreibt einige der häufig verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittelgroße strings mit fester Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große strings mit variabler Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zur Speicherung von Integer-Werten (ganze Zahlen) und zur Validierung eingegebener Werte als Integer in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zur Speicherung/darstellung von Datums- und Datums-/Zeitinformationen verwendet (als Python-Objekte `datetime.date` und `datetime.datetime`, jeweils). Diese Felder können außerdem die (wechselseitig exklusiven) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum festzulegen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-Viele-Beziehung zu einem anderen Datenbankmodell zu definieren (z. B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" enthalten, der auf diesen "Schlüssel" verweist, befinden sich auf der "vielen" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-Viele-Beziehung zu definieren (z. B. kann ein Buch mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z. B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Feldtypen, einschließlich Felder für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommatzahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellweite Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten besteht darin, die _Standardreihenfolge_ der Datensätze zu steuern, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Dies tun Sie, indem Sie die Übereinstimmungsreihenfolge in einer Liste von Feldnamen zum Attribut `ordering` angeben, wie oben gezeigt. Die Reihenfolge hängt von der Art des Feldes ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie den Feldnamen mit einem Minuszeichen (-) prefixen, um die Sortierreihenfolge umzukehren.

Beispielsweise, wenn wir uns entscheiden sollten, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel, von A-Z, und dann nach Veröffentlichungsdatum innerhalb jedes Titels sortiert, von neu bis alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein erläuternder Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue „Zugriffsberechtigungen“ für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um eine Sortierung basierend auf einem anderen Feld zu ermöglichen, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) zu ermöglichen auf mögliche Werte von Daten, die gespeichert werden können, oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell auf eine vorhandene Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen finden Sie hier: [Model metadata options](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Mindestens in jedem Modell sollten Sie die Standard-Python-Klassenmethode `__str__()` definieren, um eine menschenlesbare Zeichenfolge für jedes Objekt zurückzugeben.** Diese Zeichenfolge wird verwendet, um einzelne Datensätze auf der Admin-Seite (und überall sonst, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Oft wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode, die in Django-Modellen eingeschlossen wird, ist `get_absolute_url()`, die eine URL zum Anzeigen einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch einen "Auf Website ansehen"-Button zu den Datensatzbearbeitungsbildschirmen in der Admin-Oberfläche hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie eine URL-Zuordnung erstellen, um die Antwort und die ID an eine „Modell Detailansicht“ weiterzuleiten (die die erforderliche Arbeit zur Anzeige des Datensatzes erledigt). Die `reverse()`-Funktion oben ist in der Lage, Ihre URL-Zuordnung zu "rückgängig" machen (in oben erwähntem Fall mit dem Namen _'model-detail-view'_) um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie dazu noch die URL-Zuordnung, die Ansicht und das Template erstellen!

Sie können auch beliebige andere Methoden definieren und von Ihrem Code oder den Vorlagen aufrufen (vorausgesetzt, dass sie keine Parameter übernehmen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie das funktioniert, in dem Tutorial, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, erhält der neue Datensatz automatisch eines mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des oben genannten Datensatzes abfragen, und es hätte einen Wert von 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Das Erklären, wie man nach Datensätzen mithilfe "abstrakter" Modell- und Feldnamen sucht, kann etwas verwirrend sein. In der folgenden Diskussion verweisen wir auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre ebenfalls ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mit `objects.all()` erhalten. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, durch die wir iterieren/schleifen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` zu filtern, um ein bestimmtes **Text**- oder **numerisches** Feld mit bestimmten Kriterien abzugleichen. Zum Beispiel, um nach Büchern zu filtern, die "wild" im Titel enthalten, und sie dann zu zählen, könnten wir das Folgende tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder zum Abgleichen und der Typ des Abgleichs werden im Filternamenparameter festgelegt, im Format: `field_name__match_type` (beachten Sie die _doppelten Unterstriche_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem groß- und kleinschreibungssensitiven Abgleich. Es gibt viele andere Arten von Abgleichen, die Sie durchführen können: `icontains` (groß- und kleinschreibungsinsensitiv), `iexact` (groß- und kleinschreibungsinsensitiver exakter Abgleich), `exact` (groß- und kleinschreibungssensitiver exakter Abgleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf einem Feld filtern, das eine Eins-zu-Viele-Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen doppelten Unterstrichen "indizieren" auf Felder innerhalb des zugehörigen Modells.
Zum Beispiel, um nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie auf das `name` durch das `genre`-Feld indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Ebenen von Beziehungen (`ForeignKey` / `ManyToManyField`) zu durchlaufen, wie Sie möchten.
> Zum Beispiel könnte ein `Book`, das verschiedene Typen hat, die unter Verwendung einer weiteren "cover"-Beziehung definiert sind, einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt viel mehr, was Sie mit Abfragen tun können, einschließlich rückwärts Suchen von zugehörigen Modellen, Filterketten, Zurückgeben eines kleineren Satzes von Werten usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Das Boilerplate am Anfang der Seite importiert das Modul _models_, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre` Modellcode und fügen Sie ihn unten in Ihre `models.py` Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern – zum Beispiel, ob es Fiktion oder Sachbuch, Romantik oder Militärgeschichte ist usw.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als Freitext oder Auswahloption, damit die möglichen Werte durch die Datenbank verwaltet und nicht fest codiert sind.

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

Das Modell hat ein einzelnes `CharField` Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat etwas `help_text`).
Wir haben dieses Feld auf eindeutig (`unique=True`) gesetzt, da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert ist. Es wurde kein verbose_name definiert, sodass die Feldbeschriftung `Name` sein wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()` Methode, die eine URL zurückgibt, die verwendet werden kann, um einen Detaileintrag für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

Das Setzen von `unique=True` auf das Feld oben verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, jedoch nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den Metadaten des Modells ([#Metadaten](#metadaten)), um zu spezifizieren, dass der Kleinschreibung der Wert im `name`-Feld in der Datenbank eindeutig sein muss und die `violation_error_message`-Zeichenfolge anzeigt, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Für weitere Informationen siehe [Constraints-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buch-Modell

Kopieren Sie das `Book`-Modell unten und fügen Sie es erneut unten in Ihre Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch im Allgemeinen, jedoch nicht ein bestimmtes physisches "Exemplar" oder "Kopie", das ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den `title` und die `isbn` des Buches zu repräsentieren.
Für `isbn`, beachten Sie, wie der erste unbenannte Parameter das Label explizit als "ISBN" setzt (ansonsten würde es standardmäßig "Isbn" sein). Wir setzen auch den Parameter `unique` als `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert in einer Tabelle weltweit eindeutig).
Im Gegensatz zur `isbn` (und dem Genrenamen) wird der `title` nicht als eindeutig festgelegt, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, da dieser Text ziemlich lang sein muss.

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

Die Genre ist ein `ManyToManyField`, so dass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` erklärt, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter entweder unter Verwendung der Modellklasse oder eines Strings mit dem Namen des zugehörigen Modells erklärt. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor sie referenziert wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was es der Datenbank erlaubt, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, das verhindern wird, dass der Autor eines Buches gelöscht wird, wenn es von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, bedeutet das, dass, wenn der Autor gelöscht wurde, dieses Buch ebenfalls gelöscht werden würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während jedes Buch es verwendet oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, indem es das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz zu repräsentieren. Die letzte Methode `get_absolute_url()` gibt eine URL zurück, die verwendet werden kann, um einen Detaileintrag für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

### Buchinstanz-Modell

Kopieren Sie als nächstes das `BookInstance`-Modell (unten gezeigt) unter den anderen Modellen. Das `BookInstance` stellt eine bestimmte Kopie eines Buches dar, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie voraussichtlich wieder verfügbar sein wird, "Imprimatur" oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind Ihnen jetzt bekannt. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einer `BookInstance` referenziert wird.
- `CharField`, um die Imprimatur (spezifische Veröffentlichung) des Buches zu repräsentieren.

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

Wir erklären zudem ein paar neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Diese Art von Feld weist jedem Exemplar einen weltweit eindeutigen Wert zu (eines für jedes Buch, das Sie in der Bibliothek finden).
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch voraussichtlich nach dem Ausleihen oder in der Wartung wieder verfügbar sein wird). Dieser Wert kann `blank` oder `null` sein (wird benötigt, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu ordnen, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Liste definiert. Wie Sie sehen, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält, und übergeben es an das Choices-Argument. Der Wert eines Schlüssel-/Werte-Paares ist ein Anzeige wert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) gesetzt, da Bücher zunächst nicht verfügbar erstellt werden, bevor sie in den Regalen gelagert werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt durch eine Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book`.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die String-Interpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte String](https://peps.python.org/pep-3101/)-Syntax verwendet, die ebenfalls eine gültige Möglichkeit ist, Zeichenfolgen in Python zu formatieren (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

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

Alle Felder/Methoden sollten nun bekannt sein. Das Modell definiert einen Autor mit einem Vornamen, Nachnamen und Geburts- und Todesdatum (beides optional). Es wird angegeben, dass standardmäßig `__str__()` den Namen in Reihenfolge _Nachname_, _Vorname_ zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail` URL-Zuordnung um, um die URL für die Anzeige eines einzelnen Autors abzurufen.

## Erneutes Ausführen der Datenbankmigrationen

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Gönner spendet eine Reihe neuer Bücher, die in einer anderen Sprache geschrieben sind (sagen wir, Farsi). Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden sollen, und sie dann zu den Modellen hinzuzufügen.

Erwägen Sie Folgendes:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verbunden werden?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer fest codierten Auswahl-Liste dargestellt werden?

Nachdem Sie entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, was wir [für unser Projekt auf GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells Ihre Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz davon ablenken, die Website zu erstellen, und uns die _Django Administrations-Site_ ansehen. Diese Site ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
