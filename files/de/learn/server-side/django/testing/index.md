---
title: "Django-Tutorial Teil 10: Testen einer Django-Webanwendung"
slug: Learn/Server-side/Django/Testing
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

Mit zunehmender Größe von Websites wird es schwieriger, diese manuell zu testen. Es gibt nicht nur mehr zu testen, sondern da die Interaktionen zwischen Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich andere Bereiche beeinflussen. Es sind mehr Änderungen erforderlich, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie mithilfe des Test-Frameworks von Django automatisierte _Unit-Tests_ für Ihre Website schreiben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Unit-Tests für auf Django basierende Websites geschrieben werden.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokale Bibliothek](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) verfügt derzeit über Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Aufzeichnungen, falls Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann es mehrere Minuten dauern, manuell zu jeder Seite zu navigieren und _oberflächlich_ zu prüfen, ob alles wie erwartet funktioniert. Wenn wir Änderungen vornehmen und die Seite erweitern, wird die Zeit, die benötigt wird, um manuell zu prüfen, ob alles "richtig" funktioniert, nur noch zunehmen. Wenn wir so weitermachen wie bisher, würden wir irgendwann die meiste Zeit mit Testen verbringen und nur sehr wenig Zeit damit, unseren Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, bis auf ein viel niedrigeres Detailniveau testen können und bei jedem Mal genau dieselbe Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests häufiger ausgeführt werden, und wenn ein Test fehlschlägt, weisen sie genau darauf hin, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realer "Benutzer" Ihres Codes fungieren und Sie zwingen, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten sollte. Oft sind sie die Grundlage für Ihre Code-Beispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Testdefinition und -implementierung, wonach der Code geschrieben wird, um dem erforderlichen Verhalten zu entsprechen (z.B. [testgesteuerte](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgesteuerte](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie Sie automatisierte Tests für Django schreiben, indem wir eine Reihe von Tests zur _LocalLibrary_ Website hinzufügen.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsniveau.
- Regressions-Tests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, dass der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder eingetreten ist.
- Integrationstests
  - : Überprüfen, wie Gruppen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests kennen die erforderlichen Interaktionen zwischen Komponenten, aber nicht unbedingt die internen Operationen jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website umfassen.

> [!NOTE]
> Andere gängige Arten von Tests sind Black-Box-, White-Box-, manuelle, automatisierte, Kanarienvogel-, Rauch-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Belastungs- und Stresstests. Suchen Sie nach ihnen für weitere Informationen.

### Was bietet Django für Tests?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Schichten von Logik besteht – von der HTTP-Ebene des Anforderungsverhaltens, über Modellabfragen, bis zur Formularvalidierung und -verarbeitung sowie der Vorlagenwiedergabe.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens eignet sich dieses Testframework sowohl für Unit- als auch für Integrationstests. Das Django-Framework fügt API-Methoden und Werkzeuge hinzu, um Web- und Django-spezifisches Verhalten zu testen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu überprüfen. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge zur [Verwendung anderer Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), beispielsweise können Sie das beliebte [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django (oder _unittest_) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu prüfen, ob spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden "assert"-Methoden, um zu überprüfen, ob Ausdrücke `True` oder `False` ergeben oder ob zwei Werte gleich sind usw.). Wenn Sie einen Testrun starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt, mit einem gemeinsamen Setup- und/oder Tear-Down-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt vor ihren Tests eine saubere Datenbank und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um zu simulieren, dass ein Benutzer mit dem Code auf der View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Basisklasse erstellt werden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind als nötig (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie mit dem vertraut sind, was Sie mit dieser Klasse tun können, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch keine Bibliotheken oder Funktionen, die als Teil von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, ob `first_name` und `last_name` korrekt als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert wird (obwohl Sie natürlich in der Praxis diese Funktionalität während der Entwicklung testen werden). Ebenso müssen Sie nicht überprüfen, ob `date_of_birth` als Datumsfeld validiert wurde, da dies wiederum etwas ist, das in Django implementiert wird.

Sie sollten jedoch den Text überprüfen, der für die Labels verwendet wird (_First name, Last name, Date of birth, Died_), und die Größe des dem Text zugewiesenen Feldes (_100 Zeichen_), da dies Teil Ihres Designs ist und etwas, das in Zukunft gebrochen/geändert werden könnte.

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

Ebenso sollten Sie überprüfen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie gewünscht funktionieren, da sie Ihr Code bzw. Ihre Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` ordnungsgemäß implementiert wurde; was Sie testen, ist, dass die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser könnten feststellen, dass wir auch das Geburts- und Todesdatum auf sinnvolle Werte beschränken und überprüfen möchten, dass das Todesdatum nach dem Geburtsdatum liegt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modellfelder und Modellvalidatoren definieren können, werden diese nur auf der Formularebene verwendet, wenn sie durch die `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

Mit diesen Kenntnissen beginnen wir uns jetzt anzuschauen, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir auf die Details eingehen, "was zu testen ist", werfen wir zuerst einen kurzen Blick darauf, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [integrierte Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Moduls unittest, die Tests im aktuellen Arbeitsverzeichnis in jeder Datei mit dem Muster **test\*.py** entdeckt. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede Struktur verwenden, die Ihnen gefällt. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Views, Formulare und alle anderen Arten von Code zu erstellen, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur, wie oben in Ihrem _LocalLibrary_ Projekt gezeigt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skeletttestdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skeletttestdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [die Django-Skelettwebsite erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website). Es ist völlig "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei haben.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft werden Sie eine Testklasse für jedes Modell/View/Formular hinzufügen, das Sie testen möchten, mit individuellen Methoden zum Testen spezifischer Funktionalität. In anderen Fällen möchten Sie möglicherweise eine separate Klasse haben, um einen bestimmten Anwendungsfall zu testen, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, dass ein Modelfeld ordnungsgemäß validiert wird, mit Funktionen, um jeden der möglichen Fehlfälle zu testen). Again, the structure is very much up to you, but it is best if you are consistent.

Fügen Sie die Testklasse unten am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse konstruiert, indem man von `TestCase` ableitet.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vorkonfiguration von Tests verwenden können (z.B. um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für die Klassenlevel-Setup aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden modifiziert oder geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die vom Test geändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()` Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbankbereinigung für Sie übernimmt.

Unter diesen haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, wird der Test fehlschlagen und den Fehler auf Ihrer Konsole melden.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standard-Assertions, die von **unittest** bereitgestellt werden. Es gibt weitere Standard-Assertions im Framework sowie [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions) um zu testen, ob eine View weiterleitet (`assertRedirects`), um zu testen, ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Normalerweise sollten Sie **print()** Funktionen nicht wie oben in Ihren Tests enthalten. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, alle Tests auszuführen, ist das Kommando:

```bash
python3 manage.py test
```

Dies wird alle Dateien entdecken, die nach dem Muster **test\*.py** unter dem aktuellen Verzeichnis benannt sind, und alle Tests ausführen, die mit geeigneten Basisklassen definiert sind (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig berichtet der Test nur bei Testfehlern individuell, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler wie `ValueError: Missing staticfiles manifest entry...` erhalten, kann das daran liegen, dass beim Testen _collectstatic_ standardmäßig nicht ausgeführt wird und Ihre App eine Speicherklasse verwendet, die dies erfordert (sehen Sie manifest_strict für weitere Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu lösen - die einfachste ist es, _collectstatic_ vor dem Ausführen der Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Wurzelverzeichnis von _LocalLibrary_ aus. Sie sollten eine Ausgabe ähnlich der untenstehenden sehen.

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

Hier sehen wir, dass wir einen Testfehler hatten und genau sehen können, welche Funktion fehlgeschlagen ist und warum (dies ist zu erwarten, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der Testausgabe oben mitnehmen sollten, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()` Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie daran, dass Sie normalerweise keine derartigen `print()` zu Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie bestimmte Tests ausführen können und wie Sie steuern können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testlauf erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die Testerfolge ebenso wie die Fehler zu listen (und eine ganze Menge Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity auf "2" setzen wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die zulässigen Verbosity-Stufen sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Dinge beschleunigen

Wenn Ihre Tests unabhängig sind, können Sie sie auf einer Mehrprozessormaschine erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Bestimmte Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu dem/den Paket(en), Modul, `TestCase`-Unterklasse oder Methode angeben:

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

### Andere Testlauf-Optionen

Der Testlauf bietet viele andere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse aufzuzeichnen.
Für weitere Informationen siehe die Django [Testlauf](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test) Dokumentation.

## LocalLibrary Tests

Jetzt wissen wir, wie wir unsere Tests ausführen und was für Dinge wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie noch tun können.

### Modelle

Wie oben besprochen, sollten wir alles testen, was Teil unseres Designs ist oder durch Code definiert wird, den wir geschrieben haben, aber nicht durch Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wird.

Betrachten Sie zum Beispiel das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, denn selbst wenn wir die meisten von ihnen nicht explizit definiert haben, haben wir ein Design, das besagt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, dass die Feldlabels ihre beabsichtigten Werte haben. Ebenso, während wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, ist es sinnvoll, einen Test für diese Länge zu spezifieren, um sicherzustellen, dass es wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zunächst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, mit einem beschreibenden Namen, damit wir im Testoutput leicht fehlerhafte Tests identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autor-Objekt zu erstellen, das wir verwenden, aber in keinem der Tests modifizieren werden.

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
        # This will also fail if the urlconf is not defined.
        self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Die Feldertests überprüfen, dass die Werte der Feldlabels (`verbose_name`) und dass die Größe der Zeichnungsfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Punkte sind:

- Wir können den `verbose_name` nicht direkt über `author.first_name.verbose_name` abrufen, da `author.first_name` ein _String_ ist (nicht ein Handle zum `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und damit zusätzliche Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe für das erstere Ihnen mitteilt, was das Label tatsächlich war, was das Debuggen des Problems etwas erleichtert.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Labels sowie auch der Test für die Länge des `last_name`-Feldes wurden weggelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie die Namenskonventionen und Ansätze befolgen, die oben gezeigt wurden.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, ob der Objektname wie erwartet mit dem Format "Nachname", "Vorname" erstellt wurde, und ob die URL, die wir für ein `Author`-Element erhalten, wie erwartet ist.

```python
def test_object_name_is_last_name_comma_first_name(self):
    author = Author.objects.get(id=1)
    expected_object_name = f'{author.last_name}, {author.first_name}'
    self.assertEqual(str(author), expected_object_name)

def test_get_absolute_url(self):
    author = Author.objects.get(id=1)
    # This will also fail if the urlconf is not defined.
    self.assertEqual(author.get_absolute_url(), '/catalog/author/1')
```

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell so erstellt haben, wie wir es im Modell-Tutorial beschrieben haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death` Label wie unten gezeigt erhalten. Der Test schlägt fehl, weil er geschrieben wurde, um zu erwarten, dass die Labeldefinition nach Djangos Konvention dem ersten Buchstaben des Labels nicht großschreibt (Django macht dies für Sie).

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

Das ist ein sehr kleiner Fehler, aber es zeigt, wie das Schreiben von Tests jede Annahme, die Sie gemacht haben könnten, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**) in "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, deshalb werden wir diese nicht weiter diskutieren. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie beim Testen Ihrer Formulare ist die gleiche wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie kodiert haben oder Ihr Design festlegt, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieterbibliotheken.

Im Allgemeinen bedeutet dies, dass Sie testen sollten, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit geeigneten Labels und Hilfetext angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und Validierung erstellt) – d.h. Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssen jedoch zusätzliche Validierung testen, die Sie erwarten, dass sie auf den Feldern durchgeführt wird, und alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular zum Erneuern von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das mit einem Label und Hilfetext versehen wird, den wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Wir beginnen damit, unser Formular und einige Python- und Django-Bibliotheken zu importieren, um zeitbezogene Funktionalität zu testen. Wir deklarieren dann unsere Formulartestklasse auf die gleiche Weise wie bei Modellen, mit einem beschreibenden Namen für unsere `TestCase`-abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, dass das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld über das Felddictionary zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, da, obwohl Django das richtige Label rendern wird, es `None` zurückgibt, wenn der Wert nicht _explizit_ gesetzt ist.

Der Rest der Funktionen testet, dass das Formular für Erneuerungsdaten innerhalb des akzeptablen Bereichs gültig und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall eine Anzahl von Tagen oder Wochen angeben). Wir erstellen dann einfach das Formular, übergeben unsere Daten, und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich nicht die Datenbank oder den Testclient. Erwägen Sie, diese Tests so zu modifizieren, dass [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) verwendet wird.
>
> Wir müssen auch überprüfen, dass die richtigen Fehler ausgegeben werden, wenn das Formular ungültig ist, aber das wird normalerweise als Teil der View-Verarbeitung getan, also werden wir uns im nächsten Abschnitt darum kümmern.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das ist alles für Formulare; wir haben einige andere, aber sie werden automatisch von unseren generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code immer noch besteht!

### Views

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse fungiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen auf einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von der niedrigen HTTP-Ebene (Ergebnis-Header und Statuscodes) bis zur Vorlage, die wir verwenden, um das HTML zu rendern, und den Kontextdaten, die wir weitergeben. Wir können auch die Umleitungskette (falls vorhanden) sehen und die URL und den Statuscode an jedem Schritt prüfen. Dies ermöglicht es uns zu überprüfen, ob jede Ansicht das tut, was erwartet wird.

Lassen Sie uns mit einer unserer einfachsten Views beginnen, die eine Liste aller Autoren bereitstellt. Diese wird an der Adresse **/catalog/authors/** angezeigt (eine URL, die in der URL-Konfiguration als 'authors' benannt ist).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen, ist das einzige, was Sie testen müssen, dass die Ansicht über die richtige URL zugänglich ist und über ihren Namen zugegriffen werden kann. Wenn Sie jedoch einen testbasierten Entwicklungsprozess verwenden, beginnen Sie damit, Tests zu schreiben, die bestätigen, dass die View alle Autoren anzeigt, wobei sie in 10er-Schritten paginiert wird.

Öffnen Sie die **/catalog/tests/test_views.py**-Datei und ersetzen Sie vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()` Methode richten wir eine Reihe von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

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

Alle Tests verwenden den Client (der zu unserer von `TestCase` abgeleiteten Klasse gehört) um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, dass nur der spezifische Pfad ohne die Domain angegeben wird), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir danach ihren Statuscode, die verwendete Vorlage, ob die Antwort paginiert ist oder nicht, die Anzahl der zurückgegebenen Elemente und die Gesamtzahl der Elemente.

> [!NOTE]
> Wenn Sie die `paginate_by` Variable in Ihrer **/catalog/views.py**-Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, ob die korrekte Anzahl von Elementen in paginierten Vorlagen angezeigt wird, sowohl oben als auch in den folgenden Abschnitten aktualisieren. Wenn Sie die Variable für die Autorenlisten-Seite z.B. auf 5 gesetzt haben, aktualisieren Sie die Zeile oben auf:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die von der View an die Vorlage weitergegeben wird.
Dies ist unglaublich nützlich für das Testen, da es uns ermöglicht, zu bestätigen, dass unsere Vorlage alle erforderlichen Daten erhält. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält. Dies geht weit in Richtung der Überprüfung, dass alle Rendering-Probleme ausschließlich auf die Vorlage zurückzuführen sind.

#### Ansichten, die auf angemeldete Benutzer beschränkt sind

In einigen Fällen möchten Sie eine View testen, die nur auf angemeldete Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` der vorherigen sehr ähnlich, ist jedoch nur für angemeldete Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die dem aktuellen Benutzer ausgeliehen sind, den 'on loan'-Status haben und im "ältesten zuerst"-Format sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zunächst `SetUp()`, um einige Benutzeranmeldungen und `BookInstance`-Objekte (zusammen mit deren zugehörigen Büchern und anderen Aufzeichnungen) zu erstellen, die wir später in den Tests verwenden. Die Hälfte der Bücher ist jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "Maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Challenge_ erstellt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Dies sollten Sie auch im `RenewBookInstancesViewTest`-Abschnitt, der folgt, tun.

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
        test_author = Author.objects.create(first_name='John', last_name='Smith')
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

Um zu überprüfen, ob die View zu einer Login-Seite umleitet, wenn der Benutzer nicht angemeldet ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` gezeigt. Um zu überprüfen, ob die Seite für einen angemeldeten Benutzer angezeigt wird, loggen wir zuerst unseren Testbenutzer ein und greifen dann erneut auf die Seite zu, um zu prüfen, ob wir einen `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests überprüft, ob unsere View nur Bücher zurückgibt, die an unseren aktuellen Ausleiher ausgeliehen sind. Kopieren Sie den Code unten und fügen Sie ihn am Ende der obigen Testklasse hinzu.

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
        for bookitem in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], bookitem.borrower)
            self.assertEqual(bookitem.status, 'o')

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

Sie könnten auch Paginierungstests hinzufügen, wenn Sie dies wünschen!

#### Ansichten mit Formularen testen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codewege testen müssen: Erstanzeige, Anzeige nach fehlgeschlagener Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden wie bei Anzeige-Only-Ansichten.

Um das zu demonstrieren, schreiben wir einige Tests für die View, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen testen, dass die View nur für Benutzer verfügbar ist, die die Berechtigung `can_mark_returned` haben, und dass Benutzer zu einer HTTP-404-Fehlerseite umgeleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, dass der ursprüngliche Wert des Formulars mit einem Datum, das drei Wochen in der Zukunft liegt, gefüllt ist und dass wir beim Erfolg der Validierung zur Anzeige aller ausgeliehenen Bücher umgeleitet werden. Als Teil der Überprüfung der Fehlvalidierungs-Tests werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie die erste Partie der Testklasse (wie unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Diese erstellt zwei Benutzer und zwei Buchinstanzen, gibt jedoch nur einem Benutzer die erforderliche Berechtigung, um auf die View zuzugreifen.

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
        test_author = Author.objects.create(first_name='John', last_name='Smith')
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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die View zugreifen können. Wir prüfen alle Fälle: wenn der Benutzer nicht angemeldet ist, wenn ein Benutzer angemeldet ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Ausleiher ist (sollte funktionieren), und was passiert, wenn sie versuchen, auf ein nicht existierendes `BookInstance` zuzugreifen. Wir überprüfen auch, dass die richtige Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, hinzu. Diese überprüft, dass das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir auf den Anfangswert des Formularfeldes zugreifen können (`response.context['form'].initial['renewal_date'])`.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch in die Klasse ein) überprüft, dass die View zu einer Liste aller ausgeliehenen Bücher umleitet, wenn die Erneuerung erfolgreich ist. Was sich hier unterscheidet, ist, dass wir zum ersten Mal zeigen, wie man mit dem Client _Daten_ postet. Die _Daten_ des Posts sind das zweite Argument der Post-Funktion und werden als Dictionary von Schlüssel/Wert-Paaren angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _all-borrowed_-Ansicht wurde als _Challenge_ hinzugefügt und Ihr Code kann stattdessen zur Homepage '/' umleiten. Wenn dies der Fall ist, modifizieren Sie die letzten beiden Zeilen des Testcodes so, dass sie wie der unten stehende Code aussehen. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher wird `/catalog/` statt `/` überprüft).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten zwei Funktionen in die Klasse, wie unten zu sehen ist. Diese testen wieder `POST`-Anfragen, jedoch in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Die gleichen Techniken können verwendet werden, um die andere View zu testen.

### Vorlagen

Django bietet Test-APIs, um zu prüfen, ob die korrekte Vorlage von Ihren Views aufgerufen wird, und ermöglicht Ihnen, zu bestätigen, dass die richtigen Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung für das Testen in Django, dass Ihre HTML-Ausgabe wie erwartet gerendert wird.

## Weitere empfohlene Testwerkzeuge

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben — wir haben nur an der Oberfläche von dem gekratzt, was das zugrunde liegende **unittest**-Framework kann, geschweige denn die Ergänzungen von Django (zum Beispiel, schauen Sie sich an, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieterbibliotheken zu patchen, um ihren eigenen Code gründlicher zu testen).

Obwohl es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Werkzeug berichtet darüber, wie viel von Ihrem Code tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie gerade anfangen und herausfinden möchten, was genau getestet werden sollte.
- [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) ist ein Framework zur Automatisierung von Tests in einem echten Browser. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Website interagiert, und bietet ein großartiges Framework zum Systemtesten Ihrer Website (der nächste Schritt nach Integrationstests).

## Fordern Sie sich selbst heraus

Es gibt viele weitere Modelle und Views, die wir testen können. Versuchen Sie als Herausforderung, einen Testfall für die `AuthorCreate`-View zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Das umfasst, wer Zugang hat, das Startdatum, die verwendete Vorlage und wohin die View bei Erfolg umleitet.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuzuweisen

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

Das Schreiben von Testcode ist weder spaßig noch glamourös und wird daher oft als letztes (oder gar nicht) beim Erstellen einer Website gemacht. Es ist jedoch ein wesentlicher Teil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlichbar ist und kostengünstig gewartet werden kann.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Views schreiben und ausführen. Am wichtigsten ist, dass wir einen kurzen Überblick darüber gegeben haben, was Sie testen sollten, was oft das Schwierigste ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumente)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisiertes Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumente)
- [Testwerkzeuge-Referenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumente)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumente)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgesteuerte Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
