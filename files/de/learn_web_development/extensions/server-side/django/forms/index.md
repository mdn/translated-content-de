---
title: "Django-Tutorial Teil 9: Mit Formularen arbeiten"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: d0d002817fbb057e80a4f7b8670b09cc80250516
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten. Insbesondere lernen Sie die einfachste Möglichkeit kennen, Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website): Bibliotheksmitarbeitende sollen Bücher verlängern sowie Autoren mithilfe eigener Formulare erstellen, aktualisieren und löschen können, statt dafür die Admin-Anwendung zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie haben alle vorherigen Themen des Tutorials abgeschlossen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie Formulare schreiben, um Informationen von Benutzern entgegenzunehmen und die Datenbank zu aktualisieren.
        Verstehen, wie generische klassenbasierte Bearbeitungsansichten das Erstellen von Formularen für ein einzelnes Modell erheblich vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern beziehungsweise Widgets auf einer Webseite. Damit lassen sich Informationen von Benutzern erfassen und an einen Server übermitteln. Formulare sind eine flexible Möglichkeit, Benutzereingaben zu erfassen, denn für viele Datentypen stehen passende Widgets zur Verfügung: Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlfelder und weitere. Formulare ermöglichen außerdem eine vergleichsweise sichere Datenübertragung an den Server, da wir Daten in `POST`-Anfragen mit Schutz vor Cross-Site Request Forgery senden können.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind uns bereits welche auf der Django-Admin-Seite begegnet. Der folgende Screenshot zeigt beispielsweise ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)-Modelle mit mehreren Auswahllisten und Textfeldern.

![Admin-Seite: Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server validieren und ordnungsgemäß bereinigen – gegebenenfalls auch im Browser –, das Formular bei Fehlern erneut mit Fehlermeldungen anzeigen, übermittelte Daten verarbeiten und den Benutzern schließlich den Erfolg der Aktion mitteilen. _Django Forms_ nehmen Ihnen bei all diesen Schritten viel Arbeit ab: Das Framework ermöglicht es, Formulare und ihre Felder programmatisch zu definieren und diese Objekte anschließend sowohl zur Erzeugung des Formular-HTML als auch für einen Großteil der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen verschiedene Möglichkeiten, Formulare zu erstellen und mit ihnen zu arbeiten. Insbesondere erfahren Sie, wie generische Bearbeitungsansichten den Aufwand für Formulare zur Bearbeitung Ihrer Modelle deutlich verringern. Dabei erweitern wir unsere Anwendung _LocalLibrary_ um ein Formular, mit dem Bibliotheksmitarbeitende ausgeliehene Bücher verlängern können. Außerdem erstellen wir Seiten zum Anlegen, Bearbeiten und Löschen von Büchern und Autoren. Damit bilden wir eine einfache Version des oben gezeigten Formulars zur Buchbearbeitung nach.

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem Textfeld zur Eingabe des Namens eines „Teams“ und der zugehörigen Beschriftung:

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

Hier gibt es nur ein Textfeld für den Teamnamen. Ein Formular _kann_ jedoch beliebig viele weitere Eingabeelemente und zugehörige Beschriftungen enthalten. Das Attribut `type` eines Felds bestimmt, welches Widget angezeigt wird. Mit `name` und `id` wird das Feld in JavaScript/CSS/HTML identifiziert, während `value` den Anfangswert bei der ersten Anzeige festlegt. Die passende Beschriftung des Teamfelds wird mit dem Tag `label` angegeben (siehe „Enter name“ oben). Dessen Feld `for` enthält den `id`-Wert des zugehörigen `input`.

Die `submit`-Eingabe wird standardmäßig als Schaltfläche angezeigt. Durch Anklicken werden die Daten aller anderen Eingabeelemente des Formulars an den Server gesendet – in diesem Fall nur das Feld `team_name`. Die Formularattribute legen die HTTP-`method` für die Übertragung und das Ziel auf dem Server (`action`) fest:

- `action`: Die Ressource beziehungsweise URL, an die die Daten beim Absenden des Formulars zur Verarbeitung gesendet werden. Ist dieses Attribut nicht gesetzt oder enthält es eine leere Zeichenfolge, wird das Formular an die URL der aktuellen Seite gesendet.
- `method`: Die HTTP-Methode für die Datenübertragung: _post_ oder _get_.
  - Die Methode `POST` sollte immer verwendet werden, wenn die Daten eine Änderung an der Serverdatenbank bewirken. Sie lässt sich besser gegen Cross-Site-Request-Forgery-Angriffe absichern.
  - Die Methode `GET` sollte nur für Formulare verwendet werden, die Benutzerdaten nicht verändern, etwa Suchformulare. Sie empfiehlt sich, wenn die URL als Lesezeichen gespeichert oder geteilt werden soll.

Der Server stellt zunächst den Anfangszustand des Formulars dar – entweder mit leeren Feldern oder mit vorbelegten Werten. Nachdem der Benutzer die Schaltfläche zum Absenden betätigt hat, empfängt der Server die Formularwerte vom Webbrowser und muss sie validieren. Enthält das Formular ungültige Daten, sollte der Server es erneut anzeigen: gültige Felder mit den eingegebenen Werten und ungültige Felder mit Hinweisen auf das jeweilige Problem. Sobald eine Anfrage mit ausschließlich gültigen Formulardaten eingeht, kann der Server die entsprechende Aktion ausführen, beispielsweise die Daten speichern, ein Suchergebnis zurückgeben oder eine Datei hochladen, und anschließend den Benutzer informieren.

Wie Sie sich vorstellen können, ist es aufwendig, das HTML zu erstellen, zurückgesendete Daten zu validieren, eingegebene Werte bei Bedarf zusammen mit Fehlermeldungen erneut anzuzeigen und bei gültigen Daten die gewünschte Aktion auszuführen. Django erleichtert diese Arbeit erheblich, indem es wiederkehrende Aufgaben und Code übernimmt!

## Verarbeitung von Formularen in Django

Django verarbeitet Formulare mit denselben Techniken, die wir in früheren Tutorials zur Anzeige von Informationen über unsere Modelle kennengelernt haben: Die View empfängt eine Anfrage, führt die erforderlichen Aktionen aus – einschließlich des Lesens von Modelldaten – und erzeugt anschließend eine HTML-Seite aus einem Template. Diesem übergeben wir einen _Kontext_ mit den anzuzeigenden Daten. Zusätzlich muss der Server nun aber auch Benutzereingaben verarbeiten und die Seite bei Fehlern erneut anzeigen können.

Das folgende Ablaufdiagramm zeigt, wie Django Formularanfragen verarbeitet. Es beginnt mit einer Anfrage für eine Seite, die ein Formular enthält (grün dargestellt).

![Aktualisiertes Ablaufdiagramm zur Formularverarbeitung.](form_handling_-_standard.png)

Aus dem Diagramm ergeben sich die wichtigsten Schritte der Formularverarbeitung in Django:

1. Das Standardformular anzeigen, wenn es zum ersten Mal angefordert wird.
   - Beim Erstellen eines neuen Datensatzes kann das Formular leere Felder enthalten. Es kann aber auch mit Anfangswerten vorbelegt sein, etwa beim Ändern eines Datensatzes oder wenn sinnvolle Standardwerte vorliegen.
   - Zu diesem Zeitpunkt gilt das Formular als _ungebunden_, da es keinen Benutzereingaben zugeordnet ist – auch wenn es Anfangswerte enthalten kann.

2. Daten aus einer abgesendeten Anfrage empfangen und an das Formular binden.
   - Durch diese Bindung stehen die Benutzereingaben und etwaige Fehler zur Verfügung, wenn das Formular erneut angezeigt werden muss.

3. Die Daten bereinigen und validieren.
   - Beim Bereinigen werden Eingabefelder von potenziell schädlichen Inhalten befreit, beispielsweise von ungültigen Zeichen, die zum Senden bösartiger Inhalte an den Server dienen könnten. Außerdem werden die Werte in einheitliche Python-Typen umgewandelt.
   - Bei der Validierung wird geprüft, ob die Werte für das jeweilige Feld geeignet sind – etwa ob ein Datum im zulässigen Bereich liegt oder ein Wert nicht zu kurz oder zu lang ist.

4. Falls Daten ungültig sind, das Formular mit den eingegebenen Werten und Fehlermeldungen für die betroffenen Felder erneut anzeigen.
5. Falls alle Daten gültig sind, die erforderlichen Aktionen ausführen, etwa Daten speichern, eine E-Mail senden, ein Suchergebnis zurückgeben oder eine Datei hochladen.
6. Nach Abschluss aller Aktionen den Benutzer auf eine andere Seite weiterleiten.

Django bietet verschiedene Werkzeuge und Ansätze für diese Aufgaben. Die wichtigste Grundlage ist die Klasse `Form`, die sowohl die Erzeugung von Formular-HTML als auch die Bereinigung und Validierung von Daten vereinfacht. Im nächsten Abschnitt erklären wir anhand einer Seite zur Verlängerung von Büchern, wie Formulare funktionieren.

> [!NOTE]
> Wenn Sie verstehen, wie `Form` verwendet wird, können Sie auch Djangos übergeordnete Framework-Klassen für Formulare leichter nachvollziehen.

## Formular zur Buchverlängerung mit einer Form und einer funktionsbasierten View

Als Nächstes fügen wir eine Seite hinzu, auf der Bibliotheksmitarbeitende ausgeliehene Bücher verlängern können. Dazu erstellen wir ein Formular zur Eingabe eines Datums. Das Feld erhält einen Anfangswert drei Wochen nach dem aktuellen Datum – der üblichen Ausleihdauer. Eine zusätzliche Validierung verhindert, dass ein Datum in der Vergangenheit oder zu weit in der Zukunft eingegeben wird. Ist das Datum gültig, schreiben wir es in das Feld `BookInstance.due_back` des betreffenden Datensatzes.

Das Beispiel verwendet eine funktionsbasierte View und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem Projekt _LocalLibrary_ vornehmen müssen.

### Form

Die Klasse `Form` bildet das Herzstück der Formularverarbeitung in Django. Sie definiert die Formularfelder, deren Anordnung, Widgets, Beschriftungen, Anfangswerte und zulässige Werte sowie – nach der Validierung – die Fehlermeldungen für ungültige Felder. Die Klasse stellt außerdem Methoden bereit, um sich selbst in Templates in vordefinierten Formaten wie Tabellen oder Listen darzustellen oder den Wert eines einzelnen Elements abzurufen. Letzteres ermöglicht eine fein abgestimmte manuelle Darstellung.

#### Eine Form deklarieren

Die Syntax zum Deklarieren einer `Form` ähnelt stark derjenigen für ein `Model`. Beide verwenden dieselben Feldtypen und einige ähnliche Parameter. Das ist sinnvoll, denn in beiden Fällen muss jedes Feld den richtigen Datentyp verarbeiten, auf gültige Werte beschränkt sein und eine Beschreibung für Anzeige und Dokumentation besitzen.

Formulare werden in der Datei **forms.py** im Anwendungsverzeichnis deklariert. Erstellen und öffnen Sie **/catalog/forms.py**. Um eine `Form` zu erstellen, importieren wir die Bibliothek `forms`, leiten eine Klasse von `Form` ab und deklarieren ihre Felder. Eine sehr einfache Formularklasse für die Buchverlängerung sieht wie folgt aus. Fügen Sie sie Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

Hier verwenden wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#datefield) zur Eingabe des Verlängerungsdatums. Es wird in HTML zunächst leer dargestellt und besitzt die Standardbeschriftung „_Renewal date:_“ sowie den Hilfetext „_Enter a date between now and 4 weeks (default 3)._“. Da keine weiteren optionalen Argumente angegeben sind, akzeptiert das Feld Datumsangaben gemäß den [input_formats](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024) und MM/DD/YY (10/25/24). Zur Darstellung wird das Standard-[widget](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#widget) [DateInput](https://docs.djangoproject.com/en/6.1/ref/forms/widgets/#django.forms.DateInput) verwendet.

Es gibt viele weitere Formularfeldtypen. Die meisten werden Ihnen wegen ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen bekannt vorkommen:

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

- [`required`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#required): Bei `True` darf das Feld weder leer bleiben noch den Wert `None` erhalten. Standardmäßig sind Felder erforderlich. Mit `required=False` lassen Sie leere Werte im Formular zu.
- [`label`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label): Die Beschriftung, die bei der HTML-Darstellung des Felds verwendet wird. Wird kein [label](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label) angegeben, erzeugt Django eines aus dem Feldnamen: Der erste Buchstabe wird großgeschrieben und Unterstriche werden durch Leerzeichen ersetzt, beispielsweise _Renewal date_.
- [`label_suffix`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#label-suffix): Standardmäßig erscheint nach der Beschriftung ein Doppelpunkt, beispielsweise Renewal date&ZeroWidthSpace;**:**. Mit diesem Argument können Sie ein anderes Suffix festlegen.
- [`initial`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#initial): Der Anfangswert des Felds bei der Anzeige des Formulars.
- [`widget`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#widget): Das Widget für die Darstellung.
- [`help_text`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#help-text) (wie im obigen Beispiel): Zusätzlicher Text, der im Formular angezeigt werden kann, um die Verwendung des Felds zu erklären.
- [`error_messages`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#error-messages): Fehlermeldungen für das Feld. Bei Bedarf können Sie diese durch eigene Meldungen ersetzen.
- [`validators`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#validators): Funktionen, die bei der Validierung des Felds aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#localize): Aktiviert die Lokalisierung von Formulareingaben. Weitere Informationen finden Sie unter dem Link.
- [`disabled`](https://docs.djangoproject.com/en/6.1/ref/forms/fields/#disabled): Ist der Wert `True`, wird das Feld angezeigt, sein Wert kann aber nicht bearbeitet werden. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, Daten zu validieren. Am einfachsten validieren Sie ein einzelnes Feld, indem Sie für dieses Feld die Methode `clean_<field_name>()` überschreiben. Beispielsweise können wir mit `clean_renewal_date()` wie unten gezeigt prüfen, ob ein eingegebener Wert für `renewal_date` zwischen dem aktuellen Datum und vier Wochen danach liegt.

Aktualisieren Sie Ihre Datei **forms.py** wie folgt:

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

Dabei sind zwei Dinge wichtig. Erstens rufen wir die Daten über `self.cleaned_data['renewal_date']` ab und geben sie am Ende der Funktion zurück – unabhängig davon, ob wir sie geändert haben. So erhalten wir Daten, die mithilfe der Standardvalidatoren bereinigt und von potenziell unsicheren Eingaben befreit wurden. Außerdem wurden sie in den passenden Python-Standardtyp umgewandelt, hier ein `datetime.date`-Objekt.

Zweitens lösen wir einen `ValidationError` aus, wenn ein Wert außerhalb des zulässigen Bereichs liegt. Dabei geben wir den Fehlertext an, der bei einem ungültigen Wert im Formular erscheinen soll. Im obigen Beispiel wird dieser Text zusätzlich mit einer der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/6.1/topics/i18n/translation/) von Django umschlossen: `gettext_lazy()` (als `_()` importiert). Das ist empfehlenswert, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Unter [Form and field validation](https://docs.djangoproject.com/en/6.1/ref/forms/validation/) in der Django-Dokumentation finden Sie zahlreiche weitere Methoden und Beispiele zur Formularvalidierung. Wenn beispielsweise mehrere Felder voneinander abhängen, können Sie die Funktion [Form.clean()](https://docs.djangoproject.com/en/6.1/ref/forms/api/#django.forms.Form.clean) überschreiben und ebenfalls einen `ValidationError` auslösen.

Damit ist das Formular für dieses Beispiel vollständig!

### URL-Konfiguration

Bevor wir die View erstellen, fügen wir eine URL-Konfiguration für die Seite zur Buchverlängerung hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und übergibt die ID der `BookInstance` als Parameter `pk`. Das Muster stimmt nur überein, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können den erfassten URL-Daten einen beliebigen Namen geben, da wir die View-Funktion vollständig selbst kontrollieren. Wir verwenden keine generische Detailansichtsklasse, die einen bestimmten Parameternamen erwartet. `pk` ist als Abkürzung für „primary key“ allerdings eine sinnvolle Konvention!

### View

Wie oben unter [Verarbeitung von Formularen in Django](#verarbeitung_von_formularen_in_django) erläutert, muss die View beim ersten Aufruf das Standardformular darstellen. Bei weiteren Aufrufen muss sie entweder das Formular mit Fehlermeldungen erneut anzeigen, wenn die Daten ungültig sind, oder gültige Daten verarbeiten und auf eine neue Seite weiterleiten. Dafür muss die View unterscheiden können, ob sie erstmals zur Darstellung des Standardformulars oder später zur Validierung der Daten aufgerufen wird.

Bei Formularen, die Informationen mit einer `POST`-Anfrage an den Server senden, prüft die View üblicherweise den Anfragetyp `POST` (`if request.method == 'POST':`), um Validierungsanfragen zu erkennen. Eine `GET`-Anfrage wird über eine `else`-Bedingung als erstmalige Anforderung des Formulars behandelt. Wenn Sie Daten stattdessen mit einer `GET`-Anfrage übermitteln möchten, können Sie anhand der Formulardaten zwischen dem ersten und späteren Aufrufen unterscheiden, beispielsweise über einen versteckten Wert im Formular.

Bei der Buchverlängerung werden Daten in unsere Datenbank geschrieben. Deshalb verwenden wir wie üblich den Ansatz mit einer `POST`-Anfrage. Der folgende Codeausschnitt zeigt das dafür typische Muster einer funktionsbasierten View.

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

Zunächst importieren wir unser Formular (`RenewBookForm`) sowie einige weitere Objekte und Methoden, die in der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/6.1/topics/http/shortcuts/#get-object-or-404): Gibt anhand des Primärschlüssels ein bestimmtes Modellobjekt zurück und löst eine `Http404`-Ausnahme („nicht gefunden“) aus, falls der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/6.1/ref/request-response/#django.http.HttpResponseRedirect): Erstellt eine Weiterleitung zu einer bestimmten URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/6.1/ref/urlresolvers/#django.urls.reverse): Erzeugt aus dem Namen einer URL-Konfiguration und einer Reihe von Argumenten eine URL. Dies ist das Python-Gegenstück zum Tag `url`, das wir in unseren Templates verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Verarbeitung von Datums- und Zeitangaben.

In der View verwenden wir zunächst das Argument `pk` mit `get_object_or_404()`, um die betreffende `BookInstance` abzurufen. Existiert sie nicht, wird die View sofort beendet und die Seite zeigt einen „Nicht gefunden“-Fehler an. Handelt es sich _nicht_ um eine `POST`-Anfrage – dieser Fall wird vom `else`-Zweig behandelt –, erstellen wir das Standardformular und übergeben für das Feld `renewal_date` einen `initial`-Wert, der drei Wochen nach dem aktuellen Datum liegt.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erzeugen. Dabei geben wir das Template und einen Kontext mit unserem Formular an. Hier enthält der Kontext auch die `BookInstance`, damit wir im Template Informationen über das zu verlängernde Buch anzeigen können.

Bei einer `POST`-Anfrage erstellen wir dagegen unser `form`-Objekt und befüllen es mit den Daten aus der Anfrage. Dieser Vorgang heißt „Binden“ und ermöglicht die Validierung des Formulars.

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

Ist das Formular ungültig, rufen wir `render()` erneut auf. Diesmal enthält das im Kontext übergebene Formular jedoch Fehlermeldungen.

Ist das Formular gültig, können wir seine Daten über das Attribut `form.cleaned_data` verwenden, beispielsweise mit `data = form.cleaned_data['renewal_date']`. Hier speichern wir das Datum im Wert `due_back` des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Sie können zwar auch direkt über die Anfrage auf Formulardaten zugreifen, beispielsweise mit `request.POST['renewal_date']` oder bei einer GET-Anfrage mit `request.GET['renewal_date']`. Das wird jedoch **nicht** empfohlen. Die bereinigten Daten wurden gesäubert, validiert und in gut verwendbare Python-Typen umgewandelt.

Im letzten Schritt der Formularverarbeitung leitet die View auf eine andere Seite weiter, üblicherweise eine Bestätigungsseite. Hier verwenden wir `HttpResponseRedirect` und `reverse()`, um zur View mit dem Namen `'all-borrowed'` weiterzuleiten. Diese wurde als Aufgabe unter [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt. Falls Sie diese Seite nicht erstellt haben, können Sie stattdessen zur Startseite unter `/` weiterleiten.

Damit ist die Formularverarbeitung vollständig. Allerdings müssen wir den Zugriff auf die View noch auf angemeldete Bibliotheksmitarbeitende mit der Berechtigung zur Buchverlängerung beschränken. Mit `@login_required` verlangen wir, dass der Benutzer angemeldet ist. Der Funktionsdekorator `@permission_required` prüft unsere vorhandene Berechtigung `can_mark_returned`; die Dekoratoren werden der Reihe nach verarbeitet. Eigentlich wäre es sinnvoll, in `BookInstance` eine neue Berechtigung (`can_renew`) anzulegen. Um das Beispiel einfach zu halten, verwenden wir jedoch die vorhandene Berechtigung erneut.

Die vollständige View sieht daher wie folgt aus. Kopieren Sie sie an das Ende von **/catalog/views.py**.

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

Erstellen Sie das in der View referenzierte Template (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code hinein:

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

Das meiste dürfte Ihnen aus früheren Tutorials bekannt sein.

Wir erweitern das Basistemplate und definieren anschließend den Inhaltsblock neu. Auf `\{{ book_instance }}` und dessen Variablen können wir zugreifen, weil dieses Objekt in der Funktion `render()` an den Kontext übergeben wurde. Damit zeigen wir den Buchtitel, die ausleihende Person und das ursprüngliche Rückgabedatum an.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags und geben an, wohin das Formular gesendet wird (`action`) und mit welcher `method` die Daten übermittelt werden – hier `POST`. Wie im Überblick über [HTML-Formulare](#html-formulare) zu Beginn der Seite erläutert, führt eine leere `action` dazu, dass die Formulardaten an die aktuelle URL der Seite gesendet werden. Genau das möchten wir. Innerhalb der Tags definieren wir die `submit`-Eingabe, über die Benutzer die Daten absenden können. Das direkt innerhalb der Formulartags eingefügte `{% csrf_token %}` ist Teil von Djangos Schutz vor Cross-Site Request Forgery.

> [!NOTE]
> Fügen Sie `{% csrf_token %}` in jedes Django-Template ein, das Daten mit `POST` übermittelt. So verringern Sie das Risiko, dass böswillige Benutzer Formulare missbrauchen.

Es bleibt die Template-Variable `\{{ form }}`, die wir über das Kontext-Dictionary an das Template übergeben haben. Sie erzeugt in dieser Form die Standarddarstellung aller Formularfelder einschließlich ihrer Beschriftungen, Widgets und Hilfetexte. Die Ausgabe sieht wie folgt aus:

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
> Da wir nur ein Feld verwenden, ist es möglicherweise nicht offensichtlich: Standardmäßig wird jedes Feld in einem eigenen `<div>`-Element definiert. Dieselbe Darstellung erhalten Sie mit der Template-Variablen `\{{ form.as_div }}`.

Wenn Sie ein ungültiges Datum eingeben, erscheint zusätzlich eine Liste mit Fehlern auf der Seite (siehe `errorlist` unten). Beachten Sie, dass das Attribut `aria-describedby` die Eingabe sowohl mit dem Hilfetext als auch mit der Fehlermeldung verknüpft. Dadurch können Screenreader beides vorlesen.

```html
<div>
  <label for="id_renewal_date">Renewal date:</label>
  <div class="helptext" id="id_renewal_date_helptext">
    Enter a date between now and 4 weeks (default 3).
  </div>
  <ul class="errorlist" id="id_renewal_date_error">
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

#### Weitere Möglichkeiten, die Formularvariable im Template zu verwenden

Wenn Sie `\{{ form }}` verwenden, stellt Django jedes Feld innerhalb eines `<div>`-Elements dar. Sie können jedes Feld auch als Tabellenzeile (mit `\{{ form.as_table }}` innerhalb eines eigenen `<table>`-Elements), als Listeneintrag (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) darstellen.

Um nur ein Feld darzustellen, verwenden Sie dessen Methode `as_field_group`. Beispielsweise stellt [`\{{ form.renewal_date.as_field_group }}`](https://docs.djangoproject.com/en/6.1/ref/forms/api/#django.forms.BoundField.as_field_group) die Beschriftung, den Hilfetext, die Fehler und das Widget allein für das Feld `renewal_date` dar – in derselben Anordnung wie `\{{ form }}`.

Sie können auch jeden Teil des Formulars vollständig selbst darstellen, indem Sie mit Punktschreibweise auf seine Eigenschaften zugreifen. Für das Feld `renewal_date` sind beispielsweise folgende Bestandteile separat verfügbar:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID der Beschriftung.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Felds.

Weitere Beispiele für die manuelle Darstellung von Formularen und das dynamische Durchlaufen von Template-Feldern finden Sie unter [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/6.1/topics/forms/#rendering-fields-manually) in der Django-Dokumentation.

### Die Seite testen

Wenn Sie die Aufgabe aus [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) gelöst haben, verfügen Sie über eine View, die alle ausgeliehenen Bücher der Bibliothek anzeigt und nur für Bibliotheksmitarbeitende sichtbar ist. Die View könnte ungefähr so aussehen:

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

Neben jedem Eintrag können wir einen Link zur Buchverlängerung ergänzen, indem wir den folgenden Template-Code an den Text des obigen Listeneintrags anhängen. Beachten Sie, dass dieser Code nur innerhalb der `{% for %}`-Schleife funktioniert, da der Wert `bookinst` dort definiert wird.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Ihr Testkonto benötigt die Berechtigung `catalog.can_mark_returned`, um den neu hinzugefügten Link „Renew“ zu sehen und die verlinkte Seite aufzurufen. Sie können dafür beispielsweise Ihr Superuser-Konto verwenden.

Alternativ können Sie eine Test-URL selbst zusammensetzen: `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/`. Eine gültige `bookinstance_id` finden Sie, indem Sie in Ihrer Bibliothek die Detailseite eines Buchs aufrufen und das Feld `id` kopieren.

### Wie sieht das Ergebnis aus?

Wenn alles funktioniert, sieht das Standardformular so aus:

![Standardformular mit Buchdetails, Rückgabedatum, Verlängerungsdatum und einer Schaltfläche zum Absenden](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Formular zur Buchverlängerung mit einer Fehlermeldung: ungültiges Datum – die Verlängerung liegt mehr als vier Wochen in der Zukunft](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Links zur Verlängerung sieht so aus:

![Liste aller Bücher mit ihren Details und Links zur Verlängerung. Überfällige Rückgaben sind rot markiert.](forms_example_renew_allbooks.png)

## ModelForms

Eine `Form`-Klasse nach dem oben beschriebenen Ansatz zu erstellen, ist sehr flexibel. Sie können damit beliebige Formularseiten gestalten und mit einem oder mehreren Modellen verknüpfen.

Wenn Sie jedoch lediglich ein Formular benötigen, das die Felder eines _einzelnen_ Modells abbildet, enthält dieses Modell bereits die meisten benötigten Informationen: Felder, Beschriftungen, Hilfetexte und so weiter. Statt die Modelldefinitionen im Formular zu wiederholen, können Sie mit der Hilfsklasse [ModelForm](https://docs.djangoproject.com/en/6.1/topics/forms/modelforms/) das Formular aus Ihrem Modell erstellen. Eine solche `ModelForm` lässt sich in Views genauso verwenden wie eine gewöhnliche `Form`.

Unten sehen Sie eine einfache `ModelForm`, die dasselbe Feld wie unsere ursprüngliche `RenewBookForm` enthält. Zum Erstellen des Formulars müssen Sie lediglich `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der aufzunehmenden Modell-`fields` hinzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Mit `fields = '__all__'` können Sie auch alle Felder in das Formular aufnehmen. Alternativ können Sie mit `exclude` statt `fields` festlegen, welche Modellfelder _nicht_ enthalten sein sollen.
>
> Beide Ansätze werden nicht empfohlen: Neue Felder, die dem Modell hinzugefügt werden, erscheinen dann automatisch im Formular, möglicherweise ohne dass die Entwickler die Sicherheitsfolgen berücksichtigt haben.

> [!NOTE]
> Das wirkt vielleicht nicht viel einfacher als die Verwendung einer `Form` – und bei nur einem Feld ist es das auch nicht. Bei vielen Feldern kann es die benötigte Codemenge jedoch erheblich reduzieren!

Die übrigen Informationen stammen aus den Definitionen der Modellfelder, beispielsweise Beschriftungen, Widgets, Hilfetexte und Fehlermeldungen. Falls die Vorgaben nicht passen, können wir sie in `class Meta` überschreiben. Dazu geben wir ein Dictionary mit dem betreffenden Feld und seinem neuen Wert an. In diesem Formular möchten wir beispielsweise die Beschriftung „_Renewal date_“ statt der aus dem Feldnamen abgeleiteten Standardbeschriftung _Due Back_ verwenden. Auch der Hilfetext soll auf diesen Anwendungsfall zugeschnitten sein. Das folgende `Meta` zeigt, wie Sie diese Angaben überschreiben. Ebenso können Sie `widgets` und `error_messages` festlegen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Für die Validierung verwenden Sie denselben Ansatz wie bei einer gewöhnlichen `Form`: Sie definieren eine Funktion namens `clean_<field_name>()` und lösen bei ungültigen Werten eine `ValidationError`-Ausnahme aus. Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` statt `renewal_date` heißt. Das ist erforderlich, weil auch das entsprechende Feld in `BookInstance` den Namen `due_back` trägt.

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

Die obige Klasse `RenewBookModelForm` ist nun funktional gleichwertig mit unserer ursprünglichen `RenewBookForm`. Sie können sie überall dort importieren und verwenden, wo bisher `RenewBookForm` verwendet wird. Voraussetzung ist, dass Sie auch den entsprechenden Feldnamen im Formular von `renewal_date` auf `due_back` ändern, wie bei der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Algorithmus zur Formularverarbeitung in unserer funktionsbasierten View ist ein äußerst verbreitetes Muster für Bearbeitungsansichten. Django nimmt Ihnen einen Großteil dieses wiederkehrenden Codes ab: Es stellt [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/) bereit, mit denen sich modellbasierte Ansichten zum Erstellen, Bearbeiten und Löschen umsetzen lassen. Sie übernehmen nicht nur das Verhalten der View, sondern erzeugen aus dem Modell auch automatisch die Formularklasse – eine `ModelForm`.

> [!NOTE]
> Neben den hier beschriebenen Bearbeitungsansichten gibt es auch die Klasse [FormView](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/#formview). Hinsichtlich Flexibilität und Programmieraufwand liegt sie zwischen unserer funktionsbasierten View und den anderen generischen Views. Mit `FormView` müssen Sie Ihre `Form` weiterhin selbst erstellen, jedoch nicht das gesamte Standardmuster zur Formularverarbeitung implementieren. Stattdessen stellen Sie lediglich eine Implementierung der Funktion bereit, die aufgerufen wird, sobald feststeht, dass die übermittelten Daten gültig sind.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen unserer Bibliothek anzulegen. Damit bilden wir einige Funktionen der Admin-Seite in einfacher Form nach. Das kann nützlich sein, wenn Sie Verwaltungsfunktionen flexibler anbieten möchten, als es die Admin-Seite ermöglicht.

### Views

Öffnen Sie die View-Datei (**/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende ein:

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

Wie Sie sehen, leiten Sie für Ansichten zum Erstellen, Aktualisieren beziehungsweise Löschen Klassen von `CreateView`, `UpdateView` und `DeleteView` ab und legen jeweils das zugehörige Modell fest. Außerdem beschränken wir den Zugriff auf angemeldete Benutzer mit der jeweiligen Berechtigung `add_author`, `change_author` oder `delete_author`.

Für die Ansichten zum Erstellen und Aktualisieren müssen Sie außerdem angeben, welche Felder im Formular angezeigt werden sollen. Dabei gilt dieselbe Syntax wie bei `ModelForm`. Hier zeigen wir sowohl die Auflistung einzelner Felder als auch die Syntax für „alle“ Felder. Anfangswerte können Sie über ein Dictionary aus Paaren von _Feldname_ und _Wert_ festlegen. Zu Demonstrationszwecken setzen wir hier willkürlich das Todesdatum; diesen Wert sollten Sie gegebenenfalls entfernen. Standardmäßig leiten diese Views nach erfolgreicher Verarbeitung zu einer Seite weiter, die den neu erstellten oder bearbeiteten Modelleintrag anzeigt. Bei uns ist das die Detailansicht des Autors, die wir in einem früheren Tutorial erstellt haben. Eine andere Zielseite können Sie mit dem Parameter `success_url` ausdrücklich festlegen.

Die Klasse `AuthorDelete` muss keine Felder anzeigen; daher müssen auch keine angegeben werden. Wir setzen außerdem eine `success_url` (wie oben gezeigt), da es für Django nach dem erfolgreichen Löschen eines `Author` keine naheliegende Standard-URL gibt. Mit der Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/6.1/ref/urlresolvers/#reverse-lazy) leiten wir nach dem Löschen eines Autors zur Autorenliste weiter. `reverse_lazy()` ist eine verzögert ausgeführte Variante von `reverse()` und wird hier verwendet, weil die URL einem Attribut einer klassenbasierten View zugewiesen wird.

Wenn sich Autoren immer problemlos löschen ließen, wären wir damit fertig. Beim Löschen eines `Author` wird jedoch eine [`RestrictedError`](https://docs.djangoproject.com/en/6.1/ref/exceptions/#django.db.models.RestrictedError)-Ausnahme ausgelöst, wenn dem Autor ein Buch zugeordnet ist: Unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) legt für das `ForeignKey`-Feld des Autors `on_delete=models.RESTRICT` fest. Um diesen Fall zu behandeln, überschreibt die View die Methode [`form_valid()`](https://docs.djangoproject.com/en/6.1/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid). Gelingt das Löschen des `Author`, leitet sie zur `success_url` weiter; andernfalls kehrt sie zum selben Formular zurück. Im Template werden wir außerdem deutlich machen, dass eine `Author`-Instanz nicht gelöscht werden kann, solange sie in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**/catalog/urls.py**) und fügen Sie am Ende die folgende Konfiguration hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts grundlegend Neues! Die Views sind Klassen und müssen deshalb über `.as_view()` aufgerufen werden. Auch die URL-Muster dürften Ihnen bekannt vorkommen. Für den erfassten Primärschlüssel müssen wir den Namen `pk` verwenden, da die View-Klassen diesen Parameternamen erwarten.

### Templates

Die Views zum Erstellen und Aktualisieren verwenden standardmäßig dasselbe Template. Sein Name leitet sich vom Modell ab: `model_name_form.html`. Mit dem Feld `template_name_suffix` in Ihrer View können Sie das Suffix **\_form** ändern, beispielsweise mit `template_name_suffix = '_other_suffix'`.

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

Dieses Template ähnelt unseren bisherigen Formularen und stellt die Felder mit `\{{ form }}` dar. Beachten Sie auch, dass wir wieder `{% csrf_token %}` angeben, um die Formulare gegen CSRF-Angriffe zu schützen.

Die View zum Löschen erwartet ein Template mit einem Namen im Format `[model_name]_confirm_delete.html`. Auch hier können Sie das Suffix über `template_name_suffix` in Ihrer View ändern. Erstellen Sie die Template-Datei `/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text hinein.

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

Das Template dürfte Ihnen vertraut sein. Zunächst prüft es, ob der Autor in Büchern verwendet wird. Falls ja, zeigt es die Bücher an, die vor dem Löschen des Autorendatensatzes gelöscht werden müssen. Andernfalls erscheint ein Formular, in dem der Benutzer das Löschen des Autorendatensatzes bestätigen soll.

Zum Schluss binden wir die Seiten in die Seitenleiste ein. Zunächst fügen wir im _Basistemplate_ einen Link zum Erstellen von Autoren hinzu. Er soll auf allen Seiten für angemeldete Benutzer sichtbar sein, die zum „Personal“ gehören und die Berechtigung `catalog.add_author` besitzen. Öffnen Sie **/catalog/templates/base_generic.html** und ergänzen Sie die Zeilen, die diesen Benutzern das Erstellen von Autoren ermöglichen – im selben Block wie der Link zu den ausgeliehenen Büchern („All Borrowed“). Verweisen Sie dabei wie unten gezeigt über den Namen `'author-create'` auf die URL.

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

Die Links zum Aktualisieren und Löschen von Autoren fügen wir auf der Autorendetailseite hinzu. Öffnen Sie **catalog/templates/catalog/author_detail.html** und hängen Sie den folgenden Code an:

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

Dieser Block überschreibt den Block `sidebar` des Basistemplates und bindet mit `\{{ block.super }}` dessen ursprünglichen Inhalt ein. Anschließend fügt er Links zum Aktualisieren oder Löschen des Autors hinzu, sofern der Benutzer die passenden Berechtigungen besitzt und der Autorendatensatz keinem Buch zugeordnet ist.

Die Seiten können jetzt getestet werden!

### Die Seite testen

Melden Sie sich zunächst mit einem Konto an, das Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren besitzt.

Rufen Sie eine beliebige Seite auf und wählen Sie in der Seitenleiste „Create author“ aus. Die URL lautet `http://127.0.0.1:8000/catalog/author/create/`. Die Seite sollte wie im folgenden Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte in die Felder ein und klicken Sie auf **Submit**, um den Autorendatensatz zu speichern. Anschließend sollten Sie zur Detailansicht Ihres neuen Autors gelangen, mit einer URL wie `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetails mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link „Update author“ auswählen. Seine URL sieht etwa so aus: `http://127.0.0.1:8000/catalog/author/10/update/`. Einen Screenshot zeigen wir nicht, da die Seite genauso aussieht wie die Seite zum Erstellen.

Wählen Sie schließlich auf der Detailseite in der Seitenleiste „Delete author“, um den Autorendatensatz zu löschen. Wird der Autor in keinem Buch verwendet, sollte Django die unten gezeigte Löschseite anzeigen. Klicken Sie auf **Yes, delete.**, um den Datensatz zu entfernen und zur Liste aller Autoren zu gelangen.

![Formular mit der Möglichkeit, einen Autor zu löschen](forms_example_delete_author.png)

## Stellen Sie sich der Herausforderung

Erstellen Sie Formulare zum Anlegen, Bearbeiten und Löschen von `Book`-Datensätzen. Sie können dieselbe Struktur wie für `Authors` verwenden. Denken Sie beim Löschen daran, dass ein `Book` erst gelöscht werden kann, wenn alle zugehörigen `BookInstance`-Datensätze gelöscht wurden. Verwenden Sie außerdem die richtigen Berechtigungen.

Wenn Ihr Template **book_form.html** lediglich eine umbenannte Kopie von **author_form.html** ist, sieht die neue Seite zum Erstellen eines Buchs wie im folgenden Screenshot aus:

![Screenshot eines Formulars mit Feldern für Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Formulare zu erstellen und zu verarbeiten kann kompliziert sein! Django erleichtert dies durch programmatische Möglichkeiten, Formulare zu deklarieren, darzustellen und zu validieren. Darüber hinaus bietet Django generische Bearbeitungsansichten, die _fast die gesamte Arbeit_ beim Definieren von Seiten zum Erstellen, Bearbeiten und Löschen von Datensätzen einer einzelnen Modellinstanz übernehmen.

Mit Formularen lässt sich noch viel mehr machen – sehen Sie sich dazu die Liste unter [Siehe auch](#siehe_auch) an. Sie sollten nun jedoch verstehen, wie Sie einfache Formulare und Code zu deren Verarbeitung in Ihre eigenen Websites einbauen.

## Siehe auch

- [Mit Formularen arbeiten](https://docs.djangoproject.com/en/6.1/topics/forms/) (Django-Dokumentation)
- [Ihre erste Django-Anwendung schreiben, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/6.1/intro/tutorial04/#write-a-minimal-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/6.1/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/6.1/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/6.1/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Views](https://docs.djangoproject.com/en/6.1/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/6.1/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/6.1/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
