---
title: Einführung in Django
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: 41a27d6c0f8e44f1b9a3dabddd9315655b367b77
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage „Was ist Django?“ und geben Ihnen einen Überblick darüber, was dieses Webframework besonders macht.

Wir werden die Hauptmerkmale skizzieren, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Wir zeigen Ihnen auch einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere die Mechanismen der <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Django ist, welche Funktionalitäten es bietet und den wichtigsten Bausteinen einer Django-Anwendung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochentwickeltes Python-Webframework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen viele der Probleme der Webentwicklung ab, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine blühende und aktive Community, großartige Dokumentation und viele Möglichkeiten für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig ist
  - : Django folgt der Philosophie „Batterien sind enthalten“ und bietet fast alles, was Entwickler „out of the box“ tun möchten. Da alles, was Sie brauchen, Teil eines „Produkts“ ist, funktioniert alles nahtlos zusammen, folgt konsistenten Designprinzipien und hat eine umfassende und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) zum Erstellen fast aller Arten von Websites verwendet — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Auswahlmöglichkeiten für fast jede Funktionalität, die Sie möglicherweise wünschen (z.B. mehrere beliebte Datenbanken, Template-Engines, usw.), es kann aber auch erweitert werden, um andere Komponenten zu verwenden, falls erforderlich.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das so konzipiert wurde, dass es „die richtigen Dinge“ tut, um die Website automatisch zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit zur Verwaltung von Benutzerkonten und Passwörtern, um gängige Fehler wie das Speichern von Sitzungsinformationen in Cookies zu vermeiden, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel und die tatsächlichen Daten werden in der Datenbank gespeichert) oder Passwörter direkt zu speichern anstatt eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der erstellt wird, indem das Passwort durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) geleitet wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion laufen lässt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der „Einweg“-Natur der Funktion ist es jedoch selbst dann schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden, wenn ein gespeicherter Hash-Wert kompromittiert wird._

    Django ermöglicht standardmäßig Schutz vor vielen Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und {{Glossary("Clickjacking", "Clickjacking")}} (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte „[shared-nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)“-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Die klare Trennung der verschiedenen Teile bedeutet, dass es für erhöhten Datenverkehr skalierbar ist, indem Hardware auf jedem Level hinzugefügt wird: Caching-Server, Datenbankserver oder Anwendungsserver. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihren Anforderungen gerecht zu werden (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Verwendung von Designprinzipien und -mustern geschrieben, die die Erstellung wartbaren und wiederverwendbaren Codes fördern. Insbesondere wird das Don't Repeat Yourself (DRY)-Prinzip genutzt, wodurch unnötige Duplikationen vermieden und die Code-Menge reduziert werden. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbare „Anwendungen“ und gruppiert auf niedrigerer Ebene verwandten Code in Module (ähnlich dem {{Glossary("MVC", "Model View Controller (MVC)")}} Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Linux-Varianten, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastrukturen und Dokumentationen für das Hosting von Django-Sites bereitstellen.

## Woher kommt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nachdem eine Reihe von Websites erstellt wurde, begann das Team viel gemeinsamen Code und Designmuster zu extrahieren und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungsframework, das im Juli 2005 als „Django“-Projekt als Open Source veröffentlicht wurde.

Django ist weiter gewachsen und verbessert sich seit seiner ersten Meilensteinveröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung hat neue Funktionalitäten und Fehlerbehebungen hinzugefügt, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis zur Hinzufügung von „generischen“ View-Funktionen und -Klassen (die die Menge an Code reduzieren, die Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich die [Release-Notes](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django investiert wird.

Heute ist Django ein florierendes, kollaboratives Open-Source-Projekt mit vielen Tausenden von Benutzern und Mitwirkenden. Während es immer noch einige Merkmale hat, die seinen Ursprung widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine leicht verfügbare und definitive Messung der Popularität von serverseitigen Frameworks (obwohl man Popularität schätzen kann, indem man Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform verwendet). Eine bessere Frage ist, ob Django „beliebt genug“ ist, um die Probleme von unpopulären Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es Möglichkeiten für Sie, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochkarätiger Websites, die Django verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung anbieten, dann ja, Django ist ein beliebtes Framework!

Hochkarätige Websites, die Django verwenden, sind unter anderem: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsbildend?

Webframeworks bezeichnen sich oft als „meinungsbildend“ oder „nicht meinungsbildend“.

Meinungsbildende Frameworks sind solche, die Ansichten über den „richtigen Weg“ haben, um eine bestimmte Aufgabe zu handhaben. Sie unterstützen oft eine schnelle Entwicklung _in einem bestimmten Bereich_ (Probleme eines bestimmten Typs zu lösen), weil der richtige Weg, etwas zu tun, in der Regel gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und tendieren dazu, weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze zu bieten.

Nicht meinungsbildende Frameworks hingegen haben weit weniger Einschränkungen hinsichtlich der besten Möglichkeiten, Komponenten zusammenzukleben, um ein Ziel zu erreichen, oder sogar, welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe abzuschließen, allerdings auf Kosten dessen, dass Sie diese Komponenten selbst finden müssen.

Django ist „etwas meinungsbildend“ und bietet damit das „Beste aus beiden Welten“. Es bietet eine Reihe von Komponenten zur Handhabung der meisten Webentwicklungsaufgaben und eine (oder zwei) bevorzugte Möglichkeit, diese zu verwenden. Dank Djangos entkoppelter Architektur können Sie jedoch in der Regel aus einer Reihe verschiedener Optionen wählen oder Unterstützung für völlig neue hinzufügen, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage empfangen wird, ermittelt die Anwendung anhand der URL und eventuell im `POST`- oder `GET`-Daten enthaltenen Informationen, was benötigt wird. Je nach Bedarf liest oder schreibt sie dann Informationen aus einer Datenbank oder führt andere Aufgaben aus, die erforderlich sind, um die Anfrage zu bearbeiten. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite für den Browser, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte behandelt, normalerweise in separate Dateien:

![Django - Dateien für Views, Modell, URLs, Template](basic-django.png)

- **URLs:** Obwohl es möglich ist, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, ist es wesentlich wartbarer, eine separate View-Funktion für jede Ressource zu schreiben. Ein URL-Mapping wird verwendet, um HTTP-Anfragen basierend auf der Anfrage-URL an die entsprechende View weiterzuleiten. Das URL-Mapping kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, abgleichen und diese als Daten an eine View-Funktion übergeben.
- **View:** Eine View ist eine Anforderungsbehandlungsfunktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen über _Models_ auf die zur Bearbeitung der Anfragen benötigten Daten zu und delegieren die Formatierung der Antwort an _Templates_.
- **Models:** Models sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (Hinzufügen, Ändern, Löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, mit Platzhaltern, die zum Darstellen von tatsächlichem Inhalt verwendet werden. Eine _View_ kann dynamisch eine HTML-Seite mit einem HTML-Template erstellen, indem sie es mit Daten aus einem _Model_ füllt. Ein Template kann verwendet werden, um die Struktur einer beliebigen Dateityp zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als „Model View Template (MVT)“-Architektur. Es hat viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}} Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptbestandteile einer Django-App aussehen (wir werden später im Kurs, sobald wir eine Entwicklungsumgebung eingerichtet haben, näher darauf eingehen).

### Die Anfrage zur richtigen View senden (urls.py)

Ein URL-Mapping wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL _Muster)_ und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage eingeht, die mit einem bestimmten Muster übereinstimmt, wird die zugeordnete View-Funktion aufgerufen und die Anfrage weitergeleitet.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`-und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, bei denen Elemente durch Kommas getrennt sind und optional ein [abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) enthalten können. Beispielsweise: `[item1, item2, item3,]`).

Das erste Argument für beide Methoden ist eine Route (Muster), die übereinstimmen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und an die View-Funktion als benannte Argumente übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Pattern-Matching-Ansatz, bekannt als regulärer Ausdruck. Wir werden später in einem Artikel darauf eingehen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` genannt wird und in einem Modul namens `views` (d.h. in einer Datei namens `views.py`) zu finden ist.

### Die Anfrage verarbeiten (views.py)

Views sind das Herzstück der Webanwendung, sie empfangen HTTP-Anfragen von Web-Clients und geben HTTP-Antworten zurück. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapping im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage und unsere Antwort gibt eine fest codierte Zeichenkette zurück. Wir zeigen Ihnen eine Anfrage, die später etwas Interessanteres macht.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind „Bibliotheken“ von Funktionen, die in separaten Dateien gespeichert sind und die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer View verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, mit benannten Parametern, die in Klammern nach dem Namen der Funktion aufgelistet sind; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block enthalten sind (obligatorische Einrückung ist ein Schlüsselmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und durchsuchen Daten durch Python-Objekte, die als Models bezeichnet werden. Models definieren die Struktur der gespeicherten Daten, einschließlich der Feld*typen* und eventuell ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Auswahllisten, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Models ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie sich für eine zu verwendende Datenbank entschieden haben, müssen Sie überhaupt nicht direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte „Drecksarbeit“, mit der Datenbank für Sie zu kommunizieren.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Model für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Sie definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einer von mehreren Werten sein, daher definieren wir es als Auswahlfeld und geben eine Zuordnung zwischen anzuzeigenden Auswahlmöglichkeiten und zu speichernden Daten zusammen mit einem Standardwert an.

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
> Python unterstützt „objektorientierte Programmierung“, einen Stil der Programmierung, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zum Arbeiten mit diesen Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/ableiten, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den „Bauplan“ für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> Zum Beispiel haben wir hier eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Dies bedeutet, dass es sich um ein Model handelt und alle Methoden eines Models enthalten wird, wir können ihm jedoch auch spezialisierte Funktionen hinzufügen. In unserem Model definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API, um in der zugehörigen Datenbank zu suchen. Diese kann eine Reihe von Feldern gleichzeitig unter verschiedenen Kriterien abgleichen (z.B. exakt, nicht empfindlich auf Groß- und Kleinschreibung, größer als usw.) und kann komplexe Anweisungen unterstützen (z.B. kann eine Suche auf U11-Teams spezifiziert werden, deren Teamname mit „Fr“ beginnt oder mit „al“ endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcenhandler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Model-Abfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das Feld `team_level` genau den Text `U09` hat (beachten Sie, wie dieses Kriterium als Argument an die `filter()`-Methode übergeben wird, wobei der Feldname und der Abgleichstyp durch einen Doppelunterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem es ein angegebenes HTML-Template und einige Daten kombiniert, die in das Template eingesetzt werden (bereitgestellt in der Variablen namens `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten eingesetzt hat, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Template-Systeme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die beim Erstellen einer Seite eingefügt werden. Templates werden oft zur Erstellung von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen. Django unterstützt sowohl sein eigenes natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 von Haus aus (es kann bei Bedarf auch andere Systeme unterstützen).

Der Codeausschnitt zeigt, wie das HTML-Template, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird, aussehen könnte. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` haben wird (dies ist im `context`-Parameter innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template jeden `team_name`-Wert eines Teams in einem `{{htmlelement("li")}}`-Element an.

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

Die vorherigen Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Models und Templates. Nur einige der anderen Funktionen, die von Django bereitgestellt werden, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zu sammeln, die auf dem Server verarbeitet werden sollen. Django vereinfacht die Formularerstellung, -validierung und -verarbeitung.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Sicherheit im Blick entwickelt wurde.
- **Caching**: Inhalt dynamisch zu erstellen ist viel rechenintensiver (und langsamer) als statische Inhalte zu liefern. Django bietet flexibles Caching, sodass Sie ganze oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf neu gerendert wird.
- **Administrationssite**: Die Django-Administrationsseite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Gerüst erstellen. Sie macht es auf triviale Weise einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um alle Datenmodelle auf Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webservice erstellen (eine Website, die rein Daten bereitstellt, die von anderen Anwendungen oder Websites konsumiert werden und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, auf der der clientseitige Code alle Darstellung der Daten übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Django-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Django verstehen, etwas über seine Geschichte wissen und grob verstehen, wie jeder der Hauptbestandteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits einige echte Django-Codes gesehen, aber anders als bei clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
