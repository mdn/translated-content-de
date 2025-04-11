---
title: "Django Tutorial Teil 3: Die Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Modelle für die LocalLibrary-Website definiert werden. Er erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Er zeigt auch kurz einige der Hauptmethoden, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellung einer Grundstruktur für die Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen, wobei Sie die Felder angemessen auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen auf Daten über Python-Objekte zu und verwalten diese, die als Modelle bezeichnet werden. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch deren maximaler Größe, Standardwerte, Auswahloptionen, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen wählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie sich überhaupt nicht direkt mit ihr befassen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die gesamte Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie die Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugegriffen wird.

## Entwurf der LocalLibrary-Modelle

Bevor Sie in den Code eintauchen und die Modelle erstellen, sollten Sie sich ein paar Minuten Zeit nehmen, um darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit denselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen nach Buchtitel, Autor, Sprache und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahllistenoptionen (z.B. eine Dropdown-Liste von Auswahlmöglichkeiten) zu repräsentieren, anstatt die Auswahlmöglichkeiten fest in die Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen von vornherein bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Buchgenre (z.B. Science Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins-zu-eins (`OneToOneField`), eins-zu-viele (`ForeignKey`) und viele-zu-viele (`ManyToManyField`) sind.

Mit diesen Überlegungen im Hinterkopf zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Modell UML mit fester Autoranzahl innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (Status der im System verfügbaren physischen Exemplare des Buches) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest codiert, da wir nicht erwarten, dass sie sich ändern. In jedem der Kästchen können Sie den Modellnamen, die Feldnamen und Typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die maximalen und minimalen Anzahl von jedem Modell zeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die verbindende Linie zwischen den Kästchen, dass Buch und ein Genre miteinander verwandt sind. Die Zahlen nahe am Genre-Modell zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im oben stehenden Diagramm konstruieren werden.

## Einführung in Modelle

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigsten Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der Datei **models.py** einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Das folgende Codefragment zeigt ein "typisches" Modell, das `MyModelName` genannt wird:

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

In den folgenden Abschnitten werden wir jedes der Merkmale innerhalb des Modells im Detail erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben — jedes stellt eine Datenspalte dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankdatensatz (Zeile) besteht aus einem Wert für jedes Feld. Schauen wir uns das folgende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — das bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthalten wird. Die Feldtypen werden unter Verwendung spezifischer Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zur Speicherung der Daten in der Datenbank verwendet wird, zusammen mit den Validierungskriterien, die angewendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was ein gültiger Wert ist). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfetext, der in einem Formular angezeigt werden kann, um Benutzern zu helfen zu verstehen, wie das Feld verwendet wird.

Der Feldname wird für Abfragen und Templates verwendet.
Felder haben auch eine Beschriftung, die mit dem Argument `verbose_name` angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht gesetzt ist, wird die Beschriftung aus dem Feldnamen erstellt, indem alle Unterstriche durch Leerzeichen ersetzt werden und der erste Buchstabe großgeschrieben wird (zum Beispiel würde das Feld `my_field_name` in Formularen die Standardbeschriftung _My field name_ haben).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst ihre Standardreihenfolge, wenn ein Modell in einem Formular dargestellt wird (z.B. auf der Admin-Website), obwohl dies überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden gängigen Argumente können bei der Deklaration vieler/der meisten verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Stellt ein Textetikett für HTML-Formulare bereit (z.B. auf der Admin-Website), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, das in Feldbeschriftungen verwendet wird. Wenn nicht angegeben, leitet Django den Standard-Namen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein. In diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` speichert stattdessen eine leere Zeichenfolge). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer gelassen werden. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie dazu bringt, einen Wert einzugeben. Dies wird häufig mit `null=True` verwendet, denn wenn Sie leere Werte zulassen, möchten Sie auch, dass die Datenbank sie entsprechend darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies bereitgestellt wird, ist das entsprechende Standard-Formular-Widget ein Auswahlfeld mit diesen Optionen anstelle des normalen Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die nicht dieselben Werte haben können.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, setzt das aktuelle Feld als Primärschlüssel für das Modell (Ein Primärschlüssel ist eine spezielle Datenbanksäule, die dazu bestimmt ist, alle verschiedenen Tabellendatensätze eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben wird, fügt Django automatisch ein Feld zu diesem Zweck hinzu.
  Der Typ automatisch erstellter Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD)-Einstellung angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt werden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der Local Library **catalog/apps.py**-Datei sehen:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen — Sie können sich die [vollständige Liste der Feldoptionen hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der am häufigsten verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittlere feste Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für lange beliebige Zeichenfolgen verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf der Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlwerten (ganze Zahlen) und zum Validieren von eingegebenen Werten als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Zeitinformationen verwendet (als Python-Objekte `datetime.date` und `datetime.datetime`, jeweils). Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld jedes Mal, wenn das Modell gespeichert wird, auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) angeben.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht explizit eins angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine eins-zu-viele Beziehung zu einem anderen Datenbankmodell anzugeben (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" haben, der sich auf diesen "Schlüssel" bezieht, befinden sich auf der "vielen" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele Beziehung anzugeben (z.B. ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden diese sehr ähnlich wie `ForeignKeys` verwendet, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Feldern für verschiedene Zahlentypen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können sich die [vollständige Liste hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellbezogene Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eines der nützlichsten Features dieser Metadaten ist die Steuerung, welcher _Standard auf Ordnung_ Datensätze angewendet werden, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge als Liste von Feldnamen angeben, die dem Attribut `ordering` zugeordnet sind, wie oben gezeigt. Die Sortierung hängt von der Art des Feldes ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder in chronologischer Reihenfolge sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Wenn wir zum Beispiel wählen würden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel, von A-Z, und dann nach Veröffentlichungsdatum innerhalb jedes Titels, vom neuesten bis zum ältesten sortiert werden.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Die Metadaten der Klasse können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um die Sortierung basierend auf einem anderen Feld zu ermöglichen, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte von Daten, die gespeichert werden können, zu definieren oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können, sondern die zur Erstellung anderer Modelle abgeleitet wird).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell einer bestehenden Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen finden Sie hier: [Model-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Minimal sollte in jedem Modell die Standard-Python-Klassenmethode `__str__()` definiert werden, um für jedes Objekt einen menschenlesbaren String zurückzugeben.** Dieser String wird verwendet, um einzelne Datensätze in der Verwaltungsseite (und überall dort, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Häufig gibt diese Methode ein Titel- oder Namensfeld aus dem Modell zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode in Django-Modellen ist `get_absolute_url()`, die eine URL für die Anzeige einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch einen "Auf Website anzeigen"-Button zu den Bearbeitungsbildschirmen des Modells in der Admin-Oberfläche hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Abbildner erstellen, um die Antwort und ID an eine "Modell-Detailansicht" zu übergeben (die die erforderliche Arbeit ausführt, um den Datensatz anzuzeigen). Die Funktion `reverse()` oben kann Ihren URL-Abbildner "umkehren" (im obigen Fall benannt als _'model-detail-view'_), um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, damit dies funktioniert, die URL-Zuordnung, Ansicht und Vorlage schreiben!

Sie können auch beliebige andere Methoden definieren und aus Ihrem Code oder Ihren Vorlagen aufrufen (sofern sie keine Parameter benötigen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und um Abfragen auszuführen, um alle oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir zeigen Ihnen, wie Sie dies im Tutorial tun können, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eins zugewiesen, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte einen Wert von 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um die geänderten Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suche nach Datensätzen

Sie können nach Datensätzen suchen, die mit bestimmten Kriterien übereinstimmen, indem Sie das Attribut `objects` des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Die Erklärung, wie man nach Datensätzen mithilfe von "abstrakten" Modell- und Feldnamen sucht, kann etwas verwirrend sein. In der folgenden Diskussion werden wir auf ein `Book`-Modell mit `title`- und `genre`-Feldern verweisen, wobei `genre` ebenfalls ein Modell mit einem einzelnen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` erhalten, indem wir `objects.all()` verwenden. Ein `QuerySet` ist ein iterierbares Objekt, das eine Anzahl von Objekten enthält, durch die wir schleifen/iterieren können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` zu filtern, um ein bestimmtes **Text**- oder **numerisches** Feld gegen bestimmte Kriterien abzugleichen. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten, und sie zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder zum Abgleichen und die Art des Abgleichs werden im Filterparameter-Namen definiert, wobei das Format `field_name__match_type` verwendet wird (beachten Sie den doppelten Unterstrich zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem fallunempfindlichen Abgleich. Es gibt viele andere Arten von Abgleichen, die Sie durchführen können: `icontains` (fallunempfindlich), `iexact` (fallunempfindlicher exakter Abgleich), `exact` (fallabhängiger exakter Abgleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf einem Feld filtern, das eine eins-zu-viele-Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie mit weiteren doppelten Unterstrichen auf Felder im verwandten Modell "zugreifen".
Um beispielsweise nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie über das `genre`-Feld auf `name` zugreifen, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um durch so viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren, wie Sie möchten.
> Beispiel: Ein `Book`, das verschiedene Typen hat, die mit einer weiteren "cover"-Beziehung definiert sind, könnte einen Parameternamen haben: `type__cover__name__exact='hard'`.

Es gibt noch viel mehr, was Sie mit Abfragen tun können, einschließlich rückwärts gerichteter Suchen von verwandten Modellen, Verkettung von Filtern, Rückgabe einer kleineren Menge von Werten usw. Weitere Informationen finden Sie unter [Abfragen durchführen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definieren der LocalLibrary-Modelle

In diesem Abschnitt werden wir beginnen, die Modelle für die Bibliothek zu definieren. Öffnen Sie `models.py` (im Verzeichnis /django-locallibrary-tutorial/katalog/). Das Boilerplate am Anfang der Seite importiert das _models_ Modul, das die Modellbasis-Klasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den `Genre`-Modellcode unten und fügen Sie ihn am Ende Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen zur Buchkategorie zu speichern – zum Beispiel, ob es ein Sachbuch oder ein Roman, ein romantisches Buch oder eine Militärgeschichte ist. Wie oben erwähnt, haben wir das Genre als Modell erstellt und nicht als Freitext oder Auswahlliste, sodass die möglichen Werte über die Datenbank verwaltet werden können und nicht fest kodiert sind.

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

Das Modell hat ein einzelnes `CharField`-Feld (`name`), das zur Beschreibung des Genres verwendet wird (dies ist auf 200 Zeichen beschränkt und hat einige `help_text`).
Wir haben dieses Feld einzigartig gemacht (`unique=True`), weil es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des durch einen bestimmten Datensatz definierten Genres zurückgibt. Es wurde kein ausführlicher Name definiert, sodass die Feldbeschriftung `Name` sein wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die Methode `get_absolute_url()`, die eine URL zurückgibt, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat, sowie eine zugehörige Ansicht und Vorlage).

Die Einstellung `unique=True` auf dem obigen Feld verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, jedoch nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der Kleinbuchstabe des Wertes im `name`-Feld in der Datenbank einzigartig sein muss, und zeigt den `violation_error_message`-String an, wenn er dies nicht ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Weitere Informationen finden Sie in der [Einschränkungsreferenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buch-Modell

Kopieren Sie das `Book`-Modell unten und fügen Sie es ebenfalls am Ende Ihrer Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch im Allgemeinen, jedoch keine besondere physische "Instanz" oder "Kopie", die zur Ausleihe verfügbar ist.

Das Modell verwendet `CharField`, um den `title` und `isbn` des Buches zu repräsentieren.
Für `isbn` bemerken Sie, wie der erste nicht benannte Parameter den Beschriftung explizit als "ISBN" festlegt (ansonsten würde er standardmäßig "Isbn" sein). Wir setzen auch den Parameter `unique` auf `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der einzigartige Parameter macht den Feldwert in einer Tabelle global eindeutig).
Anders als beim `isbn` (und dem Genrenamen) ist der `title` nicht eindeutig, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, da dieser Text recht lang sein muss.

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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldern wird die verwandte Modellklasse als erster unbenannter Parameter entweder mit der Modellklasse oder einer Zeichenkette, die den Namen des verwandten Modells enthält, deklariert. Sie müssen den Namen des Modells als Zeichenkette verwenden, wenn die zugeordnete Klasse nicht zuvor in dieser Datei definiert wurde, bevor sie referenziert wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, das es der Datenbank ermöglicht, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, das verhindert, dass der dem Buch zugeordnete Autor gelöscht wird, falls es in irgendeinem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wird, auch dieses Buch gelöscht wird! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um den Autor daran zu hindern, während eines Buches verwendet wird, gelöscht zu werden oder `SET_NULL`, um den Autor eines Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert ebenfalls `__str__()`, wobei das `title`-Feld des Buches verwendet wird, um einen `Buch`-Datensatz zu repräsentieren. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, sowie eine zugehörige Ansicht und Vorlage).

### BookInstance-Modell

Kopieren Sie als nächstes das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Der `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand möglicherweise ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind Ihnen jetzt vertraut. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
- `CharField`, um das Imprint (spezifische Veröffentlichung) des Buches zu repräsentieren.

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

Wir deklarieren außerdem einige neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist jeder Instanz einen global eindeutigen Wert zu (für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das `due_back`-Datum (an dem das Buch wieder verfügbar ist, nachdem es ausgeliehen wurde oder in Wartung ist) verwendet. Dieser Wert kann `blank` oder `null` sein (notwendig, wenn das Buch verfügbar ist). Die Metadaten des Modells (`Class Meta`) verwenden dieses Feld, um Datensätze zu sortieren, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Wahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tuple, das Tuples aus Schlüssel-Wert-Paaren enthält, und übergeben es an das choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) gesetzt, da Bücher anfangs nicht verfügbar erstellt werden, bevor sie ins Regal gestellt werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt durch eine Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book`.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die String-Interpolationssyntax verwenden (auch bekannt als f-Strings): `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials verwendeten wir eine [formatierte Zeichenfolge](https://peps.python.org/pep-3101/)-Syntax, die ebenfalls eine gültige Methode der Zeichenfolgenformatierung in Python ist (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

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

Alle Felder/Methoden sollten jetzt vertraut sein. Das Modell definiert einen Autor mit einem Vor- und Nachnamen sowie Geburts- und Sterbedaten (beide optional). Es spezifiziert, dass standardmäßig `__str__()` den Namen in _Nachname, Vorname_-Reihenfolge zurückgibt. Die Methode `get_absolute_url()` kehrt die `author-detail`-URL-Zuordnung um, um die URL zum Anzeigen eines einzelnen Autors abzurufen.

## Führen Sie die Datenbankmigrationen erneut aus

Alle Ihre Modelle wurden nun erstellt. Führen Sie nun Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein örtlicher Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache (z.B. Farsi) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden können, und sie dann den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verknüpft werden?
- Sollten die verschiedenen Sprachen mithilfe eines Modells, eines Freitextfeldes oder einer fest kodierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können auf GitHub [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) sehen, für was wir uns entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell Ihre Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen genutzt, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz vom Erstellen der Seite abweichen und uns die _Django-Administrationsoberfläche_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen durchführen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
