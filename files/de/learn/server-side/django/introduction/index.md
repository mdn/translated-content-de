---
title: Django Einführung
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung (obwohl Sie an diesem Punkt noch keine Entwicklungsumgebung haben werden, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">Server-seitigen Website-Programmierung</a> und insbesondere die Mechanismen der <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Django zu erlangen, welche Funktionalitäten es bietet und die Hauptbausteine einer Django-Anwendung kennenzulernen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung von sicheren und wartbaren Websites ermöglicht. Entwickelt von erfahrenen Entwicklern, nimmt Django viel von der Mühe der Webentwicklung ab, sodass Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Community, ausgezeichnete Dokumentation und viele Optionen für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig ist
  - : Django folgt der Philosophie "Batterien enthalten" und bietet fast alles, was Entwickler "out of the box" tun möchten. Da alles, was Sie benötigen, Teil des einen "Produkts" ist, funktioniert es nahtlos zusammen, folgt konsistenten Designprinzipien und hat eine umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) verwendet, um fast jede Art von Website zu erstellen — von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichten-Websites. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format bereitstellen (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es Möglichkeiten für fast jede Funktionalität, die Sie möglicherweise benötigen (z. B. mehrere beliebte Datenbanken, Template-Engines usw.), kann aber auch erweitert werden, um andere Komponenten zu verwenden, wenn nötig.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das "das Richtige" tut, um die Website automatisch zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten und vermeidet dabei häufige Fehler wie das Ablegen von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, und die tatsächlichen Daten werden in der Datenbank gespeichert) oder Passwörter direkt zu speichern, anstatt eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein festlängiges Wert, das durch das Senden des Passworts durch eine [kryptographische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) generiert wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es durch die Hash-Funktion läuft und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg"-Natur der Funktion ist es jedoch selbst dann schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden, wenn ein gespeicherter Hash-Wert kompromittiert wurde._

    Django ermöglicht den Schutz vor vielen Schwachstellen standardmäßig, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-nothing](https://de.wikipedia.org/wiki/Shared-nothing-Architektur)" Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es sich für erhöhten Verkehr skalieren lässt, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungsserver. Einige der verkehrsreichsten Websites haben Django erfolgreich skaliert, um ihre Anforderungen zu erfüllen (z. B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Anwendung von Designprinzipien und Mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere nutzt es das Don't Repeat Yourself (DRY)-Prinzip, um unnötige Duplikationen zu vermeiden und die Menge an Code zu reduzieren. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbare "Anwendungen" und auf einer niedrigeren Ebene die Gruppierung verwandten Codes in Module (ähnlich dem {{Glossary("MVC", "Model View Controller (MVC)")}}-Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie an keine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS betreiben können. Darüber hinaus wird Django von vielen Web-Hosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Django-Seiten bereitstellen.

## Woher kommt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das verantwortlich war für die Erstellung und Wartung von Zeitungswebsites. Nachdem eine Reihe von Websites erstellt worden waren, begann das Team, viel des gemeinsamen Codes und der Designmuster zu extrahieren und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Web-Entwicklungs-Framework, das im Juli 2005 als "Django" Projekt open-sourced wurde.

Django ist weiterhin gewachsen und hat sich verbessert, von der ersten Meilenstein-Veröffentlichung (1.0) im September 2008 bis hin zu Version 5.0 Ende 2023. Jede Veröffentlichung hat neue Funktionalitäten und Fehlerbehebungen hinzugefügt, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Ergänzung von "generischen" View-Funktionen und -Klassen (die die Menge an Code reduzieren, den Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Schauen Sie sich die [Versionshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den neuesten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django gesteckt wird.

Django ist mittlerweile ein florierendes, kollaboratives Open-Source-Projekt mit vielen tausend Nutzern und Mitwirkenden. Obwohl es immer noch einige Merkmale hat, die seine Ursprünge widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine sofort verfügbar und eindeutige Messung der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit anhand von Mechanismen wie der Zählung der Anzahl von GitHub-Projekten und Stack-Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Django „beliebt genug“ ist, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es eine Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochrangiger Websites, die Django verwenden, der Anzahl von Personen, die zum Codebase beitragen, und der Anzahl von Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist Django ein beliebtes Framework!

Hochprofilierte Seiten, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "nicht meinungsstark".

Meinungsstarke Frameworks sind diejenigen mit Meinungen darüber, wie man eine bestimmte Aufgabe "richtig" erledigt. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen eines bestimmten Typs), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Sie können jedoch weniger flexibel beim Lösen von Problemen außerhalb ihres Hauptbereichs sein und bieten tendenziell weniger Auswahlmöglichkeiten bei den Komponenten und Ansätzen, die sie verwenden können.

Nicht meinungsstarke Frameworks hingegen haben weitaus weniger Einschränkungen bei der besten Art und Weise, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder selbst, welche Komponenten verwendet werden sollen. Sie erleichtern es Entwicklern, die geeignetsten Werkzeuge zu verwenden, um eine bestimmte Aufgabe abzuschließen, allerdings auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas meinungsstark" und liefert daher das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten, um die meisten Web-Entwicklungsaufgaben zu erledigen, und eine (oder zwei) bevorzugte Art, sie zu verwenden. Die entkoppelte Architektur von Django bedeutet jedoch, dass Sie in der Regel aus einer Reihe unterschiedlicher Optionen wählen und neue unterstützen können, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, was benötigt wird, basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten. Je nachdem, was erforderlich ist, kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, indem sie oft eine HTML-Seite dynamisch erstellt, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Django-Webanwendungen gruppieren typischerweise den Code, der jeden dieser Schritte verarbeitet, in separate Dateien:

![Django - Dateien für Ansichten, Modell, URLs, Template](basic-django.png)

- **URLs:** Obwohl es möglich ist, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, ist es viel wartbarer, eine separate View-Funktion zu schreiben, um jede Ressource zu verwalten. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anforderungs-URL an die entsprechende Ansicht umzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern erkennen, die in einer URL erscheinen, und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsverarbeitungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen auf die Daten zu, die benötigt werden, um Anfragen über _Modelle_ zu erfüllen, und delegieren die Formatierung der Antwort an _Templates_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (hinzufügen, ändern, löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, mit Platzhaltern zum Darstellen des tatsächlichen Inhalts. Eine _View_ kann eine HTML-Seite dynamisch mit Hilfe eines HTML-Templates erzeugen und mit Daten aus einem _Modell_ füllen. Ein Template kann verwendet werden, um die Struktur von Dateien jeder Art zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)" Architektur. Es hat viele Ähnlichkeiten mit der bekannteren [Model View Controller](/de/docs/Glossar/MVC)-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs genauer darauf eingehen, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Die Anforderung an die richtige Ansicht senden (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im unten stehenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifischen URL-_Mustern)_ und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage mit einer URL empfangen wird, die einem bestimmten Muster entspricht, wird die zugehörige View-Funktion aufgerufen und erhält die Anfrage.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, bei denen die Elemente durch Kommas getrennt sind und ein [optional abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (Muster), die abgeglichen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die View-Funktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichsansatz, der als regulärer Ausdruck bekannt ist. Darüber werden wir in einem späteren Artikel sprechen!

Das zweite Argument ist eine andere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` genannt wird und in einem Modul namens `views` zu finden ist (d. h. in einer Datei namens `views.py`).

### Die Anforderung verarbeiten (views.py)

Ansichten sind das Herzstück der Webanwendung, empfangen HTTP-Anforderungen von Webclients und geben HTTP-Antworten zurück. Dazwischen bündeln sie die anderen Ressourcen des Frameworks, um Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt es ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall tun wir nichts mit der Anforderung, und unsere Antwort gibt einen festcodierten String zurück. Wir zeigen Ihnen in einem späteren Abschnitt eine Anfrage, die etwas Interessanteres macht.

```python
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
```

> [!NOTE]
> Ein bisschen Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind und die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, sodass wir es in unserer Ansicht verwenden können: `from django.http import HttpResponse`. Es gibt andere Methoden, um einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, mit benannten Parametern, die in Klammern nach dem Namen der Funktion aufgelistet sind; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen zu diesem bestimmten Block gehören (die obligatorische Einrückung ist ein wichtiges Merkmal von Python und ein Grund, warum Python-Code so lesbar ist).

Ansichten werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten über Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feldtypen und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten aus Listen, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen wählen. Sobald Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt die ganze "schmutzige Arbeit" der Kommunikation mit der Datenbank für Sie.

Der unten stehende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Es definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einen von mehreren Werten haben, daher definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen anzuzeigenden Auswahlmöglichkeiten und zu speichernden Daten bereit, zusammen mit einem Standardwert.

```python
# filename: models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # …
        # list other team levels
    )
    team_level = models.CharField(max_length=3, choices=TEAM_LEVELS, default='U11')
```

> [!NOTE]
> Ein bisschen Python:
>
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen für den Betrieb dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/abgeleitet werden, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des für den Typ von Objekt basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir hier zum Beispiel eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Dies bedeutet, dass es sich um ein Modell handelt und dass es alle Methoden eines Modells enthalten wird, jedoch können wir ihm auch spezialisierte Funktionen eigener Art geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Suchen in der zugehörigen Datenbank. Dies kann mit mehreren Feldern gleichzeitig unter Verwendung unterschiedlicher Kriterien (z. B. exakt, nicht groß-/kleinschreibungsempfindlich, größer als usw.) übereinstimmen und komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcenverwalter) zum Anzeigen aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` hat (beachten Sie, wie dieses Kriterium als Argument an die `filter()`-Funktion übergeben wird, wobei der Feldname und der Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Verknüpfung_; sie erstellt eine HTML-Datei, indem sie eine bestimmte HTML-Vorlage und einige einzufügende Daten in die Vorlage (bereitgestellt in der Variablen `context`) kombiniert. Im nächsten Abschnitt zeigen wir, wie die Daten eingefügt werden, um die HTML zu erstellen.

### Daten rendern (HTML-Templates)

Templatesysteme ermöglichen Ihnen, die Struktur eines Ausgabedokuments anzugeben, indem Sie Platzhalter für Daten verwenden, die eingefügt werden, wenn eine Seite generiert wird. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erzeugen. Django unterstützt sowohl sein natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 von Haus aus (es kann bei Bedarf auch andere Systeme unterstützen).

Der Codeausschnitt zeigt, wie das HTML-Template aussieht, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wurde. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese ist in der `context`-Variablen innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und dann in einer `for`-Schleife iteriert. Dabei zeigt das Template den `team_name`-Wert jedes Teams in einem `<li>`-Element an.

```django
## filename: best/templates/best/index.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Home page</title>
</head>
<body>
  {% if youngest_teams %}
    <ul>
      {% for team in youngest_teams %}
        <li>\{{ team.team_name }}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
</body>
</html>
```

## Was können Sie noch tun?

Die vorhergehenden Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden: URL-Mapping, Views, Modelle und Templates. Nur einige der anderen von Django bereitgestellten Funktionen umfassen:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Formulierung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit dem Gedanken an Sicherheit entwickelt wurde.
- **Caching**: Dynamisches Erstellen von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie alle oder Teile einer gerenderten Seite speichern können, damit sie nur bei Bedarf neu gerendert wird.
- **Verwaltungsseite**: Die Django-Verwaltungsseite ist standardmäßig enthalten, wenn Sie eine App mit dem Basisskelett erstellen. Sie macht es einfach, eine Verwaltungsseite für die Administratoren der Website bereitzustellen, um beliebige Datenmodelle in Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Das kann nützlich sein, wenn Sie einen Webservice erstellen (eine Website, die ausschließlich Daten liefert, die von anderen Anwendungen oder Websites konsumiert werden, und selbst nichts anzeigt), oder wenn Sie eine Website erstellen, bei der der clientseitige Code alle Datenrendering übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt in Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte erfahren und ungefähr wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits einige echte Django-Codes gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
