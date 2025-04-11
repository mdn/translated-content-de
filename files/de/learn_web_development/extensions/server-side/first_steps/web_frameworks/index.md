---
title: Server-seitige Web-Frameworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat Ihnen gezeigt, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen von einem Webbrowser zu antworten. Mit diesem Wissen ist es an der Zeit, zu erforschen, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen könnten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis davon, wie serverseitiger Code
        HTTP-Anfragen behandelt und darauf antwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und die Leser dazu bringen,
        über die Auswahl eines Frameworks für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten, die aus echten Web-Frameworks übernommen wurden. Machen Sie sich keine Sorgen, wenn nicht **alles** jetzt schon Sinn ergibt; wir werden Sie durch den Code in unseren frameworkspezifischen Modulen leiten.

## Überblick

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die es einfacher machen, Webanwendungen zu schreiben, zu warten und zu skalieren. Sie bieten Tools und Bibliotheken, die gängige Webentwicklungsaufgaben vereinfachen, einschließlich der Zuordnung von URLs zu den entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z.B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Web-Angriffe.

Im nächsten Abschnitt werden einige Details erläutert, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Wir erklären dann einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Tools und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen – es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionalitäten behandelt, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird unbedingt alle diese Funktionen bieten!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll – Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code erzeugt, der mit diesen Anfragen und Antworten arbeitet. Dies bedeutet, dass Sie einfacher mit höherstufigem Code interagieren können, anstatt mit niederen Netzwerkprimitiven.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall eine Zeichenkette).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen an den entsprechenden Handler weiterleiten

Die meisten Websites bieten eine Reihe verschiedener Ressourcen, die über unterschiedliche URLs zugänglich sind. Diese alle in einer Funktion zu behandeln, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster spezifischen Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL, die zur Bereitstellung eines bestimmten Features verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Beispielsweise fügt das Flask (Python) Web Framework Routen zu View-Funktionen mit einem Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Dagegen erwartet Django, dass Entwickler eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Weise kodiert sein. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server zu erhalten, kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, enthält stattdessen die Aktualisierungsinformationen als "POST-Daten" im Rumpf der Anfrage. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmierfreundliche Mechanismen zum Zugriff auf diese Informationen. Beispielsweise enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anfragetyp (z.B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen dekodieren, die in der Struktur der URL durch die Definition von "Erfassungsmustern" im URL-Mapper kodiert sind (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl zur gemeinsamen Nutzung mit Benutzern als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen der Datenbank abstrahiert. Diese Abstraktionsebene wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Datenvalidierung kann innerhalb des Frameworks implementiert werden. Dies macht es einfacher und sicherer zu überprüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert sind, das richtige Format haben (z.B. eine E-Mail-Adresse) und auf keine Weise bösartig sind (Hacker können bestimmte Muster von Code verwenden, um schlechte Dinge zu tun, wie das Löschen von Datenbankaufzeichnungen).

Zum Beispiel bietet das Django Web Framework einen ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell spezifiziert die zu speichernden Feld*typen*, die Feldvalidierung auf der Feldebene bereitstellen können, um zu überprüfen, welche Informationen gespeichert werden können (z.B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. angeben. Das Modell enthält keine Informationen über die zugrunde liegende Datenbank, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Der `team_level` ist ein Auswahlfeld, so dass wir auch eine Zuordnung zwischen den anzuzeigenden und den zu speichernden Daten sowie einen Standardwert bereitstellen.

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

Das Django-Modell bietet eine einfache Abfrageschnittstelle für die Suche in der Datenbank. Diese kann gegen eine Reihe von Feldern gleichzeitig mit unterschiedlichen Kriterien (z.B. exakt, groß-/kleinschreibungsempfindlich, größer als usw.) abgeglichen werden und unterstützt komplexe Anweisungen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. In diesem Fall geben wir an, dass wir für alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei Feldname und Übereinstimmungstyp durch Doppelte Unterstriche getrennt sind: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templatesysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die hinzugefügt werden, wenn eine Seite generiert wird. Templates werden oft verwendet, um HTML zu erstellen, können jedoch auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der es einfach macht, andere Formate aus gespeicherten Daten zu generieren, einschließlich [JSON](/de/docs/Glossar/JSON) und [XML](/de/docs/Glossar/XML).

Zum Beispiel ermöglicht es das Django-Templatesystem, Variablen mithilfe einer "Doppel-Handlebars"-Syntax zu spezifizieren (z.B. `\{{ variable_name }}`), die durch Werte ersetzt wird, die bei der Rendering einer Seite aus der View-Funktion übergeben werden. Das Templatesystem bietet auch Unterstützung für Ausdrücke (mit Syntax: `{% Ausdruck %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listeneinträgen, die in das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templatesysteme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Das folgende Code-Snippet zeigt, wie dies funktioniert. Fortsetzend aus dem "jüngstes Team"-Beispiel aus dem vorherigen Abschnitt, wird dem HTML-Template von der View eine Listenvariable namens `youngest_teams` übergeben. Im HTML-Rahmen haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und dann über sie in einer `for`-Schleife iteriert. Bei jedem Iterationsschritt zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

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

## Anleitung zur Auswahl eines Web-Frameworks

Es existieren zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populärsten Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, der Konsistenz seiner API, der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie überhaupt keine Programmerfahrung haben, sollten Sie Django in Betracht ziehen (es ist eines der am einfachsten zu erlernenden Frameworks basierend auf den obigen Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits über umfassende Erfahrung mit einem bestimmten Web-Framework oder einer bestimmten Programmiersprache verfügt, macht es Sinn, bei diesem zu bleiben.
- **Produktivität:** Die Produktivität misst, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst den Aufwand zum Schreiben und Pflegen von Code (da Sie keine neuen Funktionen schreiben können, während alte defekt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für "Lernaufwand" – z.B. Dokumentation, Community, Programmerfahrung usw. – andere Faktoren sind:

  - _Zweck/Ursprung des Frameworks_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind nach wie vor _besser_ darin, Webanwendungen mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, daher ist es gut für Blogs und andere Sites, die das Veröffentlichen von Inhalten umfassen. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Webanwendungen, die auf eingebetteten Geräten ausgeführt werden.
  - _Opinionated vs. unopinionated_: Ein opinionated Framework ist eines, bei dem es empfohlene "beste" Wege gibt, ein bestimmtes Problem zu lösen. Opinionated Frameworks sind tendenziell produktiver, wenn Sie versuchen, verbreitete Probleme zu lösen, weil sie Sie in die richtige Richtung lenken, allerdings sind sie manchmal weniger flexibel.
  - _Inklusive vs. selber besorgen_: Einige Web-Frameworks enthalten Tools/Bibliotheken, die jedes Problem "standardmäßig" adressieren, während leichtere Frameworks von Webentwicklern erwarten, dass sie Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für das erstere, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher zu beginnen, da Sie bereits alles haben, was Sie benötigen, und es wahrscheinlich gut integriert und gut dokumentiert ist. Wenn allerdings ein kleineres Framework alles hat, was Sie je brauchen werden, kann es in eingeschränkteren Umgebungen laufen und hat einen kleineren und einfacheren zu lernenden Umfang.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird Code mit einem Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur ermutigt, um Code in logische Funktionen zu trennen, wartbarer sein als eines, das keine Erwartungen an Entwickler stellt. Ebenso kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Performance des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, können durch die Kosten für das Lernen und die Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website immer erfolgreicher wird, könnte es passieren, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, so wie Benutzer darauf zugreifen. An diesem Punkt könnten Sie in Erwägung ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine gesamte oder einen Teil einer Webantwort speichern, sodass sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller, als eine von Grund auf neu zu berechnen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Unterstützungslevel dafür, was für Inhalte zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, erschöpfen Sie die Vorteile des Caching und erreichen sogar die Grenzen der _vertikalen Skalierung_ (der Einsatz leistungsfähigerer Hardware zur Ausführung Ihrer Webanwendung). An diesem Punkt benötigen Sie möglicherweise eine _horizontale Skalierung_ (den Austausch von Lasten durch die Verteilung Ihrer Site auf mehrere Webserver und Datenbanken) oder eine "geografische Skalierung", da einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Site zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten eine bessere Unterstützung beim Umgang mit üblichen Web-Angriffen. Django beispielsweise bereinigt alle Benutzereingaben aus HTML-Templates, sodass benutzerdefinierte JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber es ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv entwickelt wird und so weiter.

Wenn Sie absoluter Anfänger im Programmieren sind, wählen Sie Ihr Framework wahrscheinlich basierend auf der "Lernleichtigkeit". Zusätzlich zur "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebseiten von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und deren Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptwebsites (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenülinks (mit Namen wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Sehen Sie Themen, die zeigen, wie man URL-Routing, Templates und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Site (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Lassen Sie uns nun weitergehen und ein paar spezifische serverseitige Web-Frameworks diskutieren.

Die unten aufgeführten serverseitigen Frameworks repräsentieren _einige_ der beliebtesten, die zum Zeitpunkt des Schreibens verfügbar sind. Alle von ihnen haben alles, was Sie benötigen, um produktiv zu sein – sie sind Open Source, befinden sich in aktiver Entwicklung, haben enthusiastische Communities, die Dokumentationen erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in einer großen Anzahl von hochkarätigen Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochrangiges Python-Web-Framework, das zur schnellen Entwicklung und zum sauberen, pragmatischen Entwurf ermutigt. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen viel von dem Ärger ab, der mit der Webentwicklung einhergeht, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu zu erfinden. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Inklusive von Haus aus" und bietet fast alles, was die meisten Entwickler "out of the box" benötigen könnten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Entwurfsprinzipien und hat eine umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht lesbar und wartbar.

Beliebte Websites, die Django verwenden (von der Django-Startseite), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask ernsthafte Websites out of the box erstellen. Es enthält einen Entwicklungsserver und Debugger und unterstützt [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) sowie RESTful-Anforderungsdispatching. Es hat gute Dokumentation und eine aktive Community.

Flask ist besonders bei Entwicklern beliebt geworden, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z.B. Ausführung eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnen-Controllern](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unopinionated, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (node ist eine browserlose Umgebung zur Ausführung von JavaScript). Es bietet eine robuste Reihe von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teils weil es den Übergang von clientseitigen JavaScript-Web-Programmierern zur serverseitigen Entwicklung erleichtert und teils weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtes Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht alle Komponenten, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime und -Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben – eine Rust-basierte asynchrone Laufzeit, die es ermöglicht, Webseiten schneller auszuliefern. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Clientseite ermöglicht. Deno zielt darauf ab, einige der Schlupflöcher in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) durch Bereitstellung eines Mechanismus zu schließen, der auf natürliche Weise eine bessere Sicherheit beibehält.

Die Funktionen von Deno umfassen:

- Sicherheit standardmäßig. [Deno-Module schränken Berechtigungen ein](https://docs.deno.com/runtime/fundamentals/security/) für den Zugriff auf **Dateien**, **Netzwerke** oder **Umgebungen**, es sei denn, sie sind ausdrücklich erlaubt.
- TypeScript-Unterstützung **von Haus aus**.
- Erstklassiger `await`-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`)
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, abgesehen von dem `Deno`-Namespace (oder auf diesen Feature testen), sollten direkt in jedem modernen Browser funktionieren.
- Skript-Bundling in eine einzige JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Server-Seiten-Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (üblicherweise als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Ruby-Programmiersprache geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardmäßige Mechanismen zum Routing von URLs, zum Zugriff auf Daten aus einer Datenbank, zur Generierung von HTML aus Templates und zur Formatierung von Daten als [JSON](/de/docs/Glossar/JSON) oder [XML](/de/docs/Glossar/XML). Es ermutigt ähnlich wie Django zur Verwendung von Entwurfsmustern wie DRY ("Don't Repeat Yourself" – schreibe Code, wenn möglich, nur einmal), MVC (Model-View-Controller) und einigen anderen.

Es gibt natürlich viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Sites genutzt, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu vereinfachen, indem es gängige Aufgaben, die in der Mehrzahl der Webprojekte verwendet werden, erleichtert, wie:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Back-Ends für [Session](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache) Speicherung.
- Ausdrucksstarkes, intuitives [Datenbank ORM](https://laravel.com/docs/eloquent).
- Datenbank-agnostische [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Verarbeitung von Hintergrundjobs](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, entwickelt von Microsoft zur Erstellung moderner Webanwendungen und Dienste. Mit ASP.NET können Sie schnell Websites basierend auf HTML, CSS und JavaScript erstellen, sie für die Nutzung durch Millionen von Benutzern skalieren und leicht komplexere Fähigkeiten hinzufügen, wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation.

Ein Unterscheidungsmerkmal für ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert und es Programmierern ermöglicht, ASP.NET-Code in jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) zu schreiben. Wie viele Microsoft-Produkte profitiert es von hervorragenden Tools (oft kostenlos), einer aktiven Entwicklergemeinschaft und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen genutzt.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Perl-Programmiersprache.

In den frühen Tagen des Webs lernten viele Menschen Perl aufgrund einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um zu beginnen, ohne viel über die Sprache zu wissen, und leistungsstark genug, um Sie am Laufen zu halten. Mojolicious implementiert diese Idee unter Verwendung modernster Technologien.

Zu den von Mojolicious bereitgestellten Funktionen gehören:

- Ein Echtzeit-Web-Framework, um einfach einseitige Prototypen in gut strukturierte MVC-Webanwendungen zu erweitern.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlung, Sitzungsmanagement, Formularvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long-Polling), Keep-Alive, Verbindungspooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Sehr saubere, tragbare und objektorientierte reine Perl-API ohne versteckte Magie.
- Frisch codiert auf Grundlage jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es eignet sich gut als Ausgangspunkt für serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige auf [Java](https://www.java.com/) basierende Framework ist, ist es einfach zu verwenden, um stand-alone, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie „einfach ausführen“ können. Es bietet einen meinungsbasierten Überblick über die Spring-Plattform und Drittanbieter-Bibliotheken, erlaubt jedoch, mit minimalem Aufwand und Konfiguration zu starten.

Es kann für kleine Aufgaben eingesetzt werden, aber seine Stärke liegt im Aufbau von groß angelegten Anwendungen, die einen Cloud-Ansatz verwenden. Üblicherweise laufen mehrere Anwendungen parallel, die miteinander kommunizieren, wobei einige die Benutzeroberfläche bereitstellen und andere im Backend arbeiten (z.B. Zugriff auf Datenbanken oder andere Dienste). Lastverteiler helfen, Redundanz und Zuverlässigkeit zu gewährleisten oder eine geolokalisierte Bearbeitung von Benutzeranfragen sicherzustellen, um die Reaktionsfähigkeit zu verbessern.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über ein paar beliebte Frameworks gegeben und Kriterien zur Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen könnten. Wenn nicht, dann keine Sorge – später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, die Ihnen etwas Erfahrung bei der tatsächlichen Arbeit mit einem Web-Framework vermitteln.

Für den nächsten Artikel in diesem Modul werden wir die Richtung leicht ändern und uns mit der Websicherheit beschäftigen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
