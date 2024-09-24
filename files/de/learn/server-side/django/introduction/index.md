---
title: Einführung in Django
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

Im ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick über das, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger der fortgeschrittenen Funktionen, auf die wir in diesem Modul nicht im Detail eingehen können. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung (obwohl Sie an diesem Punkt noch keine Entwicklungsumgebung haben, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">serverseitigen Website-Programmierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Django zu gewinnen, welche Funktionalitäten es bietet und welche die Hauptbausteine einer Django-Anwendung sind.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein High-Level-Python-Web-Framework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Entwickelt von erfahrenen Entwicklern, übernimmt Django viele der lästigen Aufgaben der Webentwicklung, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Community, großartige Dokumentation und viele Optionen für kostenlosen und kostenpflichtigen Support.

Django hilft Ihnen, Software zu schreiben, die:

- Komplett ist
  - : Django folgt der "Batteries included"-Philosophie und bietet fast alles, was Entwickler "out of the box" benötigen könnten. Da alles, was Sie brauchen, Teil eines einzelnen "Produkts" ist, funktioniert alles nahtlos zusammen, folgt konsistenten Designprinzipien und hat eine umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde bereits) verwendet, um fast jede Art von Website zu erstellen — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Innerhalb des Systems bietet es zwar Auswahlmöglichkeiten für fast jede gewünschte Funktion (z.B. mehrere beliebte Datenbanken, Template-Engines usw.), kann aber auch erweitert werden, um andere Komponenten zu verwenden, falls erforderlich.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das so konzipiert wurde, dass es automatisch die "richtigen Dinge" tut, um die Website zu schützen. Beispielsweise bietet Django eine sichere Methode zur Verwaltung von Benutzerkonten und Passwörtern, wobei häufige Fehler vermieden werden, wie das Speichern von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, und die tatsächlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der durch das Senden des Passworts durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann prüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion laufen lässt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der „einseitigen“ Natur der Funktion ist es jedoch schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden, selbst wenn ein gespeicherter Hash-Wert beeinträchtigt wird._

    Django bietet von Haus aus Schutz gegen viele Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Glossary/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[shared-nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Die klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Datenverkehr skalierbar ist, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungsserver. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihren Anforderungen gerecht zu werden (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird nach Designprinzipien und Mustern geschrieben, die die Erstellung wartbarer und wiederverwendbarer Codes fördern. Insbesondere macht es Gebrauch vom Don't Repeat Yourself (DRY)-Prinzip, sodass keine unnötige Duplikation stattfindet und die Codegröße reduziert wird. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbare „Anwendungen“ und, auf niedrigerer Ebene, die Gruppierung verwandten Codes in Module (entlang der Linien des [Model-View-Controller (MVC)](/de/docs/Glossary/MVC)-Musters).
- Portabel
  - : Django ist in Python geschrieben, welches auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Server-Plattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Django-Sites bereitstellen.

## Woher kommt Django?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Web-Team entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nachdem sie eine Reihe von Sites erstellt hatten, begann das Team damit, viel gemeinsamen Code und Designmuster zu extrahieren und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungs-Framework, das im Juli 2005 als "Django"-Projekt open-sourced wurde.

Django ist gewachsen und hat sich weiterentwickelt, von seiner ersten Meilensteinversion (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Version hat neue Funktionalitäten und Fehlerbehebungen hinzugefügt, von der Unterstützung für neue Arten von Datenbanken, Template-Engines und Caching bis hin zur Einführung von "generischen" View-Funktionen und Klassen (die die Menge an Code reduzieren, die Entwickler für eine Anzahl von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich die [Release Notes](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit darauf verwendet wird, Django zu verbessern.

Django ist inzwischen ein florierendes, kollaboratives Open-Source-Projekt mit vielen Tausenden von Benutzern und Mitwirkenden. Während es immer noch einige Merkmale aufweist, die seine Herkunft widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbaren und endgültigen Messungen der Popularität von serverseitigen Frameworks (obwohl man die Popularität über Mechanismen wie die Zählung der Anzahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform schätzen kann). Eine bessere Frage ist, ob Django „populär genug“ ist, um die Probleme unbeliebter Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie benötigen? Gibt es eine Gelegenheit, dass Sie bezahlte Arbeit bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl der hochkarätigen Sites, die Django verwenden, der Anzahl der Personen, die zum Codebase beitragen, und der Anzahl der Personen, die kostenlosen oder kostenpflichtigen Support anbieten, ja, Django ist ein populäres Framework!

Bekannte Sites, die Django verwenden, sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich häufig als „meinungsstark“ oder „unmeinungsstark“.

Meinungsstarke Frameworks sind diejenigen, die Meinungen dazu haben, wie man bestimmte Aufgaben „richtig“ erledigt. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösen von Problemen einer bestimmten Art), weil der richtige Weg, etwas zu tun, in der Regel klar verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein beim Lösen von Problemen außerhalb ihres Hauptbereiches und bieten tendenziell weniger Auswahlmöglichkeiten für Komponenten und Ansätze, die sie verwenden können.

Unmeinungsstarke Frameworks hingegen haben weit weniger Einschränkungen, wie man Komponenten am besten zusammenfügt, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge für eine bestimmte Aufgabe zu verwenden, wenn auch auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Django ist „etwas meinungsstark“ und bietet daher das „Beste aus beiden Welten“. Es stellt eine Reihe von Komponenten zur Verfügung, um die meisten Webentwicklungsaufgaben zu bewältigen, sowie eine (oder zwei) bevorzugte Wege, diese zu nutzen. Dennoch bedeutet die entkoppelte Architektur von Django, dass Sie in der Regel aus einer Reihe von verschiedenen Optionen wählen oder die Unterstützung für völlig neue hinzufügen können, falls gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Bei Eingang einer Anfrage ermittelt die Anwendung, was benötigt wird, basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten. Je nachdem, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, erstellt häufig dynamisch eine HTML-Seite für den Browser, indem sie die abgerufenen Daten in Platzhalter in einer HTML-Vorlage einfügt.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte bearbeitet, typischerweise in separate Dateien:

![Django - Dateien für Ansichten, Modell, URLs, Vorlage](basic-django.png)

- **URLs:** Während es möglich ist, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, ist es viel wartbarer, eine separate Ansichtsfunktion zu schreiben, um jede Ressource zu bearbeiten. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anfrage-URL an die entsprechende Ansicht umzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, erkennen und diese als Daten an eine Ansichtsfunktion übergeben.
- **View:** Eine Ansicht ist eine Anfrageverarbeitungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Ansichten greifen auf die zum Erfüllen der Anfragen benötigten Daten über _Modelle_ zu und delegieren die Formatierung der Antwort an _Templates_.
- **Models:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen bereitstellen, um Datensätze in der Datenbank zu verwalten (hinzufügen, ändern, löschen) und abzufragen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie z.B. einer HTML-Seite) definiert und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen. Eine _Ansicht_ kann eine HTML-Seite dynamisch mit Hilfe eines HTML-Templates erstellen und sie mit Daten aus einem _Modell_ füllen. Ein Template kann verwendet werden, um die Struktur jedes Dateityps zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als „Model View Template (MVT)“-Architektur. Sie hat viele Ähnlichkeiten mit der bekannteren [Model View Controller](/de/docs/Glossary/MVC)-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs, nachdem wir eine Entwicklungsumgebung eingerichtet haben, ausführlicher darauf eingehen).

### Die Anfrage an die richtige Ansicht senden (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL-_Muster)_ und entsprechenden Ansichts-Funktionen.
Wenn eine HTTP-Anfrage mit einer URL eingeht, die einem bestimmten Muster entspricht, wird die zugehörige Ansichts-Funktion aufgerufen und die Anfrage übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei die Elemente durch Kommas getrennt sind und ein [optional abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument für beide Methoden ist eine Route (ein Muster), die übereinstimmen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die Ansichts-Funktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen, als regulärer Ausdruck bekannten Ansatz zur Mustererkennung. Wir werden später in einem anderen Artikel darüber sprechen!

Das zweite Argument ist eine andere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` gefunden werden kann (d.h. in einer Datei namens `views.py`).

### Die Anfrage bearbeiten (views.py)

Ansichten sind das Herz der Webanwendung, da sie HTTP-Anfragen von Webclients empfangen und HTTP-Antworten zurückgeben. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale Ansichts-Funktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle Ansichts-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall tun wir nichts mit der Anfrage, und unsere Antwort liefert eine fest codierte Zeichenfolge zurück. Wir werden Ihnen später eine Anfrage zeigen, die interessantere Dinge macht.

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
> Ein wenig Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind „Bibliotheken“ von Funktionen, die in separaten Dateien gespeichert sind und die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer Ansicht verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, mit benannten Parametern, die in Klammern nach dem Funktionsnamen aufgeführt werden; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingezogen** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen innerhalb dieses Blockes sind (zwingende Einrückung ist ein wesentliches Merkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Ansichten werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten durch als Modelle bezeichnete Python-Objekte ab. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feld_typen_ und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahllistenoptionen, Hilfetexten für Dokumentation, Bezeichnungsfeldtexte für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen auswählen. Sobald Sie gewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr sprechen – Sie schreiben einfach Ihre Modellstruktur und anderen Codes, und Django erledigt die gesamte „Drecksarbeit“ der Kommunikation mit der Datenbank für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` kann einen von mehreren Werten haben, also definieren wir es als Auswahlfeld und bieten eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert.

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
> Ein wenig Python:
>
> Python unterstützt „objektorientierte Programmierung“, einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zur Operation über diese Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, wodurch gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den „Bauplan“ für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> Beispielsweise haben wir hier eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Das bedeutet, dass es sich um ein Modell handelt, und dass es alle Methoden eines Modells enthalten wird, aber wir können ihm auch spezialisierte Funktionen hinzufügen. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API, um die zugehörige Datenbank zu durchsuchen. Dies kann gegen eine Anzahl von Feldern auf einmal mit unterschiedlichen Kriterien (z.B. exakt, case-insensitiv, größer als usw.) übereinstimmen und kann komplexe Aussagen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams spezifizieren, die einen Teamname haben, der mit "Fr" beginnt oder endet mit "al").

Der Codeausschnitt zeigt eine Ansichts-Funktion (Ressourcenhandler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das Feld `team_level` genau den Text '`U09`' enthält (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der übereinstimmungtyp durch ein Doppelunterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist ein _Verfahren_; es erstellt eine HTML-Datei, indem es ein angegebenes HTML-Template und einige Daten kombiniert, die in das Template eingefügt werden sollen (bereitgestellt in der Variablen mit dem Namen "`context`"). Im nächsten Abschnitt zeigen wir, wie das Template die Daten in ihm eingefügt bekommt, um das HTML zu erstellen.

### Daten darstellen (HTML-Templates)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments anzugeben, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite ausgefüllt werden. Templates werden häufig verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen. Django unterstützt sowohl sein natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 out of the box (es kann bei Bedarf auch so konfiguriert werden, andere Systeme zu unterstützen).

Der Codeausschnitt zeigt, wie das HTML-Template aussieht, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` haben wird (diese ist in der `context`-Variablen innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zunächst prüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife darüber iteriert. Bei jeder Iteration zeigt das Template den `team_name`-Wert jedes Teams in einem `{{htmlelement("li")}}` Element an.

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
        <li>\{\{ team.team_name \}\}</li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No teams are available.</p>
  {% endif %}
</body>
</html>
```

## Was können Sie sonst noch tun?

Die vorhergehenden Abschnitte zeigen die Hauptfunktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Ansichten, Modelle und Templates. Ein paar von den anderen Dingen, die von Django bereitgestellt werden, sind:

- **Forms**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Blick auf Sicherheit entwickelt wurde.
- **Caching**: Dynamische Inhaltserstellung ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, damit Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf neu gerendert wird.
- **Verwaltungsseite**: Die Django-Verwaltungsseite ist standardmäßig enthalten, wenn Sie eine App mit dem Basisskelett erstellen. Es macht es kinderleicht, eine Admin-Seite für Site-Administratoren bereitzustellen, um beliebige Datenmodelle in Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Datenserialisierung**: Django erleichtert das Serialisieren und Bereitstellen Ihrer Daten als XML oder JSON. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites konsumiert werden sollen, und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, auf der der clientseitige Code die gesamte Darstellung der Daten behandelt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt auf Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, etwas über seine Geschichte wissen und ungefähr wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Programmiersprache Python gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits ein paar echte Django-Codes gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
