---
title: "Django-Tutorial Teil 3: Verwenden von Modellen"
slug: Learn/Server-side/Django/Models
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Dieser Artikel zeigt, wie man Modelle für die LocalLibrary-Website definiert. Er erklärt, was ein Modell ist, wie es deklariert wird, und geht auf einige der wichtigsten Feldtypen ein. Außerdem zeigt er kurz einige der Hauptmethoden, wie man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Erstellen einer Skelett-Website</a>.
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

Django-Webanwendungen greifen über Python-Objekte, sogenannte Modelle, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten aus Listen, Hilfetexte für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine der mehreren Datenbanken auswählen. Sobald Sie sich für eine Datenbank entschieden haben, müssen Sie nicht mehr direkt mit ihr kommunizieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die ganze Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie man die Modelle für das [LocalLibrary-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Beispiel definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie direkt mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur dessen Namen, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf Buchtitel, Autor, Sprache und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe von zusammenhängenden Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Optionen direkt in die Website einzucodieren — das wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle wären in diesem Fall das Buchgenre (z.B. Science Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django erlaubt es, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Vor diesem Hintergrund zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Modell UML mit fester Autor-Multiplizität innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die generischen Details des Buches), die Buchinstanz (Status bestimmter physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, so dass Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns dagegen entschieden, ein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) festgelegt, da wir nicht erwarten, dass sich diese ändern. In jedem der Kästchen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen auf dem Diagramm, die die (maximale und minimale) Anzahl jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre miteinander verknüpft sind. Die Zahlen nahe dem Genre-Modell zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele Sie möchten), während die Zahlen auf der anderen Seite der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Grundlagen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und auf einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden in der Regel in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der unten stehende Codeausschnitt zeigt ein "typisches" Modell mit dem Namen `MyModelName`:

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

In den unten stehenden Abschnitten werden wir jedes der Merkmale innerhalb des Modells im Detail untersuchen:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern beliebigen Typs haben — jedes repräsentiert eine Datenspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankeintrag (Zeile) wird aus einem Wert jedes Feldes bestehen. Schauen wir uns das untenstehende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — was bedeutet, dass dieses Feld Zeichenfolgen von alphanumerischen Zeichen enthalten wird. Die Feldtypen werden mit spezifischen Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zum Speichern der Daten in der Datenbank verwendet wird, zusammen mit Validierungskriterien, die angewendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert ausmacht). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Werts in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfreicher Text, der möglicherweise in einem Formular angezeigt wird, um Nutzern zu helfen zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um darauf in Abfragen und Templates zu verweisen.
Felder haben auch ein Label, das mit dem `verbose_name`-Argument (Standardwert `None`) angegeben wird.
Wenn `verbose_name` nicht gesetzt ist, wird das Label aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` ein Standardlabel _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, hat Einfluss auf ihre Standardreihenfolge, wenn ein Modell in einem Formular gerendert wird (z.B. in der Admin-Site), obwohl dies überschrieben werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können beim Deklarieren vieler/der meisten verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet ein Textlabel für HTML-Formulare (z.B. in der Admin-Site), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, der in Feldlabels verwendet wird. Wenn nicht angegeben, schließt Django den Standard-verbose_name aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` speichert stattdessen eine leere Zeichenfolge). Der Standard ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standard ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie dazu zwingt, einen Wert einzugeben. Dies wird häufig mit `null=True` verwendet, denn wenn Sie leere Werte zulassen, möchten Sie, dass die Datenbank sie auch angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn diese angegeben ist, wird das entsprechende Standardformular-Widget eine Auswahlliste mit diesen Auswahlmöglichkeiten anstelle des Standardtextfeldes sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank einzigartig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die keine gleichen Werte haben dürfen.
  Der Standard ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (Ein Primärschlüssel ist eine spezielle Datenbankspalte, die dazu bestimmt ist, alle verschiedenen Tabellendatensätze eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, wird Django automatisch ein Feld zu diesem Zweck hinzufügen.
  Der Typ von automatisch erstellten Primärschlüsselfeldern kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der Einstellung [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) festgelegt werden.

  > [!NOTE]
  > Von Apps erstellen mit **manage.py** wird der Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield) gesetzt.
  > Dies können Sie in der lokalen Bibliothek **catalog/apps.py** Datei sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen — Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Allgemeine Feldtypen

Die folgende Liste beschreibt einige der häufiger verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittellange feste Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große, beliebig lange Zeichenfolgen verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene durchgesetzt).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von ganzzahligen (ganzen Zahlen) Werten und zur Validierung der eingegebenen Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Zeitinformationen (als Python `datetime.date` und `datetime.datetime` Objekte bzw.) verwendet. Diese Felder können zusätzlich die sich gegenseitig ausschließenden Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien und Bilder hochzuladen (das `ImageField` fügt eine zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, den bei jeder Erstellung eines neuen Datensatzes automatisch hochzählt. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell anzugeben (z.B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" verwenden, der auf diesen "Schlüssel" verweist, befinden sich auf der "vielen" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-viele-Beziehung anzugeben (z.B. kann ein Buch mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheksapp werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Felder für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Fließkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellübergreifende Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie unten gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist die Kontrolle über die _Standardreihenfolge_ der Datensätze, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen an das Attribut `ordering` angeben, wie oben gezeigt. Die Sortierung hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder in chronologischer Reihenfolge sortiert werden). Wie oben gezeigt, können Sie das Feldnamen-Präfix mit einem Minus-Zeichen versehen (-), um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir uns dafür entscheiden, Bücher standardmäßig wie folgt zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel, von A-Z, und dann nach Veröffentlichungsdatum innerhalb jedes Titels, von neu nach alt sortiert.

Ein weiteres häufiges Attribut ist `verbose_name`, ein beschreibender Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), erlauben das Ordnen auf der Basis eines anderen Feldes, definieren [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) auf mögliche Werte von Daten, die gespeichert werden können, oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur dann nützlich, wenn Sie ein Modell auf eine bestehende Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Modell-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Mindestens sollten Sie in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um für jedes Objekt einen menschenlesbaren String zurückzugeben.** Dieser String wird verwendet, um individuelle Datensätze auf der Administrationsseite (und überall dort, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Häufig wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode, die in Django-Modellen enthalten ist, ist `get_absolute_url()`, die eine URL für die Anzeige einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine "Ansicht auf der Site"-Schaltfläche zu den Datensatzbearbeitungsseiten des Modells in der Admin-Site hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2` um Einzelaufzeichnungen für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und die ID an eine "Modelldetailansicht" zu übergeben (die dann die notwendige Arbeit zum Anzeigen des Datensatzes ausführt). Die `reverse()`-Funktion oben kann Ihren URL-Mapper (im obigen Fall genannt _'model-detail-view'_) "umkehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie dazu noch die URL-Zuordnung, die Ansicht und das Template schreiben!

Sie können auch beliebige andere Methoden definieren und von Ihrem Code oder Ihren Templates aus aufrufen (vorausgesetzt, sie nehmen keine Parameter an).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir werden Ihnen zeigen, wie man das im Tutorial macht, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines zugewiesen, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des oben listen Datensatzes abfragen, und es hätte den Wert 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktnotation zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Nach Datensätzen suchen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Die Erklärung, wie man nach Datensätzen unter Verwendung von "abstrakten" Modell- und Feldnamen sucht, kann ein wenig verwirrend sein. In der unten stehenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre ebenfalls ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mit `objects.all()` erhalten. Das `QuerySet` ist ein iterierbares Objekt, d.h. es enthält eine Anzahl von Objekten, über die wir iterieren/loopen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **Zahlen**feld mit bestimmten Kriterien übereinstimmt. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten und diese dann zu zählen, könnten wir Folgendes tun.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, nach denen gefiltert werden soll, und der Typ der Übereinstimmung werden im Filternamen-Parameter festgelegt, im Format: `field_name__match_type` (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir den `title` mit einer groß- und kleinsensitiven Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie machen können: `icontains` (nicht groß- und kleinsensitiv), `iexact` (exakte Übereinstimmung ohne Berücksichtigung der Groß- und Kleinschreibung), `exact` (exakte Übereinstimmung mit Berücksichtigung der Groß- und Kleinschreibung) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie nach einem Feld filtern, das eine Eins-zu-viele-Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie "indizieren" auf Felder innerhalb des verknüpften Modells mit zusätzlichen doppelten Unterstrichen.
Um beispielsweise nach Büchern mit einem spezifischen Genre-Muster zu filtern, müssen Sie wie unten gezeigt über das `genre`-Feld auf das `name`-Feld zugreifen:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um beliebig viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu durchlaufen.
> Zum Beispiel könnte ein `Book`, das verschiedene Typen aufweist, definiert durch eine weitere "cover"-Beziehung, einen Parametername haben: `type__cover__name__exact='hard'.`

Es gibt noch viel mehr, das Sie mit Abfragen machen können, einschließlich rückwärts Suchen von verwandten Modellen, Filtern von Verknüpfungen, Zurückgeben einer kleineren Menge von Werten usw. Für weitere Informationen sehen Sie [Abfragen stellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definieren der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Der Grundbaustein am oberen Ende der Seite importiert das _models_-Modul, das die Modellbasisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den `Genre`-Modellcode unten und fügen Sie ihn am Ende Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — zum Beispiel, ob es sich um Belletristik oder Sachbuch, Romantik oder Militärgeschichte usw. handelt.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als Freitext oder eine Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt fest kodiert zu sein.

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

Das Modell hat ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (das auf 200 Zeichen begrenzt ist und einige `help_text` enthält).
Wir haben dieses Feld als einzigartig festgelegt (`unique=True`), da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das von einem bestimmten Datensatz definiert wird. Es wurde kein beschreibender Name definiert, so dass das Feldlabel `Name` sein wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat, und eine zugehörige Ansicht und ein Template definieren).

Das Setzen von `unique=True` auf dem obigen Feld verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, aber nicht Varianten wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet die [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den [Metadaten](#metadaten) des Modells, um anzugeben, dass der Kleinbuchstabe des Wertes im `name`-Feld in der Datenbank einzigartig sein muss und die `violation_error_message`-Zeichenfolge anzuzeigen, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Für weitere Informationen sehen Sie bitte die [Einschränkungen-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buch-Modell

Kopieren Sie das `Book`-Modell unten und fügen Sie es wieder am Ende Ihrer Datei ein. Das `Book`-Modell repräsentiert alle Informationen zu einem verfügbaren Buch im Allgemeinen, aber nicht ein bestimmtes physisches "Exemplar" oder eine "Kopie", die ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen.
Für `isbn` beachten Sie, wie der erste unbenannte Parameter explizit das Label als "ISBN" setzt (andernfalls würde es als "Isbn" standardmäßig gesetzt werden). Wir setzen auch den Parameter `unique` als `true`, um sicherzustellen, dass alle Bücher eine einzigartige ISBN haben (der einzigartige Parameter macht den Feldwert global einzigartig in einer Tabelle).
Im Gegensatz zum `isbn` (und dem Genre-Namen) ist der `title` nicht als einzigartig gesetzt, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` erklärt, sodass jedes Buch nur einen Autor haben wird, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter deklariert, entweder unter Verwendung der Modellklasse oder einer Zeichenfolge, die den Namen des zugehörigen Modells enthält. Sie müssen den Modellnamen als Zeichenfolge verwenden, wenn die zugeordnete Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was erlaubt, dass die Datenbank einen `Null`-Wert speichert, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, wodurch verhindert wird, dass der zugeordnete Autor des Buches gelöscht wird, wenn er durch ein Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht würde, dieses Buch ebenfalls gelöscht würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch es verwendet oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, das das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, und eine zugehörige Ansicht und ein Template definieren).

### BuchInstanz-Modell

Als Nächstes kopieren Sie das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert ein spezifisches Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist oder wann es voraussichtlich zurückgegeben wird, "Imprint" oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden werden Ihnen nun vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es durch ein `BookInstance` referenziert wird.
- `CharField`, um das Imprint (spezifische Veröffentlichung) des Buches darzustellen.

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

Wir erklären zusätzlich einige neue Arten von Feldern:

- `UUIDField` wird verwendet, um das `id`-Feld als `primary_key` für dieses Modell zu setzen.
  Dieser Feldtyp vergibt einen weltweit einzigartigen Wert für jede Instanz (eine für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch nach dem Ausleihen oder in der Wartung wieder verfügbar sein soll). Dieser Wert kann `blank` oder `null` sein (notwendig, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu ordnen, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel mit Schlüssel/Werte-Paaren und übergeben es dem choices-Argument. Der Wert in einem Schlüssel/Werte-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) gesetzt, da Bücher zunächst als nicht verfügbar erstellt werden, bevor sie in den Regalen gestapelt werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt durch eine Kombination aus seiner eindeutigen ID und dem zugeordneten `Book`-Titel.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die Zeicheninterpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte String](https://peps.python.org/pep-3101/) Syntax verwendet, die ebenfalls eine gültige Möglichkeit darstellt, Strings in Python zu formatieren (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autorenmodell

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

Alle Felder/Methoden sollten Ihnen jetzt vertraut sein. Das Modell definiert einen Autor mit Vorname, Nachname und Geburts- und Todesdaten (beides optional). Es gibt an, dass standardmäßig die `__str__()` den Namen in _Nachname_, _Vorname_-Reihenfolge zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail`-URL-Zuordnung um, um die URL zur Anzeige eines bestimmten Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden jetzt erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache, sagen wir Farsi, geschrieben sind. Die Herausforderung besteht darin, zu ermitteln, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden, und sie dann den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt in Verbindung gebracht werden?
- Sollten die unterschiedlichen Sprachen mit einem Modell, einem Freitextfeld oder einer fest codierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, worauf wir uns auf GitHub [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) geeinigt haben.

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz von der Erstellung der Website abschweifen und die _Django-Administrationsseite_ überprüfen. Diese Seite ermöglicht es uns, einige Daten in die Bibliothek aufzunehmen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Templates anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen stellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API Reference](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
