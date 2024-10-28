---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
slug: Learn/Server-side/Django/Testing
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

Wenn Websites wachsen, werden sie schwieriger manuell zu testen. Nicht nur gibt es mehr zu testen, sondern auch, da die Interaktionen zwischen den Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich andere Bereiche beeinflussen. Daher sind mehr Änderungen erforderlich, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, während mehr Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, ist das Schreiben automatisierter Tests, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie mit Djangos Testframework das _Unittesting_ Ihrer Website automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Unittests für auf Django basierende Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Local Library](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book`- und `Author`-Objekte, eine Seite, um `BookInstance`-Objekte zu erneuern, und Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Objekten (und auch `Book`-Datensätzen, wenn Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Seite kann es mehrere Minuten dauern, manuell zu jeder Seite zu navigieren und _oberflächlich_ zu prüfen, ob alles wie erwartet funktioniert. Wenn wir Änderungen vornehmen und die Seite vergrößern, wird die Zeit, die benötigt wird, um manuell zu überprüfen, dass alles "ordnungsgemäß" funktioniert, nur noch zunehmen. Wenn wir so weitermachen würden, würden wir schließlich die meiste Zeit mit Testen verbringen und sehr wenig mit der Verbesserung unseres Codes.

Automatisierte Tests können wirklich bei diesem Problem helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, auf einem viel detaillierteren Niveau testen können und jedes Mal genau die gleiche Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als der erste reale "Benutzer" Ihres Codes fungieren und Sie dazu zwingen, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft sind sie die Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, nach denen der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z. B. [Testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests auf der _LocalLibrary_-Website hinzugefügt wird.

### Arten des Testens

Es gibt zahlreiche Typen, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Codeänderungen nicht erneut eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests berücksichtigen die erforderlichen Interaktionen zwischen den Komponenten, aber nicht unbedingt die internen Vorgänge jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website abdecken.

> [!NOTE]
> Andere gängige Arten von Tests sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Last- und Belastungstests. Schauen Sie sie nach, um weitere Informationen zu erhalten.

### Was bietet Django zum Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von der HTTP-Ebene der Anforderungsverarbeitung über Modellabfragen bis zur Formularvalidierung und -verarbeitung und der Rendererstellung von Vorlagen.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Testframework sowohl für Unit- als auch für Integrationstests geeignet. Das Django-Framework fügt API-Methoden und Tools hinzu, die das Testen von Web- und Django-spezifischem Verhalten unterstützen. Diese ermöglichen Ihnen das Simulieren von Anforderungen, das Einfügen von Testdaten und das Überprüfen der Ausgabe Ihrer Anwendung. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge für [die Verwendung verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), beispielsweise können Sie das beliebte [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) Framework integrieren, um einem Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, erben Sie von einer der Django- (oder _unittest_-) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und schreiben Sie dann separate Methoden, um zu überprüfen, dass die spezifische Funktionalität wie erwartet funktioniert (Tests verwenden "assert"-Methoden, um zu testen, dass Ausdrücke in `True`- oder `False`-Werten resultieren, oder dass zwei Werte gleich sind usw.). Wenn Sie einen Testrun starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, mit gemeinsamem Setup und/oder Abbauverhalten, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um die Interaktion eines Benutzers mit dem Code auf der View-Ebene zu simulieren. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt werden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind als nötig (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie vertraut sind mit dem, was Sie mit dieser Klasse tun können, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch keine Bibliotheken oder Funktionalitäten, die von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, ob `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert ist (obwohl Sie dies in der Praxis natürlich während der Entwicklung unvermeidlich testen werden). Ebenso müssen Sie nicht testen, ob `date_of_birth` als Datumsfeld validiert wurde, da auch dies in Django implementiert ist.

Sie sollten jedoch den Text überprüfen, der für die Etiketten verwendet wird (_First name, Last name, Date of birth, Died_), und die Größe des für den Text zugewiesenen Feldes (_100 Zeichen_), da diese Teil Ihres Designs sind und in Zukunft gebrochen/geändert werden könnten.

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

Ebenso sollten Sie überprüfen, ob die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr eigener Code bzw. Ihre Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` ordnungsgemäß implementiert wurde. Was Sie testen, ist also, dass die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser werden möglicherweise feststellen, dass wir auch das Geburts- und Sterbedatum auf sinnvolle Werte beschränken und sicherstellen möchten, dass der Tod nach der Geburt erfolgt.
> In Django würde diese Einschränkung in Ihren Formularklassen hinzugefügt (obwohl Sie Validatoren für Modelfelder und Modellvalidatoren definieren können, werden diese nur auf der Formulardaten-Ebene verwendet, wenn sie durch die `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss explizit aufgerufen werden.)

Mit diesem Gedanken im Hinterkopf beginnen wir also damit, wie man Tests definiert und ausführt.

## Überblick über die Teststruktur

Bevor wir näher darauf eingehen, "was zu testen ist", werfen wir zunächst einen kurzen Blick darauf, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [Test Discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) der `unittest`-Moduls, die Tests im aktuellen Arbeitsverzeichnis in jeder Datei findet, die mit dem Muster **test\*.py** benannt ist. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und alle anderen Arten von Code zu verwenden, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben gezeigt in Ihrem _LocalLibrary_-Projekt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies sagt Python, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelett-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [die Django-Skelett-Website erstellten](/de/docs/Learn/Server-side/Django/skeleton_website). Es ist vollkommen "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei haben.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft werden Sie eine Testklasse für jedes Modell/View/Formular hinzufügen, das Sie testen möchten, mit individuellen Methoden, die bestimmte Funktionalitäten testen. In anderen Fällen möchten Sie möglicherweise eine separate Klasse haben, um einen spezifischen Anwendungsfall zu testen, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, ob ein Modelfeld ordnungsgemäß validiert wurde, mit Funktionen, um jeden möglichen Fehlschlag zu testen). Auch hier liegt die Struktur sehr bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die untenstehende Testklasse am Ende der Datei hinzu. Die Klasse zeigt, wie Sie eine Testfallklasse durch Ableiten von `TestCase` konstruieren.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Konfiguration vor dem Test verwenden können (z. B. um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für das Klassen-Setup aufgerufen. Sie verwenden dies, um Objekte zu erstellen, die in keiner der Testmethoden geändert oder verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte einzurichten, die möglicherweise durch den Test geändert werden (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse den Abbau der Datenbank für Sie übernimmt.

Unter diesen haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet bewertet wird, wird der Test fehlschlagen und den Fehler an Ihrer Konsole melden.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standardbehauptungen von **unittest**. Es gibt andere Standardbehauptungen im Framework sowie [Django-spezifische Behauptungen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umleitet (`assertRedirects`), um zu testen, ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`) usw.

> [!NOTE]
> Normalerweise sollten Sie **keine** **print()**-Funktionen in Ihre Tests einfügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie führt man die Tests aus

Der einfachste Weg, alle Tests auszuführen, ist die Verwendung des Befehls:

```bash
python3 manage.py test
```

Dieser wird alle Dateien mit dem Muster **test\*.py** im aktuellen Verzeichnis entdecken und alle Tests ausführen, die unter Verwendung geeigneter Basisklassen definiert wurden (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig berichten die Tests nur einzeln über Testfehler und geben dann eine Zusammenfassung der Tests aus.

> [!NOTE]
> Wenn Sie Fehler wie: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass beim Testen _collectstatic_ standardmäßig nicht ausgeführt wird, und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu lösen - die einfachste ist, _collectstatic_ vor dem Ausführen der Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sollten eine Ausgabe ähnlich der unten stehenden sehen.

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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler wird erwartet, weil `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der oben genannten Testausgabe lernen sollten, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse aufgerufen wird und `setUp()` vor jeder Methode aufgerufen wird. Denken Sie daran, dass Sie normalerweise diese Art von `print()` nicht zu Ihren Tests hinzufügen würden.

In den nächsten Abschnitten wird gezeigt, wie Sie spezifische Tests ausführen können und wie Sie steuern können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Ausgabeintensität_ ändern. Zum Beispiel, um die Testerfolge sowie Fehler aufzulisten (und eine ganze Menge Informationen, wie die Testdatenbank eingerichtet wird), können Sie die Ausgabeintensität auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Intensitätsstufen sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Dinge beschleunigen

Wenn Ihre Tests unabhängig sind, können Sie diese auf einem Mehrprozessormaschine erheblich beschleunigen, indem Sie sie parallel ausführen. Die Verwendung von `--parallel auto` im Folgenden führt einen Testprozess pro verfügbarem Kern aus. Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, finden Sie unter [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Bestimmte Tests ausführen

Wenn Sie eine Teilmenge Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zum Paket bzw. Modul, zur `TestCase`-Unterklasse oder zur Methode angeben:

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

### Andere Test Runner-Optionen

Der Test Runner bietet viele andere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse aufzuzeichnen. Weitere Informationen finden Sie in der Django-[Test Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary Tests

Jetzt wissen wir, wie man unsere Tests ausführt und was für Dinge wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was mehr Sie tun können.

### Modelle

Wie oben diskutiert, sollten wir alles testen, was Teil unseres Designs ist oder durch Code definiert ist, den wir geschrieben haben, aber nicht die Funktionalität des zugrunde liegenden Frameworks und anderer Drittanbieterbibliotheken.

Betrachten Sie zum Beispiel das `Author`-Modell unten. Hier sollten wir die Etiketten für alle Felder testen, da selbst wenn wir die meisten von ihnen nicht explizit spezifiziert haben, wir ein Design haben, das besagt, welche Werte diese sein sollten. Wenn wir die Werte nicht testen, dann wissen wir nicht, dass die Etiketten der Felder die beabsichtigten Werte haben. Ebenso, obwohl wir darauf vertrauen, dass Django ein Feld mit der angegebenen Länge erstellt, lohnt es sich, einen Test für diese Länge festzulegen, um sicherzustellen, dass sie wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie eventuellen vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, mit einem beschreibenden Namen, damit wir fehlerhafte Tests in der Ausgabe leicht identifizieren können. Danach rufen wir `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden, aber in keiner der Tests verändern werden.

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

Die Feldtests überprüfen, ob die Werte der Etiketten der Felder (`verbose_name`) und dass die Größe der Zeichenfelder wie erwartet ist. Diese Methoden haben alle beschreibende Namen und folgen dem gleichen Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Interessante Punkte sind:

- Wir können das `verbose_name` nicht direkt mit `author.first_name.verbose_name` abrufen, weil `author.first_name` ein _String_ ist (kein Zugriff auf das `first_name`-Objekt, mit dem wir auf seine Eigenschaften zugreifen können). Stattdessen müssen wir das Attribut `_meta` des Autors verwenden, um eine Instanz des Feldes zu erhalten und diese zu verwenden, um nach den zusätzlichen Informationen zu suchen.
- Wir haben uns entschieden `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund hierfür ist, dass, wenn der Test fehlschlägt, die Ausgabe bei ersterem Ihnen sagt, was das Label eigentlich war, was die Fehlersuche ein wenig erleichtert.

> [!NOTE]
> Tests für die `last_name`- und `date_of_birth`-Etiketten sowie der Test für die Länge des `last_name`-Feldes wurden ausgelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie den oben gezeigten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, ob der Objektname wie erwartet im "Nachname, Vorname"-Format konstruiert wurde und ob die URL, die wir für ein `Author`-Objekt erhalten, wie erwartet ist.

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

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell so erstellt haben, wie wir es im Modelle-Tutorial beschrieben haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death`-Label erhalten, wie unten gezeigt. Der Test schlägt fehl, weil er erwartet, dass die Etikettendefinition dem Django-Konvention folgt, den ersten Buchstaben des Etiketts nicht zu kapitalisieren (Django macht dies für Sie).

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

Dies ist ein sehr kleiner Fehler, aber er zeigt auf, wie das Schreiben von Tests gründlicher mögliche Annahmen überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**) in "died" und führen Sie die Tests erneut aus.

Die Muster für die Prüfung der anderen Modelle sind ähnlich, daher werden wir diese nicht weiter diskutieren. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie für die Prüfung Ihrer Formulare ist die gleiche wie für die Prüfung Ihrer Modelle; Sie müssen alles testen, was Sie selbst kodiert haben oder was Ihr Design spezifiziert, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieterbibliotheken.

Generell bedeutet dies, dass Sie überprüfen sollten, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit den entsprechenden Etiketten und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und die Validierung erstellt) – das heißt, Sie müssen nicht testen, ob ein E-Mail-Feld nur E-Mails akzeptiert. Allerdings müssten Sie jede zusätzliche Validierung testen, die Sie erwarten, die auf den Feldern durchgeführt wird, und alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular zum Erneuern von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das ein Etikett und einen Hilfetext haben wird, die wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei und ersetzen Sie etwaigen vorhandenen Code mit dem folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen damit, unser Formular und einige Python- und Django-Bibliotheken zu importieren, die das Testen zeitbezogener Funktionalität unterstützen. Anschließend deklarieren wir unsere Formulartestklasse auf die gleiche Weise wie für Modelle, mit einem beschreibenden Namen für unsere von `TestCase` abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld über das Felderverzeichnis zugreifen (z. B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, da Django, auch wenn es das korrekte Etikett rendert, `None` zurückgibt, wenn der Wert nicht _explizit_ gesetzt ist.

Die restlichen Funktionen testen, ob das Formular für Erneuerungsdaten innerhalb des akzeptablen Bereichs gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall gibt eine Anzahl von Tagen oder Wochen an). Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich nicht die Datenbank oder den Test-Client. Erwägen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch validieren, dass die richtigen Fehler ausgelöst werden, wenn das Formular ungültig ist, aber dies wird normalerweise als Teil der View-Verarbeitung durchgeführt, daher werden wir uns darum im nächsten Abschnitt kümmern.

> [!WARNING]
> Wenn Sie die Klasse [ModelForm](/de/docs/Learn/Server-side/Django/Forms#modelforms) `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das ist alles für Formulare; wir haben einige andere, aber sie werden automatisch durch unsere generischen Class-Based-Editing-Views erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code immer noch funktioniert!

### Views

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse verhält sich wie ein Dummie-Webbrowser, den wir nutzen können, um `GET`- und `POST`-Anfragen zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von der niedrigen HTTP-Ebene (Ergebnisheader und Statuscodes) über die Vorlage, die wir verwenden, um das HTML zu rendern, bis zu den Kontextdaten, die wir an diese weitergeben. Wir können auch die Kette der Umleitungen (falls vorhanden) sehen und die URL und den Statuscode in jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, dass jede View das tut, was erwartet wird.

Beginnen wir mit einer unserer einfachsten Views, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL mit dem Namen 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen, müssen Sie im Grunde nur testen, dass die View unter der richtigen URL zugänglich ist und mit ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die View alle Autoren anzeigt und sie in Listen von jeweils 10 Seiten paginiert.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie eventuellen vorhandenen Text mit dem folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()`-Methode richten wir eine Reihe von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

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

Alle Tests nutzen den Client (der zur `TestCase`-abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, der verwendeten Vorlage, ob die Antwort paginiert ist, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer Datei **/catalog/views.py** auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, ob die korrekte Anzahl von Elementen in paginierten Vorlagen angezeigt wird, im oben genannten und in den folgenden Abschnitten aktualisieren. Zum Beispiel, wenn Sie die Variable für die Autorenlisten-Seite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben auf:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, welche die Kontextvariable ist, die von der View an die Vorlage übergeben wird.
Dies ist unglaublich nützlich beim Testen, da es uns ermöglicht zu bestätigen, dass unsere Vorlage alle Daten erhält, die sie benötigt. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält, was viel dazu beiträgt, zu bestätigen, dass alle Renderfehler ausschließlich der Vorlage zuzuschreiben sind.

#### Views, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie eine View testen, die nur für eingeloggte Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` sehr ähnlich unserer vorherigen Ansicht, aber nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Einträge an, die vom aktuellen Benutzer entliehen wurden, den Status "on loan" haben und "älteste zuerst" geordnet sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzerkonten und `BookInstance`-Objekte (zusammen mit ihren zugehörigen Büchern und anderen Einträgen) zu erstellen, die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer bestimmten `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Herausforderung_ erstellt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erzeugen oder importieren. Dies sollten Sie auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, dass die View zu einer Login-Seite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggten Benutzer angezeigt wird, loggen wir zuerst unseren Testbenutzer ein und greifen dann erneut auf die Seite zu, um zu überprüfen, ob wir einen `status_code` von 200 erhalten (Erfolg).

Die restlichen Tests überprüfen, dass unsere View nur Bücher zurückgibt, die bei unserem aktuellen Entleiher "ausgeliehen" sind. Kopieren Sie den untenstehenden Code und fügen Sie ihn an das Ende der oben genannten Testklasse ein.

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

Sie könnten auch Paginierungstests hinzufügen, wenn Sie möchten!

#### Testen von Views mit Formularen

Das Testen von Views mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codepfade testen müssen: Erstanzeige, Anzeige nach fehlgeschlagener Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client für das Testen fast genau auf die gleiche Weise wie für Anzeige-Only-Views verwenden.

Um dies zu demonstrieren, schreiben wir einige Tests für die View, die verwendet wird, um Bücher zu erneuern (`renew_book_librarian()`):

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

Wir müssen testen, dass die View nur für Benutzer verfügbar ist, die die Berechtigung `can_mark_returned` haben, und dass Benutzer auf eine HTTP 404-Fehlerseite umgeleitet werden, wenn sie versuchen, eine `BookInstance` zu erneuern, die nicht existiert. Wir sollten überprüfen, dass der Initialwert des Formulars mit einem Datum drei Wochen in der Zukunft gefüllt ist, und dass, wenn die Validierung erfolgreich ist, wir zur "alle entliehenen Bücher"-View umgeleitet werden. Beim Überprüfen der Validierungsfehler-Tests überprüfen wir auch, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (wie unten gezeigt) zum Ende von **/catalog/tests/test_views.py** hinzu.
Diese erstellt zwei Benutzer und zwei Buchinstanzen, aber nur ein Benutzer erhält die Berechtigung, die View zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die View zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Entleiher ist (sollte erfolgreich sein), und was passiert, wenn sie auf eine `BookInstance` zugreifen, die nicht existiert. Wir überprüfen auch, dass die korrekte Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode hinzu, wie unten gezeigt. Diese überprüft, ob das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, auf den Initialwert des Formularfeldes (`response.context['form'].initial['renewal_date'])` zuzugreifen.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch zur Klasse hinzu) überprüft, dass die View bei erfolgreicher Erneuerung zu einer Liste aller entliehenen Bücher umgeleitet wird. Was hier abweicht, ist, dass wir zum ersten Mal zeigen, wie Sie Daten mit dem Client `POST`-en können. Die `post`-Daten sind das zweite Argument der Post-Funktion und werden als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Der _all-borrowed_-View wurde als _Herausforderung_ hinzugefügt, und Ihr Code könnte stattdessen zur Startseite '/' umleiten. Wenn ja, ändern Sie die letzten beiden Zeilen des Testcodes so, dass sie wie der unten dargestellte Code sind. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher das Prüfen auf `/catalog/` statt auf `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse, wie unten gezeigt. Diese testen erneut `POST`-Anfragen, aber in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Django bietet Test-APIs, um zu überprüfen, dass die korrekte Vorlage von Ihren Views aufgerufen wird und um zu überprüfen, dass die korrekten Informationen geschickt werden. Es gibt jedoch keine spezifische API-Unterstützung im Django, um zu testen, dass Ihre HTML-Ausgabe wie erwartet gerendert wird.

## Weitere empfohlene Testwerkzeuge

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben — wir haben nur an der Oberfläche dessen gekratzt, was das zugrunde liegende **unittest**-Framework tun kann, geschweige denn, was Django hinzufügt (zum Beispiel versuchen Sie herauszufinden, wie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwendet wird, um Bibliotheken von Drittanbietern zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, werden wir nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Code durch Ihre Tests tatsächlich ausgeführt wird. Es ist besonders nützlich, wenn Sie anfangen und herausfinden möchten, was genau getestet werden soll.
- [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) ist ein Framework zur Automatisierung der Tests in einem echten Browser. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework für systematische Tests Ihrer Seite (der nächste Schritt von Integrationstests).

## Fordern Sie sich selbst heraus

Es gibt noch viele weitere Modelle und Ansichten, die wir testen können. Als Herausforderung versuchen Sie, einen Testfall für die `AuthorCreate`-View zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Dies umfasst, wer Zugang hat, das Anfangsdatum, die verwendete Vorlage und wohin die View bei Erfolg umleitet.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zu erteilen

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

Testcode zu schreiben ist weder lustig noch glamourös und wird daher oft zuletzt (oder gar nicht) beim Erstellen einer Website erledigt. Es ist jedoch ein wesentlicher Teil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlicht werden kann und wirtschaftlich zu warten ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Views schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste zu bestimmen ist, wenn Sie anfangen. Es gibt viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unittests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisierte Tests](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Testing-Tools-Referenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
