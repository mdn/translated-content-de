---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit wachsender Größe von Websites wird das manuelle Testen schwieriger. Nicht nur, dass es mehr zu testen gibt, sondern auch, dass die Interaktionen zwischen Komponenten komplexer werden. Eine kleine Änderung in einem Bereich kann andere Bereiche beeinflussen, sodass mehr Änderungen erforderlich sind, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn mehr Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die leicht und zuverlässig jedes Mal ausgeführt werden können, wenn Sie eine Änderung vornehmen. Dieses Tutorial zeigt, wie Sie das _Unit-Testing_ Ihrer Website mit dem Django-Testframework automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschluss aller vorhergehenden Tutorial-Themen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Unit-Tests für auf Django basierende Websites geschrieben werden.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book` und `Author` Objekte, eine Seite, um `BookInstance` Objekte zu erneuern, und Seiten, um `Author` Objekte zu erstellen, zu aktualisieren und zu löschen (und `Book`-Einträge ebenfalls, falls Sie die _Herausforderung_ im [Forms-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann das manuelle Durchklicken jeder Seite und oberflächliche Überprüfen, ob alles wie erwartet funktioniert, mehrere Minuten dauern. Wenn wir Änderungen vornehmen und die Website vergrößern, wird die benötigte Zeit, um manuell zu überprüfen, dass alles "korrekt" läuft, nur zunehmen. Würden wir so weitermachen, wie wir sind, würden wir irgendwann die meiste Zeit mit Testen verbringen und nur sehr wenig Zeit damit, unser Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, auf einem viel detaillierteren Niveau testen können und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind nicht annähernd so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßig ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau auf, wo der Code nicht wie erwartet funktioniert.

Zusätzlich können automatisierte Tests als erster "realer Benutzer" Ihres Codes fungieren und zwingen Sie dazu, rigoros zu definieren und zu dokumentieren, wie Ihre Website sich verhalten sollte. Oft sind sie die Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsverfahren mit der Definition und Implementierung von Tests, nach denen der Code geschrieben wird, um dem erforderlichen Verhalten zu entsprechen (z.B. [testgetriebene Entwicklung](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene Entwicklung](https://en.wikipedia.org/wiki/Behavior-driven_development)).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests zur _LocalLibrary_ Website hinzugefügt werden.

### Arten des Testens

Es gibt zahlreiche Typen, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten von einzelnen Komponenten, oft bis zur Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, dass der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Codeänderungen nicht wieder eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests kennen die erforderlichen Interaktionen zwischen Komponenten, aber nicht unbedingt die internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website abdecken.

> [!NOTE]
> Andere häufige Testarten umfassen Black Box, White Box, manuelle, automatisierte, Canary, Smoke, Conformance, Akzeptanz, funktionale, System-, Leistungs-, Last- und Stresstests. Schauen Sie sie nach, um mehr Informationen zu erhalten.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Schichten von Logik besteht – von der HTTP-Level-Anfragenbearbeitung, über Modellabfragen, Formularvalidierung und Verarbeitung bis hin zum Vorlagen-Rendering.

Django bietet ein Test-Framework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Test-Framework sowohl für Unit- als auch für Integrationstests geeignet. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und Django-spezifischem Verhalten zu unterstützen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools für [die Verwendung verschiedener Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), um beispielsweise mit dem beliebten [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) Framework zu integrieren, um zu simulieren, wie ein Benutzer mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django (oder _unittest_) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, ob spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden „assert“ Methoden, um zu überprüfen, dass Ausdrücke zu `True`- oder `False`-Werten führen oder dass zwei Werte gleich sind, usw.). Wenn Sie einen Testrun starten, führt das Framework die gewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, mit gemeinsamen Setup- und/oder Tear-Down-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine bereinigte Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um zu simulieren, wie ein Benutzer mit dem Code auf der View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Basisklasse erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Klasse ist sehr praktisch, aber kann dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie wissen, was Sie mit dieser Klasse tun können, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Wenn Sie beispielsweise das unten definierte `Author`-Modell betrachten, müssen Sie nicht explizit testen, dass `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies von Django definiert ist (obwohl Sie in der Praxis diese Funktionalität während der Entwicklung unweigerlich testen werden). Sie müssen auch nicht testen, dass das `date_of_birth` validiert wurde, um ein Datumsfeld zu sein, da dies wiederum etwas ist, das in Django implementiert ist.

Sie sollten jedoch den Text für die Labels überprüfen (_First name, Last name, Date of birth, Died_) und die Größe des Feldes, das für den Text zugewiesen ist (_100 Zeichen_), da dies Teil Ihres Designs ist und etwas, das in Zukunft zerstört/verändert werden könnte.

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

Ähnlich sollten Sie sicherstellen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da dies Ihr Code/Geschäftslogik ist. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django `reverse()` Methode ordnungsgemäß implementiert wurde. Daher testen Sie, ob die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser werden feststellen, dass wir das Geburts- und Sterbedatum auf sinnvolle Werte beschränken und überprüfen möchten, dass der Tod nach der Geburt kommt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modellfelder und Modell-Validatoren definieren können, werden sie auf Formular-Ebene nur verwendet, wenn sie von der `clean()` Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()` Methode des Modells muss spezifisch aufgerufen werden.)

Mit diesen Überlegungen im Hinterkopf schauen wir uns an, wie man Tests definiert und ausführt.

## Übersicht über die Teststruktur

Bevor wir uns mit dem Detail "was zu testen" befassen, schauen wir uns zuerst kurz an, _wo_ und _wie_ Tests definiert werden.

Django verwendet die unittest-modul's [eingebaute Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), die Tests im aktuellen Arbeitsverzeichnis in jeder Datei mit dem Muster **test\*.py** entdecken wird. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede gewünschte Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten (Views), Formulare und alle anderen Arten von Code zu haben, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur, wie oben in Ihrem _LocalLibrary_-Projekt gezeigt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (diese informiert Python, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelett-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [die Django-Skelett-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website). Es ist völlig "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell mit einer sehr großen und unhandlichen Testdatei enden.
>
> Löschen Sie die Skelett-Datei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie eine Testklasse für jedes Modell/Ansicht/Formular hinzu, das Sie testen möchten, mit einzelnen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse haben, um einen spezifischen Anwendungsfall zu testen, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, dass ein Modellsfeld ordnungsgemäß validiert wird, mit Funktionen, um jeden der möglichen Fehlerfälle zu testen). Auch hier liegt die Struktur sehr bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die untenstehende Testklasse am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse erstellt, indem man von `TestCase` ableitet.

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

Die neue Klasse definiert zwei Methoden, die Sie für die vorkonfiguration von Tests verwenden können (zum Beispiel, um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für die Einrichtungen auf Klassenebene aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden verändert oder geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte einzurichten, die durch den Test verändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()` Methode, die wir nicht verwendet haben. Diese Methode ist insbesondere für Datenbanktests nicht nützlich, da die `TestCase`-Basisklasse die Datenbankbereinigung für Sie übernimmt.

Darunter haben wir eine Anzahl von Testmethoden, die `Assert`-Funktionen verwenden, um zu überprüfen, ob Bedingungen wahr, falsch oder gleich (`AssertTrue`, `AssertFalse`, `AssertEqual`) sind. Wenn die Bedingung nicht wie erwartet ausgewertet wird, wird der Test fehlschlagen und den Fehler auf Ihrer Konsole melden.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standard-Assertions, die von **unittest** bereitgestellt werden. Es gibt andere Standard-Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umgeleitet wird (`assertRedirects`), um zu testen, ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`), etc.

> [!NOTE]
> Sie sollten normalerweise keine **print()** Funktionen in Ihren Tests enthalten, wie oben gezeigt. Wir machen das hier nur, damit Sie die Reihenfolge sehen können, in der die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Tests ausführen

Der einfachste Weg, um alle Tests auszuführen, besteht darin, den Befehl zu verwenden:

```bash
python3 manage.py test
```

Dieser Befehl entdeckt alle Dateien mit dem Muster **test\*.py** unter dem aktuellen Verzeichnis und führt alle Tests aus, die mit den geeigneten Basisklassen definiert sind (hier haben wir eine Anzahl von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit und Tests). Standardmäßig melden die Tests zunächst nur Fehler, gefolgt von einer Zusammenfassung der Tests.

> [!NOTE]
> Wenn Sie Fehler ähnlich wie: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass Testen standardmäßig nicht _collectstatic_ ausführt, und Ihre App eine Speicherklasse verwendet, die es erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für mehr Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu überwinden - die einfachste ist, _collectstatic_ auszuführen, bevor Sie die Tests ausführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis von _LocalLibrary_ aus. Sie sollten eine Ausgabe wie die untenstehende sehen.

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

Hier sehen wir, dass ein Test fehlgeschlagen ist, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieses Scheitern wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der Testausgabe oben lernen sollten, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse aufgerufen wird und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie erneut daran, dass normalerweise keine solcher `print()`-Funktionen zu Ihren Tests hinzugefügt würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen können und wie Sie kontrollieren können, wie viel Information die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die erfolgreichen Tests sowie die Fehler aufzulisten (und viele Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Level sind 0, 1, 2 und 3, wobei der Standardwert "1" ist.

### Beschleunigung

Wenn Ihre Tests unabhängig sind, können Sie sie auf einer Multiprozessormaschine erheblich beschleunigen, indem Sie sie parallel ausführen. Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus. Das `auto` ist optional und Sie können auch eine bestimmte Anzahl an Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie eine Untergruppe Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu den Paket(en), dem Modul, der `TestCase`-Unterklasse oder Methode angeben:

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

### Andere Testläufer-Optionen

Der Testläufer bietet viele weitere Optionen, einschließlich der Fähigkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen. Für weitere Informationen siehe die Django [Testläufer](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary-Tests

Jetzt wissen wir, wie man unsere Tests ausführt und was wir testen müssen, lassen Sie uns einige praktische Beispiele ansehen.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie mehr tun können.

### Modelle

Wie oben besprochen, sollten wir alles testen, was Teil unseres Designs ist oder das von uns geschriebener Code definiert ist, aber nicht Bibliotheken/Code, die bereits von Django oder dem Python-Entwicklungsteam getestet wurden.

Zum Beispiel, betrachten Sie das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, da obwohl wir die meisten von ihnen nicht explizit angegeben haben, wir ein Design haben, das sagt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, dass die Feldlabels ihre beabsichtigten Werte haben. Ähnlich, während wir darauf vertrauen, dass Django ein Feld mit der angegebenen Länge erstellen wird, ist es sinnvoll, einen Test für diese Länge zu spezifizieren, um sicherzustellen, dass es wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py** und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, wobei wir einen beschreibenden Namen verwenden, damit wir in der Testausgabe leicht alle fehlgeschlagenen Tests identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden werden, aber in keinem der Tests ändern werden.

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

Die Feldtests überprüfen, ob die Werte der Feldlabels (`verbose_name`) und die Größe der Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Punkte sind:

- Wir können den `verbose_name` nicht direkt mit `author.first_name.verbose_name` erhalten, da `author.first_name` ein _String_ ist (kein Handle für das `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Felds zu bekommen und dieses zu nutzen, um nach den zusätzlichen Informationen zu suchen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund hierfür ist, dass, wenn der Test fehlschlägt, die Ausgabe für das erstere Ihnen sagt, was das Label tatsächlich war, wodurch das Debuggen des Problems ein wenig einfacher wird.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Labels sowie der Test für die Länge des `last_name` Feldes wurden ausgelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie die oben gezeigten Benennungskonventionen und Ansätze folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen letztlich nur, dass der Objektname im Format "Nachname, Vorname" wie erwartet konstruiert wurde und dass die URL, die wir für ein `Author`-Objekt erhalten, wie erwartet ist.

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

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell so erstellt haben, wie wir es im Modelle-Tutorial beschrieben haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death` Label wie unten gezeigt erhalten. Der Test schlägt fehl, weil er geschrieben wurde, in der Erwartung, dass die Labeldefinition der Django-Konvention folgt, das erste Zeichen des Labels nicht zu groß zu schreiben (Django macht das für Sie).

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

Das ist ein sehr kleiner Fehler, aber er zeigt, wie das Schreiben von Tests jegliche Annahmen, die Sie möglicherweise gemacht haben, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**) zu "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir diese nicht weiter diskutieren. Fühlen Sie sich frei, eigene Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie für das Testen Ihrer Formulare ist die gleiche, wie für das Testen Ihrer Modelle; Sie müssen alles testen, was Sie codiert haben oder was Ihr Design spezifiziert, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Im Allgemeinen bedeutet dies, dass Sie testen sollten, dass die Formulare die Felder haben, die Sie wünschen, und dass diese mit den entsprechenden Labels und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, ob Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und die Validierung erstellt) – d.h. Sie müssen nicht testen, dass ein E-Mail Feld nur E-Mails akzeptiert. Sie müssen jedoch die zusätzliche Validierung testen, die Sie erwarten, dass sie auf den Feldern durchgeführt wird und alle Nachrichten, die Ihr Code für Fehler generiert.

Betrachten Sie unser Formular zur Erneuerung von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das ein Label und einen Hilfetext haben wird, den wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py** Datei und ersetzen Sie bestehenden Code durch den folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen mit dem Import unserer Form und einiger Python- und Django-Bibliotheken, die helfen, zeitbezogene Funktionalitäten zu testen. Wir deklarieren dann unsere Formtestklasse auf die gleiche Weise wie bei den Modellen, mit einem beschreibenden Namen für unsere von `TestCase` abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, dass das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld über das Felderwörterbuch zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, da, obwohl Django das richtige Label rendert, es `None` zurückgibt, wenn der Wert nicht explizit gesetzt ist.

Die restlichen Funktionen testen, dass das Formular für Erneuerungsdaten, die sich gerade innerhalb des akzeptablen Bereichs befinden, gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumwerte um unser aktuelles Datum (`datetime.date.today()`) unter Verwendung von `datetime.timedelta()` (in diesem Fall mit Angabe einer Anzahl von Tagen oder Wochen) konstruieren. Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir weder die Datenbank noch den Test-Client. Ziehen Sie in Betracht, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch überprüfen, dass die richtigen Fehler ausgelöst werden, wenn das Formular ungültig ist. Dies wird jedoch in der Regel als Teil der View-Verarbeitung durchgeführt, daher kümmern wir uns darum im nächsten Abschnitt.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstelle von Klasse `RenewBookForm(forms.Form)` verwenden, wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das war's bei den Formularen; wir haben noch einige andere, aber sie werden von unseren generischen klassenbasierten Bearbeitungsansichten automatisch erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code immer noch erfolgreich ist!

### Ansichten

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse agiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen an einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von niedrigem HTTP-Level (Ergebnisköpfe und Statuscodes) bis hin zur Vorlage, die wir verwenden, um das HTML zu rendern, und die Kontextdaten, die wir übergeben. Wir können auch die Kette der Weiterleitungen (falls vorhanden) sehen und die URL und den Statuscode bei jedem Schritt überprüfen. Dies erlaubt uns zu überprüfen, ob jede View das tut, was erwartet wird.

Fangen wir mit einer unserer einfachsten Ansichten an, die eine Liste aller Autoren bereitstellt. Diese wird bei URL **/catalog/authors/** angezeigt (eine URL, die im URL-Konfigurationsnamen 'authors' lautet).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen, sollten Sie argumentieren, dass das Einzige, was Sie testen müssen, ist, dass die Ansicht an der richtigen URL zugänglich ist und unter ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie damit, Tests zu schreiben, die bestätigen, dass die Ansicht alle Autoren anzeigt und diese in 10er-Paginiertabenen gruppiert.

Öffnen Sie die **/catalog/tests/test_views.py** Datei und ersetzen Sie vorhandenen Text mit dem folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()` Methode richten wir eine Anzahl von `Author` Objekten ein, damit wir unser Paging testen können.

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

Alle Tests verwenden den Client (der unserer abgeleiteten `TestCase`-Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version prüft eine spezifische URL (beachten Sie, nur der spezifische Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie für ihren Statuscode, die verwendete Vorlage, ob die Antwort paginiert ist, die Anzahl der zurückgegebenen Elemente und die Gesamtanzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die `paginate_by` Variable in Ihrer **/catalog/views.py** Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, dass die richtige Anzahl von Elementen in paginierten Vorlagen angezeigt wird, oben und in den folgenden Abschnitten aktualisieren. Wenn Sie beispielsweise die Variable für die Autorenliste-Seite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben auf:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, das ist die Kontextvariable, die von der Ansicht an die Vorlage übergeben wird.
Das ist unglaublich nützlich für das Testen, weil es uns ermöglicht zu bestätigen, dass unsere Vorlage alle Daten erhält, die sie benötigt. Mit anderen Worten, wir können überprüfen, ob wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält, was einen weiten Weg geht, um zu überprüfen, dass alle Rendering-Probleme ausschließlich der Vorlage zuzuschreiben sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In manchen Fällen möchten Sie eine Ansicht testen, die nur für eingeloggte Benutzer verfügbar ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` sehr ähnlich wie unsere vorherige Ansicht, aber ist nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die von dem aktuellen Benutzer ausgeliehen sind, den Status "Leihgabe" haben und "älteste zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzerkonten und `BookInstance`-Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "Wartung" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer bestimmten `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Herausforderung_ erstellt wurde. Kommentieren Sie in diesem Fall die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Sie sollten dies auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, dass die Ansicht auf eine Login-Seite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggen Benutzer angezeigt wird, loggen wir unseren Testbenutzer zuerst ein, greifen dann erneut auf die Seite zu und überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests verifiziert, dass unsere Ansicht nur Bücher zurückgibt, die an unseren aktuellen Ausleiher verliehen sind. Kopieren Sie den Code unten und fügen Sie ihn am Ende der obigen Testklasse hinzu.

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

Sie könnten auch Paginierungstests hinzufügen, sollten Sie dies wünschen!

#### Testen von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den obigen Fällen, da Sie mehrere Codepfade testen müssen: anfängliche Anzeige, Anzeige nach fehlgeschlagener Validierung der Daten und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden wie für Ansichten, die nur angezeigt werden.

Um zu demonstrieren, lassen Sie uns einige Tests für die Ansicht zum Erneuern von Büchern (`renew_book_librarian()`) schreiben:

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

Wir müssen testen, dass die Ansicht nur für Benutzer verfügbar ist, die die Berechtigung `can_mark_returned` haben, und dass Benutzer auf eine HTTP 404-Fehlerseite umgeleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, dass der ursprüngliche Wert des Formulars mit einem Datum drei Wochen in der Zukunft vorbesetzt ist und dass wir, falls die Validierung erfolgreich war, zur Anzeige "alle ausgeliehenen Bücher" umgeleitet werden. Als Teil der Überprüfung der Validierung-Fehlertests werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Diese erstellt zwei Benutzer und zwei Buchinstanzen, gibt aber nur einem Benutzer die für den Zugriff auf die Ansicht erforderliche Berechtigung.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Ausleiher ist (sollte erfolgreich sein), und was passiert, wenn sie versuchen, auf eine `BookInstance` zuzugreifen, die nicht existiert. Wir überprüfen auch, dass die richtige Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, zur Klasse hinzu. Diese überprüft, dass das Ausgangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, den Wert des Initialwerts des Formularfelds (`response.context['form'].initial['renewal_date'])` abzufragen.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch zur Klasse hinzu) überprüft, dass die View auf eine Liste aller ausgeliehenen Bücher umleitet, wenn die Erneuerung erfolgreich ist. Was sich hier unterscheidet, ist, dass wir zum ersten Mal zeigen, wie Sie `POST`-Daten mit dem Client senden können. Die _Daten_ des Posts sind das zweite Argument der `post`-Funktion und werden als Wörterbuch von Schlüssel/Werte angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _all-borrowed_ Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code könnte stattdessen auf die Startseite '/' umleiten. Falls ja, ändern Sie die letzten beiden Codezeilen in der Testklasse ab, um wie der unten stehende Code zu sein. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher Prüfen auf `/catalog/` statt `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse, wie unten zu sehen. Diese testen erneut `POST`-Anfragen, aber in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Die gleichen Techniken können zum Testen der anderen Ansicht verwendet werden.

### Vorlagen

Django bietet Test-APIs, um zu überprüfen, ob die korrekte Vorlage von Ihren Ansichten aufgerufen wird und um zu überprüfen, ob die korrekten Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung in Django für das Testen, dass Ihr HTML-Output wie erwartet gerendert wird.

## Andere empfohlene Test-Tools

Djangos Test-Framework kann Sie unterstützen, effektive Unit- und Integrationstests zu schreiben — wir haben nur an der Oberfläche dessen, was das zugrunde liegende **unittest**-Framework tun kann, geschabt, ganz zu schweigen von den Ergänzungen durch Django (zum Beispiel, schauen Sie nach, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Obwohl es zahlreiche andere Test-Tools gibt, die Sie verwenden können, heben wir nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie beginnen und Sie versuchen herauszufinden, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, um Tests in einem echten Browser zu automatisieren. Es ermöglicht Ihnen, ein realer Benutzer zu simulieren, der mit der Website interagiert, und bietet ein hervorragendes Framework für das Systemtesten Ihrer Website (der nächste Schritt nach Integrationstests).

## Fordern Sie sich selbst heraus

Es gibt viele weitere Modelle und Ansichten, die wir testen können. Versuchen Sie als Herausforderung, einen Testfall für die `AuthorCreate` Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Dazu gehört, wer Zugriff hat, das Anfangsdatum, die verwendete Vorlage und wohin die Ansicht bei Erfolg umleitet.

Vielleicht verwenden Sie den folgenden Code, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuzuweisen

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

Das Schreiben von Testcode ist weder angenehm noch glamourös und wird daher oft zuletzt gelassen (oder überhaupt nicht gemacht) bei der Erstellung einer Website. Es ist jedoch ein wesentlicher Teil, um sicherzustellen, dass Ihr Code nach Änderungen sicher zu veröffentlichen ist und kosteneffektiv zu warten ist.

In diesem Tutorial haben wir gezeigt, wie man Tests für Ihre Modelle, Formulare und Ansichten schreibt und ausführt. Am wichtigsten ist, dass wir eine kurze Zusammenfassung gegeben haben, was Sie testen sollten, was oft die schwierigste Sache ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisiertes Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Testwerkzeuge Referenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testing in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
