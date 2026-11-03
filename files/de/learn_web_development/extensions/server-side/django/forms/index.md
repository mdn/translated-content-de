---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten. Insbesondere lernen Sie den einfachsten Weg kennen, Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website): Bibliotheksmitarbeiter können dann Ausleihen verlängern sowie Autoren mithilfe eigener Formulare erstellen, aktualisieren und löschen, statt dafür die Admin-Anwendung zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie haben alle vorherigen Teile des Tutorials abgeschlossen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Formulare schreiben, um Informationen von Benutzern zu erfassen und die Datenbank zu aktualisieren.
        Verstehen, wie generische, klassenbasierte Views zum Bearbeiten das Erstellen von Formularen für ein einzelnes Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern beziehungsweise Widgets auf einer Webseite, mit denen Informationen von Benutzern erfasst und an einen Server gesendet werden können. Formulare sind ein flexibles Mittel zur Erfassung von Benutzereingaben: Für viele Datentypen stehen passende Widgets zur Verfügung, darunter Textfelder, Kontrollkästchen, Optionsfelder und Steuerelemente zur Datumsauswahl. Formulare ermöglichen außerdem eine vergleichsweise sichere Übermittlung von Daten an den Server, da sich Daten mit Schutz vor Cross-Site Request Forgery in `POST`-Anfragen senden lassen.

Bisher haben wir in diesem Tutorial noch keine Formulare erstellt, sind ihnen aber bereits auf der Django-Admin-Website begegnet. Der folgende Screenshot zeigt beispielsweise ein Formular zum Bearbeiten eines unserer [Book-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models), das aus mehreren Auswahllisten und Textfeldern besteht.

![Admin-Website: Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, eingegebene Daten auf dem Server validieren und angemessen bereinigen (gegebenenfalls auch im Browser), das Formular bei ungültigen Feldern mit Fehlermeldungen erneut anzeigen, erfolgreich übermittelte Daten verarbeiten und den Benutzern schließlich eine Rückmeldung über den Erfolg geben. _Django Forms_ nehmen Ihnen einen Großteil dieser Arbeit ab: Das Framework ermöglicht es, Formulare und ihre Felder programmatisch zu definieren und diese Objekte sowohl zur Erzeugung des Formular-HTML als auch für einen großen Teil der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen verschiedene Möglichkeiten, Formulare zu erstellen und einzusetzen. Besonders betrachten wir, wie generische Views zum Bearbeiten den Aufwand für Formulare zur Bearbeitung Ihrer Modelle erheblich verringern. Dabei erweitern wir unsere _LocalLibrary_-Anwendung um ein Formular, mit dem Bibliotheksmitarbeiter Ausleihen verlängern können. Außerdem erstellen wir Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren – einschließlich einer einfachen Version des oben gezeigten Formulars zur Buchbearbeitung.

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten wir ein einfaches HTML-Formular mit einem Textfeld für den Namen eines „Teams“ und der zugehörigen Beschriftung:

![Beispiel für ein einfaches Namensfeld in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb der Tags `<form>…</form>` definiert. Es enthält mindestens ein `input`-Element mit `type="submit"`.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Enter name: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Default name for team." />
  <input type="submit" value="OK" />
</form>
```

Hier gibt es nur ein Textfeld für den Teamnamen. Ein Formular _kann_ jedoch beliebig viele weitere Eingabeelemente und zugehörige Beschriftungen enthalten. Das Attribut `type` eines Felds legt fest, welches Widget angezeigt wird. Mit `name` und `id` wird das Feld in JavaScript, CSS und HTML identifiziert; `value` legt den anfänglichen Wert beim ersten Anzeigen fest. Die zugehörige Beschriftung für den Teamnamen wird mit dem Tag `label` angegeben (siehe „Enter name“ oben). Dessen Attribut `for` enthält den `id`-Wert des zugehörigen `input`.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt.
Durch Betätigen dieser Schaltfläche werden die Daten aller anderen Eingabeelemente des Formulars an den Server gesendet – in diesem Fall nur das Feld `team_name`.
Die Formularattribute bestimmen die zum Senden verwendete HTTP-`method` und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource beziehungsweise URL, an die die Daten beim Absenden des Formulars zur Verarbeitung gesendet werden. Ist kein Wert angegeben (oder ist er eine leere Zeichenfolge), wird das Formular an die URL der aktuellen Seite gesendet.
- `method`: Die HTTP-Methode zum Senden der Daten: _post_ oder _get_.
  - Die Methode `POST` sollte immer verwendet werden, wenn die Daten eine Änderung an der Datenbank des Servers bewirken. Sie kann besser gegen Cross-Site-Request-Forgery-Angriffe geschützt werden.
  - Die Methode `GET` sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern, beispielsweise Suchformulare. Sie empfiehlt sich, wenn die URL als Lesezeichen gespeichert oder geteilt werden können soll.

Der Server stellt zunächst das Formular im Ausgangszustand dar – entweder mit leeren Feldern oder mit vorausgefüllten Werten. Nachdem der Benutzer die Schaltfläche zum Absenden betätigt hat, erhält der Server die Formularwerte vom Webbrowser und muss sie validieren. Enthält das Formular ungültige Daten, sollte der Server es erneut anzeigen: mit den eingegebenen Daten in den gültigen Feldern und Meldungen, die die Probleme in den ungültigen Feldern beschreiben. Sobald der Server eine Anfrage mit vollständig gültigen Formulardaten erhält, kann er die entsprechende Aktion ausführen – etwa Daten speichern, ein Suchergebnis zurückgeben oder eine Datei hochladen – und anschließend den Benutzer darüber informieren.

Wie Sie sich vorstellen können, ist es aufwendig, das HTML zu erstellen, zurückgesendete Daten zu validieren, Eingaben bei Bedarf zusammen mit Fehlermeldungen erneut anzuzeigen und mit gültigen Daten die gewünschte Aktion auszuführen. Django vereinfacht dies erheblich, indem es Ihnen einen Teil dieser Arbeit und des wiederkehrenden Codes abnimmt!

## Verarbeitung von Formularen in Django

Django verarbeitet Formulare mit denselben Techniken, die wir in früheren Tutorials zur Anzeige von Informationen über unsere Modelle kennengelernt haben: Die View empfängt eine Anfrage, führt die erforderlichen Aktionen aus – einschließlich des Lesens von Modelldaten – und erzeugt und liefert anschließend eine HTML-Seite zurück. Dazu verwendet sie ein Template, dem wir einen _Kontext_ mit den anzuzeigenden Daten übergeben. Komplizierter wird es dadurch, dass der Server auch die vom Benutzer eingegebenen Daten verarbeiten und die Seite bei Fehlern erneut anzeigen muss.

Das folgende Ablaufdiagramm zeigt, wie Django Formularanfragen verarbeitet. Es beginnt mit einer Anfrage für eine Seite mit einem Formular (grün dargestellt).

![Ablaufdiagramm zur Verarbeitung von Formularen.](form_handling_-_standard.png)

Dem Diagramm zufolge umfasst die Formularverarbeitung in Django hauptsächlich diese Schritte:

1. Beim ersten Aufruf durch den Benutzer das Ausgangsformular anzeigen.
   - Die Felder können leer sein, wenn ein neuer Datensatz erstellt wird. Sie können aber auch vorausgefüllte Werte enthalten, etwa beim Ändern eines Datensatzes oder wenn sinnvolle Standardwerte vorhanden sind.
   - Das Formular heißt zu diesem Zeitpunkt _ungebunden_, da es noch keinen vom Benutzer eingegebenen Daten zugeordnet ist (auch wenn es Anfangswerte enthalten kann).

2. Daten aus einer Anfrage zum Absenden empfangen und an das Formular binden.
   - Durch das Binden der Daten stehen die Benutzereingaben und etwaige Fehler zur Verfügung, wenn das Formular erneut angezeigt werden muss.

3. Die Daten bereinigen und validieren.
   - Bei der Bereinigung werden Eingabefelder von potenziell gefährlichen Inhalten befreit, beispielsweise von ungültigen Zeichen, die zum Senden schädlicher Inhalte an den Server dienen könnten. Außerdem werden die Werte in einheitliche Python-Typen umgewandelt.
   - Bei der Validierung wird geprüft, ob die Werte für das jeweilige Feld geeignet sind – etwa ob ein Datum im zulässigen Bereich liegt oder ein Wert weder zu kurz noch zu lang ist.

4. Sind Daten ungültig, das Formular mit den eingegebenen Werten und Fehlermeldungen für die betroffenen Felder erneut anzeigen.
5. Sind alle Daten gültig, die erforderlichen Aktionen ausführen, beispielsweise Daten speichern, eine E-Mail senden, ein Suchergebnis zurückgeben oder eine Datei hochladen.
6. Nach Abschluss aller Aktionen den Benutzer auf eine andere Seite weiterleiten.

Django bietet verschiedene Werkzeuge und Ansätze für diese Aufgaben. Am grundlegendsten ist die Klasse `Form`, die sowohl die Erzeugung des Formular-HTML als auch die Bereinigung und Validierung der Daten vereinfacht. Im nächsten Abschnitt erklären wir anhand einer Seite zur Verlängerung von Ausleihen, wie Formulare funktionieren.

> [!NOTE]
> Wenn Sie verstehen, wie `Form` verwendet wird, können Sie später auch Djangos übergeordnete Framework-Klassen für Formulare leichter nachvollziehen.

## Formular zur Verlängerung einer Ausleihe mit Form und einer funktionsbasierten View

Als Nächstes fügen wir eine Seite hinzu, auf der Bibliotheksmitarbeiter ausgeliehene Bücher verlängern können. Dafür erstellen wir ein Formular zur Eingabe eines Datums. Das Feld erhält einen Anfangswert, der drei Wochen nach dem aktuellen Datum liegt – entsprechend der üblichen Ausleihdauer. Außerdem prüfen wir, dass kein Datum in der Vergangenheit oder zu weit in der Zukunft eingegeben wird. Ist das Datum gültig, schreiben wir es in das Feld `BookInstance.due_back` des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte View und eine `Form`-Klasse. Die folgenden Abschnitte erklären die Funktionsweise von Formularen und die Änderungen, die Sie an unserem fortlaufenden _LocalLibrary_-Projekt vornehmen müssen.

### Form

Die Klasse `Form` ist das Herzstück der Formularverarbeitung in Django. Sie legt die Formularfelder, deren Anordnung, Widgets, Beschriftungen, Anfangswerte und zulässige Werte sowie – nach der Validierung – die Fehlermeldungen für ungültige Felder fest. Die Klasse bietet außerdem Methoden, um sich selbst in Templates in vordefinierten Formaten darzustellen (etwa als Tabelle oder Liste) oder den Wert einzelner Elemente abzurufen. Letzteres ermöglicht eine detaillierte manuelle Darstellung.

#### Eine Form deklarieren

Die Syntax zum Deklarieren einer `Form` ähnelt stark derjenigen für ein `Model`. Beide verwenden dieselben Feldtypen und einige ähnliche Parameter. Das ist sinnvoll, denn in beiden Fällen muss sichergestellt sein, dass jedes Feld den richtigen Datentyp verarbeitet, nur gültige Daten zulässt und eine Beschreibung für Anzeige und Dokumentation besitzt.

Formulare werden in der Datei **forms.py** innerhalb des Anwendungsverzeichnisses deklariert. Erstellen und öffnen Sie **/catalog/forms.py**. Um eine `Form` zu erstellen, importieren wir die Bibliothek `forms`, leiten eine Klasse von `Form` ab und deklarieren die Formularfelder. Eine sehr einfache Formularklasse für die Verlängerung von Ausleihen sieht so aus – fügen Sie sie Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall verwenden wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datefield) zur Eingabe des Verlängerungsdatums. In HTML erscheint es mit leerem Wert, der Standardbeschriftung „_Renewal date:_“ und einem hilfreichen Hinweis: „_Enter a date between now and 4 weeks (default 3)._“ Da keine weiteren optionalen Argumente angegeben sind, akzeptiert das Feld Datumswerte in den [Eingabeformaten](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#django.forms.DateField.input_formats) YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024) und MM/DD/YY (10/25/24). Dargestellt wird es mit dem Standard-[Widget](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#widget) [DateInput](https://docs.djangoproject.com/en/6.1/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele weitere Arten von Formularfeldern. Die meisten werden Sie aufgrund ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen wiedererkennen:

- [`BooleanField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#booleanfield)
- [`CharField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#charfield)
- [`ChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#choicefield)
- [`TypedChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#typedchoicefield)
- [`DateField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datefield)
- [`DateTimeField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datetimefield)
- [`DecimalField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#decimalfield)
- [`DurationField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#durationfield)
- [`EmailField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#emailfield)
- [`FileField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#filefield)
- [`FilePathField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#filepathfield)
- [`FloatField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#floatfield)
- [`ImageField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#imagefield)
- [`IntegerField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#integerfield)
- [`GenericIPAddressField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#genericipaddressfield)
- [`MultipleChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#multiplechoicefield)
- [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#typedmultiplechoicefield)
- [`NullBooleanField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#nullbooleanfield)
- [`RegexField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#regexfield)
- [`SlugField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#slugfield)
- [`TimeField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#timefield)
- [`URLField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#urlfield)
- [`UUIDField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#uuidfield)
- [`ComboField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#combofield)
- [`MultiValueField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#multivaluefield)
- [`SplitDateTimeField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#splitdatetimefield)
- [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#modelmultiplechoicefield)
- [`ModelChoiceField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#modelchoicefield)

Die folgenden Argumente sind bei den meisten Feldern verfügbar und besitzen sinnvolle Standardwerte:

- [`required`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#required): Ist der Wert `True`, darf das Feld weder leer bleiben noch den Wert `None` erhalten. Felder sind standardmäßig Pflichtfelder. Setzen Sie `required=False`, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label): Die Beschriftung, die bei der HTML-Darstellung des Felds verwendet wird. Ist keine [Beschriftung](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label) angegeben, erzeugt Django sie aus dem Feldnamen: Der erste Buchstabe wird großgeschrieben und Unterstriche werden durch Leerzeichen ersetzt (beispielsweise _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label-suffix): Standardmäßig erscheint nach der Beschriftung ein Doppelpunkt (beispielsweise Renewal date&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix festlegen.
- [`initial`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#initial): Der Anfangswert des Felds beim Anzeigen des Formulars.
- [`widget`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#widget): Das für die Darstellung verwendete Widget.
- [`help_text`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#help-text) (wie im obigen Beispiel): Zusätzlicher Text, der in Formularen angezeigt werden kann, um die Verwendung des Felds zu erklären.
- [`error_messages`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Bei Bedarf können Sie sie durch eigene Meldungen ersetzen.
- [`validators`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#validators): Eine Liste von Funktionen, die bei der Validierung des Felds aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#localize): Aktiviert die Lokalisierung von Formulareingaben (weitere Informationen finden Sie unter dem Link).
- [`disabled`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#disabled): Ist der Wert `True`, wird das Feld angezeigt, sein Wert kann jedoch nicht bearbeitet werden. Standardmäßig ist der Wert `False`.

#### Validierung

Django bietet zahlreiche Stellen, an denen Sie Daten validieren können. Am einfachsten validieren Sie ein einzelnes Feld, indem Sie die Methode `clean_<field_name>()` für dieses Feld überschreiben. Um beispielsweise zu prüfen, ob ein eingegebener Wert für `renewal_date` zwischen dem heutigen Datum und vier Wochen später liegt, implementieren wir `clean_renewal_date()` wie unten gezeigt.

Aktualisieren Sie Ihre Datei forms.py wie folgt:

```python
import datetime

from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Check if a date is not in the past.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Check if a date is in the allowed range (+4 weeks from today).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Remember to always return the cleaned data.
        return data
```

Beachten Sie zwei wichtige Punkte. Erstens rufen wir die Daten mit `self.cleaned_data['renewal_date']` ab und geben sie am Ende der Funktion zurück – unabhängig davon, ob wir sie geändert haben.
Durch diesen Schritt erhalten wir Daten, die mit den Standard-Validatoren bereinigt und von potenziell unsicheren Eingaben befreit sowie in den passenden Python-Standardtyp umgewandelt wurden (hier ein `datetime.date`-Objekt).

Zweitens lösen wir einen `ValidationError` aus, wenn ein Wert außerhalb des erlaubten Bereichs liegt. Dabei geben wir den Fehlertext an, der bei einer ungültigen Eingabe im Formular erscheinen soll.
Im obigen Beispiel wird dieser Text außerdem in eine der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/6.1/topics/i18n/translation/) von Django eingebettet: `gettext_lazy()` (als `_()` importiert). Das ist empfehlenswert, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Weitere Methoden und Beispiele zur Validierung finden Sie unter [Validierung von Formularen und Feldern](https://docs.djangoproject.com/en/6.1/ref/forms/validation/) in der Django-Dokumentation. Wenn beispielsweise mehrere Felder voneinander abhängen, können Sie die Funktion [Form.clean()](https://docs.djangoproject.com/en/6.1/ref/forms/api/#django.forms.Form.clean) überschreiben und dort ebenfalls einen `ValidationError` auslösen.

Damit ist das Formular für dieses Beispiel vollständig!

### URL-Konfiguration

Bevor wir die View erstellen, fügen wir eine URL-Konfiguration für die Seite zur Verlängerung von Ausleihen hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und übergibt die ID der `BookInstance` als Parameter namens `pk`. Das Muster stimmt nur überein, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können die aus der URL erfassten Daten beliebig benennen, da wir die View-Funktion vollständig selbst steuern. Wir verwenden keine generische Detail-View-Klasse, die Parameter mit bestimmten Namen erwartet. `pk` ist jedoch eine sinnvolle Konvention und steht für „primary key“ (Primärschlüssel)!

### View

Wie oben unter [Verarbeitung von Formularen in Django](#verarbeitung_von_formularen_in_django) erläutert, muss die View beim ersten Aufruf das Ausgangsformular darstellen. Bei späteren Aufrufen muss sie das Formular entweder bei ungültigen Daten mit Fehlermeldungen erneut anzeigen oder bei gültigen Daten die Eingaben verarbeiten und auf eine andere Seite weiterleiten. Dafür muss die View erkennen können, ob sie erstmals zur Darstellung des Ausgangsformulars oder erneut zur Validierung der Daten aufgerufen wird.

Bei Formularen, die Informationen mit einer `POST`-Anfrage an den Server senden, ist es üblich, den Anfragetyp `POST` zu prüfen (`if request.method == 'POST':`), um Validierungsanfragen zu erkennen. Eine `GET`-Anfrage kennzeichnet dann – über einen `else`-Zweig – den ersten Aufruf zum Erstellen des Formulars. Wenn Sie die Daten stattdessen mit einer `GET`-Anfrage senden möchten, können Sie zur Unterscheidung zwischen erstem und späterem Aufruf beispielsweise Formulardaten auslesen, etwa einen versteckten Wert im Formular.

Die Verlängerung einer Ausleihe verändert unsere Datenbank. Deshalb verwenden wir gemäß der üblichen Konvention `POST`-Anfragen.
Der folgende Codeausschnitt zeigt das gängige Muster für eine solche funktionsbasierte View.

```python
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
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

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Zunächst importieren wir unser Formular (`RenewBookForm`) und weitere nützliche Objekte und Methoden für die View-Funktion:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#get-object-or-404): Gibt anhand des Primärschlüsselwerts ein bestimmtes Objekt eines Modells zurück. Existiert der Datensatz nicht, wird eine `Http404`-Ausnahme ausgelöst („nicht gefunden“).
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/6.1/ref/request-response/#django.http.HttpResponseRedirect): Erzeugt eine Weiterleitung an eine bestimmte URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/6.1/ref/urlresolvers/#django.urls.reverse): Erzeugt aus dem Namen einer URL-Konfiguration und einer Reihe von Argumenten eine URL. Es ist das Python-Gegenstück zum Tag `url`, das wir in unseren Templates verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Verarbeitung von Datums- und Zeitwerten.

In der View verwenden wir zunächst das Argument `pk` mit `get_object_or_404()`, um die aktuelle `BookInstance` abzurufen. Existiert sie nicht, wird die View sofort beendet und die Seite zeigt einen „Nicht gefunden“-Fehler an.
Handelt es sich _nicht_ um eine `POST`-Anfrage (der `else`-Zweig), erstellen wir das Ausgangsformular. Dabei übergeben wir für das Feld `renewal_date` einen `initial`-Wert, der drei Wochen nach dem aktuellen Datum liegt.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erzeugen. Dabei geben wir das Template und einen Kontext mit unserem Formular an. In diesem Fall enthält der Kontext auch die `BookInstance`, damit das Template Informationen über das Buch anzeigen kann, dessen Ausleihe wir verlängern.

Bei einer `POST`-Anfrage dagegen erstellen wir unser `form`-Objekt und befüllen es mit den Daten aus der Anfrage. Dieser Vorgang heißt „Binden“ und ermöglicht die Validierung des Formulars.

Anschließend prüfen wir, ob das Formular gültig ist. Dadurch wird der gesamte Validierungscode für alle Felder ausgeführt: sowohl die allgemeine Prüfung, ob unser Datumsfeld tatsächlich ein gültiges Datum enthält, als auch die Funktion `clean_renewal_date()` unseres Formulars, die den zulässigen Datumsbereich prüft.

```python
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

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Ist das Formular ungültig, rufen wir `render()` erneut auf. Dieses Mal enthält das im Kontext übergebene Formular jedoch Fehlermeldungen.

Ist das Formular gültig, können wir die Daten über das Attribut `form.cleaned_data` verwenden (beispielsweise `data = form.cleaned_data['renewal_date']`). Hier speichern wir den Wert lediglich im Feld `due_back` des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Sie können die Formulardaten zwar auch direkt aus der Anfrage auslesen (beispielsweise mit `request.POST['renewal_date']` oder bei einer GET-Anfrage mit `request.GET['renewal_date']`), dies wird aber NICHT empfohlen. Die bereinigten Daten wurden von potenziell gefährlichen Inhalten befreit, validiert und in geeignete Python-Typen umgewandelt.

Der letzte Schritt der Formularverarbeitung in der View ist die Weiterleitung auf eine andere Seite, üblicherweise eine Erfolgsseite. Hier verwenden wir `HttpResponseRedirect` und `reverse()`, um zur View namens `'all-borrowed'` weiterzuleiten. Diese wurde als Übung in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt. Wenn Sie diese Seite nicht erstellt haben, können Sie stattdessen zur Startseite unter der URL `/` weiterleiten.

Damit ist die Formularverarbeitung selbst vollständig. Wir müssen den Zugriff auf die View allerdings noch auf angemeldete Bibliotheksmitarbeiter beschränken, die Ausleihen verlängern dürfen. Mit `@login_required` verlangen wir eine Anmeldung; mit dem Funktionsdekorator `@permission_required` und unserer bestehenden Berechtigung `can_mark_returned` steuern wir den Zugriff. Die Dekoratoren werden der Reihe nach verarbeitet. Eigentlich wäre eine neue Berechtigung `can_renew` für `BookInstance` sinnvoll. Um das Beispiel einfach zu halten, verwenden wir jedoch die vorhandene Berechtigung erneut.

Die vollständige View sieht somit wie folgt aus. Kopieren Sie sie an das Ende von **/catalog/views.py**.

```python
import datetime

from django.contrib.auth.decorators import login_required, permission_required
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

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

    # If this is a GET (or any other method) create the default form.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

### Das Template

Erstellen Sie das in der View angegebene Template **/catalog/templates/catalog/book_renew_librarian.html** und kopieren Sie den folgenden Code hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: \{{ book_instance.book.title }}</h1>
  <p>Borrower: \{{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %} >Due date: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    \{{ form }}
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

Das meiste dürfte Ihnen aus früheren Teilen des Tutorials vertraut sein.

Wir erweitern das Basis-Template und definieren anschließend den Inhaltsblock neu. Auf `\{{ book_instance }}` und dessen Variablen können wir zugreifen, weil das Objekt in der Funktion `render()` an den Kontext übergeben wurde. Damit zeigen wir den Buchtitel, die ausleihende Person und das ursprüngliche Rückgabedatum an.

Der Formularcode ist recht einfach. Zunächst deklarieren wir die `form`-Tags und geben an, wohin das Formular gesendet werden soll (`action`) und mit welcher `method` die Daten übermittelt werden (hier `POST`). Wie im Überblick über [HTML-Formulare](#html-formulare) am Anfang der Seite beschrieben, bedeutet ein leeres `action`-Attribut, dass die Formulardaten an die aktuelle Seiten-URL gesendet werden – genau das möchten wir. Innerhalb der Tags definieren wir das `submit`-Eingabeelement, mit dem Benutzer die Daten absenden können. Das direkt innerhalb der Formular-Tags eingefügte `{% csrf_token %}` ist Teil von Djangos Schutz vor Cross-Site Request Forgery.

> [!NOTE]
> Fügen Sie `{% csrf_token %}` in jedes Django-Template ein, das Daten mit `POST` sendet. Dadurch sinkt das Risiko, dass böswillige Benutzer Formulare missbrauchen.

Es bleibt nur die Template-Variable `\{{ form }}`, die wir über das Kontext-Dictionary an das Template übergeben haben.
In dieser Form sorgt sie für die Standarddarstellung aller Formularfelder einschließlich Beschriftungen, Widgets und Hilfetexten. Das Ergebnis sieht wie folgt aus:

```html
<div>
  <label for="id_renewal_date">Renewal date:</label>
  <div class="helptext" id="id_renewal_date_helptext">
    Enter a date between now and 4 weeks (default 3).
  </div>
  <input
    type="text"
    name="renewal_date"
    value="2023-11-08"
    required
    aria-describedby="id_renewal_date_helptext"
    id="id_renewal_date" />
</div>
```

> [!NOTE]
> Da wir nur ein Feld haben, fällt es möglicherweise nicht auf: Standardmäßig wird jedes Feld in einem eigenen `<div>`-Element dargestellt. Dieselbe Darstellung erhalten Sie, wenn Sie die Template-Variable `\{{ form.as_div }}` verwenden.

Wenn Sie ein ungültiges Datum eingeben, erscheint zusätzlich eine Liste der Fehler auf der Seite (siehe `error-list` unten).
Beachten Sie, wie das Attribut `aria-describedby` das Eingabefeld sowohl mit dem Hilfetext als auch mit der Fehlermeldung verknüpft, damit Screenreader beide vorlesen können.

```html
<div>
  <label for="id_renewal_date">Renewal date:</label>
  <div class="helptext" id="id_renewal_date_helptext">
    Enter a date between now and 4 weeks (default 3).
  </div>
  <ul class="error-list" id="id_renewal_date_error">
    <li>Invalid date - renewal in past</li>
  </ul>
  <input
    type="text"
    name="renewal_date"
    value="2023-11-08"
    required
    aria-invalid="true"
    aria-describedby="id_renewal_date_helptext id_renewal_date_error"
    id="id_renewal_date" />
</div>
```

#### Weitere Verwendungsmöglichkeiten der Formular-Template-Variable

Wenn Sie `\{{ form }}` verwenden, stellt Django jedes Feld innerhalb eines `<div>`-Elements dar. Sie können die Felder stattdessen auch als Tabellenzeilen (mit `\{{ form.as_table }}` innerhalb eines eigenen `<table>`-Elements), als Listeneinträge (mit `\{{ form.as_ul }}`) oder als Absätze (mit `\{{ form.as_p }}`) darstellen.

Um ein einzelnes Feld darzustellen, verwenden Sie dessen Methode `as_field_group`. Beispielsweise stellt [`\{{ form.renewal_date.as_field_group }}`](https://docs.djangoproject.com/en/6.1/ref/forms/api/#django.forms.BoundField.as_field_group) nur für das Feld `renewal_date` die Beschriftung, den Hilfetext, Fehler und das Widget dar – im selben Layout wie `\{{ form }}`.

Sie können auch jeden Teil des Formulars vollständig selbst darstellen, indem Sie mit der Punktnotation auf die Eigenschaften zugreifen. Für unser Feld `renewal_date` sind beispielsweise folgende Bestandteile einzeln verfügbar:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID der Beschriftung.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Felds.

Weitere Beispiele dafür, wie Sie Formulare in Templates manuell darstellen und dynamisch über Template-Felder iterieren, finden Sie unter [Arbeiten mit Formularen > Felder manuell darstellen](https://docs.djangoproject.com/en/6.1/topics/forms/#rendering-fields-manually) in der Django-Dokumentation.

### Die Seite testen

Wenn Sie die Übung in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) bearbeitet haben, verfügen Sie über eine View, die alle in der Bibliothek ausgeliehenen Bücher anzeigt und nur für Bibliotheksmitarbeiter sichtbar ist.
Sie könnte ungefähr so aussehen:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>All Borrowed Books</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }}) {% if user.is_staff %}- \{{ bookinst.borrower }}{% endif %}
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>There are no books borrowed.</p>
    {% endif %}
{% endblock %}
```

Sie können neben jedem Eintrag einen Link zur Seite für die Verlängerung hinzufügen, indem Sie den folgenden Template-Code an den obigen Text des Listeneintrags anhängen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}`-Schleife funktioniert, da dort der Wert `bookinst` definiert wird.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Ihr Testkonto benötigt die Berechtigung `catalog.can_mark_returned`, um den neu hinzugefügten Link „Renew“ zu sehen und die verlinkte Seite aufzurufen. Sie können dafür auch Ihr Superuser-Konto verwenden.

Alternativ können Sie eine Test-URL manuell zusammenstellen: `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/`. Eine gültige `bookinstance_id` erhalten Sie, indem Sie die Detailseite eines Buchs in Ihrer Bibliothek öffnen und den Wert des Felds `id` kopieren.

### Wie sieht das Ergebnis aus?

Wenn alles funktioniert, sieht das Ausgangsformular so aus:

![Ausgangsformular mit Buchdetails, Rückgabedatum, Verlängerungsdatum und einer Schaltfläche zum Absenden](forms_example_renew_default.png)

Mit einem ungültigen Wert sieht das Formular so aus:

![Formular zur Verlängerung einer Ausleihe mit Fehlermeldung: ungültiges Datum – Verlängerung um mehr als vier Wochen](forms_example_renew_invalid.png)

Die Liste aller ausgeliehenen Bücher mit Links zur Verlängerung sieht so aus:

![Liste aller ausgeliehenen Bücher mit Details und Links zur Verlängerung; überfällige Bücher sind rot markiert](forms_example_renew_allbooks.png)

## ModelForms

Eine `Form`-Klasse nach dem oben beschriebenen Ansatz zu erstellen, ist sehr flexibel. Sie können damit beliebige Formularseiten gestalten und sie einem oder mehreren Modellen zuordnen.

Wenn Ihr Formular jedoch lediglich die Felder eines _einzelnen_ Modells abbilden soll, enthält das Modell bereits die meisten benötigten Informationen: Felder, Beschriftungen, Hilfetexte und so weiter. Statt die Modelldefinitionen im Formular zu wiederholen, können Sie die Hilfsklasse [ModelForm](https://docs.djangoproject.com/en/6.1/topics/forms/modelforms/) verwenden, um das Formular aus dem Modell zu erzeugen. Dieses `ModelForm` lässt sich anschließend in Ihren Views genauso einsetzen wie eine gewöhnliche `Form`.

Unten sehen Sie ein einfaches `ModelForm` mit demselben Feld wie unser ursprüngliches `RenewBookForm`. Um das Formular zu erstellen, müssen Sie lediglich `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der aufzunehmenden Modell-`fields` hinzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Mit `fields = '__all__'` können Sie auch alle Felder in das Formular aufnehmen. Alternativ können Sie mit `exclude` (anstelle von `fields`) die Modellfelder angeben, die _nicht_ aufgenommen werden sollen.
>
> Keiner der beiden Ansätze wird empfohlen: Neu zum Modell hinzugefügte Felder erscheinen dann automatisch im Formular, ohne dass der Entwickler mögliche Sicherheitsfolgen unbedingt berücksichtigt hat.

> [!NOTE]
> Das mag kaum einfacher aussehen als die Verwendung einer `Form` – und bei nur einem Feld ist es das auch nicht. Bei vielen Feldern kann es den erforderlichen Codeumfang jedoch erheblich verringern!

Die übrigen Informationen stammen aus den Definitionen der Modellfelder, beispielsweise Beschriftungen, Widgets, Hilfetexte und Fehlermeldungen. Passen diese nicht genau, können wir sie in unserer `class Meta` überschreiben. Dazu geben wir ein Dictionary an, das das zu ändernde Feld und seinen neuen Wert enthält. In diesem Formular möchten wir beispielsweise die Beschriftung „_Renewal date_“ statt der aus dem Feldnamen abgeleiteten Standardbeschriftung _Due Back_ verwenden. Auch der Hilfetext soll auf diesen Anwendungsfall zugeschnitten sein.
Das folgende `Meta` zeigt, wie Sie diese Werte überschreiben. Falls die Standardwerte nicht ausreichen, können Sie auf ähnliche Weise `widgets` und `error_messages` festlegen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Für die Validierung können Sie genauso vorgehen wie bei einer gewöhnlichen `Form`: Definieren Sie eine Funktion namens `clean_<field_name>()` und lösen Sie bei ungültigen Werten `ValidationError`-Ausnahmen aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` statt `renewal_date` heißt.
Diese Änderung ist erforderlich, weil das entsprechende Feld in `BookInstance` `due_back` heißt.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       # Check if a date is not in the past.
       if data < datetime.date.today():
           raise ValidationError(_('Invalid date - renewal in past'))

       # Check if a date is in the allowed range (+4 weeks from today).
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

       # Remember to always return the cleaned data.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Renewal date')}
        help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Die obige Klasse `RenewBookModelForm` ist nun funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie können sie überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` einsetzen. Aktualisieren Sie dabei auch den Namen der entsprechenden Formularvariablen von `renewal_date` zu `due_back`, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Views zum Bearbeiten

Der Algorithmus zur Formularverarbeitung in unserer funktionsbasierten View folgt einem äußerst häufigen Muster für Views zum Bearbeiten von Formularen. Django nimmt Ihnen einen Großteil dieses wiederkehrenden Codes ab: Es stellt [generische Views zum Bearbeiten](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/) bereit, mit denen sich modellbasierte Views zum Erstellen, Bearbeiten und Löschen umsetzen lassen. Diese übernehmen nicht nur das Verhalten der View, sondern erzeugen aus dem Modell auch automatisch die Formularklasse (ein `ModelForm`).

> [!NOTE]
> Neben den hier beschriebenen Views zum Bearbeiten gibt es die Klasse [FormView](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/#formview). Hinsichtlich Flexibilität und Programmieraufwand liegt sie zwischen unserer funktionsbasierten View und den anderen generischen Views. Bei Verwendung von `FormView` müssen Sie Ihre `Form` weiterhin selbst erstellen, aber nicht alle üblichen Schritte der Formularverarbeitung implementieren. Stattdessen stellen Sie lediglich eine Funktion bereit, die aufgerufen wird, sobald die übermittelten Daten als gültig erkannt wurden.

In diesem Abschnitt erstellen wir mit generischen Views zum Bearbeiten Seiten, auf denen `Author`-Datensätze unserer Bibliothek erstellt, bearbeitet und gelöscht werden können. Damit setzen wir grundlegende Teile der Admin-Website erneut um. Das kann nützlich sein, wenn Sie Admin-Funktionen flexibler anbieten möchten, als es mit der Admin-Website möglich ist.

### Views

Öffnen Sie die View-Datei (**/catalog/views.py**) und hängen Sie den folgenden Codeblock an:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.db.models import RestrictedError
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Author

class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': datetime.date(2023, 11, 11)}
    permission_required = 'catalog.add_author'

class AuthorUpdate(PermissionRequiredMixin, UpdateView):
    model = Author
    # Not recommended (potential security issue if more fields added)
    fields = '__all__'
    permission_required = 'catalog.change_author'

class AuthorDelete(PermissionRequiredMixin, DeleteView):
    model = Author
    success_url = reverse_lazy('authors')
    permission_required = 'catalog.delete_author'

    def form_valid(self, form):
        try:
            self.object.delete()
            return HttpResponseRedirect(self.success_url)
        except RestrictedError:
            return HttpResponseRedirect(
                reverse("author-delete", kwargs={"pk": self.object.pk})
            )
```

Wie Sie sehen, leiten Sie die Views zum Erstellen, Aktualisieren und Löschen von `CreateView`, `UpdateView` beziehungsweise `DeleteView` ab und legen jeweils das zugehörige Modell fest.
Außerdem beschränken wir den Aufruf dieser Views auf angemeldete Benutzer mit den jeweiligen Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die Views zum Erstellen und Aktualisieren müssen Sie auch angeben, welche Felder im Formular erscheinen sollen. Dabei gilt dieselbe Syntax wie für `ModelForm`. Hier zeigen wir sowohl die Angabe einzelner Felder als auch die Syntax für „alle“ Felder. Für jedes Feld können Sie außerdem Anfangswerte über ein Dictionary mit Paaren aus _Feldname_ und _Wert_ angeben. Zu Demonstrationszwecken setzen wir hier willkürlich ein Todesdatum; diesen Wert möchten Sie möglicherweise entfernen. Standardmäßig leiten diese Views nach erfolgreicher Verarbeitung auf eine Seite weiter, die den neu erstellten oder bearbeiteten Modelleintrag anzeigt. In unserem Fall ist das die Detail-View für Autoren, die wir in einem früheren Tutorial erstellt haben. Sie können ein anderes Weiterleitungsziel festlegen, indem Sie den Parameter `success_url` ausdrücklich definieren.

Die Klasse `AuthorDelete` muss keine Felder anzeigen, daher brauchen wir hier keine anzugeben.
Wir setzen außerdem eine `success_url` (wie oben gezeigt), weil Django nach dem erfolgreichen Löschen eines `Author` keine naheliegende Standard-URL für die Weiterleitung hat. Mit der Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/6.1/ref/urlresolvers/#reverse-lazy) leiten wir nach dem Löschen eines Autors zur Autorenliste weiter. `reverse_lazy()` ist eine verzögert ausgeführte Variante von `reverse()`, die wir hier verwenden, weil wir eine URL als Attribut einer klassenbasierten View angeben.

Wenn das Löschen von Autoren immer erfolgreich wäre, hätten wir damit alles erledigt.
Leider löst das Löschen eines `Author` eine [`RestrictedError`](https://docs.djangoproject.com/en/6.1/ref/exceptions/#django.db.models.RestrictedError)-Ausnahme aus, wenn dem Autor ein Buch zugeordnet ist. Das liegt daran, dass unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) für das `ForeignKey`-Feld des Autors `on_delete=models.RESTRICT` festlegt.
Um diesen Fall zu behandeln, überschreibt die View die Methode [`form_valid()`](https://docs.djangoproject.com/en/6.1/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid). Gelingt das Löschen des `Author`, leitet sie zur `success_url` weiter; andernfalls führt sie zurück zum selben Formular.
Im folgenden Abschnitt passen wir das Template so an, dass deutlich wird: Eine `Author`-Instanz, die in einem `Book` verwendet wird, kann nicht gelöscht werden.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**/catalog/urls.py**) und fügen Sie am Ende Folgendes hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts grundlegend Neues! Die Views sind Klassen und müssen daher über `.as_view()` aufgerufen werden. Auch die URL-Muster dürften Sie wiedererkennen. Für den erfassten Primärschlüsselwert müssen wir den Namen `pk` verwenden, da die View-Klassen diesen Parameternamen erwarten.

### Templates

Die Views zum Erstellen und Aktualisieren verwenden standardmäßig dasselbe Template, dessen Name sich vom Modell ableitet: `model_name_form.html`. Mit dem Feld `template_name_suffix` in Ihrer View können Sie das Suffix **\_form** ändern, beispielsweise durch `template_name_suffix = '_other_suffix'`.

Erstellen Sie die Template-Datei `/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}
<form action="" method="post">
  {% csrf_token %}
  \{{ form }}
  <input type="submit" value="Submit" />
</form>
{% endblock %}
```

Dies ähnelt unseren bisherigen Formularen und stellt die Felder mit `\{{ form }}` dar. Beachten Sie außerdem, dass wir erneut `{% csrf_token %}` einfügen, um unsere Formulare gegen CSRF-Angriffe zu schützen.

Die View zum Löschen erwartet ein Template mit einem Namen im Format `[model_name]_confirm_delete.html`. Auch hier können Sie das Suffix in Ihrer View mit `template_name_suffix` ändern.
Erstellen Sie die Template-Datei `/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author: \{{ author }}</h1>

{% if author.book_set.all %}

<p>You can't delete this author until all their books have been deleted:</p>
<ul>
  {% for book in author.book_set.all %}
    <li><a href="{% url 'book-detail' book.pk %}">\{{book}}</a> (\{{ book.bookinstance_set.count }})</li>
  {% endfor %}
</ul>

{% else %}
<p>Are you sure you want to delete the author?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" action="" value="Yes, delete.">
</form>
{% endif %}

{% endblock %}
```

Das Template dürfte Ihnen vertraut sein.
Es prüft zunächst, ob der Autor in Büchern verwendet wird. Ist dies der Fall, zeigt es die Liste der Bücher an, die vor dem Autorendatensatz gelöscht werden müssen.
Andernfalls zeigt es ein Formular an, in dem der Benutzer das Löschen des Autorendatensatzes bestätigen soll.

Zuletzt verknüpfen wir die Seiten mit der Seitenleiste.
Zunächst fügen wir dem _Basis-Template_ einen Link zum Erstellen eines Autors hinzu. Er soll auf allen Seiten für angemeldete Benutzer sichtbar sein, die als „Mitarbeiter“ gelten und die Berechtigung zum Erstellen von Autoren (`catalog.add_author`) besitzen.
Öffnen Sie **/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die Benutzern mit dieser Berechtigung den Link anzeigen – im selben Block wie den Link zu den ausgeliehenen Büchern („All Borrowed“).
Verweisen Sie dabei wie unten gezeigt über den Namen `'author-create'` auf die URL.

```django
{% if user.is_staff %}
<hr>
<ul class="sidebar-nav">
<li>Staff</li>
   <li><a href="{% url 'all-borrowed' %}">All borrowed</a></li>
{% if perms.catalog.add_author %}
   <li><a href="{% url 'author-create' %}">Create author</a></li>
{% endif %}
</ul>
{% endif %}
```

Die Links zum Aktualisieren und Löschen von Autoren fügen wir der Autorendetailseite hinzu.
Öffnen Sie **catalog/templates/catalog/author_detail.html** und hängen Sie folgenden Code an:

```django
{% block sidebar %}
  \{{ block.super }}

  {% if perms.catalog.change_author or perms.catalog.delete_author %}
  <hr>
  <ul class="sidebar-nav">
    {% if perms.catalog.change_author %}
      <li><a href="{% url 'author-update' author.id %}">Update author</a></li>
    {% endif %}
    {% if not author.book_set.all and perms.catalog.delete_author %}
      <li><a href="{% url 'author-delete' author.id %}">Delete author</a></li>
    {% endif %}
    </ul>
  {% endif %}

{% endblock %}
```

Dieser Block überschreibt den Block `sidebar` des Basis-Templates und bindet dessen ursprünglichen Inhalt mit `\{{ block.super }}` wieder ein.
Anschließend fügt er Links zum Aktualisieren oder Löschen des Autors hinzu – allerdings nur, wenn der Benutzer die erforderlichen Berechtigungen besitzt und der Autorendatensatz keinem Buch zugeordnet ist.

Die Seiten können jetzt getestet werden!

### Die Seite testen

Melden Sie sich zunächst mit einem Konto an, das Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren besitzt.

Öffnen Sie eine beliebige Seite und wählen Sie in der Seitenleiste „Create author“ (URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie im folgenden Screenshot aussehen.

![Beispielformular zum Erstellen eines Autors](forms_example_create_author.png)

Geben Sie Werte in die Felder ein und betätigen Sie **Submit**, um den Autorendatensatz zu speichern.
Anschließend sollten Sie zur Detailansicht des neuen Autors gelangen, etwa unter der URL `http://127.0.0.1:8000/catalog/author/10`.

![Detailansicht eines Autors mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link „Update author“ auswählen (beispielsweise unter `http://127.0.0.1:8000/catalog/author/10/update/`). Da die Seite genauso aussieht wie die zum Erstellen, zeigen wir keinen weiteren Screenshot.

Wählen Sie schließlich auf der Detailseite in der Seitenleiste „Delete author“, um den Autor zu löschen.
Wenn der Autorendatensatz in keinem Buch verwendet wird, sollte Django die unten gezeigte Löschseite anzeigen.
Betätigen Sie „**Yes, delete.**“, um den Datensatz zu entfernen und zur Liste aller Autoren zu gelangen.

![Formular mit einer Option zum Löschen des Autors](forms_example_delete_author.png)

## Probieren Sie es selbst

Erstellen Sie Formulare, mit denen `Book`-Datensätze erstellt, bearbeitet und gelöscht werden können. Sie können dieselbe Struktur wie für `Author` verwenden. Denken Sie beim Löschen daran, dass ein `Book` erst gelöscht werden kann, wenn alle zugehörigen `BookInstance`-Datensätze gelöscht wurden. Verwenden Sie außerdem die richtigen Berechtigungen.
Wenn Ihr Template **book_form.html** lediglich eine umbenannte Kopie von **author_form.html** ist, sieht die neue Seite zum Erstellen eines Buchs wie im folgenden Screenshot aus:

![Formular mit Feldern für Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann kompliziert sein! Django erleichtert es erheblich, indem es programmatische Möglichkeiten zum Deklarieren, Darstellen und Validieren von Formularen bereitstellt. Darüber hinaus bietet Django generische Views zum Bearbeiten von Formularen, die _fast die gesamte_ Arbeit übernehmen können, um Seiten zum Erstellen, Bearbeiten und Löschen von Datensätzen eines einzelnen Modells bereitzustellen.

Mit Formularen lässt sich noch sehr viel mehr machen (siehe [Siehe auch](#siehe_auch) unten). Sie sollten nun aber verstehen, wie Sie einfache Formulare und Code zur Formularverarbeitung in Ihre eigenen Websites einfügen.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/6.1/topics/forms/) (Django-Dokumentation)
- [Ihre erste Django-App schreiben, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/6.1/intro/tutorial04/#write-a-minimal-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/6.1/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/6.1/ref/forms/fields/) (Django-Dokumentation)
- [Validierung von Formularen und Feldern](https://docs.djangoproject.com/en/6.1/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Views](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/6.1/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Views zum Bearbeiten](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
