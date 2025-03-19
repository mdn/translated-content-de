---
title: Server-seitige Web-Frameworks
short-title: Server-seitige Frameworks
slug: Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}

Der vorherige Artikel zeigte Ihnen, wie die Kommunikation zwischen Web-Clients und -Servern aussieht, die Natur von HTTP-Anfragen und -Antworten und was eine serverseitige Webanwendung tun muss, um auf Anfragen von einem Webbrowser zu reagieren. Mit diesem Wissen ist es nun an der Zeit zu erkunden, wie Web-Frameworks diese Aufgaben vereinfachen können und Ihnen eine Vorstellung davon zu geben, wie Sie ein Framework für Ihre erste serverseitige Webanwendung auswählen würden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis dafür, wie serverseitiger Code
        HTTP-Anfragen verarbeitet und darauf antwortet (siehe <a
          href="/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
          >Client-Server-Überblick</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie Web-Frameworks die Entwicklung/Wartung von
        serverseitigem Code vereinfachen können und die Leser dazu zu bringen,
        darüber nachzudenken, ein Framework für ihre eigene Entwicklung auszuwählen.
      </td>
    </tr>
  </tbody>
</table>

Die folgenden Abschnitte veranschaulichen einige Punkte anhand von Codefragmenten aus realen Web-Frameworks. Seien Sie nicht beunruhigt, wenn jetzt nicht **alles** Sinn ergibt; wir werden Sie in unseren framework-spezifischen Modulen durch den Code führen.

## Überblick

Server-seitige Web-Frameworks (auch bekannt als "Webanwendungs-Frameworks") sind Software-Frameworks, die es einfacher machen, Webanwendungen zu schreiben, zu warten und zu skalieren. Sie bieten Werkzeuge und Bibliotheken, die gängige Webentwicklungstätigkeiten vereinfachen, einschließlich der Zuordnung von URLs zu geeigneten Handlern, der Interaktion mit Datenbanken, Unterstützung von Sessions und Benutzerautorisierung, Formatierung von Ausgaben (z. B. HTML, JSON, XML) und der Verbesserung der Sicherheit gegen Webangriffe.

Im nächsten Abschnitt wird detaillierter erläutert, wie Web-Frameworks die Webanwendungsentwicklung erleichtern können. Danach erklären wir einige der Kriterien, die Sie bei der Auswahl eines Web-Frameworks verwenden können, und listen einige Ihrer Optionen auf.

## Was kann ein Web-Framework für Sie tun?

Web-Frameworks bieten Werkzeuge und Bibliotheken, um gängige Webentwicklungsoperationen zu vereinfachen. Sie müssen kein serverseitiges Web-Framework verwenden, aber es wird dringend empfohlen — es wird Ihnen das Leben erheblich erleichtern.

In diesem Abschnitt werden einige der Funktionalitäten diskutiert, die häufig von Web-Frameworks bereitgestellt werden (nicht jedes Framework stellt notwendigerweise all diese Funktionen bereit!).

### Arbeiten Sie direkt mit HTTP-Anfragen und -Antworten

Wie wir im letzten Artikel gesehen haben, kommunizieren Webserver und Browser über das HTTP-Protokoll — Server warten auf HTTP-Anfragen vom Browser und geben dann Informationen in HTTP-Antworten zurück. Web-Frameworks ermöglichen es Ihnen, eine vereinfachte Syntax zu schreiben, die serverseitigen Code generieren wird, um mit diesen Anfragen und Antworten zu arbeiten. Das bedeutet, dass Sie eine leichtere Aufgabe haben werden, indem Sie mit einer einfacheren, höherstufigen Codierung arbeiten, anstatt mit niedrigstufigen Netzwerktechniken.

Das folgende Beispiel zeigt, wie dies im Django (Python) Web-Framework funktioniert. Jede "View"-Funktion (ein Anfrage-Handler) erhält ein `HttpRequest`-Objekt, das Anfrageninformationen enthält, und muss ein `HttpResponse`-Objekt mit der formatierten Ausgabe zurückgeben (in diesem Fall ein String).

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

Die meisten Websites bieten eine Reihe unterschiedlicher Ressourcen, die über verschiedene URLs zugänglich sind. Alle diese in einer Funktion zu handhaben, wäre schwer wartbar, daher bieten Web-Frameworks einfache Mechanismen, um URL-Muster bestimmten Handler-Funktionen zuzuordnen. Dieser Ansatz hat auch Vorteile in Bezug auf die Wartung, da Sie die URL ändern können, die zur Bereitstellung einer bestimmten Funktion verwendet wird, ohne den zugrunde liegenden Code ändern zu müssen.

Verschiedene Frameworks verwenden unterschiedliche Mechanismen für die Zuordnung. Zum Beispiel fügt das Flask (Python) Web-Framework Routen zu View-Funktionen mithilfe eines Dekorators hinzu.

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

### Einfachen Zugriff auf Daten in der Anfrage ermöglichen

Daten können in einer HTTP-Anfrage auf verschiedene Weise codiert werden. Eine HTTP-`GET`-Anfrage, um Dateien oder Daten vom Server abzurufen, kann die erforderlichen Daten in URL-Parametern oder innerhalb der URL-Struktur codieren. Eine HTTP-`POST`-Anfrage, um eine Ressource auf dem Server zu aktualisieren, wird stattdessen die Aktualisierungsinformationen als "POST-Daten" im Hauptteil der Anfrage enthalten. Die HTTP-Anfrage kann auch Informationen über die aktuelle Session oder den Benutzer in einem clientseitigen Cookie enthalten.

Web-Frameworks bieten programmsprache-geeignete Mechanismen, um auf diese Informationen zuzugreifen. Zum Beispiel enthält das `HttpRequest`-Objekt, das Django an jede View-Funktion weitergibt, Methoden und Eigenschaften, um auf die Ziel-URL, den Anfragetyp (z. B. ein HTTP-`GET`), `GET`- oder `POST`-Parameter, Cookie- und Sessiondaten usw. zuzugreifen. Django kann auch Informationen weitergeben, die in der Struktur der URL codiert sind, indem es "Erfassungsmuster" im URL-Mapping definiert (siehe das letzte Codefragment im obigen Abschnitt).

### Datenbankzugriff abstrahieren und vereinfachen

Websites verwenden Datenbanken, um Informationen sowohl mit Benutzern zu teilen als auch über Benutzer zu speichern. Web-Frameworks bieten oft eine Datenbankschicht, die Lese-, Schreib-, Abfrage- und Löschoperationen für Datenbanken abstrahiert. Diese Abstraktionsschicht wird als Object-Relational Mapper (ORM) bezeichnet.

Der Einsatz eines ORMs bietet zwei Vorteile:

- Sie können die zugrunde liegende Datenbank ersetzen, ohne notwendigerweise den Code ändern zu müssen, der sie verwendet. Dies ermöglicht es Entwicklern, basierend auf ihrer Nutzung für die Eigenschaften verschiedener Datenbanken zu optimieren.
- Grundlegende Datenvalidierung kann im Rahmen des Frameworks implementiert werden. Dadurch wird es einfacher und sicherer, zu überprüfen, ob Daten im korrekten Typ eines Datenbankfeldes gespeichert werden, das korrekte Format haben (z. B. eine E-Mail-Adresse) und auf keine Weise bösartig sind (Hacker können bestimmte Code-Muster verwenden, um schädliche Dinge wie das Löschen von Datenbankeinträgen zu tun).

Zum Beispiel bietet das Django Web Framework einen ORM und bezeichnet das Objekt, das verwendet wird, um die Struktur eines Eintrags zu definieren, als _Modell_. Das Modell gibt die Feldtypen an, die gespeichert werden sollen, was möglicherweise eine Validierung auf Feldebene darüber ermöglicht, welche Informationen gespeichert werden können (z. B. würde ein E-Mail-Feld nur gültige E-Mail-Adressen zulassen). Die Felddefinitionen können außerdem ihre maximale Größe, Standardwerte, Auswahlmöglichkeiten für Listen, Hilfetext für die Dokumentation, Beschriftungstext für Formulare usw. angeben. Das Modell macht keine Angaben zur zugrunde liegenden Datenbank, da dies eine Konfigurationseinstellung ist, die unabhängig von unserem Code geändert werden kann.

Das erste Code-Fragment unten zeigt ein sehr einfaches Django-Modell für ein `Team`-Objekt. Dies speichert den Teamnamen und die Teamstufe als Zeichenfelder und gibt eine maximale Anzahl von Zeichen an, die für jeden Eintrag gespeichert werden sollen. Die `team_level` ist ein Auswahlelement, daher geben wir auch eine Zuordnung zwischen den anzuzeigenden und zu speichernden Auswahlmöglichkeiten, sowie einem Standardwert an.

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

Das Django-Modell bietet eine einfache Abfrage-API zum Durchsuchen der Datenbank. Dies kann gegen eine Anzahl von Feldern gleichzeitig mithilfe verschiedener Kriterien (z. B. genau, groß-/kleinschreibungssensitiv, größer als usw.) abgleichen und kann komplexe Anweisungen unterstützen (zum Beispiel können Sie eine Suche auf U11-Teams spezifizieren, die einen Teamnamen haben, der mit "Fr" beginnt oder mit "al" endet).

Der zweite Code-Schnipsel zeigt eine View-Funktion (Ressourcen-Handler) zur Anzeige all unserer U09-Teams. In diesem Fall geben wir an, dass wir alle Einträge filtern möchten, bei denen das `team_level`-Feld genau den Text 'U09' hat (beachten Sie unten, wie dieses Kriterium an die `filter()`-Funktion als Argument mit Feldnamen und Übereinstimmungstyp über doppelte Unterstriche übergeben wird: **team_level\_\_exact**).

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

Web-Frameworks bieten oft Vorlagensysteme. Diese ermöglichen es Ihnen, die Struktur eines Ausgabedokuments zu spezifizieren, indem Sie Platzhalter für Daten verwenden, die hinzugefügt werden, wenn eine Seite generiert wird. Vorlagen werden oft verwendet, um HTML zu erstellen, können aber auch andere Arten von Dokumenten erzeugen.

Web-Frameworks bieten oft einen Mechanismus, um es einfach zu machen, andere Formate aus gespeicherten Daten zu generieren, einschließlich {{Glossary("JSON", "JSON")}} und {{Glossary("XML", "XML")}}.

Zum Beispiel ermöglicht es das Django-Vorlagensystem, Variablen mithilfe einer "doppelten Griffklammer"-Syntax zu spezifizieren (z. B. `\{{ variable_name }}`), die beim Rendern einer Seite durch Werte ersetzt werden, die von der View-Funktion übergeben werden. Das Vorlagensystem bietet auch Unterstützung für Ausdrücke (mit dem Syntax: `{% expression %}`), die Vorlagen erlauben, einfache Operationen wie das Iterieren von Listenwerten, die in die Vorlage übergeben werden, durchzuführen.

> [!NOTE]
> Viele andere Vorlagensysteme verwenden eine ähnliche Syntax, z. B.: Jinja2 (Python), handlebars (JavaScript), moustache (JavaScript) usw.

Das unten stehende Codefragment zeigt, wie dies funktioniert. Im Anschluss an das Beispiel "jüngste Mannschaft" aus dem vorherigen Abschnitt, wird der HTML-Vorlage von der View eine Listenvariable namens `youngest_teams` übergeben. Innerhalb des HTML-Skeletts haben wir einen Ausdruck, der zuerst überprüft, ob die Variable `youngest_teams` existiert, und sie dann in einer `for`-Schleife iteriert. Bei jeder Iteration zeigt die Vorlage den `team_name`-Wert des Teams in einem Listenelement an.

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

Zahlreiche Web-Frameworks existieren für fast jede Programmiersprache, die Sie möglicherweise verwenden möchten (wir listen einige der beliebteren Frameworks im folgenden Abschnitt auf). Bei so vielen Auswahlmöglichkeiten kann es schwierig werden herauszufinden, welches Framework den besten Ausgangspunkt für Ihre neue Webanwendung bietet.

Einige der Faktoren, die Ihre Entscheidung beeinflussen können, sind:

- **Anstrengung zu lernen:** Der Aufwand, ein Web-Framework zu erlernen, hängt davon ab, wie vertraut Sie mit der zugrunde liegenden Programmiersprache sind, wie konsistent die API ist, die Qualität der Dokumentation und die Größe und Aktivität der Community. Wenn Sie absolut keine Programmiererfahrung haben, sollten Sie Django in Betracht ziehen (es ist eines der am einfachsten zu erlernenden basierend auf den oben genannten Kriterien). Wenn Sie Teil eines Entwicklungsteams sind, das bereits über umfangreiche Erfahrungen mit einem bestimmten Web-Framework oder einer Programmiersprache verfügt, macht es Sinn, dabei zu bleiben.
- **Produktivität:** Produktivität ist ein Maß dafür, wie schnell Sie neue Funktionen erstellen können, sobald Sie mit dem Framework vertraut sind, und umfasst sowohl den Aufwand, Code zu schreiben als auch zu pflegen (da Sie keine neuen Funktionen schreiben können, solange alte kaputt sind). Viele der Faktoren, die die Produktivität beeinflussen, ähneln denen für den "Aufwand zu lernen" — z. B. Dokumentation, Community, Programmiererfahrung usw. — andere Faktoren sind:

  - _Framework-Zweck/Ursprung_: Einige Web-Frameworks wurden ursprünglich geschaffen, um bestimmte Arten von Problemen zu lösen, und sind immer noch _besser_ darin, Web-Apps mit ähnlichen Einschränkungen zu erstellen. Zum Beispiel wurde Django zur Unterstützung der Entwicklung einer Zeitungswebsite geschaffen, sodass es gut für Blogs und andere Websites geeignet ist, die das Veröffentlichen von Dingen beinhalten. Im Gegensatz dazu ist Flask ein viel leichteres Framework und eignet sich hervorragend für die Erstellung von Web-Apps, die auf eingebetteten Geräten laufen.
  - _Meinungsstark vs. unaufdringlich_: Ein meinungsstarkes Framework ist eines, bei dem es empfohlene "beste" Möglichkeiten gibt, ein bestimmtes Problem zu lösen. Meinungsstarke Frameworks sind in der Regel produktiver, wenn Sie versuchen, häufige Probleme zu lösen, da sie Sie in die richtige Richtung lenken, aber manchmal sind sie weniger flexibel.
  - _Batterien inklusive vs. selbst beschaffen_: Einige Web-Frameworks enthalten standardmäßig Werkzeuge/Bibliotheken, die jedes Problem ihrer Entwickler ansprechen können, während leichtere Frameworks erwarten, dass Webentwickler Lösungen für Probleme aus separaten Bibliotheken auswählen (Django ist ein Beispiel für ersteres, während Flask ein Beispiel für ein sehr leichtgewichtiges Framework ist). Frameworks, die alles enthalten, sind oft einfacher zu starten, weil Sie bereits alles haben, was Sie brauchen, und die Chancen stehen gut, dass es gut integriert und gut dokumentiert ist. Wenn jedoch ein kleineres Framework alles hat, was Sie (je) benötigen, dann kann es in eingeschränkteren Umgebungen laufen und wird eine kleinere und einfachere Untermenge von Dingen zu lernen haben.
  - _Ob das Framework gute Entwicklungspraktiken fördert oder nicht_: Zum Beispiel, ein Framework, das eine {{Glossary("MVC", "Model-View-Controller")}}-Architektur zur Trennung des Codes in logische Funktionen fördert, wird zu wartbarem Code führen als eines, das keine Erwartungen an die Entwickler hat. Ebenso kann das Design des Frameworks einen großen Einfluss darauf haben, wie einfach es ist, Code zu testen und wiederzuverwenden.

- **Leistung des Frameworks/der Programmiersprache:** Normalerweise ist "Geschwindigkeit" nicht der größte Faktor bei der Auswahl, da selbst relativ langsame Laufzeiten wie Python mehr als "gut genug" für mittelgroße Seiten sind, die auf moderater Hardware laufen. Die wahrgenommenen Geschwindigkeitsvorteile einer anderen Sprache, z. B. C++ oder JavaScript, können durchaus durch die Kosten des Lernens und der Wartung ausgeglichen werden.
- **Caching-Unterstützung:** Wenn Ihre Website erfolgreicher wird, stellen Sie möglicherweise fest, dass sie mit der Anzahl der eingehenden Anfragen, die sie erhält, nicht mehr umgehen kann. Zu diesem Zeitpunkt sollten Sie in Betracht ziehen, Unterstützung für Caching hinzuzufügen. Caching ist eine Optimierung, bei der Sie eine ganze oder einen Teil einer Web-Antwort speichern, damit sie bei nachfolgenden Anfragen nicht neu berechnet werden muss. Das Zurückgeben einer zwischengespeicherten Antwort ist viel schneller, als eine neue zu berechnen. Caching kann in Ihrem Code oder auf dem Server implementiert werden (siehe [Reverse Proxy](https://de.wikipedia.org/wiki/Reverse_Proxy)). Web-Frameworks haben unterschiedliche Niveaus der Unterstützung dafür, zu definieren, welche Inhalte zwischengespeichert werden können.
- **Skalierbarkeit:** Sobald Ihre Website fantastischen Erfolg hat, werden Sie die Vorteile des Cachings erschöpfen und sogar die Grenzen des _vertikalen Skalierens_ erreichen (Ihre Webanwendung auf leistungsfähigerer Hardware betreiben). An diesem Punkt müssen Sie möglicherweise _horizontal skalieren_ (die Last teilen, indem Sie Ihre Website auf eine Reihe von Webservern und Datenbanken verteilen) oder "geografisch" skalieren, weil einige Ihrer Kunden weit entfernt von Ihrem Server ansässig sind. Das Web-Framework, das Sie wählen, kann einen großen Unterschied machen, wie einfach es ist, Ihre Website zu skalieren.
- **Websicherheit:** Einige Web-Frameworks bieten eine bessere Unterstützung für den Umgang mit häufigen Webangriffen. Django zum Beispiel bereinigt alle Benutzereingaben aus HTML-Vorlagen, damit vom Benutzer eingegebener JavaScript-Code nicht ausgeführt werden kann. Andere Frameworks bieten ähnliche Schutzmechanismen, diese sind jedoch nicht immer standardmäßig aktiviert.

Es gibt viele andere mögliche Faktoren, einschließlich der Lizenzierung, ob das Framework aktiv entwickelt wird, usw.

Wenn Sie ein absoluter Anfänger in der Programmierung sind, werden Sie Ihr Framework wahrscheinlich basierend auf der "Einfachheit des Lernens" auswählen. Zusätzlich zur "Einfachheit der Nutzung" der Sprache selbst, sind hochwertige Dokumentation/Tutorials und eine aktive Community, die neuen Benutzern hilft, Ihre wertvollsten Ressourcen. Wir haben [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) ausgewählt, um unsere Beispiele später im Kurs zu schreiben, hauptsächlich weil sie einfach zu erlernen sind und gute Unterstützung haben.

> [!NOTE]
> Besuchen Sie die Haupt-Websites von [Django](https://www.djangoproject.com/) (Python) und [Express](https://expressjs.com/) (Node/JavaScript) und prüfen Sie deren Dokumentation und Community.
>
> 1. Navigieren Sie zu den Hauptseiten (oben verlinkt)
>
>    - Klicken Sie auf die Dokumentations-Menülinks (mit Bezeichnungen wie "Documentation, Guide, API Reference, Getting Started", etc.).
>    - Sehen Sie Themen, die zeigen, wie URL-Routing, Vorlagen und Datenbanken/Modelle eingerichtet werden?
>    - Sind die Dokumente klar?
>
> 2. Navigieren Sie zu den Mailinglisten für jede Seite (über die Community-Links zugänglich).
>
>    - Wie viele Fragen wurden in den letzten Tagen gestellt?
>    - Wie viele davon haben Antworten?
>    - Haben sie eine aktive Community?

## Einige gute Web-Frameworks?

Lassen Sie uns nun fortfahren und einige spezifische serverseitige Web-Frameworks diskutieren.

Die folgenden serverseitigen Frameworks stellen _einige_ der beliebtesten zum Zeitpunkt des Schreibens dar. Alle bieten alles, was Sie benötigen, um produktiv zu sein — sie sind Open Source, werden aktiv weiterentwickelt, haben begeisterte Communities, die Dokumentation erstellen und Benutzern in Diskussionsforen helfen, und werden in einer großen Anzahl hochkarätiger Websites eingesetzt. Es gibt viele andere großartige serverseitige Frameworks, die Sie mittels einer grundlegenden Internetrecherche entdecken können.

> [!NOTE]
> Die Beschreibungen stammen (teilweise) von den Websites der Frameworks selbst!

### Django (Python)

[Django](https://www.djangoproject.com/) ist ein hochentwickeltes Python-Web-Framework, das schnelle Entwicklung und sauberes, pragmatisches Design fördert. Es wurde von erfahrenen Entwicklern erstellt und nimmt Ihnen viele der mühsamen Aufgaben der Webentwicklung ab, so dass Sie sich auf das Schreiben Ihrer App konzentrieren können, ohne das Rad neu erfinden zu müssen. Es ist kostenlos und Open Source.

Django folgt der "Batterien inklusive"-Philosophie und liefert fast alles, was die meisten Entwickler tun wollen, "out of the box". Da alles enthalten ist, funktioniert alles zusammen, folgt konsistenten Designprinzipien und hat eine umfangreiche und aktuelle Dokumentation. Es ist auch schnell, sicher und sehr skalierbar. Da es auf Python basiert, ist Django-Code einfach zu lesen und zu pflegen.

Bekannte Seiten, die Django nutzen (von der Django-Homepage), sind unter anderem: Disqus, Instagram, Knight Foundation, MacArthur Foundation, Mozilla, National Geographic, Open Knowledge Foundation, Pinterest, Open Stack.

### Flask (Python)

[Flask](https://flask.palletsprojects.com/) ist ein Mikroframework für Python.

Obwohl minimalist, kann Flask ernsthafte Websites aus dem Stand erstellen. Es enthält einen Entwicklungsserver und Debugger und bietet Unterstützung für [Jinja2](https://github.com/pallets/jinja) Templating, sichere Cookies, [Unit Testing](https://de.wikipedia.org/wiki/Unit_Testing) und [RESTful](https://restapitutorial.com/) Request-Dispatching. Es verfügt über eine gute Dokumentation und eine aktive Community.

Flask ist besonders bei Entwicklern beliebt geworden, die Webdienste auf kleinen, ressourcenbeschränkten Systemen bereitstellen müssen (z. B. den Betrieb eines Webservers auf einem [Raspberry Pi](https://www.raspberrypi.org/), [Drohnen-Controllern](https://www.techuseful.com/drone-definitions-learning-the-drone-lingo/) usw.).

### Express (Node.js/JavaScript)

[Express](https://expressjs.com/) ist ein schnelles, unaufdringliches, flexibles und minimalistisches Web-Framework für [Node.js](https://nodejs.org/en/) (Node ist eine umgebung für das Ausführen von JavaScript ohne Browser). Es bietet eine robuste Reihe von Funktionen für Web- und Mobilanwendungen und liefert nützliche HTTP-Dienstprogrammmethoden und {{Glossary("Middleware", "Middleware")}}.

Express ist extrem beliebt, teilweise weil es den Übergang von Client-seitigen JavaScript-Web-Programmierern zur serverseitigen Entwicklung erleichtert und teilweise, weil es ressourceneffizient ist (die zugrunde liegende Node-Umgebung nutzt leichtgewichtiges Multitasking innerhalb eines Threads, anstatt separate Prozesse für jede neue Webanfrage zu starten).

Da Express ein minimalistisches Web-Framework ist, enthält es nicht alle Komponenten, die Sie möglicherweise verwenden möchten (zum Beispiel werden Datenbankzugriff und Unterstützung für Benutzer und Sitzungen durch unabhängige Bibliotheken bereitgestellt). Es gibt viele ausgezeichnete unabhängige Komponenten, aber manchmal kann es schwierig sein herauszufinden, welches für einen bestimmten Zweck am besten geeignet ist!

Viele beliebte serverseitige und Full-Stack-Frameworks (bestehend aus sowohl server- als auch clientseitigen Frameworks) basieren auf Express, darunter [Feathers](https://feathersjs.com/), [ItemsAPI](https://itemsapi.com/), [KeystoneJS](https://keystonejs.com/), [Kraken](https://krakenjs.com/), [LoopBack](https://loopback.io/), [MEAN](https://github.com/linnovate/mean) und [Sails](https://sailsjs.com/).

Viele bekannte Unternehmen nutzen Express, darunter: Uber, Accenture, IBM, usw.

### Deno (JavaScript)

[Deno](https://deno.com/) ist ein einfaches, modernes und sicheres [JavaScript](/de/docs/Web/JavaScript)/TypeScript-Laufzeit- und Framework, das sich auf Chrome V8 und [Rust](https://www.rust-lang.org/) aufbaut.

Deno wird von [Tokio](https://tokio.rs/) betrieben — einem auf Rust basierenden asynchronen Laufzeit, die es ermöglicht, Webseiten schneller zu bedienen. Es bietet auch interne Unterstützung für [WebAssembly](/de/docs/WebAssembly), was es möglich macht, Binärcode für die Verwendung auf der Client-Seite zu kompilieren. Deno zielt darauf ab, einige der Schwachstellen in [Node.js](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework) durch die Bereitstellung eines Mechanismus zu schließen, der natürlich eine bessere Sicherheit aufrechterhält.

Die Funktionen von Deno umfassen:

- Sicherheit standardmäßig. [Deno-Module beschränken Berechtigungen](https://docs.deno.com/runtime/fundamentals/security/) auf **Datei**, **Netzwerk** oder **Umgebungs**zugriff, es sei denn, diese werden ausdrücklich erlaubt.
- TypeScript-Unterstützung **out-of-the-box**.
- Mechanismus für erstklassige Wartezeiten.
- Eingebaute Testeinrichtung und Code-Formatter (`deno fmt`).
- (JavaScript) Browser-Kompatibilität: Deno-Programme, die vollständig in JavaScript ohne den `Deno`-Namespace geschrieben sind (oder darauf testen), sollten direkt in jedem modernen Browser funktionieren.
- Skript-Bündelung in eine einzelne JavaScript-Datei.

Deno bietet eine einfache, aber leistungsstarke Möglichkeit, JavaScript sowohl für Client- als auch für serverseitige Programmierung zu verwenden.

### Ruby on Rails (Ruby)

[Rails](https://rubyonrails.org/) (in der Regel als "Ruby on Rails" bezeichnet) ist ein Web-Framework für die Ruby-Programmiersprache.

Rails folgt einer sehr ähnlichen Designphilosophie wie Django. Wie Django bietet es standardisierte Mechanismen für das Routing von URLs, den Zugriff auf Daten aus einer Datenbank, die Erzeugung von HTML aus Vorlagen und die Formatierung von Daten als {{Glossary("JSON", "JSON")}} oder {{Glossary("XML", "XML")}}. Es fördert ebenso wie die Verwendung von Designpatterns wie DRY ("don't repeat yourself" — schreiben Sie Code nach Möglichkeit nur einmal), MVC (Model-View-Controller) und mehrere andere.

Es gibt natürlich viele Unterschiede aufgrund spezifischer Designentscheidungen und der Natur der Sprachen.

Rails wurde für hochkarätige Websites verwendet, darunter: [Basecamp](https://basecamp.com/), [GitHub](https://github.com/), [Shopify](https://www.shopify.com/), [Airbnb](https://www.airbnb.com/), [Twitch](https://www.twitch.tv/), [SoundCloud](https://soundcloud.com/), [Hulu](https://www.hulu.com/welcome), [Zendesk](https://www.zendesk.com/), [Square](https://squareup.com/us/en), [Highrise](https://highrisehq.com/).

### Laravel (PHP)

[Laravel](https://laravel.com/) ist ein Webanwendungs-Framework mit ausdrucksstarker, eleganter Syntax. Laravel versucht, den Schmerz aus der Entwicklung zu nehmen, indem es gängige Aufgaben erleichtert, die bei den meisten Webprojekten verwendet werden, wie zum Beispiel:

- [Einfacher, schneller Routing-Engine](https://laravel.com/docs/routing).
- [Leistungsstarker Abhängigkeits-Injektionsbehälter](https://laravel.com/docs/container).
- Mehrere Backends für [Session](https://laravel.com/docs/session) und [Cache](https://laravel.com/docs/cache) Speicherung.
- Ausdrucksstarkes, intuitives [Datenbank-ORM](https://laravel.com/docs/eloquent).
- Datenbankunabhängige [Schema-Migrationen](https://laravel.com/docs/migrations).
- [Robuste Verarbeitung von Hintergrundjobs](https://laravel.com/docs/queues).
- [Echtzeit-Ereignisübertragung](https://laravel.com/docs/broadcasting).

Laravel ist zugänglich, aber leistungsstark und bietet die Werkzeuge, die für große, robuste Anwendungen benötigt werden.

### ASP.NET

[ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet) ist ein Open-Source-Web-Framework, das von Microsoft für den Bau moderner Webanwendungen und -dienste entwickelt wurde. Mit ASP.NET können Sie schnell Websites basierend auf HTML, CSS und JavaScript erstellen, sie für Millionen von Benutzern skalieren und leicht komplexere Funktionen wie Web-APIs, Formulare über Daten oder Echtzeit-Kommunikation hinzufügen.

Einer der Unterscheidungsmerkmale von ASP.NET besteht darin, dass es auf dem [Common Language Runtime](https://de.wikipedia.org/wiki/Common_Language_Runtime) (CLR) aufgebaut ist, sodass Programmierer ASP.NET-Code mit jeder unterstützten .NET-Sprache (C#, Visual Basic usw.) schreiben können. Wie viele Microsoft-Produkte profitiert es von ausgezeichneten Werkzeugen (oft kostenlos), einer aktiven Entwickler-Community und gut geschriebener Dokumentation.

ASP.NET wird von Microsoft, Xbox.com, Stack Overflow und vielen anderen verwendet.

### Mojolicious (Perl)

[Mojolicious](https://mojolicious.org/) ist ein Next-Generation-Web-Framework für die Perl-Programmiersprache.

In den frühen Tagen des Webs lernten viele Menschen Perl wegen einer wunderbaren Perl-Bibliothek namens [CGI](https://metacpan.org/pod/CGI). Es war einfach genug, um ohne viel Wissen über die Sprache zu beginnen, und mächtig genug, um Sie weiterzumachen. Mojolicious implementiert diese Idee mit modernsten Technologien.

Einige der von Mojolicious angebotenen Funktionen sind:

- Ein Echtzeit-Web-Framework, um leicht einprototypische Einzelfile in gut strukturierte MVC-Webanwendungen zu verwandeln.
- RESTful-Routen, Plugins, Befehle, Perl-ähnliche Vorlagen, Inhaltsaushandlung, Sitzungsverwaltung, Formularvalidierung, Testframework, statischer Dateiserver, CGI/[PSGI](https://plackperl.org/) Erkennung und erstklassige Unicode-Unterstützung.
- Eine Voll-Stack HTTP- und WebSocket-Client/Server-Implementierung mit IPv6, TLS, SNI, IDNA, HTTP/SOCKS5-Proxy, UNIX-Domain-Socket, Comet (Long Polling), Keep-Alive, Connection Pooling, Timeout, Cookie, Multipart und Gzip-Kompressionsunterstützung.
- JSON- und HTML/XML-Parser und -Generatoren mit CSS-Selektor-Unterstützung.
- Sehr saubere, portable und objektorientierte reine-Perl-API ohne versteckte Magie.
- Frischer Code, basierend auf jahrelanger Erfahrung, kostenlos und Open Source.

### Spring Boot (Java)

[Spring Boot](https://spring.io/projects/spring-boot/) ist eines von mehreren Projekten, die von [Spring](https://spring.io/) bereitgestellt werden. Es ist ein guter Ausgangspunkt für die serverseitige Webentwicklung mit [Java](https://www.java.com/).

Obwohl definitiv nicht das einzige Framework, das auf [Java](https://www.java.com/) basiert, ist es einfach zu verwenden, um eigenständige, produktionsreife Spring-basierte Anwendungen zu erstellen, die Sie "einfach ausführen" können. Es ist eine meinungsstarke Sicht der Spring-Plattform und Drittanbieter-Bibliotheken, ermöglicht es jedoch, mit minimalem Aufwand und Konfiguration zu beginnen.

Es kann für kleine Probleme verwendet werden, aber seine Stärke liegt im Aufbau größerer Anwendungen, die einen Cloud-Ansatz verwenden. Üblicherweise laufen mehrere Anwendungen parallel und sprechen miteinander, einige bieten Benutzerinteraktion, während andere Backend-Arbeiten ausführen (z. B. Zugriff auf Datenbanken oder andere Dienste). Load Balancer helfen, Redundanz und Zuverlässigkeit sicherzustellen oder ermöglichen eine geolokalisierte Bearbeitung von Benutzeranfragen, um die Reaktionsfähigkeit sicherzustellen.

## Zusammenfassung

Dieser Artikel hat gezeigt, dass Web-Frameworks die Entwicklung und Wartung von serverseitigem Code erleichtern können. Er hat auch einen Überblick über einige beliebte Frameworks geboten und Kriterien für die Auswahl eines Webanwendungs-Frameworks diskutiert. Sie sollten jetzt zumindest eine Vorstellung davon haben, wie Sie ein Web-Framework für Ihre eigene serverseitige Entwicklung auswählen können. Falls nicht, dann machen Sie sich keine Sorgen — später im Kurs werden wir Ihnen detaillierte Tutorials zu Django und Express geben, um Ihnen einige Erfahrungen im tatsächlichen Arbeiten mit einem Web-Framework zu vermitteln.

Für den nächsten Artikel in diesem Modul werden wir die Richtung leicht ändern und die Websicherheit betrachten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", "Learn_web_development/Extensions/Server-side/First_steps/Website_security", "Learn_web_development/Extensions/Server-side/First_steps")}}
