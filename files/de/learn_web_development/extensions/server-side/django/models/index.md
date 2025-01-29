---
title: "Django Tutorial Teil 3: Verwenden von Modellen"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Sie Modelle für die LocalLibrary-Website definieren. Er erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Außerdem wird kurz gezeigt, wie man auf Modelldaten zugreifen kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellen einer Skeleton-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen, indem Sie Felder angemessen auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten sie. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Auswahllisten, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr kommunizieren – Sie schreiben einfach Ihre Modellstruktur und anderen Code und Django übernimmt die gesamte Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie man die Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Programmieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, geschriebene Sprache, Kategorie, ISBN) speichern müssen und dass möglicherweise mehrere Kopien verfügbar sind (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, geschriebener Sprache und Kategorie sortieren können.

Beim Entwerfen von Modellen macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Sie möchten möglicherweise auch Modelle verwenden, um Auswahloptionen (z. B. wie eine Dropdown-Liste von Wahlmöglichkeiten) darzustellen, anstatt die Auswahlmöglichkeiten direkt in die Website zu codieren – dies wird empfohlen, wenn nicht alle Optionen vorab bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle sind in diesem Fall das Buchgenre (z. B. Science-Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit dem Vorstehenden im Hinterkopf zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren (als Kästchen).

![LocalLibrary Modell UML mit fester Autor-Multiplikation innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (Status spezifischer physischer Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir haben die Werte (`LOAN_STATUS`) hart codiert, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kastens sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplikationen_. Die Multiplikationen sind die Zahlen im Diagramm, die die Anzahl (maximal und minimal) jedes Modells anzeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre miteinander verbunden sind. Die Zahlen in der Nähe des Genre-Modells zeigen, dass ein Buch ein oder mehrere Genre haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Während Sie diesen Abschnitt lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Einführung in Modelle

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der Datei **models.py** einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der Codeausschnitt unten zeigt ein "typisches" Modell mit dem Namen `MyModelName`:

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

In den folgenden Abschnitten werden wir jedes der Features im Modell im Detail erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben – jedes davon repräsentiert eine Spalte mit Daten, die wir in einer unserer Datenbanktabellen speichern möchten. Jede Datenbankaufzeichnung (Zeile) besteht aus einem Wert jedes Feldes. Schauen wir uns das unten stehende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` – was bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthält. Die Feldtypen werden unter Verwendung spezieller Klassen zugewiesen, die den Typ der Datensatzes bestimmen, der zum Speichern der Daten in der Datenbank verwendet wird, zusammen mit den Überprüfungsrichtlinien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d. h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Geben Sie die Feldinformationen ein'` — Hilfreicher Text, der in einem Formular angezeigt werden kann, damit Benutzer verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Vorlagen darauf zu verweisen. Felder haben auch ein Label, das durch das Argument `verbose_name` angegeben wird (mit einem Standardwert von `None`). Wenn `verbose_name` nicht festgelegt ist, wird das Label aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (z. B. hätte das Feld `my_field_name` in Formularen ein Standardlabel von _My field name_).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf ihre Standardreihenfolge aus, wenn ein Modell in einem Formular gerendert wird (z. B. auf der Admin-Seite), obwohl dies überschrieben werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können beim Deklarieren vieler/der meisten verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet ein Textlabel für HTML-Formulare (z. B. auf der Admin-Seite), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein für Menschen lesbarer Name für das Feld, der in Feldbeschriftungen verwendet wird. Wenn nicht angegeben, leitet Django den Standard `verbose_name` aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein; in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` speichert stattdessen eine leere Zeichenfolge). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie zwingt, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, da Sie, wenn Sie leere Werte zulassen möchten, auch möchten, dass die Datenbank sie angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben wird, ist das Standard-Formular-Widget ein Auswahlfeld mit diesen Optionen anstelle des Standard-Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank einzigartig ist.
  Dies kann verwendet werden, um eine Duplizierung von Feldern zu verhindern, die nicht die gleichen Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, setzt das aktuelle Feld als Primärschlüssel für das Modell (Ein Primärschlüssel ist eine spezielle Datenbankspalte, die verwendet wird, um alle verschiedenen Tabelleneinträge eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben wird, fügt Django automatisch ein Feld für diesen Zweck hinzu.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in den [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellungen angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Dies sehen Sie in der **catalog/apps.py** Datei der lokalen Bibliothek:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen – Sie können die [vollständige Liste der Feldoptionen hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der häufig verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um Zeichenketten von kurzer bis mittlerer Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenfolgen mit beliebiger Länge verwendet. Sie können für das Feld eine `max_length` angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf der Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zur Speicherung von Ganzzahlen (ganze Zahlen) und zur Validierung eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Repräsentieren von Datums- und Datum/Zeit-Informationen verwendet (als Python-Objekte `datetime.date` und `datetime.datetime`). Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jeder Speicherung des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim Erstellen des Modells zu setzen) und `default` n haben (um ein Standarddatum festzulegen, das vom Benutzer überschrieben werden kann).
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden zum Hochladen von Dateien bzw. Bildern verwendet (das `ImageField` bietet zusätzliche Validierung, dass die hochgeladene Datei ein Bild ist). Diese Felder verfügen über Parameter, um festzulegen, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert wird. Ein Primärschlüssel dieses Typs wird automatisch zu Ihrem Modell hinzugefügt, wenn Sie keinen explizit angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine eins-zu-viele-Beziehung zu einem anderen Datenbankmodell anzugeben (z. B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos bauen). Die "eins"-Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Foreign Key" haben, der sich auf diesen "Schlüssel" bezieht, befinden sich auf der "viele"-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele-Beziehung anzugeben (z. B. kann ein Buch mehrere Genres haben und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können in komplizierteren Wegen verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z. B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Typen von Feldern, einschließlich Felder für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Uhrzeit usw.). Sie können die [vollständige Liste hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können Modell-Metadaten auf Modellebene für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eines der nützlichsten Features dieser Metadaten ist die Kontrolle über die _Standardsortierung_ von Datensätzen, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen an das `ordering`-Attribut übergeben, wie oben gezeigt. Die Sortierung hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder in chronologischer Reihenfolge sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir wählen, Bücher standardmäßig wie folgt zu sortieren:

```python
ordering = ['title', '-publish_date']
```

dann würden die Bücher alphabetisch nach Titel sortiert, von A-Z, und dann nach Veröffentlichungsdatum innerhalb jedes Titels, von neu nach alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein beschreibender Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Mit Klassenmetadaten können neue "Zugriffsberechtigungen" für das Modell erstellt und angewendet werden (Standardberechtigungen werden automatisch angewendet), die Möglichkeit des Sortierens basierend auf einem anderen Feld, das Definieren von [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) zu möglichen Werten von Daten, die gespeichert werden können, oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und stattdessen von dieser abgeleitete Modelle erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell einer vorhandenen Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen finden Sie hier: [Model-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**In jedem Modell sollten Sie mindestens die Standard-Python-Klassenmethode `__str__()` definieren, die eine menschenlesbare Zeichenfolge für jedes Objekt zurückgibt.** Diese Zeichenfolge wird verwendet, um einzelne Datensätze auf der Administrationsseite (und überall sonst, wo Sie auf eine Modellinstanz referenzieren müssen) zu repräsentieren. Oft wird dies ein Titel- oder Namensfeld des Modells zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode in Django-Modellen ist `get_absolute_url()`, die eine URL zum Anzeigen einzelner Modell-Datensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, wird Django automatisch einen "View on Site"-Button zu den Bearbeitungsbildschirmen des Modells in der Admin-Oberfläche hinzufügen). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Wenn Sie URLs wie `/my-application/my-model-name/2` verwenden möchten, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Modell Detailansicht" zu übergeben (die die erforderliche Arbeit leistet, um den Datensatz anzuzeigen). Die `reverse()`-Funktion oben kann Ihren URL-Mapper (im obigen Fall mit dem Namen _'model-detail-view'_) "umkehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, um dies zum Funktionieren zu bringen, immer noch die URL-Zuordnung, Ansicht und Vorlage schreiben!

Sie können auch alle anderen beliebigen Methoden definieren und von Ihrem Code oder Vorlagen aus aufrufen (sofern sie keine Parameter nehmen).

### Modellverwaltung

Nachdem Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und um Abfragen auszuführen, um alle oder bestimmte Teilmengen von Datensätzen zu erhalten. Wir werden Ihnen zeigen, wie Sie das im Tutorial machen, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines zugewiesen, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen und es hätte einen Wert von 1.

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

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, unter Verwendung des `objects`-Attributs des Modells (bereitgestellt von der Basisklasse).

> [!NOTE]
> Das Erklären, wie man nach Datensätzen sucht, indem man "abstrakte" Modell- und Feldnamen verwendet, kann etwas verwirrend sein. In der folgenden Diskussion werden wir auf ein `Book`-Modell mit den Feldern `title` und `genre` verweisen, wobei genre ebenfalls ein Modell mit einem einzelnen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` erhalten, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein iterierbares Objekt, das eine Anzahl von Objekten enthält, die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **Zahlen**-Feld mit bestimmten Kriterien übereinstimmt. Beispielsweise, um nach Büchern zu filtern, die "wild" im Titel enthalten, und diese dann zu zählen, könnten wir folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder zum Abgleichen und die Art des Abgleichs werden im Filter-Parameter-Namen definiert, im Format: `field_name__match_type` (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einer groß- und kleinschreibungssensitiven Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie durchführen können: `icontains` (groß- und kleinschreibungsunabhängig), `iexact` (groß- und kleinschreibungsunabhängige exakte Übereinstimmung), `exact` (groß- und kleinschreibungsabhängige exakte Übereinstimmung) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie ein Feld filtern, das eine eins-zu-viele-Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie auf Felder innerhalb des zugehörigen Modells mit zusätzlichen doppelten Unterstrichen "indizieren".
Um beispielsweise nach Büchern mit einem bestimmten Genre-Muster zu filtern, müssen Sie über das Feld `genre` auf das Feld `name` indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Beziehungsebenen (`ForeignKey`/`ManyToManyField`) wie Sie möchten zu navigieren.
> Zum Beispiel ein `Book`, das verschiedene Arten hätte, definiert durch eine weitere "cover"-Beziehung, könnte einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt noch viel mehr, was Sie mit Abfragen machen können, einschließlich rückwärtssuche von verwandten Modellen, Kettenfilter, Rückgabe einer kleineren Menge von Werten usw. Für weitere Informationen siehe [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definieren der LocalLibrary-Modelle

In diesem Abschnitt werden wir damit beginnen, die Modelle für die Bibliothek zu definieren. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Das Boilerplate am oberen Seitenrand importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den `Genre`-Modellcode unten und fügen Sie ihn unten in Ihre `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern – zum Beispiel, ob es sich um Belletristik, Nicht-Belletristik, Romantik oder Militärgeschichte handelt usw.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als freien Text oder eine Auswahlliste, damit die möglichen Werte über die Datenbank und nicht fest codiert verwaltet werden können.

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

Das Modell hat ein einzelnes `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat einige `help_text`).
Wir haben dieses Feld als einzigartig (`unique=True`) festgelegt, da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert wird. Es wurde kein `verbose_name` definiert, daher wird das Feldlabel `Name` sein, wenn es in Formularen verwendet wird. Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung definieren, die den Namen `genre-detail` hat und eine zugehörige Ansicht und Vorlage definieren).

Das Festlegen von `unique=True` auf dem Feld oben verhindert, dass Genres mit _genau dem gleichen_ Namen erstellt werden, aber nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY". Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den [Metadaten](#metadaten) des Modells, um anzugeben, dass der Kleinbuchstabe des Wertes im `name`-Feld in der Datenbank eindeutig sein muss und die `violation_error_message`-Zeichenfolge anzeigt, wenn dies nicht der Fall ist.
Hier müssen wir nichts anderes tun, aber Sie können mehrere Einschränkungen gegen ein oder mehrere Felder definieren.
Für weitere Informationen siehe das [Constraints-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buchmodell

Kopieren Sie das `Book`-Modell unten und fügen Sie es erneut an das Ende Ihrer Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch in einem allgemeinen Sinne, jedoch nicht ein bestimmtes physisches "Exemplar" oder "Exemplar", das zur Ausleihe zur Verfügung steht.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen. Für `isbn` beachten Sie, wie der erste unbenannte Parameter das Label ausdrücklich als "ISBN" setzt (anders wäre es standardmäßig "Isbn"). Wir setzen auch den Parameter `unique` als `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert global einzigartig in einer Tabelle).
Im Gegensatz zu der `isbn` (und dem Genrenamen) ist der `title` nicht als eindeutig festgelegt, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
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

Das Genre ist ein `ManyToManyField`, so dass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor haben wird, aber ein Autor kann viele Bücher haben (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter unter Verwendung der Modellklasse oder eines Strings mit dem Namen des zugehörigen Modells deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was der Datenbank erlaubt, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, was verhindert, dass der mit dem Buch verknüpfte Autor gelöscht wird, wenn er von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht würde, dieses Buch auch gelöscht würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert außerdem `__str__()`, wobei das `title`-Feld des Buches verwendet wird, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

### BookInstance-Modell

Kopieren Sie als nächstes das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Impressum"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind nun vertraut. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
- `CharField`, um das Impressum (spezifische Veröffentlichung) des Buches darzustellen.

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

Wir deklarieren zusätzlich ein paar neue Arten von Feld:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist jeder Instanz (jedem Buch, das Sie in der Bibliothek finden können) einen global eindeutigen Wert zu.
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch nach der Ausleihe oder Wartung wieder verfügbar sein sollte). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu sortieren, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tuple, das aus Tupeln von Schlüssel-Wert-Paaren besteht, und übergeben es an das Auswahlargument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, weil Bücher initial als nicht verfügbar erstellt werden, bevor sie in den Regalen stehen.

Die Methode `__str__()` stellt das `BookInstance`-Objekt unter Verwendung einer Kombination seiner eindeutigen ID und des Titels des zugehörigen `Book`-Objekts dar.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die Zeichenfolgeninterpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials verwendeten wir eine [formatierte Zeichenfolge](https://peps.python.org/pep-3101/)-Syntax, was ebenfalls eine gültige Möglichkeit ist, Zeichenfolgen in Python zu formatieren (z. B. `'{0} ({1})'.format(self.id,self.book.title)`).

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

Alle Felder/Methoden sollten nun vertraut sein. Das Modell definiert einen Autor als mit Vor- und Nachnamen sowie Geburts- und Sterbedaten (beide optional) versehen. Es legt fest, dass standardmäßig die `__str__()` den Namen in _Nachname, Vorname_-Reihenfolge zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail`-URL-Zuordnung um, um die URL zum Anzeigen eines einzelnen Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie zu Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter stiftet eine Reihe neuer Bücher, die in einer anderen Sprache geschrieben sind (zum Beispiel Persisch). Die Herausforderung besteht darin, herauszufinden, wie diese auf unserer Bibliotheks-Website am besten dargestellt werden sollen, und sie dann zu den Modellen hinzuzufügen.

Einige Dinge zu berücksichtigen:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verbunden sein?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer fest codierten Auswahlliste dargestellt werden?

Nachdem Sie entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, wofür wir uns auf GitHub entschieden haben [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz vom Erstellen der Website abweichen und uns die _Django-Administrationsseite_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mithilfe der (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Write your first Django app, part 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumente)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumente)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
