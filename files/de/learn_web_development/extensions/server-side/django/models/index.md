---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie man Modelle für die LocalLibrary-Website definiert. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Außerdem wird kurz gezeigt, auf welche Weise Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellen einer Grundstruktur der Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen, indem die Felder angemessen ausgewählt werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld*Typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahloptionen, Hilfetexte für Dokumentation, Labeltexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können im Rahmen Ihrer Projekteinstellungen eine von mehreren auswählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie sich überhaupt nicht direkt damit befassen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie man die Modelle für das [LocalLibrary-Website-Beispiel](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugreift.

## Entwerfen der LocalLibrary-Modelle

Bevor Sie in die Codierung der Modelle einsteigen, sollten Sie ein paar Minuten darüber nachdenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, geschriebene Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen basierend auf Buchtitel, Autor, geschriebener Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, für jedes "Objekt" (eine Gruppe verwandter Informationen) separate Modelle zu haben. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchexemplare und Autoren.

Es kann auch sinnvoll sein, Modelle zu verwenden, um Auswahloptionen (z. B. wie eine Dropdown-Liste von Auswahlmöglichkeiten) zu repräsentieren, anstatt die Auswahlmöglichkeiten fest in die Website zu kodieren — dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Buchgenre (z. B. Science Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django erlaubt es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit diesem Gedanken zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren (als Kästen).

![LocalLibrary Modell UML mit korrigierter Autor-Multiplizität innerhalb der Buch-Klasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), Buchexemplar (Status bestimmter physischer Kopien des Buches, die im System verfügbar sind) und Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest kodiert, da wir nicht erwarten, dass sie sich ändern. Innerhalb jedes der Kästen sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabewerte.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen inklusive ihrer _Multiplizitäten_. Die Multiplizitäten sind die Zahlen im Diagramm, die die Anzahl (Maximum und Minimum) jedes Modells zeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästen, dass Buch und Genre miteinander verbunden sind. Die Zahlen in der Nähe des Genre-Modells zeigen, dass ein Buch mindestens ein oder mehr Genres haben muss (so viele Sie möchten), während die Zahlen am anderen Ende der Linie in der Nähe des Buch-Modells zeigen, dass ein Genre null oder viele zugeordnete Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Einführung in Modelle

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modell-Definition

Modelle werden üblicherweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der folgende Codeausschnitt zeigt ein "typisches" Modell namens `MyModelName`:

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

In den folgenden Abschnitten werden wir jedes der enthaltenen Merkmale des Modells im Detail betrachten:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben — jedes davon repräsentiert eine Spalte von Daten, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbank-Datensatz (Zeile) besteht aus einem Wert für jedes Feld. Lassen Sie uns das folgende Beispiel betrachten:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name` vom Typ `models.CharField` — was bedeutet, dass dieses Feld Zeichenfolgen mit alphanumerischen Zeichen enthalten wird. Die Feldtypen werden mithilfe spezifischer Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der zur Speicherung der Daten in der Datenbank verwendet wird, gemeinsam mit Kriterien zur Validierung, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (also was einen gültigen Wert ausmacht). Die Feldtypen können auch Argumente aufnehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Werts in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfreicher Text, der in einem Formular angezeigt werden kann, um den Benutzern zu helfen zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um darauf in Abfragen und Templates zu verweisen. Felder haben auch ein Label, das mit dem `verbose_name`-Argument angegeben wird (mit einem Standardwert von `None`). Wenn `verbose_name` nicht gesetzt ist, wird das Label aus dem Feldnamen erstellt, indem Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel würde das Feld `my_field_name` in Formularen ein Standardlabel von _My field name_ haben).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf ihre Standardreihenfolge aus, wenn ein Modell in einem Formular gerendert wird (z.B. auf der Admin-Site), obwohl dies überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden allgemeinen Argumente können verwendet werden, wenn viele/fast alle der verschiedenen Feldtypen deklariert werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Gibt ein Textlabel für HTML-Formulare (z.B. auf der Admin-Site), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein benutzerfreundlicher Name für das Feld, der in Feldlabels verwendet wird. Wenn nicht angegeben, leitet Django den Standardnamen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein callable Objekt sein, in welchem Fall das Objekt jedes Mal, wenn ein neuer Datensatz erstellt wird, aufgerufen wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies sinnvoll ist (ein `CharField` speichert stattdessen einen leeren String). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, ist das Feld in Ihren Formularen leer erlaubt. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie zwingt, einen Wert einzugeben. Dies wird oft mit `null=True` verwendet, da wenn Sie leere Werte zulassen möchten, auch die Datenbank in der Lage sein soll, sie entsprechend darzustellen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, wird das standardmäßige zugehörige Formular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten sein, anstelle des standardmäßigen Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique): Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank einzigartig ist. Dies kann verwendet werden, um zu verhindern, dass Felder doppelt verwendet werden, die keine gleichen Werte haben können. Der Standard ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key): Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (Ein Primärschlüssel ist eine spezielle Datenbankspalte, die zur eindeutigen Identifizierung aller verschiedenen Tabellendatensätze bestimmt ist). Wenn kein Feld als Primärschlüssel festgelegt ist, fügt Django automatisch ein Feld für diesen Zweck hinzu. Der Typ der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD)-Einstellung spezifiziert werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der local library **catalog/apps.py**-Datei sehen:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufige Feldtypen

Die folgende Liste beschreibt einige der häufiger verwendeten Arten von Feldern.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um Zeichenfolgen mit fester Länge von kurzer bis mittlerer Größe zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große Zeichenfolgen beliebiger Länge verwendet. Sie können für das Feld `max_length` angeben, dies wird jedoch nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlen (ganze Zahlen) und zur Validierung von eingegebenen Werten als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Zeitinformationen (als Python `datetime.date` und `datetime.datetime` Objekte) verwendet. Diese Felder können zusätzlich die (wechselseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur festzulegen, wenn das Modell erstmals erstellt wird) und `default` (um ein Standarddatum anzugeben, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter, um festzulegen, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist eine spezielle Art von `IntegerField`, die sich automatisch inkrementiert. Ein Primärschlüssel dieser Art wird Ihrem Modell automatisch hinzugefügt, wenn Sie keinen explizit angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine eins-zu-viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z.B., ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Fremdschlüssel" enthalten und sich auf diesen "Schlüssel" beziehen, befinden sich auf der "viele" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele-Beziehung zu spezifizieren (z.B., ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können in komplizierteren Wegen verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um festzulegen, was geschieht, wenn der zugehörige Datensatz gelöscht wird (z.B., ein Wert `models.SET_NULL` würde den Wert auf `NULL` setzen).

Es gibt viele andere Arten von Feldern, einschließlich Feldern für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), boolesche Werte, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellübergreifende Metadaten für Ihr Modell erklären, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist es, die _Standard-Sortierung_ von Datensätzen zu steuern, die zurückgegeben werden, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen dem `ordering`-Attribut zuweisen, wie oben gezeigt. Die Sortierung hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder in chronologischer Reihenfolge sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen voranstellen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir uns entscheiden würden, Bücher auf diese Weise standardmäßig zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel von A-Z sortiert und dann nach Veröffentlichungsdatum innerhalb jedes Titels von neu nach alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in singularer und pluraler Form:

```python
verbose_name = 'BetterName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), das Sortieren auf der Grundlage eines anderen Feldes zuzulassen, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte der zu speichernden Daten zu definieren oder zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und die stattdessen zur Erstellung anderer Modelle abgeleitet wird).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell auf eine bestehende Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Model-Metadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Mindestens in jedem Modell sollten Sie die Standard-Python-Klassenmethode `__str__()` definieren, um für jedes Objekt einen menschenlesbaren String zurückzugeben.** Dieser String wird verwendet, um einzelne Datensätze auf der Admin-Oberfläche (und überall sonst, wo Sie auf eine Modellinstanz verweisen müssen) zu repräsentieren. Oft wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufig verwendete Methode in Django-Modellen ist `get_absolute_url()`, die eine URL für die Anzeige einzelner Modelldatensätze auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine Schaltfläche "Auf der Seite anzeigen" zu den Datensatzbearbeitungsbildschirmen des Modells in der Admin-Oberfläche hinzu). Ein typisches Muster für `get_absolute_url()` wird unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie verwenden URLs wie `/my-application/my-model-name/2`, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und ID an eine "Modell-Detailansicht" zu übergeben (die die erforderlichen Arbeiten zur Anzeige des Datensatzes ausführen wird). Die `reverse()`-Funktion oben ist in der Lage, den URL-Mapping (im obigen Fall _'model-detail-view'_) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie hierzu immer noch das URL-Mapping, die View und das Template schreiben!

Sie können auch beliebige andere Methoden definieren, die Sie mögen, und sie von Ihrem Code oder Ihren Templates aufrufen (vorausgesetzt sie benötigen keine Parameter).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und Abfragen auszuführen, um alle Datensätze oder bestimmte Untergruppen von Datensätzen abzurufen. Wir werden Ihnen im Tutorial zeigen, wie das geht, wenn wir unsere Views definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines vergeben, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte den Wert 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punkt-Syntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in die Datenbank zu speichern.

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
> Zu erklären, wie man nach Datensätzen mit "abstrakten" Modell- und Feldnamen sucht, kann etwas verwirrend sein. In der folgenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre auch ein Modell mit einem einzigen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` abrufen, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, durch die wir iterieren/schleifen können.

```python
all_books = Book.objects.all()
```

Djangos `filter()`-Methode ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass es einem bestimmten **Textefeld** oder **numerischen Feld** mit bestimmten Kriterien entspricht. Zum Beispiel, um nach Büchern zu filtern, die "wild" im Titel enthalten, und sie dann zu zählen, könnten wir das folgende tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Übereinstimmungskriterien werden im Filternamen durch das Format: `field_name__match_type` definiert (beachten Sie das _Doppelt-Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einer mit Groß-/Kleinschreibung übereinstimmenden Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie durchführen können: `icontains` (Groß-/Kleinschreibung ignorierend), `iexact` (Groß-/Kleinschreibung ignorierende exakte Übereinstimmung), `exact` (Groß-/Kleinschreibung beachtende exakte Übereinstimmung) sowie `in`, `gt` (größer als), `startswith`, usw. Die [vollständige Liste finden Sie hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf ein Feld filtern, das eine eins-zu-viele Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen Doppelunterstrichen auf Felder innerhalb des zugeordneten Modells "indizieren". Um also beispielsweise nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie über das `genre`-Feld zum `name` indizieren, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um durch so viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren, wie Sie möchten. Zum Beispiel könnte ein `Book`, das verschiedene Typen hat, die mit einer weiteren "cover"-Beziehung definiert sind, einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt noch viel mehr, was Sie mit Abfragen tun können, einschließlich Rückwärts-Searches von zugeordneten Modellen, Kettenfilter, Rückgabe einer kleineren Anzahl von Werten usw. Für weitere Informationen siehe [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Die Boilerplate am oberen Rand der Seite importiert das _models_ Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Create your models here.
```

### Genre Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn am Ende Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — z.B. ob es sich um Belletristik oder Sachbuch, Romanze oder Militärgeschichte usw. handelt. Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt es als Freitext oder Auswahlliste zu kodieren, damit die möglichen Werte über die Datenbank verwaltet werden können und nicht fest kodiert sind.

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

Das Modell hat ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen beschränkt und hat etwas `help_text`). Wir haben dieses Feld als einzigartig (`unique=True`) festgelegt, da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, das durch einen bestimmten Datensatz definiert ist. Es wurde kein ausführlicher Name definiert, sodass das Feldlabel `Name` verwendet wird, wenn es in Formularen verwendet wird. Anschließend deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir ein URL-Mapping definieren, das den Namen `genre-detail` hat, und eine zugehörige Ansicht und ein Template definieren).

Das Festlegen von `unique=True` auf dem obigen Feld verhindert, dass Genres mit _exakt_ demselben Namen erstellt werden, aber nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY". Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints) Option auf der Metadaten des Modells, um zu spezifizieren, dass der Kleinbuchstabenwert im Feld `name` in der Datenbank eindeutig sein muss, und zeigt die `violation_error_message` Zeichenfolge, wenn dies nicht der Fall ist. Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren. Für weitere Informationen siehe den [Constraints reference](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Book Modell

Kopieren Sie das `Book`-Modell unten und fügen Sie es wieder am Ende Ihrer Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch im allgemeinen Sinne, aber nicht ein bestimmtes physisches "Exemplar" oder eine "Kopie", die ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den `title` und `isbn` des Buches darzustellen. Bei `isbn` beachten Sie, wie der erste unbenannte Parameter explizit das Label als "ISBN" setzt (ansonsten würde es auf "Isbn" lauten). Wir setzen auch den Parameter `unique` auf `true`, um sicherzustellen, dass alle Bücher eine eindeutige ISBN haben (der unique-Parameter macht den Feldwert global einzigartig in einer Tabelle). Im Gegensatz zur `isbn` (und dem Genrenamen) ist der `title` nicht als einzigartig festgelegt, da es möglich ist, dass unterschiedliche Bücher denselben Namen haben. Das Modell verwendet `TextField` für die `summary`, da dieser Text ziemlich lang sein kann.

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

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter entweder durch die Modellklasse oder einen String mit dem Namen des zugehörigen Modells deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse nicht zuvor in dieser Datei definiert wurde, bevor darauf verwiesen wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was es der Datenbank ermöglicht, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, was verhindert, dass der zugeordnete Autor des Buches gelöscht wird, wenn es von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig ist `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wird, auch dieses Buch gelöscht würde! Wir verwenden `RESTRICT` hier, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, wobei das Titel-Feld des Buches zur Darstellung eines `Book`-Datensatzes verwendet wird. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen ein URL-Mapping definieren, das den Namen `book-detail` trägt, und eine zugehörige Ansicht und ein Template definieren).

### BookInstance Modell

Kopieren Sie nun das `BookInstance` Modell (unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Imprint"- oder Versionsdetails sowie eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden werden Ihnen jetzt vertraut sein. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Exemplare haben, aber ein Exemplar kann nur ein `Book` haben). Der Schlüssel gibt `on_delete=models.RESTRICT` an, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
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

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Diese Art von Feld weist jedem Exemplar (einem für jedes Buch, das Sie in der Bibliothek finden) einen weltweit eindeutigen Wert zu.
- `DateField` wird für das `due_back`-Datum verwendet (an dem das Buch nach dem Ausleihen oder in Wartung voraussichtlich verfügbar sein wird). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Datensätze in einer Abfrage zurückzugeben.
- `status` ist ein `CharField`, das eine Auswahl/Auswahlliste definiert. Wie Sie sehen können, definieren wir ein Tupel, das Tupel von Schlüssel-Wert-Paaren enthält und es an das choices-Argument übergeben wird. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Instandhaltung) festgelegt, da Bücher zunächst nicht verfügbar erstellt werden, bevor sie auf den Regalen gelagert werden.

Die Methode `__str__()` repräsentiert das `BookInstance` Objekt unter Verwendung einer Kombination aus seiner eindeutigen ID und dem zugeordneten `Book` Titel.

> [!NOTE]
> Ein wenig Python:
>
> - Ab Python 3.6 können Sie die String-Interpolation-Syntax verwenden (auch bekannt als f-Strings): `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials verwendeten wir eine [formatierte String](https://peps.python.org/pep-3101/) Syntax, die ebenfalls eine gültige Möglichkeit zur Formatierung von Strings in Python darstellt (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Author Modell

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

Alle der Felder/Methoden sollten Ihnen jetzt vertraut sein. Das Modell definiert einen Autor als jemand mit Vornamen, Nachnamen sowie Geburts- und Todesdaten (beide optional). Es gibt an, dass standardmäßig `__str__()` den Namen in _Nachname_, _Vorname_ ausgibt. Die `get_absolute_url()`-Methode kehrt das `author-detail` URL-Mapping um, um die URL zur Anzeige eines einzelnen Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden nun erstellt. Führen Sie nun Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache geschrieben sind (sagen wir, Farsi). Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliothekswebsite repräsentiert werden sollten, und sie dann zu den Modellen hinzuzufügen.

Einige Dinge, die Sie beachten sollten:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verknüpft werden?
- Sollten die verschiedenen Sprachen durch ein Modell, ein Freitextfeld oder eine fest codierte Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, wofür wir uns auf GitHub entschieden haben [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py).

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und dann diese Informationen verwendet, um geeignete Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt werden wir kurz von der Erstellung der Website abweichen und die _Django Admin-Oberfläche_ überprüfen. Diese Site wird es uns ermöglichen, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Templates anzeigen können.

## Siehe auch

- [Das erste Django-App schreiben, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
