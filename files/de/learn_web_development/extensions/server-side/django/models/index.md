---
title: "Django-Tutorial Teil 3: Modelle verwenden"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Sie Modelle für die LocalLibrary-Website definieren. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Außerdem zeigt er kurz einige der wichtigsten Möglichkeiten, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Eine Website-Grundstruktur erstellen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Eigene Modelle entwerfen und erstellen können und dabei Felder angemessen auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen über als Modelle bezeichnete Python-Objekte auf Daten zu und verwalten sie. Modelle definieren die _Struktur_ gespeicherter Daten, einschließlich der Feld_typen_ und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahllistenoptionen, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine aus mehreren auswählen. Nachdem Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr kommunizieren — Sie schreiben lediglich Ihre Modellstruktur und weiteren Code, und Django erledigt die gesamte mühsame Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie Sie die Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definieren und darauf zugreifen.

## Die LocalLibrary-Modelle entwerfen

Bevor Sie beginnen und die Modelle programmieren, lohnt es sich, einige Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) und dass möglicherweise mehrere Exemplare verfügbar sind (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor als nur seinen Namen speichern, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes „Objekt“ (eine Gruppe zusammengehöriger Informationen) separate Modelle zu verwenden. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen darzustellen (z. B. eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website einzuprogrammieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle sind in diesem Fall das Buchgenre (z. B. Science-Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Nachdem wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Eins-zu-eins- (`OneToOneField`), Eins-zu-viele- (`ForeignKey`) und Viele-zu-viele-Beziehungen (`ManyToManyField`) zu definieren.

Vor diesem Hintergrund zeigt das untenstehende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästen).

![LocalLibrary-Modell-UML mit fester Autor-Multiplizität innerhalb der Book-Klasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buchs), das Buchexemplar (Status bestimmter physischer Exemplare des im System verfügbaren Buchs) und den Autor erstellt. Außerdem haben wir beschlossen, ein Modell für das Genre zu verwenden, damit Werte über die Admin-Oberfläche erstellt und ausgewählt werden können. Wir haben uns entschieden, kein Modell für `BookInstance:status` zu verwenden — wir haben die Werte (`LOAN_STATUS`) fest einprogrammiert, da wir nicht erwarten, dass sie sich ändern. In jedem der Kästen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (Maximum und Minimum) jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Die Verbindungslinie zwischen den Kästen zeigt beispielsweise, dass Book und ein Genre miteinander verbunden sind. Die Zahlen nahe dem Genre-Modell zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Book-Modell zeigen, dass ein Genre null oder viele zugeordnete Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung dazu, wie Modelle definiert und verwendet werden. Denken Sie beim Lesen darüber nach, wie wir die einzelnen Modelle im obigen Diagramm konstruieren werden.

## Einführung in Modelle

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird, sowie über einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden üblicherweise in der Datei **models.py** einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Das folgende Codefragment zeigt ein „typisches“ Modell mit dem Namen `MyModelName`:

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

In den folgenden Abschnitten untersuchen wir jede der Funktionen innerhalb des Modells im Detail:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern jeden Typs haben — jedes davon stellt eine Datenspalte dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankdatensatz (Zeile) besteht aus einem Wert für jedes Feld. Sehen wir uns das folgende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — das bedeutet, dass dieses Feld Zeichenketten aus alphanumerischen Zeichen enthalten wird. Die Feldtypen werden über spezielle Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zum Speichern der Daten in der Datenbank verwendet wird, sowie Validierungskriterien, die beim Empfangen von Werten aus einem HTML-Formular verwendet werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente annehmen, die weiter festlegen, wie das Feld gespeichert wird oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Werts in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfreicher Text, der in einem Formular angezeigt werden kann, damit Benutzer verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Templates darauf zu verweisen.
Felder haben außerdem eine Beschriftung, die mit dem Argument `verbose_name` angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht festgelegt ist, wird die Beschriftung aus dem Feldnamen erstellt, indem Unterstriche durch Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (beispielsweise hätte das Feld `my_field_name` bei Verwendung in Formularen die Standardbeschriftung _My field name_).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst ihre Standardreihenfolge, wenn ein Modell in einem Formular dargestellt wird (z. B. in der Admin-Site), obwohl diese überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden häufigen Argumente können beim Deklarieren vieler bzw. der meisten unterschiedlichen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Stellt eine Textbeschriftung für HTML-Formulare bereit (z. B. in der Admin-Site), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein für Menschen lesbarer Name für das Feld, der in Feldbeschriftungen verwendet wird. Falls nicht angegeben, leitet Django den Standardnamen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein; in letzterem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte in der Datenbank als `NULL` für Felder, bei denen dies angemessen ist (ein `CharField` speichert stattdessen eine leere Zeichenkette). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass die Formularvalidierung von Django Sie zur Eingabe eines Werts zwingt. Dies wird oft mit `null=True` verwendet, weil Sie bei erlaubten leeren Werten auch möchten, dass die Datenbank diese angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Falls diese angegeben wird, ist das entsprechende Standard-Formular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten anstelle des Standard-Textfelds.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, wird sichergestellt, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um Duplikate von Feldern zu verhindern, die nicht dieselben Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (ein Primärschlüssel ist eine spezielle Datenbankspalte, die zur eindeutigen Identifizierung aller verschiedenen Tabellendatensätze vorgesehen ist).
  Wenn kein Feld als Primärschlüssel angegeben wird, fügt Django automatisch ein Feld für diesen Zweck hinzu.
  Der Typ automatisch erstellter Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der Einstellung [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) angegeben werden.

  > [!NOTE]
  > Mit **manage.py** erstellte Apps setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie sehen dies in der lokalen Bibliotheksdatei **catalog/apps.py**:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — die [vollständige Liste der Feldoptionen finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der häufiger verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittelgroße Zeichenketten fester Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenketten beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, diese wird jedoch nur verwendet, wenn das Feld in Formularen dargestellt wird (sie wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern ganzzahliger Werte und zum Validieren eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Zeitinformationen verwendet (jeweils als Python-Objekte `datetime.date` und `datetime.datetime`). Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` deklarieren (um das Feld jedes Mal, wenn das Modell gespeichert wird, auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum festzulegen, das vom Benutzer überschrieben werden kann).
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird zum Speichern und Validieren von E-Mail-Adressen verwendet.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden zum Hochladen von Dateien bzw. Bildern verwendet (das `ImageField` fügt eine zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Sie verfügen über Parameter, um festzulegen, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert wird. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht ausdrücklich einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell anzugeben (z. B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die „Eins“-Seite der Beziehung ist das Modell, das den „Schlüssel“ enthält (Modelle mit einem „Fremdschlüssel“, der auf diesen „Schlüssel“ verweist, befinden sich auf der „Viele“-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-viele-Beziehung anzugeben (z. B. kann ein Buch mehrere Genres haben und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, sie können jedoch auf komplexere Weise verwendet werden, um Beziehungen zwischen Gruppen zu beschreiben. Sie haben den Parameter `on_delete`, um festzulegen, was geschieht, wenn der zugeordnete Datensatz gelöscht wird (z. B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele weitere Feldtypen, einschließlich Feldern für verschiedene Zahlentypen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), boolesche Werte, URLs, Slugs, eindeutige IDs und andere „zeitbezogene“ Informationen (Dauer, Uhrzeit usw.). Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können Metadaten auf Modellebene für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten besteht darin, die _Standardsortierung_ von Datensätzen zu steuern, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Dazu geben Sie die Sortierreihenfolge in einer Liste von Feldnamen für das Attribut `ordering` an, wie oben gezeigt. Die Sortierung hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Wenn wir beispielsweise Bücher standardmäßig so sortieren würden:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel von A–Z und anschließend innerhalb jedes Titels nach Veröffentlichungsdatum vom neuesten zum ältesten sortiert.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue „Zugriffsberechtigungen“ für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), die Sortierung anhand eines anderen Felds zu erlauben, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte gespeicherter Daten zu definieren oder zu deklarieren, dass die Klasse „abstrakt“ ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und von der stattdessen andere Modelle abgeleitet werden).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind eigentlich nur nützlich, wenn Sie ein Modell einer vorhandenen Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Optionen für Modellmetadaten](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Sie sollten mindestens in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um für jedes Objekt eine für Menschen lesbare Zeichenkette zurückzugeben.** Diese Zeichenkette wird verwendet, um einzelne Datensätze in der Administrations-Site darzustellen (und überall dort, wo Sie auf eine Modellinstanz verweisen müssen). Häufig gibt sie ein Titel- oder Namensfeld des Modells zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufig in Django-Modellen enthaltene Methode ist `get_absolute_url()`, die eine URL zum Anzeigen einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine Schaltfläche „View on Site“ zu den Bearbeitungsbildschirmen für Datensätze des Modells in der Admin-Site hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Wenn Sie davon ausgehen, URLs wie `/my-application/my-model-name/2` zu verwenden, um einzelne Datensätze Ihres Modells anzuzeigen (wobei „2“ die `id` eines bestimmten Datensatzes ist), müssen Sie einen URL-Mapper erstellen, der die Antwort und ID an eine „Modelldetailansicht“ übergibt (die die Arbeit zum Anzeigen des Datensatzes erledigt). Die obige Funktion `reverse()` kann Ihren URL-Mapper „umkehren“ (im obigen Fall mit dem Namen _'model-detail-view'_), um eine URL im richtigen Format zu erstellen.
>
> Damit dies funktioniert, müssen Sie natürlich weiterhin die URL-Zuordnung, Ansicht und das Template schreiben!

Sie können auch beliebige weitere Methoden definieren und sie aus Ihrem Code oder Ihren Templates aufrufen (vorausgesetzt, sie nehmen keine Parameter entgegen).

### Modellverwaltung

Nachdem Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir zeigen Ihnen im Tutorial, wie das funktioniert, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Datensätze erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, erhält der neue Datensatz automatisch eines mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte den Wert 1.

Sie können über die Punktsyntax auf die Felder in diesem neuen Datensatz zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Nach Datensätzen suchen

Sie können mithilfe des Attributs `objects` des Modells (bereitgestellt von der Basisklasse) nach Datensätzen suchen, die bestimmten Kriterien entsprechen.

> [!NOTE]
> Das Erklären, wie nach Datensätzen mit „abstrakten“ Modell- und Feldnamen gesucht wird, kann etwas verwirrend sein. In der folgenden Erläuterung beziehen wir uns auf ein `Book`-Modell mit den Feldern `title` und `genre`, wobei genre ebenfalls ein Modell mit einem einzelnen Feld `name` ist.

Wir können mit `objects.all()` alle Datensätze für ein Modell als `QuerySet` abrufen. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Die Methode `filter()` von Django ermöglicht es uns, das zurückgegebene `QuerySet` zu filtern, sodass ein angegebenes **Text**- oder **numerisches** Feld bestimmten Kriterien entspricht. Um beispielsweise Bücher zu filtern, deren Titel „wild“ enthält, und sie anschließend zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die abzugleichenden Felder und der Abgleichstyp werden im Namen des Filterparameters im Format `field_name__match_type` definiert (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem Abgleich unter Beachtung der Groß- und Kleinschreibung. Es gibt viele andere Abgleichstypen: `icontains` (ohne Beachtung der Groß- und Kleinschreibung), `iexact` (exakter Abgleich ohne Beachtung der Groß- und Kleinschreibung), `exact` (exakter Abgleich mit Beachtung der Groß- und Kleinschreibung) sowie `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie nach einem Feld filtern, das eine Eins-zu-viele-Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen doppelten Unterstrichen auf Felder innerhalb des zugehörigen Modells „indizieren“.
Um beispielsweise nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie über das Feld `genre` auf `name` zugreifen, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um durch beliebig viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren.
> Ein `Book`, das beispielsweise verschiedene Typen hätte, die über eine weitere „cover“-Beziehung definiert sind, könnte den Parameternamen `type__cover__name__exact='hard'` haben.

Mit Abfragen können Sie noch viel mehr tun, einschließlich Rückwärtssuchen von verwandten Modellen, Verkettung von Filtern, Rückgabe einer kleineren Wertemenge usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Die LocalLibrary-Modelle definieren

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Der Boilerplate-Code am Anfang der Seite importiert das Modul _models_, das die Modellbasisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn am Ende Ihrer Datei `models.py` ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — beispielsweise, ob es sich um Belletristik oder Sachliteratur, Liebesroman oder Militärgeschichte handelt.
Wie oben erwähnt, haben wir das Genre als Modell erstellt und nicht als Freitext oder Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt fest einprogrammiert zu sein.

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
                violation_error_message = "Genre already exists (case-insensitive match)"
            ),
        ]
```

Das Modell hat ein einzelnes `CharField`-Feld (`name`), das zur Beschreibung des Genres verwendet wird (dieses ist auf 200 Zeichen begrenzt und hat einen `help_text`).
Wir haben dieses Feld als eindeutig festgelegt (`unique=True`), da es für jedes Genre nur einen Datensatz geben sollte.

Nach dem Feld deklarieren wir eine Methode `__str__()`, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert wird. Es wurde kein ausführlicher Name definiert, daher lautet die Feldbeschriftung `Name`, wenn es in Formularen verwendet wird.
Anschließend deklarieren wir die Methode `get_absolute_url()`, die eine URL zurückgibt, über die ein Detaildatensatz für dieses Modell aufgerufen werden kann (damit dies funktioniert, müssen wir eine URL-Zuordnung mit dem Namen `genre-detail` sowie eine zugehörige Ansicht und ein Template definieren).

Durch das Setzen von `unique=True` für das obige Feld wird verhindert, dass Genres mit _exakt_ demselben Namen erstellt werden, jedoch nicht Varianten wie „fantasy“, „Fantasy“ oder sogar „FaNtAsY“.
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option in den [Metadaten](#metadaten) des Modells, um festzulegen, dass die Kleinschreibungsform des Werts im Feld `name` in der Datenbank eindeutig sein muss und die Zeichenkette `violation_error_message` angezeigt wird, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen für ein Feld oder mehrere Felder definieren.
Weitere Informationen finden Sie in der [Referenz zu Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Book-Modell

Kopieren Sie das untenstehende `Book`-Modell und fügen Sie es ebenfalls am Ende Ihrer Datei ein. Das `Book`-Modell stellt alle Informationen über ein verfügbares Buch im allgemeinen Sinn dar, jedoch nicht eine bestimmte physische „Instanz“ oder ein „Exemplar“, das ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um `title` und `isbn` des Buchs darzustellen.
Beachten Sie bei `isbn`, wie der erste unbenannte Parameter die Beschriftung explizit auf „ISBN“ setzt (andernfalls wäre der Standardwert „Isbn“). Außerdem setzen wir den Parameter `unique` auf `True`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der Parameter unique macht den Feldwert in einer Tabelle global eindeutig).
Anders als bei `isbn` (und dem Genrenamen) wird `title` nicht als eindeutig festgelegt, da verschiedene Bücher denselben Namen haben können.
Das Modell verwendet `TextField` für `summary`, da dieser Text möglicherweise recht lang sein muss.

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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, ein Autor jedoch viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!).

Bei beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter entweder über die Modellklasse oder eine Zeichenkette mit dem Namen des zugehörigen Modells deklariert. Sie müssen den Namen des Modells als Zeichenkette verwenden, wenn die zugehörige Klasse in dieser Datei vor ihrer Referenzierung noch nicht definiert wurde! Die weiteren interessanten Parameter im Feld `author` sind `null=True`, wodurch die Datenbank einen `Null`-Wert speichern kann, wenn kein Autor ausgewählt wurde, und `on_delete=models.RESTRICT`, wodurch verhindert wird, dass der zum Buch gehörende Autor gelöscht wird, wenn er von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig gilt `on_delete=models.CASCADE`, was bedeutet, dass dieses Buch ebenfalls gelöscht würde, wenn der Autor gelöscht wird! Wir verwenden hier `RESTRICT`, könnten aber auch `PROTECT` verwenden, um das Löschen des Autors zu verhindern, solange ihn ein Buch verwendet, oder `SET_NULL`, um den Autor des Buchs auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert außerdem `__str__()` und verwendet das Feld `title` des Buchs zur Darstellung eines `Book`-Datensatzes. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz dieses Modells zuzugreifen (wir müssen eine URL-Zuordnung mit dem Namen `book-detail` sowie eine zugehörige Ansicht und ein Template definieren).

### BookInstance-Modell

Kopieren Sie als Nächstes das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Die `BookInstance` stellt ein bestimmtes Exemplar eines Buchs dar, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist oder zu welchem Datum es voraussichtlich zurückerwartet wird, Details zum „Imprint“ bzw. zur Version sowie eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind Ihnen nun vertraut. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Exemplare haben, aber ein Exemplar kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, solange es von einer `BookInstance` referenziert wird.
- `CharField`, um den Imprint (die spezifische Ausgabe) des Buchs darzustellen.

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

Zusätzlich deklarieren wir einige neue Feldtypen:

- `UUIDField` wird für das Feld `id` verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist jeder Instanz einen global eindeutigen Wert zu (einen für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das Datum `due_back` verwendet (zu dem das Buch nach der Ausleihe oder Wartung voraussichtlich wieder verfügbar wird). Dieser Wert kann `blank` oder `null` sein (notwendig, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze bei ihrer Rückgabe durch eine Abfrage zu sortieren.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen können, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält, und übergeben es dem Argument choices. Der Wert in einem Schlüssel-/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Außerdem haben wir einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst als nicht verfügbar erstellt werden, bevor sie in die Regale gestellt werden.

Die Methode `__str__()` stellt das `BookInstance`-Objekt mit einer Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book` dar.

> [!NOTE]
> Ein wenig Python:
>
> - Seit Python 3.6 können Sie die Syntax zur Zeichenketteninterpolation verwenden (auch als f-strings bekannt): `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine Syntax für [formatierte Zeichenketten](https://peps.python.org/pep-3101/) verwendet, die ebenfalls eine gültige Methode zum Formatieren von Zeichenketten in Python ist (z. B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Author-Modell

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

Alle Felder/Methoden sollten Ihnen nun vertraut sein. Das Modell definiert einen Autor mit Vorname, Nachname sowie Geburts- und Sterbedatum (beides optional). Es legt fest, dass `__str__()` standardmäßig den Namen in der Reihenfolge _Nachname_, _Vorname_ zurückgibt. Die Methode `get_absolute_url()` kehrt die URL-Zuordnung `author-detail` um, um die URL zur Anzeige eines einzelnen Autors abzurufen.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein örtlicher Wohltäter spendet eine Reihe neuer Bücher, die in einer anderen Sprache geschrieben sind (beispielsweise Farsi). Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden sollten, und sie dann zu den Modellen hinzuzufügen.

Einige Punkte, die Sie berücksichtigen sollten:

- Sollte „Sprache“ einem `Book`, einer `BookInstance` oder einem anderen Objekt zugeordnet sein?
- Sollten die verschiedenen Sprachen durch ein Modell, ein Freitextfeld oder eine fest einprogrammierte Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, was wir [für unser Projekt auf GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell Ihre Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen dann verwendet, um geeignete Modelle für die Website _LocalLibrary_ zu entwerfen und zu implementieren.

An dieser Stelle unterbrechen wir kurz die Erstellung der Website und sehen uns die _Django-Administrations-Site_ an. Über diese Site können wir einige Daten zur Bibliothek hinzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Templates anzeigen können.

## Siehe auch

- [Ihre erste Django-App schreiben, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet-API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
