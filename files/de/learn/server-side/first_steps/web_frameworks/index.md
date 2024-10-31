---
title: Serverseitige Web-Frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 41a27d6c0f8e44f1b9a3dabddd9315655b367b77
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

Der vorherige Artikel zeigte, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen ist es nun an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und einen Eindruck davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf antwortet (siehe <a
          href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und die Leser dazu bringen, über die Auswahl eines Frameworks
        für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte illustrieren einige Punkte anhand von Codefragmenten, die aus realen Web-Frameworks entnommen wurden. Machen Sie sich keine Sorgen, wenn nicht **alles** jetzt schon Sinn macht; wir werden Sie durch den Code in unseren frameworkspezifischen Modulen führen.

## Überblick

Serverseitige Web-Frameworks (auch als "Web Application Frameworks" bezeichnet) sind Software-Frameworks, die es einfacher machen, Webanwendungen zu schreiben, zu warten und zu skalieren. Sie bieten Werkzeuge und Bibliotheken, die gewöhnliche Webentwicklungstätigkeiten vereinfachen, einschließlich der Zuordnung von URLs zu den entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z.B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erklären wir einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gewöhnliche Webentwicklungsarbeiten zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen besprochen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird notwendigerweise all diese Funktionen bieten!).

### Arbeiten Sie direkt mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine einfachere Aufgabe haben, indem Sie mit einfacherem, höherstufigem Code arbeiten, anstatt mit niederschwelligeren Netzwerkgrundlagen.

Das folgende Beispiel zeigt, wie das im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt mit Anforderungsinformationen und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Leiten Sie Anfragen an den entsprechenden Handler weiter

Die meisten Websites bieten eine Reihe von verschiedenen Ressourcen, die über verschiedene URLs zugänglich sind. Wenn man diese alle in einer Funktion behandelt, wäre das schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster auf bestimmte Handlerfunktionen abzubilden. Diese Vorgehensweise hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die für eine bestimmte Funktion verwendet wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen mithilfe eines Decorators hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django erwartet, dass Entwickler eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können in einer HTTP-Anfrage auf verschiedene Arten kodiert werden. Eine HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann kodieren, welche Daten in URL-Parametern oder innerhalb der URL-Struktur benötigt werden. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Anforderungstext enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmierungssprachengerechte Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften für den Zugriff auf die Ziel-URL, den Anforderungstyp (z.B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen kodiert in der Struktur der URL durch die Definition von "Erfassungsmustern" im URL-Mapper übergeben (siehe das letzte Codefragment im obigen Abschnitt).

### Abstrahieren und vereinfachen Sie den Datenbankzugriff

Websites verwenden Datenbanken, um Informationen sowohl zur Weitergabe an Benutzer als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORMs hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank austauschen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht Entwicklern, für die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies erleichtert und sichert es, zu überprüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert werden, das richtige Format haben (z.B. eine E-Mail-Adresse) und in keiner Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schädliche Dinge zu tun, wie das Löschen von Datenbankeinträgen).

Zum Beispiel bietet das Django Web-Framework ein ORM und bezeichnet das Objekt, das verwendet wird, um die Struktur eines Datensatzes zu definieren, als _Modell_. Das Modell gibt die zu speichernden Feld*typen* an, die auf Feldebene eine Validierung darüber bieten können, welche Informationen gespeichert werden dürfen (z.B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen akzeptieren). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetext für die Dokumentation, Bezeichnungsüberschriften für Formulare usw. angeben. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Codefragment unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Die `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten, zusammen mit einem Standardwert.

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

Das Django-Modell bietet ein einfaches Abfrage-API zum Durchsuchen der Datenbank. Dies kann gegen eine Anzahl von Feldern gleichzeitig mit unterschiedlichen Kriterien abgleichen (z.B. exakt, keine Berücksichtigung der Groß- und Kleinschreibung, größer als, etc.) und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Codefragment zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir für alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldnamen und Übereinstimmungstyp, getrennt durch doppelte Unterstriche, übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templating-Systeme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments festzulegen, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite hinzugefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, um es einfach zu machen, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel ermöglicht das Django-Template-System, Variablen mit einer "doppelten-Klammern"-Syntax anzugeben (z.B. `\{{ variable_name }}`), die durch Werte aus der View-Funktion ersetzt werden, wenn eine Seite gerendert wird. Das Template-System unterstützt auch Ausdrücke (mit Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Durchlaufen von Listenwerten, die in das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), etc.

Das Codefragment unten zeigt, wie das funktioniert. Fortführend mit dem Beispiel "jüngstes Team" aus dem vorherigen Abschnitt, wird dem HTML-Template eine Listenvariable namens `youngest_teams` von der View übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

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

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der beliebteren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand für ein Web-Framework hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, von der Konsistenz seiner API, der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie von absolut keiner Programmiererfahrung ausgehen, ziehen Sie Django in Betracht (es ist eines der am einfachsten zu erlernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits erhebliche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie sich mit dem Framework vertraut gemacht haben, und beinhaltet sowohl den Aufwand, Code zu schreiben, als auch ihn zu warten (da Sie keine neuen Funktionen schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich wie die für den "Lernaufwand" — z.B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren sind:

  - _Framework-Zweck/Herkunft_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind nach wie vor _besser_ geeignet, um Web-Apps mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungs-Website zu unterstützen, daher eignet es sich gut für Blogs und andere Seiten, die Inhalte veröffentlichen. Im Gegensatz dazu ist Flask ein viel leichtergewichtiges Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. meinungsfrei_: Ein meinungsstarkes Framework ist eines, bei dem es empfohlene "beste" Wege gibt, ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks neigen dazu, produktiver zu sein, wenn Sie versuchen, gemeinsame Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Batterien inklusive vs. selbst besorgen_: Einige Web-Frameworks beinhalten Werkzeuge/Bibliotheken, die jedes Problem lösen, an das ihre Entwickler denken können "standardmäßig", während leichtgewichtigere Frameworks erwarten, dass Webentwickler Lösungen zu Problemen aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher einzusteigen, da Sie bereits alles haben, was Sie brauchen, und die Chancen stehen gut, dass es gut integriert und dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (jemals) brauchen, kann es in restriktierteren Umgebungen laufen und eine kleinere und einfachere Auswahl an Dingen zum Lernen haben.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}} Architektur fördert, eine Trennung des Codes in logische Funktionen bewirken, die zu wartbarerem Code führen wird, als eines, das keine besonderen Anforderungen an Entwickler stellt. Ebenso kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** In der Regel ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, können durchaus durch die Kosten des Lernens und der Wartung aufgewogen werden.
- **Cache-Unterstützung:** Wenn Ihre Website immer erfolgreicher wird, können Sie feststellen, dass sie die Anzahl an Anfragen, die sie erhält, nicht mehr bewältigen kann, da Benutzer darauf zugreifen. An diesem Punkt könnten Sie in Erwägung ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine Webantwort ganz oder teilweise speichern, damit sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Eine zwischengespeicherte Antwort zurückzugeben, ist viel schneller als eine zu berechnen. Caching kann im Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Niveaus an Unterstützung dafür, was zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website außerordentlich erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen des _Vertical Scaling_ erreichen (wenn Sie Ihre Web-Anwendung auf leistungsfähigerer Hardware laufen lassen). An diesem Punkt könnten Sie _horizontal skalieren_ müssen (die Last teilen, indem Sie Ihre Seite auf eine Anzahl von Webservern und Datenbanken verteilen), oder "geografisch" skalieren, weil einige Ihrer Kunden weit entfernt von Ihrem Server sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied machen, wie einfach es ist, Ihre Seite zu skalieren.
- **Websicherheit:** Einige Web-Frameworks bieten bessere Unterstützung für den Umgang mit häufigen Webangriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Templates, damit vom Benutzer eingegebene JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber er ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich der Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, wählen Sie Ihr Framework wahrscheinlich basierend auf der "Lernleichtigkeit". Neben der "Leichtigkeit der Sprache" selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um später im Kurs unsere Beispiele zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebsites für [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und deren Dokumentation und Community prüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Links zum Dokumentationsmenü (benannt als "Documentation, Guide, API Reference, Getting Started" usw.).
>    - Sehen Sie Themen, die zeigen, wie man URL-Routing, Templates und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Seite (erreichbar über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Lassen Sie uns jetzt fortfahren und ein paar spezifische serverseitige Web-Frameworks diskutieren.

Die unten aufgeführten serverseitigen Frameworks repräsentieren _einige_ der zum Zeitpunkt der Abfassung beliebtesten. Alle haben alles, was Sie brauchen, um produktiv zu sein — sie sind Open Source, werden aktiv entwickelt, haben begeisterte Communities, die Dokumentation erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in zahlreichen bekannten Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie durch eine einfache Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein High-Level-Python-Web-Framework, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern gebaut und nimmt Ihnen viele Mühen der Webentwicklung ab, damit Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der "Batteries included"-Philosophie und stellt fast alles bereit, was die meisten Entwickler "außer der Box" wünschen könnten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und hat eine umfassende und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Websites, die Django nutzen (von der Django-Startseite), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalistisch, kann Flask eigenständige Websites schaffen. Es enthält einen Entwicklungsserver und -Debugger und unterstützt das [Jinja2](https://github.com/pallets/jinja) Templating, sichere Cookies, [unit testing](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfrage-Dispatching. Es hat gute Dokumentation und eine aktive Community.

Flask ist extrem beliebt geworden, insbesondere für Entwickler, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z.B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnen-Controllern](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, meinungsfreies, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine entkoppelte Umgebung zur Ausführung von JavaScript). Es bietet eine robuste Feature-Sammlung für Web- und mobile Anwendungen und liefert nützliche HTTP-Utility-Methoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teilweise weil es den Transfer von clientseitigen JavaScript-Webentwicklern zur serverseitigen Entwicklung erleichtert und teilweise, weil es ressourcenschonend ist (die zugrundeliegende Node-Umgebung verwendet leichtgewichtige Multitasking-Methoden innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu starten).

Weil Express ein minimalistisches Webframework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele bekannte Unternehmen nutzen Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime-Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) basiert.

Deno wird von [Tokio](https://tokio.rs/) angetrieben — eine Rust-basierte asynchrone Laufzeit, die es ermöglicht, Webseiten schneller bereitzustellen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), welche es ermöglicht, binären Code zu kompilieren und auf der Client-Seite zu verwenden. Deno soll einige der Lücken in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) schließen, indem es einen Mechanismus bereitstellt, der auf natürliche Weise eine bessere Sicherheit bewahrt.

Die Funktionen von Deno umfassen:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**-, **Netzwerk**- oder **Umgebungs**zugriff, es sei denn, sie werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Mechanismus für erstklassiges Warten.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, ohne den `Deno`-Namespace (oder dessen Funktion testen), sollten direkt in jedem modernen Browser funktionieren.
- Skript-Bundling zu einer einzigen JavaScript-Datei.

Deno bietet eine einfache und dennoch leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Serverseiten-Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (gewöhnlich als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Ruby-Programmiersprache entwickelt wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardisierte Mechanismen zum Routing von URLs, zum Zugriff auf Daten aus einer Datenbank, zum Generieren von HTML aus Templates und zur Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ebenfalls die Verwendung von Entwurfsmustern wie DRY ("don't repeat yourself" — schreiben Sie Code nur einmal, wenn möglich), MVC (model-view-controller) und einigen anderen.

Natürlich gibt es viele Unterschiede aufgrund spezieller Designentscheidungen und der Natur der Sprachen.

Rails wurde für bekannte Websites eingesetzt, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Schmerzen der Entwicklung zu reduzieren, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, erleichtert, wie:

- [Einfacher, schneller Routing-Motor](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Back-Ends für [Sitzungs](https://laravel.com/docs/session)- und [Cache](https://laravel.com/docs/cache)-Speicher.
- Ausdrückliches, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrund-Job-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich und dennoch leistungsfähig und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für den Aufbau moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites auf Basis von HTML, CSS und JavaScript erstellen, diese für die Verwendung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Datenformulare oder Echtzeitkommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, wodurch Programmierer ASP.NET-Code in jeder unterstützten .NET-Sprache schreiben können (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen genutzt.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Sie war einfach genug, um ohne viel Wissen über die Sprache loszulegen, und mächtig genug, um weiter zu kommen. Mojolicious setzt dieses Konzept mit modernsten Technologien um.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um Ein-Datei-Prototypen einfach in gut strukturierte MVC-Web-Anwendungen zu entwickeln.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Vorlagen, Content-Negotiation, Sitzungsverwaltung, Formularvalidierung, Testframework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Connection-Pooling, Timeout, Cookie, Multipart- und Gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige Framework, das auf [Java](https://www.java.com/) basiert, ist es einfach zu verwenden, um eigenständige, produktionsreife Anwendungen zu erstellen, die auf Spring basieren und die Sie "einfach ausführen" können. Es ist eine meinungsstarke Ansicht der Spring-Plattform und von Drittanbieterbibliotheken, die es ermöglicht, mit minimalem Aufwand und Konfiguration zu starten.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau größerer skalierbarer Anwendungen, die einen Cloud-Ansatz verwenden. Üblicherweise laufen mehrere Anwendungen parallel, die miteinander kommunizieren, wobei einige Benutzerschnittstellen bereitstellen und andere Backend-Arbeit erledigen (z.B. Zugriff auf Datenbanken oder andere Dienste). Load-Balancer helfen, Redundanz und Zuverlässigkeit sicherzustellen oder ein geografisch zugeordnetes Handling von Benutzeranfragen zu ermöglichen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung serverseitigen Codes erleichtern können. Er hat auch einen Überblick auf hoher Ebene über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Web-Anwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, machen Sie sich keine Sorgen — später im Kurs geben wir Ihnen detaillierte Tutorials zu Django und Express, um Ihnen ein Gefühl für die eigentliche Arbeit mit einem Web-Framework zu geben.

Für den nächsten Artikel in diesem Modul ändern wir die Richtung etwas und betrachten die Websicherheit.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
