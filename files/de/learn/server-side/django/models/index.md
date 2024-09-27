---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
slug: Learn/Server-side/Django/Models
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Dieser Artikel zeigt, wie man Modelle für die LocalLibrary-Website definiert. Es wird erklärt, was ein Modell ist, wie es deklariert wird und einige der Hauptfeldtypen. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellung einer Skelett-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen und die Felder dabei angemessen auszuwählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*Typen* und möglicherweise auch deren maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen wählen. Sobald Sie sich für eine Datenbank entschieden haben, müssen Sie nicht mehr direkt mit ihr kommunizieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die gesamte mühsame Arbeit der Kommunikation mit der Datenbank.

Dieses Tutorial zeigt, wie Sie die Modelle für das [LocalLibrary Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Beispiel definieren und darauf zugreifen können.

## Entwurf der LocalLibrary-Modelle

Bevor Sie mit dem Codieren der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, geschriebene Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit global eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit den gleichen oder ähnlichen Namen geben. Wir möchten Informationen basierend auf dem Buchtitel, dem Autor, der geschriebenen Sprache und der Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes „Objekt“ (eine Gruppe verwandter Informationen) zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Es könnte auch sinnvoll sein, Modelle zu verwenden, um Auswahlmöglichkeiten (z. B. wie eine Dropdown-Liste von Optionen) darzustellen, anstatt die Optionen direkt in die Website zu kodieren – dies wird empfohlen, wenn nicht alle Optionen von Anfang an bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall umfassen das Buchgenre (z. B. Science-Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit diesen Gedanken im Hinterkopf zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Kästchen).

![LocalLibrary Modell UML mit korrigierter Autor-Multiplizität innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), das Buchexemplar (den Status spezifischer physischer Kopien des Buches, die im System verfügbar sind), und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) hart kodiert, weil wir nicht erwarten, dass sich diese ändern. Innerhalb jedes der Kästchen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplizität_. Die Multiplizität sind die Zahlen im Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, die in der Beziehung vorhanden sein können. Beispielsweise zeigt die Verbindungslinie zwischen den Kästchen, dass Buch und Genre verbunden sind. Die Zahlen in der Nähe des Genremodells zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele, wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung darüber, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Einführung

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Das unten gezeigte Codefragment zeigt ein "typisches" Modell, das `MyModelName` heißt:

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

In den folgenden Abschnitten werden wir die einzelnen Merkmale innerhalb des Modells im Detail erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben – jedes stellt eine Datenspalte dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankeintrag (Zeile) wird aus einem Wert jedes Feldes bestehen. Betrachten wir das unten gezeigte Beispiel:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name`, vom Typ `models.CharField` – was bedeutet, dass dieses Feld Zeichenketten mit alphanumerischen Zeichen enthalten wird. Die Feldtypen werden über spezifische Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zum Speichern der Daten in der Datenbank verwendet wird, sowie die Validierungskriterien, die beim Empfangen von Werten aus einem HTML-Formular verwendet werden (d. h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente enthalten, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — hilfreicher Text, der in einem Formular angezeigt werden kann, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um darauf in Abfragen und Vorlagen zu verweisen.
Felder haben auch ein Etikett, das mit dem `verbose_name` Argument angegeben wird (der Standardwert ist `None`).
Wenn `verbose_name` nicht gesetzt ist, wird das Etikett aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel hätte das Feld `my_field_name` in Formularen ein Standardetikett von _My field name_).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf deren Standardreihenfolge aus, wenn ein Modell in einem Formular gerendert wird (z. B. im Admin-Bereich), obwohl dies überschrieben werden kann.

##### Gemeinsame Feldargumente

Die folgenden allgemeinen Argumente können beim Deklarieren vieler/der meisten der verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet ein Textlabel für HTML-Formulare (z. B. im Admin-Bereich), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein lesbarer Name für das im Feldbeschriftungen verwendete Feld. Wenn nicht angegeben, leitet Django den Standard-verbose-name aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies zutrifft (ein `CharField` speichert stattdessen einen leeren String). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer sein. Der Standardwert ist `False`, was bedeutet, dass die Formularvalidierung von Django Sie dazu zwingt, einen Wert einzugeben. Dies wird häufig mit `null=True` verwendet, da es oft wünschenswert ist, dass die Datenbank leere Werte angemessen darstellen kann, wenn Sie sie zulassen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, ist das entsprechende Standardformular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten anstelle des standardmäßigen Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die keine gleichen Werte haben können.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, legt fest, dass das aktuelle Feld der Primärschlüssel für das Modell ist (ein Primärschlüssel ist eine spezielle Datenbankspalte, die dazu dient, alle verschiedenen Tabellenzeilen eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, fügt Django automatisch ein Feld zu diesem Zweck hinzu.
  Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellung festgelegt werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt werden, legen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield) fest.
  > Dies können Sie in der **catalog/apps.py** Datei der Local Library sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen — Sie können die [vollständige Liste der Feldoptionen hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Gemeinsame Feldtypen

Die folgende Liste beschreibt einige der häufiger verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um Zeichenfolgen mit kurzer bis mittlerer fester Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, dies wird jedoch nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird auf Datenbankebene nicht erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlen (ganze Zahlen) und zum Validieren von eingegebenen Werten als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums/Zeitinformationen verwendet (als Python `datetime.date` bzw. `datetime.datetime` Objekte). Diese Felder können zusätzlich die (wechselseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen), und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien beziehungsweise Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese Felder haben Parameter, um zu definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein solcher Primärschlüssel wird Ihrem Modell automatisch hinzugefügt, wenn Sie keinen explizit angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-Viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z. B. hat ein Auto einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" zu diesem "Schlüssel" enthalten, befinden sich auf der "vielen" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-Viele-Beziehung zu spezifizieren (z. B. kann ein Buch mehrere Genres haben und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen innerhalb von Gruppen zu beschreiben. Diese Felder haben den Parameter `on_delete`, um festzulegen, was passiert, wenn der zugehörige Datensatz gelöscht wird (z. B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Feldertypen, einschließlich Felder für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Gleitkomma), Boolsche Werte, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Uhrzeit usw.). Sie können die [vollständige Liste hier ansehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können Metadaten auf Modellebene für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist die Steuerung der _Standardreihenfolge_ der Datensätze, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Dies tun Sie, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen an das `ordering` Attribut angeben, wie oben gezeigt. Die Reihenfolge richtet sich nach dem Feldtyp (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie den Feldnamen mit einem Minuszeichen (-) voranstellen, um die Sortierfolge umzukehren.

Wenn wir also als Beispiel die Bücher standardmäßig auf diese Weise sortieren würden:

```python
ordering = ['title', '-pubdate']
```

würden die Bücher alphabetisch nach Titel sortiert werden, von A-Z, und dann nach Erscheinungsdatum innerhalb jedes Titels, von neu nach alt.

Ein weiteres häufig verwendetes Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Mit Klassenmetadaten können Sie neue "Zugriffsberechtigungen" für das Modell erstellen und anwenden (Standardberechtigungen werden automatisch angewendet), die Reihenfolge basierend auf einem anderen Feld festlegen, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte der zu speichernden Daten definieren oder deklarieren, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadateneinstellungen steuern, welches Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind nur dann wirklich nützlich, wenn Sie ein Modell an eine vorhandene Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen finden Sie hier: [Model-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**In jedem Modell sollten Sie mindestens die Standard-Python-Klassenmethode `__str__()` definieren, um eine menschenlesbare Zeichenkette für jedes Objekt zurückzugeben.** Diese Zeichenkette wird verwendet, um einzelne Datensätze auf der Verwaltungsoberfläche (und überall sonst, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Häufig gibt diese Methode ein Titel- oder Namensfeld des Modells zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere gängige Methode, die in Django-Modellen enthalten ist, ist `get_absolute_url()`, die eine URL zum Anzeigen einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine Schaltfläche "Auf der Website anzeigen" zu den Modelldatensatzbearbeitungsbildschirmen in der Admin-Oberfläche hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/myapplication/mymodelname/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `ID` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und die ID an eine "Modell-Detailansicht" zu übergeben (die die erforderliche Arbeit zum Anzeigen des Datensatzes erledigt). Die `reverse()`-Funktion oben ist in der Lage, Ihren URL-Mapper (im obigen Fall genannt _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie, um dies zum Funktionieren zu bringen, immer noch die URL-Zuordnung, Ansicht und Vorlage schreiben!

Sie können auch alle anderen Methoden definieren, die Ihnen gefallen, und sie von Ihrem Code oder Vorlagen aus aufrufen (unter der Voraussetzung, dass sie keine Parameter übernehmen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen zu erhalten. Wir werden Ihnen zeigen, wie Sie das im Tutorial tun, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird der neue Datensatz automatisch eines mit dem Feldnamen `id` zugewiesen. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte den Wert 1.

Sie können auf die Felder in diesem neuen Datensatz über die Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suche nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects` Attribut des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Die Erklärung, wie man nach Datensätzen mit "abstrakten" Modell- und Feldnamen sucht, kann ein wenig verwirrend sein. In der folgenden Diskussion verweisen wir auf ein `Book` Modell mit `title` und `genre` Feldern, bei denen Genre auch ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` erhalten, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, die wir durchlaufen können.

```python
all_books = Book.objects.all()
```

Die `filter()` Methode von Django ermöglicht es uns, das zurückgegebene `QuerySet` zu filtern, um ein bestimmtes **Text** oder **numerisches** Feld mit bestimmten Kriterien zu vergleichen. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten und dann zu zählen, könnten wir Folgendes tun.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die zu vergleichenden Felder und der Art des Vergleichs werden im Filternamen festgelegt, im Format: `field_name__match_type` (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem groß- und kleinschreibungsempfindlichen Vergleich. Es gibt viele andere Vergleichsarten, die Sie durchführen können: `icontains` (groß- und kleinschreibungsunempfindlich), `iexact` (groß- und kleinschreibungsunempfindlicher exakter Vergleich), `exact` (groß- und kleinschreibungsempfindlicher exakter Vergleich) sowie `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf ein Feld filtern, das eine Eins-zu-Viele-Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie mit _doppelten Unterstrichen_ zu Feldern innerhalb des zugehörigen Modells "indizieren".
Wenn Sie also beispielsweise nach Büchern mit einem bestimmten Genremuster filtern möchten, müssen Sie durch das `genre` Feld auf das `name` indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um beliebig viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu durchlaufen.
> Beispielsweise könnte ein `Book`, das unterschiedliche Typen hat, die mithilfe einer weiteren "cover"-Beziehung definiert sind, einen Parameternamen haben: `type__cover__name__exact='hard'.`

Mit Abfragen können Sie noch viel mehr tun, einschließlich Rückwärtssuchen von verwandten Modellen, Verkettung von Filtern, Rückgabe einer kleineren Anzahl von Werten usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Der Boilerplate-Code oben auf der Seite importiert das _models_ Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre` Modellcode und fügen Sie ihn unten in Ihre `models.py` Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern – zum Beispiel, ob es Fiktion oder Sachliteratur ist, Romantik oder Militärgeschichte usw.
Wie oben erwähnt, haben wir das Genre als Modell und nicht als Freitext oder Auswahlfeld erstellt, sodass die möglichen Werte über die Datenbank und nicht durch Festkodierung verwaltet werden können.

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

Das Modell hat ein einzelnes `CharField`-Feld (`name`), das zur Beschreibung des Genres verwendet wird (dies ist auf 200 Zeichen begrenzt und hat einen `help_text`).
Wir haben dieses Feld als einzigartig festgelegt (`unique=True`), da es nur einen Eintrag für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()` Methode, die den Namen des Genres, das durch einen bestimmten Datensatz definiert ist, zurückgibt. Es wurde kein ausführlicher Name (`verbose name`) definiert, daher wird das Feld im Formular mit `Name` beschriftet.
Dann deklarieren wir die `get_absolute_url()` Methode, die eine URL zurückgibt, die zum Zugriff auf ein Detail-Datensatz für dieses Modell verwendet werden kann (damit dies funktioniert, müssen wir eine URL-Zuordnung mit dem Namen `genre-detail` definieren und eine zugehörige Ansicht und Vorlage definieren).

Das Festlegen von `unique=True` für das obige Feld verhindert, dass Genres mit _genau_ demselben Namen erstellt werden, jedoch nicht Variationen wie „Fantasie“, „Fantasy“ oder sogar „FaNtAsY“.
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints) Option in den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der kleingeschriebene Wert im `name` Feld in der Datenbank eindeutig sein muss, und gibt die `violation_error_message` Zeichenfolge aus, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen für ein Feld oder Felder definieren.
Weitere Informationen finden Sie in der [Constraints-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buchmodell

Kopieren Sie das unten stehende `Book` Modell und fügen Sie es erneut am Ende Ihrer Datei ein. Das `Book` Modell repräsentiert alle Informationen über ein verfügbares Buch im Allgemeinen, jedoch nicht ein bestimmtes physisches „Exemplar“ oder „Kopie“, das ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen.
Für `isbn` beachten Sie, wie der erste unbenannte Parameter explizit die Beschriftung als "ISBN" festlegt (ansonsten wäre es "Isbn"). Wir setzen auch den Parameter `unique` auf `true` fest, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der Parameter `unique` macht den Feldwert global eindeutig in einer Tabelle).
Anders als beim `isbn` (und dem Genre-Namen) ist der `title` nicht einzigartig, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, ein Autor jedoch viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter unter Verwendung entweder der Modellklasse oder eines Strings, der den Namen des zugehörigen Modells enthält, deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter des `author` Feldes sind `null=True`, das der Datenbank erlaubt, einen `Null` Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, das verhindert, dass der zugehörige Autor des Buches gelöscht wird, wenn es von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig ist `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht würde, auch dieses Buch gelöscht würde! Wir verwenden `RESTRICT` hier, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, solange irgendein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, indem es das `title` Feld des Buches verwendet, um einen `Book` Datensatz darzustellen. Die abschließende Methode `get_absolute_url()` gibt eine URL zurück, die verwendet werden kann, um einen detaillierten Datensatz für dieses Modell abzurufen (wir müssen eine URL-Zuordnung mit dem Namen `book-detail` definieren und eine zugehörige Ansicht und Vorlage definieren).

### Buchinstanzmodell

Kopieren Sie als Nächstes das `BookInstance` Modell (unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert ein bestimmtes Exemplar eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob das Exemplar verfügbar ist oder an welchem Datum es zurück erwartet wird, "Imprint" oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sollten jetzt vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Exemplare haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel legt `on_delete=models.RESTRICT` fest, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
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

Wir deklarieren zusätzlich einige neue Arten von Feldern:

- `UUIDField` wird für das `id` Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Diese Art von Feld weist jedem Exemplar (einem Buch, das Sie in der Bibliothek finden können) einen weltweit eindeutigen Wert zu.
- `DateField` wird für das `due_back` Datum (an dem das Buch nach dem Ausleihen oder in Wartung voraussichtlich wieder verfügbar wird) verwendet. Dieser Wert kann `blank` oder `null` sein (was für den Fall benötigt wird, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu sortieren, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel, das Tupeln von Schlüssel-Wert-Paaren enthält, und übergeben es an das choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeige-Wert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst als unv verfügbar erstellt werden, bevor sie in die Regale gestellt werden.

Die Methode `__str__()` stellt das `BookInstance`-Objekt mithilfe einer Kombination aus seiner eindeutigen ID und dem Titel des zugehörigen `Book` dar.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die String-Interpolationssyntax (auch als f-Strings bekannt) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir [formatierte Zeichenfolgen](https://peps.python.org/pep-3101/) verwendet, was ebenfalls eine gültige Methode zum Formatieren von Zeichenfolgen in Python ist (z. B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autorenmodell

Kopieren Sie das `Author` Modell (unten gezeigt) unter den vorhandenen Code in **models.py**.

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

Alle Felder/Methoden sollten jetzt vertraut sein. Das Modell definiert einen Autor als jemanden, der einen Vor-, Nachnamen und Geburts- und Sterbedaten hat (beide optional). Es gibt an, dass standardmäßig die `__str__()` Methode den Namen in _Nachname_, _Vorname_-Reihenfolge zurückgibt. Die `get_absolute_url()` Methode spiegelt die `author-detail` URL-Zuordnung wider, um die URL zum Anzeigen eines einzelnen Autors zu erhalten.

## Führen Sie die Datenbankmigrationen erneut aus

Alle Ihre Modelle wurden nun erstellt. Führen Sie nun Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Gönner spendet eine Anzahl neuer Bücher, die in einer anderen Sprache geschrieben sind (z. B. Farsi). Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite dargestellt werden könnten, und sie dann den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte „Sprache“ mit einem `Book`, `BookInstance` oder einem anderen Objekt verbunden sein?
- Sollten die verschiedenen Sprachen mithilfe eines Modells, eines Freitextfeldes oder einer fest codierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, was wir auf GitHub [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells Ihre Datenbankmigrationen erneut ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen dann verwendet, um geeignete Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz von der Erstellung der Website abweichen und uns die _Django-Administrationsseite_ ansehen. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mithilfe unserer (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
