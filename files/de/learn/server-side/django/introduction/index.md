---
title: Einführung in Django
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der wichtigsten Bausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben werden, um es zu testen).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis der <a href="/de/docs/Learn/Server-side/First_steps">serverseitigen Website-Programmierung</a>, insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Vertrautheit mit Django, seinen Funktionalitäten und den Hauptbausteinen einer Django-Anwendung zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein hochrangiges Python-Web-Framework, das eine schnelle Entwicklung sicherer und wartbarer Webseiten ermöglicht. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen viel von der Arbeit der Webentwicklung ab, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und quelloffen, hat eine florierende und aktive Community, großartige Dokumentation und viele Optionen für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Komplett ist
  - : Django folgt der Philosophie "Batterien sind enthalten" und bietet fast alles, was Entwickler „out of the box“ benötigen könnten. Da alles, was Sie brauchen, Teil des einen "Produkts" ist, funktioniert alles nahtlos zusammen, folgt konsistenten Designprinzipien und verfügt über umfangreiche und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) verwendet, um fast jede Art von Webseite zu erstellen — von Content-Management-Systemen und Wikis bis hin zu sozialen Netzwerken und Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es zwar Auswahlmöglichkeiten für fast jede Funktionalität, die Sie möglicherweise benötigen (z.B. mehrere beliebte Datenbanken, Template-Engines, usw.), es kann aber auch erweitert werden, um bei Bedarf andere Komponenten zu verwenden.

- Sicher

  - : Django hilft Entwicklern, viele häufige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das entwickelt wurde, um "die richtigen Dinge" zu tun und die Website automatisch zu schützen. Beispielsweise bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten, um häufige Fehler wie das Speichern von Sitzungsinformationen in Cookies zu vermeiden, wo sie anfällig sind (stattdessen enthalten Cookies nur einen Schlüssel und die tatsächlichen Daten werden in der Datenbank gespeichert) oder Passwörter direkt zu speichern, statt eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der erzeugt wird, indem das Passwort durch eine [kryptografische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) gesendet wird. Django kann prüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion laufen lässt und das Ergebnis mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der „Einweg“-Natur der Funktion ist es jedoch selbst bei kompromittiertem Hash-Wert schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden._

    Django ermöglicht den Schutz vor vielen Schwachstellen standardmäßig, darunter SQL-Injection, Cross-Site Scripting, Cross-Site Request Forgery und {{Glossary("Clickjacking", "Clickjacking")}} (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Details zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Datenverkehr skalieren kann, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungs-Server. Einige der meistbesuchten Websites haben Django erfolgreich skaliert, um ihren Anforderungen gerecht zu werden (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird nach Designprinzipien und Mustern geschrieben, die dazu ermutigen, wartbaren und wiederverwendbaren Code zu erstellen. Insbesondere nutzt es das Don't Repeat Yourself (DRY)-Prinzip, um unnötige Duplizierungen zu vermeiden und die Menge des Codes zu reduzieren. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbaren "Anwendungen" und gruppiert auf niedrigerer Ebene verwandten Code in Modulen (nach dem {{Glossary("MVC", "Model View Controller (MVC)")}}-Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Serverplattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die häufig spezifische Infrastrukturen und Dokumentationen für das Hosting von Django-Sites bereitstellen.

## Woher kommt Django?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Wartung von Zeitungswebsites verantwortlich war. Nachdem sie eine Vielzahl von Seiten erstellt hatten, begann das Team, gemeinsamen Code und Designmuster auszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungs-Framework, das im Juli 2005 als "Django"-Projekt als Open Source veröffentlicht wurde.

Django hat sich kontinuierlich weiterentwickelt und verbessert, von seiner ersten Meilensteinveröffentlichung (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung hat neue Funktionalitäten und Fehlerbehebungen hinzugefügt, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Hinzufügung von "generischen" Ansichts-Funktionen und Klassen (die die Menge des Codes reduzieren, den Entwickler für eine Reihe von Programmieraufgaben schreiben müssen).

> [!NOTE]
> Sehen Sie sich die [Versionshinweise](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit in die Verbesserung von Django investiert wird.

Django ist jetzt ein blühendes, kollaboratives Open-Source-Projekt mit vielen Tausenden von Nutzern und Mitwirkenden. Obwohl es immer noch einige Funktionen hat, die seinen Ursprung widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie populär ist Django?

Es gibt keine unmittelbar verfügbare und endgültige Messung der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit durch Mechanismen wie das Zählen der GitHub-Projekte und Stack Overflow-Fragen für jede Plattform abschätzen können). Eine bessere Frage ist, ob Django "beliebt genug" ist, um Probleme unpopulärer Plattformen zu vermeiden. Entwickelt es sich weiter? Kann man Hilfe bekommen, wenn man sie braucht? Gibt es eine Möglichkeit, bezahlte Arbeit zu finden, wenn man Django lernt?

Basierend auf der Anzahl der hochkarätigen Websites, die Django nutzen, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist Django ein beliebtes Framework!

Hochkarätige Sites, die Django verwenden, umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "unmeinungsstark".

Meinungsstarke Frameworks sind solche mit Meinungen darüber, wie eine bestimmte Aufgabe zu handhaben ist. Sie unterstützen häufig die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen einer bestimmten Art), weil der richtige Weg, um etwas zu tun, normalerweise gut verstanden und gut dokumentiert ist. Sie können jedoch weniger flexibel sein, um Probleme außerhalb ihres Hauptbereichs zu lösen, und tendieren dazu, weniger Auswahlmöglichkeiten für die verwendeten Komponenten und Ansätze zu bieten.

Unmeinungsstarke Frameworks hingegen haben weit weniger Einschränkungen bezüglich der besten Art und Weise, Komponenten zusammenzufügen, um ein Ziel zu erreichen, oder welche Komponenten verwendet werden sollten. Sie erleichtern es Entwicklern, die geeignetsten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, wenn auch auf Kosten der Tatsache, dass Sie diese Komponenten selbst finden müssen.

Django ist "etwas meinungsstark" und bietet daher das "beste aus beiden Welten". Es bietet eine Reihe von Komponenten, um die meisten Aufgaben der Webentwicklung zu bewältigen, und eine (oder zwei) bevorzugte Wege, sie zu verwenden. Aufgrund der entkoppelten Architektur von Django können Sie in der Regel aus einer Reihe verschiedener Optionen auswählen oder Unterstützung für völlig neue hinzufügen, wenn gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengetriebenen Website wartet eine Webanwendung auf HTTP-Anfragen vom Webbrowser (oder anderen Clients). Bei Empfang einer Anfrage ermittelt die Anwendung, was basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten benötigt wird. Abhängig davon, was erforderlich ist, kann sie dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die erforderlich sind, um die Anfrage zu erfüllen. Die Anwendung kehrt dann mit einer Antwort zum Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite für den Browser, indem die abgerufenen Daten in Platzhalter in einer HTML-Vorlage eingefügt werden.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte behandelt, typischerweise in separate Dateien:

![Django - Dateien für Ansichten, Modell, URLs, Vorlage](basic-django.png)

- **URLs:** Es ist zwar möglich, Anfragen von jeder einzelnen URL über eine einzige Funktion zu verarbeiten, aber es ist viel wartbarer, eine separate Ansichtsfunktion zu schreiben, um jede Ressource zu handhaben. Ein URL-Mapper wird verwendet, um HTTP-Anfragen basierend auf der Anfrage-URL an die entsprechende Ansicht weiterzuleiten. Der URL-Mapper kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, erkennen und diese als Daten an eine Ansichtsfunktion übergeben.
- **Ansicht:** Eine Ansicht ist eine Anfragehandler-Funktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Ansichten greifen auf die Daten zu, die zur Erfüllung von Anfragen benötigt werden, _durch Modelle_ und delegieren das Formatieren der Antwort an _Vorlagen_.
- **Modelle:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen bereitstellen, um Datensätze in der Datenbank zu verwalten (hinzufügen, ändern, löschen) und abzufragen.
- **Vorlagen:** Eine Vorlage ist eine Textdatei, die die Struktur oder das Layout einer Datei definiert (wie eine HTML-Seite) und Platzhalter verwendet, um den tatsächlichen Inhalt darzustellen. Eine _Ansicht_ kann eine HTML-Seite dynamisch unter Verwendung einer HTML-Vorlage erstellen, die mit Daten aus einem _Modell_ gefüllt ist. Eine Vorlage kann verwendet werden, um die Struktur jeder Art von Datei zu definieren; sie muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)"-Architektur. Sie hat viele Ähnlichkeiten mit der bekannteren {{Glossary("MVC", "Model View Controller")}}-Architektur.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs, wenn wir eine Entwicklungsumgebung eingerichtet haben, mehr ins Detail gehen).

### Die Anfrage an die richtige Ansicht senden (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im unten stehenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (spezifische URL-_Muster_) und entsprechenden Ansichtsfunktionen.
Wenn eine HTTP-Anfrage empfangen wird, die eine URL enthält, die einem bestimmten Muster entspricht, dann wird die zugehörige Ansichtsfunktion aufgerufen und die Anfrage übergeben.

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/$', views.best),
]
```

Das `urlpatterns`-Objekt ist eine Liste von `path()` und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei Elemente durch Kommas getrennt sind und ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist eine Route (Muster), die abgeglichen wird. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und als benannte Argumente an die Ansichtsfunktion übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Methodenansatz namens Reguläre Ausdrücke. Wir werden später in einem weiteren Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` zeigt an, dass die Funktion `book_detail()` genannt wird und sich in einem Modul namens `views` befindet (d.h. in einer Datei namens `views.py`).

### Die Anfrage bearbeiten (views.py)

Ansichten sind das Herzstück der Webanwendung, sie erhalten HTTP-Anfragen von Webclients und geben HTTP-Antworten zurück. Dazwischen verwenden sie die anderen Ressourcen des Frameworks, um auf Datenbanken zuzugreifen, Vorlagen zu rendern usw.

Das folgende Beispiel zeigt eine minimale Ansichtsfunktion `index()`, die von unserem URL-Mapper im vorherigen Abschnitt aufgerufen werden könnte. Wie alle Ansichtsfunktionen erhält sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall machen wir nichts mit der Anfrage, und unsere Antwort gibt einen fest codierten String zurück. Wir zeigen Ihnen später eine Anfrage, die etwas Interessanteres macht.

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
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind, die wir in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserer Ansicht verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, wobei benannte Parameter in Klammern nach dem Funktionsnamen aufgelistet sind; die gesamte Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingezogen** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block stehen (obligatorische Einrückung ist ein wesentliches Merkmal von Python und ein Grund dafür, dass Python-Code so leicht zu lesen ist).

Ansichten werden normalerweise in einer Datei namens **views.py** gespeichert.

### Datenmodelle definieren (models.py)

Django-Webanwendungen verwalten und fragen Daten durch Python-Objekte ab, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feldtypen und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren als Teil Ihrer Projekteinstellungen wählen. Wenn Sie ausgewählt haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr sprechen — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django übernimmt die gesamte "Drecksarbeit" der Kommunikation mit der Datenbank für Sie.

Der Codeausschnitt unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse ist von der Django-Klasse `models.Model` abgeleitet. Es definiert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` kann einer von mehreren Werten sein, daher definieren wir sie als Auswahlfeld und bieten eine Zuordnung zwischen anzuzeigenden Auswahlmöglichkeiten und zu speichernden Daten, zusammen mit einem Standardwert.

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
> Python unterstützt "objektorientierte Programmierung", einen Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zum Arbeiten an diesen Daten enthalten. Objekte können auch von anderen Objekten erben/erweitert/abgeleitet werden, sodass gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ der Art von Objekt basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir hier zum Beispiel eine `Team`-Klasse, die von der `Model`-Klasse abgeleitet ist. Das bedeutet, dass sie ein Modell ist und alle Methoden eines Modells enthält, aber wir können ihr auch eigene spezialisierte Funktionen geben. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, wobei wir ihnen spezifische Namen geben. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Daten abfragen (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zur Durchsuchung der zugehörigen Datenbank. Dies kann gegen eine Vielzahl von Feldern gleichzeitig abgeglichen werden, indem verschiedene Kriterien verwendet werden (z. B. exakt, groß-/kleinschreibungsunabhängig, größer als usw.), und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine Ansichtsfunktion (Ressourcenhandler) zum Anzeigen aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modellabfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das `team_level`-Feld genau den Text `U09` enthält (beachten Sie, wie dieses Kriterium der `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Abgleichstyp durch einen doppelten Unterstrich getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie eine bestimmte HTML-Vorlage mit einigen einzufügenden Daten kombiniert (bereitgestellt in der Variablen mit dem Namen `context`). Im nächsten Abschnitt zeigen wir, wie die Vorlage mit den Daten gefüllt wird, um das HTML zu erstellen.

### Daten rendern (HTML-Vorlagen)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments anzugeben, indem Sie Platzhalter für Daten verwenden, die gefüllt werden, wenn eine Seite generiert wird. Vorlagen werden oft zur Erstellung von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen. Django unterstützt sowohl sein eigenes Templating-System als auch eine andere beliebte Python-Bibliothek namens Jinja2 von Haus aus (es kann auch so angepasst werden, dass andere Systeme bei Bedarf unterstützt werden).

Der Codeausschnitt zeigt, wie die HTML-Vorlage aussieht, die von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wird. Diese Vorlage wurde unter der Annahme geschrieben, dass sie beim Rendering Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese befindet sich in der `context`-Variablen innerhalb der `render()`-Funktion oben). In das HTML-Gerüst haben wir einen Ausdruck, der zuerst prüft, ob die `youngest_teams`-Variable existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt die Vorlage den `team_name`-Wert jedes Teams in einem `<li>`-Element an.

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

Die vorangegangenen Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Zuordnung, Ansichten, Modelle und Vorlagen. Nur einige der anderen Dinge, die Django bietet, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Formularkreation, -validierung und -verarbeitung.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes System zur Benutzerauthentifizierung und Berechtigungen, das mit Blick auf Sicherheit entwickelt wurde.
- **Caching**: Das dynamische Erstellen von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie ganze oder Teile einer gerenderten Seite speichern können, damit sie nur bei Bedarf neu gerendert wird.
- **Administrationsseite**: Die Django-Administrationsseite ist standardmäßig enthalten, wenn Sie eine App mit dem Basisskelett erstellen. Es macht es trivial einfach, eine Administrationsseite für Site-Administratoren bereitzustellen, um alle Datenmodelle auf Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Daten serialisieren**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die rein als Datenbereitsteller für andere Anwendungen oder Seiten dient und selbst nichts anzeigt) oder wenn Sie eine Website erstellen, auf der der klientseitige Code alle Datenrenders erledigt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Django-Reise erfolgreich abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und ungefähr wissen, wie die einzelnen Hauptteile einer Django-App aussehen könnten. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben bereits oben einige echte Django-Codes gesehen, aber im Gegensatz zu Client-seitigem Code müssen Sie eine Entwicklungsumgebung einrichten, um ihn auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
