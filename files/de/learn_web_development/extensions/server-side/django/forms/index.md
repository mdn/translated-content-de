---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 3dfa597a57487f3314974982439a12e9393279ff
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten und insbesondere, wie Sie auf einfache Weise Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen schreiben können. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)-Website, damit Bibliothekare Bücher verlängern und Autoren mithilfe eigener Formulare erstellen, aktualisieren und löschen können (anstelle der Admin-Anwendung).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie alle vorherigen Tutorial-Themen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und -Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie generische, klassenbasierte Bearbeitungsansichten die Erstellung von Formularen zur Arbeit mit einem einzigen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Widgets gibt, um viele verschiedene Arten von Daten einzugeben, darunter Textfelder, Kontrollkästchen, Optionsschaltflächen, Datumsauswahlen usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits in der Django Admin-Seite begegnet – zum Beispiel zeigt der untenstehende Screenshot ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)-Modelle, bestehend aus mehreren Auswahllisten und Texteditoren.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und korrekt bereinigen, das Formular mit Fehlermeldungen erneut posten, um Benutzer über ungültige Felder zu informieren, die Daten nach erfolgreicher Einreichung verarbeiten und schließlich in irgendeiner Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nehmen Ihnen in all diesen Schritten viel Arbeit ab, indem sie ein Framework bereitstellen, das es Ihnen ermöglicht, Formulare und deren Felder programmgesteuert zu definieren und diese Objekte dann sowohl zur Generierung des Formular-HTML-Codes als auch zur Handhabung eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial werden wir Ihnen einige der Möglichkeiten zeigen, wie Sie Formulare erstellen und mit ihnen arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten den Arbeitsaufwand zur Erstellung von Formularen zur Manipulation Ihrer Modelle erheblich reduzieren können. Dabei erweitern wir unsere _LocalLibrary_-Anwendung, indem wir ein Formular hinzufügen, mit dem Bibliothekare Bibliotheksbücher verlängern können, und Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern nachbilden).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und dem zugehörigen Label:

![Einfaches Namensfeld-Beispiel im HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `submit` enthalten.

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

Während wir hier nur ein Textfeld zur Eingabe des Teamnamens haben, kann ein Formular _jede_ Anzahl anderer Eingabeelemente und ihrer zugehörigen Labels haben. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es zum ersten Mal angezeigt wird. Das zugehörige Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Input wird standardmäßig als Button angezeigt.
Dieser kann gedrückt werden, um die Daten in allen anderen Eingabeelementen des Formulars an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, sowie das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden, wenn das Formular abgeschickt wird. Wenn dies nicht eingestellt (oder auf einen leeren String eingestellt) ist, wird das Formular an die aktuelle Seiten-URL gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten eine Änderung an der Datenbank des Servers bewirken sollen, da sie gegen Cross-Site-Forgery-Request-Angriffe widerstandsfähiger gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Rolle des Servers besteht zunächst darin, den anfänglichen Zustand des Formulars darzustellen – entweder mit leeren Feldern oder mit voreingestellten Werten. Nachdem der Benutzer auf die Schaltfläche zum Absenden gedrückt hat, empfängt der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen und dabei Benutzereingaben in "gültigen" Feldern und Nachrichten anzeigen, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion ausführen (zum Beispiel: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es einiges an Aufwand erfordern, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten mit Fehlerberichten bei Bedarf erneut anzuzeigen und die gewünschte Operation an gültigen Daten durchzuführen, um "alles richtig zu machen". Django macht es viel einfacher, indem es einige der schweren Arbeiten und den sich wiederholenden Code übernimmt!

## Django-Formular-Bearbeitungsprozess

Djangos Formularbearbeitung verwendet alle Techniken, die wir in früheren Tutorials gelernt haben (zur Anzeige von Informationen über unsere Modelle): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und dann generiert und gibt sie eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite erneut anzuzeigen, wenn Fehler vorliegen.

Eine Prozessflussdiagramm darüber, wie Django Formularanfragen behandelt, wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (grün angezeigt).

![Aktualisierter Formularbearbeitungsprozess-Dokumentation](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptdinge, die Djangos Formularbearbeitung tut:

1. Zeigen Sie das Standardformular an, das beim ersten Mal vom Benutzer angefordert wird.
   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorab ausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Das Formular wird zu diesem Zeitpunkt als _ungebunden_ bezeichnet, da es nicht mit Benutzereingaben verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfangen Sie Daten von einer Übermittlungsanforderung und binden Sie sie an das Formular.
   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Bereinigen und validieren Sie die Daten.
   - Die Datenbereinigung führt eine Bereinigung der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die zum Senden von schädlichem Inhalt an den Server verwendet werden könnten, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind, usw.)

4. Wenn irgendwelche Daten ungültig sind, zeigen Sie das Formular erneut an, diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen durch (wie das Speichern der Daten, das Senden einer E-Mail, das Zurückgeben des Ergebnisses einer Suche, das Hochladen einer Datei usw.).
6. Sobald alle Aktionen abgeschlossen sind, leiten Sie den Benutzer zu einer anderen Seite weiter.

Django bietet Ihnen eine Reihe von Tools und Ansätzen, die Ihnen bei den oben beschriebenen Aufgaben helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung des Formular-HTMLs als auch das Bereinigen/Validieren von Daten vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare mit dem praktischen Beispiel einer Seite, mit der Bibliothekare Bücher verlängern können, funktionieren.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir über Djangos mehr "höherstufige" Formular-Frameworks sprechen.

## Verlängerungsformular für Bücher mit einer Form und Funktionsansicht

Als nächstes werden wir eine Seite hinzufügen, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu verlängern. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir fügen dem Feld einen Anfangswert 3 Wochen ab dem aktuellen Datum hinzu (die normale Ausleihfrist) und fügen einige Validierungen hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein zu weit in der Zukunft liegendes Datum eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das `BookInstance.due_back`-Feld des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. In den folgenden Abschnitten wird erklärt, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse bildet das Herzstück von Djangos Formularbearbeitungssystem. Sie spezifiziert die Felder im Formular, deren Layout, Darstellungs-Widgets, Labels, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zur Darstellung der Formulare in Templates mit vordefinierten Formaten (Tabellen, Listen usw.) oder zum Abrufen des Werts eines Elements (ermöglicht eine fein granulierte manuelle Darstellung).

#### Formulare deklarieren

Die Deklarationssyntax für eine `Form` ist der Deklaration eines `Model` sehr ähnlich und teilt dieselben Feldtypen (und einige ähnliche Parameter). Dies ergibt Sinn, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung für Anzeige/Dokumentation hat.

Formulardaten werden in der forms.py-Datei einer Anwendung gespeichert, innerhalb des Anwendungsverzeichnisses. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um eine `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formularklasse für unser Bibliotheksbuchverlängerungsformular ist unten gezeigt – fügen Sie dies Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zum Eingeben des Verlängerungsdatums, das in HTML mit einem leeren Wert gerendert wird, dem Standard-Label "_Renewal date:_", und einem hilfreichen Nutzungshinweis: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keine der anderen optionalen Argumente spezifiziert sind, akzeptiert das Feld Daten gemäß den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24), und wird mit dem Standard-[Widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie weitgehend aus ihrer Ähnlichkeit zu den entsprechenden Modellfeldklassen wiedererkennen werden:

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

Die Argumente, die den meisten Feldern gemeinsam sind, sind unten aufgelistet (sie haben vernünftige Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer sein oder einen `None` Wert haben. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht spezifiziert ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben groß schreibt und Unterstriche durch Leerzeichen ersetzt (z.B., _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird ein Doppelpunkt nach dem Label angezeigt (z.B. Renewal date&ZeroWidthSpace;**:**). Dieses Argument ermöglicht es Ihnen, ein anderes Suffix mit anderen Zeichen zu spezifizieren.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeige-Widget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet wird.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf durch Ihre eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Aktiviert die Lokalisierung der Formulareingabe (sehen Sie sich den Link für weitere Informationen an).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django stellt zahlreiche Möglichkeiten zur Verfügung, um Ihre Daten zu validieren. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld, das Sie überprüfen möchten, zu überschreiben. So können wir zum Beispiel validieren, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen durch die Implementierung von `clean_renewal_date()` liegen, wie unten gezeigt.

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

Es gibt zwei wichtige Dinge zu beachten. Das erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` abrufen und dass wir diese Daten am Ende der Funktion zurückgeben, egal ob wir sie ändern oder nicht.
Dieser Schritt ermöglicht es uns, die "bereinigten" Daten zu erhalten, die potenziell unsichere Eingaben mithilfe der Standard-Validatoren bereinigt und in den korrekten Standardtyp der Daten konvertiert wurden (in diesem Fall ein Python `datetime.datetime` Objekt).

Der zweite Punkt ist, dass wir bei einem Wert, der außerhalb unseres Bereichs liegt, eine `ValidationError`-Exception auslösen und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umhüllt diesen Text auch in eine der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) von Django, `gettext_lazy()` (importiert als `_()`), was gute Praxis ist, wenn Sie Ihre Seite später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise können Sie in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean)-Funktion überschreiben und erneut eine `ValidationError`-Exception auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, lassen Sie uns eine URL-Konfiguration für die _renew-books_-Seite hinzufügen. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die in **views.py** definierte Funktion `renew_book_librarian()` weiter und sendet die `BookInstance`-ID als Parameter namens `pk`. Das Muster passt nur, wenn `pk` korrekt als `uuid` formatiert ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten benennen, wie wir möchten, da wir die vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detail-Ansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Allerdings ist `pk` als Abkürzung für "primary key" eine vernünftige Konvention!

### Ansicht

Wie im Abschnitt [Django-Formular-Bearbeitungsprozess](#django-formular-bearbeitungsprozess) beschrieben, muss die Ansicht das Standardformular rendern, wenn sie zum ersten Mal aufgerufen wird, und es dann entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und umleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht wissen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular anzuzeigen, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anforderung verwenden, um Informationen an den Server zu senden, besteht das häufigste Muster darin, die `POST`-Anforderung (`if request.method == 'POST':`) zu überprüfen, um Formularvalidierungsanfragen zu identifizieren, und `GET` (unter Verwendung einer `else`-Bedingung), um die anfängliche Formularerstellungsanfrage zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, ist ein typischer Ansatz, um zu identifizieren, ob dies der erste oder ein späterer Aufruf der Ansicht ist, das Auslesen der Formulardaten (z.B. um einen versteckten Wert im Formular auszulesen).

Der Buchverlängerungsprozess wird unsere Datenbank schreiben, daher verwenden wir aus Konvention den `POST`-Anfrage-Ansatz.
Das folgende Codefragment zeigt das (sehr standardisierte) Muster für diese Art von Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Hauptteil der Ansichts-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Umleitung zu einer bestimmten URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einem Satz von Argumenten. Es ist das Python-Äquivalent zum `url`-Tag, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zum Manipulieren von Daten und Zeiten.

In der Ansicht verwenden wir zunächst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an).
Wenn dies _keine_ `POST`-Anfrage ist (behandelt von der `else`-Klausel), erstellen wir das Standardformular und übergeben einen `initial`-Wert für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum.

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

Nach der Erstellung des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei wir die Vorlage und einen Kontext angeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unser `BookInstance`, das wir in der Vorlage verwenden, um Informationen über das Buch bereitzustellen, das wir verlängern.

Wenn dies jedoch eine `POST`-Anfrage ist, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Vorgang wird als "Binden" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode für alle Felder ausführt – einschließlich des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, und der spezifischen `clean_renewal_date()`-Funktion unseres Formulars, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber diesmal wird der Formularwert, der im Kontext übergeben wird, Fehlermeldungen enthalten.

Wenn das Formular gültig ist, können wir die Daten verwenden, indem wir auf das Attribut `form.cleaned_data` zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach in dem `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auf die Formulardaten auch direkt über die Anfrage zugreifen können (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind bereinigt, validiert, und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht besteht darin, zu einer anderen Seite weiterzuleiten, normalerweise einer "Erfolgsseite". In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()` zur Weiterleitung zur Ansicht mit dem Namen `'all-borrowed'` (dies wurde als Herausforderung im [Django-Tutorial Teil 8: Benutzer-Authentifizierung und -Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, ziehen Sie in Betracht, zur Startseite mit der URL `/` weiterzuleiten).

Das ist alles, was für die Formularbearbeitung selbst erforderlich ist, aber wir müssen den Zugriff auf die Ansicht nur auf eingeloggte Bibliothekare beschränken, die die Berechtigung haben, Bücher zu verlängern. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und die Funktion `@permission_required`-Dekorator mit unserer vorhandenen `can_mark_returned`-Berechtigung, um den Zugriff zu ermöglichen (Dekoratoren werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir verwenden die vorhandene, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher wie unten gezeigt. Bitte kopieren Sie dies am Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den folgenden Code dazu:

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

Das meiste davon wird Ihnen aus früheren Tutorials vollständig bekannt sein.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, weil es im Kontextobjekt in der `render()`-Funktion übergeben wurde, und verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, geben an, wo das Formular eingereicht werden soll (`action`) und die `method` zum Senden der Daten (in diesem Fall ist es `POST`) – wenn Sie den Überblick über [HTML-Formulare](#html-formulare) am Anfang der Seite erinnern, bedeutet eine leere `action`, dass die Formulardaten an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Eingabe, die ein Benutzer drücken kann, um die Daten zu senden. Das `{% csrf_token %}`, das direkt innerhalb der Formular-Tags hinzugefügt wird, ist Teil von Djangos Schutz vor Cross-Site-Forgery.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen und die `POST` verwendet, um Daten zu senden. Dies verringert die Wahrscheinlichkeit, dass Formulare von böswilligen Benutzern gehijackt werden.

Alles, was übrig bleibt, ist die `\{{ form }}`-Template-Variable, die wir in das Template im Kontext-Wörterbuch übergeben haben.
Vielleicht erstaunlich, aber wenn sie wie gezeigt verwendet wird, bietet sie die Standarddarstellung aller Formularfelder, einschließlich ihrer Bezeichnungen, Widgets und Hilfetexte – die Darstellung ist wie unten gezeigt:

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in seiner eigenen Tabellenzeile definiert. Dieselbe Darstellung wird geliefert, wenn Sie auf die Template-Variable `\{{ form.as_table }}` verweisen.

Wenn Sie ein ungültiges Datum eingeben, erhalten Sie zusätzlich eine Liste der Fehler, die auf der Seite gerendert werden (siehe `error-list` unten).

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

Wenn Sie `\{{ form.as_table }}` wie oben gezeigt verwenden, wird jedes Feld als Tabellenzeile gerendert. Sie können jedes Feld auch als Listenpunkt (unter Verwendung von `\{{ form.as_ul }}`) oder als Absatz (unter Verwendung von `\{{ form.as_p }}`) darstellen.

Es ist auch möglich, die vollständige Kontrolle über die Darstellung jedes Teils des Formulars zu haben, indem Sie seine Eigenschaften mit Punktnotation indizieren. So können Sie z.B. auf eine Reihe von separaten Elementen für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}:` Das ganze Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Weitere Beispiele für die manuelle Darstellung von Formularen in Vorlagen und das dynamische Schleifen über Template-Felder finden Sie unter [Working with forms > Rendering fields manually](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die "Herausforderung" im [Django-Tutorial Teil 8: Benutzer-Authentifizierung und -Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, haben Sie eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek zeigt und nur für Bibliothekspersonal sichtbar ist.
Die Ansicht könnte so ähnlich wie diese aussehen:

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

Wir können einen Link zur Buchverlängerungsseite neben jedem Element hinzufügen, indem wir den folgenden Template-Code zum Listenpunktext oben hinzufügen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` haben muss, um den neuen "Renew"-Link wie oben hinzugefügt zu sehen und um auf die verlinkte Seite zuzugreifen (verwenden Sie vielleicht Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL wie diese manuell erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann erhalten werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Verlängerungsdatum und einen Absenden-Button zeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültig eingegebenen Wert sieht so aus:

![Selbes Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Verlängerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Verlängerungslinks wird so aussehen:

![Zeigt eine Liste aller verlängerten Bücher zusammen mit ihren Details an. Überfällig ist in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht es Ihnen, jede Art von Formularseite zu erstellen und sie mit jedem Modell oder Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzigen_ Modells zuzuordnen, dann wird Ihr Modell die meisten der Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetext und so weiter bereits definieren. Anstatt die Modell Definitionen in Ihrem Formular zu rekonstruieren, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann innerhalb Ihrer Ansichten genauso wie ein gewöhnliches `Form` verwendet werden.

Ein grundlegendes `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der Modell `fields` anzugeben, die in das Formular aufgenommen werden sollen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular über `fields = '__all__'` einbeziehen oder Sie können `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell in das Formular aufgenommen werden sollen).
>
> Keine dieser Methoden wird empfohlen, da neue Felder, die zum Modell hinzugefügt werden, dann automatisch in das Formular aufgenommen werden (ohne dass der Entwickler notwendigerweise mögliche Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies mag nicht viel einfacher aussehen als die Verwendung eines `Form` (und in diesem Fall ist es das nicht, weil wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den erforderlichen Code erheblich reduzieren!

Der Rest der Informationen kommt aus den Modellfelddefinitionen (z.B. Beschriftungen, Widgets, Hilfetext, Fehlermeldungen). Wenn diese nicht ganz korrekt sind, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch angeben, das das zu ändernde Feld und seinen neuen Wert enthält. In diesem Formular möchten wir beispielsweise ein Label für unser Feld "_Renewal date_" (anstelle des standardmäßig auf dem Feldnamen basierenden Labels: _Due Back_) und wir möchten auch unseren Hilfetext spezifisch für diesen Anwendungsfall haben.
Das `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben können, und Sie können auf ähnliche Weise `widgets` und `error_messages` einstellen, wenn die Standards nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie denselben Ansatz wie bei einem normalen `Form` verwenden – Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen `ValidationError`-Exceptions für ungültige Werte aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` und nicht `renewal_date` heißt.
Diese Änderung ist notwendig, da das entsprechende Feld in `BookInstance` `due_back` heißt.

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

Die Klasse `RenewBookModelForm` oben ist nun funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie können sie importieren und verwenden, wo immer Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formulardatensatznamen von `renewal_date` in `due_back` wie in der zweiten Formular-Deklaration ändern: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularverarbeitungsalgorithmus, den wir in unserem Funktionsansichts-Beispiel oben verwendet haben, repräsentiert ein äußerst häufiges Muster in Formularbearbeitungsansichten. Django abstrahiert vieles von diesem "Boilerplate"-Code für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese bearbeiten nicht nur das Verhalten der "Ansicht", sondern erstellen automatisch die Formularklasse (ein `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Programmierungsaufwand" liegt. Durch die Verwendung der `FormView` müssen Sie immer noch Ihr `Form` erstellen, aber Sie müssen nicht alle Standardverfahren zur Formularverarbeitung implementieren. Stattdessen müssen Sie lediglich eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig erkannt wird.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zum Erstellen von Funktionen zu erstellen, um `Author`-Einträge aus unserer Bibliothek zu erstellen, zu bearbeiten und zu löschen — effektiv bieten wir eine grundlegende Reimplementierung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie administrative Funktionalität auf eine flexiblere Weise anbieten müssen, als sie von der Verwaltungsseite bereitgestellt werden kann).

### Ansichten

Öffnen Sie die Ansichtsdatei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock an das Ende der Datei hinzu:

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

Wie Sie sehen, müssen Sie zum Erstellen, Aktualisieren oder Löschen von Ansichten von `CreateView`, `UpdateView` bzw. `DeleteView` ableiten und dann das zugehörige Modell definieren.
Wir beschränken den Zugriff auf diese Ansichten auch nur auf eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für den "Erstellen"- und "Aktualisieren"-Fall müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung derselben Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet, und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mithilfe eines Wörterbuchs von _field_name_/_value_-Paaren angeben (hier setzen wir willkürlich das Todesdatum zu Demonstrationszwecken — Sie möchten dies möglicherweise entfernen). Standardmäßig leiten diese Ansichten im Erfolgsfall auf eine Seite um, die das neu erstellte/bearbeitete Modellelement anzeigt, das in unserem Fall die in einem vorherigen Tutorial erstellte Autorendetailansicht ist. Sie können einen alternativen Umleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch einen `success_url` (wie oben gezeigt), weil es keine offensichtliche Standard-URL für Django gibt, um nach dem erfolgreichen Löschen des `Author` zu navigieren. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy), um nach dem Löschen eines Autors zur Liste der Autoren umzuleiten — `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL für ein Klassenfeld angeben.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre das alles.
Leider führt das Löschen eines `Author` zu einer Ausnahme, wenn der Autor ein zugeordnetes Buch hat, da unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das `ForeignKey`-Feld des Autors angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid) so, dass wenn das Löschen des `Author` erfolgreich ist, er zur `success_url` umleitet, aber wenn nicht, wird er einfach zurück zum gleichen Formular umgeleitet.
Wir werden die Vorlage unten aktualisieren, um klarzustellen, dass Sie keine `Author`-Instanz löschen können, die in einem `Book` verwendet wurde.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts Besonderes! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für den erfassten Primärschlüsselwert verwenden, da dies der von den Ansichtsklassen erwartete Parameternamen ist.

### Vorlagen

Die "Erstellen"- und "Aktualisieren"-Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix in etwas anderes ändern als **\_form**, indem Sie den `template_name_suffix`-Feld in Ihrer Ansicht verwenden, z.B. `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den untenstehenden Text ein.

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

Dies ähnelt unseren früheren Formularen und rendert die Felder mit einer Tabelle. Beachten Sie auch, wie wir erneut das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "Lösch"-Ansicht erwartet von Ihnen, eine Vorlage mit dem Format `[model_name]_confirm_delete.html` zu finden (wiederum können Sie das Suffix mit `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den untenstehenden Text dazu.

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

Die Vorlage sollte Ihnen vertraut vorkommen.
Sie überprüft zuerst, ob der Autor in Büchern verwendet wird, und zeigt in diesem Fall die Liste der Bücher an, die gelöscht werden müssen, bevor der Author-Datensatz gelöscht werden kann.
Wenn nicht, zeigt sie ein Formular an, das den Benutzer auffordert, zu bestätigen, dass er den Autor-Datensatz löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Sidebar einzubinden.
Zuallererst fügen wir im Basistemplate einen Link zum Erstellen des Autors hinzu, sodass er in allen Seiten für eingeloggte Benutzer sichtbar ist, die als "Mitarbeiter" angesehen werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im selben Block wie der Link, der "Alle ausgeliehen" Bücher anzeigt).
Vergessen Sie nicht, auf die URL mit ihrem Namen `'author-create'` wie unten gezeigt zu verweisen.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren auf der Autorendetailseite hinzu.
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

Dieser Block überschreibt den `sidebar`-Block im Basistemplate und zieht dann den ursprünglichen Inhalt mithilfe von `\{{ block.super }}`.
Er fügt dann Links zum Aktualisieren oder Löschen des Autors hinzu, aber nur, wenn der Benutzer die richtigen Berechtigungen hat und der Author-Datensatz nicht mit Büchern verknüpft ist.

Die Seiten sind nun bereit zum Testen!

### Die Seite testen

Melden Sie sich zuerst mit einem Konto an, das Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Sidebar (mit URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie im untenstehenden Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Submit**, um den Autorendatensatz zu speichern.
Sie sollten nun zu einer Detailansicht für Ihren neuen Autor weitergeleitet werden, mit einer URL wie `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetail zeigt Update- und Lösch-Links an](forms_example_detail_author_update.png)

Sie können den Datensatz testen, indem Sie den "Autor aktualisieren" Link auswählen (mit URL so ähnlich wie `http://127.0.0.1:8000/catalog/author/10/update/`) – wir zeigen keinen Screenshot, weil er genauso aussieht wie die "Erstellen"-Seite!

Schließlich können wir die Seite löschen, indem Sie "Autor Löschen" aus der Sidebar der Detailseite auswählen.
Django sollte die unten gezeigte Löschseite anzeigen, wenn der Author-Datensatz nicht in Büchern verwendet wird.
Drücken Sie "**Ja, löschen.**", um den Datensatz zu löschen und zur Liste aller Autoren zu gelangen.

![Formular mit Option zum Löschen eines Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dieselbe Struktur wie bei `Authors` verwenden (beim Löschen denken Sie daran, dass Sie ein `Book` nicht löschen können, bis alle zugehörigen `BookInstance`-Datensätze gelöscht wurden) und Sie müssen die korrekten Berechtigungen verwenden.
Wenn Ihr **book_form.html**-Template nur eine umbenannte Kopie des **author_form.html**-Templates ist, wird die neue "Buch erstellen"-Seite wie im untenstehenden Screenshot aussehen:

![Screenshot zeigt verschiedene Felder im Formular, wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Die Erstellung und Bearbeitung von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, darzustellen und zu validieren. Außerdem bietet Django generische Formular-Bearbeitungsansichten, die _fast die gesamte_ Arbeit übernehmen können, um Seiten zu definieren, die Datensätze im Zusammenhang mit einer einzigen Modellinstanz erstellen, bearbeiten und löschen können.

Es gibt noch viel mehr, was mit Formularen gemacht werden kann (sehen Sie sich unsere [Siehe auch](#siehe_auch)-Liste unten an), aber Sie sollten nun verstehen, wie Sie grundlegende Formulare und Formularbearbeitungs-Code zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Ihr erstes Django-App, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formular-Bearbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
