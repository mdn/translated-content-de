---
title: "Django-Tutorial Teil 3: Verwenden von Modellen"
slug: Learn/Server-side/Django/Models
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Dieser Artikel zeigt, wie Modelle für die LocalLibrary-Website definiert werden. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der Hauptfeldtypen. Außerdem wird kurz erläutert, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Erstellen einer Grundstruktur für die Website</a>.
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

## Überblick

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten aus Listen, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine aus mehreren auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr sprechen — Sie schreiben einfach die Modellstruktur und anderen Code, und Django erledigt die ganze mühsame Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie die Modelle für das [LocalLibrary-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)-Beispiel definiert und darauf zugegriffen wird.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen zu Büchern (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) speichern müssen und dass mehrere Exemplare verfügbar sein könnten (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Wir müssen möglicherweise mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit selben oder ähnlichen Namen geben. Wir möchten die Informationen basierend auf Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahloptionen (z.B. wie eine Dropdown-Liste von Auswahlmöglichkeiten) darzustellen, anstatt die Auswahl fest in die Website zu codieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle wären in diesem Fall das Buchgenre (z.B. Science-Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

In Anbetracht dessen zeigt das UML-Assoziationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Boxen).

![LocalLibrary Model UML mit fester Autor-Multiplizität innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (Status spezifischer physischer Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest codiert, weil wir nicht erwarten, dass sich diese ändern. Innerhalb jeder der Boxen können Sie den Modellnamen, die Feldnamen und -typen, sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, das in der Beziehung vorhanden sein darf. Zum Beispiel zeigt die Verbindungslinie zwischen den Boxen, dass Buch und ein Genre in Beziehung stehen. Die Zahlen, die nahe am Genremodell stehen, zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie, neben dem Buchmodell, zeigen, dass ein Genre bei null oder vielen Büchern beteiligt sein kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung in die Definition und Verwendung von Modellen. Während Sie ihn lesen, sollten Sie darüber nachdenken, wie wir jedes der Modelle im obigen Diagramm erstellen werden.

## Modell-Grundlagen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und stellt einige der wichtigeren Felder und Feldargumente vor.

### Modell-Definition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie sind als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Das folgende Code-Fragment zeigt ein "typisches" Modell, das `MyModelName` genannt wird:

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

In den folgenden Abschnitten werden wir die einzelnen Funktionen innerhalb des Modells im Detail untersuchen:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern haben, in jedem Typ — jedes Feld stellt eine Spalte von Daten dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankdatensatz (Zeile) wird aus einem Wert jedes Feldes bestehen. Betrachten wir das unten gezeigte Beispiel:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — was bedeutet, dass dieses Feld Zeichenfolgen alphanumerischer Zeichen enthalten wird. Die Feldtypen werden mithilfe spezieller Klassen zugewiesen, die den Datensatztyp bestimmen, der in der Datenbank verwendet wird, um die Daten zu speichern, sowie Validierungskriterien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente annehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall haben wir unserem Feld zwei Argumente gegeben:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfetext, der möglicherweise in einem Formular angezeigt wird, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um sich in Abfragen und Vorlagen darauf zu beziehen.
Felder haben auch eine Beschriftung, die über das Argument `verbose_name` spezifiziert wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht gesetzt ist, wird die Beschriftung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt werden und der erste Buchstabe groß geschrieben wird (zum Beispiel würde das Feld `my_field_name` eine Standardbeschriftung von _My field name_ haben, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst deren Standardreihenfolge, wenn ein Modell in einem Formular gerendert wird (z.B. auf der Admin-Seite), obwohl dies überschrieben werden kann.

##### Allgemeine Feldargumente

Die folgenden allgemeinen Argumente können verwendet werden, wenn viele/fast alle der verschiedenen Feldtypen deklariert werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Gibt ein Textlabel für HTML-Formulare an (z.B. auf der Admin-Seite), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein lesbarer Name für das Feld, das in Feldbeschriftungen verwendet wird. Wenn nicht angegeben, wird Django den Standard-`verbose_name` aus dem Feldnamen ableiten.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte für Felder in der Datenbank als `NULL`, wo dies angemessen ist (ein `CharField` wird stattdessen eine leere Zeichenfolge speichern). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie dazu zwingt, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, da Sie, wenn Sie leere Werte zulassen, auch möchten, dass die Datenbank in der Lage ist, diese entsprechend darzustellen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, wird das standardmäßige entsprechende Formular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten statt des standardmäßigen Textfeldes sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um Duplikationen von Feldern zu verhindern, die nicht die gleichen Werte haben können.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, setzt das aktuelle Feld als den Primärschlüssel für das Modell (Ein Primärschlüssel ist eine spezielle Datenbanksäule, die verwendet wird, um alle verschiedenen Datensatzes einer Tabelle eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel spezifiziert wird, wird Django automatisch ein Feld zu diesem Zweck hinzufügen.
  Der Typ von automatisch erstellten Primärschlüsselfeldern kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der Einstellung [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) festgelegt werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der Datei **catalog/apps.py** der lokalen Bibliothek sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — Sie können die [vollständige Liste der Feldoptionen hier sehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Allgemeine Feldtypen

Die folgende Liste beschreibt einige der am häufigsten verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurz- bis mittellange feste Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für lange Zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber diese wird nur verwendet, wenn das Feld in Formularen angezeigt wird (sie wird auf Datenbankebene nicht erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zur Speicherung von Ganzzahlen (ganzen Zahlen) und zur Validierung eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zur Speicherung/Darstellung von Datums- und Uhrzeitinformationen verwendet (als Python `datetime.date` bzw. `datetime.datetime` Objekte). Diese Felder können zusätzlich die (wechselseitig ausschließenden) Parameter `auto_now=True` (um das Feld auf das aktuelle Datum jedes Mal zu setzen, wenn das Modell gespeichert wird), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um festzulegen, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der sich automatisch erhöht. Ein Primärschlüssel dieses Typs wird automatisch zu Ihrem Modell hinzugefügt, wenn Sie keinen explizit festlegen.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine eins-zu-viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos bauen). Die "eine"-Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modell, die einen "Fremdschlüssel" enthalten, der sich auf diesen "Schlüssel" bezieht, befinden sich auf der "vielen"-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele-Beziehung zu spezifizieren (z.B. ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um festzulegen, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. ein Wert von `models.SET_NULL` würde den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Felder für verschiedene Typen von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Fließkommazahlen), Booleans, URLs, Slugs, eindeutigen IDs und anderen "zeitbezogenen" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier sehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellbezogene Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` erklären, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist die Steuerung der _Standardreihenfolge_ der zurückgegebenen Datensätze, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die entsprechende Reihenfolge in einer Liste von Feldnamen für das `ordering`-Attribut angeben, wie oben gezeigt. Die Reihenfolge hängt vom Felddatentyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder in chronologischer Reihenfolge sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge zu ändern.

Ein Beispiel: Wenn wir Bücher standardmäßig so sortieren:

```python
ordering = ['title', '-pubdate']
```

werden die Bücher alphabetisch nach Titel von A-Z sortiert und dann nach Erscheinungsdatum innerhalb jedes Titels von neu nach alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in singularer und pluraler Form:

```python
verbose_name = 'BetterName'
```

Metadatenklassen können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), Bestellungen basierend auf einem anderen Feld zu erlauben, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) zu möglichen Werten von gespeicherten Daten zu definieren oder zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert sind (diese sind wirklich nur nützlich, wenn Sie ein Modell auf eine vorhandene Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Modell-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Mindestens sollten Sie in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um für jedes Objekt eine menschenlesbare Zeichenfolge zurückzugeben.** Diese Zeichenfolge wird verwendet, um einzelne Datensätze auf der Verwaltungsseite (und überall dort, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Häufig wird dies ein Titel oder ein Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufige Methode in Django-Modellen ist `get_absolute_url()`, die eine URL zur Anzeige einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch einen "Auf Seite anzeigen"-Button zu den Modell-Datensatzbearbeitungsbildschirmen auf der Verwaltungsseite hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/myapplication/mymodelname/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Model-Detailansicht" zu übergeben (die die Arbeit zum Anzeigen des Datensatzes übernimmt). Die Funktion `reverse()` oben ist in der Lage, Ihren URL-Mapper (im obigen Fall mit dem Namen _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie noch den URL-Mapping, die Ansicht und das Template schreiben, damit dies funktioniert!

Sie können auch alle anderen Methoden definieren, die Sie möchten, und sie von Ihrem Code oder Vorlagen aufrufen (vorausgesetzt, dass sie keine Parameter akzeptieren).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wie das geht, zeigen wir Ihnen im Tutorial, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, erhält der neue Datensatz automatisch eines, mit dem Feldnamen `id`. Nach dem Speichern des obigen Datensatzes könnten Sie dieses Feld abfragen, und es hätte einen Wert von 1.

Sie können die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells (bereitgestellt von der Basisklasse) verwenden.

> [!NOTE]
> Die Erklärung, wie nach Datensätzen mit "abstrakten" Modell- und Feldnamen gesucht werden kann, kann etwas verwirrend sein. In der folgenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title` und `genre` Feldern, wobei Genre auch ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` mit `objects.all()` abrufen. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Reihe von Objekten enthält, durch die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **Zahlen**feld gegen bestimmte Kriterien abgeglichen wird. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten und diese dann zu zählen, könnten wir Folgendes tun.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die abgeglichen werden sollen, und der Typ des Abgleichs werden im Filternamen des Parameters definiert, wobei das Format: `field_name__match_type` verwendet wird (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir den `title` mit einem groß-/klein-schreibungsempfindlichen Abgleich. Es gibt viele andere Typen von Matches, die Sie tun können: `icontains` (groß-/klein-schreibungsunabhängig), `iexact` (groß-/klein-schreibungsunabhängiger exakter Abgleich), `exact` (groß-/klein-schreibungsempfindlicher exakter Abgleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf ein Feld filtern, das eine eins-zu-viele-Beziehung zu einem anderen Modell definiert (z.B. einen `ForeignKey`). In diesem Fall können Sie mit zusätzlichen Doppelunterstrichen auf Felder innerhalb des verwandten Modells "zugreifen".
Wenn Sie beispielsweise nach Büchern mit einem bestimmten Genremuster filtern möchten, müssen Sie auf den `name` durch das `genre`-Feld zugreifen, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um durch beliebig viele Beziehungsebenen (`ForeignKey`/`ManyToManyField`) zu navigieren.
> Wenn ein `Book` unterschiedliche Typen hätte, die mithilfe einer weiteren "cover"-Beziehung definiert werden, könnte dies einen Parametername haben: `type__cover__name__exact='hard'.`

Es gibt noch viel mehr, was Sie mit Abfragen tun können, einschließlich Rückwärtssuchen von verwandten Modellen, Verkettung von Filtern, Rückgabe eines kleineren Satzes von Werten usw. Weitere Informationen finden Sie unter [Making queries](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (im Verzeichnis /django-locallibrary-tutorial/catalog/). Die Boilerplate am Anfang der Seite importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn unten in Ihre `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — zum Beispiel, ob es sich um Belletristik oder Sachbuch, Liebesroman oder Militärgeschichte usw. handelt.
Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt es als Freitext oder Auswahlmenü zu verwenden, damit die möglichen Werte über die Datenbank verwaltet und nicht fest codiert werden.

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

Das Modell hat ein einzelnes `CharField` namens `name`, das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen beschränkt und hat einen `help_text`).
Wir haben dieses Feld als eindeutig markiert (`unique=True`), da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert wird. Es wurde kein ausführlicher Name (`verbose_name`) definiert, sodass das Feldlabel `Name` sein wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuweisung definieren, die den Namen `genre-detail` hat, sowie eine zugehörige Ansicht und eine Vorlage).

Das Setzen von `unique=True` im obigen Feld verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, aber nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option in den [Metadaten](#metadaten) des Modells, um festzulegen, dass die Kleinschreibweise des Wertes im `name`-Feld in der Datenbank eindeutig sein muss und die `violation_error_message`-Zeichenfolge angezeigt wird, wenn dies nicht der Fall ist.
Hier müssen wir nichts anderes tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Weitere Informationen finden Sie im [Constraints reference](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buchmodell

Kopieren Sie das `Book`-Modell unten und fügen Sie es wieder unten in Ihre Datei ein. Das `Book`-Modell stellt alle Informationen über ein verfügbares Buch im Allgemeinen dar, aber nicht über ein bestimmtes physisches "Exemplar" oder "Exemplar" zur Ausleihe.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen.
Bei `isbn` beachten Sie, wie der erste unbenannte Parameter das Label explizit als "ISBN" festlegt (anderenfalls würde es standardmäßig "Isbn" lauten). Wir setzen auch den Parameter `unique` auf `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der einzigartige Parameter macht den Feldwert in einer Tabelle global eindeutig).
Im Gegensatz zu `isbn` (und dem Genrename) ist der `title` nicht einzigartig, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, da dieser Text ziemlich lange sein kann.

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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor haben wird, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die verwandte Modellklasse als erster unbenannter Parameter entweder als Modellklasse oder als Zeichenfolge mit dem Namen des verwandten Modells deklariert. Sie müssen den Namen des Modells als Zeichenfolge verwenden, wenn die zugeordnete Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, das der Datenbank erlaubt, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, das verhindert, dass der mit dem Buch assoziierte Autor gelöscht wird, falls er von irgendeinem Buch referenziert wird.

> [!WARNING]
> Standardmäßig ist `on_delete=models.CASCADE` eingestellt, was bedeutet, dass, wenn der Autor gelöscht würde, dieses Buch auch gelöscht wird! Wir verwenden hier `RESTRICT`, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, solange ein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, wobei das `title`-Feld des Buches verwendet wird, um einen `Book`-Datensatz darzustellen. Die endgültige Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (wir werden eine URL-Zuweisung definieren müssen, die den Namen `book-detail` hat, sowie eine zugehörige Ansicht und eine Vorlage).

### BuchExemplar-Modell

Kopieren Sie als Nächstes das unten gezeigte `BookInstance`-Modell unter die anderen Modelle. Das `BookInstance` repräsentiert ein spezifisches Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist oder an welchem Datum es zurück erwartet wird, sowie "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sind jetzt bekannt. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Exemplare haben, aber ein Exemplar kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
- `CharField`, um den Imprint (spezifische Veröffentlichtung) des Buches darzustellen.

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

Wir deklarieren zusätzlich einige neue Arten von Feldern:

- `UUIDField` wird für das `id`-Feld verwendet, um es als den `primary_key` für dieses Modell zu setzen.
  Diese Art von Feld weist für jede Instanz einen weltweit eindeutigen Wert zu (einen für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das `due_back` Datum verwendet (an dem das Buch voraussichtlich wieder verfügbar ist, nachdem es ausgeliehen oder in Wartung ist). Dieser Wert kann `blank` oder `null` sein (nötig, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze in einer Abfrage zu sortieren.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält und es an das Choices-Argument übergibt. Der Wert in einem Schlüssel-/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) eingestellt, da Bücher anfangs nicht verfügbar erstellt werden, bevor sie in den Regalen sind.

Die Methode `__str__()` stellt das `BookInstance`-Objekt unter Verwendung einer Kombination aus seiner eindeutigen ID und dem zugeordneten `Book`-Titel dar.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die Zeichenfolgen-Interpolationssyntax verwenden (auch bekannt als f-strings): `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte Zeichenfolge](https://peps.python.org/pep-3101/) Verwendung, was ebenfalls eine gültige Möglichkeit ist, Zeichenfolgen in Python zu formatieren (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autor-Modell

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

Alle Felder/Methoden sollten jetzt bekannt sein. Das Modell definiert einen Autor als jemand mit einem Vornamen, Nachnamen und Geburts- und Todesdaten (beide optional). Es gibt an, dass standardmäßig `__str__()` den Namen in bzw. _Nachname_, _Vorname_ Ordnung zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail` URL-Zuweisung um, um die URL für die Anzeige eines einzelnen Autors zu erhalten.

## Die Datenbankmigrationen erneut ausführen

Alle Ihre Modelle sind jetzt erstellt. Führen Sie nun erneut Ihre Datenbankmigrationen aus, um sie zu Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache (sagen wir, Farsi) geschrieben wurden. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliotheks-Website dargestellt werden sollten, und sie dann zu den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verknüpft werden?
- Sollten die verschiedenen Sprachen mit einem Modell, einem Freitextfeld oder einer fest codierten Auswahlmannschaft dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können auf GitHub sehen, wofür wir uns entschieden haben, [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

Vergessen Sie nicht, dass Sie nach einer Änderung an Ihrem Modell erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen dann genutzt, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz von der Erstellung der Website abweichen und uns die _Django-Verwaltungsseite_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen stellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
