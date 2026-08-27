---
title: Server-seitige Web-Frameworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel hat Ihnen gezeigt, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen ist es an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen bearbeitet und beantwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Web-Frameworks die Entwicklung und Wartung von serverseitigem Code vereinfachen können, und die Leser dazu bringen, über die Auswahl eines Frameworks für ihre eigene Entwicklung nachzudenken.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte illustrieren einige Punkte anhand von Codefragmenten aus realen Web-Frameworks. Machen Sie sich keine Sorgen, wenn es jetzt nicht **alles** Sinn ergibt; wir werden Sie im weiteren Verlauf der Rahmenwerk-spezifischen Module durch den Code führen.

## Übersicht

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Webentwicklungstätigkeiten vereinfachen, einschließlich der Zuweisung von URLs zu den entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierungen, der Formatierung von Ausgaben (z.B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt liefert einige Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Wir erklären dann einige der Kriterien, die Sie zur Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt diskutieren wir einige der Funktionen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework wird unbedingt alle diese Funktionen bieten!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Dies bedeutet, dass Sie eine einfachere Aufgabe haben werden, indem Sie mit höherwertigem Code interagieren, statt mit primitiven Netzwerkoperationen auf niedrigerer Ebene.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfragedaten enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe (in diesem Fall ein String) zurückgeben.

```python
# Django view function
from django.http import HttpResponse

def index(request):
    # Get an HttpRequest (request)
    # perform operations using information from the request.
    # Return HttpResponse
    return HttpResponse('Output string to return')
```

### Anfragen an den entsprechenden Handler leiten

Die meisten Webseiten bieten eine Anzahl unterschiedlicher Ressourcen, die über verschiedene URLs zugänglich sind. Es wäre schwierig, all diese Anfragen in einer Funktion zu behandeln, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster auf spezifische Handler-Funktionen abzubilden. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die eine bestimmte Funktionalität bereitstellt, ohne den zugrundeliegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen mit einem Dekorateur hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django von Entwicklern erwartet, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion zu definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/my_team_name/5/
    url(r'^best/(?P<team_name>\w+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Den Zugang zu Daten in der Anfrage erleichtern

Daten können in einer HTTP-Anfrage auf verschiedene Weise kodiert werden. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur kodieren. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Body der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmiersprachengeeignete Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften, um auf die Ziel-URL, den Anfragetyp (z.B. ein HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten, usw. zuzugreifen. Django kann auch Informationen kodieren, die in der Struktur der URL durch die Definition von "Erfassungsmustern" im URL-Mapping (siehe das letzte Codefragment im obigen Abschnitt) enthalten sind.

### Datenbankzugriff abstrahieren und vereinfachen

Webseiten verwenden Datenbanken, um sowohl Informationen zu speichern, die mit Benutzern geteilt werden, als auch über Benutzer. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen auf der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Der Einsatz eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann im Rahmen des Frameworks implementiert werden. Dies erleichtert und sichert es, dass Daten im korrekten Typ des Datenbankfelds gespeichert werden, das korrekte Format haben (z.B. eine E-Mail-Adresse) und nicht in irgendeiner Weise schädlich sind (Hacker können bestimmte Code-Muster nutzen, um schädliche Dinge zu tun, wie z.B. das Löschen von Datenbankeinträgen).

Beispielsweise bietet das Django-Web-Framework einen ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Modell_. Das Modell spezifiziert die zu speichernden Felder_typen_, die eine Feld-Validation auf Feldebene bereitstellen können, um festzulegen, welche Informationen gespeichert werden können (z.B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfetexte für Dokumentation, Beschriftungstexte für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die unabhängig vom Code geändert werden kann.

Das erste Code-Beispiel unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und das Team-Level als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Das `team_level` ist ein Auswahlfeld, deswegen stellen wir auch eine Zuordnung zwischen den angezeigten Optionen und den zu speichernden Daten bereit, zusammen mit einem Standardwert.

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

Das Django-Modell bietet eine einfache Abfrage-API, um die Datenbank zu durchsuchen. Diese API kann gleichzeitig auf mehrere Felder mittels unterschiedlicher Kriterien (z.B. genau, Groß-/Kleinschreibung unempfindlich, größer als usw.) abgleichen und komplexe Anweisungen unterstützen (z.B. können Sie eine Suche auf U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der zweite Code-Schnipsel zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Einträge filtern möchten, bei denen das Feld `team_level` genau den Text 'U09' enthält (beachten Sie unten, wie dieses Kriterium mittels des `filter()`-Funktion als Argument mit dem Feldnamen und dem Abgleichstyp durch doppelte Unterstriche getrennt übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Template-Systeme. Diese ermöglichen es, die Struktur eines Ausgabedokuments anzugeben, indem Platzhalter für die Daten verwendet werden, die beim Generieren einer Seite hinzugefügt werden. Templates werden häufig zur Erstellung von HTML verwendet, können aber auch andere Dokumenttypen erstellen.

Web-Frameworks bieten oft einen Mechanismus, der es erleichtert, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel erlaubt das Django-Template-System, Variablen mit einer "doppelten Griff"-Syntax anzugeben (z.B. `\{{ variable_name }}`), die durch Werte ersetzt werden, die von der View-Funktion beim Rendern einer Seite übergeben werden. Das Template-System unterstützt auch Ausdrücke (mit Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren durch Listenwerte, die in das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Template-Systeme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), Handlebars (JavaScript), Mustache (JavaScript) usw.

Der untenstehende Code-Schnipsel zeigt, wie dies funktioniert. Weiterführend anhand des Beispiels des "jüngsten Teams" aus dem vorherigen Abschnitt wird die HTML-Vorlage von einer Liste `youngest_teams`, die von der View übergeben wird, verwendet. Innerhalb des HTML-Grundgerüsts haben wir einen Ausdruck, der zunächst überprüft, ob die Variable `youngest_teams` existiert, und dann eine `for`-Schleife durchläuft. Bei jeder Wiederholung zeigt das Template den `team_name`-Wert des Teams in einem Listeneintrag an.

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

## Wie wählt man ein Web-Framework aus?

Es gibt eine Vielzahl von Web-Frameworks für nahezu jede Programmiersprache, die Sie verwenden könnten (wir listen einige der beliebteren Frameworks im folgenden Abschnitt auf). Angesichts so vieler Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Startpunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen könnten, sind:

- **Lernaufwand:** Der Lernaufwand eines Web-Frameworks hängt davon ab, wie vertraut Sie mit der zugrundeliegenden Programmiersprache sind, die Konsistenz ihrer API, die Qualität ihrer Dokumentation sowie die Größe und Aktivität ihrer Community. Wenn Sie absolut keine Erfahrung im Programmieren haben, dann ziehen Sie Django in Betracht (es ist eines der einfachsten zu erlernenden Frameworks basierend auf den obigen Kriterien). Wenn Sie Teil eines Entwicklerteams sind, das bereits erhebliche Erfahrungen mit einem bestimmten Web-Framework oder einer Programmiersprache hat, dann macht es Sinn, sich daran zu halten.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind und umfasst sowohl den Aufwand für das Schreiben als auch das Warten von Code (da Sie keine neuen Funktionen schreiben können, während alte fehlerhaft sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich wie die für den "Lernaufwand" — z.B. Dokumentation, Gemeinschaft, Programmiererfahrung usw. — andere Faktoren sind:
  - _Zweck/ursprung des Frameworks_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind beim Erstellen von Web-Apps mit ähnlichen Einschränkungen _besser_. Zum Beispiel wurde Django zur Unterstützung der Entwicklung einer Zeitungswebsite entwickelt, daher ist es gut für Blogs und andere Seiten, die das Veröffentlichen von Inhalten umfassen. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. flexibel_: Ein meinungsstarkes Framework ist eines, bei dem es empfohlene "beste" Wege gibt, ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks sind tendenziell produktiver, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Integrierte vs. eigenständige Lösungen_: Einige Web-Frameworks umfassen Werkzeuge/Bibliotheken, die jedes Problem, das ihre Entwickler sich vorstellen können, "standardmäßig" lösen, während leichtere Frameworks erwarten, dass Web-Entwickler Lösungen für Probleme aus unabhängigen Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtes Framework ist). Frameworks, die alles enthalten, sind oft einfacher zu starten, da Sie bereits alles haben, was Sie benötigen und die Wahrscheinlichkeit hoch ist, dass es gut integriert und gut dokumentiert ist. Wenn ein kleineres Framework jedoch alles hat, was Sie (jemals) benötigen werden, kann es in begrenzteren Umgebungen laufen und hat einen kleineren und einfacheren Lernumfang.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, wird zu wartbarerem Code führen als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design eines Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Performance des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, weil selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, könnten durch die Kosten des Lernens und der Wartung aufgewogen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, können Sie feststellen, dass sie die Anzahl der Anfragen, die sie erhält, nicht mehr bewältigen kann, während Benutzer darauf zugreifen. In diesem Fall könnten Sie in Erwägung ziehen, Caching-Unterstützung hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine vollständige oder teilweise Web-Antwort speichern, sodass sie bei nachfolgenden Anfragen nicht erneut berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller als das Errechnen einer. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Unterstützungsgrade für die Definition, welcher Inhalt gecacht werden kann.
- **Skalierbarkeit:** Sobald Ihre Webseite unglaublich erfolgreich ist, könnten Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen des _vertikalen Skalierens_ erreichen (Ihre Webanwendung auf leistungsfähigeren Hardwares zu betreiben). In diesem Fall müssen Sie möglicherweise _horizontal skalieren_ (die Last durch Verteilen Ihrer Webseite auf eine Anzahl von Webservern und Datenbanken teilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit entfernt von Ihrem Server ansässig sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied darin machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten besseren Schutz vor häufigen Web-Angriffen. Django beispielsweise bereinigt alle Benutzereingaben in HTML-Templates, sodass eingegebene JavaScript-Anweisungen nicht ausgeführt werden können. Andere Frameworks bieten ähnliche Schutzmaßnahmen, jedoch sind diese nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzierung, ob das Framework aktiv weiterentwickelt wird, etc.

Wenn Sie ein absoluter Anfänger im Programmieren sind, wählen Sie wahrscheinlich Ihr Framework basierend auf der "Einfachkeit des Lernens". Neben der "Einfachheit der Verwendung" der Sprache selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele im weiteren Verlauf des Kurses zu schreiben, hauptsächlich weil sie einfach zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns die Hauptwebseiten von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) besuchen und ihre Dokumentation und Community überprüfen.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>    - Klicken Sie auf die Links im Dokumentationsmenü (benannt wie "Documentation, Guide, API Reference, Getting Started" usw.).
>    - Können Sie Themen sehen, die zeigen, wie URL-Routing, Templates und Datenbanken/Modelle eingerichtet werden?
>    - Sind die Dokumente klar?
> 2. Navigieren Sie zu den Mailinglisten für jede Seite (zugänglich über die Community-Links).
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun weitermachen und einige spezielle serverseitige Web-Frameworks diskutieren.

Die unten aufgeführten serverseitigen Frameworks repräsentieren _einige_ der zum Zeitpunkt des Schreibens am beliebtesten verfügbaren Frameworks. Alle haben alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv weiterentwickelt, haben begeisterte Communities, die Dokumentation erstellen und Benutzern in Foren helfen, und werden in zahlreichen hochkarätigen Webseiten eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie durch eine einfache Internetsuche entdecken können.

> [!NOTE]
> Beschreibungen stammen (teilweise) von den Webseiten der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochrangiges Python-Web-Framework, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Entwickelt von erfahrenen Entwicklern, übernimmt es einen Großteil des Aufwandes bei der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist frei und Open Source.

Django folgt der "Batterien im Lieferumfang" Philosophie und bietet fast alles, was die meisten Entwickler "ab Werk" tun möchten. Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code einfach zu lesen und zu warten.

Beliebte Seiten, die Django verwenden (von der Django-Homepage), umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikro-Framework für Python.

Obwohl minimalistisch, kann Flask ernsthafte Webseiten aus dem Stand heraus erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templates, sichere Cookies, [Unittesting](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfrageverteilung. Es hat gute Dokumentation und eine aktive Community.

Flask ist extrem beliebt geworden, insbesondere bei Entwicklern, die Webservices auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z.B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/) betreiben, [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, anpassungsfähiges und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine browserunabhängige Umgebung für das Ausführen von JavaScript). Es bietet eine robuste Reihe von Funktionen für Web- und Mobilanwendungen und liefert nützliche HTTP-Dienstmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist extrem populär, teilweise weil es den Übergang von clientseitigen JavaScript-Webprogrammierern zur serverseitigen Entwicklung erleichtert und teilweise weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Mehrfachbearbeitung innerhalb eines Threads, anstatt separate Prozesse für jede neue Web-Anfrage zu starten).

Da Express ein minimalistisches Web-Framework ist, integriert es nicht jede Komponente, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele hervorragende unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welche die beste für einen bestimmten Zweck ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl Server- als auch Client-seitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen benutzen Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit und -Framework, das auf Chrome V8 und [Rust](https://rust-lang.org/) aufgebaut ist.

Deno wird von [Tokio](https://tokio.rs/) angetrieben — einer Rust-basierten asynchronen Laufzeit, die es ermöglicht, Webseiten schneller bereitzustellen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was die Kompilierung von Binärcode zur Verwendung auf der Client-Seite ermöglicht. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der auf natürliche Weise eine bessere Sicherheit gewährleistet.

Denos Merkmale umfassen:

- Sicherheit standardmäßig. [Deno-Module schränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**, **Netzwerk** oder **Umgebungs**zugriff ein, es sei denn, sie werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **aus der Box**.
- Erstklassiger Await-Mechanismus.
- Eingebaute Testeinrichtung und Codeformatter (`deno fmt`).
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript geschrieben sind und den `Deno`-Namensraum (oder eine Feature-Test dafür) ausschließen, sollten direkt in jedem modernen Browser funktionieren.
- Skriptbündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für Client- als auch für Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (normalerweise als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardisierte Mechanismen für das Routing von URLs, den Zugriff auf Daten aus einer Datenbank, das Generieren von HTML aus Templates und das Formatieren von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ebenfalls die Verwendung von Designmustern wie DRY ("don't repeat yourself" — schreiben Sie Code nach Möglichkeit nur einmal), MVC (Model-View-Controller) und einer Reihe anderer.

Es gibt natürlich viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Seiten verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, den Entwicklungsaufwand zu verringern, indem es häufige Aufgaben, die in der Mehrzahl der Webprojekte verwendet werden, erleichtert, wie:

- [Einfache, schnelle Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsfähiger Dependency Injection Container](https://laravel.com/docs/container).
- Mehrere Backends für die Speicherung von [Sitzungen](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache).
- Ausdrucksstarker, intuitiver [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundjob-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeitereignis-Broadcasting](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber kraftvoll und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Webframework, das von Microsoft für die Erstellung moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites basierend auf HTML, CSS und JavaScript erstellen, sie für die Nutzung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikationen hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, die es Programmierern erlaubt, ASP.NET-Code mit jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) zu schreiben. Wie viele Microsoft-Produkte profitiert es von hervorragenden Tools (oft kostenlos), einer aktiven Entwicklergemeinschaft und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

Zurück in den frühen Tagen des Internets haben viele Leute Perl gelernt wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Sie war einfach genug, um ohne großes Vorwissen über die Sprache anzufangen und mächtig genug, um Sie weiterzubringen. Mojolicious implementiert diese Idee mit Spitzentechnologien.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um einzelne Dateiprototypen leicht in gut strukturierte MVC-Web-Anwendungen zu verwandeln.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Templates, Inhaltsverhandlung, Sitzungsverwaltung, Formularvalidierung, Test-Framework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/) Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domainsocket, Comet (Long Polling), Keep-Alive, Connection-Pooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Sehr sauberes, portables und objektorientiertes Pure-Perl-API ohne versteckte Magie.
- Frischer Code, basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Einstiegspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige Framework, das auf [Java](https://www.java.com/) basiert, ist es einfach zu verwenden, um eigenständige, produktionsfähige Spring-basierte Anwendungen zu erstellen, die Sie "einfach ausführen" können. Es ist eine meinungsstarke Sichtweise auf die Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht es Ihnen aber, mit minimalem Aufwand und Konfiguration zu beginnen.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau von Anwendungen im großen Maßstab, die einen Cloud-Ansatz verwenden. Normalerweise laufen mehrere Anwendungen parallel und kommunizieren miteinander, wobei einige Benutzerinteraktionen bereitstellen und andere Backend-Arbeiten durchführen (z.B. Zugriff auf Datenbanken oder andere Dienste). Lastverteiler helfen, Redundanz und Zuverlässigkeit sicherzustellen oder eine geografische Bearbeitung von Benutzeranfragen zu ermöglichen, um ein schnelles Ansprechverhalten zu gewährleisten.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code vereinfachen können. Er hat auch einen Überblick über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, keine Sorge — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen einige Erfahrungen mit der tatsächlichen Arbeit mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul werden wir die Richtung leicht ändern und die Web-Sicherheit in Betracht ziehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
