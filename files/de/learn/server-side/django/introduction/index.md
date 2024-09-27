---
title: Einführung in Django
slug: Learn/Server-side/Django/Introduction
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}

In diesem ersten Artikel zu Django beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht.

Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln können. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie sie testen können).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein allgemeines Verständnis von <a href="/de/docs/Learn/Server-side/First_steps">serverseitiger Webseitenprogrammierung</a> und insbesondere der Mechanismen von <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server-Interaktionen in Websites</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit Django erlangen, welche Funktionalitäten es bietet und die Hauptbausteine einer Django-Anwendung kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

## Was ist Django?

Django ist ein High-Level-Python-Web-Framework, das die schnelle Entwicklung sicherer und wartbarer Websites ermöglicht. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen einen Großteil der Mühen der Webentwicklung ab, so dass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und quelloffen und verfügt über eine florierende und aktive Community, großartige Dokumentation und viele Möglichkeiten für kostenlose und kostenpflichtige Unterstützung.

Django hilft Ihnen, Software zu schreiben, die:

- Vollständig ist
  - : Django folgt der "Batterien enthalten"-Philosophie und bietet fast alles, was Entwickler "out of the box" tun möchten. Da alles, was Sie brauchen, Teil eines "Produkts" ist, arbeitet es nahtlos zusammen, folgt konsistenten Designprinzipien und verfügt über umfassende und [aktuelle Dokumentation](https://docs.djangoproject.com/en/stable/).
- Vielseitig

  - : Django kann (und wurde) verwendet werden, um fast jede Art von Website zu erstellen — von Content-Management-Systemen und Wikis über soziale Netzwerke bis hin zu Nachrichtenseiten. Es kann mit jedem clientseitigen Framework arbeiten und Inhalte in fast jedem Format liefern (einschließlich HTML, RSS-Feeds, JSON und XML).

    Intern bietet es Auswahlmöglichkeiten für fast jede Funktionalität, die Sie möglicherweise wünschen (z.B. mehrere beliebte Datenbanken, Template-Engines usw.), kann jedoch auch erweitert werden, um bei Bedarf andere Komponenten zu verwenden.

- Sicher

  - : Django hilft Entwicklern, viele gängige Sicherheitsfehler zu vermeiden, indem es ein Framework bereitstellt, das so konzipiert wurde, dass es automatisch "das Richtige" tut, um die Website zu schützen. Zum Beispiel bietet Django eine sichere Möglichkeit, Benutzerkonten und Passwörter zu verwalten, wodurch häufige Fehler wie das Ablegen von Sitzungsinformationen in Cookies, bei denen sie anfällig sind, vermieden werden (anstattdessen enthalten Cookies nur einen Schlüssel, und die eigentlichen Daten werden in der Datenbank gespeichert) oder Passwörter direkt zu speichern anstelle eines Passwort-Hashes.

    _Ein Passwort-Hash ist ein Wert fester Länge, der erstellt wird, indem das Passwort durch eine [kryptographische Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) gesendet wird. Django kann überprüfen, ob ein eingegebenes Passwort korrekt ist, indem es es durch die Hash-Funktion führt und die Ausgabe mit dem gespeicherten Hash-Wert vergleicht. Aufgrund der "Einweg"-Natur der Funktion ist es jedoch selbst dann, wenn ein gespeicherter Hash-Wert kompromittiert wird, schwierig für einen Angreifer, das ursprüngliche Passwort herauszufinden._

    Django bietet standardmäßig Schutz gegen viele Schwachstellen, einschließlich SQL-Injection, Cross-Site-Scripting, Cross-Site-Request-Forgery und [Clickjacking](/de/docs/Glossary/Clickjacking) (siehe [Website-Sicherheit](/de/docs/Learn/Server-side/First_steps/Website_security) für weitere Einzelheiten zu solchen Angriffen).

- Skalierbar
  - : Django verwendet eine komponentenbasierte "[Shared-Nothing](https://en.wikipedia.org/wiki/Shared_nothing_architecture)"-Architektur (jeder Teil der Architektur ist unabhängig von den anderen und kann daher bei Bedarf ersetzt oder geändert werden). Eine klare Trennung zwischen den verschiedenen Teilen bedeutet, dass es für erhöhten Traffic skaliert werden kann, indem Hardware auf jeder Ebene hinzugefügt wird: Caching-Server, Datenbank-Server oder Anwendungsserver. Einige der meistbesuchten Websites haben erfolgreich Django skaliert, um ihren Anforderungen gerecht zu werden (z.B. Instagram und Disqus, um nur zwei zu nennen).
- Wartbar
  - : Django-Code wird unter Anwendung von Design-Prinzipien und Mustern geschrieben, die die Erstellung von wartbarem und wiederverwendbarem Code fördern. Insbesondere nutzt es das Don't Repeat Yourself (DRY)-Prinzip, um unnötige Duplikationen zu vermeiden und die Menge des Codes zu reduzieren. Django fördert auch die Gruppierung verwandter Funktionalitäten in wiederverwendbare "Anwendungen" und gruppiert auf niedrigerer Ebene verwandten Code in Modulen (nach dem [Model View Controller (MVC)](/de/docs/Glossary/MVC)-Muster).
- Portabel
  - : Django ist in Python geschrieben, das auf vielen Plattformen läuft. Das bedeutet, dass Sie nicht an eine bestimmte Server-Plattform gebunden sind und Ihre Anwendungen auf vielen Varianten von Linux, Windows und macOS ausführen können. Darüber hinaus wird Django von vielen Webhosting-Anbietern gut unterstützt, die oft spezifische Infrastruktur und Dokumentation für das Hosting von Django-Sites bereitstellen.

## Woher kommt es?

Django wurde ursprünglich zwischen 2003 und 2005 von einem Webteam entwickelt, das für die Erstellung und Wartung von Zeitungs-Websites verantwortlich war. Nachdem eine Reihe von Sites erstellt wurde, begann das Team, viel gemeinsamen Code und Designmuster herauszufiltern und wiederzuverwenden. Dieser gemeinsame Code entwickelte sich zu einem generischen Webentwicklungs-Framework, das im Juli 2005 als "Django"-Projekt als Open Source veröffentlicht wurde.

Django ist weiterhin gewachsen und hat sich verbessert, von seiner ersten Meilenstein-Version (1.0) im September 2008 bis zur Version 5.0 Ende 2023. Jede Veröffentlichung brachte neue Funktionalitäten und Fehlerbehebungen, von der Unterstützung neuer Datenbanktypen, Template-Engines und Caching bis hin zur Einführung "generischer" View-Funktionen und -Klassen (die die Menge des Codes, den Entwickler für eine Reihe von Programmieraufgaben schreiben müssen, reduzieren).

> [!NOTE]
> Sehen Sie sich die [Releasenotizen](https://docs.djangoproject.com/en/stable/releases/) auf der Django-Website an, um zu sehen, was sich in den letzten Versionen geändert hat und wie viel Arbeit investiert wird, um Django zu verbessern.

Django ist jetzt ein florierendes, kollaboratives Open-Source-Projekt mit vielen Tausenden von Benutzern und Mitwirkenden. Während es immer noch einige Funktionen hat, die seine Herkunft widerspiegeln, hat sich Django zu einem vielseitigen Framework entwickelt, das in der Lage ist, jede Art von Website zu entwickeln.

## Wie beliebt ist Django?

Es gibt keine leicht verfügbaren und endgültigen Messungen der Beliebtheit von serverseitigen Frameworks (obwohl Sie die Beliebtheit durch Mechanismen wie das Zählen der Anzahl von GitHub-Projekten und StackOverflow-Fragen für jede Plattform abschätzen können). Eine bessere Frage ist, ob Django "beliebt genug" ist, um die Probleme unpopulärer Plattformen zu vermeiden. Entwickelt es sich weiter? Können Sie Hilfe bekommen, wenn Sie sie brauchen? Gibt es die Möglichkeit, bezahlte Arbeit zu bekommen, wenn Sie Django lernen?

Basierend auf der Anzahl hochkarätiger Sites, die Django verwenden, der Anzahl der Personen, die zum Code beitragen, und der Anzahl der Personen, die sowohl kostenlose als auch kostenpflichtige Unterstützung bieten, ist Django definitiv ein beliebtes Framework!

Hochkarätige Sites, die Django verwenden, sind unter anderem: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack (Quelle: [Django-Übersichtsseite](https://www.djangoproject.com/start/overview/)).

## Ist Django meinungsstark?

Web-Frameworks bezeichnen sich oft als "meinungsstark" oder "meinungsarm".

Meinungsstarke Frameworks sind solche, die Meinungen darüber haben, wie eine bestimmte Aufgabe "richtig" zu handhaben ist. Sie unterstützen oft die schnelle Entwicklung _in einem bestimmten Bereich_ (Lösung von Problemen eines bestimmten Typs), da der richtige Weg, etwas zu tun, normalerweise gut verstanden und dokumentiert ist. Allerdings können sie weniger flexibel bei der Lösung von Problemen außerhalb ihres Hauptbereichs sein und neigen dazu, weniger Auswahlmöglichkeiten für die zu verwendenden Komponenten und Ansätze zu bieten.

Meinungsarme Frameworks hingegen haben weit weniger Einschränkungen bezüglich des besten Weges, Komponenten zusammenzukleben, um ein Ziel zu erreichen, oder welche Komponenten überhaupt verwendet werden sollten. Sie erleichtern es Entwicklern, die am besten geeigneten Werkzeuge zu verwenden, um eine bestimmte Aufgabe zu erledigen, allerdings mit dem Nachteil, dass Sie diese Komponenten selbst finden müssen.

Django ist "einigermaßen meinungsstark" und liefert damit das "Beste aus beiden Welten". Es bietet eine Reihe von Komponenten, um die meisten Aufgaben der Webentwicklung zu bewältigen, und eine (oder zwei) bevorzugte Wege, um sie zu verwenden. Jedoch ermöglicht es Djangos entkoppelte Architektur normalerweise, aus einer Reihe verschiedener Optionen auszuwählen oder Unterstützung für komplett neue hinzuzufügen, falls gewünscht.

## Wie sieht Django-Code aus?

In einer traditionellen datengesteuerten Website wartet eine Webanwendung auf HTTP-Anfragen des Webbrowsers (oder eines anderen Clients). Wenn eine Anfrage empfangen wird, arbeitet die Anwendung heraus, was basierend auf der URL und möglicherweise Informationen in `POST`-Daten oder `GET`-Daten benötigt wird. Je nach Anforderung kann es dann Informationen aus einer Datenbank lesen oder schreiben oder andere Aufgaben ausführen, die zur Erfüllung der Anfrage erforderlich sind. Die Anwendung gibt dann eine Antwort an den Webbrowser zurück und erstellt oft dynamisch eine HTML-Seite für den Browser, indem die abgerufenen Daten in Platzhalter in einem HTML-Template eingefügt werden.

Django-Webanwendungen gruppieren den Code, der jeden dieser Schritte ausführt, typischerweise in separate Dateien:

![Django - Dateien für Views, Modell, URLs, Template](basic-django.png)

- **URLs:** Auch wenn es möglich wäre, Anfragen von jeder einzelnen URL über eine einzige Funktion zu bearbeiten, ist es viel wartbarer, eine separate View-Funktion zu schreiben, um jede Ressource zu bearbeiten. Ein URL-Mapping wird verwendet, um HTTP-Anfragen basierend auf der Anforderungs-URL an den entsprechenden View weiterzuleiten. Das URL-Mapping kann auch bestimmte Muster von Zeichenfolgen oder Ziffern, die in einer URL erscheinen, zu einer View-Funktion als Daten übergeben.
- **View:** Ein View ist eine Anforderungshandler-Funktion, die HTTP-Anfragen empfängt und HTTP-Antworten zurückgibt. Views greifen auf die benötigten Daten zur Erfüllung der Anfragen über _Modelle_ zu und delegieren das Formatieren der Antwort an _Templates_.
- **Models:** Modelle sind Python-Objekte, die die Struktur der Daten einer Anwendung definieren und Mechanismen zum Verwalten (Hinzufügen, Ändern, Löschen) und Abfragen von Datensätzen in der Datenbank bereitstellen.
- **Templates:** Ein Template ist eine Textdatei, die die Struktur oder das Layout einer Datei (wie einer HTML-Seite) definiert, mit Platzhaltern, die den eigentlichen Inhalt repräsentieren. Ein _View_ kann eine HTML-Seite dynamisch mithilfe eines HTML-Templates erstellen und mit Daten aus einem _Modell_ füllen. Ein Template kann verwendet werden, um die Struktur jeder Art von Datei zu definieren; es muss nicht HTML sein!

> [!NOTE]
> Django bezeichnet diese Organisation als "Model View Template (MVT)"-Architektur. Sie weist viele Ähnlichkeiten mit der eher bekannten [Model View Controller](/de/docs/Glossary/MVC)-Architektur auf.

Die folgenden Abschnitte geben Ihnen eine Vorstellung davon, wie diese Hauptteile einer Django-App aussehen (wir werden später im Kurs, nachdem wir eine Entwicklungsumgebung eingerichtet haben, ausführlicher darauf eingehen).

### Weiterleiten der Anforderung an den richtigen View (urls.py)

Ein URL-Mapper wird typischerweise in einer Datei namens **urls.py** gespeichert.
Im folgenden Beispiel definiert der Mapper (`urlpatterns`) eine Liste von Zuordnungen zwischen _Routen_ (bestimmte URL-_Muster)_ und entsprechenden View-Funktionen.
Wenn eine HTTP-Anfrage empfangen wird, die mit einem bestimmten Muster übereinstimmt, wird die zugeordnete View-Funktion aufgerufen und die Anfrage übergeben.

````python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('book/<int:id>/', views.book_detail, name='book_detail'),
    path('catalog/', include('catalog.urls')),
    re_path(r'^([0-9]+)/

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei die Elemente durch Kommas getrennt werden und ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist ein Route (Muster), das übereinstimmt. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und der View-Funktion als benannte Argumente übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichs-Ansatz, der als regulärer Ausdruck bekannt ist. Wir werden später in einem Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` gefunden werden kann (d.h. innerhalb einer Datei namens `views.py`).

### Bearbeitung der Anforderung (views.py)

Views sind das Herz der Webanwendung, empfangen HTTP-Anfragen von Webclients und geben HTTP-Antworten zurück. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken, Templates usw. zuzugreifen.

Das Beispiel unten zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapping im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall tun wir nichts mit der Anforderung, und unsere Antwort gibt eine fest kodierte Zeichenfolge zurück. Wir werden Ihnen später eine Anforderung zeigen, die interessanter ist.

```python
# filename: views.py (Django view functions)

from django.http import HttpResponse

def index(request):
    # Get an HttpRequest - the request parameter
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Hello from Django!')
````

> [!NOTE]
> Ein bisschen Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind, und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserem View verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, wobei benannte Parameter in Klammern nach dem Funktionsnamen aufgelistet sind; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block sind (eine zwingende Einrückung ist ein Hauptmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Definition von Datenmodellen (models.py)

Django-Webanwendungen verwalten und durchsuchen Daten durch Python-Objekte, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feld*typs* und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Listen, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr kommunizieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt alle "dreckigen Arbeiten", die mit der Kommunikation mit der Datenbank verbunden sind, für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Es definiert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` kann einer von mehreren Werten sein, also definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen den anzuzeigenden Optionen und den zu speichernden Daten bereit, zusammen mit einem Standardwert.

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
> Python unterstützt "objektorientierte Programmierung", ein Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zur Verarbeitung dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/abgeleitet werden, wodurch gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir hier zum Beispiel eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Das bedeutet, dass es ein Modell ist und alle Methoden eines Modells enthalten wird, aber wir können ihm auch spezielle Funktionen hinzufügen. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Abfragen von Daten (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der zugehörigen Datenbank. Diese kann nach mehreren Feldern gleichzeitig mit verschiedenen Kriterien durchsucht werden (z.B. exakt, nicht case-sensitiv, größer als, usw.) und kann komplexe Aussagen unterstützen (z.B. können Sie eine Suche nach U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modell-Abfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das Feld `team_level` genau den Text `U09` enthält (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Abgleichtyp durch einen Doppelpunkt getrennt sind: **`team_level__exact`**).

```python
## filename: views.py

from django.shortcuts import render
from .models import Team

def index(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, '/best/index.html', context)
```

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie ein bestimmtes HTML-Template und einige Daten kombiniert, die in das Template eingefügt werden sollen (bereitgestellt in der Variable namens `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten einfügt, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite gefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen. Django unterstützt sowohl sein natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 out of the box (bei Bedarf können auch andere Systeme unterstützt werden).

Der Codeausschnitt zeigt, wie das HTML-Template aussehen könnte, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wurde. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese ist in der `context`-Variablen innerhalb der oben stehenden `render()`-Funktion enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und diese dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert jedes Teams in einem `<li>`-Element an.

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

## Was kann man sonst noch machen?

Die vorangegangenen Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Modelle und Templates. Einige der anderen Dinge, die Django bietet, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das unter Berücksichtigung der Sicherheit entwickelt wurde.
- **Caching**: Die dynamische Erstellung von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf erneut gerendert werden.
- **Administrationssite**: Die Django-Administrationssite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Skelett erstellen. Sie macht es trivial einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um Datenmodelle Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Serialisierung von Daten**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites konsumiert werden sollen, und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, auf der der Client-seitige Code die gesamte Datenpräsentation übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und ungefähr erkennen können, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben bereits einige echte Django-Codes oben gesehen, aber im Gegensatz zu Client-seitigen Codes müssen Sie eine Entwicklungsumgebung einrichten, um sie auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}, views.best),
]

```

Das `urlpatterns`-Objekt ist eine Liste von `path()`- und/oder `re_path()`-Funktionen (Python-Listen werden mit eckigen Klammern definiert, wobei die Elemente durch Kommas getrennt werden und ein [optionales abschließendes Komma](https://docs.python.org/3/faq/design.html#why-does-python-allow-commas-at-the-end-of-lists-and-tuples) haben können. Zum Beispiel: `[item1, item2, item3,]`).

Das erste Argument beider Methoden ist ein Route (Muster), das übereinstimmt. Die `path()`-Methode verwendet spitze Klammern, um Teile einer URL zu definieren, die erfasst und der View-Funktion als benannte Argumente übergeben werden. Die `re_path()`-Funktion verwendet einen flexiblen Musterabgleichs-Ansatz, der als regulärer Ausdruck bekannt ist. Wir werden später in einem Artikel darüber sprechen!

Das zweite Argument ist eine weitere Funktion, die aufgerufen wird, wenn das Muster übereinstimmt. Die Notation `views.book_detail` gibt an, dass die Funktion `book_detail()` heißt und in einem Modul namens `views` gefunden werden kann (d.h. innerhalb einer Datei namens `views.py`).

### Bearbeitung der Anforderung (views.py)

Views sind das Herz der Webanwendung, empfangen HTTP-Anfragen von Webclients und geben HTTP-Antworten zurück. Dazwischen koordinieren sie die anderen Ressourcen des Frameworks, um auf Datenbanken, Templates usw. zuzugreifen.

Das Beispiel unten zeigt eine minimale View-Funktion `index()`, die von unserem URL-Mapping im vorherigen Abschnitt aufgerufen worden sein könnte. Wie alle View-Funktionen empfängt sie ein `HttpRequest`-Objekt als Parameter (`request`) und gibt ein `HttpResponse`-Objekt zurück. In diesem Fall tun wir nichts mit der Anforderung, und unsere Antwort gibt eine fest kodierte Zeichenfolge zurück. Wir werden Ihnen später eine Anforderung zeigen, die interessanter ist.

![](1-0882d572.md)

> [!NOTE]
> Ein bisschen Python:
>
> - [Python-Module](https://docs.python.org/3/tutorial/modules.html) sind "Bibliotheken" von Funktionen, die in separaten Dateien gespeichert sind, und die wir möglicherweise in unserem Code verwenden möchten. Hier importieren wir nur das `HttpResponse`-Objekt aus dem `django.http`-Modul, damit wir es in unserem View verwenden können: `from django.http import HttpResponse`. Es gibt andere Möglichkeiten, einige oder alle Objekte aus einem Modul zu importieren.
> - Funktionen werden mit dem Schlüsselwort `def` deklariert, wie oben gezeigt, wobei benannte Parameter in Klammern nach dem Funktionsnamen aufgelistet sind; die ganze Zeile endet mit einem Doppelpunkt. Beachten Sie, wie die nächsten Zeilen alle **eingerückt** sind. Die Einrückung ist wichtig, da sie angibt, dass die Codezeilen in diesem bestimmten Block sind (eine zwingende Einrückung ist ein Hauptmerkmal von Python und einer der Gründe, warum Python-Code so leicht zu lesen ist).

Views werden normalerweise in einer Datei namens **views.py** gespeichert.

### Definition von Datenmodellen (models.py)

Django-Webanwendungen verwalten und durchsuchen Daten durch Python-Objekte, die als Modelle bezeichnet werden. Modelle definieren die Struktur der gespeicherten Daten, einschließlich der Feld_typs_ und möglicherweise auch ihrer maximalen Größe, Standardwerte, Auswahlmöglichkeiten für Listen, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. Die Definition des Modells ist unabhängig von der zugrunde liegenden Datenbank — Sie können eine von mehreren im Rahmen Ihrer Projekteinstellungen auswählen. Sobald Sie sich entschieden haben, welche Datenbank Sie verwenden möchten, müssen Sie nicht direkt mit ihr kommunizieren — Sie schreiben einfach Ihre Modellstruktur und anderen Code, und Django erledigt alle "dreckigen Arbeiten", die mit der Kommunikation mit der Datenbank verbunden sind, für Sie.

Der folgende Codeausschnitt zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Die `Team`-Klasse leitet sich von der Django-Klasse `models.Model` ab. Es definiert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` kann einer von mehreren Werten sein, also definieren wir es als Auswahlfeld und stellen eine Zuordnung zwischen den anzuzeigenden Optionen und den zu speichernden Daten bereit, zusammen mit einem Standardwert.

![](2-a39a77b5.md)

> [!NOTE]
> Ein bisschen Python:
>
> Python unterstützt "objektorientierte Programmierung", ein Programmierstil, bei dem wir unseren Code in Objekte organisieren, die verwandte Daten und Funktionen zur Verarbeitung dieser Daten enthalten. Objekte können auch von anderen Objekten erben/erweitern/abgeleitet werden, wodurch gemeinsames Verhalten zwischen verwandten Objekten geteilt werden kann. In Python verwenden wir das Schlüsselwort `class`, um den "Bauplan" für ein Objekt zu definieren. Wir können mehrere spezifische _Instanzen_ des Objekttyps basierend auf dem Modell in der Klasse erstellen.
>
> So haben wir hier zum Beispiel eine `Team`-Klasse, die sich von der `Model`-Klasse ableitet. Das bedeutet, dass es ein Modell ist und alle Methoden eines Modells enthalten wird, aber wir können ihm auch spezielle Funktionen hinzufügen. In unserem Modell definieren wir die Felder, die unsere Datenbank benötigt, um unsere Daten zu speichern, und geben ihnen spezifische Namen. Django verwendet diese Definitionen, einschließlich der Feldnamen, um die zugrunde liegende Datenbank zu erstellen.

### Abfragen von Daten (views.py)

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der zugehörigen Datenbank. Diese kann nach mehreren Feldern gleichzeitig mit verschiedenen Kriterien durchsucht werden (z.B. exakt, nicht case-sensitiv, größer als, usw.) und kann komplexe Aussagen unterstützen (z.B. können Sie eine Suche nach U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der Codeausschnitt zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. Die Zeile `list_teams = Team.objects.filter(team_level__exact="U09")` zeigt, wie wir die Modell-Abfrage-API verwenden können, um alle Datensätze zu filtern, bei denen das Feld `team_level` genau den Text `U09` enthält (beachten Sie, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Abgleichtyp durch einen Doppelpunkt getrennt sind: **`team_level__exact`**).

![](3-28415562.md)

Diese Funktion verwendet die `render()`-Funktion, um die `HttpResponse` zu erstellen, die an den Browser zurückgesendet wird. Diese Funktion ist eine _Abkürzung_; sie erstellt eine HTML-Datei, indem sie ein bestimmtes HTML-Template und einige Daten kombiniert, die in das Template eingefügt werden sollen (bereitgestellt in der Variable namens `context`). Im nächsten Abschnitt zeigen wir, wie das Template die Daten einfügt, um das HTML zu erstellen.

### Daten rendern (HTML-Templates)

Templatesysteme ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite gefüllt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen. Django unterstützt sowohl sein natives Templatesystem als auch eine andere beliebte Python-Bibliothek namens Jinja2 out of the box (bei Bedarf können auch andere Systeme unterstützt werden).

Der Codeausschnitt zeigt, wie das HTML-Template aussehen könnte, das von der `render()`-Funktion im vorherigen Abschnitt aufgerufen wurde. Dieses Template wurde unter der Annahme geschrieben, dass es beim Rendern Zugriff auf eine Listenvariable namens `youngest_teams` hat (diese ist in der `context`-Variablen innerhalb der oben stehenden `render()`-Funktion enthalten). Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und diese dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert jedes Teams in einem `<li>`-Element an.

![](4-4857788a.md)

## Was kann man sonst noch machen?

Die vorangegangenen Abschnitte zeigen die Hauptmerkmale, die Sie in fast jeder Webanwendung verwenden werden: URL-Mapping, Views, Modelle und Templates. Einige der anderen Dinge, die Django bietet, sind:

- **Formulare**: HTML-Formulare werden verwendet, um Benutzerdaten zur Verarbeitung auf dem Server zu sammeln. Django vereinfacht die Erstellung, Validierung und Verarbeitung von Formularen.
- **Benutzerauthentifizierung und Berechtigungen**: Django enthält ein robustes Benutzerauthentifizierungs- und Berechtigungssystem, das unter Berücksichtigung der Sicherheit entwickelt wurde.
- **Caching**: Die dynamische Erstellung von Inhalten ist viel rechenintensiver (und langsamer) als das Bereitstellen statischer Inhalte. Django bietet flexibles Caching, sodass Sie alle oder Teile einer gerenderten Seite speichern können, sodass sie nur bei Bedarf erneut gerendert werden.
- **Administrationssite**: Die Django-Administrationssite ist standardmäßig enthalten, wenn Sie eine App mit dem grundlegenden Skelett erstellen. Sie macht es trivial einfach, eine Admin-Seite für Site-Administratoren bereitzustellen, um Datenmodelle Ihrer Site zu erstellen, zu bearbeiten und anzuzeigen.
- **Serialisierung von Daten**: Django macht es einfach, Ihre Daten als XML oder JSON zu serialisieren und bereitzustellen. Dies kann nützlich sein, wenn Sie einen Webdienst erstellen (eine Website, die ausschließlich Daten bereitstellt, die von anderen Anwendungen oder Sites konsumiert werden sollen, und nichts selbst anzeigt), oder wenn Sie eine Website erstellen, auf der der Client-seitige Code die gesamte Datenpräsentation übernimmt.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben den ersten Schritt Ihrer Django-Reise abgeschlossen! Sie sollten nun die Hauptvorteile von Django verstehen, ein wenig über seine Geschichte wissen und ungefähr erkennen können, wie jeder der Hauptteile einer Django-App aussehen könnte. Sie sollten auch einige Dinge über die Python-Programmiersprache gelernt haben, einschließlich der Syntax für Listen, Funktionen und Klassen.

Sie haben bereits einige echte Django-Codes oben gesehen, aber im Gegensatz zu Client-seitigen Codes müssen Sie eine Entwicklungsumgebung einrichten, um sie auszuführen. Das ist unser nächster Schritt.

{{NextMenu("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django")}}
```
