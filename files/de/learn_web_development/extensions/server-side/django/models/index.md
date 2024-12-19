---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie man Modelle für die Website LocalLibrary definiert. Es wird erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellen einer Skelettwebsite</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, Ihre eigenen Modelle zu entwerfen und zu erstellen und die Felder angemessen auszuwählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django Webanwendungen greifen über Python-Objekte, sogenannte Modelle, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld_types_ und möglicherweise auch deren maximaler Größe, Standardwerte, Optionslisten, Hilfetexte für die Dokumentation, Beschriftungen für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine von mehreren auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr kommunizieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie man die Modelle für das Beispiel [LocalLibrary Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugreift.

## Entwurf der LocalLibrary-Modelle

Bevor Sie anfangen zu programmieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen (Titel, Zusammenfassung, Autor, geschriebene Sprache, Kategorie, ISBN) und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit einer weltweit eindeutigen ID, Verfügbarkeitsstatus usw.). Wir könnten mehr Informationen über den Autor speichern müssen als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, geschriebener Sprache und Kategorie sortieren können.

Beim Entwurf Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website zu schreiben — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Buchgenre (z.B. Science-Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die Eins-zu-Eins (`OneToOneField`), Eins-zu-Viele (`ForeignKey`) und Viele-zu-Viele (`ManyToManyField`) sind.

Mit diesem Gedanken im Kopf zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Model UML mit fester Autor-Multiplizität innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), Buchinstanzen (den Status spezifischer physischer Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben auch beschlossen, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest codiert, weil wir nicht erwarten, dass sich diese ändern. Innerhalb der einzelnen Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabewerte sehen.

Das Diagramm zeigt außerdem die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (maximal und minimal) der Modelle anzeigen, die in der Beziehung vorhanden sein können. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre verbunden sind. Die Zahlen nahe dem Genre-Modell zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele assoziierte Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der oben abgebildeten Modelle konstruieren werden.

## Modell-Grundlagen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der **models.py** Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der unten stehende Codeausschnitt zeigt ein "typisches" Modell namens `MyModelName`:

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

In den unten stehenden Abschnitten werden wir jede der Funktionen im Modell im Detail erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern haben, jeden Typs — jedes von ihnen repräsentiert eine Datenbankspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jedes Datenbankdatensatz (Zeile) besteht aus einem Wert für jedes Feld. Schauen wir uns das unten stehende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name`, vom Typ `models.CharField` — was bedeutet, dass dieses Feld alphanumerische Zeichen enthalten wird. Die Feldtypen werden mit spezifischen Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zum Speichern der Daten in der Datenbank verwendet wird, zusammen mit den Validierungskriterien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente aufnehmen, die weiter angeben, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — gibt an, dass die maximale Länge eines Werts in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — hilfreicher Text, der in einem Formular angezeigt werden kann, um Benutzern zu helfen zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um im Anfragen und Vorlagen darauf zu verweisen.
Felder haben auch ein Etikett, das mit dem Argument `verbose_name` angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht festgelegt ist, wird das Etikett aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` ein Standardetikett von _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst ihre Standardreihenfolge, wenn ein Modell in einem Formular angezeigt wird (z.B. auf der Admin-Seite), obwohl dies überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden allgemeinen Argumente können beim Deklarieren vieler/der meisten verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet ein Textetikett für HTML-Formulare (z.B. auf der Admin-Seite), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein lesbarer Name für das Feld, der in Feldetiketten verwendet wird. Wenn nicht angegeben, wird Django den Standard-bezeichner aus dem Feldnamen ableiten.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein ausführbares Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angemessen ist (ein `CharField` wird stattdessen eine leere Zeichenkette speichern). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass die Formularvalidierung von Django Sie zwingt, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, da, wenn Sie leere Werte zulassen, Sie auch möchten, dass die Datenbank in der Lage ist, sie entsprechend darzustellen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, wird das entsprechende Standardformular-Widget ein Auswahlfeld mit diesen Optionen anstelle des Standard-Textfelds sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert über die gesamte Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die keine gleichen Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (Ein Primärschlüssel ist eine spezielle Datenbankspalte, die alle unterschiedlichen Tabelleneinträge eindeutig identifiziert).
  Wenn kein Feld als Primärschlüssel angegeben ist, wird Django automatisch ein Feld zu diesem Zweck hinzufügen.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellung angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der lokalen Bibliothek **catalog/apps.py** Datei sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen — Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der häufiger verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittellange, feste Längen-Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber diese wird nur verwendet, wenn das Feld in Formularen angezeigt wird (sie wird auf Datenbankebene nicht durchgesetzt).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlen (ganze Zahlen) und zur Validierung eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Zeitinformationen verwendet (als Python `datetime.date` und `datetime.datetime` Objekte bzw.). Diese Felder können zusätzlich die (wechselseitig ausschließende) Parameter `auto_now=True` (um das Feld jedes Mal auf das aktuelle Datum zu setzen, wenn das Modell gespeichert wird), `auto_now_add` (um das Datum nur zu setzen, wenn das Modell erstmals erstellt wird), und `default` (um ein Standarddatum festzulegen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien und Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird automatisch Ihrem Modell hinzugefügt, wenn Sie keinen explizit angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-Viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" enthalten, der auf diesen "Schlüssel" verweist, befinden sich auf der "vielen" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-Viele-Beziehung zu spezifizieren (z.B. ein Buch kann mehrere Genres haben und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugeordnete Datensatz gelöscht wird (z.B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Feldern für verschiedene Zahlentypen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können auf Modell-Ebene Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist die Steuerung der _Standardreihenfolge_ der zurückgegebenen Datensätze, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Übereinstimmungsreihenfolge in einer Liste von Feldnamen an das `ordering` Attribut angeben, wie oben gezeigt. Die Reihenfolge hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie den Feldnamen mit einem Minus-Symbol (-) voranstellen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir wählen würden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel von A-Z sortiert werden und dann nach Veröffentlichungsdatum innerhalb jedes Titels, vom neuesten zum ältesten.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um die Reihenfolge basierend auf einem anderen Feld zu ermöglichen, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte der zu speichernden Daten zu definieren oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und von der abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadaten-Optionen kontrollieren, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur dann nützlich, wenn Sie ein Modell mit einer vorhandenen Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Modell-Metadaten-Optionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Mindestens in jedem Modell sollten Sie die Standard-Python-Klassenmethode `__str__()` definieren, um für jedes Objekt eine lesbare Zeichenfolge zurückzugeben.** Diese Zeichenfolge wird zur Darstellung einzelner Datensätze auf der Administrationsseite (und überall dort, wo Sie auf eine Modellinstanz verweisen müssen) verwendet. Häufig gibt dies ein Titel- oder Namensfeld aus dem Modell zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode, die in Django-Modellen enthalten ist, ist `get_absolute_url()`, die eine URL zurückgibt, um einzelne Modelldatensätze auf der Website anzuzeigen (wenn Sie diese Methode definieren, wird Django automatisch einen "Auf Website anzeigen" Button zu den Modell-Datensatzbearbeitungsbildschirmen in der Admin-Seite hinzufügen). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Modelldetailansicht" zu übergeben (die die Arbeit erledigt, um den Datensatz anzuzeigen). Die `reverse()` Funktion oben ist in der Lage, Ihren URL-Mapper (in diesem Fall benannt _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie dazu noch die URL-Abbildung, Ansicht und Vorlage schreiben!

Sie können auch beliebige andere Methoden definieren und diese aus Ihrem Code oder Ihren Vorlagen (sofern sie keine Parameter annehmen) aufrufen.

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Das zeigen wir Ihnen im Tutorial, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

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

#### Suche nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das Attribut `objects` des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Das Erklären, wie man nach Datensätzen mit "abstrakten" Modell- und Feldnamen sucht, kann ein wenig verwirrend sein. In der nachstehenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title` und `genre` Feldern, wobei `genre` auch ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` erhalten, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein Iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, durch die wir iterieren/durchlaufen können.

```python
all_books = Book.objects.all()
```

Die `filter()` Methode von Django erlaubt uns, das zurückgegebene `QuerySet` zu filtern, um ein bestimmtes **Text** oder **numerisches** Feld mit bestimmten Kriterien abzugleichen. Zum Beispiel, um nach Büchern zu filtern, die "wild" im Titel enthalten, und diese dann zu zählen, könnten wir Folgendes tun.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die abgeglichen werden sollen, und der Abgleichstyp werden im Filter-Parameter-Namen definiert, wobei das Format verwendet wird: `field_name__match_type` (beachten Sie die _doppelten Unterstriche_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem Fall-sensitive-Abgleich. Es gibt viele andere Abgleichstypen, die Sie durchführen können: `icontains` (Fall-unsensitiv), `iexact` (fallunsensitiver exakter Abgleich), `exact` (Fall-sensitiver exakter Abgleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf ein Feld filtern, das eine Eins-zu-Viele-Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen doppelten Unterstrichen zu Feldern im zugehörigen Modell "indizieren".
So können Sie beispielsweise für Bücher mit einem bestimmten Genre-Muster filtern, indem Sie wie unten gezeigt über das `name`-Feld durchs `genre`-Feld indizieren:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Beziehungsebenen (`ForeignKey`/`ManyToManyField`) zu durchlaufen, wie Sie möchten.
> Wenn zum Beispiel ein `Book` verschiedene Typen hätte, die mithilfe einer weiteren "cover"-Beziehung definiert würden, könnte der Parametername lauten: `type__cover__name__exact='hard'.`

Es gibt viel mehr, das Sie mit Abfragen tun können, einschließlich Rückwärtssuchen von zugehörigen Modellen, Verketten von Filtern, Zurückgeben einer kleineren Menge von Werten usw. Weitere Informationen finden Sie unter [Abfragen ausführen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Der Boilerplate oben auf der Seite importiert das _models_ Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten Code des `Genre`-Modells und fügen Sie ihn am unteren Rand Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — zum Beispiel, ob es sich um Belletristik oder Sachliteratur, Romantik oder Militärgeschichte handelt usw.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, statt als freien Text oder eine Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, statt fest codiert zu werden.

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

Das Modell hat ein einzelnes `CharField` Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat einen `help_text`).
Wir haben dieses Feld als einzigartig (`unique=True`) definiert, da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()` Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert ist. Es wurde kein Sprachname (`verbose_name`) definiert, also wird das Feld bei der Verwendung in Formularen als `Name` bezeichnet.
Dann deklarieren wir die `get_absolute_url()` Methode, die eine URL zurückgibt, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuweisung mit dem Namen `genre-detail` definieren und eine zugehörige Ansicht und Vorlage definieren).

Das Setzen von `unique=True` auf das Feld oben verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, jedoch nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints) Option auf den [Metadaten](#metadaten) des Modells, um anzugeben, dass der Kleinbuchstabe des Werts im `name`-Feld in der Datenbank eindeutig sein muss und die `violation_error_message` Zeichenfolge anzeigt, wenn er es nicht ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein oder mehrere Felder definieren.
Weitere Informationen finden Sie im [Constraints Reference](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buchmodell

Kopieren Sie das unten stehende `Book`-Modell und fügen Sie es erneut am unteren Rand Ihrer Datei ein. Das `Book`-Modell stellt alle Informationen über ein verfügbares Buch im Allgemeinen dar, jedoch nicht ein bestimmtes physisches "Exemplar" oder "Exemplar", das zur Ausleihe verfügbar ist.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen.
Für `isbn`, beachten Sie, wie der erste unbenannte Parameter das Label explizit als "ISBN" festlegt (ansonsten würde es standardmäßig "Isbn" lauten). Wir legen auch den Parameter `unique` als `true` fest, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert weltweit eindeutig in einer Tabelle).
Im Gegensatz zu `isbn` (und dem Genre-Namen) ist der `title` nicht als eindeutig festgelegt, weil es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, da dieser Text recht lang sein kann.

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

In beiden Feldtypen wird die zugehörige Modellklasse als erster nicht benannter Parameter entweder mit der Modellklasse oder einem String, der den Namen des zugehörigen Modells enthält, deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht vor ihrer Referenz definiert wurde! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was es der Datenbank erlaubt, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, was verhindert, dass der mit dem Buch verknüpfte Autor gelöscht wird, wenn er noch von irgendeinem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass wenn der Autor gelöscht würde, auch dieses Buch gelöscht würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während irgendein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, unter Verwendung des Buchfeldes `title`, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuweisung mit dem Namen `book-detail` definieren und eine zugehörige Ansicht und Vorlage definieren).

### BookInstance-Modell

Als Nächstes kopieren Sie das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Die `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, die "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden werden Ihnen jetzt vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einer `BookInstance` referenziert wird.
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

Wir deklarieren zusätzlich ein paar neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist für jede Instanz (eins für jedes Buch, das Sie in der Bibliothek finden können) einen weltweit eindeutigen Wert zu.
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch nach dem Ausleihen oder in der Wartung voraussichtlich wieder verfügbar wird). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modell-Metadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu ordnen, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält, und übergeben es dem choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst nicht verfügbar erstellt werden, bevor sie in die Regale gestellt werden.

Die Methode `__str__()` stellt das `BookInstance`-Objekt dar, indem es seine einzigartige ID und den `Book`-Titel der zugehörigen `Book` verwendet.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die String-Interpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte Zeichenfolgen](https://peps.python.org/pep-3101/) Syntax verwendet, die ebenfalls eine gültige Möglichkeit zur Formatierung von Zeichenfolgen in Python ist (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autor-Modell

Kopieren Sie das unten gezeigte `Author`-Modell unter den bestehenden Code in **models.py**.

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

Alle Felder/Methoden sollten jetzt vertraut sein. Das Modell definiert einen Autor als eine Kombination aus Vorname, Nachname und Geburts- und Todesdaten (beide optional). Es gibt an, dass `__str__()` standardmäßig den Namen in der Reihenfolge _Nachname_, _Vorname_ zurückgibt. Die `get_absolute_url()` Methode kehrt die URL-Zuweisung `author-detail` um, um die URL zum Anzeigen eines einzelnen Autors abzurufen.

## Führen Sie die Datenbankmigrationen erneut durch

Alle Ihre Modelle wurden jetzt erstellt. Führen Sie nun Ihre Datenbankmigrationen erneut durch, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Reihe neuer Bücher, die in einer anderen Sprache (z.B. Farsi) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliotheks-Website dargestellt werden und sie dann zu den Modellen hinzuzufügen.

Einige Dinge, die zu beachten sind:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verknüpft werden?
- Sollten die verschiedenen Sprachen mit einem Modell, einem freien Textfeld oder einer fest codierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können auf GitHub [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) sehen, wofür wir uns entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells die Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz von der Erstellung der Website abweichen und die _Django-Administrationsseite_ überprüfen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Sie Ihre erste Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen ausführen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
