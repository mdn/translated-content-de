---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
slug: Learn/Server-side/Django/Forms
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie in Django mit HTML-Formularen arbeiten können, und insbesondere den einfachsten Weg, Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, sodass Bibliothekare Bücher erneuern sowie Autoren erstellen, aktualisieren und löschen können, indem sie unsere eigenen Formulare verwenden (anstatt die Admin-Anwendung zu nutzen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich
        <a href="/de/docs/Learn/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten das Erstellen von Formularen für die Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets gibt, um viele verschiedene Datentypen einzugeben, darunter Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahl und mehr. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Cross-Site Request Forgery-Schutz zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django Admin-Seite begegnet — zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn/Server-side/Django/Models) Modelle, das aus mehreren Auswahllisten und Texteditoren besteht.

![Admin Site - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen das HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut posten, um Benutzer über ungültige Felder zu informieren, die Daten bei erfolgreicher Übermittlung verarbeiten und schließlich auf einige Weise dem Benutzer den Erfolg anzeigen. _Django-Formulare_ nehmen Ihnen bei all diesen Schritten viel Arbeit ab, indem sie ein Framework bereitstellen, mit dem Sie Formulare und ihre Felder programmatisch definieren können, um diese Objekte dann sowohl zur Generierung des Formular-HTML-Codes zu verwenden als auch um den Großteil der Validierung und Benutzerinteraktion zu handhaben.

In diesem Tutorial zeigen wir Ihnen einige Möglichkeiten, wie Sie Formulare erstellen und mit ihnen arbeiten können. Insbesondere zeigen wir, wie die generischen Bearbeitungsansichten den Aufwand, den Sie für die Erstellung von Formularen zur Manipulation Ihrer Modelle betreiben müssen, erheblich reduzieren können. Unterwegs erweitern wir unsere _LocalLibrary_ Anwendung, indem wir ein Formular hinzufügen, das es Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir erstellen Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren (eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern reproduzierend).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und dessen zugehöriger Beschriftung:

![Einfaches Namensfeld-Beispiel im HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom `type="submit"` enthalten.

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

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, kann ein Formular eine beliebige Anzahl anderer Eingabeelemente und ihrer zugehörigen Beschriftungen enthalten. Das `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes dienen zur Identifizierung des Feldes in JavaScript/CSS/HTML, während `value` den anfänglichen Wert für das Feld definiert, wenn es zuerst angezeigt wird. Die passende Team-Beschriftung wird mit dem `label`-Tag angegeben (siehe "Eingabe Name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Input wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, wohin Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht gesetzt ist (oder auf eine leere Zeichenkette gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung der Serverdatenbank führen sollen, da sie widerstandsfähiger gegen Cross-Site-Forgery-Request-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die Benutzerdaten nicht ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Aufgabe des Servers besteht zunächst darin, den anfänglichen Formularzustand zu rendern – entweder mit leeren Feldern oder vorausgefüllt mit Anfangswerten. Nachdem der Benutzer den Absende-Button gedrückt hat, wird der Server die Formulardaten mit Werten vom Webbrowser erhalten und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anforderung mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion ausführen (wie: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen, usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann das Erstellen des HTMLs, das Validieren der zurückgegebenen Daten, das erneute Anzeigen der eingegebenen Daten mit Fehlerberichten, falls erforderlich, und das Ausführen der gewünschten Operation auf gültigen Daten eine Menge Aufwand erfordern, um "es richtig zu machen". Django macht es deutlich einfacher, indem es einige der schwersten Arbeiten und wiederholenden Code übernimmt!

## Django-Formularbearbeitungsprozess

Djangos Formularbearbeitung verwendet alle Techniken, die wir in vorherigen Tutorials gelernt haben (um Informationen über unsere Modelle anzuzeigen): die Ansicht erhält eine Anforderung, führt alle erforderlichen Aktionen aus, einschließlich das Lesen von Daten aus den Modellen, und dann generiert und gibt sie eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten übergeben). Was die Sache komplizierter macht, ist, dass der Server auch die vom Benutzer bereitgestellten Daten verarbeiten und die Seite erneut anzeigen können muss, wenn Fehler vorliegen.

Ein Prozessablaufdiagramm, das zeigt, wie Django Formularanforderungen bearbeitet, wird unten gezeigt und beginnt mit einer Anforderung für eine Seite, die ein Formular enthält (im Grünen dargestellt).

![Aktualisierter Formularbearbeitungsprozess-Dok.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben, die Djangos Formularbearbeitung ausführt:

1. Das Standardformular anzeigen, wenn es zum ersten Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Zu diesem Zeitpunkt wird das Formular als _ungebunden_ bezeichnet, da es nicht mit benutzereingegebenen Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Daten von einer Absendeanforderung empfangen und an das Formular binden.

   - Daten an das Formular binden bedeutet, dass die benutzereingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Die Daten bereinigen und validieren.

   - Die Bereinigung der Daten führt eine Bereinigung der Eingabefelder durch, wie zum Beispiel das Entfernen ungültiger Zeichen, die möglicherweise verwendet werden, um schädliche Inhalte an den Server zu senden, und wandelt sie in konsistente Python-Typen um.
   - Die Validierung prüft, ob die Werte für das Feld geeignet sind (zum Beispiel, dass sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, das Formular erneut anzeigen, diesmal mit benutzerausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen ausführen (wie zum Beispiel: Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Nachdem alle Aktionen abgeschlossen sind, den Benutzer zu einer anderen Seite weiterleiten.

Django stellt Ihnen eine Reihe von Tools und Ansätzen zur Verfügung, um Sie bei den oben detaillierten Aufgaben zu unterstützen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenbereinigung/-validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare funktionieren, anhand des praktischen Beispiels einer Seite, die Bibliothekaren die Erneuerung von Büchern ermöglicht.

> [!NOTE]
> Das Verständnis, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir über Djangos "höhere" Formular-Framework-Klassen sprechen.

## Erneuerungsformular für Bücher unter Verwendung einer Formular- und Funktionsansicht

Als nächstes werden wir eine Seite hinzufügen, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu erneuern. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir setzen das Feld mit einem Anfangswert 3 Wochen ab dem aktuellen Datum (der normale Leihzeitraum) und fügen einige Validierungen hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das `BookInstance.due_back`-Feld des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück von Djangos Formularbearbeitungssystem. Sie spezifiziert die Felder im Formular, deren Layout, Anzeigewidgets, Labels, Anfangswerte, gültige Werte und (nach Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zum Rendern einer Vorlage in vordefinierten Formaten (Tabellen, Listen usw.) oder zum Abrufen des Werts eines Elements (um ein detailliertes manuelles Rendering zu ermöglichen).

#### Formular deklarieren

Die Deklarationssyntax für ein `Form` ist der Deklaration eines `Model` sehr ähnlich und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Dies macht Sinn, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung für Anzeige/Dokumentation vorliegt.

Die Formulardaten werden in einer forms.py-Datei der Anwendung innerhalb des Anwendungsverzeichnisses gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr einfache Formularklasse für unser Bibliotheksbuch-Erneuerungsformular wird unten gezeigt — fügen Sie dies in Ihre neue Datei ein:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einziges [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Erneuerungsdatum:_", und einem hilfreichen Nutzungstext: "_Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3 Wochen)._"" angezeigt wird. Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten im Format [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24) und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) dargestellt.

Es gibt viele andere Arten von Formularfeldern, die Sie größtenteils an ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen erkennen können:

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

Die Argumente, die den meisten Feldern gemeinsam sind, sind unten aufgeführt (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder ein `None`-Wert eingegeben werden. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das bei der Darstellung des Felds in HTML verwendet werden soll. Wenn kein [Label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z.B. _Erneuerungsdatum_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z.B. Erneuerungsdatum&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet wird.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf überarbeiten.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulardaten (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Orte, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. So können wir beispielsweise die eingegebenen `renewal_date` Werte dahingehend validieren, ob sie zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

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

Es gibt zwei wichtige Punkte zu beachten. Zuerst holen wir uns unsere Daten über `self.cleaned_data['renewal_date']` und geben diese Daten zurück, ob wir sie letztlich ändern oder nicht, am Ende der Funktion.
Dieser Schritt ermöglicht es uns, die Daten gereinigt und von potenziell unsicheren Eingaben bereinigt mit den Standardvalidierern zu erhalten und in den richtigen Standardtyp für die Daten zu konvertieren (in diesem Fall ein Python-`datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir, falls ein Wert außerhalb unseres Bereichs liegt, eine `ValidationError` auslösen und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text auch in einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen wollen.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Form und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise können Sie in Fällen, in denen mehrere Felder voneinander abhängen, die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir in diesem Beispiel für das Formular benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _erneuerungsseite_der_Bücher_ hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** zur Funktion `renew_book_librarian()` in **views.py** um und sendet die `BookInstance`-ID als den Parameter `pk`. Das Muster wird nur übereinstimmen, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die komplette Kontrolle über die View-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Jedoch ist es eine vernünftige Konvention, `pk` für "primary key" zu verwenden!

### Ansicht

Wie im [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) oben besprochen, muss die View das Standardformular rendern, wenn sie zum ersten Mal aufgerufen wird, und es dann entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und zu einer neuen Seite weiterleiten, wenn die Daten gültig sind. Um diese verschiedenen Aktionen auszuführen, muss die View wissen, ob sie zum ersten Mal zum Rendern des Standardformulars aufgerufen wird oder ein weiterer Aufruf zur Validierung der Daten erfolgt ist.

Für Formulare, die eine `POST`-Anforderung verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die View testet, ob die Anforderung vom Typ `POST` ist (`if request.method == 'POST':`), um Formularvalidierungsanforderungen zu identifizieren, und `GET` (unter Verwendung einer `else`-Bedingung), um die anfängliche Formularanzeigeanforderung zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anforderung senden möchten, ist ein typischer Ansatz zur Identifizierung, ob dies die erste oder eine spätere Ansichtsinvokation ist, das Lesen der Formulardaten (z.B. um einen versteckten Wert im Formular zu lesen).

Der Bucherneuerungsprozess wird in unsere Datenbank schreiben, sodass wir aus Konvention die `POST`-Anforderungsansatz verwenden.
Der untenstehende Codeausschnitt zeigt das (sehr übliche) Muster für diese Art von Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und einige andere nützliche Objekte/Methoden, die im Kern der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Erstellt eine Umleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Daten und Zeiten.

In der View verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, wird die View sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an).
Wenn dies _keine_ `POST`-Anforderung ist (im `else`-Zweig behandelt), erstellen wir das Standardformular, indem wir einen `initial`-Wert für das `renewal_date` Feld übergeben, 3 Wochen ab dem aktuellen Datum.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen. Dabei geben wir die Vorlage und einen Kontext an, der unser Formular enthält. In diesem Fall beinhaltet der Kontext auch unsere `BookInstance`, die wir in der Vorlage nutzen, um Informationen über das Buch, das wir erneuern, bereitzustellen.

Wenn dies jedoch eine `POST`-Anforderung ist, dann erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anforderung. Dieser Prozess wird "binding" genannt und ermöglicht es uns, das Formular zu validieren.

Wir prüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode für alle Felder ausführt — einschließlich des generischen Codes zur Überprüfung, dass unser Datumsfeld tatsächlich ein gültiges Datum ist, und unserer spezifischen Formularfunktion `clean_renewal_date()`, um sicherzustellen, dass das Datum im richtigen Bereich liegt.

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

Wenn das Formular ungültig ist, rufen wir erneut `render()` auf, aber diesmal wird der Formularwert im Kontext Fehlernachrichten enthalten.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu nutzen, indem wir über das Attribut `form.cleaned_data` darauf zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach im `due_back` Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt über die Anforderung auf die Formulardaten zugreifen können (beispielsweise `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anforderung verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind gesäubert, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularhandling-Teil der View ist die Weiterleitung zu einer anderen Seite, normalerweise zu einer "Erfolg" Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` umzuleiten (dies wurde als "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, ziehen Sie in Betracht, zur Startseite unter der URL `/` umzuleiten).

Das ist alles, was für das Formularhandling selbst benötigt wird, aber wir müssen den Zugriff auf die View auf angemeldete Bibliothekare beschränken, die die Berechtigung für die Erneuerung von Büchern haben. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer angemeldet ist, und den `@permission_required`-Funktionsdekorator mit unserer bestehenden `can_mark_returned`-Berechtigung, um den Zugriff zu erlauben (Dekoratoren werden in der angegebenen Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) erstellen sollten, aber wir verwenden die bestehende, um das Beispiel einfach zu halten.

Die endgültige Ansicht sieht daher wie unten gezeigt aus. Bitte kopieren Sie dies an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der View referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den unten stehenden Code hinein:

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

Das meiste davon wird Ihnen aus den vorherigen Tutorials vollkommen vertraut vorkommen.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und ihre Variablen) verweisen, weil sie im Kontextobjekt in der `render()`-Funktion übergeben wurde, und wir nutzen diese, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, indem wir angeben, wohin das Formular übermittelt werden soll (`action`) und die `method` für das Senden der Daten (in diesem Fall eine `POST`) — wenn Sie sich an den [HTML-Formulare](#html-formulare) Überblick am Anfang der Seite erinnern, bedeutet eine leere `action`, wie gezeigt, dass die Formulardaten an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir das `submit`-Input, das ein Benutzer drücken kann, um die Daten zu übermitteln. Das `{% csrf_token %}` direkt innerhalb der Formulartags ist Teil von Djangos Cross-Site Forgery-Schutz.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` in jede Django-Vorlage ein, die Sie erstellen und die `POST` zum Senden von Daten verwendet. Dies reduziert die Wahrscheinlichkeit, dass Formulare von bösartigen Benutzern gehijackt werden.

Alles, was noch bleibt, ist die `\{{ form }}` Template-Variable, die wir im Kontextwörterbuch an die Vorlage übergeben haben.
Nicht überraschend bietet bei dieser Nutzung das Standardrendering aller Formularfelder, einschließlich ihrer Labels, Widgets und Hilfetexte — das Rendering ist wie unten gezeigt:

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
> Es ist vielleicht nicht offensichtlich, da wir nur ein Feld haben, aber standardmäßig wird jedes Feld in einer eigenen Tabellenzeile definiert. Dieses gleiche Rendering wird bereitgestellt, wenn Sie die Template-Variable `\{{ form.as_table }}` referenzieren.

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

#### Andere Möglichkeiten zur Verwendung der Template-Variable für Formulare

Mit der Verwendung von `\{{ form.as_table }}`, wie oben gezeigt, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die vollständige Kontrolle über das Rendering jedes Teils des Formulars zu haben, indem man dessen Eigenschaften mit der Punktnotation indexiert. So können wir beispielsweise eine Anzahl von separaten Elementen für unser `renewal_date` Feld zugreifen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Feldhilfe-Text.

Für weitere Beispiele, wie man Formulare manuell in Vorlagen rendert und dynamisch über Template-Felder iteriert, siehe [Arbeiten mit Formularen > Felder manuell rendern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) abgeschlossen haben, haben Sie eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek anzeigt, die nur für Bibliothekspersonal sichtbar ist.
Die Ansicht könnte folgendermaßen aussehen:

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

Wir können neben jedem Element einen Link zur Bucherneuerungsseite hinzufügen, indem wir den folgenden Template-Code dem Listenelementtext oben hinzufügen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, weil dort der Wert `bookinst` definiert wird.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Testanmeldung das Recht `catalog.can_mark_returned` benötigen wird, um den oben hinzugefügten neuen "Erneuern" Link zu sehen und um die verlinkte Seite zuzugreifen (verwenden Sie möglicherweise Ihr Superuser-Konto).

Sie können alternativ eine Test-URL manuell konstruieren wie folgt — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann erlangt werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, wird das Standardformular folgendermaßen aussehen:

![Standardformular, das die Details des Buches, das Fälligkeitsdatum, das Erneuerungsdatum und einen Abschicken-Button anzeigt, erscheint, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen eingegebenen Wert wird folgendermaßen aussehen:

![Gleiches Formular wie oben mit einer Fehlermeldung: Ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungsverknüpfungen wird folgendermaßen aussehen:

![Zeigt eine Liste aller erneuerten Bücher zusammen mit ihren Details an. Überfällig ist in rot.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht Ihnen, jede Art von Formseite zu erstellen und sie mit einem oder mehreren Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells zuzuordnen, dann definiert Ihr Modell bereits die meisten Informationen, die Sie in Ihrem Formular benötigen: Felder, Beschriftungen, Hilfetexte und so weiter. Anstatt die Modelldefinitionen in Ihrem Formular zu duplizieren, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Diese `ModelForm` kann dann in Ihren Views auf genau die gleiche Weise wie ein gewöhnliches `Form` verwendet werden.

Eine grundlegende `ModelForm`, die dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der Modelfelder `fields`, die im Formular enthalten sein sollen, hinzuzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einschließen, oder Sie können `exclude` (anstatt `fields`) verwenden, um die Felder zu spezifizieren, die _nicht_ aus dem Modell enthalten werden sollen.
>
> Keiner der Ansätze wird empfohlen, da neue zum Modell hinzugefügte Felder dann automatisch im Formular enthalten sind (ohne dass der Entwickler mögliche Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies sieht vielleicht nicht viel einfacher aus als die Verwendung eines `Form` (und ist es in diesem Fall auch nicht, da wir nur ein Feld haben), aber wenn Sie viele Felder haben, kann es die Anzahl des erforderlichen Codes erheblich reduzieren!

Der Rest der Informationen kommt aus den Modellfeldern-Definitionen (z.B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz stimmen, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch mit dem zu ändernden Feld und seinem neuen Wert angeben. Zum Beispiel möchten wir in diesem Formular ein Label für unser Feld mit "_Erneuerungsdatum_" (anstatt des Standardwertes, der auf der Feldbezeichnung basiert: _Fälligkeitsdatum_) und wir möchten, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Das `Meta` unten zeigt, wie Sie diese Felder überschreiben können und Sie können ebenso `widgets` und `error_messages` festlegen, falls die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie den gleichen Ansatz verwenden wie bei einem normalen `Form` — Sie definieren eine Funktion namens `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular ist, dass das Modell-Feld `due_back` und nicht `renewal_date` genannt wird.
Diese Änderung ist notwendig, da das entsprechende Feld in `BookInstance` `due_back` genannt wird.

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

Die Klasse `RenewBookModelForm` oben ist nun funktionell äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und dort verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` in `due_back` ändern, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbearbeitungsalgorithmus, den wir in unserem Funktionsansichtsbeispiel oben verwendet haben, stellt ein äußerst häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert viel von diesem "Boilerplate"-Code für Sie, indem generische Bearbeitungsansichten für die Erstellung, Bearbeitung und das Löschen von Ansichten basierend auf Modellen erstellt werden. Diese behandeln nicht nur das "View"-Verhalten, sondern erstellen auch automatisch die Formular-Klasse (eine `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview) Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Kodierungsaufwand" liegt. Bei Verwendung von `FormView` müssen Sie Ihr `Form` noch erstellen, aber Sie müssen nicht alle Standard-Formularbearbeitungspatterns implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die die Funktionalität zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen aus unserer Bibliothek hinzufügen - effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie Administrationsfunktionalität auf eine flexiblere Weise als die Admin-Seite bereitstellen müssen).

### Ansichten

Öffnen Sie die Views-Datei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock an das Ende der Datei an:

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

Wie Sie sehen, müssen Sie für die Erstellung, Aktualisierung oder Löschung der Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und das zugehörige Modell definieren.
Wir beschränken den Zugriff auf diese Ansichten auch nur auf angemeldete Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die "Erstellen" und "Aktualisieren" Fälle müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung der gleichen Syntax wie bei `ModelForm`). In diesem Fall zeigen wir Ihnen, wie Sie diese einzeln auflisten und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mithilfe eines Wörterbuchs mit _field_name_/_value_ Paaren angeben (hier setzen wir willkürlich das Todesdatum als Demonstration – Sie möchten dies möglicherweise entfernen). Standardmäßig leiten diese Ansichten bei Erfolg zu einer Seite weiter, die den neu erstellten/überarbeiteten Modelleintrag anzeigt, was in unserem Fall die Autorendetailansicht ist, die wir in einem vorherigen Tutorial erstellt haben. Sie können einen alternativen Weiterleitungsort ausdrücklich angeben, indem Sie den Parameter `success_url` deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django navigieren kann, nachdem ein `Author` erfolgreich gelöscht wurde. Oben verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) Funktion, um nach dem Löschen eines Autors zu unserer Autorenliste weiterzuleiten — `reverse_lazy()` ist eine verzögerte Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einem Klassengebasierten View-Attribut bereitstellen.

Wenn die Löschung von Autoren immer erfolgreich sein soll, wäre dies alles.
Unglücklicherweise verursacht das Löschen eines `Author`s eine Ausnahme, wenn der Autor mit einem Buch verknüpft ist, da unser [`Book`-Modell](/de/docs/Learn/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das Autoren-`ForeignKey`-Feld angibt.
Um diesen Fall zu behandeln, überschreibt die View die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid) Methode, sodass sie, wenn das Löschen des `Author`s erfolgreich ist, zur `success_url` umleitet, aber wenn nicht, zur gleichen Form-Seite zurückgeleitet wird.
Wir werden die Vorlage unten aktualisieren, um klar zu machen, dass Sie keine `Author`-Instanz löschen können, die in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier gibt es nichts besonders Neues! Sie können sehen, dass die Views Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, der von den View-Klassen erwartet wird.

### Vorlagen

Die "Erstellen" und "Aktualisieren"-Ansichten verwenden standardmäßig die gleiche Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix zu etwas anderem als **\_form** mit dem `template_name_suffix` Feld in Ihrer View ändern, beispielsweise `template_name_suffix = '_other_suffix'`)

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir das `{% csrf_token %}` erneut deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "Lösch"-Ansicht erwartet, dass eine Vorlage mit dem Format `[model_name]_confirm_delete.html` vorliegt (wiederum können Sie das Suffix mit `template_name_suffix` in Ihrer View ändern).
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

Die Vorlage sollte vertraut sein.
Sie prüft zunächst, ob der Autor in irgendwelchen Büchern verwendet wird, und wenn ja, zeigt sie die Liste der Bücher an, die gelöscht werden müssen, bevor der Autoren-Datensatz gelöscht werden kann.
Andernfalls zeigt sie ein Formular an, indem der Benutzer bestätigen kann, dass er den Autoren-Datensatz löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste zu integrieren.
Zunächst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, sodass sie in allen Seiten für angemeldete Benutzer sichtbar ist, die als "Personal" betrachtet werden und die Berechtigung zum Erstellen von Autoren haben (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es den Benutzern mit der Genehmigung ermöglichen, den Autor zu erstellen (im gleichen Block wie der Link, der "Alle Ausgeliehen" anzeigt).
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
Öffnen Sie **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code an.

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
Dann werden die Links aufgelistet, um den Autoren zu aktualisieren oder zu löschen, aber nur, wenn der Benutzer die entsprechenden Berechtigungen hat und der Autoren-Datensatz nicht mit Büchern verknüpft ist.

Die Seiten sind jetzt bereit, getestet zu werden!

### Testen der Seite

Melden Sie sich zunächst mit einem Konto an, das über die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren verfügt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Seitenleiste aus (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie der Screenshot unten aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Absenden**, um den Autoren-Datensatz zu speichern.
Sie sollten jetzt zu einer Detailansicht Ihres neuen Autors mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10` weitergeleitet werden.

![Formularbeispiel: Autorendetails mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link "Autor aktualisieren" auswählen (mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da es genauso aussieht wie die "Erstellen" Seite!

Zuletzt können wir die Seite löschen, indem wir "Autor löschen" aus der Seitenleiste auf der Detailseite auswählen.
Django sollte die Löschseite, wie unten gezeigt, anzeigen, wenn der Autoren-Datensatz nicht in Büchern verwendet wird.
Drücken Sie "**Ja, löschen.**", um den Datensatz zu löschen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit der Option, den Autor zu löschen](forms_example_delete_author.png)

## Fordern Sie sich heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dieselbe Struktur wie für `Authors` verwenden (bei der Löschung denken Sie daran, dass Sie kein `Book` löschen können, solange es zugehörige `BookInstance`-Einträge gibt), und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html** Vorlage nur eine Kopie-umbenannte Version der **author_form.html** Vorlage ist, dann wird die neue "Buch erstellen" Seite wie der unten stehende Screenshot aussehen:

![Screenshot zeigt verschiedene Felder im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache an](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Bearbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus bietet Django generische Bearbeitungsansichten, die _fast die gesamte_ Arbeit zur Definition von Seiten übernehmen können, die mit einem einzelnen Modellinstanz Datensätze erstellen, bearbeiten und löschen.

Es gibt noch viel mehr, was mit Formularen gemacht werden kann (siehe unsere [siehe auch](#siehe_auch) Liste unten), aber Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-Anwendung, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
