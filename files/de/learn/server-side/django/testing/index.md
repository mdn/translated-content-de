---
title: "Django-Tutorial Teil 10: Testen einer Django-Webanwendung"
slug: Learn/Server-side/Django/Testing
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

Mit zunehmender Größe von Websites wird das manuelle Testen immer schwieriger. Nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen Komponenten werden komplexer, sodass eine kleine Änderung in einem Bereich andere Bereiche beeinflussen kann. Daher sind mehr Änderungen erforderlich, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig durchgeführt werden können. Dieses Tutorial zeigt, wie Sie das automatisierte _Unit-Testing_ Ihrer Website mit Django's Testframework durchführen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>, abschließen.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Verständnis, wie man Unit-Tests für Django-basierte Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [Lokale Bibliothek](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Datensätzen, falls Sie die _Challenge_ im [Formular-Tutorial](/de/docs/Learn/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Seite kann das manuelle Navigieren zu jeder Seite und das oberflächliche Überprüfen, dass alles wie erwartet funktioniert, mehrere Minuten dauern. Wenn wir Änderungen vornehmen und die Seite erweitern, wird die Zeit, die erforderlich ist, um sicherzustellen, dass alles "richtig" funktioniert, nur noch wachsen. Wenn wir so weitermachen würden, würden wir schließlich die meiste Zeit mit Testen verbringen und kaum Zeit haben, unseren Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller durchgeführt werden können als manuelle Tests, bis zu einem viel detaillierteren Niveau testen und jedes Mal genau die gleiche Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger durchgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realer "Benutzer" Ihres Codes fungieren, der Sie dazu zwingt, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten sollte. Oft sind sie die Basis für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, nach denen der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z. B. [Test-driven](https://en.wikipedia.org/wiki/Test-driven_development) und [Behaviour-driven](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie automatisierte Tests für Django geschrieben werden, indem eine Anzahl von Tests zur _LocalLibrary_ Website hinzugefügt wird.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressions-Tests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, dass der Fehler behoben wurde, und dann erneut, um sicherzustellen, dass er nicht nach späteren Änderungen im Code erneut eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppen von Komponenten zusammenarbeiten. Integrationstests berücksichtigen die erforderlichen Interaktionen zwischen den Komponenten, jedoch nicht unbedingt die internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website abdecken.

> [!NOTE]
> Andere gängige Arten von Tests sind Black-Box-Tests, White-Box-Tests, manuelle Tests, automatisierte Tests, Canary-Tests, Smoke-Tests, Konformitätstests, Abnahmetests, Funktionstests, Systemtests, Leistungstests, Lasttests und Stresstests. Schlagen Sie sie für weitere Informationen nach.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von der HTTP-Ebenen-Anfragebearbeitung über Modellabfragen bis hin zur Formularvalidierung und Verarbeitung sowie der Template-Rendering.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Testframework sowohl für Unit- als auch Integrationstests geeignet. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und Django-spezifischem Verhalten zu erleichtern. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge zum [Verwenden verschiedener Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), zum Beispiel können Sie das beliebte [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) Framework integrieren, um einen Benutzer in einem Live-Browser zu simulieren.

Um einen Test zu schreiben, leiten Sie von einer der Django (oder _unittest_) Testbasisklassen ab ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und schreiben dann separate Methoden, um zu überprüfen, dass spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden "Assert"-Methoden, um zu prüfen, ob Ausdrücke in `True` oder `False` resultieren oder ob zwei Werte gleich sind). Wenn Sie einen Testrun starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt, mit gemeinsamen Einrichtungs- und/oder Abrüstverhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests durchgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse verfügt auch über einen Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um zu simulieren, dass ein Benutzer auf Code auf View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie mit dem vertraut sind, was Sie mit dieser Klasse tun können, möchten Sie möglicherweise einige Ihrer Tests durch die vorhandenen einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch nicht alle Bibliotheken oder Funktionen, die als Teil von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht ausdrücklich testen, ob `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert wird (obwohl Sie natürlich in der Praxis diese Funktionalität während der Entwicklung unvermeidlich testen werden). Sie müssen auch nicht testen, ob das `date_of_birth` als Datumsfeld validiert wurde, da dies wiederum etwas ist, das in Django implementiert ist.

Sie sollten jedoch den Text überprüfen, der für die Labels verwendet wird (_Vorname, Nachname, Geburtsdatum, Todesdatum_), und die Größe des für den Text zugewiesenen Felds (_100 Zeichen_), da dies Teil Ihres Designs und etwas ist, das in Zukunft fehlerhaft/verändert werden könnte.

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

Ebenso sollten Sie überprüfen, ob die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr Code/Logik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django `reverse()`-Methode ordnungsgemäß implementiert wurde. Sie testen also, ob die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser werden bemerken, dass wir auch das Geburts- und Todesdatum auf sinnvolle Werte einschränken und überprüfen möchten, dass der Tod nach der Geburt kommt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modellfelder und Modellvalidatoren definieren können, werden diese nur auf Formularebene verwendet, wenn sie durch die `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

Mit dem im Hinterkopf beginnen wir, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, _was zu testen ist_, werfen wir zunächst einen kurzen Blick darauf, _wo_ und _wie_ Tests definiert werden.

Django verwendet die in der unittest-Modul integrierte [Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), die Tests im aktuellen Arbeitsverzeichnis in jeder Datei, die mit dem Muster **test\*.py** benannt ist, entdeckt. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und andere zu testende Codetypen zu haben. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Datei Struktur wie oben gezeigt in Ihrem _LocalLibrary_ Projekt. Die **\_\_init\_\_.py**-Datei sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelettestdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelettestdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [das Django-Skelettwebseite erstellt haben](/de/docs/Learn/Server-side/Django/skeleton_website). Es ist völlig "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell mit einer sehr großen und unübersichtlichen Testdatei enden.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Häufig werden Sie eine Testklasse für jedes Modell/View/Formular, das Sie testen möchten, hinzufügen, mit einzelnen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse für die Testung eines bestimmten Anwendungsfalls haben, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, ob ein modelles Feld ordnungsgemäß validiert wird, mit Funktionen, um jeden der möglichen Fehlerschritte zu testen). Auch hier liegt die Struktur ganz bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

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
        print("Methode: test_false_is_false.")
        self.assertFalse(False)

    def test_false_is_true(self):
        print("Methode: test_false_is_true.")
        self.assertTrue(False)

    def test_one_plus_one_equals_two(self):
        print("Methode: test_one_plus_one_equals_two.")
        self.assertEqual(1 + 1, 2)
```

Die neue Klasse definiert zwei Methoden, die Sie zur Test-Vorkonfiguration verwenden können (zum Beispiel, um alle Modelle oder anderen Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für die Einrichtung auf Klassenebene aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden geändert oder verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die durch den Test modifiziert werden können (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen verfügen auch über eine `tearDown()`-Methode, die wir hier nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbanken bereits für Sie aufräumt.

Darunter haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet bewertet wird, schlägt der Test fehl und meldet den Fehler in der Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standardassertionen, die von **unittest** bereitgestellt werden. Es gibt andere Standardassertionen im Framework sowie [Django-spezifische Assertionen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umleitet (`assertRedirects`), um zu testen, ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`) usw.

> [!NOTE]
> Sie sollten **nicht** normalerweise **print()**-Funktionen in Ihren Tests verwenden, wie oben gezeigt. Wir tun das hier nur, damit Sie sehen können, in welcher Reihenfolge die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie führen Sie die Tests aus?

Der einfachste Weg, um alle Tests auszuführen, ist die Verwendung des Kommandos:

```bash
python3 manage.py test
```

Dies wird alle mit dem Muster **test\*.py** benannten Dateien im aktuellen Verzeichnis durchsuchen und alle Tests ausführen, die unter Verwendung der entsprechenden Basisklassen definiert wurden (hier haben wir eine Anzahl von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig werden die Tests nur einzeln bei Testfehlern und danach eine Testzusammenfassung melden.

> [!NOTE]
> Wenn Sie Fehler wie `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass während des Testens standardmäßig _collectstatic_ nicht ausgeführt wird und Ihre App eine Speicherklasse verwendet, die es erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt eine Reihe von Möglichkeiten, dieses Problem zu überwinden - die einfachste ist, _collectstatic_ auszuführen, bevor die Tests durchgeführt werden:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sehen eine Ausgabe wie die unten gezeigte.

```bash
> python3 manage.py test

Creating test database for alias 'default'...
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to set up clean data.
Methode: test_false_is_false.
setUp: Run once for every test method to set up clean data.
Methode: test_false_is_true.
setUp: Run once for every test method to set up clean data.
Methode: test_one_plus_one_equals_two.
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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler ist erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, das man aus der obigen Testausgabe lernen sollte, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse aufgerufen wird, und `setUp()` vor jeder Methode.
Denken Sie auch hier daran, dass Sie normalerweise diese Art von `print()` nicht zu Ihren Tests hinzufügen würden.

In den nächsten Abschnitten wird erläutert, wie Sie spezifische Tests ausführen und wie Sie steuern können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die Test- Erfolge sowie Fehler aufzulisten (und eine Menge Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Level sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Beschleunigung

Wenn Ihre Tests unabhängig sind, können Sie auf einem Mehrprozessorcomputer erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen darüber, was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu den Packages, dem Modul, der `TestCase`-Unterklasse oder der Methode angeben:

```bash
# Führen Sie das angegebene Modul aus
python3 manage.py test catalog.tests

# Führen Sie das angegebene Modul aus
python3 manage.py test catalog.tests.test_models

# Führen Sie die angegebene Klasse aus
python3 manage.py test catalog.tests.test_models.YourTestClass

# Führen Sie die angegebene Methode aus
python3 manage.py test catalog.tests.test_models.YourTestClass.test_one_plus_one_equals_two
```

### Weitere Testrunner-Optionen

Der Testrunner bietet viele andere Optionen, einschließlich der Fähigkeit, Tests durchzumischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`), und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen.
Für weitere Informationen siehe die Django [Testrunner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test) Dokumentation.

## _LocalLibrary_ Tests

Jetzt wissen wir, wie wir unsere Tests ausführen und welche Dinge wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies soll Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie sonst noch machen können.

### Modelle

Wie oben beschrieben, sollten wir alles testen, was Teil unseres Designs ist oder durch Code definiert ist, den wir geschrieben haben, jedoch nicht Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wurde.

Betrachten Sie zum Beispiel das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, denn auch wenn wir die meisten davon nicht ausdrücklich spezifiziert haben, haben wir ein Design, das besagt, welche Werte diese haben sollten. Wenn wir die Werte nicht testen, dann wissen wir nicht, dass die Feldbezeichnungen die beabsichtigten Werte haben. Ebenso, während wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, ist es sinnvoll, einen Test für diese Länge zu spezifizieren, um sicherzustellen, dass es wie beabsichtigt implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie vorhandenen Code mit dem folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zunächst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, mit einem beschreibenden Namen, damit wir leicht alle fehlgeschlagenen Tests in der Testausgabe identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden, aber in keinem der Tests modifizieren werden.

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

Die Feldertests prüfen, ob die Werte der Feldbezeichnungen (`verbose_name`) und die Größe der Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen dem gleichen Muster:

```python
# Ein Autorobjekt zum Testen erhalten
author = Author.objects.get(id=1)

# Abrufen der Metadaten für das erforderliche Feld und Verwenden, um die erforderlichen Felddaten abzufragen
field_label = author._meta.get_field('first_name').verbose_name

# Den Wert mit dem erwarteten Ergebnis vergleichen
self.assertEqual(field_label, 'first name')
```

Die interessanten Dinge, auf die man achten sollte, sind:

- Wir können `verbose_name` nicht direkt mit `author.first_name.verbose_name` abrufen, da `author.first_name` ein _String_ ist (keine Handle auf das `first_name`-Objekt, mit dem wir auf seine Eigenschaften zugreifen könnten). Stattdessen müssen wir den `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und diese verwenden, um nach den zusätzlichen Informationen zu fragen.
- Wir haben `assertEqual(field_label,'first name')` statt `assertTrue(field_label == 'first name')` verwendet. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe des ersteren Ihnen tatsächlich sagt, was die Bezeichnung war, was das Debuggen des Problems nur ein bisschen einfacher macht.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Label sowie auch der Test für die Länge des `last_name` Feldes wurden weggelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie den benannten Konventionen und Ansätzen folgen, die oben gezeigt wurden.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Wesentlichen nur, dass der Objektname wie von uns erwartet im Format "Last Name", "First Name" erstellt wird und dass die URL, die wir für ein `Author`-Element erhalten, wie von uns erwartet ist.

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

Führen Sie nun die Tests durch. Wenn Sie das Author-Modell so erstellt haben, wie wir es im Modelle-Tutorial beschrieben haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für die `date_of_death` Bezeichnung sehen werden, wie unten gezeigt. Der Test schlägt fehl, weil er geschrieben wurde, um anzunehmen, dass die Bezeichnungsdefinition Djangos Konvention folgt, den ersten Buchstaben der Bezeichnung nicht zu kapitalisieren (Django tut dies für Sie).

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

Das ist ein sehr kleiner Fehler, aber es hebt hervor, wie das Schreiben von Tests jede Annahme, die Sie möglicherweise getroffen haben, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie die Bezeichnung für das `date_of_death` Feld (**/catalog/models.py**) in "died" und führen Sie die Tests erneut durch.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir hier nicht weiter darüber diskutieren. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie für das Testen Ihrer Formulare ist dieselbe wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie kodiert haben oder was Ihr Design spezifiziert, jedoch nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Im Allgemeinen bedeutet dies, dass Sie testen sollten, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit den richtigen Beschriftungen und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und die Validierung erstellt) — d. h., Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssen jedoch jede zusätzliche Validierung testen, die Sie erwarten, dass sie an den Feldern durchgeführt wird, und alle Nachrichten, die Ihr Code bei Fehlern erzeugen wird.

Betrachten Sie unser Formular zum Erneuern von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das eine Bezeichnung und einen Hilfetext besitzt, die wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py** Datei und ersetzen Sie vorhandenen Code mit dem folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen damit, unser Formular und einige Python- und Djangos-Bibliotheken zu importieren, um Zeit-bezogene Funktionalität zu testen. Dann deklarieren wir unsere Testklasse für das Formular auf die gleiche Weise, wie wir es für Modelle getan haben, mit einem beschreibenden Namen für unsere `TestCase`-abgeleitete Testklasse.

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

Die ersten beiden Funktionen überprüfen, dass das `label` und der `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld mithilfe des Felder-Dictionaries zugreifen (z. B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch testen müssen, ob der Wert des Labels `None` ist, denn obwohl Django das korrekte Label rendert, gibt es `None` zurück, wenn der Wert nicht _explizit_ gesetzt ist.

Die restlichen Funktionen überprüfen, dass das Formular für Erneuerungsdaten, die sich innerhalb des akzeptablen Bereichs befinden, gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir die Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall eine Anzahl von Tagen oder Wochen angeben). Dann erstellen wir einfach das Formular, geben unsere Daten ein und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich weder die Datenbank noch den Testclient. Erwägen Sie, diese Tests so zu ändern, dass sie [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) verwenden.
>
> Wir müssen auch überprüfen, dass die richtigen Fehler angezeigt werden, wenn das Formular ungültig ist. Dies wird jedoch normalerweise als Teil der View-Verarbeitung durchgeführt, daher werden wir dies im nächsten Abschnitt erledigen.

> [!WARNING]
> Wenn Sie die Klasse `ModelForm` (/de/docs/Learn/Server-side/Django/Forms#modelforms) `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, wäre der Formulartitelfeldname **'due_back'** statt **'renewal_date'**.

Das ist alles für die Formulare; wir haben noch einige andere, aber sie werden automatisch von unseren generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code immer noch besteht!

### Ansichten

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse funktioniert wie ein Dummie-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen auf einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von Low-Level-HTTP (Ergebniskopfzeilen und Statuscodes) bis hin zu dem Template, das wir zur HTML-Renderung verwenden, und den übergebenen Kontextdaten. Wir können auch die Kette von Umleitungen (falls vorhanden) sehen und die URL und den Statuscode bei jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, dass jede View das tut, was erwartet wird.

Beginnen wir mit einer unserer einfachsten Ansichten, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL, die im URL-Konfigurationsnamen 'authors' genannt wird).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen, müssen Sie wohl nur testen, dass die Ansicht über die richtige URL zugänglich ist und über ihren Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, werden Sie mit dem Schreiben von Tests beginnen, die bestätigen, dass die Ansicht alle Autoren anzeigt und diese in Gruppen von 10 paginiert.

Öffnen Sie die **/catalog/tests/test_views.py**-Datei und ersetzen Sie vorhandenen Text mit dem folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()`-Methode richten wir eine Anzahl von `Author`-Objekten ein, um unsere Paginierung zu testen.

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

Alle Tests verwenden den Client (der zu unserer `TestCase`-abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort erhalten haben, fragen wir sie nach ihrem Statuscode, dem verwendeten Template, ob die Antwort paginiert ist, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer **/catalog/views.py**-Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen aktualisieren, die testen, dass die richtige Anzahl von Elementen in paginierten Templates oben und in den folgenden Abschnitten angezeigt werden. Zum Beispiel, wenn Sie die Variable für die Autorenlistenseite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die an das Template von der Ansicht übergeben wird.
Dies ist unglaublich nützlich für das Testen, weil es uns ermöglicht zu bestätigen, dass unser Template alle notwendigen Daten erhält. Mit anderen Worten, wir können überprüfen, dass wir das beabsichtigte Template verwenden und welche Daten das Template erhält, was einen langen Weg geht, um zu bestätigen, dass alle Rendering-Probleme allein dem Template zuzuschreiben sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie möglicherweise eine Ansicht testen, die nur für eingeloggte Benutzer eingeschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` der vorherigen Ansicht sehr ähnlich, ist jedoch nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Einträge an, die vom aktuellen Benutzer ausgeliehen wurden, den Status 'on loan' haben und "am ältesten zuerst" geordnet sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzer-Anmeldekonten und `BookInstance`-Objekte (sowie ihre zugehörigen Bücher und andere Aufzeichnungen) zu erstellen, die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, weil wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language` Modell, da dies als _Challenge_ erstellt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Sie sollten dies auch im `RenewBookInstancesViewTest` Abschnitt tun, der folgt.

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

        # Überprüfen, ob unser Benutzer eingeloggt ist
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Überprüfen, dass wir eine erfolgreiche Antwort erhalten haben
        self.assertEqual(response.status_code, 200)

        # Überprüfen, dass wir das richtige Template verwendet haben
        self.assertTemplateUsed(response, 'catalog/bookinstance_list_borrowed_user.html')
```

Um zu überprüfen, dass die Ansicht einen Nutzer auf die Anmeldeseite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggten Benutzer angezeigt wird, melden wir zuerst unseren Testbenutzer an und greifen dann erneut auf die Seite zu und überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests überprüft, dass unsere Ansicht nur Bücher an unseren aktuellen Ausleiher zurückgibt. Kopieren Sie den Code unten und fügen Sie ihn am Ende der obigen Testklasse hinzu.

```python
    def test_only_borrowed_books_in_list(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Überprüfen, ob unser Benutzer eingeloggt ist
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Überprüfen, dass wir eine erfolgreiche Antwort erhalten haben
        self.assertEqual(response.status_code, 200)

        # Überprüfen, dass wir anfangs keine Bücher in der Liste haben (keine ausgeliehenen)
        self.assertTrue('bookinstance_list' in response.context)
        self.assertEqual(len(response.context['bookinstance_list']), 0)

        # Nun alle Bücher auf ausgeliehen ändern
        books = BookInstance.objects.all()[:10]

        for book in books:
            book.status = 'o'
            book.save()

        # Überprüfen, dass wir nun ausgeliehene Bücher in der Liste haben
        response = self.client.get(reverse('my-borrowed'))
        # Überprüfen, ob unser Benutzer eingeloggt ist
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Überprüfen, dass wir eine erfolgreiche Antwort erhalten haben
        self.assertEqual(response.status_code, 200)

        self.assertTrue('bookinstance_list' in response.context)

        # Bestätigen, dass alle Bücher zu testuser1 gehören und ausgeliehen sind
        for bookitem in response.context['bookinstance_list']:
            self.assertEqual(response.context['user'], bookitem.borrower)
            self.assertEqual(bookitem.status, 'o')

    def test_pages_ordered_by_due_date(self):
        # Alle Bücher auf ausgeliehen ändern
        for book in BookInstance.objects.all():
            book.status='o'
            book.save()

        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('my-borrowed'))

        # Überprüfen, ob unser Benutzer eingeloggt ist
        self.assertEqual(str(response.context['user']), 'testuser1')
        # Überprüfen, dass wir eine erfolgreiche Antwort erhalten haben
        self.assertEqual(response.status_code, 200)

        # Bestätigen, dass von den Artikeln nur 10 aufgrund der Paginierung angezeigt werden.
        self.assertEqual(len(response.context['bookinstance_list']), 10)

        last_date = 0
        for book in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = book.due_back
            else:
                self.assertTrue(last_date <= book.due_back)
                last_date = book.due_back
```

Sie könnten auch Tests zur Paginierung hinzufügen, sollten Sie dies wünschen!

#### Testen von Views mit Formularen

Das Testen von Views mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codepfade testen müssen: die Anfangsanzeige, die Anzeige, nachdem die Datenvalidierung fehlgeschlagen ist, und die Anzeige, nachdem die Validierung erfolgreich war. Die gute Nachricht ist, dass wir den Client für Tests fast genauso verwenden, wie wir es für Anzeigeansichten getan haben.

Um dies zu zeigen, lassen Sie uns einige Tests für die View schreiben, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

```python
from catalog.forms import RenewBookForm

@permission_required('catalog.can_mark_returned')
def renew_book_librarian(request, pk):
    """View-Funktion zum Erneuern eines bestimmten BookInstance durch den Bibliothekar."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # Wenn dies eine POST-Anfrage ist, dann verarbeiten Sie die Formular-Daten
    if request.method == 'POST':

        # Erstellen Sie eine Formularinstanz und füllen Sie sie mit Daten aus der Anfrage (bindung):
        book_renewal_form = RenewBookForm(request.POST)

        # Überprüfen, ob das Formular gültig ist:
        if form.is_valid():
            # Verarbeiten Sie die Daten in form.cleaned_data nach Bedarf (hier schreiben wir sie einfach in das Modell due_back-Feld)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # Weiterleitung zu einer neuen URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # Wenn dies ein GET (oder eine andere Methode) ist, erstellen Sie das Standardformular
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        book_renewal_form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'book_renewal_form': book_renewal_form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Wir müssen testen, dass die Ansicht nur für Benutzer verfügbar ist, die die Berechtigung `can_mark_returned` haben, und dass Benutzer auf eine HTTP 404-Fehlerseite weitergeleitet werden, wenn sie versuchen, eine nicht existierende `BookInstance` zu erneuern. Wir sollten überprüfen, dass der anfängliche Wert des Formulars mit einem Datum in drei Wochen in der Zukunft gefüllt ist und dass, wenn die Validierung erfolgreich ist, wir zur Ansicht "alle ausgeliehenen Bücher" weitergeleitet werden. Im Rahmen der Überprüfung der Validierungsfehlertests werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Dies erstellt zwei Benutzer und zwei Buchinstanzen, aber nur ein Benutzer erhält die Berechtigung, auf die Ansicht zuzugreifen.

```python
import uuid

from django.contrib.auth.models import Permission # Erforderlich, um die Berechtigung zu erteilen, ein Buch als zurückgegeben zu markieren.

class RenewBookInstancesViewTest(TestCase):
    def setUp(self):
        # Benutzer erstellen
        test_user1 = User.objects.create_user(username='testuser1', password='1X<ISRUkw+tuK')
        test_user2 = User.objects.create_user(username='testuser2', password='2HJ1vRV0Z&3iD')

        test_user1.save()
        test_user2.save()

        # Geben Sie test_user2 die Berechtigung, Bücher zu erneuern.
        permission = Permission.objects.get(name='Set book as returned')
        test_user2.user_permissions.add(permission)
        test_user2.save()

        # Ein Buch erstellen
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

        # Genre als Nachbearbeitungsschritt hinzufügen
        genre_objects_for_book = Genre.objects.all()
        test_book.genre.set(genre_objects_for_book) # Direkte Zuordnung von Viele-zu-Viele-Typen nicht erlaubt.
        test_book.save()

        # Erstellung eines BookInstance-Objekts für test_user1
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance1 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user1,
            status='o',
        )

        # Erstellung eines BookInstance-Objekts für test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status='o',
        )
```

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese prüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Ausleiher ist (sollte erfolgreich sein), und was passiert, wenn sie versuchen, auf eine nicht existierende `BookInstance` zuzugreifen. Wir überprüfen auch, dass das richtige Template verwendet wird.

```python
   def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        # Weiterleitung manuell überprüfen (Wir können assertRedirect nicht verwenden, weil die Weiterleitungs-URL unvorhersehbar ist)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(response.url.startswith('/accounts/login/'))

    def test_forbidden_if_logged_in_but_not_correct_permission(self):
        login = self.client.login(username='testuser1', password='1X<ISRUkw+tuK')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 403)

    def test_logged_in_with_permission_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance2.pk}))

        # Überprüfen, dass wir uns anmelden können - das ist unser Buch und wir haben die richtigen Berechtigungen.
        self.assertEqual(response.status_code, 200)

    def test_logged_in_with_permission_another_users_borrowed_book(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))

        # Überprüfen, dass es uns erlaubt einzuloggen. Wir sind ein Bibliothekar, also können wir uns jedes Benutzers Buch ansehen
        self.assertEqual(response.status_code, 200)

    def test_HTTP404_for_invalid_book_if_logged_in(self):
        # unwahrscheinliche UID, die mit unserem BookInstance übereinstimmt!
        test_uid = uuid.uuid4()
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk':test_uid}))
        self.assertEqual(response.status_code, 404)

    def test_uses_correct_template(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        # Überprüfen, dass das richtige Template verwendet wurde
        self.assertTemplateUsed(response, 'catalog/book_renew_librarian.html')
```

Fügen Sie die nächste Testmethode hinzu, wie unten gezeigt. Diese prüft, dass das Anfangsdatum des Formulars drei Wochen in der Zukunft liegt. Beachten Sie, wie wir auf den Wert des Anfangswerts des Formularfeldes zugreifen können (`response.context['form'].initial['renewal_date']`).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (füge diesen ebenfalls zur Klasse hinzu) prüft, dass die Ansicht auf eine Liste aller ausgeliehenen Bücher weiterleitet, wenn die Erneuerung erfolgreich ist. Was hier anders ist, ist, dass wir erstmals zeigen, wie Sie mit dem Client Daten `POST`-en können. Die post _Daten_ sind das zweite Argument der post Funktion und werden als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _all-borrowed_ Ansicht wurde als _Challenge_ hinzugefügt, und Ihr Code könnte stattdessen auf die Startseite '/' umleiten. Wenn ja, modifizieren Sie die letzten beiden Zeilen des Testcodes, um wie der Code unten zu sein. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher Überprüfung von `/catalog/` statt `/`).
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

Die gleichen Techniken können verwendet werden, um die anderen Views zu testen.

### Templates

Django stellt Test-APIs zur Verfügung, um zu überprüfen, dass das richtige Template von Ihren Views aufgerufen wird, und um Ihnen zu ermöglichen, zu überprüfen, dass die richtigen Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung für das Testen in Django, dass Ihre HTML-Ausgabe wie erwartet gerendert wird.

## Weitere empfohlene Testwerkzeuge

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben - wir haben nur die Oberfläche dessen, was das zugrunde liegende **unittest**-Framework tun kann, geschrammt, geschweige denn Djangos Ergänzungen (zum Beispiel, schauen Sie, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Obwohl es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir hier nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Werkzeug berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie beginnen und herausfinden möchten, was Sie testen sollten.
- [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) ist ein Framework zum Automatisieren von Tests in einem echten Browser. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Site interagiert, und bietet ein großartiges Framework für das Systemtest Ihrer Website (der nächste Schritt nach Integrationstests).

## Fordern Sie sich heraus

Es gibt viele weitere Modelle und Ansichten, die wir testen können. Als Herausforderung versuchen Sie, einen Testfall für die `AuthorCreate` View zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Dies umfasst, wer Zugriff hat, das Anfangsdatum, das verwendete Template und wohin die Ansicht bei Erfolg weiterleitet.

Sie können den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuzuweisen:

```python
class AuthorCreateViewTest(TestCase):
    """Testfall für die AuthorCreate View (Erstellt als Herausforderung)."""

    def setUp(self):
        # Benutzer erstellen
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

Das Schreiben von Testcode ist weder spaßig noch glamourös und wird daher oft zuletzt (oder gar nicht) beim Erstellen einer Website berücksichtigt. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlicht und kostengünstig gewartet werden kann.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen können. Am wichtigsten ist, dass wir Ihnen eine kurze Zusammenfassung darüber gegeben haben, was Sie testen sollten, was oft das Schwierigste zu erarbeiten ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unittests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt Ihnen, wie Sie Ihre wundervolle (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Tests schreiben und ausführen](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Ihr erstes Django-App schreiben, Teil 5 > Automatisierte Tests einführen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Testing-Tools-Referenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Test-Driven Web Development with Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testing in Django (Part 1) - Best Practices and Examples](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
