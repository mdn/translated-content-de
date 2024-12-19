---
title: "Django Tutorial Teil 9: Arbeiten mit Formularen"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten können und insbesondere, wie Sie auf die einfachste Weise Formulare schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, damit Bibliothekare Bücher erneuern sowie Autoren erstellen, aktualisieren und löschen können — und das mit unseren eigenen Formularen, anstatt die Admin-Anwendung zu nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Alle vorherigen Tutorial-Themen abschließen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen Klassen-gestützten Bearbeitungsansichten die Erstellung von Formularen zur Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, mit denen Informationen von Benutzern gesammelt werden können, um sie an einen Server zu übermitteln. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Widgets für die Eingabe vieler verschiedener Datentypen gibt, darunter Textfelder, Kontrollkästchen, Radio-Buttons, Datumsauswahlen und so weiter. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie es uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Forgery zu senden.

Obwohl wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Seite begegnet – das folgende Bildschirmfoto zeigt beispielsweise ein Formular zur Bearbeitung eines unserer [Book](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models) Modelle, das aus einer Reihe von Auswahllisten und Texteditoren besteht.

![Admin Website - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingegebenen Daten auf dem Server (und möglicherweise auch im Browser) validieren und richtig bereinigen, das Formular mit Fehlermeldungen erneut veröffentlichen, um Benutzer über ungültige Felder zu informieren, die Daten nach erfolgreicher Übertragung verarbeiten und schließlich in irgendeiner Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nehmen einen Großteil der Arbeit all dieser Schritte ab, indem sie ein Framework bereitstellen, das es Ihnen ermöglicht, Formulare und deren Felder programmatisch zu definieren und diese Objekte dann sowohl zur Generierung des Form-HTML-Codes als auch zur Handhabung eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten zur Erstellung und Arbeit mit Formularen und insbesondere, wie die generischen Bearbeitungsansichten den Aufwand zur Erstellung von Formularen zur Bearbeitung Ihrer Modelle erheblich reduzieren können. Unterwegs erweitern wir unsere _LocalLibrary_ Anwendung, indem wir ein Formular hinzufügen, mit dem Bibliothekare Bibliotheksbücher erneuern können, und wir erstellen Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren (wobei wir eine einfache Version des oben gezeigten Formulars zur Bearbeitung von Büchern reproduzieren).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und des zugehörigen Labels:

![Einfaches Namensfeldbeispiel in HTML-Formular](form_example_name_field.png)

Das Formular ist in HTML als Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert und enthält mindestens ein `input`-Element vom `type="submit"`.

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

Während wir hier nur ein Textfeld zur Eingabe des Teamnamens haben, kann ein Formular _beliebig viele_ andere Eingabeelemente und zugehörige Labels enthalten. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden in JavaScript/CSS/HTML verwendet, um das Feld zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es erstmals angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabeelement wird standardmäßig als Button angezeigt. Dieser kann gedrückt werden, um die Daten in allen anderen Eingabeelementen im Formular an den Server zu übertragen (in diesem Fall nur das `team_name`-Feld). Die Formularattribute definieren die HTTP-Methode `method`, die verwendet wird, um die Daten zu senden, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden sollen, wenn das Formular abgeschickt wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular an die aktuelle Seiten-URL zurückgesendet.
- `method`: Die HTTP-Methode, die verwendet wird, um die Daten zu senden: _post_ oder _get_.

  - Die `POST`-Methode sollte immer dann verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie widerstandsfähiger gegenüber Cross-Site-Forgery-Request-Angriffen gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die Benutzerdaten nicht ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie die URL speichern oder teilen möchten.

Die Rolle des Servers besteht darin, zuerst den anfänglichen Zustand des Formulars zu rendern – entweder mit leeren Feldern oder vorab ausgefüllt mit Anfangswerten. Nachdem der Benutzer den Submit-Button gedrückt hat, erhält der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen und dabei die vom Benutzer eingegebenen Daten in "gültigen" Feldern beibehalten und Nachrichten anzeigen, die das Problem für die ungültigen Felder beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine entsprechende Aktion ausführen (wie: die Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es einige Anstrengungen erfordern, um den HTML-Code zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten bei Bedarf mit Fehlerberichten wieder anzuzeigen und die gewünschte Operation mit gültigen Daten auszuführen "richtig hinzubekommen". Django macht dies viel einfacher, indem es einen Teil der umfangreichen und sich wiederholenden Codierarbeit entfernt!

## Django-Formularbearbeitungsprozess

Das Formularbearbeitungssystem von Django verwendet alle Techniken, über die wir in den vorherigen Tutorials gelernt haben (zum Anzeigen von Informationen zu unseren Modellen): Die Ansicht erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und erzeugt und gibt dann eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ mit den anzuzeigenden Daten übergeben). Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, von Benutzern bereitgestellte Daten zu verarbeiten und die Seite erneut anzuzeigen, wenn es Fehler gibt.

Ein Prozessablaufdiagramm, wie Django Formulardatenanfragen bearbeitet, wird unten gezeigt, ausgehend von einer Anfrage nach einer Seite mit einem Formular (in grün dargestellt).

![Aktualisierter Formularbearbeitungsprozess-Dokumentation.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben, die Django bei der Formularbearbeitung durchführt:

1. Standardformular anzeigen, wenn es erstmals vom Benutzer angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardanfangswerte haben).
   - Das Formular wird an dieser Stelle als _ungebunden_ bezeichnet, da es nicht mit Benutzereingabedaten verknüpft ist (obwohl es über Anfangswerte verfügen kann).

2. Daten von einer Absendeanfrage empfangen und sie an das Formular binden.

   - Das Binden von Daten an das Formular bedeutet, dass die vom Benutzer eingegebenen Daten und eventuelle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Daten bereinigen und validieren.

   - Beim Bereinigen der Daten werden unsichere Zeichen aus den Eingabefeldern entfernt, wie zum Beispiel ungültige Zeichen, die verwendet werden könnten, um bösartigen Inhalt an den Server zu senden, und sie werden in konsistente Python-Typen konvertiert.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, das Formular erneut anzeigen, diesmal mit vom Benutzer ausgefüllten Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen ausführen (wie z. B. Daten speichern, eine E-Mail senden, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite weiterleiten.

Django bietet Ihnen eine Reihe von Werkzeugen und Ansätzen, um bei den oben beschriebenen Aufgaben zu helfen. Das grundlegendste ist die `Form` Klasse, die sowohl die Generierung von Form-HTML als auch die Datenbereinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare arbeiten, indem wir das praktische Beispiel einer Seite verwenden, die es Bibliothekaren ermöglicht, Bücher zu erneuern.

> [!NOTE]
> Das Verständnis, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir die "höheren" Formklassen von Django besprechen.

## Bucherneuerungsformular mit einem Formular und einer Funktionsansicht

Als nächstes werden wir eine Seite hinzufügen, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu erneuern. Dazu erstellen wir ein Formular, mit dem Benutzer einen Datumswert eingeben können. Wir werden das Feld mit einem Anfangswert von 3 Wochen ab dem aktuellen Datum vorsehen (die normale Leihfrist) und etwas Validierung hinzufügen, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum eingeben kann, das zu weit in der Zukunft liegt. Wenn ein gültiges Datum eingegeben wurde, werden wir es in das `BookInstance.due_back`-Feld des aktuellen Datensatzes schreiben.

Das Beispiel wird eine funktionsbasierte Ansicht und eine `Form` Klasse verwenden. Die folgenden Abschnitte erklären, wie Formulare arbeiten und welche Änderungen Sie an unserem laufenden _LocalLibrary_ Projekt vornehmen müssen.

### Formular

Die `Form` Klasse ist das Herzstück von Djangos Formularbearbeitungssystem. Es spezifiziert die Felder im Formular, ihr Layout, Anzeige-Widgets, Label, anfängliche Werte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden, um sich selbst in Vorlagen unter Verwendung vordefinierter Formate (Tabellen, Listen usw.) darzustellen oder um den Wert eines Elements zu erhalten (ermöglicht eine feingranulare, manuelle Darstellung).

#### Ein Formular deklarieren

Die Deklarationssyntax für ein `Form` ist der Deklaration eines `Model` sehr ähnlich und teilt sich die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, da in beiden Fällen sichergestellt werden muss, dass jedes Feld die richtigen Datentypen behandelt, auf gültige Daten beschränkt ist und eine Beschreibung zur Anzeige/Dokumentation hat.

Formulardaten werden in einem Anwendungsverzeichnis in der forms.py Datei einer Anwendung gespeichert. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms` Bibliothek, leiten von der `Form` Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formular-Klasse für unser Bibliotheksbuch-Erneuerungsformular wird unten gezeigt — fügen Sie diese zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einziges [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) für die Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Erneuerungsdatum:_" und etwas hilfreichem Text dargestellt wird: "_Geben Sie ein Datum zwischen jetzt und 4 Wochen (Standard 3 Wochen) ein._" Da keine der anderen optionalen Argumente angegeben sind, akzeptiert das Feld Datumsangaben mit den [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24) und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput) dargestellt.

Es gibt viele andere Arten von Formularfeldern, die Sie in ihrer Ähnlichkeit zu den entsprechenden Modellfeldklassen erkennen werden:

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

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None`-Wert versehen werden. Felder sind standardmäßig erforderlich, Sie würden `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht angegeben ist, erstellt Django eines aus dem Feldnamen, indem es den ersten Buchstaben großschreibt und Unterstriche durch Leerzeichen ersetzt (z. B. _Erneuerungsdatum_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z. B. Erneuerungsdatum**:**). Dieses Argument ermöglicht es Ihnen, ein anderes Suffix mit anderen Zeichen zu spezifizieren.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeige-Widget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet wird.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste der Fehlermeldungen für das Feld. Diese können Sie bei Bedarf durch eigene Nachrichten ersetzen.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die auf das Feld aufgerufen werden, wenn es validiert wird.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung von Formulareingaben (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, sein Wert kann jedoch nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Stellen, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, ist das Überschreiben der Methode `clean_<field_name>()` für das Feld, das Sie überprüfen möchten. Beispielsweise können wir überprüfen, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre forms.py Datei, sodass sie so aussieht:

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

Es gibt zwei wichtige Dinge zu beachten. Das erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und dass wir diese Daten, unabhängig davon, ob wir sie ändern, am Ende der Funktion zurückgeben.
Dieser Schritt erhält uns die Daten "gesäubert" und von potenziell unsicheren Eingaben mit den Standardvalidatoren bereinigt und in den korrekten Python-Standardtyp für die Daten konvertiert (in diesem Fall ein Python `datetime.datetime`-Objekt).

Das zweite ist, dass wir, wenn ein Wert außerhalb unseres Bereichs liegt, eine `ValidationError` auslösen und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird. Das obige Beispiel umgibt diesen Text auch noch mit einer der [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/) von Django, `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Beispielsweise in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, können Sie die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen Sie eine URL-Konfiguration für die _renew-books_ Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und sendet die `BookInstance`-ID als Parameter mit dem Namen `pk`. Das Muster passt nur, wenn `pk` eine korrekt formatierte `uuid` ist.

> [!NOTE]
> Wir können unsere aufgenommenen URL-Daten benennen, wie wir wollen, da wir die vollständige Kontrolle über die View-Funktion haben (wir verwenden keine generische Detail-View-Klasse, die Parameter eines bestimmten Namens erwartet). `pk`, kurz für "primary key", ist jedoch eine vernünftige Konvention.

### Ansicht

Wie im Abschnitt [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) beschrieben, muss die Ansicht das Standardformular bei der ersten Aufrufe rendern und es entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und zu einer neuen Seite umleiten, wenn die Daten gültig sind. Um diese unterschiedlichen Aktionen auszuführen, muss die Ansicht in der Lage sein zu erkennen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder ob es sich um einen späteren Aufruf zur Validierung der Daten handelt.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die Ansicht gegen den `POST`-Anfragetyp testet (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren, und `GET` (unter Verwendung einer `else`-Bedingung), um die ursprüngliche Formularerstellungsanfrage zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, ist ein typischer Ansatz, um festzustellen, ob dies der erste oder ein nachfolgender View-Aufruf ist, das Lesen der Formulardaten (z. B. um einen versteckten Wert im Formular zu lesen).

Der Bucherneuerungsprozess wird in unsere Datenbank schreiben, daher verwenden wir aus Konvention den `POST`-Anfrageansatz. Der Codeausschnitt unten zeigt das (sehr standardisierte) Muster für diese Art von Funktionsansicht.

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
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Erstellt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Diese Funktion generiert eine URL aus einem URL-Konfigurationsnamen und einer Menge von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Daten und Uhrzeiten.

In der Ansicht verwenden wir zuerst das Argument `pk` in `get_object_or_404()`, um das aktuelle `BookInstance` zu erhalten (wenn dies nicht existiert, wird die Ansicht sofort beendet und die Seite zeigt einen "nicht gefunden"-Fehler an). Wenn dies _kein_ `POST`-Antrag ist (behandelt durch die `else`-Klausel), erstellen wir das Standardformular, indem wir einen `initial`-Wert für das `renewal_date`-Feld, 3 Wochen ab dem aktuellen Datum, angeben.

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

Nachdem das Formular erstellt wurde, rufen wir `render()` auf, um die HTML-Seite zu erstellen, und geben die Vorlage und einen Kontext an, der unser Formular enthält. In diesem Fall enthält der Kontext auch unser `BookInstance`, das wir in der Vorlage verwenden, um Informationen über das Buch anzuzeigen, das wir erneuern.

Handelt es sich jedoch um eine `POST`-Anfrage, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird "Binden" genannt und ermöglicht es uns, das Formular zu validieren.

Wir prüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode auf allen Feldern ausführt – einschließlich des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, und unserer spezifischen `clean_renewal_date()` Funktion des Formulars, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber diesmal enthält der im Kontext übergebene Formularwert Fehlermeldungen.

Wenn das Formular gültig ist, können wir die Daten verwenden und über das `form.cleaned_data`-Attribut darauf zugreifen (z. B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach in den `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt über die Anfrage auf die Formulardaten zugreifen können (z. B. `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn eine GET-Anfrage verwendet wird), wird dies NICHT empfohlen. Die bereinigten Daten werden normalisiert, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht ist das Umleiten zu einer anderen Seite, normalerweise einer "Erfolgs"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` weiterzuleiten (diese wurde als "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, überlegen Sie, auf die Startseite unter URL `/` umzuleiten.

Das ist alles, was für die Formularbearbeitung selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht nur für eingeloggte Bibliothekare, die die Berechtigung haben, Bücher zu erneuern, einschränken. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und die `@permission_required` Funktion-Decorator mit unserer bestehenden `can_mark_returned` Berechtigung, um den Zugriff zu erlauben (Dekoratoren werden in der angegebenen Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber wir werden die bestehende wiederverwenden, um das Beispiel einfach zu halten.

Die finale Ansicht ist daher wie unten gezeigt. Bitte kopieren Sie dies in das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Der größte Teil davon wird Ihnen aus den vorherigen Tutorials vertraut sein.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir sind in der Lage, `\{{ book_instance }}` (und seine Variablen) zu referenzieren, da es im Kontext-Objekt in der `render()`-Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Rückgabedatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst definieren wir die `form`-Tags und geben an, wohin das Formular gesendet werden soll (`action`) und die `method` zur Übermittlung der Daten (in diesem Fall ein `POST`) - wenn Sie sich an den [HTML-Formulare](#html-formulare) Überblick am Anfang der Seite erinnern, bedeutet ein leerer `action`, wie hier gezeigt, dass die Formulardaten zurück an die aktuelle URL der Seite gesendet werden (was wir wollen). Innerhalb der Tags definieren wir das `submit`-Input, das ein Benutzer drücken kann, um die Daten zu senden. Das `{% csrf_token %}`, das direkt innerhalb der Formulartags hinzugefügt wurde, ist Teil des Schutzes von Django gegen Cross-Site-Request-Forgery.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jeder Django-Vorlage hinzu, die Sie erstellen und die `POST` zur Datenübertragung verwendet. Dies reduziert das Risiko, dass Formulare von böswilligen Benutzern gekapert werden.

Alles, was übrig bleibt, ist die `\{{ form }}`-Template-Variable, die wir an die Vorlage im Kontext-Dictionary übergeben haben. Vielleicht wenig überraschend bietet es bei Verwendung wie gezeigt eine Standarddarstellung aller Formularfelder, einschließlich ihrer Labels, Widgets und Hilfetexte – die Darstellung sieht wie unten gezeigt aus:

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
> Vielleicht ist es nicht offensichtlich, da wir nur ein Feld haben, aber standardmäßig wird jedes Feld in einer eigenen Tabellenzeile definiert. Diese gleiche Darstellung wird bereitgestellt, wenn Sie die Template-Variable `\{{ form.as_table }}` referenzieren.

Wenn Sie ein ungültiges Datum eingeben, erhalten Sie zusätzlich eine Liste der Fehler, die auf der Seite angezeigt werden (`errorlist` siehe unten).

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

Bei Verwendung von `\{{ form.as_table }}` wie oben gezeigt, wird jedes Feld als Tabellenzeile dargestellt. Sie können auch jedes Feld als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) darstellen.

Es ist auch möglich, die vollständige Kontrolle über die Darstellung jedes Teils des Formulars zu haben, indem man seine Eigenschaften mit Punktnotation indiziert. So können wir beispielsweise auf eine Reihe einzelner Elemente für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}`: Das ganze Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare manuell in Vorlagen rendert und Felder dynamisch durchgeht, siehe [Arbeiten mit Formularen > Felder manuell rendern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die "Challenge" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) angenommen haben, wird Ihnen eine Ansicht angezeigt, die alle ausgeliehenen Bücher in der Bibliothek anzeigt und nur für das Bibliothekspersonal sichtbar ist. Die Ansicht könnte in etwa so aussehen:

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

Wir können neben jedem Element einen Link zur Bucherneuerungsseite hinzufügen, indem wir den folgenden Template-Code zum oben genannten Listenelement-Text hinzufügen. Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da hier der `bookinst`-Wert definiert ist.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` benötigt, um den neuen "Erneuern"-Link oben zu sehen und auf die verknüpfte Seite zuzugreifen (verwenden Sie möglicherweise Ihr Superuser-Konto).

Alternativ können Sie auch manuell eine Test-URL wie diese konstruieren - `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann ermittelt werden, indem Sie zu einer Bücherdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und einen Absenden-Button anzeigt, erscheint, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen eingegebenen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht folgendermaßen aus:

![Zeigt die Liste aller erneuerten Bücher mit ihren Details an. Vergangene Fälligkeiten sind in rot dargestellt.](forms_example_renew_allbooks.png)

## ModelForms

Ein `Form`-Klasse mit dem oben beschriebenen Ansatz zu erstellen ist sehr flexibel, da Sie jede Art von Formularseite erstellen können, die Sie möchten, und sie mit jedem Modell oder Modellen verknüpfen können.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, dann wird Ihr Modell bereits den Großteil der Informationen enthalten, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetexte und so weiter. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Diese `ModelForm` kann dann in Ihren Ansichten auf die gleiche Weise wie eine normale `Form` verwendet werden.

Eine grundlegende `ModelForm`, die dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) zu versehen und eine Liste der Modellfelder `fields`, die im Formular enthalten sein sollen, einzuschließen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular einbeziehen, indem Sie `fields = '__all__'` verwenden, oder Sie können `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell einbezogen werden sollen.
>
> Beide Ansätze werden nicht empfohlen, da neu hinzugefügte Felder zum Modell dann automatisch im Formular enthalten sind (ohne dass der Entwickler mögliche Sicherheitsimplikationen berücksichtigt).

> [!NOTE]
> Dies mag nicht viel einfacher erscheinen als einfach eine `Form` zu verwenden (und es ist in diesem Fall nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den erforderlichen Code erheblich verringern!

Der Rest der Informationen kommt von den Modellfelddefinitionen (z. B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserem `class Meta` überschreiben, indem wir ein Wörterbuch mit dem zu ändernden Feld und seinem neuen Wert angeben. Beispielsweise möchten wir in diesem Formular ein Label für unser Feld mit dem Namen "_Erneuerungsdatum_" (anstatt des Standardfeldnamens: _Fälligkeitsdatum_), und wir möchten, dass unser Hilfetext für diesen Anwendungsfall spezifisch ist. Das `Meta` unten zeigt, wie Sie diese Felder überschreiben, und Sie können auf ähnliche Weise `widgets` und `error_messages` einstellen, wenn die Standardeinstellungen nicht ausreichend sind.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um eine Validierung hinzuzufügen, können Sie denselben Ansatz wie beim normalen `Form` verwenden – Sie definieren eine Funktion namens `clean_<field_name>()` und lösen `ValidationError` Ausnahmen für ungültige Werte aus.
Der einzige Unterschied zu unserem ursprünglichen Formular besteht darin, dass das Modelfeld `due_back` und nicht `renewal_date` genannt wird.
Diese Änderung ist notwendig, da das entsprechende Feld in `BookInstance` auch `due_back` genannt wird.

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

Die Klasse `RenewBookModelForm` oben ist nun funktional äquivalent zu unserem ursprünglichen `RenewBookForm`. Sie könnten es überall dort importieren und verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` zu `due_back` aktualisieren wie in der zweiten Formulardeklaration: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der Formularbearbeitungsalgorithmus, den wir in unserem Funktionsansichtbeispiel oben verwendet haben, stellt ein extrem übliches Muster in Formularbearbeitungsansichten dar. Django abstrahiert einen Großteil dieses "Boilerplate"-Codes für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese behandeln nicht nur das "Anzeigen"-Verhalten, sondern erstellen automatisch auch die Formular-Klasse (eine `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Neben den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Kodierungsaufwand" liegt. Durch die Verwendung von `FormView` müssen Sie Ihr `Form` weiterhin erstellen, aber Sie müssen nicht alle standardmäßigen Formularbearbeitungspatterns implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig erkannt wird.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die die Funktionalität zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen unserer Bibliothek hinzufügen – dabei wird effektiv eine grundlegende Neuimplementierung von Teilen der Admin-Website bereitgestellt (dies könnte nützlich sein, wenn Sie Verwaltungsfunktionen auf eine flexiblere Weise als von der Admin-Website bereitgestellt anbieten müssen).

### Ansichten

Öffnen Sie die Views-Datei (**django-locallibrary-tutorial/catalog/views.py**) und fügen Sie den folgenden Codeblock am Ende davon hinzu:

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

Wie Sie sehen, müssen Sie zum Erstellen, Aktualisieren oder Löschen der Ansichten von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und dann das zugehörige Modell definieren.
Wir beschränken den Aufruf dieser Ansichten auch nur auf eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author`.

Für die "Erstellen" und "Aktualisieren" Fälle müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (unter Verwendung derselben Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet, und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Wörterbuch von _Feldname_/_Wert_ Paaren angeben (hier setzen wir willkürlich das Todesdatum zu Demonstrationszwecken – möglicherweise möchten Sie das entfernen). Standardmäßig leiten diese Ansichten bei Erfolg zu einer Seite mit dem neu erstellten/bearbeiteten Modellobjekt weiter, was in unserem Fall die Autorendetailansicht ist, die wir in einem früheren Tutorial erstellt haben. Sie können ein anderes Ziel bei erfolgreicher Einreichung angeben, indem Sie explizit den Parameter `success_url` angeben.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden. Wir setzen auch eine `success_url` (siehe oben), da es keine offensichtliche Standard-URL gibt, zu der Django nach erfolgreichem Löschen des `Author` navigieren könnte. Oben verwenden wir die [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy)-Funktion, um nach dem Löschen eines Autors zu unserer Autorenliste im Erfolgsfall zu gehen — `reverse_lazy()` ist eine version von `reverse()`, die erst ausgeführt wird, wenn nötig, und wird hier verwendet, weil wir eine URL zu einem Klassensichtattribut bereitstellen.

Wenn das Löschen von Autoren immer erfolgreich sein sollte, wäre es das. Leider wird das Löschen eines `Author` eine Ausnahme auslösen, wenn der Autor ein zugehöriges Buch hat, da unser [`Book` Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das Autor `ForeignKey`-Feld spezifiziert. Um diesen Fall zu behandeln, überschreibt die Ansicht die [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid) Methode, sodass, wenn das Löschen des `Author` erfolgreich war, sie zur `success_url` umleitet, jedoch im Falle des Scheiterns gerade zurück auf dasselbe Formular umleitet. Wir aktualisieren die Vorlage unten, um klarzustellen, dass Sie keinen `Author` löschen können, der in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration am Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Hier ist nichts besonders Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als den Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der von den Ansichts-Klassen erwartete Parametername ist.

### Vorlagen

Die "Erstellen" und "Aktualisieren" Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt sein wird: `model_name_form.html` (Sie können das Suffix auf etwas anderes als **\_form** ändern, indem Sie das `template_name_suffix` Feld in Ihrer Ansicht definieren, zum Beispiel `template_name_suffix = '_other_suffix'`)

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

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir erneut das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe widerstandsfähig sind.

Die "Löschen" Ansicht erwartet eine Vorlage, die nach dem Format `[model_name]_confirm_delete.html` benannt ist (auch hier können Sie das Suffix mit `template_name_suffix` in Ihrer Ansicht ändern). Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den untenstehenden Text.

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

Die Vorlage sollte Ihnen vertraut sein. Sie überprüft zuerst, ob der Autor in einem der Bücher verwendet wird, und wenn ja, zeigt sie die Liste der Bücher an, die gelöscht werden müssen, bevor der Autoren-Datensatz gelöscht werden kann. Andernfalls zeigt sie ein Formular an, das den Benutzer fragt, ob er den Autoren-Datensatz auch tatsächlich löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste einzuhaken. Zuerst fügen wir der _Basisvorlage_ einen Link zum Erstellen des Autors hinzu, damit er auf allen Seiten für eingeloggte Benutzer sichtbar ist, die als "Mitarbeiter" gelten und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`). Öffnen **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die es Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im selben Block wie der Link, der "All Borrowed" Bücher anzeigt). Denken Sie daran, die URL mit ihrem Namen `'author-create'` zu referenzieren, wie unten gezeigt.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren zur Autorendetailseite hinzu. Öffnen **catalog/templates/catalog/author_detail.html** und fügen Sie den folgenden Code hinzu:

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

Dieser Block überschreibt den `sidebar` Block in der Basisvorlage und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}`. Er fügt dann Links hinzu, um den Autor zu aktualisieren oder zu löschen, jedoch nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autor-Datensatz mit keinem Buch verknüpft ist.

Jetzt sind die Seiten bereit zum Testen!

### Die Seite testen

Melden Sie sich zunächst mit einem Konto an, das die Berechtigungen für das Hinzufügen, Ändern und Löschen von Autoren besitzt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Seitenleiste (mit URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie auf dem Screenshot unten aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Absenden**, um den Autorendatensatz zu speichern. Sie sollten nun zu einer Detailansicht für Ihren neuen Autoren weitergeleitet werden, mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetail zeigt Update- und Löschlinks an](forms_example_detail_author_update.png)

Sie können den Datensatz testen, indem Sie den Link "Autor aktualisieren" auswählen (mit einer URL, die etwa `http://127.0.0.1:8000/catalog/author/10/update/` lautet) - wir zeigen keinen Screenshot davon, da es genauso aussieht wie die Seite "Erstellen"!

Schließlich können wir die Seite löschen, indem wir "Autor löschen" in der Seitenleiste auf der Detailseite auswählen. Django sollte, wenn der Autordatensatz in keinem Buch verwendet wird, die folgende Löschseite anzeigen. Drücken Sie "**Ja, löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit Option zum Löschen eines Autors](forms_example_delete_author.png)

## Herausforderung: Fordern Sie sich heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau die gleiche Struktur wie für `Authors` verwenden (für das Löschen, denken Sie daran, dass Sie kein `Book` löschen können, bis alle zugehörigen `BookInstance`-Datensätze gelöscht sind). Sie müssen die richtigen Berechtigungen verwenden. Wenn Ihre **book_form.html** Vorlage nur eine kopierte und umbenannte Version der **author_form.html** Vorlage ist, dann sieht die neue "Buch erstellen" Seite wie auf dem Screenshot unten aus:

![Screenshot mit verschiedenen Formularfeldern wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Bearbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus stellt Django generische Formularbearbeitungsansichten bereit, die _fast die gesamte_ Arbeit übernehmen können, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen, die mit einer einzelnen Modellinstanz verknüpft sind.

Es gibt noch viel mehr, was mit Formularen gemacht werden kann (siehe unsere [siehe auch](#siehe_auch) Liste unten), aber Sie sollten jetzt verstehen, wie man grundlegende Formulare und Formularbearbeitungs-Code zu Ihren eigenen Websites hinzufügt.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit Klassen-basierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
