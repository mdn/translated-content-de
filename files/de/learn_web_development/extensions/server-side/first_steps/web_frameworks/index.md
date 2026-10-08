---
title: Serverseitige Webframeworks
short-title: Serverseitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat gezeigt, wie die Kommunikation zwischen Webclients und Servern aussieht, wie HTTP-Anfragen und -Antworten funktionieren und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen können wir nun untersuchen, wie Webframeworks diese Aufgaben vereinfachen und wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und beantwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Überblick über Client und Server</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Webframeworks die Entwicklung und Wartung von
        serverseitigem Code vereinfachen, und erste Überlegungen zur Auswahl
        eines Frameworks für eigene Projekte anstellen.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Aspekte anhand von Codefragmenten aus echten Webframeworks. Machen Sie sich keine Sorgen, wenn Sie jetzt noch nicht **alles** verstehen: In unseren Modulen zu den einzelnen Frameworks werden wir den Code Schritt für Schritt durchgehen.

## Überblick

Serverseitige Webframeworks (auch „Webanwendungsframeworks“) sind Softwareframeworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie stellen Werkzeuge und Bibliotheken bereit, die häufige Aufgaben der Webentwicklung vereinfachen. Dazu gehören die Zuordnung von URLs zu passenden Handlern, die Interaktion mit Datenbanken, die Unterstützung von Sitzungen und Benutzerautorisierung, die Formatierung von Ausgaben (z. B. HTML, JSON und XML) sowie ein verbesserter Schutz vor Angriffen auf Webanwendungen.

Im nächsten Abschnitt erfahren Sie genauer, wie Webframeworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erläutern wir einige Kriterien für die Auswahl eines Webframeworks und stellen verschiedene Optionen vor.

## Was kann ein Webframework für Sie tun?

Webframeworks stellen Werkzeuge und Bibliotheken bereit, die häufige Aufgaben der Webentwicklung vereinfachen. Sie _müssen_ kein serverseitiges Webframework verwenden, aber es ist sehr empfehlenswert: Es wird Ihnen die Arbeit erheblich erleichtern.

In diesem Abschnitt behandeln wir einige Funktionen, die Webframeworks häufig bereitstellen. Nicht jedes Framework bietet zwangsläufig alle diese Funktionen!

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll: Server warten auf HTTP-Anfragen des Browsers und senden anschließend Informationen in HTTP-Antworten zurück. Mit Webframeworks können Sie vereinfachte Syntax schreiben, aus der serverseitiger Code für die Verarbeitung dieser Anfragen und Antworten entsteht. Dadurch arbeiten Sie mit leichter verständlichem Code auf einer höheren Abstraktionsebene, statt sich mit Netzwerkfunktionen auf niedriger Ebene befassen zu müssen.

Das folgende Beispiel zeigt, wie dies im Webframework Django (Python) funktioniert. Jede „View“-Funktion (ein Request-Handler) erhält ein `HttpRequest`-Objekt mit Informationen zur Anfrage und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall eine Zeichenfolge).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen an den passenden Handler weiterleiten

Die meisten Websites stellen mehrere unterschiedliche Ressourcen bereit, die über verschiedene URLs erreichbar sind. Alle diese Ressourcen in einer einzigen Funktion zu behandeln, wäre schwer zu warten. Deshalb bieten Webframeworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz erleichtert auch die Wartung: Sie können die URL für eine bestimmte Funktionalität ändern, ohne den zugrunde liegenden Code anpassen zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für diese Zuordnung. Das Webframework Flask (Python) fügt beispielsweise mithilfe eines Decorators Routen zu View-Funktionen hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Django hingegen erwartet, dass Entwickler eine Liste von Zuordnungen zwischen URL-Mustern und View-Funktionen definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Den Zugriff auf Daten in der Anfrage erleichtern

Daten können auf verschiedene Weise in einer HTTP-Anfrage codiert sein. Bei einer HTTP-`GET`-Anfrage, die Dateien oder Daten vom Server abruft, können die benötigten Daten durch URL-Parameter oder die Struktur der URL angegeben werden. Eine HTTP-`POST`-Anfrage zur Aktualisierung einer Ressource auf dem Server enthält die Aktualisierungsinformationen dagegen als „POST-Daten“ im Hauptteil der Anfrage. Eine HTTP-Anfrage kann außerdem Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Webframeworks bieten zur jeweiligen Programmiersprache passende Mechanismen für den Zugriff auf diese Informationen. Das `HttpRequest`-Objekt, das Django jeder View-Funktion übergibt, enthält beispielsweise Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, die Art der Anfrage (z. B. HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten und mehr. Django kann außerdem Informationen übergeben, die in der URL-Struktur codiert sind. Dazu werden im URL-Mapping „Capture-Patterns“ definiert (siehe das letzte Codefragment im vorherigen Abschnitt).

### Datenbankzugriffe abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen zu speichern, die mit Benutzern geteilt werden sollen oder sich auf Benutzer beziehen. Webframeworks bieten häufig eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschvorgänge abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank austauschen, ohne zwangsläufig den Code ändern zu müssen, der sie verwendet. So können Entwickler je nach Einsatzzweck die Eigenschaften verschiedener Datenbanken optimal nutzen.
- Eine grundlegende Validierung von Daten kann innerhalb des Frameworks erfolgen. Dadurch lässt sich einfacher und sicherer prüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert werden, das richtige Format haben (z. B. eine E-Mail-Adresse) und nicht bösartig sind. Angreifer können bestimmte Codemuster verwenden, um beispielsweise Datenbankeinträge zu löschen.

Das Webframework Django stellt beispielsweise einen ORM bereit und bezeichnet das Objekt, mit dem die Struktur eines Datensatzes definiert wird, als _Model_. Das Model legt die zu speichernden Feld_typen_ fest. Diese können auf Feldebene prüfen, welche Informationen gespeichert werden dürfen (ein E-Mail-Feld würde beispielsweise nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können außerdem die maximale Länge, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für die Dokumentation, Beschriftungen für Formulare und mehr festlegen. Das Model enthält keine Angaben zur zugrunde liegenden Datenbank, da diese separat vom Code konfiguriert und geändert werden kann.

Das erste Codebeispiel unten zeigt ein sehr einfaches Django-Model für ein `Team`-Objekt. Es speichert den Teamnamen und die Teamstufe in Zeichenfeldern und legt für jeden Datensatz die jeweils maximal zulässige Zeichenanzahl fest. `team_level` ist ein Auswahlfeld. Deshalb definieren wir außerdem eine Zuordnung zwischen den angezeigten Auswahlmöglichkeiten und den gespeicherten Daten sowie einen Standardwert.

```python
#best/models.py

from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=40)

    TEAM_LEVELS = (
        ('U09', 'Under 09s'),
        ('U10', 'Under 10s'),
        ('U11', 'Under 11s'),
        # List our other teams
    )
    team_level = models.CharField(max_length=3,choices=TEAM_LEVELS,default='U11')
```

Das Django-Model bietet eine einfache Abfrage-API für die Suche in der Datenbank. Sie kann mehrere Felder gleichzeitig anhand verschiedener Kriterien abgleichen (z. B. exakte Übereinstimmung, unabhängig von Groß- und Kleinschreibung oder größer als) und unterstützt komplexe Abfragen. Sie können beispielsweise nach U11-Teams suchen, deren Name mit „Fr“ beginnt oder mit „al“ endet.

Das zweite Codebeispiel zeigt eine View-Funktion (einen Ressourcen-Handler), die alle unsere U09-Teams anzeigt. Hier legen wir fest, dass alle Datensätze gefiltert werden sollen, bei denen das Feld `team_level` genau den Text „U09“ enthält. Beachten Sie, wie dieses Kriterium an die Funktion `filter()` übergeben wird: Feldname und Vergleichsart sind durch zwei Unterstriche getrennt (**team_level\_\_exact**).

```python
#best/views.py

from django.shortcuts import render
from .models import Team

def youngest(request):
    list_teams = Team.objects.filter(team_level__exact="U09")
    context = {'youngest_teams': list_teams}
    return render(request, 'best/index.html', context)
```

### Daten rendern

Webframeworks stellen häufig Template-Systeme bereit. Damit können Sie die Struktur eines Ausgabedokuments festlegen und Platzhalter für Daten verwenden, die beim Erstellen der Seite eingefügt werden. Templates werden oft zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Webframeworks bieten häufig auch Mechanismen, mit denen sich gespeicherte Daten leicht in anderen Formaten ausgeben lassen, darunter {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Im Template-System von Django können Sie beispielsweise Variablen mit einer Syntax aus doppelten geschweiften Klammern angeben (z. B. `\{{ variable_name }}`). Beim Rendern einer Seite werden sie durch Werte ersetzt, die von der View-Funktion übergeben wurden. Das Template-System unterstützt außerdem Ausdrücke (Syntax: `{% expression %}`), mit denen Templates einfache Operationen ausführen können, etwa über die Werte einer übergebenen Liste zu iterieren.

> [!NOTE]
> Viele andere Template-Systeme verwenden eine ähnliche Syntax, zum Beispiel Jinja2 (Python), Handlebars (JavaScript) und Mustache (JavaScript).

Das folgende Codebeispiel zeigt, wie dies funktioniert. Wir greifen das Beispiel der „jüngsten Teams“ aus dem vorherigen Abschnitt wieder auf: Die View übergibt dem HTML-Template eine Listenvariable namens `youngest_teams`. Innerhalb des HTML-Grundgerüsts prüft ein Ausdruck zunächst, ob die Variable `youngest_teams` vorhanden ist, und durchläuft sie anschließend in einer `for`-Schleife. Bei jedem Durchlauf zeigt das Template den Wert `team_name` des Teams als Listeneintrag an.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
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

## So wählen Sie ein Webframework aus

Für fast jede Programmiersprache, die Sie verwenden möchten, gibt es zahlreiche Webframeworks. Im folgenden Abschnitt stellen wir einige der beliebtesten vor. Bei so vielen Möglichkeiten kann es schwierig sein herauszufinden, welches Framework der beste Ausgangspunkt für Ihre neue Webanwendung ist.

Die folgenden Faktoren können Ihre Entscheidung beeinflussen:

- **Lernaufwand:** Wie aufwendig es ist, ein Webframework zu lernen, hängt davon ab, wie gut Sie die zugrunde liegende Programmiersprache kennen, wie konsistent die API ist, wie gut die Dokumentation ist und wie groß und aktiv die Community ist. Wenn Sie noch keinerlei Programmiererfahrung haben, sollten Sie Django in Betracht ziehen: Gemessen an diesen Kriterien gehört es zu den am einfachsten zu erlernenden Frameworks. Wenn Sie Teil eines Entwicklungsteams sind, das bereits viel Erfahrung mit einem bestimmten Webframework oder einer bestimmten Programmiersprache hat, ist es sinnvoll, dabei zu bleiben.
- **Produktivität:** Die Produktivität beschreibt, wie schnell Sie neue Funktionen entwickeln können, sobald Sie mit dem Framework vertraut sind. Dazu gehört sowohl der Aufwand für das Schreiben als auch für die Wartung des Codes (schließlich können Sie keine neuen Funktionen entwickeln, solange bestehende nicht funktionieren). Viele Faktoren, die die Produktivität beeinflussen, entsprechen denen beim Lernaufwand, etwa Dokumentation, Community und Programmiererfahrung. Weitere Faktoren sind:
  - _Zweck und Ursprung des Frameworks_: Manche Webframeworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und eignen sich weiterhin _besser_ für Webanwendungen mit ähnlichen Anforderungen. Django wurde beispielsweise für die Entwicklung einer Zeitungswebsite geschaffen und eignet sich daher gut für Blogs und andere Websites, auf denen Inhalte veröffentlicht werden. Flask dagegen ist ein deutlich schlankeres Framework und eignet sich hervorragend für Webanwendungen auf eingebetteten Geräten.
  - _Meinungsstark oder flexibel_: Ein meinungsstarkes Framework gibt empfohlene „beste“ Vorgehensweisen für bestimmte Probleme vor. Solche Frameworks sind bei häufigen Aufgaben meist produktiver, weil sie eine klare Richtung vorgeben. Dafür sind sie manchmal weniger flexibel.
  - _Alles inklusive oder selbst zusammenstellen_: Manche Webframeworks enthalten standardmäßig Werkzeuge und Bibliotheken für nahezu alle Probleme, die ihre Entwickler erwarten. Schlankere Frameworks setzen dagegen darauf, dass Webentwickler passende Lösungen aus separaten Bibliotheken auswählen. Django ist ein Beispiel für die erste Variante, Flask für ein besonders schlankes Framework. Mit umfassenden Frameworks fällt der Einstieg oft leichter, weil alles Nötige bereits vorhanden und in der Regel gut integriert und dokumentiert ist. Wenn ein kleineres Framework jedoch alles bietet, was Sie benötigen werden, kann es in stärker eingeschränkten Umgebungen eingesetzt werden und Sie müssen weniger Konzepte lernen.
  - _Ob das Framework gute Entwicklungspraktiken fördert_: Ein Framework, das beispielsweise eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert und Code in logisch getrennte Bestandteile aufteilt, führt zu besser wartbarem Code als eines, das Entwicklern keine entsprechenden Vorgaben macht. Auch das Design eines Frameworks kann erheblichen Einfluss darauf haben, wie leicht sich Code testen und wiederverwenden lässt.

- **Leistung des Frameworks und der Programmiersprache:** „Geschwindigkeit“ ist bei der Auswahl normalerweise nicht der wichtigste Faktor. Selbst vergleichsweise langsame Laufzeitumgebungen wie Python sind für mittelgroße Websites auf durchschnittlicher Hardware mehr als ausreichend. Wahrgenommene Geschwindigkeitsvorteile einer anderen Sprache, etwa C++ oder JavaScript, können durch den zusätzlichen Lern- und Wartungsaufwand zunichtegemacht werden.
- **Unterstützung für Caching:** Wenn Ihre Website erfolgreicher wird, kann sie möglicherweise die steigende Anzahl von Benutzeranfragen nicht mehr bewältigen. Dann können Sie Caching in Betracht ziehen. Bei dieser Optimierung speichern Sie eine Webantwort ganz oder teilweise, damit sie bei späteren Anfragen nicht erneut berechnet werden muss. Eine zwischengespeicherte Antwort zurückzugeben, ist wesentlich schneller, als sie neu zu berechnen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Webframeworks unterscheiden sich darin, wie gut sie die Festlegung zwischenspeicherbarer Inhalte unterstützen.
- **Skalierbarkeit:** Wenn Ihre Website äußerst erfolgreich wird, schöpfen Sie irgendwann die Vorteile des Cachings aus und stoßen sogar an die Grenzen der _vertikalen Skalierung_ (des Betriebs Ihrer Webanwendung auf leistungsfähigerer Hardware). Dann müssen Sie möglicherweise _horizontal skalieren_ (die Last auf mehrere Webserver und Datenbanken verteilen) oder „geografisch“ skalieren, weil einige Ihrer Kunden weit vom Server entfernt sind. Das gewählte Webframework kann erheblich beeinflussen, wie einfach sich Ihre Website skalieren lässt.
- **Websicherheit:** Manche Webframeworks bieten besseren Schutz vor häufigen Angriffen auf Webanwendungen. Django bereinigt beispielsweise sämtliche Benutzereingaben in HTML-Templates, damit von Benutzern eingegebenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten ähnlichen Schutz, aktivieren ihn aber nicht immer standardmäßig.

Es gibt viele weitere mögliche Faktoren, darunter die Lizenz und die Frage, ob das Framework aktiv weiterentwickelt wird.

Wenn Sie noch nie programmiert haben, werden Sie Ihr Framework vermutlich danach auswählen, wie leicht es sich lernen lässt. Neben der Benutzerfreundlichkeit der Sprache selbst sind hochwertige Dokumentation und Tutorials sowie eine aktive Community, die Neulingen hilft, Ihre wertvollsten Ressourcen. Für die Beispiele im weiteren Verlauf dieses Kurses haben wir [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, vor allem weil sie leicht zu lernen sind und gute Unterstützung bieten.

> [!NOTE]
> Besuchen Sie die Websites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) und sehen Sie sich ihre Dokumentation und Community an.
>
> 1. Öffnen Sie die oben verlinkten Websites.
>    - Klicken Sie im Menü auf die Links zur Dokumentation (mit Bezeichnungen wie „Documentation“, „Guide“, „API Reference“ oder „Getting Started“).
>    - Finden Sie Themen, die erklären, wie URL-Routing, Templates und Datenbanken/Models eingerichtet werden?
>    - Sind die Dokumente verständlich?
> 2. Öffnen Sie die Mailinglisten der jeweiligen Websites (über die Community-Links).
>    - Wie viele Fragen wurden in den letzten Tagen gestellt?
>    - Wie viele davon wurden beantwortet?
>    - Ist die Community aktiv?

## Einige gute Webframeworks

Sehen wir uns nun einige konkrete serverseitige Webframeworks an.

Die folgenden serverseitigen Frameworks sind _einige_ der zum Zeitpunkt der Erstellung beliebtesten verfügbaren Frameworks. Alle bieten die Voraussetzungen für produktives Arbeiten: Sie sind Open Source, werden aktiv weiterentwickelt, haben engagierte Communitys, die Dokumentation erstellen und Benutzern in Diskussionsforen helfen, und kommen auf vielen bekannten Websites zum Einsatz. Es gibt viele weitere hervorragende serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein Python-Webframework auf hoher Abstraktionsebene, das schnelle Entwicklung und ein klares, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern geschaffen und nimmt Ihnen einen großen Teil der mühsamen Arbeit bei der Webentwicklung ab. So können Sie sich auf das Schreiben Ihrer Anwendung konzentrieren, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der „Batteries included“-Philosophie und bringt nahezu alles mit, was die meisten Entwickler benötigen könnten. Weil alles enthalten ist, greifen die Komponenten ineinander, folgen einheitlichen Designprinzipien und sind umfassend und aktuell dokumentiert. Django ist außerdem schnell, sicher und sehr gut skalierbar. Da es auf Python basiert, lässt sich Django-Code leicht lesen und warten.

Zu den bekannten Websites, die Django verwenden (laut Django-Homepage), gehören Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest und Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Trotz seines minimalistischen Ansatzes können Sie mit Flask ohne zusätzliche Komponenten vollwertige Websites erstellen. Es enthält einen Entwicklungsserver und einen Debugger und unterstützt [Jinja2](https://github.com/pallets/jinja)-Templates, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und die Verarbeitung von [RESTful](https://restapitutorial.com/)-Anfragen. Es verfügt über eine gute Dokumentation und eine aktive Community.

Flask ist besonders bei Entwicklern beliebt geworden, die Webdienste auf kleinen Systemen mit begrenzten Ressourcen bereitstellen müssen, etwa einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/) oder einem [Drohnencontroller](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, flexibles, minimalistisches Webframework ohne starre Vorgaben für [Node.js](https://nodejs.org/en/) (Node ist eine Umgebung zur Ausführung von JavaScript ohne Browser). Es bietet umfangreiche Funktionen für Web- und Mobilanwendungen sowie nützliche HTTP-Hilfsmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt. Das liegt zum einen daran, dass es Webentwicklern mit Erfahrung in clientseitigem JavaScript den Einstieg in die serverseitige Entwicklung erleichtert. Zum anderen ist es ressourcenschonend: Die zugrunde liegende Node-Umgebung verwendet leichtgewichtiges Multitasking innerhalb eines Threads, statt für jede neue Webanfrage einen eigenen Prozess zu starten.

Da Express ein minimalistisches Webframework ist, enthält es nicht jede Komponente, die Sie möglicherweise benötigen. Datenbankzugriffe sowie die Unterstützung für Benutzer und Sitzungen werden beispielsweise über unabhängige Bibliotheken bereitgestellt. Es gibt viele ausgezeichnete unabhängige Komponenten, doch manchmal ist schwer zu erkennen, welche sich für einen bestimmten Zweck am besten eignet.

Viele beliebte serverseitige Frameworks und Full-Stack-Frameworks (die serverseitige und clientseitige Frameworks umfassen) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele namhafte Unternehmen verwenden Express, darunter Uber, Accenture und IBM.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere Laufzeitumgebung und ein Framework für [JavaScript](/de/docs/Web/JavaScript)/TypeScript, basierend auf Chrome V8 und [Rust](https://rust-lang.org/).

Deno verwendet [Tokio](https://tokio.rs/), eine auf Rust basierende asynchrone Laufzeitumgebung, mit der es Webseiten schneller bereitstellen kann. Es unterstützt außerdem [WebAssembly](/de/docs/WebAssembly) direkt, sodass Binärcode für die clientseitige Verwendung kompiliert werden kann. Deno soll einige Sicherheitslücken im Konzept von [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) schließen, indem es einen Mechanismus für grundsätzlich besseren Schutz bereitstellt.

Zu Denos Funktionen gehören:

- Sicherheit als Standardeinstellung. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für den Zugriff auf **Dateien**, das **Netzwerk** oder die **Umgebung**, sofern dieser nicht ausdrücklich erlaubt wird.
- **Integrierte** TypeScript-Unterstützung.
- Direkte Unterstützung für await.
- Integrierte Testfunktionen und ein Codeformatierer (`deno fmt`).
- (JavaScript-)Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind und den Namespace `Deno` nicht verwenden (oder dessen Verfügbarkeit prüfen), sollten direkt in jedem modernen Browser funktionieren.
- Bündelung von Skripten in einer einzigen JavaScript-Datei.

Deno bietet eine einfache und zugleich leistungsfähige Möglichkeit, JavaScript sowohl für die clientseitige als auch für die serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (gewöhnlich „Ruby on Rails“ genannt) ist ein Webframework für die Programmiersprache Ruby.

Rails folgt einer ähnlichen Designphilosophie wie Django. Wie Django stellt es Standardmechanismen für das Routing von URLs, den Zugriff auf Datenbanken, die Erzeugung von HTML aus Templates und die Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}} bereit. Es fördert ebenfalls die Verwendung von Entwurfsmustern wie DRY („don't repeat yourself“ – schreiben Sie Code nach Möglichkeit nur einmal), MVC (Model-View-Controller) und weiteren Mustern.

Natürlich gibt es aufgrund konkreter Designentscheidungen und der Eigenschaften der Sprachen auch viele Unterschiede.

Rails wurde für bekannte Websites eingesetzt, darunter [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/) und [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungsframework mit ausdrucksstarker, eleganter Syntax. Laravel soll die Entwicklung erleichtern, indem es häufige Aufgaben vereinfacht, die in den meisten Webprojekten anfallen, darunter:

- Eine [einfache, schnelle Routing-Engine](https://laravel.com/framework/docs/routing).
- Ein [leistungsfähiger Container für Dependency Injection](https://laravel.com/framework/docs/container).
- Mehrere Backends für die Speicherung von [Sitzungen](https://laravel.com/framework/docs/session) und [Cache-Daten](https://laravel.com/framework/docs/cache).
- Ein ausdrucksstarker, intuitiver [Datenbank-ORM](https://laravel.com/framework/docs/eloquent).
- Datenbankunabhängige [Schemamigrationen](https://laravel.com/framework/docs/migrations).
- [Robuste Verarbeitung von Hintergrundaufgaben](https://laravel.com/framework/docs/queues).
- [Echtzeit-Übertragung von Ereignissen](https://laravel.com/framework/docs/broadcasting).

Laravel ist leicht zugänglich und zugleich leistungsfähig. Es stellt die Werkzeuge bereit, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein von Microsoft entwickeltes Open-Source-Webframework zum Erstellen moderner Webanwendungen und -dienste. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für Millionen von Benutzern skalieren und komplexere Funktionen wie Web-APIs, datengestützte Formulare oder Echtzeitkommunikation einfach hinzufügen.

Ein besonderes Merkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufbaut. Dadurch können Entwickler ASP.NET-Code in jeder unterstützten .NET-Sprache schreiben, etwa C# oder Visual Basic. Wie viele Microsoft-Produkte profitiert es von ausgezeichneten (oft kostenlosen) Werkzeugen, einer aktiven Entwickler-Community und einer gut geschriebenen Dokumentation.

ASP.NET wird unter anderem von Microsoft, Xbox.com und Stack Overflow verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Webframework der nächsten Generation für die Programmiersprache Perl.

In den Anfangstagen des Webs lernten viele Menschen Perl wegen einer hervorragenden Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Sie war einfach genug, um ohne große Sprachkenntnisse damit anzufangen, und leistungsfähig genug, um auch später damit weiterzuarbeiten. Mojolicious setzt diese Idee mit modernsten Technologien um.

Mojolicious bietet unter anderem:

- Ein Echtzeit-Webframework, mit dem sich Prototypen aus einer einzigen Datei einfach zu gut strukturierten MVC-Webanwendungen ausbauen lassen.
- RESTful-Routen, Plugins, Befehle, Perl-typische Templates, Content Negotiation, Sitzungsverwaltung, Formularvalidierung, ein Testframework, einen Server für statische Dateien, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Full-Stack-Implementierung von HTTP- und WebSocket-Clients und -Servern mit Unterstützung für IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxys, UNIX-Domain-Sockets, Comet (Long Polling), Keep-Alive, Connection Pooling, Timeouts, Cookies, Multipart und gzip-Komprimierung.
- JSON- und HTML/XML-Parser und -Generatoren mit Unterstützung für CSS-Selektoren.
- Eine klare, portable und objektorientierte API in reinem Perl, ohne versteckte Magie.
- Aktuellen Code, der auf jahrelanger Erfahrung basiert, kostenlos und als Open Source verfügbar ist.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten von [Spring](https://spring.io/). Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Es ist bei Weitem nicht das einzige auf [Java](https://www.java.com/) basierende Framework, macht es aber leicht, eigenständige, produktionsreife Spring-Anwendungen zu erstellen, die Sie „einfach starten“ können. Es verfolgt einen meinungsstarken Ansatz für die Spring-Plattform und Bibliotheken von Drittanbietern, ermöglicht aber einen Einstieg mit minimalem Aufwand für Einrichtung und Konfiguration.

Spring Boot eignet sich für kleine Aufgaben, seine Stärke liegt jedoch in größeren Anwendungen mit einem Cloud-Ansatz. Dabei laufen normalerweise mehrere Anwendungen parallel und kommunizieren miteinander: Einige übernehmen die Benutzerinteraktion, andere Aufgaben im Backend, etwa den Zugriff auf Datenbanken oder andere Dienste. Load Balancer tragen zu Redundanz und Zuverlässigkeit bei oder ermöglichen die geografische Verteilung von Benutzeranfragen, damit die Anwendung schnell reagiert.

## Zusammenfassung

Dieser Artikel hat gezeigt, wie Webframeworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Außerdem haben wir einige beliebte Frameworks im Überblick vorgestellt und Kriterien für die Auswahl eines Webanwendungsframeworks besprochen. Sie sollten nun zumindest eine Vorstellung davon haben, wie Sie ein Webframework für Ihre eigene serverseitige Entwicklung auswählen können. Falls nicht, ist das kein Problem: Später im Kurs führen wir Sie mit ausführlichen Tutorials zu Django und Express in die praktische Arbeit mit Webframeworks ein.

Im nächsten Artikel dieses Moduls wechseln wir etwas die Richtung und befassen uns mit Websicherheit.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
