---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit zunehmender Größe von Websites wird es schwieriger, diese manuell zu testen. Es gibt nicht nur mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden komplexer, sodass eine kleine Änderung an einer Stelle andere Bereiche beeinflussen kann. Daher sind mehr Tests erforderlich, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler entstehen, wenn weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung schnell und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit Testing_ Ihrer Website mithilfe des Django-Testframeworks automatisieren.

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
      <td>Verstehen, wie man Unit-Tests für Django-basierte Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) verfügt derzeit über Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen und Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Datensätze, falls Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann es mehrere Minuten dauern, manuell zu jeder Seite zu navigieren und _oberflächlich_ zu überprüfen, ob alles wie erwartet funktioniert. Wenn wir Änderungen vornehmen und die Seite erweitern, wird die Zeit, die erforderlich ist, um manuell zu überprüfen, ob alles „richtig“ funktioniert, nur zunehmen. Würden wir so weitermachen wie bisher, würden wir irgendwann die meiste Zeit mit Testen verbringen und sehr wenig Zeit damit, unseren Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, viel detaillierter testen und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests häufiger ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau auf, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster „realer“ Benutzer Ihres Codes fungieren und zwingen Sie dazu, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft bilden sie die Grundlage für Ihre Code-Beispiele und Dokumentationen. Aus diesen Gründen beginnen einige Software-Entwicklungsprozesse mit der Definition und Implementierung von Tests, nach denen der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z. B. [testgetriebene](https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie man für Django automatisierte Tests schreibt, indem eine Reihe von Tests zur _LocalLibrary_-Website hinzugefügt wird.

### Arten des Testens

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde, und dann erneut, um sicherzustellen, dass er nach späteren Änderungen am Code nicht erneut eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppen von Komponenten zusammenarbeiten, wenn sie gemeinsam verwendet werden. Integrationstests sind sich der erforderlichen Interaktionen zwischen Komponenten bewusst, jedoch nicht unbedingt der internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website umfassen.

> [!NOTE]
> Andere gängige Arten von Tests sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Abnahme-, Funktions-, System-, Leistungs-, Last- und Stresstests. Schauen Sie sich diese Begriffe an, um mehr Informationen zu erhalten.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikschichten besteht – von der HTTP-Anfragenbearbeitung bis hin zu Modellabfragen, zur Formularvalidierung und -verarbeitung und zur Vorlage-Rendering.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens eignet sich dieses Testframework sowohl für Unit- als auch für Integrationstests. Das Django-Framework fügt API-Methoden und Tools hinzu, um Web- und speziell auf Django bezogenes Verhalten zu testen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zur [Verwendung verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), zum Beispiel können Sie das beliebte [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest_) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, dass bestimmte Funktionalität wie erwartet funktioniert (Tests verwenden „assert“-Methoden, um zu testen, dass Ausdrücke in `True`- oder `False`-Werte resultieren, oder dass zwei Werte gleich sind usw.). Wenn Sie eine Testrunde starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt, mit einem gemeinsamen Setup und/oder Tear-Down-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine leere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der auf Code auf Ansichtsebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Klasse ist sehr angenehm zu nutzen, kann jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test muss seine eigene Datenbank einrichten oder die Ansicht Interaktion simulieren). Sobald Sie vertraut sind mit dem, was Sie mit dieser Klasse machen können, möchten Sie vielleicht einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, aber keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Beispielsweise sollten Sie im `Author`-Modell, das unten definiert ist, nicht explizit testen, dass `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert wird (obwohl Sie dies natürlich in der Praxis während der Entwicklung zwangsläufig testen werden). Auch müssen Sie nicht testen, dass das `date_of_birth` als Datumsfeld validiert wurde, da auch dies von Django umgesetzt wird.

Sie sollten jedoch die Texte überprüfen, die für die Beschriftungen verwendet werden (_Vorname, Nachname, Geburtsdatum, Gestorben_) und die Größe des für den Text zugewiesenen Felds (_100 Zeichen_), da diese Teil Ihres Designs sind und in Zukunft beschädigt/geändert werden könnten.

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

Ähnlich sollten Sie sicherstellen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich arbeiten, da sie Ihr eigener Code/Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` korrekt implementiert ist, sodass Sie testen, ob die zugehörige Ansicht tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser können bemerken, dass wir auch möchten, dass das Geburts- und Todesdatum auf sinnvolle Werte beschränkt wird, und überprüfen, dass der Tod nach der Geburt liegt.
> In Django würde diese Einschränkung zu Ihren Formklassen hinzugefügt (obwohl Sie Validierer für Modellfelder und Modellvalidierer definieren können, werden diese nur auf der Formularebene verwendet, wenn sie von der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

In diesem Sinne beginnen wir damit, zu schauen, wie man Tests definiert und ausführt.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, um „was zu testen“, lassen Sie uns zunächst kurz anschauen, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [eingebaute Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Unittest-Moduls, die Tests im aktuellen Arbeitsverzeichnis in jeder Datei entdeckt, die mit dem Muster **test\*.py** benannt ist. Solange Sie die Dateien entsprechend benennen, können Sie jede Struktur verwenden, die Sie möchten. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und alle anderen Arten von Code, die Sie testen müssen, zu haben. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben in Ihrem _LocalLibrary_-Projekt gezeigt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies sagt Python, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skeletttestdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skeletttestdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) gebaut haben. Es ist vollkommen "legal", alle Ihre Tests darin unterzubringen, aber wenn Sie richtig testen, werden Sie schnell mit einer sehr großen und unhandlichen Testdatei enden.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie eine Testklasse für jedes Modell/Ansicht/Formular hinzu, das Sie testen möchten, mit einzelnen Methoden, um spezifische Funktionalität zu testen. In anderen Fällen möchten Sie möglicherweise eine separate Klasse für das Testen eines spezifischen Anwendungsfalls haben, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, dass ein Modelfeld ordnungsgemäß validiert wird, mit Funktionen, um jeden der möglichen Fehlerfälle zu testen). Wiederum ist die Struktur sehr Ihnen überlassen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die untenstehende Testklasse am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse durch Abgeleiten von `TestCase` konstruiert.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vorkonfiguration des Tests verwenden können (zum Beispiel, um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für das Klassenebenen-Setup aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden modifiziert oder geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die durch den Test modifiziert werden könnten (jede Testfunktion wird eine „neue“ Version dieser Objekte erhalten).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbankbereinigung für Sie übernimmt.

Unter diesen Methoden haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standard-Assertions, die von **unittest** bereitgestellt werden. Es gibt andere Standard-Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine Ansicht umleitet (`assertRedirects`), um zu testen, ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`) usw.

> [!NOTE]
> Sie sollten normalerweise **keine** **print()**-Funktionen in Ihre Tests aufnehmen, wie oben gezeigt. Wir tun dies hier nur, damit Sie in der Konsole sehen können, in welcher Reihenfolge die Setup-Funktionen aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, alle Tests auszuführen, ist die Verwendung des Befehls:

```bash
python3 manage.py test
```

Dies wird alle Dateien entdecken, die mit dem Muster **test\*.py** im aktuellen Verzeichnis benannt sind, und alle Tests ausführen, die mit geeigneten Basisklassen definiert wurden (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig berichten die Tests nur über Testfehler, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler ähnlich wie: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass das Testen _collectstatic_ standardmäßig nicht ausführt und Ihre App eine Speicherklasse verwendet, die es erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt eine Reihe von Möglichkeiten, dieses Problem zu überwinden - die einfachste ist, _collectstatic_ auszuführen, bevor Sie die Tests ausführen:
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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieses Versagen wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, das Sie von der Testausgabe oben lernen sollten, ist, dass es viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die Methode `setUpTestData()` einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird. Denken Sie daran, dass Sie normalerweise diese Art von `print()` nicht zu Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen können und wie Sie kontrollieren können, wie viele Informationen die Tests anzeigen.

### Weitere Testinformationen anzeigen

Wenn Sie mehr Informationen über die Testrun erhalten möchten, können Sie die _Verbalität_ ändern. Um beispielsweise Erfolge und Fehler der Tests aufzulisten (und eine ganze Menge an Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbalität auf "2" setzen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbalitätsstufen sind 0, 1, 2 und 3, wobei die Standardeinstellung "1" ist.

### Beschleunigung der Prozesse

Wenn Ihre Tests unabhängig sind, können Sie auf einer Mehrprozessor-Maschine ihre Leistung erheblich steigern, indem Sie sie parallel ausführen. Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus. Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben.

```bash
python3 manage.py test --parallel auto
```

Weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, finden Sie unter [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie nur einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu den Paket(en), dem Modul, der `TestCase`-Unterklasse oder Methode angeben:

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

### Weitere Test-Laufoptionen

Der Test-Läufer bietet viele weitere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen. Weitere Informationen finden Sie in der Django [Test-Läufer](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary-Tests

Da wir nun wissen, wie man Tests ausführt und was wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie mehr tun können.

### Modelle

Wie oben besprochen, sollten wir alles testen, was Teil unseres Designs ist oder von eigenem Code definiert wird, aber nicht Bibliotheken/Code, die bereits von Django oder dem Python-Entwicklungsteam getestet werden.

Betrachten wir zum Beispiel das `Author`-Modell unten. Hier sollten wir die Beschriftungen für alle Felder testen, weil, obwohl wir die meisten von ihnen nicht explizit angegeben haben, wir ein Design haben, das sagt, wie diese Werte aussehen sollen. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feldbeschriftungen ihre beabsichtigten Werte haben. Ähnlich, während wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, lohnt es sich, einen Test für diese Länge vorzusehen, um sicherzustellen, dass es wie geplant umgesetzt wurde.

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

Öffnen Sie unser **/catalog/tests/test_models.py** und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das `Author`-Modell. Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten und einen beschreibenden Namen verwenden, sodass wir fehlschlagende Tests in der Testausgabe leicht identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein author-Objekt zu erstellen, das wir verwenden, aber nicht in irgendeinem der Tests ändern werden.

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

Die Feldtests überprüfen, dass die Werte der Feldbeschriftungen (`verbose_name`) und dass die Größe der Zeichenfelder wie erwartet ist. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Dinge, die zu beachten sind:

- Wir können die `verbose_name` direkt nicht mit `author.first_name.verbose_name` erhalten, da `author.first_name` ein _String_ ist (kein Handle auf das `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und diese zu verwenden, um nach den zusätzlichen Informationen zu fragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe für den ersteren sagt, was das Label tatsächlich war, was das Debuggen des Problems etwas einfacher macht.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Labels und auch der Test für die Länge des `last_name` Feldes wurden weggelassen. Fügen Sie Ihre eigenen Versionen jetzt hinzu, indem Sie den benutzten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese prüfen im Wesentlichen nur, ob der Objektname wie erwartet im Format "Nachname", "Vorname" konstruiert wurde, und ob die URL, die wir für ein `Author`-Item erhalten, wie erwartet ist.

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

Führen Sie die Tests jetzt aus. Wenn Sie das Author-Modell wie im Modell-Tutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler bei der `date_of_death`-Beschriftung erhalten, wie unten gezeigt. Der Test schlägt fehl, weil er geschrieben wurde in der Erwartung, dass die Beschriftungskonvention von Django, das erste Buchstaben des Labels nicht zu Großschreiben folgt (Django tut dies für Sie).

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

Das ist ein sehr kleiner Fehler, aber es zeigt, wie das Schreiben von Tests irgendwelche Annahmen, die Sie möglicherweise gemacht haben, gründlich überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death` Feld (**/catalog/models.py**) zu "gestorben" und führen Sie die Tests erneut durch.

Die Muster für das Testen der anderen Modelle sind ähnlich, so dass wir darüber nicht weiter sprechen werden. Fühlen Sie sich frei, Ihre eigenen Tests für die anderen Modelle zu erstellen.

### Formulare

Die Philosophie zum Testen Ihrer Formulare ist die gleiche wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie codiert haben, oder Ihr Design spezifiziert, aber nicht das Verhalten des zugrundeliegenden Frameworks und anderer Fremdbibliotheken.

Im Allgemeinen bedeutet dies, dass Sie sicherstellen müssen, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit geeigneten Beschriftungen und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben einen eigenen benutzerdefinierten Feld- und Validierungstyp erstellt) - d.h. Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssten jedoch jede zusätzliche Validierung testen, die Sie an den Feldern erwarten, und jede Nachricht, die Ihr Code bei Fehlern generieren wird.

Betrachten Sie unser Formular zur Erneuerung von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das eine Beschriftung und einen Hilfetext hat, den wir überprüfen müssen.

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

Öffnen Sie unsere Datei **/catalog/tests/test_forms.py** und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Wir beginnen damit unser Formular und einige Python- und Django-Bibliotheken zu importieren, die helfen, zeitbezogene Funktionalität zu testen. Wir deklarieren dann unsere Testklasse für das Formular in derselben Weise wie für Modelle, und verwenden einen Beschreibung passenden Namen für unsere abgeleitete Klasse von `TestCase`.

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

Die ersten beiden Funktionen testen, dass das Feld `label` und der `help_text` wie erwartet sind. Wir müssen auf das Feld mithilfe des Wörterbuchs der Felder zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch prüfen müssen, ob der Beschriftungswert `None` ist, weil, obwohl Django das korrekte Label rendern wird, es `None` zurückgibt, wenn der Wert nicht _explizit_ gesetzt ist.

Die restlichen Funktionen testen, dass das Formular für Erneuerungsdaten, die knapp innerhalb des akzeptablen Bereichs liegen, gültig ist und ungültig für Werte außerhalb des Bereichs. Beachten Sie, wie wir Testdatumwerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall durch Angabe einer Anzahl von Tagen oder Wochen). Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir nicht tatsächlich die Datenbank oder den Testclient. Betrachten Sie es, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formfeldname **'due_back'** anstelle von **'renewal_date'**.

Das ist alles für Formulare; wir haben einige andere, aber sie werden automatisch durch unsere generischen klassenbasierten Editieransichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code noch besteht!

### Ansichten

Um unser Ansichtsverhalten zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse funktioniert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen auf einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von den Low-Level-HTTP (Ergebnis-Header und Statuscodes) bis hin zur Vorlage, die wir verwenden, um das HTML zu rendern, und den Kontextdaten, die wir an sie übergeben. Wir können auch die Redirect-Kette sehen (falls vorhanden) und die URL und den Statuscode in jedem Schritt überprüfen. Das erlaubt uns zu überprüfen, ob jede Ansicht das tut, was erwartet wird.

Lassen Sie uns mit einer der einfachsten Ansichten beginnen, die eine Liste aller Autoren bereitstellt. Diese wird unter URL **/catalog/authors/** angezeigt (eine URL, die im URL-Konfigurationsnetz "autoren" heißt).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles für uns von Django erledigt. Man könnte argumentieren, dass das einzige, was Sie testen müssen, wenn Sie Django vertrauen, ist, dass die Ansicht an der richtigen URL zugänglich ist und mit ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die Ansicht alle Autoren anzeigt und sie in 10er-Gruppen einteilt.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie gegebenenfalls vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der Methode `setUpTestData()` richten wir eine Anzahl von `Author`-Objekten ein, um unsere Paginierung zu testen.

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

Alle Tests verwenden den Client (der zu unserer abgeleiteten `TestCase` gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie, nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, die verwendete Vorlage, ob oder nicht die Antwort aufgeteilt wurde, die Anzahl der zurückgegebenen Elemente und die Gesamtzahl der Elemente.

> [!NOTE]
> Wenn Sie die `paginate_by`-Variable in Ihrer **/catalog/views.py** Datei auf eine andere Zahl als 10 setzen, stellen Sie sicher, dass Sie die Zeilen, die testen, dass die richtige Anzahl von Elementen in paginierten Vorlagen angezeigt werden, oben und in den folgenden Abschnitten aktualisieren. Wenn Sie zum Beispiel die Variable für die Autorliste auf 5 setzen, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben zeigen, ist `response.context`, die die Kontextvariable ist, die von der Ansicht an die Vorlage übergeben wird. Dies ist unglaublich nützlich zum Testen, weil es uns erlaubt, zu bestätigen, dass unsere Vorlage alle Daten bekommt, die sie braucht. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage bekommt, was einen großen Beitrag dazu leistet, zu bestätigen, dass alle Rendering-Probleme ausschließlich auf die Vorlage zurückzuführen sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In manchen Fällen möchten Sie eine Ansicht testen, die nur eingeloggten Benutzern vorbehalten ist. Zum Beispiel, unsere `LoanedBooksByUserListView` ist sehr ähnlich zu unserer vorherigen Ansicht, aber ist nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status 'ausgeliehen' haben und "älteste zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzer-Login-Konten und `BookInstance`-Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben anfangs den Status aller Bücher auf "in Wartung" gesetzt. Auf Grund der Tatsache, dass wir einige dieser Objekte später modifizieren werden, haben wir `SetUp()` anstelle von `setUpTestData()` verwendet.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer bestimmten `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als eine _Herausforderung_ hinzugefügt wurde. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Dies sollten Sie auch im folgenden Abschnitt `RenewBookInstancesViewTest` machen.

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

Um zu überprüfen, dass die Ansicht den Benutzer zu einer Login-Seite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggten Benutzer angezeigt wird, loggen wir unseren Testbenutzer ein und greifen dann erneut auf die Seite zu und überprüfen, ob wir einen `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests verifiziert, dass unsere Ansicht nur Bücher zurückgibt, die an unseren aktuellen Entleiher ausgeliehen sind. Kopieren Sie den Code unten und fügen Sie ihn am Ende der Testklasse oben hinzu.

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

#### Ansichten mit Formularen testen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den obigen Fällen, da Sie mehr Codepfade testen müssen: anfängliche Anzeige, Anzeige nach fehlgeschlagener Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden, wie wir es für reine Anzeige-Ansichten getan haben.

Um dies zu demonstrieren, schreiben wir einige Tests für die Ansicht, die verwendet wird, um Bücher zu erneuern (`renew_book_librarian()`):

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

Wir müssen testen, dass die Ansicht nur Benutzern zur Verfügung steht, die die Berechtigung `can_mark_returned` haben, und dass Benutzer zu einer HTTP 404-Fehlerseite umgeleitet werden, wenn sie versuchen, eine `BookInstance` zu erneuern, die nicht existiert. Wir sollten überprüfen, dass der anfängliche Wert des Formulars mit einem Datum drei Wochen in der Zukunft gefüllt ist, und dass, wenn die Validierung erfolgreich ist, wir zur Ansicht "alle ausgeliehenen Bücher" umgeleitet werden. Im Rahmen der Überprüfung der Tests für fehlgeschlagene Validierung werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) unten in **/catalog/tests/test_views.py** hinzu. Diese erstellt zwei Benutzer und zwei Buchinstanzen, gibt jedoch nur einem Benutzer die Berechtigung, um auf die Ansicht zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer die Berechtigungen hat, aber nicht der Entleiher ist (sollte erfolgreich sein), und was passiert, wenn sie versuchen, auf eine nicht existierende `BookInstance` zuzugreifen. Wir überprüfen auch, dass die richtige Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, der Klasse hinzu. Diese überprüft, dass unser Formular ein Datum drei Wochen in der Zukunft als Initialwert hat. Beachten Sie, wie wir den Wert des Felds im Initialwert des Formulars (`response.context['form'].initial['renewal_date'])`) abrufen können.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen auch zur Klasse hinzu) überprüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher umleitet, wenn die Erneuerung erfolgreich ist. Was sich hier unterscheidet, ist, dass wir zum ersten Mal zeigen, wie man mit dem Client `POST`-Daten verwendet. Die _post data_ ist das zweite Argument der Post-Funktion und wird als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle-geliehene_ Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code kann stattdessen zur Startseite '/' umleiten. Wenn dem so ist, modifizieren Sie die letzten zwei Zeilen des Testcodes zu folgendem Code. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher wird `/catalog/` überprüft anstelle von `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten zwei Funktionen in die Klasse, wie unten gezeigt. Diese testen wieder `POST`-Anfragen, jedoch in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Django bietet Test-APIs, um zu überprüfen, dass die korrekte Vorlage von Ihren Ansichten aufgerufen wird, und Ihnen zu erlauben zu überprüfen, dass die richtigen Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung für das Testen in Django, um sicherzustellen, dass Ihr HTML-Ausgabe wie erwartet gerendert wird.

## Andere empfohlene Test-Tools

Django's Testframework kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben - wir haben nur an der Oberfläche dessen, was das zugrunde liegende **unittest**-Framework tun kann, gekratzt, geschweige denn die Ergänzungen von Django (zum Beispiel, schauen Sie, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um externe Bibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Test-Tools gibt, die Sie verwenden können, werden wir hier nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie am Anfang stehen und herausfinden möchten, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, um Tests in einem echten Browser zu automatisieren. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework für Systemtests Ihrer Seite (der nächste Schritt über Integrationstests hinaus).

## Stellen Sie sich der Herausforderung

Es gibt noch viele weitere Modelle und Ansichten, die wir testen können. Als Herausforderung versuchen Sie, einen Testfall für die Ansicht `AuthorCreate` zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles, was Sie spezifizieren oder Teil des Designs ist, überprüfen müssen. Dies umfasst den Zugang, das Anfangsdatum, die verwendete Vorlage und die Umleitung der Ansicht bei Erfolg.

Sie können den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechende Berechtigung zuweisen

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

Das Schreiben von Testcode ist weder spaßig noch glamourös und wird daher oft zuletzt (oder überhaupt nicht) gemacht, wenn eine Website erstellt wird. Dennoch ist es ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code sicher freigegeben werden kann, nachdem Änderungen vorgenommen wurden, und kosteneffektiv zu warten.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste ist, wenn Sie anfangen. Es gibt noch viel mehr zu lernen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Writing and running tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentationen)
- [Writing your first Django app, part 5 > Introducing automated testing](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentationen)
- [Testing tools reference](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentationen)
- [Advanced testing topics](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentationen)
- [A Guide to Testing in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Test-Driven Web Development with Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
