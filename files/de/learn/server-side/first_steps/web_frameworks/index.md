---
title: Server-seitige Web-Frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen ist es an der Zeit, zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis darüber, wie serverseitiger Code HTTP-Anfragen behandelt und darauf reagiert (siehe <a
          href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von serverseitigem Code vereinfachen können, und die Leser dazu zu bringen, über die Auswahl eines Frameworks für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten, die aus realen Web-Frameworks entnommen wurden. Machen Sie sich keine Sorgen, wenn nicht **alles** jetzt Sinn macht; wir werden Sie durch den Code in unseren frameworkspezifischen Modulen führen.

## Übersicht

Server-seitige Web-Frameworks (auch "Web-Anwendungs-Frameworks" genannt) sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die gängige Webentwicklungsaufgaben vereinfachen, einschließlich der Zuordnung von URLs zu entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z. B. HTML, JSON, XML) und der Verbesserung der Sicherheit vor Webangriffen.

Der nächste Abschnitt bietet etwas mehr Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Anschließend erklären wir einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

Dieser Abschnitt behandelt einige der Funktionalitäten, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird notwendigerweise alle diese Funktionen bieten!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und -browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Dies bedeutet, dass Sie einen einfacheren Job haben, in dem Sie mit einfacherem, höherem Code arbeiten, anstatt mit niedrigeren Netzwerkanforderungen.

Das unten stehende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

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

Die meisten Websites bieten eine Reihe unterschiedlicher Ressourcen, die über unterschiedliche URLs zugänglich sind. Diese alle in einer Funktion zu behandeln, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL, die für die Bereitstellung einer bestimmten Funktion verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen mit einem Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django Entwickler erwartet, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion zu definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Weise kodiert werden. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann die erforderlichen Daten in den URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Anfragetext enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten Programmiersprach-geeignete Mechanismen zum Zugriff auf diese Informationen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Typ der Anfrage (z. B. eine HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen kodiert in die Struktur der URL über "Erfassungsmuster" im URL-Mapper übergeben (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankebene, die Lese-, Schreib-, Abfrage- und Löschoperationen der Datenbank abstrahiert. Diese Abstraktionsebene wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, basierend auf ihrer Nutzung für die Eigenschaften verschiedener Datenbanken zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies macht es einfacher und sicherer zu überprüfen, ob Daten im richtigen Typ von Datenbankfeld gespeichert sind, das richtige Format haben (z. B. eine E-Mail-Adresse) und auf keine Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schlechte Dinge zu tun, wie z. B. Datenbankeinträge löschen).

Zum Beispiel bietet das Django Web-Framework einen ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Model_. Das Model spezifiziert die zu speichernden Feld*typen*, die eine Feldlevelvalidierung dafür bereitstellen können, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. angeben. Das Model gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die separat von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Datensatz gespeichert werden sollen. Das `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden und den zu speichernden Daten zusammen mit einem Standardwert.

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

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Diese kann mit einer Reihe von Feldern zu einer Zeit mit unterschiedlichen Kriterien (z. B. genau, nicht groß-/kleinschreibungsempfindlich, größer als usw.) übereinstimmen und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcenhandler) zur Anzeige aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldnamen und Übereinstimmungstyp, getrennt durch doppelte Unterstriche: **team_level\_\_exact**, übergeben wird).

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

Web-Frameworks bieten oft Template-Systeme. Diese ermöglichen es Ihnen, die Struktur eines Ausgangsdokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite hinzugefügt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Web-Frameworks bieten oft einen Mechanismus, um das Erstellen anderer Formate aus gespeicherten Daten zu erleichtern, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel erlaubt das Django-Template-System, Variablen mit einer "doppelten Handgriff"-Syntax zu spezifizieren (z. B. `\{{ variable_name }}`), die durch Werte ersetzt werden, die von der View-Funktion übergeben werden, wenn eine Seite gerendert wird. Das Template-System unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die an das Template übergeben werden, auszuführen.

> [!NOTE]
> Viele andere Template-Systeme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Das untenstehende Code-Snippet zeigt, wie dies funktioniert. Weiterführend vom Beispiel des "jüngsten Teams" aus dem vorhergehenden Abschnitt wird das HTML-Template von der View mit einer Listenvariablen namens `youngest_teams` übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zunächst überprüft, ob die `youngest_teams`-Variable existiert, und sie dann in einer `for`-Schleife durchläuft. Bei jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

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

## Wie wählt man ein Web-Framework aus

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populäreren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, der Konsistenz seiner API, der Qualität seiner Dokumentation und der Größe und Aktivität seiner Community. Wenn Sie absolut keine Programmiererfahrung haben, dann sollten Sie Django in Betracht ziehen (es ist eines der am einfachsten zu erlernenden basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits bedeutende Erfahrungen mit einem bestimmten Web-Framework oder einer Programmiersprache hat, macht es Sinn, bei diesem zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben, als auch ihn zu warten (da Sie keine neuen Funktionen schreiben können, während alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich zu denen für "Lernaufwand" — z. B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren umfassen:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und bleiben _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungs-Website zu unterstützen, daher ist es gut für Blogs und andere Websites, die das Veröffentlichen von Inhalten beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. nicht meinungsstark_: Ein meinungsstarkes Framework ist eines, in dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks sind tendenziell produktiver, wenn Sie versuchen, gängige Probleme zu lösen, weil sie Sie in die richtige Richtung führen, sie sind jedoch manchmal weniger flexibel.
  - _Mitgelieferte Elemente vs. selbst besorgen_: Einige Web-Frameworks enthalten Tools/Bibliotheken, die jedes Problem, das ihren Entwicklern einfällt, "standardmäßig" adressieren, während leichtere Frameworks von Webentwicklern erwarten, dass sie Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher zu starten, da man bereits alles hat, was man braucht, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (je) brauchen, kann es in Umgebung mit begrenzten Ressourcen laufen und hat einen kleineren und einfacheren Satz von Dingen zu erlernen.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel wird ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu unterteilen, zu einem besser wartbaren Code führen als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Performance des Frameworks/der Programmiersprache:** Meistens ist die "Geschwindigkeit" nicht der wichtigste Faktor bei der Auswahl, da selbst vergleichsweise langsame Laufzeiten wie bei Python für mittelgroße Websites, die auf moderater Hardware laufen, mehr als "gut genug" sind. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, könnten durchaus durch die Kosten für Lernen und Wartung aufgewogen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, könnten Sie feststellen, dass sie mit der Anzahl der Anfragen, die sie erhält, nicht mehr klarkommt, da Benutzer darauf zugreifen. In diesem Fall sollten Sie möglicherweise die Unterstützung für Caching in Betracht ziehen. Caching ist eine Optimierung, bei der Sie eine gesamte oder einen Teil einer Web-Antwort speichern, damit sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Das Zurückgeben einer gecachten Antwort ist viel schneller als eine neu zu berechnen. Caching kann in Ihrem Code oder im Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Ebenen der Unterstützung für die Definition, welcher Inhalt gecacht werden kann.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile des Cachings ausschöpfen und sogar die Grenzen des _vertikalen Skalierens_ erreichen (Ihre Webanwendung auf leistungsfähigerer Hardware laufen lassen). In diesem Fall müssen Sie möglicherweise _horizontal skalieren_ (die Last teilen, indem Sie Ihre Website über eine Anzahl von Webservern und Datenbanken verteilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit weg von Ihrem Server ansässig sind. Das Web-Framework, das Sie auswählen, kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten bessere Unterstützung für den Umgang mit gängigen Webangriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Vorlagen, so dass Benutzereingabe-JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, sind jedoch nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv weiterentwickelt wird usw.

Wenn Sie ein absoluter Anfänger im Bereich Programmierung sind, werden Sie Ihr Framework wahrscheinlich basierend auf der "Leichtigkeit des Lernens" auswählen. Zusätzlich zur "Leichtigkeit des Gebrauchs" der Sprache selbst sind hochwertige Dokumentation/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere später im Kurs zu machenden Beispiele zu schreiben, hauptsächlich weil sie leicht zu erlernen sind und guten Support bieten.

> [!NOTE]
> Lassen Sie uns zu den Hauptwebseiten von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) gehen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenü-Links (mit Namen wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte", usw.).
>    - Können Sie Themen sehen, die zeigen, wie URL-Routing, Templates und Datenbanken/Modelle eingerichtet werden?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Seite (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks besprechen.

Die untenstehenden serverseitigen Frameworks repräsentieren _einige_ der zur Zeit der Erstellung verfügbaren populärsten. Alle von ihnen haben alles, was Sie brauchen, um produktiv zu sein — sie sind open source, werden aktiv entwickelt, haben engagierte Communities, die Dokumentation erstellen und Benutzern auf Diskussionsplattformen helfen, und werden in einer großen Anzahl von hochkarätigen Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Beschreibungen stammen (teilweise) von den Webseiten der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochmodernes Python Web-Framework, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Von erfahrenen Entwicklern erstellt, übernimmt es viele der lästigen Aufgaben der Webentwicklung, sodass Sie sich darauf konzentrieren können, Ihre Anwendung zu schreiben, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und quelloffen.

Django folgt der "Batteries included"-Philosophie und bietet fast alles, was die meisten Entwickler "out of the box" tun möchten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code einfach zu lesen und zu pflegen.

Beliebte Seiten, die Django verwenden (von der Django-Homepage), umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikro-Framework für Python.

Während es minimalistisch ist, kann Flask ernste Websites aus dem Stand heraus erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Unit-Testing](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/)-Anfragebearbeitung. Es hat gute Dokumentation und eine aktive Community.

Flask ist extrem populär geworden, insbesondere für Entwickler, die Web-Dienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z. B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/) laufen lassen, [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, nicht meinungsstarkes, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine umgebungsunabhängige Umgebung für die Ausführung von JavaScript). Es bietet eine robuste Menge an Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist extrem populär, teils weil es den Übergang von clientseitigen JavaScript-Webprogrammierern zur serverseitigen Entwicklung erleichtert, teils weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Multitasking-Prozesse innerhalb eines Threads anstelle der Erstellung separater Prozesse für jede neue Webanfrage).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht alle Komponenten, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriffe und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (die sowohl server- als auch clientseitige Frameworks umfassen) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen nutzen Express, darunter: Uber, Accenture, IBM usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit-Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufgebaut ist.

Deno wird von [Tokio](https://tokio.rs/) betrieben — einem Rust-basierten asynchronen Laufzeitsystem, das es ermöglicht, Webseiten schneller zu bedienen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), die die Kompilierung von Binärcode zur Nutzung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bietet, der natürlicherweise bessere Sicherheit aufrechterhält.

Deno's Features umfassen:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**, **Netzwerk** oder **Umgebungs**zugriffsrechte, es sei denn, sie werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Erstklassiger await-Mechanismus.
- Eingebautes Test-Tool und Code-Formatierer (`deno fmt`)
- (JavaScript) Browser-Kompatibilität: Programme, die komplett in JavaScript geschrieben und ohne den `Deno`-Namespace ausgeführt werden (oder für diesen getestet werden), sollten direkt in jedem modernen Browser laufen.
- Skript-Bündelung in ein einzelnes JavaScript-File.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript für sowohl client- als auch serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (meistens als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einer sehr ähnlichen Design-Philosophie wie Django. Genau wie Django stellt es Standardmethoden für die Zuordnung von URLs, den Zugriff auf Daten aus einer Datenbank, die Generierung von HTML aus Templates und die Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}} bereit. Es ermutigt ebenfalls zur Verwendung von Entwurfsmustern wie DRY ("don't repeat yourself" — schreiben Sie Code nur einmal, wenn überhaupt möglich), MVC (Model-View-Controller) und einer Reihe anderer.

Es gibt natürlich viele Unterschiede aufgrund bestimmter Designentscheidungen und der Natur der Programmiersprachen.

Rails wurde für hochkarätige Websites verwendet, einschließlich: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit expressiver, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem es gängige Aufgaben in den meisten Webprojekten vereinfacht, wie:

- [Einfaches, schnelles Routing-Motor](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Session](https://laravel.com/docs/session)- und [Cache](https://laravel.com/docs/cache)-Speicherung.
- Ausdrucksstarkes, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbank-unabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrund-Jobverarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Event-Broadcasting](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft entwickelt wurde, um moderne Webanwendungen und -dienste zu erstellen. Mit ASP.NET können Sie schnell Webseiten basierend auf HTML, CSS und JavaScript erstellen, sie für die Nutzung durch Millionen von Benutzern skalieren und leicht komplexere Funktionen wie Web-APIs, Datenformulare oder Echtzeitkommunikationen hinzufügen.

Ein Unterscheidungsmerkmal von ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, was es Programmierern ermöglicht, ASP.NET-Code unter Verwendung einer beliebigen unterstützten .NET-Sprache (C#, Visual Basic usw.) zu schreiben. Ähnlich wie viele Microsoft-Produkte profitiert es von ausgezeichneten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Programmiersprache Perl.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, sich ohne große Sprachkenntnisse einzuarbeiten, und leistungsstark genug, um Sie weiterzubringen. Mojolicious setzt diese Idee unter Verwendung modernster Technologien um.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um einsatzfähige Ein-Datei-Prototypen in gut strukturierte MVC-Webanwendungen zu verwandeln.
- RESTful Routen, Plugins, Befehle, Perl-artige Templates, Inhaltsverhandlung, Sitzungsmanagement, Formularvalidierung, Test-Framework, statische Dateiserver, CGI/[PSGI](https://plackperl.org/)-Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (long polling), Keep-Alive, Connection-Pooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON und HTML/XML-Parser und -Generatoren mit CSS-Selektorunterstützung.
- Sehr saubere, portable und objektorientierte reine-Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, frei und quelloffen.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige Framework basierend auf [Java](https://www.java.com/) ist, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie "einfach laufen lassen" können. Es bietet einen Meinungs-prächtig Blick auf die Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht jedoch den Start mit minimalem Aufwand und Konfiguration.

Es kann für kleinere Probleme verwendet werden, aber seine Stärke liegt im Aufbau größerer skalierbarer Anwendungen, die einen Cloud-Ansatz verwenden. Normalerweise laufen mehrere Anwendungen parallel, die miteinander reden, wobei einige die Benutzernutzung bereitstellen und andere Back-End-Arbeit leisten (z. B. auf Datenbanken oder andere Dienste zugreifen). Load-Balancer helfen, Redundanz und Zuverlässigkeit zu gewährleisten oder die geostandortbasierte Behandlung von Benutzeranfragen sicherzustellen, um Reaktionsfähigkeit zu sichern.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Web-Anwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie man ein Web-Framework für die eigene serverseitige Entwicklung auswählt. Wenn nicht, machen Sie sich keine Sorgen — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen etwas Erfahrung im tatsächlichen Umgang mit einem Web-Framework zu geben.

Im nächsten Artikel dieses Moduls ändern wir die Richtung leicht und befassen uns mit Web-Sicherheit.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
