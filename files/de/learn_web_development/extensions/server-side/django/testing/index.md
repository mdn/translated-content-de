---
title: "Django-Tutorial Teil 10: Testen einer Django-Webanwendung"
short-title: "10: Testen"
slug: Learn_web_development/Extensions/Server-side/Django/Testing
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}

Mit zunehmender Größe von Websites wird es schwieriger, diese manuell zu testen. Nicht nur gibt es mehr zu testen, sondern da sich die Interaktionen zwischen Komponenten komplexer gestalten, kann eine kleine Änderung an einer Stelle Auswirkungen auf andere Bereiche haben, wodurch mehr Änderungen notwendig werden, um sicherzustellen, dass alles weiterhin funktioniert und keine Fehler eingeführt werden, wenn mehr Änderungen vorgenommen werden. Eine Möglichkeit, diese Probleme zu mindern, ist das Schreiben von automatisierten Tests, die bei jeder Änderung leicht und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie mit dem Test-Framework von Django das _Unit-Testing_ Ihrer Website automatisieren können.

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
      <td>Verstehen, wie man Unittests für auf Django basierende Websites schreibt.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die [Lokale Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) enthält derzeit Seiten zur Anzeige von Listen aller Bücher und Autoren, Detailansichten für `Book`- und `Author`-Elemente, eine Seite zum Erneuern von `BookInstance`-Elementen und Seiten zum Erstellen, Aktualisieren und Löschen von `Author`-Elementen (und auch `Book`-Einträgen, wenn Sie die _Herausforderung_ im [Formular-Tutorial](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms) abgeschlossen haben). Selbst mit dieser relativ kleinen Seite kann das manuelle Navigieren zu jeder Seite und das _oberflächliche_ Überprüfen, dass alles wie erwartet funktioniert, mehrere Minuten in Anspruch nehmen. Da wir Änderungen vornehmen und die Website erweitern, benötigt es immer mehr Zeit, um manuell zu überprüfen, dass alles "ordnungsgemäß" funktioniert. Würden wir so weitermachen wie bisher, würden wir schließlich die meiste Zeit mit Testen verbringen und nur sehr wenig Zeit damit, unseren Code zu verbessern.

Automatisierte Tests können bei diesem Problem wirklich helfen! Die offensichtlichen Vorteile sind, dass sie viel schneller ausgeführt werden können als manuelle Tests, dass sie auf einem viel niedrigeren Detailniveau testen und jedes Mal genau dieselbe Funktionalität testen (menschliche Tester sind längst nicht so zuverlässig!). Da sie schnell sind, können automatisierte Tests regelmäßig ausgeführt werden, und wenn ein Test fehlschlägt, zeigen sie genau an, wo der Code nicht wie erwartet funktioniert.

Darüber hinaus können automatisierte Tests als erster realer "Nutzer" Ihres Codes fungieren und Sie dazu zwingen, rigoros zu definieren und zu dokumentieren, wie sich Ihre Website verhalten soll. Oft sind sie die Grundlage für Ihre Code-Beispiele und Dokumentationen. Aus diesen Gründen beginnen einige Softwareentwicklungsprozesse mit der Definition und Implementierung von Tests, bevor der Code verfasst wird, um das erforderliche Verhalten zu erfüllen (z.B. [testgetriebene](https://en.wikipedia.org/wiki/Test-driven_development) und [verhaltensgetriebene](https://en.wikipedia.org/wiki/Behavior-driven_development) Entwicklung).

Dieses Tutorial zeigt, wie Sie automatisierte Tests für Django schreiben, indem Sie der _LocalLibrary_-Website eine Reihe von Tests hinzufügen.

### Arten von Tests

Es gibt zahlreiche Arten, Ebenen und Klassifikationen von Tests und Testansätzen. Die wichtigsten automatisierten Tests sind:

- Unittests
  - : Überprüfen das funktionale Verhalten einzelner Komponenten, oft auf Klassen- und Funktionsebene.
- Regressionstests
  - : Tests, die historische Fehler reproduzieren. Jeder Test wird zunächst ausgeführt, um zu überprüfen, ob der Fehler behoben wurde, und dann erneut ausgeführt, um sicherzustellen, dass er nach späteren Code-Änderungen nicht erneut aufgetreten ist.
- Integrationstests
  - : Überprüfen, wie Gruppierungen von Komponenten funktionieren, wenn sie zusammen verwendet werden. Integrationstests kennen die erforderlichen Interaktionen zwischen Komponenten, aber nicht unbedingt die internen Abläufe jeder Komponente. Sie können einfache Gruppierungen von Komponenten bis hin zur gesamten Website abdecken.

> [!NOTE]
> Weitere gängige Testtypen sind Black-Box-, White-Box-, manuelle, automatisierte, Canary-, Smoke-, Konformitäts-, Akzeptanz-, Funktions-, System-, Leistungs-, Last- und Stresstests. Schauen Sie sich nach weiteren Informationen um.

### Was bietet Django für das Testen?

Das Testen einer Website ist eine komplexe Aufgabe, da sie aus mehreren Logikschichten besteht – von der HTTP-Ebene zur Anfragebearbeitung, über Modellabfragen bis hin zur Formularvalidierung und -verarbeitung sowie der Vorlagen-Rendering.

Django stellt ein Test-Framework mit einer kleinen Klassenhierarchie zur Verfügung, das auf der Python-Standardbibliothek [`unittest`](https://docs.python.org/3/library/unittest.html#module-unittest) aufbaut. Trotz des Namens eignet sich dieses Test-Framework sowohl für Unit- als auch für Integrationstests. Das Django-Framework fügt API-Methoden und -Tools hinzu, die beim Testen von Web- und Django-spezifischem Verhalten helfen. Diese ermöglichen es Ihnen, Anfragen zu simulieren, Testdaten einzufügen und die Ausgabe Ihrer Anwendung zu inspizieren. Django bietet außerdem eine API ([LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) und Werkzeuge zum [Verwenden verschiedener Test-Frameworks](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/#other-testing-frameworks). Beispielsweise können Sie mit dem beliebten [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)-Framework integrieren, um einen Benutzer zu simulieren, der mit einem Live-Browser interagiert.

Um einen Test zu schreiben, leiten Sie ihn von einer der Django- (oder _unittest_-) Test-Basisklassen ([SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#simpletestcase), [TransactionTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#transactiontestcase), [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase), [LiveServerTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#liveservertestcase)) ab und schreiben dann separate Methoden, um zu überprüfen, ob bestimmte Funktionalitäten wie erwartet funktionieren (Tests verwenden "Assert"-Methoden, um zu testen, dass Ausdrücke `True`- oder `False`-Werte ergeben, oder dass zwei Werte gleich sind, usw.) Wenn Sie einen Testlauf starten, führt das Framework die gewählten Testmethoden in Ihren abgeleiteten Klassen aus. Die Testmethoden laufen unabhängig voneinander, wobei gemeinsames Setup und/oder Teardown-Verhalten in der Klasse definiert sind, wie unten gezeigt.

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

Die beste Basisklasse für die meisten Tests ist [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase). Diese Testklasse erstellt eine saubere Datenbank, bevor ihre Tests ausgeführt werden, und führt jede Testfunktion in ihrer eigenen Transaktion aus. Die Klasse besitzt auch einen Test-[Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client), den Sie verwenden können, um zu simulieren, dass ein Benutzer mit dem Code auf der View-Ebene interagiert. In den folgenden Abschnitten werden wir uns auf Unittests konzentrieren, die mit dieser Basis-Testklasse [TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) erstellt wurden.

> [!NOTE]
> Die [django.test.TestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#testcase) Klasse ist sehr praktisch, kann aber dazu führen, dass einige Tests langsamer sind, als sie sein müssen (nicht jeder Test muss seine eigene Datenbank einrichten oder die View-Interaktion simulieren). Sobald Sie mit den Möglichkeiten dieser Klasse vertraut sind, möchten Sie vielleicht einige Ihrer Tests mit den verfügbaren einfacheren Testklassen ersetzen.

### Was sollten Sie testen?

Sie sollten alle Aspekte Ihres eigenen Codes testen, aber keine Bibliotheken oder Funktionalitäten, die als Teil von Python oder Django bereitgestellt werden.

Betrachten wir zum Beispiel das unten definierte `Author`-Modell. Sie müssen nicht explizit testen, dass `first_name` und `last_name` korrekt als `CharField` in der Datenbank gespeichert werden, da dies etwas ist, das von Django definiert wird (obwohl Sie dies in der Praxis während der Entwicklung dennoch testen werden). Sie müssen auch nicht testen, ob das `date_of_birth`-Feld als Datumsfeld validiert wurde, da dies ebenfalls etwas ist, das in Django implementiert ist.

Sie sollten jedoch die Texte überprüfen, die für die Bezeichnungen verwendet werden (_Vorname, Nachname, Geburtsdatum, Verstorben_), und die Größe des Feldes, das für den Text zugewiesen wurde (_100 Zeichen_), da dies Teil Ihres Designs ist und etwas, das in Zukunft kaputtgehen/geändert werden könnte.

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

Ebenso sollten Sie überprüfen, ob die benutzerdefinierten Methoden `get_absolute_url()` und `__str__()` wie erforderlich funktionieren, da sie Ihr Code/Geschäftslogik sind. Im Fall von `get_absolute_url()` können Sie darauf vertrauen, dass die Django-Methode `reverse()` korrekt implementiert wurde, sodass Sie testen, ob die zugehörige Ansicht tatsächlich definiert wurde.

> [!NOTE]
> Aufmerksame Leser können feststellen, dass wir auch das Geburts- und Todesdatum auf sinnvolle Werte einschränken und überprüfen würden, ob der Tod nach der Geburt liegt.
> Diese Einschränkung würde bei Django zu Ihren Formularklassen hinzugefügt werden (obwohl Sie Validatoren für Modelfelder und Modellvalidierer definieren können, werden diese nur auf der Formularebene verwendet, wenn sie von der `clean()`-Methode des Modells aufgerufen werden. Dies erfordert ein `ModelForm` oder die `clean()`-Methode des Modells muss speziell aufgerufen werden.)

Mit diesen Gedanken im Hinterkopf sehen wir uns nun an, wie man Tests definiert und ausführt.

## Übersicht über die Teststruktur

Bevor wir im Detail auf das "Was soll getestet werden" eingehen, lassen Sie uns zunächst kurz betrachten, _wo_ und _wie_ Tests definiert werden.

Django verwendet die [integrierte Testentdeckung](https://docs.python.org/3/library/unittest.html#unittest-test-discovery) des unittest-Moduls, die Tests im aktuellen Arbeitsverzeichnis in jeder Datei findet, die nach dem Muster **test\*.py** benannt ist. Vorausgesetzt, Sie benennen die Dateien entsprechend, können Sie jede Struktur verwenden, die Ihnen gefällt. Wir empfehlen Ihnen, ein Modul für Ihren Testcode zu erstellen und separate Dateien für Modelle, Ansichten, Formulare und alle anderen Arten von Code zu haben, die Sie testen müssen. Zum Beispiel:

```plain
catalog/
  /tests/
    __init__.py
    test_models.py
    test_forms.py
    test_views.py
```

Erstellen Sie in Ihrem _LocalLibrary_-Projekt eine Dateistruktur wie oben gezeigt. Die Datei **\_\_init\_\_.py** sollte eine leere Datei sein (dies teilt Python mit, dass das Verzeichnis ein Paket ist). Sie können die drei Testdateien erstellen, indem Sie die Skeletttestdatei **/catalog/tests.py** kopieren und umbenennen.

> [!NOTE]
> Die Skeletttestdatei **/catalog/tests.py** wurde automatisch erstellt, als wir die [Django-Skelettwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) aufgebaut haben. Es ist vollkommen "legal", alle Ihre Tests darin zu platzieren, aber wenn Sie angemessen testen, werden Sie schnell eine sehr große und unübersichtliche Testdatei haben.
>
> Löschen Sie die Skelettdatei, da wir sie nicht benötigen werden.

Öffnen Sie **/catalog/tests/test_models.py**. Die Datei sollte `django.test.TestCase` importieren, wie gezeigt:

```python
from django.test import TestCase

# Create your tests here.
```

Oft fügen Sie für jedes Modell/View/Formular, das Sie testen möchten, eine Testklasse hinzu, mit einzelnen Methoden zum Testen spezifischer Funktionalitäten. In anderen Fällen möchten Sie möglicherweise eine separate Klasse zum Testen eines bestimmten Anwendungsfalls haben, mit einzelnen Testfunktionen, die Aspekte dieses Anwendungsfalls testen (z.B. eine Klasse, um zu überprüfen, ob ein Modelfeld korrekt validiert wird, mit Funktionen zum Testen der möglichen Fehlerfälle). Wiederum liegt die Struktur sehr bei Ihnen, aber es ist am besten, wenn Sie konsistent sind.

Fügen Sie die unten stehende Testklasse ans Ende der Datei hinzu. Die Klasse demonstriert, wie man eine Testfallklasse erstellt, indem man von `TestCase` ableitet.

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

Die neue Klasse definiert zwei Methoden, die Sie zur Vorkonfiguration von Tests verwenden können (zum Beispiel um Modelle oder andere Objekte zu erstellen, die Sie für den Test benötigen):

- `setUpTestData()` wird einmal zu Beginn des Testruns für das Klassen-Setup aufgerufen. Sie würden dies verwenden, um Objekte zu erstellen, die in keiner der Testmethoden verändert oder geändert werden.
- `setUp()` wird vor jeder Testfunktion aufgerufen, um Objekte einzurichten, die durch den Test verändert werden könnten (jede Testfunktion erhält eine "frische" Version dieser Objekte).

> [!NOTE]
> Die Testklassen haben auch eine `tearDown()`-Methode, die wir nicht verwendet haben. Diese Methode ist für Datenbanktests nicht besonders nützlich, da die `TestCase`-Basisklasse die Datenbankaufbereitung für Sie übernimmt.

Darunter haben wir eine Reihe von Testmethoden, die `Assert`-Funktionen verwenden, um zu überprüfen, ob Bedingungen wahr, falsch oder gleich sind (`AssertTrue`, `AssertFalse`, `AssertEqual`). Wenn die Bedingung nicht wie erwartet ist, schlägt der Test fehl und meldet den Fehler an Ihre Konsole.

Die `AssertTrue`, `AssertFalse`, `AssertEqual` sind Standardassertionen, die von **unittest** bereitgestellt werden. Es gibt andere Standardassertionen im Framework sowie [Django-spezifische Assertionen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#assertions), um zu testen, ob eine View umleitet (`assertRedirects`), ob eine bestimmte Vorlage verwendet wurde (`assertTemplateUsed`), etc.

> [!NOTE]
> Normalerweise sollten Sie **keine** **print()**-Funktionen in Ihre Tests einfügen, wie oben gezeigt. Wir tun dies hier nur, damit Sie die Reihenfolge sehen können, in der die Setup-Funktionen in der Konsole aufgerufen werden (im folgenden Abschnitt).

## So führen Sie die Tests aus

Der einfachste Weg, alle Tests auszuführen, ist das Verwenden des Befehls:

```bash
python3 manage.py test
```

Dieser entdeckt alle Dateien, die dem Muster **test\*.py** im aktuellen Verzeichnis entsprechen, und führt alle Tests aus, die entsprechende Basisklassen verwenden (hier haben wir eine Reihe von Testdateien, aber nur **/catalog/tests/test_models.py** enthält derzeit Tests). Standardmäßig melden die Tests einzeln nur bei Testfehlern, gefolgt von einer Testzusammenfassung.

> [!NOTE]
> Wenn Sie Fehler wie `ValueError: Missing staticfiles manifest entry...` erhalten, kann das daran liegen, dass das Testen standardmäßig _collectstatic_ nicht ausführt, und Ihre App verwendet eine Speicherklasse, die es erfordert (siehe [manifest_strict](https://docs.djangoproject.com/en/5.0/ref/contrib/staticfiles/#django.contrib.staticfiles.storage.ManifestStaticFilesStorage.manifest_strict) für mehr Informationen). Es gibt mehrere Möglichkeiten, dieses Problem zu überwinden - die einfachste ist, _collectstatic_ vor dem Ausführen der Tests auszuführen:
>
> ```bash
> python3 manage.py collectstatic
> ```

Führen Sie die Tests im Hauptverzeichnis von _LocalLibrary_ aus. Sie sollten eine Ausgabe ähnlich der untenstehenden sehen.

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

Hier sehen wir, dass ein Test fehlgeschlagen ist, und wir können genau sehen, welche Funktion fehlgeschlagen ist und warum (dieser Fehler wird erwartet, da `False` nicht `True` ist!).

> [!NOTE]
> Das Wichtigste, das man aus der Testausgabe oben lernen kann, ist, dass sie viel wertvoller ist, wenn Sie beschreibende/informative Namen für Ihre Objekte und Methoden verwenden.

Die Ausgabe der `print()`-Funktionen zeigt, wie die `setUpTestData()`-Methode einmal für die Klasse und `setUp()` vor jeder Methode aufgerufen wird.
Denken Sie wieder daran, dass Sie normalerweise eine derartige `print()` nicht zu Ihren Tests hinzufügen würden.

Die nächsten Abschnitte zeigen, wie Sie spezifische Tests ausführen können und wie Sie steuern, wie viele Informationen die Tests anzeigen.

### Mehr Testinformationen anzeigen

Wenn Sie mehr Informationen über den Testrun erhalten möchten, können Sie die _Verbosity_ ändern. Zum Beispiel können Sie die Erfolge der Tests sowie Fehler auflisten (und eine ganze Menge Informationen darüber, wie die Testdatenbank eingerichtet wird), indem Sie die Verbosity auf "2" einstellen, wie gezeigt:

```bash
python3 manage.py test --verbosity 2
```

Die erlaubten Verbosity-Stufen sind 0, 1, 2 und 3, wobei der Standardwert "1" ist.

### Dinge beschleunigen

Wenn Ihre Tests unabhängig sind, können Sie auf einem Multiprozessor-Rechner deren Ausführung erheblich beschleunigen, indem Sie sie parallel ausführen.
Die Verwendung von `--parallel auto` unten lässt einen Test-Prozess pro verfügbarem Kern ablaufen.
Das `auto` ist optional und Sie können auch eine bestimmte Anzahl an Kernen angeben, die verwendet werden sollen.

```bash
python3 manage.py test --parallel auto
```

Für mehr Informationen, einschließlich was zu tun ist, wenn Ihre Tests nicht unabhängig sind, schauen Sie sich [DJANGO_TEST_PROCESSES](https://docs.djangoproject.com/en/5.0/ref/django-admin/#envvar-DJANGO_TEST_PROCESSES) an.

### Spezifische Tests ausführen

Wenn Sie einen Teil Ihrer Tests ausführen möchten, können Sie dies tun, indem Sie den vollständigen Punkt-Pfad zum Paket (zu den Paketen), Modul, `TestCase`-Unterklasse oder Methode angeben:

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

### Weitere Optionen des Testlaufers

Der Testläufer bietet viele weitere Optionen, einschließlich der Möglichkeit, Tests zu mischen (`--shuffle`), sie im Debug-Modus auszuführen (`--debug-mode`) und den Python-Logger zu nutzen, um die Ergebnisse zu erfassen.
Für mehr Informationen sehen Sie sich die Dokumentation zum Django [Testläufer](https://docs.djangoproject.com/en/5.0/ref/django-admin/#test) an.

## LocalLibrary-Tests

Jetzt, wo wir wissen, wie man Tests ausführt und was getestet werden muss, schauen wir uns einige praktische Beispiele an.

> [!NOTE]
> Wir werden nicht jeden möglichen Test schreiben, aber das sollte Ihnen eine Vorstellung davon geben, wie Tests funktionieren und was Sie noch mehr tun können.

### Modelle

Wie oben besprochen, sollten Sie alles testen, was Teil Ihres Designs ist oder von von Ihnen geschriebenem Code definiert wird, nicht aber Bibliotheken/Code, der bereits von Django oder dem Python-Entwicklungsteam getestet wird.

Betrachten wir zum Beispiel das `Author`-Modell unten. Hier sollten die Bezeichnungen für alle Felder getestet werden, denn auch wenn wir die meisten davon nicht explizit angegeben haben, haben wir ein Design, das festlegt, was diese Werte sein sollten. Wenn wir die Werte nicht testen, wissen wir nicht, ob die Feldbezeichnungen ihre beabsichtigten Werte haben. Ebenso können wir darauf vertrauen, dass Django ein Feld der angegebenen Länge erstellt, aber es ist sinnvoll, einen Test für diese Länge zu spezifizieren, um sicherzustellen, dass es wie geplant implementiert wurde.

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

Öffnen Sie unser **/catalog/tests/test_models.py**, und ersetzen Sie einen bestehenden Code durch den folgenden Testcode für das `Author`-Modell.

Hier sehen Sie, dass wir zuerst `TestCase` importieren und unsere Testklasse (`AuthorModelTest`) davon ableiten, mit einem beschreibenden Namen, damit wir leicht identifizieren können, welche Tests im Testoutput fehlschlagen. Anschließend rufen wir `setUpTestData()` auf, um ein Autorenobjekt zu erstellen, das wir verwenden, aber in keinem der Tests ändern werden.

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

Die Feldtests überprüfen, ob die Werte der Feldbezeichnungen (`verbose_name`) und ob die Größe der einzelnen Zeichenfelder wie erwartet sind. Diese Methoden haben alle beschreibende Namen und folgen demselben Muster:

```python
# Get an author object to test
author = Author.objects.get(id=1)

# Get the metadata for the required field and use it to query the required field data
field_label = author._meta.get_field('first_name').verbose_name

# Compare the value to the expected result
self.assertEqual(field_label, 'first name')
```

Die interessanten Dinge, die es zu beachten gilt, sind:

- Wir können den `verbose_name` nicht direkt über `author.first_name.verbose_name` abrufen, da `author.first_name` ein _String_ (kein Handle auf das `first_name`-Objekt, das wir verwenden könnten, um auf seine Eigenschaften zuzugreifen) ist. Stattdessen müssen wir das `_meta`-Attribut des Autors verwenden, um eine Instanz des Feldes zu erhalten, und diese verwenden, um die zusätzlichen Informationen abzufragen.
- Wir haben uns entschieden, `assertEqual(field_label,'first name')` anstelle von `assertTrue(field_label == 'first name')` zu verwenden. Der Grund dafür ist, dass im Falle eines Fehlschlags des Tests die Ausgabe des ersteren Ihnen sagt, was die Bezeichnung tatsächlich war, was das Debuggen des Problems ein wenig einfacher macht.

> [!NOTE]
> Die Tests für die `last_name`- und `date_of_birth`-Bezeichnungen sowie der Test für die Länge des `last_name`-Feldes wurden weggelassen. Fügen Sie nun Ihre eigenen Versionen hinzu, indem Sie den oben genannten Namenskonventionen und Ansätzen folgen.

Wir müssen auch unsere benutzerdefinierten Methoden testen. Dabei überprüfen wir im Wesentlichen nur, ob der Objektname wie erwartet im Format "Nachname", "Vorname" erstellt wurde und ob die URL, die wir für ein `Author`-Element erhalten, so ist, wie wir sie erwarten würden.

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

Führen Sie die Tests nun aus. Wenn Sie das `Author`-Modell wie im Modelltutorial beschrieben erstellt haben, ist es sehr wahrscheinlich, dass Sie einen Fehler für die `date_of_death`-Bezeichnung erhalten, wie unten gezeigt. Der Test schlägt fehl, weil er erwartet wurde, dass die Bezeichnungsdefinition dem Django-Konzept folgt, den ersten Buchstaben der Bezeichnung nicht zu schreiben (Django übernimmt dies für Sie).

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

Das ist ein sehr kleiner Fehler, aber er verdeutlicht, wie das Schreiben von Tests alle Annahmen, die Sie möglicherweise gemacht haben, gründlicher überprüfen kann.

> [!NOTE]
> Ändern Sie die Bezeichnung für das Feld `date_of_death` (**/catalog/models.py**) in "verstorben" und führen Sie die Tests erneut aus.

Die Muster zum Testen der anderen Modelle sind ähnlich, daher werden wir dies nicht weiter diskutieren. Erstellen Sie gerne Ihre eigenen Tests für unsere anderen Modelle.

### Formulare

Die Philosophie beim Testen Ihrer Formulare ist die gleiche wie beim Testen Ihrer Modelle; Sie müssen alles testen, was Sie programmiert haben oder Ihr Design vorschreibt, aber nicht das Verhalten des zugrundeliegenden Frameworks und anderer Drittanbieter-Bibliotheken.

In der Regel bedeutet das, dass Sie testen sollten, ob die Formulare die gewünschten Felder haben und ob diese mit den entsprechenden Bezeichnungen und Hilfetexten angezeigt werden. Sie müssen nicht überprüfen, ob Django den Feldtyp korrekt validiert (es sei denn, Sie haben Ihr eigenes benutzerdefiniertes Feld und Validierung erstellt) – d.h. Sie müssen nicht testen, ob ein E-Mail-Feld nur E-Mails akzeptiert. Sie müssten jedoch alle zusätzlichen Validierungen testen, die Sie an den Feldern erwarten und alle Nachrichten, die Ihr Code bei Fehlern generiert.

Betrachten wir unser Formular zur Erneuerung von Büchern. Dies hat nur ein Feld für das Erneuerungsdatum, das eine Bezeichnung und einen Hilfetext haben wird, den wir überprüfen müssen.

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

Öffnen Sie unsere **/catalog/tests/test_forms.py**-Datei und ersetzen Sie vorhandenen Code durch den folgenden Testcode für das Formular `RenewBookForm`. Wir beginnen damit, unser Formular und einige Python- und Django-Bibliotheken zu importieren, um zeitbezogene Funktionalität zu testen. Anschließend deklarieren wir unsere Formulartestklasse auf die gleiche Weise wie bei den Modellen und verwenden einen beschreibenden Namen für unsere von `TestCase` abgeleitete Testklasse.

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

Die ersten beiden Funktionen testen, ob die Bezeichnung des Feldes und der Hilfetext wie erwartet sind. Wir müssen auf das Feld über das Felder-Wörterbuch zugreifen (z.B., `form.fields['renewal_date']`). Beachten Sie, dass wir auch testen müssen, ob der Bezeichnungswert `None` ist, da Django, auch wenn es die korrekte Bezeichnung rendert, `None` zurückgibt, wenn der Wert nicht _explizit_ gesetzt ist.

Der Rest der Funktionen testet, dass das Formular für Erneuerungsdaten direkt innerhalb des akzeptablen Bereichs gültig ist und für Werte außerhalb des Bereichs ungültig ist. Beachten Sie, wie wir Testdatumswerte um unser aktuelles Datum (`datetime.date.today()`) herum unter Verwendung von `datetime.timedelta()` konstruieren (in diesem Fall Angabe einer Anzahl von Tagen oder Wochen). Wir erstellen einfach das Formular, übergeben unsere Daten und testen, ob es gültig ist.

> [!NOTE]
> Hier verwenden wir weder die Datenbank noch den Testclient. Erwägen Sie, diese Tests zu ändern, um [SimpleTestCase](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.SimpleTestCase) zu verwenden.
>
> Wir müssen auch validieren, dass die richtigen Fehler ausgegeben werden, wenn das Formular ungültig ist, allerdings wird dies in der Regel als Teil der View-Verarbeitung durchgeführt, sodass wir uns darum im nächsten Abschnitt kümmern werden.

> [!WARNING]
> Wenn Sie die [ModelForm](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms#modelforms)-Klasse `RenewBookModelForm(forms.ModelForm)` anstelle der Klasse `RenewBookForm(forms.Form)` verwenden, dann wäre der Formularfeldname **'due_back'** anstelle von **'renewal_date'**.

Das war's für Formulare; wir haben noch einige andere, aber diese werden automatisch durch unsere generischen klassenbasierten Bearbeitungsviews erstellt und sollten dort getestet werden! Führen Sie die Tests aus, um zu bestätigen, dass unser Code immer noch funktioniert!

### Ansichten

Um unser Viewverhalten zu validieren, verwenden wir den Django-Test [Client](https://docs.djangoproject.com/en/5.0/topics/testing/tools/#django.test.Client). Diese Klasse agiert wie ein Dummy-Webbrowser, mit dem wir `GET`- und `POST`-Anfragen auf einer URL simulieren und die Antwort beobachten können. Wir können fast alles über die Antwort sehen, von niedrigstufigem HTTP (A.headers und Statuscodes) bis hin zur Vorlage, die wir verwenden, um das HTML zu rendern, und den Kontextdaten, die wir an sie übergeben. Wir können auch die Kette von Umleitungen sehen (falls vorhanden) und die URL und den Statuscode an jedem Schritt überprüfen. Dies ermöglicht es uns zu überprüfen, dass jede View das Erwartete tut.

Beginnen wir mit einer unserer einfachsten Ansichten, die eine Liste aller Autoren bereitstellt. Diese wird unter der URL **/catalog/authors/** angezeigt (eine URL namens 'authors' in der URL-Konfiguration).

```python
class AuthorListView(generic.ListView):
    model = Author
    paginate_by = 10
```

Da dies eine generische Listenansicht ist, wird fast alles von Django erledigt. Wenn Sie Django vertrauen, müssen Sie nur sicherstellen, dass die View unter der korrekten URL zugänglich ist und mithilfe ihres Namens aufgerufen werden kann. Wenn Sie jedoch einen testgetriebenen Entwicklungsprozess verfolgen, beginnen Sie mit dem Schreiben von Tests, die bestätigen, dass die View alle Autoren anzeigt und diese in Gruppen von 10 paginiert.

Öffnen Sie die Datei **/catalog/tests/test_views.py** und ersetzen Sie vorhandenen Text durch den folgenden Testcode für `AuthorListView`. Wie bisher importieren wir unser Modell und einige nützliche Klassen. In der Methode `setUpTestData()` richten wir eine Anzahl von `Author`-Objekten ein, um unsere Pagination zu testen.

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

Alle Tests verwenden den Client (der unserer von `TestCase` abgeleiteten Klasse gehört), um eine `GET`-Anfrage zu simulieren und eine Antwort zu erhalten. Die erste Version überprüft eine spezifische URL (Beachten Sie, nur der spezifische Pfad ohne die Domain), während die zweite die URL aus ihrem Namen in der URL-Konfiguration generiert.

```python
response = self.client.get('/catalog/authors/')
response = self.client.get(reverse('authors'))
```

Sobald wir die Antwort haben, fragen wir nach dem Statuscode, der verwendeten Vorlage, ob die Antwort paginiert ist, der Anzahl der zurückgegebenen Elemente und der Gesamtanzahl der Elemente.

> [!NOTE]
> Wenn Sie die Variable `paginate_by` in Ihrer **/catalog/views.py**-Datei auf eine andere Zahl als 10 gesetzt haben, stellen Sie sicher, dass Sie die Zeilen, die testen, ob die korrekte Anzahl an Elementen in paginierten Vorlagen angezeigt werden, entsprechend aktualisieren. Wenn Sie die Variable zum Beispiel auf 5 gesetzt haben, aktualisieren Sie die Zeile oben zu:
>
> ```python
> self.assertTrue(len(response.context['author_list']) == 5)
> ```

Die interessanteste Variable, die wir oben demonstrieren, ist `response.context`, die die Kontextvariable ist, die von der View an die Vorlage übergeben wird.
Dies ist unglaublich nützlich zum Testen, weil es uns ermöglicht zu bestätigen, dass unsere Vorlage alle Daten erhält, die sie benötigt. Mit anderen Worten, wir können überprüfen, dass wir die beabsichtigte Vorlage verwenden und welche Daten die Vorlage erhält, was einen großen Beitrag dazu leistet zu bestätigen, dass Renderingprobleme alleine auf die Vorlage zurückzuführen sind.

#### Ansichten, die auf eingeloggte Benutzer beschränkt sind

In einigen Fällen werden Sie eine View testen wollen, die nur auf eingeloggte Benutzer beschränkt ist. Zum Beispiel ist unsere `LoanedBooksByUserListView` sehr ähnlich wie unsere vorherige View, aber nur für eingeloggte Benutzer verfügbar, und zeigt nur `BookInstance`-Datensätze an, die vom aktuellen Benutzer ausgeliehen wurden, den Status 'on loan' haben und "ältester zuerst" sortiert sind.

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

Fügen Sie den folgenden Testcode zu **/catalog/tests/test_views.py** hinzu. Hier verwenden wir `SetUp()`, um einige Benutzerlogin-Konten und `BookInstance`-Objekte zu erstellen (zusammen mit ihrer zugehörigen Bücher und anderen Datensätzen), die wir später in den Tests verwenden werden. Die Hälfte der Bücher wird von jedem Testbenutzer ausgeliehen, aber wir haben den Status aller Bücher zunächst auf "maintenance" gesetzt. Wir haben `SetUp()` anstelle von `setUpTestData()` verwendet, da wir später einige dieser Objekte ändern werden.

> [!NOTE]
> Der `setUp()`-Code unten erstellt ein Buch mit einer angegebenen `Language`, aber _Ihr_ Code enthält möglicherweise das `Language`-Modell nicht, da dies als _Herausforderung_ erstellt wurde. In diesem Fall kommentieren Sie die Teile des Codes aus, die Language-Objekte erstellen oder importieren. Dies sollten Sie ebenfalls im Abschnitt `RenewBookInstancesViewTest` tun, der folgt.

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

Um zu überprüfen, ob die View den Benutzer auf eine Login-Seite umleitet, wenn dieser nicht eingeloggt ist, nutzen wir `assertRedirects`, wie in `test_redirect_if_not_logged_in()` demonstriert. Um zu überprüfen, dass die Seite für einen eingeloggten Benutzer angezeigt wird, loggen wir unseren Testbenutzer zuerst ein und greifen dann erneut auf die Seite zu und überprüfen, dass wir einen `status_code` von 200 (Erfolg) erhalten.

Der Rest der Tests überprüft, dass unsere View nur Bücher zurückgibt, die an unseren aktuellen Entleiher ausgeliehen sind. Kopieren Sie den Code unten und fügen Sie ihn am Ende der obigen Testklasse ein.

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

Sie könnten auch Paginationstests hinzufügen, wenn Sie dies wünschen!

#### Testen von Ansichten mit Formularen

Das Testen von Ansichten mit Formularen ist etwas komplizierter als in den obigen Fällen, da Sie mehr Codepfade testen müssen: erste Anzeige, Anzeige nach fehlgeschlagener Datenvalidierung und Anzeige nach erfolgreicher Validierung. Die gute Nachricht ist, dass wir den Client zum Testen fast genau so verwenden, wie wir es bei Nur-Anzeigen-Ansichten getan haben.

Um dies zu demonstrieren, schreiben wir einige Tests für die View, die zum Erneuern von Büchern verwendet wird (`renew_book_librarian()`):

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

Wir müssen testen, dass die View nur Benutzern zur Verfügung steht, die die Berechtigung `can_mark_returned` haben, dass Benutzer auf eine HTTP 404-Fehlerseite geleitet werden, wenn sie versuchen, ein `BookInstance` zu erneuern, das nicht existiert. Wir sollten überprüfen, dass der ursprüngliche Wert des Formulars mit einem Datum drei Wochen in der Zukunft voreingestellt ist und dass wir, wenn die Validierung erfolgreich ist, zur Ansicht "alle ausgeliehenen Bücher" umgeleitet werden. Als Teil der Überprüfung der Validierungslücken-Tests überprüfen wir auch, ob unser Formular die entsprechenden Fehlermeldungen sendet.

Fügen Sie den ersten Teil der Testklasse (wie unten gezeigt) am Ende von **/catalog/tests/test_views.py** hinzu.
Diese erstellt zwei Benutzer und zwei Buchinstanzen, gibt jedoch nur einem Benutzer die erforderlichen Berechtigungen, um auf die View zuzugreifen.

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

Fügen Sie die folgenden Tests am Ende der Testklasse hinzu. Diese überprüfen, dass nur Benutzer mit den richtigen Berechtigungen (_testuser2_) auf die View zugreifen können. Wir überprüfen alle Fälle: wenn der Benutzer nicht eingeloggt ist, wenn ein Benutzer eingeloggt ist, aber nicht die richtigen Berechtigungen hat, wenn der Benutzer Berechtigungen hat, aber nicht der Entleiher ist (sollte erfolgreich sein), und was passiert, wenn sie versuchen, auf ein nicht existierendes `BookInstance` zuzugreifen. Wir überprüfen auch, dass die korrekte Vorlage verwendet wird.

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

Fügen Sie die nächste Testmethode wie unten gezeigt der Klasse hinzu. Diese überprüft, dass das ursprüngliche Datum für das Formular drei Wochen in der Zukunft liegt. Beachten Sie, wie wir in der Lage sind, auf den Wert des Initialwertes des Formularfelds zuzugreifen (`response.context['form'].initial['renewal_date']`).

```python
    def test_form_renewal_date_initially_has_date_three_weeks_in_future(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        response = self.client.get(reverse('renew-book-librarian', kwargs={'pk': self.test_bookinstance1.pk}))
        self.assertEqual(response.status_code, 200)

        date_3_weeks_in_future = datetime.date.today() + datetime.timedelta(weeks=3)
        self.assertEqual(response.context['form'].initial['renewal_date'], date_3_weeks_in_future)
```

Der nächste Test (fügen Sie diesen der Klasse ebenfalls hinzu) überprüft, dass die View zu einer Liste aller ausgeliehenen Bücher weiterleitet, wenn die Erneuerung erfolgreich ist. Was hier erstmalig anders ist, dass wir zeigen, wie man Daten mit dem Client über `POST` senden kann. Die Post-_Daten_ sind das zweite Argument der Post-Funktion und werden als Wörterbuch von Schlüssel/Wert-Paaren angegeben.

```python
    def test_redirects_to_all_borrowed_book_list_on_success(self):
        login = self.client.login(username='testuser2', password='2HJ1vRV0Z&3iD')
        valid_date_in_future = datetime.date.today() + datetime.timedelta(weeks=2)
        response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future})
        self.assertRedirects(response, reverse('all-borrowed'))
```

> [!WARNING]
> Die _alle-ausgeliehenen_-View wurde als _Herausforderung_ hinzugefügt, und Ihr Code kann stattdessen zur Startseite '/' umleiten. Wenn dies der Fall ist, passen Sie die letzten beiden Zeilen des Testcodes an den unten gezeigten Code an. Das `follow=True` in der Anfrage stellt sicher, dass die Anforderung die endgültige Ziel-URL zurückgibt (daher Überprüfung `/catalog/` statt `/`).
>
> ```python
>  response = self.client.post(reverse('renew-book-librarian', kwargs={'pk':self.test_bookinstance1.pk,}), {'renewal_date':valid_date_in_future}, follow=True)
>  self.assertRedirects(response, '/catalog/')
> ```

Kopieren Sie die letzten zwei Funktionen in die Klasse, wie unten zu sehen. Diese testen erneut `POST`-Anfragen, diesmal aber mit ungültigen Erneuerungsterminen. Wir verwenden `assertFormError()`, um zu überprüfen, dass die Fehlermeldungen den Erwartungen entsprechen.

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

Die gleichen Techniken können verwendet werden, um die andere Sicht zu testen.

### Vorlagen

Django bietet Test-APIs, um zu überprüfen, dass die korrekte Vorlage von Ihren Ansichten aufgerufen wird und um Ihnen zu ermöglichen, zu verifizieren, dass die richtigen Informationen gesendet werden. Es gibt jedoch keine spezifische API-Unterstützung zum Testen in Django, dass Ihre HTML-Ausgabe wie erwartet gerendert wird.

## Weitere empfohlene Testwerkzeuge

Das Test-Framework von Django kann Ihnen helfen, effektive Unit- und Integrationstests zu schreiben – wir haben nur an der Oberfläche dessen gekratzt, was das zugrundeliegende **unittest**-Framework leisten kann, ganz zu schweigen von Djangos Ergänzungen (schauen Sie sich zum Beispiel an, wie Sie [unittest.mock](https://docs.python.org/3/library/unittest.mock-examples.html) verwenden können, um Drittanbieter-Bibliotheken zu patchen, damit Sie Ihren eigenen Code umfassender testen können).

Obwohl es zahlreiche andere Testwerkzeuge gibt, die Sie verwenden können, heben wir nur zwei hervor:

- [Coverage](https://coverage.readthedocs.io/en/latest/): Dieses Python-Tool berichtet darüber, wie viel Ihres Codes tatsächlich von Ihren Tests ausgeführt wird. Es ist besonders nützlich, wenn Sie gerade erst anfangen und herausfinden wollen, was Sie genau testen sollten.
- [Selenium](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment) ist ein Framework für die Automatisierung von Tests in einem echten Browser. Es ermöglicht Ihnen, einen echten Benutzer zu simulieren, der mit der Seite interagiert, und bietet einen großartigen Rahmen für das Systemtesten Ihrer Seite (der nächste Schritt nach dem Integrationstest).

## Fordern Sie sich selbst heraus

Es gibt noch viele weitere Modelle und Ansichten, die wir testen können. Versuchen Sie als Herausforderung, einen Testfall für die `AuthorCreate`-Ansicht zu erstellen.

```python
class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
    permission_required = 'catalog.add_author'
```

Denken Sie daran, dass Sie alles überprüfen müssen, was Sie spezifizieren oder was Teil des Designs ist.
Dies umfasst, wer Zugriff hat, das ursprüngliche Datum, die verwendete Vorlage und wohin die Ansicht bei Erfolg umleitet.

Sie könnten den folgenden Code verwenden, um Ihren Test einzurichten und Ihrem Benutzer die entsprechenden Berechtigungen zuzuweisen

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

Testcode zu schreiben ist weder lustig noch glamourös und wird daher oft zuletzt (oder gar nicht) beim Erstellen einer Website gemacht. Es ist jedoch ein wesentlicher Teil, um sicherzustellen, dass Ihr Code nach Änderungen sicher veröffentlicht werden kann und kosteneffektiv zu warten ist.

In diesem Tutorial haben wir Ihnen gezeigt, wie Sie Tests für Ihre Modelle, Formulare und Ansichten schreiben und ausführen. Am wichtigsten ist, dass wir eine kurze Zusammenfassung dessen gegeben haben, was Sie testen sollten, was oft das Schwierigste zu ermitteln ist, wenn Sie anfangen. Es gibt noch viel mehr zu wissen, aber selbst mit dem, was Sie bereits gelernt haben, sollten Sie in der Lage sein, effektive Unittests für Ihre Websites zu erstellen.

Das nächste und letzte Tutorial zeigt, wie Sie Ihre wunderbare (und vollständig getestete!) Django-Website bereitstellen können.

## Siehe auch

- [Schreiben und Ausführen von Tests](https://docs.djangoproject.com/en/5.0/topics/testing/overview/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 5 > Einführung in automatisiertes Testen](https://docs.djangoproject.com/en/5.0/intro/tutorial05/) (Django-Dokumentation)
- [Referenz zu Testwerkzeugen](https://docs.djangoproject.com/en/5.0/topics/testing/tools/) (Django-Dokumentation)
- [Erweiterte Testthemen](https://docs.djangoproject.com/en/5.0/topics/testing/advanced/) (Django-Dokumentation)
- [Ein Leitfaden zum Testen in Django](https://toastdriven.com/blog/2011/apr/09/guide-to-testing-in-django/) (Toast Driven Blog, 2011)
- [Workshop: Testgetriebene Webentwicklung mit Django](https://test-driven-django-development.readthedocs.io/en/latest/index.html) (San Diego Python, 2014)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Forms", "Learn_web_development/Extensions/Server-side/Django/Deployment", "Learn_web_development/Extensions/Server-side/Django")}}
