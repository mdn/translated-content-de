---
title: "Django-Tutorial Teil 10: Testen einer Django-Webanwendung"
slug: Learn/Server-side/Django/Testing
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}

Mit zunehmender Größe von Websites wird es immer schwieriger, sie manuell zu testen. Nicht nur gibt es mehr zu testen, sondern die Interaktionen zwischen den Komponenten werden auch komplexer. Eine kleine Änderung in einem Bereich kann sich auf andere Bereiche auswirken, was bedeutet, dass mehr Änderungen erforderlich sind, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, während weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit Testing_ Ihrer Website mit dem Test-Framework von Django automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Beenden Sie alle vorherigen Tutorial-Themen, einschließlich <a href="/de/docs/Learn/Server-side/Django/Forms">Django-Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis, wie man Unit-Tests für auf Django basierende Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokale Bibliothek](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) verfügt derzeit über Seiten, um Listen aller Bücher und Autoren anzuzeigen, Detailansichten für `Book`- und `Author`-Einträge, eine Seite zum Erneuern von `BookInstance`-Einträgen und Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Einträgen (und auch `Book`-Datensätze, wenn Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Website kann es mehrere Minuten dauern, manuell zu jeder Seite zu navigieren und _superfiziell_ zu überprüfen, ob alles wie erwartet funktioniert. Wenn wir Änderungen vornehmen und die Website erweitern, wird die erforderliche Zeit für manuelle Prüfungen nur noch zunehmen. Würden wir so weitermachen wie bisher, würden wir schließlich die meiste Zeit mit Testen verbringen und sehr wenig Zeit damit, unseren Code zu verbessern.

Automatisierte Tests können wirklich bei diesem Problem helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller als manuelle Tests ausgeführt werden können, auf einem viel detaillierteren Niveau testen können und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als der erste wirkliche "Benutzer" Ihres Codes wirken und Sie dazu zwingen, streng zu definieren und zu dokumentieren, wie sich Ihre Website verhalten sollte. Oft dienen sie als Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, wonach der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z.B. [Testgetriebene Entwicklung](https://en.wikipedia.org/wiki/Test-driven_development) und [Verhaltensgetriebene Entwicklung](https://en.wikipedia.org/wiki/Behavior-driven_development)).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem eine Reihe von Tests zur _LocalLibrary_ Website hinzugefügt wird.

### Arten des Testens

Es gibt zahlreiche Typen, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressions-Tests
  - : Tests, die historische Bugs reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Bug behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Änderungen am Code nicht wieder eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests sind sich der erforderlichen Interaktionen zwischen Komponenten bewusst, aber nicht unbedingt der internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten abdecken bis hin zur gesamten Website.

> [!NOTE]
> Andere häufige Testarten umfassen Black-Box-, White-Box-, manueller, automatisierter, Canary-, Smoke-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Last- und Stresstests. Informieren Sie sich darüber für weitere Informationen.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikebenen besteht – von der HTTP-Anfrageverarbeitungsebene bis hin zu Modellabfragen, Formularvalidierung und -verarbeitung sowie Templaterendering.

Django bietet ein Test-Framework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens eignet sich dieses Test-Framework sowohl für Unit- als auch Integrationstests. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und Django-spezifischem Verhalten zu erleichtern. Diese ermöglichen es Ihnen, Anforderungen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu überprüfen. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zur [Verwendung anderer Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks); zum Beispiel können Sie sich mit dem beliebten [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) Rahmenwerk integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest_) Testbasisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, dass bestimmte Funktionalität wie erwartet funktioniert (Tests verwenden "assert"-Methoden, um zu testen, dass Ausdrücke in `True` oder `False`-Werte resultieren oder dass zwei Werte gleich sind, usw.). Wenn Sie einen Testrun starten, führt das Framework die ausgewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, mit allgemeinem Setup und/oder Abbaubenehmen, das in der Klasse definiert ist, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der mit dem Code auf der View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Basisklasse erstellt wurden.

> [!NOTE]
> Die Klasse [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) ist sehr bequem, kann aber dazu führen, dass einige Tests langsamer ausgeführt werden, als sie sein müssten (nicht jeder Test benötigt seine eigene Datenbank oder muss die View-Interaktion simulieren). Sobald Sie mit den Möglichkeiten dieser Klasse vertraut sind, könnten Sie einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, jedoch keine Bibliotheken oder Funktionalität, die als Teil von Python oder Django bereitgestellt wird.

Zum Beispiel, betrachten Sie das unten definierte `Author` Modell. Sie müssen nicht explizit testen, ob `first_name` und `last_name` ordnungsgemäß als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert wird (obwohl Sie natürlich in der Praxis diese Funktionalität während der Entwicklung zwangsläufig testen werden). Noch müssen Sie testen, dass das `date_of_birth` Feld validiert wurde, um ein Datumsfeld zu sein, da dies wiederum etwas ist, das in Django implementiert wurde.

Sie sollten jedoch den Text überprüfen, der für die Labels verwendet wird (_Vorname, Nachname, Geburtsdatum, Gestorben_), und die Größe des Feldes, das für den Text zugewiesen ist (_100 Zeichen_), da diese Teil Ihres Designs sind und etwas, das in Zukunft gebrochen/geändert werden könnte.

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

Ähnlich sollten Sie überprüfen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr Code/Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie sich darauf verlassen, dass die Django-Methode `reverse()` ordnungsgemäß implementiert wurde; was Sie testen, ist, dass die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser könnten feststellen, dass wir auch den Plan fordern würden, das Geburts- und Sterbedatum auf sinnvolle Werte zu beschränken und sicherzustellen, dass das Sterbedatum nach dem Geburtsdatum liegt.
> In Django würde diese Einschränkung zu Ihren Formularen hinzugefügt werden (obwohl Sie Validatoren für Modelfelder definieren und Modellvalidatoren nutzen können, werden diese nur auf Formularebene verwendet, wenn sie von der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss spezifisch aufgerufen werden.)

Mit diesen Gedanken im Hinterkopf beginnen wir nun, uns zu überlegen, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir im Detail darauf eingehen, "was getestet werden soll", schauen wir uns zunächst kurz an, _wo_ und _wie_ Tests definiert werden.

Django verwendet die im unittest-Modul enthaltene [Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery), die Tests im aktuellen Arbeitsverzeichnis in jeder Datei mit dem Muster **test\*.py** entdecken wird. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede Struktur verwenden, die Ihnen gefällt. Wir empfehlen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Views, Formulare und alle anderen Arten von Code, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben gezeigt in Ihrem _LocalLibrary_ Projekt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skeletttestdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skeletttestdatei **/catalog/tests.py** wurde automatisch erstellt, als wir [die Django-Skelettwebsite gebaut haben](/de/docs/Learn/Server-side/Django/skeleton_website). Es ist völlig "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, wird schnell eine sehr große und unübersichtliche Testdatei daraus.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie eine Testklasse für jedes Modell/View/Formular hinzu, das Sie testen möchten, mit separaten Methoden für das Testen bestimmter Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse für das Testen eines bestimmten Anwendungsfalls haben, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel eine Klasse, die prüft, ob ein Modelfeld ordnungsgemäß validiert wird, mit Funktionen zum Testen der möglichen Fehlerfälle). Wiederum ist die Struktur Ihnen überlassen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die Testklasse unten am Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse durch Ableiten von `TestCase` konstruiert.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vorab-Testkonfiguration verwenden können (z.B. um alle Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testlaufs für das Setup auf Klassenebene aufgerufen. Dies verwenden Sie, um Objekte zu erstellen, die in keiner der Testmethoden geändert oder verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um alle Objekte einzurichten, die möglicherweise durch den Test geändert werden (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist insbesondere für Datenbanktests nicht besonders nützlich, da die `TestCase` Basisklasse die Datenbankabräumung für Sie übernimmt.

Darunter haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet bewertet wird, schlägt der Test fehl und meldet den Fehler auf Ihrer Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind standardmäßige Assertions, die von **unittest** bereitgestellt werden. Es gibt andere standardmäßige Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View weiterleitet (`assertRedirects`), zu testen, ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Normalerweise sollten Sie **keine** **print()**-Funktionen in Ihre Tests aufnehmen, wie hier gezeigt. Wir tun dies hier nur, damit Sie in der Konsole sehen können, in welcher Reihenfolge die Setup-Funktionen aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, alle Tests auszuführen, ist die Verwendung des Befehls:

```bash
python3 manage.py test
```

Dadurch werden alle Dateien mit dem Muster **test\*.py** im aktuellen Verzeichnis gefunden und alle Tests ausgeführt, die geeignete Basisklassen verwenden (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit irgendwelche Tests). Standardmäßig melden die Tests nur bei Testfehlern individuell, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehlermeldungen erhalten, die wie folgt aussehen: `ValueError: Missing staticfiles manifest entry...`, könnte dies daran liegen, dass das Testen standardmäßig kein _collectstatic_ ausführt, und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt eine Reihe von Möglichkeiten, wie Sie dieses Problem überwinden können - die einfachste besteht darin, _collectstatic_ vor dem Ausführen der Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis der _LocalLibrary_ aus. Sie sollten eine Ausgabe wie die unten gezeigte sehen.

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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler ist zu erwarten, weil `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, was Sie aus der Testausgabe oben lernen sollten, ist, dass sie viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie daran, dass Sie solche `print()`s normalerweise nicht Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen und steuern können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testdurchlauf erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um neben Testfehlern auch Erfolge aufzulisten (und eine ganze Menge Informationen darüber zu erhalten, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity auf "2" setzen, wie unten gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Level sind 0, 1, 2 und 3, wobei der Standard "1" ist.

### Beschleunigungsmöglichkeiten

Wenn Ihre Tests unabhängig sind, können Sie diese auf einem Mehrprozessor-Computer erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Spezifische Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zum Paket(en), Modul, `TestCase`-Unterklasse oder Methode angeben:

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

### Weitere Testläufer-Optionen

Der Testläufer bietet viele weitere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse aufzuzeichnen.
Für weitere Informationen siehe die Django [Testläufer](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test)-Dokumentation.

## LocalLibrary Tests

Nun da wir wissen, wie man unsere Tests ausführt und was getestet werden muss, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies sollte Ihnen eine Vorstellung geben, wie Tests funktionieren und was man mehr machen könnte.

### Modelle

Wie oben besprochen, sollten Sie alles testen, was Teil Ihres Designs ist oder was durch von Ihnen geschriebenen Code definiert wird, jedoch nicht Bibliotheken/Code, die bereits von Django oder vom Python-Entwicklungsteam getestet wurden.

Zum Beispiel, betrachten Sie das unten stehende `Author` Modell. Hier sollten Sie die Labels aller Felder testen, weil, selbst wenn wir die meisten von ihnen nicht explizit spezifiziert haben, unser Design sagt, was diese Werte sein sollen. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feldlabels ihre beabsichtigten Werte haben. Ebenso, während wir darauf vertrauen, dass Django ein Feld der spezifizierten Länge erstellt, ist es sinnvoll, einen Test für diese Länge festzulegen, um sicherzustellen, dass es wie geplant implementiert wurde.

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

Öffnen Sie **/catalog/tests/test_models.py** und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das `Author` Modell.

Hier sehen Sie, dass wir zunächst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, dabei einen beschreibenden Namen verwenden, damit wir in der Testausgabe leicht fehlerhafte Tests identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autorobjekt zu erstellen, das in keinem der Tests geändert wird.

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

Die Feldtests überprüfen, ob die Werte der Feldlabels (`verbose_name`) und die Größe der Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen dem gleichen Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Interessant zu beachten ist hierbei:

- Wir können den `verbose_name` nicht direkt über `author.first_name.verbose_name` erhalten, da `author.first_name` ein _String_ ist (kein Zugriff auf das `first_name`-Objekt, das wir verwenden könnten, um auf seine Eigenschaften zuzugreifen). Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und diese zu verwenden, um die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass wenn der Test fehlschlägt, die Ausgabe für den ersteren anzeigt, was das Label tatsächlich war, was das Debuggen des Problems ein klein wenig erleichtert.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth`-Labels, sowie auch der Test für die Länge des `last_name` Feldes wurden weggelassen. Fügen Sie jetzt Ihre eigenen Versionen hinzu, indem Sie den oben gezeigten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese prüfen im Wesentlichen nur, ob der Objektname wie erwartet im "Nachname, Vorname"-Format erstellt wurde und ob die URL, die wir für ein `Author`-Element erhalten, wie erwartet ist.

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

Führen Sie jetzt die Tests aus. Wenn Sie das Author Model so erstellt haben, wie wir es im Modelle-Tutorial beschrieben haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death Label, wie unten gezeigt, erhalten. Der Test schlägt fehl, weil er geschrieben wurde, um zu erwarten, dass die Labeldefinition Djangos Konvention folgt, den ersten Buchstaben des Labels nicht zu kapitalisieren (Django tut dies für Sie).

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

Dies ist ein sehr kleiner Fehler, zeigt aber, wie das Schreiben von Tests jegliche Vermutungen die Sie möglicherweise gemacht haben gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death` Feld (**/catalog/models.py**) zu "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir diese nicht weiter besprechen. Fühlen Sie sich frei, Ihre eigenen Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie für das Testen Ihrer Formulare ist dieselbe wie für das Testen Ihrer Modelle; Sie müssen alles testen, was Sie programmiert haben oder was Ihr Design spezifiziert, aber nicht das Verhalten des zugrunde liegenden Frameworks und anderer Drittanbieterbibliotheken.

In der Regel bedeutet dies, dass Sie überprüfen sollten, ob die Formulare die gewünschten Felder haben und ob diese mit geeigneten Labels und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, dass Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und dessen Validierung erstellt) – das heißt, Sie müssen nicht testen, dass ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssten jedoch alle zusätzlichen Validierungen testen, von denen Sie erwarten, dass sie auf den Feldern durchgeführt werden und alle Nachrichten, die Ihr Code für Fehler generieren wird.

Betrachten Sie unser Formular für die Verlängerung von Büchern. Dieses hat nur ein Feld für das Verlängerungsdatum, das ein Label und Hilfetext hat, die wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py** Datei und ersetzen Sie jeglichen vorhandenen Code mit dem folgenden Testcode für das `RenewBookForm` Formular. Wir beginnen mit dem Import unseres Formulars und einiger Python- und Django-Bibliotheken, um zeitbezogene Funktionalität zu testen. Dann deklarieren wir unsere Formular-Testklasse, wie wir es auch für Modelle getan haben, mit einem beschreibenden Namen für unsere `TestCase`-abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob das Feld `label` und `help_text` wie erwartet sind. Wir müssen auf das Feld über das fields-Wörterbuch zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie hier, dass wir auch überprüfen müssen, ob der Labelwert `None` ist, denn selbst wenn Django das richtige Label rendert, gibt es `None` zurück, wenn der Wert nicht _explizit_ gesetzt wurde.

Der Rest der Funktionen testet, ob das Formular für Verlängerungsdaten, die knapp innerhalb des zulässigen Bereichs liegen, gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) unter Verwendung von `datetime.timedelta()` (in diesem Fall Angabe einer Anzahl von Tagen oder Wochen) konstruieren. Wir erstellen dann einfach das Formular, geben unsere Daten ein und prüfen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich weder die Datenbank noch den Test-Client. Erwägen Sie, diese Tests zur Verwendung von [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu ändern.
>
> Wir müssen auch validieren, dass die richtigen Fehler ausgegeben werden, wenn das Formular ungültig ist, aber das wird normalerweise als Teil der View-Verarbeitung gemacht, daher werden wir uns darum im nächsten Abschnitt kümmern.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstatt der Klasse `RenewBookForm(forms.Form)` verwenden, wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das ist alles zu Formularen; wir haben noch andere, aber die werden automatisch durch unsere generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code weiterhin besteht!

### Views

Um das Verhalten unserer Ansichten zu validieren, verwenden wir den Django-Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse agiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET` und `POST` Anfragen zu simulieren und die Antwort zu beobachten. Wir können fast alles an der Antwort sehen, von Low-Level-HTTP (Ergebnis-Header und Statuscodes) bis hin zu dem Template, mit dem wir das HTML rendern, und den Kontextdaten, die wir ihm übergeben. Wir können auch die Kette der Weiterleitungen (falls vorhanden) überprüfen und die URL und den Statuscode bei jedem Schritt testen. Dies ermöglicht es uns zu überprüfen, dass jede Ansicht das tut, was erwartet wird.

Beginnen wir mit einer unserer einfachsten Ansichten, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL namens 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen möchten, müssen Sie nur testen, dass die Ansicht unter der korrekten URL zugänglich ist und über ihren Namen erreicht werden kann. Wenn Sie jedoch einen testgesteuerten Entwicklungsprozess verwenden, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die Ansicht alle Autoren anzeigt und sie in Mengen von 10 paginiert.

Öffnen Sie die **/catalog/tests/test_views.py**-Datei und ersetzen Sie vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()`-Methode richten wir eine Anzahl von `Author`-Objekten ein, um unsere Pagination zu testen.

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

Alle Tests verwenden den Client (der zur von unserer `TestCase` abgeleiteten Klasse gehört), um eine `GET` Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (beachten Sie nur den spezifischen Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, dem verwendeten Template, ob die Antwort paginiert wird, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente ab.

> [!NOTE]
> Falls Sie die `paginate_by` Variable in Ihrer **/catalog/views.py** Datei auf eine andere Zahl als 10 gesetzt haben, aktualisieren Sie die Zeilen, die testen, ob die korrekte Anzahl von Elementen in paginierten Templates angezeigt wird, wie oben und in den folgenden Abschnitten. Falls Sie die Variable für die Autorenlisten-Seite auf 5 gesetzt haben, aktualisieren Sie die obige Zeile zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariablen ist, die vom View an das Template übergeben wird.
Dies ist unglaublich nützlich für Tests, weil es uns ermöglicht zu bestätigen, dass unser Template alle benötigten Daten erhält. Mit anderen Worten, wir können überprüfen, ob wir das beabsichtigte Template verwenden und welche Daten das Template erhält, was einen großen Beitrag dazu leistet zu überprüfen, dass jegliche Darstellungsprobleme ausschließlich dem Template zuzuschreiben sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen möchten Sie eine Ansicht testen, die auf eingeloggte Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` sehr ähnlich zu unserer vorherigen Ansicht, ist aber nur für eingeloggte Benutzer verfügbar und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status 'on loan' haben und "älteste zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzer-Login-Konten und `BookInstance`-Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Datensätzen), die wir später in den Tests verwenden. Die Hälfte der Bücher sind von jedem Testbenutzer entliehen worden, aber wir haben den Status aller Bücher zunächst auf "maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der `setUp()` Code unten erstellt ein Buch mit einer spezifizierten `Language`, aber _Ihr_ Code könnte das `Language`-Modell nicht enthalten, da dies als _Herausforderung_ erstellt wurde. Kommentieren Sie in diesem Fall die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Dies sollten Sie auch im `RenewBookInstancesViewTest`-Abschnitt, der folgt, tun.

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

Um zu überprüfen, dass die Ansicht auf eine Login-Seite umleitet, wenn der Benutzer nicht eingeloggt ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggen Benutzer angezeigt wird, loggen wir unseren Testbenutzer ein und greifen dann erneut auf die Seite zu und überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Die restlichen Tests bestätigen, dass unsere Ansicht nur Bücher zurückgibt, die unserem aktuellen Ausleiher gehören. Kopieren Sie den Code unten und fügen Sie ihn dem Ende der Testklasse oben hinzu.

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

Sie könnten auch Pagination-Tests hinzufügen, wenn Sie möchten!

#### Testen von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den vorhergehenden Fällen, da Sie mehr Codepfade testen müssen: Anfangsanzeige, Anzeige nach Fehlgeschlagener Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden, wie wir es für reine Anzeigeansichten getan haben.

Um das zu demonstrieren, schreiben wir einige Tests für die Ansicht, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen testen, dass die Ansicht nur Benutzern mit der Berechtigung `can_mark_returned` zur Verfügung steht und dass Benutzer auf eine HTTP 404 Fehlerseite umgeleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, dass der Anfangswert des Formulars mit einem Datum in drei Wochen in der Zukunft voreingestellt ist und dass wir bei erfolgreicher Validierung zur Ansicht "alle ausgeliehenen Bücher" umgeleitet werden. Beim Überprüfen der Validierungsfehltests prüfen wir auch, ob unser Formular die entsprechenden Fehlermeldungen ausgibt.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu. Diese erstellt zwei Benutzer und zwei Bücher, gibt jedoch nur einem Benutzer die erforderliche Berechtigung, um auf die Ansicht zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese prüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat aber nicht der Ausleiher ist (sollte gelingen) und was passiert, wenn sie versuchen, ein `BookInstance` zuzugreifen, das nicht existiert. Wir überprüfen auch, dass das korrekte Template verwendet wird.

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

Fügen Sie die nächste Testmethode, wie unten gezeigt, der Klasse hinzu. Diese prüft, dass das Anfangsdatum im Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, den Wert des Anfangswertes des Formfeldes (`response.context['form'].initial['renewal_date']`) zu überprüfen.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (der auch zur Klasse hinzugefügt werden sollte) prüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher weiterleitet, falls die Verlängerung erfolgreich ist. Was hier anders ist, ist, dass wir zum ersten Mal zeigen, wie man Daten mit dem Client `POST`-en kann. Die _data_ der post ist das zweite Argument für die post-Funktion und wird als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _all-borrowed_ Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code könnte stattdessen zur Startseite '/' weiterleiten. In diesem Fall ändern Sie die letzten beiden Zeilen des Testcodes zu wie dem unten gezeigten Code. Das `follow=True` in der Anfrage stellt sicher, dass die Anfrage die endgültige Ziel-URL zurückgibt (daher Überprüfung von `/catalog/` anstelle von `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse, wie unten gezeigt. Diese testen erneut `POST`-Anfragen, aber in diesem Fall mit ungültigen Verlängerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Die gleichen Arten von Techniken können auch verwendet werden, um die anderen Ansichten zu überprüfen.

### Templates

Django bietet Test-APIs, um zu überprüfen, dass das korrekte Template von Ihren Views aufgerufen wird, und um zu bestätigen, dass die korrekten Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung zum Testen in Django, dass Ihr HTML-Output wie erwartet gerendert wird.

## Andere empfohlene Testwerkzeuge

Das Testframework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben – wir haben nur an der Oberfläche dessen gekratzt, was der zugrunde liegende **unittest** Rahmen kann, geschweige denn die Ergänzungen von Django (zum Beispiel, schauen Sie sich an, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken zu patchen, sodass Sie Ihren eigenen Code gründlicher testen können).

Obwohl es viele andere Testwerkzeuge gibt, die Sie verwenden können, möchten wir nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie anfangen und herausfinden wollen, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment) ist ein Rahmenwerk, um Tests in einem echten Browser zu automatisieren. Es erlaubt Ihnen, einen echten Benutzer zu simulieren, der mit der Website interagiert, und stellt ein großartiges Rahmenwerk für das Systemtesten Ihrer Site dar (der nächste Schritt über Integrationstests hinaus).

## Fordern Sie sich selbst heraus

Es gibt noch viele Modelle und Views zu testen. Versuchen Sie, im Rahmen einer Herausforderung einen Testfall für die `AuthorCreate`-View zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles prüfen müssen, was Sie spezifizieren oder das Teil des Designs ist.
Dies beinhaltet, wer Zugriff hat, das Anfangsdatum, das verwendete Template, und wohin die Ansicht beim Erfolg umleitet.

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

Das Schreiben von Testcode ist weder spannend noch glamourös und wird daher oft zuletzt (oder gar nicht) beim Erstellen einer Website durchgeführt. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code nach Veränderungen gefahrlos veröffentlicht werden kann und kosteneffektiv zu pflegen ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie man Tests für Ihre Modelle, Formulare und Views schreibt und ausführt. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste zu erarbeiten ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unit-Tests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in das automatisierte Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Testtools-Referenz](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn/Server-side/Django/Forms", "Learn/Server-side/Django/Deployment", "Learn/Server-side/Django")}}
