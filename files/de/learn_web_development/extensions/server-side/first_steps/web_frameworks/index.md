---
title: Serverseitige Web-Frameworks
short-title: Serverseitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat Ihnen gezeigt, wie die Kommunikation zwischen Web-Clients und Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen ist es an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen könnten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundverständnis darüber, wie serverseitiger Code
        HTTP-Anfragen behandelt und beantwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können, und die Leser dazu anregen, über die Auswahl eines Frameworks für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte illustrieren einige Punkte mithilfe von Codefragmenten, die aus echten Web-Frameworks stammen. Seien Sie nicht besorgt, wenn nicht **alles** jetzt Sinn macht; wir werden den Code in unseren modulspezifischen Kapiteln mit Ihnen durchgehen.

## Überblick

Serverseitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die es einfacher machen, Webanwendungen zu schreiben, zu pflegen und zu skalieren. Sie bieten Werkzeuge und Bibliotheken, die gängige Webentwicklungstätigkeiten vereinfachen, darunter die Weiterleitung von URLs an geeignete Handler, die Interaktion mit Datenbanken, die Unterstützung von Sitzungen und Benutzerautorisierung, die Formatierung von Ausgaben (z.B. HTML, JSON, XML) und die Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet ein wenig mehr Detail darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erklären wir einige der Kriterien, die Sie bei der Wahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Es ist nicht _erforderlich_, ein serverseitiges Web-Framework zu verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen diskutiert, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird unbedingt alle diese Funktionen bereitstellen!).

### Arbeiten Sie direkt mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine einfachere Arbeit haben werden, indem Sie mit einfacheren, höherstufigen Code statt untergeordneten Netzwerk-Primitiven interagieren.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "Ansichts"-Funktion (ein Anfragen-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall eine Zeichenkette).

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

Die meisten Seiten bieten eine Reihe verschiedener Ressourcen an, die über verschiedene URLs zugänglich sind. All diese in einer einzigen Funktion zu behandeln, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch in Bezug auf die Wartung Vorteile, da Sie die URL, die zur Bereitstellung einer bestimmten Funktion verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu Ansichts-Funktionen mithilfe eines Dekorators hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Django erwartet hingegen, dass Entwickler eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer Ansichts-Funktion definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Erleichtern Sie den Zugriff auf Daten in der Anfrage

Daten können in einer HTTP-Anfrage auf verschiedene Arten kodiert werden. Eine HTTP `GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann kodieren, welche Daten in URL-Parametern oder innerhalb der URL-Struktur benötigt werden. Eine HTTP `POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Körper der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem Client-seitigen Cookie enthalten.

Web-Frameworks bieten zur Programmiersprache passende Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede Ansichts-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anfragetyp (z.B. eine HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen, die in der Struktur der URL kodiert sind, über "Capture-Muster" im URL-Mapper übergeben (siehe das letzte Codefragment im obigen Abschnitt).

### Abstrahieren und vereinfachen Sie den Datenbankzugriff

Webseiten verwenden Datenbanken, um sowohl Informationen zu speichern, die mit Benutzern geteilt werden sollen, als auch Informationen über Benutzer. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen für Datenbanken abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank austauschen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Merkmale verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies macht es einfacher und sicherer zu überprüfen, ob Daten im richtigen Typ eines Datenbankfelds gespeichert werden, das richtige Format haben (z.B. eine E-Mail-Adresse) und in keiner Weise böswillig sind (Hacker können bestimmte Muster von Code verwenden, um schlechte Dinge zu tun, wie z.B. das Löschen von Datenbankeinträgen).

Zum Beispiel bietet das Django Web-Framework ein ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Records verwendet wird, als _Modell_. Das Modell spezifiziert die Feldtypen, die gespeichert werden sollen, was eine Feldvalidierung darüber bereitstellen kann, welche Informationen gespeichert werden dürfen (z.B. ein E-Mail-Feld würde nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahloptionen, Hilfetexte für die Dokumentation, Beschriftungen für Formulare usw. angeben. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die getrennt von unserem Code geändert werden kann.

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

Für die Abfrage der Datenbank bietet das Django-Modell eine einfache Abfrage-API. Dies kann gegen eine Reihe von Feldern gleichzeitig mit verschiedenen Kriterien (z.B. exakt, ohne Berücksichtigung der Groß- und Kleinschreibung, größer als usw.) übereinstimmen und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie nach U11-Teams suchen, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der zweite Codeausschnitt zeigt eine Ansichts-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall spezifizieren wir, dass wir alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldnamen und Übereinstimmungstyp getrennt durch doppelte Unterstriche übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templating-Systeme an. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, wobei Platzhalter für Daten verwendet werden, die beim Generieren einer Seite hinzugefügt werden. Templates werden oft benutzt, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, um das Generieren anderer Formate aus gespeicherten Daten einfach zu machen, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel ermöglicht das Django-Template-System, Variablen mit einer "doppelten-Handlebars"-Syntax zu spezifizieren (z.B. `\{{ variable_name }}`), die durch Werte ersetzt werden, die von der Ansichts-Funktion übergeben werden, wenn eine Seite gerendert wird. Das Template-System unterstützt auch Ausdrücke (mit der Syntax: `{% Ausdruck %}`), die es Templates erlauben, einfache Operationen wie das Durchlaufen von Listenwerten durchzuführen, die in das Template übergeben werden.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), usw.

Der folgende Codeausschnitt zeigt, wie dies funktioniert. Fortsetzend mit dem "jüngstes Team"-Beispiel aus dem vorherigen Abschnitt, wird dem HTML-Template eine Listenvariable namens `youngest_teams` von der Ansicht übergeben. Im Inneren des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

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

## Wie wählt man ein Web-Framework aus

Zahlreiche Web-Frameworks existieren für fast jede Programmiersprache, die Sie verwenden möchten (wir listen im folgenden Abschnitt einige der bekannteren Frameworks auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Lernaufwand für ein Web-Framework hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, die Konsistenz ihrer API, die Qualität ihrer Dokumentation und die Größe und Aktivität ihrer Community. Wenn Sie absolut keine Programmiererfahrung haben, dann überlegen Sie sich Django (es ist eines der am einfachsten zu erlernenden basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits viel Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, dann macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Features erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben, als auch den Aufwand, Code zu warten (da Sie keine neuen Features schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, sind denen für den "Lernaufwand" ähnlich — z.B. Dokumentation, Gemeinschaft, Programmiererfahrung, usw. — andere Faktoren umfassen:
  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich erstellt, um bestimmte Arten von Problemen zu lösen, und sind _besser_ dafür geeignet, Web-Apps unter ähnlichen Bedingungen zu erstellen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungs-Website zu unterstützen, sodass es gut für Blogs und andere Seiten geeignet ist, die das Veröffentlichen von Dingen beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Web-Apps auf eingebetteten Geräten.
  - _Meinungsstark vs. unmeinungsstark_: Ein meinungsstarkes Framework ist eines, in dem es empfohlene "beste" Wege gibt, ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks tendieren dazu, produktiver zu sein, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung lenken, jedoch sind sie manchmal weniger flexibel.
  - _Batterien enthalten vs. selbst besorgen_: Einige Web-Frameworks umfassen standardmäßig Werkzeuge/Bibliotheken, die jedes Problem angehen, an das ihre Entwickler denken können, während leichtere Frameworks erwarten, dass Web-Entwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtes Framework ist). Frameworks, die alles enthalten, sind oft einfacher in Gang zu setzen, weil Sie bereits alles haben, was Sie brauchen, und die Wahrscheinlichkeit groß ist, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (jemals) brauchen werden, kann es in eingeschränkten Umgebungen laufen und hat eine kleinere und einfachere Teilmenge von Dingen, die zu lernen sind.
  - _Ob das Framework gute Entwicklungspraxen fördert oder nicht_: Beispielsweise wird ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur zur Trennung von Code in logische Funktionen fördert, zu wartbarerem Code führen als eines, das keine Erwartungen an die Entwickler hat. Ebenso kann das Design eines Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Meistens ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, weil auch relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Seiten sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, könnten gut durch die Kosten für Lernen und Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, während Benutzer auf sie zugreifen. An diesem Punkt könnten Sie in Betracht ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine gesamte oder einen Teil einer Webantwort speichern, sodass sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Eine zwischengespeicherte Antwort zurückzugeben, ist viel schneller als eine ursprünglich zu berechnen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Grade der Unterstützung für die Definition, welcher Inhalt zwischengespeichert werden kann.
- **Skalierbarkeit:** Sobald Ihre Website unglaublich erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen der _vertikalen Skalierung_ (Ausführung Ihrer Webanwendung auf leistungsfähigerer Hardware) erreichen. An diesem Punkt könnten Sie auf _horizontale Skalierung_ übergehen (Verteilung der Last durch Verteilung Ihrer Site auf eine Anzahl von Webservern und Datenbanken) oder "geografisch" skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten eine bessere Unterstützung für die Handhabung häufiger Webseitenangriffe. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Templates, sodass benutzerdefinierter JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber er ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv entwickelt wird oder nicht, usw.

Wenn Sie ein absoluter Anfänger im Programmieren sind, werden Sie wahrscheinlich Ihr Framework basierend auf der "Leichtigkeit des Lernens" auswählen. Neben der "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentation/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie einfach zu erlernen sind und gute Unterstützung haben.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebsites für [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und deren Dokumentation und Communitys anschauen.
>
> 1. Navigieren Sie zu den Hauptwebsites (oben verlinkt)
>    - Klicken Sie auf die Dokumentationsmenü-Links (benannt wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.).
>    - Können Sie Themen sehen, die zeigen, wie URL-Routing, Templates und Datenbanken/Modelle eingerichtet werden?
>    - Sind die Dokumente klar?
> 2. Navigieren Sie zu den Mailinglisten für jede Website (zugänglich über Community-Links).
>    - Wie viele Fragen wurden in den letzten Tagen gestellt?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks besprechen.

Die nachfolgenden serverseitigen Frameworks repräsentieren _einige_ der beliebtesten, die zum Zeitpunkt der Erstellung verfügbar sind. Alle haben alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv entwickelt, haben enthusiastische Communitys, die Dokumentation erstellen und Benutzern in Foren helfen, und werden auf einer großen Anzahl von hochkarätigen Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie durch eine einfache Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein High-Level Python Web-Framework, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern, kümmert es sich um viele der lästigen Aufgaben der Webentwicklung, sodass Sie sich darauf konzentrieren können, Ihre App zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der "Batterien enthalten"-Philosophie und bietet fast alles, was die meisten Entwickler benötigen könnten, "out of the box". Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da Django auf Python basiert, ist Django-Code einfach zu lesen und zu warten.

Beliebte Seiten, die Django verwenden (laut Django-Homepage) sind: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Microframework für Python.

Obwohl es minimalistisch ist, kann Flask ernsthafte Websites direkt ohne Aufwand erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragenweiterleitung. Es hat gute Dokumentation und eine aktive Community.

Flask ist äußerst beliebt geworden, insbesondere bei Entwicklern, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z.B. beim Betrieb eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnen-Controller](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unmeinungsstarkes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserunabhängige Umgebung für das Ausführen von JavaScript). Es bietet eine robuste Sammlung von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist äußerst beliebt, teilweise weil es den Übergang von clientseitigen JavaScript-Webprogrammierern zur serverseitigen Entwicklung erleichtert, und teilweise, weil es ressourceneffizient ist (die zugrunde liegende Nodes-Umgebung verwendet leichtgewichtige Multitasking-Operationen innerhalb eines Threads anstelle des Startens separater Prozesse für jede neue Webanfrage).

Da Express ein minimalistisches Web-Framework ist, umfasst es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche für einen bestimmten Zweck am besten geeignet ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (umfassen sowohl server- als auch clientseitige Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit- und Framework, das auf Chrome V8 und [Rust](https://rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — einer auf Rust basierenden asynchronen Laufzeit, die es ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode für den Gebrauch auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwächen von [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bietet, der auf natürliche Weise eine bessere Sicherheit aufrechterhält.

Zu Denos Merkmalen gehören:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) für **Datei**, **Netzwerk** oder **Umgebung**-Zugriff, es sei denn, sie sind explizit erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Erstklassiger Unterstützung für `await`.
- Eingebautes Testwerkzeug und Code-Formatter (`deno fmt`).
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind, mit Ausnahme des `Deno`-Namespace (oder Funktionstests dafür), sollten direkt in jedem modernen Browser funktionieren.
- Skript-Bündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch für die Serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (meistens als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einem sehr ähnlichen Designansatz wie Django. Wie Django bietet es Standardmechanismen zum Routing von URLs, zum Zugreifen auf Daten aus einer Datenbank, zum Generieren von HTML aus Templates und zum Formatieren von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ähnlich die Verwendung von Entwurfsmustern wie DRY ("don't repeat yourself" — so wenig Code wie möglich zu schreiben), MVC (Model-View-Controller) und einige andere.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Sites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, vereinfacht, wie zum Beispiel:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Sitzung](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrückliche, intuitive [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankenunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundsprozess-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft zur Erstellung moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites basierend auf HTML, CSS und JavaScript erstellen, sie für den Einsatz von Millionen von Benutzern skalieren und leicht komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeit-Kommunikation hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufbaut, die es Programmierern ermöglicht, ASP.NET-Code mit jeder unterstützten .NET-Sprache zu schreiben (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

In den frühen Tagen des Webs haben viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI) gelernt. Es war einfach genug, um ohne viel über die Sprache zu wissen, anzufangen, und mächtig genug, um weiterzumachen. Mojolicious setzt diese Idee mit hochmodernen Technologien um.

Zu den von Mojolicious bereitgestellten Funktionen gehören:

- Ein Echtzeit-Web-Framework, um leicht ein Datei-Prototypen in gut strukturierte MVC-Webanwendungen zu erweitern.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlungen, Sitzungsverwaltung, Formularvalidierung, Testframework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine Full-Stack-HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long-Polling), Keep-Alive, Verbindungspooling, Timeout, Cookie-, Multipart- und Gzip-Komprimierungsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektorunterstützung.
- Sehr saubere, plattformübergreifende und objektorientierte reine-Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, kostenlos und Open-Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige Framework ist, das auf [Java](https://www.java.com/) basiert, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie "einfach ausführen" können. Es ist ein meinungsstarker Blick auf die Spring-Plattform und Drittanbieterbibliotheken, aber es ermöglicht einen Start mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau von Anwendungen im großen Maßstab, die einen Cloud-Ansatz nutzen. Normalerweise laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Benutzerinteraktionen unterstützen und andere Back-End-Arbeiten erledigen (z.B. Zugriff auf Datenbanken oder andere Dienste). Lastenausgleicher helfen, Redundanzen und Zuverlässigkeit zu gewährleisten oder eine geolokalisierte Bearbeitung von Benutzeranfragen zu ermöglichen, um Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat außerdem einen Überblick über einige beliebte Frameworks gegeben und Kriterien zur Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann machen Sie sich keine Sorgen — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen praktische Erfahrungen im tatsächlichen Umgang mit einem Web-Framework zu ermöglichen.

Für den nächsten Artikel in diesem Modul werden wir die Richtung leicht ändern und die Web-Sicherheit betrachten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
