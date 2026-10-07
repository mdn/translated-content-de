---
title: "Django-Tutorial Teil 10: Eine Django-Webanwendung testen"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Je größer Websites werden, desto schwieriger lassen sie sich manuell testen. Es gibt nicht nur mehr zu testen: Wenn die Wechselwirkungen zwischen Komponenten komplexer werden, kann sich eine kleine Änderung in einem Bereich auf andere Bereiche auswirken. Dadurch sind zusätzliche Anpassungen nötig, damit weiterhin alles funktioniert und bei weiteren Änderungen keine Fehler entstehen. Eine Möglichkeit, diese Probleme zu verringern, sind automatisierte Tests, die Sie nach jeder Änderung einfach und zuverlässig ausführen können. Dieses Tutorial zeigt, wie Sie mit Djangos Test-Framework _Unit-Tests_ für Ihre Website automatisieren.

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

Die [Local Library](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) verfügt inzwischen über Seiten mit Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Einträge, eine Seite zur Verlängerung von `BookInstance`-Einträgen sowie Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Einträgen (und auch von `Book`-Datensätzen, falls Sie die _Aufgabe_ im [Tutorial zu Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst bei dieser vergleichsweise kleinen Website kann es mehrere Minuten dauern, jede Seite manuell aufzurufen und _oberflächlich_ zu prüfen, ob alles wie erwartet funktioniert. Wenn wir die Website verändern und erweitern, wird auch der Zeitaufwand für die manuelle Prüfung, ob alles „richtig“ funktioniert, weiter steigen. Würden wir so weitermachen, würden wir irgendwann den Großteil unserer Zeit mit Tests und nur noch sehr wenig Zeit mit der Verbesserung unseres Codes verbringen.

Automatisierte Tests können bei diesem Problem erheblich helfen! Ihre offensichtlichen Vorteile sind, dass sie wesentlich schneller als manuelle Tests ausgeführt werden können, viel detailliertere Prüfungen ermöglichen und jedes Mal genau dieselbe Funktionalität testen (Menschen sind beim Testen bei Weitem nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßiger ausgeführt werden. Schlägt ein Test fehl, zeigt er genau an, an welcher Stelle sich der Code nicht wie erwartet verhält.

Außerdem können automatisierte Tests als erste echte „Benutzer“ Ihres Codes dienen und Sie dazu bringen, das erwartete Verhalten Ihrer Website präzise zu definieren und zu dokumentieren. Häufig bilden sie die Grundlage für Codebeispiele und Dokumentation. Aus diesen Gründen beginnen manche Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests; erst danach wird der Code geschrieben, der das geforderte Verhalten erfüllt (beispielsweise bei der [testgetriebenen](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebenen](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt anhand mehrerer Tests für die Website _LocalLibrary_, wie Sie automatisierte Tests für Django schreiben.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifizierungen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unit-Tests
  - : Sie überprüfen das funktionale Verhalten einzelner Komponenten, häufig bis auf die Ebene einzelner Klassen und Funktionen.
- Regressionstests
  - : Diese Tests reproduzieren frühere Fehler. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde. Anschließend wird er erneut ausgeführt, um sicherzustellen, dass spätere Codeänderungen den Fehler nicht wieder eingeführt haben.
- Integrationstests
  - : Sie überprüfen, wie Gruppen von Komponenten zusammenarbeiten. Integrationstests berücksichtigen die erforderlichen Wechselwirkungen zwischen Komponenten, aber nicht unbedingt die internen Abläufe jeder einzelnen Komponente. Sie können einfache Komponentengruppen bis hin zur gesamten Website abdecken.

> [!NOTE]
> Weitere gängige Testarten sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, funktionale, System-, Performance-, Last- und Stresstests. Informieren Sie sich darüber, wenn Sie mehr erfahren möchten.

### Was bietet Django zum Testen?

Eine Website zu testen ist eine komplexe Aufgabe, weil sie aus mehreren Logikschichten besteht – von der Verarbeitung von Anfragen auf HTTP-Ebene über Modellabfragen und die Validierung und Verarbeitung von Formularen bis zum Rendern von Templates.

Django bietet ein Test-Framework mit einer kleinen Klassenhierarchie, die auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbaut. Trotz ihres Namens eignet sich diese Bibliothek sowohl für Unit-Tests als auch für Integrationstests. Das Django-Framework ergänzt API-Methoden und Werkzeuge, die beim Testen von Web- und Django-spezifischem Verhalten helfen. Damit können Sie Anfragen simulieren, Testdaten einfügen und die Ausgabe Ihrer Anwendung untersuchen. Django bietet außerdem eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge zur [Verwendung anderer Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks). So können Sie beispielsweise das beliebte Framework [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) einbinden, um die Interaktion eines Benutzers mit einem laufenden Browser zu simulieren.

Um einen Test zu schreiben, leiten Sie eine Klasse von einer der Django- (oder _unittest_-)Basisklassen für Tests ab ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)). Anschließend schreiben Sie separate Methoden, die prüfen, ob bestimmte Funktionen wie erwartet arbeiten. Tests verwenden „assert“-Methoden, um beispielsweise zu prüfen, ob Ausdrücke `True` oder `False` ergeben oder ob zwei Werte gleich sind. Wenn Sie einen Testlauf starten, führt das Framework die ausgewählten Testmethoden Ihrer abgeleiteten Klassen aus. Die Testmethoden werden unabhängig voneinander ausgeführt; gemeinsames Verhalten zur Vorbereitung und/oder Nachbereitung wird wie unten gezeigt in der Klasse definiert.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt vor der Ausführung ihrer Tests eine saubere Datenbank und führt jede Testfunktion in einer eigenen Transaktion aus. Die Klasse verfügt außerdem über einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), mit dem Sie die Interaktion eines Benutzers mit dem Code auf View-Ebene simulieren können. In den folgenden Abschnitten konzentrieren wir uns auf Unit-Tests, die mit dieser Basisklasse [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) erstellt werden.

> [!NOTE]
> Die Klasse [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) ist sehr praktisch, kann aber dazu führen, dass manche Tests langsamer als nötig sind (nicht jeder Test muss eine eigene Datenbank einrichten oder die Interaktion mit einer View simulieren). Sobald Sie mit den Möglichkeiten dieser Klasse vertraut sind, möchten Sie einige Ihrer Tests möglicherweise durch Tests ersetzen, die einfachere Testklassen verwenden.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, nicht jedoch Bibliotheken oder Funktionen, die bereits Python oder Django bereitstellen.

Betrachten Sie beispielsweise das unten definierte Modell `Author`. Sie müssen nicht ausdrücklich testen, ob `first_name` und `last_name` als `CharField` korrekt in der Datenbank gespeichert wurden, denn dieses Verhalten wird von Django definiert (auch wenn Sie diese Funktionalität während der Entwicklung in der Praxis natürlich zwangsläufig testen werden). Ebenso müssen Sie nicht testen, ob `date_of_birth` als Datumsfeld validiert wird, denn auch das ist in Django implementiert.

Sie sollten jedoch den Text der Beschriftungen (_First name, Last name, Date of birth, Died_) und die für den Text vorgesehene Feldlänge (_100 Zeichen_) überprüfen. Beides gehört zu Ihrem Entwurf und könnte künftig versehentlich geändert oder beschädigt werden.

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

Ebenso sollten Sie prüfen, ob sich die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie gefordert verhalten, denn sie gehören zu Ihrem Code beziehungsweise Ihrer Geschäftslogik. Bei `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` korrekt implementiert ist. Sie testen also, ob die zugehörige View tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser werden vielleicht feststellen, dass wir auch das Geburts- und Sterbedatum auf sinnvolle Werte beschränken und prüfen sollten, ob das Sterbedatum nach dem Geburtsdatum liegt.
> In Django würden Sie diese Einschränkung Ihren Formularklassen hinzufügen. Zwar können Sie Validatoren für Modellfelder und Modell-Validatoren definieren, auf Formularebene werden diese jedoch nur verwendet, wenn die Methode `clean()` des Modells sie aufruft. Dafür ist ein `ModelForm` erforderlich, oder die Methode `clean()` des Modells muss ausdrücklich aufgerufen werden.

Sehen wir uns vor diesem Hintergrund an, wie Tests definiert und ausgeführt werden.

## Überblick über die Teststruktur

Bevor wir uns genauer mit der Frage beschäftigen, _was_ getestet werden soll, sehen wir uns zunächst kurz an, _wo_ und _wie_ Tests definiert werden.

Django nutzt die [integrierte Testerkennung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des Moduls unittest. Sie findet Tests unterhalb des aktuellen Arbeitsverzeichnisses in allen Dateien, deren Namen dem Muster **test\*.py** entsprechen. Solange Sie Ihre Dateien entsprechend benennen, können Sie jede beliebige Struktur verwenden. Wir empfehlen, ein Modul für Ihren Testcode anzulegen und separate Dateien für Modelle, Views, Formulare und andere Arten von Code zu verwenden, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Legen Sie in Ihrem Projekt _LocalLibrary_ die oben gezeigte Dateistruktur an. Die Datei **\_\_init\_\_.py** sollte leer sein (sie teilt Python mit, dass das Verzeichnis ein Paket ist). Die drei Testdateien können Sie erstellen, indem Sie die Testdatei des Grundgerüsts **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Testdatei des Grundgerüsts **/catalog/tests.py** wurde automatisch erstellt, als wir das [Grundgerüst der Django-Website erstellt haben](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website). Es ist durchaus zulässig, alle Tests darin unterzubringen. Wenn Sie jedoch gründlich testen, wird die Datei schnell sehr groß und unübersichtlich.
>
> Löschen Sie die Datei des Grundgerüsts, da wir sie nicht mehr benötigen.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte wie gezeigt `django.test.TestCase` importieren:

```python
from django.test import TestCase

# Create your tests here.
```

Häufig legen Sie für jedes Modell, jede View oder jedes Formular, das Sie testen möchten, eine Testklasse mit einzelnen Methoden für bestimmte Funktionen an. In anderen Fällen kann eine separate Klasse zum Testen eines bestimmten Anwendungsfalls sinnvoll sein, deren Testfunktionen jeweils einen Aspekt dieses Anwendungsfalls prüfen – etwa eine Klasse zur Prüfung der Validierung eines Modellfelds mit Funktionen für jeden möglichen Fehlerfall. Die Struktur bleibt Ihnen überlassen; am besten gehen Sie dabei jedoch einheitlich vor.

Fügen Sie die folgende Testklasse am Ende der Datei ein. Sie zeigt, wie Sie durch Ableitung von `TestCase` eine Testfallklasse erstellen.

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

Die neue Klasse definiert zwei Methoden, mit denen Sie Vorbereitungen für die Tests treffen können, beispielsweise indem Sie Modelle oder andere Objekte erstellen, die für die Tests benötigt werden:

- `setUpTestData()` wird zu Beginn des Testlaufs einmal für die gesamte Klasse aufgerufen. Damit erstellen Sie Objekte, die in keiner der Testmethoden verändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte vorzubereiten, die durch den Test verändert werden könnten (jede Testfunktion erhält eine „frische“ Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine Methode `tearDown()`, die wir hier nicht verwenden. Für Datenbanktests ist sie nicht besonders nützlich, da die Basisklasse `TestCase` die Bereinigung der Datenbank für Sie übernimmt.

Darunter stehen mehrere Testmethoden, die mit `assert`-Funktionen prüfen, ob Bedingungen wahr oder falsch beziehungsweise Werte gleich sind (`assertTrue`, `assertFalse`, `assertEqual`). Ergibt eine Bedingung nicht das erwartete Ergebnis, schlägt der Test fehl und meldet den Fehler in der Konsole.

`assertTrue`, `assertFalse` und `assertEqual` sind Standard-Assertions von **unittest**. Das Framework bietet weitere Standard-Assertions sowie [Django-spezifische Assertions](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), mit denen Sie beispielsweise prüfen können, ob eine View weiterleitet (`assertRedirects`) oder ein bestimmtes Template verwendet wurde (`assertTemplateUsed`).

> [!NOTE]
> Normalerweise sollten Sie **print()**-Funktionen **nicht** wie oben gezeigt in Ihre Tests aufnehmen. Wir verwenden sie hier nur, damit Sie im folgenden Abschnitt in der Konsole sehen können, in welcher Reihenfolge die Vorbereitungsmethoden aufgerufen werden.

## So führen Sie die Tests aus

Am einfachsten führen Sie alle Tests mit folgendem Befehl aus:

```bash
python3 manage.py test
```

Dadurch werden unterhalb des aktuellen Verzeichnisses alle Dateien gefunden, deren Namen dem Muster **test\*.py** entsprechen, und alle Tests ausgeführt, die mit geeigneten Basisklassen definiert wurden. Hier haben wir mehrere Testdateien, aber derzeit enthält nur **/catalog/tests/test_models.py** Tests. Standardmäßig wird für einzelne Tests nur über Fehlschläge berichtet; danach folgt eine Zusammenfassung der Tests.

> [!NOTE]
> Wenn Fehler wie `ValueError: Missing staticfiles manifest entry...` auftreten, liegt das möglicherweise daran, dass beim Testen _collectstatic_ standardmäßig nicht ausgeführt wird und Ihre Anwendung eine Storage-Klasse verwendet, die dies voraussetzt (weitere Informationen finden Sie unter [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict)). Dieses Problem lässt sich auf verschiedene Weise beheben. Am einfachsten ist es, _collectstatic_ vor den Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Stammverzeichnis von _LocalLibrary_ aus. Die Ausgabe sollte etwa wie folgt aussehen.

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

Hier sehen wir, dass ein Test fehlgeschlagen ist, und erkennen genau, welche Funktion betroffen ist und warum (dieser Fehlschlag ist zu erwarten, denn `False` ist nicht `True`!).

> [!NOTE]
> Die wichtigste Erkenntnis aus der obigen Testausgabe ist, dass sie wesentlich hilfreicher ist, wenn Sie Ihren Objekten und Methoden aussagekräftige Namen geben.

Die Ausgabe der `print()`-Funktionen zeigt, dass die Methode `setUpTestData()` einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie auch hier daran, dass Sie solche `print()`-Aufrufe normalerweise nicht in Ihre Tests aufnehmen würden.

Die nächsten Abschnitte zeigen, wie Sie bestimmte Tests ausführen und steuern, wie viele Informationen die Tests ausgeben.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testlauf erhalten möchten, können Sie die _Ausführlichkeit_ ändern. Um beispielsweise neben fehlgeschlagenen auch erfolgreiche Tests aufzulisten (sowie zahlreiche Informationen zur Einrichtung der Testdatenbank), setzen Sie die Ausführlichkeit wie gezeigt auf „2“:

```bash
python3 manage.py test --verbosity 2
```

Zulässige Ausführlichkeitsstufen sind 0, 1, 2 und 3; der Standardwert ist „1“.

### Tests beschleunigen

Wenn Ihre Tests unabhängig voneinander sind, können Sie sie auf einem Mehrprozessorsystem deutlich beschleunigen, indem Sie sie parallel ausführen.
Mit dem unten gezeigten `--parallel auto` wird für jeden verfügbaren Prozessorkern ein Testprozess gestartet.
`auto` ist optional; Sie können auch eine bestimmte Anzahl von Prozessorkernen angeben.

```bash
python3 manage.py test --parallel auto
```

Weitere Informationen, auch zum Vorgehen bei nicht voneinander unabhängigen Tests, finden Sie unter [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES).

### Bestimmte Tests ausführen

Wenn Sie nur einen Teil Ihrer Tests ausführen möchten, geben Sie den vollständigen, durch Punkte getrennten Pfad zu den Paketen, einem Modul, einer `TestCase`-Unterklasse oder einer Methode an:

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

Der Test-Runner bietet viele weitere Optionen. Sie können unter anderem die Reihenfolge der Tests mischen (`--shuffle`), sie im Debug-Modus ausführen (`--debug-mode`) und den Python-Logger verwenden, um die Ergebnisse zu erfassen.
Weitere Informationen finden Sie in der Django-Dokumentation zum [Test-Runner](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test).

## Tests für LocalLibrary

Jetzt wissen wir, wie Tests ausgeführt werden und welche Dinge wir testen müssen. Sehen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden denkbaren Test schreiben. Die Beispiele sollen Ihnen jedoch zeigen, wie Tests funktionieren und was Sie darüber hinaus tun können.

### Modelle

Wie oben besprochen, sollten wir alles testen, was zu unserem Entwurf gehört oder durch selbst geschriebenen Code definiert wird – nicht jedoch Bibliotheken oder Code, die bereits vom Django- oder Python-Entwicklungsteam getestet werden.

Betrachten Sie beispielsweise das unten gezeigte Modell `Author`. Hier sollten wir die Beschriftungen aller Felder testen. Zwar haben wir die meisten davon nicht ausdrücklich festgelegt, unser Entwurf gibt aber vor, welche Werte sie haben sollen. Ohne diese Tests wissen wir nicht, ob die Feldbeschriftungen den vorgesehenen Werten entsprechen. Ebenso vertrauen wir zwar darauf, dass Django ein Feld mit der angegebenen Länge erstellt; trotzdem lohnt sich ein Test dieser Länge, um sicherzustellen, dass sie wie geplant festgelegt wurde.

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

Öffnen Sie **/catalog/tests/test_models.py** und ersetzen Sie den vorhandenen Code durch den folgenden Testcode für das Modell `Author`.

Sie sehen, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten. Dank des aussagekräftigen Namens können wir fehlgeschlagene Tests in der Testausgabe leicht erkennen. Anschließend rufen wir `setUpTestData()` auf, um ein Autorobjekt zu erstellen, das wir in den Tests verwenden, aber nicht verändern.

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

Die Feldtests prüfen, ob die Werte der Feldbeschriftungen (`verbose_name`) und die Längen der Zeichenfelder den Erwartungen entsprechen. Alle diese Methoden haben aussagekräftige Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Beachten Sie insbesondere Folgendes:

- Wir können `verbose_name` nicht direkt über `author.first_name.verbose_name` abrufen, denn `author.first_name` ist eine _Zeichenfolge_ (und keine Referenz auf das Objekt `first_name`, über die wir auf dessen Eigenschaften zugreifen könnten). Stattdessen müssen wir über das Attribut `_meta` des Autors eine Instanz des Felds abrufen und damit die zusätzlichen Informationen abfragen.
- Wir verwenden `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')`. Schlägt der Test fehl, zeigt die Ausgabe bei der ersten Variante, welchen Wert die Beschriftung tatsächlich hatte. Das erleichtert die Fehlersuche ein wenig.

> [!NOTE]
> Tests für die Beschriftungen von `last_name` und `date_of_birth` sowie für die Länge des Felds `last_name` wurden ausgelassen. Ergänzen Sie jetzt eigene Versionen nach den oben gezeigten Namenskonventionen und Vorgehensweisen.

Auch unsere benutzerdefinierten Methoden müssen getestet werden. Dabei prüfen wir im Wesentlichen, ob der Objektname wie erwartet im Format „Nachname“, „Vorname“ zusammengesetzt wird und ob die URL für einen `Author`-Eintrag unseren Erwartungen entspricht.

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

Führen Sie jetzt die Tests aus. Wenn Sie das Modell `Author` wie im Tutorial zu Modellen beschrieben erstellt haben, erhalten Sie wahrscheinlich einen Fehler für die Beschriftung von `date_of_death`, wie unten gezeigt. Der Test schlägt fehl, weil er voraussetzt, dass die Beschriftung der Django-Konvention folgt und ihr erster Buchstabe nicht großgeschrieben wird (Django übernimmt die Großschreibung für Sie).

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

Das ist ein sehr kleiner Fehler, zeigt aber, wie gründlich Tests Ihre Annahmen überprüfen können.

> [!NOTE]
> Ändern Sie die Beschriftung für das Feld `date_of_death` in **/catalog/models.py** zu „died“ und führen Sie die Tests erneut aus.

Die Testmuster für die anderen Modelle sind ähnlich, daher gehen wir nicht weiter darauf ein. Erstellen Sie gern eigene Tests für unsere übrigen Modelle.

### Formulare

Für das Testen Ihrer Formulare gilt dieselbe Grundidee wie für Modelle: Testen Sie alles, was Sie selbst programmiert haben oder was Ihr Entwurf vorgibt, nicht aber das Verhalten des zugrunde liegenden Frameworks und anderer Bibliotheken von Drittanbietern.

Im Allgemeinen sollten Sie also testen, ob die Formulare die gewünschten Felder enthalten und diese mit passenden Beschriftungen und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, ob Django den Feldtyp korrekt validiert (es sei denn, Sie haben ein eigenes Feld und eine eigene Validierung erstellt). Beispielsweise müssen Sie nicht testen, ob ein E-Mail-Feld nur E-Mail-Adressen akzeptiert. Zusätzliche Validierungen, die Sie für die Felder erwarten, und Fehlermeldungen, die Ihr Code erzeugt, sollten Sie dagegen testen.

Betrachten Sie unser Formular zur Verlängerung von Buchausleihen. Es enthält nur ein Feld für das Verlängerungsdatum, dessen Beschriftung und Hilfetext wir überprüfen müssen.

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

Öffnen Sie **/catalog/tests/test_forms.py** und ersetzen Sie den vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Zunächst importieren wir unser Formular sowie einige Python- und Django-Bibliotheken, die uns beim Testen datumsbezogener Funktionen helfen. Anschließend definieren wir unsere Formulartestklasse wie bei den Modellen und geben der von `TestCase` abgeleiteten Klasse einen aussagekräftigen Namen.

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

Die ersten beiden Funktionen prüfen, ob `label` und `help_text` des Felds den Erwartungen entsprechen. Auf das Feld müssen wir über das Dictionary der Felder zugreifen (zum Beispiel `form.fields['renewal_date']`). Beachten Sie, dass wir auch prüfen müssen, ob der Wert der Beschriftung `None` ist: Obwohl Django die richtige Beschriftung rendert, gibt es `None` zurück, wenn der Wert nicht _ausdrücklich_ gesetzt wurde.

Die übrigen Funktionen testen, ob das Formular für Verlängerungsdaten knapp innerhalb des zulässigen Bereichs gültig und für Werte außerhalb dieses Bereichs ungültig ist. Beachten Sie, wie wir mit `datetime.timedelta()` Testdaten rund um das aktuelle Datum (`datetime.date.today()`) erzeugen (hier unter Angabe einer Anzahl von Tagen oder Wochen). Anschließend erstellen wir das Formular mit unseren Daten und prüfen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir weder die Datenbank noch den Test-Client. Erwägen Sie, diese Tests so anzupassen, dass sie [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) verwenden.
>
> Wir müssen außerdem prüfen, ob bei einem ungültigen Formular die richtigen Fehlermeldungen ausgegeben werden. Das geschieht üblicherweise im Rahmen der View-Verarbeitung; darum kümmern wir uns im nächsten Abschnitt.

> [!WARNING]
> Wenn Sie die Klasse [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms) `RenewBookModelForm(forms.ModelForm)` anstelle von `RenewBookForm(forms.Form)` verwenden, heißt das Formularfeld **'due_back'** statt **'renewal_date'**.

Damit sind die Formulare behandelt. Wir haben zwar noch weitere, aber sie werden automatisch von unseren generischen klassenbasierten Bearbeitungs-Views erstellt und sollten dort getestet werden! Führen Sie die Tests aus und vergewissern Sie sich, dass unser Code sie weiterhin besteht.

### Views

Um das Verhalten unserer Views zu überprüfen, verwenden wir den Django-Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse verhält sich wie ein vereinfachter Webbrowser: Mit ihr können wir `GET`- und `POST`-Anfragen an eine URL simulieren und die Antwort untersuchen. Wir können nahezu alles über die Antwort einsehen – von HTTP-Details wie Headern und Statuscodes bis zu dem Template, mit dem wir das HTML rendern, und den Kontextdaten, die wir an dieses Template übergeben. Außerdem können wir die Kette von Weiterleitungen (sofern vorhanden) verfolgen und bei jedem Schritt URL und Statuscode prüfen. So lässt sich überprüfen, ob jede View das Erwartete tut.

Beginnen wir mit einer unserer einfachsten Views, die eine Liste aller Autoren bereitstellt. Sie wird unter der URL **/catalog/authors/** angezeigt (in der URL-Konfiguration trägt diese URL den Namen 'authors').

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da es sich um eine generische Listen-View handelt, übernimmt Django fast alles für uns. Wenn Sie Django vertrauen, müssen Sie im Grunde nur testen, ob die View unter der richtigen URL und über ihren Namen erreichbar ist. Bei einem testgetriebenen Entwicklungsprozess beginnen Sie allerdings mit Tests, die bestätigen, dass die View alle Autoren anzeigt und sie in Seiten mit jeweils 10 Einträgen aufteilt.

Öffnen Sie **/catalog/tests/test_views.py** und ersetzen Sie den vorhandenen Inhalt durch den folgenden Testcode für `AuthorListView`. Wie zuvor importieren wir unser Modell und einige nützliche Klassen. In der Methode `setUpTestData()` erstellen wir mehrere `Author`-Objekte, damit wir die Seitennummerierung testen können.

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

Alle Tests verwenden den Client (der zu unserer von `TestCase` abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Variante prüft eine bestimmte URL (beachten Sie, dass nur der Pfad ohne Domain angegeben wird), während die zweite die URL aus ihrem Namen in der URL-Konfiguration erzeugt.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, prüfen wir ihren Statuscode, das verwendete Template, ob die Antwort auf mehrere Seiten aufgeteilt ist, die Anzahl der zurückgegebenen Einträge und die Gesamtzahl der Einträge.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in **/catalog/views.py** auf einen anderen Wert als 10 setzen, aktualisieren Sie die Zeilen, die oben und in den folgenden Abschnitten die Anzahl der in paginierten Templates angezeigten Einträge prüfen. Wenn Sie die Variable für die Autorenliste beispielsweise auf 5 setzen, ändern Sie die obige Zeile zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable im obigen Beispiel ist `response.context`: Sie enthält die Kontextdaten, die die View an das Template übergibt.
Das ist für Tests äußerst nützlich, denn so können wir überprüfen, ob unser Template alle benötigten Daten erhält. Anders ausgedrückt: Wir können prüfen, ob wir das vorgesehene Template verwenden und welche Daten es erhält. Damit lässt sich weitgehend sicherstellen, dass etwaige Darstellungsprobleme allein im Template liegen.

#### Views, die auf angemeldete Benutzer beschränkt sind

In manchen Fällen möchten Sie eine View testen, die nur angemeldeten Benutzern zur Verfügung steht. Beispielsweise ähnelt unsere `LoanedBooksByUserListView` der vorherigen View stark, ist jedoch nur für angemeldete Benutzer verfügbar. Außerdem zeigt sie nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status 'on loan' haben und nach dem Prinzip „älteste zuerst“ sortiert sind.

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

Fügen Sie den folgenden Testcode in **/catalog/tests/test_views.py** ein. Zunächst verwenden wir `SetUp()`, um Benutzerkonten und `BookInstance`-Objekte (zusammen mit den zugehörigen Büchern und anderen Datensätzen) zu erstellen, die wir später in den Tests benötigen. Jeder Testbenutzer hat die Hälfte der Bücher ausgeliehen, aber anfangs haben wir den Status aller Bücher auf „maintenance“ gesetzt. Wir verwenden `SetUp()` statt `setUpTestData()`, weil wir einige dieser Objekte später verändern werden.

> [!NOTE]
> Der folgende `setUp()`-Code erstellt ein Buch mit einer angegebenen `Language`. Ihr Code enthält das Modell `Language` möglicherweise nicht, da es im Rahmen einer _Aufgabe_ erstellt wurde. Kommentieren Sie in diesem Fall die Codeteile aus, die Language-Objekte erstellen oder importieren. Gehen Sie im folgenden Abschnitt zu `RenewBookInstancesViewTest` ebenso vor.

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

Um zu prüfen, ob die View nicht angemeldete Benutzer zu einer Anmeldeseite weiterleitet, verwenden wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` gezeigt. Um zu prüfen, ob die Seite für einen angemeldeten Benutzer angezeigt wird, melden wir zunächst unseren Testbenutzer an, rufen die Seite erneut auf und prüfen, ob wir einen `status_code` von 200 (Erfolg) erhalten.

Die übrigen Tests prüfen, ob unsere View nur Bücher zurückgibt, die an den aktuellen Entleiher ausgeliehen sind. Kopieren Sie den folgenden Code und fügen Sie ihn am Ende der obigen Testklasse ein.

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

Wenn Sie möchten, können Sie außerdem Tests für die Seitennummerierung ergänzen!

#### Views mit Formularen testen

Views mit Formularen zu testen ist etwas komplizierter als in den obigen Fällen, weil Sie mehr Codepfade prüfen müssen: die erste Anzeige, die Anzeige nach fehlgeschlagener Datenvalidierung und die Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genauso verwenden wie bei Views, die lediglich Inhalte anzeigen.

Schreiben wir zur Veranschaulichung einige Tests für die View zur Verlängerung von Buchausleihen (`renew_book_librarian()`):

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

Wir müssen testen, ob die View nur Benutzern mit der Berechtigung `can_mark_returned` zur Verfügung steht und ob Benutzer auf eine HTTP-404-Fehlerseite gelangen, wenn sie versuchen, eine nicht vorhandene `BookInstance` zu verlängern. Außerdem sollten wir prüfen, ob das Formular anfänglich ein Datum in drei Wochen enthält und ob wir bei erfolgreicher Validierung zur View für alle ausgeliehenen Bücher weitergeleitet werden. Im Rahmen der Tests für fehlgeschlagene Validierungen prüfen wir auch, ob unser Formular die passenden Fehlermeldungen ausgibt.

Fügen Sie den ersten Teil der Testklasse (unten gezeigt) am Ende von **/catalog/tests/test_views.py** ein.
Er erstellt zwei Benutzer und zwei Buchexemplare, gibt aber nur einem Benutzer die Berechtigung, die für den Zugriff auf die View erforderlich ist.

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

Fügen Sie die folgenden Tests am Ende der Testklasse ein. Sie prüfen, ob nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die View zugreifen können. Wir prüfen alle Fälle: Der Benutzer ist nicht angemeldet; ein Benutzer ist angemeldet, hat aber nicht die richtigen Berechtigungen; der Benutzer hat die Berechtigungen, ist aber nicht der Entleiher (der Zugriff sollte funktionieren); und der Benutzer versucht, auf eine nicht vorhandene `BookInstance` zuzugreifen. Außerdem prüfen wir, ob das richtige Template verwendet wird.

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

Fügen Sie die nächste Testmethode wie unten gezeigt hinzu. Sie prüft, ob das Anfangsdatum des Formulars drei Wochen in der Zukunft liegt. Beachten Sie, wie wir auf den Anfangswert des Formularfelds zugreifen können (`response.context['form'].initial['renewal_date']`).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (den Sie ebenfalls zur Klasse hinzufügen) prüft, ob die View bei erfolgreicher Verlängerung zu einer Liste aller ausgeliehenen Bücher weiterleitet. Neu ist hier, dass wir erstmals zeigen, wie Sie mit dem Client Daten per `POST` senden. Die gesendeten _Daten_ sind das zweite Argument der Post-Funktion und werden als Dictionary aus Schlüssel-Wert-Paaren angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die View für _alle ausgeliehenen Bücher_ wurde im Rahmen einer _Aufgabe_ hinzugefügt. Ihr Code leitet möglicherweise stattdessen zur Startseite '/' weiter. Ändern Sie in diesem Fall die letzten beiden Zeilen des Testcodes wie unten gezeigt. Das `follow=True` in der Anfrage sorgt dafür, dass die Anfrage die endgültige Ziel-URL zurückgibt (deshalb wird `/catalog/` statt `/` geprüft).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten beiden Funktionen wie unten gezeigt in die Klasse. Sie testen ebenfalls `POST`-Anfragen, diesmal jedoch mit ungültigen Verlängerungsdaten. Mit `assertFormError()` prüfen wir, ob die Fehlermeldungen den Erwartungen entsprechen.

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

Mit ähnlichen Techniken können Sie auch die andere View testen.

### Templates

Django stellt Test-APIs bereit, mit denen Sie prüfen können, ob Ihre Views das richtige Template aufrufen und die richtigen Informationen an dieses übergeben. Eine spezielle Test-API, mit der Sie in Django prüfen können, ob die HTML-Ausgabe wie erwartet gerendert wird, gibt es jedoch nicht.

## Weitere empfohlene Testwerkzeuge

Djangos Test-Framework hilft Ihnen, wirksame Unit- und Integrationstests zu schreiben. Wir haben die Möglichkeiten des zugrunde liegenden **unittest**-Frameworks – ganz zu schweigen von Djangos Ergänzungen – bisher nur angerissen. Sehen Sie sich beispielsweise an, wie Sie mit [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) Bibliotheken von Drittanbietern durch Testimplementierungen ersetzen können, um Ihren eigenen Code gründlicher zu testen.

Es gibt zahlreiche weitere Testwerkzeuge; wir möchten hier nur zwei hervorheben:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Werkzeug zeigt an, wie viel von Ihrem Code bei der Ausführung Ihrer Tests tatsächlich durchlaufen wird. Es ist besonders zu Beginn nützlich, wenn Sie herausfinden möchten, was genau Sie testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework zur Automatisierung von Tests in einem echten Browser. Damit können Sie die Interaktion eines echten Benutzers mit der Website simulieren. Es bietet eine ausgezeichnete Grundlage für Systemtests Ihrer Website – die nächste Stufe nach Integrationstests.

## Stellen Sie sich einer Herausforderung

Es gibt noch viele weitere Modelle und Views, die wir testen können. Versuchen Sie als Aufgabe, einen Testfall für die View `AuthorCreate` zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, alles zu prüfen, was Sie selbst festgelegt haben oder was zu Ihrem Entwurf gehört.
Dazu zählen die Zugriffsberechtigung, das Anfangsdatum, das verwendete Template und das Ziel der Weiterleitung bei Erfolg.

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

Testcode zu schreiben ist weder besonders unterhaltsam noch glamourös. Deshalb wird es bei der Erstellung einer Website häufig bis zum Schluss aufgeschoben (oder ganz ausgelassen). Dennoch sind Tests unverzichtbar, um sicherzustellen, dass Ihr Code nach Änderungen bedenkenlos veröffentlicht und wirtschaftlich gewartet werden kann.

In diesem Tutorial haben wir gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Views schreiben und ausführen. Vor allem haben wir kurz zusammengefasst, was Sie testen sollten – eine Frage, die zu Beginn oft am schwierigsten zu beantworten ist. Es gibt noch viel mehr zu lernen, aber schon mit Ihrem bisherigen Wissen sollten Sie wirksame Unit-Tests für Ihre Websites erstellen können.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre großartige (und vollständig getestete!) Django-Website bereitstellen.

## Siehe auch

- [Tests schreiben und ausführen](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Ihre erste Django-App schreiben, Teil 5: Einführung in automatisierte Tests](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz zu Testwerkzeugen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Fortgeschrittene Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
