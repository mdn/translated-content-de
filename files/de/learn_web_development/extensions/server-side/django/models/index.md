---
title: "Django Tutorial Teil 3: Verwendung von Modellen"
short-title: "3: Modelle"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel zeigt, wie Sie Modelle für die LocalLibrary-Website definieren. Er erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Außerdem zeigt er kurz einige der wichtigsten Möglichkeiten, auf Modelldaten zuzugreifen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django Tutorial Teil 2: Erstellung einer Skelett-Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, eigene Modelle zu entwerfen und zu erstellen, indem Sie Felder entsprechend auswählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Django-Webanwendungen greifen über Python-Objekte, die als Modelle bezeichnet werden, auf Daten zu und verwalten diese. Modelle definieren die _Struktur_ der gespeicherten Daten, einschließlich der Feld_typen_ und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten aus Listen, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können als Teil Ihrer Projekteinstellungen eine von mehreren auswählen. Sobald Sie entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht mehr direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte mühsame Arbeit der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie Sie die Modelle für das [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Beispiel definieren und auf sie zugreifen können.

## Entwurf der LocalLibrary-Modelle

Bevor Sie mit der Codierung der Modelle beginnen, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher speichern müssen (Titel, Zusammenfassung, Autor, Sprache, Kategorie, ISBN) und dass wir möglicherweise mehrere Exemplare verfügbar haben (mit weltweit eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es kann mehrere Autoren mit demselben oder ähnlichen Namen geben. Wir möchten Informationen nach Buchtitel, Autor, Sprache und Kategorie sortieren können.

Beim Entwerfen Ihrer Modelle macht es Sinn, separate Modelle für jedes "Objekt" zu haben (eine Gruppe verwandter Informationen). In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Möglicherweise möchten Sie auch Modelle verwenden, um Auswahlmöglichkeiten darzustellen (z. B. eine Dropdown-Liste mit Auswahlmöglichkeiten), anstatt die Auswahlmöglichkeiten direkt in die Website einzucodieren — das wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern können. Offensichtliche Kandidaten für Modelle in diesem Fall sind das Genre des Buches (z. B. Science-Fiction, Französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Mit diesem Hintergrund zeigt das folgende UML-Assoziationsdiagramm die Modelle, die wir in diesem Fall definieren werden (als Boxen).

![LocalLibrary Modell UML mit fester Autoren-Multiplikation in der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), Buchinstanzen (Status bestimmter physischer Exemplare des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben uns auch entschieden, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben — wir haben die Werte (`LOAN_STATUS`) fest kodiert, da wir nicht erwarten, dass sich diese ändern. Innerhalb jeder der Boxen können Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen sehen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplikationen_. Die Multiplikationen sind die Zahlen auf dem Diagramm, die die Anzahl (maximal und minimal) jedes Modells zeigen, das in der Beziehung vorhanden sein kann. Zum Beispiel zeigt die Verbindungsleitung zwischen den Boxen, dass Buch und Genre miteinander verbunden sind. Die Zahlen in der Nähe des Genres Modells zeigen, dass ein Buch ein oder mehrere Genres (so viele wie Sie möchten) haben muss, während die Zahlen auf der anderen Seite der Linie neben dem Buchmodell zeigen, dass ein Genre null oder viele zugeordnete Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, wie Modelle definiert und verwendet werden. Während Sie es lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modell-Primer

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigsten Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Das unten stehende Codefragment zeigt ein "typisches" Modell namens `MyModelName`:

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

In den unteren Abschnitten werden wir die einzelnen Funktionen innerhalb des Modells im Detail untersuchen:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern haben, von beliebigem Typ — jedes Feld stellt eine Datenbankspalte dar, die wir in einer unserer Datenbanktabellen speichern möchten. Jedes Datenbankeintrag (Zeile) besteht aus einem Wert für jedes Feld. Lassen Sie uns das im folgenden Beispiel betrachten:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einziges Feld namens `my_field_name` vom Typ `models.CharField` — das bedeutet, dass dieses Feld Zeichenfolgen aus alphanumerischen Zeichen enthalten wird. Die Feldtypen werden mit bestimmten Klassen zugewiesen, die den Datensatztyp bestimmen, der in der Datenbank zur Speicherung der Daten verwendet wird, zusammen mit Validierungskriterien, die verwendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h. was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente übernehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Feldokumentation eingeben'` — Hilfreicher Text, der in einem Formular angezeigt werden kann, um Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um in Abfragen und Vorlagen darauf zu verweisen.
Felder haben auch eine Bezeichnung, die mit dem `verbose_name`-Argument angegeben wird (mit einem Standardwert von `None`).
Wenn `verbose_name` nicht festgelegt ist, wird die Bezeichnung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (zum Beispiel würde das Feld `my_field_name` standardmäßig die Bezeichnung _My field name_ haben, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, beeinflusst ihre Standardreihenfolge, wenn ein Modell in einem Formular gerendert wird (z. B. auf der Admin-Seite), obwohl dies überschrieben werden kann.

##### Häufige Argumente der Felder

Die folgenden allgemeinen Argumente können bei der Deklaration vieler/der meisten verschiedenen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bereitstellung eines Textetiketts für HTML-Formulare (z. B. auf der Admin-Seite), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein lesbarer Name für das Feld, das in Feldbezeichnungen verwendet wird. Wird nichts angegeben, leitet Django den Standard-Verbose-Namen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in welchem Fall das Objekt jedes Mal aufgerufen wird, wenn ein neuer Eintrag erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies angebracht ist (ein `CharField` wird stattdessen einen leeren String speichern). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer bleiben. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie dazu zwingt, einen Wert einzutragen. Dies wird häufig mit `null=True` verwendet, denn wenn Sie leere Werte zulassen, möchten Sie auch, dass die Datenbank sie angemessen darstellen kann.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben ist, wird das Standard-Formular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten anstelle des Standard-Textfeldes sein.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique):
  Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank eindeutig ist.
  Dies kann verwendet werden, um die Duplizierung von Feldern zu verhindern, die nicht die gleichen Werte haben dürfen.
  Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key):
  Wenn `True`, setzt dieses das aktuelle Feld als Primärschlüssel für das Modell (ein Primärschlüssel ist eine spezielle Datenbankspalte, die dazu bestimmt ist, alle verschiedenen Tabellenaufzeichnungen eindeutig zu identifizieren).
  Wenn kein Feld als Primärschlüssel angegeben ist, fügt Django automatisch ein Feld zu diesem Zweck hinzu.
  Der Typ von automatisch erstellten Primärschlüsselfeldern kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der Einstellung [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) angegeben werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Primärschlüsseltyp auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Sie können dies in der lokalen Bibliothek **catalog/apps.py**-Datei sehen:
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele weitere Optionen — Sie können die [vollständige Liste der Feldoptionen hier anzeigen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufig genutzte Feldtypen

Die folgende Liste beschreibt einige der am häufigsten verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittelgroße Festlängen-Zeichenfolgen zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große, willkürlich lange Zeichenketten verwendet. Sie können eine `max_length` für das Feld angeben, aber diese wird nur verwendet, wenn das Feld in Formularen angezeigt wird (sie wird nicht auf Datenbankebene erzwungen).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld für das Speichern von Ganzzahlen (ganze Zahlen) und zur Validierung eingetragener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden zum Speichern/Darstellen von Datums- und Datums-/Uhrzeitinformationen verwendet (als Python `datetime.date`- und `datetime.datetime`-Objekte bzw.). Diese Felder können auch die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim ersten Erstellen des Modells zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) angeben.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden zum Hochladen von Dateien bzw. Bildern verwendet (das `ImageField` fügt eine zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese haben Parameter zum Definieren, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist eine spezielle Art von `IntegerField`, das automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird automatisch zu Ihrem Modell hinzugefügt, wenn Sie nicht explizit einen angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine Eins-zu-viele-Beziehung zu einem anderen Datenbankmodell zu spezifizieren (z. B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eine" Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (die Modelle, die einen "Foreign Key" auf diesen "Schlüssel" verweisen, sind auf der "viele" Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine Viele-zu-viele-Beziehung zu spezifizieren (z. B. ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden wir diese sehr ähnlich wie `ForeignKeys` verwenden, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese haben den Parameter `on_delete`, um zu definieren, was passiert, wenn der zugehörige Datensatz gelöscht wird (z. B. wäre ein Wert von `models.SET_NULL`, der Wert würde auf `NULL` gesetzt).

Es gibt viele andere Arten von Feldern, einschließlich Feldern für verschiedene Arten von Zahlen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), Booleans, URLs, Slugs, eindeutige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types) anzeigen.

#### Metadaten

Sie können Modell-Ebene Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Eigenschaften dieser Metadaten ist die Kontrolle der _Standardreihenfolge_ der zurückgegebenen Datensätze, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Sortierreihenfolge in einer Liste von Feldnamen dem `ordering`-Attribut angeben, wie oben gezeigt. Die Reihenfolge hängt vom Feldtyp ab (Zeichenfelder werden alphabetisch sortiert, während Datumsfelder chronologisch sortiert werden). Wie oben gezeigt, können Sie dem Feldnamen ein Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir uns dafür entschieden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-publish_date']
```

würden die Bücher alphabetisch nach Titel von A-Z sortiert und dann nach Veröffentlichungsdatum innerhalb jedes Titels von neu nach alt.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in Singular- und Pluralform:

```python
verbose_name = 'BetterName'
```

Klassen-Metadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), um die Reihenfolge basierend auf einem anderen Feld zu ermöglichen, um [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für die möglichen Werte der Daten, die gespeichert werden können, zu definieren oder um zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Einträge erstellen können und stattdessen von ihr abgeleitet werden, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell an eine vorhandene Datenbank abbilden müssen).

Die vollständige Liste der Metadatenoptionen ist hier verfügbar: [Modellmetadatenoptionen](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**In jedem Modell sollten Sie zumindest die Standard-Python-Klassenmethode `__str__()` definieren, um einen menschenlesbaren String für jedes Objekt zurückzugeben.** Dieser String wird verwendet, um einzelne Datensätze im Administrationsbereich darzustellen (und an jedem anderen Ort, an dem Sie auf eine Modellinstanz verweisen müssen). Oft gibt diese Methode ein Titel- oder Namensfeld aus dem Modell zurück.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere häufig in Django-Modellen einzugliederende Methode ist `get_absolute_url()`, die eine URL zum Anzeigen einzelner Modellaufzeichnungen auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine Schaltfläche "Ansicht auf der Website" zu den Bearbeitungsbildschirmen des Modells im Administrationsbereich hinzu). Ein typisches Muster für `get_absolute_url()` ist unten gezeigt.

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Gehen wir davon aus, dass Sie URLs wie `/my-application/my-model-name/2` verwenden, um einzelne Datensätze Ihres Modells anzuzeigen (wobei "2" die `id` für einen bestimmten Datensatz ist). Sie müssen einen URL-Mapping erstellen, um die Antwort und die ID an eine "Modell-Detailansicht" zu übergeben (die die notwendigen Arbeiten zum Anzeigen des Datensatzes ausführt). Die oben gezeigte Funktion `reverse()` ist in der Lage, Ihren URL-Mapping (im obigen Fall _'model-detail-view'_ genannt) "umzukehren", um eine URL im richtigen Format zu erstellen.
>
> Natürlich müssen Sie noch das URL-Mapping, die Ansicht und die Vorlage schreiben, damit dies funktioniert!

Sie können auch andere beliebige Methoden definieren und von Ihrem Code oder Ihren Vorlagen aufrufen (vorausgesetzt, sie nehmen keine Parameter entgegen).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie sie verwenden, um Einträge zu erstellen, zu aktualisieren oder zu löschen, und um Abfragen auszuführen, um alle Einträge oder bestimmte Teilmengen von Einträgen zu erhalten. Wir zeigen Ihnen, wie das im Tutorial funktioniert, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellung und Änderung von Einträgen

Um einen Eintrag zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Create a new record using the model's constructor.
record = MyModelName(my_field_name="Instance #1")

# Save the object into the database.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Eintrag automatisch eines zugewiesen, mit dem Feldnamen `id`. Sie könnten dieses Feld nach dem Speichern des oben genannten Eintrags abfragen, und es hätte den Wert 1.

Sie können auf die Felder dieses neuen Eintrags mit der Punktsyntax zugreifen und deren Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Access model field values using Python attributes.
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# Change record by modifying the fields, then calling save().
record.my_field_name = "New Instance Name"
record.save()
```

#### Suche nach Einträgen

Sie können nach Einträgen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt von der Basisklasse).

> [!NOTE]
> Das Erklären, wie man nach Einträgen mit "abstrakten" Modell- und Feldnamen sucht, kann ein wenig verwirrend sein. In der folgenden Diskussion beziehen wir uns auf ein `Book`-Modell mit `title`- und `genre`-Feldern, wobei Genre auch ein Modell mit einem einzigen `name`-Feld ist.

Wir können alle Einträge für ein Modell als `QuerySet` abrufen, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein iterierbares Objekt, was bedeutet, dass es eine Anzahl von Objekten enthält, durch die wir iterieren/gehen können.

```python
all_books = Book.objects.all()
```

Die `filter()`-Methode von Django ermöglicht es uns, das zurückgegebene `QuerySet` so zu filtern, dass ein bestimmtes **Text**- oder **Zahlen**-Feld bestimmten Kriterien entspricht. Um beispielsweise nach Büchern zu filtern, die "wild" im Titel enthalten, und diese zu zählen, könnten wir Folgendes tun:

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die abgeglichen werden sollen, und die Art des Abgleichs werden im Filter-Parameter-Namen definiert, wobei das Format: `field_name__match_type` verwendet wird (beachten Sie den _doppelten Unterstrich_ zwischen `title` und `contains` oben). Oben filtern wir `title` mit einem Groß-/Kleinschreibungs-abgleich. Es gibt viele andere Arten von Abgleichen, die Sie durchführen können: `icontains` (Groß-/Kleinschreibungs-unabhängig), `iexact` (Groß-/Kleinschreibungs-unabhängiger exakter Abgleich), `exact` (Groß-/Kleinschreibungsabhängiger exakter Abgleich) und `in`, `gt` (größer als), `startswith` usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In manchen Fällen müssen Sie auf einem Feld filtern, das eine eins-zu-viele-Beziehung zu einem anderen Modell definiert (z. B. ein `ForeignKey`). In diesem Fall können Sie mit zusätzlichen doppelten Unterstrichen auf Felder im zugehörigen Modell "indizieren".
Um also zum Beispiel nach Büchern mit einem bestimmten Genremuster zu filtern, müssen Sie über das Genre-Feld auf den `name`-Feld zugreifen, wie unten gezeigt:

```python
# Will match on: Fiction, Science fiction, non-fiction etc.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um durch beliebig viele Ebenen von Beziehungen (`ForeignKey`/`ManyToManyField`) zu navigieren.
> Zum Beispiel könnte ein `Book`, das verschiedene Typen hat, die durch eine weitere "cover"-Beziehung definiert sind, einen Parameternamen haben: `type__cover__name__exact='hard'`.

Es gibt noch viel mehr, das Sie mit Abfragen tun können, einschließlich Rückwärtssuchen von verwandten Modellen, Verkettungsfilter, Zurückgeben eines kleineren Satzes von Werten usw. Weitere Informationen finden Sie unter [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Die Boilerplate am oberen Rand der Seite importiert das _models_ Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben.

```python
from django.db import models

# Create your models here.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn am Ende Ihrer `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern — zum Beispiel, ob es sich um Belletristik oder Sachliteratur, Romantik oder Militärgeschichte handelt.
Wie bereits erwähnt, haben wir das Genre als Modell und nicht als freien Text oder Auswahl aus einer Liste erstellt, damit die möglichen Werte über die Datenbank und nicht fest codiert verwaltet werden können.

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

Das Modell hat ein einziges `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und enthält einen `help_text`).
Wir haben dieses Feld eindeutig gemacht (`unique=True`), weil es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des Genres zurückgibt, der durch einen bestimmten Datensatz definiert wird. Es wurde kein wortreicher Name definiert, sodass das Feldetikett `Name` lauten wird, wenn es in Formularen verwendet wird.
Dann deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir ein URL-Mapping definieren, das den Namen `genre-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

`unique=True` auf dem obigen Feld verhindert, dass Genres mit _exakt_ demselben Namen erstellt werden, aber nicht Variationen wie "fantasy", "Fantasy" oder sogar "FaNtAsY".
Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints) Option auf den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der Kleinbuchstabe des Werts im `name`-Feld in der Datenbank eindeutig sein muss, und die `violation_error_message`-Zeichenfolge anzuzeigen, wenn dies nicht der Fall ist.
Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren.
Weitere Informationen finden Sie im [Constraints Reference](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower).

### Buchmodell

Kopieren Sie das `Book`-Modell unten und fügen Sie es erneut unten in Ihre Datei ein. Das `Book`-Modell repräsentiert alle Informationen über ein verfügbares Buch in einem allgemeinen Sinne, aber nicht eine bestimmte physische "Instanz" oder "Kopie", die zum Verleih verfügbar ist.

Das Modell verwendet ein `CharField`, um den `title` und die `isbn` des Buches darzustellen.
Für `isbn`, beachten Sie, wie der erste unbenannte Parameter explizit das Etikett als "ISBN" festlegt (andernfalls würde es standardmäßig "Isbn" lauten). Wir setzen auch den Parameter `unique` auf `True`, um sicherzustellen, dass alle Bücher eine einzigartige ISBN haben (der eindeutige Parameter macht den Feldwert in einer Tabelle weltweit einzigartig).
Im Gegensatz zur `isbn` (und dem Genrenamen) ist `title` nicht auf einzigartig festgelegt, da es möglich ist, dass verschiedene Bücher denselben Namen haben.
Das Modell verwendet `TextField` für die `summary`, weil dieser Text ziemlich lang sein kann.

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

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor haben wird, aber ein Autor kann viele Bücher haben (in der Praxis könnte ein Buch mehrere Autoren haben, aber nicht in dieser Implementierung!)

In beiden Feldtypen wird die verwandte Modellklasse als erster unbenannter Parameter mithilfe entweder der Modellklasse oder eines Strings mit dem Namen des verwandten Modells deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse in dieser Datei noch nicht definiert wurde, bevor sie referenziert wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was der Datenbank erlaubt, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, wodurch verhindert wird, dass der zugeordnete Autor des Buches gelöscht wird, wenn es von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wurde, dieses Buch auch gelöscht würde! Wir verwenden `RESTRICT` hier, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch ihn verwendet, oder `SET_NULL`, um den Autor des Buches auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, indem das `title`-Feld des Buches verwendet wird, um einen `Book`-Datensatz darzustellen. Die letzte Methode `get_absolute_url()` gibt eine URL zurück, die verwendet werden kann, um einen Detaildatensatz für dieses Modell zuzugreifen (wir werden ein URL-Mapping definieren müssen, das den Namen `book-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

### BookInstance-Modell

Kopieren Sie als Nächstes das `BookInstance`-Modell (unten gezeigt) unter den anderen Modellen. Der `BookInstance` repräsentiert eine spezifische Kopie eines Buches, das jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden werden Ihnen jetzt bekannt vorkommen. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT` um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einem `BookInstance` referenziert wird.
- `CharField`, um das Imprint (spezifische Ausgabe) des Buches darzustellen.

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

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell zu setzen.
  Diese Art von Feld weist jedem Exemplar einen weltweit eindeutigen Wert zu (eine für jedes Buch, das man in der Bibliothek finden kann).
- `DateField` wird für das `due_back` Datum verwendet (an dem das Buch nach dem Ausleihen oder in der Wartung verfügbar sein soll). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modellmetadaten (`Class Meta`) verwenden dieses Feld, um Aufzeichnungen bei einer Abfrage zu sortieren.
- `status` ist ein `CharField` das eine Auswahl-/Auswahlliste definiert. Wie Sie sehen, definieren wir ein Tupel, das Tupel aus Schlüssel-Wert-Paaren enthält, und übergeben es an das choices-Argument. Der Wert in einem Schlüssel/Werte-Paar ist ein Anzeige-Wert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt ist. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst nicht verfügbar erstellt werden, bevor sie in die Regale gelangen.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt mithilfe einer Kombination aus seiner einzigartigen ID und dem Titel des zugehörigen `Book`.

> [!NOTE]
> Ein bisschen Python:
>
> - Ab Python 3.6 können Sie die string-Interpolationssyntax (auch bekannt als f-strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials haben wir eine [formatierte Zeichenfolge](https://peps.python.org/pep-3101/) Syntax verwendet, die auch eine gültige Möglichkeit zur Formatierung von Zeichenfolgen in Python ist (z. B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autoren-Modell

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

Alle der Felder/Methoden sollten Ihnen nun bekannt sein. Das Modell definiert einen Autor als eine Person, die einen Vornamen, einen Nachnamen sowie Geburts- und Todesdaten (beide optional) hat. Es gibt an, dass standardmäßig die `__str__()` den Namen in _Nachname_, _Vorname_ Reihenfolge zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail` URL-Abbildung um, um die URL zum Anzeigen eines einzelnen Autors zu erhalten.

## Datenbankmigrationen erneut ausführen

Alle Ihre Modelle wurden nun erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie zu Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Wohltäter spendet eine Anzahl neuer Bücher, die in einer anderen Sprache (zum Beispiel Farsi) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten auf unserer Bibliotheks-Website repräsentiert werden und sie dann den Modellen hinzuzufügen.

Einige Überlegungen:

- Sollte "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt assoziiert werden?
- Sollten die verschiedenen Sprachen durch ein Modell, ein freies Textfeld oder eine hart codierte Auswahl-Liste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, was wir für unser Projekt auf [GitHub](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden und dann diese Informationen genutzt, um geeignete Modelle für die _LocalLibrary_ Website zu entwerfen und zu implementieren.

An diesem Punkt machen wir einen kurzen Abstecher von der Erstellung der Seite und werfen einen Blick auf die _Django-Administrationsseite_. Diese Seite ermöglicht es uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann verwenden können, um sie mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzuzeigen.

## Siehe auch

- [Schreiben Ihrer ersten Django-App, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Erstellen von Abfragen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet API Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
