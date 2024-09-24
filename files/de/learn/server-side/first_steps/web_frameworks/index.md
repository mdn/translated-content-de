---
title: Serverseitige Web-Frameworks
slug: Learn/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu antworten. Mit diesem Wissen ist es an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundverständnis darüber, wie serverseitiger Code HTTP-Anfragen bearbeitet und beantwortet (siehe <a href="/de/docs/Learn/Server-side/First_steps/Client-Server_overview">Client-Server Übersicht</a>).
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

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus realen Web-Frameworks. Machen Sie sich keine Sorgen, wenn nicht alles jetzt schon vollständig Sinn macht; wir werden den Code in unseren frameworkspezifischen Modulen durchgehen.

## Überblick

Serverseitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Aufgaben der Webentwicklung vereinfachen, einschließlich der Zuordnung von URLs zu entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z.B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Web-Angriffe.

Der nächste Abschnitt bietet einige Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Wir erklären dann einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um häufige Operationen der Webentwicklung zu vereinfachen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen – es macht Ihr Leben viel einfacher.

In diesem Abschnitt wird eine Reihe von Funktionen diskutiert, die oft von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise alle diese Funktionen!).

### Direkte Arbeit mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll – Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Ihre Arbeit einfacher wird, indem Sie mit einfacheren, höherstufigen Codes arbeiten, anstatt mit niedrigstufigen Netzwerkprimitive.

Das folgende Beispiel zeigt, wie dies im Web-Framework Django (Python) funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageinformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe (in diesem Fall ein String) zurückgeben.

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

Die meisten Websites bieten eine Reihe verschiedener Ressourcen, die über unterschiedliche URLs zugänglich sind. Alles in einer Funktion zu handhaben, wäre schwer zu warten, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster spezifischen Handler-Funktionen zuzuweisen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL, die zur Bereitstellung eines bestimmten Features verwendet wird, ändern können, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask-Framework (Python) View-Funktionen Routen mit einem Dekorator hinzu.

```python
@app.route("/")
def hello():
    return "Hello World!"
```

Während Django von Entwicklern erwartet, eine Liste von URL-Zuordnungen zwischen einem URL-Muster und einer View-Funktion zu definieren.

```python
urlpatterns = [
    url(r'^$', views.index),
    # example: /best/myteamname/5/
    url(r'^best/(?P<team_name>\w.+?)/(?P<team_number>[0-9]+)/$', views.best),
]
```

### Einfacher Zugriff auf Daten in der Anfrage

Daten können in einer HTTP-Anfrage auf verschiedene Weise codiert werden. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann die benötigten Daten in URL-Parametern oder innerhalb der URL-Struktur codieren. Eine HTTP-`POST`-Anfrage zum Aktualisieren einer Ressource auf dem Server enthält stattdessen die Aktualisierungsinformationen als "POST-Daten" im Anfragekörper. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmgerechte Mechanismen zum Zugriff auf diese Informationen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion übergibt, Methoden und Eigenschaften zum Zugreifen auf die Ziel-URL, den Anfragetyp (z.B. ein HTTP `GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten, usw. Django kann auch Informationen, die in der Struktur der URL codiert sind, durch die Definition von "Erfassungsmustern" im URL-Mapper übergeben (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um sowohl Informationen, die mit Benutzern geteilt werden sollen, als auch Informationen über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Die Verwendung eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank austauschen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Eigenschaften verschiedener Datenbanken basierend auf ihrer Nutzung zu optimieren.
- Die grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies macht es einfacher und sicherer zu überprüfen, dass Daten in dem richtigen Typ von Datenbankfeld gespeichert werden, das richtige Format haben (z.B. eine E-Mail-Adresse) und auf keine Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schädliche Dinge zu tun, wie z.B. Datenbankeinträge zu löschen).

Zum Beispiel bietet das Django-Web-Framework einen ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Datensatzes verwendet wird, als _Model_. Das Modell spezifiziert die zu speichernden Feldtypen, die eine Validierung auf Feldebene darüber bereitstellen können, welche Informationen gespeichert werden können (z.B. erlaubt ein E-Mail-Feld nur gültige E-Mail-Adressen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten, Hilfstext für Dokumentation, Labeltext für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da diese eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Snippet unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Das `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert.

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

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Dies kann mit mehreren Feldern gleichzeitig mit unterschiedlichen Kriterien übereinstimmen (z.B. exakt, nicht groß/klein geschrieben, größer als, usw.) und kann komplexe Anweisungen unterstützen (z.B. können Sie eine Suche nach U11-Teams angeben, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Code-Snippet zeigt eine View-Funktion (Ressourcenhandler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Datensätze herausfiltern wollen, bei denen das Feld `team_level` genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium als Argument mit Feldname und Übereinstimmungstyp, getrennt durch doppelte Unterstriche, an die `filter()`-Funktion übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templating-Systeme an. Diese erlauben es Ihnen, die Struktur eines Ausgabedokuments festzulegen, indem Sie Platzhalter für Daten verwenden, die beim Generieren einer Seite hinzugefügt werden. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erstellen.

Web-Frameworks bieten oft einen Mechanismus, der es einfach macht, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{glossary("JSON")}} und {{glossary("XML")}}.

Zum Beispiel ermöglicht das Django-Templatesystem Ihnen die Spezifizierung von Variablen mit einer "Doppel-Handlebars"-Syntax (z.B. `\{{ variable_name }}`), die durch Werte ersetzt wird, die von der View-Funktion übergeben werden, wenn eine Seite gerendert wird. Das Templating-System bietet auch Unterstützung für Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie die Iteration von Listeneinträgen, die an das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templating-Systeme verwenden eine ähnliche Syntax, z.B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), usw.

Das folgende Code-Snippet zeigt, wie dies funktioniert. Im "junges Team"-Beispiel aus dem vorherigen Abschnitt wird dem HTML-Template eine Listenvariable namens `youngest_teams` von der View übergeben. Im HTML-Skelett haben wir einen Ausdruck, der zuerst prüft, ob die Variable `youngest_teams` existiert, und dann wird in einer `for`-Schleife darauf iteriert. Bei jeder Iteration zeigt das Template den Wert `team_name` des Teams in einem Listenelement an.

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

## Auswahl eines Web-Frameworks

Es gibt zahlreiche Web-Frameworks für fast jede Programmiersprache, die Sie verwenden möchten (wir listen einige der beliebtesten Frameworks im folgenden Abschnitt auf). Mit so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, von der Konsistenz seiner API, der Qualität der Dokumentation und der Größe und Aktivität der Community. Wenn Sie absolut keine Programmiererfahrung haben, sollten Sie Django in Betracht ziehen (es ist eines der am einfachsten zu erlernenden basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits über erhebliche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache verfügt, macht es Sinn, daran festzuhalten.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie sich mit dem Framework vertraut gemacht haben und umfasst sowohl den Aufwand für das Schreiben als auch für die Wartung des Codes (da Sie keine neuen Funktionen schreiben können, während alte fehlerhaft sind). Viele der Faktoren, die die Produktivität beeinflussen, sind ähnlich denen beim "Lernaufwand" – z.B. Dokumentation, Community, Programmiererfahrung usw. – andere Faktoren umfassen:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich erstellt, um bestimmte Arten von Problemen zu lösen, und bleiben _besser_ beim Erstellen von Web-Apps mit ähnlichen Einschränkungen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen und eignet sich daher gut für Blogs und andere Websites, die mit der Veröffentlichung von Inhalten zu tun haben. Im Gegensatz dazu ist Flask ein wesentlich leichteres Framework und eignet sich hervorragend zur Erstellung von Web-Apps auf eingebetteten Geräten.
  - _Meinungsstark vs. nicht meinungsstark_: Ein meinungsstarkes Framework ist eines, bei dem es empfohlene "beste" Methoden gibt, um ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks neigen dazu, produktiver zu sein, wenn Sie versuchen, gängige Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Nahtlos integriert vs. modular_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die jedes Problem ihrer Entwickler adressieren, während leichtere Frameworks von Webentwicklern erwarten, dass sie Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für Erstere, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles inkludieren, sind oft einfacher zu starten, weil Sie bereits alles zur Verfügung haben, und es ist wahrscheinlich, dass es gut integriert und gut dokumentiert ist. Wenn ein kleineres Framework jedoch alles hat, was Sie (je) benötigen, kann es in eingeschränkten Umgebungen laufen und eine kleinere und einfachere Menge von Lerninhalten erfordern.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel führt ein Framework, das die [Model-View-Controller](/de/docs/Glossary/MVC) Architektur fördert, um Code in logische Funktionen zu unterteilen, zu wartbarerem Code als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design des Frameworks großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python für mittelgroße Websites, die auf moderater Hardware laufen, mehr als "gut genug" sind. Die vermeintlichen Geschwindigkeitsvorteile einer anderen Sprache, z.B. C++ oder JavaScript, könnten durch die Kosten für Lernen und Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, könnten Sie feststellen, dass sie nicht mehr mit der Anzahl der Anfragen umgehen kann, die sie erhält, da Benutzer darauf zugreifen. In diesem Fall sollten Sie das Hinzufügen von Caching in Betracht ziehen. Caching ist eine Optimierung, bei der Sie eine ganze oder Teile einer Webantwort speichern, damit sie bei späteren Anfragen nicht neu berechnet werden muss. Die Rückgabe einer zwischengespeicherten Antwort ist viel schneller als die ursprüngliche Berechnung. Caching kann im Code oder im Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Unterstützungsebenen für die Definition, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website enorm erfolgreich ist, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen des _vertikalen Skalierens_ erreichen (Ihre Webanwendung auf leistungsfähigerer Hardware ausführen). An diesem Punkt könnten Sie _horizontal skalieren_ müssen (die Last verteilen, indem Sie Ihre Website über eine Anzahl von Webservern und Datenbanken verteilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit vom Server entfernt sind. Das von Ihnen gewählte Web-Framework kann einen großen Unterschied machen, wie einfach es ist, Ihre Website zu skalieren.
- **Websicherheit:** Einige Web-Frameworks bieten eine bessere Unterstützung beim Umgang mit häufigen Webangriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Templates, sodass benutzerdefiniertes JavaScript nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, aber er ist nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzen, ob das Framework aktiv entwickelt wird, usw.

Wenn Sie ein absoluter Anfänger im Programmieren sind, dann werden Sie Ihr Framework wahrscheinlich basierend auf der "Leichtigkeit des Lernens" wählen. Neben der "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie einfach zu lernen sind und gute Unterstützung bieten.

> [!NOTE]
> Lassen Sie uns die Hauptwebsites für [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) besuchen und deren Dokumentation und Community überprüfen.
>
> 1. Gehen Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentationsmenü-Links (bezeichnet wie "Documentation, Guide, API Reference, Getting Started", usw.).
>    - Können Sie Themen sehen, die zeigen, wie man URL-Routing, Templates und Datenbanken/Modelle einrichtet?
>    - Sind die Dokumente klar?
>
> 2. Gehen Sie zu den Mailinglisten für jede Seite (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten erhalten?
>    - Haben sie eine aktive Community?

## Ein paar gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks besprechen.

Die folgenden serverseitigen Frameworks repräsentieren _einige_ der derzeit populärsten verfügbaren. Alle von ihnen haben alles, was Sie benötigen, um produktiv zu sein – sie sind Open Source, werden aktiv entwickelt, haben begeisterte Communities, die Dokumentationen erstellen und Benutzern auf Diskussionsforen helfen, und werden in einer großen Anzahl hochkarätiger Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie durch eine einfache Internetsuche entdecken können.

> [!NOTE]
> Beschreibungen stammen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein High-Level-Python-Web-Framework, das die schnelle Entwicklung und sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern gebaut und nimmt Ihnen viel von dem Aufwand der Webentwicklung ab, sodass Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der Philosophie "Batteries included" und bietet fast alles, was die meisten Entwickler „out of the box“ tun möchten. Da alles enthalten ist, funktioniert es zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentationen. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Seiten, die Django verwenden (von der Django-Startseite), umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Trotz seiner minimalistischen Art kann Flask ernsthafte Websites aus der Box erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Komponententests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/) Anfragenversand. Es hat eine gute Dokumentation und eine aktive Community.

Flask ist extrem populär geworden, insbesondere für Entwickler, die Webservices auf kleinen, ressourcenschwachen Systemen anbieten müssen (z.B. einen Webserver auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), usw. ausführen).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unopinionated, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine nicht-Browser-Umgebung zum Ausführen von JavaScript). Es bietet eine robuste Ausstattung von Funktionen für Web- und mobile Anwendungen und liefert nützliche HTTP-Dienstprogramm-Methoden und [Middleware](/de/docs/Glossary/Middleware).

Express ist extrem populär, teilweise weil es die Migration von clientseitigen JavaScript-Web-Programmierern in die serverseitige Entwicklung erleichtert, und teilweise weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads, anstatt für jede neue Webanfrage separate Prozesse zu erzeugen).

Da Express ein minimalistisches Web-Framework ist, integriert es nicht jedes Bestandteil, den Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugang und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche für einen bestimmten Zweck am besten geeignet ist!

Viele populäre serverseitige und Full-Stack-Frameworks (bestehend aus sowohl Server- als auch Client-seitigen Frameworks) basieren auf Express, einschließlich [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Runtime und Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — eine auf Rust basierende asynchrone Laufzeit, die es ermöglicht, Webseiten schneller zu bedienen. Es hat auch eine interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), die es ermöglicht, Binärcode zur Verwendung auf der Client-Seite zu kompilieren. Deno zielt darauf ab, einige der Lücken in [Node.js](/de/docs/Learn/Server-side/Node_server_without_framework) zu füllen, indem ein Mechanismus bereitgestellt wird, der von Natur aus eine bessere Sicherheit aufrechterhält.

Die Merkmale von Deno umfassen:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**, **Netzwerk** oder **Umgebungs**zugriff, sofern nicht ausdrücklich erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Erster Klasse Await-Mechanismus.
- Eingebaute Testeinrichtung und Codeformater (`deno fmt`)
- (JavaScript) Kompatibilität mit dem Browser: Deno-Programme, die vollständig in JavaScript geschrieben sind und den `Deno`-Namensraum ausschließen (oder dafür einen Funktionstest durchführen), sollten direkt in jedem modernen Browser funktionieren.
- Skriptbündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für die Client- als auch Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (üblicherweise als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Programmiersprache Ruby geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es Standardmechanismen für die Zuordnung von URLs, den Zugriff auf Daten aus einer Datenbank, das Generieren von HTML aus Templates und das Formatieren von Daten als {{glossary("JSON")}} oder {{glossary("XML")}}. Es fördert ebenso die Verwendung von Designmustern wie DRY („don't repeat yourself“ — Code einmal schreiben, wenn überhaupt nötig), MVC (Model-View-Controller) und eine Reihe anderer.

Natürlich gibt es viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Web-Anwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, den Schmerz aus der Entwicklung zu nehmen, indem es häufige Aufgaben erleichtert, die in den meisten Webprojekten verwendet werden, wie:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency-Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Session-](https://laravel.com/docs/session) und [Cache-Speicherung](https://laravel.com/docs/cache).
- Ausdrückliches, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Verarbeitung von Hintergrundjobs](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft entwickelt wurde, um moderne Webanwendungen und -dienste aufzubauen. Mit ASP.NET können Sie schnell Websites erstellen, die auf HTML, CSS und JavaScript basieren, sie für die Nutzung durch Millionen von Benutzern skalieren und problemlos komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeitkommunikation hinzufügen.

Einer der Unterscheidungsmerkmale für ASP.NET ist, dass es auf dem [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) basiert, was es Programmierern ermöglicht, ASP.NET-Code mit jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) zu schreiben. Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Programmiersprache Perl.

In den frühen Tagen des Webs haben viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI) gelernt. Es war einfach genug, um ohne viel Wissen über die Sprache loszulegen und leistungsstark genug, um Sie weiterzubringen. Mojolicious implementiert diese Idee mit modernsten Technologien.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um leicht ein einziges Datei-Prototyp in gut strukturierte MVC-Web-Anwendungen zu wachsen.
- RESTful Routen, Plugins, Befehle, Perl-artige Templates, Inhaltsverhandlung, Sitzungsverwaltung, Formularvalidierung, Testframework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/) Erkennung und Unicode-Unterstützung erster Klasse.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (long polling), Keep-Alive, Verbindungspooling, Zeitüberschreitung, Cookie, multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit Unterstützung für CSS-Selektoren.
- Eine sehr saubere, portierbare und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code basierend auf jahrelanger Erfahrung, frei und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von einer Reihe von Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige Framework ist, das auf [Java](https://www.java.com/) basiert, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die man „einfach ausführen“ kann. Es bietet eine meinungsstarke Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht aber den Einstieg mit minimalem Aufwand und Konfiguration.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau größerer Anwendungen, die einen Cloud-Ansatz verwenden. Normalerweise laufen mehrere Anwendungen parallel, die miteinander sprechen, wobei einige die Benutzerinteraktion bereitstellen und andere Backend-Arbeiten (z.B. Zugriff auf Datenbanken oder andere Dienstleistungen) erledigen. Load-Balancer helfen, Redundanz und Zuverlässigkeit sicherzustellen oder erlauben eine geolokalisierte Bearbeitung von Benutzeranfragen, um die Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen können. Wenn nicht, dann machen Sie sich keine Sorgen — später im Kurs geben wir Ihnen detaillierte Tutorials zu Django und Express, um Ihnen einige Erfahrungen mit der tatsächlichen Arbeit mit einem Web-Framework zu geben.

Für den nächsten Artikel in diesem Modul werden wir die Richtung etwas ändern und uns mit Websicherheit beschäftigen.

{{PreviousMenuNext("Learn/Server-side/First_steps/Client-Server_overview", "Learn/Server-side/First_steps/Website_security", "Learn/Server-side/First_steps")}}
