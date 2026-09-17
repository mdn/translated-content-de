---
title: Serverseitige Web-Frameworks
short-title: Serverseitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat Ihnen gezeigt, wie die Kommunikation zwischen Web-Clients und Servern aussieht, welche Natur HTTP-Anfragen und -Antworten haben und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen ist es nun an der Zeit zu untersuchen, wie Web-Frameworks diese Aufgaben vereinfachen können, und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf antwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Überblick</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung und Wartung von
        serverseitigem Code vereinfachen können, und Leserinnen und Leser dazu
        anregen, ein Framework für ihre eigene Entwicklung auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

In den folgenden Abschnitten werden einige Punkte anhand von Codefragmenten aus echten Web-Frameworks veranschaulicht. Machen Sie sich keine Sorgen, wenn jetzt noch nicht **alles** verständlich ist; in unseren frameworkspezifischen Modulen führen wir Sie durch den Code.

## Überblick

Serverseitige Web-Frameworks (auch „Webanwendungs-Frameworks“) sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie stellen Werkzeuge und Bibliotheken bereit, die häufige Aufgaben der Webentwicklung vereinfachen, darunter das Weiterleiten von URLs an geeignete Handler, die Interaktion mit Datenbanken, die Unterstützung von Sitzungen und Benutzerautorisierung, das Formatieren der Ausgabe (z. B. HTML, JSON, XML) sowie die Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt enthält etwas mehr Details dazu, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erläutern wir einige Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks stellen Werkzeuge und Bibliotheken bereit, um häufige Vorgänge der Webentwicklung zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, es wird jedoch dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

Dieser Abschnitt behandelt einige der Funktionen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise alle diese Funktionen!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben anschließend Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die serverseitigen Code für die Arbeit mit diesen Anfragen und Antworten erzeugt. Das bedeutet, dass Sie einfacher mit leichter verständlichem, höher abstrahiertem Code statt mit Netzwerk-Primitiven auf niedriger Ebene interagieren können.

Das folgende Beispiel zeigt, wie dies im Web-Framework Django (Python) funktioniert. Jede „view“-Funktion (ein Request-Handler) erhält ein `HttpRequest`-Objekt mit Anfrageinformationen und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall einen String).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen an den geeigneten Handler weiterleiten

Die meisten Websites stellen eine Reihe unterschiedlicher Ressourcen bereit, die über verschiedene URLs erreichbar sind. Diese alle in einer einzigen Funktion zu verarbeiten, wäre schwer wartbar. Daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile für die Wartung, da Sie die URL ändern können, über die eine bestimmte Funktion bereitgestellt wird, ohne den zugrunde liegenden Code ändern zu müssen.

Unterschiedliche Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Beispielsweise fügt das Web-Framework Flask (Python) Routen zu view-Funktionen mithilfe eines Decorators hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Django hingegen erwartet von Entwicklern, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer view-Funktion zu definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können auf verschiedene Arten in einer HTTP-Anfrage kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server enthält die Aktualisierungsinformationen stattdessen als „POST-Daten“ im Rumpf der Anfrage. Die HTTP-Anfrage kann außerdem Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten zur jeweiligen Programmiersprache passende Mechanismen für den Zugriff auf diese Informationen. Beispielsweise enthält das `HttpRequest`-Objekt, das Django an jede view-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, den Anfragetyp (z. B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann außerdem Informationen übergeben, die in der Struktur der URL kodiert sind, indem im URL-Mapper „capture patterns“ definiert werden (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen zu speichern, die sowohl mit Benutzern geteilt werden sollen als auch Informationen über Benutzer. Web-Frameworks bieten häufig eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschvorgänge in der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dadurch können Entwickler für die Eigenschaften verschiedener Datenbanken entsprechend ihrer Nutzung optimieren.
- Eine grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dadurch wird es einfacher und sicherer zu überprüfen, dass Daten im richtigen Typ eines Datenbankfelds gespeichert werden, das richtige Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Codemuster verwenden, um schädliche Dinge zu tun, etwa Datenbanksätze zu löschen).

Das Django-Web-Framework stellt beispielsweise einen ORM bereit und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _model_. Das Model spezifiziert die zu speichernden Feld-_Typen_, die eine Validierung auf Feldebene dafür bereitstellen können, welche Informationen gespeichert werden dürfen (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können außerdem ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. festlegen. Das Model enthält keine Informationen über die zugrunde liegende Datenbank, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Model für ein `Team`-Objekt. Es speichert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl an Zeichen an, die für jeden Datensatz gespeichert werden darf. `team_level` ist ein Auswahlfeld. Daher stellen wir außerdem eine Zuordnung zwischen anzuzeigenden Auswahlmöglichkeiten und zu speichernden Daten sowie einen Standardwert bereit.

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

Das Django-Model stellt eine einfache Query-API zur Verfügung, um die Datenbank zu durchsuchen. Sie kann gleichzeitig anhand einer Reihe von Feldern mit unterschiedlichen Kriterien übereinstimmen (z. B. exakt, ohne Berücksichtigung der Groß- und Kleinschreibung, größer als usw.) und komplexe Anweisungen unterstützen (Sie können beispielsweise eine Suche nach U11-Teams angeben, deren Teamname mit „Fr“ beginnt oder mit „al“ endet).

Das zweite Code-Snippet zeigt eine view-Funktion (Resource-Handler) zur Anzeige all unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze filtern möchten, bei denen das Feld `team_level` exakt den Text „U09“ enthält (beachten Sie unten, wie dieses Kriterium als Argument mit Feldname und Übereinstimmungstyp, getrennt durch doppelte Unterstriche, an die Funktion `filter()` übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks stellen häufig Templating-Systeme bereit. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments mit Platzhaltern für Daten festzulegen, die beim Erzeugen einer Seite hinzugefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Web-Frameworks bieten häufig einen Mechanismus, der das Erzeugen anderer Formate aus gespeicherten Daten erleichtert, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Das Django-Template-System ermöglicht Ihnen beispielsweise, Variablen mithilfe einer „double-handlebars“-Syntax anzugeben (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, welche von der view-Funktion übergeben werden. Das Template-System unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), mit denen Templates einfache Operationen durchführen können, etwa das Durchlaufen von Listenwerten, die an das Template übergeben wurden.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Das folgende Code-Snippet zeigt, wie dies funktioniert. Als Fortsetzung des Beispiels mit dem „jüngsten Team“ aus dem vorherigen Abschnitt wird dem HTML-Template von der view eine Listenvariable namens `youngest_teams` übergeben. Innerhalb des HTML-Grundgerüsts haben wir einen Ausdruck, der zunächst prüft, ob die Variable `youngest_teams` existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den Wert `team_name` des Teams in einem Listenelement an.

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

## Auswahl eines Web-Frameworks

Es gibt zahlreiche Web-Frameworks für nahezu jede Programmiersprache, die Sie verwenden möchten (im folgenden Abschnitt listen wir einige der populäreren Frameworks auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand zum Erlernen eines Web-Frameworks hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, wie gut seine Dokumentation ist und wie groß und aktiv seine Community ist. Wenn Sie bei absolut keiner Programmiererfahrung beginnen, sollten Sie Django in Betracht ziehen (es ist anhand der oben genannten Kriterien eines der am einfachsten zu erlernenden Frameworks). Wenn Sie Teil eines Entwicklungsteams sind, das bereits umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, dann ist es sinnvoll, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand für das Schreiben als auch für die Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte defekt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für den „Lernaufwand“ — z. B. Dokumentation, Community, Programmiererfahrung usw. — weitere Faktoren sind:
  - _Zweck/Ursprung des Frameworks_: Einige Web-Frameworks wurden ursprünglich erstellt, um bestimmte Arten von Problemen zu lösen, und sind weiterhin _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Django wurde beispielsweise entwickelt, um die Entwicklung einer Nachrichtenwebsite zu unterstützen. Daher eignet es sich gut für Blogs und andere Websites, auf denen Inhalte veröffentlicht werden. Flask ist dagegen ein deutlich schlankeres Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. nicht meinungsstark_: Ein meinungsstarkes Framework ist ein Framework, in dem empfohlene „beste“ Wege zur Lösung eines bestimmten Problems existieren. Meinungsstarke Frameworks sind in der Regel produktiver, wenn Sie häufige Probleme lösen möchten, da sie Sie in die richtige Richtung führen. Allerdings sind sie manchmal weniger flexibel.
  - _Batteries included vs. selbst beschaffen_: Manche Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die jedes Problem lösen, an das ihre Entwickler denken können, während schlankere Frameworks von Webentwicklern erwarten, Lösungen für Probleme aus separaten Bibliotheken auszuwählen und zusammenzustellen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr schlankes Framework ist). Frameworks, die alles enthalten, erleichtern häufig den Einstieg, weil Sie bereits alles haben, was Sie benötigen, und es wahrscheinlich gut integriert und dokumentiert ist. Wenn ein kleineres Framework jedoch alles enthält, was Sie jemals benötigen werden, kann es in stärker eingeschränkten Umgebungen laufen und umfasst eine kleinere und leichter zu erlernende Teilmenge von Funktionen.
  - _Ob das Framework gute Entwicklungspraktiken fördert_: Beispielsweise führt ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur zur Aufteilung von Code in logische Funktionen fördert, zu besser wartbarem Code als eines, das keine Erwartungen an Entwickler stellt. Ebenso kann das Framework-Design großen Einfluss darauf haben, wie einfach Code getestet und wiederverwendet werden kann.

- **Leistung des Frameworks/der Programmiersprache:** In der Regel ist „Geschwindigkeit“ nicht der wichtigste Auswahlfaktor, da selbst relativ langsame Laufzeitumgebungen wie Python für mittelgroße Websites auf moderater Hardware mehr als „gut genug“ sind. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durchaus durch die Kosten für Lernen und Wartung aufgehoben werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie die Anzahl der Anfragen nicht mehr bewältigen kann, die sie erhält, wenn Benutzer darauf zugreifen. An diesem Punkt könnten Sie erwägen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine vollständige Webantwort oder Teile davon speichern, damit sie bei nachfolgenden Anfragen nicht erneut berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist wesentlich schneller als deren erstmalige Berechnung. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks unterstützen in unterschiedlichem Umfang die Definition dessen, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website außerordentlich erfolgreich ist, werden Sie die Vorteile des Cachings ausschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ausführen Ihrer Webanwendung auf leistungsfähigerer Hardware). Dann müssen Sie möglicherweise _horizontal skalieren_ (die Last verteilen, indem Sie Ihre Website auf mehrere Webserver und Datenbanken verteilen) oder „geografisch“ skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied darin machen, wie einfach Ihre Website skaliert werden kann.
- **Websicherheit:** Einige Web-Frameworks bieten bessere Unterstützung für den Umgang mit häufigen Webangriffen. Django bereinigt beispielsweise alle Benutzereingaben aus HTML-Templates, sodass von Benutzern eingegebenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, er ist jedoch nicht immer standardmäßig aktiviert.

Es gibt viele weitere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv weiterentwickelt wird usw.

Wenn Sie ein absoluter Programmieranfänger sind, wählen Sie Ihr Framework wahrscheinlich anhand der „Lernfreundlichkeit“ aus. Neben der „Benutzerfreundlichkeit“ der Sprache selbst sind hochwertige Dokumentation/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gewählt, um später im Kurs unsere Beispiele zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Besuchen wir die Hauptwebsites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) und sehen wir uns deren Dokumentation und Community an.
>
> 1. Navigieren Sie zu den Hauptwebsites (oben verlinkt).
>    - Klicken Sie auf die Links im Dokumentationsmenü (mit Bezeichnungen wie „Documentation, Guide, API Reference, Getting Started“ usw.).
>    - Können Sie Themen finden, die zeigen, wie URL-Routing, Templates und Datenbanken/Models eingerichtet werden?
>    - Sind die Dokumente verständlich?
> 2. Navigieren Sie zu den Mailinglisten der jeweiligen Website (über Community-Links erreichbar).
>    - Wie viele Fragen wurden in den letzten Tagen veröffentlicht?
>    - Wie viele davon haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Gehen wir nun weiter und betrachten einige konkrete serverseitige Web-Frameworks.

Die folgenden serverseitigen Frameworks stellen _einige_ der zum Zeitpunkt der Erstellung beliebtesten verfügbaren Frameworks dar. Alle bieten alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv weiterentwickelt, verfügen über engagierte Communities, die Dokumentation erstellen und Benutzern in Diskussionsforen helfen, und werden von einer großen Anzahl bekannter Websites verwendet. Es gibt viele weitere hervorragende serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein Python-Web-Framework auf hoher Ebene, das schnelle Entwicklung und klares, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern erstellt und übernimmt einen Großteil der Mühen der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie „Batteries included“ und bietet sofort fast alles, was die meisten Entwickler tun möchten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und verfügt über umfangreiche und aktuelle Dokumentation. Es ist außerdem schnell, sicher und sehr skalierbar. Da Django auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Zu den beliebten Websites, die Django verwenden (laut Django-Startseite), gehören: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Microframework für Python.

Obwohl Flask minimalistisch ist, kann es sofort ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und Debugger sowie Unterstützung für Jinja2-Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/)-Request-Dispatching. Es verfügt über gute Dokumentation und eine aktive Community.

Flask ist äußerst beliebt geworden, insbesondere bei Entwicklern, die Webdienste auf kleinen Systemen mit eingeschränkten Ressourcen bereitstellen müssen (z. B. beim Betrieb eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), bei [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, nicht meinungsstarkes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (node ist eine browserlose Umgebung zum Ausführen von JavaScript). Es stellt einen robusten Funktionsumfang für Web- und Mobilanwendungen bereit und bietet nützliche HTTP-Hilfsmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teilweise weil es clientseitigen JavaScript-Webprogrammierern den Übergang zur serverseitigen Entwicklung erleichtert und teilweise, weil es ressourceneffizient ist (die zugrunde liegende node-Umgebung verwendet leichtgewichtiges Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (beispielsweise werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche für einen bestimmten Zweck die beste ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (die sowohl server- als auch clientseitige Frameworks umfassen) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele bekannte Unternehmen verwenden Express, darunter Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeitumgebung und ein Framework, das auf Chrome V8 und [Rust](https://rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) angetrieben — einer asynchronen Laufzeitumgebung auf Rust-Basis, die es ermöglicht, Webseiten schneller bereitzustellen. Es bietet außerdem interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), wodurch binärer Code zur Verwendung auf der Client-Seite kompiliert werden kann. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der von Natur aus bessere Sicherheit gewährleistet.

Zu den Funktionen von Deno gehören:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für den Zugriff auf **Dateien**, **Netzwerk** oder **Umgebung**, sofern dieser nicht ausdrücklich erlaubt wird.
- TypeScript-Unterstützung **sofort einsatzbereit**.
- First-Class-`await`-Mechanismus.
- Integrierte Testfunktion und Codeformatierer (`deno fmt`)
- (JavaScript-)Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind und den `Deno`-Namespace ausschließen (oder darauf testen), sollten direkt in jedem modernen Browser funktionieren.
- Bündelung von Skripten in einer einzigen JavaScript-Datei.

Deno bietet eine einfache, aber leistungsfähige Möglichkeit, JavaScript sowohl für client- als auch serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (üblicherweise als „Ruby on Rails“ bezeichnet) ist ein Web-Framework für die Programmiersprache Ruby.

Rails verfolgt eine Django sehr ähnliche Designphilosophie. Wie Django stellt es Standardmechanismen für das Routing von URLs, den Zugriff auf Daten aus einer Datenbank, das Erzeugen von HTML aus Templates und das Formatieren von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}} bereit. Ebenso fördert es die Verwendung von Designmustern wie DRY („don't repeat yourself“ — schreiben Sie Code nach Möglichkeit nur einmal), MVC (model-view-controller) und einer Reihe weiterer Muster.

Aufgrund spezifischer Designentscheidungen und der Natur der Sprachen gibt es natürlich viele Unterschiede.

Rails wurde für bekannte Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem es häufige Aufgaben vereinfacht, die in der Mehrzahl von Webprojekten verwendet werden, etwa:

- [Einfache, schnelle Routing-Engine](https://laravel.com/framework/docs/routing).
- [Leistungsfähiger Dependency-Injection-Container](https://laravel.com/framework/docs/container).
- Mehrere Backends für die Speicherung von [Sitzungen](https://laravel.com/framework/docs/session) und [Cache](https://laravel.com/framework/docs/cache).
- Ausdrucksstarker, intuitiver [Datenbank-ORM](https://laravel.com/framework/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/framework/docs/migrations).
- [Robuste Verarbeitung von Hintergrundaufgaben](https://laravel.com/framework/docs/queues).
- [Echtzeitübertragung von Ereignissen](https://laravel.com/framework/docs/broadcasting).

Laravel ist zugänglich und zugleich leistungsfähig und stellt die für große, robuste Anwendungen benötigten Werkzeuge bereit.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein von Microsoft entwickeltes Open-Source-Web-Framework zum Erstellen moderner Webanwendungen und Dienste. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für die Nutzung durch Millionen von Benutzern skalieren und einfach komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist. Dadurch können Programmierer ASP.NET-Code mit jeder unterstützten .NET-Sprache schreiben (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Werkzeugen (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Sie war einfach genug, um ohne große Kenntnisse der Sprache einzusteigen, und leistungsfähig genug, um Sie weiterzubringen. Mojolicious setzt diese Idee mit modernsten Technologien um.

Zu den Funktionen von Mojolicious gehören:

- Ein Echtzeit-Web-Framework, um Ein-Datei-Prototypen einfach zu gut strukturierten MVC-Webanwendungen auszubauen.
- RESTful-Routen, Plugins, Befehle, Perl-artige Templates, Content-Negotiation, Sitzungsverwaltung, Formularvalidierung, Test-Framework, Server für statische Dateien, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Full-Stack-HTTP- und WebSocket-Client/Server-Implementierung mit Unterstützung für IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Sockets, Comet (Long Polling), Keep-Alive, Connection Pooling, Timeouts, Cookies, Multipart und gzip-Komprimierung.
- JSON- und HTML/XML-Parser sowie -Generatoren mit Unterstützung für CSS-Selektoren.
- Sehr saubere, portable und objektorientierte Pure-Perl-API ohne versteckte Magie.
- Neuer Code, der auf jahrelanger Erfahrung basiert, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es keineswegs das einzige auf [Java](https://www.java.com/) basierende Framework ist, lässt es sich einfach verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie „einfach ausführen“ können. Es bietet eine meinungsstarke Sicht auf die Spring-Plattform und Bibliotheken von Drittanbietern, ermöglicht Ihnen jedoch den Einstieg mit minimalem Aufwand und geringer Konfiguration.

Es kann für kleine Probleme verwendet werden, seine Stärke liegt jedoch im Aufbau größerer Anwendungen, die einen Cloud-Ansatz verwenden. In der Regel laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Benutzerinteraktionen bereitstellen und andere Backend-Aufgaben erledigen (z. B. Zugriff auf Datenbanken oder andere Dienste). Load Balancer helfen, Redundanz und Zuverlässigkeit sicherzustellen oder eine geografisch lokalisierte Verarbeitung von Benutzeranfragen zu ermöglichen, um Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat außerdem einen Überblick auf hoher Ebene über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks behandelt. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen können. Falls nicht, machen Sie sich keine Sorgen — später im Kurs bieten wir Ihnen detaillierte Tutorials zu Django und Express, damit Sie Erfahrung mit der tatsächlichen Arbeit mit einem Web-Framework sammeln können.

Im nächsten Artikel dieses Moduls wechseln wir die Richtung leicht und betrachten Websicherheit.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
