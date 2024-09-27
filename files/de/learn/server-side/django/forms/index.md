---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
slug: Learn/Server-side/Django/Forms
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten können, insbesondere den einfachsten Weg, um Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, damit Bibliothekare Bücher erneuern sowie Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu nutzen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Absolvieren Sie alle vorherigen Tutorial-Themen, einschließlich
        <a href="/de/docs/Learn/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Formulare geschrieben werden, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen klassenbasierten Bearbeitungsansichten die Erstellung von Formularen zur Arbeit mit einem einzigen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibles Mittel zur Erfassung von Benutzereingaben, da es geeignete Widgets gibt zum Eingeben vieler verschiedener Datentypen, einschließlich Textfelder, Kontrollkästchen, Optionsknöpfen, Datumswählern usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Seite begegnet — zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn/Server-side/Django/Models) Modelle, bestehend aus einer Reihe von Auswahllisten und Texteditoren.

![Admin Site - Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, sobald sie erfolgreich übermittelt wurden, und schließlich in irgendeiner Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nehmen einen großen Teil dieser Arbeit ab, indem sie ein Framework bereitstellen, mit dem Sie Formulare und ihre Felder programmgesteuert definieren und dann diese Objekte verwenden können, um sowohl den HTML-Code des Formulars zu generieren als auch einen Großteil der Validierung und Benutzerinteraktion zu handhaben.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und bearbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten die Arbeit erheblich reduzieren können, die Sie benötigen, um Formulare zur Manipulation Ihrer Modelle zu erstellen. Auf dem Weg dorthin erweitern wir unsere _LocalLibrary_ Anwendung, indem wir ein Formular hinzufügen, das es Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir werden Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (eine grundlegende Version des oben gezeigten Formulars zum Bearbeiten von Büchern wird reproduziert).

## HTML-Formulare

Zuerst eine kurze Übersicht über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld, um den Namen eines "Teams" einzugeben, und seinem zugehörigen Label:

![Einfaches Namensfeldbeispiel im HTML-Formular](form_example_name_field.png)

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

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, kann ein Formular _jede Anzahl_ anderer Elemente enthalten und ihre zugehörigen Labels. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den anfänglichen Wert für das Feld definiert, wenn es erstmals angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben) mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabeelement wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular gesendet wird. Wenn dies nicht festgelegt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück an die aktuelle Seiten-URL gesendet.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen sollen, da sie widerstandsfähiger gegen Angriffe durch Cross-Site-Request-Forgery gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Es wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Rolle des Servers besteht zunächst darin, den anfänglichen Status des Formulars darzustellen - entweder mit leeren Feldern oder vorab mit Werten versehen. Nachdem der Benutzer die Schaltfläche zum Senden gedrückt hat, erhält der Server die Formulardaten mit Werten vom Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion ausführen (wie: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es ziemlich aufwendig sein, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten mit Fehlermeldungen bei Bedarf erneut anzuzeigen und die gewünschte Operation mit gültigen Daten durchzuführen, um "alles richtig" zu machen. Django macht dies erheblich einfacher, indem es einen Teil der schweren Arbeitsbelastung und sich wiederholende Codes übernimmt!

## Django-Formularverarbeitungsprozess

Die Formularverarbeitung von Django verwendet alle Techniken, die wir in früheren Tutorials gelernt haben, um Informationen über unsere Modelle anzuzeigen: Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen durch, einschließlich das Lesen von Daten aus den Modellen, und generiert und gibt dann eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite bei Fehlern erneut anzuzeigen.

Ein Prozessflussdiagramm, das zeigt, wie Django Formulare anfordert, wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in grün dargestellt).

![Aktualisierter Formularverarbeitungsprozess](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm tut die Formularverarbeitung von Django hauptsächlich Folgendes:

1. Zeigt das Standardformular an, wenn es zum ersten Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit anfänglichen Werten vorab gefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardstartwerte haben).
   - Das Formular wird zu diesem Zeitpunkt als _ungebunden_ bezeichnet, da es nicht mit benutzerdefinierten Daten verbunden ist (obwohl es initiale Werte haben kann).

2. Daten von einer Submit-Anfrage empfangen und an das Formular binden.

   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Die Daten bereinigen und validieren.

   - Die Bereinigung der Daten führt eine Sanitisierung der Eingabefelder durch, wie das Entfernen von ungültigen Zeichen, die möglicherweise verwendet werden, um bösartigen Inhalt an den Server zu senden und konvertiert sie in konsistente Python-Datentypen.
   - Die Validierung prüft, ob die Werte für das Feld geeignet sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind, etc.)

4. Wenn einige Daten ungültig sind, das Formular erneut anzeigen, diesmal mit vom Benutzer gefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, die erforderlichen Aktionen ausführen (wie das Speichern der Daten, das Senden einer E-Mail, das Zurückgeben des Ergebnisses einer Suche, das Hochladen einer Datei usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite weiterleiten.

Django bietet eine Reihe von Werkzeugen und Ansätzen, um Ihnen bei den oben beschriebenen Aufgaben zu helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenbereinigung/-validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare anhand des praktischen Beispiels einer Seite funktionieren, die es Bibliothekaren ermöglicht, Bücher zu erneuern.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir die "hochwertigeren" Formular-Framework-Klassen von Django besprechen.

## Erneuern-Buch-Formular mit einem Formular und Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu erneuern. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir befüllen das Feld mit einem anfänglichen Wert 3 Wochen ab dem aktuellen Datum (dem normalen Ausleihzeitraum) und fügen eine Validierung hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum, das zu weit in der Zukunft liegt, eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das aktuelle Datensatzfeld `BookInstance.due_back`.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an Ihrem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück des Formularverarbeitungssystems von Django. Sie spezifiziert die Felder im Formular, deren Layout, Anzeigewidgets, Labels, initiale Werte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zur Selbstdarstellung in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) oder zum Abrufen des Wertes eines Elements (um eine feingranulare manuelle Darstellung zu ermöglichen).

#### Deklarieren eines Formulars

Die Deklarationssyntax für ein `Form` ist der für die Deklaration eines `Model` sehr ähnlich und teilt dieselben Feldtypen (und einige ähnliche Parameter). Das macht Sinn, denn in beiden Fällen müssen wir sicherstellen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in der forms.py-Datei einer Anwendung innerhalb des Anwendungsverzeichnisses gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, erben von der `Form`-Klasse und deklarieren die Felder des Formulars. Eine sehr einfache Formular-Klasse für unser Bibliotheksbuch-Erneuerungsformular ist unten gezeigt — fügen Sie dies Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zum Eingeben des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und einem hilfreichen Verwendungstext: "_Enter a date between now and 4 weeks (default 3 weeks)_" angezeigt wird. Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten gemäß den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): JJJJ-MM-TT (2024-11-06), MM/TT/JJJJ (02/26/2024), MM/TT/JJ (10/25/24) und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) angezeigt: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie größtenteils durch ihre Ähnlichkeit mit den entsprechenden Modellfeldklassen erkennen werden:

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

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer oder `None` sein. Felder sind standardmäßig erforderlich, sodass Sie `required=False` festlegen müssen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn kein [Label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben groß schreibt und Unterstriche durch Leerzeichen ersetzt (z.B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird ein Doppelpunkt nach dem Label angezeigt (z.B. Renewal date&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der anfängliche Wert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeige-Widget, das verwendet wird.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel gesehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit Ihren eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulardateneingabe (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, um Ihre Daten zu validieren. Der einfachste Weg, um ein einzelnes Feld zu validieren, ist das Überschreiben der Methode `clean_<fieldname>()` für das Feld, das Sie überprüfen möchten. Wir können zum Beispiel validieren, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

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

Es gibt zwei wichtige Punkte zu beachten. Der erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` abrufen und dass wir diese Daten am Ende der Funktion unabhängig davon zurückgeben, ob wir sie ändern oder nicht.
Dieser Schritt holt uns die Daten "gereinigt" und von potenziell unsicheren Eingaben mit den Standardvalidierern bereinigt und in den korrekten Standardtyp für die Daten konvertiert (in diesem Fall ein Python `datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir eine `ValidationError` auslösen, wenn ein Wert außerhalb unseres Bereichs liegt und den Fehlertxt angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text auch in einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). In Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, können Sie die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut eine `ValidationError`-Ausnahme auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_-Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs im Format **/catalog/book/_\<bookinstance_id>_/renew/** an die in **views.py** definierte Funktion namens `renew_book_librarian()` weiter und übergibt die `BookInstance` id als Parameter `pk`. Das Muster wird nur übereinstimmen, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die volle Kontrolle über die View-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Allerdings ist `pk` als Abkürzung für "primary key" eine vernünftige Konvention zu verwenden!

### Ansicht

Wie im Abschnitt [Django-Formularverarbeitungsprozess](#django-formularverarbeitungsprozess) oben besprochen, muss die Ansicht das Standardformular rendern, wenn es zum ersten Mal aufgerufen wird und es dann entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und an eine neue Seite weiterleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht wissen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder ein weiteres Mal, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster in der Ansicht, die Anfragemethode gegen den `POST`-Anfragentyp zu testen (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren, und `GET` (unter Verwendung eines `else`-Zustands), um die anfängliche Formulardefinierungsanfrage zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, dann ist ein typischer Ansatz, um festzustellen, ob dies der erste oder nachfolgende Aufruf der Ansicht ist, das Lesen von Formulardaten (z.B. um einen versteckten Wert im Formular zu lesen).

Der Buchverlängerungsprozess wird in unserer Datenbank schreiben, daher verwenden wir konventionell den `POST`-Anfragenansatz.
Der unten gezeigte Codeausschnitt zeigt das (sehr standardisierte) Muster für diese Art von Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Anzahl anderer nützlicher Objekte/Methoden, die im Körper der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Umleitung zu einer bestimmten URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Daten und Uhrzeiten.

In der Ansicht verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden" Fehler an).
Wenn dies _keine_ `POST`-Anfrage ist (behandelt durch die `else`-Klausel), erstellen wir das Standardformular, indem wir einen `initial` Wert für das `renewal_date`-Feld übergeben, 3 Wochen ab dem aktuellen Datum.

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

Nachdem wir das Formular erstellt haben, rufen wir `render()` auf, um die HTML-Seite zu erstellen und die Vorlage und einen Kontext anzugeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden werden, um Informationen über das Buch, das wir erneuern, bereitzustellen.

Wenn dies jedoch eine `POST`-Anfrage ist, erstellen wir unser `form`-Objekt und fügen ihm Daten aus der Anfrage hinzu. Dieser Prozess wird als "Binding" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir prüfen dann, ob das Formular gültig ist, was die gesamte Validierung des Codes für alle Felder durchläuft — einschließlich des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, und unserer spezifischen `clean_renewal_date()`-Funktion, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber dieses Mal wird der Form-Wert im Kontext Fehlernachrichten enthalten.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu verwenden, indem wir auf sie über das `form.cleaned_data`-Attribut zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach in das `due_back`-Attribut des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (z.B. `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind desinfiziert, validiert und in Python-freundliche Typen umgewandelt.

Der letzte Schritt im Formularhandling des Views besteht darin, den Benutzer auf eine andere Seite weiterzuleiten, normalerweise auf eine "Erfolg"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht `'all-borrowed'` weiterzuleiten (dies wurde als die "Herausforderung" im [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, sollten Sie in Erwägung ziehen, zur Startseite unter der URL `/` weiterzuleiten).

Das ist alles, was für das Formularhandling selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht für nur eingeloggte Bibliothekare einschränken, die die Erlaubnis haben, Bücher zu erneuern. Wir verwenden `@login_required`, um zu fordern, dass der Benutzer eingeloggt ist, und die Funktion `@permission_required` Dekorator mit unserer bestehenden `can_mark_returned`-Berechtigung, um Zugang zu gewähren (Dekoratoren werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir verwenden die vorhandene, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher wie unten gezeigt. Bitte kopieren Sie dies in das untere **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den unten stehenden Code:

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

Die meisten davon werden Ihnen aus vorherigen Tutorials bekannt vorkommen.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und ihre Variablen) verweisen, weil sie im Kontextobjekt in der `render()`-Funktion übergeben wurde, und verwenden diese, um den Buchtitel, den Ausleiher zu und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags und geben an, wo das Formular eingereicht werden soll (`action`) und die `method`, um die Daten zu senden (in diesem Fall `POST`) — wenn Sie sich den [HTML-Formularen](#html-formulare) Überblick oben ansehen, bedeutet eine leere `action` wie gezeigt, dass die Formulardaten zurück an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit` Eingabe, die ein Benutzer drücken kann, um die Daten zu übermitteln. Der `{% csrf_token %}` der direkt innerhalb der Form-Tags hinzugefügt wird, ist Teil des Schutzes von Djangos gegen Cross-Site-Forgery.

> [!NOTE]
> Fügen Sie den `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen, die `POST` verwendet, um Daten zu übermitteln. Dies verringert die Chance, dass Formulare von böswilligen Benutzern entführt werden.

Alles, was übrig bleibt, ist die `\{{ form }}` Template-Variable, die wir an die Vorlage im Kontext-Dictionary übergeben haben.
Vielleicht wenig überraschend, liefert diese Template-Variable, wenn sie wie gezeigt verwendet wird, die Standardanzeige aller Formularfelder, einschließlich ihrer Labels, Widgets und Hilfetexte — die Darstellung wird wie unten gezeigt:

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in seiner eigenen Tabellenzeile definiert. Diese Anzeige erhalten Sie auch, wenn Sie die `\{{ form.as_table }}` Template-Variable verwenden.

Wenn Sie ein ungültiges Datum eingeben würden, würden Sie zusätzlich eine Liste der Fehler auf der Seite sehen (siehe `errorlist` unten).

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

#### Andere Möglichkeiten, die Formular-Template-Variable zu verwenden

Wenn Sie `\{{ form.as_table }}` wie oben gezeigt verwenden, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die vollständige Kontrolle über die Darstellung jedes Teils des Formulars zu haben, indem Sie seine Eigenschaften mit Punktnotation indizieren. So können wir beispielsweise eine Reihe von separaten Elementen für unser `renewal_date`-Feld abrufen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die id des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Feldhilfetext.

Für mehr Beispiele, wie man Formulare manuell in Templates rendert und dynamisch über Template-Felder iteriert, siehe [Arbeiten mit Formularen > Felder manuell rendern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Falls Sie die "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) angenommen haben, haben Sie bereits eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek zeigt, die nur für Bibliothekspersonal sichtbar ist.
Die Ansicht könnte so aussehen:

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

Wir können neben jeder Position einen Link zur Buchverlängerungsseite hinzufügen, indem wir den folgenden Template-Code zum Listenelement-Text darüber hinzufügen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, weil dort der `bookinst` Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` benötigt, um den neuen "Renew"-Link, der oben hinzugefügt wurde, zu sehen und auf die verlinkte Seite zuzugreifen (verwenden Sie vielleicht Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL konstruieren wie diese — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann durch das Navigieren zu einer Buchdetailseite in Ihrer Bibliothek erhalten werden, indem Sie das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Schaltfläche zum Einreichen anzeigt, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Verlängerungslinks sieht so aus:

![Zeigt eine Liste aller verlängerten Bücher zusammen mit ihren Details an. Überfällige Bücher sind in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Die Erstellung einer `Form`-Klasse dient dem oben beschriebenen Ansatz und ist sehr flexibel und ermöglicht es Ihnen, beliebige Arten von Formularseiten zu erstellen und sie an ein beliebiges Modell oder Modelle zu binden.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, dann wird Ihr Modell die meisten der Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetext und so weiter bereits definieren. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die `ModelForm`-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Diese `ModelForm` kann dann innerhalb Ihrer Ansichten auf genau dieselbe Weise wie ein normales `Form` verwendet werden.

Ein grundlegendes `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` hinzuzufügen mit dem zugehörigen `model` (`BookInstance`) und einer Liste der Modellfelder, die im Formular enthalten sein sollen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einschließen, oder Sie können `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell in das Formular enthalten sein sollen).
>
> Kein Ansatz wird empfohlen, da neue Felder, die dem Modell hinzugefügt werden, dann automatisch im Formular enthalten sind (ohne dass der Entwickler möglicherweise die möglichen Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Das scheint vielleicht nicht viel einfacher zu sein als die Verwendung eines `Form` (und in diesem Fall ist es das nicht, weil wir nur ein Feld haben). Doch wenn Sie viele Felder haben, kann es die Menge des erforderlichen Codes erheblich reduzieren!

Der Rest der Informationen kommt aus den Modellfelddefinitionen (z.B. Labels, Widgets, Hilfetext, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserem `class Meta` überschreiben, indem wir ein Dictionary angeben, das das zu ändernde Feld und seinen neuen Wert enthält. Zum Beispiel könnten wir in diesem Formular ein Label für unser Feld ""Renewal date*" (anstatt des Standardwertes basierend auf dem Feldnamen: \_Due Back*), und wir möchten auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Die `Meta` unten zeigt, wie Sie diese Felder überschreiben können, und Sie können auf ähnliche Weise `widgets` und `error_messages` festlegen, wenn die Standards nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie denselben Ansatz wie bei einem normalen `Form` verwenden — Sie definieren eine Funktion namens `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied gegenüber unserem ursprünglichen Formular ist, dass das Modellfeld `due_back` und nicht `renewal_date` genannt wird.
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

Die Klasse `RenewBookModelForm` oben ist nun funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und überall dort verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Form-Variablennamen von `renewal_date` zu `due_back` aktualisieren, wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Algorithmus zur Formularverarbeitung, den wir in unserem Funktionsansichtsbeispiel oben verwendet haben, stellt ein äußerst häufiges Muster in Formbearbeitungsansichten dar. Django abstrahiert einen Großteil dieses "Boilerplates" für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) erstellt, um Ansichten zu erstellen, zu bearbeiten und zu löschen, die auf Modellen basieren. Diese behandeln nicht nur das "Ansichts"-Verhalten, sondern erstellen auch automatisch die Formularklasse (`ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten liegt in Bezug auf "Flexibilität" vs. "Programmierungsaufwand". Beim Verwenden von `FormView` müssen Sie Ihr `Form` immer noch erstellen, aber Sie müssen nicht alle Standard-Formularverarbeitungsmuster implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig erkannt wird.

In diesem Abschnitt werden wir generische Bearbeitungsansichten verwenden, um Seiten zu erstellen, um die Funktionalität hinzuzufügen, `Author`-Datensätze aus unserer Bibliothek zu erstellen, zu bearbeiten und zu löschen — effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Site (dies könnte nützlich sein, wenn Sie Administrationsfunktionen auf eine flexiblere Weise anbieten müssen, als es die Admin-Site ermöglicht).

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

Wie Sie sehen können, um Ansichten zum Erstellen, Aktualisieren oder Löschen zu erstellen, müssen Sie von `CreateView`, `UpdateView` und `DeleteView` (jeweils) erben und dann das zugehörige Modell definieren.
Wir beschränken den Aufruf dieser Ansichten auch auf Nutzer, die eingeloggt sind und die `add_author`, `change_author` und `delete_author` Berechtigungen jeweils haben

Für die "Erstellen" und "Aktualisieren" Fälle müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (indem Sie dieselbe Syntax wie für `ModelForm` verwenden). In diesem Fall zeigen wir, wie man sie individuell auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Standardwerte für jedes der Felder mit einem Dictionary von _field_name_/_value_ Paaren angeben (hier setzen wir den Todesdatum willkürlich als Demonstration — Sie möchten das vielleicht entfernen). Standardmäßig wird diese Ansicht bei Erfolg auf eine Seite umleiten, die das neu erstellte / bearbeitete Modellobjekt anzeigt, was in unserem Fall die Autor-Detailansicht sein wird, die wir in einem früheren Tutorial erstellt haben. Sie können einen alternativen Umleitungsort angeben, indem Sie Parameter `success_url` explizit festlegen.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch eine `success_url` (wie oben gezeigt), denn es gibt keine offensichtliche Standard-URL, zu der Django nach dem erfolgreichen Löschen des `Author` navigieren kann. Hier verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) Funktion, um nach dem Löschen eines Autors zur Autorliste umzuleiten — `reverse_lazy()` ist eine träge ausgeführte Version von `reverse()`, die hier genutzt wird, weil wir eine URL zu einem Klassenbasis-View-Attribut bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre das alles.
Leider wird das Löschen eines `Author` zu einer Ausnahme führen, wenn der Autor ein zugehöriges Buch hat, weil unser [`Book` Modell](/de/docs/Learn/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für die `ForeignKey`-Felder des Autors angibt.
Um diesen Fall zu lösen, überschreibt die View die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), sodass sie, wenn das Löschen des `Author` erfolgreich ist, zu `success_url` umleitet, aber wenn nicht, einfach zurück zu derselben Form umleitet.
Wir werden die Vorlage unten aktualisieren, um klar zu machen, dass Sie keinen `Author` löschen können, der in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts besonders Neues! Sie können sehen, dass es sich um Klassenansichten handelt und daher über `.as_view()` aufgerufen werden müssen und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für unseren abgefragten Primärschlüsselwert verwenden, da dies der Parametername ist, den die View-Klassen erwarten.

### Vorlagen

Die "Erstellen" und "Aktualisieren" Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können den Suffix zu etwas anderem als **\_form** mit dem `template_name_suffix` Feld in Ihrer Ansicht ändern, z.B. `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den untenstehenden Text.

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

Das ist ähnlich zu unseren vorherigen Formularen und rendert die Felder mithilfe einer Tabelle. Beachten Sie auch, wie wir erneut den `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare resistent gegenüber CSRF-Angriffen sind.

Die "Löschen" Ansicht erwartet eine Vorlage mit dem Format `[model_name]_confirm_delete.html` (erneut können Sie den Suffix mit `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den Text unten.

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
Sie prüft zuerst, ob der Autor in Büchern verwendet wird und zeigt, falls ja, die Liste der Bücher an, die gelöscht werden müssen, bevor der Autor-Datensatz gelöscht werden kann.
Andernfalls zeigt es ein Formular an, in dem der Benutzer bestätigen kann, dass er den Datensatz des Autors löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzuhängen.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, sodass er auf allen Seiten für eingeloggte Benutzer sichtbar ist, die als "Mitarbeiter" betrachtet werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung ermöglichen, den Autor zu erstellen (im selben Block wie den Link, der "Alle ausgeliehenen Bücher" zeigt).
Denken Sie daran, die URL mit ihrem Namen `'author-create'` wie unten gezeigt zu referenzieren.

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

Wir werden die Links zum Aktualisieren und Löschen von Autoren zur Autor-Detailseite hinzufügen.
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

Dieser Block überschreibt den `sidebar`-Block in der Basisvorlage und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}` ein.
Es fügt dann Links hinzu, um den Autor zu aktualisieren oder zu löschen, jedoch nur wenn der Benutzer die richtigen Berechtigungen hat und der Autor-Datensatz nicht mit Büchern verbunden ist.

Die Seiten sind nun bereit, getestet zu werden!

### Testen der Seite

Melden Sie sich zuerst mit einem Konto an, das die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Seitenleiste aus (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte aussehen wie der untenstehende Screenshot.

![Form Example: Create Author](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Submit**, um den Datensatz des Autors zu speichern.
Sie sollten nun zu einer Detailansicht Ihres neuen Autors weitergeleitet werden, mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10`.

![Form Example: Author Detail showing Update and Delete links](forms_example_detail_author_update.png)

Sie können den Datensatz testen, indem Sie den Link "Autor aktualisieren" auswählen (mit einer URL, die etwa so aussieht: `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, weil er genauso aussieht wie die "erstellen"-Seite!

Schließlich können wir die Seite löschen, indem wir "Autor löschen" von der Seitenleiste in der Detailansicht auswählen.
Django sollte die Löschseite, die unten gezeigt wird, darstellen, wenn der Autor-Datensatz nicht in Büchern verwendet wird.
Drücken Sie "**Ja, Löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Form with option to delete author](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dieselbe Struktur wie für `Authors` verwenden (denken Sie daran, dass Sie ein `Book` nicht löschen können, bis alle zugehörigen `BookInstance`-Datensätze gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html**-Vorlage einfach eine umbenannte Kopie der **author_form.html**-Vorlage ist, dann wird die neue "Buch erstellen"-Seite so aussehen wie der Screenshot unten:

![Screenshot, der verschiedene Felder im Formular anzeigt, wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Handhaben von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen zur Deklaration, Darstellung und Validierung von Formularen bereitstellt. Darüber hinaus bietet Django generische Formularbearbeitungsansichten, die _fast_ alle Arbeiten zur Definition von Seiten erledigen können, die Datensätze erstellen, bearbeiten und löschen, die mit einer einzelnen Modellinstanz verbunden sind.

Es gibt viel mehr, das mit Formularen gemacht werden kann (sehen Sie sich unsere [Siehe auch](#fordern_sie_sich_selbst_heraus) Liste unten an), aber Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularverarbeitungs-Code zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit Klassen-basierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
