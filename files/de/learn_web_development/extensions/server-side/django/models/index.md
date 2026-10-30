---
title: "Django-Tutorial Teil 3: Modelle verwenden"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Sie Modelle für die LocalLibrary-Website definieren. Er erklärt, was ein Modell ist, wie es deklariert wird und welche wichtigen Feldtypen es gibt. Außerdem zeigt er kurz einige der wichtigsten Möglichkeiten, auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Eine Grundstruktur für die Website erstellen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Sie können eigene Modelle entwerfen und erstellen und dafür geeignete Felder auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen über Python-Objekte, sogenannte Modelle, auf Daten zu und verwalten sie darüber. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld_typen_ und gegebenenfalls ihrer maximalen Länge, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für die Dokumentation und Beschriftungen für Formulare. Die Definition eines Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine von mehreren Datenbanken in Ihren Projekteinstellungen auswählen. Sobald Sie sich für eine Datenbank entschieden haben, müssen Sie nicht direkt mit ihr kommunizieren: Sie definieren lediglich Ihre Modellstruktur und schreiben den übrigen Code. Django übernimmt die Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie Sie die Modelle für die Beispielwebsite [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definieren und darauf zugreifen.

## Die LocalLibrary-Modelle entwerfen

Bevor Sie mit dem Programmieren der Modelle beginnen, sollten Sie sich einige Minuten Zeit nehmen, um zu überlegen, welche Daten gespeichert werden müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen (Titel, Zusammenfassung, Autor, Sprache, Kategorie und ISBN) und dass möglicherweise mehrere Exemplare verfügbar sind (jeweils mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Über einen Autor müssen wir möglicherweise mehr als nur seinen Namen speichern; außerdem könnten mehrere Autoren gleiche oder ähnliche Namen haben. Die Informationen sollen sich nach Buchtitel, Autor, Sprache und Kategorie sortieren lassen.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes „Objekt“ – also eine Gruppe zusammengehöriger Informationen – ein eigenes Modell vorzusehen. In diesem Fall sind Bücher, Buchexemplare und Autoren die naheliegenden Objekte.

Sie können auch Modelle verwenden, um Optionen für Auswahllisten darzustellen (beispielsweise für ein Dropdown-Menü), statt die Auswahlmöglichkeiten fest in die Website einzuprogrammieren. Das empfiehlt sich, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Naheliegende Kandidaten dafür sind hier das Buchgenre (etwa Science-Fiction oder französische Lyrik) und die Sprache (etwa Englisch, Französisch oder Japanisch).

Nachdem wir uns für die Modelle und Felder entschieden haben, müssen wir über ihre Beziehungen nachdenken. Django ermöglicht Eins-zu-eins- (`OneToOneField`), Eins-zu-viele- (`ForeignKey`) und Viele-zu-viele-Beziehungen (`ManyToManyField`).

Das folgende UML-Assoziationsdiagramm zeigt die Modelle, die wir in diesem Fall definieren werden (als Kästen).

![UML-Diagramm der LocalLibrary-Modelle mit korrigierter Multiplizität für Author innerhalb der Klasse Book](local_library_model_uml.svg)

Wir haben Modelle für Bücher (allgemeine Angaben zu einem Buch), Buchexemplare (Status bestimmter physischer Exemplare im System) und Autoren erstellt. Außerdem haben wir uns für ein Modell für Genres entschieden, damit Werte über die Administrationsoberfläche erstellt und ausgewählt werden können. Für `BookInstance:status` haben wir kein eigenes Modell vorgesehen: Die Werte (`LoanStatus`) sind fest im Code hinterlegt, da wir nicht davon ausgehen, dass sie sich ändern. In jedem Kasten sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und ihre Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen und ihre _Multiplizitäten_. Die Zahlen im Diagramm geben an, wie viele Objekte eines Modells mindestens und höchstens an einer Beziehung beteiligt sein können. Beispielsweise zeigt die Verbindungslinie zwischen den Kästen, dass Book und Genre miteinander verknüpft sind. Die Zahlen beim Genre-Modell zeigen, dass ein Buch mindestens ein Genre haben muss, aber beliebig viele haben kann. Die Zahlen am anderen Ende der Linie beim Book-Modell zeigen, dass einem Genre kein Buch oder beliebig viele Bücher zugeordnet sein können.

> [!NOTE]
> Der nächste Abschnitt bietet eine kurze Einführung in das Definieren und Verwenden von Modellen. Überlegen Sie beim Lesen, wie wir die einzelnen Modelle aus dem Diagramm erstellen werden.

## Einführung in Modelle

Dieser Abschnitt gibt einen kurzen Überblick darüber, wie ein Modell definiert wird, und stellt einige wichtige Felder und Feldargumente vor.

### Modelldefinition

Modelle werden normalerweise in der Datei **models.py** einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der folgende Codeausschnitt zeigt ein „typisches“ Modell namens `MyModelName`:

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

In den folgenden Abschnitten betrachten wir die einzelnen Bestandteile eines Modells genauer.

#### Felder

Ein Modell kann beliebig viele Felder beliebiger Typen haben. Jedes Feld entspricht einer Datenspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankeintrag (jede Zeile) enthält für jedes Feld einen Wert. Sehen wir uns folgendes Beispiel an:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Das Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField`. Das bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthält. Feldtypen werden mithilfe bestimmter Klassen festgelegt. Diese bestimmen, wie die Daten in der Datenbank gespeichert werden und welche Validierungskriterien gelten, wenn Werte aus einem HTML-Formular eingehen – also welche Werte gültig sind. Feldtypen können außerdem Argumente entgegennehmen, die genauer festlegen, wie ein Feld gespeichert oder verwendet wird. Hier übergeben wir unserem Feld zwei Argumente:

- `max_length=20` – Gibt an, dass ein Wert in diesem Feld höchstens 20 Zeichen lang sein darf.
- `help_text='Enter field documentation'` – Ein hilfreicher Text, der in einem Formular angezeigt werden kann, damit Benutzer verstehen, wofür das Feld verwendet wird.

Über den Feldnamen wird in Abfragen und Templates auf das Feld verwiesen.
Felder haben außerdem eine Beschriftung, die mit dem Argument `verbose_name` festgelegt wird (dessen Standardwert `None` ist).
Wenn `verbose_name` nicht gesetzt ist, wird die Beschriftung aus dem Feldnamen gebildet: Unterstriche werden durch Leerzeichen ersetzt und der erste Buchstabe wird großgeschrieben. Das Feld `my_field_name` hätte in Formularen beispielsweise standardmäßig die Beschriftung _My field name_.

Die Reihenfolge, in der Felder deklariert werden, beeinflusst ihre standardmäßige Reihenfolge bei der Darstellung eines Modells in einem Formular (beispielsweise auf der Administrationswebsite). Diese Reihenfolge kann jedoch überschrieben werden.

##### Häufig verwendete Feldargumente

Die folgenden Argumente können bei vielen beziehungsweise den meisten Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/6.1/ref/models/fields/#help-text): Stellt, wie oben beschrieben, einen Hilfetext für HTML-Formulare bereit (beispielsweise auf der Administrationswebsite).
- [verbose_name](https://docs.djangoproject.com/en/6.1/ref/models/fields/#verbose-name): Ein für Menschen lesbarer Name, der als Feldbeschriftung verwendet wird. Wenn er nicht angegeben wird, leitet Django einen Standardnamen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/6.1/ref/models/fields/#default): Der Standardwert des Feldes. Dies kann ein Wert oder ein aufrufbares Objekt sein. Im letzteren Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/6.1/ref/models/fields/#null): Bei `True` speichert Django leere Werte für geeignete Felder als `NULL` in der Datenbank (ein `CharField` speichert stattdessen eine leere Zeichenfolge). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/6.1/ref/models/fields/#blank): Bei `True` darf das Feld in Formularen leer bleiben. Der Standardwert ist `False`; dann verlangt die Formularvalidierung von Django eine Eingabe. Dies wird oft zusammen mit `null=True` verwendet, denn wenn leere Werte erlaubt sind, soll die Datenbank sie normalerweise auch entsprechend abbilden können.
- [choices](https://docs.djangoproject.com/en/6.1/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn sie angegeben wird, ist das zugehörige Standard-Formular-Widget ein Auswahlfeld mit diesen Optionen statt eines gewöhnlichen Textfeldes.
- [unique](https://docs.djangoproject.com/en/6.1/ref/models/fields/#unique):
  Bei `True` muss der Feldwert in der gesamten Datenbank eindeutig sein.
  Damit können Sie doppelte Werte in Feldern verhindern, deren Werte sich nicht wiederholen dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/6.1/ref/models/fields/#primary-key):
  Bei `True` wird das aktuelle Feld zum Primärschlüssel des Modells. Ein Primärschlüssel ist eine spezielle Datenbankspalte, mit der sich jeder Tabelleneintrag eindeutig identifizieren lässt.
  Wenn kein Feld als Primärschlüssel festgelegt wird, fügt Django automatisch ein entsprechendes Feld hinzu.
  Der Typ automatisch erstellter Primärschlüsselfelder kann für jede Anwendung über [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/6.1/ref/applications/#django.apps.AppConfig.default_auto_field) oder global über die Einstellung [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/6.1/ref/settings/#std-setting-DEFAULT_AUTO_FIELD) festgelegt werden.

  > [!NOTE]
  > Der Primärschlüsseltyp ist [BigAutoField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#bigautofield). Dies ist seit Django 6.0 der Standardwert der Einstellung `DEFAULT_AUTO_FIELD`.
  > Deshalb wird er in der Datei **/catalog/apps.py** der LocalLibrary nicht ausdrücklich gesetzt:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >     name = 'catalog'
  > ```

Es gibt viele weitere Optionen. Die [vollständige Liste der Feldoptionen finden Sie hier](https://docs.djangoproject.com/en/6.1/ref/models/fields/#field-options).

##### Häufig verwendete Feldtypen

Die folgende Liste beschreibt einige der gebräuchlichsten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#django.db.models.CharField) wird für kurze bis mittellange Zeichenfolgen mit festgelegter maximaler Länge verwendet. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#django.db.models.TextField) wird für lange Zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben; diese wird jedoch nur bei der Darstellung in Formularen verwendet und nicht auf Datenbankebene erzwungen.
- [IntegerField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#django.db.models.IntegerField) dient zum Speichern ganzzahliger Werte und zum Prüfen, ob in Formularen eingegebene Werte Ganzzahlen sind.
- [DateField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#datetimefield) dienen zum Speichern und Darstellen von Datums- beziehungsweise Datums- und Zeitangaben (als Python-Objekte vom Typ `datetime.date` beziehungsweise `datetime.datetime`). Für diese Felder können zusätzlich die sich gegenseitig ausschließenden Parameter `auto_now=True` (setzt das Feld bei jedem Speichern des Modells auf das aktuelle Datum), `auto_now_add` (setzt das Datum nur beim ersten Erstellen des Modells) und `default` (legt ein Standarddatum fest, das Benutzer überschreiben können) angegeben werden.
- [EmailField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#emailfield) dient zum Speichern und Validieren von E-Mail-Adressen.
- [FileField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#imagefield) dienen zum Hochladen von Dateien beziehungsweise Bildern. `ImageField` prüft zusätzlich, ob die hochgeladene Datei ein Bild ist. Beide verfügen über Parameter, mit denen festgelegt wird, wie und wo hochgeladene Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, dessen Wert automatisch erhöht wird. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie nicht ausdrücklich einen anderen festlegen.
- [ForeignKey](https://docs.djangoproject.com/en/6.1/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell festzulegen. Beispielsweise hat ein Auto einen Hersteller, ein Hersteller kann aber viele Autos produzieren. Die „Eins“-Seite der Beziehung ist das Modell, das den „Schlüssel“ enthält; Modelle mit einem darauf verweisenden „Fremdschlüssel“ stehen auf der „Viele“-Seite.
- [ManyToManyField](https://docs.djangoproject.com/en/6.1/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-viele-Beziehung festzulegen. Beispielsweise kann ein Buch mehreren Genres angehören und jedes Genre mehrere Bücher enthalten. In unserer Bibliotheksanwendung verwenden wir solche Felder ähnlich wie `ForeignKeys`; sie können aber auch komplexere Beziehungen zwischen Gruppen beschreiben. Das Argument `on_delete` legt fest, was geschieht, wenn ein zugehöriger Datensatz gelöscht wird (beispielsweise würde `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele weitere Feldtypen, darunter solche für unterschiedliche Zahlenarten (große und kleine Ganzzahlen sowie Fließkommazahlen), boolesche Werte, URLs, Slugs, eindeutige IDs und weitere zeitbezogene Angaben (Dauer, Uhrzeit usw.). Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/6.1/ref/models/fields/#field-types).

#### Metadaten

Sie können Metadaten auf Modellebene deklarieren, indem Sie `class Meta` definieren, wie hier gezeigt:

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine besonders nützliche Funktion dieser Metadaten ist die Steuerung der _Standardsortierung_ der Datensätze, die bei einer Abfrage des Modelltyps zurückgegeben werden. Dazu geben Sie dem Attribut `ordering` eine Liste von Feldnamen in der gewünschten Sortierreihenfolge, wie oben gezeigt. Wie sortiert wird, hängt vom Feldtyp ab: Zeichenfelder werden alphabetisch sortiert, Datumsfelder chronologisch. Wie oben gezeigt, können Sie einem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Wenn wir Bücher beispielsweise standardmäßig so sortieren:

```python
ordering = ['title', '-publish_date']
```

werden sie zunächst alphabetisch nach Titel von A bis Z und innerhalb jedes Titels nach Veröffentlichungsdatum vom neuesten zum ältesten sortiert.

Ein weiteres häufig verwendetes Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in der Einzahl und Mehrzahl:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können dazu verwendet werden, neue „Zugriffsberechtigungen“ für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch vergeben), eine Sortierung anhand eines anderen Feldes zu ermöglichen, [Constraints](https://docs.djangoproject.com/en/6.1/ref/models/constraints/) für mögliche gespeicherte Datenwerte festzulegen oder die Klasse als „abstrakt“ zu deklarieren. Eine abstrakte Klasse ist eine Basisklasse, für die keine Datensätze erstellt werden können und von der stattdessen andere Modelle abgeleitet werden.

Viele der übrigen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden. Sie sind vor allem dann nützlich, wenn Sie ein Modell einer bestehenden Datenbank zuordnen müssen.

Die vollständige Liste finden Sie unter [Optionen für Modellmetadaten](https://docs.djangoproject.com/en/6.1/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden enthalten.

**Sie sollten in jedem Modell mindestens die Python-Standardmethode `__str__()` definieren, die für jedes Objekt eine lesbare Zeichenfolge zurückgibt.** Diese Zeichenfolge wird verwendet, um einzelne Datensätze auf der Administrationswebsite darzustellen (und überall sonst, wo auf eine Modellinstanz verwiesen werden muss). Häufig gibt die Methode ein Titel- oder Namensfeld des Modells zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufig verwendete Methode in Django-Modellen ist `get_absolute_url()`. Sie gibt eine URL zurück, unter der ein einzelner Modelldatensatz auf der Website angezeigt werden kann. Wenn Sie diese Methode definieren, fügt Django den Bearbeitungsseiten des Modells auf der Administrationswebsite automatisch eine Schaltfläche „View on Site“ hinzu. Ein typisches Muster für `get_absolute_url()` ist unten dargestellt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Wenn Sie URLs wie `/my-application/my-model-name/2` verwenden möchten, um einzelne Datensätze Ihres Modells anzuzeigen (wobei „2“ die `id` eines bestimmten Datensatzes ist), müssen Sie eine URL-Zuordnung erstellen. Diese leitet die Anfrage und die ID an eine „Modelldetailansicht“ weiter, die den Datensatz anzeigt. Die oben verwendete Funktion `reverse()` kann die URL-Zuordnung (hier mit dem Namen _'model-detail-view'_) umkehren, um eine URL im richtigen Format zu erzeugen.
>
> Damit dies funktioniert, müssen Sie natürlich noch die URL-Zuordnung, die Ansicht und das Template erstellen.

Sie können außerdem beliebige weitere Methoden definieren und sie aus Ihrem Code oder Ihren Templates aufrufen, sofern sie keine Parameter entgegennehmen.

### Modelle verwalten

Nachdem Sie Ihre Modellklassen definiert haben, können Sie mit ihnen Datensätze erstellen, aktualisieren und löschen sowie Abfragen ausführen, um alle Datensätze oder bestimmte Teilmengen abzurufen. Wie das geht, zeigen wir später im Tutorial beim Definieren der Ansichten. Hier zunächst eine kurze Zusammenfassung.

#### Datensätze erstellen und ändern

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells erzeugen und anschließend `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, erhält der neue Datensatz automatisch einen Primärschlüssel mit dem Feldnamen `id`. Nach dem Speichern des obigen Datensatzes könnten Sie dieses Feld abfragen; es hätte den Wert 1.

Mit der Punktschreibweise können Sie auf die Felder dieses neuen Datensatzes zugreifen und ihre Werte ändern. Um geänderte Werte in der Datenbank zu speichern, müssen Sie `save()` aufrufen.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Nach Datensätzen suchen

Über das von der Basisklasse bereitgestellte Attribut `objects` des Modells können Sie nach Datensätzen suchen, die bestimmte Kriterien erfüllen.

> [!NOTE]
> Die Suche anhand „abstrakter“ Modell- und Feldnamen zu erklären, kann etwas verwirrend sein. Im Folgenden verwenden wir daher ein Modell `Book` mit den Feldern `title` und `genre`. Das Genre ist ebenfalls ein Modell und hat ein einzelnes Feld `name`.

Mit `objects.all()` können wir alle Datensätze eines Modells als `QuerySet` abrufen. Ein `QuerySet` ist ein iterierbares Objekt: Es enthält mehrere Objekte, über die wir iterieren können.

```python
all_books = Book.objects.all()
```

Mit der Django-Methode `filter()` können wir das zurückgegebene `QuerySet` anhand bestimmter Kriterien für ein **Textfeld** oder **numerisches Feld** filtern. Um beispielsweise nach Büchern zu suchen, deren Titel „wild“ enthält, und diese anschließend zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Welche Felder verglichen werden und welche Art von Vergleich stattfindet, wird im Namen des Filterparameters im Format `field_name__match_type` festgelegt (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Im obigen Beispiel filtern wir `title` mit einem Vergleich, der zwischen Groß- und Kleinschreibung unterscheidet. Es gibt viele weitere Vergleichsarten: `icontains` (ohne Unterscheidung zwischen Groß- und Kleinschreibung), `iexact` (exakter Vergleich ohne Unterscheidung zwischen Groß- und Kleinschreibung), `exact` (exakter Vergleich mit Unterscheidung zwischen Groß- und Kleinschreibung) sowie `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/6.1/ref/models/querysets/#field-lookups).

In manchen Fällen müssen Sie nach einem Feld filtern, das eine Eins-zu-viele-Beziehung zu einem anderen Modell definiert (beispielsweise ein `ForeignKey`). Dann können Sie mit weiteren doppelten Unterstrichen auf Felder des verknüpften Modells zugreifen.
Um beispielsweise Bücher mit einem bestimmten Muster im Genrenamen zu finden, greifen Sie über das Feld `genre` auf `name` zu, wie hier gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Mit doppelten Unterstrichen (`__`) können Sie beliebig viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) durchlaufen.
> Ein `Book` mit verschiedenen Typen, die über eine zusätzliche „Cover“-Beziehung definiert sind, könnte beispielsweise den Parameternamen `type__cover__name__exact='hard'` verwenden.

Mit Abfragen lässt sich noch viel mehr machen: Sie können von verknüpften Modellen aus rückwärts suchen, Filter verketten, eine kleinere Auswahl an Werten zurückgeben und vieles mehr. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/6.1/topics/db/queries/) (Django-Dokumentation).

## Die LocalLibrary-Modelle definieren

In diesem Abschnitt beginnen wir damit, die Modelle für die Bibliothek zu definieren. Öffnen Sie `models.py` (in /catalog/). Der vorbereitete Code am Anfang der Datei importiert das Modul _models_. Es enthält die Modellbasisklasse `models.Model`, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten Code des Modells `Genre` und fügen Sie ihn am Ende Ihrer Datei `models.py` ein. Dieses Modell speichert Informationen über die Buchkategorie – beispielsweise, ob es sich um Belletristik oder ein Sachbuch, einen Liebesroman oder ein Werk zur Militärgeschichte handelt.
Wie oben erwähnt, haben wir das Genre als Modell und nicht als Freitext oder Auswahlliste umgesetzt. So können die möglichen Werte über die Datenbank verwaltet werden, statt fest im Code hinterlegt zu sein.

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
        ordering = ['name']
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case-insensitive match)"
            ),
        ]
```

Das Modell hat ein einzelnes Feld vom Typ `CharField` (`name`), das das Genre beschreibt. Es ist auf 200 Zeichen begrenzt und hat einen `help_text`.
Wir haben das Feld mit `unique=True` als eindeutig festgelegt, da es für jedes Genre nur einen Datensatz geben soll.

Nach dem Feld deklarieren wir die Methode `__str__()`, die den Namen des Genres zurückgibt, das ein bestimmter Datensatz definiert. Da kein ausführlicher Name festgelegt wurde, lautet die Feldbeschriftung in Formularen `Name`.
Anschließend deklarieren wir die Methode `get_absolute_url()`. Sie gibt eine URL zurück, über die der Detaildatensatz dieses Modells aufgerufen werden kann. Damit das funktioniert, müssen wir eine URL-Zuordnung mit dem Namen `genre-detail` sowie eine zugehörige Ansicht und ein Template definieren.

Durch `unique=True` für das obige Feld wird verhindert, dass Genres mit _exakt_ demselben Namen erstellt werden, nicht aber Varianten wie „fantasy“, „Fantasy“ oder sogar „FaNtAsY“.
Der letzte Teil der Modelldefinition verwendet die Option [`constraints`](https://docs.djangoproject.com/en/6.1/ref/models/options/#constraints) in den [Metadaten](#metadaten) des Modells. Damit wird festgelegt, dass der Wert im Feld `name` auch in Kleinschreibung in der Datenbank eindeutig sein muss; andernfalls wird die Zeichenfolge `violation_error_message` angezeigt.
Außerdem legen wir mit `ordering` fest, dass Genres standardmäßig alphabetisch nach Namen aufgelistet werden.
Hier müssen wir nichts Weiteres tun. Sie können jedoch auch mehrere Constraints für ein oder mehrere Felder definieren.
Weitere Informationen finden Sie in der [Referenz zu Constraints](https://docs.djangoproject.com/en/6.1/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/6.1/ref/models/constraints/#uniqueconstraint) und [`Lower()`](https://docs.djangoproject.com/en/6.1/ref/models/database-functions/#lower).

### Book-Modell

Kopieren Sie das folgende Modell `Book` und fügen Sie es ebenfalls am Ende Ihrer Datei ein. Das Modell `Book` enthält allgemeine Informationen über ein verfügbares Buch, aber nicht über ein bestimmtes physisches „Exemplar“, das ausgeliehen werden kann.

Das Modell verwendet `CharField` für den Buchtitel (`title`) und die ISBN (`isbn`).
Beachten Sie bei `isbn`, dass der erste unbenannte Parameter die Beschriftung ausdrücklich auf „ISBN“ setzt (andernfalls wäre der Standardwert „Isbn“). Außerdem setzen wir den Parameter `unique` auf `True`, damit jedes Buch eine eindeutige ISBN hat. Dieser Parameter sorgt dafür, dass der Feldwert innerhalb der Tabelle eindeutig ist.
Anders als `isbn` (und der Genrename) ist `title` nicht als eindeutig festgelegt, da verschiedene Bücher denselben Titel haben können.
Für die Zusammenfassung (`summary`) verwendet das Modell `TextField`, da dieser Text recht lang sein kann.

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

    class Meta:
        ordering = ['title', 'author']

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

Das Genre ist ein `ManyToManyField`: Ein Buch kann mehreren Genres angehören und ein Genre kann viele Bücher umfassen. Der Autor ist als `ForeignKey` deklariert. Jedes Buch hat daher nur einen Autor, ein Autor kann aber viele Bücher geschrieben haben (in der Praxis kann ein Buch mehrere Autoren haben, in dieser Implementierung jedoch nicht!).

`class Meta` legt fest, dass Bücher standardmäßig zuerst nach Titel und dann nach Autor sortiert werden.
Bei der Sortierung nach einem `ForeignKey`-Feld wie `author` wird die Standardsortierung des verknüpften Modells verwendet. Diese legen wir beim Definieren des [Author-Modells](#author-modell) auf Nachname und dann Vorname fest.

Bei beiden Feldtypen wird die verknüpfte Modellklasse als erster unbenannter Parameter angegeben: entweder direkt als Modellklasse oder als Zeichenfolge mit dem Namen des verknüpften Modells. Wenn die zugehörige Klasse zum Zeitpunkt des Verweises in dieser Datei noch nicht definiert wurde, müssen Sie den Modellnamen als Zeichenfolge angeben! Weitere wichtige Parameter des Feldes `author` sind `null=True`, wodurch die Datenbank `Null` speichern kann, wenn kein Autor ausgewählt wurde, und `on_delete=models.RESTRICT`, wodurch verhindert wird, dass der einem Buch zugeordnete Autor gelöscht wird, solange ein Buch auf ihn verweist.

> [!WARNING]
> Standardmäßig gilt `on_delete=models.CASCADE`. Wenn der Autor gelöscht würde, würde dadurch auch dieses Buch gelöscht! Wir verwenden hier `RESTRICT`. Alternativ könnten wir `PROTECT` verwenden, um das Löschen des Autors zu verhindern, solange ein Buch auf ihn verweist, oder `SET_NULL`, um den Autor des Buchs beim Löschen des Datensatzes auf `Null` zu setzen.

Das Modell definiert außerdem `__str__()` und verwendet dabei das Feld `title` des Buchs, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, über die ein Detaildatensatz dieses Modells aufgerufen werden kann. Dafür müssen wir eine URL-Zuordnung mit dem Namen `book-detail` sowie eine zugehörige Ansicht und ein Template definieren.

### BookInstance-Modell

Kopieren Sie als Nächstes das unten gezeigte Modell `BookInstance` unter die anderen Modelle. `BookInstance` steht für ein bestimmtes Exemplar eines Buchs, das ausgeliehen werden kann. Es enthält Informationen darüber, ob das Exemplar verfügbar ist oder wann es voraussichtlich zurückgegeben wird, Angaben zur Ausgabe beziehungsweise Version sowie eine eindeutige ID für das Buch in der Bibliothek.

Einige Felder und Methoden werden Ihnen inzwischen vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` anzugeben. Von jedem Buch kann es viele Exemplare geben, aber jedes Exemplar gehört nur zu einem `Book`. Der Schlüssel verwendet `on_delete=models.RESTRICT`, damit das `Book` nicht gelöscht werden kann, solange eine `BookInstance` darauf verweist.
- `CharField`, um die Ausgabe des Buchs anzugeben.

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):

    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    class LoanStatus(models.TextChoices):
        MAINTENANCE = 'm', 'Maintenance'
        ON_LOAN = 'o', 'On loan'
        AVAILABLE = 'a', 'Available'
        RESERVED = 'r', 'Reserved'

    status = models.CharField(
        max_length=1,
        choices=LoanStatus,
        blank=True,
        default=LoanStatus.MAINTENANCE,
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

Zusätzlich deklarieren wir einige neue Feldtypen:

- `UUIDField` wird für das Feld `id` verwendet und legt es als `primary_key` dieses Modells fest.
  Dieser Feldtyp weist jeder Instanz einen global eindeutigen Wert zu (also jedem Exemplar in der Bibliothek).
- `DateField` wird für das Datum `due_back` verwendet, an dem das Buch nach einer Ausleihe oder Wartung voraussichtlich wieder verfügbar ist. Dieser Wert darf `blank` oder `null` sein (was erforderlich ist, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze bei der Rückgabe einer Abfrage zu sortieren.
- `status` ist ein `CharField`, das eine Auswahlliste definiert.
  Die Auswahlmöglichkeiten definieren wir mit einer Klasse vom Typ [`TextChoices`](https://docs.djangoproject.com/en/6.1/ref/models/fields/#enumeration-types) (`LoanStatus`). Dabei verknüpft jedes benannte Mitglied (z. B. `MAINTENANCE`) den tatsächlich gespeicherten Wert (`'m'`) mit der für Benutzer lesbaren Beschriftung (`'Maintenance'`).
  Dadurch kann der übrige Code über den Namen `BookInstance.LoanStatus.MAINTENANCE` statt über die rohe Zeichenfolge `'m'` darauf zugreifen. Das macht den Code besser lesbar und verringert das Fehlerrisiko.
  Außerdem haben wir den Standardstatus auf `LoanStatus.MAINTENANCE` gesetzt, da Bücher zunächst als nicht verfügbar angelegt werden, bevor sie ins Regal gestellt werden.

Die Methode `__str__()` stellt das Objekt `BookInstance` als Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book` dar.

> [!NOTE]
> Eine kurze Anmerkung zu Python:
>
> - Ab Python 3.6 können Sie die Syntax zur Zeichenfolgeninterpolation (auch f-Strings genannt) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir die Syntax [formatierter Zeichenfolgen](https://peps.python.org/pep-3101/) verwendet. Auch damit lassen sich Zeichenfolgen in Python gültig formatieren, beispielsweise mit `'{0} ({1})'.format(self.id,self.book.title)`.

### Author-Modell

Kopieren Sie das unten gezeigte Modell `Author` unter den vorhandenen Code in **models.py**.

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

Alle Felder und Methoden sollten Ihnen inzwischen bekannt sein. Das Modell definiert einen Autor über Vorname, Nachname sowie Geburts- und Sterbedatum (beide optional). Es legt fest, dass `__str__()` den Namen standardmäßig in der Reihenfolge _Nachname_, _Vorname_ zurückgibt. Die Methode `get_absolute_url()` kehrt die URL-Zuordnung `author-detail` um, um die URL für die Anzeige eines einzelnen Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Modelle sind jetzt erstellt. Führen Sie die Datenbankmigrationen erneut aus, um die Modelle Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell – Herausforderung

Stellen Sie sich vor, ein Förderer aus der Region spendet mehrere neue Bücher, die in einer anderen Sprache verfasst sind (beispielsweise Farsi). Die Aufgabe besteht darin, zu überlegen, wie sich diese Bücher auf unserer Bibliothekswebsite am besten darstellen lassen, und anschließend die Modelle entsprechend zu erweitern.

Einige Fragen, die Sie dabei berücksichtigen sollten:

- Sollte die „Sprache“ einem `Book`, einer `BookInstance` oder einem anderen Objekt zugeordnet sein?
- Sollten die verschiedenen Sprachen durch ein Modell, ein Freitextfeld oder eine fest im Code hinterlegte Auswahlliste dargestellt werden?

Fügen Sie das Feld hinzu, nachdem Sie sich entschieden haben. Wie wir es gelöst haben, können Sie [im Code unseres Projekts auf GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) nachsehen.

Denken Sie daran, nach einer Änderung am Modell die Datenbankmigrationen erneut auszuführen, damit die Änderungen übernommen werden.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dieses Wissen genutzt, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An dieser Stelle unterbrechen wir kurz die Erstellung der Website und sehen uns die _Django-Administrationswebsite_ an. Dort können wir Daten zur Bibliothek hinzufügen, die wir anschließend mithilfe unserer noch zu erstellenden Ansichten und Templates anzeigen können.

## Siehe auch

- [Ihre erste Django-Anwendung schreiben, Teil 2](https://docs.djangoproject.com/en/6.1/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/6.1/topics/db/queries/) (Django-Dokumentation)
- [QuerySet-API-Referenz](https://docs.djangoproject.com/en/6.1/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
