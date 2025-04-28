---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten, und insbesondere die einfachste Möglichkeit, Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, damit Bibliothekare Bücher verlängern sowie Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um zu verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Um zu verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten die Erstellung von Formularen zur Arbeit mit einem einzigen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zum Sammeln von Benutzereingaben, da es geeignete Widgets zum Eingeben vieler verschiedener Datentypen gibt, einschließlich Textfeldern, Kontrollkästchen, Optionsschaltflächen, Datumsauswählern und so weiter. Formulare sind auch eine relativ sichere Methode, um Daten mit dem Server zu teilen, da sie uns ermöglichen, Daten mit Schutz gegen Cross-Site-Request-Forgery in `POST`-Anfragen zu senden.

Während wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Website begegnet - zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Buch-](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) Modelle, bestehend aus mehreren Auswahllisten und Texteditoren.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

Das Arbeiten mit Formularen kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer auf ungültige Felder hinzuweisen, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich den Benutzer auf irgendeine Weise benachrichtigen, um Erfolg anzuzeigen. _Django-Formulare_ nehmen einen Großteil der Arbeit aus all diesen Schritten, indem sie ein Framework bereitstellen, das es Ihnen ermöglicht, Formulare und ihre Felder programmgesteuert zu definieren und dann diese Objekte sowohl zur Generierung des Formular-HTML-Codes als auch zur Übernahme eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und verwenden können, und insbesondere, wie die generischen Bearbeitungsansichten die Menge an Arbeit erheblich reduzieren können, die Sie benötigen, um Formulare zur Manipulation Ihrer Modelle zu erstellen. Auf dem Weg dorthin werden wir unsere _LocalLibrary_ Anwendung erweitern, indem wir ein Formular hinzufügen, das es Bibliothekaren ermöglicht, Bibliotheksbücher zu verlängern, und wir werden Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern nachzubilden).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und seinem zugehörigen Label:

![Einfaches Namensfelder-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb `<form>…</form>` Tags definiert, die mindestens ein `input` Element vom Typ `submit` enthalten.

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

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, kann ein Formular _beliebig_ viele andere Eingabeelemente und deren zugehörige Labels haben. Das Attribut `type` des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und die `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es erstmals angezeigt wird. Das zugehörige Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt. Es kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld). Die Formularattribute definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht festgelegt ist (oder auf einen leeren String gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da sie gegenüber Cross-Site-Forgery-Request-Angriffen widerstandsfähiger gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Rolle des Servers besteht zunächst darin, den Anfangszustand des Formulars zu rendern – entweder mit leeren Feldern oder vorausgefüllt mit Anfangswerten. Nachdem der Benutzer die Absenden-Schaltfläche gedrückt hat, empfängt der Server die Formulardaten mit Werten vom Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion durchführen (z.B.: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und anschließend den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es ziemlich viel Mühe kosten, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten bei Bedarf erneut mit Fehlerberichten anzuzeigen und den gewünschten Vorgang mit gültigen Daten durchzuführen, um alles "richtig zu machen". Django macht dies erheblich einfacher, indem es einen Teil der schweren Arbeit und des wiederholenden Codes übernimmt!

## Django-Formularbearbeitungsprozess

Djangos Formularbearbeitung verwendet alle Techniken, über die wir in den vorherigen Tutorials gelernt haben (für die Anzeige von Informationen zu unseren Modellen): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und generiert und gibt dann eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite bei Fehlern erneut anzuzeigen.

Ein Prozessablaufdiagramm, wie Django Formularanfragen verarbeitet, ist unten gezeigt, beginnend mit einer Anfrage nach einer Seite, die ein Formular enthält (in grün dargestellt).

![Aktualisierter Formularbearbeitungsprozess-Dokument.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptpunkte, die Djangos Formularbearbeitung durchführt:

1. Zeigen Sie das Standardformular an, wenn es zum ersten Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann vorausgefüllt mit Initialwerten sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Das Formular wird an diesem Punkt als _ungebunden_ bezeichnet, da es nicht mit benutzereingabene Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfangen Sie Daten von einer Absende-Anfrage und binden Sie sie an das Formular.

   - Daten an das Formular zu binden bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Bereinigen und validieren Sie die Daten.

   - Die Datenbereinigung führt eine Sanitisierung der Eingabefelder durch, z.B. das Entfernen ungültiger Zeichen, die verwendet werden könnten, um böswillige Inhalte an den Server zu senden, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (z.B. ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, zeigen Sie das Formular erneut an, diesmal mit allen vom Benutzer eingegebenen Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen durch (z.B. Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, leiten Sie den Benutzer zu einer anderen Seite weiter.

Django bietet eine Reihe von Werkzeugen und Ansätzen, um Ihnen bei den oben beschriebenen Aufgaben zu helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung von HTML-Formularen als auch die Datenbereinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare funktionieren und verwenden als praktisches Beispiel eine Seite, die es Bibliothekaren ermöglicht, Bücher zu erneuern.

> [!NOTE]
> Das Verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir über Djangos mehr "hochwertige" Formular-Framework-Klassen sprechen.

## Erneuere-Buch-Formular mit einem Formular und Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu verlängern. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir setzen das Feld mit einem Anfangswert 3 Wochen ab dem aktuellen Datum (die normale Leihfrist) und fügen eine Validierung hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das `BookInstance.due_back` Feld des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_ Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück von Djangos Formularbearbeitungssystem. Sie spezifiziert die Felder im Formular, deren Layout, Anzeigewidgets, Labels, Anfangswerte, gültige Werte und (nach Validierung) die mit ungültigen Feldern verbundenen Fehlermeldungen. Die Klasse bietet auch Methoden zur eigenen Darstellung in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) oder um den Wert eines beliebigen Elements zu erhalten (ermöglicht eine fein abgestimmte manuelle Darstellung).

#### Ein Formular deklarieren

Die Deklarationssyntax für ein `Form` ist der Deklaration eines `Model` sehr ähnlich und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in der forms.py-Datei einer Anwendung im Anwendungsverzeichnis gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Formular` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formularklasse für unser Bibliotheksbuch-Verlängerungsformular wird unten gezeigt — fügen Sie dies zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zum Eingeben des Verlängerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und etwas hilfreichem Gebrauchstext angezeigt wird: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Datumsangaben, die die [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats) verwenden: JJJJ-MM-TT (2024-11-06), MM/TT/JJJJ (02/26/2024), MM/TT/JJ (10/25/24), und wird mit dem Standard-[Widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie größtenteils an ihrer Ähnlichkeit zu den entsprechenden Modellfeldklassen erkennen werden:

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

Die Argumente, die den meisten Feldern gemeinsam sind, werden unten aufgeführt (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer oder mit einem `None`-Wert versehen werden. Felder sind standardmäßig erforderlich, sodass Sie `required=False` setzen würden, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das bei der Darstellung des Feldes in HTML verwendet wird. Wenn kein [Label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben ist, erstellt Django eines aus dem Feldnamen, indem der erste Buchstabe großgeschrieben und Unterstriche durch Leerzeichen ersetzt werden (z.B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z.B. Renewal date&ZeroWidthSpace;**:**). Dieses Argument ermöglicht es Ihnen, ein anderes Suffix mit anderen Zeichen zu spezifizieren.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet wird.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf durch eigene Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung von Formulareingabedaten (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standard ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, um Ihre Daten zu validieren. Der einfachste Weg, um ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. So können wir zum Beispiel überprüfen, dass eingegebene `renewal_date` Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre forms.py-Datei, damit sie so aussieht:

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

Es gibt zwei wichtige Punkte zu beachten. Erstens erhalten wir unsere Daten mit `self.cleaned_data['renewal_date']` und geben diese Daten zurück, unabhängig davon, ob wir sie am Ende der Funktion ändern oder nicht. Dieser Schritt ermöglicht es uns, die Daten "gereinigt" und von potenziell unsicherer Eingabe sanitisiert zu erhalten, unter Verwendung der Standardvalidatoren und konvertiert sie in den korrekten Standardtyp für die Daten (in diesem Fall ein Python `datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir, wenn ein Wert außerhalb unseres Bereichs liegt, eine `ValidationError`-Ausnahme auslösen und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird. Das obige Beispiel umschließt diesen Text auch in einer der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) von Django, `gettext_lazy()` (importiert als `_()`), was gängige Praxis ist, wenn Sie später Ihre Website übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Form- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Zum Beispiel können Sie in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, die Funktion [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und erneut eine `ValidationError` exception auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_ Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** an die in **views.py** definierte Funktion `renew_book_librarian()` weiter und sendet die `BookInstance`-ID als den als `pk` bezeichneten Parameter. Das Muster passt nur, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die komplette Kontrolle über die View-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Dennoch ist `pk`, kurz für "primary key", eine sinnvolle Konvention!

### Ansicht

Wie im Abschnitt über den [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) erläutert, muss die Ansicht das Standardformular rendern, wenn sie zum ersten Mal aufgerufen wird, und es dann entweder mit Fehlermeldungen neu rendern, wenn die Daten ungültig sind, oder die Daten bei Gültigkeit bearbeiten und auf eine neue Seite umleiten. Um diese verschiedenen Aktionen auszuführen, muss die Ansicht wissen, ob sie erstmals aufgerufen wird, um das Standardformular zu rendern, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu übermitteln, ist das gängigste Muster, dass die Ansicht gegen den `POST`-Anfragetyp prüft (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren, und `GET` verwendet (unter Verwendung einer `else`-Bedingung), um die anfängliche Formularerstellungsanfrage zu identifizieren. Wenn Sie Ihre Daten mit einer `GET` Anfrage übermitteln möchten, dann besteht ein gängiger Ansatz zur Identifizierung, ob dies der erste oder ein späterer Aufruf der Ansicht ist, darin, die Formulardaten zu lesen (z.B. um einen versteckten Wert im Formular zu lesen).

Da der Buchverlängerungsprozess in unserer Datenbank geschrieben wird, verwenden wir konventionsgemäß den `POST`-Anfrageansatz. Der folgende Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

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

Zunächst importieren wir unser Formular (`RenewBookForm`) sowie eine Anzahl anderer nützlicher Objekte/Methoden, die im Körper der Funktionsansicht verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein angegebenes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Umleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies erzeugt eine URL aus einem URL-Konfigurationsnamen und einer Gruppe von Argumenten. Es ist das Python-Äquivalent des `url` Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Daten und Uhrzeiten.

In der Ansicht verwenden wir zuerst das `pk` Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, beendet die Ansicht sofort und die Seite zeigt einen "nicht gefunden" Fehler an). Wenn dies _keine_ `POST` Anfrage ist (behandelt durch die `else` Klausel), dann erstellen wir das Standardformular und übergeben einen `initial` Wert für das `renewal_date` Feld, 3 Wochen ab dem aktuellen Datum.

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

Nachdem wir das Formular erstellt haben, rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei wir die Vorlage und einen Kontext angeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das Buch bereitzustellen, das wir verlängern.

Wenn es jedoch eine `POST` Anfrage ist, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird als "Binden" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode für alle Felder ausführt – einschließlich sowohl des generischen Codes, um sicherzustellen, dass unser Datumsfeld tatsächlich ein gültiges Datum ist, als auch unserer spezifischen `clean_renewal_date()` Funktion, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, diesmal wird der Formularwert, der im Kontext übergeben wird, Fehlermeldungen enthalten.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu verwenden, indem wir auf das `form.cleaned_data` Attribut zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach im `due_back` Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch auf die Formulardaten direkt über die Anfrage zugreifen können (z.B. `request.POST['renewal_date']` oder `request.GET['renewal_date']` bei einer GET Anfrage), wird dies NICHT empfohlen. Die bereinigten Daten sind gesäubert, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht ist die Weiterleitung zu einer anderen Seite, üblicherweise einer "Erfolgsseite". In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` weiterzuleiten (diese wurde als "Herausforderung" in [Django Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, ziehen Sie in Betracht, zur Startseite mit der URL `/` umzuleiten).

Das ist alles, was für die Formularbearbeitung selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht auf nur eingeloggte Bibliothekare beschränken, die berechtigt sind, Bücher zu verlängern. Wir verwenden `@login_required`, um sicherzustellen, dass der Benutzer eingeloggt ist, und den `@permission_required` Funktions-Dekorator mit unserer vorhandenen `can_mark_returned` Berechtigung, um den Zugriff zu ermöglichen (Dekoratoren werden in der angegebenen Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigung im `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir verwenden die bestehende, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher unten gezeigt. Bitte kopieren Sie dies ans Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den untenstehenden Code hinein:

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

Das meiste davon wird Ihnen aus den vorherigen Tutorials völlig vertraut sein.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und ihre Variablen) zugreifen, da sie im Kontextobjekt in der `render()` Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Ausleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags und geben an, wohin das Formular gesendet werden soll (`action`) und die `method` zum Übermitteln der Daten (in diesem Fall ein `POST`) — wenn Sie die [HTML Formulare](#html-formulare) Übersicht oben auf der Seite erinnern, bedeutet ein leerer `action`, wie angezeigt, dass die Formulardaten an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit` Eingabe, die ein Benutzer drücken kann, um die Daten zu übermitteln. Das `{% csrf_token %}`, das gerade innerhalb der Formular-Tags hinzugefügt wird, ist Teil von Djangos Schutz gegen Cross-Site-Forgery.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen und die `POST` zum Übermitteln von Daten verwendet. Dies wird die Chance verringern, dass Formulare von böswilligen Benutzern entführt werden.

Alles, was noch bleibt, ist die `\{{ form }}` Templatevariable, die wir im Kontext-Dictionary der Vorlage übergeben haben.
Vielleicht wenig überraschend liefert sie bei der Verwendung wie gezeigt die Standarddarstellung aller Formularfelder, einschließlich ihrer Bezeichnungen, Widgets und Hilfetexte — die Darstellung sieht wie unten gezeigt aus:

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in seiner eigenen Tabellenspalte definiert. Dieselbe Darstellung wird bereitgestellt, wenn Sie auf die Templatevariable `\{{ form.as_table }}` verweisen.

Wenn Sie einen ungültigen Datumswert eingeben würden, würden zusätzlich die Fehlermeldungen auf der Seite angezeigt (siehe `error-list` unten).

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

#### Andere Möglichkeiten, die Formular-Templatevariable zu verwenden

Wenn Sie `\{{ form.as_table }}` wie oben gezeigt verwenden, wird jedes Feld als Tabellenzeile gerendert. Sie können jedes Feld auch als Listenelement rendern (unter Verwendung von `\{{ form.as_ul }}`) oder als Absatz (unter Verwendung von `\{{ form.as_p }}`).

Es ist auch möglich, die vollständige Kontrolle über die Darstellung jedes Teils des Formulars zu haben, indem Sie seine Eigenschaften mit Punktnotation ansprechen. So können Sie beispielsweise auf eine Anzahl von separaten Items für unser `renewal_date` Feld zugreifen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID der Bezeichnung.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare manuell in Vorlagen rendert und dynamisch über Templatefelder iteriert, siehe [Arbeiten mit Formularen > Manuelles Rendern von Feldern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Herausforderung" in [Django Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, haben Sie eine Ansicht, die alle in der Bibliothek ausgeliehenen Bücher anzeigt und die nur für Bibliotheksmitarbeiter sichtbar ist. Die Ansicht könnte so ähnlich aussehen:

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

Wir können einen Link zur Buchverlängerungsseite neben jedem Element hinzufügen, indem wir den folgenden Vorlagencode an den Listenelementtext oben anhängen. Beachten Sie, dass dieser Vorlagencode nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, da dort der `bookinst` Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` haben muss, um den neu hinzugefügten "Renew" Link zu sehen, und um auf die verlinkte Seite zuzugreifen (verwenden Sie möglicherweise Ihr Administrator-Konto).

Sie können alternativ manuell eine Test-URL wie diese konstruieren — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann erhalten werden, indem man zu einer Buchdetailseite in Ihrer Bibliothek navigiert und das `id` Feld kopiert).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Absenden-Schaltfläche anzeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Verlängerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt eine Liste aller erneuerten Bücher mit ihren Details an. Überfällige sind in rot.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht Ihnen, jede Art von Formularseite zu erstellen und sie mit jedem Modell oder Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzigen_ Modells abzubilden, dann wird Ihr Modell bereits die meisten Informationen enthalten, die Sie in Ihrem Formular benötigen: Felder, Beschriftungen, Hilfetexte und so weiter. Statt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Diese `ModelForm` kann dann in Ihren Ansichten auf genau die gleiche Weise wie ein gewöhnliches `Form` verwendet werden.

Ein einfaches `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Um das Formular zu erstellen, müssen Sie lediglich `class Meta` mit dem zugeordneten `model` (`BookInstance`) und einer Liste der Modell `fields` zum Einschließen im Formular hinzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einbeziehen oder `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell einbezogen werden sollen).
>
> Keine der beiden Ansätze wird empfohlen, weil neue Felder, die dem Modell hinzugefügt werden, automatisch ins Formular aufgenommen werden (ohne dass der Entwickler notwendigerweise die möglichen Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies scheint nicht viel einfacher als die Verwendung eines `Form` zu sein (und ist es in diesem Fall auch nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann dies den erforderlichen Code erheblich reduzieren!

Der Rest der Informationen stammt aus den Mod-felddefinitionen (z.B. Bezeichnungen, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, dann können wir sie in unserem `class Meta` überschreiben, indem wir ein Dictionary angeben, das das zu ändernde Feld und seinen neuen Wert enthält. In diesem Formular möchten wir vielleicht ein Label für unser Feld "_Renewal date_" (anstatt dem Standard basierend auf dem Feldnamen: _Due Back_), und wir möchten auch, dass unser Hilfetext für diesen Anwendungsfall spezifisch ist. Das untenstehende `Meta` zeigt Ihnen, wie man diese Felder überschreibt, und Sie können ähnlich `widgets` und `error_messages` angeben, falls die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um eine Validierung hinzuzufügen, können Sie den gleichen Ansatz wie bei einem normalen `Form` verwenden – Sie definieren eine Funktion namens `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus. Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular besteht darin, dass das Mod-Feld `due_back` und nicht `renewal_date` genannt wird. Diese Änderung ist notwendig, da das entsprechende Feld in `BookInstance` `due_back` genannt wird.

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

Die Klasse `RenewBookModelForm` oben ist jetzt funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie können sie überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` auf `due_back` aktualisieren, wie in der zweiten Formdeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbearbeitungsalgorithmus, den wir im obigen Funktionsansichtsbeispiel verwendet haben, repräsentiert ein extrem häufiges Muster in Formularbearbeitungsansichten. Django abstrahiert einen Großteil dieses "Boilerplate" für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) für das Erstellen, Bearbeiten und Löschen von Modellansichten bereitstellt. Diese Anwendungsfälle verhalten sich nicht nur wie "Ansichten", sie erstellen automatisch die Formularklasse (eine `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview) Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Codierungseffort" liegt. Bei der Verwendung von `FormView` müssen Sie immer noch Ihr `Form` erstellen, aber Sie müssen nicht alle Standard-Formularbearbeitungsmuster implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt werden wir generische Bearbeitungsansichten verwenden, um Seiten zu erstellen, die die Funktionalität bieten, `Author`-Datensätze aus unserer Bibliothek zu erstellen, zu bearbeiten und zu löschen – was effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Site darstellt (dies könnte nützlich sein, wenn Sie Admin-Funktionalität auf eine flexiblere Weise anbieten müssen, als die Admin-Site bieten kann).

### Ansichten

Öffnen Sie die views-Datei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende der Datei hinzu:

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

Wie Sie sehen können, müssen Sie zur Erstellung, Aktualisierung oder zum Löschen von Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und dann das zugeordnete Modell definieren. Wir beschränken den Aufruf dieser Ansichten auch nur auf angemeldete Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`, jeweils.

Für die "erstellen" und "aktualisieren" Fälle müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung der gleichen Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Dictionary von _feld_name_/_wert_ Paaren angeben (hier setzen wir willkürlich das Sterbedatum zu Demonstrationszwecken – Sie möchten das möglicherweise entfernen). Standardmäßig leiten diese Ansichten im Erfolgsfall auf eine Seite weiter, die das neu erstellte/bearbeitete Modelldetail anzeigt, was in unserem Fall die Autorendetailansicht ist, die wir in einem vorherigen Tutorial erstellt haben. Sie können einen alternativen Weiterleitungsort durch explizite Deklaration des Parameters `success_url` angeben.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden. Wir setzen auch eine `success_url` (wie oben gezeigt), da es keinen offensichtlichen Standard-URL gibt, zu dem Django nach dem erfolgreichen Löschen des `Author` navigieren kann. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) , um nach dem Löschen eines Autors zur Autorenliste weiterzuleiten — `reverse_lazy()` ist eine faul ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einer klassenbasierten Ansichtsattribut angeben.

Wenn das Löschen von Autoren immer erfolgreich sein soll, wäre das alles. Leider wird das Löschen eines `Author` eine Ausnahme verursachen, wenn der Autor ein zugeordnetes Buch hat, da unser [`Buch`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das Autoren-`ForeignKey`-Feld spezifiziert. Um diesen Fall zu behandeln, überschreibt die Ansicht die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid) Methode, sodass wenn das Löschen des `Author` erfolgreich ist, es zur `success_url` umleitet, aber wenn nicht, leitet es einfach zur selben Form zurück. Wir werden die Vorlage unten aktualisieren, um klar zu machen, dass Sie keine `Author`-Instanz löschen können, die in einem `Buch` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts wirklich Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, den die Ansichtsklassen erwarten.

### Vorlagen

Die "erstellen" und "aktualisieren" Ansichten verwenden standardmäßig die gleiche Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix mit dem `template_name_suffix` Feld in Ihrer Ansicht zu etwas anderem als **\_form** ändern, zum Beispiel `template_name_suffix = '_other_suffix'`)

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder mit einer Tabelle. Beachten Sie auch, wie wir erneut das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe widerstandsfähig sind.

Die "Lösch"-Ansicht erwartet, eine Vorlage mit dem Format `[model_name]_confirm_delete.html` zu finden (wieder können Sie das Suffix mit `template_name_suffix` in Ihrer Ansicht ändern). Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text hinein.

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

Die Vorlage sollte bekannt sein. Sie prüft zuerst, ob der Autor in einem Buch verwendet wird, und wenn ja, zeigt sie die Liste der Bücher an, die vor dem Löschen des Autoreneintrags gelöscht werden müssen. Wenn nicht, zeigt sie ein Formular an, das den Benutzer auffordert zu bestätigen, dass er den Autoreneintrag löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzubinden. Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, sodass er in allen Seiten für angemeldete Benutzer, die als "Mitarbeiter" betrachtet werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`) sichtbar ist. Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im gleichen Block wie der Link, der "Alle ausgeliehen" Bücher anzeigt). Denken Sie daran, auf die URL mit ihrem Namen `'author-create'` wie unten gezeigt zu verweisen.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren auf der Detailseite des Autors hinzu. Öffnen Sie **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code an:

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

Dieser Block überschreibt den `sidebar` Block in der Basisvorlage und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}` hinein. Dann fügt es Links zum Aktualisieren oder Löschen des Autors hinzu, jedoch nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autoreneintrag nicht mit einem Buch in Verbindung steht.

Die Seiten sind jetzt bereit zum Testen!

### Testen der Seite

Melden Sie sich zuerst mit einem Konto auf der Website an, das die Rechte zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen "Autor erstellen" in der Seitenleiste (mit der URL `http://127.0.0.1:8000/catalog/author/create/`). Die Seite sollte wie der untenstehende Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Absenden**, um den Autoreneintrag zu speichern. Sie sollten jetzt zur Detailansicht Ihres neuen Autors weitergeleitet werden, mit einer URL, die so ähnlich aussieht wie `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetail mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Eintrags testen, indem Sie auf den Link "Autor aktualisieren" wählen (mit einer URL, die so ähnlich aussieht wie `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, weil er genauso aussieht wie die "erstellen" Seite!

Schließlich können wir die Seite löschen, indem wir "Autor löschen" aus der Seitenleiste auf der Detailseite auswählen. Django sollte die Löschseite anzeigen, die unten gezeigt wird, wenn der Autoreneintrag nicht in einem Buch verwendet wird. Drücken Sie "**Ja, löschen.**", um den Eintrag zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Buch`-Einträge zu erstellen, zu bearbeiten und zu löschen. Sie können genau die gleiche Struktur wie für die `Autor`-Einträge verwenden (für das Löschen, denken Sie daran, dass Sie ein `Buch` nicht löschen können, bis alle zugehörigen `BookInstance`-Einträge gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden. Wenn Ihre **book_form.html** Vorlage einfach eine umbenannte Kopie der **author_form.html** Vorlage ist, dann sieht die neue "Buch erstellen" Seite wie der untenstehende Screenshot aus:

![Screenshot zeigt verschiedene Felder im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Bearbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus bietet Django generische Formularbearbeitungsansichten, die _fast die gesamte_ Arbeit leisten können, um Seiten zu definieren, die Datensätze im Zusammenhang mit einer einzigen Modellinstanz erstellen, bearbeiten und löschen können.

Es gibt noch viel mehr, was mit Formularen getan werden kann (sehen Sie sich unsere [Siehe auch](#siehe_auch) Liste unten an), aber Sie sollten jetzt verstehen, wie man grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Websites hinzufügt.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-Anwendung, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Form- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
