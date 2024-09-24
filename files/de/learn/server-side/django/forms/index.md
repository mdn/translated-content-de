---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
slug: Learn/Server-side/Django/Forms
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten, insbesondere den einfachsten Weg, Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website) Website erweitern, damit Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie alle vorherigen Tutorial-Themen ab, einschließlich
        <a href="/de/docs/Learn/Server-side/Django/Authentication">Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren.
        Verstehen, wie die generischen, auf Klassen basierenden Bearbeitungsansichten die Erstellung von Formularen für die Arbeit mit einem einzelnen Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Ein [HTML-Formular](/de/docs/Learn/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Sammlung von Benutzereingaben, da es geeignete Widgets zum Eingeben vieler verschiedener Datentypen gibt, einschließlich Textfeldern, Auswahlkästchen, Optionsschaltflächen, Datumsauswahlen usw. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server auszutauschen, da sie uns ermöglichen, Daten mit Schutz vor Cross-Site-Request-Forgery in `POST`-Anfragen zu senden.

Während wir in diesem Tutorial bisher keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Seite begegnet – zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Book](/de/docs/Learn/Server-side/Django/Models) Modelle, das aus einer Reihe von Auswahllisten und Texteditoren besteht.

![Admin-Seite – Buch hinzufügen](admin_book_add.png)

Die Arbeit mit Formularen kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, eingegebene Daten auf dem Server (und möglicherweise auch im Browser) validieren und ordnungsgemäß bereinigen, das Formular mit Fehlermeldungen erneut veröffentlichen, um Benutzer auf ungültige Felder hinzuweisen, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich in gewisser Weise auf den Benutzer reagieren, um den Erfolg anzuzeigen. _Django Forms_ nehmen einen Großteil der Arbeit aus all diesen Schritten, indem sie ein Framework bereitstellen, das es Ihnen ermöglicht, Formulare und deren Felder programmatisch zu definieren und diese Objekte dann sowohl zum Generieren des Formular-HTML-Codes als auch zum Bearbeiten eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und damit arbeiten können, und insbesondere, wie die generischen Bearbeitungsansichten die Arbeit, die Sie zum Erstellen von Formularen zur Manipulation Ihrer Modelle leisten müssen, erheblich reduzieren können. Dabei werden wir unsere _LocalLibrary_-Anwendung erweitern, indem wir ein Formular hinzufügen, das Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und Seiten erstellen, um Bücher und Autoren zu erstellen, zu bearbeiten und zu löschen (eine grundlegende Version des oben gezeigten Formulars zum Bearbeiten von Büchern reproduzieren).

## HTML-Formulare

Zunächst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zum Eingeben des Namens eines "Teams" und dem zugehörigen Label:

![Einfaches Namensfeld-Beispiel im HTML-Formular](form_example_name_field.png)

Das Formular ist in HTML als Sammlung von Elementen innerhalb der `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `submit` enthalten.

```html
<form action="/team_name_url/" method="post">
  <label for="team_name">Namen eingeben: </label>
  <input
    id="team_name"
    type="text"
    name="name_field"
    value="Standardname für das Team." />
  <input type="submit" value="OK" />
</form>
```

Während wir hier nur ein Textfeld zum Eingeben des Teamnamens haben, darf ein Formular _beliebig viele_ weitere Eingabeelemente und deren zugehörige Labels enthalten. Der `type`-Attribut des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den initialen Wert für das Feld definiert, wenn es erstmals angezeigt wird. Das dazugehörige Team-Label wird mit dem `label`-Tag angegeben (siehe "Namen eingeben" oben), mit einem `for`-Feld, das den `id`-Wert des dazugehörigen `input`-Elements enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen des Formulars an den Server zu übermitteln (in diesem Fall nur das `team_name`-Feld).
Die Formularattribute definieren die HTTP `method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die Daten zur Verarbeitung gesendet werden, wenn das Formular übermittelt wird. Wenn diese nicht gesetzt ist (oder auf einen leeren String gesetzt ist), wird das Formular zurück zur aktuellen Seiten-URL gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie gegen Cross-Site-Request-Forgery-Angriffe resistenter gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Es wird empfohlen, wenn Sie die URL als Lesezeichen speichern oder teilen möchten.

Die Aufgabe des Servers besteht zunächst darin, den anfänglichen Formularzustand zu rendern – entweder mit leeren Feldern oder ausgefüllt mit Anfangswerten. Nachdem der Benutzer die Schaltfläche zum Absenden gedrückt hat, empfängt der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit den vom Benutzer eingegebenen Daten in den "gültigen" Feldern und Nachrichten, um das Problem der ungültigen Felder zu beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion durchführen (wie: Daten speichern, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es eine Menge Aufwand erfordern, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten mit Fehlerberichten bei Bedarf erneut anzuzeigen und die gewünschte Operation auf gültigen Daten durchzuführen. Django macht dies viel einfacher, indem es einige der schwereren Aufgaben und sich wiederholenden Codes übernimmt!

## Django-Formularbearbeitungsprozess

Die Formularbearbeitung von Django verwendet alle Techniken, die wir in den vorherigen Tutorials gelernt haben (zum Anzeigen von Informationen über unsere Modelle): Die Ansicht erhält eine Anfrage, führt erforderliche Aktionen durch, einschließlich das Lesen von Daten aus den Modellen, und generiert und gibt dann eine HTML-Seite zurück (aus einer Vorlage, in die wir einen _Kontext_ einfügen, der die anzuzeigenden Daten enthält). Was die Sache komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite neu anzuzeigen, wenn es Fehler gibt.

Ein Prozessflussdiagramm, das zeigt, wie Django Formularanfragen handhabt, wird unten gezeigt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in Grün dargestellt).

![Aktualisierter Formularbearbeitungsprozess-Dokumentation](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben der Formularbearbeitung von Django folgende:

1. Zeigen Sie das Standardformular an, wenn es vom Benutzer zum ersten Mal angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorab ausgefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standard-Ausgangswerte haben).
   - Das Formular wird zu diesem Zeitpunkt als _ungebunden_ bezeichnet, da es nicht mit benutzereingegebenen Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfangene Daten von einer Übermittlungsanforderung und Binden an das Formular.

   - Daten an das Formular zu binden bedeutet, dass die vom Benutzer eingegebenen Daten und eventuelle Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Säubern und validieren der Daten.

   - Das Säubern der Daten führt eine Bereinigung der Eingabefelder durch, wie das Entfernen ungültiger Zeichen, die möglicherweise verwendet werden, um bösartigen Inhalt an den Server zu senden, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung überprüft, ob die Werte für das Feld angemessen sind (zum Beispiel, ob sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, zeigen Sie das Formular erneut an, diesmal mit vom Benutzer eingetragenen Werten und Fehlermeldungen für die Problemfelder.
5. Wenn alle Daten gültig sind, führen Sie die erforderlichen Aktionen durch (wie das Speichern der Daten, Senden einer E-Mail, das Ergebnis einer Suche zurückgeben, eine Datei hochladen usw.).
6. Nachdem alle Aktionen abgeschlossen sind, leiten Sie den Benutzer zu einer anderen Seite um.

Django bietet eine Vielzahl von Werkzeugen und Ansätzen, um Ihnen bei den oben genannten Aufgaben zu helfen. Das grundlegendste ist die `Form`-Klasse, die sowohl die Erstellung von HTML-Formularen als auch die Datenbereinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare mithilfe des praktischen Beispiels einer Seite funktionieren, die es Bibliothekaren ermöglicht, Bücher zu erneuern.

> [!NOTE]
> Das Verständnis, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir die höheren Klassen des Formularframeworks von Django besprechen.

## Bucherneuerungsformular mit Formular und Funktionsansicht

Als Nächstes werden wir eine Seite hinzufügen, die Bibliothekaren die Erneuerung entliehener Bücher ermöglicht. Dazu erstellen wir ein Formular, mit dem Benutzer ein Datumswert eingeben können. Wir fügen dem Feld einen Anfangswert 3 Wochen vom aktuellen Datum hinzu (die normale Ausleihdauer) und fügen einige Validierungen hinzu, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder ein Datum zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, schreiben wir es in das aktuelle Datensatzfeld `BookInstance.due_back`.

Das Beispiel verwendet eine funktionsbasierte Ansicht und eine `Form`-Klasse. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem fortlaufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück des Formularbearbeitungssystems von Django. Sie spezifiziert die Felder im Formular, deren Layout, Anzeige-Widgets, Labels, Anfangswerte, gültige Werte und (nach Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse bietet auch Methoden zur Darstellung in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) oder zum Abrufen des Wertes eines Elements (ermöglicht feine manuelle Darstellung).

#### Deklaration eines Formulars

Die Deklarationssyntax für ein `Form` ist sehr ähnlich zu der für ein `Model` und teilt sich die gleichen Feldtypen (und einige ähnliche Parameter). Das macht Sinn, da in beiden Fällen sichergestellt werden muss, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Beschreibung für Anzeige/Dokumentation hat.

Formulardaten werden in der Datei forms.py einer Anwendung gespeichert, innerhalb des Anwendungsverzeichnisses. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Felder des Formulars. Eine sehr grundlegende Formular-Klasse für unser Bibliotheksbucherneuerungsformular wird unten gezeigt – fügen Sie dies zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zum Eingeben des Erneuerungsdatums, das in HTML mit einem leeren Wert, dem Standardlabel "_Renewal date:_", und einigen hilfreichen Hinweisen angezeigt wird: "_Enter a date between now and 4 weeks (default 3 weeks)._". Da keines der anderen optionalen Argumente spezifiziert wird, akzeptiert das Feld Daten im [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats): YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24) und wird mit dem Standard-[Widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie aufgrund ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen im Wesentlichen erkennen werden:

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

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer oder mit einem `None`-Wert belassen werden. Felder sind standardmäßig erforderlich, sodass Sie `required=False` festlegen würden, um inaktiver Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht angegeben wird, erstellt Django eins aus dem Feldnamen, indem es den ersten Buchstaben groß schreibt und Unterstriche durch Leerzeichen ersetzt (z.B. _Renewal date_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird ein Doppelpunkt nach dem Label angezeigt (z.B. Renewal date&ZeroWidthSpace;**:**). Dieses Argument ermöglicht es Ihnen, ein anderes Suffix mit anderen Zeichen anzugeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der ursprüngliche Wert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet werden soll.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit Ihren eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die auf dem Feld beim Validieren aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulardateneingabe (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standard ist `False`.

#### Validierung

Django bietet zahlreiche Orte, an denen Sie Ihre Daten validieren können. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<fieldname>()` für das Feld, das Sie überprüfen möchten, zu überschreiben. Zum Beispiel können wir überprüfen, ob die eingegebenen `renewal_date` Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten beschrieben implementieren.

Aktualisieren Sie Ihre forms.py Datei, damit sie so aussieht:

```python
import datetime

from django import forms

from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")

    def clean_renewal_date(self):
        data = self.cleaned_data['renewal_date']

        # Prüfen, ob ein Datum nicht in der Vergangenheit liegt.
        if data < datetime.date.today():
            raise ValidationError(_('Invalid date - renewal in past'))

        # Prüfen, ob ein Datum im zulässigen Bereich liegt (+4 Wochen ab heute).
        if data > datetime.date.today() + datetime.timedelta(weeks=4):
            raise ValidationError(_('Invalid date - renewal more than 4 weeks ahead'))

        # Denken Sie daran, immer die bereinigten Daten zurückzugeben.
        return data
```

Es gibt zwei wichtige Punkte zu beachten. Erstens, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und dass wir diese Daten zurückgeben, unabhängig davon, ob wir sie am Ende der Funktion ändern oder nicht.
Dieser Schritt ermöglicht es uns, die Daten "bereinigt" und von potenziell unsicherem Input mit den Standardvalidierern bereinigt zu erhalten und in den richtigen Standardtyp für die Daten zu konvertieren (in diesem Fall ein Python `datetime.datetime` Objekt).

Der zweite Punkt ist, dass wir eine `ValidationError` auslösen, wenn ein Wert außerhalb unseres Bereichs liegt und den Fehlertext angeben, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird.
Das obige Beispiel umschließt auch diesen Text in eine von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele für die Formularvalidierung in [Form and field validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Zum Beispiel in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängig sind, können Sie die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut eine `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel brauchen!

### URL-Konfiguration

Bevor wir unsere Ansicht erstellen, fügen wir eine URL-Konfiguration für die _renew-books_ Seite hinzu. Kopieren Sie die folgende Konfiguration ans Ende der Datei **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration wird URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion namens `renew_book_librarian()` in **views.py** weiterleiten und die `BookInstance` id als Parameter namens `pk` senden. Das Muster passt nur, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten "`pk`" wie gewünscht benennen, da wir die volle Kontrolle über die View-Funktion haben (wir verwenden keine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). Aber `pk`, kurz für "primär Schlüssel", ist eine vernünftige Konvention, die man verwenden kann!

### Ansicht

Wie im Abschnitt [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) oben besprochen, muss die Ansicht das Standardformular rendern, wenn es zum ersten Mal aufgerufen wird und es dann entweder mit Fehlermeldungen neu rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und zu einer neuen Seite umleiten, wenn die Daten gültig sind. Um diese verschiedenen Aktionen auszuführen, muss die Ansicht in der Lage sein zu wissen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu senden, ist das häufigste Muster, dass die Ansicht gegen den `POST`-Anfragetyp testet (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren und `GET` (mit einer `else`-Bedingung) zu verwenden, um den anfänglichen Formularerstellungssauftrag zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage senden möchten, ist ein typischer Ansatz zur Identifizierung der ersten oder nachfolgenden Ansichtsinvokation, die Formulardaten zu lesen (z.B. Um einen versteckten Wert im Formular zu lesen).

Der Bucherneuerungsprozess wird in unsere Datenbank geschrieben, daher verwenden wir aus Konvention den `POST`-Anfrageansatz.
Der folgende Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktionsansicht.

```python
import datetime

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

from catalog.forms import RenewBookForm

def renew_book_librarian(request, pk):
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # Wenn dies eine POST-Anfrage ist, dann verarbeiten Sie die Formulardaten
    if request.method == 'POST':

        # Erstellen Sie eine Formularinstanz und füllen Sie sie mit Daten aus der Anfrage (Binding):
        form = RenewBookForm(request.POST)

        # Überprüfen Sie, ob das Formular gültig ist:
        if form.is_valid():
            # verarbeiten Sie die Daten in form.cleaned_data nach Bedarf (hier schreiben wir sie einfach in das Modell due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # Umleiten zu einer neuen URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # Wenn dies eine GET (oder eine andere Methode) ist, das Standardformular erstellen.
    else:
        proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
        form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

    context = {
        'form': form,
        'book_instance': book_instance,
    }

    return render(request, 'catalog/book_renew_librarian.html', context)
```

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Körper der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein bestimmtes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme (nicht gefunden) aus, wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Umleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einer Reihe von Argumenten. Es ist das Python-Äquivalent des `url`-Tags, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Datum und Uhrzeit.

In der Ansicht verwenden wir zunächst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (falls diese nicht existiert, beendet die Ansicht sofort und die Seite zeigt einen Fehler „nicht gefunden“ an).
Wenn dies _nicht_ eine `POST`-Anfrage ist (behandelt durch die `else`-Klausel), erstellen wir das Standardformular, indem wir einen `initial` Wert für das `renewal_date`-Feld festlegen, 3 Wochen ab dem aktuellen Datum.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

# Wenn dies eine GET (oder eine andere Methode) ist, das Standardformular erstellen.
else:
    proposed_renewal_date = datetime.date.today() + datetime.timedelta(weeks=3)
    form = RenewBookForm(initial={'renewal_date': proposed_renewal_date})

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Nach dem Erstellen des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, indem wir die Vorlage und einen Kontext angeben, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden werden, um Informationen über das Buch bereitzustellen, das wir erneuern.

Wenn es sich jedoch um eine `POST`-Anfrage handelt, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird als "Binding" bezeichnet und ermöglicht es uns, das Formular zu validieren.

Wir überprüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode für alle Felder ausführt – einschließlich des generischen Codes, um zu prüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, und unserer spezifischen Formular `clean_renewal_date()` Funktion, um zu überprüfen, dass das Datum im richtigen Bereich liegt.

```python
book_instance = get_object_or_404(BookInstance, pk=pk)

# Wenn dies eine POST-Anfrage ist, dann verarbeiten Sie die Formulardaten
if request.method == 'POST':

    # Erstellen Sie eine Formularinstanz und füllen Sie sie mit Daten aus der Anfrage (Binding):
    form = RenewBookForm(request.POST)

    # Überprüfen Sie, ob das Formular gültig ist:
    if form.is_valid():
        # verarbeiten Sie die Daten in form.cleaned_data nach Bedarf (hier schreiben wir sie einfach in das Modell due_back field)
        book_instance.due_back = form.cleaned_data['renewal_date']
        book_instance.save()

        # Umleiten zu einer neuen URL:
        return HttpResponseRedirect(reverse('all-borrowed'))

context = {
    'form': form,
    'book_instance': book_instance,
}

return render(request, 'catalog/book_renew_librarian.html', context)
```

Wenn das Formular ungültig ist, rufen wir `render()` erneut auf, aber diesmal enthält der im Kontext übergebene `form`-Wert Fehlermeldungen.

Wenn das Formular gültig ist, können wir anfangen, die Daten zu verwenden, indem wir über das `form.cleaned_data` Attribut darauf zugreifen (zum Beispiel `data = form.cleaned_data['renewal_date']`). Hier speichern wir die Daten einfach im `due_back` Wert des zugehörigen `BookInstance` Objekts.

> [!WARNING]
> Während Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (zum Beispiel `request.POST['renewal_date']` oder `request.GET['renewal_date']` bei Verwendung einer GET-Anfrage), wird dies NICHT empfohlen. Die bereinigten Daten sind saniert, validiert und in Python-freundliche Typen konvertiert.

Der letzte Schritt im Formularbearbeitungsteil der Ansicht besteht darin, zu einer anderen Seite umzuleiten, normalerweise einer "Erfolgs"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur Ansicht mit dem Namen `'all-borrowed'` zu navigieren (dies wurde als die „Herausforderung“ in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, ziehen Sie in Betracht, zur Startseite bei URL '``/``' umzuleiten).

Das ist alles, was für die Formularbearbeitung selbst benötigt wird, aber wir müssen den Zugriff auf die Ansicht auf angemeldete Bibliothekare beschränken, die die Berechtigung zur Erneuerung von Büchern haben. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer angemeldet ist, und der `@permission_required` Funktionsdecorator mit unserer bestehenden `can_mark_returned` Berechtigung, um den Zugriff zu erlauben (Decorators werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` ("`can_renew`") hätten erstellen sollen, aber wir werden die bestehende verwenden, um das Beispiel einfach zu halten.

Die abschließende Ansicht sieht daher wie unten gezeigt aus. Bitte kopieren Sie dies in das Ende von **django-locallibrary-tutorial/catalog/views.py**.

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
    """View-Funktion zum Erneuern einer bestimmten BookInstance durch einen Bibliothekar."""
    book_instance = get_object_or_404(BookInstance, pk=pk)

    # Wenn dies eine POST-Anfrage ist, dann verarbeiten Sie die Formulardaten
    if request.method == 'POST':

        # Erstellen Sie eine Formularinstanz und füllen Sie sie mit Daten aus der Anfrage (Binding):
        form = RenewBookForm(request.POST)

        # Überprüfen Sie, ob das Formular gültig ist:
        if form.is_valid():
            # verarbeiten Sie die Daten in form.cleaned_data nach Bedarf (hier schreiben wir sie einfach in das Modell due_back field)
            book_instance.due_back = form.cleaned_data['renewal_date']
            book_instance.save()

            # Umleiten zu einer neuen URL:
            return HttpResponseRedirect(reverse('all-borrowed'))

    # Wenn dies eine GET (oder eine andere Methode) ist, das Standardformular erstellen.
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

Erstellen Sie die in der Ansicht referenzierte Vorlage (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den unten stehenden Code hinein:

```django
{% extends "base_generic.html" %}

{% block content %}
  <h1>Erneuern: \{{ book_instance.book.title }}</h1>
  <p>Ausleiher: \{{ book_instance.borrower }}</p>
  <p {% if book_instance.is_overdue %} class="text-danger"{% endif %} >Fälligkeitsdatum: \{{ book_instance.due_back }}</p>

  <form action="" method="post">
    {% csrf_token %}
    <table>
    \{{ form.as_table }}
    </table>
    <input type="submit" value="Absenden">
  </form>
{% endblock %}
```

Das meiste davon wird aus früheren Tutorials völlig vertraut sein.

Wir erweitern die Basisvorlage und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und ihre Variablen) verweisen, da sie im Kontextobjekt in der `render()`-Funktion übergeben wurde, und wir verwenden diese, um den Buchtitel, Ausleiher und das ursprüngliche Fälligkeitsdatum aufzulisten.

Der Formularkode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags, geben an, wohin das Formular übermittelt werden soll (`action`) und die `method` zum Übermitteln der Daten (in diesem Fall ein "HTTP `POST`") – wenn Sie sich den Überblick über [HTML-Formulare](#html-formulare) am Anfang der Seite ansehen, wird ein leeres `action`, wie gezeigt, bedeuten, dass die Formulardaten zurück zur aktuellen URL der Seite gesendet werden (was wir wollen). Innerhalb des Tags definieren wir die `submit` Eingabe, die ein Benutzer drücken kann, um die Daten zu übermitteln. Das `{% csrf_token %}`, das gerade innerhalb der Formular-Tags hinzugefügt wurde, ist Teil des Cross-Site-Request-Forgery-Schutzes von Django.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` jeder von Ihnen erstellten Django-Vorlage hinzu, die `POST` zum Übermitteln von Daten verwendet. Dies wird die Wahrscheinlichkeit verringern, dass Formulare von böswilligen Benutzern gekapert werden.

Alles, was übrig bleibt, ist die `\{{ form }}`-Vorlagenvariable, die wir im Kontextwörterbuch an die Vorlage übergeben haben.
Es ist vielleicht nicht überraschend, dass, wenn es wie gezeigt verwendet wird, die Standarddarstellung aller Formularfelder einschließlich ihrer Labels, Widgets und Hilfetexte bietet – die Darstellung ist wie unten gezeigt:

```html
<tr>
  <th><label for="id_renewal_date">Erneuerungsdatum:</label></th>
  <td>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3 Wochen).
    </span>
  </td>
</tr>
```

> [!NOTE]
> Es ist vielleicht nicht offensichtlich, da wir nur ein Feld haben, aber standardmäßig ist jedes Feld in einer eigenen Tabellenzeile definiert. Diese gleiche Darstellung wird bereitgestellt, wenn Sie die Vorlagenvariable `\{{ form.as_table }}` referenzieren.

Wenn Sie ein ungültiges Datum eingeben würden, würden Sie zusätzlich eine Liste der Fehler auf der Seite angezeigt bekommen (siehe `errorlist` unten).

```html
<tr>
  <th><label for="id_renewal_date">Erneuerungsdatum:</label></th>
  <td>
    <ul class="errorlist">
      <li>Ungültiges Datum - Erneuerung in der Vergangenheit</li>
    </ul>
    <input
      id="id_renewal_date"
      name="renewal_date"
      type="text"
      value="2023-11-08"
      required />
    <br />
    <span class="helptext">
      Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3 Wochen).
    </span>
  </td>
</tr>
```

#### Andere Möglichkeiten zur Verwendung der Formularvorlagenvariable

Bei der Verwendung von `\{{ form.as_table }}` wie oben gezeigt, wird jedes Feld als Tabellenzeile gerendert. Sie können auch jedes Feld als Listenelement (mithilfe von `\{{ form.as_ul }}`) oder als Absatz (mithilfe von `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die vollständige Kontrolle über die Darstellung jedes Teils des Formulars zu haben, indem seine Eigenschaften mit Punktnotation indexiert werden. So können wir zum Beispiel eine Anzahl separater Elemente für unser `renewal_date` Feld zugreifen:

- `\{{ form.renewal_date }}:` Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Fehlerliste.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Für weitere Beispiele, wie man Formulare in Vorlagen manuell rendert und dynamisch über Vorlagenfelder loopt, siehe [Arbeiten mit Formularen > Rendern von Feldern manuell](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Testen der Seite

Wenn Sie die "Herausforderung" in [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication#challenge_yourself) angenommen haben, werden Sie eine Ansicht haben, die alle ausgeliehenen Bücher in der Bibliothek zeigt, die nur für Bibliotheksmitarbeiter sichtbar ist.
Die Ansicht könnte so ähnlich aussehen:

```django
{% extends "base_generic.html" %}

{% block content %}
    <h1>Alle ausgeliehenen Bücher</h1>

    {% if bookinstance_list %}
    <ul>

      {% for bookinst in bookinstance_list %}
      <li class="{% if bookinst.is_overdue %}text-danger{% endif %}">
        <a href="{% url 'book-detail' bookinst.book.pk %}">\{{ bookinst.book.title }}</a> (\{{ bookinst.due_back }}) {% if user.is_staff %}- \{{ bookinst.borrower }}{% endif %}
      </li>
      {% endfor %}
    </ul>

    {% else %}
      <p>Es gibt keine ausgeliehenen Bücher.</p>
    {% endif %}
{% endblock %}
```

Wir können neben jedem Element einen Link zur Bucherneuerungsseite hinzufügen, indem wir den folgenden Vorlagen-Code zum obigen Listen-Text hinzufügen.
Beachten Sie, dass dieser Vorlagen-Code nur innerhalb der `{% for %}` Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert wird.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Erneuern</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login über die Berechtigung "`catalog.can_mark_returned`" verfügen muss, um den neu hinzugefügten "Erneuern" Link zu sehen und auf die verlinkte Seite zuzugreifen (verwenden Sie vielleicht Ihr Superuser-Konto).

Sie können alternativ manuell eine Test-URL wie diese konstruieren — `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann durch Navigieren zu einer Buchdetailseite in Ihrer Bibliothek und Kopieren des `id`-Felds erhalten werden).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Absenden-Schaltfläche anzeigt, falls der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen eingegebenen Wert würde so aussehen:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks würde so aussehen:

![Zeigt Liste aller erneuerten Bücher zusammen mit deren Details an. Vergangene Fälligkeit ist in Rot.](forms_example_renew_allbooks.png)

## ModelForms

Das Erstellen einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht es Ihnen, jede Art von Formularseite zu erstellen, die Sie möchten, und sie mit einem beliebigen Modell oder Modellen zu verknüpfen.

Wenn Sie jedoch nur ein Formular benötigen, das die Felder eines _einzelnen_ Modells abbildet, dann hat Ihr Modell bereits die meisten Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetext usw. Anstatt die Modelldefinitionen in Ihrem Formular neu zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Dieses `ModelForm` kann dann in Ihren Ansichtsfunktionen genau so verwendet werden wie ein gewöhnliches `Form`.

Ein einfaches `ModelForm`, das dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, wird unten gezeigt. Alles, was Sie tun müssen, um das Formular zu erstellen, ist `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der Modell `fields` hinzuzufügen, die im Formular enthalten sind.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einfügen oder Sie können `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell übernommen werden sollen.
>
> Keine der beiden Methoden wird empfohlen, da neu hinzugefügte Felder im Modell dann automatisch im Formular enthalten sind (ohne dass der Entwickler möglicherweise sicherheitsrelevante Implikationen berücksichtigt).

> [!NOTE]
> Dies mag nicht viel einfacher aussehen als die Verwendung eines `Form` (und es ist es in diesem Fall nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den erforderlichen Code erheblich reduzieren!

Der Rest der Informationen stammt aus den Modelfeldern Definitionen (z.B. Labels, Widgets, Hilfetext, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch mit dem zu ändernden Feld und seinem neuen Wert angeben. In diesem Formular möchten wir beispielsweise ein Label für unser Feld von "_Renewal date_" (anstelle des Standardwertes basierend auf dem Feldnamen: _Due Back_) und wir möchten, dass unser Hilfetext für diesen Anwendungsfall spezifisch ist.
Das folgende `Meta` zeigt Ihnen, wie Sie diese Felder überschreiben, und Sie können `widgets` und `error_messages` in ähnlicher Weise setzen, wenn die Standardwerte nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('Neues Erneuerungsdatum')}
    help_texts = {'due_back': _('Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3).')}
```

Um Validierungen hinzuzufügen, können Sie denselben Ansatz wie bei einem normalen `Form` verwenden – Sie definieren eine Funktion namens `clean_<field_name>()` und raisen `ValidationError` Ausnahmen für ungültige Werte.
Der einzige Unterschied zu unserem ursprünglichen Formular ist, dass das Modelfeld `due_back` statt "`renewal_date`" genannt wird.
Diese Änderung ist notwendig, da das entsprechende Feld in `BookInstance` `due_back` genannt wird.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    def clean_due_back(self):
       data = self.cleaned_data['due_back']

       # Prüfen, ob ein Datum nicht in der Vergangenheit liegt.
       if data < datetime.date.today():
           raise ValidationError(_('Ungültiges Datum - Erneuerung in der Vergangenheit'))

       # Prüfen, ob ein Datum im zulässigen Bereich liegt (+4 Wochen ab heute).
       if data > datetime.date.today() + datetime.timedelta(weeks=4):
           raise ValidationError(_('Ungültiges Datum - Erneuerung mehr als 4 Wochen im Voraus'))

       # Denken Sie daran, immer die bereinigten Daten zurückzugeben.
       return data

    class Meta:
        model = BookInstance
        fields = ['due_back']
        labels = {'due_back': _('Erneuerungsdatum')}
        help_texts = {'due_back': _('Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3).')}
```

Die Klasse `RenewBookModelForm` oben ist jetzt in Funktionalität gleichwertig zu unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und dort verwenden, wo Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablen-Namen von `renewal_date` auf `due_back` wie in der zweiten Formulardeklaration ändern: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Bearbeitungsansichten

Der im obigen Beispiel verwendete Formularbearbeitungsalgorithmus für funktionsansicht dient als extrem häufiges Muster in Formularbearbeitungsansichten. Django abstrahiert vieles von diesem „Boilerplate“-Code für Sie, indem es [generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Ansichten basierend auf Modellen erstellt. Diese Handhaben nicht nur das "View"-Verhalten, sondern erstellen auch automatisch die Formular-Klasse (ein `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Neben den hier beschriebenen Bearbeitungsansichten gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview) Klasse, die irgendwo zwischen unserer Funktionsansicht und den anderen generischen Ansichten in Bezug auf "Flexibilität" vs. "Programmaufwand" liegt. Bei Verwendung von `FormView` müssen Sie immer noch Ihr `Form` erstellen, aber nicht alle standardmäßigen Formularbearbeitungsmuster implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, wenn feststeht, dass das Formular gültig übermittelt wurde.

In diesem Abschnitt verwenden wir generische Bearbeitungsansichten, um Seiten zu erstellen, die Funktionalitäten zum Erstellen, Bearbeiten und Löschen von `Author`-Datensätzen aus unserer Bibliothek hinzufügen – wir erzeugen effektiv eine grundlegende Neuumsetzung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie Admin-Funktionalität auf eine flexiblere Weise als von der Admin-Seite bereitgestellt benötigen).

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
    # Nicht empfohlen (potenzielle Sicherheitsproblematik bei Hinzufügen von mehr Feldern)
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

Wie Sie sehen können, müssen Sie, um Ansichten zu erstellen, zu aktualisieren oder zu löschen, von `CreateView`, `UpdateView`, und `DeleteView` (jeweils) ableiten und dann das zugehörige Modell definieren.
Wir beschränken auch das Aufrufen dieser Ansichten nur auf angemeldete Benutzer mit den entsprechenden Berechtigungen `add_author`, `change_author`, und `delete_author`.

Für den "create" und "update" Fall müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (mit der gleichen Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mit einem Wörterbuch von _field_name_/_value_ Paaren angeben (hier setzen wir willkürlich das Todesdatum zu Demonstrationszwecken – Sie möchten das vielleicht entfernen). Standardmäßig leiten diese Ansichten bei Erfolg zu einer Seite weiter, die den neu erstellten/bearbeiteten Modelldatensatz anzeigt, was in unserem Fall die in einem vorherigen Tutorial erstellte Autor-Detailansicht sein wird. Sie können einen alternativen Redirect-Standort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, sodass diese nicht angegeben werden müssen.
Wir setzen auch eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django nach erfolgreichem Löschen des `Author` navigieren kann. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy), um nach dem Löschen eines Autors zur Autorübersicht zu navigieren – `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, hier verwendet, weil wir eine URL zu einem Attribut einer klassenbasierten Ansicht bereitstellen.

Wenn die Löschung von Autoren immer erfolgreich sein sollte, wäre das alles.
Leider führt das Löschen eines `Author` zu einer Ausnahme, wenn der Autor ein zugeordnetes Buch hat, da unser [`Book` Modell](/de/docs/Learn/Server-side/Django/Models#book_model) für das Feld `ForeignKey` `on_delete=models.RESTRICT` für den Autor angibt.
Um diesen Fall zu behandeln, überschreibt die Ansicht die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), sodass, wenn das Löschen des `Author` gelingt, zu `success_url` umgeleitet wird, aber wenn nicht, einfach zurück zum gleichen Formular umgeleitet wird.
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

Hier gibt es nichts besonders Neues! Sie können sehen, dass die Ansichten Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten die URL-Muster in jedem Fall erkennen. Wir müssen `pk` als den Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, der von den Ansichtsklassen erwartet wird.

### Vorlagen

Die "create" und "update" Ansichten verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt wird: `model_name_form.html` (Sie können das Suffix auf etwas anderes als **\_form** ändern, indem Sie das Feld `template_name_suffix` in Ihrer Ansicht angeben, zum Beispiel, `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den unten stehenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}
<form action="" method="post">
  {% csrf_token %}
  <table>
    \{{ form.as_table }}
  </table>
  <input type="submit" value="Absenden" />
</form>
{% endblock %}
```

Dies ist ähnlich wie unsere vorherigen Formulare und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir erneut `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "delete" Ansicht erwartet, eine Vorlage mit dem Format `[model_name]_confirm_delete.html` zu finden (wieder können Sie das Suffix mit `template_name_suffix` in Ihrer Ansicht ändern).
Erstellen Sie die Vorlagendatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den unten stehenden Text hinein.

```django
{% extends "base_generic.html" %}

{% block content %}

<h1>Löschen Author: \{{ author }}</h1>

{% if author.book_set.all %}

<p>Sie können diesen Autor nicht löschen, bis all ihre Bücher gelöscht sind:</p>
<ul>
  {% for book in author.book_set.all %}
    <li><a href="{% url 'book-detail' book.pk %}">\{{book}}</a> (\{{book.bookinstance_set.all.count}})</li>
  {% endfor %}
</ul>

{% else %}
<p>Sind Sie sicher, dass Sie diesen Autor löschen möchten?</p>

<form action="" method="POST">
  {% csrf_token %}
  <input type="submit" action="" value="Ja, löschen.">
</form>
{% endif %}

{% endblock %}
```

Die Vorlage sollte Ihnen vertraut vorkommen.
Sie prüft zuerst, ob der Autor in einem Buch verwendet wird und zeigt, falls ja, die Liste der Bücher an, die gelöscht werden müssen, bevor der Author-Datensatz gelöscht werden kann.
Wenn nicht, wird ein Formular angezeigt, in dem der Benutzer gefragt wird, ob er den Author-Datensatz wirklich löschen möchte.

Der letzte Schritt ist, die Seiten in der Seitenleiste zu verknüpfen.
Zuerst fügen wir einen Link zum Erstellen des Autors in die _Basisvorlage_ ein, sodass er in allen Seiten für angemeldete Benutzer, die als "Mitarbeiter" betrachtet werden und die Berechtigung zum Erstellen von Autoren haben (`catalog.add_author`), sichtbar ist.
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die Benutzern mit der Berechtigung das Erstellen eines Autors erlaubt (im selben Block wie den Link, der "All Borrowed" Bücher anzeigt).
Denken Sie daran, auf die URL mit ihrem Namen `'author-create'` zu verweisen, wie unten gezeigt.

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

Wir fügen die Links zum Aktualisieren und Löschen von Autoren zur Autordetailseite hinzu.
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

Dieser Block überschreibt den `sidebar`-Block in der Basisvorlage und ruft dann den ursprünglichen Inhalt mit `\{{ block.super }}` auf.
Dann werden Links zum Aktualisieren oder Löschen des Autors hinzugefügt, jedoch nur, wenn der Benutzer die entsprechenden Berechtigungen hat und der Autordaten der Datensatz nicht mit einem bestimmten Buch verknüpft ist.

Die Seiten sind jetzt bereit zum Testen!

### Testen der Seite

Melden Sie sich zunächst mit einem Konto an, das über Autoren-Erstellungs-, Änderungs- und Löschberechtigungen verfügt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Create author" im Seitenmenü (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte den untenstehenden Screenshot zeigen.

![Formular-Beispiel: Create Author](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Absenden**, um den Autoren-Datensatz zu speichern.
Sie sollten nun zu einer Detailansicht Ihres neuen Autors gelangen, mit einer URL von etwas wie `http://127.0.0.1:8000/catalog/author/10`.

![Formular-Beispiel: Autorendetailanzeige, die Update- und Deletelinks zeigt](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den "Update author"-Link auswählen (mit der URL so etwas wie `http://127.0.0.1:8000/catalog/author/10/update/`) – wir zeigen keinen Screenshot, weil es genauso aussieht wie die "create"-Seite!

Schließlich können wir die Seite löschen, indem wir "Delete author" aus dem Seitenmenü auf der Detailseite auswählen.
Django sollte die unten gezeigte Löschseite anzeigen, wenn der Autor-Datensatz nicht in einem bestimmten Buch verwendet wird.
Drücken Sie "**Ja, löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich selbst heraus

Erstellen Sie einige Formulare, um `Book`-Datensätze zu erstellen, zu bearbeiten und zu löschen. Sie können genau dieselbe Struktur wie bei `Authors` verwenden (denken Sie daran, dass Sie ein `Book` nicht löschen können, bis alle zugehörigen `BookInstance`-Datensätze gelöscht sind) und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html** Vorlage nur eine umbenannte Kopie der **author_form.html** Vorlage ist, wird die neue Seite "Buch erstellen" wie unten gezeigt aussehen:

![Screenshot, der verschiedene Felder im Formular zeigt, wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Bearbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen zum Deklarieren, Rendern und Validieren von Formularen bereitstellt. Darüber hinaus bietet Django generische Formularbearbeitungsansichten, die _fast die gesamte_ Arbeit übernehmen können, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen können, die mit einer einzelnen Modellinstanz verbunden sind.

Es gibt noch viel mehr, das man mit Formularen machen kann (siehe unsere [Siehe auch](#siehe_auch) Liste unten), aber Sie sollten jetzt verstehen, wie man grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Websites hinzufügt.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Schreiben eines einfachen Formulars](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Formular-API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit klassenbasierten Ansichten](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Bearbeitungsansichten](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Django/authentication_and_sessions", "Learn/Server-side/Django/Testing", "Learn/Server-side/Django")}}
