---
title: Serverseitige Web-Frameworks
short-title: Serverseitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 56d0ce5d4214468db560358cc761904f9139c96c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat Ihnen gezeigt, wie die Kommunikation zwischen Webclients und Servern aussieht, welche Natur HTTP-Anfragen und -Antworten haben und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen ist es an der Zeit zu untersuchen, wie Web-Frameworks diese Aufgaben vereinfachen können, und Ihnen eine Vorstellung davon zu vermitteln, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf antwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Überblick</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können, und Leser dazu anregen, ein
        Framework für ihre eigene Entwicklung auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

In den folgenden Abschnitten werden einige Punkte anhand von Codefragmenten aus echten Web-Frameworks veranschaulicht. Machen Sie sich keine Sorgen, wenn jetzt noch nicht **alles** verständlich ist; in unseren frameworkspezifischen Modulen werden wir Sie durch den Code führen.

## Überblick

Serverseitige Web-Frameworks (auch „Webanwendungs-Frameworks“) sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie stellen Tools und Bibliotheken bereit, die häufige Aufgaben der Webentwicklung vereinfachen, einschließlich des Weiterleitens von URLs an geeignete Handler, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z. B. HTML, JSON, XML) sowie der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Details dazu, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erläutern wir einige Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und führen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks stellen Tools und Bibliotheken bereit, um gängige Webentwicklungsaufgaben zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, es wird jedoch dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt wird einige der Funktionen erläutert, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework stellt zwangsläufig alle diese Funktionen bereit!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die serverseitigen Code für die Arbeit mit diesen Anfragen und Antworten erzeugt. Das bedeutet, dass Ihre Aufgabe einfacher wird, da Sie mit einfacherem Code auf höherer Ebene statt mit Netzwerkprimitiven auf niedrigerer Ebene interagieren.

Das folgende Beispiel zeigt, wie dies im Web-Framework Django (Python) funktioniert. Jede „View“-Funktion (ein Request-Handler) erhält ein `HttpRequest`-Objekt mit Anfrageinformationen und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall einen String).

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

Die meisten Websites stellen mehrere verschiedene Ressourcen bereit, die über unterschiedliche URLs erreichbar sind. Die Verarbeitung all dieser Ressourcen in einer einzigen Funktion wäre schwer wartbar, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz bietet auch Vorteile bei der Wartung, da Sie die URL ändern können, über die eine bestimmte Funktion bereitgestellt wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Beispielsweise fügt das Web-Framework Flask (Python) Routen zu View-Funktionen mithilfe eines Decorators hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Django hingegen erwartet von Entwicklern, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion zu definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können auf verschiedene Arten in einer HTTP-Anfrage kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server enthält die Aktualisierungsinformationen dagegen als „POST-Daten“ im Body der Anfrage. Die HTTP-Anfrage kann außerdem Informationen über die aktuelle Sitzung oder den aktuellen Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmgerechte Mechanismen für den Zugriff auf diese Informationen. Beispielsweise enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, den Anfragetyp (z. B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann außerdem in der Struktur der URL kodierte Informationen übergeben, indem im URL-Mapping „Capture Patterns“ definiert werden (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen zu speichern, sowohl Informationen, die mit Benutzern geteilt werden sollen, als auch Informationen über Benutzer. Web-Frameworks stellen häufig eine Datenbankschicht bereit, die Lese-, Schreib-, Abfrage- und Löschvorgänge in Datenbanken abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM bietet zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne zwangsläufig den Code ändern zu müssen, der sie verwendet. Dadurch können Entwickler für die Merkmale verschiedener Datenbanken basierend auf ihrer Verwendung optimieren.
- Eine grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dadurch lässt sich einfacher und sicherer prüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert werden, das richtige Format haben (z. B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Codemuster verwenden, um schädliche Dinge zu tun, etwa Datenbanksätze zu löschen).

Das Web-Framework Django stellt beispielsweise ein ORM bereit und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Model_. Das Model legt die zu speichernden Feld-_Typen_ fest und kann eine Validierung auf Feldebene dafür bereitstellen, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen erlauben). Die Felddefinitionen können außerdem ihre maximale Größe, Standardwerte, Optionen für Auswahllisten, Hilfetexte für die Dokumentation, Beschriftungstexte für Formulare usw. festlegen. Das Model enthält keine Informationen über die zugrunde liegende Datenbank, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Model für ein `Team`-Objekt. Es speichert den Teamnamen und die Teamstufe als Zeichenfelder und legt eine maximale Anzahl von Zeichen fest, die für jeden Datensatz gespeichert werden können. `team_level` ist ein Auswahlfeld, daher stellen wir außerdem eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert bereit.

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

Das Django-Model stellt eine einfache Abfrage-API für die Suche in der Datenbank bereit. Diese kann gleichzeitig mit unterschiedlichen Kriterien gegen mehrere Felder abgleichen (z. B. exakt, ohne Berücksichtigung der Groß-/Kleinschreibung, größer als usw.) und komplexe Anweisungen unterstützen (beispielsweise können Sie eine Suche nach U11-Teams angeben, deren Teamname mit „Fr“ beginnt oder mit „al“ endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Resource-Handler), um alle unsere U09-Teams anzuzeigen. In diesem Fall geben wir an, dass wir nach allen Datensätzen filtern möchten, bei denen das Feld `team_level` exakt den Text „U09“ enthält (beachten Sie unten, wie dieses Kriterium als Argument an die Funktion `filter()` übergeben wird, wobei Feldname und Abgleichstyp durch doppelte Unterstriche getrennt sind: **team_level\_\_exact**).

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

Web-Frameworks stellen häufig Template-Systeme bereit. Mit diesen können Sie die Struktur eines Ausgabedokuments festlegen und Platzhalter für Daten verwenden, die beim Generieren einer Seite hinzugefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erzeugen.

Web-Frameworks stellen oft einen Mechanismus bereit, mit dem sich aus gespeicherten Daten einfach andere Formate generieren lassen, darunter {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Beispielsweise ermöglicht das Django-Template-System die Angabe von Variablen mit einer „doppelten geschweiften Klammer“-Syntax (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Template-System unterstützt außerdem Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates erlauben, einfache Operationen auszuführen, etwa das Iterieren über Listenwerte, die an das Template übergeben wurden.

> [!NOTE]
> Viele andere Template-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Das folgende Code-Snippet zeigt, wie dies funktioniert. In Fortsetzung des Beispiels mit dem „jüngsten Team“ aus dem vorherigen Abschnitt erhält das HTML-Template von der View eine Listenvariable namens `youngest_teams`. Innerhalb des HTML-Grundgerüsts befindet sich ein Ausdruck, der zunächst prüft, ob die Variable `youngest_teams` existiert, und dann in einer `for`-Schleife über sie iteriert. Bei jeder Iteration zeigt das Template den Wert `team_name` des Teams in einem Listenelement an.

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

Für nahezu jede Programmiersprache, die Sie verwenden möchten, gibt es zahlreiche Web-Frameworks (im folgenden Abschnitt führen wir einige der beliebteren Frameworks auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand für ein Web-Framework hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, wie gut seine Dokumentation ist und wie groß und aktiv seine Community ist. Wenn Sie bei absolut null Programmiererfahrung anfangen, sollten Sie Django in Betracht ziehen (es ist anhand der obigen Kriterien eines der am einfachsten zu erlernenden Frameworks). Wenn Sie Teil eines Entwicklungsteams sind, das bereits umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, ist es sinnvoll, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind. Sie umfasst sowohl den Aufwand zum Schreiben als auch zum Warten von Code (da Sie keine neuen Funktionen schreiben können, während alte defekt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für den „Lernaufwand“ — z. B. Dokumentation, Community, Programmiererfahrung usw. — weitere Faktoren sind:
  - _Zweck/Ursprung des Frameworks_: Einige Web-Frameworks wurden ursprünglich geschaffen, um bestimmte Arten von Problemen zu lösen, und sind weiterhin _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Django wurde beispielsweise zur Unterstützung der Entwicklung einer Zeitungswebsite erstellt und eignet sich daher gut für Blogs und andere Websites, auf denen Inhalte veröffentlicht werden. Flask ist dagegen ein wesentlich schlankeres Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten ausgeführt werden.
  - _Meinungsstark vs. nicht meinungsstark_: Ein meinungsstarkes Framework ist ein Framework, in dem empfohlene „beste“ Vorgehensweisen zur Lösung eines bestimmten Problems existieren. Meinungsstarke Frameworks sind tendenziell produktiver, wenn Sie häufige Probleme lösen möchten, weil sie Sie in die richtige Richtung führen; manchmal sind sie jedoch weniger flexibel.
  - _Batteries included vs. selbst beschaffen_: Einige Web-Frameworks enthalten standardmäßig Tools/Bibliotheken, die jedes Problem lösen, an das ihre Entwickler denken können, während schlankere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr schlankes Framework ist). Frameworks, die alles enthalten, erleichtern häufig den Einstieg, da Sie bereits alles haben, was Sie benötigen, und es wahrscheinlich gut integriert und dokumentiert ist. Wenn ein kleineres Framework jedoch alles enthält, was Sie jemals benötigen werden, kann es in stärker eingeschränkten Umgebungen ausgeführt werden und verfügt über eine kleinere und leichter zu erlernende Teilmenge von Dingen.
  - _Ob das Framework gute Entwicklungspraktiken fördert_: Beispielsweise führt ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, zu besser wartbarem Code als eines, das keine Erwartungen an Entwickler stellt. Ebenso kann das Framework-Design einen großen Einfluss darauf haben, wie einfach sich Code testen und wiederverwenden lässt.

- **Leistung des Frameworks/der Programmiersprache:** Üblicherweise ist „Geschwindigkeit“ nicht der wichtigste Faktor bei der Auswahl, da selbst relativ langsame Laufzeitumgebungen wie Python für mittelgroße Websites auf moderater Hardware mehr als „gut genug“ sind. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durch die Kosten für Lernen und Wartung durchaus aufgehoben werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie die Anzahl der eingehenden Anfragen nicht mehr bewältigen kann, da Benutzer darauf zugreifen. An diesem Punkt können Sie erwägen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine vollständige Webantwort oder Teile davon speichern, damit sie bei nachfolgenden Anfragen nicht erneut berechnet werden muss. Die Rückgabe einer zwischengespeicherten Antwort ist wesentlich schneller als ihre erstmalige Berechnung. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks bieten unterschiedliche Unterstützungsstufen dafür, festzulegen, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website außerordentlich erfolgreich ist, werden Sie die Vorteile des Cachings ausschöpfen und sogar die Grenzen der _vertikalen Skalierung_ erreichen (Ausführung Ihrer Webanwendung auf leistungsfähigerer Hardware). Dann müssen Sie möglicherweise _horizontal skalieren_ (die Last teilen, indem Sie Ihre Website auf mehrere Webserver und Datenbanken verteilen) oder „geografisch“ skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied dafür machen, wie einfach sich Ihre Website skalieren lässt.
- **Websicherheit:** Einige Web-Frameworks bieten bessere Unterstützung bei der Behandlung häufiger Webangriffe. Django bereinigt beispielsweise alle Benutzereingaben aus HTML-Templates, sodass vom Benutzer eingegebenes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten ähnlichen Schutz, dieser ist jedoch nicht immer standardmäßig aktiviert.

Es gibt viele weitere mögliche Faktoren, darunter Lizenzierung, ob das Framework aktiv weiterentwickelt wird usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie Ihr Framework wahrscheinlich anhand der „Lernfreundlichkeit“ auswählen. Neben der „Benutzerfreundlichkeit“ der Sprache selbst sind hochwertige Dokumentation/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um später im Kurs unsere Beispiele zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Rufen wir die Hauptwebsites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) auf und sehen wir uns deren Dokumentation und Community an.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt).
>    - Klicken Sie auf die Menülinks zur Dokumentation (mit Bezeichnungen wie „Documentation, Guide, API Reference, Getting Started“ usw.).
>    - Können Sie Themen sehen, die zeigen, wie URL-Routing, Templates und Datenbanken/Models eingerichtet werden?
>    - Sind die Dokumente klar verständlich?
> 2. Navigieren Sie zu den Mailinglisten der einzelnen Websites (über Community-Links erreichbar).
>    - Wie viele Fragen wurden in den letzten Tagen veröffentlicht?
>    - Wie viele davon haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Kommen wir nun weiter und besprechen einige konkrete serverseitige Web-Frameworks.

Die folgenden serverseitigen Frameworks stellen _einige_ der zum Zeitpunkt des Schreibens beliebtesten verfügbaren Frameworks dar. Alle verfügen über alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv weiterentwickelt, haben engagierte Communities, die Dokumentation erstellen und Benutzern in Diskussionsforen helfen, und werden von einer großen Zahl bekannter Websites verwendet. Es gibt viele weitere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Framework-Websites!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein Web-Framework auf hoher Ebene für Python, das schnelle Entwicklung und ein sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern erstellt und übernimmt einen Großteil der Mühen der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie „Batteries included“ und stellt fast alles bereit, was die meisten Entwickler standardmäßig tun möchten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und verfügt über umfangreiche und aktuelle Dokumentation. Es ist außerdem schnell, sicher und sehr skalierbar. Da Django auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Websites, die Django verwenden (von der Django-Startseite): Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Microframework für Python.

Obwohl minimalistisch, kann Flask sofort ernsthafte Websites erstellen. Es enthält einen Entwicklungsserver und Debugger sowie Unterstützung für [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/)-Request-Dispatching. Es verfügt über gute Dokumentation und eine aktive Community.

Flask ist äußerst beliebt geworden, insbesondere bei Entwicklern, die Webdienste auf kleinen Systemen mit eingeschränkten Ressourcen bereitstellen müssen (z. B. beim Ausführen eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, nicht meinungsstarkes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung zur Ausführung von JavaScript). Es stellt einen robusten Funktionsumfang für Web- und Mobilanwendungen bereit und liefert nützliche HTTP-Hilfsmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teilweise weil es clientseitigen JavaScript-Webprogrammierern den Übergang zur serverseitigen Entwicklung erleichtert, und teilweise weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtiges Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu erzeugen).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (beispielsweise werden Datenbankzugriff sowie Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche für einen bestimmten Zweck am besten geeignet ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (die sowohl server- als auch clientseitige Frameworks umfassen) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele bekannte Unternehmen verwenden Express, darunter Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeitumgebung und ein Framework, die auf Chrome V8 und [Rust](https://rust-lang.org/) aufbauen.

Deno wird von [Tokio](https://tokio.rs/) betrieben — einer asynchronen Laufzeitumgebung auf Rust-Basis, die es ermöglicht, Webseiten schneller bereitzustellen. Es verfügt außerdem über interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), wodurch binärer Code zur Verwendung auf der Clientseite kompiliert werden kann. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der auf natürliche Weise bessere Sicherheit gewährleistet.

Zu den Funktionen von Deno gehören:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für den Zugriff auf **Dateien**, **Netzwerk** oder **Umgebung**, sofern dieser nicht ausdrücklich erlaubt wurde.
- TypeScript-Unterstützung **sofort einsatzbereit**.
- First-Class-`await`-Mechanismus.
- Integrierte Testfunktion und Code-Formatierer (`deno fmt`)
- (JavaScript-)Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind und den Namespace `Deno` ausschließen (oder darauf einen Feature-Test durchführen), sollten direkt in jedem modernen Browser funktionieren.
- Bündelung von Skripten in einer einzelnen JavaScript-Datei.

Deno bietet eine einfache, aber leistungsfähige Möglichkeit, JavaScript sowohl für client- als auch für serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (üblicherweise als „Ruby on Rails“ bezeichnet) ist ein für die Programmiersprache Ruby geschriebenes Web-Framework.

Rails folgt einer Django sehr ähnlichen Designphilosophie. Wie Django stellt es Standardmechanismen für das Routing von URLs, den Zugriff auf Daten aus einer Datenbank, die Generierung von HTML aus Templates und die Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}} bereit. Ebenso fördert es die Verwendung von Entwurfsmustern wie DRY („don't repeat yourself“ — schreiben Sie Code nach Möglichkeit nur einmal), MVC (Model-View-Controller) und einer Reihe weiterer Muster.

Aufgrund spezifischer Designentscheidungen und der Natur der Sprachen gibt es natürlich viele Unterschiede.

Rails wurde für bekannte Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Mühen der Entwicklung zu verringern, indem es häufige Aufgaben vereinfacht, die in den meisten Webprojekten verwendet werden, etwa:

- [Einfache, schnelle Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für die Speicherung von [Sitzungen](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache).
- Ausdrucksstarkes, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Verarbeitung von Hintergrundaufgaben](https://laravel.com/docs/queues).
- [Übertragung von Echtzeitereignissen](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich und zugleich leistungsfähig und stellt die für große, robuste Anwendungen benötigten Tools bereit.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein von Microsoft entwickeltes Open-Source-Web-Framework zum Erstellen moderner Webanwendungen und Dienste. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, sie für die Nutzung durch Millionen von Benutzern skalieren und einfach komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufbaut, wodurch Programmierer ASP.NET-Code mit jeder unterstützten .NET-Sprache schreiben können (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Sie war einfach genug, um ohne große Sprachkenntnisse einzusteigen, und leistungsfähig genug, um Sie weiterzubringen. Mojolicious setzt diese Idee mit modernsten Technologien um.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, mit dem sich Prototypen in einer einzelnen Datei einfach zu gut strukturierten MVC-Webanwendungen weiterentwickeln lassen.
- RESTful-Routen, Plugins, Befehle, Perl-artige Templates, Content Negotiation, Sitzungsverwaltung, Formularvalidierung, Test-Framework, Server für statische Dateien, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Full-Stack-HTTP- und WebSocket-Client/Server-Implementierung mit Unterstützung für IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Sockets, Comet (Long Polling), Keep-Alive, Connection Pooling, Timeouts, Cookies, Multipart und gzip-Komprimierung.
- JSON- und HTML/XML-Parser und -Generatoren mit Unterstützung für CSS-Selektoren.
- Sehr saubere, portable und objektorientierte reine-Perl-API ohne versteckte Magie.
- Neuer Code, der auf jahrelanger Erfahrung basiert, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten von [Spring](https://spring.io/). Es ist ein guter Ausgangspunkt für serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es keineswegs das einzige auf [Java](https://www.java.com/) basierende Framework ist, lässt es sich einfach verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie „einfach ausführen“ können. Es ist eine meinungsstarke Sicht auf die Spring-Plattform und Bibliotheken von Drittanbietern, ermöglicht Ihnen aber den Einstieg mit minimalem Aufwand und minimaler Konfiguration.

Es kann für kleine Probleme verwendet werden, seine Stärke liegt jedoch im Aufbau größerer Anwendungen, die einen Cloud-Ansatz verwenden. Üblicherweise laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Benutzerinteraktionen bereitstellen und andere Backend-Arbeit erledigen (z. B. Zugriff auf Datenbanken oder andere Dienste). Load Balancer helfen dabei, Redundanz und Zuverlässigkeit sicherzustellen oder eine geografisch lokalisierte Verarbeitung von Benutzeranfragen zu ermöglichen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat außerdem einen Überblick auf hoher Ebene über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks besprochen. Sie sollten nun zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Falls nicht, machen Sie sich keine Sorgen — später im Kurs stellen wir Ihnen ausführliche Tutorials zu Django und Express bereit, damit Sie Erfahrung mit der tatsächlichen Arbeit mit einem Web-Framework sammeln können.

Im nächsten Artikel dieses Moduls ändern wir die Richtung leicht und betrachten die Websicherheit.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
