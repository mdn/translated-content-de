---
title: "Django-Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 8a3a51913984501f9a932d35370e527acd2644a0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit dem Wachstum von Websites wird es schwieriger, diese manuell zu testen. Nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden komplexer. Eine kleine Änderung in einem Bereich kann andere Bereiche beeinflussen, sodass mehr Änderungen erforderlich sind, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn mehr Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme abzumildern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie _Unit-Tests_ Ihrer Website mit dem Testframework von Django automatisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis dafür erlangen, wie Unit-Tests für Django-basierte Websites geschrieben werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) verfügt derzeit über Seiten zur Anzeige von Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Datensätzen, wenn Sie die _Challenge_ im [Formulare-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann das manuelle Navigieren zu jeder Seite und das _oberflächliche_ Überprüfen, ob alles wie erwartet funktioniert, mehrere Minuten dauern. Mit Änderungen und Wachstum der Website wird die für das manuelle Überprüfen erforderliche Zeit nur noch steigen. Wenn wir so weitermachen würden, würden wir letztendlich die meiste Zeit mit Testen verbringen und nur sehr wenig Zeit mit der Verbesserung unseres Codes.

Automatisierte Tests können dieses Problem wirklich lösen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, auf einem viel detaillierteren Niveau testen können und jedes Mal genau die gleiche Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden, und wenn ein Test fehlschlägt, weisen sie genau darauf hin, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realistischer "Nutzer" Ihres Codes fungieren und zwingen Sie dazu, gründlich zu definieren und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft sind sie die Grundlage für Ihre Code-Beispiele und Dokumentation. Aus diesen Gründen beginnen einige Software-Entwicklungsprozesse mit der Definition und Implementierung von Tests, nach denen der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z. B. [testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests zur _LocalLibrary_ Website hinzugefügt werden.

### Testarten

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder aufgetreten ist.
- Integrationstests
  - : Überprüfen, wie Gruppen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests sind sich der erforderlichen Interaktionen zwischen den Komponenten bewusst, nicht jedoch unbedingt der internen Operationen jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website umfassen.

> [!NOTE]
> Andere gebräuchliche Testarten umfassen Black Box-, White Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Last- und Stresstests. Schauen Sie sie sich für weitere Informationen an.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von der HTTP-Ebenenanforderungsverarbeitung über Modellabfragen bis hin zur Formvalidierung und -verarbeitung sowie der Template-Darstellung.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) basieren. Trotz des Namens ist dieses Testframework sowohl für Unit- als auch für Integrationstests geeignet. Das Django-Framework fügt API-Methoden und Werkzeuge hinzu, um Web- und Django-spezifisches Verhalten zu testen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge zur [Verwendung verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), zum Beispiel können Sie das beliebte [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest_) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, dass die spezifische Funktionalität wie erwartet funktioniert (Tests verwenden "assert"-Methoden, um zu testen, dass Ausdrücke `True`- oder `False`-Werte zurückgeben oder dass zwei Werte gleich sind, usw.). Wenn Sie einen Testlauf starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, wobei in der Klasse definiertes gemeinsames Einrichtungs- und Abrüstungsverhalten gezeigt wird, wie unten dargestellt.

```python
class YourTestClass(TestCase):
    def setUp(self):
        # Setup run before every test method.
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
```

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der mit dem Code auf View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie mit dem vertraut sind, was Sie mit dieser Klasse tun können, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch nicht jede Bibliothek oder Funktionalität, die als Teil von Python oder Django bereitgestellt wird.

Nehmen Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, ob `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies von Django definiert wird (natürlich werden Sie diese Funktionalität in der Praxis während der Entwicklung unweigerlich testen). Sie müssen auch nicht testen, ob das `date_of_birth` als Datumsfeld validiert wurde, da dies wiederum in Django implementiert ist.

Sie sollten jedoch die für die Labels verwendeten Texte (_First name, Last name, Date of birth, Died_) und die Größe des für den Text reservierten Felds (_100 Zeichen_) überprüfen, da diese Teil Ihres Designs sind und in Zukunft gebrochen/geändert werden könnten.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return '%s, %s' % (self.last_name, self.first_name)
```

Ebenso sollten Sie überprüfen, ob die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie gewünscht funktionieren, da sie Ihr Code/Businesslogik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django `reverse()`-Methode ordnungsgemäß implementiert wurde. Was Sie testen, ist, dass die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser können feststellen, dass wir das Geburts- und Sterbedatum auf sinnvolle Werte einschränken und überprüfen möchten, dass der Tod nach der Geburt erfolgt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modellfelder und Modellvalidatoren definieren können, werden diese nur auf der Formularebene verwendet, wenn sie durch die `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss explizit aufgerufen werden.)

Mit dem im Hinterkopf können wir damit beginnen, zu betrachten, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, "was getestet werden soll", schauen wir uns zuerst kurz an, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [integrierte Testsuche](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Unittest-Moduls, die Tests im aktuellen Arbeitsverzeichnis in jeder Datei findet, die nach dem Muster **test\*.py** benannt ist. Vorausgesetzt, dass Sie die Dateien entsprechend benennen, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und alle anderen zu testenden Codearten zu haben. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Datei-Struktur wie oben in Ihrem _LocalLibrary_-Projekt gezeigt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies sagt Python, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelett-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [die Django-Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website). Es ist vollkommen "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie ordnungsgemäß testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei haben.
>
> Löschen Sie die Skelettdatei, da wir sie nicht brauchen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie eine Testklasse für jedes Modell/View/Formular hinzu, das Sie testen möchten, mit einzelnen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie eine separate Klasse haben, um einen bestimmten Anwendungsfall zu testen, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, ob ein Modelfeld ordnungsgemäß validiert wird, mit Funktionen zum Testen jedes möglichen Fehlerszenarios). Auch hier ist die Struktur ganz Ihnen überlassen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die folgende Testklasse am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse konstruiert, indem man von `TestCase` ableitet.

```python
class YourTestClass(TestCase):
    @classmethod
    def setUpTestData(cls):
        print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        print("setUp: Run once for every test method to set up clean data.")
        pass

    def test_false_is_false(self):
        print("Method: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Method: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Method: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

Die neue Klasse definiert zwei Methoden, die Sie für die Konfiguration vor dem Test verwenden können (z.B. um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testlaufs für die Klasseneinrichtung aufgerufen. Sie verwenden dies, um Objekte zu erstellen, die in keiner der Testmethoden geändert oder modifiziert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte einzurichten, die vom Test geändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbankbereinigung für Sie übernimmt.

Darunter haben wir eine Reihe von Testmethoden, die `assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`assertTrue`, `assertFalse`, `assertEqual`). Wenn die Bedingung nicht wie erwartet bewertet wird, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `assertTrue`, `assertFalse`, `assertEqual` sind Standardüberprüfungen, die von **unittest** bereitgestellt werden. Es gibt andere Standardüberprüfungen im Framework sowie [Django-spezifische Überprüfungen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umleitet (`assertRedirects`), um zu testen, ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Normalerweise sollten Sie keine **print()**-Funktionen in Ihre Tests einfügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Einrichtungsfunktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, um alle Tests auszuführen, ist die Verwendung des Befehls:

```bash
python3 manage.py test
```

Dies wird alle Dateien mit dem Muster **test\*.py** im aktuellen Verzeichnis finden und alle Tests ausführen, die mit geeigneten Basisklassen definiert sind (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit irgendwelche Tests). Standardmäßig berichten die Tests individuell nur über Testfehler, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler wie: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass Testing standardmäßig _collectstatic_ nicht ausführt und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu überwinden - die einfachste ist, _collectstatic_ auszuführen, bevor Sie die Tests ausführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Root-Verzeichnis von _LocalLibrary_ aus. Sie sollten eine Ausgabe wie die untenstehende sehen.

```bash
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to set up clean data.
Method: test_false_is_false.
setUp: Run once for every test method to set up clean data.
Method: test_false_is_true.
setUp: Run once for every test method to set up clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.tests_models.YourTestClass)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\GitHub\django_tmp\library_w_t_2\locallibrary\catalog\tests\tests_models.py", line 22, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.075s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Hier sehen wir, dass wir einen Testfehler hatten und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was man aus der obigen Testausgabe lernen kann, ist, dass sie viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse aufgerufen wird und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie wieder daran, dass Sie normalerweise diese Art von `print()` nicht in Ihre Tests einfügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen können und wie Sie steuern können, wie viele Informationen die Tests anzeigen.

### Weitere Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testlauf erhalten möchten, können Sie die _Verbosity_ ändern. Um beispielsweise die Testerfolge sowie Fehler aufzulisten (und eine ganze Menge Informationen darüber, wie die Test-Datenbank eingerichtet wird), können Sie die verbosity auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Level sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Beschleunigung der Tests

Wenn Ihre Tests unabhängig sind, können Sie diese auf einem Mehrprozessorsystem erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu den Paket(en), dem Modul, der `TestCase`-Unterklasse oder der Methode angeben:

```bash
# Run the specified module
python3 manage.py test catalog.tests

# Run the specified module
python3 manage.py test catalog.tests.test_models

# Run the specified class
python3 manage.py test catalog.tests.test_models.YourTestClass

# Run the specified method
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

### Weitere Optionen für den Test Runner

Der Test Runner bietet viele weitere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und die Ergebnisse über den Python-Logger zu erfassen.
Für weitere Informationen siehe die Django [Test Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test) Dokumentation.

## LocalLibrary-Tests

Jetzt, da wir wissen, wie man Tests ausführt und welche Dinge wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie noch tun können.

### Modelle

Wie oben erwähnt, sollten wir alles testen, was Teil unseres Designs ist oder von dem Code definiert wird, den wir geschrieben haben, jedoch nicht Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wurde.

Nehmen Sie zum Beispiel das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, denn obwohl wir die meisten nicht explizit spezifiziert haben, haben wir ein Design, das angibt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feldbezeichner ihre beabsichtigten Werte haben. Auch wenn wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, ist es sinnvoll, einen Test für diese Länge anzugeben, um sicherzustellen, dass es wie geplant implementiert wurde.

```python
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.last_name}, {self.first_name}'
```

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie eventuell vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zunächst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, wobei wir einen beschreibenden Namen verwenden, damit wir fehlerhafte Tests in der Testausgabe leicht identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autorobjekt zu erstellen, das wir verwenden, aber in keinem der Tests ändern werden.

```python
from django.test import TestCase

from catalog.models import Author

class AuthorModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Author.objects.create(first_name='Big', last_name='Bob')

    def test_first_name_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('first_name').verbose_name
        self.assertEqual(field_label, 'first name')

    def test_date_of_death_label(self):
        author = Author.objects.get(id=1)
        field_label = author._meta.get_field('date_of_death').verbose_name
        self.assertEqual(field_label, 'died')

    def test_first_name_max_length(self):
        author = Author.objects.get(id=1)
        max_length = author._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 100)

    def test_object_name_is_last_name_comma_first_name(self):
        author = Author.objects.get(id=1)
        expected_object_name = f'{author.last_name}, {author.first_name}'
        self.assertEqual(str(author), expected_object_name)

    def test_get_absolute_url(self):
        author = Author.objects.get(id=1)
        # This will also fail if the URLConf is not defined.
        self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Die Feldtests überprüfen, ob die Werte der Feldbezeichner (`verbose_name`) und die Größe der Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen dem gleichen Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Dinge zu beachten sind:

- Wir können den `verbose_name` nicht direkt über `author.first_name.verbose_name` abfragen, weil `author.first_name` ein _String_ ist (kein Handle auf das `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Felds zu erhalten und diese zu verwenden, um die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` statt `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe beim Ersten Ihnen mitteilt, was das Label tatsächlich war, was das Debuggen des Problems etwas einfacher macht.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Bezeichner sowie der Test für die Länge des `last_name`-Felds wurden ausgelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie den oben gezeigten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, ob der Objektname wie erwartet im "Nachname, Vorname"-Format erstellt wurde und ob die URL, die wir für ein `Author`-Element erhalten, wie erwartet ist.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEqual(str(author), expected_object_name)

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the URLConf is not defined.
    self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell wie im Modultutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death` Label wie unten gezeigt erhalten werden. Der Test schlägt fehl, da er geschrieben wurde, in der Erwartung, dass die Labeldefinition dem Django-Konvention folgt, die das erste Zeichen des Labels nicht kapitalisiert (Django tut dies für Sie).

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:\...\locallibrary\catalog\tests\test_models.py", line 32, in test_date_of_death_label
    self.assertEqual(field_label,'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

Dies ist ein sehr kleiner Fehler, aber er zeigt, wie das Schreiben von Tests alle Annahmen, die Sie möglicherweise getroffen haben, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**) in "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, also werden wir nicht weiter darüber diskutieren. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie zum Testen Ihrer Formulare ist die gleiche wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie kodiert haben oder was Ihr Design vorgibt, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieterbibliotheken.

Im Allgemeinen bedeutet dies, dass Sie überprüfen sollten, ob die Formulare die gewünschten Felder haben und ob diese mit den entsprechenden Labels und Hilfetexten angezeigt werden. Es ist nicht erforderlich zu überprüfen, ob Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und die Validierung erstellt) – das heißt, Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssten jedoch jede zusätzliche Validierung testen, die Sie erwarten, dass sie auf den Feldern durchgeführt wird, sowie alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten wir unser Formular zur Bucherneuerung. Dieses hat nur ein Feld für das Verlängerungsdatum, welches ein Label und einen Hilfetext hat, die wir überprüfen müssen.

```python
class RenewBookForm(forms.Form):
    """Form for a librarian to renew books."""
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Öffnen Sie unsere **/catalog/tests/test_forms.py** Datei und ersetzen Sie jeden vorhandenen Code durch den folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen damit, unser Formular und einige Python- und Django-Bibliotheken zu importieren, um Funktionen im Zusammenhang mit der Zeit zu testen. Dann deklarieren wir unsere Formulartestklasse auf die gleiche Weise wie bei Modellen, indem wir einen beschreibenden Namen für unsere `TestCase`-abgeleitete Testklasse verwenden.

```python
import datetime

from django.test import TestCase
from django.utils import timezone

from catalog.forms import RenewBookForm

class RenewBookFormTest(TestCase):
    def test_renew_form_date_field_label(self):
        form = RenewBookForm()
        self.assertTrue(form.fields['renewal_date'].label is None or form.fields['renewal_date'].label == 'renewal date')

    def test_renew_form_date_field_help_text(self):
        form = RenewBookForm()
        self.assertEqual(form.fields['renewal_date'].help_text, 'Enter a date between now and 4 weeks (default 3).')

    def test_renew_form_date_in_past(self):
        date = datetime.date.today() - datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_too_far_in_future(self):
        date = datetime.date.today() + datetime.timedelta(weeks=4) + datetime.timedelta(days=1)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertFalse(form.is_valid())

    def test_renew_form_date_today(self):
        date = datetime.date.today()
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())

    def test_renew_form_date_max(self):
        date = timezone.localtime() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

Die ersten beiden Funktionen testen, ob das Feld `label` und `help_text` wie erwartet sind. Wir müssen auf das Feld über das Felder-Dictionary zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, da obwohl Django das richtige Label rendert, es `None` zurückgibt, wenn der Wert nicht _explizit_ gesetzt ist.

Die restlichen Funktionen testen, ob das Formular für Verlängerungsdaten innerhalb des zulässigen Bereichs gültig ist und für Werte außerhalb des Bereichs ungültig. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) unter Verwendung von `datetime.timedelta()` konstruieren (in diesem Fall eine Anzahl von Tagen oder Wochen angeben). Dann erstellen wir einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir eigentlich nicht die Datenbank oder den Testclient. Erwägen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch validieren, dass die korrekten Fehler ausgelöst werden, wenn das Formular ungültig ist, dies wird jedoch normalerweise im Rahmen der View-Verarbeitung getan, sodass wir dies im nächsten Abschnitt erledigen.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das war's für Formulare; wir haben noch einige andere, aber diese werden automatisch von unseren generischen, klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code noch funktioniert!

### Ansichten

Um das Verhalten unserer Ansichten zu validieren, verwenden wir den Django Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse fungiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen an eine URL zu simulieren und die Antwort zu beobachten. Wir können fast alles an der Antwort sehen, vom Low-Level-HTTP (Ergebniskopfzeilen und Statuscodes) bis hin zur Vorlage, die wir verwenden, um das HTML zu rendern, und den Kontextdaten, die wir an sie übermitteln. Wir können auch die Kette von Weiterleitungen (falls vorhanden) sehen und die URL und den Statuscode bei jedem Schritt überprüfen. Dadurch können wir überprüfen, ob jede Ansicht das Erwartete tut.

Fangen wir mit einer unserer einfachsten Ansichten an, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL namens 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wahrscheinlich ist, wenn Sie Django vertrauen, die einzige Sache, die Sie testen müssen, dass die Ansicht unter der richtigen URL erreichbar ist und über ihren Namen erreicht werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie damit, Tests zu schreiben, die bestätigen, dass die Ansicht alle Autoren anzeigt und diese in losen zu 10 paginiert.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie jeden vorhandenen Text durch den folgenden Testcode für die `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()`-Methode richten wir eine Reihe von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

```python
from django.test import TestCase
from django.urls import reverse

from catalog.models import Author

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create 13 authors for pagination tests
        number_of_authors = 13

        for author_id in range(number_of_authors):
            Author.objects.create(
                first_name=f'Dominique {author_id}',
                last_name=f'Surname {author_id}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/catalog/authors/')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'catalog/author_list.html')

    def test_pagination_is_ten(self):
        response = self.client.get(reverse('authors'))
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertEqual(len(response.context['author_list']), 10)

    def test_lists_all_authors(self):
        # Get second page and confirm it has (exactly) remaining 3 items
        response = self.client.get(reverse('authors')+'?page=2')
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertEqual(len(response.context['author_list']), 3)
```

Alle Tests verwenden den Client (der unserer `TestCase`-abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, dass es sich nur um den spezifischen Pfad ohne die Domain handelt), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir nach ihrem Statuscode, der verwendeten Vorlage, ob die Antwort paginiert ist oder nicht, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente.

> [!NOTE]
> Wenn Sie die `paginate_by`-Variable in Ihrer **/catalog/views.py** Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, dass die korrekte Anzahl von Elementen in paginierten Vorlagen angezeigt wird, in den obigen und folgenden Abschnitten aktualisieren. Wenn Sie beispielsweise die Variable für die Autorenlisten-Seite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die der Vorlage von der Ansicht übergeben wird.
Dies ist unglaublich nützlich für Tests, da es uns ermöglicht, zu bestätigen, dass unsere Vorlage alle benötigten Daten erhält. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält, was einen großen Beitrag dazu leistet, sicherzustellen, dass alle Rendering-Probleme ausschließlich auf die Vorlage zurückzuführen sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie eine Ansicht testen, die nur für eingeloggte Benutzer verfügbar ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` der vorherigen Ansicht sehr ähnlich, aber sie ist nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Einträge an, die von dem aktuellen Benutzer entliehen wurden und den Status 'ausgeliehen' haben und in der Reihenfolge "ältestes zuerst" geordnet sind.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact='o').order_by('due_back')
```

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zunächst `SetUp()`, um einige Benutzer-Login-Konten und `BookInstance`-Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher ist von jedem Testbenutzer ausgeliehen, aber wir haben alle Bücher zunächst auf den Status "Wartung" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, weil wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Challenge_ erstellt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Sie sollten dies auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

```python
import datetime

from django.utils import timezone

# Get user model from settings
from django.contrib.auth import get_user_model
User = get_user_model()

from catalog.models import BookInstance, Book, Genre, Language

class LoanedBookInstancesByUserListViewTest(TestCase):
    def setUp(self):
        # Create two users
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='Dominique', last_name='Rousseau')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create 30 BookInstance objects
        number_of_book_copies = 30
        for book_copy in range(number_of_book_copies):
            return_date = timezone.localtime() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = 'm'
            BookInstance.objects.create(
                book=test_book,
                imprint='Unlikely Imprint, 2016',
                due_back=return_date,
                borrower=the_borrower,
                status=status,
            )

    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('my-borrowed'))
        self.assertRedirects(response, '/accounts/login/?next=/catalog/mybooks/')

    def test_logged_in_uses_correct_template(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

Um zu überprüfen, ob die Ansicht bei einem nicht eingeloggten Benutzer zu einer Login-Seite umleitet, verwenden wir `assertRedirects`, wie es in `test_redirect_if_not_logged_in()` gezeigt wird. Um zu überprüfen, ob die Seite für einen eingeloggten Benutzer angezeigt wird, loggen wir uns zuerst mit unserem Testbenutzer ein und greifen dann erneut auf die Seite zu und überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Die restlichen Tests überprüfen, ob unsere Ansicht nur Bücher zurückgibt, die bei unserem aktuellen Entleiher ausgeliehen sind. Kopieren Sie den Code unten und fügen Sie ihn an das Ende der obigen Testklasse ein.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Check that initially we don't have any books in list (none on loan)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Now change all books to be on loan
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = 'o'
            book.save()

        # Check that now we have borrowed books in the list
        response = self.client.get(reverse('my-borrowed'))
        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Confirm all books belong to testuser1 and are on loan
        for book_item in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], book_item.borrower)
            self.assertEqual(book_item.status, 'o')

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status='o'
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Check our user is logged in
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Check that we got a response "success"
        self.assertEqual(response.status_code, 200)

        # Confirm that of the items, only 10 are displayed due to pagination.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for book in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = book.due_back
            else:
                self.assertTrue(last_date <= book.due_back)
                last_date = book.due_back
```

Sie könnten auch Pagination-Tests hinzufügen, wenn Sie möchten!

#### Testen von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den obigen Fällen, da Sie mehr Codepfade testen müssen: die erste Anzeige, die Anzeige nach einem Datenvalidierungsfehler und die Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden wie bei den reinen Ansichts-Views.

Um dies zu demonstrieren, schreiben wir einige Tests für die Ansicht, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

```python
from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        book_renewal_form = RenewBookForm(request.POST)

        # Check if the form is valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required (here we just write it to the model due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # redirect to a new URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # If this is a GET (or any other method) create the default form
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        book_renewal_form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'book_renewal_form': book_renewal_form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Wir müssen testen, dass die Ansicht nur für Benutzer verfügbar ist, die die `can_mark_returned`-Berechtigung haben, und dass Benutzer auf eine HTTP 404-Fehlerseite umgeleitet werden, wenn sie versuchen, einen nicht vorhandenen `BookInstance` zu erneuern. Wir sollten überprüfen, dass der Anfangswert des Formulars mit einem Datum in drei Wochen vorausgesetzt wird und dass wir, wenn die Validierung besteht, zur "alle ausgeliehenen Bücher" Ansicht umgeleitet werden. Im Rahmen der Tests für Validierungsfehlschläge werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) ans Ende von **/catalog/tests/test_views.py** hinzu.
Dies erstellt zwei Benutzer und zwei Buchinstanzen, aber nur einem Benutzer wird die erforderliche Berechtigung gegeben, um auf die Ansicht zuzugreifen.

```python
import uuid

from django.contrib.auth.models import Permission # Required to grant the permission needed to set a book as returned.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Create a user
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Give test_user2 permission to renew books.
        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Create a book
        test_author = Author.objects.create(first_name='Dominique', last_name='Rousseau')
        test_genre = Genre.objects.create(name='Fantasy')
        test_language = Language.objects.create(name='English')
        test_book = Book.objects.create(
            title='Book Title',
            summary='My book summary',
            isbn='ABCDEFG',
            author=test_author,
            language=test_language,
        )

        # Create genre as a post-step
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direct assignment of many-to-many types not allowed.
        test_book.save()

        # Create a BookInstance object for test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status='o',
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status='o',
        )
```

Fügen Sie die folgenden Tests an das Ende der Testklasse hinzu. Diese Tests überprüfen, dass nur Benutzer mit den entsprechenden Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die korrekten Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Entleiher ist (sollte erfolgreich sein), und was passiert, wenn sie versuchen, auf einen nicht existierenden `BookInstance` zuzugreifen. Wir überprüfen auch, dass die richtige Vorlage verwendet wird.

```python
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Manually check redirect (Can't use assertRedirect, because the redirect URL is unpredictable)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_forbidden_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 403)

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Check that it lets us login - this is our book and we have the right permissions.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Check that it lets us login. We're a librarian, so we can view any users book
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unlikely UID to match our bookinstance!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Check we used correct template
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

Fügen Sie die nächste Testmethode hinzu, wie unten gezeigt. Diese überprüft, dass das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, auf den Wert des Anfangswertes des Formularfelds (`response.context['form'].initial['renewal_date'])` zuzugreifen.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen ebenfalls der Klasse hinzu) überprüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher umleitet, wenn die Erneuerung erfolgreich ist. Was sich hier unterscheidet, ist, dass wir zum ersten Mal zeigen, wie Sie mit dem Client `POST`-Daten senden können. Die _Daten_ für den Post sind das zweite Argument der Post-Funktion und werden als Dictionary von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle ausgeliehen_ Ansicht wurde als _Challenge_ hinzugefügt, und Ihr Code könnte stattdessen zur Startseite '/' umleiten. Wenn dies der Fall ist, ändern Sie die letzten beiden Zeilen des Testcodes, dass sie wie der Code unten aussehen. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die finale Ziel-URL zurückgibt (daher Überprüfung von `/catalog/` anstelle von `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse hinein, wie unten zu sehen. Diese testen wiederum `POST`-Anfragen, in diesem Fall jedoch mit ungültigen Verlängerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, ob die Fehlermeldungen wie erwartet sind.

```python
    def test_form_invalid_renewal_date_past(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        date_in_past = datetime.date.today() - datetime.timedelta(weeks=1)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': date_in_past})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response.context['form'], 'renewal_date', 'Invalid date - renewal in past')

    def test_form_invalid_renewal_date_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        invalid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=5)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}), {'renewal_date': invalid_date_in_future})
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response.context['form'], 'renewal_date', 'Invalid date - renewal more than 4 weeks ahead')
```

Die gleichen Techniken können verwendet werden, um die anderen Ansichten zu testen.

### Templates

Django bietet Test-APIs, um zu überprüfen, dass die korrekte Vorlage von Ihren Ansichten aufgerufen wird, und um zu verifizieren, dass die richtige Information übermittelt wird. Es gibt jedoch keine spezifische API-Unterstützung in Django zum Testen, dass Ihr HTML-Ausgabe wie erwartet gerendert wird.

## Andere empfohlene Testwerkzeuge

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben – wir haben nur die Oberfläche dessen angekratzt, was das zugrunde liegende **unittest**-Framework tun kann, ganz zu schweigen von den Ergänzungen von Django (zum Beispiel schauen Sie, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieterbibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Werkzeug berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie gerade erst anfangen und herausfinden möchten, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework zur Automatisierung von Tests in einem echten Browser. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework für das Systemtest Ihrer Seite (der nächste Schritt über Integrationstests hinaus).

## Fordern Sie sich selbst heraus

Es gibt noch viele Modelle und Ansichten, die wir testen können. Fordern Sie sich selbst heraus, indem Sie einen Testfall für die `AuthorCreate`-Ansicht erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles, was Sie spezifizieren oder was Teil des Designs ist, überprüfen müssen.
Dies schließt ein, wer Zugriff hat, das Anfangsdatum, die verwendete Vorlage und wohin die Ansicht bei Erfolg umleitet.

Sie können den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuzuweisen

```python
class AuthorCreateViewTest(TestCase):
    """Test case for the AuthorCreate view (Created as Challenge)."""

    def setUp(self):
        # Create a user
        test_user = User.objects.create_user(
            username='test_user', password='some_password')

        content_typeAuthor = ContentType.objects.get_for_model(Author)
        permAddAuthor = Permission.objects.get(
            codename="add_author",
            content_type=content_typeAuthor,
        )

        test_user.user_permissions.add(permAddAuthor)
        test_user.save()
```

## Zusammenfassung

Das Schreiben von Testcode ist weder unterhaltsam noch glamourös und wird daher oft zuletzt (oder gar nicht) bei der Erstellung einer Website erledigt. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code nach Änderungen sicher freigegeben werden kann und kostengünstig zu warten ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie man Tests für Ihre Modelle, Formulare und Ansichten schreibt und ausführt. Am wichtigsten ist, dass wir einen kurzen Überblick darüber gegeben haben, was Sie testen sollten, was oft das Schwierigste ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisiertes Testing](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz der Testwerkzeuge](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
