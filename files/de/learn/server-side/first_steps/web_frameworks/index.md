---
title: Server-seitige Web-Frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen erkunden wir nun, wie Web-Frameworks diese Aufgaben vereinfachen können, und geben Ihnen eine Vorstellung davon, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, wie serverseitiger Code
        HTTP-Anfragen bearbeitet und darauf reagiert (siehe <a
          href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können, und Leser dazu zu bringen, über die Auswahl eines Frameworks
        für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten, die aus realen Web-Frameworks stammen. Machen Sie sich keine Sorgen, wenn nicht **alles** jetzt Sinn ergibt; wir werden den Code in unseren framework-spezifischen Modulen durchgehen.

## Überblick

Server-seitige Web-Frameworks (auch bekannt als "Web-Anwendungs-Frameworks") sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Webentwicklungsaufgaben vereinfachen, einschließlich der Zuordnung von URLs zu geeigneten Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Ausgabeformatierung (z.B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet weitere Details dazu, wie Web-Frameworks die Webentwicklung erleichtern können. Wir erklären dann einige Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um häufige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen – es wird Ihr Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen besprochen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise alle diese Funktionen!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll – Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine einfachere Aufgabe haben, indem Sie mit einfacheren, höheren Codeebenen arbeiten, anstatt mit niedrigeren Netzwerkinfrastruktur-Primitiven.

Das Beispiel unten zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt mit Anfrageninformation und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe (in diesem Fall ein String) zurückgeben.

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen zum passenden Handler leiten

Die meisten Websites bieten eine Reihe verschiedener Ressourcen, die über verschiedene URLs zugänglich sind. All diese in einer Funktion zu verwalten, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster auf spezifische Handler-Funktionen zuzuordnen. Dieser Ansatz bietet auch in Bezug auf die Wartung Vorteile, da Sie die URL, die zur Lieferung einer bestimmten Funktion verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen über einen Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django erwartet, dass Entwickler eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^best/(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Den einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können auf verschiedene Arten in einer HTTP-Anfrage encodiert werden. Eine HTTP `GET`-Anfrage, um Dateien oder Daten vom Server zu erhalten, kann die erforderlichen Daten in URL-Parametern oder innerhalb der URL-Struktur codieren. Eine HTTP `POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, wird stattdessen die Aktualisierungsinformationen als „POST-Daten“ im Körper der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer im Client-seitigen Cookie enthalten.

Web-Frameworks bieten programmierersprachen-geeignete Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion weitergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anforderungstyp (z.B. ein HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen über die Struktur der URL weitergeben, indem „Capture-Muster“ im URL-Mapper definiert werden (siehe das letzte Codefragment im vorherigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl für Benutzer als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen in der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Objekt-Relationale Abbildung (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies vereinfacht und sichert die Überprüfung, dass Daten im richtigen Datentypenfeld der Datenbank gespeichert werden, das richtige Format haben (z.B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schädliche Dinge zu tun, wie z.B. das Löschen von Datenbankeinträgen).

Zum Beispiel bietet das Django Web-Framework ein ORM an und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell spezifiziert die Feld_typen_, die gespeichert werden sollen, die eine Validierung auf Feldebene des zu speichernden Inhalts bieten können (z.B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetext für die Dokumentation, Bezeichnungstext für Formulare etc. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Optionen und den zu speichernden Daten sowie einen Standardwert.

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

Das Django-Modell bietet eine einfache Abfrageschnittstelle für die Suche in der Datenbank. Dies kann gegen mehrere Felder zur gleichen Zeit mit verschiedenen Kriterien übereinstimmen (z.B. genau, nicht auf Groß-/Kleinschreibung achten, größer als usw.) und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams festlegen, die einen Teamnamen haben, der mit „Fr“ beginnt oder mit „al“ endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze filtern wollen, bei denen das `team_level`-Feld genau den Text „U09“ enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Übereinstimmungstyp über doppelte Unterstriche übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templatesysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die hinzugefügt werden, wenn eine Seite generiert wird. Templates werden häufig verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der es einfach macht, andere Formate aus gespeicherten Daten zu generieren, einschließlich [JSON](/de/docs/Glossary/JSON) und [XML](/de/docs/Glossary/XML).

Zum Beispiel erlaubt das Django-Templatesystem, Variablen mit einer „doppelten Klammer“-Syntax zu spezifizieren (z.B. `\{{ variable_name }}`), die bei der Seitengenerierung durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Templatesystem bietet auch Unterstützung für Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenelementen, die in das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templatesysteme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript) usw.

Das folgende Codesnippet zeigt, wie dies funktioniert. Was das „jüngste Team“-Beispiel aus dem vorherigen Abschnitt fortführt, wird das HTML-Template von der View-Funktion mit einer Listenvariablen namens `youngest_teams` übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst prüft, ob die `youngest_teams`-Variable vorhanden ist, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

```django
#best/templates/best/index.html

<!doctype html>
<html lang="en">
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

## Anleitung zur Auswahl eines Web-Frameworks

Es gibt zahlreiche Web-Frameworks, die für fast jede Programmiersprache, die Sie verwenden möchten, verfügbar sind (wir listen einige der beliebteren Frameworks im folgenden Abschnitt auf). Angesichts dieser Vielzahl an Möglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand für ein Web-Framework hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent seine API ist, wie gut seine Dokumentation ist und wie groß und aktiv seine Community ist. Wenn Sie absolut keine Programmiererfahrung haben, dann sollten Sie Django in Betracht ziehen (es gehört zu den einfachsten zu erlernenden basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits erhebliche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, dann macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand zur Erstellung als auch zur Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für den „Lernaufwand“ – z.B. Dokumentation, Community, Programmiererfahrung usw. – andere Faktoren schließen ein:

  - _Framework-Zweck/Herkunft_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind weiterhin _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Beispielsweise wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, daher eignet es sich gut für Blogs und andere Sites, die das Veröffentlichen beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend für die Erstellung von Web-Apps auf eingebetteten Geräten.
  - _Meinungsbetont vs. unaufdringlich_: Ein meinungsbetontes Framework ist eines, bei dem es empfohlene „beste“ Lösungsmethoden für ein bestimmtes Problem gibt. Meinungsbetonte Frameworks neigen dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Mitgelieferte Funktionen vs. holen Sie sie sich selbst_: Einige Web-Frameworks enthalten Werkzeuge/Bibliotheken, die jedes Problem ihrer Entwickler standardmäßig lösen, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtes Framework ist). Frameworks, die alles enthalten, sind oft einfacher, um loszulegen, weil Sie bereits alles haben, was Sie brauchen, und die Chancen stehen gut, dass es gut integriert und dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (jemals) brauchen, kann es in engeren Umgebungen laufen und hat eine kleinere und einfachere Menge von Dingen zu lernen.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Beispielsweise führt ein Framework, das eine [Model-View-Controller](/de/docs/Glossary/MVC)-Architektur zur logischen Trennung von Code fördert, zu wartbarerem Code als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, den Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist „Geschwindigkeit“ nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als „gut genug“ für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, können durchaus durch die Kosten des Lernens und der Wartung ausgeglichen werden.
- **Cache-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, da Benutzer darauf zugreifen. An diesem Punkt ziehen Sie möglicherweise die Unterstützung für Caching in Betracht. Caching ist eine Optimierung, bei der Sie die gesamtes oder Teile einer Web-Antwort speichern, sodass sie bei nachfolgenden Anfragen nicht erneut berechnet werden muss. Eine zwischengespeicherte Antwort zurückzugeben ist viel schneller als eine zu berechnen. Caching kann im Code oder im Server implementiert werden (siehe [Reverse Proxy](https://de.wikipedia.org/wiki/Reverse_Proxy)). Web-Frameworks bieten unterschiedlich starke Unterstützung bei der Definition von Inhalten, die zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Caches erschöpfen und sogar die Grenzen des _vertikalen Skalierens_ erreichen (indem Sie Ihre Webanwendung auf leistungsfähigerer Hardware ausführen). An diesem Punkt müssen Sie möglicherweise _horizontal skalieren_ (die Last durch die Verteilung Ihrer Site auf eine Reihe von Webservern und Datenbanken teilen) oder „geografisch“ skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied machen, wie einfach es ist, Ihre Site zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz vor häufigen Web-Angriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Templates, sodass Benutzer-Eingaben in JavaScript nicht ausgeführt werden können. Andere Frameworks bieten ähnlichen Schutz, aber er ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, darunter Lizenzierung, ob das Framework aktiv entwickelt wird usw.

Wenn Sie ein absoluter Anfänger im Programmieren sind, wählen Sie wahrscheinlich Ihr Framework basierend auf der „Einfachheit des Lernens“. Abgesehen von der „Benutzerfreundlichkeit“ der Sprache selbst, sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebseiten von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenü-Links (benannt wie "Documentation, Guide, API Reference, Getting Started", etc.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Templates und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailing-Listen für jede Seite (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Kommen wir nun zu einer Diskussion über einige spezifische serverseitige Web-Frameworks.

Die unten aufgeführten serverseitigen Frameworks stellen _einige_ der am häufigsten verwendeten zum Zeitpunkt des Schreibens dar. Alle von ihnen beinhalten alles, was Sie benötigen, um produktiv zu sein – sie sind Open Source, werden aktiv entwickelt, haben begeisterte Communities, die Dokumentationen erstellen und Benutzern in Diskussionsforen helfen, und sie werden in einer großen Anzahl von hochrangigen Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Beschreibungen kommen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochrangiges Web-Framework für Python, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern erstellt und übernimmt viel von der Mühe der Webentwicklung, so dass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie „Mitgelieferte Komponenten“ und bietet fast alles, was die meisten Entwickler „out of the box“ tun möchten. Weil alles enthalten ist, arbeitet alles zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentationen. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, lässt sich Django-Code leicht lesen und warten.

Beliebte Seiten, die Django verwenden (von der Django-Homepage), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Microframework für Python.

Obwohl minimalistisch, kann Flask ernsthafte Websites von Grund auf erstellen. Es enthält einen Entwicklungsserver und Debugger und unterstützt [Jinja2](https://github.com/pallets/jinja)-Templates, sichere Cookies, [Unittesting](https://de.wikipedia.org/wiki/Unittesting) und [RESTful](https://restapitutorial.com/)-Anfragedispatching. Es hat eine gute Dokumentation und eine aktive Community.

Flask ist extrem beliebt geworden, insbesondere für Entwickler, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z.B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) ausführen, etc.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, nicht meinungsbetontes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung für das Ausführen von JavaScript). Es bietet eine robuste Reihe von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und [Middleware](/de/docs/Glossary/Middleware).

Express ist extrem beliebt, teilweise weil es den Übergang von clientseitigem JavaScript-Web-Programmierern in die serverseitige Entwicklung erleichtert, und teilweise weil es ressourcenschonend ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads, anstatt separate Prozesse für jede neue Webanfrage zu starten).

Weil Express ein minimalistisches Web-Framework ist, integriert es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen über unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochrangige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit und Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufgebaut ist.

Deno wird von [Tokio](https://tokio.rs/) angetrieben – einem auf Rust basierenden asynchronen Laufzeitumgebung, die es ihm ermöglicht, Webseiten schneller zu bedienen. Es bietet auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bietet, der auf natürliche Weise bessere Sicherheit aufrechterhält.

Deno's Merkmale umfassen:

- Sicherheit standardmäßig. [Deno-Module schränken Berechtigungen](/rechtsex.regeln/Humann-deno.com/runtime/fundamentals/security/) für **Datei**, **Netzwerk** oder **Umgebungs**zugriff ein, es sei denn, sie sind ausdrücklich erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Ersterklässiger Await-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`)
- (JavaScript) Browserkompatibilität: Deno-Programme, die vollständig in JavaScript ohne den `Deno`-Namespace (oder mit der Anwesenheit von Funktionen) geschrieben sind, sollten direkt in jedem modernen Browser funktionieren.
- Skript-Bundling in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch die Server-Seiten-Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (normalerweise als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es Standardmechanismen zum Routing von URLs, zum Zugriff auf Daten aus einer Datenbank, zur Generierung von HTML aus Templates und zur Formatierung von Daten als [JSON](/de/docs/Glossary/JSON) oder [XML](/de/docs/Glossary/XML). Es fördert ähnlich die Nutzung von Designmustern wie DRY („don't repeat yourself“ — schreiben Sie Code nur einmal, wenn möglich), MVC (model-view-controller) und eine Reihe anderer.

Es gibt natürlich viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Sites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, den Schmerz aus der Entwicklung zu nehmen, indem es häufige Aufgaben, die in der Mehrheit der Webprojekte verwendet werden, erleichtert, wie:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency Injection-Container](https://laravel.com/docs/container).
- Mehrere Back-Ends für [Sitzungs](https://laravel.com/docs/session)- und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrucksstarker, intuitiver [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbank-unabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Verarbeitung von Hintergrundaufgaben](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet die benötigen Werkzeuge für große, robuste Anwendungen.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, entwickelt von Microsoft, für die Entwicklung moderner Webanwendungen und -dienste. Mit ASP.NET können Sie schnell Webseiten basierend auf HTML, CSS und JavaScript erstellen, diese skalieren für die Nutzung durch Millionen von Benutzern und problemlos komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf dem [Common Language Runtime](https://de.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, die es Programmierern ermöglicht, ASP.NET-Code mit einer unterstützten .NET-Sprache zu schreiben (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs haben viele Leute Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI) gelernt. Es war einfach genug, um anzufangen, ohne viel über die Sprache zu wissen und mächtig genug, um weiterzukommen. Mojolicious implementiert diese Idee mit neuesten Technologien.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um einfach Ein-File-Prototypen zu gut strukturierten MVC-Webanwendungen wachsen zu lassen.
- RESTful Routen, Plugins, Befehle, Perl-artige Templates, Inhaltsverhandlung, Sitzungsverwaltung, Formularvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domainsocket, Comet (long polling), Keepalive, Verbindungs-Pooling, Timeout, Cookie, Mehrparteien und Gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektorunterstützung.
- Sehr saubere, portable und objektorientierte pure Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) angeboten werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/de/).

Obwohl es definitiv nicht das einzige Framework basierend auf [Java](https://www.java.com/de/) ist, ist es einfach zu verwenden, um Standalone, produktionsfähige Spring-basierte Anwendungen zu erstellen, die „einfach laufen“. Es ist eine meinungsbetonte Ansicht auf der Spring-Plattform und Drittanbieter-Bibliotheken, erlaubt jedoch, mit minimalem Aufwand und Konfiguration zu starten.

Es kann für kleine Probleme verwendet werden, seine Stärke liegt jedoch im Aufbau größerer Skalierungsanwendungen, die den Cloud-Ansatz nutzen. Normalerweise laufen mehrere Anwendungen parallel, die miteinander sprechen, wobei einige Benutzerinteraktionen bieten und andere im Backend arbeiten (z.B. Datenbanken oder andere Dienste erreichen). Lastverteiler helfen, Redundanz und Zuverlässigkeit zu gewährleisten oder ermöglichen geografisch angepasstes Handling von Benutzeranfragen, um Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Es wurde auch ein Überblick über einige beliebte Frameworks gegeben und Kriterien zur Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten nun zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung wählen können. Wenn nicht, machen Sie sich keine Sorgen – später im Kurs geben wir Ihnen detaillierte Tutorials zu Django und Express, um Ihnen einige Erfahrungen im tatsächlichen Arbeiten mit einem Web-Framework zu vermitteln.

Im nächsten Artikel in diesem Modul werden wir die Richtung leicht ändern und uns mit Web-Sicherheit befassen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
