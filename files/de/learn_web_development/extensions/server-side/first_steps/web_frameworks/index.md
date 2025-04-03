---
title: Server-seitige Web-Frameworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen eines Webbrowsers zu reagieren. Mit diesem Wissen ist es an der Zeit, zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen könnten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und beantwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Übersicht</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und Leser zum Nachdenken über die Auswahl eines Frameworks
        für die eigene Entwicklung anregen.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus realen Web-Frameworks. Machen Sie sich keine Sorgen, wenn es jetzt nicht **alles** Sinn ergibt; wir werden den Code in unseren Framework-spezifischen Modulen durchgehen.

## Übersicht

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die das Schreiben, Warten und Skalieren von Webanwendungen erleichtern. Sie bieten Werkzeuge und Bibliotheken, die häufige Aufgaben in der Webentwicklung vereinfachen, einschließlich der Weiterleitung von URLs zu den entsprechenden Handlern, der Interaktion mit Datenbanken, der Unterstützung von Sitzungen und Benutzerautorisierung, der Formatierung von Ausgaben (z. B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Der nächste Abschnitt bietet etwas mehr Details darüber, wie Web-Frameworks die Entwicklung von Webanwendungen erleichtern können. Danach erklären wir einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen dann einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken zur Vereinfachung häufiger Webentwicklungsoperationen. Sie _müssen_ kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionen besprochen, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework bietet notwendigerweise all diese Funktionen!).

### Direkt mit HTTP-Anfragen und -Antworten arbeiten

Wie im letzten Artikel gesehen, kommunizieren Web-Server und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, vereinfachte Syntax zu schreiben, die serverseitigen Code generiert, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine einfachere Aufgabe haben und mit einfacheren, höherstufigen Code statt mit niedrigeren Netzwerkschnittstellen interagieren.

Das Beispiel unten zeigt, wie dies im Django-Web-Framework (Python) funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

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

Die meisten Websites bieten eine Reihe von verschiedenen Ressourcen, die über unterschiedliche URLs zugänglich sind. Diese alle in einer Funktion zu behandeln, wäre schwer zu warten, so dass Web-Frameworks einfache Mechanismen bieten, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile hinsichtlich der Wartung, da Sie die URL ändern können, die für die Bereitstellung einer bestimmten Funktion verwendet wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask-Web-Framework (Python) Routen zu View-Funktionen über einen Dekorator hinzu.

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

### Den Zugriff auf Daten in der Anfrage erleichtern

Daten können in einer HTTP-Anfrage auf verschiedene Weisen codiert werden. Ein HTTP-`GET`-Anfrage zum Abrufen von Dateien oder Daten vom Server kann angeben, welche Daten in URL-Parametern oder innerhalb der URL-Struktur benötigt werden. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, enthält stattdessen die Aktualisierungsinformationen als "POST-Daten" im Hauptteil der Anfrage. Die HTTP-Anfrage kann auch Informationen über die aktuelle Sitzung oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten sprachgemäße Mechanismen zum Zugriff auf diese Informationen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django jeder View-Funktion übergibt, Methoden und Eigenschaften zum Zugriff auf die Ziel-URL, den Anforderungstyp (z. B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sitzungsdaten usw. Django kann auch Informationen codiert in der Struktur der URL durch Definition von "Erfassungsmustern" im URL-Mapper (siehe das letzte Codefragment im Abschnitt oben) übergeben.

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbank-Schicht, die Lese-, Schreib-, Abfrage- und Löschoperationen auf der Datenbank abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Der Einsatz eines ORM hat zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne unbedingt den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, für die Merkmale unterschiedlicher Datenbanken je nach Nutzung zu optimieren.
- Grundlegende Validierung von Daten kann innerhalb des Frameworks implementiert werden. Dies erleichtert und sichert die Überprüfung, dass Daten im richtigen Typ eines Datenbankfelds gespeichert werden, das richtige Format haben (z. B. eine E-Mail-Adresse) und auf keinen Fall schädlich sind (Hacker können bestimmte Code-Muster verwenden, um bösartige Aktionen wie das Löschen von Datenbankeinträgen durchzuführen).

Zum Beispiel bietet das Django-Web-Framework ein ORM und bezeichnet das Objekt, das zur Definition der Struktur eines Eintrags verwendet wird, als _Modell_. Das Modell gibt die zu speichernden Feld _typen_ an, die eine Feldvalidierung auf Ebene der Felder bieten können, was gespeichert werden kann (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können auch ihre maximale Größe, Standardwerte, Auswahllistenoptionen, Hilfetexte zur Dokumentation, Textbeschriftungen für Formulare usw. spezifizieren. Das Modell gibt keine Informationen über die zugrunde liegende Datenbank an, da dies eine Konfigurationseinstellung ist, die separat von unserem Code geändert werden kann.

Das erste Codefragment unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dieses speichert den Teamnamen und das Teamlevel als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Das `team_level` ist ein Auswahlfeld, daher bieten wir auch eine Zuordnung zwischen den anzuzeigenden Auswahlmöglichkeiten und den zu speichernden Daten sowie einen Standardwert.

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

Das Django-Modell bietet eine einfache Abfrage-API zur Durchsuchung der Datenbank. Dies kann gegen eine Anzahl von Feldern gleichzeitig mit unterschiedlichen Kriterien (z. B. genau, groß-kleinschreibung, größer als, etc.) übereinstimmen und kann komplexe Aussagen unterstützen (zum Beispiel können Sie eine Suche auf U11-Teams festlegen, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Das zweite Codefragment zeigt eine View-Funktion (Ressourcen-Handler) zum Anzeigen aller unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Einträge filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (siehe unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldname und Übereinstimmungstyp über doppelte Unterstriche getrennt übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Templatingsysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments anzugeben, indem Platzhalter für Daten verwendet werden, die hinzugefügt werden, wenn eine Seite generiert wird. Templates werden oft verwendet, um HTML zu erstellen, können aber auch andere Dokumenttypen erstellen.

Web-Frameworks bieten oft einen Mechanismus, um es einfach zu machen, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel ermöglicht das Django-Template-System, Variablen mit einer "doppelten Klammer"-Syntax anzugeben (z. B. `\{{ variable_name }}`), die durch Werte ersetzt werden, die von der View-Funktion beim Rendern einer Seite übergeben werden. Das Templatesystem unterstützt auch Ausdrücke (mit der Syntax: `{% expression %}`), die es Templates ermöglichen, einfache Operationen wie das Iterieren von Listenwerten, die in das Template übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Templatingsysteme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript), etc.

Das untenstehende Codefragment zeigt, wie dies funktioniert. Fortsetzend des "jüngstes Team"-Beispiels aus dem vorherigen Abschnitt wurde dem HTML-Template eine Listenvariable namens `youngest_teams` von der View übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die `youngest_teams`-Variable existiert, und sie dann in einer `for`-Schleife durchläuft. In jeder Iteration zeigt das Template den `team_name`-Wert des Teams in einem Listenelement an.

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

Es gibt zahlreiche Web-Frameworks für nahezu jede Programmiersprache, die Sie verwenden möchten (wir listen einige der populäreren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden, herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Lernaufwand:** Der Aufwand, um ein Web-Framework zu lernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, die Konsistenz ihrer API, die Qualität ihrer Dokumentation und die Größe und Aktivität ihrer Community. Wenn Sie völlig keine Programmiererfahrung haben, ziehen Sie Django in Betracht (es ist eines der am leichtesten zu erlernenden Frameworks, basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits umfangreiche Erfahrung mit einem bestimmten Web-Framework oder einer Programmiersprache hat, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben als auch zu warten (da Sie keine neuen Funktionen schreiben können, während alte nicht funktionieren). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für "Lernaufwand" — z. B. Dokumentation, Community, Programmerfahrung usw. — weitere Faktoren sind:

  - _Framework-Zweck/Herkunft_: Einige Web-Frameworks wurden ursprünglich entwickelt, um bestimmte Arten von Problemen zu lösen, und sind _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django entwickelt, um die Entwicklung einer Zeitungswebsite zu unterstützen, sodass es gut für Blogs und andere Websites ist, die das Veröffentlichen von Inhalten beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend zum Erstellen von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. meinungslos_: Ein meinungsstarkes Framework ist eines, in dem es empfohlene "beste" Wege gibt, um ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks sind produktiver, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung führen, jedoch sind sie manchmal weniger flexibel.
  - _Enthält alles vs. selbst zusammenstellen_: Einige Web-Frameworks enthalten Tools/Bibliotheken, die jedes Problem, das ihre Entwickler sich vorstellen können, "von Haus aus" angehen, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen und auswählen (Django ist ein Beispiel für Ersteres, während Flask ein Beispiel für ein sehr leichtes Framework ist). Frameworks, die alles enthalten, sind oft einfacher einzusteigen, da Sie bereits alles haben, was Sie brauchen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn ein kleineres Framework jedoch alles hat, was Sie (jemals) brauchen werden, kann es in restriktiveren Umgebungen laufen und einen kleineren und einfacheren Bestand an Dingen haben, die Sie lernen müssen.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Beispielsweise ergibt ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur fördert, um Code in logische Funktionen zu trennen, wartbareren Code als eines, das keine Erwartungen an Entwickler hat. Ebenso kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Websites sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durch die Kosten des Lernens und der Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, können Sie feststellen, dass sie mit der Anzahl der Anfragen, die sie erhält, nicht mehr zurechtkommt, da Benutzer darauf zugreifen. Zu diesem Zeitpunkt können Sie die Unterstützung für Caching in Betracht ziehen. Caching ist eine Optimierung, bei der Sie eine gesamte oder Teile einer Webantwort speichern, sodass sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Eine zwischengespeicherte Antwort zurückzugeben, ist wesentlich schneller als eine zuerst zu berechnen. Caching kann in Ihrem Code oder im Server implementiert werden (siehe [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy)). Web-Frameworks haben unterschiedliche Niveaus der Unterstützung zur Definition, welcher Inhalt zwischenspeicherbar ist.
- **Skalierbarkeit:** Sobald Ihre Website fantastisch erfolgreich ist, werden Sie die Vorteile von Caching erschöpfen und sogar die Grenzen der _vertikalen Skalierbarkeit_ (Betrieb Ihrer Webanwendung auf leistungsfähigerer Hardware) erreichen. An diesem Punkt müssen Sie _horizontal skalieren_ (die Last verteilen, indem Sie Ihre Site auf mehrere Webserver und Datenbanken verteilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit von Ihrem Server entfernt sind. Das gewählte Web-Framework kann einen großen Unterschied machen, wie einfach es ist, Ihre Website zu skalieren.
- **Web-Sicherheit:** Einige Web-Frameworks bieten eine bessere Unterstützung für den Umgang mit häufigen Webangriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Templates, sodass eingegebener JavaScript-Code von Benutzern nicht ausgeführt werden kann. Andere Frameworks bieten einen ähnlichen Schutz, dieser ist jedoch nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich Lizenzen, ob das Framework in aktiver Entwicklung ist usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, wählen Sie Ihr Framework wahrscheinlich basierend auf der "Lernfreundlichkeit". Zusätzlich zur "Benutzerfreundlichkeit" der Sprache selbst sind qualitativ hochwertige Dokumentationen/Tutorials und eine aktive Community, die neuen Nutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um in späteren Kursen unsere Beispiele zu schreiben, hauptsächlich weil sie einfach zu erlernen sind und gute Unterstützung bieten.

> [!NOTE]
> Gehen wir zu den Hauptwebsites für [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) und schauen uns deren Dokumentation und Community an.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Links im Dokumentationsmenü (benannt wie "Dokumentation, Leitfaden, API-Referenz, Erste Schritte" usw.)
>    - Sehen Sie Themen, die zeigen, wie URL-Routing, Templates und Datenbanken/Models einzurichten sind?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Seite (zugänglich über Community-Links).
>
>    - Wie viele Fragen wurden in den letzten Tagen gepostet?
>    - Wie viele haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks besprechen.

Die folgenden serverseitigen Frameworks stellen _einige_ der beliebtesten dar, die zum Zeitpunkt des Schreibens verfügbar sind. Sie alle haben alles, was Sie für produktives Arbeiten benötigen — sie sind Open Source, befinden sich in aktiver Entwicklung, haben enthusiastische Communities, die Dokumentationen erstellen und Benutzern in Diskussionsforen helfen, und sie werden auf einer großen Anzahl von prominenten Websites verwendet. Es gibt viele andere großartige serverseitige Frameworks, die Sie mit einer einfachen Internetsuche entdecken können.

> [!NOTE]
> Die Beschreibungen kommen (teilweise) von den Websites der Frameworks!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochstufiges Python-Web-Framework, das die schnelle Entwicklung und sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern entwickelt und kümmert sich um einen Großteil der Mühen der Webentwicklung, sodass Sie sich auf das Schreiben Ihrer Anwendung konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der "Batterien inklusive"-Philosophie und bietet fast alles, was die meisten Entwickler "aus der Schachtel heraus" tun möchten. Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und hat umfangreiche und aktuelle Dokumentationen. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code leicht zu lesen und zu warten.

Beliebte Websites, die Django verwenden (laut Django-Startseite), umfassen: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl es minimalistisch ist, kann Flask ernsthafte Websites direkt aus der Schachtel heraus erstellen. Es enthält einen Entwicklungsserver und Debugger und unterstützt [Jinja2](https://github.com/pallets/jinja)-Templating, sichere Cookies, [Unit-Tests](https://en.wikipedia.org/wiki/Unit_testing) und [RESTful](https://restapitutorial.com/)-Anforderungsverarbeitung. Es hat eine gute Dokumentation und eine aktive Community.

Flask ist besonders bei Entwicklern beliebt geworden, die Webservices auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z. B. beim Ausführen eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnensteuerungen](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/), etc.)

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine umgebung zum Ausführen von JavaScript ohne Browser). Es bietet eine robuste Ausstattung mit Features für Web- und mobile Anwendungen und stellt nützliche HTTP-Dienstprogrammmethoden und {{Glossary("Middleware", "Middleware")}} bereit.

Express ist äußerst beliebt, teilweise weil es die Migration von clientseitigen JavaScript-Webprogrammierern in die serverseitige Entwicklung erleichtert und teilweise weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung verwendet leichtgewichtige Multitasking innerhalb eines Threads anstelle des Starts separater Prozesse für jede neue Webanfrage).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht jedes Komponenten, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele exzellente unabhängige Komponenten, aber manchmal kann es schwierig sein, herauszufinden, welche für einen bestimmten Zweck die beste ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus Server- und Client-seitigen Frameworks) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean), und [Sails](https://sailsjs.com/).

Viele hochkarätige Unternehmen verwenden Express, darunter: Uber, Accenture, IBM, etc.

### Deno (JavaScript)

[Deno](https://deno.com/) ist eine einfache, moderne und sichere [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeitumgebung und Framework, das auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufgebaut ist.

Deno wird von [Tokio](https://tokio.rs/) betrieben — einer Rust-basierten asynchronen Laufzeit, die es ermöglicht, Webseiten schneller bereitzustellen. Es hat auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), die die Kompilierung von Binärcode zur Verwendung auf der Clientseite ermöglicht. Deno zielt darauf ab, einige der Schlupflöcher in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) zu schließen, indem es einen Mechanismus bereitstellt, der eine bessere Sicherheit von Natur aus aufrechterhält.

Die Funktionen von Deno umfassen:

- Standardmäßig Sicherheit. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**, **Netzwerk** oder **Umfeld**-Zugriffe, es sei denn, diese werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **von Haus aus**.
- Erstklassiges Await-Mechanismus.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript)-Browserkompatibilität: Deno-Programme, die vollständig in JavaScript ohne den `Deno`-Namensraum geschrieben sind (oder darauf getestetet), sollten direkt im jeden modernen Browser funktionieren.
- Skriptbundling in eine einzige JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit JavaScript für sowohl Client- und Server-seitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (in der Regel als "Ruby on Rails" bezeichnet) ist ein Web-Framework, das für die Ruby-Programmiersprache geschrieben wurde.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardmäßige Mechanismen zum Routing von URLs, zum Zugriff auf Daten aus einer Datenbank, zur Generierung von HTML aus Vorlagen und zur Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ebenfalls die Verwendung von Designmustern wie DRY ("don't repeat yourself" — Code möglichst nur einmal schreiben), MVC (Model-View-Controller) und einer Anzahl anderer.

Es gibt natürlich viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, die Entwicklung zu erleichtern, indem es gängige Aufgaben, die in den meisten Webprojekten verwendet werden, erleichtert, wie:

- [Einfacher, schneller Routing-Motor](https://laravel.com/docs/routing).
- [Leistungsstarker Dependency Injection-Container](https://laravel.com/docs/container).
- Mehrere Backends für [Sitzung](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache) Speicherung.
- Ausdrucksstarke, intuitiv [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Hintergrundjob-Verarbeitung](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber dennoch leistungsstark und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open Source-Web-Framework von Microsoft für den Aufbau moderner Webanwendungen und Dienstleistungen. Mit ASP.NET können Sie schnell Websites basierend auf HTML, CSS und JavaScript erstellen, sie für Millionen von Benutzern skalieren und leicht komplexere Funktionen wie Web-APIs, formularübergreifende Daten oder Echtzeitkommunikationen hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET ist, dass es auf der [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist, was es Programmierern erlaubt, ASP.NET-Code in jeder unterstützten .NET-Sprache zu schreiben (C#, Visual Basic usw.). Wie viele Microsoft-Produkte profitiert es von exzellenten Tools (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Web-Framework der nächsten Generation für die Perl-Programmiersprache.

In den frühen Tagen des Webs haben viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI) gelernt. Es war einfach genug, um ohne großes Sprachwissen anzufangen und leistungsstark genug, um weiter damit zu arbeiten. Mojolicious setzt diese Idee mit hochmodernen Technologien um.

Einige der von Mojolicious bereitgestellten Funktionen sind:

- Ein Echtzeit-Web-Framework, um Einzeldatei-Prototypen leicht in gut strukturierte MVC-Webanwendungen zu verwandeln.
- RESTful-Routen, Plugins, Befehle, Perl-artige Templates, Inhaltsverhandlung, Sitzungsmanagement, Formularvalidierung, Test-Framework, Server für statische Dateien, CGI/[PSGI](https://plackperl.org/) Erkennung und erstklassige Unicode-Unterstützung.
- Eine vollständige HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Langzeitumfrage), Keep-Alive, Verbindungspooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektorunterstützung.
- Sehr saubere, portable und objektorientierte reine Perl-API ohne versteckte Magie.
- Frischer Code, der auf jahrelanger Erfahrung basiert, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl es definitiv nicht das einzige Framework basierend auf [Java](https://www.java.com/) ist, ist es einfach zu verwenden, um eigenständige, produktionsfähige Spring-basierte Anwendungen zu erstellen, die Sie "einfach ausführen" können. Es ist eine geführte Ansicht der Spring-Plattform und Drittanbieter-Bibliotheken, aber es ermöglicht, mit minimalem Aufwand und Konfiguration zu starten.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau größerer Anwendungen, die einen Cloud-Ansatz verwenden. Normalerweise laufen mehrere Anwendungen parallel, die miteinander kommunizieren, wobei einige Benutzerinteraktionen bereitstellen und andere Hintergrundarbeiten ausführen (z. B. Zugriffe auf Datenbanken oder andere Dienste). Load-Balancer helfen bei der Sicherstellung von Redundanz und Zuverlässigkeit oder ermöglichen eine geografisch ausgerichtete Bearbeitung von Benutzeranfragen, um die Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über einige beliebte Frameworks gegeben und Kriterien für die Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten nun zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen. Wenn nicht, dann machen Sie sich keine Sorgen — später im Kurs geben wir Ihnen detaillierte Anleitungen zu Django und Express, um Ihnen einige Erfahrungen mit der tatsächlichen Arbeit mit einem Web-Framework zu geben.

Im nächsten Artikel dieses Moduls werden wir die Richtung leicht ändern und die Websicherheit in Betracht ziehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
