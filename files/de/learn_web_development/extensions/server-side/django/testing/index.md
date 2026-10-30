---
title: "Django-Tutorial Teil 10: Eine Django-Webanwendung testen"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Je größer Websites werden, desto schwieriger wird es, sie manuell zu testen. Es gibt nicht nur mehr zu testen: Wenn die Wechselwirkungen zwischen Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich andere Bereiche beeinflussen. Dadurch sind weitere Änderungen nötig, um sicherzustellen, dass weiterhin alles funktioniert und durch spätere Änderungen keine Fehler entstehen. Eine Möglichkeit, diese Probleme zu begrenzen, sind automatisierte Tests. Sie lassen sich nach jeder Änderung einfach und zuverlässig ausführen. In diesem Tutorial erfahren Sie, wie Sie mit dem Test-Framework von Django _Unit-Tests_ für Ihre Website automatisieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Teile des Tutorials, einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms">Django-Tutorial Teil 9: Mit Formularen arbeiten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie Sie Unit-Tests für Django-basierte Websites schreiben.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) verfügt inzwischen über Seiten, die Listen aller Bücher und Autoren anzeigen, Detailansichten für `Book`- und `Author`-Einträge, eine Seite zum Verlängern von `BookInstance`-Einträgen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Einträgen. Letzteres gilt auch für `Book`-Datensätze, wenn Sie die _Aufgabe_ im [Tutorial zu Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben. Selbst bei dieser relativ kleinen Website kann es mehrere Minuten dauern, jede Seite manuell aufzurufen und _oberflächlich_ zu prüfen, ob alles wie erwartet funktioniert. Wenn wir die Website weiterentwickeln, wird der Zeitaufwand für diese manuelle Prüfung nur steigen. Machen wir so weiter, verbringen wir irgendwann den Großteil unserer Zeit mit Tests und kaum noch Zeit mit der Verbesserung unseres Codes.

Automatisierte Tests können hier sehr helfen! Sie sind deutlich schneller als manuelle Tests, können viel mehr Details prüfen und testen jedes Mal genau dieselbe Funktionalität – menschliche Tester sind bei Weitem nicht so zuverlässig. Weil sie schnell sind, können automatisierte Tests häufiger ausgeführt werden. Schlägt ein Test fehl, zeigt er genau, an welcher Stelle sich der Code nicht wie erwartet verhält.

Außerdem können automatisierte Tests als erster echter „Benutzer“ Ihres Codes dienen. Sie zwingen Sie dazu, sorgfältig festzulegen und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft bilden sie die Grundlage für Codebeispiele und Dokumentation. Aus diesen Gründen beginnen manche Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests; anschließend wird der Code so geschrieben, dass er das geforderte Verhalten erfüllt. Beispiele sind die [testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und die [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung.

Dieses Tutorial zeigt anhand mehrerer Tests für die _LocalLibrary_-Website, wie Sie automatisierte Tests für Django schreiben.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, häufig auf Klassen- und Funktionsebene.
- Regressionstests
  - : Bilden frühere Fehler nach. Ein solcher Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde. Danach wird er erneut ausgeführt, um sicherzustellen, dass spätere Codeänderungen den Fehler nicht wieder eingeführt haben.
- Integrationstests
  - : Überprüfen, wie Gruppen von Komponenten zusammenarbeiten. Integrationstests berücksichtigen die erforderlichen Wechselwirkungen zwischen Komponenten, aber nicht unbedingt die internen Abläufe jeder einzelnen Komponente. Sie können einfache Komponentengruppen oder die gesamte Website abdecken.

> [!NOTE]
> Weitere gängige Testarten sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, funktionale, System-, Performance-, Last- und Stresstests. Informieren Sie sich bei Bedarf näher darüber.

### Was bietet Django zum Testen?

Eine Website zu testen ist komplex, weil sie aus mehreren Logikebenen besteht – von der Verarbeitung von HTTP-Anfragen über Modellabfragen und die Validierung und Verarbeitung von Formularen bis hin zum Rendern von Templates.

Django stellt ein Test-Framework mit einer kleinen Hierarchie von Klassen bereit, das auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbaut. Trotz des Namens eignet sich dieses Test-Framework sowohl für Unit- als auch für Integrationstests. Das Django-Framework ergänzt API-Methoden und Werkzeuge, mit denen Sie Web- und Django-spezifisches Verhalten testen können. Damit lassen sich Anfragen simulieren, Testdaten einfügen und die Ausgabe Ihrer Anwendung untersuchen. Django bietet außerdem eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#liveservertestcase)) und Werkzeuge für die [Verwendung anderer Test-Frameworks](https://docs.djangoproject.com/en/6.1/topics/testing/advanced/#other-testing-frameworks). Sie können beispielsweise das beliebte [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)-Framework einbinden, um die Interaktion eines Benutzers mit einem laufenden Browser zu simulieren.

Um einen Test zu schreiben, leiten Sie eine Klasse von einer der Django- oder _unittest_-Basisklassen für Tests ab ([SimpleTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#liveservertestcase)). Anschließend schreiben Sie einzelne Methoden, die prüfen, ob bestimmte Funktionen wie erwartet arbeiten. Tests verwenden „assert“-Methoden, um beispielsweise zu prüfen, ob Ausdrücke `True` oder `False` ergeben oder ob zwei Werte gleich sind. Wenn Sie einen Testlauf starten, führt das Framework die ausgewählten Testmethoden Ihrer abgeleiteten Klassen aus. Die Testmethoden laufen unabhängig voneinander; gemeinsames Verhalten zur Vorbereitung und zum Aufräumen wird in der Klasse definiert, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase). Diese Testklasse erstellt vor der Ausführung ihrer Tests eine saubere Datenbank und führt jede Testfunktion in einer eigenen Transaktion aus. Außerdem verfügt sie über einen Test-[Client](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#django.test.Client), mit dem Sie die Interaktion eines Benutzers mit dem Code auf View-Ebene simulieren können. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser [TestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase)-Basisklasse erstellt werden.

> [!NOTE]
> Die Klasse [django.test.TestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#testcase) ist sehr praktisch, kann aber dazu führen, dass manche Tests langsamer sind als nötig: Nicht jeder Test braucht eine eigene Datenbank oder muss eine Interaktion mit einer View simulieren. Sobald Sie mit den Möglichkeiten dieser Klasse vertraut sind, können Sie einige Tests durch einfachere verfügbare Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, nicht aber Bibliotheken oder Funktionen, die Python oder Django bereitstellen.

Betrachten Sie beispielsweise das unten definierte `Author`-Modell. Sie müssen nicht ausdrücklich testen, ob `first_name` und `last_name` als `CharField` korrekt in der Datenbank gespeichert wurden: Dieses Verhalten ist durch Django festgelegt. In der Praxis werden Sie es während der Entwicklung natürlich unweigerlich mitprüfen. Ebenso müssen Sie nicht testen, ob `date_of_birth` als Datumsfeld validiert wird, denn auch das übernimmt Django.

Prüfen sollten Sie hingegen die Texte der Labels (_First name, Last name, Date of birth, Died_) und die Größe des für den Text vorgesehenen Felds (_100 Zeichen_). Beides gehört zu Ihrem Entwurf und könnte sich künftig unbeabsichtigt ändern oder nicht mehr funktionieren.

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

Ebenso sollten Sie prüfen, ob sich die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie gefordert verhalten, denn sie gehören zu Ihrem Code und Ihrer Geschäftslogik. Bei `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` korrekt implementiert ist. Sie testen also, ob die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser werden bemerken, dass wir auch Geburts- und Sterbedatum auf sinnvolle Werte begrenzen und prüfen sollten, ob der Tod nach der Geburt liegt.
> In Django würden Sie diese Einschränkung Ihren Formularklassen hinzufügen. Sie können zwar Validatoren für Modellfelder und Modelle definieren, auf Formularebene werden diese jedoch nur verwendet, wenn die `clean()`-Methode des Modells sie aufruft. Dafür ist ein `ModelForm` erforderlich, oder die `clean()`-Methode des Modells muss ausdrücklich aufgerufen werden.

Sehen wir uns nun an, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir im Detail besprechen, _was_ getestet werden sollte, sehen wir uns zunächst kurz an, _wo_ und _wie_ Tests definiert werden.

Django nutzt die [integrierte Testerkennung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des unittest-Moduls. Sie findet Tests unterhalb des aktuellen Arbeitsverzeichnisses in allen Dateien, deren Namen dem Muster **test\*.py** entsprechen. Solange Sie Ihre Dateien passend benennen, können Sie sie beliebig strukturieren. Wir empfehlen, ein Modul für Ihren Testcode anzulegen und getrennte Dateien für Modelle, Views, Formulare und andere zu testende Codearten zu verwenden. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie in Ihrem _LocalLibrary_-Projekt die oben gezeigte Dateistruktur. **\_\_init\_\_.py** sollte eine leere Datei sein; sie zeigt Python an, dass das Verzeichnis ein Paket ist. Die drei Testdateien können Sie erstellen, indem Sie die vorbereitete Testdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die vorbereitete Testdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Grundstruktur der Django-Website angelegt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) haben. Es ist durchaus zulässig, alle Tests darin unterzubringen. Wenn Sie gründlich testen, wird die Datei jedoch schnell sehr groß und unübersichtlich.
>
> Löschen Sie die vorbereitete Datei, da wir sie nicht mehr benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie hier gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Häufig legen Sie für jedes Modell, jede View oder jedes Formular, das Sie testen möchten, eine Testklasse mit einzelnen Methoden für bestimmte Funktionen an. In anderen Fällen kann eine eigene Klasse für einen bestimmten Anwendungsfall sinnvoll sein, deren Testfunktionen jeweils einen Aspekt dieses Anwendungsfalls prüfen. Beispielsweise könnten Sie eine Klasse zur Prüfung der Validierung eines Modellfelds erstellen, mit je einer Funktion für jeden möglichen Fehlerfall. Die Struktur bleibt Ihnen überlassen; am besten gehen Sie jedoch einheitlich vor.

Fügen Sie die folgende Testklasse am Ende der Datei hinzu. Sie zeigt, wie Sie eine Testklasse erstellen, indem Sie sie von `TestCase` ableiten.

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

Die neue Klasse definiert zwei Methoden für die Vorbereitung der Tests, etwa um benötigte Modelle oder andere Objekte zu erstellen:

- `setUpTestData()` wird zu Beginn des Testlaufs einmal für die Einrichtung auf Klassenebene aufgerufen. Verwenden Sie die Methode für Objekte, die in keiner der Testmethoden verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte vorzubereiten, die im jeweiligen Test verändert werden könnten. Jede Testfunktion erhält eine „frische“ Version dieser Objekte.

> [!NOTE]
> Testklassen verfügen auch über eine Methode `tearDown()`, die wir hier nicht verwenden. Für Datenbanktests ist sie nicht besonders nützlich, da die Basisklasse `TestCase` das Aufräumen der Datenbank bereits übernimmt.

Darunter stehen mehrere Testmethoden. Sie verwenden `assert`-Funktionen, um zu prüfen, ob Bedingungen wahr oder falsch sind oder ob Werte übereinstimmen (`assertTrue`, `assertFalse`, `assertEqual`). Ergibt die Prüfung nicht das erwartete Ergebnis, schlägt der Test fehl und meldet den Fehler in der Konsole.

`assertTrue`, `assertFalse` und `assertEqual` sind Standard-Assertions von **unittest**. Das Framework enthält weitere Standard-Assertions sowie [Django-spezifische Assertions](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#assertions), etwa `assertRedirects` zur Prüfung einer Weiterleitung durch eine View oder `assertTemplateUsed` zur Prüfung des verwendeten Templates.

> [!NOTE]
> Normalerweise sollten Ihre Tests **keine** **print()**-Funktionen wie oben enthalten. Wir verwenden sie hier nur, damit Sie im folgenden Abschnitt in der Konsole sehen können, in welcher Reihenfolge die Vorbereitungsmethoden aufgerufen werden.

## Tests ausführen

Am einfachsten führen Sie alle Tests mit folgendem Befehl aus:

```bash
python3 manage.py test
```

Damit werden unterhalb des aktuellen Verzeichnisses alle Dateien gefunden, deren Namen dem Muster **test\*.py** entsprechen. Anschließend werden alle Tests ausgeführt, die mit geeigneten Basisklassen definiert wurden. Hier gibt es mehrere Testdateien, derzeit enthält aber nur **/catalog/tests/test_models.py** Tests. Standardmäßig werden zunächst nur fehlgeschlagene Tests einzeln gemeldet, gefolgt von einer Zusammenfassung.

> [!NOTE]
> Wenn Sie Fehlermeldungen wie `ValueError: Missing staticfiles manifest entry...` erhalten, kann das daran liegen, dass beim Testen standardmäßig kein _collectstatic_ ausgeführt wird, Ihre Anwendung aber eine Storage-Klasse verwendet, die dies voraussetzt. Weitere Informationen finden Sie unter [manifest_strict](https://docs.djangoproject.com/en/6.1/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict). Es gibt mehrere Lösungen; am einfachsten ist es, _collectstatic_ vor den Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis von _LocalLibrary_ aus. Die Ausgabe sollte ungefähr so aussehen:

```bash
> python3 manage.py test

Found 3 test(s).
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
setUpTestData: Run once to set up non-modified data for all class methods.
setUp: Run once for every test method to set up clean data.
Method: test_false_is_false.
.setUp: Run once for every test method to set up clean data.
Method: test_false_is_true.
FsetUp: Run once for every test method to set up clean data.
Method: test_one_plus_one_equals_two.
.
======================================================================
FAIL: test_false_is_true (catalog.tests.test_models.YourTestClass.test_false_is_true)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/django-locallibrary-tutorial/catalog/tests/test_models.py", line 21, in test_false_is_true
    self.assertTrue(False)
AssertionError: False is not true

----------------------------------------------------------------------
Ran 3 tests in 0.001s

FAILED (failures=1)
Destroying test database for alias 'default'...
```

Hier sehen Sie, dass ein Test fehlgeschlagen ist. Außerdem können Sie genau erkennen, welche Funktion fehlgeschlagen ist und warum. Dieser Fehler ist zu erwarten, denn `False` ist nicht `True`!

> [!NOTE]
> Die wichtigste Erkenntnis aus der obigen Testausgabe ist, dass aussagekräftige Namen für Ihre Objekte und Methoden die Ausgabe deutlich hilfreicher machen.

Die Ausgabe der `print()`-Funktionen zeigt, dass die Methode `setUpTestData()` einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Ein `.` bedeutet, dass ein Test bestanden wurde, ein `F`, dass er fehlgeschlagen ist. Beide erscheinen jeweils am Anfang der nächsten Zeile der `print()`-Ausgabe.
Denken Sie daran, dass Sie normalerweise keine solchen `print()`-Aufrufe in Ihre Tests einfügen würden.

In den nächsten Abschnitten erfahren Sie, wie Sie bestimmte Tests ausführen und festlegen, wie viele Informationen die Tests ausgeben.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über einen Testlauf erhalten möchten, können Sie die _Ausführlichkeit_ ändern. Um beispielsweise neben fehlgeschlagenen auch bestandene Tests aufzulisten und ausführliche Informationen zur Einrichtung der Testdatenbank zu sehen, setzen Sie sie wie gezeigt auf „2“:

```bash
python3 manage.py test --verbosity 2
```

Zulässig sind die Ausführlichkeitsstufen 0, 1, 2 und 3; der Standardwert ist „1“.

### Tests beschleunigen

Wenn Ihre Tests unabhängig voneinander sind, können Sie sie auf einem Rechner mit mehreren Prozessorkernen durch parallele Ausführung deutlich beschleunigen.
Mit `--parallel auto` wird für jeden verfügbaren Kern ein Testprozess gestartet.
`auto` ist optional; Sie können stattdessen auch eine bestimmte Anzahl von Kernen angeben.

```bash
python3 manage.py test --parallel auto
```

Weitere Informationen, auch zum Vorgehen bei nicht voneinander unabhängigen Tests, finden Sie unter [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/6.1/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Bestimmte Tests ausführen

Wenn Sie nur einen Teil Ihrer Tests ausführen möchten, geben Sie den vollständigen, durch Punkte getrennten Pfad zum Paket, Modul, zur `TestCase`-Unterklasse oder zur Methode an:

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

### Weitere Optionen des Test-Runners

Der Test-Runner bietet viele weitere Optionen. Sie können Tests beispielsweise in zufälliger Reihenfolge ausführen (`--shuffle`), sie im Debug-Modus starten (`--debug-mode`) oder den Python-Logger verwenden, um Ergebnisse zu erfassen.
Weitere Informationen finden Sie in der Django-Dokumentation zum [Test-Runner](https://docs.djangoproject.com/en/6.1/ref/django-admin/#test).

## Tests für LocalLibrary

Jetzt wissen wir, wie wir Tests ausführen und welche Dinge wir testen sollten. Sehen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden denkbaren Test schreiben. Die Beispiele sollen Ihnen aber zeigen, wie Tests funktionieren und welche weiteren Möglichkeiten Sie haben.

### Modelle

Wie oben erläutert, sollten wir alles testen, was zu unserem Entwurf gehört oder durch selbst geschriebenen Code definiert wird – nicht aber Bibliotheken oder Code, die bereits vom Django- oder Python-Entwicklungsteam getestet werden.

Betrachten Sie beispielsweise das folgende `Author`-Modell. Hier sollten wir die Labels aller Felder testen. Auch wenn wir die meisten nicht ausdrücklich angegeben haben, legt unser Entwurf fest, welche Werte sie haben sollen. Ohne Tests wissen wir nicht, ob die Feld-Labels tatsächlich die vorgesehenen Werte haben. Ebenso vertrauen wir zwar darauf, dass Django ein Feld mit der angegebenen Länge erstellt, doch ein Test für diese Länge stellt sicher, dass unsere Vorgabe wie geplant umgesetzt wurde.

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

Öffnen Sie **/catalog/tests/test_models.py** und ersetzen Sie den vorhandenen Code durch den folgenden Testcode für das `Author`-Modell.

Wie Sie sehen, importieren wir zuerst `TestCase` und leiten unsere Testklasse (`AuthorModelTest`) davon ab. Der aussagekräftige Name hilft uns, fehlgeschlagene Tests in der Ausgabe leicht zu erkennen. Anschließend erstellen wir mit `setUpTestData()` ein Author-Objekt, das wir in den Tests verwenden, aber nicht verändern.

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

Die Feldtests prüfen, ob die Werte der Feld-Labels (`verbose_name`) und die Länge der Zeichenfelder den Erwartungen entsprechen. Alle Methoden haben aussagekräftige Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Dabei sind zwei Dinge besonders wichtig:

- Wir können `verbose_name` nicht direkt über `author.first_name.verbose_name` abrufen, weil `author.first_name` ein _String_ ist – keine Referenz auf das `first_name`-Feldobjekt, über die wir auf dessen Eigenschaften zugreifen könnten. Stattdessen verwenden wir das Attribut `_meta` des Authors, um eine Instanz des Felds zu erhalten und darüber zusätzliche Informationen abzufragen.
- Wir verwenden `assertEqual(field_label,'first name')` statt `assertTrue(field_label == 'first name')`. Wenn der Test fehlschlägt, zeigt die Ausgabe der ersten Variante den tatsächlichen Wert des Labels. Das erleichtert die Fehlersuche etwas.

> [!NOTE]
> Die Tests für die Labels von `last_name` und `date_of_birth` sowie für die Länge des Felds `last_name` fehlen noch. Ergänzen Sie jetzt eigene Versionen nach den oben gezeigten Namenskonventionen und Vorgehensweisen.

Auch unsere benutzerdefinierten Methoden müssen wir testen. Dabei prüfen wir im Wesentlichen, ob der Objektname wie erwartet im Format „Nachname“, „Vorname“ zusammengesetzt wird und ob wir für einen `Author`-Eintrag die erwartete URL erhalten.

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

Führen Sie nun die Tests aus. Wenn Sie das Author-Modell wie im Tutorial zu Modellen beschrieben erstellt haben, erhalten Sie wahrscheinlich den unten gezeigten Fehler für das Label von `date_of_death`. Der Test schlägt fehl, weil er erwartet, dass das Label der Django-Konvention folgt und sein erster Buchstabe nicht großgeschrieben ist. Django übernimmt die Großschreibung bei der Anzeige selbst.

```bash
======================================================================
FAIL: test_date_of_death_label (catalog.tests.test_models.AuthorModelTest.test_date_of_death_label)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/home/user/django-locallibrary-tutorial/catalog/tests/test_models.py", line 19, in test_date_of_death_label
    self.assertEqual(field_label, 'died')
AssertionError: 'Died' != 'died'
- Died
? ^
+ died
? ^
```

Das ist nur ein sehr kleiner Fehler. Er verdeutlicht aber, dass Tests Ihre Annahmen gründlicher überprüfen können.

> [!NOTE]
> Ändern Sie das Label für das Feld `date_of_death` in **/catalog/models.py** zu „died“ und führen Sie die Tests erneut aus.

Die Tests für die anderen Modelle folgen ähnlichen Mustern; deshalb gehen wir nicht weiter darauf ein. Sie können gerne eigene Tests für unsere übrigen Modelle erstellen.

### Formulare

Für Formulare gilt dieselbe Testphilosophie wie für Modelle: Testen Sie alles, was Sie selbst programmiert haben oder was Ihr Entwurf vorgibt, nicht aber das Verhalten des zugrunde liegenden Frameworks oder anderer Drittanbieterbibliotheken.

Im Allgemeinen sollten Sie also testen, ob die Formulare die gewünschten Felder enthalten und ob diese mit passenden Labels und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, ob Django den Feldtyp korrekt validiert – es sei denn, Sie haben ein eigenes Feld oder eine eigene Validierung erstellt. Beispielsweise müssen Sie nicht testen, ob ein E-Mail-Feld nur E-Mail-Adressen akzeptiert. Zusätzliche Validierungen, die Sie für Felder erwarten, und Fehlermeldungen, die Ihr Code erzeugt, sollten Sie dagegen testen.

Betrachten Sie unser Formular zur Verlängerung von Büchern. Es enthält nur ein Feld für das neue Rückgabedatum. Dessen Label und Hilfetext müssen wir überprüfen.

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

Öffnen Sie **/catalog/tests/test_forms.py** und ersetzen Sie den vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Zunächst importieren wir das Formular und die Python-Bibliothek `datetime`, die uns beim Testen datumsbezogener Funktionen hilft. Danach definieren wir unsere Formulartestklasse genauso wie bei den Modellen und wählen einen aussagekräftigen Namen für die von `TestCase` abgeleitete Klasse.

```python
import datetime

from django.test import TestCase

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
        date = datetime.date.today() + datetime.timedelta(weeks=4)
        form = RenewBookForm(data={'renewal_date': date})
        self.assertTrue(form.is_valid())
```

Die ersten beiden Funktionen prüfen, ob `label` und `help_text` des Felds den Erwartungen entsprechen. Auf das Feld greifen wir über das Dictionary der Felder zu, beispielsweise mit `form.fields['renewal_date']`. Beachten Sie, dass wir auch prüfen müssen, ob der Label-Wert `None` ist: Django rendert zwar das richtige Label, gibt aber `None` zurück, wenn der Wert nicht _ausdrücklich_ gesetzt wurde.

Die übrigen Funktionen prüfen, ob das Formular für Verlängerungsdaten knapp innerhalb des zulässigen Bereichs gültig und für Werte außerhalb ungültig ist. Beachten Sie, wie wir mit `datetime.timedelta()` Testdaten relativ zum aktuellen Datum (`datetime.date.today()`) erstellen. Dabei geben wir jeweils eine Anzahl von Tagen oder Wochen an. Anschließend erstellen wir das Formular mit unseren Daten und prüfen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir weder die Datenbank noch den Test-Client. Überlegen Sie, ob Sie diese Tests auf [SimpleTestCase](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#django.test.SimpleTestCase) umstellen möchten.
>
> Außerdem müssen wir prüfen, ob bei einem ungültigen Formular die richtigen Fehler ausgegeben werden. Das geschieht üblicherweise im Rahmen der Verarbeitung durch eine View; darum kümmern wir uns im nächsten Abschnitt.

> [!WARNING]
> Wenn Sie statt der Klasse `RenewBookForm(forms.Form)` die Klasse [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) `RenewBookModelForm(forms.ModelForm)` verwenden, heißt das Formularfeld **'due_back'** statt **'renewal_date'**.

Damit sind wir mit Formularen fertig. Es gibt zwar noch weitere, sie werden aber automatisch durch unsere generischen klassenbasierten Views zum Bearbeiten erstellt und sollten dort getestet werden! Führen Sie die Tests aus und vergewissern Sie sich, dass unser Code weiterhin alle Tests besteht.

### Views

Um das Verhalten unserer Views zu überprüfen, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/6.1/topics/testing/tools/#django.test.Client). Diese Klasse verhält sich wie ein einfacher Webbrowser: Mit ihr können wir `GET`- und `POST`-Anfragen an eine URL simulieren und die Antwort untersuchen. Wir können nahezu alles an der Antwort einsehen – von HTTP-Details wie Antwort-Headern und Statuscodes bis zum Template, mit dem wir das HTML rendern, und den übergebenen Kontextdaten. Auch die Kette der Weiterleitungen, sofern vorhanden, lässt sich verfolgen; dabei können wir an jedem Schritt URL und Statuscode prüfen. So können wir feststellen, ob jede View das Erwartete tut.

Beginnen wir mit einer unserer einfachsten Views: Sie zeigt eine Liste aller Authors an. Die Liste ist unter **/catalog/authors/** erreichbar. In der URL-Konfiguration trägt diese URL den Namen 'authors'.

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da es sich um eine generische Listenansicht handelt, übernimmt Django fast alles für uns. Wenn Sie Django vertrauen, müssen Sie streng genommen nur testen, ob die View unter der richtigen URL und über ihren Namen erreichbar ist. Bei einer testgetriebenen Entwicklung beginnen Sie jedoch mit Tests, die bestätigen, dass die View alle Authors anzeigt und sie in Seiten mit jeweils zehn Einträgen aufteilt.

Öffnen Sie **/catalog/tests/test_views.py** und ersetzen Sie den vorhandenen Inhalt durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In `setUpTestData()` legen wir mehrere `Author`-Objekte an, damit wir die Seitennummerierung testen können.

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
        response = self.client.get(reverse('authors'), query_params={'page': 2})
        self.assertEqual(response.status_code, 200)
        self.assertTrue('is_paginated' in response.context)
        self.assertTrue(response.context['is_paginated'] == True)
        self.assertEqual(len(response.context['author_list']), 3)
```

Alle Tests verwenden den Client, der zu unserer von `TestCase` abgeleiteten Klasse gehört, um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Variante prüft eine bestimmte URL – nur den Pfad ohne Domain. Die zweite erzeugt die URL anhand ihres Namens in der URL-Konfiguration.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald die Antwort vorliegt, prüfen wir ihren Statuscode, das verwendete Template, ob die Antwort auf Seiten aufgeteilt ist, die Anzahl der zurückgegebenen Einträge und die Gesamtzahl der Einträge.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in **/catalog/views.py** auf einen anderen Wert als 10 setzen, passen Sie die Zeilen an, die oben und in den folgenden Abschnitten die Anzahl der Einträge in den seitennummerierten Templates prüfen. Wenn Sie die Variable für die Author-Listenseite beispielsweise auf 5 setzen, ändern Sie die obige Zeile zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste der oben verwendeten Variablen ist `response.context`. Sie enthält die Kontextdaten, die die View an das Template übergibt.
Das ist beim Testen äußerst nützlich, denn damit können wir prüfen, ob das Template alle benötigten Daten erhält. Anders gesagt: Wir können feststellen, ob das vorgesehene Template verwendet wird und welche Daten es erhält. Damit lässt sich weitgehend klären, ob etwaige Darstellungsprobleme allein am Template liegen.

#### Views, die auf angemeldete Benutzer beschränkt sind

Manchmal müssen Sie eine View testen, auf die nur angemeldete Benutzer zugreifen dürfen. Unsere `LoanedBooksByUserListView` ähnelt beispielsweise der vorherigen View sehr, ist aber nur für angemeldete Benutzer verfügbar. Außerdem zeigt sie ausschließlich `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden und den Status „ausgeliehen“ haben; die ältesten stehen dabei zuerst.

```python
from django.contrib.auth.mixins import LoginRequiredMixin

class LoanedBooksByUserListView(LoginRequiredMixin, generic.ListView):
    """Generic class-based view listing books on loan to current user."""
    model = BookInstance
    template_name ='catalog/bookinstance_list_borrowed_user.html'
    paginate_by = 10

    def get_queryset(self):
        return BookInstance.objects.filter(borrower=self.request.user).filter(status__exact=BookInstance.LoanStatus.ON_LOAN).order_by('due_back')
```

Fügen Sie den folgenden Testcode in **/catalog/tests/test_views.py** ein. Zunächst erstellen wir mit `setUp()` einige Benutzerkonten und `BookInstance`-Objekte samt zugehörigen Büchern und weiteren Datensätzen, die wir später in den Tests verwenden. Jeder Testbenutzer hat die Hälfte der Bücher ausgeliehen; zunächst setzen wir aber den Status aller Bücher auf „Wartung“. Wir verwenden `setUp()` statt `setUpTestData()`, weil wir einige dieser Objekte später verändern.

> [!NOTE]
> Der folgende `setUp()`-Code erstellt ein Buch mit einer angegebenen `Language`. _Ihr_ Code enthält das `Language`-Modell möglicherweise nicht, da es als _Aufgabe_ erstellt wurde. Kommentieren Sie in diesem Fall die Codeabschnitte aus, die Language-Objekte erstellen oder importieren. Gehen Sie im folgenden Abschnitt `RenewBookInstancesViewTest` ebenso vor.

```python
import datetime

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
            return_date = datetime.date.today() + datetime.timedelta(days=book_copy%5)
            the_borrower = test_user1 if book_copy % 2 else test_user2
            status = BookInstance.LoanStatus.MAINTENANCE
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

Um zu prüfen, ob die View nicht angemeldete Benutzer zur Anmeldeseite weiterleitet, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` gezeigt. Um zu prüfen, ob die Seite für einen angemeldeten Benutzer angezeigt wird, melden wir zunächst unseren Testbenutzer an. Anschließend rufen wir die Seite erneut auf und prüfen, ob wir einen `status_code` von 200 erhalten – also eine erfolgreiche Antwort.

Die übrigen Tests prüfen, ob unsere View ausschließlich Bücher zurückgibt, die der aktuelle Benutzer ausgeliehen hat. Kopieren Sie den folgenden Code und fügen Sie ihn am Ende der obigen Testklasse ein.

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
            book.status = BookInstance.LoanStatus.ON_LOAN
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
            self.assertEqual(book_item.status, BookInstance.LoanStatus.ON_LOAN)

    def test_pages_ordered_by_due_date(self):
        # Change all books to be on loan
        for book in BookInstance.objects.all():
            book.status = BookInstance.LoanStatus.ON_LOAN
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
        for copy in response.context['bookinstance_list']:
            if last_date == 0:
                last_date = copy.due_back
            else:
                self.assertTrue(last_date <= copy.due_back)
                last_date = copy.due_back
```

Wenn Sie möchten, können Sie zusätzlich Tests für die Seitennummerierung ergänzen.

#### Views mit Formularen testen

Views mit Formularen zu testen ist etwas komplizierter als die bisherigen Fälle, weil mehr Codepfade geprüft werden müssen: die erste Anzeige, die Anzeige nach einer fehlgeschlagenen Datenvalidierung und die Anzeige nach einer erfolgreichen Validierung. Die gute Nachricht ist, dass wir den Client dafür fast genauso verwenden wie bei Views, die nur Inhalte anzeigen.

Als Beispiel schreiben wir einige Tests für die View zum Verlängern von Büchern (`renew_book_librarian()`).
Zur Erinnerung: Dies ist der View-Code aus **/catalog/views.py**. Sie müssen ihn nicht in Ihre Tests kopieren.

```python
from catalog.forms import RenewBookForm

@login_required
@permission_required('catalog.can_mark_returned', raise_exception=True)
def renew_book_librarian(request, pk):
    """View function for renewing a specific BookInstance by librarian."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # If this is a POST request then process the Form data
    if request.method == 'POST':

        # Create a form instance and populate it with data from the request (binding):
        form = RenewBookForm(request.POST)

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
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Wir müssen testen, ob nur Benutzer mit der Berechtigung `can_mark_returned` auf die View zugreifen können und ob Benutzer eine HTTP-404-Fehlerseite erhalten, wenn sie versuchen, eine nicht vorhandene `BookInstance` zu verlängern. Außerdem sollten wir prüfen, ob der Anfangswert des Formulars auf ein Datum drei Wochen in der Zukunft gesetzt ist und ob wir nach erfolgreicher Validierung zur View „alle ausgeliehenen Bücher“ weitergeleitet werden. Bei den Tests für eine fehlgeschlagene Validierung prüfen wir auch, ob unser Formular die passenden Fehlermeldungen ausgibt.

Fügen Sie den ersten Teil der Testklasse, der unten gezeigt wird, am Ende von **/catalog/tests/test_views.py** ein.
Damit erstellen wir zwei Benutzer und zwei Buchinstanzen. Nur einer der Benutzer erhält jedoch die für den Zugriff auf die View erforderliche Berechtigung.

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
            status=BookInstance.LoanStatus.ON_LOAN,
        )

        # Create a BookInstance object for test_user2
        return_date = datetime.date.today() + datetime.timedelta(days=5)
        self.test_bookinstance2 = BookInstance.objects.create(
            book=test_book,
            imprint='Unlikely Imprint, 2016',
            due_back=return_date,
            borrower=test_user2,
            status=BookInstance.LoanStatus.ON_LOAN,
        )
```

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Sie prüfen, ob nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die View zugreifen können. Wir prüfen alle Fälle: Der Benutzer ist nicht angemeldet; er ist angemeldet, hat aber nicht die richtige Berechtigung; er hat die Berechtigung, ist aber nicht der Entleiher – was trotzdem funktionieren sollte; oder er versucht, auf eine nicht vorhandene `BookInstance` zuzugreifen. Außerdem prüfen wir, ob das richtige Template verwendet wird.

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

Fügen Sie die nächste Testmethode wie unten gezeigt hinzu. Sie prüft, ob das Anfangsdatum im Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir mit `response.context['form'].initial['renewal_date']` auf den Anfangswert des Formularfelds zugreifen können.

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test, den Sie ebenfalls zur Klasse hinzufügen sollten, prüft, ob die View nach einer erfolgreichen Verlängerung zur Liste aller ausgeliehenen Bücher weiterleitet. Neu ist hier, dass wir zum ersten Mal zeigen, wie Sie mit dem Client Daten per `POST` senden. Die gesendeten _Daten_ sind das zweite Argument der post-Funktion und werden als Dictionary mit Schlüssel-Wert-Paaren angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die View für _alle ausgeliehenen Bücher_ wurde als _Aufgabe_ hinzugefügt. Ihr Code leitet möglicherweise stattdessen zur Startseite '/' weiter. Ändern Sie in diesem Fall die letzten beiden Zeilen des Testcodes wie unten gezeigt. `follow=True` in der Anfrage sorgt dafür, dass die Anfrage die endgültige Ziel-URL zurückgibt. Deshalb prüfen wir `/catalog/` statt `/`.
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen wie unten gezeigt in die Klasse. Sie testen erneut `POST`-Anfragen, diesmal jedoch mit ungültigen Verlängerungsdaten. Mit `assertFormError()` prüfen wir, ob die Fehlermeldungen den Erwartungen entsprechen.

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

Mit ähnlichen Verfahren können Sie auch die anderen Views testen.

### Templates

Django bietet Test-APIs, mit denen Sie prüfen können, ob Ihre Views das richtige Template verwenden und die richtigen Informationen übergeben. Es gibt jedoch keine spezielle Django-Test-API, um zu prüfen, ob Ihre HTML-Ausgabe wie erwartet gerendert wird.

## Weitere empfohlene Testwerkzeuge

Das Test-Framework von Django hilft Ihnen, wirkungsvolle Unit- und Integrationstests zu schreiben. Wir haben nur einen kleinen Teil der Möglichkeiten des zugrunde liegenden **unittest**-Frameworks behandelt, ganz zu schweigen von Djangos Ergänzungen. Sehen Sie sich beispielsweise an, wie Sie mit [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) Drittanbieterbibliotheken durch Testimplementierungen ersetzen können, um Ihren eigenen Code gründlicher zu testen.

Es gibt zahlreiche weitere Testwerkzeuge. Zwei davon möchten wir hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Werkzeug zeigt, wie viel Ihres Codes durch Ihre Tests tatsächlich ausgeführt wird. Es ist besonders am Anfang hilfreich, wenn Sie herausfinden möchten, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework zur Automatisierung von Tests in einem echten Browser. Damit können Sie die Interaktion eines echten Benutzers mit der Website simulieren. Es bietet eine gute Grundlage für Systemtests Ihrer Website – die nächste Stufe nach Integrationstests.

## Stellen Sie sich einer Herausforderung

Es gibt noch viele weitere Modelle und Views, die wir testen können. Versuchen Sie als Aufgabe, eine Testklasse für die View `AuthorCreate` zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': datetime.date(2023, 11, 11)}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, alles zu prüfen, was Sie selbst festlegen oder was zu Ihrem Entwurf gehört.
Dazu zählen die Zugriffsberechtigung, das Anfangsdatum, das verwendete Template und das Weiterleitungsziel bei Erfolg.

Mit dem folgenden Code können Sie Ihren Test vorbereiten und Ihrem Benutzer die passende Berechtigung zuweisen:

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

Testcode zu schreiben macht weder besonders viel Spaß noch ist es besonders aufregend. Deshalb wird es bei der Erstellung einer Website oft bis zuletzt aufgeschoben – oder ganz ausgelassen. Dennoch sind Tests unerlässlich, damit Sie Ihren Code nach Änderungen guten Gewissens veröffentlichen und langfristig mit vertretbarem Aufwand pflegen können.

In diesem Tutorial haben wir gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Views schreiben und ausführen. Vor allem haben wir kurz zusammengefasst, _was_ Sie testen sollten – eine Frage, die am Anfang oft am schwierigsten zu beantworten ist. Es gibt noch viel mehr zu lernen. Doch schon mit dem bisherigen Wissen sollten Sie wirkungsvolle Unit-Tests für Ihre Websites erstellen können.

Das nächste und letzte Tutorial zeigt Ihnen, wie Sie Ihre großartige – und vollständig getestete! – Django-Website bereitstellen.

## Siehe auch

- [Tests schreiben und ausführen](https://docs.djangoproject.com/en/6.1/topics/testing/overview/) (Django-Dokumentation)
- [Ihre erste Django-App schreiben, Teil 5: Einführung in automatisierte Tests](https://docs.djangoproject.com/en/6.1/intro/tutorial05/) (Django-Dokumentation)
- [Referenz zu Testwerkzeugen](https://docs.djangoproject.com/en/6.1/topics/testing/tools/) (Django-Dokumentation)
- [Fortgeschrittene Testthemen](https://docs.djangoproject.com/en/6.1/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen mit Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
