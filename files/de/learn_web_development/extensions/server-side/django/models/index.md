---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Modelle für die Website LocalLibrary definiert werden. Er erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Außerdem zeigt er kurz einige Hauptmethoden, mit denen auf Modell-Daten zugegriffen werden kann.

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
          In der Lage zu sein, eigene Modelle zu entwerfen und zu erstellen, indem Sie Felder angemessen auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch deren maximale Größe, Standardwerte, Auswahlmöglichkeiten aus Listen, Hilfetext für Dokumentationen, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen wählen. Sobald Sie sich für eine Datenbank entschieden haben, müssen Sie nicht mehr direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die ganze Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie die Modelle für das [LocalLibrary-Website-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und auf sie zugegriffen wird.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare (mit global eindeutiger ID, Verfügbarkeitsstatus usw.) haben könnten. Wir benötigen möglicherweise mehr Informationen über den Autor als nur seinen Namen, und es könnte mehrere Autoren mit gleichen oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Es könnte auch sinnvoll sein, Modelle zur Darstellung von Auswahloptionen in Listen (z.B. Dropdown-Menüs) zu verwenden, anstatt die Optionen fest in die Website zu kodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Buchgenre (z.B. Science-Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit dem vorliegenden Wissen zeigt das folgende UML Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren (als Kästchen).

![LocalLibrary Modell UML mit festen Autor-Multiplikationen innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (Status spezifischer physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu erstellen, sodass Werte über die Admin-Schnittstelle erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest kodiert, weil wir nicht erwarten, dass diese sich ändern. Innerhalb jedes Kästchens können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Zahlen (Maximum und Minimum) jedes Modells angeben, die in der Beziehung vorhanden sein dürfen. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre verwandt sind. Die Zahlen nahe beim Genre-Modell zeigen, dass ein Buch ein oder mehrere Genre haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung in die Definition und Verwendung von Modellen. Während Sie dies lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Einführung

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modell-Definition

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

In den folgenden Abschnitten werden wir jedes Merkmal des Modells im Detail betrachten:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben — jedes repräsentiert eine Spalte von Daten, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankeintrag (Zeile) wird aus einem Wert jedes Feldes bestehen. Schauen wir uns das unten stehende Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — das bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthalten wird. Die Feldtypen werden mit speziellen Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zur Speicherung der Daten in der Datenbank verwendet wird, zusammen mit den Validierungskriterien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert ausmacht). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — hilfreicher Text, der in einem Formular angezeigt werden kann, um Benutzern zu helfen zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Vorlagen auf ihn zu verweisen.
Felder haben auch eine Bezeichnung, die mit dem `verbose_name`-Argument angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht gesetzt ist, wird die Bezeichnung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` eine Standardbezeichnung von _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf deren Standardreihenfolge aus, wenn ein Modell in einem Formular gerendert wird (z.B. im Admin-Bereich), obwohl dies überschrieben werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können verwendet werden, wenn viele/ die meisten der verschiedenen Feldtypen deklariert werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet ein Textlabel für HTML-Formulare (z.B. im Admin-Bereich), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, der in Feldetiketten verwendet wird. Wenn nicht angegeben, wird Django den Standard `verbose name` aus dem Feldnamen ableiten.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein callable Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angebracht ist (ein `CharField` speichert stattdessen eine leere Zeichenkette). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass Django die Formularvalidierung erzwingt, einen Wert einzugeben. Dies wird häufig mit `null=True` verwendet, da, wenn leere Werte zugelassen werden, die Datenbank diese ebenfalls entsprechend darstellen soll.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben wird, besteht das Standardformular-Widget aus einer Auswahlbox mit diesen Auswahlmöglichkeiten anstelle des Standard-Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die keine gleichen Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, legt das aktuelle Feld als Primärschlüssel für das Modell fest (ein Primärschlüssel ist eine spezielle Datenbankspalte, die dazu bestimmt ist, alle unterschiedlichen Tabellensätze eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben wird, fügt Django automatisch ein Feld zu diesem Zweck hinzu.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede Anwendung in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD)-Einstellung angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt werden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der lokalen Bibliothek **catalog/apps.py**-Datei sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — Sie können die [vollständige Liste der Feldoptionen hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufig verwendete Feldtypen

Die folgende Liste beschreibt einige der am häufigsten verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittelgroße, fixe Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große, willkürliche Zeichenfolgenlängen verwendet. Möglicherweise geben Sie eine `max_length` für das Feld an, dies wird jedoch nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene durchgesetzt).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld für die Speicherung von Ganzzahlen und zur Validierung von eingegebenen Werten als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zur Speicherung/darstellung von Datums- und Zeitangaben (als Python `datetime.date` und `datetime.datetime` Objekte) verwendet. Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird zur Speicherung und Validierung von E-Mail-Adressen verwendet.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (`ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell anzugeben (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eins"-Seite der Beziehung ist das Modell, das den "key" enthält (Modelle, die einen "Fremdschlüssel" haben, der sich auf diesen "key" bezieht, sind auf der "viele"-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele-Beziehung anzugeben (z.B. kann ein Buch mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. ein Wert von `models.SET_NULL` würde den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Felder für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Fließkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Die [vollständige Liste können Sie hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellweite Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie unten gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist die Steuerung der _Standard-Sortierung_ der zurückgegebenen Datensätze, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen an das `ordering`-Attribut übergeben, wie oben gezeigt. Die Reihenfolge hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie den Feldnamen mit einem Minuszeichen (-) versehen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir auswählen würden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel von A-Z sortiert und dann nach Veröffentlichungsdatum innerhalb jedes Titels von neu nach alt sortiert.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in singularer und pluraler Form:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), das Sortieren basierend auf einem anderen Feld zu ermöglichen, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) auf mögliche Werte der gespeicherten Daten zu definieren oder zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können, und von der abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell auf eine vorhandene Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Model-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Als Minimum sollten Sie in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um eine menschenlesbare Zeichenkette für jedes Objekt zurückzugeben.** Diese Zeichenkette wird verwendet, um einzelne Datensätze in der Admin-Oberfläche (und überall sonst, wo Sie eine Modellinstanz referenzieren müssen) darzustellen. Oft wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode, die in Django-Modellen enthalten sein sollte, ist `get_absolute_url()`, die eine URL für die Anzeige einzelner Modell-Datensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, wird Django automatisch eine "Auf Website anzeigen"-Schaltfläche zu den Datensatzbearbeitungsbildschirmen des Modells in der Admin-Bereich hinzufügen). Ein typisches Muster für `get_absolute_url()` ist unten dargestellt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Model-Detail-Ansicht" zu übergeben (die die Arbeit erledigt, die erforderlich ist, um den Datensatz anzuzeigen). Die `reverse()`-Funktion oben ist in der Lage, Ihren URL-Mapper (im obigen Fall mit dem Namen _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, um dies zum Laufen zu bringen, immer noch die URL-Zuordnung, Ansicht und Vorlage schreiben!

Sie können auch beliebige andere Methoden definieren, die Sie möchten, und sie von Ihrem Code oder Ihren Vorlagen aus aufrufen (solange sie keine Parameter benötigen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie diese verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und um Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen abzurufen. Wir werden Ihnen zeigen, wie das geht, wenn wir die Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

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

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suchen von Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt durch die Basisklasse).

> [!NOTE]
> Zu erklären, wie man nach Datensätzen mit "abstrakten" Modell- und Feldnamen sucht, kann ein wenig verwirrend sein. Im Folgenden werden wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern beziehen, wobei das Genre auch ein Modell mit einem einzelnen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mit `objects.all()` abrufen. `QuerySet` ist ein iterierbares Objekt, das eine Anzahl von Objekten enthält, durch die wir iterieren/schleifen können.

```python
all_books = Book.objects.all()
```

Die `filter()`-Methode von Django ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **numerisches** Feld mit bestimmten Kriterien übereinstimmt. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten, und diese dann zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die zu suchenden Felder und die Art des Vergleichs werden im Namen des Filterparameters definiert, nach dem Format: `field_name__match_type` (beachten Sie den _Doppelt-Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem groß- und kleinsensitiven Vergleich. Es gibt viele andere Arten von Vergleichen, die Sie durchführen können: `icontains` (groß- und kleininsensitiv), `iexact` (groß- und kleininsensitiver exakter Vergleich), `exact` (groß- und kleinsensitiver exakter Vergleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie ein Feld filtern, das eine Eins-zu-viele-Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen Doppelunterstrichen auf Felder in dem verbundenen Modell "indizieren".
So müssen Sie beispielsweise, um nach Büchern mit einem bestimmten Genre-Muster zu filtern, über das `genre`-Feld auf den `name` indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Beziehungsebenen (`ForeignKey`/`ManyToManyField`) wie gewünscht zu navigieren.
> Ein Buch, das verschiedene Typen mittels einer zusätzlichen "cover"-Beziehung definiert hätte, könnte einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt noch viel mehr, was Sie mit Abfragen tun können, einschließlich Rückwärtsabfragen von verbundenen Modellen, Verkettung von Filtern, Rückgabe eines kleineren Satzes von Werten usw. Weitere Informationen finden Sie in [Making queries](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definieren der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Die Boilerplate am Anfang der Seite importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn unten in Ihre `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — z.B. ob es sich um Belletristik oder Sachliteratur, Romantik oder Militärgeschichte usw. handelt.
Wie oben erwähnt, haben wir das Genre als Modell anstatt als Freitext oder als Auswahl in einer Liste erstellt, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt fest kodiert zu sein.

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

Das Modell verfügt über ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat einen `help_text`).
Wir haben dieses Feld als eindeutig (`unique=True`) festgelegt, weil es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert wird. Es wurde kein `verbose name` definiert, sodass das Feldlabel `Name` sein wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um einen Detaildatensatz für dieses Modell aufzurufen (damit dies funktioniert, müssen wir eine URL-Zuordnung mit dem Namen `genre-detail` definieren und eine zugehörige Ansicht und Vorlage festlegen).

Das Setzen von `unique=True` im obigen Feld verhindert, dass Genres mit _genau_ dem gleichen Namen erstellt werden, aber keine Varianten wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option in den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der Kleinbuchstabenwert im `name`-Feld in der Datenbank eindeutig sein muss und die Zeichenkette `violation_error_message` angezeigt wird, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein oder mehrere Felder definieren.
Weitere Informationen finden Sie im [Referenzhandbuch zu Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Book-Modell

Kopieren Sie das untenstehende `Book`-Modell und fügen Sie es erneut unten in Ihre Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch in allgemeiner Hinsicht, aber nicht ein bestimmtes physisches "Exemplar" oder "Kopie", das ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches zu repräsentieren.
Für `isbn` beachten Sie, dass der erste unbenannte Parameter explizit das Label als "ISBN" setzt (andernfalls würde es auf "Isbn" standardmäßig gesetzt sein). Wir setzen auch den Parameter `unique` als `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der eindeutige Parameter macht den Feldwert in einer Tabelle weltweit eindeutig).
Anders als beim `isbn` (und dem Genrenamen) wird das `title` nicht als eindeutig festgelegt, da es möglich ist, dass verschiedene Bücher den gleichen Namen haben.
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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

Bei beiden Feldtypen wird die verwandte Modellklasse als erster unbenannter Parameter entweder mit der Modellklasse oder einem String, der den Namen des verwandten Modells enthält, deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was es der Datenbank ermöglicht, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt wird, und `on_delete=models.RESTRICT`, was verhindert, dass der dem Buch zugeordnete Autor gelöscht wird, wenn er von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht würde, dieses Buch ebenfalls gelöscht würde! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch es verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, indem es das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell abzurufen (wir müssen eine URL-Zuordnung mit dem Namen `book-detail` definieren und eine zugehörige Ansicht und Vorlage festlegen).

### BookInstance-Modell

Kopieren Sie als Nächstes das `BookInstance`-Modell (wie unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie erwartet wird zurückgegeben zu werden, "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sollten Ihnen jetzt vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugeordnete `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
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

Wir deklarieren zusätzlich einige neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist jedem Exemplar einen weltweit eindeutigen Wert zu (eins für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das `due_back`-Datum verwendet (zu dem das Buch als verfügbar erwartet wird, nachdem es ausgeliehen oder in der Wartung war). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Metadaten des Modells (`Class Meta`) verwenden dieses Feld, um Datensätze zu ordnen, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen können, definieren wir ein Tupel, das Tupel aus Schlüssel-Wert-Paaren enthält, und übergeben es dem choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst nicht verfügbar erstellt werden, bevor sie in den Regalen gestockt werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt unter Verwendung einer Kombination aus seiner eindeutigen ID und dem Titel des zugeordneten `Book`.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die Zeichenfolgeninterpolationssyntax (auch bekannt als f-strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieser Anleitung haben wir eine [formatierte Zeichenfolgen](https://peps.python.org/pep-3101/) Syntax verwendet, die ebenfalls eine gültige Methode zum Formatieren von Zeichenfolgen in Python ist (z.B. `'{0} ({1})'.format(self.id, self.book.title)`).

### Author-Modell

Kopieren Sie das unten gezeigte `Author`-Modell unter den vorhandenen Code in **models.py**.

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

Alle Felder/Methoden sollten Ihnen jetzt vertraut sein. Das Modell definiert einen Autor mit Vorname, Nachname sowie Geburts- und Sterbedatum (beide optional). Es gibt an, dass standardmäßig `__str__()` den Namen in _Nachname_, _Vorname_ Reihenfolge zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail`-URL-Zuordnung um, um die URL für die Anzeige eines einzelnen Autors abzurufen.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden jetzt erstellt. Führen Sie nun Ihre Datenbankmigrationen erneut aus, um sie zu Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache geschrieben sind (sagen wir, Farsi). Die Herausforderung besteht darin, herauszufinden, wie diese am besten in unserer Bibliotheks-Website dargestellt werden sollten, und sie dann den Modellen hinzuzufügen.

Einige Überlegungen, die Sie berücksichtigen sollten:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verbunden sein?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer fest kodierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, wofür wir uns auf GitHub entschieden haben [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells Ihre Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, um dann diese Informationen zu verwenden, um geeignete Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

Zu diesem Zeitpunkt werden wir kurz von der Erstellung der Website abweichen und die _Django-Administrationsseite_ besuchen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Sie Ihre erste Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumente)
- [Machen von Abfragen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
