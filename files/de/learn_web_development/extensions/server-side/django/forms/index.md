---
title: "Django-Tutorial Teil 9: Arbeiten mit Formularen"
short-title: "9: Formulare"
slug: Learn_web_development/Extensions/Server-side/Django/Forms
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem Tutorial zeigen wir Ihnen, wie Sie mit HTML-Formularen in Django arbeiten können und insbesondere den einfachsten Weg, Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Im Rahmen dieser Demonstration werden wir die [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) Website erweitern, sodass Bibliothekare Bücher erneuern sowie Autoren erstellen, aktualisieren und löschen können, indem wir unsere eigenen Formulare verwenden (anstatt die Admin-Anwendung zu nutzen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie alle vorherigen Tutorial-Themen, einschließlich
        <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication">Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man Formulare schreibt, um Informationen von Benutzern zu erhalten und die Datenbank zu aktualisieren. Zu verstehen, wie die generischen, klassenbasierten Editier-Views das Erstellen von Formularen zur Arbeit mit einem Modell erheblich vereinfachen können.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Ein [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) ist eine Gruppe von einem oder mehreren Feldern/Widgets auf einer Webseite, die verwendet werden können, um Informationen von Benutzern zur Übermittlung an einen Server zu sammeln. Formulare sind ein flexibler Mechanismus zur Erfassung von Benutzereingaben, da es geeignete Widgets für das Eingeben vieler verschiedener Datentypen gibt, einschließlich Textfelder, Kontrollkästchen, Optionsfeldern, Datumswählern und so weiter. Formulare sind auch eine relativ sichere Möglichkeit, Daten mit dem Server zu teilen, da sie uns ermöglichen, Daten in `POST`-Anfragen mit Schutz vor Cross-Site-Request-Fälschungen zu senden.

Obwohl wir bisher in diesem Tutorial keine Formulare erstellt haben, sind wir ihnen bereits auf der Django-Admin-Seite begegnet – zum Beispiel zeigt der Screenshot unten ein Formular zum Bearbeiten eines unserer [Buch](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)-Modelle, das aus einer Anzahl von Auswahllisten und Texteditoren besteht.

![Admin-Seite - Buch hinzufügen](admin_book_add.png)

Mit Formularen zu arbeiten kann kompliziert sein! Entwickler müssen HTML für das Formular schreiben, die eingetragenen Daten auf dem Server validieren und richtig bereinigen (und möglicherweise auch im Browser), das Formular mit Fehlermeldungen erneut posten, um Benutzer über ungültige Felder zu informieren, die Daten verarbeiten, wenn sie erfolgreich übermittelt wurden, und schließlich den Benutzer irgendwie darauf hinweisen, dass es erfolgreich war. _Django-Formulare_ nehmen viel Arbeit aus all diesen Schritten heraus, indem sie ein Framework bereitstellen, das es Ihnen ermöglicht, Formulare und ihre Felder programmatisch zu definieren, und diese Objekte dann sowohl zur Generierung des HTML-Codes für das Formular als auch zur Handhabung eines Großteils der Validierung und Benutzerinteraktion zu verwenden.

In diesem Tutorial zeigen wir Ihnen einige der Möglichkeiten, wie Sie Formulare erstellen und verwenden können, und insbesondere, wie die generischen Editier-Views die Arbeit, die Sie leisten müssen, um Formulare zu erstellen, um Ihre Modelle zu manipulieren, erheblich reduzieren können. Unterwegs werden wir unsere _LocalLibrary_-Anwendung erweitern, indem wir ein Formular hinzufügen, das es Bibliothekaren ermöglicht, Bibliotheksbücher zu erneuern, und wir werden Seiten zum Erstellen, Bearbeiten und Löschen von Büchern und Autoren erstellen (eine grundlegende Version des oben gezeigten Formulars zur Bearbeitung von Büchern reproduzieren).

## HTML-Formulare

Zuerst ein kurzer Überblick über [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms). Betrachten Sie ein einfaches HTML-Formular mit einem einzigen Textfeld zur Eingabe des Namens eines "Teams" und seinem zugehörigen Label:

![Einfaches Beispielsfeld für einen Namen in einem HTML-Formular](form_example_name_field.png)

Das Formular wird in HTML als eine Sammlung von Elementen innerhalb von `<form>…</form>`-Tags definiert, die mindestens ein `input`-Element vom Typ `submit` enthalten.

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

Während wir hier nur ein Textfeld für die Eingabe des Teamnamens haben, _kann_ ein Formular jede Anzahl von anderen Eingabeelementen und deren zugehörige Labels enthalten. Das Attribut `type` des Feldes definiert, welche Art von Widget angezeigt wird. Der `name` und die `id` des Feldes werden verwendet, um das Feld in JavaScript/CSS/HTML zu identifizieren, während `value` den Anfangswert für das Feld definiert, wenn es zum ersten Mal angezeigt wird. Das passende Team-Label wird mit dem `label`-Tag angegeben (siehe "Enter name" oben), mit einem `for`-Feld, das den `id`-Wert des zugehörigen `input` enthält.

Das `submit`-Eingabefeld wird standardmäßig als Schaltfläche angezeigt.
Diese kann gedrückt werden, um die Daten in allen anderen Eingabeelementen des Formulars an den Server hochzuladen (in diesem Fall nur das `team_name`-Feld).
Die Formulareigenschaften definieren die HTTP-`method`, die zum Senden der Daten verwendet wird, und das Ziel der Daten auf dem Server (`action`):

- `action`: Die Ressource/URL, an die die Daten zur Verarbeitung gesendet werden, wenn das Formular eingereicht wird. Wenn dies nicht gesetzt ist (oder auf einen leeren String gesetzt), wird das Formular an die aktuelle URL der Seite gesendet.
- `method`: Die HTTP-Methode, die zum Senden der Daten verwendet wird: _post_ oder _get_.

  - Die `POST`-Methode sollte immer verwendet werden, wenn die Daten zu einer Änderung der Datenbank des Servers führen, da sie widerstandsfähiger gegen Cross-Site-Fälschungsanforderungsangriffe gemacht werden kann.
  - Die `GET`-Methode sollte nur für Formulare verwendet werden, die keine Benutzerdaten ändern (zum Beispiel ein Suchformular). Sie wird empfohlen, wenn Sie in der Lage sein möchten, die URL zu speichern oder freizugeben.

Die Rolle des Servers besteht zunächst darin, den ursprünglichen Zustand des Formulars zu rendern – entweder mit leeren Feldern oder vorab gefüllt mit Anfangswerten. Nachdem der Benutzer die Schaltfläche zum Absenden gedrückt hat, erhält der Server die Formulardaten mit Werten aus dem Webbrowser und muss die Informationen validieren. Wenn das Formular ungültige Daten enthält, sollte der Server das Formular erneut anzeigen, diesmal mit benutzerseitiger Daten in "gültigen" Feldern und Nachrichten, um das Problem für die ungültigen Felder zu beschreiben. Sobald der Server eine Anfrage mit allen gültigen Formulardaten erhält, kann er eine geeignete Aktion ausführen (wie: Speichern der Daten, Rückgabe des Ergebnisses einer Suche, Hochladen einer Datei usw.) und dann den Benutzer benachrichtigen.

Wie Sie sich vorstellen können, kann es viel Aufwand erfordern, das HTML zu erstellen, die zurückgegebenen Daten zu validieren, die eingegebenen Daten mit Fehlerberichten bei Bedarf erneut anzuzeigen und die gewünschte Operation bei gültigen Daten durchzuführen, um alles "richtig" hinzubekommen. Django macht dies viel einfacher, indem es einen Teil der schweren Arbeit und sich wiederholenden Code eliminiert!

## Django-Formularbearbeitungsprozess

Djangos Formularbearbeitung verwendet alle Techniken, die wir bereits in den vorherigen Tutorials gelernt haben (um Informationen über unsere Modelle anzuzeigen): Die View erhält eine Anfrage, führt alle erforderlichen Aktionen aus, einschließlich des Lesens von Daten aus den Modellen, und generiert und liefert dann eine HTML-Seite (aus einer Vorlage, in die wir einen _Kontext_ einfügen, der die anzuzeigenden Daten enthält). Was die Dinge komplizierter macht, ist, dass der Server auch in der Lage sein muss, vom Benutzer bereitgestellte Daten zu verarbeiten und die Seite erneut anzuzeigen, wenn Fehler vorliegen.

Ein Prozessablaufdiagramm, wie Django Formularanfragen behandelt, ist unten dargestellt, beginnend mit einer Anfrage für eine Seite, die ein Formular enthält (in grün dargestellt).

![Aktualisierter Dokument zum Formularbearbeitungsprozess.](form_handling_-_standard.png)

Basierend auf dem obigen Diagramm sind die Hauptaufgaben, die Djangos Formularbearbeitung ausführt:

1. Anzeige des Standardformulars, wenn es vom Benutzer zum ersten Mal angefordert wird.

   - Das Formular kann leere Felder enthalten, wenn Sie einen neuen Datensatz erstellen, oder es kann mit Anfangswerten vorab gefüllt sein (zum Beispiel, wenn Sie einen Datensatz ändern oder nützliche Standardwerte haben).
   - Zu diesem Zeitpunkt wird das Formular als _ungebunden_ bezeichnet, da es nicht mit benutzereingetragenen Daten verknüpft ist (obwohl es Anfangswerte haben kann).

2. Empfang von Daten aus einer Absendungsanfrage und Zuordnung dieser an das Formular.

   - Die Zuordnung von Daten zum Formular bedeutet, dass die benutzereingetragenen Daten und sämtliche Fehler verfügbar sind, wenn wir das Formular erneut anzeigen müssen.

3. Bereinigung und Validierung der Daten.

   - Die Bereinigung der Daten führt eine Bereinigung der Eingabefelder durch, wie das Entfernen von ungültigen Zeichen, die möglicherweise verwendet werden, um bösartige Inhalte an den Server zu senden, und konvertiert sie in konsistente Python-Typen.
   - Die Validierung überprüft, ob die Werte für das Feld geeignet sind (z.B., dass sie im richtigen Datumsbereich liegen, nicht zu kurz oder zu lang sind usw.).

4. Wenn Daten ungültig sind, erneut das Formular anzeigen, diesmal mit benutzereingetragenen Werten und Fehlermeldungen für die problematischen Felder.
5. Wenn alle Daten gültig sind, erforderliche Aktionen ausführen (wie das Speichern der Daten, das Senden einer E-Mail, die Rückgabe des Suchergebnisses, das Hochladen einer Datei usw.).
6. Sobald alle Aktionen abgeschlossen sind, den Benutzer auf eine andere Seite weiterleiten.

Django bietet eine Reihe von Tools und Ansätzen, um Sie bei den oben beschriebenen Aufgaben zu unterstützen. Das fundamentalste ist die `Form`-Klasse, die sowohl die Generierung von Formular-HTML als auch die Datenbereinigung/Validierung vereinfacht. Im nächsten Abschnitt beschreiben wir, wie Formulare funktionieren, anhand des praktischen Beispiels einer Seite, die Bibliothekaren die Erneuerung von Büchern ermöglicht.

> [!NOTE]
> Das Verständnis, wie `Form` verwendet wird, wird Ihnen helfen, wenn wir Djangos mehr „höheren“ Formulare-Framework-Klassen besprechen.

## Buch-Erneuerungsformular mit einer Form und Funktions-View

Als Nächstes werden wir eine Seite hinzufügen, die es Bibliothekaren ermöglicht, ausgeliehene Bücher zu erneuern. Dazu erstellen wir ein Formular, das Benutzern ermöglicht, ein Datumswert einzugeben. Wir werden das Feld mit einem Anfangswert von 3 Wochen ab dem aktuellen Datum (die normale Ausleihfrist) setzen und einige Validierungen hinzufügen, um sicherzustellen, dass der Bibliothekar kein Datum in der Vergangenheit oder zu weit in der Zukunft eingeben kann. Wenn ein gültiges Datum eingegeben wurde, werden wir es im `BookInstance.due_back`-Feld des aktuellen Datensatzes speichern.

Das Beispiel wird eine auf eine Funktion basierende View und eine `Form`-Klasse verwenden. Die folgenden Abschnitte erklären, wie Formulare funktionieren und welche Änderungen Sie an unserem laufenden _LocalLibrary_-Projekt vornehmen müssen.

### Formular

Die `Form`-Klasse ist das Herzstück des Formularbearbeitungssystems von Django. Sie spezifiziert die Felder im Formular, deren Layout, Anzeigewidgets, Labels, Anfangswerte, gültige Werte und (nach der Validierung) die Fehlermeldungen, die mit ungültigen Feldern verbunden sind. Die Klasse stellt auch Methoden bereit, um sich selbst in Vorlagen mit vordefinierten Formaten (Tabellen, Listen usw.) zu rendern oder, um den Wert eines Elements zu erhalten (was eine feinkörnige manuelle Darstellung ermöglicht).

#### Deklaration eines Formulars

Die Deklarationssyntax für ein `Form` ist der Deklaration eines `Model` sehr ähnlich und teilt dieselben Feldtypen (und einige ähnliche Parameter). Dies ist sinnvoll, da wir in beiden Fällen sicherstellen müssen, dass jedes Feld die richtigen Datentypen verarbeitet, auf gültige Daten beschränkt ist und eine Beschreibung für die Anzeige/Dokumentation hat.

Formulardaten werden in einer forms.py-Datei der Anwendung gespeichert, innerhalb des Anwendungsverzeichnisses. Erstellen und öffnen Sie die Datei **django-locallibrary-tutorial/catalog/forms.py**. Um ein `Form` zu erstellen, importieren wir die `forms`-Bibliothek, leiten von der `Form`-Klasse ab und deklarieren die Formularfelder. Eine sehr einfache Formular-Klasse für unser Bibliotheksbuch-Erneuerungsformular ist unten gezeigt – fügen Sie diese zu Ihrer neuen Datei hinzu:

```python
from django import forms

class RenewBookForm(forms.Form):
    renewal_date = forms.DateField(help_text="Enter a date between now and 4 weeks (default 3).")
```

#### Formularfelder

In diesem Fall haben wir ein einzelnes [`DateField`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#datefield) zur Eingabe des Erneuerungsdatums, das in HTML mit einem leeren Wert, der Standardbeschriftung "_Erneuerungsdatum:_", und einem hilfreichen Verwendungstext dargestellt wird: "_Geben Sie ein Datum zwischen jetzt und 4 Wochen ein (Standard 3 Wochen)._". Da keine der anderen optionalen Argumente angegeben sind, wird das Feld Daten im [input_formats](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#django.forms.DateField.input_formats) akzeptieren: YYYY-MM-DD (2024-11-06), MM/DD/YYYY (02/26/2024), MM/DD/YY (10/25/24), und wird mit dem Standard-[widget](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget) gerendert werden: [DateInput](https://docs.djangoproject.com/en/5.0/ref/forms/widgets/#django.forms.DateInput).

Es gibt viele andere Arten von Formularfeldern, die Sie größtenteils an ihrer Ähnlichkeit mit den entsprechenden Modellfeldklassen erkennen werden:

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

- [`required`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#required): Wenn `True`, darf das Feld nicht leer gelassen oder mit einem `None`-Wert versehen werden. Felder sind standardmäßig erforderlich, daher würden Sie `required=False` setzen, um leere Werte im Formular zuzulassen.
- [`label`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label): Das Label, das beim Rendern des Feldes in HTML verwendet wird. Wenn ein [label](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label) nicht angegeben ist, erstellt Django eines aus dem Feldnamen, indem der erste Buchstabe großgeschrieben wird und Unterstriche durch Leerzeichen ersetzt werden (z.B. _Erneuerungsdatum_).
- [`label_suffix`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#label-suffix): Standardmäßig wird nach dem Label ein Doppelpunkt angezeigt (z.B. Erneuerungsdatum&ZeroWidthSpace;**:**). Dieses Argument erlaubt Ihnen, ein anderes Suffix mit anderen Zeichen anzugeben.
- [`initial`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#initial): Der Anfangswert für das Feld, wenn das Formular angezeigt wird.
- [`widget`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#widget): Das Anzeigewidget, das verwendet werden soll.
- [`help_text`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#help-text) (wie im obigen Beispiel zu sehen): Zusätzlicher Text, der in Formularen angezeigt werden kann, um zu erklären, wie das Feld verwendet wird.
- [`error_messages`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#error-messages): Eine Liste von Fehlermeldungen für das Feld. Sie können diese bei Bedarf mit Ihren eigenen Nachrichten überschreiben.
- [`validators`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#validators): Eine Liste von Funktionen, die beim Validieren des Feldes aufgerufen werden.
- [`localize`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#localize): Ermöglicht die Lokalisierung der Formulareingaben (siehe Link für weitere Informationen).
- [`disabled`](https://docs.djangoproject.com/en/5.0/ref/forms/fields/#disabled): Das Feld wird angezeigt, aber sein Wert kann nicht bearbeitet werden, wenn dies `True` ist. Der Standardwert ist `False`.

#### Validierung

Django bietet zahlreiche Möglichkeiten, Ihre Daten zu validieren. Der einfachste Weg, ein einzelnes Feld zu validieren, besteht darin, die Methode `clean_<field_name>()` für das Feld zu überschreiben, das Sie überprüfen möchten. Wir können also zum Beispiel überprüfen, dass eingegebene `renewal_date`-Werte zwischen jetzt und 4 Wochen liegen, indem wir `clean_renewal_date()` wie unten gezeigt implementieren.

Aktualisieren Sie Ihre forms.py-Datei so, dass sie wie diese aussieht:

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

Es gibt zwei wichtige Dinge zu beachten. Das erste ist, dass wir unsere Daten mit `self.cleaned_data['renewal_date']` erhalten und dass wir diese Daten am Ende der Funktion zurückgeben, unabhängig davon, ob wir sie ändern oder nicht.
Dieser Schritt gibt uns die Daten "bereinigt" und von potenziell unsicherer Eingabe mit den Standard-Prüfungen bereinigt und in den korrekten Standardtyp für die Daten konvertiert (in diesem Fall ein Python-`datetime.datetime`-Objekt).

Der zweite Punkt ist, dass, wenn ein Wert außerhalb unseres Bereichs liegt, wir ein `ValidationError` auslösen und den Fehlertest, den wir im Formular anzeigen möchten, wenn ein ungültiger Wert eingegeben wird, angeben.
Das obige Beispiel umschließt diesen Text auch in einer von Djangos [Übersetzungsfunktionen](https://docs.djangoproject.com/en/5.0/topics/i18n/translation/), `gettext_lazy()` (importiert als `_()`), was eine gute Praxis ist, wenn Sie Ihre Website später übersetzen möchten.

> [!NOTE]
> Es gibt zahlreiche andere Methoden und Beispiele zur Validierung von Formularen in [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation). Zum Beispiel können Sie in Fällen, in denen Sie mehrere Felder haben, die voneinander abhängen, die [Form.clean()](https://docs.djangoproject.com/en/5.0/ref/forms/api/#django.forms.Form.clean) Funktion überschreiben und erneut ein `ValidationError` auslösen.

Das ist alles, was wir für das Formular in diesem Beispiel benötigen!

### URL-Konfiguration

Bevor wir unsere View erstellen, fügen wir eine URL-Konfiguration für die _renew-books_-Seite hinzu. Kopieren Sie die folgende Konfiguration an das Ende von **django-locallibrary-tutorial/catalog/urls.py**:

```python
urlpatterns += [
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]
```

Die URL-Konfiguration leitet URLs mit dem Format **/catalog/book/_\<bookinstance_id>_/renew/** an die Funktion `renew_book_librarian()` in **views.py** weiter und sendet die `BookInstance`-ID als den Parameter `pk`. Das Muster wird nur übereinstimmen, wenn `pk` ein korrekt formatiertes `uuid` ist.

> [!NOTE]
> Wir können unsere erfassten URL-Daten beliebig benennen, da wir die vollständige Kontrolle über die View-Funktion haben (wir verwenden nicht eine generische Detailansichtsklasse, die Parameter mit einem bestimmten Namen erwartet). `pk`, kurz für "primary key", ist jedoch eine vernünftige Konvention!

### View

Wie im Abschnitt [Django-Formularbearbeitungsprozess](#django-formularbearbeitungsprozess) oben diskutiert, muss die Ansicht das Standardformular rendern, wenn es zum ersten Mal aufgerufen wird, und es dann entweder mit Fehlermeldungen erneut rendern, wenn die Daten ungültig sind, oder die Daten verarbeiten und zu einer neuen Seite weiterleiten, wenn die Daten gültig sind. Um diese verschiedenen Aktionen auszuführen, muss die Ansicht in der Lage sein zu wissen, ob sie zum ersten Mal aufgerufen wird, um das Standardformular zu rendern, oder zu einem späteren Zeitpunkt, um Daten zu validieren.

Für Formulare, die eine `POST`-Anfrage verwenden, um Informationen an den Server zu übermitteln, ist das gängigste Muster, dass die Ansicht gegen den `POST`-Anfragetyp testet (`if request.method == 'POST':`), um Formularvalidierungsanfragen zu identifizieren, und `GET` (mit einer `else`-Bedingung), um die ursprüngliche Anfrage zur Formularerstellung zu identifizieren. Wenn Sie Ihre Daten mit einer `GET`-Anfrage übermitteln möchten, ist ein typischer Ansatz zur Identifizierung, ob dies die erste oder eine spätere Aufrufung der Ansicht ist, das Lesen der Formulardaten (z.B. das Lesen eines versteckten Werts im Formular).

Da der Bucherneuerungsprozess in unserer Datenbank schreiben wird, verwenden wir konventionell den `POST`-Anfrageansatz.
Der unten gezeigte Codeausschnitt zeigt das (sehr standardmäßige) Muster für diese Art von Funktions-View.

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

Zuerst importieren wir unser Formular (`RenewBookForm`) und eine Reihe anderer nützlicher Objekte/Methoden, die im Body der View-Funktion verwendet werden:

- [`get_object_or_404()`](https://docs.djangoproject.com/en/5.0/topics/http/shortcuts/#get-object-or-404): Gibt ein angegebenes Objekt aus einem Modell basierend auf seinem Primärschlüsselwert zurück und löst eine `Http404`-Ausnahme aus (nicht gefunden), wenn der Datensatz nicht existiert.
- [`HttpResponseRedirect`](https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpResponseRedirect): Dies erstellt eine Weiterleitung zu einer angegebenen URL (HTTP-Statuscode 302).
- [`reverse()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#django.urls.reverse): Dies generiert eine URL aus einem URL-Konfigurationsnamen und einem Satz Argumente. Es ist das Python-Äquivalent zum `url`-Tag, das wir in unseren Vorlagen verwendet haben.
- [`datetime`](https://docs.python.org/3/library/datetime.html): Eine Python-Bibliothek zur Manipulation von Datum und Uhrzeiten.

In der View verwenden wir zuerst das `pk`-Argument in `get_object_or_404()`, um die aktuelle `BookInstance` zu erhalten (wenn dies nicht existiert, beendet die Ansicht sofort und die Seite zeigt einen "nicht gefunden" Fehler an).
Wenn dies _keine_ `POST`-Anfrage ist (im `else`-Zweig behandelt), erstellen wir das Standardformular, indem wir einen `initial`-Wert für das `renewal_date`-Feld 3 Wochen ab dem aktuellen Datum übergeben.

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

Nach der Erstellung des Formulars rufen wir `render()` auf, um die HTML-Seite zu erstellen, wobei die Vorlage und ein Kontext angegeben werden, der unser Formular enthält. In diesem Fall enthält der Kontext auch unsere `BookInstance`, die wir in der Vorlage verwenden, um Informationen über das Buch bereitzustellen, das wir erneuern.

Handelt es sich jedoch um eine `POST`-Anfrage, erstellen wir unser `form`-Objekt und füllen es mit Daten aus der Anfrage. Dieser Prozess wird "Binding" genannt und ermöglicht uns die Validierung des Formulars.

Wir prüfen dann, ob das Formular gültig ist, was den gesamten Validierungscode auf allen Feldern ausführt – einschließlich des generischen Codes, um zu überprüfen, ob unser Datumsfeld tatsächlich ein gültiges Datum ist, sowie unserer spezifischen Form `clean_renewal_date()` Funktion, um zu überprüfen, ob das Datum im richtigen Bereich liegt.

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

Wenn das Formular nicht gültig ist, rufen wir `render()` erneut auf, aber diesmal enthält der Formularwert im Kontext die Fehlermeldungen.

Wenn das Formular gültig ist, können wir die Daten verwenden, indem wir auf das `form.cleaned_data`-Attribut zugreifen (z.B. `data = form.cleaned_data['renewal_date']`). Hier speichern wir einfach die Daten im `due_back`-Wert des zugehörigen `BookInstance`-Objekts.

> [!WARNING]
> Während Sie auch direkt auf die Formulardaten über die Anfrage zugreifen können (z.B. `request.POST['renewal_date']` oder `request.GET['renewal_date']`, wenn Sie eine GET-Anfrage verwenden), wird dies NICHT empfohlen. Die bereinigten Daten sind bereinigt, validiert und in Python-freundliche Typen konvertiert.

Der abschließende Schritt im Formularbearbeitungsteil der View ist die Weiterleitung zu einer anderen Seite, in der Regel einer "Erfolgs"-Seite. In diesem Fall verwenden wir `HttpResponseRedirect` und `reverse()`, um zur View mit dem Namen `'all-borrowed'` weiterzuleiten (diese wurde als "Herausforderung" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) erstellt). Wenn Sie diese Seite nicht erstellt haben, überlegen Sie, zur Startseite unter der URL `/` zu leiten).

Das ist alles, was für die Formularbearbeitung selbst erforderlich ist, aber wir müssen noch den Zugriff auf die View auf nur eingeloggte Bibliothekare beschränken, die die Erlaubnis haben, Bücher zu erneuern. Wir verwenden `@login_required`, um zu verlangen, dass der Benutzer eingeloggt ist, und die `@permission_required` Funktionsdekoration mit unserer vorhandenen `can_mark_returned` Berechtigung, um den Zugriff zu erlauben (Dekoratoren werden in der Reihenfolge verarbeitet). Beachten Sie, dass wir wahrscheinlich eine neue Berechtigungseinstellung in `BookInstance` (`can_renew`) hätten erstellen sollen, aber die vorhandene wird verwendet, um das Beispiel einfach zu halten.

Die endgültige View sieht daher wie unten gezeigt aus. Bitte kopieren Sie dies ans Ende von **django-locallibrary-tutorial/catalog/views.py**.

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

Erstellen Sie die Vorlage, auf die in der View verwiesen wird (**/catalog/templates/catalog/book_renew_librarian.html**) und kopieren Sie den Code unten hinein:

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

Die meisten davon werden Ihnen aus früheren Tutorials völlig vertraut sein.

Wir erweitern die Basisklasse und definieren dann den Inhaltsblock neu. Wir können auf `\{{ book_instance }}` (und seine Variablen) verweisen, weil sie im Kontextobjekt in der `render()`-Funktion übergeben wurden, und wir verwenden diese, um den Buchtitel, den Entleiher und das ursprüngliche Ablaufdatum aufzulisten.

Der Formularcode ist relativ einfach. Zuerst deklarieren wir die `form`-Tags und geben an, wohin das Formular gesendet (`action`) und mit welcher `method` die Daten übermittelt werden sollen (in diesem Fall ein `POST`) – wenn Sie sich an die [HTML-Formulare](#html-formulare) Übersicht am Anfang der Seite erinnern, bedeutet ein leerer `action` wie gezeigt, dass die Formulardaten zurück an die aktuelle URL der Seite übermittelt werden (was wir wollen). Innerhalb der Tags definieren wir die `submit`-Input, die ein Benutzer drücken kann, um die Daten zu übermitteln. Das `{% csrf_token %}`, das direkt innerhalb der Formular-Tags hinzugefügt wird, ist Teil von Djangos Schutz vor Cross-Site-Forgery.

> [!NOTE]
> Fügen Sie das `{% csrf_token %}` zu jedem Django-Template hinzu, das Sie erstellen, das `POST` zum Senden von Daten verwendet. Dies reduziert die Wahrscheinlichkeit, dass Formulare von bösartigen Benutzern gekapert werden.

Alles, was noch übrig ist, ist die `\{{ form }}`-Template-Variable, die wir in das Kontext-Wörterbuch übergeben haben.
Vielleicht nicht überraschend, liefert sie in der gezeigten Form die Standarddarstellung aller Formularfelder, einschließlich ihrer Beschriftungen, Widgets und Hilfetexte – die Darstellung ist wie unten gezeigt:

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
> Es ist vielleicht nicht offensichtlich, weil wir nur ein Feld haben, aber standardmäßig wird jedes Feld in seiner eigenen Tabellenzeile definiert. Diese gleiche Darstellung wird bereitgestellt, wenn Sie die Template-Variable `\{{ form.as_table }}` referenzieren.

Wenn Sie ein ungültiges Datum eingeben, werden zusätzlich eine Liste der Fehler auf der Seite angezeigt (siehe `errorlist` unten).

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

Wenn Sie `\{{ form.as_table }}` wie oben gezeigt verwenden, wird jedes Feld als Tabellenzeile gerendert. Sie können jedes Feld auch als Listenelement (mit `\{{ form.as_ul }}`) oder als Absatz (mit `\{{ form.as_p }}`) rendern.

Es ist auch möglich, die Darstellung jedes Teils des Formulars vollständig zu steuern, indem Sie seine Eigenschaften mit Punktnotation indexieren. So können Sie zum Beispiel auf eine Reihe von separaten Elementen für unser `renewal_date`-Feld zugreifen:

- `\{{ form.renewal_date }}`: Das gesamte Feld.
- `\{{ form.renewal_date.errors }}`: Die Liste der Fehler.
- `\{{ form.renewal_date.id_for_label }}`: Die ID des Labels.
- `\{{ form.renewal_date.help_text }}`: Der Hilfetext des Feldes.

Weitere Beispiele, wie Sie Formulare in Vorlagen manuell rendern und dynamisch über Template-Felder Schleifen anwenden können, finden Sie unter [Arbeiten mit Formularen > Felder manuell rendern](https://docs.djangoproject.com/en/5.0/topics/forms/#rendering-fields-manually) (Django-Dokumentation).

### Die Seite testen

Wenn Sie die "Herausforderung" in [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#challenge_yourself) akzeptiert haben, haben Sie eine Ansicht, die alle ausgeliehenen Bücher in der Bibliothek anzeigt, die nur für das Bibliothekspersonal sichtbar ist.
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

Wir können neben jedem Element einen Link zur Bucherneuerungsseite hinzufügen, indem wir den folgenden Template-Code zum Listenelementtext oben hinzufügen.
Beachten Sie, dass dieser Template-Code nur innerhalb der `{% for %}`-Schleife ausgeführt werden kann, da dort der `bookinst`-Wert definiert wird.

```django
{% if perms.catalog.can_mark_returned %}- <a href="{% url 'renew-book-librarian' bookinst.id %}">Renew</a>{% endif %}
```

> [!NOTE]
> Denken Sie daran, dass Ihr Test-Login die Berechtigung `catalog.can_mark_returned` benötigt, um den neuen "Erneuern"-Link sehen zu können, der oben hinzugefügt wurde, und um auf die verlinkte Seite zugreifen zu können (verwenden Sie vielleicht Ihren Superuser-Account).

Alternativ können Sie eine Test-URL wie diese manuell konstruieren – `http://127.0.0.1:8000/catalog/book/<bookinstance_id>/renew/` (eine gültige `bookinstance_id` kann abgerufen werden, indem Sie zu einer Buchdetailseite in Ihrer Bibliothek navigieren und das `id`-Feld kopieren).

### Wie sieht es aus?

Wenn Sie erfolgreich sind, sieht das Standardformular so aus:

![Standardformular, das die Buchdetails, das Fälligkeitsdatum, das Erneuerungsdatum und eine Schaltfläche zum Absenden anzeigt, wenn der Link erfolgreich funktioniert](forms_example_renew_default.png)

Das Formular mit einem ungültigen eingegebenen Wert sieht so aus:

![Gleiches Formular wie oben mit einer Fehlermeldung: ungültiges Datum - Erneuerung in der Vergangenheit](forms_example_renew_invalid.png)

Die Liste aller Bücher mit Erneuerungslinks sieht so aus:

![Zeigt die Liste aller erneuerten Bücher zusammen mit ihren Details an. Überfällige in rot.](forms_example_renew_allbooks.png)

## ModelForms

Die Erstellung einer `Form`-Klasse mit dem oben beschriebenen Ansatz ist sehr flexibel und ermöglicht es Ihnen, jede Art von Formularseite zu erstellen und mit jedem Modell oder Modellen zu verbinden.

Wenn Sie jedoch nur ein Formular benötigen, um die Felder eines _einzelnen_ Modells abzubilden, dann definiert Ihr Modell bereits die meisten der Informationen, die Sie in Ihrem Formular benötigen: Felder, Labels, Hilfetexte und so weiter. Anstatt die Modelldefinitionen in Ihrem Formular erneut zu erstellen, ist es einfacher, die [ModelForm](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/)-Hilfsklasse zu verwenden, um das Formular aus Ihrem Modell zu erstellen. Diese `ModelForm` kann dann innerhalb Ihrer Views genau wie ein gewöhnliches `Form` verwendet werden.

Eine grundlegende `ModelForm`, die dasselbe Feld wie unser ursprüngliches `RenewBookForm` enthält, ist unten gezeigt. Alles, was Sie zur Erstellung des Formulars tun müssen, ist, `class Meta` mit dem zugehörigen `model` (`BookInstance`) und einer Liste der Modellfelder, die im Formular enthalten sind, hinzuzufügen.

```python
from django.forms import ModelForm

from catalog.models import BookInstance

class RenewBookModelForm(ModelForm):
    class Meta:
        model = BookInstance
        fields = ['due_back']
```

> [!NOTE]
> Sie können auch alle Felder im Formular mit `fields = '__all__'` einbeziehen oder `exclude` (anstelle von `fields`) verwenden, um die Felder anzugeben, die _nicht_ aus dem Modell eingeschlossen werden sollen.
>
> Keiner dieser Ansätze wird empfohlen, da dann neue Felder, die dem Modell hinzugefügt werden, automatisch im Formular enthalten sind (ohne dass der Entwickler notwendigerweise mögliche Sicherheitsrisiken berücksichtigt).

> [!NOTE]
> Dies mag nicht wesentlich einfacher aussehen als die Verwendung eines `Form` (und das ist es in diesem Fall nicht, da wir nur ein Feld haben). Wenn Sie jedoch viele Felder haben, kann es den erforderlichen Code erheblich reduzieren!

Der Rest der Informationen stammt aus den Modellfeldern (z.B. Labels, Widgets, Hilfetexte, Fehlermeldungen). Wenn diese nicht ganz richtig sind, können wir sie in unserer `class Meta` überschreiben, indem wir ein Wörterbuch angeben, das das zu ändernde Feld und seinen neuen Wert enthält. In diesem Formular möchten wir zum Beispiel ein Label für unser Feld als "_Erneuerungsdatum_" (anstatt des standardmäßigen, basierend auf dem Feldnamen: _Fälligkeitsdatum_), und wir möchten auch unseren Hilfetext für diesen Anwendungsfall spezifisch machen.
Das `Meta` unten zeigt Ihnen, wie Sie diese Felder überschreiben können, und Sie können ähnliche `widgets` und `error_messages` setzen, wenn die Standards nicht ausreichen.

```python
class Meta:
    model = BookInstance
    fields = ['due_back']
    labels = {'due_back': _('New renewal date')}
    help_texts = {'due_back': _('Enter a date between now and 4 weeks (default 3).')}
```

Um Validierungen hinzuzufügen, können Sie denselben Ansatz wie bei einem normalen `Form` verwenden – Sie definieren eine Funktion mit dem Namen `clean_<field_name>()` und lösen für ungültige Werte `ValidationError`-Ausnahmen aus.
Der einzige Unterschied im Vergleich zu unserem ursprünglichen Formular ist, dass das Modellfeld `due_back` und nicht `renewal_date` genannt wird.
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

Die Klasse `RenewBookModelForm` oben ist jetzt funktional gleichwertig mit unserem ursprünglichen `RenewBookForm`. Sie könnten es importieren und verwenden, wo immer Sie derzeit `RenewBookForm` verwenden, solange Sie auch den entsprechenden Formularvariablennamen von `renewal_date` in `due_back` wie in der zweiten Formulardeklaration aktualisieren: `RenewBookModelForm(initial={'due_back': proposed_renewal_date}`.

## Generische Editier-Views

Der Formularbearbeitungsalgorithmus, den wir in unserem Funktions-View-Beispiel oben verwendet haben, stellt ein äußerst gängiges Muster in Formular-Editier-Views dar. Django abstrahiert einen Großteil diesen "Boilerplate"-Codes für Sie, indem es [generische Editier-Views](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) zum Erstellen, Bearbeiten und Löschen von Views basierend auf Modellen bereitstellt. Diese behandeln nicht nur das "View"-Verhalten, sondern erstellen auch automatisch die Formularklasse (eine `ModelForm`) für Sie aus dem Modell.

> [!NOTE]
> Zusätzlich zu den hier beschriebenen Editier-Views gibt es auch eine [FormView](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/#formview)-Klasse, die irgendwo zwischen unserer Funktions-View und den anderen generischen Views hinsichtlich "Flexibilität" vs. "Codeaufwand" liegt. Bei Verwendung von `FormView` müssen Sie Ihr `Form` immer noch erstellen, aber Sie müssen nicht alle Standardmuster zur Formularbearbeitung implementieren. Stattdessen müssen Sie nur eine Implementierung der Funktion bereitstellen, die aufgerufen wird, sobald die Übermittlung als gültig bekannt ist.

In diesem Abschnitt werden wir generische Editier-Views verwenden, um Seiten zum Hinzufügen von Funktionen zum Erstellen, Bearbeiten und Löschen von `Author`-Einträgen aus unserer Bibliothek zu erstellen — im Grunde genommen eine einfache Wiederimplementierung von Teilen der Admin-Seite (dies könnte nützlich sein, wenn Sie Admin-Funktionalität auf eine flexiblere Weise anbieten müssen, als sie von der Admin-Seite bereitgestellt werden kann).

### Views

Öffnen Sie die Views-Datei (**django-locallibrary-tutorial/catalog/views.py**) und hängen Sie den folgenden Codeblock ans Ende:

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

Wie Sie sehen, müssen Sie zum Erstellen, Aktualisieren oder Löschen der Views von `CreateView`, `UpdateView` und `DeleteView` (jeweils) ableiten und dann das zugehörige Modell definieren.
Wir beschränken das Aufrufen dieser Views auch nur auf eingeloggte Benutzer mit den Berechtigungen `add_author`, `change_author` und `delete_author` (jeweils).

In den Fällen "erstellen" und "aktualisieren" müssen Sie auch die Felder angeben, die im Formular angezeigt werden sollen (mit derselben Syntax wie bei `ModelForm`). In diesem Fall zeigen wir, wie man sie einzeln auflistet und die Syntax, um "alle" Felder aufzulisten. Sie können auch Anfangswerte für jedes der Felder mithilfe eines Wörterbuchs von _field_name_/_value_-Paaren angeben (hier setzen wir willkürlich das Todesdatum zum Demonstrationszweck – möglicherweise möchten Sie das entfernen). Standardmäßig leiten diese Views bei Erfolg zu einer Seite weiter, die das neu erstellte/bearbeitete Modellelement anzeigt, was in unserem Fall die Autordetails-View ist, die wir in einem früheren Tutorial erstellt haben. Sie können einen alternativen Umleitungsort angeben, indem Sie den Parameter `success_url` explizit deklarieren.

Die `AuthorDelete`-Klasse muss keine der Felder anzeigen, daher müssen diese nicht angegeben werden.
Wir setzen auch eine `success_url` (wie oben gezeigt), da es keine offensichtliche Standard-URL gibt, zu der Django nach dem erfolgreichen Löschen des `Author` navigieren könnte. Oben verwenden wir die Funktion [`reverse_lazy()`](https://docs.djangoproject.com/en/5.0/ref/urlresolvers/#reverse-lazy), um nach dem Löschen eines Autors zur Autorenliste weiterzuleiten – `reverse_lazy()` ist eine verzögert ausgeführte Version von `reverse()`, die hier verwendet wird, weil wir eine URL zu einem klassenbasierten View-Attribut angeben.

Wenn die Löschung von Autoren immer erfolgreich sein soll, wäre das alles.
Leider wird das Löschen eines `Author` eine Ausnahme auslösen, wenn der Autor mit einem Buch verbunden ist, da unser [`Book`-Modell](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models#book_model) `on_delete=models.RESTRICT` für das `ForeignKey`-Feld des Autors angibt.
Um diesen Fall zu behandeln, überschreibt die View die Methode [`form_valid()`](https://docs.djangoproject.com/en/5.0/ref/class-based-views/mixins-editing/#django.views.generic.edit.FormMixin.form_valid), sodass, wenn das Löschen des `Author` erfolgreich ist, es zur `success_url` weiterleitet, aber wenn nicht, springt es einfach zurück zum gleichen Formular.
Wir werden die Vorlage unten aktualisieren, um klarzustellen, dass Sie kein `Author`-Objekt löschen können, das in einem `Book` verwendet wird.

### URL-Konfigurationen

Öffnen Sie Ihre URL-Konfigurationsdatei (**django-locallibrary-tutorial/catalog/urls.py**) und fügen Sie die folgende Konfiguration ans Ende der Datei hinzu:

```python
urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]
```

Es gibt hier nichts besonders Neues! Sie sehen, dass die Views Klassen sind und daher über `.as_view()` aufgerufen werden müssen, und Sie sollten in der Lage sein, die URL-Muster in jedem Fall zu erkennen. Wir müssen `pk` als Namen für unseren erfassten Primärschlüsselwert verwenden, da dies der Parametername ist, den die View-Klassen erwarten.

### Vorlagen

Die "erstellen" und "aktualisieren" Views verwenden standardmäßig dieselbe Vorlage, die nach Ihrem Modell benannt sein wird: `model_name_form.html` (Sie können den Suffix zu etwas anderem als **\_form** mit dem Feld `template_name_suffix` in Ihrer View ändern, zum Beispiel `template_name_suffix = '_other_suffix'`)

Erstellen Sie die Vorlagedatei `django-locallibrary-tutorial/catalog/templates/catalog/author_form.html` und kopieren Sie den untenstehenden Text.

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

Dies ist ähnlich wie in unseren vorherigen Formularen und rendert die Felder in einer Tabelle. Beachten Sie auch, wie wir erneut das `{% csrf_token %}` deklarieren, um sicherzustellen, dass unsere Formulare gegen CSRF-Angriffe resistent sind.

Die "löschen" View erwartet eine Vorlage mit dem Format `[model_name]_confirm_delete.html` (auch hier können Sie den Suffix in Ihrer View mit `template_name_suffix` ändern).
Erstellen Sie die Vorlagedatei `django-locallibrary-tutorial/catalog/templates/catalog/author_confirm_delete.html` und kopieren Sie den untenstehenden Text.

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
Sie prüft zuerst, ob der Autor in einem Buch verwendet wird, und zeigt dann die Liste der Bücher an, die gelöscht werden müssen, bevor der Autorendatensatz gelöscht werden kann.
Andernfalls zeigt es ein Formular an, das den Benutzer fragt, ob er den Autorendatensatz löschen möchte.

Der letzte Schritt besteht darin, die Seiten in die Seitenleiste zu integrieren.
Erst fügen wir einen Link zum Erstellen der Autor in der _Basistemplate_ hinzu, sodass er in allen Seiten für eingeloggte Benutzer sichtbar ist, die als "Personal" gelten und die Berechtigung haben, Autoren zu erstellen (`catalog.add_author`).
Öffnen Sie **/django-locallibrary-tutorial/catalog/templates/base_generic.html** und fügen Sie die Zeilen hinzu, die Benutzern mit der Berechtigung erlauben, den Autor zu erstellen (im selben Block wie den Link, der "Alle Ausgeliehenen" Bücher anzeigt).
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

Dieser Block überschreibt den `sidebar`-Block in der Basistemplate und zieht dann den ursprünglichen Inhalt mit `\{{ block.super }}` ein.
Es fügt dann Links zum Aktualisieren oder Löschen des Autors hinzu, aber nur, wenn der Benutzer die richtigen Berechtigungen hat und der Autorendatensatz nicht mit einem Buch verknüpft ist.

Die Seiten sind nun bereit zum Testen!

### Die Seite testen

Loggen Sie sich zuerst mit einem Konto ein, das über Berechtigungen zum Hinzufügen, Ändern und Löschen von Autoren verfügt.

Navigieren Sie zu einer beliebigen Seite und wählen Sie "Autor erstellen" in der Seitenleiste aus (mit der URL `http://127.0.0.1:8000/catalog/author/create/`).
Die Seite sollte wie der folgende Screenshot aussehen.

![Formularbeispiel: Autor erstellen](forms_example_create_author.png)

Geben Sie Werte für die Felder ein und drücken Sie dann **Abschicken**, um den Autorendatensatz zu speichern.
Sie sollten nun zu einer Detailansicht Ihres neuen Autors weitergeleitet werden, mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10`.

![Formularbeispiel: Autorendetail mit Links zum Aktualisieren und Löschen](forms_example_detail_author_update.png)

Sie können das Bearbeiten des Datensatzes testen, indem Sie den Link "Autor aktualisieren" auswählen (mit einer URL von etwa `http://127.0.0.1:8000/catalog/author/10/update/`) — wir zeigen keinen Screenshot, da es genauso aussieht wie die "erstellen" Seite!

Schließlich können wir die Seite löschen, indem wir "Autor löschen" in der Seitenleiste auf der Detailseite auswählen.
Django sollte die Löschseite anzeigen, die unten gezeigt wird, wenn der Autorendatensatz nicht in Büchern verwendet wird.
Drücken Sie "**Ja, löschen.**", um den Datensatz zu entfernen und zur Liste aller Autoren weitergeleitet zu werden.

![Formular mit Option zum Löschen des Autors](forms_example_delete_author.png)

## Fordern Sie sich heraus

Erstellen Sie einige Formulare zum Erstellen, Bearbeiten und Löschen von `Book`-Einträgen. Sie können genau die gleiche Struktur wie bei `Authors` verwenden (zum Löschen denken Sie daran, dass Sie kein `Book` löschen können, bis alle damit verbundenen `BookInstance`-Einträge gelöscht wurden), und Sie müssen die richtigen Berechtigungen verwenden.
Wenn Ihre **book_form.html**-Vorlage nur eine kopierte und umbenannte Version der **author_form.html**-Vorlage ist, wird die neue "Buch erstellen"-Seite wie der folgende Screenshot aussehen:

![Screenshot mit verschiedenen Feldern im Formular wie Titel, Autor, Zusammenfassung, ISBN, Genre und Sprache](forms_example_create_book.png)

## Zusammenfassung

Das Erstellen und Verarbeiten von Formularen kann ein komplizierter Prozess sein! Django macht es viel einfacher, indem es programmatische Mechanismen bereitstellt, um Formulare zu deklarieren, zu rendern und zu validieren. Darüber hinaus bietet Django generische Formular-Editier-Views, die _fast die gesamte_ Arbeit übernehmen können, um Seiten zu definieren, die Datensätze erstellen, bearbeiten und löschen können, die mit einer einzelnen Modellinstanz verbunden sind.

Es gibt noch viel mehr, was mit Formularen gemacht werden kann (sehen Sie sich unsere [Siehe auch](#siehe_auch) Liste unten an), aber Sie sollten nun verstehen, wie Sie grundlegende Formulare und Formularbearbeitungscode zu Ihren eigenen Websites hinzufügen können.

## Siehe auch

- [Arbeiten mit Formularen](https://docs.djangoproject.com/en/5.0/topics/forms/) (Django-Dokumentation)
- [Schreiben Ihrer ersten Django-App, Teil 4 > Ein einfaches Formular schreiben](https://docs.djangoproject.com/en/5.0/intro/tutorial04/#write-a-simple-form) (Django-Dokumentation)
- [Die Forms API](https://docs.djangoproject.com/en/5.0/ref/forms/api/) (Django-Dokumentation)
- [Formularfelder](https://docs.djangoproject.com/en/5.0/ref/forms/fields/) (Django-Dokumentation)
- [Formular- und Feldvalidierung](https://docs.djangoproject.com/en/5.0/ref/forms/validation/) (Django-Dokumentation)
- [Formularbearbeitung mit klassenbasierten Views](https://docs.djangoproject.com/en/5.0/topics/class-based-views/generic-editing/) (Django-Dokumentation)
- [Erstellen von Formularen aus Modellen](https://docs.djangoproject.com/en/5.0/topics/forms/modelforms/) (Django-Dokumentation)
- [Generische Editier-Views](https://docs.djangoproject.com/en/5.0/ref/class-based-views/generic-editing/) (Django-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/authentication_and_sessions", "Learn_web_development/Extensions/Server-side/Django/Testing", "Learn_web_development/Extensions/Server-side/Django")}}
