---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten können, und insbesondere die einfachste Methode, um Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, damit Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen aller vorherigen Tutorial-Themen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Zu verstehen, wie die generischen, auf Klassen basierenden Bearbeitungsansichten die Erstellung von Formularen zum Arbeiten mit einem einzigen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zu sammeln und an einen Server zu übermitteln. Formulare sind ein flexibles Mechanismus zur Erfassung von Benutzereingaben, da geeignete Widgets für die Eingabe vieler verschiedener Datentypen verfügbar sind, einschließlich Textfelder, Kontrollkästchen, Optionsfelder, Datumswähler usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir bisher keine Formulare in diesem Tutorial erstellt haben, sind wir ihnen bereits auf der Django Admin-Website begegnet — z. B. zeigt der folgende Screenshot ein Formular zum Bearbeiten eines unserer [Buch](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) Modelle mit einer Reihe von Auswahlmenüs und Texteditoren.

![Admin Site - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und korrekt bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich dem Benutzer auf erfolgreiche Weise antworten. _Django-Formulare_ nehmen viel Arbeit aus all diesen Schritten, indem sie ein Framework bereitstellen, das es ermöglicht, Formulare und deren Felder programmgesteuert zu definieren und dann diese Objekte sowohl zur Generierung des Formular-HTML-Codes als auch zur Handhabung eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und mit ihnen arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten den Arbeitsaufwand erheblich reduzieren können, den Sie benötigen, um Formulare zur Bearbeitung Ihrer Modelle zu erstellen. Unterwegs erweitern wir unsere _LocalLibrary_-Anwendung, indem wir ein Formular hinzufügen, mit dem Bibliothekare Bibliotheksbücher erneuern können. Außerdem erstellen wir Seiten, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (wir reproduzieren eine grundlegende Version des oben gezeigten Formulars zum Bearbeiten von Büchern).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzelnen Textfeld zum Eingeben des Namens eines bestimmten "Teams" und seinem zugehörigen Label:

![Einfaches Namensfeldbeispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb der `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element von `type="submit"`.

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

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, kann ein Formular _jede Anzahl_ von anderen Eingabeelementen und deren zugehörigen Labels haben. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld beim ersten Anzeigen definiert. Das passende Team-Label wird mithilfe des `label`-Tags (siehe "Enter name" oben) angegeben, mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Input wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen des Formulars an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formularattribute definieren die HTTP-`method`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück an die aktuelle Seiten-URL übermittelt.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: _post_ oder _get_.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da sie widerstandsfähiger gegen Cross-Site-Fälschungsanforderungsangriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die Benutzerdaten nicht ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL speichern oder teilen möchten.

Die Rolle des Servers besteht darin, den ursprünglichen Formularzustand wiederzugeben - entweder mit leeren Feldern oder ausgefüllt mit ersten Werten. Nachdem der Benutzer die Schaltfläche "Senden" gedrückt hat, erhält der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen überprüfen. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit Benutzerdaten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion ausführen (wie: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann das Erstellen des HTMLs, das Validieren der zurückgegebenen Daten, das erneute Anzeigen der eingegebenen Daten mit Fehlerberichten, falls erforderlich, und das Ausführen der gewünschten Operation mit gültigen Daten ziemlich viel Aufwand erfordern, um es "richtig" zu machen. Django macht dies viel einfacher, indem es einige der schweren Arbeiten und sich wiederholenden Code entfernt!

## Django Formulare-Verarbeitungsprozess

Die Formularverarbeitung von Django verwendet alle Techniken, die wir in früheren Tutorials gelernt haben (zum Anzeigen von Informationen über unsere Modelle): die Ansicht erhält eine Anfrage, führt alle erforderlichen Maßnahmen durch, einschließlich Lesen von Daten aus den Modellen, dann generiert und gibt sie eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Dinge komplizierter macht, ist, dass der Server auch bereit sein muss, die vom Benutzer bereitgestellten Daten zu verarbeiten und die Seite bei Fehlern erneut anzuzeigen.

Ein Prozessflussdiagramm, wie Django Formularanfragen handhabt, wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (im Grünen dargestellt).

![Aktualisierter Formularverarbeitungsprozess-Dokumentation.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptsachen, die Djangos Formularverarbeitung tut,:

1. Zeigen Sie das Standardformular an, das erste Mal, wenn es vom Benutzer angefordert wird.
   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit anfänglichen Werten vorab ausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Das Formular ist in diesem Punkt als _ungebunden_ bezeichnet, da es nicht mit vom Benutzer eingegebenen Daten assoziiert ist (obwohl es Anfangswerte haben kann).

2. Empfangen Sie Daten von einer Übermittlungsanfrage und binden Sie sie an das Formular.
   - Die Daten an das Formular zu binden bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Bereinigen und validieren Sie die Daten.
   - Die Datenreinigung führt eine Bereinigung der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die verwendet werden könnten, um bösartige Inhalte an den Server zu senden, und sie in konsistente Python-Typen zu konvertieren.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (zum Beispiel, dass sie sich im richtigen Datumsbereich befinden, nicht zu kurz oder zu lang sind usw.)

4. Wenn Daten ungültig sind, zeigen Sie das Formular erneut an, diesmal mit Benutzereingegebenen Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Maßnahmen aus (wie die Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, leiten Sie den Benutzer auf eine andere Seite um.

Django bietet eine Reihe von Werkzeugen und Ansätzen, um Ihnen bei den oben detaillierten Aufgaben zu helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenreinigung/validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare anhand des praktischen Beispiels einer Seite zum Erneuern von Büchern an Bibliothekare funktioniert.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir Djangos "höherstufige" Formular-Framework-Klassen besprechen.

## Erneuerungsbuchformular mit einem Formular und Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, damit Bibliothekare ausgeliehene Bücher erneuern können. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir setzen ein Anfangsdatum 3 Wochen ab dem aktuellen Datum (die normale Leihdauer) in das Feld und fügen etwas Validierung hinzu, um sicherzustellen, dass der Bibliothekar kein vergangenes Datum oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das `BookInstance.due_back`-Feld des aktuellen Datensatzes.

Das Beispiel wird eine Ansichts-basierte Ansicht und eine `Form`-Klasse verwenden. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück von Djangos Formularverarbeitungssystem. Sie legt die Felder im Formular fest, deren Layout, Anzeigewidgets, Labels, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zum Rendern in Vorlagen unter Verwendung vordefinierter Formate (Tabellen, Listen usw.) oder zum Abrufen des Wertes jedes Elements (die eine fein granulierte manuelle Anzeige ermöglicht).

#### Deklarieren eines Formulars

Die Deklarationssyntax für ein `Form` ist sehr ähnlich der Deklaration eines `Model`, und teilt den gleichen Feldtypen (und einige ähnliche Parameter). Das ist sinnvoll, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Anzeige-/Dokumentationsbeschreibung hat.

Formulardaten werden in einer forms.py-Datei innerhalb des Anwendungsverzeichnisses gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Formular` zu erstellen, importieren wir zuerst die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formularklasse für unser Bibliotheksbuch-Erneuerungsformular wird unten gezeigt - fügen Sie dies in Ihre neue Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zum Eingeben des Erneuerungsdatum, das in HTML mit einem leeren Wert, dem Standardlabel "_Erneuerungsdatum:_", und einigen hilfreichen Nutzungstext gerendert wird: "_Geben Sie ein Datum zwischen jetzt und 4 Wochen (Standard 3 Wochen)_". Da keine der anderen optionalen Argumente spezifiziert sind, akzeptiert das Feld Daten mit den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24) und wird mit dem Standard [widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) gerendert.

Es gibt viele andere Arten von Formularfeldern, die Sie weitgehend aus ihrer Ähnlichkeit zu den äquivalenten Modellfeldklassen erkennen werden:

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

Die Argumente, die den meisten Feldern gemeinsam sind, sind unten aufgelistet (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer oder mit einem `None`-Wert gelassen werden. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` festlegen, um leere Werte im Formular zu erlauben.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn kein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben ist, erstellt Django eins aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z. B. _Erneuerungsdatum_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z. B. Erneuerungsdatum&ZeroWidthSpace;**:**). Dieses Argument erlaubt Ihnen, ein anderes Suffix mit anderen Zeichen anzugeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie oben im Beispiel gesehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf durch eigene Nachrichten ersetzen.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die auf das Feld aufgerufen werden, wenn es validiert wird.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulareingabedaten (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber dessen Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Orte, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. So können wir beispielsweise validieren, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

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

Es gibt zwei wichtige Dinge zu beachten. Das Erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und dass wir diese Daten zurückgeben, unabhängig davon, ob wir sie ändern oder nicht, am Ende der Funktion.
Dieser Schritt sorgt dafür, dass wir die Daten "gereinigt" und von potenziell unsicherem Input bereinigt und in den richtigen Standardtyp für die Daten (in diesem Fall ein Python-`datetime.datetime`-Objekt) konvertiert erhalten.

Der zweite Punkt ist, dass wir, wenn ein Wert außerhalb unseres Bereichs liegt, ein `ValidationError` auslösen, wobei wir den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird. Das obige Beispiel umschließt diesen Text auch in einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Seite später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zum Validieren von Formularen in [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Zum Beispiel, in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängen, können Sie die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und wieder einen `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _Erneuerungsbücher_ Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration wird URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** zur Funktion mit dem Namen `renew_book_librarian()` in **views.py** weiterleiten und die `BookInstance`-ID als Parameter mit dem Namen `pk` senden. Das Muster passt nur, wenn `pk` eine richtig formatierte `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Jedoch ist `pk`, kurz für "primary key", eine vernünftige Konvention, die zu verwenden ist!

### Ansicht

Wie im Abschnitt [Django Formulare-Verarbeitungsprozess](#django_formulare-verarbeitungsprozess) beschrieben, muss die Ansicht das Standardformular rendern, wenn es erstmals aufgerufen wird, und es dann entweder bei ungültigen Daten mit Fehlermeldungen erneut rendern, oder bei gültigen Daten verarbeiten und auf eine neue Seite weiterleiten. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht in der Lage sein zu erkennen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder ob es sich um einen späteren Aufruf zur Validierung von Daten handelt.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die Ansicht den `POST`-Anfragetyp (`if request.method == 'POST':`) prüft, um Formulardatenüberprüfungen zu identifizieren und `GET` (mit einer `else`-Bedingung) zu verwenden, um die ursprüngliche Formularerstellung anzufordern. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, ist ein typischer Ansatz, um zu identifizieren, ob es sich um den ersten oder einen späteren Aufruf handelt, das Lesen der Formulardaten (z. B. das Lesen eines versteckten Wertes im Formular).

Der Buch-Erneuerungsprozess wird in die Datenbank schreiben, daher verwenden wir nach Konvention den `POST`-Anfrageansatz.
Der unten stehende Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

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

Zunächst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methode, die im Body der Ansichts-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zum Manipulieren von Daten und Zeiten.

In der Ansicht verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an).
Wenn dies keine `POST`-Anfrage ist (durch die `else`-Klausel behandelt), erstellen wir das Standardformular und übergeben einen `initial`-Wert für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei die Vorlage und ein Kontext angegeben werden, der unser Formular enthält. In diesem Fall enthält der Kontext auch unseren `BookInstance`, den wir in der Vorlage verwenden, um Informationen über das Buch zu liefern, das wir erneuern.

Wenn jedoch dies eine `POST`-Anfrage ist, dann erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird "Binding" genannt und ermöglicht uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, das führt den gesamten Validierungscode für alle Felder aus — einschließlich sowohl des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist als auch unserer speziellen `clean_renewal_date()`-Funktion, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular ungültig ist, rufen wir `render()` erneut auf, aber dieses Mal wird der Formularwert im Kontext Fehlermeldungen enthalten.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu verwenden, auf die wir über das `form.cleaned_data`-Attribut zugreifen (z. B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir einfach die Daten in den `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auf die Formulardaten auch direkt über die Anfrage zugreifen können (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die gereinigten Daten sind bereinigt, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht ist die Weiterleitung auf eine andere Seite, in der Regel auf eine "Erfolg"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()` um zur Ansicht mit dem Namen `'all-borrowed'` weiterzuleiten (die als "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt wurde). Wenn Sie diese Seite nicht erstellt haben, überlegen Sie sich eine Weiterleitung zur Startseite unter URL `/`).

Das ist alles, was für die Formularbearbeitung selbst benötigt wird, aber wir müssen auch den Zugriff auf die Ansicht auf angemeldete Bibliothekare beschränken, die berechtigt sind, Bücher zu erneuern. Wir verwenden `@login_required`, um sicherzustellen, dass der Benutzer angemeldet ist, und den `@permission_required` Funktionsdekorator mit unserer bestehenden `can_mark_returned` Berechtigung, um den Zugriff zu erlauben (Dekoratoren werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir verwenden die vorhandene, um das Beispiel einfach zu halten.

Die endgültige Ansicht wird daher wie unten gezeigt. Bitte kopieren Sie dies an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code:

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

Das meiste davon wird Ihnen aus früheren Tutorials bekannt vorkommen.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, da es im Kontextobjekt in der `render()` Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, geben an, wo das Formular eingereicht werden soll (`action`) und die `method` zum Senden der Daten (in diesem Fall eine `POST`) - wenn Sie sich an den [HTML-Formulare](#html-formulare) Überblick am Anfang der Seite erinnern, bedeutet ein leerer `action`, wie gezeigt, dass die Formulardaten zurück an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Eingabe, die ein Benutzer drücken kann, um die Daten abzusenden. Das `{% csrf_token %}`, das direkt innerhalb der Formular-Tags hinzugefügt wurde, ist Teil des Cross-Site Forgery Schutzes von Django.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen, die `POST` verwendet, um Daten zu senden. Dies verringert die Wahrscheinlichkeit, dass Formulare von böswilligen Benutzern gehijackt werden.

Es bleibt nur die `\{{ form }}` Template-Variable übrig, die wir im Kontext-Wörterbuch an die Vorlage übergeben haben.
Vielleicht wenig überraschend bietet diese, wenn sie wie gezeigt verwendet wird, das Standardrendering aller Formularfelder, einschließlich ihrer Labels, Widgets und Hilfetexte - das Rendering wird wie unten gezeigt.

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in seiner eigenen Tabellenzeile definiert. Das gleiche Rendering wird bereitgestellt, wenn Sie die Template-Variable `\{{ form.as_table }}` verwenden.

Wenn Sie ein ungültiges Datum eingeben würden, würde Sie zusätzlich eine Liste der Fehler auf der Seite angezeigt bekommen (siehe `error-list` unten).

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

#### Andere Möglichkeiten, die Formular-Template-Variable zu verwenden

Mit `\{{ form.as_table }}` wie oben dargestellt, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die vollständige Kontrolle über das Rendering jedes Teils des Formulars zu bekommen, indem Sie seine Eigenschaften mit Punktnotation indizieren. So können wir beispielsweise eine Reihe einzelner Elemente für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}`: Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare in Vorlagen manuell rendern kann und dynamisch über Templatefelder schleifen kann, siehe [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, haben Sie eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek anzeigt, die nur für Bibliothekspersonal sichtbar ist. Diese Ansicht könnte so aussehen:

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

Wir können einen Link zur Buch-Erneuerungsseite neben jedem Element hinzufügen, indem wir den folgenden Vorlagecode zum Text des Listenelements oben hinzufügen.
Beachten Sie, dass dieser Vorlagecode nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, da dort der Wert `bookinst` definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` haben muss, um den neuen "Renew"-Link zu sehen, der oben hinzugefügt wurde, und um auf die verlinkte Seite zuzugreifen (vielleicht verwenden Sie Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL wie diese manuell erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann erhalten werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, wird das Standardformular so aussehen:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Absende-Schaltfläche anzeigt, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem eingegebenen ungültigen Wert sieht so aus:

![Das gleiche Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt eine Liste aller erneuerten Bücher zusammen mit ihren Details an. Überfällig ist in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Eine `Form`-Klasse mit dem oben beschriebenen Ansatz zu erstellen, ist sehr flexibel, ermöglicht Ihnen, jede Art von Formularseite zu erstellen, die Sie möchten, und diese mit einem beliebigen Modell oder Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells zuzuordnen, dann definiert Ihr Modell bereits die meisten Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetexte usw. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann in Ihren Ansichten auf dieselbe Weise wie ein gewöhnliches `Form` verwendet werden.

Ein grundlegendes `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der Modell-`fields`, die im Formular enthalten sind, hinzuzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular einschließen, indem Sie `fields = '__all__'` verwenden, oder Sie können `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell enthalten werden sollen).
>
> Keiner der Ansätze wird empfohlen, da neue Felder, die dem Modell hinzugefügt werden, dann automatisch im Formular enthalten sind (ohne dass der Entwickler notwendigerweise die möglichen Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies mag nicht viel einfacher aussehen als die Verwendung eines `Form` (und ist es in diesem Fall nicht, weil wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es die erforderliche Code-Menge erheblich reduzieren!

Der Rest der Informationen kommt aus den Modellfeld-Definitionen (z. B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch mit dem Feld, das geändert werden soll und seinem neuen Wert angeben. Zum Beispiel in diesem Formular könnten wir ein Label für unser Feld mit "_Erneuerungsdatum_" haben (anstelle des standardmäßig auf dem Feldnamen basierenden: _Due Back_), und wir möchten auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist. Das `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben können, und Sie können auch `widgets` und `error_messages` festlegen, wenn die Standards nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie den gleichen Ansatz wie für ein normales `Form` verwenden — Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular besteht darin, dass das modellte Feld `due_back` genannt wird und nicht `renewal_date`.
Diese Änderung ist erforderlich, da das entsprechende Feld in `BookInstance` als `due_back` bezeichnet wird.

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

Die Klasse `RenewBookModelForm` oben ist jetzt funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten sie überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Form-Variablennamen von `renewal_date` auf `due_back` wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}` anpassen.

## Generische Bearbeitungsansichten

Der Formularverarbeitungsalgorithmus, den wir in unserem Funktionsansichts-Beispiel oben verwendet haben, stellt ein extrem häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert einen Großteil dieses "Boilerplate"-Codes für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese bearbeiten nicht nur das "Ansichts"-Verhalten, sondern erstellen auch automatisch die Formular-Klasse (ein `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die in Bezug auf "Flexibilität" vs. "Kodierungsaufwand" irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten liegt. Mit `FormView` müssen Sie zwar immer noch Ihr `Form` erstellen, aber Sie müssen nicht alle Standardformularverarbeitungspatterns implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig erkannt wird.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die Funktionalität zum Erstellen, Bearbeiten und Löschen von `Autor`-Datensätzen aus unserer Bibliothek hinzufügen — effektiv eine grundlegende Neueimplementierung von Teilen der Admin-Site bieten (dies könnte nützlich sein, wenn Sie Admin-Funktionalität in einer flexibleren Weise anbieten müssen, als sie von der Admin-Site bereitgestellt werden kann).

### Ansichten

Öffnen Sie die Ansichtsdatei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende ein:

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

Wie Sie sehen können, leiten Sie zur Erstellung, Aktualisierung oder Löschung die Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ab und definieren dann das zugehörige Modell. Wir beschränken auch die Aufrufe dieser Ansichten auf nur angemeldete Benutzer mit den `add_author`, `change_author` und `delete_author`-Berechtigungen, jeweils.

Für die "Erstellung" und "Aktualisierung" müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung derselben Syntax wie für `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln und die Syntax, um "alle" Felder aufzulisten, verwenden kann. Sie können auch Anfangswerte für jedes der Felder mithilfe eines Wörterbuchs von _field_name_/_value_-Paaren angeben (hier setzen wir für Demonstrationszwecke willkürlich das Todesdatum — möglicherweise möchten Sie dies entfernen). Standardmäßig leiten diese Ansichten im Erfolgsfall zu einer Seite weiter, die das neu erstellte/aktualisierte Modell-Element anzeigt, was in unserem Fall die Autordetailansicht ist, die wir in einem früheren Tutorial erstellt haben. Sie können einen alternativen Umleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden. Wir setzen auch ein `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django nach dem erfolgreichen Löschen des `Autors` navigiert. Oben verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy)-Funktion, um nach Löschen eines Autors zu unserer Autorenliste weiterzuleiten — `reverse_lazy()` ist eine verzögerte Ausführungs-Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einem Attribut einer klassenbasierten Ansicht bereitstellen.

Wenn das Löschen von Autoren immer gelingen soll, wäre es das.
Leider verursacht das Löschen eines `Author` eine Ausnahme, wenn der Autor ein zugehöriges Buch hat, da unser [`Buch`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das `ForeignKey`-Feld des Autors angibt. Um diesen Fall zu behandeln, überschreibt die Ansicht die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid)-Methode, sodass, wenn das Löschen des `Author` gelingt, zum `success_url` weitergeleitet wird, andernfalls wird einfach zurück zum selben Formular weitergeleitet. Wir aktualisieren die Vorlage unten, um klar zu machen, dass Sie keine `Author`-Instanz löschen können, die in einem Buch verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am unteren Rand der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts besonders Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten in der Lage sein, die URL-Muster in jedem Fall zu erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, den die Ansichtsklassen erwarten.

### Vorlagen

Die "Erstellen" und "Aktualisieren"-Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix in etwas anderes als **\_form** ändern, indem Sie das `template_name_suffix`-Feld in Ihrer Ansicht angeben, zum Beispiel, `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text ein.

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder mit einer Tabelle. Beachten Sie auch, wie wir wieder das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "Löschen"-Ansicht erwartet, dass eine Vorlage mit dem Format `[model_name]_confirm_delete.html` vorhanden ist (auch hier können Sie das Suffix in Ihrer Ansicht mithilfe von `template_name_suffix` ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text.

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
Sie überprüft zunächst, ob der Autor in einem Buch verwendet wird, und wenn ja, zeigt sie die Liste der Bücher an, die gelöscht werden müssen, bevor der Autoren-Datensatz gelöscht werden kann.
Andernfalls zeigt sie ein Formular an, das den Benutzer fragt, ob er den Autoren-Datensatz löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzuhaken.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, so dass es auf allen Seiten für angemeldete Benutzer sichtbar ist, die als "Personal" betrachtet werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`). Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung ermöglichen, den Autor zu erstellen (im selben Block wie der Link, der "Alle ausgeliehenen" Bücher anzeigt). Denken Sie daran, auf die URL unter Verwendung ihres Namens `'author-create'` zu verweisen, wie unten gezeigt.

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
Öffnen Sie **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code hinzu:

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

Dieser Block überschreibt den `sidebar`-Block in der Basisvorlage und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}` hinein.
Anschließend fügt es Links hinzu, um den Autor zu aktualisieren oder zu löschen, jedoch nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autorendatensatz nicht mit Büchern verknüpft ist.

Die Seiten sind jetzt bereit zum Testen!

### Die Seite testen

Melden Sie sich zuerst mit einem Konto an, das die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Seitenleiste aus (mit URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie der unten stehende Screenshot aussehen.

![Beispiel für ein Formular: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Senden**, um den Autoren-Datensatz zu speichern.
Sie sollten nun zu einer Detailansicht Ihres neuen Autors gelangen, mit einer URL von etwas wie `http://127.0.0.1:8000/catalog/author/10`.

![Beispiel für ein Autorendetailformular, das die Links zum Aktualisieren und Löschen anzeigt](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link "Autor aktualisieren" auswählen (mit einer URL ähnlich wie `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, weil es genauso aussieht wie die "Erstellen"-Seite!

Schließlich können wir den Autor löschen, indem Sie "Autor löschen" in der Seitenleiste auf der Detailseite auswählen.
Django sollte die Löschseite wie unten dargestellt anzeigen, wenn der Autor-Datensatz nicht in Büchern verwendet wird. Drücken Sie "**Ja, löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Buch`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dasselbe Strukturierung wie für `Autoren` verwenden (beim Löschen denken Sie daran, dass Sie ein `Buch` erst löschen können, wenn alle zugehörigen `BookInstance`-Datensätze gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden. Wenn Ihre **book_form.html**-Vorlage einfach eine umbenannte Version der **author_form.html**-Vorlage ist, wird die neue "Buch erstellen"-Seite wie der unten stehende Screenshot aussehen:

![Screenshot, der verschiedene Felder im Formular anzeigt, wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verwalten von Formularen kann ein komplexer Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus bietet Django generische Formularbearbeitungsansichten, die _fast die gesamte_ Arbeit ausführen, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen können, die mit einer einzelnen Modellinstanz verbunden sind.

Es gibt noch viel mehr, was mit Formularen gemacht werden kann (sehen Sie sich unsere [Siehe auch](#siehe_auch) Liste unten an), aber Sie sollten jetzt verstehen, wie man grundlegende Formulare und Formularhandhabungscode zu Ihren eigenen Websites hinzufügt.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
