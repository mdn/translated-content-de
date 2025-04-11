---
title: "Django Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Wenn Webseiten wachsen, wird es schwieriger, sie manuell zu testen. Nicht nur gibt es mehr zu testen, sondern da die Interaktionen zwischen den Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich andere Bereiche beeinflussen. Daher sind mehr Änderungen erforderlich, um sicherzustellen, dass alles funktioniert und keine Fehler eingeführt werden, wenn weitere Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung leicht und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie mithilfe des Testframeworks von Django _Unittests_ für Ihre Webseite automatisieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorialthemen abschließen, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django Tutorial Teil 9: Arbeiten mit Formularen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Unittests für auf Django basierende Webseiten schreibt.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) hat derzeit Seiten zur Anzeige von Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Objekte, eine Seite zur Erneuerung von `BookInstance`-Objekten sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Objekten (und auch `Book`-Datensätze, wenn Sie die _Herausforderung_ im [Formulartutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser relativ kleinen Seite kann das manuelle Navigieren zu jeder Seite und das _oberflächliche_ Prüfen, ob alles wie erwartet funktioniert, mehrere Minuten in Anspruch nehmen. Wenn wir Änderungen vornehmen und die Seite erweitern, wird die Zeit, die erforderlich ist, um manuell zu überprüfen, ob alles "richtig" funktioniert, nur zunehmen. Wenn wir so weitermachen, würden wir irgendwann die meiste Zeit testen und sehr wenig Zeit damit verbringen, unseren Code zu verbessern.

Automatisierte Tests können wirklich bei diesem Problem helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller ausgeführt werden können als manuelle Tests, viel detaillierter testen und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind bei weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden. Wenn ein Test fehlschlägt, weisen sie genau darauf hin, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realer "Benutzer" Ihres Codes fungieren und zwingen Sie, rigoros zu definieren und zu dokumentieren, wie sich Ihre Webseite verhalten soll. Oft sind sie die Grundlage für Ihre Codebeispiele und Dokumentation. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, wonach der Code geschrieben wird, um das erforderliche Verhalten zu erfüllen (z.B. [testgetriebene](https://de.wikipedia.org/wiki/Testgetriebene_Entwicklung) und [verhaltensgetriebene](https://de.wikipedia.org/wiki/Verhaltensgetriebene_Entwicklung) Entwicklung).

Dieses Tutorial zeigt, wie man automatisierte Tests für Django schreibt, indem wir der _LocalLibrary_-Webseite eine Reihe von Tests hinzufügen.

### Arten des Testens

Es gibt zahlreiche Typen, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zuerst ausgeführt, um zu überprüfen, ob der Fehler behoben ist, und dann erneut ausgeführt, um sicherzustellen, dass er nicht nach späteren Änderungen am Code erneut eingeführt wurde.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten zusammenarbeiten, wenn sie zusammen verwendet werden. Integrationstests sind sich der erforderlichen Interaktionen zwischen den Komponenten bewusst, aber nicht unbedingt der internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Webseite abdecken.

> [!NOTE]
> Andere häufige Arten von Tests umfassen Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Conformance-, Akzeptanz-, funktionale, System-, Leistungs-, Last- und Stresstests. Schauen Sie sie sich an, um mehr zu erfahren.

### Was bietet Django für Tests?

Das Testen einer Webseite ist eine komplexe Aufgabe, da sie aus mehreren Ebenen von Logik besteht - von der Handhabung von HTTP-Anfragen, über Modellabfragen, Formularvalidierung und -verarbeitung, bis hin zur Template-Rendering.

Django bietet ein Testframework mit einer kleinen Hierarchie von Klassen, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbauen. Trotz des Namens eignet sich dieses Testframework sowohl für Unit- als auch Integrationstests. Das Django-Framework fügt API-Methoden und Tools hinzu, um das Testen von Web- und spezifischen Django-Verhaltensweisen zu erleichtern. Diese ermöglichen Ihnen das Simulieren von Anfragen, das Einfügen von Testdaten und das Überprüfen der Leistungsausgabe Ihrer Anwendung. Django bietet auch eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Tools zum [Verwenden verschiedener Testframeworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks), zum Beispiel können Sie die beliebte [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie von einer der Django- (oder _unittest_) Testbasisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, ob spezifische Funktionalitäten wie erwartet funktionieren (Tests verwenden "assert"-Methoden, um zu testen, ob Ausdrücke zu `True` oder `False` führen, oder ob zwei Werte gleich sind, etc.). Wenn Sie einen Testrlauf starten, führt das Framework die gewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden werden unabhängig ausgeführt, mit gemeinsam definiertem Setup und/oder Teardown-Verhalten in der Klasse, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um einen Benutzer zu simulieren, der mit dem Code auf der View-Ebene interagiert. In den folgenden Abschnitten konzentrieren wir uns auf Unittests, die mit dieser [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Basisklasse erstellt werden.

> [!NOTE]
> Die Klasse [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) ist sehr bequem, könnte jedoch dazu führen, dass einige Tests langsamer sind, als sie sein müssten (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie wissen, was Sie mit dieser Klasse erreichen können, möchten Sie möglicherweise einige Ihrer Tests durch die verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, aber keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Betrachten Sie zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, ob `first_name` und `last_name` korrekt als `CharField` in der Datenbank gespeichert wurden, da dies etwas ist, das von Django definiert wird (obwohl Sie dies in der Praxis natürlich während der Entwicklung zwangsläufig testen werden). Sie müssen auch nicht testen, ob das `date_of_birth` als Datumsfeld validiert wurde, da auch dies etwas ist, das in Django implementiert ist.

Sie sollten jedoch die für die Labels verwendeten Texte überprüfen (_Vorname, Nachname, Geburtsdatum, Gestorben_), und die Größe des für die Texte zugewiesenen Feldes (_100 Zeichen_), da dies Teil Ihres Designs ist und etwas, das in Zukunft gebrochen/geändert werden könnte.

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

Ähnlich sollten Sie überprüfen, dass die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr Code/Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie vertrauen, dass die Django-Methode `reverse()` ordnungsgemäß implementiert ist, daher testen Sie nur, dass die dazugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser könnten bemerken, dass wir auch das Geburts- und Todesdatum auf sinnvolle Werte beschränken und überprüfen möchten, dass der Tod nach der Geburt erfolgt.
> Diese Einschränkung würde in Django zu Ihren Formklassen hinzugefügt werden (obwohl Sie Validierer für Modellfelder und Modell-Validierer definieren können, werden diese nur auf Formular-Ebene verwendet, wenn sie in der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm`, oder die `clean()`-Methode des Modells muss spezifisch aufgerufen werden.)

Mit dieser Erkenntnis beginnen wir nun zu sehen, wie man Tests definiert und ausführt.

## Übersicht der Teststruktur

Bevor wir in die Details dessen gehen, "was zu testen ist", werfen wir erst einen kurzen Blick darauf, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [integrierte Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des unittest-Moduls, welches Tests im aktuellen Arbeitsverzeichnis in jeder Datei mit dem Namen **test\*.py** entdecken wird. Vorausgesetzt, Sie bezeichnen die Dateien entsprechend, können Sie jede Struktur verwenden, die Sie möchten. Wir empfehlen, dass Sie ein Modul für Ihren Testcode erstellen und separate Dateien für Modelle, Views, Formulare und alle anderen Code-Typen anlegen, für die Sie Tests durchführen möchten. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie eine Dateistruktur wie oben gezeigt in Ihrem _LocalLibrary_-Projekt. Die **\_\_init\_\_.py** sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Grundgerüst-Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Grundgerüst-Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Grundgerüst-Website gebaut](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Es ist völlig "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie richtig testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei erhalten.
>
> Löschen Sie die Grundgerüst-Datei, da wir sie nicht benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie eine Testklasse für jedes Modell/View/Formular hinzu, das Sie testen möchten, mit individuellen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse haben, um einen spezifischen Anwendungsfall zu testen, mit individuellen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (zum Beispiel, eine Klasse, um zu testen, dass ein modellspezifisches Feld korrekt validiert wird, mit Funktionen, die jeden der möglichen Fehlerszenarien testen). Auch hier liegt die Struktur weitgehend bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

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

Die neue Klasse definiert zwei Methoden, die Sie für die Vor-Test-Konfiguration verwenden können (zum Beispiel, um beliebige Modelle oder andere für den Test benötigte Objekte zu erstellen):

- `setUpTestData()` wird einmal zu Beginn des Testlaufs für Klasseneinrichtung aufgerufen. Sie würden es verwenden, um Objekte zu erstellen, die in keiner der Testmethoden geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um beliebige Objekte einzurichten, die durch den Test geändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbankaufräumung für Sie übernimmt.

Darunter haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu testen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ausgewertet wird, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `AssertTrue`, `AssertFalse` und `AssertEqual` sind Standard-Assertions, die von **unittest** bereitgestellt werden. Es gibt andere Standard-Assertions im Framework und auch [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View weiterleitet (`assertRedirects`), ob ein bestimmtes Template verwendet wurde (`assertTemplateUsed`), usw.

> [!NOTE]
> Normalerweise sollten Sie **nicht** **print()**-Funktionen in Ihren Tests wie oben gezeigt verwenden. Wir machen das hier nur, damit Sie die Reihenfolge sehen können, in der die Einrichtungsfunktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## Wie man die Tests ausführt

Der einfachste Weg, um alle Tests auszuführen, ist der Befehl:

```bash
python3 manage.py test
```

Dies wird alle Dateien entdecken, die mit dem Muster **test\*.py** im aktuellen Verzeichnis übereinstimmen, und alle Tests ausführen, die mit geeigneten Basisklassen definiert sind (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig berichten die Tests individuell nur über Testfehler, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler erhalten, wie: `ValueError: Missing staticfiles manifest entry...` liegt dies möglicherweise daran, dass beim Testen _collectstatic_ standardmäßig nicht ausgeführt wird und Ihre App eine Speicherklasse verwendet, die dies erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für weitere Informationen). Es gibt eine Reihe von Möglichkeiten, wie Sie dieses Problem lösen können - die einfachste ist, _collectstatic_ vor der Ausführung der Tests zu verwenden:
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

Hier sehen wir, dass wir einen Testfehler hatten, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieses Versagen wird erwartet, weil `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, das Sie aus der Testausgabe oben lernen sollten, ist, dass sie viel wertvoller ist, wenn Sie beschreibende/nützliche Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie erneut daran, dass Sie normalerweise dieses `print()` nicht zu Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen und wie Sie steuern können, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testlauf erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel, um die Testerfolge neben den Fehlern anzuzeigen (und eine ganze Menge Informationen darüber, wie die Testdatenbank eingerichtet wird), können Sie die Verbosity auf "2" setzen wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die zulässigen Verbosity-Stufen sind 0, 1, 2 und 3, bei der Standardeinstellung "1".

### Beschleunigung der Ausführung

Wenn Ihre Tests unabhängig sind, können Sie sie auf einer Mehrprozessor-Maschine erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten führt einen Testprozess pro verfügbarem Kern aus.
Das `auto` ist optional, und Sie können auch eine bestimmte Anzahl von Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für weitere Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, siehe [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Ausführung spezifischer Tests

Wenn Sie ein Subset Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punktpfad zu dem/den Paket(en), Modul, `TestCase` Unterklasse oder Methode angeben:

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

### Weitere Testoptionen

Der Test-Runner bietet viele weitere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu verwenden, um die Ergebnisse zu erfassen.
Weitere Informationen finden Sie in der Django-Dokumentation zum [Test-Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test).

## LocalLibrary-Tests

Da wir nun wissen, wie wir unsere Tests ausführen und was wir testen müssen, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber dies soll Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie noch tun können.

### Modelle

Wie oben besprochen, sollten wir alles testen, was Teil unseres Designs ist oder durch Code definiert ist, den wir geschrieben haben, jedoch nicht Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wurde.

Zum Beispiel betrachten Sie das unten stehende `Author`-Modell. Hier sollten wir die Label für alle Felder testen, denn auch wenn wir die meisten davon nicht explizit spezifiziert haben, haben wir ein Design, das sagt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feldlabels ihre beabsichtigten Werte haben. Ähnlich, während wir vertrauen, dass Django ein Feld der angegebenen Länge erstellt, ist es sinnvoll, einen Test für diese Länge zu spezifizieren, um sicherzustellen, dass es wie geplant implementiert wurde.

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

Öffnen Sie **/catalog/tests/test_models.py**, und ersetzen Sie vorhandenen Code durch folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) mit einem beschreibenden Namen davon ableiten, so dass wir fehlschlagende Tests in der Ausgabe leicht identifizieren können. Dann rufen wir `setUpTestData()` auf, um ein Autor-Objekt zu erstellen, das wir aber nicht in den Tests modifizieren werden.

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

Die Feldtests überprüfen, dass die Werte der Feldlabels (`verbose_name`) und die Größe der Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen dem gleichen Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Interessante Punkte sind:

- Wir können den `verbose_name` nicht direkt mit `author.first_name.verbose_name` erhalten, da `author.first_name` ein _String_ ist (keine Referenz auf das `first_name`-Objekt, das wir verwenden könnten, um darauf zuzugreifen). Stattdessen müssen wir das '\_meta'-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten und dieses zu verwenden, um die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass, wenn der Test fehlschlägt, die Ausgabe der letztgenannten Variante uns mitteilt, was das Label tatsächlich war, was das Debugging des Problems etwas erleichtert.

> [!NOTE]
> Tests für die `last_name` und `date_of_birth` Labels sowie der Test für die Länge des `last_name` Feldes wurden weggelassen. Fügen Sie nun Ihre eigenen Versionen hinzu, unter Verwendung der oben gezeigten Namenskonventionen und Ansätze.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Diese prüfen im Wesentlichen nur, ob der Objektname wie erwartet im "Nachname", "Vorname"-Format konstruiert wurde und ob die URL, die wir für ein `Author`-Objekt erhalten, wie erwartet ist.

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

Führen Sie nun die Tests aus. Wenn Sie das Autor-Modell wie im Modelltutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für das `date_of_death` Label erhalten, wie unten gezeigt. Der Test schlägt fehl, weil er so geschrieben wurde, dass er erwartet, dass die Labeldefinition Djangos Konvention folgt, den ersten Buchstaben des Labels nicht zu kapitalisieren (Django tut dies für Sie).

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

Dies ist ein sehr kleiner Fehler, aber es zeigt auf, wie das Schreiben von Tests dazu führen kann, dass Annahmen, die gemacht wurden, gründlich überprüft werden.

> [!NOTE]
> Ändern Sie das Label für das `date_of_death` Feld (**/catalog/models.py**) auf "died" und führen Sie die Tests erneut aus.

Die Muster für das Testen der anderen Modelle sind ähnlich, daher werden wir diese nicht weiter behandeln. Fühlen Sie sich frei, eigene Tests für unsere anderen Modelle zu erstellen.

### Formulare

Die Philosophie beim Testen Ihrer Formulare ist die gleiche wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie codiert haben oder Ihr Design spezifiziert, aber nicht das Verhalten des zugrundeliegenden Frameworks und anderer Drittanbieter-Bibliotheken.

Im Allgemeinen bedeutet dies, dass Sie testen sollten, dass die Formulare die gewünschten Felder enthalten und dass diese mit den entsprechenden Labeln und Hilfetexten angezeigt werden. Sie müssen nicht prüfen, ob Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und Validierung erstellt) - d.h. Sie müssen nicht prüfen, dass ein Email-Feld nur Emails akzeptiert. Sie müssen jedoch jede zusätzliche Validierung testen, die Sie von den Feldern erwarten, und alle Nachrichten, die Ihr Code bei Fehlern erzeugen wird.

Betrachten Sie unseren Formular zur Erneuerung von Büchern. Dieses hat nur ein Feld für das Erneuerungsdatum, das ein Label und Hilfetext hat, den wir überprüfen müssen.

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

Öffnen Sie unsere Datei **/catalog/tests/test_forms.py** und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Wir beginnen mit dem Import unseres Formulars und einiger Python- und Django-Bibliotheken, um Funktionalitäten im Zusammenhang mit der Zeit zu testen. Dann deklarieren wir unsere Formular-Testklasse auf die gleiche Weise wie bei Modellen, unter Verwendung eines beschreibenden Namens für unsere `TestCase`-abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, dass das Feld `label` und `help_text` wie erwartet sind. Wir müssen auf das Feld mit dem Feldersatz-Array zugreifen (z.B. `form.fields['renewal_date']`). Beachten Sie, dass wir hier auch testen müssen, ob der Labelwert `None` ist, da selbst wenn Django das richtige Label rendert, es `None` zurückgibt, wenn der Wert nicht _explizit_ festgelegt ist.

Der Rest der Funktionen testet, ob das Formular für Erneuerungsdaten gerade innerhalb des akzeptablen Bereichs gültig ist und ungültig für Werte außerhalb des Bereichs. Beachten Sie, wie wir Testdatum-Werte um unser aktuelles Datum (`datetime.date.today()`) mit `datetime.timedelta()` konstruieren (in diesem Fall die Anzahl der Tage oder Wochen angeben). Dann erstellen wir einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir tatsächlich nicht die Datenbank oder den Test-Client. Erwägen Sie, diese Tests dahingehend zu ändern, dass Sie [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) verwenden.
>
> Wir müssen auch validieren, dass die korrekten Fehler ausgelöst werden, wenn das Formular ungültig ist. Dies wird jedoch normalerweise im Rahmen der View-Verarbeitung getan, also kümmern wir uns im nächsten Abschnitt darum.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) Klasse `RenewBookModelForm(forms.ModelForm)` anstelle von `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das war's für Formulare; wir haben keine anderen mehr, aber sie werden automatisch durch unsere generischen klassenbasierten Bearbeitungsansichten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und bestätigen Sie, dass unser Code weiterhin erfolgreich ist!

### Views

Um unser View-Verhalten zu validieren, verwenden wir den Django-Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse fungiert wie ein Dummy-Webbrowser, den wir verwenden können, um `GET`- und `POST`-Anfragen auf einer URL zu simulieren und die Antwort zu beobachten. Wir können fast alles über die Antwort sehen, von niedrigstufigen HTTP (Ergebnisheader und Statuscodes) über die Vorlage, die wir verwenden, um das HTML zu rendern, bis hin zu den Kontextdaten, die wir ihr übergeben. Wir können auch die Kette von Weiterleitungen (falls vorhanden) sehen und die URL und den Statuscode in jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, dass jede View das tut, was erwartet wird.

Kommen wir zu einer unserer einfachsten Ansichten, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL, die in der URL-Konfiguration den Namen 'authors' trägt).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django für uns erledigt. Wenn Sie Django vertrauen, müssen Sie im Grunde nur testen, dass die View unter der korrekten URL verfügbar ist und mit ihrem Namen aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess folgen, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die Ansicht alle Autoren anzeigt und sie in 10-er Schritten paginiert.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der `setUpTestData()` Methode richten wir eine Anzahl von `Author`-Objekten ein, damit wir unsere Paginierung testen können.

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

Sobald wir die Antwort haben, fragen wir sie nach ihrem Statuscode, dem verwendeten Template, ob die Antwort paginiert ist, die Anzahl der zurückgegebenen Elemente und die Gesamtzahl der Elemente ab.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer **/catalog/views.py** Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen aktualisieren, die überprüfen, dass die korrekte Anzahl von Elementen in paginierten Templates oben und in den folgenden Abschnitten angezeigt wird. Wenn Sie zum Beispiel die Variable für die Autorenlisten-Seite auf 5 gesetzt haben, aktualisieren Sie die Zeile oben auf:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, der die Kontextvariable ist, die von der View an das Template übergeben wird.
Dies ist unglaublich nützlich für Tests, da es uns ermöglicht zu bestätigen, dass unser Template alle Daten erhält, die es benötigt. Mit anderen Worten, wir können überprüfen, dass wir das beabsichtigte Template verwenden und welche Daten das Template bekommt, was einen großen Beitrag zur Bestätigung leistet, dass alle Rendering-Probleme ausschließlich auf das Template zurückzuführen sind.

#### Views, die auf angemeldete Benutzer beschränkt sind

In einigen Fällen möchten Sie möglicherweise eine View testen, die nur auf angemeldete Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` der vorherigen Ansicht sehr ähnlich, aber nur für angemeldete Benutzer verfügbar und zeigt nur `BookInstance`-Einträge, die von dem aktuellen Benutzer ausgeliehen sind, den Status 'ausgeliehen' haben und "älteste zuerst" sortiert.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir zuerst `SetUp()`, um einige Benutzer-Login-Konten und `BookInstance` Objekte zu erstellen (zusammen mit ihren zugehörigen Büchern und anderen Einträgen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben ursprünglich den Status aller Bücher auf "Wartung" gesetzt. Wir verwenden `SetUp()` anstelle von `setUpTestData()`, weil wir einige dieser Objekte später ändern werden.

> [!NOTE]
> Der Code `setUp()` unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise nicht das `Language`-Modell, da dies eine _Herausforderung_ war. Wenn dies der Fall ist, kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Sie sollten dies auch im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, dass die View zu einer Login-Seite umleitet, wenn der Benutzer nicht angemeldet ist, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` gezeigt. Um zu überprüfen, dass die Seite für einen angemeldeten Benutzer angezeigt wird, melden wir zuerst unseren Testbenutzer an und greifen dann erneut auf die Seite zu, wobei wir prüfen, ob wir ein `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests überprüft, dass unsere Ansicht nur Bücher zurückgibt, die bei unserem aktuellen Entleiher sind. Kopieren Sie den untenstehenden Code und fügen Sie ihn am Ende der obigen Testklasse ein.

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

Sie könnten auch Paginierungstests hinzufügen, wenn Sie dies wünschen!

#### Tests von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den oben genannten Fällen, da Sie mehr Codepfade testen müssen: anfängliche Anzeige, Anzeige nach gescheiterter Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client für Tests fast genau so verwenden wie wir es für nur Anzeige-Ansichten getan haben.

Um dies zu demonstrieren, lassen Sie uns einige Tests für die Ansicht schreiben, die für das Verlängern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen sicherstellen, dass die Ansicht nur für Benutzer verfügbar ist, die die Berechtigung `can_mark_returned` haben, und dass Benutzer zu einer HTTP 404 Fehlerseite umgeleitet werden, wenn sie versuchen, eine nicht existierende `BookInstance` zu erneuern. Wir sollten überprüfen, dass der anfängliche Wert des Formulars mit einem Datum drei Wochen in der Zukunft angegeben wird und dass, wenn die Validierung erfolgreich ist, wir zur Ansicht "alle ausgeliehenen Bücher" weitergeleitet werden. Im Rahmen der Überprüfung der Validierungsfehlertests werden wir auch prüfen, ob unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (wie unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Dies erstellt zwei Benutzer und zwei Buchinstanzen, gibt aber nur einem Benutzer die erforderliche Berechtigung, um die Ansicht aufzurufen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die Ansicht zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht angemeldet ist, wenn ein Benutzer angemeldet ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Entleiher ist (sollte Erfolg haben), und was passiert, wenn sie versuchen, auf eine nicht existierende `BookInstance` zuzugreifen. Wir prüfen auch, dass das richtige Template verwendet wird.

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

Fügen Sie die nächste Testmethode hinzu, wie unten gezeigt. Diese prüft, dass das Anfangsdatum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, auf den Wert des anfänglichen Werts des Formularfelds zuzugreifen (`response.context['form'].initial['renewal_date'])`.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie ihn ebenfalls der Klasse hinzu) prüft, dass die Ansicht zu einer Liste aller ausgeliehenen Bücher weiterleitet, wenn die Erneuerung erfolgreich ist. Was hier anders ist, ist, dass wir zum ersten Mal zeigen, wie Sie `POST`-Daten mit dem Client ausführen können. Die Post-_Daten_ sind das zweite Argument für die Post-Funktion und werden als Wörterbuch von Schlüssel/Werten angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle geliehenen_ Ansicht wurde als _Herausforderung_ hinzugefügt, und Ihr Code kann stattdessen zur Startseite '/' weiterleiten. Wenn dem so ist, ändern Sie die letzten beiden Zeilen des Testcodes, um sie wie der unten gezeigte Code auszuführen. Das `follow=True` in der Anforderung stellt sicher, dass die Anforderung die endgültige Ziel-URL zurückgibt (daher Überprüfung auf `/catalog/` anstelle von `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen in die Klasse, wie unten gezeigt. Diese testen wiederum `POST`-Anfragen, jedoch in diesem Fall mit ungültigen Verlängerungsdaten. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen wie erwartet sind.

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

Django bietet Test-APIs, um zu überprüfen, dass das richtige Template von Ihren Ansichten aufgerufen wird und um Ihnen zu ermöglichen, zu überprüfen, dass die korrekten Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung in Django für das Testen, dass Ihr HTML-Output wie erwartet gerendert wird.

## Andere empfohlene Testwerkzeuge

Djangos Testframework kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben - wir haben nur an der Oberfläche dessen gekratzt, was das zugrunde liegende **unittest**-Framework tun kann, geschweige denn Djangos Erweiterungen (zum Beispiel, schauen Sie sich an, wie man [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden kann, um Drittanbieter-Bibliotheken zu patchen, damit Sie Ihren eigenen Code gründlicher testen können).

Während es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie gerade anfangen und herausfinden wollen, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework, um Tests in einem echten Browser zu automatisieren. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet ein großartiges Framework für das Systemtesten Ihrer Seite (der nächste Schritt nach dem Integrationstest).

## Fordern Sie sich selbst heraus

Es gibt noch viele Modelle und Ansichten, die wir testen können. Als Herausforderung versuchen Sie, einen Testfall für die `AuthorCreate` Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Dies wird beinhalten, wer Zugriff hat, das Anfansdatum, das verwendete Template und wohin die Ansicht im Erfolgsfall weiterleitet.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Nutzer die entsprechende Berechtigung zuzuweisen

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

Das Schreiben von Testcode ist weder lustig noch glamourös und wird daher oft zuletzt (oder gar nicht) geschrieben, wenn man eine Webseite erstellt. Es ist jedoch ein wesentlicher Bestandteil, um sicherzustellen, dass Ihr Code sicher veröffentlicht werden kann, nachdem Änderungen vorgenommen wurden, und um ihn kostengünstig zu warten.

In diesem Tutorial haben wir gezeigt, wie man Tests für Ihre Modelle, Formulare und Ansichten schreibt und ausführt. Am wichtigsten ist, dass wir einen kurzen Überblick darüber gegeben haben, was Sie testen sollten, was oft das Schwierigste ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unittests für Ihre Webseiten zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Webseite bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisierte Tests](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz der Testwerkzeuge](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Test-Driven Web Development mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)
- [Testen in Django (Teil 1) - Best Practices und Beispiele](https://realpython.com/testing-in-django-part-1-best-practices-and-examples/) (RealPython, 2013)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
