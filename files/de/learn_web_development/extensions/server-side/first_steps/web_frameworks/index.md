---
title: Server-seitige Web-Frameworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anforderungen eines Webbrowsers zu reagieren. Mit diesem Wissen ist es an der Zeit, zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

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
        Verständnis, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und die Leser dazu bringen,
        über die Auswahl eines Frameworks für ihre eigene Entwicklung
        nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus realen Web-Frameworks. Machen Sie sich keine Sorgen, wenn jetzt nicht **alles** einen Sinn ergibt; wir werden Sie durch den Code in unseren framework-spezifischen Modulen führen.

## Überblick

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Aufgaben der Webentwicklung vereinfachen, einschließlich der Weiterleitung von URLs zu den richtigen Handlers, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z. B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Wir erläutern dann einige Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen anschließend einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um häufige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihr Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen besprochen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise alle diese Funktionen an).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen des Browsers und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Dies bedeutet, dass Sie eine einfachere Arbeit haben, indem Sie mit einfacheren, höherstufigen Codes interagieren, anstatt mit grundlegenden Netzwerk-Primitiven.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfragen-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

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

Die meisten Websites bieten eine Reihe verschiedener Ressourcen, die über unterschiedliche URLs zugänglich sind. Diese alle in einer Funktion zu behandeln, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf Wartung, da Sie die URL ändern können, die für ein bestimmtes Feature verwendet wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen mit einem Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django von Entwicklern erwartet, dass sie eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können auf verschiedene Arten in einer HTTP-Anfrage kodiert werden. Eine HTTP `GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann angeben, welche Daten in URL-Parametern oder innerhalb der URL-Struktur erforderlich sind. Eine HTTP `POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, enthält die Aktualisierungsinformationen stattdessen als "POST-Daten" im Rumpf der Anfrage. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem client-seitigen Cookie enthalten.

Web-Frameworks bieten programmsprachengerechte Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anfragetyp (z. B. eine HTTP `GET`), `GET` oder `POST` Parameter, Cookie- und Sitzungsdaten, etc. Django kann auch Informationen kodiert in der Struktur der URL durch Definition von "Capture-Mustern" im URL-Mapper übergeben (siehe das letzte Code-Fragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer zu speichern. Web-Frameworks bieten häufig eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschvorgänge der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Merkmale verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies erleichtert und sichert es, zu überprüfen, dass Daten im richtigen Typ eines Datenbankfeldes gespeichert sind, das richtige Format haben (z. B. eine E-Mail-Adresse) und auf keine Weise bösartig sind (Hacker können bestimmte Codemuster verwenden, um schädliche Dinge zu tun, wie das Löschen von Datenbankeinträgen).

Zum Beispiel bietet das Django Web-Framework ein ORM und bezeichnet das Objekt, das verwendet wird, um die Struktur eines Eintrags zu definieren, als _Modell_. Das Modell gibt die zu speichernden Feld*typen* an, die eine Feld-Ebene-Validierung darüber bereitstellen können, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für Dokumentation, Beschriftungstext für Formulare usw. angeben. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die getrennt von unserem Code geändert werden kann.

Das erste Code-Fragment unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Die `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten an, zusammen mit einem Standardwert.

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

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Diese kann eine Vielzahl von Feldern gleichzeitig anhand verschiedener Kriterien abgleichen (z. B. genau, ohne Berücksichtigung der Groß- und Kleinschreibung, größer als usw.) und unterstützt komplexe Anweisungen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Fragment zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige all unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Einträge filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument übergeben wird, wobei der Feldname und der Übereinstimmungstyp durch doppelte Unterstriche getrennt sind: **team_level\_\_exact**).

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

Web-Frameworks bieten häufig ein Templating-System. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments anzugeben, wobei Platzhalter für Daten verwendet werden, die hinzugefügt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Web-Frameworks bieten oft einen Mechanismus, um es einfach zu machen, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel erlaubt das Django-Templating-System Ihnen, Variablen mit einer "Doppel-Handlebars"-Syntax anzugeben (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte aus der View-Funktion ersetzt werden. Das Templating-System bietet auch Unterstützung für Ausdrücke (mit Syntax: `{% expression %}`), die es Vorlagen ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die in die Vorlage übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Moustache (JavaScript) usw.

Das folgende Code-Fragment zeigt, wie dies funktioniert. Fortgesetzt das Beispiel "jüngstes Team" aus dem vorherigen Abschnitt, wird die HTML-Vorlage von der View mit einer Listenvariablen namens `youngest_teams` übergeben. Innerhalb des HTML-Gerüsts haben wir einen Ausdruck, der zunächst überprüft, ob die `youngest_teams`-Variable existiert und sie dann in einer `for`-Schleife iteriert. Bei jedem Durchlauf zeigt die Vorlage den `team_name`-Wert des Teams in einem Listenelement an.

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

Zahlreiche Web-Frameworks existieren für so gut wie jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populäreren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand für ein Web-Framework hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, die Konsistenz seiner API, die Qualität seiner Dokumentation und die Größe und Aktivität seiner Community. Wenn Sie von absolut keiner Programmiererfahrung ausgehen, dann ziehen Sie Django in Betracht (es ist eines der am einfachsten zu erlernenden Frameworks basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits erhebliche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, dann macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand für das Schreiben als auch die Wartung von Code (da Sie keine neuen Funktionen schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für den "Lernaufwand" — z. B. Dokumentation, Community, Programmerfahrung usw. — andere Faktoren umfassen:
  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich erstellt, um bestimmte Arten von Problemen zu lösen, und sind immer noch _besser_ darin, Webanwendungen mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django zur Unterstützung der Entwicklung einer Zeitungswebsite erstellt, daher ist es gut für Blogs und andere Websites, die Dinge veröffentlichen. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Webanwendungen, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. neutral_: Ein meinungsstarkes Framework ist eines, bei dem es empfohlene "beste" Lösungen für ein bestimmtes Problem gibt. Meinungsstarke Frameworks neigen dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung lenken, jedoch sind sie manchmal weniger flexibel.
  - _Batterien inklusive vs. selber besorgen_: Einige Web-Frameworks enthalten standardmäßig Tools/Bibliotheken, die jedes Problem ihrer Entwickler adressieren können, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtes Framework ist). Frameworks, die alles beinhalten, sind oft einfacher, um loszulegen, da Sie bereits alles haben, was Sie benötigen, und die Chancen stehen gut, dass es integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (jemals) brauchen, kann es in kleineren Umgebungen laufen und hat einen kleineren und einfacheren Lernumfang.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Ein Framework, das zum Beispiel eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, wird zu besser wartbarem Code führen als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** In der Regel ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python für mittelgroße Sites auf moderater Hardware meist "gut genug" sind. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durch die Kosten für Lernen und Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, wenn Benutzer darauf zugreifen. Zu diesem Zeitpunkt könnten Sie in Erwägung ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine vollständige oder teilweise Web-Antwort speichern, sodass sie bei späteren Anfragen nicht neu berechnet werden muss. Die Rückgabe einer zwischengespeicherten Antwort ist viel schneller als die Berechnung einer neuen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks unterstützen unterschiedlich stark, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings ausschöpfen und sogar die Grenzen des _vertikalen Skalierens_ (Ausführen Ihrer Webanwendung auf leistungsstärkeren Hardware) erreichen. Zu diesem Zeitpunkt müssen Sie möglicherweise _horizontal skalieren_ (die Last verteilen, indem Sie Ihre Site auf verschiedene Webserver und Datenbanken verteilen) oder geografisch skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied machen, wie einfach es ist, Ihre Site zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz gegen häufige Web-Angriffe. Django beispielsweise bereinigt alle Benutzereingaben aus HTML-Vorlagen, sodass vom Benutzer eingegebene JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, sind jedoch nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv entwickelt wird, etc.

Wenn Sie ein absoluter Programmieranfänger sind, werden Sie Ihr Framework wahrscheinlich basierend auf der "Lernfreundlichkeit" auswählen. Zusätzlich zur "Nutzerfreundlichkeit" der Sprache selbst sind hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie leicht zu erlernen und gut unterstützt sind.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebseiten von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>    - Klicken Sie auf die Dokumentationsmenü-Links (genannt Dinge wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Können Sie Themen sehen, die erklären, wie man URL-Routing, Vorlagen und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
> 2. Navigieren Sie zu den Mailinglisten für jede Site (zugänglich über Community-Links).
>    - Wie viele Fragen wurden in den letzten Tagen gepostet
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks diskutieren.

Die unten aufgeführten serverseitigen Frameworks repräsentieren _einige_ der beliebtesten, die zur Zeit des Schreibens verfügbar sind. Alle haben alles, was Sie zum produktiven Arbeiten benötigen — sie sind Open-Source, werden aktiv entwickelt, haben enthusiastische Gemeinschaften, die Dokumentation erstellen und auf Diskussionsforen helfen, und werden in einer großen Anzahl hochkarätiger Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochrangiges Python-Web-Framework, das schnelles Entwickeln und sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern, kümmert es sich um viel von dem Aufwand der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open-Source.

Django folgt der "Batterien inklusive"-Philosophie und bietet fast alles, was die meisten Entwickler tun möchten, "aus der Box". Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und verfügt über eine umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Sites, die Django verwenden (von der Django-Homepage), sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Microframework für Python.

Obwohl es minimalistisch ist, kann Flask sofort ernste Websites erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragen-Dispatching. Es hat gute Dokumentation und eine aktive Community.

Flask ist äußerst populär geworden, besonders für Entwickler, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z. B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/) betreiben, [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), etc.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unopinioniertes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserlose Umgebung zum Ausführen von JavaScript). Es bietet eine robuste Menge an Funktionen für Web- und Mobilanwendungen und liefert nützliche HTTP-Utility-Methoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teilweise weil es die Migration von client-seitigen JavaScript-Webprogrammierern in die serverseitige Entwicklung erleichtert und teilweise weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtiges Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu erzeugen).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche für einen bestimmten Zweck am besten geeignet ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl Server- als auch Client-seitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, einschließlich: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeitumgebung and Framework, aufgebaut auf Chrome V8 und [Rust](https://rust-lang.org/).

Deno wird von [Tokio](https://tokio.rs/) angetrieben — einer auf Rust basierenden asynchronen Laufzeit, die es ihm ermöglicht, Webseiten schneller zu bedienen. Es hat auch eine interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode für die Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu füllen, indem es einen Mechanismus bereitstellt, der natürlicherweise eine bessere Sicherheit aufrechterhält.

Deno bietet folgende Funktionen:

- Standardeinstellung: Keine Dateizugriff-, Netzwerk- oder Umgebungszugriffe ohne explizite Erlaubnis (siehe [Deno-Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/)).
- TypeScript-Unterstützung **ab Werk**.
- Erstklassiger "await"-Mechanismus.
- Eingebaute Test- und Codeformatierungs-Funktion (`deno fmt`)
- (JavaScript) Browserkompatibilität: Deno-Programme, die komplett in JavaScript geschrieben sind, sollten direkt in jedem modernen Browser funktionieren, ausgenommen des `Deno`-Namespace (oder Feature-Test dafür).
- Skript-Bündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für Client- als auch für serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (gewöhnlich "Ruby on Rails" genannt) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardisierte Mechanismen für die Weiterleitung von URLs, den Zugriff auf Daten aus einer Datenbank, das Generieren von HTML aus Vorlagen und das Formatieren von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ähnlicherweise die Verwendung von Designmustern wie DRY ("don't repeat yourself" — schreiben Sie Code nur einmal, wenn möglich), MVC (Model-View-Controller) und einer Reihe anderer.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Sites verwendet, einschließlich: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem es häufige Aufgaben vereinfacht, die in der Mehrheit von Webprojekten verwendet werden, wie:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Session](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache)-Speicher.
- Ausdrucksstarkes, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundprozessverarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignis-Broadcasting](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für den Bau moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Webseiten basierend auf HTML, CSS und JavaScript erstellen, sie für die Verwendung durch Millionen von Benutzern skalieren und einfach komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikationen hinzufügen.

Ein Unterschiedsmerkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, die es Programmierern erlaubt, ASP.NET-Code in jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) zu schreiben. Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Werkzeugen (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen genutzt.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache zu beginnen und mächtig genug, um weiterzumachen. Mojolicious implementiert diese Idee mit modernsten Technologien.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um einfach Einzeldatei-Prototypen in gut strukturierte MVC-Webanwendungen zu verwandeln.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Vorlagen, Inhaltsverhandlung, Sitzungsmanagement, Formularvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6-, TLS-, SNI-, IDNA-, HTTP/SOCKS5-Proxy-, UNIX-Domain-Socket-, Komet (Long-Polling), Keep-Alive-, Connection-Pooling-, Timeout-, Cookie-, Mehrteil- und GZIP-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektorunterstützung.
- Sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code, basierend auf jahrelanger Erfahrung, kostenlos und Open-Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige Framework basierend auf [Java](https://www.java.com/) ist, ermöglicht es die einfache Erstellung von eigenständigen, produktionsreifen Spring-basierten Anwendungen, die Sie einfach ausführen können. Es ist eine meinungsstarke Sichtweise auf die Spring-Plattform und Drittanbieter-Bibliotheken, aber erlaubt den Start mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Bau von Anwendungen im großen Maßstab, die einen Cloud-Ansatz verwenden. Normalerweise laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Benutzerinteraktionen bieten und andere im Hintergrund Aufgaben erledigen (z. B. Datenbankzugriff oder andere Dienste). Lastenausgleicher helfen, Redundanz und Zuverlässigkeit sicherzustellen oder ermöglichen die geolokalisierte Bearbeitung von Benutzeranfragen, um Reaktionsfähigkeit zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über einige beliebte Frameworks gegeben und Kriterien zur Auswahl eines Webanwendungs-Frameworks besprochen. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen können. Wenn nicht, dann machen Sie sich keine Sorgen — später im Kurs geben Ihnen ausführliche Tutorials über Django und Express etwas Erfahrung im eigentlichen Arbeiten mit einem Web-Framework.

Für den nächsten Artikel in diesem Modul wechseln wir die Richtung leicht und betrachten die Web-Sicherheit.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
