---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: f3f56081b4d400cdfa28d80a881b6be325774e5e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten, und insbesondere, wie Sie am einfachsten Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen schreiben. Im Rahmen dieser Demonstration erweitern wir die Website [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website), sodass Bibliothekarinnen und Bibliothekare Bücher verlängern sowie Autorinnen und Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (statt die Admin-Anwendung zu verwenden).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Formulare geschrieben werden, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen klassenbasierten Bearbeitungsansichten das Erstellen von Formularen für die Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern/Widgets auf einer Webseite, die zum Sammeln von Benutzerinformationen verwendet werden kann, um sie an einen Server zu senden. Formulare sind ein flexibler Mechanismus zum Erfassen von Benutzereingaben, da geeignete Widgets für die Eingabe vieler unterschiedlicher Datentypen vorhanden sind, darunter Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlen usw. Formulare sind außerdem eine relativ sichere Möglichkeit, Daten mit dem Server auszutauschen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Website begegnet — beispielsweise zeigt der folgende Screenshot ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)-Modelle, das aus mehreren Auswahllisten und Texteditoren besteht.

![Admin-Website – Book hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwicklerinnen und Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server validieren und korrekt bereinigen (und möglicherweise auch im Browser), das Formular mit Fehlermeldungen erneut anzeigen, um Benutzer über ungültige Felder zu informieren, die Daten bei erfolgreicher Übermittlung verarbeiten und schließlich dem Benutzer auf irgendeine Weise den Erfolg anzeigen. _Django Forms_ nehmen Ihnen bei all diesen Schritten viel Arbeit ab, indem sie ein Framework bereitstellen, mit dem Sie Formulare und ihre Felder programmgesteuert definieren und diese Objekte dann sowohl zum Erzeugen des HTML-Codes für das Formular als auch zur Verarbeitung eines großen Teils der Validierung und Benutzerinteraktion verwenden können.

In diesem Tutorial zeigen wir Ihnen einige Möglichkeiten, Formulare zu erstellen und mit ihnen zu arbeiten, und insbesondere, wie die generischen Bearbeitungsansichten den Arbeitsaufwand zum Erstellen von Formularen zur Manipulation Ihrer Modelle deutlich reduzieren können. Dabei erweitern wir unsere Anwendung _LocalLibrary_, indem wir ein Formular hinzufügen, mit dem Bibliothekarinnen und Bibliothekare ausgeliehene Bücher verlängern können, und Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren erstellen (wobei wir eine grundlegende Version des oben gezeigten Formulars zum Bearbeiten von Büchern nachbilden).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzelnen Textfeld zur Eingabe des Namens eines „Teams“ und seiner zugehörigen Beschriftung:

![Beispiel eines einfachen Namensfelds in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als eine Sammlung von Elementen innerhalb der Tags `<form>…</form>` definiert, die mindestens ein `input`-Element des Typs `type="submit"` enthält.

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

Während wir hier nur ein Textfeld zur Eingabe des Teamnamens haben, kann ein Formular eine beliebige Anzahl weiterer Eingabeelemente und ihrer zugehörigen Beschriftungen enthalten. Das `type`-Attribut des Felds definiert, welche Art von Widget angezeigt wird. `name` und `id` des Felds dienen zur Identifizierung des Felds in JavaScript/CSS/HTML, während `value` den Anfangswert für das Feld definiert, wenn es erstmals angezeigt wird. Die passende Teambeschriftung wird mithilfe des Tags `label` angegeben (siehe oben „Enter name“) und enthält ein `for`-Feld mit dem `id`-Wert des zugehörigen `input`.

Die `submit`-Eingabe wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten aller anderen Eingabeelemente im Formular auf den Server hochzuladen (in diesem Fall nur das Feld `team_name`).
Die Formularattribute definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden, wenn das Formular übermittelt wird. Wenn dies nicht festgelegt ist (oder auf eine leere Zeichenfolge gesetzt wird), wird das Formular an die URL der aktuellen Seite zurückgesendet.
- `method`: Die HTTP-Methode zum Senden der Daten: _post_ oder _get_.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da sie widerstandsfähiger gegen Cross-Site-Request-Forgery-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (beispielsweise ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen können möchten.

Die Aufgabe des Servers besteht zunächst darin, den anfänglichen Formularzustand zu rendern — entweder mit leeren Feldern oder mit vorausgefüllten Anfangswerten. Nachdem der Benutzer die Schaltfläche zum Übermitteln gedrückt hat, erhält der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Enthält das Formular ungültige Daten, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in „gültigen“ Feldern und Meldungen, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit vollständig gültigen Formulardaten erhält, kann er eine geeignete Aktion ausführen (beispielsweise: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und anschließend den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es sehr aufwendig sein, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, eingegebene Daten bei Bedarf mit Fehlerberichten erneut anzuzeigen und die gewünschte Operation mit gültigen Daten auszuführen. Django erleichtert dies erheblich, indem es einen Teil der aufwendigen und sich wiederholenden Arbeit übernimmt!

## Prozess zur Formularverarbeitung in Django

Djangos Formularverarbeitung verwendet dieselben Techniken, die wir in vorherigen Tutorials gelernt haben (zum Anzeigen von Informationen über unsere Modelle): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und erzeugt und gibt dann eine HTML-Seite zurück (aus einem Template, an das wir einen _context_ mit den anzuzeigenden Daten übergeben). Komplizierter wird es dadurch, dass der Server auch die vom Benutzer bereitgestellten Daten verarbeiten und die Seite erneut anzeigen können muss, wenn Fehler auftreten.

Ein Ablaufdiagramm dazu, wie Django Formularanfragen verarbeitet, wird unten gezeigt. Es beginnt mit einer Anfrage nach einer Seite, die ein Formular enthält (grün dargestellt).

![Aktualisierte Dokumentation zum Prozess der Formularverarbeitung.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm führt Djangos Formularverarbeitung hauptsächlich Folgendes aus:

1. Beim ersten Anfordern durch den Benutzer das Standardformular anzeigen.
   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorausgefüllt sein (beispielsweise wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte vorhanden sind).
   - Das Formular wird zu diesem Zeitpunkt als _unbound_ bezeichnet, da es keinen vom Benutzer eingegebenen Daten zugeordnet ist (obwohl es Anfangswerte haben kann).

2. Daten aus einer Übermittlungsanfrage erhalten und an das Formular binden.
   - Daten an das Formular zu binden bedeutet, dass die vom Benutzer eingegebenen Daten und etwaige Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Die Daten bereinigen und validieren.
   - Das Bereinigen der Daten führt eine Sanitization der Eingabefelder durch, beispielsweise das Entfernen ungültiger Zeichen, die zum Senden schädlicher Inhalte an den Server verwendet werden könnten, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung prüft, ob die Werte für das Feld geeignet sind (beispielsweise, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, das Formular erneut anzeigen, diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen ausführen (wie Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite weiterleiten.

Django stellt eine Reihe von Werkzeugen und Ansätzen bereit, die Sie bei den oben beschriebenen Aufgaben unterstützen. Das grundlegendste ist die Klasse `Form`, die sowohl die Erstellung von Formular-HTML als auch die Datenbereinigung/-validierung vereinfacht. Im nächsten Abschnitt beschreiben wir anhand des praktischen Beispiels einer Seite, über die Bibliothekarinnen und Bibliothekare Bücher verlängern können, wie Formulare funktionieren.

> [!NOTE]
> Das Verständnis der Verwendung von `Form` hilft Ihnen, wenn wir Djangos „höherwertige“ Klassen des Formular-Frameworks besprechen.

## Formular zur Buchverlängerung mit einem Form und einer Funktionsansicht

Als Nächstes fügen wir eine Seite hinzu, über die Bibliothekarinnen und Bibliothekare ausgeliehene Bücher verlängern können. Dazu erstellen wir ein Formular, mit dem Benutzer einen Datumswert eingeben können. Wir versehen das Feld mit einem Anfangswert von drei Wochen ab dem aktuellen Datum (der normalen Ausleihfrist) und fügen eine Validierung hinzu, damit die Bibliothekarin bzw. der Bibliothekar weder ein Datum in der Vergangenheit noch ein zu weit in der Zukunft liegendes Datum eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das Feld `BookInstance.due_back` des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erläutern, wie Formulare funktionieren und welche Änderungen Sie an unserem fortlaufenden _LocalLibrary_-Projekt vornehmen müssen.

### Form

Die Klasse `Form` ist das Herzstück von Djangos System zur Formularverarbeitung. Sie legt die Felder des Formulars, ihr Layout, Anzeige-Widgets, Beschriftungen, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen für ungültige Felder fest. Die Klasse stellt außerdem Methoden bereit, um sich selbst in Templates mithilfe vordefinierter Formate (Tabellen, Listen usw.) zu rendern oder um den Wert eines beliebigen Elements abzurufen (was ein detailliertes manuelles Rendering ermöglicht).

#### Eine Form deklarieren

Die Deklarationssyntax für eine `Form` ist der für die Deklaration eines `Model` sehr ähnlich und verwendet dieselben Feldtypen (sowie einige ähnliche Parameter). Das ist sinnvoll, weil wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Beschreibung zur Anzeige/Dokumentation besitzt.

Formulardaten werden in der Datei forms.py einer Anwendung innerhalb des Anwendungsverzeichnisses gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um eine `Form` zu erstellen, importieren wir die Bibliothek `forms`, leiten von der Klasse `Form` ab und deklarieren die Felder des Formulars. Eine sehr einfache Formular-Klasse für unser Formular zur Verlängerung von Bibliotheksbüchern wird unten gezeigt — fügen Sie dies Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Verlängerungsdatums. Es wird in HTML mit einem leeren Wert, der Standardbeschriftung „_Renewal date:_“ und einem hilfreichen Verwendungstext gerendert: „_Enter a date between now and 4 weeks (default 3 weeks)._“ Da keine der anderen optionalen Argumente angegeben werden, akzeptiert das Feld Datumsangaben in den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24), und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie größtenteils an ihrer Ähnlichkeit mit den entsprechenden Modellfeld-Klassen erkennen werden:

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

Die Argumente, die für die meisten Felder üblich sind, sind unten aufgeführt (sie haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen werden oder den Wert `None` erhalten. Felder sind standardmäßig erforderlich; Sie würden daher `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Die Beschriftung, die beim Rendern des Felds in HTML verwendet wird. Wenn kein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z. B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach der Beschriftung ein Doppelpunkt angezeigt (z. B. Renewal date&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert des Felds, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das zu verwendende Anzeige-Widget.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um die Verwendung des Felds zu erläutern.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf durch eigene Meldungen überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die für das Feld aufgerufen werden, wenn es validiert wird.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Aktiviert die Lokalisierung der Formulardateneingabe (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, sein Wert kann jedoch nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Stellen, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie prüfen möchten. So können wir beispielsweise validieren, dass eingegebene Werte für `renewal_date` zwischen dem aktuellen Datum und vier Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre Datei forms.py, sodass sie wie folgt aussieht:

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

Es gibt zwei wichtige Punkte zu beachten. Der erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und diese Daten am Ende der Funktion zurückgeben, unabhängig davon, ob wir sie ändern oder nicht.
Dieser Schritt liefert uns die mit den Standard-Validatoren „bereinigten“ und von potenziell unsicheren Eingaben gesäuberten Daten und konvertiert sie in den korrekten Standardtyp für die Daten (in diesem Fall ein Python-Objekt `datetime.datetime`).

Der zweite Punkt ist, dass wir eine `ValidationError` auslösen, wenn ein Wert außerhalb unseres Bereichs liegt, und dabei den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wurde.
Das obige Beispiel umschließt diesen Text außerdem mit einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche weitere Methoden und Beispiele zur Formularvalidierung in [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise können Sie in Fällen, in denen mehrere Felder voneinander abhängig sind, die Funktion [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die Seite _renew-books_ hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und übergibt die `BookInstance`-ID als Parameter mit dem Namen `pk`. Das Muster stimmt nur überein, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können unseren erfassten URL-Daten einen beliebigen Namen geben, da wir vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detailansichts-Klasse, die Parameter mit einem bestimmten Namen erwartet). `pk`, kurz für „primary key“, ist jedoch eine sinnvolle Konvention!

### Ansicht

Wie im obigen Abschnitt [Prozess zur Formularverarbeitung in Django](#prozess_zur_formularverarbeitung_in_django) beschrieben, muss die Ansicht beim ersten Aufruf das Standardformular rendern und es anschließend entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und auf eine neue Seite weiterleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht erkennen können, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, besteht das häufigste Muster darin, dass die Ansicht auf den Anfragetyp `POST` prüft (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren, und `GET` (mit einer `else`-Bedingung), um die Anfrage zur anfänglichen Formularerstellung zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, besteht ein typischer Ansatz zur Identifizierung, ob dies der erste oder ein nachfolgender Aufruf der Ansicht ist, darin, die Formulardaten zu lesen (z. B. um einen ausgeblendeten Wert im Formular zu lesen).

Beim Prozess der Buchverlängerung wird in unsere Datenbank geschrieben, daher verwenden wir konventionsgemäß den Ansatz mit einer `POST`-Anfrage.
Das folgende Codefragment zeigt das (sehr übliche) Muster für diese Art von Funktionsansicht.

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

Zunächst importieren wir unser Formular (`RenewBookForm`) und eine Reihe weiterer nützlicher Objekte/Methoden, die im Rumpf der Ansichts-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein angegebenes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme aus (nicht gefunden), wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Erzeugt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Erzeugt eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent zum Tag `url`, das wir in unseren Templates verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Bearbeitung von Datums- und Zeitangaben.

In der Ansicht verwenden wir zunächst das Argument `pk` in `get_object_or_404()`, um die aktuelle `BookInstance` abzurufen (existiert diese nicht, wird die Ansicht sofort beendet und auf der Seite wird ein „nicht gefunden“-Fehler angezeigt).
Wenn dies _keine_ `POST`-Anfrage ist (behandelt durch die `else`-Klausel), erstellen wir das Standardformular und übergeben einen `initial`-Wert für das Feld `renewal_date`, drei Wochen ab dem aktuellen Datum.

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

Nachdem wir das Formular erstellt haben, rufen wir `render()` auf, um die HTML-Seite zu erstellen. Dabei geben wir das Template und einen Kontext an, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir im Template verwenden, um Informationen über das Buch bereitzustellen, das wir verlängern.

Wenn dies jedoch eine `POST`-Anfrage ist, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird „binding“ genannt und ermöglicht uns, das Formular zu validieren.

Anschließend prüfen wir, ob das Formular gültig ist. Dadurch wird der gesamte Validierungscode für alle Felder ausgeführt — einschließlich des generischen Codes, der prüft, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, und der Funktion `clean_renewal_date()` unseres spezifischen Formulars, die prüft, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir erneut `render()` auf, aber diesmal enthält der im Kontext übergebene Formularwert Fehlermeldungen.

Wenn das Formular gültig ist, können wir die Daten verwenden und über das Attribut `form.cleaned_data` darauf zugreifen (z. B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten lediglich im Wert `due_back` des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Obwohl Sie auch direkt über die Anfrage auf die Formulardaten zugreifen können (beispielsweise `request.POST['renewal_date']` oder `request.GET['renewal_date']` bei Verwendung einer GET-Anfrage), wird dies NICHT empfohlen. Die bereinigten Daten sind sanitisiert, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Teil der Formularverarbeitung der Ansicht besteht darin, auf eine andere Seite weiterzuleiten, üblicherweise auf eine „Erfolgsseite“. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um auf die Ansicht mit dem Namen `'all-borrowed'` weiterzuleiten (diese wurde als „Herausforderung“ in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, sollten Sie in Erwägung ziehen, auf die Startseite unter der URL `/` weiterzuleiten.

Das ist alles, was für die Formularverarbeitung selbst erforderlich ist, aber wir müssen den Zugriff auf die Ansicht noch auf angemeldete Bibliothekarinnen und Bibliothekare beschränken, die die Berechtigung zum Verlängern von Büchern haben. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer angemeldet ist, sowie den Funktionsdekorator `@permission_required` mit unserer vorhandenen Berechtigung `can_mark_returned`, um den Zugriff zu erlauben (Dekoratoren werden in der angegebenen Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber die vorhandene wiederverwenden, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher unten dargestellt. Kopieren Sie dies bitte an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie das in der Ansicht referenzierte Template (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code hinein:

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

Der größte Teil davon wird aus vorherigen Tutorials vollständig vertraut sein.

Wir erweitern das Basis-Template und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, weil es im Kontextobjekt der Funktion `render()` übergeben wurde, und verwenden diese, um den Buchtitel, den Ausleiher und das ursprüngliche Rückgabedatum aufzulisten.

Der Formularcode ist relativ einfach. Zunächst deklarieren wir die Tags `form` und geben an, wohin das Formular übermittelt werden soll (`action`) und welche `method` zum Übermitteln der Daten verwendet wird (in diesem Fall ein `POST`) — wenn Sie sich an den Überblick zu [HTML-Formulare](#html-formulare) am Anfang der Seite erinnern, bedeutet ein leeres `action`, wie gezeigt, dass die Formulardaten an die aktuelle URL der Seite zurückgesendet werden (was wir möchten). Innerhalb der Tags definieren wir die `submit`-Eingabe, die ein Benutzer drücken kann, um die Daten zu übermitteln. Das direkt innerhalb der Formular-Tags hinzugefügte `{% csrf_token %}` ist Teil von Djangos Schutz vor Cross-Site-Forgery.

> [!NOTE]
> Fügen Sie `{% csrf_token %}` zu jedem Django-Template hinzu, das Sie erstellen und das `POST` zur Übermittlung von Daten verwendet. Dadurch wird die Wahrscheinlichkeit verringert, dass Formulare von böswilligen Benutzern übernommen werden.

Es bleibt nur die Template-Variable `\{{ form }}`, die wir im Kontext-Dictionary an das Template übergeben haben.
Wenig überraschend stellt dies bei der gezeigten Verwendung das Standard-Rendering aller Formularfelder bereit, einschließlich ihrer Beschriftungen, Widgets und Hilfetexte — das Rendering sieht wie unten dargestellt aus:

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
> Möglicherweise ist es nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in einer eigenen Tabellenzeile definiert. Dasselbe Rendering wird bereitgestellt, wenn Sie auf die Template-Variable `\{{ form.as_table }}` verweisen.

Wenn Sie ein ungültiges Datum eingeben würden, erhielten Sie zusätzlich eine auf der Seite gerenderte Fehlerliste (siehe unten `error-list`).

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

#### Weitere Möglichkeiten zur Verwendung der Formular-Template-Variable

Bei Verwendung von `\{{ form.as_table }}` wie oben gezeigt wird jedes Feld als Tabellenzeile gerendert. Sie können jedes Feld auch als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist außerdem möglich, vollständige Kontrolle über das Rendering jedes Teils des Formulars zu haben, indem Sie mit Punktnotation auf seine Eigenschaften zugreifen. So können wir beispielsweise auf mehrere einzelne Elemente für unser Feld `renewal_date` zugreifen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID der Beschriftung.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Felds.

Weitere Beispiele dafür, wie Sie Formulare manuell in Templates rendern und dynamisch über Template-Felder iterieren, finden Sie unter [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die „Herausforderung“ in [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, verfügen Sie über eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek anzeigt und nur für Bibliothekspersonal sichtbar ist.
Die Ansicht könnte ähnlich wie diese aussehen:

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

Wir können neben jedem Element einen Link zur Seite für die Buchverlängerung hinzufügen, indem wir den folgenden Template-Code an den obigen Text des Listenelements anhängen.
Beachten Sie, dass dieser Template-Code nur innerhalb der Schleife `{% for %}` ausgeführt werden kann, da dort der Wert `bookinst` definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihre Testanmeldung die Berechtigung `catalog.can_mark_returned` benötigt, um den oben hinzugefügten neuen Link „Renew“ zu sehen und auf die verlinkte Seite zuzugreifen (verwenden Sie möglicherweise Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL manuell wie folgt erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` erhalten Sie, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das Feld `id` kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich waren, sieht das Standardformular wie folgt aus:

![Standardformular, das die Buchdetails, das Rückgabedatum, das Verlängerungsdatum und eine Schaltfläche zum Übermitteln anzeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem eingegebenen ungültigen Wert sieht wie folgt aus:

![Dasselbe Formular wie oben mit einer Fehlermeldung: ungültiges Datum – Verlängerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Verlängerungslinks sieht wie folgt aus:

![Zeigt eine Liste aller verlängerten Bücher mit ihren Details. Überfällige Bücher sind rot dargestellt.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht Ihnen, jede beliebige Art von Formularseite zu erstellen und sie einem beliebigen Modell oder mehreren Modellen zuzuordnen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, definiert Ihr Modell bereits die meisten Informationen, die Sie in Ihrem Formular benötigen: Felder, Beschriftungen, Hilfetext usw. Statt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die Hilfsklasse [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann in Ihren Ansichten genau wie eine gewöhnliche `Form` verwendet werden.

Ein grundlegendes `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Zum Erstellen des Formulars müssen Sie lediglich `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der `fields` des Modells hinzufügen, die in das Formular aufgenommen werden sollen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder in das Formular aufnehmen, indem Sie `fields = '__all__'` verwenden, oder Sie können `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell aufgenommen werden sollen.
>
> Keiner der beiden Ansätze wird empfohlen, da neue Felder, die dem Modell hinzugefügt werden, dann automatisch in das Formular aufgenommen werden (ohne dass der Entwickler unbedingt mögliche Sicherheitsauswirkungen berücksichtigt).

> [!NOTE]
> Dies sieht möglicherweise nicht wesentlich einfacher aus als die Verwendung einer `Form` (und ist es in diesem Fall nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann dies die erforderliche Code-Menge erheblich reduzieren!

Die übrigen Informationen stammen aus den Definitionen der Modellfelder (z. B. Beschriftungen, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz passen, können wir sie in unserer `class Meta` überschreiben, indem wir ein Dictionary angeben, das das zu ändernde Feld und seinen neuen Wert enthält. In diesem Formular möchten wir beispielsweise möglicherweise eine Beschriftung für unser Feld „_Renewal date_“ (statt der auf dem Feldnamen basierenden Standardbeschriftung: _Due Back_) und außerdem soll unser Hilfetext spezifisch für diesen Anwendungsfall sein.
Das unten stehende `Meta` zeigt Ihnen, wie Sie diese Felder überschreiben. Ebenso können Sie `widgets` und `error_messages` festlegen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Zum Hinzufügen einer Validierung können Sie denselben Ansatz wie für eine normale `Form` verwenden — Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen für ungültige Werte `ValidationError`-Ausnahmen aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` und nicht `renewal_date` heißt.
Diese Änderung ist erforderlich, da das entsprechende Feld in `BookInstance` `due_back` heißt.

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

Die obige Klasse `RenewBookModelForm` ist nun funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie könnten sie überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` zu `due_back` aktualisieren, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Algorithmus zur Formularverarbeitung, den wir im obigen Beispiel für eine Funktionsansicht verwendet haben, stellt ein äußerst häufiges Muster in Ansichten zur Formularbearbeitung dar. Django abstrahiert einen großen Teil dieses „Boilerplate“-Codes für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten auf Grundlage von Modellen bereitstellt. Diese behandeln nicht nur das Verhalten der „Ansicht“, sondern erstellen auch automatisch die Formular-Klasse (ein `ModelForm`) aus dem Modell für Sie.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine Klasse [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview), die hinsichtlich „Flexibilität“ gegenüber „Programmieraufwand“ irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten liegt. Bei Verwendung von `FormView` müssen Sie weiterhin Ihre `Form` erstellen, aber Sie müssen nicht alle Standardmuster der Formularverarbeitung implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald bekannt ist, dass die Übermittlung gültig ist.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die das Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen aus unserer Bibliothek ermöglichen — und damit effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Website bereitstellen (dies kann nützlich sein, wenn Sie Admin-Funktionalität auf eine flexiblere Weise anbieten müssen, als es die Admin-Website ermöglicht).

### Ansichten

Öffnen Sie die Ansichtsdatei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende hinzu:

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

Wie Sie sehen können, müssen Sie zum Erstellen, Aktualisieren oder Löschen der Ansichten jeweils von `CreateView`, `UpdateView` und `DeleteView` ableiten und anschließend das zugehörige Modell definieren.
Wir beschränken den Aufruf dieser Ansichten außerdem auf angemeldete Benutzer mit den Berechtigungen `add_author`, `change_author` bzw. `delete_author`.

Für die Fälle „Erstellen“ und „Aktualisieren“ müssen Sie außerdem die im Formular anzuzeigenden Felder angeben (mit derselben Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie sie einzeln aufgeführt werden und wie die Syntax zur Auflistung „aller“ Felder lautet. Sie können auch Anfangswerte für jedes Feld mithilfe eines Dictionarys aus _field_name_/_value_-Paaren angeben (hier setzen wir das Todesdatum willkürlich zu Demonstrationszwecken — möglicherweise möchten Sie das entfernen). Standardmäßig leiten diese Ansichten bei Erfolg zu einer Seite weiter, die das neu erstellte/bearbeitete Modellobjekt anzeigt. In unserem Fall ist dies die Autoren-Detailansicht, die wir in einem vorherigen Tutorial erstellt haben. Sie können einen alternativen Weiterleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die Klasse `AuthorDelete` muss keines der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen außerdem eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django nach dem erfolgreichen Löschen des `Author` navigieren kann. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy), um nach dem Löschen eines Autors zu unserer Autorenliste weiterzuleiten — `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL für ein Attribut einer klassenbasierten Ansicht bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre das alles.
Leider führt das Löschen eines `Author` zu einer Ausnahme, wenn der Autor ein zugehöriges Buch hat, weil unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) für das `ForeignKey`-Feld des Autors `on_delete=models.RESTRICT` angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), sodass sie bei erfolgreichem Löschen des `Author` zu `success_url` weiterleitet, andernfalls jedoch einfach zurück zum gleichen Formular weiterleitet.
Wir aktualisieren das Template unten, um deutlich zu machen, dass Sie eine `Author`-Instanz nicht löschen können, die in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts besonders Neues! Sie sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen. Außerdem sollten Sie die URL-Muster in jedem Fall erkennen können. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der von den Ansichts-Klassen erwartete Parametername ist.

### Templates

Die Ansichten zum „Erstellen“ und „Aktualisieren“ verwenden standardmäßig dasselbe Template, das nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix über das Feld `template_name_suffix` in Ihrer Ansicht in etwas anderes als **\_form** ändern, beispielsweise `template_name_suffix = '_other_suffix'`).

Erstellen Sie die Template-Datei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text.

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

Dies ähnelt unseren vorherigen Formularen und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir erneut `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe geschützt sind.

Die Ansicht zum „Löschen“ erwartet ein Template mit dem Format `[model_name]_confirm_delete.html` (auch hier können Sie das Suffix mithilfe von `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Template-Datei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text.

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

Das Template sollte vertraut sein.
Es prüft zunächst, ob der Autor in Büchern verwendet wird, und zeigt in diesem Fall die Liste der Bücher an, die gelöscht werden müssen, bevor der Autorendatensatz gelöscht werden kann.
Andernfalls wird ein Formular angezeigt, das den Benutzer fragt, ob er den Autorendatensatz wirklich löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzubinden.
Zuerst fügen wir einen Link zum Erstellen eines Autors in das _Basis-Template_ ein, damit er auf allen Seiten für angemeldete Benutzer sichtbar ist, die als „Mitarbeitende“ gelten und die Berechtigung zum Erstellen von Autoren (`catalog.add_author`) besitzen.
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die Benutzern mit der Berechtigung zum Erstellen des Autors den Zugriff erlauben (im selben Block wie der Link, der die Bücher „All Borrowed“ anzeigt).
Denken Sie daran, wie unten gezeigt über ihren Namen `'author-create'` auf die URL zu verweisen.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren auf der Autoren-Detailseite hinzu.
Öffnen Sie **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code an:

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

Dieser Block überschreibt den Block `sidebar` im Basis-Template und ruft dann mit `\{{ block.super }}` den ursprünglichen Inhalt ab.
Anschließend fügt er Links zum Aktualisieren oder Löschen des Autors hinzu, jedoch nur, wenn der Benutzer die korrekten Berechtigungen hat und der Autorendatensatz keinem Buch zugeordnet ist.

Die Seiten können jetzt getestet werden!

### Die Seite testen

Melden Sie sich zunächst mit einem Konto auf der Website an, das über Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren verfügt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie „Create author“ in der Seitenleiste aus (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie der folgende Screenshot aussehen.

![Formularbeispiel: Author erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Submit**, um den Autorendatensatz zu speichern.
Sie sollten nun zu einer Detailansicht für Ihren neuen Autor weitergeleitet werden, mit einer URL wie `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Author-Detailansicht mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link „Update author“ auswählen (mit einer URL wie `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da sie genauso aussieht wie die Seite zum „Erstellen“!

Schließlich können wir die Seite löschen, indem wir in der Seitenleiste auf der Detailseite „Delete author“ auswählen.
Django sollte die unten gezeigte Löschseite anzeigen, wenn der Autorendatensatz in keinem Buch verwendet wird.
Drücken Sie „**Yes, delete.**“, um den Datensatz zu entfernen und zur Liste aller Autoren zu gelangen.

![Formular mit Option zum Löschen eines Autors](forms_example_delete_author.png)

## Herausforderung

Erstellen Sie einige Formulare zum Erstellen, Bearbeiten und Löschen von `Book`-Datensätzen. Sie können genau dieselbe Struktur wie für `Authors` verwenden (beim Löschen denken Sie daran, dass Sie ein `Book` erst löschen können, wenn alle zugehörigen `BookInstance`-Datensätze gelöscht wurden) und müssen die korrekten Berechtigungen verwenden.
Wenn Ihr Template **book_form.html** lediglich eine kopiert und umbenannt Version des Templates **author_form.html** ist, sieht die neue Seite zum „Erstellen eines Buchs“ wie der folgende Screenshot aus:

![Screenshot mit verschiedenen Feldern im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann ein komplizierter Prozess sein! Django erleichtert dies erheblich, indem es programmgesteuerte Mechanismen zum Deklarieren, Rendern und Validieren von Formularen bereitstellt. Darüber hinaus bietet Django generische Ansichten zur Formularbearbeitung, die _fast die gesamte_ Arbeit zum Definieren von Seiten übernehmen können, mit denen Datensätze erstellt, bearbeitet und gelöscht werden können, die einer einzelnen Modellinstanz zugeordnet sind.

Mit Formularen lässt sich noch viel mehr machen (sehen Sie sich die untenstehende Liste [Siehe auch](#siehe_auch) an), aber Sie sollten nun verstehen, wie Sie Ihren eigenen Websites grundlegende Formulare und Code zur Formularverarbeitung hinzufügen.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Ihre erste Django-App schreiben, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
