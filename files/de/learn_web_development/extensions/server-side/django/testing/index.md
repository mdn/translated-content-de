---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Da Websites größer werden und schwieriger manuell zu testen sind, ergeben sich vermehrt Herausforderungen. Nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden komplexer. Eine kleine Änderung in einem Bereich kann andere Bereiche beeinflussen, was zu weiteren Änderungen führen muss, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, während weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, ist das Schreiben automatisierter Tests, die bei jeder Änderung leicht und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit-Testing_ Ihrer Website mit dem Testframework von Django automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Unit-Tests für auf Django basierende Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten zum Anzeigen von Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Datensätzen, wenn Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann das manuelle Navigieren zu jeder Seite und das oberflächliche Überprüfen, ob alles erwartungsgemäß funktioniert, mehrere Minuten dauern. Je mehr Änderungen vorgenommen und die Website erweitert wird, desto mehr Zeit wird benötigt, um manuell zu überprüfen, dass alles "ordnungsgemäß" funktioniert. Wenn wir so weitermachen, würden wir schließlich den größten Teil unserer Zeit mit Testen verbringen und sehr wenig Zeit mit der Verbesserung unseres Codes.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests durchgeführt werden können, auf viel detaillierterer Ebene testen und jedes Mal genau dieselbe Funktionalität prüfen (menschliche Tester sind bei Weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßig ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau, wo der Code nicht wie erwartet funktioniert.

Außerdem können automatisierte Tests als erster echter "Nutzer" Ihres Codes agieren und Sie zwingen, rigoros zu definieren und zu dokumentieren, wie Ihre Website funktionieren sollte. Oft sind sie die Basis für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsmethoden mit der Definition und Implementierung von Tests, wonach der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z.B. [testgetriebene](https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung) und [verhaltensgetriebene](https://de.wikipedia.org/wiki/Behaviour_Driven_Development) Entwicklung).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests zur _LocalLibrary_-Website hinzugefügt wird.

### Arten des Testens

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft bis zur Klassen- und Funktionsebene.
- Regressions-Tests
  - : Tests, die historische Bugs reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Bug behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten zusammenarbeiten, wenn sie gemeinsam verwendet werden. Integrationstests kennen die erforderlichen Interaktionen zwischen Komponenten, aber nicht notwendigerweise die internen Operationen jeder Komponente. Sie können von einfachen Gruppierungen von Komponenten bis hin zur gesamten Website reichen.

> [!NOTE]
> Weitere gängige Testarten sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Last- und Stresstests. Schauen Sie sie nach, um mehr Informationen zu erhalten.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikschichten besteht – vom HTTP-Level-Anfragehandling über Modellabfragen bis hin zur Formularvalidierung und -verarbeitung sowie Template-Rendering.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Testframework sowohl für Unit- als auch für Integrationstests geeignet. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und Django-spezifischem Verhalten zu erleichtern. Diese erlauben es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django stellt auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zum [Verwenden verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks) zur Verfügung. Beispielsweise können Sie sich mit dem populären [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)-Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest_) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, ob bestimmte Funktionalitäten wie erwartet funktionieren (Tests verwenden "assert"-Methoden, um zu testen, ob Ausdrücke in `True` oder `False` Werte resultieren, oder ob zwei Werte gleich sind, etc.). Wenn Sie einen Testlauf starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt, mit allgemeinem Setup- und/oder Tear-Down-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt vor dem Ausführen ihrer Tests eine saubere Datenbank und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der auf der View-Ebene mit dem Code interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt werden.

> [!NOTE]
> Die Klasse [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) ist sehr praktisch, aber kann dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test wird seine eigene Datenbank einrichten oder die View-Interaktion simulieren müssen). Sobald Sie mit dem, was Sie mit dieser Klasse tun können, vertraut sind, möchten Sie vielleicht einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, aber nicht die Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Nehmen Sie zum Beispiel das im Folgenden definierte `Author`-Modell. Sie müssen nicht explizit testen, dass `first_name` und `last_name` korrekt als `CharField` in der Datenbank gespeichert wurden, da dies von Django definiert ist (obwohl Sie diese Funktionalität in der Praxis wahrscheinlich während der Entwicklung testen werden). Ebenso müssen Sie nicht testen, dass das `date_of_birth` als Datumsfeld validiert wurde, da dies erneut von Django implementiert wird.

Sie sollten jedoch den Text testen, der für die Bezeichnungen verwendet wird (_First name, Last name, Date of birth, Died_), und die Größe des für den Text zugewiesenen Feldes (_100 Zeichen_), da diese Teil Ihres Designs sind und in Zukunft gebrochen/geändert werden könnten.

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

Ebenso sollten Sie sicherstellen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihre eigene Code-/Geschäftslogik sind. Im Falle von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` richtig implementiert wurde, aber was Sie testen, ist, dass die zugehörige Ansicht tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser könnten feststellen, dass wir auch das Geburts- und Sterbedatum auf sinnvolle Werte einschränken und sicherstellen möchten, dass der Tod nach der Geburt kommt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validierer für Modellfelder und Modellvalidierer definieren können, werden diese auf Formularebene nur verwendet, wenn sie von der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

Mit diesen Informationen im Hinterkopf, lassen Sie uns beginnen, wie man Tests definiert und ausführt.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, "was zu testen ist", werfen wir einen kurzen Blick darauf, _wo_ und _wie_ Tests definiert sind.

Django verwendet das [integrierte Test-Discovery](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Unittest-Moduls, welches Tests im aktuellen Arbeitsverzeichnis in jeder Datei mit dem Muster **test\*.py** entdeckt. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und jede andere Art von Code, den Sie testen müssen, zu haben. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben in Ihrem _LocalLibrary_-Projekt gezeigt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelett-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Skelett-Website erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Es ist vollkommen "rechtlich", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei erhalten.
>
> Löschen Sie die Skelett-Datei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie unten gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft werden Sie eine Testklasse für jedes Modell/View/Formular hinzufügen, das Sie testen möchten, mit einzelnen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse zum Testen einer bestimmten Anwendungsfalles haben, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu prüfen, dass ein Modelfeld richtig validiert wird, mit Funktionen, die jedes der möglichen Fehlerfälle testen). Auch hier liegt die Struktur ganz bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die Testklasse unten am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse durch Ableiten von `TestCase` erstellt.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Pre-Test-Konfiguration verwenden können (zum Beispiel, um alle Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testlaufs für die Einrichtung auf Klassenebene aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden geändert oder verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte zu erstellen, die von dem Test verändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbank-Teardown für Sie übernimmt.

Unterhalb dieser haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, schlägt der Test fehl und meldet den Fehler in Ihrer Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind standardmäßige Assertions, die von **unittest** bereitgestellt werden. Es gibt weitere standardmäßige Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View weiterleitet (`assertRedirects`) oder ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`), etc.

> [!NOTE]
> Sie sollten normalerweise keine **print()**-Funktionen in Ihre Tests einfügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge der Setup-Funktionen in der Konsole sehen können (im nächsten Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, alle Tests auszuführen, ist der Befehl:

```bash
python3 manage.py test
```

Dieser entdeckt alle Dateien mit dem Muster **test\*.py** im aktuellen Verzeichnis und führt alle Tests aus, die mit den entsprechenden Basisklassen definiert sind (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält aktuell Tests). Standardmäßig berichten die Tests individuell nur über Testfehler, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler erhalten, die ähnlich sind wie: `ValueError: Missing staticfiles manifest entry...`, könnte dies daran liegen, dass `collectstatic` standardmäßig bei Tests nicht ausgeführt wird und Ihre App eine Storage-Klasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt mehrere Möglichkeiten, wie Sie dieses Problem lösen können – der einfachste Weg ist, `collectstatic` auszuführen, bevor Sie die Tests ausführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sollten eine Ausgabe ähnlich der untenstehenden sehen.

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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der oben gezeigten Testausgabe lernen können, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse aufgerufen wird und `setUp()` vor jeder Methode aufgerufen wird.
Erinnern Sie sich noch einmal daran, dass Sie normalerweise solche `print()`-Funktionen nicht in Ihre Tests einfügen würden.

Die nächsten Abschnitte zeigen, wie Sie bestimmte Tests ausführen können und wie Sie steuern, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testlauf erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die erfolgreichen Tests sowie die Fehler (und viele Informationen darüber, wie die Testdatenbank eingerichtet ist) aufzulisten, können Sie die Verbosity auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Level sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Dinge beschleunigen

Wenn Ihre Tests unabhängig sind, können Sie diese auf einer Mehrkernmaschine erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich, was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Bestimmte Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punkt-Pfad zum/n Paket(en), Modul, `TestCase`-Unterklasse oder Methode angeben:

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

Der Test-Runner bietet viele andere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen.
Für weitere Informationen siehe die Django [Test Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary Tests

Nun, da wir wissen, wie unsere Tests ausgeführt werden, und was für Dinge wir testen müssen, sehen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber das sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was mehr Sie tun können.

### Modelle

Wie oben besprochen, sollten Sie alles testen, was Teil Ihres Designs ist oder von Ihnen geschriebenem Code definiert wird, aber nicht die von Django oder dem Python-Entwicklungsteam bereitgestellten Bibliotheken/Code.

Betrachten Sie zum Beispiel das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, denn auch wenn wir nicht die meisten davon explizit spezifiziert haben, haben wir ein Design, das sagt, welche diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, dass die Feldbezeichnungen ihre beabsichtigten Werte haben. Ebenso, während wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, lohnt es sich, einen Test für diese Länge anzugeben, um sicherzustellen, dass er wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie allen vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, wobei wir einen beschreibenden Namen verwenden, damit wir fehlschlagende Tests in der Testausgabe leicht identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden, aber in keinem der Tests modifizieren werden.

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

- Wir können das `verbose_name` nicht direkt mit `author.first_name.verbose_name` erhalten, da `author.first_name` ein _String_ ist (kein Handle zum `first_name`-Objekt, mit dem wir auf seine Eigenschaften zugreifen können). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und damit die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` statt `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe für das erstere Ihnen sagt, was das Label tatsächlich war, was das Debuggen des Problems nur ein wenig einfacher macht.

> [!NOTE]
> Tests für die `last_name`- und `date_of_birth`-Labels sowie der Test für die Länge des `last_name`-Feldes wurden weggelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie die Namenskonventionen und Ansätze hiervon verwenden.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, dass der Objektname im Format "Last Name", "First Name" wie erwartet konstruiert wurde und dass die URL, die wir für ein `Author`-Element erhalten, wie erwartet ist.

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

Führen Sie jetzt die Tests aus. Wenn Sie das Author-Modell wie im Models-Tutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death`-Label wie unten gezeigt erhalten. Der Test schlägt fehl, weil er geschrieben wurde und erwartet, dass die Labeldefinition Djangos Konvention folgt, den ersten Buchstaben des Labels nicht zu kapitalisieren (Django macht dies für Sie).

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

Dies ist ein sehr kleiner Bug, zeigt jedoch, wie das Schreiben von Tests dazu beitragen kann, dass alle Annahmen, die Sie möglicherweise gemacht haben, gründlicher überprüft werden.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**) in "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir diese nicht weiter diskutieren. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie für das Testen Ihrer Formulare ist dieselbe wie für das Testen Ihrer Modelle; Sie müssen alles testen, was Sie codiert haben oder was Ihr Design spezifiziert, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Normalerweise bedeutet das, dass Sie überprüfen sollten, ob die Formulare die Felder haben, die Sie möchten, und dass diese mit geeigneten Labels und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und Validierung erstellt) — d.h. Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssen jedoch alle zusätzlichen Validierungen testen, die Sie erwarten, dass sie für die Felder durchgeführt werden, und alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular für die Verlängerung von Büchern. Dies hat nur ein Feld für das Erneuerungsdatum, das ein Label und Hilfetext haben wird, das wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei und ersetzen Sie allen vorhandenen Code durch den folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen, indem wir unser Formular und einige Python- und Django-Bibliotheken importieren, um Zeit-bezogene Funktionalität zu testen. Dann deklarieren wir unsere Formular-Testklasse auf dieselbe Weise, wie wir es für Modelle getan haben, unter Verwendung eines beschreibenden Namens für unsere `TestCase`-abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld über das Felder-Dictionary zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, denn auch wenn Django das richtige Label rendert, gibt es `None` zurück, wenn der Wert nicht _explizit_ gesetzt ist.

Die restlichen Funktionen testen, ob das Formular für Erneuerungsdaten innerhalb des akzeptablen Bereichs gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall mit einer Anzahl von Tagen oder Wochen). Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir nicht tatsächlich die Datenbank oder den Testclient. Erwägen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch validieren, dass die richtigen Fehler ausgegeben werden, wenn das Formular ungültig ist. Dies wird jedoch normalerweise während der Verarbeitung der Ansicht durchgeführt, daher werden wir uns im nächsten Abschnitt damit befassen.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms)-Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** statt **'renewal_date'**.

Das war alles für die Formulare; wir haben noch einige andere, aber sie werden automatisch von unseren generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code weiterhin besteht!

### Ansichten

Um unser View-Verhalten zu validieren, verwenden wir den Django Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse wirkt wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen an eine URL zu simulieren und die Antwort zu beobachten. Wir können fast alles zur Antwort sehen, vom Low-Level-HTTP (Ergebnis-Header und Statuscodes) bis hin zum Template, das wir verwenden, um das HTML zu rendern und die übergebenen Kontextdaten. Wir können auch die Kette von Weiterleitungen (falls vorhanden) sehen und die URL und den Statuscode bei jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, ob jede Ansicht das tut, was erwartet wird.

Lassen Sie uns mit einer unserer einfachsten Ansichten beginnen, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL, die im URL-Konfigurationsnamen 'authors' genannt wird).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns getan. Man könnte argumentieren, dass, wenn Sie Django trauen, dass das Einzige, was Sie testen müssen, ist, ob die Ansicht unter der richtigen URL zugänglich ist und ob sie mit ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgesteuerten Entwicklungsprozess verwenden, beginnen Sie damit, Tests zu schreiben, die bestätigen, dass die Ansicht alle Autoren anzeigt und diese in Gruppen von 10 paginiert.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie jeden vorhandenen Text mit dem folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()`-Methode richten wir eine Anzahl von `Author`-Objekten ein, damit wir die Paginierung testen können.

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

Alle Tests verwenden den Client (der zur abgeleiteten Klasse unseres `TestCase` gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, dem verwendetem Template, ob die Antwort paginiert ist, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die `paginate_by`-Variable in Ihrer **/catalog/views.py**-Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, dass die richtige Anzahl von Elementen in paginierten Templates angezeigt werden, oben und in den folgenden Abschnitten aktualisieren. Beispielsweise, wenn Sie die Variable für die Autorlisten-Seite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die von der Ansicht dem Template übergeben wird.
Dies ist unglaublich nützlich für das Testen, denn es ermöglicht uns zu bestätigen, dass unser Template alle Daten bekommt, die es benötigt. Mit anderen Worten können wir überprüfen, dass wir das beabsichtigte Template verwenden und welche Daten das Template erhält, was einen großen Schritt zur Bestätigung darstellt, dass etwaige Renderprobleme allein auf das Template zurückzuführen sind.

#### Ansichten, die auf angemeldete Benutzer beschränkt sind

In einigen Fällen werden Sie eine Ansicht testen wollen, die nur auf angemeldete Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` unserer vorherigen Ansicht sehr ähnlich, aber nur für angemeldete Benutzer verfügbar, und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status "on loan" haben und in aufsteigender "ältester erster"-Reihenfolge angezeigt werden.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzerkonten und `BookInstance`-Objekte (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen) zu erstellen, die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben zugleich den Status aller Bücher auf "maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Herausforderung_ erstellt wurde. Kommentieren Sie in diesem Fall den Teil des Codes aus, der Language-Objekte erstellt oder importiert. Sie sollten dies auch im `RenewBookInstancesViewTest`-Abschnitt weiter unten tun.

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

Um zu überprüfen, dass die Ansicht zu einer Login-Seite umleitet, wenn der Benutzer nicht angemeldet ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu verifizieren, dass die Seite für einen angemeldeten Benutzer angezeigt wird, loggen wir zuerst unseren Testbenutzer ein und greifen dann erneut auf die Seite zu, um sicherzustellen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Die restlichen Tests überprüfen, dass unsere Ansicht nur Bücher zurückgibt, die an unseren aktuellen Ausleiher ausgeliehen sind. Kopieren Sie den Code unten und fügen Sie ihn am Ende der obigen Testklasse ein.

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

#### Testing von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den obigen Fällen, da Sie mehr Codepfade testen müssen: erste Anzeige, Anzeige, nachdem die Datenvalidierung fehlgeschlagen ist, und Anzeige, nachdem die Validierung erfolgreich war. Die gute Nachricht ist, dass wir den Client für das Testen fast genauso verwenden, wie wir es bei reinen Anzeigeansichten getan haben.

Zur Demonstration, lassen Sie uns einige Tests für die Ansicht schreiben, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen sicherstellen, dass die Ansicht nur für Benutzer verfügbar ist, die die `can_mark_returned`-Berechtigung haben, und dass Benutzer zu einer HTTP 404-Fehlerseite weitergeleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, dass der Initialwert des Formulars mit einem Datum in drei Wochen voraus vorgegeben ist, und dass, wenn die Validierung erfolgreich ist, wir zur Ansicht "alle ausgeliehenen Bücher" weitergeleitet werden. Im Rahmen der Überprüfung der Validierungsfehler-Tests werden wir auch prüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) an das Ende von **/catalog/tests/test_views.py** hinzu.
Dieser erstellt zwei Benutzer und zwei Buchinstanzen, gewährt jedoch nur einem Benutzer die zum Zugreifen auf die Ansicht erforderlichen Berechtigungen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Ausleiher ist (sollte Erfolg haben) und was passiert, wenn sie versuchen, auf ein nicht existierendes `BookInstance` zuzugreifen. Wir prüfen auch, dass das richtige Template verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, hinzu. Diese prüft, ob das initiale Datum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir auf den Wert des Anfangswerts des Formularfeldes (`response.context['form'].initial['renewal_date']`) zugreifen können.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch in die Klasse ein) überprüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher weiterleitet, wenn die Erneuerung erfolgreich ist. Was hier anders ist, ist, dass wir zum ersten Mal zeigen, wie Sie Daten unter Verwendung des Clients `POST`en können. Der _Data_ beim POST ist das zweite Argument der Post-Funktion und wird als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle ausgeliehenen_ Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code leitet möglicherweise stattdessen zur Startseite '/' weiter. In diesem Fall ändern Sie die letzten zwei Zeilen des Testcodes so, dass sie wie der Code unten aussehen. Das `follow=True` im Antrag stellt sicher, dass die Anfrage die finale Ziel-URL zurückgibt (daher wird `/catalog/` anstelle von `/` geprüft).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten zwei Funktionen in die Klasse, wie unten gezeigt. Diese testen erneut `POST`-Anfragen, jedoch in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Die gleichen Techniken können verwendet werden, um andere Ansichten zu testen.

### Templates

Django bietet Test-APIs, um zu überprüfen, ob das korrekte Template von Ihren Views aufgerufen wird, und um zu überprüfen, ob die korrekten Informationen gesendet werden. Es gibt jedoch keine spezifische Unterstützung für das Testen, ob Ihr HTML-Output wie erwartet gerendert wird.

## Andere empfohlene Testtools

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben – wir haben nur die Oberfläche dessen berührt, was das zugrunde liegende **unittest**-Framework kann, geschweige denn Djangos Ergänzungen (zum Beispiel, sehen Sie sich an, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Testtools gibt, die Sie verwenden können, werden wir nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie anfangen und herauszufinden versuchen, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, um Tests in einem echten Browser zu automatisieren. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework zum Systemtesten Ihrer Seite (der nächste Schritt nach Integrationstests).

## Fordern Sie sich heraus

Es gibt viele weitere Modelle und Ansichten, die wir testen können. Versuchen Sie als Herausforderung, einen Testfall für die `AuthorCreate`-Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles, was Sie spezifizieren oder das Teil des Designs ist, überprüfen müssen.
Dies umfasst, wer Zugriff hat, das Anfangsdatum, das verwendete Template und die Umleitung der Ansicht bei Erfolg.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuzuweisen.

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

Das Schreiben von Testcode ist weder unterhaltsam noch glamourös und wird folglich oft zuletzt (oder gar nicht) bei der Erstellung einer Website vorgenommen. Es ist jedoch ein wesentlicher Teil, um sicherzustellen, dass Ihr Code nach Änderungen sicher freizugeben ist und kostengünstig zu warten ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste zu ermitteln ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisierte Tests](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz zu Testtools](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden für das Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Beste Praktiken und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
