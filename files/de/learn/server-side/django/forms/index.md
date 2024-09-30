---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
slug: Learn/Server-side/Django/Forms
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten, und insbesondere, wie Sie am einfachsten Formulare schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website, damit Bibliothekare Bücher erneuern sowie Autoren erstellen, aktualisieren und löschen können, und zwar mit unseren eigenen Formularen (anstatt die Admin-Anwendung zu nutzen).

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
        Verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten die Erstellung von Formularen zur Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets zum Eingeben vieler verschiedener Datentypen gibt, einschließlich Textfelder, Kontrollkästchen, Optionsfelder, Datumsauswahl und so weiter. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir bisher in diesem Tutorial keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Seite begegnet — zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Buch](/de/docs/Learn/Server-side/Django/Models) Modelle, das aus einer Reihe von Auswahllisten und Texteditoren besteht.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut einreichen, um Benutzer über ungültige Felder zu informieren, die Daten handhaben, wenn sie erfolgreich eingereicht wurden, und schließlich auf irgendeine Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nimmt Ihnen viel Arbeit bei all diesen Schritten ab, indem es ein Framework bereitstellt, mit dem Sie Formulare und ihre Felder programmgesteuert definieren können, und diese Objekte dann verwenden, um sowohl den HTML-Code des Formulars zu generieren als auch einen Großteil der Validierung und Benutzerinteraktion abzuwickeln.

In diesem Tutorial zeigen wir Ihnen einige Möglichkeiten, wie Sie Formulare erstellen und verwenden können, und insbesondere, wie die generischen Bearbeitungsansichten die Menge an Arbeit, die Sie tun müssen, um Formulare zu erstellen, die Ihre Modelle manipulieren, erheblich reduzieren können. Im Laufe der Zeit erweitern wir unsere _LocalLibrary_ Anwendung, indem wir ein Formular hinzufügen, mit dem Bibliothekare Bibliotheksbücher erneuern können, und Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren erstellen (eine grundlegende Version des oben gezeigten Formulars zum Bearbeiten von Büchern reproduzierend).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und seinem zugehörigen Label:

![Einfaches Namen-Feld-Beispiel in HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als eine Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element des Typs `submit` enthalten.

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

Obwohl wir hier nur ein Textfeld zur Eingabe des Teamnamens haben, kann ein Formular _beliebig_ viele andere Eingabeelemente und ihre zugehörigen Labels haben. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es zum ersten Mal angezeigt wird. Das übereinstimmende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Button angezeigt.
Dieser kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formularattribute definieren die HTTP-`method`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular eingereicht wird. Wenn dies nicht gesetzt wird (oder auf eine leere Zeichenkette gesetzt wird), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie widerstandsfähiger gegen Cross-Site-Request-Forgery-Angriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (z.B. ein Suchformular). Sie wird empfohlen, wenn Sie die URL speichern oder teilen möchten.

Die Rolle des Servers besteht zunächst darin, den anfänglichen Formularzustand zu rendern — entweder mit leeren Feldern oder vorausgefüllt mit den Anfangswerten. Nachdem der Benutzer den Senden-Button gedrückt hat, empfängt der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit benutzerdefinierten Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion ausführen (zum Beispiel: speichert die Daten, gibt das Ergebnis einer Suche zurück, lädt eine Datei hoch usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es einen erheblichen Aufwand erfordern, das HTML zu erstellen, die zurückgesendeten Daten zu validieren, die eingegebenen Daten mit Fehlerberichten bei Bedarf erneut anzuzeigen und die gewünschte Operation mit gültigen Daten auszuführen, um alles "richtig" zu machen. Django erleichtert das erheblich, indem es einen Teil der Schwerstarbeit und des sich wiederholenden Codes übernimmt!

## Django Formularverarbeitungsprozess

Djangos Formularverarbeitung verwendet alle Techniken, die wir in den vorherigen Tutorials gelernt haben (um Informationen über unsere Modelle anzuzeigen): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich dem Lesen von Daten aus den Modellen, und generiert und gibt eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten einfügen). Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite erneut anzuzeigen, wenn es Fehler gibt.

Ein Prozessflussdiagramm, wie Django Formularanfragen verarbeitet, ist unten dargestellt und beginnt mit einer Anfrage für eine Seite, die ein Formular (grün dargestellt) enthält.

![Aktualisierter Prozess zur Formularbearbeitung.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben der Django-Formularverarbeitung folgende:

1. Das Standardformular wird angezeigt, wenn es zum ersten Mal vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Zu diesem Zeitpunkt wird das Formular als _ungebunden_ bezeichnet, da es nicht mit benutzerdefinierten Daten verbunden ist (obwohl es Anfangswerte haben kann).

2. Empfang von Daten aus einer Sendeanforderung und Bindung dieser an das Formular.

   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Daten bereinigen und validieren.

   - Das Bereinigen der Daten führt eine Bereinigung der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die verwendet werden könnten, um bösartigen Inhalt an den Server zu senden, und wandelt sie in konsistente Python-Typen um.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (zum Beispiel, dass sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.)

4. Wenn Daten ungültig sind, das Formular erneut anzeigen, diesmal mit vom Benutzer eingegebenen Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen aus (wie: speichern der Daten, senden einer E-Mail, die Ergebnisse einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite umleiten.

Django bietet eine Reihe von Werkzeugen und Ansätzen, die Ihnen bei den oben genannten Aufgaben helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Erstellung von HTML-Formularen als auch die Datenbereinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare anhand des praktischen Beispiels einer Seite funktionieren, die Bibliothekaren das Erneuern von Büchern ermöglicht.

> [!NOTE]
> Zu verstehen, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir über die "höheren" Form-Framework-Klassen von Django diskutieren.

## Erneuerungsformular für Bücher mit einem Formular und Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, die Bibliothekaren das Erneuern ausgeliehener Bücher ermöglicht. Dazu erstellen wir ein Formular, das es Benutzern ermöglicht, einen Datumswert einzugeben. Wir initialisieren das Feld mit einem Anfangswert, der 3 Wochen ab dem aktuellen Datum in der Zukunft liegt (die normale Ausleihdauer), und fügen eine Validierung hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das aktuelle `BookInstance.due_back`-Feld des Eintrags.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem fortlaufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück des Formularverarbeitungssystems von Django. Sie spezifiziert die Felder im Formular, ihre Anordnung, Anzeigewidgets, Labels, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zum Rendern von sich selbst in Vorlagen mithilfe vordefinierter Formate (Tabellen, Listen usw.) oder zum Abrufen des Werts eines beliebigen Elements (ermöglicht feinge granulares manuelles Rendern).

#### Formular deklarieren

Die Deklarationssyntax für ein `Form` ähnelt sehr dem Deklarieren eines `Model` und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Dies ist sinnvoll, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist, und eine Beschreibung zur Anzeige/Dokumentation hat.

Formulardaten werden in einer forms.py-Datei der Anwendung im Anwendungsverzeichnis gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und erklären die Felder des Formulars. Eine sehr einfache Formular-Klasse für unser Bibliotheksbuch-Erneuerungsformular ist unten dargestellt — fügen Sie dies zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einziges [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und einem hilfreichen Nutzungstext gerendert wird: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten mit den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): JJJJ-MM-TT (2024-11-06), MM/TT/JJJJ (02/26/2024), MM/TT/JJ (10/25/24) und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) gerendert.

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

Die Argumente, die für die meisten Felder gemeinsam sind, werden unten aufgelistet (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None` Wert versehen werden. Felder sind standardmäßig erforderlich, also würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wird kein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) angegeben, erstellt Django ein solches aus dem Feldnamen, indem der erste Buchstabe großgeschrieben und Unterstriche durch Leerzeichen ersetzt werden (z.B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z.B. Renewal date&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das zu verwendende Anzeigewidget.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im oben stehenden Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die auf das Feld aufgerufen werden, wenn es validiert wird.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung von Formulareingabedaten (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, sein Wert kann jedoch nicht bearbeitet werden, wenn dies auf `True` gesetzt ist. Der Standardwert ist `False`.

#### Validierung

Django bietet Ihnen zahlreiche Stellen, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<fieldname>()` für das zu überprüfende Feld zu überschreiben. So können Sie beispielsweise sicherstellen, dass die eingegebenen `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem Sie `clean_renewal_date()` wie unten gezeigt implementieren.

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
Dieser Schritt ermöglicht uns den Abruf der Daten, die durch die Standardvalidierer "gereinigt" und von potenziell unsicherer Eingabe bereinigt wurden, und sie in den richtigen Standardtyp für die Daten umgewandelt wurden (in diesem Fall ein Python-`datetime.datetime`-Objekt).

Der zweite Punkt ist, dass wir eine `ValidationError` auslösen, um einen Fehler zu beschreiben, falls ein Wert außerhalb unseres Bereichs liegt, wobei wir den Fehlertest angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text auch in eine von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Formularvalidierung in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise können Sie in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängen, die Funktion [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir in diesem Beispiel für das Formular benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_-Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und sendet die `BookInstance`-ID als Parameter mit dem Namen `pk`. Das Muster wird nur übereinstimmen, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten so nennen, wie wir möchten, da wir vollständige Kontrolle über die View-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). `pk` als Abkürzung für "primary key" ist jedoch eine vernünftige Konvention!

### Ansicht

Wie im Abschnitt [Django-Formularverarbeitungsprozess](#django_formularverarbeitungsprozess) diskutiert, muss die Ansicht das Standardformular rendern, wenn sie zum ersten Mal aufgerufen wird, und es dann entweder bei ungültigen Daten mit Fehlermeldungen erneut rendern oder die Daten verarbeiten und bei gültigen Daten auf eine neue Seite umleiten. Um diese verschiedenen Aktionen durchzuführen, muss die Ansicht in der Lage sein zu wissen, ob sie das erste Mal aufgerufen wird, um das Standardformular zu rendern, oder ein weiteres Mal, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die Ansicht gegen den `POST`-Anforderungstyp (`if request.method == 'POST':`) testet, um Formularvalidierungsanfragen zu identifizieren, und `GET` (mithilfe einer `else`-Bedingung), um die initiale Formularerstellungsanfrage zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, dann ist ein typischer Ansatz, um zu identifizieren, ob dies der erste oder ein nachfolgender Aufruf der Ansicht ist, das Lesen der Formulardaten (z.B. das Lesen eines verborgenen Werts im Formular).

Da der Bucherneuerungsprozess in unsere Datenbank schreiben wird, verwenden wir konventionell den `POST`-Anforderungsansatz.
Der unten gezeigte Codeabschnitt zeigt das (sehr standardisierte) Muster für diese Art der Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Hauptteil der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erzeugt eine Umleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einem Satz von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Datums- und Zeitwerten.

In der Ansicht nutzen wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn diese nicht existiert, verlässt die Ansicht sofort die Seite und zeigt einen "nicht gefunden"-Fehler an).
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

Nach der Erstellung des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, und spezifizieren die Vorlage sowie einen Kontext, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das zu erneuernde Buch bereitzustellen.

Handelt es sich jedoch um eine `POST`-Anfrage, erstellen wir unser `form`-Objekt und befüllen es mit Daten aus der Anfrage. Dieser Prozess wird als "Binding" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode für alle Felder ausführt — einschließlich des allgemeinen Codes zur Überprüfung, dass unser Datumsfeld tatsächlich ein gültiges Datum ist, und unserer spezifischen `clean_renewal_date()`-Funktion des Formulars zur Überprüfung, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular ungültig ist, rufen wir `render()` erneut auf, aber diesmal wird der Formularwert, der im Kontext übergeben wird, Fehlermeldungen enthalten.

Wenn das Formular gültig ist, können wir anfangen, die Daten zu verwenden, indem wir auf das Attribut `form.cleaned_data` zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach im `due_back` Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind desinfiziert, validiert und in Python-freundliche Typen umgewandelt.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht ist die Umleitung auf eine andere Seite, normalerweise eine "Erfolg"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` umzuleiten (diese wurde als "Herausforderung" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) erstellt). Sollten Sie diese Seite nicht erstellt haben, erwägen Sie, zur Startseite unter der URL `/` umzuleiten).

Das ist alles, was für die Formularverarbeitung selbst erforderlich ist, aber wir müssen immer noch den Zugriff auf die Ansicht nur für eingeloggte Bibliothekare einschränken, die die Berechtigung haben, Bücher zu erneuern. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und die `@permission_required`-Funktionsdekoration mit unserer bestehenden Berechtigung `can_mark_returned`, um den Zugriff zu ermöglichen (Dekorationen werden in der angegebenen Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir werden die bestehende verwenden, um das Beispiel einfach zu halten.

Die endgültige Ansicht ist daher wie unten gezeigt. Bitte kopieren Sie dies in den unteren Bereich von **django-locallibrary-tutorial/catalog/views.py**.

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

Das meiste davon wird Ihnen aus früheren Tutorials bekannt vorkommen.

Wir erweitern die Basisschablone und definieren dann den Inhaltsblock neu. Wir können `\{{ book_instance }}` (und seine Variablen) referenzieren, da es im Kontextobjekt über die `render()`-Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Ausleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, spezifizieren, wohin das Formular gesendet werden soll (`action`) und die `method` zum Senden der Daten (in diesem Fall ein `POST`) — wenn Sie sich den Überblick über [HTML-Formulare](#html-formulare) am Anfang der Seite erinnern, bedeutet ein leeres `action`, wie gezeigt, dass die Formulardaten an die aktuelle URL der Seite zurückgesendet werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Eingabe, die von einem Benutzer gedrückt werden kann, um die Daten zu senden. Das `{% csrf_token %}`, das direkt innerhalb der form-Tags hinzugefügt wurde, ist Teil von Djangos Cross-Site-Forgery-Schutz.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jeder von Ihnen erstellten Django-Vorlage hinzu, die `POST` zum Senden von Daten verwendet. Dadurch wird die Wahrscheinlichkeit verringert, dass Formulare von böswilligen Benutzern entführt werden.

Alles, was noch übrig bleibt, ist die Template-Variable `\{{ form }}`, die wir in das Kontextwörterbuch an die Vorlage übergeben haben.
Vielleicht nicht überraschend, wenn sie wie gezeigt verwendet wird, bietet dies das Standard-Rendering aller Formularfelder, einschließlich ihrer Beschriftungen, Widgets und Hilfe-Texten – das Rendering ist wie unten gezeigt:

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

#### Andere Verwendungsmöglichkeiten der Formularvorlagenvariable

Wenn `\{{ form.as_table }}` wie oben gezeigt verwendet wird, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listeneintrag (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, vollständige Kontrolle über das Rendering jedes Teils des Formulars zu haben, indem man auf seine Eigenschaften mit Punktnotation zugreift. So können wir zum Beispiel eine Reihe von einzelnen Elementen für unser `renewal_date`-Feld abrufen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare in Templates manuell rendern und dynamisch über Template-Felder loopen kann, siehe [Arbeiten mit Formularen > Rendern von Feldern manuell](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die "Herausforderung" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) angenommen haben, werden Sie eine Ansicht haben, die alle ausgeliehenen Bücher in der Bibliothek anzeigt, die nur für das Bibliothekspersonal sichtbar ist.
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

Wir können neben jedem Element einen Link zur Bucherneuerungsseite hinzufügen, indem wir den folgenden Template-Code zum übergeordneten Text des Listenelements hinzufügen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned haben muss, um den neuen "Erneuern"-Link zu sehen, der oben hinzugefügt wurde, und um die verknüpfte Seite aufzurufen (verwenden Sie möglicherweise Ihr Superuser-Konto).

Alternativ können Sie eine Test-URL manuell wie folgt erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann abgerufen werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und einen Absende-Button anzeigt, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Das gleiche Formular wie oben mit einer Fehlermeldung: Ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt die Liste aller erneuerten Bücher zusammen mit deren Details. Vergangene Fälligkeiten sind in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Die Erstellung einer `Form`-Klasse mit dem beschriebenen Ansatz ist sehr flexibel, da Sie jede Art von Formularseite erstellen können, die Sie möchten, und diese mit einem beliebigen Modell oder Modellen verknüpfen können.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, wird Ihr Modell bereits einen Großteil der Informationen enthalten, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetext usw. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann in Ihren Ansichten auf genau die gleiche Weise wie ein gewöhnliches `Form` verwendet werden.

Ein grundlegendes `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, ist unten dargestellt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der in das Formular aufzunehmenden Modellfelder hinzuzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können alle Felder im Formular einfügen, indem Sie `fields = '__all__'` verwenden, oder Sie können `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell aufgenommen werden sollen).
>
> Keiner der beiden Ansätze wird empfohlen, da neue Felder, die dem Modell hinzugefügt werden, dann automatisch im Formular enthalten sind (ohne dass der Entwickler notwendigerweise über mögliche Sicherheitsimplikationen nachdenkt).

> [!NOTE]
> Dies könnte nicht viel einfacher aussehen als die Verwendung eines `Form` (und in diesem Fall ist es nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann der erforderliche Code erheblich reduziert werden!

Der Rest der Informationen stammt aus den Modellfelddefinitionen (z.B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserem `class Meta` überschreiben, indem wir ein Wörterbuch angeben, das das zu ändernde Feld und seinen neuen Wert enthält. Beispielsweise möchten wir in diesem Formular ein Label für unser Feld mit "_Renewal date_" (statt dem Standard, der auf dem Feldnamen basiert: _Due Back_), und wir möchten auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Das `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben können, und Sie können auf ähnliche Weise `widgets` und `error_messages` einstellen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie denselben Ansatz wie für ein normales `Form` verwenden — Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und werfen `ValidationError`-Ausnahmen für ungültige Werte.
Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular besteht darin, dass das Modellfeld `due_back` und nicht `renewal_date` genannt wird.
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

Die Klasse `RenewBookModelForm` oben ist nun funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und überall dort verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` zu `due_back` aktualisieren, wie bei der zweiten Formularerklärung: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbearbeitungsalgorithmus, den wir in unserem funktionalen Ansichtbeispiel oben verwendet haben, stellt ein extrem häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert einen Großteil dieses "boilerplate"-Codes für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zur Erstellung, Bearbeitung und Löschung von Ansichten basierend auf Modellen bereitstellt. Diese übernehmen nicht nur das "View"-Verhalten, sondern erstellen auch automatisch die Formularklasse (ein `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer funktionalen Ansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Codieraufwand" liegt. Mit `FormView` müssen Sie Ihr `Form` immer noch erstellen, aber Sie müssen nicht alle Standardmuster der Formularverarbeitung implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Einsendung als gültig bekannt ist.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zur Hinzufügung von Funktionen zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen aus unserer Bibliothek zu erstellen — tatsächlich bieten wir eine grundlegende Reimplementierung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie Verwaltungsfunktionen auf eine flexiblere Weise als die Admin-Seite bereitstellen müssen).

### Ansichten

Öffnen Sie die views-Datei (**django-locallibrary-tutorial/catalog/views.py**) und hängen Sie den folgenden Codeblock an das Ende an:

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

Wie Sie sehen, müssen Sie, um die Ansichten zu erstellen, zu aktualisieren, oder zu löschen, von `CreateView`, `UpdateView` und `DeleteView` (bzw.) ableiten und dann das zugehörige Modell definieren.
Wir beschränken zudem den Aufruf dieser Ansichten nur auf eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`, bzw.

Für die "Erstellen"- und "Aktualisieren"-Fälle müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung der gleichen Syntax wie für `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Wörterbuch aus _feld_name_/_wert_-Paaren angeben (hier setzen wir willkürlich das Todesdatum zu Demonstrationszwecken — Sie möchten dies möglicherweise entfernen). Standardmäßig werden diese Ansichten nach erfolgreicher Ausführung auf eine Seite umleiten, die das neu erstellte/bearbeitete Modellelement anzeigt, was in unserem Fall die Detailansicht des Autors ist, die wir in einem vorherigen Tutorial erstellt haben. Sie können einen alternativen Umleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen zudem eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django navigieren soll, nachdem der `Author` erfolgreich gelöscht wurde. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy) um nach dem Löschen des Autors zur Autorenliste umzuleiten – `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einem Attribut der ansichtbasierten Klasse bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre dies alles.
Leider wird beim Löschen eines `Author` eine Ausnahme ausgelöst, wenn der Autor ein zugehöriges Buch hat, da unser [`Book`-Modell](/de/docs/Learn/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das author `ForeignKey`-Feld angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid)-Methode, sodass bei erfolgreichem Löschen des `Author` die Umleitung zur `success_url` erfolgt, andernfalls jedoch einfach zurück zum selben Formular umgeleitet wird.
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

Hier gibt es nichts Besonderes! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten in der Lage sein, die URL-Muster in jedem Fall zu erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der von den Ansichtsklassen erwartete Parametername ist.

### Vorlagen

Die "Erstellen"- und "Aktualisieren"-Ansichten verwenden standardmäßig dieselbe Vorlage mit dem Namen nach Ihrem Modell: `model_name_form.html` (Sie können das Suffix auf etwas anderes als **\_form** mit dem `template_name_suffix`-Feld in Ihrer Ansicht ändern, z.B. `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den untenstehenden Text hinein.

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

Dies ähnelt unseren vorherigen Formularen und rendert die Felder mithilfe einer Tabelle. Beachten Sie auch, wie wir erneut das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "Löschen"-Ansicht erwartet eine Vorlage mit dem Format `[model_name]_confirm_delete.html` (auch hier können Sie das Suffix in Ihrer Ansicht mit `template_name_suffix` ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den untenstehenden Text hinein.

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

Die Vorlage sollte vertraut aussehen.
Zuerst prüft sie, ob der Autor in irgendeinem Buch verwendet wird, und wenn ja, wird die Liste der Bücher angezeigt, die gelöscht werden müssen, bevor der Autoreneintrag gelöscht werden kann.
Wenn nicht, zeigt sie ein Formular an, das den Benutzer fragt, ob er den Autoreneintrag wirklich löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Sidebar einzubinden.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisschablone_ ein, damit er für alle Seiten für eingeloggte Benutzer sichtbar ist, die als "Mitarbeiter" angesehen werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung ermöglichen, den Autor zu erstellen (im gleichen Block wie der Link, der alle "Entliehenen" Bücher anzeigt).
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

Wir fügen die Links zum Aktualisieren und Löschen der Autoren in die Detailansicht des Autors ein.
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

Dieser Block überschreibt den `sidebar`-Block in der Basisschablone und zieht dann den ursprünglichen Inhalt mithilfe von `\{{ block.super }}` ein.
Er fügt dann Links hinzu, um den Autor zu aktualisieren oder zu löschen, jedoch nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autoreneintrag mit keinem Buch verknüpft ist.

Die Seiten sind jetzt bereit zum Testen!

### Die Seite testen

Loggen Sie sich zunächst mit einem Konto ein, das die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Sidebar (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie im Screenshot unten angezeigt werden.

![Formular Beispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Submit**, um den Autoreneintrag zu speichern.
Sie sollten jetzt zur Detailansicht Ihres neuen Autors weitergeleitet werden, mit einer URL wie `http://127.0.0.1:8000/catalog/author/10`.

![Formular Beispiel: Autorendetail zeigt Update- und Löschen-Links](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Eintrags testen, indem Sie den "Autor aktualisieren"-Link auswählen (mit einer URL ähnlich wie `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da er genau wie die "Erstellen"-Seite aussieht!

Schließlich können wir die Seite löschen, indem wir "Autor löschen" in der Sidebar auf der Detailseite auswählen.
Django sollte die unten gezeigte Löschseite anzeigen, wenn der Autoreneintrag mit keinem Buch verknüpft ist.
Drücken Sie "**Ja, löschen.**", um den Eintrag zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit einer Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dieselbe Struktur wie für `Authors` verwenden (denken Sie daran, dass Sie vor dem Löschen sicherstellen müssen, dass alle zugehörigen `BookInstance`-Einträge gelöscht wurden) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre Vorlage **book_form.html** nur eine kopierte Version der **author_form.html**-Vorlage ist, die umbenannt wurde, dann wird die neue "Buch erstellen"-Seite wie im folgenden Screenshot angezeigt:

![Screenshot, der verschiedene Felder im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache anzeigt](forms_example_create_book.png)

## Zusammenfassung

Die Erstellung und Handhabung von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Ferner bietet Django generische Formularbearbeitungsansichten, die _fast_ alle Arbeiten zur Definition von Seiten übernehmen können, die Datensätze verknüpft mit einer einzelnen Modellinstanz erstellen, bearbeiten und löschen können.

Es gibt noch viel mehr, was mit Formularen getan werden kann (schauen Sie sich unsere [See also](#fordern_sie_sich_selbst_heraus)-Liste unten an), aber Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formularhandhabungscode zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formulare-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
