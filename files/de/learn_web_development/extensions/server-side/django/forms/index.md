---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie in Django mit HTML-Formularen arbeiten und insbesondere die einfachste Art und Weise, Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website, damit Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen (anstatt der Admin-Anwendung) erstellen, aktualisieren und löschen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten die Erstellung von Formularen für die Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden kann, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets zum Eingeben vieler verschiedener Datentypen gibt, einschließlich Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswähler und so weiter. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Während wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Website begegnet - etwa zeigt der Screenshot unten ein Formular zur Bearbeitung eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) Modelle, das aus einer Reihe von Auswahllisten und Texteditoren besteht.

![Admin-Site - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular erneut mit Fehlermeldungen posten, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich auf eine Art und Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django-Formulare_ nehmen Ihnen viel Arbeit in all diesen Schritten ab, indem sie ein Framework bereitstellen, mit dem Sie Formulare und ihre Felder programmatisch definieren können und dann diese Objekte verwenden, um sowohl den Form HTML-Code zu generieren als auch einen Großteil der Validierung und Benutzerinteraktion zu bewältigen.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und mit ihnen arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten den Arbeitsaufwand zur Erstellung von Formularen zur Manipulation Ihrer Modelle erheblich reduzieren können. Unterwegs werden wir unsere _LocalLibrary_-Anwendung erweitern, indem wir ein Formular hinzufügen, das Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir werden Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und seinem zugehörigen Label:

![Einfaches Namensfeld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element des Typs `type="submit"`.

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

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, kann ein Formular _jede Anzahl_ von anderen Eingabeelementen und deren zugehörigen Labels haben. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes identifizieren das Feld in JavaScript/CSS/HTML, während `value` den anfänglichen Wert für das Feld definiert, wenn es erstmals angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `inputs` enthält.

Das `submit`-Input wird standardmäßig als Button angezeigt.
Dieser kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server hochzuladen (in diesem Fall nur das `team_name` Feld).
Die Formular-Attribute definieren die HTTP `method`, mit der die Daten gesendet werden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin Daten zur Verarbeitung gesendet werden sollen, wenn das Formular abgeschickt wird. Wenn dies nicht gesetzt ist (oder zu einem leeren String gesetzt ist), dann wird das Formular an die aktuelle Seiten-URL zurückgeschickt.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: _post_ oder _get_.

  - Die `POST`-Methode sollte immer dann verwendet werden, wenn die Daten eine Änderung der Datenbank des Servers zur Folge haben, da sie widerstandsfähiger gegenüber Angriffen durch Cross-Site-Forgery-Requests gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die Benutzerdaten nicht ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn man die URL als Lesezeichen verwenden oder teilen möchte.

Die Rolle des Servers besteht zunächst darin, den anfänglichen Formularzustand zu rendern - entweder mit leeren Feldern oder vorab ausgefüllt mit Anfangswerten. Nachdem der Benutzer den Senden-Button gedrückt hat, empfängt der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Meldungen, um das Problem für die ungültigen Felder zu beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion durchführen (wie: Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen, etc.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es ziemlich viel Aufwand erfordern, um das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten bei Bedarf mit Fehlerberichten erneut anzuzeigen und die gewünschte Operation auf gültigen Daten durchzuführen, um alles "richtig" hinzubekommen. Django macht dies erheblich einfacher, indem es Ihnen einige der schweren Aufgaben und wiederholenden Codes abnimmt!

## Django-Formularbearbeitungsprozess

Die Formularbearbeitung von Django verwendet alle Techniken, die wir in früheren Tutorials kennengelernt haben (um Informationen über unsere Modelle anzuzeigen): die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und generiert dann eine HTML-Seite (aus einer Vorlage, in die wir einen _Kontext_ einfügen, der die anzuzeigenden Daten enthält) und gibt diese zurück. Was die Dinge komplexer macht, ist, dass der Server auch in der Lage sein muss, von dem Benutzer bereitgestellte Daten zu verarbeiten und die Seite bei Fehlern erneut anzuzeigen.

Ein Prozessflussdiagramm, das zeigt, wie Django Formulareingaben handhabt, ist unten dargestellt, beginnend mit einer Anfrage nach einer Seite, die ein Formular enthält (angezeigt in grün).

![Aktualisierter Formularbearbeitungsprozess](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben, die Django bei der Formularbearbeitung übernimmt:

1. Anzeige des Standardformulars, wenn es zum ersten Mal von dem Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Eintrag erstellen, oder es kann mit Anfangswerten vorab ausgefüllt sein (zum Beispiel, wenn Sie einen Eintrag ändern oder nützliche Standardanfangswerte haben).
   - Das Formular wird zu diesem Zeitpunkt als _ungebunden_ bezeichnet, da es nicht mit irgendwelchen benutzereingegebenen Daten verbunden ist (obwohl es Anfangswerte haben kann).

2. Empfang von Daten aus einer Sendeanfrage und Bindung an das Formular.

   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Säuberung und Validierung der Daten.

   - Die Datenbereinigung führt die Bereinigung der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die verwendet werden könnten, um potenziell bösartigen Inhalt an den Server zu senden, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung überprüft, ob die Werte für das Feld angemessen sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind, etc.)

4. Wenn Daten ungültig sind, das Formular erneut anzeigen, diesmal mit benutzergefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen durchführen (wie Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Django stellt eine Reihe von Tools und Ansätzen bereit, um Ihnen bei den oben genannten Aufgaben zu helfen. Das fundamentalste ist die `Form`-Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenbereinigung/-validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare mit dem praktischen Beispiel einer Seite zum Erneuern von Büchern für Bibliothekare funktionieren.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir über die "höheren" Formular-Framework-Klassen von Django sprechen.

## Buch-Erneuerungsformular mithilfe eines Formulars und einer Funktionsansicht

Als Nächstes fügen wir eine Seite hinzu, damit Bibliothekare entliehene Bücher erneuern können. Dazu erstellen wir ein Formular, das es den Benutzern ermöglicht, einen Datumswert einzugeben. Wir setzen das Feld mit einem Anfangswert 3 Wochen ab dem aktuellen Datum (der normalen Leihdauer) vorab und fügen eine Validierung hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das aktuelle `BookInstance.due_back`-Feld des Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren, und die Änderungen, die Sie an unserem fortlaufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück des Formularbearbeitungssystems von Django. Sie spezifiziert die Felder im Formular, deren Layout, Anzeige-Widgets, Labels, Anfangswerte, gültige Werte und (nach Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden, um sich selbst in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) darzustellen oder um den Wert eines Elements abzurufen (ermöglicht eine feinkörnige manuelle Darstellung).

#### Ein Formular deklarieren

Die Deklarationssyntax für ein `Form` ähnelt der Deklaration eines `Model` sehr und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, denn in beiden Fällen müssen wir sicherstellen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in einer `forms.py`-Datei einer Anwendung gespeichert, die sich im Anwendungsverzeichnis befindet. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr einfache Formular-Klasse für unser Buch-Erneuerungsformular ist unten gezeigt — fügen Sie dies Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, der Standardbezeichnung "_Erneuerungsdatum:_" und einem hilfreichen Verwendungstext: "_Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3 Wochen)._" gerendert wird. Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten im [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24) und wird mit dem Standard-[Widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) gerendert.

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

Die Argumente, die für die meisten Felder gemeinsam sind, sind unten aufgelistet (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None`-Wert versehen werden. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label für das Rendering des Feldes in HTML. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht spezifiziert ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z. B. _Erneuerungsdatum_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird ein Doppelpunkt nach dem Label angezeigt (z. B. Erneuerungsdatum&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der anfängliche Wert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeige-Widget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel gesehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um die Verwendung des Feldes zu erklären.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formular-Dateneingabe (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, um Ihre Daten zu validieren. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. So können wir zum Beispiel sicherstellen, dass die eingegebenen `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

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

Es gibt zwei wichtige Dinge zu beachten. Das erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` abrufen und dass wir diese Daten zurückgeben, egal, ob wir sie am Ende der Funktion ändern oder nicht.
Dieser Schritt liefert uns die Daten "gesäubert" und von potenziell unsicheren Eingaben mithilfe der Standard-Validatoren bereinigt und in den korrekten Standardtyp für die Daten konvertiert (in diesem Fall ein Python-`datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir, wenn ein Wert außerhalb unserer Reichweite liegt, ein `ValidationError` auslösen und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text auch mit einer der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) von Django, `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise können Sie in Fällen, in denen mehrere Felder voneinander abhängen, die Funktion [Formular.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_-Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** zur Funktion namens `renew_book_librarian()` in **views.py** um und sendet die `BookInstance`-ID als Parameter namens `pk`. Das Muster wird nur übereinstimmen, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können unseren erfassten URL-Daten einen beliebigen Namen geben, da wir die vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). `pk`, kurz für "primary key", ist jedoch eine vernünftige Konvention!

### Ansicht

Wie im Abschnitt [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) oben beschrieben, muss die Ansicht das Standardformular rendern, wenn sie zum ersten Mal aufgerufen wird und es entweder erneut mit Fehlermeldungen rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und zu einer neuen Seite umleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht in der Lage sein, zu wissen, ob es sich um den ersten Aufruf zur Darstellung des Standardformulars oder um einen nachfolgenden Aufruf zur Validierung von Daten handelt.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu übermitteln, besteht das häufigste Muster darin, wenn die Ansicht gegen den `POST`-Anfragetyp (`if request.method == 'POST':`) prüft, um Validierungsanfragen zu erkennen, und `GET` (mithilfe einer `else`-Bedingung) um die erste Anforderung zur Erstellung des Formulars zu erkennen. Wenn Sie Ihre Daten mit einer `GET`-Anfrage übermitteln möchten, besteht ein typischer Ansatz, um zu identifizieren, ob dies der erste oder ein nachfolgender Aufruf der Ansicht ist, darin, die Formulardaten zu lesen (z. B. indem Sie einen versteckten Wert im Formular lesen).

Da der Bucherneuerungsprozess in unsere Datenbank geschrieben wird, verwenden wir der Konvention nach den `POST`-Anfrageansatz.
Der Codeausschnitt unten zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

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
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Erstellt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Generiert eine URL aus einem URL-Konfigurationsnamen und einer Menge von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwenden.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Datum und Uhrzeit.

In der Ansicht verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` abzurufen (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an).
Wenn dies _nicht_ eine `POST`-Anfrage ist (behandelt durch die `else`-Klausel), dann erstellen wir das Standardformular unter Angabe eines `initial`-Werts für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum.

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

Nachdem wir das Formular erstellt haben, rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei wir die Vorlage und einen Kontext angeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das Buch anzuzeigen, das wir erneuern.

Wenn dies jedoch eine `POST`-Anfrage ist, erstellen wir unser `form`-Objekt und befüllen es mit Daten aus der Anfrage. Dieser Vorgang wird als "Bindung" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Anschließend überprüfen wir, ob das Formular gültig ist, was den gesamten Validierungscode auf alle Felder ausführt - einschließlich sowohl des generischen Codes, um zu überprüfen, dass unser Datumsfeld tatsächlich ein gültiges Datum ist als auch der `clean_renewal_date()`-Funktion unseres spezifischen Formulars, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber dieses Mal wird der im Kontext übergebene Formularwert Fehlermeldungen enthalten.

Wenn das Formular gültig ist, können wir die Daten verwenden, indem wir über das Attribut `form.cleaned_data` darauf zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir einfach die Daten in den `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Zwar können Sie auf die Formulardaten auch direkt über die Anfrage zugreifen (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), dies wird jedoch NICHT empfohlen. Die gesäuberten Daten sind bereinigt, validiert und in pythonfreundliche Typen umgewandelt.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht ist die Weiterleitung zu einer anderen Seite, normalerweise einer "Erfolgs"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht `'all-borrowed'` weiterzuleiten (dies wurde als "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, ziehen Sie in Betracht, zur Startseite der URL `/` umzuleiten).

Das ist alles, was für die Formularbearbeitung selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht nur auf angemeldete Bibliothekare beschränken, die Berechtigung zur Erneuerung von Büchern haben. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer angemeldet ist, und den Funktions-Dekorator `@permission_required` mit unserer bestehenden `can_mark_returned`-Berechtigung, um Zugriff zu gewähren (Dekoratoren werden in Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir werden die vorhandene wiederverwenden, um das Beispiel einfach zu halten.

Die endgültige Ansicht lautet daher wie unten gezeigt. Bitte kopieren Sie dies in den unteren Bereich von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die Vorlage, auf die in der Ansicht verwiesen wird (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den unten stehenden Code hinein:

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

Das meiste davon wird Ihnen aus den vorherigen Tutorials vollkommen vertraut sein.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und deren Variablen) verweisen, da es im Kontextobjekt in der `render()`-Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, geben an, wohin das Formular gesendet werden soll (`action`) und die `method` für das Übermitteln der Daten (in diesem Fall ein `POST`) — wenn Sie sich den [Überblick über HTML-Formulare](#html-formulare) oben auf der Seite erinnern, bedeutet ein leeres `action`, wie gezeigt, dass die Formulardaten an die aktuelle URL der Seite zurückgesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Eingabe, die ein Benutzer drücken kann, um die Daten zu übermitteln. Der `{% csrf_token %}` direkt innerhalb der Formulartags ist Teil von Djangos Schutz gegen Cross-Site-Fälschungen.

> [!NOTE]
> Fügen Sie den `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen und die `POST` verwendet, um Daten zu übermitteln. Dies reduziert das Risiko, dass Formulare von böswilligen Benutzern gekapert werden.

Alles, was übrig bleibt, ist die `<{{ form }}>`-Vorlagenvariable, die wir im Kontextwörterbuch an die Vorlage übergeben haben.
Es überrascht vielleicht nicht, dass dies die Standard-Wiedergabe aller Formularfelder bietet, einschließlich ihrer Labels, Widgets und Hilfetexte — die Wiedergabe erfolgt wie unten gezeigt:

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
> Vielleicht fällt es nicht auf, da wir nur ein Feld haben, aber normalerweise wird jedes Feld in einer eigenen Tabellenzeile definiert. Diese gleiche Wiedergabe wird bereitgestellt, wenn Sie die Vorlagenvariable `\{{ form.as_table }}` referenzieren.

Wenn Sie ein ungültiges Datum eingeben, erhalten Sie zusätzlich eine Liste der Fehler, die auf der Seite wiedergegeben werden (siehe `errorlist` unten).

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

#### Andere Verwendungsmöglichkeiten der Vorlagenvariable für Formulare

Indem Sie `\{{ form.as_table }}` wie oben gezeigt verwenden, wird jedes Feld als Tabellenreihe dargestellt. Sie können jedes Feld auch als Listenelement (mithilfe `\{{ form.as_ul }}`) oder als Absatz (mithilfe `\{{ form.as_p }}`) darstellen.

Es ist auch möglich, die vollständige Kontrolle über die Wiedergabe jedes Teils des Formulars zu haben, indem Sie auf seine Eigenschaften mit Punktnotation zugreifen. So können wir beispielsweise auf eine Reihe von separaten Elementen für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}:` Das ganze Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare manuell in Vorlagen rendert und Felder dynamisch durchläuft, siehe [Arbeiten mit Formularen > Felder manuell rendern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) akzeptiert haben, haben Sie eine Ansicht, die alle verliehenen Bücher in der Bibliothek anzeigt, die nur für Bibliothekspersonal sichtbar ist.
Die Ansicht könnte ungefähr so aussehen:

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

Wir können neben jedem Element einen Link zur Buchereneuerungsseite hinzufügen, indem wir den folgenden Vorlagencode an den Listelement-Text oben anhängen.
Beachten Sie, dass dieser Vorlagencode nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, da dies der Ort ist, an dem der `bookinst` Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Testkonto die Berechtigung `catalog.can_mark_returned` benötigt, um den neuen "Erneuern"-Link zu sehen, der oben hinzugefügt wurde, und um auf die verlinkte Seite zuzugreifen (verwenden Sie vielleicht Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL manuell wie folgt erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (ein gültiger `bookinstance_id` kann ermittelt werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und einen Senden-Button anzeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert eingegeben sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt eine Liste aller erneuerten Bücher mit deren Details. Überfällige sind in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Die Erstellung einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht es Ihnen, jede Art von Formularseite zu erstellen und sie mit einem beliebigen Modell oder Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, das die Felder eines _einzelnen_ Modells abbildet, enthält Ihr Modell bereits die meisten Informationen, die Sie für Ihr Formular benötigen: Felder, Labels, Hilfetexte usw. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann wie ein gewöhnliches `Form` in Ihren Ansichten verwendet werden.

Ein einfaches `ModelForm`, das das gleiche Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist, `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der Modellfelder `fields` hinzuzufügen, die im Formular enthalten sein sollen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einfügen, oder Sie können `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell im Formular enthalten sein sollen.
>
> Keiner der Ansätze wird empfohlen, da neue Felder, die dem Modell hinzugefügt werden, dann automatisch im Formular enthalten sind (ohne dass der Entwickler notwendigerweise mögliche Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies mag nicht viel einfacher aussehen als nur ein `Form` zu verwenden (und das ist es in diesem Fall nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den erforderlichen Code erheblich reduzieren!

Der Rest der Informationen stammt aus den Modelfelddefinitionen (z. B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserer `class Meta` überschreiben und ein Wörterbuch mit dem zu ändernden Feld und seinem neuen Wert angeben. Beispielsweise möchten wir in diesem Formular vielleicht ein Label für unser Feld "_Erneuerungsdatum_" (statt des standardmäßigen, auf dem Feldnamen basierenden: _Due Back_), und wir möchten auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Die `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben, und Sie können auf ähnliche Weise `widgets` und `error_messages` einstellen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie denselben Ansatz wie bei einem normalen `Form` verwenden — Sie definieren eine Funktion namens `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modelfeld `due_back` und nicht `renewal_date` genannt wird.
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

Die Klasse `RenewBookModelForm` oben ist nun funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und dort verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formulavariablennamen von `renewal_date` in `due_back` ändern, wie in der zweiten Formdeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der in unserem Funktionsansichtsbeispiel oben verwendete Formularbearbeitungsalgorithmus stellt ein extrem häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert viel von diesem "boilerplate" für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) für das Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese übernehmen nicht nur das "Ansichts"-Verhalten, sondern erstellen automatisch auch die Formular-Klasse (`ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die sich irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" und "Codingsaufwand" befindet. Mit `FormView` müssen Sie Ihr `Form` noch erstellen, aber Sie müssen nicht alle Standardmuster zur Formularbearbeitung implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, um `Author`-Datensätze zu unserem Bibliotheksbestand hinzuzufügen, zu bearbeiten und zu löschen — effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Website (dies könnte nützlich sein, wenn Sie Admin-Funktionalität auf eine flexiblere Weise anbieten müssen, als die Admin-Website bereitgestellt werden kann).

### Ansichten

Öffnen Sie die Ansichts-Datei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende der Datei hinzu:

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

Wie Sie sehen können, müssen Sie für das Erstellen, Aktualisieren oder Löschen der Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und dann das zugehörige Modell definieren.
Wir beschränken auch den Aufruf dieser Ansichten nur auf angemeldete Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die "Erstellen"- und "Aktualisieren"-Fälle müssen Sie auch die im Formular anzuzeigenden Felder angeben (unter Verwendung derselben Syntax wie für `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder unter Verwendung eines Wörterbuchs von _Feldname_-/_Wert_-Paaren angeben (hier setzen wir willkürlich das Todesdatum zu Demonstrationszwecken — möglicherweise möchten Sie dies entfernen). Standardmäßig leiten diese Ansichten bei Erfolg auf eine Seite weiter, die das neu erstellte/bearbeitete Modell-Element anzeigt, das in unserem Fall die in einem früheren Tutorial erstellte Autoren-Detailansicht sein wird. Sie können einen alternativen Umleitungsort durch explizite Angabe des Parameters `success_url` festlegen.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch ein `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL für Django gibt, wohin nach dem erfolgreichem Löschen des `Author` navigiert werden soll. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy), um nach dem Löschen eines `Author` zur Autorenliste weiterzuleiten — `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL an ein Klassenansichtsattribut bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre es das.
Leider verursacht das Löschen eines `Author` eine Ausnahme, wenn der Autor mit einem Buch verknüpft ist, da unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das `ForeignKey`-Feld des Autors angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), sodass, wenn das Löschen des `Author` erfolgreich ist, es zur `success_url` weiterleitet, und wenn nicht, es einfach wieder zurück zur gleichen Form weiterleitet.
Wir werden die Vorlage unten aktualisieren, um klarzustellen, dass Sie keine `Author`-Instanz löschen können, die in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts besonders Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten in der Lage sein, die URL-Muster in jedem Fall zu erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der von den Ansichtsklassen erwartete Parametername ist.

### Vorlagen

Die "Erstellen"- und "Aktualisieren"-Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix mit dem Feld `template_name_suffix` in Ihrer Ansicht auf etwas anderes als **\_form** ändern, zum Beispiel `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Datei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den folgenden Text hinein.

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

Die "Löschen"-Ansicht erwartet eine Vorlage mit dem Format `[model_name]_confirm_delete.html` (auch hier können Sie das Suffix in Ihrer Ansicht mit `template_name_suffix` ändern).
Erstellen Sie die Datei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den folgenden Text hinein.

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

Die Vorlage sollte Ihnen vertraut sein.
Sie überprüft zunächst, ob der Autor in irgendeinem Buch verwendet wird, und wenn ja, zeigt sie die Liste der Bücher an, die gelöscht werden müssen, bevor der Autorensatz gelöscht werden kann.
Andernfalls wird ein Formular angezeigt, in dem der Benutzer gefragt wird, ob er den Autorensatz wirklich löschen möchte.

Der letzte Schritt ist, die Seiten in die Seitenleiste einzuhängen.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, sodass er auf allen Seiten für angemeldete Benutzer sichtbar ist, die als "Mitarbeiter" angesehen werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im gleichen Block wie der Link, der alle ausgeliehenen Bücher anzeigt).
Denken Sie daran, auf die URL unter Verwendung ihres Namens `'author-create'` zu verweisen, wie unten gezeigt.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren zur Autoren-Detailseite hinzu.
Öffnen Sie **catalog/templates/catalog/author_detail.html** und hängen Sie den folgenden Code an:

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

Dieser Block überschreibt den `sidebar`-Block in der Basisvorlage und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}` herein.
Er fügt dann Links hinzu, um den Autor zu aktualisieren oder zu löschen, allerdings nur wenn der Benutzer die richtigen Berechtigungen hat und der Autorsatz nicht mit einem Buch verknüpft ist.

Die Seiten sind jetzt bereit zum Testen!

### Testen der Seite

Melden Sie sich zuerst mit einem Konto auf der Website an, das über die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren verfügt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Create author" in der Seitenleiste (mit URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte aussehen wie der unten stehende Screenshot.

![Formular-Beispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie **Submit**, um den Autorensatz zu speichern.
Sie sollten nun zur Detailansicht für Ihren neuen Autor gelangen, mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10`.

![Formular-Beispiel: Autorendetails mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie auf den Link "Update author" klicken (mit URL etwa `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da er genauso aussieht wie die "create"-Seite!

Schließlich können wir die Seite löschen, indem wir "Delete author" in der Seitenleiste auf der Detailseite auswählen.
Django sollte die unten gezeigte Löschseite anzeigen, wenn der Autorensatz in keinem Buch verwendet wird.
Drücken Sie "**Yes, delete.**", um den Datensatz zu entfernen und zur Liste aller Autoren zu gelangen.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau die gleiche Struktur wie für `Authors` verwenden (beim Löschen denken Sie daran, dass Sie ein `Book` nicht löschen können, bis alle zugehörigen `BookInstance`-Datensätze gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html**-Vorlage nur eine kopierte und umbenannte Version der **author_form.html**-Vorlage ist, wird die neue Seite "create book" wie der unten stehende Screenshot aussehen:

![Screenshot zeigt verschiedene Felder im Formular, wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Die Erstellung und Handhabung von Formularen kann ein komplexer Prozess sein! Django macht es viel einfacher, indem programmgesteuerte Mechanismen bereitgestellt werden, um Formulare zu deklarieren, darzustellen und zu validieren. Darüber hinaus bietet Django generische Formbarebeitungsansichten, mit denen fast alle Arbeiten zur Definition von Seiten, die Einträge zur einer einzelnen Modellinstanz erstellen, bearbeiten und löschen können, automatisch erledigt werden können.

Es gibt noch viel mehr, das mit Formularen gemacht werden kann (sehen Sie sich unsere [Siehe auch](#siehe_auch) Liste unten an), aber Sie sollten nun verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Ihr erstes Django-Programm schreiben, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
