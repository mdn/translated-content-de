---
title: "Django-Tutorial Teil 3: Verwendung von Modellen"
slug: Learn/Server-side/Django/Models
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}

Dieser Artikel zeigt, wie Sie Modelle für die LocalLibrary-Website definieren können. Er erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Server-side/Django/skeleton_website">Django-Tutorial Teil 2: Erstellen einer Grundstruktur für eine Website</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          In der Lage sein, Ihre eigenen Modelle zu entwerfen und zu erstellen und die Felder dabei angemessen zu wählen.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Django-Webanwendungen greifen auf Daten zu und verwalten sie durch Python-Objekte, die als Modelle bezeichnet werden. Modelle definieren die _Struktur_ gespeicherter Daten, einschließlich der Feld_typen_ und möglicherweise auch ihrer Maximalgröße, Standardwerte, Auswahlmöglichkeiten für Listen, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine von mehreren als Teil Ihrer Projekteinstellungen wählen. Sobald Sie festgelegt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr kommunizieren – Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die gesamte schwierige Aufgabe der Kommunikation mit der Datenbank für Sie.

Dieses Tutorial zeigt, wie die Modelle für das Beispiel der [LocalLibrary-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) definiert und darauf zugegriffen wird.

## Entwurf der LocalLibrary-Modelle

Bevor Sie damit beginnen, die Modelle zu codieren, lohnt es sich, ein paar Minuten darüber nachzudenken, welche Daten wir speichern müssen und welche Beziehungen zwischen den verschiedenen Objekten bestehen.

Wir wissen, dass wir Informationen über Bücher (Titel, Zusammenfassung, Autor, geschriebene Sprache, Kategorie, ISBN) speichern müssen und dass wir möglicherweise mehrere Kopien verfügbar haben (mit weltweit eindeutiger ID, Verfügbarkeitsstatus usw.). Möglicherweise müssen wir mehr Informationen über den Autor speichern als nur seinen Namen, und es könnte mehrere Autoren mit denselben oder ähnlichen Namen geben. Wir möchten in der Lage sein, Informationen basierend auf Buchtitel, Autor, geschriebener Sprache und Kategorie zu sortieren.

Beim Entwerfen Ihrer Modelle ist es sinnvoll, für jedes "Objekt" (eine Gruppe verwandter Informationen) ein separates Modell zu verwenden. In diesem Fall sind die offensichtlichen Objekte Bücher, Buchinstanzen und Autoren.

Sie könnten auch Modelle verwenden, um Auswahloptionen darzustellen (z.B. wie eine Dropdown-Liste von Optionen), anstatt die Optionen direkt in die Website einzucodieren – dies wird empfohlen, wenn nicht alle Optionen im Voraus bekannt sind oder sich ändern könnten. Offensichtliche Modellkandidaten in diesem Fall sind das Buchgenre (z.B. Science Fiction, französische Poesie usw.) und die Sprache (Englisch, Französisch, Japanisch).

Sobald wir uns für unsere Modelle und Felder entschieden haben, müssen wir über die Beziehungen nachdenken. Django ermöglicht es Ihnen, Beziehungen zu definieren, die eins zu eins (`OneToOneField`), eins zu viele (`ForeignKey`) und viele zu viele (`ManyToManyField`) sind.

Vor diesem Hintergrund zeigt das UML-Associationsdiagramm unten die Modelle, die wir in diesem Fall definieren werden (als Kästen).

![LocalLibrary Model UML mit fester Autor-Multiplikation innerhalb der Buchklasse](local_library_model_uml.svg)

Wir haben Modelle für das Buch (die allgemeinen Details des Buches), die Buchinstanz (den Status spezifischer physischer Kopien des Buches, die im System verfügbar sind) und den Autor erstellt. Wir haben auch beschlossen, ein Modell für das Genre zu haben, damit Werte über die Admin-Oberfläche erstellt/ausgewählt werden können. Wir haben uns entschieden, kein Modell für den `BookInstance:status` zu haben – wir haben die Werte (`LOAN_STATUS`) festgelegt, da wir nicht erwarten, dass sich diese ändern. Innerhalb jedes Kastens sehen Sie den Modellnamen, die Feldnamen und -typen sowie die Methoden und deren Rückgabetypen.

Das Diagramm zeigt auch die Beziehungen zwischen den Modellen, einschließlich ihrer _Multiplikationen_. Die Multiplikationen sind die Zahlen im Diagramm, die die Zahlen (maximal und minimal) jedes Modells in der Beziehung anzeigen. Zum Beispiel zeigt die Verbindungslinie zwischen den Kästen, dass Buch und Genre verwandt sind. Die Zahlen in der Nähe des Genre-Modells zeigen, dass ein Buch ein oder mehrere Genres haben muss (so viele wie Sie möchten), während die Zahlen am anderen Ende der Linie neben dem Buchmodell anzeigen, dass ein Genre null oder viele zugehörige Bücher haben kann.

> [!NOTE]
> Der nächste Abschnitt bietet eine grundlegende Einführung, die erklärt, wie Modelle definiert und verwendet werden. Während Sie ihn lesen, überlegen Sie, wie wir jedes der Modelle im obigen Diagramm konstruieren werden.

## Modellgrundlagen

Dieser Abschnitt bietet einen kurzen Überblick darüber, wie ein Modell definiert wird und einige der wichtigeren Felder und Feldargumente.

### Modelldefinition

Modelle werden normalerweise in der **models.py**-Datei einer Anwendung definiert. Sie werden als Unterklassen von `django.db.models.Model` implementiert und können Felder, Methoden und Metadaten enthalten. Der untenstehende Codeausschnitt zeigt ein „typisches“ Modell mit dem Namen `MyModelName`:

```python
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """Eine typische Klasse, die ein Modell definiert, abgeleitet von der Modellklasse."""

    # Felder
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadaten
    class Meta:
        ordering = ['-my_field_name']

    # Methoden
    def get_absolute_url(self):
        """Gibt die URL zurück, um auf eine bestimmte Instanz von MyModelName zuzugreifen."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String zur Darstellung des MyModelName-Objekts (im Admin-Bereich usw.)."""
        return self.my_field_name
```

In den folgenden Abschnitten werden wir die einzelnen Merkmale des Modells detailliert erkunden:

#### Felder

Ein Modell kann eine beliebige Anzahl von Feldern eines beliebigen Typs haben – jedes davon repräsentiert eine Datenspalte, die wir in einer unserer Datenbanktabellen speichern möchten. Jeder Datenbankdatensatz (Zeile) besteht aus einem Wert jedes Feldes. Lassen Sie uns das folgende Beispiel betrachten:

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

Unser obiges Beispiel hat ein einzelnes Feld namens `my_field_name`, vom Typ `models.CharField` – was bedeutet, dass dieses Feld alphanumerische Zeichen enthalten wird. Die Feldtypen werden unter Verwendung spezieller Klassen zugewiesen, die den Typ des Datensatzes bestimmen, der verwendet wird, um die Daten in der Datenbank zu speichern, sowie die Validierungskriterien, die angewendet werden, wenn Werte aus einem HTML-Formular empfangen werden (d.h., was einen gültigen Wert darstellt). Die Feldtypen können auch Argumente übernehmen, die weiter spezifizieren, wie das Feld gespeichert oder verwendet werden kann. In diesem Fall geben wir unserem Feld zwei Argumente:

- `max_length=20` — Gibt an, dass die maximale Länge eines Wertes in diesem Feld 20 Zeichen beträgt.
- `help_text='Enter field documentation'` — Hilfetext, der in einem Formular angezeigt werden kann, um den Benutzern zu helfen, zu verstehen, wie das Feld verwendet wird.

Der Feldname wird verwendet, um darauf in Abfragen und Vorlagen zu verweisen. Felder haben auch eine Bezeichnung, die mit dem `verbose_name`-Argument angegeben wird (mit einem Standardwert von `None`). Wenn `verbose_name` nicht gesetzt ist, wird die Bezeichnung aus dem Feldnamen erstellt, indem alle Unterstriche durch ein Leerzeichen ersetzt und der erste Buchstabe großgeschrieben wird (z.B. hätte das Feld `my_field_name` eine Standardbezeichnung von _My field name_, wenn es in Formularen verwendet wird).

Die Reihenfolge, in der Felder deklariert werden, wirkt sich auf ihre Standardreihenfolge aus, wenn ein Modell in einem Formular (z.B. im Admin-Bereich) gerendert wird, obwohl dies überschrieben werden kann.

##### Häufige Feldargumente

Die folgenden häufigen Argumente können bei der Deklaration vieler/der meisten der unterschiedlichen Feldtypen verwendet werden:

- [help_text](https://docs.djangoproject.com/en/5.0/ref/models/fields/#help-text): Bietet eine Textbezeichnung für HTML-Formulare (z.B. im Admin-Bereich), wie oben beschrieben.
- [verbose_name](https://docs.djangoproject.com/en/5.0/ref/models/fields/#verbose-name): Ein menschenlesbarer Name für das Feld, der in Feldbezeichnungen verwendet wird. Wenn nicht spezifiziert, leitet Django den Standard-Verbose-Namen aus dem Feldnamen ab.
- [default](https://docs.djangoproject.com/en/5.0/ref/models/fields/#default): Der Standardwert für das Feld. Dies kann ein Wert oder ein aufrufbares Objekt sein, in diesem Fall wird das Objekt jedes Mal aufgerufen, wenn ein neuer Datensatz erstellt wird.
- [null](https://docs.djangoproject.com/en/5.0/ref/models/fields/#null): Wenn `True`, speichert Django leere Werte als `NULL` in der Datenbank für Felder, bei denen dies zutreffend ist (ein `CharField` speichert stattdessen eine leere Zeichenkette). Der Standardwert ist `False`.
- [blank](https://docs.djangoproject.com/en/5.0/ref/models/fields/#blank): Wenn `True`, darf das Feld in Ihren Formularen leer bleiben. Der Standardwert ist `False`, was bedeutet, dass Djangos Formularvalidierung Sie zwingt, einen Wert einzugeben. Dies wird häufig zusammen mit `null=True` verwendet, da, wenn Sie leere Werte erlauben möchten, Sie auch möchten, dass die Datenbank in der Lage ist, sie entsprechend darzustellen.
- [choices](https://docs.djangoproject.com/en/5.0/ref/models/fields/#choices): Eine Gruppe von Auswahlmöglichkeiten für dieses Feld. Wenn dies angegeben wird, ist das zugehörige Standardformular-Widget ein Auswahlfeld mit diesen Auswahlmöglichkeiten anstelle des Standard-Textfeldes.
- [unique](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique): Wenn `True`, stellt sicher, dass der Feldwert in der gesamten Datenbank einzigartig ist. Dies kann verwendet werden, um eine Duplizierung von Feldern zu verhindern, die nicht die gleichen Werte haben dürfen. Der Standardwert ist `False`.
- [primary_key](https://docs.djangoproject.com/en/5.0/ref/models/fields/#primary-key): Wenn `True`, wird das aktuelle Feld als Primärschlüssel für das Modell festgelegt (ein Primärschlüssel ist eine spezielle Datenbankspalte, die eindeutig alle verschiedenen Tabellendatensätze identifiziert). Wenn kein Feld als Primärschlüssel angegeben ist, fügt Django automatisch ein Feld für diesen Zweck hinzu. Die Art der automatisch erstellten Primärschlüsselfelder kann für jede App in [`AppConfig.default_auto_field`](https://docs.djangoproject.com/en/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) oder global in der [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/en/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) Einstellungen spezifiziert werden.

  > [!NOTE]
  > Apps, die mit **manage.py** erstellt wurden, setzen den Typ des Primärschlüssels auf ein [BigAutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#bigautofield).
  > Dies können Sie in der local library **catalog/apps.py** Datei sehen:
  >
  > ```py
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

Es gibt viele andere Optionen – Sie können die [vollständige Liste der Feldoptionen hier einsehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-options).

##### Häufig verwendete Feldtypen

Die folgende Liste beschreibt einige der häufig verwendeten Feldtypen.

- [CharField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.CharField) wird verwendet, um kurze bis mittellange Zeichenfolgen mit fester Länge zu definieren. Sie müssen die `max_length` der zu speichernden Daten angeben.
- [TextField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.TextField) wird für große zeichenfolgen beliebiger Länge verwendet. Sie können eine `max_length` für das Feld angeben, aber dies wird nur verwendet, wenn das Feld in Formularen angezeigt wird (es wird nicht auf Datenbankebene durchgesetzt).
- [IntegerField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#django.db.models.IntegerField) ist ein Feld zum Speichern von Ganzzahlen (ganzen Zahlen) und zur Validierung eingegebener Werte als Ganzzahlen in Formularen.
- [DateField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datefield) und [DateTimeField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#datetimefield) werden verwendet, um Datum und Zeitinformationen zu speichern/darzustellen (als Python `datetime.date` und `datetime.datetime` Objekte). Diese Felder können zusätzlich die (gegenseitig ausschließenden) Parameter `auto_now=True` (um das Feld bei jedem Speichern des Modells auf das aktuelle Datum zu setzen), `auto_now_add` (um das Datum nur beim Erstellen des Modells zum ersten Mal zu setzen) und `default` (um ein Standarddatum zu setzen, das vom Benutzer überschrieben werden kann) deklarieren.
- [EmailField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#emailfield) wird verwendet, um E-Mail-Adressen zu speichern und zu validieren.
- [FileField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#filefield) und [ImageField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#imagefield) werden verwendet, um Dateien bzw. Bilder hochzuladen (das `ImageField` fügt zusätzliche Validierung hinzu, dass die hochgeladene Datei ein Bild ist). Diese Felder haben Parameter, um festzulegen, wie und wo die hochgeladenen Dateien gespeichert werden.
- [AutoField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#autofield) ist ein spezieller Typ von `IntegerField`, der automatisch inkrementiert. Ein Primärschlüssel dieses Typs wird Ihrem Modell automatisch hinzugefügt, wenn Sie keinen explizit angeben.
- [ForeignKey](https://docs.djangoproject.com/en/5.0/ref/models/fields/#foreignkey) wird verwendet, um eine eins-zu-viele Beziehung zu einem anderen Datenbankmodell anzugeben (z.B. ein Auto hat einen Hersteller, aber ein Hersteller kann viele Autos herstellen). Die "eins"-Seite der Beziehung ist das Modell, das den "Schlüssel" enthält (Modelle, die einen "Foreign Key" haben, der auf diesen "Schlüssel" verweist, befinden sich auf der "viele"-Seite einer solchen Beziehung).
- [ManyToManyField](https://docs.djangoproject.com/en/5.0/ref/models/fields/#manytomanyfield) wird verwendet, um eine viele-zu-viele Beziehung anzugeben (z.B. ein Buch kann mehrere Genres haben, und jedes Genre kann mehrere Bücher enthalten). In unserer Bibliotheks-App werden diese sehr ähnlich zu `ForeignKeys` verwendet, aber sie können auf kompliziertere Weise verwendet werden, um die Beziehungen zwischen Gruppen zu beschreiben. Diese Felder haben den Parameter `on_delete`, um festzulegen, was passiert, wenn der zugehörige Datensatz gelöscht wird (z.B. würde ein Wert von `models.SET_NULL` den Wert auf `NULL` setzen).

Es gibt viele andere Feldtypen, einschließlich Felder für verschiedene Zahlentypen (große Ganzzahlen, kleine Ganzzahlen, Gleitkommazahlen), Booleans, URLs, Slugs, einzigartige IDs und andere "zeitbezogene" Informationen (Dauer, Zeit usw.). Sie können die [vollständige Liste hier sehen](https://docs.djangoproject.com/en/5.0/ref/models/fields/#field-types).

#### Metadaten

Sie können modellbezogene Metadaten für Ihr Modell deklarieren, indem Sie `class Meta` deklarieren, wie gezeigt.

```python
class Meta:
    ordering = ['-my_field_name']
```

Eine der nützlichsten Funktionen dieser Metadaten ist es, die _Standardreihenfolge_ der zurückgegebenen Datensätze zu steuern, wenn Sie den Modelltyp abfragen. Sie tun dies, indem Sie die Übereinstimmungsreihenfolge in einer Liste von Feldnamen an das `ordering`-Attribut angeben, wie oben gezeigt. Die Sortierung richtet sich nach dem Feldtyp (Zeichenfelder werden alphabetisch sortiert, Datumsfelder werden chronologisch sortiert). Wie oben gezeigt, können Sie den Feldnamen mit einem Minuszeichen (-) voranstellen, um die Sortierreihenfolge umzukehren.

Als Beispiel, wenn wir uns entscheiden würden, Bücher standardmäßig so zu sortieren:

```python
ordering = ['title', '-pubdate']
```

würden die Bücher alphabetisch nach Titel sortiert, von A-Z, und dann nach dem Veröffentlichungsdatum innerhalb jedes Titels, vom neuesten zum ältesten.

Ein weiteres häufiges Attribut ist `verbose_name`, ein ausführlicher Name für die Klasse in der Einzahl- und Pluralform:

```python
verbose_name = 'BessererName'
```

Klassenmetadaten können verwendet werden, um neue "Zugriffsberechtigungen" für das Modell zu erstellen und anzuwenden (Standardberechtigungen werden automatisch angewendet), eine Sortierung basierend auf einem anderen Feld zu ermöglichen, [Einschränkungen](https://docs.djangoproject.com/en/5.0/ref/models/constraints/) für mögliche Werte der speicherbaren Daten zu definieren oder zu erklären, dass die Klasse "abstrakt" ist (eine Basisklasse, für die Sie keine Datensätze erstellen können und von der stattdessen abgeleitet wird, um andere Modelle zu erstellen).

Viele der anderen Metadatenoptionen steuern, welche Datenbank für das Modell verwendet werden muss und wie die Daten gespeichert werden (diese sind wirklich nur nützlich, wenn Sie ein Modell zu einer bestehenden Datenbank zuordnen müssen).

Die vollständige Liste der Metadatenoptionen finden Sie hier: [Model metadata options](https://docs.djangoproject.com/en/5.0/ref/models/options/) (Django-Dokumentation).

#### Methoden

Ein Modell kann auch Methoden haben.

**Minimal sollten Sie in jedem Modell die Standard-Python-Klassenmethode `__str__()` definieren, um einen menschenlesbaren String für jedes Objekt zurückzugeben.** Dieser String wird verwendet, um einzelne Datensätze in der Administrationsoberfläche (und überall sonst, wo Sie auf eine Modellinstanz verweisen müssen) darzustellen. Oft wird dies ein Titel- oder Namensfeld aus dem Modell zurückgeben.

```python
def __str__(self):
    return self.my_field_name
```

Eine weitere gängige Methode, die in Django-Modellen enthalten ist, ist `get_absolute_url()`, die eine URL zum Anzeigen von einzelnen Modelldatensätzen auf der Website zurückgibt (wenn Sie diese Methode definieren, fügt Django automatisch eine „Auf Seite anzeigen“-Schaltfläche zu den Datensatzbearbeitungsbildschirmen des Modells in der Administrationsoberfläche hinzu). Ein typisches Muster für `get_absolute_url()` ist unten gezeigt.

```python
def get_absolute_url(self):
    """Gibt die URL zurück, um auf eine bestimmte Instanz des Modells zuzugreifen."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> Angenommen, Sie werden URLs wie `/myapplication/mymodelname/2` verwenden, um einzelne Datensätze für Ihr Modell anzuzeigen (wobei „2“ die `id` für einen bestimmten Datensatz ist), müssen Sie einen URL-Mapper erstellen, um die Antwort und die ID an eine „Modell-Detailansicht“ weiterzuleiten (die die Arbeit zum Anzeigen des Datensatzes durchführt). Die obenstehende `reverse()`-Funktion ist in der Lage, Ihren URL-Mapper umzukehren (in diesem Fall mit dem Namen _'model-detail-view'_), um eine URL im richtigen Format zu erstellen.
>
> Um dies zum Funktionieren zu bringen, müssen Sie natürlich noch die URL-Zuordnung, die Ansicht und die Vorlage schreiben!

Sie können auch alle anderen gewünschten Methoden definieren und sie aus Ihrem Code oder Vorlagen aufrufen (vorausgesetzt, sie haben keine Parameter).

### Modellverwaltung

Sobald Sie Ihre Modellklassen definiert haben, können Sie diese verwenden, um Datensätze zu erstellen, zu aktualisieren oder zu löschen, und um Abfragen durchzuführen, um alle Datensätze oder bestimmte Teilmengen von Datensätzen abzurufen. Wir werden Ihnen zeigen, wie das geht, wenn wir unsere Ansichten definieren, aber hier ist eine kurze Zusammenfassung.

#### Erstellen und Ändern von Datensätzen

Um einen Datensatz zu erstellen, können Sie eine Instanz des Modells definieren und dann `save()` aufrufen.

```python
# Erstellen Sie einen neuen Datensatz mit dem Konstruktor des Modells.
record = MyModelName(my_field_name="Instanz #1")

# Speichern Sie das Objekt in der Datenbank.
record.save()
```

> [!NOTE]
> Wenn Sie kein Feld als `primary_key` deklariert haben, wird dem neuen Datensatz automatisch eines mit dem Feldnamen `id` zugewiesen. Sie könnten dieses Feld nach dem Speichern des obigen Datensatzes abfragen, und es hätte einen Wert von 1.

Sie können auf die Felder in diesem neuen Datensatz mit der Punktsyntax zugreifen und die Werte ändern. Sie müssen `save()` aufrufen, um geänderte Werte in der Datenbank zu speichern.

```python
# Auf Modellfeldwerte mit Python-Attributen zugreifen.
print(record.id) # sollte für den ersten Datensatz 1 zurückgeben.
print(record.my_field_name) # sollte 'Instanz #1' drucken

# Ändern des Datensatzes durch Modifizieren der Felder und dann Aufrufen von save().
record.my_field_name = "Neuer Instanzname"
record.save()
```

#### Suchen nach Datensätzen

Sie können nach Datensätzen suchen, die bestimmten Kriterien entsprechen, indem Sie das `objects`-Attribut des Modells verwenden (bereitgestellt durch die Basisklasse).

> [!NOTE]
> Zu erklären, wie nach Datensätzen mit "abstrakten" Modell- und Feldnamen gesucht wird, kann ein wenig verwirrend sein. In der nachstehenden Diskussion werden wir auf ein `Book`-Modell mit `title`- und `genre`-Feldern verweisen, wobei das Genre auch ein Modell mit einem einzelnen Feld `name` ist.

Wir können alle Datensätze für ein Modell als `QuerySet` erhalten, indem wir `objects.all()` verwenden. Das `QuerySet` ist ein iterierbares Objekt, das bedeutet, dass es eine Anzahl von Objekten enthält, die wir durchlaufen/iterieren können.

```python
all_books = Book.objects.all()
```

Die `filter()`-Methode von Django ermöglicht es uns, das zurückgegebene `QuerySet` zu filtern, um ein bestimmtes **Text**- oder **Zahlen**-Feld mit bestimmten Kriterien abzustimmen. Zum Beispiel, um nach Büchern zu filtern, die „wild“ im Titel enthalten, und dann zu zählen, könnten wir Folgendes tun.

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

Die Felder, die übereinstimmen sollen, und die Art der Übereinstimmung werden im Namen des Filterparameters definiert, indem das Format verwendet wird: `field_name__match_type` (beachten Sie den _Doppelunterstrich_ zwischen `title` und `contains` oben). Oben befinden wir uns in der Filterung von `title` bei einer Groß-/Kleinschreibung-beachteten Übereinstimmung. Es gibt viele andere Arten von Übereinstimmungen, die Sie durchführen können: `icontains` (Groß-/Kleinschreibung-unabhängig), `iexact` (Groß-/Kleinschreibung-unabhängige exakte Übereinstimmung), `exact` (Groß-/Kleinschreibung-beachtete exakte Übereinstimmung) und `in`, `gt` (größer als), `startswith`, usw. Die [vollständige Liste ist hier](https://docs.djangoproject.com/en/5.0/ref/models/querysets/#field-lookups).

In einigen Fällen müssen Sie auf einem Feld filtern, das eine eins-zu-viele Beziehung zu einem anderen Modell definiert (z.B. ein `ForeignKey`). In diesem Fall können Sie auf Felder im zugehörigen Modell mit zusätzlichen Doppelunterstrichen "indizieren". Um zum Beispiel auf Bücher mit einem spezifischen Genre-Muster zu filtern, müssen Sie auf das `name`-Feld durch das `genre`-Feld indizieren, wie unten gezeigt:

```python
# Wird übereinstimmen mit: Fiction, Science fiction, Non-Fiction usw.
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> Sie können Unterstriche (`__`) verwenden, um so viele Beziehungsebenen ( `ForeignKey`/`ManyToManyField`) zu navigieren, wie Sie möchten.
> Zum Beispiel könnte ein `Book`, das unterschiedliche Typen hatte, die unter Verwendung einer weiteren "cover"-Beziehung definiert wurden, einen Parameternamen haben: `type__cover__name__exact='hard'.`

Es gibt viel mehr, was Sie mit Abfragen tun können, einschließlich Rückwärtsabfragen von zugehörigen Modellen, Verkettung von Filtern, Rückgabe einer kleineren Menge von Werten usw. Für weitere Informationen siehe [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation).

## Definition der LocalLibrary-Modelle

In diesem Abschnitt beginnen wir mit der Definition der Modelle für die Bibliothek. Öffnen Sie `models.py` (in /django-locallibrary-tutorial/catalog/). Das Boilerplate oben auf der Seite importiert das _models_-Modul, das die Modell-Basisklasse `models.Model` enthält, von der unsere Modelle erben werden.

```python
from django.db import models

# Erstellen Sie hier Ihre Modelle.
```

### Genre-Modell

Kopieren Sie den unten gezeigten `Genre`-Modellcode und fügen Sie ihn unten in Ihre `models.py`-Datei ein. Dieses Modell wird verwendet, um Informationen über die Buchkategorie zu speichern – zum Beispiel, ob es sich um Belletristik oder Sachbücher, Romantik oder Militärgeschichte usw. handelt. Wie oben erwähnt, haben wir das Genre als Modell erstellt, anstatt als Text oder Auswahlliste, damit die möglichen Werte über die Datenbank verwaltet werden können, anstatt sie hart zu codieren.

```python
from django.urls import reverse # Wird in get_absolute_url() verwendet, um die URL für die angegebene ID zu erhalten

from django.db.models import UniqueConstraint # Erzwingt eindeutige Werte für Felder
from django.db.models.functions import Lower # Gibt den kleingeschriebenen Wert des Feldes zurück

class Genre(models.Model):
    """Modell, das ein Buchgenre repräsentiert."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Geben Sie ein Buchgenre ein (z.B. Science Fiction, französische Poesie usw.)"
    )

    def __str__(self):
        """Zeichenkette zur Darstellung des Modellobjekts."""
        return self.name

    def get_absolute_url(self):
        """Gibt die URL zurück, um auf eine bestimmte Genre-Instanz zuzugreifen."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre existiert bereits (Groß-/Kleinschreibung-unabhängiges Match)"
            ),
        ]
```

Das Modell hat ein einzelnes `CharField`-Feld (`name`), das verwendet wird, um das Genre zu beschreiben (dies ist auf 200 Zeichen begrenzt und hat einen `help_text`).
Wir haben dieses Feld als einzigartig (`unique=True`) festgelegt, da es nur einen Datensatz für jedes Genre geben sollte.

Nach dem Feld deklarieren wir eine `__str__()`-Methode, die den Namen des von einem bestimmten Datensatz definierten Genres zurückgibt. Es wurde kein `verbose_name` definiert, daher wird die Feldbezeichnung `Name` sein, wenn es in Formularen verwendet wird. Anschließend deklarieren wir die `get_absolute_url()`-Methode, die eine URL zurückgibt, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (damit dies funktioniert, müssen wir eine URL-Zuordnung mit dem Namen `genre-detail` definieren und eine zugehörige Ansicht und Vorlage definieren).

Das Festlegen von `unique=True` auf dem obigen Feld verhindert, dass Genres mit _exakt_ demselben Namen erstellt werden, aber nicht Varianten wie "fantasy", "Fantasy" oder sogar "FaNtAsY". Der letzte Teil der Modelldefinition verwendet eine [`constraints`](https://docs.djangoproject.com/en/5.0/ref/models/options/#constraints)-Option auf den [Metadaten](#metadaten) des Modells, um zu spezifizieren, dass der Kleinschreibweise des Wertes im `name`-Feld in der Datenbank eindeutig sein muss und die `violation_error_message`-Zeichenkette angezeigt wird, wenn dies nicht der Fall ist. Hier müssen wir nichts weiter tun, aber Sie können mehrere Einschränkungen gegen ein Feld oder Felder definieren. Weitere Informationen finden Sie im [Einschränkungs-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/constraints/), einschließlich [`UniqueConstraint()`](https://docs.djangoproject.com/en/5.0/ref/models/constraints/#uniqueconstraint) (und [`Lower()`](https://docs.djangoproject.com/en/5.0/ref/models/database-functions/#lower)).

### Buchmodell

Kopieren Sie das `Book`-Modell unten und fügen Sie es erneut unten in Ihre Datei ein. Das `Book`-Modell stellt alle Informationen über ein verfügbares Buch im Allgemeinen dar, jedoch nicht eine bestimmte physische „Instanz“ oder „Kopie“, die ausgeliehen werden kann.

Das Modell verwendet ein `CharField`, um den Buchtitel (`title`) und die ISBN (`isbn`) zu repräsentieren. Für das `isbn`-Feld beachten Sie, wie der erste unbenannte Parameter das Label explizit als "ISBN" festlegt (andernfalls würde es standardmäßig "Isbn" sein). Wir setzen auch den Parameter `unique` auf `true`, um sicherzustellen, dass alle Bücher eine einzigartige ISBN haben (der einzigartige Parameter macht den Feldwert in einer Tabelle weltweit einzigartig). Anders als bei der `isbn` (und dem Genre-Namen) ist der `title` nicht auf einzigartig gesetzt, da es möglich ist, dass verschiedene Bücher denselben Namen haben. Das Modell verwendet `TextField` für die `summary`, da dieser Text recht lang sein kann.

```python
class Book(models.Model):
    """Modell, das ein Buch repräsentiert (aber keine spezifische Kopie eines Buches)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Foreign Key verwendet, weil Buch kann nur einen Autor haben, aber Autoren können mehrere Bücher haben.
    # Autor als String statt als Objekt, weil es noch nicht in der Datei deklariert wurde.

    summary = models.TextField(
        max_length=1000, help_text="Geben Sie eine kurze Beschreibung des Buches ein")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Zeichen <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN-Nummer</a>')

    # ManyToManyField verwendet, weil Genre kann viele Bücher enthalten. Bücher können viele Genres abdecken.
    # Genre-Klasse wurde bereits definiert, sodass wir das Objekt oben angeben können.
    genre = models.ManyToManyField(
        Genre, help_text="Wählen Sie ein Genre für dieses Buch aus")

    def __str__(self):
        """Zeichenkette zur Darstellung des Modellobjekts."""
        return self.title

    def get_absolute_url(self):
        """Gibt die URL zurück, um auf einen Detaildatensatz für dieses Buch zuzugreifen."""
        return reverse('book-detail', args=[str(self.id)])
```

Das Genre ist ein `ManyToManyField`, sodass ein Buch mehrere Genres haben kann und ein Genre viele Bücher haben kann. Der Autor wird als `ForeignKey` deklariert, sodass jedes Buch nur einen Autor hat, aber ein Autor viele Bücher haben kann (in der Praxis könnte ein Buch mehrere Autoren haben, jedoch nicht in dieser Implementierung!)

In beiden Feldtypen wird die zugehörige Modellklasse als erster unbenannter Parameter entweder unter Verwendung der Modellklasse oder eines Strings mit dem Namen des zugehörigen Modells deklariert. Sie müssen den Namen des Modells als String verwenden, wenn die zugehörige Klasse noch nicht in dieser Datei definiert wurde, bevor sie referenziert wird! Die anderen interessanten Parameter im `author`-Feld sind `null=True`, was es der Datenbank ermöglicht, einen `Null`-Wert zu speichern, wenn kein Autor ausgewählt ist, und `on_delete=models.RESTRICT`, was verhindert, dass der dem Buch zugeordnete Autor gelöscht wird, wenn er von einem Buch referenziert wird.

> [!WARNING]
> Standardmäßig `on_delete=models.CASCADE`, was bedeutet, dass, wenn der Autor gelöscht wurde, auch dieses Buch gelöscht würde! Wir verwenden `RESTRICT` hier, aber wir könnten auch `PROTECT` verwenden, um zu verhindern, dass der Autor gelöscht wird, während ein Buch ihn verwendet oder `SET_NULL`, um den Buchautor auf `Null` zu setzen, wenn der Datensatz gelöscht wird.

Das Modell definiert auch `__str__()`, das das `title`-Feld des Buches verwendet, um einen `Book`-Datensatz darzustellen. Die letzte Methode, `get_absolute_url()`, gibt eine URL zurück, die verwendet werden kann, um auf einen Detaildatensatz für dieses Modell zuzugreifen (wir müssen eine URL-Zuordnung definieren, die den Namen `book-detail` hat, und eine zugehörige Ansicht und Vorlage definieren).

### BookInstance-Modell

Kopieren Sie als nächstes das `BookInstance`-Modell (unten gezeigt) unter die anderen Modelle. Das `BookInstance` repräsentiert eine spezifische Kopie eines Buches, die jemand ausleihen könnte, und enthält Informationen darüber, ob die Kopie verfügbar ist oder an welchem Datum sie zurückerwartet wird, "Imprint"- oder Versionsdetails und eine eindeutige ID für das Buch in der Bibliothek.

Einige der Felder und Methoden sollten Ihnen jetzt vertraut vorkommen. Das Modell verwendet:

- `ForeignKey`, um das zugehörige `Book` zu identifizieren (jedes Buch kann viele Kopien haben, aber eine Kopie kann nur ein `Book` haben). Der Schlüssel spezifiziert `on_delete=models.RESTRICT`, um sicherzustellen, dass das `Book` nicht gelöscht werden kann, während es von einer `BookInstance` referenziert wird.
- `CharField`, um den Imprint (spezifische Veröffentlichung) des Buches darzustellen.

```python
import uuid # Erforderlich für eindeutige Buchinstanzen

class BookInstance(models.Model):

    """Modell, das eine bestimmte Kopie eines Buches repräsentiert (d.h. die von der Bibliothek ausgeliehen werden kann)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Eindeutige ID für dieses spezielle Buch in der gesamten Bibliothek")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Wartung'),
        ('o', 'Ausgeliehen'),
        ('a', 'Verfügbar'),
        ('r', 'Reserviert'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Buchverfügbarkeit',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """Zeichenkette zur Darstellung des Modellobjekts."""
        return f'{self.id} ({self.book.title})'
```

Wir deklarieren zusätzlich einige neue Feldtypen:

- `UUIDField` wird für das `id`-Feld verwendet, um es als `primary_key` für dieses Modell festzulegen.
  Dieser Feldtyp weist jedem Exemplar einen weltweit eindeutigen Wert zu (einen für jedes Buch, das Sie in der Bibliothek finden können).
- `DateField` wird für das `due_back`-Datum verwendet (zu dem das Buch erwartet wird, dass es nach Ausleihe oder Wartung wieder verfügbar ist). Dieser Wert kann `blank` oder `null` sein (erforderlich, wenn das Buch verfügbar ist). Die Modell-Metadaten (`Class Meta`) verwenden dieses Feld, um Datensätze zu sortieren, wenn sie in einer Abfrage zurückgegeben werden.
- `status` ist ein `CharField`, das eine Auswahl/Auswahl-Liste definiert. Wie Sie sehen können, definieren wir ein Tupel, das aus Schlüssel-Wert-Paaren besteht, und übergeben es als choices-Argument. Der Wert in einem Schlüssel/Wert-Paar ist ein Anzeigewert, den ein Benutzer auswählen kann, während die Schlüssel die Werte sind, die tatsächlich gespeichert werden, wenn die Option ausgewählt wird. Wir haben auch einen Standardwert von 'm' (Wartung) festgelegt, da Bücher zunächst unverfügbar erstellt werden, bevor sie in die Regale genommen werden.

Die Methode `__str__()` repräsentiert das `BookInstance`-Objekt unter Verwendung einer Kombination aus seiner eindeutigen ID und dem zugehörigen Titel des `Book`.

> [!NOTE]
> Ein wenig Python:
>
> - Beginnend mit Python 3.6 können Sie die Zeichenketteninterpolationssyntax (auch bekannt als f-Strings) verwenden: `f'{self.id} ({self.book.title})'`.
> - In älteren Versionen dieses Tutorials verwendeten wir ein [formatierter String](https://peps.python.org/pep-3101/) Syntax, was auch eine gültige Möglichkeit ist, Zeichenketten in Python zu formatieren (z.B. `'{0} ({1})'.format(self.id,self.book.title)`).

### Autor-Modell

Kopieren Sie das `Author`-Modell (unten gezeigt) unter den bestehenden Code in **models.py**.

```python
class Author(models.Model):
    """Modell, das einen Autor repräsentiert."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Gestorben', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Gibt die URL zurück, um auf eine bestimmte Autorinstanz zuzugreifen."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """Zeichenkette zur Darstellung des Modellobjekts."""
        return f'{self.last_name}, {self.first_name}'
```

Alle Felder/Methoden sollten nun vertraut aussehen. Das Modell definiert einen Autor als jemand mit einem Vornamen, Nachnamen und Geburts- und Todesdaten (beide optional). Es spezifiziert, dass die `__str__()`-Methode den Namen standardmäßig in _Nachname, Vorname_-Reihenfolge zurückgibt. Die `get_absolute_url()`-Methode kehrt die `author-detail` URL-Zuordnung um, um die URL zum Anzeigen eines einzelnen Autors abzurufen.

## Führen Sie die Datenbankmigrationen erneut aus

Ihre Modelle wurden nun alle erstellt. Führen Sie jetzt Ihre Datenbankmigrationen erneut aus, um sie Ihrer Datenbank hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Sprachmodell — Herausforderung

Stellen Sie sich vor, ein lokaler Mäzen spendet eine Anzahl neuer Bücher, die in einer anderen Sprache (z.B. Farsi) geschrieben sind. Die Herausforderung besteht darin, herauszufinden, wie diese am besten in unserer Bibliotheks-Website dargestellt werden können, und sie dann den Modellen hinzuzufügen.

Einige Dinge, die Sie berücksichtigen sollten:

- Sollte die "Sprache" mit einem `Book`, `BookInstance` oder einem anderen Objekt verbunden sein?
- Sollten die unterschiedlichen Sprachen mit einem Modell, einem freien Textfeld oder einer fest kodierten Auswahlliste dargestellt werden?

Nachdem Sie sich entschieden haben, fügen Sie das Feld hinzu. Sie können sehen, wofür wir uns auf Github [hier](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py) entschieden haben.

Vergessen Sie nicht, dass Sie nach einer Änderung Ihres Modells erneut Ihre Datenbankmigrationen ausführen sollten, um die Änderungen hinzuzufügen.

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Zusammenfassung

In diesem Artikel haben wir gelernt, wie Modelle definiert werden, und diese Informationen dann verwendet, um entsprechende Modelle für die _LocalLibrary_-Website zu entwerfen und zu implementieren.

An diesem Punkt weichen wir kurz von der Erstellung der Site ab und werfen einen Blick auf die _Django-Administrationsseite_. Diese Seite ermöglicht uns, einige Daten zur Bibliothek hinzuzufügen, die wir dann mit unseren (noch zu erstellenden) Ansichten und Vorlagen anzeigen können.

## Siehe auch

- [Schreiben Ihrer ersten Django-Anwendung, Teil 2](https://docs.djangoproject.com/en/5.0/intro/tutorial02/) (Django-Dokumentation)
- [Abfragen erstellen](https://docs.djangoproject.com/en/5.0/topics/db/queries/) (Django-Dokumentation)
- [QuerySet-API-Referenz](https://docs.djangoproject.com/en/5.0/ref/models/querysets/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django/Admin_site", "Learn/Server-side/Django")}}
