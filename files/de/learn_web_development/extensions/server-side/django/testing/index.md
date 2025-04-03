---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit dem Wachstum von Websites wird es zunehmend schwieriger, sie manuell zu testen. Nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden komplexer. Eine kleine Änderung in einem Bereich kann andere Bereiche beeinflussen, sodass mehr Änderungen erforderlich sind, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden. Eine Möglichkeit, diese Probleme zu mildern, ist das Schreiben von automatisierten Tests, die jedes Mal einfach und zuverlässig ausgeführt werden können, wenn Sie eine Änderung vornehmen. Dieses Tutorial zeigt, wie Sie _Unit-Tests_ Ihrer Website mithilfe des Django-Test-Frameworks automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu verstehen, wie man Unit-Tests für auf Django basierende Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokalbibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book` und `Author`-Einträge, eine Seite zum Erneuern von `BookInstance`-Einträgen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Einträgen (und auch `Book`-Aufzeichnungen, wenn Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann es mehrere Minuten dauern, manuell zu jeder Seite zu navigieren und _oberflächlich_ zu prüfen, ob alles wie erwartet funktioniert. Während wir Änderungen vornehmen und die Website erweitern, wächst auch die Zeit, die erforderlich ist, um manuell zu prüfen, ob alles "richtig" funktioniert. Wenn wir so weitermachen würden, würden wir schließlich die meiste Zeit mit Testen verbringen und sehr wenig Zeit damit, unseren Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Der offensichtliche Vorteil ist, dass sie viel schneller als manuelle Tests ausgeführt werden können, bis zu einem viel detaillierteren Grad testen können und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Weil sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster "realer" Benutzer Ihres Codes fungieren, indem sie Sie zwingen, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft sind sie die Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, nachdem der Code geschrieben wurde, um dem erforderlichen Verhalten zu entsprechen (z.B. [testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie Sie automatisierte Tests für Django schreiben, indem es eine Reihe von Tests zur _LocalLibrary_ Website hinzufügt.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, dass der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten zusammen funktionieren. Integrationstests sind sich der erforderlichen Interaktionen zwischen Komponenten bewusst, aber nicht unbedingt der internen Vorgänge jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website umfassen.

> [!NOTE]
> Weitere gängige Testarten sind Black-Box, White-Box, manuell, automatisiert, Kanarientests, Smoke-Tests, Konformitätstests, Abnahmetests, Funktionstests, Systemtests, Leistungstests, Lasttests und Stresstests. Suchen Sie diese auf, um weitere Informationen zu erhalten.

### Was bietet Django zum Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von der Bearbeitung von HTTP-Anfragen über Modellabfragen bis hin zur Formularvalidierung und -verarbeitung sowie dem Rendern von Vorlagen.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens ist dieses Test-Framework sowohl für Unit- als auch Integrations-Tests geeignet. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und Django-spezifischem Verhalten zu erleichtern. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zum [Verwenden verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), zum Beispiel können Sie das beliebte [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)-Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest-_)Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, dass spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden "Assert"-Methoden, um zu überprüfen, dass Ausdrücke in `True` oder `False`-Werten resultieren oder dass zwei Werte gleich sind, usw.) Wenn Sie einen Testrun starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, mit gemeinsamem Setup und/oder Teardown-Verhalten, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der mit dem Code auf Ansichtsebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Basisklasse erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase)-Klasse ist sehr praktisch, kann jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test wird seine eigene Datenbank benötigen oder die Ansichtssimulation). Sobald Sie mit dem, was Sie mit dieser Klasse tun können, vertraut sind, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, aber keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, dass `first_name` und `last_name` korrekt als `CharField` in der Datenbank gespeichert werden, weil dies von Django definiert wird (obwohl Sie in der Praxis diese Funktionalität während der Entwicklung zwangsläufig testen werden). Auch müssen Sie nicht testen, dass `date_of_birth` als Datumsfeld validiert wurde, weil dies wieder etwas ist, das in Django implementiert ist.

Sie sollten jedoch die Texte für die Labels (_First name, Last name, Date of birth, Died_) und die Größe des für den Text zugewiesenen Feldes (_100 Zeichen_) überprüfen, weil diese Teile Ihres Designs sind und etwas, das in Zukunft kaputtgehen/verändert werden könnte.

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

Ähnlich sollten Sie überprüfen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr Code/Business-Logik sind. Im Falle von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` korrekt implementiert wurde. Was Sie testen, ist also, ob die zugehörige Ansicht tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser könnten bemerken, dass wir das Geburts- und Todesdatum auf sinnvolle Werte beschränken und überprüfen möchten, dass der Tod nach der Geburt kommt.
> In Django würde diese Einschränkung zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modelfelder und Modell-Validatoren definieren können, werden diese nur auf der Formularebene verwendet, wenn sie von der Methode `clean()` des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die Methode `clean()` des Modells muss speziell aufgerufen werden.)

Mit diesem Wissen beginnen wir mit dem Blick darauf, wie wir Tests definieren und ausführen.

## Überblick über die Teststruktur

Bevor wir ins Detail gehen, "was zu testen ist", schauen wir uns zunächst kurz an, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [eingebaute Test-Erkennung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Unittest-Moduls, die Tests im aktuellen Arbeitsverzeichnis in allen Dateien entdeckt, die mit dem Muster **test\*.py** benannt sind. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede Struktur verwenden, die Sie möchten. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und alle anderen Arten von Code zu haben, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben in Ihrem _LocalLibrary_-Projekt gezeigt. Die **\_\_init\_\_.py**-Datei sollte leer sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skelett-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skelett-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Skelett-Website aufgebaut haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website). Es ist völlig "legal", alle Ihre Tests darin zu speichern, aber wenn Sie richtig testen, werden Sie schnell mit einer sehr großen und unübersichtlichen Testdatei enden.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft werden Sie eine Testklasse für jedes Modell/Ansicht/Formular hinzufügen, das Sie testen möchten, mit individuellen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse haben, um einen speziellen Anwendungsfall zu testen, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, um zu testen, dass ein modifiziertes Feld richtig validiert wird, mit Funktionen zum Testen von Fehlerszenarien). Auch hier ist die Struktur weitestgehend Ihnen überlassen, sollte aber konsistent sein.

Fügen Sie die Testklasse unten am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse durch Ableitung von `TestCase` konstruiert.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vorkonfiguration von Tests verwenden können (zum Beispiel, um alle Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für die klassenweite Einrichtung aufgerufen. Sie würden es verwenden, um Objekte zu erstellen, die in keinem der Testmethoden modifiziert oder verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die möglicherweise durch den Test modifiziert werden (jede Testfunktion wird eine "frische" Version dieser Objekte erhalten).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbank-Abbauarbeiten für Sie erledigt.

Unterhalb dieser haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standard-Assertionen, die von **unittest** bereitgestellt werden. Es gibt andere Standard-Assertionen im Framework und auch [Django-spezifische Assertionen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine Ansicht umleitet (`assertRedirects`), ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Normalerweise sollten Sie **keine** **print()**-Funktionen in Ihren Tests hinzufügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Die einfachste Möglichkeit, alle Tests auszuführen, ist der Befehl:

```bash
python3 manage.py test
```

Dies wird alle Dateien mit dem Muster **test\*.py** im aktuellen Verzeichnis entdecken und alle mit passenden Basisklassen definierten Tests ausführen. Hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests. Standardmäßig werden die Tests nur die fehlgeschlagenen Tests einzeln melden, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler wie etwa: `ValueError: Missing staticfiles manifest entry...` erhalten, kann dies daran liegen, dass Tests standardmäßig nicht _collectstatic_ ausführen, und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt eine Reihe von Möglichkeiten, wie Sie dieses Problem beheben können - die einfachste ist, _collectstatic_ vor dem Ausführen der Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sollten eine Ausgabe wie die unten sehen.

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

Hier sehen wir, dass wir einen Testfehler hatten, und wir sehen genau, welche Funktion fehlgeschlagen ist und warum (dieser Fehler wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der obenstehenden Testausgabe lernen sollten, ist, dass es wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie wieder daran, dass Sie normalerweise diese Art von `print()` nicht Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen und wie Sie kontrollieren können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen zeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Verbosity_ ändern. Um beispielsweise die erfolgreichen Tests zusammen mit den fehlgeschlagenen aufzulisten (und eine Menge Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity wie gezeigt auf "2" setzen:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verarbeitungsstufen sind 0, 1, 2 und 3, wobei die Standardstufe "1" ist.

### Beschleunigung

Wenn Ihre Tests unabhängig sind, können Sie sie auf einer Multiprozessor-Maschine erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Nutzung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie eine Teilmenge Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu den Paketen, Modulen, `TestCase`-Unterklassen oder Methoden angeben:

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

### Andere Testoptionen

Der Test-Runner bietet viele andere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen.
Für weiterführende Informationen siehe die Django [Test-Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary-Test

Nun wissen wir, wie man unsere Tests ausführt und was wir testen müssen. Schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber das sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie mehr tun können.

### Modelle

Wie oben besprochen sollten wir alles testen, was Teil unseres Designs ist oder durch Code definiert wird, den wir geschrieben haben, aber nicht Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wird.

Zum Beispiel betrachten Sie das `Author`-Modell unten. Hier sollten wir die Labels für alle Felder testen, da das Design angibt, was diese Werte sein sollten, auch wenn wir die meisten von ihnen nicht explizit angegeben haben. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feld-Labels die beabsichtigten Werte haben. Ähnlich während wir darauf vertrauen, dass Django ein Feld mit der angegebenen Länge erstellt, ist es ratsam einen Test für diese Länge anzugeben, um sicherzustellen, dass sie wie geplant implementiert wurde.

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

Öffnen Sie unsere **/catalog/tests/test_models.py**, und ersetzen Sie jeglichen vorhandenen Code mit dem folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, indem wir einen beschreibenden Namen verwenden, sodass wir fehlgeschlagene Tests in der Testausgabe leicht identifizieren können. Wir rufen dann `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden, aber in keinem der Tests modifizieren werden.

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

Die Feldtests überprüfen die Werte der Feld-Labels (`verbose_name`) und die Größe der Zeichenfelder, wie erwartet. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Punkte zu beachten sind:

- Wir können den `verbose_name` nicht direkt über `author.first_name.verbose_name` abrufen, da `author.first_name` ein _string_ ist (kein Handle zum `first_name`-Objekt, das wir verwenden können, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und diese dann verwenden, um die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass wenn der Test fehlschlägt, die Ausgabe für ersteres Ihnen mitteilt, was das Label tatsächlich war, was das Debugging des Problems etwas erleichtert.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth`-Labels, sowie auch der Test für die Länge des `last_name`-Feldes wurden ausgelassen. Fügen Sie nun Ihre eigenen Versionen hinzu, indem Sie den oben gezeigten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese überprüfen im Grunde, ob der Objektname wie erwartet im Format "Last Name", "First Name" konstruiert wurde und ob die URL, die wir für ein `Author`-Element erhalten, wie erwartet funktioniert.

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

Führen Sie die Tests nun aus. Wenn Sie das Author-Modell, wie im Modell-Tutorial beschrieben, erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death`-Label erhalten, wie unten gezeigt. Der Test schlägt fehl, weil er geschrieben wurde, in der Annahme, dass die Labeldefinition Djangos Konvention folgt, das erste Zeichen des Labels nicht zu kapitalisieren (Django tut dies für Sie).

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

Dies ist ein sehr kleiner Fehler, aber es zeigt, wie das Schreiben von Tests Annahmen, die Sie möglicherweise getroffen haben, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death`-Feld (**/catalog/models.py**), sodass es "died" lautet, und führen Sie die Tests erneut aus.

Die Muster zum Testen der anderen Modelle sind ähnlich, also werden wir nicht weiter darüber sprechen. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie zum Testen Ihrer Formulare ist dieselbe wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie kodiert haben oder Ihr Design angibt, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer externer Bibliotheken testen.

In der Regel sollten Sie sicherstellen, dass die Formulare die Felder haben, die Sie möchten, und dass diese mit den entsprechenden Labels und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und Validierung erstellt) — d.h. Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssten jedoch alle zusätzlichen Validierungen testen, die Sie erwarten, dass sie an den Feldern durchgeführt werden, sowie alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular zur Bucherneuerung. Dies hat nur ein Feld für das Erneuerungsdatum, das ein Label und einen Hilfetext haben wird, die wir verifizieren müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei, und ersetzen Sie alle vorhandenen Codes mit dem folgenden Testcode für das `RenewBookForm`-Formular. Wir beginnen mit dem Importieren unseres Formulars und einiger Python-Django-Bibliotheken, um zeitbezogene Funktionalität zu testen. Wir deklarieren dann unsere Formular-Testklasse auf die gleiche Weise wie bei den Modellen und verwenden einen beschreibenden Namen für unsere von `TestCase` abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob das `label` und `help_text` des Feldes wie erwartet sind. Wir müssen auf das Feld mit dem Dictionary der Felder zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier auch, dass wir testen müssen, ob der Label-Wert `None` ist, denn selbst wenn Django den richtigen Label rendert, gibt es `None` zurück, wenn der Wert nicht _explizit_ festgelegt wurde.

Die restlichen Funktionen testen, dass das Formular für Erneuerungsdaten, die sich innerhalb des akzeptablen Bereichs befinden, gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall, indem wir eine Anzahl von Tagen oder Wochen angeben). Wir erstellen dann einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich nicht die Datenbank oder den Test-Client. Erwägen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch überprüfen, dass die richtigen Fehler ausgelöst werden, wenn das Formular ungültig ist, dies wird jedoch normalerweise als Teil der Ansichtsverarbeitung erledigt, daher kümmern wir uns darum im nächsten Abschnitt.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms)-Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann hätte das Formularfeld den Namen **'due_back'** statt **'renewal_date'**.

Das war's bezüglich Formulare; wir haben noch weitere, aber sie werden automatisch von unseren generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code weiterhin bestanden wird!

### Ansichten

Um das Verhalten unserer Ansicht zu validieren, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse fungiert als ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen an eine URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von Ebene-HTTP (Ergebnis-Header und Statuscodes) bis zur Vorlage, die wir verwenden, um das HTML zu rendern, und die Kontextdaten, die wir an sie übergeben. Wir können auch die Kette von Weiterleitungen (falls vorhanden) sehen und die URL und den Statuscode in jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, dass jede Ansicht das tut, was erwartet wird.

Beginnen wir mit einer unserer einfacheren Ansichten, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL namens 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Man könnte sagen, wenn Sie Django vertrauen, ist das Einzige, was Sie testen müssen, ob die Ansicht unter der richtigen URL erreichbar ist und über ihren Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verwenden, beginnen Sie damit, Tests zu schreiben, die bestätigen, dass die Ansicht alle Autoren anzeigt, sie in Gruppen von 10 paginiert.

Öffnen Sie die **/catalog/tests/test_views.py**-Datei und ersetzen Sie alle existierenden Texte mit dem folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der Methode `setUpTestData()` richten wir eine Anzahl von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

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

Alle Tests verwenden den Client (der zu unserer von `TestCase` abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (achten Sie darauf, dass es sich nur um den spezifischen Pfad ohne die Domain handelt), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Nachdem wir die Antwort haben, fragen wir sie hinsichtlich ihres Statuscodes ab, welche Vorlage verwendet wurde, ob die Antwort paginiert wurde, die Anzahl der zurückgegebenen Elemente und die Gesamtzahl der Elemente.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer **/catalog/views.py**-Datei auf einen anderen Wert als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen aktualisieren, die überprüfen, dass die korrekte Anzahl von Elementen in paginierten Vorlagen angezeigt wird, sowohl oben als auch in den nachfolgenden Abschnitten. Wenn Sie zum Beispiel die Variable für die Autorenseite auf 5 gesetzt haben, aktualisieren Sie die Zeile wie folgt:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Das interessanteste Variable, die wir oben demonstrieren, ist `response.context`, welches die Kontextvariable ist, die von der Ansicht an die Vorlage übergeben wird.
Dies ist unglaublich nützlich für das Testen, da es uns ermöglicht zu bestätigen, dass unsere Vorlage alle Daten erhält, die sie benötigt. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält, was einen langen Weg geht, um sicherzustellen, dass alle Renderingprobleme ausschließlich auf die Vorlage zurückzuführen sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie möglicherweise eine Ansicht testen, die nur eingeloggten Benutzern zugänglich ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` sehr ähnlich unserer vorherigen Ansicht, aber nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status "ausgeliehen" haben und in der Reihenfolge "Ältester zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzer-Login-Konten und `BookInstance`-Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Aufzeichnungen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "Wartung" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später modifizieren werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer bestimmten `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies als _Herausforderung_ erstellt wurde. In diesem Fall kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Dies sollten Sie auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, dass die Ansicht auf eine Login-Seite weiterleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie im `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggt Benutzer angezeigt wird, loggen wir zunächst unseren Testbenutzer ein, und greifen dann erneut auf die Seite zu, um zu überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Die restlichen Tests überprüfen, dass unsere Ansicht nur Bücher zurückgibt, die unserem aktuellen Entleiher ausgeliehen sind. Kopieren Sie den untenstehenden Code und fügen Sie ihn am Ende der obigen Testklasse ein.

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

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codepfade testen müssen: die initiale Anzeige, die Anzeige nach dem Scheitern der Datenvalidierung und die Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client für Tests fast genauso wie für Anzeig-Only-Ansichten verwenden.

Zum Demonstrieren schreiben wir einige Tests für die Ansicht, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen überprüfen, dass die Ansicht nur für Benutzer verfügbar ist, die die Erlaubnis `can_mark_returned` haben, und dass Benutzer auf eine HTTP-404-Fehlerseite weitergeleitet werden, wenn sie versuchen, eine `BookInstance` zu erneuern, die nicht existiert. Wir sollten überprüfen, dass der Anfangswert des Formulars mit einem Datum drei Wochen in der Zukunft ausgefüllt wird und dass, wenn die Validierung erfolgreich ist, wir zur "alle ausgeliehenen Bücher" Ansicht weitergeleitet werden. Im Rahmen der Überprüfung der Validierungsfehlertests werden wir auch überprüfen, dass unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Dies erstellt zwei Benutzer und zwei Buchinstanzen, aber nur ein Benutzer erhält die Erlaubnis, auf die Ansicht zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) Zugang zur Ansicht haben. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber die richtigen Berechtigungen nicht hat, wenn der Benutzer die Berechtigungen hat, aber nicht der Entleiher ist (sollte erfolgreich sein) und was passiert, wenn sie versuchen, auf eine nicht existierende `BookInstance` zuzugreifen. Wir überprüfen auch, dass die korrekte Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode hinzu, wie unten gezeigt. Diese überprüft, dass das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, den Wert des Anfangswertes des Formularfelds (`response.context['form'].initial['renewal_date']`) zuzugreifen.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen ebenfalls der Klasse hinzu) überprüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher weiterleitet, wenn die Erneuerung erfolgreich ist. Was hier anders ist, ist, dass wir zum ersten Mal zeigen, wie man mit dem Client Daten postet. Die post _data_ ist das zweite Argument zur Postfunktion und wird als Dictionary mit Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _all-borrowed_-Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code könnte stattdessen zur Startseite '/' weiterleiten. Falls ja, ändern Sie die letzten zwei Zeilen des Testcodes, um wie der untenstehende Code auszusehen. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher Überprüfung von `/catalog/` statt `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten zwei Funktionen in die Klasse, wie unten gezeigt. Diese testen erneut `POST`-Anfragen, aber in diesem Fall mit ungültigen Erneuerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

### Vorlagen

Django bietet Test-APIs, um zu überprüfen, ob die richtige Vorlage von Ihren Ansichten aufgerufen wird, und um zu bestätigen, dass die richtigen Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung in Django, um zu testen, ob Ihr HTML-Ausgang wie erwartet gerendert wird.

## Andere empfohlene Testwerkzeuge

Djangos Test-Framework kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben — wir haben nur einen Bruchteil dessen, was das zugrundeliegende **unittest**-Framework leisten kann, behandelt, ganz zu schweigen von Djangos Erweiterungen (zum Beispiel, schauen Sie, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken so zu patchen, dass Sie Ihren eigenen Code gründlicher testen können).

Obwohl es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir an dieser Stelle nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie anfangen und herausfinden möchten, was Sie genau testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, das Tests in einem echten Browser automatisiert. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework zum Systemtesten Ihrer Website (der nächste Schritt nach Integrationstests).

## Fordern Sie sich heraus

Es gibt viele weitere Modelle und Ansichten, die wir testen können. Versuchen Sie als Herausforderung, einen Testfall für die `AuthorCreate` Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder das Teil des Designs ist. Dies umfasst, wer Zugang hat, das Anfangsdatum, die verwendete Vorlage und wo die Ansicht im Erfolgsfall weiterleitet.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechenden Berechtigungen zuzuweisen.

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

Testcode zu schreiben ist weder unterhaltsam noch glamourös und wird deshalb oft zuletzt (oder gar nicht) bei der Erstellung einer Website geschrieben. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlicht werden kann und kosteneffektiv zu warten ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das schwierigste ist herauszufinden, wenn Sie anfangen. Es gibt viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django App, Teil 5 > Einführung in automatisiertes Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz zu Testwerkzeugen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
