---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten und insbesondere, wie Sie am einfachsten Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen schreiben. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, damit Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Formulare geschrieben werden, um Informationen von Benutzern zu erfassen und die Datenbank zu aktualisieren.
        Zu verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten die Erstellung von Formularen zum Arbeiten mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe aus einem oder mehreren Feldern/Widgets auf einer Webseite, die zum Sammeln von Informationen von Benutzern zur Übermittlung an einen Server verwendet werden können. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets gibt, um viele verschiedene Arten von Daten einzugeben, darunter Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahlfelder usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Während wir in diesem Tutorial bisher noch keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Site begegnet – zum Beispiel zeigt der unten stehende Screenshot ein Formular zur Bearbeitung eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)-Modelle, das aus einer Anzahl von Auswahllisten und Texteditoren besteht.

![Admin-Site - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten, kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular mit Fehlermeldungen erneut veröffentlichen, um die Benutzer auf ungültige Felder hinzuweisen, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich in irgendeiner Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nehmen einen großen Teil der Arbeit aller dieser Schritte ab, indem sie ein Framework bereitstellen, mit dem Sie Formulare und deren Felder programmatisch definieren und dann diese Objekte verwenden können, um sowohl den HTML-Code des Formulars zu generieren als auch einen Großteil der Validierung und Benutzerinteraktion zu verwalten.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und mit ihnen arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten den Arbeitsaufwand erheblich reduzieren können, den Sie für das Erstellen von Formularen zum Bearbeiten Ihrer Modelle aufbringen müssen. Unterwegs erweitern wir unsere _LocalLibrary_-Anwendung, indem wir ein Formular hinzufügen, das Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir werden Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (wir reproduzieren eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzelnen Textfeld zur Eingabe des Namens eines "Teams" und dessen zugehörigem Label:

![Einfaches Namensfeld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element vom Typ `submit`.

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

Während wir hier nur ein Textfeld für die Eingabe des Teamnamens haben, _kann_ ein Formular eine beliebige Anzahl anderer Eingabeelemente und deren zugehörige Labels haben. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den anfänglichen Wert für das Feld beim ersten Anzeigen definiert. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen des Formulars an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.

  - Die `POST`-Methode sollte immer dann verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie widerstandsfähiger gegen Cross-Site-Forgery-Request-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Es wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Aufgabe des Servers besteht zuerst darin, den anfänglichen Formularzustand zu rendern — entweder mit leeren Feldern oder vorab mit Anfangswerten versehen. Nachdem der Benutzer die Schaltfläche zum Absenden gedrückt hat, empfängt der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion durchführen (wie z.B.: Daten speichern, Suchergebnis zurückgeben, Datei hochladen, usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es eine Menge Anstrengung erfordern, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten bei Bedarf mit Fehlerberichten erneut anzuzeigen und die gewünschte Operation bei gültigen Daten durchzuführen, um alles "richtig zu machen". Django macht dies viel einfacher, indem es einen Großteil der schweren Arbeit und sich wiederholenden Code übernimmt!

## Prozess zur Verarbeitung von Formularen in Django

Die Formularverarbeitung von Django verwendet alle Techniken, die wir in früheren Tutorials gelernt haben (für die Anzeige von Informationen über unsere Modelle): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, generiert dann eine HTML-Seite und gibt sie zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und die Seite bei Fehlern erneut anzuzeigen.

Ein Prozessflussdiagramm, wie Django Formularanfragen verarbeitet, wird unten gezeigt, beginnend mit einer Anfrage nach einer Seite, die ein Formular enthält (im Diagramm grün dargestellt).

![Aktualisierter Formularverarbeitungsprozess](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben, die Djangos Formularverarbeitung übernimmt:

1. Anzeige des Standardformulars, wenn es zum ersten Mal von einem Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann vorab mit Anfangswerten gefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche anfängliche Standardwerte vorliegen).
   - In diesem Stadium wird das Formular als _nicht gebunden_ bezeichnet, da es nicht mit irgendwelchen vom Benutzer eingegebenen Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfang von Daten aus einer Übermittlungsanfrage und Anbindung an das Formular.

   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Bereinigung und Validierung der Daten.

   - Die Bereinigung der Daten führt eine Sanitization der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die möglicherweise zum Senden bösartiger Inhalte an den Server verwendet werden könnten, und wandelt sie in konsistente Python-Datentypen um.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind, etc.)

4. Wenn Daten ungültig sind, wird das Formular erneut angezeigt, diesmal mit den vom Benutzer eingegebenen Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen aus (wie das Speichern der Daten, das Versenden einer E-Mail, das Zurückgeben des Ergebnisses einer Suche, das Hochladen einer Datei und so weiter).
6. Wenn alle Aktionen abgeschlossen sind, leiten Sie den Benutzer auf eine andere Seite um.

Django bietet eine Reihe von Werkzeugen und Ansätzen, um Ihnen bei den oben genannten Aufgaben zu helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung von HTML-Formularen als auch die Säuberung/Validierung von Daten vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare anhand des praktischen Beispiels einer Seite funktionieren, die Bibliothekaren ermöglicht, Bücher zu erneuern.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir die mehr "höherstufigen" Formularframework-Klassen von Django besprechen.

## Buch-Erneuerungsformular unter Verwendung eines Forms und einer Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, die Bibliothekaren ermöglicht, ausgeliehene Bücher zu erneuern. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir werden das Feld mit einem Anfangswert 3 Wochen ab dem aktuellen Datum vorbesetzen (die normale Leihfrist) und etwas Validierung hinzufügen, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das `BookInstance.due_back`-Feld des aktuellen Datensatzes.

Das Beispiel wird eine funktionsbasierte Ansicht und eine `Form`-Klasse verwenden. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück von Djangos Formularverarbeitungssystem. Sie spezifiziert die Felder im Formular, deren Layout, Anzeige-Widgets, Labels, Anfangswerte, gültige Werte, und (einmal validiert) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zum Rendern seiner selbst in Vorlagen unter Verwendung vordefinierter Formate (Tabellen, Listen usw.) oder zum Abrufen des Wertes eines beliebigen Elements (was ein feinkörniges manuelles Rendern ermöglicht).

#### Deklarieren eines Formulars

Die Deklarationssyntax für ein `Form` ist sehr ähnlich zu der für die Deklaration eines `Modells` und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in der forms.py-Datei einer Anwendung innerhalb des Anwendungsverzeichnisses gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr einfache Formular-Klasse für unser Bibliotheksbuch-Erneuerungsformular wird unten gezeigt — fügen Sie diese zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und etwas hilfreichem Verwendungstext angezeigt wird: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten mit den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24), und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

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

Die Argumente, die den meisten Feldern gemeinsam sind, sind unten aufgeführt (sie haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None`-Wert versehen werden. Felder sind standardmäßig erforderlich, daher sollten Sie `required=False` festlegen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das bei der Darstellung des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht angegeben ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z.B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z.B. Erneuerungsdatum&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie oben im Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Überprüfen des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulardaten-Eingabe (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, Ihre Daten zu validieren. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. Wir können zum Beispiel sicherstellen, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre forms.py-Datei, sodass sie wie folgt aussieht:

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

Es gibt zwei wichtige Punkte zu beachten. Der erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` abrufen und dass wir diese Daten unabhängig davon zurückgeben, ob wir sie am Ende der Funktion ändern oder nicht.
Dieser Schritt ermöglicht es uns, die Daten "gereinigt" und von potenziell unsicheren Eingaben mithilfe der Standardvalidierer bereinigen zu lassen, und wandelt sie in den korrekten Standardtyp für die Daten um (in diesem Fall ein Python-`datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir, wenn ein Wert außerhalb unseres Bereichs fällt, eine `ValidationError`-Ausnahme auslösen und den Fehlert

ext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text zudem mit einer der [Übersetzungsfunktionen von Django](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Formulare und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Zum Beispiel, wenn Sie mehrere Felder haben, die voneinander abhängen, können Sie die Funktion [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und wiederum eine `ValidationError`-Ausnahme auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_-Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** zur Funktion `renew_book_librarian()` in **views.py** um und sendet die `BookInstance`-ID als Parameter mit dem Namen `pk`. Das Muster passt nur, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Aber `pk`, kurz für "primärer Schlüssel", ist eine vernünftige Konvention!

### Ansicht

Wie im [Prozess zur Verarbeitung von Formularen in Django](#prozess_zur_verarbeitung_von_formularen_in_django) oben besprochen, muss die Ansicht das Standardformular rendern, wenn es zum ersten Mal aufgerufen wird, und es entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und auf eine neue Seite umleiten, wenn die Daten gültig sind. Um diese verschiedenen Aktionen durchzuführen, muss die Ansicht in der Lage sein, zu erkennen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder ob es sich um einen späteren Aufruf zur Datenvalidierung handelt.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die Ansicht gegen den `POST`-Anfragetyp (über `if request.method == 'POST':`) testet, um Validierungsanforderungen für Formulare und `GET` (mit einer `else`-Bedingung) zu identifizieren, um das anfängliche Formularerstellungsanforderung zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, ist ein typischer Ansatz, um herauszufinden, ob es sich um den ersten oder einen späteren Ansichtsaufruf handelt, die Formulardaten zu lesen (z.B. einen verborgenen Wert im Formular zu lesen).

Der Bucherneuerungsprozess wird in unsere Datenbank schreiben, daher verwenden wir konventionell den `POST`-Anfrageansatz.
Der unten gezeigte Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Körper der Ansichtsfunktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein angegebenes Objekt aus einem Modell basierend auf dessen Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erzeugt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Datums- und Zeitangaben.

In der Ansicht verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an).
Wenn dies _kein_ `POST`-Anfrage ist (behandelt durch die `else`-Klausel), dann erstellen wir das Standardformular und übergeben einen `initial`-Wert für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, und geben die Vorlage und einen Kontext an, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das Buch anzuzeigen, das wir erneuern.

Wenn dies jedoch eine `POST`-Anfrage ist, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird als "Binden" bezeichnet und ermöglicht es uns, das Formular zu überprüfen.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Überprüfungscode auf alle Felder ausführt — einschließlich sowohl des generischen Codes zum Überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist als auch der Funktion `clean_renewal_date()` unseres spezifischen Formulars, um sicherzustellen, dass das Datum im richtigen Bereich liegt.

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

Wenn das Formular ungültig ist, rufen wir `render()` erneut auf, aber diesmal enthält der im Kontext übergebene Formularwert Fehlermeldungen.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu verwenden, indem wir auf `form.cleaned_data` zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach in den `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die gereinigten Daten sind bereinigt, validiert und in Python-freundliche Typen umgewandelt.

Der letzte Schritt im Formularverarbeitungsteil der Ansicht ist, den Benutzer auf eine andere Seite umzuleiten, normalerweise eine "Erfolgs"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` zu leiten (diese wurde als "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, sollten Sie in Erwägung ziehen, zur Startseite unter der URL `/` weiterzuleiten).

Das ist alles, was für die Formularverarbeitung erforderlich ist, aber wir müssen den Zugriff auf die Ansicht auf eingeloggte Bibliothekare beschränken, die die Berechtigung haben, Bücher zu erneuern. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und die Funktion `@permission_required` mit unserer vorhandenen Berechtigung `can_mark_returned`, um den Zugriff zu erlauben (Dekoratoren werden in der entsprechenden Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir werden die vorhandene wiederverwenden, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher wie unten gezeigt. Bitte kopieren Sie dies an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code hinein:

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

Das meiste davon wird Ihnen aus vorherigen Tutorials vollständig bekannt vorkommen.

Wir erweitern die grundlegende Vorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, da sie im Kontextobjekt an die `render()`-Funktion übergeben wurden und wir diese verwenden, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, in denen wir angeben, wohin das Formular gesendet werden soll (`action`) und die `method` zum Senden der Daten (in diesem Fall ein `POST`) — wenn Sie sich den [HTML-Formulare](#html-formulare)-Überblick am Anfang der Seite erinnern, bedeutet ein leeres `action`, dass die Formulardaten an die aktuelle URL der Seite zurückgesendet werden (was wir möchten). Innerhalb der Tags definieren wir die Bestätigungseingabe, die ein Benutzer drücken kann, um die Daten zu senden. Der `{% csrf_token %}` direkt innerhalb der Formulartags ist Teil von Djangos Schutz vor Cross-Site-Request-Forgery.

> [!NOTE]
> Fügen Sie den `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen und die `POST` verwendet, um Daten zu senden. Dies verringert die Wahrscheinlichkeit, dass Formulare von böswilligen Benutzern entführt werden.

Alles, was noch übrig ist, ist die `\{{ form }}`-Vorlagenvariable, die wir im Kontextwörterbuch an die Vorlage übergeben haben.
Vielleicht nicht überraschend, aber wenn Sie dies wie gezeigt verwenden, erhalten Sie die Standard-Darstellung aller Formularfelder einschließlich ihrer Labels, Widgets und Hilfetexte — die Darstellung wird unten angezeigt:

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
> Vielleicht ist es nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in einer eigenen Tabellenzeile definiert. Diese gleiche Darstellung wird angezeigt, wenn Sie auf die Vorlagenvariable `\{{ form.as_table }}` verweisen.

Wenn Sie ein ungültiges Datum eingeben würden, würden Sie zusätzlich eine Liste der Fehler auf der Seite angezeigt bekommen (siehe `errorlist` unten).

```html
<tr>
  <th><label for="id_renewal_date">Renewal date:</label></th>
  <td>
    <ul class="errorlist">
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

#### Weitere Möglichkeiten zur Verwendung der Formulartemplatenvariable

Wenn Sie `\{{ form.as_table }}` verwenden, wird jedes Feld als Tabellenzeile dargestellt. Sie können auch jedes Feld als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die Darstellung jedes Teils des Formulars vollständig zu kontrollieren, indem Sie seine Eigenschaften mit Punkt-Notation indexieren. So können wir zum Beispiel auf eine Reihe von separaten Elementen für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}:` Das ganze Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Feldhilfetext.

Weitere Beispiele, wie Sie Formulare manuell in Vorlagen rendern und dynamisch über Formularelemente iterieren können, finden Sie unter [Arbeiten mit Formularen > Manuelles Rendern von Feldern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, haben Sie eine Ansicht, die alle verleihenen Bücher in der Bibliothek anzeigt und nur für das Bibliothekspersonal sichtbar ist.
Die Ansicht könnte ähnlich aussehen wie diese:

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

Wir können einen Link zur Bucherneuerungsseite neben jedem Element hinzufügen, indem wir den folgenden Vorlagencode an den Listenelementtext oben anhängen.
Beachten Sie, dass dieser Vorlagencode nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` haben muss, um den neuen "Renew"-Link zu sehen, der oben hinzugefügt wurde, und um auf die verlinkte Seite zuzugreifen (vielleicht verwenden Sie Ihren Superuser-Account).

Sie können alternativ eine Test-URL manuell wie diese erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann durch Navigieren zu einer Buchdetailseite in Ihrer Bibliothek und Kopieren des `id`-Felds abgerufen werden).

### Wie sieht das aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Bestätigungsschaltfläche anzeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt eine Liste aller erneuerten Bücher mit ihren Details an. Das abgelaufene Datum ist rot.](forms_example_renew_allbooks.png)

## ModelForms

Ein `Form` mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht es Ihnen, jede Art von Formularseite zu erstellen und sie mit einem oder mehreren Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, das die Felder eines _einzelnen_ Modells abbildet, dann definiert Ihr Modell bereits die meisten Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetexte usw. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann in Ihren Ansichten auf die gleiche Weise wie ein gewöhnliches `Form` verwendet werden.

Ein einfaches `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) hinzuzufügen und eine Liste der Modellfelder (`fields`) anzugeben, die im Formular enthalten sein sollen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einbeziehen oder `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell einbezogen werden sollen.
>
> Keine der beiden Ansätze wird empfohlen, da neu hinzugefügte Felder zum Modell dann automatisch im Formular enthalten sind (ohne dass der Entwickler möglicherweise Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies sieht vielleicht nicht viel einfacher aus als die Verwendung eines `Form` (und in diesem Fall ist es das nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den notwendigen Code erheblich reduzieren!

Der Rest der Informationen stammt aus den Modelfeldd

efinitionen (z.B. Labels, Widgets, Hilfetext, Fehlermeldungen). Wenn diese nicht ganz korrekt sind, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch mit dem Feld, das geändert werden soll, und seinem neuen Wert angeben. Zum Beispiel könnten wir in diesem Formular ein Label für unser Feld haben wollen, das "_Renewal date_" (anstatt des standardmäßigen _Due Back_ basierend auf dem Feldnamen) lautet, und wir wollen auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Die unten gezeigte `Meta` zeigt Ihnen, wie Sie diese Felder überschreiben, und Sie können auf ähnliche Weise `widgets` und `error_messages` festlegen, wenn die Standardeinstellungen nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um eine Validierung hinzuzufügen, können Sie die gleiche Vorgehensweise wie bei einem normalen `Form` verwenden — Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modelfeld `due_back` und nicht `renewal_date` heißt.
Diese Änderung ist erforderlich, da das entsprechende Feld in `BookInstance` `due_back` genannt wird.

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

Die Klasse `RenewBookModelForm` oben ist jetzt funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten es überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` zu `due_back` ändern, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbearbeitungsalgorithmus, den wir in unserem Funktionsansichtsbeispiel oben verwendet haben, stellt ein äußerst häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert viele dieser "Boilerplate"-Arbeiten für Sie, indem generische [Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt werden. Diese handhaben nicht nur das "Ansichts"-Verhalten, sondern erstellen auch automatisch die Formular-Klasse (ein `ModelForm`) aus dem Modell.

> [!NOTE]
> Neben den hier beschriebenen Bearbeitungsansichten gibt es auch eine `FormView`-Klasse, die in Bezug auf "Flexibilität" versus "Programmieraufwand" irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten liegt. Bei Verwendung von `FormView` müssen Sie immer noch Ihr `Form` erstellen, aber Sie müssen nicht alle standardmäßigen Formverarbeitungsmuster implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die Funktionen zum Erstellen, Bearbeiten und Löschen von Autor-Datensätzen aus unserer Bibliothek hinzufügen — im Wesentlichen

eine grundlegende Neuumsetzung von Teilen der Admin-Site bereitstellen (dies könnte nützlich sein, wenn Sie Administrationsfunktionen auf eine flexiblere Weise als die Admin-Site anbieten müssen).

### Ansichten

Öffnen Sie die Ansichtsdatei (**django-locallibrary-tutorial/catalog/views.py**) und hängen Sie den folgenden Codeblock an das Ende davon an:

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

Wie Sie sehen können, müssen Sie zum Erstellen, Aktualisieren oder Löschen der Ansichten von `CreateView`, `UpdateView` und `DeleteView` ableiten (jeweils) und dann das zugehörige Modell definieren.
Wir beschränken zudem den Aufruf dieser Ansichten auf nur eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die "Erstellen"- und "Aktualisierungs"-Fälle müssen Sie außerdem die im Formular anzuzeigenden Felder angeben (mit der gleichen Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie Sie sie einzeln auflisten und die Syntax verwenden, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Wörterbuch aus _field_name_-/_value_-Paaren angeben (hier setzen wir willkürlich das Todesdatum als Demonstration ein — Sie möchten dies möglicherweise entfernen). Standardmäßig leiten diese Ansichten nach erfolgreicher Durchführung zu einer Seite weiter, die den neu erstellten/bearbeiteten Modellelement anzeigt, was in unserem Fall die Autordetailansicht ist, die wir in einem früheren Tutorial erstellt haben. Sie können eine alternative Umleitungsstelle angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, auf die Django nach dem erfolgreichen Löschen des Autors navigieren soll. Oben verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy)-Funktion, um nach einem Löschvorgang zu unserer Autorliste weiterzuleiten — `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einem Klassenattribut der Ansicht angeben.

Wenn das Löschen von Autoren immer erfolgreich sein soll, wäre das alles.
Leider würde das Löschen eines `Author` eine Ausnahme verursachen, wenn der Autor mit einem Buch verknüpft ist, da unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) für das `ForeignKey`-Feld des Autors `on_delete=models.RESTRICT` angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), damit sie, wenn das Löschen des `Author` erfolgreich ist, zur `success_url` weiterleitet, aber wenn nicht, einfach zurück zum gleichen Formular umleitet.
Wir werden die Vorlage unten aktualisieren, um klarzustellen, dass Sie keine `Author`-Instanz löschen können, die in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration unten in die Datei ein:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts besonders Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der von den Ansichtsklassen erwartete Parametername ist.

### Vorlagen

Die "Erstellen"- und "Aktualisierungs"-Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix in Ihrer Ansicht mit dem Attribut `template_name_suffix` ändern, zum Beispiel `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text:

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder mithilfe einer Tabelle. Beachten Sie auch, wie wir erneut den `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "Lösch"-Ansicht erwartet eine Vorlage im Format `[model_name]_confirm_delete.html` (auch hier können Sie das Suffix mithilfe von `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text:

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

Die Vorlage sollte Ihnen bekannt vorkommen.
Sie überprüft zunächst, ob der Autor in irgendwelchen Büchern verwendet wird und zeigt in diesem Fall die Liste der Bücher an, die gelöscht werden müssen, bevor der Autor-Datensatz gelöscht werden kann.
Wenn nicht, wird ein Formular angezeigt, das den Benutzer auffordert, zu bestätigen, dass er den Autor-Datensatz löschen möchte.

Der letzte Schritt besteht darin, die Seiten im Seitenmenü zu verlinken.
Zuerst fügen wir im _Basis-Template_ einen Link zum Erstellen eines Autors hinzu, damit er auf allen Seiten für eingeloggte Benutzer sichtbar ist, die als "Mitarbeiter" gelten und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, di

e es Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im selben Block wie der Link, der "Alle Ausgeliehen" Bücher zeigt).
Denken Sie daran, die URL mit ihrem Namen `'author-create'` zu referenzieren, wie unten gezeigt.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren zur Autorendetailseite hinzu.
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

Dieser Block überschreibt den `sidebar` Block in der Basisvorlage und zieht dann den Originalinhalt mit `\{{ block.super }}` hinein.
Anschließend fügt er Links zum Aktualisieren oder Löschen des Autors hinzu, jedoch nur wenn der Benutzer die entsprechenden Berechtigungen hat und der Autor-Datensatz keiner Bücher zugeordnet ist.

Die Seiten sind jetzt bereit zum Testen!

### Testen der Seite

Ändern Sie zunächst in den Site mit einem Konto, das Autoreneinzufügen, zu ändern und zu löschen Berechtigungen hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Create author" in der Seitenleiste aus (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie der unten gezeigte Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Submit**, um den Autorendatensatz zu speichern.
Sie sollten jetzt zu einer Detailansicht Ihres neuen Autors weitergeleitet werden, mit einer URL von etwas wie `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetail zeigt Update- und Delete-Links](forms_example_detail_author_update.png)

Sie können testen, den Datensatz zu bearbeiten, indem Sie den Link "Update author" auswählen (mit URL etwas wie `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da er aussieht wie die "Erstellen"-Seite!

Schließlich können wir die Seite löschen, indem wir "Delete author" aus der Seitenleiste auf der Detailseite auswählen.
Django sollte die Löschseite wie unten gezeigt anzeigen, wenn der Autorendatensatz in keinen Büchern verwendet wird.
Drücken Sie "**Ja, löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren zurückzukehren.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau die gleiche Struktur wie bei `Autoren` verwenden (beim Löschen beachten Sie, dass Sie kein `Buch` löschen können, bis alle seine zugehörigen `BookInstance`-Datensätze gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html**-Vorlage nur eine umbenannte Kopie der **author_form.html**-Vorlage ist, dann sieht die neue "Buch erstellen"-Seite aus wie der unten gezeigte Screenshot:

![Screenshot zeigt verschiedene Felder im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann ein komplexer Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus bietet Django generische Formularbearbeitungsansichten, die _fast die gesamte_ Arbeit leisten können, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen, die mit einer einzigen Modellinstanz verbunden sind.

Es gibt noch viel mehr, das mit Formularen gemacht werden kann (siehe unsere [siehe auch](#weitere_informationen)-Liste unten), aber Sie sollten nun verstehen, wie Sie grundlegende Forms und Formularverarbeitungscode zu Ihren eigenen Websites hinzufügen können.

## Weitere Informationen

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Form- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
