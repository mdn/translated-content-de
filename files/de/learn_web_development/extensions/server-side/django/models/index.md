---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Modelle für die LocalLibrary-Website definiert werden. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Er zeigt auch kurz einige der Hauptmethoden, mit denen Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellen einer Gerüst-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage zu sein, eigene Modelle zu entwerfen und zu erstellen, indem Felder angemessen ausgewählt werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen wählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr interagieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die gesamte Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie die Modelle für das [LocalLibrary-Website-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und aufgerufen werden.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit der Programmierung der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare zur Verfügung haben (mit weltweit eindeutiger ID, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnten mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes „Objekt“ (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahloptionen zu repräsentieren (z. B. eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website zu kodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern könnten. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Buchgenre (z. B. Science-Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir die Beziehungen bedenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins sind (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`).

Mit diesem Hintergrund zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Modell-UML mit festgelegter Autor-Multiplikation innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status spezifischer physischer Kopien des im System verfügbaren Buches) und den Autor erstellt. Außerdem haben wir uns entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben beschlossen, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest kodiert, weil wir nicht erwarten, dass sich diese ändern. Innerhalb jedes der Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplikatoren_. Die Multiplikatoren sind die Zahlen auf dem Diagramm, die die Anzahl (Minimum und Maximum) jedes Modells angeben, das möglicherweise in der Beziehung vorhanden ist. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre miteinander verbunden sind. Die Zahlen nahe am Genre-Modell zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buch-Modell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung zur Erklärung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Einführung

Dieser Abschnitt bietet eine kurze Übersicht darüber, wie ein Modell definiert wird und beschreibt einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der Datei **models.py** einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der unten stehende Codeausschnitt zeigt ein „typisches“ Modell mit dem Namen `MyModelName`:

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

In den untenstehenden Abschnitten werden wir jede der Funktionen innerhalb des Modells im Detail untersuchen:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben — jedes stellt eine Datenspalte dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datensatz (Zeile) besteht aus einem der Feldwerte. Schauen wir uns das unten gezeigte Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — was bedeutet, dass dieses Feld Zeichenfolgen alphanumerischer Zeichen enthalten wird. Die Feldtypen werden mit spezifischen Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zur Speicherung der Daten in der Datenbank verwendet wird, zusammen mit den Validierungskriterien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente enthalten, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt die maximale Länge eines Wertes in diesem Feld als 20 Zeichen an.
- `help_text='Enter field documentation'` — hilfreicher Text, der möglicherweise in einem Formular angezeigt wird, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um darauf in Abfragen und Templates zu verweisen.
Felder haben auch eine Bezeichnung, die mit dem `verbose_name`-Argument angegeben wird (Standardwert ist `None`).
Wenn `verbose_name` nicht gesetzt ist, wird die Bezeichnung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` standardmäßig die Bezeichnung _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der die Felder deklariert werden, wirkt sich auf ihre Standardreihenfolge aus, wenn ein Modell in einem Formular wiedergegeben wird (zum Beispiel in der Admin-Oberfläche), obwohl dies überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden allgemeinen Argumente können verwendet werden, wenn viele/ die meisten der verschiedenen Feldtypen deklariert werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet eine Textbezeichnung für HTML-Formulare (zum Beispiel in der Admin-Oberfläche), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, der in Feldbezeichnungen verwendet wird. Wenn nicht angegeben, wird Django den Standard-Verbose-Namen aus dem Feldnamen ableiten.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein; in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` speichert stattdessen eine leere Zeichenfolge). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie zwingt, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, denn wenn Sie leere Werte zulassen, möchten Sie auch, dass die Datenbank sie angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, wird das Standardformular-Widget eine Auswahlbox mit diesen Auswahlmöglichkeiten anstelle des Standard-Textfeldes sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, wird sichergestellt, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die nicht den gleichen Wert haben können.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, wird das aktuelle Feld zum Primärschlüssel für das Modell festgelegt (ein Primärschlüssel ist eine spezielle Datenbankspalte, die dazu dient, alle verschiedenen Tabellendatensätze eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, wird Django automatisch ein Feld zu diesem Zweck hinzufügen.
  Der Typ von automatisch generierten Primärschlüsselfeldern kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellung angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der **catalog/apps.py** Datei der lokalen Bibliothek sehen:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der häufig verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittellange Zeichenfolgen mit fester Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenfolgen mit beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zur Speicherung von Ganzzahlen (ganze Zahlen) und zur Validierung eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden für die Speicherung/Darstellung von Datums- und Datums-/Zeitinformationen verwendet (als Python `datetime.date` und `datetime.datetime` Objekte, entsprechend). Diese Felder können zusätzlich die (einander ausschließenden) Parameter `auto_now=True` (um das Feld jedes Mal auf das aktuelle Datum zu setzen, wenn das Modell gespeichert wird), `auto_now_add` (um das Datum nur dann zu setzen, wenn das Modell erstmals erstellt wird) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) dient zur Speicherung und Validierung von E-Mail-Adressen.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierungen hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist eine spezielle Form von `IntegerField`, die automatisch inkrementiert. Ein Primärschlüssel dieser Art wird automatisch zu Ihrem Modell hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-Viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z. B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die „eine“-Seite der Beziehung ist das Modell, das den „Schlüssel“ enthält (Modelle, die eine „Fremdschlüssel“-Verknüpfung zu diesem „Schlüssel“ enthalten, befinden sich auf der „viele“-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-Viele-Beziehung zu spezifizieren (z. B. kann ein Buch mehrere Genres haben und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der verknüpfte Datensatz gelöscht wird (z. B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Feldern für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Fließkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere „zeitbezogene“ Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können Modell-Metadaten auf Modell-Ebene für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Eigenschaften dieser Metadaten ist es, die _Standardreihenfolge_ der Datensätze zu kontrollieren, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen an das `ordering`-Attribut angeben, wie oben gezeigt. Die Reihenfolge hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie den Feldnamen mit einem Minuszeichen (-) prefixen, um die Sortierreihenfolge umzukehren.

So wie ein Beispiel, wenn wir Bücher standardmäßig so sortieren würden:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel sortiert, von A-Z, und dann nach dem Erscheinungsdatum innerhalb jedes Titels, von neu nach alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Metadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um die Sortierung basierend auf einem anderen Feld zu erlauben, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) bezüglich der möglichen Werte der zu speichernden Daten zu definieren oder um zu erklären, dass die Klasse „abstrakt“ ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell einer existierenden Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Modell-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Minimal sollten Sie in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um eine menschenlesbare Zeichenfolge für jedes Objekt zurückzugeben.** Diese Zeichenfolge wird verwendet, um einzelne Datensätze in der Administrationsoberfläche (und überall sonst, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Oft wird dies einen Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode, die in Django-Modellen enthalten ist, ist `get_absolute_url()`, die eine URL für die Anzeige einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, wird Django automatisch eine Schaltfläche „Auf der Website ansehen“ zu den Datensatzbearbeitungsbildschirmen des Modells in der Admin-Oberfläche hinzufügen). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei „2“ die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Zuordner erstellen, um die Antwort und die ID an eine "Modelldetail-Ansicht" zu übergeben (die die erforderlichen Arbeiten ausführen wird, um den Datensatz anzuzeigen). Die `reverse()` Funktion oben ist in der Lage, Ihren URL-Zuordner (im obigen Fall mit dem Namen _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, damit dies funktioniert, immer noch die URL-Zuordnung, die Ansicht und das Template schreiben!

Sie können auch beliebige andere Methoden definieren und sie von Ihrem Code oder Templates aus aufrufen (vorausgesetzt, sie nehmen keine Parameter entgegen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen sowie um Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir werden Ihnen zeigen, wie das im Tutorial gemacht wird, wenn wir unsere Ansichten definieren, aber hier eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines zugewiesen, mit dem Feldnamen `id`. Sie könnten diese Feld abfragen, nachdem Sie den obigen Datensatz gespeichert haben, und es hätte einen Wert von 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

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
> Das Erklären, wie nach Datensätzen mit "abstrakten" Modell- und Feldnamen gesucht wird, kann etwas verwirrend sein. In der folgenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre ebenfalls ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mithilfe von `objects.all()` erhalten. `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Reihe von Objekten enthält, die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **numerisches** Feld mit bestimmten Kriterien übereinstimmt. Um beispielsweise nach Büchern zu filtern, die „wild“ im Titel enthalten, und um sie dann zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die übereinstimmt werden sollen, und die Art der Übereinstimmung werden im Filter-Parameterschema festgelegt mit dem Format: `field_name__match_type` (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einer groß-/kleinschreibungssensitiven Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie durchführen können: `icontains` (groß-/kleinschreibungsunsensitiv), `iexact` (groß-/kleinschreibungsunsensitives Genauigkeitsübereinstimmen), `exact` (groß-/kleinschreibungsempfindliches Genauigkeitsübereinstimmen) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf einem Feld filtern, das eine Eins-zu-Viele-Beziehung zu einem anderen Modell definiert (z. B. `ForeignKey`). In diesem Fall können Sie durch zusätzliche doppelte Unterstriche auf Felder im zugehörigen Modell „zugreifen“.
Um beispielsweise nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie über das `genre`-Feld zum `name` zugreifen, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren, wie Sie möchten.
> Ein Buch, das unterschiedliche Typen hatte, die mit einer weiteren "cover"-Beziehung definiert sind, könnte beispielsweise einen Parameternamen haben: `type__cover__name__exact='hard'`.

Mit Abfragen können Sie noch viel mehr tun, einschließlich Rückwärtssuchen aus verwandten Modellen, Verkettung von Filtern, Zurückgeben einer kleineren Wertemenge usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definieren der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Das Boilerplate am oberen Rand der Seite importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, die unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn unten in Ihre `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — zum Beispiel, ob es Fiktion oder Sachbuch, Romanze oder Militärgeschichte ist.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als Freitext oder Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt fest kodiert zu werden.

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

Das Modell hat ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen beschränkt und hat etwas `help_text`).
Wir haben dieses Feld auf eindeutig (`unique=True`) gesetzt, weil es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des durch einen bestimmten Datensatz definierten Genres zurückgibt. Es wurde kein ausführlicher Name (`verbose name`) definiert, sodass die Feldbezeichnung beim Verwenden in Formularen `Name` sein wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat, und eine zugehörige Ansicht und Template definieren).

Die Einstellung `unique=True` im obigen Feld verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, jedoch nicht Variationen wie „Fantasie“, „Fantasy“ oder sogar „FaNtAsY“.
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option in den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der Kleinbuchstabe des Wertes im `name`-Feld in der Datenbank einzigartig sein muss, und die `violation_error_message`-Zeichenfolgeneingabe anzeigt, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Weitere Informationen finden Sie im [Constraints-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buch-Modell

Kopieren Sie das untenstehende `Book`-Modell und fügen Sie es erneut unten in Ihre Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch im Allgemeinen, jedoch nicht ein bestimmtes physisches "Exemplar" oder eine "Kopie", die ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den Buchtitel und die ISBN darzustellen.
Bei `isbn` beachten Sie, wie der erste unbenannte Parameter die Bezeichnung explizit als „ISBN“ festlegt (ansonsten wäre es standardmäßig „Isbn“). Wir setzen auch den Parameter `unique` auf `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert in einer Tabelle global eindeutig).
Im Gegensatz zu `isbn` (und dem Genre-Namen) wird der `title` nicht als eindeutig gesetzt, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, da dieser Text ziemlich lang sein kann.

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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!).

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter entweder mithilfe der Modellklasse oder einer Zeichenfolge, die den Namen des zugehörigen Modells enthält, deklariert. Sie müssen den Modellnamen als Zeichenfolge verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, wodurch die Datenbank den Wert `Null` speichern kann, wenn kein Autor ausgewählt wurde, und `on_delete=models.RESTRICT`, dass den Bezug des Buches zum verbundenen Autor verhindert, wenn es von keinem Buch verknüpft wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wird, auch dieses Buch gelöscht wird! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch es verwendet oder `SET_NULL`, um den Autor des Buches auf Null zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, indem es das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell aufzurufen (wir werden eine URL-Zuordnung definieren müssen, die den Namen `book-detail` hat, und eine zugehörige Ansicht und ein Template).

### BookInstance-Modell

Kopieren Sie als Nächstes das `BookInstance`-Modell (siehe unten) unter die anderen Modelle. Die `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und schließt Informationen darüber ein, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, „Imprint“ oder Versiondetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden werden jetzt bekannt sein. Das Modell verwendet:

- `ForeignKey` zur Identifizierung des verbundenen Buches (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein Buch haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das Buch nicht gelöscht werden kann, während es von einer `BookInstance` referenziert wird.
- `CharField` zur Darstellung des Imprints (spezifische Veröffentlichung) des Buches.

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

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Diese Art von Feld weist jedem Exemplar (eines jeden Buches, das Sie in der Bibliothek finden) einen weltweit eindeutigen Wert zu.
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch erwartet wird, verfügbar zu werden, nachdem es ausgeliehen oder in Wartung war). Dieser Wert kann leer (`blank`) oder null (`null`) sein (notwendig, wenn das Buch verfügbar ist). Die Modell-Metadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu sortieren, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel, das aus Tupeln von Schlüssel-Wert-Paaren besteht, und übergeben es an das Auswahl-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeige-Wert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (maintenance) gesetzt, da Bücher anfangs erstellt werden, die nicht verfügbar sind, bevor sie ins Regal gestellt werden.

Die Methode `__str__()` stellt das `BookInstance`-Objekt dar, indem sie eine Kombination aus seiner eindeutigen ID und dem Titel des verbundenen Buches verwendet.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die String-Interpolation-Syntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials verwendeten wir eine [formatierte Zeichenfolgendarstellung](https://peps.python.org/pep-3101/)-Syntax, das ist auch eine gültige Möglichkeit, Strings in Python zu formatieren (z. B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autoren-Modell

Kopieren Sie das `Author`-Modell (siehe unten) unter den bestehenden Code in **models.py**.

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

Alle Felder/Methoden sollten jetzt bekannt sein. Das Modell definiert einen Autor mit Vornamen, Nachnamen und Geburts- und Sterbedaten (beide optional). Es gibt an, dass `__str__()` standardmäßig den Namen in der Reihenfolge des vollen Namens zurückgibt. Die `get_absolute_url()`-Methode kehrt die URL-Zuordnung für `author-detail` um, um die URL für die Anzeige eines einzelnen Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Gönner spendet eine Anzahl neuer Bücher, die in einer anderen Sprache (sagen wir Farsi) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliotheks-Website dargestellt werden, und sie dann den Modellen hinzuzufügen.

Einige Dinge, die Sie berücksichtigen sollten:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt in Verbindung stehen?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer fest codierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, was wir [für unser Projekt auf GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell erneut die Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen dann verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An dieser Stelle werden wir kurz von der Erstellung der Website abweichen und uns die _Django-Administrationsseite_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mithilfe unserer (noch zu erstellenden) Ansichten und Templates anzeigen können.

## Siehe auch

- [Erstellen Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet-API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
