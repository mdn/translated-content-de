---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten. Insbesondere erfahren Sie, wie Sie auf einfache Weise Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen schreiben. Dazu erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website): Bibliothekare sollen Bücher verlängern und Autoren über eigene Formulare erstellen, aktualisieren und löschen können, statt dafür die Admin-Anwendung zu verwenden.

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
      <th scope="row">Lernziel:</th>
      <td>
        Sie verstehen, wie Sie Formulare schreiben, um Informationen von Benutzern zu erfassen und die Datenbank zu aktualisieren.
        Sie verstehen, wie generische klassenbasierte Ansichten zum Bearbeiten das Erstellen von Formularen für ein einzelnes Modell erheblich vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern und Widgets auf einer Webseite. Damit können Informationen von Benutzern erfasst und an einen Server übermittelt werden. Formulare sind eine flexible Möglichkeit, Benutzereingaben zu erfassen: Für viele Datentypen gibt es geeignete Widgets, darunter Textfelder, Kontrollkästchen, Optionsfelder und Datumsauswahlfelder. Sie sind auch eine vergleichsweise sichere Möglichkeit, Daten an den Server zu senden, da sie `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery ermöglichen.

Wir haben in diesem Tutorial zwar noch keine Formulare erstellt, sind ihnen aber bereits auf der Django-Admin-Website begegnet. Der folgende Screenshot zeigt beispielsweise ein Formular zum Bearbeiten eines unserer [Book-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models), das aus mehreren Auswahllisten und Textfeldern besteht.

![Admin-Website: Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, eingegebene Daten auf dem Server validieren und bereinigen (möglicherweise auch im Browser), das Formular bei ungültigen Feldern mit Fehlermeldungen erneut anzeigen, erfolgreich übermittelte Daten verarbeiten und den Benutzern schließlich eine Rückmeldung geben. _Django Forms_ nehmen Ihnen bei all diesen Schritten viel Arbeit ab: Das Framework ermöglicht es, Formulare und ihre Felder programmatisch zu definieren und mit diesen Objekten sowohl den HTML-Code zu erzeugen als auch einen großen Teil der Validierung und Benutzerinteraktion zu übernehmen.

In diesem Tutorial zeigen wir Ihnen verschiedene Möglichkeiten, Formulare zu erstellen und zu verwenden. Insbesondere erfahren Sie, wie generische Ansichten zum Bearbeiten den Aufwand für Formulare zur Bearbeitung Ihrer Modelle deutlich verringern. Dabei erweitern wir unsere _LocalLibrary_-Anwendung um ein Formular, mit dem Bibliothekare Ausleihen verlängern können. Außerdem erstellen wir Seiten zum Anlegen, Bearbeiten und Löschen von Büchern und Autoren – einschließlich einer einfachen Version des oben gezeigten Formulars zur Buchbearbeitung.

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem Textfeld zur Eingabe eines Teamnamens und der zugehörigen Beschriftung:

![Beispiel für ein einfaches Namensfeld in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert. Es enthält mindestens ein `input`-Element mit `type="submit"`.

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

Hier gibt es nur ein Textfeld für den Teamnamen, ein Formular _kann_ aber beliebig viele weitere Eingabeelemente mit zugehörigen Beschriftungen enthalten. Das Attribut `type` eines Feldes bestimmt, welches Widget angezeigt wird. Mit `name` und `id` wird das Feld in JavaScript, CSS und HTML identifiziert; `value` legt seinen Anfangswert bei der ersten Anzeige fest. Die zugehörige Beschriftung wird mit dem `label`-Tag angegeben (oben „Enter name“). Dessen `for`-Attribut enthält den `id`-Wert des zugehörigen `input`-Elements.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt. Durch einen Klick darauf werden die Daten aller anderen Eingabeelemente des Formulars an den Server gesendet – hier nur die des Feldes `team_name`. Die Formularattribute legen die dafür verwendete HTTP-`method` und das Ziel auf dem Server (`action`) fest:

- `action`: Die Ressource beziehungsweise URL, an die die Daten beim Absenden des Formulars zur Verarbeitung gesendet werden. Fehlt das Attribut oder enthält es eine leere Zeichenfolge, wird das Formular an die URL der aktuellen Seite gesendet.
- `method`: Die zum Senden der Daten verwendete HTTP-Methode: _post_ oder _get_.
  - `POST` sollte immer verwendet werden, wenn die Daten eine Änderung an der Datenbank des Servers bewirken, da sich damit ein besserer Schutz vor Cross-Site-Request-Forgery-Angriffen erreichen lässt.
  - `GET` sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern, beispielsweise Suchformulare. Es empfiehlt sich, wenn die URL als Lesezeichen gespeichert oder geteilt werden können soll.

Der Server stellt zunächst das Formular im Ausgangszustand dar – mit leeren Feldern oder bereits eingetragenen Anfangswerten. Nachdem ein Benutzer auf die Schaltfläche zum Absenden geklickt hat, erhält der Server die Formulardaten aus dem Webbrowser und muss sie validieren. Sind Daten ungültig, sollte der Server das Formular erneut anzeigen: Die Eingaben in gültigen Feldern bleiben erhalten, und bei ungültigen Feldern erläutern Fehlermeldungen das Problem. Sobald alle Formulardaten gültig sind, kann der Server die entsprechende Aktion ausführen, etwa die Daten speichern, Suchergebnisse zurückgeben oder eine Datei hochladen, und anschließend den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, erfordert es einigen Aufwand, das HTML zu erstellen, die übermittelten Daten zu validieren, Eingaben bei Bedarf zusammen mit Fehlermeldungen erneut anzuzeigen und mit gültigen Daten die gewünschte Aktion auszuführen. Django erleichtert dies erheblich, indem es Ihnen einen Teil der aufwendigen und wiederkehrenden Arbeit abnimmt.

## Verarbeitung von Formularen in Django

Django verarbeitet Formulare mit denselben Techniken, die Sie in früheren Teilen des Tutorials zur Anzeige von Informationen über Modelle kennengelernt haben: Die Ansicht empfängt eine Anfrage, führt die erforderlichen Aktionen aus – darunter gegebenenfalls das Lesen von Modelldaten – und erzeugt anschließend mithilfe einer Vorlage eine HTML-Seite. Der Vorlage wird ein _Kontext_ mit den anzuzeigenden Daten übergeben. Zusätzlich muss der Server nun aber auch Benutzereingaben verarbeiten und die Seite bei Fehlern erneut anzeigen können.

Das folgende Ablaufdiagramm zeigt, wie Django Formularanfragen verarbeitet. Es beginnt mit einer Anfrage für eine Seite mit einem Formular (grün dargestellt).

![Aktualisiertes Ablaufdiagramm zur Formularverarbeitung.](form_handling_-_standard.png)

Aus dem Diagramm ergeben sich die wichtigsten Schritte der Formularverarbeitung in Django:

1. Bei der ersten Anfrage eines Benutzers das Ausgangsformular anzeigen.
   - Wenn ein neuer Datensatz erstellt wird, können die Felder leer sein. Andernfalls können sie Anfangswerte enthalten, beispielsweise beim Ändern eines Datensatzes oder wenn sinnvolle Standardwerte verfügbar sind.
   - Das Formular gilt zu diesem Zeitpunkt als _ungebunden_, da ihm noch keine Benutzereingaben zugeordnet sind – auch wenn es Anfangswerte enthalten kann.

2. Daten aus einer Anfrage zum Absenden entgegennehmen und an das Formular binden.
   - Dadurch stehen die Benutzereingaben und etwaige Fehler zur Verfügung, wenn das Formular erneut angezeigt werden muss.

3. Die Daten bereinigen und validieren.
   - Bei der Bereinigung werden Eingabefelder von potenziell schädlichen Inhalten befreit, beispielsweise von ungültigen Zeichen, die für das Senden bösartiger Inhalte verwendet werden könnten. Außerdem werden die Daten in einheitliche Python-Typen umgewandelt.
   - Die Validierung prüft, ob die Werte für das jeweilige Feld geeignet sind, etwa ob ein Datum im zulässigen Bereich liegt oder ein Wert zu kurz oder zu lang ist.

4. Falls Daten ungültig sind, das Formular mit den eingegebenen Werten und Fehlermeldungen bei den betroffenen Feldern erneut anzeigen.
5. Falls alle Daten gültig sind, die erforderlichen Aktionen ausführen, beispielsweise Daten speichern, eine E-Mail senden, Suchergebnisse zurückgeben oder eine Datei hochladen.
6. Nach Abschluss aller Aktionen den Benutzer auf eine andere Seite weiterleiten.

Django bietet verschiedene Werkzeuge und Ansätze für diese Aufgaben. Die Grundlage bildet die Klasse `Form`, die sowohl das Erzeugen des Formular-HTML als auch die Bereinigung und Validierung der Daten vereinfacht. Im nächsten Abschnitt erläutern wir anhand einer Seite zur Verlängerung von Ausleihen, wie Formulare funktionieren.

> [!NOTE]
> Wenn Sie verstehen, wie `Form` verwendet wird, fällt Ihnen später auch die Arbeit mit Djangos übergeordneten Formularklassen leichter.

## Formular zur Verlängerung einer Ausleihe mit `Form` und einer funktionsbasierten Ansicht

Als Nächstes fügen wir eine Seite hinzu, auf der Bibliothekare ausgeliehene Bücher verlängern können. Dafür erstellen wir ein Formular zur Eingabe eines Datums. Als Anfangswert verwenden wir ein Datum drei Wochen nach dem aktuellen Tag – die übliche Ausleihfrist. Eine Validierung verhindert, dass ein Datum in der Vergangenheit oder zu weit in der Zukunft eingegeben wird. Ist das Datum gültig, schreiben wir es in das Feld `BookInstance.due_back` des betreffenden Datensatzes.

Für dieses Beispiel verwenden wir eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären die Funktionsweise von Formularen und die erforderlichen Änderungen an unserem _LocalLibrary_-Projekt.

### Formular

Die Klasse `Form` bildet das Herzstück von Djangos Formularverarbeitung. Sie legt die Felder des Formulars, deren Anordnung, Anzeige-Widgets, Beschriftungen, Anfangswerte und gültige Werte fest. Nach der Validierung enthält sie auch die Fehlermeldungen zu ungültigen Feldern. Außerdem stellt die Klasse Methoden bereit, um das Formular in Vorlagen mit vordefinierten Formaten – etwa als Tabelle oder Liste – darzustellen oder den Wert eines einzelnen Elements abzurufen. Letzteres ermöglicht eine präzise manuelle Darstellung.

#### Ein `Form` deklarieren

Die Syntax zur Deklaration eines `Form` ähnelt stark der eines `Model`. Beide verwenden dieselben Feldtypen und einige ähnliche Parameter. Das ist sinnvoll: In beiden Fällen muss jedes Feld die richtigen Datentypen verarbeiten, auf gültige Daten beschränkt sein und eine Beschreibung für die Anzeige oder Dokumentation besitzen.

Formulardefinitionen werden in der Datei forms.py im Verzeichnis der Anwendung gespeichert. Erstellen und öffnen Sie **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die Bibliothek `forms`, leiten eine Klasse von `Form` ab und deklarieren die Formularfelder. Fügen Sie Ihrer neuen Datei die folgende einfache Formularklasse für die Verlängerung von Ausleihen hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Beispiel gibt es ein einziges [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) für das Verlängerungsdatum. Im HTML wird es zunächst leer dargestellt, mit der Standardbeschriftung „_Renewal date:_“ und dem Hilfetext „_Enter a date between now and 4 weeks (default 3 weeks)._“. Da keine weiteren optionalen Argumente angegeben sind, akzeptiert das Feld Datumsangaben in den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats) YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024) und MM/DD/YY (10/25/24). Für die Darstellung wird das Standard-[Widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) verwendet.

Es gibt viele weitere Formularfeldtypen. Die meisten werden Ihnen aufgrund ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen bekannt vorkommen:

- [`BooleanField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#booleanfield)
- [`CharField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#charfield)
- [`ChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#choicefield)
- [`TypedChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#typedchoicefield)
- [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield)
- [`DateTimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datetimefield)
- [`DecimalField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#decimalfield)
- [`DurationField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#durationfield)
- [`EmailField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#emailfield)
- [`FileField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#filefield)
- [`FilePathField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#filepathfield)
- [`FloatField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#floatfield)
- [`ImageField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#imagefield)
- [`IntegerField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#integerfield)
- [`GenericIPAddressField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#genericipaddressfield)
- [`MultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#multiplechoicefield)
- [`TypedMultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#typedmultiplechoicefield)
- [`NullBooleanField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#nullbooleanfield)
- [`RegexField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#regexfield)
- [`SlugField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#slugfield)
- [`TimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#timefield)
- [`URLField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#urlfield)
- [`UUIDField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#uuidfield)
- [`ComboField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#combofield)
- [`MultiValueField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#multivaluefield)
- [`SplitDateTimeField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#splitdatetimefield)
- [`ModelMultipleChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#modelmultiplechoicefield)
- [`ModelChoiceField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#modelchoicefield)

Die meisten Felder unterstützen die folgenden Argumente, für die jeweils sinnvolle Standardwerte gelten:

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Bei `True` darf das Feld weder leer bleiben noch den Wert `None` erhalten. Felder sind standardmäßig Pflichtfelder; mit `required=False` erlauben Sie leere Werte im Formular.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Die Beschriftung, die bei der HTML-Darstellung des Feldes verwendet wird. Ist kein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben, erzeugt Django es aus dem Feldnamen: Der erste Buchstabe wird großgeschrieben und Unterstriche werden durch Leerzeichen ersetzt, beispielsweise _Renewal date_.
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig erscheint nach der Beschriftung ein Doppelpunkt, beispielsweise Renewal date&ZeroWidthSpace;**:**. Mit diesem Argument können Sie eine andere Zeichenfolge als Suffix festlegen.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert des Feldes bei der Anzeige des Formulars.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das zu verwendende Widget für die Darstellung.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel): Zusätzlicher Text, der im Formular angezeigt werden kann, um die Verwendung des Feldes zu erläutern.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Bei Bedarf können Sie diese durch eigene Meldungen ersetzen.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die bei der Validierung des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Aktiviert die Lokalisierung von Formulareingaben. Weitere Informationen finden Sie unter dem Link.
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Bei `True` wird das Feld angezeigt, sein Wert kann aber nicht bearbeitet werden. Standardmäßig ist der Wert `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, Daten zu validieren. Am einfachsten validieren Sie ein einzelnes Feld, indem Sie für dieses Feld die Methode `clean_<field_name>()` überschreiben. Beispielsweise können wir mit `clean_renewal_date()` wie unten gezeigt prüfen, ob ein eingegebener Wert für `renewal_date` zwischen dem aktuellen Datum und einem Datum in vier Wochen liegt.

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

Dabei sind zwei Punkte wichtig. Erstens rufen wir die Daten über `self.cleaned_data['renewal_date']` ab und geben sie am Ende der Funktion zurück, unabhängig davon, ob wir sie verändert haben. So erhalten wir Daten, die durch die Standardvalidatoren bereinigt und von potenziell unsicheren Eingaben befreit wurden. Außerdem sind sie bereits in den passenden Python-Standardtyp umgewandelt – hier ein `datetime.datetime`-Objekt.

Zweitens lösen wir einen `ValidationError` aus, wenn ein Wert außerhalb des zulässigen Bereichs liegt. Dabei geben wir den Fehlertext an, der bei einer ungültigen Eingabe im Formular erscheinen soll. Im obigen Beispiel wird dieser Text außerdem mit Djangos [Übersetzungsfunktion](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) `gettext_lazy()` umschlossen (importiert als `_()`). Das ist empfehlenswert, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Weitere Methoden und Beispiele zur Validierung von Formularen finden Sie in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Wenn beispielsweise mehrere Felder voneinander abhängen, können Sie die Funktion [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und dort ebenfalls einen `ValidationError` auslösen.

Damit ist das Formular für dieses Beispiel fertig!

### URL-Konfiguration

Bevor wir die Ansicht erstellen, fügen wir eine URL-Konfiguration für die Seite zur Verlängerung von Ausleihen hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und übergibt die ID der `BookInstance` als Parameter `pk`. Das Muster stimmt nur überein, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können die aus der URL erfassten Daten beliebig benennen, da wir die Ansichtsfunktion selbst definieren. Wir verwenden hier keine generische Detailansicht, die Parameter mit bestimmten Namen erwartet. `pk` ist jedoch eine sinnvolle Konvention und steht für „primary key“ (Primärschlüssel).

### Ansicht

Wie oben unter [Verarbeitung von Formularen in Django](#verarbeitung_von_formularen_in_django) beschrieben, muss die Ansicht beim ersten Aufruf das Ausgangsformular darstellen. Bei späteren Aufrufen muss sie entweder das Formular mit Fehlermeldungen erneut anzeigen, wenn die Daten ungültig sind, oder gültige Daten verarbeiten und zu einer anderen Seite weiterleiten. Dazu muss sie erkennen können, ob sie erstmals zur Darstellung des Formulars oder erneut zur Validierung aufgerufen wird.

Bei Formularen, die Informationen per `POST` an den Server senden, prüft die Ansicht üblicherweise den Anfragetyp: Mit `if request.method == 'POST':` erkennt sie Anfragen zur Formularvalidierung, während sie eine `GET`-Anfrage über einen `else`-Zweig als erstmaligen Aufruf zur Formularerstellung behandelt. Wenn Sie Ihre Daten per `GET` übermitteln möchten, wird zur Unterscheidung zwischen dem ersten und späteren Aufrufen häufig ein Formularwert gelesen, etwa ein verborgenes Feld.

Da die Verlängerung einer Ausleihe unsere Datenbank verändert, verwenden wir gemäß dieser Konvention `POST`. Der folgende Codeausschnitt zeigt das übliche Muster für eine solche funktionsbasierte Ansicht.

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

Zunächst importieren wir unser Formular (`RenewBookForm`) sowie weitere Objekte und Methoden, die in der Ansichtsfunktion benötigt werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Ruft anhand des Primärschlüssels ein bestimmtes Modellobjekt ab. Existiert der Datensatz nicht, wird eine `Http404`-Ausnahme ausgelöst.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Erzeugt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Erzeugt aus dem Namen einer URL-Konfiguration und einer Reihe von Argumenten eine URL. Es ist das Python-Gegenstück zum `url`-Tag, das wir in Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Verarbeitung von Datums- und Zeitangaben.

In der Ansicht verwenden wir zunächst das Argument `pk` in `get_object_or_404()`, um die betreffende `BookInstance` abzurufen. Existiert sie nicht, wird die Ansicht sofort beendet und die Seite zeigt einen Fehler an, dass der Datensatz nicht gefunden wurde. Handelt es sich _nicht_ um eine `POST`-Anfrage, erstellen wir im `else`-Zweig das Ausgangsformular und übergeben für das Feld `renewal_date` einen `initial`-Wert, der drei Wochen nach dem aktuellen Datum liegt.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erzeugen. Dabei geben wir die Vorlage und einen Kontext mit unserem Formular an. Der Kontext enthält außerdem die `BookInstance`, damit wir in der Vorlage Informationen über das Buch anzeigen können, dessen Ausleihe verlängert wird.

Bei einer `POST`-Anfrage erstellen wir dagegen das `form`-Objekt und füllen es mit den Daten aus der Anfrage. Dieser Vorgang heißt „Binden“ und ermöglicht die Validierung des Formulars.

Anschließend prüfen wir, ob das Formular gültig ist. Dabei wird der Validierungscode für alle Felder ausgeführt: sowohl die allgemeine Prüfung, ob das Datumsfeld ein gültiges Datum enthält, als auch die formularspezifische Funktion `clean_renewal_date()`, die den zulässigen Zeitraum prüft.

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

Ist das Formular ungültig, rufen wir `render()` erneut auf. Diesmal enthält das über den Kontext übergebene Formular Fehlermeldungen.

Ist es gültig, können wir über das Attribut `form.cleaned_data` auf die Daten zugreifen, beispielsweise mit `data = form.cleaned_data['renewal_date']`. Hier speichern wir das Datum im Feld `due_back` des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Sie können zwar auch direkt über die Anfrage auf Formulardaten zugreifen – beispielsweise mit `request.POST['renewal_date']` oder bei einer GET-Anfrage mit `request.GET['renewal_date']` –, dies wird jedoch **nicht empfohlen**. Die bereinigten Daten wurden geprüft, validiert und in Python-geeignete Typen umgewandelt.

Als letzten Schritt der Formularverarbeitung leitet die Ansicht auf eine andere Seite weiter, üblicherweise auf eine Bestätigungsseite. Hier verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` weiterzuleiten. Diese wurde als Übung in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt. Falls Sie diese Seite nicht erstellt haben, können Sie stattdessen zur Startseite unter der URL `/` weiterleiten.

Damit ist die Formularverarbeitung selbst vollständig. Allerdings müssen wir den Zugriff auf die Ansicht noch auf angemeldete Bibliothekare mit der Berechtigung zur Verlängerung von Ausleihen beschränken. Mit `@login_required` verlangen wir eine Anmeldung; mit dem Funktionsdekorator `@permission_required` und der vorhandenen Berechtigung `can_mark_returned` steuern wir den Zugriff. Dekoratoren werden der Reihe nach verarbeitet. Eigentlich wäre eine eigene Berechtigung (`can_renew`) für `BookInstance` sinnvoll. Damit das Beispiel einfach bleibt, verwenden wir aber die vorhandene Berechtigung.

Die vollständige Ansicht sieht daher wie folgt aus. Kopieren Sie sie an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

### Die Vorlage

Erstellen Sie die in der Ansicht angegebene Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Renew: \{{ book_instance.book.title }}</h1>
  <p>Borrower: \{{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %} >Due date: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Submit">
  </form>
{% endblock %}
```

Das meiste davon kennen Sie bereits aus den vorherigen Teilen des Tutorials.

Wir erweitern die Basisvorlage und definieren anschließend den Inhaltsblock neu. Auf `\{{ book_instance }}` und dessen Variablen können wir zugreifen, weil das Objekt in der Funktion `render()` an den Kontext übergeben wurde. Damit zeigen wir den Buchtitel, die ausleihende Person und das ursprüngliche Rückgabedatum an.

Der Formularcode ist recht einfach. Zunächst deklarieren wir die `form`-Tags und legen fest, wohin das Formular gesendet wird (`action`) und mit welcher `method` die Daten übermittelt werden – hier per `POST`. Wie im Überblick über [HTML-Formulare](#html-formulare) beschrieben, bewirkt ein leeres `action`-Attribut, dass die Formulardaten an die URL der aktuellen Seite gesendet werden. Genau das möchten wir hier. Innerhalb der Tags definieren wir das `submit`-Eingabeelement, mit dem Benutzer das Formular absenden können. Das direkt innerhalb der Formular-Tags eingefügte `{% csrf_token %}` ist Teil von Djangos Schutz vor Cross-Site-Request-Forgery.

> [!NOTE]
> Fügen Sie `{% csrf_token %}` in jede Django-Vorlage ein, die Daten per `POST` übermittelt. Dadurch verringern Sie das Risiko, dass böswillige Benutzer Formulare missbrauchen.

Es bleibt die Vorlagenvariable `\{{ form }}`, die wir über das Kontext-Dictionary an die Vorlage übergeben haben. In der gezeigten Verwendung erzeugt sie die Standarddarstellung aller Formularfelder, einschließlich Beschriftungen, Widgets und Hilfetexten:

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Enter date between now and 4 weeks (default 3 weeks).
    </span>
  </td>
</tr>
```

> [!NOTE]
> Bei nur einem Feld fällt es vielleicht nicht auf: Standardmäßig wird jedes Feld in einer eigenen Tabellenzeile dargestellt. Dieselbe Darstellung erhalten Sie mit der Vorlagenvariable `\{{ form.as_table }}`.

Wenn Sie ein ungültiges Datum eingeben, erscheint zusätzlich eine Liste der Fehler auf der Seite (siehe `error-list` unten).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="error-list">
      <li>Invalid date - renewal in past</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Enter date between now and 4 weeks (default 3 weeks).
    </span>
  </td>
</tr>
```

#### Weitere Verwendungsmöglichkeiten der Formularvariable in Vorlagen

Mit `\{{ form.as_table }}` wird, wie oben gezeigt, jedes Feld als Tabellenzeile dargestellt. Sie können die Felder auch als Listeneinträge mit `\{{ form.as_ul }}` oder als Absätze mit `\{{ form.as_p }}` darstellen.

Sie können auch jeden Teil des Formulars selbst darstellen, indem Sie per Punktnotation auf seine Eigenschaften zugreifen. Für das Feld `renewal_date` sind beispielsweise folgende Bestandteile verfügbar:

- `\{{ form.renewal_date }}`: Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID der Beschriftung.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Weitere Beispiele zur manuellen Darstellung von Formularen in Vorlagen und zum dynamischen Durchlaufen von Vorlagenfeldern finden Sie unter [Arbeiten mit Formularen > Felder manuell darstellen](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die Übung in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) bearbeitet haben, verfügen Sie über eine Ansicht mit allen ausgeliehenen Büchern der Bibliothek. Sie ist nur für Bibliothekspersonal sichtbar. Die Ansicht könnte etwa so aussehen:

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

Mit dem folgenden Vorlagencode können wir neben jedem Eintrag einen Link zur Seite für die Verlängerung der Ausleihe hinzufügen. Beachten Sie, dass dieser Code nur innerhalb der `{% for %}`-Schleife funktioniert, weil dort der Wert `bookinst` definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Ihr Testkonto benötigt die Berechtigung `catalog.can_mark_returned`, um den neuen „Renew“-Link zu sehen und die verlinkte Seite aufzurufen. Sie können dafür beispielsweise Ihr Superuser-Konto verwenden.

Alternativ können Sie eine Test-URL manuell zusammensetzen: `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/`. Eine gültige `bookinstance_id` erhalten Sie, indem Sie in Ihrer Bibliothek die Detailseite eines Buches aufrufen und das Feld `id` kopieren.

### Wie sieht das Ergebnis aus?

Wenn alles funktioniert, sieht das Ausgangsformular so aus:

![Ausgangsformular mit Buchdetails, Rückgabedatum, Verlängerungsdatum und einer Schaltfläche zum Absenden](forms_example_renew_default.png)

Mit einem ungültigen Eingabewert sieht das Formular so aus:

![Dasselbe Formular mit einer Fehlermeldung: ungültiges Datum – Verlängerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Links zur Verlängerung sieht so aus:

![Liste der ausgeliehenen Bücher mit Details und Links zur Verlängerung; überfällige Bücher sind rot markiert](forms_example_renew_allbooks.png)

## ModelForms

Wenn Sie eine `Form`-Klasse wie oben beschrieben erstellen, sind Sie sehr flexibel: Sie können beliebige Formularseiten gestalten und sie mit einem oder mehreren Modellen verknüpfen.

Wenn Sie aber lediglich ein Formular benötigen, dessen Felder denen eines _einzelnen_ Modells entsprechen, enthält das Modell bereits die meisten benötigten Informationen: Felder, Beschriftungen, Hilfetexte und mehr. Statt diese Definitionen im Formular zu wiederholen, können Sie die Hilfsklasse [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) verwenden, um das Formular aus dem Modell zu erstellen. Ein solches `ModelForm` lässt sich anschließend in Ansichten genauso verwenden wie ein gewöhnliches `Form`.

Unten sehen Sie ein einfaches `ModelForm` mit demselben Feld wie unser ursprüngliches `RenewBookForm`. Für die Erstellung müssen Sie lediglich `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der einzuschließenden Modell-`fields` hinzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Mit `fields = '__all__'` können Sie alle Felder in das Formular aufnehmen. Alternativ können Sie mit `exclude` statt `fields` angeben, welche Modellfelder _nicht_ aufgenommen werden sollen.
>
> Beide Ansätze werden nicht empfohlen: Neu zum Modell hinzugefügte Felder erscheinen dann automatisch im Formular, ohne dass mögliche Sicherheitsfolgen unbedingt geprüft werden.

> [!NOTE]
> Das wirkt möglicherweise kaum einfacher als ein `Form` – bei nur einem Feld ist es das auch nicht. Bei vielen Feldern kann sich der erforderliche Code jedoch erheblich verringern.

Die übrigen Informationen stammen aus den Definitionen der Modellfelder, beispielsweise Beschriftungen, Widgets, Hilfetexte und Fehlermeldungen. Wenn deren Standardwerte nicht passen, können wir sie in `class Meta` überschreiben: Dazu geben wir ein Dictionary mit den zu ändernden Feldern und ihren neuen Werten an. In diesem Formular möchten wir für das Feld beispielsweise die Beschriftung „_Renewal date_“ statt der aus dem Feldnamen abgeleiteten Standardbeschriftung _Due Back_ verwenden. Auch der Hilfetext soll auf diesen Anwendungsfall zugeschnitten sein. Das folgende `Meta` zeigt, wie Sie diese Werte überschreiben. Auf dieselbe Weise können Sie `widgets` und `error_messages` festlegen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Für die Validierung können Sie genauso vorgehen wie bei einem gewöhnlichen `Form`: Sie definieren eine Funktion namens `clean_<field_name>()` und lösen bei ungültigen Werten eine `ValidationError`-Ausnahme aus. Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` und nicht `renewal_date` heißt. Diese Änderung ist erforderlich, da das entsprechende Feld in `BookInstance` den Namen `due_back` trägt.

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

Die obige Klasse `RenewBookModelForm` ist nun funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie können sie überall dort importieren und verwenden, wo bisher `RenewBookForm` eingesetzt wird. Dazu müssen Sie auch den zugehörigen Formularvariablennamen von `renewal_date` in `due_back` ändern, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Ansichten zum Bearbeiten

Der Algorithmus zur Formularverarbeitung aus unserem Beispiel mit einer funktionsbasierten Ansicht ist ein sehr häufiges Muster für Ansichten zum Bearbeiten von Daten. Django nimmt Ihnen einen Großteil dieses wiederkehrenden Codes ab: Es stellt [generische Ansichten zum Bearbeiten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) bereit, mit denen Sie modellbasierte Ansichten zum Erstellen, Bearbeiten und Löschen implementieren können. Sie übernehmen nicht nur das Verhalten der Ansicht, sondern erzeugen aus dem Modell automatisch auch die Formularklasse – ein `ModelForm`.

> [!NOTE]
> Neben den hier beschriebenen Ansichten zum Bearbeiten gibt es die Klasse [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview). Hinsichtlich Flexibilität und Programmieraufwand liegt sie zwischen unserer funktionsbasierten Ansicht und den anderen generischen Ansichten. Bei `FormView` müssen Sie Ihr `Form` weiterhin selbst erstellen, aber nicht das gesamte Standardmuster zur Formularverarbeitung implementieren. Stattdessen stellen Sie eine Funktion bereit, die aufgerufen wird, sobald feststeht, dass die übermittelten Daten gültig sind.

In diesem Abschnitt verwenden wir generische Ansichten zum Bearbeiten, um Seiten zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen in unserer Bibliothek anzulegen. Damit implementieren wir grundlegende Funktionen der Admin-Website selbst. Das kann nützlich sein, wenn Sie Admin-Funktionen flexibler anbieten möchten, als es mit der Admin-Website möglich ist.

### Ansichten

Öffnen Sie die Ansichtsdatei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie am Ende den folgenden Codeblock hinzu:

```python
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Author

class AuthorCreate(PermissionRequiredMixin, CreateView):
    model = Author
    fields = ['first_name', 'last_name', 'date_of_birth', 'date_of_death']
    initial = {'date_of_death': '11/11/2023'}
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
        except Exception as e:
            return HttpResponseRedirect(
                reverse("author-delete", kwargs={"pk": self.object.pk})
            )
```

Wie Sie sehen, leiten Sie Ansichten zum Erstellen, Aktualisieren und Löschen jeweils von `CreateView`, `UpdateView` und `DeleteView` ab und geben das zugehörige Modell an. Außerdem beschränken wir den Zugriff auf angemeldete Benutzer mit den jeweiligen Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die Ansichten zum Erstellen und Aktualisieren müssen Sie zusätzlich angeben, welche Felder im Formular erscheinen sollen. Dabei verwenden Sie dieselbe Syntax wie bei `ModelForm`. Das Beispiel zeigt sowohl die einzelne Auflistung von Feldern als auch die Syntax für „alle“ Felder. Für jedes Feld können Sie zudem einen Anfangswert mit einem Dictionary aus _Feldname_/_Wert_-Paaren festlegen. Hier setzen wir zu Demonstrationszwecken willkürlich ein Todesdatum; diesen Wert möchten Sie möglicherweise entfernen. Standardmäßig leiten diese Ansichten nach erfolgreicher Verarbeitung zu einer Seite weiter, die das neu erstellte oder bearbeitete Modellobjekt anzeigt. In unserem Fall ist das die Detailansicht für Autoren aus einem früheren Teil des Tutorials. Mit dem Parameter `success_url` können Sie ausdrücklich ein anderes Weiterleitungsziel festlegen.

Die Klasse `AuthorDelete` muss keine Felder anzeigen; daher müssen wir auch keine angeben. Wir setzen außerdem eine `success_url`, da Django nach dem erfolgreichen Löschen eines `Author` keine naheliegende Standard-URL für die Weiterleitung hat. Mit der Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) leiten wir nach dem Löschen zur Autorenliste weiter. `reverse_lazy()` ist eine verzögert ausgeführte Variante von `reverse()` und wird hier verwendet, weil wir einem Attribut einer klassenbasierten Ansicht eine URL zuweisen.

Wenn das Löschen eines Autors immer erfolgreich wäre, wären wir damit fertig. Hat ein `Author` jedoch ein zugehöriges Buch, löst das Löschen eine Ausnahme aus: Unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) legt für das `ForeignKey`-Feld des Autors `on_delete=models.RESTRICT` fest. Deshalb überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid). Gelingt das Löschen des `Author`, leitet sie zur `success_url` weiter; andernfalls kehrt sie zum selben Formular zurück. Die Vorlage passen wir weiter unten so an, dass klar wird: Eine in einem `Book` verwendete `Author`-Instanz kann nicht gelöscht werden.

### URL-Konfigurationen

Öffnen Sie die URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie am Ende die folgende Konfiguration hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts grundlegend Neues. Die Ansichten sind Klassen und müssen daher über `.as_view()` aufgerufen werden. Auch die URL-Muster sollten Ihnen bekannt vorkommen. Den erfassten Primärschlüsselwert müssen wir `pk` nennen, da die Ansichtsklassen einen Parameter mit diesem Namen erwarten.

### Vorlagen

Die Ansichten zum Erstellen und Aktualisieren verwenden standardmäßig dieselbe Vorlage. Ihr Name leitet sich vom Modell ab: `model_name_form.html`. Das Suffix **\_form** können Sie mit dem Feld `template_name_suffix` in Ihrer Ansicht ändern, beispielsweise mit `template_name_suffix = '_other_suffix'`.

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}
<form action="" method="post">
  {% csrf_token %}
  <table>
    \{{ form.as_table }}
  </table>
  <input type="submit" value="Submit" />
</form>
{% endblock %}
```

Diese Vorlage ähnelt unseren bisherigen Formularen und stellt die Felder als Tabelle dar. Beachten Sie, dass wir auch hier `{% csrf_token %}` einfügen, um die Formulare gegen CSRF-Angriffe zu schützen.

Die Ansicht zum Löschen erwartet eine Vorlage im Format `[model_name]_confirm_delete.html`. Auch hier können Sie das Suffix mit `template_name_suffix` in Ihrer Ansicht ändern. Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Delete Author: \{{ author }}</h1>

{% if author.book_set.all %}

<p>You can't delete this author until all their books have been deleted:</p>
<ul>
  {% for book in author.book_set.all %}
    <li><a href="{% url 'book-detail' book.pk %}">\{{book}}</a> (\{{book.bookinstance_set.all.count}})</li>
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

Die Vorlage sollte Ihnen vertraut vorkommen. Zunächst prüft sie, ob der Autor in Büchern verwendet wird. Ist dies der Fall, zeigt sie eine Liste der Bücher an, die vor dem Autorendatensatz gelöscht werden müssen. Andernfalls zeigt sie ein Formular an, mit dem Benutzer das Löschen des Autorendatensatzes bestätigen können.

Als Letztes verknüpfen wir die Seiten mit der Seitenleiste. Zunächst fügen wir in der _Basisvorlage_ einen Link zum Erstellen von Autoren ein. Er soll auf allen Seiten für angemeldete Benutzer sichtbar sein, die als Mitarbeiter gelten und die Berechtigung zum Erstellen von Autoren (`catalog.add_author`) besitzen. Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die entsprechenden Zeilen im selben Block ein wie den Link zu „All Borrowed“. Verweisen Sie dabei wie unten gezeigt über den Namen `'author-create'` auf die URL.

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

Die Links zum Aktualisieren und Löschen von Autoren fügen wir auf der Detailseite eines Autors hinzu. Öffnen Sie **catalog/templates/catalog/author_detail.html** und hängen Sie den folgenden Code an:

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

Dieser Block überschreibt den `sidebar`-Block der Basisvorlage und übernimmt mit `\{{ block.super }}` dessen ursprünglichen Inhalt. Anschließend fügt er Links zum Aktualisieren oder Löschen des Autors hinzu – allerdings nur, wenn der Benutzer die passenden Berechtigungen besitzt und der Autorendatensatz mit keinem Buch verknüpft ist.

Die Seiten können nun getestet werden!

### Die Seite testen

Melden Sie sich zunächst mit einem Konto an, das Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren besitzt.

Rufen Sie eine beliebige Seite auf und wählen Sie in der Seitenleiste „Create author“ (URL: `http://127.0.0.1:8000/catalog/author/create/`). Die Seite sollte wie im folgenden Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte in die Felder ein und klicken Sie auf **Submit**, um den Autorendatensatz zu speichern. Anschließend sollten Sie zur Detailansicht des neuen Autors gelangen, beispielsweise unter `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Detailansicht eines Autors mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können die Bearbeitung testen, indem Sie den Link „Update author“ auswählen, beispielsweise unter `http://127.0.0.1:8000/catalog/author/10/update/`. Einen Screenshot zeigen wir nicht, da die Seite genauso aussieht wie die zum Erstellen.

Wählen Sie schließlich auf der Detailseite in der Seitenleiste „Delete author“, um den Autorendatensatz zu löschen. Falls der Autor keinem Buch zugeordnet ist, sollte Django die unten gezeigte Löschseite anzeigen. Klicken Sie auf **Yes, delete.**, um den Datensatz zu entfernen und zur Liste aller Autoren zu gelangen.

![Formular mit der Möglichkeit, einen Autor zu löschen](forms_example_delete_author.png)

## Probieren Sie es selbst

Erstellen Sie Formulare zum Anlegen, Bearbeiten und Löschen von `Book`-Datensätzen. Sie können dieselbe Struktur wie für `Authors` verwenden. Beachten Sie beim Löschen, dass ein `Book` erst gelöscht werden kann, wenn alle zugehörigen `BookInstance`-Datensätze gelöscht wurden. Verwenden Sie außerdem die richtigen Berechtigungen.

Wenn Ihre Vorlage **book_form.html** lediglich eine umbenannte Kopie der Vorlage **author_form.html** ist, sieht die neue Seite zum Erstellen von Büchern wie im folgenden Screenshot aus:

![Screenshot eines Formulars mit Feldern für Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann kompliziert sein. Django vereinfacht diese Arbeit mit programmatischen Möglichkeiten zum Deklarieren, Darstellen und Validieren von Formularen erheblich. Darüber hinaus bietet Django generische Ansichten zum Bearbeiten von Formularen. Sie übernehmen _fast die gesamte Arbeit_ beim Definieren von Seiten, mit denen Datensätze eines einzelnen Modells erstellt, bearbeitet und gelöscht werden können.

Mit Formularen ist noch weit mehr möglich; sehen Sie sich dazu die Liste unter [Siehe auch](#siehe_auch) an. Sie sollten nun aber wissen, wie Sie Ihren eigenen Websites einfache Formulare und den zugehörigen Verarbeitungscode hinzufügen.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Ihre erste Django-Anwendung schreiben, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Ansichten zum Bearbeiten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
