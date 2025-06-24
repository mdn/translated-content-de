---
title: Einführung in Django
slug: Learn_web_development/Extensions/Server-side/Django/Introduction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}

In diesem ersten Artikel zu Django beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptfunktionen, einschließlich einiger erweiterter Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um sie zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps">serverseitiger Website-Programmierung</a> und insbesondere die Mechanismen der <a href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit dem, was Django ist, welche Funktionen es bietet, und den Hauptbestandteilen einer Django-Anwendung gewinnen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochentwickeltes Python-Web-Framework, das die schnelle Entwicklung von sicheren und wartungsfähigen Websites ermöglicht. Von erfahrenen Entwicklern entwickelt, übernimmt Django viele der Herausforderungen der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source, hat eine florierende und aktive Gemeinschaft, großartige Dokumentation und viele Optionen für kostenlosen oder kostenpflichtigen Support.

Django hilft Ihnen dabei, Software zu schreiben, die:

- Vollständig
  - : Django folgt der Philosophie "Batteries included" und bietet fast alles, was Entwickler "out of the box" benötigen könnten. Da alles, was Sie brauchen, Teil des einen "Produkts" ist, arbeitet alles nahtlos zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) verwendet, um fast jede Art von Website zu erstellen – von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework zusammenarbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Optionen für fast jede gewünschte Funktionalität (z. B. mehrere beliebte Datenbanken, Template-Engines usw.), kann aber auch erweitert werden, um bei Bedarf andere Komponenten zu verwenden.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das darauf ausgelegt ist, "die richtigen Dinge" zu tun, um die Website automatisch zu schützen. Beispielsweise bietet Django eine sichere Möglichkeit zur Verwaltung von Benutzerkonten und Passwörtern und vermeidet häufige Fehler wie das Platzieren von Sitzungsinformationen in Cookies, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel, und die tatsächlichen Daten werden in der Datenbank gespeichert) oder das direkte Speichern von Passwörtern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der durch das Senden des Passworts durch eine [kryptographische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) erstellt wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion führt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Da die Funktion jedoch "einseitig" ist, ist es selbst dann, wenn ein gespeicherter Hash-Wert kompromittiert wurde, für einen Angreifer schwierig, das ursprüngliche Passwort herauszufinden._

    Django ermöglicht standardmäßig den Schutz vor vielen Sicherheitslücken, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Datenverkehr skaliert werden kann, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbankserver oder Anwendungsserver. Einige der belebtesten Websites haben Django erfolgreich skalieren können, um ihren Anforderungen gerecht zu werden (z. B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Verwendung von Designprinzipien und -mustern geschrieben, die zur Erstellung von wartbarem und wiederverwendbarem Code ermutigen. Insbesondere wird das Don't Repeat Yourself (DRY)-Prinzip verwendet, sodass keine unnötige Duplikation stattfindet, was den Codeumfang reduziert. Django fördert auch die Gruppierung verwandter Funktionen in wiederverwendbare "Anwendungen" und auf niedrigerer Ebene die Gruppierung verwandten Codes in Module (im Sinne des {{Glossary("MVC", "Model View Controller (MVC)")}}-Musters).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht auf eine bestimmte Server-Plattform beschränkt sind und Ihre Anwendungen auf vielen verschiedenen Linux-Ausführungen, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastruktur und Dokumentation für das Hosten von Django-Sites bereitstellen.

## Woher stammt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Pflege von Zeitungswebsites verantwortlich war. Nachdem sie eine Anzahl von Websites erstellt hatten, begann das Team, viel gemeinsamen Code und Designmuster herauszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungs-Framework, das als "Django"-Projekt im Juli 2005 open-sourced wurde.

Django ist weiterhin gewachsen und hat sich verbessert, von seiner ersten Meilensteinversion (1.0) im September 2008 bis hin zur Version 5.0 Ende 2023. Jede Version hat neue Funktionen und Fehlerbehebungen hinzugefügt, die von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Einführung von "generischen" View-Funktionen und -Klassen reichen (die die Menge des Codes reduzieren, die Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Schauen Sie sich die [Release Notes](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit investiert wird, um Django besser zu machen.

Django ist jetzt ein florierendes, kollaboratives Open-Source-Projekt mit vielen Tausend Nutzern und Mitwirkenden. Während es noch einige Funktionen gibt, die seine Herkunft widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine sofort verfügbare und definitive Messung der Popularität von serverseitigen Frameworks (obwohl Sie die Popularität durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und Stack Overflow-Fragen für jede Plattform schätzen können). Eine bessere Frage ist, ob Django "beliebt genug" ist, um die Probleme weniger populärer Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es Möglichkeiten, bezahlte Arbeit zu erhalten, wenn Sie Django lernen?

Basierend auf der Anzahl von hochkarätigen Websites, die Django verwenden, der Anzahl von Personen, die zum Codebase beitragen, und der Anzahl von Personen, die sowohl kostenlosen als auch kostenpflichtigen Support anbieten, ist Django ein beliebtes Framework!

Hochkarätige Websites, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django "opinionated"?

Web-Frameworks bezeichnen sich oft als "opinionated" oder "unopinionated".

Opinionated Frameworks sind solche mit Meinungen darüber, wie eine bestimmte Aufgabe "richtig" gehandhabt werden sollte. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen einer bestimmten Art), weil der richtige Weg, etwas zu tun, normalerweise gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und neigen dazu, weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze zu bieten.

Unopinionated Frameworks hingegen haben weit weniger Einschränkungen für den besten Weg, Komponenten zusammenzukleben, um ein Ziel zu erreichen, oder sogar welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die geeignetsten Werkzeuge zu verwenden, um eine bestimmte Aufgabe abzuschließen, allerdings auf Kosten, dass Sie diese Komponenten selbst finden müssen.

Django ist "weitgehend opinionated" und liefert daher das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten für die meisten Aufgaben der Webentwicklung und eine (oder zwei) bevorzugte Möglichkeiten, sie zu verwenden. Durch die entkoppelte Architektur von Django können Sie jedoch normalerweise aus einer Reihe von verschiedenen Optionen wählen oder bei Bedarf Unterstützung für völlig neue hinzufügen.

## Wie sieht Django-Code aus?

In einer herkömmlichen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder einem anderen Client). Wenn eine Anfrage empfangen wird, ermittelt die Anwendung basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten, was benötigt wird. Abhängig von den Anforderungen liest oder schreibt sie möglicherweise Informationen aus einer Datenbank oder führt andere Aufgaben aus, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück, oft durch dynamische Erstellung einer HTML-Seite, die der Browser anzeigen kann, durch Einfügen der abgerufenen Daten in Platzhalter in einem HTML-Template.

Django-Webanwendungen gruppieren den Code, der diese Schritte ausführt, typischerweise in separate Dateien:

![Django - Dateien für Views, Modell, URLs, Template](basic-django.png)

- **URLs**: Obwohl es möglich ist, Anfragen von jeder einzelnen URL über eine einzelne Funktion zu verarbeiten, ist es viel wartbarer, eine separate View-Funktion für die Handhabung jeder Ressource zu schreiben. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anfrage-URL an die entsprechende Ansicht weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, abgleichen und diese als Daten an eine View-Funktion übergeben.
- **View**: Eine View ist eine Anfrage-Handler-Funktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen auf die zur Erfüllung der Anfragen benötigten Daten über _Modelle_ zu und delegieren das Formatieren der Antworten an _Templates_.
- **Modelle**: Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen bereitstellen, um Datensätze in der Datenbank zu verwalten (hinzufügen, ändern, löschen) und abzufragen.
- **Templates**: Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (z.B. einer HTML-Seite), mit Platzhaltern, die tatsächlichen Inhalt darstellen. Eine _View_ kann eine HTML-Seite dynamisch mit einem HTML-Template erstellen und diese mit Daten aus einem _Modell_ befüllen. Ein Template kann zur Definition der Struktur jeder Art von Datei verwendet werden; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als die "Model View Template (MVT)"-Architektur. Sie hat viele Gemeinsamkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}}-Architektur.

In den folgenden Abschnitten erhalten Sie einen Eindruck davon, wie diese Hauptteile einer Django-Anwendung aussehen könnten (wir gehen später im Kurs detaillierter darauf ein, sobald wir eine Entwicklungsumgebung eingerichtet haben).

### Die Anfrage an die richtige View senden (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im untenstehenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifischen URL-_Mustern_) und entsprechenden Ansichtsfunktionen.
Wenn eine HTTP-Anfrage mit einer URL empfangen wird, die einem angegebenen Muster entspricht, wird die zugehörige Ansichtsfunktion aufgerufen und die Anfrage übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei Elemente durch Kommas getrennt sind und ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (ein Muster), das abgeglichen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und der Ansichts-Funktion als benannte Argumente übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichsansatz, der als regulärer Ausdruck bekannt ist. Wir werden später in einem Artikel über diese sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` gefunden werden kann (d.h. in einer Datei namens `views.py`)

### Die Anfrage bearbeiten (views.py)

Views sind das Herzstück der Webanwendung und empfangen HTTP-Anfragen von Web-Clients und geben HTTP-Antworten zurück. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Templates zu rendern usw.

Das folgende Beispiel zeigt eine minimale Ansichtsfunktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle Ansichtsfunktionen erhält sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage, und unsere Antwort gibt eine hartcodierte Zeichenkette zurück. Wir zeigen Ihnen eine Anfrage, die etwas Interessanteres macht, in einem späteren Abschnitt.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer Ansicht verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` wie oben gezeigt deklariert, mit benannten Parametern, die in Klammern nach dem Funktionsnamen aufgelistet sind; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen innerhalb dieses besonderen Blocks liegen (die obligatorische Einrückung ist ein Hauptmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und durchsuchen Daten durch Python-Objekte, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feld*typen* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Auswahllisten, Hilfetext zur Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank – Sie können eine aus mehreren im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie gewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie überhaupt nicht direkt mit ihr sprechen – Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django kümmert sich um die gesamte "Drecksarbeit" der Kommunikation mit der Datenbank für Sie.

Das folgende Code-Snippet zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse ist von der Django-Klasse `models.Model` abgeleitet. Es definiert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` kann einen von mehreren Werten haben, daher definieren wir es als ein Auswahlfeld und geben eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten zusammen mit einem Standardwert an.

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
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zum Arbeiten mit diesen Daten enthalten. Objekte können auch von anderen Objekten erben/vererben/ableiten, was es ermöglicht, gemeinsames Verhalten zwischen verwandten Objekten zu teilen. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps anhand des Modells in der Klasse erstellen.
>
> Hier haben wir zum Beispiel eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass es sich um ein Modell handelt und alle Methoden eines Modells enthält, wir können ihm aber auch eigene spezialisierte Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigen wird, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API, um in der zugehörigen Datenbank zu suchen. Diese kann gleichzeitig gegen eine Reihe von Feldern unter Verwendung unterschiedlicher Kriterien abgleichen (z. B. exakt, nicht auf Groß- und Kleinschreibung achten, größer als usw.) und kann komplexe Aussagen unterstützen (z. B. kann eine Suche nach U11-Teams spezifiziert werden, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Code-Schnipsel zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` enthält (beachten Sie, wie diese Kriterien als Argument an die `filter()`-Funktion übergeben werden, wobei der Feldname und der Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesandt wird. Diese Funktion ist ein _Shortcut_; sie erstellt eine HTML-Datei durch die Kombination eines spezifizierten HTML-Templates und einiger Daten, die in das Template zu integrieren sind (bereitgestellt in der Variable namens `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten einfügt, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Templatesysteme erlauben es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren und dabei Platzhalter für Daten zu verwenden, die eingefügt werden, wenn eine Seite generiert wird. Templates werden oft zur Erstellung von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen. Django unterstützt sowohl sein natives Templatingsystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 "out of the box" (es kann auch so eingestellt werden, dass es andere Systeme bei Bedarf unterstützt).

Der Code-Schnipsel zeigt, wie das HTML-Template, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird, aussehen könnte. Dieses Template wurde mit der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` haben wird (diese ist in der `context`-Variablen innerhalb der `render()`-Funktion oben enthalten). Innerhalb des HTML-Skeletons haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert jedes Teams in einem `{{htmlelement("li")}}`-Element an.

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

## Was können Sie sonst noch tun?

Die vorhergehenden Abschnitte zeigen die Hauptfunktionen, die Sie in fast jeder Webanwendung verwenden werden: URL-Zuordnung, Views, Modelle und Templates. Nur einige der anderen von Django bereitgestellten Funktionen umfassen:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Formularerstellung, -validierung und -verarbeitung.
- **Benutzerauthentifizierung und Berechtigungen**: Django beinhaltet ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das mit Blick auf die Sicherheit entwickelt wurde.
- **Caching**: Das dynamische Erstellen von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, damit Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf neu gerendert wird.
- **Verwaltungsseite**: Die Django-Verwaltungsseite ist standardmäßig enthalten, wenn Sie eine App mit dem Grundgerüst erstellen. Sie macht es trivial einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um beliebige Datenmodelle Ihrer Website zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und zu servieren. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die nur Daten zur Konsumierung durch andere Anwendungen oder Websites bereitstellt und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, bei der der Client-seitige Code die gesamte Datenanzeige übernimmt.

## Zusammenfassung

Gratulation, Sie haben den ersten Schritt in Ihrer Django-Reise abgeschlossen! Sie sollten jetzt die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und grob wissen, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Programmiersprache Python gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben oben bereits einige echte Django-Codes gesehen, aber im Gegensatz zu clientseitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django")}}
