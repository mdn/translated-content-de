---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit dem Wachstum von Webseiten wird es schwieriger, sie manuell zu testen. Nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen Komponenten werden komplexer. Eine kleine Änderung in einem Bereich kann andere Bereiche beeinflussen, was dazu führt, dass mehr Änderungen erforderlich sind, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn weitere Änderungen vorgenommen werden. Eine Möglichkeit, diesen Problemen entgegenzuwirken, ist das Schreiben von automatisierten Tests, die einfach und zuverlässig bei jeder Änderung ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit Testing_ Ihrer Webseite mit dem Test-Framework von Django automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis dafür, wie Unit Tests für auf Django basierende Webseiten geschrieben werden.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten zur Anzeige von Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zur Erneuerung von `BookInstance`-Elementen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und Buchdatensätzen, falls Sie die _Challenge_ im [Formular-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Seite kann das manuelle Navigieren zu jeder Seite und das _oberflächliche_ Überprüfen, dass alles wie erwartet funktioniert, mehrere Minuten in Anspruch nehmen. Wenn wir Änderungen vornehmen und die Seite erweitern, wird die Zeit, die benötigt wird, um manuell zu überprüfen, ob alles "ordnungsgemäß" funktioniert, nur noch zunehmen. Wenn wir so weitermachen würden, würden wir schließlich die meiste Zeit mit dem Testen verbringen und sehr wenig Zeit mit der Verbesserung unseres Codes.

Automatisierte Tests können wirklich bei diesem Problem helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, sie auf einem viel detaillierteren Niveau testen können, und genau die gleiche Funktionalität jedes Mal testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Weil sie schnell sind, können automatisierte Tests häufiger ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau an, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realer "Benutzer" Ihres Codes fungieren und Sie dazu zwingen, sorgfältig zu definieren und zu dokumentieren, wie sich Ihre Webseite verhalten sollte. Oft sind sie die Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, wonach der Code geschrieben wird, um dem erforderlichen Verhalten zu entsprechen (z.B. [testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests zur _LocalLibrary_ Webseite hinzugefügt werden.

### Arten des Testens

Es gibt zahlreiche Arten, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft bis zur Klasse und Funktionsebene.
- Regressions-Tests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder aufgetreten ist.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests sind sich der erforderlichen Interaktionen zwischen Komponenten bewusst, aber nicht unbedingt der internen Abläufe jeder Komponente. Sie könnten einfache Gruppierungen von Komponenten bis hin zur gesamten Webseite abdecken.

> [!NOTE]
> Andere häufige Arten von Tests sind Black-Box-, White-Box-, manueller, automatisierter, Canary-, Smoke-, Konformitäts-, Akzeptanz-, funktionaler, System-, Leistungs-, Last- und Stresstests. Schauen Sie sich diese für weitere Informationen an.

### Was bietet Django für das Testen?

Das Testen einer Webseite ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von HTTP-Anfragen, über Modellabfragen bis hin zur Formularvalidierung und -verarbeitung und dem Rendern von Templates.

Django bietet ein Test-Framework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Test-Framework sowohl für Unit- als auch für Integrationstests geeignet. Das Django-Framework fügt API-Methoden und -Tools hinzu, um Web- und Django-spezifisches Verhalten zu testen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zur [Verwendung anderer Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), z.B. können Sie sich mit dem beliebten [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)-Framework verbinden, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django (oder _unittest_) Testbasisklassen ab ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und schreiben dann separate Methoden, um zu überprüfen, ob spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden "assert"-Methoden, um zu testen, ob Ausdrücke zu `True` oder `False` führen, oder ob zwei Werte gleich sind, etc.). Wenn Sie ein Testlauf starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt, mit gemeinsamem Setup- und/oder Tear-Down-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um die Interaktion eines Benutzers mit dem Code auf der View-Ebene zu simulieren. In den folgenden Abschnitten konzentrieren wir uns auf Unit Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt werden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test wird seine eigene Datenbank einrichten oder die View-Interaktion simulieren müssen). Sobald Sie mit dem, was Sie mit dieser Klasse tun können, vertraut sind, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, dass `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies von Django definiert ist (obwohl Sie natürlich in der Praxis diese Funktionalität während der Entwicklung unvermeidlich testen werden). Auch müssen Sie nicht testen, dass `date_of_birth` als Datumsfeld validiert wurde, da dies wiederum von Django implementiert wird.

Sie sollten jedoch prüfen, ob der Text für die Bezeichnungen (_First name, Last name, Date of birth, Died_) und die Größe des für den Text zugewiesenen Feldes (_100 Zeichen_) korrekt ist, da dies Teil Ihres Designs ist und in Zukunft kaputt/ geändert werden könnte.

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

Ähnlich sollten Sie überprüfen, ob die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie gewünscht funktionieren, da sie Ihr Code/Business-Logik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` ordnungsgemäß implementiert wurde, sodass Sie testen, ob die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser mögen feststellen, dass wir auch das Geburts- und Sterbedatum auf vernünftige Werte beschränken und überprüfen möchten, dass der Tod nach der Geburt kommt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modellfelder und Modellvalidatoren definieren können, werden diese nur auf der Formularebene verwendet, wenn sie von der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

In diesem Sinne lassen Sie uns damit beginnen, wie man Tests definiert und ausführt.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, "was man testen sollte", lassen Sie uns zunächst kurz anschauen, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [integrierte Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des unittest-Moduls, die Tests im aktuellen Arbeitsverzeichnis in Dateien mit dem Muster **test\*.py** entdeckt. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Views, Formulare und andere Codearten zu haben, die Sie testen müssen. Zum Beispiel:

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
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) gebaut haben. Es ist völlig "legitim", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell mit einer sehr großen und unübersichtlichen Testdatei enden.
>
> Löschen Sie die Skelettdatei, da wir sie nicht brauchen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft werden Sie eine Testklasse für jedes Modell/View/Formular hinzufügen, das Sie testen möchten, mit individuellen Methoden zum Testen bestimmter Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse zum Testen eines bestimmten Anwendungsfalls haben, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, ob ein Modellfeld korrekt validiert wird, mit Funktionen, um jeden möglichen Fehlerfall zu testen). Wieder einmal ist die Struktur weitgehend Ihnen überlassen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die folgende Testklasse am Ende der Datei hinzu. Die Klasse zeigt, wie Sie eine Testfallklasse erstellen, indem Sie von `TestCase` ableiten.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vorkonfiguration von Tests verwenden können (zum Beispiel, um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal am Anfang des Testruns für die Einrichtung auf Klassenebene aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden modifiziert oder geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die möglicherweise durch den Test geändert werden (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die Basisklasse `TestCase` die Datenbankzerstörung für Sie übernimmt.

Unter diesen haben wir eine Anzahl von Testmethoden, die `assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`assertTrue`, `assertFalse`, `assertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `assertTrue`, `assertFalse`, `assertEqual` sind Standard-Assertions, die von **unittest** bereitgestellt werden. Es gibt andere Standard-Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umleitet (`assertRedirects`), zu testen, ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Sie sollten normalerweise keine **print()**-Funktionen in Ihre Tests einfügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Einrichtungsfunktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, alle Tests auszuführen, ist das Verwenden des Befehls:

```bash
python3 manage.py test
```

Dieser Befehl entdeckt alle Dateien, die dem Muster **test\*.py** im aktuellen Verzeichnis entsprechen und führt alle Tests aus, die mit geeigneten Basisklassen definiert wurden (hier haben wir eine Anzahl von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig berichten die Tests nur über Testfehler, gefolgt von einer Zusammenfassung der Tests.

> [!NOTE]
> Wenn Sie Fehler ähnlich zu: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass das Testen nicht standardmäßig _collectstatic_ ausführt und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu überwinden - die einfachste ist es, _collectstatic_ auszuführen, bevor die Tests ausgeführt werden:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sollten eine Ausgabe wie die folgende sehen.

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
> Das Wichtigste, was Sie aus der Testausgabe oben lernen sollten, ist, dass es viel wertvoller ist, wenn Sie für Ihre Objekte und Methoden beschreibende/informative Namen verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie wieder daran, dass Sie normalerweise nicht diese Art von `print()` zu Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen können und wie Sie steuern, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die Testerfolge sowie die Fehler aufzulisten (und eine ganze Menge Informationen darüber, wie die Testdatenbank eingerichtet ist), können Sie die Verbosity auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Niveaus sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Dinge beschleunigen

Wenn Ihre Tests unabhängig sind, können Sie auf einer Mehrprozessor-Maschine erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zur/m Paket(en), Modul, `TestCase`-Unterklasse oder Methode angeben:

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

Der Test Runner bietet viele andere Optionen, einschließlich der Fähigkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen.
Für mehr Informationen siehe die Django [Test Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test) Dokumentation.

## Tests der LocalLibrary

Nun da wir wissen, wie man unsere Tests ausführt und welche Dinge wir testen sollten, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie sonst noch tun können.

### Modelle

Wie oben diskutiert, sollten Sie alles, was Teil Ihres Entwurfs ist oder durch Code, den Sie geschrieben haben, definiert wird, testen, jedoch nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Zum Beispiel sollten wir im unten gezeigten `Author`-Modell die Bezeichnungen für alle Felder testen, da wir zwar die meisten von ihnen nicht explizit angegeben haben, aber ein Design haben, das festlegt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, dass die Feldbezeichnungen ihre beabsichtigten Werte haben. Ebenso vertrauen wir zwar darauf, dass Django ein Feld der angegebenen Länge erstellt, es ist jedoch sinnvoll, einen Test für diese Länge anzugeben, um zu überprüfen, ob es wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py** und ersetzen Sie jeden vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, mit einem beschreibenden Namen, damit wir leicht erkennen können, welche Tests im Testoutput fehlschlagen. Wir rufen dann `setUpTestData()` auf, um ein Autor-Objekt zu erstellen, das wir verwenden, aber in keinem der Tests ändern werden.

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

Die Feldtests überprüfen, dass die Werte der Feldbezeichnungen (`verbose_name`) und dass die Größe der Zeichenfelder wie erwartet ist. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Dinge, die es zu beachten gilt, sind:

- Wir können die `verbose_name` nicht direkt mit `author.first_name.verbose_name` abrufen, da `author.first_name` ein _String_ ist (kein Handle auf das `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das Attribut `_meta` des Autors verwenden, um eine Instanz des Felds zu erhalten und diese zu verwenden, um nach zusätzlichen Informationen zu fragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass im Falle eines Testausfalls die Ausgabe für ersteres Ihnen mitteilt, was das Label eigentlich war, was das Debugging des Problems etwas erleichtert.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Beschriftungen, sowie der Test für die Länge des `last_name`-Feldes wurden ausgelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu und folgen Sie den angegebenen Namenskonventionen und Ansätzen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, ob der Objektname im "Nachname", "Vorname"-Format wie erwartet konstruiert wurde und dass die URL, die wir für ein `Author`-Element erhalten, wie erwartet ist.

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

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell wie im Model-Tutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für die `date_of_death`-Beschriftung sehen werden, wie unten gezeigt. Der Test schlägt fehl, weil er geschrieben wurde, in der Erwartung, dass die Bezeichnungsdefinition der Django-Konvention folgt, den ersten Buchstaben der Bezeichnung nicht zu kapitalisieren (Django tut dies für Sie).

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

Dies ist ein sehr kleiner Fehler, aber es zeigt doch, wie das Schreiben von Tests Ihnen helfen kann, jegliche Annahmen, die Sie möglicherweise getroffen haben, gründlicher zu überprüfen.

> [!NOTE]
> Ändern Sie die Beschriftung für das `date_of_death`-Feld (**/catalog/models.py**) auf "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir nicht weiter darauf eingehen. Sie dürfen gerne Ihre eigenen Tests für unsere anderen Modelle erstellen.

### Formulare

Die Philosophie für das Testen Ihrer Formulare ist dieselbe wie für das Testen Ihrer Modelle; Sie müssen alles testen, was Sie kodiert haben oder was Ihr Design spezifiziert, jedoch nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Das bedeutet im Allgemeinen, dass Sie überprüfen sollten, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit den entsprechenden Bezeichnungen und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und die Validierung erstellt) - d.h. Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssen jedoch jede zusätzliche Validierung testen, die Sie für die Felder erwarten, und alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular zur Erneuerung von Büchern. Dies hat nur ein Feld für das Erneuerungsdatum, das eine Beschriftung und einen Hilfetext haben wird, die wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei und ersetzen Sie jeden vorhandenen Code durch den folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen damit, unser Formular und einige Python- und Django-Bibliotheken zu importieren, um zeitbezogene Funktionalitäten zu testen. Dann erklären wir unsere Formulartestklasse auf die gleiche Weise, wie wir es für Modelle getan haben, und verwenden einen beschreibenden Namen für unsere von `TestCase` abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld über das Felddictionary zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Labelwert `None` ist, da Django, obwohl es das korrekte Label rendert, `None` zurückgibt, wenn der Wert nicht _explizit_ festgelegt ist.

Der Rest der Funktionen testet, ob das Formular für Erneuerungsdaten, die gerade noch im akzeptablen Bereich liegen, gültig ist und ungültig ist für Werte außerhalb des Bereichs. Beachten Sie, wie wir Testdatumwerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall eine Anzahl von Tagen oder Wochen angeben). Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich nicht die Datenbank oder den Testclient. Überlegen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir sollten auch validieren, dass die richtigen Fehler ausgegeben werden, wenn das Formular ungültig ist, allerdings wird dies normalerweise als Teil der Sichtverarbeitung durchgeführt, sodass wir dies im nächsten Abschnitt behandeln.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms)-Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, wäre der Name des Formularfelds **'due_back'** anstelle von **'renewal_date'**.

Das ist alles für Formulare; wir haben noch einige andere, aber diese werden automatisch von unseren generischen, auf Klassen basierenden Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests durch und bestätigen Sie, dass unser Code immer noch fehlerfrei läuft!

### Ansichten

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse fungiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen auf einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von Low-Level-HTTP (Ergebnisheader und Statuscodes) bis hin zu dem Template, das wir verwenden, um das HTML zu rendern und den Kontextdaten, die wir übergeben. Wir können auch die Kette von Weiterleitungen (falls vorhanden) sehen und überprüfen, ob URL und Statuscode bei jedem Schritt korrekt sind. Dies ermöglicht es uns zu überprüfen, ob jede Ansicht das tut, was erwartet wird.

Lassen Sie uns mit einer unserer einfachsten Ansichten beginnen, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL mit dem Namen 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles für uns von Django erledigt. Wenn Sie Django vertrauen, müssten Sie im Grunde nur testen, dass die Ansicht unter der richtigen URL erreichbar ist und mit ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die Ansicht alle Autoren anzeigt und sie in Gruppen von 10 unterteilt.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie jeden vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der Methode `setUpTestData()` richten wir eine Anzahl von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

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

Alle Tests verwenden den Client (der zu unserer von `TestCase` abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, dem verwendeten Template, ob die Antwort paginiert ist oder nicht, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer **/catalog/views.py**-Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, dass die richtige Anzahl von Elementen in den paginierten Templates angezeigt werden, sowohl hier als auch in den folgenden Abschnitten aktualisieren. Wenn Sie die Variable für die Autor-Liste-Seite z.B. auf 5 gesetzt haben, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die von der View an das Template übergeben wird.
Dies ist unglaublich nützlich für Tests, weil es uns ermöglicht zu bestätigen, dass unser Template alle Daten erhält, die es benötigt. Mit anderen Worten, wir können überprüfen, dass wir das beabsichtigte Template verwenden und welche Daten das Template erhält, was einen großen Beitrag dazu leistet, sicherzustellen, dass etwaige Rendering-Probleme ausschließlich auf das Template zurückzuführen sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie eine Ansicht testen, die nur auf eingeloggte Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` der vorherigen Ansicht sehr ähnlich, ist jedoch nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen sind, den Status "ausgeliehen" haben und in der Reihenfolge "ältestes zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode der Datei **/catalog/tests/test_views.py** hinzu. Hier verwenden wir `SetUp()`, um einige Benutzerkonten und `BookInstance`-Objekte (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen) zu erstellen, die wir später in den Tests verwenden werden. Die Hälfte der Bücher wurde von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "in Wartung" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der unten stehende `setUp()`-Code erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Challenge_ erstellt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Sie sollten dies auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, ob die Ansicht auf eine Anmeldeseite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert wird. Um zu überprüfen, dass die Seite für einen eingeloggten Benutzer angezeigt wird, loggen wir unseren Testbenutzer zuerst ein und greifen dann erneut auf die Seite zu und prüfen, ob wir einen `status_code` von 200 (Erfolg) erhalten.

Die restlichen Tests überprüfen, dass unsere Ansicht nur Bücher zurückgibt, die bei unserem aktuellen Ausleiher ausgeliehen sind. Kopieren Sie den unten stehenden Code und fügen Sie ihn am Ende der oben stehenden Testklasse ein.

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

#### Ansichten mit Formularen testen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codepfade testen müssen: die anfängliche Anzeige, die Anzeige nach dem Datenvalidierungsfehler und die Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen nahezu genauso verwenden können wie bei Anzeigenansichten nur.

Um das zu demonstrieren, lassen Sie uns einige Tests für die Ansicht schreiben, die zur Erneuerung von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen testen, dass die Ansicht nur Benutzern mit der Berechtigung `can_mark_returned` zur Verfügung steht und dass Benutzer zu einer HTTP 404-Fehlerseite weitergeleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, ob der anfängliche Wert des Formulars mit einem Datum in drei Wochen in der Zukunft vorgefüllt ist, und dass, wenn die Validierung erfolgreich ist, wir zur Ansicht "alle ausgeliehenen Bücher" weitergeleitet werden. Im Rahmen der Überprüfung der Validierungsfehler-Tests werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (wie unten gezeigt) an das Ende von **/catalog/tests/test_views.py** hinzu.
Dies erstellt zwei Benutzer und zwei Buchinstanzen, gibt jedoch nur einem Benutzer die erforderliche Berechtigung, um auf die Ansicht zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den korrekten Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Ausleiher ist (sollte erfolgreich sein), und was passiert, wenn er versucht, auf ein `BookInstance` zuzugreifen, das nicht existiert. Wir überprüfen auch, dass das richtige Template verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, der Klasse hinzu. Diese überprüft, dass das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir auf den Wert des anfänglichen Formularfeldwerts (`response.context['form'].initial['renewal_date'])` zugreifen können.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch der Klasse hinzu) überprüft, dass die Ansicht bei erfolgreicher Erneuerung zu einer Liste all ausgeliehener Bücher umleitet. Was hier anders ist, ist, dass wir zum ersten Mal zeigen, wie Sie `POST`-Daten mit dem Client senden können. Die Post-_Daten_ sind das zweite Argument für die Post-Funktion und sind als Dictionary von Schlüssel/Wert-Paaren angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle ausgeliehenen_-Ansicht wurde als _Challenge_ hinzugefügt, und Ihr Code kann stattdessen zur Startseite '/' umleiten. Wenn dem so ist, modifizieren Sie die letzten beiden Zeilen des Testcodes, sodass sie wie unten gezeigt lauten. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher Überprüfung von `/catalog/` statt `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse, wie unten zu sehen. Diese testen erneut `POST`-Anfragen, jedoch in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Die gleichen Techniken können verwendet werden, um die andere Ansicht zu testen.

### Templates

Django bietet Test-APIs, um zu überprüfen, ob das korrekte Template von Ihren Ansichten aufgerufen wird, und um Ihnen zu ermöglichen zu überprüfen, ob die korrekten Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung in Django, um zu testen, dass Ihr HTML-Output wie erwartet gerendert wird.

## Andere empfohlene Testtools

Djangos Test-Framework kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben – wir haben nur an der Oberfläche dessen gekratzt, was das zugrunde liegende **unittest**-Framework und Djangos Ergänzungen tun können (zum Beispiel, schauen Sie sich an, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieterbibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Testtools gibt, die Sie verwenden können, werden wir nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel von Ihrem Code tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie gerade erst anfangen und herausfinden müssen, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, um Tests in einem echten Browser zu automatisieren. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework für das Systemtesten Ihrer Seite (den nächsten Schritt nach dem Integrationstest).

## Fordern Sie sich heraus

Es gibt viele weitere Modelle und Ansichten, die wir testen können. Als Herausforderung versuchen Sie, einen Testfall für die `AuthorCreate`-Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder das Teil des Entwurfs ist.
Dies beinhaltet, wer Zugriff hat, das Anfangsdatum, das verwendete Template und wohin die Ansicht bei Erfolg umleitet.

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

Das Schreiben von Testcode ist weder unterhaltsam noch glamourös und wird daher oft zuletzt (oder gar nicht) beim Erstellen einer Webseite durchgeführt. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlicht werden kann und kosteneffektiv gewartet werden kann.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste ist, wenn man anfängt. Es gibt noch viel mehr zu erfahren, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit Tests für Ihre Webseiten zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und umfassend getestete!) Django-Webseite bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Ihr erste Django-App schreiben, Teil 5 > Einführung in automatisiertes Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Testreferenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
