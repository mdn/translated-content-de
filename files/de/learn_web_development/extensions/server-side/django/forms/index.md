---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: f46a2540200b2aac78b86c48804f8da60f954c25
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten, und insbesondere die einfachste Methode, um Formulare zu schreiben, die zum Erstellen, Aktualisieren und Löschen von Modellinstanzen verwendet werden. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, sodass Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen (anstatt der Admin-Anwendung) erstellen, aktualisieren und löschen können.

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
        Verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen, klassenbasierten Bearbeitungsansichten erheblich vereinfachen können, Formulare zum Arbeiten mit einem einzelnen Modell zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden kann, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets für die Eingabe vieler verschiedener Datentypen gibt, darunter Textfelder, Kontrollkästchen, Optionsschaltflächen, Datumswähler und so weiter. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django Admin-Seite begegnet — zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) Modelle, bestehend aus einer Reihe von Auswahllisten und Texteditoren.

![Admin Site - Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut senden, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich in irgendeiner Weise auf den Benutzer antworten, um Erfolg anzuzeigen. _Django Forms_ nehmen viel Arbeit aus all diesen Schritten heraus, indem sie ein Framework bereitstellen, mit dem Sie Formulare und deren Felder programmgesteuert definieren und diese Objekte dann sowohl zur Generierung des formalen HTML-Codes verwenden als auch einen Großteil der Validierung und Benutzerinteraktion handhaben können.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und damit arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten die Arbeit, die Sie zum Erstellen von Formularen zur Manipulation Ihrer Modelle leisten müssen, erheblich reduzieren können. Auf dem Weg dorthin erweitern wir unsere _LocalLibrary_ Anwendung, indem wir ein Formular hinzufügen, das Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir erstellen Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren (reproduziert eine einfache Version des oben gezeigten Formulars zum Bearbeiten von Büchern).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und dessen zugeordnetem Label:

![Einfaches Namensfeldbeispiel im HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als Sammlung von Elementen innerhalb `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element des Typs `type="submit"` enthalten.

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

Hier haben wir nur ein Textfeld zur Eingabe des Teamnamens, aber ein Formular _kann_ eine beliebige Anzahl weiterer Eingabeelemente und deren zugeordnete Labels haben. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den anfänglichen Wert für das Feld definiert, wenn es zum ersten Mal angezeigt wird. Das passende Team-Label wird mit dem `label` Tag angegeben (siehe "Enter name" oben), mit einem `for` Feld, das den `id`-Wert des zugeordneten `input` enthält.

Das `submit` input wird standardmäßig als Button angezeigt. Dieser kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server zu senden (in diesem Fall nur das `team_name` Feld). Die Formularattribute definieren die HTTP-`method` zum Senden der Daten und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular übermittelt wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesandt.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.
  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung in der Datenbank des Servers führen, da sie resistenter gegen Cross-Site-Fälschungsanforderungsangriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Rolle des Servers besteht zunächst darin, den anfänglichen Formularzustand anzuzeigen - entweder mit leeren Feldern oder mit vorab ausgefüllten Werten. Nachdem der Benutzer den Absende-Button gedrückt hat, empfängt der Server die Formulardaten mit Werten vom Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in "gültigen" Feldern und Nachrichten, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anforderung mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion durchführen (z. B. die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und dann den Benutzer benachrichtigen.

Wie man sich vorstellen kann, kann das Erstellen des HTML, das Validieren der zurückgegebenen Daten, die erneute Anzeige der eingegebenen Daten mit Fehlerberichten, falls erforderlich, und die Durchführung der gewünschten Operation auf gültigen Daten viel Mühe erfordern, um alles "richtig zu machen". Django macht dies viel einfacher, indem es einige der schweren Arbeiten und wiederholten Code wegnimmt!

## Django-Formularverarbeitungsprozess

Djangos Formularverarbeitung verwendet alle Techniken, die wir in früheren Tutorials zum Anzeigen von Informationen über unsere Modelle gelernt haben: Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und generiert und gibt dann eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten übergeben). Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite erneut anzuzeigen, wenn Fehler auftreten.

Ein Prozessflussdiagramm, das zeigt, wie Django Formularanforderungen verarbeitet, wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in Grün dargestellt).

![Aktualisierter Formularverarbeitungsprozess-Dokument.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptpunkte, die Djangos Formularverarbeitung umfasst:

1. Das standardmäßige Formular beim ersten Mal anzeigen, wenn es vom Benutzer angefordert wird.
   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorgefüllt sein (z. B., wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Das Formular wird zu diesem Zeitpunkt als _ungebunden_ bezeichnet, da es nicht mit vom Benutzer eingegebenen Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfang von Daten aus einer Absendeanforderung und Verknüpfung dieser mit dem Formular.
   - Daten an das Formular binden bedeutet, dass die vom Benutzer eingegebenen Daten und alle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Reinigen und Validieren der Daten.
   - Das Reinigen der Daten führt zur Bereinigung der Eingabefelder, z. B. Entfernen ungültiger Zeichen, die möglicherweise verwendet werden, um bösartigen Inhalt an den Server zu senden, und wandelt sie in konsistente Python-Typen um.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (z. B., ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, wird das Formular erneut angezeigt, diesmal mit allen vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, werden die erforderlichen Aktionen ausgeführt (z. B. Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, leiten Sie den Benutzer auf eine andere Seite weiter.

Django bietet eine Reihe von Tools und Ansätzen, die Ihnen bei den oben beschriebenen Aufgaben helfen. Das grundlegendste ist die `Form` Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenreinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare funktionieren, indem wir das praktische Beispiel einer Seite verwenden, um Bibliothekaren das Erneuern von Büchern zu ermöglichen.

> [!NOTE]
> Das Verständnis, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir Djangos formbares "High-Level"-Framework für Formulare besprechen.

## Bucherneuerungsformular mit einer Form und Funktionsansicht

Als nächstes fügen wir eine Seite hinzu, die Bibliothekaren das Erneuern ausgeliehener Bücher ermöglicht. Dazu erstellen wir ein Formular, das es den Benutzern ermöglicht, einen Datumswert einzugeben. Wir setzen das Feld mit einem Anfangswert von 3 Wochen ab dem aktuellen Datum (der normalen Ausleihdauer) und fügen eine Validierung hinzu, um sicherzustellen, dass der Bibliothekar keinen Zeitpunkt in der Vergangenheit oder zu weit in der Zukunft einträgt. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das Feld `BookInstance.due_back` des aktuellen Datensatzes.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form` Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_ Projekt vornehmen müssen.

### Form

Die `Form` Klasse ist das Herzstück von Djangos Formuarbehandlungssystem. Sie definiert die Felder im Formular, deren Layout, Anzeige-Widgets, Labels, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die den ungültigen Feldern zugeordnet sind. Die Klasse bietet auch Methoden zum Rendern in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) oder zum Abrufen des Werts eines beliebigen Elements (ermöglicht eine feinkörnige manuelle Darstellung).

#### Deklaration eines Formulars

Die Deklarationssyntax für ein `Form` ist der für die Deklaration eines `Model` sehr ähnlich und teilt die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, da in beiden Fällen sichergestellt werden muss, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in der forms.py Datei einer Anwendung gespeichert, innerhalb des Anwendungsverzeichnisses. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form` Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formularklasse für unser Bibliotheksbucherneuerungsformular ist unten gezeigt — fügen Sie diese Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) für die Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und einem hilfreichen Nutzungstext gerendert wird: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Daten als [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): JJJJ-MM-TT (2024-11-06), MM/TT/JJJJ (02/26/2024), MM/TT/JJ (10/25/24) und wird mit dem Standard [widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) gerendert.

Es gibt viele andere Typen von Formularfeldern, die Sie größtenteils durch ihre Ähnlichkeit mit den äquivalenten Modelfeldklassen erkennen werden:

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

Die Argumente, die in den meisten Feldern gemeinsam sind, sind unten aufgeführt (diese haben sinnvolle Standardwerte):

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None`-Wert gefüllt werden. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht angegeben wird, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z. B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z. B. Renewal date&ZeroWidthSpace;**:**). Mit diesem Argument können Sie ein anderes Suffix mit anderen Zeichen angeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der anfängliche Wert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel gezeigt): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit Ihren eigenen Meldungen überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulareingabedaten (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standard ist `False`.

#### Validierung

Django bietet zahlreiche Orte, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht in der Überschreibung der Methode `clean_<field_name>()` für das Feld, das Sie überprüfen möchten. So können wir beispielsweise sicherstellen, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre forms.py Datei, damit es so aussieht:

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

Es gibt zwei wichtige Dinge zu beachten. Das erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und dass wir diese Daten unabhängig davon zurückgeben, ob wir sie am Ende der Funktion ändern oder nicht.
Dieser Schritt verschafft uns die Daten "gereinigt" und von potenziell unsicherem Input mit den Standardvalidierern bereinigt und in den korrekten Standardtyp für die Daten (in diesem Fall ein Python `datetime.datetime` Objekt) umgewandelt.

Der zweite Punkt ist, dass wir, falls ein Wert außerhalb unseres Bereichs liegt, eine `ValidationError` auslösen und den Fehlertest angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt diesen Text auch in einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie später Ihre Website übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Form und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumente). Zum Beispiel können Sie in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die Seite _renew-books_ hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** auf die Funktion mit dem Namen `renew_book_librarian()` in **views.py** um und sendet die `BookInstance`-ID als den Parameter mit dem Namen `pk`. Das Muster passt nur, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die vollständige Kontrolle über die Ansichts-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Allerdings ist `pk`, kurz für "primary key", eine vernünftige Konvention!

### Ansicht

Wie im Abschnitt [Django-Formularverarbeitungsprozess](#django-formularverarbeitungsprozess) oben diskutiert, muss die Ansicht das Standardformular beim ersten Aufruf rendern und es entweder mit Fehlermeldungen erneut anzeigen, wenn die Daten ungültig sind, oder die Daten verarbeiten und auf eine neue Seite weiterleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht in der Lage sein zu wissen, ob sie zum ersten Mal aufgerufen wird, um das standardmäßige Formular zu rendern, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anforderung zum Übermitteln von Informationen zum Server verwenden, ist das häufigste Muster, dass die Ansicht die `POST`-Anforderungsart (`if request.method == 'POST':`) testet, um Formularvalidierungsanforderungen zu identifizieren, und `GET` (unter Verwendung einer `else`-Bedingung), um die anfängliche Formularerstellungsanforderung zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anforderung übermitteln möchten, ist ein typischer Ansatz, um festzustellen, ob dies der erste oder der nächste Aufruf der Ansicht ist, das Lesen der Formulardaten (z. B. das Lesen eines versteckten Werts im Formular).

Der Bucherneuerungsprozess wird in unsere Datenbank schreiben, daher verwenden wir per Konvention den `POST`-Anforderungsansatz.
Der folgende Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Körper der Ansichts-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Bearbeitung von Daten und Uhrzeiten.

In der Ansicht verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` abzurufen (wenn diese nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden" Fehler an).
Wenn dies _nicht_ eine `POST`-Anforderung ist (im `else`-Zweig behandelt), erstellen wir das standardmäßige Formular und übergeben einen `initial`-Wert für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum.

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

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei wir die Vorlage und einen Kontext angeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das Buch bereitzustellen, das wir erneuern.

Wenn dies jedoch eine `POST`-Anforderung ist, erstellen wir unser `form` Objekt und füllen es mit Daten aus der Anforderung. Dieser Prozess wird als "Bindung" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode auf alle Felder ausführt — einschließlich sowohl des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, als auch unserer spezifischen Formularfunktion `clean_renewal_date()`, um sicherzustellen, dass das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber diesmal enthält der Formularwert, der im Kontext übergeben wird, Fehlermeldungen.

Wenn das Formular gültig ist, können wir beginnen, die Daten zu nutzen, indem wir auf sie über das `form.cleaned_data`-Attribut zugreifen (z. B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach in dem `due_back`-Wert des zugeordneten `BookInstance`-Objekts.

> [!WARNING]
> Obwohl Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (z. B. `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anforderung verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind bereinigt, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularverarbeitungsteil der Ansicht besteht darin, auf eine andere Seite umzuleiten, in der Regel eine "Erfolg"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um auf die Ansicht mit dem Namen `'all-borrowed'` umzuleiten (wurde als "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, sollten Sie in Erwägung ziehen, auf die Startseite unter URL `/` umzuleiten.

Das ist alles, was für die Formularverarbeitung selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht auf eingeloggte Bibliothekare beschränken, die Berechtigung zum Erneuern von Büchern haben. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und den `@permission_required`-Funktionsdekorator mit unserer bestehenden `can_mark_returned`-Berechtigung, um den Zugriff zu ermöglichen (Dekoratoren werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung für `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir werden die bestehende wiederverwenden, um das Beispiel einfach zu halten.

Die finale Ansicht sieht daher wie unten gezeigt aus. Bitte kopieren Sie dies an das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Das meiste davon wird Ihnen aus früheren Tutorials völlig vertraut sein.

Wir erweitern die Basisvorlage und definieren dann den Inhalt block neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, weil es im Kontextobjekt in der `render()`-Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags und geben an, wo das Formular übermittelt werden soll (`action`) und die `method` zum Übermitteln der Daten (in diesem Fall ein `POST`) — wenn Sie sich die Übersicht über [HTML-Formulare](#html-formulare) am Anfang der Seite ansehen, bedeutet ein leeres `action`, dass die Formulardaten an die aktuelle URL der Seite zurückgesandt werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Eingabe, die ein Benutzer drücken kann, um die Daten zu senden. Die `{% csrf_token %}`, die direkt innerhalb der Formulartags hinzugefügt wird, ist Teil des Cross-Site-Fälschungsschutzes von Django.

> [!NOTE]
> Fügen Sie `{% csrf_token %}` zu jeder von Ihnen erstellten Django-Vorlage hinzu, die `POST` zum Übermitteln von Daten verwendet. Dies verringert die Wahrscheinlichkeit, dass Formulare von böswilligen Benutzern gehijackt werden.

Es bleibt nur die `\{{ form }}`-Vorlagenvariable, die wir im Kontextwörterbuch an die Vorlage übergeben haben.
Vielleicht wenig überraschend bietet dies, wenn es so verwendet wird, die Standardanzeige aller Formularfelder, einschließlich ihrer Labels, Widgets und Hilfetexte — die Darstellung ist wie unten gezeigt:

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in einer eigenen Tabellenzeile definiert. Diese gleiche Darstellung wird bereitgestellt, wenn Sie die Vorlagenvariable `\{{ form.as_table }}` referenzieren.

Wenn Sie einen ungültigen Datum eingeben würden, würden Sie zusätzlich eine Liste der Fehler auf der Seite angezeigt bekommen (siehe `error-list` unten).

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

#### Weitere Verwendungsmöglichkeiten für die Formularvorlagenvariable

Durch die Verwendung von `\{{ form.as_table }}` wie oben gezeigt, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listenelement (`\{{ form.as_ul }}`) oder als Absatz (`\{{ form.as_p }}`) rendern.

Es ist auch möglich, die vollständige Kontrolle über das Rendering jedes Teils des Formulars zu haben, indem Sie auf seine Eigenschaften mit Punktnotation zugreifen. So können wir beispielsweise auf eine Anzahl separater Elemente für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare manuell in Vorlagen rendert und dynamisch über Vorlagenfelder iteriert, siehe [Arbeiten mit Formularen > Rendern von Feldern manuell](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, werden Sie eine Ansicht haben, die alle Bücher anzeigt, die in der Bibliothek ausgeliehen sind, und die nur für das Bibliothekspersonal sichtbar ist.
Die Ansicht könnte in etwa so aussehen:

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
Bitte beachten Sie, dass dieser Vorlagencode nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` benötigt, um den neuen "Renew"-Link anzuzeigen, der oben hinzugefügt wurde, und um die verlinkte Seite zu öffnen (verwenden Sie möglicherweise Ihr Superuser-Konto).

Sie können alternativ eine Test-URL manuell erstellen — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann durch Navigieren zu einer Buch-Detailseite in Ihrer Bibliothek erhalten werden, und das `id`-Feld wird kopiert).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und einen Senden-Button anzeigt, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: Ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks würde so aussehen:

![Zeigt Liste aller erneuerten Bücher zusammen mit ihren Details an. Überfällig ist in rot.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht Ihnen, fast jede Art von Formularseite zu erstellen und sie mit jedem Modell oder Modell zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, wird Ihr Modell bereits die meisten Informationen definieren, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetexte usw. Anstatt die Modedefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann innerhalb Ihrer Ansichten auf genau die gleiche Weise wie ein gewöhnliches `Form` verwendet werden.

Ein einfaches `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und eine Liste der Modellfelder (`fields`), die im Formular enthalten sein sollen, hinzuzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular enthalten, indem Sie `fields = '__all__'` verwenden, oder Sie können `exclude` (anstatt `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell aufgenommen werden sollen.
>
> Keiner der Ansätze wird empfohlen, da neu hinzugefügte Felder im Modell automatisch im Formular enthalten sind (ohne dass der Entwickler notwendigerweise mögliche Sicherheitsbedenken in Betracht zieht).

> [!NOTE]
> Dies mag nicht viel einfacher aussehen als nur ein `Form` zu verwenden (und ist es in diesem Fall auch nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann der Codeaufwand erheblich reduziert werden!

Der Rest der Informationen kommt von den Modelfelddefinitionen (z. B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserem `class Meta` überschreiben, indem wir ein Wörterbuch mit dem zu ändernden Feld und seinem neuen Wert angeben. Beispielsweise möchten wir in diesem Formular vielleicht ein Label für unser Feld mit "_Renewal date_" (anstatt des Standardwerts basierend auf dem Feldnamen: _Due Back_) und wir möchten auch, dass unser Hilfetext spezifisch für diesen Anwendungsfall ist.
Die `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben können, und Sie können ähnliches mit `widgets` und `error_messages` machen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um die Validierung hinzuzufügen, können Sie den gleichen Ansatz wie bei einem normalen `Form` verwenden - Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen `ValidationError`-Ausnahmen für ungültige Werte aus.
Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular besteht darin, dass das Modelfeld `due_back` und nicht `renewal_date` heißt.
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

Die Klasse `RenewBookModelForm` oben ist jetzt funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und überall verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` zu `due_back` wie in der zweiten Formulardeklaration aktualisieren: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbehandlungsalgorithmus, den wir in unserem Funktionsansichtsbeispiel oben verwendet haben, stellt ein äußerst häufiges Muster in Formularbearbeitungsansichten dar. Django abstrahiert einen Großteil dieses "Boilerplate"-Codes für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) für das Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese Ansichten behandeln nicht nur das "Ansichts"-Verhalten, sondern erstellen automatisch die Formularklasse (ein `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten im Hinblick auf "Flexibilität" vs. "Kodierungsaufwand" liegt. Bei Verwendung von `FormView` müssen Sie immer noch Ihr `Form` erstellen, aber Sie müssen nicht alle standardmäßigen Formularverarbeitungspatterns implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt erstellen wir mit generischen Bearbeitungsansichten Seiten, um Funktionalitäten zum Erstellen, Bearbeiten und Löschen von `Author`-Einträgen in unserer Bibliothek hinzuzufügen — im Wesentlichen eine grundlegende Neuumsetzung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie Admin-Funktionalität in einer flexibleren Weise bieten müssen, als es von der Admin-Seite bereitgestellt werden kann).

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

Wie Sie sehen können, müssen Sie zur Erstellung, Aktualisierung oder Löschung der Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und dann das zugeordnete Modell definieren.
Wir beschränken den Aufruf dieser Ansichten auch nur auf eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die Fälle "create" und "update" müssen Sie auch die in das Formular einzufügenden Felder angeben (unter Verwendung der gleichen Syntax wie für `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Wörterbuch von _field_name_/_value_-Paaren angeben (hier setzen wir willkürlich das Todesdatum zur Demonstration fest - Sie könnten dies entfernen wollen). Standardmäßig leiten diese Ansichten nach dem Erfolg einer Seite weiter, die das neu erstellte/bearbeitete Modellobjekt anzeigt, was in unserem Fall die Autorendetailansicht ist, die wir in einem früheren Tutorial erstellt haben. Sie können einen alternativen Weiterleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir legen auch eine `success_url`-URL fest (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, auf die Django nach dem erfolgreichen Löschen des Autors navigieren könnte. Oben verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy)-Funktion, um nach dem Löschen eines Autors zur Autorliste weiterzuleiten — `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, da wir eine URL zu einem Attribut der klassenbasierten Ansicht bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein soll, wäre das alles.
Leider löst das Löschen eines `Author` eine Ausnahme aus, wenn der Autor mit einem Buch verknüpft ist, da unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das Autor-`ForeignKey`-Feld angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid)-Methode, sodass sie bei erfolgreichem Löschen des `Author` zur `success_url` weiterleitet, aber bei einem Fehler einfach zurück zum gleichen Formular weiterleitet.
Wir werden die Vorlage unten aktualisieren, um klarzustellen, dass Sie keine `Author`-Instanzen löschen können, die in einem `Book` verwendet werden.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt nichts Besonders Neues hier! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, den die Ansichtsklassen erwarten.

### Vorlagen

Die "create" und "update" Ansichten verwenden standardmäßig die gleiche Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix mit dem `template_name_suffix`-Attribut in Ihrer Ansicht in etwas anderes ändern, z. B. `template_name_suffix = '_other_suffix'`).

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den unten stehenden Text hinein.

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir erneut den `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "delete" Ansicht erwartet, eine Vorlage im Format `[model_name]_confirm_delete.html` zu finden (Sie können das Suffix auch mit `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den unten stehenden Text hinein.

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
Zuerst wird überprüft, ob der Autor in irgendeinem Buch verwendet wird und, wenn ja, wird die Liste der Bücher angezeigt, die gelöscht werden müssen, bevor der Autorendatensatz gelöscht werden kann.
Wenn nicht, wird ein Formular angezeigt, das den Benutzer fragt, ob er den Autorendatensatz wirklich löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzubinden.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basistemplate_ ein, sodass er auf allen Seiten für eingeloggte Benutzer, die als "Personal" betrachtet werden und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`) sichtbar ist.
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die den Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im gleichen Block wie der Link, der "Alle Ausgeliehenen" Bücher zeigt).
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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren auf der Authoren-Detailseite hinzu.
Öffnen **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code an:

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

Dieser Block überschreibt den `sidebar`-Block in der Basistemplate und zieht dann den Originalinhalt mit `\{{ block.super }}` ein.
Es listet dann die Links zum Aktualisieren oder Löschen des Autors auf, jedoch nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autorendatensatz nicht mit Büchern verknüpft ist.

Die Seiten sind nun bereit zum Testen!

### Testen der Seite

Zuerst loggen Sie sich in die Seite mit einem Konto ein, das die Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren hat.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Create author" in der Seitenleiste (mit URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie im Screenshot unten aussehen.

![Form Example: Create Author](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann auf **Submit**, um den Autorendatensatz zu speichern.
Sie sollten nun zu einer Detailansicht für Ihren neuen Autor weitergeleitet werden, mit einer URL wie `http://127.0.0.1:8000/catalog/author/10`.

![Form Example: Author Detail showing Update and Delete links](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie auf den Link "Update author" (mit einer URL ähnlich `http://127.0.0.1:8000/catalog/author/10/update/`) klicken — wir zeigen keinen Screenshot, da er genauso aussieht wie die "create"-Seite!

Zum Schluss können wir die Seite löschen, indem sie "Delete author" im Menü auf der Detailseite auswählen.
Django sollte die Löschen-Seite anzeigen, die unten gezeigt ist, wenn der Autorendatensatz in keinem Buch verwendet wird.
Drücken Sie "**Yes, delete.**", um den Datensatz zu entfernen und Sie zur Liste aller Autoren zu führen.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Sich selbst herausfordern

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau den gleichen Aufbau wie für `Authors` verwenden (denken Sie beim Löschen daran, dass Sie ein `Book` nicht löschen können, solange alle dazugehörigen `BookInstance` Datensätze nicht gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html**-Vorlage nur eine umbenannte Kopie der **author_form.html**-Vorlage ist, sieht die neue "create book"-Seite wie der Screenshot unten aus:

![Screenshot zeigt verschiedene Felder im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache an](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen zum Deklarieren, Rendern und Validieren von Formularen bereitstellt. Darüber hinaus bietet Django generische Bearbeitungsansichten, die _fast_ die gesamte Arbeit leisten können, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen können, die mit einer einzelnen Modellinstanz verknüpft sind.

Es gibt noch viel mehr, das mit Formularen erreicht werden kann (siehe unsere [siehe auch](#siehe_auch) Liste unten), aber Sie sollten jetzt verstehen, wie Sie grundlegende Formulare und Formverarbeitungscode zu Ihren eigenen Webseiten hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularverarbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Formulare aus Modellen erstellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Authentication", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
